import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6b7dbecc-7134-4db8-8cbf-1bf7d07d5a4e", e._sentryDebugIdIdentifier = "sentry-dbid-6b7dbecc-7134-4db8-8cbf-1bf7d07d5a4e")
    } catch (d) {}
})();

function r(e, n) {
    for (const [d, t] of Object.entries(n)) t != null && (e[d] = t);
    return e
}

function b(e) {
    return Object.fromEntries(Object.entries(e).filter(([n, d]) => d != null))
}
export {
    b as d, r as m
};