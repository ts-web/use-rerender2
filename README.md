# use-rerender2

If you need this hook, you're probably doing something wrong. But anyway, here it is.

Returns a function that causes the current component to be rerendered (using setState).

The function is memoized with useCallback.


## Usage
```ts
import { useRerender } from 'use-rerender2';

const rerender = useRerender();
```
