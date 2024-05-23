var Tt = Object.defineProperty,
    Pt = Object.defineProperties;
var Lt = Object.getOwnPropertyDescriptors;
var ne = Object.getOwnPropertySymbols;
var Ce = Object.prototype.hasOwnProperty,
    Ie = Object.prototype.propertyIsEnumerable;
var Oe = (e, t, n) => t in e ? Tt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Y = (e, t) => {
        for (var n in t || (t = {})) Ce.call(t, n) && Oe(e, n, t[n]);
        if (ne)
            for (var n of ne(t)) Ie.call(t, n) && Oe(e, n, t[n]);
        return e
    },
    re = (e, t) => Pt(e, Lt(t));
var S = (e, t) => {
    var n = {};
    for (var r in e) Ce.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ne)
        for (var r of ne(e)) t.indexOf(r) < 0 && Ie.call(e, r) && (n[r] = e[r]);
    return n
};
import {
    y as p,
    bn as St,
    bT as f,
    p as P,
    o as E,
    b3 as L,
    cy as j,
    cZ as _,
    h as fe,
    em as Dt,
    i as ue,
    eZ as he,
    e_ as Mt,
    aV as Ft,
    aD as He,
    by as xt
} from "./tracking-376cff7a.js";
import {
    S as Nt,
    c as be,
    o as kt
} from "./FlexBox-1a755411.js";
import {
    C as _t
} from "./CloseIcon-90eee5fe.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    c as Ve,
    u as At
} from "./useResponsive-08e338a7.js";
import {
    l as pe,
    s as Z,
    a as H,
    u as V,
    b as Se,
    o as b,
    U as M,
    C as F,
    t as De,
    y as N,
    p as Ot,
    f as je,
    T as Ct,
    c as We,
    O as Re,
    d as It,
    e as oe,
    q as we
} from "./transition-c6a4911b.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e7c6d32a-7cf2-459e-9971-388903a57045", e._sentryDebugIdIdentifier = "sentry-dbid-e7c6d32a-7cf2-459e-9971-388903a57045")
    } catch (n) {}
})();
const Ht = n => {
    var r = n,
        {
            color: e = St
        } = r,
        t = S(r, ["color"]);
    return p(Nt, re(Y({}, t), {
        name: "SubstackIconNoPadding",
        svgParams: {
            height: 24,
            width: 21,
            fill: e,
            stroke: "none"
        }
    }), p("path", {
        d: "M20.9991 5.40625H0V8.24275H20.9991V5.40625Z"
    }), p("path", {
        d: "M0 10.8125V24.0004L10.4991 18.1107L21 24.0004V10.8125H0Z"
    }), p("path", {
        d: "M20.9991 0H0V2.83603H20.9991V0Z"
    }))
};
var Be;
let W = (Be = f.useId) != null ? Be : function() {
    let e = pe(),
        [t, n] = f.useState(e ? () => Z.nextId() : null);
    return H(() => {
        t === null && n(Z.nextId())
    }, [t]), t != null ? "" + t : void 0
};

function Ye(e) {
    return Z.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}
let ye = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var O = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(O || {}),
    qe = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(qe || {}),
    Rt = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Rt || {});

function Bt(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(ye)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var Ge = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ge || {});

