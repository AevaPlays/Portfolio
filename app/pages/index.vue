<script setup lang="ts">
const items = [
  {
    title: 'Game',
    text:
      'A real-time 2–4 player multiplayer browser game focused on resource collection. Players join rooms, collect items with different values, and compete for the highest score within a 2-minute limit or first to 100 points. The game uses a DOM-based renderer (no canvas) with server-authoritative state over WebSockets for synchronized gameplay.',
    tools: ['Node.js', 'WebSockets', 'TypeScript', 'React']
  },
  {
    title: 'MatchMe',
    text:
      'Full-stack matchmaking app using Spring Boot backend and React frontend with PostgreSQL database and profile-based data generation.',
    tools: ['Spring Boot', 'Java', 'React', 'PostgreSQL', 'Docker']
  },
  {
    title: 'Cypher Tool',
    text:
      'CLI encryption tool supporting ROT13, Reverse, and Caesar ciphers with interactive menu system.',
    tools: ['Java', 'CLI']
  },
  {
    title: 'Beachside Racetrack',
    text:
      'Real-time race management system with Socket.IO, role-based dashboards, live race control, and SQLite persistence.',
    tools: ['Node.js', 'Socket.IO', 'SQLite']
  },
  {
    title: 'Itinerary Prettifier',
    text:
      'CLI tool that converts raw flight itineraries into readable format using airport lookup CSV and date formatting.',
    tools: ['Java', 'File I/O', 'CSV Parsing']
  },
  {
    title: 'Movies API',
    text:
      'REST API for managing movies, actors, and genres with filtering, pagination, and relational database support.',
    tools: ['Spring Boot', 'Java', 'JPA', 'SQLite']
  }
]

const experienceItems = [
  {
    title: 'Software Bootcamp',
    description: 'Completed intensive software development training.'
  },
  {
    title: 'Projects',
    description: 'Worked on frontend and backend applications.'
  }
]

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <!-- HEADER -->
  <div class="header">
    <div class="box">
      <div class="box-inner">
        <img class="avatar" src="https://github.com/AevaPlays.png" />

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

<!-- NAVBAR (UNCHANGED) -->
  <UCard class="navbar">
    <nav class="nav-inner" ref="navRef">
      <UButton
        variant="link"
        color="neutral"
        class="nav-link"
        @click="scrollTo('about')"
      >| About Me |
      </UButton>

      <UButton
        variant="link"
        color="neutral"
        class="nav-link"
        @click="scrollTo('projects')"
      >| Projects |
      </UButton>

      <UButton
        variant="link"
        color="neutral"
        class="nav-link"
        @click="scrollTo('experience')"
      >| Skills |
      </UButton>

      <UButton
        variant="link"
        color="neutral"
        class="nav-link"
        @click="scrollTo('contact')"
      >| Contact Me |
      </UButton>
    </nav>
  </UCard>

  <!-- ABOUT -->
  <section id="about" class="page-section">
    <h1 class="title align-left">ABOUT ME</h1>

    <div class="about-inner">
      <p class="section-text align-left">
        I am a motivated software engineer with experience in both backend and frontend development, having worked on medium-sized projects in a team environment. I completed a one-and-a-half-year intensive boot camp focused on real-world industry applications of computer science, gaining hands-on experience in full-stack development. I enjoy learning new technologies, stay calm under pressure, value constructive feedback, and work well in collaborative environments.<br /><br />

        Outside of coding, I enjoy crocheting, playing video games including The Elder Scrolls and The Legend of Zelda series, and spending time with my cat.
      </p>

      <img class="about-image" src="/Marcel.png" />
    </div>
  </section>

  <USeparator />

  <!-- PROJECTS -->
  <section id="projects" class="page-section">
    <h1 class="title align-right">PROJECTS</h1>

    <UCarousel
      v-slot="{ item }"
      loop
      arrows
      dots
      :items="items"
      :ui="{ item: 'basis-1/3' }"
    >
      <div class="carousel-card align-right">
        <h3 class="card-title">{{ item.title }}</h3>

        <!-- TAGS -->
        <div class="tags">
          <UBadge
            v-for="tool in item.tools"
            :key="tool"
            size="sm"
            color="neutral"
            variant="outline"
            class="tag"
          >
            {{ tool }}
          </UBadge>
        </div>

        <p class="card-text">{{ item.text }}</p>
      </div>
    </UCarousel>
  </section>

  <USeparator />

  <!-- SKILLS -->
  <section id="skills" class="page-section">
    <h1 class="title align-left">SKILLS</h1>

    <div class="skills">
      <UBadge class="skill-item">Go</UBadge>
      <UBadge class="skill-item">Java</UBadge>
      <UBadge class="skill-item">JavaScript</UBadge>
      <UBadge class="skill-item">TypeScript</UBadge>
      <UBadge class="skill-item">Python</UBadge>
      <UBadge class="skill-item">C++</UBadge>
    </div>
  </section>

  <USeparator />

  <!-- EXPERIENCE -->
  <section id="experience" class="page-section">
    <h1 class="title align-right">EXPERIENCE</h1>

    <UTimeline :items="experienceItems" />
  </section>

  <USeparator />

  <!-- CONTACT -->
  <section id="contact" class="page-section">
    <h1 class="title align-left">CONTACT ME</h1>

    <div class="contact-buttons">
      <UButton class="contact-btn" to="mailto:your@email.com">Email</UButton>
      <UButton class="contact-btn" to="https://github.com/AevaPlays">GitHub</UButton>
    </div>

    <form class="contact-form">
      <UFormField label="Name">
        <UInput />
      </UFormField>

      <UFormField label="Message">
        <UTextarea />
      </UFormField>

      <UButton type="submit">Send</UButton>
    </form>
  </section>
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

/* NAVBAR (UNCHANGED) */
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
  height: 1em;
}

.nav-link {
  color: var(--color-orange);
  font-weight: bold;
  font-size: 2em;
  text-decoration: none;
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

.card-title {
  font-size: 3.5rem;
  color: var(--color-orange);
}

.card-text {
  font-size: 1.5rem;
  color: var(--color-orange);
  text-align: left;
}

/* TAGS */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

/* SKILLS */
.skills {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.skill-item :deep(*) {
  color: var(--color-dark-blue) !important;
}

/* CONTACT */
.contact-buttons {
  display: flex;
  gap: 1rem;
}

.contact-btn :deep(*) {
  color: var(--color-dark-blue) !important;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin-top: 2rem;
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