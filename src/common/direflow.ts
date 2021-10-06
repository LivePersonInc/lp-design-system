import { IDireflowComponent, IDireflowConfig } from 'direflow-component/dist/types/DireflowConfig';

export enum DireflowComponentPlugins {
  fontLoader = 'font-loader',
}

export enum RobotoFontWeights {
  light = 300,
  regular = 400,
  medium = 500,
  bold = 700,
}

type Options = Pick<IDireflowComponent, 'properties' | 'plugins'> & {
  configuration?: Omit<IDireflowComponent['configuration'], 'tagname'>
  withRobotoFont?: RobotoFontWeights | RobotoFontWeights[] | true | 'all'
}
export function getComponentConfig(
  component: IDireflowComponent['component'],
  tagname: IDireflowConfig['tagname'],
  { configuration = {}, properties, plugins, withRobotoFont }: Options = {}
): IDireflowComponent {
  if (withRobotoFont) {
    plugins = (plugins || []);

    const fontLoaderIndex = plugins.findIndex(({ name }) => name === 'font-loader');

    if (withRobotoFont === 'all') {
      withRobotoFont = [
        RobotoFontWeights.light,
        RobotoFontWeights.regular,
        RobotoFontWeights.medium,
        RobotoFontWeights.bold,
      ];
    } else if (withRobotoFont === true) {
      withRobotoFont = [];
    } else if (!Array.isArray(withRobotoFont)) {
      withRobotoFont = [withRobotoFont];
    }

    const robotoFontString = `Roboto${withRobotoFont.length ? `:${withRobotoFont.join(':')}` : ''}`;

    if (fontLoaderIndex !== -1) {
      plugins[fontLoaderIndex].options = {
        ...(plugins[fontLoaderIndex].options || {}),
        google: {
          ...(plugins[fontLoaderIndex].options.google || {}),
          families: [
            ...(plugins[fontLoaderIndex].options.google.families || []),
            robotoFontString,
          ],
        },
      };
    } else {
      plugins.push({
        name: 'font-loader',
        options: {
          google: {
            families: [robotoFontString],
          },
        },
      });
    }
  }

  return {
    component,
    configuration: { tagname, ...configuration },
    properties,
    plugins,
  };
}
