import { z } from 'zod'

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, 'Ingresa al menos 3 caracteres.')
    .max(60, 'El nombre no puede superar los 60 caracteres.')
    .regex(
      /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?: [A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*$/,
      'Usa solo letras y espacios, sin números ni símbolos.',
    )
    .refine((value) => value.split(/\s+/).length >= 2, {
      message: 'Ingresa tu nombre y apellido.',
    }),

  email: z
    .string()
    .trim()
    .min(1, 'El correo electrónico es obligatorio.')
    .max(100, 'El correo no puede superar los 100 caracteres.')
    .regex(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/,
      'Ingresa un correo electrónico válido (ejemplo: nombre@dominio.com).',
    )
    .refine((value) => !value.endsWith('.'), {
      message: 'El correo no puede terminar en punto.',
    }),
})

export type LeadFormValues = z.infer<typeof leadFormSchema>
