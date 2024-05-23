import {
    iI as a,
    hI as n,
    iJ as s
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7cefd263-c1da-4066-a924-8a32042af82a", e._sentryDebugIdIdentifier = "sentry-dbid-7cefd263-c1da-4066-a924-8a32042af82a")
    } catch (r) {}
})();

function o(e, t) {
    return a(`/chat/${e}`, t)
}

function u(e, t) {
    return a(`/chat/${e}`, t)
}

function f(e) {
    return a("/chat/new", e)
}

function c({
    userId: e,
    userName: t
}) {
    const r = n({
        userId: e,
        userName: t
    });
    return `${s()}/chat/dm/user/${r}`
}
export {
    o as a, c as b, f as c, u as g
};