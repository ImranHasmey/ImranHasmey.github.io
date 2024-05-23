var ee = Object.defineProperty,
    te = Object.defineProperties;
var se = Object.getOwnPropertyDescriptors;
var x = Object.getOwnPropertySymbols;
var ne = Object.prototype.hasOwnProperty,
    oe = Object.prototype.propertyIsEnumerable;
var B = (e, s, t) => s in e ? ee(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[s] = t,
    S = (e, s) => {
        for (var t in s || (s = {})) ne.call(s, t) && B(e, t, s[t]);
        if (x)
            for (var t of x(s)) oe.call(s, t) && B(e, t, s[t]);
        return e
    },
    U = (e, s) => te(e, se(s));
var h = (e, s, t) => (B(e, typeof s != "symbol" ? s + "" : s, t), t);
import {
    y as n,
    aa as L,
    dl as ie,
    bC as re,
    bG as ae,
    gX as D,
    t as _,
    E as b,
    i as le,
    D as H,
    a$ as $,
    bz as ue,
    d8 as de,
    ct as ce,
    bU as me,
    dU as A,
    gY as he,
    K as pe,
    gZ as _e,
    g_ as be,
    r as F,
    aL as fe,
    h as z,
    p as ge,
    g$ as Ce,
    bb as we
} from "./tracking-376cff7a.js";
import {
    c as f,
    u as G,
    n as ye,
    T,
    a as j,
    o as Se,
    S as Te
} from "./FlexBox-1a755411.js";
import {
    m as ve
} from "./object-6a0ccbd3.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    E as Ne
} from "./experimentsAndSiteConfigContext-a6aeed82.js";
import {
    N as ke
} from "./NavbarUserWidget-29725e70.js";
import {
    O as Ie
} from "./overflow_menu-5db2190f.js";
import {
    r as Le
} from "./_baseEach-63ad03e0.js";
import {
    u as Be
} from "./share_dialog-b74d3337.js";
import {
    B as Z
} from "./user-e16f1619.js";
import {
    F as Ee
} from "./free_email_form.module-135823b4.js";
import {
    C as J
} from "./CloseIcon-90eee5fe.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            s = new Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "a09a29aa-911d-4889-b8fd-78255d174161", e._sentryDebugIdIdentifier = "sentry-dbid-a09a29aa-911d-4889-b8fd-78255d174161")
    } catch (t) {}
})();

function Me(e) {
    var s, t, o;
    return e.link_title || ((s = e.postTag) == null ? void 0 : s.name) || ((t = e.section) == null ? void 0 : t.name) || ((o = e.post) == null ? void 0 : o.title) || ""
}

function Pe(e) {
    var s;
    return e.postTag ? "tag" : e.section ? "section" : ((s = e.post) == null ? void 0 : s.type) === "page" ? "page" : e.post ? "post" : "link"
}

