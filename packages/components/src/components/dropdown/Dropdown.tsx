import { Component, Prop, h, State, Event, EventEmitter, Element, Host, Watch, Method } from '@stencil/core';

import { Query, SlotElement } from '../../utils/decorators';

export type DropdownContentPlacements = 'auto' | 'top' | 'bottom' | 'left' | 'right'

enum ShowStates {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

@Component({
  tag: 'lp-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown {

  @Element() hostEl: HTMLElement;

  @SlotElement('toggle') toggleSlotEl!: HTMLSlotElement;

  @Query('#content') contentEl: HTMLDivElement;

  @Prop() open: boolean;
  @Prop() contentPlacement: DropdownContentPlacements = 'auto';
  @Prop() parentSelector: string;
  @Prop() parentOffset: string | number = 15;
  @Prop() closeOnContentClick: boolean = true;
  @Prop() closeOnBlur: boolean = true;
  @Prop() closeOnEscape: boolean = true;

  @State() isOpen: boolean = false;
  @State() show: ShowStates;

  @Watch('open')
  openPropChangeHandler(newValue: boolean) {
    this.isOpen = newValue;
  }

  @Watch('isOpen')
  isOpenStateChangeHandler() {
    if (this.isOpen) {
      window.addEventListener<'click'>('click', this.windowClickHandler);

      if (this.closeOnEscape) {
        window.addEventListener<'keydown'>('keydown', this.windowKeydownHandler);
      }
    } else {
      window.removeEventListener<'click'>('click', this.windowClickHandler);

      window.removeEventListener<'keydown'>('keydown', this.windowKeydownHandler);

      this.show = undefined;
    }
  }

  @Event({ eventName: 'open', composed: true }) openEvent: EventEmitter;
  @Event({ eventName: 'close', composed: true }) closeEvent: EventEmitter;
  @Event({ eventName: 'clickOutside', bubbles: true, cancelable: true, composed: true }) clickOutsideEvent: EventEmitter;

  componentWillLoad() {
    this.isOpen = this.open;
  }

  componentDidRender() {
    if (this.contentEl) {
      if (this.isOpen && !this.show) {
        setTimeout(() => {
          this.contentEl.addEventListener('click', this.contentClickHandler);

          if (this.contentPlacement === 'auto') {
            const { bottom, right } = this.contentEl.getBoundingClientRect();

            let parentRight = window.innerWidth;
            let parentBottom = window.innerHeight;

            if (this.parentSelector) {
              const parentElement = this.hostEl.closest(this.parentSelector);

              if (parentElement) {
                const parentBounding = parentElement.getBoundingClientRect();

                parentRight = parentBounding.right;
                parentBottom = parentBounding.bottom;
              }
            }

            const offset = +this.parentOffset;

            if (bottom > parentBottom - offset) {
              this.show = ShowStates.top;
            } else {
              this.show = ShowStates.bottom;
            }

            if (right > parentRight - offset) {
              this.contentEl.style.transform = `translateX(${parentRight - right - offset}px)`;
            }
          } else {
            this.show = (this.contentPlacement as ShowStates);
          }
        });
      } else {
        this.contentEl.removeEventListener('click', this.contentClickHandler);
      }
    }
  }

  componentDidLoad() {
    this.toggleSlotEl.addEventListener('click', this.toggleClickHandler);
  }

  @Method()
  async dropdownOpen() {
    if (this.open === undefined) {
      this.isOpen = true;
    }

    this.openEvent.emit();
  }

  @Method()
  async dropdownClose() {
    if (this.open === undefined) {
      this.isOpen = false;
    }

    this.closeEvent.emit();
  }

  private toggleClickHandler = (): void => {
    if (this.isOpen) {
      this.dropdownClose();
    } else {
      this.dropdownOpen();
    }
  }

  private contentClickHandler = (): void => {
    if (this.closeOnContentClick) {
      this.dropdownClose();
    }
  }

  private windowClickHandler = (e): void => {
    if (!e.path.includes(this.hostEl)) {
      if (this.closeOnBlur) {
        this.dropdownClose();
      }

      this.clickOutsideEvent.emit(e);
    }
  }

  private windowKeydownHandler = (e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
      this.dropdownClose();
    }
  }

  render() {
    return (
      <Host
        class={{
          open: this.isOpen,
          show: !!this.show,
          [this.show]: !!this.show,
        }}
      >
        <slot name="toggle" />

        {this.isOpen && (
          <div id="content" part="content">
            <slot name="content" />
          </div>
        )}
      </Host>
    );
  }
}
