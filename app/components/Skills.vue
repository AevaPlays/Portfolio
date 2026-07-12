<script setup lang="ts">
const { t } = useI18n()

const technicalSkills = ['C++', 'Go', 'Java', 'JavaScript', 'Python', 'TypeScript']

const frameworkSkills = [
    'CLI Systems', 'Docker', 'DOM Rendering', 'Fabric', 'File I/O & CSV',
    'GitHub Actions', 'Gradle', 'JPA', 'Node.js', 'PostgreSQL',
    'React', 'REST APIs', 'Socket.IO', 'SQLite', 'Spring Boot', 'WebSockets'
]

const timelineKeys = ['student', 'techTutor', 'comingSoon'] as const

const timelineIcons: Record<(typeof timelineKeys)[number], string> = {
    student: 'i-lucide-book',
    techTutor: 'i-lucide-briefcase',
    comingSoon: 'i-lucide-briefcase'
}

const items = computed(() =>
    timelineKeys.map(key => ({
        icon: timelineIcons[key],
        date: t(`skills.timeline.${key}.date`),
        displayTitle: t(`skills.timeline.${key}.title`),
        description: t(`skills.timeline.${key}.description`)
    }))
)
</script>

<template>
    <section id="skills" class="page-section @container">
        <h1 class="title align-left">{{ $t('skills.title') }}</h1>

        <div class="flex @min-[75rem]:flex-row flex-col gap-8 p-4">
            <div class="flex flex-col gap-2">
                <h2 class="text-[var(--color-heading)] text-3xl font-bold">{{ $t('skills.technicalSkills') }}</h2>
                <div class="flex flex-col flex-wrap gap-2 w-60">
                    <UBadge
                        v-for="skill in technicalSkills"
                        :key="skill"
                        variant="solid"
                    >
                        {{ skill }}
                    </UBadge>
                </div>

                <h2 class="text-[var(--color-heading)] text-3xl font-bold mt-12">{{ $t('skills.frameworksTools') }}</h2>
                <div class="flex flex-col flex-wrap gap-2 w-60">
                    <UBadge
                        v-for="skill in frameworkSkills"
                        :key="skill"
                        variant="solid"
                    >
                        {{ skill }}
                    </UBadge>
                </div>
            </div>

            <div class="flex flex-col flex-1 @min-[75rem]:items-center">
                <div class="flex flex-col @min-[75rem]:w-[57rem]">
                    <h1 class="text-[var(--color-heading)] text-3xl font-bold">{{ $t('skills.otherSkills') }}</h1>
                    <div class="@min-[75rem]:ml-[27rem] @min-[75rem]:w-[30rem]">
                        <UTimeline
                            size="3xl"
                            :items="items"
                            :default-value="2"
                            :ui="{
                                item: '@min-[75rem]:even:flex-row-reverse @min-[75rem]:even:-translate-x-[calc(100%-3rem)] @min-[75rem]:even:text-right'
                            }"
                        >
                            <template #date="{ item }">
                                <span class="text-[var(--color-heading)] text-2xl font-bold">{{ item.date }}</span>
                            </template>

                            <template #description="{ item }">
                                <div class="inline-block text-left max-w-[400px] bg-[var(--color-accent-bg)] text-[var(--color-accent-text)] p-3 rounded-lg shadow-sm font-medium mt-1">
                                    <h4 class="text-[var(--color-accent-text)] text-xl font-bold mb-1">{{ item.displayTitle }}</h4>
                                    <p v-if="item.description" class="text-[var(--color-accent-text)] text-base font-medium leading-relaxed">
                                        {{ item.description }}
                                    </p>
                                </div>
                            </template>
                        </UTimeline>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>