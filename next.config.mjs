/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable compression (Zoho Catalyst handles this)
    compress: false,

    // Disable ESLint during builds
    eslint: {
        ignoreDuringBuilds: true,
    },

    // Disable TypeScript errors during builds
    typescript: {
        ignoreBuildErrors: true,
    },

    // Disable image optimization for simpler deployment
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
