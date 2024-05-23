var L = Object.defineProperty,
    $ = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty,
    k = Object.prototype.propertyIsEnumerable;
var v = (o, e, t) => e in o ? L(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t,
    c = (o, e) => {
        for (var t in e || (e = {})) g.call(e, t) && v(o, t, e[t]);
        if (m)
            for (var t of m(e)) k.call(e, t) && v(o, t, e[t]);
        return o
    },
    y = (o, e) => $(o, I(e));
var b = (o, e) => {
    var t = {};
    for (var s in o) g.call(o, s) && e.indexOf(s) < 0 && (t[s] = o[s]);
    if (o != null && m)
        for (var s of m(o)) e.indexOf(s) < 0 && k.call(o, s) && (t[s] = o[s]);
    return t
};
import {
    h as A,
    y as C,
    aD as B,
    p as P,
    o as F,
    er as R,
    c2 as p,
    bJ as S
} from "./tracking-376cff7a.js";
import {
    c as x
} from "./FlexBox-1a755411.js";
import {
    u as E
} from "./react-laag.esm-f47be925.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var o = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "d77d2a2e-5c80-46f9-984d-10b15b13c042", o._sentryDebugIdIdentifier = "sentry-dbid-d77d2a2e-5c80-46f9-984d-10b15b13c042")
    } catch (t) {}
})();
const O = "_popoverBase_1kdyr_1",
    T = {
        popoverBase: O
    },
    G = n => {
        var r = n,
            {
                className: o = "",
                children: e,
                layerClassName: t,
                hideOnScroll: s = !1,
                onClose: a
            } = r,
            u = b(r, ["className", "children", "layerClassName", "hideOnScroll", "onClose"]);
        const [i, d] = A(!1), l = J(c({
            open: i,
            onClose: () => {
                d(!1), a == null || a()
            },
            hideOnScroll: s,
            className: t
        }, u));
        return U({
            hideOnScroll: s,
            setOpen: d,
            open: i
        }), C("div", y(c({
            className: o
        }, l.triggerProps), {
            onClick: f => {
                d(!i), f.stopPropagation()
            }
        }), typeof e == "function" ? e({
            isOpen: i
        }) : e, l.layer)
    };

function U({
    hideOnScroll: o,
    setOpen: e,
    open: t
}) {
    const s = B(a => {
        requestAnimationFrame(() => {
            var r;
            const n = (r = a.target.classList) == null ? void 0 : r.contains("popoverLayerForScrollDetection");
            t && o && !n && e(!1)
        })
    }, [o, e, t]);
    P(() => {
        if (o) return window.addEventListener("scroll", s, !0), () => {
            window.removeEventListener("scroll", s, !0)
        }
    }, [s, o])
}

function J({
    open: o,
    onClose: e,
    disabled: t,
    possiblePlacements: s = ["top-center", "bottom-center", "top-start", "bottom-start", "top-end", "bottom-end"],
    preferPlacement: a,
    snap: u = !1,
    onOpen: n,
    content: r,
    className: i,
    layerOptions: d,
    closeOnOutsideClick: l = !0
}) {
    const f = F(!1);
    P(() => {
        o && !f.current && n && (f.current = !0, n())
    }, [o, n]);
    const {
        triggerProps: w,
        layerProps: h,
        renderLayer: D
    } = E(c(c(c({
        isOpen: t ? !1 : o,
        overflowContainer: !1,
        auto: !0,
        snap: u,
        possiblePlacements: s,
        placement: a,
        containerOffset: 10,
        triggerOffset: 8
    }, l && {
        onOutsideClick: () => e()
    }), a && {
        placement: a
    }), d));
    return {
        triggerProps: w,
        layer: o && !t && D(C("div", c({
            className: x("popoverLayerForScrollDetection", T.popoverBase, i)
        }, h), typeof r == "function" ? r({
            closePopover: e
        }) : r))
    }
}

function K({
    spotifySettings: o
}) {
    return o && o.currently_published_on_spotify && o.spotify_uri ? [{
        name: "Spotify",
        ios: !0,
        android: !0,
        desktop: !0,
        icon: "/img/podcast-app-icons/spotify.svg?v=1",
        onClick: () => {
            document.location.href = R({
                spotifyUri: o.spotify_uri
            })
        }
    }, ..._] : _
}
const _ = [{
    name: "Choose installed player",
    ios: !1,
    android: !0,
    desktop: !1,
    icon: "/img/podcast-app-icons/generic-orange-microphone.svg?v=1",
    onClick: o => {
        document.location.href = `itpc://${p(o)}`
    }
}, {
    name: "Apple Podcasts",
    ios: !0,
    android: !1,
    desktop: !0,
    icon: "/img/podcast-app-icons/apple-podcasts.svg?v=1",
    onClick: o => {
        document.location.href = `podcast://${p(o)}`
    }
}, {
    name: "Overcast",
    ios: !0,
    android: !1,
    desktop: !0,
    icon: "/img/podcast-app-icons/overcast.svg?v=1",
    onClick: o => {
        document.location.href = `overcast://x-callback-url/add?url=${encodeURIComponent(o)}`
    }
}, {
    name: "Pocket Casts",
    ios: !0,
    android: !0,
    desktop: !1,
    icon: "/img/podcast-app-icons/pocketcasts.svg?v=1",
    onClick: o => {
        document.location.href = `pktc://subscribe/${p(o)}`
    }
}, {
    name: "Downcast",
    ios: !0,
    android: !1,
    desktop: !1,
    icon: "/img/podcast-app-icons/downcast.svg?v=1",
    onClick: o => {
        document.location.href = `downcast://${p(o)}`
    }
}, {
    name: "Podcast Addict",
    ios: !1,
    android: !0,
    desktop: !1,
    icon: "/img/podcast-app-icons/podcast-addict.svg?v=1",
    onClick: o => {
        document.location.href = `podcastaddict://${p(o)}`
    }
}, {
    name: "Castro",
    ios: !0,
    android: !1,
    desktop: !1,
    icon: "/img/podcast-app-icons/castro.svg?v=1",
    onClick: o => {
        S(o), document.location.href = `castros://subscribe/${p(o)}`
    }
}, {
    name: "Radio Public",
    ios: !0,
    android: !0,
    desktop: !1,
    icon: "/img/podcast-app-icons/radiopublic.svg?v=1",
    onClick: o => {
        document.location.href = `https://radiopublic.com/${encodeURIComponent(o)}`
    }
}];
export {
    G as P, K as g
};