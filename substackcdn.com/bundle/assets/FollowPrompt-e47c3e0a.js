var _e = Object.defineProperty,
    ye = Object.defineProperties;
var we = Object.getOwnPropertyDescriptors;
var re = Object.getOwnPropertySymbols;
var Fe = Object.prototype.hasOwnProperty,
    Re = Object.prototype.propertyIsEnumerable;
var Q = (t, o, e) => o in t ? _e(t, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : t[o] = e,
    _ = (t, o) => {
        for (var e in o || (o = {})) Fe.call(o, e) && Q(t, e, o[e]);
        if (re)
            for (var e of re(o)) Re.call(o, e) && Q(t, e, o[e]);
        return t
    },
    v = (t, o) => ye(t, we(o));
var D = (t, o, e) => (Q(t, typeof o != "symbol" ? o + "" : o, e), e);
var Y = (t, o, e) => new Promise((a, n) => {
    var r = c => {
            try {
                i(e.next(c))
            } catch (l) {
                n(l)
            }
        },
        d = c => {
            try {
                i(e.throw(c))
            } catch (l) {
                n(l)
            }
        },
        i = c => c.done ? a(c.value) : Promise.resolve(c.value).then(r, d);
    i((e = e.apply(t, o)).next())
});
import {
    y as s,
    b3 as U,
    h as M,
    by as ve,
    k as Ce,
    aV as Se,
    is as Ee,
    em as be,
    bC as Le,
    a6 as x,
    p as le,
    d as Ie,
    c8 as Me,
    t as L,
    E as I,
    x as xe,
    aD as A,
    u as Te,
    a3 as Oe,
    al as Ne,
    q as ke,
    X as De,
    cS as Ae,
    i as J,
    o as Pe,
    D as $e,
    a2 as Be,
    aj as He,
    a7 as We,
    U as ze
} from "./tracking-376cff7a.js";
import {
    S as Ve,
    c as Z,
    a as f,
    T as h,
    u as G,
    O as N,
    F as ee
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    C as Je,
    u as Ge,
    T as ie
} from "./HoverCard-cbdee1d2.js";
import {
    e as je
} from "./_baseIteratee-fbbabc87.js";
import {
    i as Xe,
    A as te
} from "./_defineProperty-105d261c.js";
import {
    t as Ke
} from "./toInteger-b5ddb910.js";
import {
    d as ce
} from "./debounce-f31b8252.js";
import {
    i as V
} from "./share_dialog-b74d3337.js";
import {
    M as Qe
} from "./Metadata-be2b4cf2.js";
import {
    c as Ye,
    g as qe
} from "./post_metadata-a1624a3e.js";
import {
    A as Ue
} from "./app_install_modal-64fe70fd.js";
import {
    I as Ze
} from "./experimentsAndSiteConfigContext-a6aeed82.js";
import {
    u as de
} from "./free_email_form.module-135823b4.js";
import {
    f as et
} from "./ProfileHoverCard-c8bfb61a.js";
import {
    a as tt,
    u as ot
} from "./user-e16f1619.js";
import {
    g as st,
    b as at
} from "./free_email_form-1d3fc4be.js";
import {
    T as nt
} from "./TextInput-c03c69d6.js";
import {
    a as rt,
    M as it
} from "./Modal-ab851ad1.js";
import {
    u as ue
} from "./useResponsive-08e338a7.js";
import {
    bF as ct
} from "./homepage_hooks-47e7a4e7.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            o = new Error().stack;
        o && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[o] = "5103814b-fa2d-47e8-a28a-9794c5ebd220", t._sentryDebugIdIdentifier = "sentry-dbid-5103814b-fa2d-47e8-a28a-9794c5ebd220")
    } catch (e) {}
})();
const mo = t => s(Ve, v(_({}, t), {
        name: "LucideCheck",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#000000",
            strokeWidth: 0
        }
    }), s(Je, {
        height: 24,
        stroke: t.stroke,
        fill: t.fill,
        strokeWidth: t.strokeWidth
    })),
    pe = typeof window != "undefined";

