import {themes as prismThemes} from 'prism-react-renderer';
import sidebarItemsGenerator from './sidebarItemsGenerator.js';

const projectName = process.env.PROJECT_NAME ?? 'crs-api-docs';
const organizationName = process.env.ORGANIZATION_NAME ?? 'light-nguyen-0409';
const siteUrl = process.env.SITE_URL ?? 'https://light-nguyen-0409.github.io';
const baseUrl = process.env.BASE_URL ?? '/' + projectName + '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CRS API Documentation',
  tagline: 'Contract-first API reference for CRS',
  favicon: 'img/favicon.ico',
  url: siteUrl,
  baseUrl,
  organizationName,
  projectName,
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          sidebarItemsGenerator,
          exclude: ['**/_meta/**', '**/_templates/**'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: 'en',
        searchBarPosition: 'right',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: false,
      },
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CRS API Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'API overview',
              to: '/docs',
            },
          ],
        },
      ],
      copyright: 'CRS API Documentation. Built with Docusaurus.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
