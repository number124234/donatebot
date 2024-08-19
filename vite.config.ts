import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
    base: "/donatebot",
    plugins: [vue()],
    resolve: {
        alias: {
            "@shared": resolve("./src/shared"),
        },
    },
});
