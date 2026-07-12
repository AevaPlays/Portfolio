<template>
    <div>
        <div class="w-full bg-[url('/pixel_decor_light.jpg')] dark:bg-[url('/pixel_decor.jpg')] bg-cover bg-center flex flex-row md:min-h-[40em] min-h-0">
            <div class="md:w-[40%] w-full bg-[var(--color-accent-bg)] p-8">
                <div class="flex flex-col gap-4">
                    <img class="md:w-64 md:h-64 w-32 h-32 rounded-full border-[10px] border-[var(--color-accent-text)] object-cover" src="https://github.com/AevaPlays.png" alt="Amira Erte" />
                    <p class="md:text-4xl text-2xl text-[var(--color-accent-text)]">{{ $t('header.name') }}</p>
                    <p class="md:text-base text-sm text-[var(--color-accent-text)]">
                        {{ $t('header.role') }}
                    </p>
                    <p class="md:text-2xl text-lg text-[var(--color-accent-text)]">
                        {{ $t('header.intro') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="md:hidden w-full h-64 bg-[url('/pixel_decor_mobile_light.jpg')] dark:bg-[url('/pixel_decor_mobile.jpg')] bg-cover bg-center"></div>
    </div>
</template>