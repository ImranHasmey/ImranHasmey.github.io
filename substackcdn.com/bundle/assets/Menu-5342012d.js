var ue = Object.defineProperty,
    de = Object.defineProperties;
var me = Object.getOwnPropertyDescriptors;
var L = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty,
    U = Object.prototype.propertyIsEnumerable;
var V = (e, r, a) => r in e ? ue(e, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : e[r] = a,
    i = (e, r) => {
        for (var a in r || (r = {})) R.call(r, a) && V(e, a, r[a]);
        if (L)
            for (var a of L(r)) U.call(r, a) && V(e, a, r[a]);
        return e
    },
    g = (e, r) => de(e, me(r));
var F = (e, r) => {
    var a = {};
    for (var s in e) R.call(e, s) && r.indexOf(s) < 0 && (a[s] = e[s]);
    if (e != null && L)
        for (var s of L(e)) r.indexOf(s) < 0 && U.call(e, s) && (a[s] = e[s]);
    return a
};
import {
    cy as fe,
    cZ as pe,
    bH as P,
    y as t,
    i as A,
    bd as x,
    b3 as Z,
    h as J,
    p as we,
    P as ge
} from "./tracking-376cff7a.js";
import {
    a as p,
    c as h,
    b as B,
    T as I,
    h as ye,
    U as K,
    H as Q,
    y as ve
} from "./FlexBox-1a755411.js";
import {
    u as ee,
    a as be
} from "./react-laag.esm-f47be925.js";
import {
    u as te
} from "./useResponsive-08e338a7.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    X as _e
} from "./x-fc38e969.js";
import {
    q as C
} from "./transition-c6a4911b.js";
import {
    D as re
} from "./Divider-0a4efe7e.js";
import {
    C as he
} from "./chevron-right-925bdc12.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            r = new Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "00dda1b8-e649-465c-b9de-079d0717f09c", e._sentryDebugIdIdentifier = "sentry-dbid-00dda1b8-e649-465c-b9de-079d0717f09c")
    } catch (a) {}
})();
const ae = fe({
    useMobileBottomSheet: !0,
    close: () => {}
});

function S() {
    return pe(ae)
}
const xe = "_root_134z4_1",
    Ie = "_sheet_134z4_12",
    Pe = "_item_134z4_18",
    Me = "_destructive_134z4_27",
    Ne = "_relative_134z4_35",
    y = {
        root: xe,
        sheet: Ie,
        item: Pe,
        destructive: Me,
        relative: Ne
    },
    De = P(({
        title: e,
        subtitle: r,
        onClose: a,
        children: s,
        className: o,
        noHeader: u,
        sheetPadding: l = 16
    }, c) => t(p, {
        className: y.root,
        onClick: a
    }, t(C.Child, {
        appear: !0,
        enter: "tw-transition-all tw-ease-smooth tw-duration-fast transform-gpu",
        enterFrom: "tw-translate-y-full tw-opacity-0",
        enterTo: "tw-translate-y-0 tw-opacity-100",
        leave: "tw-transition-all tw-ease-smooth tw-duration-fast transform-gpu",
        leaveFrom: "tw-translate-y-0 tw-opacity-100",
        leaveTo: "tw-translate-y-full tw-opacity-0"
    }, t(p, {
        className: h(y.sheet, o),
        padding: l,
        ref: c,
        onClick: n => {
            n.stopPropagation()
        }
    }, !u && t(B, {
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "detail",
        paddingBottom: 8
    }, t(p, null, t(I.B3, {
        weight: "semibold"
    }, e), t(I.B4, {
        color: "secondary"
    }, r)), t(ye, {
        fill: "empty",
        onClick: () => {
            a()
        },
        priority: "secondary"
    }, t(_e, null))), t(p, {
        paddingTop: 8,
        overflowY: "auto",
        className: y.items
    }, s))))),
    Fe = P((v, m) => {
        var b = v,
            {
                children: e,
                onClick: r,
                closeMenu: a,
                icon: s,
                rightIcon: o,
                className: u,
                priority: l = "primary",
                disabled: c,
                hiddenInput: n
            } = b,
            d = F(b, ["children", "onClick", "closeMenu", "icon", "rightIcon", "className", "priority", "disabled", "hiddenInput"]);
        const M = d.href ? "a" : K,
            {
                close: N
            } = S();
        return t(M, i({
            className: h(y.item, y[l], u, {
                [y.disabled]: !!c,
                [y.relative]: !!n
            }),
            resetCss: !0,
            onClick: w => {
                r == null || r(w), N()
            },
            ref: m
        }, d), s && x(s, {
            size: 20,
            stroke: "var(--color-primary)"
        }), s && " ", t(I.B4, {
            color: l === "destructive" ? "accent-red" : l === "secondary" ? "secondary" : "primary",
            weight: "medium",
            align: "left",
            flex: "fill"
        }, e), o && t(A, null, t(B, {
            flex: "grow"
        }), o && x(o, {
            size: 20,
            stroke: "var(--color-primary)"
        })), n && t(Q, null, n))
    });
