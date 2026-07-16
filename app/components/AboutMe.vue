<script setup lang="ts">
const shadows = useShadows()
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
            <img
                class="md:w-[25rem] md:h-[25rem] xl:w-[30rem] xl:h-[30rem] w-64 h-64 self-center mx-auto md:mx-0 md:mr-8 object-cover flex-shrink-0 border-[10px] border-[var(--color-surface-elevated)] rounded-[10%]"
                src="/Marcel.png"
                alt="Marcel"
                :style="{ boxShadow: shadows.image }"
            />
        </div>
    </section>
</template>