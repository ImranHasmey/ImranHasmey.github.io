var L = (t, n, o) => new Promise((a, s) => {
    var i = r => {
            try {
                d(o.next(r))
            } catch (c) {
                s(c)
            }
        },
        l = r => {
            try {
                d(o.throw(r))
            } catch (c) {
                s(c)
            }
        },
        d = r => r.done ? a(r.value) : Promise.resolve(r.value).then(i, l);
    d((o = o.apply(t, n)).next())
});
import {
    e as q,
    _ as z,
    a as F,
    R as W
} from "./user-e16f1619.js";
import {
    h as y,
    p as O,
    aD as w,
    t as B,
    E as T,
    y as e,
    a2 as D,
    i as x,
    aR as Q,
    D as I,
    aQ as V,
    o as K,
    b3 as U,
    q as M
} from "./tracking-376cff7a.js";
import {
    u as S,
    O as P,
    T as f,
    b as _,
    a as C,
    h as N,
    F as $,
    c as X,
    f as J
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    u as Y,
    i as G
} from "./free_email_form.module-135823b4.js";
import {
    M as Z
} from "./Modal-ab851ad1.js";
import {
    u as A
} from "./useResponsive-08e338a7.js";
import {
    X as j
} from "./x-fc38e969.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "b6316af0-d063-479a-8fc1-6b2562221e0f", t._sentryDebugIdIdentifier = "sentry-dbid-b6316af0-d063-479a-8fc1-6b2562221e0f")
    } catch (o) {}
})();
const ee = "_modalTitle_1ondw_1",
    te = "_qrCode_1ondw_5",
    ne = "_divider_1ondw_22",
    oe = "_dividerLine_1ondw_26",
    ae = "_appBadge_1ondw_34",
    se = "_phoneInput_1ondw_40",
    h = {
        modalTitle: ee,
        qrCode: te,
        divider: ne,
        dividerLine: oe,
        appBadge: ae,
        phoneInput: se
    };

