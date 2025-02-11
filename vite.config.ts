import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // For GitHub Pages, use the repository name as the base path
  const basePath = command === 'build' && mode === 'production' 
    ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1]}/`
    : '/';  // Use root base for development

  return {
    plugins: [react()],
    base: basePath,  // Set base path dynamically
  }
})
