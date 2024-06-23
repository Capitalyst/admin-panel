/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "mappasaurus-media.s3.ap-south-1.amazonaws.com",
      "cdn.mappasaurus.com",
    ],
  },
};

export default nextConfig;
