import {
    by as L
} from "./tracking-376cff7a.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            r = new Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "949c2110-391e-451c-97c4-e287ce0672e1", e._sentryDebugIdIdentifier = "sentry-dbid-949c2110-391e-451c-97c4-e287ce0672e1")
    } catch (n) {}
})();
const C = {},
    p = C.hasOwnProperty,
    E = (e, r) => {
        for (const n in e) p.call(e, n) && r(n, e[n])
    },
    J = (e, r) => (r && E(r, (n, s) => {
        e[n] = s
    }), e),
    M = (e, r) => {
        const n = e.length;
        let s = -1;
        for (; ++s < n;) r(e[s])
    },
    S = e => "\\u" + ("0000" + e).slice(-4),
    _ = (e, r) => {
        let n = e.toString(16);
        return r ? n : n.toUpperCase()
    },
    o = C.toString,
    $ = Array.isArray,
    P = e => typeof Buffer == "function" && Buffer.isBuffer(e),
    z = e => o.call(e) == "[object Object]",
    R = e => typeof e == "string" || o.call(e) == "[object String]",
    U = e => typeof e == "number" || o.call(e) == "[object Number]",
    W = e => typeof e == "function",
    G = e => o.call(e) == "[object Map]",
    K = e => o.call(e) == "[object Set]",
    Q = {
        "\\": "\\\\",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "	": "\\t"
    },
    T = /[\\\b\f\n\r\t]/,
    V = /[0-9]/,
    X = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
    Y = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,
    Z = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,
    i = (e, r) => {
        const n = () => {
                h = x, ++r.indentLevel, x = r.indent.repeat(r.indentLevel)
            },
            s = {
                escapeEverything: !1,
                minimal: !1,
                isScriptContext: !1,
                quotes: "single",
                wrap: !1,
                es6: !1,
                json: !1,
                compact: !0,
                lowercaseHex: !1,
                numbers: "decimal",
                indent: "	",
                indentLevel: 0,
                __inline1__: !1,
                __inline2__: !1
            },
            f = r && r.json;
        f && (s.quotes = "double", s.wrap = !0), r = J(s, r), r.quotes != "single" && r.quotes != "double" && r.quotes != "backtick" && (r.quotes = "single");
        const b = r.quotes == "double" ? '"' : r.quotes == "backtick" ? "`" : "'",
            l = r.compact,
            u = r.lowercaseHex;
        let x = r.indent.repeat(r.indentLevel),
            h = "";
        const N = r.__inline1__,
            y = r.__inline2__,
            a = l ? "" : `
`;
        let t, w = !0;
        const m = r.numbers == "binary",
            O = r.numbers == "octal",
            v = r.numbers == "decimal",
            B = r.numbers == "hexadecimal";
        if (f && e && W(e.toJSON) && (e = e.toJSON()), !R(e)) {
            if (G(e)) return e.size == 0 ? "new Map()" : (l || (r.__inline1__ = !0, r.__inline2__ = !1), "new Map(" + i(Array.from(e), r) + ")");
            if (K(e)) return e.size == 0 ? "new Set()" : "new Set(" + i(Array.from(e), r) + ")";
            if (P(e)) return e.length == 0 ? "Buffer.from([])" : "Buffer.from(" + i(Array.from(e), r) + ")";
            if ($(e)) return t = [], r.wrap = !0, N && (r.__inline1__ = !1, r.__inline2__ = !0), y || n(), M(e, c => {
                w = !1, y && (r.__inline2__ = !1), t.push((l || y ? "" : x) + i(c, r))
            }), w ? "[]" : y ? "[" + t.join(", ") + "]" : "[" + a + t.join("," + a) + a + (l ? "" : h) + "]";
            if (U(e)) {
                if (f) return JSON.stringify(e);
                if (v) return String(e);
                if (B) {
                    let c = e.toString(16);
                    return u || (c = c.toUpperCase()), "0x" + c
                }
                if (m) return "0b" + e.toString(2);
                if (O) return "0o" + e.toString(8)
            } else return z(e) ? (t = [], r.wrap = !0, n(), E(e, (c, d) => {
                w = !1, t.push((l ? "" : x) + i(c, r) + ":" + (l ? "" : " ") + i(d, r))
            }), w ? "{}" : "{" + a + t.join("," + a) + a + (l ? "" : h) + "}") : f ? JSON.stringify(e) || "null" : String(e)
        }
        const I = r.escapeEverything ? Y : Z;
        return t = e.replace(I, (c, d, g, D, k, q) => {
            if (d) {
                if (r.minimal) return d;
                const j = d.charCodeAt(0),
                    A = d.charCodeAt(1);
                if (r.es6) {
                    const H = (j - 55296) * 1024 + A - 56320 + 65536;
                    return "\\u{" + _(H, u) + "}"
                }
                return S(_(j, u)) + S(_(A, u))
            }
            if (g) return S(_(g.charCodeAt(0), u));
            if (c == "\0" && !f && !V.test(q.charAt(k + 1))) return "\\0";
            if (D) return D == b || r.escapeEverything ? "\\" + D : D;
            if (T.test(c)) return Q[c];
            if (r.minimal && !X.test(c)) return c;
            const F = _(c.charCodeAt(0), u);
            return f || F.length > 2 ? S(F) : "\\x" + ("00" + F).slice(-2)
        }), b == "`" && (t = t.replace(/\$\{/g, "\\${")), r.isScriptContext && (t = t.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, f ? "\\u003C!--" : "\\x3C!--")), r.wrap && (t = b + t + b), t
    };
i.version = "3.0.2";
var ee = i;
const ne = L(ee);
export {
    ne as j
};