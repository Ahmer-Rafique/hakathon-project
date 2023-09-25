/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "commerece-e.vercel.app",
                port: "",
                pathname: "/**",
            },
           
        ],
    }
}

module.exports = nextConfig
