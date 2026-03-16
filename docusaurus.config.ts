import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Vali-FileSize',
  tagline: '// lightweight file size library for .NET',
  favicon: 'img/logo.png',

  future: { v4: true },

  url: 'https://ubf21.github.io',
  baseUrl: '/',

  organizationName: 'UBF21',
  projectName: 'Vali-FileSize',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Space+Mono:wght@400;500&display=swap',
      type: 'text/css',
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr', htmlLang: 'en' },
      es: { label: 'Español', direction: 'ltr', htmlLang: 'es' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/UBF21/Vali-FileSize/tree/main/',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: { defaultMode: 'light', respectPrefersColorScheme: true },
    navbar: {
      title: 'Vali-FileSize',
      logo: { alt: 'Vali-FileSize', src: 'img/logo.png' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        { type: 'localeDropdown', position: 'right' },
        {
          href: 'https://www.nuget.org/packages/Vali-FileSize',
          label: 'NuGet',
          position: 'right',
        },
        {
          href: 'https://github.com/UBF21/Vali-FileSize',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/introduction' },
            { label: 'Quick Start', to: '/docs/quick-start' },
            { label: 'API Reference', to: '/docs/api/convert' },
            { label: 'Extension Methods', to: '/docs/extension-methods' },
          ],
        },
        {
          title: 'Package',
          items: [
            { label: 'Vali-FileSize on NuGet', href: 'https://www.nuget.org/packages/Vali-FileSize' },
            { label: 'GitHub Repository', href: 'https://github.com/UBF21/Vali-FileSize' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Vali-Mediator', href: 'https://github.com/UBF21/Vali-Mediator' },
            { label: 'Vali-Validation', href: 'https://github.com/UBF21/Vali-Validation' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Felipe Montenegro. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['csharp', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
