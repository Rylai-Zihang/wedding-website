import { createApp } from "vue"
import App from "./App.vue"
import Icon from "./components/Icon.vue"
import Alert from "./components/Alert.vue"
import VLazyImage from "v-lazy-image"
import { isPC } from "@/utils"
import "./index.css"

const app = createApp(App)
app.config.globalProperties.$isPC = isPC()

app.component("WIcon", Icon).component("w-alert", Alert).component("v-lazy-image", VLazyImage).mount("#app")
