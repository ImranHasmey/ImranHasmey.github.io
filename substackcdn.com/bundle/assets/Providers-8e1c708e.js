import {
    P as w
} from "./profile-a781fd85.js";
import {
    cy as m,
    a$ as R,
    h as p,
    p as v,
    b3 as b,
    y as e,
    i as P,
    cZ as _,
    ap as U,
    aq as V
} from "./tracking-376cff7a.js";
import {
    aT as F,
    aU as G,
    aV as q
} from "./homepage_hooks-47e7a4e7.js";
import {
    E as L
} from "./free_email_form.module-135823b4.js";
import {
    a as A
} from "./experimentsAndSiteConfigContext-a6aeed82.js";
import {
    L as S,
    _ as g,
    U as B
} from "./user-e16f1619.js";
import {
    M as c
} from "./mousetrap-d052d743.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    I as N,
    e as $
} from "./FlexBox-1a755411.js";
import {
    P as z,
    L as Z
} from "./publicationUserSettings-f18fba64.js";
import {
    N as j,
    e as H
} from "./Portal-f12cb990.js";
import {
    P as J
} from "./postPingbackTracker-c6b6d289.js";
import {
    P as K
} from "./publication-6fec99b2.js";
import {
    T as Q
} from "./free_email_form-1d3fc4be.js";
import {
    a as W
} from "./HoverCard-cbdee1d2.js";
import {
    ac as X,
    ao as Y
} from "./ProfileHoverCard-c8bfb61a.js";
(function() {
    try {
        var o = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            r = new Error().stack;
        r && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[r] = "57a7cb7e-8ec8-43be-862c-c147c8961b1d", o._sentryDebugIdIdentifier = "sentry-dbid-57a7cb7e-8ec8-43be-862c-c147c8961b1d")
    } catch (i) {}
})();

function _e() {
    return _(h)
}
const h = m({
    open: () => {},
    enabled: !1
});

function ee({
    children: o,
    load: r,
    pub: i,
    enableShortcuts: t = !0
}) {
    const {
        getConfigFor: a
    } = R(), s = !!a("enable_client_publication_search_cache"), [d, n] = p(!1);
    v(() => {
        if (!s || !r || !i) return;
        const l = () => n(!0);
        if (t) return c.bind(["/", "command+k"], l), () => {
            c.unbind(["/", l]), c.unbind(["command+k", l])
        }
    }, [s]);
    const u = b(() => ({
        open: () => n(!0),
        enabled: s
    }), []);
    return !s || !r || !i ? e(P, null, o) : e(h.Provider, {
        value: u
    }, o, e(S, {
        module: "@/frontend/substack/search/PublicationSearch",
        resolve: l => l.PublicationSearch,
        onRequest: () => g(() =>
            import ("./PublicationSearch-5df8984c.js"), ["assets/PublicationSearch-5df8984c.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/groupBy-ab90e519.js", "assets/_baseAssignValue-2cb42459.js", "assets/_defineProperty-105d261c.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/react-laag.esm-f47be925.js", "assets/transition-c6a4911b.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/_createAggregator-deb99b9c.js", "assets/_baseEach-63ad03e0.js", "assets/x-fc38e969.js", "assets/HoverCard-cbdee1d2.js", "assets/useResponsive-08e338a7.js", "assets/HoverCard-41ea4b50.css", "assets/_baseIteratee-fbbabc87.js", "assets/CloseIcon-90eee5fe.js", "assets/_baseEach-6c7a4143.css", "assets/SearchModal-799c4145.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/Modal-ab851ad1.js", "assets/Modal-faa641cb.css", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/UserBadge-a694a663.js", "assets/profile-a781fd85.js", "assets/UserBadge-fb9c174e.css", "assets/ProfileHoverCard-c8bfb61a.js", "assets/Menu-5342012d.js", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/combobox-8973faf2.js", "assets/Switch-b8853cbf.js", "assets/preflight-1c24e477.js", "assets/search-166a516b.js", "assets/align-left-a2ee54ed.js", "assets/SearchModal-7abe0431.css", "assets/ChatZero-70900bcb.js", "assets/util-2304c03b.js", "assets/PublicationSearch-24228c5a.css"]),
        isOpen: d,
        onClose: () => n(!1),
        pub: i
    }))
}

