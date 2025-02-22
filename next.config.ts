// // import type { NextConfig } from "next";
// //
// // const nextConfig: NextConfig = {
// //   /* config options here */
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ["@svgr/webpack"],
//       exportType: "named",
//       options: {
//         exportType: "named"
//       }
//     });
//
//     return config;
//   }
// };
// //
// // export default nextConfig;
// //
// // // import type { NextConfig } from "next";
// // //
// // // const nextConfig: NextConfig = {
// // //   /* config options here */
// // //
// // //
// // //   webpack(config) {
// // //     config.module.rules.push({
// // //       // test: /\.svg$/i,
// // //       // issuer: /\.[jt]sx?$/,
// // //       // use: ["@svgr/webpack"]
// // //
// // //       test: /\.(svg)$/,
// // //       use: [
// // //         {
// // //           loader: require.resolve("@svgr/webpack"),
// // //           options: {
// //             namedExport: true,
// //             prettier: false,
// //             svgo: false,
// //             svgoConfig: {
// //               plugins: [{ removeViewBox: false }]
// //             },
// //             titleProp: true,
// //             ref: true
// // //           }
// // //         },
// // //         {
// // //           loader: require.resolve("file-loader")
// // //           // options: {
// // //           //   name: "static/media/[name].[ext]"
// // //           // }
// // //         }
// // //       ],
// // //       issuer: {
// // //         and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
// // //       }
// // //
// // //     });
// // //
// // //     return config;
// // //   }
// // // };
// // //
// // // export default nextConfig;
// //
// // // module.exports = {
// // //   webpack(config) {
// // //     // Grab the existing rule that handles SVG imports
// // //     const fileLoaderRule = config.module.rules.find((rule) =>
// // //       rule.test?.test?.(".svg")
// // //     );
// // //
// // //     config.module.rules.push(
// // //       // Reapply the existing rule, but only for svg imports ending in ?url
// // //       {
// // //         ...fileLoaderRule,
// // //         test: /\.svg$/i,
// // //         resourceQuery: /url/ // *.svg?url
// // //       },
// // //       // Convert all other *.svg imports to React components
// // //       {
// // //         test: /\.svg$/i,
// // //         issuer: fileLoaderRule.issuer,
// // //         resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
// // //         use: ["@svgr/webpack"]
// // //       }
// // //     );
// // //
// // //     // Modify the file loader rule to ignore *.svg, since we have it handled now.
// // //     fileLoaderRule.exclude = /\.svg$/i;
// // //
// // //     return config;
// // //   }
// // //
// // // // ...other config
// // // };
// //
// // // import { NextConfig } from "next";
// // //
// // // const nextConfig: NextConfig = {
// // //   reactStrictMode: true,
// // //   swcMinify: true,
// // //   webpack(config) {
// // //     config.module.rules.push({
// // //       test: /\.svg$/,
// // //       use: [{ loader: "@svgr/webpack", options: { icon: true } }, {
// // //         loader: "url-loader", options: {
// // //           esModule: false
// // //         }
// // //       }]
// // //     });
// // //     return config;
// // //   }
// // // };
// // //
// // // module.exports = nextConfig;
//
//
// import { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//   webpack(config) {
//     // Grab the existing rule that handles SVG imports
//     const fileLoaderRule = config.module.rules.find((rule) =>
//       rule.test?.test?.(".svg")
//     );
//
//     config.module.rules.push(
//       // // Reapply the existing rule, but only for svg imports ending in ?url
//       // {
//       //   ...fileLoaderRule,
//       //   test: /\.svg$/i,
//       //   resourceQuery: /url/ // *.svg?url
//       // },
//       // Convert all other *.svg imports to React components
//       {
//         test: /\.svg$/i,
//         issuer: fileLoaderRule.issuer,
//         resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
//         use: [{
//           loader: "@svgr/webpack",
//           options: {
//             namedExport: true
//             // prettier: false,
//             // svgo: false,
//             // svgoConfig: {
//             //   plugins: [{ removeViewBox: false }]
//             // },
//             // titleProp: true,
//             // ref: true
//           }
//         },
//           {
//             loader: "url-loader"
//
//           }
//         ]
//
//       }
//     );
//
//     // Modify the file loader rule to ignore *.svg, since we have it handled now.
//     fileLoaderRule.exclude = /\.svg$/i;
//
//     return config;
//   }
//
//   // ...other config
// };
//
// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     use: ["@svgr/webpack"]
  //   });
  //
  //   return config;
  // }

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"]
    });

    return config;
  },

  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js"
        }
      }
    }
  }


};

export default nextConfig;