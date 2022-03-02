<script lang="ts">
    import { defineComponent, onMounted, ref } from "vue"
    export default defineComponent({
        setup() {
            const isActive = ref<boolean>(false)
            const isOpacity = ref<boolean>(true)
            const header = ref<HTMLElement | null>(null)

            onMounted(() => {
                const height = window.innerHeight - 1.5 * header.value.clientHeight
                window.addEventListener("scroll", handleScroll)
                function handleScroll() {
                    if (window.pageYOffset > height) {
                        isOpacity.value = false
                    } else {
                        isOpacity.value = true
                    }
                }
            })

            function clickToggle() {
                isActive.value = !isActive.value
            }

            return {
                header,
                isActive,
                isOpacity,
                clickToggle
            }
        }
    })
</script>

<template>
    <section
        ref="header"
        :class="{ 'bg-transparent': isOpacity }"
        class="header block fixed w-full top-0 z-[100] navigation font-light"
    >
        <header
            class="mx-auto w-9/12 px-0 py-6 border-translucency"
            :class="{ 'border-0': !isOpacity, 'border-b': isOpacity }"
        >
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
                <div class="navicon absolute right-[3rem] z-20 md:hidden">
                    <div class="nav-toggle w-[35px] h-[35px]" :class="{ active: isActive }" @click="clickToggle">
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    </section>
</template>

<style lang="scss">
    $primary-nav-elements: 3;
    $member-actions-elements: 2;

    .header {
        transition: all 300ms ease-in-out;
        background-color: rgba(145, 160, 160, 0.88);
    }
    @media screen and (max-width: 768px) {
        .header-nav {
            transition: opacity 0.5s, visibility 0s 0.5s;
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
            top: 10px;
        }
        span:after {
            top: 20px;
        }
        &.active {
            span {
                background-color: transparent;
                &:before {
                    transform: rotate(45deg);
                }
                &:after {
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
</style>
