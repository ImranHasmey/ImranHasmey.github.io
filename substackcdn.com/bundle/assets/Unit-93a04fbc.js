var _ = Object.defineProperty,
    F = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty,
    w = Object.prototype.propertyIsEnumerable;
var g = (e, t, o) => t in e ? _(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[t] = o,
    f = (e, t) => {
        for (var o in t || (t = {})) b.call(t, o) && g(e, o, t[o]);
        if (l)
            for (var o of l(t)) w.call(t, o) && g(e, o, t[o]);
        return e
    },
    h = (e, t) => F(e, T(t));
var v = (e, t) => {
    var o = {};
    for (var a in e) b.call(e, a) && t.indexOf(a) < 0 && (o[a] = e[a]);
    if (e != null && l)
        for (var a of l(e)) t.indexOf(a) < 0 && w.call(e, a) && (o[a] = e[a]);
    return o
};
import {
    x,
    y as n,
    b2 as A
} from "./tracking-376cff7a.js";
import {
    s as m,
    c as I,
    q as P,
    r as B,
    T as C,
    b as k
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import "./Divider-0a4efe7e.js";
import {
    m as i,
    d as U
} from "./ProfileHoverCard-c8bfb61a.js";
import {
    A as N
} from "./_defineProperty-105d261c.js";
import {
    u as E,
    i as M
} from "./isOnReader-b27f4ba9.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e355d594-5381-4045-a97b-2cb9cbf512f6", e._sentryDebugIdIdentifier = "sentry-dbid-e355d594-5381-4045-a97b-2cb9cbf512f6")
    } catch (o) {}
})();
m({
    display: "flex"
});
const R = m({
    display: "flex",
    direction: "column"
});

function X(G) {
    var u = G,
        {
            showGutter: e = !1,
            hasAvatar: t = !0,
            hasContext: o = !1,
            onClick: a,
            className: c
        } = u,
        r = v(u, ["showGutter", "hasAvatar", "hasContext", "onClick", "className"]);
    let y;
    const D = () => {
            var s;
            y = (s = window.getSelection()) == null ? void 0 : s.toString()
        },
        S = a ? s => {
            const d = window.getSelection();
            if (d && !d.isCollapsed && (d == null ? void 0 : d.toString()) !== y) return;
            const {
                target: p
            } = s;
            p instanceof Element && p.closest("button, a") || s.defaultPrevented || a(s)
        } : void 0;
    return n("div", f({
        className: I(Y, i.feedUnit, e ? i.showThreadGutter : void 0, o ? i.hasContext : void 0, a && i.hasAction, t ? i.hasAvatar : void 0, c),
        onPointerDown: D,
        onClick: S
    }, r))
}
const Y = I(P({
        gap: 4
    }), R.styles),
    j = new Intl.DateTimeFormat(void 0, {
        month: "short",
        day: "numeric"
    }),
    q = new Intl.DateTimeFormat(void 0, {
        dateStyle: "long"
    });

function Z({
    timestamp: e
}) {
    const t = x(),
        o = x(e),
        a = t.diff(o, "day"),
        c = t.diff(o, "year");
    let r;
    return c >= 1 ? r = q.format(o.toDate()) : a > 7 ? r = j.format(o.toDate()) : r = o.fromNowShort(), n(C.B4, {
        as: "span",
        color: "secondary"
    }, e && r)
}
const $ = m(h(f({}, B), {
    display: "flex",
    flex: "grow",
    minWidth: 0,
    gap: 8,
    alignItems: "center"
}));

function z({
    user: e,
    className: t
}) {
    return n(N, {
        size: 36,
        user: e,
        className: t
    })
}

function ee({
    children: e
}) {
    return n(C.B3, {
        className: i.feedCommentBodyInner,
        color: "primary"
    }, e)
}

function te({
    user: e,
    onClick: t,
    utm_content: o
}) {
    const a = E({
        href: A(e, {
            noBase: M
        }),
        state: {
            showBack: !0
        },
        onClick: t,
        campaign: {
            content: o
        }
    });
    return n(k, f({
        as: "a",
        flex: "auto",
        alignSelf: "start"
    }, a), n(U, {
        subject: e,
        dontStopPropagation: !0,
        utmSource: "feed"
    }, n(z, {
        user: e
    })))
}
export {
    ee as C, X as F, $ as M, Z as T, te as a, z as b, R as c
};