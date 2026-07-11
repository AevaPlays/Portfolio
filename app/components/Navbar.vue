<script setup lang="ts">
import { computed, onMounted } from 'vue'

const { locale, locales, setLocale } = useI18n()

const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}

const localeItems = computed(() =>
    locales.value.map(loc => ({
        label: loc.code.toUpperCase(),
        onSelect: () => setLocale(loc.code)
    }))
)

onMounted(() => {
    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
        link.addEventListener('touchend', () => {
            (link as HTMLElement).blur()
        })
    })
})
</script>

<template>
    <div class="w-full bg-[#1B2632] sticky top-0 z-[1000]">
        <nav class="flex items-center justify-center gap-2 py-3 flex-wrap">
            <UButton variant="ghost" color="neutral" class="nav-link" @click="scrollTo('about')">
                | {{ $t('nav.about') }} |
            </UButton>
            <UButton variant="ghost" color="neutral" class="nav-link" @click="scrollTo('projects')">
                | {{ $t('nav.projects') }} |
            </UButton>
            <UButton variant="ghost" color="neutral" class="nav-link" @click="scrollTo('skills')">
                | {{ $t('nav.skills') }} |
            </UButton>
            <UButton variant="ghost" color="neutral" class="nav-link" @click="scrollTo('contact')">
                | {{ $t('nav.contact') }} |
            </UButton>

            <UDropdownMenu :items="localeItems" :modal="false">
                <UButton variant="ghost" color="neutral" class="nav-link">
                    | {{ locale.toUpperCase() }} |
                </UButton>
            </UDropdownMenu>
        </nav>
    </div>
</template>