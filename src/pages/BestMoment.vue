<script lang="ts">
    import { Swiper, SwiperSlide } from "swiper/vue"
    import { Lazy, EffectFade, EffectCoverflow, Pagination } from "swiper"
    import "swiper/css"
    import "swiper/css/pagination"
    import "swiper/css/effect-fade"
    import "swiper/css/effect-coverflow"

    import { defineComponent } from "vue"
    export default defineComponent({
        components: {
            Swiper,
            SwiperSlide
        },
        setup() {
            return {
                modules: [Lazy, Pagination, EffectFade, EffectCoverflow]
            }
        }
    })
</script>

<template>
    <section id="bestMoment" class="best-moment-container relative bg-white min-h-screen py-10">
        <h3 class="text-3xl font-alex mb-5">1568 + Days -> +∞</h3>
        <div class="images-container px-1/12 overflow-hidden text-sm leading-6 lg:text-md lg:leading-8">
            <div class="text-left">
                <p>我们曾经经历了接近三年的异地恋</p>
                <p>超过一半的相处时光都在两地度过</p>
            </div>
            <div class="swiper-container w-11/12 md:w-8/12 lg:w-6/12 mt-2 mb-4">
                <img src="../assets/pictures/best-moment-1-1.jpeg" />
            </div>

            <div class="text-right">
                <p>也正因为如此~</p>
                <p>在一块的每一天，我们都不想浪费</p>
            </div>
            <div class="swiper-container mt-2 w-11/12 md:w-8/12 lg:w-6/12 ml-1/12 md:ml-4/12 lg:ml-6/12">
                <swiper
                    class="swiper"
                    :lazy="true"
                    :space-between="30"
                    :effect="'fade'"
                    :pagination="true"
                    :modules="modules"
                >
                    <swiper-slide class="mb-10">
                        <img src="../assets/pictures/best-moment-2-1.jpeg" />
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/pictures/best-moment-2-2.jpeg" />
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div
                    ></swiper-slide>
                    <swiper-slide>
                        <img src="../assets/pictures/best-moment-2-3.jpeg" />
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="text-left">
                <p>有一天我们想到，把真实的幸福续期</p>
                <p>“咱们结婚吧，以后就能一起过年了”</p>
                <p>“有道理...好！”</p>
            </div>
            <div class="swiper-container mt-2 w-11/12 md:w-8/12 lg:w-6/12">
                <swiper
                    class="swiper"
                    :lazy="true"
                    :space-between="30"
                    :effect="'fade'"
                    :pagination="true"
                    :modules="modules"
                >
                    <swiper-slide class="mb-10">
                        <img src="../assets/pictures/best-moment-3-3.jpeg" />
                    </swiper-slide>
                    <swiper-slide> <img src="../assets/pictures/best-moment-3-2.jpeg" /></swiper-slide>
                    <swiper-slide>
                        <img src="../assets/pictures/best-moment-3-1.jpeg" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="text-right">
                <p>我们忠诚又自由</p>
                <p>是对方的好朋友</p>
                <p>也是生活的盟友</p>
                <p>2022年7月10日这一天</p>
                <p>我们将保管好过去的1568天</p>
                <p>携手走向人生的正无穷</p>
            </div>
            <div class="swiper-container mt-2 w-11/12 md:w-8/12 lg:w-6/12 ml-1/12 md:ml-4/12 lg:ml-6/12">
                <swiper
                    class="swiper"
                    :lazy="true"
                    :space-between="30"
                    :effect="'fade'"
                    :pagination="true"
                    :modules="modules"
                >
                    <swiper-slide class="mb-10">
                        <img src="../assets/pictures/best-moment-4-1.jpeg" />
                    </swiper-slide>
                    <swiper-slide> <img src="../assets/pictures/best-moment-4-2.jpeg" /></swiper-slide>
                    <swiper-slide>
                        <img src="../assets/pictures/best-moment-4-3.jpeg" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>
