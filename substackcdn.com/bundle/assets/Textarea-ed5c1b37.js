var u = Object.defineProperty,
    l = Object.defineProperties;
var m = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty,
    f = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? u(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    i = (e, t) => {
        for (var r in t || (t = {})) b.call(t, r) && o(e, r, t[r]);
        if (s)
            for (var r of s(t)) f.call(t, r) && o(e, r, t[r]);
        return e
    },
    c = (e, t) => l(e, m(t));
var y = (e, t) => {
    var r = {};
    for (var a in e) b.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
    if (e != null && s)
        for (var a of s(e)) t.indexOf(a) < 0 && f.call(e, a) && (r[a] = e[a]);
    return r
};
import {
    bH as g,
    y as w
} from "./tracking-376cff7a.js";
import {
    c as x
} from "./FlexBox-1a755411.js";
import {
    b as d
} from "./_baseEach-63ad03e0.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bd23561e-596b-45ea-bd56-48e149ade0c1", e._sentryDebugIdIdentifier = "sentry-dbid-bd23561e-596b-45ea-bd56-48e149ade0c1")
    } catch (r) {}
})();
const v = g((I, p) => {
    var n = I,
        {
            className: e,
            error: t = !1,
            font: r
        } = n,
        a = y(n, ["className", "error", "font"]);
    return w("textarea", c(i({
        ref: p,
        className: x(e, d.input, d.textarea, {
            [d.error]: t
        }, r && d[`font-${r}`])
    }, a), {
        type: "text"
    }))
});
export {
    v as T
};