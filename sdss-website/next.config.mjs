// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     basePath: "/sdss-uoft.github.io",
//     output: "export",
//     reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    //basePath: "/sdss-uoft.github.io",
    basePath: process.env.NODE_ENV === 'production' ? '/sdss-uoft.github.io' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/sdss-uoft.github.io' : '',
    output: "export",
    reactStrictMode: true,
    

       
};

export default nextConfig;