function xe(e, {
    isPodcastActive: s,
    isChatActive: t,
    isMeetingsActive: o,
    hasMultipleNewsletters: i,
    isChatEnabled: l,
    isFeedEnabled: r,
    isReaderReferralsLeaderboardActive: a,
    language: u = "en"
}) {
    var w;
    const p = e.filter(d => !d.standard_key),
        g = new Map(e.filter(d => d.standard_key).map(d => [d.standard_key, d])),
        {
            iString: m
        } = I18N.i(u);
    for (const d of p)(w = d.section) != null && w.hide_from_navbar && (d.is_hidden = !0);
    const C = [r && {
        standard_key: "notes",
        link_title: "Notes",
        link_url: "/notes"
    }, l && {
        standard_key: "chat",
        link_title: "Chat",
        link_url: "/chat",
        is_hidden: !t
    }, o && {
        standard_key: "meetings",
        link_title: "Meetings",
        link_url: "/meetings"
    }, ...p, {
        standard_key: "archive",
        link_title: m("Archive"),
        link_url: "/archive"
    }, i && {
        standard_key: "newsletters",
        link_title: m("Newsletters"),
        link_url: "/newsletters",
        is_hidden: !0
    }, a && {
        standard_key: "leaderboard",
        link_title: m("Leaderboard"),
        link_url: "/leaderboard"
    }, {
        standard_key: "about",
        link_title: m("About"),
        link_url: "/about"
    }].filter(d => !!d);
    for (const d of C)
        if (d.standard_key) {
            const N = g.get(d.standard_key);
            N && ve(d, N)
        }
    return C
}
const X = (e, s) => e.subItems ? new Fe(e, s) : e.base_url ? new Ue(e) : e.name && e.id && e.url ? new Ae(e, s) : e.isPodcast ? new De(e) : new He(e, s);
class v {
    constructor(s, t) {
        this._obj = s, this._pub = t
    }
    truncatedName() {
        return re(this._obj.name, 30)
    }
    isNewsletter() {
        throw new Error("not implemented")
    }
    isPodcast() {
        throw new Error("not implemented")
    }
    isSelected(s, t) {
        throw new Error("not implemented")
    }
    isNative() {
        throw new Error("not implemented")
    }
    homepageUrl() {
        throw new Error("not implemented")
    }
    noFollow() {
        return !1
    }
    subItems() {
        return null
    }
    get item() {
        return this._obj
    }
}
class Ue extends v {
    isNewsletter() {
        return this._obj.type === "newsletter"
    }
    isPodcast() {
        return this._obj.type === "podcast"
    }
    isSelected(s) {
        return this._obj.id === s.id
    }
    isNative() {
        return !0
    }
    logoUrl() {
        return this._obj.logo_url
    }
    homepageUrl() {
        return L(this._obj)
    }
}
class De extends v {
    isPodcast() {
        return !0
    }
    isSelected(s, t) {
        return this._obj.id === t
    }
    isNative() {
        return !0
    }
    homepageUrl() {
        return L(this._obj)
    }
}
class He extends v {
    constructor(s, t) {
        super(s, t), this._homepageUrl = ie(t, {
            section: s
        })
    }
    isPodcast() {
        return this._obj.is_podcast
    }
    isSelected(s, t) {
        return this._obj.id === t
    }
    isNative() {
        return !0
    }
    homepageUrl() {
        return this._homepageUrl
    }
    logoUrl() {
        var s, t, o;
        if (this._obj.is_podcast) {
            const i = (s = this._pub.sections) == null ? void 0 : s.find(l => l.id === this._obj.id);
            return (o = (t = i == null ? void 0 : i.podcastSettings) == null ? void 0 : t.podcast_art_url) != null ? o : this._obj.logo_url
        }
        return this._obj.logo_url
    }
}
class Ae extends v {
    constructor(s, t) {
        super(s, t), this._maybeNoFollow = s.noFollow, this._pubTier = (t == null ? void 0 : t.tier) || 0
    }
    isNewsletter() {
        return !1
    }
    isPodcast() {
        return !1
    }
    isSelected(s, t) {
        return [this._obj.id, this._obj.url].includes(t)
    }
    isNative() {
        return !0
    }
    noFollow() {
        return this._maybeNoFollow && this._pubTier < 2
    }
    homepageUrl() {
        return this._obj.url
    }
}
class Fe extends v {
    isNewsletter() {
        return !1
    }
    isPodcast() {
        return !1
    }
    isSelected(s, t) {
        return [this._obj.id, this._obj.url].includes(t)
    }
    isNative() {
        return !1
    }
    homepageUrl() {
        return null
    }
    subItems() {
        return this._obj.subItems.map(s => X(s, this._pub))
    }
}
const je = ({
        pub: e,
        selectedSectionId: s,
        sectionRawItems: t,
        isPublishContext: o
    }) => {
        const i = t.map(r => X(r, e)),
            l = r => {
                var a, u;
                return {
                    label: r.truncatedName(),
                    href: r.homepageUrl(),
                    slug: r.item.id,
                    isNative: r.isNative(),
                    noFollow: r.noFollow(),
                    logoUrl: (a = r.logoUrl) == null ? void 0 : a.call(r),
                    subItems: (u = r.subItems()) == null ? void 0 : u.map(l)
                }
            };
        return n(Ie, {
            items: i.map(l),
            className: f("sections-overflow", {
                "publish-menu": o
            }),
            selectedSlug: s,
            useHorizontalScrolling: o,
            pub: e
        })
    },
    Ze = be;
