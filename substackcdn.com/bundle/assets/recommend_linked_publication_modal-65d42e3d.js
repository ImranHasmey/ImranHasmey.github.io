var Ss = Object.defineProperty,
    ks = Object.defineProperties;
var Ps = Object.getOwnPropertyDescriptors;
var Qe = Object.getOwnPropertySymbols;
var eo = Object.prototype.hasOwnProperty,
    to = Object.prototype.propertyIsEnumerable;
var mt = (t, s, o) => s in t ? Ss(t, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : t[s] = o,
    v = (t, s) => {
        for (var o in s || (s = {})) eo.call(s, o) && mt(t, o, s[o]);
        if (Qe)
            for (var o of Qe(s)) to.call(s, o) && mt(t, o, s[o]);
        return t
    },
    N = (t, s) => ks(t, Ps(s));
var K = (t, s) => {
    var o = {};
    for (var i in t) eo.call(t, i) && s.indexOf(i) < 0 && (o[i] = t[i]);
    if (t != null && Qe)
        for (var i of Qe(t)) s.indexOf(i) < 0 && to.call(t, i) && (o[i] = t[i]);
    return o
};
var he = (t, s, o) => (mt(t, typeof s != "symbol" ? s + "" : s, o), o);
var ue = (t, s, o) => new Promise((i, n) => {
    var a = c => {
            try {
                l(o.next(c))
            } catch (d) {
                n(d)
            }
        },
        r = c => {
            try {
                l(o.throw(c))
            } catch (d) {
                n(d)
            }
        },
        l = c => c.done ? i(c.value) : Promise.resolve(c.value).then(a, r);
    l((o = o.apply(t, s)).next())
});
import {
    c as bo,
    X as Ns
} from "./x-fc38e969.js";
import {
    k as Nt,
    t as Q,
    E as Z,
    u as fe,
    bj as Is,
    b_ as Ts,
    hm as Bs,
    hn as xs,
    h2 as It,
    y as e,
    i as G,
    gN as vo,
    bf as Ms,
    bH as Ge,
    a$ as it,
    gc as Co,
    aU as Ls,
    d as Tt,
    br as Es,
    ea as Rs,
    cI as tt,
    ap as Bt,
    cX as xt,
    U as ne,
    o as ye,
    p as ie,
    c8 as As,
    h as V,
    dd as Mt,
    ho as So,
    bJ as Lt,
    cy as Hs,
    cZ as Ce,
    a9 as Ae,
    aa as Et,
    C as ko,
    ag as Fs,
    a3 as Rt,
    s as Po,
    dy as oo,
    hp as ot,
    aX as zs,
    D as No,
    aD as ft,
    dl as At,
    dV as Io,
    W as Os,
    hq as $s,
    r as wt,
    A as To,
    gZ as Ds,
    K as at,
    cg as Us,
    aL as yt,
    hr as qs,
    hs as Gs,
    ht as Vs,
    du as Ws,
    hu as Bo,
    c5 as js,
    b3 as Ht,
    hv as Xs,
    hw as xo,
    hx as Ks,
    cG as Ys,
    cE as Js,
    bc as Qs,
    eY as Zs,
    bd as en,
    aj as tn,
    a0 as on,
    hk as sn,
    hy as nn,
    b8 as an
} from "./tracking-376cff7a.js";
import {
    r as pe,
    P as Ve,
    M as rn
} from "./_baseEach-63ad03e0.js";
import {
    a as Mo
} from "./IntroPopup-dd5900b8.js";
import {
    S as Ne,
    Z as ln,
    j as Lo,
    v as so,
    N as Eo,
    _ as cn,
    $ as dn,
    k as un,
    T as mn,
    a0 as pn,
    a1 as hn
} from "./post-759b177e.js";
import {
    t as we,
    S as Ro,
    b as gn,
    i as _n,
    T as fn,
    f as wn,
    y as yn,
    B as bn
} from "./share_dialog-b74d3337.js";
import {
    V as Ao,
    A as vn
} from "./arrow-right-c1e00e5a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    w as Cn,
    c as L,
    b as me,
    a as f,
    u as z,
    n as Ft,
    T as C,
    F as y,
    f as xe,
    i as st,
    j as We,
    o as rt,
    S as zt,
    B as J,
    l as Ho,
    p as Sn,
    O as pt
} from "./FlexBox-1a755411.js";
import {
    o as kn
} from "./omit-c350a7df.js";
import {
    PageMetaData as Ot
} from "./PageMetaData-6ce42dce.js";
import {
    aE as x,
    M as Pn,
    aW as Nn,
    A as Fo,
    b as In,
    aX as zo,
    aY as lt,
    aZ as Tn,
    a_ as Bn,
    f as xn,
    a$ as Mn,
    V as Ln,
    $ as En,
    b0 as Rn,
    au as An,
    E as Hn
} from "./homepage_hooks-47e7a4e7.js";
import {
    p as Fn
} from "./pick-4ce81580.js";
import {
    r as zn,
    z as Se,
    B as je,
    g as $t,
    D as On,
    E as Oo,
    G as $o,
    H as Dt,
    J as bt,
    K as $n,
    L as Do,
    O as Uo,
    Q as Dn,
    U as Un,
    V as qo,
    W as Go,
    X as qn,
    Y as Vo,
    Z as Gn,
    _ as Vn,
    $ as Wn,
    y as jn
} from "./Attachments-84a6967e.js";
import {
    D as Xn
} from "./Divider-0a4efe7e.js";
import {
    g as Kn
} from "./groupBy-ab90e519.js";
import {
    s as Wo
} from "./sortBy-97ae0487.js";
import {
    R as Xe,
    B as vt
} from "./user-e16f1619.js";
import {
    u as Yn
} from "./free_email_form.module-135823b4.js";
import {
    f as Jn,
    a as Qn,
    c as Zn,
    b as ei
} from "./profile-a781fd85.js";
import {
    M as ti
} from "./Metadata-be2b4cf2.js";
import {
    P as oi
} from "./plus-3216546d.js";
import {
    F as si
} from "./free_email_form-1d3fc4be.js";
import {
    S as ni,
    a as ii
} from "./Providers-8e1c708e.js";
import {
    S as Ct
} from "./search-166a516b.js";
import {
    c as ai
} from "./chunk-4b6c9fda.js";
import {
    A as ri
} from "./Avatar-723c95b0.js";
import {
    f as li
} from "./findIndex-58c4c004.js";
import {
    g as ci,
    f as no
} from "./publication-1bbad178.js";
import {
    d as jo,
    u as Ut,
    P as Ze,
    b as Xo,
    H as Ko,
    e as di,
    V as Yo,
    f as ui
} from "./AlertDialog-d9b964a5.js";
import {
    R as mi
} from "./RightArrowIcon-8574f1b5.js";
import {
    S as pi
} from "./TabBar-a04beb26.js";
import {
    C as hi
} from "./chevron-right-925bdc12.js";
import {
    B as gi,
    b as Jo
} from "./Banner-e2e1e503.js";
import {
    M as _i,
    a as io
} from "./Menu-5342012d.js";
import {
    C as Qo
} from "./chevron-down-6d7770f2.js";
import {
    D as fi
} from "./_baseIteratee-fbbabc87.js";
import {
    u as wi
} from "./dropdown_menu_typed-c164b42b.js";
import {
    A as yi
} from "./align-left-a2ee54ed.js";
import {
    C as bi,
    B as St,
    u as vi,
    T as Ci
} from "./HoverCard-cbdee1d2.js";
import {
    M as Si
} from "./modal-5dbf091c.js";
import {
    M as ki,
    a as Pi,
    b as Ni
} from "./Modal-ab851ad1.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            s = new Error().stack;
        s && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[s] = "393ed4e1-6114-4fd2-be68-eed5255b1c89", t._sentryDebugIdIdentifier = "sentry-dbid-393ed4e1-6114-4fd2-be68-eed5255b1c89")
    } catch (o) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = bo("Circle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ii = bo("LayoutList", [
    ["rect", {
        width: "7",
        height: "7",
        x: "3",
        y: "3",
        rx: "1",
        key: "1g98yp"
    }],
    ["rect", {
        width: "7",
        height: "7",
        x: "3",
        y: "14",
        rx: "1",
        key: "1bb6yr"
    }],
    ["path", {
        d: "M14 4h7",
        key: "3xa0d5"
    }],
    ["path", {
        d: "M14 9h7",
        key: "1icrd9"
    }],
    ["path", {
        d: "M14 15h7",
        key: "1mj8o2"
    }],
    ["path", {
        d: "M14 20h7",
        key: "11slyb"
    }]
]);
class Ti extends Nt {
    constructor(o, i) {
        super(o, i);
        he(this, "onTabClick", o => i => {
            i.preventDefault(), this.loadTab(o)
        });
        he(this, "onSearchInput", o => {
            this.state.tab.id === "search" && this.loadTab("search", o.target.value || "")
        });
        he(this, "onSearchKeyDown", o => {
            this.state.tab.id === "search" && o.key === "Escape" && (o.target.blur(), this.loadTab(this.state.tabs[0].id))
        });
        he(this, "onPostClicked", (o, i, n, a) => {
            Q(Z.ARCHIVE_PAGE_POST_CLICKED, {
                post_id: i,
                tab: this.state.tab.id,
                rank_in_feed: n,
                source: a != null ? a : this.props.source
            })
        });
        he(this, "onSearchBlur", o => {
            if (this.state.tab.id === "search" && !o.target.value) {
                if (!this.state.tab.fullyLoaded) {
                    setTimeout(() => {
                        this.searchInput.focus()
                    }, 0);
                    return
                }
                this.loadTab(this.state.tabs[0].id, "")
            }
        });
        he(this, "loadTab", (o, i) => ue(this, null, function*() {
            const n = this.state.tabs.find(d => d.id === o);
            let a = !1;
            if (n.id === "search" && typeof i == "string" && n.query !== i && (a = !0, n.query = i, n.posts = null, n.fullyLoaded = !1, n.loading = !1, n.loadingError = null), n.id !== this.state.tab.id ? (this.setState({
                    tab: n
                }, () => {
                    n.id === "search" && this.searchInput && (this.searchInput.focus(), this.searchInput.select())
                }), this.props.stateInUrl && typeof window != "undefined" && window.history.replaceState && window.history.replaceState({}, document.title, fe({
                    sort: n.id,
                    search: n.query || null
                }))) : a && this.props.stateInUrl && typeof window != "undefined" && window.history.replaceState && window.history.replaceState({}, document.title, fe({
                    search: n.query || null
                })), n.loading || n.fullyLoaded) return;
            if (n.id === "search" && !n.query) {
                n.posts = [], n.fullyLoaded = !0, this.setState({
                    tabs: this.state.tabs
                });
                return
            }
            const r = Is();
            if (n.loading = r, n.loadingError = null, this.setState({
                    tabs: this.state.tabs
                }), n.id === "search" && n.query && (yield new Promise(d => setTimeout(d, 300)), n.loading !== r)) return;
            !this.state.tabs.find(d => d.posts || d.fullyLoaded || d.loading || d.loadingError) && this.props.delayFirstLoad && (yield new Promise(d => setTimeout(d, this.props.delayFirstLoad)));
            const c = this.props.pub ? "/api/v1/archive" : this.props.profile ? "/api/v1/profile-archive" : null;
            try {
                const d = this.props.maxPosts ? this.props.maxPosts * 2 : this.getFetchLimit(),
                    h = (yield pe.get(c).query(v(v(v({
                        sort: n.id === "search" ? "new" : n.id,
                        search: n.id === "search" ? n.query : "",
                        offset: (n.posts || []).length,
                        limit: this.props.maxPosts ? this.props.maxPosts * 2 : this.getFetchLimit(),
                        type: this.props.isPodcast ? "podcast" : void 0,
                        rss_episodes_only: this.props.isPodcast && !this.props.sectionId ? !0 : void 0
                    }, this.props.postTagId && {
                        post_tag_id: this.props.postTagId
                    }), this.props.sectionId && {
                        section_id: this.props.sectionId
                    }), this.props.profile && {
                        profile_user_id: this.props.profile.id
                    }))).body;
                if (this.props.onPostsLoaded && this.props.onPostsLoaded({
                        posts: h
                    }), n.loading !== r) return;
                n.posts = n.posts ? n.posts.concat(h) : h, n.fullyLoaded = h.length < d || this.props.maxPosts && n.posts.length >= this.props.maxPosts
            } catch (d) {
                console.error("Failed to load tab:", d), n.loadingError = d
            }
            n.loading = !1, this.setState({
                tabs: this.state.tabs.map(d => d.id === n.id ? n : d),
                tab: n
            })
        }));
        he(this, "onChange", ({
            post: o
        }) => {
            o && (Ts(this, i => {
                let n = !1;
                const a = i.tabs.map(r => r.posts).filter(r => Array.isArray(r));
                for (const r of a) {
                    const l = r.findIndex(c => c.id === o.id);
                    l !== -1 && (r[l] = o, n = !0)
                }
                n && this.setState({
                    tabs: i.tabs
                })
            }), this.props.onChange && this.props.onChange(o))
        });
        if (!(this.props.pub || this.props.profile)) throw new Error("Archive must be loaded for a publication or a profile");
        this.loadTab = this.loadTab.bind(this), this.state = this.getTabs()
    }
    componentDidMount() {
        this.loadTab(this.state.tab.id)
    }
    componentWillUnmount() {
        this.state.tab.id === "search" && this.searchInput && this.searchInput.blur()
    }
    componentDidUpdate(o) {
        (o.hideTop !== this.props.hideTop || o.newPosts !== this.props.newPosts) && this.setState(this.getTabs())
    }
    getTabs() {
        var a, r;
        let o = [];
        const {
            iString: i
        } = this.props;
        o.push({
            id: "new",
            title: i("Latest"),
            posts: this.props.newPosts,
            fullyLoaded: !!(this.props.maxPosts && this.props.newPosts)
        }), (!this.props.newPosts || this.props.newPosts.length >= this.getFetchLimit()) && (this.props.hideTop || o.push({
            id: "top",
            title: i("Top"),
            posts: this.props.topPosts,
            fullyLoaded: !!(this.props.maxPosts && this.props.topPosts)
        }), (a = this.props.pub) != null && a.community_enabled && ((r = this.props.pub) != null && r.has_community_content) && o.push({
            id: "community",
            title: i("Discussions"),
            posts: this.props.communityPosts,
            fullyLoaded: !!(this.props.maxPosts && this.props.communityPosts)
        })), o = this.props.sortTabs && this.props.sortTabs(o) || o, (this.props.sort === "search" || !(this.props.newPosts && this.props.newPosts.length < this.getFetchLimit())) && o.push({
            id: "search",
            title: i("Search"),
            posts: this.props.searchPosts,
            fullyLoaded: !!(this.props.maxPosts && this.props.searchPosts),
            query: this.props.search || "",
            hidden: !0
        });
        const n = o.find(l => l.id === this.props.sort) || this.props.search && o.find(l => l.id === "search") || o[0];
        return {
            tabs: o,
            tab: n
        }
    }
    getFetchLimit() {
        return this.props.maxPosts || 12
    }
    render({
        authorInMeta: o,
        className: i,
        disableInteractive: n,
        emptyMessage: a,
        filterPostsPredicate: r,
        hideAuthor: l,
        hideSearchTab: c,
        hideShare: d,
        isBelowTheFold: h,
        isPodcast: w,
        maxPosts: g,
        maxTitleLength: b,
        pinnedPosts: u,
        profile: p,
        pub: m,
        renderLoading: _,
        renderPosts: I,
        renderTabs: S,
        renderSeeAll: P,
        showMonthDividers: B,
        showPins: A,
        showPublicationName: E,
        source: T,
        user: F,
        iString: O,
        iTemplate: M
    }, {
        tabs: R,
        tab: k
    }) {
        a = a || O("No posts");
        const D = B && k.id === "new",
            $ = R.find(U => U.id === "search"),
            Y = R.find(U => U.id === "community");
        let H = Array.isArray(k.posts) ? k.posts.filter(U => !(m && k.id === "top" && U.top_exclusions.includes(m.id))).filter(U => m != null && m.section && (u != null && u.length) ? !u.find(ee => ee.id === U.id) : !0).filter(U => !Bs.includes(m == null ? void 0 : m.subdomain) || U.audience === "everyone" || (F == null ? void 0 : F.is_subscribed)).filter(r || (() => !0)) : [];
        m != null && m.section && (u != null && u.length) && ["new", "top"].includes(k.id) && (H = [...u, ...H]);
        const W = H.length === 0,
            le = !H && !k.loadingError;
        H.some && H.some(U => U.cover_image), p && new Map(p.publicationUsers.map(U => [U.publication.id, U.publication]));
        const ce = g ? H.slice(0, g) : H,
            de = I ? I({
                posts: ce,
                linkToComments: k === Y,
                onClickPost: ({
                    event: U,
                    post: ee,
                    index: te,
                    source: Ee
                }) => this.onPostClicked(U, ee.id, te, Ee),
                postGroups: D ? xi(ce, m.language) : null
            }) : [],
            be = w ? xs({
                pub: m,
                section: m.section,
                params: {
                    sort: k.id,
                    search: k.query
                }
            }) : It(m, {
                params: {
                    sort: k.id,
                    search: k.query
                }
            }),
            Pe = P ? P({
                url: be
            }) : e("a", {
                className: "portable-archive-all",
                href: be,
                native: !0
            }, O("See all"), " ", e(mi, {
                height: 12,
                width: 12
            })),
            _e = _ ? _() : null;
        return e(vo.Consumer, null, ({
            getConfigFor: U
        }) => e(ni.Consumer, null, ({
            open: ee
        }) => e("div", {
            className: L("portable-archive", i, {
                "empty-list": W
            })
        }, S && S({
            activeTabId: k.id,
            isSearching: k === $,
            showSearch: !!($ && !c),
            searchInputProps: {
                value: $ == null ? void 0 : $.query,
                onKeyDown: this.onSearchKeyDown,
                onKeyPress: this.onSearchInput,
                onInput: this.onSearchInput,
                onChange: this.onSearchInput,
                onBlur: this.onSearchBlur
            },
            searchRef: te => {
                this.searchInput = te
            },
            tabs: R.filter(te => !te.hidden),
            onClick: te => {
                this.loadTab(te)
            },
            onClickSearch: () => {
                if (U("enable_client_publication_search_cache")) {
                    ee();
                    return
                }
                this.loadTab("search")
            },
            onClickSearchClose: () => {
                this.loadTab(R[0].id)
            }
        }), e("div", {
            className: "portable-archive-list"
        }, k.loadingError ? e("p", {
            className: "portable-archive-empty"
        }, O("Failed to load posts")) : H.length === 0 && !k.loading ? e("p", {
            className: "portable-archive-empty"
        }, k.id !== "search" ? a : k.query ? O("No results") : M `Search ${m?m.name:""}`) : e(G, null, de, !g && !le && !k.loading && !k.fullyLoaded && e(Ao, {
            threshold: 640,
            onVisible: () => this.loadTab(k.id, k.query)
        })), k.loading || le ? _e : g && H.length >= g && Pe))))
    }
}
const Bi = Cn(Ti),
    xi = (t, s = "en") => {
        let o;
        const i = [];
        return t.forEach((n, a) => {
            const r = Ms(n.post_date).locale(s).format("MMMM YYYY");
            r !== o ? (a === 0 ? i.push({
                label: "",
                posts: [n]
            }) : i.push({
                label: r,
                posts: [n]
            }), o = r) : i[i.length - 1].posts.push(n)
        }), i
    },
    Mi = "_container_1k0rr_1",
    Ie = {
        container: Mi,
        "full-width": "_full-width_1k0rr_5",
        "full-width-with-sidebar": "_full-width-with-sidebar_1k0rr_9",
        "show-below": "_show-below_1k0rr_22",
        "full-width-with-border-and-sidebar": "_full-width-with-border-and-sidebar_1k0rr_27",
        "vertical-divider": "_vertical-divider_1k0rr_42",
        "three-column-width": "_three-column-width_1k0rr_67",
        "three-column-width-with-sidebar": "_three-column-width-with-sidebar_1k0rr_68",
        "two-column-width": "_two-column-width_1k0rr_109",
        "one-column-two-column": "_one-column-two-column_1k0rr_124",
        "one-column-two-column-one-column": "_one-column-two-column-one-column_1k0rr_152"
    },
    ae = ({
        children: t,
        hideVerticalDividers: s,
        showContentBelowOnMobile: o,
        stretchVertically: i,
        variant: n
    }) => {
        const a = s ? void 0 : "detail-themed";
        return e("div", {
            style: i ? {
                flexGrow: 1,
                display: "flex",
                alignItems: "stretch"
            } : void 0
        }, e("div", {
            className: L(Ie.container, Ie[n], {
                [Ie["show-below"]]: o
            })
        }, t, n === "full-width-with-border-and-sidebar" && e(me, {
            className: Ie["vertical-divider"],
            borderRight: a
        }), n === "one-column-two-column-one-column" && e(G, null, e(me, {
            className: Ie["vertical-divider"],
            borderRight: a
        }), e(me, {
            className: Ie["vertical-divider"],
            borderRight: a
        })), n === "one-column-two-column" && e(me, {
            className: Ie["vertical-divider"],
            borderRight: a
        })))
    },
    Le = ({
        numColumns: t = 4,
        paddingBottom: s = 24,
        paddingTop: o = 24
    }) => e(ae, {
        variant: t === 4 ? "full-width" : t === 3 ? "three-column-width" : "two-column-width"
    }, e(f, {
        paddingBottom: s,
        paddingTop: o,
        paddingX: 8
    }, e(me, {
        borderBottom: "detail-themed"
    }))),
    Li = Ge(({
        animated: t = !0,
        variant: s
    }, o) => ["grid", "grid-groups"].includes(s) ? e(f, {
        gap: 12,
        ref: o
    }, e(Ne, {
        animated: t,
        aspectRatio: zn
    }), e(f, {
        gap: 8
    }, e(Ne, {
        animated: t,
        height: 24,
        width: "70%"
    }), e(Ne, {
        animated: t,
        height: 20,
        width: "90%"
    }), e(Ne, {
        animated: t,
        height: 20,
        width: "50%"
    }))) : s === "list" ? e(f, {
        gap: 8,
        ref: o
    }, e(Ne, {
        animated: t,
        height: 28,
        width: "60%"
    }), e(Ne, {
        animated: t,
        height: 24,
        width: "80%"
    }), e(Ne, {
        animated: t,
        height: 20,
        width: "20%"
    })) : null),
    Ei = "_loadingContainerGrid_3eyf1_1",
    Ri = "_loadingContainerList_3eyf1_9",
    ao = {
        loadingContainerGrid: Ei,
        loadingContainerList: Ri
    },
    qt = Ge(({
        animated: t = !0,
        postCount: s,
        variant: o
    }, i) => e("div", {
        className: L({
            [ao.loadingContainerGrid]: ["grid", "grid-groups"].includes(o),
            [ao.loadingContainerList]: o === "list"
        }),
        ref: i
    }, Array.from(new Array(s)).map(() => e(Li, {
        variant: o,
        animated: t
    })))),
    Ai = "_searchInput_f4mjb_1",
    Hi = "_monthHeader_f4mjb_8",
    ro = {
        searchInput: Ai,
        monthHeader: Hi
    },
    Gt = ({
        children: t,
        communityPosts: s,
        delayFirstLoad: o,
        filterPostsPredicate: i,
        isBelowTheFold: n,
        isPodcast: a,
        maxPosts: r,
        newPosts: l,
        pinnedPosts: c,
        postTagId: d,
        pub: h,
        search: w,
        searchPosts: g,
        sectionId: b,
        showMonthDividers: u,
        sort: p,
        sortTabs: m,
        source: _,
        user: I,
        variant: S = "list",
        onPostsLoaded: P
    }) => {
        const {
            iString: B
        } = z(), {
            isMobile: A
        } = x(), {
            getSettingFor: E
        } = Ft(), T = it(), F = Co(E("post_preview_crop_gravity"), ["center", "auto"]);
        return e(jo, {
            cropGravity: F,
            hideSubtitlesOnGrid: !!T.getConfigFor("post_preview_hide_subtitles_on_grid"),
            highlightByline: !!T.getConfigFor("post_preview_highlight_byline")
        }, e(Bi, {
            communityPosts: s,
            delayFirstLoad: o,
            filterPostsPredicate: i,
            isBelowTheFold: n,
            isPodcast: a,
            maxPosts: r,
            newPosts: l,
            pinnedPosts: c,
            postTagId: d,
            pub: h,
            renderPosts: ({
                posts: O,
                linkToComments: M,
                onClickPost: R,
                postGroups: k
            }) => k ? k.map(({
                label: D,
                posts: $
            }) => e(G, null, D && e(G, null, e(Le, {
                paddingTop: 8,
                paddingBottom: 8
            }), e(C.Meta, {
                as: "h3",
                className: ro.monthHeader,
                color: "pub-accent",
                paddingBottom: 24
            }, D)), t({
                posts: $,
                linkToComments: M,
                onClickPost: R
            }))) : t({
                posts: O,
                linkToComments: M,
                onClickPost: R
            }),
            renderLoading: () => e(qt, {
                variant: S,
                postCount: r != null ? r : 7
            }),
            renderSeeAll: ({
                url: O
            }) => S === "grid-groups" ? null : e(y, {
                paddingTop: 16,
                paddingX: A ? 0 : 8
            }, e(xe, {
                href: O,
                trailing: e(hi, {
                    size: 20
                }),
                priority: "secondary",
                "data-testid": "archive-view-all"
            }, B("See all"))),
            renderTabs: ({
                activeTabId: O,
                isSearching: M,
                tabs: R,
                searchInputProps: k,
                searchRef: D,
                showSearch: $,
                onClick: Y,
                onClickSearch: H,
                onClickSearchClose: W
            }) => S === "grid-groups" ? null : M ? e(y, {
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 16,
                paddingX: A ? 0 : 8
            }, e(y, {
                gap: 4,
                alignItems: "center",
                paddingLeft: 8
            }, e(Ct, {
                size: 20
            }), e("input", N(v({}, k), {
                ref: D,
                type: "text",
                placeholder: B("Search..."),
                className: ro.searchInput,
                autoFocus: !0
            }))), e(st, {
                rounded: !0,
                onClick: W
            }, e(Ns, {
                size: 20
            }))) : $ || R.length > 1 ? e(y, {
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 16,
                paddingX: A ? 0 : 8
            }, e(pi, {
                value: O,
                tabs: R.map(le => ({
                    value: le.id,
                    children: e(G, null, le.title)
                })),
                onChange: Y
            }), $ && e(st, {
                priority: "tertiary",
                onClick: H
            }, e(Ct, {
                height: 20
            }))) : null,
            sectionId: b,
            search: w,
            searchPosts: g,
            showMonthDividers: u,
            sort: p,
            sortTabs: m,
            source: _,
            stateInUrl: !0,
            user: I,
            onPostsLoaded: P
        }))
    },
    Fi = "_container_12rzz_1",
    zi = "_divider_12rzz_7",
    Oi = "_dividerVertical_12rzz_7",
    j = {
        container: Fi,
        divider: zi,
        dividerVertical: Oi,
        "long-divider": "_long-divider_12rzz_12",
        "two-small-one-large": "_two-small-one-large_12rzz_28",
        "two-column-grid": "_two-column-grid_12rzz_87",
        "three-column-grid": "_three-column-grid_12rzz_114",
        "four-column-grid": "_four-column-grid_12rzz_141",
        "one-column-list": "_one-column-list_12rzz_168",
        "large-listing-listing-column": "_large-listing-listing-column_12rzz_175",
        "square-square-column": "_square-square-column_12rzz_182",
        "two-column-list": "_two-column-list_12rzz_198",
        "five-up": "_five-up_12rzz_209",
        "vertical-divider": "_vertical-divider_12rzz_251",
        "mini-row": "_mini-row_12rzz_299",
        "three-column-mini-row": "_three-column-mini-row_12rzz_320"
    },
    q = t => {
        const {
            flex: s,
            hideImages: o,
            hideHorizontalDividers: i,
            hideVerticalDividers: n,
            linkToComments: a,
            posts: r,
            pub: l,
            source: c,
            user: d,
            utm: h,
            variant: w,
            onChange: g,
            onClickPost: b
        } = t;
        if (w === "two-three-two") return e(Di, v({}, t));
        if (w === "two-small-three-medium") return e($i, v({}, t));
        if (["mini-row", "three-column-mini-row"].includes(w)) return e(Ui, v({}, t));
        const u = n ? void 0 : "detail-themed",
            p = i ? void 0 : "detail-themed";
        return e("div", {
            style: s === "grow" ? {
                flexGrow: 1,
                display: "flex",
                alignItems: "stretch"
            } : void 0
        }, e("div", {
            className: L(j.container, j[w])
        }, r.map((m, _) => e(G, null, _ > 0 && ["one-column-list", "two-column-list", "two-column-grid", "three-column-grid", "four-column-grid", "large-listing-listing-column"].includes(w) && e(y, {
            className: j.divider,
            borderBottom: p
        }), _ % 2 === 0 && _ > 0 && ["two-column-grid"].includes(w) && e(y, {
            className: j["long-divider"],
            borderBottom: p
        }), _ % 4 === 0 && _ > 0 && ["four-column-grid"].includes(w) && e(y, {
            className: j["long-divider"],
            borderBottom: p
        }), e(Se, {
            testid: ["large-listing-listing-column", "two-small-one-large"].includes(w) ? `magazine-spot-${_+1}` : void 0,
            hideImage: o,
            linkToComments: a,
            post: m,
            pub: l,
            user: d,
            utm: h,
            variant: Zo(w, _),
            onChange: g,
            onClick: b && c ? I => {
                b({
                    event: I,
                    post: m,
                    index: _,
                    source: c
                })
            } : void 0
        }), w === "five-up" && _ === r.length - 1 && e(G, null, e(y, {
            className: j.divider,
            borderBottom: p
        }), e(y, {
            className: j.divider,
            borderBottom: p
        }), e(y, {
            borderRight: u,
            className: j["vertical-divider"]
        }), e(y, {
            borderRight: u,
            className: j["vertical-divider"]
        })), w === "two-small-one-large" && _ === r.length - 1 && e(G, null, e(y, {
            className: j.divider,
            borderBottom: p
        }), e(y, {
            borderRight: u,
            className: j["vertical-divider"]
        })), w === "square-square-column" && _ === 1 && e(y, {
            className: j.divider,
            borderBottom: p
        })))))
    },
    $i = t => {
        const r = t,
            {
                posts: s,
                hideVerticalDividers: o
            } = r,
            i = K(r, ["posts", "hideVerticalDividers"]),
            n = s.slice(0, 3),
            a = s.slice(3);
        return e(ae, {
            hideVerticalDividers: o,
            variant: "one-column-two-column",
            stretchVertically: !0
        }, e(q, N(v({}, i), {
            flex: "grow",
            variant: "large-listing-listing-column",
            posts: n,
            hideImages: !0
        })), e(q, N(v({}, i), {
            flex: "grow",
            variant: "square-square-column",
            posts: a,
            hideImages: !1
        })))
    },
    Di = t => {
        const l = t,
            {
                hideVerticalDividers: s,
                posts: o
            } = l,
            i = K(l, ["hideVerticalDividers", "posts"]),
            n = o.slice(0, 3),
            a = o.slice(3, 5),
            r = o.slice(5);
        return e(ae, {
            hideVerticalDividers: s,
            variant: "one-column-two-column-one-column"
        }, e(q, N(v({}, i), {
            flex: "grow",
            variant: "large-listing-listing-column",
            posts: n,
            hideImages: !0
        })), e(q, N(v({}, i), {
            flex: "grow",
            variant: "square-square-column",
            posts: a,
            hideImages: !1
        })), e(q, N(v({}, i), {
            flex: "grow",
            variant: "square-square-column",
            posts: r,
            hideImages: !1
        })))
    },
    Ui = t => {
        const {
            linkToComments: s,
            posts: o,
            pub: i,
            source: n,
            user: a,
            utm: r,
            variant: l,
            onChange: c,
            onClickPost: d
        } = t, h = l === "mini-row" ? 4 : 3;
        return e("div", null, e("div", {
            className: L(j.container, j[l])
        }, o.slice(0, h).map((w, g) => e(G, null, g > 0 && e(y, {
            className: L(j.divider, j.dividerVertical),
            paddingY: 16,
            alignItems: "center"
        }, e(y, {
            borderLeft: "detail-themed"
        })), e(Se, {
            linkToComments: s,
            post: w,
            pub: i,
            user: a,
            utm: r,
            variant: Zo(l, g),
            onChange: c,
            onClick: d && n ? b => {
                d({
                    event: b,
                    post: w,
                    index: g,
                    source: n
                })
            } : void 0
        })))))
    },
    Zo = (t, s) => t === "square-square-column" ? "square" : t === "large-listing-listing-column" ? s === 0 ? "large" : "listing" : t === "two-small-one-large" ? s === 0 ? "large" : "square" : t === "two-column-list" ? "listing" : t === "five-up" ? s === 0 ? "large" : "square" : ["mini-row", "three-column-mini-row", "one-column-list"].includes(t) ? "mini" : "square";
