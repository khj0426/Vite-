import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build', // 빌드 결과물이 생성될 폴더명을 변경
  },
  plugins: [react(), tsconfigPaths()],
  base: 'https://khj0426.github.io/Vite-React/',
});
