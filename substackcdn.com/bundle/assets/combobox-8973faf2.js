var Ke = Object.defineProperty,
    Ue = Object.defineProperties;
var qe = Object.getOwnPropertyDescriptors;
var ae = Object.getOwnPropertySymbols;
var Re = Object.prototype.hasOwnProperty,
    Me = Object.prototype.propertyIsEnumerable;
var Ee = (t, i, e) => i in t ? Ke(t, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : t[i] = e,
    R = (t, i) => {
        for (var e in i || (i = {})) Re.call(i, e) && Ee(t, e, i[e]);
        if (ae)
            for (var e of ae(i)) Me.call(i, e) && Ee(t, e, i[e]);
        return t
    },
    z = (t, i) => Ue(t, qe(i));
var q = (t, i) => {
    var e = {};
    for (var n in t) Re.call(t, n) && i.indexOf(n) < 0 && (e[n] = t[n]);
    if (t != null && ae)
        for (var n of ae(t)) i.indexOf(n) < 0 && Me.call(t, n) && (e[n] = t[n]);
    return e
};
import {
    e_ as Ae,
    iL as Je,
    h as ge,
    p as de,
    eR as He,
    o as D,
    cy as he,
    aV as We,
    aD as Xe,
    b3 as K,
    bT as B,
    cZ as xe,
    i as ke
} from "./tracking-376cff7a.js";
import {
    b as _e,
    a as V,
    O as we,
    U as Q,
    o as h,
    u as G,
    p as Oe,
    g as Ye,
    e as ue,
    x as Ze,
    C as ee,
    y as ne,
    d as Ge,
    c as $e
} from "./transition-c6a4911b.js";
import {
    T as Qe,
    e as et,
    a as tt
} from "./Switch-b8853cbf.js";
import {
    d as nt,
    y as ot,
    f as rt,
    s as it,
    I as oe,
    e as lt,
    m as Pe,
    o as L,
    t as ze,
    r as at,
    g as ut,
    h as st
} from "./Modal-ab851ad1.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            i = new Error().stack;
        i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "3de5bdf5-41e2-4ba3-b8ac-6c4310b6dd26", t._sentryDebugIdIdentifier = "sentry-dbid-3de5bdf5-41e2-4ba3-b8ac-6c4310b6dd26")
    } catch (e) {}
})();
/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function se() {
    return se = Object.assign ? Object.assign.bind() : function(t) {
        for (var i = 1; i < arguments.length; i++) {
            var e = arguments[i];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }
        return t
    }, se.apply(this, arguments)
}
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ce() {
    return ce = Object.assign ? Object.assign.bind() : function(t) {
        for (var i = 1; i < arguments.length; i++) {
            var e = arguments[i];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }
        return t
    }, ce.apply(this, arguments)
}
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Z(t, i, e) {
    var n, r = (n = e.initialDeps) != null ? n : [],
        o;
    return function() {
        var l;
        e.key && e.debug != null && e.debug() && (l = Date.now());
        var u = t(),
            c = u.length !== r.length || u.some(function(d, I) {
                return r[I] !== d
            });
        if (!c) return o;
        r = u;
        var s;
        if (e.key && e.debug != null && e.debug() && (s = Date.now()), o = i.apply(void 0, u), e.key && e.debug != null && e.debug()) {
            var f = Math.round((Date.now() - l) * 100) / 100,
                p = Math.round((Date.now() - s) * 100) / 100,
                y = p / 16,
                a = function(I, x) {
                    for (I = String(I); I.length < x;) I = " " + I;
                    return I
                };
            console.info("%c⏱ " + a(p, 5) + " /" + a(f, 5) + " ms", `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(` + Math.max(0, Math.min(120 - 120 * y, 120)) + "deg 100% 31%);", e == null ? void 0 : e.key)
        }
        return e == null || e.onChange == null || e.onChange(o), o
    }
}

