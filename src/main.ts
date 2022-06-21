import { createApp } from "vue"
import App from "./App.vue"
import Icon from "./components/Icon.vue"
import Alert from "./components/Alert.vue"
import VLazyImage from "v-lazy-image"
import "./index.css"

const app = createApp(App)
app.component("WIcon", Icon).component("w-alert", Alert).component("v-lazy-image", VLazyImage).mount("#app")
