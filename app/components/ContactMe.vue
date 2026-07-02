<template>
    <section id="contact" class="page-section">
        <h1 class="title align-left">CONTACT ME</h1>

        <div class="flex flex-wrap gap-6 p-4">
            <UButton
                class="contact-link-btn sm:w-auto w-full"
                to="https://www.linkedin.com/in/amiraerte/"
                target="_blank"
                icon="i-lucide-linkedin"
            >
                LinkedIn
            </UButton>

            <UButton
                class="contact-link-btn sm:w-auto w-full"
                to="https://github.com/AevaPlays"
                target="_blank"
                icon="i-lucide-github"
            >
                GitHub
            </UButton>

            <UButton
                class="contact-link-btn sm:w-auto w-full"
                to="mailto:amiraerte.w@gmail.com"
                icon="i-lucide-mail"
            >
                Email: amiraerte.w@gmail.com
            </UButton>
        </div>
    </section>
</template>

<style scoped>
.contact-link-btn {
    background-color: #A35139 !important;
    color: #FFB162 !important;
    font-size: 1.2rem !important;
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    transition: transform 0.2s ease;
}

.contact-link-btn:hover {
    transform: translateY(-2px);
    background-color: #FFB162 !important;
    color: #A35139 !important;
}
</style>