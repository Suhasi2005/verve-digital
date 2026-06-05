/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export → produces a plain `out/` folder that can be hosted on any
  // static host (Netlify Drop, tiiny.host, GitHub Pages, Cloudflare Pages)
  // with no server. Re-enable a server (and the /api/contact route) by removing
  // `output: "export"` if deploying to Vercel later.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