class qi extends Nt {
    constructor(o, i) {
        super(o, i);
        he(this, "likesEnabled", Bt("like_posts_enabled"));
        this.state = {
            posts: null,
            hasMore: !0,
            loading: !1
        }, this.props.notify_user && typeof window != "undefined" && we(this.props.notify_user)
    }
    componentDidMount() {
        return ue(this, null, function*() {
            this.triggerShareOnLoad(), yield this.loadMore()
        })
    }
    getBatchSize() {
        return 5
    }
    loadMore() {
        return ue(this, null, function*() {
            if (!this.state.hasMore) return;
            (yield Ls(this, "loading", a => ue(this, [a], function*({
                hasMore: i,
                posts: n
            }) {
                if (i) {
                    n = n || [];
                    try {
                        const l = (yield pe.get("/api/v1/posts").query({
                            limit: this.getBatchSize(),
                            offset: n.length
                        })).body;
                        n = n.concat(l), i = l.length >= this.getBatchSize(), this.makeSureIosCookiesArentBroken(l), this.setState({
                            posts: n,
                            hasMore: i
                        })
                    } catch (r) {
                        console.error(r)
                    }
                    return i
                }
            }))) && this.loader && this.loader.checkVisibility()
        })
    }
    triggerShareOnLoad() {
        if (Tt("action") === "share") window.history.replaceState({}, document.title, fe({
            action: null
        }));
        else return;
        this.setState({
            share_on_load: !0
        }), this.shareDialog.open()
    }
    makeSureIosCookiesArentBroken(o) {
        if (!/iPad|iPhone|iPod/.test(navigator.userAgent) || this.props.user && this.props.user.is_subscribed || !o || o.filter(a => Es(a.audience) && !a.hidden).length === 0) return;
        const i = "__cookie_checked",
            n = Rs(window.location.search);
        n[i] || (n[i] = "true", window.location.search = `?${tt(n)}`)
    }
    onChange({
        post: o
    }) {
        if (o) {
            const i = (this.state.posts || []).map(n => n.id).indexOf(o && o.id);
            i !== -1 && (this.state.posts[i] = o, this.setState({
                posts: this.state.posts
            }))
        }
    }
    render({
        user: o,
        pub: i,
        freeSignup: n,
        freeSignupEmail: a,
        preloadedPosts: r,
        hide_intro_popup: l,
        children: c,
        blurbs: d,
        launchWelcomePage: h,
        skipIntoPopupRender: w
    }, {
        posts: g,
        hasMore: b,
        share_on_load: u
    }) {
        const p = [];
        for (const m of g || r || []) m.hidden ? Array.isArray(p[p.length - 1]) ? p[p.length - 1].push(m) : p.push([m]) : p.push(m);
        return e("div", {
            className: "classic-home-page"
        }, e(Ro, {
            ref: m => this.shareDialog = m,
            user: o,
            pub: i
        }), w ? null : e(Mo, {
            freeSignup: n,
            freeSignupEmail: a,
            user: o,
            post: null,
            publication: i,
            hidden: l || u,
            blurbs: d,
            launchWelcomePage: h
        }), e("div", {
            className: "post-list"
        }, p.length === 0 && !b && e("div", {
            className: "container-border coming-soon"
        }, e("div", {
            className: "container"
        }, e("p", null, "Coming soon"))), p.map((m, _) => Array.isArray(m) ? this.renderHiddenPosts(m, _) : this.renderPost(m, _)), b ? e("div", {
            className: "post-loader"
        }, e("div", {
            className: "container"
        }, e(Ao, {
            ref: m => this.loader = m,
            noDedupe: !0,
            threshold: 1280,
            onVisible: () => this.loadMore()
        }, e("p", null, "Loading more posts…")))) : i.has_posts && g && g.length > 0 && e("div", {
            className: "container"
        }, e("a", {
            className: "archive-link button invis",
            href: xt(i)
        }, "View archive"))), c)
    }
    renderPost(o) {
        return e("div", {
            className: "container-border post-list-post"
        }, e("div", {
            className: "container"
        }, o.type === "thread" ? e(ln, {
            post: o,
            user: this.props.user,
            pub: this.props.pub,
            freeSignup: this.props.freeSignup,
            freeSignupEmail: this.props.freeSignupEmail,
            invisible: !this.props.hide_intro_popup,
            showCta: !0,
            showReactions: this.likesEnabled
        }) : e(Lo, {
            post: o,
            user: this.props.user,
            freeSignup: this.props.freeSignup,
            freeSignupEmail: this.props.freeSignupEmail,
            pub: this.props.pub,
            invisible: !this.props.hide_intro_popup,
            truncateAt: 1e4,
            truncateTo: 8e3,
            onChange: i => this.onChange(i),
            noTitleLink: !!this.props.disableInteractive,
            disableSubscribePrompt: !0
        })))
    }
    renderHiddenPosts(o, i) {
        let n, a;
        return i === 0 ? (n = o.slice(0, 1), a = o.slice(1)) : o.length <= 3 ? (n = o, a = []) : (n = o.slice(0, 2), a = o.slice(2)), e(Gi, {
            user: this.props.user,
            pub: this.props.pub,
            posts: n,
            collapsedPosts: a,
            onChange: r => this.onChange(r)
        })
    }
}
he(qi, "contextType", vo);
class Gi extends Nt {
    toggle() {
        this.state.showing ? this.setState({
            showing: !1
        }) : (this.state.toggled || Q(Z.COLLAPSED_POSTS_SHOWN, {
            num_visible_posts: this.props.posts.length,
            num_collapsed_posts: this.props.collapsedPosts.length
        }), this.setState({
            showing: !0,
            toggled: !0
        }))
    }
    render({
        user: s,
        pub: o,
        posts: i,
        collapsedPosts: n,
        onChange: a
    }, {
        showing: r
    }) {
        return e("div", {
            className: `container-border post-list-hidden-posts ${r?"showing":""}`
        }, e("div", {
            className: "container"
        }, i.map(l => e(so, {
            user: s,
            pub: o,
            post: l,
            onChange: a
        })), n.length > 0 && e("div", {
            className: "collapse-toggle",
            onClick: () => this.toggle()
        }, r ? "hide" : `+${n.length} more`), n.map(l => e(so, {
            className: "collapsed",
            user: s,
            pub: o,
            post: l,
            utm_source: ne.home,
            onChange: a
        }))))
    }
}
const es = ({
        blurbs: t,
        freeSignup: s,
        freeSignupEmail: o,
        hide_intro_popup: i,
        pub: n,
        referralCode: a,
        showWelcome: r,
        user: l,
        launchWelcomePage: c
    }) => {
        const d = ye(!1),
            h = ye(null);
        return ie(() => {
            Tt("action") === "share" && (window.history.replaceState({}, document.title, fe({
                action: null
            })), d.current = !0), d.current && h.current && h.current.open(), typeof window != "undefined" && r && As("showWelcome")
        }, [r]), e(G, null, e(Ro, {
            ref: w => h.current = w,
            pub: n,
            user: l
        }), e(Mo, {
            blurbs: t,
            freeSignup: s,
            freeSignupEmail: o,
            hidden: i || d.current,
            publication: n,
            referralCode: a,
            showOnMount: r,
            user: l,
            launchWelcomePage: c
        }))
    },
    Vi = "_container_12cjp_1",
    Wi = "_column_12cjp_6",
    ji = "_left_12cjp_13",
    Xi = "_right_12cjp_16",
    ze = {
        container: Vi,
        column: Wi,
        left: ji,
        right: Xi
    },
    ts = ({
        leftContent: t,
        rightContent: s,
        mobileContent: o
    }) => {
        const {
            isMobile: i
        } = x();
        return i && o ? o : e("div", {
            className: ze.container
        }, e("div", {
            className: L(ze.column, ze.left)
        }, t), e("div", {
            className: L(ze.column, ze.right)
        }, s))
    },
    Ki = ({
        posts: t,
        pub: s,
        user: o,
        onChange: i
    }) => {
        const {
            isTablet: n
        } = x();
        return e(ts, {
            leftContent: e(Se, {
                imageAspectRatio: "wide",
                post: t[0],
                pub: s,
                user: o,
                variant: "large",
                onChange: i
            }),
            rightContent: e(q, {
                posts: t.slice(1, 4),
                pub: s,
                user: o,
                variant: n ? "one-column-list" : "two-column-list",
                onChange: i
            }),
            mobileContent: e(q, {
                posts: t.slice(0, 4),
                pub: s,
                user: o,
                variant: "two-column-list",
                onChange: i
            })
        })
    },
    os = ({
        noFirstImage: t,
        posts: s,
        pub: o,
        user: i,
        utm: n,
        onChange: a
    }) => e(q, N(v({}, {
        pub: o,
        user: i,
        utm: n,
        onChange: a
    }), {
        hideVerticalDividers: !0,
        posts: s,
        variant: t ? "two-three-two" : "five-up"
    })),
    Yi = t => e(os, N(v({}, t), {
        noFirstImage: !0
    })),
    Ji = "_link_dzj0p_1",
    Qi = {
        link: Ji
    },
    Fe = ({
        children: t,
        href: s,
        testid: o,
        onClick: i
    }) => e(C.Meta, {
        className: Qi.link,
        color: "pub-primary-text",
        as: "a",
        native: !0,
        href: s,
        "data-testid": o,
        onClick: i ? n => {
            n.preventDefault(), i()
        } : void 0
    }, t),
    re = ({
        align: t,
        children: s
    }) => e(C.B2, {
        align: t,
        weight: "semibold",
        color: "pub-primary-text",
        font: "pub-headings"
    }, s),
    ss = ({
        pub: t
    }) => {
        const {
            iString: s
        } = z();
        return e(y, {
            alignItems: "baseline",
            justifyContent: "space-between",
            paddingX: 8
        }, e(re, null, s("Most Popular")), e(Fe, {
            href: It(t, {
                params: {
                    sort: "top"
                }
            })
        }, s("View all")))
    },
    ns = ({
        noFirstImage: t,
        posts: s,
        topPosts: o,
        pub: i,
        user: n,
        utm: a,
        onChange: r
    }) => {
        const l = {
                pub: i,
                user: n,
                utm: a,
                onChange: r
            },
            {
                isTablet: c,
                isMobile: d
            } = x();
        return d ? null : e(ae, {
            hideVerticalDividers: !0,
            showContentBelowOnMobile: !0,
            variant: "full-width-with-border-and-sidebar"
        }, e(q, N(v({}, l), {
            flex: "grow",
            hideVerticalDividers: !0,
            posts: s,
            variant: t ? "two-small-three-medium" : "two-small-one-large"
        })), o && e(je, {
            pub: i,
            showPubPins: !1,
            showSectionPins: !1
        }, e(f, {
            gap: 12,
            paddingTop: 8
        }, e(ss, {
            pub: i
        }), e(q, N(v({}, l), {
            flex: "grow",
            variant: c ? "mini-row" : "one-column-list",
            posts: o.slice(0, c ? 3 : 5)
        })))))
    },
    Zi = t => e(ns, N(v({}, t), {
        noFirstImage: !0
    })),
    ea = ({
        posts: t,
        pub: s,
        user: o,
        utm: i,
        onChange: n
    }) => t.length ? e(f, {
        gap: 12
    }, e(Se, {
        post: t[0],
        pub: s,
        utm: i,
        user: o,
        variant: "mobile-hero",
        onChange: n
    }), t.length > 1 && e(f, {
        paddingX: 16
    }, e(Xn, {
        paddingY: 4,
        priority: "detail-themed"
    }), e(q, {
        posts: t.slice(1),
        pub: s,
        utm: i,
        user: o,
        variant: "two-column-list",
        onChange: n
    }))) : null,
    is = ({
        isSmall: t,
        posts: s,
        pub: o,
        user: i,
        utm: n,
        onChange: a
    }) => s.length ? e(ae, {
        variant: t ? "three-column-width" : "full-width"
    }, e(Se, {
        pub: o,
        user: i,
        utm: n,
        onChange: a,
        variant: t ? "jumbo-small" : "jumbo",
        post: s[0]
    })) : null,
    ta = t => e(is, N(v({}, t), {
        isSmall: !0
    })),
    oa = "_container_1b8xu_1",
    sa = {
        container: oa
    },
    na = ({
        children: t,
        paddingTop: s,
        paddingBottom: o
    }) => e("div", {
        className: sa.container
    }, e(f, {
        paddingTop: s,
        paddingBottom: o,
        paddingX: 16
    }, t)),
    ia = "_container_1i6yy_1",
    aa = {
        container: ia
    },
    Vt = ({
        children: t
    }) => {
        const {
            isMobile: s
        } = x();
        return e(f, {
            className: aa.container,
            bg: "secondary",
            paddingY: s ? 32 : 64
        }, e(na, null, t))
    },
    ra = "_emailIcon_tarch_1",
    Oe = {
        emailIcon: ra,
        "icon-20": "_icon-20_tarch_5",
        "icon-40": "_icon-40_tarch_9"
    },
    la = {
        apple_podcasts: "/img/shows_app_icons/apple_podcasts.svg?v=1",
        overcast: "/img/shows_app_icons/overcast.svg?v=1",
        pocket_casts: "/img/shows_app_icons/pocket_casts.svg?v=1",
        rss: "/img/shows_app_icons/rss.svg?v=1",
        spotify: "/img/shows_app_icons/spotify.svg?v=1",
        spotify_for_paid_users: "/img/shows_app_icons/spotify.svg?v=1",
        spotify_open_access: "/img/shows_app_icons/spotify.svg?v=1",
        substack: "/img/shows_app_icons/substack.svg?v=1",
        youtube: "/img/shows_app_icons/youtube.svg?v=1",
        youtube_music: "/img/shows_app_icons/youtube_music.svg?v=1"
    },
    Me = ({
        platformKey: t,
        size: s = 20
    }) => t === "email" ? e(Pn, {
        className: L(Oe.emailIcon, {
            [Oe["icon-20"]]: s === 20,
            [Oe["icon-40"]]: s === 40
        })
    }) : e("img", {
        className: L({
            [Oe["icon-20"]]: s === 20,
            [Oe["icon-40"]]: s === 40
        }),
        src: la[t]
    }),
    qe = ({
        align: t = "left",
        limit: s = 4,
        pub: o,
        section: i,
        stretch: n,
        user: a
    }) => {
        const {
            iString: r
        } = z(), {
            feedUrl: l,
            isLoaded: c
        } = Ut({
            pub: o,
            section: i,
            user: a
        }), [d, h] = V(!1), w = $t({
            pub: o,
            section: i,
            spotifySettings: Mt({
                pub: o,
                section: i != null ? i : null
            })
        }), g = On({
            feedUrl: l,
            isApple: So(),
            isMobile: !1,
            showLinks: w,
            userIsSubscribed: !!(a != null && a.is_subscribed)
        }), b = g.length + (l ? 1 : 0) > s;
        ie(() => {
            c && h(!0)
        }, [c]);
        const u = () => {
                Q(Z.PODCAST_FEED_URL_COPIED, {
                    feedUrl: l
                }), we("RSS feed URL copied"), Lt(l)
            },
            p = ({
                label: m,
                url: _
            }) => () => {
                Q(Z.PODCAST_APP_LINK_CLICK, {
                    appName: m,
                    feedUrl: l,
                    url: _
                }), window.open(_, "_blank")
            };
        return e(We, null, e(y, {
            justifyContent: t === "center" ? "center" : void 0,
            gap: 8,
            wrap: "wrap",
            opacity: d ? 100 : 0
        }, g.slice(0, s).map(({
            label: m,
            platform: _,
            url: I
        }) => e(ht, {
            stretch: n,
            onClick: p({
                label: m,
                url: I
            })
        }, e(Me, {
            platformKey: _
        }), m)), l && !b && e(ht, {
            stretch: n,
            onClick: u
        }, e(Me, {
            platformKey: "rss"
        }), r("RSS feed")), b && e(_i, {
            trigger: e(ht, null, r("More"), e(Qo, {
                size: 20
            }))
        }, g.slice(s).map(({
            label: m,
            platform: _,
            url: I
        }) => e(io, {
            onClick: p({
                label: m,
                url: I
            })
        }, e(y, {
            alignItems: "center",
            gap: 8
        }, e(Me, {
            platformKey: _
        }), m))), e(io, {
            onClick: u
        }, e(y, {
            alignItems: "center",
            gap: 8
        }, e(Me, {
            platformKey: "rss"
        }), r("RSS feed"))))))
    },
    ht = Ge((a, n) => {
        var r = a,
            {
                children: t,
                stretch: s,
                onClick: o
            } = r,
            i = K(r, ["children", "stretch", "onClick"]);
        return e(xe, N(v(v({
            ref: n
        }, i), s ? {
            flex: "grow",
            justifyContent: "center"
        } : null), {
            className: "podcast-player-button",
            priority: "secondary",
            onClick: o
        }), t)
    }),
    as = ({
        columns: t,
        description: s,
        imageUrl: o,
        name: i,
        pub: n,
        section: a,
        showPodcastLinks: r,
        user: l
    }) => {
        const c = rt({
            radius: "lg",
            shadow: "xl"
        });
        return e(Vt, null, e(ae, {
            variant: t === 4 ? "full-width-with-sidebar" : "three-column-width"
        }, e(y, {
            gap: 40,
            alignItems: "center",
            paddingX: 8
        }, o && e(Xe, {
            className: c,
            imageIsFixedWidth: !0,
            maxWidth: 250,
            src: o,
            useRetinaSizing: !0
        }), e(f, {
            gap: 16
        }, e(f, {
            gap: 8
        }, e(C.H2, {
            color: "pub-primary-text",
            font: "pub-headings"
        }, i), e(C.B2, {
            color: "pub-secondary-text"
        }, s)), r && e(qe, {
            pub: n,
            section: a,
            user: l
        })))))
    },
    rs = ({
        description: t,
        imageUrl: s,
        name: o,
        pub: i,
        section: n,
        showPodcastLinks: a,
        user: r
    }) => {
        const {
            isMobile: l
        } = x(), c = rt({
            radius: "sm",
            shadow: "lg"
        });
        return e(Vt, null, e(ae, {
            variant: "two-column-width"
        }, e(f, {
            gap: 24,
            alignItems: "center",
            paddingX: l ? 0 : 8
        }, s && e(Xe, {
            className: c,
            imageIsFixedWidth: !0,
            maxWidth: 100,
            src: s,
            useRetinaSizing: !0
        }), e(f, {
            gap: 8
        }, e(C.H2, {
            align: "center",
            color: "pub-primary-text",
            font: "pub-headings"
        }, o), e(C.B2, {
            align: "center",
            color: "pub-secondary-text"
        }, t)), a && e(qe, {
            align: "center",
            pub: i,
            section: n,
            user: r
        }))))
    },
    ls = ({
        description: t,
        imageUrl: s,
        name: o,
        pub: i,
        section: n,
        showPodcastLinks: a,
        user: r
    }) => {
        const l = rt({
            radius: "lg",
            shadow: "xl",
            width: 160
        });
        return e(Vt, null, e(f, {
            gap: 24,
            alignItems: "center"
        }, s && e("div", null, e(Xe, {
            className: l,
            imageIsFixedWidth: !0,
            maxWidth: 160,
            src: s,
            useRetinaSizing: !0
        })), e(f, {
            gap: 16
        }, e(f, {
            gap: 8
        }, e(C.H2, {
            align: "center",
            color: "pub-primary-text",
            font: "pub-headings"
        }, o), e(C.B2, {
            align: "center",
            color: "pub-secondary-text"
        }, t)), a && e(qe, {
            limit: 2,
            pub: i,
            section: n,
            stretch: !0,
            user: r
        }))))
    },
    ca = ({
        columns: t,
        hasMiniPostsRowUnderneath: s,
        heroAlignment: o,
        pub: i,
        showPodcastLinks: n,
        user: a
    }) => {
        const {
            isMobile: r
        } = x(), l = i.podcast_description, c = i.podcast_art_url, d = i.podcast_title, h = s ? 24 : 40;
        return r ? e(f, {
            paddingBottom: 24
        }, e(ls, {
            description: l,
            imageUrl: c,
            name: d,
            pub: i,
            section: null,
            showPodcastLinks: n,
            user: a
        })) : o === "center" ? e(f, {
            paddingBottom: h
        }, e(rs, {
            description: l,
            imageUrl: c,
            name: d,
            pub: i,
            section: null,
            showPodcastLinks: n,
            user: a
        })) : e(f, {
            paddingBottom: h
        }, e(as, {
            columns: t,
            description: l,
            imageUrl: c,
            name: d,
            pub: i,
            section: null,
            showPodcastLinks: n,
            user: a
        }))
    },
    da = {
        magaziney: ns,
        "magazine-5": os,
        newspaper: is,
        feature: Ki,
        podcast: ca
    },
    ua = a => {
        var r = a,
            {
                firstPostMissingImage: t,
                bodyVariant: s,
                isMobile: o,
                variant: i
            } = r,
            n = K(r, ["firstPostMissingImage", "bodyVariant", "isMobile", "variant"]);
        let l = da[i];
        const c = {};
        return o && i !== "podcast" ? l = ea : i === "newspaper" && s === "list" ? l = ta : i === "magaziney" && t ? l = Zi : i === "magazine-5" && t ? l = Yi : i === "podcast" && (c.columns = s === "list" ? 3 : 4), l ? e(l, v(v({}, n), c)) : (console.error("Component not found, add one to HomeHero"), null)
    },
    ke = Hs({
        latestPostByContributorId: void 0,
        latestPodcastPosts: void 0,
        contributors: void 0,
        freeSignup: void 0,
        freeSignupEmail: void 0,
        homepageLinks: void 0,
        numRecommendations: void 0,
        recommendations: void 0,
        topPosts: void 0,
        utm: void 0,
        onChangePost: void 0
    }),
    ma = t => e(zt, N(v({}, t), {
        name: "PencilIcon",
        svgParams: {
            height: 100,
            width: 100
        }
    }), e("path", {
        d: "M55.3,25.6L22.5,58.4c-0.1,0.1-0.2,0.3-0.3,0.4c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.1,0.3-0.2,0.4c0,0,0,0.1,0,0.1l-6.4,21.9   c-0.3,0.9,0,1.8,0.6,2.5c0.5,0.5,1.1,0.7,1.8,0.7c0.2,0,0.5,0,0.7-0.1l21.9-6.4c0,0,0.1,0,0.1,0c0.1,0,0.3-0.1,0.4-0.2   c0,0,0.1,0,0.1-0.1c0.2-0.1,0.3-0.2,0.4-0.3l32.8-32.8L55.3,25.6z M35.1,74.5l-13.5,3.9l3.9-13.5L35.1,74.5z"
    }), e("path", {
        d: "M62.1,18.8l-3.3,3.3l19.1,19.1l3.3-3.3c4.7-4.7,4.4-13.3-0.7-18.4C75.4,14.4,66.8,14.1,62.1,18.8z"
    })),
    pa = ({
        homepageLinks: t,
        pub: s,
        renderGroup: o,
        renderLink: i
    }) => {
        const n = Kn(t, "group"),
            a = Wo(Object.keys(n), r => n[r][0].rank);
        return e(G, null, a.map(r => e(ha, {
            group: r,
            items: n[r],
            pub: s,
            newTab: !0,
            renderGroup: o,
            renderLink: i
        })))
    },
    ha = ({
        group: t,
        items: s,
        newTab: o,
        pub: i,
        renderGroup: n,
        renderLink: a
    }) => {
        const r = [];
        let l = null;
        o && (l = "_blank", r.push("noopener")), (!i || i != null && i.no_follow) && r.push("ugc nofollow");
        const c = {
                rel: r.join(" "),
                target: l
            },
            d = e(G, null, s.map(({
                title: h,
                url: w,
                subtitle: g,
                subtitleUrl: b,
                edit: u,
                className: p
            }) => a ? a({
                title: h,
                url: w,
                subtitle: g,
                linkProps: c
            }) : e("div", {
                className: L("home-right-col", p)
            }, u ? e("div", {
                className: "home-right-col-editable"
            }, e("a", {
                className: "home-right-col-title",
                href: w,
                native: !0
            }, h), e(vt, {
                className: "button secondary show-on-hover",
                href: u,
                title: "edit"
            }, e(ma, {
                height: 20,
                width: 20,
                stroke: "#aaa"
            }))) : e("a", v({
                className: "home-right-col-title",
                href: w,
                native: !0
            }, c), h), g && e("a", v({
                className: "home-right-col-sub",
                href: b || w,
                native: !0
            }, c), g))));
        return n ? n({
            title: t,
            links: d
        }) : e("div", {
            className: "home-right-group"
        }, e("div", {
            className: "home-right-group-title"
        }, t), d)
    },
    ga = "_container_119aw_1",
    _a = "_containerHoverLight_119aw_5",
    lo = {
        container: ga,
        containerHoverLight: _a
    },
    Wt = Ge((c, l) => {
        var d = c,
            {
                children: t,
                className: s,
                disable: o,
                href: i,
                hoverBackground: n,
                onClick: a
            } = d,
            r = K(d, ["children", "className", "disable", "href", "hoverBackground", "onClick"]);
        const h = o ? void 0 : a;
        return e(J, N(v(v({}, r), i ? {
            as: "a",
            href: i
        } : {}), {
            ref: l,
            className: L(s, !o && lo.container, {
                [lo.containerHoverLight]: n === "light" && !o
            }),
            role: h ? "button" : void 0,
            onClick: h
        }), t)
    }),
    fa = "_homepageLink_adgez_1",
    wa = "_title_adgez_5",
    co = {
        homepageLink: fa,
        title: wa
    },
    cs = h => {
        var w = h,
            {
                alignItems: t = "center",
                body: s,
                clampTitle: o,
                image: i,
                linkProps: n,
                pub: a,
                subtitle: r,
                title: l,
                url: c
            } = w,
            d = K(w, ["alignItems", "body", "clampTitle", "image", "linkProps", "pub", "subtitle", "title", "url"]);
        const {
            size: g,
            lineHeight: b
        } = Oo({
            preset: "sm",
            pub: a
        }), u = typeof window == "undefined", p = e(Wt, {
            hoverBackground: "light",
            padding: 8,
            radius: "sm"
        }, e(y, N(v({}, d), {
            alignItems: t,
            gap: 16
        }), i && e(J, {
            alignSelf: "start"
        }, i), e(f, {
            gap: 8
        }, e(f, {
            gap: 2,
            style: {
                wordBreak: "break-word"
            }
        }, e(C, {
            color: "pub-primary-text",
            font: "pub-headings",
            clamp: o,
            style: {
                fontSize: g,
                lineHeight: `${b}px`
            }
        }, u ? e("a", N(v({}, n), {
            href: c,
            style: {
                textDecoration: "none",
                display: "block"
            }
        }), l) : l), r && e(C.B4, {
            color: "pub-secondary-text",
            size: 12,
            clamp: 3
        }, r)), s && e("div", null, s))));
        return u ? p : e("a", N(v({}, n), {
            href: c,
            style: {
                textDecoration: "none",
                display: "block"
            }
        }), p)
    },
    ya = ({
        linkProps: t,
        pub: s,
        subtitle: o,
        title: i,
        url: n
    }) => {
        const {
            isMobile: a
        } = x(), {
            size: r,
            lineHeight: l
        } = Oo({
            preset: "sm",
            pub: s
        });
        return e("a", v({
            className: co.homepageLink,
            href: n
        }, t), e(f, {
            gap: 8,
            paddingX: a ? 0 : 8
        }, e(f, {
            style: {
                wordBreak: "break-word"
            }
        }, e(C, {
            className: co.title,
            color: "pub-primary-text",
            font: "pub-body",
            style: {
                fontSize: r,
                lineHeight: `${l}px`
            }
        }, i), o && e(C.B4, {
            color: "pub-secondary-text",
            size: 12,
            clamp: 3
        }, o))))
    },
    ds = ({
        hideHeaderBorder: t,
        pub: s
    }) => {
        const {
            homepageLinks: o
        } = Ce(ke), {
            isMobile: i
        } = x();
        return !o || o.length === 0 ? null : e(f, {
            gap: 24,
            "data-testid": "homepage-links"
        }, e(pa, {
            homepageLinks: o,
            pub: s,
            renderGroup: ({
                title: n,
                links: a
            }) => e(f, {
                gap: 16
            }, e(y, {
                alignItems: "center",
                paddingX: i ? 0 : 8
            }, e(y, {
                flex: "grow",
                borderBottom: t ? void 0 : "detail-themed",
                paddingBottom: t ? void 0 : 8
            }, e(re, null, n))), e(f, {
                gap: 12
            }, a)),
            renderLink: ({
                linkProps: n,
                subtitle: a,
                title: r,
                url: l
            }) => e(ya, {
                linkProps: n,
                pub: s,
                subtitle: a,
                title: r,
                url: l
            })
        }))
    },
    ba = "_container_1hifo_1",
    va = {
        container: ba
    },
    ct = () => {
        const {
            iString: t
        } = z();
        return e(J, {
            paddingX: 16,
            paddingY: 20,
            radius: "sm",
            className: va.container,
            flex: "grow"
        }, e(C.B4, {
            color: "pub-secondary-text"
        }, t("Coming soon")))
    },
    Ca = (t, s, o, i, {
        trackOnly: n = !1,
        freeSignupEmail: a
    } = {}) => () => ue(void 0, null, function*() {
        if (Q(Z.RECOMMENDATION_SUBSCRIBE_BUTTON_CLICKED, {
                source: "recommendations-page",
                recommended_publication_id: t.id,
                recommending_publication_id: s.id
            }), !n) try {
            const r = o && !o.is_magic && o.email || a;
            yield pe.post("/api/v1/free").send({
                email: r,
                source: "recommendations_page",
                first_url: Jn,
                first_referrer: Qn,
                current_url: Zn,
                current_referrer: ei,
                other_publication_id: t.id,
                referring_pub_id: s.id
            }), i(t)
        } catch (r) {
            alert(Po(r) || "Something went wrong")
        }
    }),
    Sa = (t, s, o, {
        trackOnly: i = !1
    } = {}) => () => ue(void 0, null, function*() {
        if (Q(Z.RECOMMENDATION_UNSUBSCRIBE_BUTTON_CLICKED, {
                source: "recommendations-page",
                recommended_publication_id: t.id,
                recommending_publication_id: s.id
            }), !i) try {
            yield pe.delete("/api/v1/free").send({
                publication_id: t.id,
                source: "recommendations_page"
            }), o(t)
        } catch (n) {
            alert(Po(n) || "Something went wrong")
        }
    }),
    Rc = ({
        pub: t,
        recommendations: s,
        allSubscribedPubs: o,
        fullySubscribedPubs: i,
        user: n,
        freeSignupEmail: a
    }) => {
        Yn();
        const {
            iString: r,
            iTemplate: l
        } = z(), [c, d] = V(o), h = g => {
            d([...c, g])
        }, w = g => {
            d(c.filter(({
                id: b
            }) => b !== g.id))
        };
        return e("div", {
            className: "container"
        }, e(ti, {
            title: l `Substacks recommended by ${Ae(t)||t.name}${Ae(t)?` | ${t.name}`:""}`
        }), e("div", {
            className: "recommendations-page-container"
        }, e("h2", null, l `Recommended by ${Ae(t)||t.name}`), e("div", {
            className: "recommended-publications-container"
        }, s.map((g, b) => {
            const u = g.recommendedPublication;
            if (!u) return;
            const p = `${Et(u)}/?utm_source=${ne.recommendationsPage}&utm_campaign=${t.id}`,
                m = ko(u, {
                    addBase: !0,
                    utm_source: ne.recommendationsPage,
                    referring_pub_ids: [t.id],
                    simple: !0
                }),
                _ = Ae(u),
                I = i.map(({
                    id: S
                }) => S).includes(u.id);
            return e("div", {
                className: "recommended-publications-text-container with-blurb"
            }, e("div", {
                className: "recommendation-body"
            }, e("div", {
                className: "publication-content"
            }, e("div", {
                className: "top-row"
            }, e("a", {
                className: "left",
                href: p,
                onClick: () => {
                    Q(Z.PUBLICATION_RECOMMENDATION_LINK_CLICKED, {
                        source: "recommendations-page",
                        recommended_publication_id: u.id,
                        recommending_publication_id: t.id
                    })
                }
            }, e(Ve, {
                pub: u,
                size: 48,
                logo_url: u.logo_url || u.author_photo_url,
                linkify: !1
            }), e("div", {
                className: "pub-meta"
            }, e("div", {
                className: "publication-title"
            }, u.name), !!_ && e("div", {
                className: "publication-author"
            }, l `By ${_}`))), c.map(({
                id: S
            }) => S).includes(u.id) ? e(vt, {
                onClick: Sa(u, t, w, {
                    trackOnly: I
                }),
                href: I ? Fs(u, {
                    addBase: !0
                }) : null,
                className: "unsubscribe"
            }, r("Subscribed")) : e(vt, {
                onClick: n && !n.is_magic && n.email || a ? Ca(u, t, n, h, {
                    freeSignupEmail: a
                }) : () => {
                    Q(Z.RECOMMENDATION_SUBSCRIBE_BUTTON_CLICKED, {
                        source: "recommendations-page",
                        recommended_publication_id: u.id,
                        recommending_publication_id: t.id
                    }), Rt(m, {
                        local_navigation: !1
                    })
                }
            }, e(y, {
                alignItems: "center",
                gap: 8
            }, e(oi, {
                size: 20
            }), r("Subscribe")))), e("div", {
                className: "publication-suggestion-text-area"
            }, (u.editorial_bio || u.hero_text) && e("div", {
                className: "publication-description"
            }, u.editorial_bio || u.hero_text)), g.description && e(ka, {
                content: g.description,
                author: Ae(t) || t.name
            }))))
        }))))
    },
    ka = ({
        author: t,
        content: s
    }) => e("div", {
        className: "blurb"
    }, e("p", {
        className: "blurb-content"
    }, s), e("p", {
        className: "blurb-author"
    }, "- ", t)),
    Pa = ({
        recommendations: t,
        numRecommendations: s,
        pub: o,
        user: i,
        render: n,
        renderRecommendation: a
    }) => {
        const {
            iString: r,
            iTemplate: l
        } = z(), c = t.map(d => e(Na, {
            recommendation: d,
            pub: o,
            signedIn: !!i,
            render: a
        }));
        return ie(() => {
            Q(Z.PUBLICATION_RECOMMENDATIONS_SHOWN, {
                source: "pub-home",
                recommendations: t.map(({
                    recommendedPublication: d
                }) => d.id)
            })
        }, [t]), n ? n({
            recommendations: c,
            canManage: !!(i != null && i.is_admin),
            manageUrl: oo(o),
            hasMore: s > t.length,
            hasMoreUrl: ot(o),
            recommendationsCount: s
        }) : e("div", {
            className: "home-right-group recommendations"
        }, e("div", {
            className: "home-right-group-title"
        }, e("a", {
            href: ot(o)
        }, "Recommendations"), i != null && i.is_admin ? e("a", {
            href: oo(o),
            native: !0
        }, r("Manage")) : s > t.length ? e("a", {
            href: ot(o),
            native: !0
        }, l `View all ${s}`) : null), c)
    },
    Na = ({
        recommendation: t,
        pub: s,
        signedIn: o,
        render: i
    }) => {
        const {
            recommendedPublication: n
        } = t, a = zs(n, {
            params: {
                utm_source: ne.homepageRecommendations,
                utm_campaign: s.id
            },
            signedIn: o
        }), r = () => {
            Q(Z.PUBLICATION_RECOMMENDATION_LINK_CLICKED, {
                recommending_publication_id: s.id,
                recommended_publication_id: n.id,
                source: "homepage-recommendations"
            })
        }, l = {
            pub: n,
            logo_url: n.logo_url,
            href: a,
            openInNewTab: !0,
            belowTheFold: !0
        };
        return i ? i({
            pubIconProps: l,
            pubName: n.name,
            pubAuthor: n.author.name,
            url: a,
            onClick: r
        }) : e("div", {
            className: "home-right-col"
        }, e("div", {
            className: "recommendation-row"
        }, e("div", {
            className: "left"
        }, e("a", {
            onClick: r
        }, e(Ve, N(v({}, l), {
            size: 32
        }))), e("div", {
            className: "pub-meta"
        }, e("a", {
            href: a,
            target: "_blank",
            onClick: r
        }, n.name), e("div", {
            className: "pub-author"
        }, n.author.name)))))
    },
    us = ({
        pub: t,
        showEmptyState: s,
        hideHeaderBorder: o,
        user: i
    }) => {
        const {
            numRecommendations: n,
            recommendations: a
        } = Ce(ke), {
            iString: r,
            iTemplate: l
        } = z(), {
            isMobile: c
        } = x();
        return !a || a.length === 0 && !s ? null : e(Pa, {
            recommendations: a,
            numRecommendations: n,
            pub: t,
            user: i,
            render: ({
                recommendations: d,
                canManage: h,
                manageUrl: w,
                hasMore: g,
                hasMoreUrl: b,
                recommendationsCount: u
            }) => e(f, {
                gap: 16
            }, e(y, {
                paddingX: c ? 0 : 8
            }, e(y, {
                alignItems: "center",
                borderBottom: o ? void 0 : "detail-themed",
                flex: "grow",
                justifyContent: "space-between",
                paddingBottom: o ? void 0 : 8
            }, e(re, null, r("Recommendations")), h ? e(Fe, {
                href: w
            }, r("Manage")) : g ? e(Fe, {
                href: b,
                testid: "homepage-recommendations-view-all"
            }, l `View all ${u}`) : null)), e(f, {
                gap: 4,
                "data-testid": "homepage-recommendations"
            }, n === 0 ? e(y, {
                paddingX: 8
            }, e(ct, null)) : d)),
            renderRecommendation: ({
                url: d,
                onClick: h,
                pubIconProps: w,
                pubName: g,
                pubAuthor: b
            }) => {
                const u = {
                    onClick: h,
                    target: "_blank",
                    rel: "noopener"
                };
                return e(cs, {
                    "data-testid": "homepage-recommendation",
                    image: e(Ve, N(v({}, w), {
                        size: 40,
                        noMargin: !0
                    })),
                    linkProps: u,
                    pub: t,
                    subtitle: b,
                    title: g,
                    url: d
                })
            }
        })
    },
    Ia = "_container_cjrxc_1",
    Ta = "_pubLogo_cjrxc_5",
    uo = {
        container: Ia,
        pubLogo: Ta
    },
    ms = ({
        pub: t,
        user: s
    }) => {
        const {
            isMobile: o
        } = x(), {
            freeSignup: i,
            freeSignupEmail: n
        } = Ce(ke);
        return e(f, {
            className: uo.container,
            gap: 24,
            paddingX: o ? 0 : 8
        }, e(f, {
            gap: 8
        }, t.logo_url && e("img", {
            "data-testid": "homepage-sidebar-pub-logo",
            className: uo.pubLogo,
            src: No(t.logo_url, 88),
            alt: t.name
        }), e(f, {
            gap: 2
        }, e(re, null, t.name), t.hero_text && e(C, {
            size: 12,
            lineHeight: 20,
            color: "pub-secondary-text",
            font: "text"
        }, t.hero_text))), !(s != null && s.is_subscribed) && e(Eo, {
            align: "left",
            expectTruncation: !0,
            freeSignup: i,
            freeSignupEmail: n,
            isStatic: !1,
            pub: t,
            source: "magaziney-home-page",
            user: s
        }))
    },
    Ba = ({
        pub: t,
        user: s
    }) => {
        const {
            isMobile: o
        } = x();
        return e(f, {
            gap: 40
        }, !o && e(ms, {
            pub: t,
            user: s
        }), t.show_recs_on_homepage && e(us, {
            pub: t,
            user: s
        }), e(ds, {
            pub: t
        }))
    },
    xa = "_homePageGroupsGrid_yl4kt_2",
    Ma = "_divider_yl4kt_2",
    La = "_emptyRowsView_yl4kt_8",
    Ea = "_emptyGroupView_yl4kt_9",
    Ra = "_emptyContentIcon_yl4kt_18",
    Ue = {
        homePageGroupsGrid: xa,
        divider: Ma,
        "three-column-grid": "_three-column-grid_yl4kt_5",
        "long-divider": "_long-divider_yl4kt_5",
        emptyRowsView: La,
        emptyGroupView: Ea,
        emptyContentIcon: Ra
    },
    nt = t => "email_from_name" in t,
    Aa = t => {
        var g;
        const [s, o] = V((g = t.postsByGroupId) != null ? g : {}), [i, n] = V(!1), b = t, {
            posts: a,
            bodyPostGroups: r,
            hasEmptyGroupOptions: l,
            setHasInvalidGroupSelection: c
        } = b, d = K(b, ["posts", "bodyPostGroups", "hasEmptyGroupOptions", "setHasInvalidGroupSelection"]);
        ie(() => {
            const u = p => ue(void 0, null, function*() {
                const m = v({}, s);
                for (const _ of p) {
                    const I = {
                        limit: 6
                    };
                    if (nt(_) ? I.section_id = _.id : I.post_tag_id = _.id, !m[_.id]) {
                        const {
                            body: S
                        } = yield pe.get("/api/v1/archive").query(I);
                        m[_.id] = S
                    }
                }
                _n(m, s) || (o(m), n(!1))
            });
            Object.keys(s).length === 0 && r && (r == null ? void 0 : r.length) > 0 && (n(!0), u(r))
        }, [r, o, s]);
        const h = ft(u => {
                var m;
                const p = (m = u.post_tag_id) != null ? m : u.section_id;
                if (!p) throw new Error("Must supply section_id or post_tag_id");
                s && s[p] || pe.get("/api/v1/archive").query(v({
                    limit: 3
                }, u)).then(({
                    body: _
                }) => {
                    o(N(v({}, s), {
                        [p]: _
                    }))
                })
            }, [s, o]),
            w = ft(u => {
                var p;
                return !s || s && Object.keys(s).length === 0 || !s[u] ? null : (p = s[u]) == null ? void 0 : p.slice(0, 3)
            }, [s]);
        return l || !r || (r == null ? void 0 : r.length) === 0 ? c ? (c(!0), e(ps, {
            message: "No groups selected"
        })) : e(f, null, e(gt, {
            pub: t.pub
        }), e(q, N(v({}, d), {
            variant: "three-column-grid",
            posts: a.slice(0, 3)
        }))) : e("div", {
            className: Ue.homePageGroupsGrid
        }, r.map(u => {
            const p = w(u.id);
            return e(f, {
                paddingBottom: 24
            }, e(gt, {
                pub: t.pub,
                row: u
            }), e(Ha, N(v({}, d), {
                posts: a,
                loadingSync: i,
                groupModel: u,
                postsForId: p,
                setHasInvalidGroupSelection: c,
                onIntersectCallback: () => {
                    const m = nt(u) ? {
                        section_id: u.id
                    } : {
                        post_tag_id: u.id
                    };
                    h(m)
                }
            })))
        }), r.length < 3 ? e(f, null, e(gt, {
            pub: t.pub
        }), e(q, N(v({}, d), {
            variant: "three-column-grid",
            posts: a.slice(0, 3)
        }))) : null)
    },
    ps = ({
        groupModel: t,
        message: s
    }) => e(J, {
        paddingTop: 8,
        paddingBottom: 40
    }, e(f, {
        alignItems: "center",
        justifyContent: "center",
        className: L(Ue.homePageGroupsGrid, t ? Ue.emptyGroupView : Ue.emptyRowsView)
    }, e(Ii, {
        className: Ue.emptyContentIcon
    }), s && e(C.B4, {
        color: "pub-secondary-text",
        paddingTop: 20,
        weight: "semibold"
    }, s), t && e(C.B4, {
        color: "pub-secondary-text",
        paddingTop: 4
    }, "Add posts to this ", nt(t) ? "section" : "tag", " to include it on your homepage."))),
    gt = ({
        row: t,
        pub: s
    }) => {
        var n;
        const {
            isMobile: o
        } = x();
        let i = "/archive";
        return t && (i = nt(t) ? At(s, {
            section: t
        }) : Io(s, t)), e(f, {
            paddingBottom: 12,
            paddingX: o ? 0 : 8
        }, e(y, {
            justifyContent: "space-between",
            alignItems: "center"
        }, e(C.H2, {
            color: "pub-primary-text",
            font: "pub-headings"
        }, (n = t == null ? void 0 : t.name) != null ? n : "Recent posts"), e(Fe, {
            href: i
        }, "See all")))
    },
    Ha = t => {
        const d = t,
            {
                onIntersectCallback: s,
                groupModel: o,
                loadingSync: i,
                postsForId: n,
                setHasInvalidGroupSelection: a
            } = d,
            r = K(d, ["onIntersectCallback", "groupModel", "loadingSync", "postsForId", "setHasInvalidGroupSelection"]),
            [l, c] = gn();
        return ie(() => {
            c != null && c.isIntersecting && !i && s()
        }, [c == null ? void 0 : c.isIntersecting, s, i]), n ? n.length === 0 ? a ? (a(!0), e(ps, {
            groupModel: o
        })) : e(q, N(v({}, r), {
            variant: "three-column-grid",
            posts: r.posts.slice(0, 3)
        })) : e(q, N(v({}, r), {
            variant: "three-column-grid",
            posts: n
        })) : e(qt, {
            postCount: 3,
            variant: "grid-groups",
            ref: l
        })
    };

