import {
    p as c
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "533becb3-9290-4750-83dd-abb67f73fb81", e._sentryDebugIdIdentifier = "sentry-dbid-533becb3-9290-4750-83dd-abb67f73fb81")
    } catch (a) {}
})();

function l() {
    const e = t => {
        var a, r;
        (t.data === "3pc.supported" || t.data === "3pc.unsupported") && (t.data === "3pc.supported" && Array.from(document.getElementsByClassName("tiktok-wrap outer")).forEach(i => {
            const s = i.querySelector(".tiktok-iframe");
            s.classList.add("visible"), i.querySelector(".tiktok-wrap.static").classList.add("hidden");
            const o = i.querySelector(".fallback-failure");
            o.classList.add("no-border");
            try {
                (s.contentDocument || s.contentWindow.document).readyState == "complete" && o.classList.add("visible")
            } catch (n) {}
            s.onload = () => {
                o.classList.add("visible")
            }, s.onerror = () => {
                o.classList.add("visible")
            }, s.onabort = () => {
                o.classList.add("visible")
            }
        }), (r = (a = document.getElementsByClassName("third-party-cookie-check-iframe")) == null ? void 0 : a.forEach) == null || r.call(a, d => d.remove()))
    };
    return window.addEventListener("message", e), () => {
        window.removeEventListener("message", e)
    }
}

function u() {
    c(l, [])
}
export {
    l as c, u
};