var C = Object.defineProperty,
    L = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var d = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty,
    P = Object.prototype.propertyIsEnumerable;
var p = (e, t, n) => t in e ? C(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    a = (e, t) => {
        for (var n in t || (t = {})) y.call(t, n) && p(e, n, t[n]);
        if (d)
            for (var n of d(t)) P.call(t, n) && p(e, n, t[n]);
        return e
    },
    c = (e, t) => L(e, _(t));
var w = (e, t) => {
    var n = {};
    for (var s in e) y.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
    if (e != null && d)
        for (var s of d(e)) t.indexOf(s) < 0 && P.call(e, s) && (n[s] = e[s]);
    return n
};
var S = (e, t, n) => new Promise((s, o) => {
    var l = r => {
            try {
                i(n.next(r))
            } catch (g) {
                o(g)
            }
        },
        u = r => {
            try {
                i(n.throw(r))
            } catch (g) {
                o(g)
            }
        },
        i = r => r.done ? s(r.value) : Promise.resolve(r.value).then(l, u);
    i((n = n.apply(e, t)).next())
});
import {
    cy as v,
    b3 as m,
    y as f,
    bH as D,
    cZ as I,
    h as F,
    aD as N,
    q as j
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8e12767d-a3f3-4498-95fe-9b6c996da11e", e._sentryDebugIdIdentifier = "sentry-dbid-8e12767d-a3f3-4498-95fe-9b6c996da11e")
    } catch (n) {}
})();
const b = v({
    country: "US"
});
b.displayName = "LocaleContext";

function q() {
    return I(b)
}

function z(n) {
    var s = n,
        {
            children: e
        } = s,
        t = w(s, ["children"]);
    const o = m(() => t, Object.values(t));
    return f(b.Provider, {
        value: o
    }, e)
}

function A(e) {
    const t = D((n, s) => {
        const o = q();
        return f(e, c(a(a({}, o), n), {
            ref: s
        }))
    });
    return t.displayName = `withLocaleContext(${e.displayName||e.name||"Anonymous"})`, t
}
var U;
const G = typeof window != "undefined" ? (U = window._preloads) == null ? void 0 : U.publicationUserSettings : {},
    h = e => ({
        getSettingForPubUser: n => {
            if (!n || !e) return null;
            const s = e[n];
            return s === void 0 ? null : s
        }
    }),
    x = v(c(a({}, h(G)), {
        changeUserSetting: () => Promise.resolve(void 0)
    }));
x.displayName = "PublicationUserSettingsContext";

function E({
    preloadPubUserSettings: e = {},
    children: t
}) {
    const [n, s] = F(e), o = N((u, i) => S(this, null, function*() {
        s(r => c(a({}, r), {
            [u]: i
        }));
        try {
            yield j("/api/v1/publication_user_settings/user", {
                method: "PUT",
                json: {
                    type: u,
                    value: i
                }
            })
        } catch (r) {
            console.error(r)
        }
    }), [s]), l = m(() => c(a({}, h(n)), {
        changeUserSetting: o
    }), [n, o]);
    return f(x.Provider, {
        value: l
    }, t)
}
export {
    z as L, E as P, b as a, A as w
};