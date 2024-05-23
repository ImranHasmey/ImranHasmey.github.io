import {
    H as I,
    h as y,
    o as v,
    p as N,
    t as i,
    E as d,
    y as a
} from "./tracking-376cff7a.js";
import {
    u as S,
    b as h,
    a as C,
    T as m,
    F as O,
    O as f
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    q as W
} from "./transition-c6a4911b.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4581fd40-a187-4922-81cb-9eb32e8df187", e._sentryDebugIdIdentifier = "sentry-dbid-4581fd40-a187-4922-81cb-9eb32e8df187")
    } catch (l) {}
})();
const E = "_animationWrapper_trj0v_1",
    F = "_wrapper_trj0v_9",
    j = "_secondaryText_trj0v_23",
    D = "_primaryText_trj0v_27",
    H = "_typoHandler_trj0v_31",
    G = "_buttonWrapper_trj0v_38",
    s = {
        animationWrapper: E,
        wrapper: F,
        secondaryText: j,
        primaryText: D,
        typoHandler: H,
        buttonWrapper: G
    },
    B = ({
        emailSuggestions: e,
        currentEmail: t,
        onAccept: l,
        onReject: _
    }) => {
        const w = I(),
            [u, o] = y(!1),
            [n, b] = y(null),
            g = v(null),
            T = r => {
                o(!1), i(d.EMAIL_TYPO_SUGGESTION_REJECTED, {
                    email_provided: t,
                    email_suggested: r
                }), _ && _()
            },
            c = e && t && e[t] && e[t] != t.trim(),
            x = r => {
                o(!1), i(d.EMAIL_TYPO_SUGGESTION_ACCEPTED, {
                    email_provided: t,
                    email_suggested: r
                }), l(r)
            };
        N(() => {
            if (c) {
                const r = e[t];
                i(d.EMAIL_TYPO_SUGGESTION_SHOWN, {
                    email_provided: t,
                    email_suggested: r
                }), b(r), o(!0)
            } else o(!1)
        }, [c, e, t]);
        const {
            iString: p
        } = S();
        return a("div", {
            className: s.animationWrapper
        }, a(W, {
            show: u,
            enter: "tw-transition-all tw-duration-fast transform-gpu",
            enterFrom: "tw-opacity-0 tw-translate-y-[-40%]",
            enterTo: "tw-opacity-100 tw-translate-y-0",
            leave: "tw-transition-all tw-duration-fast transform-gpu",
            leaveFrom: "tw-opacity-100 tw-translate-y-0",
            leaveTo: "tw-opacity-0 tw-translate-y-[-40%]",
            ref: g
        }, a(h, {
            className: s.wrapper,
            paddingTop: 16,
            paddingX: {
                mobile: 16
            },
            alignItems: "start"
        }, a(C, {
            className: s.typoHandler,
            border: "detail",
            paddingY: 24,
            paddingX: 20,
            radius: "sm",
            alignItems: "start",
            gap: 20
        }, a(m.B3, {
            translated: !0,
            className: s.secondaryText
        }, "Did you mean", " ", a(m, {
            as: "span",
            weight: "semibold",
            className: s.primaryText
        }, I18N.p(n || "")), "?"), a(O, {
            justifyContent: "space-between",
            flex: "grow",
            gap: 12,
            className: s.buttonWrapper
        }, a(f, {
            onClick: () => x(n),
            priority: "primary-theme"
        }, p(w ? "Yes" : "Yes, Subscribe with correction")), a(f, {
            grow: !0,
            fill: "empty",
            priority: "secondary",
            onClick: () => T(n)
        }, p("No")))))))
    };
export {
    B as EmailTypoHandler
};