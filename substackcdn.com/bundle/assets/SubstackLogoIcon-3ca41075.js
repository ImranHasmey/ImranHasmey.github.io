var f = Object.defineProperty,
    b = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty,
    g = Object.prototype.propertyIsEnumerable;
var r = (e, t, o) => t in e ? f(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[t] = o,
    s = (e, t) => {
        for (var o in t || (t = {})) c.call(t, o) && r(e, o, t[o]);
        if (n)
            for (var o of n(t)) g.call(t, o) && r(e, o, t[o]);
        return e
    },
    a = (e, t) => b(e, i(t));
import {
    y as d
} from "./tracking-376cff7a.js";
import {
    S as p
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c4bdbd52-30e6-41b0-a356-01487c1fe9e6", e._sentryDebugIdIdentifier = "sentry-dbid-c4bdbd52-30e6-41b0-a356-01487c1fe9e6")
    } catch (o) {}
})();
const h = e => d(p, a(s({}, e), {
    name: "SubstackLogoIcon",
    svgParams: {
        height: 18,
        width: 16,
        fill: "#ff6719",
        stroke: "none"
    }
}), d("path", {
    d: "M16 4H0V6H16V4Z"
}), d("path", {
    d: "M0 8V18L7.9993 13.534L16 18V8H0Z"
}), d("path", {
    d: "M16 0H0V2H16V0Z"
}));
export {
    h as S
};