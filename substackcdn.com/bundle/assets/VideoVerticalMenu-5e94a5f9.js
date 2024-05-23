var ge = Object.defineProperty,
    be = Object.defineProperties;
var he = Object.getOwnPropertyDescriptors;
var ne = Object.getOwnPropertySymbols;
var we = Object.prototype.hasOwnProperty,
    fe = Object.prototype.propertyIsEnumerable;
var se = (n, s, t) => s in n ? ge(n, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : n[s] = t,
    C = (n, s) => {
        for (var t in s || (s = {})) we.call(s, t) && se(n, t, s[t]);
        if (ne)
            for (var t of ne(s)) fe.call(s, t) && se(n, t, s[t]);
        return n
    },
    E = (n, s) => be(n, he(s));
var O = (n, s, t) => new Promise((i, c) => {
    var g = o => {
            try {
                p(t.next(o))
            } catch (r) {
                c(r)
            }
        },
        u = o => {
            try {
                p(t.throw(o))
            } catch (r) {
                c(r)
            }
        },
        p = o => o.done ? i(o.value) : Promise.resolve(o.value).then(g, u);
    p((t = t.apply(n, s)).next())
});
import {
    h as I,
    p as H,
    aD as ce,
    y as e,
    cy as ve,
    cZ as Ie,
    bH as ye,
    o as Ce,
    H as De,
    bL as Me,
    i as $,
    du as G,
    t as J,
    E as X,
    d$ as Te,
    hd as Ee
} from "./tracking-376cff7a.js";
import {
    r as j
} from "./_baseEach-63ad03e0.js";
import {
    u as de,
    T as Z
} from "./HoverCard-cbdee1d2.js";
import {
    a6 as Pe,
    I as Se,
    T as Oe
} from "./Attachments-84a6967e.js";
import {
    u as ee,
    b as Le,
    a as k,
    F as w,
    T as D,
    O as re,
    B as R,
    c as U,
    M as ke,
    f as B
} from "./FlexBox-1a755411.js";
import {
    T as xe
} from "./TextInput-c03c69d6.js";
import {
    S as pe
} from "./Progress-629d3819.js";
import {
    f as ae,
    t as Q,
    i as oe,
    a as Ne
} from "./publication-1bbad178.js";
import {
    bG as ie,
    V as Ve,
    bH as $e
} from "./homepage_hooks-47e7a4e7.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    r as Be
} from "./useResponsive-08e338a7.js";
import {
    M as le
} from "./Menu-5342012d.js";
import {
    V as ze
} from "./AlertDialog-d9b964a5.js";
import {
    U as Y,
    S as He
} from "./unlock-12d676d9.js";
import {
    D as je
} from "./download-8a01f574.js";
(function() {
    try {
        var n = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            s = new Error().stack;
        s && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[s] = "1443461b-3cc1-4f29-b4ad-2e3f3406ce4a", n._sentryDebugIdIdentifier = "sentry-dbid-1443461b-3cc1-4f29-b4ad-2e3f3406ce4a")
    } catch (t) {}
})();

