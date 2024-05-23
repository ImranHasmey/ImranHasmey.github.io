var D = Object.defineProperty;
var x = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty,
    C = Object.prototype.propertyIsEnumerable;
var T = (e, t, n) => t in e ? D(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    u = (e, t) => {
        for (var n in t || (t = {})) w.call(t, n) && T(e, n, t[n]);
        if (x)
            for (var n of x(t)) C.call(t, n) && T(e, n, t[n]);
        return e
    };
var f = (e, t) => {
    var n = {};
    for (var s in e) w.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
    if (e != null && x)
        for (var s of x(e)) t.indexOf(s) < 0 && C.call(e, s) && (n[s] = e[s]);
    return n
};
import {
    y as c,
    o as y,
    h as $,
    eR as I
} from "./tracking-376cff7a.js";
import {
    p as B,
    T as N,
    c as _,
    q as z,
    U as R,
    b as k
} from "./FlexBox-1a755411.js";
import {
    d as X
} from "./debounce-f31b8252.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import "./Divider-0a4efe7e.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "58ee95a5-93cf-46da-b393-a88eee47d09b", e._sentryDebugIdIdentifier = "sentry-dbid-58ee95a5-93cf-46da-b393-a88eee47d09b")
    } catch (n) {}
})();
const E = "_tabs_i9xog_1",
    F = "_tab_i9xog_1",
    L = "_active_i9xog_26",
    U = "_tabText_i9xog_33",
    V = "_isActive_i9xog_44",
    W = "_nub_i9xog_49",
    j = "_segments_i9xog_56",
    q = "_segment_i9xog_56",
    O = "_segmentText_i9xog_66",
    G = "_segmentPill_i9xog_81",
    o = {
        tabs: E,
        tab: F,
        active: L,
        tabText: U,
        isActive: V,
        nub: W,
        segments: j,
        segment: q,
        segmentText: O,
        segmentPill: G
    };

function H(d) {
    var r = d,
        {
            value: e,
            currentValue: t,
            children: n,
            onClick: s
        } = r,
        b = f(r, ["value", "currentValue", "children", "onClick"]);
    const a = e === t;
    return c(R, u({
        className: _(o.tab, a && o.active, z({
            position: "relative"
        })),
        resetCss: !0,
        onClick: () => s(e)
    }, b), c(N.B3, {
        font: "text",
        weight: a ? "semibold" : "medium",
        className: _(o.tabText, a && o.isActive)
    }, n))
}
const J = B({
    display: "flex",
    className: o.tabs,
    height: 40
});

function se(b) {
    var d = b,
        {
            tabs: e,
            value: t,
            onChange: n
        } = d,
        s = f(d, ["tabs", "value", "onChange"]);
    const r = y(null),
        [a, m] = $(0);
    I(() => {
        const {
            current: i
        } = r;
        if (i) {
            const g = () => {
                m(i.offsetWidth / e.length)
            };
            g();
            const p = new ResizeObserver(X(g, 200));
            return p.observe(i), () => {
                p.disconnect()
            }
        }
    }, [e.length]);
    const l = e.findIndex(i => i.value === t);
    return c(J, u({
        position: "relative",
        ref: r
    }, s), e.map(i => c(H, u({
        key: i.value,
        currentValue: t,
        onClick: n
    }, i))), c(k, {
        position: "absolute",
        className: o.nub,
        style: {
            width: a,
            transform: `translateX(${l*a}px)`
        }
    }))
}

function K(r) {
    var a = r,
        {
            index: e,
            value: t,
            currentValue: n,
            children: s,
            onClick: b
        } = a,
        d = f(a, ["index", "value", "currentValue", "children", "onClick"]);
    const m = t === n;
    return c(R, u({
        className: _(o.segment, m && o.active),
        cursor: "pointer",
        border: "unset",
        paddingX: 12,
        sizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bg: "unset",
        height: 32,
        onClick: () => b(t)
    }, d), c(N.B3, {
        size: 14,
        weight: "semibold",
        className: _(o.segmentText, m && o.active)
    }, s))
}
const M = B({
    display: "flex",
    bg: "secondary",
    radius: "full",
    gap: 8,
    padding: 4,
    className: o.segments
});

function ie(b) {
    var d = b,
        {
            tabs: e,
            value: t,
            onChange: n
        } = d,
        s = f(d, ["tabs", "value", "onChange"]);
    const r = y(null),
        a = y(null),
        m = l => {
            const i = a.current,
                g = r.current;
            if (!g || !i) return;
            const v = g.getElementsByClassName(o.segment)[l];
            if (!v) return;
            const h = v.getBoundingClientRect(),
                A = g.getBoundingClientRect(),
                P = parseInt(window.getComputedStyle(g).paddingLeft),
                S = h.left - A.left - P;
            i.style.width = `${h.width}px`, i.style.transform = `translateX(${S}px)`
        };
    return I(() => {
        const l = e.findIndex(i => i.value === t);
        m(l)
    }, [e, t]), c(M, u({
        position: "relative",
        ref: r
    }, s), e.map((l, i) => c(K, u({
        key: l.value,
        index: i,
        currentValue: t,
        onClick: () => {
            n(l.value)
        }
    }, l))), c(k, {
        ref: a,
        position: "absolute",
        height: 32,
        className: o.segmentPill,
        radius: "full",
        bg: "primary",
        shadow: "sm"
    }))
}
export {
    ie as S, J as T, H as a, se as b
};