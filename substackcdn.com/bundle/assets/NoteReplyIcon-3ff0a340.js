var i = Object.defineProperty,
    f = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var d = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty,
    y = Object.prototype.propertyIsEnumerable;
var n = (e, t, o) => t in e ? i(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[t] = o,
    r = (e, t) => {
        for (var o in t || (t = {})) c.call(t, o) && n(e, o, t[o]);
        if (d)
            for (var o of d(t)) y.call(t, o) && n(e, o, t[o]);
        return e
    },
    a = (e, t) => f(e, b(t));
import {
    y as s
} from "./tracking-376cff7a.js";
import {
    S as l
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "da1cb916-fbed-469c-8a94-f2bd0a16a741", e._sentryDebugIdIdentifier = "sentry-dbid-da1cb916-fbed-469c-8a94-f2bd0a16a741")
    } catch (o) {}
})();
const h = e => s(l, a(r({}, e), {
    name: "NoteReplyIcon",
    svgParams: {
        height: 24,
        width: 24,
        stroke: e.stroke,
        strokeWidth: e.strokeWidth
    }
}), s("path", {
    d: "M22 11.4445C22.0038 12.911 21.6612 14.3577 21 15.6667C20.216 17.2353 19.0108 18.5546 17.5194 19.477C16.0279 20.3993 14.3091 20.8882 12.5555 20.8889C11.089 20.8927 9.64234 20.5501 8.33332 19.8889L2 22L4.11111 15.6667C3.44992 14.3577 3.10729 12.911 3.11111 11.4445C3.11179 9.69086 3.60068 7.97208 4.52302 6.48064C5.44536 4.98919 6.76472 3.78399 8.33332 3.00003C9.64234 2.33884 11.089 1.99621 12.5555 2.00003H13.1111C15.427 2.1278 17.6145 3.10532 19.2546 4.74543C20.8947 6.38553 21.8722 8.57297 22 10.8889V11.4445Z",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}));
export {
    h as N
};