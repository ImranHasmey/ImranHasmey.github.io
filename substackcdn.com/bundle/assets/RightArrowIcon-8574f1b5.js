var s = Object.defineProperty,
    a = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty,
    g = Object.prototype.propertyIsEnumerable;
var d = (e, o, r) => o in e ? s(e, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[o] = r,
    n = (e, o) => {
        for (var r in o || (o = {})) c.call(o, r) && d(e, r, o[r]);
        if (t)
            for (var r of t(o)) g.call(o, r) && d(e, r, o[r]);
        return e
    },
    f = (e, o) => a(e, b(o));
import {
    y as i
} from "./tracking-376cff7a.js";
import {
    S as u
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            o = new Error().stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "d495521f-d6ed-46fb-8cfa-76e76491abf2", e._sentryDebugIdIdentifier = "sentry-dbid-d495521f-d6ed-46fb-8cfa-76e76491abf2")
    } catch (r) {}
})();
const l = e => i(u, f(n({}, e), {
    name: "RightArrowIcon",
    svgParams: {
        height: 20,
        width: 20
    }
}), i("path", {
    d: "M7.5 15L12.5 10L7.5 5",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}));
export {
    l as R
};