import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/https://kokoaungstar.github.io/KoKoAung/',  // Adjust according to your GitHub Pages URL
  plugins: [react()],
});
