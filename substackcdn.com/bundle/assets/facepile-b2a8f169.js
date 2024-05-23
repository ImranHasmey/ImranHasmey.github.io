var G = Object.defineProperty,
    K = Object.defineProperties;
var Q = Object.getOwnPropertyDescriptors;
var O = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty,
    M = Object.prototype.propertyIsEnumerable;
var F = (t, e, s) => e in t ? G(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[e] = s,
    S = (t, e) => {
        for (var s in e || (e = {})) E.call(e, s) && F(t, s, e[s]);
        if (O)
            for (var s of O(e)) M.call(e, s) && F(t, s, e[s]);
        return t
    },
    H = (t, e) => K(t, Q(e));
var R = (t, e) => {
    var s = {};
    for (var i in t) E.call(t, i) && e.indexOf(i) < 0 && (s[i] = t[i]);
    if (t != null && O)
        for (var i of O(t)) e.indexOf(i) < 0 && M.call(t, i) && (s[i] = t[i]);
    return s
};
import {
    y as n,
    i as L,
    h as U,
    H as z,
    b2 as X,
    D as Y,
    cS as ee,
    aa as te
} from "./tracking-376cff7a.js";
import {
    c as h,
    T as v,
    b as m,
    u as J,
    a as y,
    h as ne,
    O as se
} from "./FlexBox-1a755411.js";
import {
    d as V,
    P as ie,
    f as ae,
    e as oe
} from "./ProfileHoverCard-c8bfb61a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    R as re,
    a as le
} from "./user-e16f1619.js";
import {
    T as ce
} from "./TextLink-9c0e1c8b.js";
import {
    M as ue
} from "./Modal-ab851ad1.js";
import {
    a as W
} from "./_defineProperty-105d261c.js";
import {
    U as me
} from "./user-dd90bf1b.js";
import {
    X as de
} from "./x-fc38e969.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "9743bb6b-e580-4c04-b823-7c7b3f893b9f", t._sentryDebugIdIdentifier = "sentry-dbid-9743bb6b-e580-4c04-b823-7c7b3f893b9f")
    } catch (s) {}
})();
const fe = ({
        children: t,
        title: e = "",
        content: s = "",
        className: i = "",
        showFirst: r = !1,
        disabled: a = !1
    }) => a ? n(L, null, t) : n("div", {
        className: `popover-container ${i}`
    }, n("div", {
        className: h("popover typography", {
            showfirst: r
        })
    }, n("div", {
        className: "content"
    }, e && n("strong", null, e), s && n("section", null, s)), n("div", {
        className: "popover-tail"
    })), t),
    D = 40,
    ge = .2,
    $ = 2;

function pe(t) {
    return {
        width: (t - 1) * D * (1 - ge) + D + 2 * $,
        height: D + 2 * $
    }
}
const _e = "_pointer_1civs_3",
    he = "_faces_1civs_7",
    ve = "_face_1civs_7",
    be = "_first_1civs_53",
    we = "_last_1civs_57",
    Ie = "_elevated_1civs_61",
    ke = "_avatar_1civs_68",
    Ne = "_avatarOther_1civs_72",
    xe = "_avatarOtherIcon_1civs_79",
    Be = "_link_1civs_83",
    Oe = "_column_1civs_87",
    Se = "_row_1civs_91",
    ye = "_button_1civs_99",
    o = {
        pointer: _e,
        faces: he,
        "size-20": "_size-20_1civs_11",
        "size-40": "_size-40_1civs_15",
        "size-32": "_size-32_1civs_19",
        face: ve,
        first: be,
        last: we,
        elevated: Ie,
        avatar: ke,
        avatarOther: Ne,
        avatarOtherIcon: xe,
        link: Be,
        column: Oe,
        row: Se,
        button: ye
    };

