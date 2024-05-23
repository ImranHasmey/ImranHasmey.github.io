var Te = Object.defineProperty,
    Ae = Object.defineProperties;
var ve = Object.getOwnPropertyDescriptors;
var X = Object.getOwnPropertySymbols;
var ge = Object.prototype.hasOwnProperty,
    me = Object.prototype.propertyIsEnumerable;
var _e = (e, t, a) => t in e ? Te(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : e[t] = a,
    S = (e, t) => {
        for (var a in t || (t = {})) ge.call(t, a) && _e(e, a, t[a]);
        if (X)
            for (var a of X(t)) me.call(t, a) && _e(e, a, t[a]);
        return e
    },
    ue = (e, t) => Ae(e, ve(t));
var G = (e, t) => {
    var a = {};
    for (var s in e) ge.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
    if (e != null && X)
        for (var s of X(e)) t.indexOf(s) < 0 && me.call(e, s) && (a[s] = e[s]);
    return a
};
var ae = (e, t, a) => new Promise((s, c) => {
    var n = r => {
            try {
                m(a.next(r))
            } catch (g) {
                c(g)
            }
        },
        i = r => {
            try {
                m(a.throw(r))
            } catch (g) {
                c(g)
            }
        },
        m = r => r.done ? s(r.value) : Promise.resolve(r.value).then(n, i);
    m((a = a.apply(e, t)).next())
});
import {
    bH as be,
    cy as Ie,
    cZ as he,
    y as o,
    o as pe,
    h as O,
    p as fe,
    aD as Ce,
    ao as Ne,
    iu as K,
    iv as V,
    aa as q,
    iw as y,
    ix as $e,
    t as f,
    E as w,
    iy as se,
    iz as Me,
    iA as ie,
    iB as Be,
    iC as ne,
    iD as xe,
    H as Oe,
    h4 as ye
} from "./tracking-376cff7a.js";
import {
    c as M,
    f as Ue,
    i as Pe,
    R as Le,
    u as U,
    a as N,
    T as H,
    b as Se,
    F,
    B as We,
    O as Ge
} from "./FlexBox-1a755411.js";
import {
    M as He
} from "./Menu-5342012d.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    C as je
} from "./chevron-down-6d7770f2.js";
import {
    a as ze,
    M as Xe
} from "./Modal-ab851ad1.js";
import {
    S as Fe
} from "./Switch-b8853cbf.js";
import {
    d as J,
    b as Ze,
    e as Ke,
    A as Ve,
    c as Ye
} from "./ShareAssetButtons-11c2be43.js";
import {
    y as qe,
    r as Q,
    aR as Je
} from "./homepage_hooks-47e7a4e7.js";
import {
    S as Qe
} from "./Progress-629d3819.js";
import {
    D as et
} from "./download-8a01f574.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "be38d37b-850c-46d7-a0b6-ea645e92458c", e._sentryDebugIdIdentifier = "sentry-dbid-be38d37b-850c-46d7-a0b6-ea645e92458c")
    } catch (a) {}
})();
const tt = "_group_1660x_1",
    ot = "_segment_1660x_6",
    at = "_outlined_1660x_11",
    Y = {
        group: tt,
        segment: ot,
        outlined: at
    },
    st = s => {
        var c = s,
            {
                priority: e = "secondary-outline",
                size: t = "md"
            } = c,
            a = G(c, ["priority", "size"]);
        e === "secondary-outline" && (e = "tertiary");
        const n = e === "tertiary";
        return o(re.Provider, {
            value: {
                priority: e,
                size: t
            }
        }, o(Le, S({
            radius: t === "sm" ? "xs" : "sm",
            className: M(Y.group, n && Y.outlined)
        }, a)))
    },
    Pt = i => {
        var m = i,
            {
                children: e,
                priority: t = "primary",
                size: a = "md",
                menuItems: s,
                additionalMenuProps: c = {}
            } = m,
            n = G(m, ["children", "priority", "size", "menuItems", "additionalMenuProps"]);
        return o(st, {
            priority: t,
            size: a
        }, o(it, S({}, n), e), o(He, ue(S({}, c), {
            layerOptions: {
                placement: "bottom-end"
            },
            trigger: o(nt, S({}, n), o(je, {
                size: a === "sm" ? 16 : a === "md" ? 20 : 24
            }))
        }), s))
    },
    it = be((s, a) => {
        var c = s,
            {
                className: e
            } = c,
            t = G(c, ["className"]);
        const {
            priority: n,
            size: i
        } = he(re);
        return o(Ue, S({
            priority: n,
            size: i,
            ref: a,
            className: M(Y.segment, e)
        }, t))
    }),
    nt = be((s, a) => {
        var c = s,
            {
                className: e
            } = c,
            t = G(c, ["className"]);
        const {
            priority: n,
            size: i
        } = he(re);
        return o(Pe, S({
            priority: n,
            size: i,
            ref: a,
            className: M(Y.segment, e)
        }, t))
    }),
    re = Ie({
        priority: "primary",
        size: "md"
    }),
    rt = "_root_41ijk_1",
    lt = "_fullSize_41ijk_10",
    ct = "_tableRoot_41ijk_15",
    dt = "_link_41ijk_21",
    _t = "_linkHovered_41ijk_26",
    gt = "_image_41ijk_26",
    mt = "_download_41ijk_34",
    ut = "_imageLoading_41ijk_72",
    D = {
        root: rt,
        fullSize: lt,
        tableRoot: ct,
        link: dt,
        linkHovered: _t,
        image: gt,
        download: mt,
        imageLoading: ut
    },
    ee = ({
        img: e,
        imgDownload: t,
        shareData: a,
        useNativeShare: s,
        onClick: c
    }) => {
        const {
            iString: n
        } = U(), i = pe(null), m = pe(null), [r, g] = O(!1), [R, te] = O({
            right: 0,
            bottom: 0
        });
        fe(() => {
            var h, E;
            const u = (h = i.current) == null ? void 0 : h.getBoundingClientRect(),
                k = (E = m.current) == null ? void 0 : E.getBoundingClientRect();
            u && k && te({
                right: k.right - u.right,
                bottom: k.bottom - u.bottom
            })
        }, [i, m, e]);
        const oe = Ce(u => ae(void 0, null, function*() {
            var k;
            if (c == null || c(), s && a) try {
                yield navigator.share(a)
            } catch (h) {} else {
                const h = (k = i.current) == null ? void 0 : k.getBoundingClientRect();
                if (h) {
                    const E = u.clientX,
                        T = u.clientY;
                    (E < h.left || E > h.right || T < h.top || T > h.bottom) && u.preventDefault()
                }
            }
        }), [c, s, a]);
        return o("a", {
            onClick: oe,
            href: s ? void 0 : t,
            alt: n("Download Image"),
            download: !0,
            className: M(D.link, r && D.linkHovered, D.fullSize),
            target: "_blank"
        }, o("div", {
            ref: m,
            className: M(D.root, D.fullSize)
        }, !Ne() && e && o("div", {
            className: D.download,
            style: R
        }, o(qe, {
            stroke: "#404040",
            fill: "white"
        })), !e && o("div", {
            className: M(D.image, D.imageLoading),
            alt: n("Loading")
        }, o(Qe, null)), e && o("img", {
            ref: i,
            src: e,
            className: M(D.fullSize, D.image),
            onMouseEnter: () => {
                g(!0)
            },
            onMouseLeave: () => {
                g(!1)
            }
        })))
    };
