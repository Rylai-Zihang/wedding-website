<script setup lang="ts"></script>

<template>
    <section class="feedback bg-cover flex items-center">
        <div class="w-full text-xl md:text-2xl mb-16 text-white">提交成功！期待您的到来😺</div>
    </section>
</template>

<style lang="scss">
    .feedback {
        height: 100vh;
        background-image: url("@/assets/pictures/best-moment-4-3.jpeg");
        background-position: 50% 0;
    }

    @media screen and (max-width: 768px) {
        .feedback {
            background-image: url("@/assets/pictures/feedback-bg-sm.jpeg");
        }
    }
</style>
