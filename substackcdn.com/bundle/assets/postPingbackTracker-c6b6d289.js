var R = Object.defineProperty,
    A = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty,
    F = Object.prototype.propertyIsEnumerable;
var S = Math.pow,
    T = (t, n, e) => n in t ? R(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : t[n] = e,
    E = (t, n) => {
        for (var e in n || (n = {})) D.call(n, e) && T(t, e, n[e]);
        if (k)
            for (var e of k(n)) F.call(n, e) && T(t, e, n[e]);
        return t
    },
    w = (t, n) => A(t, M(n));
import {
    cy as L,
    o as v,
    aD as I,
    t as V,
    E as O,
    gs as U,
    p as H,
    y as x,
    bH as $,
    cZ as B
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "323f2712-e602-4a7a-8db9-d9a869623bfc", t._sentryDebugIdIdentifier = "sentry-dbid-323f2712-e602-4a7a-8db9-d9a869623bfc")
    } catch (e) {}
})();
const K = (t, n) => {
        if (!t) return 0;
        const {
            scrollHeight: e,
            clientHeight: a
        } = t, r = (e - a) * (n / 100);
        return Math.min(r, Math.max(0, e - a))
    },
    m = (t, n) => {
        var p, u, h, b;
        const {
            scrollTop: e,
            scrollHeight: a,
            clientHeight: r
        } = n ? {
            scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
            scrollHeight: (p = t == null ? void 0 : t.scrollHeight) != null ? p : 0,
            clientHeight: window.innerHeight
        } : {
            scrollTop: (u = t == null ? void 0 : t.scrollTop) != null ? u : 0,
            scrollHeight: (h = t == null ? void 0 : t.scrollHeight) != null ? h : 0,
            clientHeight: (b = t == null ? void 0 : t.clientHeight) != null ? b : 0
        };
        return !a || !r ? {
            top: 0,
            bottom: 0
        } : a === r ? {
            top: 0,
            bottom: 100
        } : {
            top: Math.min(100, e / (a - r) * 100),
            bottom: Math.min(100, (e + r) / a * 100)
        }
    },
    G = 10,
    X = 1e3,
    q = 3,
    J = {
        1: 30,
        2: 20,
        3: 10
    },
    y = L({
        startInterval: () => {},
        stopInterval: () => {},
        trackInterval: () => {},
        getCurrentUuid: () => ""
    });
y.displayName = "PostPingbackTrackerContext";

function Q({
    children: t
}) {
    const n = v(null),
        e = v(null),
        a = v({
            top: 0,
            bottom: 0
        }),
        r = v(null),
        p = I(() => {
            if (r.current) {
                const {
                    uuid: c,
                    postId: o,
                    containerElementRef: s,
                    elementIsStatic: l,
                    phase: d,
                    count: i
                } = r.current;
                if (d && d > q) {
                    u();
                    return
                }
                if (i && i >= J[d]) {
                    b();
                    return
                }
                r.current.count = i + 1;
                const f = s != null && s.current ? m(s.current, l != null ? l : !1) : a.current,
                    g = f.top.toFixed(2),
                    P = f.bottom.toFixed(2);
                V(O.POST_PINGBACK_SEEN, {
                    tracker_uuid: c,
                    post_id: o,
                    top_scroll_percentage: g,
                    bottom_scroll_percentage: P,
                    phase: d,
                    count: i + 1
                }), e.current !== g && (e.current = g, fetch(`/api/v1/posts/${o}/progress?type=read&progress=${f.top/100}`, {
                    method: "POST"
                }).catch(N => {
                    console.error("Failed to mark post progress:", N)
                }))
            }
        }, []),
        u = I(() => {
            n.current && (clearInterval(n.current), n.current = null)
        }, []),
        h = () => {
            var c, o;
            return S(G, (o = (c = r.current) == null ? void 0 : c.phase) != null ? o : 1) * X
        },
        b = () => {
            u(), r.current && (r.current.phase += 1, r.current.count = 0), n.current = setInterval(p, h())
        },
        _ = I(({
            postId: c,
            containerElementRef: o,
            elementIsStatic: s,
            phase: l = 1,
            count: d = 0
        }) => {
            var i;
            typeof window == "undefined" || !c || !o || (((i = r.current) == null ? void 0 : i.postId) !== c && (r.current = {
                uuid: U(),
                postId: c,
                containerElementRef: o,
                elementIsStatic: s,
                phase: l,
                count: d
            }), u(), n.current = setInterval(p, h()))
        }, [p, u]),
        C = I(() => {
            var c;
            return ((c = r.current) == null ? void 0 : c.uuid) || ""
        }, []);
    return H(() => {
        const c = () => {
            var o, s, l, d, i, f, g;
            document.hidden ? (p(), u()) : (o = r.current) != null && o.postId && ((s = r.current) != null && s.containerElementRef) && _({
                postId: (l = r.current) == null ? void 0 : l.postId,
                containerElementRef: (d = r.current) == null ? void 0 : d.containerElementRef,
                elementIsStatic: (i = r.current) == null ? void 0 : i.elementIsStatic,
                phase: (f = r.current) == null ? void 0 : f.phase,
                count: (g = r.current) == null ? void 0 : g.count
            })
        };
        return document.addEventListener("visibilitychange", c), () => {
            p(), r.current = null, u(), document.removeEventListener("visibilitychange", c)
        }
    }, [_, u]), H(() => {
        const c = o => {
            var d, i, f, g, P;
            const s = (i = (d = r.current) == null ? void 0 : d.containerElementRef) == null ? void 0 : i.current,
                l = (f = r.current) == null ? void 0 : f.elementIsStatic;
            s && o.target === s && (P = (g = r.current) == null ? void 0 : g.containerElementRef) != null && P.current && (a.current = m(s, l != null ? l : !1))
        };
        return window.addEventListener("scroll", c, !0), () => {
            window.removeEventListener("scroll", c, !0)
        }
    }, [_, u]), x(y.Provider, {
        value: {
            startInterval: _,
            stopInterval: u,
            trackInterval: p,
            getCurrentUuid: C
        }
    }, t)
}

function W() {
    return B(y)
}

function Y(t) {
    const n = $((e, a) => {
        const r = W();
        return x(t, w(E(E({}, r), e), {
            ref: a
        }))
    });
    return n.displayName = `withPostPingbackTrackerContext(${t.displayName||t.name||"Anonymous"})`, n
}
export {
    Q as P, K as c, W as u, Y as w
};