import {
    y as t,
    i as w,
    c5 as F,
    ao as U,
    a0 as M,
    Z as A,
    aa as T,
    aI as y,
    cI as E,
    U as s,
    aj as r,
    M as o,
    a2 as g,
    D as _,
    t as h,
    E as v,
    a$ as P,
    h as D,
    aQ as R,
    aR as B,
    b1 as O,
    b0 as x,
    j as W,
    W as G,
    eA as L,
    a7 as f
} from "./tracking-376cff7a.js";
import {
    n as V,
    T as C,
    u as k,
    c as N
} from "./FlexBox-1a755411.js";
import {
    u as j
} from "./free_email_form-1d3fc4be.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    S as K
} from "./SubstackIcon-eb634931.js";
import {
    S as z
} from "./Modal-ab851ad1.js";
import {
    C as H,
    T as Q
} from "./experimentsAndSiteConfigContext-a6aeed82.js";
import {
    V as J
} from "./arrow-right-c1e00e5a.js";
import {
    c as S
} from "./app_install_modal-64fe70fd.js";
(function() {
    try {
        var a = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "3ca9feb4-0dc9-4297-bae1-872d61c3d849", a._sentryDebugIdIdentifier = "sentry-dbid-3ca9feb4-0dc9-4297-bae1-872d61c3d849")
    } catch (c) {}
})();
const Y = ({
        hideTerms: a,
        pub: e,
        showIntrinioAttrib: c
    }) => {
        const {
            getSettingFor: n
        } = V(), m = n("custom_tos_and_privacy") && (e.has_custom_tos || e.has_custom_privacy), i = t("div", {
            className: "footer-copyright-blurb"
        }, "© ", new Date().getFullYear(), " ", e && e.copyright || "Substack Inc"), l = t(w, null, c && t(C, {
            translated: !0,
            as: "div",
            className: "footer-copyright-blurb"
        }, "Market data by ", t("a", {
            href: "https://intrinio.com/"
        }, "Intrinio")), !a && t("div", {
            className: "footer-terms-blurb"
        }, t(Q, {
            publication: e
        })));
        return m ? t(w, null, t("div", {
            className: "footer-blurbs"
        }, i, !a && t("div", {
            className: "footer-terms-blurb"
        }, t(H, {
            pub: e
        }))), t("div", {
            className: "footer-blurbs"
        }, t("div", {
            className: "footer-copyright-blurb"
        }, "Substack"), l)) : t("div", {
            className: "footer-blurbs"
        }, i, l)
    },
    ct = F(({
        publication: a,
        user: e,
        path: c,
        hideTerms: n,
        showIntrinioAttrib: m
    }) => {
        const {
            iString: i
        } = k();
        typeof n == "undefined" && (n = !1);
        const l = j(),
            p = U(),
            d = M(),
            u = A(),
            $ = p && (d || u),
            I = e && !e.reader_installed_at,
            b = $ && I;
        return t("div", {
            className: "footer-wrap publication-footer"
        }, t(J, {
            onVisible: () => {
                h(v.PUBLICATION_FOOTER_SEEN, {
                    publication_id: a == null ? void 0 : a.id,
                    user_id: e == null ? void 0 : e.id,
                    source: Z(c)
                })
            }
        }), t("div", {
            className: N("footer", {
                "themed-background": l
            })
        }, t("div", {
            className: "container"
        }, t(Y, {
            hideTerms: n,
            pub: a,
            showIntrinioAttrib: m
        }), t("div", {
            className: "footer-buttons"
        }, t("a", {
            className: N("footer-substack-cta", "start-publishing", b && "app-upsell"),
            native: !0,
            href: e != null && e.has_publication ? `${T({subdomain:"your"})}/publish` : `${y()}/signup?${E({utm_source:s.substack,utm_medium:r.web,utm_content:o.footer})}`
        }, t(K, null), " ", i("Start Writing")), !b && t("a", {
            className: "footer-substack-cta get-the-app no-icon",
            native: !0,
            href: g({
                utm_campaign: f.appMarketing,
                utm_content: o.webFooterButton
            })
        }, i("Get the app")), b && d && t("a", {
            className: S.appBadge,
            href: g({
                utm_campaign: f.appMarketing,
                utm_content: o.webFooterButton,
                force: "ios"
            })
        }, t("img", {
            className: "app-upsell",
            src: _("/img/app_page/app-store.png", 160 * 2)
        })), b && u && t("a", {
            className: S.appBadge,
            href: g({
                utm_campaign: f.appMarketing,
                utm_content: o.webFooterButton,
                force: "android"
            })
        }, t("img", {
            className: "app-upsell",
            src: _("/img/app_page/google-play.png", 160 * 2)
        }))), t(C, {
            translated: !0,
            as: "div",
            className: "footer-slogan-blurb"
        }, t("a", {
            href: `${y()}`,
            native: !0
        }, "Substack"), " ", "is the home for great culture"))))
    });

