var Zn = Object.defineProperty,
    Xn = Object.defineProperties;
var Gn = Object.getOwnPropertyDescriptors;
var ze = Object.getOwnPropertySymbols;
var Kt = Object.prototype.hasOwnProperty,
    Yt = Object.prototype.propertyIsEnumerable;
var qt = (e, t, n) => t in e ? Zn(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    f = (e, t) => {
        for (var n in t || (t = {})) Kt.call(t, n) && qt(e, n, t[n]);
        if (ze)
            for (var n of ze(t)) Yt.call(t, n) && qt(e, n, t[n]);
        return e
    },
    g = (e, t) => Xn(e, Gn(t));
var x = (e, t) => {
    var n = {};
    for (var o in e) Kt.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
    if (e != null && ze)
        for (var o of ze(e)) t.indexOf(o) < 0 && Yt.call(e, o) && (n[o] = e[o]);
    return n
};
var z = (e, t, n) => new Promise((o, s) => {
    var a = l => {
            try {
                c(n.next(l))
            } catch (u) {
                s(u)
            }
        },
        i = l => {
            try {
                c(n.throw(l))
            } catch (u) {
                s(u)
            }
        },
        c = l => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
    c((n = n.apply(e, t)).next())
});
import {
    y as r,
    cy as ce,
    bT as yt,
    cZ as j,
    b3 as Ve,
    o as H,
    p as St,
    eR as dt,
    aD as He,
    ih as Jn,
    q as ae,
    i as G,
    h as Ke,
    ar as an,
    ii as Qn,
    az as cn,
    ij as rt,
    bM as jn,
    bH as kt,
    r as eo,
    aj as ft,
    s as Ce,
    cK as to,
    ci as no,
    by as oo,
    a6 as Tt,
    t as ie,
    E as oe,
    x as ro,
    aY as xe,
    bD as Et,
    C as Zt,
    U as We,
    a7 as Xt,
    fw as so,
    ao as xt,
    ik as ao,
    aI as io,
    b2 as ln,
    cS as co,
    b6 as lo,
    fA as uo,
    aX as un,
    M as qe,
    a9 as fo,
    aL as _o
} from "./tracking-376cff7a.js";
import {
    x as po,
    u as re,
    U as ho,
    c as P,
    b as Ye,
    a as Y,
    T,
    B as mo,
    F as _t,
    p as dn,
    C as O,
    R as J,
    g as Re,
    O as Gt,
    f as we,
    i as go
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    c as bo,
    d as Co,
    e as wo,
    b as vo,
    P as Rt,
    A as fn,
    C as yo
} from "./_defineProperty-105d261c.js";
import {
    h as So,
    i as ko,
    _ as To,
    u as Pt,
    T as A,
    C as _n,
    H as Eo,
    j as pn
} from "./HoverCard-cbdee1d2.js";
import {
    a as xo,
    c as E,
    u as hn,
    r as Ro
} from "./useResponsive-08e338a7.js";
import {
    a as pt
} from "./Menu-5342012d.js";
import {
    R as Po,
    e as Io,
    _ as Mo,
    u as Ze,
    a as ee,
    D as Lo
} from "./user-e16f1619.js";
import {
    c as mn,
    X as Jt
} from "./x-fc38e969.js";
import {
    f as Bo,
    a as Oo,
    c as zo,
    b as Ao,
    u as No
} from "./profile-a781fd85.js";
import {
    D as ht
} from "./Divider-0a4efe7e.js";
import {
    UserBadge as Do
} from "./UserBadge-a694a663.js";
import {
    C as Uo,
    P as Ho,
    r as Fo
} from "./routeClick-cd1b3f9b.js";
import {
    C as $o
} from "./chevron-right-925bdc12.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1f3fcffd-63b0-4f87-a54d-5e6cd22c196f", e._sentryDebugIdIdentifier = "sentry-dbid-1f3fcffd-63b0-4f87-a54d-5e6cd22c196f")
    } catch (n) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = mn("Ban", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "m4.9 4.9 14.2 14.2",
        key: "1m5liu"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = mn("VolumeX", [
        ["polygon", {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
            key: "16drj5"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "9",
            y2: "15",
            key: "1ewh16"
        }],
        ["line", {
            x1: "16",
            x2: "22",
            y1: "9",
            y2: "15",
            key: "5ykzw1"
        }]
    ]),
    Vo = "_elevatedTheme_9hu6g_1",
    Wo = {
        elevatedTheme: Vo
    };

function qo({
    children: e
}) {
    return r(po, {
        theme: Wo.elevatedTheme
    }, e)
}
var gn = {
        exports: {}
    },
    bn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve = xo;

function Ko(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Yo = typeof Object.is == "function" ? Object.is : Ko,
    Zo = ve.useState,
    Xo = ve.useEffect,
    Go = ve.useLayoutEffect,
    Jo = ve.useDebugValue;

function Qo(e, t) {
    var n = t(),
        o = Zo({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        s = o[0].inst,
        a = o[1];
    return Go(function() {
        s.value = n, s.getSnapshot = t, it(s) && a({
            inst: s
        })
    }, [e, n, t]), Xo(function() {
        return it(s) && a({
            inst: s
        }), e(function() {
            it(s) && a({
                inst: s
            })
        })
    }, [e]), Jo(n), n
}

function it(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Yo(e, n)
    } catch (o) {
        return !0
    }
}

function jo(e, t) {
    return t()
}
var er = typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined" ? jo : Qo;
bn.useSyncExternalStore = ve.useSyncExternalStore !== void 0 ? ve.useSyncExternalStore : er;
gn.exports = bn;
var tr = gn.exports;
const ne = () => {},
    N = ne(),
    Fe = Object,
    C = e => e === N,
    K = e => typeof e == "function",
    Q = (e, t) => f(f({}, e), t),
    nr = e => K(e.then),
    Ae = new WeakMap;
let or = 0;
const Pe = e => {
        const t = typeof e,
            n = e && e.constructor,
            o = n == Date;
        let s, a;
        if (Fe(e) === e && !o && n != RegExp) {
            if (s = Ae.get(e), s) return s;
            if (s = ++or + "~", Ae.set(e, s), n == Array) {
                for (s = "@", a = 0; a < e.length; a++) s += Pe(e[a]) + ",";
                Ae.set(e, s)
            }
            if (n == Fe) {
                s = "#";
                const i = Fe.keys(e).sort();
                for (; !C(a = i.pop());) C(e[a]) || (s += a + ":" + Pe(e[a]) + ",");
                Ae.set(e, s)
            }
        } else s = o ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
        return s
    },
    q = new WeakMap,
    ct = {},
    Ne = {},
    It = "undefined",
    Xe = typeof window != It,
    mt = typeof document != It,
    rr = () => Xe && typeof window.requestAnimationFrame != It,
    Cn = (e, t) => {
        const n = q.get(e);
        return [() => !C(t) && e.get(t) || ct, o => {
            if (!C(t)) {
                const s = e.get(t);
                t in Ne || (Ne[t] = s), n[5](t, Q(s, o), s || ct)
            }
        }, n[6], () => !C(t) && t in Ne ? Ne[t] : !C(t) && e.get(t) || ct]
    };
let gt = !0;
const sr = () => gt,
    [bt, Ct] = Xe && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [ne, ne],
    ar = () => {
        const e = mt && document.visibilityState;
        return C(e) || e !== "hidden"
    },
    ir = e => (mt && document.addEventListener("visibilitychange", e), bt("focus", e), () => {
        mt && document.removeEventListener("visibilitychange", e), Ct("focus", e)
    }),
    cr = e => {
        const t = () => {
                gt = !0, e()
            },
            n = () => {
                gt = !1
            };
        return bt("online", t), bt("offline", n), () => {
            Ct("online", t), Ct("offline", n)
        }
    },
    lr = {
        isOnline: sr,
        isVisible: ar
    },
    ur = {
        initFocus: ir,
        initReconnect: cr
    },
    Qt = !yt.useId,
    Ie = !Xe || "Deno" in window,
    dr = e => rr() ? window.requestAnimationFrame(e) : setTimeout(e, 1),
    $e = Ie ? St : dt,
    lt = typeof navigator != "undefined" && navigator.connection,
    jt = !Ie && lt && (["slow-2g", "2g"].includes(lt.effectiveType) || lt.saveData),
    Ge = e => {
        if (K(e)) try {
            e = e()
        } catch (n) {
            e = ""
        }
        const t = e;
        return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? Pe(e) : "", [e, t]
    };
let fr = 0;
const wt = () => ++fr,
    wn = 0,
    vn = 1,
    yn = 2,
    _r = 3;
var ke = {
    __proto__: null,
    ERROR_REVALIDATE_EVENT: _r,
    FOCUS_EVENT: wn,
    MUTATE_EVENT: yn,
    RECONNECT_EVENT: vn
};

function Sn(...e) {
    return z(this, null, function*() {
        const [t, n, o, s] = e, a = Q({
            populateCache: !0,
            throwOnError: !0
        }, typeof s == "boolean" ? {
            revalidate: s
        } : s || {});
        let i = a.populateCache;
        const c = a.rollbackOnError;
        let l = a.optimisticData;
        const u = a.revalidate !== !1,
            d = m => typeof c == "function" ? c(m) : c !== !1,
            _ = a.throwOnError;
        if (K(n)) {
            const m = n,
                b = [],
                S = t.keys();
            for (const D of S) !/^\$(inf|sub)\$/.test(D) && m(t.get(D)._k) && b.push(D);
            return Promise.all(b.map(p))
        }
        return p(n);

        function p(m) {
            return z(this, null, function*() {
                const [b] = Ge(m);
                if (!b) return;
                const [S, D] = Cn(t, b), [h, le, ye, se] = q.get(t), te = h[b], ue = () => u && (delete ye[b], delete se[b], te && te[0]) ? te[0](yn).then(() => S().data) : S().data;
                if (e.length < 3) return ue();
                let R = o,
                    w;
                const de = wt();
                le[b] = [de, 0];
                const V = !C(l),
                    fe = S(),
                    Me = fe.data,
                    Le = fe._c,
                    $ = C(Le) ? Me : Le;
                if (V && (l = K(l) ? l($, Me) : l, D({
                        data: l,
                        _c: $
                    })), K(R)) try {
                    R = R($)
                } catch (_e) {
                    w = _e
                }
                if (R && nr(R))
                    if (R = yield R.catch(_e => {
                            w = _e
                        }), de !== le[b][0]) {
                        if (w) throw w;
                        return R
                    } else w && V && d(w) && (i = !0, R = $, D({
                        data: R,
                        _c: N
                    }));
                i && (w || (K(i) && (R = i(R, $)), D({
                    data: R,
                    error: N,
                    _c: N
                }))), le[b][1] = wt();
                const tt = yield ue();
                if (D({
                        _c: N
                    }), w) {
                    if (_) throw w;
                    return
                }
                return i ? tt : R
            })
        }
    })
}
const en = (e, t) => {
        for (const n in e) e[n][0] && e[n][0](t)
    },
    kn = (e, t) => {
        if (!q.has(e)) {
            const n = Q(ur, t),
                o = {},
                s = Sn.bind(N, e);
            let a = ne;
            const i = {},
                c = (d, _) => {
                    const p = i[d] || [];
                    return i[d] = p, p.push(_), () => p.splice(p.indexOf(_), 1)
                },
                l = (d, _, p) => {
                    e.set(d, _);
                    const m = i[d];
                    if (m)
                        for (const b of m) b(_, p)
                },
                u = () => {
                    if (!q.has(e) && (q.set(e, [o, {}, {}, {}, s, l, c]), !Ie)) {
                        const d = n.initFocus(setTimeout.bind(N, en.bind(N, o, wn))),
                            _ = n.initReconnect(setTimeout.bind(N, en.bind(N, o, vn)));
                        a = () => {
                            d && d(), _ && _(), q.delete(e)
                        }
                    }
                };
            return u(), [e, s, u, a]
        }
        return [e, q.get(e)[4]]
    },
    pr = (e, t, n, o, s) => {
        const a = n.errorRetryCount,
            i = s.retryCount,
            c = ~~((Math.random() + .5) * (1 << (i < 8 ? i : 8))) * n.errorRetryInterval;
        !C(a) && i > a || setTimeout(o, c, s)
    },
    hr = (e, t) => Pe(e) == Pe(t),
    [Je, mr] = kn(new Map),
    Tn = Q({
        onLoadingSlow: ne,
        onSuccess: ne,
        onError: ne,
        onErrorRetry: pr,
        onDiscarded: ne,
        revalidateOnFocus: !0,
        revalidateOnReconnect: !0,
        revalidateIfStale: !0,
        shouldRetryOnError: !0,
        errorRetryInterval: jt ? 1e4 : 5e3,
        focusThrottleInterval: 5 * 1e3,
        dedupingInterval: 2 * 1e3,
        loadingTimeout: jt ? 5e3 : 3e3,
        compare: hr,
        isPaused: () => !1,
        cache: Je,
        mutate: mr,
        fallback: {}
    }, lr),
    En = (e, t) => {
        const n = Q(e, t);
        if (t) {
            const {
                use: o,
                fallback: s
            } = e, {
                use: a,
                fallback: i
            } = t;
            o && a && (n.use = o.concat(a)), s && i && (n.fallback = Q(s, i))
        }
        return n
    },
    vt = ce({}),
    gr = e => {
        const {
            value: t
        } = e, n = j(vt), o = K(t), s = Ve(() => o ? t(n) : t, [o, n, t]), a = Ve(() => o ? s : En(n, s), [o, n, s]), i = s && s.provider, c = H(N);
        i && !c.current && (c.current = kn(i(a.cache || Je), s));
        const l = c.current;
        return l && (a.cache = l[0], a.mutate = l[1]), $e(() => {
            if (l) return l[2] && l[2](), l[3]
        }, []), r(vt.Provider, Q(e, {
            value: a
        }))
    },
    xn = Xe && window.__SWR_DEVTOOLS_USE__,
    br = xn ? window.__SWR_DEVTOOLS_USE__ : [],
    Cr = () => {
        xn && (window.__SWR_DEVTOOLS_REACT__ = yt)
    },
    wr = e => K(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}],
    Rn = () => Q(Tn, j(vt)),
    vr = (e, t) => {
        const [n, o] = Ge(e), [, , , s] = q.get(Je);
        if (s[n]) return s[n];
        const a = t(o);
        return s[n] = a, a
    },
    yr = e => (t, n, o) => e(t, n && ((...a) => {
        const [i] = Ge(t), [, , , c] = q.get(Je), l = c[i];
        return C(l) ? n(...a) : (delete c[i], l)
    }), o),
    Sr = br.concat(yr),
    kr = e => function(...n) {
        const o = Rn(),
            [s, a, i] = wr(n),
            c = En(o, i);
        let l = e;
        const {
            use: u
        } = c, d = (u || []).concat(Sr);
        for (let _ = d.length; _--;) l = d[_](l);
        return l(s, a || c.fetcher || null, c)
    },
    Tr = (e, t, n) => {
        const o = t[e] || (t[e] = []);
        return o.push(n), () => {
            const s = o.indexOf(n);
            s >= 0 && (o[s] = o[o.length - 1], o.pop())
        }
    };
Cr();
const tn = yt.use || (e => {
        if (e.status === "pending") throw e;
        if (e.status === "fulfilled") return e.value;
        throw e.status === "rejected" ? e.reason : (e.status = "pending", e.then(t => {
            e.status = "fulfilled", e.value = t
        }, t => {
            e.status = "rejected", e.reason = t
        }), e)
    }),
    ut = {
        dedupe: !0
    },
    Er = (e, t, n) => {
        const {
            cache: o,
            compare: s,
            suspense: a,
            fallbackData: i,
            revalidateOnMount: c,
            revalidateIfStale: l,
            refreshInterval: u,
            refreshWhenHidden: d,
            refreshWhenOffline: _,
            keepPreviousData: p
        } = n, [m, b, S, D] = q.get(o), [h, le] = Ge(e), ye = H(!1), se = H(!1), te = H(h), ue = H(t), R = H(n), w = () => R.current, de = () => w().isVisible() && w().isOnline(), [V, fe, Me, Le] = Cn(o, h), $ = H({}).current, tt = C(i) ? n.fallback[h] : i, _e = (v, y) => {
            for (const M in $) {
                const k = M;
                if (k === "data") {
                    if (!s(v[k], y[k]) && (!C(v[k]) || !s(Oe, y[k]))) return !1
                } else if (y[k] !== v[k]) return !1
            }
            return !0
        }, At = Ve(() => {
            const v = (() => !h || !t ? !1 : C(c) ? w().isPaused() || a ? !1 : C(l) ? !0 : l : c)(),
                y = B => {
                    const Z = Q(B);
                    return delete Z._k, v ? f({
                        isValidating: !0,
                        isLoading: !0
                    }, Z) : Z
                },
                M = V(),
                k = Le(),
                W = y(M),
                ge = M === k ? W : y(k);
            let I = W;
            return [() => {
                const B = y(V());
                return _e(B, I) ? (I.data = B.data, I.isLoading = B.isLoading, I.isValidating = B.isValidating, I.error = B.error, I) : (I = B, B)
            }, () => ge]
        }, [o, h]), pe = tr.useSyncExternalStore(He(v => Me(h, (y, M) => {
            _e(M, y) || v()
        }), [o, h]), At[0], At[1]), Nt = !ye.current, Wn = m[h] && m[h].length > 0, he = pe.data, me = C(he) ? tt : he, Be = pe.error, Dt = H(me), Oe = p ? C(he) ? Dt.current : he : me, Ut = (() => Wn && !C(Be) ? !1 : Nt && !C(c) ? c : w().isPaused() ? !1 : a ? C(me) ? !1 : l : C(me) || l)(), Ht = !!(h && t && Nt && Ut), qn = C(pe.isValidating) ? Ht : pe.isValidating, Kn = C(pe.isLoading) ? Ht : pe.isLoading, Se = He(v => z(void 0, null, function*() {
            const y = ue.current;
            if (!h || !y || se.current || w().isPaused()) return !1;
            let M, k, W = !0;
            const ge = v || {},
                I = !S[h] || !ge.dedupe,
                B = () => Qt ? !se.current && h === te.current && ye.current : h === te.current,
                Z = {
                    isValidating: !1,
                    isLoading: !1
                },
                $t = () => {
                    fe(Z)
                },
                Vt = () => {
                    const U = S[h];
                    U && U[1] === k && delete S[h]
                },
                Wt = {
                    isValidating: !0
                };
            C(V().data) && (Wt.isLoading = !0);
            try {
                if (I && (fe(Wt), n.loadingTimeout && C(V().data) && setTimeout(() => {
                        W && B() && w().onLoadingSlow(h, n)
                    }, n.loadingTimeout), S[h] = [y(le), wt()]), [M, k] = S[h], M = yield M, I && setTimeout(Vt, n.dedupingInterval), !S[h] || S[h][1] !== k) return I && B() && w().onDiscarded(h), !1;
                Z.error = N;
                const U = b[h];
                if (!C(U) && (k <= U[0] || k <= U[1] || U[1] === 0)) return $t(), I && B() && w().onDiscarded(h), !1;
                const X = V().data;
                Z.data = s(X, M) ? X : M, I && B() && w().onSuccess(M, h, n)
            } catch (U) {
                Vt();
                const X = w(),
                    {
                        shouldRetryOnError: nt
                    } = X;
                X.isPaused() || (Z.error = U, I && B() && (X.onError(U, h, X), (nt === !0 || K(nt) && nt(U)) && de() && X.onErrorRetry(U, h, X, Yn => {
                    const ot = m[h];
                    ot && ot[0] && ot[0](ke.ERROR_REVALIDATE_EVENT, Yn)
                }, {
                    retryCount: (ge.retryCount || 0) + 1,
                    dedupe: !0
                })))
            }
            return W = !1, $t(), !0
        }), [h, o]), Ft = He((...v) => Sn(o, te.current, ...v), []);
        if ($e(() => {
                ue.current = t, R.current = n, C(he) || (Dt.current = he)
            }), $e(() => {
                if (!h) return;
                const v = Se.bind(N, ut);
                let y = 0;
                const k = Tr(h, m, (W, ge = {}) => {
                    if (W == ke.FOCUS_EVENT) {
                        const I = Date.now();
                        w().revalidateOnFocus && I > y && de() && (y = I + w().focusThrottleInterval, v())
                    } else if (W == ke.RECONNECT_EVENT) w().revalidateOnReconnect && de() && v();
                    else {
                        if (W == ke.MUTATE_EVENT) return Se();
                        if (W == ke.ERROR_REVALIDATE_EVENT) return Se(ge)
                    }
                });
                return se.current = !1, te.current = h, ye.current = !0, fe({
                    _k: le
                }), Ut && (C(me) || Ie ? v() : dr(v)), () => {
                    se.current = !0, k()
                }
            }, [h]), $e(() => {
                let v;

                function y() {
                    const k = K(u) ? u(V().data) : u;
                    k && v !== -1 && (v = setTimeout(M, k))
                }

                function M() {
                    !V().error && (d || w().isVisible()) && (_ || w().isOnline()) ? Se(ut).then(y) : y()
                }
                return y(), () => {
                    v && (clearTimeout(v), v = -1)
                }
            }, [u, d, _, h]), Jn(Oe), a && C(me) && h) {
            if (!Qt && Ie) throw new Error("Fallback data is required when using suspense in SSR.");
            ue.current = t, R.current = n, se.current = !1;
            const v = D[h];
            if (!C(v)) {
                const y = Ft(v);
                tn(y)
            }
            if (C(Be)) {
                const y = Se(ut);
                C(Oe) || (y.status = "fulfilled", y.value = !0), tn(y)
            } else throw Be
        }
        return {
            mutate: Ft,
            get data() {
                return $.data = !0, Oe
            },
            get error() {
                return $.error = !0, Be
            },
            get isValidating() {
                return $.isValidating = !0, qn
            },
            get isLoading() {
                return $.isLoading = !0, Kn
            }
        }
    },
    Pc = Fe.defineProperty(gr, "defaultValue", {
        value: Tn
    }),
    xr = kr(Er);

function Mt(e, c = {}, i) {
    var l = c,
        {
            deps: t,
            auto: n = !0,
            massage: o = u => z(this, null, function*() {
                return u
            }),
            shouldRevalidate: s = !0
        } = l,
        a = x(l, ["deps", "auto", "massage", "shouldRevalidate"]);
    const u = s ? null : {
        revalidateIfStale: !1,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
    };
    return xr(n ? t ? [...t, e] : e : null, () => ae(e, a).then(o), f(f({}, u), i))
}

function Rr(e, o = {}) {
    var s = o,
        {
            deps: t
        } = s,
        n = x(s, ["deps"]);
    vr(t ? [...t, e] : e, () => ae(e, n))
}

function Pr({
    array: e,
    limit: t,
    formatter: n = s => s,
    othersFormatter: o = s => s
}) {
    const s = e.map(n).filter(Boolean).slice(0, t),
        {
            iString: a,
            iPlural: i
        } = re(),
        c = a("and");
    if (s.length === 0) return e.length ? i("one person", "%1 people", e.length) : a("zero people");
    if (s.length === 1) return s[0];
    if (s.length === 2) return r(G, null, s[0], " ", c, " ", s[1]);
    const l = s.slice(0, -1).map(d => r(G, null, d, ", ")),
        u = e.length - s.length;
    return u > 0 ? r(G, null, l, c, " ", o(r(G, null, u + 1, " ", i("other", "others", u + 1)))) : r(G, null, l, c, " ", s[s.length - 1])
}
const Ir = "_scrollBox_ckwnl_1",
    Mr = "_fade_ckwnl_8",
    Lr = "_visible_ckwnl_16",
    Br = "_bg_ckwnl_21",
    Or = "_left_ckwnl_33",
    zr = "_right_ckwnl_66",
    Ar = "_arrow_ckwnl_100",
    be = {
        scrollBox: Ir,
        fade: Mr,
        visible: Lr,
        bg: Br,
        left: Or,
        right: zr,
        arrow: Ar
    },
    Nr = "_variables_fnz5u_1",
    Dr = "_dot_fnz5u_21",
    Ur = "_purpleDot_fnz5u_27",
    Hr = "_greenDot_fnz5u_31",
    Fr = "_silverDot_fnz5u_35",
    $r = "_yellowDot_fnz5u_39",
    Vr = "_page_fnz5u_43",
    Wr = "_feedPad_fnz5u_49",
    qr = "_miniInboxItem_fnz5u_54",
    Kr = "_newItems_fnz5u_68",
    Yr = "_facepile_fnz5u_79",
    Zr = "_face_fnz5u_79",
    Xr = "_tabIcon_fnz5u_89",
    Gr = "_feedItem_fnz5u_94",
    Jr = "_contain_fnz5u_103",
    Qr = "_feedUnit_fnz5u_126",
    jr = "_showThreadGutter_fnz5u_133",
    es = "_hasAvatar_fnz5u_146",
    ts = "_hasAction_fnz5u_151",
    ns = "_seeMoreFade_fnz5u_154",
    os = "_seeMoreText_fnz5u_161",
    rs = "_timestamp_fnz5u_168",
    ss = "_metaTimestamp_fnz5u_172",
    as = "_feedPermalinkUnit_fnz5u_176",
    is = "_permalinkHeader_fnz5u_184",
    cs = "_seeMoreReplies_fnz5u_195",
    ls = "_seeMoreThread_fnz5u_199",
    us = "_seeMoreThreadSegment_fnz5u_211",
    ds = "_top_fnz5u_216",
    fs = "_hasContext_fnz5u_227",
    _s = "_replyUnit_fnz5u_250",
    ps = "_quoteText_fnz5u_266",
    hs = "_quote_fnz5u_266",
    ms = "_quoteBottom_fnz5u_296",
    gs = "_quoteButton_fnz5u_300",
    bs = "_feedCommentBody_fnz5u_318",
    Cs = "_feedCommentBodyInner_fnz5u_323",
    ws = "_underlineLink_fnz5u_517",
    vs = "_disabled_fnz5u_521",
    ys = "_peopleYouMayKnowContainer_fnz5u_526",
    Ss = "_peopleYouMayKnow_fnz5u_526",
    ks = "_right_fnz5u_545",
    Ts = "_left_fnz5u_552",
    Es = "_hidden_fnz5u_559",
    xs = "_peopleYouMayKnowArrows_fnz5u_564",
    Rs = "_seeMore_fnz5u_154",
    Ps = "_contextRow_fnz5u_590",
    Is = "_contextIcon_fnz5u_594",
    Ms = "_post_fnz5u_604",
    Ls = "_postImage_fnz5u_615",
    Bs = "_linkImage_fnz5u_626",
    Os = "_mobile_fnz5u_632",
    zs = "_linkImagePlaceholder_fnz5u_638",
    As = "_actionRow_fnz5u_646",
    Ns = "_actionButton_fnz5u_651",
    Ds = "_permalink_fnz5u_184",
    Us = "_heart_fnz5u_674",
    Hs = "_more_fnz5u_678",
    Fs = "_shrink_fnz5u_683",
    $s = "_digit_fnz5u_688",
    Vs = "_like_fnz5u_741",
    Ws = "_active_fnz5u_742",
    qs = "_reply_fnz5u_250",
    Ks = "_restack_fnz5u_778",
    Ys = "_share_fnz5u_801",
    Zs = "_shortPostText_fnz5u_822",
    Xs = "_large_fnz5u_835",
    Gs = "_stat_fnz5u_841",
    Js = "_reportModal_fnz5u_851",
    Qs = "_likeButton_fnz5u_865",
    js = "_heartWrapper_fnz5u_879",
    ea = "_clickedOnce_fnz5u_911",
    ta = "_isLiked_fnz5u_912",
    na = "_spark_fnz5u_916",
    oa = "_sparks_fnz5u_942",
    ra = "_ripple_fnz5u_982",
    sa = "_userBadge_fnz5u_1003",
    aa = "_mutedItem_fnz5u_1010",
    ia = "_save_fnz5u_1014",
    ca = {
        variables: Nr,
        dot: Dr,
        purpleDot: Ur,
        greenDot: Hr,
        silverDot: Fr,
        yellowDot: $r,
        page: Vr,
        feedPad: Wr,
        miniInboxItem: qr,
        newItems: Kr,
        facepile: Yr,
        face: Zr,
        tabIcon: Xr,
        feedItem: Gr,
        contain: Jr,
        feedUnit: Qr,
        showThreadGutter: jr,
        hasAvatar: es,
        hasAction: ts,
        seeMoreFade: ns,
        seeMoreText: os,
        timestamp: rs,
        metaTimestamp: ss,
        feedPermalinkUnit: as,
        permalinkHeader: is,
        seeMoreReplies: cs,
        seeMoreThread: ls,
        seeMoreThreadSegment: us,
        top: ds,
        hasContext: fs,
        replyUnit: _s,
        quoteText: ps,
        quote: hs,
        quoteBottom: ms,
        quoteButton: gs,
        feedCommentBody: bs,
        feedCommentBodyInner: Cs,
        underlineLink: ws,
        disabled: vs,
        peopleYouMayKnowContainer: ys,
        peopleYouMayKnow: Ss,
        right: ks,
        left: Ts,
        hidden: Es,
        peopleYouMayKnowArrows: xs,
        seeMore: Rs,
        contextRow: Ps,
        contextIcon: Is,
        post: Ms,
        postImage: Ls,
        linkImage: Bs,
        mobile: Os,
        linkImagePlaceholder: zs,
        actionRow: As,
        actionButton: Ns,
        permalink: Ds,
        heart: Us,
        more: Hs,
        shrink: Fs,
        digit: $s,
        like: Vs,
        active: Ws,
        reply: qs,
        restack: Ks,
        share: Ys,
        shortPostText: Zs,
        large: Xs,
        stat: Gs,
        reportModal: Js,
        likeButton: Qs,
        heartWrapper: js,
        clickedOnce: ea,
        isLiked: ta,
        "heart-bounce": "_heart-bounce_fnz5u_1",
        spark: na,
        "spark-burst": "_spark-burst_fnz5u_1",
        sparks: oa,
        ripple: ra,
        userBadge: sa,
        mutedItem: aa,
        save: ia
    },
    la = (e, {
        inset: t = 0,
        pageSizeAdjust: n = 0,
        initialState: o
    } = {}) => {
        const [s, a] = Ke(o || {
            showLeft: !1,
            showRight: !1
        });
        return St(() => {
            const {
                current: c
            } = e;
            if (c) {
                const l = () => {
                    a(u => {
                        let d = u;
                        !d.showLeft && c.scrollLeft > t ? d = g(f({}, u), {
                            showLeft: !0
                        }) : d.showLeft && c.scrollLeft <= t && (d = g(f({}, u), {
                            showLeft: !1
                        }));
                        const _ = c.scrollWidth - c.offsetWidth - 4 - t;
                        return !d.showRight && c.scrollLeft < _ ? d = g(f({}, u), {
                            showRight: !0
                        }) : d.showRight && c.scrollLeft >= _ && (d = g(f({}, u), {
                            showRight: !1
                        })), d
                    })
                };
                return c.addEventListener("scroll", l), setTimeout(() => {
                    l()
                }, 1e3), () => {
                    c.removeEventListener("scroll", l)
                }
            }
        }, []), {
            state: s,
            handleArrowClick: c => () => {
                const {
                    current: l
                } = e;
                l && l.scrollBy({
                    left: c * (l.offsetWidth - n),
                    behavior: "smooth"
                })
            }
        }
    };

function nn({
    direction: e,
    isVisible: t = !0,
    onClick: n
}) {
    return r("div", {
        className: P(be.fade, t && be.visible, be[e], ca.peopleYouMayKnowArrows)
    }, r("div", {
        className: be.bg
    }), r(ho, {
        resetCss: !0,
        className: be.arrow,
        onClick: n
    }, e === "right" ? r($o, null) : r(Uo, null)))
}

function Ic(o) {
    var s = o,
        {
            className: e,
            scrollRef: t
        } = s,
        n = x(s, ["className", "scrollRef"]);
    return r(Ye, g(f({}, n), {
        className: P(be.scrollBox, e),
        ref: t,
        overflowX: "auto",
        scrollBar: "hidden",
        minWidth: 0,
        onTouchStart: a => {
            const {
                pageX: i
            } = a;
            i !== void 0 && (i > 10 && i < window.innerWidth - 10 || a.preventDefault())
        }
    }))
}

function Pn(e, t) {
    St(() => {
        const n = o => {
            e(o)
        };
        return rt.push(n), () => {
            rt.splice(rt.indexOf(n) >>> 0, 1)
        }
    }, t)
}

function ua({
    path: e
} = {}) {
    const [t, n] = Ke({}), o = H(null);
    Pn(i => {
        o.current = i, n({})
    }, []);
    const s = o.current || an(),
        a = s.replace(/\?.+$/, "");
    return o.current = null, [{
        url: s,
        path: a,
        matches: e && Qn(a, e, {}) || null
    }, cn]
}

function Mc() {
    return history.state
}

function Lc() {
    return cn
}

function da() {
    const {
        result: e
    } = Io(() => Mo(() =>
        import ("./sentry-b2c6375a.js"), ["assets/sentry-b2c6375a.js", "assets/index-8074d978.js", "assets/_sentry-release-injection-file-6cfd5b47.js"]).then(t => t.Sentry), [], {
        auto: !0
    });
    return jn(t => {
        console.error(t), e && e.captureException(t)
    })
}

function fa({
    children: e
}) {
    const [t, n] = da(), o = H(an());
    return Pn(s => {
        t && o.current !== s && n(), o.current = s
    }, []), t ? r(_a, null) : e
}

function _a() {
    return r(Y, {
        flex: "grow",
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
        padding: 20
    }, r(Po, {
        src: "/img/reader/toad.png",
        maxWidth: 200
    }), r(Y, {
        gap: 8
    }, r(T.H3, {
        weight: "semibold",
        align: "center"
    }, "Oh no—this page croaked."), r(T.B3, {
        color: "secondary",
        align: "center"
    }, "Try again, or hop to another page.")))
}
const pa = "_pageStack_scoox_1",
    ha = "_gap_0_scoox_6",
    ma = "_gap_8_scoox_10",
    ga = "_gap_16_scoox_18",
    ba = "_linkRow_scoox_28",
    Ca = "_isPadded_scoox_34",
    wa = "_linkRowA_scoox_50",
    va = "_isClickable_scoox_57",
    ya = "_isSelectable_scoox_70",
    Sa = "_isSelected_scoox_74",
    ka = "_zero_scoox_89",
    Ta = "_hoverLink_scoox_103",
    Ea = "_input_scoox_113",
    xa = "_error_scoox_129",
    Ra = "_textarea_scoox_138",
    Pa = "_tabContainer_scoox_144",
    Ia = "_tabContainerBorder_scoox_158",
    L = {
        pageStack: pa,
        gap_0: ha,
        gap_8: ma,
        gap_16: ga,
        linkRow: ba,
        isPadded: Ca,
        linkRowA: wa,
        isClickable: va,
        isSelectable: ya,
        isSelected: Sa,
        zero: ka,
        hoverLink: Ta,
        input: Ea,
        error: xa,
        textarea: Ra,
        tabContainer: Pa,
        tabContainerBorder: Ia
    },
    Ma = "_reader2Placeholder_10s2p_1",
    La = "_travel_10s2p_1",
    Ba = "_placeholder_10s2p_8",
    Oa = "_bar_10s2p_18",
    za = "_circle_10s2p_22",
    Aa = "_elevated_10s2p_26",
    Te = {
        reader2Placeholder: Ma,
        travel: La,
        placeholder: Ba,
        bar: Oa,
        circle: za,
        elevated: Aa
    };

function Bc({
    className: e,
    style: t,
    type: n,
    width: o,
    height: s,
    size: a,
    maxWidth: i
}) {
    return a != null && (o = a, s = a), r("div", {
        className: P(Te.reader2Placeholder, e, n),
        style: g(f({}, t), {
            width: o,
            height: s,
            maxWidth: i
        })
    })
}

function De(d) {
    var _ = d,
        {
            className: e,
            style: t,
            type: n,
            width: o,
            height: s,
            size: a,
            maxWidth: i,
            elevated: c,
            radius: l = "sm"
        } = _,
        u = x(_, ["className", "style", "type", "width", "height", "size", "maxWidth", "elevated", "radius"]);
    a != null && (o = a, s = a);
    const p = n === "bar";
    return r(mo, g(f({}, u), {
        className: P(Te.placeholder, e, c && Te.elevated, p && Te.bar, n === "circle" && Te.circle),
        radius: l,
        style: g(f({}, t), {
            width: o,
            height: s,
            maxWidth: i
        })
    }))
}

function Oc({
    children: e
}) {
    const t = hn();
    return r(Wa, null, t ? r(T.H2, null, e) : r(T.H1, null, e))
}

function Na({
    className: e,
    children: t,
    title: n,
    hasTitle: o
}) {
    return r("div", {
        className: P("reader2-page-section", (n || o) && "withTitle", e)
    }, n && r(Da, null, n), t)
}

function Da({
    children: e,
    className: t,
    actions: n
}) {
    return r("div", {
        className: P("reader2-section-title", t)
    }, r("span", {
        className: "reader2-text-h3 reader2-section-title"
    }, e), n && r("div", {
        className: "reader2-header-actions"
    }, n))
}
const zc = kt((a, s) => {
    var i = a,
        {
            isPadded: e = !0,
            className: t,
            linkClassName: n
        } = i,
        o = x(i, ["isPadded", "className", "linkClassName"]);
    return r("div", {
        ref: s,
        className: P(L.linkRow, e && L.isPadded, t)
    }, r(Ua, g(f({}, o), {
        className: n
    })))
});

function Ua(_) {
    var p = _,
        {
            children: e,
            className: t,
            href: n,
            newTab: o,
            onClick: s,
            noAnchor: a,
            native: i,
            utmCampaign: c,
            utmSource: l,
            isSelected: u
        } = p,
        d = x(p, ["children", "className", "href", "newTab", "onClick", "noAnchor", "native", "utmCampaign", "utmSource", "isSelected"]);
    const m = typeof location != "undefined" ? location.pathname : "",
        b = !a && n != null ? "a" : "div",
        S = n && eo(n, {
            utm_source: l || m,
            utm_medium: ft.reader2,
            utm_campaign: c
        }),
        D = h => {
            s && s(h), !h.defaultPrevented && a && S && Fo(h, S, {
                native: i,
                newTab: o
            })
        };
    return r(Ye, f({
        as: b,
        className: P(L.linkRowA, t, (S || s) && u == null && L.isClickable, u && L.isSelected, u != null && L.isSelectable),
        "data-selected": u,
        href: S,
        target: o ? "_blank" : void 0,
        onClick: D
    }, d), e)
}

function Ha({
    icon: e,
    title: t,
    text: n,
    action: o,
    className: s
}) {
    return r(Y, {
        gap: 16,
        alignItems: "center",
        justifyContent: "center",
        flex: "grow",
        className: P(L.zero, s)
    }, e, r(Y, {
        gap: 4
    }, r(T.B3, {
        weight: "semibold",
        color: "primary"
    }, t), r(T.B4, {
        color: "secondary"
    }, n)), o)
}

function Ac(c) {
    var l = c,
        {
            className: e,
            variant: t,
            size: n,
            serif: o,
            isConstrained: s,
            maxLines: a = 3
        } = l,
        i = x(l, ["className", "variant", "size", "serif", "isConstrained", "maxLines"]);
    return r("div", f({
        className: P("reader2-paragraph", t && `reader2-${t}`, n && `reader2-font-${n}`, o && "reader2-font-serif", s && `reader2-clamp-lines reader2-${a}-lines`, e)
    }, i))
}

function Fa({
    className: e,
    children: t
}) {
    return r("div", {
        className: P("reader-nav-center", e)
    }, r("div", {
        className: "reader2-page reader2-font-base"
    }, t))
}

function Nc({
    className: e,
    scrollRef: t,
    children: n
}) {
    return r(In, {
        ref: t
    }, r(Fa, {
        className: e
    }, n))
}

function Dc(n) {
    var o = n,
        {
            scrollRef: e
        } = o,
        t = x(o, ["scrollRef"]);
    return r(In, {
        ref: e
    }, r(Ye, g(f({}, t), {
        flex: "grow",
        paddingX: {
            mobile: 0,
            desktop: 20
        },
        minWidth: 0
    })))
}

function Uc(e) {
    return Ro.useMediaQuery({
        minWidth: 1100
    }) ? r(Y, f({
        className: "reader2-inbox-sidebar",
        paddingTop: 20
    }, e)) : null
}

function Hc(e) {
    return r(Ye, f({
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 8
    }, e))
}

function Fc(e) {
    return r(Y, f({
        gap: 8
    }, e))
}
const In = kt((e, t) => r(fa, null, r("div", f({
        id: "reader-nav-page-scroll",
        className: "reader-nav-page-scroll",
        ref: t
    }, e)))),
    $c = kt((s, o) => {
        var a = s,
            {
                className: e,
                hasError: t
            } = a,
            n = x(a, ["className", "hasError"]);
        return r("input", g(f({
            className: P(L.input, t && L.error, e)
        }, n), {
            ref: o
        }))
    });

function Vc({
    error: e
}) {
    return r(qa, null, Ce(e))
}
const Wc = ({
    header: e,
    icon: t,
    title: n,
    text: o,
    action: s
}) => r(Na, {
    title: e
}, r($a, {
    icon: t,
    title: n,
    text: o,
    action: s
}));

function $a(e) {
    return r(Y, {
        bg: "secondary",
        border: "detail",
        radius: "md",
        paddingX: 20,
        paddingY: 64,
        justifyContent: "center",
        alignItems: "center",
        flex: "grow"
    }, r(Ha, f({}, e)))
}

function qc({
    tabs: e,
    value: t,
    onChange: n,
    noBorder: o = !1
}) {
    const s = H(),
        a = hn(),
        {
            state: i,
            handleArrowClick: c
        } = la(s);
    return r(Y, {
        gap: 6,
        paddingBottom: {
            mobile: 16,
            desktop: 20
        },
        paddingTop: {
            mobile: 16,
            desktop: 20
        },
        paddingRight: 0,
        className: P(L.tabContainer, !o && L.tabContainerBorder)
    }, r(_t, {
        className: "reader2-tab-bar-parent"
    }, !a && r(nn, {
        direction: "left",
        isVisible: i.showLeft,
        onClick: c(-1)
    }), r(_t, {
        paddingLeft: {
            mobile: 16,
            desktop: 20
        },
        className: "reader2-tab-bar",
        ref: s
    }, r(Va, {
        tabs: e,
        value: t,
        onChange: n
    })), !a && r(nn, {
        direction: "right",
        isVisible: i.showRight,
        onClick: c(1)
    })))
}

function Va({
    tabs: e,
    value: t,
    onChange: n
}) {
    return r(_t, {
        gap: 8
    }, e.map(o => r(Ho, {
        key: o.value,
        isActive: t === o.value,
        onClick: () => n(o.value),
        icon: o.icon
    }, o.label)))
}

function Kc({
    children: e
}) {
    const t = H();
    return r(Y, {
        className: "reader2-inbox-sidebar-fixed",
        ref: t
    }, e)
}

function Yc(n) {
    var o = n,
        {
            gap: e = 16
        } = o,
        t = x(o, ["gap"]);
    return r(Y, g(f({}, t), {
        className: P(L.pageStack, L[`gap_${e}`])
    }))
}
const Wa = E("reader2-page-top");
E(L.pageTopFixed);
const Zc = E("reader2-page-body"),
    Xc = E(L.pageStack),
    Gc = E("reader2-page-center"),
    Jc = E("reader2-modal-title-text"),
    Qc = E("reader2-column"),
    jc = E("reader2-text-h3"),
    el = E("reader2-text-h3 reader2-section-title"),
    tl = E("reader2-text-h4"),
    nl = E("reader2-item-title"),
    ol = E("reader2-item-meta"),
    rl = E("reader2-text-b4"),
    qa = E("reader2-form-error"),
    sl = E("reader2-subtitle"),
    al = E("reader2-separator", "hr");
E("reader2-page-section withTitle");
E("reader2-row reader2-split-row");
E("reader2-emphasis-box");
const Ka = E(P(L.hoverLink, "pencraft"), "a");

function il(e) {
    return r(Ka, f({
        target: "_blank"
    }, e))
}
const Ya = ce({
    setChildOptions: () => {},
    addRssFeed: () => {},
    onboardingModalRef: {
        current: null
    },
    isLoading: !1,
    subscriptions: [],
    publicationUsers: [],
    onPageScroll: () => {},
    setPinTitle: () => {},
    setDrawer: () => null,
    checkFocus: () => !1,
    requireLogin: null
});

function cl(e, {
    shouldShowGetAppPill: t = !0,
    style: n,
    alwaysPinTitle: o,
    backAction: s,
    onRefresh: a
} = {}) {
    const i = Lt();
    return dt(() => {
        i.setChildOptions({
            title: e,
            style: n,
            alwaysPinTitle: o,
            backAction: s,
            shouldShowGetAppPill: t,
            onRefresh: a
        })
    }, [i, e, n, s, t, a]), dt(() => {
        i.setPinTitle(!1)
    }, []), i
}

function Lt() {
    return j(Ya)
}
var Za = bo,
    Xa = So,
    Ga = ko,
    Ja = to,
    Qa = Co,
    ja = wo,
    ei = 200;

function ti(e, t, n, o) {
    var s = -1,
        a = Xa,
        i = !0,
        c = e.length,
        l = [],
        u = t.length;
    if (!c) return l;
    n && (t = Ja(t, Qa(n))), o ? (a = Ga, i = !1) : t.length >= ei && (a = ja, i = !1, t = new Za(t));
    e: for (; ++s < c;) {
        var d = e[s],
            _ = n == null ? d : n(d);
        if (d = o || d !== 0 ? d : 0, i && _ === _) {
            for (var p = u; p--;)
                if (t[p] === _) continue e;
            l.push(d)
        } else a(t, _, o) || l.push(d)
    }
    return l
}
var ni = ti,
    oi = vo,
    ri = no;

function si(e) {
    return ri(e) && oi(e)
}
var ai = si,
    ii = ni,
    ci = To,
    li = ai,
    ui = ci(function(e, t) {
        return li(e) ? ii(e, t) : []
    }),
    di = ui;
const fi = oo(di);

function Mn(o) {
    var s = o,
        {
            size: e = 20,
            stroke: t = "var(--color-light-secondary)"
        } = s,
        n = x(s, ["size", "stroke"]);
    return r("svg", g(f({}, n), {
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        xmlns: "http://www.w3.org/2000/svg"
    }), r("path", {
        id: "Vector",
        d: "M15.2941 18.6667L17.5294 20.8889L22 16.4444M3 21.9999C3 17.7044 6.69722 14.2222 11.258 14.2222C12.0859 14.2222 12.8854 14.3369 13.6394 14.5505M16.4118 6.44444C16.4118 8.89904 14.4102 10.8889 11.9412 10.8889C9.47214 10.8889 7.47059 8.89904 7.47059 6.44444C7.47059 3.98985 9.47214 2 11.9412 2C14.4102 2 16.4118 3.98985 16.4118 6.44444Z",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }))
}

function Ln({
    size: e = 20,
    stroke: t = "var(--color-light-secondary)"
}) {
    return r("svg", {
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        xmlns: "http://www.w3.org/2000/svg"
    }, r("path", {
        id: "Vector",
        d: "M18.6471 15.3333V18.6667M18.6471 18.6667L18.6471 22M18.6471 18.6667H22M18.6471 18.6667H15.2941M3 22C3 17.7044 6.69722 14.2222 11.258 14.2222C12.0859 14.2222 12.8854 14.3369 13.6394 14.5505M16.4118 6.44444C16.4118 8.89904 14.4102 10.8889 11.9412 10.8889C9.47214 10.8889 7.47059 8.89904 7.47059 6.44444C7.47059 3.98985 9.47214 2 11.9412 2C14.4102 2 16.4118 3.98985 16.4118 6.44444Z",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }))
}

function Bn(o) {
    var s = o,
        {
            size: e = 20,
            stroke: t = "var(--color-light-secondary)"
        } = s,
        n = x(s, ["size", "stroke"]);
    return r("svg", g(f({}, n), {
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        xmlns: "http://www.w3.org/2000/svg"
    }), r("path", {
        id: "Vector",
        d: "M3 22C3 17.7044 6.69722 14.2222 11.258 14.2222C11.5081 14.2222 11.7556 14.2326 12 14.2531M21.0039 16.3098L18.6469 18.6668M18.6469 18.6668L16.2899 21.0239M18.6469 18.6668L21.0178 21.0377M18.6469 18.6668L16.276 16.2959M16.4118 6.44444C16.4118 8.89904 14.4102 10.8889 11.9412 10.8889C9.47214 10.8889 7.47059 8.89904 7.47059 6.44444C7.47059 3.98985 9.47214 2 11.9412 2C14.4102 2 16.4118 3.98985 16.4118 6.44444Z",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }))
}
const On = {
        mutes: [],
        blocks: [],
        blocked: []
    },
    Qe = ce({
        result: On,
        refetch: () => null
    });
Qe.displayName = "UserBlockContext";

function ll({
    user: e,
    children: t
}) {
    var o;
    const n = Ze({
        pathname: "/api/v1/blocks/ids",
        deps: [e],
        auto: !!e
    });
    return r(Qe.Provider, {
        value: {
            result: (o = n.result) != null ? o : On,
            refetch: n.refetch
        }
    }, t)
}

function _i() {
    return j(Qe)
}

function zn(e) {
    const {
        result: {
            mutes: t,
            blocks: n,
            blocked: o
        }
    } = j(Qe);
    return e ? t.includes(e) ? "muting" : n.includes(e) ? "blocking" : o.includes(e) ? "blocked" : null : null
}

function ul(e, {
    surface: t
}) {
    const n = ee(),
        o = !!(n && e && n.id !== e.id),
        s = _i(),
        a = zn(e == null ? void 0 : e.id),
        i = Pt();
    Tt((e == null ? void 0 : e.name) || "");
    const c = () => z(this, null, function*() {
            if (e) {
                try {
                    yield ae(`/api/v1/blocks/${e.id}`, {
                        method: "POST",
                        json: {
                            type: "mute",
                            surface: t
                        }
                    })
                } catch (p) {
                    i.popToast(m => r(A, g(f({}, m), {
                        text: Ce(p)
                    })));
                    return
                }
                s.refetch(), i.popToast(p => r(A, g(f({}, p), {
                    text: `${e.name||"User"} muted`,
                    Icon: at
                })))
            }
        }),
        l = () => z(this, null, function*() {
            if (e) {
                try {
                    yield ae(`/api/v1/blocks/${e.id}`, {
                        method: "DELETE",
                        query: {
                            surface: t
                        }
                    })
                } catch (p) {
                    i.popToast(m => r(A, g(f({}, m), {
                        text: Ce(p)
                    })));
                    return
                }
                s.refetch(), i.popToast(p => r(A, g(f({}, p), {
                    text: `${e.name||"User"} unmuted`,
                    Icon: at
                })))
            }
        }),
        u = () => z(this, null, function*() {
            if (e) {
                try {
                    yield ae(`/api/v1/blocks/${e.id}`, {
                        method: "POST",
                        json: {
                            type: "block",
                            surface: t
                        }
                    })
                } catch (p) {
                    i.popToast(m => r(A, g(f({}, m), {
                        text: Ce(p)
                    })));
                    return
                }
                s.refetch(), i.popToast(p => r(A, g(f({}, p), {
                    text: `${e.name||"User"} blocked`,
                    Icon: st
                })))
            }
        }),
        d = () => z(this, null, function*() {
            if (e) {
                try {
                    yield ae(`/api/v1/blocks/${e.id}`, {
                        method: "DELETE",
                        query: {
                            surface: t
                        }
                    })
                } catch (p) {
                    i.popToast(m => r(A, g(f({}, m), {
                        text: Ce(p)
                    })));
                    return
                }
                s.refetch(), i.popToast(p => r(A, g(f({}, p), {
                    text: `${e.name||"User"} unblocked`,
                    Icon: st
                })))
            }
        }),
        _ = [];
    return o && (a !== "blocking" && _.push(r(pt, {
        icon: r(at, null),
        priority: "destructive",
        onClick: a === "muting" ? l : c
    }, a === "muting" ? "Unmute" : "Mute")), _.push(r(pt, {
        icon: r(st, null),
        priority: "destructive",
        onClick: a === "blocking" ? d : u
    }, a === "blocking" ? "Unblock" : "Block"))), _
}
const Bt = ce(!1);
Bt.displayName = "MuteFreeZone";

function dl({
    muteFree: e = !0,
    children: t
}) {
    return r(Bt.Provider, {
        value: e
    }, t)
}

function fl() {
    return j(Bt)
}
const pi = "_followButton_d3z5r_5",
    hi = "_on_d3z5r_6",
    mi = "_justFollowed_d3z5r_11",
    gi = "_off_d3z5r_15",
    Ee = {
        followButton: pi,
        on: hi,
        justFollowed: mi,
        off: gi
    };

function An(e) {
    return Mt("/api/v1/feed/following", e)
}

function bi() {
    const {
        mutate: e
    } = Rn();
    return (...t) => e("/api/v1/feed/following", ...t)
}

function Ci(e, t) {
    const {
        data: n
    } = An(t);
    return (n != null ? n : []).includes(e != null ? e : 0)
}

function _l(e, t) {
    const {
        isFollowing: n,
        toggle: o
    } = Nn(e, t), s = ee(), a = zn(e == null ? void 0 : e.id), i = !!(s && e && s.id !== e.id) && !a;
    Tt((e == null ? void 0 : e.name) || "");
    const c = [];
    return i && c.push(r(pt, {
        icon: n ? r(Bn, {
            stroke: "var(--color-primary)"
        }) : r(Ln, {
            stroke: "var(--color-primary)"
        }),
        onClick: o
    }, n ? "Unfollow" : "Follow")), c
}

function Nn(e, t, n) {
    const o = ee(),
        {
            onboardingModalRef: s
        } = Lt(),
        a = Ci(e == null ? void 0 : e.id, n),
        {
            mutate: i,
            data: c
        } = An(n),
        l = Pt(),
        u = Tt((e == null ? void 0 : e.name) || ""),
        {
            iTemplate: d
        } = re(),
        _ = m => z(this, null, function*() {
            if (e) {
                if (!o && s.current) {
                    s.current.open();
                    return
                }
                i((b = []) => m ? [...b, e.id] : fi(b, e.id), {
                    revalidate: !1
                });
                try {
                    yield ae(`/api/v1/feed/${e.id}/follow`, {
                        method: m ? "POST" : "DELETE",
                        json: {
                            surface: t
                        }
                    }), l.popToast(b => r(A, g(f({}, b), {
                        Icon: m ? Mn : Bn,
                        text: m ? d `Followed ${u}` : d `Unfollowed ${u}`
                    })))
                } catch (b) {
                    l.popToast(S => r(A, g(f({}, S), {
                        text: Ce(b)
                    })));
                    return
                }
            }
        });
    return {
        isFollowing: a,
        toggle: () => _(!a),
        isLoaded: !!c
    }
}

function Dn(e, t) {
    const {
        isFollowing: n,
        toggle: o
    } = Nn(e, t), [s, a] = Ke(!1);
    return {
        isFollowing: n,
        buttonProps: {
            onClick: () => {
                o(), n || a(!0)
            },
            onMouseLeave: () => a(!1),
            className: P(Ee.followButton, s && Ee.justFollowed)
        },
        css: Ee
    }
}
const pl = dn({
        className: Ee.on,
        as: "span"
    }),
    hl = dn({
        className: Ee.off,
        as: "span"
    });

function ml(e) {
    const t = Ze({
        pathname: "/api/v1/subscriptions",
        auto: e,
        deps: []
    });
    return Ve(() => g(f({}, t), {
        result: t.result ? g(f({}, t.result), {
            publicationMap: new Map(t.result.publications.map(o => [o.id, o])),
            subscriptionMap: new Map(t.result.subscriptions.map(o => [o.publication_id, o])),
            publicationUserMap: new Map(t.result.publicationUsers.map(o => [o.publication_id, o]))
        }) : null
    }), [t])
}
const wi = ce(Lo);

function je() {
    return j(wi)
}

function vi(e) {
    var i;
    const {
        subscriptionMap: t,
        publicationUserMap: n,
        publicationsWithPledges: o
    } = (i = je().result) != null ? i : {
        subscriptionMap: new Map,
        publicationUserMap: new Map,
        publicationsWithPledges: []
    }, s = t.get(e), a = n.get(e);
    return {
        subscription: s,
        publicationUser: a,
        is_pledged: !!(o != null && o.includes(e))
    }
}

function gl(e) {
    const {
        subscription: t,
        publicationUser: n,
        is_pledged: o
    } = vi(e), s = (t == null ? void 0 : t.membership_state) === "free_signup", a = (t == null ? void 0 : t.membership_state) === "subscribed", i = !!(t != null && t.is_founding), c = !!(n && ["contributor", "admin"].includes(n.role));
    return {
        subscription: t,
        publicationUser: n,
        isFreeSubscribed: s,
        isPaid: a,
        isSubscribed: s || a,
        isAuthor: c,
        isFounding: i,
        isPledged: o
    }
}

function bl() {
    var o, s, a;
    const {
        publicationUsers: e,
        publicationMap: t
    } = (o = je().result) != null ? o : {
        publicationMap: new Map,
        publicationUsers: []
    }, n = (a = (s = e.find(i => i.is_primary)) != null ? s : e.find(i => i.role === "admin")) != null ? a : e.find(i => i.role === "contributor");
    return n && t.get(n.publication_id)
}

function Cl(e) {
    var n, o;
    const {
        publicationUsers: t
    } = (n = je().result) != null ? n : {
        publicationUsers: []
    };
    return (o = t.find(s => s.publication_id === e)) != null ? o : null
}

function yi({
    publication: e,
    profileId: t,
    onSuccess: n = () => {},
    source: o
}) {
    const s = ee(),
        a = je(),
        i = bi(),
        {
            popToast: c
        } = Pt(),
        {
            isLoading: l,
            refetch: u
        } = Ze({
            pathname: "/api/v1/reader/signup/pub",
            method: "POST",
            json: {
                publication_id: e.id,
                email: s == null ? void 0 : s.email,
                visibility: "public",
                source: o,
                first_url: Bo,
                first_referrer: Oo,
                current_url: zo,
                current_referrer: Ao
            }
        });
    return {
        isLoading: l,
        subscribe: () => z(this, null, function*() {
            s || c(d => r(A, g(f({}, d), {
                text: "Something went wrong. Please try again.",
                Icon: Jt
            })));
            try {
                yield u(), c(d => r(A, g(f({}, d), {
                    text: `Subscribed to ${e.name}`,
                    Icon: _n
                }))), n(), a.refetch(), t && i((d = []) => d.includes(t) ? d : [t, ...d], {
                    revalidate: !1
                }), ie(oe.FEED_ONE_CLICK_SUBSCRIBE, {
                    source: o,
                    publication_id: e.id
                })
            } catch (d) {
                console.error(d), c(_ => r(A, g(f({}, _), {
                    text: "There was an issue subscribing to this profile.",
                    Icon: Jt
                })))
            }
        })
    }
}

function Un() {
    return document.location.pathname.startsWith("/embed/")
}

function on(e) {
    var n;
    return `${[e.is_primary,((n=e.publication)==null?void 0:n.author_id)===e.user_id,e.role==="admin",e.role==="contributor"].map(o=>o?"0":"1").join("")}-${ro(e.created_at).valueOf()}`
}

function Si(e) {
    return e.slice(0).sort((t, n) => on(t) > on(n) ? 1 : -1)
}
const ki = {
        user: null,
        inbox: {
            threadList: [],
            threads: new Map,
            isLoading: !0,
            filter: "all",
            hasMore: !1
        },
        users: new Map,
        profiles: new Map,
        communityPosts: new Map,
        communityComments: new Map,
        chats: new Map,
        comments: new Map,
        replies: new Map,
        conversations: new Map,
        publications: new Map,
        notes: new Map
    },
    Ti = ce(() => Promise.resolve());

function Ei() {
    return j(Ti)
}
const xi = ce(ki);

function wl() {
    return j(xi)
}

function Ri({
    source: e
}) {
    const [t, n] = ua(), o = Pi({
        source: e
    }), s = a => z(this, null, function*() {
        const i = yield o.handleStart(a);
        return i instanceof Error ? !1 : (n(`/chat/${i.thread.id}`), !0)
    });
    return g(f({}, o), {
        handleStart: s
    })
}

function Pi({
    source: e
}) {
    const t = Ei(),
        n = Ze({
            pathname: "/api/v1/messages/dm/start",
            method: "POST"
        }),
        o = s => z(this, null, function*() {
            const a = yield n.refetch({
                json: {
                    user_ids: s,
                    source: e
                }
            });
            return a instanceof Error || t({
                type: "conversation-load_more",
                payload: {
                    edge: "before",
                    cursor: null,
                    page: a
                }
            }), a
        });
    return g(f({}, n), {
        handleStart: o
    })
}

function Ii(e) {
    const t = ee(),
        {
            onboardingModalRef: n
        } = Lt();
    return (o, s) => a => {
        var i, c;
        if (!t) {
            if (!n.current) return;
            a.preventDefault(), s ? (i = n.current) == null || i.openForPub(o, s) : (c = n.current) == null || c.openToPubSignup(o);
            return
        }
        xe(o, e)
    }
}
const Mi = "_publicationPopover_1ypz6_4",
    Li = "_breakOut_1ypz6_8",
    Bi = "_hoverCardAvatar_1ypz6_12 _breakOut_1ypz6_8",
    Oi = "_hoverCardTitle_1ypz6_28",
    zi = "_writesCard_1ypz6_32",
    Ai = "_hoverCardSeeAll_1ypz6_36",
    Ni = "_profileHoverCardZone_1ypz6_45",
    Di = "_profileHoverCardTarget_1ypz6_50",
    Ui = "_publicationHoverCardTarget_1ypz6_51",
    Hi = "_inline_1ypz6_55",
    Fi = "_profileHoverCard_1ypz6_45",
    $i = "_publicationHoverCard_1ypz6_51",
    Vi = "_profileHoverCardHeader_1ypz6_65",
    Wi = "_profileHoverCardNameRow_1ypz6_73",
    qi = "_facepileFace_1ypz6_81",
    F = {
        publicationPopover: Mi,
        breakOut: Li,
        hoverCardAvatar: Bi,
        hoverCardTitle: Oi,
        writesCard: zi,
        hoverCardSeeAll: Ai,
        profileHoverCardZone: Ni,
        profileHoverCardTarget: Di,
        publicationHoverCardTarget: Ui,
        inline: Hi,
        profileHoverCard: Fi,
        publicationHoverCard: $i,
        profileHoverCardHeader: Vi,
        profileHoverCardNameRow: Wi,
        facepileFace: qi
    },
    vl = s => {
        var a = s,
            {
                publication_id: e,
                inline: t,
                utmSource: n
            } = a,
            o = x(a, ["publication_id", "inline", "utmSource"]);
        return r(Eo, f({
            className: P(F.publicationHoverCardTarget, t && F.inline),
            content: r(Ki, {
                publicationId: e,
                utmSource: n
            }),
            onFetch: () => Rr(`/api/v1/publication/public/${e}`),
            layerClassName: F.publicationHoverCard
        }, o))
    };

function Ki({
    publicationId: e,
    utmSource: t
}) {
    const {
        data: n
    } = Mt(`/api/v1/publication/public/${e}`), o = ee();
    if (!n) return r(Ji, null);
    const {
        pub: s
    } = n;
    ie(oe.PUBLICATION_HOVER_CARD_SHOWN, {
        publication_id: s.id
    });
    let a = s.contributors,
        i = null;
    return a && a.length > 3 && (i = `See all (${Et(a.length)})`, a = a.slice(0, 3)), r(O, {
        gap: 16,
        padding: 8
    }, r(Yi, {
        pub: n.pub,
        url: n.pub.base_url
    }), r(Zi, {
        isContr: n.isContributor,
        isSubs: n.isSubscribed,
        pub: n.pub,
        user: o,
        utmSource: t
    }), r(ht, null), r(Xi, {
        contributors: a,
        seeAllLabel: i,
        redirLink: n.pub.base_url,
        utmSource: t
    }))
}

function Yi({
    url: e,
    pub: t
}) {
    var i, c, l, u;
    const n = t.name || "",
        o = (i = t.subdomain) != null ? i : "",
        s = (c = t.hero_text) != null ? c : "",
        a = (u = (l = t.rankingDetail) != null ? l : t.rankingDetailFreeSubscriberCount) != null ? u : void 0;
    return r(O, {
        gap: 8
    }, r(J, {
        gap: 12,
        alignItems: "center"
    }, r(O, {
        gap: 2,
        flex: "grow"
    }, r(Re, {
        href: e
    }, r(T.H4, null, n)), r(Re, {
        href: e
    }, r(T.Meta, null, `@${o}`))), r("a", {
        href: e
    }, r(Rt, {
        pub: t,
        size: 64
    }))), s && r(T.B3, {
        clamp: 3
    }, s), a && r(T.Meta, {
        ellipsis: !0
    }, a.toUpperCase()))
}

function Zi({
    isContr: e,
    isSubs: t,
    pub: n,
    user: o,
    utmSource: s
}) {
    const a = Ii("profile");
    return e ? null : r(O, {
        flex: "grow"
    }, !e && t ? r(Gt, {
        priority: "secondary",
        fill: "outline",
        href: Zt(n, {
            user: o,
            addBase: !0,
            utm_source: s || We.pubHoverCard,
            utm_medium: ft.web,
            utm_campaign: Xt.profilePage
        }),
        leftIcon: r(_n, null)
    }, "Subscribed") : r(Gt, {
        priority: "primary",
        href: Zt(n, {
            user: o,
            addBase: !0,
            utm_source: s || We.pubHoverCard,
            utm_medium: ft.web,
            utm_campaign: Xt.profilePage
        }),
        onClick: a(n)
    }, "Subscribe"))
}

function Xi({
    contributors: e,
    seeAllLabel: t,
    redirLink: n,
    utmSource: o
}) {
    return r(O, null, r(Hn, {
        sectionTitle: "Written by",
        seeAllLabel: t,
        link: `${n}/about?sort=people`
    }), r(O, null, e.map(s => r(Gi, {
        profile: s,
        utmSource: o
    }))))
}

function Gi({
    profile: e,
    utmSource: t
}) {
    return r("a", {
        href: so(e.user_id, e.name, {
            searchParams: {
                utm_source: t
            }
        }),
        className: F.hoverCardAvatar
    }, r(fn, {
        user: e,
        size: 32
    }), r(T, {
        font: "text",
        weight: "semibold",
        size: 14,
        lineHeight: 20
    }, e.name))
}

function Ji() {
    return r(O, {
        padding: 8,
        gap: 8
    }, r(De, {
        size: 56,
        style: {
            borderRadius: 4
        }
    }), r(De, {
        type: "bar",
        width: "100%",
        height: 20
    }), r(De, {
        type: "bar",
        width: "20%",
        height: 20
    }), r(De, {
        type: "bar",
        width: "60%",
        height: 20
    }))
}

function Hn({
    sectionTitle: e,
    seeAllLabel: t,
    link: n
}) {
    return r(J, {
        justifyContent: "space-between"
    }, r(T.Meta, {
        color: "secondary"
    }, e), t && r("a", {
        className: F.hoverCardSeeAll,
        href: n
    }, r(T.B4, {
        color: "accent-cyan"
    }, t)))
}

function yl(o) {
    var s = o,
        {
            children: e,
            disabled: t
        } = s,
        n = x(s, ["children", "disabled"]);
    return t || xt() || Un() ? r(G, null, e) : r(Qi, f({}, n), e)
}

function Qi(i) {
    var c = i,
        {
            className: e,
            children: t,
            subject: n,
            placement: o = "right-center",
            utmSource: s
        } = c,
        a = x(c, ["className", "children", "subject", "placement", "utmSource"]);
    var m, b;
    const [l, u] = Ke(!1), d = ji((m = n.slug) != null ? m : ao(n), {
        auto: l
    }), _ = d.data, p = pn(f({
        className: F.profileHoverCard,
        loading: d.isLoading,
        hideOnScroll: !0,
        onOpen: () => {
            u(!0)
        },
        layerOptions: {
            placement: o
        },
        content: _ ? r(Ot, {
            profile: _,
            subject: n,
            utmSource: s,
            forceRefresh: () => d.mutate()
        }) : null
    }, a));
    return r(Fn, g(f({
        className: e
    }, p.hoverProps), {
        forwardRef: (b = p.triggerProps) == null ? void 0 : b.ref
    }), t, p.layer)
}

function Fn(s) {
    var a = s,
        {
            inline: e,
            className: t,
            forwardRef: n
        } = a,
        o = x(a, ["inline", "className", "forwardRef"]);
    return r("div", f({
        className: P("profile-hover-card-target", F.profileHoverCardTarget, e && F.inline, t),
        ref: n
    }, o))
}

function ji(e, t) {
    return Mt(`/api/v1/user/${e}/public_profile`, t)
}
const rn = 3,
    sn = 1;

function ec(e) {
    return !!(e.id && e.name)
}

function tc(s) {
    var a = s,
        {
            dontStopPropagation: e,
            inline: t,
            children: n
        } = a,
        o = x(a, ["dontStopPropagation", "inline", "children"]);
    var c;
    const i = $n(o);
    return xt() || Un() ? r(G, null, n) : r(Fn, g(f({
        className: o.className,
        inline: t,
        forwardRef: (c = i.triggerProps) == null ? void 0 : c.ref
    }, i.hoverProps), {
        onClick: l => {
            e || l.stopPropagation()
        }
    }), n, i.layer)
}

function $n(s) {
    var a = s,
        {
            subject: e,
            utmSource: t,
            placement: n
        } = a,
        o = x(a, ["subject", "utmSource", "placement"]);
    const {
        loading: i,
        refetch: c,
        viewerProfile: l,
        subjectProfile: u
    } = No({
        subjectId: (e == null ? void 0 : e.author_id) || (e == null ? void 0 : e.user_id) || (e == null ? void 0 : e.id),
        subjectName: (e == null ? void 0 : e.name) || "Substack user",
        delayLoading: !0
    }), d = e && l && (e == null ? void 0 : e.id) === l.id, _ = e == null ? void 0 : e.id, p = He(() => {
        var S;
        _ && !u && c(_);
        const b = (((S = u == null ? void 0 : u.publicationUsers) == null ? void 0 : S.length) || 0) > 0;
        u && ie(oe.ACCOUNT_CARD_SHOWN, {
            profile_user_id: u.id,
            is_self: !!d,
            has_publication: !!b
        })
    }, [c, _, u, d]), m = pn(f({
        className: F.profileHoverCard,
        onOpen: p,
        loading: i && !u,
        hideOnScroll: !0,
        layerOptions: {
            placement: n != null ? n : "right-center"
        },
        content: u ? r(Ot, {
            profile: u,
            subject: e,
            utmSource: t,
            forceRefresh: () => c(_)
        }) : null
    }, o));
    return xt() ? {
        layer: null,
        hoverProps: null,
        triggerProps: null
    } : m
}
const et = We.accountCard;

function nc(e) {
    let t = [];
    e && e.subscriptions && (t = lo(e.subscriptions.filter(o => !!o)));
    let n = null;
    return t.length > rn && (n = `See all (${Et(t.length)})`), t = t.slice(0, rn), {
        subscriptions: t,
        moreSubsLabel: n
    }
}

function oc(e) {
    let t = [];
    e && e.publicationUsers && (t = e.publicationUsers.filter(o => !!o), t = t && Si(t));
    let n = null;
    return t.length > sn && (n = `See all (${Et(t.length)})`), t = t.slice(0, sn), {
        publications: t,
        morePubsLabel: n
    }
}

function rc({
    pub: e,
    isWrites: t,
    isFounding: n,
    isPaid: o,
    utmSource: s
}) {
    const a = !!ee();
    if (!e) return null;
    const i = un(e, {
        params: {
            utm_source: s || et,
            utm_content: t ? qe.writes : qe.reads
        },
        signedIn: a
    });
    return r("a", {
        href: i,
        target: "_blank",
        onClick: () => {
            ie(t ? oe.ACCOUNT_CARD_WRITES_LINK_CLICKED : oe.ACCOUNT_CARD_READS_LINK_CLICKED), xe(e, "hover_profile")
        },
        className: F.hoverCardAvatar,
        rel: "noopener"
    }, r(Rt, {
        pub: e,
        size: 32,
        badgeType: n ? "founder" : o ? "subscribed" : null
    }), r(T.B4, {
        weight: "medium",
        title: e.name
    }, e.name))
}

function sc({
    pub: e,
    utmSource: t
}) {
    const n = un(e, {
            params: {
                utm_source: t || et,
                utm_content: qe.writes
            },
            signedIn: !!ee()
        }),
        o = fo(e);
    return r(O, {
        as: "a",
        href: n,
        target: "_blank",
        onClick: () => {
            ie(oe.ACCOUNT_CARD_WRITES_LINK_CLICKED), xe(e, "hover_profile")
        },
        rel: "noopener",
        padding: 12,
        gap: 12,
        className: F.writesCard,
        radius: "md"
    }, r(J, {
        gap: 12
    }, r(Rt, {
        pub: e,
        size: 40
    }), r(O, {
        flex: "grow",
        minWidth: 0,
        justifyContent: "center"
    }, r(T.B4, {
        weight: "semibold"
    }, e.name), o && r(T.B4, {
        translated: !0,
        color: "secondary"
    }, "By ", I18N.p(o)))), e.hero_text && r(T.B4, {
        color: "secondary",
        clamp: 3
    }, e.hero_text))
}

function ac({
    subject: e,
    subscriptions: t,
    moreSubsLabel: n,
    utmSource: o
}) {
    const {
        iString: s
    } = re();
    return r(O, null, r(Hn, {
        sectionTitle: s("Reads"),
        seeAllLabel: n,
        link: zt(e, {
            utmSource: o
        })
    }), r(O, null, t.map(a => r(rc, {
        pub: a.publication,
        isPaid: a.membership_state === "subscribed",
        isFounding: a.is_founding,
        utmSource: o
    }))))
}

function ic({
    publication: e,
    utmSource: t
}) {
    return e ? r(sc, {
        pub: e,
        utmSource: t
    }) : null
}

function cc({
    pub: e,
    profileId: t,
    isSubscribed: n,
    user: o,
    utmSource: s,
    forceRefreshCard: a
}) {
    const {
        iString: i
    } = re(), {
        isLoading: c,
        subscribe: l
    } = yi({
        publication: e,
        profileId: t,
        source: s != null ? s : "profile-card",
        onSuccess: () => {
            a()
        }
    }), u = e ? _o(e, {
        user: o,
        addBase: !0,
        params: {
            utm_source: s || et,
            utm_content: qe.subscribes,
            next: document.location.href
        }
    }) : "";
    return e && (n ? r(we, {
        priority: "secondary",
        href: u,
        onClick: () => {
            ie(oe.ACCOUNT_CARD_SUBSCRIBE_CLICKED), xe(e, "hover_profile")
        },
        title: e.name
    }, i("Subscribed")) : s === "feed" && o ? r(we, {
        onClick: d => {
            d.preventDefault(), l()
        },
        title: e.name,
        disabled: c
    }, i("Subscribe")) : r(we, {
        href: u,
        localNavigation: !1,
        onClick: () => {
            ie(oe.ACCOUNT_CARD_SUBSCRIBE_CLICKED), xe(e, "hover_profile")
        },
        title: e.name
    }, i("Subscribe")))
}

function lc({
    profile: e
}) {
    const {
        isFollowing: t,
        buttonProps: n
    } = Dn(e, "hover-card"), {
        iString: o
    } = re();
    return r(we, f({
        priority: t ? "secondary" : "primary"
    }, n), o(t ? "Following" : "Follow"))
}

function uc({
    profile: e
}) {
    const {
        isFollowing: t,
        buttonProps: n,
        css: o
    } = Dn(e, "hover-card");
    return r(go, f({
        priority: "tertiary"
    }, n), t ? r(Mn, null) : r(Ln, null))
}

function dc({
    profile: e
}) {
    const {
        isLoading: t,
        handleStart: n
    } = Ri({
        source: "profile"
    }), {
        iString: o
    } = re();
    return r(we, {
        priority: "secondary",
        onClick: () => n([e.id]),
        disabled: t
    }, o("Message"))
}

function Vn({
    subject: e,
    profile: t,
    url: n
}) {
    var l, u, d;
    const o = e.name || "",
        s = (l = t.handle) != null ? l : null,
        a = (u = t.bio) != null ? u : "",
        i = e.id || 0,
        c = (d = t.bestseller_tier) != null ? d : 0;
    return r(O, {
        gap: 8
    }, r(J, {
        gap: 12,
        alignItems: "center"
    }, r(O, {
        gap: 2,
        flex: "grow"
    }, r(Re, {
        href: n
    }, r(T.H4, null, o, !!c && !!i && r("span", {
        style: {
            whiteSpace: "nowrap",
            position: "relative",
            top: 2,
            left: 2
        }
    }, " ", r(Do, {
        inline: !0,
        tier: c,
        userId: i,
        tooltipOnHover: !0,
        size: "md"
    })))), s && r(Re, {
        href: n
    }, r(T.Meta, null, `@${s}`))), r("a", {
        href: n
    }, r(fn, {
        user: t,
        size: 64
    }))), a && r(T.B3, {
        clamp: 3
    }, a))
}

function Ue(e) {
    return r(O, f({
        flex: "grow"
    }, e))
}

function fc({
    subject: e,
    profile: t,
    utmSource: n,
    pub: o,
    forceRefresh: s
}) {
    const a = ee(),
        {
            iString: i
        } = re(),
        c = (e == null ? void 0 : e.id) === (a == null ? void 0 : a.id),
        l = c && t && !t.profile_set_up_at;
    return r(J, {
        flex: "grow",
        gap: 8
    }, l ? r(Ue, null, r(we, {
        href: uo({
            utmSource: n
        })
    }, i("Set up profile"))) : c ? null : r(J, {
        flex: "grow",
        gap: 8,
        paddingTop: 8
    }, o ? r(Ue, null, r(cc, {
        pub: o,
        isSubscribed: t.isSubscribed,
        user: a,
        profileId: t.id,
        utmSource: n,
        forceRefreshCard: s
    })) : r(Ue, null, r(lc, {
        profile: t
    })), t.can_dm && r(Ue, null, r(dc, {
        profile: t
    })), o && r(uc, {
        profile: t
    })))
}

function Ot({
    profile: e,
    subject: t,
    className: n,
    utmSource: o,
    forceRefresh: s
}) {
    var p;
    if (!e) return null;
    const {
        subscriptions: a,
        moreSubsLabel: i
    } = nc(e), {
        publications: c
    } = oc(e), l = zt(t, {
        utmSource: o
    }), u = e.primaryPublication && ((p = e.publicationUsers.find(m => {
        var b;
        return m.publication_id === ((b = e == null ? void 0 : e.primaryPublication) == null ? void 0 : b.id)
    })) == null ? void 0 : p.publication), d = c.length > 0, _ = a.length > 0 && !d;
    return r(qo, null, r("div", {
        className: n
    }, r(O, {
        gap: 8,
        padding: 8
    }, r(Vn, {
        profile: e,
        subject: t,
        url: l
    }), r(fc, {
        profile: e,
        pub: u,
        subject: t,
        utmSource: o,
        forceRefresh: s
    }), d && r(ic, {
        publication: u,
        utmSource: o
    }), _ && r(G, null, r(ht, {
        paddingY: 8
    }), r(ac, {
        subject: t,
        subscriptions: a,
        moreSubsLabel: i,
        utmSource: o
    })), e.mutualsContext && r(G, null, r(ht, {
        paddingY: 8
    }), r(_c, {
        mutualsContext: e.mutualsContext,
        utmSource: o
    })))))
}

function zt(e, {
    utmSource: t
} = {}) {
    const n = typeof window != "undefined" && window.location.href.startsWith(io());
    return ln(e, {
        noBase: n,
        utm_source: t || et
    })
}

function _c({
    mutualsContext: e,
    utmSource: t
}) {
    const {
        iString: s,
        iPlural: a
    } = re(), i = e.users.sort(c => c.photo_url ? 1 : -1);
    return i.length === 0 ? null : r(J, {
        alignItems: "center",
        gap: 12
    }, r(J, {
        style: {
            paddingLeft: 6
        }
    }, i.slice(0, 3).map(c => r(J, {
        as: "a",
        key: c.id,
        href: ln(c, {
            utm_source: We.profileCard
        })
    }, r(yo, {
        className: F.facepileFace,
        src: c.photo_url || co(c.id),
        size: 20
    })))), r(T.B4, {
        color: "secondary"
    }, e.type === "followers" && s("Followed by "), r(Pr, {
        array: i,
        limit: 3,
        formatter: c => r(Re, {
            href: zt(c, {
                utmSource: t
            })
        }, c.name)
    }), e.type === "subscribers" ? a(" subscribes", " subscribe", i.length) : "", "."))
}
const Sl = Object.freeze(Object.defineProperty({
    __proto__: null,
    ProfileCard: Ot,
    ProfileCardHeader: Vn,
    ProfileHoverCard: tc,
    isUserProfileish: ec,
    useProfileHoverCard: $n
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    Bn as $, qc as A, st as B, In as C, Fa as D, fa as E, Pr as F, Zc as G, Ka as H, ol as I, Fc as J, Hc as K, zc as L, Kc as M, il as N, Oc as O, De as P, Ua as Q, Wc as R, Ic as S, Qc as T, pl as U, at as V, Si as W, Mc as X, Ya as Y, Ha as Z, wl as _, ua as a, zn as a0, $a as a1, ul as a2, Ri as a3, yi as a4, dl as a5, Vc as a6, $c as a7, tl as a8, bl as a9, Ti as aA, xi as aB, An as aC, Yc as aD, Rn as aE, Pi as aF, Lc as aG, Sl as aH, nl as aa, _i as ab, ml as ac, ll as ad, Pc as ae, el as af, sl as ag, fi as ah, Cl as ai, vi as aj, la as ak, nn as al, fl as am, Ot as an, wi as ao, Rr as ap, Jc as aq, rl as ar, qa as as, bi as at, yl as au, _l as av, Un as aw, Ei as ax, ec as ay, ki as az, Mt as b, Bc as c, tc as d, vl as e, Nn as f, Lt as g, je as h, ai as i, gl as j, Gc as k, Dc as l, ca as m, qo as n, Dn as o, hl as p, Uc as q, Nc as r, Ac as s, Ii as t, cl as u, Xc as v, Na as w, Da as x, jc as y, al as z
};