var g = (a, t, o) => new Promise((r, u) => {
    var i = s => {
            try {
                c(o.next(s))
            } catch (n) {
                u(n)
            }
        },
        l = s => {
            try {
                c(o.throw(s))
            } catch (n) {
                u(n)
            }
        },
        c = s => s.done ? r(s.value) : Promise.resolve(s.value).then(i, l);
    c((o = o.apply(a, t)).next())
});
import {
    p as _,
    y as e,
    D as T,
    fe as k,
    aF as P,
    U as p,
    h2 as v,
    b2 as h,
    aP as S
} from "./tracking-376cff7a.js";
import {
    r as x
} from "./_baseEach-63ad03e0.js";
import {
    r as C
} from "./routeClick-cd1b3f9b.js";
import {
    u as R,
    B as y
} from "./HoverCard-cbdee1d2.js";
import {
    a as f,
    F as I,
    T as m
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    X as U
} from "./x-fc38e969.js";
(function() {
    try {
        var a = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[t] = "be8cb9af-959d-4dc9-9e91-04646f4dd01f", a._sentryDebugIdIdentifier = "sentry-dbid-be8cb9af-959d-4dc9-9e91-04646f4dd01f")
    } catch (o) {}
})();
const F = "_wrapper_1pltb_1",
    L = "_headerRow_1pltb_20",
    D = "_header_1pltb_20",
    d = {
        wrapper: F,
        headerRow: L,
        header: D
    },
    V = (a, t, o, r, u) => {
        if (!t) return null;
        switch (a) {
            case "post-login":
                return t.profile_set_up_at ? {
                    title: "Your account is now set up",
                    body: "You now have a profile and are able to leave comments on all of your subscriptions.",
                    ctaText: "Check out profile",
                    ctaLink: h(t, {
                        utm_source: p.profileToast,
                        noBase: o
                    }),
                    ctaVariant: "secondary"
                } : null;
            case "post-subscribe-prompt":
                return r ? {
                    title: "Finish setting up your account",
                    body: "Tell us more about yourself and find more things to read, so you can participate in the community",
                    ctaText: "Finish setting up",
                    ctaLink: S({
                        isAbbreviated: !0,
                        redirect: document.location.href,
                        postRedirectToast: "post-subscribe-success",
                        pubId: r ? r.id : null
                    }),
                    ctaVariant: "themed-primary"
                } : null;
            case "post-subscribe-success":
                return !r || !t.profile_set_up_at ? null : {
                    title: `Welcome to ${r?r.name:""}`,
                    body: e("span", null, "You will start receiving updates in your inbox. You can also read the", " ", e("a", {
                        href: r ? v(r) : null
                    }, "full archives"), " in the website or check out your profile."),
                    ctaText: "Check out profile",
                    ctaLink: h(t, {
                        utm_source: p.profileToast,
                        noBase: o
                    }),
                    ctaVariant: "secondary"
                };
            case "start-writing":
                return {
                    title: e(f, {
                        alignItems: "center"
                    }, e("img", {
                        width: 195,
                        src: T("/img/reader_onboarding/jobpage_penholder.png", 195)
                    }), e(m.H3, {
                        align: "center"
                    }, "Want to start writing on Substack?")),
                    body: e(m.B3, {
                        align: "center",
                        paddingBottom: 20
                    }, e("span", null, "Congrats on subscribing to your ", k(u), " Substack! Start your own", " ", e("b", null, "in 5 minutes or less"))),
                    ctaText: "Start Writing",
                    ctaLink: P({
                        utm_source: p.profileToast
                    }),
                    ctaVariant: "themed-primary"
                };
            default:
                return null
        }
    };

function H({
    user: a,
    pub: t = null,
    noBase: o = !1
}) {
    const r = R();
    return _(() => {
        function u() {
            return g(this, null, function*() {
                yield x.put("/api/v1/user-setting").send({
                    type: "has_seen_reader_to_writer_upsell",
                    value_bool: !0
                })
            })
        }
        const i = new URL(location.toString()),
            l = i.searchParams.get("profile-setup-message");
        if (!l) return;
        const c = l === "start-writing" ? Number(i.searchParams.get("nthPub")) : void 0;
        if (i.searchParams.delete("nthPub"), i.searchParams.delete("profile-setup-message"), history.replaceState({}, "", i), !(l !== "post-subscribe-prompt")) return;
        const n = V(l, a, o, t, c);
        n && (l === "start-writing" && u(), r.popToast(({
            onClose: b
        }) => e(f, {
            className: d.wrapper,
            justifyContent: "space-between"
        }, e(f, {
            gap: 8
        }, e(I, {
            className: d.headerRow,
            justifyContent: "space-between",
            alignItems: "center"
        }, e(y, {
            look: "flex",
            onClick: b
        }, e(U, {
            size: 20
        }))), e(m.H3, {
            className: d.header
        }, n.title), n.body), e(y, {
            variant: n.ctaVariant,
            fill: "filled",
            onClick: w => {
                C(w, n.ctaLink, {
                    native: !0
                }), b()
            }
        }, n.ctaText)), {
            ttl: null
        }))
    }, []), null
}
export {
    H as u
};