function Ut(e, t = 0) {
    var n;
    return e === ((n = Ye(e)) == null ? void 0 : n.body) ? !1 : V(t, {
        0() {
            return e.matches(ye)
        },
        1() {
            let r = e;
            for (; r !== null;) {
                if (r.matches(ye)) return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}
var Vt = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Vt || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function I(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let jt = ["textarea", "input"].join(",");

function Wt(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, jt)) != null ? n : !1
}

function Yt(e, t = n => n) {
    return e.slice().sort((n, r) => {
        let o = t(n),
            a = t(r);
        if (o === null || a === null) return 0;
        let l = o.compareDocumentPosition(a);
        return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function ie(e, t, {
    sorted: n = !0,
    relativeTo: r = null,
    skipElements: o = []
} = {}) {
    let a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
        l = Array.isArray(e) ? n ? Yt(e) : e : Bt(e);
    o.length > 0 && l.length > 1 && (l = l.filter(v => !o.includes(v))), r = r != null ? r : a.activeElement;
    let i = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        u = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, l.indexOf(r)) - 1;
            if (t & 4) return Math.max(0, l.indexOf(r)) + 1;
            if (t & 8) return l.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        d = t & 32 ? {
            preventScroll: !0
        } : {},
        c = 0,
        s = l.length,
        h;
    do {
        if (c >= s || c + s <= 0) return 0;
        let v = u + c;
        if (t & 16) v = (v + s) % s;
        else {
            if (v < 0) return 3;
            if (v >= s) return 1
        }
        h = l[v], h == null || h.focus(d), c += i
    } while (h !== a.activeElement);
    return t & 6 && Wt(h) && h.select(), 2
}

function Ke() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function qt() {
    return /Android/gi.test(window.navigator.userAgent)
}

function Gt() {
    return Ke() || qt()
}

function le(e, t, n) {
    let r = Se(t);
    P(() => {
        function o(a) {
            r.current(a)
        }
        return document.addEventListener(e, o, n), () => document.removeEventListener(e, o, n)
    }, [e, n])
}

function Ze(e, t, n) {
    let r = Se(t);
    P(() => {
        function o(a) {
            r.current(a)
        }
        return window.addEventListener(e, o, n), () => window.removeEventListener(e, o, n)
    }, [e, n])
}

function Kt(e, t, n = !0) {
    let r = E(!1);
    P(() => {
        requestAnimationFrame(() => {
            r.current = n
        })
    }, [n]);

    function o(l, i) {
        if (!r.current || l.defaultPrevented) return;
        let u = i(l);
        if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
        let d = function c(s) {
            return typeof s == "function" ? c(s()) : Array.isArray(s) || s instanceof Set ? s : [s]
        }(e);
        for (let c of d) {
            if (c === null) continue;
            let s = c instanceof HTMLElement ? c : c.current;
            if (s != null && s.contains(u) || l.composed && l.composedPath().includes(s)) return
        }
        return !Ut(u, Ge.Loose) && u.tabIndex !== -1 && l.preventDefault(), t(l, u)
    }
    let a = E(null);
    le("pointerdown", l => {
        var i, u;
        r.current && (a.current = ((u = (i = l.composedPath) == null ? void 0 : i.call(l)) == null ? void 0 : u[0]) || l.target)
    }, !0), le("mousedown", l => {
        var i, u;
        r.current && (a.current = ((u = (i = l.composedPath) == null ? void 0 : i.call(l)) == null ? void 0 : u[0]) || l.target)
    }, !0), le("click", l => {
        Gt() || a.current && (o(l, () => a.current), a.current = null)
    }, !0), le("touchend", l => o(l, () => l.target instanceof HTMLElement ? l.target : null), !0), Ze("blur", l => o(l, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function z(...e) {
    return L(() => Ye(...e), [...e])
}

function Me(e, t) {
    let n = E([]),
        r = b(e);
    P(() => {
        let o = [...n.current];
        for (let [a, l] of t.entries())
            if (n.current[a] !== l) {
                let i = r(t, o);
                return n.current = t, i
            }
    }, [r, ...t])
}
let Zt = "div";
var se = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(se || {});

function zt(e, t) {
    var n;
    let l = e,
        {
            features: r = 1
        } = l,
        o = S(l, ["features"]),
        a = {
            ref: t,
            "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0,
            style: Y({
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0"
            }, (r & 4) === 4 && (r & 2) !== 2 && {
                display: "none"
            })
        };
    return F({
        ourProps: a,
        theirProps: o,
        slot: {},
        defaultTag: Zt,
        name: "Hidden"
    })
}
let Ee = M(zt);

function Xt(e) {
    function t() {
        document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t))
    }
    typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", t), t())
}
let k = [];
Xt(() => {
    function e(t) {
        t.target instanceof HTMLElement && t.target !== document.body && k[0] !== t.target && (k.unshift(t.target), k = k.filter(n => n != null && n.isConnected), k.splice(10))
    }
    window.addEventListener("click", e, {
        capture: !0
    }), window.addEventListener("mousedown", e, {
        capture: !0
    }), window.addEventListener("focus", e, {
        capture: !0
    }), document.body.addEventListener("click", e, {
        capture: !0
    }), document.body.addEventListener("mousedown", e, {
        capture: !0
    }), document.body.addEventListener("focus", e, {
        capture: !0
    })
});

function Jt(e) {
    let t = e.parentElement,
        n = null;
    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
    let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return r && Qt(n) ? !1 : r
}

function Qt(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null;) {
        if (t instanceof HTMLLegendElement) return !1;
        t = t.previousElementSibling
    }
    return !0
}
var ze = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ze || {});

function Xe(e, t, n, r) {
    let o = Se(n);
    P(() => {
        e = e != null ? e : window;

        function a(l) {
            o.current(l)
        }
        return e.addEventListener(t, a, r), () => e.removeEventListener(t, a, r)
    }, [e, t, r])
}

function Je(e) {
    let t = b(e),
        n = E(!1);
    P(() => (n.current = !1, () => {
        n.current = !0, De(() => {
            n.current && t()
        })
    }), [t])
}
var K = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(K || {});

function en() {
    let e = E(0);
    return Ze("keydown", t => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
    }, !0), e
}

function Qe(e) {
    if (!e) return new Set;
    if (typeof e == "function") return new Set(e());
    let t = new Set;
    for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
    return t
}
let tn = "div";
var et = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(et || {});

function nn(e, t) {
    let n = E(null),
        r = N(n, t),
        R = e,
        {
            initialFocus: o,
            containers: a,
            features: l = 30
        } = R,
        i = S(R, ["initialFocus", "containers", "features"]);
    pe() || (l = 1);
    let u = z(n);
    ln({
        ownerDocument: u
    }, !!(l & 16));
    let d = an({
        ownerDocument: u,
        container: n,
        initialFocus: o
    }, !!(l & 2));
    un({
        ownerDocument: u,
        container: n,
        containers: a,
        previousActiveElement: d
    }, !!(l & 8));
    let c = en(),
        s = b(g => {
            let y = n.current;
            y && (D => D())(() => {
                V(c.current, {
                    [K.Forwards]: () => {
                        ie(y, O.First, {
                            skipElements: [g.relatedTarget]
                        })
                    },
                    [K.Backwards]: () => {
                        ie(y, O.Last, {
                            skipElements: [g.relatedTarget]
                        })
                    }
                })
            })
        }),
        h = Ot(),
        v = E(!1),
        $ = {
            ref: r,
            onKeyDown(g) {
                g.key == "Tab" && (v.current = !0, h.requestAnimationFrame(() => {
                    v.current = !1
                }))
            },
            onBlur(g) {
                let y = Qe(a);
                n.current instanceof HTMLElement && y.add(n.current);
                let D = g.relatedTarget;
                D instanceof HTMLElement && D.dataset.headlessuiFocusGuard !== "true" && (tt(y, D) || (v.current ? ie(n.current, V(c.current, {
                    [K.Forwards]: () => O.Next,
                    [K.Backwards]: () => O.Previous
                }) | O.WrapAround, {
                    relativeTo: g.target
                }) : g.target instanceof HTMLElement && I(g.target)))
            }
        };
    return f.createElement(f.Fragment, null, !!(l & 4) && f.createElement(Ee, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: s,
        features: se.Focusable
    }), F({
        ourProps: $,
        theirProps: i,
        defaultTag: tn,
        name: "FocusTrap"
    }), !!(l & 4) && f.createElement(Ee, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: s,
        features: se.Focusable
    }))
}
let rn = M(nn),
    q = Object.assign(rn, {
        features: et
    });

function on(e = !0) {
    let t = E(k.slice());
    return Me(([n], [r]) => {
        r === !0 && n === !1 && De(() => {
            t.current.splice(0)
        }), r === !1 && n === !0 && (t.current = k.slice())
    }, [e, k, t]), b(() => {
        var n;
        return (n = t.current.find(r => r != null && r.isConnected)) != null ? n : null
    })
}

function ln({
    ownerDocument: e
}, t) {
    let n = on(t);
    Me(() => {
        t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && I(n())
    }, [t]), Je(() => {
        t && I(n())
    })
}

function an({
    ownerDocument: e,
    container: t,
    initialFocus: n
}, r) {
    let o = E(null),
        a = je();
    return Me(() => {
        if (!r) return;
        let l = t.current;
        l && De(() => {
            if (!a.current) return;
            let i = e == null ? void 0 : e.activeElement;
            if (n != null && n.current) {
                if ((n == null ? void 0 : n.current) === i) {
                    o.current = i;
                    return
                }
            } else if (l.contains(i)) {
                o.current = i;
                return
            }
            n != null && n.current ? I(n.current) : ie(l, O.First) === qe.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.current = e == null ? void 0 : e.activeElement
        })
    }, [r]), o
}

function un({
    ownerDocument: e,
    container: t,
    containers: n,
    previousActiveElement: r
}, o) {
    let a = je();
    Xe(e == null ? void 0 : e.defaultView, "focus", l => {
        if (!o || !a.current) return;
        let i = Qe(n);
        t.current instanceof HTMLElement && i.add(t.current);
        let u = r.current;
        if (!u) return;
        let d = l.target;
        d && d instanceof HTMLElement ? tt(i, d) ? (r.current = d, I(d)) : (l.preventDefault(), l.stopPropagation(), I(u)) : I(r.current)
    }, !0)
}

function tt(e, t) {
    for (let n of e)
        if (n.contains(t)) return !0;
    return !1
}
let nt = j(!1);

function sn() {
    return _(nt)
}

function $e(e) {
    return f.createElement(nt.Provider, {
        value: e.force
    }, e.children)
}

function cn(e) {
    let t = sn(),
        n = _(rt),
        r = z(e),
        [o, a] = fe(() => {
            if (!t && n !== null || Z.isServer) return null;
            let l = r == null ? void 0 : r.getElementById("headlessui-portal-root");
            if (l) return l;
            if (r === null) return null;
            let i = r.createElement("div");
            return i.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(i)
        });
    return P(() => {
        o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o))
    }, [o, r]), P(() => {
        t || n !== null && a(n.current)
    }, [n, a, t]), o
}
let dn = ue;

