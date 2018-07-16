const path = require('path');

module.exports = (PATH, env, autoprefixer) => {
  const styleLoaders = [
    { loader: 'style-loader', options: { sourceMap: env } },
    { loader: 'css-loader', options: { sourceMap: env } },
    { loader: 'postcss-loader', options: {
        plugins: [
          autoprefixer({
            browsers:['ie >= 8', 'last 4 version']
          })
        ],
        sourceMap: env
      }
    },
    { loader: 'sass-loader', options: { sourceMap: env } }
  ];

  const loader = {
    module: {
      rules: [
        {
          test: /\.(css|scss|sass)$/,
          include: PATH.style,
          use: styleLoaders
        },
        {
          test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100000
              }
            }
          ]
        },
        {
          enforce: "pre",
          test: /\.(ts|tsx)?$/,
          loader: 'tslint-loader',
          exclude: [ "node_modules"],
        },
        {
          test: /\.tsx?$/,
          loaders: [
            {
              loader: "babel-loader",
              query: {
                presets: [
                  'react',
                  ['env', {
                    "targets": {
                      "browsers": ["last 2 versions", "safari >= 10", "ie >= 11"],
                    },
                  }],
                ],
                "plugins": [ "transform-object-rest-spread" ]
              },
            },
            "awesome-typescript-loader"
          ],
        },
        {
          test: /\.jsx?$/,
          exclude:
            [/node_modules/],
          loader:
            "babel-loader",
          query: {
            presets: [
              'react',
              ['env', {
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 10", "ie >= 11"],
                },
              }]
            ],
            "plugins": ["transform-object-rest-spread", "babel-plugin-react-transform" ]
          },
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
        },
      ]
    },
  }

  return loader;
}