<script setup lang="ts">
const shadows = useShadows()
</script>

<template>
    <section id="contact" class="page-section">
        <h1 class="title align-left">{{ $t('contact.title') }}</h1>

        <div class="flex flex-wrap gap-6 p-4">
            <UButton
                class="sm:w-auto w-full"
                to="https://www.linkedin.com/in/amiraerte/"
                target="_blank"
                icon="i-lucide-linkedin"
                :style="{ boxShadow: shadows.button }"
            >
                {{ $t('contact.linkedin') }}
            </UButton>

            <UButton
                class="sm:w-auto w-full"
                to="https://github.com/AevaPlays"
                target="_blank"
                icon="i-lucide-github"
                :style="{ boxShadow: shadows.button }"
            >
                {{ $t('contact.github') }}
            </UButton>

            <UButton
                class="sm:w-auto w-full"
                to="mailto:amiraerte.w@gmail.com"
                icon="i-lucide-mail"
                :style="{ boxShadow: shadows.button }"
            >
                {{ $t('contact.email', { email: 'amiraerte.w@gmail.com' }) }}
            </UButton>
        </div>
    </section>
</template>