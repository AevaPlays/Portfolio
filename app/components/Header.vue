<template>
    <div class="header">
        <div class="box">
            <div class="box-inner">
                <img class="avatar" src="https://github.com/AevaPlays.png" alt="Amira Erte" />
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
</template>

<style scoped>
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
</style>