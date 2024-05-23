import {
    o as W,
    h as _,
    p as E,
    y as o,
    D as H
} from "./tracking-376cff7a.js";
import {
    c as s
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    M as P,
    a as z
} from "./Menu-5342012d.js";
import {
    p
} from "./homepage_hooks-47e7a4e7.js";
import {
    C as A
} from "./chevron-down-6d7770f2.js";
import {
    C as J
} from "./routeClick-cd1b3f9b.js";
import {
    C as U
} from "./chevron-right-925bdc12.js";
(function() {
    try {
        var r = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            l = new Error().stack;
        l && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[l] = "26638fff-cac6-47d5-8c82-584681b731b8", r._sentryDebugIdIdentifier = "sentry-dbid-26638fff-cac6-47d5-8c82-584681b731b8")
    } catch (m) {}
})();
const X = "_subMenuTrigger_1ywy1_1",
    j = "_subMenuItem_1ywy1_6",
    q = "_disabled_1ywy1_6",
    F = "_logo_1ywy1_14",
    G = "_chevron_1ywy1_18",
    i = {
        subMenuTrigger: X,
        subMenuItem: j,
        disabled: q,
        logo: F,
        chevron: G
    },
    O = 10,
    K = 250;

function ro({
    className: r,
    items: l,
    menuItemClassName: m,
    selectedMenuItemClassName: a,
    selectedSlug: c,
    pub: d
}) {
    const u = W(null),
        [L, M] = _(!1),
        [N, C] = _(!1);

    function v(e) {
        const {
            scrollLeft: t,
            scrollWidth: n,
            clientWidth: f
        } = e;
        M(t > O), C(n - (f + t) > O)
    }
    const k = e => v(e.target),
        b = e => () => {
            const {
                current: t
            } = u;
            t && t.scrollBy({
                left: e * K,
                behavior: "smooth"
            })
        };
    return E(() => {
        v(u.current)
    }, []), o("div", {
        className: s("overflow-list-container", r)
    }, o("div", {
        className: s("section-bar", {
            scroll: !0,
            "overflow-left": L,
            "overflow-right": N
        })
    }, o("div", {
        className: "overflow-items",
        ref: u,
        onScroll: k
    }, l.map(({
        label: e,
        href: t,
        slug: n,
        isNative: f,
        onClick: h,
        noFollow: w,
        subItems: g
    }) => g ? o(P, {
        trigger: o("div", {
            className: s("menu-item", {
                selected: n === c
            }, m, a && {
                [a]: n === c
            })
        }, o(p, {
            className: i.subMenuTrigger,
            onClick: h,
            native: f,
            rel: w ? "nofollow" : null
        }, o("span", {
            className: "overflow-item-text"
        }, e), o(A, {
            className: i.chevron,
            size: 16
        }))),
        layerOptions: {
            placement: "bottom-start",
            triggerOffset: 6
        },
        hideOnScroll: !0,
        useMobileBottomSheet: !0,
        mobileBottomSheetTitle: e
    }, g.map(({
        label: D,
        href: I,
        slug: R,
        isNative: T,
        onClick: x,
        noFollow: B,
        logoUrl: S
    }) => {
        const y = parseInt(R) === (d == null ? void 0 : d.id);
        return o(z, {
            icon: o("img", {
                className: i.logo,
                width: 20,
                src: H(S || "/img/substack-nomargin.png", 40)
            }),
            href: I,
            onClick: x,
            native: T,
            rel: B ? "nofollow" : void 0,
            priority: "primary",
            disabled: y,
            className: s(i.subMenuItem, {
                [i.disabled]: y
            })
        }, D)
    })) : o("div", {
        className: s("menu-item", {
            selected: n === c
        }, m, a && {
            [a]: n === c
        })
    }, o(p, {
        href: t,
        onClick: h,
        native: f,
        rel: w ? "nofollow" : null
    }, o("span", {
        className: "overflow-item-text"
    }, e))))), o("div", {
        className: "left-button"
    }, o("div", {
        role: "button",
        className: "scroll-button-hitbox",
        onClick: b(-1)
    }, o(J, {
        strokeWidth: 1.5
    }))), o("div", {
        className: "right-button"
    }, o("div", {
        role: "button",
        className: "scroll-button-hitbox",
        onClick: b(1)
    }, o(U, {
        strokeWidth: 1.5
    })))))
}
export {
    ro as O
};