let j = 0;

function W(e = "", r = []) {
    return Z(() => (j++, j = j > Number.MAX_SAFE_INTEGER ? 1 : j, `${e}${j}`), r)
}
const je = ({
        layerOptions: e,
        hideOnScroll: r,
        onClose: a
    } = {}) => {
        const [s, o] = J(!1), {
            triggerProps: u,
            layerProps: l,
            renderLayer: c
        } = ee(i({
            isOpen: s,
            placement: "bottom-center",
            preferY: "bottom",
            triggerOffset: 10,
            onOutsideClick: () => {
                a && a(), o(!1)
            }
        }, e)), n = W("trigger"), d = W("dialog");
        return we(() => {
            if (r) {
                const m = () => {
                    requestAnimationFrame(() => {
                        open && r && o(!1)
                    })
                };
                return window.addEventListener("scroll", m, !0), () => {
                    window.removeEventListener("scroll", m, !0)
                }
            }
        }, [r]), {
            triggerProps: g(i({}, u), {
                id: n,
                "aria-expanded": s,
                "aria-haspopup": "dialog",
                "aria-controls": d
            }),
            layerProps: g(i({}, l), {
                id: d,
                role: "dialog",
                tabIndex: 0,
                "aria-labeledby": n
            }),
            renderLayer: c,
            isOpen: s,
            setOpen: o
        }
    },
    Be = "_menu_j6m4s_1",
    Te = "_submenu_j6m4s_7",
    ze = "_menuItem_j6m4s_11",
    Ee = "_disabled_j6m4s_25",
    Le = "_destructive_j6m4s_34",
    Ce = "_secondary_j6m4s_42",
    $e = "_relative_j6m4s_50",
    ke = "_icon_j6m4s_55",
    Ae = "_text_j6m4s_59",
    f = {
        menu: Be,
        submenu: Te,
        menuItem: ze,
        disabled: Ee,
        destructive: Le,
        secondary: Ce,
        relative: $e,
        icon: ke,
        text: Ae
    };

