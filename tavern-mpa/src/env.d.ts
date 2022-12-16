/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly API_KEY: string;
    readonly CMS_URL: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }