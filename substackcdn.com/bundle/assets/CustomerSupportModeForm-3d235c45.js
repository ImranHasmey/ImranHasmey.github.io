import {
    h as c,
    y as e
} from "./tracking-376cff7a.js";
import {
    u as m,
    a as u,
    T as r,
    F as d,
    O as p
} from "./FlexBox-1a755411.js";
import {
    F as y
} from "./free_email_form.module-135823b4.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            o = new Error().stack;
        o && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[o] = "be67537e-b874-4e51-96dd-359aebd1855b", t._sentryDebugIdIdentifier = "sentry-dbid-be67537e-b874-4e51-96dd-359aebd1855b")
    } catch (a) {}
})();
const w = ({
    allowAllDay: t,
    redirect: o,
    onCancel: a
}) => {
    const {
        iString: s
    } = m(), [n, i] = c(!1);
    return e(y, {
        className: "customer-support-mode-form",
        analyticsName: "Customer Support Mode Form",
        action: "/api/v1/customer_support_mode",
        onSuccess: () => document.location.href = o || "/",
        autoLock: !0
    }, e(u, null, e(u, {
        gap: 8
    }, e(r.Meta, {
        className: "danger",
        weight: "semibold",
        color: "error",
        translated: !0
    }, "Danger"), e(r.H2, {
        translated: !0
    }, "Support Mode"), e(r.B3, {
        translated: !0
    }, "Be absolutely respectful to the writers on whose behalf you are working."), t && e("label", null, e(d, {
        gap: 8
    }, e("input", {
        type: "checkbox",
        defaultChecked: !1,
        onInput: l => i(l.target.checked)
    }), " ", e(r.B3, {
        translated: !0
    }, "Allow access for the day because I'm doing Customer Support"))), n && e("input", {
        type: "hidden",
        name: "all_pubs",
        value: "true"
    }), e("input", {
        type: "hidden",
        name: "minutes",
        value: n ? 10 * 60 : 30
    }), e(d, {
        gap: 8,
        paddingTop: 8
    }, e(p, {
        priority: "destructive",
        type: "submit",
        id: "enter-support-mode"
    }, s("Enter support mode")), a && e(p, {
        priority: "secondary",
        onClick: a
    }, s("Cancel")))), e("div", {
        id: "error-container"
    })))
};
export {
    w as C
};