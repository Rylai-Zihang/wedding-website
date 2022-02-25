<script lang="ts">
import { defineComponent, ref } from "vue"
export default defineComponent({
    setup() {
        const hero = ref<HTMLElement | null>(null)
        const isActive = ref<boolean>(false)

        function clickToggle() {
            isActive.value = !isActive.value
        }

        return {
            hero,
            isActive,
            clickToggle
        }
    }
})
</script>

<template>
    <section ref="hero" class="hero bg-cover">
        <section class="navigation bg-fixed font-light">
            <header class="mx-auto w-9/12 px-0 py-6 border-translucency border-b">
                <div class="flex items-center justify-between">
                    <div class="logo inline-block">
                        <a href="#">
                            <img src="../assets/pictures/logo.png" class="md:h-12 h-8" />
                        </a>
                    </div>
                    <div
                        class="header-nav md:flex-1 md:opacity-100 md:visible md:relative z-10 md:h-fit md:bg-transparent bg-gray-800 fixed h-full inset-0 opacity-0 invisible"
                        :class="{ open: isActive }"
                    >
                        <nav
                            class="md:flex md:justify-between md:top-0 md:translate-y-0 relative top-[45%] translate-y-[-45%]"
                        >
                            <ul class="primary-nav md:ml-12 m-0 p-0 text-center">
                                <li>
                                    <a href="#aboutUs">关于我们</a>
                                </li>
                                <li>
                                    <a href="#schedule">婚礼日程</a>
                                </li>
                                <li>
                                    <a href="#photoSharing">影像收集</a>
                                </li>
                            </ul>
                            <ul class="member-actions">
                                <li>
                                    <a href="#venue">婚礼地点</a>
                                </li>
                                <li>
                                    <a class="inline-block py-0 px-4 rounded-2xl border-white border-2" href="#rsvp"
                                        >来宾登记</a
                                    >
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="navicon w-[35px] absolute right-[3rem] z-20 md:hidden">
                        <div class="nav-toggle" :class="{ active: isActive }" @click="clickToggle">
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
        </section>
        <div class="tp-container md:mt-32 mt-20">
            <!-- <img class="w-32 mx-auto" src="../assets/pictures/flower-top.png"> -->
            <div class="tp-text md:font-medium font-semibold fall-second md:text-4xl text-2xl text-white">
                Everette <w-icon class="mx-0.5 text-base inline-block" name="love" color="#e60012" /> Rylai
            </div>
            <div class="tp-text font-medium fall-first md:text-6xl text-4xl text-white">We are married</div>
            <!-- <img class="w-32 mx-auto" src="../assets/pictures/flower-bottom.png"> -->
        </div>
    </section>
</template>

<style lang="scss">
$primary-nav-elements: 3;
$member-actions-elements: 2;

@media screen and (max-width: 768px) {
    .hero {
        background-image: url("./src/assets/pictures/hero-min-sm.jpg");
        min-height: 100vh;
        background-position: 60%;
    }
    .header-nav {
        .primary-nav li,
        .member-actions li {
            display: block;
            font-weight: 600;
            font-size: 1.5rem;
            margin-bottom: 25px;
            opacity: 0;
            transform: translate3d(0, -80px, 0);
            transition: transform 0.5s, opacity 0.5s;
        }
        &.open {
            visibility: visible;
            opacity: 0.7;
            transition: opacity 0.5s;
            li {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
            @for $i from 0 to $primary-nav-elements {
                .primary-nav li:nth-child(#{$i + 1}) {
                    transition-delay: ($i + 1) * (0.05s);
                }
            }
            @for $i from 0 to $member-actions-elements {
                .member-actions li:nth-child(#{$i + 1}) {
                    transition-delay: ($i + 1) * (0.05s) + 0.15s;
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .hero {
        background-image: url("./src/assets/pictures/hero-min.jpg");
        min-height: 750px;
        background-position: 0 55%;
    }
}

.navicon .nav-toggle,
.nav-toggle {
    span,
    span:before,
    span:after {
        content: "";
        position: absolute;
        display: block;
        width: 35px;
        height: 3px;
        -moz-border-radius: 1px;
        -webkit-border-radius: 1px;
        border-radius: 1px;
        background: #fff;
        cursor: pointer;
    }
    span:before {
        top: -10px;
    }
    span:after {
        bottom: -10px;
    }
    &.active {
        span {
            background-color: transparent;
            &:before {
                top: 0;
                transform: rotate(45deg);
            }
            &:after {
                top: 10px;
                transform: translateY(-10px) rotate(-45deg);
            }
        }
    }
}

.primary-nav,
.member-actions {
    li {
        display: inline-block;
        color: #fff;
        padding-right: 25px;
    }
    a {
        line-height: 2.5rem;
    }
}

.tp-text {
    font-family: "Alex Brush", sans-serif;
}

.fall-first {
    opacity: 0;
    animation: floating-first 1s linear 4s forwards;
}

.fall-second {
    opacity: 0;
    animation: floating-second 1s linear 5s forwards;
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
