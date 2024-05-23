var s = (e, t, n) => new Promise((a, d) => {
    var c = o => {
            try {
                r(n.next(o))
            } catch (i) {
                d(i)
            }
        },
        f = o => {
            try {
                r(n.throw(o))
            } catch (i) {
                d(i)
            }
        },
        r = o => o.done ? a(o.value) : Promise.resolve(o.value).then(c, f);
    r((n = n.apply(e, t)).next())
});
import {
    d as u
} from "./debounce-f31b8252.js";
import {
    i as g
} from "./isEmail-6a10e895.js";
import {
    q as b
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import "./isObject-a54dc090.js";
import "./toNumber-3c911b0f.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "508e4ba0-d6ad-4f36-9908-99709a71c5b6", e._sentryDebugIdIdentifier = "sentry-dbid-508e4ba0-d6ad-4f36-9908-99709a71c5b6")
    } catch (n) {}
})();
const y = (e, t) => s(void 0, null, function*() {
        const n = yield b("/api/v1/check-email", {
            query: {
                email: e
            },
            method: "get"
        });
        t([e, n])
    }),
    m = u((e, t) => s(void 0, null, function*() {
        yield y(e, t)
    }), 200),
    S = e => s(void 0, null, function*() {
        return g(e) ? new Promise((t, n) => {
            m(e, t)
        }) : []
    });
export {
    S as fetchSuggestion
};