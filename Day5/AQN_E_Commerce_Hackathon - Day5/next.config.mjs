// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig ={
//     images:{
//         domains:["cdn.sanity.io"]
//     }
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["cdn.sanity.io"],
    },
    experimental: {
      allowMiddlewareResponseBody: true, 
    },
  };
  
  export default nextConfig;
  