Personal portfolio (Next.js App Router, Tailwind v4, Framer Motion). **Content** lives in [`content/portfolio.json`](content/portfolio.json). See **[DEPLOY.md](DEPLOY.md)** and **[docs/CONTENT_WORKFLOW.md](docs/CONTENT_WORKFLOW.md)**.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Windows / antivirus notes

If `npm install` or `next build` fails with **EPERM**, **ENOTEMPTY**, or **EISDIR** on this folder:

1. Add **`D:\Cesars Portfolio`** (or your clone path) to **Windows Security � Virus & threat protection � Exclusions**.
2. Close other apps using the folder, then run `powershell -ExecutionPolicy Bypass -File .\scripts\reset-node-modules.ps1` from the project root.
3. If problems persist, clone or copy the project to a short path like **`C:\dev\cesars-portfolio`** (avoids sync tools and long paths).

Dev/build use **webpack** (`--webpack`) so Turbopack does not mis-detect the workspace root on this layout.

### SWC / `next-swc...node is not a valid Win32 application`

- Install [VC++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist) (x64 or ARM64 to match your Windows).
- Re-fetch the native addon: **`npm run reinstall:swc`**
- If SWC still fails after that, you can temporarily add a `.babelrc` with `{"presets":["next/babel"]}` (slower fallback).

### `EPERM` on `.next` / `build` / `types`

Output is set to **`build/`** (not `.next`) in `next.config.ts`. If you still see errors on an old folder, run **`npm run dev:fresh`** (clears `.next`, `build`, and `node_modules/.cache` then starts dev).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy

See **[DEPLOY.md](DEPLOY.md)** (Vercel import, `canonicalBase`, assets). Pushes to `main`/`master` run **CI** ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)): `npm ci`, `npm run lint`, `npm run build`.

## Scripts

- **`npm run lint`** — TypeScript check (`tsc --noEmit`).
- **`npm run lint:eslint`** — ESLint (after a clean install).
- **`npm run build`** / **`npm run start`** — production build and serve.
