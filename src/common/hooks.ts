import { RefObject, useCallback, useMemo } from 'react';

type UseHostData = {
  getHostElement(ref: RefObject<HTMLElement>): HTMLElement
  hostHasAttribute(ref: RefObject<HTMLElement>, name: string): boolean
  hostGetAttribute(ref: RefObject<HTMLElement>, name: string): string | null
}
export function useHostElement(): UseHostData {
  const getHostElement = useCallback<UseHostData['getHostElement']>(ref => (
    (ref.current?.getRootNode() as ShadowRoot)?.host as HTMLElement
  ), []);

  const hostHasAttribute = useCallback<UseHostData['hostHasAttribute']>((ref, name) => (
    getHostElement(ref).hasAttribute(name)
  ), [getHostElement]);

  const hostGetAttribute = useCallback<UseHostData['hostGetAttribute']>((ref, name) => (
    getHostElement(ref).getAttribute(name)
  ), [getHostElement]);

  return useMemo<UseHostData>(() => ({
    getHostElement,
    hostHasAttribute,
    hostGetAttribute,
  }), [getHostElement, hostHasAttribute, hostGetAttribute]);
}
