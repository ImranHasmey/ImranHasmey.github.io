import {
    y as e,
    h as y,
    H as B,
    p as D,
    D as E,
    i as x
} from "./tracking-376cff7a.js";
import {
    c as w,
    M as z,
    b as O
} from "./FlexBox-1a755411.js";
import {
    S as F
} from "./Progress-629d3819.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    M as A
} from "./Modal-ab851ad1.js";
import {
    C as N
} from "./chevron-right-925bdc12.js";
import {
    C as P
} from "./routeClick-cd1b3f9b.js";
import {
    X as T
} from "./x-fc38e969.js";
import {
    D as V
} from "./download-8a01f574.js";
import "./CloseIcon-90eee5fe.js";
import "./useResponsive-08e338a7.js";
import "./transition-c6a4911b.js";
import "./user-e16f1619.js";
(function() {
    try {
        var o = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            i = new Error().stack;
        i && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[i] = "e39a8e17-1e6e-428f-8c5c-4715800e71a3", o._sentryDebugIdIdentifier = "sentry-dbid-e39a8e17-1e6e-428f-8c5c-4715800e71a3")
    } catch (t) {}
})();
const R = "_chrome_s9gjh_1",
    W = "_inactive_s9gjh_8",
    q = "_modalImageButtonContainer_s9gjh_13",
    H = "_modalImageSidebar_s9gjh_17",
    J = "_modalBody_s9gjh_32",
    K = "_imgContainer_s9gjh_40",
    U = "_img_s9gjh_40",
    X = "_isLoading_s9gjh_56",
    G = "_moreOptionsMenu_s9gjh_60",
    Q = "_moreOptionsMenuItem_s9gjh_69",
    Y = "_zIndexStyling_s9gjh_85",
    c = {
        chrome: R,
        inactive: W,
        modalImageButtonContainer: q,
        modalImageSidebar: H,
        modalBody: J,
        imgContainer: K,
        img: U,
        isLoading: X,
        moreOptionsMenu: G,
        moreOptionsMenuItem: Q,
        zIndexStyling: Y
    };

function pe({
    showModal: o,
    modalContent: i,
    onClose: t,
    step: m,
    includeDownloadButton: n = !0
}) {
    return e(A, {
        isOpen: o,
        onClose: t,
        position: "full",
        opacity: "dark",
        onEscape: u => {
            u.stopPropagation(), t()
        }
    }, e(Z, {
        modalContent: i,
        onClose: t,
        stepDefault: m,
        includeDownloadButton: n
    }))
}

function Z({
    modalContent: o = [],
    onClose: i,
    stepDefault: t,
    includeDownloadButton: m
}) {
    const [n, p] = y(t), [u, g] = y(!0), f = B(), h = r => {
        r.currentTarget === r.target && i()
    }, [k, I] = y(!1);
    D(() => {
        if (!f) {
            let r;
            const j = s => {
                    const {
                        key: S
                    } = s;
                    ["ArrowRight", "ArrowDown"].includes(S) ? (v(), s.stopPropagation()) : ["ArrowLeft", "ArrowUp"].includes(S) && (b(), s.stopPropagation())
                },
                a = s => {
                    (s == null ? void 0 : s.type) === "keydown" && j(s), clearTimeout(r), I(!1), r = setTimeout(() => {
                        I(!0)
                    }, 2e3)
                };
            return window.addEventListener("pointermove", a, {
                capture: !0,
                passive: !0
            }), window.addEventListener("pointerdown", a, {
                capture: !0,
                passive: !0
            }), window.addEventListener("keydown", a, {
                capture: !0,
                passive: !0
            }), a(), () => {
                clearTimeout(r), window.removeEventListener("pointermove", a, {
                    capture: !0
                }), window.removeEventListener("pointerdown", a, {
                    capture: !0
                }), window.removeEventListener("keydown", a, {
                    capture: !0
                })
            }
        }
    }, [f, n]);
    const b = () => {
            n !== 0 && (p(n - 1), g(!0))
        },
        v = () => {
            n !== o.length - 1 && (p(n + 1), g(!0))
        },
        L = o[n],
        {
            attrs: {
                src: _,
                alt: M,
                title: C
            }
        } = L,
        d = f ? 8 : 16;
    return e(x, null, e("div", {
        className: w(c.chrome, k && c.inactive)
    }, n < o.length - 1 && e(l, {
        buttonFunction: v,
        style: {
            right: 0,
            padding: d
        },
        isSidebar: !0,
        icon: e(N, {
            size: 20,
            strokeWidth: 2
        })
    }), n > 0 && e(l, {
        buttonFunction: b,
        style: {
            left: 0,
            padding: d
        },
        isSidebar: !0,
        icon: e(P, {
            size: 20,
            strokeWidth: 2
        })
    }), e(l, {
        buttonFunction: i,
        style: {
            position: "absolute",
            right: d,
            top: d
        },
        isSidebar: !1,
        icon: e(T, {
            size: 20
        })
    }), m && e(l, {
        buttonFunction: r => {
            r.stopPropagation(), $(C, _)
        },
        style: {
            position: "absolute",
            left: d,
            top: d
        },
        isSidebar: !1,
        icon: e(V, {
            size: 20
        })
    })), e("div", {
        className: c.imgContainer,
        onClick: h
    }, e("img", {
        className: w(c.img, u && c.isLoading),
        onLoad: () => {
            g(!1)
        },
        alt: M,
        title: C,
        src: E(_, void 0, {
            quality: "auto:good"
        }),
        key: _,
        onClick: h
    })), u && e("div", {
        style: {
            position: "absolute",
            top: "50%",
            left: "50%"
        }
    }, e(F, null)))
}

function l({
    buttonFunction: o,
    style: i,
    isSidebar: t,
    icon: m,
    tetherRef: n
}) {
    return e(O, {
        className: w(c.modalImageButtonContainer, t ? c.modalImageSidebar : null),
        style: i,
        alignItems: "center",
        justifyContent: "center",
        onClick: o,
        ref: n
    }, e(z, {
        priority: "secondary",
        rounded: !0
    }, m))
}

function $(o, i) {
    const t = document.createElement("a");
    return document.body.appendChild(t), t.href = i, t.target = "_blank", t.click(), document.body.removeChild(t), null
}
export {
    Z as ImageViewerContents, pe as ImageViewerModal
};