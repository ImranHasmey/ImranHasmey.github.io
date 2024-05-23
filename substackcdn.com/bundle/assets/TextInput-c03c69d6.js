var g = Object.defineProperty,
    I = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty,
    c = Object.prototype.propertyIsEnumerable;
var a = (e, t, s) => t in e ? g(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s,
    u = (e, t) => {
        for (var s in t || (t = {})) i.call(t, s) && a(e, s, t[s]);
        if (n)
            for (var s of n(t)) c.call(t, s) && a(e, s, t[s]);
        return e
    },
    p = (e, t) => I(e, w(t));
var y = (e, t) => {
    var s = {};
    for (var r in e) i.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
    if (e != null && n)
        for (var r of n(e)) t.indexOf(r) < 0 && c.call(e, r) && (s[r] = e[r]);
    return s
};
import {
    bH as D,
    y as _
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
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "285d7227-0aef-41d2-9f1d-c65638ec00f9", e._sentryDebugIdIdentifier = "sentry-dbid-285d7227-0aef-41d2-9f1d-c65638ec00f9")
    } catch (s) {}
})();
const N = D((k, m) => {
    var o = k,
        {
            className: e,
            error: t = !1,
            type: s = "text",
            width: r,
            background: l,
            font: f
        } = o,
        b = y(o, ["className", "error", "type", "width", "background", "font"]);
    return _("input", p(u({}, b), {
        className: x(e, d.input, {
            [d.error]: t
        }, f && d[`font-${f}`]),
        style: {
            width: r,
            background: l
        },
        type: s,
        ref: m
    }))
});
export {
    N as T
};