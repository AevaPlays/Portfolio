<script setup lang="ts">
const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}
</script>

<template>
    <UCard class="navbar">
        <nav class="nav-inner">
            <UButton variant="ghost" color="neutral" class="nav-link text-lg md:text-2xl lg:text-2xl xl:text-2xl whitespace-nowrap tracking-tight md:tracking-normal xl:tracking-wide" @click="scrollTo('about')">
                | About Me |
            </UButton>
            <UButton variant="ghost" color="neutral" class="nav-link text-lg md:text-2xl lg:text-2xl xl:text-2xl whitespace-nowrap tracking-tight md:tracking-normal xl:tracking-wide" @click="scrollTo('projects')">
                | Projects |
            </UButton>
            <UButton variant="ghost" color="neutral" class="nav-link text-lg md:text-2xl lg:text-2xl xl:text-2xl whitespace-nowrap tracking-tight md:tracking-normal xl:tracking-wide" @click="scrollTo('skills')">
                | Skills |
            </UButton>
            <UButton variant="ghost" color="neutral" class="nav-link text-lg md:text-2xl lg:text-2xl xl:text-2xl whitespace-nowrap tracking-tight md:tracking-normal xl:tracking-wide" @click="scrollTo('contact')">
                | Contact Me |
            </UButton>
        </nav>
    </UCard>
</template>

<style scoped>
.navbar {
    width: 100%;
    background-color: var(--color-dark-blue);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-radius: 0 !important;
}

.nav-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.nav-link {
    color: var(--color-orange) !important;
    font-weight: bold;
    background: transparent !important;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.nav-link:hover {
    background-color: var(--color-blue) !important;
    transform: translateY(-2px);
}
</style>