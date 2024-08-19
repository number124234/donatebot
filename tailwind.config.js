/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-bg-color": "var(--tg-theme-bg-color)",
                "secondary-bg-color": "var(--tg-theme-secondary-bg-color)",
                "button-color": "var(--tg-theme-button-color)",
                "button-text-color": "var(--tg-theme-button-text-color)",
                "color": "var(--tg-theme-text-color)",
            }
        },
    },
    plugins: [],
};
