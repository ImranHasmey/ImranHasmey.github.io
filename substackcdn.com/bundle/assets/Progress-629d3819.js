var w = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty,
    k = Object.prototype.propertyIsEnumerable;
var y = (e, t, s) => t in e ? w(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s,
    d = (e, t) => {
        for (var s in t || (t = {})) h.call(t, s) && y(e, s, t[s]);
        if (l)
            for (var s of l(t)) k.call(t, s) && y(e, s, t[s]);
        return e
    };
var g = (e, t) => {
    var s = {};
    for (var r in e) h.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
    if (e != null && l)
        for (var r of l(e)) t.indexOf(r) < 0 && k.call(e, r) && (s[r] = e[r]);
    return s
};
import {
    y as n
} from "./tracking-376cff7a.js";
import {
    c as m,
    b as _
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "03b0dff2-1d5a-45cd-9413-1ac1c325016e", e._sentryDebugIdIdentifier = "sentry-dbid-03b0dff2-1d5a-45cd-9413-1ac1c325016e")
    } catch (s) {}
})();
const x = "_spinner_753g7_1",
    N = "_radialProgress_753g7_2",
    I = "_media_753g7_13",
    P = "_thinker_753g7_19",
    S = "_bg_753g7_31",
    B = "_fg_753g7_32",
    D = "_spin_753g7_1",
    o = {
        spinner: x,
        radialProgress: N,
        media: I,
        thinker: P,
        bg: S,
        fg: B,
        spin: D
    },
    u = {
        20: 2.5,
        24: 2,
        32: 1.5,
        40: 1.25
    },
    R = f => {
        var a = f,
            {
                size: e = 24,
                media: t = !1,
                className: s
            } = a,
            r = g(a, ["size", "media", "className"]);
        const i = u[e] || 2;
        return n(_, d({
            padding: 16,
            className: m(o.spinner, {
                [o.media]: t
            }, s)
        }, r), n("svg", {
            width: e,
            height: e,
            viewBox: "0 0 24 24",
            "vector-effect": "non-scaling-stroke"
        }, n("circle", {
            className: o.bg,
            cx: 12,
            cy: 12,
            r: 11,
            strokeWidth: i,
            fill: "none",
            stroke: "var(--color-utility-detail)"
        }), n("circle", {
            className: o.fg,
            cx: 12,
            cy: 12,
            r: 11,
            strokeWidth: i,
            fill: "none"
        })))
    },
    W = f => {
        var a = f,
            {
                size: e = 24,
                media: t = !1,
                className: s
            } = a,
            r = g(a, ["size", "media", "className"]);
        const b = Array.from({
            length: 10
        }, (v, c) => `${c*36} 12 12`).join(";");
        return n(_, d({
            padding: 16,
            className: m(o.thinker, {
                [o.media]: t
            }, s)
        }, r), n("svg", {
            width: e,
            height: e,
            viewBox: "0 0 24 24"
        }, n("g", null, Array.from({
            length: 10
        }).map((v, c) => n("rect", {
            key: c,
            x: "11",
            y: "1",
            width: 2,
            height: 6,
            rx: "1",
            ry: "1",
            opacity: (c + 1) / 10,
            transform: `rotate(${c*36} 12 12)`
        })), n("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            calcMode: "discrete",
            dur: "0.5s",
            values: b,
            repeatCount: "indefinite"
        }))))
    },
    j = a => {
        var i = a,
            {
                size: e = 24,
                media: t = !1,
                className: s,
                percent: r
            } = i,
            f = g(i, ["size", "media", "className", "percent"]);
        const p = u[e] || 2;
        return n(_, d({
            padding: 16,
            className: m(o.radialProgress, {
                [o.media]: t
            }, s),
            style: {
                "--percent": `${r}`
            }
        }, f), n("svg", {
            width: e,
            height: e,
            viewBox: "0 0 24 24",
            "vector-effect": "non-scaling-stroke"
        }, n("circle", {
            className: o.bg,
            cx: 12,
            cy: 12,
            r: 11,
            strokeWidth: p,
            fill: "none",
            stroke: "var(--color-utility-detail)"
        }), n("circle", {
            className: o.fg,
            cx: 12,
            cy: 12,
            r: 11,
            strokeWidth: p,
            fill: "none"
        })))
    };
export {
    j as R, R as S, W as T
};