function fn(e, t) {
    let n = e,
        r = E(null),
        o = N(Ct(c => {
            r.current = c
        }), t),
        a = z(r),
        l = cn(r),
        [i] = fe(() => {
            var c;
            return Z.isServer ? null : (c = a == null ? void 0 : a.createElement("div")) != null ? c : null
        }),
        u = _(Te),
        d = pe();
    return H(() => {
        !l || !i || l.contains(i) || (i.setAttribute("data-headlessui-portal", ""), l.appendChild(i))
    }, [l, i]), H(() => {
        if (i && u) return u.register(i)
    }, [u, i]), Je(() => {
        var c;
        !l || !i || (i instanceof Node && l.contains(i) && l.removeChild(i), l.childNodes.length <= 0 && ((c = l.parentElement) == null || c.removeChild(l)))
    }), d ? !l || !i ? null : Dt(F({
        ourProps: {
            ref: o
        },
        theirProps: n,
        defaultTag: dn,
        name: "Portal"
    }), i) : null
}
let pn = ue,
    rt = j(null);

function mn(e, t) {
    let a = e,
        {
            target: n
        } = a,
        r = S(a, ["target"]),
        o = {
            ref: N(t)
        };
    return f.createElement(rt.Provider, {
        value: n
    }, F({
        ourProps: o,
        theirProps: r,
        defaultTag: pn,
        name: "Popover.Group"
    }))
}
let Te = j(null);

