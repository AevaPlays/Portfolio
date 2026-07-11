<script setup lang="ts">
const { t } = useI18n()

const projectKeys = ['threadbound', 'game', 'matchme', 'racetrack', 'moviesApi', 'prettifier', 'cypherTool'] as const

const projectMeta: Record<(typeof projectKeys)[number], { link: string, tools: string[] }> = {
    threadbound: { link: 'https://github.com/AevaPlays/ThreadBound', tools: ['Java', 'Fabric', 'Gradle', 'GitHub Actions'] },
    game: { link: 'https://github.com/AevaPlays/Game', tools: ['Node.js', 'WebSockets', 'TypeScript', 'React'] },
    matchme: { link: 'https://github.com/AevaPlays/Match-Me', tools: ['Spring Boot', 'Java', 'React', 'PostgreSQL', 'Docker'] },
    racetrack: { link: 'https://github.com/AevaPlays/Racetrack', tools: ['Node.js', 'Socket.IO', 'SQLite'] },
    moviesApi: { link: 'https://github.com/AevaPlays/MoviesAPI', tools: ['Spring Boot', 'Java', 'JPA', 'SQLite'] },
    prettifier: { link: 'https://github.com/AevaPlays/Prettifier', tools: ['Java', 'File I/O', 'CSV Parsing'] },
    cypherTool: { link: 'https://github.com/AevaPlays/CypherTool', tools: ['Java', 'CLI'] }
}

const projects = computed(() =>
    projectKeys.map(key => ({
        key,
        link: projectMeta[key].link,
        tools: projectMeta[key].tools,
        title: t(`projects.items.${key}.title`),
        text: t(`projects.items.${key}.text`)
    }))
)
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
        >
            <div class="bg-[#A35139] h-[40em] rounded-2xl flex flex-col p-4 text-right">
                <UButton
                    variant="ghost"
                    :to="item.link"
                    target="_blank"
                    class="inline-flex self-end text-4xl"
                    trailing-icon="i-lucide-external-link"
                >
                    {{ item.title }}
                </UButton>

                <div class="flex flex-wrap gap-2 my-2">
                    <UBadge
                        v-for="tool in item.tools"
                        :key="tool"
                        size="xl"
                        color="neutral"
                        variant="solid"
                    >
                        {{ tool }}
                    </UBadge>
                </div>
                <p class="text-[#FFB162] text-left text-2xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl">{{ item.text }}</p>
            </div>
        </UCarousel>
    </section>
</template>