/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    // Update the basePath to match your GitHub repo name
    // e.g., if your repo is username/portfolio, use '/portfolio'
    // Leave as empty string if using a custom domain or publishing to username.github.io repo
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig; 