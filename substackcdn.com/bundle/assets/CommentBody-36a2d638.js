var T = Object.defineProperty,
    D = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty,
    F = Object.prototype.propertyIsEnumerable;
var v = (e, t, n) => t in e ? T(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    x = (e, t) => {
        for (var n in t || (t = {})) S.call(t, n) && v(e, n, t[n]);
        if (k)
            for (var n of k(t)) F.call(t, n) && v(e, n, t[n]);
        return e
    },
    C = (e, t) => D(e, L(t));
import {
    L as H,
    _ as R,
    R as U
} from "./user-e16f1619.js";
import {
    y as i,
    h as E,
    bC as j,
    fw as A,
    i as G
} from "./tracking-376cff7a.js";
import {
    x as V,
    a as z,
    u as $,
    T as h,
    O as q,
    c as P,
    b as w
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    b as W,
    aw as B,
    d as J,
    e as K
} from "./ProfileHoverCard-c8bfb61a.js";
import {
    E as O,
    c as Q
} from "./traverse-bb97748e.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "26c9531a-a824-4325-a731-f8ddea928c7c", e._sentryDebugIdIdentifier = "sentry-dbid-26c9531a-a824-4325-a731-f8ddea928c7c")
    } catch (n) {}
})();

function X({
    children: e
}) {
    return i(V, {
        theme: "dark-theme"
    }, e)
}

function Y() {
    return W("/api/v1/user-settings", {
        auto: !B()
    })
}

function Z() {
    var t, n;
    const {
        data: e
    } = Y();
    return (n = e == null ? void 0 : e.userSettings.some(r => r.type === "explicit_content_enabled" && r.value_bool)) != null ? n : typeof window != "undefined" ? (t = window._preloads) == null ? void 0 : t.userSettings.explicitContentEnabled : !1
}
const ee = "_showAnyway_cj958_1",
    te = {
        showAnyway: ee
    };

function ie(e) {
    const t = Z(),
        [n, r] = E(e && !t);
    return {
        isHidden: n,
        onShow: () => r(!1)
    }
}

function ne({
    onShow: e,
    description: t,
    radius: n
}) {
    const {
        iString: r
    } = $();
    return i(N, {
        onShow: e,
        radius: n
    }, i(X, null, i(z, {
        gap: 4,
        alignItems: "center",
        justifyContent: "center"
    }, i(h.B4, {
        color: "white",
        weight: "bold",
        translated: !0
    }, "Explicit content"), i(h.B4, {
        color: "white",
        opacity: 80
    }, t)), i(q, {
        className: te.showAnyway,
        priority: "secondary",
        outline: "none"
    }, r("Show anyway"))))
}

function N({
    onShow: e,
    children: t,
    radius: n
}) {
    return i(z, {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        inset: 0,
        bg: "glass-inverted-thick",
        gap: 16,
        cursor: "pointer",
        onClick: r => {
            r.preventDefault(), e()
        },
        radius: n
    }, i(O, {
        size: 24,
        stroke: "var(--color-white)"
    }), t)
}
const se = "_imageGroup_idmr0_1",
    re = "_image_idmr0_1",
    ae = "_restack_idmr0_59",
    oe = "_dm_idmr0_72",
    le = "_preview_idmr0_76",
    ce = "_clickable_idmr0_95",
    ue = "_imageCount_idmr0_122",
    f = {
        imageGroup: se,
        "size-1": "_size-1_idmr0_23",
        image: re,
        "size-2": "_size-2_idmr0_40",
        "size-4": "_size-4_idmr0_41",
        "size-3": "_size-3_idmr0_46",
        "size-5": "_size-5_idmr0_47",
        "size-6": "_size-6_idmr0_48",
        restack: ae,
        dm: oe,
        preview: le,
        clickable: ce,
        imageCount: ue
    };

function ve({
    className: e,
    assets: t,
    readOnly: n,
    isRestack: r,
    isPreview: c,
    isDm: u,
    onClick: d,
    aspect: p
}) {
    const a = t.map(s => typeof s == "string" ? {
        src: s,
        explicit: !1
    } : s);
    let m = a;
    a.length > 6 && (m = m.slice(0, 5));
    const [o, _] = E(null), l = (s, g) => {
        s.preventDefault(), _({
            index: g
        })
    };
    return i(w, {
        className: P(f.imageGroup, f[`size-${Math.min(a.length,6)}`], r && f.restack, u && f.dm, c && f.preview, e),
        gap: 4,
        radius: "md"
    }, m.map(({
        src: s,
        explicit: g
    }, b) => i(I, {
        key: s,
        asset: s,
        explicit: g,
        index: b,
        total: a.length,
        readOnly: n,
        aspect: p,
        onClick: n ? void 0 : y => {
            y.defaultPrevented || (y.preventDefault(), d && d(), l(y, b))
        }
    })), a.length > 6 && i(I, {
        asset: a[6].src,
        explicit: a[6].explicit,
        index: 5,
        total: 6,
        count: a.length - m.length,
        readOnly: n,
        onClick: n ? void 0 : d,
        aspect: p
    }), !n && i(H, {
        module: "./ImageViewerModal",
        resolve: s => s.ImageViewerModal,
        onRequest: () => R(() =>
            import ("./ImageViewerModal-9148cb63.js"), ["assets/ImageViewerModal-9148cb63.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/Modal-ab851ad1.js", "assets/CloseIcon-90eee5fe.js", "assets/useResponsive-08e338a7.js", "assets/transition-c6a4911b.js", "assets/Modal-faa641cb.css", "assets/chevron-right-925bdc12.js", "assets/x-fc38e969.js", "assets/routeClick-cd1b3f9b.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/download-8a01f574.js", "assets/ImageViewerModal-5f70a364.css"]),
        showModal: !!o,
        modalContent: a.map(s => ({
            attrs: {
                src: s.src
            }
        })),
        onClose: () => {
            _(null)
        },
        step: o ? o.index : void 0,
        includeDownloadButton: !1
    }))
}

