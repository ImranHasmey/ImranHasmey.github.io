var v = Object.defineProperty,
    D = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty,
    y = Object.prototype.propertyIsEnumerable;
var I = (e, t, s) => t in e ? v(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s,
    b = (e, t) => {
        for (var s in t || (t = {})) w.call(t, s) && I(e, s, t[s]);
        if (p)
            for (var s of p(t)) y.call(t, s) && I(e, s, t[s]);
        return e
    },
    _ = (e, t) => D(e, O(t));
var S = (e, t) => {
    var s = {};
    for (var n in e) w.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
    if (e != null && p)
        for (var n of p(e)) t.indexOf(n) < 0 && y.call(e, n) && (s[n] = e[n]);
    return s
};
import {
    y as a
} from "./tracking-376cff7a.js";
import {
    S as x,
    T as M,
    c as h,
    F as N,
    u as k,
    O as q
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    a as B,
    M as T
} from "./Menu-5342012d.js";
import {
    C as z
} from "./chevron-down-6d7770f2.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e6be7e58-2c98-44e3-9e8c-262ecb5d77b1", e._sentryDebugIdIdentifier = "sentry-dbid-e6be7e58-2c98-44e3-9e8c-262ecb5d77b1")
    } catch (s) {}
})();
const F = s => {
        var n = s,
            {
                fill: e = "#1C110B"
            } = n,
            t = S(n, ["fill"]);
        return a(x, _(b({}, t), {
            name: "CaretDownIcon",
            svgParams: {
                height: 6,
                width: 10,
                fill: e
            }
        }), a("path", {
            d: "M4.61589 5.53907L0.68341 0.820092C0.412024 0.494429 0.643602 0 1.06752 0H8.93248C9.3564 0 9.58798 0.494428 9.31659 0.820091L5.38411 5.53907C5.18421 5.77894 4.81579 5.77894 4.61589 5.53907Z"
        }), ");")
    },
    L = "_select_1cgq3_1",
    j = "_selectedOption_1cgq3_31",
    E = "_error_1cgq3_36",
    m = {
        select: L,
        selectedOption: j,
        error: E
    },
    G = ({
        children: e,
        className: t,
        name: s,
        value: n,
        onChange: f,
        disabled: l = !1,
        placeholder: u = "",
        error: r = !1
    }) => {
        var i;
        const c = e.find(o => o.props.value === n);
        return c || console.error("Select: value not found in children. value:", n, "options:", e.map(o => o.props.value)), a(N, {
            className: h(m.select, t, {
                [m.error]: r
            }),
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: 16,
            paddingBottom: 8,
            paddingTop: 8,
            gap: 8
        }, a(M, {
            className: h(m.selectedOption, {
                [m.disabled]: l
            }),
            font: "text",
            size: 14,
            color: r ? "error" : l || !n ? "secondary" : "primary"
        }, (i = c == null ? void 0 : c.props.children) != null ? i : u), a(F, null), a("select", {
            name: s,
            value: n,
            onChange: o => {
                var d;
                f(o.target.value, _(b({}, o.target), {
                    name: (d = o.target.name) != null ? d : ""
                }))
            },
            disabled: l
        }, e))
    };

function J({
    value: e,
    options: t,
    onChange: s,
    fill: n,
    disabled: f,
    className: l,
    buttonClassName: u,
    priority: r,
    placeholder: c
}) {
    var o, d, C;
    const {
        iString: i
    } = k();
    return a(T, {
        className: l,
        trigger: a(q, {
            priority: r != null ? r : "secondary",
            fill: n,
            disabled: f,
            rightIcon: a(z, {
                size: 20
            }),
            "data-testid": "stock-select",
            className: u
        }, (C = (d = (o = t.find(g => g.value === e)) == null ? void 0 : o.label) != null ? d : c) != null ? C : i("Select"))
    }, t.map(g => a(B, {
        onClick: () => s(g.value)
    }, g.label)))
}
export {
    F as C, J as S, G as a
};