var f = (e, t, n) => new Promise((s, a) => {
    var i = o => {
            try {
                c(n.next(o))
            } catch (p) {
                a(p)
            }
        },
        l = o => {
            try {
                c(n.throw(o))
            } catch (p) {
                a(p)
            }
        },
        c = o => o.done ? s(o.value) : Promise.resolve(o.value).then(i, l);
    c((n = n.apply(e, t)).next())
});
import {
    ab as m,
    fo as _,
    y as r,
    ao as B,
    p as g,
    a4 as D,
    t as u,
    E as d,
    a0 as S,
    Z as I,
    it as h,
    d as x,
    q as R
} from "./tracking-376cff7a.js";
import {
    T as b,
    u as v
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    S as w
} from "./Modal-ab851ad1.js";
import {
    u as L
} from "./free_email_form.module-135823b4.js";
import {
    u as U
} from "./share_dialog-b74d3337.js";
import {
    c as y
} from "./useResponsive-08e338a7.js";
import {
    u as $
} from "./user-e16f1619.js";
import {
    X as F
} from "./x-fc38e969.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d1d5a257-e9ca-4cc0-bfc9-86e4ab7e1f21", e._sentryDebugIdIdentifier = "sentry-dbid-d1d5a257-e9ca-4cc0-bfc9-86e4ab7e1f21")
    } catch (n) {}
})();

function M() {
    return U("reader-ios-install-banner", 60 * 60 * 24 * 7)
}

function K({
    user: e,
    pathname: t = "/inbox"
}) {
    const [n, s] = M(), a = N();
    if (n || !a || e != null && e.reader_installed_at || a === "ios" && m() && (t.startsWith(_) || t.includes("/note/")) || t.startsWith("/chat")) return null;
    const i = () => {
            u(d.APP_BANNER_DISMISSED), s()
        },
        l = c => {
            u(d.APP_BANNER_TAPPED, {
                surface: "reader"
            })
        };
    return r(A, {
        className: "app-banner-fixed"
    }, r(E, {
        surface: "reader"
    }), r(k, null), r(P, null, r(b, {
        translated: !0
    }, "Get the full experience")), r("a", {
        href: V(t),
        className: "app-banner-cta",
        onClick: l
    }, r(b, {
        translated: !0
    }, "Get app")), r("button", {
        className: "reader2-button-reset",
        onClick: i
    }, r(F, {
        size: 16,
        className: "app-banner-x-out"
    })))
}

function Y({
    post: e,
    subdomain: t
}) {
    const n = N(),
        {
            getExperimentVariant: s,
            exposeExperiment: a
        } = L(),
        {
            iString: i
        } = v(),
        l = !B({
            checkFirst4: !0
        }) || !n,
        c = "open_app_copy_experiment";
    if (g(() => {
            l || a(c)
        }, []), l) return null;
    let o = i("Open app");
    switch (s(c)) {
        case "use_app":
            o = i("Use app");
            break;
        case "launch_app":
            o = i("Launch app");
            break;
        case "explore_app":
            o = i("Explore the app");
            break
    }
    let p = i("Read in the Substack app");
    e.type == "podcast" ? p = i("Listen in the Substack app") : e.type == "video" && (p = i("Watch in the Substack app"));
    const T = D(t, e.slug, {
        redirect: "app-store",
        source: "post-banner"
    });
    return r(A, {
        className: "app-banner-post"
    }, r(E, {
        surface: "post"
    }), r(k, null), r(P, null, r("div", null, p)), r("a", {
        className: "app-banner-cta",
        href: T,
        onClick: () => {
            u(d.APP_BANNER_TAPPED, {
                surface: "post"
            })
        }
    }, o))
}

function E({
    surface: e,
    bannerType: t
}) {
    return g(() => {
        u(d.APP_BANNER_VIEWED, {
            surface: e,
            bannerType: t
        })
    }, []), null
}
const A = y("app-banner"),
    P = y("app-banner-text");

function k() {
    return r("div", {
        className: "app-banner-icon"
    }, r(w, {
        height: 16
    }))
}

function N() {
    return S() ? "ios" : I() ? "android" : null
}

function V(e) {
    const t = e.split("/"),
        n = t.length > 1 ? t[1] : null;
    return n && ["/chat", _, "/activity", "/library"].includes(`/${n}`) ? h({
        tab: n,
        redirect: "app-store"
    }) : h({
        tab: "inbox",
        redirect: "app-store"
    })
}

function ee(e, t = {}) {
    e = e || x("selection");
    const {
        isLoading: n,
        error: s,
        result: a
    } = $({
        pathname: `/api/v1/post_selection/${e}`,
        auto: !!e,
        deps: [e]
    });
    return {
        isLoading: n,
        error: s,
        postSelection: a != null ? a : null,
        highlightSelection: () => {
            a && C(a, t)
        }
    }
}

function te(n) {
    return f(this, arguments, function*(e, t = {}) {
        e = e || x("selection");
        let s = null;
        try {
            s = yield R(`/api/v1/post_selection/${e}`, {})
        } catch (a) {}
        s && C(s, t)
    })
}

function C(e, t = {}) {
    var a, i;
    if (t.ignoreSafari && m() || !e.text) return;
    const n = ((i = (a = /^[^.]+\./.exec(e.text)) == null ? void 0 : a[0]) != null ? i : e.text).replace(/\.+$/g, "");
    if (!n) return;
    const s = `#:~:text=${encodeURIComponent(n)}`;
    history.replaceState({}, document.title, s), document.location.hash = s
}
export {
    K as A, Y as a, te as h, ee as u
};