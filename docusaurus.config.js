// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import math from 'remark-math';
import katex from 'rehype-katex';
const sidebars = require('./sidebars.js');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SSCCS",
  tagline: "",
  url: "https://ssccs.org/", // 공백 제거
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
      {
        docs: {
          sidebarPath: "./sidebars.js",
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
          routeBasePath: "/docs",
          exclude: [
            '**/_*/**',
          ],
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    colorMode: {

      disableSwitch: true,

    },

    prism: {
      theme: prismThemes.ultramin, // Change to another Prism theme
      darkTheme: prismThemes.vsDark, // Change to another Prism theme
    },

    zoom: {
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
    },

    navbar: {
      title: "SSCCS",
      hideOnScroll: true, // 스크롤 내리면 숨고, 올리면 나타남
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
      ],
    },
    mermaid: {
      theme: {
        light: "neutral",
        dark: "dark",
      },
      options: {
        fontFamily: "arial",
        securityLevel: "loose",
        startOnLoad: true,
      },
    },
  },
};

export default config;