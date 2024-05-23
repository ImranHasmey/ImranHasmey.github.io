import {
    a$ as M,
    y as w,
    i1 as C,
    i2 as T,
    hd as D,
    gQ as L,
    ap as A,
    bS as F,
    D as b,
    i3 as j,
    i4 as x
} from "./tracking-376cff7a.js";
import {
    M as S
} from "./Metadata-be2b4cf2.js";
import {
    d as c,
    m as U,
    b as z
} from "./publication-1bbad178.js";
import {
    _ as I
} from "./decodeHtmlEntitiesFast-d19e2d0c.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var a = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "3b72b837-5a58-4744-a290-b1f0f4258ac0", a._sentryDebugIdIdentifier = "sentry-dbid-3b72b837-5a58-4744-a290-b1f0f4258ac0")
    } catch (t) {}
})();

function B({
    publication: a,
    siteConfigs: e = {},
    twitterCardUrl: t = null
}) {
    var u;
    const {
        getConfigFor: l
    } = M(), r = l("publication_author_display_override") ? String(l("publication_author_display_override")) : void 0, n = l("publication_homepage_title_display_override") && document.location.pathname === "/" ? String(l("publication_homepage_title_display_override")) : void 0, {
        title: i,
        description: g
    } = P(a, {
        primaryAuthorOverride: r,
        completeTitleOverride: n
    });
    let d, o;
    return t ? (d = t, o = !0) : [d, o] = _(a, null), w(S, {
        title: i,
        description: g,
        image: d,
        isLargeImage: o,
        pub: a,
        siteConfigs: e,
        themeColor: (u = a.theme) == null ? void 0 : u.web_bg_color
    })
}

function P(a, {
    primaryTitleOverride: e,
    primaryDescriptionOverride: t,
    primaryAuthorOverride: l,
    completeTitleOverride: r
}) {
    var o, u;
    let n;
    const i = l || ((o = c(a.contributors)) == null ? void 0 : o.owner),
        g = i && !((u = a.name) != null && u.toLowerCase().includes(i == null ? void 0 : i.toLowerCase())),
        d = e != null ? e : a.name;
    return r ? n = r : g ? n = `${d} | ${i} | Substack` : n = `${d} | Substack`, {
        title: n,
        description: I(f(a, t))
    }
}

function f(a, e) {
    var g, d, o;
    const t = (g = a.name) == null ? void 0 : g.trim();
    let l = t;
    C(t) && (l = `"${t}"`);
    const r = c(a.contributors);
    let n, i;
    return a.invite_only ? (n = null, i = null) : (n = (d = a.rankingDetailFreeIncluded) != null && d.toLowerCase().includes("subscribers") ? a.rankingDetailFreeIncluded.toLowerCase() : null, i = a.rankingDetailFreeIncluded || a.rankingDetail), U(e != null ? e : (o = a.hero_text) == null ? void 0 : o.trim(), r, n, l, i)
}
const Q = Object.freeze(Object.defineProperty({
    __proto__: null,
    PubPageMetaTags: B,
    generateSyntheticMeta: f,
    getPubPageTitleAndMeta: P
}, Symbol.toStringTag, {
    value: "Module"
}));

function N({
    publication: a,
    post: e,
    clip: t,
    siteConfigs: l = {},
    twitterCardUrl: r = null,
    isCommentPage: n = !1,
    selection: i = null
}) {
    var h, y;
    const g = (e == null ? void 0 : e.social_title) || (e == null ? void 0 : e.title) || a.name,
        {
            title: d,
            description: o
        } = $(e, a, {
            isCommentPage: n
        });
    let u, m, s = null;
    r ? (u = r, m = !0) : i && e ? (u = T(a, e, i), m = !0) : ([u, m] = _(a, e), s = k(a, e));
    const v = n && e && e.type !== "thread" && e.comment_count === 0 || (e == null ? void 0 : e.type) === "restack";
    return w(S, {
        title: d,
        socialTitle: t ? `✂️ ${z((h=t.duration)!=null?h:0)} | ${g}` : g,
        searchDescription: e == null ? void 0 : e.search_engine_description,
        description: o,
        image: t && (y = D(t)) != null ? y : u,
        twitterImage: t ? void 0 : s,
        isLargeImage: m,
        imageHeight: i && 564,
        imageWidth: i && 1128,
        seoProps: {
            noindex: v,
            noarchive: !!(e && e.post_paywall_content_for_google)
        },
        isPodcast: (e == null ? void 0 : e.type) === "podcast",
        isVideo: (e == null ? void 0 : e.type) === "video",
        slug: e == null ? void 0 : e.slug,
        pub: a,
        post: e,
        siteConfigs: l
    })
}

function $(a, e, {
    isCommentPage: t = !1
} = {}) {
    var d, o;
    const l = (a == null ? void 0 : a.social_title) || (a == null ? void 0 : a.title) || e.name;
    let r, n;
    a ? n = L(e, a) : n = A("publication_author_display_override") || ((d = c(e.contributors)) == null ? void 0 : d.owner);
    const i = n && !((o = e.name) != null && o.toLowerCase().includes(n == null ? void 0 : n.toLowerCase()));
    a != null && a.title ? (r = (a == null ? void 0 : a.search_engine_title) || l, t && a.type !== "thread" && (r = `Comments - ${r}`), `${r} - by ${n}`.length < 60 && (n && i && (r += ` - by ${n}`), `${r} - ${e.name}`.length < 60 && (r += ` - ${e.name}`))) : i ? r = `${e.name} | ${n} | Substack` : r = `${e.name} | Substack`;
    let g;
    return a ? g = F(a, e) : g = f(e), g = I(g), {
        title: r,
        description: g
    }
}

function _(a, e) {
    let t, l;
    return e != null && e.cover_image ? (t = b(e.cover_image, 1200, {
        height: 600,
        smartCrop: !0,
        format: "jpg"
    }), l = !0) : a.subdomain === "numlock" ? (t = b("/img/numlock_square.png?v=2", 840), l = !1) : (t = j(a), l = !0), [t, l]
}

function k(a, e) {
    return e != null && e.cover_image ? x(a, e) : null
}
const V = Object.freeze(Object.defineProperty({
    __proto__: null,
    PostMetaTags: N,
    getPageTitleAndMeta: $,
    getPostMetaImage: _,
    getPostMetaImageForTwitter: k
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    B as P, k as a, N as b, $ as c, P as d, V as e, _ as g, Q as p
};