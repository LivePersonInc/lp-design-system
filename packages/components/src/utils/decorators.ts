type HostEl = string | HTMLElement

type QueryDecoratorOptions = {
  hostEl?: HostEl
  inHost?: boolean
}

export function Query(selector: string, options?: QueryDecoratorOptions): PropertyDecorator {
  return function (target: Object, propertyKey: PropertyKey): void {
    Object.defineProperty(target, propertyKey, {
      get() {
        const hostEl = (
          options?.hostEl ? (typeof options.hostEl === 'string' ? this[options.hostEl] : options.hostEl) : this.hostEl
        );

        if (!hostEl) {
          throw new Error('You have to define @Element() first');
        }

        return (options?.inHost ? hostEl : hostEl.shadowRoot)?.querySelector(selector) ?? null;
      },
    });
  };
}

export function QueryAll(selector: string, options?: QueryDecoratorOptions): PropertyDecorator {
  return function (target: Object, propertyKey: PropertyKey): void {
    Object.defineProperty(target, propertyKey, {
      get() {
        const hostEl = (
          options?.hostEl ? (typeof options.hostEl === 'string' ? this[options.hostEl] : options.hostEl) : this.hostEl
        );

        if (!hostEl) {
          throw new Error('You have to define @Element() first');
        }

        return (options?.inHost ? hostEl : hostEl.shadowRoot)?.querySelectorAll(selector);
      },
    });
  };
}

export function SlotElement(name?: string, options?: QueryDecoratorOptions): PropertyDecorator {
  return function (target: Object, propertyKey: PropertyKey): void {
    Object.defineProperty(target, propertyKey, {
      get() {
        const hostEl = (
          options?.hostEl ? (typeof options.hostEl === 'string' ? this[options.hostEl] : options.hostEl) : this.hostEl
        );

        if (!hostEl) {
          throw new Error('You have to define @Element() first');
        }

        return (options?.inHost ? hostEl : hostEl.shadowRoot)?.querySelector(
          `slot${name ? `[name="${name}"]` : ':not([name])'}`
        ) ?? null;
      },
    });
  };
}
