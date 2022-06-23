import { createApp } from "vue"
import App from "./App.vue"
import Icon from "./components/Icon.vue"
import Alert from "./components/Alert.vue"
import VLazyImage from "v-lazy-image"
import { isPC } from "../src/utils"
import router from './route'
import "./index.css"


const app = createApp(App)
app.config.globalProperties.$isPC = isPC()
app.use(router)
app.component("WIcon", Icon).component("w-alert", Alert).component("v-lazy-image", VLazyImage).mount("#app")
