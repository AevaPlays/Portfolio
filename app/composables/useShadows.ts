type ShadowVariants = Record<'light' | 'dark', string>

export function useShadows() {
    const appConfig = useAppConfig()
    const colorMode = useColorMode()

    return computed(() => {
        const mode = colorMode.value === 'dark' ? 'dark' : 'light'
        const entries = Object.entries(appConfig.shadows) as [string, ShadowVariants][]
        return Object.fromEntries(entries.map(([key, variants]) => [key, variants[mode]]))
    })
}
