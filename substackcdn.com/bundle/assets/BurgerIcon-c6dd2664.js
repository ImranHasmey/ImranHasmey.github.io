var f = Object.defineProperty,
    s = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty,
    g = Object.prototype.propertyIsEnumerable;
var c = (d, e, t) => e in d ? f(d, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : d[e] = t,
    o = (d, e) => {
        for (var t in e || (e = {})) i.call(e, t) && c(d, t, e[t]);
        if (n)
            for (var t of n(e)) g.call(e, t) && c(d, t, e[t]);
        return d
    },
    a = (d, e) => s(d, b(e));
import {
    y as r
} from "./tracking-376cff7a.js";
import {
    S as h
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var d = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[e] = "fbbad6dd-3805-49c0-adb3-9190b7f31505", d._sentryDebugIdIdentifier = "sentry-dbid-fbbad6dd-3805-49c0-adb3-9190b7f31505")
    } catch (t) {}
})();
const I = d => r(h, a(o({}, d), {
    name: "BurgerIcon",
    svgParams: {
        height: 100,
        width: 100
    }
}), r("path", {
    d: "M84.7,53.7H15.1c-2.1,0-3.8-1.7-3.8-3.8v0c0-2.1,1.7-3.8,3.8-3.8h69.7c2.1,0,3.8,1.7,3.8,3.8v0C88.6,52,86.9,53.7,84.7,53.7  z"
}), r("path", {
    d: "M84.7,23.7H15.1c-2.1,0-3.8-1.7-3.8-3.8v0c0-2.1,1.7-3.8,3.8-3.8h69.7c2.1,0,3.8,1.7,3.8,3.8v0C88.6,22,86.9,23.7,84.7,23.7  z"
}), r("path", {
    d: "M84.7,83.7H15.1c-2.1,0-3.8-1.7-3.8-3.8v0c0-2.1,1.7-3.8,3.8-3.8h69.7c2.1,0,3.8,1.7,3.8,3.8v0C88.6,82,86.9,83.7,84.7,83.7  z"
}));
export {
    I as B
};