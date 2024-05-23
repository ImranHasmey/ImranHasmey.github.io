var Ue = Object.defineProperty,
    _e = Object.defineProperties;
var Me = Object.getOwnPropertyDescriptors;
var W = Object.getOwnPropertySymbols;
var be = Object.prototype.hasOwnProperty,
    ye = Object.prototype.propertyIsEnumerable;
var ge = (e, t, r) => t in e ? Ue(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    N = (e, t) => {
        for (var r in t || (t = {})) be.call(t, r) && ge(e, r, t[r]);
        if (W)
            for (var r of W(t)) ye.call(t, r) && ge(e, r, t[r]);
        return e
    },
    I = (e, t) => _e(e, Me(t));
var k = (e, t) => {
    var r = {};
    for (var n in e) be.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && W)
        for (var n of W(e)) t.indexOf(n) < 0 && ye.call(e, n) && (r[n] = e[n]);
    return r
};
import {
    p as w,
    eR as Be,
    o as g,
    bT as y,
    h as H,
    eZ as Te,
    bH as Ve,
    i as q,
    eY as Ye,
    eW as We,
    y as Ze,
    cy as ce,
    cZ as Q,
    aD as Z,
    b3 as $e
} from "./tracking-376cff7a.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3db484c1-ebee-49df-a240-ef3a2ffc207b", e._sentryDebugIdIdentifier = "sentry-dbid-3db484c1-ebee-49df-a240-ef3a2ffc207b")
    } catch (r) {}
})();
var ze = Object.defineProperty,
    Ge = (e, t, r) => t in e ? ze(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    ae = (e, t, r) => (Ge(e, typeof t != "symbol" ? t + "" : t, r), r);
let Ke = class {
        constructor() {
            ae(this, "current", this.detect()), ae(this, "handoffState", "pending"), ae(this, "currentId", 0)
        }
        set(t) {
            this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return this.current === "server"
        }
        get isClient() {
            return this.current === "client"
        }
        detect() {
            return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client"
        }
        handoff() {
            this.handoffState === "pending" && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return this.handoffState === "complete"
        }
    },
    G = new Ke,
    U = (e, t) => {
        G.isServer ? w(e, t) : Be(e, t)
    };

function D(e) {
    let t = g(e);
    return U(() => {
        t.current = e
    }, [e]), t
}
let $ = function(e) {
    let t = D(e);
    return y.useCallback((...r) => t.current(...r), [t])
};

function Qe(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
        throw t
    }))
}

function _() {
    let e = [],
        t = {
            addEventListener(r, n, i, f) {
                return r.addEventListener(n, i, f), t.add(() => r.removeEventListener(n, i, f))
            },
            requestAnimationFrame(...r) {
                let n = requestAnimationFrame(...r);
                return t.add(() => cancelAnimationFrame(n))
            },
            nextFrame(...r) {
                return t.requestAnimationFrame(() => t.requestAnimationFrame(...r))
            },
            setTimeout(...r) {
                let n = setTimeout(...r);
                return t.add(() => clearTimeout(n))
            },
            microTask(...r) {
                let n = {
                    current: !0
                };
                return Qe(() => {
                    n.current && r[0]()
                }), t.add(() => {
                    n.current = !1
                })
            },
            style(r, n, i) {
                let f = r.style.getPropertyValue(n);
                return Object.assign(r.style, {
                    [n]: i
                }), this.add(() => {
                    Object.assign(r.style, {
                        [n]: f
                    })
                })
            },
            group(r) {
                let n = _();
                return r(n), this.add(() => n.dispose())
            },
            add(r) {
                return e.push(r), () => {
                    let n = e.indexOf(r);
                    if (n >= 0)
                        for (let i of e.splice(n, 1)) i()
                }
            },
            dispose() {
                for (let r of e.splice(0)) r()
            }
        };
    return t
}

function Fe() {
    let [e] = H(_);
    return w(() => () => e.dispose(), [e]), e
}

function Je() {
    let e = typeof document == "undefined";
    return "useSyncExternalStore" in Te ? (t => t.useSyncExternalStore)(Te)(() => () => {}, () => !1, () => !e) : !1
}