function be(t, i) {
    if (t === void 0) throw new Error("Unexpected undefined" + (i ? ": " + i : ""));
    return t
}
var ct = function(i, e) {
    return Math.abs(i - e) < 1
};
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var dt = function(i) {
        return i
    },
    ft = function(i) {
        for (var e = Math.max(i.startIndex - i.overscan, 0), n = Math.min(i.endIndex + i.overscan, i.count - 1), r = [], o = e; o <= n; o++) r.push(o);
        return r
    },
    pt = function(i, e) {
        var n = i.scrollElement;
        if (n) {
            var r = function(u) {
                var c = u.width,
                    s = u.height;
                e({
                    width: Math.round(c),
                    height: Math.round(s)
                })
            };
            r(n.getBoundingClientRect());
            var o = new ResizeObserver(function(l) {
                var u = l[0];
                if (u != null && u.borderBoxSize) {
                    var c = u.borderBoxSize[0];
                    if (c) {
                        r({
                            width: c.inlineSize,
                            height: c.blockSize
                        });
                        return
                    }
                }
                r(n.getBoundingClientRect())
            });
            return o.observe(n, {
                    box: "border-box"
                }),
                function() {
                    o.unobserve(n)
                }
        }
    },
    vt = function(i, e) {
        var n = i.scrollElement;
        if (n) {
            var r = function() {
                e(n[i.options.horizontal ? "scrollLeft" : "scrollTop"])
            };
            return r(), n.addEventListener("scroll", r, {
                    passive: !0
                }),
                function() {
                    n.removeEventListener("scroll", r)
                }
        }
    },
    bt = function(i, e, n) {
        if (e != null && e.borderBoxSize) {
            var r = e.borderBoxSize[0];
            if (r) {
                var o = Math.round(r[n.options.horizontal ? "inlineSize" : "blockSize"]);
                return o
            }
        }
        return Math.round(i.getBoundingClientRect()[n.options.horizontal ? "width" : "height"])
    },
    mt = function(i, e, n) {
        var r, o, l = e.adjustments,
            u = l === void 0 ? 0 : l,
            c = e.behavior,
            s = i + u;
        (r = n.scrollElement) == null || r.scrollTo == null || r.scrollTo((o = {}, o[n.options.horizontal ? "left" : "top"] = s, o.behavior = c, o))
    },
    gt = function(i) {
        var e = this;
        this.unsubs = [], this.scrollElement = null, this.isScrolling = !1, this.isScrollingTimeoutId = null, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = new Map, this.pendingMeasuredCacheIndexes = [], this.scrollDirection = null, this.scrollAdjustments = 0, this.measureElementCache = new Map, this.observer = function() {
            var n = null,
                r = function() {
                    return n || (typeof ResizeObserver != "undefined" ? n = new ResizeObserver(function(l) {
                        l.forEach(function(u) {
                            e._measureElement(u.target, u)
                        })
                    }) : null)
                };
            return {
                disconnect: function() {
                    var l;
                    return (l = r()) == null ? void 0 : l.disconnect()
                },
                observe: function(l) {
                    var u;
                    return (u = r()) == null ? void 0 : u.observe(l, {
                        box: "border-box"
                    })
                },
                unobserve: function(l) {
                    var u;
                    return (u = r()) == null ? void 0 : u.unobserve(l)
                }
            }
        }(), this.range = null, this.setOptions = function(n) {
            Object.entries(n).forEach(function(r) {
                var o = r[0],
                    l = r[1];
                typeof l == "undefined" && delete n[o]
            }), e.options = ce({
                debug: !1,
                initialOffset: 0,
                overscan: 1,
                paddingStart: 0,
                paddingEnd: 0,
                scrollPaddingStart: 0,
                scrollPaddingEnd: 0,
                horizontal: !1,
                getItemKey: dt,
                rangeExtractor: ft,
                onChange: function() {},
                measureElement: bt,
                initialRect: {
                    width: 0,
                    height: 0
                },
                scrollMargin: 0,
                scrollingDelay: 150,
                indexAttribute: "data-index",
                initialMeasurementsCache: [],
                lanes: 1
            }, n)
        }, this.notify = function(n) {
            e.options.onChange == null || e.options.onChange(e, n)
        }, this.maybeNotify = Z(function() {
            return e.calculateRange(), [e.isScrolling, e.range ? e.range.startIndex : null, e.range ? e.range.endIndex : null]
        }, function(n) {
            e.notify(n)
        }, {
            key: !1,
            debug: function() {
                return e.options.debug
            },
            initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
        }), this.cleanup = function() {
            e.unsubs.filter(Boolean).forEach(function(n) {
                return n()
            }), e.unsubs = [], e.scrollElement = null
        }, this._didMount = function() {
            return e.measureElementCache.forEach(e.observer.observe),
                function() {
                    e.observer.disconnect(), e.cleanup()
                }
        }, this._willUpdate = function() {
            var n = e.options.getScrollElement();
            e.scrollElement !== n && (e.cleanup(), e.scrollElement = n, e._scrollToOffset(e.scrollOffset, {
                adjustments: void 0,
                behavior: void 0
            }), e.unsubs.push(e.options.observeElementRect(e, function(r) {
                e.scrollRect = r, e.maybeNotify()
            })), e.unsubs.push(e.options.observeElementOffset(e, function(r) {
                e.scrollAdjustments = 0, e.scrollOffset !== r && (e.isScrollingTimeoutId !== null && (clearTimeout(e.isScrollingTimeoutId), e.isScrollingTimeoutId = null), e.isScrolling = !0, e.scrollDirection = e.scrollOffset < r ? "forward" : "backward", e.scrollOffset = r, e.maybeNotify(), e.isScrollingTimeoutId = setTimeout(function() {
                    e.isScrollingTimeoutId = null, e.isScrolling = !1, e.scrollDirection = null, e.maybeNotify()
                }, e.options.scrollingDelay))
            })))
        }, this.getSize = function() {
            return e.scrollRect[e.options.horizontal ? "width" : "height"]
        }, this.memoOptions = Z(function() {
            return [e.options.count, e.options.paddingStart, e.options.scrollMargin, e.options.getItemKey]
        }, function(n, r, o, l) {
            return e.pendingMeasuredCacheIndexes = [], {
                count: n,
                paddingStart: r,
                scrollMargin: o,
                getItemKey: l
            }
        }, {
            key: !1
        }), this.getFurthestMeasurement = function(n, r) {
            for (var o = new Map, l = new Map, u = r - 1; u >= 0; u--) {
                var c = n[u];
                if (!o.has(c.lane)) {
                    var s = l.get(c.lane);
                    if (s == null || c.end > s.end ? l.set(c.lane, c) : c.end < s.end && o.set(c.lane, !0), o.size === e.options.lanes) break
                }
            }
            return l.size === e.options.lanes ? Array.from(l.values()).sort(function(f, p) {
                return f.end - p.end
            })[0] : void 0
        }, this.getMeasurements = Z(function() {
            return [e.memoOptions(), e.itemSizeCache]
        }, function(n, r) {
            var o = n.count,
                l = n.paddingStart,
                u = n.scrollMargin,
                c = n.getItemKey,
                s = e.pendingMeasuredCacheIndexes.length > 0 ? Math.min.apply(Math, e.pendingMeasuredCacheIndexes) : 0;
            e.pendingMeasuredCacheIndexes = [];
            for (var f = e.measurementsCache.slice(0, s), p = s; p < o; p++) {
                var y = c(p),
                    a = e.options.lanes === 1 ? f[p - 1] : e.getFurthestMeasurement(f, p),
                    d = a ? a.end : l + u,
                    I = r.get(y),
                    x = typeof I == "number" ? I : e.options.estimateSize(p),
                    b = d + x,
                    w = a ? a.lane : p % e.options.lanes;
                f[p] = {
                    index: p,
                    start: d,
                    size: x,
                    end: b,
                    key: y,
                    lane: w
                }
            }
            return e.measurementsCache = f, f
        }, {
            key: !1,
            debug: function() {
                return e.options.debug
            }
        }), this.calculateRange = Z(function() {
            return [e.getMeasurements(), e.getSize(), e.scrollOffset]
        }, function(n, r, o) {
            return e.range = n.length > 0 && r > 0 ? ht({
                measurements: n,
                outerSize: r,
                scrollOffset: o
            }) : null
        }, {
            key: !1,
            debug: function() {
                return e.options.debug
            }
        }), this.getIndexes = Z(function() {
            return [e.options.rangeExtractor, e.calculateRange(), e.options.overscan, e.options.count]
        }, function(n, r, o, l) {
            return r === null ? [] : n(ce({}, r, {
                overscan: o,
                count: l
            }))
        }, {
            key: !1,
            debug: function() {
                return e.options.debug
            }
        }), this.indexFromElement = function(n) {
            var r = e.options.indexAttribute,
                o = n.getAttribute(r);
            return o ? parseInt(o, 10) : (console.warn("Missing attribute name '" + r + "={index}' on measured element."), -1)
        }, this._measureElement = function(n, r) {
            var o = e.measurementsCache[e.indexFromElement(n)];
            if (!o || !n.isConnected) {
                e.measureElementCache.forEach(function(c, s) {
                    c === n && (e.observer.unobserve(n), e.measureElementCache.delete(s))
                });
                return
            }
            var l = e.measureElementCache.get(o.key);
            l !== n && (l && e.observer.unobserve(l), e.observer.observe(n), e.measureElementCache.set(o.key, n));
            var u = e.options.measureElement(n, r, e);
            e.resizeItem(o, u)
        }, this.resizeItem = function(n, r) {
            var o, l = (o = e.itemSizeCache.get(n.key)) != null ? o : n.size,
                u = r - l;
            u !== 0 && (n.start < e.scrollOffset && e._scrollToOffset(e.scrollOffset, {
                adjustments: e.scrollAdjustments += u,
                behavior: void 0
            }), e.pendingMeasuredCacheIndexes.push(n.index), e.itemSizeCache = new Map(e.itemSizeCache.set(n.key, r)), e.notify(!1))
        }, this.measureElement = function(n) {
            n && e._measureElement(n, void 0)
        }, this.getVirtualItems = Z(function() {
            return [e.getIndexes(), e.getMeasurements()]
        }, function(n, r) {
            for (var o = [], l = 0, u = n.length; l < u; l++) {
                var c = n[l],
                    s = r[c];
                o.push(s)
            }
            return o
        }, {
            key: !1,
            debug: function() {
                return e.options.debug
            }
        }), this.getVirtualItemForOffset = function(n) {
            var r = e.getMeasurements();
            return be(r[Le(0, r.length - 1, function(o) {
                return be(r[o]).start
            }, n)])
        }, this.getOffsetForAlignment = function(n, r) {
            var o = e.getSize();
            r === "auto" && (n <= e.scrollOffset ? r = "start" : n >= e.scrollOffset + o ? r = "end" : r = "start"), r === "start" ? n = n : r === "end" ? n = n - o : r === "center" && (n = n - o / 2);
            var l = e.options.horizontal ? "scrollWidth" : "scrollHeight",
                u = e.scrollElement ? "document" in e.scrollElement ? e.scrollElement.document.documentElement[l] : e.scrollElement[l] : 0,
                c = u - e.getSize();
            return Math.max(Math.min(c, n), 0)
        }, this.getOffsetForIndex = function(n, r) {
            r === void 0 && (r = "auto"), n = Math.max(0, Math.min(n, e.options.count - 1));
            var o = be(e.getMeasurements()[n]);
            if (r === "auto")
                if (o.end >= e.scrollOffset + e.getSize() - e.options.scrollPaddingEnd) r = "end";
                else if (o.start <= e.scrollOffset + e.options.scrollPaddingStart) r = "start";
            else return [e.scrollOffset, r];
            var l = r === "end" ? o.end + e.options.scrollPaddingEnd : o.start - e.options.scrollPaddingStart;
            return [e.getOffsetForAlignment(l, r), r]
        }, this.isDynamicMode = function() {
            return e.measureElementCache.size > 0
        }, this.cancelScrollToIndex = function() {
            e.scrollToIndexTimeoutId !== null && (clearTimeout(e.scrollToIndexTimeoutId), e.scrollToIndexTimeoutId = null)
        }, this.scrollToOffset = function(n, r) {
            var o = r === void 0 ? {} : r,
                l = o.align,
                u = l === void 0 ? "start" : l,
                c = o.behavior;
            e.cancelScrollToIndex(), c === "smooth" && e.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), e._scrollToOffset(e.getOffsetForAlignment(n, u), {
                adjustments: void 0,
                behavior: c
            })
        }, this.scrollToIndex = function(n, r) {
            var o = r === void 0 ? {} : r,
                l = o.align,
                u = l === void 0 ? "auto" : l,
                c = o.behavior;
            n = Math.max(0, Math.min(n, e.options.count - 1)), e.cancelScrollToIndex(), c === "smooth" && e.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
            var s = e.getOffsetForIndex(n, u),
                f = s[0],
                p = s[1];
            e._scrollToOffset(f, {
                adjustments: void 0,
                behavior: c
            }), c !== "smooth" && e.isDynamicMode() && (e.scrollToIndexTimeoutId = setTimeout(function() {
                e.scrollToIndexTimeoutId = null;
                var y = e.measureElementCache.has(e.options.getItemKey(n));
                if (y) {
                    var a = e.getOffsetForIndex(n, p),
                        d = a[0];
                    ct(d, e.scrollOffset) || e.scrollToIndex(n, {
                        align: p,
                        behavior: c
                    })
                } else e.scrollToIndex(n, {
                    align: p,
                    behavior: c
                })
            }))
        }, this.scrollBy = function(n, r) {
            var o = r === void 0 ? {} : r,
                l = o.behavior;
            e.cancelScrollToIndex(), l === "smooth" && e.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), e._scrollToOffset(e.scrollOffset + n, {
                adjustments: void 0,
                behavior: l
            })
        }, this.getTotalSize = function() {
            var n;
            return (((n = e.getMeasurements()[e.options.count - 1]) == null ? void 0 : n.end) || e.options.paddingStart) - e.options.scrollMargin + e.options.paddingEnd
        }, this._scrollToOffset = function(n, r) {
            var o = r.adjustments,
                l = r.behavior;
            e.options.scrollToFn(n, {
                behavior: l,
                adjustments: o
            }, e)
        }, this.measure = function() {
            e.itemSizeCache = new Map, e.notify(!1)
        }, this.setOptions(i), this.scrollRect = this.options.initialRect, this.scrollOffset = this.options.initialOffset, this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach(function(n) {
            e.itemSizeCache.set(n.key, n.size)
        }), this.maybeNotify()
    },
    Le = function(i, e, n, r) {
        for (; i <= e;) {
            var o = (i + e) / 2 | 0,
                l = n(o);
            if (l < r) i = o + 1;
            else if (l > r) e = o - 1;
            else return o
        }
        return i > 0 ? i - 1 : 0
    };

