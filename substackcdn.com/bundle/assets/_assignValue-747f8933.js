import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    _ as a
} from "./_baseAssignValue-2cb42459.js";
import {
    k as d
} from "./_defineProperty-105d261c.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            r = new Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "b73b9cde-edd0-44b6-9f06-27b14690cd7a", e._sentryDebugIdIdentifier = "sentry-dbid-b73b9cde-edd0-44b6-9f06-27b14690cd7a")
    } catch (n) {}
})();
var t = a,
    o = d,
    i = Object.prototype,
    b = i.hasOwnProperty;

function f(e, r, n) {
    var s = e[r];
    (!(b.call(e, r) && o(s, n)) || n === void 0 && !(r in e)) && t(e, r, n)
}
var g = f;
export {
    g as _
};