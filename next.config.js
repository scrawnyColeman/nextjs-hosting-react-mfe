const NextFederationPlugin =
  require("@module-federation/nextjs-mf/lib/NextFederationPlugin").default;

module.exports = {
  distDir: "dist",
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          remotes: {
            "react-mfe":
              "react_mfe@https://react-mf-wp5-rk86.vercel.app/remoteEntry.js",
          },
        })
      );
    }

    return config;
  },
};
