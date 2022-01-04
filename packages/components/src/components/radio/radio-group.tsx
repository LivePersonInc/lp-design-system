import { Component, h, Prop, Event, Element, EventEmitter, Watch, State } from '@stencil/core';

import { Theme } from '../../utils/types';
import { SlotElement } from '../../utils/decorators';

import { Radio, RadioLabelPositions, RadioSizes } from './Radio';

@Component({
  tag: 'lp-radio-group',
  styleUrl: 'radio-group.scss',
  shadow: true,
})
export class RadioGroup {

  @Element() hostEl: HTMLElement;

  @SlotElement() slotEl: HTMLSlotElement;

  @Prop() theme: Theme;
  @Prop() name!: string;
  @Prop() size: RadioSizes;
  @Prop() labelPosition: RadioLabelPositions;
  @Prop() error: boolean;
  @Prop() selected: string;
  @Prop() disabled: boolean;
  @Prop() readOnly: boolean;

  @State() selectedState: string;

  @Watch('theme')
  themePropChangeHandler(newValue: Theme) {
    this.setRadioElementsAttribute('theme', newValue);
  }

  @Watch('name')
  namePropChangeHandler(newValue: string) {
    this.setRadioElementsAttribute('name', newValue);
  }

  @Watch('size')
  sizePropChangeHandler(newValue: RadioSizes) {
    this.setRadioElementsAttribute('size', newValue);
  }

  @Watch('labelPosition')
  labelPositionPropChangeHandler(newValue: RadioLabelPositions) {
    this.setRadioElementsAttribute('labelPosition', newValue);
  }

  @Watch('selected')
  selectedPropChangeHandler(newValue: string) {
    this.selectedState = String(newValue);
  }

  @Watch('error')
  errorPropChangeHandler(newValue: boolean) {
    this.setRadioElementsAttribute('error', newValue);
  }

  @Watch('disabled')
  disabledPropChangeHandler(newValue: boolean) {
    this.setRadioElementsAttribute('disabled', newValue);
  }

  @Watch('readOnly')
  readOnlyPropChangeHandler(newValue: boolean) {
    this.setRadioElementsAttribute('readOnly', newValue);
  }

  @Watch('selectedState')
  selectedStateChangeHandler(newValue: string) {
    this.radioElements.filter(({ value, checked }) => (String(value) !== String(newValue) && checked)).forEach(el => {
      el.checked = false;
    });

    const selectedEl = this.radioElements.find(({ value }) => String(value) === String(newValue));

    if (selectedEl) {
      selectedEl.checked = true;

      this.changeEvent.emit({ name: selectedEl.name, value: String(newValue) });
    }
  }

  @Event({ eventName: 'change', composed: true }) changeEvent: EventEmitter;

  componentWillLoad() {
    this.selectedState = (this.selected !== undefined ? String(this.selected) : undefined);
  }

  componentDidRender() {
    this.radioElements.forEach(el => {
      el.addEventListener('change', this.radioChangeHandler);
    });
  }

  componentDidLoad() {
    Object.keys(Radio.defaultProps).filter(key => (this[key] !== undefined && Radio.defaultProps[key] !== this[key]))
      .forEach(key => {
        this.radioElements.forEach(el => {
          el.setAttribute(key, this[key]);
        });
      });

    if (this.selected) {
      const radioElement = this.radioElements.find(({ value }) => String(value) === String(this.selected));

      if (radioElement) {
        radioElement.checked = true;
      }
    }
  }

  private get radioElements(): HTMLInputElement[] {
    return (this.slotEl?.assignedElements() as HTMLInputElement[] || []);
  }

  private radioChangeHandler = (e): void => {
    this.selectedState = String(e.target.value);
  };

  private setRadioElementsAttribute(name: string, newValue: any) {
    if (newValue !== Radio.defaultProps[name]) {
      this.radioElements.forEach(el => {
        el.setAttribute(name, newValue);
      });
    } else {
      this.radioElements.forEach(el => {
        el.removeAttribute(name);
      });
    }
  }

  render() {
    return <slot />;
  }
}
