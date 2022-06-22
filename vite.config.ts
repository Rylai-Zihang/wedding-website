import { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import { defineConfig, loadEnv } from "vite"
import { svgBuilder } from "./src/plugins/svgBuilder"

// https://vitejs.dev/config/
export default ({ command, mode }) => {
    return defineConfig({
        plugins: [vue(), svgBuilder("./src/assets/icons/")],
        alias: {
            "@": resolve(__dirname, "./src")
        },
        server: {
            port: 3002,
            host: "0.0.0.0",
            proxy: {
                "/wedding/v1": {
                    target:
                        mode === "development"
                            ? loadEnv(mode, process.cwd()).VITE_APP_DEV_URL
                            : loadEnv(mode, process.cwd()).VITE_APP_PROD_URL,
                    changeOrigin: true
                }
            }
        }
    })
}
