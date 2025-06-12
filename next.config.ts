import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  webpack(config) {
    //console.log("isServer", options);
    //const { isServer } = config;


    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"]
    });

    // config.module.rules.push({
    //   test: /\.(ogg|mp3|wav|mpe?g)$/i,
    //   exclude: config.exclude,
    //   use: [
    //     {
    //       loader: require.resolve("url-loader"),
    //       options: {
    //         limit: config.inlineImageLimit,
    //         fallback: require.resolve("file-loader"),
    //         publicPath: `${config.assetPrefix}/_next/static/images/`,
    //         outputPath: `${isServer ? "../" : ""}static/images/`,
    //         name: "[name]-[hash].[ext]",
    //         esModule: config.esModule || false
    //       }
    //     }
    //   ]
    // });

    return config;
  },

  config: {
    turbopack: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js"
        }
        // "/\.(ogg|mp3|wav|mpe?g)$/i": {
        //   loaders: ["url-loader"],
        //   as: "*.js"
        // }
      }
    }
  },
  sassOptions: {
    additionalData: `$--sm: 380px;$--md: 640px;$--lg: 1024px;$--xl: 1920px;$--content-main: #F1EDED;  `
  },
  reactStrictMode: false


};

export default nextConfig;