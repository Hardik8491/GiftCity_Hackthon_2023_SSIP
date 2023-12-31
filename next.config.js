/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"],
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
      },
}

module.exports = nextConfig
