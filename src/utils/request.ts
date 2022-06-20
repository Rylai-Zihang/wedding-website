import axios, { AxiosInstance } from "axios"
import { TIME_OUT, TOKEN } from "./../constants"

type Service = AxiosInstance & {
    loading: boolean
    requestCount: number
}
// 创建axios实例
const axiosInstance = axios.create({
    // 服务接口请求
    baseURL: "/wedding/v1",
    // 超时设置
    timeout: TIME_OUT,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
        token: TOKEN
    }
})

const service: Service = Object.assign(axiosInstance, {
    loading: false,
    requestCount: 0
})

//显示loading
const showLoading = () => {
    if (service.requestCount === 0 && !service.loading) {
        service.loading = true
    }
    service.requestCount++
}
//隐藏loading
const hideLoading = () => {
    service.requestCount--
    if (service.requestCount == 0) {
        service.loading = false
    }
}

// 请求拦截
service.interceptors.request.use(
    (config) => {
        showLoading()
        if (config.method === "get" && config.params) {
            let url = config.url + "?"
            for (const propName of Object.keys(config.params)) {
                const value = config.params[propName]
                const part = encodeURIComponent(propName) + "="
                if (value !== null && typeof value !== "undefined") {
                    if (typeof value === "object") {
                        for (const key of Object.keys(value)) {
                            const params = propName + "[" + key + "]"
                            const subPart = encodeURIComponent(params) + "="
                            url += subPart + encodeURIComponent(value[key]) + "&"
                        }
                    } else {
                        url += part + encodeURIComponent(value) + "&"
                    }
                }
            }
            url = url.slice(0, -1)
            config.params = {}
            config.url = url
        }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (res) => {
        hideLoading()
        const code = res.data["code"]
        if (code === 200) {
            return Promise.resolve(res.data.response)
        } else {
            return Promise.reject(res.data.response)
        }
    },
    (error) => {
        hideLoading()
        return Promise.reject(error.response.data)
    }
)

export default service
