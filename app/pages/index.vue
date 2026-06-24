<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const projects = [
  {
    title: 'Game',
    link: 'https://github.com/AevaPlays/Game',
    text: 'A real-time 2–4 player multiplayer browser game focused on resource collection. Players join rooms, collect items with different values, and compete for the highest score within a 2-minute limit or first to 100 points. The game uses a DOM-based renderer (no canvas) with server-authoritative state over WebSockets for synchronized gameplay.',
    tools: ['Node.js', 'WebSockets', 'TypeScript', 'React']
  },
  {
    title: 'MatchMe',
    link: 'https://github.com/AevaPlays/Match-Me',
    text: 'Full-stack matchmaking app using Spring Boot backend and React frontend with PostgreSQL database and profile-based data generation.',
    tools: ['Spring Boot', 'Java', 'React', 'PostgreSQL', 'Docker']
  },
  {
    title: 'Cypher Tool',
    link: 'https://github.com/AevaPlays/CypherTool',
    text: 'CLI encryption tool supporting ROT13, Reverse, and Caesar ciphers with interactive menu system.',
    tools: ['Java', 'CLI']
  },
  {
    title: 'Racetrack',
    link: 'https://github.com/AevaPlays/Racetrack',
    text: 'Real-time race management system with Socket.IO, role-based dashboards, live race control, and SQLite persistence.',
    tools: ['Node.js', 'Socket.IO', 'SQLite']
  },
  {
    title: 'Itinerary Prettifier',
    link: 'https://github.com/AevaPlays/Prettifier',
    text: 'CLI tool that converts raw flight itineraries into readable format using airport lookup CSV and date formatting.',
    tools: ['Java', 'File I/O', 'CSV Parsing']
  },
  {
    title: 'Movies API',
    link: 'https://github.com/AevaPlays/MoviesAPI',
    text: 'REST API for managing movies, actors, and genres with filtering, pagination, and relational database support.',
    tools: ['Spring Boot', 'Java', 'JPA', 'SQLite']
  }
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
  <div>
    <div class="header">
      <div class="box">
        <div class="box-inner">
          <img class="avatar" src="https://github.com/AevaPlays.png" alt="Amira Erte" />
          <div class="content">
            <p class="name">Amira Erte</p>

            <p class="bio-text">
              Junior Software Engineer | Go, Java, JavaScript, TypeScript, Python, C++
            </p>

            <p class="description">
              I am a motivated person with experience in both backend and frontend development,
              having worked on medium-sized projects in a team environment.
            </p>
          </div>
        </div>
      </div>
    </div>

    <UCard class="navbar">
      <nav class="nav-inner">
        <UButton
          variant="ghost"
          color="neutral"
          class="nav-link"
          @click="scrollTo('about')"
        >
          | About Me |
        </UButton>

        <UButton
          variant="ghost"
          color="neutral"
          class="nav-link"
          @click="scrollTo('projects')"
        >
          | Projects |
        </UButton>

        <UButton
          variant="ghost"
          color="neutral"
          class="nav-link"
          @click="scrollTo('skills')"
        >
          | Skills |
        </UButton>

        <UButton
          variant="ghost"
          color="neutral"
          class="nav-link"
          @click="scrollTo('contact')"
        >
          | Contact Me |
        </UButton>
      </nav>
    </UCard>

    <section id="about" class="page-section">
      <h1 class="title align-left">
        ABOUT ME
      </h1>
      <div class="about-inner">
        <p class="section-text align-left">
          I am a motivated software engineer with experience in both backend and frontend development, having worked on medium-sized projects in a team environment. I completed a one-and-a-half-year intensive boot camp focused on real-world industry applications of computer science, gaining hands-on experience in full-stack development. I enjoy learning new technologies, stay calm under pressure, value constructive feedback, and work well in collaborative environments.
          <br /><br />
          Outside of coding, I enjoy crocheting, playing video games including The Elder Scrolls and The Legend of Zelda series, and spending time with my cat.
        </p>
        <img class="about-image" src="/Marcel.png" alt="Marcel" />
      </div>
    </section>

    <USeparator />

    <section id="projects" class="page-section">
      <h1 class="title align-right">
        PROJECTS
      </h1>
      <UCarousel
        v-slot="{ item }"
        arrows
        dots
        :items="projects"
        :ui="{ item: 'basis-1/3' }"
        class="custom-carousel"
      >
        <div class="carousel-card align-right">
          <a :href="item.link" target="_blank" class="project-link-title">
            <h3 class="card-title">
              {{ item.title }}
              <span class="i-lucide-external-link inline-block w-6 h-6 align-middle ml-1"></span>
            </h3>
          </a>
          <div class="tags">
            <UBadge
              v-for="tool in item.tools"
              :key="tool"
              size="xl"
              color="neutral"
              variant="solid"
              class="tag text-[oklch(0.8199_0.1318_64.46)] bg-sky-950"
            >
              {{ tool }}
            </UBadge>
          </div>
          <p class="card-text">
            {{ item.text }}
          </p>
        </div>
      </UCarousel>
    </section>

    <USeparator />

    <section id="skills" class="page-section">
      <h1 class="title align-left">SKILLS</h1>

      <div class="skills-grid">
        <div class="skills-column">
          <h2 class="skills-subtitle">Technical Skills</h2>
          <div class="skills-list">
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">C++</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">Go</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">Java</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">JavaScript</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">Python</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">TypeScript</UBadge>
          </div>

          <h2 class="skills-subtitle tools-subtitle">Frameworks & Tools</h2>
          <div class="skills-list">
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">CLI Systems</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">Docker</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">DOM Rendering</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">File I/O & CSV</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">JPA</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">Node.js</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">PostgreSQL</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">React</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">REST APIs</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">Socket.IO</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">SQLite</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">Spring Boot</UBadge>
            <UBadge variant="solid" class="skill-item text-[oklch(0.8199_0.1318_64.46)] bg-[oklch(0.5309_0.1148_37.14)]">WebSockets</UBadge>
          </div>
        </div>

        <div class="skills-column align-left">
          <h1 class="skills-subtitle" style="text-align: left; margin-left: 22rem;">Other skills</h1>
          <UTimeline
            size="3xl"
            :items="items"
            :default-value="2"
            :ui="{
              item: 'even:flex-row-reverse even:-translate-x-[calc(100%-2.25rem)] even:text-right'
            }"
            class="custom-timeline translate-x-[calc(6rem)]"
          >
            <template #date="{ item }">
              <span class="timeline-date-text">
                {{ item.date }}
              </span>
            </template>

            <template #description="{ item }">
              <div class="inline-block text-left max-w-[400px] bg-[var(--color-dark-orange)] text-[var(--color-orange)] p-3 rounded-lg shadow-sm font-medium mt-1">
                <h4 class="card-box-title font-bold text-xl mb-1">{{ item.displayTitle }}</h4>
                <p v-if="item.description" class="card-box-text text-base leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </template>
          </UTimeline>
        </div>
      </div>
    </section>

    <USeparator />

    <section id="contact" class="page-section">
      <h1 class="title align-left">
        CONTACT ME
      </h1>
      
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
  </div>
