<script lang="ts">
    import { ref, watch, defineComponent } from "vue"
    import { useRouter } from "vue-router"
    import Header from "@/pages/Header.vue"
    import Footer from "@/pages/Footer.vue"
    import BGM from "@/pages/BGM.vue"
    export default defineComponent({
        components: {
            Header,
            Footer,
            BGM
        },
        setup() {
            const showLoading = ref(false)
            const router = useRouter()
            // 未加载过
            if (!localStorage.getItem("wedding-site-loading")) {
                router.push({
                    name: "loading"
                })
                showLoading.value = true
                localStorage.setItem("wedding-site-loading", "loaded")
                setTimeout(() => {
                    showLoading.value = false
                }, 3000)
            }
            watch(
                showLoading,
                (value) => {
                    if (!value) {
                        router.push({
                            name: "home"
                        })
                    }
                },
                { immediate: true }
            )
        }
    })
</script>

<template>
    <router-view v-slot="{ Component, route }">
        <Header v-if="route.meta.showHeader" :route="route.name" />
        <transition :name="route.meta.transitionName">
            <component :is="Component" />
        </transition>
        <BGM v-if="route.meta.showHeader" />
        <Footer v-if="route.meta.showHeader" />
    </router-view>
</template>

<style>
    #app {
        /* font-family: 'Noto Sans SC'; */
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .fade-enter-active,
    .fade-leave-active,
    .show-enter-active,
    .show-leave-active {
        transition: opacity 1s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .show-enter-from,
    .show-leave-to {
        opacity: 1;
    }
</style>
