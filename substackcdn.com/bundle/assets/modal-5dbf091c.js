var k = Object.defineProperty;
var u = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty,
    N = Object.prototype.propertyIsEnumerable;
var h = (o, s, t) => s in o ? k(o, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[s] = t,
    _ = (o, s) => {
        for (var t in s || (s = {})) w.call(s, t) && h(o, t, s[t]);
        if (u)
            for (var t of u(s)) N.call(s, t) && h(o, t, s[t]);
        return o
    };
var f = (o, s, t) => (h(o, typeof s != "symbol" ? s + "" : s, t), t);
var m = (o, s, t) => new Promise((e, n) => {
    var p = r => {
            try {
                d(t.next(r))
            } catch (c) {
                n(c)
            }
        },
        a = r => {
            try {
                d(t.throw(r))
            } catch (c) {
                n(c)
            }
        },
        d = r => r.done ? e(r.value) : Promise.resolve(r.value).then(p, a);
    d((t = t.apply(o, s)).next())
});
import {
    k as I,
    g9 as y,
    g7 as b,
    g8 as B,
    bP as D,
    y as i,
    H as O
} from "./tracking-376cff7a.js";
import {
    c as l,
    h as C
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    X as g
} from "./x-fc38e969.js";
(function() {
    try {
        var o = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            s = new Error().stack;
        s && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[s] = "bafe4f27-88bb-4daa-b6f9-6badc5f61d68", o._sentryDebugIdIdentifier = "sentry-dbid-bafe4f27-88bb-4daa-b6f9-6badc5f61d68")
    } catch (t) {}
})();
class x extends I {
    constructor(t, e) {
        super(t, e);
        f(this, "onDocumentKeyDown", t => {
            t.key === "Escape" && !this.props.noExit && !D(this.base) && this.close()
        });
        this.open = this.open.bind(this), this.close = this.close.bind(this), this.popup = !1, this.state = {
            open: !1,
            display: !1,
            callback: null
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.onDocumentKeyDown), this.props.openByDefault && this.openImmediately()
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onDocumentKeyDown), this._timeout && clearTimeout(this._timeout)
    }
    openImmediately(t) {
        t && (this._callback = t);
        const e = document.getElementsByTagName("html")[0];
        y(e, "modal-in") || b(e, "modal-in"), this.setState({
            display: !0,
            open: !0
        })
    }
    open(t) {
        return m(this, null, function*() {
            t && (this._callback = t);
            const e = document.getElementsByTagName("html")[0];
            y(e, "modal-in") || b(e, "modal-in"), this.onBeforeOpen(), this.props.onBeforeOpen && this.props.onBeforeOpen(), yield new Promise(n => {
                this.setState({
                    display: !0
                }, () => {
                    this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(() => {
                        this.setState({
                            open: !0
                        }, () => {
                            this.onOpen(), this.props.onOpen && this.props.onOpen(), n()
                        })
                    }, 50)
                })
            })
        })
    }
    close(t) {
        return m(this, null, function*() {
            this.isOpen() && this.onBeforeClose(t) !== !1 && (this.props.onBeforeClose && this.props.onBeforeClose(t) === !1 || (B(document.getElementsByTagName("html")[0], "modal-in"), yield new Promise(e => {
                this.setState({
                    open: !1
                }, () => {
                    this._timeout = setTimeout(() => {
                        this.setState({
                            display: !1
                        }, () => {
                            this.onClose(t), this.props.onClose && this.props.onClose(t), this._callback && this._callback(t), e()
                        })
                    }, 750)
                })
            })))
        })
    }
    isOpen() {
        return this.state.open
    }
    onClickOuter(t) {
        var e, n;
        t.stopPropagation(), (n = (e = this.props).onClick) == null || n.call(e, t), !this.props.noExit && !this.props.noExitOnClick && this.popup && (this.noFullscreen || window.innerWidth > 540) && t.target && this.container && this.close()
    }
    onClickInner(t) {
        var e, n;
        t.stopPropagation(), (n = (e = this.props).onClick) == null || n.call(e, t)
    }
    render() {
        const t = this.state.open ? "in" : "out",
            e = this.state.display === !1 ? "gone" : "",
            n = this.props.variant === "structured",
            p = !this.state.open;
        return i("div", {
            className: l("modal typography", t, e, this.props.className, this.getClassName(), {
                "has-close-pill": this.props.closePill,
                "structured-modal": n,
                popup: this.popup
            }),
            inert: p,
            onClick: a => this.onClickOuter(a),
            "data-testid": this.props.testID,
            role: "dialog"
        }, i("div", {
            className: "modal-table"
        }, i("div", {
            className: "modal-row"
        }, i("div", {
            ref: a => this.content = a,
            className: l("modal-cell modal-content", {
                "no-fullscreen": this.noFullscreen
            })
        }, i("div", _({
            className: l({
                container: !n
            }),
            ref: a => this.container = a,
            onClick: a => this.onClickInner(a)
        }, this.props.trackInputsID && {
            "data-track-inputs": this.props.trackInputsID
        }), !this.props.noExit && (!this.props.noCloseButton || O()) && (n ? i("div", {
            className: "structured-modal__close-button"
        }, i(C, {
            "data-testid": "close-modal",
            variant: "secondary",
            look: "circle",
            onClick: () => this.close()
        }, i(g, {
            size: 20,
            color: "secondary"
        }))) : i(C, {
            "data-testid": "close-modal",
            className: l("modal-btn modal-exit-btn no-margin", {
                "button btn btn-secondary btn-pill icon-only": this.props.closePill
            }),
            onClick: () => this.close()
        }, i(g, {
            size: 20,
            color: "secondary"
        }))), n ? i("div", {
            className: "structured-modal__wrapper"
        }, i("div", {
            className: "structured-modal__header"
        }, this.props.modalTitle ? i("h3", null, this.props.modalTitle) : i("h3", null, " ")), i("div", {
            className: "structured-modal__body"
        }, i("div", {
            className: "container"
        }, this.renderChildren(this.props, this.state))), this.props.modalFooter && i("div", {
            className: "structured-modal__footer"
        }, this.props.modalFooter)) : this.renderChildren(this.props, this.state))))))
    }
    getClassName() {}
    onBeforeOpen() {}
    onOpen() {}
    onBeforeClose() {}
    onClose() {}
    renderChildren({
        children: t
    }, e) {
        return t
    }
}
class F extends x {
    constructor(s, t) {
        super(s, t), this.popup = !0
    }
}
export {
    x as M, F as P
};