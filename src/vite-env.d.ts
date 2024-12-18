// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_ENV: 'production' | 'staging' | 'development'
    readonly VITE_API_URL: string
    // Add other env variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }