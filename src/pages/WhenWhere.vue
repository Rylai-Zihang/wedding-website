<script lang="ts">
import VueCountdown from '@chenfengyuan/vue-countdown'
import { defineComponent } from 'vue'
import { minTwoDigits } from '../utils'
export default defineComponent({
  components: {
    VueCountdown
  },
  setup() {
    const now = new Date().getTime()
    const weddingDate = new Date(2022, 5, 15, 10, 30, 0).getTime()
    const countdown: number = weddingDate - now
    return {
      countdown,
      minTwoDigits
    }
  }
})
</script>

<template>
  <section class="pt-[100px] pb-[200px] bg-gray-50 text-gray-600">
        <h3 class="wedding-date-title text-4xl pb-5">
            2022年5月15日
        </h3>
        <div class="wedding-venue text-base">
            <p class="mb-0.5">江苏省苏州市吴中区太湖高尔夫酒店</p>
            <div class="flex justify-center items-center text-sm">
              <w-icon class="mr-0.5 cursor-pointer" name="position" color="#70A076"></w-icon>
              <a href="//m.amap.com/navi/?dest=120.391598,31.218124&destName=去太湖高尔夫的路线&key=a1cc03328ca0cb7dbc475381cad9c20f">点击查看位置</a>
            </div>
            <!-- "iosamap://navi?sourceApplication=appname&amp;poiname=fangheng&amp;lat=36.547901&amp;lon=104.258354&amp;dev=1&amp;style=2">导航</a> -->
        </div>
        <section class="text-center">
            <vue-countdown :time="countdown" :interval="1000" v-slot="{ days, hours, minutes, seconds }">
                <div class="countdown-wrapper md:flex-row flex flex-col justify-center">
                    <div class="countdown-item">
                        <span class="countdown-amount text-3xl">{{ days }}</span>
                        <span class="countdown-period text-xl">天</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-amount text-3xl">{{ minTwoDigits(hours) }}</span>
                        <span class="countdown-period text-xl">小时</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-amount text-3xl">{{ minTwoDigits(minutes) }}</span>
                        <span class="countdown-period text-xl">分</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-amount text-3xl">{{ minTwoDigits(seconds) }}</span>
                        <span class="countdown-period text-xl">秒</span>
                    </div>
                </div>
            </vue-countdown>
        </section>
  </section>
</template>

<style>
.wedding-date-title {
}
.countdown-item {
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 25px 15px 0;
  padding: 25px 40px;
  background-color: #fff;
}
.countdown-amount {
  font-family: 'Poppins';
  color: #70a076;
}
.countdown-period {
}
</style>
