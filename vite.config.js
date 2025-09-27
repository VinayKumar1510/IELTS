import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // IMPORT THE PLUGIN

export default defineConfig({
  // ADD THE PLUGIN TO THE PLUGINS ARRAY
  plugins: [react(), tailwindcss()],
})