const Z = ({
    pub: e,
    style: t,
    milestone: a
}) => {
    const {
        iString: s,
        iTemplate: c
    } = U(), n = J();
    let i;
    switch (a) {
        case V.ARR10K:
            i = c `${e.name} has reached $10,000 in annual revenue`;
            break;
        case V.ARR1K:
            i = c `${e.name} has reached $1,000 in annual revenue`;
            break;
        case K.List100:
            i = c `${e.name} has reached 100 subscribers`;
            break;
        case K.List1K:
            i = c `${e.name} has reached 1,000 subscribers`;
            break
    }
    const {
        img: m,
        imgDownload: r,
        shareData: g,
        useNativeShare: R
    } = Q({
        shareTitle: s("Share this milestone"),
        shareText: i,
        shareUrl: q(e),
        imageDownloadUrl: y(e, a, t, `${a}${t.aspectRatio?` - ${t.aspectRatio}`:""}`),
        imageUrl: y(e, a, t, void 0),
        imageUrlSameOrigin: $e(e, a, t, {
            useRootDomain: n == null ? void 0 : n.isSubstack
        })
    });
    return o(ee, {
        img: m,
        imgDownload: r,
        shareData: g,
        useNativeShare: R,
        onClick: () => {
            f(w.MILESTONE_MEDIA_ASSETS_IMAGE_DOWNLOADED, {
                milestone: a,
                aspectRatio: t.aspectRatio,
                source: "image"
            })
        }
    })
};
const pt = ({
    pub: e,
    style: t
}) => {
    const {
        iString: a
    } = U(), s = J(), {
        img: c,
        imgDownload: n,
        shareData: i,
        useNativeShare: m
    } = Q({
        shareTitle: a("Share this publication"),
        shareText: e.hero_text,
        shareUrl: q(e),
        imageDownloadUrl: se(e, null, t, {
            fileToDownload: `Message${t.aspectRatio?` - ${t.aspectRatio}`:""}`
        }),
        imageUrl: se(e, null, t),
        imageUrlSameOrigin: Me(e, t, {
            useRootDomain: s == null ? void 0 : s.isSubstack
        })
    });
    return o(ee, {
        img: c,
        imgDownload: n,
        shareData: i,
        useNativeShare: m,
        onClick: () => {
            f(w.PUBLICATION_MEDIA_ASSETS_IMAGE_DOWNLOADED, {
                aspectRatio: t.aspectRatio,
                source: "image"
            })
        }
    })
};
const St = ({
        pub: e,
        user: t,
        note: a,
        style: s
    }) => {
        const {
            iString: c
        } = U(), n = J(), {
            img: i,
            imgDownload: m,
            shareData: r,
            useNativeShare: g
        } = Q({
            shareTitle: c("Share this message"),
            shareText: (a == null ? void 0 : a.note) || "",
            shareUrl: q(e),
            imageDownloadUrl: ie(e, t, s, {
                fileToDownload: `Message${s.aspectRatio?` - ${s.aspectRatio}`:""}`
            }),
            imageUrl: ie(e, t, s),
            imageUrlSameOrigin: Be(e, t, s, {
                useRootDomain: n == null ? void 0 : n.isSubstack
            })
        });
        return o(ee, {
            img: i,
            imgDownload: m,
            shareData: r,
            useNativeShare: g,
            onClick: () => {
                f(w.SUBSCRIPTION_NOTE_MEDIA_ASSETS_IMAGE_DOWNLOADED, {
                    note_from_user_id: t.id,
                    aspectRatio: s.aspectRatio,
                    source: "image"
                })
            }
        })
    },
    bt = ({
        pub: e,
        user: t,
        note: a,
        style: s
    }) => {
        const {
            iString: c
        } = U(), n = J(), {
            img: i,
            imgDownload: m,
            shareData: r,
            useNativeShare: g
        } = Q({
            shareTitle: c("Share this message"),
            shareText: (a == null ? void 0 : a.note) || "",
            shareUrl: q(e),
            imageDownloadUrl: ne(e, t, s, {
                fileToDownload: `Message${s.aspectRatio?` - ${s.aspectRatio}`:""}`
            }),
            imageUrl: ne(e, t, s),
            imageUrlSameOrigin: xe(e, t, s, {
                useRootDomain: n == null ? void 0 : n.isSubstack
            })
        });
        return o(ee, {
            img: i,
            imgDownload: m,
            shareData: r,
            useNativeShare: g,
            onClick: () => {
                f(w.PLEDGE_NOTE_MEDIA_ASSETS_IMAGE_DOWNLOADED, {
                    note_from_user_id: t.id,
                    aspectRatio: s.aspectRatio,
                    source: "image"
                })
            }
        })
    },
    ht = "_mobileContainer_2nov1_1",
    ft = "_imageContainer_2nov1_6",
    wt = "_hRule_2nov1_11",
    Rt = "_assetButtons_2nov1_18",
    kt = "_aspectRatioButton_2nov1_24",
    Et = "_aspectRatioSelected_2nov1_29",
    Dt = "_aspectRatioSelectedIcon_2nov1_35",
    $ = {
        mobileContainer: ht,
        imageContainer: ft,
        hRule: wt,
        assetButtons: Rt,
        aspectRatioButton: kt,
        aspectRatioSelected: Et,
        aspectRatioSelectedIcon: Dt
    },
    Tt = (e, {
        postCoverImageUrl: t,
        pubCoverImageUrl: a,
        pub: s,
        themeVariables: c
    }) => {
        const n = [],
            i = [];
        let m = !1;
        const r = c || s.theme,
            g = (r == null ? void 0 : r.web_bg_color) || (r == null ? void 0 : r.cover_bg_color);
        switch (e) {
            case "post_asset":
                t && n.push("image"), (r != null && r.background_pop_color || r != null && r.background_pop) && n.push("accent"), n.push("primary"), g.toLowerCase() !== "#ffffff" && n.push("black&white"), m = !0;
                break;
            case "pub_shareable_image":
                {
                    a && n.push("image"),
                    n.push("primary"),
                    i.push({
                        type: "logo",
                        label: "Logo"
                    }),
                    s.has_posts && i.push({
                        type: "posts",
                        label: "Top posts"
                    }),
                    s.hero_text && i.push({
                        type: "description",
                        label: "Description"
                    });
                    break
                }
            case "paid_subscription":
            case "pledged_subscription":
                (r != null && r.background_pop_color || r != null && r.background_pop) && n.push("accent"), n.push("primary")
        }
        return {
            assetThemes: n,
            assetTypes: i,
            includePreviewTextToggle: m
        }
    };