function Z(a) {
    return a ? a === "/" ? "pub-homepage" : a.startsWith("/p") ? "pub-post" : a : "unknown"
}
const q = ({
        slug: a,
        categoriesMap: e,
        setExpandCategories: c,
        hide: n
    }) => {
        const {
            iString: m,
            iTemplate: i
        } = k();
        return a === "collapse" ? t("u", null, t("a", {
            onClick: () => c(!1)
        }, "See less categories")) : a === "expand" ? t("u", null, t("a", {
            onClick: () => c(!0)
        }, "See more categories")) : e[a] ? t("a", {
            href: `${T()}/top/${e[a].slug}`,
            native: !0,
            style: {
                display: n ? "none" : void 0
            }
        }, i `Top in ${m(e[a].canonical_name)}`) : null
    },
    it = ({
        categories: a
    }) => {
        const {
            iString: e,
            iTemplate: c
        } = k();
        P();
        const [n, m] = D(!1), i = {
            culture: `/discover/category/culture/paid?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            "food & drink": `/discover/category/food/paid?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            finance: `/discover/category/finance/paid?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            sports: `/discover/category/sports/paid?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            politics: `/discover/category/politics/paid?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            technology: `/discover/category/technology/paid?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            faith: `/discover/category/faith/paid?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            business: `/discover/category/business/paid?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`
        }, l = ["culture", "food", "finance", "sports", "politics", "technology", "faith", "business"], p = (a == null ? void 0 : a.length) > 0 ? a == null ? void 0 : a.map(u => u == null ? void 0 : u.slug).filter(u => !l.includes(u)) : [], d = {};
        if ((a == null ? void 0 : a.length) > 0)
            for (const u of a) u && (d[u.slug] = u);
        return t("div", {
            className: "footer-wrap www-footer"
        }, t("div", {
            className: "home-footer"
        }, t("div", {
            className: "footer-contain"
        }, t("div", {
            className: "footer-info"
        }, t("div", {
            className: "footer-info-col"
        }, t("h3", null, e("Read")), t("a", {
            href: `/discover?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Discover")), t("a", {
            href: `/app?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Get the app")), t("a", {
            href: `https://on.substack.com/s/stories?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Featured")), t("a", {
            href: `https://reader.substack.com?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Substack Reader")), t("a", {
            href: `/discover/category/podcast/paid?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Top podcasts")), (a == null ? void 0 : a.length) > 0 ? l.concat(p).concat(n ? "collapse" : "expand").filter(u => u !== "podcast").map(u => t(q, {
            slug: u,
            categoriesMap: d,
            setExpandCategories: m,
            hide: p.includes(u) && !n
        })) : Object.entries(i).map(([u, $]) => t("a", {
            href: $,
            native: !0
        }, c `Top in ${u}`)), t("a", {
            href: `/topics?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Topics"))), t("div", {
            className: "footer-info-col"
        }, t("h3", null, e("Writers")), t("a", {
            href: `/switch?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Switch to Substack")), t("a", {
            href: `/ghost?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Switch from Ghost")), t("a", {
            href: `https://on.substack.com/p/start-a-substack-newsletter?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Get started")), t("a", {
            href: `/going-paid?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Go paid")), t("a", {
            href: `/podcasts?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("For podcasts")), t("a", {
            href: `/for-bloggers?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("For bloggers")), t("a", {
            href: `/investing-and-business?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("For finance writers")), t("a", {
            href: `/book?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("For authors")), t("a", {
            href: `/comic-book-creators?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("For comic creators")), t("a", {
            href: `/food-writers?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("For food writers")), t("a", {
            href: `/local-news?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("For local news"))), t("div", {
            className: "footer-info-col"
        }, t("h3", null, e("Company")), t("a", {
            href: G(null, {
                params: {
                    utm_source: s.substack,
                    utm_medium: r.web,
                    utm_content: o.footer
                }
            }),
            native: !0
        }, e("About")), t("a", {
            href: L()
        }, e("Help")), t("a", {
            href: `/jobs?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Jobs")), t("a", {
            href: `https://on.substack.com?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Blog")), t("a", {
            href: `/vulnerability-disclosure?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Vulnerability Policy")), t("a", {
            href: `/contact?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Contact")), t("a", {
            href: "/sitemap",
            native: !0
        }, e("Sitemap"))), t("div", {
            className: "footer-info-col"
        }, t("h3", null, e("Resources")), t("a", {
            href: `/resources?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Resource center")), t("a", {
            href: `/going-paid-guide?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Guide to going paid")), t("a", {
            href: "https://support.substack.com/hc/en-us?s=support%40substack.com",
            native: !0
        }, e("Help center")), t("a", {
            href: `/community-and-programs?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Community and programs")), t("a", {
            href: `/brand?utm_source=${s.substack}&utm_medium=${r.web}&utm_content=${o.footer}`,
            native: !0
        }, e("Brand assets")))), t("div", {
            className: "logo-copy-wrapper"
        }, t(z, {
            className: "navbar-logo-wordmark substack-logo-wordmark"
        }), t("div", {
            className: "slogan tw-mt-5"
        }, e("Substack is the home for great writing"))))), t("div", {
            className: "footer-divider"
        }), t("div", {
            className: "footer-bottom-bar"
        }, t("div", {
            className: "app-badges"
        }, t("a", {
            className: "app-badge",
            href: R({
                utm_campaign: f.appMarketing,
                utm_content: o.wwwFooter
            }),
            onClick: () => {
                h(v.APP_STORE_LINK_CLICKED, {
                    source: "web_footer",
                    app_store: "ios"
                })
            }
        }, t("img", {
            src: _("/img/app_page/app-store-white.png?v=1", 119 * 2),
            height: 40,
            width: 134,
            loading: "lazy"
        })), t("a", {
            className: "app-badge",
            href: B({
                utm_campaign: f.appMarketing,
                utm_content: o.wwwFooter
            }),
            onClick: () => {
                h(v.APP_STORE_LINK_CLICKED, {
                    source: "web_footer",
                    app_store: "android"
                })
            }
        }, t("img", {
            src: _("/img/app_page/google-play-white.png", 119 * 2),
            height: 40,
            width: 134,
            loading: "lazy"
        }))), t("div", {
            className: "footer-bottom-links"
        }, t("span", {
            className: "copyright bottom-item"
        }, "© Substack Inc."), t("a", {
            className: "bottom-item",
            href: O(),
            native: !0
        }, e("Privacy")), t("a", {
            className: "bottom-item",
            href: x(),
            native: !0
        }, e("Terms")), t("a", {
            className: "bottom-item",
            href: W(),
            native: !0
        }, e("Collection notice")))))
    };
export {
    ct as F, it as W
};