function wn() {
    let e = _(Te),
        t = E([]),
        n = b(a => (t.current.push(a), e && e.register(a), () => r(a))),
        r = b(a => {
            let l = t.current.indexOf(a);
            l !== -1 && t.current.splice(l, 1), e && e.unregister(a)
        }),
        o = L(() => ({
            register: n,
            unregister: r,
            portals: t
        }), [n, r, t]);
    return [t, L(() => function({
        children: a
    }) {
        return f.createElement(Te.Provider, {
            value: o
        }, a)
    }, [o])]
}
let vn = M(fn),
    gn = M(mn),
    Pe = Object.assign(vn, {
        Group: gn
    });

function hn(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const bn = typeof Object.is == "function" ? Object.is : hn,
    {
        useState: yn,
        useEffect: En,
        useLayoutEffect: $n,
        useDebugValue: Tn
    } = he;

function Pn(e, t, n) {
    const r = t(),
        [{
            inst: o
        }, a] = yn({
            inst: {
                value: r,
                getSnapshot: t
            }
        });
    return $n(() => {
        o.value = r, o.getSnapshot = t, ve(o) && a({
            inst: o
        })
    }, [e, r, t]), En(() => (ve(o) && a({
        inst: o
    }), e(() => {
        ve(o) && a({
            inst: o
        })
    })), [e]), Tn(r), r
}

function ve(e) {
    const t = e.getSnapshot,
        n = e.value;
    try {
        const r = t();
        return !bn(n, r)
    } catch (r) {
        return !0
    }
}

function Ln(e, t, n) {
    return t()
}
const Sn = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined",
    Dn = !Sn,
    Mn = Dn ? Ln : Pn,
    Fn = "useSyncExternalStore" in he ? (e => e.useSyncExternalStore)(he) : Mn;

function xn(e) {
    return Fn(e.subscribe, e.getSnapshot, e.getSnapshot)
}

function Nn(e, t) {
    let n = e(),
        r = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(o) {
            return r.add(o), () => r.delete(o)
        },
        dispatch(o, ...a) {
            let l = t[o].call(n, ...a);
            l && (n = l, r.forEach(i => i()))
        }
    }
}

function kn() {
    let e;
    return {
        before({
            doc: t
        }) {
            var n;
            let r = t.documentElement;
            e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth
        },
        after({
            doc: t,
            d: n
        }) {
            let r = t.documentElement,
                o = r.clientWidth - r.offsetWidth,
                a = e - o;
            n.style(r, "paddingRight", `${a}px`)
        }
    }
}

function _n() {
    return Ke() ? {
        before({
            doc: e,
            d: t,
            meta: n
        }) {
            function r(o) {
                return n.containers.flatMap(a => a()).some(a => a.contains(o))
            }
            t.microTask(() => {
                var o;
                if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
                    let i = We();
                    i.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => i.dispose()))
                }
                let a = (o = window.scrollY) != null ? o : window.pageYOffset,
                    l = null;
                t.addEventListener(e, "click", i => {
                    if (i.target instanceof HTMLElement) try {
                        let u = i.target.closest("a");
                        if (!u) return;
                        let {
                            hash: d
                        } = new URL(u.href), c = e.querySelector(d);
                        c && !r(c) && (l = c)
                    } catch (u) {}
                }, !0), t.addEventListener(e, "touchstart", i => {
                    if (i.target instanceof HTMLElement)
                        if (r(i.target)) {
                            let u = i.target;
                            for (; u.parentElement && r(u.parentElement);) u = u.parentElement;
                            t.style(u, "overscrollBehavior", "contain")
                        } else t.style(i.target, "touchAction", "none")
                }), t.addEventListener(e, "touchmove", i => {
                    if (i.target instanceof HTMLElement)
                        if (r(i.target)) {
                            let u = i.target;
                            for (; u.parentElement && u.dataset.headlessuiPortal !== "" && !(u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth);) u = u.parentElement;
                            u.dataset.headlessuiPortal === "" && i.preventDefault()
                        } else i.preventDefault()
                }, {
                    passive: !1
                }), t.add(() => {
                    var i;
                    let u = (i = window.scrollY) != null ? i : window.pageYOffset;
                    a !== u && window.scrollTo(0, a), l && l.isConnected && (l.scrollIntoView({
                        block: "nearest"
                    }), l = null)
                })
            })
        }
    } : {}
}

