export type GuestBody = {
    name: string
    number?: string
    extras: number
    need_accommodation: boolean
    invitation_code: string
    message?: string
    token: string
}

export type AlertType = "success" | "error" | "warning"
