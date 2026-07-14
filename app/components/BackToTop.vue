<script setup lang="ts">
const { t } = useI18n()

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <UButton
        :aria-label="t('nav.backToTop')"
        icon="i-lucide-arrow-up"
        variant="backToTop"
        @click="scrollToTop"
    />
</template>
