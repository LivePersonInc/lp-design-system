import { DireflowComponent } from 'direflow-component';
import { Theme } from '../enum';
import Button from './button';
import { ButtonSize, ButtonVariant } from './enum';

export default DireflowComponent.create({
  component: Button,
  configuration: {
    tagname: 'lp-button',
  },
  properties: {
    variant: ButtonVariant.PRIMARY,
    theme: Theme.DARK,
    size: ButtonSize.MEDIUM,
    label: '',
    onClick: () => {},
    disabled: false
  },
  plugins: [
    {
      name: 'styled-components'
    }
    // {
    //   name: 'font-loader',
    //   options: {
    //     google: {
    //       families: ['Advent Pro', 'Noto Sans JP'],
    //     },
    //   },
    // },
  ],
});