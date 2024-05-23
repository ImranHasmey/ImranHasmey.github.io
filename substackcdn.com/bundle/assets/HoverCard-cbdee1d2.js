var Z = Object.defineProperty,
    A = Object.defineProperties;
var G = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var $ = Object.prototype.hasOwnProperty,
    B = Object.prototype.propertyIsEnumerable;
var I = (e, t, r) => t in e ? Z(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    c = (e, t) => {
        for (var r in t || (t = {})) $.call(t, r) && I(e, r, t[r]);
        if (h)
            for (var r of h(t)) B.call(t, r) && I(e, r, t[r]);
        return e
    },
    v = (e, t) => A(e, G(t));
var y = (e, t) => {
    var r = {};
    for (var a in e) $.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
    if (e != null && h)
        for (var a of h(e)) t.indexOf(a) < 0 && B.call(e, a) && (r[a] = e[a]);
    return r
};
import {
    c as J,
    X as Q
} from "./x-fc38e969.js";
import {
    y as s,
    cy as V,
    h as x,
    o as L,
    bH as K,
    cZ as tt,
    p as et
} from "./tracking-376cff7a.js";
import {
    c as T,
    U as rt,
    F as k,
    a as O
} from "./FlexBox-1a755411.js";
import {
    c as b
} from "./useResponsive-08e338a7.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    q as F
} from "./transition-c6a4911b.js";
import {
    _ as at,
    i as H
} from "./_defineProperty-105d261c.js";
import {
    a as nt,
    u as st
} from "./react-laag.esm-f47be925.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "138853e3-7e4a-4241-8f37-f62ff71694e3", e._sentryDebugIdIdentifier = "sentry-dbid-138853e3-7e4a-4241-8f37-f62ff71694e3")
    } catch (r) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = J("Check", [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ]),
    ot = "_reset_1vek6_1",
    it = {
        reset: ot,
        "color-primary": "_color-primary_1vek6_5",
        "color-secondary": "_color-secondary_1vek6_9"
    };
b("tw-font-title tw-text-h2 tw-leading-h2 tw-tracking-h2 tw-font-bold");
const D = b("tw-text-sm tw-leading-sm tw-tracking-sm tw-font-body");

function lt(n) {
    var o = n,
        {
            className: e,
            color: t,
            as: r = "span"
        } = o,
        a = y(o, ["className", "color", "as"]);
    return s(r, v(c({}, a), {
        className: T(e, t && it[`color-${t}`])
    }))
}
const E = "tw-font-body tw-text-sm tw-leading-sm tw-tracking-sm tw-font-semibold",
    ct = b(E, lt);

