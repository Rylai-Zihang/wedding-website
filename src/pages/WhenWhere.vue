<script lang="ts">
    import VueCountdown from "@chenfengyuan/vue-countdown"
    import { defineComponent } from "vue"
    import { minTwoDigits } from "../utils"
    export default defineComponent({
        components: {
            VueCountdown
        },
        setup() {
            const now = new Date().getTime()
            const weddingDate = new Date(2022, 4, 15, 10, 30, 0).getTime()
            const countdown: number = weddingDate - now
            return {
                countdown,
                minTwoDigits
            }
        }
    })
</script>

<template>
    <section id="venue" class="md:pt-28 md:pb-48 pt-16 pb-28 bg-gray-50 text-gray-600 relative">
        <div class="md:hidden text-sm leading-8 text-left px-16 pb-3 leading-8">
            <p>亲爱的家人/好朋友：</p>
            <div class="indent-0">
                <p>当您收到这封婚礼邀请函时</p>
                <p>我们的婚礼已经迈入倒计时</p>
                <p>诚邀您参加这场简短而用心的仪式</p>
                <p>与我们共同见证幸福的时刻</p>
            </div>
        </div>
        <h3 class="wedding-date-title font-alex md:text-5xl text-4xl pt-5 pb-3">May 15th, 2022</h3>
        <div class="wedding-venue text-sm">
            <p class="mb-0.5">江苏省苏州市吴中区太湖高尔夫酒店</p>
            <div class="flex justify-center items-center leading-6">
                <w-icon class="mr-0.5 cursor-pointer" name="position" color="#70A076"></w-icon>
                <a
                    class="text-xs"
                    href="//m.amap.com/navi/?dest=120.391598,31.218124&destName=去太湖高尔夫的路线&key=a1cc03328ca0cb7dbc475381cad9c20f"
                    >点击查看位置</a
                >
            </div>
            <!-- "iosamap://navi?sourceApplication=appname&amp;poiname=fangheng&amp;lat=36.547901&amp;lon=104.258354&amp;dev=1&amp;style=2">导航</a> -->
        </div>
        <section class="text-center md:block hidden">
            <vue-countdown v-slot="{ days, hours, minutes, seconds }" :time="countdown" :interval="1000">
                <div class="countdown-wrapper md:w-auto md:justify-center md:flex-row w-36 mx-auto flex flex-col">
                    <div class="countdown-item">
                        <span class="countdown-amount inline-block w-12 text-3xl">{{ days }}</span>
                        <span class="countdown-period inline-block w-12 md:text-xl text-0.8xl">天</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-amount inline-block w-12 text-3xl">{{ minTwoDigits(hours) }}</span>
                        <span class="countdown-period inline-block w-12 md:text-xl text-0.8xl">小时</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-amount inline-block w-12 text-3xl">{{ minTwoDigits(minutes) }}</span>
                        <span class="countdown-period inline-block w-12 md:text-xl text-0.8xl">分</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-amount inline-block w-12 text-3xl">{{ minTwoDigits(seconds) }}</span>
                        <span class="countdown-period inline-block w-12 md:text-xl text-0.8xl">秒</span>
                    </div>
                </div>
            </vue-countdown>
        </section>
        <div class="green-flower-wrapper absolute w-full ml-[-50%] bg-gradient-to-b from-gray-50 to-white">
            <img class="max-h-full md:w-[516px] md:ml-[calc(50%-258px)]" src="../assets/pictures/green-flower.png" />
        </div>
    </section>
</template>

<style>
    .countdown-item {
        display: flex;
        flex-direction: column;
        margin: 2rem 1rem 0;
        padding: 1.5rem 2rem;
        background-color: #fff;
    }
    .countdown-amount {
        color: #70a076;
        font-weight: 500;
    }
    .green-flower-wrapper {
        left: 50%;
        bottom: -4rem;
    }
</style>
