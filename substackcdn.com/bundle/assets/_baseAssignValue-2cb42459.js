import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    _ as a
} from "./_defineProperty-105d261c.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            r = new Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "4a5b4ff1-2b9b-4886-9071-3534a4936b72", e._sentryDebugIdIdentifier = "sentry-dbid-4a5b4ff1-2b9b-4886-9071-3534a4936b72")
    } catch (n) {}
})();
var t = a;

function f(e, r, n) {
    r == "__proto__" && t ? t(e, r, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[r] = n
}
var i = f;
export {
    i as _
};