function N(m) {
    var g = m,
        {
            className: e,
            variant: t,
            look: r = "button",
            fill: a = "outline",
            fixedHeight: n = !0,
            size: o = "medium",
            leftIcon: l,
            rightIcon: i,
            noPadding: w = !1,
            forwardedRef: d,
            children: u
        } = g,
        f = y(g, ["className", "variant", "look", "fill", "fixedHeight", "size", "leftIcon", "rightIcon", "noPadding", "forwardedRef", "children"]);
    return s(rt, c({
        className: T(e, "tw-cursor-pointer tw-appearance-none tw-whitespace-nowrap tw-border-0 tw-border-solid disabled:tw-cursor-not-allowed", !p.includes(r) && "tw-bg-transparent", ut.includes(r) ? [`tw-relative tw-flex tw-items-center tw-justify-center tw-gap-3 ${E}`, wt.includes(r) && !w && "tw-px-5", n || r == "round" ? o === "small" ? "tw-h-8" : "tw-h-button" : "tw-py-[10px]"] : "tw-p-0", r === "button" && "tw-rounded", r === "round" && ["tw-rounded-full tw-px-4", l && "tw-pl-[10px]", i && "tw-pr-[10px]"], r === "circle" && ["tw-justify-center tw-rounded-full", o === "small" ? "tw-h-8 tw-w-8" : "tw-h-button tw-w-button"], r === "text" && `tw-inline ${_}`, r === "reset" && `tw-inline-block ${_}`, r === "flex" && `tw-flex ${_}`, t === "primary" ? ["hover:tw-opacity-80 disabled:tw-opacity-70", p.includes(r) ? " tw-bg-substack-accent tw-text-substack-bg" : "tw-bg-transparent tw-text-substack-accent"] : t === "themed-primary" ? ["hover:tw-opacity-80 disabled:tw-opacity-70", p.includes(r) ? " tw-bg-pub-accent tw-text-pub-accent-inverse" : "tw-bg-transparent tw-text-pub-accent"] : t === "secondary" ? ["tw-text-substack-secondary disabled:tw-opacity-70", p.includes(r) ? a === "filled" ? "tw-border tw-border-substack-detail tw-bg-substack-wash hover:tw-border-substack-tertiary hover:tw-bg-dark-primary hover:tw-text-substack-secondary" : "tw-border tw-border-substack-detail tw-bg-substack-bg hover:tw-bg-substack-wash" : "tw-bg-transparent"] : t === "themed-secondary" ? ["tw-border tw-border-pub-accent tw-bg-transparent tw-text-pub-accent hover:tw-bg-pub-detail-light disabled:tw-opacity-70"] : t === "tertiary" ? ["tw-text-substack-secondary disabled:tw-opacity-70", p.includes(r) && "tw-border tw-border-substack-detail tw-bg-transparent hover:tw-bg-substack-wash"] : t === "destructive" ? ["hover:tw-opacity-80 disabled:tw-opacity-70", p.includes(r) ? " tw-bg-error tw-text-substack-bg" : " tw-bg-transparent tw-text-error"] : t === "twitter" && ["hover:tw-opacity-80 disabled:tw-opacity-70", p.includes(r) ? "tw-bg-twitter tw-text-substack-bg" : "tw-bg-transparent tw-text-twitter"]),
        ref: d
    }, f), l, u, i)
}
const _ = "tw-text-[length:inherit] tw-text-[color:inherit] tw-font-[weight:inherit]",
    ut = ["button", "borderless", "circle", "round"],
    wt = ["button", "borderless"],
    p = ["button", "circle", "round"];

function be({
    text: e,
    cta: t,
    onAccept: r,
    href: a,
    onClose: n,
    Icon: o,
    className: l
}) {
    return s(M, {
        className: T("tw-items-center", l)
    }, s(k, {
        className: "tw-flex-1",
        gap: 12
    }, o && s(q, {
        Icon: o
    }), s(R, null, e)), s(k, {
        className: "tw-flex-none",
        gap: 12
    }, t && (typeof t == "string" ? (a || r) && s(N, {
        look: "flex",
        onClick: i => {
            n == null || n(), r == null || r(i)
        },
        href: a
    }, s(ct, {
        className: "tw-text-dark-secondary"
    }, t)) : t), s("div", {
        className: "tw-w-px tw-self-stretch tw-bg-dark-detail"
    }), s(W, {
        onClick: n
    })))
}

function me({
    title: e,
    body: t,
    buttons: r,
    onClose: a,
    Icon: n
}) {
    return s(M, {
        className: "tw-max-w-md"
    }, n && s(q, {
        Icon: n
    }), s(O, {
        className: "tw-flex-0-5",
        gap: 8
    }, s(O, {
        className: "tw-flex-0-5",
        gap: 4
    }, s(R, null, e), s(dt, null, t)), r && s(k, {
        gap: 24
    }, r)), s(W, {
        onClick: a
    }))
}

function ge(e) {
    return s(N, c({
        look: "flex",
        className: "tw-h-9 tw-items-center"
    }, e))
}
const M = b("tw-flex tw-gap-8 tw-rounded-lg tw-px-4 tw-py-4 tw-border tw-border-solid tw-border-tooltip-detail tw-bg-tooltip-bg tw-drop-shadow-md"),
    R = b("min-h-5 tw-flex-1-1 tw-font-medium tw-text-dark-primary tw-items-center", D),
    dt = b("min-h-5 tw-flex-1 0 tw-text-dark-secondary tw-items-center", D);

