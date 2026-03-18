/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.replit.dev", "*.riker.replit.dev"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
