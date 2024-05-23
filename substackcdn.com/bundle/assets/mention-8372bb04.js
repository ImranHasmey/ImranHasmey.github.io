var k = Object.defineProperty,
    v = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var _ = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty,
    q = Object.prototype.propertyIsEnumerable;
var M = (e, s, o) => s in e ? k(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[s] = o,
    l = (e, s) => {
        for (var o in s || (s = {})) N.call(s, o) && M(e, o, s[o]);
        if (_)
            for (var o of _(s)) q.call(s, o) && M(e, o, s[o]);
        return e
    },
    p = (e, s) => v(e, w(s));
var m = (e, s, o) => new Promise((c, a) => {
    var i = r => {
            try {
                n(o.next(r))
            } catch (f) {
                a(f)
            }
        },
        t = r => {
            try {
                n(o.throw(r))
            } catch (f) {
                a(f)
            }
        },
        n = r => r.done ? c(r.value) : Promise.resolve(r.value).then(i, t);
    n((o = o.apply(e, s)).next())
});
import {
    a5 as S,
    y as u,
    iE as d
} from "./tracking-376cff7a.js";
import {
    r as P
} from "./_baseEach-63ad03e0.js";
import {
    P as C
} from "./profile-a781fd85.js";
import {
    d as I,
    e as D
} from "./ProfileHoverCard-c8bfb61a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            s = new Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "47d54e99-5385-4a39-991e-9bf5651e1a85", e._sentryDebugIdIdentifier = "sentry-dbid-47d54e99-5385-4a39-991e-9bf5651e1a85")
    } catch (o) {}
})();
const A = "_mention_1qvs5_1",
    b = {
        mention: A
    },
    j = ({
        id: e,
        type: s,
        name: o,
        url: c,
        photo_url: a,
        uuid: i,
        mentionText: t,
        isStatic: n = !1,
        isEditorContext: r = !1
    }) => n ? u("span", {
        className: b.mention,
        "data-component-name": "MentionStatic"
    }, u("a", {
        href: d(s, e, o, c)
    }, o || "Substack user")) : s === "user" ? u(C, null, u(I, {
        subject: {
            id: e,
            name: o || "Substack user",
            photo_url: a
        },
        utmSource: "mention"
    }, u("a", {
        className: b.mention,
        href: r ? void 0 : d(s, e, o, c),
        target: "_blank",
        rel: "noopener",
        "data-attrs": JSON.stringify({
            name: o,
            id: e,
            type: s,
            url: c,
            photo_url: a,
            uuid: i
        }),
        onClick: h => h.stopPropagation(),
        "data-component-name": "MentionUser"
    }, t != null ? t : o))) : s === "pub" ? u(D, {
        publication_id: e,
        utmSource: "mention"
    }, u("a", {
        className: b.mention,
        href: c,
        target: "_blank",
        rel: "noopener",
        "data-attrs": JSON.stringify({
            name: o,
            id: e,
            type: s,
            url: r ? void 0 : d(s, e, o, c),
            uuid: i
        }),
        onClick: f => f.stopPropagation(),
        "data-component-name": "MentionPub"
    }, t != null ? t : o)) : u("a", {
        className: b.mention,
        target: "_blank",
        rel: "noopener",
        href: d(s, e, o, c),
        "data-attrs": JSON.stringify({
            name: o,
            id: e,
            type: s,
            url: c,
            photo_url: a,
            uuid: i
        }),
        "data-component-name": "Mention"
    }, t != null ? t : o),
    y = {},
    E = (o, ...c) => m(void 0, [o, ...c], function*(e, {
        pathname: s = "/api/v1/posts/mention"
    } = {}) {
        if (y[e]) return y[e];
        const a = yield P.get(s).query({
            query: e
        }), {
            profiles: i,
            publications: t
        } = a.body, n = new Map;
        return i && i.length && n.set("Writers", i.map(r => p(l({}, r), {
            type: "user"
        }))), t && t.length && n.set("Publications", t == null ? void 0 : t.map(r => p(l({}, r), {
            type: "pub",
            url: S({
                subdomain: r.subdomain
            }),
            photo_url: r.logo_url
        }))), y[e] = n, n
    }),
    g = {},
    K = (o, ...c) => m(void 0, [o, ...c], function*(e, {
        pathname: s = "/api/v1/community/mention"
    } = {}) {
        const a = `${s}-${e}`;
        if (g[a]) return g[a];
        const i = yield P.get(s).query({
            query: e
        }), {
            results: t
        } = i.body, n = new Map;
        return t && n.set("Writers", t.map(r => p(l({}, r), {
            type: "user",
            id: r.user_id
        }))), g[a] = n, n
    });
export {
    j as M, K as c, E as m
};