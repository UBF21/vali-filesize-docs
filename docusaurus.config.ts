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

  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'canonical', href: 'https://ubf21.github.io/' },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `(function(){try{if(!localStorage.getItem('theme')){var d=window.matchMedia('(prefers-color-scheme: dark)').matches;localStorage.setItem('theme',d?'dark':'light');document.documentElement.setAttribute('data-theme',d?'dark':'light');}}catch(e){}})();`,
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Vali-FileSize',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
        description: 'Lightweight .NET library for converting, formatting, and auto-detecting file sizes across all major units with IEC binary prefix support.',
        url: 'https://www.nuget.org/packages/Vali-FileSize',
        downloadUrl: 'https://www.nuget.org/packages/Vali-FileSize',
        author: {
          '@type': 'Person',
          name: 'Felipe Rafael Montenegro Morriberon',
          url: 'https://www.linkedin.com/in/felipe-rafael-montenegro-morriberon-a79a341b2/',
        },
        programmingLanguage: 'C#',
        license: 'https://opensource.org/licenses/MIT',
      }),
    },
  ],

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
    image: 'img/logo.png',
    metadata: [
      { name: 'description', content: 'Vali-FileSize is a lightweight .NET library for converting, formatting, and auto-detecting file sizes across all major units with IEC binary prefix support.' },
      { name: 'keywords', content: 'Vali-FileSize, dotnet, .NET library, file size, bytes conversion, IEC binary, KiB MiB GiB, NuGet package, C# file size library' },
      { name: 'author', content: 'Felipe Rafael Montenegro Morriberon' },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'theme-color', content: '#0ea5e9' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Vali-FileSize Docs' },
      { property: 'og:title', content: 'Vali-FileSize — Lightweight .NET File Size Library' },
      { property: 'og:description', content: 'Convert, format, and auto-detect file sizes across all major units. IEC binary prefixes (KiB, MiB, GiB, TiB) included. Extension methods for double and long.' },
      { property: 'og:url', content: 'https://ubf21.github.io/' },
      { property: 'og:image', content: 'https://ubf21.github.io/img/logo.png' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:locale:alternate', content: 'es_ES' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Vali-FileSize — Lightweight .NET File Size Library' },
      { name: 'twitter:description', content: 'Convert, format, and auto-detect file sizes in .NET with IEC binary prefix support. Available on NuGet.' },
      { name: 'twitter:image', content: 'https://ubf21.github.io/img/logo.png' },
    ],
    colorMode: { defaultMode: 'dark', disableSwitch: false, respectPrefersColorScheme: false },
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
