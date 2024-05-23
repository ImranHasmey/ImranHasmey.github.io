var Le = Object.defineProperty,
    Ae = Object.defineProperties;
var Te = Object.getOwnPropertyDescriptors;
var Pe = Object.getOwnPropertySymbols;
var je = Object.prototype.hasOwnProperty,
    Ue = Object.prototype.propertyIsEnumerable;
var Se = (t, o, i) => o in t ? Le(t, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : t[o] = i,
    T = (t, o) => {
        for (var i in o || (o = {})) je.call(o, i) && Se(t, i, o[i]);
        if (Pe)
            for (var i of Pe(o)) Ue.call(o, i) && Se(t, i, o[i]);
        return t
    },
    we = (t, o) => Ae(t, Te(o));
var Be = (t, o, i) => new Promise((u, _) => {
    var n = l => {
            try {
                s(i.next(l))
            } catch (m) {
                _(m)
            }
        },
        p = l => {
            try {
                s(i.throw(l))
            } catch (m) {
                _(m)
            }
        },
        s = l => l.done ? u(l.value) : Promise.resolve(l.value).then(n, p);
    s((i = i.apply(t, o)).next())
});
import {
    L as fe,
    _ as Ne,
    R as B
} from "./user-e16f1619.js";
import {
    o as De,
    h as ae,
    p as $,
    y as e,
    P as qe,
    i as ve,
    c5 as Oe,
    a9 as $e,
    a$ as Ee,
    d as K,
    g7 as ze,
    ae as Me,
    t as j,
    af as Ve,
    E as U,
    g8 as he,
    g9 as ke,
    c8 as Je,
    fO as Ge,
    aD as Qe,
    br as Ke,
    H as Ye,
    fW as Ie,
    cZ as ne,
    W as Ze,
    U as Re,
    M as Xe,
    aa as ie,
    ga as se,
    J as et,
    r as Fe,
    gb as tt,
    gc as at,
    a3 as ot,
    b8 as nt,
    D as it,
    cS as st
} from "./tracking-376cff7a.js";
import {
    b as E,
    n as Z,
    P as le,
    u as X,
    O as M,
    F as oe,
    a as C,
    T as f,
    c as H,
    B as J
} from "./FlexBox-1a755411.js";
import {
    F as re
} from "./free_email_form-1d3fc4be.js";
import {
    C as ce
} from "./CloseIcon-90eee5fe.js";
import {
    R as Y
} from "./RightArrowIcon-8574f1b5.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    I as me
} from "./experimentsAndSiteConfigContext-a6aeed82.js";
import {
    s as Ce
} from "./entry-a965ffeb.js";
import {
    u as lt
} from "./free_email_form.module-135823b4.js";
import {
    U as rt
} from "./UserBadgeIconOnly-381365d6.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            o = new Error().stack;
        o && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[o] = "e6a74a58-8318-4d10-bb37-196554ef48b0", t._sentryDebugIdIdentifier = "sentry-dbid-e6a74a58-8318-4d10-bb37-196554ef48b0")
    } catch (i) {}
})();

function V({
    text: t,
    maxLines: o,
    ellipsesText: i = "..."
}) {
    const u = De(null),
        [_, n] = ae(t);
    return $(() => {
        (() => {
            if (!u.current) return;
            u.current.innerText = "-";
            const l = (u.current.clientHeight + 1) * o + 1;
            let m = 0,
                N = 0,
                v = t.length;
            for (; m <= v;) {
                if (N = Math.floor((m + v) / 2), u.current.innerText = t.slice(0, N), N === t.length && u.current.clientHeight <= l) {
                    u.current.innerText = "", n(t);
                    return
                }
                u.current.clientHeight <= l ? m = N + 1 : v = N - 1
            }
            const z = t.slice(0, N - i.length - 2);
            u.current.innerText = "", n(z + i)
        })()
    }, [u, t, o, i]), e("div", {
        style: {
            position: "relative"
        }
    }, e("div", null, _), e("div", {
        ref: u,
        style: {
            visibility: "hidden",
            position: "absolute",
            width: "100%"
        }
    }))
}
const ct = ({
        children: t,
        separator: o
    }) => {
        const i = [],
            u = qe(t);
        return u.forEach((_, n) => {
            i.push(_), n !== u.length - 1 && i.push(o)
        }), e(ve, null, i)
    },
    mt = "_closeWelcomeModal_zjnz0_1",
    gt = "_maybeLater_zjnz0_28",
    dt = "_publicationCoverPhotoLeft_zjnz0_52",
    ut = "_publicationCoverPhotoRight_zjnz0_58",
    _t = "_largePublicationCoverPhotoRight_zjnz0_65",
    pt = "_column_zjnz0_72",
    ht = "_largeColumn_zjnz0_76",
    ft = "_centeredColumn_zjnz0_80",
    Nt = "_largeCenteredColumn_zjnz0_85",
    vt = "_hideColumnSmallScreens_zjnz0_89",
    Ct = "_hideLargeColumnSmallScreens_zjnz0_95",
    yt = "_publicationCoverPhotoCenter_zjnz0_101",
    xt = "_publicationLogo_zjnz0_107",
    bt = "_coverPrimary_zjnz0_114",
    Pt = "_coverSecondary_zjnz0_118",
    St = "_blurbImage_zjnz0_122",
    wt = "_containerClassName_zjnz0_128",
    Bt = "_promptClassName_zjnz0_132",
    zt = "_inputClassName_zjnz0_136",
    kt = "_subscribeButtonClassName_zjnz0_144",
    It = "_largeHeading_zjnz0_152",
    Ft = "_largeSubHeading_zjnz0_159",
    Wt = "_largePromptClassName_zjnz0_166",
    Et = "_largeInputWrapperClassName_zjnz0_174",
    Rt = "_largeInputClassName_zjnz0_178",
    Ht = "_largeSubscribeButtonClassName_zjnz0_190",
    Lt = "_postContainer_zjnz0_201",
    At = "_postTitle_zjnz0_209",
    Tt = "_postSubtitle_zjnz0_214",
    jt = "_postImage_zjnz0_219",
    Ut = "_faces_zjnz0_226",
    Dt = "_face_zjnz0_226",
    qt = "_first_zjnz0_244",
    Ot = "_last_zjnz0_248",
    $t = "_bigSubtitle_zjnz0_253",
    Mt = "_balancedText_zjnz0_257",
    a = {
        closeWelcomeModal: mt,
        maybeLater: gt,
        publicationCoverPhotoLeft: dt,
        publicationCoverPhotoRight: ut,
        largePublicationCoverPhotoRight: _t,
        column: pt,
        largeColumn: ht,
        centeredColumn: ft,
        largeCenteredColumn: Nt,
        hideColumnSmallScreens: vt,
        hideLargeColumnSmallScreens: Ct,
        publicationCoverPhotoCenter: yt,
        publicationLogo: xt,
        coverPrimary: bt,
        coverSecondary: Pt,
        blurbImage: St,
        containerClassName: wt,
        promptClassName: Bt,
        inputClassName: zt,
        subscribeButtonClassName: kt,
        largeHeading: It,
        largeSubHeading: Ft,
        largePromptClassName: Wt,
        largeInputWrapperClassName: Et,
        largeInputClassName: Rt,
        largeSubscribeButtonClassName: Ht,
        postContainer: Lt,
        postTitle: At,
        postSubtitle: Tt,
        postImage: jt,
        faces: Ut,
        face: Dt,
        first: qt,
        last: Ot,
        bigSubtitle: $t,
        balancedText: Mt
    },
    We = "intro_popup_last_hidden_at";

