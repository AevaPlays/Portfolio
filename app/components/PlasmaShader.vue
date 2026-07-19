<script setup lang="ts">
import { computed } from 'vue'
import { Shader, Plasma } from 'shaders/vue'

const appConfig = useAppConfig()
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const plasmaConfig = appConfig.plasma.headerDecor
const stops = computed(() => isDark.value ? plasmaConfig.dark.stops : plasmaConfig.light.stops)
</script>

<template>
    <div class="absolute inset-0">
        <div class="absolute inset-0 bg-cover bg-center bg-[url('/plasma_mobile_light.png')] dark:bg-[url('/plasma_mobile_dark.png')]" />
        <ClientOnly>
            <Shader :key="isDark ? 'dark' : 'light'" class="absolute inset-0 w-full h-full">
                <Plasma
                    :stops="stops"
                    :density="plasmaConfig.density"
                    :speed="plasmaConfig.speed"
                    :intensity="plasmaConfig.intensity"
                    :warp="plasmaConfig.warp"
                    :contrast="plasmaConfig.contrast"
                    :balance="plasmaConfig.balance"
                />
            </Shader>
        </ClientOnly>
    </div>
</template>