function Ae({
    videoPlayerRef: n,
    onCancel: s,
    onSubmit: t,
    onSubmitLabel: i,
    initialTime: c,
    elevated: g
}) {
    const [u, p] = I(c != null ? c : 0), [o, r] = I(ae(u)), [d, a] = I(), [l, b] = I(!1), M = oe(o), {
        iString: f,
        iTemplate: h
    } = ee(), x = Pe(n);
    H(() => {
        n && setTimeout(() => {
            n.currentTime = c != null ? c : 0
        }, 0)
    }, []), H(() => {
        Q(o) !== u && r(ae(u, !0)), a(void 0)
    }, [u]), H(() => {
        p(x)
    }, [x]);
    const N = m => {
            if (!oe(m)) return a(h `time format must be 0:00.0`), !1;
            const S = Q(m);
            return p(S), !0
        },
        A = m => (r(m), N(m)),
        F = ce(m => {
            if (!Ne(m)) return;
            A(m) && n && (n.currentTime = Q(m))
        }, [o]),
        W = () => O(this, null, function*() {
            b(!0), yield t({
                time: u
            }), b(!1)
        });
    if (!n) return null;
    const K = !!d;
    return e("div", null, e(Le, {
        className: g ? ie.containerElevated : ie.containerInline
    }, e(k, {
        gap: 16,
        paddingX: 4,
        flex: "grow"
    }, e(w, {
        gap: 8,
        justifyContent: "space-between"
    }, l ? e(w, {
        justifyContent: "center",
        alignItems: "center",
        marginHeight: 8
    }, e(w, {
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    }, e(pe, null), e(D.B4, {
        weight: "medium",
        color: "secondary",
        translated: !0
    }, "Saving..."))) : e(w, {
        gap: 16,
        alignItems: "center"
    }, e(xe, {
        error: !M,
        value: o,
        onChange: m => F(m.currentTarget.value)
    })), e(w, {
        gap: 8
    }, !l && e(re, {
        priority: "primary-theme",
        fill: "empty",
        onClick: s
    }, f("Cancel")), e(re, {
        priority: "primary-theme",
        onClick: W,
        disabled: K || l
    }, i))), d && e(k, null, e(w, null, e(D.B4, {
        weight: "medium",
        color: "error"
    }, d))))))
}
const It = ({
        videoPlayerRef: n,
        videoUpload: s,
        active: t,
        onCancel: i,
        onUpdate: c
    }) => {
        var r;
        const g = de(),
            {
                iString: u
            } = ee(),
            p = d => O(void 0, null, function*() {
                n && setTimeout(() => n.pause(), 100);
                try {
                    const a = {
                            thumbnail_time: d.time
                        },
                        l = yield j.put(`/api/v1/video/upload/${s.id}/thumbnail_time`).send(a);
                    return c(l.body), g.popToast(b => e(Z, E(C({}, b), {
                        text: u("Thumbnail successfully updated")
                    }))), d
                } catch (a) {
                    console.error(a), g.popToast(l => e(Z, E(C({}, l), {
                        text: u("Error setting thumbnail")
                    })))
                }
            }),
            o = ((r = s.thumbnail_id) != null ? r : 0) / 100;
        return t ? e("div", {
            style: {
                opacity: t ? 1 : 0
            }
        }, e(Ae, {
            videoPlayerRef: n,
            onCancel: i,
            onSubmit: p,
            onSubmitLabel: u("Set thumbnail"),
            initialTime: o
        })) : null
    },
    Fe = "_parentPush_19mzl_1",
    We = "_isPushDrawerOpen_19mzl_8",
    Ke = "_isClosed_19mzl_14",
    qe = "_drawerWrapper_19mzl_18",
    z = {
        parentPush: Fe,
        isPushDrawerOpen: We,
        isClosed: Ke,
        drawerWrapper: qe
    },
    ue = {
        openDrawerId: null,
        wrapperId: "drawer-portal",
        preventDrawerChange: !1
    },
    me = ve({
        isDrawerOpen: () => !1,
        setIsDrawerOpen: () => {},
        setPreventChange: () => {}
    });

function yt({
    children: n,
    drawerIds: s
}) {
    const [t, i] = I(ue), c = Be.useMediaQuery({
        maxWidth: 631
    }), {
        popToast: g
    } = de(), u = r => t.openDrawerId === r, p = ({
        isOpen: r,
        clearPreventChange: d,
        drawerId: a,
        variant: l = "overlay",
        onOpenCallback: b
    }) => {
        (!t.preventDrawerChange || d) && (i({
            openDrawerId: r ? a : null,
            variant: l,
            wrapperId: a,
            preventDrawerChange: !1
        }), b && b()), t.preventDrawerChange && t.preventDrawerChangeMessage && t.openDrawerId !== a && g(M => {
            var f;
            return e(Z, C({
                text: (f = t.preventDrawerChangeMessage) != null ? f : ""
            }, M))
        })
    }, o = ce(({
        preventChange: r,
        preventChangeMessage: d
    }) => {
        i(E(C({}, t), {
            preventDrawerChange: r,
            preventDrawerChangeMessage: r ? d : null
        }))
    }, [t, i]);
    return e(me.Provider, {
        value: {
            isDrawerOpen: u,
            setIsDrawerOpen: p,
            setPreventChange: o
        }
    }, e(R, {
        className: U(z.parentPush, {
            [z.isPushDrawerOpen]: !c && t.variant === "push" && !!t.openDrawerId
        })
    }, n, s.length && [...s, ue.wrapperId].map(r => e("div", {
        className: U(z.drawerWrapper, {
            [z.isClosed]: t.openDrawerId !== r
        }),
        key: r,
        id: r
    }))))
}

