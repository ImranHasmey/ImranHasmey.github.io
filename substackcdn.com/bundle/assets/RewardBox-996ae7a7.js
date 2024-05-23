import {
    y as a
} from "./tracking-376cff7a.js";
import {
    u as i,
    T as n,
    F as l,
    a as c
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    R as t,
    S as p
} from "./ReaderReferralTiers-be527730.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            o = new Error().stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "846d9cc1-05cb-4676-95d4-aab8780e92e2", e._sentryDebugIdIdentifier = "sentry-dbid-846d9cc1-05cb-4676-95d4-aab8780e92e2")
    } catch (r) {}
})();
const b = "_rewardBox_3zpeh_1",
    u = {
        rewardBox: b
    },
    g = ({
        isSelected: e,
        tier: o
    }) => {
        const {
            iString: r,
            iTemplate: d,
            iPlural: s
        } = i(), m = {
            [t.CompOneMonth]: r("1 month comp"),
            [t.CompThreeMonths]: r("3 month comp"),
            [t.CompSixMonths]: r("6 month comp"),
            [t.CompNineMonths]: r("9 month comp"),
            [t.CompTwelveMonths]: r("12 month comp"),
            [t.Custom]: r("Custom")
        };
        return a(c, {
            className: u.rewardBox,
            border: "detail-themed",
            radius: "md",
            justifyContent: "space-between",
            alignItems: "center",
            flex: "grow",
            paddingTop: {
                desktop: 20,
                mobile: 20
            },
            paddingBottom: {
                desktop: 8,
                mobile: 8
            },
            paddingX: {
                desktop: 8,
                mobile: 8
            },
            sizing: "border-box",
            style: {
                borderColor: e ? "var(--color-accent-themed)" : void 0
            }
        }, a(l, {
            gap: 4,
            alignItems: "center"
        }, new Array(o.display_order).fill(0).map(() => a(p, {
            size: 20,
            fill: "var(--color-accent-themed)",
            stroke: "var(--color-accent-themed)"
        }))), a(n.H4, {
            weight: "bold",
            font: "pub-headings",
            color: "pub-primary-text",
            textAlign: "center",
            textWrap: "balance"
        }, o.reward_type === "custom" ? o.reward_description : m[o.reward_type]), a(n.Meta, {
            weight: "semibold",
            style: {
                color: e ? "var(--color-accent-themed)" : void 0
            }
        }, e ? d `You're here!` : s("1 Referral", "%1 Referrals", o.num_referrals_required)))
    };
export {
    g as R
};