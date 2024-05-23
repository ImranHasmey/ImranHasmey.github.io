import {
    by as k
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var n = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "54803354-6f25-4e58-aa59-1184951fdf15", n._sentryDebugIdIdentifier = "sentry-dbid-54803354-6f25-4e58-aa59-1184951fdf15")
    } catch (s) {}
})();
var E = {
        exports: {}
    },
    S = {
        exports: {}
    };
(function(n, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = d;

    function s(a) {
        "@babel/helpers - typeof";
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? s = function(r) {
            return typeof r
        } : s = function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }, s(a)
    }

    function d(a) {
        var l = typeof a == "string" || a instanceof String;
        if (!l) {
            var r = s(a);
            throw a === null ? r = "null" : r === "object" && (r = a.constructor.name), new TypeError("Expected a string but received a ".concat(r))
        }
    }
    n.exports = t.default, n.exports.default = t.default
})(S, S.exports);
var p = S.exports,
    P = {
        exports: {}
    };
(function(n, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = s;

    function s() {
        var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = arguments.length > 1 ? arguments[1] : void 0;
        for (var l in a) typeof d[l] == "undefined" && (d[l] = a[l]);
        return d
    }
    n.exports = t.default, n.exports.default = t.default
})(P, P.exports);
var C = P.exports,
    $ = {
        exports: {}
    };
(function(n, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = l;
    var s = d(p);

    function d(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }

    function a(r) {
        "@babel/helpers - typeof";
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? a = function(f) {
            return typeof f
        } : a = function(f) {
            return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f
        }, a(r)
    }

    function l(r, e) {
        (0, s.default)(r);
        var f, o;
        a(e) === "object" ? (f = e.min || 0, o = e.max) : (f = arguments[1], o = arguments[2]);
        var i = encodeURI(r).split(/%..|./).length - 1;
        return i >= f && (typeof o == "undefined" || i <= o)
    }
    n.exports = t.default, n.exports.default = t.default
})($, $.exports);
var B = $.exports,
    q = {
        exports: {}
    };
(function(n, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;
    var s = a(p),
        d = a(C);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = {
        require_tld: !0,
        allow_underscores: !1,
        allow_trailing_dot: !1,
        allow_numeric_tld: !1,
        allow_wildcard: !1
    };

    function r(e, f) {
        (0, s.default)(e), f = (0, d.default)(f, l), f.allow_trailing_dot && e[e.length - 1] === "." && (e = e.substring(0, e.length - 1)), f.allow_wildcard === !0 && e.indexOf("*.") === 0 && (e = e.substring(2));
        var o = e.split("."),
            i = o[o.length - 1];
        return f.require_tld && (o.length < 2 || !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(i) || /\s/.test(i)) || !f.allow_numeric_tld && /^\d+$/.test(i) ? !1 : o.every(function(_) {
            return !(_.length > 63 || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(_) || /[\uff01-\uff5e]/.test(_) || /^-|-$/.test(_) || !f.allow_underscores && /_/.test(_))
        })
    }
    n.exports = t.default, n.exports.default = t.default
})(q, q.exports);
var W = q.exports,
    I = {
        exports: {}
    };
