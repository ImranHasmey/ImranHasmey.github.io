var ne = Object.defineProperty,
    se = Object.defineProperties;
var re = Object.getOwnPropertyDescriptors;
var D = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty,
    T = Object.prototype.propertyIsEnumerable;
var z = (e, t, n) => t in e ? ne(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    c = (e, t) => {
        for (var n in t || (t = {})) N.call(t, n) && z(e, n, t[n]);
        if (D)
            for (var n of D(t)) T.call(t, n) && z(e, n, t[n]);
        return e
    },
    w = (e, t) => se(e, re(t));
var m = (e, t) => {
    var n = {};
    for (var s in e) N.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
    if (e != null && D)
        for (var s of D(e)) t.indexOf(s) < 0 && T.call(e, s) && (n[s] = e[s]);
    return n
};
var k = (e, t, n) => new Promise((s, r) => {
    var i = l => {
            try {
                u(n.next(l))
            } catch (o) {
                r(o)
            }
        },
        d = l => {
            try {
                u(n.throw(l))
            } catch (o) {
                r(o)
            }
        },
        u = l => l.done ? s(l.value) : Promise.resolve(l.value).then(i, d);
    u((n = n.apply(e, t)).next())
});
import {
    bH as oe,
    y as I,
    a3 as P,
    by as X,
    fg as ie,
    h as U,
    p as Z,
    q as A,
    aD as le,
    e_ as ae,
    i as ue,
    gt as ce,
    D as $,
    cy as de,
    b3 as fe,
    cZ as O,
    X as ge
} from "./tracking-376cff7a.js";
import {
    c as Q,
    o as pe
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f6e2b8b8-9369-4a40-99ed-825bd5e9c66a", e._sentryDebugIdIdentifier = "sentry-dbid-f6e2b8b8-9369-4a40-99ed-825bd5e9c66a")
    } catch (n) {}
})();
const he = "modulepreload",
    we = function(e) {
        return "https://substackcdn.com/bundle/" + e
    },
    H = {},
    Fe = function(t, n, s) {
        if (!n || n.length === 0) return t();
        const r = document.getElementsByTagName("link");
        return Promise.all(n.map(i => {
            if (i = we(i), i in H) return;
            H[i] = !0;
            const d = i.endsWith(".css"),
                u = d ? '[rel="stylesheet"]' : "";
            if (!!s)
                for (let a = r.length - 1; a >= 0; a--) {
                    const f = r[a];
                    if (f.href === i && (!d || f.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${i}"]${u}`)) return;
            const o = document.createElement("link");
            if (o.rel = d ? "stylesheet" : he, d || (o.as = "script", o.crossOrigin = ""), o.href = i, document.head.appendChild(o), d) return new Promise((a, f) => {
                o.addEventListener("load", a), o.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${i}`)))
            })
        })).then(() => t()).catch(i => {
            const d = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (d.payload = i, window.dispatchEvent(d), !d.defaultPrevented) throw i
        })
    },
    Me = y => {
        var v = y,
            {
                children: e,
                className: t = void 0,
                disabled: n = void 0,
                loading: s = void 0,
                type: r = "button",
                href: i = void 0,
                localNavigation: d = !1,
                onClick: u = void 0,
                forwardedRef: l = void 0,
                newTab: o = void 0,
                style: a = void 0
            } = v,
            f = m(v, ["children", "className", "disabled", "loading", "type", "href", "localNavigation", "onClick", "forwardedRef", "newTab", "style"]);
        const g = b => {
            if (n || s) {
                b && b.preventDefault();
                return
            }
            u ? u(b) : i ? P(i, {
                event: b,
                local_navigation: d,
                newTab: o
            }) : r !== "submit" && console.log("No onClick set!")
        };
        return I("button", w(c({
            tabIndex: 0
        }, f), {
            type: r,
            className: Q("button", t, {
                disabled: n
            }),
            disabled: n || s,
            onClick: g,
            ref: l,
            style: a
        }), s ? "Please wait..." : e)
    },
    je = oe((d, i) => {
        var u = d,
            {
                onClick: e,
                href: t,
                localNavigation: n,
                newTab: s
            } = u,
            r = m(u, ["onClick", "href", "localNavigation", "newTab"]);
        const l = t ? o => {
            e && (e.call(o.target, o), o.defaultPrevented) || P(t, {
                event: o,
                local_navigation: n,
                newTab: s
            })
        } : e;
        return I("button", w(c({
            tabIndex: 0
        }, r), {
            ref: i,
            onClick: l
        }))
    });
var M = {
    exports: {}
};
const {
    AbortController: Y,
    AbortSignal: be
} = typeof self != "undefined" ? self : typeof window != "undefined" ? window : void 0;
M.exports = Y;
M.exports.AbortSignal = be;
M.exports.default = Y;
var ve = M.exports;
const B = X(ve);
var _e = ie,
    ye = 0;

function me(e) {
    var t = ++ye;
    return _e(e) + t
}
var Ie = me;
const Le = X(Ie),
    qe = {
        result: null,
        isLoading: !1,
        hasLoadedOnce: !1,
        error: null,
        promise: null,
        refetch: () => Promise.resolve(null),
        clearError: () => {},
        setResult: () => {}
    };

function W(e, t, {
    auto: n,
    initialResult: s
} = {}) {
    const [r, i] = U({
        result: s || null,
        isLoading: !!n,
        hasLoadedOnce: !1,
        error: null,
        promise: null
    }), d = () => {
        i(w(c({}, r), {
            error: null
        }))
    }, u = (f = {}) => {
        var y = f,
            {
                abortController: o = new B
            } = y,
            a = m(y, ["abortController"]);
        const v = e(w(c({}, a), {
            signal: o.signal
        })).then(g => {
            if (!o.signal.aborted) return i({
                isLoading: !1,
                hasLoadedOnce: !0,
                error: null,
                result: g,
                promise: null
            }), g
        }, g => {
            if (!o.signal.aborted) return console.error("There was an error fetching resource", g), i(b => w(c({}, b), {
                isLoading: !1,
                error: g,
                result: null,
                promise: null
            })), g
        });
        return i(g => w(c({}, g), {
            isLoading: !0,
            error: null,
            promise: v
        })), v
    }, l = o => {
        i(a => w(c({}, a), {
            error: null,
            result: o,
            isLoading: !1,
            promise: null
        }))
    };
    return Z(() => {
        if (n) {
            const o = new B;
            return u({
                abortController: o
            }), () => {
                o.abort()
            }
        }
    }, t || []), w(c({}, r), {
        refetch: u,
        setResult: l,
        clearError: d
    })
}

function Se(e, t) {
    switch (t.type) {
        case "page_reset":
            return [{
                isLoading: !0,
                error: null,
                result: null
            }];
        case "page_start":
            {
                const n = e.slice(),
                    {
                        page: s,
                        id: r
                    } = t.payload;
                return n[s] = {
                    result: null,
                    id: r,
                    isLoading: !0,
                    error: null
                },
                n
            }
        case "page_load":
            {
                const {
                    id: n,
                    result: s
                } = t.payload;
                return e.map(r => r.id === n ? w(c({}, r), {
                    isLoading: !1,
                    result: s,
                    error: null
                }) : r)
            }
        case "page_error":
            {
                const {
                    id: n,
                    error: s
                } = t.payload;
                return e.map(r => r.id === n ? w(c({}, r), {
                    isLoading: !1,
                    result: null,
                    error: s
                }) : r)
            }
    }
    return e
}

function Ee(e, t, {
    auto: n,
    initialResult: s,
    pages: r,
    dispatch: i
} = {}) {
    var b;
    const [d, u] = ae(Se, [{
        result: s || null,
        isLoading: !!n,
        error: null
    }]), l = r != null ? r : d, o = i != null ? i : u, a = (j = {}) => {
        var R = j,
            {
                abortController: h = new B,
                page: _ = l.length,
                options: S
            } = R,
            E = m(R, ["abortController", "page", "options"]);
        const p = l[_ - 1],
            L = Le();
        return o({
            type: "page_start",
            payload: {
                page: _,
                id: L
            }
        }), e({
            options: c(c({}, S), E),
            signal: h.signal,
            page: _,
            lastPage: p
        }).then(x => {
            if (!h.signal.aborted) return o({
                type: "page_load",
                payload: {
                    page: _,
                    id: L,
                    result: x
                }
            }), x
        }, x => {
            if (!h.signal.aborted) return o({
                type: "page_error",
                payload: {
                    page: _,
                    id: L,
                    error: x
                }
            }), x
        })
    }, f = h => (o({
        type: "page_reset"
    }), a(w(c({}, h), {
        page: 0
    })));
    Z(() => {
        if (n) {
            const h = new B;
            return f({
                abortController: h
            }), () => {
                h.abort()
            }
        }
    }, t || []);
    let y = !1;
    const v = () => k(this, null, function*() {
            if (!y) {
                const h = l[l.length - 1];
                if (!h.isLoading && !h.error) return y = !0, yield a()
            }
        }),
        g = l[l.length - 1];
    return {
        pages: l,
        page: l.length,
        lastPage: g,
        fetchMore: v,
        canFetchMore: g && !g.isLoading && !g.error,
        fetchFirstPage: f,
        hasLoadedOnce: !!((b = l[0]) != null && b.result)
    }
}
const q = new Map;

function Ae(d) {
    var u = d,
        {
            pathname: e,
            auto: t,
            initialResult: n,
            deps: s,
            cacheTtl: r
        } = u,
        i = m(u, ["pathname", "auto", "initialResult", "deps", "cacheTtl"]);
    const l = W(y => {
            var v = y,
                {
                    pathname: a
                } = v,
                f = m(v, ["pathname"]);
            if (!e) throw new Error("useFetch requires a pathname");
            if (r) {
                const b = q.get(e);
                if (b) {
                    const {
                        ts: h,
                        ttl: _,
                        promise: S
                    } = b;
                    if (h + _ > Date.now()) return S
                }
            }
            const g = A(a != null ? a : e, c(c({}, i), f));
            return r && q.set(e, {
                ts: Date.now(),
                ttl: r,
                promise: g
            }), g
        }, s || [], {
            auto: t,
            initialResult: n
        }),
        o = a => {
            e && r && q.set(e, {
                ts: Date.now(),
                ttl: r,
                promise: Promise.resolve(a)
            }), l.setResult(a)
        };
    return w(c({}, l), {
        setResult: o
    })
}

function Oe(l) {
    var o = l,
        {
            pathname: e,
            auto: t,
            initialResult: n,
            deps: s,
            getPageInit: r,
            pages: i,
            dispatch: d
        } = o,
        u = m(o, ["pathname", "auto", "initialResult", "deps", "getPageInit", "pages", "dispatch"]);
    return Ee(({
        page: a,
        lastPage: f,
        options: y
    }) => {
        if (!e) throw new Error("useFetch requires a pathname");
        const v = r({
            init: c(c({}, u), y),
            page: a,
            lastPage: f
        });
        return A(e, v)
    }, s || [], {
        auto: t,
        initialResult: n,
        pages: i,
        dispatch: d
    })
}

function ze(e, t, n) {
    const [s, r] = U(null);
    return le((...i) => {
        clearTimeout(s), r(null), r(setTimeout(() => e(...i), t))
    }, [s, ...n])
}

function Ne(e) {
    return I(xe, w(c({}, e), {
        key: e.module
    }))
}

function Re({
    module: e,
    onRequest: t,
    fetchImmediately: n = !0
}) {
    const s = F.has(e),
        r = W(() => Ce(e, t), [], {
            auto: n && !s,
            initialResult: s ? F.get(e) : null
        });
    return r.error && console.error(r.error), {
        error: r.error,
        isLoading: r.isLoading,
        result: r.result,
        fetch: r.refetch
    }
}

function xe(d) {
    var u = d,
        {
            onRequest: e,
            resolve: t,
            module: n,
            whileLoading: s,
            ifError: r
        } = u,
        i = m(u, ["onRequest", "resolve", "module", "whileLoading", "ifError"]);
    var f;
    const {
        error: l,
        isLoading: o,
        result: a
    } = Re({
        module: n,
        onRequest: e
    });
    return I(ue, null, l ? (f = r != null ? r : s) != null ? f : "Error" : o || !a ? s != null ? s : null : I(t(a), i))
}
const F = new Map;

function Ce(e, t) {
    return k(this, null, function*() {
        let n = F.get(e);
        return n || (n = yield t(), F.set(e, n)), n
    })
}
const De = "_img_16u6n_1",
    J = {
        img: De,
        "object-fit-cover": "_object-fit-cover_16u6n_5"
    };

function Te(v) {
    var g = v,
        {
            src: e,
            maxWidth: t,
            imageSizingCss: n,
            imageProps: s = {},
            alt: r = "",
            className: i,
            imageRef: d,
            ignorePicture: u,
            objectFit: l,
            radius: o,
            useRetinaSizing: a,
            imageIsFixedWidth: f
        } = g,
        y = m(g, ["src", "maxWidth", "imageSizingCss", "imageProps", "alt", "className", "imageRef", "ignorePicture", "objectFit", "radius", "useRetinaSizing", "imageIsFixedWidth"]);
    const b = a ? [t * 2, t * 3] : [],
        h = Math.max(...b, t);
    let _ = null;
    n ? _ = n : f ? _ = `${t}px` : _ = "100vw";
    const S = p => {
            if (s != null && s.height) {
                const L = t / s.height;
                return {
                    height: Math.floor(p / L),
                    aspect: null
                }
            }
            return {}
        },
        E = Array.from(new Set([...ce, t, ...b]));
    E.sort((p, L) => p - L);
    const j = E.map(p => ({
            width: p,
            src: $(e, p, c(c({}, s), S(p)))
        })).filter(p => p.width <= h),
        R = E.map(p => ({
            width: p,
            src: $(e, p, w(c(c({}, s), S(p)), {
                format: "webp"
            }))
        })).filter(p => p.width <= h);
    return I("picture", {
        style: u ? {
            display: "contents"
        } : void 0
    }, R.length > 1 ? I("source", {
        type: "image/webp",
        srcset: R.map(p => `${p.src} ${p.width}w`).join(", "),
        sizes: _
    }) : I("source", {
        type: "image/webp",
        srcset: $(e, t, w(c({}, s), {
            format: "webp"
        }))
    }), I("img", w(c({
        className: Q(J.img, i, l && J[`object-fit-${l}`], pe({
            radius: o
        })),
        src: $(e, t, s),
        sizes: _,
        alt: r,
        srcset: j.length > 1 ? j.map(p => `${p.src} ${p.width}w`).join(", ") : void 0
    }, y), {
        width: t,
        height: s == null ? void 0 : s.height,
        ref: d
    })))
}
var V;
const ee = typeof window != "undefined" ? (V = window._preloads) == null ? void 0 : V.user : null;
var G, K;
const te = (K = typeof window != "undefined" && ((G = window._preloads) == null ? void 0 : G.userSettings)) != null ? K : {},
    C = de({
        user: ee,
        setUser: () => {},
        userSettings: te,
        changeSetting: () => {}
    });
C.displayName = "UserContext";

function He({
    defaultValue: e,
    userSettings: t,
    children: n
}) {
    const [s, r] = U(e || ee), [i, d] = U(t != null ? t : te), u = (o, a, f) => k(this, null, function*() {
        if (!s) return;
        const y = i[o];
        d(w(c({}, i), {
            [o]: a
        }));
        const v = f === "bool" || !f && typeof a == "boolean" ? a : void 0,
            g = f === "datetime" || !f && typeof a == "string" ? a : void 0,
            b = f === "text" ? a : void 0;
        try {
            yield A("/api/v1/user-setting", {
                method: "PUT",
                json: {
                    type: o,
                    value_bool: v,
                    value_datetime: g,
                    value_text: b
                }
            })
        } catch (h) {
            if (h instanceof ge) alert(h.getMessage()), d(_ => w(c({}, _), {
                [o]: y
            }));
            else throw h
        }
    }), l = fe(() => ({
        user: s,
        setUser: r,
        userSettings: i,
        changeSetting: u
    }), [s, i]);
    return I(C.Provider, {
        value: l
    }, n)
}

function Je() {
    return O(C).user
}

function Ve() {
    return O(C).userSettings
}

function Ge() {
    return O(C)
}
export {
    Me as B, qe as D, Ne as L, Te as R, He as U, Fe as _, Je as a, Re as b, ze as c, Oe as d, W as e, Ve as f, Ge as g, je as h, C as i, Le as j, Se as r, Ae as u
};