var k, O, I, K;
class We extends ae {
    constructor() {
        super(...arguments);
        h(this, "menuHeight", 0);
        h(this, "state", {
            animated: !0,
            hiding: !!(typeof window != "undefined" && ((O = (k = window.location.hash) == null ? void 0 : k.startsWith) != null && O.call(k, "#footnote") || (K = (I = window.location.hash) == null ? void 0 : I.startsWith) != null && K.call(I, "#tiktok")))
        });
        h(this, "onClick", t => {
            var o, i;
            ((o = t.target) != null && o.classList.contains("footnote-number") || (i = t.target) != null && i.classList.contains("footnote-anchor")) && (this.setState({
                hiding: !0
            }), setTimeout(this.hide, 0))
        });
        h(this, "onResize", () => {
            if (this.menuHeight = this.menuContent ? this.menuContent.getBoundingClientRect().height : 0, !this.buttonsContainer) return;
            const t = this.largeMenuPubTitle ? this.largeMenuPubTitle.getBoundingClientRect().width : 0,
                o = document.body.clientWidth,
                i = this.buttonsContainer.getBoundingClientRect().width,
                l = o > 630,
                r = l ? 24 * 2 : 12 * 2,
                a = l && .5 * o - i - r > .5 * t;
            this.setState({
                buttonsContainerWidth: a ? `${i}px` : "auto",
                centerTitle: a
            })
        });
        h(this, "onScroll", () => {
            if (this.props.always_show) {
                this.menuTop = 0, this.menuContent.style.position = "fixed", this.menuContent.style.top = "";
                return
            }
            if (this.state.hiding) return;
            const t = this.scrollTop;
            this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const o = Math.max(this.scrollTop, 0);
            if (this.scrollTop <= 0 || D() <= 0) this.menuTop = 0, this.menuContent.style.position = "fixed", this.menuContent.style.top = "";
            else if (!(this.scrollTop >= D()))
                if (this.scrollTop < t) {
                    const i = Math.max(this.scrollTop - this.menuHeight, 0);
                    this.menuTop > o ? (this.menuTop = o, this.menuContent.style.position = "fixed", this.menuContent.style.top = "") : (!this.menuTop || this.menuTop < i) && (this.menuTop = i, this.menuContent.style.top = `${this.menuTop}px`, this.menuContent.style.position = "")
                } else this.scrollTop > t && (this.menuContent.style.position === "fixed" && this.menuTop >= 0 ? (this.menuTop = o, this.menuContent.style.top = `${this.menuTop}px`, this.menuContent.style.position = "") : this.menuTop < o - this.menuHeight && this.menuContent.style.position !== "fixed" && (this.menuTop = -this.menuHeight, this.menuContent.style.top = `${this.menuTop}px`, this.menuContent.style.position = "fixed"))
        });
        h(this, "onHeadlineClick", t => {
            _(b.NAV_BAR_HOME_LINK_CLICKED)
        });
        h(this, "hide", () => {
            const t = Math.max(document.documentElement.scrollTop || document.body.scrollTop, 0);
            this.menuTop = t - this.menuHeight, this.menuContent.style.top = `${this.menuTop}px`, this.menuContent.style.position = "", this.setState({
                hiding: !1
            })
        })
    }
    componentDidMount() {
        typeof window != "undefined" && (window.addEventListener("scroll", this.onScroll), window.addEventListener("click", this.onClick), window.addEventListener("resize", this.onResize), this.onResize(), this.onScroll())
    }
    componentWillUnmount() {
        typeof window != "undefined" && (window.removeEventListener("scroll", this.onScroll), window.removeEventListener("click", this.onClick), window.removeEventListener("resize", this.onResize))
    }
    shouldShowSectionsNavBar() {
        return this.context.getConfigFor("show_menu_on_posts") && this.props.isPostView ? !0 : !this.props.isPostView && !this.props.lowChrome && !this.props.hideSections
    }
    isContributor() {
        return this.props.user && this.props.user.is_contributor
    }
    isSubscribed() {
        return Ze.userIsPaidSubscriber(this.props.user) || this.isContributor()
    }
    isFreeSubscribed() {
        return this.props.user && this.props.user.is_free_subscribed || this.props.freeSignup
    }
    render({
        className: t,
        freeSignup: o,
        freeSignupEmail: i,
        hideTitle: l,
        hide_subscribe_cta: r,
        isAccountContext: a,
        isMeetingsActive: u,
        isPublishContext: p,
        lowChrome: g,
        pub: m,
        showCustomerSupportModeModal: C,
        signupForFreeVariant: w,
        user: d
    }, {
        animated: N,
        buttonsContainerWidth: q,
        centerTitle: Q
    }) {
        const c = m,
            Y = typeof window == "undefined",
            P = !0;
        return n("div", {
            "data-testid": "navbar",
            className: f("main-menu", t, {
                animated: N,
                "with-nav": this.shouldShowSectionsNavBar(),
                "low-chrome": g,
                "with-wordmark": !!(!l && c.logo_url_wide)
            })
        }, n("div", {
            className: "main-menu-content",
            ref: y => this.menuContent = y
        }, n("div", {
            className: "topbar"
        }, n("div", {
            className: "topbar-content"
        }, !g && n(le, null, n("div", {
            className: f("navbar-logo-container", c.logo_url ? "" : "no-logo"),
            style: {
                width: q
            }
        }, c.logo_url && n("a", {
            href: a || p ? L(c) : "/",
            onClick: this.onHeadlineClick,
            native: P
        }, n("img", {
            className: "navbar-logo",
            src: H(c.logo_url, 96)
        }))), !l && n("h1", {
            className: f("navbar-title", {
                "left-align": !Q,
                loading: Y
            })
        }, n("a", {
            className: "navbar-title-link",
            href: a || p ? L(c) : "/",
            ref: y => this.largeMenuPubTitle = y,
            native: P
        }, c.logo_url_wide ? n("img", {
            className: "navbar-logo-wordmark",
            src: H(c.logo_url_wide, null, {
                height: 36 * 2,
                crop: "limit",
                leadingSegments: ["e_trim:10:white", "e_trim:10:transparent"]
            }),
            alt: c.name
        }) : c.name)), n(ke, {
            baseRef: y => this.buttonsContainer = y,
            freeSignup: o,
            freeSignupEmail: i,
            hide_subscribe_cta: r,
            isAccountContext: a,
            isMeetingsActive: u,
            isPublishContext: p,
            pub: m,
            showCustomerSupportModeModal: C,
            signupForFreeVariant: w,
            user: d
        }))), this.shouldShowSectionsNavBar() && n(Re, S({}, this.props)))), n("div", {
            className: "topbar-spacer"
        }))
    }
}
h(We, "contextType", Ne);

