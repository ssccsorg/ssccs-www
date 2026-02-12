// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SSCCS",
  tagline: "",
  url: "https://ssccs.org",
  baseUrl: "/",
  projectName: "SSCCS",
  onBrokenLinks: "warn",
  
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  
  themes: ["@docusaurus/theme-mermaid"],
  
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"), // 경로 해석 안전성 강화
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
          routeBasePath: "/docs",
          exclude: ['**/_*/**'],
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-image-zoom'],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: true,
      defaultMode: 'light',
    },
    navbar: {
      title: "SSCCS",
      hideOnScroll: true,
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
      ],
    },
    prism: {
      theme: prismThemes.ultramin,
      darkTheme: prismThemes.vsDark,
    },
    zoom: {
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
    },
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
      options: { fontFamily: "arial", securityLevel: "loose" },
    },
  },
};

export default config;