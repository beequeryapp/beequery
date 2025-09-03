import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    // Vite options for Wails development
    clearScreen: false,
    server: {
        port: 5173, // Default Vite port for Wails
        strictPort: false,
        host: "localhost"
    }
});