function Se() {
    return _(C)
}
const C = m({
    open: () => {}
});

function oe({
    children: o,
    load: r
}) {
    const [i, t] = p(!1), a = !!U("enable_global_search");
    v(() => {
        if (!a || !r) return;
        const n = u => {
            u.preventDefault(), t(!0)
        };
        return c.bind(["/", "command+k"], n), () => {
            c.unbind(["/", n]), c.unbind(["command+k", n])
        }
    }, [a, r]);
    const s = b(() => ({
            open: () => {
                a && r && t(!0)
            }
        }), [a, r]),
        d = () => t(!1);
    return !a || !r ? e(P, null, o) : e(C.Provider, {
        value: s
    }, o, e(S, {
        module: "@/frontend/substack/GlobalSearch",
        resolve: n => n.GlobalSearch,
        onRequest: () => g(() =>
            import ("./GlobalSearch-9e0e68ea.js"), ["assets/GlobalSearch-9e0e68ea.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/SearchModal-799c4145.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/Modal-ab851ad1.js", "assets/CloseIcon-90eee5fe.js", "assets/useResponsive-08e338a7.js", "assets/transition-c6a4911b.js", "assets/Modal-faa641cb.css", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/UserBadge-a694a663.js", "assets/react-laag.esm-f47be925.js", "assets/profile-a781fd85.js", "assets/Tooltip-86d56346.js", "assets/Tooltip-d0af0cf2.css", "assets/UserBadge-fb9c174e.css", "assets/_defineProperty-105d261c.js", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/ProfileHoverCard-c8bfb61a.js", "assets/HoverCard-cbdee1d2.js", "assets/x-fc38e969.js", "assets/HoverCard-41ea4b50.css", "assets/Menu-5342012d.js", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/combobox-8973faf2.js", "assets/Switch-b8853cbf.js", "assets/preflight-1c24e477.js", "assets/search-166a516b.js", "assets/align-left-a2ee54ed.js", "assets/SearchModal-7abe0431.css", "assets/uniqBy-ecd7ee81.js", "assets/_baseIteratee-fbbabc87.js", "assets/_baseUniq-53539133.js", "assets/util-2304c03b.js", "assets/history-24beb3b9.js"]),
        isOpen: i,
        onClose: d
    }))
}

function ge({
    user: o = null,
    pub: r = null,
    children: i = void 0,
    siteConfigs: t = {},
    hasThemedBackground: a = !1,
    language: s = "en",
    preferredLanguage: d = null,
    country: n = void 0,
    experimentInfo: u = {
        variantOverrides: {},
        experimentFeatures: {},
        experimentExposures: {}
    },
    portalRoot: l = void 0,
    shouldLoad: f = void 0,
    shouldPollNotifications: x = !1,
    publicationSettings: y = {},
    userSettings: M = void 0,
    publicationUserSettings: k = {},
    activityToken: D,
    loadPubClientSearch: E,
    enablePubClientSearchShortcuts: I = !0,
    loadGlobalSearch: O
}) {
    f === void 0 && (f = !!o);
    const T = X(!!o);
    return e(Z, {
        country: n || "US"
    }, e(N, {
        language: s || "en",
        preferredLanguage: d
    }, e(Q, {
        value: {
            hasThemedBackground: a
        }
    }, e(V, {
        siteConfigs: t
    }, e(L, {
        siteConfigs: t,
        experimentInfo: u
    }, e(A, {
        siteConfigs: t,
        experimentInfo: u
    }, e($, {
        settings: y
    }, e(z, {
        preloadPubUserSettings: k
    }, e(j, {
        shouldLoad: f,
        shouldPoll: x,
        activityToken: D
    }, e(H, {
        root: l
    }, e(B, {
        defaultValue: o,
        userSettings: M
    }, e(w, null, e(W, null, e(F, null, e(Y.Provider, {
        value: T
    }, e(G, null, e(q, null, e(K.Provider, {
        value: r
    }, e(oe, {
        load: O
    }, e(ee, {
        load: E,
        pub: r,
        enableShortcuts: I
    }, e(J, null, i)))))))))))))))))))))
}
export {
    ge as P, h as S, _e as a, Se as u
};