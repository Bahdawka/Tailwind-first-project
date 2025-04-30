import { defineConfig } from 'vite';
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss({
      config: "./src/css/tailwind.config.css", 
    })
  ],
  base: '/Tailwind-first-project/',
  build: {
    outDir: "dist",
    cssCodeSplit: true,
    assetsDir: "assets",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve (__dirname, "index.html"),
      },
    },
  }
});



