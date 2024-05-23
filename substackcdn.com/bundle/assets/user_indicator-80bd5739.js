var Q = Object.defineProperty,
    Z = Object.defineProperties;
var J = Object.getOwnPropertyDescriptors;
var N = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty,
    A = Object.prototype.propertyIsEnumerable;
var P = (t, o, n) => o in t ? Q(t, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[o] = n,
    v = (t, o) => {
        for (var n in o || (o = {})) H.call(o, n) && P(t, n, o[n]);
        if (N)
            for (var n of N(o)) A.call(o, n) && P(t, n, o[n]);
        return t
    },
    M = (t, o) => Z(t, J(o));
var T = (t, o) => {
    var n = {};
    for (var r in t) H.call(t, r) && o.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && N)
        for (var r of N(t)) o.indexOf(r) < 0 && A.call(t, r) && (n[r] = t[r]);
    return n
};
import {
    c as w,
    T as s,
    b as U,
    u as Y,
    f as ee,
    i as te,
    U as oe,
    a as ne
} from "./FlexBox-1a755411.js";
import {
    cy as re,
    aF as ae,
    aE as ie,
    b2 as se,
    fA as le,
    h as X,
    o as S,
    p as z,
    y as e,
    eR as ce,
    i as E,
    cZ as de,
    al as ue,
    a$ as me,
    t as R,
    E as h,
    aH as ge,
    b7 as fe,
    cC as pe,
    fv as he,
    aW as ye,
    r as _e,
    b9 as be,
    aw as Ee,
    eN as we,
    aa as xe,
    aG as ve,
    bn as Ue,
    aJ as Ce,
    l as Ie,
    m as Ne,
    j as ke,
    U as Se,
    a7 as Be,
    M as De
} from "./tracking-376cff7a.js";
import {
    A as $
} from "./_defineProperty-105d261c.js";
import {
    D as k
} from "./Divider-0a4efe7e.js";
import {
    u as Me
} from "./free_email_form.module-135823b4.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    P as K,
    b as Te,
    M as Re
} from "./Portal-f12cb990.js";
import {
    c as W,
    u as q
} from "./useResponsive-08e338a7.js";
import "./routeClick-cd1b3f9b.js";
import {
    D as Le
} from "./_baseIteratee-fbbabc87.js";
import {
    S as Pe
} from "./Modal-ab851ad1.js";
import {
    g as He
} from "./user-e16f1619.js";
import {
    M as Ae
} from "./toInteger-b5ddb910.js";
import {
    u as ze
} from "./dropdown_menu_typed-c164b42b.js";
import {
    c as C
} from "./x-fc38e969.js";
import {
    S as Fe
} from "./search-166a516b.js";
import {
    C as Oe
} from "./chevron-down-6d7770f2.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            o = new Error().stack;
        o && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[o] = "6a114eba-3913-43be-ba45-9eca4adf6305", t._sentryDebugIdIdentifier = "sentry-dbid-6a114eba-3913-43be-ba45-9eca4adf6305")
    } catch (n) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = C("Bell", [
    ["path", {
        d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
        key: "1qo2s2"
    }],
    ["path", {
        d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
        key: "qgo35s"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = C("Home", [
    ["path", {
        d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "y5dka4"
    }],
    ["polyline", {
        points: "9 22 9 12 15 12 15 22",
        key: "e2us08"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = C("Inbox", [
    ["polyline", {
        points: "22 12 16 12 14 15 10 15 8 12 2 12",
        key: "o97t9d"
    }],
    ["path", {
        d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
        key: "oot6mr"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = C("PenTool", [
    ["path", {
        d: "m12 19 7-7 3 3-7 7-3-3z",
        key: "rklqx2"
    }],
    ["path", {
        d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",
        key: "1et58u"
    }],
    ["path", {
        d: "m2 2 7.586 7.586",
        key: "etlp93"
    }],
    ["circle", {
        cx: "11",
        cy: "11",
        r: "2",
        key: "xmgehs"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = C("Sliders", [
        ["line", {
            x1: "4",
            x2: "4",
            y1: "21",
            y2: "14",
            key: "1p332r"
        }],
        ["line", {
            x1: "4",
            x2: "4",
            y1: "10",
            y2: "3",
            key: "gb41h5"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "21",
            y2: "12",
            key: "hf2csr"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "3",
            key: "1kfi7u"
        }],
        ["line", {
            x1: "20",
            x2: "20",
            y1: "21",
            y2: "16",
            key: "1lhrwl"
        }],
        ["line", {
            x1: "20",
            x2: "20",
            y1: "12",
            y2: "3",
            key: "16vvfq"
        }],
        ["line", {
            x1: "2",
            x2: "6",
            y1: "14",
            y2: "14",
            key: "1uebub"
        }],
        ["line", {
            x1: "10",
            x2: "14",
            y1: "8",
            y2: "8",
            key: "1yglbp"
        }],
        ["line", {
            x1: "18",
            x2: "22",
            y1: "16",
            y2: "16",
            key: "1jxqpz"
        }]
    ]),
    qe = re(!1);

function Ge(t, o) {
    if (t) {
        if (!t.has_publication && !t.subdomain) return {
            type: "no-dashboard",
            url: ae(o)
        };
        if (t.subdomain) return {
            type: "dashboard",
            url: ie(t.subdomain, {
                params: o
            })
        }
    }
    return null
}

function je(t, o) {
    return t != null && t.profile_set_up_at ? se(t, o) : le(o != null && o.utm_source ? {
        utm_source: o.utm_source
    } : void 0)
}

function Rt(t) {
    return t ? "/browse/recommendations" : "/browse/staff-picks"
}
const F = {
    anchorY: "bottom",
    anchorX: "left",
    tetherY: "top",
    tetherX: "left"
};

function Ve({
    tetherRef: t,
    fixTo: o = F,
    isFixed: n,
    offset: r = {
        x: 0,
        y: 0
    },
    children: c,
    className: u
}) {
    const a = S();
    return ce(() => {
        const m = t.current,
            i = a.current;
        if (!m || !i) return;
        const g = m.getBoundingClientRect(),
            _ = i.getBoundingClientRect(),
            f = v(v({}, F), o);
        let p = f.anchorY === "center" ? g.top + g.height / 2 : g[f.anchorY];
        f.tetherY === "bottom" && (p = window.innerHeight - p), f.tetherY === "center" && (p -= _.height / 2);
        const x = f.tetherY === "bottom" ? "bottom" : "top";
        let y = f.anchorX === "center" ? g.left + g.width / 2 : g[f.anchorX];
        f.tetherX === "right" && (y = window.innerWidth - y), f.tetherX === "center" && (y -= _.width / 2);
        const B = f.tetherX === "right" ? "right" : "left";
        x === "top" && p + _.height > window.innerHeight ? (p = g.top - _.height, r.y && (p -= r.y)) : r.y && (p += r.y), r.x && (y += r.x), n || (p += window.scrollY, y += window.scrollX), Object.assign(i.style, {
            minWidth: `${g.width}px`,
            [x]: `${p}px`,
            [B]: `${y}px`
        })
    }, []), e(K, null, e("div", {
        className: w("dropdown3", u),
        ref: a,
        style: {
            position: n ? "fixed" : "absolute"
        }
    }, c))
}
W("reader2-menu reader2-font-base");

function Qe({
    onHover: t
} = {}) {
    const [o, n] = X(!1), r = S(), c = S(), u = S(), a = i => {
        i.pointerType === "mouse" && (clearTimeout(u.current), n(!0), t && t())
    }, m = i => {
        i.pointerType === "mouse" && (u.current = setTimeout(() => {
            n(!1)
        }, 200))
    };
    return z(() => {
        const i = r.current;
        if (i) return i.addEventListener("pointerenter", a), i.addEventListener("pointerleave", m), () => {
            i.removeEventListener("pointerenter", a), i.removeEventListener("pointerleave", m)
        }
    }, []), z(() => {
        const i = c.current,
            g = r.current;
        if (o && g) {
            const _ = () => {
                n(!1)
            };
            return window.addEventListener("scroll", _, {
                capture: !0,
                passive: !0
            }), i && (i.addEventListener("pointerenter", a), i.addEventListener("pointerleave", m)), () => {
                window.removeEventListener("scroll", _, {
                    capture: !0
                }), i && (i.removeEventListener("pointerenter", a), i.removeEventListener("pointerleave", m))
            }
        }
    }, [o]), {
        ref: r,
        tooltipRef: c,
        isHovering: o
    }
}

function Ze({
    tetherRef: t,
    children: o
}) {
    return e(Ve, {
        tetherRef: t,
        fixTo: {
            anchorX: "center",
            tetherX: "center",
            anchorY: "top",
            tetherY: "bottom"
        },
        offset: {
            y: 12
        }
    }, e("div", {
        className: "reader2-tooltip reader2-font-base reader2-text-button"
    }, o, e("div", {
        className: "reader2-tooltip-arrow"
    }, e("svg", {
        viewBox: "0 0 10 10",
        preserveAspectRatio: "none"
    }, e("path", {
        d: "M 0,0 L 10,0 L 6,9 Q 5,11 4,9 Z"
    })))))
}
const Je = "_unreadDot_d91rz_1",
    et = {
        unreadDot: Je
    };

function Lt(t, o = e(tt, null)) {
    const [n, r] = X(t);
    return [n && o, () => {
        r(!1)
    }]
}

function tt() {
    return e(ot, null)
}

function ot({
    className: t
}) {
    const {
        isHovering: o,
        ref: n
    } = Qe();
    return e(E, null, e(nt, {
        className: w(t, "reader2-unread-dot"),
        ref: n
    }), o && e(Ze, {
        tetherRef: n
    }, "New since your last visit"))
}
const nt = W(et.unreadDot),
    rt = "_badge_du5gt_1",
    at = "_dotContainer_du5gt_12",
    it = "_dot_du5gt_12",
    O = {
        badge: rt,
        dotContainer: at,
        dot: it
    };

function st({
    className: t,
    count: o
}) {
    return e(U, {
        alignItems: "center",
        justifyContent: "center",
        radius: "md",
        className: w(O.badge, !o && O.dot, t)
    }, e(s.Digit, {
        color: "white"
    }, o ? o < 100 ? o : "99+" : "0"))
}
const lt = "_avatarButton_1ennu_1",
    ct = "_dropdownIcon_1ennu_13",
    G = {
        avatarButton: lt,
        dropdownIcon: ct
    },
    d = Se.userMenu,
    dt = `https://support.substack.com/hc/en-us/?utm_source=${d}`;

function Pt(r) {
    var c = r,
        {
            user: t,
            pub: o
        } = c,
        n = T(c, ["user", "pub"]);
    const {
        iString: u
    } = Y(), a = de(qe), m = q();
    return e(E, null, t ? e(mt, M(v({}, n), {
        user: t,
        pub: o
    })) : e(ee, {
        href: ue({
            for_pub: o == null ? void 0 : o.subdomain
        }),
        native: "true",
        priority: "tertiary",
        size: m ? "sm" : "md",
        className: w({
            "force-desktop": a
        })
    }, u("Sign in")))
}

function ut() {
    return e(U, {
        bg: "secondary",
        radius: "full",
        padding: 2,
        position: "absolute",
        className: G.dropdownIcon,
        sizing: "border-box"
    }, e(Oe, {
        size: 12,
        strokeWidth: 3
    }))
}

function mt(n) {
    var r = n,
        {
            user: t
        } = r,
        o = T(r, ["user"]);
    const {
        element: c,
        toggle: u
    } = gt(M(v({}, o), {
        user: t
    })), a = q();
    return e(E, null, a || !t.photo_url ? e(E, null, e(te, {
        priority: "tertiary",
        size: "sm",
        onClick: u
    }, e(Ae, {
        size: 20
    })), c) : e(U, null, e(oe, {
        resetCss: !0,
        onClick: u,
        position: "relative",
        className: G.avatarButton
    }, e($, {
        user: t,
        size: a ? 32 : 40
    }), e(ut, null)), c))
}

function gt({
    user: t,
    pub: o,
    enableCustomerServiceMode: n,
    disableCustomerServiceMode: r,
    freeSignup: c,
    fixedTooltip: u
}) {
    var L;
    const {
        iString: a
    } = Y(), {
        activityUnreadCount: m
    } = Te(), [i, g] = ze(), _ = me(), f = He(), {
        getExposedVariant: p
    } = Me();
    let x = "",
        y = "";
    t && (x = t != null && t.profile_set_up_at && t.name ? t.name : t.email, y = t != null && t.profile_set_up_at ? t.name ? t.email : null : a("Set up your profile"));
    const B = ({
            active: I
        }) => {
            R(I ? h.USER_MENU_OPENED : h.USER_MENU_DISMISSED)
        },
        D = t ? Ge(t, {
            utm_source: d
        }) : null,
        j = o && (c || t && (t.is_subscribed || t.is_free_subscribed)),
        V = je(t, {
            utm_source: d
        });
    return {
        element: e(K, null, e("div", {
            className: "user-indicator-dropdown-menu"
        }, e(Le, {
            className: w({
                "fixed-tooltip": u
            }),
            ref: i,
            useDrawerOnMobile: !0,
            noTail: !0,
            noPlace: !0,
            preventScrollBehindDrawer: !0,
            backdropDismiss: !0,
            onToggle: B
        }, e("div", {
            className: "menu-scroll-container"
        }, e("a", {
            href: V,
            className: "profile-header",
            onClick: () => R(h.USER_MENU_PROFILE_CLICKED)
        }, e(U, {
            gap: 12,
            alignItems: "center",
            justifyContent: "center"
        }, e($, {
            size: 48,
            user: t
        }), e(ne, {
            flex: "grow"
        }, e(s.B3, {
            weight: "semibold"
        }, x), y && e(s.B4, {
            color: "secondary"
        }, y)))), e(k, {
            padding: 8
        }), t && e(E, null, e(l, {
            url: ge({
                urlParams: {
                    utm_source: d
                }
            }),
            analyticsEvent: h.USER_MENU_FEED_CLICKED
        }, e(b, {
            Icon: Xe
        }), e(s.B4, {
            weight: "semibold",
            flex: "grow"
        }, a("Home"))), e(l, {
            url: fe({
                utm_source: d
            }),
            analyticsEvent: h.USER_MENU_READER_CLICKED
        }, e(b, {
            Icon: $e
        }), e(s.B4, {
            weight: "semibold",
            flex: "grow"
        }, a("Inbox"))), e(l, {
            url: pe(),
            analyticsEvent: h.USER_MENU_CHAT_CLICKED
        }, e(b, {
            Icon: Re
        }), e(s.B4, {
            weight: "semibold",
            flex: "grow"
        }, a("Chat"))), e(l, {
            url: he({
                utm_source: d
            }),
            analyticsEvent: h.USER_MENU_ACTIVITY_CLICKED
        }, e(b, {
            Icon: Ye
        }), e(s.B4, {
            weight: "semibold",
            flex: "grow"
        }, a("Activity")), m > 0 ? e(st, {
            className: "indicator-badge",
            count: m
        }) : null), e(l, {
            url: ye(),
            analyticsEvent: h.USER_MENU_DISCOVER_CLICKED
        }, e(b, {
            Icon: Fe
        }), e(s.B4, {
            weight: "semibold",
            flex: "grow"
        }, a("Explore"))), e(l, {
            url: D.url
        }, e(b, {
            Icon: D.type === "no-dashboard" ? Ke : We
        }), e(s.B4, {
            weight: "semibold",
            flex: "grow"
        }, D.type === "no-dashboard" ? a("Start writing") : a("Writer dashboard")))), e(k, {
            padding: 8
        }), j && e(l, {
            className: "secondary-item",
            url: _e("/account", {
                utm_source: d
            }),
            analyticsEvent: h.USER_MENU_MANAGE_SUBSCRIPTION_CLICKED
        }, e(s.B4, {
            weight: "semibold",
            color: "secondary",
            flex: "grow"
        }, a("Manage subscription"))), _.getConfigFor("credit_tokens_enabled") && (((L = f.userSettings) == null ? void 0 : L.creditTokensTreatmentExposed) || t.has_credit_token || p("credit_tokens_post_subscribe_modal") === "treatment") && e(l, {
            className: "secondary-item",
            url: be({
                utm_source: d
            }),
            analyticsEvent: h.USER_MENU_INVITE_FRIENDS_CLICKED
        }, e(s.B4, {
            weight: "semibold",
            color: "secondary",
            flex: "grow"
        }, a("Invite friends"))), e(l, {
            className: "secondary-item",
            url: Ee({
                utm_source: d
            }),
            analyticsEvent: h.USER_MENU_ACCOUNT_SETTINGS_CLICKED
        }, e(s.B4, {
            weight: "semibold",
            color: "secondary",
            flex: "grow"
        }, a("Settings"))), e(l, {
            className: "secondary-item",
            url: dt
        }, e(s.B4, {
            weight: "semibold",
            color: "secondary",
            flex: "grow"
        }, a("Support"))), e(l, {
            className: "secondary-item",
            url: we({
                utm_source: d,
                for_pub: o == null ? void 0 : o.subdomain
            })
        }, e(s.B4, {
            weight: "semibold",
            color: "secondary",
            flex: "grow"
        }, a("Sign out"))), n && e(l, {
            className: "secondary-item",
            onClick: () => {
                var I;
                (I = i.current) == null || I.close(), n()
            }
        }, e(s.B4, {
            weight: "semibold",
            color: "secondary",
            flex: "grow"
        }, "Enter support mode")), r && e(l, {
            className: "secondary-item",
            onClick: r
        }, e(s.B4, {
            weight: "semibold",
            color: "secondary",
            flex: "grow"
        }, "Exit support mode")), o && (t == null ? void 0 : t.is_global_admin) && e(l, {
            className: "secondary-item",
            url: `${xe({subdomain:"admin"})}/publications/${o.id}`
        }, e(s.B4, {
            weight: "semibold",
            color: "secondary",
            flex: "grow"
        }, "Open in underground")), !(t != null && t.reader_installed_at) && e(E, null, e(k, {
            padding: 8
        }), e(l, {
            className: "special-item",
            url: ve({
                utm_campaign: Be.appMarketing,
                utm_content: De.userMenuLink
            })
        }, e(s.B4, {
            weight: "semibold",
            flex: "grow",
            color: "substack"
        }, a("Get the app")), e(Pe, {
            className: "item-badge branded",
            color: Ue
        }))), e(k, {
            padding: 8
        }), e(U, {
            gap: 12,
            padding: 8,
            className: "footer"
        }, e("a", {
            href: Ce({
                utm_source: d
            })
        }, e(s.B5, {
            color: "secondary"
        }, a("About"))), e("a", {
            href: Ie({
                pub: o,
                utm_source: d
            })
        }, e(s.B5, {
            color: "secondary"
        }, a("Privacy"))), e("a", {
            href: Ne({
                pub: o,
                utm_source: d
            })
        }, e(s.B5, {
            color: "secondary"
        }, a("Terms"))), e("a", {
            href: ke({
                utm_source: d
            })
        }, e(s.B5, {
            color: "secondary"
        }, a("Collection notice")))))))),
        toggle: g
    }
}

function l({
    className: t,
    url: o,
    analyticsEvent: n,
    onClick: r,
    children: c
}) {
    return e("a", {
        className: `indicator-menu-item ${t}`,
        onClick: u => {
            n && R(n), r && r(u)
        },
        href: o,
        native: !0
    }, c)
}
const ft = 20;

function b({
    Icon: t,
    className: o
}) {
    return e(t, {
        className: w(o, "indicator-item-icon"),
        height: ft,
        stroke: "var(--color-primary)",
        strokeWidth: 2
    })
}
export {
    Ye as B, qe as F, $e as I, st as N, Ze as T, Pt as U, mt as a, je as b, O as c, Ge as d, Lt as e, ot as f, Rt as g, nt as h, Qe as u
};