import {
    h3 as i
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7ca85c41-65e2-474b-93b6-ced18e3e5e66", e._sentryDebugIdIdentifier = "sentry-dbid-7ca85c41-65e2-474b-93b6-ced18e3e5e66")
    } catch (o) {}
})();
const d = ["sort"],
    l = ["sort", "selection"];

function a(e, t) {
    let o;
    try {
        o = new URL(`${location.protocol}//${location.host}${e}`)
    } catch (n) {
        o = new URL(e)
    }
    for (const n of o.searchParams.keys())(t ? l : d).includes(n) || o.searchParams.delete(n);
    return o.toString()
}

function b(e) {
    setTimeout(() => f(e), 0)
}

function f({
    previous: e,
    url: t
}) {
    var c, s;
    if (typeof window == "undefined") return;
    const o = a(t, !1),
        n = a(t, !0),
        {
            head: r
        } = document;
    (c = r.querySelector("link[rel=canonical]")) == null || c.setAttribute("href", o), (s = r.querySelector('meta[property="og:url"]')) == null || s.setAttribute("content", n), setTimeout(() => {
        i({
            previous: e,
            url: t
        })
    }, 100)
}
export {
    b as o
};