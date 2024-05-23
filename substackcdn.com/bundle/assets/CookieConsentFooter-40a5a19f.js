var $ = Object.defineProperty,
    q = Object.defineProperties;
var Q = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var X = Object.prototype.hasOwnProperty,
    Z = Object.prototype.propertyIsEnumerable;
var G = (o, s, t) => s in o ? $(o, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[s] = t,
    I = (o, s) => {
        for (var t in s || (s = {})) X.call(s, t) && G(o, t, s[t]);
        if (v)
            for (var t of v(s)) Z.call(s, t) && G(o, t, s[t]);
        return o
    },
    H = (o, s) => q(o, Q(s));
var S = (o, s, t) => new Promise((n, i) => {
    var p = r => {
            try {
                l(t.next(r))
            } catch (c) {
                i(c)
            }
        },
        k = r => {
            try {
                l(t.throw(r))
            } catch (c) {
                i(c)
            }
        },
        l = r => r.done ? n(r.value) : Promise.resolve(r.value).then(p, k);
    l((t = t.apply(o, s)).next())
});
import {
    h as N,
    p as j,
    t as d,
    E,
    y as e,
    fW as z
} from "./tracking-376cff7a.js";
import {
    u as h,
    O as g,
    a as T,
    T as _,
    F as ee,
    b as oe
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    u as V
} from "./user-e16f1619.js";
import {
    u as W,
    T as K
} from "./HoverCard-cbdee1d2.js";
import {
    A as se,
    C as te,
    a as A,
    b as B
} from "./cookie_constants-def411e9.js";
import {
    C as O,
    a as ae,
    b as M,
    P as ne
} from "./entry-a965ffeb.js";
import {
    M as re,
    C as ie
} from "./_baseEach-63ad03e0.js";
import {
    b as le,
    a as ce,
    M as de
} from "./Modal-ab851ad1.js";
import {
    T as Ee
} from "./Tooltip-86d56346.js";
import {
    T as Ce,
    a as F
} from "./TabBar-a04beb26.js";
import {
    I as ue
} from "./info-e9da097c.js";
(function() {
    try {
        var o = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            s = new Error().stack;
        s && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[s] = "86dcc171-2ba8-4804-a5fb-d2bd7bced1ca", o._sentryDebugIdIdentifier = "sentry-dbid-86dcc171-2ba8-4804-a5fb-d2bd7bced1ca")
    } catch (t) {}
})();
const _e = "_rowBorderBottom_1klhe_1",
    ke = "_table_1klhe_5",
    pe = "_modal_1klhe_12",
    me = "_noGrow_1klhe_23",
    Oe = "_grow_1klhe_27",
    be = "_cellPadding_1klhe_33",
    u = {
        rowBorderBottom: _e,
        table: ke,
        modal: pe,
        noGrow: me,
        grow: Oe,
        cellPadding: be
    },
    fe = ({
        open: o,
        onSubdomain: s,
        close: t
    }) => {
        const [n, i] = N(s ? O.PUBLISHER : O.SUBSTACK), [p, k] = N(!1), [l, r] = N(new Set), {
            popToast: c
        } = W(), {
            iString: C
        } = h(), {
            language: w
        } = h(), y = se(w), {
            refetch: Y
        } = V({
            pathname: "/api/v1/cookie_preferences",
            method: "POST"
        });
        j(() => {
            o && d(E.COOKIE_MANAGEMENT_MODAL_SEEN, {})
        }, [o]);
        const P = m => S(void 0, [m], function*({
                substackDisabledCookies: a,
                pubDisabledCookies: b
            }) {
                z.set(M.HIDE_COOKIE_BANNER, new Date().toJSON(), {
                    expires: 365 * 24 * 60 * 60 * 1e3
                }), yield Y({
                    json: {
                        pubDisabledCookies: b,
                        substackDisabledCookies: a
                    }
                })
            }),
            D = () => S(void 0, null, function*() {
                const a = Array.from(l),
                    b = Object.values(ne),
                    m = Object.values(M);
                let R = [],
                    x = [];
                p && (R = a.filter(f => m.includes(f)), x = a.filter(f => b.includes(f))), yield P({
                    substackDisabledCookies: R,
                    pubDisabledCookies: x
                }), d(E.COOKIE_PREFERENCES_SET, {
                    disabledCookies: a
                }), d(E.COOKIE_MANAGEMENT_MODAL_SUBMITTED, {
                    disabledCookies: a
                }), c(f => e(K, I({
                    text: C("Preferences saved")
                }, f))), window.location.reload(), t()
            }),
            J = () => S(void 0, null, function*() {
                yield P({
                    substackDisabledCookies: A,
                    pubDisabledCookies: B
                }), d(E.COOKIE_PREFERENCES_SET, {
                    disabledCookies: [...A, ...B]
                }), d(E.COOKIE_MANAGEMENT_MODAL_SUBMITTED, {
                    disabledCookies: [...A, ...B]
                }), c(a => e(K, I({
                    text: C("Preferences saved")
                }, a))), window.location.reload(), t()
            }),
            L = a => {
                p || k(!0), r(b => {
                    const m = new Set(b);
                    return m.has(a) ? m.delete(a) : m.add(a), m
                }), d(E.COOKIE_MANAGEMENT_MODAL_COOKIE_TOGGLED, {
                    cookie: a
                })
            };
        return e(de, {
            isOpen: o,
            onClose: D,
            className: u.modal
        }, e(ce, {
            className: u.noGrow,
            includeClose: !0,
            onClose: () => {
                d(E.COOKIE_MANAGEMENT_MODAL_DISMISSED, {}), D()
            },
            title: e(_.H2, null, C("Cookie Preferences"))
        }), e(le, {
            className: u.grow
        }, e(T, {
            flex: "fill",
            gap: 8
        }, s && e(Ce, {
            style: {
                zIndex: "25"
            }
        }, e(F, {
            value: O.PUBLISHER,
            currentValue: n,
            onClick: i
        }, e(_.B2, {
            translated: !0
        }, "Publisher")), e(F, {
            value: O.SUBSTACK,
            currentValue: n,
            onClick: i
        }, e(_.B2, {
            translated: !0
        }, "Substack"))), e(T, {
            flex: "fill"
        }, n === "publisher" && e(U, {
            cookies: y.filter(a => a.owner === O.PUBLISHER),
            disabledCookies: l,
            toggleState: L
        }), n === "substack" && e(U, {
            cookies: y.filter(a => a.owner === O.SUBSTACK),
            disabledCookies: l,
            toggleState: L
        })))), e(re, {
            className: u.noGrow,
            primaryButton: e(g, {
                onClick: D
            }, l.size > 0 ? C("Save preferences") : C("Accept All")),
            secondaryButton: e(g, {
                onClick: J
            }, C("Reject all"))
        }))
    },
    U = ({
        cookies: o,
        disabledCookies: s,
        toggleState: t
    }) => e("table", {
        className: u.table
    }, e("tbody", null, o.map(n => e(Ie, H(I({}, n), {
        onToggle: () => t(n.id),
        enabled: !s.has(n.id)
    }))))),
    Ie = ({
        name: o,
        type: s,
        description: t,
        enabled: n,
        onToggle: i
    }) => e("tr", {
        key: o,
        className: u.rowBorderBottom
    }, e("td", {
        className: u.cellPadding
    }, e(T, {
        gap: 2,
        alignItems: "start"
    }, e(_.B4, null, o), e(Se, {
        cookieType: s
    }))), e("td", {
        className: u.cellPadding
    }, e(_.B5, null, t)), e("td", {
        className: u.cellPadding
    }, s !== ae.NECESSARY && e(ie, {
        checked: n,
        onChange: i
    }))),
    Se = ({
        cookieType: o
    }) => {
        const {
            language: s
        } = h(), t = te(s);
        return e(Ee, {
            text: t[o]
        }, e(ee, {
            justifyContent: "start",
            alignItems: "center",
            gap: 4
        }, e(_.Meta, null, o), e(ue, {
            size: 16,
            color: "#888888"
        })))
    },
    Ne = "_cookieBanner_t11f1_1",
    ge = "_cookieBannerHide_t11f1_13",
    Te = {
        cookieBanner: Ne,
        cookieBannerHide: ge
    },
    Ge = ({
        onSubdomain: o
    }) => {
        const [s, t] = N(!1), [n, i] = N(!1), {
            popToast: p
        } = W(), {
            iString: k
        } = h(), {
            refetch: l
        } = V({
            pathname: "/api/v1/cookie_preferences",
            method: "POST"
        });
        j(() => {
            d(E.COOKIE_BANNER_SEEN, {})
        }, []);
        const r = c => S(void 0, null, function*() {
            const C = c ? [] : A,
                w = c ? [] : B;
            z.set(M.HIDE_COOKIE_BANNER, new Date().toJSON(), {
                expires: 365 * 24 * 60 * 60 * 1e3
            }), yield l({
                json: {
                    pubDisabledCookies: w,
                    substackDisabledCookies: C
                }
            }), d(E.COOKIE_BANNER_CLICKED, {
                acceptAll: c
            }), d(E.COOKIE_PREFERENCES_SET, {
                disabledCookies: [...C, ...w]
            }), i(!0), p(y => e(K, I({
                text: k("Cookie preferences saved")
            }, y))), window.location.reload()
        });
        return e("div", null, !n && e(T, {
            className: Te.cookieBanner,
            alignItems: "center"
        }, e(T, {
            alignItems: "center",
            gap: {
                mobile: 4,
                desktop: 8
            },
            padding: 4
        }, e(_.H4, {
            translated: !0
        }, "Cookie Policy"), e(_.B5, {
            translated: !0,
            style: {
                paddingRight: "16px"
            }
        }, "We use necessary cookies to make our site work. With your consent, we also set performance and functionality cookies that help us make improvements by measuring traffic on our site and we process respective personal data. You can withdraw your consent at any time. For more detailed information about the cookies, your personal data and your rights, please see our", " ", e(_.B5, {
            decoration: "underline",
            as: "a",
            href: "https://substack.com/tos"
        }, "privacy policy"), "."), e(oe, {
            gap: {
                mobile: 12,
                desktop: 6
            },
            direction: {
                mobile: "column",
                desktop: "row"
            }
        }, e(g, {
            priority: "secondary",
            onClick: () => {
                t(!0), i(!0)
            },
            size: "sm"
        }, k("Manage Cookies")), e(g, {
            priority: "secondary",
            onClick: () => r(!1),
            size: "sm"
        }, k("Only Necessary")), e(g, {
            priority: "primary",
            onClick: () => r(!0),
            size: "sm"
        }, k("Accept all"))))), e(fe, {
            onSubdomain: o,
            open: s,
            close: () => {
                t(!1)
            }
        }))
    };
export {
    Ge as C
};