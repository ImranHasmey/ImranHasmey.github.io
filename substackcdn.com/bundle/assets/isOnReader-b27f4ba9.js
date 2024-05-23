var _ = Object.defineProperty,
    h = Object.defineProperties;
var k = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty,
    g = Object.prototype.propertyIsEnumerable;
var b = (a, e, t) => e in a ? _(a, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : a[e] = t,
    u = (a, e) => {
        for (var t in e || (e = {})) p.call(e, t) && b(a, t, e[t]);
        if (l)
            for (var t of l(e)) g.call(e, t) && b(a, t, e[t]);
        return a
    },
    f = (a, e) => h(a, k(e));
var w = (a, e) => {
    var t = {};
    for (var n in a) p.call(a, n) && e.indexOf(n) < 0 && (t[n] = a[n]);
    if (a != null && l)
        for (var n of l(a)) e.indexOf(n) < 0 && g.call(a, n) && (t[n] = a[n]);
    return t
};
import {
    bH as P,
    y as I,
    iG as L,
    az as D,
    iH as $
} from "./tracking-376cff7a.js";
import {
    B
} from "./FlexBox-1a755411.js";
import {
    aw as m
} from "./ProfileHoverCard-c8bfb61a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var a = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "9d727fdd-0368-4607-b45a-76b4034ebad0", a._sentryDebugIdIdentifier = "sentry-dbid-9d727fdd-0368-4607-b45a-76b4034ebad0")
    } catch (t) {}
})();
const H = P((d, i) => {
    var o = d,
        {
            href: a,
            onClick: e,
            campaign: t,
            replace: n,
            state: s,
            showBack: y
        } = o,
        r = w(o, ["href", "onClick", "campaign", "replace", "state", "showBack"]);
    s = y ? f(u({}, s), {
        showBack: !0
    }) : s;
    const c = K({
        href: a,
        onClick: e,
        campaign: t,
        replace: n,
        state: s
    });
    return I(B, u(f(u({
        as: "a"
    }, r), {
        ref: i
    }), c))
});

function K({
    onClick: a,
    href: e,
    campaign: t,
    replace: n,
    state: s
}) {
    if (e && !m()) {
        let r;
        try {
            r = new URL(e)
        } catch (i) {
            try {
                r = new URL(`${document.location.origin}${e}`)
            } catch (d) {}
        }
        if (r) {
            if (r.origin === document.location.origin && !t) {
                const i = new URLSearchParams,
                    d = {};
                for (const [o, c] of r.searchParams) o.startsWith("utm_") ? o === "utm_campaign" ? d.name = c : d[o.replace(/^utm_/, "")] = c : i.append(o, c);
                t = d, e = `${r.pathname}${i}`
            } else if (r.origin !== document.location.origin && t) {
                for (const [i, d] of Object.entries(t)) {
                    const o = i === "name" ? "campaign" : i;
                    r.searchParams.set(`utm_${o}`, d)
                }
                e = r.toString()
            }
        }
    }
    return {
        href: e,
        onClick: r => {
            a == null || a(r), !r.defaultPrevented && !r.ctrlKey && !r.shiftKey && !r.metaKey && e && !m() && (L(u({}, t)), r.preventDefault(), r.stopPropagation(), D(e, n), s && history.replaceState(s, ""))
        }
    }
}
const O = document.location.origin === $ && !m();
export {
    H as L, O as i, K as u
};