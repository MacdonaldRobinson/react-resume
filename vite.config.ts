import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ensure repoName is a valid string (avoid undefined or empty values)
const repoName = process.env.GITHUB_REPOSITORY 
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` // Extracts the repo name from the full repo path (e.g., user/repo)
  : '';

export default defineConfig({
  plugins: [react()],
  base: repoName ? repoName : '/', // Use '/' if repoName is empty (for local development)
});