function lt(t, o, e = pe ? localStorage : void 0) {
    var d;
    const [a, n] = M(typeof e != "undefined" && (d = e.getItem(t)) != null ? d : o);
    return [a, i => {
        n(c => {
            const l = typeof i == "function" ? i(c) : i;
            return e && e.setItem(t, l), l
        })
    }]
}

function ho(t, o, e = pe ? localStorage : void 0) {
    const a = U(() => JSON.stringify(o), [o]),
        [n, r] = lt(t, a, e);
    return [U(() => {
        try {
            return JSON.parse(n)
        } catch (c) {
            return console.error("Failed to parse stored value:", c), o
        }
    }, [n, o]), c => r(JSON.stringify(c))]
}
var dt = Xe;

function ut(t) {
    return typeof t == "function" ? t : dt
}
var pt = ut,
    mt = je,
    ht = pt,
    ft = Ke,
    gt = 9007199254740991,
    q = 4294967295,
    _t = Math.min;

function yt(t, o) {
    if (t = ft(t), t < 1 || t > gt) return [];
    var e = q,
        a = _t(t, q);
    o = ht(o), t -= q;
    for (var n = mt(a, o); ++e < t;) o(e);
    return n
}
var wt = yt;
const fo = ve(wt);
class Ft extends Ce {
    constructor(e, a) {
        super(e, a);
        D(this, "open", () => {
            this.updateCoords(), this.createScrollListeners(), document.addEventListener("mouseup", this.onDocumentMouseUp), document.addEventListener("keydown", this.onDocumentKeyDown), this.props.onOpen && this.props.onOpen()
        });
        D(this, "close", () => {
            this.removeScrollListeners(), document.removeEventListener("mouseup", this.onDocumentMouseUp), document.removeEventListener("keydown", this.onDocumentKeyDown), this.props.onClose && this.props.onClose()
        });
        D(this, "onDocumentMouseUp", e => {
            var a;
            !Ee(e.target, this.portalRef.current, ((a = this.props.baseRef) == null ? void 0 : a.current) || this.props.baseRef) && this.state.open && (this.close(), this.setState({
                open: !1
            }))
        });
        D(this, "onDocumentKeyDown", e => {
            e.key === "Escape" && this.state.open && (this.close(), this.setState({
                open: !1
            }))
        });
        this.onResize = ce(this.updateCoords.bind(this)), this.scrollListenersToRemove = [], this.state = {
            coords: {},
            open: !1
        }, this.portalRef = Se()
    }
    toggle() {
        const e = !this.state.open;
        e ? (this.removeScrollListeners(), this.open()) : this.close(), this.setState({
            open: e
        })
    }
    updateCoords() {
        var a, n, r, d, i, c, l;
        const e = (d = (n = ((a = this.props.baseRef) == null ? void 0 : a.current) || this.props.baseRef) == null ? void 0 : n.getBoundingClientRect) == null ? void 0 : d.call(((r = this.props.baseRef) == null ? void 0 : r.current) || this.props.baseRef);
        if (e) {
            let u = 0,
                p = ((i = this.props.baseRef) == null ? void 0 : i.current) || this.props.baseRef;
            for (; p = p == null ? void 0 : p.parentElement;) u += p.scrollTop;
            this.setState({
                coords: {
                    left: e.x + (this.props.rightAlign ? e.width : 0) + (typeof window != "undefined" ? window.scrollX : 0) + (((c = this.props.offset) == null ? void 0 : c.x) || 0),
                    top: e.y + u + (((l = this.props.offset) == null ? void 0 : l.y) || 0),
                    width: e.width,
                    height: e.height
                }
            })
        }
    }
    componentDidMount() {
        typeof window != "undefined" && window.addEventListener("resize", this.onResize), this.updateCoords(), this.props.hoverToggle && this.createMouseListeners()
    }
    createMouseListeners() {
        var e, a, n, r;
        (a = ((e = this.props.baseRef) == null ? void 0 : e.current) || this.props.baseRef) == null || a.addEventListener("mouseenter", this.open), (r = ((n = this.props.baseRef) == null ? void 0 : n.current) || this.props.baseRef) == null || r.addEventListener("mouseleave", this.close)
    }
    removeMouseListeners() {
        var e, a, n, r;
        (a = ((e = this.props.baseRef) == null ? void 0 : e.current) || this.props.baseRef) == null || a.removeEventListener("mouseenter", this.open), (r = ((n = this.props.baseRef) == null ? void 0 : n.current) || this.props.baseRef) == null || r.removeEventListener("mouseleave", this.close)
    }
    componentDidUnmount() {
        typeof window != "undefined" && window.removeEventListener("resize", this.onResize), this.removeScrollListeners(), this.removeMouseListeners()
    }
    onScroll(e) {
        var u, p;
        const a = e == null ? void 0 : e.getBoundingClientRect(),
            n = (p = ((u = this.props.baseRef) == null ? void 0 : u.current) || this.props.baseRef) == null ? void 0 : p.getBoundingClientRect();
        if (!a || !n) return;
        const r = ({
                x: y,
                y: w
            }) => c <= y && y <= l && d <= w && w <= i,
            {
                top: d,
                bottom: i,
                left: c,
                right: l
            } = a;
        r({
            x: n.left,
            y: n.top
        }) || r({
            x: n.right,
            y: n.top
        }) || r({
            x: n.left,
            y: n.bottom
        }) || r({
            x: n.right,
            y: n.bottom
        }) ? (this.updateCoords(), this.props.hoverToggle ? this.createMouseListeners() : this.state.open && this.props.onOpen && this.props.onOpen()) : (this.removeMouseListeners(), this.props.onClose && this.props.onClose())
    }
    removeScrollListeners() {
        this.scrollListenersToRemove.forEach(e => e())
    }
    createScrollListeners() {
        this.scrollListenersToRemove = this.props.scrollContainers.map(e => {
            const a = (e == null ? void 0 : e.current) || e,
                n = ce(() => this.onScroll(a), 10);
            return a == null || a.addEventListener("scroll", n), () => a == null ? void 0 : a.removeEventListener("scroll", n)
        })
    }
    componentShouldUpdate(e, a) {
        return !V(this.props, e) || !V(this.state, a)
    }
    componentDidUpdate(e) {
        var a, n, r, d;
        !V(e.scrollContainers, this.props.scrollContainers) && this.scrollListenersToRemove.length > 0 && (this.removeScrollListeners(), this.createScrollListeners()), V(e.baseRef, this.props.baseRef) || ((n = ((a = e.baseRef) == null ? void 0 : a.current) || e.baseRef) == null || n.removeEventListener("mouseenter", this.open), (d = ((r = e.baseRef) == null ? void 0 : r.current) || e.baseRef) == null || d.removeEventListener("mouseleave", this.close), this.props.hoverToggle && this.createMouseListeners())
    }
    render({
        children: e,
        rootElement: a,
        className: n
    }, {
        coords: r
    }) {
        return typeof window == "undefined" ? null : be(s("div", {
            style: _({}, r),
            className: Z("tooltip-portal", n),
            ref: this.portalRef
        }, e), a || document.body)
    }
}
Ft.defaultProps = {
    scrollContainers: []
};

