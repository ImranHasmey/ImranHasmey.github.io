var ue = Object.defineProperty,
    fe = Object.defineProperties;
var le = Object.getOwnPropertyDescriptors;
var x = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty,
    Y = Object.prototype.propertyIsEnumerable;
var q = (e, r, t) => r in e ? ue(e, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[r] = t,
    C = (e, r) => {
        for (var t in r || (r = {})) K.call(r, t) && q(e, t, r[t]);
        if (x)
            for (var t of x(r)) Y.call(r, t) && q(e, t, r[t]);
        return e
    },
    k = (e, r) => fe(e, le(r));
var H = (e, r) => {
    var t = {};
    for (var o in e) K.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
    if (e != null && x)
        for (var o of x(e)) r.indexOf(o) < 0 && Y.call(e, o) && (t[o] = e[o]);
    return t
};
var O = (e, r, t) => new Promise((o, s) => {
    var u = n => {
            try {
                c(t.next(n))
            } catch (i) {
                s(i)
            }
        },
        g = n => {
            try {
                c(t.throw(n))
            } catch (i) {
                s(i)
            }
        },
        c = n => n.done ? o(n.value) : Promise.resolve(n.value).then(u, g);
    c((t = t.apply(e, r)).next())
});
import {
    eS as pe,
    by as E,
    y as w,
    cy as ge,
    h as B,
    aD as b,
    cZ as he,
    f0 as N,
    q as G,
    p as de
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    S as Q
} from "./FlexBox-1a755411.js";
import {
    a as ve
} from "./user-e16f1619.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            r = new Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "a7577ae6-b40b-459b-801e-8f98377575cf", e._sentryDebugIdIdentifier = "sentry-dbid-a7577ae6-b40b-459b-801e-8f98377575cf")
    } catch (t) {}
})();
var R = Pe(),
    me = $e(),
    _e = ye(),
    we = typeof window != "undefined" ? window : pe,
    A = {
        assign: R,
        create: me,
        trim: _e,
        bind: Se,
        slice: U,
        each: X,
        map: Le,
        pluck: W,
        isList: Z,
        isFunction: Fe,
        isObject: xe,
        Global: we
    };

function Pe() {
    return Object.assign ? Object.assign : function(r, t, o, s) {
        for (var u = 1; u < arguments.length; u++) X(Object(arguments[u]), function(g, c) {
            r[c] = g
        });
        return r
    }
}

function $e() {
    if (Object.create) return function(r, t, o, s) {
        var u = U(arguments, 1);
        return R.apply(this, [Object.create(r)].concat(u))
    }; {
        let e = function() {};
        return function(t, o, s, u) {
            var g = U(arguments, 1);
            return e.prototype = t, R.apply(this, [new e].concat(g))
        }
    }
}

