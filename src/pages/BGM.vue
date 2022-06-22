<script lang="ts">
    import { defineComponent, ref } from "vue"
    export default defineComponent({
        setup() {
            const audio = ref<HTMLAudioElement>()

            const playing = ref<boolean>(false)

            const toggle = () => {
                if (!audio.value?.paused) {
                    audio.value?.pause()
                    playing.value = false
                } else {
                    audio.value?.play()
                    playing.value = true
                }
            }

            return {
                audio,
                toggle,
                playing
            }
        }
    })
</script>
<template>
    <div class="fixed bottom-6 md:bottom-10 right-2 z-10">
        <audio ref="audio" hidden="true" loop="true">
            <source src="../assets/bgm/M01.ogg" />
        </audio>
        <button :class="{ rotated: playing, 'cursor-pointer': true }" class="mx-2 text-xl md: text-2xl" @click="toggle">
            <w-icon class="inline-block" name="music" color="#DACFCC"></w-icon>
        </button>
    </div>
</template>

<style>
    .rotated {
        -webkit-animation: spin 4s linear infinite;
        animation: spin 4s linear infinite;
    }
    @-webkit-keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>
