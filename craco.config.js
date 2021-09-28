const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: {
            //   '@primary-color': '#1DA57A',
            //   '@secondary-color': '#FF0000',
            //   '@success-color': '#0FF0FF'
            // 'primary-color': '#dddddd',
            // },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};