/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "downloader.disk.yandex.ru",
      },
    ],
  },
};

export default nextConfig;
