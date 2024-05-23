var i = Object.defineProperty,
    l = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty,
    u = Object.prototype.propertyIsEnumerable;
var r = (e, n, o) => n in e ? i(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[n] = o,
    s = (e, n) => {
        for (var o in n || (n = {})) b.call(n, o) && r(e, o, n[o]);
        if (t)
            for (var o of t(n)) u.call(n, o) && r(e, o, n[o]);
        return e
    },
    d = (e, n) => l(e, g(n));
import {
    y as I
} from "./tracking-376cff7a.js";
import {
    U as p,
    g as f
} from "./profile-a781fd85.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f8255515-e8a7-4e2e-8ebb-f8bd1f0329a2", e._sentryDebugIdIdentifier = "sentry-dbid-f8255515-e8a7-4e2e-8ebb-f8bd1f0329a2")
    } catch (o) {}
})();
const y = {
        sm: 16,
        md: 20,
        lg: 24
    },
    m = {
        100: p,
        1e3: f,
        1e4: f
    },
    w = {
        1e4: {
            fill: "var(--color-accent-purple)"
        }
    },
    D = ({
        tier: e,
        size: n = "sm"
    }) => {
        if (!e) return null;
        const o = m[e.toString()],
            c = w[e.toString()],
            a = y[n];
        return I(o, d(s({}, c), {
            height: a
        }))
    };
export {
    D as U
};