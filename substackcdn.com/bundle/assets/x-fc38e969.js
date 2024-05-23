var v = Object.defineProperty,
    I = Object.defineProperties;
var C = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty,
    u = Object.prototype.propertyIsEnumerable;
var c = (e, t, r) => t in e ? v(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    s = (e, t) => {
        for (var r in t || (t = {})) l.call(t, r) && c(e, r, t[r]);
        if (n)
            for (var r of n(t)) u.call(t, r) && c(e, r, t[r]);
        return e
    },
    b = (e, t) => I(e, C(t));
var f = (e, t) => {
    var r = {};
    for (var o in e) l.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
    if (e != null && n)
        for (var o of n(e)) t.indexOf(o) < 0 && u.call(e, o) && (r[o] = e[o]);
    return r
};
import {
    y as w,
    P as D
} from "./tracking-376cff7a.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "134547b2-5a94-4d60-85cb-1feec43a4482", e._sentryDebugIdIdentifier = "sentry-dbid-134547b2-5a94-4d60-85cb-1feec43a4482")
    } catch (r) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _ = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
};
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $ = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    x = (e, t) => {
        const r = j => {
            var i = j,
                {
                    color: o = "currentColor",
                    size: d = 24,
                    strokeWidth: a = 2,
                    absoluteStrokeWidth: g,
                    children: p,
                    class: y = ""
                } = i,
                h = f(i, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "children", "class"]);
            return w("svg", s(b(s({}, _), {
                width: String(d),
                height: d,
                stroke: o,
                "stroke-width": g ? Number(a) * 24 / Number(d) : a,
                class: ["lucide", `lucide-${$(e)}`, y].join(" ")
            }), h), [...t.map(([k, m]) => w(k, m)), ...D(p)])
        };
        return r.displayName = `${e}`, r
    };
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N = x("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
export {
    N as X, x as c
};