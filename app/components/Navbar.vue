<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

const { t, locale, locales, setLocale } = useI18n()

const colorMode = useColorMode()
const isDark = computed({
    get: () => colorMode.value === 'dark',
    set: (value: boolean) => {
        colorMode.preference = value ? 'dark' : 'light'
    }
})

const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}

const menuItemUi = {
    itemLeadingIcon: 'text-dark-orange group-data-highlighted:text-dark-orange group-data-[state=open]:text-dark-orange'
}

interface MenuItem {
    type?: 'separator'
    label?: string
    icon?: string
    ui?: typeof menuItemUi
    onSelect?: (e: Event) => void
}

const menuOpen = ref(false)
const languageExpanded = ref(false)

watch(menuOpen, (open) => {
    if (!open) languageExpanded.value = false
})

const menuItems = computed(() => {
    const items: MenuItem[] = [
        {
            label: isDark.value ? t('nav.lightMode') : t('nav.darkMode'),
            icon: isDark.value ? 'i-lucide-sun' : 'i-lucide-moon',
            onSelect: () => { isDark.value = !isDark.value },
            ui: menuItemUi
        },
        {
            label: locale.value.toUpperCase(),
            icon: 'i-lucide-languages',
            onSelect: (e: Event) => {
                e.preventDefault()
                languageExpanded.value = !languageExpanded.value
            },
            ui: menuItemUi
        }
    ]

    if (languageExpanded.value) {
        items.push(
            { type: 'separator' as const },
            ...locales.value.map(loc => ({
                label: loc.code.toUpperCase(),
                onSelect: () => setLocale(loc.code)
            }))
        )
    }

    return items
})

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
    <div class="w-full bg-[var(--color-surface-elevated)] sticky top-0 z-[1000]">
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

            <UDropdownMenu v-model:open="menuOpen" :items="menuItems" :modal="false">
                <UButton
                    variant="ghost"
                    color="neutral"
                    class="nav-link"
                    icon="i-lucide-menu"
                    :aria-label="t('nav.menu')"
                />
            </UDropdownMenu>
        </nav>
    </div>
</template>