import type { NextConfig } from "next";


const repoName = "SergeyShmidt"; // Имя репозитория (точно как в URL)
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Главное: включаем статический экспорт
  images: {
    unoptimized: true // Отключаем оптимизацию изображений для экспорта
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  sassOptions: {
    additionalData: `$--sm: 380px;$--md: 640px;$--lg: 1200px; $--lg-2: 1024px; $--laptop: 1400px;  $--xl: 1920px;$--content-main: #F1EDED;`
  },
  reactStrictMode: false
};

export default nextConfig;