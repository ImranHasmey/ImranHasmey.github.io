var We = Object.defineProperty,
    je = Object.defineProperties;
var $e = Object.getOwnPropertyDescriptors;
var Te = Object.getOwnPropertySymbols;
var Ge = Object.prototype.hasOwnProperty,
    Ye = Object.prototype.propertyIsEnumerable;
var Ie = (t, n, o) => n in t ? We(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : t[n] = o,
    j = (t, n) => {
        for (var o in n || (n = {})) Ge.call(n, o) && Ie(t, o, n[o]);
        if (Te)
            for (var o of Te(n)) Ye.call(n, o) && Ie(t, o, n[o]);
        return t
    },
    $ = (t, n) => je(t, $e(n));
var G = (t, n, o) => new Promise((c, i) => {
    var u = l => {
            try {
                d(o.next(l))
            } catch (m) {
                i(m)
            }
        },
        a = l => {
            try {
                d(o.throw(l))
            } catch (m) {
                i(m)
            }
        },
        d = l => l.done ? c(l.value) : Promise.resolve(l.value).then(u, a);
    d((o = o.apply(t, n)).next())
});
import {
    y as e,
    p as P,
    h as U,
    bf as ce,
    o as he,
    i as D,
    t as f,
    E as b,
    a$ as ue,
    aD as de,
    fB as xe,
    gA as Je,
    D as Pe,
    x as le,
    b8 as Xe,
    aa as Qe,
    U as M,
    aj as Ze,
    r as et,
    a7 as Y,
    s as Ne,
    d as J,
    gN as tt,
    H as me,
    a3 as R,
    ad as nt,
    C as Z,
    A as Ae,
    eM as ot,
    dL as at,
    K as Ee,
    hr as it,
    aF as rt,
    g_ as st,
    bz as Ue,
    aE as ct,
    M as lt
} from "./tracking-376cff7a.js";
import {
    x as dt,
    b as ye,
    u as L,
    i as pe,
    c as ee,
    F as E,
    T as A,
    a as fe,
    B as mt,
    n as _t,
    f as N,
    j as ut
} from "./FlexBox-1a755411.js";
import {
    a as Fe
} from "./Providers-8e1c708e.js";
import {
    s as pt
} from "./free_email_form-1d3fc4be.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    P as gt
} from "./modal-5dbf091c.js";
import {
    C as ft
} from "./CustomerSupportModeForm-3d235c45.js";
import {
    r as be
} from "./_baseEach-63ad03e0.js";
import {
    B as bt,
    U as ht
} from "./user_indicator-80bd5739.js";
import {
    f as yt,
    a as Ct,
    c as wt,
    b as vt
} from "./profile-a781fd85.js";
import {
    a as St
} from "./publicationUserSettings-f18fba64.js";
import {
    u as qe
} from "./free_email_form.module-135823b4.js";
import {
    u as Ce,
    b as kt,
    _ as _e,
    g as Tt,
    L as we
} from "./user-e16f1619.js";
import {
    b as ze,
    M as It,
    P as Nt
} from "./Portal-f12cb990.js";
import {
    M as ve,
    u as At,
    a as x,
    b as Et
} from "./Menu-5342012d.js";
import {
    T as Se
} from "./Tooltip-86d56346.js";
import {
    n as Mt,
    b as Dt
} from "./ProfileHoverCard-c8bfb61a.js";
import {
    q as Lt
} from "./transition-c6a4911b.js";
import "./Divider-0a4efe7e.js";
import {
    a as Bt,
    b as Rt
} from "./ShareableImageModal-0bb2a3c2.js";
import {
    u as Ot,
    T as xt
} from "./HoverCard-cbdee1d2.js";
import {
    u as ke
} from "./useResponsive-08e338a7.js";
import {
    S as Pt
} from "./Progress-629d3819.js";
import {
    bw as Ut,
    b7 as Ft,
    bo as qt,
    a1 as zt,
    M as Vt,
    G as Ht,
    aK as Kt,
    aL as Wt,
    B as jt
} from "./homepage_hooks-47e7a4e7.js";
import {
    S as Ve
} from "./search-166a516b.js";
import {
    P as $t
} from "./PubAccentTheme-61cfc74b.js";
import {
    k as Gt,
    n as Yt,
    m as Jt,
    l as Xt,
    p as Qt,
    s as Zt
} from "./share_dialog-b74d3337.js";
import {
    L as en
} from "./link-90872791.js";
import {
    c as tn
} from "./x-fc38e969.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "e0be299a-1e57-402e-bb1a-e21a91ddf993", t._sentryDebugIdIdentifier = "sentry-dbid-e0be299a-1e57-402e-bb1a-e21a91ddf993")
    } catch (o) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = tn("DownloadCloud", [
    ["path", {
        d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
        key: "1pljnt"
    }],
    ["path", {
        d: "M12 12v9",
        key: "192myk"
    }],
    ["path", {
        d: "m8 17 4 4 4-4",
        key: "1ul180"
    }]
]);

function He({
    children: t
}) {
    return e(dt, {
        theme: "substackTheme"
    }, t)
}
const on = "_alert_1z07y_1",
    an = "_close_1z07y_7",
    rn = "_transition_1z07y_19",
    sn = "_enterFrom_1z07y_27",
    cn = "_enterTo_1z07y_31",
    ln = "_leaveFrom_1z07y_35",
    dn = "_leaveTo_1z07y_38",
    H = {
        alert: on,
        close: an,
        transition: rn,
        enterFrom: sn,
        enterTo: cn,
        leaveFrom: ln,
        leaveTo: dn
    },
    mn = t => {
        const n = ["comment_audience", "comment_id", "community_comment_id", "created_at", "id", "mention_id", "publication_id", "sender_count", "target_comment_id", "target_community_comment_id", "target_community_post_id", "target_post_id", "target_user_id", "type"];
        f(b.NOTIFICATIONS_ALERT_SHOWN, n.reduce((o, c) => (o[c] = t == null ? void 0 : t[c], o), {}))
    };

