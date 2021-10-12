import { RefObject, useCallback, useMemo } from 'react';

type UseHostData = {
  getHostElement(ref?: RefObject<HTMLElement>): HTMLElement | undefined
  hostHasAttribute(name: string, ref?: RefObject<HTMLElement>): boolean
  hostGetAttribute(name: string, ref?: RefObject<HTMLElement>): string | null
}
export function useHostElement(defaultRef?: RefObject<HTMLElement>): UseHostData {
  const getHostElement = useCallback<UseHostData['getHostElement']>((ref = defaultRef) => (
    (ref?.current?.getRootNode() as ShadowRoot)?.host as HTMLElement
  ), [defaultRef, ]);

  const hostHasAttribute = useCallback<UseHostData['hostHasAttribute']>((name, ref = defaultRef) => (
    getHostElement(ref)?.hasAttribute(name) || false
  ), [defaultRef, getHostElement]);

  const hostGetAttribute = useCallback<UseHostData['hostGetAttribute']>((name, ref = defaultRef) => (
    getHostElement(ref)?.getAttribute(name) || null
  ), [defaultRef, getHostElement]);

  return useMemo<UseHostData>(() => ({
    getHostElement,
    hostHasAttribute,
    hostGetAttribute,
  }), [getHostElement, hostHasAttribute, hostGetAttribute]);
}
