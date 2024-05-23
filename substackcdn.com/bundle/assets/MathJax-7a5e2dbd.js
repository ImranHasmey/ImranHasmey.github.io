import {
    cy as S,
    cZ as F,
    o as g,
    bT as R,
    eR as U,
    p as H
} from "./tracking-376cff7a.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d74941e4-b221-4d03-9912-67b92253b07e", e._sentryDebugIdIdentifier = "sentry-dbid-d74941e4-b221-4d03-9912-67b92253b07e")
    } catch (t) {}
})();
var P = globalThis && globalThis.__assign || function() {
        return (P = Object.assign || function(e) {
            for (var n, t = 1, o = arguments.length; t < o; t++)
                for (var r in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            return e
        }).apply(this, arguments)
    },
    M, J, L = S(void 0),
    I = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",
    D = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js",
    $ = function(u) {
        var n = u.config,
            t = u.version,
            t = t === void 0 ? 3 : t,
            o = u.src,
            o = o === void 0 ? t === 2 ? I : D : o,
            r = u.onStartup,
            x = u.onLoad,
            h = u.onError,
            T = u.typesettingOptions,
            p = u.renderMode,
            p = p === void 0 ? "post" : p,
            _ = u.hideUntilTypeset,
            u = u.children,
            s = F(L);
        if ((s == null ? void 0 : s.version) !== void 0 && (s == null ? void 0 : s.version) !== t) throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");
        if (t === 2 && J !== void 0 || t === 3 && M !== void 0) throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");
        var y = g(s),
            s = g((s == null ? void 0 : s.version) || null);
        if (s.current === null) s.current = t;
        else if (s.current !== t) throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");
        var i = o || (t === 2 ? I : D);

        function l(c, b) {
            n && (window.MathJax = n);
            var d = document.createElement("script");
            d.type = "text/javascript", d.src = i, d.async = !1, d.addEventListener("load", function() {
                var v = window.MathJax;
                r && r(v), c(v), x && x()
            }), d.addEventListener("error", function(v) {
                return b(v)
            }), document.getElementsByTagName("head")[0].appendChild(d)
        }
        return y.current === void 0 && (s = {
            typesettingOptions: T,
            renderMode: p,
            hideUntilTypeset: _
        }, t === 2 ? M === void 0 && (typeof window != "undefined" ? (M = new Promise(l)).catch(function(c) {
            if (!h) throw Error("Failed to download MathJax version 2 from '".concat(i, "' due to: ").concat(c));
            h(c)
        }) : (M = Promise.reject()).catch(function(c) {})) : J === void 0 && (typeof window != "undefined" ? (J = new Promise(l)).catch(function(c) {
            if (!h) throw Error("Failed to download MathJax version 3 from '".concat(i, "' due to: ").concat(c));
            h(c)
        }) : (J = Promise.reject()).catch(function(c) {})), y.current = P(P({}, s), t === 2 ? {
            version: 2,
            promise: M
        } : {
            version: 3,
            promise: J
        })), R.createElement(L.Provider, {
            value: y.current
        }, u)
    };
const B = $;
var m = globalThis && globalThis.__assign || function() {
        return (m = Object.assign || function(e) {
            for (var n, t = 1, o = arguments.length; t < o; t++)
                for (var r in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            return e
        }).apply(this, arguments)
    },
    k = globalThis && globalThis.__rest || function(e, n) {
        var t = {};
        for (r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
        return t
    },
    E = function(e) {
        return "Typesetting failed: ".concat(e.message !== void 0 ? e.message : e.toString())
    },
    q = function(e) {
        function n() {
            var w;
            c === "every" && v && b === "post" && i.current !== null && (i.current.style.visibility = (w = (w = y.style) == null ? void 0 : w.visibility) != null ? w : "visible"), j.current || (c === "first" && i.current !== null && (i.current.style.visibility = "visible"), r && r(), j.current = !0), x && x(), O.current = !1
        }
        var o = e.inline,
            t = o !== void 0 && o,
            o = e.hideUntilTypeset,
            r = e.onInitTypeset,
            x = e.onTypeset,
            h = e.text,
            T = e.dynamic,
            p = e.typesettingOptions,
            _ = e.renderMode,
            u = e.children,
            y = k(e, ["inline", "hideUntilTypeset", "onInitTypeset", "onTypeset", "text", "dynamic", "typesettingOptions", "renderMode", "children"]),
            s = g(""),
            i = g(null),
            l = F(L),
            c = o != null ? o : l == null ? void 0 : l.hideUntilTypeset,
            b = _ != null ? _ : l == null ? void 0 : l.renderMode,
            d = p != null ? p : l == null ? void 0 : l.typesettingOptions,
            v = T !== !1 && (T || !1),
            j = g(!1),
            O = g(!1);
        return !O.current && i.current !== null && v && c === "every" && b === "post" && (i.current.style.visibility = "hidden"), (typeof window != "undefined" ? U : H)(function() {
            if ((v || !j.current) && i.current !== null) {
                if (!l) throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");
                if (b === "pre") {
                    if (!(typeof(w = h) == "string" && 0 < w.length)) throw Error(`Render mode 'pre' requires text prop to be set and non-empty, which was currently "`.concat(h, '"'));
                    if (!p || !p.fn) throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");
                    if (l.version === 2) throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")
                }
                b !== "post" && h === s.current || O.current || (O.current = !0, l.version === 3 ? l.promise.then(function(a) {
                    var C;
                    b === "pre" ? (C = function(f) {
                        s.current = h, a.startup.document.clear(), a.startup.document.updateDocument(), i.current !== null && (i.current.innerHTML = f.outerHTML), n()
                    }, p.fn.endsWith("Promise") ? a.startup.promise.then(function() {
                        return a[d.fn](h, m(m({}, (d == null ? void 0 : d.options) || {}), {
                            display: !t
                        }))
                    }).then(C).catch(function(f) {
                        throw n(), Error(E(f))
                    }) : a.startup.promise.then(function() {
                        var f = a[d.fn](h, m(m({}, (d == null ? void 0 : d.options) || {}), {
                            display: !t
                        }));
                        C(f)
                    }).catch(function(f) {
                        throw n(), Error(E(f))
                    })) : a.startup.promise.then(function() {
                        return a.typesetClear([i.current]), a.typesetPromise([i.current])
                    }).then(n).catch(function(f) {
                        throw n(), Error(E(f))
                    })
                }).catch(function(a) {
                    throw n(), Error(E(a))
                }) : l.promise.then(function(a) {
                    a.Hub.Queue(["Typeset", a.Hub, i.current]), a.Hub.Queue(n)
                }).catch(function(a) {
                    throw n(), Error(E(a))
                }))
            }
            var w
        }), R.createElement("span", m({}, y, {
            style: m(m({
                display: t ? "inline" : "block"
            }, y.style), {
                visibility: c ? "hidden" : (e = y.style) == null ? void 0 : e.visibility
            }),
            ref: i
        }), u)
    };
const Q = q;
export {
    Q as M, B as a
};