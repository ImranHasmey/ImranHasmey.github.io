var Wn = Object.defineProperty,
    Hn = Object.defineProperties;
var Vn = Object.getOwnPropertyDescriptors;
var at = Object.getOwnPropertySymbols;
var bo = Object.prototype.hasOwnProperty,
    yo = Object.prototype.propertyIsEnumerable;
var St = (o, n, t) => n in o ? Wn(o, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[n] = t,
    S = (o, n) => {
        for (var t in n || (n = {})) bo.call(n, t) && St(o, t, n[t]);
        if (at)
            for (var t of at(n)) yo.call(n, t) && St(o, t, n[t]);
        return o
    },
    A = (o, n) => Hn(o, Vn(n));
var it = (o, n) => {
    var t = {};
    for (var a in o) bo.call(o, a) && n.indexOf(a) < 0 && (t[a] = o[a]);
    if (o != null && at)
        for (var a of at(o)) n.indexOf(a) < 0 && yo.call(o, a) && (t[a] = o[a]);
    return t
};
var te = (o, n, t) => (St(o, typeof n != "symbol" ? n + "" : n, t), t);
var R = (o, n, t) => new Promise((a, i) => {
    var r = c => {
            try {
                s(t.next(c))
            } catch (d) {
                i(d)
            }
        },
        l = c => {
            try {
                s(t.throw(c))
            } catch (d) {
                i(d)
            }
        },
        s = c => c.done ? a(c.value) : Promise.resolve(c.value).then(r, l);
    s((t = t.apply(o, n)).next())
});
import {
    _ as lt,
    L as Mt,
    B as pt,
    u as ct,
    b as zn
} from "./user-e16f1619.js";
import {
    f as Wo,
    a as Ho,
    c as Vo,
    b as zo
} from "./profile-a781fd85.js";
import {
    k as Q,
    y as e,
    gK as Yn,
    K as Gn,
    u as ht,
    U as re,
    aa as ye,
    i as H,
    ag as Jn,
    C as Ut,
    p as V,
    a7 as Ht,
    h as O,
    gL as Qn,
    gM as Kn,
    r as Ce,
    g9 as vo,
    t as X,
    E as ge,
    dO as Xn,
    cq as Fe,
    b$ as Yo,
    s as Ee,
    d as se,
    aq as qn,
    gN as Zn,
    d$ as Rt,
    D as Te,
    H as ea,
    aL as gt,
    aI as ta,
    fM as oa,
    m as na,
    l as aa,
    j as ia,
    eN as ra,
    aj as He,
    ea as Vt,
    bm as sa,
    a3 as Be,
    au as la,
    ey as ca,
    et as da,
    ds as Ie,
    x as he,
    b8 as zt,
    o as Go,
    dY as ma,
    bJ as Jo,
    gG as ua,
    fw as pa,
    aX as Qo,
    dJ as ha,
    ap as ft,
    e as dt,
    gO as ga,
    a6 as fa,
    dL as _a,
    gP as Nt,
    aD as Dt,
    em as ba,
    aF as ya,
    fB as va,
    A as wo,
    gQ as wa,
    bC as Ca,
    bo as xa,
    bA as ka,
    fY as Sa,
    c8 as Pe,
    ck as Na,
    ao as We,
    q as Pa,
    cl as Ta,
    cj as Ia,
    az as Ba,
    gR as Ea,
    fP as La,
    gH as Ma,
    fl as Ua,
    fa as Ra,
    br as Co,
    gS as Da,
    aV as xo,
    bU as Fa,
    M as $a,
    al as Aa,
    b3 as ko,
    bg as So,
    gT as ja,
    ar as Oa,
    as as Wa,
    cG as No,
    b0 as Ha,
    b1 as Va,
    at as za
} from "./tracking-376cff7a.js";
import {
    c as q,
    a as g,
    F as $,
    T as m,
    O as W,
    b as ve,
    j as Ye,
    u as xe,
    B as Yt,
    e as Ya,
    S as Gt,
    h as Ko,
    w as Ga
} from "./FlexBox-1a755411.js";
import {
    M as Pt
} from "./match-1ace1432.js";
import {
    M as Le
} from "./Metadata-be2b4cf2.js";
import {
    C as Ja
} from "./CustomDomainLoginHelper-e21df46f.js";
import {
    F as Qa
} from "./footer-1f794b6e.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    g as Ka,
    a as Xo
} from "./IntroPopup-dd5900b8.js";
import {
    M as Ft,
    C as Xa,
    b as qa
} from "./Banner-e2e1e503.js";
import {
    D as Za
} from "./Divider-0a4efe7e.js";
import {
    N as ei
} from "./newsletter_item_list-60e16b42.js";
import {
    P as ti
} from "./Providers-8e1c708e.js";
import {
    o as oi,
    e as ni,
    T as ai,
    S as ii,
    M as ri
} from "./share_dialog-b74d3337.js";
import {
    u as Jt,
    T as mt,
    B as si,
    C as li
} from "./HoverCard-cbdee1d2.js";
import {
    u as ci
} from "./ProfileSetupToast-dc3875c3.js";
import {
    o as di
} from "./transitions-95829b86.js";
import {
    aM as qo,
    aN as mi,
    aE as Zo,
    V as ui,
    p as pi,
    o as hi,
    C as gi,
    j as fi,
    aO as _i,
    aP as bi,
    aQ as yi,
    h as vi,
    aR as rt,
    aS as wi
} from "./homepage_hooks-47e7a4e7.js";
import {
    C as en,
    a as Ci,
    b as tn,
    c as xi,
    d as ki
} from "./CommunityPostView-c90ac03a.js";
import {
    C as Si,
    W as on,
    T as Ni,
    Q as Pi
} from "./ChatAppUpsell-065f4983.js";
import {
    a as Ti,
    M as nn,
    b as Ii
} from "./Modal-ab851ad1.js";
import {
    u as an,
    r as rn
} from "./useResponsive-08e338a7.js";
import {
    r as le,
    C as Po
} from "./_baseEach-63ad03e0.js";
import {
    an as Bi,
    d as Ei
} from "./ProfileHoverCard-c8bfb61a.js";
import {
    N as Qt,
    P as Li,
    j as sn,
    O as ln,
    Q as Mi,
    V as To,
    W as $t,
    D as Ui,
    E as Ri,
    F as Di,
    X as Fi,
    Y as $i
} from "./post-759b177e.js";
import {
    V as Ve
} from "./arrow-right-c1e00e5a.js";
import {
    r as Ai
} from "./routeClick-cd1b3f9b.js";
import {
    A as ji
} from "./Avatar-723c95b0.js";
import {
    P as cn,
    A as Io
} from "./_defineProperty-105d261c.js";
import {
    c as dn,
    V as Oi
} from "./AlertDialog-d9b964a5.js";
import {
    A as Kt,
    P as Xt,
    c as Wi,
    I as Bo,
    W as Hi,
    R as Vi,
    a as zi,
    d as Yi,
    H as Gi,
    b as Ji,
    S as Tt,
    e as Qi
} from "./recommend_linked_publication_modal-65d42e3d.js";
import {
    F as mn,
    s as Ki,
    g as Xi,
    b as Eo
} from "./free_email_form-1d3fc4be.js";
import {
    v as qi,
    g as Zi,
    S as Lo
} from "./NewsletterIcon-ea4c71c4.js";
import {
    c as un
} from "./tiktok-0df651b8.js";
import {
    b as qt,
    g as er,
    a as tr,
    P as or
} from "./post_metadata-a1624a3e.js";
import {
    B as It,
    C as nr
} from "./CreditCardIcon-d54e1807.js";
import {
    F as Zt,
    u as ar,
    b as ir,
    d as rr,
    S as sr
} from "./free_email_form.module-135823b4.js";
import {
    A as lr,
    y as cr,
    q as dr
} from "./Attachments-84a6967e.js";
import {
    F as mr
} from "./FacebookIcon-6ed576c8.js";
import {
    R as ur
} from "./RewardBox-996ae7a7.js";
import {
    T as ut
} from "./TextInput-c03c69d6.js";
import {
    P as pr
} from "./plus-3216546d.js";
import {
    U as hr,
    C as gr,
    R as fr
} from "./RadioField-2053aecf.js";
import {
    c as pe,
    M as $e
} from "./Logo-ce9a0a76.js";
import {
    X as pn
} from "./x-fc38e969.js";
import {
    L as _r
} from "./link-90872791.js";
import {
    p as br
} from "./pick-4ce81580.js";
import {
    T as hn
} from "./Textarea-ed5c1b37.js";
import {
    F as yr
} from "./FilePicker-f297f9b0.js";
import {
    T as vr
} from "./Tooltip-86d56346.js";
import {
    S as wr
} from "./Progress-629d3819.js";
import {
    j as Cr
} from "./jsesc-a42a28f2.js";
import {
    E as xr
} from "./experimentsAndSiteConfigContext-a6aeed82.js";
import {
    a as kr
} from "./structuredData-e7abba32.js";
import {
    h as Sr,
    a as Nr
} from "./usePostSelectionHighlight-8be18fda.js";
import {
    D as Pr
} from "./download-8a01f574.js";
import {
    S as Tr
} from "./setup_all_podcasts-80ebcf8b.js";
import {
    R as Mo
} from "./Radio-aeda31f8.js";
import {
    C as Ir
} from "./CookieConsentFooter-40a5a19f.js";
import "./SubstackIcon-eb634931.js";
import "./app_install_modal-64fe70fd.js";
import "./CloseIcon-90eee5fe.js";
import "./RightArrowIcon-8574f1b5.js";
import "./entry-a965ffeb.js";
import "./UserBadgeIconOnly-381365d6.js";
import "./object-6a0ccbd3.js";
import "./NavbarUserWidget-29725e70.js";
import "./modal-5dbf091c.js";
import "./CustomerSupportModeForm-3d235c45.js";
import "./user_indicator-80bd5739.js";
import "./Portal-f12cb990.js";
import "./_baseIteratee-fbbabc87.js";
import "./isObject-a54dc090.js";
import "./toInteger-b5ddb910.js";
import "./toNumber-3c911b0f.js";
import "./dropdown_menu_typed-c164b42b.js";
import "./search-166a516b.js";
import "./chevron-down-6d7770f2.js";
import "./publicationUserSettings-f18fba64.js";
import "./Menu-5342012d.js";
import "./react-laag.esm-f47be925.js";
import "./transition-c6a4911b.js";
import "./chevron-right-925bdc12.js";
import "./ShareableImageModal-0bb2a3c2.js";
import "./Switch-b8853cbf.js";
import "./preflight-1c24e477.js";
import "./ShareAssetButtons-11c2be43.js";
import "./PubAccentTheme-61cfc74b.js";
import "./overflow_menu-5db2190f.js";
import "./mousetrap-d052d743.js";
import "./postPingbackTracker-c6b6d289.js";
import "./publication-6fec99b2.js";
import "./Select-f97196dc.js";
import "./debounce-f31b8252.js";
import "./publication-1bbad178.js";
import "./SubstackLogoIcon-3ca41075.js";
import "./traverse-bb97748e.js";
import "./LockThinIcon-fd5808c3.js";
import "./textarea-b8862a3a.js";
import "./react-6ae938e8.js";
import "./linkify-91f62846.js";
import "./podcast_apps-4f303ac3.js";
import "./CommentBody-36a2d638.js";
import "./mention-8372bb04.js";
import "./link_copy_toast-1ffe3674.js";
import "./user-dd90bf1b.js";
import "./browser-368544f1.js";
import "./UserBadge-a694a663.js";
import "./uniq-0ace9f40.js";
import "./_baseUniq-53539133.js";
import "./TextLink-9c0e1c8b.js";
import "./isOnReader-b27f4ba9.js";
import "./FollowPrompt-e47c3e0a.js";
import "./align-left-a2ee54ed.js";
import "./unlock-12d676d9.js";
import "./facepile-b2a8f169.js";
import "./partition-c66fa872.js";
import "./_createAggregator-deb99b9c.js";
import "./info-e9da097c.js";
import "./ReaderReferralTiers-be527730.js";
import "./arrow-left-e952265a.js";
import "./decodeHtmlEntitiesFast-d19e2d0c.js";
import "./NoteReplyIcon-3ff0a340.js";
import "./Unit-93a04fbc.js";
import "./formatNumber-b899aca4.js";
import "./ImageViewerModal-9148cb63.js";
import "./VideoVerticalMenu-5e94a5f9.js";
import "./chat-f6285661.js";
import "./UpgradeToDmModal-6dec1ea0.js";
import "./Recipe-39f1ef19.js";
import "./BurgerIcon-c6dd2664.js";
import "./MathJax-7a5e2dbd.js";
import "./omit-c350a7df.js";
import "./_assignValue-747f8933.js";
import "./_baseAssignValue-2cb42459.js";
import "./_getAllKeysIn-e3f3c4d3.js";
import "./_copyArray-6a5e39ab.js";
import "./last-cbcbf07b.js";
import "./_flatRest-c8d3bc54.js";
import "./sortBy-97ae0487.js";
import "./PageMetaData-6ce42dce.js";
import "./groupBy-ab90e519.js";
import "./chunk-4b6c9fda.js";
import "./findIndex-58c4c004.js";
import "./TabBar-a04beb26.js";
import "./keyBy-bc7e2f81.js";
import "./Field-172b4326.js";
import "./_basePickBy-98e85803.js";
import "./cookie_constants-def411e9.js";
(function() {
    try {
        var o = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[n] = "5644d33a-ed92-469f-a3e7-ccca5c755622", o._sentryDebugIdIdentifier = "sentry-dbid-5644d33a-ed92-469f-a3e7-ccca5c755622")
    } catch (t) {}
})();
const Br = "_pageContainer_k55hq_1",
    Er = {
        pageContainer: Br
    };
class Bt extends Q {
    render({
        html: n,
        children: t,
        metadata: a
    }) {
        return e("div", {
            className: q(Er.pageContainer, "container-border")
        }, e(Le, S({}, a)), e("div", {
            className: "container"
        }, e("div", {
            className: "page typography"
        }, t, e("div", {
            className: "body markup",
            dangerouslySetInnerHTML: {
                __html: n
            }
        }))))
    }
}
const Lr = "_container_16312_1",
    Mr = "_newsletterList_16312_10",
    Ur = "_accountLink_16312_14",
    Et = {
        container: Lr,
        newsletterList: Mr,
        accountLink: Ur
    },
    Rr = ({
        pub: o,
        user: n
    }) => {
        const t = Yn({
            pub: o,
            includeMainPub: !0,
            excludePodcasts: Gn({
                pub: o
            })
        }).map(a => A(S({}, a), {
            linkUrl: ht(a.linkUrl, {
                utm_source: re.newsletterPage
            }),
            selected: a.defaultOn
        }));
        return t.length === 0 ? (typeof window != "undefined" && (window.location.href = ye(o)), e("div", null, "loading...")) : e("div", {
            className: q("page", "typography", Et.container)
        }, e(g, null, e($, {
            justifyContent: "space-between",
            alignItems: "center"
        }, e(g, {
            gap: 8,
            paddingBottom: 40,
            paddingTop: 48
        }, e(m.H2, {
            color: "pub-primary-text"
        }, "Newsletters"), e(m.B3, {
            color: "pub-secondary-text"
        }, "Get the best of ", o.name, " in your inbox.", n != null && n.is_subscribed ? e(H, null, " ", "You can manage your subscription in your ", e("a", {
            className: Et.accountLink,
            href: Jn(o),
            native: !0
        }, "account settings"), ".") : "")), (!n || !n.is_subscribed) && e(W, {
            priority: "primary-theme",
            href: Ut(o, {
                addBase: !0,
                utm_source: re.newsletterPage
            }),
            localNavigation: !1
        }, "Subscribe")), e(Za, {
            priority: "detail-themed"
        }), e("div", {
            className: Et.newsletterList
        }, e(ei, {
            newsletters: t,
            hideLinks: !1,
            justifyItems: "start"
        }))))
    };

