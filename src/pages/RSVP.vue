<script setup lang="ts"></script>

<template>
    <section id="RSVP" class="rsvp-container relative bg-cover md:bg-fixed min-h-screen">
        <div
            class="rsvp-form absolute top-20 lg:w-4/12 md:w-5/12 w-10/12 left-1/12 z-10 mx-auto bg-white text-gray-600 rounded-xl shadow-xl ring-1 ring-gray-900/5 shadow py-10 px-8"
        >
            <h3 class="text-3xl font-alex mb-5">Join With Us</h3>
            <form>
                <label class="block mb-5">
                    <span class="block text-sm text-left">姓名</span>
                    <input
                        type="text"
                        placeholder="请输入姓名"
                        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    />
                </label>
                <label class="block mb-5">
                    <span class="block text-sm text-left">联系方式</span>
                    <input
                        type="text"
                        placeholder="请输入您的联系方式"
                        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-non"
                    />
                </label>
                <label class="block mb-5">
                    <span class="block text-sm text-left">同行人数</span>
                    <input
                        type="text"
                        placeholder="请输入您的同行人数"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    />
                </label>
                <div class="text-sm mb-5">
                    <span class="block text-left">需安排前一晚的住宿</span>
                    <div class="flex justify-start">
                        <label class="inline-flex items-center mt-3 mr-4">
                            <input
                                type="radio"
                                class="form-radio h-4 w-4 text-headerGreen focus:ring-blue-500/50"
                                name="needAccommodation"
                                checked
                            /><span class="ml-2">需要</span>
                        </label>
                        <label class="inline-flex items-center mt-3">
                            <input
                                type="radio"
                                class="form-radio h-4 w-4 text-headerGreen ring-blue-500/50"
                                name="needAccommodation"
                            /><span class="ml-2">不需要</span>
                        </label>
                    </div>
                </div>
                <label class="block mb-5">
                    <span class="block text-sm text-left">邀请码</span>
                    <input
                        type="text"
                        placeholder="请输入您的邀请码"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    />
                </label>
                <label class="block mb-5">
                    <span class="block text-sm text-left">留言</span>
                    <input
                        type="text"
                        placeholder="请输入您的留言"
                        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    />
                </label>
                <button
                    type="button"
                    class="block w-[100%] mt-10 px-6 py-2.5 bg-headerGreenLight text-white leading-tight rounded shadow-md hover:bg-headerGreen hover:shadow-lg focus:bg-headerGreen focus:shadow-lg focus:outline-none focus:ring-0 active:bg-headerGreen active:shadow-lg transition duration-150 ease-in-out"
                >
                    提交
                </button>
            </form>
        </div>
    </section>
</template>

<style>
    .rsvp-container {
        background-image: url("../assets/pictures/rsvp-bg.jpg");
        background-position: 55% 0;
    }
    @media screen and (max-width: 768px) {
        .rsvp-container {
            background-image: url("../assets/pictures/rsvp-bg-sm-1.jpg");
            background-position: 75% 0;
        }
    }
</style>
