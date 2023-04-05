/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
  },
};

module.exports = nextConfig;
