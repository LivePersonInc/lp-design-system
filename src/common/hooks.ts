import { RefObject, useCallback, useMemo } from 'react';

type UseHostData = {
  getHostElement(ref: RefObject<HTMLElement>): HTMLElement
}
export function useHostElement(): UseHostData {
  const getHostElement = useCallback<UseHostData['getHostElement']>(ref => (
    (ref.current?.getRootNode() as ShadowRoot)?.host as HTMLElement
  ), []);

  return useMemo<UseHostData>(() => ({
    getHostElement,
  }), []);
}
