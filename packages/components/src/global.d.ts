/// <reference types="@liveperson-design-system/icons/src/global" />

import { ButtonGroupProps } from './components/button-group/ButtonGroup';
import { ButtonProps } from './components/button/Button';
import { CheckboxProps } from './components/checkbox/Checkbox';
import { DropdownProps } from './components/dropdown/Dropdown';
import { FileInputProps } from './components/file-input/FileInput';
import { InputHelperProps } from './components/input-helper/InputHelper';
import { InputLabelProps } from './components/input-label/InputLabel';
import { MultiselectChipProps } from './components/multiselect-chip/MultiselectChip';
import { NumberInputProps } from './components/number-input/NumberInput';
import { RadioProps } from './components/radio/Radio';
import { RadioGroupProps } from './components/radio/RadioGroup';
import { SelectOptionProps } from './components/select/SelectOption';
import { SelectProps } from './components/select/Select';
import { TextareaProps } from './components/textarea/Textarea';
import { TextInputProps } from './components/text-input/TextInput';
import { ToggleButtonProps } from './components/toggle-button/ToggleButton';
import { ToggleProps } from './components/toggle/Toggle';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-button': ButtonProps
      'lp-button-group': ButtonGroupProps
      'lp-checkbox': CheckboxProps
      'lp-dropdown': DropdownProps
      'lp-file-input': FileInputProps
      'lp-input-helper': InputHelperProps
      'lp-input-label': InputLabelProps
      'lp-multiselect-chip': MultiselectChipProps
      'lp-number-input': NumberInputProps
      'lp-radio': RadioProps
      'lp-radio-group': RadioGroupProps
      'lp-select': SelectProps
      'lp-select-option': SelectOptionProps
      'lp-text-input': TextInputProps
      'lp-textarea': TextareaProps
      'lp-toggle': ToggleProps
      'lp-toggle-button': ToggleButtonProps
    }
  }
}
