import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
    base: "/donatebot",
    plugins: [vue(), tsconfigPaths()],
    resolve: {
        alias: {
            "@shared": resolve("./src/shared"),
        },
    },
});
