<script lang="ts">
    import { Swiper, SwiperSlide } from "swiper/vue"
    import { Lazy, EffectFade, EffectCoverflow, Pagination } from "swiper"
    import "swiper/css"
    import "swiper/css/pagination"
    import "swiper/css/effect-fade"
    import "swiper/css/effect-coverflow"
    import moment1 from "@/assets/pictures/best-moment-1-1.jpeg"
    import moment2 from "@/assets/pictures/best-moment-2-1.jpeg"
    import moment3 from "@/assets/pictures/best-moment-2-2.jpeg"
    import moment4 from "@/assets/pictures/best-moment-2-3.jpeg"
    import moment5 from "@/assets/pictures/best-moment-3-1.jpeg"
    import moment6 from "@/assets/pictures/best-moment-3-2.jpeg"
    import moment7 from "@/assets/pictures/best-moment-3-3.jpeg"
    import moment8 from "@/assets/pictures/best-moment-4-1.jpeg"
    import moment9 from "@/assets/pictures/best-moment-4-2.jpeg"
    import moment10 from "@/assets/pictures/best-moment-4-3.jpeg"

    import { defineComponent } from "vue"
    export default defineComponent({
        components: {
            Swiper,
            SwiperSlide
        },
        setup() {
            return {
                modules: [Lazy, Pagination, EffectFade, EffectCoverflow],
                moment1,
                moment2,
                moment3,
                moment4,
                moment5,
                moment6,
                moment7,
                moment8,
                moment9,
                moment10
            }
        }
    })
</script>

<template>
    <section id="bestMoment" class="best-moment-container relative bg-white min-h-screen py-10">
        <h3 class="text-3xl font-alex mb-5">1568 Days -> +∞</h3>
        <div class="images-container px-1/12 overflow-hidden text-sm leading-6 lg:text-md lg:leading-8">
            <div class="text-left">
                <p>我们曾经经历了接近三年的异地恋</p>
                <p>超过一半的相处时光都在两地度过</p>
            </div>
            <div class="swiper-container w-11/12 md:w-8/12 lg:w-6/12 mt-2 mb-4">
                <v-lazy-image :src="moment1" />
            </div>
            <div class="text-right">
                <p>也正因为如此~</p>
                <p>在一块的每一天，我们都不想浪费</p>
            </div>
            <div class="swiper-container mt-2 w-11/12 md:w-8/12 lg:w-6/12 ml-1/12 md:ml-4/12 lg:ml-6/12">
                <swiper class="swiper" :space-between="30" :effect="'fade'" :pagination="true" :modules="modules">
                    <swiper-slide class="mb-10">
                        <v-lazy-image :src="moment2" />
                    </swiper-slide>
                    <swiper-slide>
                        <v-lazy-image :src="moment3" />
                    </swiper-slide>
                    <swiper-slide>
                        <v-lazy-image :src="moment4" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="text-left">
                <p>有一天我们想到，把真实的幸福续期</p>
                <p>“咱们结婚吧，以后就能一起过年了”</p>
                <p>“有道理...好！”</p>
            </div>
            <div class="swiper-container mt-2 w-11/12 md:w-8/12 lg:w-6/12">
                <swiper class="swiper" :space-between="30" :effect="'fade'" :pagination="true" :modules="modules">
                    <swiper-slide class="mb-10">
                        <v-lazy-image :src="moment5" />
                    </swiper-slide>
                    <swiper-slide>
                        <v-lazy-image :src="moment6" />
                    </swiper-slide>
                    <swiper-slide>
                        <v-lazy-image :src="moment7" />
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
                <swiper class="swiper" :space-between="30" :effect="'fade'" :pagination="true" :modules="modules">
                    <swiper-slide class="mb-10">
                        <v-lazy-image :src="moment8" />
                    </swiper-slide>
                    <swiper-slide>
                        <v-lazy-image :src="moment9" />
                    </swiper-slide>
                    <swiper-slide>
                        <v-lazy-image :src="moment10" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>
