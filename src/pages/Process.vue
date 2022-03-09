<script setup lang="ts"></script>

<template>
    <section class="process-container relative bg-fixed bg-cover min-h-[720px]">
        <div
            class="process-card absolute lg:w-4/12 md:w-5/12 w-10/12 h-5/6 bg-gray-50 text-gray-600 rounded-xl shadow-xl ring-1 ring-gray-900/5 left-[10%] top-[10%] md:p-10 py-10 px-5"
        >
            <h3 class="process-title text-3xl">Timeline</h3>
            <ul class="process-timeline relative mt-5 h-4/6">
                <li
                    class="process-top absolute top-0 left-[50%] md:w-4 md:h-4 w-3 h-3 rounded-2xl border-2 z-10 md:ml-[-5.5px] ml-[-3.5px] bg-topicGreen"
                ></li>
                <li class="process-item relative h-1/4 flex md:px-[10%] px-0 items-center">
                    <div class="process-info relative w-1/2">
                        <p class="text-base">宾客签到</p>
                        <p class="text-xs">SIGN-IN</p>
                    </div>
                    <div class="process-time flex justify-center items-center relative w-1/2">
                        <w-icon class="mx-2 text-2xl inline-block" name="arrive" color="#70a076"></w-icon>
                        <p class="text-base">10:18AM</p>
                    </div>
                </li>
                <li class="process-item relative h-1/4 flex md:px-[10%] px-0 items-center">
                    <div class="process-info relative w-1/2">
                        <p class="text-base">草坪仪式</p>
                        <p class="text-xs">CEREMONY</p>
                    </div>
                    <div class="process-time flex justify-center items-center relative w-1/2">
                        <w-icon class="mx-2 text-2xl inline-block" name="ceremony" color="#70a076"></w-icon>
                        <p class="text-base">10:58AM</p>
                    </div>
                </li>
                <li class="process-item relative h-1/4 flex md:px-[10%] px-0 items-center">
                    <div class="process-info relative w-1/2">
                        <p class="text-base">集体合影</p>
                        <p class="text-xs">PHOTO</p>
                    </div>
                    <div class="process-time flex justify-center items-center relative w-1/2">
                        <w-icon class="mx-2 text-2xl inline-block" name="photo" color="#70a076"></w-icon>
                        <p class="text-base">11:48AM</p>
                    </div>
                </li>
                <li class="process-item relative h-1/4 flex md:px-[10%] px-0 items-center">
                    <div class="process-info relative w-1/2">
                        <p class="text-base">室内用餐</p>
                        <p class="text-xs">LUNCH/DRINK</p>
                    </div>
                    <div class="process-time flex justify-center items-center relative w-1/2">
                        <w-icon class="mx-2 text-2xl inline-block" name="cheers" color="#70a076"></w-icon>
                        <p class="text-base">11:58AM</p>
                    </div>
                </li>
            </ul>
            <h3 class="process-dress-code text-2xl mt-5">Dress Code</h3>
            <ul class="process-timeline text-base relative mt-3 md:text-center text-left">
                <li>👧🏻：白色/米色/杏色 连衣裙/套装</li>
                <li>👦🏻：白色/杏色上衣 & 黑色/灰色裤装</li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
    .process-container {
        background-image: url("../assets/pictures/process-bg.jpg");
    }
    @media screen and (max-width: 768px) {
        .process-container {
            background-image: url("./src/assets/pictures/process-bg-sm.jpg");
        }
    }
    .process-title,
    .process-dress-code {
        font-family: "Alex Brush", sans-serif;
    }
    .process-top {
        content: "";
        display: block;
        border: 4px solid #eee;
    }
    .process-item {
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            height: 100%;
            width: 4px;
            background: #eee;
        }
    }
</style>
