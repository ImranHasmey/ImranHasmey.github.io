var ee = Object.defineProperty,
    te = Object.defineProperties;
var ne = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty,
    A = Object.prototype.propertyIsEnumerable;
var I = (e, n, t) => n in e ? ee(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t,
    g = (e, n) => {
        for (var t in n || (n = {})) L.call(n, t) && I(e, t, n[t]);
        if (m)
            for (var t of m(n)) A.call(n, t) && I(e, t, n[t]);
        return e
    },
    O = (e, n) => te(e, ne(n));
var y = (e, n) => {
    var t = {};
    for (var r in e) L.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
    if (e != null && m)
        for (var r of m(e)) n.indexOf(r) < 0 && A.call(e, r) && (t[r] = e[r]);
    return t
};
import {
    h as k,
    o as T,
    cy as U,
    cZ as j,
    b3 as $,
    bT as f,
    p as re,
    i as oe,
    y as v
} from "./tracking-376cff7a.js";
import {
    c as F
} from "./FlexBox-1a755411.js";
import {
    P as le
} from "./preflight-1c24e477.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    o as h,
    a as C,
    U as B,
    y as q,
    C as E,
    p as ae,
    x as se
} from "./transition-c6a4911b.js";
import {
    I as H,
    G as ie,
    f as ue,
    s as ce,
    w as de,
    r as fe,
    o as _
} from "./Modal-ab851ad1.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d5947bed-295f-4eb9-9198-8e518113ffae", e._sentryDebugIdIdentifier = "sentry-dbid-d5947bed-295f-4eb9-9198-8e518113ffae")
    } catch (t) {}
})();

