import cantal from '@evo/cantal-js';

export function init() {
    const requestCounter = new cantal.Counter({
        group: 'incoming',
        metric: 'request_count',
    });

    const requestTime = new cantal.Integer({
        group: 'incoming',
        metric: 'request_time',
    });

    cantal.start();

    const cantalMiddleware = async (ctx, next) => {
        requestCounter.incr();
        const start = Date.now();

        await next();

        const duration = Date.now() - start;
        requestTime.set(duration);
    };

    return cantalMiddleware;
}