(function(n, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = o;
    var s = d(p);

    function d(i) {
        return i && i.__esModule ? i : {
            default: i
        }
    }
    var a = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
        l = "(".concat(a, "[.]){3}").concat(a),
        r = new RegExp("^".concat(l, "$")),
        e = "(?:[0-9a-fA-F]{1,4})",
        f = new RegExp("^(" + "(?:".concat(e, ":){7}(?:").concat(e, "|:)|") + "(?:".concat(e, ":){6}(?:").concat(l, "|:").concat(e, "|:)|") + "(?:".concat(e, ":){5}(?::").concat(l, "|(:").concat(e, "){1,2}|:)|") + "(?:".concat(e, ":){4}(?:(:").concat(e, "){0,1}:").concat(l, "|(:").concat(e, "){1,3}|:)|") + "(?:".concat(e, ":){3}(?:(:").concat(e, "){0,2}:").concat(l, "|(:").concat(e, "){1,4}|:)|") + "(?:".concat(e, ":){2}(?:(:").concat(e, "){0,3}:").concat(l, "|(:").concat(e, "){1,5}|:)|") + "(?:".concat(e, ":){1}(?:(:").concat(e, "){0,4}:").concat(l, "|(:").concat(e, "){1,6}|:)|") + "(?::((?::".concat(e, "){0,5}:").concat(l, "|(?::").concat(e, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

    function o(i) {
        var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        if ((0, s.default)(i), _ = String(_), !_) return o(i, 4) || o(i, 6);
        if (_ === "4") {
            if (!r.test(i)) return !1;
            var y = i.split(".").sort(function(F, h) {
                return F - h
            });
            return y[3] <= 255
        }
        return _ === "6" ? !!f.test(i) : !1
    }
    n.exports = t.default, n.exports.default = t.default
})(I, I.exports);
var X = I.exports;
(function(n, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = N;
    var s = e(p),
        d = e(C),
        a = e(B),
        l = e(W),
        r = e(X);

    function e(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }
    var f = {
            allow_display_name: !1,
            require_display_name: !1,
            allow_utf8_local_part: !0,
            require_tld: !0,
            blacklisted_chars: "",
            ignore_max_length: !1,
            host_blacklist: []
        },
        o = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i,
        i = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
        _ = /^[a-z\d]+$/,
        y = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
        F = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
        h = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
        L = 254;

    function O(c) {
        var u = c.replace(/^"(.+)"$/, "$1");
        if (!u.trim()) return !1;
        var m = /[\.";<>]/.test(u);
        if (m) {
            if (u === c) return !1;
            var v = u.split('"').length === u.split('\\"').length;
            if (!v) return !1
        }
        return !0
    }

    function N(c, u) {
        if ((0, s.default)(c), u = (0, d.default)(u, f), u.require_display_name || u.allow_display_name) {
            var m = c.match(o);
            if (m) {
                var v = m[1];
                if (c = c.replace(v, "").replace(/(^<|>$)/g, ""), v.endsWith(" ") && (v = v.substr(0, v.length - 1)), !O(v)) return !1
            } else if (u.require_display_name) return !1
        }
        if (!u.ignore_max_length && c.length > L) return !1;
        var A = c.split("@"),
            x = A.pop(),
            b = x.toLowerCase();
        if (u.host_blacklist.includes(b)) return !1;
        var g = A.join("@");
        if (u.domain_specific_validation && (b === "gmail.com" || b === "googlemail.com")) {
            g = g.toLowerCase();
            var M = g.split("+")[0];
            if (!(0, a.default)(M.replace(/\./g, ""), {
                    min: 6,
                    max: 30
                })) return !1;
            for (var R = M.split("."), w = 0; w < R.length; w++)
                if (!_.test(R[w])) return !1
        }
        if (u.ignore_max_length === !1 && (!(0, a.default)(g, {
                max: 64
            }) || !(0, a.default)(x, {
                max: 254
            }))) return !1;
        if (!(0, l.default)(x, {
                require_tld: u.require_tld
            })) {
            if (!u.allow_ip_domain) return !1;
            if (!(0, r.default)(x)) {
                if (!x.startsWith("[") || !x.endsWith("]")) return !1;
                var U = x.substr(1, x.length - 2);
                if (U.length === 0 || !(0, r.default)(U)) return !1
            }
        }
        if (g[0] === '"') return g = g.slice(1, g.length - 1), u.allow_utf8_local_part ? h.test(g) : y.test(g);
        for (var Q = u.allow_utf8_local_part ? F : i, z = g.split("."), D = 0; D < z.length; D++)
            if (!Q.test(z[D])) return !1;
        return !(u.blacklisted_chars && g.search(new RegExp("[".concat(u.blacklisted_chars, "]+"), "g")) !== -1)
    }
    n.exports = t.default, n.exports.default = t.default
})(E, E.exports);
var Z = E.exports;
const J = k(Z);
export {
    J as i
};