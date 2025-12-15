const path = require("path");
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// const lightCodeTheme = require('prism-react-renderer/themes/github');
const lightCodeTheme = require("prism-react-renderer").themes.github;
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require("prism-react-renderer").themes.dracula;
const math = require("remark-math").default;
const rehypeKatex = require("rehype-katex").default;
/** @type {import('@docusaurus/types').Config} */

const config = {
  titleDelimiter: "-",
  markdown: {
    format: "detect",
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  trailingSlash: false,
  // redefine webpack
  customFields: {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.resolve.extensions.push(".ttf");
        webpackConfig.module.rules.push({
          test: /\.ttf$/,
          use: ["file-loader"],
          include: path.resolve(__dirname, "static/fonts"),
        });
        return webpackConfig;
      },
    },
  },
  // redefine ends here
  title: "培洋的主页 🤗",
  // tagline: 'Bonjour',
  favicon: "img/icons8-mac-logo.svg",

  // Set the production url of your site here
  url: "https://bonjour-npy.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bonjour-npy", // Usually your GitHub org/user name.
  projectName: "bonjour-npy.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
    localeConfigs: {
      "zh-Hans": {
        label: "简体中文",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      /** @type {import rehypeSlug from 'rehype-slug'} */
      ({
        docs: {
          // breadcrumbs: false,
          // showReadingTime: true,
          // readingTime: ({content, frontMatter, defaultReadingTime}) =>
          //   defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          remarkPlugins: [math],
          rehypePlugins: [rehypeKatex],
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/bonjour-npy/bonjour-npy.github.io/tree/master/",
        },
        blog: false,
        // {
        //   // showReadingTime: true,
        //   // remarkPlugins: [math],
        //   // rehypePlugins: [katex],
        //   // showReadingTime: false,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl: 'https://github.com/bonjour-npy/',
        // },
        theme: {
          // customCss: require.resolve('./src/css/custom.css'),
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/header.css"),
            require.resolve("./src/css/fonts.css"),
          ],
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: ["/docs"],
        docsDir: ["docs"],
        language: ["zh"],
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,
        searchBarPosition: "right",
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 12,
        searchResultContextMaxLength: 90,
        searchContextByPaths: [
          { label: "🤖 深度学习", path: "docs/Deep-Learning" },
          { label: "🌍 服务器相关", path: "docs/GPU-Server" },
          { label: "🤡 推免", path: "docs/Tui-Mian" },
          { label: "🎰 算法", path: "docs/Algorithms" },
          { label: "📖 课程学习", path: "docs/Curriculum" },
          { label: "😆 其他", path: "docs/Others" },
          { label: "🍺 饮水思源", path: "docs/Acknowledgement" },
        ],
        useAllContextsWithNoSearchContext: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "./static/img/intro.png",
      title: {
        autoNumberHeadings: true,
      },
      // 无法正常显示，注释
      // announcementBar: {
      //   id: "announcementBar-3",
      //   content: "✨ 求实求真，大气大为 ✨",
      //   isCloseable: false,
      // },
      // 调整sidebar为可收回
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        hideOnScroll: false,
        title: "🏠 返回首页",
        logo: {
          alt: "培洋的主页",
          src: "img/navbar.png",
        },
        items: [
          {
            to: "/docs/Deep-Learning/intro",
            label: "⚛️ 深度学习",
          },
          {
            to: "/docs/GPU-Server/intro",
            label: "🤖 服务器相关",
          },
          {
            to: "/docs/Tui-Mian/intro",
            label: "🤡 推免",
          },
          {
            to: "/docs/Algorithms/intro",
            label: "🎰 算法",
          },
          {
            to: "/docs/Curriculum/intro",
            label: "📖 课程学习",
          },
          {
            to: "/docs/Others/intro",
            label: "😆 其他",
          },
          {
            to: "/docs/Acknowledgement/intro",
            label: "🍺 饮水思源",
          },
          {
            href: "https://github.com/bonjour-npy",
            label: "GitHub",
            position: "right",
          },
          {
            type: "html",
            position: "right",
            value: '<span class="navbar__locale-indicator">🌐 简体中文</span>',
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "👋 联系我",
            items: [
              // {
              //   label: "WeChat",
              //   href: "https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/WeChat_QR_Code.jpg",
              // },
              // {
              //   label: "TikTok",
              //   href: "https://www.douyin.com/user/self?modal_id=7157246567970360614",
              // },
              {
                label: "GitHub",
                href: "https://github.com/bonjour-npy",
              },
            ],
          },
          {
            title: "🔗 外部链接",
            items: [
              // {
              //   label: "共和国国防部",
              //   href: "http://www.mod.gov.cn/",
              // },
              {
                label: "学习强国",
                href: "https://www.xuexi.cn/",
              },
              {
                label: "联合国维持和平",
                href: "https://peacekeeping.un.org/zh",
              },
            ],
          },
          {
            title: "🎅 彩蛋",
            items: [
              {
                label: "欢迎来到洛圣都",
                href: "https://www.rockstargames.com/gta-v",
              },
              {
                label: "星球大战",
                href: "https://www.starwars.com/",
              },
              {
                label: "Apple(中国大陆)",
                href: "https://www.apple.com.cn/",
              },
            ],
          },
          {
            title: "🦄 教育官网",
            items: [
              {
                label: "电子科技大学",
                href: "https://www.uestc.edu.cn/",
              },
              // {
              //   label: "桂林电子科技大学",
              //   href: "https://www.guet.edu.cn",
              // },
              {
                label: "未来媒体研究中心",
                href: "https://cfm.uestc.edu.cn/index",
              },
            ],
          },
        ],
        copyright: `<br />本网站所展示的标识、链接均属于个人创作和喜好表达，不代表任何国家、政府、企业或组织的官方立场或行为。<br />尽管本网站努力确保信息的准确性和时效性，但所有信息仅供参考，并不构成任何形式的法律、财务或商业建议。
        <br /><br />Copyright © ${new Date().getFullYear()} bonjour-npy. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["latex"],
      },
    }),
};

module.exports = config;
