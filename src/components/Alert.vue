<script setup lang="ts">
    import { computed } from "vue"
    import { boolean } from "yup"
    import { AlertType } from "../../typings"

    const props = defineProps({
        visible: {
            type: boolean,
            default: false
        },
        type: {
            type: String,
            default: "warning"
        },
        message: {
            type: String,
            required: true
        }
    })

    const colorClass = computed(() => {
        const colorMap = {
            success: "green",
            error: "red",
            warning: "yellow"
        }
        const color = colorMap[props.type as AlertType]
        return `bg-${color}-100 text-${color}-700 `
    })
</script>

<template>
    <Transition>
        <div v-show="visible" :class="colorClass + 'rounded-lg py-2 px-6 text-sm mb-3'" role="alert">
            {{ props.message }}
        </div>
    </Transition>
</template>

<style lang="scss">
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.3s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>
