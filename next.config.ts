import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  webpack(config, options) {
    console.log("isServer", options);
    const { isServer } = config;


    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"]
    });

    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve("file-loader"),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false
          }
        }
      ]
    });

    return config;
  },

  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js"
        },
        "/\.(ogg|mp3|wav|mpe?g)$/i": {
          loaders: ["url-loader"],
          as: "*.js"
        }
      }
    }
  },
  sassOptions: {
    additionalData: `$--sm: 380;$--md: 640;$--lg: 1024;$--xl: 1920;$--content-main: #F1EDED;  `
  },
  reactStrictMode: false


};

export default nextConfig;