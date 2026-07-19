<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const { t, locale } = useI18n()
const shadows = useShadows()
const appConfig = useAppConfig()

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

const textRefs = ref<Record<string, HTMLElement | null>>({})

function setTextRef(key: string) {
    return (el: unknown) => {
        textRefs.value[key] = el as HTMLElement | null
    }
}

const MIN_FIT_FONT_PX = 10
const MAX_FIT_FONT_PX = 40

function fitText(el: HTMLElement): number {
    let min = MIN_FIT_FONT_PX
    let max = MAX_FIT_FONT_PX
    let best = min

    while (min <= max) {
        const mid = Math.floor((min + max) / 2)
        el.style.fontSize = `${mid}px`
        if (el.scrollHeight <= el.clientHeight) {
            best = mid
            min = mid + 1
        } else {
            max = mid - 1
        }
    }

    el.style.fontSize = `${best}px`
    return best
}

function fitAllText() {
    const threadboundEl = textRefs.value.threadbound
    if (!threadboundEl) return

    const size = fitText(threadboundEl)
    Object.values(textRefs.value).forEach((el) => {
        if (el) el.style.fontSize = `${size}px`
    })
}

let resizeTimeout: ReturnType<typeof setTimeout> | undefined

function onResize() {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(fitAllText, 200)
}

let cardResizeObserver: ResizeObserver | undefined

onMounted(() => {
    // Wait a frame so the carousel's own layout pass (slide sizing) has settled
    // before measuring, otherwise the fit locks in against a stale box height.
    requestAnimationFrame(() => {
        requestAnimationFrame(fitAllText)
    })

    window.addEventListener('resize', onResize)

    const cardEl = textRefs.value.threadbound?.parentElement
    if (cardEl) {
        cardResizeObserver = new ResizeObserver(onResize)
        cardResizeObserver.observe(cardEl)
    }
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
    clearTimeout(resizeTimeout)
    cardResizeObserver?.disconnect()
})

watch(locale, async () => {
    await nextTick()
    fitAllText()
})
</script>

<template>
    <section id="projects" class="page-section">
        <h1 class="title align-right">{{ $t('projects.title') }}</h1>
        <UCarousel
            v-slot="{ item }"
            arrows
            dots
            align="start"
            :items="projects"
            :ui="{ item: 'basis-full md:basis-1/3 xl:basis-1/4 pb-12' }"
        >
            <div
                class="relative overflow-hidden bg-[var(--color-accent-bg)] h-[40em] rounded-2xl flex flex-col p-4 text-right"
                :style="{ boxShadow: shadows.card }"
            >
                <PlasmaShader :style="{ opacity: appConfig.plasma.projectCard.opacity / 100 }" />

                <div class="relative flex flex-1 flex-col min-h-0">
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
                            :style="{ boxShadow: shadows.badge }"
                        >
                            {{ tool }}
                        </UBadge>
                    </div>

                    <p
                        :ref="setTextRef(item.key)"
                        class="text-[var(--color-accent-text)] text-left leading-snug flex-1 min-h-0 overflow-hidden"
                    >
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </UCarousel>
    </section>
</template>
