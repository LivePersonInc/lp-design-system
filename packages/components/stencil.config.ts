import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'components',
  buildEs5: true,
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@liveperson-design-system/components',
      proxiesFile: '../react-components/src/components/stencil-generated/index.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
      strict: true,
      footer: '',
    },
  ],
  bundles: [
    { components: ['lp-radio', 'lp-radio-group'] },
    { components: ['lp-select', 'lp-select-option', 'lp-dropdown', 'lp-multiselect-chip', 'lp-chip', 'lp-checkbox'] },
    { components: ['lp-multiselect-chip', 'lp-chip'] },
  ],
  plugins: [
    sass({
      importer: url => ({
        file: url.replace(
          '~@liveperson-design-system/tokens',
          '../../../node_modules/@liveperson-design-system/tokens',
        ),
      }),
    }),
  ],
};
