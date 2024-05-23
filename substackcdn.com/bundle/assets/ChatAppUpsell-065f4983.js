import {
    hz as I,
    g0 as f,
    y as e,
    i as v,
    ao as P,
    Z as U,
    a8 as N,
    cB as T,
    o as j,
    gM as D,
    gL as F,
    p as E,
    D as _,
    aQ as x,
    U as C,
    t as m,
    E as k,
    aR as O,
    im as L
} from "./tracking-376cff7a.js";
import {
    u as w,
    a as p,
    T as c,
    c as K,
    b
} from "./FlexBox-1a755411.js";
import {
    j as M
} from "./jsesc-a42a28f2.js";
import {
    b as R
} from "./browser-368544f1.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    b as z
} from "./structuredData-e7abba32.js";
import {
    A as Q
} from "./Avatar-723c95b0.js";
import {
    L as q
} from "./app_install_modal-64fe70fd.js";
import {
    M as $
} from "./Metadata-be2b4cf2.js";
(function() {
    try {
        var a = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[t] = "87cf51c9-d730-402c-b3b1-a0cbf7881f33", a._sentryDebugIdIdentifier = "sentry-dbid-87cf51c9-d730-402c-b3b1-a0cbf7881f33")
    } catch (r) {}
})();
const W = "_threadsLinkContainer_1wh9d_1",
    H = "_threadsLinkFallback_1wh9d_15",
    J = "_qrCode_1wh9d_26",
    V = "_activityBadge_1wh9d_30",
    Z = "_mobile_1wh9d_39",
    G = "_appBadge_1wh9d_44",
    X = "_webChatLink_1wh9d_54",
    d = {
        threadsLinkContainer: W,
        threadsLinkFallback: H,
        qrCode: J,
        activityBadge: V,
        mobile: Z,
        appBadge: G,
        webChatLink: X
    };

function Y({
    pub: a,
    utm_campaign: t
}) {
    return e(p, {
        alignItems: "center",
        justifyContent: "center",
        gap: 12
    }, e(y, {
        utm_campaign: t
    }), e(c.B4, {
        translated: !0,
        size: 12,
        color: "secondary",
        className: d.threadsLinkFallback
    }, "Already have the app? ", e("a", {
        href: L(a)
    }, "Open now")))
}

function A({
    pub: a,
    utm_campaign: t
}) {
    return e(p, {
        alignItems: "center",
        justifyContent: "center",
        gap: 12
    }, e(B, {
        utm_campaign: t
    }), e(c.B4, {
        translated: !0,
        size: 12,
        color: "secondary",
        className: d.threadsLinkFallback
    }, "Already have the app? ", e("a", {
        href: L(a)
    }, "Open now")))
}

function ee({
    pub: a,
    communityAction: t
}) {
    var g, u, h;
    const {
        iString: r,
        iTemplate: o
    } = w(), s = t ? o `${((g=t.author)==null?void 0:g.name)||r("Someone")} started a thread` : o `Join ${I(a.author_name)} subscriber chat `, n = t != null && t.communityPost ? (u = t.communityPost.body) == null ? void 0 : u.slice(0, 128) : `Subscribe to ${a.name} and join the conversation.`, i = ((h = t == null ? void 0 : t.communityPost) == null ? void 0 : h.type) === "media" && !!(t != null && t.communityPost.media_assets), l = i ? t.communityPost.media_assets[0].url : a.logo_url, S = f({
        pubKey: a.subdomain
    });
    return e(v, null, e($, {
        title: s,
        socialTitle: s,
        description: n,
        image: l,
        isLargeImage: i
    }), e("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: M(z(a, {
                name: s,
                url: S,
                description: n,
                potentialAction: null
            }), {
                json: !0,
                isScriptContext: !0
            })
        }
    }))
}

