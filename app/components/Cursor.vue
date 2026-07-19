<script setup lang="ts">
import { Shader, CursorTrail } from 'shaders/vue'

const appConfig = useAppConfig()
const cursorTrailConfig = appConfig.cursorTrail
</script>

<template>
    <ClientOnly>
        <div class="pointer-events-none fixed inset-0 z-[2000]" :style="{ opacity: cursorTrailConfig.opacity / 100 }">
            <Shader class="w-full h-full">
                <CursorTrail
                    :stops="cursorTrailConfig.stops"
                    :radius="cursorTrailConfig.radius"
                    :shrink="cursorTrailConfig.shrink"
                    :length="cursorTrailConfig.length"
                />
            </Shader>
        </div>
    </ClientOnly>
</template>
