/** @type {import('next').NextConfig} */

const domain = process.env.ROOT_DOMAIN;
const protocol = process.env.NEXT_PUBLIC_PROTOCOL;

console.log(domain);
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "loremflickr.com",
            "pearluk.s3.ap-northeast-2.amazonaws.com",
            "pearlukdev.s3.ap-northeast-2.amazonaws.com",
        ],
        formats: ["image/avif", "image/webp"],
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                // destination: 'http://localhost:8000/api/:path*',
                destination: domain
                    ? `${protocol}://api.${domain}/api/:path*`
                    : "http://localhost:8000/api/:path*",
            },
        ];
    },
};

module.exports = nextConfig;
