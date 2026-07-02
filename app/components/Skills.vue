<script setup lang="ts">
const technicalSkills = ['C++', 'Go', 'Java', 'JavaScript', 'Python', 'TypeScript']

const frameworkSkills = [
    'CLI Systems', 'Docker', 'DOM Rendering', 'Fabric', 'File I/O & CSV',
    'GitHub Actions', 'Gradle', 'JPA', 'Node.js', 'PostgreSQL',
    'React', 'REST APIs', 'Socket.IO', 'SQLite', 'Spring Boot', 'WebSockets'
]

const items = [
    {
        date: 'Sept , 2024 - April, 2026',
        displayTitle: 'kood/Jõhvi - Student',
        description: 'Engaged in autonomous full-stack development, delivering projects independently and within cross-functional teams under a self-directed learning model that mirrored production engineering environments. Conducted rigorous peer code reviews and manual debugging sessions to validate system functionality before deployment. Actively contributed to the Student Council by managing operational budgets, maintaining financial documentation, organizing school-wide events, and auditing cloud data architecture to ensure file integrity.',
        icon: 'i-lucide-book'
    },
    {
        date: 'June 1, 2026 - June 19, 2026',
        displayTitle: 'kood/Jõhvi - Tech Tutor',
        description: 'Supported participants by troubleshooting code issues, debugging errors, and guiding them toward correct solutions or relevant support staff when needed. Led daily standups for participants and coordinated additional standups with administrators and staff. Also contributed to organizing small engagement activities to enhance participant experience.',
        icon: 'i-lucide-briefcase'
    },
    {
        date: 'N/A',
        displayTitle: 'Coming Soon!',
        description: '',
        icon: 'i-lucide-briefcase'
    }
]
</script>

<template>
    <section id="skills" class="page-section">
        <h1 class="title align-left">SKILLS</h1>

        <div class="flex xl:flex-row flex-col gap-8 p-4">
            <div class="flex flex-col gap-2">
                <h2 class="text-[#FFB162] text-3xl font-bold">Technical Skills</h2>
                <div class="flex flex-col flex-wrap gap-2 w-60">
                    <UBadge
                        v-for="skill in technicalSkills"
                        :key="skill"
                        variant="solid"
                        class="text-[#FFB162] bg-[#A35139] text-lg font-semibold px-3 py-1"
                    >
                        {{ skill }}
                    </UBadge>
                </div>

                <h2 class="text-[#FFB162] text-3xl font-bold mt-12">Frameworks & Tools</h2>
                <div class="flex flex-col flex-wrap gap-2 w-60">
                    <UBadge
                        v-for="skill in frameworkSkills"
                        :key="skill"
                        variant="solid"
                        class="text-[#FFB162] bg-[#A35139] text-lg font-semibold px-3 py-1"
                    >
                        {{ skill }}
                    </UBadge>
                </div>
            </div>

            <div class="flex flex-col flex-1">
                <h1 class="text-[#FFB162] text-3xl font-bold xl:ml-[22rem]">Other Skills</h1>
                <UTimeline
                    size="3xl"
                    :items="items"
                    :default-value="2"
                    :ui="{
                        item: 'xl:even:flex-row-reverse xl:even:-translate-x-[calc(100%-3rem)] xl:even:text-right'
                    }"
                    class="custom-timeline xl:translate-x-[45rem]"
                >
                    <template #date="{ item }">
                        <span class="timeline-date-text">{{ item.date }}</span>
                    </template>

                    <template #description="{ item }">
                        <div class="inline-block text-left max-w-[400px] bg-[#A35139] text-[#FFB162] p-3 rounded-lg shadow-sm font-medium mt-1">
                            <h4 class="text-[#FFB162] text-xl font-bold mb-1">{{ item.displayTitle }}</h4>
                            <p v-if="item.description" class="text-[#FFB162] text-base font-medium leading-relaxed">
                                {{ item.description }}
                            </p>
                        </div>
                    </template>
                </UTimeline>
            </div>
        </div>
    </section>
</template>

<style scoped>
.timeline-date-text {
    font-size: 1.5rem !important;
    font-weight: bold !important;
    color: #FFB162 !important;
}

.custom-timeline :deep(.u-timeline-item-date),
.custom-timeline :deep([class*="-date"]),
.custom-timeline :deep([class*="-label"]) {
    font-size: 1rem !important;
    font-weight: bold !important;
    color: #FFB162 !important;
}
</style>