import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b79080ad-cacc-482a-9ff2-0cdcfbaf6934", e._sentryDebugIdIdentifier = "sentry-dbid-b79080ad-cacc-482a-9ff2-0cdcfbaf6934")
    } catch (f) {}
})();

function n(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var d = n;
export {
    d as i
};