<template>
    <section ref="hero" class="hero relative bg-cover min-h-screen">
        <div class="tp-container md:pt-48 pt-36">
            <div class="tp-text md:font-medium fall-second md:text-4xl text-2xl text-white">
                Everette
                <w-icon class="mx-0.5 text-base inline-block" name="love" color="#e60012" /> Rylai
            </div>
            <div class="tp-text font-medium fall-first md:text-6xl text-4xl text-white">We are married</div>
        </div>
        <!-- <div class="relative text-left bottom-[-200px] px-10 text-white text-base">
            <p>致亲人和挚友们：</p>
            <div class="indent-8">
                <p>李力和我计划于2022年5月15日</p>
                <p>将彼此四年的陪伴续约为终身</p>
                <p>我们诚挚地邀请您见证这个时刻</p>
            </div>
        </div> -->
    </section>
</template>

<style lang="scss">
    @media screen and (max-width: 768px) {
        .hero {
            background-image: url("./src/assets/pictures/hero-min-sm.jpg");
            background-position: 60%;
        }
    }

    @media screen and (min-width: 768px) {
        .hero {
            background-image: url("./src/assets/pictures/hero-min.jpg");
            background-position: 0 55%;
        }
    }

    .tp-text {
        font-family: "Alex Brush", sans-serif;
    }

    .fall-first {
        opacity: 0;
        animation: floating-first 1s linear 1s forwards;
    }

    .fall-second {
        opacity: 0;
        animation: floating-second 1s linear 2s forwards;
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
