import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    s as u,
    B as c,
    t as g,
    r as l
} from "./_baseIteratee-fbbabc87.js";
import {
    _ as v
} from "./_assignValue-747f8933.js";
import {
    i as y
} from "./isObject-a54dc090.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            r = new Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "c90fa0bb-e069-4c1e-b3ab-13ade7e1d18e", e._sentryDebugIdIdentifier = "sentry-dbid-c90fa0bb-e069-4c1e-b3ab-13ade7e1d18e")
    } catch (f) {}
})();
var I = v,
    m = u,
    x = c,
    b = y,
    P = g;

function p(e, r, f, i) {
    if (!b(e)) return e;
    r = m(r, e);
    for (var t = -1, a = r.length, d = a - 1, n = e; n != null && ++t < a;) {
        var s = P(r[t]),
            o = f;
        if (s === "__proto__" || s === "constructor" || s === "prototype") return e;
        if (t != d) {
            var _ = n[s];
            o = i ? i(_, s, n) : void 0, o === void 0 && (o = b(_) ? _ : x(r[t + 1]) ? [] : {})
        }
        I(n, s, o), n = n[s]
    }
    return e
}
var w = p,
    D = l,
    h = w,
    B = u;

function S(e, r, f) {
    for (var i = -1, t = r.length, a = {}; ++i < t;) {
        var d = r[i],
            n = D(e, d);
        f(n, d) && h(a, B(d, e), n)
    }
    return a
}
var E = S;
export {
    E as _
};