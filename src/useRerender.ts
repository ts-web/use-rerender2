import { useCallback, useState } from 'react';


/**
 * A React hook to force a component rerender.
 *
 * Returns a function that causes the current component to be rerendered (using setState).
 *
 * The function is memoized with useCallback.
 */
export function useRerender () {
  const [, setState] = useState(true);

  const rerender = useCallback(() => {
    setState((bool) => !bool);
  }, []);

  return rerender;
}