function _n() {
    var z;
    const {
        activityUnreadCount: t
    } = ze(), {
        exposeExperiment: n,
        getExperimentVariant: o
    } = qe(), {
        isLoading: c,
        result: i,
        refetch: u
    } = Ce({
        pathname: "/api/v1/activity-feed-web",
        query: {
            limit: 1
        },
        auto: !1
    });
    P(() => {
        t > 0 && u()
    }, [t]);
    const [a, d] = U(!1), [l, m] = U(!1), {
        isLoading: h,
        fetch: p,
        result: C
    } = kt({
        module: "./MiniNotificationsViewer",
        onRequest: () => _e(() =>
            import ("./MiniNotificationsViewer-400df9a1.js"), ["assets/MiniNotificationsViewer-400df9a1.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/NotificationsPage-57a6a558.js", "assets/SubstackIcon-eb634931.js", "assets/Metadata-be2b4cf2.js", "assets/ShareableImageModal-0bb2a3c2.js", "assets/Menu-5342012d.js", "assets/react-laag.esm-f47be925.js", "assets/useResponsive-08e338a7.js", "assets/x-fc38e969.js", "assets/transition-c6a4911b.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/chevron-down-6d7770f2.js", "assets/Modal-ab851ad1.js", "assets/CloseIcon-90eee5fe.js", "assets/Modal-faa641cb.css", "assets/Switch-b8853cbf.js", "assets/preflight-1c24e477.js", "assets/ShareAssetButtons-11c2be43.js", "assets/HoverCard-cbdee1d2.js", "assets/_defineProperty-105d261c.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/HoverCard-41ea4b50.css", "assets/ShareAssetButtons-44463ef6.css", "assets/homepage_hooks-47e7a4e7.js", "assets/debounce-f31b8252.js", "assets/toNumber-3c911b0f.js", "assets/_baseEach-63ad03e0.js", "assets/_baseIteratee-fbbabc87.js", "assets/_baseEach-6c7a4143.css", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/publication-1bbad178.js", "assets/share_dialog-b74d3337.js", "assets/free_email_form-1d3fc4be.js", "assets/profile-a781fd85.js", "assets/free_email_form.module-135823b4.js", "assets/entry-a965ffeb.js", "assets/entry-401840c0.css", "assets/free_email_form-cf4756c6.css", "assets/modal-5dbf091c.js", "assets/Select-f97196dc.js", "assets/Select-cd38999e.css", "assets/dropdown_menu_typed-c164b42b.js", "assets/TextInput-c03c69d6.js", "assets/ProfileHoverCard-c8bfb61a.js", "assets/UserBadge-a694a663.js", "assets/UserBadge-fb9c174e.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/link-90872791.js", "assets/download-8a01f574.js", "assets/Portal-f12cb990.js", "assets/SubstackLogoIcon-3ca41075.js", "assets/traverse-bb97748e.js", "assets/plus-3216546d.js", "assets/LockThinIcon-fd5808c3.js", "assets/textarea-b8862a3a.js", "assets/homepage_hooks-f7a72a82.css", "assets/ShareableImageModal-44b31caa.css", "assets/chat-f6285661.js", "assets/facepile-b2a8f169.js", "assets/TextLink-9c0e1c8b.js", "assets/isOnReader-b27f4ba9.js", "assets/TextLink-f399b628.css", "assets/user-dd90bf1b.js", "assets/facepile-0c1de29e.css", "assets/arrays-80a5aec5.js", "assets/user_indicator-80bd5739.js", "assets/toInteger-b5ddb910.js", "assets/search-166a516b.js", "assets/user_indicator-c1a5a8fb.css", "assets/useInfiniteScroll-da2d8ccf.js", "assets/bell-off-279845e9.js", "assets/NotificationsPage-c4a34de1.css", "assets/settings-424bdcef.js", "assets/Providers-8e1c708e.js", "assets/experimentsAndSiteConfigContext-a6aeed82.js", "assets/mousetrap-d052d743.js", "assets/publicationUserSettings-f18fba64.js", "assets/postPingbackTracker-c6b6d289.js", "assets/publication-6fec99b2.js", "assets/CustomerSupportModeForm-3d235c45.js", "assets/PubAccentTheme-61cfc74b.js", "assets/PubAccentTheme-da6e9591.css"]),
        fetchImmediately: !1
    }), g = ce(), {
        userSettings: r,
        changeSetting: _
    } = Tt(), S = (z = i == null ? void 0 : i.activityItems) == null ? void 0 : z[0], s = S != null && S.created_at ? ce(S == null ? void 0 : S.created_at) : g.subtract(100, "year"), y = r != null && r.last_notification_alert_shown_at ? ce(r.last_notification_alert_shown_at) : g.subtract(100, "year"), T = g.diff(s, "day") < 7 && s.diff(y, "hour") > 2, k = he(null), X = 2e3, Q = 6e3, F = () => {
        k.current && window.clearTimeout(k.current)
    }, q = () => {
        F(), k.current = window.setTimeout(() => {
            d(!1)
        }, Q)
    };
    return P(() => {
        T && t > 0 && (n("notification_alert_improved"), o("notification_alert_improved") === "treatment" && (C && !a ? window.setTimeout(() => {
            d(!0), _("last_notification_alert_shown_at", ce().toISOString()), mn(S), q()
        }, X) : !C && !h && p()))
    }, [c, i, t, h, T, a, d]), e(D, null, (a || l) && e(Lt, {
        style: {
            position: "fixed",
            left: "auto",
            right: 20,
            top: 92,
            zIndex: 100
        },
        appear: !0,
        show: a,
        beforeEnter: () => m(!0),
        afterLeave: () => m(!1),
        enter: H.transition,
        enterFrom: H.enterFrom,
        enterTo: H.enterTo,
        leave: H.transition,
        leaveFrom: H.leaveFrom,
        leaveTo: H.leaveTo
    }, e(Mt, null, e(ye, {
        radius: "md",
        border: "detail",
        className: H.alert,
        onMouseEnter: F,
        onMouseLeave: q,
        shadow: "lg",
        bg: "primary"
    }, e(we, {
        module: "./MiniNotificationsViewer",
        resolve: B => B.MiniNotificationsStack,
        onRequest: () => _e(() =>
            import ("./MiniNotificationsViewer-400df9a1.js"), ["assets/MiniNotificationsViewer-400df9a1.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/NotificationsPage-57a6a558.js", "assets/SubstackIcon-eb634931.js", "assets/Metadata-be2b4cf2.js", "assets/ShareableImageModal-0bb2a3c2.js", "assets/Menu-5342012d.js", "assets/react-laag.esm-f47be925.js", "assets/useResponsive-08e338a7.js", "assets/x-fc38e969.js", "assets/transition-c6a4911b.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/chevron-down-6d7770f2.js", "assets/Modal-ab851ad1.js", "assets/CloseIcon-90eee5fe.js", "assets/Modal-faa641cb.css", "assets/Switch-b8853cbf.js", "assets/preflight-1c24e477.js", "assets/ShareAssetButtons-11c2be43.js", "assets/HoverCard-cbdee1d2.js", "assets/_defineProperty-105d261c.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/HoverCard-41ea4b50.css", "assets/ShareAssetButtons-44463ef6.css", "assets/homepage_hooks-47e7a4e7.js", "assets/debounce-f31b8252.js", "assets/toNumber-3c911b0f.js", "assets/_baseEach-63ad03e0.js", "assets/_baseIteratee-fbbabc87.js", "assets/_baseEach-6c7a4143.css", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/publication-1bbad178.js", "assets/share_dialog-b74d3337.js", "assets/free_email_form-1d3fc4be.js", "assets/profile-a781fd85.js", "assets/free_email_form.module-135823b4.js", "assets/entry-a965ffeb.js", "assets/entry-401840c0.css", "assets/free_email_form-cf4756c6.css", "assets/modal-5dbf091c.js", "assets/Select-f97196dc.js", "assets/Select-cd38999e.css", "assets/dropdown_menu_typed-c164b42b.js", "assets/TextInput-c03c69d6.js", "assets/ProfileHoverCard-c8bfb61a.js", "assets/UserBadge-a694a663.js", "assets/UserBadge-fb9c174e.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/link-90872791.js", "assets/download-8a01f574.js", "assets/Portal-f12cb990.js", "assets/SubstackLogoIcon-3ca41075.js", "assets/traverse-bb97748e.js", "assets/plus-3216546d.js", "assets/LockThinIcon-fd5808c3.js", "assets/textarea-b8862a3a.js", "assets/homepage_hooks-f7a72a82.css", "assets/ShareableImageModal-44b31caa.css", "assets/chat-f6285661.js", "assets/facepile-b2a8f169.js", "assets/TextLink-9c0e1c8b.js", "assets/isOnReader-b27f4ba9.js", "assets/TextLink-f399b628.css", "assets/user-dd90bf1b.js", "assets/facepile-0c1de29e.css", "assets/arrays-80a5aec5.js", "assets/user_indicator-80bd5739.js", "assets/toInteger-b5ddb910.js", "assets/search-166a516b.js", "assets/user_indicator-c1a5a8fb.css", "assets/useInfiniteScroll-da2d8ccf.js", "assets/bell-off-279845e9.js", "assets/NotificationsPage-c4a34de1.css", "assets/settings-424bdcef.js", "assets/Providers-8e1c708e.js", "assets/experimentsAndSiteConfigContext-a6aeed82.js", "assets/mousetrap-d052d743.js", "assets/publicationUserSettings-f18fba64.js", "assets/postPingbackTracker-c6b6d289.js", "assets/publication-6fec99b2.js", "assets/CustomerSupportModeForm-3d235c45.js", "assets/PubAccentTheme-61cfc74b.js", "assets/PubAccentTheme-da6e9591.css"]),
        result: i,
        isReadOnly: !0,
        closeMenu: () => {
            d(!1)
        }
    })))))
}
const un = "_root_j8w7c_1",
    pn = "_badge_j8w7c_8",
    gn = "_circle_j8w7c_27",
    Me = {
        root: un,
        badge: pn,
        circle: gn
    };

function fn({
    fill: t = "outline",
    canShowAlerts: n = !1
}) {
    const o = ze(),
        c = Ce({
            pathname: "/api/v1/activity-feed-web",
            query: {
                limit: 12
            },
            auto: !1
        });
    P(() => {
        o.activityUnreadCount > 0 && f(b.NOTIFICATIONS_UNREAD_SHOWN, {
            unreadCount: o.activityUnreadCount
        })
    }, [o.activityUnreadCount]);
    const i = () => _e(() =>
            import ("./MiniNotificationsViewer-400df9a1.js"), ["assets/MiniNotificationsViewer-400df9a1.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/NotificationsPage-57a6a558.js", "assets/SubstackIcon-eb634931.js", "assets/Metadata-be2b4cf2.js", "assets/ShareableImageModal-0bb2a3c2.js", "assets/Menu-5342012d.js", "assets/react-laag.esm-f47be925.js", "assets/useResponsive-08e338a7.js", "assets/x-fc38e969.js", "assets/transition-c6a4911b.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/chevron-down-6d7770f2.js", "assets/Modal-ab851ad1.js", "assets/CloseIcon-90eee5fe.js", "assets/Modal-faa641cb.css", "assets/Switch-b8853cbf.js", "assets/preflight-1c24e477.js", "assets/ShareAssetButtons-11c2be43.js", "assets/HoverCard-cbdee1d2.js", "assets/_defineProperty-105d261c.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/HoverCard-41ea4b50.css", "assets/ShareAssetButtons-44463ef6.css", "assets/homepage_hooks-47e7a4e7.js", "assets/debounce-f31b8252.js", "assets/toNumber-3c911b0f.js", "assets/_baseEach-63ad03e0.js", "assets/_baseIteratee-fbbabc87.js", "assets/_baseEach-6c7a4143.css", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/publication-1bbad178.js", "assets/share_dialog-b74d3337.js", "assets/free_email_form-1d3fc4be.js", "assets/profile-a781fd85.js", "assets/free_email_form.module-135823b4.js", "assets/entry-a965ffeb.js", "assets/entry-401840c0.css", "assets/free_email_form-cf4756c6.css", "assets/modal-5dbf091c.js", "assets/Select-f97196dc.js", "assets/Select-cd38999e.css", "assets/dropdown_menu_typed-c164b42b.js", "assets/TextInput-c03c69d6.js", "assets/ProfileHoverCard-c8bfb61a.js", "assets/UserBadge-a694a663.js", "assets/UserBadge-fb9c174e.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/link-90872791.js", "assets/download-8a01f574.js", "assets/Portal-f12cb990.js", "assets/SubstackLogoIcon-3ca41075.js", "assets/traverse-bb97748e.js", "assets/plus-3216546d.js", "assets/LockThinIcon-fd5808c3.js", "assets/textarea-b8862a3a.js", "assets/homepage_hooks-f7a72a82.css", "assets/ShareableImageModal-44b31caa.css", "assets/chat-f6285661.js", "assets/facepile-b2a8f169.js", "assets/TextLink-9c0e1c8b.js", "assets/isOnReader-b27f4ba9.js", "assets/TextLink-f399b628.css", "assets/user-dd90bf1b.js", "assets/facepile-0c1de29e.css", "assets/arrays-80a5aec5.js", "assets/user_indicator-80bd5739.js", "assets/toInteger-b5ddb910.js", "assets/search-166a516b.js", "assets/user_indicator-c1a5a8fb.css", "assets/useInfiniteScroll-da2d8ccf.js", "assets/bell-off-279845e9.js", "assets/NotificationsPage-c4a34de1.css", "assets/settings-424bdcef.js", "assets/Providers-8e1c708e.js", "assets/experimentsAndSiteConfigContext-a6aeed82.js", "assets/mousetrap-d052d743.js", "assets/publicationUserSettings-f18fba64.js", "assets/postPingbackTracker-c6b6d289.js", "assets/publication-6fec99b2.js", "assets/CustomerSupportModeForm-3d235c45.js", "assets/PubAccentTheme-61cfc74b.js", "assets/PubAccentTheme-da6e9591.css"]),
        {
            iString: u
        } = L();
    return e(D, null, e(ve, {
        trigger: a => e(Se, {
            text: u("Activity"),
            layerOptions: {
                placement: "bottom-center",
                triggerOffset: 4
            }
        }, e(pe, $(j({}, a), {
            "aria-label": "View activity",
            priority: "tertiary",
            onMouseEnter: i,
            position: "relative"
        }), e(bt, {
            "aria-hidden": !0,
            size: 20
        }), o.activityUnreadCount > 0 && e(Ke, {
            count: o.activityUnreadCount
        }))),
        onOpen: () => c.refetch(),
        maxHeight: "fit-content",
        padding: 0,
        Theme: He
    }, e(we, {
        module: "./activity/MiniNotificationsViewer",
        resolve: a => a.MiniNotificationsViewer,
        onRequest: i,
        resource: c,
        whileLoading: e(ye, {
            width: 400
        })
    })), n && e(_n, null))
}

function Ke({
    count: t
}) {
    return e(ye, {
        className: ee(Me.badge, t < 10 && Me.circle),
        alignItems: "center",
        justifyContent: "center"
    }, t < 100 ? t : "99+")
}
const bn = "_menuIcon_z6du5_1",
    De = {
        menuIcon: bn
    },
    hn = "_searchWrapper_2k1nq_1",
    yn = "_active_2k1nq_14",
    Cn = "_marginLeft_2k1nq_19",
    wn = "_marginRight_2k1nq_23",
    vn = "_trigger_2k1nq_35",
    Sn = "_searcher_2k1nq_62",
    kn = "_dropdown_2k1nq_77",
    Tn = "_result_2k1nq_84",
    In = "_loading_2k1nq_98",
    Nn = "_empty_2k1nq_99",
    An = "_more_2k1nq_108",
    En = "_seeMore_2k1nq_112",
    Mn = "_photo_2k1nq_124",
    Dn = "_metadata_2k1nq_131",
    Ln = "_paddingRight_2k1nq_135",
    v = {
        searchWrapper: hn,
        active: yn,
        marginLeft: Cn,
        marginRight: wn,
        trigger: vn,
        searcher: Sn,
        dropdown: kn,
        result: Tn,
        loading: In,
        empty: Nn,
        more: An,
        seeMore: En,
        photo: Mn,
        metadata: Dn,
        paddingRight: Ln
    },
    Le = ({
        pub: t,
        isSignedIn: n
    }) => {
        const [o, c] = U(!1), {
            getConfigFor: i
        } = ue(), u = !!i("enable_client_publication_search_cache"), a = Fe(), {
            triggerProps: d,
            layerProps: l,
            renderLayer: m,
            isOpen: h,
            setOpen: p
        } = At({
            layerOptions: {
                auto: !0,
                possiblePlacements: ["bottom-start", "bottom-end", "bottom-center"],
                placement: "bottom-start"
            }
        }), C = de(r => {
            r === "escape" && (c(!1), p(!1))
        }, [p]), g = Bn({
            pub: t,
            onSearchChange: C,
            resultsLayerProps: l
        });
        return P(() => {
            p(g.query.length > 0)
        }, [g.query, p]), e(D, null, e(E, $(j({}, d), {
            className: ee(v.searchWrapper, o && v.active, n ? v.marginLeft : v.marginRight),
            style: {
                width: o ? "400px" : "40px"
            },
            paddingLeft: o ? 16 : 0,
            alignItems: "center",
            justifyContent: o ? "space-between" : "center",
            onClick: () => {
                if (u) {
                    a.open();
                    return
                }
                o || (c(!o), g.focus())
            },
            gap: 4
        }), e(Ve, {
            stroke: "var(--color-fg-primary)",
            "area-hidden": !0,
            size: 20,
            strokeWidth: 2
        }), o && g.input), h && m(g.results))
    };

function Bn({
    pub: t,
    onSearchChange: n,
    resultsLayerProps: o
}) {
    var g;
    const {
        getConfigFor: c
    } = ue(), i = !!((g = c("platform_searcher_enabled")) != null && g), {
        iString: u
    } = L(), [a, d] = U(""), l = he(null), [m, h] = U(""), p = Ce({
        pathname: "/api/v1/post/search",
        query: {
            query: a,
            focusedPublicationId: t.id,
            page: 0,
            numberFocused: 3,
            numberPlatform: 2,
            includePlatformResults: String(i)
        },
        deps: [a],
        auto: !1
    }), C = de(r => {
        r.key === "Enter" ? a && (window.location.href = xe({
            query: a,
            params: {
                focusedPublicationId: t.id
            }
        })) : r.key === "Escape" && (d(""), n == null || n("escape"))
    }, [n, a, t]);
    return P(() => {
        l.current && l.current.focus()
    }, []), P(() => {
        if (a.length) {
            h(Je());
            const r = setTimeout(p.refetch, 300);
            return () => clearTimeout(r)
        }
    }, [a]), {
        query: a,
        fetch: p,
        focus: () => setTimeout(() => {
            var r;
            return (r = l.current) == null ? void 0 : r.focus()
        }, 0),
        input: e("input", {
            ref: l,
            className: ee(v.searcher),
            placeholder: u("Search..."),
            value: a,
            onChange: r => {
                d(r.target.value), n == null || n("input")
            },
            onKeyDown: C,
            autoFocus: !0
        }),
        results: e(Rn, {
            pub: t,
            searchQuery: a,
            searchFetch: p,
            layerProps: o,
            searchId: m
        })
    }
}
const Rn = ({
        pub: t,
        searchQuery: n,
        searchFetch: o,
        layerProps: c,
        searchId: i
    }) => {
        var C, g, r, _, S;
        const {
            getConfigFor: u
        } = ue(), a = !!((C = u("platform_searcher_enabled")) != null && C), {
            iTemplate: d
        } = L(), l = (a ? (g = o.result) == null ? void 0 : g.focused : (r = o.result) == null ? void 0 : r.results) || [], m = a ? ((_ = o.result) == null ? void 0 : _.results) || [] : [], h = ((S = o.result) == null ? void 0 : S.publications) || [], p = m.length + l.length;
        return P(() => {
            if (!o.result) return;
            const s = {
                query: n,
                results: p,
                search_id: i
            };
            f(b.PUBLICATION_SEARCH_DROPDOWN_SEARCHED, s)
        }, [o.result]), e(fe, $(j({}, c), {
            radius: "md",
            className: v.dropdown,
            border: "detail-themed"
        }), !o.hasLoadedOnce || o.isLoading && !l.length && !m.length ? e(E, {
            radius: "md",
            paddingY: 20,
            className: v.loading,
            justifyContent: "center"
        }, e(Pt, {
            size: 40
        })) : o.error ? e(E, {
            radius: "md",
            className: v.error,
            justifyContent: "start"
        }, e(A.B3, {
            translated: !0,
            color: "pub-primary-text"
        }, "Something went wrong.")) : !l.length && !m.length ? e(E, {
            radius: "md",
            padding: 20,
            className: v.empty,
            justifyContent: "start"
        }, e(A.B3, {
            translated: !0,
            color: "pub-primary-text"
        }, "Search for ", e("b", null, '"', I18N.p(n), '"'))) : e(D, null, l.map((s, y) => e(Be, {
            key: s.id,
            pub: t,
            post: s,
            isFirst: y === 0,
            isLast: !m.length && y === l.length - 1,
            hideBottomBorder: m.length > 0,
            searchId: i,
            rank: y,
            resultCount: p
        })), m.length > 0 && e(E, {
            className: v.more,
            paddingX: 24,
            paddingY: 8
        }, e(A.B4, {
            weight: "semibold",
            color: "pub-primary-text"
        }, l.length ? d `More results from across Substack` : d `No results found on ${t.name}. More results from across Substack`)), m.map((s, y) => {
            const T = h.find(k => k.id === s.publication_id);
            return T ? e(Be, {
                key: s.id,
                pub: T,
                post: s,
                isLast: y === m.length - 1,
                includePublication: !0,
                searchId: i,
                rank: l.length + y,
                resultCount: p
            }) : null
        }), e(E, {
            className: v.seeMore,
            paddingX: 24,
            paddingY: 12,
            onClick: () => {
                window.location.href = xe({
                    query: n,
                    params: {
                        focusedPublicationId: t.id
                    }
                })
            }
        }, e(A.B4, {
            translated: !0,
            color: "pub-primary-text",
            weight: "semibold"
        }, "See more results..."))))
    },
    Be = ({
        pub: t,
        post: n,
        includePublication: o = !1,
        hideBottomBorder: c = !1,
        isLast: i = !1,
        isFirst: u = !1,
        searchId: a,
        rank: d,
        resultCount: l
    }) => {
        var p;
        const m = (p = n.reactions["❤"]) != null ? p : 0,
            {
                language: h
            } = L();
        return e(E, {
            paddingX: 12,
            onClick: () => {
                const C = {
                    search_key: "publication_search_dropdown",
                    search_id: a,
                    rank: d,
                    result_count: l
                };
                f(b.PUBLICATION_SEARCH_DROPDOWN_RESULT_CLICKED, C), window.location.href = Xe(t, n)
            },
            width: "100%"
        }, e(fe, {
            marginHeight: 4,
            paddingTop: u ? 12 : 8,
            paddingBottom: i ? 12 : 8,
            borderBottom: c ? void 0 : "detail-themed"
        }, e(E, {
            className: v.result,
            gap: 16,
            padding: 12,
            radius: "md"
        }, n.cover_image && e("img", {
            src: Pe(n.cover_image, 120, {
                height: 80,
                smartCrop: !0
            }),
            alt: n.cover_image_alt || "",
            className: v.photo
        }), e(fe, {
            gap: 4,
            className: v.metadata
        }, o && e(A.Meta, null, t.name), e(A.H4, {
            color: "pub-primary-text"
        }, n.title), !!n.subtitle && e(A.B4, {
            color: "pub-primary-text"
        }, n.subtitle), e(E, {
            alignItems: "center",
            gap: 4
        }, e(A.Meta, {
            color: "pub-secondary-text",
            className: ee(v.paddingRight, "ufi-preamble-label", "post-date")
        }, e("time", {
            dateTime: le(n.post_date).toISOString()
        }, Ut({
            post: n,
            showDatetime: !1,
            language: h
        }))), m > 0 && e(D, null, e(Ft, {
            stroke: "var(--color-light-secondary)",
            fill: "transparent",
            height: 16
        }), e(A.Meta, {
            color: "pub-secondary-text",
            className: v.paddingRight
        }, m)), n.comment_count > 0 && e(D, null, e(qt, {
            stroke: "var(--color-light-secondary)",
            fill: "transparent",
            height: 16
        }), e(A.Meta, {
            color: "pub-secondary-text"
        }, n.comment_count)))))))
    },
    On = "_trigger_tg5wo_1",
    xn = "_divider_tg5wo_21",
    Pn = "_offset_tg5wo_27",
    Un = "_shareIconContainer_tg5wo_32",
    Fn = "_dropdownMenu_tg5wo_38",
    qn = {
        trigger: On,
        divider: xn,
        offset: Pn,
        shareIconContainer: Un,
        dropdownMenu: Fn
    };

function Re({
    pub: t,
    user: n
}) {
    const {
        iString: o
    } = L(), [c, i] = U(!1), u = Qe(t), a = {
        utm_source: M.navbar,
        utm_medium: Ze.web,
        r: n != null && n.id ? n.id.toString(36) : null
    }, d = et(u, a), l = () => {
        Gt({
            shareUrl: d,
            shareName: t.name,
            pub: t,
            utm_campaign: Y.navbar
        })
    }, m = () => {
        Yt({
            shareUrl: d,
            pub: t,
            utm_campaign: Y.navbar
        })
    }, h = () => {
        Jt({
            shareUrl: d,
            pub: t,
            utm_campaign: Y.navbar
        })
    }, p = () => {
        Xt({
            shareUrl: d,
            pub: t,
            utm_campaign: Y.navbar
        })
    }, C = () => {
        Qt({
            shareUrl: d,
            shareName: `Subscribe to ${t.name}`,
            pub: t,
            utm_campaign: Y.navbar
        })
    }, g = () => {
        Zt({
            shareUrl: d,
            pub: t,
            utm_campaign: Y.navbar
        })
    }, r = () => G(this, null, function*() {
        f(b.PUBLICATION_SHARE_BUTTON_CLICKED)
    }), _ = e(pe, {
        "aria-label": o("Share Publication"),
        priority: "tertiary"
    }, e(zt, {
        size: 20
    }));
    return e(D, null, e(ve, {
        trigger: _,
        onOpen: r,
        useMobileBottomSheet: !0,
        layerOptions: {
            placement: "bottom-end",
            preferX: "left"
        },
        className: qn.dropdownMenu,
        maxHeight: "fit-content"
    }, e(x, {
        icon: e(en, null),
        onClick: g
    }, o("Copy link")), e(x, {
        icon: e(Vt, null),
        onClick: C
    }, o("Send as email")), e(x, {
        icon: e(nn, null),
        onClick: () => {
            f(b.SHARE_PUBLICATION_MODAL_OPENED), i(!0)
        }
    }, o("Get shareable images")), e(Et, null, e(x, {
        icon: e(Ht, {
            height: 24
        }),
        onClick: p
    }, o("Share to Notes")), e(x, {
        icon: e(Kt, {
            height: 24
        }),
        onClick: m
    }, o("Share to Facebook")), e(x, {
        icon: e(Wt, {
            height: 24
        }),
        onClick: h
    }, o("Share to Linkedin")), e(x, {
        icon: e(jt, {
            height: 24
        }),
        onClick: l
    }, o("Share to X")))), e(Bt, {
        pub: t,
        isOpen: c,
        setOpen: i,
        item: {
            type: "pub_shareable_image"
        },
        width: 718
    }))
}

function zn() {
    var c, i;
    const {
        iString: t
    } = L(), o = (i = (c = Dt("/api/v1/messages/inbox", {}, {
        focusThrottleInterval: 5 * 60 * 1e3
    }).data) == null ? void 0 : c.directMessagesUnreadCount) != null ? i : 0;
    return P(() => {
        f(b.CHAT_DROPDOWN_BADGE_SHOWN, {
            count: o
        })
    }, [o]), e(ve, {
        trigger: u => e(Se, {
            text: t("Chat"),
            layerOptions: {
                placement: "bottom-center",
                triggerOffset: 4
            }
        }, e(pe, $(j({}, u), {
            "aria-label": "View chats",
            priority: "tertiary",
            onMouseEnter: Oe,
            position: "relative"
        }), e(It, {
            size: 20
        }), o > 0 && e(Ke, {
            count: o
        }))),
        onClose: () => {
            f(b.CHAT_DROPDOWN_CLOSED)
        },
        maxHeight: "fit-content",
        padding: 0,
        Theme: He
    }, e(we, {
        module: "./MiniInbox",
        onRequest: Oe,
        resolve: u => u.MiniChatInbox,
        whileLoading: e(mt, {
            width: 360
        })
    }))
}
const Oe = () => _e(() =>
        import ("./MiniInbox-63708486.js"), ["assets/MiniInbox-63708486.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/CommunityPostView-c90ac03a.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/react-6ae938e8.js", "assets/useResponsive-08e338a7.js", "assets/linkify-91f62846.js", "assets/ProfileHoverCard-c8bfb61a.js", "assets/_defineProperty-105d261c.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/react-laag.esm-f47be925.js", "assets/transition-c6a4911b.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/HoverCard-cbdee1d2.js", "assets/x-fc38e969.js", "assets/HoverCard-41ea4b50.css", "assets/Menu-5342012d.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/profile-a781fd85.js", "assets/UserBadge-a694a663.js", "assets/UserBadge-fb9c174e.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/debounce-f31b8252.js", "assets/toNumber-3c911b0f.js", "assets/search-166a516b.js", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/podcast_apps-4f303ac3.js", "assets/podcast_apps-184969d7.css", "assets/CommentBody-36a2d638.js", "assets/traverse-bb97748e.js", "assets/CommentBody-c55cfff6.css", "assets/mention-8372bb04.js", "assets/_baseEach-63ad03e0.js", "assets/_baseIteratee-fbbabc87.js", "assets/CloseIcon-90eee5fe.js", "assets/_baseEach-6c7a4143.css", "assets/mention-e43b25a5.css", "assets/Attachments-84a6967e.js", "assets/isOnReader-b27f4ba9.js", "assets/homepage_hooks-47e7a4e7.js", "assets/Modal-ab851ad1.js", "assets/Modal-faa641cb.css", "assets/publication-1bbad178.js", "assets/share_dialog-b74d3337.js", "assets/free_email_form-1d3fc4be.js", "assets/free_email_form.module-135823b4.js", "assets/entry-a965ffeb.js", "assets/entry-401840c0.css", "assets/free_email_form-cf4756c6.css", "assets/modal-5dbf091c.js", "assets/Select-f97196dc.js", "assets/chevron-down-6d7770f2.js", "assets/Select-cd38999e.css", "assets/dropdown_menu_typed-c164b42b.js", "assets/TextInput-c03c69d6.js", "assets/link-90872791.js", "assets/download-8a01f574.js", "assets/Portal-f12cb990.js", "assets/Metadata-be2b4cf2.js", "assets/SubstackLogoIcon-3ca41075.js", "assets/plus-3216546d.js", "assets/LockThinIcon-fd5808c3.js", "assets/textarea-b8862a3a.js", "assets/homepage_hooks-f7a72a82.css", "assets/AlertDialog-d9b964a5.js", "assets/AlertDialog-502ee8c4.css", "assets/decodeHtmlEntitiesFast-d19e2d0c.js", "assets/keyBy-bc7e2f81.js", "assets/_baseAssignValue-2cb42459.js", "assets/_createAggregator-deb99b9c.js", "assets/Textarea-ed5c1b37.js", "assets/TextLink-9c0e1c8b.js", "assets/TextLink-f399b628.css", "assets/Unit-93a04fbc.js", "assets/Attachments-858e615b.css", "assets/link_copy_toast-1ffe3674.js", "assets/user-dd90bf1b.js", "assets/CommunityPostView-99a59fb0.css", "assets/chat-f6285661.js", "assets/Inbox-65c4695c.js", "assets/TabBar-a04beb26.js", "assets/TabBar-a61ccfca.css", "assets/user_indicator-80bd5739.js", "assets/toInteger-b5ddb910.js", "assets/user_indicator-c1a5a8fb.css", "assets/useInfiniteScroll-da2d8ccf.js", "assets/ChatZero-70900bcb.js", "assets/ConfirmModal-2d9bd82e.js", "assets/uniq-0ace9f40.js", "assets/_baseUniq-53539133.js", "assets/uniqBy-ecd7ee81.js", "assets/set-d2181b3b.js", "assets/last-cbcbf07b.js", "assets/ConfirmModal-44d7fa89.css", "assets/MessageBubbleView-5de3062e.js", "assets/MessageBubbleView-9c490fb8.css", "assets/DropzoneOverlay-251c7ce7.js", "assets/DropzoneOverlay-86d10bf1.css", "assets/useConfirm-05af6f82.js", "assets/unlock-12d676d9.js", "assets/Switch-b8853cbf.js", "assets/preflight-1c24e477.js", "assets/text-9fe09cd1.js", "assets/arrow-up-7c535a71.js", "assets/bell-off-279845e9.js", "assets/Inbox-6ab49711.css"]),
    O = st,
    vo = ({
        baseRef: t,
        className: n,
        fixedTooltip: o = !0,
        freeSignup: c,
        freeSignupEmail: i,
        hideCta: u,
        hideNotifications: a,
        hideChat: d,
        hideSearch: l,
        hideShare: m,
        hideUserIndicator: h,
        hide_subscribe_cta: p,
        isAccountContext: C = !1,
        isMeetingsActive: g,
        isPublishContext: r,
        pub: _,
        showCustomerSupportModeModal: S,
        user: s
    }) => {
        const {
            iString: y,
            language: T
        } = L(), k = he(null), {
            getSettingFor: X
        } = _t(), [Q, F] = U(!1), [q, z] = U(!1), B = Ot(), K = (s == null ? void 0 : s.is_global_admin) && !(s != null && s.is_admin), te = (s == null ? void 0 : s.is_global_admin) && (s == null ? void 0 : s.is_admin) && !(s != null && s.is_author), W = qe(), ne = de(() => G(void 0, null, function*() {
            try {
                yield be.del("/api/v1/customer_support_mode"), document.location.href = "/"
            } catch (w) {
                alert(Ne(w))
            }
        }), []), oe = () => G(void 0, null, function*() {
            F(!0);
            try {
                yield be.post("/api/v1/subscription/reactivate").send({}), z(!0), B.popToast(w => e(xt, $(j({}, w), {
                    text: y("Your subscription has been renewed!")
                })))
            } catch (w) {
                console.error("Failed to set to renew:", w), alert(Ne(w))
            } finally {
                F(!1)
            }
        }), ae = de(() => G(void 0, null, function*() {
            var w;
            (w = k.current) == null || w.open()
        }), [k]), ie = r || C ? $t : ut, {
            getConfigFor: re
        } = ue(), I = !!re("enable_client_publication_search_cache"), ge = Fe(), se = ke();
        return e("div", {
            className: ee("navbar-buttons", n),
            ref: t
        }, e(ie, null, e(tt.Consumer, null, w => e(St.Consumer, null, V => e(D, null, !me() && !s && e(D, null, !l && e(Le, {
            pub: _,
            isSignedIn: !1
        }), !m && e(Re, {
            pub: _,
            user: s
        })), !me() && s && e(E, {
            gap: 4
        }, !l && (I ? e(Se, {
            text: y("Search"),
            layerOptions: {
                placement: "bottom-center",
                triggerOffset: 4
            },
            hotkeys: ["/"]
        }, e(pe, {
            priority: "tertiary",
            onClick: () => ge.open()
        }, e(Ve, {
            size: 20
        }))) : e(Le, {
            pub: _,
            isSignedIn: !0
        })), d ? !m && e(Re, {
            pub: _,
            user: s
        }) : e(zn, null), !a && e(fn, {
            fill: "borderless",
            canShowAlerts: !_ || r
        })), !u && Kn({
            pub: _,
            user: s,
            freeSignup: c,
            freeSignupEmail: i,
            hide_subscribe_cta: p,
            viralGiftsConfig: _.viralGiftsConfig,
            isPublishContext: r,
            localeContext: V,
            siteConfigContext: w,
            isMeetingsActive: g,
            getSettingFor: X,
            renewing: Q,
            renewed: q,
            setToRenew: oe,
            experiments: W,
            language: T,
            isMobile: se
        }), !h && e(ht, {
            pub: _,
            user: s,
            enableCustomerServiceMode: K ? ae : null,
            disableCustomerServiceMode: te ? ne : null,
            fixedTooltip: o
        }))))), K && e(Nt, null, e(gt, {
            className: "account-info-customer-support-mode-modal",
            ref: k,
            openByDefault: S && K
        }, e(ft, {
            redirect: J("redirect") || "/publish/home",
            onCancel: w => {
                var V;
                return (V = k.current) == null ? void 0 : V.close(w)
            }
        }))))
    },
    Vn = ({
        pub: t,
        dashboardPubs: n
    }) => {
        const o = ke(),
            {
                iString: c
            } = L();
        return e(Rt, {
            priority: "secondary",
            size: o ? "sm" : "md",
            menuItems: n.map(({
                logo_url: i,
                name: u,
                subdomain: a
            }) => e(x, {
                className: De.menuItem,
                href: ct(a, {
                    params: {
                        utm_source: M.substack,
                        utm_content: lt.dashboardPubSwitcher
                    }
                }),
                icon: e("img", {
                    className: De.menuIcon,
                    width: 20,
                    src: Pe(i || "/img/substack-nomargin.png", 20)
                }),
                priority: t.subdomain === a ? "selected" : "primary"
            }, u)),
            href: Ue(t, {
                addBase: !0
            }),
            localNavigation: !1,
            "data-testid": "menu-dashboard-button",
            additionalMenuProps: {
                useMobileBottomSheet: !0,
                mobileBottomSheetTitle: c("Dashboard"),
                mobileBottomSheetSubtitle: c("Select a publication")
            }
        }, c("Dashboard"))
    },
    Hn = ({
        dashboardPubs: t,
        pub: n
    }) => {
        const {
            iString: o
        } = L(), c = ke();
        return t.length > 1 ? e(Vn, {
            pub: n,
            dashboardPubs: t
        }) : e(N, {
            size: c ? "sm" : "md",
            priority: "secondary",
            href: Ue(n, {
                addBase: !0
            }),
            "data-testid": "menu-dashboard-button",
            localNavigation: !1
        }, o("Dashboard"))
    };

function Kn({
    user: t,
    pub: n,
    freeSignup: o,
    freeSignupEmail: c,
    hide_subscribe_cta: i,
    isPublishContext: u,
    isMeetingsActive: a,
    siteConfigContext: d,
    getSettingFor: l,
    renewing: m,
    renewed: h,
    setToRenew: p,
    experiments: C,
    language: g,
    isMobile: r
}) {
    var z, B, K, te, W, ne, oe, ae, ie, re;
    const {
        iString: _,
        iPlural: S
    } = I18N.i(g);
    n.invite_only && !(t != null && t.subscription_id || t != null && t.is_free_subscribed) && (i = !0);
    const s = t == null ? void 0 : t.is_contributor,
        y = (t == null ? void 0 : t.is_subscribed) || s,
        T = (t == null ? void 0 : t.is_free_subscribed) || o,
        k = O.paymentsAreEnabled(n) && y && ["gift", "comp"].includes(t.subscription_type) && le(t.subscription_expiry).subtract(30, "days").isBeforeNow(),
        X = O.paymentsAreEnabled(n) && O.userIsFreeOnly(t) && t.comp_expired_recently,
        Q = (t == null ? void 0 : t.is_free_subscribed) && (t == null ? void 0 : t.is_paused),
        F = ((z = t == null ? void 0 : t.dashboard_pubs) == null ? void 0 : z.length) === 1,
        q = (t == null ? void 0 : t.subscription_type) === "ios_app";
    if (s) {
        const I = (t == null ? void 0 : t.dashboard_pubs) || [];
        return u && I.length === 1 ? [] : e(Hn, {
            dashboardPubs: I,
            pub: n,
            useNewDashLink: F
        })
    } else {
        if (Q) return e(N, {
            "data-testid": "noncontributor-cta-button",
            size: r ? "sm" : "md",
            onClick: () => {
                f(b.NAV_BAR_CTA_CLICKED, {
                    type: "unpause-subscription"
                }), R(nt(n, {
                    addBase: !0
                }), {
                    local_navigation: !1
                })
            }
        }, _("Unpause my subscription"));
        if (k || X) {
            if (!i) return e(N, {
                "data-testid": "noncontributor-cta-button",
                size: r ? "sm" : "md",
                onClick: () => {
                    f(b.NAV_BAR_CTA_CLICKED, {
                        type: "continue-support"
                    }), R(Z(n, {
                        utm_source: M.menu,
                        simple: !0,
                        next: document.location.href,
                        referring_pub_ids: J("referring_pub_ids"),
                        addBase: !0,
                        selectedPlanId: k && (t != null && t.is_founding) ? n.plans.find(I => I.metadata.founding).id : null
                    }), {
                        local_navigation: !1
                    })
                }
            }, e("span", {
                className: "mobile-only"
            }, _("Subscribe")), e("span", {
                className: "desktop-only"
            }, _("Continue your support")))
        } else if (O.paymentsAreEnabled(n) && T && !y && !["thebulwark"].includes(n.subdomain)) {
            if (!i) return e(N, {
                "data-testid": "noncontributor-cta-button",
                size: r ? "sm" : "md",
                onClick: () => {
                    f(b.NAV_BAR_CTA_CLICKED, {
                        type: "upgrade-subscription"
                    }), R(Z(n, {
                        utm_source: M.menu,
                        simple: !0,
                        next: document.location.href,
                        referring_pub_ids: J("referring_pub_ids"),
                        addBase: !0
                    }), {
                        local_navigation: !1
                    })
                }
            }, Ae(n, {
                isFreeSubscribed: !0,
                isMobile: me(),
                language: g
            }))
        } else if (O.paymentsAreEnabled(n) ? !y : !(T || y)) {
            if (!i) {
                const I = (te = (K = (B = J("referring_pub_ids")) == null ? void 0 : B.split) == null ? void 0 : K.call(B, ",")) == null ? void 0 : te[0],
                    ge = (oe = (ne = (W = J("referring_pub_ids")) == null ? void 0 : W.split) == null ? void 0 : ne.call(W, ",")) == null ? void 0 : oe.slice(1);
                return e(N, {
                    "data-testid": "noncontributor-cta-button",
                    size: r ? "sm" : "md",
                    onClick: () => G(this, null, function*() {
                        const se = t && !t.is_magic && t.email || c;
                        if (f(b.NAV_BAR_CTA_CLICKED, {
                                type: "free-subscription"
                            }), se) {
                            let w;
                            try {
                                w = (yield be.post("/api/v1/free").send({
                                    source: "menu",
                                    email: se,
                                    first_url: yt,
                                    first_referrer: Ct,
                                    current_url: wt,
                                    current_referrer: vt,
                                    referring_pub_id: I,
                                    additional_referring_pub_ids: ge
                                })).body.referral_token, pt()
                            } catch (V) {
                                f(b.FREE_SIGNUP_FAILED, {
                                    reason: V.message,
                                    source: "menu"
                                })
                            }
                            window.location.href = Z(n, {
                                utm_source: M.menu,
                                simple: !0,
                                next: document.location.href,
                                skip_redirect_check: !0,
                                just_signed_up: !0,
                                addBase: !0,
                                referral_token: w
                            })
                        } else window.location.href = Z(n, {
                            utm_source: M.menu,
                            simple: !0,
                            next: document.location.href,
                            referring_pub_ids: J("referring_pub_ids"),
                            addBase: !0
                        })
                    })
                }, Ae(n, {
                    isFreeSubscribed: T,
                    isMobile: me(),
                    language: g
                }))
            }
        } else {
            if (n.invite_only && y && t.invites < n.subscriber_invites) return e(N, {
                "data-testid": "noncontributor-cta-button",
                size: r ? "sm" : "md",
                onClick: () => {
                    f(b.NAV_BAR_CTA_CLICKED, {
                        type: "invite"
                    }), R(ot(n), {
                        local_navigation: !1
                    })
                }
            }, e("span", null, S("1 invite left", "%1 invites left", n.subscriber_invites - t.invites)));
            if (O.paymentsAreEnabled(n) && a && !d.getConfigFor("hide_book_a_meeting_button")) return e(N, {
                "data-testid": "noncontributor-cta-button",
                size: r ? "sm" : "md",
                onClick: () => {
                    f(b.NAV_BAR_CTA_CLICKED, {
                        type: "book-meeting"
                    }), R(at(n, {
                        params: {
                            source: "navbar-cta"
                        },
                        referrer: typeof window != "undefined" && window.location.href
                    }), {
                        local_navigation: !1
                    })
                }
            }, e("span", {
                className: "mobile-only"
            }, _("Book meeting")), e("span", {
                className: "desktop-only"
            }, _("Book a meeting")));
            if (O.paymentsAreEnabled(n) && t.is_subscribed && !q && t.subscription_unsubscribed_at && !["gift", "comp"].includes(t.subscription_type)) return e(N, {
                "data-testid": "noncontributor-cta-button",
                size: r ? "sm" : "md",
                onClick: () => {
                    f(b.NAV_BAR_CTA_CLICKED, {
                        type: "renew"
                    }), p()
                },
                disabled: m || h,
                style: {
                    visibility: h ? "hidden" : "visible"
                }
            }, e("span", {
                className: "mobile-only"
            }, _("Renew")), e("span", {
                className: "desktop-only"
            }, _("Renew subscription")));
            if (O.paymentsAreEnabled(n) && (Ee({
                    pub: n
                }) || !t.is_founding) && !q && le(t.subscription_first_payment_at).isBefore(le().subtract(48, "hours")) && (Ee({
                    pub: n
                }) || n.subdomain === "pinespayments" || ((re = (ie = (ae = n == null ? void 0 : n.plans) == null ? void 0 : ae.find(I => I.metadata.founding)) == null ? void 0 : ie.metadata) == null ? void 0 : re.short_description) === "Founding Member")) {
                const I = it({
                    pub: n,
                    user: t,
                    params: {
                        utm_source: M.menu,
                        next: document.location.href
                    }
                });
                return e(N, {
                    "data-testid": "noncontributor-cta-button",
                    size: r ? "sm" : "md",
                    onClick: () => {
                        f(b.NAV_BAR_CTA_CLICKED, {
                            type: "founding-upgrade"
                        }), R(I, {
                            local_navigation: !1
                        })
                    }
                }, e("span", {
                    className: "mobile-only"
                }, _("Upgrade")), e("span", {
                    className: "desktop-only"
                }, _("Upgrade to founding")))
            } else {
                if (n.payments_state === "disabled" && !n.invite_only && l("payment_pledges_enabled") && T && !(t != null && t.is_pledged)) return e(N, {
                    "data-testid": "noncontributor-cta-button",
                    size: r ? "sm" : "md",
                    onClick: () => {
                        f(b.NAV_BAR_CTA_CLICKED, {
                            type: "pledge-subscription"
                        }), R(Z(n, {
                            utm_source: M.menu,
                            next: document.location.href,
                            addBase: !0
                        }), {
                            local_navigation: !1
                        })
                    }
                }, _("Pledge your support"));
                if (n.is_on_substack && !(t != null && t.has_publication)) return e(N, {
                    "data-testid": "noncontributor-cta-button",
                    size: r ? "sm" : "md",
                    onClick: () => {
                        f(b.NAV_BAR_CTA_CLICKED, {
                            type: "start-publishing"
                        }), R(rt({
                            utm_source: M.menu
                        }), {
                            local_navigation: !1
                        })
                    }
                }, _("Start publishing"))
            }
        }
    }
    return null
}
export {
    vo as N, Me as c, Bn as u
};