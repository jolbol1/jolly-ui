import { createContentlayerPlugin } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
  redirects() {
    return [
      {
        source: "/default/:path*",
        destination: "/r/styles/default/:path*.json",
        permanent: true,
      },
      {
        source: "/new-york/:path*",
        destination: "/r/styles/new-york/:path*.json",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/docs/components/breadcrumbs",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/breadcrumbs",
        permanent: true,
      },
    ];
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
