import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import mkcert from 'vite-plugin-mkcert';
import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from "dotenv";

export default defineConfig(async ({ command }) => {

    dotenv.config();

    const { needlePlugins, loadConfig } = await import("@needle-tools/engine/plugins/vite/index.js");
    const needleConfig = await loadConfig();
    return {
        plugins: [
            mkcert(),
            tailwindcss(),
            //useGzip(needleConfig) ? viteCompression({ deleteOriginFile: true }) : null,
            needlePlugins(command, needleConfig),
            sveltekit(),
        ],
        server: {
            port: 3000
        }
    }
});