import service from "./request"
function minTwoDigits(n: number): string {
    return ("0" + n).slice(-2)
}

function humpToLine(key: string) {
    return key.replace(/([A-Z])/g, "_$1").toLowerCase()
}

function isPC() {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        return false
    }
    return true
}

export { minTwoDigits, humpToLine, isPC, service }