function Vt(t, {
    language: o
}) {
    const i = !t.disable_monthly_subscriptions && t.plans && t.plans.filter(n => n.interval === "month").sort((n, p) => n.amount - p.amount)[0],
        u = !t.disable_annual_subscriptions && t.plans && t.plans.filter(n => n.interval === "year").sort((n, p) => n.amount - p.amount)[0],
        _ = i || u;
    if (_) return et(_, {
        language: o
    })
}

function ge(t, {
    includePrice: o = !0,
    includeRankingDetail: i = !0,
    includeByline: u = !0,
    includeBadge: _ = !1,
    rankingDetailOverrideText: n = null,
    language: p = "en"
} = {}) {
    const s = p || t.language,
        {
            iTemplate: l
        } = I18N.i(p || t.language),
        m = $e(t);
    let N = null;
    return i && (N = n || (t.rankingDetailByLanguage && s !== "en" && t.rankingDetailByLanguage[s] ? t.rankingDetailByLanguage[s].rankingDetail : t.rankingDetail)), e(ct, {
        separator: " · "
    }, u && m ? e(E, {
        inline: !0,
        gap: 4
    }, l `By ${m}`, _ && e(fe, {
        module: "../pencraft/unstable/UserBadge",
        resolve: v => v.UserBadge,
        onRequest: () => Ne(() =>
            import ("./UserBadge-a694a663.js"), ["assets/UserBadge-a694a663.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/react-laag.esm-f47be925.js", "assets/profile-a781fd85.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/transition-c6a4911b.js", "assets/Tooltip-d0af0cf2.css", "assets/UserBadge-fb9c174e.css"]),
        size: "sm",
        tier: t.author_bestseller_tier,
        userId: t.author_id,
        whileLoading: t.author_bestseller_tier ? e(E, {
            alignItems: "center"
        }, e(rt, {
            size: "sm",
            tier: t.author_bestseller_tier
        })) : e(ve, null)
    })) : null, N, o && Vt(t, {
        language: p
    }))
}
const ga = Oe(({
        publication: t,
        user: o,
        post: i,
        onHide: u,
        freeSignup: _,
        hidden: n,
        alwaysShow: p,
        showOnMount: s,
        freeSignupEmail: l,
        email: m,
        referralCode: N,
        blurbs: v,
        launchWelcomePage: z,
        topThreePosts: k,
        topThreeSubscribers: W
    }) => {
        var ye, xe, be;
        const {
            getConfigFor: I
        } = Ee(), d = I("welcome_page_query_params"), [S, L] = ae(!1), [c, y] = ae(!!(z || p)), g = (x, Q) => {
            var pe;
            return d && (pe = K(x)) != null ? pe : Q
        }, [P] = ae(g("no_skip", void 0)), [A] = ae(g("no_blurbs", !1)), [h] = ae(() => {
            const x = g("hero_text", void 0);
            return x ? decodeURIComponent(x) : void 0
        }), {
            getExperimentVariant: w,
            exposeExperiment: F
        } = lt(), {
            getSettingFor: r
        } = Z(), D = (ye = K("force")) != null ? ye : void 0;
        $(() => {
            if (z && !_e() || G()) {
                if (typeof window != "undefined" && ze(document.documentElement, "has-intro-popup"), K("r")) {
                    const x = K("r");
                    (!o || Me(o) !== x) && j(U.COVER_PAGE_REFERRAL_VISIT, {
                        referral_key: x,
                        referring_user: Ve(x)
                    })
                }
                b()
            } else u && u(), Ce({
                hide_intro_popup: !0
            }), typeof window != "undefined" && he(document.documentElement, "has-intro-popup"), !p && typeof window != "undefined" && ke(document.documentElement, "show-intro-popup") && he(document.documentElement, "show-intro-popup");
            return ["no_skip", "no_blurbs", "hero_text", "hide_intro_popup"].forEach(x => Je(x)), () => {
                typeof window != "undefined" && he(document.documentElement, "has-intro-popup"), ee(!0)
            }
        }, []);
        const b = () => {
                typeof window != "undefined" && (ze(document.documentElement, "show-intro-popup"), j(U.COVER_PAGE_SHOWN, {
                    has_cover_photo: !!t.cover_photo_url,
                    has_free_signup_email: !!l,
                    has_free_signup: !!_,
                    functional_version: !0,
                    launch_welcome_page: z,
                    always_show: p,
                    hidden: n,
                    screen_height: typeof window != "undefined" ? window.innerHeight : null,
                    screen_width: typeof window != "undefined" ? window.innerWidth : null,
                    test_experiment_variant_v5: w("test_experiment_v5")
                }), F("test_experiment_v5"), p || Ge("pageview", {
                    dl: `${document.location.origin}/welcome${document.location.search}`
                })), y(!0)
            },
            G = Qe(() => p ? !0 : n ? !1 : s || S ? !0 : !(_e() || !(typeof i == "undefined" || i === null || i && !Ke(i.audience)) || _ || o && (o.is_free_subscribed || o.is_subscribed)), [p, _, n, i, s, S, o]),
            R = r("display_welcome_page_details") && t.freeSubscriberCount && !Ye() && !D && !t.invite_only && !N && !t.custom_domain && (k == null ? void 0 : k.length) && (W == null ? void 0 : W.length) && !P && !h;
        $(() => {
            c && G() && R && F("welcome_page_update_desktop_visuals_limited")
        }, [F, r, R, G, c]);
        const ee = x => {
                x || (ue(), setTimeout(() => {
                    Ce({
                        hide_intro_popup: !0
                    })
                }, 500)), u && u(), !p && typeof window != "undefined" && ke(document.documentElement, "show-intro-popup") && he(document.documentElement, "show-intro-popup")
            },
            _e = () => {
                const x = Ie.get(We);
                if (x) {
                    const Q = new Date(x),
                        pe = new Date(Date.now() - 24 * 60 * 60 * 1e3);
                    if (Q > pe) return !0
                }
                return !1
            },
            ue = () => {
                Ie.set(We, new Date().toJSON(), {
                    expires: 365 * 10
                })
            },
            O = x => Be(void 0, null, function*() {
                j(U.COVER_PAGE_EMAIL_SUBMITTED, {
                    is_paying_sub: !!x.body.prompt_to_login,
                    has_plans: !!t.plans,
                    functional_version: !0
                }), ue(), L(!0), Ce({
                    freeSignup: !0,
                    freeSignupEmail: x.body.email
                });
                const Q = p ? "/" : document.location.href;
                x.body.prompt_to_login ? setTimeout(() => {
                    document.location.href = Fe("/account/login", {
                        redirect: Q,
                        email: x.body.email
                    })
                }, 30) : document.location.href = Fe("/subscribe", we(T(T({
                    next: Q,
                    later: !0,
                    just_signed_up: !0
                }, x.body.subscription_id && {
                    subscription_id: x.body.subscription_id
                }), x.body.referral_token && {
                    referral_token: x.body.referral_token
                }), {
                    requires_confirmation: x.body.requires_confirmation ? "true" : "",
                    utm_source: Re.coverPage,
                    email: x.body.email,
                    skip_redirect_check: !0
                }))
            }),
            q = () => {
                j(U.COVER_PAGE_MAYBE_LATER_CLICKED, {
                    functional_version: !0
                }), ee()
            };
        if (!c || !G()) return null;
        let te = e(He, {
            source: "cover_page",
            email: m,
            pub: t,
            user: o,
            freeSignup: _,
            freeSignupEmail: l,
            referralCode: N,
            forceSignup: (be = (xe = K("force")) != null ? xe : P) != null ? be : void 0,
            onMaybeLater: P ? void 0 : q,
            onFreeSignup: O,
            markAsHidden: ue,
            blurbs: v,
            hideBlurbs: A,
            overrideSubtitle: h
        });
        if (R) switch (w("welcome_page_update_desktop_visuals_limited")) {
            case "treatment_testimonials":
                te = e(Jt, {
                    email: m,
                    pub: t,
                    user: o,
                    freeSignup: _,
                    freeSignupEmail: l,
                    onMaybeLater: q,
                    onFreeSignup: O,
                    blurbs: v
                });
                break;
            case "treatment_posts":
                te = e(Gt, {
                    email: m,
                    pub: t,
                    user: o,
                    freeSignup: _,
                    freeSignupEmail: l,
                    onMaybeLater: q,
                    onFreeSignup: O,
                    blurbs: v,
                    topThreePosts: k
                });
                break;
            case "treatment_social_proof":
                te = e(Qt, {
                    email: m,
                    pub: t,
                    user: o,
                    freeSignup: _,
                    freeSignupEmail: l,
                    onMaybeLater: q,
                    onFreeSignup: O,
                    blurbs: v,
                    topThreeSubscribers: W
                });
                break;
            case "treatment_tagline":
                te = e(Kt, {
                    email: m,
                    pub: t,
                    user: o,
                    freeSignup: _,
                    freeSignupEmail: l,
                    onMaybeLater: q,
                    onFreeSignup: O,
                    blurbs: v
                });
                break;
            case "treatment_large_fonts":
                te = e(Yt, {
                    email: m,
                    pub: t,
                    user: o,
                    freeSignup: _,
                    freeSignupEmail: l,
                    onMaybeLater: q,
                    onFreeSignup: O,
                    blurbs: v
                });
                break
        }
        return e("div", {
            className: "intro-popup"
        }, e("div", {
            className: "intro-popup-page"
        }, te))
    }),
    da = t => e("div", {
        className: "intro-inline"
    }, e(He, T({}, t))),
    Jt = ({
        pub: t,
        user: o,
        email: i,
        freeSignup: u,
        freeSignupEmail: _,
        onMaybeLater: n,
        onFreeSignup: p,
        blurbs: s
    }) => {
        var F;
        const l = "cover_page",
            m = ne(le),
            {
                getSettingFor: N
            } = Z(),
            {
                iString: v,
                language: z
            } = X(),
            {
                title: k,
                subtitle: W,
                logoUrl: I,
                coverPhotoUrl: d,
                hideTitle: S,
                hideSubtitle: L
            } = de(t),
            c = d && se(d),
            y = c && c.width / c.height,
            g = !!(y && y < 2),
            P = !S,
            A = !L,
            h = N("display_welcome_page_details");
        $(() => {
            j(U.FULL_EMAIL_FORM_SHOWN, {
                source: l,
                functional_version: !0,
                version: "testimonials"
            })
        }, [l]);
        const w = s ? s.filter(r => r.description != "") : [];
        return e("div", {
            className: "full-email-form"
        }, e("div", {
            className: "vertically-centered"
        }, e(M, {
            className: a.closeWelcomeModal,
            fill: "empty",
            onClick: n,
            "aria-label": "Close",
            "data-testid": "close-welcome-modal"
        }, e(ce, null)), d && !g ? e(J, {
            paddingBottom: 48
        }, e(B, {
            className: a.publicationCoverPhotoCenter,
            src: d,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 840,
            loading: "eager",
            style: T({}, c && c.width && {
                height: `min(168px, ${840*c.height/c.width}px)`
            })
        })) : null, e(E, {
            gap: 48
        }, e(C, {
            className: a.column,
            gap: 24
        }, d ? g ? e(B, {
            className: a.publicationCoverPhotoLeft,
            src: d,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 476,
            loading: "eager",
            style: T({}, c && c.width && {
                height: `min(300px, ${476*c.height/c.width}px)`
            })
        }) : null : I && e(B, {
            className: a.publicationLogo,
            src: I,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 84,
            loading: "eager"
        }), e(C, {
            className: a.column,
            gap: 16
        }, P ? e(f.H1, {
            textAlign: "left",
            font: "pub-headings",
            className: a.coverPrimary,
            textWrap: "balance"
        }, k) : null, A ? e(f.B3, {
            textAlign: "left",
            font: "display",
            size: 15,
            lineHeight: 20,
            className: a.coverSecondary,
            textWrap: "balance"
        }, W) : null, e(f.B2, {
            textAlign: "left",
            weight: "semibold",
            font: "display",
            size: 17,
            lineHeight: 24,
            className: a.coverSecondary
        }, ge(t, {
            includePrice: !1,
            includeBadge: !0,
            rankingDetailOverrideText: t.rankingDetailFreeSubscriberCount,
            includeRankingDetail: !!h,
            language: z
        }))), e(C, {
            gap: 16
        }, e(re, {
            email: i,
            isWelcomePageColor: !0,
            freeSignup: u,
            freeSignupEmail: _,
            pub: t,
            source: l,
            user: o,
            onConfirmationRequired: t.payments_state === "enabled" ? () => null : void 0,
            onMaybeLater: n,
            onSuccess: p || (() => document.location.href = "/"),
            autoFocus: !0,
            className: a.containerClassName,
            promptClassName: a.promptClassName,
            inputClassName: a.inputClassName,
            subscribeButtonClassName: a.subscribeButtonClassName
        }), e(E, {
            gap: 4,
            cursor: "pointer",
            alignItems: "center",
            alignSelf: "start",
            inline: !0,
            onClick: n
        }, e(f.B3, {
            style: {
                color: "var(--cover_print_secondary)"
            }
        }, m.getSettingFor("welcome_page_opt_out_text") === "No thanks" ? v("No thanks") : (F = m.getSettingFor("welcome_page_opt_out_text")) != null ? F : v("No thanks")), e(Y, {
            height: 18,
            stroke: "var(--cover_print_secondary)",
            strokeWidth: 2
        })))), e(C, {
            className: H(a.column, a.hideColumnSmallScreens),
            gap: 32
        }, e(f.H3, {
            textAlign: "left",
            font: "display",
            size: 20,
            lineHeight: 24,
            className: a.coverPrimary,
            translated: !0
        }, "What readers are saying"), e(C, {
            gap: 20
        }, w.map(r => {
            const D = e(B, {
                className: a.blurbImage,
                src: tt(r.recommendingPublication.author) || r.recommendingPublication.logo_url || "",
                imageProps: {
                    quality: "auto:best"
                },
                maxWidth: 48,
                loading: "eager",
                imageIsFixedWidth: !0
            });
            return e(E, {
                gap: 24
            }, e(fe, {
                module: "@/frontend/components/ProfileHoverCard",
                resolve: b => b.ProfileHoverCard,
                onRequest: () => Ne(() =>
                    import ("./ProfileHoverCard-c8bfb61a.js").then(b => b.aH), ["assets/ProfileHoverCard-c8bfb61a.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/_defineProperty-105d261c.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/react-laag.esm-f47be925.js", "assets/transition-c6a4911b.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/HoverCard-cbdee1d2.js", "assets/x-fc38e969.js", "assets/useResponsive-08e338a7.js", "assets/HoverCard-41ea4b50.css", "assets/Menu-5342012d.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/profile-a781fd85.js", "assets/UserBadge-a694a663.js", "assets/UserBadge-fb9c174e.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css"]),
                whileLoading: D,
                subject: r.recommendingPublication.author,
                dontStopPropagation: !1,
                disabled: !1,
                placement: "right-center"
            }, D), e(C, {
                gap: 16
            }, e(f.B4, {
                textAlign: "left",
                font: "display",
                size: 17,
                lineHeight: 24,
                className: a.coverSecondary
            }, e(V, {
                maxLines: 4,
                ellipsesText: "...”",
                text: `“${r.description}”`
            })), e(f.B4, {
                textAlign: "left",
                font: "display",
                weight: "semibold",
                size: 17,
                lineHeight: 24,
                className: a.coverSecondary
            }, r.author_name || r.recommendingPublication.email_from_name || r.recommendingPublication.copyright, ",", " ", e("a", {
                className: a.coverSecondary,
                href: ie(r.recommendingPublication),
                target: "_blank",
                rel: "noopener"
            }, r.recommendingPublication.name))))
        }))))), e(me, {
            publication: t
        }))
    },
    Gt = ({
        pub: t,
        user: o,
        email: i,
        freeSignup: u,
        freeSignupEmail: _,
        onMaybeLater: n,
        onFreeSignup: p,
        blurbs: s,
        topThreePosts: l
    }) => {
        var D;
        const m = "cover_page",
            N = ne(le),
            {
                getSettingFor: v
            } = Z(),
            {
                iString: z,
                language: k
            } = X(),
            {
                title: W,
                subtitle: I,
                logoUrl: d,
                coverPhotoUrl: S,
                hideTitle: L,
                hideSubtitle: c
            } = de(t),
            y = S && se(S),
            g = y && y.width / y.height,
            P = !!(g && g < 2),
            A = !L,
            h = !c,
            w = at(v("post_preview_crop_gravity"), ["center", "auto"]),
            F = v("display_welcome_page_details");
        $(() => {
            j(U.FULL_EMAIL_FORM_SHOWN, {
                source: m,
                functional_version: !0,
                version: "posts"
            })
        }, [m]);
        const r = s ? s.filter(b => b.description != "") : [];
        return e("div", {
            className: "full-email-form"
        }, e("div", {
            className: "vertically-centered"
        }, e(M, {
            className: a.closeWelcomeModal,
            fill: "empty",
            onClick: n,
            "aria-label": "Close",
            "data-testid": "close-welcome-modal"
        }, e(ce, null)), S && !P ? e(J, {
            paddingBottom: 48
        }, e(B, {
            className: a.publicationCoverPhotoCenter,
            src: S,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 840,
            loading: "eager",
            style: T({}, y && y.width && {
                height: `min(168px, ${840*y.height/y.width}px)`
            })
        })) : null, e(E, {
            gap: 48
        }, e(C, {
            className: a.column,
            gap: 24
        }, S ? P ? e(B, {
            className: a.publicationCoverPhotoLeft,
            src: S,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 476,
            loading: "eager",
            style: T({}, y && y.width && {
                height: `min(300px, ${476*y.height/y.width}px)`
            })
        }) : null : d && e(B, {
            className: a.publicationLogo,
            src: d,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 84,
            loading: "eager"
        }), e(C, {
            className: a.column,
            gap: 16
        }, A ? e(f.H1, {
            textAlign: "left",
            font: "pub-headings",
            className: a.coverPrimary,
            textWrap: "balance"
        }, W) : null, h ? e(f.B3, {
            textAlign: "left",
            font: "display",
            size: 15,
            lineHeight: 20,
            className: a.coverSecondary,
            textWrap: "balance"
        }, I) : null, e(f.B2, {
            textAlign: "left",
            weight: "semibold",
            font: "display",
            size: 17,
            lineHeight: 24,
            className: a.coverSecondary
        }, ge(t, {
            includePrice: !1,
            includeBadge: !0,
            rankingDetailOverrideText: t.rankingDetailFreeSubscriberCount,
            includeRankingDetail: !!F,
            language: k
        }))), e(C, {
            gap: 16
        }, e(re, {
            email: i,
            isWelcomePageColor: !0,
            freeSignup: u,
            freeSignupEmail: _,
            pub: t,
            source: m,
            user: o,
            onConfirmationRequired: t.payments_state === "enabled" ? () => null : void 0,
            onMaybeLater: n,
            onSuccess: p || (() => document.location.href = "/"),
            autoFocus: !0,
            className: a.containerClassName,
            promptClassName: a.promptClassName,
            inputClassName: a.inputClassName,
            subscribeButtonClassName: a.subscribeButtonClassName
        }), e(E, {
            gap: 4,
            cursor: "pointer",
            alignItems: "center",
            alignSelf: "start",
            inline: !0,
            onClick: n
        }, e(f.B3, {
            style: {
                color: "var(--cover_print_secondary)"
            }
        }, N.getSettingFor("welcome_page_opt_out_text") === "No thanks" ? z("No thanks") : (D = N.getSettingFor("welcome_page_opt_out_text")) != null ? D : z("No thanks")), e(Y, {
            height: 18,
            stroke: "var(--cover_print_secondary)",
            strokeWidth: 2
        })))), e(C, {
            className: H(a.column, a.hideColumnSmallScreens),
            gap: 16
        }, e(f.H3, {
            textAlign: "left",
            font: "display",
            size: 20,
            lineHeight: 24,
            className: a.coverPrimary,
            translated: !0
        }, "Top posts"), e(C, {
            gap: 16
        }, l.map(b => e(E, {
            gap: 24,
            padding: 16,
            onClick: () => {
                n == null || n(), ot(nt(t, b, {
                    noBase: !0
                }))
            },
            cursor: "pointer",
            className: a.postContainer,
            justifyContent: "space-between"
        }, e(C, {
            gap: 2
        }, e(f.H3, {
            textAlign: "left",
            font: "display",
            weight: "semibold",
            decoration: "none",
            size: 20,
            lineHeight: 24,
            className: H(a.coverPrimary, a.postTitle)
        }, e(V, {
            maxLines: 3,
            ellipsesText: "...",
            text: b.title
        })), e(f.B4, {
            textAlign: "left",
            font: "display",
            decoration: "none",
            size: 20,
            lineHeight: 24,
            className: H(a.coverSecondary, a.postSubtitle),
            textWrap: "balance"
        }, e(V, {
            maxLines: 2,
            ellipsesText: "...",
            text: b.subtitle || b.description
        }))), b.cover_image && e(B, {
            className: a.postImage,
            src: b.cover_image,
            alt: "",
            maxWidth: 96,
            loading: "eager",
            imageProps: {
                height: 96,
                smartCrop: !0,
                gravity: w
            },
            imageIsFixedWidth: !0
        })))))), !!(r != null && r.length) && e("div", {
            className: "blurb-buffer"
        }), !!(r != null && r.length) && e(oe, {
            className: "blurbs",
            gap: 20
        }, r.map(b => e(C, {
            gap: 8,
            className: "blurb"
        }, e(f.B4, {
            className: "blurb-text"
        }, e(V, {
            maxLines: 4,
            ellipsesText: "...”",
            text: `“${b.description}”`
        })), e(f.B4, {
            weight: "semibold",
            className: "blurb-text"
        }, b.author_name || b.recommendingPublication.email_from_name || b.recommendingPublication.copyright, ", ", e("a", {
            href: ie(b.recommendingPublication)
        }, b.recommendingPublication.name)))))), e(me, {
            publication: t
        }))
    },
    Qt = ({
        pub: t,
        user: o,
        email: i,
        freeSignup: u,
        freeSignupEmail: _,
        onMaybeLater: n,
        onFreeSignup: p,
        blurbs: s,
        topThreeSubscribers: l
    }) => {
        var F, r, D, b, G;
        const m = "cover_page",
            N = ne(le);
        Z();
        const {
            iString: v,
            language: z
        } = X(), {
            title: k,
            subtitle: W,
            logoUrl: I,
            coverPhotoUrl: d,
            hideTitle: S,
            hideSubtitle: L
        } = de(t), c = d && se(d), y = c && c.width / c.height, g = !!(y && y < 2), P = !S || d && g, A = !L || d && g;
        $(() => {
            j(U.FULL_EMAIL_FORM_SHOWN, {
                source: m,
                functional_version: !0,
                version: "social-proof"
            })
        }, [m]);
        const h = s ? s.filter(R => R.description != "") : [],
            w = ge(t, {
                includePrice: !1,
                includeBadge: !0,
                includeRankingDetail: !1,
                language: z
            });
        return e("div", {
            className: "full-email-form"
        }, e("div", {
            className: "vertically-centered"
        }, e(M, {
            className: a.closeWelcomeModal,
            fill: "empty",
            onClick: n,
            "aria-label": "Close",
            "data-testid": "close-welcome-modal"
        }, e(ce, null)), d ? g ? null : e(J, {
            paddingBottom: 48
        }, e(B, {
            className: a.publicationCoverPhotoCenter,
            src: d,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 840,
            loading: "eager",
            style: T({}, c && c.width && {
                height: `min(168px, ${840*c.height/c.width}px)`
            }),
            imageIsFixedWidth: !0
        })) : I && e(J, {
            paddingBottom: 32
        }, e(B, {
            className: a.publicationLogo,
            src: I,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 84,
            loading: "eager",
            imageIsFixedWidth: !0
        })), e(E, {
            gap: 48
        }, e(C, {
            className: g ? a.column : a.centeredColumn,
            gap: 32
        }, e(C, {
            gap: 16
        }, P ? e(f.H1, {
            textAlign: g ? "left" : "center",
            font: "pub-headings",
            className: a.coverPrimary,
            textWrap: "balance"
        }, k) : null, A ? e(f.B3, {
            textAlign: g ? "left" : "center",
            font: "display",
            size: 15,
            lineHeight: 20,
            className: a.coverSecondary,
            textWrap: "balance"
        }, W) : null, w && ((b = (D = (r = (F = w.props) == null ? void 0 : F.children) == null ? void 0 : r.filter) == null ? void 0 : D.call(r, Boolean)) != null && b.length) ? e(f.B2, {
            textAlign: g ? "left" : "center",
            weight: "semibold",
            font: "display",
            size: 17,
            lineHeight: 24,
            className: a.coverSecondary
        }, w) : null), e(C, {
            gap: 16
        }, e(E, {
            alignItems: "center",
            alignSelf: g ? "start" : "center",
            gap: 8
        }, e(E, {
            alignItems: "center",
            className: H(a.faces)
        }, l.map((R, ee) => {
            const {
                id: _e,
                photo_url: ue
            } = R, O = e(B, {
                className: H(a.face, ee === 0 && a.first, ee === l.length - 1 && a.last),
                style: {
                    zIndex: l.length - ee
                },
                maxWidth: 40 * 2,
                src: it(ue || st(_e), 64),
                imageIsFixedWidth: !0
            });
            return e(fe, {
                module: "@/frontend/components/ProfileHoverCard",
                resolve: q => q.ProfileHoverCard,
                onRequest: () => Ne(() =>
                    import ("./ProfileHoverCard-c8bfb61a.js").then(q => q.aH), ["assets/ProfileHoverCard-c8bfb61a.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/_defineProperty-105d261c.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/react-laag.esm-f47be925.js", "assets/transition-c6a4911b.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/HoverCard-cbdee1d2.js", "assets/x-fc38e969.js", "assets/useResponsive-08e338a7.js", "assets/HoverCard-41ea4b50.css", "assets/Menu-5342012d.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/profile-a781fd85.js", "assets/UserBadge-a694a663.js", "assets/UserBadge-fb9c174e.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css"]),
                whileLoading: O,
                subject: R,
                dontStopPropagation: !1,
                disabled: !1,
                placement: "top-start"
            }, O)
        })), t.freeSubscriberCount ? e(f.H3, {
            font: "display",
            weight: "semibold",
            size: 20,
            lineHeight: 24,
            className: a.coverPrimary,
            translated: !0
        }, "Join over ", I18N.p(t.freeSubscriberCount), " subscribers") : null), e(re, {
            email: i,
            isWelcomePageColor: !0,
            freeSignup: u,
            freeSignupEmail: _,
            pub: t,
            source: m,
            user: o,
            onConfirmationRequired: t.payments_state === "enabled" ? () => null : void 0,
            onMaybeLater: n,
            onSuccess: p || (() => document.location.href = "/"),
            autoFocus: !0,
            className: a.containerClassName,
            promptClassName: a.promptClassName,
            inputClassName: a.inputClassName,
            subscribeButtonClassName: a.subscribeButtonClassName
        }), e(E, {
            gap: 4,
            cursor: "pointer",
            alignItems: "center",
            alignSelf: g ? "start" : "center",
            inline: !0,
            onClick: n
        }, e(f.B3, {
            style: {
                color: "var(--cover_print_secondary)"
            }
        }, N.getSettingFor("welcome_page_opt_out_text") === "No thanks" ? v("No thanks") : (G = N.getSettingFor("welcome_page_opt_out_text")) != null ? G : v("No thanks")), e(Y, {
            height: 18,
            stroke: "var(--cover_print_secondary)",
            strokeWidth: 2
        })))), d && g ? e(C, {
            className: H(a.column, a.hideColumnSmallScreens),
            gap: 32
        }, e(B, {
            className: a.publicationCoverPhotoRight,
            src: d,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 476,
            loading: "eager",
            imageIsFixedWidth: !0
        })) : null), !!(h != null && h.length) && e("div", {
            className: "blurb-buffer"
        }), !!(h != null && h.length) && e(oe, {
            className: "blurbs",
            gap: 20
        }, h.map(R => e(C, {
            gap: 8,
            className: "blurb"
        }, e(f.B4, {
            className: "blurb-text"
        }, e(V, {
            maxLines: 4,
            ellipsesText: "...”",
            text: `“${R.description}”`
        })), e(f.B4, {
            weight: "semibold",
            className: "blurb-text"
        }, R.author_name || R.recommendingPublication.email_from_name || R.recommendingPublication.copyright, ", ", e("a", {
            href: ie(R.recommendingPublication)
        }, R.recommendingPublication.name)))))), e(me, {
            publication: t
        }))
    },
    Kt = ({
        pub: t,
        user: o,
        email: i,
        freeSignup: u,
        freeSignupEmail: _,
        onMaybeLater: n,
        onFreeSignup: p,
        blurbs: s
    }) => {
        var F;
        const l = "cover_page",
            m = ne(le),
            {
                getSettingFor: N
            } = Z(),
            {
                iString: v,
                language: z
            } = X(),
            {
                title: k,
                subtitle: W,
                logoUrl: I,
                coverPhotoUrl: d,
                hideTitle: S,
                hideSubtitle: L
            } = de(t),
            c = d && se(d),
            y = c && c.width / c.height,
            g = !!(y && y < 2),
            P = !S || d && g,
            A = !L || d && g,
            h = N("display_welcome_page_details");
        $(() => {
            j(U.FULL_EMAIL_FORM_SHOWN, {
                source: l,
                functional_version: !0,
                version: "tagline"
            })
        }, [l]);
        const w = s ? s.filter(r => r.description != "") : [];
        return e("div", {
            className: "full-email-form"
        }, e("div", {
            className: "vertically-centered"
        }, e(M, {
            className: a.closeWelcomeModal,
            fill: "empty",
            onClick: n,
            "aria-label": "Close",
            "data-testid": "close-welcome-modal"
        }, e(ce, null)), d ? g ? null : e(J, {
            paddingBottom: 48
        }, e(B, {
            className: a.publicationCoverPhotoCenter,
            src: d,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 840,
            loading: "eager",
            style: T({}, c && c.width && {
                height: `min(168px, ${840*c.height/c.width}px)`
            }),
            imageIsFixedWidth: !0
        })) : I && e(J, {
            paddingBottom: 32
        }, e(B, {
            className: a.publicationLogo,
            src: I,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 84,
            loading: "eager",
            imageIsFixedWidth: !0
        })), e(E, {
            gap: 48
        }, e(C, {
            className: g ? a.column : a.largeCenteredColumn,
            gap: 48
        }, e(C, {
            gap: 16
        }, P ? e(f.H3, {
            textAlign: g ? "left" : "center",
            font: "pub-headings",
            size: 20,
            lineHeight: 24,
            className: a.coverPrimary,
            textWrap: "balance"
        }, k) : null, A ? e(f.H1, {
            textAlign: g ? "left" : "center",
            font: "display",
            lineHeight: 36,
            className: H(a.coverPrimary, a.bigSubtitle),
            textWrap: "balance"
        }, W) : null, e(f.B2, {
            textAlign: g ? "left" : "center",
            weight: "semibold",
            font: "display",
            size: 17,
            lineHeight: 24,
            className: a.coverSecondary
        }, ge(t, {
            includePrice: !1,
            includeBadge: !0,
            rankingDetailOverrideText: t.rankingDetailFreeSubscriberCount,
            includeRankingDetail: !!h,
            language: z
        }))), e(C, {
            gap: 16
        }, e(re, {
            email: i,
            isWelcomePageColor: !0,
            freeSignup: u,
            freeSignupEmail: _,
            pub: t,
            source: l,
            user: o,
            onConfirmationRequired: t.payments_state === "enabled" ? () => null : void 0,
            onMaybeLater: n,
            onSuccess: p || (() => document.location.href = "/"),
            autoFocus: !0,
            className: H(a.containerClassName, !g && a.centeredColumn),
            promptClassName: a.promptClassName,
            inputClassName: a.inputClassName,
            subscribeButtonClassName: a.subscribeButtonClassName
        }), e(E, {
            gap: 4,
            cursor: "pointer",
            alignItems: "center",
            alignSelf: g ? "start" : "center",
            inline: !0,
            onClick: n
        }, e(f.B3, {
            style: {
                color: "var(--cover_print_secondary)"
            }
        }, m.getSettingFor("welcome_page_opt_out_text") === "No thanks" ? v("No thanks") : (F = m.getSettingFor("welcome_page_opt_out_text")) != null ? F : v("No thanks")), e(Y, {
            height: 18,
            stroke: "var(--cover_print_secondary)",
            strokeWidth: 2
        })))), d && g ? e(C, {
            className: H(a.column, a.hideColumnSmallScreens),
            gap: 32
        }, e(B, {
            className: a.publicationCoverPhotoRight,
            src: d,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 476,
            loading: "eager",
            imageIsFixedWidth: !0
        })) : null), !!(w != null && w.length) && e("div", {
            className: "blurb-buffer"
        }), !!(w != null && w.length) && e(oe, {
            className: "blurbs",
            gap: 20
        }, w.map(r => e(C, {
            gap: 8,
            className: "blurb"
        }, e(f.B4, {
            className: "blurb-text"
        }, e(V, {
            maxLines: 4,
            ellipsesText: "...”",
            text: `“${r.description}”`
        })), e(f.B4, {
            weight: "semibold",
            className: "blurb-text"
        }, r.author_name || r.recommendingPublication.email_from_name || r.recommendingPublication.copyright, ", ", e("a", {
            href: ie(r.recommendingPublication)
        }, r.recommendingPublication.name)))))), e(me, {
            publication: t
        }))
    },
    Yt = ({
        pub: t,
        user: o,
        email: i,
        freeSignup: u,
        freeSignupEmail: _,
        onMaybeLater: n,
        onFreeSignup: p,
        blurbs: s
    }) => {
        var F;
        const l = "cover_page",
            m = ne(le),
            {
                getSettingFor: N
            } = Z(),
            {
                iString: v,
                language: z
            } = X(),
            {
                title: k,
                subtitle: W,
                logoUrl: I,
                coverPhotoUrl: d,
                hideTitle: S,
                hideSubtitle: L
            } = de(t),
            c = d && se(d),
            y = c && c.width / c.height,
            g = !!(y && y < 2),
            P = !S || d && g,
            A = !L || d && g;
        $(() => {
            j(U.FULL_EMAIL_FORM_SHOWN, {
                source: l,
                functional_version: !0,
                version: "large-fonts"
            })
        }, [l]);
        const h = s ? s.filter(r => r.description != "") : [],
            w = N("display_welcome_page_details");
        return e("div", {
            className: "full-email-form"
        }, e("div", {
            className: "vertically-centered"
        }, e(M, {
            className: a.closeWelcomeModal,
            fill: "empty",
            onClick: n,
            "aria-label": "Close",
            "data-testid": "close-welcome-modal"
        }, e(ce, null)), d ? g ? null : e(J, {
            paddingBottom: 48
        }, e(B, {
            className: a.publicationCoverPhotoCenter,
            src: d,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 840,
            loading: "eager",
            style: T({}, c && c.width && {
                height: `min(168px, ${840*c.height/c.width}px)`
            }),
            imageIsFixedWidth: !0
        })) : I && e(J, {
            paddingBottom: 32
        }, e(B, {
            className: a.publicationLogo,
            src: I,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 84,
            loading: "eager",
            imageIsFixedWidth: !0
        })), e(E, {
            gap: 48
        }, e(C, {
            className: g ? a.largeColumn : a.largeCenteredColumn,
            gap: 32
        }, e(C, {
            gap: 16
        }, P ? e(f.H1, {
            textAlign: g ? "left" : "center",
            font: "pub-headings",
            className: H(a.coverPrimary, a.largeHeading),
            textWrap: "balance"
        }, k) : null, A ? e(f.B3, {
            textAlign: g ? "left" : "center",
            font: "display",
            size: 15,
            lineHeight: 20,
            className: H(a.coverSecondary, a.largeSubHeading),
            textWrap: "balance"
        }, W) : null, e(f.B2, {
            textAlign: "left",
            weight: "semibold",
            font: "display",
            size: 17,
            lineHeight: 24,
            className: a.coverSecondary,
            alignSelf: g ? "start" : "center"
        }, ge(t, {
            includePrice: !1,
            includeBadge: !0,
            rankingDetailOverrideText: t.rankingDetailFreeSubscriberCount,
            includeRankingDetail: !!w,
            language: z
        }))), e(C, {
            gap: 16
        }, e(re, {
            email: i,
            isWelcomePageColor: !0,
            freeSignup: u,
            freeSignupEmail: _,
            pub: t,
            source: l,
            user: o,
            onConfirmationRequired: t.payments_state === "enabled" ? () => null : void 0,
            onMaybeLater: n,
            onSuccess: p || (() => document.location.href = "/"),
            autoFocus: !0,
            className: a.containerClassName,
            promptClassName: a.largePromptClassName,
            inputClassName: a.largeInputClassName,
            inputWrapperClassName: a.largeInputWrapperClassName,
            subscribeButtonClassName: a.largeSubscribeButtonClassName
        }), e(E, {
            gap: 4,
            cursor: "pointer",
            alignItems: "center",
            alignSelf: "center",
            inline: !0,
            onClick: n
        }, e(f.B1, {
            size: 20,
            lineHeight: 30,
            weight: "semibold",
            style: {
                color: "var(--cover_print_secondary)"
            }
        }, m.getSettingFor("welcome_page_opt_out_text") === "No thanks" ? v("No thanks") : (F = m.getSettingFor("welcome_page_opt_out_text")) != null ? F : v("No thanks")), e(Y, {
            height: 18,
            stroke: "var(--cover_print_secondary)",
            strokeWidth: 2
        })))), d && g ? e(C, {
            className: H(a.largeColumn, a.hideLargeColumnSmallScreens),
            gap: 32
        }, e(B, {
            className: a.largePublicationCoverPhotoRight,
            src: d,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 568,
            loading: "eager",
            imageIsFixedWidth: !0
        })) : null), !!(h != null && h.length) && e("div", {
            className: "blurb-buffer"
        }), !!(h != null && h.length) && e(oe, {
            className: "blurbs",
            gap: 20
        }, h.map(r => e(C, {
            gap: 8,
            className: "blurb"
        }, e(f.B4, {
            className: "blurb-text"
        }, e(V, {
            maxLines: 4,
            ellipsesText: "...”",
            text: `“${r.description}”`
        })), e(f.B4, {
            weight: "semibold",
            className: "blurb-text"
        }, r.author_name || r.recommendingPublication.email_from_name || r.recommendingPublication.copyright, ", ", e("a", {
            href: ie(r.recommendingPublication)
        }, r.recommendingPublication.name)))))), e(me, {
            publication: t
        }))
    },
    He = ({
        autoFocus: t = !0,
        pub: o,
        user: i,
        email: u,
        freeSignup: _,
        freeSignupEmail: n,
        referralCode: p,
        source: s,
        forceSignup: l,
        submitButtonText: m,
        onMaybeLater: N,
        onFreeSignup: v,
        markAsHidden: z,
        blurbs: k,
        hideBlurbs: W,
        overrideSubtitle: I
    }) => {
        var A;
        const d = ne(le),
            {
                iString: S
            } = X(),
            L = K("referralCode"),
            c = K("refSource"),
            y = S("Learn More"),
            g = Ze(o, {
                params: T(T({
                    utm_source: Re.subscribeEmail,
                    utm_content: Xe.learnMore
                }, L && {
                    referralCode: L
                }), c && {
                    refSource: c
                })
            });
        $(() => {
            s === "subscribe_page" && j(U.SUBSCRIBE_EMAIL_FULL_SCREEN_SHOWN, {
                functional_version: !0
            }), j(U.FULL_EMAIL_FORM_SHOWN, {
                source: s,
                functional_version: !0
            })
        }, [s]);
        const P = k && !W ? k.filter(h => h.description != "") : [];
        return e("div", {
            className: "full-email-form"
        }, e("div", {
            className: "vertically-centered"
        }, N && !o.invite_only && e(M, {
            className: a.closeWelcomeModal,
            fill: "empty",
            onClick: N,
            "aria-label": "Close",
            "data-testid": "close-welcome-modal"
        }, e(ce, null)), e(Zt, {
            pub: o,
            overrideSubtitle: I
        }), o.invite_only && (!i || !i.is_free_subscribed) ? e(fe, {
            onRequest: () => Ne(() =>
                import ("./InviteActions-18313ac1.js"), ["assets/InviteActions-18313ac1.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/CustomerSupportModeForm-3d235c45.js", "assets/free_email_form.module-135823b4.js", "assets/entry-a965ffeb.js", "assets/entry-401840c0.css", "assets/free_email_form-cf4756c6.css", "assets/LockThinIcon-fd5808c3.js", "assets/modal-5dbf091c.js", "assets/x-fc38e969.js", "assets/profile-a781fd85.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/InviteActions-8e8c425e.css"]),
            resolve: h => h.InviteActions,
            module: "./InviteActions",
            pub: o,
            user: i,
            freeSignupEmail: n
        }) : e(ve, null, e(oe, {
            justifyContent: "center",
            style: {
                width: "100%"
            }
        }, e(C, {
            gap: 4,
            style: {
                width: "100%",
                maxWidth: "380px"
            }
        }, e(re, {
            email: u,
            isWelcomePageColor: !0,
            freeSignup: _,
            freeSignupEmail: n,
            markWelcomePageAsHidden: z,
            pub: o,
            referralCode: p,
            source: s,
            submitButtonText: m,
            user: i,
            onConfirmationRequired: o.payments_state === "enabled" ? () => null : void 0,
            onMaybeLater: N,
            onSuccess: v || (() => document.location.href = "/"),
            autoFocus: t
        }))), !l && (N ? e("a", {
            onClick: h => h.preventDefault(),
            className: "no-styles"
        }, e(M, {
            priority: "secondary-theme",
            fill: "empty",
            className: a.maybeLater,
            onClick: N,
            "data-testid": "maybeLater"
        }, d.getSettingFor("welcome_page_opt_out_text") === "No thanks" ? S("No thanks") : (A = d.getSettingFor("welcome_page_opt_out_text")) != null ? A : S("No thanks"), e(Y, null))) : e(M, {
            priority: "secondary-theme",
            fill: "empty",
            className: a.maybeLater,
            href: g,
            localNavigation: !1
        }, y, e(Y, null)))), !!(P != null && P.length) && e("div", {
            className: "blurb-buffer"
        }), !!(P != null && P.length) && e(oe, {
            className: "blurbs",
            gap: 20
        }, P.map(h => e(C, {
            gap: 8,
            className: "blurb"
        }, e(f.B4, {
            className: "blurb-text"
        }, e(V, {
            maxLines: 4,
            ellipsesText: "...”",
            text: `“${h.description}”`
        })), e(f.B4, {
            weight: "semibold",
            className: "blurb-text"
        }, h.author_name || h.recommendingPublication.email_from_name || h.recommendingPublication.copyright, ", ", e("a", {
            href: ie(h.recommendingPublication)
        }, h.recommendingPublication.name)))))), e(me, {
            themed: !0,
            publication: o
        }))
    },
    de = (t, o) => {
        var N;
        const {
            getConfigFor: i
        } = Ee(), u = i("section_specific_welcome_pages");
        let _, n, p, s, l, m;
        return u && t.section ? (_ = t.section.name, n = t.section.description, p = (N = t.section.logo_url) != null ? N : t.logo_url, s = t.section.cover_photo_url, l = !!(s && t.section.hide_intro_title), m = !!(s && t.section.hide_intro_subtitle)) : (_ = t.name, n = t.hero_text, p = t.logo_url, s = t.cover_photo_url, l = !!(s && t.hide_intro_title), m = !!(s && t.hide_intro_subtitle)), o && (n = o), {
            title: _,
            subtitle: n,
            logoUrl: p,
            coverPhotoUrl: s,
            hideTitle: l,
            hideSubtitle: m
        }
    },
    Zt = ({
        pub: t,
        overrideSubtitle: o
    }) => {
        const {
            getSettingFor: i
        } = Z(), {
            language: u
        } = X(), {
            title: _,
            subtitle: n,
            logoUrl: p,
            coverPhotoUrl: s,
            hideTitle: l,
            hideSubtitle: m
        } = de(t, o), N = i("display_welcome_page_details"), v = s && se(s);
        return e(ve, null, s ? e(B, {
            className: "publication-cover-photo",
            src: s,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 1360,
            loading: "eager",
            style: T({}, v && v.width && {
                height: `min(35vh, ${680*v.height/v.width}px)`
            })
        }) : p && e(B, {
            className: "publication-logo",
            src: p,
            imageProps: {
                quality: "auto:best"
            },
            maxWidth: 264,
            loading: "eager",
            imageIsFixedWidth: !0
        }), !l && e("h1", {
            className: H("publication-name", {
                "no-logo": !p,
                "with-cover": s
            }, a.balancedText)
        }, _), !m && n && e("p", {
            className: H("publication-tagline with-cover", {
                verbose: !0,
                "with-cover": s
            }, a.balancedText)
        }, n), e("div", {
            className: "publication-meta"
        }, ge(t, {
            includePrice: !1,
            includeBadge: !0,
            rankingDetailOverrideText: t.rankingDetailFreeSubscriberCount,
            includeRankingDetail: !!N,
            language: u
        })))
    };
export {
    He as F, da as I, ga as a, ge as g
};