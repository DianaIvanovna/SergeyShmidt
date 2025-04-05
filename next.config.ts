import type { NextConfig } from "next";

const nextConfig: NextConfig = {

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
  },
  sassOptions: {
    additionalData: `$--sm: 380;$--md: 640;$--lg: 1024;$--xl: 1920;$--content-main: #F1EDED;`
  },
  reactStrictMode: false


};

export default nextConfig;