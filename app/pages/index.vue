<script setup lang="ts">
const items = [
  { title: 'Project 1', text: 'Description here' },
  { title: 'Project 2', text: 'Description here' },
  { title: 'Project 3', text: 'Description here' },
  { title: 'Project 4', text: 'Description here' }
]
</script>

<template>
  <!-- HEADER -->
  <div class="header">
    <div class="box">
      <img class="avatar" src="https://github.com/AevaPlays.png" />
      <div class="content">
        <p class="name">Amira Erte</p>
        <p class="bio-text">
          Junior Software Engineer | Go, Java, JavaScript, TypeScript, Python, C++
        </p>
        <p class="description">
          I am a motivated person with experience in both backend and frontend development,
          having worked on medium-sized projects in a team environment. I completed a one-and-half-year
          intensive boot camp focused on ...
        </p>
        <NuxtLink to="/about" class="about-link">more...</NuxtLink>
      </div>
    </div>
  </div>

  <!-- NAVBAR -->
  <UCard class="navbar">
    <nav class="nav-inner">
      <NuxtLink to="/about" class="nav-link">| About |</NuxtLink>
      <NuxtLink to="/projects" class="nav-link">| Projects |</NuxtLink>
      <NuxtLink to="/" class="nav-link">| Experience |</NuxtLink>
      <NuxtLink to="/" class="nav-link">| Contact Me |</NuxtLink>
    </nav>
  </UCard>

  <!-- PROJECTS -->
  <div class="project-section">
    <h1 class = "projects-title">
      PROJECTS
    </h1>
      <UCarousel
        v-slot="{ item }"
        loop
        arrows
        dots
        :items="items"
        :ui="{ item: 'basis-1/3' }"
      >
        <div class="carousel-card">
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-text">{{ item.text }}</p>
        </div>
      </UCarousel>
  </div>
</template>

<style scoped>
/* HEADER */
.header {
  width: 100%;
  min-height: 40em;
  background-color: var(--color-orange);
  display: flex;
}
.box {
  width: 40%;
  height: auto;

  background-color: var(--color-dark-orange);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2rem;
  gap: 1rem;

  color: var(--color-off-white);
}
.avatar {
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  object-fit: cover;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
}
.name {
  font-weight: bold;
  font-size: 2em;
}
.bio-text {
  font-size: 1em;
}
.description {
  font-size: 1.3em;
  overflow-wrap: break-word;
  margin-top: 0.5rem;
}
.about-link {
  text-decoration: underline;
}
.about-link:hover {
  opacity: 0.7;
}

/* NAVBAR */
.navbar {
  width: 100%;
  background-color: var(--color-beige);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 1em;
}

.nav-link {
  color: var(--color-dark-orange);
  font-weight: bold;
  font-size: 2em;
  text-decoration: none;
}

.nav-link:hover {
  opacity: 0.7;
}

/* PROJECTS */
.project-section {
  padding: 1rem;
}
.projects-title{
  color: var(--color-dark-orange);
  padding: 1rem;
  font-size: 5rem;
}
.carousel-card {
  background-color: var(--color-orange);
  color: var(--color-off-white);
  height: 40em;
  border-radius: 16px;
  display: flex;
  padding: 1rem;
  flex-direction: column;
}

.card-title {
  color: var(--color-dark-orange);
  font-size: 1.5rem;
  font-weight: bold;
}

.card-text {
  color: var(--color-dark-orange);
  font-size: 1rem;
  opacity: 0.8;
}

</style>