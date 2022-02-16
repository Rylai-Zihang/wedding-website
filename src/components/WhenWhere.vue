<script lang="ts">
import VueCountdown from '@chenfengyuan/vue-countdown'
export default {
  data() {
    const now = new Date().getTime()
    const weddingDate = new Date(2022, 5, 15, 10, 30, 0).getTime()
    const countdown: number = weddingDate - now
    return {
      countdown
    }
  },
  components: {
    VueCountdown
  }
}
</script>

<template>
  <section class="pt-[100px] pb-[200px] bg-gray-50 text-gray-600">
        <h3 class="wedding-date-title text-5xl pb-5">
            2022年5月15日
        </h3>
        <div class="wedding-venue text-sm">
            <p>江苏省苏州市吴中区</p>
            <p>太湖高尔夫酒店</p>
        </div>
        <section class="text-center">
            <vue-countdown :time="countdown" :interval="1000" v-slot="{ days, hours, minutes, seconds }">
                <div class="countdown-wrapper md:flex-row flex flex-col justify-center">
                    <div class="countdown-item">
                        <span class="countdown-amount text-4xl">{{ days }}</span>
                        <span class="countdown-period text-xl">天</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-amount text-4xl">{{ hours }}</span>
                        <span class="countdown-period text-xl">小时</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-amount text-4xl">{{ minutes }}</span>
                        <span class="countdown-period text-xl">分</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-amount text-4xl">{{ seconds }}</span>
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
  padding: 25px;
  background-color: #fff;
}
.countdown-amount {
  font-family: 'Poppins';
  color: #70a076;
}
.countdown-period {
}
</style>
