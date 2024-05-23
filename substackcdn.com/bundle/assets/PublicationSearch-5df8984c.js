var X = Object.defineProperty,
    Y = Object.defineProperties;
var q = Object.getOwnPropertyDescriptors;
var I = Object.getOwnPropertySymbols;
var tt = Object.prototype.hasOwnProperty,
    et = Object.prototype.propertyIsEnumerable;
var U = (t, o, e) => o in t ? X(t, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : t[o] = e,
    R = (t, o) => {
        for (var e in o || (o = {})) tt.call(o, e) && U(t, e, o[e]);
        if (I)
            for (var e of I(o)) et.call(o, e) && U(t, e, o[e]);
        return t
    },
    w = (t, o) => Y(t, q(o));
var P = (t, o, e) => new Promise((l, a) => {
    var i = s => {
            try {
                c(e.next(s))
            } catch (r) {
                a(r)
            }
        },
        p = s => {
            try {
                c(e.throw(s))
            } catch (r) {
                a(r)
            }
        },
        c = s => s.done ? l(s.value) : Promise.resolve(s.value).then(i, p);
    c((e = e.apply(t, o)).next())
});
import {
    h as v,
    o as ot,
    p as $,
    y as f,
    aI as st,
    cN as rt,
    a$ as nt,
    b3 as L,
    gA as at,
    t as T,
    E as x,
    a3 as Z,
    cS as it,
    fw as ut,
    r as lt,
    U as ct
} from "./tracking-376cff7a.js";
import {
    l as pt,
    C as F,
    f as dt
} from "./FlexBox-1a755411.js";
import {
    g as ht
} from "./groupBy-ab90e519.js";
import {
    S as ft,
    p as gt
} from "./SearchModal-799c4145.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    c as mt,
    u as _t
} from "./user-e16f1619.js";
import {
    j as yt,
    b as bt
} from "./ProfileHoverCard-c8bfb61a.js";
import "./Divider-0a4efe7e.js";
import {
    C as Q
} from "./ChatZero-70900bcb.js";
import {
    n as A
} from "./util-2304c03b.js";
import {
    S as St
} from "./search-166a516b.js";
import "./_baseAssignValue-2cb42459.js";
import "./_defineProperty-105d261c.js";
import "./Tooltip-86d56346.js";
import "./react-laag.esm-f47be925.js";
import "./transition-c6a4911b.js";
import "./isObject-a54dc090.js";
import "./_createAggregator-deb99b9c.js";
import "./_baseEach-63ad03e0.js";
import "./x-fc38e969.js";
import "./HoverCard-cbdee1d2.js";
import "./useResponsive-08e338a7.js";
import "./_baseIteratee-fbbabc87.js";
import "./CloseIcon-90eee5fe.js";
import "./Modal-ab851ad1.js";
import "./Progress-629d3819.js";
import "./UserBadge-a694a663.js";
import "./profile-a781fd85.js";
import "./combobox-8973faf2.js";
import "./Switch-b8853cbf.js";
import "./preflight-1c24e477.js";
import "./align-left-a2ee54ed.js";
import "./Menu-5342012d.js";
import "./chevron-right-925bdc12.js";
import "./routeClick-cd1b3f9b.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            o = new Error().stack;
        o && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[o] = "1a349670-a68e-4514-a0e1-8448a08a47c6", t._sentryDebugIdIdentifier = "sentry-dbid-1a349670-a68e-4514-a0e1-8448a08a47c6")
    } catch (e) {}
})();
const Ct = "_noQueryZeroState_p93un_1",
    Rt = "_noResultsZeroState_p93un_7",
    D = {
        noQueryZeroState: Ct,
        noResultsZeroState: Rt
    };

function wt(t) {
    return A([t.name])
}

function Pt(t) {
    return A([t.title, t.subtitle, t.truncated_body])
}

function kt(t) {
    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}

