import {
    iq as W,
    by as w
} from "./tracking-376cff7a.js";
import {
    i as L
} from "./isObject-a54dc090.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    t as M
} from "./toNumber-3c911b0f.js";
(function() {
    try {
        var r = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "a20e07c0-f135-4e66-ade8-95df3b859d21", r._sentryDebugIdIdentifier = "sentry-dbid-a20e07c0-f135-4e66-ade8-95df3b859d21")
    } catch (a) {}
})();
var S = W,
    j = function() {
        return S.Date.now()
    },
    F = j,
    N = L,
    T = F,
    x = M,
    O = "Expected a function",
    R = Math.max,
    A = Math.min;

function $(r, t, a) {
    var d, o, m, f, n, u, s = 0,
        I = !1,
        c = !1,
        v = !0;
    if (typeof r != "function") throw new TypeError(O);
    t = x(t) || 0, N(a) && (I = !!a.leading, c = "maxWait" in a, m = c ? R(x(a.maxWait) || 0, t) : m, v = "trailing" in a ? !!a.trailing : v);

    function b(e) {
        var i = d,
            l = o;
        return d = o = void 0, s = e, f = r.apply(l, i), f
    }

    function E(e) {
        return s = e, n = setTimeout(g, t), I ? b(e) : f
    }

    function k(e) {
        var i = e - u,
            l = e - s,
            p = t - i;
        return c ? A(p, m - l) : p
    }

    function _(e) {
        var i = e - u,
            l = e - s;
        return u === void 0 || i >= t || i < 0 || c && l >= m
    }

    function g() {
        var e = T();
        if (_(e)) return h(e);
        n = setTimeout(g, k(e))
    }

    function h(e) {
        return n = void 0, v && d ? b(e) : (d = o = void 0, f)
    }

    function D() {
        n !== void 0 && clearTimeout(n), s = 0, d = u = o = n = void 0
    }

    function C() {
        return n === void 0 ? f : h(T())
    }

    function y() {
        var e = T(),
            i = _(e);
        if (d = arguments, o = this, u = e, i) {
            if (n === void 0) return E(u);
            if (c) return clearTimeout(n), n = setTimeout(g, t), b(u)
        }
        return n === void 0 && (n = setTimeout(g, t)), f
    }
    return y.cancel = D, y.flush = C, y
}
var q = $;
const G = w(q);
export {
    q as a, G as d
};