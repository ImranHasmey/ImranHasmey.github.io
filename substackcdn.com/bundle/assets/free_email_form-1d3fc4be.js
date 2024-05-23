var ue = Object.defineProperty,
    ce = Object.defineProperties;
var me = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var pe = Object.prototype.hasOwnProperty,
    fe = Object.prototype.propertyIsEnumerable;
var x = (t, i, e) => i in t ? ue(t, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : t[i] = e,
    G = (t, i) => {
        for (var e in i || (i = {})) pe.call(i, e) && x(t, e, i[e]);
        if (V)
            for (var e of V(i)) fe.call(i, e) && x(t, e, i[e]);
        return t
    },
    q = (t, i) => ce(t, me(i));
var _ = (t, i, e) => (x(t, typeof i != "symbol" ? i + "" : i, e), e);
var P = (t, i, e) => new Promise((n, d) => {
    var s = r => {
            try {
                c(e.next(r))
            } catch (m) {
                d(m)
            }
        },
        u = r => {
            try {
                c(e.throw(r))
            } catch (m) {
                d(m)
            }
        },
        c = r => r.done ? n(r.value) : Promise.resolve(r.value).then(s, u);
    c((e = e.apply(t, i)).next())
});
import {
    s as $,
    f as ge,
    a as he,
    c as _e,
    b as we
} from "./profile-a781fd85.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    gf as J,
    gg as Q,
    fO as R,
    aZ as L,
    gh as z,
    gi as K,
    u as Z,
    gj as X,
    bj as be,
    cy as Se,
    b3 as ve,
    y as a,
    cZ as Ee,
    k as ye,
    H as Ie,
    d as A,
    r as W,
    fM as Pe,
    C as Ce,
    U as ke,
    aj as Ne,
    A as Te,
    eN as xe,
    al as Ae,
    l as Re,
    m as $e,
    j as Le
} from "./tracking-376cff7a.js";
import {
    _ as H,
    L as Be,
    B as Ue
} from "./user-e16f1619.js";
import {
    k as Fe,
    c as w,
    T as Me
} from "./FlexBox-1a755411.js";
import {
    F as Ye,
    i as l
} from "./free_email_form.module-135823b4.js";
import {
    s as De
} from "./entry-a965ffeb.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            i = new Error().stack;
        i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "d72057d8-0336-4142-8c41-3229112dc605", t._sentryDebugIdIdentifier = "sentry-dbid-d72057d8-0336-4142-8c41-3229112dc605")
    } catch (e) {}
})();

function Ze(t, i, {
    quantity: e = 1,
    plan: n,
    isSubscription: d,
    coupon: s
}) {
    var b;
    const u = (t / 100).toFixed(2),
        c = (t / e / 100).toFixed(2);
    i = i.toUpperCase(), ee();
    const r = J(),
        m = z();
    m && (new Image().src = `https://www.facebook.com/tr?id=${m}&ev=Purchase&cd[value]=${u}&cd[currency]=${i}`), m && d && (new Image().src = `https://www.facebook.com/tr?id=${m}&ev=Subscribe&cd[value]=${u}&cd[currency]=${i}`), K("purchase", {
        price: Number(c),
        quantity: e
    });
    const p = be(),
        C = ((b = n.amount) != null ? b : 0) * e;
    let f;
    s && s.percent_off ? f = Math.round(C * ((s.percent_off_precise || s.percent_off) / 100)) : s && s.amount_off && (f = Math.max(0, s.amount_off));
    const g = n.name;
    Q("purchase", {
        transaction_id: p,
        value: u,
        currency: i,
        coupon: (s == null ? void 0 : s.name) || (s == null ? void 0 : s.id),
        items: [{
            item_id: n && n.id,
            item_name: n && (g || n.nickname || n.id) || "subscription",
            coupon: (s == null ? void 0 : s.name) || (s == null ? void 0 : s.id),
            discount: f,
            index: 0,
            price: c,
            quantity: e
        }]
    }), R("transaction", {
        ti: p,
        tr: u,
        cu: i
    }), R("item", {
        ti: p,
        in: n && (g || n.nickname || n.id) || "subscription",
        ip: c,
        iq: e,
        ic: n && n.id,
        cu: i
    });
    const v = "7AeECMLq68wDEKuN5pYB";
    L("conversion", r != null && r.adwordsAccountId && (r != null && r.adwordsEventSendTo) ? {
        send_to: `${r.adwordsAccountId}/${v}`
    } : {});
    const E = Oe();
    if (E) {
        const {
            id: S,
            label: k
        } = E;
        new Image().src = `//www.googleadservices.com/pagead/conversion/${S}/?value=${u}&currency_code=${i}&label=${k}&guid=ON&script=0`
    }
    if (typeof window != "undefined" && window.PARSELY && window.PARSELY.loaded && window.PARSELY.conversions && window.PARSELY.conversions.trackSubscription && window.PARSELY.conversions.trackSubscription(`${n&&(g||n.nickname||n.id)||""} Subscription`), te() === "bankless") {
        const S = n ? `paid_${n.interval}ly` : "paid";
        window.history.replaceState({}, document.title, Z({
            plan: S
        })), X()
    }
}

