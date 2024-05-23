import {
    y as n
} from "./tracking-376cff7a.js";
import {
    x as c
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a862ccf2-84fa-422b-96e3-294551d4ff3d", e._sentryDebugIdIdentifier = "sentry-dbid-a862ccf2-84fa-422b-96e3-294551d4ff3d")
    } catch (r) {}
})();
const d = "_pubAccentTheme_tkddu_1",
    f = {
        pubAccentTheme: d
    };

function b({
    children: e
}) {
    return n(c, {
        theme: f.pubAccentTheme
    }, e)
}
export {
    b as P
};