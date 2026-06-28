<template>
    <section id="about" class="page-section">
        <h1 class="title align-left">ABOUT ME</h1>
        <div class="about-inner md:flex-row flex-col">
            <p class="section-text align-left">
                I completed a one-and-a-half-year intensive education focused on real-world industry
                applications of computer science, gaining hands-on experience in full-stack development.
                I enjoy learning new technologies, stay calm under pressure, value constructive feedback,
                and work well in collaborative environments.
                <br /><br />
                Outside of coding, I enjoy crocheting, playing video games including The Elder Scrolls and
                The Legend of Zelda series, and spending time with my cat.
            </p>
            <img class="about-image md:w-[25rem] md:h-[25rem] xl:w-[30rem] xl:h-[30rem] w-64 h-64 self-center mx-auto" src="/Marcel.png" alt="Marcel" />
        </div>
    </section>
</template>

<style scoped>
.section-text {
    font-size: 1.3rem;
    max-width: 700px;
    padding: 1rem;
    color: var(--color-orange);
}

.about-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.about-image {
    object-fit: cover;
    flex-shrink: 0;
    margin-right: 6rem;
    border: 10px solid var(--color-dark-blue);
    border-radius: 10%;
}
</style>