function* B(t, o) {
    const e = o.toUpperCase().trim();
    if (!e || !t) return;
    const l = new RegExp(`\\b${kt(o)}\\b`, "i"),
        a = new Set,
        i = new Set,
        p = [s => l.test(s.name), s => wt(s).some(r => r.includes(e))],
        c = [s => l.test(s.title), s => l.test(s.subtitle), s => Pt(s).some(r => r.includes(e))];
    for (const s of p)
        for (const r of t.authors) a.has(r.user_id) || !s(r) || (a.add(r.user_id), yield {
            type: "user",
            user: r
        });
    for (const s of c)
        for (const r of t.posts) i.has(r.slug) || !s(r) || (i.add(r.slug), yield {
            type: "post",
            post: r
        })
}
const fe = B;

function Et({
    isOpen: t
}) {
    const o = nt().getConfigFor("enable_client_publication_search_cache"),
        {
            data: e
        } = bt("/api/v1/publication/client-search-cache", {
            auto: o && t,
            shouldRevalidate: !1
        }),
        l = L(() => !e || !e.recentPosts || e.recentPosts.length === 0 ? [] : e.recentPosts.map(i => ({
            type: "post",
            post: i
        })), [e == null ? void 0 : e.recentPosts]),
        a = L(() => e ? e.authors.map(i => ({
            type: "user",
            user: i
        })) : [], [e == null ? void 0 : e.authors]);
    return {
        search(i) {
            return B(e, i)
        },
        get isLoaded() {
            return !!e
        },
        recentPosts: l,
        authors: a
    }
}

function N(t) {
    return lt(t, {
        utm_source: ct.publicationSearch
    })
}

function k(t, o, e, l, a) {
    var s;
    let i = e;
    const p = [],
        c = ht(t, "type");
    for (const r of Object.keys(c)) {
        const g = c[r];
        if (g.length !== 0) {
            p.push({
                id: `header-${r}-${o}`,
                type: "result-group-header",
                header: r === "user" ? "People" : "Posts",
                rank: i++,
                searchId: o,
                resultCount: l
            });
            for (const n of g) n.type === "post" ? p.push({
                id: `post-${n.post.slug}-${o}`,
                searchId: o,
                type: "post",
                rank: i++,
                resultCount: l,
                post: {
                    title: n.post.title,
                    subtitle: n.post.subtitle,
                    url: N(n.post.url),
                    body: n.post.truncated_body,
                    audience: n.post.audience,
                    date: n.post.post_date,
                    image: n.post.cover_image,
                    highlights: n.highlights,
                    is_paywalled: a.includes(n.post.audience)
                }
            }) : n.type === "user" && p.push({
                id: `user-${n.user.user_id}-${o}`,
                searchId: o,
                type: "user",
                rank: i++,
                resultCount: l,
                user: {
                    id: n.user.user_id,
                    name: n.user.name,
                    handle: n.user.handle,
                    bestseller_tier: n.user.bestseller_tier,
                    photo_url: (s = n.user.photo_url) != null ? s : it(n.user.user_id),
                    role: "Contributor",
                    profile_url: N(ut(n.user.user_id, n.user.name))
                }
            })
        }
    }
    return p
}

function It(t, o, e) {
    return k([...t.slice(0, 3), ...o], "defaults", 0, o.length, e)
}

