<template>
    <div>
        <div class="header">
            <div class="box md:w-[40%] w-full">
                <div class="box-inner">
                    <img class="avatar md:w-64 md:h-64 w-32 h-32" src="https://github.com/AevaPlays.png" alt="Amira Erte" />
                    <p class="name md:text-4xl text-2xl">Amira Erte</p>
                    <p class="bio-text md:text-base text-sm">
                        Junior Software Engineer | Go, Java, JavaScript, TypeScript, Python, C++
                    </p>
                    <p class="description md:text-2xl text-lg">
                        I am a motivated person with experience in both backend and frontend development,
                        having worked on medium-sized projects in a team environment.
                    </p>
                </div>
            </div>
        </div>
        <div class="mobile-decor md:hidden"></div>
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
    flex-direction: row;
}

.mobile-decor {
    width: 100%;
    height: 16rem;
    background-image: url('/pixel_decor_mobile.jpg');
    background-size: cover;
    background-position: center;
}

@media (max-width: 768px) {
    .header {
        min-height: 0;
    }
}

.box {
    background-color: var(--color-dark-orange);
    padding: 2rem;
}

.box-inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.avatar {
    border-radius: 50%;
    border: 10px solid var(--color-orange);
    object-fit: cover;
}

.name {
    color: var(--color-orange);
}

.bio-text {
    color: var(--color-orange);
}

.description {
    color: var(--color-orange);
}
</style>