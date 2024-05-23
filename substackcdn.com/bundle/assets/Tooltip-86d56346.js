var B = Object.defineProperty,
    X = Object.defineProperties;
var q = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty,
    k = Object.prototype.propertyIsEnumerable;
var _ = (t, e, a) => e in t ? B(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : t[e] = a,
    o = (t, e) => {
        for (var a in e || (e = {})) P.call(e, a) && _(t, a, e[a]);
        if (u)
            for (var a of u(e)) k.call(e, a) && _(t, a, e[a]);
        return t
    },
    f = (t, e) => X(t, q(e));
var b = (t, e) => {
    var a = {};
    for (var r in t) P.call(t, r) && e.indexOf(r) < 0 && (a[r] = t[r]);
    if (t != null && u)
        for (var r of u(t)) e.indexOf(r) < 0 && k.call(t, r) && (a[r] = t[r]);
    return a
};
import {
    h as z,
    y as s,
    i as g,
    bd as K
} from "./tracking-376cff7a.js";
import {
    F as M,
    T as v,
    b as I
} from "./FlexBox-1a755411.js";
import {
    a as R,
    u as W
} from "./react-laag.esm-f47be925.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    q as j
} from "./transition-c6a4911b.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "e509b818-4a4f-46b5-b859-11457b9b350d", t._sentryDebugIdIdentifier = "sentry-dbid-e509b818-4a4f-46b5-b859-11457b9b350d")
    } catch (a) {}
})();

function C({
    hoverOptions: t,
    layerOptions: e
} = {}) {
    var y;
    const [a, r] = z(!1), [n, c] = R(o({
        delayEnter: 1e3,
        delayLeave: 500
    }, t)), {
        triggerProps: p,
        layerProps: d,
        renderLayer: w
    } = W(o({
        isOpen: n,
        auto: !0,
        triggerOffset: 8
    }, e)), m = (y = e == null ? void 0 : e.placement) != null ? y : "top-center";
    let i = "",
        l = "";
    switch (m) {
        case "top-start":
        case "top-center":
        case "top-end":
            i = "tw-opacity-0 tw-translate-y-2", l = "tw-opacity-0 tw-translate-y-2";
            break;
        case "bottom-start":
        case "bottom-center":
        case "bottom-end":
            i = "tw-opacity-0 tw--translate-y-2", l = "tw-opacity-0 tw--translate-y-2";
            break;
        case "left-start":
        case "left-center":
        case "left-end":
            i = "tw-opacity-0 tw-translate-x-2", l = "tw-opacity-0 tw-translate-x-2";
            break;
        case "right-start":
        case "right-center":
        case "right-end":
            i = "tw-opacity-0 tw--translate-x-2", l = "tw-opacity-0 tw--translate-x-2";
            break;
        default:
            i = "tw-opacity-0 tw-translate-y-2", l = "tw-opacity-0 tw-translate-y-2"
    }
    return {
        layerProps: d,
        triggerProps: o(o({}, p), c),
        transitionProps: {
            show: n,
            beforeEnter: () => r(!0),
            afterLeave: () => r(!1),
            enterFrom: i,
            leaveTo: l
        },
        renderLayer: w,
        shouldShow: n || a
    }
}

function G(t) {
    return s(j, o({
        appear: !0,
        unmount: !1,
        className: "transform-gpu tw-transition-all tw-duration-fast tw-ease-smooth",
        enterFrom: "tw-opacity-0 tw--translate-x-2",
        enterTo: "tw-opacity-100 tw-translate-x-0 tw-translate-y-0",
        leaveFrom: "tw-opacity-100 tw-translate-x-0 tw-translate-y-0",
        leaveTo: "tw-opacity-0 tw--translate-x-2"
    }, t))
}
const H = "_tooltip_1kahx_1",
    Y = "_keys_1kahx_7",
    J = "_key_1kahx_7",
    h = {
        tooltip: H,
        keys: Y,
        key: J
    },
    Q = ["top-start", "top-center", "top-end", "bottom-start", "bottom-center", "bottom-end"],
    T = ["left-start", "left-center", "left-end", "right-start", "right-center", "right-end"],
    st = l => {
        var y = l,
            {
                children: t,
                text: e,
                as: a = "span",
                icon: r,
                hotkeys: n,
                preferPlacement: c = "top-center",
                layerOptions: p,
                disabled: d,
                dangerouslySetTooltipZIndex: w,
                hoverOptions: m = {}
            } = y,
            i = b(y, ["children", "text", "as", "icon", "hotkeys", "preferPlacement", "layerOptions", "disabled", "dangerouslySetTooltipZIndex", "hoverOptions"]);
        const {
            layerProps: E,
            triggerProps: F,
            transitionProps: L,
            renderLayer: N,
            shouldShow: D
        } = C({
            layerOptions: o({
                placement: c,
                possiblePlacements: T.includes(c) ? T : Q
            }, p),
            hoverOptions: m
        }), x = E, {
            style: S
        } = x, A = b(x, ["style"]);
        return d ? s(g, null, t) : s(g, null, s(a, o(o({}, F), i), t), D && N(s(U, {
            transitionProps: L,
            tooltipProps: f(o({}, A), {
                style: f(o({}, S), {
                    maxWidth: 350,
                    zIndex: w || Number.MAX_SAFE_INTEGER
                })
            }),
            icon: r,
            text: e,
            hotkeys: n
        })))
    };

function U({
    transitionProps: t,
    tooltipProps: e,
    icon: a,
    text: r,
    hotkeys: n
}) {
    const c = !!(n != null && n.length) && s(V, null, n.map((p, d) => s(Z, {
        key: d
    }, p)));
    return s("div", o({}, e), s(G, o({}, t), s(M, {
        alignItems: "center",
        paddingY: 8,
        paddingX: 12,
        gap: 8,
        radius: "md",
        shadow: "md",
        border: "detail",
        className: h.tooltip
    }, a && s(g, null, K(a, {
        size: 20
    }), " "), s(v.B4, {
        weight: "medium",
        color: "white"
    }, r), c)))
}

function V({
    children: t
}) {
    return s(I, {
        gap: 4,
        className: h.keys
    }, t)
}

function Z({
    children: t
}) {
    return s(I, {
        paddingX: 4,
        minWidth: 20,
        height: 20,
        radius: "xs",
        alignItems: "center",
        justifyContent: "center",
        className: h.key
    }, s(v.Meta, null, t))
}
export {
    st as T, G as a, U as b, C as u
};