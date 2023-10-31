const path = require('path');
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  // redefine webpack
  customFields: {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.resolve.extensions.push('.ttf');
        webpackConfig.module.rules.push({
          test: /\.ttf$/,
          use: ['file-loader'],
          include: path.resolve(__dirname, 'static/fonts'),
        });

        return webpackConfig;
      },
    },
  },
  // redefine ends here
  title: '倪培洋的笔记本',
  tagline: '愿原力与你同在',
  favicon: 'img/1.svg',
  

  // Set the production url of your site here
  url: 'https://bonjour-npy.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bonjour-npy', // Usually your GitHub org/user name.
  projectName: 'bonjour-npy.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // breadcrumbs: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bonjour-npy/',
        },
        blog: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bonjour-npy/',
        },
        theme: {
          // customCss: require.resolve('./src/css/custom.css'),
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/header.css'),
            require.resolve('./src/css/fonts.css'),
          ]
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: 'announcementBar-3',
        content: '求实求真，大气大为',
        isCloseable: false,
      },
      // 调整sidebar为可收回
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
      },
      navbar: {
        hideOnScroll: false,
        title: '倪培洋的笔记本',
        logo: {
          alt: 'My Site Logo',
          src: 'img/1.svg',
        },
        items: [
          {
            to: '/docs/Deep Learning/intro',
            label: '深度学习',
          },
          {
            to: '/docs/推免/intro',
            label: '推免',
          },
          {
            to: '/docs/Algorithms/intro',
            label: '算法',
          },
          {
            to: '/docs/Linux/intro',
            label: 'Linux',
          },
          {
            to: '/docs/课程学习/intro',
            label: '课程学习',
          },
          {
            to: '/docs/others/intro',
            label: '其他',
          },
          {
            to: '/docs/鸣谢/intro',
            label: '饮水思源',
          },
          {
            href: 'https://github.com/bonjour-npy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '联系我',
            items: [
              {
                label: '抖音',
                href: 'https://www.douyin.com/user/self?modal_id=7157246567970360614',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/bonjour-npy',
              },
            ],
          },
          {
            title: '外部链接',
            items: [
              {
                label: '共和国国防部',
                href: 'http://www.mod.gov.cn/',
              },
              {
                label: '学习强国',
                href: 'https://www.xuexi.cn/',
              },
              {
                label: '联合国维持和平',
                href: 'https://peacekeeping.un.org/zh',
              },
            ],
          },
          {
            title: '彩蛋',
            items: [
              {
                label: '欢迎来到洛圣都',
                href: 'https://www.rockstargames.com/gta-v',
              },
              {
                label: '星球大战',
                href: 'https://www.starwars.com/',
              },
              {
                label: 'Apple(中国大陆)',
                href: 'https://www.apple.com.cn/',
              },
            ],
          },
          {
            title: 'EDU官网',
            items: [
              {
                label: '研招网推免系统',
                href: 'https://yz.chsi.com.cn/tm/',
              },
              {
                label: '中国高等教育学生信息网(学信网)',
                href: 'https://www.chsi.com.cn/',
              },
              {
                label: '桂林电子科技大学',
                href: 'https://www.guet.edu.cn',
              },
            ],
          },
        ],
        copyright: `Copyright© ${new Date().getFullYear()} by bonjour-npy.github.io. all rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        Languages: ['cpp', 'java', 'python', 'bash', 'c++'],
      },
    }),
};

module.exports = config;

