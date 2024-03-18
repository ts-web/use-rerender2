[![npm version](https://img.shields.io/npm/v/use-rerender2.svg)](https://www.npmjs.com/package/use-rerender2)
[![Downloads](https://img.shields.io/npm/dm/use-rerender2.svg)](https://www.npmjs.com/package/use-rerender2)

# use-rerender2

If you need this hook, you're probably doing something wrong. But anyway, here it is.

Returns a function that causes the current component to be rerendered (using setState).

The function is memoized with useCallback.


## Usage
```ts
import { useRerender } from 'use-rerender2';

const rerender = useRerender();
// . . .
rerender();
```
