import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8ccc9d71-a269-4c55-9670-486a9e06fc7b", e._sentryDebugIdIdentifier = "sentry-dbid-8ccc9d71-a269-4c55-9670-486a9e06fc7b")
    } catch (t) {}
})();

function c(e, n) {
    var t = -1,
        d = e.length;
    for (n || (n = Array(d)); ++t < d;) n[t] = e[t];
    return n
}
var f = c;
export {
    f as _
};