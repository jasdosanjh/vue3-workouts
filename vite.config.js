import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  // TODO: uncomment base when deploying
  // base: '/vue3-workouts',
  plugins: [vue()],
});
