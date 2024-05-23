var y = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty,
    u = Object.prototype.propertyIsEnumerable;
var s = (e, t, n) => t in e ? y(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    d = (e, t) => {
        for (var n in t || (t = {})) c.call(t, n) && s(e, n, t[n]);
        if (a)
            for (var n of a(t)) u.call(t, n) && s(e, n, t[n]);
        return e
    };
var l = (e, t) => {
    var n = {};
    for (var r in e) c.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && a)
        for (var r of a(e)) t.indexOf(r) < 0 && u.call(e, r) && (n[r] = e[r]);
    return n
};
import {
    y as o
} from "./tracking-376cff7a.js";
import {
    a as i,
    T as g,
    f as b
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9f3017e6-5d6d-493c-b7bd-29dc7f4ab9fe", e._sentryDebugIdIdentifier = "sentry-dbid-9f3017e6-5d6d-493c-b7bd-29dc7f4ab9fe")
    } catch (n) {}
})();

function m(w) {
    var f = w,
        {
            title: e,
            body: t,
            children: n
        } = f,
        r = l(f, ["title", "body", "children"]);
    return o(i, d({
        flex: "grow",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    }, r), o(p, {
        title: e,
        body: t
    }, n))
}

function p({
    title: e,
    body: t,
    children: n
}) {
    return o(i, {
        gap: 12,
        alignItems: "center"
    }, o(i, {
        gap: 4,
        alignItems: "center"
    }, o(g.B3, {
        weight: "semibold",
        color: "primary",
        align: "center"
    }, e), o(g.B4, {
        color: "secondary",
        align: "center"
    }, t)), n)
}

function B({
    title: e,
    body: t,
    children: n
}) {
    return o(i, {
        justifyContent: "center",
        flex: "grow"
    }, o(m, {
        title: e,
        body: t,
        children: n
    }))
}

function D(e) {
    return o(b, d({
        priority: "secondary"
    }, e))
}
export {
    m as C, p as T, B as Z, D as a
};