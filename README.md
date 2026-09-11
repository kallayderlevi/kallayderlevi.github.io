# 180DC Budapest Website

## Private branch admin

Copy `.env.example` to `.env.local`, set a private `VITE_ADMIN_PASSWORD`, then restart the Vite server. The unpublished admin workspace is available at `/branch-admin`.

It can edit the eight board positions, add or remove consultants, upload team photos, and create or delete blog posts. Content is stored in the browser's local storage, so it is suitable for the current static site workflow. For a multi-user production CMS, move authentication and content storage to a server or managed CMS before launch.

## Development

```bash
npm install
npm run dev
```

```bash
npm run build
```

## Original Vite notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
