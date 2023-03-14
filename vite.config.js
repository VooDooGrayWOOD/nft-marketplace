import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/nft-maerketplace/',
    publicPath: process.env.NODE_ENV === 'production' ? '/nft-maerketplace/' : '/',
    plugins: [vue({})],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './')
        }
    }
})
