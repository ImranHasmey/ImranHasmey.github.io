import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "f1486583-4d13-48ce-8aec-d6ec30dc3463", t._sentryDebugIdIdentifier = "sentry-dbid-f1486583-4d13-48ce-8aec-d6ec30dc3463")
    } catch (o) {}
})();
const n = Intl.NumberFormat(void 0, {
    maximumSignificantDigits: 4
});

function a(t) {
    return n.format(t)
}
const r = new Intl.NumberFormat(void 0, {
    maximumSignificantDigits: 3,
    notation: "compact"
});

function m(t) {
    return r.format(t)
}
export {
    m as a, a as f
};