function ee() {
    const t = J();
    if (t.properties.is_free_subscribed) return;
    t.properties.is_free_subscribed = !0, Q("sign_up"), R("event", {
        ec: "Signup",
        ea: "Signup Success"
    });
    const i = "Yo9oCMOM1MYDEKuN5pYB";
    L("conversion", t != null && t.adwordsAccountId && (t != null && t.adwordsEventSendTo) ? {
        send_to: `${t.adwordsAccountId}/${i}`
    } : {});
    const e = z();
    e && (new Image().src = `https://www.facebook.com/tr?id=${e}&ev=CompleteRegistration`), K("signup"), typeof window != "undefined" && window.PARSELY && window.PARSELY.loaded && window.PARSELY.conversions && window.PARSELY.conversions.trackNewsletterSignup && window.PARSELY.conversions.trackNewsletterSignup("Newsletter Sign Up"), te() === "bankless" && (window.history.replaceState({}, document.title, Z({
        plan: "free"
    })), X())
}

function Xe(t = {}) {
    L("Publication Created", t)
}

function Oe() {
    return typeof window != "undefined" && window._preloads && window._preloads.pub && window._preloads.pub.google_conversion_info
}

function te() {
    var i;
    const t = typeof window != "undefined" && ((i = window._preloads) == null ? void 0 : i.pub);
    return t == null ? void 0 : t.subdomain
}
const et = (t, i = null) => typeof window != "undefined" ? $.get(t, i) : i,
    tt = (t, i) => {
        if (typeof window != "undefined") return $.set(t, i)
    },
    it = t => {
        if (typeof window != "undefined") return $.remove(t)
    },
    B = Se({
        hasThemedBackground: !1
    });
B.displayName = "ThemeContext";

function nt() {
    var t;
    return !!((t = Ee(B)) != null && t.hasThemedBackground)
}