function Fa({
    pub: t,
    user: s,
    freeSignup: o,
    freeSignupEmail: i,
    className: n = ""
}) {
    const {
        iString: a,
        language: r
    } = z();
    return e("div", {
        className: L("home-sitemap", n)
    }, e("h4", {
        className: "home-sitemap-title"
    }, t.name), o || s && s.is_free_subscribed ? !(s && s.is_subscribed) && t.plans ? e("a", {
        className: "button primary home-sitemap-subscribe subscribe-btn",
        href: ko(t, {
            utm_source: ne.homeSitemap
        }),
        native: !0
    }, To(t, {
        language: r
    })) : null : e(J, {
        paddingTop: 20
    }, e(si, {
        className: "home-sitemap-signup-form",
        freeSignup: o,
        freeSignupEmail: i,
        pub: t,
        source: "home-sitemap",
        user: s,
        onSuccess: l => {
            l.body.prompt_to_login ? setTimeout(() => {
                document.location.href = wt("/account/login", {
                    redirect: document.location.href,
                    email: l.body.email
                })
            }, 30) : t.plans ? document.location.href = wt("/subscribe", N(v(v({
                next: document.location.href,
                later: !0,
                just_signed_up: !0
            }, l.body.subscription_id && {
                subscription_id: l.body.subscription_id
            }), l.body.referral_token && {
                referral_token: l.body.referral_token
            }), {
                requires_confirmation: l.body.requires_confirmation ? "true" : ""
            })) : document.location.reload()
        },
        onConfirmationRequired: (t == null ? void 0 : t.payments_state) === "enabled" ? () => null : void 0
    })), e("div", {
        className: "home-sitemap-links"
    }, e("a", {
        href: Os(t),
        native: !1
    }, a("About")), e("a", {
        href: xt(t)
    }, a("Archive")), t.has_recommendations && e("a", {
        href: ot(t),
        native: !0
    }, a("Recommendations")), t.can_have_sitemap && e("a", {
        href: $s(t),
        native: !0
    }, a("Sitemap"))))
}
const za = {
        grid: "full-width-with-sidebar",
        "grid-groups": "full-width-with-sidebar",
        list: "three-column-width-with-sidebar"
    },
    Oa = {
        grid: "three-column-grid",
        list: "two-column-list"
    },
    $a = {
        grid: "full-width",
        "grid-groups": "full-width",
        list: "three-column-width"
    },
    Da = u => {
        var p = u,
            {
                freeSignup: t,
                freeSignupEmail: s,
                hideImagesFromList: o,
                posts: i,
                pub: n,
                showSiteMap: a,
                source: r,
                user: l,
                utm: c,
                variant: d,
                onChange: h,
                bodyPostGroups: w,
                postsByGroupId: g
            } = p,
            b = K(p, ["freeSignup", "freeSignupEmail", "hideImagesFromList", "posts", "pub", "showSiteMap", "source", "user", "utm", "variant", "onChange", "bodyPostGroups", "postsByGroupId"]);
        const {
            isMobile: m,
            breakpoint: _
        } = x(), S = Nn()[d][_], P = d === "list" && (o || i.slice(0, S).every(B => !B.cover_image));
        return e(je, {
            pub: n,
            showPubPins: !0,
            showSectionPins: !1
        }, e(ae, {
            variant: za[d],
            showContentBelowOnMobile: !0
        }, e(Gt, N(v({}, b), {
            maxPosts: S,
            newPosts: i,
            pub: n,
            user: l,
            variant: d
        }), ({
            posts: B,
            linkToComments: A,
            onClickPost: E
        }) => {
            const T = {
                hideImages: P,
                linkToComments: A,
                posts: B,
                pub: n,
                source: r,
                user: l,
                utm: c,
                onChange: h,
                onClickPost: E
            };
            return d === "grid-groups" ? e(Aa, N(v({}, T), {
                bodyPostGroups: w,
                postsByGroupId: g,
                setHasInvalidGroupSelection: b.setHasInvalidGroupSelection,
                hasEmptyGroupOptions: b.hasEmptyGroupOptions
            })) : e(q, N(v({}, T), {
                variant: Oa[d]
            }))
        }), e(Ba, {
            pub: n,
            user: l
        })), a && e(ae, {
            variant: $a[d]
        }, e(f, {
            paddingX: m ? 0 : 8
        }, e(Fa, {
            pub: n,
            user: l,
            freeSignup: t,
            freeSignupEmail: s
        }))))
    },
    Ua = "_container_1hifo_1",
    qa = {
        container: Ua
    },
    jt = () => e(J, {
        paddingX: 16,
        paddingY: 48,
        radius: "sm",
        className: qa.container
    }, e(C.B4, {
        color: "pub-secondary-text",
        align: "center"
    }, "No posts found")),
    Xt = ({
        pub: t,
        showSearch: s,
        title: o,
        viewAllUrl: i
    }) => {
        const {
            isMobile: n
        } = x(), {
            iString: a
        } = z(), {
            enabled: r,
            open: l
        } = ii(), c = d => {
            if (d.preventDefault(), r) {
                l();
                return
            }
            window.location.href = It(t, {
                params: {
                    sort: "search"
                }
            })
        };
        return e(y, {
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: n ? 12 : 16,
            paddingX: n ? 0 : 8
        }, n ? e(re, null, o) : e(C.H3, {
            color: "pub-primary-text",
            font: "pub-headings"
        }, o), i && e(y, {
            alignItems: "center",
            gap: 16
        }, s && e(We, null, e(st, {
            priority: "tertiary",
            onClick: c
        }, e(Ct, {
            size: 20
        }))), e(Fe, {
            href: i
        }, a("View all"))))
    },
    Ga = ({
        posts: t,
        pub: s,
        showEmptyState: o,
        showSearch: i,
        title: n,
        user: a,
        viewAllUrl: r,
        onChange: l
    }) => {
        const {
            isTablet: c
        } = x();
        return !o && t.length === 0 ? null : e(G, null, n && e(Xt, {
            pub: s,
            showSearch: i,
            title: n,
            viewAllUrl: r
        }), t.length ? e(ts, {
            leftContent: e(Se, {
                imageAspectRatio: "wide",
                post: t[0],
                pub: s,
                user: a,
                variant: "large",
                onChange: l
            }),
            rightContent: e(q, {
                posts: t.slice(1, 4),
                pub: s,
                user: a,
                variant: c ? "one-column-list" : "two-column-list",
                onChange: l
            }),
            mobileContent: e(q, {
                posts: t.slice(0, 4),
                pub: s,
                user: a,
                variant: "two-column-list",
                onChange: l
            })
        }) : e(jt, null))
    },
    Va = "_outerContainer_og07d_1",
    Wa = "_container_og07d_4",
    ja = "_column_og07d_9",
    Xa = "_column1_og07d_15",
    Ka = "_column2_og07d_18",
    Ya = "_column3_og07d_21",
    Ja = "_column4_og07d_24",
    ge = {
        outerContainer: Va,
        container: Wa,
        column: ja,
        column1: Xa,
        column2: Ka,
        column3: Ya,
        column4: Ja
    },
    Ke = ({
        leftContent: t,
        mainContent: s,
        rightContent: o,
        stretchToFullWidth: i
    }) => {
        const {
            isMobile: n,
            isTablet: a,
            isDesktop: r
        } = x();
        let l = 2;
        return i && (r ? l = 4 - (t ? 1 : 0) - (o ? 1 : 0) : a && (l = 3 - (t || o ? 1 : 0))), n && (l = 1), e("div", {
            className: ge.outerContainer
        }, e("div", {
            className: ge.container
        }, t && e(J, {
            className: L(ge.column, ge.column1),
            paddingTop: 8
        }, t), e(J, {
            className: L(ge.column, {
                [ge.column2]: l === 2,
                [ge.column3]: l === 3,
                [ge.column4]: l === 4
            })
        }, s), o && e(J, {
            className: L(ge.column, ge.column1),
            paddingTop: 8
        }, o)))
    },
    Qa = "_postRow_187ws_1",
    Za = "_postContainer_187ws_5",
    er = "_postContainerTwoColumn_187ws_12",
    tr = "_postContainerThreeColumn_187ws_15",
    or = "_postContainerFourColumn_187ws_18",
    $e = {
        postRow: Qa,
        postContainer: Za,
        postContainerTwoColumn: er,
        postContainerThreeColumn: tr,
        postContainerFourColumn: or
    },
    sr = ({
        posts: t,
        pub: s,
        numColumns: o,
        user: i,
        onChange: n
    }) => {
        const a = ai(t, o);
        return e(f, {
            gap: 16
        }, a.map(r => e(y, {
            className: $e.postRow
        }, r.map(l => e("div", {
            className: L($e.postContainer, {
                [$e.postContainerTwoColumn]: o === 2,
                [$e.postContainerThreeColumn]: o === 3,
                [$e.postContainerFourColumn]: o === 4
            })
        }, e(Se, {
            post: l,
            pub: s,
            user: i,
            variant: "square",
            onChange: n
        }))))))
    },
    mo = ({
        contributor: t,
        latestPost: s,
        pub: o
    }) => s ? e(Wt, {
        href: s.canonical_url,
        hoverBackground: "light",
        padding: 8,
        radius: "sm"
    }, e(y, {
        gap: 16,
        alignItems: "center"
    }, e(f, {
        flex: "grow"
    }, e(C.Meta, {
        color: "pub-accent"
    }, t.name), e($o, {
        post: s,
        preset: "sm",
        pub: o
    })), e(me, {
        flex: "auto"
    }, e(ri, {
        imageUrl: t.photo_url,
        size: 48
    })))) : null,
    po = 10,
    nr = ({
        pub: t
    }) => {
        const {
            iString: s,
            iTemplate: o
        } = z(), {
            contributors: i,
            latestPostByContributorId: n
        } = Ce(ke), [a, r] = V(!1);
        if (!i) return null;
        const l = i.filter(h => h.name && (n == null ? void 0 : n[h.id])),
            c = l.slice(0, po),
            d = l.slice(po);
        return e(f, {
            gap: 16
        }, e(y, {
            paddingX: 8
        }, e(re, null, s("The latest from"))), e(f, {
            gap: 4
        }, c.length ? c.map(h => e(mo, {
            contributor: h,
            latestPost: n == null ? void 0 : n[h.id],
            pub: t
        })) : e(ct, null), e(Fo, {
            expanded: a
        }, e(f, {
            gap: 4
        }, d.map(h => e(mo, {
            contributor: h,
            latestPost: n == null ? void 0 : n[h.id],
            pub: t
        })))), d.length > 0 && e(y, {
            paddingY: 4,
            paddingX: 8
        }, e(Fe, {
            onClick: () => {
                r(!a)
            }
        }, a ? o `Show less` : o `Show ${d.length} more`))))
    },
    ir = "_logo_oyafb_1",
    ar = "_logoPlaceholder_oyafb_19",
    Te = {
        logo: ir,
        "logo-64": "_logo-64_oyafb_9",
        "logo-72": "_logo-72_oyafb_14",
        logoPlaceholder: ar
    },
    hs = ({
        altText: t = "Section logo",
        size: s = 64,
        url: o,
        showPlaceholder: i
    }) => o ? e("img", {
        className: L(Te.logo, {
            [Te["logo-64"]]: s === 64,
            [Te["logo-72"]]: s === 72
        }),
        src: No(o, s * 2),
        alt: t
    }) : i ? e("div", {
        className: L(Te.logo, Te.logoPlaceholder, {
            [Te["logo-64"]]: s === 64,
            [Te["logo-72"]]: s === 72
        })
    }) : null,
    rr = ({
        pub: t
    }) => {
        const {
            iString: s
        } = z(), o = t.sections.filter(n => Ds({
            section: n,
            pub: t
        }) || !n.is_podcast), i = o.some(n => n.logo_url);
        return e(f, {
            gap: 16
        }, e(y, {
            paddingX: 8
        }, e(re, null, s("Newsletters"))), e(f, {
            gap: 4
        }, o.length ? o.map(n => e(cs, {
            image: n.logo_url || i ? e(hs, {
                size: 64,
                url: n.logo_url,
                altText: `Logo for ${n.name}`,
                showPlaceholder: !0
            }) : null,
            pub: t,
            title: n.name,
            subtitle: n.description,
            url: At(t, {
                section: n,
                addBase: !0
            })
        })) : e(ct, null)))
    },
    lr = ({
        latestPost: t,
        podcastArtUrl: s,
        podcastTitle: o,
        podcastUrl: i,
        pub: n,
        showPlaceholder: a
    }) => {
        const {
            iString: r,
            iTemplate: l
        } = z();
        return e(Wt, {
            href: t ? t.canonical_url : i,
            hoverBackground: "light",
            padding: 8,
            radius: "sm"
        }, e(y, {
            gap: 16,
            alignItems: "start"
        }, (s || a) && e(me, {
            flex: "auto"
        }, e(hs, {
            size: 64,
            url: s,
            altText: l `Logo for ${o}`,
            showPlaceholder: !0
        })), e(f, {
            flex: "grow"
        }, e(C.Meta, {
            color: "pub-accent"
        }, o), t ? e($o, {
            noIcons: !0,
            post: t,
            preset: "sm",
            pub: n
        }) : e(C.B4, {
            color: "pub-secondary-text",
            paddingTop: 8,
            style: {
                fontStyle: "italic"
            }
        }, r("Coming soon")))))
    },
    cr = ({
        pub: t
    }) => {
        const {
            iString: s
        } = z(), {
            latestPodcastPosts: o
        } = Ce(ke), i = Wo(ci(t), a => {
            var r;
            return a.section_id ? (r = li(t.navigationBarItems, l => l.section_id === a.section_id)) != null ? r : 999 : -1
        }), n = i.some(a => a.podcast_art_url);
        return e(f, {
            gap: 16
        }, e(y, {
            paddingX: 8
        }, e(re, null, s("Podcasts"))), e(f, {
            gap: 4
        }, i.length ? i.map(a => {
            var l, c;
            const r = a.section_id ? (l = o == null ? void 0 : o.sectionPodcasts[a.section_id]) != null ? l : null : (c = o == null ? void 0 : o.pubPodcast) != null ? c : null;
            return e(lr, {
                latestPost: r,
                podcastArtUrl: a.podcast_art_url,
                podcastTitle: a.title,
                podcastSubtitle: a.subtitle,
                podcastUrl: a.url,
                pub: t,
                showPlaceholder: n
            })
        }) : e(ct, null)))
    },
    dr = ({
        pub: t,
        user: s
    }) => {
        const {
            iString: o
        } = z(), {
            topPosts: i,
            utm: n,
            onChangePost: a
        } = Ce(ke);
        return !i || !a ? null : e(f, {
            gap: 16
        }, e(re, null, o("Top posts")), e(q, {
            pub: t,
            posts: i.slice(0, 5),
            user: s,
            utm: n,
            variant: "one-column-list",
            onChange: a
        }))
    },
    ve = ({
        ids: t,
        pub: s,
        user: o
    }) => {
        const i = Ho(t.map(n => n === "subscribe" ? e(ms, {
            pub: s,
            user: o
        }) : n === "recommendations" ? e(us, {
            pub: s,
            user: o,
            showEmptyState: !0,
            hideHeaderBorder: !0
        }) : n === "links" ? ur(ds, {
            pub: s,
            hideHeaderBorder: !0
        }) : n === "contributors" ? e(nr, {
            pub: s
        }) : n === "podcasts" ? e(cr, {
            pub: s
        }) : n === "newsletters" ? e(rr, {
            pub: s
        }) : n === "top-posts" ? e(dr, {
            pub: s,
            user: o
        }) : null));
        return e(f, null, i.map((n, a) => e(G, null, n, a < i.length - 1 && e(Le, null))))
    },
    ur = (t, s) => {
        const o = e(t, v({}, s));
        return typeof o.type == "function" && o.type(s) === null ? null : o
    },
    mr = ({
        numPosts: t,
        posts: s,
        pub: o,
        showEmptyState: i,
        showSearch: n,
        sidebarLeft: a,
        sidebarRight: r,
        title: l,
        user: c,
        viewAllUrl: d,
        onChange: h
    }) => {
        const {
            isDesktop: w,
            isTablet: g
        } = x();
        if (!i && s.length === 0) return null;
        const b = a && a.length > 0,
            u = r && r.length > 0;
        let p, m, _;
        w ? (p = b ? e(ve, {
            ids: a,
            pub: o,
            user: c
        }) : void 0, m = u ? e(ve, {
            ids: r,
            pub: o,
            user: c
        }) : void 0, _ = 4 - (u ? 1 : 0) - (b ? 1 : 0)) : g ? u ? (m = e(ve, {
            ids: [...r, ...a != null ? a : []],
            pub: o,
            user: c
        }), _ = 2) : b ? (p = e(ve, {
            ids: a,
            pub: o,
            user: c
        }), _ = 2) : _ = 3 : _ = 1;
        const I = e(G, null, l && e(Xt, {
            pub: o,
            title: l,
            showSearch: n,
            viewAllUrl: d
        }), s.length ? e(sr, {
            posts: s.slice(0, t),
            pub: o,
            user: c,
            numColumns: _,
            onChange: h
        }) : e(jt, null));
        return e(Ke, {
            mainContent: I,
            leftContent: p,
            rightContent: m,
            stretchToFullWidth: !0
        })
    },
    pr = ({
        numPosts: t,
        posts: s,
        pub: o,
        showEmptyState: i,
        showSearch: n,
        sidebarLeft: a,
        sidebarRight: r,
        title: l,
        user: c,
        viewAllUrl: d,
        onChange: h
    }) => {
        const {
            isTablet: w,
            isDesktop: g
        } = x();
        if (!i && s.length === 0) return null;
        const b = a && a.length > 0,
            u = r && r.length > 0;
        let p, m;
        const _ = e(G, null, l && e(Xt, {
            pub: o,
            showSearch: n,
            title: l,
            viewAllUrl: d
        }), s.length ? e(q, {
            posts: s.slice(0, t),
            pub: o,
            user: c,
            variant: "two-column-list",
            onChange: h
        }) : e(jt, null));
        return g ? (p = b ? e(ve, {
            ids: a,
            pub: o,
            user: c
        }) : void 0, m = u ? e(ve, {
            ids: r,
            pub: o,
            user: c
        }) : void 0) : w && (u ? m = e(ve, {
            ids: [...r, ...a != null ? a : []],
            pub: o,
            user: c
        }) : b && (p = e(ve, {
            ids: a,
            pub: o,
            user: c
        }))), e(Ke, {
            mainContent: _,
            leftContent: p,
            rightContent: m
        })
    },
    hr = "_outerContainer_1m9ax_1",
    gr = "_thebulwark_1m9ax_10",
    _r = "_innerContainer_1m9ax_14",
    fr = "_logoContainer_1m9ax_38",
    wr = "_ctaContainer_1m9ax_39",
    yr = "_message_1m9ax_50",
    br = "_pubLogo_1m9ax_55",
    Be = {
        outerContainer: hr,
        thebulwark: gr,
        innerContainer: _r,
        logoContainer: fr,
        ctaContainer: wr,
        message: yr,
        pubLogo: br
    },
    vr = ({
        contentBlock: t,
        pub: s,
        user: o
    }) => {
        const {
            iString: i
        } = z(), {
            freeSignup: n
        } = Ce(ke), a = it(), r = Ft(), {
            isMobile: l
        } = x(), c = at({
            pub: s,
            includeTheRampart: !0
        }), d = c, h = n || (o == null ? void 0 : o.is_free_subscribed), w = o == null ? void 0 : o.is_pledged, g = o == null ? void 0 : o.is_subscribed, b = o == null ? void 0 : o.is_founding, u = s.payments_state === "enabled", p = Us(s), m = !a.getConfigFor("pledges_disabled") && !!r.getSettingFor("payment_pledges_enabled");
        let _;
        h ? u ? g ? !b && p ? _ = "upgrade_founding" : _ = "gift" : _ = "upgrade" : _ = m ? "pledge" : null : _ = "subscribe";
        const I = yt(s, {
                params: {
                    utm_source: ne.subscribeContentBlock,
                    gift: !0,
                    next: document.location.href
                }
            }),
            S = yt(s, {
                addBase: !0,
                user: o,
                params: {
                    utm_source: ne.subscribeContentBlock,
                    simple: !0,
                    next: document.location.href,
                    referring_pub_ids: Tt("referring_pub_ids")
                }
            }),
            P = qs({
                pub: s,
                user: o,
                params: {
                    utm_source: ne.subscribeContentBlock,
                    next: document.location.href
                }
            }),
            B = Gs({
                pub: s
            }),
            A = b ? t.attrs.founding_member_message : g ? t.attrs.paid_subscriber_message : h ? t.attrs.free_subscriber_message : t.attrs.non_subscriber_message;
        return e("div", {
            className: L(Be.outerContainer, {
                [Be.thebulwark]: c
            })
        }, e(J, {
            className: Be.innerContainer,
            paddingY: d || l ? 40 : 48
        }, e(y, {
            direction: l ? "column" : "row",
            alignItems: "center",
            gap: l ? d ? 16 : 24 : 40,
            justifyContent: d ? "space-between" : "center"
        }, d && e(y, {
            alignItems: "center",
            className: Be.logoContainer,
            gap: 4
        }, e(Ve, {
            className: Be.pubLogo,
            pub: s,
            logo_url: s.logo_url
        }), c && !l && e(C, {
            color: "pub-primary-text",
            font: "pub-headings",
            size: 20
        }, "The Bulwark +")), A && e(y, {
            alignItems: "center",
            direction: l ? "column" : "row",
            gap: 8
        }, e(C, {
            className: Be.message,
            font: "pub-headings",
            align: l || d ? "center" : "left",
            color: "pub-primary-text",
            size: d ? 20 : 24,
            lineHeight: 30
        }, A)), _ && e(J, {
            flex: "auto",
            className: Be.ctaContainer
        }, _ === "subscribe" || _ === "upgrade" ? e(xe, {
            priority: "primary",
            href: S,
            localNavigation: !1
        }, c ? "Join Bulwark +" : To(s, {
            isFreeSubscribed: h,
            isPledged: w,
            pledgesEnabled: m
        })) : _ === "upgrade_founding" ? e(xe, {
            priority: "primary",
            href: P,
            localNavigation: !1
        }, i("Upgrade to founding")) : _ === "pledge" ? e(xe, {
            priority: "primary",
            href: S,
            localNavigation: !1
        }, i("Pledge your support")) : _ === "gift" ? c ? e(xe, {
            priority: "primary",
            href: B,
            localNavigation: !1
        }, i("Gift a subscription")) : e(xe, {
            priority: "primary",
            href: I,
            localNavigation: !1
        }, i("Gift a subscription")) : null))))
    },
    Cr = ({
        contentBlock: t,
        posts: s,
        pub: o,
        showEmptyState: i,
        showSearch: n = !1,
        title: a,
        user: r,
        viewAllUrl: l,
        onChange: c
    }) => {
        var h;
        const {
            breakpoint: d
        } = x();
        if (t.block_type === "list") return e(pr, {
            numPosts: (h = t.num_posts) != null ? h : In.posts.default,
            posts: s,
            pub: o,
            sidebarLeft: t.secondary_sidebar_modules,
            sidebarRight: t.primary_sidebar_modules,
            showEmptyState: i,
            showSearch: n,
            title: a,
            user: r,
            viewAllUrl: l,
            onChange: c
        });
        if (t.block_type === "grid") {
            const w = zo({
                contentBlock: t,
                breakpoint: d
            });
            return e(mr, {
                numPosts: w,
                posts: s,
                pub: o,
                sidebarLeft: t.secondary_sidebar_modules,
                sidebarRight: t.primary_sidebar_modules,
                showEmptyState: i,
                showSearch: n,
                title: a,
                user: r,
                viewAllUrl: l,
                onChange: c
            })
        }
        return t.block_type === "feature" ? e(Ga, {
            posts: s,
            pub: o,
            showEmptyState: i,
            showSearch: n,
            title: a,
            user: r,
            viewAllUrl: l,
            onChange: c
        }) : t.block_type === "subscribe" ? e(vr, {
            contentBlock: t,
            pub: o,
            user: r
        }) : null
    },
    Sr = () => e(J, {
        paddingBottom: 120
    }, e(Ke, {
        mainContent: e(qt, {
            animated: !1,
            postCount: 4,
            variant: "list"
        }),
        leftContent: e("div", null, " "),
        rightContent: e("div", null, " ")
    })),
    kr = ({
        contentBlocks: t,
        postsBySectionId: s,
        postsByTagId: o,
        postTagsById: i,
        pub: n,
        recentPosts: a,
        sectionsById: r,
        showEmptyStates: l,
        user: c,
        onChange: d
    }) => {
        const {
            breakpoint: h
        } = x();
        let w = 0,
            g = !1;
        const b = t.filter(u => u.post_source === "latest").length > 1;
        return e(f, {
            paddingBottom: 40
        }, t.length || !l ? t.map((u, p) => {
            var A, E;
            let m = [],
                _ = "",
                I, S = !1;
            const P = p < t.length - 1 ? t[p + 1] : null,
                B = u.block_type === "subscribe" || (P == null ? void 0 : P.block_type) === "subscribe";
            if (u.post_source === "latest") {
                const T = zo({
                    contentBlock: u,
                    breakpoint: h
                });
                m = a.slice(w, w + T), w += T, _ = b ? "" : "Recent posts", I = xt(n), g || (S = !0, g = !0)
            } else if (u.post_source === "section" && u.section_id) {
                const T = r[u.section_id];
                m = (A = s[u.section_id]) != null ? A : [], _ = (T == null ? void 0 : T.name) || "", I = T && At(n, {
                    section: T
                })
            } else if (u.post_source === "tag" && u.post_tag_id) {
                const T = i[u.post_tag_id];
                m = (E = o[u.post_tag_id]) != null ? E : [], _ = (T == null ? void 0 : T.name) || "", I = T && Io(n, T)
            }
            return e(je, {
                pub: n,
                showPubPins: u.post_source === "latest",
                showSectionPins: !1
            }, e("div", {
                id: `block-${u.id}`,
                style: {
                    scrollMarginTop: 48
                }
            }, e(Cr, {
                key: u.id,
                contentBlock: u,
                posts: m,
                pub: n,
                showEmptyState: l,
                showSearch: S,
                title: _,
                user: c,
                viewAllUrl: I,
                onChange: d
            })), p < t.length - 1 && !B && e(Le, null))
        }) : e(Sr, null))
    },
    Pr = "_container_xdy2v_1",
    Nr = "_containerNoImage_xdy2v_5",
    Ir = "_videoLayer_xdy2v_9",
    Tr = "_contentLayer_xdy2v_14",
    Br = "_content_xdy2v_14",
    xr = "_image_xdy2v_34",
    Mr = "_flippedImageContainer_xdy2v_48",
    Lr = "_flippedImage_xdy2v_48",
    Er = "_blurOverlay_xdy2v_71",
    Rr = "_darkOverlay_xdy2v_88",
    Ar = "_postTitleMobile_xdy2v_99",
    oe = {
        container: Pr,
        containerNoImage: Nr,
        videoLayer: Ir,
        contentLayer: Tr,
        content: Br,
        image: xr,
        flippedImageContainer: Mr,
        flippedImage: Lr,
        blurOverlay: Er,
        darkOverlay: Rr,
        postTitleMobile: Ar
    },
    ho = Sn({
        position: "absolute",
        inset: 0,
        radius: "sm",
        pointerEvents: "none"
    }),
    gs = ({
        columns: t,
        hideLogo: s,
        highlightPost: o = !1,
        isPodcast: i,
        post: n,
        pub: a,
        section: r,
        showPodcastLinks: l,
        user: c,
        utm: d
    }) => {
        const h = ye(null),
            {
                isMobile: w
            } = x(),
            g = Vs({
                post: n
            }),
            {
                title: b,
                description: u
            } = Dt({
                pub: a,
                podcastUpload: n.podcastUpload,
                section: r != null ? r : null
            }),
            p = o ? n.title : b,
            m = o ? n.subtitle : u,
            _ = I => {
                const S = $n({
                    linkToComments: !1,
                    post: n,
                    pub: a,
                    utm: d
                });
                Rt(S, {
                    event: I
                })
            };
        return w ? e(f, {
            gap: 12
        }, e(f, {
            onClick: _
        }, e(y, {
            ref: h,
            flex: "fill",
            position: "relative",
            style: {
                minHeight: o ? 400 : 500
            }
        }, e(y, {
            className: oe.videoLayer,
            direction: "column",
            position: "absolute",
            radius: "sm"
        }, e(y, {
            flex: "grow",
            position: "relative",
            style: {
                width: "100%"
            }
        }, e(Ze, {
            className: oe.image,
            hideTimestamp: !0,
            imageAspectRatio: 16 / 9,
            imageWidth: 1280,
            isBelowTheFold: !1,
            playButtonSize: null,
            post: n,
            pub: a,
            squareImageSize: "large",
            presenceRef: h
        })), e(y, {
            flex: "grow",
            overflow: "hidden",
            position: "relative",
            className: oe.flippedImageContainer
        }, e(Ze, {
            className: oe.flippedImage,
            hideTimestamp: !0,
            imageAspectRatio: 16 / 9,
            imageWidth: 1280,
            isBelowTheFold: !1,
            playButtonSize: null,
            post: n,
            pub: a,
            squareImageSize: "large",
            presenceRef: h
        })), e(ho, {
            className: oe.darkOverlay
        }), e(y, {
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            className: oe.blurOverlay,
            radius: "sm",
            pointerEvents: "none"
        })), e(y, {
            className: oe.contentLayer,
            position: "absolute",
            pointerEvents: "none"
        }, e(y, {
            flex: "grow"
        }, e(f, {
            padding: 16,
            gap: 16,
            paddingBottom: 24
        }, !s && !o && e(bt, {
            post: n,
            pub: a,
            section: r != null ? r : null,
            size: 48,
            useSection: !i
        }), e(f, {
            gap: 8
        }, e(C.H4, {
            color: "white",
            font: "pub-headings"
        }, p), e(C.B4, {
            color: "white",
            className: oe.descriptionMobile,
            clamp: 2
        }, m), e(y, {
            flex: "grow"
        })), n.videoUpload || n.podcastUpload || n.podcast_url ? e(go, {
            duration: g,
            highlightPost: o,
            post: n
        }) : e(_o, {
            highlightPost: o,
            post: n
        })))))), l && i && e(qe, {
            limit: 2,
            pub: a,
            section: r != null ? r : null,
            user: c,
            stretch: !0
        })) : e(ae, {
            variant: t === 4 ? "full-width" : "three-column-width"
        }, e(f, {
            gap: 12
        }, e(f, {
            paddingX: 8,
            onClick: _
        }, e(y, {
            ref: h,
            flex: "fill",
            position: "relative",
            style: {
                minHeight: 400
            }
        }, e(y, {
            position: "absolute",
            style: {
                bottom: 16,
                right: 16,
                zIndex: 1
            }
        }, e(lt, {
            allowEdit: !0,
            hideComments: !0,
            hideFeedRestackButton: !0,
            hideReactions: !0,
            hideSavePost: !0,
            hideShare: !0,
            isStatic: !1,
            labelStyle: "counts-or-none",
            post: n,
            pub: a,
            style: "compressed",
            user: c,
            onChange: () => {}
        })), e(y, {
            position: "absolute",
            style: {
                width: "100%",
                height: "100%"
            },
            radius: "sm"
        }, e(y, {
            flex: "grow",
            position: "relative"
        }, e(y, {
            className: oe.flippedImageContainer,
            position: "relative",
            overflow: "hidden",
            flex: "grow"
        }, e(Ze, {
            className: oe.flippedImage,
            disableVideoHover: !0,
            hideTimestamp: !0,
            imageAspectRatio: 16 / 9,
            imageWidth: 1280,
            isBelowTheFold: !1,
            playButtonSize: null,
            post: n,
            pub: a,
            squareImageSize: "large",
            presenceRef: h
        }))), e(y, {
            flex: "grow",
            position: "relative",
            style: {
                width: "100%"
            }
        }, e(Ze, {
            className: oe.image,
            hideTimestamp: !0,
            imageAspectRatio: 16 / 9,
            imageWidth: 1280,
            isBelowTheFold: !1,
            playButtonSize: null,
            post: n,
            pub: a,
            squareImageSize: "large",
            presenceRef: h
        })), e(ho, {
            className: oe.darkOverlay
        }), e(y, {
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            className: oe.blurOverlay,
            radius: "sm",
            pointerEvents: "none"
        })), e(y, {
            position: "absolute",
            pointerEvents: "none",
            style: {
                width: "100%",
                height: "100%"
            }
        }, e(y, {
            flex: "grow"
        }, e(f, {
            justifyContent: s || o ? "end" : "center",
            padding: 48
        }, e(f, {
            gap: 24
        }, !s && !o && e(bt, {
            post: n,
            pub: a,
            section: r != null ? r : null,
            size: 76,
            useSection: !i
        }), e(f, {
            gap: 8
        }, e(C.H2, {
            color: "white",
            clamp: 3,
            font: "pub-headings"
        }, p), e(C.B4, {
            color: "white",
            clamp: 3
        }, m), e(y, {
            flex: "grow"
        })), n.videoUpload || n.podcastUpload || n.podcast_url ? e(go, {
            duration: g,
            highlightPost: o,
            post: n
        }) : e(_o, {
            highlightPost: o,
            post: n
        })))), e(y, {
            flex: "grow",
            pointerEvents: "none"
        })))), l && i && e(f, {
            paddingX: 8
        }, e(qe, {
            pub: a,
            section: r != null ? r : null,
            user: c,
            stretch: !0
        }))))
    },
    go = ({
        duration: t,
        highlightPost: s,
        post: o
    }) => {
        const {
            iString: i
        } = z(), {
            isMobile: n
        } = x();
        return e(y, {
            alignItems: "center",
            gap: n ? 16 : 24,
            pointerEvents: "auto"
        }, e(y, {
            flex: "auto"
        }, e(di, {
            isPlaying: !1,
            size: n ? 56 : 72
        })), e(y, {
            alignItems: "center"
        }, e(f, null, e(y, {
            gap: 4,
            alignItems: "center"
        }, e(y, {
            gap: 4,
            width: 16
        }, o.videoUpload ? e(Xo, {
            size: 14,
            color: "white"
        }) : e(Ko, {
            size: 14,
            color: "white"
        })), e(C.Meta, {
            color: "white"
        }, i("LATEST")), t > 0 && e(G, null, e(C.Meta, {
            color: "white"
        }, "·"), e(C.Meta, {
            color: "white"
        }, Ws(t)))), !s && e(C.Meta, {
            color: "white"
        }, o.title))))
    },
    _o = ({
        highlightPost: t,
        post: s
    }) => {
        const {
            iString: o
        } = z();
        return e(y, {
            alignItems: "center",
            gap: 16,
            pointerEvents: "auto"
        }, e(st, {
            size: "md",
            rounded: !0
        }, e(vn, {
            size: 20
        })), e(f, null, e(C.Meta, {
            color: "white"
        }, o(t ? "READ THE LATEST" : "LATEST")), !t && e(C.B2, {
            color: "white",
            clamp: 1,
            weight: "semibold"
        }, s.title)))
    },
    Hr = ({
        posts: t,
        pub: s,
        user: o,
        utm: i
    }) => {
        const {
            isMobile: n
        } = x();
        if (!t.length) return null;
        const a = t[0],
            r = a.section_id ? s.sections.find(c => c.id === a.section_id) : void 0,
            l = Bo({
                post: a,
                section: r != null ? r : null,
                pub: s
            });
        return e(f, {
            cursor: "pointer",
            paddingX: n ? 16 : 0,
            onClick: () => {
                let c = a.canonical_url;
                a.type === "video" ? c = fe(a.canonical_url, {
                    autoPlay: !0
                }) : i && (c = wt(a.canonical_url, {
                    utm: i
                })), Rt(c)
            }
        }, e(gs, {
            columns: 4,
            highlightPost: !0,
            isPodcast: !l,
            post: t[0],
            pub: s,
            section: r,
            user: o != null ? o : null
        }))
    },
    Fr = n => {
        var a = n,
            {
                columns: t = 4,
                posts: s,
                pub: o
            } = a,
            i = K(a, ["columns", "posts", "pub"]);
        const {
            isMobile: r
        } = x();
        return r ? null : e(ae, {
            variant: t === 3 ? "three-column-width" : "full-width"
        }, e(f, {
            gap: 12
        }, e(ss, {
            pub: o
        }), e(q, N(v({}, i), {
            pub: o,
            posts: s,
            variant: t === 3 ? "three-column-mini-row" : "mini-row"
        }))))
    },
    zr = "_container_1sivj_1",
    Or = "_bodyContainer_1sivj_13",
    He = {
        container: zr,
        bodyContainer: Or,
        "container--empty": "_container--empty_1sivj_18"
    },
    $r = "modular-home-posts",
    Dr = js(t => {
        var Ye, Je;
        const Ee = t,
            {
                bodyPostGroups: s,
                contentBlocks: o,
                contributors: i,
                freeSignup: n,
                freeSignupEmail: a,
                homepageLinks: r,
                latestPodcastPosts: l,
                latestPostByContributorId: c,
                numRecommendations: d,
                postsByGroupId: h,
                postsBySectionId: w,
                postsByTagId: g,
                postTagsById: b,
                pub: u,
                recommendations: p,
                sectionsById: m,
                showEmptyStates: _,
                showSiteMap: I,
                theme: S,
                user: P,
                utm: B
            } = Ee,
            A = K(Ee, ["bodyPostGroups", "contentBlocks", "contributors", "freeSignup", "freeSignupEmail", "homepageLinks", "latestPodcastPosts", "latestPostByContributorId", "numRecommendations", "postsByGroupId", "postsBySectionId", "postsByTagId", "postTagsById", "pub", "recommendations", "sectionsById", "showEmptyStates", "showSiteMap", "theme", "user", "utm"]),
            {
                posts: E,
                topPosts: T,
                onChange: F,
                postsLoaded: O
            } = Tn(Fn(t, ["newPosts", "pinnedPosts", "topPosts", "postsLoaded"])),
            {
                breakpoint: M,
                isMobile: R
            } = x(),
            {
                getSettingFor: k
            } = Ft(),
            D = Co(k("post_preview_crop_gravity"), ["center", "auto"]),
            $ = it(),
            Y = Bn(),
            H = E[0],
            W = Ht(() => T == null ? void 0 : T.filter(dt => !H || dt.id !== H.id), [T, H]);
        if (E.length === 0) return O ? e(Ur, null) : e(f, {
            className: L(He.container, He["container--empty"]),
            alignItems: "center",
            justifyContent: "center"
        }, e("div", {
            className: "more-loader"
        }));
        const le = !((Ye = E[0]) != null && Ye.cover_image);
        let ce = Y[S.home_hero][M];
        le && ["magaziney", "magazine-5"].includes(S.home_hero) && ["desktop", "tablet"].includes(M) && (ce += 2);
        let de = S.home_hero;
        E.length < ce + 1 && (de = "newspaper", ce = 1);
        const be = de === "podcast",
            Pe = ["newspaper", "podcast"].includes(de) && S.home_posts === "list",
            _e = ce === 0 || E.length >= ce + 1 || S.home_posts === "custom",
            U = _e ? E.slice(ce) : E,
            ee = _e && S.home_show_top_posts && W && de !== "magaziney" && !R;
        let te = _e;
        return S.home_posts === "custom" && o && ((Je = o[0]) == null ? void 0 : Je.block_type) === "subscribe" && (te = !1), ["feature-media", "podcast"].includes(de) && !ee && (te = !1), e(jo, {
            cropGravity: D,
            hideSubtitlesOnGrid: !!$.getConfigFor("post_preview_hide_subtitles_on_grid"),
            highlightByline: !!$.getConfigFor("post_preview_highlight_byline")
        }, e(ke.Provider, {
            value: {
                contributors: i,
                freeSignup: n,
                freeSignupEmail: a,
                homepageLinks: r,
                latestPodcastPosts: l,
                latestPostByContributorId: c,
                numRecommendations: d,
                recommendations: p,
                topPosts: T,
                utm: B,
                onChangePost: F
            }
        }, e(We, null, e(f, {
            className: He.container,
            paddingTop: be ? 0 : 16,
            paddingX: 16
        }, e(f, {
            paddingTop: !_e && R ? 24 : 0
        }, e(f, null, _e && (de === "feature-media" ? e(f, {
            paddingTop: R ? 16 : 8,
            paddingBottom: R || ee ? 24 : 40
        }, e(Hr, {
            posts: E,
            pub: u,
            user: P,
            utm: B
        })) : e(je, {
            pub: u,
            showPubPins: !0,
            showSectionPins: !1
        }, e(ua, {
            bodyVariant: S.home_posts,
            firstPostMissingImage: le,
            hasMiniPostsRowUnderneath: ee,
            heroAlignment: S.home_hero_alignment,
            isMobile: R,
            posts: E.slice(0, ce),
            pub: u,
            showPodcastLinks: S.home_hero_show_podcast_links,
            topPosts: W,
            user: P,
            utm: B,
            variant: de,
            onChange: F
        }))), ee && e(G, null, !["feature-media", "podcast"].includes(de) && e(Le, {
            numColumns: Pe ? 3 : 4,
            paddingTop: 20,
            paddingBottom: 20
        }), e(Fr, {
            columns: Pe ? 3 : 4,
            posts: W,
            pub: u,
            user: P,
            utm: B,
            onChange: F
        })))), e(f, {
            className: He.bodyContainer,
            id: $r
        }, te && e(Le, {
            numColumns: Pe ? 3 : 4,
            paddingTop: ee ? 8 : void 0
        }), e("div", {
            id: "home-body",
            style: {
                scrollMarginTop: 48
            }
        }, S.home_posts !== "custom" && e(Da, N(v({}, A), {
            freeSignup: n,
            freeSignupEmail: a,
            hideImagesFromList: S.hide_images_from_list,
            posts: U,
            pub: u,
            showSiteMap: I,
            source: `${S.home_hero}-${S.home_posts}-home`,
            user: P,
            utm: B,
            variant: S.home_posts,
            onChange: F,
            bodyPostGroups: s,
            postsByGroupId: h,
            hasEmptyGroupOptions: t.hasEmptyGroupOptions
        })), S.home_posts === "custom" && o && w && g && b && m && e(kr, {
            contentBlocks: o,
            postsBySectionId: w,
            postsByTagId: g,
            postTagsById: b,
            pub: u,
            recentPosts: U,
            sectionsById: m,
            showEmptyStates: _,
            user: P,
            onChange: F
        })))))))
    }),
    Ur = () => {
        const {
            iString: t
        } = z();
        return e(f, {
            className: L(He.container, He["container--empty"]),
            alignItems: "center",
            justifyContent: "center"
        }, t("Coming Soon"))
    },
    Ac = $ => {
        var Y = $,
            {
                blurbs: t,
                freeSignup: s,
                freeSignupEmail: o,
                hasEmptyGroupOptions: i,
                hide_intro_popup: n,
                notify_user: a,
                numRecommendations: r,
                pub: l,
                referralCode: c,
                showEmptyStates: d,
                showWelcome: h,
                user: w,
                postTags: g,
                postsByGroupId: b,
                sections: u,
                launchWelcomePage: p,
                skipIntoPopupRender: m,
                contentBlocks: _,
                contributors: I,
                latestPodcastPosts: S,
                latestPostByContributorId: P,
                homepageLinks: B,
                newPosts: A,
                pinnedPosts: E,
                recommendations: T,
                postsBySectionId: F,
                postsByTagId: O,
                topPosts: M,
                postTagsById: R,
                sectionsById: k
            } = Y,
            D = K(Y, ["blurbs", "freeSignup", "freeSignupEmail", "hasEmptyGroupOptions", "hide_intro_popup", "notify_user", "numRecommendations", "pub", "referralCode", "showEmptyStates", "showWelcome", "user", "postTags", "postsByGroupId", "sections", "launchWelcomePage", "skipIntoPopupRender", "contentBlocks", "contributors", "latestPodcastPosts", "latestPostByContributorId", "homepageLinks", "newPosts", "pinnedPosts", "recommendations", "postsBySectionId", "postsByTagId", "topPosts", "postTagsById", "sectionsById"]);
        const {
            contentBlocks: H,
            contributors: W,
            latestPodcastPosts: le,
            latestPostByContributorId: ce,
            homepageLinks: de,
            newPosts: be,
            pinnedPosts: Pe,
            postsLoaded: _e,
            recommendations: U,
            topPosts: ee,
            postsBySectionId: te,
            postsByTagId: Ee,
            postTagsById: Ye,
            sectionsById: Je
        } = xn({
            pubId: l.id,
            preloads: {
                contentBlocks: _,
                contributors: I,
                latestPodcastPosts: S,
                latestPostByContributorId: P,
                homepageLinks: B,
                newPosts: A,
                pinnedPosts: E,
                recommendations: T,
                postsBySectionId: F,
                postsByTagId: O,
                topPosts: M,
                postTagsById: R,
                sectionsById: k
            }
        });
        ie(() => {
            a && typeof window != "undefined" && we(a)
        }, [a]);
        const dt = !!(be && be.length > 0),
            Cs = Ht(() => {
                var Kt;
                return Ho((Kt = l.theme.body_post_groups) == null ? void 0 : Kt.map(Re => {
                    var Yt, Jt, Qt, Zt;
                    return Re.tag_id ? (Jt = (Yt = Re.post_tag) != null ? Yt : g == null ? void 0 : g.find(ut => ut.id === Re.tag_id)) != null ? Jt : null : Re.section_id && (Zt = (Qt = Re.section) != null ? Qt : u == null ? void 0 : u.find(ut => ut.id === Re.section_id)) != null ? Zt : null
                }))
            }, [g, l.theme.body_post_groups, u]);
        return e("div", {
            className: "home-page home-page--modular"
        }, e(Ot, {
            pub: l,
            isHomepage: !0
        }), e(Dr, N(v({}, kn(D, "matches")), {
            contentBlocks: H,
            contributors: W,
            latestPodcastPosts: le,
            latestPostByContributorId: ce,
            homepageLinks: de,
            newPosts: be,
            pinnedPosts: Pe,
            postsLoaded: _e,
            recommendations: U,
            topPosts: ee,
            postsBySectionId: te,
            postsByTagId: Ee,
            bodyPostGroups: Cs,
            freeSignup: s,
            freeSignupEmail: o,
            hasEmptyGroupOptions: i,
            numRecommendations: r,
            postsByGroupId: b,
            postTagsById: Ye,
            pub: l,
            sectionsById: Je,
            showEmptyStates: !!d,
            showSiteMap: dt,
            theme: l.theme,
            user: w
        })), m ? null : e(es, {
            blurbs: t,
            freeSignup: s,
            freeSignupEmail: o,
            hide_intro_popup: n,
            pub: l,
            referralCode: c,
            showWelcome: h,
            user: w,
            launchWelcomePage: p
        }))
    },
    qr = {
        audio: Ko,
        video: Xo
    },
    Gr = {
        audio: "Audio",
        video: "Video"
    },
    _s = ({
        medium: t
    }) => {
        const s = qr[t];
        return e(y, {
            alignItems: "center",
            color: "pub-secondary-text",
            gap: 4,
            bg: "secondary",
            paddingX: 6,
            radius: "sm"
        }, e(s, {
            size: 12
        }), e(C, {
            size: 12,
            weight: "semibold",
            font: "text",
            lineHeight: 20
        }, Gr[t]))
    },
    Vr = "_logo_u0vxt_1",
    Wr = {
        logo: Vr
    },
    jr = ({
        description: t,
        logoUrl: s,
        name: o,
        pub: i,
        section: n,
        user: a
    }) => {
        const {
            isMobile: r
        } = x(), l = at({
            pub: i,
            includeTheRampart: !0
        });
        return e(y, {
            alignItems: "center",
            direction: r ? "column" : "row",
            gap: 32,
            paddingTop: 16,
            paddingBottom: 24,
            paddingX: r ? 0 : 8
        }, s && e(Xe, {
            className: Wr.logo,
            src: s,
            maxWidth: 300,
            imageIsFixedWidth: !0,
            useRetinaSizing: !0,
            alt: o
        }), e(f, {
            gap: 16
        }, e(f, null, l && (a == null ? void 0 : a.is_subscribed) && Xs({
            sectionId: n == null ? void 0 : n.id
        }) && e(C.Meta, {
            color: "pub-accent",
            paddingBottom: 8
        }, "+ Member-Only"), e(C.H1, {
            font: "pub-headings",
            color: "pub-primary-text"
        }, o), l && e(y, {
            alignItems: "center",
            gap: 8,
            paddingTop: 8,
            paddingBottom: 12
        }, xo({
            sectionId: n == null ? void 0 : n.id
        }).map(c => e(_s, {
            medium: c
        }))), t && e(f, {
            gap: 8
        }, t.split(`
`).map(c => e(C.B3, {
            color: "pub-secondary-text"
        }, c)))), l && e(gi, {
            pub: i,
            section: n,
            trackingSource: ne.sectionPage,
            variant: a != null && a.is_subscribed ? "default" : "member-only"
        })))
    },
    fo = {
        "listen-on-item": "_listen-on-item_1lxb8_1",
        "listen-on-item--disabled": "_listen-on-item--disabled_1lxb8_12"
    },
    fs = ({
        description: t,
        feedUrl: s,
        pub: o,
        post: i,
        section: n,
        showLinks: a,
        user: r
    }) => {
        const {
            iString: l
        } = z();
        return e(f, {
            gap: t ? 8 : 16,
            "data-testid": "shows-listen-on"
        }, e(re, null, l("Listen on")), t && e(C.B3, {
            color: "pub-secondary-text",
            paddingBottom: 8
        }, t), e(y, {
            gap: 8,
            wrap: "wrap"
        }, i && e(kt, {
            platformKey: "substack",
            label: l("Substack App"),
            onClick: () => {
                Do({
                    feedUrl: s,
                    pub: o,
                    post: i
                })
            }
        }), Uo({
            feedUrl: s,
            isApple: So(),
            isMobile: !1,
            showLinks: a,
            user: r,
            render: ({
                label: c,
                key: d,
                onClick: h
            }) => e(kt, {
                label: c,
                platformKey: d,
                onClick: h
            })
        }), (r == null ? void 0 : r.is_subscribed) && e(Xr, {
            section: n
        })))
    },
    kt = ({
        disabled: t,
        label: s,
        platformKey: o,
        onClick: i
    }) => e(y, {
        alignItems: "center",
        bg: "secondary",
        className: L(fo["listen-on-item"], {
            [fo["listen-on-item--disabled"]]: t
        }),
        gap: 8,
        paddingX: 12,
        radius: "sm",
        onClick: t ? void 0 : i
    }, e(me, {
        opacity: t ? 40 : 100
    }, e(Me, {
        platformKey: o
    })), e(C.B4, {
        weight: "semibold",
        color: "pub-secondary-text",
        opacity: t ? 80 : 100,
        nowrap: !0
    }, s)),
    Xr = ({
        section: t
    }) => {
        const {
            iString: s
        } = z(), [o, i] = V(!1), n = () => ue(void 0, null, function*() {
            try {
                Q(Z.PODCAST_EMAIL_LINK_CLICKED), yield pe.post("/api/v1/subscription/send_podcast_email").send({
                    section_id: t == null ? void 0 : t.id
                }), we(s("Email sent")), i(!0)
            } catch (a) {
                (a == null ? void 0 : a.status) === 429 ? (we(s("Email already sent")), i(!0)) : we(s("Something went wrong sending email"))
            }
        });
        return e(kt, {
            disabled: o,
            label: s(o ? "Email sent" : "Email mobile setup link"),
            platformKey: "email",
            onClick: () => {
                n()
            }
        })
    },
    Kr = ({
        firstPodcastPost: t,
        pub: s,
        user: o,
        section: i = null
    }) => {
        const {
            iString: n
        } = z(), {
            isMobile: a
        } = x(), {
            feedUrl: r
        } = Ut({
            pub: s,
            user: o,
            section: i
        }), l = $t({
            pub: s,
            section: i,
            spotifySettings: Mt({
                pub: s,
                section: i != null ? i : null
            })
        });
        return e(me, {
            paddingX: a ? 0 : 8
        }, e(fs, {
            feedUrl: r,
            post: t != null ? t : null,
            pub: s,
            section: i,
            showLinks: l,
            description: n("Add this podcast to your player of choice:"),
            user: o
        }))
    },
    Yr = "_bodyContainer_q4p5y_1",
    Jr = {
        bodyContainer: Yr
    },
    Qr = ({
        newPosts: t,
        pinnedPosts: s,
        podcastSettings: o,
        pub: i,
        search: n,
        section: a,
        sort: r,
        user: l,
        utm: c,
        welcomeAndShareElement: d
    }) => {
        var w, g, b, u;
        const {
            isMobile: h
        } = x();
        return e(We, null, e(Jo, {
            columns: 3
        }, e(Ot, {
            pub: i,
            section: a,
            isPodcast: !0
        }), e(jr, {
            description: (w = o.description) != null ? w : "",
            logoUrl: l != null && l.is_subscribed && (g = o.paidEpisodeArtUrl) != null ? g : o.artUrl,
            name: (b = o.title) != null ? b : "",
            pub: i,
            section: a,
            user: l
        }), !h && e(Le, {
            numColumns: 4
        }), e("div", {
            className: Jr.bodyContainer
        }, e(Gt, {
            isPodcast: !0,
            maxPosts: 7,
            newPosts: t,
            pinnedPosts: s,
            pub: i,
            search: n,
            sectionId: a == null ? void 0 : a.id,
            sort: r,
            user: l,
            variant: "list"
        }, ({
            posts: p,
            linkToComments: m,
            onClickPost: _
        }) => e(q, {
            hideImages: i.theme.hide_images_from_list,
            linkToComments: m,
            posts: p,
            pub: i,
            user: l,
            utm: c,
            variant: "two-column-list",
            onChange: () => {},
            onClickPost: _
        })), e(Kr, {
            firstPodcastPost: (u = t == null ? void 0 : t.filter(p => p.type === "podcast")[0]) != null ? u : null,
            pub: i,
            user: l,
            section: a
        })), d))
    },
    Zr = ({
        align: t,
        columns: s,
        description: o,
        imageUrl: i,
        name: n
    }) => {
        const {
            isMobile: a
        } = x(), r = rt({
            radius: "md",
            width: 80
        }), l = e(f, {
            paddingTop: 16
        }, e(f, {
            alignItems: t === "center" ? "center" : void 0,
            gap: 12,
            paddingX: a ? 0 : 8
        }, i && e(Xe, {
            className: r,
            imageIsFixedWidth: !0,
            maxWidth: 80,
            src: i,
            useRetinaSizing: !0
        }), e(C.H1, {
            color: "pub-primary-text",
            font: "pub-headings"
        }, n), e(C.B2, {
            align: t,
            color: "pub-secondary-text"
        }, o)), e(Le, {
            paddingTop: 40,
            paddingBottom: 0
        }));
        return s === 2 ? e(Ke, {
            mainContent: l
        }) : e(ae, {
            variant: "three-column-width"
        }, l)
    },
    el = ({
        columns: t,
        podcastSettings: s,
        firstPost: o,
        heroAlignment: i,
        pub: n,
        section: a,
        showPodcastLinks: r,
        user: l,
        utm: c,
        variant: d
    }) => {
        var p;
        const {
            isMobile: h
        } = x(), w = (p = s ? s.description : a == null ? void 0 : a.description) != null ? p : "", g = s ? s.artUrl : a == null ? void 0 : a.logo_url, b = s ? s.title : a == null ? void 0 : a.name, u = Ks(g);
        return d === "feature-media" && o && t !== 2 ? e(f, {
            paddingTop: h ? 16 : 24
        }, e(gs, {
            columns: t,
            hideLogo: !g || u,
            isPodcast: !!s,
            pub: n,
            post: o,
            section: a,
            showPodcastLinks: r,
            user: l != null ? l : null,
            utm: c
        })) : d === "podcast" && h ? e(ls, {
            description: w,
            imageUrl: g,
            name: b,
            pub: n,
            section: a != null ? a : null,
            showPodcastLinks: r,
            user: l
        }) : d === "podcast" && i === "center" ? e(rs, {
            description: w,
            imageUrl: g,
            name: b,
            pub: n,
            section: a != null ? a : null,
            showPodcastLinks: r,
            user: l
        }) : d === "podcast" && s ? e(as, {
            columns: Math.max(t, 3),
            description: w,
            imageUrl: g,
            name: b,
            pub: n,
            section: a != null ? a : null,
            showPodcastLinks: r,
            user: l
        }) : e(Zr, {
            align: i,
            columns: Math.min(t, 3),
            description: w,
            imageUrl: u ? null : g,
            name: b
        })
    },
    tl = ({
        columns: t,
        isPodcast: s,
        newPosts: o,
        pinnedPosts: i,
        pub: n,
        search: a,
        section: r,
        sort: l,
        user: c,
        utm: d,
        variant: h,
        onChangeFirstPost: w
    }) => {
        let g = 7;
        h === "grid" && (t === 4 && (g = 8), t === 3 && (g = 9));
        const b = e(Gt, {
            isPodcast: s,
            maxPosts: g,
            newPosts: o,
            pinnedPosts: i,
            pub: n,
            search: a,
            sectionId: r == null ? void 0 : r.id,
            sort: l,
            user: c,
            variant: h,
            onPostsLoaded: ({
                posts: u
            }) => {
                u.length > 0 && w({
                    post: u[0]
                })
            }
        }, ({
            posts: u,
            linkToComments: p,
            onClickPost: m
        }) => e(je, {
            pub: n,
            showPubPins: !1,
            showSectionPins: !0
        }, e(q, {
            hideImages: n.theme.hide_images_from_list,
            linkToComments: p,
            posts: u,
            pub: n,
            user: c,
            utm: d,
            variant: sl({
                columns: t,
                variant: h
            }),
            onChange: () => {},
            onClickPost: m
        })));
        return h === "list" ? e(Ke, {
            mainContent: b
        }) : e(ae, {
            variant: ol({
                columns: t
            })
        }, b)
    };

