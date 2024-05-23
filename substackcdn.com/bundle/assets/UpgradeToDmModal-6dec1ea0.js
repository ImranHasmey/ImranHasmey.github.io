import {
    p as f,
    t as l,
    E as g,
    aL as S,
    y as s,
    i as I
} from "./tracking-376cff7a.js";
import {
    u as D,
    o as w,
    a as _,
    B as M,
    T as m,
    O as y
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    b as T,
    M as B
} from "./Modal-ab851ad1.js";
import {
    L as R
} from "./homepage_hooks-47e7a4e7.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            a = new Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0e0b9012-4292-472a-8545-c035f263a15a", e._sentryDebugIdIdentifier = "sentry-dbid-0e0b9012-4292-472a-8545-c035f263a15a")
    } catch (r) {}
})();
const C = e => e ? e.includes("free_subscribers") ? "free_subscribers" : e.includes("paid_subscribers") ? "paid_subscribers" : e.includes("founding_subscribers") ? "founding_subscribers" : null : null,
    U = e => {
        switch (e) {
            case "free_subscribers":
                return "Subscribers";
            case "paid_subscribers":
                return "Paid subscribers";
            case "founding_subscribers":
                return "Founding members"
        }
    },
    P = ({
        isOpen: e,
        onClose: a,
        profile: r,
        dmUpgradeOptions: p,
        isEditor: c = !1
    }) => {
        const {
            iString: t
        } = D();
        f(() => {
            l(g.DIRECT_MESSAGE_WRITER_UPSELL_MODAL_SEEN, {
                subscribeButtonShown: b
            })
        }, []);
        const u = r,
            i = u == null ? void 0 : u.primaryPublication,
            d = C(p),
            n = d ? U(d) : null,
            b = n && (c || !c && i),
            E = d === "founding_subscribers" ? {
                plan: "founding",
                utm_source: "direct-message-writer"
            } : void 0,
            L = !c && i ? S(i, {
                addBase: !c,
                params: E
            }) : S({}, {
                addBase: !1,
                params: E
            }),
            o = w({
                width: 200
            });
        return s(B, {
            isOpen: e,
            onClose: a
        }, s(T, null, s(_, {
            gap: 16,
            alignItems: "center"
        }, s(M, {
            bg: "secondary",
            radius: "full",
            padding: 16
        }, s(R, {
            size: 32
        })), s(_, {
            gap: 8,
            alignItems: "center",
            padding: 8
        }, !!n && s(m.B1, null, n, " only"), !!n && s(m.B3, {
            color: "secondary",
            align: "center"
        }, t(`${r==null?void 0:r.name} only accepts messages from ${n==null?void 0:n.toLowerCase()}`)), !n && s(m.B3, {
            color: "secondary",
            align: "center"
        }, t(`${r==null?void 0:r.name} is not currently accepting message invites`))), s(_, {
            gap: 8,
            alignItems: "center",
            padding: 8
        }, b && s(I, null, s(y, {
            className: o,
            priority: "primary",
            href: L,
            newTab: !0
        }, r != null && r.isSubscribed ? t("Upgrade") : t("Subscribe")), s(y, {
            className: o,
            onClick: () => {
                l(g.DIRECT_MESSAGE_WRITER_UPSELL_MODAL_MAYBE_LATER_CLICKED), a()
            },
            priority: "secondary"
        }, t("Maybe later"))), !b && s(y, {
            className: o,
            onClick: () => {
                l(g.DIRECT_MESSAGE_WRITER_UPSELL_MODAL_OKAY_CLICKED), a()
            },
            priority: "secondary"
        }, t("Okay"))))))
    };
export {
    P as U
};