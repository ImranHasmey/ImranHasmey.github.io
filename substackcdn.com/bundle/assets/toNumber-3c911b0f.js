import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    i as f
} from "./isObject-a54dc090.js";
import {
    fL as s
} from "./tracking-376cff7a.js";
(function() {
    try {
        var r = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "1ea26d20-370d-48f5-8e5a-1f35e6b27f46", r._sentryDebugIdIdentifier = "sentry-dbid-1ea26d20-370d-48f5-8e5a-1f35e6b27f46")
    } catch (t) {}
})();
var d = /\s/;

function a(r) {
    for (var e = r.length; e-- && d.test(r.charAt(e)););
    return e
}
var o = a,
    b = o,
    m = /^\s+/;

function c(r) {
    return r && r.slice(0, b(r) + 1).replace(m, "")
}
var y = c,
    p = y,
    i = f,
    I = s,
    n = 0 / 0,
    _ = /^[-+]0x[0-9a-f]+$/i,
    x = /^0b[01]+$/i,
    w = /^0o[0-7]+$/i,
    u = parseInt;

function O(r) {
    if (typeof r == "number") return r;
    if (I(r)) return n;
    if (i(r)) {
        var e = typeof r.valueOf == "function" ? r.valueOf() : r;
        r = i(e) ? e + "" : e
    }
    if (typeof r != "string") return r === 0 ? r : +r;
    r = p(r);
    var t = x.test(r);
    return t || w.test(r) ? u(r.slice(2), t ? 2 : 8) : _.test(r) ? n : +r
}
var E = O;
export {
    o as _, E as t
};