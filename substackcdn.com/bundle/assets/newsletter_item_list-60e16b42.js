import {
    ao as g,
    y as t,
    D as m,
    a3 as y
} from "./tracking-376cff7a.js";
import {
    T as l,
    a as b,
    c as r,
    F as p,
    u as C
} from "./FlexBox-1a755411.js";
import {
    F as _
} from "./CreditCardIcon-d54e1807.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            i = new Error().stack;
        i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "5e43470a-4180-4009-b81e-d44dedb187af", e._sentryDebugIdIdentifier = "sentry-dbid-5e43470a-4180-4009-b81e-d44dedb187af")
    } catch (s) {}
})();
const N = "_img_1cb6p_1",
    h = "_container_1cb6p_8",
    I = "_selectableContainer_1cb6p_16",
    x = "_selectedContainer_1cb6p_20",
    v = "_clickableContainer_1cb6p_24",
    M = "_containerMobile_1cb6p_32",
    U = "_imgMobile_1cb6p_39",
    k = "_selector_1cb6p_46",
    S = "_unselected_1cb6p_59",
    D = "_seeLatest_1cb6p_65",
    a = {
        img: N,
        container: h,
        selectableContainer: I,
        selectedContainer: x,
        clickableContainer: v,
        containerMobile: M,
        imgMobile: U,
        selector: k,
        unselected: S,
        seeLatest: D
    },
    F = ({
        newsletter: e,
        hideLink: i = !1,
        onToggle: s,
        onClick: c
    }) => {
        c && s && console.error("you cannot pass both onToggle and onClick");
        const n = d => {
                d.stopPropagation(), s == null || s({
                    sectionId: e.sectionId,
                    isSelected: !e.selected
                })
            },
            o = !!s;
        return g() ? t(L, {
            newsletter: e,
            hideLink: i,
            onClick: c,
            onToggle: s
        }) : t(b, {
            className: r(a.container, {
                [a.selectedContainer]: o && e.selected,
                [a.selectableContainer]: o,
                [a.clickableContainer]: !!c
            }),
            justifyContent: "space-between",
            radius: "md",
            padding: 16,
            onClick: o ? n : c != null ? c : void 0
        }, o && e.selected ? t(_, {
            className: r(a.selector)
        }) : o ? t("div", {
            className: r(a.unselected, a.selector)
        }) : null, t(b, {
            gap: 24
        }, e.logoUrl && t("div", {
            className: a.img
        }, e.logoUrl && t("img", {
            className: a.img,
            src: m(e.logoUrl, 64)
        })), t(b, {
            gap: 8
        }, t(l.H3, {
            paddingRight: e.logoUrl ? 0 : 32,
            weight: "semibold",
            color: "pub-primary-text",
            clamp: 2
        }, e.name), t(l.B4, {
            color: "pub-secondary-text",
            clamp: 4
        }, e.description))), !i && t(l, {
            translated: !0,
            size: 14,
            weight: "semibold",
            font: "text",
            color: "pub-secondary-text"
        }, t("a", {
            className: a.seeLatest,
            href: e.linkUrl,
            native: !0
        }, "See the latest")))
    },
    L = ({
        newsletter: e,
        hideLink: i,
        onClick: s,
        onToggle: c
    }) => {
        const n = !!c,
            o = d => {
                d.stopPropagation(), c == null || c({
                    sectionId: e.sectionId,
                    isSelected: !e.selected
                })
            };
        return t(b, {
            className: r(a.containerMobile, {
                [a.selectedContainer]: n && e.selected,
                [a.selectableContainer]: n,
                [a.clickableContainer]: !!o
            }),
            justifyContent: "space-between",
            radius: "md",
            padding: 16,
            onClick: n ? o : s != null ? s : void 0
        }, n && e.selected ? t(_, {
            className: r(a.selector)
        }) : n ? t("div", {
            className: r(a.unselected, a.selector)
        }) : null, t(b, {
            gap: 8
        }, t(p, {
            gap: 8
        }, e.logoUrl && t("img", {
            className: a.imgMobile,
            src: m(e.logoUrl, 64)
        }), t(l.B3, {
            paddingRight: 32,
            weight: "semibold",
            color: "primary",
            font: "text",
            clamp: 2
        }, e.name)), t(l.B4, {
            color: "secondary",
            clamp: 2,
            font: "text"
        }, e.description)), !i && t(l, {
            translated: !0,
            size: 14,
            weight: "semibold",
            font: "text",
            color: "pub-secondary-text"
        }, t("a", {
            href: e.linkUrl,
            native: !0
        }, "See the latest")))
    },
    j = "_container_b0pkk_1",
    B = {
        container: j
    },
    E = ({
        newsletters: e,
        hideLinks: i,
        onNewsletterClick: s,
        justifyItems: c
    }) => {
        const {
            iString: n
        } = C();
        return t(p, {
            className: B.container,
            wrap: "wrap",
            justifyContent: c,
            gap: 24
        }, e.length === 0 && t("div", null, n("No additional newsletters")), e.map((o, d) => t(F, {
            newsletter: o,
            key: d,
            hideLink: i,
            onToggle: s ? ({
                sectionId: u,
                isSelected: f
            }) => {
                s({
                    sectionId: u,
                    isSelected: f
                })
            } : void 0,
            onClick: i ? void 0 : () => {
                y(o.linkUrl, {
                    local_navigation: !1
                })
            }
        })))
    };
export {
    E as N
};