function W({
    onClick: e
}) {
    return s(N, {
        look: "flex",
        onClick: e
    }, s(Q, {
        className: "tw-stroke-dark-secondary",
        strokeWidth: 1.5,
        size: 20
    }))
}

function q({
    Icon: e
}) {
    return s(e, {
        className: "tw-shrink-0 tw-basis-5 tw-stroke-dark-primary",
        strokeWidth: 1.5,
        size: 20
    })
}
const ft = "tw-fixed tw-bottom-2.5 tw-right-2.5 tw-left-2.5 md:tw-left-auto md:tw-bottom-5 md:tw-right-5 md:tw-pl-4 tw-z-40",
    Y = V({
        popToast: () => {
            throw new Error("Popping toast requires a ToastProvider.")
        },
        addOffset: () => {}
    });

function ye({
    children: e
}) {
    const [t, r] = x(null), [a, n] = x("hidden"), [o, l] = x(0), i = L(null), w = () => {
        n("hidden")
    }, d = (f, {
        ttl: m = 5e3
    } = {}) => {
        r({
            element: f({
                onClose: w
            }),
            ttl: m
        }), n("visible"), i.current != null && clearTimeout(i.current), i.current = m === null ? null : setTimeout(w, m)
    }, u = f => {
        l(Math.min(o + f, 0))
    };
    return s(Y.Provider, {
        value: {
            popToast: d,
            addOffset: u
        }
    }, e, s("div", {
        className: ft,
        style: {
            transform: `translateY(${o}px)`
        }
    }, s(F, {
        appear: !0,
        show: !!t && a === "visible",
        enter: "tw-transition-all tw-duration-fast transform-gpu",
        enterFrom: "tw-opacity-0 tw-translate-y-4",
        enterTo: "tw-opacity-100 tw-translate-y-0",
        leave: "tw-transition-all tw-duration-fast transform-gpu",
        leaveFrom: "tw-opacity-100 tw-translate-y-0",
        leaveTo: "tw-opacity-0 tw-translate-y-4",
        onMouseEnter: () => i.current != null && clearTimeout(i.current),
        onMouseLeave: () => {
            i.current != null && clearTimeout(i.current), t && (i.current = t.ttl === null ? null : setTimeout(w, t.ttl))
        }
    }, t == null ? void 0 : t.element)))
}
const he = e => {
    const t = K((r, a) => {
        const n = pt();
        return s(e, v(c(c({}, n), r), {
            ref: a
        }))
    });
    return t.displayName = `withToastContext(${e.name||e.displayName||"Anonymous"})`, t
};

function pt() {
    return tt(Y)
}

function bt(e, t, r, a) {
    for (var n = e.length, o = r + (a ? 1 : -1); a ? o-- : ++o < n;)
        if (t(e[o], o, e)) return o;
    return -1
}
var mt = bt;

function gt(e) {
    return e !== e
}
var yt = gt;

function ht(e, t, r) {
    for (var a = r - 1, n = e.length; ++a < n;)
        if (e[a] === t) return a;
    return -1
}
var vt = ht,
    xt = mt,
    Tt = yt,
    _t = vt;

function kt(e, t, r) {
    return t === t ? _t(e, t, r) : xt(e, Tt, r)
}
var Nt = kt,
    Ct = Nt;

function It(e, t) {
    var r = e == null ? 0 : e.length;
    return !!r && Ct(e, t, 0) > -1
}
var ve = It;

function $t(e, t, r) {
    for (var a = -1, n = e == null ? 0 : e.length; ++a < n;)
        if (r(t, e[a])) return !0;
    return !1
}
var xe = $t;

function Bt(e, t, r) {
    switch (r.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, r[0]);
        case 2:
            return e.call(t, r[0], r[1]);
        case 3:
            return e.call(t, r[0], r[1], r[2])
    }
    return e.apply(t, r)
}
var Ot = Bt,
    Pt = Ot,
    P = Math.max;

