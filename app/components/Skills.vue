<script setup lang="ts">
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

        <div class="skills-grid lg:flex-row flex-col">
            <div class="skills-column">
                <h2 class="skills-subtitle">Technical Skills</h2>
                <div class="skills-list">
                    <UBadge variant="solid" class="skill-item">C++</UBadge>
                    <UBadge variant="solid" class="skill-item">Go</UBadge>
                    <UBadge variant="solid" class="skill-item">Java</UBadge>
                    <UBadge variant="solid" class="skill-item">JavaScript</UBadge>
                    <UBadge variant="solid" class="skill-item">Python</UBadge>
                    <UBadge variant="solid" class="skill-item">TypeScript</UBadge>
                </div>

                <h2 class="skills-subtitle tools-subtitle">Frameworks & Tools</h2>
                <div class="skills-list">
                    <UBadge variant="solid" class="skill-item">CLI Systems</UBadge>
                    <UBadge variant="solid" class="skill-item">Docker</UBadge>
                    <UBadge variant="solid" class="skill-item">DOM Rendering</UBadge>
                    <UBadge variant="solid" class="skill-item">Fabric</UBadge>
                    <UBadge variant="solid" class="skill-item">File I/O & CSV</UBadge>
                    <UBadge variant="solid" class="skill-item">GitHub Actions</UBadge>
                    <UBadge variant="solid" class="skill-item">Gradle</UBadge>
                    <UBadge variant="solid" class="skill-item">JPA</UBadge>
                    <UBadge variant="solid" class="skill-item">Node.js</UBadge>
                    <UBadge variant="solid" class="skill-item">PostgreSQL</UBadge>
                    <UBadge variant="solid" class="skill-item">React</UBadge>
                    <UBadge variant="solid" class="skill-item">REST APIs</UBadge>
                    <UBadge variant="solid" class="skill-item">Socket.IO</UBadge>
                    <UBadge variant="solid" class="skill-item">SQLite</UBadge>
                    <UBadge variant="solid" class="skill-item">Spring Boot</UBadge>
                    <UBadge variant="solid" class="skill-item">WebSockets</UBadge>
                </div>
            </div>

            <div class="skills-column align-left">
                <h1 class="skills-subtitle lg:ml-[22rem]" style="text-align: left;">Other skills</h1>
                <UTimeline
                    size="3xl"
                    :items="items"
                    :default-value="2"
                    :ui="{
                        item: 'xl:even:flex-row-reverse xl:even:-translate-x-[calc(100%-2.25rem)] xl:even:text-right'
                    }"
                    class="custom-timeline xl:translate-x-[6rem]"
                >
                    <template #date="{ item }">
                        <span class="timeline-date-text">{{ item.date }}</span>
                    </template>

                    <template #description="{ item }">
                        <div class="timeline-card">
                            <h4 class="card-box-title">{{ item.displayTitle }}</h4>
                            <p v-if="item.description" class="card-box-text">
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
.skills-grid {
    display: flex;
    gap: 2rem;
    padding: 1rem;
}

.skills-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.skills-subtitle {
    color: var(--color-orange);
    font-size: 2rem;
    font-weight: bold;
}

.tools-subtitle {
    margin-top: 3rem;
}

.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    flex-direction: column;
    width: 15rem;
}

.skill-item {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.4rem 0.8rem;
    color: #FFB162;
    background-color: #A35139;
}

.timeline-date-text {
    font-size: 1.5rem !important;
    font-weight: bold !important;
    color: var(--color-orange) !important;
}

.custom-timeline :deep(.u-timeline-item-date),
.custom-timeline :deep([class*="-date"]),
.custom-timeline :deep([class*="-label"]) {
    font-size: 1rem !important;
    font-weight: bold !important;
    color: var(--color-orange) !important;
}

.timeline-card {
    display: inline-block;
    text-align: left;
    max-width: 400px;
    background-color: var(--color-dark-orange);
    color: var(--color-orange);
    padding: 0.75rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    font-weight: 500;
    margin-top: 0.25rem;
}

.card-box-title {
    color: var(--color-orange);
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
}

.card-box-text {
    color: var(--color-orange);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.625;
}
</style>