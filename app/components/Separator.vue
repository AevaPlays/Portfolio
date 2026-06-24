<script setup lang="ts">
defineProps<{
    color?: string
    size?: string
}>()
</script>

<template>
    <div class="separator-wrapper">
        <span
            class="separator-text"
            :style="{
                color: color ?? 'var(--color-orange)',
                fontSize: size ?? '1rem'
            }"
        >
            -----------------------------------------------------------------------
        </span>
    </div>
</template>

<style scoped>
.separator-wrapper {
    width: 100%;
    overflow: hidden;
    background-color: var(--color-blue);
    display: flex;
}

.separator-text {
    white-space: nowrap;
    user-select: none;
}
</style>