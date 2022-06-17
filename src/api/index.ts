import { GuestBody } from "../../typings"
import service from "../utils/request"

export const createOrUpdateGuest = (data: GuestBody) => {
    return service({
        url: "/guest",
        method: "POST",
        data
    })
}
