var L = Object.defineProperty,
    P = Object.defineProperties;
var N = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty,
    y = Object.prototype.propertyIsEnumerable;
var g = (n, a, i) => a in n ? L(n, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : n[a] = i,
    s = (n, a) => {
        for (var i in a || (a = {})) p.call(a, i) && g(n, i, a[i]);
        if (f)
            for (var i of f(a)) y.call(a, i) && g(n, i, a[i]);
        return n
    },
    m = (n, a) => P(n, N(a));
var _ = (n, a) => {
    var i = {};
    for (var t in n) p.call(n, t) && a.indexOf(t) < 0 && (i[t] = n[t]);
    if (n != null && f)
        for (var t of f(n)) a.indexOf(t) < 0 && y.call(n, t) && (i[t] = n[t]);
    return i
};
import {
    y as r,
    b2 as x
} from "./tracking-376cff7a.js";
import {
    c as w,
    T as D
} from "./FlexBox-1a755411.js";
import {
    aw as T,
    d as U
} from "./ProfileHoverCard-c8bfb61a.js";
import {
    a as B
} from "./user-e16f1619.js";
import {
    L as E,
    i as H
} from "./isOnReader-b27f4ba9.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var n = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            a = new Error().stack;
        a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "8a44e4a6-c807-4993-8065-51051aef573a", n._sentryDebugIdIdentifier = "sentry-dbid-8a44e4a6-c807-4993-8065-51051aef573a")
    } catch (i) {}
})();
const O = "_link_1ixw5_1",
    I = {
        link: O
    };

function q(b) {
    var d = b,
        {
            user: n,
            utm_source: a,
            utm_content: i,
            ellipsis: t,
            useYou: c,
            onClick: l
        } = d,
        e = _(d, ["user", "utm_source", "utm_content", "ellipsis", "useYou", "onClick"]);
    const o = B(),
        k = (n == null ? void 0 : n.id) || (n == null ? void 0 : n.user_id) || 0,
        h = c && (o == null ? void 0 : o.id) === k ? "You" : n.name;
    return r(R, s({
        user: n,
        utm_source: a,
        utm_content: i,
        ellipsis: t,
        onClick: l
    }, e), h)
}

function R(b) {
    var d = b,
        {
            user: n,
            utm_source: a,
            utm_content: i,
            children: t,
            onClick: c,
            ellipsis: l
        } = d,
        e = _(d, ["user", "utm_source", "utm_content", "children", "onClick", "ellipsis"]);
    const o = m(s({}, n), {
        id: n.author_id || n.user_id || n.id,
        name: n.user_profile_name || n.author_name || n.name,
        handle: (n == null ? void 0 : n.handle) || (n == null ? void 0 : n.author_handle)
    });
    return r(U, {
        subject: o,
        dontStopPropagation: !0,
        utmSource: "feed",
        inline: !0
    }, r(S, s({
        href: x(n, {
            noBase: H,
            utm_content: i,
            utm_source: a
        }),
        onClick: c,
        showBack: !0,
        ellipsis: l,
        className: e.className,
        target: T() ? "_blank" : void 0
    }, e), t))
}

function S(b) {
    var d = b,
        {
            weight: n,
            color: a,
            decoration: i = "hover-underline",
            ellipsis: t,
            native: c,
            className: l
        } = d,
        e = _(d, ["weight", "color", "decoration", "ellipsis", "native", "className"]);
    const o = e.href,
        k = o == null ? void 0 : o.match(/^([a-z]+:)?\/\//),
        h = c != null ? c : k && !(o != null && o.startsWith(document.location.origin));
    return r(D, {
        as: "span",
        ellipsis: t,
        weight: n,
        color: a,
        decoration: i
    }, h ? r("a", m(s({}, e), {
        className: w(l, I.link)
    })) : r(E, m(s({}, e), {
        className: w(l, I.link)
    })))
}
export {
    R as P, S as T, q as a
};