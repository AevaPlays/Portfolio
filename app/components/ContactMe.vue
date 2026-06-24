<template>
    <section id="contact" class="page-section">
        <h1 class="title align-left">CONTACT ME</h1>

        <div class="contact-links-container">
            <UButton
                class="contact-link-btn"
                to="https://www.linkedin.com/in/amiraerte/"
                target="_blank"
                icon="i-lucide-linkedin"
            >
                LinkedIn
            </UButton>

            <UButton
                class="contact-link-btn"
                to="https://github.com/AevaPlays"
                target="_blank"
                icon="i-lucide-github"
            >
                GitHub
            </UButton>

            <UButton
                class="contact-link-btn"
                to="mailto:amiraerte.w@gmail.com"
                icon="i-lucide-mail"
            >
                Email: amiraerte.w@gmail.com
            </UButton>

            <UButton
                class="contact-link-btn"
                to="tel:+37256868200"
                icon="i-lucide-phone"
            >
                Phone: +372 5686 8200
            </UButton>
        </div>
    </section>
</template>

<style scoped>
.contact-links-container {
    display: flex;
    gap: 1.5rem;
    padding: 1rem;
    flex-wrap: wrap;
}

.contact-link-btn {
    background-color: var(--color-dark-orange) !important;
    color: var(--color-orange) !important;
    font-size: 1.2rem !important;
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    transition: transform 0.2s ease;
}

.contact-link-btn:hover {
    transform: translateY(-2px);
    background-color: var(--color-orange) !important;
    color: var(--color-dark-orange) !important;
}
</style>