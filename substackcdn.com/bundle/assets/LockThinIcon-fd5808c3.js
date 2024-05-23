var l = Object.defineProperty,
    y = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty,
    f = Object.prototype.propertyIsEnumerable;
var d = (e, a, t) => a in e ? l(e, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[a] = t,
    i = (e, a) => {
        for (var t in a || (a = {})) r.call(a, t) && d(e, t, a[t]);
        if (s)
            for (var t of s(a)) f.call(a, t) && d(e, t, a[t]);
        return e
    },
    c = (e, a) => y(e, g(a));
var b = (e, a) => {
    var t = {};
    for (var n in e) r.call(e, n) && a.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && s)
        for (var n of s(e)) a.indexOf(n) < 0 && f.call(e, n) && (t[n] = e[n]);
    return t
};
import {
    y as o
} from "./tracking-376cff7a.js";
import {
    S as h
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            a = new Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e7a7a22f-a58b-42ef-93e2-8aae83b50641", e._sentryDebugIdIdentifier = "sentry-dbid-e7a7a22f-a58b-42ef-93e2-8aae83b50641")
    } catch (t) {}
})();
const I = t => {
    var n = t,
        {
            color: e = "#262626"
        } = n,
        a = b(n, ["color"]);
    return o(h, c(i({}, a), {
        name: "LockThinIcon",
        svgParams: {
            height: 16,
            width: 16
        }
    }), o("path", {
        className: "lock-shackle",
        d: "M5 6L5 3.9C5 2.57452 6.11929 1.5 7.5 1.5C8.88071 1.5 10 2.57452 10 3.9V6",
        stroke: e
    }), o("path", {
        className: "lock-body",
        d: "M2 7.5C2 6.94772 2.44772 6.5 3 6.5H12C12.5523 6.5 13 6.94772 13 7.5V12.5C13 13.0523 12.5523 13.5 12 13.5H3C2.44771 13.5 2 13.0523 2 12.5V7.5Z",
        fill: e,
        stroke: e
    }))
};
export {
    I as L
};