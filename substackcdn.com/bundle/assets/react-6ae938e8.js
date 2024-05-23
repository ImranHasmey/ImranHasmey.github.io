import {
    by as w
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    a as E
} from "./useResponsive-08e338a7.js";
import {
    l as b
} from "./linkify-91f62846.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1c9f5ce6-c8aa-4a8e-a4a5-4ff54cad0b2d", e._sentryDebugIdIdentifier = "sentry-dbid-1c9f5ce6-c8aa-4a8e-a4a5-4ff54cad0b2d")
    } catch (i) {}
})();
var d = {};
d.__esModule = !0;
var I = E,
    u = L(I),
    O = b,
    h = D(O);

function D(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null)
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t.default = e, t
}

function L(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function N(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function P(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function R(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var m = h.options,
    T = m.Options;

function q(e, t) {
    for (var i = h.tokenize(e), r = [], a = 0, f = 0; f < i.length; f++) {
        var n = i[f];
        if (n.type === "nl" && t.nl2br) {
            r.push(u.default.createElement("br", {
                key: "linkified-" + ++a
            }));
            continue
        } else if (!n.isLink || !t.check(n)) {
            r.push(n.toString());
            continue
        }
        var o = t.resolve(n),
            g = o.formatted,
            k = o.formattedHref,
            _ = o.tagName,
            s = o.className,
            p = o.target,
            l = o.attributes,
            c = {
                key: "linkified-" + ++a,
                href: k
            };
        if (s && (c.className = s), p && (c.target = p), l)
            for (var y in l) c[y] = l[y];
        r.push(u.default.createElement(_, c, g))
    }
    return r
}

function v(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    if (u.default.Children.count(e.props.children) === 0) return e;
    var r = [];
    u.default.Children.forEach(e.props.children, function(n) {
        typeof n == "string" ? (i = i + 1, r.push.apply(r, q(n, t))) : u.default.isValidElement(n) ? typeof n.type == "string" && m.contains(t.ignoreTags, n.type.toUpperCase()) ? r.push(n) : r.push(v(n, t, ++i)) : r.push(n)
    });
    var a = {
        key: "linkified-element-" + i
    };
    for (var f in e.props) a[f] = e.props[f];
    return u.default.cloneElement(e, a, r)
}
var x = function(e) {
    R(t, e);

    function t() {
        return N(this, t), P(this, e.apply(this, arguments))
    }
    return t.prototype.render = function() {
        var r = {
            key: "linkified-element-0"
        };
        for (var a in this.props) a !== "options" && a !== "tagName" && (r[a] = this.props[a]);
        var f = new T(this.props.options),
            n = this.props.tagName || "span",
            o = u.default.createElement(n, r);
        return v(o, f, 0)
    }, t
}(u.default.Component);
d.default = x;
var M = d.default;
const U = w(M);
export {
    U as L
};