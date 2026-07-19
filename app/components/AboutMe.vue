<script setup lang="ts">
import { ref } from 'vue'

const shadows = useShadows()
const appConfig = useAppConfig()

const hearts = appConfig.marcelHearts

const marcelRevealed = ref(false)
let marcelTimeout: ReturnType<typeof setTimeout> | null = null

function revealMarcel() {
    marcelRevealed.value = true
    if (marcelTimeout) clearTimeout(marcelTimeout)
    marcelTimeout = setTimeout(() => {
        marcelRevealed.value = false
    }, 2500)
}
</script>

<template>
    <section id="about" class="page-section">
        <h1 class="title align-left">{{ $t('about.title') }}</h1>
        <div class="flex md:flex-row flex-col justify-between items-start">
            <p class="text-[var(--color-heading)] text-xl max-w-[700px] p-4">
                {{ $t('about.paragraph1') }}
                <br /><br />
                {{ $t('about.paragraph2') }}
            </p>
            <div class="relative self-center mx-auto md:mx-0 md:mr-8 flex-shrink-0">
                <img
                    class="md:w-[25rem] md:h-[25rem] xl:w-[30rem] xl:h-[30rem] w-64 h-64 object-cover border-[10px] border-[var(--color-surface-elevated)] rounded-[10%] cursor-pointer"
                    src="/Marcel.png"
                    alt="Marcel"
                    :style="{ boxShadow: shadows.image }"
                    @click="revealMarcel"
                />

                <Transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="opacity-0 scale-75 translate-y-2"
                    enter-to-class="opacity-100 scale-100 translate-y-0"
                    leave-active-class="transition duration-150 ease-in"
                    leave-from-class="opacity-100 scale-100 translate-y-0"
                    leave-to-class="opacity-0 scale-75 translate-y-2"
                >
                    <div
                        v-if="marcelRevealed"
                        class="absolute left-1/2 -translate-x-1/2 top-full mt-3 md:top-auto md:bottom-full md:mt-0 md:mb-3 whitespace-nowrap rounded-2xl bg-[var(--color-surface-elevated)] px-4 py-2 text-sm font-semibold text-[var(--color-heading)] shadow-lg"
                    >
                        {{ $t('about.marcelCaption') }}
                    </div>
                </Transition>

                <Transition
                    v-for="(heart, i) in hearts"
                    :key="i"
                    enter-active-class="transition-opacity duration-300 ease-out"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition-opacity duration-300 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div
                        v-if="marcelRevealed"
                        class="pointer-events-none absolute flex text-[var(--color-accent-text)]"
                        :class="heart.size"
                        :style="{
                            left: heart.left,
                            top: heart.top,
                            transform: `translate(-50%, -50%) rotate(${heart.rotate}deg)`,
                            transitionDelay: `${heart.delay}ms`
                        }"
                    >
                        <Icon name="i-lucide-heart" />
                    </div>
                </Transition>
            </div>
        </div>
    </section>
</template>
