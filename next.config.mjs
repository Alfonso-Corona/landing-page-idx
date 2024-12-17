/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true
    };
    return config;
  },
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"] 
  },
  images: {
    domains: ['images.pexels.com', 'raw.githubusercontent.com'],
  }
};

export default nextConfig;
