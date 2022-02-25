// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors")
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.slate,
            green: colors.emerald,
            purple: colors.violet,
            yellow: colors.amber,
            pink: colors.fuchsia,
            topicGreen: "#70a076"
        },
        extend: {}
    },
    plugins: []
}