function An() {
    return {
        before({
            doc: e,
            d: t
        }) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}

function On(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t
}
let C = Nn(() => new Map, {
    PUSH(e, t) {
        var n;
        let r = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: We(),
            meta: new Set
        };
        return r.count++, r.meta.add(t), this.set(e, r), this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this
    },
    SCROLL_PREVENT({
        doc: e,
        d: t,
        meta: n
    }) {
        let r = {
                doc: e,
                d: t,
                meta: On(n)
            },
            o = [_n(), kn(), An()];
        o.forEach(({
            before: a
        }) => a == null ? void 0 : a(r)), o.forEach(({
            after: a
        }) => a == null ? void 0 : a(r))
    },
    SCROLL_ALLOW({
        d: e
    }) {
        e.dispose()
    },
    TEARDOWN({
        doc: e
    }) {
        this.delete(e)
    }
});
C.subscribe(() => {
    let e = C.getSnapshot(),
        t = new Map;
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden",
            o = n.count !== 0;
        (o && !r || !o && r) && C.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && C.dispatch("TEARDOWN", n)
    }
});

function Cn(e, t, n) {
    let r = xn(C),
        o = e ? r.get(e) : void 0,
        a = o ? o.count > 0 : !1;
    return H(() => {
        if (!(!e || !t)) return C.dispatch("PUSH", e, n), () => C.dispatch("POP", e, n)
    }, [t, e]), a
}
let ge = new Map,
    G = new Map;

function Ue(e, t = !0) {
    H(() => {
        var n;
        if (!t) return;
        let r = typeof e == "function" ? e() : e.current;
        if (!r) return;

        function o() {
            var l;
            if (!r) return;
            let i = (l = G.get(r)) != null ? l : 1;
            if (i === 1 ? G.delete(r) : G.set(r, i - 1), i !== 1) return;
            let u = ge.get(r);
            u && (u["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", u["aria-hidden"]), r.inert = u.inert, ge.delete(r))
        }
        let a = (n = G.get(r)) != null ? n : 0;
        return G.set(r, a + 1), a !== 0 || (ge.set(r, {
            "aria-hidden": r.getAttribute("aria-hidden"),
            inert: r.inert
        }), r.setAttribute("aria-hidden", "true"), r.inert = !0), o
    }, [e, t])
}

function In({
    defaultContainers: e = [],
    portals: t,
    mainTreeNodeRef: n
} = {}) {
    var r;
    let o = E((r = n == null ? void 0 : n.current) != null ? r : null),
        a = z(o),
        l = b(() => {
            var i, u, d;
            let c = [];
            for (let s of e) s !== null && (s instanceof HTMLElement ? c.push(s) : "current" in s && s.current instanceof HTMLElement && c.push(s.current));
            if (t != null && t.current)
                for (let s of t.current) c.push(s);
            for (let s of (i = a == null ? void 0 : a.querySelectorAll("html > *, body > *")) != null ? i : []) s !== document.body && s !== document.head && s instanceof HTMLElement && s.id !== "headlessui-portal-root" && (s.contains(o.current) || s.contains((d = (u = o.current) == null ? void 0 : u.getRootNode()) == null ? void 0 : d.host) || c.some(h => s.contains(h)) || c.push(s));
            return c
        });
    return {
        resolveContainers: l,
        contains: b(i => l().some(u => u.contains(i))),
        mainTreeNodeRef: o,
        MainTreeNode: L(() => function() {
            return n != null ? null : f.createElement(Ee, {
                features: se.Hidden,
                ref: o
            })
        }, [o, n])
    }
}
let Fe = j(() => {});
Fe.displayName = "StackContext";
var Le = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Le || {});

function Hn() {
    return _(Fe)
}

function Rn({
    children: e,
    onUpdate: t,
    type: n,
    element: r,
    enabled: o
}) {
    let a = Hn(),
        l = b((...i) => {
            t == null || t(...i), a(...i)
        });
    return H(() => {
        let i = o === void 0 || o === !0;
        return i && l(0, n, r), () => {
            i && l(1, n, r)
        }
    }, [l, n, r, o]), f.createElement(Fe.Provider, {
        value: l
    }, e)
}
let ot = j(null);

function lt() {
    let e = _(ot);
    if (e === null) {
        let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(t, lt), t
    }
    return e
}

function Bn() {
    let [e, t] = fe([]);
    return [e.length > 0 ? e.join(" ") : void 0, L(() => function(n) {
        let r = b(a => (t(l => [...l, a]), () => t(l => {
                let i = l.slice(),
                    u = i.indexOf(a);
                return u !== -1 && i.splice(u, 1), i
            }))),
            o = L(() => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props
            }), [r, n.slot, n.name, n.props]);
        return f.createElement(ot.Provider, {
            value: o
        }, n.children)
    }, [t])]
}
let Un = "p";

function Vn(e, t) {
    let n = W(),
        u = e,
        {
            id: r = `headlessui-description-${n}`
        } = u,
        o = S(u, ["id"]),
        a = lt(),
        l = N(t);
    H(() => a.register(r), [r, a.register]);
    let i = re(Y({
        ref: l
    }, a.props), {
        id: r
    });
    return F({
        ourProps: i,
        theirProps: o,
        slot: a.slot || {},
        defaultTag: Un,
        name: a.name || "Description"
    })
}
let jn = M(Vn),
    Wn = Object.assign(jn, {});
