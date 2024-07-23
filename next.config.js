/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: false,
    sassOptions: {
        prependData: `@import "@/scss/mixin.scss";`,
        outPutStyle: "expanded"
    },
}

module.exports = nextConfig