function ge({
    isOpen: t,
    onClose: o,
    pub: e
}) {
    const {
        search: l,
        recentPosts: a,
        authors: i
    } = Et({
        isOpen: t
    }), {
        search: p
    } = Ut(e), [{
        results: c,
        isLoading: s
    }, r] = v({
        results: [],
        isLoading: !1
    }), [g, n] = v(""), {
        isPaid: H,
        isFounding: j
    } = yt(e.id), b = pt([H ? null : "only_paid", j ? null : "founding"]), y = ot({
        abort: null
    }), M = 20, W = 30, S = () => {
        var u;
        (u = y.current) != null && u.abort && (y.current.abort(), y.current.abort = null)
    };
    $(() => {
        t && n("")
    }, [t]), $(() => {
        if (!g) {
            S(), r({
                results: It(i != null ? i : [], a != null ? a : [], b),
                isLoading: !1
            });
            return
        }
        z(g)
    }, [g, i, a]);
    const z = mt(u => P(this, null, function*() {
        r({
            results: [],
            isLoading: !0
        }), S();
        const h = new AbortController;
        y.current.abort = () => h.abort();
        const _ = at(),
            O = l(u),
            E = new Set,
            d = [];
        let G = 0;
        for (const m of O) {
            if (h.signal.aborted || d.length >= W) break;
            m.type === "post" && E.add(m.post.slug), d.push(m), ++G % M === 0 && (yield new Promise(V => setTimeout(V, 50)))
        }
        if (h.signal.aborted) return;
        const C = d.length;
        d.length && r({
            results: k(d, _, 0, C, b),
            isLoading: !0
        });
        const J = yield p(u);
        if (h.signal.aborted) return;
        d.push(...J.filter(m => m.type !== "post" || !E.has(m.post.slug))), r({
            results: k(d, _, C, d.length, b),
            isLoading: !1
        });
        const K = {
            query: u,
            results: d.length,
            search_id: _
        };
        T(x.PUBLICATION_SEARCH_RESULTS_SHOWN, w(R({}, K), {
            clientsideResultCount: C
        }))
    }), 10, []);
    return f(ft, {
        placeholder: "Search people and posts",
        results: c,
        isOpen: t,
        onClose: () => {
            S(), o()
        },
        onEnter: (u, h) => {
            const _ = {
                search_key: "publication_search",
                search_id: u.searchId,
                rank: u.rank,
                result_count: u.resultCount
            };
            T(x.PUBLICATION_SEARCH_RESULT_CLICKED, w(R({}, _), {
                result_type: u.type
            })), u.type === "post" ? Z(u.post.url, {
                newTab: h
            }) : u.type === "user" && Z(u.user.profile_url, {
                local_navigation: !1,
                newTab: h
            })
        },
        onQueryChange: u => n(u),
        noQueryZeroState: a.length > 0 ? null : f(F, {
            className: D.noQueryZeroState,
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
            flex: "grow",
            gap: 12
        }, f(St, null), f(Q, {
            title: `Search ${e?e.name:"this publication"}`,
            body: "Find people and posts in this publication",
            flex: "auto",
            padding: 0
        })),
        noResultsZeroState: u => f(F, {
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
            gap: 12,
            flex: "grow",
            className: D.noResultsZeroState
        }, f(Q, {
            title: `No results for ${u}`,
            body: "Search across all of Substack instead?",
            padding: 0,
            flex: "auto"
        }), f(dt, {
            priority: "primary-mono",
            href: u ? `${st()}/search/${u}?searching=all_posts` : "/search"
        }, "Search all of Substack")),
        isLoading: s
    })
}

function Ut(t) {
    const {
        refetch: o
    } = _t({
        pathname: "/api/v1/post/search",
        method: "GET",
        auto: !1
    });
    return {
        search(l) {
            return P(this, null, function*() {
                const a = yield o({
                    query: {
                        query: l,
                        focusedPublicationId: t.id,
                        page: 0,
                        numberFocused: 10
                    }
                });
                if (a instanceof Error) throw a;
                return a.results.map(i => {
                    var c, s;
                    const p = ((s = (c = a.highlights) == null ? void 0 : c[i.id]) != null ? s : []).map(gt);
                    return vt(i, t, p)
                })
            })
        }
    }
}

function vt(t, o, e) {
    var l, a;
    return {
        type: "post",
        post: {
            title: t.title,
            subtitle: t.subtitle,
            truncated_body: (l = t.truncated_body_text) != null ? l : void 0,
            audience: t.audience,
            url: rt(o, t.slug),
            post_date: t.post_date,
            cover_image: (a = t.cover_image) != null ? a : void 0,
            slug: t.slug,
            publication_id: t.publication_id
        },
        highlights: e
    }
}
export {
    ge as PublicationSearch, fe as searchIterator_forTests
};