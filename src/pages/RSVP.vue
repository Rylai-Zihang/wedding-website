<script lang="ts">
    import { defineComponent, reactive, getCurrentInstance } from "vue"
    import { string, object, number } from "yup"
    import { Field, Form, ErrorMessage, SubmissionHandler } from "vee-validate"
    import { createOrUpdateGuest } from "../api"
    import { humpToLine } from "../utils"
    import { GuestBody } from "../../typings"

    export default defineComponent({
        components: {
            Field,
            Form,
            ErrorMessage
        },
        setup() {
            const app = getCurrentInstance()
            const isPC = app?.appContext.config.globalProperties.$isPC
            const state = reactive({
                alertMessage: "",
                alertType: "",
                alertShow: false
            })

            const phoneRegExp = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
            const schema = object({
                name: string().required("请输入您的姓名"),
                number: string().matches(phoneRegExp, "请输入正确的联系方式"),
                extras: number().typeError("请输入一个数字").required("请输入您的同行人数"),
                needAccommodation: number().required(),
                invitationCode: number().typeError("请输入一组数字").required("请输入您的邀请码"),
                message: string().max(20, "留言不多于20个字符")
            })
            const onSubmit: SubmissionHandler<Record<string, unknown>, Promise<unknown>> = (guest) => {
                const body = Object.entries(guest).reduce((previous, current) => {
                    const [key, value] = current
                    return Object.assign(previous, { [humpToLine(key)]: value })
                }, {})
                return createOrUpdateGuest(body as GuestBody)
                    .then(() => {
                        state.alertType = "success"
                        state.alertMessage = "提交成功！"
                        state.alertShow = true
                        setTimeout(() => {
                            state.alertShow = false
                        }, 3000)
                    })
                    .catch((error) => {
                        state.alertType = "warning"
                        state.alertMessage = error.message
                        state.alertShow = true
                    })
            }
            const onInvalidSubmit = () => {
                console.log("errors in submit")
            }
            return {
                onSubmit,
                onInvalidSubmit,
                schema,
                state,
                isPC
            }
        }
    })
</script>

<template>
    <section id="RSVP" class="relative min-h-screen">
        <div v-if="isPC" class="bg-container bg-cover md:bg-fixed"></div>
        <v-lazy-image v-else class="bg-img" src="../src/assets/pictures/rsvp-bg-sm.jpeg"></v-lazy-image>
        <div
            class="rsvp-form absolute top-10 lg:w-4/12 md:w-5/12 w-10/12 left-1/12 z-10 mx-auto bg-white text-gray-600 rounded-xl ring-1 ring-gray-900/5 shadow py-10 px-8 mb-30"
        >
            <h3 class="text-3xl font-alex mb-5">Join With Us</h3>
            <w-alert :visible="state.alertShow" :type="state.alertType" :message="state.alertMessage"></w-alert>
            <Form :validation-schema="schema" @submit="onSubmit" @invalid-submit="onInvalidSubmit">
                <label class="block mb-5">
                    <span class="block text-sm text-left">姓名</span>
                    <Field
                        type="search"
                        clearable
                        placeholder="请输入姓名"
                        name="name"
                        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    />
                    <ErrorMessage name="name" class="inline-block w-full text-left text-xs text-yellow-700" />
                </label>
                <label class="block mb-5">
                    <span class="block text-sm text-left">联系方式</span>
                    <Field
                        type="search"
                        clearable
                        placeholder="请输入您的联系方式"
                        name="number"
                        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    />
                    <ErrorMessage name="number" class="inline-block w-full text-left text-xs text-yellow-700" />
                </label>
                <label class="block mb-5">
                    <span class="block text-sm text-left">同行人数</span>
                    <Field
                        name="extras"
                        type="search"
                        placeholder="请输入您的同行人数，没有则填0"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    />
                    <ErrorMessage name="extras" class="inline-block w-full text-left text-xs text-yellow-700" />
                </label>
                <div class="text-sm mb-5">
                    <span class="block text-left">需安排前一晚的住宿</span>
                    <div class="flex justify-start">
                        <label class="inline-flex items-center mt-3 mr-4">
                            <Field
                                type="radio"
                                class="form-radio h-4 w-4 text-headerGreen focus:ring-blue-500/50"
                                name="needAccommodation"
                                value="1"
                                checked="checked"
                            /><span class="ml-2">需要</span>
                        </label>
                        <label class="inline-flex items-center mt-3">
                            <Field
                                type="radio"
                                class="form-radio h-4 w-4 text-headerGreen ring-blue-500/50"
                                name="needAccommodation"
                                value="0"
                            /><span class="ml-2">不需要</span>
                        </label>
                    </div>
                </div>
                <label class="block mb-5">
                    <span class="block text-sm text-left">邀请码</span>
                    <Field
                        name="invitationCode"
                        type="search"
                        placeholder="请输入您的邀请码"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    />
                    <ErrorMessage
                        name="invitationCode"
                        class="inline-block w-full text-left text-xs text-yellow-700 pt-1"
                    />
                </label>
                <label class="block mb-5">
                    <span class="block text-sm text-left">留言</span>
                    <Field
                        name="message"
                        type="search"
                        placeholder="请输入您的留言"
                        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    />
                    <ErrorMessage name="message" class="inline-block w-full text-left text-xs text-yellow-700" />
                </label>
                <button
                    class="block w-[100%] mt-10 px-6 py-2.5 bg-headerGreenLight text-white leading-tight rounded shadow-md hover:bg-headerGreen hover:shadow-lg focus:bg-headerGreen focus:shadow-lg focus:outline-none focus:ring-0 active:bg-headerGreen active:shadow-lg transition duration-150 ease-in-out"
                >
                    提交
                </button>
            </Form>
        </div>
    </section>
</template>

<style scoped>
    .bg-container {
        background-image: url("../assets/pictures/rsvp-bg.jpeg");
        background-position: 55% 0;
    }
</style>
