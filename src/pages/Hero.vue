<template>
    <section ref="hero" class="hero relative bg-cover min-h-screen">
        <div class="tp-container md:pt-48 pt-36">
            <div class="font-alex md:font-medium fall-second md:text-4xl text-2xl text-white">
                Everette
                <w-icon class="mx-0.5 text-base inline-block" name="love" color="#e60012" /> Rylai
            </div>
            <div class="font-alex font-medium fall-first md:text-6xl text-4xl text-white">We are married</div>
        </div>
    </section>
</template>

<style lang="scss">
    .hero {
        background-image: url("../assets/pictures/hero-min.jpeg");
        background-position: 0 55%;
    }

    @media screen and (max-width: 768px) {
        .hero {
            background-image: url("../assets/pictures/hero-min-sm.jpeg");
            background-position: 60%;
        }
    }

    .fall-first {
        opacity: 0;
        animation: floating-first 1s linear 0s forwards;
    }

    .fall-second {
        opacity: 0;
        animation: floating-second 1s linear 1s forwards;
    }

    @keyframes floating-first {
        from {
            opacity: 0;
            transform: translateY(-80px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes floating-second {
        from {
            opacity: 0;
            transform: translateY(-60px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
