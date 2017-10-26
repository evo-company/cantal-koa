# cantal-koa
Cantal metrics for koa.js framework

## Installation
```bash
npm install --save @evo/cantal-js @evo/cantal-koa
```

## Usage example:
```js
import koa from 'koa';
import { init as cantalInit } from 'cantal-koa';

const app = new Koa();

app.use(cantalInit());
```

## Metrics:

### incoming group
* request_count (counter) - requests count.
* request_time (integer) - request time.