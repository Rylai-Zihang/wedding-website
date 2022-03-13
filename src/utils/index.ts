function minTwoDigits(n: number): string {
    return ("0" + n).slice(-2)
}

function judgeClient() {
    let client = ""
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        client = "iOS"
    } else if (/(Android)/i.test(navigator.userAgent)) {
        client = "Android"
    } else {
        client = "PC"
    }
    return client
}

export { minTwoDigits, judgeClient }
