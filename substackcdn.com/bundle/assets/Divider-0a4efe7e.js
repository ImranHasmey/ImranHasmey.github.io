var b = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty,
    f = Object.prototype.propertyIsEnumerable;
var n = (e, i, r) => i in e ? b(e, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[i] = r,
    s = (e, i) => {
        for (var r in i || (i = {})) _.call(i, r) && n(e, r, i[r]);
        if (c)
            for (var r of c(i)) f.call(i, r) && n(e, r, i[r]);
        return e
    };
var l = (e, i) => {
    var r = {};
    for (var t in e) _.call(e, t) && i.indexOf(t) < 0 && (r[t] = e[t]);
    if (e != null && c)
        for (var t of c(e)) i.indexOf(t) < 0 && f.call(e, t) && (r[t] = e[t]);
    return r
};
import {
    y as o
} from "./tracking-376cff7a.js";
import {
    c as y,
    b as p,
    a as g
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            i = new Error().stack;
        i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "7182e839-cc7e-41f9-a283-7cfcd6a8cdf6", e._sentryDebugIdIdentifier = "sentry-dbid-7182e839-cc7e-41f9-a283-7cfcd6a8cdf6")
    } catch (r) {}
})();
const u = "_divider_b8qcg_1",
    v = "_vertical_b8qcg_10",
    m = "_priority_detail_b8qcg_22",
    a = {
        divider: u,
        vertical: v,
        "priority_detail-themed": "_priority_detail-themed_b8qcg_22",
        priority_detail: m
    },
    I = t => {
        var d = t,
            {
                className: e,
                priority: i = "detail"
            } = d,
            r = l(d, ["className", "priority"]);
        return o(p, s({
            className: y(a.divider, e, a[`priority_${i}`]),
            flex: "grow"
        }, r), o("hr", null))
    },
    q = t => {
        var d = t,
            {
                className: e,
                priority: i = "detail"
            } = d,
            r = l(d, ["className", "priority"]);
        return o(g, s({
            className: y(a.divider, a.vertical, e, a[`priority_${i}`]),
            flex: "grow",
            sizing: "border-box"
        }, r), o("hr", null))
    };
export {
    I as D, q as a
};