function Re({
    isPublishContext: e,
    pub: s,
    user: t,
    isChatActive: o,
    isMeetingsActive: i,
    hasMeetingsBooked: l,
    selectedSectionId: r
}) {
    const {
        language: a
    } = G();
    $();
    const {
        getSettingFor: u
    } = ye(), p = u("notes_feed_enabled"), g = !!(u("reader_referrals_enabled") && u("reader_referrals_leaderboard_enabled")), m = u("group_sections_and_podcasts_in_menu_enabled"), C = xe(s.navigationBarItems || [], {
        isFeedEnabled: p,
        isPodcastActive: s.podcast_enabled && s.show_pub_podcast_tab,
        isChatActive: o,
        isChatEnabled: !!s.threads_v2_enabled,
        isMeetingsActive: i,
        hasMultipleNewsletters: s.sections && s.sections.length > 0,
        isReaderReferralsLeaderboardActive: g,
        language: a
    }).filter(d => !d.is_hidden), w = e ? Ve({
        isAdmin: !!(t != null && t.is_admin),
        pub: s,
        showMeetings: i || l,
        language: a
    }) : Oe({
        groupNewsletters: m,
        navBarItems: C,
        pub: s,
        language: a
    });
    return n(je, {
        pub: s,
        selectedSectionId: r,
        sectionRawItems: w,
        isPublishContext: e
    })
}
const Ve = ({
        isAdmin: e,
        pub: s,
        showMeetings: t,
        language: o
    }) => {
        const {
            iString: i
        } = I18N.i(o), l = [];
        return l.push({
            id: "/publish/home",
            url: ue(s, {
                addBase: !0
            }),
            name: i("Home")
        }), l.push({
            id: "/publish/posts",
            url: "/publish/posts",
            name: i("Posts")
        }, {
            id: "/publish/podcasting",
            url: de(s, {
                addBase: !0
            }),
            name: i("Podcast")
        }, {
            id: "/publish/subscribers",
            url: ce(s, {
                addBase: !0
            }),
            name: i("Subscribers")
        }), e && (l.push({
            id: "/publish/stats",
            url: "/publish/stats",
            name: i("Stats")
        }), l.push({
            id: "/publish/recommendations",
            url: "/publish/recommendations",
            name: i("Recommendations")
        }), t && l.push({
            id: "/publish/meetings",
            url: "/publish/meetings",
            name: i("Meetings")
        }), l.push({
            id: "/publish/settings",
            url: me(s, {
                addBase: !0
            }),
            name: i("Settings")
        })), l
    },
    Oe = ({
        groupNewsletters: e = !1,
        navBarItems: s,
        pub: t,
        language: o
    }) => {
        const {
            iString: i
        } = I18N.i(o), l = [];
        let r = [];
        l.push({
            id: "/home",
            url: "/",
            name: i("Home")
        }), t.podcast_enabled && t.show_pub_podcast_tab && r.push({
            id: "/podcast",
            url: "/podcast",
            name: i("Podcast"),
            isPodcast: !0
        });
        for (const a of s) {
            const u = Pe(a);
            a.section ? r.push(a.section) : r.push({
                id: A(t, a, {
                    addBase: !1
                }),
                url: A(t, a, {
                    addBase: !a.standard_key
                }),
                name: Me(a),
                noFollow: !a.standard_key && u === "link"
            })
        }
        return e && (he({
            pub: t
        }) ? r = V({
            items: r,
            groups: [{
                name: "Videos",
                condition: a => R(a)
            }, {
                name: "Columns",
                condition: a => W({
                    item: a,
                    pub: t
                })
            }]
        }) : r = V({
            items: r,
            groups: [{
                name: i("Newsletters"),
                condition: a => W({
                    item: a,
                    pub: t
                })
            }, {
                name: i("Podcasts"),
                condition: a => R(a)
            }]
        })), pe({
            pub: t
        }) && (r = [{
            id: "/listen",
            url: "/listen",
            name: "Podcasts",
            noFollow: !1
        }, ...r.filter(a => {
            var u;
            return a.name !== "Podcasts" || !((u = a.subItems) != null && u.length)
        })]), [...l, ...r]
    },
    W = ({
        item: e,
        pub: s
    }) => _e({
        section: e,
        pub: s
    }) ? !0 : !e.subItems && !e.base_url && !(e.name && e.id && e.url) && !e.is_podcast,
    R = e => e.isPodcast || !e.subItems && !e.base_url && !(e.name && e.id && e.url) && e.is_podcast,
    V = ({
        items: e,
        groups: s
    }) => {
        const t = [];
        let o = e;
        for (const i of s) {
            const l = e.filter(i.condition);
            l.length > 0 && (t.push({
                name: i.name,
                subItems: l
            }), o = o.filter(r => !i.condition(r)))
        }
        return [...t, ...o]
    },
    Ke = "_container_d6w5c_1",
    $e = {
        container: Ke
    },
    ze = "/account/add-all-podcasts",
    Ge = "/p/how-do-i-add-a-bulwark-member-only",
    mt = ({
        firehoseFeedUrl: e,
        pub: s,
        section: t,
        trackingSource: o,
        variant: i = "default"
    }) => {
        const l = F(Ge, S({
                utm_source: o
            }, t ? {
                utm_content: t.id
            } : null)),
            r = F(ze, S({
                utm_source: o
            }, t ? {
                utm_content: t.id
            } : null)),
            a = e ? n(T.B3, {
                as: "li",
                font: "text"
            }, "Click here to set up your podcast app for", " ", n("a", {
                href: e,
                target: "_blank",
                rel: "noopener noreferrer"
            }, "everything in one feed")) : null,
            u = fe(s, {
                params: {
                    utm_source: o
                }
            });
        return n("div", {
            className: $e.container
        }, i === "member-only" ? n(j, {
            as: "ul",
            gap: 4
        }, n(T.B3, {
            as: "li",
            font: "text"
        }, "Want to listen without ads? Join Bulwark+ for exclusive ad-free versions of all Bulwark shows.", " ", n("a", {
            href: u,
            target: "_blank",
            rel: "noopener noreferrer"
        }, "Upgrade now")), n(T.B3, {
            as: "li",
            font: "text"
        }, "Already a Bulwark+ member? Login to access premium shows. ", n("a", {
            href: l
        }, "Learn more here"))) : n(j, {
            as: "ul",
            gap: 4
        }, n(T.B3, {
            as: "li",
            font: "text"
        }, "Learn about", " ", n("a", {
            href: l,
            target: "_blank",
            rel: "noopener noreferrer"
        }, "setting up your Bulwark+ private podcast feeds")), a || n(T.B3, {
            as: "li",
            font: "text"
        }, "Add the Bulwark Premium Show", " ", n("a", {
            href: r,
            target: "_blank",
            rel: "noopener noreferrer"
        }, "super feed"))))
    },
    Je = "_container_o4x4e_1",
    Xe = "_containerThreeColumn_o4x4e_13",
    qe = "_containerFourColumn_o4x4e_18",
    E = {
        container: Je,
        containerThreeColumn: Xe,
        containerFourColumn: qe
    },
    ht = ({
        children: e,
        columns: s = 2,
        paddingTop: t = 24
    }) => {
        const o = Se({
            paddingTop: t,
            paddingX: 16,
            paddingBottom: 32
        });
        return n("div", {
            className: f(E.container, o, {
                [E.containerThreeColumn]: s === 3,
                [E.containerFourColumn]: s === 4
            })
        }, e)
    },
    Qe = e => n(Te, U(S({}, e), {
        name: "BellIcon",
        svgParams: {
            viewBox: "0 0 20 20",
            height: 20,
            width: 20,
            fill: "none"
        }
    }), n("path", {
        d: "M3.54717 7.14905L2.80009 7.08297L2.79717 7.11595V7.14905H3.54717ZM2.91038 10.6428L2.24437 10.298H2.24436L2.91038 10.6428ZM1 15.1428H0.25C0.25 15.557 0.585786 15.8928 0.999999 15.8928L1 15.1428ZM1.63679 12.6832L2.30281 13.0281L1.63679 12.6832ZM16.4528 7.14907H17.2028V7.10282L17.1971 7.05691L16.4528 7.14907ZM17.0896 10.8385L17.7556 10.4937L17.0896 10.8385ZM19 15.1429V15.8929C19.1989 15.8929 19.3896 15.8138 19.5303 15.6732C19.6709 15.5325 19.75 15.3418 19.75 15.1429H19ZM18.3632 12.6832L17.6972 13.0281V13.0281L18.3632 12.6832ZM11.8822 16.4286C11.8822 17.4412 11.0709 18.25 10.085 18.25V19.75C11.9127 19.75 13.3822 18.2562 13.3822 16.4286H11.8822ZM10.085 18.25C9.09913 18.25 8.28782 17.4412 8.28782 16.4286H6.78782C6.78782 18.2562 8.25733 19.75 10.085 19.75V18.25ZM8.28782 16.4286V15.1429H6.78782V16.4286H8.28782ZM13.3822 16.4286V15.1429H11.8822V16.4286H13.3822ZM10.085 0.25C8.89057 0.25 7.20474 0.623466 5.74421 1.66361C4.25626 2.7233 3.0324 4.45632 2.80009 7.08297L4.29425 7.21512C4.48647 5.04178 5.4702 3.70027 6.61436 2.88543C7.78595 2.05106 9.15677 1.75 10.085 1.75V0.25ZM2.79717 7.14905C2.79717 7.71546 2.73571 8.36489 2.63006 8.95552C2.52161 9.56174 2.37824 10.0394 2.24437 10.298L3.57639 10.9877C3.81469 10.5275 3.98971 9.87319 4.10662 9.21966C4.22632 8.55054 4.29717 7.81245 4.29717 7.14905H2.79717ZM2.24436 10.298C2.08304 10.6095 1.89068 10.8906 1.66386 11.2217C1.44351 11.5434 1.19295 11.9093 0.97078 12.3384L2.30281 13.0281C2.47688 12.6919 2.67702 12.3969 2.90136 12.0694C3.11923 11.7514 3.36554 11.3949 3.57639 10.9877L2.24436 10.298ZM0.97078 12.3384C0.607085 13.0407 0.428923 13.7345 0.340527 14.2466C0.296032 14.5044 0.27347 14.721 0.261993 14.8761C0.256245 14.9538 0.25325 15.0165 0.25169 15.0617C0.25091 15.0843 0.250487 15.1026 0.25026 15.1162C0.250146 15.123 0.250081 15.1287 0.250045 15.1331C0.250026 15.1353 0.250015 15.1373 0.250009 15.1389C0.250005 15.1397 0.250003 15.1404 0.250002 15.1411C0.250001 15.1414 0.250001 15.1417 0.25 15.142C0.25 15.1422 0.25 15.1424 0.25 15.1424C0.25 15.1426 0.25 15.1428 1 15.1428C1.75 15.1428 1.75 15.143 1.75 15.1432C1.75 15.1433 1.75 15.1434 1.75 15.1435C1.75 15.1438 1.75 15.144 1.75 15.1441C1.75 15.1445 1.75 15.1448 1.75 15.145C1.74999 15.1454 1.74999 15.1456 1.74999 15.1454C1.75 15.1452 1.75001 15.1437 1.75005 15.1412C1.75013 15.1362 1.75033 15.1269 1.7508 15.1135C1.75172 15.0866 1.7537 15.0436 1.75791 14.9868C1.76633 14.8729 1.78357 14.7052 1.81867 14.5018C1.88947 14.0916 2.02971 13.5555 2.30281 13.0281L0.97078 12.3384ZM10.085 1.75C11.0068 1.75 12.2869 2.04746 13.3926 2.87498C14.4767 3.68634 15.4356 5.03759 15.7085 7.24122L17.1971 7.05691C16.8756 4.46053 15.712 2.73725 14.2914 1.67407C12.8924 0.627065 11.2858 0.25 10.085 0.25V1.75ZM15.7028 7.14907C15.7028 7.81063 15.7733 8.59469 15.8917 9.30825C16.0065 9.99938 16.1801 10.7132 16.4236 11.1834L17.7556 10.4937C17.6269 10.245 17.4821 9.72906 17.3715 9.06262C17.2646 8.4186 17.2028 7.71732 17.2028 7.14907H15.7028ZM16.4236 11.1834C16.6493 11.6193 16.9157 11.9442 17.1336 12.2143C17.3558 12.4898 17.5373 12.7194 17.6972 13.0281L19.0292 12.3384C18.7928 11.8818 18.5236 11.5484 18.3011 11.2726C18.0743 10.9913 17.902 10.7765 17.7556 10.4937L16.4236 11.1834ZM17.6972 13.0281C17.9703 13.5555 18.1105 14.0916 18.1813 14.5018C18.2164 14.7052 18.2336 14.8729 18.2421 14.9868C18.2463 15.0436 18.2482 15.0866 18.2492 15.1135C18.2496 15.1269 18.2498 15.1363 18.2499 15.1413C18.25 15.1438 18.25 15.1452 18.25 15.1455C18.25 15.1456 18.25 15.1455 18.25 15.145C18.25 15.1448 18.25 15.1445 18.25 15.1442C18.25 15.144 18.25 15.1438 18.25 15.1436C18.25 15.1435 18.25 15.1433 18.25 15.1432C18.25 15.143 18.25 15.1429 19 15.1429C19.75 15.1429 19.75 15.1427 19.75 15.1425C19.75 15.1424 19.75 15.1422 19.75 15.142C19.75 15.1417 19.75 15.1414 19.75 15.1411C19.75 15.1405 19.75 15.1397 19.75 15.1389C19.7499 15.1373 19.7499 15.1354 19.7499 15.1331C19.7499 15.1287 19.7498 15.123 19.7497 15.1162C19.7495 15.1026 19.7491 15.0843 19.7483 15.0617C19.7467 15.0165 19.7437 14.9539 19.738 14.8762C19.7265 14.721 19.7039 14.5045 19.6594 14.2467C19.571 13.7345 19.3929 13.0408 19.0292 12.3384L17.6972 13.0281ZM0.999999 15.8928L19 15.8929V14.3929L1 14.3928L0.999999 15.8928Z"
    })),
    M = ({
        children: e,
        dismissKey: s,
        dismissDurationInSeconds: t,
        beforeDismiss: o,
        className: i,
        level: l = "info"
    } = {}) => {
        const [r, a] = Be(s, t, o);
        if (!r) return n("div", {
            className: f("banner", l, i)
        }, e, n(J, {
            width: 12,
            height: 12,
            className: "banner-close",
            onClick: u => {
                u.preventDefault(), u.stopPropagation(), a()
            }
        }))
    },
    pt = () => (ge(() => {
        _(b.GO_PAID_CTA_SHOWN, {
            type: "banner"
        })
    }, []), n(M, {
        dismissKey: "go-paid-banner.dismissed",
        dismissDurationInSeconds: 3 * Ce,
        beforeDismiss: () => {
            _(b.GO_PAID_CTA_DISMISSED, {
                type: "banner"
            })
        }
    }, n(Qe, {
        stroke: "var(--print_pop)",
        fill: "var(--print_pop)",
        strokeWidth: 0,
        className: "go-paid-banner-bell"
    }), n("a", {
        href: "/publish/settings#connect",
        native: !0,
        onClick: () => {
            _(b.GO_PAID_CTA_CLICKED, {
                type: "banner"
            })
        }
    }, "Turn on paid subscriptions"), " ", n("span", {
        className: "go-paid-banner-text"
    }, "to get paid for your writing"))),
    _t = ({
        action: e = "connect"
    }) => {
        const {
            getConfigFor: s
        } = $(), [t, o] = z(!1);
        return t || !s("twitter_connect_flows_enabled") ? null : n(M, {
            level: "setup",
            dismissKey: "setup-twitter-banner.dismissed",
            beforeDismiss: () => {
                _(b.SETUP_TWITTER_CTA_DISMISSED, {
                    type: "banner"
                })
            }
        }, n("div", {
            className: "setup-twitter-banner-header"
        }, "Help more readers discover your writing"), n("p", null, "Connect your Twitter account so we can notify your followers about your Substack."), e === "connect" && n(Z, {
            className: "twitter-button centered-icon",
            onClick: () => {
                _(b.SETUP_TWITTER_CTA_CONNECT_CLICKED, {
                    type: "banner"
                }), location.href = we({
                    type: "connect_pub"
                })
            }
        }, "Connect Twitter"), e === "set-discoverable" && n(Ee, {
            className: "minimal",
            action: "/api/v1/twitter/set-discoverable",
            method: "put",
            onSuccess: () => o(!0)
        }, n("input", {
            type: "hidden",
            name: "d",
            value: "true"
        }), n(Z, {
            className: "twitter-button centered-icon",
            type: "Submit",
            onClick: () => _(b.SETUP_TWITTER_CTA_SETDISCOVERABLE_CLICKED, {
                type: "banner"
            })
        }, "Turn on Discoverability")), n("div", {
            className: "twitter-permission-notice"
        }, "We never tweet without your explicit permission"))
    },
    bt = () => {
        const {
            iString: e,
            iTemplate: s
        } = G();
        return n(M, {
            level: "coming-soon",
            dismissKey: "coming-soon-banner.dismissed",
            beforeDismiss: () => {
                Le.put("/api/v1/publication_settings").send({
                    seen_coming_soon_explainer: !0
                })
            }
        }, n("div", {
            className: "coming-soon-banner-header"
        }, e("Welcome to Substack!")), n("br", null), n("p", null, e(`We've created this "Coming Soon" post for you. To edit it, click the three-dot icon.`)), n("br", null), n("p", null, e(`It's just a placeholder and won't be sent out to your subscribers. To email them, click the "New Post" button.`)))
    },
    ft = ({
        children: e,
        className: s,
        level: t = "info",
        onClose: o
    } = {}) => {
        const [i, l] = z(!1);
        if (!(i && t !== "error")) return n("div", {
            className: f("banner", t, s)
        }, t !== "error" && n(J, {
            width: 12,
            height: 12,
            className: "banner-close",
            onClick: r => {
                r.preventDefault(), r.stopPropagation(), o && o(), l(!0)
            }
        }), e)
    };
export {
    ft as A, mt as B, bt as C, pt as G, We as M, _t as S, Me as a, ht as b, Pe as g, xe as r
};