function ol({
    columns: t
}) {
    return t === 4 ? "full-width" : "three-column-width"
}

function sl({
    columns: t,
    variant: s
}) {
    return s === "list" ? "two-column-list" : t === 4 ? "four-column-grid" : "three-column-grid"
}
const Hc = ({
        blurbs: t,
        freeSignup: s,
        freeSignupEmail: o,
        hide_intro_popup: i,
        isPodcast: n,
        newPosts: a,
        notify_user: r,
        pinnedPosts: l,
        pageTheme: c,
        pub: d,
        referralCode: h,
        search: w,
        section: g,
        sort: b,
        showWelcome: u,
        user: p,
        utm: m,
        launchWelcomePage: _,
        skipIntoPopupRender: I
    }) => {
        var D;
        const {
            isMobile: S,
            isTablet: P
        } = x(), [B, A] = V((D = [...l != null ? l : [], ...a != null ? a : []][0]) != null ? D : null), E = ft(({
            post: $
        }) => {
            B || A($)
        }, [B]);
        if (ie(() => {
                r && typeof window != "undefined" && we(r)
            }, [r]), !g && !n) return console.warn("Should be either a section or podcast or both"), null;
        let T = null;
        (n || g != null && g.is_podcast) && (T = g ? Ys({
            pub: d,
            section: g
        }) : Js({
            pub: d
        }));
        const F = at({
                pub: d,
                includeTheRampart: !0
            }) && T,
            O = e(es, {
                blurbs: t,
                freeSignup: s,
                freeSignupEmail: o,
                hide_intro_popup: i,
                isPodcast: n,
                pub: d,
                referralCode: h,
                showWelcome: u,
                user: p,
                launchWelcomePage: _
            });
        if (F && T && g) return e(Qr, {
            newPosts: a,
            pinnedPosts: l,
            podcastSettings: T,
            pub: d,
            section: g,
            search: w,
            sort: b,
            user: p,
            utm: m,
            welcomeAndShareElement: I ? null : O
        });
        let M = c;
        M || ((g != null && g.is_podcast || n) && B ? M = {
            hero_alignment: "left",
            page_hero: "feature-media",
            page_posts: "grid",
            show_podcast_links: !1
        } : M = {
            hero_alignment: "left",
            page_hero: "default",
            page_posts: "list",
            show_podcast_links: !1
        }), M.page_hero = nl(M.page_hero);
        let R = 2,
            k = 2;
        return M.page_posts === "list" ? k = 2 : M.page_posts === "grid" && (k = 3), M.page_hero === "feature-media" && B ? (M.page_posts === "grid" && (R = P ? 3 : 4, k = P ? 3 : 4), M.page_posts === "list" && (R = 3, k = 2)) : R = k, e(We, null, e(Jo, {
            columns: 4,
            paddingTop: M.page_hero === "podcast" || M.page_hero === "feature-media" ? 0 : void 0
        }, e(Ot, {
            pub: d,
            section: g,
            isPodcast: n
        }), e(el, {
            columns: R,
            firstPost: B,
            heroAlignment: M.hero_alignment,
            podcastSettings: T,
            pub: d,
            section: g,
            showPodcastLinks: M.show_podcast_links,
            user: p,
            utm: m,
            variant: M.page_hero
        }), e(f, {
            paddingTop: S ? 24 : 40,
            paddingBottom: 40
        }, e(tl, {
            columns: k,
            isPodcast: !!n,
            newPosts: a,
            pinnedPosts: l,
            pub: d,
            search: w,
            section: g,
            sort: b,
            user: p,
            utm: m,
            variant: M.page_posts,
            onChangeFirstPost: E
        })), !I && O))
    },
    nl = t => t ? t === "podcast-with-post" ? "podcast" : t : "default",
    il = "_label_1wgvq_1",
    al = {
        label: il
    },
    Fc = ({
        className: t,
        children: s,
        detail: o,
        label: i,
        alignment: n = "vertical",
        error: a = !1
    }) => e(n === "vertical" ? rl : ll, {
        className: t,
        detail: o,
        error: a,
        label: i
    }, Qs.map(s, l => Zs(l) ? en(l, {
        error: a
    }) : l)),
    rl = ({
        children: t,
        className: s,
        detail: o,
        error: i,
        label: n
    }) => e(f, {
        className: s,
        gap: 8,
        justifyContent: "start"
    }, e("label", null, e(C.B4, {
        weight: "semibold",
        as: "div",
        color: i ? "error" : "primary",
        paddingBottom: 8
    }, n), t), o && e(ws, {
        detail: o,
        error: i
    })),
    ll = ({
        children: t,
        className: s,
        detail: o,
        error: i,
        label: n
    }) => e(y, {
        className: s,
        justifyContent: "space-between",
        alignItems: "center"
    }, e(f, {
        gap: 4
    }, n && e(cl, {
        label: n,
        error: i
    }), o && e(ws, {
        detail: o,
        error: i
    })), t),
    cl = ({
        label: t,
        error: s
    }) => e(C.B4, {
        weight: "semibold",
        className: al.label,
        color: s ? "error" : "primary"
    }, t),
    ws = ({
        detail: t,
        error: s
    }) => e(C.B4, {
        color: s ? "error" : "secondary"
    }, t),
    wo = {
        "player-wrapper-outer": "_player-wrapper-outer_1t2db_1",
        "player-wrapper-inner": "_player-wrapper-inner_1t2db_7"
    },
    dl = ({
        audioPlayerRef: t,
        hasPaywall: s,
        feedUrl: o,
        isPrivateFeed: i,
        isServingFreePodcastUrl: n,
        post: a,
        pub: r,
        section: l,
        user: c,
        onChange: d,
        onCommentsClick: h
    }) => e("div", {
        className: wo["player-wrapper-outer"]
    }, e("div", {
        className: wo["player-wrapper-inner"]
    }, e(Dn, {
        audioPlayerRef: t,
        feedUrl: o,
        hasPaywall: s,
        isPrivateFeed: i,
        isServingFreePodcastUrl: n,
        post: a,
        pub: r,
        section: l,
        user: c,
        ufiComponent: e(lt, {
            isStatic: !1,
            labelStyle: "counts-or-none",
            position: "shows-episode-player",
            post: a,
            pub: r,
            style: "large-on-dark",
            user: c,
            onChange: d,
            onCommentsClick: h
        })
    }))),
    ul = "_button_dbeyy_1",
    yo = {
        button: ul
    },
    ml = ({
        feedUrl: t,
        post: s,
        pub: o,
        section: i,
        showLinks: n,
        user: a
    }) => {
        const {
            title: r
        } = Dt({
            pub: o,
            section: i
        }), [l, c] = wi();
        return e(G, null, e(y, {
            gap: 8
        }, e(pt, {
            className: yo.button,
            fill: "outline",
            priority: "secondary-theme",
            onClick: () => Do({
                feedUrl: t,
                pub: o,
                post: s
            })
        }, e(y, {
            gap: 12,
            alignItems: "center"
        }, e(Me, {
            platformKey: "substack"
        }), "Open in app")), e(pt, {
            className: yo.button,
            fill: "outline",
            priority: "secondary-theme",
            onClick: () => {
                c()
            }
        }, "More options")), e(fi, {
            ref: l,
            noTail: !0,
            noList: !0,
            noPlace: !0,
            useDrawerOnMobile: !0
        }, e(f, {
            gap: 24,
            paddingBottom: 24
        }, e(f, {
            borderBottom: "detail-themed",
            paddingX: 8,
            paddingBottom: a != null && a.is_free_subscribed ? 8 : 16
        }, e(C.H3, {
            paddingY: 16
        }, "Open in other app"), !(a != null && a.is_free_subscribed) && e(C.B3, null, "Never miss a new episode,", " ", e("a", {
            href: yt(o, {
                addBase: !0,
                params: {
                    next: document.location.href,
                    utm_medium: tn.web,
                    utm_source: ne.showsListenOnMobileDropdown,
                    utm_content: s.id
                }
            }),
            native: !0
        }, "subscribe to ", r))), e(f, {
            gap: 24,
            paddingX: 8
        }, n && Uo({
            feedUrl: t,
            isApple: on(),
            isMobile: !0,
            showLinks: n,
            user: a,
            render: ({
                key: d,
                label: h,
                url: w,
                onClick: g
            }) => e(pl, {
                platformKey: d,
                label: h,
                url: w,
                onClick: g
            })
        }), (a == null ? void 0 : a.is_subscribed) && e(C.B3, null, "Listen to paid episodes on your favorite podcast app with your private RSS feed.", " ", e("a", {
            href: Un
        }, "Learn about RSS")), e(pt, {
            fill: "outline",
            priority: "secondary-theme",
            onClick: () => {
                we("RSS feed URL copied"), Lt(t)
            }
        }, "Copy RSS Feed")))))
    },
    pl = ({
        platformKey: t,
        label: s,
        url: o,
        onClick: i
    }) => e("a", {
        href: o,
        style: {
            textDecoration: "none"
        }
    }, e(y, {
        alignItems: "center",
        gap: 12,
        onClick: i
    }, e(Me, {
        platformKey: t,
        size: 40
    }), e(C.B3, {
        weight: "bold"
    }, s))),
    hl = ({
        feedUrl: t,
        post: s,
        pub: o,
        magicToken: i,
        section: n,
        showLinks: a,
        user: r,
        onChange: l,
        onCommentsClick: c
    }) => {
        const {
            isMobile: d
        } = x();
        return e(f, {
            gap: 16
        }, d && e(ml, {
            feedUrl: t,
            post: s,
            pub: o,
            section: n,
            showLinks: a,
            user: r
        }), e(f, {
            gap: 8
        }, e(C.H2, {
            color: "pub-primary-text",
            font: "pub-headings"
        }, s.title), s.subtitle && e(C.B2, {
            color: "pub-secondary-text",
            font: "pub-headings",
            weight: "regular"
        }, s.subtitle)), e(cn, {
            variant: "shows",
            post: s,
            pub: o
        }), !d && e(Mn, {
            hideBottomBorder: !0,
            post: s,
            pub: o,
            user: r,
            onChange: l,
            postReactionToken: i,
            onCommentsClick: c
        }))
    },
    gl = ({
        bylines: t,
        isStandaloneVideo: s
    }) => {
        const {
            iString: o
        } = z();
        return e(f, {
            gap: 16
        }, e(re, null, o(s ? "Authors" : "Appears in episode")), e(dn, {
            bylines: t,
            variant: "shows"
        }))
    },
    _l = "_container_10lh9_1",
    fl = "_description_10lh9_13",
    _t = {
        container: _l,
        "subscribe-container": "_subscribe-container_10lh9_5",
        description: fl
    },
    wl = ({
        post: t,
        pub: s,
        section: o,
        user: i,
        isStandaloneVideo: n
    }) => {
        const {
            title: a,
            description: r,
            url: l
        } = Dt({
            pub: s,
            section: o,
            useSection: n
        });
        return e(f, {
            border: "detail-themed",
            className: _t.container,
            gap: 24,
            paddingX: 16,
            paddingY: 24,
            radius: "md",
            shadow: "lg",
            onClick: () => {
                window.location.href = l
            }
        }, e(f, {
            gap: 8,
            alignItems: "center"
        }, e(bt, {
            post: t,
            pub: s,
            section: o,
            useSection: n
        }), a && e(re, {
            align: "center"
        }, a), at({
            pub: s,
            includeTheRampart: !0
        }) && e(y, {
            alignItems: "center",
            gap: 8
        }, xo({
            sectionId: o == null ? void 0 : o.id
        }).map(c => e(_s, {
            medium: c
        }))), r && e(f, {
            gap: 8
        }, r.split(`
`).map(c => e(C.B4, {
            className: _t.description,
            color: "pub-secondary-text",
            align: "center"
        }, c)), e("span", {
            hidden: !0,
            "data-testid": "podcast-description"
        }, r))), !(i != null && i.is_subscribed) && e("div", {
            className: _t["subscribe-container"],
            onClick: c => {
                c.stopPropagation()
            }
        }, e(Eo, {
            expectTruncation: !0,
            pub: s,
            source: "episode-page-sidebar",
            user: i
        })))
    },
    yl = ({
        isStandaloneVideo: t,
        pub: s,
        recentEpisodes: o,
        user: i
    }) => {
        const {
            iString: n
        } = z();
        return e(f, {
            gap: 8
        }, e(re, null, n(t ? "Recent Posts" : "Recent Episodes")), e(f, {
            gap: 12,
            style: {
                margin: "0 -8px"
            }
        }, o.map(a => e(Se, {
            post: a,
            pub: s,
            user: i,
            variant: "mini-episode",
            onChange: null
        }))))
    },
    bl = ({
        feedUrl: t,
        isStandaloneVideo: s,
        post: o,
        pub: i,
        recentEpisodes: n,
        section: a,
        showLinks: r,
        user: l
    }) => {
        var b;
        const {
            isMobile: c
        } = x(), [d, h] = V(n), w = Ht(() => {
            var u;
            return (u = d == null ? void 0 : d.filter(p => p.id !== o.id)) != null ? u : null
        }, [d, o.id]), g = sn(o).sort((u, p) => u.id === i.author_id ? -1 : p.id === i.author_id ? 1 : u.is_guest && !p.is_guest ? -1 : !u.is_guest && p.is_guest ? 1 : (u.name || "").localeCompare(p.name || ""));
        return ie(() => {
            n || (() => ue(void 0, null, function*() {
                var m, _;
                const p = yield pe.get("/api/v1/recent_posts").query(v({
                    rss_episodes_only: !((m = o.podcastFields) != null && m.hide_from_feed)
                }, a != null && a.id ? {
                    section_id: a.id
                } : {}));
                h((_ = p.body) != null ? _ : [])
            }))()
        }, [o.id, (b = o.podcastFields) == null ? void 0 : b.hide_from_feed, n, i.id, a == null ? void 0 : a.id]), e(f, {
            gap: 32
        }, !c && e(wl, {
            post: o,
            pub: i,
            section: a,
            user: l,
            isStandaloneVideo: s
        }), e(f, {
            gap: 32
        }, !c && !s && e(fs, {
            feedUrl: t,
            showLinks: r,
            post: o,
            pub: i,
            section: a,
            user: l
        }), !c && i.bylines_enabled && g.length > 0 && e(gl, {
            bylines: g,
            isStandaloneVideo: s
        }), w && w.length > 0 && e(yl, {
            isStandaloneVideo: s,
            pub: i,
            recentEpisodes: w,
            user: l
        })))
    },
    vl = "_container_qa495_1",
    Cl = "_header_qa495_10",
    Sl = "_icon_qa495_14",
    kl = "_transcriptionWords_qa495_35",
    se = {
        container: vl,
        "container--collapsed": "_container--collapsed_qa495_6",
        header: Cl,
        icon: Sl,
        "icon--expanded": "_icon--expanded_qa495_18",
        "transcription-container": "_transcription-container_qa495_22",
        "transcription-chunk": "_transcription-chunk_qa495_30",
        transcriptionWords: kl,
        "transcription-chunk--active": "_transcription-chunk--active_qa495_39",
        "transcription-timestamp": "_transcription-timestamp_qa495_44",
        "transcription-text": "_transcription-text_qa495_52"
    },
    Pl = ({
        post: t,
        playerRef: s,
        transcription: o
    }) => {
        const [i, n] = V(!1), [a, r] = V(0), l = ye(null);
        ie(() => {
            if (!(!l.current || !i) && l.current) {
                const d = l.current.clientHeight,
                    h = l.current.querySelector(`#transcription-${a}`);
                h && l.current.scrollTo({
                    top: h.offsetTop - .5 * (d - h.clientHeight),
                    behavior: "smooth"
                })
            }
        }, [a, i]);
        const c = () => {
            const d = !i;
            n(d), Q(Z.TRANSCRIPTION_TOGGLED, {
                state: d ? "expanded" : "collapsed",
                post_id: t.id
            })
        };
        return e(f, {
            radius: "sm",
            className: L(se.container, {
                [se["container--collapsed"]]: !i
            })
        }, e(y, {
            className: se.header,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
            onClick: c
        }, e(y, {
            alignItems: "center",
            gap: 8
        }, e(yi, {
            size: 16
        }), e(C.B4, {
            color: "pub-primary-text",
            weight: "bold",
            translated: !0
        }, "Transcript")), e(y, {
            color: "pub-secondary-text",
            justifyContent: "center",
            alignItems: "center",
            className: L(se.icon, {
                [se["icon--expanded"]]: i
            })
        }, e(Qo, {
            size: 16
        }))), e(Fo, {
            expanded: i,
            renderWhenCollapsed: !0
        }, e("div", {
            className: se["transcription-container"],
            ref: l
        }, e(un, {
            player: s,
            postId: t.id,
            renderTranscriptionChunk: d => e(Nl, N(v({}, d), {
                activeRowIndex: a,
                postId: t.id
            })),
            transcription: o,
            onUpdateActiveRowIndex: r
        }))))
    },
    Nl = ({
        activeRowIndex: t,
        isPlaying: s,
        row: o,
        rowIndex: i,
        words: n,
        onPause: a,
        onPlay: r,
        speakerName: l,
        showSpeaker: c,
        postId: d
    }) => e(mn, {
        onPlay: r,
        onPause: a,
        postId: d,
        isActiveRow: t == i,
        isPlaying: s,
        row: o,
        rowIndex: i,
        className: se["transcription-chunk"],
        activeClassName: se["transcription-chunk--active"]
    }, l && c ? e(f, {
        gap: 4
    }, e(y, {
        alignItems: "baseline",
        gap: 12
    }, e(C.B4, {
        className: se["transcription-timestamp"],
        color: "pub-secondary-text"
    }), e(C.Meta, {
        padding: 4,
        color: "pub-accent",
        weight: "semibold"
    }, l)), e(y, {
        alignItems: "baseline",
        gap: 12
    }, e(C.B4, {
        className: se["transcription-timestamp"],
        color: "pub-secondary-text"
    }, no(o.start)), e(J, {
        display: "inline",
        className: se.transcriptionWords,
        lineHeight: 20,
        padding: 4,
        radius: "sm",
        "data-chunk-index": i
    }, n != null && n.length ? n.map(h => h.word).join(" ") : o.text))) : e(y, {
        alignItems: "baseline",
        gap: 12
    }, e(C.B4, {
        className: se["transcription-timestamp"],
        color: "pub-secondary-text"
    }, no(o.start)), e(J, {
        display: "inline",
        className: se.transcriptionWords,
        lineHeight: 20,
        padding: 4,
        radius: "sm",
        "data-chunk-index": i
    }, n != null && n.length ? n.map(h => h.word).join(" ") : o.text))),
    Il = "_container_gww5t_1",
    Tl = "_sidebar_gww5t_32",
    Bl = "_videoContainer_gww5t_71",
    xl = "_overflow_gww5t_81",
    Ml = "_postPreview_gww5t_85",
    X = {
        container: Il,
        "video-wrapper": "_video-wrapper_gww5t_8",
        "video-full-screen": "_video-full-screen_gww5t_20",
        "preview-label-container": "_preview-label-container_gww5t_26",
        sidebar: Tl,
        "sidebar--hidden": "_sidebar--hidden_gww5t_56",
        "sidebar-icons": "_sidebar-icons_gww5t_60",
        videoContainer: Bl,
        overflow: xl,
        postPreview: Ml
    };
