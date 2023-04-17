import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgr({ exportAsDefault: true }),
        react(),
    ],
    define: {
        __API__: JSON.stringify('http://localhost:8000'),
        __IS_DEV__: JSON.stringify(true),
    },
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
});