var Yn = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Yn || {}),
    qn = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(qn || {});
let Gn = {
        0(e, t) {
            return e.titleId === t.id ? e : re(Y({}, e), {
                titleId: t.id
            })
        }
    },
    ce = j(null);
ce.displayName = "DialogContext";

function X(e) {
    let t = _(ce);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, X), n
    }
    return t
}

function Kn(e, t, n = () => [document.body]) {
    Cn(e, t, r => {
        var o;
        return {
            containers: [...(o = r.containers) != null ? o : [], n]
        }
    })
}

function Zn(e, t) {
    return V(t.type, Gn, e, t)
}
let zn = "div",
    Xn = Re.RenderStrategy | Re.Static;

function Jn(e, t) {
    let n = W(),
        Ae = e,
        {
            id: r = `headlessui-dialog-${n}`,
            open: o,
            onClose: a,
            initialFocus: l,
            role: i = "dialog",
            __demoMode: u = !1
        } = Ae,
        d = S(Ae, ["id", "open", "onClose", "initialFocus", "role", "__demoMode"]),
        [c, s] = fe(0),
        h = E(!1);
    i = function() {
        return i === "dialog" || i === "alertdialog" ? i : (h.current || (h.current = !0, console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")
    }();
    let v = It();
    o === void 0 && v !== null && (o = (v & oe.Open) === oe.Open);
    let $ = E(null),
        R = N($, t),
        g = z($),
        y = e.hasOwnProperty("open") || v !== null,
        D = e.hasOwnProperty("onClose");
    if (!y && !D) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
    if (!y) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
    if (!D) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
    if (typeof o != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);
    if (typeof a != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);
    let m = o ? 0 : 1,
        [B, at] = Mt(Zn, {
            titleId: null,
            descriptionId: null,
            panelRef: Ft()
        }),
        U = b(() => a(!1)),
        xe = b(w => at({
            type: 0,
            id: w
        })),
        J = pe() ? u ? !1 : m === 0 : !1,
        Q = c > 1,
        Ne = _(ce) !== null,
        [it, ut] = wn(),
        st = {
            get current() {
                var w;
                return (w = B.panelRef.current) != null ? w : $.current
            }
        },
        {
            resolveContainers: me,
            mainTreeNodeRef: ee,
            MainTreeNode: ct
        } = In({
            portals: it,
            defaultContainers: [st]
        }),
        dt = Q ? "parent" : "leaf",
        ke = v !== null ? (v & oe.Closing) === oe.Closing : !1,
        ft = (() => Ne || ke ? !1 : J)(),
        pt = He(() => {
            var w, x;
            return (x = Array.from((w = g == null ? void 0 : g.querySelectorAll("body > *")) != null ? w : []).find(T => T.id === "headlessui-portal-root" ? !1 : T.contains(ee.current) && T instanceof HTMLElement)) != null ? x : null
        }, [ee]);
    Ue(pt, ft);
    let mt = (() => Q ? !0 : J)(),
        wt = He(() => {
            var w, x;
            return (x = Array.from((w = g == null ? void 0 : g.querySelectorAll("[data-headlessui-portal]")) != null ? w : []).find(T => T.contains(ee.current) && T instanceof HTMLElement)) != null ? x : null
        }, [ee]);
    Ue(wt, mt);
    let vt = (() => !(!J || Q))();
    Kt(me, U, vt);
    let gt = (() => !(Q || m !== 0))();
    Xe(g == null ? void 0 : g.defaultView, "keydown", w => {
        gt && (w.defaultPrevented || w.key === ze.Escape && (w.preventDefault(), w.stopPropagation(), U()))
    });
    let ht = (() => !(ke || m !== 0 || Ne))();
    Kn(g, ht, me), P(() => {
        if (m !== 0 || !$.current) return;
        let w = new ResizeObserver(x => {
            for (let T of x) {
                let te = T.target.getBoundingClientRect();
                te.x === 0 && te.y === 0 && te.width === 0 && te.height === 0 && U()
            }
        });
        return w.observe($.current), () => w.disconnect()
    }, [m, $, U]);
    let [bt, yt] = Bn(), Et = L(() => [{
        dialogState: m,
        close: U,
        setTitleId: xe
    }, B], [m, B, U, xe]), _e = L(() => ({
        open: m === 0
    }), [m]), $t = {
        ref: R,
        id: r,
        role: i,
        "aria-modal": m === 0 ? !0 : void 0,
        "aria-labelledby": B.titleId,
        "aria-describedby": bt
    };
    return f.createElement(Rn, {
        type: "Dialog",
        enabled: m === 0,
        element: $,
        onUpdate: b((w, x) => {
            x === "Dialog" && V(w, {
                [Le.Add]: () => s(T => T + 1),
                [Le.Remove]: () => s(T => T - 1)
            })
        })
    }, f.createElement($e, {
        force: !0
    }, f.createElement(Pe, null, f.createElement(ce.Provider, {
        value: Et
    }, f.createElement(Pe.Group, {
        target: $
    }, f.createElement($e, {
        force: !1
    }, f.createElement(yt, {
        slot: _e,
        name: "Dialog.Description"
    }, f.createElement(q, {
        initialFocus: l,
        containers: me,
        features: J ? V(dt, {
            parent: q.features.RestoreFocus,
            leaf: q.features.All & ~q.features.FocusLock
        }) : q.features.None
    }, f.createElement(ut, null, F({
        ourProps: $t,
        theirProps: d,
        slot: _e,
        defaultTag: zn,
        features: Xn,
        visible: m === 0,
        name: "Dialog"
    }))))))))), f.createElement(ct, null))
}
let Qn = "div";

function er(e, t) {
    let n = W(),
        c = e,
        {
            id: r = `headlessui-dialog-overlay-${n}`
        } = c,
        o = S(c, ["id"]),
        [{
            dialogState: a,
            close: l
        }] = X("Dialog.Overlay"),
        i = N(t),
        u = b(s => {
            if (s.target === s.currentTarget) {
                if (Jt(s.currentTarget)) return s.preventDefault();
                s.preventDefault(), s.stopPropagation(), l()
            }
        }),
        d = L(() => ({
            open: a === 0
        }), [a]);
    return F({
        ourProps: {
            ref: i,
            id: r,
            "aria-hidden": !0,
            onClick: u
        },
        theirProps: o,
        slot: d,
        defaultTag: Qn,
        name: "Dialog.Overlay"
    })
}
let tr = "div";

function nr(e, t) {
    let n = W(),
        d = e,
        {
            id: r = `headlessui-dialog-backdrop-${n}`
        } = d,
        o = S(d, ["id"]),
        [{
            dialogState: a
        }, l] = X("Dialog.Backdrop"),
        i = N(t);
    P(() => {
        if (l.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
    }, [l.panelRef]);
    let u = L(() => ({
        open: a === 0
    }), [a]);
    return f.createElement($e, {
        force: !0
    }, f.createElement(Pe, null, F({
        ourProps: {
            ref: i,
            id: r,
            "aria-hidden": !0
        },
        theirProps: o,
        slot: u,
        defaultTag: tr,
        name: "Dialog.Backdrop"
    })))
}
let rr = "div";

function or(e, t) {
    let n = W(),
        c = e,
        {
            id: r = `headlessui-dialog-panel-${n}`
        } = c,
        o = S(c, ["id"]),
        [{
            dialogState: a
        }, l] = X("Dialog.Panel"),
        i = N(t, l.panelRef),
        u = L(() => ({
            open: a === 0
        }), [a]),
        d = b(s => {
            s.stopPropagation()
        });
    return F({
        ourProps: {
            ref: i,
            id: r,
            onClick: d
        },
        theirProps: o,
        slot: u,
        defaultTag: rr,
        name: "Dialog.Panel"
    })
}
let lr = "h2";

function ar(e, t) {
    let n = W(),
        d = e,
        {
            id: r = `headlessui-dialog-title-${n}`
        } = d,
        o = S(d, ["id"]),
        [{
            dialogState: a,
            setTitleId: l
        }] = X("Dialog.Title"),
        i = N(t);
    P(() => (l(r), () => l(null)), [r, l]);
    let u = L(() => ({
        open: a === 0
    }), [a]);
    return F({
        ourProps: {
            ref: i,
            id: r
        },
        theirProps: o,
        slot: u,
        defaultTag: lr,
        name: "Dialog.Title"
    })
}
let ir = M(Jn),
    ur = M(nr),
    sr = M(or),
    cr = M(er),
    dr = M(ar),
    de = Object.assign(ir, {
        Backdrop: ur,
        Panel: sr,
        Overlay: cr,
        Title: dr,
        Description: Wn
    });
const _r = ({
        isModal: e = !0,
        onClose: t,
        includeClose: n = !1,
        bottomBorder: r,
        title: o,
        description: a,
        as: l = "h2",
        usePubThemeForTitle: i = !1,
        className: u,
        pagination: d,
        includeIcon: c = !0
    }) => p("div", {
        className: be("tw-grid tw-grid-cols-[auto_auto] tw-items-center tw-justify-between tw-pt-6", u, {
            "tw-px-4": !d,
            "tw-border-0 tw-border-b tw-border-solid tw-border-substack-detail tw-pb-6": r
        })
    }, c && !o && !d && p(Ht, {
        alt: "Substack icon",
        height: 24
    }), d && p("label", {
        className: "tw-text-[12px] tw-font-medium tw-leading-5",
        role: "label",
        title: "pagination"
    }, d[0], " OF ", d[1]), n && p("button", {
        className: "tw-col-start-2 tw-flex tw-cursor-pointer tw-border-none tw-bg-transparent",
        role: "button",
        title: "Close",
        onClick: t,
        "aria-label": "close"
    }, p(_t, null)), o && e && p(de.Title, {
        as: l,
        className: `tw-col-start-1 tw-row-start-1 tw-my-0 tw-font-title tw-text-h2 ${i?"tw-text-pub-primary-text":" tw-text-substack-primary"}`
    }, o), a && e && p(de.Description, {
        as: "span",
        className: "tw-col-start-1 tw-mt-2 tw-font-body tw-text-sm tw-text-substack-secondary"
    }, a), o && !e && p(fr, {
        className: "tw-col-start-1 tw-row-start-1"
    }, o) && p(l, {
        className: `tw-col-start-1 tw-row-start-1 tw-my-0 tw-font-title ${i?"tw-text-pub-primary-text":" tw-text-substack-primary"}`
    }, o), a && !e && p("span", {
        className: "tw-col-start-1 tw-mt-1 tw-font-body tw-text-sm tw-text-substack-secondary"
    }, a) && p("span", {
        className: "tw-mt-1 tw-col-start-1 tw-font-body tw-text-sm tw-text-substack-secondary"
    }, a)),
    fr = Ve("tw-my-0 tw-font-title", "h2");

function pr() {}
var mr = pr;
const wr = xt(mr),
    vr = "_renderOverReactLaagPortal_12l03_1",
    gr = "_container_12l03_5",
    hr = "_full_12l03_8",
    br = "_bottom_12l03_17",
    yr = "_hide_12l03_36",
    Er = "_fullscreenMobile_12l03_55",
    $r = "_fullscreenMobileHeight_12l03_69",
    Tr = "_maxFullscreenMobile_12l03_73",
    A = {
        renderOverReactLaagPortal: vr,
        container: gr,
        full: hr,
        bottom: br,
        hide: yr,
        default: "_default_12l03_42",
        fullscreenMobile: Er,
        fullscreenMobileHeight: $r,
        maxFullscreenMobile: Tr
    },
    Ar = Ve("sm:tw-max-h-[60vh] tw-overflow-auto tw-px-4 tw-py-5 tw-font-body"),
    Pr = ({
        children: e
    }) => p("div", {
        className: "tw-max-h-5/6 tw-flex tw-min-h-full tw-items-center tw-justify-center"
    }, e),
    Or = ({
        isOpen: e,
        onClose: t = () => {},
        children: n,
        includeBackdrop: r = !0,
        position: o = "default",
        opacity: a = "medium",
        radius: l = "lg",
        testId: i = "modal",
        className: u,
        onEscape: d,
        fullscreenMobile: c,
        maxFullscreenMobile: s,
        overflow: h,
        width: v = 440,
        disableCloseOnBackdropClick: $ = !1,
        initialFocus: R,
        renderOverReactLaagPortal: g = !1
    }) => {
        const y = At(),
            D = m => {
                const {
                    code: B
                } = m;
                d && B === "Escape" && d(m)
            };
        return Lr(e && y && c), p(we, {
            show: e,
            as: ue
        }, p(de, {
            onMouseDown: m => m.stopPropagation(),
            onMouseUp: m => m.stopPropagation(),
            onClick: m => m.stopPropagation(),
            "data-testid": i,
            as: "div",
            className: be(g && A.renderOverReactLaagPortal, "tw-fixed tw-inset-0 tw-z-30 tw-overflow-y-auto"),
            onClose: $ ? wr : t,
            onKeyDown: d ? D : void 0,
            initialFocus: R
        }, p(Pr, null, r && p(we.Child, {
            enter: "tw-transition tw-ease-smooth tw-duration-fast",
            enterFrom: "tw-opacity-0",
            enterTo: "tw-opacity-100",
            leave: "tw-transition tw-ease-smooth tw-duration-fast",
            leaveFrom: "tw-opacity-100",
            leaveTo: "tw-opacity-0"
        }, p("div", {
            className: a === "dark" ? "tw-fixed tw-inset-0 tw-bg-black tw-opacity-80" : "tw-fixed tw-inset-0 tw-bg-black tw-opacity-50",
            "aria-hidden": !0
        })), p(we.Child, {
            as: ue,
            enter: "tw-transition tw-ease-smooth tw-duration-fast",
            enterFrom: "tw-opacity-0 tw-translate-y-3",
            enterTo: "tw-opacity-100 tw-translate-y-0",
            leave: "tw-transition tw-ease-smooth tw-duration-fast",
            leaveFrom: "tw-opacity-100 tw-translate-y-0",
            leaveTo: "tw-opacity-0 tw-translate-y-3"
        }, p(de.Panel, {
            className: be(u, kt({
                display: "flex",
                radius: l
            }), A.container, A[o], c ? A.fullscreenMobile : A.dynamicMobile, y && c && A.fullscreenMobileHeight, y && s && A.maxFullscreenMobile),
            style: {
                width: y || o === "full" ? void 0 : v,
                overflow: h
            }
        }, n)))))
    },
    ae = {
        current: 0
    };

function Lr(e) {
    P(() => {
        if (e) {
            if (ae.current++, ae.current === 1) {
                const t = document.getElementById("entry");
                t && (t.style.visibility = "hidden")
            }
            return () => {
                if (ae.current === 1) {
                    ae.current--;
                    const t = document.getElementById("entry");
                    t && (t.style.visibility = "")
                }
            }
        }
    }, [e])
}
export {
    Wn as G, W as I, Or as M, Ht as S, de as _, _r as a, Ar as b, fr as c, Ye as d, z as e, Ee as f, Gt as g, Yt as h, Me as m, mr as n, ze as o, Jt as r, se as s, k as t, Bn as w, Kt as y
};