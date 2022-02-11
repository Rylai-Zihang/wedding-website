<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
// TODO data- preload
export default defineComponent({
  setup() {
    const hero = ref<HTMLElement|null>(null)
    onMounted(() => {
        const src = hero.value!.getAttribute('data-bg')?.split(',')
        const html = document.documentElement
        if(src) {
            const [desktop, mobile] = src
            html.style.setProperty('--bg-desktop', `url(${desktop})`)
            html.style.setProperty('--bg-mobile', `url(${mobile})`)
        }
    })
    return {
      hero
    }
  }
})
</script>

<template>
    <section ref="hero" class="hero bg-cover" data-bg="'../assets/hero-min.jpg', '../assets/hero-min-sm.jpg'">
        <section class="navigation bg-fixed font-light">
            <header class="mx-auto w-9/12 px-0 py-6 border-translucency border-b">
                <div class="flex">
                    <div class="logo inline-block">
                        <a href="#">
                            <img src="../assets/logo.png" class="h-12">
                        </a>
                    </div>
                    <div class="flex items-center">
                        <nav>
                            <ul class="primary-nav ml-12">
                                <li>
                                    <a href="#intro">婚礼日程</a>
                                </li>
                                <li>
                                    <a href="#intro">关于我们</a>
                                </li>
                                <li>
                                    <a href="#intro">影像收集</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </section>
        <div class="container"></div>
    </section>
</template>

<style lang="scss">
@media screen and (max-width: 768px) {
  .hero {
    background-image: url('./src/assets/hero-min-sm.jpg');
    min-height: 750px;
    background-position: 60%;
  }
}

@media screen and (min-width: 768px) {
  .hero {
    background-image: url('./src/assets/hero-min.jpg');
    min-height: 750px;
    background-position: 0 50%;
  }
}

.primary-nav {
  li {
    display: inline-block;
    color: #fff;
    padding-right: 25px;
  }
}
</style>