function ht(t) {
    for (var i = t.measurements, e = t.outerSize, n = t.scrollOffset, r = i.length - 1, o = function(s) {
            return i[s].start
        }, l = Le(0, r, o, n), u = l; u < r && i[u].end < n + e;) u++;
    return {
        startIndex: l,
        endIndex: u
    }
}
/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var xt = typeof document != "undefined" ? He : de;

function Ot(t) {
    var i = Ae(function() {
            return {}
        }, {})[1],
        e = se({}, t, {
            onChange: function(l, u) {
                u ? Je(i) : i(), t.onChange == null || t.onChange(l, u)
            }
        }),
        n = ge(function() {
            return new gt(e)
        }),
        r = n[0];
    return r.setOptions(e), de(function() {
        return r._didMount()
    }, []), xt(function() {
        return r._willUpdate()
    }), r
}

function It(t) {
    return Ot(se({
        observeElementRect: pt,
        observeElementOffset: vt,
        scrollToFn: mt
    }, t))
}

function Ie(t, i) {
    let [e, n] = ge(t), r = _e(t);
    return V(() => n(r.current), [r, n, ...i]), e
}

function De(t) {
    return [t.screenX, t.screenY]
}

function St() {
    let t = D([-1, -1]);
    return {
        wasMoved(i) {
            let e = De(i);
            return t.current[0] === e[0] && t.current[1] === e[1] ? !1 : (t.current = e, !0)
        },
        update(i) {
            t.current = De(i)
        }
    }
}