function Le(A) {
    var k = A,
        {
            faces: t,
            secondaryFaces: e,
            maximum: s = 5,
            pileLabel: i,
            modalLabel: r,
            secondaryLabel: a,
            secondaryHref: g,
            enableModal: l,
            className: u,
            totalCount: f,
            detailUtmSource: b,
            onDialogOpen: d,
            showFaces: p = !0,
            showBlanks: c = !1,
            relativeLinks: _ = !1
        } = k,
        w = R(k, ["faces", "secondaryFaces", "maximum", "pileLabel", "modalLabel", "secondaryLabel", "secondaryHref", "enableModal", "className", "totalCount", "detailUtmSource", "onDialogOpen", "showFaces", "showBlanks", "relativeLinks"]);
    const [N, x] = U(!1), [I, B] = U(!1), Z = t.concat((e == null ? void 0 : e.filter(C => !t.find(q => q.id === C.id))) || []).filter(({
        photo_url: C
    }) => c ? !0 : !!C).slice(0, s);
    return n(m, {
        alignItems: "center",
        gap: 8,
        flex: "grow",
        className: h("facepile", u)
    }, p && n(Pe, H(S({}, w), {
        className: u,
        faces: Z,
        maximum: s,
        showBlanks: c,
        relativeLinks: _
    })), i && n(j, {
        label: i,
        clickable: !!(l && t.length),
        onClick: () => {
            !l || !(t != null && t.length) || (x(!0), d && d())
        }
    }), a && n(v.B4, {
        color: "pub-secondary-text",
        weight: "medium"
    }, "·"), a && n(j, {
        label: a,
        clickable: !!(l && (e != null && e.length)),
        href: g,
        onClick: g ? void 0 : () => {
            !l || !(e != null && e.length) || (B(!0), d && d())
        }
    }), N && n(T, {
        isOpen: N,
        modalLabel: r,
        faces: t,
        totalCount: f,
        onClose: () => x(!1),
        utmSource: b
    }), I && e && n(T, {
        isOpen: I,
        modalLabel: a,
        faces: e,
        totalCount: e.length,
        onClose: () => B(!1),
        utmSource: b
    }))
}

function Pe({
    faces: t,
    loading: e,
    className: s,
    clickable: i = !0,
    hoverProfiles: r,
    faceUtmSource: a,
    elevated: g,
    showBlanks: l = !1,
    maximum: u = 5,
    size: f = 40,
    relativeLinks: b = !1
}) {
    const d = z(),
        p = t.filter(({
            photo_url: c
        }) => l ? !0 : !!c).slice(0, u);
    return n(m, {
        alignItems: "center"
    }, !e && p.length > 0 && n(m, {
        alignItems: "center",
        className: h(o.faces, o[`size-${f}`], s)
    }, p.map(({
        id: c,
        name: _,
        photo_url: w,
        className: A,
        tooltipTitle: k,
        tooltipContent: N,
        noLink: x
    }, I) => {
        const B = X({
                id: c,
                name: _
            }, {
                utm_source: a,
                noBase: !!b
            }),
            P = n(re, {
                className: h("facepile-face", o.face, o[`size-${f}`], A, I === 0 && o.first, I === p.length - 1 && o.last, g && o.elevated),
                style: {
                    zIndex: p.length - I
                },
                maxWidth: f * 2,
                src: Y(w || ee(c), 64)
            });
        return x || !i ? P : n(V, {
            disabled: !r || d,
            key: c,
            subject: {
                id: c,
                name: _,
                photo_url: w
            },
            utmSource: a
        }, n(fe, {
            disabled: !k && !N,
            title: k,
            content: N,
            className: "inverse bottom"
        }, n(m, {
            as: "a",
            flex: "auto",
            href: B,
            target: "_blank",
            rel: "noopener"
        }, P)))
    })), e && n(Ce, {
        maximum: u,
        size: f
    }))
}

function Xe({
    pub: t,
    post: e
}) {
    var a;
    const s = Y(`${te(t)}/p/${e.slug}/authors.svg`, 800, {
            format: "png",
            crop: "scale"
        }),
        {
            height: i,
            width: r
        } = pe((a = e == null ? void 0 : e.publishedBylines) == null ? void 0 : a.length);
    return n("img", {
        src: s,
        width: r,
        height: i
    })
}

function Ce({
    maximum: t,
    size: e
}) {
    return n(m, {
        gap: 12
    }, new Array(t).fill(null).map(() => n(ie, {
        type: "circle",
        height: e,
        width: e
    })))
}

