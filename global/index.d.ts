/// <reference types="store.d.ts" />

declare module '#app';

interface Test1 {
    a: string;
}
declare module '*.webp';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.ico';
declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';
declare module '*.eot';
declare module '*.otf';
declare module 'nuxt' {
    export const defineNuxtConfig: Function;
}
