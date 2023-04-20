// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '倪培洋的笔记本',
  tagline: 'May the Force be with you',
  favicon: 'img/favicon.ico',

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
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bonjour-npy/bonjour-npy.github.io',
        },
        blog: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bonjour-npy/bonjour-npy.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
      navbar: {
        hideOnScroll: true,
        title: '倪培洋的笔记本',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Deep Learning',
          // },
          {
            to: '/docs/Deep Learning/intro',
            label: 'Deep Learning',
          },
          {
            to: '/docs/Algorithms/intro',
            label: 'Algorithms',
          },
          {
            to: '/docs/Linux/intro',
            label: 'Linux',
          },
          {
            to: '/docs/others/intro',
            label: 'Others',
          },
          // {
          //   to: '/blog',
          //   label: 'Deep Learning',
          //   position: 'left',
          // },
          {
            href: 'https://github.com/bonjour-npy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact Me',
            items: [
              {
                label: 'TikTok',
                href: 'https://www.douyin.com/user/self?modal_id=7157246567970360614',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/bonjour-npy',
              },
            ],
          },
          {
            title: 'Link Exchange',
            items: [
              {
                label: '学习强国',
                href: 'https://www.xuexi.cn/',
              },
              {
                label: 'Los Santos',
                href: 'https://www.rockstargames.com/gta-v',
              },
              {
                label: 'Star Wars',
                href: 'https://www.starwars.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '学习强国',
                href: 'https://www.xuexi.cn/',
              },
              {
                label: 'Los Santos',
                href: 'https://www.rockstargames.com/gta-v',
              },
              {
                label: 'Star Wars',
                href: 'https://www.starwars.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Peiyang Ni`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