function Se(e) {
    return typeof e == "function" || typeof e.type == "string" || e.type.$$typeof === Symbol.for("react.forward_ref")
}
const Qe = P(($, T) => {
        var D = $,
            {
                trigger: e,
                children: r,
                ariaLabel: a = "View more",
                hideOnScroll: s,
                layerOptions: o,
                layerClassName: u,
                onOpen: l,
                onClose: c,
                useMobileBottomSheet: n = !1,
                mobileBottomSheetTitle: d,
                mobileBottomSheetSubtitle: m,
                stopPropagation: v = !1,
                padding: b = 8,
                disableMenu: M = !1,
                Theme: N
            } = D,
            w = F(D, ["trigger", "children", "ariaLabel", "hideOnScroll", "layerOptions", "layerClassName", "onOpen", "onClose", "useMobileBottomSheet", "mobileBottomSheetTitle", "mobileBottomSheetSubtitle", "stopPropagation", "padding", "disableMenu", "Theme"]);
        Se(e) || console.error("Menu trigger must be a valid component that forwards a ref that react-laag uses, or a native dom element. See Button/IconButton for example, and preferably use those.");
        const O = te(),
            {
                triggerProps: ne,
                layerProps: q,
                renderLayer: ie,
                isOpen: _,
                setOpen: H
            } = je({
                layerOptions: i({
                    auto: !0,
                    possiblePlacements: ["bottom-start", "bottom-center", "bottom-end", "top-start", "top-center", "top-end"],
                    preferY: "bottom"
                }, o),
                hideOnScroll: s && !(n && O),
                onClose: c
            }),
            [le, z] = J(!1),
            k = () => {
                H(!1), c && c()
            },
            X = ge(r).map(E => x(E, {
                useMobileBottomSheet: n,
                closeMenu: k
            })),
            ce = Z(() => ({
                useMobileBottomSheet: n,
                close: k
            }), [c, n]),
            Y = g(i({}, ne), {
                ariaLabel: a,
                onClick: E => {
                    E.preventDefault(), v && E.stopPropagation(), M || H(!_), _ ? c == null || c() : l == null || l()
                }
            });
        return t(ae.Provider, {
            value: ce
        }, typeof e == "function" ? e(Y) : x(e, Y), (_ || le) && ie(n && O ? t(C, {
            appear: !0,
            show: _,
            beforeEnter: () => z(!0),
            afterLeave: () => z(!1),
            enter: "tw-transition-all tw-ease-smooth tw-duration-fast transform-gpu",
            enterFrom: "tw-opacity-0",
            enterTo: "tw-opacity-100",
            leave: "tw-transition-all tw-ease-smooth tw-duration-fast transform-gpu",
            leaveFrom: "tw-opacity-100",
            leaveTo: "tw-opacity-0"
        }, t(G, {
            Theme: N
        }, t("div", i(i({}, q), w), t(De, {
            title: d,
            subtitle: m,
            onClose: k,
            ref: T,
            className: u
        }, X)))) : t(C, {
            appear: !0,
            unmount: !1,
            show: _,
            beforeEnter: () => z(!0),
            afterLeave: () => z(!1),
            className: "tw-duration-fast"
        }, t(G, {
            Theme: N
        }, t("div", i(i({}, q), w), t(C, {
            appear: !0,
            unmount: !1,
            show: _,
            className: "transform-gpu tw-transition-all tw-duration-fast tw-ease-smooth",
            enterFrom: "tw-opacity-0 tw--translate-y-2",
            enterTo: "tw-opacity-100 tw-translate-y-0",
            leaveFrom: "tw-opacity-100 tw--translate-y-0",
            leaveTo: "tw-opacity-0 tw--translate-y-2"
        }, t(se, i({
            className: u,
            ref: T,
            padding: b
        }, !s && {
            style: {
                overflowY: "auto"
            }
        }), X)))))))
    }),
    et = P((e, r) => {
        const {
            useMobileBottomSheet: a
        } = S(), s = te();
        return a && s ? t(Fe, g(i({}, e), {
            ref: r
        })) : t(oe, g(i({}, e), {
            ref: r
        }))
    }),
    se = P((o, s) => {
        var u = o,
            {
                className: e,
                padding: r = 8
            } = u,
            a = F(u, ["className", "padding"]);
        return t(ve, null, t(p, i({
            className: h(f.menu, "elevated", e),
            gap: 8,
            bg: "elevated",
            shadow: "md",
            border: "detail",
            radius: "md",
            padding: r,
            ref: s
        }, a)))
    }),
    oe = P((N, M) => {
        var w = N,
            {
                children: e,
                onClick: r,
                closeMenu: a,
                icon: s,
                rightIcon: o,
                suffix: u,
                priority: l = "primary",
                className: c,
                disabled: n,
                href: d,
                download: m,
                hiddenInput: v
            } = w,
            b = F(w, ["children", "onClick", "closeMenu", "icon", "rightIcon", "suffix", "priority", "className", "disabled", "href", "download", "hiddenInput"]);
        const T = d ? "a" : K,
            {
                close: $
            } = S();
        return t(T, i({
            className: h(f.menuItem, f[l], c, {
                [f.disabled]: !!n,
                [f.relative]: !!v
            }),
            resetCss: !0,
            onClick: D => {
                n || (r && r(D), D.defaultPrevented || ($ ? $() : a && a()))
            },
            href: n ? "javascript:void(0)" : d,
            download: m,
            ref: M
        }, b), s && t(B, {
            width: 24,
            height: 24,
            alignItems: "center",
            justifyContent: "center"
        }, x(s, {
            size: 20,
            className: h(f.icon, s.props.className)
        })), t(I.B3, {
            color: l === "destructive" ? "accent-red" : l,
            weight: "semibold",
            align: "left",
            flex: "grow"
        }, e), u, o && t(A, null, t(B, {
            flex: "grow"
        }), o && t(B, {
            height: 24,
            alignItems: "center",
            justifyContent: "center"
        }, x(o, {
            size: 20,
            className: h(f.icon, o.props.className)
        }))), v && t(Q, null, v))
    });

function Oe({
    content: e,
    children: r,
    icon: a,
    trailing: s = t(he, null)
}) {
    const [o, u, l] = be({
        delayEnter: 0,
        delayLeave: 125
    }), {
        triggerProps: c,
        layerProps: n,
        renderLayer: d
    } = ee({
        isOpen: o,
        onParentClose: l,
        auto: !0,
        snap: !0,
        placement: "right-start",
        possiblePlacements: ["left-start", "right-start", "left-end", "right-end"],
        triggerOffset: 8,
        containerOffset: 16
    });
    return t(A, null, t(oe, g(i(i({}, u), c), {
        onClick: m => {
            m.preventDefault()
        },
        icon: a,
        rightIcon: s
    }), e), o && d(t("div", i(i({}, n), u), t(se, {
        className: f.submenu,
        padding: 8,
        bg: "elevated"
    }, r))))
}

function qe({
    title: e,
    children: r
}) {
    return t(p, {
        gap: 8
    }, t(re, {
        paddingX: 8
    }), e && t(I.Meta, {
        padding: 8,
        flex: "auto",
        sizing: "border-box"
    }, e), r)
}

function He({
    children: e
}) {
    return t(p, null, t(re, {
        paddingX: 8
    }), t(p, {
        padding: 8,
        paddingBottom: 0,
        alignItems: "start"
    }, t(I.B5, {
        color: "secondary",
        align: "left",
        ellipsis: !0
    }, e)))
}

function G({
    Theme: e,
    children: r
}) {
    return e ? t(e, null, r) : r
}
const tt = qe,
    rt = He,
    at = Oe;
export {
    oe as D, Qe as M, at as S, et as a, tt as b, rt as c, Oe as d, se as e, je as u
};