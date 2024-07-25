/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: false,
    sassOptions: {
        prependData: `@import "@/scss/mixin.scss";`,
        outPutStyle: "expanded"
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: "/api/v1/:slug*",
    //             destination: "https://texts.mpaadao.xyz/api/v1/:slug*",
    //         },
    //     ]
    // },
}

module.exports = nextConfig
