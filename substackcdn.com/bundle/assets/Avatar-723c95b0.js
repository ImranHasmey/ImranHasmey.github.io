var d = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty,
    b = Object.prototype.propertyIsEnumerable;
var p = (t, o) => {
    var e = {};
    for (var w in t) u.call(t, w) && o.indexOf(w) < 0 && (e[w] = t[w]);
    if (t != null && d)
        for (var w of d(t)) o.indexOf(w) < 0 && b.call(t, w) && (e[w] = t[w]);
    return e
};
import {
    y as r
} from "./tracking-376cff7a.js";
import {
    c as l
} from "./FlexBox-1a755411.js";
import {
    R as h
} from "./user-e16f1619.js";
import {
    P as y
} from "./preflight-1c24e477.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            o = new Error().stack;
        o && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[o] = "2012f87c-61ed-4579-ab1a-07062a016be4", t._sentryDebugIdIdentifier = "sentry-dbid-2012f87c-61ed-4579-ab1a-07062a016be4")
    } catch (e) {}
})();
const A = v => {
    var m = v,
        {
            size: t = 32,
            shape: o = "circle",
            badgePosition: e = "top-right",
            badge: w,
            imageUrl: s,
            onClick: n,
            className: f,
            border: a,
            borderThickness: c = "medium"
        } = m,
        g = p(m, ["size", "shape", "badgePosition", "badge", "imageUrl", "onClick", "className", "border", "borderThickness"]);
    const i = l("tw-inline-block", "tw-object-cover", o === "circle" ? "tw-rounded-full" : "tw-rounded", {
        "tw-h-6 tw-w-6": t === 24,
        "tw-h-8 tw-w-8": t === 32,
        "tw-h-9 tw-w-9": t === 36,
        "tw-h-10 tw-w-10": t === 40,
        "tw-h-12 tw-w-12": t === 48,
        "tw-h-[64px] tw-w-[64px]": t === 64,
        "tw-h-[88px] tw-w-[88px]": t === 88,
        "tw-border-substack-bg tw-shadow-md": a,
        "tw-border-4": a && c === "medium",
        "tw-border-2": a && c === "thin"
    }, n ? "tw-cursor-pointer hover:tw-opacity-90 active:tw-opacity-100" : null);
    return r(y, {
        className: f
    }, r("div", {
        onClick: n,
        className: l("tw-relative", "tw-inline-block")
    }, s ? r(h, {
        className: i,
        src: s,
        maxWidth: 88,
        loading: "lazy"
    }) : r("img", {
        className: i,
        src: void 0
    }), w != null ? r("span", {
        className: l("tw-absolute", {
            "tw-top-0 tw-right-0": e === "top-right",
            "tw-top-0 tw-left-0": e === "top-left",
            "tw-bottom-0 tw-right-0": e === "bottom-right",
            "tw-bottom-0 tw-left-0": e === "bottom-left"
        })
    }, w) : null))
};
export {
    A
};