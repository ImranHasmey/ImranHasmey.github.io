import {
    ap as _,
    y as o
} from "./tracking-376cff7a.js";
import {
    a as s
} from "./FlexBox-1a755411.js";
import {
    P as c,
    A as r
} from "./_defineProperty-105d261c.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var a = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "a6c019c4-e14b-46be-86e9-9f25c3ad590f", a._sentryDebugIdIdentifier = "sentry-dbid-a6c019c4-e14b-46be-86e9-9f25c3ad590f")
    } catch (t) {}
})();
const d = "_button_1nfia_1",
    f = "_avatarWithPubLogo_1nfia_5",
    l = "_avatar_1nfia_5",
    u = "_pubLogo_1nfia_14",
    b = "_displayedBadge_1nfia_20",
    g = "_pubIcon_1nfia_43",
    p = "_offer_1nfia_53",
    m = "_unavailable_1nfia_60",
    v = "_description_1nfia_65",
    I = "_check_1nfia_69",
    y = "_disabledCheck_1nfia_74",
    h = "_originalPrice_1nfia_78",
    P = "_closeButton_1nfia_83",
    L = "_closeIcon_1nfia_96",
    n = {
        button: d,
        avatarWithPubLogo: f,
        avatar: l,
        pubLogo: u,
        displayedBadge: b,
        pubIcon: g,
        offer: p,
        unavailable: m,
        description: v,
        check: I,
        disabledCheck: y,
        originalPrice: h,
        closeButton: P,
        closeIcon: L
    },
    D = ({
        pub: a,
        user_id: e,
        user_profile_photo_url: t,
        children: i
    }) => _("meetings_embed_publication_name") ? o(s, {
        gap: 20,
        alignItems: "center",
        paddingTop: 32
    }, o(c, {
        className: n.pubLogo,
        pub: a,
        size: 112
    }), i) : o(s, {
        gap: 20,
        alignItems: "center",
        paddingTop: 32
    }, o("div", {
        className: n.avatarWithPubLogo
    }, o(r, {
        className: n.avatar,
        user: {
            id: e,
            photo_url: t
        },
        size: 112
    }), (a.logo_url || a.cover_photo_url) && o(c, {
        className: n.pubIcon,
        pub: a,
        size: 40
    })), i);
export {
    D as M, n as c
};