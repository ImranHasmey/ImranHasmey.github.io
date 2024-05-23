var p = Object.defineProperty,
    u = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty,
    s = Object.prototype.propertyIsEnumerable;
var d = (e, a, n) => a in e ? p(e, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[a] = n,
    f = (e, a) => {
        for (var n in a || (a = {})) i.call(a, n) && d(e, n, a[n]);
        if (r)
            for (var n of r(a)) s.call(a, n) && d(e, n, a[n]);
        return e
    },
    _ = (e, a) => u(e, l(a));
var b = (e, a) => {
    var n = {};
    for (var t in e) i.call(e, t) && a.indexOf(t) < 0 && (n[t] = e[t]);
    if (e != null && r)
        for (var t of r(e)) a.indexOf(t) < 0 && s.call(e, t) && (n[t] = e[t]);
    return n
};
import {
    y as o
} from "./tracking-376cff7a.js";
import {
    c as y
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            a = new Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cd57faea-d107-4a78-9be6-3ec1e16e64f1", e._sentryDebugIdIdentifier = "sentry-dbid-cd57faea-d107-4a78-9be6-3ec1e16e64f1")
    } catch (n) {}
})();
const m = "_container_txbxr_1",
    x = "_radio_txbxr_15",
    c = {
        container: m,
        radio: x,
        "radio--accent": "_radio--accent_txbxr_39"
    },
    v = n => {
        var t = n,
            {
                color: e
            } = t,
            a = b(t, ["color"]);
        return o("div", {
            className: y(c.container)
        }, o("input", _(f({}, a), {
            type: "radio"
        })), o("span", {
            className: y(c.radio, {
                [c["radio--accent"]]: e === "accent"
            })
        }))
    };
export {
    v as R
};