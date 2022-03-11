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
            topicGreen: "#70a076",
            halfTransparent: "rgba(255, 255, 255, 0.7)",
            headerGreenLight: "rgba(145, 160, 160, 0.88)",
            headerGreen: "rgba(145, 160, 160)",
        },
        fontFamily: {
            alex: ["Alex Brush", "sans-serif"]
        },
        extend: {
            inset: {
                "1/12": "8.333333333333333%"
            }
        }
    },
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("@tailwindcss/forms")({
            strategy: "class"
        })
    ]
}
