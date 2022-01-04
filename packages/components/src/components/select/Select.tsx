import { Component, Prop, h, State, Event, Element, EventEmitter, Watch } from '@stencil/core';

import { Theme } from '../../utils/types';
import { Query, QueryAll } from '../../utils/decorators';

type Selected = {
  label: string
  value: string
}

@Component({
  tag: 'lp-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class Select {

  @Element() hostEl: HTMLElement;

  @Query('lp-multiselect-chip') multiselectChipEl: HTMLLpMultiselectChipElement;
  @Query('#select-input') selectInputEl: HTMLInputElement;
  @Query('lp-checkbox#select-all') selectAllEl: HTMLLpCheckboxElement;
  @QueryAll('lp-select-option', { inHost: true }) selectOptionsEls: NodeListOf<HTMLLpSelectOptionElement>;

  @Prop() theme: Theme;
  @Prop() search: boolean;
  @Prop() withSelectAll: false | string;
  @Prop() multiple: boolean;

  @State() isDropdownOpen: boolean = false;
  @State() selected: Selected | Selected[];

  @Watch('isDropdownOpen')
  isDropdownOpenStateChangeHandler(newValue: boolean) {
    if (newValue) {
      window.addEventListener<'keydown'>('keydown', this.windowKeyDownHandler);
    } else {
      window.removeEventListener<'keydown'>('keydown', this.windowKeyDownHandler);
    }
  }

  @Watch('selected')
  selectedStateChangeHandler(newValue?: Selected | Selected[]) {
    const values = (Array.isArray(newValue) ? newValue : (newValue ? [newValue] : [])).map(({ value }) => value);

    this.selectOptions.forEach(options => {
      options.selected = values.includes(options.value);
    });
  }

  @Event({ eventName: 'change', composed: true }) changeEvent: EventEmitter;

  componentDidLoad() {
    this.selectOptions.forEach(el => {
      el.addEventListener('click', this.optionClickHandler, true);
    });
  }

  private get selectOptions(): HTMLLpSelectOptionElement[] {
    return Array.from(this.selectOptionsEls);
  }

  private windowKeyDownHandler = (e: KeyboardEvent): void => {
    const options = this.selectOptions.filter(({ hidden }) => !hidden);

    if (!options.length) {
      return;
    }

    const focusedOptionIndex = options.findIndex(el => el === document.activeElement);

    const selectedOptionIndex = (
      focusedOptionIndex !== -1 ? focusedOptionIndex : options.findIndex(({ selected }) => selected)
    );

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();

        if (selectedOptionIndex === -1) {
          options[options.length - 1]?.focus();
        } else if (selectedOptionIndex > 0) {
          options[selectedOptionIndex - 1]?.focus();
        }

        break;
      case 'ArrowDown':
        e.preventDefault();

        if (selectedOptionIndex === -1) {
          options[0]?.focus();
        } else if (selectedOptionIndex < options.length - 1) {
          options[selectedOptionIndex + 1]?.focus();
        }

        break;
      case 'Enter':
        if (selectedOptionIndex !== -1) {
          options[selectedOptionIndex]?.click();
        }

        break;
    }
  }

  private selectAllChangeHandler = (e): void => {
    if (e.target.checked) {
      this.selected = this.selectOptions.filter(({ hidden }) => !hidden).map(option => ({
        label: option.innerText,
        value: option.value || option.innerText,
      }));
    } else {
      this.selected = undefined;
    }
  }

  private dropdownClickOutsideHandler = (): void => {
    this.isDropdownOpen = false;
  };

  private dropdownToggleClickHandler = (e): void => {
    if (this.multiselectChipEl?.contains(e.target)) {
      return;
    }

    this.isDropdownOpen = !(this.isDropdownOpen && e.target !== this.selectInputEl);
  };

  private chipRemoveHandler = ({ target }): void => {
    this.selected = (Array.isArray(this.selected) ? this.selected : (this.selected ? [this.selected] : []))
      .filter(({ value }) => value !== target.value);

    const selectedOption = this.selectOptions.find(({ value }) => (String(value) === target.value));
    if (selectedOption) {
      selectedOption.selected = false;
    }
  };

  private selectInputInputHandler = (e): void => {
    const value = (e.target as HTMLInputElement).value.toLowerCase();

    if (value) {
      this.selectOptions.forEach(option => {
        option.hidden = !option.innerText.toLowerCase().includes(value);
      });
    } else {
      this.selectOptions.forEach(option => {
        option.hidden = false;
      });
    }
  };

  private optionClickHandler = (e): void => {
    const target = e.target as HTMLLpSelectOptionElement;

    const selected: Selected = {
      label: target.innerText,
      value: target.value || target.innerText,
    };

    if (this.multiple) {
      const newState = (Array.isArray(this.selected) ? [...this.selected] : (this.selected ? [this.selected] : []));

      const selectedIndex = newState.findIndex(({ value }) => value === selected.value);

      if (selectedIndex !== -1) {
        newState.splice(selectedIndex, 1);
      } else {
        newState.push(selected);
      }

      this.selected = newState;
    } else {
      this.selected = selected;

      this.isDropdownOpen = false;
    }

    if (this.search) {
      if (this.selectInputEl) {
        this.selectInputEl.value = '';
      }

      this.selectOptions.filter(({ hidden }) => hidden).forEach(option => {
        option.hidden = false;
      });
    }

    this.changeEvent.emit();
  };

  render() {
    return (
      <lp-dropdown
        id="dropdown"
        open={this.isDropdownOpen}
        closeOnContentClick={false}
        closeOnBlur={false}
        onClickOutside={this.dropdownClickOutsideHandler}
      >
        <div
          slot="toggle"
          id="dropdown-toggle"
          class={{ open: this.isDropdownOpen }}
          onClick={this.dropdownToggleClickHandler}
        >
          {(
            this.multiple
              ? (
                <lp-multiselect-chip id="chips" size="small">
                  {(
                    Array.isArray(this.selected)
                      ? this.selected.map(item => <lp-chip key={item.value} {...item} onRemove={this.chipRemoveHandler} />)
                      : (!!this.selected && <lp-chip {...this.selected} onRemove={this.chipRemoveHandler} />)
                  )}
                </lp-multiselect-chip>
              )
              : (
                <div id="selected-value">
                  {(Array.isArray(this.selected) ? this.selected[0] : this.selected)?.label}
                </div>
              )
          )}

          {this.search && <input id="select-input" type="text" onInput={this.selectInputInputHandler} />}

          <div id="dropdown-toggle-icon">
            <svg>
              <path d="M7.96618 10.9662L3 6H13L7.96618 10.9662Z" />
            </svg>
          </div>
        </div>

        <div slot="content" id="options">
          {(this.multiple && this.withSelectAll) && (
            <lp-checkbox
              slot="content"
              id="select-all"
              label={(typeof this.withSelectAll === 'string' ? this.withSelectAll : 'Select all')}
              checked={(
                Array.isArray(this.selected) ? this.selected.length === this.selectOptions.length : !!this.selected
              )}
              indeterminate={(
                Array.isArray(this.selected) && this.selected.length && this.selected.length !== this.selectOptions.length
              )}
              onChange={this.selectAllChangeHandler}
            />
          )}

          <slot name="suggestions" />

          <slot />
        </div>

        <slot slot="content" name="actions" />
      </lp-dropdown>
    );
  }
}
