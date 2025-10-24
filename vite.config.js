import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                services: resolve(__dirname, "services.html"),
                portfolio: resolve(__dirname, "portfolio.html"),
                contacts: resolve(__dirname, "contacts.html"),
                fleet: resolve(__dirname, "fleet.html"),
                reviews: resolve(__dirname, "reviews.html"),
            },
        },
    },
});
