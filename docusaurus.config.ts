import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PostNord Service Point',
  tagline: 'Praktisk håndbok for Mypack Collect og Service Point-rutiner',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'postnord',
  projectName: 'service-point-manual',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'nb',
    locales: ['nb'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          breadcrumbs: true,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Service Point-håndbok',
      logo: {
        alt: 'PostNord Service Point',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'Manual',
        },
        {
          type: 'doc',
          docId: 'endringslogg',
          position: 'left',
          label: 'Endringslogg',
        },
        {type: 'search', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Manual',
          items: [
            {
              label: 'Introduksjon',
              to: '/',
            },
            {label: 'Kontakt og support', to: '/kontakt'},
          ],
        },
        {
          title: 'Drift',
          items: [
            {
              label: 'Screenshots-guide',
              to: '/screenshots-guide',
            },
            {label: 'Endringslogg', to: '/endringslogg'},
          ],
        },
        {
          title: 'Om løsningen',
          items: [
            {label: 'Bygget med Docusaurus', href: 'https://docusaurus.io/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PostNord Service Point.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
