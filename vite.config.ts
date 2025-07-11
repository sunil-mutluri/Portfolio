import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/', // 👈 add this line (exactly matches your GitHub repo name)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
