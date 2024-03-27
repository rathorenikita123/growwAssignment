/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "groww.in",
        pathname: "/groww-logo-270.png",
      },
      // (https://fakestoreapi.com/patg_name) path can be multiple as there is list of images

      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      }

     
    ],
  },
};

export default nextConfig;
