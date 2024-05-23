var k = Object.defineProperty,
    O = Object.defineProperties;
var R = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty,
    N = Object.prototype.propertyIsEnumerable;
var P = (e, t, s) => t in e ? k(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s,
    A = (e, t) => {
        for (var s in t || (t = {})) M.call(t, s) && P(e, s, t[s]);
        if (V)
            for (var s of V(t)) N.call(t, s) && P(e, s, t[s]);
        return e
    },
    x = (e, t) => O(e, R(t));
var f = (e, t, s) => new Promise((n, a) => {
    var i = r => {
            try {
                l(s.next(r))
            } catch (o) {
                a(o)
            }
        },
        c = r => {
            try {
                l(s.throw(r))
            } catch (o) {
                a(o)
            }
        },
        l = r => r.done ? n(r.value) : Promise.resolve(r.value).then(i, c);
    l((s = s.apply(e, t)).next())
});
import {
    c as S
} from "./x-fc38e969.js";
import {
    o as m,
    b3 as L,
    aD as U,
    h as F,
    p as v,
    ck as J,
    cl as W,
    cj as C,
    cy as p,
    y as d,
    cZ as _,
    q,
    em as E
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    M as j
} from "./Metadata-be2b4cf2.js";
import {
    u as I
} from "./user-e16f1619.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b32a95d9-54d1-416b-913a-eec2f5835799", e._sentryDebugIdIdentifier = "sentry-dbid-b32a95d9-54d1-416b-913a-eec2f5835799")
    } catch (s) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const te = S("MessageCircle", [
    ["path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
        key: "vv11sd"
    }]
]);

function B(e) {
    const t = m(e);
    return t.current = e, L(() => (...s) => t.current(...s), [])
}

function g(e, t, {
    root: s,
    threshold: n = 0,
    rootMargin: a,
    disabled: i = !1
} = {}) {
    v(() => {
        if (typeof IntersectionObserver == "undefined" || !e.current || i) return;
        const c = new IntersectionObserver(r => {
            t(r.some(o => o.isIntersecting))
        }, {
            root: s,
            threshold: n,
            rootMargin: a
        });
        c.observe(e.current);

        function l() {
            c.disconnect()
        }
        return l
    }, [e, t, s, n, a, i])
}

function se(e, t, {
    root: s,
    threshold: n = 0,
    rootMargin: a,
    disabled: i = !1
} = {}) {
    const c = m(!1),
        l = U(r => {
            r && !c.current && (c.current = !0, t())
        }, [t, c]);
    g(e, l, {
        root: s,
        threshold: n,
        rootMargin: a,
        disabled: i || c.current
    })
}

function ne(e, t, s, {
    root: n,
    threshold: a = 0,
    rootMargin: i,
    disabled: c = !1,
    minVisibleDuration: l = 100
} = {}) {
    const r = m({
            firstVisibleTime: null,
            lastVisibleTime: null,
            fired: !1
        }),
        o = B(b => {
            const {
                current: u
            } = r;
            if (b) u.firstVisibleTime === null && (u.firstVisibleTime = Date.now(), t()), u.lastVisibleTime = Date.now();
            else if (u.firstVisibleTime !== null) {
                const y = u.lastVisibleTime ? Date.now() - u.lastVisibleTime : 0;
                u.lastVisibleTime != null && y >= l && !u.fired && (s(y), u.fired = !0)
            }
        });
    g(e, o, {
        root: n,
        threshold: a,
        rootMargin: i,
        disabled: c
    }), v(() => () => {
        r.current.lastVisibleTime !== null && o(!1)
    }, [])
}

function Z(e) {
    const [t, s] = F(!1);
    return v(() => {
        const n = () => {
            const a = C();
            s(a), e == null || e(a)
        };
        return J(n), () => {
            W(n)
        }
    }, [e]), t
}
const z = (e, t) => {
    const s = m();
    v(() => {
        s.current = e
    }, [e]), v(() => {
        function n() {
            s.current()
        }
        if (t !== null) {
            const a = setInterval(n, t);
            return () => clearInterval(a)
        }
    }, [t])
};

function ie({
    defaultState: e,
    shouldLoad: t = !0,
    shouldPoll: s = !1,
    activityToken: n,
    children: a
}) {
    return d($, {
        defaultState: e == null ? void 0 : e.activity,
        shouldLoad: t,
        shouldPoll: s,
        activityToken: n
    }, d(G, {
        shouldLoad: t
    }, a))
}
const h = p({
    lastViewedAt: null,
    activityUnreadCount: 0,
    activityUnreadAtMax: !1,
    refetch: () => f(void 0, null, function*() {
        return !0
    }),
    markAllAsRead: () => f(void 0, null, function*() {}),
    hasLoadedOnce: !1
});
h.displayName = "NotificationsContext";

function re() {
    return _(h)
}

function $({
    defaultState: e,
    shouldLoad: t = !0,
    shouldPoll: s = !1,
    activityToken: n,
    children: a
}) {
    const i = I({
            pathname: "/api/v1/activity/unread",
            deps: [],
            auto: t,
            initialResult: e,
            query: {
                token: n
            }
        }),
        c = !Z(),
        l = () => f(this, null, function*() {
            const o = yield q("/api/v1/activity/unread", {
                method: "post",
                json: {
                    after: new Date().toISOString(),
                    token: n
                }
            });
            i.setResult(o)
        });
    z(() => f(this, null, function*() {
        var o;
        if (s && t && C()) {
            const b = ((o = i.result) == null ? void 0 : o.count) || 0,
                u = yield i.refetch(), y = !(u instanceof Error) && u.count || 0;
            if (b !== y) return !0
        }
    }), 6e4);
    const r = i.result != null ? i.result.count : 0;
    return v(() => {
        var o;
        try {
            (o = navigator.setAppBadge) == null || o.call(navigator, r)
        } catch (b) {
            console.warn(b)
        }
    }, [r]), d(h.Provider, {
        value: {
            lastViewedAt: i.result != null ? i.result.lastViewedAt : null,
            activityUnreadCount: r,
            activityUnreadAtMax: i.result != null ? i.result.max : !1,
            refetch: i.refetch,
            markAllAsRead: l,
            hasLoadedOnce: i.hasLoadedOnce
        }
    }, d(j, {
        badge: c ? r : void 0
    }), a)
}
const T = {
        count: 0,
        max: !1,
        refetch: () => f(void 0, null, function*() {
            return !0
        }),
        markAllAsRead: () => f(void 0, null, function*() {}),
        hasLoadedOnce: !1
    },
    w = p(T);
w.displayName = "SavedPostsContext";

function ae() {
    return _(w)
}

function G({
    shouldLoad: e = !0,
    children: t
}) {
    const s = I({
            pathname: "/api/v1/posts/saved/unread-count",
            deps: [],
            auto: e,
            initialResult: T
        }),
        n = () => s.refetch({
            method: "PUT"
        });
    return d(w.Provider, {
        value: x(A({}, s.result), {
            refetch: s.refetch,
            markAllAsRead: n,
            hasLoadedOnce: s.hasLoadedOnce
        })
    }, t)
}
const D = p(null);

function oe({
    root: e,
    children: t
}) {
    const s = m(e);
    return d(D.Provider, {
        value: s
    }, t, !e && d("div", {
        ref: s
    }))
}

function ce({
    children: e
}) {
    const t = _(D).current;
    return t ? E(e, t) : null
}
export {
    te as M, ie as N, ce as P, se as a, re as b, ae as c, ne as d, oe as e, z as u
};