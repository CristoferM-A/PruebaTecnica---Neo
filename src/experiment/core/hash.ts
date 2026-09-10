export function fnv1a32(input: string): number {
  let hash = 0x811c9dc5
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193)
  }
  return hash >>> 0
}

export function bucketOf(visitorId: string, salt: string): number {
  return fnv1a32(`${salt}:${visitorId}`) % 100
}
