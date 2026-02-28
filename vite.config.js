// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    include: "**/*.jsx",
  })]
  // styled-jsx ke liye specific config yahan aayegi agar zaroorat padi
})