function Oe() {
    let e = Je(),
        [t, r] = H(G.isHandoffComplete);
    return t && G.isHandoffComplete === !1 && r(!1), w(() => {
        t !== !0 && r(!0)
    }, [t]), w(() => G.handoff(), []), e ? !1 : t
}

function T(e, t, ...r) {
    if (e in t) {
        let i = t[e];
        return typeof i == "function" ? i(...r) : i
    }
    let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, T), n
}
let Ne = Symbol();

function Tt(e, t = !0) {
    return Object.assign(e, {
        [Ne]: t
    })
}

function Se(...e) {
    let t = g(e);
    w(() => {
        t.current = e
    }, [e]);
    let r = $(n => {
        for (let i of t.current) i != null && (typeof i == "function" ? i(n) : i.current = n)
    });
    return e.every(n => n == null || (n == null ? void 0 : n[Ne])) ? void 0 : r
}

function K(...e) {
    return Array.from(new Set(e.flatMap(t => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
}
var je = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(je || {}),
    j = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(j || {});

function Ce({
    ourProps: e,
    theirProps: t,
    slot: r,
    defaultTag: n,
    features: i,
    visible: f = !0,
    name: p,
    mergeRefs: u
}) {
    u = u != null ? u : Xe;
    let a = Pe(t, e);
    if (f) return z(a, r, n, p, u);
    let s = i != null ? i : 0;
    if (s & 2) {
        let o = a,
            {
                static: v = !1
            } = o,
            c = k(o, ["static"]);
        if (v) return z(c, r, n, p, u)
    }
    if (s & 1) {
        let h = a,
            {
                unmount: v = !0
            } = h,
            c = k(h, ["unmount"]);
        return T(v ? 0 : 1, {
            0() {
                return null
            },
            1() {
                return z(I(N({}, c), {
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }), r, n, p, u)
            }
        })
    }
    return z(a, r, n, p, u)
}

function z(e, t = {}, r, n, i) {
    let v = le(e, ["unmount", "static"]),
        {
            as: f = r,
            children: p,
            refName: u = "ref"
        } = v,
        a = k(v, ["as", "children", "refName"]),
        s = e.ref !== void 0 ? {
            [u]: e.ref
        } : {},
        o = typeof p == "function" ? p(t) : p;
    "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t));
    let h = {};
    if (t) {
        let c = !1,
            d = [];
        for (let [m, l] of Object.entries(t)) typeof l == "boolean" && (c = !0), l === !0 && d.push(m);
        c && (h["data-headlessui-state"] = d.join(" "))
    }
    if (f === q && Object.keys(we(a)).length > 0) {
        if (!Ye(o) || Array.isArray(o) && o.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(a).map(l => `  - ${l}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(l => `  - ${l}`).join(`
`)].join(`
`));
        let c = o.props,
            d = typeof(c == null ? void 0 : c.className) == "function" ? (...l) => K(c == null ? void 0 : c.className(...l), a.className) : K(c == null ? void 0 : c.className, a.className),
            m = d ? {
                className: d
            } : {};
        return We(o, Object.assign({}, Pe(o.props, we(le(a, ["ref"]))), h, s, {
            ref: i(o.ref, s.ref)
        }, m))
    }
    return Ze(f, Object.assign({}, le(a, ["ref"]), f !== q && s, f !== q && h), o)
}

function Xe(...e) {
    return e.every(t => t == null) ? void 0 : t => {
        for (let r of e) r != null && (typeof r == "function" ? r(t) : r.current = t)
    }
}

function Pe(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        r = {};
    for (let n of e)
        for (let i in n) i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map(n => [n, void 0])));
    for (let n in r) Object.assign(t, {
        [n](i, ...f) {
            let p = r[n];
            for (let u of p) {
                if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented) return;
                u(i, ...f)
            }
        }
    });
    return t
}

function de(e) {
    var t;
    return Object.assign(Ve(e), {
        displayName: (t = e.displayName) != null ? t : e.name
    })
}

function we(e) {
    let t = Object.assign({}, e);
    for (let r in t) t[r] === void 0 && delete t[r];
    return t
}

function le(e, t = []) {
    let r = Object.assign({}, e);
    for (let n of t) n in r && delete r[n];
    return r
}
let fe = ce(null);
fe.displayName = "OpenClosedContext";
var E = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(E || {});

function Le() {
    return Q(fe)
}

function et({
    value: e,
    children: t
}) {
    return y.createElement(fe.Provider, {
        value: e
    }, t)
}

function pe() {
    let e = g(!1);
    return U(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function tt(e = 0) {
    let [t, r] = H(e), n = pe(), i = Z(a => {
        n.current && r(s => s | a)
    }, [t, n]), f = Z(a => !!(t & a), [t]), p = Z(a => {
        n.current && r(s => s & ~a)
    }, [r, n]), u = Z(a => {
        n.current && r(s => s ^ a)
    }, [r]);
    return {
        flags: t,
        addFlag: i,
        hasFlag: f,
        removeFlag: p,
        toggleFlag: u
    }
}

function rt(e) {
    let t = {
        called: !1
    };
    return (...r) => {
        if (!t.called) return t.called = !0, e(...r)
    }
}

function se(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function oe(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}

function nt(e, t) {
    let r = _();
    if (!e) return r.dispose;
    let {
        transitionDuration: n,
        transitionDelay: i
    } = getComputedStyle(e), [f, p] = [n, i].map(a => {
        let [s = 0] = a.split(",").filter(Boolean).map(o => o.includes("ms") ? parseFloat(o) : parseFloat(o) * 1e3).sort((o, h) => h - o);
        return s
    }), u = f + p;
    if (u !== 0) {
        r.group(s => {
            s.setTimeout(() => {
                t(), s.dispose()
            }, u), s.addEventListener(e, "transitionrun", o => {
                o.target === o.currentTarget && s.dispose()
            })
        });
        let a = r.addEventListener(e, "transitionend", s => {
            s.target === s.currentTarget && (t(), a())
        })
    } else t();
    return r.add(() => t()), r.dispose
}

function it(e, t, r, n) {
    let i = r ? "enter" : "leave",
        f = _(),
        p = n !== void 0 ? rt(n) : () => {};
    i === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
    let u = T(i, {
            enter: () => t.enter,
            leave: () => t.leave
        }),
        a = T(i, {
            enter: () => t.enterTo,
            leave: () => t.leaveTo
        }),
        s = T(i, {
            enter: () => t.enterFrom,
            leave: () => t.leaveFrom
        });
    return oe(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), se(e, ...t.base, ...u, ...s), f.nextFrame(() => {
        oe(e, ...t.base, ...u, ...s), se(e, ...t.base, ...u, ...a), nt(e, () => (oe(e, ...t.base, ...u), se(e, ...t.base, ...t.entered), p()))
    }), f.dispose
}

function at({
    immediate: e,
    container: t,
    direction: r,
    classes: n,
    onStart: i,
    onStop: f
}) {
    let p = pe(),
        u = Fe(),
        a = D(r);
    U(() => {
        e && (a.current = "enter")
    }, [e]), U(() => {
        let s = _();
        u.add(s.dispose);
        let o = t.current;
        if (o && a.current !== "idle" && p.current) return s.dispose(), i.current(a.current), s.add(it(o, n.current, a.current === "enter", () => {
            s.dispose(), f.current(a.current)
        })), s.dispose
    }, [r])
}

function S(e = "") {
    return e.split(/\s+/).filter(t => t.length > 1)
}
let J = ce(null);
J.displayName = "TransitionContext";
var lt = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(lt || {});

function st() {
    let e = Q(J);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}

function ot() {
    let e = Q(X);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
let X = ce(null);
X.displayName = "NestingContext";

function ee(e) {
    return "children" in e ? ee(e.children) : e.current.filter(({
        el: t
    }) => t.current !== null).filter(({
        state: t
    }) => t === "visible").length > 0
}

function xe(e, t) {
    let r = D(e),
        n = g([]),
        i = pe(),
        f = Fe(),
        p = $((c, d = j.Hidden) => {
            let m = n.current.findIndex(({
                el: l
            }) => l === c);
            m !== -1 && (T(d, {
                [j.Unmount]() {
                    n.current.splice(m, 1)
                },
                [j.Hidden]() {
                    n.current[m].state = "hidden"
                }
            }), f.microTask(() => {
                var l;
                !ee(n) && i.current && ((l = r.current) == null || l.call(r))
            }))
        }),
        u = $(c => {
            let d = n.current.find(({
                el: m
            }) => m === c);
            return d ? d.state !== "visible" && (d.state = "visible") : n.current.push({
                el: c,
                state: "visible"
            }), () => p(c, j.Unmount)
        }),
        a = g([]),
        s = g(Promise.resolve()),
        o = g({
            enter: [],
            leave: [],
            idle: []
        }),
        h = $((c, d, m) => {
            a.current.splice(0), t && (t.chains.current[d] = t.chains.current[d].filter(([l]) => l !== c)), t == null || t.chains.current[d].push([c, new Promise(l => {
                a.current.push(l)
            })]), t == null || t.chains.current[d].push([c, new Promise(l => {
                Promise.all(o.current[d].map(([L, x]) => x)).then(() => l())
            })]), d === "enter" ? s.current = s.current.then(() => t == null ? void 0 : t.wait.current).then(() => m(d)) : m(d)
        }),
        v = $((c, d, m) => {
            Promise.all(o.current[d].splice(0).map(([l, L]) => L)).then(() => {
                var l;
                (l = a.current.shift()) == null || l()
            }).then(() => m(d))
        });
    return $e(() => ({
        children: n,
        register: u,
        unregister: p,
        onStart: h,
        onStop: v,
        wait: s,
        chains: o
    }), [u, p, n, h, v, o, s])
}

function ut() {}
let ct = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

function Ee(e) {
    var t;
    let r = {};
    for (let n of ct) r[n] = (t = e[n]) != null ? t : ut;
    return r
}

function dt(e) {
    let t = g(Ee(e));
    return w(() => {
        t.current = Ee(e)
    }, [e]), t
}
let ft = "div",
    Re = je.RenderStrategy;

function pt(e, t) {
    var r, n;
    let ve = e,
        {
            beforeEnter: i,
            afterEnter: f,
            beforeLeave: p,
            afterLeave: u,
            enter: a,
            enterFrom: s,
            enterTo: o,
            entered: h,
            leave: v,
            leaveFrom: c,
            leaveTo: d
        } = ve,
        m = k(ve, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]),
        l = g(null),
        L = Se(l, t),
        x = (r = m.unmount) == null || r ? j.Unmount : j.Hidden,
        {
            show: F,
            appear: b,
            initial: C
        } = st(),
        [P, te] = H(F ? "visible" : "hidden"),
        me = ot(),
        {
            register: M,
            unregister: B
        } = me;
    w(() => M(l), [M, l]), w(() => {
        if (x === j.Hidden && l.current) {
            if (F && P !== "visible") {
                te("visible");
                return
            }
            return T(P, {
                hidden: () => B(l),
                visible: () => M(l)
            })
        }
    }, [P, l, M, B, F, x]);
    let re = D({
            base: S(m.className),
            enter: S(a),
            enterFrom: S(s),
            enterTo: S(o),
            entered: S(h),
            leave: S(v),
            leaveFrom: S(c),
            leaveTo: S(d)
        }),
        V = dt({
            beforeEnter: i,
            afterEnter: f,
            beforeLeave: p,
            afterLeave: u
        }),
        ne = Oe();
    w(() => {
        if (ne && P === "visible" && l.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
    }, [l, P, ne]);
    let De = C && !b,
        he = b && F && C,
        He = (() => !ne || De ? "idle" : F ? "enter" : "leave")(),
        A = tt(0),
        Ae = $(O => T(O, {
            enter: () => {
                A.addFlag(E.Opening), V.current.beforeEnter()
            },
            leave: () => {
                A.addFlag(E.Closing), V.current.beforeLeave()
            },
            idle: () => {}
        })),
        Ie = $(O => T(O, {
            enter: () => {
                A.removeFlag(E.Opening), V.current.afterEnter()
            },
            leave: () => {
                A.removeFlag(E.Closing), V.current.afterLeave()
            },
            idle: () => {}
        })),
        Y = xe(() => {
            te("hidden"), B(l)
        }, me),
        ie = g(!1);
    at({
        immediate: he,
        container: l,
        classes: re,
        direction: He,
        onStart: D(O => {
            ie.current = !0, Y.onStart(l, O, Ae)
        }),
        onStop: D(O => {
            ie.current = !1, Y.onStop(l, O, Ie), O === "leave" && !ee(Y) && (te("hidden"), B(l))
        })
    });
    let R = m,
        qe = {
            ref: L
        };
    return he ? R = I(N({}, R), {
        className: K(m.className, ...re.current.enter, ...re.current.enterFrom)
    }) : ie.current && (R.className = K(m.className, (n = l.current) == null ? void 0 : n.className), R.className === "" && delete R.className), y.createElement(X.Provider, {
        value: Y
    }, y.createElement(et, {
        value: T(P, {
            visible: E.Open,
            hidden: E.Closed
        }) | A.flags
    }, Ce({
        ourProps: qe,
        theirProps: R,
        defaultTag: ft,
        features: Re,
        visible: P === "visible",
        name: "Transition.Child"
    })))
}

function mt(e, t) {
    let F = e,
        {
            show: r,
            appear: n = !1,
            unmount: i = !0
        } = F,
        f = k(F, ["show", "appear", "unmount"]),
        p = g(null),
        u = Se(p, t);
    Oe();
    let a = Le();
    if (r === void 0 && a !== null && (r = (a & E.Open) === E.Open), ![!0, !1].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [s, o] = H(r ? "visible" : "hidden"), h = xe(() => {
        o("hidden")
    }), [v, c] = H(!0), d = g([r]);
    U(() => {
        v !== !1 && d.current[d.current.length - 1] !== r && (d.current.push(r), c(!1))
    }, [d, r]);
    let m = $e(() => ({
        show: r,
        appear: n,
        initial: v
    }), [r, n, v]);
    w(() => {
        if (r) o("visible");
        else if (!ee(h)) o("hidden");
        else {
            let b = p.current;
            if (!b) return;
            let C = b.getBoundingClientRect();
            C.x === 0 && C.y === 0 && C.width === 0 && C.height === 0 && o("hidden")
        }
    }, [r, h]);
    let l = {
            unmount: i
        },
        L = $(() => {
            var b;
            v && c(!1), (b = e.beforeEnter) == null || b.call(e)
        }),
        x = $(() => {
            var b;
            v && c(!1), (b = e.beforeLeave) == null || b.call(e)
        });
    return y.createElement(X.Provider, {
        value: h
    }, y.createElement(J.Provider, {
        value: m
    }, Ce({
        ourProps: I(N({}, l), {
            as: q,
            children: y.createElement(ke, I(N(N({
                ref: u
            }, l), f), {
                beforeEnter: L,
                beforeLeave: x
            }))
        }),
        theirProps: {},
        defaultTag: q,
        features: Re,
        visible: s === "visible",
        name: "Transition"
    })))
}

function ht(e, t) {
    let r = Q(J) !== null,
        n = Le() !== null;
    return y.createElement(y.Fragment, null, !r && n ? y.createElement(ue, N({
        ref: t
    }, e)) : y.createElement(ke, N({
        ref: t
    }, e)))
}
let ue = de(mt),
    ke = de(pt),
    vt = de(ht),
    wt = Object.assign(ue, {
        Child: vt,
        Root: ue
    });
export {
    Ce as C, je as O, Tt as T, de as U, U as a, D as b, _ as c, Le as d, E as e, pe as f, et as g, Oe as l, $ as o, Fe as p, wt as q, G as s, Qe as t, T as u, we as x, Se as y
};