/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverExternalPackages: [],
    eslint: {
        ignoreDuringBuilds: true, // Temporarily ignoring ESLint during build
    },
    // Add image optimization settings
    images: {
        formats: ['image/webp'], // Prefer WebP format for images
        minimumCacheTTL: 60 * 60 * 24 * 30, // Cache optimized images for 30 days
        deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Optimize for common device widths
        imageSizes: [16, 32, 48, 64, 96, 128, 256], // Optimized image sizes
    },
    // Improve production builds
    poweredByHeader: false, // Remove X-Powered-By header
    // Enable React server components features
    experimental: {
        optimizeCss: true, // Optimize CSS for production
        optimizePackageImports: ['framer-motion', 'lucide-react'],
    },
    compiler: {
        // Remove unnecessary JavaScript from the client bundle
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },
};

module.exports = nextConfig;