function Dr() {
    return e(Mt, {
        module: "../feed/PublicationPage",
        onRequest: () => lt(() =>
            import ("./PublicationPage-6463efb7.js"), ["assets/PublicationPage-6463efb7.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/publication-6fec99b2.js", "assets/homepage_hooks-47e7a4e7.js", "assets/_defineProperty-105d261c.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/react-laag.esm-f47be925.js", "assets/transition-c6a4911b.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/debounce-f31b8252.js", "assets/toNumber-3c911b0f.js", "assets/_baseEach-63ad03e0.js", "assets/x-fc38e969.js", "assets/HoverCard-cbdee1d2.js", "assets/useResponsive-08e338a7.js", "assets/HoverCard-41ea4b50.css", "assets/_baseIteratee-fbbabc87.js", "assets/CloseIcon-90eee5fe.js", "assets/_baseEach-6c7a4143.css", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/Modal-ab851ad1.js", "assets/Modal-faa641cb.css", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/publication-1bbad178.js", "assets/share_dialog-b74d3337.js", "assets/free_email_form-1d3fc4be.js", "assets/profile-a781fd85.js", "assets/free_email_form.module-135823b4.js", "assets/entry-a965ffeb.js", "assets/entry-401840c0.css", "assets/free_email_form-cf4756c6.css", "assets/Menu-5342012d.js", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/modal-5dbf091c.js", "assets/Select-f97196dc.js", "assets/chevron-down-6d7770f2.js", "assets/Select-cd38999e.css", "assets/dropdown_menu_typed-c164b42b.js", "assets/TextInput-c03c69d6.js", "assets/ProfileHoverCard-c8bfb61a.js", "assets/UserBadge-a694a663.js", "assets/UserBadge-fb9c174e.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/link-90872791.js", "assets/download-8a01f574.js", "assets/Portal-f12cb990.js", "assets/Metadata-be2b4cf2.js", "assets/SubstackLogoIcon-3ca41075.js", "assets/traverse-bb97748e.js", "assets/plus-3216546d.js", "assets/LockThinIcon-fd5808c3.js", "assets/textarea-b8862a3a.js", "assets/homepage_hooks-f7a72a82.css", "assets/Placeholders-749db177.js", "assets/Unit-93a04fbc.js", "assets/isOnReader-b27f4ba9.js", "assets/CommentItem-3d2a8b65.js", "assets/Attachments-84a6967e.js", "assets/CommentBody-36a2d638.js", "assets/CommentBody-c55cfff6.css", "assets/AlertDialog-d9b964a5.js", "assets/AlertDialog-502ee8c4.css", "assets/decodeHtmlEntitiesFast-d19e2d0c.js", "assets/keyBy-bc7e2f81.js", "assets/_baseAssignValue-2cb42459.js", "assets/_createAggregator-deb99b9c.js", "assets/podcast_apps-4f303ac3.js", "assets/podcast_apps-184969d7.css", "assets/Textarea-ed5c1b37.js", "assets/TextLink-9c0e1c8b.js", "assets/TextLink-f399b628.css", "assets/Attachments-858e615b.css", "assets/formatNumber-b899aca4.js", "assets/NoteReplyIcon-3ff0a340.js", "assets/facepile-b2a8f169.js", "assets/user-dd90bf1b.js", "assets/facepile-0c1de29e.css", "assets/Close-33c005ce.js", "assets/InviteFriendModal-8cee0718.js", "assets/NoteShareModal-7b4108ff.js", "assets/InviteFriendModal-bd750545.css", "assets/twitter-aeef561b.js", "assets/link_copy_toast-1ffe3674.js", "assets/util-typed-a303dda9.js", "assets/user_indicator-80bd5739.js", "assets/toInteger-b5ddb910.js", "assets/search-166a516b.js", "assets/user_indicator-c1a5a8fb.css", "assets/useConfirm-05af6f82.js", "assets/Switch-b8853cbf.js", "assets/preflight-1c24e477.js", "assets/sliders-horizontal-93e5a9a7.js", "assets/arrays-80a5aec5.js", "assets/Placeholders-0acb1fa6.css", "assets/Theme-34933114.js", "assets/useInfiniteScroll-da2d8ccf.js", "assets/uniq-0ace9f40.js", "assets/_baseUniq-53539133.js", "assets/PublicationPage-32404775.css"]),
        resolve: o => o.PublicationFeedPage,
        whileLoading: e(Fr, null)
    })
}

function Fr() {
    return e(Ye, null, e(ve, {
        bg: "primary",
        style: {
            minHeight: 800
        }
    }))
}

function $r() {
    const o = Jt();
    return V(() => {
        const n = new URL(location.toString());
        n.searchParams.get("founding-member-confirmation") && (n.searchParams.delete("founding-member-confirmation"), history.replaceState({}, "", n), o.popToast(a => e(mt, A(S({}, a), {
            text: "You upgraded to a founding tier subscription. Thank you!"
        }))))
    }, []), null
}
const Ar = "_pageContainer_11jlv_1",
    jr = "_layoutTop_11jlv_9",
    Or = "_layoutCentered_11jlv_13",
    Wr = "_header_11jlv_19",
    Hr = "_logo_11jlv_25",
    st = {
        pageContainer: Ar,
        layoutTop: jr,
        layoutCentered: Or,
        header: Wr,
        logo: Hr
    };

function eo({
    children: o,
    pub: n,
    user: t,
    showHeader: a,
    layoutTop: i
}) {
    return e("div", {
        className: q(st.pageContainer, i ? st.layoutTop : st.layoutCentered)
    }, e("div", {
        className: st.header
    }, a && n && t && e(Ft, {
        pub: n,
        user: t,
        hideSections: !0,
        hideTitle: !0
    })), o)
}

function Vr({
    publication: o,
    communityAction: n,
    user: t,
    showHeader: a
}) {
    return e(eo, {
        pub: o,
        user: t,
        showHeader: a
    }, e(g, {
        flex: "grow",
        alignSelf: "stretch",
        justifyContent: "center"
    }, e(ve, {
        flex: "grow",
        justifyContent: "center",
        paddingBottom: 56
    }, e(Si, {
        publication: o,
        communityAction: n,
        publicationAuthor: o.author || {
            id: o.author_id || 0,
            name: o.author_name || "",
            photo_url: o.author_photo_url
        },
        utm_campaign: Ht.threadsPage
    }))))
}

function zr({
    publication: o,
    communityAction: n,
    user: t,
    layoutTop: a,
    appModalOpenByDefault: i
}) {
    const r = an(),
        [l, s] = O(!r && i),
        c = Ht.threadPage,
        {
            iString: d
        } = xe(),
        u = e(g, {
            gap: 8
        }, e(en, {
            href: Qn({
                postId: n.communityPost.id,
                utm_source: re.chatPostLanding,
                redirect: "app-store",
                utm_campaign: c
            }),
            onClick: r ? null : p => {
                p.preventDefault(), s(!0)
            }
        }, d("Open in app")), e(on, {
            publication: o,
            postId: n.communityPost.id,
            text: d("Or join the conversation on web"),
            source: "post-permalink"
        }));
    return e(eo, {
        pub: o,
        user: t,
        layoutTop: a
    }, e(g, {
        flex: "grow",
        alignSelf: "stretch",
        justifyContent: "center"
    }, e(ve, {
        flex: "grow",
        justifyContent: "center",
        paddingBottom: 16
    }, e(g, {
        style: {
            maxWidth: 580
        },
        flex: "grow",
        justifyContent: "center"
    }, n.status === "open" ? e(Ci, {
        communityPost: n.communityPost,
        author: n.author,
        withAttribution: !0,
        extras: r ? null : u,
        flex: "auto",
        isReadOnly: !0
    }) : e(g, null, e(tn, {
        author: n.author,
        extras: r ? null : u,
        commenters: n.communityPost.recent_commenters,
        count: n.communityPost.comment_count,
        audience: n.communityPost.audience
    })))), r && e(g, {
        sizing: "border-box",
        borderTop: "detail-themed",
        paddingY: 16,
        alignSelf: "stretch"
    }, u), e(Ni, {
        pub: o,
        communityAction: n
    })), e(gn, {
        utm_campaign: c,
        isOpen: l,
        postId: n.communityPost.id,
        onClose: () => s(!1),
        subdomain: o.subdomain
    }))
}

function Yr({
    publication: o,
    communityAction: n,
    user: t,
    layoutTop: a,
    appModalOpenByDefault: i
}) {
    var _;
    const {
        iString: r
    } = xe(), l = an(), [s, c] = O(!l && i), d = Ht.commentPage, u = (_ = n.communityComment.parent_id) != null ? _ : n.communityComment.id, p = n.communityComment.parent_id ? n.communityComment.id : void 0, f = n.communityComment.post_id, h = e(g, {
        gap: 8
    }, e(en, {
        href: Kn({
            commentId: u,
            targetReplyId: p,
            utm_source: re.chatPostLanding,
            redirect: "app-store",
            utm_campaign: d
        }),
        onClick: l ? null : b => {
            b.preventDefault(), c(!0)
        }
    }, r("Open in app")), e(on, {
        publication: o,
        postId: f,
        commentId: u,
        targetReplyId: p,
        showTarget: p ? !0 : void 0,
        text: r("Or join the conversation on web"),
        source: "post-permalink"
    }));
    return e(eo, {
        pub: o,
        user: t,
        layoutTop: a
    }, e(g, {
        flex: "grow",
        alignSelf: "stretch",
        justifyContent: "center"
    }, e(ve, {
        flex: "grow",
        justifyContent: "center",
        paddingBottom: 16
    }, e(g, {
        style: {
            maxWidth: 580
        },
        flex: "grow",
        justifyContent: "center"
    }, n.status === "VISIBLE" || !n.status ? e(xi, {
        chatPublicationId: o.id,
        communityComment: n.communityComment,
        author: n.author,
        extras: l ? null : h,
        isReadOnly: !0,
        isBanned: !1,
        quoteReply: n.quote,
        chatAuthorNameAttribution: o.author_name,
        flex: "auto"
    }) : n.status === "PAID_SUBSCRIPTION_REQUIRED" || n.status === "FOUNDING_SUBSCRIPTION_REQUIRED" ? e(g, null, e(tn, {
        author: n.author,
        extras: l ? null : h,
        commenters: n.communityComment.recent_commenters,
        count: n.communityComment.reply_count,
        audience: n.status === "FOUNDING_SUBSCRIPTION_REQUIRED" ? "only_founding" : "only_paid"
    })) : e(g, null, e(ki, {
        author: n.author,
        extras: l ? null : h,
        commenters: n.communityComment.recent_commenters,
        count: n.communityComment.reply_count
    })))), l && e(g, {
        sizing: "border-box",
        borderTop: "detail-themed",
        paddingY: 16,
        alignSelf: "stretch"
    }, h)), e(gn, {
        utm_campaign: d,
        isOpen: s,
        postId: f,
        commentId: u,
        targetReplyId: p,
        onClose: () => c(!1),
        subdomain: o.subdomain
    }))
}

function gn(l) {
    var s = l,
        {
            postId: o,
            utm_campaign: n,
            subdomain: t,
            commentId: a,
            targetReplyId: i
        } = s,
        r = it(s, ["postId", "utm_campaign", "subdomain", "commentId", "targetReplyId"]);
    const {
        iString: c
    } = xe();
    return e(nn, S({}, r), e(Ti, {
        title: c("Open in the Substack app"),
        includeClose: !0,
        onClose: r.onClose,
        bottomBorder: !0
    }), e(g, {
        paddingY: 32,
        paddingX: 40
    }, e(Pi, {
        utm_campaign: n,
        postId: o,
        subdomain: t,
        commentId: a,
        targetReplyId: i
    })))
}
const Gr = "_heroText_w6qzy_1",
    Jr = "_container_w6qzy_5",
    Uo = {
        heroText: Gr,
        container: Jr
    };

function Qr(o) {
    if (typeof window == "undefined") return !0;
    const n = document.createElement("div");
    n.innerHTML = o;
    for (let t = n.childNodes.length - 1; t >= 0; t--) {
        const a = n.childNodes[t];
        if (vo(a, "button-wrapper") || vo(a, "subscription-widget-wrap")) return !1
    }
    return !0
}
const Kr = ({
    pub: o,
    user: n,
    freeSignup: t,
    freeSignupEmail: a
}) => {
    const i = o.payments_state === "enabled" && (n != null && n.is_free_subscribed) && !(n != null && n.is_subscribed) ? "paid_upsell" : "free_upsell";
    return V(() => {
        X(ge.ABOUT_PAGE_END_CTA_RENDERED, {
            pub_id: o.id,
            type: i
        })
    }, []), e(H, null, e(Ve, {
        onVisible: () => {
            X(ge.ABOUT_PAGE_END_CTA_SEEN, {
                pub_id: o.id,
                type: i
            })
        }
    }), e(g, {
        alignItems: "center",
        gap: 16,
        padding: 24,
        className: q(Uo.container, "end-cta-container")
    }, o.author_photo_url ? e(ji, {
        imageUrl: o.author_photo_url,
        size: 64
    }) : o.logo_url ? e(cn, {
        logoUrl: o.logo_url,
        size: 64,
        radius: "sm"
    }) : null, e(g, {
        alignItems: "center"
    }, e(m.H2, {
        lineHeight: 30,
        align: "center",
        color: "pub-primary-text"
    }, "Subscribe to ", o.name), o.hero_text && e(m.Meta, {
        size: 12,
        className: Uo.heroText,
        align: "center",
        color: "pub-secondary-text"
    }, o.hero_text)), e(Qt, {
        pub: o,
        user: n,
        freeSignup: t,
        freeSignupEmail: a,
        isStatic: !1,
        source: "about-page-end-cta"
    })))
};

function Xr({
    pub: o,
    user: n,
    freeSignup: t,
    freeSignupEmail: a,
    subscribeContent: i
}) {
    return typeof i != "string" ? e("div", {
        className: "content-about-silhouette"
    }, e("div", {
        className: "content-about-silhouette-line"
    }), e("div", {
        className: "content-about-silhouette-line"
    }), e("div", {
        className: "content-about-silhouette-line"
    }), e("div", {
        className: "content-about-silhouette-line"
    }), e("div", {
        className: "content-about-silhouette-line"
    })) : e("div", {
        className: "content-about"
    }, e(Li, {
        html: i,
        pub: o,
        user: n,
        freeSignup: t,
        freeSignupEmail: a,
        isAboutPage: !0
    }))
}

function qr({
    pub: o,
    people: n
}) {
    const t = rn.useMediaQuery({
            maxWidth: 540
        }),
        a = t ? [
            []
        ] : [
            [],
            []
        ];
    for (let i = 0; i < n.length; ++i) a[t ? 0 : i % 2].push(n[i]);
    return e("div", {
        className: "content-people"
    }, a.map(i => e("div", {
        className: "people-column"
    }, i.map(r => e("div", {
        className: "content-person",
        onclick: l => Ai(l, Xn(r, o, {
            utm_source: re.aboutPage
        }), {
            native: !0
        })
    }, e(Bi, {
        subject: r,
        profile: r,
        utmSource: "about-page"
    }))))))
}
class Zr extends Q {
    constructor(n, t) {
        super(n, t), this.state = {
            subscribeContent: n.subscribeContent,
            people: n.people
        }
    }
    componentDidMount() {
        return R(this, null, function*() {
            this.loadPeople(), this.loadAbout()
        })
    }
    loadAbout() {
        return R(this, null, function*() {
            if (this.state.subscribeContent !== "") try {
                const {
                    body: n
                } = yield le.get("/api/v1/publication/subscribe_content");
                this.setState({
                    subscribeContent: n
                })
            } catch (n) {
                console.error("Failed to load about content:", n)
            }
        })
    }
    loadPeople() {
        return R(this, null, function*() {
            if (!this.state.people) try {
                const {
                    body: n
                } = yield le.get("/api/v1/publication/users/ranked").query({
                    public: !0
                });
                this.setState({
                    people: n
                })
            } catch (n) {
                console.error("Failed to load people:", n)
            }
        })
    }
    render({
        pub: n,
        user: t,
        freeSignup: a,
        freeSignupEmail: i,
        metadata: r
    }, {
        subscribeContent: l,
        people: s,
        tabs: c,
        tab: d
    }) {
        const u = (!t || !qo(t, n)) && Qr(l);
        return e("div", {
            className: "page typography about-page typography post"
        }, r && e(Le, S({}, r)), e("div", {
            className: "container"
        }, (t == null ? void 0 : t.is_contributor) && e(si, {
            variant: "themed-secondary",
            href: Ce("/publish/settings/edit", {
                title: "About page",
                bodyField: "subscribe_content",
                redirect: document.location.href
            }),
            localNavigation: !1,
            leftIcon: e(dn, {
                size: 20
            })
        }, e(m, null, "Edit")), e("div", {
            className: "about-content-wrap"
        }, e(Xr, {
            pub: n,
            user: t,
            freeSignup: a,
            freeSignupEmail: i,
            subscribeContent: l
        })), u ? e(Kr, {
            pub: n,
            user: t,
            freeSignup: a,
            freeSignupEmail: i
        }) : null, (s != null ? s : []).length > 0 && e(g, {
            gap: 24
        }, e("h3", {
            className: "about-page-section-title"
        }, "People"), e(qr, {
            pub: n,
            people: s
        }))))
    }
}
const es = "_container_e1geb_1",
    ts = {
        container: es
    };

function Oe({
    children: o,
    title: n,
    pub: t,
    user: a,
    freeSignup: i,
    freeSignupEmail: r,
    sort: l,
    search: s,
    newPosts: c,
    topPosts: d,
    communityPosts: u,
    searchPosts: p,
    sectionId: f,
    isPodcast: h,
    metadata: _
}) {
    const b = !!(t != null && t.theme);
    return xe(), e(Ye, null, _ && e(Le, S({}, _)), e("div", {
        className: q("archive-page typography", ts.container, {
            "use-theme-bg": b
        })
    }, e("div", {
        className: "container"
    }, n && e("h2", null, n), e(Kt, {
        communityPosts: u,
        freeSignup: i,
        freeSignupEmail: r,
        isPodcast: h,
        newPosts: c,
        pub: t,
        search: s,
        searchPosts: p,
        sectionId: f,
        showMonthDividers: !0,
        sort: l,
        source: "archive",
        topPosts: d,
        user: a,
        variant: "list"
    }, ({
        posts: w,
        linkToComments: v,
        onClickPost: P
    }) => e(Xt, {
        hideImages: t.theme.hide_images_from_list,
        linkToComments: v,
        posts: w,
        pub: t,
        user: a,
        variant: "two-column-list",
        onChange: () => {},
        onClickPost: P
    })), o)))
}
const fn = ({
    delayFirstLoad: o,
    filterPostsPredicate: n,
    isBelowTheFold: t,
    maxPosts: a,
    pub: i,
    search: r,
    sort: l,
    sortTabs: s,
    source: c,
    user: d
}) => e(Ye, null, e(Yt, {
    paddingY: 24
}, e(Kt, {
    delayFirstLoad: o,
    filterPostsPredicate: n,
    isBelowTheFold: t,
    maxPosts: a,
    pub: i,
    search: r,
    sort: l,
    sortTabs: s,
    source: c,
    user: d
}, ({
    posts: u,
    linkToComments: p,
    onClickPost: f
}) => e(Xt, {
    hideImages: i.theme.hide_images_from_list,
    linkToComments: p,
    posts: u,
    pub: i,
    user: d,
    variant: "two-column-list",
    onChange: () => {},
    onClickPost: f
}))));
class os extends Q {
    constructor(n, t) {
        super(n, t), this.onVisible = i => {
            const r = `${i} Seen`;
            this.state.post && (this.state[r] || (this.setState({
                [r]: !0
            }), X(r, {
                post_id: this.state.post.id,
                post_audience: this.state.post.audience,
                post_type: this.state.post.type
            })))
        }, this.fillEmbeddedEmailInputs = () => {
            var l;
            const i = document.querySelectorAll('article.post input[type="email"]'),
                r = ((l = this.state.user) == null ? void 0 : l.email) || this.props.freeSignupEmail;
            r && i.forEach(s => s.value = r), this.setState({
                embeddedEmailInputsFilled: !0
            })
        };
        const {
            user: a
        } = n;
        n.post ? this.state = {
            post: n.post,
            user: a,
            introText: n.introText,
            crossPostedPub: n.crossPostedPub,
            crossPostingByLine: n.crossPostingByLine,
            userWithCrossPostedPubContext: n.userWithCrossPostedPubContext,
            crossPostedPublicationSettings: n.crossPostedPublicationSettings,
            crossPostedSiteConfig: n.crossPostedSiteConfig
        } : this.state = {
            user: a
        }
    }
    componentDidMount() {
        return R(this, null, function*() {
            Fe(), this.cleanUpTikTokEnhanceListener = un(), this.state.post || (yield this.loadPost()), this.triggerShareOnLoad(), this.fillEmbeddedEmailInputs()
        })
    }
    componentWillUnmount() {
        var n;
        (n = this.cleanUpTikTokEnhanceListener) == null || n.call(this)
    }
    componentDidUpdate(n) {
        return R(this, null, function*() {
            this.state.embeddedEmailInputsFilled || this.fillEmbeddedEmailInputs()
        })
    }
    loadPost() {
        return R(this, null, function*() {
            if (this.setState({
                    embeddedEmailInputsFilled: !1
                }), this.props.post) this.setState({
                post: this.props.post
            }, () => Fe());
            else try {
                const n = yield le.get(`/api/v1/cross-posts/${this.props.post_id}`);
                yield Yo(this, {
                    post: n.body.post,
                    introText: n.body.intro_text,
                    crossPostedPub: n.body.crossPostedPub,
                    crossPostingByLine: n.body.crossPostingByLine,
                    userWithCrossPostedPubContext: n.body.userWithCrossPostedPubContext,
                    crossPostedPublicationSettings: n.body.crossPostedPublicationSettings,
                    crossPostedSiteConfig: n.body.crossPostedSiteConfig
                }), Fe()
            } catch (n) {
                console.error("Failed to load post:", n), alert(Ee(n))
            }
        })
    }
    triggerShareOnLoad() {
        if (se("action") === "share") window.history.replaceState({}, document.title, ht({
            action: null
        }));
        else return;
        this.post && this.post.triggerShare({
            fromEmail: !0
        })
    }
    render({
        freeSignup: n,
        freeSignupEmail: t,
        publication: a
    }, {
        post: i,
        user: r,
        introText: l,
        crossPostedPub: s,
        crossPostingByLine: c,
        userWithCrossPostedPubContext: d,
        crossPostedPublicationSettings: u,
        crossPostedSiteConfig: p
    }) {
        const f = (i == null ? void 0 : i.type) === "podcast";
        return e("div", null, e("div", {
            className: q("single-post-container")
        }, e("div", {
            className: q({
                container: !f
            })
        }, e("div", {
            className: "single-post"
        }, e(qt, {
            post: i,
            publication: a
        }), i && u && p ? e(Ya, {
            settings: u
        }, e(qn, {
            siteConfigs: p
        }, e(mi, {
            crossPost: {
                crossPostedPub: s
            }
        }, e(sn, {
            ref: h => {
                this.post = h
            },
            user: d,
            post: i,
            pub: s,
            freeSignup: n,
            freeSignupEmail: t,
            paywall: !1,
            noTitleLink: !0,
            onChange: h => this.setState(h),
            fromPostPage: !0,
            crossPostInfo: {
                introText: l,
                crossPostedPub: s,
                crossPostingByLine: c,
                userWithCrossPostedPubContext: d
            }
        })))) : e(ln, {
            pub: a
        }))), a.has_posts ? e("div", {
            className: "single-post-section"
        }, e("div", {
            className: "container"
        }, e(Ve, {
            onVisible: () => this.onVisible("Top Posts Footer")
        }), e(fn, {
            user: r,
            freeSignup: n,
            freeSignupEmail: t,
            pub: a,
            maxPosts: 3,
            filterPostsPredicate: h => h.id !== (i == null ? void 0 : i.id),
            stateInUrl: !0,
            sortTabs: h => {
                const _ = h.findIndex(b => b.id === "top");
                return _ !== -1 ? [h[_]].concat(h.filter((b, w) => w !== _)) : null
            },
            delayFirstLoad: 1e3,
            source: "post",
            isBelowTheFold: !0
        }))) : null))
    }
}
class _n extends Q {
    constructor(n, t) {
        super(n, t), this.state = {
            freeSignup: n.freeSignup,
            freeSignupEmail: n.freeSignupEmail,
            success: !1
        }
    }
    componentDidMount() {
        var t;
        Rt(Te("/img/substack_wordmark.png", 200));
        const n = this.props.freeSignupEmail || this.props.user && this.props.user.email;
        n ? this.emailInput.value = n : ea() || (t = this.emailInput) == null || t.focus()
    }
    onPrepareData(n) {
        (this.props.pub.plans || !this.context.getConfigFor("no_embed_redirect")) && !this.subscribeWindow && (this.subscribeWindow = window.open("about:blank", "_blank"))
    }
    onSignup(n) {
        this.setState({
            freeSignup: !0,
            freeSignupEmail: n.body.email
        }), this.subscribeWindow && (this.subscribeWindow.location = gt(this.props.pub, {
            addBase: !0,
            params: {
                just_signed_up: !0,
                skip_redirect_check: !0,
                utm_medium: He.web,
                utm_source: re.embed
            }
        }))
    }
    onError(n) {
        if (this.subscribeWindow) {
            try {
                this.subscribeWindow.close()
            } catch (t) {
                console.error("Failed to close subscribe window:", t)
            }
            this.subscribeWindow = null
        }
    }
    render({
        pub: n,
        user: t,
        no_border: a
    }, {
        freeSignup: i,
        freeSignupEmail: r,
        loading: l,
        success: s
    }) {
        const c = r || t && t.email;
        return e("div", {
            className: `embed-page ${a?"no-border":""}`
        }, e("div", {
            className: "embed-page-inner"
        }, n.logo_url && e("a", {
            href: `${n.base_url}/`,
            target: "_blank"
        }, e("img", {
            className: "publication-logo",
            src: Te(n.logo_url, 170, {
                quality: "auto:best"
            }),
            alt: "Logo"
        })), e("h1", {
            className: `publication-name${n.logo_url?"":" no-logo"}`
        }, e("a", {
            href: `${n.base_url}/`,
            target: "_blank"
        }, e(It, {
            text: n.name
        }))), !!n.hero_text && e("p", {
            className: "publication-tagline"
        }, e(It, {
            text: n.hero_text
        })), e("div", {
            className: "publication-meta"
        }, e(It, {
            text: Ka(n, {
                includePrice: !1,
                includeBadge: !0,
                rankingDetailOverrideText: n.rankingDetailFreeSubscriberCount,
                includeRankingDetail: !!n.rankingDetailFreeSubscriberCount
            })
        })), n.invite_only ? e(Zt, {
            className: "subscription-request-form",
            ref: d => this.form = d,
            noInlineErrors: !0,
            action: Ce("/api/v1/subscription/request"),
            noJsAction: Ce("/api/v1/subscription/request", {
                nojs: !0
            }),
            onSuccess: () => this.setState({
                success: !0
            }),
            onError: d => {
                this.setState({
                    loading: !1
                }), alert(Ee(d, "Failed to request a subscription"))
            }
        }, e("input", {
            type: "hidden",
            name: "first_url",
            value: Wo
        }), e("input", {
            type: "hidden",
            name: "first_referrer",
            value: Ho
        }), e("input", {
            type: "hidden",
            name: "current_url",
            value: Vo
        }), e("input", {
            type: "hidden",
            name: "current_referrer",
            value: zo
        }), !!c && oa(), e("div", {
            className: "sideBySideWrap"
        }, e("input", {
            className: q(s ? "secondary" : "primary"),
            type: "email",
            name: "email",
            ref: d => this.emailInput = d,
            readOnly: !!(c || l),
            disabled: !!(l || s || c),
            placeholder: "Type your email…"
        }), e(pt, {
            className: q("rightButton", s ? "secondary" : "primary"),
            type: "submit",
            disabled: !!(l || s),
            onClick: () => {
                this.setState({
                    loading: !0
                })
            }
        }, e("b", {
            className: "button-text"
        }, s ? "Requested" : "Subscribe"))), e("div", {
            id: "error-container"
        })) : e(Qt, {
            source: "embed",
            pub: n,
            user: t,
            freeSignup: i,
            freeSignupEmail: r,
            forceEmailInput: !0,
            onPrepareData: d => this.onPrepareData(d),
            onSignup: d => this.onSignup(d),
            onError: d => this.onError(d)
        }), e("div", {
            className: "embed-tos"
        }, e(m.B4, {
            color: "pub-secondary-text",
            size: 12,
            lineHeight: 16,
            align: "center"
        }, "By subscribing you agree to", " ", e("a", {
            className: "tos-text",
            target: "_blank",
            rel: "noopener",
            href: na({
                pub: n,
                utm_source: "embed_publication"
            })
        }, "Substack's Terms of Use"), ", ", e("a", {
            className: "tos-text",
            target: "_blank",
            rel: "noopener",
            href: aa({
                pub: n,
                utm_source: "embed_publication"
            })
        }, "our Privacy Policy"), " ", "and", " ", e("a", {
            className: "tos-text",
            target: "_blank",
            rel: "noopener",
            href: ia({
                utm_source: "embed_publication"
            })
        }, "our Information collection notice"))), (t || i) && e("p", {
            className: "sign-out-block"
        }, e("span", {
            className: "account-info-logout"
        }, e("a", {
            href: ra({
                redirect: document.location.href,
                for_pub: n.subdomain
            }),
            native: !0
        }, "Sign out")))), e("a", {
            href: `${ta()}/?utm_source=${re.embed}&utm_content=${n.subdomain}`,
            target: "_blank"
        }, e("img", {
            ref: d => this.img = d,
            className: "substack-watermark",
            src: Te("/img/substack_wordmark.black.png", 200),
            onMouseEnter: () => this.img.src = Te("/img/substack_wordmark.png", 200),
            onMouseLeave: () => this.img.src = Te("/img/substack_wordmark.black.png", 200),
            alt: "Substack"
        })))
    }
}
te(_n, "contextType", Zn);
const ns = ({
    pub: o,
    slug: n
}) => {
    var r;
    const [t, a] = O(null);
    V(() => {
        function l() {
            return R(this, null, function*() {
                try {
                    const s = yield le.get(`/api/v1/posts/${n}`);
                    a(s.body)
                } catch (s) {
                    console.error("Failed to load post:", s), s.status === 404 ? alert("Post not found") : alert(Ee(s))
                }
            })
        }
        l()
    }, [n]);
    let i = !1;
    return typeof window != "undefined" && (i = ((r = Vt(window.location.href).autoplay) != null ? r : "0") === "1"), t ? e(lr, {
        feature: "Podcast",
        pub: o,
        post: t,
        src: t.podcast_url,
        autoPlay: i,
        metricsPost: t,
        isFancy: !0,
        showCTAs: !0
    }) : e("div", {
        className: "loading-container"
    })
};

function as() {
    return e("div", {
        className: "embed-test-page"
    }, e("iframe", {
        style: {
            border: "1px solid #EEE",
            background: "white"
        },
        width: "480",
        height: "320",
        src: "/embed",
        frameBorder: "0",
        scrolling: "no"
    }))
}
const is = ({
        pub: o,
        slug: n
    }) => {
        var l;
        const [t, a] = O(null), {
            isMobile: i
        } = Zo();
        V(() => {
            function s() {
                return R(this, null, function*() {
                    try {
                        const c = yield le.get(`/api/v1/posts/${n}`);
                        a(c.body)
                    } catch (c) {
                        console.error("Failed to load post:", c), c.status === 404 ? alert("Post not found") : alert(Ee(c))
                    }
                })
            }
            s()
        }, [n]);
        let r = !1;
        return typeof window != "undefined" && (r = ((l = Vt(window.location.href).autoplay) != null ? l : "0") === "1"), t != null && t.videoUpload ? e("div", {
            className: "video-player-embed-container"
        }, e(ui, {
            mediaUpload: t.videoUpload,
            pub: o,
            autoPlay: r,
            renderPlayButton: () => e(Oi, {
                isPlaying: !1,
                size: i ? 40 : 56
            })
        })) : e("div", {
            className: "loading-container"
        })
    },
    Ro = o => e(Gt, A(S({}, o), {
        name: "ChevronIcon",
        svgParams: {
            height: 24,
            width: 24,
            stroke: "#666666",
            viewBox: "0 0 24 24"
        }
    }), e("path", {
        d: "M9.88507 18.9609L15.8851 12.9609L9.88507 6.96094",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })),
    rs = o => e(Gt, A(S({}, o), {
        name: "DownloadIcon",
        svgParams: {
            height: 32,
            width: 32
        }
    }), e("rect", {
        width: "32",
        height: "32",
        rx: "6",
        fill: o.fill || "black"
    }), e("path", {
        d: "M23.5 18.5V21.8333C23.5 22.2754 23.3244 22.6993 23.0118 23.0118C22.6993 23.3244 22.2754 23.5 21.8333 23.5H10.1667C9.72464 23.5 9.30072 23.3244 8.98816 23.0118C8.67559 22.6993 8.5 22.2754 8.5 21.8333V18.5",
        stroke: o.stroke || "white",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), e("path", {
        d: "M11.8333 14.3335L16 18.5002L20.1667 14.3335",
        stroke: o.stroke || "white",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), e("path", {
        d: "M16 18.5V8.5",
        stroke: o.stroke || "white",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })),
    ss = o => e(Gt, A(S({}, o), {
        name: "PanelsIcon",
        svgParams: {
            height: 32,
            width: 32
        }
    }), e("rect", {
        width: "32",
        height: "32",
        rx: "6",
        fill: "black"
    }), e("rect", {
        x: "7.19995",
        y: "7.2002",
        width: "8.49554",
        height: "11.8938",
        rx: "0.424777",
        fill: "white"
    }), e("rect", {
        opacity: "0.7",
        x: "7.19995",
        y: "19.603",
        width: "8.49554",
        height: "6.79643",
        rx: "0.424777",
        fill: "white"
    }), e("path", {
        opacity: "0.7",
        d: "M16.2048 7.62497C16.2048 7.39037 16.395 7.2002 16.6296 7.2002H20.4526C23.737 7.2002 26.3995 9.8627 26.3995 13.1471C26.3995 16.4314 23.737 19.094 20.4526 19.094H16.6296C16.395 19.094 16.2048 18.9038 16.2048 18.6692V7.62497Z",
        fill: "white"
    }));

function ls() {
    var o;
    return typeof window != "undefined" ? ((o = window._preloads) == null ? void 0 : o.file) || {} : {}
}

function cs(o, n) {
    return `${o.title.toLowerCase().replace(/\s/g,"_")}.${n.toLowerCase()}`
}

function ds({
    file: o = ls(),
    pub: n
}) {
    const [t, a] = O(null);
    return V(() => (() => R(this, null, function*() {
        if (!o.fileKey) {
            const i = yield fetch(`/api/v1/file/entry/${window.location.pathname.split("/").pop()}`);
            i.redirected && (window.location.href = i.url);
            const r = yield i.json();
            a(r)
        }
    }))(), [o.fileKey]), e(ms, {
        file: t || o,
        pub: n
    })
}

function ms({
    file: o,
    pub: n
}) {
    var r;
    if (!o.id) return e("div", {
        className: "page"
    }, e("div", {
        className: "container"
    }, e("h3", null, "Read Now"), e("div", {
        className: "popup-container"
    }, e("div", {
        className: "overlay"
    }))));
    const t = (r = o.file_key) == null ? void 0 : r.split(".").pop().toUpperCase(),
        a = sa(o.num_bytes),
        i = cs(o, t);
    return e("div", {
        className: "page"
    }, e("div", {
        className: "container"
    }, e("span", {
        className: "table-list-title"
    }, e("h3", null, "Read Now"), e("a", {
        className: "file-sidebar-header-button",
        href: `${ye(n)}/p/${o.post_id}`
    }, "Back")), e("div", {
        className: "table-list"
    }, e("div", {
        className: "table-list-row table-list-header"
    }, e("img", {
        className: `table-list-thumbnail ${o.thumbnail&&o.thumbnail.indexOf("/img/attachment_icon.svg")===-1?"":"default"}`,
        src: o.thumbnail || `${ye(n)}/img/attachment_icon.svg`
    }), e("div", {
        className: "table-list-col"
    }, e("div", {
        className: "table-list-h1"
    }, o.title || "Unknown File"), e("div", {
        className: "table-list-h2"
    }, a, " ∙ ", t, " File"))), e("a", {
        className: "table-list-row table-list-item",
        href: `${ye(n)}/api/v1/file/panels/${o.file_key}`
    }, e(ss, null), e("span", {
        className: "table-list-grow"
    }, e("div", {
        className: "table-list-h1"
    }, "Open in Panels"), e("div", {
        className: "table-list-h2"
    }, "Comic reader for iOS")), e(Ro, {
        stroke: "#666",
        strokeWidth: 0,
        isStatic: !0
    })), e("a", {
        className: "table-list-row table-list-item",
        download: i,
        href: `${ye(n)}/api/v1/file/${o.file_key}`
    }, e(rs, null), e("span", {
        className: "table-list-grow"
    }, e("div", {
        className: "table-list-h1"
    }, "Download file"), e("div", {
        className: "table-list-h2"
    }, i)), e(Ro, {
        stroke: "#666",
        strokeWidth: 0,
        isStatic: !0
    })))))
}
class At extends Q {
    constructor() {
        super(...arguments);
        te(this, "acceptInvite", () => R(this, null, function*() {
            var t, a;
            try {
                const i = yield le.post(`/api/v1/publication_user_invite/${this.props.matches.id}/accept`);
                (t = i.body) != null && t.postUrl ? location.href = (a = i.body) == null ? void 0 : a.postUrl : Be(`/invite-success/${this.props.matches.id}`)
            } catch (i) {
                const r = Ee(i);
                this.setState({
                    error: r
                })
            }
        }))
    }
    componentDidMount() {
        this.props.user || la()
    }
    render({
        pub: t,
        post: a,
        user: i,
        freeSignup: r,
        freeSignupEmail: l,
        inviteToPost: s,
        primaryEligiblePublications: c,
        switchAccountRedirectUrl: d
    }, {
        error: u
    }) {
        if (u) return e("div", {
            className: "container invite-success"
        }, e("h3", null, "Error"), e("p", null, u));
        const p = s && a && a.type === "podcast",
            f = p && i ? "Fill out your profile for your podcast appearance" : p && !i ? "Set up your profile for your podcast appearance" : s && i ? "Set up your profile" : s && !i ? "Fill out your profile" : `Your invite to ${t.name}`,
            h = p ? "Listeners will want to know more about you. Use your profile as a chance to express yourself." : s ? "Readers will want to know more about you and even follow your writing. Use your profile as a chance to express yourself." : "Before you can accept your invite, finish setting up your profile:",
            _ = s ? "Update Profile & Accept Invite" : "Accept Invite",
            b = i ? "Already a writer?" : "Already have an account?",
            w = i ? "Switch accounts" : "Login";
        return e("div", {
            className: "container finish-invite"
        }, e("h3", null, f), e("p", null, h), e(oi, {
            pageTitle: "",
            user: i,
            freeSignup: r,
            freeSignupEmail: l,
            needsPhoto: !1,
            optionalPhoto: s,
            isPostInvite: s,
            primaryEligiblePublications: c,
            onSuccess: this.acceptInvite,
            text: _
        }), s && d && e("div", {
            className: "invite-switch-account"
        }, b, " ", e("a", {
            href: d
        }, w)))
    }
}
te(At, "defaultProps", {
    inviteToPost: !1,
    primaryEligiblePublications: []
});
class us extends Q {
    renderNotAvailable(n, {
        time: t = !1
    } = {}) {
        return e("div", {
            className: "container reward-page gift-reward-page"
        }, e("h2", null, "All gone"), n, e("p", null, "Sorry, ", t ? "this gift has expired" : "all of these gifts have already been claimed", ". You can still subscribe if you like."), e("div", {
            className: "signup"
        }, e(mn, {
            source: "viral_gift_none_left",
            pub: this.props.pub,
            onSuccess: () => document.location.href = "/subscribe"
        })))
    }
    renderForSender() {
        return [e("h3", {
            className: "sender-hint"
        }, e("span", null, ps(this.props.user), ", share this page to give your gift"), e("a", {
            className: "button twitter-button",
            href: this.props.viral_gift_data.tweet_link,
            native: !0
        }, "Share on Twitter"))]
    }
    render({
        pub: n,
        t,
        user: a,
        freeSignupEmail: i,
        viral_gift_data: r
    }) {
        const {
            sender_name: l,
            count_remaining: s,
            sender_id: c
        } = r, d = ca(n.plans), u = d ? ` (value: ${d})` : "", p = `Accept ${l||"your friend"}'s gift`, f = `A three-month subscription to ${n.name}${u}`, h = e(Le, {
            title: p,
            description: f,
            image: n.logo_url
        });
        if (!t || !s) return this.renderNotAvailable(h);
        let _ = null;
        a && a.id == c && (_ = this.renderForSender());
        let b = "",
            w = i || "";
        a && !_ && (b = a.name, w = a.email);
        const v = `${s} left`;
        return e("div", {
            className: "container reward-page receive-page"
        }, _, h, e("h2", null, "Accept Gift Subscription"), e("p", null, l || "Your friend", " would like to give you a free, three-month subscription. ", u), e("p", null, e("b", null, v)), e(Zt, {
            action: "/api/v1/viral_gifts/accept_gift_from_link",
            onSuccess: () => document.location.href = "/account/gifts/accept"
        }, e("input", {
            type: "text",
            name: "name",
            placeholder: "Your name",
            value: b
        }), e("input", {
            type: "email",
            name: "email",
            placeholder: "Your email",
            value: w
        }), e("input", {
            type: "hidden",
            value: t,
            name: "token"
        }), e("div", {
            id: "error-container"
        }), e("div", {
            className: "button-container"
        }, e(pt, {
            className: "ok-button primary",
            type: "submit"
        }, "Accept Gift"))))
    }
}

function ps(o) {
    return o.name ? o.name.trim().split(/\s+/g)[0] : o.email.split("@")[0]
}
class hs extends Q {
    constructor() {
        super(...arguments);
        te(this, "state", {
            loading: !0,
            invites: []
        });
        te(this, "onSuccess", () => R(this, null, function*() {
            alert("Invite sent!"), document.location.reload()
        }))
    }
    componentDidMount() {
        if (!this.hasInvites()) {
            da(this.props.pub);
            return
        }
        this.loadInvites()
    }
    hasInvites() {
        const {
            pub: t,
            user: a
        } = this.props;
        return t.invite_only ? a && a.is_contributor ? !0 : !(!(t.subscriber_invites > 0) || !(a && a.is_subscribed)) : !1
    }
    loadInvites() {
        return R(this, null, function*() {
            try {
                const t = yield le.get("/api/v1/publication/invite");
                this.setState({
                    invites: t.body,
                    loading: !1
                })
            } catch (t) {
                console.error("Failed to fetch invites:", t), alert(Ee(t))
            }
        })
    }
    render({
        pub: t,
        user: a
    }, {
        loading: i,
        invites: r
    }) {
        if (!this.hasInvites()) return e("p", {
            className: "main-loader"
        }, "Loading…");
        const l = a && a.is_contributor,
            s = Math.max(a && a.invites, r.length),
            c = Math.max(s, t.subscriber_invites),
            d = c - s;
        return e("div", {
            className: "invite-page page"
        }, e("div", {
            className: "container"
        }, e("h3", null, "Your invites"), e("p", null, t.name, " is invite-only, but you’ve been granted", " ", l ? "an infinite number of invites" : Ie(c, "invite"), " to give out."), (d > 0 || l) && [!l && e("h5", null, "You have ", Ie(d, "invite"), " left"), e(Zt, {
            ref: u => this.form = u,
            action: "/api/v1/publication/invite",
            onSuccess: this.onSuccess,
            noInlineErrors: !0
        }, e("div", {
            className: "sideBySideWrap"
        }, e("input", {
            type: "text",
            name: "name",
            placeholder: "Name…"
        }), e("input", {
            type: "text",
            name: "email",
            placeholder: "Email…"
        }), e(pt, {
            type: "submit",
            className: "primary"
        }, "Invite")), e("div", {
            id: "error-container"
        }))], i && s > 0 ? e("p", null, e("br", null), "Loading…") : r.length > 0 ? [e("h5", null, "Used invites"), e("ul", null, r.sort((u, p) => new Date(p.created_at) - new Date(u.created_at)).map(u => e("li", null, u.inviteeUser && u.inviteeUser.name || "", " on", " ", he(u.created_at).standardDate())))] : null))
    }
}

function gs({
    pub: o,
    post: n
}) {
    return e(g, {
        alignItems: "center",
        className: "container",
        gap: 32
    }, e(g, {
        alignItems: "center",
        gap: 4
    }, e(g, {
        paddingTop: 24,
        paddingBottom: 16
    }, e(m.H1, null, "You rejected your invite to ", o.name)), e(m.B3, null, "If you change your mind, you can accept from your email invitation."), n.is_published ? e(m.B3, null, "Your byline has been removed from this post: ", e("a", {
        href: zt(o, n)
    }, n.title)) : null), e(W, {
        href: o.base_url
    }, `Go to ${o.name}`))
}

function fs({
    pub: o,
    user: n,
    post: t,
    freeSignup: a,
    freeSignupEmail: i
}) {
    const r = Go(null),
        l = () => r.current && r.current.open();
    if (!t) return e(g, {
        paddingTop: 32
    }, e("div", {
        className: "container invite-success"
    }, e("p", null, "You accepted your invite to ", o.name, "."), e("p", null, "If you need admin access, ask your inviter to change your status in the publication settings."), e("p", null, "If you expect to be shown on this publication's author list, make sure your", " ", e(pi, {
        onClick: l
    }, "profile is up to date")), e(ni, {
        ref: r,
        user: n,
        freeSignup: a,
        freeSignupEmail: i,
        needsPhoto: !0
    })));
    const s = t.type === "podcast" ? "We’ll let you know when the podcast episode goes live" : "We’ll let you know when your guest post is live",
        c = "Your profile is set up and good to go!";
    return e(g, {
        alignItems: "center",
        className: "container",
        gap: 32
    }, e(g, {
        alignItems: "center",
        gap: 4
    }, e(g, {
        paddingTop: 24,
        paddingBottom: 16
    }, e(m.H1, null, s)), e(m.B3, null, c)), e(W, {
        href: o.base_url
    }, `Go to ${o.name}`))
}
const _s = "_wrapper_bkaps_1",
    bs = "_headerWrapper_bkaps_5",
    ys = "_copyLinkInput_bkaps_8",
    vs = "_copyLinkButton_bkaps_16",
    ws = "_shareButton_bkaps_21",
    Cs = "_referrerRow_bkaps_24",
    xs = "_referrerRowInverted_bkaps_30",
    ks = "_referrerLink_bkaps_36",
    Ss = "_responsiveHeader_bkaps_39",
    Ns = "_shareButtons_bkaps_52",
    ie = {
        wrapper: _s,
        headerWrapper: bs,
        copyLinkInput: ys,
        copyLinkButton: vs,
        shareButton: ws,
        referrerRow: Cs,
        referrerRowInverted: xs,
        referrerLink: ks,
        responsiveHeader: Ss,
        shareButtons: Ns
    },
    Lt = (o, n) => {
        X(ge.SHARE_LINK_CLICKED, {
            name: n,
            source: "leaderboard"
        }), o && (o.startsWith("http") ? window.open(o, "_blank") : document.location.href = o)
    },
    Do = ({
        user: o,
        rank: n,
        referrals: t,
        isSelf: a,
        isHighlighted: i
    }) => {
        const {
            iString: r
        } = xe();
        return e(m, {
            as: o ? "a" : "div",
            href: o ? pa(o.id, o.name) : void 0,
            className: ie.referrerLink
        }, e($, {
            sizing: "border-box",
            style: {
                width: "100%"
            },
            alignItems: "center",
            border: a || i ? "detail-themed" : "transparent",
            radius: "md",
            paddingLeft: 12,
            paddingY: a ? 16 : 8,
            paddingRight: 20,
            justifyContent: "space-between",
            className: q(ie.referrerRow, {
                [ie.referrerRowInverted]: !a
            })
        }, e($, {
            gap: 8,
            alignItems: "center"
        }, e(m.Digit, {
            weight: "semibold",
            paddingRight: 4,
            color: "pub-primary-text"
        }, n, "."), o ? e(Ei, {
            subject: o,
            dontStopPropagation: !1
        }, e(Io, {
            size: 36,
            user: o
        })) : e(Io, {
            size: 36,
            showProfileHovercard: !1
        }), e(m.B4, {
            color: "pub-primary-text",
            weight: "semibold"
        }, (o == null ? void 0 : o.name) || r("Anonymous Reader"))), e(m.B4, {
            color: "pub-primary-text",
            weight: "semibold"
        }, t)))
    },
    Ps = ({
        pub: o,
        user: n,
        freeSignupEmail: t
    }) => {
        const {
            iString: a,
            iTemplate: i,
            iPlural: r
        } = xe();
        ar();
        const l = Jt(),
            {
                result: s,
                isLoading: c,
                refetch: d
            } = ct({
                pathname: "/api/v1/reader_referrals/leaderboard",
                auto: !0
            }),
            {
                refetch: u
            } = hi({
                auto: !1,
                pathname: "/api/v1/subscription/visibilities",
                method: "post"
            });
        if (V(() => {
                !c && !s && Be(ye(o))
            }, [s, c, o]), c || !s) return e("div", {
            className: "page typography signup-page"
        }, e("div", {
            className: "container"
        }));
        const {
            current_user_stats: p,
            tiers: f,
            top_referrers: h,
            current_user_can_share: _,
            current_user_id: b,
            current_user_profile_hidden: w
        } = s, v = n == null ? void 0 : n.is_admin, P = n == null ? void 0 : n.is_contributor, L = se("referrer_token"), k = n && !n.is_magic && n.email || t || null, x = Ce(ye(o), {
            r: (b == null ? void 0 : b.toString(36)) || L
        });
        let N, C;
        f.find((T, D) => {
            const E = (p == null ? void 0 : p.referrals) || 0,
                U = f[D + 1];
            E >= T.num_referrals_required && (!U || E < U.num_referrals_required) && (N = T, C = U)
        });
        let M = "";
        return !N && p ? M = `${r("You have %1 referral","You have %1 referrals",p.referrals)} - ${r("only %1 more referral to earn your first reward!","only %1 more referrals to earn your first reward!",f[0].num_referrals_required-p.referrals)}` : N && C && p ? M = `${r("You’ve referred %1 reader!","You’ve referred %1 readers!",p.referrals)} ${i`You’ve qualified for the Tier ${N.display_order} reward.`} ${r("Invite %1 more reader to earn the Tier %2 reward!","Invite %1 more readers to earn the Tier %2 reward!",C.num_referrals_required-p.referrals,C.display_order)}` : N && !C && p && (M = `${r("You’ve referred %1 reader!","You’ve referred %1 readers!",p.referrals)} You’re number #${p.rank} on the leaderboard.`), e("div", {
            className: "page typography signup-page"
        }, e("div", {
            className: "container"
        }, e(g, {
            gap: 64,
            className: ie.wrapper
        }, (v || P) && e(g, {
            border: "detail-themed",
            gap: 16,
            paddingX: 24,
            paddingY: 16,
            radius: "md"
        }, e(g, {
            gap: 4
        }, e(m.Meta, {
            color: "pub-primary-text"
        }, v ? "Admin View" : "Contributor View"), e(m.B4, {
            color: "pub-secondary-text"
        }, a(v ? "A view of your leaderboard as it appears to your subscribers. Note: As an admin your referrals will not appear on the leaderboard." : "A view of your leaderboard as it appears to your subscribers. Note: As a contributor your referrals will not appear on the leaderboard."))), v && e(W, {
            priority: "secondary-theme",
            outline: "none",
            href: "/publish/settings#referrals",
            localNavigation: !1
        }, a("Edit Referral Settings"))), e(g, {
            alignItems: "center"
        }, e(g, {
            gap: 24,
            className: ie.headerWrapper,
            alignItems: "center"
        }, e(Yt, null, e(cn, {
            pub: o,
            size: 64
        })), e(g, {
            alignItems: "center",
            gap: 4
        }, e(m, {
            className: ie.responsiveHeader,
            font: "pub-headings",
            color: "pub-primary-text",
            align: "center"
        }, _ || L ? i `Refer friends to ${o.name}` : i `Subscribe and invite friends to ${o.name}`), e(m.B3, {
            translated: !0,
            color: "pub-secondary-text",
            align: "center",
            className: ie.introText
        }, "Show your support by sharing ", I18N.p(o.name), " and earn rewards for your referrals.")), !_ && !L && !(P || v) && e(g, {
            style: {
                width: "100%"
            }
        }, e(W, {
            grow: !0,
            priority: "primary-theme",
            onClick: T => R(void 0, null, function*() {
                T.preventDefault();
                let D;
                try {
                    k && (D = (yield le.post("/api/v1/free").send({
                        source: "referral-leaderboard",
                        email: k,
                        first_url: Wo,
                        first_referrer: Ho,
                        current_url: Vo,
                        current_referrer: zo
                    })).body.referral_token, Ki())
                } catch (E) {
                    X(ge.FREE_SIGNUP_FAILED, {
                        reason: E.message,
                        source: "referral-leaderboard"
                    })
                }
                window.location.href = gt(o, {
                    addBase: !0,
                    params: {
                        simple: !0,
                        next: document.location.href,
                        utm_source: re.referralLeaderboard,
                        utm_medium: He.web,
                        skip_redirect_check: !0,
                        just_signed_up: !0,
                        referral_token: D
                    }
                })
            }),
            href: Ce("/subscribe", {
                next: ma(o, void 0, {
                    addBase: !0
                }),
                utm_source: re.referralLeaderboard
            }),
            localNavigation: !1
        }, e($, {
            alignItems: "center",
            gap: 8
        }, e(pr, {
            size: 20
        }), a("Subscribe")))))), (_ || P || v || L) && e(g, {
            alignItems: "center",
            gap: 16,
            style: {
                width: "100%"
            }
        }, e($, {
            style: {
                width: "100%"
            }
        }, e(ut, {
            className: ie.copyLinkInput,
            readOnly: !0,
            value: x
        }), e(W, {
            className: ie.copyLinkButton,
            priority: "primary-theme",
            onClick: () => {
                X(ge.SHARE_LINK_CLICKED, {
                    name: "copy",
                    source: "leaderboard"
                }), Jo(x), l.popToast(T => e(mt, A(S({}, T), {
                    Icon: li,
                    text: a("Link copied to clipboard")
                })))
            }
        }, a("Copy link"))), e(ve, {
            className: ie.shareButtons,
            gap: {
                desktop: 16,
                mobile: 8
            },
            style: {
                width: "100%"
            }
        }, e(W, {
            className: ie.shareButton,
            priority: "secondary-theme",
            leftIcon: e(ai, {
                width: 18,
                height: 18,
                style: {
                    paddingTop: 2
                }
            }),
            onClick: () => Lt(ua({
                url: x,
                text: o.name
            }), "twitter")
        }, "Twitter"), e(W, {
            className: ie.shareButton,
            priority: "secondary-theme",
            leftIcon: e(mr, {
                height: 20,
                width: 20
            }),
            onClick: () => Lt(Ce("https://www.facebook.com/sharer/sharer.php", {
                u: x
            }), "facebook")
        }, "Facebook"), e(W, {
            className: ie.shareButton,
            priority: "secondary-theme",
            leftIcon: e(Mi, {
                strokeWidth: 1,
                height: 20,
                width: 20,
                style: {
                    paddingTop: 2
                }
            }),
            onClick: () => Lt(Ce("mailto:", {
                subject: o.name,
                body: x
            }), "email")
        }, "Email"))), e(g, {
            alignItems: "start",
            style: {
                width: "100%"
            },
            gap: 16
        }, e(m.H3, {
            translated: !0,
            font: "pub-headings",
            color: "pub-primary-text"
        }, "Rewards and Progress"), e($, {
            gap: {
                desktop: 16,
                mobile: 12
            },
            style: {
                width: "100%"
            }
        }, f.map(T => e(ur, {
            key: T.display_order,
            tier: T,
            isSelected: T.display_order === (N == null ? void 0 : N.display_order)
        }))), _ && p && e(g, {
            gap: 8,
            style: {
                width: "100%"
            },
            alignItems: "center"
        }, e(Do, {
            user: n,
            isSelf: !0,
            referrals: p.referrals,
            rank: p.rank
        }), !w && e(m.B4, {
            color: "pub-secondary-text"
        }, M), w && e($, {
            sizing: "border-box",
            style: {
                width: "100%"
            },
            alignItems: "center",
            border: "detail-themed",
            radius: "md",
            paddingX: 12,
            paddingY: 16,
            justifyContent: "space-between",
            bg: "secondary",
            gap: 32
        }, e(g, {
            gap: 4
        }, e(m.B4, {
            translated: !0,
            weight: "semibold",
            color: "pub-primary-text"
        }, "Your subscription is private"), e(m.B4, {
            translated: !0,
            color: "pub-secondary-text"
        }, "To appear on the leaderboard, turn on visibility for ", I18N.p(o.name))), e(W, {
            fill: "outline",
            priority: "primary-theme",
            onClick: () => R(void 0, null, function*() {
                yield u({
                    body: {
                        ids: [s.current_user_subscription_id],
                        visibility: "public"
                    }
                }), d(), l.popToast(T => e(mt, A(S({}, T), {
                    text: `${o.name} is now visible on your profile!`
                })))
            })
        }, a("Show on profile"))))), e(g, {
            alignItems: "start",
            style: {
                width: "100%"
            },
            gap: 16
        }, e(m.H3, {
            translated: !0,
            font: "pub-headings",
            color: "pub-primary-text"
        }, "Leaderboard"), (h == null ? void 0 : h.length) === 0 && e(g, {
            alignItems: "center",
            justifyContent: "center",
            paddingX: 48,
            sizing: "border-box",
            style: {
                width: "100%",
                minHeight: 350
            },
            gap: 4,
            border: "detail-themed",
            radius: "md"
        }, e(hr, {
            size: 22,
            stroke: "var(--color-secondary-themed)"
        }), e(m.B4, {
            color: "pub-secondary-text"
        }, i `No referrers yet. Be the first on ${o.name}'s leaderboard by helping them find new readers.`)), (h == null ? void 0 : h.length) > 0 && e(g, {
            gap: 8,
            style: {
                width: "100%"
            }
        }, e($, {
            alignItems: "center",
            style: {
                width: "100%"
            },
            justifyContent: "space-between",
            paddingBottom: 2
        }, e(m.Meta, {
            translated: !0,
            weight: "semibold"
        }, "Referrer"), e(m.Meta, {
            translated: !0,
            weight: "semibold"
        }, "Referrals")), h == null ? void 0 : h.map(T => e(Do, {
            key: T.rank,
            user: T.user,
            isHighlighted: T.isCurrentUser,
            rank: T.rank,
            referrals: T.referrals
        })))))))
    },
    bn = ({
        pub: o
    }) => e(Ko, {
        onClick: () => {
            const t = se("referrer"),
                a = t != null ? t : Qo(o);
            Be(a, {
                local_navigation: !1
            })
        },
        className: pe.closeButton,
        size: 40,
        fill: "outline",
        priority: "secondary"
    }, e(pn, {
        className: pe.closeIcon
    })),
    Ts = ({
        pub: o,
        user: n,
        settings: t
    }) => {
        var v, P, L, k;
        const {
            selected_event_type: {
                price: a,
                subscriber_price: i,
                founding_price: r,
                currency: l,
                description_html: s,
                duration: c,
                num_availabilities: d
            },
            user_name: u
        } = t;
        let p = a,
            f = null;
        ((P = (v = o.plans) == null ? void 0 : v.length) != null ? P : 0 > 0) && (n != null && n.is_subscribed && i && (p = i, f = "SUBSCRIBER DISCOUNT"), n != null && n.is_founding && r && (p = r, f = `${(L=ha(o)||"FOUNDING")==null?void 0:L.toUpperCase()} DISCOUNT`)), V(() => {
            var x, N;
            X(ge.MEETING_PAGE_VIEWED, {
                publication_id: o.id,
                user_id: n.id,
                referrer: (x = se("referrer")) != null ? x : null,
                source: (N = se("source")) != null ? N : null
            })
        }, []);
        const h = (k = se("referrer")) != null ? k : void 0,
            _ = ht("/meetings/book", {
                referrer: h
            }),
            b = d > 0,
            w = s ? {
                __html: s.replace(/<br>/g, "")
            } : {
                __html: ""
            };
        return e(H, null, e(bn, {
            pub: o
        }), e(g, {
            style: {
                minHeight: "100vh"
            },
            bg: "secondary",
            alignItems: "center",
            justifyContent: "center"
        }, e(g, {
            paddingX: 24,
            gap: 32,
            style: {
                width: 400,
                maxWidth: "100%",
                boxSizing: "border-box"
            }
        }, e($e, {
            pub: o,
            user_id: t.user_id,
            user_profile_photo_url: t.user_profile_photo_url
        }, e("div", null, e(m.H2, {
            align: "center",
            size: 20
        }, "Book a meeting with"), e(m.H2, {
            align: "center",
            paddingTop: 4
        }, ft("meetings_embed_publication_name") ? o.name : u))), e(g, {
            bg: "primary",
            className: q(pe.offer, {
                [pe.unavailable]: !b
            }),
            radius: "md",
            shadow: "xl",
            padding: 20
        }, f && e("div", {
            className: pe.displayedBadge
        }, f), e($, {
            justifyContent: "space-between",
            paddingBottom: 16
        }, e(g, null, p && l && c && e(H, null, e(m.H3, {
            color: b ? "primary" : "secondary"
        }, c, "-minute meeting"), e(m.B4, {
            color: b ? "primary" : "secondary",
            paddingTop: 4
        }, p < a && e("span", {
            className: pe.originalPrice
        }, dt(a, l)), dt(p, l), " ·", " ", b ? d > 50 ? "Many availabilities" : `${Ie(d,"slot")} available this month` : "No slots available in the next week"))), b ? e(gr, {
            className: pe.check,
            size: 28
        }) : e(Wi, {
            size: 28,
            className: pe.disabledCheck
        })), e(m.B4, {
            color: "secondary"
        }, e("div", {
            className: pe.description,
            dangerouslySetInnerHTML: w
        }))), e(W, {
            className: pe.button,
            disabled: !b,
            grow: !0,
            localNavigation: !1,
            href: _
        }, b ? "Continue to book" : "No meetings available"))))
    },
    Is = "_meetingDetails_ynxfd_1",
    Fo = {
        meetingDetails: Is
    },
    Bs = (o, n, t) => {
        var i, r, l, s, c, d, u, p, f, h, _, b, w, v, P, L, k, x, N, C, M, T, D, E, U, z, J, Y, ce, F, j, oe, de;
        return !((i = o.location) != null && i.location) && !((r = o.location) != null && r.join_url) ? n && t ? {
            href: ga(t, o.id, {
                addBase: !0
            }),
            label: "View here"
        } : {
            href: null,
            label: "Processing..."
        } : {
            zoom: {
                href: (l = o.location) == null ? void 0 : l.join_url,
                copyContent: (s = o.location) == null ? void 0 : s.join_url,
                label: "Join Zoom"
            },
            zoom_conference: {
                href: (c = o.location) == null ? void 0 : c.join_url,
                copyContent: (d = o.location) == null ? void 0 : d.join_url,
                label: "Join Zoom"
            },
            google: {
                href: (u = o.location) == null ? void 0 : u.join_url,
                copyContent: (p = o.location) == null ? void 0 : p.join_url,
                label: "Join Meet"
            },
            google_conference: {
                href: (f = o.location) == null ? void 0 : f.join_url,
                copyContent: (h = o.location) == null ? void 0 : h.join_url,
                label: "Join Meet"
            },
            inbound_call: {
                href: `tel:${(_=o.location)==null?void 0:_.location}`,
                copyContent: (b = o.location) == null ? void 0 : b.location,
                label: (w = o.location) == null ? void 0 : w.location
            },
            outbound_call: {
                href: null,
                label: `${fa(o.user_name)} will call you at ${(v=o.location)==null?void 0:v.location}`
            },
            microsoft_teams: {
                href: (P = o.location) == null ? void 0 : P.join_url,
                copyContent: (L = o.location) == null ? void 0 : L.join_url,
                label: "Join Teams"
            },
            microsoft_teams_conference: {
                href: (k = o.location) == null ? void 0 : k.join_url,
                copyContent: (x = o.location) == null ? void 0 : x.join_url,
                label: "Join Teams"
            },
            webex: {
                href: (N = o.location) == null ? void 0 : N.join_url,
                copyContent: (C = o.location) == null ? void 0 : C.join_url,
                label: "Join Webex"
            },
            webex_conference: {
                href: (M = o.location) == null ? void 0 : M.join_url,
                copyContent: (T = o.location) == null ? void 0 : T.join_url,
                label: "Join Webex"
            },
            gotomeeting: {
                href: (D = o.location) == null ? void 0 : D.join_url,
                copyContent: (E = o.location) == null ? void 0 : E.join_url,
                label: "Join GoToMeeting"
            },
            gotomeeting_conference: {
                href: (U = o.location) == null ? void 0 : U.join_url,
                copyContent: (z = o.location) == null ? void 0 : z.join_url,
                label: "Join GoToMeeting"
            },
            physical: {
                href: null,
                label: (Y = (J = o.location) == null ? void 0 : J.location) != null ? Y : "Unknown"
            },
            ask_invitee: {
                href: null,
                label: (F = (ce = o.location) == null ? void 0 : ce.location) != null ? F : "Unknown"
            },
            custom: {
                href: null,
                label: (oe = (j = o.location) == null ? void 0 : j.location) != null ? oe : "Unknown"
            }
        }[(de = o.location) == null ? void 0 : de.type] || {}
    },
    Es = ({
        order: o,
        isStatic: n = !1,
        pub: t = null
    }) => {
        const a = Jt(),
            {
                href: i,
                label: r,
                copyContent: l
            } = Bs(o, n, t),
            s = e(m.B3, {
                align: "right"
            }, i ? e("a", {
                href: i
            }, r) : r);
        return n || !l ? s : e($, {
            gap: 4,
            alignItems: "center"
        }, s, e(Ko, {
            size: 24,
            onClick: () => {
                Jo(l), a.popToast(c => e(mt, A(S({}, c), {
                    Icon: _r,
                    text: "Invite link copied"
                })))
            }
        }, e(gi, {
            height: 20
        })))
    },
    Ls = ({
        order: o,
        pub: n
    }) => {
        const t = he(o.start_time),
            a = he(o.end_time),
            i = `${t.format("MMMM D, YYYY")} at ${t.format("h:mm A z")}`,
            r = a.diff(t, "minute");
        return e(g, {
            gap: 8,
            className: Fo.meetingDetails
        }, e($, {
            justifyContent: "space-between",
            gap: 8
        }, e(m.B3, {
            weight: "bold"
        }, "Time"), e(m.B3, null, i)), e($, {
            justifyContent: "space-between",
            gap: 8
        }, e(m.B3, {
            weight: "bold"
        }, "Length"), e(m.B3, null, r, " minutes")), e($, {
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8
        }, e(m.B3, {
            weight: "bold"
        }, "Location"), e(Es, {
            order: o,
            pub: n
        })), e(m.B3, {
            align: "center",
            className: Fo.description,
            paddingTop: 16
        }, e("i", null, o.description)))
    },
    Ms = ({
        booking: o,
        settings: n,
        pub: t
    }) => {
        const a = ft("meetings_embed_publication_name") ? t.name : o.user_name;
        return o.cancelled_at ? e(H, null, e($e, {
            pub: t,
            user_id: n.user_id,
            user_profile_photo_url: n.user_profile_photo_url
        }, e(m.H2, {
            align: "center"
        }, "Your meeting with ", a, " has been cancelled")), o.cancellation_reason && e(H, null, e(m.B3, {
            align: "center",
            paddingBottom: 16
        }, "The author provided the following reason:"), e(m.B4, {
            align: "center",
            paddingBottom: 32
        }, o.cancellation_reason)), o.refunded_at && e(m.B3, {
            align: "center"
        }, "A refund has been issued to your original form of payment."), n.enabled && e(m.B3, {
            align: "center",
            paddingBottom: 16
        }, e(H, null, "You can book another meeting", " ", e("a", {
            href: _a(t, {
                params: {
                    source: "cancellation-rebook"
                }
            })
        }, "here"), "."))) : e(H, null, e($e, {
            pub: t,
            user_id: n.user_id,
            user_profile_photo_url: n.user_profile_photo_url
        }, e(m.H2, {
            align: "center"
        }, "Your meeting with ", a, " has been ", o.num_rebookings > 0 ? "rebooked" : "booked")), e(g, {
            gap: 16,
            alignItems: "center"
        }, e(Ls, {
            order: o,
            pub: t
        }), e(m.B4, {
            align: "center"
        }, "A confirmation of your booking has been emailed to you."), o.refunded_at && e(m.B4, {
            align: "center"
        }, "A refund has been issued to your original form of payment."), e(W, {
            onClick: () => {
                const i = se("referrer"),
                    r = i != null ? i : Qo(t);
                Be(r, {
                    local_navigation: !1
                })
            }
        }, "Done")))
    },
    Us = "_button_1s0kb_1",
    Rs = "_tos_1s0kb_5",
    Ds = "_orderForm_1s0kb_13",
    Fs = "_input_1s0kb_22",
    $s = "_error_1s0kb_43",
    As = "_stripeError_1s0kb_57",
    js = "_originalPrice_1s0kb_62",
    Os = "_filePicker_1s0kb_67",
    Ws = "_fileAttachment_1s0kb_72",
    Hs = "_fileName_1s0kb_78",
    Vs = "_fileRemoveIcon_1s0kb_83",
    zs = "_savedCard_1s0kb_87",
    Ys = "_cardOnFileIcon_1s0kb_92",
    Gs = "_errorContainer_1s0kb_98",
    Js = "_errorTooltip_1s0kb_103",
    Qs = "_checkoutBox_1s0kb_104",
    ne = {
        button: Us,
        tos: Rs,
        orderForm: Ds,
        input: Fs,
        error: $s,
        stripeError: As,
        originalPrice: js,
        filePicker: Os,
        fileAttachment: Ws,
        fileName: Hs,
        fileRemoveIcon: Vs,
        savedCard: zs,
        cardOnFileIcon: Ys,
        errorContainer: Gs,
        errorTooltip: Js,
        checkoutBox: Qs
    },
    Ks = ({
        stripe_publishable_key: o,
        onComplete: n,
        user: t,
        pub: a,
        booking: i,
        settings: r
    }) => {
        const [l, s] = O(i.name), [c, d] = O(i.description), [u, p] = O(null), [f, h] = O(null), [_, b] = O(null), [w, v] = O(null), [P, L] = O(!1), [k, x] = O(null);
        V(() => {
            const F = ir(o, a),
                j = F && rr(F);
            h(F), b(j)
        }, [a, o, h, b]), V(() => {
            X(Nt.MEETING_ORDER_PAGE_VIEWED, {
                user_id: t.id,
                publication_id: a.id
            })
        }, []), V(() => {
            (() => R(void 0, null, function*() {
                var oe;
                const j = yield le.get("/api/v1/subscription/last4");
                (oe = j.body) != null && oe.last4 && v(j.body.last4)
            }))()
        }, [a]);
        const N = r.selected_event_type,
            {
                price: C,
                duration: M,
                subscriber_price: T,
                founding_price: D,
                currency: E
            } = N;
        let U = C;
        t.is_subscribed && T && (U = T), t.is_founding && D && (U = D);
        const z = !!(t != null && t.has_saved_payment),
            J = Dt(() => R(void 0, null, function*() {
                return f ? yield f.createToken(_): {
                    token: null,
                    error: {
                        message: ""
                    }
                }
            }), [f, _]),
            Y = Dt(() => R(void 0, null, function*() {
                var de, y, B, fe;
                L(!0), x(null);
                let F;
                if (!z) {
                    const {
                        token: Z,
                        error: K
                    } = yield J();
                    if (K) {
                        L(!1), x(K && K.message), X(Nt.MEETING_MISSING_PAYMENT, {
                            type: K && K.type,
                            code: K && K.code,
                            decline_code: K && K.decline_code,
                            reason: K && K.message
                        });
                        return
                    }
                    F = Z
                }
                const j = new FormData;
                j.append("name", l), j.append("description", c), F && j.append("stripe_token", JSON.stringify(F)), u && j.append("attachment", u);
                const oe = Intl.DateTimeFormat().resolvedOptions().timeZone;
                oe && j.append("timezone", oe), X(Nt.MEETING_SUBMIT_PRESSED, {
                    publication_id: a.id,
                    user_id: t.id
                });
                try {
                    const Z = yield le.post("/api/v1/meetings/book").send(j);
                    history.pushState({}, "", `/meetings/book/${Z.body.order_id}`), n("schedule", br(Z.body, ["order_id", "calendly_scheduling_uri", "name", "email", "description"]))
                } catch (Z) {
                    (y = (de = Z.response) == null ? void 0 : de.body) != null && y.error ? x((fe = (B = Z.response) == null ? void 0 : B.body) == null ? void 0 : fe.error) : x("Something went wrong.")
                }
                L(!1)
            }), [l, c, J, u, L, x]),
            ce = !!l && !!c;
        return e(H, null, e($e, {
            pub: a,
            user_id: r.user_id,
            user_profile_photo_url: r.user_profile_photo_url
        }, e("div", null, e(m.H2, {
            align: "center",
            size: 20
        }, "Book a meeting with"), e(m.H2, {
            align: "center",
            paddingTop: 4
        }, ft("meetings_embed_publication_name") ? a.name : r.user_name), e(m.B3, {
            align: "center",
            paddingTop: 8
        }, U < C && e("span", {
            className: ne.originalPrice
        }, dt(C, E)), dt(U, E), " · ", M, "-minute meeting"))), e(g, {
            gap: 32
        }, e(Bo, {
            alignment: "vertical",
            label: "Your name"
        }, e(ut, {
            name: "name",
            value: l || "",
            onChange: F => s(F.target.value),
            placeholder: "Name...",
            disabled: P,
            maxLength: 500
        })), e(Bo, {
            alignment: "vertical",
            label: "What do you want to talk about?"
        }, e(hn, {
            name: "description",
            value: c,
            onChange: F => d(F.target.value),
            rows: 4,
            maxLength: 1e3,
            placeholder: "E.g. I’m really interested in knowing...",
            disabled: P
        })), u ? e("div", null, e(m.B4, {
            weight: "semibold",
            paddingBottom: 8
        }, "Add an attachment (optional)"), e($, {
            className: ne.fileAttachment,
            gap: 8,
            alignItems: "center",
            flex: "auto"
        }, e(pn, {
            onClick: () => p(null),
            className: ne.fileRemoveIcon,
            height: 24
        }), e(m.B3, {
            className: ne.fileName
        }, u.name))) : e("div", null, e(m.B4, {
            weight: "semibold",
            paddingBottom: 8
        }, "Add an attachment (optional)"), e(yr, {
            className: ne.filePicker,
            onFileSelected: F => p(F),
            acceptableTypes: ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/pdf, image/*, audio/*, video/*, .pdf, .xls, .xlsx"
        })), e("div", {
            className: ne.checkoutBox
        }, z && e($, {
            className: ne.savedCard,
            padding: 12,
            gap: 12
        }, e(nr, {
            className: ne.cardOnFileIcon
        }), e(m.B4, null, w ? `**** **** **** ${w}` : "Use card on file")), !z && _ && e(sr, {
            className: ne.input,
            element: _
        }), k && e(m.B4, {
            paddingTop: 12,
            className: ne.errorContainer
        }, k), e(ve, {
            paddingTop: 12
        }, e(vr, {
            text: r.enabled ? "You must provide your name and a topic for the meeting before booking." : "You must enable Meetings before one can be booked.",
            disabled: P || ce && r.enabled,
            preferPlacement: "top-center",
            className: ne.errorTooltip
        }, e(W, {
            className: ne.button,
            grow: !0,
            type: "submit",
            onClick: Y,
            disabled: P || !ce || !r.enabled
        }, P ? "Loading..." : "Book meeting"))))), e(m, {
            className: ne.tos,
            paddingBottom: 16,
            size: 14,
            align: "center",
            color: "secondary"
        }, "By booking, you will be automatically signed up for a free subscription to ", a.name, ". Additionally, you agree to Substack's", " ", e("a", {
            href: "https://substack.com/tos",
            target: "__blank"
        }, "Terms of Service"), ", our", " ", e("a", {
            href: "https://substack.com/privacy",
            target: "__blank"
        }, "Privacy Policy"), ", and our", " ", e("a", {
            href: "https://substack.com/ccpa#personal-data-collected",
            target: "__blank"
        }, "Information Collection Notice"), "."))
    };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var jt = function(o, n) {
    return jt = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(t, a) {
        t.__proto__ = a
    } || function(t, a) {
        for (var i in a) a.hasOwnProperty(i) && (t[i] = a[i])
    }, jt(o, n)
};

function Ge(o, n) {
    jt(o, n);

    function t() {
        this.constructor = o
    }
    o.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t)
}
var ze = function() {
    return ze = Object.assign || function(n) {
        for (var t, a = 1, i = arguments.length; a < i; a++) {
            t = arguments[a];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
        }
        return n
    }, ze.apply(this, arguments)
};

function Xs(o, n) {
    n === void 0 && (n = {});
    var t = n.insertAt;
    if (!(!o || typeof document == "undefined")) {
        var a = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        i.type = "text/css", t === "top" && a.firstChild ? a.insertBefore(i, a.firstChild) : a.appendChild(i), i.styleSheet ? i.styleSheet.cssText = o : i.appendChild(document.createTextNode(o))
    }
}
var qs = `/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
    font-size:16px;
    line-height:1.2em
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
    display:inline;
    width:100%;
    height:100%
}

.calendly-popup-content {
    position:relative
}

.calendly-popup-content.calendly-mobile {
    -webkit-overflow-scrolling:touch;
    overflow-y:auto
}

.calendly-overlay {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow:hidden;
    z-index:9999;
    background-color:#a5a5a5;
    background-color:rgba(31,31,31,0.4)
}

.calendly-overlay .calendly-close-overlay {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0
}

.calendly-overlay .calendly-popup {
    box-sizing:border-box;
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translateY(-50%) translateX(-50%);
    transform:translateY(-50%) translateX(-50%);
    width:80%;
    min-width:900px;
    max-width:1000px;
    height:90%;
    max-height:680px
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup {
        position:fixed;
        top:50px;
        left:0;
        right:0;
        bottom:0;
        -webkit-transform:none;
        transform:none;
        width:100%;
        height:auto;
        min-width:0;
        max-height:none
    }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
    height:100%;
}

.calendly-overlay .calendly-popup-close {
    position:absolute;
    top:25px;
    right:25px;
    color:#fff;
    width:19px;
    height:19px;
    cursor:pointer;
    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;
    background-size:contain
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup-close {
        top:15px;
        right:15px
    }
}

.calendly-badge-widget {
    position:fixed;
    right:20px;
    bottom:15px;
    z-index:9998
}

.calendly-badge-widget .calendly-badge-content {
    display:table-cell;
    width:auto;
    height:45px;
    padding:0 30px;
    border-radius:25px;
    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;
    font-family:sans-serif;
    text-align:center;
    vertical-align:middle;
    font-weight:bold;
    font-size:14px;
    color:#fff;
    cursor:pointer
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
    color:#666a73
}

.calendly-badge-widget .calendly-badge-content span {
    display:block;
    font-size:12px
}

.calendly-spinner {
    position:absolute;
    top:50%;
    left:0;
    right:0;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%);
    text-align:center;
    z-index:-1
}

.calendly-spinner>div {
    display:inline-block;
    width:18px;
    height:18px;
    background-color:#e1e1e1;
    border-radius:50%;
    vertical-align:middle;
    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    -webkit-animation-fill-mode:both;
    animation-fill-mode:both
}

.calendly-spinner .calendly-bounce1 {
    -webkit-animation-delay:-0.32s;
    animation-delay:-0.32s
}

.calendly-spinner .calendly-bounce2 {
    -webkit-animation-delay:-0.16s;
    animation-delay:-0.16s
}

@-webkit-keyframes calendly-bouncedelay {
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    } 
    
    40%{
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}

@keyframes calendly-bouncedelay{ 
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    }
    
    40% {
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}`;
Xs(qs);
var De;
(function(o) {
    o.PROFILE_PAGE_VIEWED = "calendly.profile_page_viewed", o.EVENT_TYPE_VIEWED = "calendly.event_type_viewed", o.DATE_AND_TIME_SELECTED = "calendly.date_and_time_selected", o.EVENT_SCHEDULED = "calendly.event_scheduled"
})(De || (De = {}));
var yn = function(o) {
        var n = o.url,
            t = o.prefill,
            a = t === void 0 ? {} : t,
            i = o.pageSettings,
            r = i === void 0 ? {} : i,
            l = o.utm,
            s = l === void 0 ? {} : l,
            c = o.embedType,
            d = r.backgroundColor,
            u = r.hideEventTypeDetails,
            p = r.hideLandingPageDetails,
            f = r.primaryColor,
            h = r.textColor,
            _ = r.hideGdprBanner,
            b = a.customAnswers,
            w = a.date,
            v = a.email,
            P = a.firstName,
            L = a.guests,
            k = a.lastName,
            x = a.location,
            N = a.name,
            C = s.utmCampaign,
            M = s.utmContent,
            T = s.utmMedium,
            D = s.utmSource,
            E = s.utmTerm,
            U = s.salesforce_uuid,
            z = n.indexOf("?"),
            J = z > -1,
            Y = n.slice(z + 1),
            ce = J ? n.slice(0, z) : n,
            F = [J ? Y : null, d ? "background_color=" + d : null, u ? "hide_event_type_details=1" : null, p ? "hide_landing_page_details=1" : null, f ? "primary_color=" + f : null, h ? "text_color=" + h : null, _ ? "hide_gdpr_banner=1" : null, N ? "name=" + encodeURIComponent(N) : null, x ? "location=" + encodeURIComponent(x) : null, P ? "first_name=" + encodeURIComponent(P) : null, k ? "last_name=" + encodeURIComponent(k) : null, L ? "guests=" + L.map(encodeURIComponent).join(",") : null, v ? "email=" + encodeURIComponent(v) : null, w && w instanceof Date ? "date=" + Zs(w) : null, C ? "utm_campaign=" + encodeURIComponent(C) : null, M ? "utm_content=" + encodeURIComponent(M) : null, T ? "utm_medium=" + encodeURIComponent(T) : null, D ? "utm_source=" + encodeURIComponent(D) : null, E ? "utm_term=" + encodeURIComponent(E) : null, U ? "salesforce_uuid=" + encodeURIComponent(U) : null, c ? "embed_type=" + c : null, "embed_domain=1"].concat(b ? tl(b) : []).filter(function(j) {
                return j !== null
            }).join("&");
        return ce + "?" + F
    },
    Zs = function(o) {
        var n = o.getMonth() + 1,
            t = o.getDate(),
            a = o.getFullYear();
        return [a, n < 10 ? "0" + n : n, t < 10 ? "0" + t : t].join("-")
    },
    el = /^a\d{1,2}$/,
    tl = function(o) {
        var n = Object.keys(o).filter(function(t) {
            return t.match(el)
        });
        return n.length ? n.map(function(t) {
            return t + "=" + encodeURIComponent(o[t])
        }) : []
    },
    vn = function(o) {
        Ge(n, o);

        function n() {
            return o !== null && o.apply(this, arguments) || this
        }
        return n.prototype.render = function() {
            return e("div", {
                className: "calendly-spinner"
            }, e("div", {
                className: "calendly-bounce1"
            }), e("div", {
                className: "calendly-bounce2"
            }), e("div", {
                className: "calendly-bounce3"
            }))
        }, n
    }(Q),
    ol = {
        minWidth: "320px",
        height: "630px"
    },
    nl = function(o) {
        Ge(n, o);

        function n(t) {
            var a = o.call(this, t) || this;
            return a.state = {
                isLoading: !0
            }, a.onLoad = a.onLoad.bind(a), a
        }
        return n.prototype.onLoad = function() {
            this.setState({
                isLoading: !1
            })
        }, n.prototype.render = function() {
            var t = yn({
                url: this.props.url,
                pageSettings: this.props.pageSettings,
                prefill: this.props.prefill,
                utm: this.props.utm,
                embedType: "Inline"
            });
            return e("div", {
                className: "calendly-inline-widget",
                style: this.props.styles || ol
            }, this.state.isLoading && e(vn, null), e("iframe", {
                width: "100%",
                height: "100%",
                frameBorder: "0",
                title: this.props.iframeTitle || "Calendly Scheduling Page",
                onLoad: this.onLoad,
                src: t
            }))
        }, n
    }(Q),
    al = function(o) {
        Ge(n, o);

        function n(t) {
            var a = o.call(this, t) || this;
            return a.state = {
                isLoading: !0
            }, a.onLoad = a.onLoad.bind(a), a
        }
        return n.prototype.onLoad = function() {
            this.setState({
                isLoading: !1
            })
        }, n.prototype.render = function() {
            var t = yn({
                url: this.props.url,
                pageSettings: this.props.pageSettings,
                prefill: this.props.prefill,
                utm: this.props.utm,
                embedType: "PopupWidget"
            });
            return e(H, null, this.state.isLoading && e(vn, null), e("iframe", {
                width: "100%",
                height: "100%",
                frameBorder: "0",
                title: this.props.iframeTitle || "Calendly Scheduling Page",
                onLoad: this.onLoad,
                src: t
            }))
        }, n
    }(Q),
    wn = function(o) {
        return o.open ? ba(e("div", {
            className: "calendly-overlay"
        }, e("div", {
            onClick: o.onModalClose,
            className: "calendly-close-overlay"
        }), e("div", {
            className: "calendly-popup"
        }, e("div", {
            className: "calendly-popup-content"
        }, e(al, ze({}, o)))), e("button", {
            className: "calendly-popup-close",
            onClick: o.onModalClose,
            "aria-label": "Close modal",
            style: {
                display: "block",
                border: "none",
                padding: 0
            }
        })), o.rootElement) : null
    };
(function(o) {
    Ge(n, o);

    function n(t) {
        var a = o.call(this, t) || this;
        return a.state = {
            isOpen: !1
        }, a.onClick = a.onClick.bind(a), a.onClose = a.onClose.bind(a), a
    }
    return n.prototype.onClick = function(t) {
        t.preventDefault(), this.setState({
            isOpen: !0
        })
    }, n.prototype.onClose = function(t) {
        t.stopPropagation(), this.setState({
            isOpen: !1
        })
    }, n.prototype.render = function() {
        return e(H, null, e("button", {
            onClick: this.onClick,
            style: this.props.styles || {},
            className: this.props.className || ""
        }, this.props.text), e(wn, ze({}, this.props, {
            open: this.state.isOpen,
            onModalClose: this.onClose,
            rootElement: this.props.rootElement
        })))
    }, n
})(Q);
(function(o) {
    Ge(n, o);

    function n(t) {
        var a = o.call(this, t) || this;
        return a.state = {
            isOpen: !1
        }, a.onClick = a.onClick.bind(a), a.onClose = a.onClose.bind(a), a
    }
    return n.prototype.onClick = function() {
        this.setState({
            isOpen: !0
        })
    }, n.prototype.onClose = function(t) {
        t.stopPropagation(), this.setState({
            isOpen: !1
        })
    }, n.prototype.render = function() {
        return e("div", {
            className: "calendly-badge-widget",
            onClick: this.onClick
        }, e("div", {
            className: "calendly-badge-content",
            style: {
                background: this.props.color || "#00a2ff",
                color: this.props.textColor || "#ffffff"
            }
        }, this.props.text || "Schedule time with me", this.props.branding && e("span", null, "powered by Calendly")), e(wn, ze({}, this.props, {
            open: this.state.isOpen,
            onModalClose: this.onClose,
            rootElement: this.props.rootElement
        })))
    }, n
})(Q);
var $o = "message";

function il(o) {
    var n = o || {},
        t = n.onDateAndTimeSelected,
        a = n.onEventScheduled,
        i = n.onEventTypeViewed,
        r = n.onProfilePageViewed;
    V(function() {
        var l = function(s) {
            var c = s.data.event;
            c === De.DATE_AND_TIME_SELECTED ? t && t(s) : c === De.EVENT_SCHEDULED ? a && a(s) : c === De.EVENT_TYPE_VIEWED ? i && i(s) : c === De.PROFILE_PAGE_VIEWED && r && r(s)
        };
        return window.addEventListener($o, l),
            function() {
                window.removeEventListener($o, l)
            }
    }, [o])
}
const rl = ({
        booking: o,
        onComplete: n,
        settings: t,
        pub: a
    }) => {
        const i = "calendly",
            [r, l] = O(!1),
            [s, c] = O(!1),
            {
                duration: d
            } = t.selected_event_type,
            u = ft("meetings_embed_publication_name") ? a.name : o.user_name,
            p = rn.useMediaQuery({
                maxWidth: 698
            });
        return il({
            onEventScheduled: f => R(void 0, null, function*() {
                var _, b, w;
                const h = (w = (b = (_ = f.data) == null ? void 0 : _.payload) == null ? void 0 : b.event) == null ? void 0 : w.uri;
                l(!0);
                try {
                    const v = yield le.put(`/api/v1/meetings/order/${o.order_id}`).send({
                        calendly_event_uri: h
                    });
                    yield new Promise(P => setTimeout(P, 2e3)), n("confirmation", v.body)
                } catch (v) {
                    c(!0)
                }
            })
        }), s ? e($e, {
            pub: a,
            user_id: t.user_id,
            user_profile_photo_url: t.user_profile_photo_url
        }, e(m.H2, {
            align: "center"
        }, "Something went wrong with your booking. Please contact meetings@substackinc.com.")) : r ? e(ve, {
            justifyContent: "center"
        }, e(wr, null)) : e(H, null, e($e, {
            pub: a,
            user_id: t.user_id,
            user_profile_photo_url: t.user_profile_photo_url
        }, e("div", null, e(m.H2, {
            align: "center"
        }, o.num_rebookings > 0 ? "Rebook" : "Book", " your meeting with ", u), e(m.B3, {
            align: "center",
            paddingTop: 8
        }, "Schedule your ", d, "-minute meeting"))), typeof window != "undefined" && o.calendly_scheduling_uri && e(nl, {
            iframeTitle: i,
            url: `${o.calendly_scheduling_uri}?hide_gdpr_banner=1`,
            prefill: {
                name: o.name || "",
                email: o.email,
                customAnswers: {
                    a1: o.description
                }
            },
            styles: {
                minWidth: "320px",
                height: "700px",
                marginTop: p ? "0px" : "-66px"
            }
        }))
    },
    sl = t => {
        var a = t,
            {
                step: o
            } = a,
            n = it(a, ["step"]);
        switch (o) {
            case "order":
                return e(Ks, S({}, n));
            case "schedule":
                return e(rl, S({}, n));
            case "confirmation":
                return e(Ms, S({}, n))
        }
    },
    Ao = ({
        stripe_publishable_key: o,
        pub: n,
        user: t,
        order: a,
        order_id: i,
        settings: r
    }) => {
        const l = i ? a.calendly_scheduling_uri ? "schedule" : "confirmation" : "order",
            [s, c] = O(l),
            [d, u] = O(S({
                name: t.name,
                email: t.email,
                description: ""
            }, a)),
            p = sl({
                step: s,
                booking: d,
                settings: r,
                order: a,
                onComplete: (f, h) => {
                    u(S(S({}, d), h)), c(f)
                },
                pub: n,
                stripe_publishable_key: o,
                user: t,
                orderId: i
            });
        return e(H, null, e(bn, {
            pub: n
        }), e(ve, {
            style: {
                minHeight: "100vh"
            },
            bg: "secondary",
            alignItems: "center",
            justifyContent: "center"
        }, e(g, {
            paddingX: 24,
            gap: 32,
            style: {
                width: s === "schedule" ? "100%" : 450,
                maxWidth: "100%",
                boxSizing: "border-box"
            }
        }, p)))
    },
    ll = ({
        subdomain: o
    }) => e("div", {
        className: "page typography signup-page",
        path: "/not-found"
    }, e(Le, {
        title: "Not Found"
    }), e("div", {
        className: "container"
    }, e("h2", null, "Not Found"), e("p", null, "The page you are attempting to access is not found."), e("p", null, "If you want to claim this URL you can start a Substack today"), e("p", null, e("a", {
        href: ya(),
        class: "button primary",
        rel: "nofollow"
    }, "Start a Substack")), e("p", null, e("a", {
        href: va({
            query: o,
            params: {
                searching: "publication"
            }
        })
    }, 'Search Substack for "', o, '"'))));
class cl extends Q {
    isSubscribed() {
        const {
            user: n
        } = this.props;
        return n && n.is_subscribed
    }
    isFreeSubscribed() {
        const {
            freeSignup: n,
            user: t
        } = this.props;
        return n || t && t.is_free_subscribed && !t.is_contributor
    }
    onFreeSubscribe(n) {
        if (this.props.publication.plans) {
            let t = Ut(this.props.publication, {
                just_signed_up: !0,
                referral_token: n.body.referral_token
            });
            n.body.prompt_to_login && (t = `/account/login?redirect=${encodeURIComponent(t)}&email=${encodeURIComponent(n.body.email)}`), document.location.href = t
        } else window.location.reload()
    }
    render({
        publication: n,
        user: t,
        freeSignupEmail: a,
        features: i,
        iString: r,
        language: l
    }) {
        if (!(this.isSubscribed() || this.isFreeSubscribed() && !n.plans)) return e("div", {
            className: "subscribe-footer"
        }, e("div", {
            className: "container"
        }, e("p", null, r("Ready for more?")), this.isFreeSubscribed() ? e("div", null, e("a", {
            className: "cta",
            href: Ut(n, {
                utm_source: re.readyForMore
            }),
            native: !0
        }, e(pt, {
            className: "primary"
        }, e("b", null, wo(n, {
            language: l
        }))))) : e($, {
            justifyContent: "center"
        }, e("div", null, e(mn, {
            freeSignupEmail: a,
            onAccentBackground: !0,
            pub: n,
            source: "subscribe_footer",
            submitButtonText: wo(n),
            user: t,
            onSuccess: this.onFreeSubscribe.bind(this)
        })))))
    }
}
const dl = Ga(cl),
    ml = () => {
        const [o, n] = O(!0), t = () => {
            n(!1)
        };
        return e(nn, {
            isOpen: o,
            onClose: t
        }, e(Ii, null, e(g, {
            padding: 16,
            gap: 12
        }, e(m.H3, {
            color: "primary"
        }, "Select a chunk of text to share as a video."), e("img", {
            src: Te("/img/publish/selection.gif"),
            style: {
                padding: "16px",
                borderRadius: "25px"
            }
        }), e(W, {
            onClick: t,
            grow: !0,
            priority: "primary-theme"
        }, "Got it"))))
    },
    ul = "_container_4mtxp_1",
    pl = "_imageContainer_4mtxp_7",
    hl = "_postContainer_4mtxp_12",
    gl = "_imagePreview_4mtxp_16",
    fl = "_shareButton_4mtxp_24",
    _l = "_foundingButton_4mtxp_30",
    bl = "_upsellDescription_4mtxp_35",
    yl = "_countdownContainer_4mtxp_39",
    vl = "_countdownInnerContainer_4mtxp_44",
    wl = "_refreshLink_4mtxp_54",
    ae = {
        container: ul,
        imageContainer: pl,
        postContainer: hl,
        imagePreview: gl,
        shareButton: fl,
        foundingButton: _l,
        upsellDescription: bl,
        countdownContainer: yl,
        countdownInnerContainer: vl,
        refreshLink: wl
    },
    Cl = ({
        post: o,
        publication: n,
        user: t,
        freeSignup: a,
        freeSignupEmail: i
    }) => {
        var v, P, L, k, x, N, C, M, T, D;
        const r = Go(),
            l = o.cover_image,
            s = o.title,
            c = o.description,
            d = wa(n, o),
            u = ((v = o.postSchedule) == null ? void 0 : v.email_audience) === "founding" && (t == null ? void 0 : t.is_founding) || ((P = o.postSchedule) == null ? void 0 : P.email_audience) === "only_paid" && t && qo(t, n) || ((L = o.postSchedule) == null ? void 0 : L.email_audience) === "everyone" && (t == null ? void 0 : t.is_free_subscribed),
            [p, f] = O(he((k = o.postSchedule) == null ? void 0 : k.trigger_at).diff(he(), "second")),
            h = Math.floor(p / 60 / 60 / 24),
            _ = Math.floor(p / 60 / 60 % 24),
            b = Math.floor(p / 60 % 60),
            w = p % 60;
        return V(() => {
            const E = setInterval(() => {
                var U;
                f(he((U = o.postSchedule) == null ? void 0 : U.trigger_at).diff(he(), "second"))
            }, 500);
            return () => {
                clearInterval(E)
            }
        }), V(() => {
            X(ge.SCHEDULED_POST_SEEN, {
                post_id: o.id
            })
        }, []), e(H, null, e(qt, {
            post: o,
            publication: n
        }), e(g, {
            className: ae.container,
            alignItems: "center",
            gap: 96,
            paddingTop: {
                desktop: 64,
                mobile: 32
            },
            paddingX: 12
        }, e(g, {
            className: ae.postAndImageContainer,
            alignItems: "center",
            gap: 32
        }, l && e("div", {
            className: ae.imageContainer
        }, e("img", {
            src: l,
            className: ae.imagePreview
        })), e(g, {
            className: ae.postContainer,
            alignItems: "center",
            gap: 4
        }, e(m.H2, {
            color: "pub-primary-text",
            align: "center"
        }, s), e(m.B3, {
            color: "pub-secondary-text",
            align: "center"
        }, Ca(c, 135)), e(m.Meta, {
            color: "pub-secondary-text",
            align: "center"
        }, ((x = o.postSchedule) == null ? void 0 : x.email_audience) === "founding" ? e(H, null, e(m.Meta, {
            as: "span",
            color: "pub-accent"
        }, "Founding"), d ? "  •  " : "") : ((N = o.postSchedule) == null ? void 0 : N.email_audience) === "only_paid" ? e(H, null, e(m.Meta, {
            as: "span",
            color: "pub-accent"
        }, "Paid"), d ? "  •  " : "") : "", d ? `By ${d}` : ""))), e(g, {
            className: ae.upsellContainer,
            alignItems: "center"
        }, u ? e($, {
            gap: 12
        }, e(W, {
            onClick: () => {
                var E;
                t != null && t.is_admin || t != null && t.is_contributor ? Be(xa(n, o.id), {
                    local_navigation: !1
                }) : (E = r.current) == null || E.open()
            },
            className: ae.shareButton,
            leftIcon: e(fi, null),
            priority: "primary-theme"
        }, "Share"), t != null && t.is_admin || t != null && t.is_contributor ? e(W, {
            onClick: () => {
                Be(ka(n, o.id, !!o.editor_v2), {
                    local_navigation: !1
                })
            },
            className: ae.shareButton,
            leftIcon: e(dn, null),
            priority: "secondary-theme"
        }, "Edit Post") : null) : ((C = o.postSchedule) == null ? void 0 : C.email_audience) === "founding" && !(t != null && t.is_founding) ? e(W, {
            className: ae.foundingButton,
            onClick: () => {
                var U, z;
                const E = (z = (U = n.plans) == null ? void 0 : U.find(J => {
                    var Y;
                    return (Y = J.metadata) == null ? void 0 : Y.founding
                })) == null ? void 0 : z.id;
                Be(E ? gt(n, {
                    addBase: !0,
                    params: {
                        next: document.location.href,
                        utm_source: re.postScheduledPage,
                        utm_medium: He.web,
                        utm_content: o.id,
                        selectedPlanId: E
                    }
                }) : Sa(n, {
                    simple: !0,
                    next: document.location.href,
                    utm_source: re.postScheduledPage,
                    utm_medium: He.web,
                    utm_content: o.id,
                    plan: "founding"
                }), {
                    local_navigation: !1
                })
            }
        }, "Upgrade to founding") : e(Qt, {
            pub: n,
            post: o,
            user: t,
            freeSignup: a,
            freeSignupEmail: i,
            isStatic: !1,
            source: "post-scheduled-page"
        }), e(m.B3, {
            className: ae.upsellDescription,
            color: "pub-primary-text",
            align: "center"
        }, "Publishes on ", he((M = o.postSchedule) == null ? void 0 : M.trigger_at).format("MMMM Do, h:mma"), ".", " ", t != null && t.is_admin || t != null && t.is_contributor ? "" : u ? "You’ll receive this post in your inbox when it’s live. Meanwhile, help spread the word!" : ((T = o.postSchedule) == null ? void 0 : T.email_audience) === "founding" && (t != null && t.is_free_subscribed) ? "Upgrade to founding and receive this post in your inbox when it’s live" : ((D = o.postSchedule) == null ? void 0 : D.email_audience) === "only_paid" && (t != null && t.is_free_subscribed) ? "Upgrade to paid and receive this post in your inbox when it’s live" : "Subscribe now and receive the post in your inbox when it’s live"))), e("div", {
            className: ae.countdownContainer
        }, e(g, {
            className: ae.countdownInnerContainer,
            alignItems: "center",
            gap: 4
        }, p > 0 ? e(m.B3, {
            color: "pub-secondary-text",
            align: "center"
        }, "Available in ", h > 0 ? `${Ie(h,"day")}, ` : "", h > 0 || _ > 0 ? `${Ie(_,"hour")}, ` : "", h > 0 || _ > 0 || b > 0 ? `${Ie(b,"minute")}${h>0||_>0?",":""} and ` : "", Ie(w, "second")) : e(m.B3, {
            color: "pub-secondary-text",
            align: "center"
        }, "Available now!", " ", e(m.B3, {
            as: "a",
            color: "pub-secondary-text",
            align: "center",
            onClick: () => {
                location.reload()
            },
            className: ae.refreshLink,
            decoration: "underline"
        }, "Refresh to see the post"), "."))), e(ii, {
            ref: r,
            user: t,
            pub: n,
            post: o
        }))
    };
class Ot extends Q {
    constructor(t, a) {
        super(t, a);
        te(this, "updateSubscribeTakeover", () => {
            const a = `pub-${this.props.publication.id}-takeover-next-shown-at`,
                i = Xi(a),
                r = !i || Date.now() >= i;
            Ia() ? this.state.subscribeTakeOverTimer && (r && Date.now() - this.state.subscribeTakeOverTimer >= 2 * 60 * 1e3 && this.setState({
                showSubscribeTakeover: !0
            }), this.setState({
                subscribeTakeOverTimer: null
            }), this.updateSubscribeTimers()) : this.state.subscribeTakeOverTimer || this.setState({
                subscribeTakeOverTimer: new Date
            })
        });
        te(this, "updateSubscribeTimers", () => {
            const t = this.props.publication.id,
                a = `pub-${t}-subscribe-prompt-next-shown-at`,
                i = `pub-${t}-takeover-next-shown-at`;
            Eo(a, he().add(1, "hour").valueOf()), Eo(i, he().add(1, "hour").valueOf()), this.setState({
                hideSubscribePrompt: !0
            })
        });
        te(this, "onChangeComment", t => {
            this.setState({
                comments: qi(this.state.comments, t)
            })
        });
        te(this, "onVisible", t => {
            const a = `${t} Seen`;
            this.state.post && (this.state[a] || (this.setState({
                [a]: !0
            }), X(a, {
                post_id: this.state.post.id,
                post_audience: this.state.post.audience,
                post_type: this.state.post.type
            })))
        });
        te(this, "_inlineComments", () => {
            const {
                inlineComments: t,
                publication: a
            } = this.props;
            return t || Ea(a, this.state.post || this.props.post)
        });
        te(this, "fillEmbeddedEmailInputs", () => {
            var i;
            const t = document.querySelectorAll('article.post input[type="email"]'),
                a = ((i = this.state.user) == null ? void 0 : i.email) || this.props.freeSignupEmail;
            if (a)
                for (const r of t) r.value = a;
            this.setState({
                embeddedEmailInputsFilled: !0
            })
        });
        let {
            user: i
        } = t;
        this.I18N = I18N.i({
            pub: t.publication
        }), t.postPreview && (i = A(S({}, i), {
            is_draft: !1,
            is_subscribed: t.postPreview !== "free",
            is_founding: t.postPreview === "founding",
            is_contributor: !1
        })), t.post && [t.post.slug, t.post.uuid].filter(r => r).includes(t.slug) && !this.shouldRedirectToComments(t.post) ? this.state = {
            post: t.post,
            comments: t.renderedComments,
            user: i
        } : this.state = {
            post: null,
            comments: null,
            user: i
        }
    }
    componentDidMount() {
        return R(this, null, function*() {
            Fe(), this.cleanUpTikTokEnhanceListener = un();
            const t = this.props.post && [this.props.post.slug, this.props.post.uuid].filter(a => a).includes(this.props.slug) && this.props.post;
            if (this.shouldRedirectToComments(t) ? this.redirectToComments(t) : this.state.post || (yield this.loadPost()), this.triggerShareOnLoad(), this.fillEmbeddedEmailInputs(), this.props.justPublished) {
                Pe("justPublished"), Rt(er(this.props.publication, this.props.post)[0]);
                const a = tr(this.props.publication, this.props.post);
                a && Rt(a)
            }
            if ((this.props.embeddedPostPublications || this.props.embeddedPostPublications === "") && Pe("embeddedPostPublications"), this.props.autoSharedOnTwitter && Pe("autoSharedOnTwitter"), this.props.showRestackModal && Pe("showRestackModal"), this.props.action && Pe("action"), !this.props.showWelcome && !this.props.launchWelcomePage && Na(this.updateSubscribeTakeover), this.props.showWelcome && (Pe("showWelcome"), this.updateSubscribeTimers()), this.props.showWelcomeOnShare && (Pe("showWelcomeOnShare"), (this.props.launchWelcomePage || this.props.skipIntoPopupRender) && this.updateSubscribeTimers()), this.props.selectionFromQuery && Sr(this.props.selectionFromQuery), this.props.trackFrontendVisit && (X(ge.POST_PAGE_VISIT_TRACKED, {
                    post_id: t.id
                }), this.context.exposeExperiment("check_for_tracking_disabled")), this.props.user || this.context.exposeExperiment("test_cached_post_page"), !We()) {
                const a = yield Pa("/api/v1/welcome_page_data");
                this.setState(a)
            }
        })
    }
    componentWillUnmount() {
        var t;
        (t = this.cleanUpTikTokEnhanceListener) == null || t.call(this), Ta(this.updateSubscribeTakeover)
    }
    componentDidUpdate(t) {
        return R(this, null, function*() {
            t.slug !== this.props.slug && this.loadPost(), this.state.embeddedEmailInputsFilled || this.fillEmbeddedEmailInputs()
        })
    }
    shouldRedirectToComments(t) {
        if (t && t.type === "thread") return !0
    }
    redirectToComments(t) {
        Ba(zt(this.props.publication, t, {
            comments: !0,
            noBase: !0
        }), !0)
    }
    loadPost() {
        return R(this, null, function*() {
            if (this.setState({
                    embeddedEmailInputsFilled: !1
                }), this.props.post && [this.props.post.slug, this.props.post.uuid].filter(t => t).includes(this.props.slug) && !this.shouldRedirectToComments(this.props.post)) this.setState({
                post: this.props.post,
                comments: this.props.renderedComments
            }, () => Fe());
            else {
                this.setState({
                    post: null,
                    comments: null
                });
                try {
                    const t = yield le.get(`/api/v1/posts/${this.props.slug}`).query({
                        postPreview: this.props.postPreview,
                        updated: this.props.updated,
                        sub: this.props.sub,
                        device: this.props.device,
                        audience: this.props.audience,
                        free_preview: this.props.free_preview,
                        freemail: this.props.freemail
                    });
                    this.shouldRedirectToComments(t.body) ? this.redirectToComments(t.body) : (yield Yo(this, {
                        post: t.body,
                        comments: t.body.comments,
                        stateThemeVariables: t.body.themeVariables
                    }), Fe())
                } catch (t) {
                    console.error("Failed to load post:", t), t.status === 404 ? this.setState({
                        notFound: !0
                    }) : alert(Ee(t))
                }
            }
        })
    }
    triggerShareOnLoad() {
        if (se("action") === "share") window.history.replaceState({}, document.title, ht({
            action: null
        }));
        else return;
        this.post && this.post.triggerShare({
            fromEmail: !0
        })
    }
    render({
        slug: t,
        freeSignup: a,
        freeSignupEmail: i,
        publication: r,
        reaction_token: l,
        hide_intro_popup: s,
        unlock: c,
        sort: d,
        search: u,
        children: p,
        showWelcome: f,
        skipIntoPopupRender: h,
        launchWelcomePage: _,
        justPublished: b,
        autoSharedOnTwitter: w,
        readerIsSearchCrawler: v,
        postPreview: P,
        truncatedPost: L,
        selectionFromQuery: k,
        embeddedPublications: x,
        siteConfigs: N = {},
        freeTrialCoupon: C,
        showRestackModal: M,
        action: T,
        publicationSettings: D,
        show_reaction_upsell: E,
        stripe_publishable_key: U,
        bannedFromNotes: z,
        themeVariables: J,
        referringUser: Y,
        clip: ce,
        recentEpisodes: F,
        followPrompt: j
    }, {
        comments: oe,
        notFound: de,
        post: y,
        user: B,
        showSubscribeTakeover: fe,
        stateThemeVariables: Z,
        tab: K,
        hideSubscribePrompt: to,
        blurbs: Me,
        topThreePosts: _t,
        topThreeSubscribers: bt
    }) {
        const {
            iString: Je
        } = this.I18N, yt = this._inlineComments(), Qe = y != null && y.audience ? La(B, y) : !0, ke = (B == null ? void 0 : B.is_subscribed) && Qe, Ke = y && y.slug && y.slug !== "coming-soon" && y.type !== "page", me = Ma({
            publication: r,
            post: y
        }), _e = Ua({
            publication: r,
            post: y
        }), vt = ke || (B == null ? void 0 : B.is_free_subscriber) || a, ue = ["video", "podcast"].includes(y == null ? void 0 : y.type), Xe = Z || J, we = !(y != null && y.hidden) && (Ra(t) || ke || v || y && !Co(y.audience) || y && !y.slug), qe = !!y && Da({
            post: y
        }) && !ke, Ze = !we || (B == null ? void 0 : B.is_contributor) && y && Co(y.audience), wt = b && (B == null ? void 0 : B.is_contributor) && !this.props.publication.invite_only && !["page"].includes(y.type);
        let et = !1;
        if (typeof window != "undefined" && (et = new URLSearchParams(window.location.search).get("selectQuote") === "true"), y != null && y.is_scheduled) return e(Cl, {
            freeSignup: a,
            freeSignupEmail: i,
            user: B,
            post: y,
            publication: r
        });
        const tt = e(kl, {
                commentsEnabled: me,
                comments: oe,
                post: y,
                slug: t,
                user: B,
                freeSignup: a,
                freeSignupEmail: i,
                publication: r,
                reaction_token: l,
                onVisible: this.onVisible,
                onChangeComment: this.onChangeComment,
                inlineComments: yt,
                selectionFromQuery: k,
                onChange: ({
                    post: G
                }) => {
                    this.setState({
                        post: A(S({}, y), {
                            comment_count: G.comment_count
                        })
                    })
                },
                bannedFromNotes: z
            }),
            oo = ue ? zi : sn;
        return e("div", null, T === "restack-comment" && e(Nl, {
            post: y,
            pub: r,
            selection: k
        }), e(Sl, {
            pub: r,
            post: y
        }), !h && (_ || f || fe) ? e(Xo, {
            freeSignup: a,
            freeSignupEmail: i,
            user: B,
            post: y,
            publication: r,
            hidden: s,
            launchWelcomePage: _,
            showOnMount: _,
            blurbs: Me,
            topThreePosts: _t,
            topThreeSubscribers: bt
        }) : null, !ue && e(xl, {
            user: B,
            referringUser: Y,
            post: y,
            publication: r,
            readerIsSearchCrawler: v,
            publicationSettings: D
        }), e("div", {
            className: q("single-post-container")
        }, e("div", {
            className: q({
                container: !ue
            })
        }, e("div", {
            className: "single-post"
        }, e(qt, {
            publication: r,
            post: y,
            clip: ce,
            selection: k,
            siteConfigs: N
        }), y ? e(oo, {
            ref: G => {
                this.post = G
            },
            commentsEnabled: me,
            isServingFreePodcastUrl: qe,
            isShowsEpisodePage: ue,
            postPreview: P,
            showComments: _e,
            user: B,
            post: y,
            pub: r,
            freeSignup: a,
            freeSignupEmail: i,
            reaction_token: l,
            disableSubscribePrompt: to || (_ || f) && !s,
            paywall: !we,
            noTitleLink: !0,
            onChange: G => this.setState(G),
            fromPostPage: !0,
            freeTrialCoupon: C,
            showRestackModal: !!M,
            stripe_publishable_key: U,
            readerIsSearchCrawler: v,
            renderComments: () => tt,
            themeVariables: Xe,
            referringUser: Y,
            setTab: G => {
                this.setState({
                    tab: G
                })
            },
            recentEpisodes: F,
            forceFollowPrompt: j
        }) : de ? e("p", {
            className: "main-loader"
        }, Je("Post not found")) : e(ln, {
            pub: r
        }), p)), Ke && we && [_e && K !== "comments" && !ue && tt, r.has_posts && !ue && e("div", {
            className: "single-post-section"
        }, e("div", {
            className: "container"
        }, e(Ve, {
            onVisible: () => this.onVisible("Top Posts Footer")
        }), e(fn, {
            user: B != null ? B : null,
            freeSignup: a,
            freeSignupEmail: i,
            pub: r,
            maxPosts: !Ze && !ke && !(vt && !r.plans) ? 3 : 10,
            filterPostsPredicate: G => G.id !== y.id,
            sort: d,
            search: u,
            stateInUrl: !0,
            sortTabs: G => {
                const Ae = G.findIndex(ot => ot.id === "top");
                return Ae !== -1 ? [G[Ae]].concat(G.filter((ot, Ct) => Ct !== Ae)) : null
            },
            delayFirstLoad: 1e3,
            source: "post",
            isBelowTheFold: !0
        }))), !Ze && [e(Ve, {
            onVisible: () => this.onVisible("Subscribe Footer")
        }), e(dl, {
            publication: r,
            user: B,
            freeSignupEmail: i,
            freeSignup: a
        })]], wt ? e(Hi, {
            post: y,
            autoSharedOnTwitter: w === "true",
            publicationTwitterScreenName: r.twitter_screen_name,
            publication: r,
            showAfter: x != null && x.length ? e(Vi, {
                pub: r,
                pubsToRecommend: x
            }) : null
        }) : null, E ? e(_i, {
            user: B,
            pub: r,
            post: y
        }) : null, et && e(ml, null), e(bi, {
            user: B,
            pub: r,
            post: y,
            mediaUploadId: this.props.clipId
        })))
    }
}
te(Ot, "contextType", xr);

function xl({
    user: o,
    referringUser: n,
    post: t,
    publication: a,
    readerIsSearchCrawler: i,
    publicationSettings: r
}) {
    const l = t && a && !i,
        s = o && o.is_contributor && (t == null ? void 0 : t.slug) == "coming-soon" && !(r != null && r.seen_coming_soon_explainer);
    return e(H, null, l && e(Nr, {
        subdomain: a.subdomain,
        post: t
    }), s && e(Xa, null))
}
class kl extends Q {
    constructor(t, a) {
        super(t, a);
        te(this, "modalRef", xo());
        this.I18N = I18N.i({
            pub: t.publication
        }), this.inputRef = xo(), this.handleFocusInput = () => {
            this.inputRef.current.focus()
        }, this.state = {
            comments: t.comments,
            reactionSigninComment: null
        }
    }
    componentDidMount() {
        document.addEventListener(To, this.handleFocusInput)
    }
    componentWillUnmount() {
        document.removeEventListener(To, this.handleFocusInput)
    }
    render({
        commentsEnabled: t,
        inlineComments: a,
        post: i,
        user: r,
        freeSignup: l,
        freeSignupEmail: s,
        publication: c,
        reaction_token: d,
        onVisible: u,
        onChangeComment: p,
        selectionFromQuery: f,
        slug: h,
        onChange: _,
        bannedFromNotes: b
    }, {
        comments: w,
        reactionSigninComment: v
    }) {
        if (a) return e("div", {
            id: cr
        }, e($t, {
            slug: h,
            user: r,
            freeSignupEmail: s,
            freeSignup: l,
            post: i,
            publication: c,
            post_reaction_token: d,
            selectionFromQuery: f,
            initialComments: w,
            inline: !0,
            onChange: _
        }));
        const {
            iPlural: P,
            iString: L
        } = this.I18N, k = (x, N) => R(this, null, function*() {
            return Fi({
                user: r,
                reactionToken: d,
                comments: w,
                id: x,
                reacted: N,
                setComments: C => this.setState({
                    comments: C
                }),
                onNeedsSignin: C => new Promise(M => this.setState({
                    reactionSigninComment: C
                }, () => this.modalRef.current.open(M)))
            })
        });
        return e("div", {
            className: "single-post-section comments-section"
        }, e("div", {
            className: "container"
        }, (t || i.comment_count > 0) && e("div", {
            className: "comments-section-title"
        }, i.comment_count > 0 ? P("1 Comment", "%1 Comments", i.comment_count) : L("Comments")), e(Ve, {
            onVisible: () => u("Post Comments Footer")
        }), t && e(Ui, {
            user: r,
            freeSignup: l,
            freeSignupEmail: s,
            pub: c,
            post: i,
            token: d,
            ref: this.inputRef,
            bannedFromNotes: b
        }), w.length > 0 && !t && e(Ri, {
            post: i
        }), w && w.length > 0 && c.community_enabled && e(Di, {
            className: "post-page-root-comment-list",
            key: `post:${i.id}`,
            user: r,
            freeSignup: l,
            freeSignupEmail: s,
            pub: c,
            post: i,
            comments: w,
            reaction_token: d,
            onChange: p,
            updateCommentReacted: k,
            noRestack: !0
        }), t && i.comment_count > (w || []).length && e("a", {
            className: "more-comments",
            href: Zi(i, c)
        }, P("1 more comment...", "%1 more comments...", i.comment_count - (w || []).length)), v && e(yi, {
            comment: v,
            pub: c,
            user: r,
            react: () => k(v.id, !0),
            modalRef: this.modalRef
        })))
    }
}
const Sl = ({
    pub: o,
    post: n
}) => {
    if (n) return e("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: Cr(kr(o, n), {
                json: !0,
                isScriptContext: !0
            })
        }
    })
};

function Nl({
    pub: o,
    post: n,
    selection: t
}) {
    const a = vi();
    return V(() => {
        a.open({
            restackUrl: zt(o, n, {
                urlParams: {
                    selection: t
                }
            })
        })
    }, []), null
}
const Pl = "_root_lj1wf_1",
    Tl = "_pageTitle_lj1wf_10",
    Il = "_container_lj1wf_15",
    Bl = "_imageContainer_lj1wf_21",
    El = "_divider_lj1wf_28",
    Ll = "_text_lj1wf_35",
    Ml = "_textFooter_lj1wf_40",
    Ul = "_textWithGreyBox_lj1wf_50",
    Re = {
        root: Pl,
        pageTitle: Tl,
        container: Il,
        imageContainer: Bl,
        divider: El,
        text: Ll,
        textFooter: Ml,
        textWithGreyBox: Ul
    },
    Rl = o => {
        const n = o.themeVariables,
            t = n.web_bg_color || n.cover_bg_color,
            a = o.post.cover_image || o.publication.cover_photo_url,
            [i, r] = O("square");
        return V(() => {
            X(ge.WRITER_MEDIA_ASSETS_PAGE_VISITED, {
                post_id: o.post.id
            })
        }, [o.post.id]), e("div", {
            className: Re.root
        }, e(m.H2, {
            color: "pub-primary-text",
            className: Re.pageTitle
        }, "Share ", o.post.title), e(m.B3, {
            color: "pub-primary-text",
            className: Re.text
        }, "We’ve generated custom images to help you promote your post on other social networks. Download your images and share with a link to your post!"), e($, {
            paddingY: 24,
            gap: 8,
            alignItems: "center"
        }, e(m.B4, {
            weight: "semibold",
            color: "pub-primary-text"
        }, "Aspect Ratio:"), e(fr, {
            name: "aspectRatio",
            value: i,
            onChange: r,
            options: [{
                value: "square",
                label: "Square"
            }, {
                value: "instagram",
                label: We() ? "Insta" : "Instagram"
            }, {
                value: "stories",
                label: We() ? "IG Stories" : "Instagram Stories"
            }],
            horizontal: !0,
            labelProps: {
                color: "pub-primary-text"
            }
        })), e(g, {
            justifyContent: "center",
            className: Re.container
        }, e($, {
            paddingBottom: 16,
            alignItems: "center",
            justifyContent: "space-between"
        }, e(m.H4, {
            color: "pub-primary-text"
        }, o.post.title), !We() && e(W, {
            priority: "secondary",
            leftIcon: e(Pr, {
                stroke: "#404040",
                size: 20
            }),
            href: Ce(`/api/v1/press_kit/all/${o.post.id}`, {
                aspectRatio: i,
                isDraft: o.post.is_draft
            }),
            newTab: !0
        }, "Download")), e("div", {
            className: Re.divider
        }), We() && e(Yt, {
            bg: "secondary",
            radius: "md",
            color: "secondary",
            paddingTop: 8,
            paddingBottom: 8,
            style: {
                "margin-bottom": "16px"
            }
        }, e(m.B4, {
            align: "center",
            color: "pub-secondary-text",
            size: 14
        }, "Press and hold to download an image, or tap to share.")), e(ve, {
            wrap: "wrap",
            justifyContent: "space-between"
        }, e(rt, {
            pub: o.publication,
            post: o.post,
            style: {
                bgColor: t,
                textColor: n.print_on_web_bg_color || n.cover_print_primary || "#1a1a1a",
                aspectRatio: i
            },
            text: "Background Color"
        }), n.background_pop && e(rt, {
            pub: o.publication,
            post: o.post,
            style: {
                bgColor: n.background_pop,
                textColor: n.print_on_pop,
                aspectRatio: i
            },
            text: "Accent Color"
        }), a && e(rt, {
            pub: o.publication,
            post: o.post,
            style: {
                bgImage: !0,
                textColor: "#ffffff",
                aspectRatio: i
            },
            text: "Image"
        }), t.toLowerCase() !== "#ffffff" ? e(rt, {
            pub: o.publication,
            post: o.post,
            style: {
                bgColor: "#ffffff",
                textColor: "#404040",
                aspectRatio: i
            },
            text: "Black and White"
        }) : null)), e("div", {
            className: Re.textFooter
        }, e(m.B4, {
            color: "pub-secondary-text"
        }, "These images are generated from your publication theme colors which you can edit in your", " ", e("a", {
            href: Fa(o.publication, {
                addBase: !0,
                section: "theme"
            })
        }, "publication settings"), " ", "and the social preview which you can edit in your post settings.")))
    },
    jo = ({
        sitemapHeader: o,
        sitemapDescription: n,
        sitemapLinks: t
    }) => e("div", {
        className: "container typography sitemap-page"
    }, e(Le, {
        title: o,
        description: n
    }), e("h1", null, o), e("div", null, t.map(a => e("p", null, e("a", {
        className: "sitemap-link",
        href: a.href,
        native: !0
    }, a.text))))),
    Dl = "_questionListDisabled_18pxu_1",
    Fl = "_dropdown_18pxu_5",
    Wt = {
        questionListDisabled: Dl,
        dropdown: Fl
    },
    Cn = o => ["checkbox", "checkbox_freeform", "radio", "radio_freeform"].includes(o || ""),
    xn = o => ["checkbox_freeform", "radio_freeform"].includes(o || ""),
    Oo = {
        container: o => A(S({}, o), {
            flex: 1
        }),
        dropdownIndicator: o => A(S({}, o), {
            color: "var(--color-secondary)"
        }),
        control: o => A(S({}, o), {
            fontSize: 14,
            color: "var(--color-secondary)",
            boxShadow: "none"
        }),
        option: (o, n) => A(S({}, o), {
            fontSize: 14,
            color: "var(--color-secondary)",
            backgroundColor: n.isFocused ? "var(--color-bg-secondary)" : n.isSelected ? "var(--color-bg-accent-primary-hover)" : "white"
        }),
        noOptionsMessage: o => A(S({}, o), {
            fontSize: 14,
            color: "var(--color-secondary)"
        })
    },
    $l = ({
        question: o,
        responseData: n,
        onChange: t,
        disabled: a = !1,
        countries: i
    }) => {
        const {
            iString: r
        } = xe(), l = ko(() => {
            if (o.type === "country" && n.value && i) {
                const c = String(n.value).split(",")[0],
                    d = i.find(u => u.countryShortCode === c);
                return d ? {
                    value: d.countryShortCode,
                    label: d.countryName,
                    regions: d.regions
                } : null
            }
            return null
        }, [n.value]), s = ko(() => {
            if (o.type === "country" && (l != null && l.regions) && i && n.value) {
                const c = String(n.value).split(",")[1],
                    d = l.regions.find(u => u.shortCode === c);
                return d ? {
                    value: d.shortCode,
                    label: d.name
                } : null
            }
            return null
        }, [l, n.value]);
        return e(g, {
            gap: 16
        }, e(m.H4, null, o.displayLabel, o.is_required && e(m.H4, {
            as: "span",
            color: "error"
        }, "*")), o.type === "text" && e(hn, {
            disabled: a,
            placeholder: r("Type here"),
            value: String(n.value || ""),
            onChange: c => {
                const d = n;
                d.value = c.target.value, t(d)
            }
        }), o.type === "number" && e(ut, {
            disabled: a,
            placeholder: r("Type number value here"),
            value: Number.isNaN(Number(n.value)) ? "" : Number(n.value),
            onChange: c => {
                const d = c.target.value.replace(/[^\d]/g, ""),
                    u = n;
                u.value = Number(d) || 0, t(u)
            }
        }), o.type === "country" && e(g, {
            gap: 24
        }, e(Lo, {
            className: Wt.dropdown,
            options: i == null ? void 0 : i.map(c => ({
                label: c.countryName,
                value: c.countryShortCode
            })),
            onChange: c => {
                const d = c.value;
                t(A(S({}, n), {
                    value: d
                }))
            },
            value: l,
            placeholder: r("Select or search for a country..."),
            noOptionsMessage: () => r("No options found."),
            theme: So({
                primary: "var(--color-secondary)",
                neutral0: "white"
            }),
            isSearchable: !0,
            styles: Oo
        }), n.value && (l == null ? void 0 : l.regions) && e(Lo, {
            className: Wt.dropdown,
            options: l.regions.map(c => ({
                label: c.name,
                value: c.shortCode
            })),
            onChange: c => {
                const d = c.value;
                t(A(S({}, n), {
                    value: `${String(n.value).split(",")[0]},${d}`
                }))
            },
            value: s,
            placeholder: r("Select or search for a state, province, or region..."),
            noOptionsMessage: () => r("No options found."),
            theme: So({
                primary: "var(--color-secondary)",
                neutral0: "white"
            }),
            isSearchable: !0,
            styles: Oo
        })), Cn(o.type) && o.options && o.options.map(c => e($, {
            as: "label",
            gap: 16
        }, (o.type === "checkbox" || o.type === "checkbox_freeform") && e(Po, {
            disabled: a,
            withTheme: !0,
            name: `${o.id}check`,
            checked: n.options.indexOf(c.id) > -1,
            onChange: d => {
                const u = n.options.filter(p => p !== c.id);
                d && u.push(c.id), t(A(S({}, n), {
                    options: u
                }))
            }
        }), (o.type === "radio" || o.type === "radio_freeform") && e(Mo, {
            disabled: a,
            color: "accent",
            value: c.id,
            name: `${o.id}check`,
            checked: n.options.indexOf(c.id) > -1,
            onClick: d => {
                const u = [];
                d.target.checked && u.push(c.id), t({
                    value: "",
                    options: u
                })
            }
        }), e(m.B3, null, c.label))), xn(o.type) && e($, {
            as: "label",
            gap: 16,
            alignItems: "center"
        }, (o.type === "checkbox" || o.type === "checkbox_freeform") && e(Po, {
            disabled: a,
            withTheme: !0,
            name: `${o.id}check`,
            checked: String(n.value).length > 0,
            onChange: c => {
                t(c ? A(S({}, n), {
                    value: " "
                }) : A(S({}, n), {
                    value: ""
                }))
            }
        }), (o.type === "radio" || o.type === "radio_freeform") && e(Mo, {
            disabled: a,
            color: "accent",
            value: "text",
            name: `${o.id}check`,
            checked: String(n.value).length > 0,
            onClick: () => {
                t({
                    options: [],
                    value: " "
                })
            }
        }), e(ut, {
            disabled: a,
            placeholder: o.label === "What is your gender?" ? r("Prefer to self describe") : r("Other..."),
            value: String(n.value || ""),
            onChange: c => {
                const d = n;
                d.value = c.target.value, d.value.length > 0 && (o.type === "radio" || o.type === "radio_freeform") && (d.options = []), t(d)
            }
        })))
    },
    Al = ({
        surveyId: o,
        user: n,
        pub: t,
        token: a = ""
    }) => {
        const {
            iString: i
        } = xe(), [r, l] = O({}), {
            result: s,
            isLoading: c,
            refetch: d
        } = ct({
            pathname: `/api/v1/survey/${o}`,
            auto: !0,
            query: {
                token: a || void 0
            }
        });
        V(() => {
            var k;
            !c && s && !u && ((k = s.questions) != null && k.some(N => N.type === "country")) && p()
        }, [s, c]);
        const {
            result: u,
            fetch: p
        } = zn({
            module: "country-region-data/data.json",
            onRequest: () => lt(() =>
                import ("./data-e7b3a2f4.js"), []),
            fetchImmediately: !1
        }), f = ct({
            method: "post",
            pathname: `/api/v1/survey/${o}/responses`,
            auto: !1,
            json: {
                responses: Object.keys(r).map(k => ({
                    survey_question_id: k,
                    data: r[k]
                }))
            },
            query: {
                token: a || void 0
            }
        }), h = Dt(() => R(void 0, null, function*() {
            f.isLoading || (yield f.refetch(), yield d())
        }), [f]);
        if (!s && !c) return e(g, {
            paddingTop: 48,
            gap: 48
        }, e(m.H1, {
            translated: !0
        }, "There was an error fetching this survey."));
        if (!s) return e("div", null);
        if (s.hasCurrentUserResponded) return e(g, {
            paddingTop: 48,
            gap: 24,
            alignItems: "center",
            justifyContent: "center"
        }, e(m.H1, {
            translated: !0
        }, "Thank you!"), e(m.B3, {
            translated: !0
        }, "Your response has been recorded."));
        const {
            questions: _ = [],
            title: b
        } = s, w = !!n, v = n && n.is_free_subscribed, P = w && v, L = P && _.reduce((k, x) => {
            let N = !0;
            if (x.is_required) {
                const C = r[x.id];
                if (x.type === "text") N = String((C == null ? void 0 : C.value) || "").length > 0;
                else if (x.type === "number") {
                    const M = Number(C == null ? void 0 : C.value);
                    N = !Number.isNaN(M)
                } else if (x.type === "country") N = String((C == null ? void 0 : C.value) || "").split(",").length === 2;
                else if (Cn(x.type)) {
                    const M = C && Array.isArray(C == null ? void 0 : C.options) ? C.options : [],
                        T = String((C == null ? void 0 : C.value) || "");
                    xn(x.type) ? N = M.length > 0 || T.length > 0 : N = M.length > 0
                }
            }
            return k && N
        }, !0);
        return e(g, {
            paddingTop: 48,
            gap: 48
        }, e(m.H1, {
            color: "pub-primary-text"
        }, b), !w && e($, {
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "detail",
            paddingBottom: 48
        }, e(g, {
            border: "detail",
            padding: 24,
            gap: 24,
            sizing: "border-box",
            radius: "md"
        }, e(m.H4, {
            translated: !0
        }, "Sign in to answer this survey from ", I18N.p(t.name)), e(W, {
            localNavigation: !1,
            priority: "primary-theme",
            href: Aa({
                for_pub: t.subdomain,
                redirect: window.location.href
            })
        }, i("Sign in")))), w && !v && e($, {
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "detail",
            paddingBottom: 48
        }, e(g, {
            border: "detail",
            padding: 24,
            gap: 24,
            sizing: "border-box",
            radius: "md"
        }, e(m.H4, {
            translated: !0
        }, "Subscribe to ", I18N.p(t.name), " to answer this survey."), e(W, {
            localNavigation: !1,
            priority: "primary-theme",
            href: gt(t, {
                params: {
                    next: window.location.href,
                    email: n.email,
                    just_signed_up: !0,
                    autoSubmit: !0,
                    utm_source: re.substack,
                    utm_medium: He.email,
                    utm_content: $a.readerSurveySubscribePrompt
                }
            })
        }, i("Subscribe")))), (P || !t.invite_only) && e(g, {
            gap: 48,
            className: q({
                [Wt.questionListDisabled]: !P
            }),
            paddingBottom: 48
        }, _.map(k => {
            const x = r[k.id] ? r[k.id] : {
                options: [],
                value: ""
            };
            return e($l, {
                key: k.id,
                question: k,
                responseData: x,
                disabled: !P,
                countries: u == null ? void 0 : u.default,
                onChange: N => {
                    l(A(S({}, r), {
                        [k.id]: N
                    }))
                }
            })
        }), e(W, {
            disabled: !L,
            priority: "primary-theme",
            onClick: h
        }, i("Submit"))))
    },
    jl = ({
        surveyId: o,
        user: n,
        pub: t,
        token: a = ""
    }) => (V(() => {
        X(ge.READER_SURVEY_SEEN, {
            surveyId: o,
            isLoggedIn: !!n,
            isSubscribed: n == null ? void 0 : n.is_free_subscribed
        })
    }, [o]), e("div", {
        className: "container"
    }, e(Al, {
        surveyId: o,
        user: n,
        pub: t,
        token: a
    }))),
    Ol = "_logo_ym8l9_1",
    Wl = {
        logo: Ol
    },
    Hl = ({
        logoUrl: o,
        name: n,
        description: t
    }) => {
        const {
            isMobile: a
        } = Zo();
        return e(g, {
            gap: 12,
            paddingX: a ? 0 : 8
        }, o && e("img", {
            className: Wl.logo,
            src: Te(o, 72 * 2),
            alt: n
        }), e(m.H1, {
            font: "pub-headings",
            color: "pub-primary-text"
        }, n), t && e(m.B3, {
            color: "pub-secondary-text"
        }, t))
    };

function Vl({
    slug: o,
    pub: n,
    user: t,
    tagPagePreloads: a,
    utm: i
}) {
    var l, s;
    const r = ct({
        pathname: `/api/v1/publication/post-tag/slug/${o}`,
        auto: (a == null ? void 0 : a.slug) !== o,
        initialResult: (a == null ? void 0 : a.slug) === o ? a.postTag : null,
        deps: [a, o]
    });
    return e(qa, null, r.isLoading ? e("p", {
        className: "main-loader"
    }, "Loading..") : e(H, null, e(Ye, null, e(Hl, {
        name: ((l = r.result) == null ? void 0 : l.name) || "Page not found",
        description: null,
        logoUrl: null
    }), e(Yi, null), e(Kt, {
        user: t,
        pub: n,
        sort: "new",
        postTagId: (s = r.result) == null ? void 0 : s.id,
        newPosts: (a == null ? void 0 : a.slug) === o ? a.posts : null,
        source: "tag-archive"
    }, ({
        posts: c,
        linkToComments: d,
        onClickPost: u
    }) => e(Xt, {
        hideImages: n.theme.hide_images_from_list,
        linkToComments: d,
        posts: c,
        pub: n,
        user: t,
        utm: i,
        variant: "two-column-list",
        onChange: () => {},
        onClickPost: u
    })))))
}
class $m extends Q {
    constructor(n, t) {
        super(n, t), this.state = n.initialData || {}
    }
    componentDidUpdate(n, t) {
        var r, l, s, c;
        this.props.initialData && JSON.stringify(this.props.initialData) !== JSON.stringify(this.state) && this.setState(S({}, this.props.initialData));
        const a = (l = (r = this.state.pub) == null ? void 0 : r.theme) == null ? void 0 : l.web_bg_color,
            i = document.documentElement;
        i && a && ((c = (s = t == null ? void 0 : t.pub) == null ? void 0 : s.theme) == null ? void 0 : c.web_bg_color) !== a && (i.style.background = a)
    }
    componentDidMount() {
        var a, i, r, l;
        const n = (l = (r = (i = (a = this.props) == null ? void 0 : a.initialData) == null ? void 0 : i.pub) == null ? void 0 : r.theme) == null ? void 0 : l.web_bg_color,
            t = document.documentElement;
        t && n && (t.style.background = n)
    }
    render({
        skipIntoPopupRender: n
    }, {
        pub: t,
        section: a,
        user: i,
        userProfile: r,
        freeSignup: l,
        freeSignupEmail: s,
        posts: c,
        post: d,
        truncatedPost: u,
        pinnedPosts: p,
        newPosts: f,
        topPosts: h,
        contentBlocks: _,
        communityPosts: b,
        communityAction: w,
        searchPosts: v,
        sectionsById: P,
        postTagsById: L,
        contributors: k,
        latestPodcastPosts: x,
        latestPostByContributorId: N,
        postsByGroupId: C,
        postsBySectionId: M,
        postsByTagId: T,
        inlineComments: D,
        latestSectionPosts: E,
        subscribeContent: U,
        homepageLinks: z,
        recommendations: J,
        numRecommendations: Y,
        allSubscribedPubs: ce,
        fullySubscribedPubs: F,
        sitemapHeader: j,
        sitemapDescription: oe,
        sitemapLinks: de,
        referralCode: y,
        hide_intro_popup: B,
        post_reaction_token: fe,
        stripe_publishable_key: Z,
        viral_gift_data: K,
        campaign: to,
        referralCampaign: Me,
        file: _t,
        primaryEligiblePublications: bt,
        flagged_as_spam: Je,
        switchAccountRedirectUrl: yt,
        readerIsSearchCrawler: Qe,
        commentId: ke,
        selectionFromQuery: Ke,
        siteConfigs: me = {},
        blurbs: _e,
        embeddedPublications: vt,
        themeVariables: ue,
        subdomainNotFound: Xe,
        freeTrialCoupon: we,
        signupForFreeVariant: qe,
        people: Ze,
        useNewSubscribePage: wt,
        idToMagicLink: et,
        token: tt,
        podcast_rss_url: oo,
        publicationSettings: G,
        publicationUserSettings: Ae,
        userSettings: ot,
        pledgePlans: Ct,
        isChatActive: no,
        isMeetingsActive: je,
        optOutLegacyTheming: kn,
        meetingsOrder: xt,
        meetingsSettings: kt,
        appModalOpenByDefault: ao,
        twitterCardUrl: Sn,
        tagPagePreloads: Nn,
        initialComments: io,
        bannedFromNotes: nt,
        intro_text: Pn,
        crossPostedPub: Tn,
        crossPostingByLine: In,
        userWithCrossPostedPubContext: Bn,
        crossPostedPublicationSettings: En,
        crossPostedSiteConfig: Ln,
        launchWelcomePage: Ue,
        referringUser: Mn,
        clip: Un,
        recentEpisodes: Rn,
        trackFrontendVisit: Dn,
        showCookieBanner: Fn,
        pubIsGeoblocked: $n
    }) {
        var lo, co, mo, uo;
        const ro = ja(this.state.comments) ? this.state.comments : [];
        if (Xe) return e(ll, {
            subdomain: Xe
        });
        if ((Je || $n) && !(i != null && i.is_global_admin)) return e("div", {
            className: "page typography signup-page",
            path: "/flagged"
        }, e(Le, S({}, Je ? {
            title: "Flagged as spam"
        } : {
            title: "Blocked in country"
        })), e("div", {
            className: "container"
        }, e("h2", null, "Publication Not Available"), e("p", null, "The page you are attempting to access is unavailable.", " ", e("a", {
            href: `${ye()}`,
            native: !0
        }, "Click here"), " ", "to view some more great writing."), e("p", null, e("a", {
            href: ye(),
            className: "button primary"
        }, "Go to substack.com"))));
        const so = !!(t != null && t.theme && !kn),
            An = Oa().startsWith("/chat"),
            {
                iString: be,
                iTemplate: Se
            } = I18N.i(this.state.language);
        return e(zl, {
            pub: t,
            user: i,
            siteConfigs: me,
            hasThemedBackground: so,
            language: this.state.language,
            country: this.state.country,
            experimentInfo: this.props.initialData,
            publicationSettings: G,
            publicationUserSettings: Ae,
            userSettings: ot,
            shouldPollNotifications: !0,
            loadPubClientSearch: !0,
            enablePubClientSearchShortcuts: !0
        }, n ? null : e(Ja, S({}, this.props)), e(or, {
            publication: t,
            twitterCardUrl: Sn
        }), e(Yl, {
            user: i
        }), e(Gl, {
            user: i,
            pub: t
        }), e(Jl, null), e("div", {
            className: q("main typography", {
                "use-theme-bg": so,
                "should-flex": An
            }),
            id: "main"
        }, e(Pt, {
            path: "/"
        }, ({
            path: I
        }) => {
            var fo, _o;
            let ee = "/home";
            /^\/about\b/.test(I) ? ee = "/about" : /^\/notes\b/.test(I) ? ee = "/notes" : /^\/leaderboard\b/.test(I) ? ee = "/leaderboard" : /^\/chat\b/.test(I) ? ee = "/chat" : /^\/podcast\b/.test(I) ? ee = "/podcast" : /^\/archive\b/.test(I) ? ee = "/archive" : /^\/newsletters\b/.test(I) ? ee = "/newsletters" : /^\/recommendations\b/.test(I) ? ee = "/recommendations" : /^\/listen\b/.test(I) ? ee = "/listen" : a ? ee = a.id : /^\/p\//.test(I) ? ee = ((fo = /^\/p\/([^/?#]+)/.exec(I)) == null ? void 0 : fo[0]) || "/p" : /^\/t\//.test(I) && (ee = ((_o = /^\/t\/([^/?#]+)/.exec(I)) == null ? void 0 : _o[0]) || "/p");
            let Ne;
            typeof window != "undefined" && window.location.search && (Ne = Vt(window.location.search));
            const po = /^\/p\/([^/?#]*)/.exec(I),
                ho = po && !((d == null ? void 0 : d.type) === "page" && d.slug === po[1]),
                go = I.startsWith("/subscribe") || I.startsWith("/finish-invite") || I.startsWith("/meetings"),
                jn = I.startsWith("/chat/posts/");
            return a ? e(Ye, null, e(Ft, {
                pub: t,
                user: i,
                freeSignup: l,
                freeSignupEmail: s,
                hide_subscribe_cta: I.startsWith("/subscribe"),
                selectedSectionId: ee,
                isPostView: ho,
                showCustomerSupportModeModal: !!(Ne != null && Ne.showCustomerSupportModeModal),
                lowChrome: go,
                numRecommendations: Y,
                isChatActive: no,
                isMeetingsActive: je,
                signupForFreeVariant: qe
            })) : !["welcome", "embed", "meetings"].some(On => I.startsWith(`/${On}`)) && !(I.startsWith("/subscribe") && (wt || Ct)) && e(Ft, {
                pub: t,
                user: i,
                freeSignup: l,
                freeSignupEmail: s,
                hide_subscribe_cta: I.startsWith("/subscribe"),
                isPostView: ho,
                selectedSectionId: ee,
                showCustomerSupportModeModal: !!(Ne != null && Ne.showCustomerSupportModeModal),
                lowChrome: go,
                numRecommendations: Y,
                isChatActive: no,
                isMeetingsActive: je,
                signupForFreeVariant: qe,
                hideSections: jn
            })
        }), e(ri, {
            pub: t,
            user: i
        }), e(Wa, {
            onChange: di
        }, ["newspaper", "magaziney"].includes(t.homepage_type) ? e(Gi, {
            path: "/",
            blurbs: _e,
            bodyPostGroups: (lo = t.theme) == null ? void 0 : lo.body_post_groups,
            contentBlocks: _,
            freeSignup: l,
            freeSignupEmail: s,
            hide_intro_popup: B,
            homepageLinks: z,
            sectionsById: P,
            postTagsById: L,
            contributors: k,
            latestPodcastPosts: x,
            latestPostByContributorId: N,
            latestSectionPosts: E,
            newPosts: f,
            numRecommendations: Y,
            pinnedPosts: p,
            postsByGroupId: C,
            postsBySectionId: M,
            postsByTagId: T,
            pub: t,
            recommendations: J,
            referralCampaign: Me,
            referralCode: y,
            topPosts: h,
            user: i != null ? i : null,
            launchWelcomePage: Ue,
            skipIntoPopupRender: n
        }) : e(Ji, {
            path: "/",
            user: i,
            freeSignupEmail: s,
            freeSignup: l,
            hide_intro_popup: B,
            preloadedPosts: c,
            pub: t,
            blurbs: _e,
            launchWelcomePage: Ue,
            skipIntoPopupRender: n
        }), e(Tt, {
            path: "/listen/:sectionSlug",
            blurbs: _e,
            user: i != null ? i : null,
            freeSignupEmail: s,
            freeSignup: l,
            hide_intro_popup: B,
            pub: t,
            pinnedPosts: p,
            newPosts: f,
            latestSectionPosts: E,
            section: t.section,
            referralCampaign: Me,
            isPodcast: !0,
            launchWelcomePage: Ue,
            skipIntoPopupRender: n
        }), e(Tt, {
            path: "/podcast",
            blurbs: _e,
            user: i != null ? i : null,
            freeSignupEmail: s,
            freeSignup: l,
            hide_intro_popup: B,
            pageTheme: (mo = (co = t.pageThemes) == null ? void 0 : co.podcast) != null ? mo : null,
            pub: t,
            pinnedPosts: p,
            newPosts: f,
            latestSectionPosts: E,
            recommendations: J,
            numRecommendations: Y,
            referralCampaign: Me,
            isPodcast: !0,
            launchWelcomePage: Ue,
            skipIntoPopupRender: n
        }), e(Oe, {
            path: "/podcast/archive",
            blurbs: _e,
            user: i,
            newPosts: f,
            topPosts: h,
            communityPosts: b,
            searchPosts: v,
            pub: t,
            freeSignupEmail: s,
            freeSignup: l,
            isPodcast: !0,
            metadata: S({
                title: Se `Podcast Archive - ${t.name}`,
                description: Se `Full archive of all the episodes from ${t.name}.`
            }, !!(v || se("search")) && {
                seoProps: {
                    noindex: !0
                }
            })
        }), e(Tt, {
            path: "/s/:slug",
            blurbs: _e,
            user: i != null ? i : null,
            freeSignupEmail: s,
            freeSignup: l,
            hide_intro_popup: B,
            pageTheme: (uo = t.section) == null ? void 0 : uo.pageTheme,
            pub: t,
            pinnedPosts: p,
            newPosts: f,
            latestSectionPosts: E,
            section: t.section,
            referralCampaign: Me,
            launchWelcomePage: Ue,
            skipIntoPopupRender: n
        }), e(Oe, {
            path: "/archive",
            user: i,
            newPosts: f,
            topPosts: h,
            communityPosts: b,
            searchPosts: v,
            pub: t,
            freeSignupEmail: s,
            freeSignup: l,
            metadata: S({
                title: Se `Archive - ${t.name}`,
                description: Se `Full archive of all the posts from ${t.name}.`
            }, !!(v || se("search")) && {
                seoProps: {
                    noindex: !0
                }
            })
        }), e(Oe, {
            path: "/s/:slug/archive",
            user: i,
            newPosts: f,
            topPosts: h,
            communityPosts: b,
            searchPosts: v,
            pub: t,
            freeSignupEmail: s,
            freeSignup: l,
            sectionId: a == null ? void 0 : a.id,
            metadata: S({
                title: Se `Archive - ${a==null?void 0:a.name} of ${t.name}`,
                description: Se `Full archive of all the posts from ${a==null?void 0:a.name} of ${t.name}.`
            }, !!(v || se("search")) && {
                seoProps: {
                    noindex: !0
                }
            })
        }), e(Oe, {
            path: "/listen/:sectionSlug/archive/",
            user: i,
            newPosts: f,
            topPosts: h,
            communityPosts: b,
            searchPosts: v,
            pub: t,
            freeSignupEmail: s,
            freeSignup: l,
            sectionId: a == null ? void 0 : a.id,
            metadata: S({
                title: be("Podcast Archive - %1", No({
                    pub: t,
                    section: t.section
                }).title),
                description: be("Full archive of all the episodes from %1.", No({
                    pub: t,
                    section: t.section
                }).title)
            }, !!(v || se("search")) && {
                seoProps: {
                    noindex: !0
                }
            })
        }), e(Vl, {
            path: "/t/:slug",
            user: i != null ? i : null,
            freeSignupEmail: s,
            freeSignup: l,
            pub: t,
            tagPagePreloads: Nn
        }), e(Oe, {
            default: !0,
            title: be("Page not found"),
            user: i,
            newPosts: f,
            topPosts: h,
            communityPosts: b,
            searchPosts: v,
            pub: t,
            freeSignupEmail: s,
            freeSignup: l
        }), e(Bt, {
            path: "/tos",
            html: t.tos_content_html || be("Terms of Service"),
            metadata: {
                title: be("Terms of Service")
            }
        }, e(m.B3, {
            translated: !0,
            as: "p",
            paddingBottom: 32
        }, "You agree to the terms of service below, and the", " ", e("a", {
            href: Ha(),
            native: !0
        }, "Terms of Use for Substack"), ", the technology provider.")), e(Bt, {
            path: "/privacy",
            html: t.privacy_content_html || be("Privacy Policy"),
            metadata: {
                title: be("Privacy Policy")
            }
        }, e(m.B3, {
            translated: !0,
            as: "p",
            paddingBottom: 32
        }, "You agree to the privacy policy below, and the", " ", e("a", {
            href: Va(),
            native: !0
        }, "Privacy Policy for Substack"), ", the technology provider.")), e(Bt, {
            path: "/disclosures",
            html: t.disclosures_content_html || be("Disclosures"),
            metadata: {
                title: be("Disclosures")
            }
        }), e(Xo, {
            path: "/welcome",
            publication: t,
            post: null,
            user: i,
            freeSignup: l,
            freeSignupEmail: s,
            alwaysShow: !0,
            onHide: () => {
                document.location.href = "/"
            }
        }), e(hs, {
            pub: t,
            path: "/invite",
            user: i,
            freeSignup: l,
            freeSignupEmail: s
        }), e(fs, {
            path: "/invite-success/:id",
            pub: t,
            user: i,
            post: d,
            freeSignup: l,
            freeSignupEmail: s
        }), e(gs, {
            path: "/invite-reject-success/:id",
            pub: t,
            user: i,
            post: d
        }), e(At, {
            path: "/finish-invite/:id",
            pub: t,
            user: i,
            freeSignup: l,
            freeSignupEmail: s
        }), e(At, {
            path: "/finish-post-invite/:id",
            pub: t,
            post: d,
            user: i,
            freeSignup: l,
            freeSignupEmail: s,
            inviteToPost: !0,
            primaryEligiblePublications: bt || [],
            switchAccountRedirectUrl: yt
        }), e(Qi, {
            path: "/recommendations",
            pub: t,
            user: i,
            recommendations: J,
            allSubscribedPubs: ce,
            fullySubscribedPubs: F,
            freeSignupEmail: s
        }), e(jo, {
            path: "/sitemap",
            pub: t,
            sitemapHeader: j,
            sitemapDescription: oe,
            sitemapLinks: de
        }), e(jo, {
            path: "/sitemap/:year",
            pub: t,
            sitemapHeader: j,
            sitemapDescription: oe,
            sitemapLinks: de
        }), e(Zr, {
            path: "/about",
            pub: t,
            user: i,
            freeSignup: l,
            freeSignupEmail: s,
            subscribeContent: U,
            people: Ze,
            metadata: {
                title: Se `About - ${t.name}`
            }
        }), e(Ot, {
            path: "/p/:slug",
            user: i,
            freeSignupEmail: s,
            freeSignup: l,
            referralCode: y,
            post: d,
            truncatedPost: u,
            publication: t,
            renderedComments: ro,
            inlineComments: D,
            reaction_token: fe,
            hide_intro_popup: B,
            stripe_publishable_key: Z,
            readerIsSearchCrawler: Qe,
            selectionFromQuery: Ke,
            embeddedPublications: vt,
            siteConfigs: me,
            freeTrialCoupon: we,
            publicationSettings: G,
            bannedFromNotes: nt,
            themeVariables: ue,
            referringUser: Mn,
            clip: Un,
            launchWelcomePage: Ue,
            recentEpisodes: Rn,
            trackFrontendVisit: Dn,
            skipIntoPopupRender: n
        }), e(os, {
            path: "/cp/:post_id",
            user: i != null ? i : null,
            freeSignupEmail: s,
            freeSignup: l,
            post: d,
            publication: t,
            introText: Pn,
            crossPostedPub: Tn,
            crossPostingByLine: In,
            userWithCrossPostedPubContext: Bn,
            crossPostedPublicationSettings: En,
            crossPostedSiteConfig: Ln
        }), e(Tr, {
            path: "/listen",
            pub: t,
            user: i || null,
            openInNewTab: !0,
            idToMagicLink: et
        }), e(Rr, {
            path: "/newsletters",
            pub: t,
            user: i != null ? i : null
        }), e(Rl, {
            path: "/p/:slug/media-assets",
            post: d,
            publication: t,
            themeVariables: ue
        }), D ? e(Ot, {
            path: "/p/:slug/comments",
            user: i,
            freeSignupEmail: s,
            freeSignup: l,
            referralCode: y,
            post: d,
            truncatedPost: u,
            publication: t,
            renderedComments: ro,
            inlineComments: D,
            reaction_token: fe,
            hide_intro_popup: B,
            stripe_publishable_key: Z,
            readerIsSearchCrawler: Qe,
            selectionFromQuery: Ke,
            siteConfigs: me,
            freeTrialCoupon: we,
            bannedFromNotes: nt,
            themeVariables: ue
        }) : e($t, {
            path: "/p/:slug/comments",
            user: i,
            freeSignupEmail: s,
            freeSignup: l,
            post: d,
            publication: t,
            post_reaction_token: fe,
            commentId: ke,
            freeTrialCoupon: we,
            initialComments: io,
            bannedFromNotes: nt
        }), !D && e($t, {
            path: "/p/:slug/comment/:comment_id",
            user: i,
            freeSignupEmail: s,
            freeSignup: l,
            post: d,
            publication: t,
            post_reaction_token: fe,
            commentId: ke,
            freeTrialCoupon: we,
            initialComments: io,
            bannedFromNotes: nt
        }), e(us, {
            path: "/rewards/receive",
            pub: t,
            user: i,
            freeSignupEmail: s,
            viral_gift_data: K
        }), e(_n, {
            path: "/embed",
            pub: t,
            user: i,
            freeSignup: l,
            freeSignupEmail: s
        }), e(as, {
            path: "/embed/test",
            pub: t,
            user: i,
            freeSignup: l,
            freeSignupEmail: s
        }), e(ns, {
            path: "/embed/podcast/:slug",
            pub: t
        }), e(is, {
            path: "/embed/video/:slug",
            pub: t
        }), e(ds, {
            path: "/f/:fileId",
            pub: t,
            user: i,
            hide_subscribe_cta: !0,
            file: _t
        }), me.live_events && e(Mt, {
            module: "../live_events",
            onRequest: () => lt(() =>
                import ("./index-60cec205.js"), ["assets/index-60cec205.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/post-759b177e.js", "assets/HoverCard-cbdee1d2.js", "assets/x-fc38e969.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/useResponsive-08e338a7.js", "assets/transition-c6a4911b.js", "assets/_defineProperty-105d261c.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/react-laag.esm-f47be925.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/HoverCard-41ea4b50.css", "assets/_baseEach-63ad03e0.js", "assets/_baseIteratee-fbbabc87.js", "assets/CloseIcon-90eee5fe.js", "assets/_baseEach-6c7a4143.css", "assets/uniq-0ace9f40.js", "assets/_baseUniq-53539133.js", "assets/Modal-ab851ad1.js", "assets/Modal-faa641cb.css", "assets/homepage_hooks-47e7a4e7.js", "assets/debounce-f31b8252.js", "assets/toNumber-3c911b0f.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/publication-1bbad178.js", "assets/share_dialog-b74d3337.js", "assets/free_email_form-1d3fc4be.js", "assets/profile-a781fd85.js", "assets/free_email_form.module-135823b4.js", "assets/entry-a965ffeb.js", "assets/entry-401840c0.css", "assets/free_email_form-cf4756c6.css", "assets/Menu-5342012d.js", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/modal-5dbf091c.js", "assets/Select-f97196dc.js", "assets/chevron-down-6d7770f2.js", "assets/Select-cd38999e.css", "assets/dropdown_menu_typed-c164b42b.js", "assets/TextInput-c03c69d6.js", "assets/ProfileHoverCard-c8bfb61a.js", "assets/UserBadge-a694a663.js", "assets/UserBadge-fb9c174e.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/link-90872791.js", "assets/download-8a01f574.js", "assets/Portal-f12cb990.js", "assets/Metadata-be2b4cf2.js", "assets/SubstackLogoIcon-3ca41075.js", "assets/traverse-bb97748e.js", "assets/plus-3216546d.js", "assets/LockThinIcon-fd5808c3.js", "assets/textarea-b8862a3a.js", "assets/homepage_hooks-f7a72a82.css", "assets/TextLink-9c0e1c8b.js", "assets/isOnReader-b27f4ba9.js", "assets/TextLink-f399b628.css", "assets/FollowPrompt-e47c3e0a.js", "assets/toInteger-b5ddb910.js", "assets/post_metadata-a1624a3e.js", "assets/decodeHtmlEntitiesFast-d19e2d0c.js", "assets/app_install_modal-64fe70fd.js", "assets/app_install_modal-1b80d39d.css", "assets/experimentsAndSiteConfigContext-a6aeed82.js", "assets/FollowPrompt-a56b28dc.css", "assets/Attachments-84a6967e.js", "assets/CommentBody-36a2d638.js", "assets/CommentBody-c55cfff6.css", "assets/AlertDialog-d9b964a5.js", "assets/AlertDialog-502ee8c4.css", "assets/keyBy-bc7e2f81.js", "assets/_baseAssignValue-2cb42459.js", "assets/_createAggregator-deb99b9c.js", "assets/podcast_apps-4f303ac3.js", "assets/podcast_apps-184969d7.css", "assets/Textarea-ed5c1b37.js", "assets/Unit-93a04fbc.js", "assets/Attachments-858e615b.css", "assets/CommunityPostView-c90ac03a.js", "assets/react-6ae938e8.js", "assets/linkify-91f62846.js", "assets/search-166a516b.js", "assets/mention-8372bb04.js", "assets/mention-e43b25a5.css", "assets/link_copy_toast-1ffe3674.js", "assets/user-dd90bf1b.js", "assets/CommunityPostView-99a59fb0.css", "assets/align-left-a2ee54ed.js", "assets/ShareAssetButtons-11c2be43.js", "assets/ShareAssetButtons-44463ef6.css", "assets/Avatar-723c95b0.js", "assets/preflight-1c24e477.js", "assets/unlock-12d676d9.js", "assets/facepile-b2a8f169.js", "assets/facepile-0c1de29e.css", "assets/partition-c66fa872.js", "assets/NewsletterIcon-ea4c71c4.js", "assets/info-e9da097c.js", "assets/arrow-right-c1e00e5a.js", "assets/ReaderReferralTiers-be527730.js", "assets/arrow-left-e952265a.js", "assets/NoteReplyIcon-3ff0a340.js", "assets/UserBadgeIconOnly-381365d6.js", "assets/formatNumber-b899aca4.js", "assets/ImageViewerModal-9148cb63.js", "assets/ImageViewerModal-5f70a364.css", "assets/VideoVerticalMenu-5e94a5f9.js", "assets/VideoVerticalMenu-76a2fafc.css", "assets/publication-6fec99b2.js", "assets/chat-f6285661.js", "assets/UpgradeToDmModal-6dec1ea0.js", "assets/Recipe-39f1ef19.js", "assets/jsesc-a42a28f2.js", "assets/BurgerIcon-c6dd2664.js", "assets/Recipe-53df0851.css", "assets/MathJax-7a5e2dbd.js", "assets/postPingbackTracker-c6b6d289.js", "assets/post-b3a298b8.css", "assets/message-square-3b09dda6.js", "assets/UserIcon-9c966d10.js", "assets/mic-230f1555.js", "assets/index-32506787.css"]),
            resolve: I => I.LiveEventPage,
            path: "/live_event/:eventId/:participantType",
            pub: t,
            user: i
        }), e(Vr, {
            path: "/chat",
            publication: t,
            user: i
        }), e(zr, {
            path: "/chat/posts/:postId",
            publication: t,
            communityAction: w,
            user: i,
            appModalOpenByDefault: ao
        }), e(Yr, {
            path: "/chat/replies/:commentId",
            publication: t,
            communityAction: w,
            user: i,
            appModalOpenByDefault: ao
        }), e(jl, {
            path: "/survey/:surveyId",
            pub: t,
            user: i,
            token: tt
        }), me.meetings_v1 && (je || (i == null ? void 0 : i.is_author)) && e(Ts, {
            path: "/meetings",
            exact: !0,
            pub: t,
            user: i,
            settings: kt
        }), me.meetings_v1 && (je || (i == null ? void 0 : i.is_author)) && e(Ao, {
            path: "/meetings/book",
            pub: t,
            user: i,
            stripe_publishable_key: Z,
            order: xt,
            settings: kt
        }), me.meetings_v1 && (xt || je || (i == null ? void 0 : i.is_author)) && e(Ao, {
            path: "/meetings/book/:order_id?",
            pub: t,
            user: i,
            stripe_publishable_key: Z,
            order: xt,
            settings: kt
        }), e(Ps, {
            pub: t,
            user: i,
            freeSignupEmail: s,
            path: "/leaderboard"
        }), e(Dr, {
            path: "/notes"
        })), e(Pt, {
            path: "/"
        }, ({
            path: I
        }) => !I.startsWith("/welcome") && !I.startsWith("/embed") && !I.startsWith("/subscribe") && !I.startsWith("/meetings") && !I.startsWith("/chat") && e(Qa, {
            publication: t,
            user: i,
            showIntrinioAttrib: d && d.hasCashtag,
            path: I
        })), e(Pt, {
            path: "/"
        }, ({
            path: I
        }) => !I.startsWith("/embed") && e(H, null, Fn && e(Ir, {
            onSubdomain: !0
        }))), za() ? e(Mt, {
            module: "../components/dev_toolbar",
            resolve: I => I.default,
            onRequest: () => lt(() =>
                import ("./dev_toolbar-8e738e77.js"), ["assets/dev_toolbar-8e738e77.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/queries-b2e8567d.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/SelectField-e551420b.js", "assets/Select-f97196dc.js", "assets/Menu-5342012d.js", "assets/react-laag.esm-f47be925.js", "assets/useResponsive-08e338a7.js", "assets/x-fc38e969.js", "assets/transition-c6a4911b.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/chevron-down-6d7770f2.js", "assets/Select-cd38999e.css", "assets/Field-172b4326.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Field-cea155ef.css", "assets/SelectField-0cac07d2.css", "assets/TextInput-c03c69d6.js", "assets/_baseEach-63ad03e0.js", "assets/HoverCard-cbdee1d2.js", "assets/_defineProperty-105d261c.js", "assets/Tooltip-86d56346.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/HoverCard-41ea4b50.css", "assets/_baseIteratee-fbbabc87.js", "assets/CloseIcon-90eee5fe.js", "assets/_baseEach-6c7a4143.css", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/Switch-b8853cbf.js", "assets/preflight-1c24e477.js", "assets/Modal-ab851ad1.js", "assets/Modal-faa641cb.css", "assets/PubAccentTheme-61cfc74b.js", "assets/PubAccentTheme-da6e9591.css", "assets/user-dd90bf1b.js", "assets/dev_toolbar-67ba1706.css"]),
            pub: t,
            user: i,
            whileLoading: null
        }) : null))
    }
}

function zl(t) {
    var a = t,
        {
            children: o
        } = a,
        n = it(a, ["children"]);
    return e(ti, S({}, n), e($i, null, e(dr, null, o)))
}

function Yl({
    user: o
}) {
    const n = wi({
        user: o
    });
    return V(() => {
        const t = new URLSearchParams(location.search);
        if (t.get("reaction") === "❤") {
            n(), t.delete("reaction");
            const a = t.toString();
            history.replaceState({}, document.title, location.pathname + (a && `?${a}`))
        }
    }, []), null
}

function Gl({
    user: o,
    pub: n
}) {
    return ci({
        user: o,
        pub: n
    }), null
}

function Jl() {
    return $r(), null
}
export {
    $m as
    default
};