function I({
    asset: e,
    explicit: t,
    onClick: n,
    index: r,
    total: c,
    count: u,
    readOnly: d,
    aspect: p
}) {
    const {
        isHidden: a,
        onShow: m
    } = ie(t);
    return i(w, {
        position: "relative",
        className: P(f.image, !d && f.clickable),
        flex: "grow",
        radius: "sm",
        onClick: a ? void 0 : n
    }, i(U, {
        src: e,
        maxWidth: 500 * 2,
        imageProps: {
            aspect: p || (c === 1 ? "" : "1:1"),
            smartCrop: c !== 1
        }
    }), a ? c === 1 ? i(ne, {
        onShow: m,
        description: "This image was hidden by your settings."
    }) : i(N, {
        onShow: m
    }) : u != null && i(w, {
        className: f.imageCount,
        justifyContent: "center",
        alignItems: "center"
    }, i(h.H3, {
        color: "white",
        font: "digit"
    }, "+", u)))
}

function me(e) {
    let t;
    try {
        t = new URL(e)
    } catch (c) {
        return console.error("Failed to parse URL", e, c), e
    }
    t.hostname = t.hostname.replace(/^www\./, ""), t.pathname = t.pathname.replace(/\/+$/, ""), t.hash = "";
    const n = [];
    t.hostname.includes("youtube") && n.push("v"), t.searchParams.forEach((c, u) => {
        n.includes(u) || t.searchParams.delete(u)
    });
    const r = t.toString().replace(/^\w+:\/\//, "").replace(/\/+$/, "");
    return r ? j(r, 40) : e
}

function de({
    id: e,
    label: t,
    type: n,
    url: r
}) {
    return i("span", {
        className: "node-substack_mention"
    }, n === "pub" ? i(fe, {
        id: e,
        url: r,
        label: t
    }) : i(pe, {
        id: e,
        label: t
    }))
}

function pe({
    id: e,
    label: t
}) {
    return i(J, {
        inline: !0,
        subject: {
            id: e,
            name: t
        }
    }, i("a", {
        className: "substack-mention",
        href: A(e, t)
    }, "@", t))
}

function fe({
    id: e,
    url: t,
    label: n
}) {
    return i(K, {
        publication_id: e,
        inline: !0
    }, i("a", {
        className: "substack-mention",
        href: t
    }, "@", n))
}

function xe({
    content: e
}) {
    return i(M, {
        content: e
    })
}

function M({
    content: e
}) {
    var n, r, c, u, d, p, a, m;
    if (e.type === "text") {
        const o = (c = (r = (n = e.marks) == null ? void 0 : n.find(s => s.type === "link")) == null ? void 0 : r.attrs) == null ? void 0 : c.href,
            _ = o ? me(o) : e.text;
        let l = i(G, null, _);
        if (e.marks)
            for (const s of e.marks) s.type === "link" ? l = i("a", C(x({
                className: "note-link"
            }, s.attrs), {
                target: B() ? "_blank" : (u = s.attrs) == null ? void 0 : u.target
            }), l) : s.type === "bold" ? l = i("strong", null, l) : s.type === "italic" ? l = i("em", null, l) : s.type === "strike" ? l = i("s", null, l) : s.type === "code" && (l = i("code", null, l));
        return l
    }
    if (e.type === "substack_mention") {
        const {
            id: o,
            label: _,
            mentionType: l,
            url: s
        } = (d = e.attrs) != null ? d : {};
        return o && _ ? i(de, {
            id: o,
            label: _,
            type: l,
            url: s
        }) : null
    }
    const t = (p = e.content) == null ? void 0 : p.filter(o => !!o).map(o => i(M, {
        content: o
    }));
    if (e.type === "doc") return i("div", {
        className: "ProseMirror FeedProseMirror"
    }, t);
    if (e.type === "paragraph") return i("p", null, t);
    if (e.type === "heading") {
        const o = `h${Q(((m=(a=e.attrs)==null?void 0:a.level)!=null?m:1)+1,2,6)}`;
        return i(o, null, t)
    }
    return e.type === "blockquote" ? i("blockquote", null, t) : e.type === "codeBlock" ? i("pre", null, i("code", null, t)) : e.type === "orderedList" ? i("ol", null, t) : e.type === "bulletList" ? i("ul", null, t) : e.type === "listItem" ? i("li", null, t) : null
}
export {
    xe as C, ne as E, ve as I, M, ie as a, N as b, me as f, Y as u
};