class ys extends Ln {
    constructor() {
        super(...arguments), this.playbackEnabled = () => this.props.showPreview
    }
}
const Ll = w => {
        var g = w,
            {
                hasPaywall: t,
                mediaUpload: s,
                post: o,
                pub: i,
                user: n,
                videoPlayerRef: a,
                onChange: r,
                onClipClick: l,
                onCommentsClick: c,
                isPostPreview: d
            } = g,
            h = K(g, ["hasPaywall", "mediaUpload", "post", "pub", "user", "videoPlayerRef", "onChange", "onClipClick", "onCommentsClick", "isPostPreview"]);
        var M, R, k, D, $, Y, H;
        const {
            iString: b
        } = z(), [u, p] = V(!1), {
            isMobile: m
        } = x(), _ = ye(null), I = qo(a), {
            isIdle: S
        } = Go({
            idleAfter: 2e3,
            element: _.current
        }), P = ((M = s.preview_duration) != null ? M : 0) > 0, B = t && (!P || u), [A, E] = V(!1), T = !!Bt("enable_substack_player") && !m, F = Gn(), O = ui(_);
        return e("div", {
            className: L(X["video-wrapper"], {
                [X["video-full-screen"]]: F.active
            })
        }, e(Vn, {
            handle: F,
            className: X.fullScreenContainer
        }, e("div", {
            class: L(X.videoContainer, {
                [X.overflow]: h.clippingMode
            })
        }, e(ys, N(v({
            ref: a,
            doNotResetOnEnd: !0,
            hidePlayButton: B,
            mediaUpload: s,
            podcastUpload: o.podcastUpload,
            showPreview: t ? P : !0,
            noControls: B && !t || T,
            post: o,
            pub: i,
            renderPlayButton: () => e(Yo, {
                isPlaying: !1,
                size: m ? 56 : 72
            }),
            usePreview: t && P,
            onFinishVideo: () => {
                p(!0)
            },
            clippingModeRef: _
        }, h), {
            videoType: "post"
        })), e(Wn, {
            videoRef: a,
            videoContainerRef: _,
            pub: i,
            post: o,
            mediaUpload: s,
            podcastUpload: (k = (R = o.videoUpload) == null ? void 0 : R.extractedAudio) != null ? k : o.podcastUpload,
            isActive: (D = A || !S || h.clippingMode) != null ? D : !1,
            isFocused: O,
            clippingMode: h.clippingMode,
            handle: F,
            hasPaywall: t,
            hideNextVideoButton: d,
            onShareMenuOpen: () => E(!0),
            onShareMenuClose: () => E(!1)
        }))), P && t && !B && e("div", {
            className: X["preview-label-container"]
        }, e(Vo, null, b("Preview"))), !m && !B && !d && e("div", {
            className: L(X.sidebar, {
                [X["sidebar--hidden"]]: I && S
            })
        }, e(me, {
            className: L(X["sidebar-icons"]),
            bg: "glass-inverted-thick",
            paddingX: 8,
            paddingY: 16
        }, e(lt, {
            isStatic: !1,
            labelStyle: "counts-or-none",
            position: "shows-episode-player",
            post: o,
            pub: i,
            style: "large-on-dark",
            user: n,
            showClipping: o.type === "podcast",
            onChange: r,
            onClipClick: l,
            onCommentsClick: c,
            initialShareTimestamp: (H = (Y = ($ = a.current) == null ? void 0 : $.player) == null ? void 0 : Y.currentTime) != null ? H : 0
        }))))
    },
    El = t => {
        var T, F, O, M, R;
        const E = t,
            {
                hasPaywall: s,
                mediaUpload: o,
                post: i,
                pub: n,
                user: a,
                videoPlayerRef: r,
                onChange: l,
                onClipClick: c,
                onCommentsClick: d,
                isPostPreview: h
            } = E,
            w = K(E, ["hasPaywall", "mediaUpload", "post", "pub", "user", "videoPlayerRef", "onChange", "onClipClick", "onCommentsClick", "isPostPreview"]),
            {
                iString: g
            } = z(),
            [b, u] = V(!1),
            {
                isMobile: p
            } = x(),
            m = ye(null),
            _ = qo(r),
            {
                isIdle: I
            } = Go({
                idleAfter: 2e3,
                element: m.current
            }),
            S = ((T = o.preview_duration) != null ? T : 0) > 0,
            P = s && (!S || b),
            B = !!Bt("enable_substack_player") && !p;
        ie(() => {
            var D;
            const k = (D = r.current) == null ? void 0 : D.player;
            if (k && B) {
                const $ = () => {
                    k.paused ? k.play() : k.pause()
                };
                return k.addEventListener("click", $), () => {
                    k.removeEventListener("click", $)
                }
            }
        }, [(F = r.current) == null ? void 0 : F.player]);
        const A = () => {
            var k;
            (k = r.current) != null && k.player && (u(!1), r.current.player.currentTime = 0, r.current.player.play())
        };
        return e("div", {
            className: L(X.container, {
                [X.postPreview]: h
            }),
            ref: m
        }, B ? e(Ll, N(v({}, t), {
            onFinishVideo: () => {
                u(!0)
            }
        })) : e("div", {
            className: L(X["video-wrapper"])
        }, e(ys, v({
            ref: r,
            doNotResetOnEnd: !0,
            hidePlayButton: P,
            mediaUpload: o,
            podcastUpload: i.podcastUpload,
            showPreview: s ? S : !0,
            noControls: P && !s || B,
            post: i,
            pub: n,
            renderPlayButton: () => e(Yo, {
                isPlaying: !1,
                size: p ? 56 : 72
            }),
            usePreview: s && S,
            onFinishVideo: () => {
                u(!0)
            }
        }, w)), S && s && !P && e("div", {
            className: X["preview-label-container"]
        }, e(Vo, null, g("Preview"))), !p && !P && !h && e("div", {
            className: L(X.sidebar, {
                [X["sidebar--hidden"]]: _ && I
            })
        }, e(me, {
            className: L(X["sidebar-icons"]),
            bg: "glass-inverted-thick",
            paddingX: 8,
            paddingY: 16
        }, e(lt, {
            isStatic: !1,
            labelStyle: "counts-or-none",
            position: "shows-episode-player",
            post: i,
            pub: n,
            style: "large-on-dark",
            user: a,
            showClipping: i.type === "podcast",
            onChange: l,
            onClipClick: c,
            onCommentsClick: d,
            initialShareTimestamp: (R = (M = (O = r.current) == null ? void 0 : O.player) == null ? void 0 : M.currentTime) != null ? R : 0
        })))), P && e(qn, {
            isFreeSubscribed: !!(a != null && a.is_free_subscribed),
            post: i,
            pub: n,
            variant: "video",
            onRestart: S ? A : void 0,
            isPostPreview: h
        }))
    },
    Rl = "_postContentWrapper_kdyow_23",
    Al = "_sidebar_kdyow_27",
    et = {
        "main-content-and-sidebar": "_main-content-and-sidebar_kdyow_1",
        "main-content": "_main-content_kdyow_1",
        postContentWrapper: Rl,
        sidebar: Al
    },
    Hl = Ge((t, s) => {
        var $, Y;
        const {
            getConfigFor: o
        } = it(), {
            isMobile: i
        } = x(), [n, a] = V(!1), [r, l] = V(null), [c, d] = V(null), h = ye(null), w = ye(null), {
            isClipping: g = !1
        } = ($ = Ce(En)) != null ? $ : {};
        ie(() => {
            a(g)
        }, [g]);
        const {
            isServingFreePodcastUrl: b,
            paywall: u,
            post: p,
            pub: m,
            reaction_token: _,
            recentEpisodes: I,
            showComments: S,
            user: P,
            onChange: B
        } = t, A = p.section_id && (Y = m.sections.find(H => H.id === p.section_id)) != null ? Y : null, {
            feedUrl: E,
            isPrivateFeed: T
        } = Ut({
            pub: m,
            magicToken: _,
            user: P,
            section: A
        }), F = nn(p), O = $t({
            pub: m,
            section: A,
            spotifySettings: Mt({
                pub: m,
                section: A
            })
        }), M = Bo({
            post: p,
            section: A,
            pub: m
        }), R = r ? r.length > 0 : !1, k = H => {
            H.preventDefault(), Q(Z.COMMENTS_CLICKED, {
                post_id: p.id
            });
            const W = document.getElementById(jn);
            W && W.scrollIntoView({
                behavior: "smooth"
            })
        };
        ie(() => {
            (() => ue(void 0, null, function*() {
                const [W, le] = yield Promise.all([pe.get(`/api/v1/post/${p.id}/reactors`), pe.get(`/api/v1/post/${p.id}/restackers`)]);
                l(W.body), d(le.body)
            }))()
        }, [p.id]);
        let D = !1;
        return typeof window != "undefined" && (D = new URLSearchParams(window.location.search).has("postPreview")), e(Lo, N(v({}, t), {
            ref: s,
            isShowsPost: !0,
            renderContent: ({
                comments: H,
                postContent: W
            }) => e("div", null, e(pn, {
                visible: n,
                style: {
                    zIndex: 1
                }
            }), p.videoUpload ? e(El, {
                autoPlay: !0,
                hasPaywall: u,
                mediaUpload: p.videoUpload,
                post: p,
                pub: m,
                reaction_token: _,
                restorePlaybackLocation: !D,
                duration: p.videoUpload.duration,
                user: P,
                videoPlayerRef: h,
                onChange: B,
                clippingMode: n,
                onClipClick: () => a(!0),
                onClippingModeCancel: () => a(!1),
                onCommentsClick: k,
                isPostPreview: D
            }) : e(dl, {
                audioPlayerRef: w,
                feedUrl: E,
                hasPaywall: u,
                isPrivateFeed: T,
                isServingFreePodcastUrl: b,
                post: p,
                pub: m,
                section: A,
                user: P,
                onChange: B,
                onCommentsClick: k
            }), e("div", {
                className: et["main-content-and-sidebar"]
            }, e("div", {
                className: et["main-content"]
            }, e(f, {
                gap: 32
            }, e(f, {
                gap: 16
            }, e(hl, {
                feedUrl: E,
                magicToken: _,
                post: p,
                pub: m,
                section: A,
                showLinks: O,
                user: P,
                onChange: B,
                onCommentsClick: k
            }), (F == null ? void 0 : F.approved_at) && !u && e(Pl, {
                playerRef: p.videoUpload ? h : w,
                post: p,
                transcription: F
            })), e("div", {
                className: et.postContentWrapper
            }, W, o("like_posts_enabled") && m.community_enabled && R && !u && e(me, {
                borderTop: "detail-themed",
                paddingY: 16
            }, e(hn, {
                post: p,
                pub: m,
                user: P,
                reactors: r,
                secondaryFaces: c
            })), !u && S && H))), e(f, {
                className: et.sidebar,
                borderLeft: "detail-themed",
                paddingX: 32,
                paddingY: 24
            }, e(bl, {
                feedUrl: E,
                isStandaloneVideo: M,
                post: p,
                pub: m,
                recentEpisodes: I,
                section: A,
                showLinks: O,
                user: P
            }))), i && e(Rn, {
                allowEdit: P == null ? void 0 : P.is_contributor,
                hideComments: !S,
                post: p,
                postReactionToken: _,
                pub: m,
                user: P,
                onCommentsClick: k,
                onChange: B
            }))
        }))
    }),
    zc = t => e(An, null, e(Hl, v({}, t))),
    Fl = t => e(zt, N(v({}, t), {
        name: "LucideExternalLink",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#000000",
            strokeWidth: 0
        }
    }), e(Hn, {
        height: 24,
        stroke: t.stroke,
        fill: t.fill,
        strokeWidth: t.strokeWidth
    })),
    zl = t => e(zt, N(v({}, t), {
        name: "ShareFacebookBoxedIcon",
        svgParams: {
            height: 17,
            width: 16,
            viewBox: "10 0 10 26"
        }
    }), e("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
    })),
    Ol = "_toast_5vkm4_1",
    $l = "_cta_5vkm4_11",
    Dl = "_modal_5vkm4_20",
    Pt = {
        toast: Ol,
        cta: $l,
        modal: Dl
    },
    bs = "https://twitter.com",
    vs = () => {
        const t = vi();
        return (s, o = null) => t.popToast(i => e(Ci, N(v({}, i), {
            className: Pt.toast,
            text: s,
            cta: o
        })))
    },
    Oc = ({
        post: t,
        publication: s,
        autoSharedOnTwitter: o,
        showAfter: i,
        publicationTwitterScreenName: n,
        authorVersion: a
    }) => {
        const r = ye(null),
            [l, c] = V(!0),
            d = vs();
        ie(() => {
            o && d("Post shared to Twitter", n ? e("a", {
                className: Pt.cta,
                href: `${bs}/${n}`,
                target: "_blank",
                rel: "noopener"
            }, "View") : null)
        }, []);
        const h = () => {
            c(!1)
        };
        return !l && i ? i : e(Si, {
            testID: "share-modal",
            openByDefault: !0,
            className: L("force-light-theme", Pt.modal),
            ref: r,
            variant: "structured",
            modalTitle: `Share your ${a?"substack:":"post:"}`,
            modalFooter: e(St, {
                variant: a ? "primary" : "secondary",
                look: "button",
                onClick: w => {
                    w.preventDefault(), r.current.close()
                }
            }, a ? "View Dashboard" : "View post"),
            onBeforeClose: h
        }, e("div", {
            className: "author-post-share-container author-post-share-container--fullscreen author-post-share-container--publish"
        }, e("div", {
            className: "author-post-share__check-container"
        }, e(bi, {
            size: 20,
            strokeWidth: 2
        })), e("h5", null, a ? "Share your Substack with your friends, fans, and communities" : "Your post has been published! It’s time to get the word out"), !a && e("div", {
            className: "tw-mb-8"
        }, e(ql, {
            modalRef: r
        })), e(Ul, {
            post: t,
            publication: s,
            hideEmailOption: !a,
            trackingParams: {
                sd: "pf"
            },
            autoSharedOnTwitter: o,
            authorVersion: a
        })))
    },
    Ul = ({
        post: t,
        publication: s,
        hideEmailOption: o = !1,
        trackingParams: i,
        autoSharedOnTwitter: n,
        authorVersion: a
    }) => {
        const r = a ? Et(s) : t.canonical_url,
            l = d => {
                Q(Z.SHARE_LINK_CLICKED, {
                    name: d,
                    post_id: t == null ? void 0 : t.id,
                    source: "fullscreen-author-share-dialog"
                })
            },
            c = vs();
        return e(G, null, e(De, {
            onClick: () => {
                l("facebook"), window.open(`https://www.facebook.com/sharer/sharer.php?${tt({u:fe(r,v({utm_source:ne.facebook},i))})}`)
            },
            className: "share facebook"
        }, e("button", {
            className: "button tw-w-full"
        }, e(zl, {
            height: 16,
            fill: "#256fe2",
            stroke: "white",
            strokeWidth: 1
        }), "Share on Facebook")), !n && e(De, {
            onClick: () => {
                l("twitter"), window.open(`${bs}/share?${tt({url:fe(r,v({utm_source:ne.twitter},i))})}`)
            },
            className: "share twitter"
        }, e("button", {
            className: "button tw-w-full"
        }, e(fn, {
            height: 16,
            fill: "#1DA1F2",
            stroke: "#1DA1F2",
            strokeWidth: 0
        }), "Share on Twitter")), e(De, {
            onClick: () => {
                Lt(fe(r, i)), l("copy"), c("Link copied to clipboard")
            },
            className: "share copy"
        }, e("button", {
            className: "button short-button tw-w-full"
        }, e(wn, {
            height: 16,
            strokeWidth: 0,
            fill: "black"
        }), "Copy Link")), !o && e(De, {
            onClick: () => {
                l("email"), window.open(`mailto:?${tt({subject:a?`Check out ${s.name}`:t.title,body:fe(r,v({utm_source:ne.email},i))})}`)
            },
            className: "share email"
        }, e("button", {
            className: "button short-button tw-mb-8 tw-w-full"
        }, e(yn, {
            height: 16,
            strokeWidth: 0,
            fill: "black"
        }), "Share with email")), !a && e(De, {
            onClick: () => {
                l("media-assets"), window.open(`${an(s,t)}/media-assets`)
            },
            className: "share press-kit"
        }, e("button", {
            className: "button tw-w-full"
        }, e(Fl, {
            stroke: "#404040",
            fill: "white"
        }), "View shareable images")))
    },
    De = t => e("a", N(v({}, t), {
        native: !0
    })),
    ql = ({
        modalRef: t
    }) => {
        var a, r, l;
        let s = "";
        typeof window != "undefined" && (s = window.location.host);
        const o = (a = document.head.querySelector('meta[property="og:image"]')) == null ? void 0 : a.content,
            i = (r = document.head.querySelector('meta[property="og:title"]')) == null ? void 0 : r.content,
            n = (l = document.head.querySelector('meta[property="og:description"]')) == null ? void 0 : l.content;
        return e("div", {
            onClick: () => {
                t.current.close()
            },
            className: "overflow-hidden tw-cursor-pointer tw-rounded-xl tw-border tw-border-solid tw-border-substack-detail"
        }, o && e("div", {
            className: "tw-border-0 tw-border-b tw-border-solid tw-border-substack-detail"
        }, e("img", {
            src: o,
            className: "social-media-share-preview__image"
        })), e("div", {
            className: "tw-p-3"
        }, e("div", {
            className: "tw-text-sm tw-font-bold tw-text-substack-secondary"
        }, s), e("div", {
            className: "tw-text-base tw-font-bold tw-text-substack-primary"
        }, i), e("div", {
            className: "social-media-share-preview__description tw-text-sm tw-font-medium tw-text-substack-secondary"
        }, n)))
    },
    $c = ({
        pub: t,
        pubsToRecommend: s
    }) => {
        const {
            iString: o,
            iTemplate: i,
            iPlural: n
        } = z(), [a, r] = V(!0), [l, c] = V(!0), [d, h] = V((s || []).reduce((m, _) => N(v({}, m), {
            [_.id]: !0
        }), {})), w = () => {
            r(!a), c(!1)
        }, g = m => {
            const _ = v({}, d);
            _[m] = !_[m], h(_)
        }, b = () => ue(void 0, null, function*() {
            try {
                const m = Object.keys(d).filter(_ => d[_] === !0).map(_ => Number(_));
                yield pe.put("/api/v1/recommendations/multiple").send({
                    recommending_publication_id: t.id,
                    recommended_publication_ids: m,
                    source: "post_publish_cta",
                    suggested: m.map(() => !0)
                }), m.length && we(n("Recommended %1 publication", "Recommended %1 publications", m.length), {
                    timeout: 1500
                }), w()
            } catch (m) {
                console.error("Failed to add recommendations: ", m), w()
            }
        });
        let u, p;
        return s != null && s.length && (u = (Object.values(d).filter(m => m === !0) || []).length, p = s.length > 1 ? n("Do you want to recommend %2 and %1 other publication", "Do you want to recommend %2 and %1 other publications", s.length - 1, s[0].name) : i `Do you want to recommend ${s[0].name}`), e(G, null, l ? e(ki, {
            isOpen: a,
            onClose: w
        }, e(Pi, {
            onClose: w,
            title: p
        }), e(Ni, null, e("div", {
            className: "recommend-linked-publication-modal-container"
        }, e("p", {
            className: "subtitle"
        }, s.length > 1 ? i `Since you embedded ${s.length} publications on your post, we thought you might want to recommend them to your readers` : i `Since you embedded ${s[0].name} on your post, we thought you might want to recommend them to your readers`), s && s.length && s.map((m, _) => e("div", {
            className: L("recommend-publication-container", {
                last: _ === s.length - 1
            }),
            onClick: () => g(m.id)
        }, e(Ve, {
            pub: m,
            size: 40,
            logo_url: m.logo_url,
            openInNewTab: !0
        }), e("div", {
            className: "publication-name-author"
        }, e("a", {
            className: "publication-name",
            href: Et(m),
            target: "_blank"
        }, m.name), e("p", {
            className: "author-name"
        }, Ae(m))), e(bn, {
            checked: d[m.id] ? d[m.id] : !1
        }))))), e(rn, {
            alignment: "center",
            primaryButton: e(St, {
                onClick: b,
                variant: "primary"
            }, u === 0 ? o("Continue") : n("Recommend %1 publication", "Recommend %1 publications", u)),
            secondaryButton: e(St, {
                onClick: w,
                variant: "secondary"
            }, o("Maybe later"))
        })) : null)
    };
export {
    Gt as A, Wt as C, Ac as H, Fc as I, Ii as L, q as P, $c as R, Hc as S, Oc as W, zc as a, qi as b, Ec as c, Le as d, Rc as e
};