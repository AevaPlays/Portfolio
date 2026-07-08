<script setup lang="ts">
import { onMounted } from 'vue'

const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}

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
        <nav class="flex items-center justify-center gap-2 py-3">
            <UButton variant="ghost" color="neutral" class="nav-link text-sm md:text-2xl lg:text-2xl xl:text-2xl whitespace-nowrap tracking-tighter md:tracking-normal xl:tracking-wide" @click="scrollTo('about')">
                | About Me |
            </UButton>
            <UButton variant="ghost" color="neutral" class="nav-link text-sm md:text-2xl lg:text-2xl xl:text-2xl whitespace-nowrap tracking-tighter md:tracking-normal xl:tracking-wide" @click="scrollTo('projects')">
                | Projects |
            </UButton>
            <UButton variant="ghost" color="neutral" class="nav-link text-sm md:text-2xl lg:text-2xl xl:text-2xl whitespace-nowrap tracking-tighter md:tracking-normal xl:tracking-wide" @click="scrollTo('skills')">
                | Skills |
            </UButton>
            <UButton variant="ghost" color="neutral" class="nav-link text-sm md:text-2xl lg:text-2xl xl:text-2xl whitespace-nowrap tracking-tighter md:tracking-normal xl:tracking-wide" @click="scrollTo('contact')">
                | Contact Me |
            </UButton>
        </nav>
    </div>
</template>