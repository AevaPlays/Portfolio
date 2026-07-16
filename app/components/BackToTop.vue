<script setup lang="ts">
const { t } = useI18n()
const shadows = useShadows()

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <UButton
        :aria-label="t('nav.backToTop')"
        icon="i-lucide-arrow-up"
        variant="backToTop"
        :style="{ boxShadow: shadows.button }"
        @click="scrollToTop"
    />
</template>