function ye() {
    return String.prototype.trim ? function(r) {
        return String.prototype.trim.call(r)
    } : function(r) {
        return r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
}

function Se(e, r) {
    return function() {
        return r.apply(e, Array.prototype.slice.call(arguments, 0))
    }
}

function U(e, r) {
    return Array.prototype.slice.call(e, r || 0)
}

function X(e, r) {
    W(e, function(t, o) {
        return r(t, o), !1
    })
}

function Le(e, r) {
    var t = Z(e) ? [] : {};
    return W(e, function(o, s) {
        return t[s] = r(o, s), !1
    }), t
}

function W(e, r) {
    if (Z(e)) {
        for (var t = 0; t < e.length; t++)
            if (r(e[t], t)) return e[t]
    } else
        for (var o in e)
            if (e.hasOwnProperty(o) && r(e[o], o)) return e[o]
}

function Z(e) {
    return e != null && typeof e != "function" && typeof e.length == "number"
}

function Fe(e) {
    return e && {}.toString.call(e) === "[object Function]"
}

function xe(e) {
    return e && {}.toString.call(e) === "[object Object]"
}
var _ = A,
    be = _.slice,
    Ee = _.pluck,
    $ = _.each,
    Ae = _.bind,
    Ce = _.create,
    I = _.isList,
    M = _.isFunction,
    ke = _.isObject,
    j = {
        createStore: z
    },
    Oe = {
        version: "2.0.12",
        enabled: !1,
        get: function(e, r) {
            var t = this.storage.read(this._namespacePrefix + e);
            return this._deserialize(t, r)
        },
        set: function(e, r) {
            return r === void 0 ? this.remove(e) : (this.storage.write(this._namespacePrefix + e, this._serialize(r)), r)
        },
        remove: function(e) {
            this.storage.remove(this._namespacePrefix + e)
        },
        each: function(e) {
            var r = this;
            this.storage.each(function(t, o) {
                e.call(r, r._deserialize(t), (o || "").replace(r._namespaceRegexp, ""))
            })
        },
        clearAll: function() {
            this.storage.clearAll()
        },
        hasNamespace: function(e) {
            return this._namespacePrefix == "__storejs_" + e + "_"
        },
        createStore: function() {
            return z.apply(this, arguments)
        },
        addPlugin: function(e) {
            this._addPlugin(e)
        },
        namespace: function(e) {
            return z(this.storage, this.plugins, e)
        }
    };

function Ge() {
    var e = typeof console == "undefined" ? null : console;
    if (e) {
        var r = e.warn ? e.warn : e.log;
        r.apply(e, arguments)
    }
}

function z(e, r, t) {
    t || (t = ""), e && !I(e) && (e = [e]), r && !I(r) && (r = [r]);
    var o = t ? "__storejs_" + t + "_" : "",
        s = t ? new RegExp("^" + o) : null,
        u = /^[a-zA-Z0-9_\-]*$/;
    if (!u.test(t)) throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");
    var g = {
            _namespacePrefix: o,
            _namespaceRegexp: s,
            _testStorage: function(n) {
                try {
                    var i = "__storejs__test__";
                    n.write(i, i);
                    var a = n.read(i) === i;
                    return n.remove(i), a
                } catch (l) {
                    return !1
                }
            },
            _assignPluginFnProp: function(n, i) {
                var a = this[i];
                this[i] = function() {
                    var f = be(arguments, 0),
                        h = this;

                    function v() {
                        if (a) return $(arguments, function(d, m) {
                            f[m] = d
                        }), a.apply(h, f)
                    }
                    var p = [v].concat(f);
                    return n.apply(h, p)
                }
            },
            _serialize: function(n) {
                return JSON.stringify(n)
            },
            _deserialize: function(n, i) {
                if (!n) return i;
                var a = "";
                try {
                    a = JSON.parse(n)
                } catch (l) {
                    a = n
                }
                return a !== void 0 ? a : i
            },
            _addStorage: function(n) {
                this.enabled || this._testStorage(n) && (this.storage = n, this.enabled = !0)
            },
            _addPlugin: function(n) {
                var i = this;
                if (I(n)) {
                    $(n, function(f) {
                        i._addPlugin(f)
                    });
                    return
                }
                var a = Ee(this.plugins, function(f) {
                    return n === f
                });
                if (!a) {
                    if (this.plugins.push(n), !M(n)) throw new Error("Plugins must be function values that return objects");
                    var l = n.call(this);
                    if (!ke(l)) throw new Error("Plugins must return an object of function properties");
                    $(l, function(f, h) {
                        if (!M(f)) throw new Error("Bad plugin property: " + h + " from plugin " + n.name + ". Plugins should only return functions.");
                        i._assignPluginFnProp(f, h)
                    })
                }
            },
            addStorage: function(n) {
                Ge("store.addStorage(storage) is deprecated. Use createStore([storages])"), this._addStorage(n)
            }
        },
        c = Ce(g, Oe, {
            plugins: []
        });
    return c.raw = {}, $(c, function(n, i) {
        M(n) && (c.raw[i] = Ae(c, n))
    }), $(e, function(n) {
        c._addStorage(n)
    }), $(r, function(n) {
        c._addPlugin(n)
    }), c
}
const gr = E(j);
var Ie = A,
    Me = Ie.Global,
    ee = {
        name: "localStorage",
        read: re,
        write: Be,
        each: Re,
        remove: Ue,
        clearAll: ze
    };

function y() {
    return Me.localStorage
}

function re(e) {
    return y().getItem(e)
}

function Be(e, r) {
    return y().setItem(e, r)
}

function Re(e) {
    for (var r = y().length - 1; r >= 0; r--) {
        var t = y().key(r);
        e(re(t), t)
    }
}

function Ue(e) {
    return y().removeItem(e)
}

function ze() {
    return y().clear()
}
const hr = E(ee);
var De = A,
    Je = De.Global,
    Te = {
        name: "sessionStorage",
        read: te,
        write: We,
        each: Ze,
        remove: Ve,
        clearAll: qe
    };

function S() {
    return Je.sessionStorage
}

function te(e) {
    return S().getItem(e)
}

function We(e, r) {
    return S().setItem(e, r)
}

function Ze(e) {
    for (var r = S().length - 1; r >= 0; r--) {
        var t = S().key(r);
        e(te(t), t)
    }
}

function Ve(e) {
    return S().removeItem(e)
}

function qe() {
    return S().clear()
}
var ne = A,
    Ke = ne.Global,
    Ye = ne.trim,
    He = {
        name: "cookieStorage",
        read: Ne,
        write: Qe,
        each: oe,
        remove: ae,
        clearAll: Xe
    },
    F = Ke.document;

function Ne(e) {
    if (!e || !ie(e)) return null;
    var r = "(?:^|.*;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
    return unescape(F.cookie.replace(new RegExp(r), "$1"))
}

function oe(e) {
    for (var r = F.cookie.split(/; ?/g), t = r.length - 1; t >= 0; t--)
        if (Ye(r[t])) {
            var o = r[t].split("="),
                s = unescape(o[0]),
                u = unescape(o[1]);
            e(u, s)
        }
}

function Qe(e, r) {
    e && (F.cookie = escape(e) + "=" + escape(r) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")
}

function ae(e) {
    !e || !ie(e) || (F.cookie = escape(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")
}

function Xe() {
    oe(function(e, r) {
        ae(r)
    })
}

function ie(e) {
    return new RegExp("(?:^|;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(F.cookie)
}
var se = {
        name: "memoryStorage",
        read: je,
        write: er,
        each: rr,
        remove: tr,
        clearAll: nr
    },
    P = {};

function je(e) {
    return P[e]
}

function er(e, r) {
    P[e] = r
}

function rr(e) {
    for (var r in P) P.hasOwnProperty(r) && e(P[r], r)
}

function tr(e) {
    delete P[e]
}

function nr(e) {
    P = {}
}
const dr = E(se);
var or = j,
    ar = [ee, Te, He, se],
    ir = [],
    sr = or.createStore(ar, ir);
const L = E(sr),
    D = "substack_ref_url",
    ce = "substack_ref";
let J, T;
typeof window != "undefined" && window.location && window.location.href && (J = window.location.href, T = document.referrer, L.get(D) || (L.set(D, J), L.set(ce, T)));
const vr = L.get(D),
    mr = L.get(ce),
    _r = J,
    wr = T,
    Pr = t => {
        var o = t,
            {
                fill: e = "#FF6719"
            } = o,
            r = H(o, ["fill"]);
        return w(Q, k(C({}, r), {
            fill: e,
            name: "UserBadgeIcon",
            svgParams: {
                viewBox: "0 0 40 40",
                height: 40,
                width: 40
            }
        }), w("path", {
            d: "M17.4385 1.2681C19.3988 0.456149 21.6012 0.45615 23.5615 1.2681L31.5807 4.58976C33.5409 5.40172 35.0983 6.95911 35.9102 8.91933L39.2319 16.9385C40.0439 18.8988 40.0439 21.1012 39.2319 23.0615L35.9102 31.0807C35.0983 33.0409 33.5409 34.5983 31.5807 35.4102L23.5615 38.7319C21.6012 39.5439 19.3988 39.5439 17.4385 38.7319L9.41933 35.4102C7.45911 34.5983 5.90171 33.0409 5.08976 31.0807L1.7681 23.0615C0.956149 21.1012 0.95615 18.8988 1.7681 16.9385L5.08976 8.91933C5.90172 6.95911 7.45911 5.40171 9.41933 4.58976L17.4385 1.2681Z",
            fill: e,
            stroke: "transparent"
        }), w("path", {
            d: "M27.1666 15L17.9999 24.1667L13.8333 20",
            stroke: "white",
            strokeWidth: "4",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }))
    },
    $r = e => w(Q, k(C({}, e), {
        name: "UserBadgeOutlineIcon",
        svgParams: {
            viewBox: "0 0 40 40",
            height: 40,
            width: 40
        }
    }), w("path", {
        d: "M17.8212 2.19198C19.5364 1.48152 21.4636 1.48152 23.1788 2.19198L31.198 5.51364C32.9132 6.2241 34.2759 7.58682 34.9864 9.30201L38.308 17.3212C39.0185 19.0364 39.0185 20.9636 38.308 22.6788L34.9864 30.698C34.2759 32.4132 32.9132 33.7759 31.198 34.4864L23.1788 37.808C21.4636 38.5185 19.5364 38.5185 17.8212 37.808L9.80201 34.4864C8.08682 33.7759 6.7241 32.4132 6.01364 30.698L2.69198 22.6788C1.98152 20.9636 1.98152 19.0364 2.69198 17.3212L6.01364 9.30201C6.7241 7.58682 8.08682 6.2241 9.80202 5.51364L17.8212 2.19198Z",
        stroke: "#FF6719",
        strokeWidth: "4",
        fill: "transparent"
    }), w("path", {
        d: "M27.1666 15L17.9999 24.1667L13.8333 20",
        stroke: "#FF6719",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })),
    V = ge({
        viewerProfile: {
            profile: null,
            loading: !1
        },
        setViewerProfile: () => {},
        profiles: new Map,
        setProfile: () => {}
    });
V.displayName = "ProfileContext";

function yr({
    value: e,
    handle: r,
    children: t
}) {
    const [o, s] = B({
        profile: null,
        loading: !1
    }), [u, g] = B(new Map(e ? [
        [r || e.id, {
            profile: e,
            loading: !1
        }]
    ] : [])), c = {
        viewerProfile: o,
        setViewerProfile: b((n, i) => {
            s(a => a.profile === n && a.loading === i ? a : {
                profile: n,
                loading: i
            })
        }, []),
        profiles: u,
        setProfile: b((n, i, a) => {
            g(l => {
                var h, v;
                if (((h = l.get(n)) == null ? void 0 : h.profile) === i && ((v = l.get(n)) == null ? void 0 : v.loading) === a) return l;
                const f = new Map(l);
                return f.set(n, {
                    profile: i,
                    loading: a
                }), f
            })
        }, [])
    };
    return w(V.Provider, {
        value: c
    }, t)
}

function Sr({
    subjectId: e,
    subjectName: r,
    delayLoading: t
}) {
    const o = ve(),
        {
            viewerProfile: s,
            setViewerProfile: u,
            profiles: g,
            setProfile: c
        } = he(V),
        [n, i] = B(null);
    if (typeof e == "string")
        if (e.includes("-")) {
            const p = e.split("-");
            e = p[0], r = p.slice(1).join("-")
        } else e.startsWith("@") && (e = e.slice(1));
    const a = g.get(e),
        l = b(p => O(this, null, function*() {
            u(s.profile, !0);
            const d = N(p.name, {
                hashIfEmpty: !0
            });
            try {
                const m = yield G(`/api/v1/user/${p.id}-${d}/public_profile/self`);
                u(m, !1)
            } catch (m) {
                m instanceof Error && i(m), u(null, !1)
            }
        }), [s, u, i]),
        f = a == null ? void 0 : a.profile,
        h = s.profile,
        v = b(p => O(this, null, function*() {
            !h && o && l(o), c(p, f, !0);
            try {
                const d = r && N(r, {
                        hashIfEmpty: !0
                    }),
                    m = yield d ? G(`/api/v1/user/${p}-${d}/public_profile`) : G(`/api/v1/user/${p}/public_profile`);
                c(p, m, !1)
            } catch (d) {
                d instanceof Error && i(d), c(p, f, !1)
            }
        }), [f, c, r, h, l, o]);
    return de(() => {
        !t && !(a != null && a.profile) && !(a != null && a.loading) && !n && v(e), !t && !s.loading && !s.profile && !n && o && l(o)
    }, [t, e, v, a, n, s, l, o]), {
        loading: !!(a != null && a.loading),
        viewerProfile: s.profile,
        subjectProfile: a == null ? void 0 : a.profile,
        refetch: v,
        error: n
    }
}
export {
    yr as P, gr as S, $r as U, mr as a, wr as b, _r as c, hr as d, dr as e, vr as f, Pr as g, L as s, Sr as u
};