function pe(e, n, t) {
    let [r, o] = k(t), l = e !== void 0, a = T(l), i = T(!1), s = T(!1);
    return l && !a.current && !i.current ? (i.current = !0, a.current = l, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !l && a.current && !s.current && (s.current = !0, a.current = l, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [l ? e : r, h(c => (l || o(c), n == null ? void 0 : n(c)))]
}

function G(e) {
    var n;
    if (e.type) return e.type;
    let t = (n = e.as) != null ? n : "button";
    if (typeof t == "string" && t.toLowerCase() === "button") return "button"
}

function he(e, n) {
    let [t, r] = k(() => G(e));
    return C(() => {
        r(G(e))
    }, [e.type, e.as]), C(() => {
        t || n.current && n.current instanceof HTMLButtonElement && !n.current.hasAttribute("type") && r("button")
    }, [t, n]), t
}

function we(e = {}, n = null, t = []) {
    for (let [r, o] of Object.entries(e)) Y(t, K(n, r), o);
    return t
}

function K(e, n) {
    return e ? e + "[" + n + "]" : n
}

function Y(e, n, t) {
    if (Array.isArray(t))
        for (let [r, o] of t.entries()) Y(e, K(n, r.toString()), o);
    else t instanceof Date ? e.push([n, t.toISOString()]) : typeof t == "boolean" ? e.push([n, t ? "1" : "0"]) : typeof t == "string" ? e.push([n, t]) : typeof t == "number" ? e.push([n, `${t}`]) : t == null ? e.push([n, ""]) : we(t, n, e)
}

function be(e) {
    var n, t;
    let r = (n = e == null ? void 0 : e.form) != null ? n : e.closest("form");
    if (r) {
        for (let o of r.elements)
            if (o !== e && (o.tagName === "INPUT" && o.type === "submit" || o.tagName === "BUTTON" && o.type === "submit" || o.nodeName === "INPUT" && o.type === "image")) {
                o.click();
                return
            }(t = r.requestSubmit) == null || t.call(r)
    }
}
let Z = U(null);

function M() {
    let e = j(Z);
    if (e === null) {
        let n = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(n, M), n
    }
    return e
}

function me() {
    let [e, n] = k([]);
    return [e.length > 0 ? e.join(" ") : void 0, $(() => function(t) {
        let r = h(l => (n(a => [...a, l]), () => n(a => {
                let i = a.slice(),
                    s = i.indexOf(l);
                return s !== -1 && i.splice(s, 1), i
            }))),
            o = $(() => ({
                register: r,
                slot: t.slot,
                name: t.name,
                props: t.props
            }), [r, t.slot, t.name, t.props]);
        return f.createElement(Z.Provider, {
            value: o
        }, t.children)
    }, [n])]
}
let ge = "label";

function ye(e, n) {
    let t = H(),
        c = e,
        {
            id: r = `headlessui-label-${t}`,
            passive: o = !1
        } = c,
        l = y(c, ["id", "passive"]),
        a = M(),
        i = q(n);
    C(() => a.register(r), [r, a.register]);
    let s = O(g({
        ref: i
    }, a.props), {
        id: r
    });
    return o && ("onClick" in s && (delete s.htmlFor, delete s.onClick), "onClick" in l && delete l.onClick), E({
        ourProps: s,
        theirProps: l,
        slot: a.slot || {},
        defaultTag: ge,
        name: a.name || "Label"
    })
}
let ve = B(ye),
    Te = Object.assign(ve, {}),
    D = U(null);
D.displayName = "GroupContext";
let $e = oe;

function ke(e) {
    var n;
    let [t, r] = k(null), [o, l] = me(), [a, i] = de(), s = $(() => ({
        switch: t,
        setSwitch: r,
        labelledby: o,
        describedby: a
    }), [t, r, o, a]), c = {}, S = e;
    return f.createElement(i, {
        name: "Switch.Description"
    }, f.createElement(l, {
        name: "Switch.Label",
        props: {
            htmlFor: (n = s.switch) == null ? void 0 : n.id,
            onClick(d) {
                t && (d.currentTarget.tagName === "LABEL" && d.preventDefault(), t.click(), t.focus({
                    preventScroll: !0
                }))
            }
        }
    }, f.createElement(D.Provider, {
        value: s
    }, E({
        ourProps: c,
        theirProps: S,
        defaultTag: $e,
        name: "Switch.Group"
    }))))
}
let Se = "button";

function Ce(e, n) {
    let t = H(),
        x = e,
        {
            id: r = `headlessui-switch-${t}`,
            checked: o,
            defaultChecked: l = !1,
            onChange: a,
            name: i,
            value: s,
            form: c
        } = x,
        S = y(x, ["id", "checked", "defaultChecked", "onChange", "name", "value", "form"]),
        d = j(D),
        w = T(null),
        z = q(w, n, d === null ? null : d.setSwitch),
        [p, b] = pe(o, a, l),
        P = h(() => b == null ? void 0 : b(!p)),
        J = h(u => {
            if (fe(u.currentTarget)) return u.preventDefault();
            u.preventDefault(), P()
        }),
        Q = h(u => {
            u.key === _.Space ? (u.preventDefault(), P()) : u.key === _.Enter && be(u.currentTarget)
        }),
        R = h(u => u.preventDefault()),
        V = $(() => ({
            checked: p
        }), [p]),
        W = {
            id: r,
            ref: z,
            role: "switch",
            type: he(e, w),
            tabIndex: 0,
            "aria-checked": p,
            "aria-labelledby": d == null ? void 0 : d.labelledby,
            "aria-describedby": d == null ? void 0 : d.describedby,
            onClick: J,
            onKeyUp: Q,
            onKeyPress: R
        },
        X = ae();
    return re(() => {
        var u;
        let N = (u = w.current) == null ? void 0 : u.closest("form");
        N && l !== void 0 && X.addEventListener(N, "reset", () => {
            b(l)
        })
    }, [w, b]), f.createElement(f.Fragment, null, i != null && p && f.createElement(ue, g({
        features: ce.Hidden
    }, se({
        as: "input",
        type: "checkbox",
        hidden: !0,
        readOnly: !0,
        form: c,
        checked: p,
        name: i,
        value: s
    }))), E({
        ourProps: W,
        theirProps: S,
        slot: V,
        defaultTag: Se,
        name: "Switch"
    }))
}
let Ee = B(Ce),
    De = ke,
    Pe = Object.assign(Ee, {
        Group: De,
        Label: Te,
        Description: ie
    });
const _e = i => {
    var s = i,
        {
            color: e = "default",
            accessibilityLabel: n = "Toggle setting",
            classNames: t,
            checked: r,
            small: o = !1,
            preflightClassName: l
        } = s,
        a = y(s, ["color", "accessibilityLabel", "classNames", "checked", "small", "preflightClassName"]);
    return v(le, {
        className: l,
        displayContents: !0
    }, v(Pe, g({
        className: F(r ? e === "default" ? "tw-bg-accent-green" : "tw-bg-pub-accent" : "tw-bg-substack-wash", o ? "tw-h4 tw-w-7" : "tw-h-6 tw-w-11", "tw-relative tw-inline-flex tw-flex-shrink-0 tw-cursor-pointer tw-rounded-full tw-border-2 tw-border-transparent tw-transition-colors tw-duration-200 tw-ease-smooth disabled:tw-bg-neutral-200", t),
        checked: r
    }, a), v("span", {
        className: "tw-sr-only"
    }, n), v("span", {
        "aria-hidden": "true",
        className: F(r ? `${o?"tw-translate-x-3":"tw-translate-x-5"}` : "tw-translate-x-0", o ? "tw-h-3 tw-w-3" : "tw-h-5 tw-w-5", "tw-pointer-events-none tw-inline-block tw-transform tw-rounded-full tw-bg-white tw-shadow tw-ring-0 tw-transition tw-duration-200 tw-ease-smooth")
    })))
};
export {
    _e as S, pe as T, he as a, we as e
};