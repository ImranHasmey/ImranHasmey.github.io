import {
    o as d
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e6021a5a-d75e-4bad-920a-29a58bdb9522", e._sentryDebugIdIdentifier = "sentry-dbid-e6021a5a-d75e-4bad-920a-29a58bdb9522")
    } catch (t) {}
})();

function a() {
    const e = d(null);
    return [e, () => {
        var t;
        return (t = e.current) == null ? void 0 : t.toggle()
    }]
}
export {
    a as u
};