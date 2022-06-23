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
            const weddingDate = new Date(2022, 6, 10, 10, 30, 0).getTime()
            const countdown: number = weddingDate - now

            const openGMap = () => {
                const [latEnd, lonEnd, destination] = [31.218124, 120.391598, "苏州太湖高尔夫酒店"]
                let usrLat: number | undefined, usrLon: number | undefined
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        usrLat = position.coords.longitude
                        usrLon = position.coords.latitude
                    })
                }
                // 获取到用户定位信息 -走导航模式
                // 未获取到用户定位信息 - 走单点标注模式
                if (usrLat && usrLon) {
                    window.location.href = `https://uri.amap.com/navigation?from=${usrLon},${usrLat},我的位置&to=${lonEnd},${latEnd},${destination}&mode=driving&policy=1&src=mypage&coordinate=gaode&callnative=1`
                } else {
                    window.location.href = `https://uri.amap.com/marker?position=${lonEnd},${latEnd}&name=${destination}&src=mypage&coordinate=gaode&callnative=1`
                }
            }

            return {
                countdown,
                minTwoDigits,
                openGMap
            }
        }
    })
</script>

<template>
    <section id="venue" class="md:pt-28 md:pb-48 pt-16 pb-28 bg-gray-50 text-gray-600 relative">
        <div class="text-sm text-left px-20 pb-2 leading-8 lg:hidden">
            <p>亲爱的家人/朋友们：</p>
            <div class="indent-0">
                <p>我们诚挚地邀请您和您的家人</p>
                <p>参加一场简短而用心的户外婚礼</p>
                <p>这里有久违的老友、青绿的草坪</p>
                <p>还有属于你我的美好回忆ღ( ´･ᴗ･` )</p>
                <p>让我们一起度过</p>
                <p>夏日里难忘的一天</p>
            </div>
        </div>
        <h3 class="wedding-date-title font-alex md:text-5xl text-4xl pt-5 pb-3">July 10th, 2022</h3>
        <div class="wedding-venue text-sm">
            <p class="mb-0.5">江苏省苏州市吴中区太湖高尔夫酒店</p>
            <div class="flex justify-center items-center leading-6">
                <w-icon class="mr-0.5 cursor-pointer" name="position" color="#70A076"></w-icon>
                <a class="text-xs" @click="openGMap">看看位置</a>
            </div>
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
            <img class="max-h-full md:w-[516px] md:ml-[calc(50%-258px)]" src="@/assets/pictures/green-flower.png" />
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
