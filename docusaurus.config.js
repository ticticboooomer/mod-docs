// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tic Tic\'s Mods',
  tagline: 'Mods \'n\' stuffs',
  url: 'https://ticticboooom-mods.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ticticboooom-mods', // Usually your GitHub org/user name.
  projectName: 'ticticboooom-mods.github.io', // Usually your repo name.

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
          id: 'masterful_machinery', 
          sidebarPath: require.resolve('./sidebars/mm.js'),
          path: "masterfulmachinery",
          routeBasePath: 'masterfulmachinery',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')]
        }
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'twerk_it_meal',
        path: 'twerkitmeal',
        routeBasePath: 'twerkitmeal',
        sidebarPath: require.resolve('./sidebars/tim.js'),
        // ... other options
      },
    ],
  ], 
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Tic Tic's Mods",
        logo: {
          alt: 'Boomer',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Twerk It Meal',
            docsPluginId: "twerk_it_meal"
          },
          {
            type: 'doc',
            docId: 'index',
            label: 'Masterful Machinery',
            position: 'left',
            docsPluginId: 'masterful_machinery'
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Tic Tic Boooom - Mods.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
