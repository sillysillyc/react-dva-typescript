const {
  override,
  addWebpackAlias,
  addLessLoader,
  addWebpackPlugin,
  addPostcssPlugins,
  setWebpackOptimizationSplitChunks,
  overrideDevServer,
} = require('customize-cra');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const eslintConfig = require('./.eslintrc.js');

/**
 * 代理
 */
const addProxy = (proxy) => (config) => {
  config.proxy = proxy;
  return config;
};
/**
 * devServer before
 * @param before
 * @returns {function(*): *}
 */
const addBefore = (before) => (config) => {
  config.before = before;
  return config;
};

/**
 * 使用eslint
 * @param configRules
 * @returns {function(*): *}
 */
const useEslintConfig = (configRules) => (config) => {
  const updatedRules = config.module.rules.map((rule) => {
    // Only target rules that have defined a `useEslintrc` parameter in their options
    if (rule.use && rule.use.some((use) => use.options && use.options.useEslintrc !== void 0)) {
      const ruleUse = rule.use[0];
      const baseOptions = ruleUse.options;
      const baseConfig = baseOptions.baseConfig || {};
      const newOptions = {
        useEslintrc: false,
        ignore: true,
        baseConfig: { ...baseConfig, ...configRules },
      };
      ruleUse.options = newOptions;
      return rule;

      // Rule not using eslint. Do not modify.
    } else {
      return rule;
    }
  });

  config.module.rules = updatedRules;
  return config;
};
module.exports = {
  webpack: override(
    // addWebpackPlugin(new BundleAnalyzerPlugin()),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import "~@/assets/styles/mixin.less";`,
        },
        localIdentName: '[local]_[hash:base64:5]',
        cssModules: true,
      },
    }),
    useEslintConfig(eslintConfig),
    addWebpackPlugin(
      new StyleLintPlugin({
        context: 'src',
        configFile: path.resolve(__dirname, './.stylelintrc.json'),
        files: '**/*.less',
        failOnError: false,
        quiet: true,
        fix: true, // 修复不规范的样式代码
      })
    ),
    addPostcssPlugins([
      require('postcss-px-to-viewport')({
        unitToConvert: 'px',
        viewportWidth: 1920,
        unitPrecision: 3,
        propList: ['*', '!letter-spacing', '!font-size'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 2,
        mediaQuery: false,
        replace: true,
        exclude: [],
        landscape: false,
      }),
    ]),
    setWebpackOptimizationSplitChunks({
      chunks: 'all', //默认作用于异步chunk，值为all/initial/async
      minSize: 30000, //默认值是30kb,代码块的最小尺寸
      minChunks: 1, //被多少模块共享,在分割之前模块的被引用次数
      maxAsyncRequests: 5, //按需加载最大并行请求数量
      maxInitialRequests: 5, //一个入口的最大并行请求数量
      name: true, //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔开，如vendor~
      automaticNameDelimiter: '~', //默认webpack将会使用入口名和代码块的名称生成命名,比如 'vendors~main.js'
      cacheGroups: {
        //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
        vendors: {
          test: /node_modules/, //条件
          priority: -10, ///优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中,为了能够让自定义缓存组有更高的优先级(默认0),默认缓存组的priority属性为负值.
        },
        commons: {
          minSize: 0, //最小提取字节数
          minChunks: 2, //最少被几个chunk引用
          priority: -20,
          reuseExistingChunk: true, //    如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
        },
      },
    })
  ),
  devServer: overrideDevServer(
    addBefore(function (app) {
      app.get('/api/user/userInfo', function (req, res) {
        res.json({ id: 'Juliana', nickname: 'Juliana' });
      });
    })
    // addProxy({
    //   '/api': {
    //     target: 'localhost:3000/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '',
    //     },
    //   },
    // })
  ),
};