function ge({
    publication: a,
    communityAction: t,
    publicationAuthor: r,
    noFallback: o,
    utm_campaign: s
}) {
    const n = P(),
        i = U();
    return e(p, {
        gap: n ? 20 : 24,
        justifyContent: "center",
        alignItems: "center"
    }, e(Q, {
        imageUrl: N(r),
        size: 88,
        border: !0,
        badge: e("div", {
            className: K(d.activityBadge)
        }),
        badgePosition: "bottom-right"
    }), e(p, {
        gap: 8
    }, e(c.H2, {
        translated: !0,
        size: 24,
        align: "center",
        weight: "bold",
        color: "pub-primary-text"
    }, "Join ", I18N.p(r.name || "Substack user"), "'s subscriber chat")), !n && e("div", {
        className: d.threadsLinkContainer
    }, e(te, {
        utm_campaign: s,
        subdomain: a.subdomain
    })), n && (i ? e(A, {
        pub: a,
        utm_campaign: s
    }) : e(Y, {
        pub: a,
        utm_campaign: s
    })), e(ae, {
        publication: a,
        source: "pub-nav-bar"
    }), e(ee, {
        pub: a,
        communityAction: t
    }))
}

function ae({
    publication: a,
    source: t,
    postId: r,
    commentId: o,
    targetReplyId: s,
    showTarget: n,
    text: i
}) {
    const {
        iString: l
    } = w();
    return i || (i = l("Or open on web")), e("a", {
        href: T({
            pubId: a.id,
            postId: r,
            commentId: o,
            params: {
                utm_source: t,
                targetReplyId: s,
                showTarget: n
            }
        }),
        className: d.webChatLink
    }, e(c.B3, {
        weight: "semibold",
        align: "center",
        as: "p",
        color: "pub-secondary-text"
    }, i))
}

function te({
    utm_campaign: a,
    postId: t,
    subdomain: r,
    commentId: o,
    targetReplyId: s
}) {
    return e(p, {
        gap: 24,
        alignItems: "center"
    }, e(b, {
        justifyContent: "center"
    }, e(c.B4, {
        translated: !0,
        as: "span",
        weight: "bold"
    }, "Scan the QR code below")), e(b, {
        flex: "auto",
        justifyContent: "center",
        border: "detail",
        radius: "sm",
        className: d.qrCode
    }, e(se, {
        utm_campaign: a,
        postId: t,
        subdomain: r,
        commentId: o,
        targetReplyId: s
    })), e(q, {
        label: "OR"
    }), e(b, {
        gap: 16,
        justifyContent: "center"
    }, e(y, {
        utm_campaign: a
    }), e(B, {
        utm_campaign: a
    })))
}

function se({
    utm_campaign: a,
    postId: t,
    subdomain: r,
    commentId: o,
    targetReplyId: s
}) {
    const n = j(),
        i = o ? D({
            commentId: o,
            targetReplyId: s,
            utm_campaign: a
        }) : t ? F({
            postId: t,
            utm_campaign: a
        }) : f({
            pubKey: r,
            redirect: "app-store",
            utm_campaign: a
        });
    return E(() => {
        const {
            current: l
        } = n;
        l && R.toCanvas(l, i, {
            width: 180,
            margin: 2
        })
    }, []), e("canvas", {
        ref: n
    })
}

function y({
    utm_campaign: a
}) {
    return e("a", {
        className: d.appBadge,
        href: x({
            utm_campaign: a,
            utm_source: C.substack
        }),
        onClick: () => {
            m(k.APP_STORE_LINK_CLICKED, {
                app_store: "ios"
            })
        }
    }, e("img", {
        src: _("/img/app_page/app-store.png", 400),
        height: 40
    }))
}

function B({
    utm_campaign: a
}) {
    return e("a", {
        className: d.appBadge,
        href: O({
            utm_campaign: a,
            utm_source: C.substack
        }),
        onClick: () => {
            m(k.APP_STORE_LINK_CLICKED, {
                app_store: "android"
            })
        }
    }, e("img", {
        src: _("/img/app_page/google-play.png", 400),
        height: 40
    }))
}
export {
    ge as C, te as Q, ee as T, ae as W
};