function re() {
    const [t, n] = y(() => typeof window != "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1);
    return O(() => {
        const o = s => {
                n(s.matches)
            },
            a = window.matchMedia("(prefers-color-scheme: dark)");
        return a.addEventListener("change", o), () => {
            a.removeEventListener("change", o)
        }
    }, []), {
        darkMode: t
    }
}

function Ie({
    utm_campaign: t,
    utm_source: n,
    utm_content: o,
    abTestingId: a,
    overrideCTA: s,
    overrideTitle: i,
    subTitle: l,
    openUrl: d
} = {}) {
    const [r, c] = y(!1), u = w(() => {
        c(!0), B(T.APP_INSTALL_MODAL_OPENED, {
            utm_campaign: t,
            utm_source: n,
            utm_content: o
        })
    }, [t, n, o]), m = w(() => {
        c(!1)
    }, []);
    return {
        open: u,
        modal: e(de, {
            isOpen: r,
            onClose: m,
            utm_campaign: t,
            utm_source: n,
            utm_content: o,
            abTestingId: a,
            overrideCTA: s,
            overrideTitle: i,
            subTitle: l,
            openUrl: d
        })
    }
}

function ie({
    label: t
}) {
    return e(_, {
        gap: 16,
        alignItems: "center",
        className: h.divider
    }, e("hr", {
        className: h.dividerLine
    }), t && e(x, null, e(f.Meta, null, t), e("hr", {
        className: h.dividerLine
    })))
}

function le({
    utm_campaign: t,
    utm_source: n,
    utm_content: o,
    hideQrInstructions: a = !0,
    abTestingId: s,
    suggestedEmail: i,
    size: l,
    gap: d = 32,
    padding: r = 32,
    openUrl: c,
    overrideCTA: u,
    onSend: m
}) {
    const {
        iString: p
    } = S(), g = A();
    return e(C, {
        justifyContent: "center",
        alignItems: "center",
        gap: d,
        padding: r
    }, !g && e(x, null, !a && e(f.B3, {
        weight: "semibold",
        translated: !0
    }, "Scan the QR code below"), e(_, {
        className: h.qrCode,
        padding: 20
    }, e(ce, {
        size: l,
        utm_campaign: t,
        utm_source: n,
        utm_content: o,
        abTestingId: s,
        openUrl: c
    })), !g && e(ie, {
        label: p("OR")
    })), !g && e(ge, {
        suggestedEmail: i,
        onSend: m
    }), g && e(P, {
        grow: !0,
        href: c || D({
            utm_campaign: t,
            utm_source: n
        })
    }, u || p("Install the app")))
}

function Se({
    utm_campaign: t,
    utm_source: n,
    darkMode: o = !1
}) {
    return e(_, {
        gap: 16,
        justifyContent: "center"
    }, e("a", {
        className: h.appBadge,
        href: V({
            utm_campaign: t,
            utm_source: n
        }),
        onClick: () => {
            B(T.APP_STORE_LINK_CLICKED, {
                source: "app_install_upsell",
                app_store: "ios",
                utm_campaign: t,
                utm_source: n
            })
        }
    }, e("img", {
        src: I(o ? "/img/app_page/app-store-white.png" : "/img/app_page/app-store.png", 160 * 2),
        height: 48
    })), e("a", {
        className: h.appBadge,
        href: Q({
            utm_campaign: t,
            utm_source: n
        }),
        onClick: () => {
            B(T.APP_STORE_LINK_CLICKED, {
                source: "app_install_upsell",
                app_store: "android",
                utm_campaign: t,
                utm_source: n
            })
        }
    }, e("img", {
        src: I(o ? "/img/app_page/google-play-white.png" : "/img/app_page/google-play.png", 160 * 2),
        height: 48
    })))
}

function de({
    isOpen: t,
    onClose: n,
    utm_campaign: o,
    utm_content: a,
    utm_source: s,
    abTestingId: i,
    overrideCTA: l,
    overrideTitle: d,
    subTitle: r,
    openUrl: c
}) {
    const {
        getExperimentVariant: u
    } = Y(), {
        iString: m
    } = S(), p = A(), [g, b] = y(""), v = w(H => {
        b(H)
    }, []), k = w(() => {
        b(""), n()
    }, [n]), R = !p && u("app_install_modal_width") === "treatment", E = d || m("Download the Substack app");
    return e(Z, {
        isOpen: t,
        onClose: n,
        width: R ? 500 : 360,
        position: p ? "bottom" : "default"
    }, g ? e(ue, {
        sentEmail: g,
        closeModal: k
    }) : e(C, {
        alignItems: "stretch",
        paddingTop: p ? 32 : 0,
        paddingBottom: p ? 0 : 48
    }, !p && e(_, {
        justifyContent: "end",
        alignItems: "center",
        padding: 20,
        paddingBottom: 0
    }, e(N, {
        size: 40,
        onClick: n,
        rounded: !0,
        fill: "borderless",
        "aria-label": "Close"
    }, e(j, {
        size: 20
    }))), e(_, {
        justifyContent: "center",
        alignItems: "center"
    }, p && e("img", {
        src: I("/img/substack-app-icon.png"),
        height: 64,
        width: 64
    })), e(_, {
        padding: 24,
        paddingTop: p ? void 0 : 20,
        paddingBottom: 8,
        justifyContent: "center",
        alignItems: "center",
        className: h.modalHeader
    }, p ? e(f.H3, {
        textAlign: "center"
    }, E) : R ? e(f.H2, {
        size: 30,
        lineHeight: 36,
        textAlign: "center",
        fontWeight: "heavy"
    }, E) : e(f.H4, {
        textAlign: "center",
        fontWeight: "heavy"
    }, E)), r ? e(f.B3, {
        color: "secondary",
        align: "center",
        paddingTop: p ? 4 : 0,
        paddingX: 12,
        fontSize: 15
    }, r) : null, e(le, {
        utm_campaign: o,
        utm_source: s,
        utm_content: a,
        abTestingId: i,
        openUrl: c,
        overrideCTA: l,
        size: 142,
        onSend: v
    })))
}

function ce({
    utm_campaign: t,
    utm_source: n,
    utm_content: o,
    abTestingId: a,
    size: s = 240,
    width: i,
    height: l,
    openUrl: d
}) {
    const r = K(null),
        c = D({
            utm_campaign: t,
            utm_source: n,
            utm_content: o,
            abti: a
        }),
        {
            darkMode: u
        } = re(),
        m = pe(p => {
            const g = p.devicePixelRatio,
                b = getComputedStyle(document.body),
                v = b.getPropertyValue("--color-primary"),
                k = b.getPropertyValue("--color-bg-elevated");
            return {
                width: (i != null ? i : s) * g,
                height: (l != null ? l : s) * g,
                type: "canvas",
                data: d || c,
                dotsOptions: {
                    color: v,
                    type: "dots"
                },
                backgroundOptions: {
                    color: k
                },
                cornersSquareOptions: {
                    color: v,
                    type: "extra-rounded"
                },
                cornersDotOptions: {
                    color: v,
                    type: "dot"
                },
                qrOptions: {
                    errorCorrectionLevel: "L"
                }
            }
        }, [i, l, d, u]);
    return O(() => {
        const {
            current: p
        } = r;
        if (!p || !m || !m._canvas) return;
        const g = m._canvas;
        return g.style.width = `${i!=null?i:s}px`, g.style.height = `${l!=null?l:s}px`, p.appendChild(g), () => {
            p.removeChild(g)
        }
    }, [m, i, l]), e("div", {
        ref: r
    })
}

function pe(t, n) {
    const {
        result: o
    } = q(() => z(() =>
        import ("./qr-code-styling-2cbe7021.js").then(s => s.q), ["assets/qr-code-styling-2cbe7021.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js"]), [], {
        auto: !0
    }), a = o == null ? void 0 : o.default;
    return U(() => a && typeof window != "undefined" ? new a(t(window)) : null, [a, ...n])
}

function ge({
    suggestedEmail: t,
    onSend: n
}) {
    const {
        iString: o
    } = S(), a = F(), [s, i] = y((a == null ? void 0 : a.email) || t || ""), [l, d] = y(!1), [r, c] = y(null);
    return e(x, null, e(C, {
        gap: 8,
        style: {
            width: "100%"
        }
    }, e($, {
        justifyContent: "center",
        alignItems: "center",
        gap: 0,
        style: {
            border: "1px solid var(--color-accent-primary)",
            borderRadius: 8
        }
    }, e("input", {
        className: X("pencraft", G.emailInput),
        type: "text",
        value: s,
        onInput: u => i(u.currentTarget.value),
        style: {
            border: "none"
        }
    }), e(P, {
        priority: "primary",
        disabled: l,
        style: {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
        },
        onClick: () => L(this, null, function*() {
            d(!0);
            try {
                yield M("/api/v1/send_app_download_link", {
                    method: "POST",
                    json: {
                        email: s
                    }
                }), c(null), d(!1), n && n(s)
            } catch (u) {
                c("Something went wrong")
            }
        })
    }, o("Email me link"))), r && e(f.B4, {
        align: "center",
        style: {
            color: "red"
        }
    }, r)))
}
const ue = ({
    sentEmail: t,
    closeModal: n
}) => {
    const o = A(),
        {
            iString: a
        } = S(),
        [s, i] = y(!1),
        [l, d] = y(null),
        [r, c] = y(!1),
        u = w(() => {
            c(!1), d(null), i(!1), n()
        }, [n]);
    return e(C, {
        alignItems: "stretch",
        paddingTop: o ? 32 : 0,
        paddingBottom: o ? 0 : 48
    }, !o && e(_, {
        justifyContent: "end",
        alignItems: "center",
        padding: 20,
        paddingBottom: 0
    }, e(N, {
        size: 40,
        onClick: u,
        rounded: !0,
        fill: "borderless",
        "aria-label": "Close"
    }, e(j, {
        size: 20
    }))), e(_, {
        justifyContent: "center",
        alignItems: "center"
    }, o && e("img", {
        src: I("/img/substack-app-icon.png"),
        height: 64,
        width: 64
    })), e(C, {
        padding: 24,
        paddingTop: o ? void 0 : 20,
        paddingBottom: 8,
        gap: 40,
        justifyContent: "center",
        alignItems: "center",
        className: h.modalHeader
    }, e(f.H2, {
        size: 30,
        lineHeight: 36,
        textAlign: "center",
        fontWeight: "heavy"
    }, a("Check your email on your phone")), e(W, {
        src: "/img/cohorts/local_news/plane.png",
        maxWidth: 150
    }), e(f.H3, {
        color: "secondary",
        size: 15,
        lineHeight: 20,
        weight: "medium",
        translated: !0,
        align: "center"
    }, "We've emailed you a link to download the Substack app. Didn't receive an email?", " ", e("a", {
        style: {
            color: "inherit"
        },
        onClick: () => L(void 0, null, function*() {
            if (!(s || r)) {
                i(!0);
                try {
                    yield M("/api/v1/send_app_download_link", {
                        method: "POST",
                        json: {
                            email: t
                        }
                    }), c(!0), d(null)
                } catch (m) {
                    d("Something went wrong")
                }
                i(!1)
            }
        })
    }, "Resend"), "."), e(C, {
        gap: 8,
        alignItems: "center",
        justifyContent: "center",
        style: {
            width: "100%"
        }
    }, e(J, {
        priority: "secondary",
        justifyContent: "center",
        onClick: u,
        style: {
            width: "100%"
        }
    }, a("Sounds good")), l && e(f.B4, {
        align: "center",
        style: {
            color: "red"
        }
    }, l), r && !l && e(f.B4, {
        align: "center",
        translated: !0
    }, "Message Sent"))))
};
export {
    le as A, ie as L, Se as a, ce as b, h as c, Ie as u
};