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
            //cdn.sanity.io
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
                pathname: "/**",
            },
        ],
    },
   
   
}

module.exports = nextConfig
