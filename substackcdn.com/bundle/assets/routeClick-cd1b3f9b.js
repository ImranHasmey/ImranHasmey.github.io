var g = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty,
    y = Object.prototype.propertyIsEnumerable;
var b = (e, r, t) => r in e ? g(e, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[r] = t,
    d = (e, r) => {
        for (var t in r || (r = {})) m.call(r, t) && b(e, t, r[t]);
        if (c)
            for (var t of c(r)) y.call(r, t) && b(e, t, r[t]);
        return e
    };
var f = (e, r) => {
    var t = {};
    for (var n in e) m.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && c)
        for (var n of c(e)) r.indexOf(n) < 0 && y.call(e, n) && (t[n] = e[n]);
    return t
};
import {
    c as h
} from "./x-fc38e969.js";
import {
    y as i,
    az as w
} from "./tracking-376cff7a.js";
import {
    f as I,
    c as p
} from "./FlexBox-1a755411.js";
import {
    h as B
} from "./user-e16f1619.js";
import {
    c as C
} from "./useResponsive-08e338a7.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            r = new Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "ebcfa837-8f2f-4acc-9db9-6705fa2b86da", e._sentryDebugIdIdentifier = "sentry-dbid-ebcfa837-8f2f-4acc-9db9-6705fa2b86da")
    } catch (t) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j = h("ChevronLeft", [
    ["path", {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3"
    }]
]);

function k(D) {
    var l = D,
        {
            className: e,
            rounded: r,
            variant: t,
            look: n = "button",
            fixedHeight: o = !0,
            size: a = "medium",
            forwardedRef: s
        } = l,
        u = f(l, ["className", "rounded", "variant", "look", "fixedHeight", "size", "forwardedRef"]);
    return (!t || ["primary", "secondary", "tertiary"].includes(t)) && ["button", "round", "circle", "borderless"].includes(n) ? (["round", "circle"].includes(n) && (r = !0), i(I, d({
        className: e,
        priority: t,
        size: {
            small: "sm",
            medium: "md",
            large: "lg"
        }[a],
        rounded: r,
        ref: s
    }, u))) : i(B, d({
        className: p("reader2-button", e, `reader2-button-${n}`, o && "fixedHeight", t && (["text", "borderless"].includes(n) ? `reader2-button-text-${t}` : `reader2-button-${t}`), (r || n === "circle") && "reader2-button-rounded", `reader2-button-${a}`),
        ref: s
    }, u))
}

function z(a) {
    var s = a,
        {
            isActive: e = !1,
            isSmall: r = !1,
            icon: t,
            children: n
        } = s,
        o = f(s, ["isActive", "isSmall", "icon", "children"]);
    return i("button", d({
        className: p("reader2-button-reset reader2-tab", e && "active", r && "small", t ? "hasIcon" : null)
    }, o), t, n)
}
const H = C("reader2-button-row");

function N(e, r, {
    native: t = !1,
    newTab: n = !1,
    replace: o,
    state: a
} = {}) {
    e.defaultPrevented || (e.preventDefault(), t ? n || e.metaKey || e.ctrlKey ? Object.assign(document.createElement("a"), {
        target: "_blank",
        rel: "noopener",
        href: r
    }).click() : window.location.assign(r) : (w(r, o), a !== void 0 && history.replaceState(a, "")))
}
export {
    k as B, j as C, z as P, H as a, N as r
};