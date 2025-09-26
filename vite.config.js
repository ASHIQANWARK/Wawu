import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss({
    config: {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: [
              'Inter', 
              'system-ui', 
              '-apple-system', 
              'BlinkMacSystemFont', 
              'Segoe UI', 
              'Roboto', 
              'sans-serif'
            ],
            serif: [
              'Playfair Display', 
              'Georgia', 
              'Cambria', 
              'Times New Roman', 
              'Times', 
              'serif'
            ],
            mono: [
              'Fira Code', 
              'Consolas', 
              'Monaco', 
              'Andale Mono', 
              'Ubuntu Mono', 
              'monospace'
            ],
            modern: [
              'SF Pro Display', 
              '-apple-system', 
              'BlinkMacSystemFont', 
              'Segoe UI', 
              'Roboto', 
              'sans-serif'
            ],
            professional: [
              'Source Sans Pro', 
              'Helvetica Neue', 
              'Arial', 
              'sans-serif'
            ]
          },
        },
      },
    }
  })],
})