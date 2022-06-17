function minTwoDigits(n: number): string {
    return ("0" + n).slice(-2)
}

function humpToLine(key: string) {
    return key.replace(/([A-Z])/g, "_$1").toLowerCase()
}
export { minTwoDigits, humpToLine }
