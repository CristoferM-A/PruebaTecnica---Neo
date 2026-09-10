# Landing experimental BCP — Test A/B de banner principal

Landing de tarjetas de crédito que muestra dos variantes del banner principal,
registra las interacciones en `window.dataLayer` y las envía a GA4 mediante
Google Tag Manager.

**Demo:** https://USUARIO.github.io/REPO/

> Proyecto de demostración con fines de evaluación técnica. No está afiliado al
> Banco de Crédito del Perú.

---

## Hipótesis y objetivo

**Hipótesis**

> Modificar el color y el mensaje del banner principal puede aumentar el
> porcentaje de clics (CTR) hacia el formulario de solicitud.

**Objetivo**

Determinar cuál de las dos variantes genera mayor CTR hacia el formulario,
midiendo cada interacción con GTM para poder decidir con datos y no por
preferencia estética.

**Variantes**

| | Variante A (control) | Variante B (retadora) |
|---|---|---|
| Fondo | Azul `#002A8D` | Naranja `#FF7800` |
| CTA | **Solicita ahora** | **Aplica ya** |
| Mensaje | "¡Nuevo! Ahora tú decides la línea de tu tarjeta de crédito" | "Tu nueva tarjeta de crédito aprobada en solo 10 minutos" |
| Enfoque | Novedad / control | Urgencia / inmediatez |

El resto de la página es **idéntico** en ambas variantes. Es la condición para
que cualquier diferencia de CTR sea atribuible al banner y no a otra cosa.

**Métrica primaria:** CTR = `click_cta` / `view_banner`
**Métrica secundaria:** conversión = `submit_form` / `view_banner`

---

## Cómo ver las dos variantes

Al entrar se asigna una variante al azar y **queda fija para ese navegador**. Para
ver la otra sin borrar nada:

| Qué quieres | Cómo |
|---|---|
| Ver la variante A | `?variant=A` |
| Ver la variante B | `?variant=B` |
| Ver el panel de diagnóstico | `?debug=1` |
| Ambas cosas | `?variant=B&debug=1` |

El panel de diagnóstico muestra la variante activa, de dónde salió (sorteo,
storage u override), el identificador anónimo del visitante y si el tráfico está
marcado como QA. Incluye un botón para borrar la asignación y volver a sortear.

Para simular un visitante nuevo: DevTools → Application → Local Storage → borrar
la clave `bcp_exp:bcp_banner_test_v1` y recargar.

---

## Asignación de la variante

La variante se decide en este orden:

```
1. ¿Hay ?variant= en la URL?   → se usa, se marca como QA y NO se guarda
2. ¿Hay una asignación previa? → se reutiliza
3. Si no                       → se sortea y se guarda
```

Tres decisiones que conviene explicar:

**Se asigna por visitante, no por sesión.** Un cambio de color y mensaje deja
memoria en quien lo ve. Si se re-sorteara en cada sesión, la misma persona vería
A un día y B al siguiente: su comportamiento en B estaría contaminado por haber
visto A, y las pruebas de significancia —que asumen observaciones
independientes— darían una certeza falsa.

**El sorteo usa un hash determinista (FNV-1a), no `Math.random()`.** El mismo
identificador cae siempre en el mismo grupo, lo que hace el reparto reproducible
y auditable. Verificado sobre 200.000 visitantes simulados: **49,98 % / 50,02 %**.

**La variante se resuelve antes del primer render.** Si se decidiera después, el
usuario vería el banner azul saltar a naranja. Ese parpadeo arruina la
experiencia y contamina la medición.

---

## Implementación del tracking

### Captura del código

> `![Captura del evento GTM](captura-evento-gtm.png)`

Archivo: [`src/tracking/dataLayer.ts`](src/tracking/dataLayer.ts)

Ejemplo del objeto que llega a GTM:

```js
{
  event: 'experiment_event',
  experimentId: 'bcp_banner_test_v1',
  action: 'click_cta',
  variant: 'A',
  label: 'Solicita ahora',
  visitorId: '4cd66a0b-2205-43fa-801c-f1988bd10624',
  qaMode: false
}
```

### Eventos registrados

| `action` | Cuándo | Para qué sirve |
|---|---|---|
| `view_banner` | Al cargar, **una sola vez** | Denominador del CTR |
| `click_cta` | Clic en el CTA del banner | Numerador del CTR |
| `view_form` | El formulario entra en pantalla | Distingue "hizo clic" de "llegó" |
| `submit_form` | Envío con datos válidos | Conversión |
| `form_error` | Envío con errores de validación | Fricción del formulario |


### Exclusión del tráfico de pruebas

Cuando la variante viene forzada por URL o el modo debug está activo, el evento
viaja con `qaMode: true` y GTM bloquea el envío mediante una excepción.

Es imprescindible: las impresiones y clics de QA inflan el numerador de la tasa
de conversión y destruyen la significancia. Las plataformas de experimentación
hacen esto de fábrica con su tráfico de preview; aquí se implementa
explícitamente.

---

## Análisis de resultados

Con los eventos en GA4, la lectura sería así:

**1. Comprobar la salud del experimento antes de mirar nada más.** El reparto
real debe ser ~50/50. Una desviación significativa (*Sample Ratio Mismatch*)
indica un fallo de implementación e invalida el experimento, por muy bonitos que
sean los números.

**2. Calcular el CTR por variante:**

```
CTR = usuarios con click_cta / usuarios con view_banner
```

Por **usuarios**, no por eventos: la unidad de análisis debe coincidir con la
unidad de aleatorización.

**3. Contrastar la diferencia.** Un test de proporciones de dos colas sobre los
dos CTR. Sin significancia estadística, la diferencia observada no distingue una
mejora real del ruido.

**4. Revisar el embudo completo**, no solo el CTR. Con `view_form` y
`submit_form` se puede detectar el caso incómodo: una variante que consigue más
clics pero menos envíos, porque atrae a gente con menos intención real. El CTR
por sí solo lo escondería.

---

## Stack

| Herramienta | Uso |
|---|---|
| React 18 + TypeScript | Interfaz y tipado del experimento y los eventos |
| Vite | Build y servidor de desarrollo |
| CSS puro | Estilos, sin framework, un archivo por sección |
| react-hook-form + zod | Formulario y validación |
| Google Tag Manager | Captura de eventos y envío a GA4 |

El formulario lleva `noValidate` para desactivar los mensajes del navegador y
mostrar los propios. Las reglas son más estrictas que las nativas: el correo
`a@b` es válido para un `<input type="email">` y aquí se rechaza.

---

## Ejecutar en local

```bash
npm install
npm run dev
```

| Comando | Acción |
|---|---|
| `npm run dev` | Servidor de desarrollo en `http://localhost:5173` |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build de producción |
| `npm run typecheck` | Verificación de tipos |

---

## Publicación en GitHub Pages

1. **Settings → Pages → Source: GitHub Actions**
2. Ajustar `REPO_NAME` en `vite.config.ts` para que coincida con el nombre del
   repositorio (Vite necesita `base: '/<repo>/'` para resolver los assets).
3. Push a `main`.
