import {
    by as W
} from "./tracking-376cff7a.js";
(function() {
    try {
        var y = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            b = new Error().stack;
        b && (y._sentryDebugIds = y._sentryDebugIds || {}, y._sentryDebugIds[b] = "8a23c676-401c-4947-976b-9565f8d8b73d", y._sentryDebugIdIdentifier = "sentry-dbid-8a23c676-401c-4947-976b-9565f8d8b73d")
    } catch (M) {}
})();
var R = {
    exports: {}
};
(function(y) {
    (function(b, M, K) {
        if (!b) return;
        for (var v = {
                8: "backspace",
                9: "tab",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "ins",
                46: "del",
                91: "meta",
                93: "meta",
                224: "meta"
            }, P = {
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            }, T = {
                "~": "`",
                "!": "1",
                "@": "2",
                "#": "3",
                $: "4",
                "%": "5",
                "^": "6",
                "&": "7",
                "*": "8",
                "(": "9",
                ")": "0",
                _: "-",
                "+": "=",
                ":": ";",
                '"': "'",
                "<": ",",
                ">": ".",
                "?": "/",
                "|": "\\"
            }, q = {
                option: "alt",
                command: "meta",
                return: "enter",
                escape: "esc",
                plus: "+",
                mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
            }, k, c = 1; c < 20; ++c) v[111 + c] = "f" + c;
        for (c = 0; c <= 9; ++c) v[c + 96] = c.toString();

        function E(r, e, n) {
            if (r.addEventListener) {
                r.addEventListener(e, n, !1);
                return
            }
            r.attachEvent("on" + e, n)
        }

        function I(r) {
            if (r.type == "keypress") {
                var e = String.fromCharCode(r.which);
                return r.shiftKey || (e = e.toLowerCase()), e
            }
            return v[r.which] ? v[r.which] : P[r.which] ? P[r.which] : String.fromCharCode(r.which).toLowerCase()
        }

        function B(r, e) {
            return r.sort().join(",") === e.sort().join(",")
        }

        function N(r) {
            var e = [];
            return r.shiftKey && e.push("shift"), r.altKey && e.push("alt"), r.ctrlKey && e.push("ctrl"), r.metaKey && e.push("meta"), e
        }

        function V(r) {
            if (r.preventDefault) {
                r.preventDefault();
                return
            }
            r.returnValue = !1
        }

        function H(r) {
            if (r.stopPropagation) {
                r.stopPropagation();
                return
            }
            r.cancelBubble = !0
        }

        function S(r) {
            return r == "shift" || r == "ctrl" || r == "alt" || r == "meta"
        }

        function U() {
            if (!k) {
                k = {};
                for (var r in v) r > 95 && r < 112 || v.hasOwnProperty(r) && (k[v[r]] = r)
            }
            return k
        }

        function X(r, e, n) {
            return n || (n = U()[r] ? "keydown" : "keypress"), n == "keypress" && e.length && (n = "keydown"), n
        }

        function Y(r) {
            return r === "+" ? ["+"] : (r = r.replace(/\+{2}/g, "+plus"), r.split("+"))
        }

        function D(r, e) {
            var n, o, h, g = [];
            for (n = Y(r), h = 0; h < n.length; ++h) o = n[h], q[o] && (o = q[o]), e && e != "keypress" && T[o] && (o = T[o], g.push("shift")), S(o) && g.push(o);
            return e = X(o, g, e), {
                key: o,
                modifiers: g,
                action: e
            }
        }

        function L(r, e) {
            return r === null || r === M ? !1 : r === e ? !0 : L(r.parentNode, e)
        }

        function l(r) {
            var e = this;
            if (r = r || M, !(e instanceof l)) return new l(r);
            e.target = r, e._callbacks = {}, e._directMap = {};
            var n = {},
                o, h = !1,
                g = !1,
                C = !1;

            function m(t) {
                t = t || {};
                var f = !1,
                    s;
                for (s in n) {
                    if (t[s]) {
                        f = !0;
                        continue
                    }
                    n[s] = 0
                }
                f || (C = !1)
            }

            function F(t, f, s, i, u, d) {
                var a, p, w = [],
                    _ = s.type;
                if (!e._callbacks[t]) return [];
                for (_ == "keyup" && S(t) && (f = [t]), a = 0; a < e._callbacks[t].length; ++a)
                    if (p = e._callbacks[t][a], !(!i && p.seq && n[p.seq] != p.level) && _ == p.action && (_ == "keypress" && !s.metaKey && !s.ctrlKey || B(f, p.modifiers))) {
                        var J = !i && p.combo == u,
                            Q = i && p.seq == i && p.level == d;
                        (J || Q) && e._callbacks[t].splice(a, 1), w.push(p)
                    }
                return w
            }

            function x(t, f, s, i) {
                e.stopCallback(f, f.target || f.srcElement, s, i) || t(f, s) === !1 && (V(f), H(f))
            }
            e._handleKey = function(t, f, s) {
                var i = F(t, f, s),
                    u, d = {},
                    a = 0,
                    p = !1;
                for (u = 0; u < i.length; ++u) i[u].seq && (a = Math.max(a, i[u].level));
                for (u = 0; u < i.length; ++u) {
                    if (i[u].seq) {
                        if (i[u].level != a) continue;
                        p = !0, d[i[u].seq] = 1, x(i[u].callback, s, i[u].combo, i[u].seq);
                        continue
                    }
                    p || x(i[u].callback, s, i[u].combo)
                }
                var w = s.type == "keypress" && g;
                s.type == C && !S(t) && !w && m(d), g = p && s.type == "keydown"
            };

            function A(t) {
                typeof t.which != "number" && (t.which = t.keyCode);
                var f = I(t);
                if (f) {
                    if (t.type == "keyup" && h === f) {
                        h = !1;
                        return
                    }
                    e.handleKey(f, N(t), t)
                }
            }

            function z() {
                clearTimeout(o), o = setTimeout(m, 1e3)
            }

            function G(t, f, s, i) {
                n[t] = 0;

                function u(_) {
                    return function() {
                        C = _, ++n[t], z()
                    }
                }

                function d(_) {
                    x(s, _, t), i !== "keyup" && (h = I(_)), setTimeout(m, 10)
                }
                for (var a = 0; a < f.length; ++a) {
                    var p = a + 1 === f.length,
                        w = p ? d : u(i || D(f[a + 1]).action);
                    O(f[a], w, i, t, a)
                }
            }

            function O(t, f, s, i, u) {
                e._directMap[t + ":" + s] = f, t = t.replace(/\s+/g, " ");
                var d = t.split(" "),
                    a;
                if (d.length > 1) {
                    G(t, d, f, s);
                    return
                }
                a = D(t, s), e._callbacks[a.key] = e._callbacks[a.key] || [], F(a.key, a.modifiers, {
                    type: a.action
                }, i, t, u), e._callbacks[a.key][i ? "unshift" : "push"]({
                    callback: f,
                    modifiers: a.modifiers,
                    action: a.action,
                    seq: i,
                    level: u,
                    combo: t
                })
            }
            e._bindMultiple = function(t, f, s) {
                for (var i = 0; i < t.length; ++i) O(t[i], f, s)
            }, E(r, "keypress", A), E(r, "keydown", A), E(r, "keyup", A)
        }
        l.prototype.bind = function(r, e, n) {
            var o = this;
            return r = r instanceof Array ? r : [r], o._bindMultiple.call(o, r, e, n), o
        }, l.prototype.unbind = function(r, e) {
            var n = this;
            return n.bind.call(n, r, function() {}, e)
        }, l.prototype.trigger = function(r, e) {
            var n = this;
            return n._directMap[r + ":" + e] && n._directMap[r + ":" + e]({}, r), n
        }, l.prototype.reset = function() {
            var r = this;
            return r._callbacks = {}, r._directMap = {}, r
        }, l.prototype.stopCallback = function(r, e) {
            var n = this;
            return (" " + e.className + " ").indexOf(" mousetrap ") > -1 || L(e, n.target) ? !1 : e.tagName == "INPUT" || e.tagName == "SELECT" || e.tagName == "TEXTAREA" || e.isContentEditable
        }, l.prototype.handleKey = function() {
            var r = this;
            return r._handleKey.apply(r, arguments)
        }, l.addKeycodes = function(r) {
            for (var e in r) r.hasOwnProperty(e) && (v[e] = r[e]);
            k = null
        }, l.init = function() {
            var r = l(M);
            for (var e in r) e.charAt(0) !== "_" && (l[e] = function(n) {
                return function() {
                    return r[n].apply(r, arguments)
                }
            }(e))
        }, l.init(), b.Mousetrap = l, y.exports && (y.exports = l), typeof K == "function" && K.amd && K(function() {
            return l
        })
    })(typeof window != "undefined" ? window : null, typeof window != "undefined" ? document : null)
})(R);
var Z = R.exports;
const $ = W(Z);
export {
    $ as M
};