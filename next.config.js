/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        // Add stability for React 18 with Next 15
        serverComponentsExternalPackages: [],
    }
};

module.exports = nextConfig; 