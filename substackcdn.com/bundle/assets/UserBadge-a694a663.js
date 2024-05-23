var B = Object.defineProperty,
    P = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var b = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty,
    L = Object.prototype.propertyIsEnumerable;
var v = (n, e, t) => e in n ? B(n, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : n[e] = t,
    r = (n, e) => {
        for (var t in e || (e = {})) D.call(e, t) && v(n, t, e[t]);
        if (b)
            for (var t of b(e)) L.call(e, t) && v(n, t, e[t]);
        return n
    },
    a = (n, e) => P(n, w(e));
import {
    p as H,
    t as U,
    E as k,
    y as o
} from "./tracking-376cff7a.js";
import {
    c as F,
    a as I,
    T as S
} from "./FlexBox-1a755411.js";
import {
    a as R,
    u as W
} from "./react-laag.esm-f47be925.js";
import {
    U as A,
    g as E
} from "./profile-a781fd85.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    T as G
} from "./Tooltip-86d56346.js";
import "./user-e16f1619.js";
import "./transition-c6a4911b.js";
(function() {
    try {
        var n = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "791b1420-2ac9-4168-8e03-496d354c7f85", n._sentryDebugIdIdentifier = "sentry-dbid-791b1420-2ac9-4168-8e03-496d354c7f85")
    } catch (t) {}
})();
const V = "_inlineContainer_uxvmn_1",
    X = "_container_uxvmn_5",
    Y = "_popover_uxvmn_14",
    p = {
        inlineContainer: V,
        container: X,
        popover: Y
    },
    T = 100,
    Z = {
        sm: 16,
        md: 20,
        lg: 24
    },
    $ = {
        100: A,
        1e3: E,
        1e4: E
    },
    j = {
        1e4: {
            fill: "var(--color-accent-purple)"
        }
    },
    h = {
        100: "Hundreds",
        1e3: "Thousands",
        1e4: "Tens of thousands"
    },
    oe = ({
        className: n,
        isStatic: e = !1,
        inline: t = !1,
        size: C = "lg",
        tier: s,
        tooltipOnHover: i = !1,
        userId: f
    }) => {
        const [l, u] = R({
            delayEnter: T,
            delayLeave: T,
            hideOnScroll: !0
        }), m = l && !i, {
            triggerProps: N,
            layerProps: g,
            renderLayer: O
        } = W({
            isOpen: m,
            overflowContainer: !1,
            auto: !0,
            snap: !0,
            possiblePlacements: ["top-center", "bottom-center", "top-start", "bottom-start", "top-end", "bottom-end"],
            placement: "top-center",
            containerOffset: 10,
            triggerOffset: 8
        }), x = g.style;
        H(() => {
            l && U(k.BESTSELLER_INFO_SHOWN, {
                tier: s,
                form: i ? "tooltip" : "popover",
                hovered_user_id: f
            })
        }, [l, s, i, f]);
        const y = Z[C];
        if (!s) return null;
        const c = $[s.toString()],
            d = j[s.toString()];
        if (!c) return null;
        const _ = F(n, t ? p.inlineContainer : p.container);
        return e && s ? o("div", {
            className: _
        }, o(c, a(r({}, d), {
            height: y
        }))) : o("div", a(r(r({}, u), N), {
            className: _
        }), o(G, {
            text: `${h[s.toString()]} of paid subscribers`,
            dangerouslySetTooltipZIndex: 103,
            disabled: !i
        }, o(c, a(r({}, d), {
            height: y
        }))), m && O(o("div", a(r(r({}, g), u), {
            style: x,
            className: p.popover
        }), o(I, {
            alignItems: "center",
            gap: 16,
            padding: 16,
            paddingBottom: 32
        }, o(c, a(r({}, d), {
            height: 40
        })), o(I, {
            alignItems: "center",
            gap: 4
        }, o(S.H3, {
            translated: !0
        }, "Bestseller"), o(S.B4, {
            align: "center",
            translated: !0
        }, I18N.p(h[s.toString()]), " of paid subscribers"))))))
    };
export {
    oe as UserBadge
};