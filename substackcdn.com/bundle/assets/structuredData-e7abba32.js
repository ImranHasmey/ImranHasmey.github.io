var w = Object.defineProperty,
    b = Object.defineProperties;
var P = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty,
    I = Object.prototype.propertyIsEnumerable;
var d = (e, t, a) => t in e ? w(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : e[t] = a,
    r = (e, t) => {
        for (var a in t || (t = {})) D.call(t, a) && d(e, a, t[a]);
        if (l)
            for (var a of l(t)) I.call(t, a) && d(e, a, t[a]);
        return e
    },
    o = (e, t) => b(e, P(t));
import {
    cX as O,
    U as S,
    hk as $,
    aa as A,
    D as s,
    b8 as u,
    x as h,
    br as x,
    b2 as y
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a5632012-0b92-4c0b-85f7-ceda9848abdc", e._sentryDebugIdIdentifier = "sentry-dbid-a5632012-0b92-4c0b-85f7-ceda9848abdc")
    } catch (a) {}
})();

function U(e, {
    name: t,
    url: a,
    description: i,
    potentialAction: c
} = {}) {
    return c === void 0 && (c = {
        "@type": "SearchAction",
        name: `Search ${e.name}`,
        target: `${e.base_url}${O(e)}?utm_source=${S.google}&sort=search&search={search_term_string}`,
        "query-input": "required name=search_term_string"
    }), {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: t || e.name,
        publisher: r(r({
            "@type": "Organization",
            name: e.name,
            url: e.base_url
        }, e.logo_url ? {
            logo: {
                "@type": "ImageObject",
                url: e.logo_url
            }
        } : {}), e.twitter_screen_name ? {
            sameAs: [`https://twitter.com/${e.twitter_screen_name}`]
        } : {}),
        url: a || e.base_url,
        mainEntityOfPage: {
            "@type": "WebPage",
            url: a || e.base_url
        },
        description: i || e.hero_text,
        potentialAction: c
    }
}

function j(e, t) {
    var c, g, m, _;
    const a = $(t),
        i = r(r(o(r({
            "@type": "Organization",
            name: e.name,
            url: A(e),
            description: e.hero_text
        }, e.rankingDetailFreeIncludedOrderOfMagnitude && {
            interactionStatistic: {
                "@type": "InteractionCounter",
                name: "Subscribers",
                interactionType: "https://schema.org/SubscribeAction",
                userInteractionCount: e.rankingDetailFreeIncludedOrderOfMagnitude
            }
        }), {
            identifier: `pub:${e.id}`
        }), e.logo_url && {
            logo: {
                "@type": "ImageObject",
                url: e.logo_url,
                contentUrl: s((c = e.logo_url) != null ? c : ""),
                thumbnailUrl: s((g = e.logo_url) != null ? g : "", 128, {
                    height: 128
                })
            },
            image: {
                "@type": "ImageObject",
                url: e.logo_url,
                contentUrl: s((m = e.logo_url) != null ? m : ""),
                thumbnailUrl: s((_ = e.logo_url) != null ? _ : "", 128, {
                    height: 128
                })
            }
        }), e.twitter_screen_name && {
            sameAs: [`https://twitter.com/${e.twitter_screen_name}`]
        });
    return o(r({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        url: u(e, t),
        mainEntityOfPage: u(e, t),
        headline: t.search_engine_title || t.social_title || t.title,
        description: t.search_engine_description || t.description,
        image: t.cover_image ? [{
            "@type": "ImageObject",
            url: t.cover_image
        }] : [],
        datePublished: h(t.post_date).format("YYYY-MM-DDTHH:mm:ssZ"),
        dateModified: h(t.post_date).format("YYYY-MM-DDTHH:mm:ssZ"),
        isAccessibleForFree: !x(t.audience)
    }, t.post_paywall_content_for_google && {
        hasPart: [{
            "@type": "WebPageElement",
            isAccessibleForFree: !0,
            cssSelector: ".available-content"
        }, {
            "@type": "WebPageElement",
            isAccessibleForFree: !1,
            cssSelector: ".paywall-content"
        }]
    }), {
        author: a.length > 0 ? a.map(n => r(r({
            "@type": "Person",
            name: n.name,
            url: y(n),
            description: n.bio,
            identifier: `user:${n.id}`
        }, n.twitter_screen_name && {
            sameAs: [`https://twitter.com/${n.twitter_screen_name}`]
        }), n.photo_url && {
            image: {
                "@type": "ImageObject",
                contentUrl: s(n.photo_url),
                thumbnailUrl: s(n.photo_url, 128, {
                    height: 128
                })
            }
        })) : i,
        publisher: i
    })
}

function v(e) {
    return r({
        "@context": "https://schema.org",
        "@type": "Person",
        image: (e == null ? void 0 : e.photo_url) && s(e.photo_url),
        name: `${e==null?void 0:e.name}`,
        url: e && y(e),
        jobTitle: e == null ? void 0 : e.bio,
        description: e == null ? void 0 : e.bio
    }, e != null && e.twitter_screen_name ? {
        sameAs: [`https://twitter.com/${e.twitter_screen_name}`]
    } : {})
}
export {
    j as a, U as b, v as g
};