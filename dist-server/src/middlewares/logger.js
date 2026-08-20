const SENSITIVE_FIELDS = ['password', 'apiKey', 'token', 'authorization', 'secret', 'credit_card', 'card_number', 'cvv'];
function sanitize(obj) {
    if (!obj || typeof obj !== 'object')
        return obj;
    if (Array.isArray(obj))
        return obj.map(sanitize);
    const copy = {};
    for (const key of Object.keys(obj)) {
        if (SENSITIVE_FIELDS.some((field) => key.toLowerCase().includes(field))) {
            copy[key] = '***REDACTED***';
        }
        else if (typeof obj[key] === 'object') {
            copy[key] = sanitize(obj[key]);
        }
        else {
            copy[key] = obj[key];
        }
    }
    return copy;
}
export function requestLogger(req, res, next) {
    const start = Date.now();
    const { method, originalUrl } = req;
    res.on('finish', () => {
        const duration = Date.now() - start;
        const status = res.statusCode;
        console.log(`[HTTP] ${method} ${originalUrl} ${status} - ${duration}ms`);
    });
    next();
}
