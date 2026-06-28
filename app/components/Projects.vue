<script setup lang="ts">
const projects = [
    {
        title: 'ThreadBound',
        link: 'https://github.com/AevaPlays/ThreadBound',
        text: 'A Minecraft Fabric mod focused on cosy, decorative content with depth, currently in active development. ThreadBound adds new wool block variants, decorative plushie blocks with a custom 45° rotation placement system, and an in-game book laying the groundwork for a full bestiary system. Planned features include original lore, additional plushie variants, and companion plushie mobs with unique buffs and animations.',
        tools: ['Java', 'Fabric', 'Gradle', 'GitHub Actions']
    },
    {
        title: 'Game',
        link: 'https://github.com/AevaPlays/Game',
        text: 'A real-time 2–4 player multiplayer browser game focused on resource collection. Players join rooms, collect items with different values, and compete for the highest score within a 2-minute limit or first to 100 points. The game uses a DOM-based renderer (no canvas) with server-authoritative state over WebSockets for synchronized gameplay.',
        tools: ['Node.js', 'WebSockets', 'TypeScript', 'React']
    },
    {
        title: 'MatchMe',
        link: 'https://github.com/AevaPlays/Match-Me',
        text: 'A full-stack matchmaking application with a Spring Boot backend, React frontend, and PostgreSQL database. Users are matched based on profile compatibility, with support for multiple data generation profiles ranging from single users to a dataset of 100 generated accounts. The app is fully containerized with Docker for easy local setup and consistent environments.',
        tools: ['Spring Boot', 'Java', 'React', 'PostgreSQL', 'Docker']
    },
    {
        title: 'Racetrack',
        link: 'https://github.com/AevaPlays/Racetrack',
        text: 'A real-time race management system built to minimize staff dependency at a local racetrack. It features role-based dashboards for receptionists, safety officials, and lap observers, with live race control, lap time tracking, and a public leaderboard all synchronized via Socket.IO. Race state and lap times persist across server restarts using SQLite and JSON file storage.',
        tools: ['Node.js', 'Socket.IO', 'SQLite']
    },
    {
        title: 'Movies API',
        link: 'https://github.com/AevaPlays/MoviesAPI',
        text: 'A REST API for managing a movie database built with Spring Boot and JPA, designed to help film societies digitize and maintain their collections. It supports full CRUD operations for Movies, Actors, and Genres with many-to-many relationships, paginated results, and case-insensitive search. Force deletion is supported for entities that have existing relationships to other records.',
        tools: ['Spring Boot', 'Java', 'JPA', 'SQLite']
    },
    {
        title: 'Prettifier',
        link: 'https://github.com/AevaPlays/Prettifier',
        text: 'A command-line tool that converts raw administrator-facing flight itineraries into customer-friendly readable output. It handles IATA and ICAO airport code lookups via CSV, formats ISO 8601 dates and times into human-readable form, and cleans up whitespace irregularities throughout the file. Built for a fictional travel agency as a back-office time-saving utility.',
        tools: ['Java', 'File I/O', 'CSV Parsing']
    },
    {
        title: 'Cypher Tool',
        link: 'https://github.com/AevaPlays/CypherTool',
        text: 'A command-line encryption and decryption utility supporting ROT13, Reverse, and Caesar cipher techniques. Users are guided through an interactive menu to select an operation, choose a cipher, and input their message for processing. Non-alphabet characters are preserved as-is throughout all cipher operations.',
        tools: ['Java', 'CLI']
    }
]
</script>

<template>
    <section id="projects" class="page-section">
        <h1 class="title align-right">PROJECTS</h1>
        <UCarousel
            v-slot="{ item }"
            arrows
            dots
            :items="projects"
            :ui="{ item: 'basis-full md:basis-1/3 xl:basis-1/4' }"
            class="custom-carousel"
        >
            <div class="carousel-card align-right">
                <UButton
                    variant="ghost"
                    :to="item.link"
                    target="_blank"
                    class="project-title-btn text-4xl md:text-4xl xl:text-4xl"
                    trailing-icon="i-lucide-external-link"
                >
                    {{ item.title }}
                </UButton>

                <div class="tags">
                    <UBadge
                        v-for="tool in item.tools"
                        :key="tool"
                        size="xl"
                        color="neutral"
                        variant="solid"
                        class="tag"
                    >
                        {{ tool }}
                    </UBadge>
                </div>
                <p class="card-text text-2xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl">{{ item.text }}</p>
            </div>
        </UCarousel>
    </section>
</template>

<style scoped>
.carousel-card {
    background-color: var(--color-dark-orange);
    height: 40em;
    border-radius: 16px;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    
}

.project-title-btn {
    color: var(--color-orange) !important;
    font-weight: bold;
    display: inline-flex;
    align-self: flex-end;
    background: transparent !important;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.project-title-btn:hover {
    background-color: rgba(255, 177, 98, 0.15) !important;
    transform: translateY(-2px);
}

.project-title-btn :deep(span) {
    width: 2.5rem;
    height: 2.5rem;
}

.card-text {
    color: var(--color-orange);
    text-align: left;
}

.custom-carousel :deep(button[role="tab"]),
.custom-carousel :deep([class*="-indicator"]) {
    background-color: var(--color-dark-blue) !important;
    opacity: 0.6;
}

.custom-carousel :deep(button[role="tab"][aria-selected="true"]),
.custom-carousel :deep([class*="-indicator"][class*="-active"]) {
    background-color: var(--color-orange) !important;
    opacity: 1;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.5rem 0;
}

.tag {
    color: #FFB162;
    background-color: #1B2632;
}
</style>