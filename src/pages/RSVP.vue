<script lang="ts">
    import { defineComponent } from "vue"
    import { string, object, number, boolean } from "yup"
    import { Field, Form, ErrorMessage } from "vee-validate"
    export default defineComponent({
        components: {
            Field,
            Form,
            ErrorMessage
        },
        setup() {
            const schema = object({
                name: string().required("请输入您的姓名"),
                mobile: string(),
                extras: number().typeError("请输入一个数字").required("请输入您的同行人数"),
                needAccommodation: number().required(),
                invitationCode: number().typeError("请输入一组数字").required("请输入您的邀请码"),
                message: string().max(20, "留言不多于20个字符")
            })
            const onSubmit = (values) => {
                
            }
            const onInvalidSubmit = ({ values, errors, results }) => {
                console.log(values) // current form values
                console.log(errors) // a map of field names and their first error message
                console.log(results) // a detailed map of field names and their validation results
            }
            return {
                onSubmit,
                onInvalidSubmit,
                schema
            }
        }
    })
</script>

<template>
    <section id="RSVP" class="rsvp-container relative bg-cover md:bg-fixed min-h-screen">
        <div
            class="rsvp-form absolute top-10 lg:w-4/12 md:w-5/12 w-10/12 left-1/12 z-10 mx-auto bg-white text-gray-600 rounded-xl ring-1 ring-gray-900/5 shadow py-10 px-8 mb-30"
        >
            <h3 class="text-3xl font-alex mb-5">Join With Us</h3>
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
                    <ErrorMessage name="name" class="inline-block w-full text-left text-xs text-topicGreen" />
                </label>
                <label class="block mb-5">
                    <span class="block text-sm text-left">联系方式</span>
                    <Field
                        type="search"
                        clearable
                        placeholder="请输入您的俩系方式"
                        name="mobile"
                        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    />
                    <ErrorMessage name="mobile" class="inline-block w-full text-left text-xs text-topicGreen" />
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
                    <ErrorMessage name="extras" class="inline-block w-full text-left text-xs text-topicGreen" />
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
                        class="inline-block w-full text-left text-xs text-topicGreen pt-1"
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
                    <ErrorMessage name="message" class="inline-block w-full text-left text-xs text-topicGreen" />
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
