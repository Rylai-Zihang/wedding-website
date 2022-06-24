<script setup lang="ts"></script>

<template>
    <section id="process" class="relative bg-cover md:bg-fixed flex items-center">
        <div
            class="process-card absolute lg:w-4/12 md:w-5/12 w-10/12 bg-white text-gray-600 rounded-xl shadow-xl ring-1 ring-gray-900/5 left-1/12 md:p-10 py-10 px-5"
        >
            <h3 class="process-title font-alex text-3xl">Timeline</h3>
            <ul class="process-timeline relative mt-1">
                <li
                    class="process-top absolute top-0 left-[50%] md:w-4 md:h-4 w-3 h-3 rounded-2xl border-2 z-10 md:ml-[-5.5px] ml-[-3.5px] bg-topicGreen"
                ></li>
                <li class="process-item relative flex px-0 py-4 items-center">
                    <div class="process-info w-1/2">
                        <p class="text-base">宾客签到</p>
                        <p class="text-xs">SIGN-IN</p>
                    </div>
                    <div class="process-time flex justify-center items-center relative w-1/2">
                        <w-icon class="mx-2 text-2xl inline-block" name="arrive" color="#70a076"></w-icon>
                        <p class="text-base">10:28AM</p>
                    </div>
                </li>
                <li class="process-item relative flex px-0 py-4 items-center">
                    <div class="process-info w-1/2">
                        <p class="text-base">草坪仪式</p>
                        <p class="text-xs">CEREMONY</p>
                    </div>
                    <div class="process-time flex justify-center items-center relative w-1/2">
                        <w-icon class="mx-2 text-2xl inline-block" name="ceremony" color="#70a076"></w-icon>
                        <p class="text-base">11:08AM</p>
                    </div>
                </li>
                <li class="process-item relative flex px-0 py-4 items-center">
                    <div class="process-info w-1/2">
                        <p class="text-base">集体合影</p>
                        <p class="text-xs">PHOTO</p>
                    </div>
                    <div class="process-time flex justify-center items-center relative w-1/2">
                        <w-icon class="mx-2 text-2xl inline-block" name="photo" color="#70a076"></w-icon>
                        <p class="text-base">11:38AM</p>
                    </div>
                </li>
                <li class="process-item relative flex px-0 py-4 items-center">
                    <div class="process-info w-1/2">
                        <p class="text-base">室内用餐</p>
                        <p class="text-xs">LUNCH/DRINK</p>
                    </div>
                    <div class="process-time flex justify-center items-center relative w-1/2">
                        <w-icon class="mx-2 text-2xl inline-block" name="cheers" color="#70a076"></w-icon>
                        <p class="text-base">11:58AM</p>
                    </div>
                </li>
                <li
                    class="process-bottom absolute bottom-0 left-[50%] md:w-4 md:h-4 w-3 h-3 rounded-2xl border-2 z-10 md:ml-[-5.5px] ml-[-3.5px] bg-topicGreen"
                ></li>
            </ul>
            <h3 class="process-dress-code font-alex text-3xl mt-4">Dress Code</h3>
            <div class="px-5">
                <div class="process-subtitle text-sm leading-6 text-left mt-2">
                    📢：我们邀请了优秀的摄影老师，为大家拍摄美照。 为了更好的拍摄效果，出席着装建议按以下风格哦~：
                </div>
                <ul class="process-timeline text-sm text-topicGreen font-bold leading-6 relative my-2 text-left">
                    <li>女士：白色/米色/杏色 连衣裙/套装</li>
                    <li>男士：白色/杏色上衣 & 黑色/灰色裤装</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
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
    .process-info {
        margin-top: 3%;
    }
    #process {
        min-height: 110vh;
        background-image: url("@/assets/pictures/process-bg.jpeg");
        background-position: 55% 0;
    }
    @media screen and (max-width: 768px) {
        #process {
            background-image: url("@/assets/pictures/process-bg-sm.jpeg");
            background-position: 60%;
        }
    }
</style>
