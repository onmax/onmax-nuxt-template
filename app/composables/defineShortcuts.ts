export function defineShortcuts(shortcuts: Record<string, () => void>) {
  const keys = useMagicKeys()

  for (const [combo, callback] of Object.entries(shortcuts))
    watch(() => keys[combo], (pressed) => { pressed && callback() })
}