</template>

<style scoped>
.align-left { text-align: left; }
.align-right { text-align: right; }

.title {
  padding: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-orange);
}

/* HEADER */
.header {
  width: 100%;
  min-height: 40em;
  background-image: url('/pixel_decor.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
}

.box {
  width: 40%;
  background-color: var(--color-dark-orange);
  padding: 2rem;
}

.box-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.avatar {
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  border: 10px solid var(--color-orange);
  object-fit: cover;
}

.name {
  color: var(--color-orange);
  font-size: 2.5rem;
}

.bio-text {
  color: var(--color-orange);
}

.description {
  color: var(--color-orange);
  font-size: 1.5rem;
}

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
  gap: 2rem;
  padding: 0 2rem;
}

.nav-link {
  color: var(--color-orange) !important;
  font-weight: bold;
  font-size: 1.2em;
  text-decoration: none;
  background: transparent !important;
  transition: background-color 0.2s ease;
}

/* Ghost color target style explicitly referencing regular blue, not dark blue */
.nav-link:hover {
  background-color: var(--color-blue) !important;
}

/* CARDS */
.carousel-card {
  background-color: var(--color-dark-orange);
  height: 40em;
  border-radius: 16px;
  display: flex;
  padding: 1rem;
  flex-direction: column;
}

.project-link-title {
  text-decoration: none;
  display: inline-flex;
  align-self: flex-end;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

/* Ghost effect on hover: keeps your orange text, adds a subtle background tint */
.project-link-title:hover {
  background-color: rgba(235, 94, 40, 0.15);
}

.card-title {
  font-size: 3.5rem;
  color: var(--color-orange);
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0.5rem; /* gives room for the background ghost container box */
}

.card-text {
  font-size: 1.5rem;
  color: var(--color-orange);
  text-align: left;
}

/* CAROUSEL DOTS OVERRIDES */
/* Target indicators/dots buttons directly inside UCarousel */
.custom-carousel :deep(button[role="tab"]),
.custom-carousel :deep([class*="-indicator"]) {
  background-color: var(--color-dark-blue) !important;
  opacity: 0.6;
}

/* Highlight the active dot item */
.custom-carousel :deep(button[role="tab"][aria-selected="true"]),
.custom-carousel :deep([class*="-indicator"][class*="-active"]) {
  background-color: var(--color-orange) !important;
  opacity: 1;
}

/* TAGS */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

/* SKILLS */
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
}

/* TIMELINE CUSTOM OVERRIDES */
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

.card-box-title {
  color: var(--color-orange) !important;
  font-size: 1.25rem !important;
}

.card-box-text {
  color: var(--color-orange) !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
}

/* CONTACT LINKS ROW */
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
  color: var(--color-dark-blue) !important;
}

/* SECTIONS */
.page-section {
  padding: 1rem;
  padding-bottom: 3rem;
  background-color: var(--color-blue);
}

.section-text {
  font-size: 1.3rem;
  max-width: 700px;
  padding: 1rem;
  color: var(--color-orange);
}

.about-inner {
  display: flex;
}

.about-image {
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  margin-left: 10rem;
  border: 10px solid var(--color-dark-blue);
  border-radius: 10%;
  margin-top: -4rem;
}
</style>