function go({
    comment: t,
    post: o,
    publication: e
}) {
    var p, y, w;
    let a = "Note on Substack";
    e && t.name ? a = `Comment by ${t.name} on ${e.name}` : t.name ? a = `Note by ${t.name} on Substack` : e && (a = `Comment on ${e.name}`);
    const n = o && e ? Ye(o, e, {
            isCommentPage: !0
        }).title : `${a}: "${Le(t.body,280)}"`,
        r = (p = t.attachments) == null ? void 0 : p.find(T => T.type === "image"),
        d = r == null ? void 0 : r.imageUrl,
        i = void 0,
        c = void 0,
        l = d != null ? d : o && e ? qe(e, o)[0] : null,
        u = t.body;
    return s(Qe, {
        title: n,
        socialTitle: a,
        description: u,
        image: l,
        imageHeight: i,
        imageWidth: c,
        isLargeImage: l ? !0 : void 0,
        siteName: e ? e.name : "Substack",
        publishedTime: t.date.toString(),
        meta: [{
            name: "twitter:label1",
            content: "Likes"
        }, {
            name: "twitter:data1",
            content: String((y = t.reaction_count) != null ? y : 0)
        }, {
            name: "twitter:label2",
            content: "Replies"
        }, {
            name: "twitter:data2",
            content: String((w = t.children_count) != null ? w : 0)
        }]
    })
}