function Lt({
    pub: e,
    item: t,
    isOpen: a,
    setOpen: s,
    themeVariables: c,
    width: n
}) {
    var ce;
    const {
        iString: i,
        iTemplate: m
    } = U(), {
        type: r,
        target_user: g,
        target_user_id: R,
        target_pledge_note: te,
        target_subscription_note: oe,
        post: u
    } = t, k = e.logo_url || e.cover_photo_url || e.author_photo_url || ((ce = e.author) == null ? void 0 : ce.photo_url), h = u == null ? void 0 : u.cover_image, {
        assetThemes: E,
        assetTypes: T,
        includePreviewTextToggle: j
    } = Tt(r, {
        postCoverImageUrl: h,
        pubCoverImageUrl: k,
        pub: e,
        themeVariables: c
    }), _ = c || e.theme, [l, we] = O("stories"), [P, Re] = O(E.find(d => d === "image") && k ? "image" : E.find(d => d === "accent") && (_ != null && _.background_pop_color || _ != null && _.background_pop) ? "accent" : "primary"), [L, ke] = O("logo");
    fe(() => {
        a && f(w.SHARE_CENTER_CUSTOMIZE_ASSETS_MODAL_OPENED)
    }, [a]);
    const [b, Ee] = O(!0);
    let W, A, p, v, B, I;
    const x = () => {
            switch (P) {
                case "image":
                    return S(S({
                        aspectRatio: l,
                        bgImage: !0
                    }, T.length && {
                        type: L
                    }), j && b && {
                        hidePreviewText: !0
                    });
                case "accent":
                    return S(S({
                        aspectRatio: l,
                        bgColor: (_ == null ? void 0 : _.background_pop_color) || (_ == null ? void 0 : _.background_pop),
                        textColor: _ == null ? void 0 : _.print_on_pop
                    }, T.length && {
                        type: L
                    }), j && b && {
                        hidePreviewText: !0
                    });
                case "primary":
                    return S(S({
                        aspectRatio: l,
                        bgColor: (_ == null ? void 0 : _.web_bg_color) || (_ == null ? void 0 : _.cover_bg_color),
                        textColor: (_ == null ? void 0 : _.print_on_web_bg_color) || (_ == null ? void 0 : _.cover_print_primary)
                    }, T.length && {
                        type: L
                    }), j && b && {
                        hidePreviewText: !0
                    });
                case "black&white":
                default:
                    return S(S({
                        aspectRatio: l,
                        bgColor: "#ffffff",
                        textColor: "#404040"
                    }, T.length && {
                        type: L
                    }), j && b && {
                        hidePreviewText: !0
                    })
            }
        },
        C = Oe(),
        le = () => {
            s(!1)
        };
    switch (r) {
        case "arr_10k_milestone":
            p = V.ARR10K, A = o(Z, {
                pub: e,
                milestone: p,
                style: {
                    aspectRatio: l
                }
            }), v = y(e, p, {
                aspectRatio: l
            }, `${p} - ${l==="stories"?"vertical":l}`);
            break;
        case "arr_1k_milestone":
            p = V.ARR1K, A = o(Z, {
                pub: e,
                milestone: p,
                style: {
                    aspectRatio: l
                }
            }), v = y(e, p, {
                aspectRatio: l
            }, `${p} - ${l==="stories"?"vertical":l}`);
            break;
        case "list_100_milestone":
            p = K.List100, A = o(Z, {
                pub: e,
                milestone: p,
                style: {
                    aspectRatio: l
                }
            }), v = y(e, p, {
                aspectRatio: l
            }, `${p} - ${l==="stories"?"vertical":l}`);
            break;
        case "list_1k_milestone":
            p = K.List1K, A = o(Z, {
                pub: e,
                milestone: p,
                style: {
                    aspectRatio: l
                }
            }), v = y(e, p, {
                aspectRatio: l
            }, `${p} - ${l==="stories"?"vertical":l}`);
            break;
        case "paid_subscription":
            A = o(St, {
                pub: e,
                note: oe,
                user: g || {
                    id: R || 0
                },
                style: x()
            }), v = ie(e, g || {
                id: R || 0
            }, x(), {
                fileToDownload: `Message - ${l==="stories"?"vertical":l}`
            }), I = () => {
                f(w.SUBSCRIPTION_NOTE_MEDIA_ASSETS_IMAGE_DOWNLOADED, {
                    note_from_user_id: (g == null ? void 0 : g.id) || R,
                    aspectRatio: l,
                    source: "download-button"
                })
            };
            break;
        case "pledged_subscription":
            A = o(bt, {
                pub: e,
                note: te,
                user: g || {
                    id: R || 0
                },
                style: x()
            }), v = ne(e, g || {
                id: R || 0
            }, x(), {
                fileToDownload: `Message - ${l==="stories"?"vertical":l}`
            }), I = () => {
                f(w.PLEDGE_NOTE_MEDIA_ASSETS_IMAGE_DOWNLOADED, {
                    note_from_user_id: (g == null ? void 0 : g.id) || R,
                    aspectRatio: l,
                    source: "download-button"
                })
            };
            break;
        case "pub_shareable_image":
            W = C ? i("Shareable images") : m `Shareable images for ${e.name}`, A = o(pt, {
                pub: e,
                style: x()
            }), B = `${e.name} - ${l==="stories"?"vertical":l}`, v = se(e, null, x(), {
                fileToDownload: B
            }), I = () => {
                f(w.PUBLICATION_MEDIA_ASSETS_IMAGE_DOWNLOADED, {
                    aspectRatio: l,
                    source: "download-button"
                })
            };
            break;
        case "post_asset":
            {
                const d = x(),
                    {
                        text: z,
                        translatedText: de
                    } = P === "image" ? {
                        text: `Image${b?" - no preview":""}`,
                        translatedText: i(b ? "Image - no preview" : "Image")
                    } : P === "accent" ? {
                        text: `Accent Color${b?" - no preview":""}`,
                        translatedText: i(b ? "Accent Color - no preview" : "Accent Color")
                    } : P === "primary" ? {
                        text: `Background Color${b?" - no preview":""}`,
                        translatedText: i(b ? "Background Color - no preview" : "Background Color")
                    } : {
                        text: `Black and White${b?" - no preview":""}`,
                        translatedText: i(b ? "Black and White - no preview" : "Black and White")
                    };W = C ? i("Shareable images") : m `Shareable images${u!=null&&u.title?` for ${u.title}`:""}`,
                A = u && o(Je, {
                    pub: e,
                    post: u,
                    style: d,
                    text: z,
                    translatedText: de
                }),
                B = `${de} - ${l==="stories"?"vertical":l}`,
                v = u && ye(e, u, d, B),
                I = () => {
                    f(w.WRITER_MEDIA_ASSETS_IMAGE_DOWNLOADED, {
                        post_id: u == null ? void 0 : u.id,
                        type: z,
                        aspectRatio: d.aspectRatio,
                        share_center: !0,
                        inline: !1,
                        source: "download-button"
                    })
                };
                break
            }
    }["arr_10k_milestone", "arr_1k_milestone", "list_100_milestone", "list_1k_milestone"].includes(r) ? (W = i("Share milestone"), B = `${p} - ${l==="stories"?"vertical":l}`, I = () => {
        f(w.MILESTONE_MEDIA_ASSETS_IMAGE_DOWNLOADED, {
            milestone: p,
            aspectRatio: l,
            source: "download-button"
        })
    }) : ["paid_subscription", "pledged_subscription"].includes(r) && (W = i("Share message"), B = `Message - ${l==="stories"?"vertical":l}`);
    const De = () => ae(this, null, function*() {
        I == null || I();
        const d = document.createElement("a");
        d.href = v, d.download = B, d.target = "_blank", d.rel = "noopener noreferrer", d.style.display = "none", document.body.appendChild(d), d.click(), document.body.removeChild(d)
    });
    return o(Xe, {
        isOpen: a,
        onClose: le,
        width: n || 630,
        overflow: "hidden",
        renderOverReactLaagPortal: !0,
        fullscreenMobile: !0
    }, o(N, {
        className: C ? $.mobileContainer : "",
        gap: 20
    }, o(ze, {
        onClose: le,
        title: W,
        includeClose: !0
    }), o(N, {
        className: C ? $.mobileContainer : "",
        gap: {
            desktop: 32,
            mobile: 8
        }
    }, o("hr", {
        className: $.hRule
    }), C ? o(H.B4, {
        align: "center",
        paddingTop: 8,
        size: 12,
        color: "secondary",
        translated: !0
    }, "Long press to download image") : null, o(N, {
        className: C ? $.mobileContainer : "",
        gap: 24,
        paddingX: {
            desktop: 24,
            mobile: 16
        },
        paddingBottom: {
            mobile: 16
        },
        justifyContent: {
            mobile: "space-between"
        }
    }, o(Se, {
        className: M(C ? $.mobileContainer : $.imageContainer),
        alignItems: "center",
        justifyContent: "center",
        paddingX: {
            desktop: 64,
            mobile: 0
        }
    }, A), o(F, {
        className: $.assetButtons,
        gap: 32
    }, E.length ? o(N, {
        gap: 8
    }, o(H.B4, {
        weight: "medium",
        translated: !0
    }, "Background"), o(F, {
        gap: 8
    }, E.map(d => o(Ze, {
        value: d,
        isSelected: d === P,
        onClick: () => Re(d),
        themeVariables: _,
        coverImageUrl: k
    })))) : null, T.length > 1 ? o(N, {
        gap: 8
    }, o(H.B4, {
        weight: "medium",
        translated: !0
    }, "Type"), o(F, {
        gap: 8
    }, T.map(({
        type: d,
        label: z
    }) => o(Ke, {
        value: d,
        label: z,
        isSelected: d === L,
        onClick: () => ke(d)
    })))) : null, o(N, {
        gap: 8
    }, o(H.B4, {
        weight: "medium",
        translated: !0
    }, "Aspect Ratio"), o(F, {
        gap: 8
    }, Ve.map(d => o(Ye, {
        value: d,
        isSelected: d === l,
        onClick: () => we(d)
    })))), o(N, {
        gap: 8
    }, o(H.B4, {
        nowrap: !0,
        weight: "medium",
        translated: !0
    }, "Preview Text"), o(Se, {
        flex: "grow",
        alignItems: "center"
    }, o(Fe, {
        color: "brand",
        checked: !b,
        onChange: d => {
            Ee(!d), f(w.SHARE_CENTER_CUSTOMIZE_ASSETS_PREVIEW_TEXT_TOGGLED, {
                includePreviewText: d
            })
        }
    }))))), C ? null : o(N, {
        gap: 16
    }, o("hr", {
        className: $.hRule
    }), o(We, {
        paddingX: 24,
        paddingBottom: 24
    }, o(Ge, {
        grow: !0,
        leftIcon: o(et, null),
        priority: "primary",
        onClick: De
    }, i("Download image")))))))
}
export {
    st as S, Lt as a, Pt as b
};