function St(e, t, r) {
    return t = P(t === void 0 ? e.length - 1 : t, 0),
        function() {
            for (var a = arguments, n = -1, o = P(a.length - t, 0), l = Array(o); ++n < o;) l[n] = a[t + n];
            n = -1;
            for (var i = Array(t + 1); ++n < t;) i[n] = a[n];
            return i[t] = r(l), Pt(e, this, i)
        }
}
var Lt = St;

function Ft(e) {
    return function() {
        return e
    }
}
var Ht = Ft,
    Dt = Ht,
    S = at,
    Et = H,
    Mt = S ? function(e, t) {
        return S(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Dt(t),
            writable: !0
        })
    } : Et,
    Rt = Mt,
    Wt = 800,
    qt = 16,
    Yt = Date.now;

function jt(e) {
    var t = 0,
        r = 0;
    return function() {
        var a = Yt(),
            n = qt - (a - r);
        if (r = a, n > 0) {
            if (++t >= Wt) return arguments[0]
        } else t = 0;
        return e.apply(void 0, arguments)
    }
}
var Ut = jt,
    zt = Rt,
    Xt = Ut,
    Zt = Xt(zt),
    At = Zt,
    Gt = H,
    Jt = Lt,
    Qt = At;

function Vt(e, t) {
    return Qt(Jt(e, t, Gt), e + "")
}
var Te = Vt;
const Kt = "_hoverCardBase_19lhr_1",
    te = {
        hoverCardBase: Kt
    },
    ee = 500,
    re = 250,
    _e = l => {
        var i = l,
            {
                className: e = "",
                children: t,
                layerClassName: r,
                dontStopPropagation: a,
                as: n
            } = i,
            o = y(i, ["className", "children", "layerClassName", "dontStopPropagation", "as"]);
        const w = ae(c({
                className: r
            }, o)),
            d = n != null ? n : "div";
        return s(d, v(c(c({
            className: e
        }, w.triggerProps), w.hoverProps), {
            onClick: u => {
                a || u.stopPropagation()
            }
        }), t, w.layer)
    };

function ae(w) {
    var d = w,
        {
            disabled: e,
            onFetch: t,
            onOpen: r,
            content: a,
            className: n,
            layerOptions: o,
            hideOnScroll: l = !1
        } = d,
        i = y(d, ["disabled", "onFetch", "onOpen", "content", "className", "layerOptions", "hideOnScroll"]);
    const [u, f, m] = nt({
        delayEnter: ee,
        delayLeave: re,
        hideOnScroll: l
    }), g = L(!1);
    et(() => {
        u && (!g.current && t && (g.current = !0, t()), r == null || r())
    }, [u, t, r]);
    const [j, C] = x(!1), {
        triggerProps: U,
        layerProps: z,
        renderLayer: X,
        layerSide: ne
    } = st(c({
        isOpen: e ? !1 : u,
        auto: !0,
        containerOffset: 10,
        triggerOffset: 8,
        snap: !1,
        possiblePlacements: ["bottom-center", "top-center", "left-center", "right-center"],
        preferX: "left",
        preferY: "bottom"
    }, o));
    return {
        triggerProps: U,
        hoverProps: f,
        layer: (u || j) && !e && X(s(F, {
            appear: !0,
            show: u && !i.loading,
            beforeEnter: () => C(!0),
            afterLeave: () => C(!1),
            enter: "tw-transition-all tw-ease-smooth tw-duration-fast transform-gpu",
            enterFrom: "tw-opacity-0",
            enterTo: "tw-opacity-100",
            leave: "tw-transition-all tw-ease-smooth tw-duration-fast transform-gpu",
            leaveFrom: "tw-opacity-100",
            leaveTo: "tw-opacity-0"
        }, s("div", c(c({
            className: T(n, te.hoverCardBase)
        }, z), f), a)))
    }
}
export {
    N as B, pe as C, _e as H, be as T, Te as _, ye as a, mt as b, Ht as c, lt as d, ge as e, ct as f, me as g, ve as h, xe as i, ae as j, Lt as k, At as l, Nt as m, pt as u, he as w
};