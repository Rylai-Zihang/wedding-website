import { createApp } from "vue"
import App from "./App.vue"
import Icon from "./components/Icon.vue"
import Alert from "./components/Alert.vue"
import VLazyImage from "v-lazy-image"
import "./index.css"
import { isPC } from "../src/utils"

const app = createApp(App)
app.config.globalProperties.$isPC = isPC()

app.component("WIcon", Icon).component("w-alert", Alert).component("v-lazy-image", VLazyImage).mount("#app")
