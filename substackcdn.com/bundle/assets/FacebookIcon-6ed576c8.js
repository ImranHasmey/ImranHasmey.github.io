var s = Object.defineProperty,
    f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty,
    b = Object.prototype.propertyIsEnumerable;
var t = (e, d, o) => d in e ? s(e, d, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[d] = o,
    c = (e, d) => {
        for (var o in d || (d = {})) y.call(d, o) && t(e, o, d[o]);
        if (n)
            for (var o of n(d)) b.call(d, o) && t(e, o, d[o]);
        return e
    },
    a = (e, d) => f(e, i(d));
import {
    y as r
} from "./tracking-376cff7a.js";
import {
    S as g
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            d = new Error().stack;
        d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "dc7d1084-acdc-4917-9c42-23eedc37a3fa", e._sentryDebugIdIdentifier = "sentry-dbid-dc7d1084-acdc-4917-9c42-23eedc37a3fa")
    } catch (o) {}
})();
const H = e => r(g, a(c({}, e), {
    name: "FacebookIcon",
    svgParams: {
        height: 24,
        width: 24
    }
}), r("path", {
    d: "M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
}));
export {
    H as F
};