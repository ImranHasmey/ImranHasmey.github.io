import {
    y as e,
    t as x,
    E as B,
    D,
    i5 as A,
    K as W,
    i6 as O,
    es as P,
    cG as N,
    dl as V,
    hv as H,
    i as v,
    C as L,
    d as T,
    U as z,
    i7 as M,
    dz as $,
    eC as ee,
    eB as te,
    i8 as se,
    cJ as oe
} from "./tracking-376cff7a.js";
import {
    u as I,
    o as q,
    a as _,
    F as y,
    T as u,
    O as j,
    c as S,
    b as ne
} from "./FlexBox-1a755411.js";
import {
    f as ae
} from "./findIndex-58c4c004.js";
import {
    s as re
} from "./sortBy-97ae0487.js";
import {
    R as J
} from "./user-e16f1619.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    aE as Q
} from "./homepage_hooks-47e7a4e7.js";
import {
    A as X
} from "./arrow-right-c1e00e5a.js";
import {
    B as G,
    b as ie
} from "./Banner-e2e1e503.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "112bfe69-ef78-4a7c-b5d0-0fee60d548fe", t._sentryDebugIdIdentifier = "sentry-dbid-112bfe69-ef78-4a7c-b5d0-0fee60d548fe")
    } catch (s) {}
})();
const le = "_logo_1qpye_1",
    ce = "_containerVertical_1qpye_5",
    de = "_logoVertical_1qpye_10",
    me = "_listenLink_1qpye_14",
    F = {
        logo: le,
        containerVertical: ce,
        logoVertical: de,
        listenLink: me
    },
    K = ({
        label: t,
        openInNewTab: n,
        podcastSettings: s,
        section: o,
        sectionUrl: a,
        setupUrl: d,
        subscribeUrl: l,
        trackingSource: i,
        user: c
    }) => {
        var p;
        const {
            iString: g
        } = I(), {
            isMobile: C
        } = Q(), m = C ? 80 : 160, r = q({
            radius: "md",
            width: m
        }), f = c != null && c.is_subscribed && (p = s.paidEpisodeArtUrl) != null ? p : s.artUrl;
        return e(y, {
            direction: C ? "column" : "row",
            gap: C ? 12 : 24
        }, f && e(J, {
            className: S(r),
            src: D(f, m * 2),
            maxWidth: m,
            useRetinaSizing: !0,
            imageIsFixedWidth: !0
        }), e(_, {
            gap: 8
        }, e(y, {
            alignItems: "center",
            justifyContent: "space-between"
        }, e(u.B1, {
            as: "a",
            color: "pub-primary-text",
            font: "pub-headings",
            weight: "bold",
            href: a,
            rel: "noopener noreferrer",
            target: "_blank"
        }, s.title), d && e(j, {
            priority: "secondary-theme",
            size: "sm",
            href: d,
            newTab: n,
            onClick: () => {
                x(B.SET_UP_FEED_CLICKED, {
                    section_id: o.id,
                    source: i
                })
            }
        }, g("Set up"))), t && e(y, {
            gap: 8,
            alignItems: "center"
        }, e(Y, {
            label: t
        }), t === "free-with-ads" && l && e(u, {
            className: F.listenLink,
            color: "pub-accent",
            font: "text",
            size: 12,
            onClick: () => {
                x(B.LISTEN_AD_FREE_CLICKED, {
                    section_id: o.id,
                    source: i
                }), n ? window.open(l, "_blank", "noopener,noreferrer") : window.location.href = l
            }
        }, "Listen ad-free")), e(u.B3, {
            color: "pub-secondary-text",
            font: "text"
        }, s.description), e("div", null, e(u, {
            alignItems: "center",
            color: "pub-accent",
            display: "inline-flex",
            font: "text",
            size: 14,
            weight: "medium",
            gap: 8,
            href: a,
            onClick: () => {
                x(B.SEE_ALL_EPISODES_CLICKED, {
                    section_id: o.id,
                    source: i
                }), n ? window.open(a, "_blank", "noopener,noreferrer") : window.location.href = a
            }
        }, e("span", null, g("See all episodes")), e(X, {
            size: 14
        })))))
    },
    ue = ({
        label: t,
        openInNewTab: n,
        podcastSettings: s,
        section: o,
        sectionUrl: a,
        trackingSource: d
    }) => {
        const {
            iString: l
        } = I(), i = q({
            radius: "md"
        });
        return e(_, {
            className: F.containerVertical,
            border: "detail-themed",
            padding: 20,
            radius: "md",
            gap: 20
        }, e(y, {
            justifyContent: "center"
        }, s.artUrl && e(J, {
            className: S(i, F.logoVertical),
            src: D(s.artUrl, 220 * 2),
            maxWidth: 164,
            useRetinaSizing: !0,
            imageIsFixedWidth: !0
        })), e(_, {
            gap: 12
        }, e(_, {
            gap: 8
        }, e(u.B1, {
            as: "a",
            color: "pub-primary-text",
            font: "pub-headings",
            href: a,
            rel: "noopener noreferrer",
            target: "_blank",
            weight: "bold"
        }, s.title), t && e(y, null, e(Y, {
            label: t
        })), e(u.B3, {
            color: "pub-secondary-text",
            font: "text"
        }, s.description)), e("div", null, e(u, {
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "pub-accent",
            font: "text",
            size: 14,
            weight: "medium",
            onClick: () => {
                x(B.SEE_ALL_EPISODES_CLICKED, {
                    section_id: o.id,
                    source: d
                }), n ? window.open(a, "_blank", "noopener,noreferrer") : window.location.href = a
            }
        }, e("span", null, l("See all episodes")), e(X, {
            size: 14
        })))))
    },
    Y = ({
        label: t
    }) => e(y, {
        bg: "secondary",
        display: "inline-block",
        paddingX: 6,
        radius: "sm"
    }, e(u, {
        color: "pub-secondary-text",
        font: "text",
        size: 12,
        weight: "semibold",
        lineHeight: 20
    }, t === "member-only" ? "+ Member-only" : t === "free-with-ads" ? "Free with ads" : "Free")),
    fe = "_twoColumnGrid_drsxa_1",
    pe = "_mainColumn_drsxa_2",
    _e = "_sideColumn_drsxa_6",
    k = {
        twoColumnGrid: fe,
        mainColumn: pe,
        sideColumn: _e
    },
    b = z.podcastsPage,
    ge = ({
        idToMagicLink: t,
        openInNewTab: n,
        pub: s,
        user: o
    }) => {
        const {
            isMobile: a
        } = Q(), d = re(A(s), r => {
            var f;
            return (f = ae(s.navigationBarItems, p => p.section_id === r.id)) != null ? f : 999
        }), l = W({
            pub: s,
            includeTheRampart: !0
        }), i = !!(o != null && o.is_subscribed), c = !i && !a, g = d.filter(r => i || !O({
            sectionId: r.id
        })), C = i ? [] : d.filter(r => O({
            sectionId: r.id
        }));
        let m = t == null ? void 0 : t[s.id];
        return m || (m = P(s, {
            section: null,
            noSection: !1,
            addBase: !0,
            user: null,
            startAtSubscribeFlow: !o || !o.is_free_subscribed,
            params: {
                utm_source: b
            }
        })), e(ie, {
            columns: c ? 3 : 2,
            paddingTop: a ? 8 : void 0
        }, e(ne, {
            className: S({
                [k.twoColumnGrid]: c
            }),
            direction: c ? "row" : "column",
            gap: c ? void 0 : 40
        }, !i && e(_, {
            alignItems: a ? "stretch" : "start",
            className: k.sideColumn,
            gap: 24,
            paddingLeft: c ? 32 : void 0
        }, e(_, {
            gap: a ? 12 : 16
        }, e(u.H2, {
            color: "pub-primary-text",
            font: "pub-headings"
        }, "Member-only Podcasts"), e(G, {
            firehoseFeedUrl: m,
            pub: s,
            trackingSource: b,
            variant: "member-only"
        })), e(_, {
            gap: a ? 16 : 24
        }, C.map((r, f) => {
            const p = N({
                    pub: s,
                    section: r
                }),
                w = (t == null ? void 0 : t[r.id]) || P(s, {
                    section: r,
                    noSection: !1,
                    addBase: !0,
                    user: null,
                    startAtSubscribeFlow: !o || !o.is_free_subscribed,
                    params: {
                        utm_source: b
                    }
                }),
                E = V(s, {
                    section: r,
                    addBase: !0
                }),
                U = l ? H({
                    sectionId: r.id
                }) ? "member-only" : "free" : void 0;
            return e(v, null, e(a ? K : ue, {
                label: U,
                openInNewTab: n,
                podcastSettings: p,
                section: r,
                sectionUrl: E,
                setupUrl: i ? w : null,
                trackingSource: b,
                user: o != null ? o : null
            }), f !== C.length - 1 && a && e(y, {
                borderBottom: "detail-themed"
            }))
        }))), e(_, {
            borderRight: c ? "detail-themed" : void 0,
            className: k.mainColumn,
            gap: 24,
            paddingRight: c ? 32 : void 0
        }, e(_, {
            gap: a ? 12 : 16
        }, e(u.H2, {
            color: "pub-primary-text",
            font: "pub-headings"
        }, s.name, " Podcasts"), i && e(G, {
            pub: s,
            firehoseFeedUrl: m,
            trackingSource: b
        })), e(_, {
            gap: a ? 16 : 24
        }, g.map((r, f) => {
            const p = N({
                    pub: s,
                    section: r
                }),
                w = (t == null ? void 0 : t[r.id]) || P(s, {
                    section: r,
                    noSection: !1,
                    addBase: !0,
                    user: null,
                    startAtSubscribeFlow: !o || !o.is_free_subscribed,
                    params: {
                        utm_source: b
                    }
                }),
                E = V(s, {
                    section: r,
                    addBase: !0
                }),
                U = l ? H({
                    sectionId: r.id
                }) ? i ? "member-only" : "free-with-ads" : "free" : void 0;
            return e(v, null, e(K, {
                label: U,
                openInNewTab: n,
                podcastSettings: p,
                section: r,
                sectionUrl: E,
                setupUrl: i ? w : null,
                subscribeUrl: L(s, {
                    utm_source: b,
                    simple: !0,
                    next: document.location.href,
                    referring_pub_ids: T("referring_pub_ids"),
                    addBase: !0
                }),
                trackingSource: b,
                user: o != null ? o : null
            }), f !== g.length - 1 && e(y, {
                borderBottom: "detail-themed"
            }))
        })))))
    },
    be = "_childPublication_1g4xf_1",
    he = "_details_1g4xf_10",
    ye = "_subscribe_1g4xf_25",
    Ce = "_logo_1g4xf_29",
    we = "_info_1g4xf_43",
    Pe = "_title_1g4xf_49",
    Se = "_link_1g4xf_57",
    xe = "_description_1g4xf_65",
    h = {
        childPublication: be,
        details: he,
        subscribe: ye,
        logo: Ce,
        info: we,
        title: Pe,
        link: Se,
        description: xe
    },
    Be = (t, n) => ({
        logoUrl: t.podcast_art_url || t.logo_url || M(),
        mainClickUrl: $({
            pub: t,
            section: null,
            addBase: !0
        }),
        buttonClickUrl: n,
        name: t.podcast_title || t.name,
        description: t.podcast_description || t.hero_text
    }),
    ve = ({
        logoUrl: t,
        mainClickUrl: n,
        buttonClickUrl: s,
        name: o,
        description: a,
        showButton: d,
        buttonText: l,
        openInNewTab: i = !1
    }) => e("div", {
        className: h.childPublication
    }, t && e("img", {
        className: h.logo,
        src: D(t, 144),
        alt: `${o} logo`
    }), e("div", {
        className: h.details
    }, e("div", {
        className: h.info
    }, e("div", {
        className: h.title
    }, e("a", {
        className: h.link,
        href: n
    }, o)), e("div", {
        className: h.description
    }, a)), d && e(j, {
        priority: "primary",
        className: h.subscribe,
        href: s,
        newTab: i
    }, l))),
    Ie = ({
        showButton: t,
        items: n,
        openInNewTab: s = !1,
        buttonText: o
    }) => e("div", {
        "data-testid": "child-pub-container"
    }, n.map(a => e(ve, {
        logoUrl: a.logoUrl,
        mainClickUrl: a.mainClickUrl,
        buttonClickUrl: a.buttonClickUrl,
        name: a.name,
        description: a.description,
        buttonText: o,
        openInNewTab: s,
        showButton: t
    }))),
    Ee = "_container_1kkkn_1",
    Ue = "_noPodcasts_1kkkn_6",
    R = {
        container: Ee,
        noPodcasts: Ue
    },
    ke = ({}) => {
        const {
            iString: t
        } = I();
        return e("div", {
            className: R.noPodcasts
        }, t("No podcasts."))
    },
    Z = (t, n, s) => {
        let o = t[n.id];
        return o || (o = P(n, {
            section: null,
            noSection: !1,
            addBase: !0,
            user: null,
            startAtSubscribeFlow: !s || !s.is_free_subscribed,
            params: {
                utm_source: z.allPodcasts
            }
        })), o
    },
    Ae = ({
        pub: t,
        user: n,
        idToMagicLink: s,
        openInNewTab: o
    }) => t.subdomain !== "thebulwark" ? null : e(u.B3, {
        translated: !0,
        paddingTop: 16,
        paddingBottom: 16
    }, e("a", {
        href: Z(s != null ? s : {}, t, n),
        target: o ? "_blank" : void 0,
        rel: "noopener"
    }, "Click here"), " ", "to set up your podcast app for everything in one feed."),
    Ne = ({
        pub: t,
        user: n,
        idToMagicLink: s = {},
        openInNewTab: o = !1,
        newFormatting: a = !1
    }) => {
        const d = [],
            {
                iString: l
            } = I();
        A(t) && A(t).forEach(m => {
            var p, w;
            if (!ee({
                    pub: t,
                    section: m
                })) return;
            const r = N({
                pub: t,
                section: m
            });
            if (!r.title) return;
            const f = {
                logoUrl: (p = r.artUrl) != null ? p : void 0,
                mainClickUrl: $({
                    pub: t,
                    section: m,
                    addBase: !0
                }),
                buttonClickUrl: s[m.id] || P(t, {
                    section: m,
                    noSection: !1,
                    addBase: !0,
                    user: null,
                    startAtSubscribeFlow: !n || !n.is_free_subscribed,
                    params: {
                        utm_source: z.allPodcasts
                    }
                }),
                name: r.title,
                description: (w = r.description) != null ? w : "",
                buttonText: l("Set up podcast")
            };
            d.push(f)
        }), te(t) && d.push(Be(t, Z(s, t, n)));
        const i = Object.keys(s).length > 0 || !!(n != null && n.is_free_subscribed);
        let c = d.length > 1 ? l("Podcast feeds") : l("Podcast feed");
        i && (c = se(t) ? l("Private podcast feeds") : l("Private podcast feed"));
        const g = e(_, {
            radius: "md",
            border: "detail",
            padding: 16
        }, oe(t) ? e(v, null, e(Ie, {
            showButton: !0,
            items: d,
            openInNewTab: o,
            buttonText: l("Set up podcast")
        }), e(Ae, {
            pub: t,
            user: n,
            idToMagicLink: s,
            openInNewTab: o
        })) : e(ke, null));
        return a ? e(v, null, e(u.H4, {
            paddingTop: 20,
            paddingBottom: 8
        }, c), g) : e("div", {
            className: "container"
        }, e("div", {
            id: "set-up-podcast"
        }, e(u.H3, {
            paddingTop: 16,
            paddingBottom: 16
        }, c), g))
    },
    $e = ({
        pub: t,
        user: n,
        idToMagicLink: s,
        openInNewTab: o = !1
    }) => W({
        pub: t,
        includeTheRampart: !0
    }) ? e("div", {
        className: S("page", "typography", R.container)
    }, e(ge, {
        idToMagicLink: s,
        openInNewTab: o,
        pub: t,
        user: n
    })) : e("div", {
        className: S("page", "typography", R.container)
    }, e(Ne, {
        idToMagicLink: s,
        openInNewTab: o,
        pub: t,
        user: n
    }));
export {
    Ne as A, $e as S
};