function Ge() {
    return Ie(me)
}
const Je = () => {
        const {
            isDrawerOpen: n,
            setIsDrawerOpen: s,
            setPreventChange: t
        } = Ge();
        return {
            isPodcastDrawerOpen: n("podcast"),
            setIsPodcastDrawerOpen: i => s(E(C({}, i), {
                drawerId: "podcast",
                variant: "push"
            })),
            setPreventChange: i => t({
                preventChange: i,
                preventChangeMessage: "Please wait until the upload is finished before closing the drawer"
            })
        }
    },
    Xe = "_verticalMenuLabel_195m4_1",
    Qe = {
        verticalMenuLabel: Xe
    },
    P = ye(({
        onClick: n,
        children: s
    }, t) => e(ke, {
        ref: t,
        rounded: !0,
        onClick: n
    }, s)),
    L = ({
        label: n,
        children: s
    }) => {
        const [t, i] = I(!1);
        return e(w, {
            gap: 8,
            justifyContent: "center",
            alignItems: "center"
        }, e(w, {
            bg: "glass-inverted-medium",
            justifyContent: "center",
            alignItems: "center",
            radius: "sm",
            paddingY: 6,
            paddingX: 8,
            className: Qe.verticalMenuLabel,
            style: {
                opacity: t ? 1 : 0
            }
        }, e(D.B4, {
            color: "white"
        }, n)), e("div", {
            onMouseEnter: () => i(!0),
            onMouseLeave: () => i(!1)
        }, s))
    },
    Ye = "_verticalMenu_1u6o9_1",
    Ze = "_bottomLabels_1u6o9_7",
    Re = "_customThumbnailInput_1u6o9_13",
    Ue = "_placeholder_1u6o9_23",
    et = "_loadingPlaceholder_1u6o9_28",
    tt = "_videoPlaceholder_1u6o9_33",
    nt = "_thumbnailPicture_1u6o9_38",
    st = "_videoEditorMenu_1u6o9_44",
    rt = "_verticalMenuLabel_1u6o9_49",
    v = {
        verticalMenu: Ye,
        bottomLabels: Ze,
        customThumbnailInput: Re,
        placeholder: Ue,
        loadingPlaceholder: et,
        videoPlaceholder: tt,
        thumbnailPicture: nt,
        videoEditorMenu: st,
        verticalMenuLabel: rt
    },
    Ct = ({
        videoPlayer: n,
        pub: s,
        mediaUpload: t,
        onOpenThumbnail: i,
        onThumbnailUpdated: c,
        onOpenFreePreview: g,
        onRemoveFreePreview: u,
        onOpenSettings: p,
        onRemoveMedia: o,
        active: r,
        onSelected: d
    }) => {
        var V, S, te;
        const [a, l] = I(), [b, M] = I(!1), f = Ce(null), {
            iString: h
        } = ee(), {
            setIsPodcastDrawerOpen: x,
            isPodcastDrawerOpen: N
        } = Je(), A = De();
        H(() => {
            d == null || d(a)
        }, [a]);
        const F = () => {
                if (n != null && n.player) {
                    const _ = n.player;
                    _.pause(), _.currentTime = 0;
                    const y = _.src;
                    _.src = "", _.load(), _.src = y
                }
            },
            W = () => O(void 0, null, function*() {
                var y, T;
                if (J(X.EDITOR_MEDIA_SET_THUMBNAIL_UPLOAD_IMAGE_CLICKED, {
                        media_upload_id: t.id,
                        post_id: t.post_id
                    }), !((T = (y = f == null ? void 0 : f.current) == null ? void 0 : y.files) != null && T.length)) return;
                const _ = f.current.files[0];
                M(!0), yield K(_), M(!1)
            }),
            K = _ => O(void 0, null, function*() {
                const y = Math.round(new Date().getTime() / 1e3);
                try {
                    const T = {
                        thumbnail_id: y,
                        custom_thumbnail: !0
                    };
                    yield j.put(`/api/v1/video/upload/${t.id}/thumbnail_id`).send(T);
                    const q = yield j.post(`/api/v1/video/upload/${t.id}/thumbnail_upload_url`).query({
                        fileType: _.type,
                        fileSize: _.size,
                        thumbnail_id: y
                    }), _e = q.body.thumbnail_upload_url;
                    yield j.put(_e).set("content-type", _.type).send(_), Te(Ee(q.body.mediaUpload)), c(E(C({}, q.body.mediaUpload), {
                        updated_at: new Date
                    })), F()
                } catch (T) {
                    console.error(T);
                    return
                }
            }),
            m = Me(t);
        return r ? e($, {
            key: `${t.id}_container`
        }, e("div", {
            className: v.verticalMenu
        }, e(k, {
            gap: 8,
            alignItems: "end"
        }, (!a || a === "settings") && p && e(L, {
            key: `${t.id}_settings`,
            label: h("Open Settings")
        }, e(P, {
            onClick: () => {
                x({
                    isOpen: !N
                }), N || p()
            }
        }, e(He, {
            size: 16
        }))), (!a || a === "preview") && g && u && e(L, {
            key: `${t.id}_preview`,
            label: h("Free preview")
        }, t.preview_duration ? e(le, {
            layerOptions: {
                placement: "bottom-end"
            },
            onClose: () => l(void 0),
            onOpen: () => l("preview"),
            trigger: e(P, null, e(Y, {
                size: 16
            }))
        }, e(k, {
            gap: 8,
            padding: 8,
            justifyContent: "center"
        }, e(w, {
            className: v.videoPlaceholder,
            justifyContent: "center",
            alignItems: "center"
        }, e("div", {
            className: U("video-editor-menu", v.videoEditorMenu)
        }, e(Ve, {
            mediaUpload: t,
            pub: s,
            autoPlay: !1,
            usePreview: !0,
            renderPlayButton: () => e(ze, {
                isPlaying: !1,
                size: A ? 40 : 56
            })
        }), e(R, {
            className: v.bottomLabels,
            bg: "glass-inverted-medium",
            position: "absolute",
            radius: "sm"
        }, e(D.Meta, {
            className: v.durationLabel,
            color: "white",
            lineHeight: 20
        }, G((V = t.preview_duration) != null ? V : 0))))), e($, null, e(B, {
            priority: "secondary",
            onClick: () => {
                g(), l(void 0)
            }
        }, h("Edit preview")), e(B, {
            priority: "destructive",
            disabled: !t.preview_duration,
            onClick: () => {
                u(), l(void 0)
            }
        }, h("Remove preview"))))) : e(P, {
            onClick: g
        }, e(Y, {
            size: 16
        }))), !a && e(L, {
            key: `${t.id}_download`,
            label: h("Download")
        }, e(P, {
            onClick: () => $e(t)
        }, e(je, {
            size: 16
        }))), (!a || a === "thumbnail") && e(L, {
            key: `${t.id}_thumbnail`,
            label: h("Edit thumbnail")
        }, e(le, {
            layerOptions: {
                placement: "bottom-end"
            },
            onClose: () => l(void 0),
            onOpen: () => l("thumbnail"),
            trigger: e(P, null, e(Se, {
                size: 16
            }))
        }, e(k, {
            gap: 8,
            padding: 8,
            justifyContent: "center"
        }, b ? e(w, {
            className: v.loadingPlaceholder,
            justifyContent: "center",
            alignItems: "center"
        }, e(pe, null)) : e("img", {
            className: v.thumbnailPicture,
            src: m
        }), e($, null, e(B, {
            priority: "secondary",
            disabled: b
        }, h("Upload image"), e("input", {
            type: "file",
            accept: "image/*",
            className: v.customThumbnailInput,
            onChange: () => W(),
            ref: f
        })), e(B, {
            priority: "secondary",
            disabled: b,
            onClick: () => {
                J(X.EDITOR_MEDIA_SET_THUMBNAIL_FROM_TIMELINE_CLICKED, {
                    media_upload_id: t.id,
                    post_id: t.post_id
                }), i(), l(void 0)
            }
        }, h("Select from timeline")))))), !a && o && e(L, {
            key: `${t.id}_remove`,
            label: h("Remove media")
        }, e(P, {
            onClick: () => {
                J(X.EDITOR_MEDIA_REMOVE_CLICKED, {
                    media_upload_id: t.id,
                    post_id: t.post_id
                }), o()
            }
        }, e(Oe, {
            size: 16
        }))))), e(R, {
            key: `${t.id}_duration`,
            className: v.bottomLabels,
            bg: "glass-inverted-medium",
            position: "absolute",
            radius: "sm"
        }, e(w, {
            alignItems: "center",
            gap: 4
        }, t.preview_duration && e($, null, e(Y, {
            color: "white",
            size: 12
        }), e(D.Meta, {
            color: "white",
            lineHeight: 20
        }, G((S = t.preview_duration) != null ? S : 0)), e(D.Meta, {
            color: "white",
            lineHeight: 20
        }, "/")), e(D.Meta, {
            color: "white",
            lineHeight: 20
        }, G((te = t.duration) != null ? te : 0))))) : null
    };
export {
    It as C, me as D, Ct as V, Ge as a, L as b, v as c, yt as d, Je as u
};