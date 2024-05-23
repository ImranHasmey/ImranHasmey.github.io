var oe = Object.defineProperty,
    re = Object.defineProperties;
var ne = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var ie = Object.prototype.hasOwnProperty,
    le = Object.prototype.propertyIsEnumerable;
var G = (e, s, t) => s in e ? oe(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[s] = t,
    p = (e, s) => {
        for (var t in s || (s = {})) ie.call(s, t) && G(e, t, s[t]);
        if (A)
            for (var t of A(s)) le.call(s, t) && G(e, t, s[t]);
        return e
    },
    M = (e, s) => re(e, ne(s));
var $ = (e, s, t) => new Promise((o, n) => {
    var a = i => {
            try {
                c(t.next(i))
            } catch (u) {
                n(u)
            }
        },
        l = i => {
            try {
                c(t.throw(i))
            } catch (u) {
                n(u)
            }
        },
        c = i => i.done ? o(i.value) : Promise.resolve(i.value).then(a, l);
    c((t = t.apply(e, s)).next())
});
import {
    c as P
} from "./x-fc38e969.js";
import {
    y as r,
    h as v,
    cW as ce,
    p as w,
    cy as ue,
    cZ as O,
    co as F,
    o as S,
    a$ as de,
    ia as me,
    bL as K,
    ht as ge,
    du as ye,
    bd as pe
} from "./tracking-376cff7a.js";
import {
    S as X,
    M as J,
    b as ve,
    c as b,
    F as q,
    T as Q,
    f as he,
    B as _e
} from "./FlexBox-1a755411.js";
import {
    R as W
} from "./user-e16f1619.js";
import {
    V as fe,
    aE as be
} from "./homepage_hooks-47e7a4e7.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    r as H,
    M as we
} from "./_baseEach-63ad03e0.js";
import {
    V as Ie
} from "./ProfileHoverCard-c8bfb61a.js";
import {
    T as Pe
} from "./TextInput-c03c69d6.js";
import {
    b as Ce,
    a as ke,
    M as Le
} from "./Modal-ab851ad1.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            s = new Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "1be9f66f-336b-4d9b-bdc3-3f308fca2c8f", e._sentryDebugIdIdentifier = "sentry-dbid-1be9f66f-336b-4d9b-bdc3-3f308fca2c8f")
    } catch (t) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = P("Headphones", [
    ["path", {
        d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
        key: "1xhozi"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = P("Languages", [
    ["path", {
        d: "m5 8 6 6",
        key: "1wu5hv"
    }],
    ["path", {
        d: "m4 14 6-6 2-3",
        key: "1k1g8d"
    }],
    ["path", {
        d: "M2 5h12",
        key: "or177f"
    }],
    ["path", {
        d: "M7 2h1",
        key: "1t2jsx"
    }],
    ["path", {
        d: "m22 22-5-10-5 10",
        key: "don7ne"
    }],
    ["path", {
        d: "M14 18h6",
        key: "1m8k6r"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = P("Pen", [
    ["path", {
        d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",
        key: "5qss01"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = P("Play", [
    ["polygon", {
        points: "5 3 19 12 5 21 5 3",
        key: "191637"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = P("Video", [
    ["path", {
        d: "m22 8-6 4 6 4V8Z",
        key: "50v9me"
    }],
    ["rect", {
        width: "14",
        height: "12",
        x: "2",
        y: "6",
        rx: "2",
        ry: "2",
        key: "1rqjg6"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = P("Volume2", [
        ["polygon", {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
            key: "16drj5"
        }],
        ["path", {
            d: "M15.54 8.46a5 5 0 0 1 0 7.07",
            key: "ltjumu"
        }],
        ["path", {
            d: "M19.07 4.93a10 10 0 0 1 0 14.14",
            key: "1kegas"
        }]
    ]),
    xe = e => r(X, M(p({}, e), {
        name: "PauseIconRounded",
        svgParams: {
            height: 16,
            width: 16
        },
        stroke: "none"
    }), r("path", {
        d: "M3.43396 16C2.47491 16 1.99064 15.5157 2.00014 14.5757V1.42433C2.00014 0.484273 2.48441 0 3.43396 0L5.7034 0C6.65296 0.00949555 7.13723 0.465282 7.13723 1.42433V14.5757C7.13723 15.5157 6.65296 16 5.7034 16H3.43396ZM10.831 16C9.87195 16 9.40666 15.5157 9.40666 14.5757V1.42433C9.40666 0.484273 9.89094 0 10.831 0L13.1004 0C14.05 0 14.5343 0.465282 14.5343 1.42433V14.5757C14.5343 15.5157 14.05 16 13.1004 16H10.831Z"
    })),
    Y = e => r(X, M(p({}, e), {
        name: "PlayIconRounded",
        svgParams: {
            height: 16,
            width: 16
        },
        stroke: "none"
    }), r("path", {
        d: "M3.35866 16C2.58101 16 2 15.4101 2 14.4447V1.55531C2 0.598883 2.58101 0 3.35866 0C3.75196 0 4.10056 0.134078 4.54749 0.393296L15.1575 6.54302C15.9531 7.00782 16.3106 7.39218 16.3106 8C16.3106 8.61676 15.9531 9.00112 15.1575 9.45698L4.54749 15.6067C4.10056 15.8659 3.75196 16 3.35866 16Z"
    })),
    Ve = "_playButton_wxwgg_1",
    $e = "_playButtonIcon_wxwgg_11",
    Fe = "_videoIcon_wxwgg_12",
    He = "_pauseIconBar_wxwgg_25",
    Ne = "_pauseIcon_wxwgg_25",
    Se = "_videoPauseIconBar_wxwgg_35",
    f = {
        playButton: Ve,
        playButtonIcon: $e,
        videoIcon: Fe,
        pauseIconBar: He,
        pauseIcon: Ne,
        videoPauseIconBar: Se
    },
    ee = {
        32: 10,
        40: 12,
        56: 16,
        72: 20
    },
    cs = ({
        isPlaying: e,
        isStatic: s,
        size: t,
        onTogglePlayback: o
    }) => {
        const n = ee[t];
        return r(ve, {
            bg: "glass-thick",
            className: f.playButton,
            alignItems: "center",
            justifyContent: "center",
            onClick: o,
            style: {
                width: t,
                height: t
            },
            role: "button"
        }, e ? r("div", {
            className: f.pauseIcon,
            style: {
                width: n,
                height: n
            }
        }, r("div", {
            className: f.pauseIconBar
        }), r("div", {
            className: f.pauseIconBar
        })) : r(Y, {
            className: f.playButtonIcon,
            height: n,
            isStatic: s,
            fill: s ? "#000" : void 0,
            stroke: "none"
        }))
    },
    Ue = ({
        isPlaying: e,
        size: s,
        onTogglePlayback: t
    }) => {
        const o = ee[s];
        return r(J, {
            priority: "primary",
            onClick: t,
            rounded: !0,
            style: {
                width: s,
                height: s
            }
        }, e ? r(xe, {
            className: f.videoIcon,
            height: o,
            style: {
                stroke: "none"
            }
        }) : r(Y, {
            className: f.videoIcon,
            height: o,
            style: {
                stroke: "none"
            }
        }))
    },
    us = ({
        pub: e,
        magicToken: s,
        section: t,
        user: o
    }) => {
        const [n, a] = v(ce({
            pub: M(p({}, e), {
                section: t
            }),
            token: s
        })), [l, c] = v(!1), i = !o || !o.is_subscribed && !o.is_free_subscribed, [u, m] = v(i);
        return w(() => {
            if (i) return;
            (() => $(void 0, null, function*() {
                var _;
                try {
                    const y = yield H.get("/api/v1/subscription/podcast_rss_url").query({
                        token: s,
                        section_id: (_ = t == null ? void 0 : t.id) != null ? _ : null
                    });
                    y.body.podcast_rss_url && (a(y.body.podcast_rss_url), c(!0)), m(!0)
                } catch (y) {
                    m(!0)
                }
            }))()
        }, [s, t, i]), {
            feedUrl: n,
            isPrivateFeed: l,
            isLoaded: u
        }
    },
    se = e => {
        const [s, t] = v(!1), o = () => {
            t(!0)
        }, n = () => {
            t(!1)
        };
        return w(() => {
            const a = e.current;
            if (a) return a.addEventListener("mouseenter", o), a.addEventListener("mouseleave", n), () => {
                a.removeEventListener("mouseenter", o), a.removeEventListener("mouseleave", n)
            }
        }, [e]), [s]
    },
    ds = (e, s, t) => {
        w(() => {
            if (!t) return;
            const o = e.toLocaleLowerCase(),
                n = a => {
                    a.preventDefault();
                    const l = a.key.toLocaleLowerCase();
                    if (l === o) {
                        s();
                        return
                    }
                    if (a.ctrlKey && `ctrl+shift+${l}` === o) {
                        s();
                        return
                    }
                    if (a.ctrlKey && `ctrl+${l}` === o) {
                        s();
                        return
                    }
                    if (a.shiftKey && `shift+${l}` === o) {
                        s();
                        return
                    }
                };
            return window.addEventListener("keydown", n), () => {
                window.removeEventListener("keydown", n)
            }
        }, [e, s, t])
    },
    ms = e => {
        const [s, t] = v(null);
        return w(() => {
            const o = n => $(void 0, null, function*() {
                const {
                    body: {
                        src: a
                    }
                } = yield H.get(`/api/v1/video/upload/${n}/storyboard`), l = yield H.get(a);
                t(l.body)
            });
            e != null && e.id && o(e.id)
        }, [e]), s
    },
    gs = e => {
        const [s, t] = v(!1), o = a => {
            t(a)
        }, n = a => {
            e.current && e.current.contains(a.target) ? o(!0) : o(!1)
        };
        return w(() => (document.addEventListener("click", n), () => {
            document.removeEventListener("click", n)
        }), []), s
    },
    N = ue({
        cropGravity: "center",
        hideSubtitlesOnGrid: !1,
        highlightByline: !1
    }),
    ys = ({
        children: e,
        cropGravity: s,
        hideSubtitlesOnGrid: t,
        highlightByline: o
    }) => {
        const n = O(N);
        return r(N.Provider, {
            value: p(p(p(p({}, n), F(s) ? null : {
                cropGravity: s
            }), F(t) ? null : {
                hideSubtitlesOnGrid: t
            }), F(o) ? null : {
                highlightByline: o
            })
        }, e)
    },
    Ee = () => O(N),
    De = "_gifPreview_1ii7h_1",
    Re = "_visible_1ii7h_14",
    je = "_image_1ii7h_19",
    C = {
        gifPreview: De,
        visible: Re,
        image: je
    },
    Te = ({
        post: e,
        containerRef: s,
        aspectRatio: t,
        size: o = "small"
    }) => {
        var l;
        const [n] = se(s), a = o === "small" ? 320 : o === "medium" ? 480 : 640;
        return (l = e.videoUpload) != null && l.is_mux ? r("div", {
            className: b(C.gifPreview, {
                [C.visible]: n
            })
        }, r("img", {
            className: C.image,
            style: `aspect-ratio: ${t}`,
            type: "image/gif",
            src: `/api/v1/video/upload/${e.videoUpload.id}/preview.gif?height=${a}`
        })) : null
    },
    Ze = ({
        isHovered: e,
        pub: s,
        post: t
    }) => {
        const [o, n] = v(!0), a = S(null);
        w(() => {
            var c, i, u, m, h, _, y;
            e ? ((u = (i = (c = a.current) == null ? void 0 : c.player) == null ? void 0 : i.play) == null || u.call(i), setTimeout(() => {
                var k;
                (k = a.current) != null && k.player && (a.current.player.volume = o ? 0 : 1)
            }, 500)) : ((_ = (h = (m = a.current) == null ? void 0 : m.player) == null ? void 0 : h.pause) == null || _.call(h), (y = a.current) != null && y.player && (a.current.player.volume = 0))
        }, [e]);
        const l = c => {
            var i;
            c.stopPropagation(), n(!o), (i = a.current) != null && i.player && (a.current.player.volume = o ? 1 : 0)
        };
        return s && t.videoUpload ? r("div", {
            className: b(C.gifPreview, {
                [C.visible]: e
            })
        }, r(q, {
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            style: {
                width: "100%",
                height: "100%"
            }
        }, r(fe, {
            ref: a,
            pub: s,
            mediaUpload: t.videoUpload,
            noControls: !0,
            noPreview: !0
        }), r(q, {
            position: "absolute",
            padding: 12,
            style: {
                top: 0,
                right: 0
            }
        }, r(J, {
            onClick: c => l(c)
        }, o ? r(Ie, {
            size: 20
        }) : r(qe, {
            size: 20
        }))))) : null
    },
    Ae = "_container_17iub_1",
    Ge = "_image_17iub_9",
    Ke = "_containerSquare_17iub_20",
    ze = "_bottomLabels_17iub_70",
    d = {
        container: Ae,
        image: Ge,
        "image-square-legacy": "_image-square-legacy_17iub_16",
        containerSquare: Ke,
        "inner-wrapper": "_inner-wrapper_17iub_27",
        "inner-wrapper-small": "_inner-wrapper-small_17iub_34",
        "inner-wrapper-medium": "_inner-wrapper-medium_17iub_40",
        "inner-wrapper-large": "_inner-wrapper-large_17iub_46",
        "image-square": "_image-square_17iub_16",
        "image-square-small": "_image-square-small_17iub_58",
        "image-square-medium": "_image-square-medium_17iub_62",
        "image-square-large": "_image-square-large_17iub_66",
        bottomLabels: ze
    },
    ps = ({
        className: e,
        disableVideoHover: s,
        hidePlaceholder: t,
        hideTimestamp: o,
        imageAspectRatio: n,
        imageWidth: a,
        isBelowTheFold: l,
        playButtonSize: c,
        post: i,
        pub: u,
        squareImageSize: m
    }) => {
        var T, Z;
        const {
            cropGravity: h
        } = Ee(), {
            getConfigFor: _
        } = de(), {
            isMobile: y
        } = be(), k = _("show_entire_square_image"), x = S(null), [te] = se(x), U = te && !s, L = !!i.videoUpload, E = !L && i.type === "podcast";
        let g = me(i);
        g || ((T = i.videoUpload) != null && T.thumbnail_id ? g = K(i.videoUpload) : (Z = i.podcastUpload) != null && Z.thumbnail_id && (g = K(i.podcastUpload, {
            post: i
        })));
        const D = a <= 640;
        if (!g && t) return null;
        const I = !a && !n ? 1.32 : n,
            V = a || 336,
            R = !!g && i.cover_image_is_square && k,
            ae = R && !!m && !y,
            j = l ? "lazy" : void 0,
            B = ge({
                post: i
            });
        return ae ? r(Oe, {
            aspectRatio: I,
            className: e,
            imageUrl: g,
            loading: j,
            size: m,
            width: V
        }) : r("div", {
            ref: x,
            className: b(e, d.container, {
                "post-preview-cover-image-container--empty": !g
            }),
            style: `aspect-ratio: ${I}`
        }, (L || E) && c !== null && r(q, {
            position: "absolute",
            inset: 0,
            justifyContent: "center",
            alignItems: "center",
            opacity: L && U ? 0 : 100,
            style: {
                transition: `opacity ${D?"var(--animation-timing-fast)":"var(--animation-timing-slow)"} var(--animation-smoothing)`
            }
        }, r(Ue, {
            isPlaying: !1,
            size: c
        })), L && (D ? r(Te, {
            containerRef: x,
            post: i,
            aspectRatio: I,
            size: a > 320 ? "large" : "medium"
        }) : r(Ze, {
            isHovered: U,
            pub: u,
            post: i
        })), g ? r(W, {
            className: b(d.image, {
                [d["image-square-legacy"]]: R
            }),
            src: g,
            alt: "",
            maxWidth: V,
            imageProps: I ? {
                height: Math.round(V / I),
                smartCrop: !0,
                gravity: h
            } : {},
            loading: j,
            style: `aspect-ratio: ${I}`,
            imageSizingCss: "(min-width:768px) 50vw, 100vw"
        }) : null, !!B && !o && r(q, {
            alignItems: "center",
            bg: "glass-inverted-medium",
            className: d.bottomLabels,
            gap: 6,
            position: "absolute",
            radius: "sm"
        }, E ? r(Be, {
            size: 12,
            color: "white"
        }) : r(Me, {
            size: 14,
            color: "white"
        }), r(Q.Meta, {
            color: "white",
            lineHeight: 20
        }, ye(B != null ? B : 0))))
    },
    Oe = ({
        aspectRatio: e,
        className: s,
        imageUrl: t,
        width: o,
        loading: n,
        size: a
    }) => r("div", {
        className: b(s, d.container, d.containerSquare),
        style: `aspect-ratio: ${e}`
    }, r("div", {
        className: b(d["inner-wrapper"], d[`inner-wrapper-${a}`])
    }, r(W, {
        className: b(d.image, d["image-square"], d[`image-square-${a}`]),
        src: t,
        alt: "",
        maxWidth: o,
        imageProps: {
            height: o,
            smartCrop: !0,
            gravity: "center"
        },
        loading: n
    })));

function z(e, s) {
    return e && `rgba(${e.join(",")},${s})`
}
const vs = ({
        palette: e,
        withDefault: s = !0
    }) => {
        var n, a, l, c;
        if (!e && !s) return null;
        const t = (a = z((n = e == null ? void 0 : e.Vibrant) == null ? void 0 : n.rgb, .66)) != null ? a : "var(--color-bg-tertiary)",
            o = (c = z((l = e == null ? void 0 : e.DarkVibrant) == null ? void 0 : l.rgb, .66)) != null ? c : "var(--color-bg-tertiary)";
        return {
            background: `linear-gradient(180deg, ${t}, ${o})`
        }
    },
    hs = ({
        isOpen: e = !1,
        title: s,
        body: t,
        onClose: o,
        customPrimaryButton: n,
        secondaryButton: a,
        confirmationString: l
    }) => {
        const c = S(null),
            [i, u] = v(!!l);
        return w(() => {
            e && l && u(!0)
        }, [e, l]), r(Le, {
            isOpen: e,
            onClose: o,
            initialFocus: c
        }, s && r(ke, {
            title: s,
            includeClose: !1
        }), r(Ce, null, r(Q.B3, null, t), l && r(_e, {
            paddingTop: 16
        }, r(Pe, {
            onChange: m => {
                u(!0), l.toLowerCase() === m.target.value.toLowerCase() && u(!1)
            }
        }))), r(we, {
            primaryButton: n ? pe(n, {
                ref: c,
                disabled: i
            }) : r(he, {
                ref: c,
                onClick: o,
                priority: "primary",
                disabled: i
            }, "OK"),
            secondaryButton: a
        }))
    };
export {
    hs as A, Be as H, ns as L, ps as P, Ue as V, ls as a, Me as b, is as c, ys as d, cs as e, gs as f, vs as g, Y as h, ds as i, Ee as j, ms as k, qe as l, us as u
};