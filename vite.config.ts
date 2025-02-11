import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ensure repoName is a valid string (avoid undefined or empty values)
const repoName = process.env.VITE_REPO_NAME || '';

export default defineConfig({
  plugins: [react()],
  base: repoName ? `/${repoName}/` : '/', // Use '/' if repoName is empty
})
