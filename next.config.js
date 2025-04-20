/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverExternalPackages: [],
    eslint: {
        ignoreDuringBuilds: true, // Temporarily ignoring ESLint during build
    },
};

module.exports = nextConfig;