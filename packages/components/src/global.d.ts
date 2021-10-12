/// <reference types="@liveperson-design-system/icons/src/global" />

import { ButtonGroupProps } from 'lpds/components/button-group/ButtonGroup';
import { ButtonProps } from 'lpds/components/button/Button';
import { CheckboxProps } from 'lpds/components/checkbox/Checkbox';
import { ChipProps } from 'lpds/components/chip/Chip';
import { ChipGroupProps } from 'lpds/components/chip/ChipGroup';
import { DropdownProps } from 'lpds/components/dropdown/Dropdown';
import { FileInputProps } from 'lpds/components/file-input/FileInput';
import { InputHelperProps } from 'lpds/components/input-helper/InputHelper';
import { InputLabelProps } from 'lpds/components/input-label/InputLabel';
import { NumberInputProps } from 'lpds/components/number-input/NumberInput';
import { RadioProps } from 'lpds/components/radio/Radio';
import { RadioGroupProps } from 'lpds/components/radio/RadioGroup';
import { SelectOptionProps } from 'lpds/components/select/SelectOption';
import { SelectProps } from 'lpds/components/select/Select';
import { TextareaProps } from 'lpds/components/textarea/Textarea';
import { TextInputProps } from 'lpds/components/text-input/TextInput';
import { ToggleButtonProps } from 'lpds/components/toggle-button/ToggleButton';
import { ToggleProps } from 'lpds/components/toggle/Toggle';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-button': ButtonProps
      'lp-button-group': ButtonGroupProps
      'lp-checkbox': CheckboxProps
      'lp-chip': ChipProps
      'lp-chip-group': ChipGroupProps
      'lp-dropdown': DropdownProps
      'lp-file-input': FileInputProps
      'lp-input-helper': InputHelperProps
      'lp-input-label': InputLabelProps
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
