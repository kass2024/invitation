/** @type {import('next').NextConfig} */
const nextConfig = {
    'output':'export',
    images: { unoptimized: true },
    webpack: (config, { isServer }) => {
        // Add a rule to handle font files
        config.module.rules.push({
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: isServer ? 'file-loader' : 'url-loader',
              options: {
                limit: 8192, // in bytes
                fallback: 'file-loader',
                name: '[name].[ext]',
                outputPath: 'static/fonts/nunito/', // where the fonts will be outputted
                publicPath: '../static/fonts/nunito/', // path to the fonts on the server
              },
            },
          ],
        });
    
        return config;
      },
}

module.exports = nextConfig
