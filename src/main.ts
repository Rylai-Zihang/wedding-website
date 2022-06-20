import { createApp } from "vue"
import App from "./App.vue"
import Icon from "./components/Icon.vue"
import Alert from "./components/Alert.vue"
import "./index.css"

createApp(App).component("w-icon", Icon).component("w-alert", Alert).mount("#app")