function st({
    value: t,
    children: i
}) {
    const e = ve(() => t, Object.values(t));
    return a(B.Provider, {
        value: e
    }, i)
}
class je extends ye {
    constructor(e) {
        super(e);
        _(this, "handleEmailChange", () => {
            var n, d;
            const e = this.emailInput.value;
            e && (this.setState({
                currentEmail: e
            }), !(this.state.emailSuggestions && this.state.emailSuggestions.hasOwnProperty(e)) && ((d = (n = this.state).fetchSuggestion) == null || d.call(n, e).then(s => {
                const [u, c] = s;
                this.setState({
                    emailSuggestions: q(G({}, this.state.emailSuggestions), {
                        [u]: c
                    })
                })
            })))
        });
        _(this, "_onSuccess", e => P(this, null, function*() {
            const {
                iTemplate: n
            } = this.context;
            e.body.prompt_to_login || ee(), e.body.requires_confirmation && (this.props.onConfirmationRequired ? yield this.props.onConfirmationRequired(e): alert(n `Confirmation required: we sent an email to ${e.body.email}. Click the link there to finish subscribing.`)), this.props.freeSignupEmail && this.props.freeSignupEmail !== e.body.email && De({
                freeSignupEmail: e.body.email
            }), this.props.onSuccess && (yield this.props.onSuccess(e))
        }));
        _(this, "onSuccess", e => P(this, null, function*() {
            typeof window != "undefined" && window.campaign && A("referralCode") ? window.campaign.identify({
                email: e.body.email
            }, () => this._onSuccess(e)) : yield this._onSuccess(e)
        }));
        _(this, "onAcceptSuggestion", e => {
            this.emailInput.value = e, this.form.handleSubmit(null, !0)
        });
        this.state = {
            emailSuggestions: {}
        }
    }
    getSavedEmail() {
        return this.props.user && this.props.user.email || null
    }
    getPrefilledEmail() {
        return this.props.email || this.props.freeSignupEmail || this.getSavedEmail()
    }
    componentDidMount() {
        return P(this, null, function*() {
            var d;
            const {
                autoFocus: e,
                disabled: n
            } = this.props;
            this.getPrefilledEmail() ? this.emailInput.value = this.getPrefilledEmail() : e && !(this.getPrefilledEmail() || n) && !Ie() && ((d = this.emailInput) == null || d.focus()), H(() =>
                import ("./useEmailCheck-c20baa47.js"), ["assets/useEmailCheck-c20baa47.js", "assets/debounce-f31b8252.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/isObject-a54dc090.js", "assets/toNumber-3c911b0f.js", "assets/isEmail-6a10e895.js"]).then(s => {
                this.setState({
                    fetchSuggestion: s.fetchSuggestion
                })
            })
        })
    }
    onLoadingState(e) {
        this.setState({
            loading: e,
            requires_confirmation: !1
        })
    }
    onError(e) {
        var n;
        ((n = e.response) == null ? void 0 : n.status) === 425 && this.setState({
            requires_confirmation: !0
        }), this.props.onError && this.props.onError(e)
    }
    render({
        children: e,
        className: n,
        disabled: d,
        expectTruncation: s,
        isWelcomePageColor: u,
        loginRedirect: c,
        next: r,
        onAccentBackground: m,
        pub: p,
        referralCode: C,
        showLogin: f,
        showTerms: g,
        source: v,
        submitButtonText: E,
        useSubscribeLink: b,
        user: S,
        utm_campaign: k,
        onMaybeLater: Ve,
        onPrepareData: U,
        promptClassName: ie,
        inputWrapperClassName: ne,
        inputClassName: se,
        subscribeButtonClassName: ae
    }, {
        loading: N,
        requires_confirmation: F,
        currentEmail: re
    }) {
        var y, Y, D, I, O, j;
        const T = v === "treatment_bold_fade",
            oe = ((D = (Y = (y = A("referring_pub_ids")) == null ? void 0 : y.split) == null ? void 0 : Y.call(y, ",")) == null ? void 0 : D[0]) || void 0,
            de = ((j = (O = (I = A("referring_pub_ids")) == null ? void 0 : I.split) == null ? void 0 : O.call(I, ",")) == null ? void 0 : j.slice(1)) || void 0,
            M = this.getPrefilledEmail(),
            {
                iString: h,
                language: le
            } = this.context;
        return a("div", {
            className: w(n, l.container)
        }, a(Ye, {
            ref: o => this.form = o,
            className: l.form,
            noInlineErrors: !0,
            action: W("/api/v1/free"),
            noJsAction: W("/api/v1/free", {
                nojs: !0
            }),
            prepareData: o => {
                F && (o.resend_confirmation = !0), U && U(o)
            },
            onChangeLoadingState: this.onLoadingState.bind(this),
            onError: o => this.onError(o),
            onSuccess: o => this.onSuccess(o),
            typoFound: o => this.setState({
                emailSuggestion: o
            }),
            disableSubmit: b
        }, a("input", {
            type: "hidden",
            name: "first_url",
            value: ge
        }), a("input", {
            type: "hidden",
            name: "first_referrer",
            value: he
        }), a("input", {
            type: "hidden",
            name: "current_url",
            value: _e
        }), a("input", {
            type: "hidden",
            name: "current_referrer",
            value: we
        }), a("input", {
            type: "hidden",
            name: "referral_code",
            value: C
        }), a("input", {
            type: "hidden",
            name: "source",
            value: v
        }), a("input", {
            type: "hidden",
            name: "referring_pub_id",
            value: oe
        }), a("input", {
            type: "hidden",
            name: "additional_referring_pub_ids",
            value: de
        }), a("div", {
            className: w(ie, l.sideBySideWrap)
        }, !!M && Pe(), a("div", {
            className: w(ne, l.emailInputWrapper, {
                [l.emailInputWrapperExpectTruncation]: s
            })
        }, a("input", {
            className: w(se, "pencraft", l.emailInput, {
                [l.emailInputOnAccentBackground]: m,
                [l.emailInputExpectTruncation]: s,
                [l.emailInputOnWelcomePage]: u
            }),
            onChange: this.handleEmailChange,
            onInput: this.handleEmailChange,
            ref: o => this.emailInput = o,
            type: "email",
            name: T ? "email-pop" : "email",
            readOnly: !!(this.getSavedEmail() || N || d),
            disabled: !!(N || d),
            placeholder: h("Type your email..."),
            value: re || M || null
        })), a(Ue, {
            className: w(ae, "rightButton primary subscribe-btn", l.button, {
                pop: T,
                [l.buttonOnAccentBackground]: m
            }),
            type: "submit",
            disabled: !!(N || d),
            onClick: o => {
                b && (location.href = Ce(p, {
                    addBase: !0,
                    user: S,
                    utm_source: ke.substack,
                    utm_medium: Ne.web,
                    utm_campaign: k,
                    next: r
                }))
            }
        }, a("span", {
            className: `button-text ${T?"pop":""}`
        }, E || Te(p, {
            language: le
        })))), F ? a("div", null, a(Me, {
            translated: !0,
            className: "error other-error"
        }, "This email address is not confirmed yet.", a("br", null), a("a", {
            href: "javascript:void(0)",
            onClick: () => this.form.handleSubmit()
        }, "Click here"), " ", "to resend the confirmation email.")) : a("div", {
            id: "error-container"
        }), f || g || e ? a("div", {
            className: w("subtle-help-text below-input", l.links)
        }, f && (this.getSavedEmail() ? a("a", {
            className: "login-button",
            href: xe({
                for_pub: p.subdomain
            }),
            native: !0
        }, h("Not you?")) : a("a", {
            className: "login-button",
            href: Ae({
                for_pub: p.subdomain,
                redirect: c
            }),
            native: !0
        }, h("Login"))), g && [a("a", {
            className: "legal",
            href: Re({
                pub: p
            }),
            target: "_blank",
            native: !0
        }, h("Privacy")), a("a", {
            className: "legal",
            href: $e({
                pub: p
            }),
            target: "_blank",
            native: !0
        }, h("Terms")), a("a", {
            className: "legal",
            href: Le(),
            target: "_blank",
            native: !0
        }, h("Information collection notice"))], e) : null), a(Be, {
            onRequest: () => H(() =>
                import ("./EmailTypoHandler-f7657eea.js"), ["assets/EmailTypoHandler-f7657eea.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/transition-c6a4911b.js", "assets/EmailTypoHandler-1f1ddc43.css"]),
            resolve: o => o.EmailTypoHandler,
            module: "@/frontend/login/typo_handler/EmailTypoHandler",
            emailSuggestions: this.state.emailSuggestions,
            currentEmail: this.state.currentEmail,
            onAccept: this.onAcceptSuggestion
        }))
    }
}
_(je, "contextType", Fe);
export {
    je as F, st as T, Xe as a, tt as b, et as g, Ze as p, it as r, ee as s, nt as u
};