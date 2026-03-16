import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    { type: 'doc', id: 'introduction', label: 'Introduction' },
    { type: 'doc', id: 'installation', label: 'Installation' },
    { type: 'doc', id: 'quick-start', label: 'Quick Start' },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'api/convert',
        'api/format-size',
        'api/get-best-unit',
        'api/format-best-size',
      ],
    },
    { type: 'doc', id: 'extension-methods', label: 'Extension Methods' },
    { type: 'doc', id: 'iec-prefixes', label: 'IEC Prefixes' },
    { type: 'doc', id: 'dependency-injection', label: 'Dependency Injection' },
    { type: 'doc', id: 'units-reference', label: 'Units Reference' },
  ],
};

export default sidebars;