function yt({
    container: t,
    accept: i,
    walk: e,
    enabled: n = !0
}) {
    let r = D(i),
        o = D(e);
    de(() => {
        r.current = i, o.current = e
    }, [i, e]), V(() => {
        if (!t || !n) return;
        let l = nt(t);
        if (!l) return;
        let u = r.current,
            c = o.current,
            s = Object.assign(p => u(p), {
                acceptNode: u
            }),
            f = l.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, s, !1);
        for (; f.nextNode();) c(f.currentNode)
    }, [t, n, r, o])
}

function Tt(t) {
    throw new Error("Unexpected object: " + t)
}
var E = (t => (t[t.First = 0] = "First", t[t.Previous = 1] = "Previous", t[t.Next = 2] = "Next", t[t.Last = 3] = "Last", t[t.Specific = 4] = "Specific", t[t.Nothing = 5] = "Nothing", t))(E || {});

function Fe(t, i) {
    let e = i.resolveItems();
    if (e.length <= 0) return null;
    let n = i.resolveActiveIndex(),
        r = n != null ? n : -1;
    switch (t.focus) {
        case 0:
            {
                for (let o = 0; o < e.length; ++o)
                    if (!i.resolveDisabled(e[o], o, e)) return o;
                return n
            }
        case 1:
            {
                for (let o = r - 1; o >= 0; --o)
                    if (!i.resolveDisabled(e[o], o, e)) return o;
                return n
            }
        case 2:
            {
                for (let o = r + 1; o < e.length; ++o)
                    if (!i.resolveDisabled(e[o], o, e)) return o;
                return n
            }
        case 3:
            {
                for (let o = e.length - 1; o >= 0; --o)
                    if (!i.resolveDisabled(e[o], o, e)) return o;
                return n
            }
        case 4:
            {
                for (let o = 0; o < e.length; ++o)
                    if (i.resolveId(e[o], o, e) === t.id) return o;
                return n
            }
        case 5:
            return null;
        default:
            Tt(t)
    }
}
var Ct = (t => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(Ct || {}),
    Et = (t => (t[t.Single = 0] = "Single", t[t.Multi = 1] = "Multi", t))(Et || {}),
    Rt = (t => (t[t.Pointer = 0] = "Pointer", t[t.Focus = 1] = "Focus", t[t.Other = 2] = "Other", t))(Rt || {}),
    Mt = (t => (t[t.OpenCombobox = 0] = "OpenCombobox", t[t.CloseCombobox = 1] = "CloseCombobox", t[t.GoToOption = 2] = "GoToOption", t[t.RegisterOption = 3] = "RegisterOption", t[t.UnregisterOption = 4] = "UnregisterOption", t[t.RegisterLabel = 5] = "RegisterLabel", t[t.SetActivationTrigger = 6] = "SetActivationTrigger", t[t.UpdateVirtualOptions = 7] = "UpdateVirtualOptions", t))(Mt || {});

function me(t, i = e => e) {
    let e = t.activeOptionIndex !== null ? t.options[t.activeOptionIndex] : null,
        n = i(t.options.slice()),
        r = n.length > 0 && n[0].dataRef.current.order !== null ? n.sort((l, u) => l.dataRef.current.order - u.dataRef.current.order) : st(n, l => l.dataRef.current.domRef.current),
        o = e ? r.indexOf(e) : null;
    return o === -1 && (o = null), {
        options: r,
        activeOptionIndex: o
    }
}
let wt = {
        1(t) {
            var i;
            return (i = t.dataRef.current) != null && i.disabled || t.comboboxState === 1 ? t : z(R({}, t), {
                activeOptionIndex: null,
                comboboxState: 1
            })
        },
        0(t) {
            var i, e;
            if ((i = t.dataRef.current) != null && i.disabled || t.comboboxState === 0) return t;
            if ((e = t.dataRef.current) != null && e.value) {
                let n = t.dataRef.current.calculateIndex(t.dataRef.current.value);
                if (n !== -1) return z(R({}, t), {
                    activeOptionIndex: n,
                    comboboxState: 0
                })
            }
            return z(R({}, t), {
                comboboxState: 0
            })
        },
        2(t, i) {
            var e, n, r, o, l;
            if ((e = t.dataRef.current) != null && e.disabled || (n = t.dataRef.current) != null && n.optionsRef.current && !((r = t.dataRef.current) != null && r.optionsPropsRef.current.static) && t.comboboxState === 1) return t;
            if (t.virtual) {
                let f = i.focus === E.Specific ? i.idx : Fe(i, {
                        resolveItems: () => t.virtual.options,
                        resolveActiveIndex: () => {
                            var y, a;
                            return (a = (y = t.activeOptionIndex) != null ? y : t.virtual.options.findIndex(d => !t.virtual.disabled(d))) != null ? a : null
                        },
                        resolveDisabled: t.virtual.disabled,
                        resolveId() {
                            throw new Error("Function not implemented.")
                        }
                    }),
                    p = (o = i.trigger) != null ? o : 2;
                return t.activeOptionIndex === f && t.activationTrigger === p ? t : z(R({}, t), {
                    activeOptionIndex: f,
                    activationTrigger: p
                })
            }
            let u = me(t);
            if (u.activeOptionIndex === null) {
                let f = u.options.findIndex(p => !p.dataRef.current.disabled);
                f !== -1 && (u.activeOptionIndex = f)
            }
            let c = i.focus === E.Specific ? i.idx : Fe(i, {
                    resolveItems: () => u.options,
                    resolveActiveIndex: () => u.activeOptionIndex,
                    resolveId: f => f.id,
                    resolveDisabled: f => f.dataRef.current.disabled
                }),
                s = (l = i.trigger) != null ? l : 2;
            return t.activeOptionIndex === c && t.activationTrigger === s ? t : z(R(R({}, t), u), {
                activeOptionIndex: c,
                activationTrigger: s
            })
        },
        3: (t, i) => {
            var e, n, r;
            if ((e = t.dataRef.current) != null && e.virtual) return z(R({}, t), {
                options: [...t.options, i.payload]
            });
            let o = i.payload,
                l = me(t, c => (c.push(o), c));
            t.activeOptionIndex === null && (n = t.dataRef.current) != null && n.isSelected(i.payload.dataRef.current.value) && (l.activeOptionIndex = l.options.indexOf(o));
            let u = z(R(R({}, t), l), {
                activationTrigger: 2
            });
            return (r = t.dataRef.current) != null && r.__demoMode && t.dataRef.current.value === void 0 && (u.activeOptionIndex = 0), u
        },
        4: (t, i) => {
            var e;
            if ((e = t.dataRef.current) != null && e.virtual) return z(R({}, t), {
                options: t.options.filter(r => r.id !== i.id)
            });
            let n = me(t, r => {
                let o = r.findIndex(l => l.id === i.id);
                return o !== -1 && r.splice(o, 1), r
            });
            return z(R(R({}, t), n), {
                activationTrigger: 2
            })
        },
        5: (t, i) => t.labelId === i.id ? t : z(R({}, t), {
            labelId: i.id
        }),
        6: (t, i) => t.activationTrigger === i.trigger ? t : z(R({}, t), {
            activationTrigger: i.trigger
        }),
        7: (t, i) => {
            var e;
            if (((e = t.virtual) == null ? void 0 : e.options) === i.options) return t;
            let n = t.activeOptionIndex;
            if (t.activeOptionIndex !== null) {
                let r = i.options.indexOf(t.virtual.options[t.activeOptionIndex]);
                r !== -1 ? n = r : n = null
            }
            return z(R({}, t), {
                activeOptionIndex: n,
                virtual: Object.assign({}, t.virtual, {
                    options: i.options
                })
            })
        }
    },
    Se = he(null);
Se.displayName = "ComboboxActionsContext";

function re(t) {
    let i = xe(Se);
    if (i === null) {
        let e = new Error(`<${t} /> is missing a parent <Combobox /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(e, re), e
    }
    return i
}
let Ne = he(null);

function $t(t) {
    var i;
    let e = J("VirtualProvider"),
        [n, r] = K(() => {
            let c = e.optionsRef.current;
            if (!c) return [0, 0];
            let s = window.getComputedStyle(c);
            return [parseFloat(s.paddingBlockStart || s.paddingTop), parseFloat(s.paddingBlockEnd || s.paddingBottom)]
        }, [e.optionsRef.current]),
        o = It({
            scrollPaddingStart: n,
            scrollPaddingEnd: r,
            count: e.virtual.options.length,
            estimateSize() {
                return 40
            },
            getScrollElement() {
                var c;
                return (c = e.optionsRef.current) != null ? c : null
            },
            overscan: 12
        }),
        [l, u] = ge(0);
    return V(() => {
        u(c => c + 1)
    }, [(i = e.virtual) == null ? void 0 : i.options]), B.createElement(Ne.Provider, {
        value: o
    }, B.createElement("div", {
        style: {
            position: "relative",
            width: "100%",
            height: `${o.getTotalSize()}px`
        },
        ref: c => {
            if (c) {
                if (typeof process != "undefined" && {}.JEST_WORKER_ID !== void 0 || e.activationTrigger === 0) return;
                e.activeOptionIndex !== null && e.virtual.options.length > e.activeOptionIndex && o.scrollToIndex(e.activeOptionIndex)
            }
        }
    }, o.getVirtualItems().map(c => {
        var s;
        return B.createElement(ke, {
            key: c.key
        }, B.cloneElement((s = t.children) == null ? void 0 : s.call(t, {
            option: e.virtual.options[c.index],
            open: e.comboboxState === 0
        }), {
            key: `${l}-${c.key}`,
            "data-index": c.index,
            "aria-setsize": e.virtual.options.length,
            "aria-posinset": c.index + 1,
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                transform: `translateY(${c.start}px)`,
                overflowAnchor: "none"
            }
        }))
    })))
}
let ye = he(null);
ye.displayName = "ComboboxDataContext";

function J(t) {
    let i = xe(ye);
    if (i === null) {
        let e = new Error(`<${t} /> is missing a parent <Combobox /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(e, J), e
    }
    return i
}

function Pt(t, i) {
    return G(i.type, wt, t, i)
}
let zt = ke;

function Dt(t, i) {
    let Te = t,
        {
            value: e,
            defaultValue: n,
            onChange: r,
            form: o,
            name: l,
            by: u = null,
            disabled: c = !1,
            __demoMode: s = !1,
            nullable: f = !1,
            multiple: p = !1,
            immediate: y = !1,
            virtual: a = null
        } = Te,
        d = q(Te, ["value", "defaultValue", "onChange", "form", "name", "by", "disabled", "__demoMode", "nullable", "multiple", "immediate", "virtual"]),
        I = !1,
        x = null,
        [b = p ? [] : void 0, w] = Qe(e, r, n),
        [$, F] = Ae(Pt, {
            dataRef: We(),
            comboboxState: s ? 0 : 1,
            options: [],
            virtual: null,
            activeOptionIndex: null,
            activationTrigger: 2,
            labelId: null
        }),
        A = D(!1),
        H = D({
            static: !1,
            hold: !1
        }),
        W = D(null),
        X = D(null),
        te = D(null),
        Y = D(null),
        S = h(typeof u == "string" ? (m, O) => {
            let k = u;
            return (m == null ? void 0 : m[k]) === (O == null ? void 0 : O[k])
        } : u != null ? u : (m, O) => m === O),
        T = h(m => $.options.findIndex(O => S(O.dataRef.current.value, m))),
        N = Xe(m => G(g.mode, {
            1: () => b.some(O => S(O, m)),
            0: () => S(b, m)
        }), [b]),
        fe = h(m => $.activeOptionIndex === T(m)),
        g = K(() => z(R({}, $), {
            immediate: I,
            optionsPropsRef: H,
            labelRef: W,
            inputRef: X,
            buttonRef: te,
            optionsRef: Y,
            value: b,
            defaultValue: n,
            disabled: c,
            mode: p ? 1 : 0,
            virtual: $.virtual,
            get activeOptionIndex() {
                if (A.current && $.activeOptionIndex === null && $.options.length > 0) {
                    let m = $.options.findIndex(O => !O.dataRef.current.disabled);
                    if (m !== -1) return m
                }
                return $.activeOptionIndex
            },
            calculateIndex: T,
            compare: S,
            isSelected: N,
            isActive: fe,
            nullable: f,
            __demoMode: s
        }), [b, n, c, p, f, s, $, x]);
    V(() => {}, [x, void 0]), V(() => {
        $.dataRef.current = g
    }, [g]), ot([g.buttonRef, g.inputRef, g.optionsRef], () => ve.closeCombobox(), g.comboboxState === 0);
    let v = K(() => {
            var m, O, k;
            return {
                open: g.comboboxState === 0,
                disabled: c,
                activeIndex: g.activeOptionIndex,
                activeOption: g.activeOptionIndex === null ? null : g.virtual ? g.virtual.options[(m = g.activeOptionIndex) != null ? m : 0] : (k = (O = g.options[g.activeOptionIndex]) == null ? void 0 : O.dataRef.current.value) != null ? k : null,
                value: b
            }
        }, [g, c, b]),
        P = h(() => {
            if (g.activeOptionIndex !== null) {
                if (g.virtual) pe(g.virtual.options[g.activeOptionIndex]);
                else {
                    let {
                        dataRef: m
                    } = g.options[g.activeOptionIndex];
                    pe(m.current.value)
                }
                ve.goToOption(E.Specific, g.activeOptionIndex)
            }
        }),
        M = h(() => {
            F({
                type: 0
            }), A.current = !0
        }),
        j = h(() => {
            F({
                type: 1
            }), A.current = !1
        }),
        C = h((m, O, k) => (A.current = !1, m === E.Specific ? F({
            type: 2,
            focus: E.Specific,
            idx: O,
            trigger: k
        }) : F({
            type: 2,
            focus: m,
            trigger: k
        }))),
        _ = h((m, O) => (F({
            type: 3,
            payload: {
                id: m,
                dataRef: O
            }
        }), () => {
            g.isActive(O.current.value) && (A.current = !0), F({
                type: 4,
                id: m
            })
        })),
        U = h(m => (F({
            type: 5,
            id: m
        }), () => F({
            type: 5,
            id: null
        }))),
        pe = h(m => G(g.mode, {
            0() {
                return w == null ? void 0 : w(m)
            },
            1() {
                let O = g.value.slice(),
                    k = O.findIndex(le => S(le, m));
                return k === -1 ? O.push(m) : O.splice(k, 1), w == null ? void 0 : w(O)
            }
        })),
        je = h(m => {
            F({
                type: 6,
                trigger: m
            })
        }),
        ve = K(() => ({
            onChange: pe,
            registerOption: _,
            registerLabel: U,
            goToOption: C,
            closeCombobox: j,
            openCombobox: M,
            setActivationTrigger: je,
            selectActiveOption: P
        }), []),
        Ve = i === null ? {} : {
            ref: i
        },
        ie = D(null),
        Be = Oe();
    return de(() => {
        ie.current && n !== void 0 && Be.addEventListener(ie.current, "reset", () => {
            w == null || w(n)
        })
    }, [ie, w]), B.createElement(Se.Provider, {
        value: ve
    }, B.createElement(ye.Provider, {
        value: g
    }, B.createElement(Ye, {
        value: G(g.comboboxState, {
            0: ue.Open,
            1: ue.Closed
        })
    }, l != null && b != null && et({
        [l]: b
    }).map(([m, O], k) => B.createElement(rt, R({
        features: it.Hidden,
        ref: k === 0 ? le => {
            var Ce;
            ie.current = (Ce = le == null ? void 0 : le.closest("form")) != null ? Ce : null
        } : void 0
    }, Ze({
        key: m,
        as: "input",
        type: "hidden",
        hidden: !0,
        readOnly: !0,
        form: o,
        name: m,
        value: O
    })))), ee({
        ourProps: Ve,
        theirProps: d,
        slot: v,
        defaultTag: zt,
        name: "Combobox"
    }))))
}
let Ft = "input";

function At(t, i) {
    var e, n, r, o, l;
    let u = oe(),
        g = t,
        {
            id: c = `headlessui-combobox-input-${u}`,
            onChange: s,
            displayValue: f,
            type: p = "text"
        } = g,
        y = q(g, ["id", "onChange", "displayValue", "type"]),
        a = J("Combobox.Input"),
        d = re("Combobox.Input"),
        I = ne(a.inputRef, i),
        x = lt(a.inputRef),
        b = D(!1),
        w = Oe(),
        $ = h(() => {
            d.onChange(null), a.optionsRef.current && (a.optionsRef.current.scrollTop = 0), d.goToOption(E.Nothing)
        }),
        F = function() {
            var v;
            return typeof f == "function" && a.value !== void 0 ? (v = f(a.value)) != null ? v : "" : typeof a.value == "string" ? a.value : ""
        }();
    Pe(([v, P], [M, j]) => {
        if (b.current) return;
        let C = a.inputRef.current;
        C && ((j === 0 && P === 1 || v !== M) && (C.value = v), requestAnimationFrame(() => {
            if (b.current || !C || (x == null ? void 0 : x.activeElement) !== C) return;
            let {
                selectionStart: _,
                selectionEnd: U
            } = C;
            Math.abs((U != null ? U : 0) - (_ != null ? _ : 0)) === 0 && _ === 0 && C.setSelectionRange(C.value.length, C.value.length)
        }))
    }, [F, a.comboboxState, x]), Pe(([v], [P]) => {
        if (v === 0 && P === 1) {
            if (b.current) return;
            let M = a.inputRef.current;
            if (!M) return;
            let j = M.value,
                {
                    selectionStart: C,
                    selectionEnd: _,
                    selectionDirection: U
                } = M;
            M.value = "", M.value = j, U !== null ? M.setSelectionRange(C, _, U) : M.setSelectionRange(C, _)
        }
    }, [a.comboboxState]);
    let A = D(!1),
        H = h(() => {
            A.current = !0
        }),
        W = h(() => {
            w.nextFrame(() => {
                A.current = !1
            })
        }),
        X = h(v => {
            switch (b.current = !0, v.key) {
                case L.Enter:
                    if (b.current = !1, a.comboboxState !== 0 || A.current) return;
                    if (v.preventDefault(), v.stopPropagation(), a.activeOptionIndex === null) {
                        d.closeCombobox();
                        return
                    }
                    d.selectActiveOption(), a.mode === 0 && d.closeCombobox();
                    break;
                case L.ArrowDown:
                    return b.current = !1, v.preventDefault(), v.stopPropagation(), G(a.comboboxState, {
                        0: () => d.goToOption(E.Next),
                        1: () => d.openCombobox()
                    });
                case L.ArrowUp:
                    return b.current = !1, v.preventDefault(), v.stopPropagation(), G(a.comboboxState, {
                        0: () => d.goToOption(E.Previous),
                        1: () => {
                            d.openCombobox(), w.nextFrame(() => {
                                a.value || d.goToOption(E.Last)
                            })
                        }
                    });
                case L.Home:
                    if (v.shiftKey) break;
                    return b.current = !1, v.preventDefault(), v.stopPropagation(), d.goToOption(E.First);
                case L.PageUp:
                    return b.current = !1, v.preventDefault(), v.stopPropagation(), d.goToOption(E.First);
                case L.End:
                    if (v.shiftKey) break;
                    return b.current = !1, v.preventDefault(), v.stopPropagation(), d.goToOption(E.Last);
                case L.PageDown:
                    return b.current = !1, v.preventDefault(), v.stopPropagation(), d.goToOption(E.Last);
                case L.Escape:
                    return b.current = !1, a.comboboxState !== 0 ? void 0 : (v.preventDefault(), a.optionsRef.current && !a.optionsPropsRef.current.static && v.stopPropagation(), a.nullable && a.mode === 0 && a.value === null && $(), d.closeCombobox());
                case L.Tab:
                    if (b.current = !1, a.comboboxState !== 0) return;
                    a.mode === 0 && a.activationTrigger !== 1 && d.selectActiveOption(), d.closeCombobox();
                    break
            }
        }),
        te = h(v => {
            s == null || s(v), a.nullable && a.mode === 0 && v.target.value === "" && $(), d.openCombobox()
        }),
        Y = h(v => {
            var P, M, j;
            let C = (P = v.relatedTarget) != null ? P : ze.find(_ => _ !== v.currentTarget);
            if (b.current = !1, !((M = a.optionsRef.current) != null && M.contains(C)) && !((j = a.buttonRef.current) != null && j.contains(C)) && a.comboboxState === 0) return v.preventDefault(), a.mode === 0 && (a.nullable && a.value === null ? $() : a.activationTrigger !== 1 && d.selectActiveOption()), d.closeCombobox()
        }),
        S = h(v => {
            var P, M, j;
            let C = (P = v.relatedTarget) != null ? P : ze.find(_ => _ !== v.currentTarget);
            (M = a.buttonRef.current) != null && M.contains(C) || (j = a.optionsRef.current) != null && j.contains(C) || a.disabled || a.immediate && a.comboboxState !== 0 && (d.openCombobox(), w.nextFrame(() => {
                d.setActivationTrigger(1)
            }))
        }),
        T = Ie(() => {
            if (a.labelId) return [a.labelId].join(" ")
        }, [a.labelId]),
        N = K(() => ({
            open: a.comboboxState === 0,
            disabled: a.disabled
        }), [a]),
        fe = {
            ref: I,
            id: c,
            role: "combobox",
            type: p,
            "aria-controls": (e = a.optionsRef.current) == null ? void 0 : e.id,
            "aria-expanded": a.comboboxState === 0,
            "aria-activedescendant": a.activeOptionIndex === null ? void 0 : a.virtual ? (n = a.options.find(v => {
                var P;
                return !((P = a.virtual) != null && P.disabled(v.dataRef.current.value)) && a.compare(v.dataRef.current.value, a.virtual.options[a.activeOptionIndex])
            })) == null ? void 0 : n.id : (r = a.options[a.activeOptionIndex]) == null ? void 0 : r.id,
            "aria-labelledby": T,
            "aria-autocomplete": "list",
            defaultValue: (l = (o = t.defaultValue) != null ? o : a.defaultValue !== void 0 ? f == null ? void 0 : f(a.defaultValue) : null) != null ? l : a.defaultValue,
            disabled: a.disabled,
            onCompositionStart: H,
            onCompositionEnd: W,
            onKeyDown: X,
            onChange: te,
            onFocus: S,
            onBlur: Y
        };
    return ee({
        ourProps: fe,
        theirProps: y,
        slot: N,
        defaultTag: Ft,
        name: "Combobox.Input"
    })
}
let kt = "button";

function _t(t, i) {
    var e;
    let n = J("Combobox.Button"),
        r = re("Combobox.Button"),
        o = ne(n.buttonRef, i),
        l = oe(),
        I = t,
        {
            id: u = `headlessui-combobox-button-${l}`
        } = I,
        c = q(I, ["id"]),
        s = Oe(),
        f = h(x => {
            switch (x.key) {
                case L.ArrowDown:
                    return x.preventDefault(), x.stopPropagation(), n.comboboxState === 1 && r.openCombobox(), s.nextFrame(() => {
                        var b;
                        return (b = n.inputRef.current) == null ? void 0 : b.focus({
                            preventScroll: !0
                        })
                    });
                case L.ArrowUp:
                    return x.preventDefault(), x.stopPropagation(), n.comboboxState === 1 && (r.openCombobox(), s.nextFrame(() => {
                        n.value || r.goToOption(E.Last)
                    })), s.nextFrame(() => {
                        var b;
                        return (b = n.inputRef.current) == null ? void 0 : b.focus({
                            preventScroll: !0
                        })
                    });
                case L.Escape:
                    return n.comboboxState !== 0 ? void 0 : (x.preventDefault(), n.optionsRef.current && !n.optionsPropsRef.current.static && x.stopPropagation(), r.closeCombobox(), s.nextFrame(() => {
                        var b;
                        return (b = n.inputRef.current) == null ? void 0 : b.focus({
                            preventScroll: !0
                        })
                    }));
                default:
                    return
            }
        }),
        p = h(x => {
            if (at(x.currentTarget)) return x.preventDefault();
            n.comboboxState === 0 ? r.closeCombobox() : (x.preventDefault(), r.openCombobox()), s.nextFrame(() => {
                var b;
                return (b = n.inputRef.current) == null ? void 0 : b.focus({
                    preventScroll: !0
                })
            })
        }),
        y = Ie(() => {
            if (n.labelId) return [n.labelId, u].join(" ")
        }, [n.labelId, u]),
        a = K(() => ({
            open: n.comboboxState === 0,
            disabled: n.disabled,
            value: n.value
        }), [n]),
        d = {
            ref: o,
            id: u,
            type: tt(t, n.buttonRef),
            tabIndex: -1,
            "aria-haspopup": "listbox",
            "aria-controls": (e = n.optionsRef.current) == null ? void 0 : e.id,
            "aria-expanded": n.comboboxState === 0,
            "aria-labelledby": y,
            disabled: n.disabled,
            onClick: p,
            onKeyDown: f
        };
    return ee({
        ourProps: d,
        theirProps: c,
        slot: a,
        defaultTag: kt,
        name: "Combobox.Button"
    })
}
let Lt = "label";

function Nt(t, i) {
    let e = oe(),
        f = t,
        {
            id: n = `headlessui-combobox-label-${e}`
        } = f,
        r = q(f, ["id"]),
        o = J("Combobox.Label"),
        l = re("Combobox.Label"),
        u = ne(o.labelRef, i);
    V(() => l.registerLabel(n), [n]);
    let c = h(() => {
            var p;
            return (p = o.inputRef.current) == null ? void 0 : p.focus({
                preventScroll: !0
            })
        }),
        s = K(() => ({
            open: o.comboboxState === 0,
            disabled: o.disabled
        }), [o]);
    return ee({
        ourProps: {
            ref: u,
            id: n,
            onClick: c
        },
        theirProps: r,
        slot: s,
        defaultTag: Lt,
        name: "Combobox.Label"
    })
}
let jt = "ul",
    Vt = we.RenderStrategy | we.Static;

function Bt(t, i) {
    let e = oe(),
        a = t,
        {
            id: n = `headlessui-combobox-options-${e}`,
            hold: r = !1
        } = a,
        o = q(a, ["id", "hold"]),
        l = J("Combobox.Options"),
        u = ne(l.optionsRef, i),
        c = Ge(),
        s = (() => c !== null ? (c & ue.Open) === ue.Open : l.comboboxState === 0)();
    V(() => {
        var d;
        l.optionsPropsRef.current.static = (d = t.static) != null ? d : !1
    }, [l.optionsPropsRef, t.static]), V(() => {
        l.optionsPropsRef.current.hold = r
    }, [l.optionsPropsRef, r]), yt({
        container: l.optionsRef.current,
        enabled: l.comboboxState === 0,
        accept(d) {
            return d.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        },
        walk(d) {
            d.setAttribute("role", "none")
        }
    });
    let f = Ie(() => {
            var d, I;
            return (I = l.labelId) != null ? I : (d = l.buttonRef.current) == null ? void 0 : d.id
        }, [l.labelId, l.buttonRef.current]),
        p = K(() => ({
            open: l.comboboxState === 0,
            option: void 0
        }), [l]),
        y = {
            "aria-labelledby": f,
            role: "listbox",
            "aria-multiselectable": l.mode === 1 ? !0 : void 0,
            id: n,
            ref: u
        };
    return l.virtual && l.comboboxState === 0 && Object.assign(o, {
        children: B.createElement($t, null, o.children)
    }), ee({
        ourProps: y,
        theirProps: o,
        slot: p,
        defaultTag: jt,
        features: Vt,
        visible: s,
        name: "Combobox.Options"
    })
}
let Kt = "li";

function Ut(t, i) {
    var e;
    let n = oe(),
        Y = t,
        {
            id: r = `headlessui-combobox-option-${n}`,
            disabled: o = !1,
            value: l,
            order: u = null
        } = Y,
        c = q(Y, ["id", "disabled", "value", "order"]),
        s = J("Combobox.Option"),
        f = re("Combobox.Option"),
        p = s.virtual ? s.activeOptionIndex === s.calculateIndex(l) : s.activeOptionIndex === null ? !1 : ((e = s.options[s.activeOptionIndex]) == null ? void 0 : e.id) === r,
        y = s.isSelected(l),
        a = D(null),
        d = _e({
            disabled: o,
            value: l,
            domRef: a,
            order: u
        }),
        I = xe(Ne),
        x = ne(i, a, I ? I.measureElement : null),
        b = h(() => f.onChange(l));
    V(() => f.registerOption(r, d), [d, r]);
    let w = D(!(s.virtual || s.__demoMode));
    V(() => {
        if (!s.virtual || !s.__demoMode) return;
        let S = $e();
        return S.requestAnimationFrame(() => {
            w.current = !0
        }), S.dispose
    }, [s.virtual, s.__demoMode]), V(() => {
        if (!w.current || s.comboboxState !== 0 || !p || s.activationTrigger === 0) return;
        let S = $e();
        return S.requestAnimationFrame(() => {
            var T, N;
            (N = (T = a.current) == null ? void 0 : T.scrollIntoView) == null || N.call(T, {
                block: "nearest"
            })
        }), S.dispose
    }, [a, p, s.comboboxState, s.activationTrigger, s.activeOptionIndex]);
    let $ = h(S => {
            var T;
            if (o || (T = s.virtual) != null && T.disabled(l)) return S.preventDefault();
            b(), ut() || requestAnimationFrame(() => {
                var N;
                return (N = s.inputRef.current) == null ? void 0 : N.focus({
                    preventScroll: !0
                })
            }), s.mode === 0 && requestAnimationFrame(() => f.closeCombobox())
        }),
        F = h(() => {
            var S;
            if (o || (S = s.virtual) != null && S.disabled(l)) return f.goToOption(E.Nothing);
            let T = s.calculateIndex(l);
            f.goToOption(E.Specific, T)
        }),
        A = St(),
        H = h(S => A.update(S)),
        W = h(S => {
            var T;
            if (!A.wasMoved(S) || o || (T = s.virtual) != null && T.disabled(l) || p) return;
            let N = s.calculateIndex(l);
            f.goToOption(E.Specific, N, 0)
        }),
        X = h(S => {
            var T;
            A.wasMoved(S) && (o || (T = s.virtual) != null && T.disabled(l) || p && (s.optionsPropsRef.current.hold || f.goToOption(E.Nothing)))
        }),
        te = K(() => ({
            active: p,
            selected: y,
            disabled: o
        }), [p, y, o]);
    return ee({
        ourProps: {
            id: r,
            ref: x,
            role: "option",
            tabIndex: o === !0 ? void 0 : -1,
            "aria-disabled": o === !0 ? !0 : void 0,
            "aria-selected": y,
            disabled: void 0,
            onClick: $,
            onFocus: F,
            onPointerEnter: H,
            onMouseEnter: H,
            onPointerMove: W,
            onMouseMove: W,
            onPointerLeave: X,
            onMouseLeave: X
        },
        theirProps: c,
        slot: te,
        defaultTag: Kt,
        name: "Combobox.Option"
    })
}
let qt = Q(Dt),
    Jt = Q(_t),
    Ht = Q(At),
    Wt = Q(Nt),
    Xt = Q(Bt),
    Yt = Q(Ut),
    nn = Object.assign(qt, {
        Input: Ht,
        Button: Jt,
        Label: Wt,
        Options: Xt,
        Option: Yt
    });
export {
    nn as q
};