var Ue = Object.defineProperty,
    We = Object.defineProperties;
var ze = Object.getOwnPropertyDescriptors;
var O = Object.getOwnPropertySymbols;
var me = Object.prototype.hasOwnProperty,
    de = Object.prototype.propertyIsEnumerable;
var pe = (e, t, o) => t in e ? Ue(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[t] = o,
    S = (e, t) => {
        for (var o in t || (t = {})) me.call(t, o) && pe(e, o, t[o]);
        if (O)
            for (var o of O(t)) de.call(t, o) && pe(e, o, t[o]);
        return e
    },
    Y = (e, t) => We(e, ze(t));
var L = (e, t) => {
    var o = {};
    for (var r in e) me.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
    if (e != null && O)
        for (var r of O(e)) t.indexOf(r) < 0 && de.call(e, r) && (o[r] = e[r]);
    return o
};
var f = (e, t, o) => new Promise((r, a) => {
    var s = l => {
            try {
                c(o.next(l))
            } catch (u) {
                a(u)
            }
        },
        i = l => {
            try {
                c(o.throw(l))
            } catch (u) {
                a(u)
            }
        },
        c = l => l.done ? r(l.value) : Promise.resolve(l.value).then(s, i);
    c((o = o.apply(e, t)).next())
});
import {
    x as Oe,
    y as n,
    h as ke,
    b3 as V,
    o as we,
    aD as Ye,
    i as N,
    q as A,
    p as Ve,
    t as Ee,
    E as Ze,
    b2 as qe,
    bJ as Ge,
    gL as fe,
    gM as Qe
} from "./tracking-376cff7a.js";
import {
    u as Xe,
    T as k,
    R as Je,
    c as B,
    b as y,
    S as Se,
    F as E,
    a as T,
    p as Ke,
    B as ge,
    h as et,
    O as tt,
    U as nt
} from "./FlexBox-1a755411.js";
import {
    L as ot
} from "./react-6ae938e8.js";
import {
    b as rt,
    ax as P,
    j as at,
    ay as st
} from "./ProfileHoverCard-c8bfb61a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import "./Divider-0a4efe7e.js";
import {
    u as Te,
    e as it,
    _ as ct,
    a as lt,
    R as ut
} from "./user-e16f1619.js";
import {
    d as pt
} from "./debounce-f31b8252.js";
import {
    S as mt
} from "./search-166a516b.js";
import {
    S as ve
} from "./Progress-629d3819.js";
import {
    H as dt,
    u as ft,
    T as gt
} from "./HoverCard-cbdee1d2.js";
import {
    P as _t
} from "./podcast_apps-4f303ac3.js";
import {
    c as W
} from "./x-fc38e969.js";
import {
    I as xe
} from "./CommentBody-36a2d638.js";
import {
    M as ht
} from "./mention-8372bb04.js";
import {
    a3 as Ie,
    a as Ct,
    T as yt
} from "./Attachments-84a6967e.js";
import {
    u as bt
} from "./link_copy_toast-1ffe3674.js";
import {
    a as M,
    M as kt,
    c as wt,
    b as St
} from "./Menu-5342012d.js";
import {
    f as Tt
} from "./_defineProperty-105d261c.js";
import {
    a as vt
} from "./_baseEach-63ad03e0.js";
import {
    C as _e,
    L as oe
} from "./homepage_hooks-47e7a4e7.js";
import {
    L as xt
} from "./link-90872791.js";
import {
    M as It
} from "./Portal-f12cb990.js";
import {
    U as Nt
} from "./user-dd90bf1b.js";
import {
    C as Bt
} from "./chevron-right-925bdc12.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "56fd886c-4d0e-4f70-a4a7-17b784d19c36", e._sentryDebugIdIdentifier = "sentry-dbid-56fd886c-4d0e-4f70-a4a7-17b784d19c36")
    } catch (o) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = W("CornerDownRight", [
    ["polyline", {
        points: "15 10 20 15 15 20",
        key: "1q7qjw"
    }],
    ["path", {
        d: "M4 4v7a4 4 0 0 0 4 4h12",
        key: "z08zvw"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = W("MessageCircleOff", [
    ["path", {
        d: "M20.5 14.9A9 9 0 0 0 9.1 3.5",
        key: "1iebmn"
    }],
    ["path", {
        d: "m2 2 20 20",
        key: "1ooewy"
    }],
    ["path", {
        d: "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",
        key: "1ov8ce"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = W("MessageCirclePlus", [
    ["path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
        key: "vv11sd"
    }],
    ["path", {
        d: "M8 12h8",
        key: "1wcyev"
    }],
    ["path", {
        d: "M12 8v8",
        key: "napkw2"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = W("Reply", [
    ["polyline", {
        points: "9 17 4 12 9 7",
        key: "hvgpf2"
    }],
    ["path", {
        d: "M20 18v-2a4 4 0 0 0-4-4H4",
        key: "5vmcpk"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = W("UserX", [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }],
        ["line", {
            x1: "17",
            x2: "22",
            y1: "8",
            y2: "13",
            key: "3nzzx3"
        }],
        ["line", {
            x1: "22",
            x2: "17",
            y1: "8",
            y2: "13",
            key: "1swrse"
        }]
    ]),
    $t = new Intl.DateTimeFormat(void 0, {
        timeStyle: "short"
    }),
    Ft = new Intl.DateTimeFormat(void 0, {
        weekday: "long"
    }),
    Pt = new Intl.DateTimeFormat(void 0, {
        month: "short",
        day: "numeric"
    }),
    Dt = new Intl.DateTimeFormat(void 0, {
        dateStyle: "long"
    });

function jt({
    timestamp: e,
    conjunction: t = !1
}) {
    const {
        iString: o,
        language: r
    } = Xe(), a = new Date(e), s = Oe(), i = r.startsWith("en"), c = s.isSame(a, "day") ? o("Today") : s.subtract(1, "day").isSame(a, "day") ? o("Yesterday") : s.isSame(a, "week") ? Ft.format(a) : s.isSame(a, "year") ? Pt.format(a) : Dt.format(a);
    return n(Je, {
        alignItems: "center",
        justifyContent: "center"
    }, n(k.B5, null, c, t && i ? " at " : " ", $t.format(a)))
}
const Ht = "_searchContainer_16y3z_1",
    Ut = "_medium_16y3z_6",
    Wt = "_small_16y3z_11",
    zt = "_searchInput_16y3z_21",
    ee = {
        searchContainer: Ht,
        medium: Ut,
        small: Wt,
        searchInput: zt
    };

function Ot({
    items: e,
    getKeys: t,
    sort: o = !0,
    sortFunc: r,
    deps: a
}) {
    const s = (_, d) => {
            const p = t(_),
                h = t(d);
            for (let g = 0; g < Math.min(p.length, h.length); g++) {
                const b = p[g].localeCompare(h[g]);
                if (b !== 0) return b
            }
            return p.length - h.length
        },
        [i, c] = ke(""),
        l = V(() => pt(c, 100), [c]),
        u = i.trim(),
        m = V(() => {
            if (!u) return e;
            let _ = e.filter(d => t(d).some(h => h.toLowerCase().includes(u.toLowerCase())));
            if (o || r) {
                const d = r || s;
                _ = _.sort(d)
            }
            return _
        }, a ? [u, ...a] : [u, e]);
    return {
        setQuery: l,
        filteredItems: m,
        hasFiltered: u !== "",
        query: u
    }
}

function Yt(s) {
    var i = s,
        {
            onChange: e,
            placeholder: t = "Search...",
            size: o = "medium",
            value: r = void 0
        } = i,
        a = L(i, ["onChange", "placeholder", "size", "value"]);
    const c = u => {
            e(u.currentTarget.value.trim())
        },
        l = we(null);
    return n(y, S({
        className: B(ee.searchContainer, ee[o]),
        bg: "secondary",
        paddingX: o === "small" ? 12 : 16,
        gap: 12,
        alignItems: "center",
        sizing: "border-box",
        onClick: () => {
            var u;
            return (u = l.current) == null ? void 0 : u.focus()
        }
    }, a), n(mt, {
        size: o === "small" ? 16 : 20,
        color: "var(--color-fg-secondary)"
    }), n("input", {
        type: "search",
        className: ee.searchInput,
        ref: l,
        placeholder: t,
        onInput: c,
        value: r
    }))
}
const Vt = e => n(Se, Y(S({}, e), {
        name: "EmojiPickerIcon",
        svgParams: {
            height: 15,
            width: 14,
            viewBox: "0 0 15 14",
            fill: "none",
            stroke: "none"
        }
    }), n("path", {
        d: "M12.7474 7.25708C12.3309 7.37462 11.8916 7.4375 11.4375 7.4375C8.77963 7.4375 6.625 5.28287 6.625 2.625C6.625 2.17094 6.68788 1.73156 6.80542 1.31511C6.74549 1.31337 6.68535 1.3125 6.625 1.3125C3.24226 1.3125 0.5 4.05476 0.5 7.4375C0.5 10.8202 3.24226 13.5625 6.625 13.5625C10.0077 13.5625 12.75 10.8202 12.75 7.4375C12.75 7.37715 12.7491 7.31701 12.7474 7.25708ZM5.75 5.25C5.75 5.97487 5.16237 6.5625 4.4375 6.5625C3.71263 6.5625 3.125 5.97487 3.125 5.25C3.125 4.52513 3.71263 3.9375 4.4375 3.9375C5.16237 3.9375 5.75 4.52513 5.75 5.25ZM10.125 8.3125C10.125 10.2455 8.558 11.8125 6.625 11.8125C4.692 11.8125 3.125 10.2455 3.125 8.3125H10.125Z",
        fill: "#808080",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd"
    }), n("path", {
        d: "M12.0938 0H10.7812V1.96875L8.8125 1.96875V3.28125H10.7812V5.25H12.0938V3.28125H14.0625V1.96875L12.0938 1.96875V0Z",
        fill: "#808080",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd"
    })),
    Et = "_reactionsHoverZone_147on_1",
    Zt = "_reactionsContainer_147on_1",
    qt = "_outgoing_147on_16",
    Gt = "_reaction_147on_1",
    Qt = "_blue_147on_36",
    Xt = "_nameCard_147on_40",
    Jt = "_reactionToPick_147on_44",
    Kt = "_pickIcon_147on_57",
    en = "_emojiPicker_147on_70",
    tn = "_emojiPickerLayer_147on_75",
    nn = "_reactionSection_147on_83",
    on = "_show_147on_91",
    w = {
        reactionsHoverZone: Et,
        reactionsContainer: Zt,
        outgoing: qt,
        reaction: Gt,
        blue: Qt,
        nameCard: Xt,
        reactionToPick: Jt,
        pickIcon: Kt,
        emojiPicker: en,
        emojiPickerLayer: tn,
        reactionSection: nn,
        show: on
    },
    rn = 3,
    he = 6;

function an({
    context: e,
    reactions: t,
    currentReaction: o,
    onReactionClick: r,
    isReadOnly: a,
    showCounts: s = !0,
    maxReactions: i,
    direction: c
}) {
    const l = t && Object.keys(t).some(p => t[p] > 0),
        u = c === "outgoing",
        {
            result: m,
            isLoading: _
        } = Te({
            pathname: "/api/v1/threads/reactions",
            method: "GET",
            cacheTtl: 1e3 * 60 * 10,
            auto: !0
        }),
        d = V(() => !t || !(m != null && m.reactionTypes) ? [] : Object.entries(t).sort(([h, g], [b, v]) => g === v ? h.localeCompare(b) : v - g).filter(([h, g]) => g > 0 && m.reactionTypes[h]).slice(0, rn), [t, m]);
    return m != null && m.reactionTypes ? n(T, null, n(E, {
        onClick: re,
        className: B(w.reactionsContainer, {
            [w.show]: l,
            [w.outgoing]: u
        })
    }, d.map(([p, h]) => {
        const g = m.reactionTypes[p],
            b = p === o || g === o,
            v = n(E, {
                key: p,
                className: B(w.reaction, {
                    [w.blue]: s && b
                }),
                shadow: "sm",
                bg: "primary",
                gap: 4,
                alignItems: "center",
                justifyContent: "center",
                paddingX: 6,
                onClick: () => g && r && r(p, g)
            }, n(dn, {
                reaction: g
            }), s && n(mn, {
                count: h,
                textColor: b ? "white" : "primary"
            }));
        return e.type === "direct-message" ? v : n(dt, {
            key: p,
            layerClassName: w.nameCard,
            content: n(ln, {
                context: e,
                reaction: p
            }),
            layerOptions: {
                placement: "bottom-center"
            }
        }, v)
    }), !a && (!i || !o) && n(_t, {
        content: ({
            closePopover: p
        }) => n(cn, {
            emojis: m,
            isLoading: _,
            currentReaction: o,
            onPick: (h, g) => {
                r && r(h, g), p()
            }
        }),
        preferPlacement: "bottom-center",
        hideOnScroll: !0,
        layerClassName: w.emojiPickerLayer
    }, n(sn, null)))) : null
}

function sn() {
    return n(y, {
        className: w.pickIcon,
        shadow: "sm",
        bg: "primary",
        paddingX: 4,
        alignItems: "center"
    }, n(Vt, null))
}

function cn({
    emojis: e,
    isLoading: t,
    currentReaction: o,
    onPick: r
}) {
    var _;
    const a = V(() => !(e != null && e.reactionTypes) || t ? [] : Object.keys(e.reactionTypes), [e == null ? void 0 : e.reactionTypes, t]),
        {
            result: s,
            isLoading: i
        } = it(() => ct(() =>
            import ("./chat_reaction_keywords-531f0f79.js"), []), [], {
            auto: !0
        }),
        c = Ye(d => [d, ...(s == null ? void 0 : s[d]) || []], [s]),
        {
            filteredItems: l,
            setQuery: u,
            hasFiltered: m
        } = Ot({
            items: a,
            getKeys: c,
            deps: [a, c]
        });
    return t || i ? n(ve, null) : n(T, {
        gap: 12,
        className: w.emojiPicker,
        onClick: re,
        overflowY: "auto"
    }, n(Yt, {
        onChange: u,
        placeholder: "Search emoji...",
        size: "small"
    }), m && (l && l.length > 0 ? n(te, {
        reactions: l,
        currentReaction: o,
        onPick: r,
        emojiMap: e.reactionTypes,
        title: null
    }) : n(k, {
        size: 12,
        lineHeight: 20,
        color: "secondary",
        weight: "semibold",
        font: "text",
        alignSelf: "center"
    }, "No emoji match your search")), !m && n(N, null, n(te, {
        reactions: e.suggestedReactionTypes,
        currentReaction: o,
        onPick: r,
        emojiMap: e.reactionTypes,
        title: "Suggested Reactions"
    }), (_ = e.categories) == null ? void 0 : _.map(d => n(te, {
        reactions: d.reactionTypes,
        currentReaction: o,
        onPick: r,
        emojiMap: e.reactionTypes,
        title: d.title
    }))))
}

function ln({
    reaction: e,
    context: t
}) {
    var u;
    const o = t.type === "posts" ? `/api/v1/community/posts/${t.id}/reactions` : `/api/v1/community/comments/${t.id}/reactions`,
        {
            result: r,
            isLoading: a
        } = Te({
            pathname: o,
            method: "GET",
            auto: !0
        });
    if (a) return n(ve, null);
    const i = ((u = r == null ? void 0 : r.reactions.filter(m => m.reaction === e)) != null ? u : []).map(m => m.user.name),
        c = i.slice(0, he),
        l = Math.max(0, i.length - he);
    return n(T, {
        gap: 2,
        className: w.emojiPicker,
        onClick: re,
        overflowY: "auto"
    }, c.map(m => n(Ce, {
        text: m
    })), l > 0 && n(Ce, {
        text: `+ ${l} ${l===1?"other":"others"}`
    }))
}

function un({
    title: e
}) {
    return n(k, {
        size: 12,
        lineHeight: 20,
        color: "secondary",
        weight: "semibold",
        font: "text"
    }, e)
}

function pn({
    reactions: e,
    currentReaction: t,
    onPick: o,
    emojiMap: r
}) {
    return n(E, {
        className: w.reactionSection,
        gap: 8
    }, e == null ? void 0 : e.map(a => n(y, {
        key: a,
        onClick: () => o(a, r[a]),
        className: B(w.reactionToPick, {
            [w.blue]: a === t
        }),
        bg: "primary",
        alignItems: "center"
    }, n(fn, {
        reaction: r[a]
    }))))
}

function te({
    reactions: e,
    currentReaction: t,
    onPick: o,
    emojiMap: r,
    title: a
}) {
    return n(T, {
        gap: 12
    }, a && n(un, {
        title: a
    }), n(pn, {
        reactions: e,
        currentReaction: t,
        onPick: o,
        emojiMap: r
    }))
}

function mn({
    count: e,
    textColor: t
}) {
    return n(k.Meta, {
        fontWeight: "bold",
        color: t
    }, e)
}

function Ce({
    text: e
}) {
    return n(k, {
        size: 12,
        color: "primary",
        weight: "medium",
        font: "text"
    }, e)
}

function dn({
    reaction: e
}) {
    return n(k.B4, {
        font: "emoji"
    }, e)
}

function fn({
    reaction: e
}) {
    return n(k, {
        size: 20,
        lineHeight: 20,
        color: "primary",
        weight: "medium",
        font: "emoji"
    }, e)
}
const re = e => {
    e.stopPropagation(), e.preventDefault()
};

function H(r) {
    var a = r,
        {
            children: e,
            setReactions: t = !0
        } = a,
        o = L(a, ["children", "setReactions"]);
    return t ? n(gn, {
        position: "relative"
    }, e, n(an, S({}, o))) : n(N, null, e)
}
const gn = Ke({
        display: "flex",
        className: w.reactionsHoverZone
    }),
    _n = e => n(Se, Y(S({}, e), {
        name: "LucideCornerDownRight",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#000000",
            strokeWidth: 0
        }
    }), n(Mt, {
        height: 24,
        stroke: e.stroke,
        fill: e.fill,
        strokeWidth: e.strokeWidth
    }));

function hn(e, {
    auto: t,
    onReceive: o
}) {
    return rt("/api/v1/link-metadata", {
        query: {
            url: e != null ? e : ""
        },
        auto: !!(e && t),
        deps: [e],
        shouldRevalidate: !1,
        massage: r => f(this, null, function*() {
            return o == null || o(r), r
        })
    }, {
        shouldRetryOnError: r => r.response.status !== 404
    })
}
const Cn = "_bubbleStack_1uinf_1",
    yn = "_bubble_1uinf_1",
    bn = "_linkBubble_1uinf_9",
    kn = "_paywallBubble_1uinf_15",
    wn = "_imageGroup_1uinf_16",
    Sn = "_hasFooter_1uinf_22",
    Tn = "_replyContainer_1uinf_32",
    vn = "_bubbleText_1uinf_65",
    xn = "_authorName_1uinf_72",
    In = "_facepileAvatar_1uinf_76",
    Nn = "_facepile_1uinf_76",
    Bn = "_readMore_1uinf_85",
    Mn = "_outgoing_1uinf_96",
    An = "_pixels_1uinf_110",
    Rn = "_linkImg_1uinf_122",
    Ln = "_linkUrl_1uinf_129",
    $n = "_linkTitle_1uinf_133",
    Fn = "_ctaButton_1uinf_138",
    Pn = "_reactionsWrapper_1uinf_142",
    Dn = "_actions_1uinf_146",
    jn = "_avatarContainer_1uinf_153",
    Hn = "_targetedAnimation_1uinf_167",
    Un = "_fade_1uinf_1",
    Wn = "_quoteBox_1uinf_180",
    C = {
        bubbleStack: Cn,
        bubble: yn,
        linkBubble: bn,
        paywallBubble: kn,
        imageGroup: wn,
        hasFooter: Sn,
        replyContainer: Tn,
        bubbleText: vn,
        authorName: xn,
        facepileAvatar: In,
        facepile: Nn,
        readMore: Bn,
        outgoing: Mn,
        pixels: An,
        linkImg: Rn,
        linkUrl: Ln,
        linkTitle: $n,
        ctaButton: Fn,
        reactionsWrapper: Pn,
        actions: Dn,
        avatarContainer: jn,
        targetedAnimation: Hn,
        fade: Un,
        quoteBox: Wn
    },
    zn = "ffe5d072-ae52-11ed-afa1-0242ac120002";

function er({
    communityPost: e,
    author: t,
    extras: o,
    withAttribution: r,
    flex: a,
    hideReply: s,
    isReadOnly: i,
    onReply: c,
    onDelete: l,
    pub: u
}) {
    var b;
    const m = we(null),
        _ = Ie(),
        d = {
            type: "posts",
            id: e.id
        },
        p = P(),
        h = !(e.type === "media" && e.media_assets),
        g = Fe => f(this, [Fe], function*({
            details: v,
            reportCategory: x,
            reportedToSubstack: D
        }) {
            const {
                id: Q
            } = e;
            p(Gn({
                id: Q,
                details: v,
                reportCategory: x,
                reportedToSubstack: D
            }))
        });
    return n(Z, {
        user: t,
        flex: a,
        containerRef: m,
        extras: o
    }, r && n(Le, {
        text: `From ${t.name}’s subscriber chat`
    }), n(Be, {
        actionMenuProps: {
            communityEntity: e,
            publicationId: e.publication_id,
            replyAction: c && n(M, {
                icon: n(Ne, null),
                disabled: e.is_locked,
                onClick: c
            }, "Reply"),
            onDelete: l,
            onReport: () => _({
                onSubmit: g,
                pub: u != null ? u : void 0,
                canReportToAdmins: !!(u && u.moderation_enabled && e.user_pub_role !== "admin")
            }),
            isReadOnly: i,
            isFlagged: e.reported_by_user
        },
        flex: a
    }, n(q, {
        hasFooter: !s
    }, e.type === "media" && e.media_assets && n(H, {
        context: d,
        reactions: e.reactions,
        currentReaction: e.reaction,
        onReactionClick: U(e.id, "posts", p, e.reaction),
        isReadOnly: i
    }, n(xe, {
        assets: e.media_assets.map(v => {
            var x;
            return (x = v.url) != null ? x : ""
        }),
        className: C.imageGroup,
        readOnly: i
    })), e.link_url && n(H, {
        context: d,
        reactions: e.reactions,
        currentReaction: e.reaction,
        onReactionClick: U(e.id, "posts", p, e.reaction),
        setReactions: !!(h && e.link_metadata),
        isReadOnly: i
    }, n(Io, {
        linkUrl: e.link_url,
        linkMetadata: (b = e.link_metadata) != null ? b : void 0,
        postId: e.id
    })), (e.body || h && !e.link_metadata) && n(H, {
        context: d,
        reactions: e.reactions,
        currentReaction: e.reaction,
        onReactionClick: U(e.id, "posts", p, e.reaction),
        setReactions: h && !e.link_metadata,
        isReadOnly: i
    }, n(Ae, {
        authorName: t.name,
        communityEntity: e
    })))), !s && n(Me, null, n(G, {
        commenters: e.recent_commenters,
        count: e.comment_count,
        audience: e.audience
    })))
}

function Be({
    children: e,
    actionMenuProps: t,
    flex: o = "grow"
}) {
    return n(E, {
        alignItems: "start",
        gap: 12,
        flex: o
    }, n(T, null, e), n(_o, S({}, t)))
}
const U = (e, t, o, r) => a => f(void 0, null, function*() {
        o(r === a ? Yn(a, e, t) : On(a, e, t, r))
    }),
    On = (e, t, o, r) => (a, s) => f(void 0, null, function*() {
        a({
            type: `${o}-new_reaction`,
            payload: {
                id: t,
                reaction: e
            }
        }), (yield io(e, t, o)) instanceof Error && a(r ? {
            type: `${o}-new_reaction`,
            payload: {
                id: t,
                reaction: r
            }
        } : {
            type: `${o}-remove_reaction`,
            payload: {
                id: t,
                reaction: e
            }
        })
    }),
    Yn = (e, t, o) => (r, a) => f(void 0, null, function*() {
        r({
            type: `${o}-remove_reaction`,
            payload: {
                id: t,
                reaction: e
            }
        }), (yield co(e, t, o)) instanceof Error && r({
            type: `${o}-new_reaction`,
            payload: {
                id: t,
                reaction: e
            }
        })
    }),
    Vn = (e, t) => (o, r) => f(void 0, null, function*() {
        o({
            type: "posts-delete_post",
            payload: {
                id: e,
                publication_id: t
            }
        });
        const a = yield so(e);
        a instanceof Error && console.warn("error deleting thread", a)
    }),
    En = (e, t, o) => (r, a) => f(void 0, null, function*() {
        r({
            type: "comments-delete_comment",
            payload: {
                id: e,
                postId: t
            }
        });
        const s = yield oo(e);
        if (s instanceof Error && console.warn("error deleting comment", s), o) {
            const c = yield ro(o);
            c instanceof Error || r({
                type: "comments-update_comment",
                payload: {
                    id: o,
                    comment: c.comment
                }
            })
        }
        const i = yield ao(t);
        i instanceof Error || r({
            type: "posts-update_post",
            payload: {
                id: t,
                post: i.communityPost
            }
        })
    }),
    Zn = (e, t) => (o, r) => f(void 0, null, function*() {
        o({
            type: "posts-lock_replies",
            payload: {
                id: e,
                isLocked: t
            }
        });
        const a = yield Jn(e, t);
        a instanceof Error && (console.warn("error locking post", a), alert(`There was an error ${t?"locking":"unlocking"} replies to this post. Please try again later.`), o({
            type: "posts-lock_replies",
            payload: {
                id: e,
                isLocked: !t
            }
        }))
    }),
    qn = (e, t) => (o, r) => f(void 0, null, function*() {
        o({
            type: "comments-lock_replies",
            payload: {
                id: e,
                isLocked: t
            }
        });
        const a = yield Kn(e, t);
        a instanceof Error && (console.warn("error locking comment", a), alert(`There was an error ${t?"locking":"unlocking"} replies to this comment. Please try again later.`), o({
            type: "comments-lock_replies",
            payload: {
                id: e,
                isLocked: !t
            }
        }))
    }),
    Gn = ({
        id: e,
        details: t,
        reportCategory: o,
        reportedToSubstack: r
    }) => (a, s) => f(void 0, null, function*() {
        a({
            type: "posts-flag_post",
            payload: {
                id: e
            }
        });
        const i = yield to({
            id: e,
            details: t,
            reportCategory: o,
            reportedToSubstack: r
        });
        i instanceof Error && console.warn("error flagging post", i)
    }),
    Qn = ({
        id: e,
        details: t,
        reportCategory: o,
        reportedToSubstack: r
    }) => (a, s) => f(void 0, null, function*() {
        a({
            type: "comments-flag_comment",
            payload: {
                id: e
            }
        });
        const i = yield no({
            id: e,
            details: t,
            reportCategory: o,
            reportedToSubstack: r
        });
        i instanceof Error && console.warn("error flagging comment", i)
    }),
    Xn = (e, t) => (o, r) => f(void 0, null, function*() {
        o({
            type: "comments-ban_author",
            payload: {
                id: e,
                ban: t
            }
        });
        const a = yield eo(e, t);
        a instanceof Error && (console.warn("error toggling ban for comment author", a), alert(`There was an error ${t?"banning":"unbanning"} this user. Please try again later.`), o({
            type: "comments-ban_author",
            payload: {
                id: e,
                ban: !t
            }
        }))
    });

function Jn(e, t) {
    return f(this, null, function*() {
        try {
            return yield fetch(`/api/v1/community/posts/${e}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    is_locked: t
                })
            })
        } catch (o) {
            return o
        }
    })
}

function Kn(e, t) {
    return f(this, null, function*() {
        try {
            return yield fetch(`/api/v1/community/comments/${e}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    is_locked: t
                })
            })
        } catch (o) {
            return o
        }
    })
}

function eo(e, t) {
    return f(this, null, function*() {
        try {
            return yield fetch(`/api/v1/community/comments/${e}/publication_bans?ban=${t.toString()}`, {
                method: "POST"
            })
        } catch (o) {
            return o
        }
    })
}

function to(a) {
    return f(this, arguments, function*({
        id: e,
        details: t,
        reportCategory: o,
        reportedToSubstack: r
    }) {
        try {
            return yield A(`/api/v1/community/posts/${e}/reports`, {
                method: "POST",
                json: {
                    postId: e,
                    details: t,
                    reportCategory: o,
                    reportedToSubstack: r
                }
            })
        } catch (s) {
            return s
        }
    })
}

function no(a) {
    return f(this, arguments, function*({
        id: e,
        details: t,
        reportCategory: o,
        reportedToSubstack: r
    }) {
        try {
            return yield A(`/api/v1/community/comments/${e}/reports`, {
                method: "POST",
                json: {
                    commentId: e,
                    details: t,
                    reportCategory: o,
                    reportedToSubstack: r
                }
            })
        } catch (s) {
            return s
        }
    })
}

function oo(e) {
    return f(this, null, function*() {
        try {
            return yield A(`/api/v1/community/comments/${e}`, {
                method: "DELETE",
                json: {
                    commentId: e
                }
            })
        } catch (t) {
            return t
        }
    })
}

function ro(e) {
    return f(this, null, function*() {
        try {
            return yield A(`/api/v1/community/comments/${e}`, {
                method: "GET"
            })
        } catch (t) {
            return console.warn(t), t
        }
    })
}

function ao(e) {
    return f(this, null, function*() {
        try {
            return yield A(`/api/v1/community/posts/${e}`, {
                method: "GET"
            })
        } catch (t) {
            return console.warn(t), t
        }
    })
}

function so(e) {
    return f(this, null, function*() {
        try {
            return yield A(`/api/v1/community/posts/${e}`, {
                method: "DELETE",
                json: {
                    postId: e
                }
            })
        } catch (t) {
            return t
        }
    })
}

function io(e, t, o) {
    return f(this, null, function*() {
        try {
            return yield A(`/api/v1/community/${o}/${t}/reaction`, {
                method: "POST",
                json: {
                    reaction: e
                }
            })
        } catch (r) {
            return r
        }
    })
}

function co(e, t, o) {
    return f(this, null, function*() {
        try {
            return yield A(`/api/v1/community/${o}/${t}/reaction`, {
                method: "DELETE",
                query: {
                    reaction: e
                }
            })
        } catch (r) {
            return r
        }
    })
}

function tr({
    author: e,
    extras: t,
    showReply: o = !0,
    analyticsParams: r,
    commenters: a,
    count: s,
    audience: i
}) {
    return Ve(() => {
        r && Ee(Ze.THREAD_PAYWALL_SCREEN_VIEWED, r)
    }, []), n(Z, {
        user: e,
        extras: t
    }, n(q, null, n(vo, {
        audience: i
    }), o && n(G, {
        isLocked: !0,
        commenters: a,
        count: s
    })))
}

function nr({
    author: e,
    extras: t,
    showReply: o = !0,
    commenters: r,
    count: a
}) {
    return n(Z, {
        user: e,
        extras: t
    }, n(q, null, n(xo, null), o && n(G, {
        isLocked: !0,
        commenters: r,
        count: a
    })))
}

function ne(e) {
    return typeof e.message == "string"
}

function lo({
    text: e,
    rawText: t,
    specialText: o,
    mentionMap: r,
    direction: a = "incoming",
    limit: s = 600,
    linkify: i = !0
}) {
    const [c, l] = ke(!1);
    if (o) return n("em", null, o);
    if (!e) return n(N, null);
    let u = [{
        characters: e.length,
        message: e
    }];
    t && r && (u = po(t, r));
    const {
        alwaysShow: m,
        afterExpansion: _
    } = uo(u, s), d = _.length > 0;
    return n(N, null, m.map(p => i && ne(p) ? n(ye, null, p.message) : p.message), d && !c && n(N, null, n("span", null, " "), n(nt, {
        resetCss: !0,
        className: B(C.readMore, C[a]),
        onClick: p => {
            p.preventDefault(), l(!0)
        }
    }, "Read more")), d && c && n(N, null, _.map(p => i && ne(p) ? n(ye, null, p.message) : p.message)))
}

function ye({
    children: e
}) {
    return n(ot, {
        options: {
            attributes: {
                rel: "nofollow ugc",
                onClick: t => t.stopPropagation()
            }
        }
    }, e)
}

function uo(e, t) {
    let o = 0;
    const r = [],
        a = [];
    for (const s of e) {
        let i = s;
        if (o < t) {
            if (o + i.characters > t && ne(i)) {
                const c = t - o,
                    l = {
                        characters: c,
                        message: i.message.slice(0, c)
                    },
                    u = {
                        characters: i.characters - c,
                        message: i.message.slice(c)
                    };
                i = l, a.push(u)
            }
            o += i.characters, r.push(i)
        } else a.push(i)
    }
    return {
        alwaysShow: r,
        afterExpansion: a
    }
}

function po(e, t) {
    const o = /\$\{(\d+)\}/g;
    let r = o.exec(e);
    const a = e,
        s = [];
    let i = 0;
    for (; r;) {
        const c = Number(r[1]),
            l = t[c];
        l ? (r.index > i && s.push({
            characters: r.index - i,
            message: a.slice(i, r.index)
        }), s.push({
            characters: l.text.length,
            message: fo(l.user_id, mo(l.text), l.text)
        })) : s.push({
            characters: o.lastIndex - i,
            message: a.slice(i, o.lastIndex)
        }), i = o.lastIndex, r = o.exec(e)
    }
    return i < a.length && s.push({
        characters: a.length - i,
        message: a.slice(i)
    }), s
}

function mo(e) {
    return e.slice(1)
}

function fo(e, t, o) {
    return n(ht, {
        name: t,
        id: e,
        mentionText: o,
        type: "user",
        uuid: zn,
        isStatic: !1,
        isEditorContext: !1
    })
}

function or(l) {
    var u = l,
        {
            communityComment: e,
            quoteReply: t,
            isTargeted: o,
            isBanned: r,
            pubRole: a,
            isNew: s,
            error: i
        } = u,
        c = L(u, ["communityComment", "quoteReply", "isTargeted", "isBanned", "pubRole", "isNew", "error"]);
    return n(go, S({
        isTargeted: o,
        isNew: s,
        commentGroup: [{
            communityComment: e,
            quoteReply: t,
            isBanned: r,
            pubRole: a,
            isNew: s,
            error: i
        }]
    }, c))
}

function go({
    commentGroup: e,
    author: t,
    isNew: o,
    chatPublicationId: r,
    hideReply: a,
    onReply: s,
    onNewQuote: i,
    onQuoteReplyClick: c,
    onDelete: l,
    commentRef: u,
    isTargeted: m,
    isReadOnly: _,
    chatAuthorNameAttribution: d,
    extras: p,
    flex: h,
    pub: g
}) {
    const b = P(),
        v = Ie(),
        x = e[e.length - 1].communityComment,
        {
            reply_count: D = 0,
            recent_commenters: Fe = []
        } = x != null ? x : {},
        Q = ce => f(this, [ce], function*({
            details: I,
            reportCategory: j,
            entityId: F,
            reportedToSubstack: R
        }) {
            b(Qn({
                id: F,
                details: I,
                reportCategory: j,
                reportedToSubstack: R
            }))
        }),
        se = !a && D > 0,
        ie = e[0],
        {
            communityComment: X
        } = ie;
    return n(Z, {
        user: t,
        pubRole: e[0].pubRole,
        containerRef: u,
        id: `comment-${x==null?void 0:x.id}`,
        flex: h,
        extras: p
    }, d && n(Le, {
        text: `Comment from ${d}’s subscriber chat`
    }), n(Be, {
        actionMenuProps: {
            communityEntity: X,
            isBanned: ie.isBanned,
            isFlagged: X.reported_by_user,
            replyAction: s && n(M, {
                disabled: !!X.is_locked,
                onClick: s,
                icon: n(Rt, null)
            }, D > 0 ? "View thread" : "New thread"),
            onDelete: l,
            onNewQuote: i,
            onReport: (I, j) => v({
                onSubmit: F => Q(S({
                    entityId: I
                }, F)),
                canReportToAdmins: !!(g && j && g.moderation_enabled),
                pub: g != null ? g : void 0
            }),
            isReadOnly: _,
            publicationId: r,
            isNew: o
        },
        flex: h
    }, n(q, {
        hasFooter: se
    }, e.map(({
        communityComment: {
            id: I,
            body: j,
            quote_id: F,
            media_uploads: R,
            reactions: ce,
            reaction: z,
            reported_by_user: Pe
        },
        quoteReply: J,
        isNew: K,
        error: De
    }, je) => {
        var le, ue;
        return n(N, {
            key: I
        }, !K && !Pe && R && R.length > 0 && F === null && n(H, {
            context: {
                type: "comments",
                id: I
            },
            reactions: ce,
            currentReaction: z,
            onReactionClick: U(I, "comments", b, z),
            isReadOnly: _ || K
        }, n(xe, {
            assets: R.map(He => He.url),
            className: C.imageGroup,
            readOnly: _
        })), F && J && n(To, {
            authorName: (ue = (le = J.user) == null ? void 0 : le.name) != null ? ue : "Substack User",
            communityEntity: J.comment,
            onClick: c
        }), j && n(H, {
            context: {
                type: "comments",
                id: I
            },
            reactions: ce,
            currentReaction: z,
            onReactionClick: U(I, "comments", b, z),
            setReactions: !R || R.length === 0,
            isReadOnly: _ || K
        }, n(Ae, {
            authorName: t.name,
            communityEntity: e[je].communityComment,
            isTargeted: m,
            onClick: s
        })), De && n(k.B5, {
            color: "error"
        }, "􀁟 Not delivered."))
    }))), se && n(Me, null, n(G, {
        commenters: Fe,
        count: D,
        onClick: s
    })))
}

function $(e) {
    return e.post_id === void 0
}

function Z({
    user: e,
    children: t,
    extras: o,
    flex: r = "grow",
    containerRef: a,
    id: s,
    pubRole: i
}) {
    return n(T, {
        id: s,
        flex: r,
        gap: 2,
        ref: a,
        className: B(w.reactionsHoverZone, C.avatarContainer)
    }, n(y, {
        alignItems: "end",
        gap: 12
    }, n(y, {
        paddingTop: 4
    }, e ? n($e, {
        user: e,
        pubRole: i,
        size: 40
    }) : n(ge, {
        radius: "full",
        width: 40,
        height: 40,
        bg: "secondary"
    })), n(T, {
        flex: "grow",
        gap: 2
    }, t)), o && n(y, {
        gap: 12
    }, n(ge, {
        width: 40
    }), n(T, {
        flex: "grow",
        gap: 4
    }, o)))
}

function _o(o) {
    var r = o,
        {
            isNew: e
        } = r,
        t = L(r, ["isNew"]);
    return e ? null : n(y, {
        alignItems: "center",
        className: C.actions
    }, n(kt, {
        trigger: n(et, {
            "aria-label": "Options",
            size: 32,
            fill: "empty",
            rounded: !1
        }, n(vt, {
            size: 20
        })),
        hideOnScroll: !0
    }, n(ho, S({}, t))))
}

function ho({
    communityEntity: e,
    replyAction: t,
    onDelete: o,
    onReport: r,
    isReadOnly: a,
    publicationId: s,
    isBanned: i,
    isFlagged: c,
    onNewQuote: l
}) {
    const u = lt(),
        {
            isAuthor: m
        } = at(s != null ? s : 0),
        _ = s && m,
        d = e && u && e.user_id === u.id,
        p = e && !$(e),
        h = p && "parent_id" in e && e.parent_id !== null,
        g = d || _,
        b = d || _,
        v = !d && !c,
        x = _ && p && !d;
    return e ? n(N, null, n(bo, {
        communityEntity: e
    }), !a && l && p && n(Co, {
        onNewQuote: l,
        communityComment: e
    }), !a && t, e.body && n(yo, {
        communityEntity: e
    }), !a && !h && b && e.is_locked && n(be, {
        communityEntity: e
    }), n(St, null, !a && !h && b && !e.is_locked && n(be, {
        communityEntity: e
    }), !a && g && n(So, {
        communityEntity: e,
        onDelete: o
    }), !a && i !== void 0 && x && n(wo, {
        communityEntity: e,
        isBanned: i
    }), !a && v && n(ko, {
        onReport: r,
        communityEntity: e
    })), n(wt, null, n(jt, {
        conjunction: !0,
        timestamp: e.created_at
    }))) : null
}

function Co({
    onNewQuote: e,
    communityComment: t
}) {
    return n(M, {
        icon: n(Ne, null),
        onClick: () => {
            e(t)
        }
    }, "Reply")
}

function yo({
    communityEntity: e
}) {
    const t = ft();
    return n(M, {
        icon: n(_e, null),
        onClick: () => {
            if (e) {
                const {
                    body: r
                } = e;
                Ge(r), t.popToast(a => n(gt, Y(S({}, a), {
                    text: "Text copied",
                    Icon: _e
                })))
            }
        }
    }, "Copy Text")
}

function bo({
    communityEntity: e
}) {
    const t = bt(),
        {
            id: o
        } = e,
        r = $(e);
    return n(M, {
        icon: n(xt, null),
        onClick: () => {
            var i;
            let s;
            r ? s = fe({
                postId: o
            }) : e.parent_id ? s = Qe({
                commentId: (i = e.parent_id) != null ? i : o,
                targetReplyId: e.parent_id ? o : void 0,
                showTarget: !0
            }) : s = fe({
                postId: e.post_id,
                targetReplyId: e.id,
                showTarget: !0
            }), t(s)
        }
    }, "Copy Link")
}

function be({
    communityEntity: e
}) {
    const t = P(),
        {
            id: o,
            is_locked: r
        } = e,
        a = $(e);
    return n(M, {
        icon: r ? n(It, null) : n(At, null),
        onClick: () => f(this, null, function*() {
            t(a ? Zn(o, !r) : qn(o, !r))
        }),
        priority: r ? "primary" : "destructive"
    }, r ? "Enable replies" : "Disable replies")
}

function ko({
    onReport: e,
    communityEntity: t
}) {
    return n(N, null, n(M, {
        icon: n(Ct, null),
        onClick: () => {
            e(t.id, t.user_pub_role !== "admin")
        },
        priority: "destructive"
    }, "Report"))
}

function wo({
    communityEntity: e,
    isBanned: t
}) {
    const o = P();
    return n(M, {
        icon: t ? n(Nt, null) : n(Lt, null),
        onClick: () => f(this, null, function*() {
            if (confirm("Are you sure you want to ban this user?")) {
                const {
                    id: s
                } = e;
                o(Xn(s, !t))
            }
        }),
        priority: "destructive"
    }, t ? "Unban" : "Ban")
}

function So({
    communityEntity: e,
    onDelete: t
}) {
    const o = P(),
        r = $(e);
    return n(M, {
        icon: n(yt, null),
        onClick: () => f(this, null, function*() {
            if (confirm(`Are you sure you want to delete this ${r?"thread":"comment"}?`)) {
                const {
                    id: i
                } = e;
                if (r) {
                    const {
                        publication_id: c
                    } = e;
                    o(Vn(i, c))
                } else {
                    const {
                        post_id: c,
                        parent_id: l
                    } = e;
                    o(En(i, c, l))
                }
                t && setTimeout(t, 500)
            }
        }),
        priority: "destructive"
    }, "Delete")
}

function Me(e) {
    return n(T, S({
        className: C.replyContainer,
        alignItems: "start"
    }, e))
}

function q(o) {
    var r = o,
        {
            hasFooter: e
        } = r,
        t = L(r, ["hasFooter"]);
    return n(T, S({
        className: B(C.bubbleStack, e && C.hasFooter),
        gap: 4,
        alignItems: "start"
    }, t))
}

function ae(o) {
    var r = o,
        {
            isTargeted: e
        } = r,
        t = L(r, ["isTargeted"]);
    return n(y, S({
        className: B(C.bubble, e && C.targetedAnimation),
        paddingY: 8,
        paddingX: 12,
        bg: "secondary",
        minWidth: 0
    }, t))
}

function Ae({
    authorName: e,
    communityEntity: t,
    isTargeted: o,
    onClick: r
}) {
    return n(ae, {
        isTargeted: o,
        onClick: r
    }, n(Re, {
        authorName: e,
        communityEntity: t
    }))
}

function To({
    authorName: e,
    communityEntity: t,
    onClick: o
}) {
    return n(y, {
        className: B(C.bubble, C.quoteBox),
        onClick: o,
        padding: 12,
        minWidth: 0
    }, n(Re, {
        authorName: e,
        communityEntity: t
    }))
}

function Re({
    authorName: e,
    communityEntity: t
}) {
    var s, i, c, l, u;
    let o = null;
    const r = $(t) ? "thread" : "reply";
    t.reported_by_user && (o = `You reported this ${r}`), (t.status === "deleted" || !t.body) && (o = `This ${r} is not available`);
    let a = (s = t.raw_body) != null ? s : t.body;
    return a ? $(t) && t.link_url && !t.link_metadata && (a = `${a}

${t.link_url}`.trim()) : $(t) ? (i = t.media_assets) != null && i.length ? o = `${t.media_assets.length} ${t.media_assets.length>1?"photos":"photo"}.` : t.link_url && (t.link_metadata ? o = `Link: "${t.link_metadata.title}"` : (a = t.link_url, o = null)) : (c = t.media_uploads) != null && c.length && (o = `${t.media_uploads.length} ${t.media_uploads.length>1?"photos":"photo"}.`), n(k, {
        as: "span",
        isParagraph: !0,
        className: C.bubbleText
    }, n(k, {
        as: "span",
        weight: "semibold",
        className: C.authorName
    }, e || "Substack user"), " ", (a || o) && (o ? n("em", null, o) : n(lo, {
        text: a,
        rawText: (l = t.raw_body) != null ? l : "",
        mentionMap: Array.isArray(t.mentions) ? void 0 : (u = t.mentions) != null ? u : void 0
    })))
}

function G({
    isLocked: e,
    count: t = 0,
    commenters: o,
    audience: r,
    onClick: a
}) {
    const s = e ? oe : Bt;
    return n(ae, {
        alignSelf: "stretch",
        onClick: a
    }, n(y, {
        flex: "grow",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8
    }, n(y, {
        alignItems: "center",
        gap: 8
    }, o && n(y, {
        className: C.facepile,
        alignItems: "center"
    }, o.map(i => n($e, {
        className: C.facepileAvatar,
        user: i,
        size: 26
    }))), n(k, {
        as: "span",
        color: "secondary"
    }, t > 0 ? `${t.toLocaleString()} replies...` : "Reply...")), n(y, {
        gap: 4,
        alignItems: "center"
    }, e || !r || r === "all_subscribers" ? void 0 : n(k, {
        as: "span",
        color: "secondary"
    }, r === "only_founding" ? "Founding" : "Paid"), n(s, {
        size: 20,
        stroke: "var(--color-secondary)"
    }))))
}

function vo({
    audience: e
}) {
    const t = e === "only_founding" ? "FOUNDING MEMBERS ONLY" : e === "only_paid" ? "PAID SUBSCRIBERS ONLY" : "SUBSCRIBERS ONLY";
    return n(T, {
        className: C.paywallBubble,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        bg: "secondary"
    }, n(y, {
        alignItems: "center",
        gap: 4
    }, n(oe, {
        size: 12,
        stroke: "var(--color-secondary)"
    }), n(k.Meta, {
        weight: "semibold"
    }, t)))
}

function xo() {
    return n(T, {
        className: C.paywallBubble,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        bg: "secondary"
    }, n(y, {
        alignItems: "center",
        gap: 4
    }, n(oe, {
        size: 12,
        stroke: "var(--color-secondary)"
    }), n(k.Meta, {
        weight: "semibold"
    }, "SUBSCRIBERS ONLY")))
}

function Io({
    linkUrl: e,
    linkMetadata: t,
    postId: o
}) {
    const r = P(),
        {
            data: a
        } = hn(e, {
            auto: !t,
            onReceive: u => {
                o && r({
                    type: "posts-link_metadata",
                    payload: {
                        id: o,
                        link_metadata: u
                    }
                })
            }
        }),
        s = t != null ? t : a;
    if (!s) return null;
    const i = s == null ? void 0 : s.title,
        c = s == null ? void 0 : s.image,
        l = s == null ? void 0 : s.host;
    return n(ae, null, n(y, {
        as: "a",
        href: e,
        target: "_blank",
        className: C.linkBubble,
        onClick: u => u.stopPropagation(),
        gap: 12,
        justifyContent: "center",
        bg: "secondary",
        alignItems: "start",
        flex: "grow",
        sizing: "border-box",
        paddingY: 4
    }, n(T, {
        minWidth: 0,
        flex: "grow"
    }, l && n(k.Meta, {
        ellipsis: !0
    }, l), i && n(k.B3, {
        weight: "semibold",
        clamp: 2
    }, i)), c && n(T, {
        radius: "md",
        overflow: "hidden",
        bg: "tertiary"
    }, n(ut, {
        src: c,
        maxWidth: 64,
        useRetinaSizing: !0,
        imageIsFixedWidth: !0,
        imageProps: {
            smartCrop: !0,
            aspect: "1:1"
        }
    }))))
}

function rr(e) {
    return n(tt, S({
        className: C.ctaButton,
        priority: "primary-theme"
    }, e))
}

function Le({
    text: e,
    isStatic: t
}) {
    return n(y, {
        paddingX: 8,
        paddingY: 4
    }, n(k.B5, {
        weight: "semibold"
    }, n(_n, {
        strokeWidth: 2,
        height: 12,
        stroke: "#808080",
        fill: "transparent",
        isStatic: t
    }), " ", e))
}

function $e({
    user: e,
    size: t,
    pubRole: o,
    className: r
}) {
    let a;
    (o == null ? void 0 : o.role) === "admin" || (o == null ? void 0 : o.role) === "contributor" ? a = "author": o != null && o.is_founding ? a = "founding" : (o == null ? void 0 : o.membership_state) === "subscribed" && (a = "paid");
    const s = st(e);
    return n(y, {
        as: "a",
        flex: "auto",
        alignSelf: "start",
        href: qe(e, {
            noBase: !0
        }),
        target: "_blank"
    }, n(Tt, {
        showProfileHovercard: s,
        className: r,
        size: t,
        user: e,
        subscriptionType: a
    }))
}
export {
    Le as A, rr as C, Io as L, To as Q, gn as R, Yt as S, jt as T, Lt as U, er as a, tr as b, or as c, nr as d, lo as e, H as f, Ne as g, hn as h, $e as i, Ot as u
};