function _o(t, o) {
    for (const e of t)
        if (o(e)) return e
}

function* yo(t, o, e = 1) {
    for (let a = t; a < o; a += e) yield a
}
const Rt = "_faceCloudContainer_78pxg_1",
    vt = "_primaryFaceContainer_78pxg_7",
    Ct = "_face_78pxg_1",
    St = "_primaryFace_78pxg_7",
    Et = "_primaryFaceAuthorContainer_78pxg_21",
    bt = "_primaryFaceAuthor_78pxg_21",
    Lt = "_secondaryFaces_78pxg_44",
    It = "_secondaryFace0_78pxg_49",
    Mt = "_secondaryFace1_78pxg_54",
    xt = "_secondaryFace2_78pxg_59",
    Tt = "_secondaryFace3_78pxg_64",
    Ot = "_secondaryFace4_78pxg_69",
    Nt = "_secondaryFace5_78pxg_74",
    kt = "_secondaryFace6_78pxg_79",
    Dt = "_secondaryFace7_78pxg_84",
    At = "_secondaryFace8_78pxg_89",
    S = {
        faceCloudContainer: Rt,
        primaryFaceContainer: vt,
        face: Ct,
        primaryFace: St,
        primaryFaceAuthorContainer: Et,
        primaryFaceAuthor: bt,
        secondaryFaces: Lt,
        secondaryFace0: It,
        secondaryFace1: Mt,
        secondaryFace2: xt,
        secondaryFace3: Tt,
        secondaryFace4: Ot,
        secondaryFace5: Nt,
        secondaryFace6: kt,
        secondaryFace7: Dt,
        secondaryFace8: At
    },
    Pt = ({
        pub: t,
        suggestions: o
    }) => {
        const e = [82, 68, 68, 55, 54, 36, 36, 36, 36];
        return s("div", {
            className: S.faceCloudContainer
        }, s("div", {
            className: S.primaryFaceContainer
        }, s(te, {
            className: Z(S.face, S.primaryFace),
            size: 100,
            showProfileHovercard: !0,
            user: {
                id: t.author_id,
                name: t.author_name,
                handle: t.author_handle,
                photo_url: t.author_photo_url
            }
        }), t.author_name && s(f, {
            className: S.primaryFaceAuthorContainer,
            alignItems: "center",
            justifyContent: "center"
        }, s(h.B4, {
            className: S.primaryFaceAuthor
        }, x(t.author_name)))), o.map((a, n) => s(te, {
            className: Z(S.face, S.secondaryFaces, S[`secondaryFace${n}`]),
            size: e[n],
            showProfileHovercard: !0,
            user: a.recommendedPublication.author
        })))
    },
    $t = "_avatarContainer_gupy0_1",
    Bt = "_avatar_gupy0_1",
    Ht = "_termsFooter_gupy0_11",
    oe = {
        avatarContainer: $t,
        avatar: Bt,
        termsFooter: Ht
    },
    wo = ({
        pub: t,
        post: o,
        referringUser: e,
        freeSignupEmail: a,
        forceFollowPrompt: n,
        surface: r
    }) => {
        var ae, ne;
        const [d, i] = M(!1), [c, l] = M(!1), [u, p] = M(0), [y, w] = M(a), [T, P] = M(!1), {
            iString: k,
            iTemplate: $
        } = G(), B = ue(), O = Ge(), F = tt(), {
            getExperimentVariant: me
        } = de(), he = me("app_upsell_follow_prompt"), H = !!F || !!a, E = et(e, r != null ? r : "follow-referrer-prompt", {
            auto: H
        }), j = ot({
            pathname: `/api/v1/user/${e.id}/subscriber-lists?lists=following`,
            auto: !0
        }), fe = (ne = (ae = j.result) == null ? void 0 : ae.subscriberLists.flatMap(m => m.groups.flatMap(C => C.users)).slice(0, 9)) != null ? ne : [], g = U(() => ({
            free_signup_email: a,
            post_id: o == null ? void 0 : o.id,
            referring_user_id: e.id
        }), [a, o == null ? void 0 : o.id, e.id]);
        le(() => {
            if (!j.hasLoadedOnce || H && !E.isLoaded || E.isFollowing) {
                n && E.isFollowing && O.popToast(R => s(ie, v(_({}, R), {
                    text: $ `Already following ${x(e.name)}`
                })));
                return
            }
            try {
                const R = new URL(document.referrer);
                if (/(\b|\.)google\./.test(R.hostname) || ["news.ycombinator.com", "hckrnews.com"].includes(R.hostname)) return
            } catch (R) {}
            if (F && Ie("follow-referrer-on-load")) {
                Me("follow-referrer-on-load"), L(I.FOLLOW_REFERRER_PROMPT_REDIRECTED, g), X({
                    fromRedirect: !0
                }).then(() => i(!0));
                return
            }
            const m = `follow-prompt-for-post-${o==null?void 0:o.id}-and-referrer-${e.id}-shown-at`,
                C = st(m);
            !n && C && xe().subtract(7, "days").isBefore(C) || (at(m, Date.now()), i(!0), L(I.FOLLOW_REFERRER_PROMPT_SHOWN, g))
        }, [F, j.hasLoadedOnce, E.isLoaded]);
        const W = A(() => {
                L(I.FOLLOW_REFERRER_PROMPT_DISMISSED, v(_({}, g), {
                    step: u
                })), i(!1)
            }, [g, i, u]),
            ge = A(({
                email: m,
                reason: C = "sign-in-click"
            } = {}) => {
                L(I.FOLLOW_REFERRER_PROMPT_SIGN_IN_INITIATED, v(_({}, g), {
                    reason: C
                }));
                const R = Te({
                    "follow-referrer-on-load": e.id
                });
                Oe(Ne({
                    email: m,
                    for_pub: t == null ? void 0 : t.subdomain,
                    redirect: R
                }))
            }, [g, t == null ? void 0 : t.subdomain, e.id]),
            se = A((...C) => Y(void 0, [...C], function*({
                email: m
            } = {}) {
                let R, b, K;
                try {
                    ({
                        user: R,
                        userExists: b
                    } = yield ke("/api/v1/reader/signup/just_email", {
                        method: "POST",
                        json: {
                            email: m
                        }
                    }))
                } catch (z) {
                    z instanceof De && (K = z.getMessage())
                }
                return R ? (w(m), 0) : b ? (L(I.FOLLOW_REFERRER_PROMPT_EXISTING_EMAIL_ENTERED, v(_({}, g), {
                    email: m
                })), w(m), 2) : (L(I.FOLLOW_REFERRER_PROMPT_SIGNUP_FAILED, v(_({}, g), {
                    email: m,
                    error: K
                })), O.popToast(z => s(ie, v(_({}, z), {
                    text: K || k("Something went wrong. Please try again later.")
                }))), 1)
            }), [g, O, k]),
            X = A((...R) => Y(void 0, [...R], function*({
                email: m,
                fromRedirect: C = !1
            } = {}) {
                if (c) return;
                l(!0), C || L(I.FOLLOW_REFERRER_PROMPT_CTA_CLICKED, v(_({}, g), {
                    email: m
                }));
                let b;
                if (!H) {
                    if (!m) {
                        p(1), l(!1);
                        return
                    }
                    if (b = yield se({
                            email: m
                        }), b === 1) {
                        l(!1);
                        return
                    }
                }!E.isFollowing && (b === void 0 || b === 0) && (yield E.toggle(), P(!0)), !F || C ? p(2) : i(!1), l(!1)
            }), [F, H, E, g, c, l, p, se]);
        return s(it, {
            position: B ? "bottom" : "default",
            fullscreenMobile: u !== 0,
            isOpen: d,
            onClose: W
        }, s(f, {
            style: {
                height: "100%"
            }
        }, s(rt, {
            title: " ",
            includeClose: !0,
            onClose: W
        }), s(f, {
            flex: "grow",
            gap: 48,
            paddingX: 32,
            paddingBottom: 32,
            paddingTop: 12
        }, u === 0 && s(Wt, {
            pub: t,
            referringUser: e,
            referrerFollowingList: fe,
            loading: c,
            showFaceCloud: !F && he === "treatment_cloud",
            onFollowClick: X,
            onDismiss: W
        }), u === 1 && s(zt, {
            referringUser: e,
            loading: c,
            onFollowWithEmail: X,
            onSignInClick: ge
        }), u === 2 && s(Vt, {
            email: y,
            referringUser: e,
            followed: T,
            onDismiss: W
        }))))
    },
    Wt = ({
        pub: t,
        referringUser: o,
        referrerFollowingList: e,
        loading: a,
        showFaceCloud: n,
        onFollowClick: r,
        onDismiss: d
    }) => {
        var T, P, k, $, B, O;
        const {
            iTemplate: i,
            iString: c
        } = G(), l = (k = (P = (T = o.photo_url) != null ? T : t == null ? void 0 : t.logo_url) != null ? P : t == null ? void 0 : t.author_photo_url) != null ? k : Ae(o.id), u = x(o.name);
        let p;
        const y = (B = ($ = o.subscriptions) == null ? void 0 : $.find(F => F.publication_id == (t == null ? void 0 : t.id))) == null ? void 0 : B.membership_state;
        t && y === "subscribed" ? p = i `${o.name}, a paid subscriber of ${t.name}, shared this with you.` : t && y === "free_signup" ? p = i `${o.name}, a subscriber of ${t.name}, shared this with you.` : p = i `${o.name} shared this with you.`;
        const w = `${p} ${i`Follow ${u} to see what else they're reading.`}`;
        return s(f, {
            alignItems: "center",
            gap: 8
        }, n ? s(J, null, s(h.H2, {
            translated: !0,
            align: "center",
            weight: "heavy"
        }, "Follow ", I18N.p(o.name)), s(h.B3, {
            align: "center",
            color: "secondary"
        }, w), s(ee, {
            paddingY: 24
        }, s(Pt, {
            pub: {
                author_id: o.id,
                author_name: o.name,
                author_photo_url: (O = o.photo_url) != null ? O : ""
            },
            suggestions: e.map(F => ({
                recommendedPublication: {
                    author: F
                }
            }))
        }))) : s(f, {
            alignItems: "center",
            gap: 16,
            paddingBottom: 16
        }, s("div", {
            className: oe.avatarContainer
        }, s(te, {
            className: oe.avatar,
            user: {
                photo_url: l
            },
            size: 64
        })), s(h.H3, {
            align: "center",
            weight: "heavy"
        }, p)), s(N, {
            grow: !0,
            priority: "primary-theme",
            disabled: a,
            onClick: r,
            style: {
                borderRadius: 12
            }
        }, i `Follow ${u} and continue reading`), s(N, {
            grow: !0,
            priority: "secondary",
            onClick: d,
            style: {
                borderRadius: 12
            }
        }, c("Skip")))
    },
    zt = ({
        referringUser: t,
        loading: o,
        onFollowWithEmail: e,
        onSignInClick: a
    }) => {
        const [n, r] = M(""), {
            iTemplate: d
        } = G(), i = Pe(null);
        le(() => {
            var u;
            (u = i.current) == null || u.focus()
        }, []);
        const c = A(u => {
                u.preventDefault(), n !== "" && e({
                    email: n
                })
            }, [e, n]),
            l = x(t.name);
        return s(J, null, s(f, {
            alignItems: "center",
            gap: 8
        }, s(h.H3, {
            translated: !0,
            align: "center",
            weight: "heavy"
        }, "Sign up to follow ", I18N.p(l)), s(h.B4, {
            translated: !0,
            align: "center",
            color: "secondary"
        }, "Discover great writing and follow your friends on Substack")), s(f, {
            gap: 12
        }, s(h.B4, {
            translated: !0,
            weight: "semibold"
        }, "Your email address"), s("form", {
            onSubmit: c
        }, s(nt, {
            ref: i,
            placeholder: "bob@gmail.com",
            value: n,
            onChange: u => r(u.target.value)
        }))), s(f, {
            alignItems: "center",
            gap: 16,
            justifyContent: "center"
        }, s(N, {
            grow: !0,
            disabled: o || n === "",
            onClick: c,
            style: {
                borderRadius: 12
            }
        }, d `Sign up and follow ${l}`), s(h.B4, {
            translated: !0,
            align: "center",
            color: "secondary"
        }, "Already have a Substack account?", " ", s(h.B4, {
            translated: !0,
            color: "secondary",
            decoration: "underline",
            as: "a",
            href: "#",
            onClick: a
        }, "Sign in"))), s(f, {
            flex: "grow",
            justifyContent: "end"
        }, s(h.B4, {
            align: "center"
        }, s(Ze, {
            className: oe.termsFooter,
            publication: ct
        }))))
    },
    Vt = ({
        onDismiss: t,
        email: o,
        referringUser: e,
        followed: a
    }) => {
        const {
            iString: n
        } = G(), r = ue(), {
            getExperimentVariant: d
        } = de(), i = d("app_install_send_code"), c = i === "text" ? 355 : i === "email" ? 325 : 231, l = {
            utm_medium: He.web,
            utm_campaign: We.postFollowReferrerPrompt,
            utm_source: ze.post
        };
        return s(J, null, a ? s(f, {
            alignItems: "center",
            gap: 4
        }, s(h.H3, {
            translated: !0,
            align: "center",
            weight: "heavy"
        }, "Read and follow in the app"), s(h.B4, {
            translated: !0,
            align: "center",
            color: "secondary"
        }, "See who else ", I18N.p(x(e.name)), " reads in the Substack app")) : s(f, {
            alignItems: "center",
            gap: 4
        }, s(h.H3, {
            translated: !0,
            align: "center",
            weight: "heavy"
        }, "Finish following ", I18N.p(x(e.name)), " in the app"), s(h.B4, {
            translated: !0,
            align: "center",
            color: "secondary"
        }, "See who else ", I18N.p(x(e.name)), " reads on Substack")), r ? s(J, null, s(ee, {
            alignSelf: "center"
        }, s("img", {
            src: $e("/img/app-preview-card.png"),
            height: 265
        })), s(ee, {
            flex: "grow"
        }, s(f, {
            alignItems: "center",
            flex: "grow",
            gap: 8
        }, s(N, {
            grow: !0,
            href: Be(l),
            style: {
                borderRadius: 12
            }
        }, n("Get the Substack app")), s(N, {
            grow: !0,
            priority: "secondary",
            fill: "empty",
            onClick: t,
            style: {
                borderRadius: 12
            }
        }, n("Skip"))))) : s(f, {
            alignItems: "center",
            gap: 24
        }, s("div", {
            style: {
                minHeight: c
            }
        }, s(Ue, v(_({}, l), {
            hideQrInstructions: !0,
            suggestedEmail: o,
            size: 180,
            gap: 16,
            padding: 0
        }))), s(N, {
            grow: !0,
            priority: "secondary",
            onClick: t,
            style: {
                borderRadius: 12
            }
        }, n("Continue reading"))))
    };
export {
    go as C, wo as F, mo as L, Ft as T, ho as a, _o as f, yo as r, fo as t, lt as u
};