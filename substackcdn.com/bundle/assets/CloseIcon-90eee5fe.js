var a = Object.defineProperty,
    f = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty,
    u = Object.prototype.propertyIsEnumerable;
var d = (e, o, n) => o in e ? a(e, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[o] = n,
    s = (e, o) => {
        for (var n in o || (o = {})) l.call(o, n) && d(e, n, o[n]);
        if (r)
            for (var n of r(o)) u.call(o, n) && d(e, n, o[n]);
        return e
    },
    i = (e, o) => f(e, c(o));
import {
    y as t
} from "./tracking-376cff7a.js";
import {
    S as p
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            o = new Error().stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "a19a2c64-9386-471d-bd82-87412f48f95f", e._sentryDebugIdIdentifier = "sentry-dbid-a19a2c64-9386-471d-bd82-87412f48f95f")
    } catch (n) {}
})();
const k = e => t(p, i(s({}, e), {
    name: "CloseIcon",
    svgParams: {
        height: 20,
        width: 20,
        stroke: "#666666"
    }
}), t("path", {
    d: "M15 5L5 15",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), t("path", {
    d: "M5 5L15 15",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}));
export {
    k as C
};