function j({
    label: t,
    clickable: e,
    href: s,
    onClick: i
}) {
    return n(v.B4, null, n(ce, {
        className: e ? o.pointer : "",
        weight: "medium",
        color: "pub-secondary-text",
        decoration: e ? "hover-underline" : "none",
        onClick: i,
        href: s
    }, t))
}

function T(i) {
    var r = i,
        {
            isOpen: t,
            onClose: e
        } = r,
        s = R(r, ["isOpen", "onClose"]);
    return n(ue, {
        isOpen: !!t,
        onClose: e,
        width: 500
    }, n(Re, S({
        onClose: e
    }, s)))
}

function Re({
    faces: t,
    modalLabel: e,
    onClose: s,
    openLinksInNewTab: i,
    totalCount: r,
    utmSource: a
}) {
    const {
        iPlural: g
    } = J(), l = (r || 0) - t.length;
    return n(L, null, n(m, {
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 16,
        paddingY: 12,
        borderBottom: "detail",
        flex: "grow"
    }, n(v.H2, null, e), s && n(ne, {
        onClick: s
    }, n(de, {
        height: 20
    }))), n(y, {
        overflowY: "auto",
        className: o.column
    }, n(y, {
        gap: 4,
        padding: 8,
        flex: "grow"
    }, t.map(u => n(De, {
        key: u.id,
        face: u,
        openLinksInNewTab: i,
        utmSource: a
    })), l > 0 && n(m, {
        gap: 16,
        alignItems: "center",
        padding: 8
    }, n(m, {
        className: o.avatarOther,
        alignItems: "center",
        justifyContent: "center"
    }, n(me, {
        className: o.avatarOtherIcon,
        size: 20
    })), n(v.B4, {
        color: "secondary"
    }, "+", g("%1 other reader", "%1 other readers", l))))))
}

function De({
    face: t,
    openLinksInNewTab: e,
    utmSource: s
}) {
    const {
        iString: i
    } = J(), {
        id: r,
        name: a,
        photo_url: g,
        primary_publication: l,
        writes: u,
        className: f,
        noLink: b
    } = t, d = s || "facepile-modal", p = X({
        id: r,
        name: a
    }, {
        utm_source: d
    }), c = le(), _ = ae(t, d);
    return n(m, {
        key: r,
        flex: "grow"
    }, b ? n(m, {
        gap: 16,
        padding: 8,
        radius: "md",
        className: o.row,
        alignItems: "center",
        flex: "grow"
    }, n(W, {
        user: t,
        pub: l,
        size: 40,
        className: f
    }), n(y, {
        minWidth: 0,
        flex: "grow"
    }, n(v.B4, {
        decoration: "hover-underline",
        weight: "semibold",
        className: (o.link, h({
            "no-name": !(a || "").trim().length
        }))
    }, a))) : n(m, S({
        as: "a",
        flex: "grow",
        gap: 16,
        padding: 8,
        alignItems: "center",
        radius: "md",
        className: o.row,
        href: p
    }, e ? {
        target: "_blank"
    } : {}), n(W, {
        user: t,
        pub: l,
        size: 40,
        className: f
    }), n(y, {
        minWidth: 0,
        flex: "grow"
    }, n(V, {
        disabled: z(),
        subject: {
            id: r,
            name: a,
            photo_url: g
        },
        utmSource: d,
        className: o.link
    }, n(v.B4, {
        decoration: "hover-underline",
        weight: "semibold",
        className: (o.link, h({
            "no-name": !(a || "").trim().length
        }))
    }, a)), u && l && n(oe, {
        disabled: z(),
        publication_id: l == null ? void 0 : l.id,
        className: o.link
    }, n(v.B4, {
        color: "secondary",
        decoration: "hover-underline",
        className: h(o.link, {
            "no-name": !(a || "").trim().length
        })
    }, u))), c && c.id !== r && n(se, {
        fill: "empty",
        priority: _.isFollowing ? "secondary" : "primary",
        className: o.button,
        onClick: w => {
            w.preventDefault(), _.toggle()
        }
    }, _.isFollowing ? i("Following") : i("Follow"))))
}
export {
    Le as F, fe as S, T as a, Pe as b, Xe as c
};