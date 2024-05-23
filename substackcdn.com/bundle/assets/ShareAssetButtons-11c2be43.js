var k = Object.defineProperty,
    b = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty,
    y = Object.prototype.propertyIsEnumerable;
var _ = (t, e, o) => e in t ? k(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : t[e] = o,
    l = (t, e) => {
        for (var o in e || (e = {})) g.call(e, o) && _(t, o, e[o]);
        if (u)
            for (var o of u(e)) y.call(e, o) && _(t, o, e[o]);
        return t
    },
    f = (t, e) => b(t, I(e));
var p = (t, e) => {
    var o = {};
    for (var s in t) g.call(t, s) && e.indexOf(s) < 0 && (o[s] = t[s]);
    if (t != null && u)
        for (var s of u(t)) e.indexOf(s) < 0 && y.call(t, s) && (o[s] = t[s]);
    return o
};
import {
    c as D
} from "./x-fc38e969.js";
import {
    cy as A,
    cZ as w,
    b3 as R,
    y as c,
    ao as v
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    S as B,
    c as d,
    U as z,
    O as C,
    u as q
} from "./FlexBox-1a755411.js";
import {
    C as O
} from "./HoverCard-cbdee1d2.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "13c78f19-736c-46d3-a91f-19b4722d7f5f", t._sentryDebugIdIdentifier = "sentry-dbid-13c78f19-736c-46d3-a91f-19b4722d7f5f")
    } catch (o) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J = D("ChevronUp", [
        ["path", {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }]
    ]),
    m = A({
        isSubstack: !1,
        customDomain: null
    });
m.displayName = "DomainInfoContext";

function K() {
    return w(m)
}

function Q({
    value: t,
    children: e
}) {
    const o = R(() => t, Object.values(t));
    return c(m.Provider, {
        value: o
    }, e)
}
const S = o => {
        var s = o,
            {
                color: t = "white"
            } = s,
            e = p(s, ["color"]);
        return c(B, f(l({}, e), {
            name: "PhoneOutline",
            svgParams: {
                height: 24,
                width: 24,
                stroke: t,
                fill: "none"
            }
        }), c("path", {
            d: "M16.7778 2.3877H8.22222C7.54721 2.3877 7 3.28313 7 4.3877V18.3877C7 19.4923 7.54721 20.3877 8.22222 20.3877H16.7778C17.4528 20.3877 18 19.4923 18 18.3877V4.3877C18 3.28313 17.4528 2.3877 16.7778 2.3877Z"
        }))
    },
    N = o => {
        var s = o,
            {
                color: t = "white"
            } = s,
            e = p(s, ["color"]);
        return c(B, f(l({}, e), {
            name: "RoundedSquareOutline",
            svgParams: {
                height: 24,
                width: 24,
                stroke: t,
                fill: "none"
            }
        }), c("path", {
            d: "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        }))
    },
    P = "_customizeAssetButton_shkc7_1",
    T = "_aspectTypeButton_shkc7_6",
    M = "_aspectRatioButton_shkc7_7",
    x = "_selected_shkc7_27",
    H = "_themeButton_shkc7_37",
    U = "_imageBg_shkc7_47",
    F = "_inner_shkc7_58",
    n = {
        customizeAssetButton: P,
        aspectTypeButton: T,
        aspectRatioButton: M,
        selected: x,
        themeButton: H,
        imageBg: U,
        inner: F
    },
    V = ["stories", "square"],
    X = ({
        isSelected: t,
        value: e,
        onClick: o,
        coverImageUrl: s,
        themeVariables: a
    }) => {
        let i = a.web_bg_color || a.cover_bg_color,
            r = a.print_on_web_bg_color || a.cover_print_primary || "#1a1a1a";
        return e === "accent" ? (i = a.background_pop_color || a.background_pop, r = a.print_on_pop) : e === "image" ? (r = "#ffffff", i = "rgba(0,0,0,0.5)") : e === "black&white" && (r = "#404040", i = "#ffffff"), c(z, {
            className: d(n.customizeAssetButton, n.themeButton, t && n.selected, e === "image" && n.image),
            onClick: h => {
                h.preventDefault(), o()
            },
            style: {
                backgroundColor: i
            }
        }, e === "image" && c("div", {
            className: n.imageBg,
            style: {
                backgroundImage: `url(${s})`
            }
        }), c("div", {
            className: d(n.inner, e === "image" && n.image)
        }, t && c(O, {
            stroke: r,
            size: 18
        })))
    };

function Z(t) {
    const {
        iString: e
    } = q(), o = v({
        checkFirst4: !0
    }), s = {
        square: e("Square"),
        stories: e("Vertical")
    };
    return (o ? {
        square: "1:1",
        stories: "9:16"
    } : s)[t]
}
const Y = ({
        isSelected: t,
        value: e,
        onClick: o
    }) => {
        const s = Z(e);
        return c(C, {
            rounded: !0,
            priority: "secondary",
            className: d(n.customizeAssetButton, n.aspectRatioButton, t && n.selected),
            onClick: a => {
                a.preventDefault(), o()
            },
            leftIcon: e === "square" ? c(N, null) : c(S, null)
        }, s)
    },
    tt = ({
        isSelected: t,
        value: e,
        label: o,
        onClick: s
    }) => c(C, {
        rounded: !0,
        priority: "secondary",
        className: d(n.customizeAssetButton, n.aspectTypeButton, t && n.selected),
        onClick: a => {
            a.preventDefault(), s()
        }
    }, o);
export {
    V as A, J as C, Q as D, m as a, X as b, Y as c, K as d, tt as e, Z as u
};