<script setup lang="ts">
const shadows = useShadows()
</script>

<template>
    <div>
        <div class="w-full bg-[url('/pixel_decor_light.jpg')] dark:bg-[url('/pixel_decor.jpg')] bg-cover bg-center flex flex-row md:min-h-[40em] min-h-0">
            <div
                class="md:w-[40%] w-full bg-[var(--color-accent-bg)] p-8 shadow-none md:shadow-[var(--decor-shadow)]"
                :style="{ '--decor-shadow': shadows.headerDecor }"
            >
                <div class="flex flex-col gap-4">
                    <img
                        class="md:w-64 md:h-64 w-32 h-32 rounded-full border-[10px] border-[var(--color-accent-text)] object-cover"
                        src="https://github.com/AevaPlays.png"
                        alt="Amira Erte"
                        :style="{ boxShadow: shadows.image }"
                    />
                    <p class="md:text-4xl text-2xl text-[var(--color-accent-text)]">{{ $t('header.name') }}</p>
                    <p class="md:text-base text-sm text-[var(--color-accent-text)]">
                        {{ $t('header.role') }}
                    </p>
                    <p class="md:text-2xl text-lg text-[var(--color-accent-text)]">
                        {{ $t('header.intro') }}
                    </p>
                    <UButton
                        variant="neutral"
                        to="/AmiraErte_cv.pdf"
                        external
                        download
                        icon="i-lucide-download"
                        :style="{ boxShadow: shadows.button }"
                    >
                        {{ $t('about.downloadCv') }}
                    </UButton>
                </div>
            </div>
        </div>
        <div
            class="md:hidden w-full h-64 bg-[url('/pixel_decor_mobile_light.jpg')] dark:bg-[url('/pixel_decor_mobile.jpg')] bg-cover bg-center"
            :style="{ boxShadow: shadows.headerDecorMobile }"
        ></div>
    </div>
</template>
