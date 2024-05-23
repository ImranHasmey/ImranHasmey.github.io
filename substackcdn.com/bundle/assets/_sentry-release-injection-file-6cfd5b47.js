(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            d = new Error().stack;
        d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "78947ef1-c435-4e05-8651-5c9ea3bc9eee", e._sentryDebugIdIdentifier = "sentry-dbid-78947ef1-c435-4e05-8651-5c9ea3bc9eee")
    } catch (f) {}
})();
var n = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
n.SENTRY_RELEASE = {
    id: "substack@0bd90fc"
};