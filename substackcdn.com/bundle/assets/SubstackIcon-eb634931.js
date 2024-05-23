var u = Object.defineProperty,
    p = Object.defineProperties;
var y = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty,
    f = Object.prototype.propertyIsEnumerable;
var r = (e, t, d) => t in e ? u(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: d
    }) : e[t] = d,
    s = (e, t) => {
        for (var d in t || (t = {})) c.call(t, d) && r(e, d, t[d]);
        if (a)
            for (var d of a(t)) f.call(t, d) && r(e, d, t[d]);
        return e
    },
    i = (e, t) => p(e, y(t));
var b = (e, t) => {
    var d = {};
    for (var n in e) c.call(e, n) && t.indexOf(n) < 0 && (d[n] = e[n]);
    if (e != null && a)
        for (var n of a(e)) t.indexOf(n) < 0 && f.call(e, n) && (d[n] = e[n]);
    return d
};
import {
    y as o,
    bn as g
} from "./tracking-376cff7a.js";
import {
    S as l
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "261a9e0c-051a-404b-a03d-fd0256de97ce", e._sentryDebugIdIdentifier = "sentry-dbid-261a9e0c-051a-404b-a03d-fd0256de97ce")
    } catch (d) {}
})();
const V = d => {
    var n = d,
        {
            svgParams: e
        } = n,
        t = b(n, ["svgParams"]);
    return o(l, i(s({}, t), {
        name: "SubstackIcon",
        svgParams: s({
            height: 1e3,
            width: 1e3,
            fill: g,
            stroke: "none"
        }, e)
    }), o("path", {
        d: "M764.166 348.371H236.319V419.402H764.166V348.371Z"
    }), o("path", {
        d: "M236.319 483.752V813.999L500.231 666.512L764.19 813.999V483.752H236.319Z"
    }), o("path", {
        d: "M764.166 213H236.319V284.019H764.166V213Z"
    }))
};
export {
    V as S
};