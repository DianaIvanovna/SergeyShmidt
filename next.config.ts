// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//
//   webpack(config: NextConfig) {
//     //console.log("isServer", options);
//     //const { isServer } = config;
//
//
//     config.module.rules.push({
//       test: /\.svg$/i,
//       use: ["@svgr/webpack"]
//     });
//
//     // config.module.rules.push({
//     //   test: /\.(ogg|mp3|wav|mpe?g)$/i,
//     //   exclude: config.exclude,
//     //   use: [
//     //     {
//     //       loader: require.resolve("url-loader"),
//     //       options: {
//     //         limit: config.inlineImageLimit,
//     //         fallback: require.resolve("file-loader"),
//     //         publicPath: `${config.assetPrefix}/_next/static/images/`,
//     //         outputPath: `${isServer ? "../" : ""}static/images/`,
//     //         name: "[name]-[hash].[ext]",
//     //         esModule: config.esModule || false
//     //       }
//     //     }
//     //   ]
//     // });
//
//     return config;
//   },
//
//   config: {
//     output: "export", // Включает статический экспорт
//     images: {
//       unoptimized: true // Отключает оптимизацию изображений для статического экспорта
//     },
//     turbopack: {
//       rules: {
//         "*.svg": {
//           loaders: ["@svgr/webpack"],
//           as: "*.js"
//         }
//         // "/\.(ogg|mp3|wav|mpe?g)$/i": {
//         //   loaders: ["url-loader"],
//         //   as: "*.js"
//         // }
//       }
//     }
//   },
//   sassOptions: {
//     additionalData: `$--sm: 380px;$--md: 640px;$--lg: 1024px;$--xl: 1920px;$--content-main: #F1EDED;  `
//   },
//   reactStrictMode: false
//
//
// };
//
// export default nextConfig;


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
    additionalData: `$--sm: 380px;$--md: 640px;$--lg: 1200px; $--lg-2: 1024px;$--xl: 1920px;$--content-main: #F1EDED;`
  },
  reactStrictMode: false
};

export default nextConfig;