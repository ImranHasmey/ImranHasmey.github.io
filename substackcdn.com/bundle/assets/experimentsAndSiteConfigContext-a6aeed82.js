var b = Object.defineProperty,
    k = Object.defineProperties;
var A = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty,
    B = Object.prototype.propertyIsEnumerable;
var v = (e, t, s) => t in e ? b(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s,
    c = (e, t) => {
        for (var s in t || (t = {})) _.call(t, s) && v(e, s, t[s]);
        if (m)
            for (var s of m(t)) B.call(t, s) && v(e, s, t[s]);
        return e
    },
    w = (e, t) => k(e, A(t));
import {
    y as r,
    l as u,
    m as g,
    i as d,
    b0 as f,
    b1 as p,
    j as h,
    cy as E,
    gd as D,
    b3 as F,
    bH as U,
    cZ as H
} from "./tracking-376cff7a.js";
import {
    u as S,
    n as L,
    T as i
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    g as M,
    h as Y
} from "./free_email_form.module-135823b4.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2e572ae3-01ac-4bd3-8397-f0a59e6496a1", e._sentryDebugIdIdentifier = "sentry-dbid-2e572ae3-01ac-4bd3-8397-f0a59e6496a1")
    } catch (s) {}
})();

function C(e, t) {
    return [...Array(2 * e.length - 1)].map((s, o) => o % 2 ? t : e[o / 2])
}
const V = ({
        publication: e,
        className: t,
        themed: s = !1,
        utm_source: o
    }) => {
        const a = s ? "pub-tertiary-text" : "tertiary";
        switch (e == null ? void 0 : e.subdomain) {
            case "activisionblizzard":
                return r(j, {
                    className: t,
                    color: a,
                    utm_source: o
                });
            case "demographyunplugged":
                return r(q, {
                    className: t,
                    color: a,
                    utm_source: o
                });
            default:
                return r($, {
                    pub: e,
                    className: t,
                    color: a,
                    utm_source: o
                })
        }
    },
    X = ({
        publication: e
    }) => {
        const {
            iString: t
        } = S();
        if ((e == null ? void 0 : e.subdomain) === "demographyunplugged") return r(d, null, r(i, {
            translated: !0,
            size: 14,
            className: "tos"
        }, "Substack's ", r(n, {
            href: p()
        }, "Privacy"), ",", " ", r(n, {
            href: f()
        }, "Terms"), " and", " ", r(n, {
            href: h()
        }, "Information Collection Notice")), r(i, {
            translated: !0,
            size: 14,
            className: "tos"
        }, "Demography Unplugged's", " ", r(n, {
            href: "https://www.demographyunplugged.com/p/privacy-policy"
        }, "Privacy"), " and", " ", r(n, {
            href: "https://www.demographyunplugged.com/p/terms-of-service"
        }, "Terms")));
        const s = [r(n, {
            href: p()
        }, t("Privacy")), r(n, {
            href: f()
        }, t("Terms")), r(n, {
            href: h()
        }, t("Collection notice"))];
        return (e == null ? void 0 : e.subdomain) === "activisionblizzard" && s.push(r(d, null, "Activision's", " ", r(n, {
            href: "https://www.activisionblizzard.com/legal/privacy-policy"
        }, "Privacy Policy"))), (e == null ? void 0 : e.subdomain) === "demographyunplugged" && (s.push(r(d, null, "Demography Unplugged's", " ", r(n, {
            href: "https://www.demographyunplugged.com/p/privacy-policy"
        }, "Privacy Policy"))), s.push(r(d, null, "Demography Unplugged's", " ", r(n, {
            href: "https://www.demographyunplugged.com/p/terms-of-service"
        }, "Terms")))), r(d, null, C(s, r("span", null, " ∙ ")))
    },
    $ = ({
        pub: e,
        className: t,
        color: s,
        utm_source: o
    }) => {
        const {
            iString: a
        } = S(), {
            getSettingFor: I
        } = L(), x = I("custom_tos_and_privacy");
        let l = null;
        return x && (e.has_custom_tos && e.has_custom_privacy ? l = r(i, {
            as: "span",
            translated: !0
        }, "the publisher's ", r(n, {
            href: g({
                pub: e,
                utm_source: o
            })
        }, "Terms of Service"), " ", "and ", r(n, {
            href: u({
                pub: e,
                utm_source: o
            })
        }, "Privacy Policy")) : e.has_custom_tos ? l = r(i, {
            as: "span",
            translated: !0
        }, "the publisher's ", r(n, {
            href: g({
                pub: e,
                utm_source: o
            })
        }, "Terms of Service")) : e.has_custom_privacy && (l = r(i, {
            as: "span",
            translated: !0
        }, "the publisher's ", r(n, {
            href: u({
                pub: e,
                utm_source: o
            })
        }, "Privacy Policy")))), r(i.B3, {
            size: 14,
            color: s,
            className: t != null ? t : "tos"
        }, a("By registering you agree to"), " ", [l && r(d, null, l, ", "), r(i, {
            as: "span",
            translated: !0
        }, "Substack's ", r(n, {
            href: f({
                utm_source: o
            })
        }, "Terms of Service")), r(i, {
            as: "span",
            translated: !0
        }, ", our ", r(n, {
            href: p({
                utm_source: o
            })
        }, "Privacy Policy")), r(i, {
            as: "span",
            translated: !0
        }, ", and our ", r(n, {
            href: h({
                utm_source: o
            })
        }, "Information Collection Notice"))])
    },
    j = ({
        className: e,
        color: t,
        utm_source: s
    }) => r(i.B3, {
        translated: !0,
        size: 14,
        color: t,
        className: e != null ? e : "tos"
    }, "By registering you agree to Substack's", " ", r(n, {
        href: f({
            utm_source: s
        })
    }, "Terms of Service"), ", our", " ", r(n, {
        href: p({
            utm_source: s
        })
    }, "Privacy Policy"), ", our", " ", r(n, {
        href: h({
            utm_source: s
        })
    }, "Information Collection Notice"), ", and Activision's", " ", r(n, {
        href: "https://www.activisionblizzard.com/legal/privacy-policy"
    }, "Privacy Policy")),
    q = ({
        className: e,
        color: t,
        utm_source: s
    }) => r("div", {
        className: e != null ? e : "tos"
    }, r(i.B3, {
        translated: !0,
        size: 14,
        color: t
    }, "By registering you agree to Substack's", " ", r(n, {
        href: f({
            utm_source: s
        })
    }, "Terms of Service"), ", our", " ", r(n, {
        href: p({
            utm_source: s
        })
    }, "Privacy Policy"), ", our", " ", r(n, {
        href: h({
            utm_source: s
        })
    }, "Information Collection Notice"), "."), r(i.B3, {
        translated: !0,
        size: 14,
        color: t
    }, "You also agree to receive marketing emails from Hedgeye Risk Management, LLC pursuant to its", " ", r(n, {
        href: "https://www.demographyunplugged.com/p/privacy-policy"
    }, "Privacy Policy"), " and", " ", r(n, {
        href: "https://www.demographyunplugged.com/p/terms-of-service"
    }, "Terms of Service"), "."), r(i.B3, {
        translated: !0,
        size: 14,
        color: t
    }, "You may unsubscribe at any time by clicking the unsubscribe link in one of the emails.")),
    N = ({
        pub: e
    }) => {
        const t = [];
        return e.has_custom_privacy && t.push(r(n, {
            href: u({
                pub: e
            })
        }, "Publisher Privacy")), e.has_custom_tos && t.push(r(n, {
            href: g({
                pub: e
            })
        }, "Publisher Terms")), r("div", null, r(i.B3, {
            size: 14,
            color: "tertiary"
        }, C(t, r("span", null, " ∙ "))))
    },
    n = ({
        children: e,
        href: t
    }) => r("a", {
        href: t,
        target: "_blank",
        rel: "noopener noreferrer"
    }, e),
    T = typeof window != "undefined" && window._preloads || Y;
var P;
const G = typeof window != "undefined" ? (P = window._preloads) == null ? void 0 : P.siteConfigs : {},
    z = (e, t) => c(c({}, M(e, t)), D(e)),
    y = E(z(G, T));
y.displayName = "ExperimentsAndSiteConfigContext";

function K({
    siteConfigs: e = {},
    experimentInfo: t,
    children: s
}) {
    const o = t || T,
        a = F(() => z(e, o), [e, o]);
    return r(y.Provider, {
        value: a
    }, s)
}

function O() {
    return H(y)
}
const ee = e => {
    const t = U((s, o) => {
        const a = O();
        return r(e, w(c(c({}, a), s), {
            ref: o
        }))
    });
    return t.displayName = `withExperimentsAndSiteConfigContext(${e.displayName||e.name||"Anonymous"})`, t
};
export {
    N as C, y as E, V as I, X as T, K as a, ee as w
};