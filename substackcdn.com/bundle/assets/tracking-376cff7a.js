var Tc = Object.defineProperty,
    Ac = Object.defineProperties;
var Rc = Object.getOwnPropertyDescriptors;
var _t = Object.getOwnPropertySymbols;
var En = Object.prototype.hasOwnProperty,
    pn = Object.prototype.propertyIsEnumerable;
var fn = (e, t, r) => t in e ? Tc(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    N = (e, t) => {
        for (var r in t || (t = {})) En.call(t, r) && fn(e, r, t[r]);
        if (_t)
            for (var r of _t(t)) pn.call(t, r) && fn(e, r, t[r]);
        return e
    },
    K = (e, t) => Ac(e, Rc(t));
var Ce = (e, t) => {
    var r = {};
    for (var n in e) En.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && _t)
        for (var n of _t(e)) t.indexOf(n) < 0 && pn.call(e, n) && (r[n] = e[n]);
    return r
};
var Ie = (e, t, r) => new Promise((n, o) => {
    var i = u => {
            try {
                a(r.next(u))
            } catch (l) {
                o(l)
            }
        },
        s = u => {
            try {
                a(r.throw(u))
            } catch (l) {
                o(l)
            }
        },
        a = u => u.done ? n(u.value) : Promise.resolve(u.value).then(i, s);
    a((r = r.apply(e, t)).next())
});
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4bb7dada-15b4-46d6-9b1b-2132784a6bec", e._sentryDebugIdIdentifier = "sentry-dbid-4bb7dada-15b4-46d6-9b1b-2132784a6bec")
    } catch (r) {}
})();

function Y(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const o in n)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(n, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => n[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
const Je = Object.freeze(Object.defineProperty({
    __proto__: null,
    get AUDIENCE_ADJECTIVES() {
        return O_
    },
    get AppError() {
        return Ur
    },
    get CENTS_PER_EMAIL() {
        return v_
    },
    get CONTENT_MODERATION_REASONS() {
        return I_
    },
    get ChatError() {
        return k_
    },
    get DEFAULT_MAX_BYLINES() {
        return vf
    },
    get DEFAULT_PREVIEW_LIMIT() {
        return __
    },
    get DEFAULT_PREVIEW_LIMIT_EMAIL() {
        return d_
    },
    get DEFAULT_PROFILE_PAGE_SUBSCRIPTIONS_LIMIT() {
        return l_
    },
    get DEFAULT_THEME_COLORS() {
        return L_
    },
    get EU_COUNTRIES() {
        return od
    },
    get FIRST_ILLEGAL_POSTGRES_INTEGER() {
        return h_
    },
    get GIFT_LENGTH_MONTHS() {
        return js
    },
    get GRACE_PERIOD_COUPON_TRIAL_DAYS() {
        return c_
    },
    get GRACE_PERIOD_DAYS() {
        return s_
    },
    get HOMEPAGE_TYPE_CHANGE_CUTOFF() {
        return D_
    },
    get MANUAL_BILLING_DAYS_UNTIL_DUE() {
        return a_
    },
    get MAX_BANK_PAYMENT_ATTEMPTS() {
        return g_
    },
    get MAX_FILE_SIZE() {
        return n_
    },
    get MAX_INT32() {
        return yr
    },
    get MAX_MEDIA_FILE_SIZE() {
        return t_
    },
    get MAX_MEDIA_UPLOAD_CHUNK_SIZE() {
        return r_
    },
    get MAX_PODCAST_FIELD_LENGTH() {
        return C_
    },
    get MAX_PODCAST_FILE_SIZE() {
        return e_
    },
    get MIN_MONTH_GAP_BETWEEN_PAUSES() {
        return f_
    },
    get MISSING_IMAGE_HEIGHT() {
        return m_
    },
    get MISSING_IMAGE_URL() {
        return p_
    },
    get MISSING_IMAGE_WIDTH() {
        return S_
    },
    get MONTH_NAMES() {
        return zs
    },
    get NO_PLATFORM_CUSTOMER_CLONE_COUNTRIES() {
        return w_
    },
    get NO_REPLY_EMAIL() {
        return Y_
    },
    get NZD_COUNTRIES() {
        return ta
    },
    get OLD_PODCAST_CATEGORIES() {
        return P_
    },
    get PODCAST_CATEGORIES() {
        return Js
    },
    get PODCAST_SECTIONS_TO_MARK_AS_NEWSLETTERS() {
        return nr
    },
    get PUBLICATION_TIER_DESCRIPTIONS() {
        return yf
    },
    get PUB_IDS_TO_NOT_SHOW_FOLLOW_PROMPT_ON() {
        return ql
    },
    get SECURITY_QUESTIONS() {
        return R_
    },
    get SPECIAL_SUBDOMAINS() {
        return A_
    },
    get STRIPE_DAYS_UNTIL_DUE() {
        return u_
    },
    get STRIPE_TAX_ID_TYPES() {
        return N_
    },
    get SUBSCRIPTION_WORDS() {
        return vt
    },
    get SUBSTACK_PUBLICATION_IDS() {
        return o_
    },
    get SUBSTACK_PUBLICATION_ID_BETA() {
        return Gs
    },
    get SUBSTACK_PUBLICATION_ID_BLOGOLD() {
        return Fs
    },
    get SUBSTACK_PUBLICATION_ID_COMPANY() {
        return Bs
    },
    get SUBSTACK_PUBLICATION_ID_LIBRARYOLD() {
        return $s
    },
    get SUBSTACK_PUBLICATION_ID_ON() {
        return ks
    },
    get SUBSTACK_PUBLICATION_ID_PRODUCTLAB() {
        return Ks
    },
    get SUBSTACK_PUBLICATION_ID_READ() {
        return Hs
    },
    get SUBSTACK_PUBLICATION_ID_STORIESOLD() {
        return xs
    },
    get SUBSTACK_PUBLICATION_ID_THREADSPILOT() {
        return Ws
    },
    get SUBSTACK_USER_ID() {
        return Vs
    },
    get SUBSTACK_USER_IDS() {
        return i_
    },
    get SUBSTACK_WRITERS_USER_ID() {
        return Ys
    },
    get SUPPORTED_CURRENCIES() {
        return id
    },
    get SUPPORTED_LANGUAGES() {
        return M_
    },
    get SUPPORTED_SEARCH_LANGUAGES() {
        return y_
    },
    get TERSE_AUDIENCE_ADJECTIVES() {
        return b_
    },
    get TRANSPARENT_IMAGE_URL() {
        return E_
    },
    get TWEET_PLACEHOLDER_DATA_URI() {
        return zl
    },
    get WEEK_IN_SECONDS() {
        return U_
    },
    get anonymousName() {
        return If
    },
    get areCommentsLocked() {
        return jd
    },
    get assertIsDefined() {
        return Zl
    },
    get assertIsError() {
        return Xl
    },
    get averageVectors() {
        return tE
    },
    get balanceTextWithCharacterWidths() {
        return nd
    },
    get baschezScoreToEmojis() {
        return Rd
    },
    get baschezToCategory() {
        return sa
    },
    get canDeleteComment() {
        return qd
    },
    get canDeletePost() {
        return Sa
    },
    get canEditComment() {
        return zd
    },
    get canPostComments() {
        return pa
    },
    get canReplyToPost() {
        return V_
    },
    get canReportComment() {
        return Zd
    },
    get canSeeCommenterEmails() {
        return Kd
    },
    get canSeeComments() {
        return Vd
    },
    get canSeeTranscription() {
        return Yd
    },
    get centsToDollarString() {
        return cd
    },
    get centsToPriceString() {
        return wt
    },
    get colorLightness() {
        return Cd
    },
    get colorLuma() {
        return Id
    },
    get commentsEnabledForPost() {
        return Ea
    },
    get couldPostCommentsIfSubscribed() {
        return Jd
    },
    get coverPageFreeSubscriberCount() {
        return Ld
    },
    get currencySymbol() {
        return ud
    },
    get decimalToPercent() {
        return yd
    },
    get deep_equals() {
        return fa
    },
    get defaultAudienceForPub() {
        return ef
    },
    get defaultCommentLevelForPub() {
        return tf
    },
    get defaultSendEmailForPub() {
        return rf
    },
    get dollarFormatter() {
        return ld
    },
    get dollarStringToCents() {
        return _d
    },
    get endsWithPunctuation() {
        return X_
    },
    get ensureInList() {
        return eE
    },
    get escapeNewlines() {
        return kd
    },
    get flat() {
        return Fd
    },
    get flowTextBasedOnWidth() {
        return qf
    },
    get formatArray() {
        return Ut
    },
    get formatBytes() {
        return gf
    },
    get formatEllipsis() {
        return yt
    },
    get formatPercentForDisplay() {
        return _a
    },
    get formatPodcastDuration() {
        return xf
    },
    get formattedBytesToNumber() {
        return hf
    },
    get foundingMemberDescription() {
        return Of
    },
    get fromEnv() {
        return Jf
    },
    get getByLine() {
        return B_
    },
    get getBylineUsers() {
        return ha
    },
    get getCopyrightedContentBucketName() {
        return T_
    },
    get getCurrencyForCountry() {
        return sd
    },
    get getGiftValueText() {
        return Ed
    },
    get getInitalPayment() {
        return fd
    },
    get getNext5HoursAfterMidnight() {
        return $f
    },
    get getNumberWithCommas() {
        return ca
    },
    get getOpennodePaymentUrl() {
        return bf
    },
    get getPlanTitle() {
        return Yf
    },
    get getPostCtaPresentParticiple() {
        return cf
    },
    get getPostCtaText() {
        return uf
    },
    get getPostEmbedMeta() {
        return F_
    },
    get getPostMediaBucketName() {
        return wr
    },
    get getPrintedByline() {
        return ff
    },
    get getPrintedPostType() {
        return lf
    },
    get getReadableAttribution() {
        return Pf
    },
    get getReaderRecommendationEmailSubject() {
        return Vf
    },
    get getRestackEmailSubject() {
        return _f
    },
    get getScheduledAt() {
        return wd
    },
    get getSubscribeText() {
        return x_
    },
    get getSubscriptionSentenceWithCustomWords() {
        return Ta
    },
    get getSubscriptionWord() {
        return Aa
    },
    get getSuperscriptNumberString() {
        return Rf
    },
    get getTrialEndOverride() {
        return nf
    },
    get getWithIndefiniteArticle() {
        return Hf
    },
    get get_month_name() {
        return of
    },
    get group_by() {
        return Gd
    },
    get guessFirstName() {
        return ws
    },
    get guessLastName() {
        return Jl
    },
    get handleDocumentLinkClick() {
        return mf
    },
    get hashString() {
        return Wf
    },
    get hexToHSV() {
        return oa
    },
    get hexToRgb() {
        return kr
    },
    get hidePaidPostsFor() {
        return G_
    },
    get isAppAttribution() {
        return Ra
    },
    get isFoundingPlan() {
        return Oa
    },
    get isNotMainEntry() {
        return Sf
    },
    get isNotesAttribution() {
        return $r
    },
    get isPaidPub() {
        return Qd
    },
    get isPinnable() {
        return Uf
    },
    get isProbablyEmail() {
        return Lf
    },
    get isSearchEngineCrawlerQuick() {
        return Cf
    },
    get isSubstackNetworkAttribution() {
        return Nf
    },
    get isTouchDevice() {
        return Zf
    },
    get isUUID() {
        return Ef
    },
    get isValidCommentLevel() {
        return ga
    },
    get isZeroDecimalCurrency() {
        return Ve
    },
    get joinLines() {
        return Od
    },
    get kFormatter() {
        return Kf
    },
    get longestSetOfWordsBelowCost() {
        return Qs
    },
    get mode() {
        return af
    },
    get normalizeHex() {
        return vr
    },
    get numberToHumanFileSize() {
        return Df
    },
    get numberToOrderOfMagnitude() {
        return Dd
    },
    get numberToOrderOfMagnitudeShortString() {
        return ua
    },
    get numberToOrderOfMagnitudeString() {
        return Pd
    },
    get numberToOrdinal() {
        return bd
    },
    get numberToRoughRankingString() {
        return Nd
    },
    get numberToString() {
        return Ye
    },
    get objectMap() {
        return Bd
    },
    get onlyOwnsRootComment() {
        return ma
    },
    get oxfordComma() {
        return sf
    },
    get paymentPeriodToPlan() {
        return wf
    },
    get planBasePricing() {
        return pd
    },
    get pluralize() {
        return da
    },
    get possessive() {
        return vd
    },
    get postSocialDescription() {
        return Tf
    },
    get preventOrphans() {
        return q_
    },
    get profilePageFreeSubscriberCount() {
        return la
    },
    get profilePageFreeSubscriberCountString() {
        return Md
    },
    get pubCurrency() {
        return ra
    },
    get pubHasPaymentsEnabled() {
        return Xd
    },
    get pubUsesZeroDecimalCurrency() {
        return ad
    },
    get pubsWithCustomSubscriptionWords() {
        return Af
    },
    get randomString() {
        return aa
    },
    get resolveTwitterShareText() {
        return $_
    },
    get restacksEnabledForPost() {
        return Hd
    },
    get rgbToHex() {
        return ia
    },
    get roundPriceUp() {
        return dd
    },
    get sanitizeInlineText() {
        return Mf
    },
    get satoshiToBitcoin() {
        return na
    },
    get secondsToHHMMSS() {
        return Sd
    },
    get secondsToLargestUnit() {
        return md
    },
    get sectionIsSpecificallyMarkedAsNewsletter() {
        return qs
    },
    get setDateToMidnightPST() {
        return Bf
    },
    get shouldHidePostFromArchive() {
        return df
    },
    get shouldUseInlineComments() {
        return H_
    },
    get showCommentsOnPost() {
        return Wd
    },
    get simpleBalanceText() {
        return ed
    },
    get sortSubscriptions() {
        return W_
    },
    get spellOutNumber() {
        return Ud
    },
    get splitArray() {
        return xd
    },
    get streamToBuffer() {
        return zf
    },
    get stringCost() {
        return Ot
    },
    get stripInvalidBytes() {
        return j_
    },
    get subscriptionTypeText() {
        return K_
    },
    get textLengthAlphaNumericMinimumValidator() {
        return jf
    },
    get toMap() {
        return $d
    },
    get toMillis() {
        return pf
    },
    get toSentenceCase() {
        return or
    },
    get toTitleCase() {
        return bt
    },
    get transformDocumentLink() {
        return Ca
    },
    get truncAndFormatArray() {
        return Td
    },
    get truncateBytes() {
        return J_
    },
    get truncateNumber() {
        return Ad
    },
    get truncateText() {
        return Xs
    },
    get truncateToValidBytes() {
        return Zs
    },
    get truncateWords() {
        return z_
    },
    get twitterScreenNames() {
        return Us
    },
    get userFromReferralKey() {
        return Qf
    },
    get userReferralKey() {
        return Xf
    },
    get validCommentLevels() {
        return Br
    },
    get validateColor() {
        return hd
    },
    get validateHex() {
        return gd
    },
    get videoPlayerDimensions() {
        return kf
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
var ze, v, uo, co, Te, mn, lo, zt, _o, It = {},
    fo = [],
    Oc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function _e(e, t) {
    for (var r in t) e[r] = t[r];
    return e
}

function Eo(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function z(e, t, r) {
    var n, o, i, s = {};
    for (i in t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? ze.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
        for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
    return He(e, s, n, o, null)
}

function He(e, t, r, n, o) {
    var i = {
        type: e,
        props: t,
        key: r,
        ref: n,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: o == null ? ++uo : o
    };
    return o == null && v.vnode != null && v.vnode(i), i
}

function Sr() {
    return {
        current: null
    }
}

function ie(e) {
    return e.children
}

function Q(e, t) {
    this.props = e, this.context = t
}

function Ke(e, t) {
    if (t == null) return e.__ ? Ke(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var r; t < e.__k.length; t++)
        if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
    return typeof e.type == "function" ? Ke(e) : null
}

function po(e) {
    var t, r;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if ((r = e.__k[t]) != null && r.__e != null) {
                e.__e = e.__c.base = r.__e;
                break
            }
        return po(e)
    }
}

function qt(e) {
    (!e.__d && (e.__d = !0) && Te.push(e) && !Tt.__r++ || mn !== v.debounceRendering) && ((mn = v.debounceRendering) || lo)(Tt)
}

function Tt() {
    var e, t, r, n, o, i, s, a;
    for (Te.sort(zt); e = Te.shift();) e.__d && (t = Te.length, n = void 0, o = void 0, s = (i = (r = e).__v).__e, (a = r.__P) && (n = [], (o = _e({}, i)).__v = i.__v + 1, gr(a, i, o, r.__n, a.ownerSVGElement !== void 0, i.__h != null ? [s] : null, n, s == null ? Ke(i) : s, i.__h), Co(n, i), i.__e != s && po(i)), Te.length > t && Te.sort(zt));
    Tt.__r = 0
}

function mo(e, t, r, n, o, i, s, a, u, l) {
    var c, m, d, E, C, _, f, S = n && n.__k || fo,
        g = S.length;
    for (r.__k = [], c = 0; c < t.length; c++)
        if ((E = r.__k[c] = (E = t[c]) == null || typeof E == "boolean" || typeof E == "function" ? null : typeof E == "string" || typeof E == "number" || typeof E == "bigint" ? He(null, E, null, null, E) : Array.isArray(E) ? He(ie, {
                children: E
            }, null, null, null) : E.__b > 0 ? He(E.type, E.props, E.key, E.ref ? E.ref : null, E.__v) : E) != null) {
            if (E.__ = r, E.__b = r.__b + 1, (d = S[c]) === null || d && E.key == d.key && E.type === d.type) S[c] = void 0;
            else
                for (m = 0; m < g; m++) {
                    if ((d = S[m]) && E.key == d.key && E.type === d.type) {
                        S[m] = void 0;
                        break
                    }
                    d = null
                }
            gr(e, E, d = d || It, o, i, s, a, u, l), C = E.__e, (m = E.ref) && d.ref != m && (f || (f = []), d.ref && f.push(d.ref, null, E), f.push(m, E.__c || C, E)), C != null ? (_ == null && (_ = C), typeof E.type == "function" && E.__k === d.__k ? E.__d = u = So(E, u, e) : u = go(e, E, d, S, C, u), typeof r.type == "function" && (r.__d = u)) : u && d.__e == u && u.parentNode != e && (u = Ke(d))
        }
    for (r.__e = _, c = g; c--;) S[c] != null && (typeof r.type == "function" && S[c].__e != null && S[c].__e == r.__d && (r.__d = ho(n).nextSibling), To(S[c], S[c]));
    if (f)
        for (c = 0; c < f.length; c++) Io(f[c], f[++c], f[++c])
}

function So(e, t, r) {
    for (var n, o = e.__k, i = 0; o && i < o.length; i++)(n = o[i]) && (n.__ = e, t = typeof n.type == "function" ? So(n, t, r) : go(r, n, n, o, n.__e, t));
    return t
}

function re(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(r) {
        re(r, t)
    }) : t.push(e)), t
}

function go(e, t, r, n, o, i) {
    var s, a, u;
    if (t.__d !== void 0) s = t.__d, t.__d = void 0;
    else if (r == null || o != i || o.parentNode == null) e: if (i == null || i.parentNode !== e) e.appendChild(o), s = null;
        else {
            for (a = i, u = 0;
                (a = a.nextSibling) && u < n.length; u += 1)
                if (a == o) break e;
            e.insertBefore(o, i), s = i
        }
    return s !== void 0 ? s : o.nextSibling
}

function ho(e) {
    var t, r, n;
    if (e.type == null || typeof e.type == "string") return e.__e;
    if (e.__k) {
        for (t = e.__k.length - 1; t >= 0; t--)
            if ((r = e.__k[t]) && (n = ho(r))) return n
    }
    return null
}

function bc(e, t, r, n, o) {
    var i;
    for (i in r) i === "children" || i === "key" || i in t || At(e, i, null, r[i], n);
    for (i in t) o && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || r[i] === t[i] || At(e, i, t[i], r[i], n)
}

function Sn(e, t, r) {
    t[0] === "-" ? e.setProperty(t, r == null ? "" : r) : e[t] = r == null ? "" : typeof r != "number" || Oc.test(t) ? r : r + "px"
}

function At(e, t, r, n, o) {
    var i;
    e: if (t === "style")
        if (typeof r == "string") e.style.cssText = r;
        else {
            if (typeof n == "string" && (e.style.cssText = n = ""), n)
                for (t in n) r && t in r || Sn(e.style, t, "");
            if (r)
                for (t in r) n && r[t] === n[t] || Sn(e.style, t, r[t])
        }
    else if (t[0] === "o" && t[1] === "n") i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = r, r ? n || e.addEventListener(t, i ? hn : gn, i) : e.removeEventListener(t, i ? hn : gn, i);
    else if (t !== "dangerouslySetInnerHTML") {
        if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e) try {
            e[t] = r == null ? "" : r;
            break e
        } catch (s) {}
        typeof r == "function" || (r == null || r === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, r))
    }
}

function gn(e) {
    return this.l[e.type + !1](v.event ? v.event(e) : e)
}

function hn(e) {
    return this.l[e.type + !0](v.event ? v.event(e) : e)
}

function gr(e, t, r, n, o, i, s, a, u) {
    var l, c, m, d, E, C, _, f, S, g, P, L, A, b, M, y = t.type;
    if (t.constructor !== void 0) return null;
    r.__h != null && (u = r.__h, a = t.__e = r.__e, t.__h = null, i = [a]), (l = v.__b) && l(t);
    try {
        e: if (typeof y == "function") {
            if (f = t.props, S = (l = y.contextType) && n[l.__c], g = l ? S ? S.props.value : l.__ : n, r.__c ? _ = (c = t.__c = r.__c).__ = c.__E : ("prototype" in y && y.prototype.render ? t.__c = c = new y(f, g) : (t.__c = c = new Q(f, g), c.constructor = y, c.render = Pc), S && S.sub(c), c.props = f, c.state || (c.state = {}), c.context = g, c.__n = n, m = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), y.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = _e({}, c.__s)), _e(c.__s, y.getDerivedStateFromProps(f, c.__s))), d = c.props, E = c.state, c.__v = t, m) y.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
            else {
                if (y.getDerivedStateFromProps == null && f !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(f, g), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(f, c.__s, g) === !1 || t.__v === r.__v) {
                    for (t.__v !== r.__v && (c.props = f, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function(R) {
                            R && (R.__ = t)
                        }), P = 0; P < c._sb.length; P++) c.__h.push(c._sb[P]);
                    c._sb = [], c.__h.length && s.push(c);
                    break e
                }
                c.componentWillUpdate != null && c.componentWillUpdate(f, c.__s, g), c.componentDidUpdate != null && c.__h.push(function() {
                    c.componentDidUpdate(d, E, C)
                })
            }
            if (c.context = g, c.props = f, c.__P = e, L = v.__r, A = 0, "prototype" in y && y.prototype.render) {
                for (c.state = c.__s, c.__d = !1, L && L(t), l = c.render(c.props, c.state, c.context), b = 0; b < c._sb.length; b++) c.__h.push(c._sb[b]);
                c._sb = []
            } else
                do c.__d = !1, L && L(t), l = c.render(c.props, c.state, c.context), c.state = c.__s; while (c.__d && ++A < 25);
            c.state = c.__s, c.getChildContext != null && (n = _e(_e({}, n), c.getChildContext())), m || c.getSnapshotBeforeUpdate == null || (C = c.getSnapshotBeforeUpdate(d, E)), M = l != null && l.type === ie && l.key == null ? l.props.children : l, mo(e, Array.isArray(M) ? M : [M], t, r, n, o, i, s, a, u), c.base = t.__e, t.__h = null, c.__h.length && s.push(c), _ && (c.__E = c.__ = null), c.__e = !1
        } else i == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = Dc(r.__e, t, r, n, o, i, s, u);
        (l = v.diffed) && l(t)
    }
    catch (R) {
        t.__v = null, (u || i != null) && (t.__e = a, t.__h = !!u, i[i.indexOf(a)] = null), v.__e(R, t, r)
    }
}

function Co(e, t) {
    v.__c && v.__c(t, e), e.some(function(r) {
        try {
            e = r.__h, r.__h = [], e.some(function(n) {
                n.call(r)
            })
        } catch (n) {
            v.__e(n, r.__v)
        }
    })
}

function Dc(e, t, r, n, o, i, s, a) {
    var u, l, c, m = r.props,
        d = t.props,
        E = t.type,
        C = 0;
    if (E === "svg" && (o = !0), i != null) {
        for (; C < i.length; C++)
            if ((u = i[C]) && "setAttribute" in u == !!E && (E ? u.localName === E : u.nodeType === 3)) {
                e = u, i[C] = null;
                break
            }
    }
    if (e == null) {
        if (E === null) return document.createTextNode(d);
        e = o ? document.createElementNS("http://www.w3.org/2000/svg", E) : document.createElement(E, d.is && d), i = null, a = !1
    }
    if (E === null) m === d || a && e.data === d || (e.data = d);
    else {
        if (i = i && ze.call(e.childNodes), l = (m = r.props || It).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) {
            if (i != null)
                for (m = {}, C = 0; C < e.attributes.length; C++) m[e.attributes[C].name] = e.attributes[C].value;
            (c || l) && (c && (l && c.__html == l.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""))
        }
        if (bc(e, d, m, o, a), c) t.__k = [];
        else if (C = t.props.children, mo(e, Array.isArray(C) ? C : [C], t, r, n, o && E !== "foreignObject", i, s, i ? i[0] : r.__k && Ke(r, 0), a), i != null)
            for (C = i.length; C--;) i[C] != null && Eo(i[C]);
        a || ("value" in d && (C = d.value) !== void 0 && (C !== e.value || E === "progress" && !C || E === "option" && C !== m.value) && At(e, "value", C, m.value, !1), "checked" in d && (C = d.checked) !== void 0 && C !== e.checked && At(e, "checked", C, m.checked, !1))
    }
    return e
}

function Io(e, t, r) {
    try {
        typeof e == "function" ? e(t) : e.current = t
    } catch (n) {
        v.__e(n, r)
    }
}

function To(e, t, r) {
    var n, o;
    if (v.unmount && v.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Io(n, null, t)), (n = e.__c) != null) {
        if (n.componentWillUnmount) try {
            n.componentWillUnmount()
        } catch (i) {
            v.__e(i, t)
        }
        n.base = n.__P = null, e.__c = void 0
    }
    if (n = e.__k)
        for (o = 0; o < n.length; o++) n[o] && To(n[o], t, r || typeof e.type != "function");
    r || e.__e == null || Eo(e.__e), e.__ = e.__e = e.__d = void 0
}

function Pc(e, t, r) {
    return this.constructor(e, r)
}

function Me(e, t, r) {
    var n, o, i;
    v.__ && v.__(e, t), o = (n = typeof r == "function") ? null : r && r.__k || t.__k, i = [], gr(t, e = (!n && r || t).__k = z(ie, null, [e]), o || It, It, t.ownerSVGElement !== void 0, !n && r ? [r] : o ? null : t.firstChild ? ze.call(t.childNodes) : null, i, !n && r ? r : o ? o.__e : t.firstChild, n), Co(i, e)
}

function hr(e, t) {
    Me(e, t, hr)
}

function Cr(e, t, r) {
    var n, o, i, s = _e({}, e.props);
    for (i in t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
    return arguments.length > 2 && (s.children = arguments.length > 3 ? ze.call(arguments, 2) : r), He(e.type, s, n || e.key, o || e.ref, null)
}

function Nt(e, t) {
    var r = {
        __c: t = "__cC" + _o++,
        __: e,
        Consumer: function(n, o) {
            return n.children(o)
        },
        Provider: function(n) {
            var o, i;
            return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
                return i
            }, this.shouldComponentUpdate = function(s) {
                this.props.value !== s.value && o.some(function(a) {
                    a.__e = !0, qt(a)
                })
            }, this.sub = function(s) {
                o.push(s);
                var a = s.componentWillUnmount;
                s.componentWillUnmount = function() {
                    o.splice(o.indexOf(s), 1), a && a.call(s)
                }
            }), n.children
        }
    };
    return r.Provider.__ = r.Consumer.contextType = r
}
ze = fo.slice, v = {
    __e: function(e, t, r, n) {
        for (var o, i, s; t = t.__;)
            if ((o = t.__c) && !o.__) try {
                if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), s = o.__d), s) return o.__E = o
            } catch (a) {
                e = a
            }
        throw e
    }
}, uo = 0, co = function(e) {
    return e != null && e.constructor === void 0
}, Q.prototype.setState = function(e, t) {
    var r;
    r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = _e({}, this.state), typeof e == "function" && (e = e(_e({}, r), this.props)), e && _e(r, e), e != null && this.__v && (t && this._sb.push(t), qt(this))
}, Q.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), qt(this))
}, Q.prototype.render = ie, Te = [], lo = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, zt = function(e, t) {
    return e.__v.__b - t.__v.__b
}, Tt.__r = 0, _o = 0;
const Nc = Object.freeze(Object.defineProperty({
    __proto__: null,
    Component: Q,
    Fragment: ie,
    cloneElement: Cr,
    createContext: Nt,
    createElement: z,
    createRef: Sr,
    h: z,
    hydrate: hr,
    get isValidElement() {
        return co
    },
    get options() {
        return v
    },
    render: Me,
    toChildArray: re
}, Symbol.toStringTag, {
    value: "Module"
}));
var ge, G, Vt, Cn, ye = 0,
    Ao = [],
    pt = [],
    In = v.__b,
    Tn = v.__r,
    An = v.diffed,
    Rn = v.__c,
    On = v.unmount;

function be(e, t) {
    v.__h && v.__h(G, e, ye || t), ye = 0;
    var r = G.__H || (G.__H = {
        __: [],
        __h: []
    });
    return e >= r.__.length && r.__.push({
        __V: pt
    }), r.__[e]
}

function Lt(e) {
    return ye = 1, Ir(No, e)
}

function Ir(e, t, r) {
    var n = be(ge++, 2);
    if (n.t = e, !n.__c && (n.__ = [r ? r(t) : No(void 0, t), function(a) {
            var u = n.__N ? n.__N[0] : n.__[0],
                l = n.t(u, a);
            u !== l && (n.__N = [l, n.__[1]], n.__c.setState({}))
        }], n.__c = G, !G.u)) {
        var o = function(a, u, l) {
            if (!n.__c.__H) return !0;
            var c = n.__c.__H.__.filter(function(d) {
                return d.__c
            });
            if (c.every(function(d) {
                    return !d.__N
                })) return !i || i.call(this, a, u, l);
            var m = !1;
            return c.forEach(function(d) {
                if (d.__N) {
                    var E = d.__[0];
                    d.__ = d.__N, d.__N = void 0, E !== d.__[0] && (m = !0)
                }
            }), !(!m && n.__c.props === a) && (!i || i.call(this, a, u, l))
        };
        G.u = !0;
        var i = G.shouldComponentUpdate,
            s = G.componentWillUpdate;
        G.componentWillUpdate = function(a, u, l) {
            if (this.__e) {
                var c = i;
                i = void 0, o(a, u, l), i = c
            }
            s && s.call(this, a, u, l)
        }, G.shouldComponentUpdate = o
    }
    return n.__N || n.__
}

function Tr(e, t) {
    var r = be(ge++, 3);
    !v.__s && Rr(r.__H, t) && (r.__ = e, r.i = t, G.__H.__h.push(r))
}

function qe(e, t) {
    var r = be(ge++, 4);
    !v.__s && Rr(r.__H, t) && (r.__ = e, r.i = t, G.__h.push(r))
}

function Ro(e) {
    return ye = 5, Ze(function() {
        return {
            current: e
        }
    }, [])
}

function Oo(e, t, r) {
    ye = 6, qe(function() {
        return typeof e == "function" ? (e(t()), function() {
            return e(null)
        }) : e ? (e.current = t(), function() {
            return e.current = null
        }) : void 0
    }, r == null ? r : r.concat(e))
}

function Ze(e, t) {
    var r = be(ge++, 7);
    return Rr(r.__H, t) ? (r.__V = e(), r.i = t, r.__h = e, r.__V) : r.__
}

function bo(e, t) {
    return ye = 8, Ze(function() {
        return e
    }, t)
}

function Ar(e) {
    var t = G.context[e.__c],
        r = be(ge++, 9);
    return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(G)), t.props.value) : e.__
}

function Do(e, t) {
    v.useDebugValue && v.useDebugValue(t ? t(e) : e)
}

function Lc(e) {
    var t = be(ge++, 10),
        r = Lt();
    return t.__ = e, G.componentDidCatch || (G.componentDidCatch = function(n, o) {
        t.__ && t.__(n, o), r[1](n)
    }), [r[0], function() {
        r[1](void 0)
    }]
}

function Po() {
    var e = be(ge++, 11);
    if (!e.__) {
        for (var t = G.__v; t !== null && !t.__m && t.__ !== null;) t = t.__;
        var r = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + r[0] + "-" + r[1]++
    }
    return e.__
}

function Mc() {
    for (var e; e = Ao.shift();)
        if (e.__P && e.__H) try {
            e.__H.__h.forEach(mt), e.__H.__h.forEach(Zt), e.__H.__h = []
        } catch (t) {
            e.__H.__h = [], v.__e(t, e.__v)
        }
}
v.__b = function(e) {
    G = null, In && In(e)
}, v.__r = function(e) {
    Tn && Tn(e), ge = 0;
    var t = (G = e.__c).__H;
    t && (Vt === G ? (t.__h = [], G.__h = [], t.__.forEach(function(r) {
        r.__N && (r.__ = r.__N), r.__V = pt, r.__N = r.i = void 0
    })) : (t.__h.forEach(mt), t.__h.forEach(Zt), t.__h = [])), Vt = G
}, v.diffed = function(e) {
    An && An(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (Ao.push(t) !== 1 && Cn === v.requestAnimationFrame || ((Cn = v.requestAnimationFrame) || yc)(Mc)), t.__H.__.forEach(function(r) {
        r.i && (r.__H = r.i), r.__V !== pt && (r.__ = r.__V), r.i = void 0, r.__V = pt
    })), Vt = G = null
}, v.__c = function(e, t) {
    t.some(function(r) {
        try {
            r.__h.forEach(mt), r.__h = r.__h.filter(function(n) {
                return !n.__ || Zt(n)
            })
        } catch (n) {
            t.some(function(o) {
                o.__h && (o.__h = [])
            }), t = [], v.__e(n, r.__v)
        }
    }), Rn && Rn(e, t)
}, v.unmount = function(e) {
    On && On(e);
    var t, r = e.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            mt(n)
        } catch (o) {
            t = o
        }
    }), r.__H = void 0, t && v.__e(t, r.__v))
};
var bn = typeof requestAnimationFrame == "function";

function yc(e) {
    var t, r = function() {
            clearTimeout(n), bn && cancelAnimationFrame(t), setTimeout(e)
        },
        n = setTimeout(r, 100);
    bn && (t = requestAnimationFrame(r))
}

function mt(e) {
    var t = G,
        r = e.__c;
    typeof r == "function" && (e.__c = void 0, r()), G = t
}

function Zt(e) {
    var t = G;
    e.__c = e.__(), G = t
}

function Rr(e, t) {
    return !e || e.length !== t.length || t.some(function(r, n) {
        return r !== e[n]
    })
}

function No(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Lo(e, t) {
    for (var r in t) e[r] = t[r];
    return e
}

function Xt(e, t) {
    for (var r in e)
        if (r !== "__source" && !(r in t)) return !0;
    for (var n in t)
        if (n !== "__source" && e[n] !== t[n]) return !0;
    return !1
}

function Yt(e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t
}

function Rt(e) {
    this.props = e
}

function Mo(e, t) {
    function r(o) {
        var i = this.props.ref,
            s = i == o.ref;
        return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : Xt(this.props, o)
    }

    function n(o) {
        return this.shouldComponentUpdate = r, z(e, o)
    }
    return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n
}(Rt.prototype = new Q).isPureReactComponent = !0, Rt.prototype.shouldComponentUpdate = function(e, t) {
    return Xt(this.props, e) || Xt(this.state, t)
};
var Dn = v.__b;
v.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Dn && Dn(e)
};
var wc = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function Or(e) {
    function t(r) {
        var n = Lo({}, r);
        return delete n.ref, e(n, r.ref || null)
    }
    return t.$$typeof = wc, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var Pn = function(e, t) {
        return e == null ? null : re(re(e).map(t))
    },
    yo = {
        map: Pn,
        forEach: Pn,
        count: function(e) {
            return e ? re(e).length : 0
        },
        only: function(e) {
            var t = re(e);
            if (t.length !== 1) throw "Children.only";
            return t[0]
        },
        toArray: re
    },
    Uc = v.__e;
v.__e = function(e, t, r, n) {
    if (e.then) {
        for (var o, i = t; i = i.__;)
            if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), o.__c(e, t)
    }
    Uc(e, t, r, n)
};
var Nn = v.unmount;

function wo(e, t, r) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
        typeof n.__c == "function" && n.__c()
    }), e.__c.__H = null), (e = Lo({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
        return wo(n, t, r)
    })), e
}

function Uo(e, t, r) {
    return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
        return Uo(n, t, r)
    }), e.__c && e.__c.__P === t && (e.__e && r.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = r)), e
}

function We() {
    this.__u = 0, this.t = null, this.__b = null
}

function vo(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e)
}

function ko(e) {
    var t, r, n;

    function o(i) {
        if (t || (t = e()).then(function(s) {
                r = s.default || s
            }, function(s) {
                n = s
            }), n) throw n;
        if (!r) throw t;
        return z(r, i)
    }
    return o.displayName = "Lazy", o.__f = !0, o
}

function Le() {
    this.u = null, this.o = null
}
v.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Nn && Nn(e)
}, (We.prototype = new Q).__c = function(e, t) {
    var r = t.__c,
        n = this;
    n.t == null && (n.t = []), n.t.push(r);
    var o = vo(n.__v),
        i = !1,
        s = function() {
            i || (i = !0, r.__R = null, o ? o(a) : a())
        };
    r.__R = s;
    var a = function() {
            if (!--n.__u) {
                if (n.state.__a) {
                    var l = n.state.__a;
                    n.__v.__k[0] = Uo(l, l.__c.__P, l.__c.__O)
                }
                var c;
                for (n.setState({
                        __a: n.__b = null
                    }); c = n.t.pop();) c.forceUpdate()
            }
        },
        u = t.__h === !0;
    n.__u++ || u || n.setState({
        __a: n.__b = n.__v.__k[0]
    }), e.then(s, s)
}, We.prototype.componentWillUnmount = function() {
    this.t = []
}, We.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var r = document.createElement("div"),
                n = this.__v.__k[0].__c;
            this.__v.__k[0] = wo(this.__b, r, n.__O = n.__P)
        }
        this.__b = null
    }
    var o = t.__a && z(ie, null, e.fallback);
    return o && (o.__h = null), [z(ie, null, t.__a ? null : e.children), o]
};
var Ln = function(e, t, r) {
    if (++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
        for (r = e.u; r;) {
            for (; r.length > 3;) r.pop()();
            if (r[1] < r[0]) break;
            e.u = r = r[2]
        }
};

function vc(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function kc(e) {
    var t = this,
        r = e.i;
    t.componentWillUnmount = function() {
        Me(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== r && t.componentWillUnmount(), e.__v ? (t.l || (t.i = r, t.l = {
        nodeType: 1,
        parentNode: r,
        childNodes: [],
        appendChild: function(n) {
            this.childNodes.push(n), t.i.appendChild(n)
        },
        insertBefore: function(n, o) {
            this.childNodes.push(n), t.i.appendChild(n)
        },
        removeChild: function(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n)
        }
    }), Me(z(vc, {
        context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount()
}

function Bo(e, t) {
    var r = z(kc, {
        __v: e,
        i: t
    });
    return r.containerInfo = t, r
}(Le.prototype = new Q).__a = function(e) {
    var t = this,
        r = vo(t.__v),
        n = t.o.get(e);
    return n[0]++,
        function(o) {
            var i = function() {
                t.props.revealOrder ? (n.push(o), Ln(t, e, n)) : o()
            };
            r ? r(i) : i()
        }
}, Le.prototype.render = function(e) {
    this.u = null, this.o = new Map;
    var t = re(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var r = t.length; r--;) this.o.set(t[r], this.u = [1, 0, this.u]);
    return e.children
}, Le.prototype.componentDidUpdate = Le.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach(function(t, r) {
        Ln(e, r, t)
    })
};
var $o = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103,
    Bc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    $c = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    xc = /[A-Z0-9]/g,
    Fc = typeof document != "undefined",
    Gc = function(e) {
        return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e)
    };

function xo(e, t, r) {
    return t.__k == null && (t.textContent = ""), Me(e, t), typeof r == "function" && r(), e ? e.__c : null
}

function Fo(e, t, r) {
    return hr(e, t), typeof r == "function" && r(), e ? e.__c : null
}
Q.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(Q.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
});
var Mn = v.event;

function Hc() {}

function Wc() {
    return this.cancelBubble
}

function Kc() {
    return this.defaultPrevented
}
v.event = function(e) {
    return Mn && (e = Mn(e)), e.persist = Hc, e.isPropagationStopped = Wc, e.isDefaultPrevented = Kc, e.nativeEvent = e
};
var br, yn = {
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    wn = v.vnode;
v.vnode = function(e) {
    var t = e.type,
        r = e.props,
        n = r;
    if (typeof t == "string") {
        for (var o in n = {}, r) {
            var i = r[o];
            if (!(o === "value" && "defaultValue" in r && i == null || Fc && o === "children" && t === "noscript")) {
                var s = o.toLowerCase();
                o === "defaultValue" && "value" in r && r.value == null ? o = "value" : o === "download" && i === !0 ? i = "" : s === "ondoubleclick" ? o = "ondblclick" : s !== "onchange" || t !== "input" && t !== "textarea" || Gc(r.type) ? s === "onfocus" ? o = "onfocusin" : s === "onblur" ? o = "onfocusout" : $c.test(o) ? o = s : t.indexOf("-") === -1 && Bc.test(o) ? o = o.replace(xc, "-$&").toLowerCase() : i === null && (i = void 0) : s = o = "oninput", s === "oninput" && n[o = s] && (o = "oninputCapture"), n[o] = i
            }
        }
        t == "select" && n.multiple && Array.isArray(n.value) && (n.value = re(r.children).forEach(function(a) {
            a.props.selected = n.value.indexOf(a.props.value) != -1
        })), t == "select" && n.defaultValue != null && (n.value = re(r.children).forEach(function(a) {
            a.props.selected = n.multiple ? n.defaultValue.indexOf(a.props.value) != -1 : n.defaultValue == a.props.value
        })), e.props = n, r.class != r.className && (yn.enumerable = "className" in r, r.className != null && (n.class = r.className), Object.defineProperty(n, "className", yn))
    }
    e.$$typeof = $o, wn && wn(e)
};
var Un = v.__r;
v.__r = function(e) {
    Un && Un(e), br = e.__c
};
var vn = v.diffed;
v.diffed = function(e) {
    vn && vn(e);
    var t = e.props,
        r = e.__e;
    r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), br = null
};
var Go = {
        ReactCurrentDispatcher: {
            current: {
                readContext: function(e) {
                    return br.__n[e.__c].props.value
                }
            }
        }
    },
    Vc = "17.0.2";

function Ho(e) {
    return z.bind(null, e)
}

function Dr(e) {
    return !!e && e.$$typeof === $o
}

function Wo(e) {
    return Dr(e) ? Cr.apply(null, arguments) : e
}

function Ko(e) {
    return !!e.__k && (Me(null, e), !0)
}

function Vo(e) {
    return e && (e.base || e.nodeType === 1 && e) || null
}
var Yo = function(e, t) {
        return e(t)
    },
    jo = function(e, t) {
        return e(t)
    },
    Jo = ie;

function Pr(e) {
    e()
}

function zo(e) {
    return e
}

function qo() {
    return [!1, Pr]
}
var Zo = qe;

function Xo(e, t) {
    var r = t(),
        n = Lt({
            h: {
                __: r,
                v: t
            }
        }),
        o = n[0].h,
        i = n[1];
    return qe(function() {
        o.__ = r, o.v = t, Yt(o.__, t()) || i({
            h: o
        })
    }, [e, r, t]), Tr(function() {
        return Yt(o.__, o.v()) || i({
            h: o
        }), e(function() {
            Yt(o.__, o.v()) || i({
                h: o
            })
        })
    }, [e]), r
}
var Yc = {
    useState: Lt,
    useId: Po,
    useReducer: Ir,
    useEffect: Tr,
    useLayoutEffect: qe,
    useInsertionEffect: Zo,
    useTransition: qo,
    useDeferredValue: zo,
    useSyncExternalStore: Xo,
    startTransition: Pr,
    useRef: Ro,
    useImperativeHandle: Oo,
    useMemo: Ze,
    useCallback: bo,
    useContext: Ar,
    useDebugValue: Do,
    version: "17.0.2",
    Children: yo,
    render: xo,
    hydrate: Fo,
    unmountComponentAtNode: Ko,
    createPortal: Bo,
    createElement: z,
    createContext: Nt,
    createFactory: Ho,
    cloneElement: Wo,
    createRef: Sr,
    Fragment: ie,
    isValidElement: Dr,
    findDOMNode: Vo,
    Component: Q,
    PureComponent: Rt,
    memo: Mo,
    forwardRef: Or,
    flushSync: jo,
    unstable_batchedUpdates: Yo,
    StrictMode: Jo,
    Suspense: We,
    SuspenseList: Le,
    lazy: ko,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Go
};
const AT = Object.freeze(Object.defineProperty({
    __proto__: null,
    Children: yo,
    Component: Q,
    Fragment: ie,
    PureComponent: Rt,
    StrictMode: Jo,
    Suspense: We,
    SuspenseList: Le,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Go,
    cloneElement: Wo,
    createContext: Nt,
    createElement: z,
    createFactory: Ho,
    createPortal: Bo,
    createRef: Sr,
    default: Yc,
    findDOMNode: Vo,
    flushSync: jo,
    forwardRef: Or,
    hydrate: Fo,
    isValidElement: Dr,
    lazy: ko,
    memo: Mo,
    render: xo,
    startTransition: Pr,
    unmountComponentAtNode: Ko,
    unstable_batchedUpdates: Yo,
    useCallback: bo,
    useContext: Ar,
    useDebugValue: Do,
    useDeferredValue: zo,
    useEffect: Tr,
    useErrorBoundary: Lc,
    useId: Po,
    useImperativeHandle: Oo,
    useInsertionEffect: Zo,
    useLayoutEffect: qe,
    useMemo: Ze,
    useReducer: Ir,
    useRef: Ro,
    useState: Lt,
    useSyncExternalStore: Xo,
    useTransition: qo,
    version: Vc
}, Symbol.toStringTag, {
    value: "Module"
}));
var W = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function F(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function RT(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        r.prototype = t.prototype
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(n) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(r, n, o.get ? o : {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    }), r
}
var Qo = {
    exports: {}
};
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(e, t) {
    (function(r) {
        var n = !1;
        if (e.exports = r(), n = !0, !n) {
            var o = window.Cookies,
                i = window.Cookies = r();
            i.noConflict = function() {
                return window.Cookies = o, i
            }
        }
    })(function() {
        function r() {
            for (var o = 0, i = {}; o < arguments.length; o++) {
                var s = arguments[o];
                for (var a in s) i[a] = s[a]
            }
            return i
        }

        function n(o) {
            function i(s, a, u) {
                var l;
                if (typeof document != "undefined") {
                    if (arguments.length > 1) {
                        if (u = r({
                                path: "/"
                            }, i.defaults, u), typeof u.expires == "number") {
                            var c = new Date;
                            c.setMilliseconds(c.getMilliseconds() + u.expires * 864e5), u.expires = c
                        }
                        u.expires = u.expires ? u.expires.toUTCString() : "";
                        try {
                            l = JSON.stringify(a), /^[\{\[]/.test(l) && (a = l)
                        } catch (P) {}
                        o.write ? a = o.write(a, s) : a = encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), s = encodeURIComponent(String(s)), s = s.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), s = s.replace(/[\(\)]/g, escape);
                        var m = "";
                        for (var d in u) u[d] && (m += "; " + d, u[d] !== !0 && (m += "=" + u[d]));
                        return document.cookie = s + "=" + a + m
                    }
                    s || (l = {});
                    for (var E = document.cookie ? document.cookie.split("; ") : [], C = /(%[0-9A-Z]{2})+/g, _ = 0; _ < E.length; _++) {
                        var f = E[_].split("="),
                            S = f.slice(1).join("=");
                        !this.json && S.charAt(0) === '"' && (S = S.slice(1, -1));
                        try {
                            var g = f[0].replace(C, decodeURIComponent);
                            if (S = o.read ? o.read(S, g) : o(S, g) || S.replace(C, decodeURIComponent), this.json) try {
                                S = JSON.parse(S)
                            } catch (P) {}
                            if (s === g) {
                                l = S;
                                break
                            }
                            s || (l[g] = S)
                        } catch (P) {}
                    }
                    return l
                }
            }
            return i.set = i, i.get = function(s) {
                return i.call(i, s)
            }, i.getJSON = function() {
                return i.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, i.defaults = {}, i.remove = function(s, a) {
                i(s, "", r(a, {
                    expires: -1
                }))
            }, i.withConverter = n, i
        }
        return n(function() {})
    })
})(Qo);
var jc = Qo.exports;
const OT = F(jc); /*! gettext.js - Guillaume Potier - MIT Licensed */
var ei = function(e) {
    e = e || {}, this && (this.__version = "1.1.1");
    var t = {
            domain: "messages",
            locale: (typeof document != "undefined" ? document.documentElement.getAttribute("lang") : !1) || "en",
            plural_func: function(_) {
                return {
                    nplurals: 2,
                    plural: _ != 1 ? 1 : 0
                }
            },
            ctxt_delimiter: String.fromCharCode(4)
        },
        r = {
            isObject: function(_) {
                var f = typeof _;
                return f === "function" || f === "object" && !!_
            },
            isArray: function(_) {
                return toString.call(_) === "[object Array]"
            }
        },
        n = {},
        o = e.locale || t.locale,
        i = e.domain || t.domain,
        s = {},
        a = {},
        u = e.ctxt_delimiter || t.ctxt_delimiter;
    e.messages && (s[i] = {}, s[i][o] = e.messages), e.plural_forms && (a[o] = e.plural_forms);
    var l = function(_) {
            var f = arguments;
            return _.replace(/%%/g, "%% ").replace(/%(\d+)/g, function(S, g) {
                return f[g]
            }).replace(/%% /g, "%")
        },
        c = function(_) {
            if (_.indexOf(u) !== -1) {
                var f = _.split(u);
                return f[1]
            }
            return _
        },
        m = function(_) {
            for (var f = [_], S = _.lastIndexOf("-"); S > 0;) _ = _.slice(0, S), f.push(_), S = _.lastIndexOf("-");
            return f
        },
        d = function(_) {
            _ = _.replace("_", "-");
            var f = _.search(/[.@]/);
            return f != -1 && (_ = _.slice(0, f)), _
        },
        E = function(_) {
            var f = new RegExp("^\\s*nplurals\\s*=\\s*[0-9]+\\s*;\\s*plural\\s*=\\s*(?:\\s|[-\\?\\|&=!<>+*/%:;n0-9_()])+");
            if (!f.test(_)) throw new Error(l('The plural form "%1" is not valid', _));
            return new Function("n", "var plural, nplurals; " + _ + " return { nplurals: nplurals, plural: (plural === true ? 1 : (plural ? plural : 0)) };")
        },
        C = function(_, f, S) {
            if (!S.plural_form) return l.apply(this, [c(_[0])].concat(Array.prototype.slice.call(arguments, 3)));
            var g;
            return S.plural_func ? g = S.plural_func(f) : (n[o] || (n[o] = E(a[o])), g = n[o](f)), (typeof g.plural == "undefined" || g.plural > g.nplurals || _.length <= g.plural) && (g.plural = 0), l.apply(this, [c(_[g.plural]), f].concat(Array.prototype.slice.call(arguments, 3)))
        };
    return {
        strfmt: l,
        expand_locale: m,
        __: function() {
            return this.gettext.apply(this, arguments)
        },
        _n: function() {
            return this.ngettext.apply(this, arguments)
        },
        _p: function() {
            return this.pgettext.apply(this, arguments)
        },
        setMessages: function(_, f, S, g) {
            if (!_ || !f || !S) throw new Error("You must provide a domain, a locale and messages");
            if (typeof _ != "string" || typeof f != "string" || !r.isObject(S)) throw new Error("Invalid arguments");
            return f = d(f), g && (a[f] = g), s[_] || (s[_] = {}), s[_][f] = S, this
        },
        loadJSON: function(_, f) {
            if (r.isObject(_) || (_ = JSON.parse(_)), !_[""] || !_[""].language || !_[""]["plural-forms"]) throw new Error('Wrong JSON, it must have an empty key ("") with "language" and "plural-forms" information');
            var S = _[""];
            return delete _[""], this.setMessages(f || t.domain, S.language, _, S["plural-forms"])
        },
        setLocale: function(_) {
            return o = d(_), this
        },
        getLocale: function() {
            return o
        },
        textdomain: function(_) {
            return _ ? (i = _, this) : i
        },
        gettext: function(_) {
            return this.dcnpgettext.apply(this, [void 0, void 0, _, void 0, void 0].concat(Array.prototype.slice.call(arguments, 1)))
        },
        ngettext: function(_, f, S) {
            return this.dcnpgettext.apply(this, [void 0, void 0, _, f, S].concat(Array.prototype.slice.call(arguments, 3)))
        },
        pgettext: function(_, f) {
            return this.dcnpgettext.apply(this, [void 0, _, f, void 0, void 0].concat(Array.prototype.slice.call(arguments, 2)))
        },
        dcnpgettext: function(_, f, S, g, P) {
            if (_ = _ || i, typeof S != "string") throw new Error(this.strfmt('Msgid "%1" is not a valid translatable string', S));
            var L, A = {
                    plural_form: !1
                },
                b = f ? f + u + S : S,
                M, y, R = m(o);
            for (var D in R)
                if (y = R[D], M = s[_] && s[_][y] && s[_][y][b], g ? M = M && typeof s[_][y][b] != "string" : M = M && typeof s[_][y][b] == "string", M) break;
            return M ? L = s[_][y][b] : (L = S, A.plural_func = t.plural_func), g ? (A.plural_form = !0, C.apply(this, [M ? L : [S, g], P, A].concat(Array.prototype.slice.call(arguments, 5)))) : C.apply(this, [
                [L], P, A
            ].concat(Array.prototype.slice.call(arguments, 5)))
        }
    }
};
const Jc = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ei
}, Symbol.toStringTag, {
    value: "Module"
}));
let ue;
const dt = ei || Jc;
dt && dt.hasOwnProperty("default") ? ue = dt.default : ue = dt;
const ti = ue();
ti.setLocale("de");
const ri = ue();
ri.setLocale("fr");
const ni = ue();
ni.setLocale("es");
const oi = ue();
oi.setLocale("pt");
const ii = ue();
ii.setLocale("pt");
const si = ue();
si.setLocale("it");
const ai = ue(),
    zc = ue();
zc.setLocale("en");
const Qt = "en",
    qc = ["en", "de", "es", "fr", "pt", "pt-br", "it"],
    Zc = ["de", "es", "fr", "pt", "pt-br", "it"],
    er = {
        "/": "/home-i",
        "/going-paid": "/going-paid-i",
        "/about": "/about-i"
    },
    Xc = [...new Set([...Object.keys(er), ...Object.values(er), "/signup", "/get-started"])],
    Qc = ["/subscribe", "/"],
    ui = e => ({
        de: ti,
        es: ni,
        fr: ri,
        pt: oi,
        "pt-br": ii,
        it: si
    })[e] || ai,
    Nr = e => (Array.isArray(e) ? (e[0] || "") + e.slice(1).map((t, r) => `%${r+1}${t}`).join("") : e).toString(),
    el = (e, ...t) => {
        const r = Nr(e);
        return ai.gettext(r, ...t)
    },
    ci = ({
        pub: e,
        locale: t,
        forceLocale: r = !1
    } = {}) => {
        let n;
        switch (t == null ? void 0 : t.language) {
            case "de":
                n = "de";
                break;
            case "es":
                n = "es";
                break;
            case "fr":
                n = "fr";
                break;
            case "pt":
                n = "pt";
                break;
            case "pt-br":
                n = "pt-br";
                break;
            case "it":
                n = "it";
                break;
            default:
                n = "en"
        }
        return r ? n : (e == null ? void 0 : e.language) || n || Qt
    },
    li = (e = Qt) => {
        const t = typeof e == "string" ? e : e ? ci({
                pub: e.pub
            }) : Qt,
            r = ui(t),
            n = i => i.replace(/%%([A-Za-z_]+)%($|\w){1}/g, "%%$1%% ");
        return {
            iString: (i, ...s) => n(r.gettext(i, ...s)),
            iPlural: (i, s, a, ...u) => n(r.ngettext(i, s, a, ...u)),
            iContext: (i, s, ...a) => n(r.pgettext(i, s, ...a)),
            iTemplate: (i, ...s) => {
                const a = Nr(i);
                return n(r.gettext(a, ...s))
            },
            iCombo: (i, s, a, u, ...l) => n(r.dcnpgettext(null, i, s, a, u, ...l))
        }
    },
    _i = e => [e, null],
    di = (e, t) => {
        const r = ui(e),
            n = JSON.parse(JSON.stringify(t));
        r.loadJSON(n, "messages")
    },
    tr = {
        i: li,
        p: _i,
        l: di
    };
typeof window != "undefined" ? window.I18N = tr : global.I18N = tr;
const tl = Object.freeze(Object.defineProperty({
    __proto__: null,
    I18N: tr,
    I18N_EXPERIMENT_ROUTES: Qc,
    I18N_MARKETING_PAGES: Xc,
    I18N_MARKETING_REDIRECTS: er,
    defaultTemplateTranslate: el,
    getLanguage: ci,
    i: li,
    l: di,
    p: _i,
    serializeStringTemplate: Nr,
    supportedLanguages: qc,
    supportedNonEnglishLanguages: Zc
}, Symbol.toStringTag, {
    value: "Module"
}));
var fi = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        var r = "millisecond",
            n = "second",
            o = "minute",
            i = "hour",
            s = "day",
            a = "week",
            u = "month",
            l = "quarter",
            c = "year",
            m = "date",
            d = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            C = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            },
            _ = function(R, D, O) {
                var U = String(R);
                return !U || U.length >= D ? R : "" + Array(D + 1 - U.length).join(O) + R
            },
            f = {
                s: _,
                z: function(R) {
                    var D = -R.utcOffset(),
                        O = Math.abs(D),
                        U = Math.floor(O / 60),
                        w = O % 60;
                    return (D <= 0 ? "+" : "-") + _(U, 2, "0") + ":" + _(w, 2, "0")
                },
                m: function R(D, O) {
                    if (D.date() < O.date()) return -R(O, D);
                    var U = 12 * (O.year() - D.year()) + (O.month() - D.month()),
                        w = D.clone().add(U, u),
                        $ = O - w < 0,
                        k = D.clone().add(U + ($ ? -1 : 1), u);
                    return +(-(U + (O - w) / ($ ? w - k : k - w)) || 0)
                },
                a: function(R) {
                    return R < 0 ? Math.ceil(R) || 0 : Math.floor(R)
                },
                p: function(R) {
                    return {
                        M: u,
                        y: c,
                        w: a,
                        d: s,
                        D: m,
                        h: i,
                        m: o,
                        s: n,
                        ms: r,
                        Q: l
                    }[R] || String(R || "").toLowerCase().replace(/s$/, "")
                },
                u: function(R) {
                    return R === void 0
                }
            },
            S = "en",
            g = {};
        g[S] = C;
        var P = function(R) {
                return R instanceof M
            },
            L = function(R, D, O) {
                var U;
                if (!R) return S;
                if (typeof R == "string") g[R] && (U = R), D && (g[R] = D, U = R);
                else {
                    var w = R.name;
                    g[w] = R, U = w
                }
                return !O && U && (S = U), U || !O && S
            },
            A = function(R, D) {
                if (P(R)) return R.clone();
                var O = typeof D == "object" ? D : {};
                return O.date = R, O.args = arguments, new M(O)
            },
            b = f;
        b.l = L, b.i = P, b.w = function(R, D) {
            return A(R, {
                locale: D.$L,
                utc: D.$u,
                x: D.$x,
                $offset: D.$offset
            })
        };
        var M = function() {
                function R(O) {
                    this.$L = L(O.locale, null, !0), this.parse(O)
                }
                var D = R.prototype;
                return D.parse = function(O) {
                    this.$d = function(U) {
                        var w = U.date,
                            $ = U.utc;
                        if (w === null) return new Date(NaN);
                        if (b.u(w)) return new Date;
                        if (w instanceof Date) return new Date(w);
                        if (typeof w == "string" && !/Z$/i.test(w)) {
                            var k = w.match(d);
                            if (k) {
                                var x = k[2] - 1 || 0,
                                    V = (k[7] || "0").substring(0, 3);
                                return $ ? new Date(Date.UTC(k[1], x, k[3] || 1, k[4] || 0, k[5] || 0, k[6] || 0, V)) : new Date(k[1], x, k[3] || 1, k[4] || 0, k[5] || 0, k[6] || 0, V)
                            }
                        }
                        return new Date(w)
                    }(O), this.$x = O.x || {}, this.init()
                }, D.init = function() {
                    var O = this.$d;
                    this.$y = O.getFullYear(), this.$M = O.getMonth(), this.$D = O.getDate(), this.$W = O.getDay(), this.$H = O.getHours(), this.$m = O.getMinutes(), this.$s = O.getSeconds(), this.$ms = O.getMilliseconds()
                }, D.$utils = function() {
                    return b
                }, D.isValid = function() {
                    return this.$d.toString() !== "Invalid Date"
                }, D.isSame = function(O, U) {
                    var w = A(O);
                    return this.startOf(U) <= w && w <= this.endOf(U)
                }, D.isAfter = function(O, U) {
                    return A(O) < this.startOf(U)
                }, D.isBefore = function(O, U) {
                    return this.endOf(U) < A(O)
                }, D.$g = function(O, U, w) {
                    return b.u(O) ? this[U] : this.set(w, O)
                }, D.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, D.valueOf = function() {
                    return this.$d.getTime()
                }, D.startOf = function(O, U) {
                    var w = this,
                        $ = !!b.u(U) || U,
                        k = b.p(O),
                        x = function(ne, q) {
                            var oe = b.w(w.$u ? Date.UTC(w.$y, q, ne) : new Date(w.$y, q, ne), w);
                            return $ ? oe : oe.endOf(s)
                        },
                        V = function(ne, q) {
                            return b.w(w.toDate()[ne].apply(w.toDate("s"), ($ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), w)
                        },
                        H = this.$W,
                        j = this.$M,
                        Z = this.$D,
                        ee = "set" + (this.$u ? "UTC" : "");
                    switch (k) {
                        case c:
                            return $ ? x(1, 0) : x(31, 11);
                        case u:
                            return $ ? x(1, j) : x(0, j + 1);
                        case a:
                            var ae = this.$locale().weekStart || 0,
                                Ee = (H < ae ? H + 7 : H) - ae;
                            return x($ ? Z - Ee : Z + (6 - Ee), j);
                        case s:
                        case m:
                            return V(ee + "Hours", 0);
                        case i:
                            return V(ee + "Minutes", 1);
                        case o:
                            return V(ee + "Seconds", 2);
                        case n:
                            return V(ee + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, D.endOf = function(O) {
                    return this.startOf(O, !1)
                }, D.$set = function(O, U) {
                    var w, $ = b.p(O),
                        k = "set" + (this.$u ? "UTC" : ""),
                        x = (w = {}, w[s] = k + "Date", w[m] = k + "Date", w[u] = k + "Month", w[c] = k + "FullYear", w[i] = k + "Hours", w[o] = k + "Minutes", w[n] = k + "Seconds", w[r] = k + "Milliseconds", w)[$],
                        V = $ === s ? this.$D + (U - this.$W) : U;
                    if ($ === u || $ === c) {
                        var H = this.clone().set(m, 1);
                        H.$d[x](V), H.init(), this.$d = H.set(m, Math.min(this.$D, H.daysInMonth())).$d
                    } else x && this.$d[x](V);
                    return this.init(), this
                }, D.set = function(O, U) {
                    return this.clone().$set(O, U)
                }, D.get = function(O) {
                    return this[b.p(O)]()
                }, D.add = function(O, U) {
                    var w, $ = this;
                    O = Number(O);
                    var k = b.p(U),
                        x = function(j) {
                            var Z = A($);
                            return b.w(Z.date(Z.date() + Math.round(j * O)), $)
                        };
                    if (k === u) return this.set(u, this.$M + O);
                    if (k === c) return this.set(c, this.$y + O);
                    if (k === s) return x(1);
                    if (k === a) return x(7);
                    var V = (w = {}, w[o] = 6e4, w[i] = 36e5, w[n] = 1e3, w)[k] || 1,
                        H = this.$d.getTime() + O * V;
                    return b.w(H, this)
                }, D.subtract = function(O, U) {
                    return this.add(-1 * O, U)
                }, D.format = function(O) {
                    var U = this;
                    if (!this.isValid()) return "Invalid Date";
                    var w = O || "YYYY-MM-DDTHH:mm:ssZ",
                        $ = b.z(this),
                        k = this.$locale(),
                        x = this.$H,
                        V = this.$m,
                        H = this.$M,
                        j = k.weekdays,
                        Z = k.months,
                        ee = function(q, oe, he, pe) {
                            return q && (q[oe] || q(U, w)) || he[oe].substr(0, pe)
                        },
                        ae = function(q) {
                            return b.s(x % 12 || 12, q, "0")
                        },
                        Ee = k.meridiem || function(q, oe, he) {
                            var pe = q < 12 ? "AM" : "PM";
                            return he ? pe.toLowerCase() : pe
                        },
                        ne = {
                            YY: String(this.$y).slice(-2),
                            YYYY: this.$y,
                            M: H + 1,
                            MM: b.s(H + 1, 2, "0"),
                            MMM: ee(k.monthsShort, H, Z, 3),
                            MMMM: ee(Z, H),
                            D: this.$D,
                            DD: b.s(this.$D, 2, "0"),
                            d: String(this.$W),
                            dd: ee(k.weekdaysMin, this.$W, j, 2),
                            ddd: ee(k.weekdaysShort, this.$W, j, 3),
                            dddd: j[this.$W],
                            H: String(x),
                            HH: b.s(x, 2, "0"),
                            h: ae(1),
                            hh: ae(2),
                            a: Ee(x, V, !0),
                            A: Ee(x, V, !1),
                            m: String(V),
                            mm: b.s(V, 2, "0"),
                            s: String(this.$s),
                            ss: b.s(this.$s, 2, "0"),
                            SSS: b.s(this.$ms, 3, "0"),
                            Z: $
                        };
                    return w.replace(E, function(q, oe) {
                        return oe || ne[q] || $.replace(":", "")
                    })
                }, D.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }, D.diff = function(O, U, w) {
                    var $, k = b.p(U),
                        x = A(O),
                        V = 6e4 * (x.utcOffset() - this.utcOffset()),
                        H = this - x,
                        j = b.m(this, x);
                    return j = ($ = {}, $[c] = j / 12, $[u] = j, $[l] = j / 3, $[a] = (H - V) / 6048e5, $[s] = (H - V) / 864e5, $[i] = H / 36e5, $[o] = H / 6e4, $[n] = H / 1e3, $)[k] || H, w ? j : b.a(j)
                }, D.daysInMonth = function() {
                    return this.endOf(u).$D
                }, D.$locale = function() {
                    return g[this.$L]
                }, D.locale = function(O, U) {
                    if (!O) return this.$L;
                    var w = this.clone(),
                        $ = L(O, U, !0);
                    return $ && (w.$L = $), w
                }, D.clone = function() {
                    return b.w(this.$d, this)
                }, D.toDate = function() {
                    return new Date(this.valueOf())
                }, D.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, D.toISOString = function() {
                    return this.$d.toISOString()
                }, D.toString = function() {
                    return this.$d.toUTCString()
                }, R
            }(),
            y = M.prototype;
        return A.prototype = y, [
            ["$ms", r],
            ["$s", n],
            ["$m", o],
            ["$H", i],
            ["$W", s],
            ["$M", u],
            ["$y", c],
            ["$D", m]
        ].forEach(function(R) {
            y[R[1]] = function(D) {
                return this.$g(D, R[0], R[1])
            }
        }), A.extend = function(R, D) {
            return R.$i || (R(D, M, A), R.$i = !0), A
        }, A.locale = L, A.isDayjs = P, A.unix = function(R) {
            return A(1e3 * R)
        }, A.en = g[S], A.Ls = g, A.p = {}, A
    })
})(fi);
var De = fi.exports;
const Mt = F(De),
    Ei = Y({
        __proto__: null,
        default: Mt
    }, [De]);
var pi = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        return function(r, n, o) {
            var i = n.prototype,
                s = i.format;
            o.en.ordinal = function(a) {
                var u = ["th", "st", "nd", "rd"],
                    l = a % 100;
                return "[" + a + (u[(l - 20) % 10] || u[l] || u[0]) + "]"
            }, i.format = function(a) {
                var u = this,
                    l = this.$locale(),
                    c = this.$utils(),
                    m = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(d) {
                        switch (d) {
                            case "Q":
                                return Math.ceil((u.$M + 1) / 3);
                            case "Do":
                                return l.ordinal(u.$D);
                            case "gggg":
                                return u.weekYear();
                            case "GGGG":
                                return u.isoWeekYear();
                            case "wo":
                                return l.ordinal(u.week(), "W");
                            case "w":
                            case "ww":
                                return c.s(u.week(), d === "w" ? 1 : 2, "0");
                            case "W":
                            case "WW":
                                return c.s(u.isoWeek(), d === "W" ? 1 : 2, "0");
                            case "k":
                            case "kk":
                                return c.s(String(u.$H === 0 ? 24 : u.$H), d === "k" ? 1 : 2, "0");
                            case "X":
                                return Math.floor(u.$d.getTime() / 1e3);
                            case "x":
                                return u.$d.getTime();
                            case "z":
                                return "[" + u.offsetName() + "]";
                            case "zzz":
                                return "[" + u.offsetName("long") + "]";
                            default:
                                return d
                        }
                    });
                return s.bind(this)(m)
            }
        }
    })
})(pi);
var mi = pi.exports;
const Si = F(mi),
    rl = Y({
        __proto__: null,
        default: Si
    }, [mi]);
var gi = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        var r = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            n = function(_, f) {
                return _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(S, g, P) {
                    var L = P && P.toUpperCase();
                    return g || f[P] || r[P] || f[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(A, b, M) {
                        return b || M.slice(1)
                    })
                })
            },
            o = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
            i = /\d\d/,
            s = /\d\d?/,
            a = /\d*[^\s\d-_:/()]+/,
            u = {},
            l = function(_) {
                return function(f) {
                    this[_] = +f
                }
            },
            c = [/[+-]\d\d:?(\d\d)?/, function(_) {
                (this.zone || (this.zone = {})).offset = function(f) {
                    if (!f) return 0;
                    var S = f.match(/([+-]|\d\d)/g),
                        g = 60 * S[1] + (+S[2] || 0);
                    return g === 0 ? 0 : S[0] === "+" ? -g : g
                }(_)
            }],
            m = function(_) {
                var f = u[_];
                return f && (f.indexOf ? f : f.s.concat(f.f))
            },
            d = function(_, f) {
                var S, g = u.meridiem;
                if (g) {
                    for (var P = 1; P <= 24; P += 1)
                        if (_.indexOf(g(P, 0, f)) > -1) {
                            S = P > 12;
                            break
                        }
                } else S = _ === (f ? "pm" : "PM");
                return S
            },
            E = {
                A: [a, function(_) {
                    this.afternoon = d(_, !1)
                }],
                a: [a, function(_) {
                    this.afternoon = d(_, !0)
                }],
                S: [/\d/, function(_) {
                    this.milliseconds = 100 * +_
                }],
                SS: [i, function(_) {
                    this.milliseconds = 10 * +_
                }],
                SSS: [/\d{3}/, function(_) {
                    this.milliseconds = +_
                }],
                s: [s, l("seconds")],
                ss: [s, l("seconds")],
                m: [s, l("minutes")],
                mm: [s, l("minutes")],
                H: [s, l("hours")],
                h: [s, l("hours")],
                HH: [s, l("hours")],
                hh: [s, l("hours")],
                D: [s, l("day")],
                DD: [i, l("day")],
                Do: [a, function(_) {
                    var f = u.ordinal,
                        S = _.match(/\d+/);
                    if (this.day = S[0], f)
                        for (var g = 1; g <= 31; g += 1) f(g).replace(/\[|\]/g, "") === _ && (this.day = g)
                }],
                M: [s, l("month")],
                MM: [i, l("month")],
                MMM: [a, function(_) {
                    var f = m("months"),
                        S = (m("monthsShort") || f.map(function(g) {
                            return g.substr(0, 3)
                        })).indexOf(_) + 1;
                    if (S < 1) throw new Error;
                    this.month = S % 12 || S
                }],
                MMMM: [a, function(_) {
                    var f = m("months").indexOf(_) + 1;
                    if (f < 1) throw new Error;
                    this.month = f % 12 || f
                }],
                Y: [/[+-]?\d+/, l("year")],
                YY: [i, function(_) {
                    _ = +_, this.year = _ + (_ > 68 ? 1900 : 2e3)
                }],
                YYYY: [/\d{4}/, l("year")],
                Z: c,
                ZZ: c
            },
            C = function(_, f, S) {
                try {
                    var g = function(j) {
                            for (var Z = (j = n(j, u && u.formats)).match(o), ee = Z.length, ae = 0; ae < ee; ae += 1) {
                                var Ee = Z[ae],
                                    ne = E[Ee],
                                    q = ne && ne[0],
                                    oe = ne && ne[1];
                                Z[ae] = oe ? {
                                    regex: q,
                                    parser: oe
                                } : Ee.replace(/^\[|\]$/g, "")
                            }
                            return function(he) {
                                for (var pe = {}, Kt = 0, cn = 0; Kt < ee; Kt += 1) {
                                    var lt = Z[Kt];
                                    if (typeof lt == "string") cn += lt.length;
                                    else {
                                        var hc = lt.regex,
                                            Cc = lt.parser,
                                            Ic = he.substr(cn),
                                            ln = hc.exec(Ic)[0];
                                        Cc.call(pe, ln), he = he.replace(ln, "")
                                    }
                                }
                                return function(xe) {
                                    var _n = xe.afternoon;
                                    if (_n !== void 0) {
                                        var dn = xe.hours;
                                        _n ? dn < 12 && (xe.hours += 12) : dn === 12 && (xe.hours = 0), delete xe.afternoon
                                    }
                                }(pe), pe
                            }
                        }(f)(_),
                        P = g.year,
                        L = g.month,
                        A = g.day,
                        b = g.hours,
                        M = g.minutes,
                        y = g.seconds,
                        R = g.milliseconds,
                        D = g.zone,
                        O = new Date,
                        U = A || (P || L ? 1 : O.getDate()),
                        w = P || O.getFullYear(),
                        $ = 0;
                    P && !L || ($ = L > 0 ? L - 1 : O.getMonth());
                    var k = b || 0,
                        x = M || 0,
                        V = y || 0,
                        H = R || 0;
                    return D ? new Date(Date.UTC(w, $, U, k, x, V, H + 60 * D.offset * 1e3)) : S ? new Date(Date.UTC(w, $, U, k, x, V, H)) : new Date(w, $, U, k, x, V, H)
                } catch (j) {
                    return new Date("")
                }
            };
        return function(_, f, S) {
            S.p.customParseFormat = !0;
            var g = f.prototype,
                P = g.parse;
            g.parse = function(L) {
                var A = L.date,
                    b = L.utc,
                    M = L.args;
                this.$u = b;
                var y = M[1];
                if (typeof y == "string") {
                    var R = M[2] === !0,
                        D = M[3] === !0,
                        O = R || D,
                        U = M[2];
                    D && (U = M[2]), u = this.$locale(), !R && U && (u = S.Ls[U]), this.$d = C(A, y, b), this.init(), U && U !== !0 && (this.$L = this.locale(U).$L), O && A !== this.format(y) && (this.$d = new Date("")), u = {}
                } else if (y instanceof Array)
                    for (var w = y.length, $ = 1; $ <= w; $ += 1) {
                        M[1] = y[$ - 1];
                        var k = S.apply(this, M);
                        if (k.isValid()) {
                            this.$d = k.$d, this.$L = k.$L, this.init();
                            break
                        }
                        $ === w && (this.$d = new Date(""))
                    } else P.call(this, L)
            }
        }
    })
})(gi);
var hi = gi.exports;
const Ci = F(hi),
    nl = Y({
        __proto__: null,
        default: Ci
    }, [hi]);
var Ii = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        return function(r, n) {
            n.prototype.dayOfYear = function(o) {
                var i = Math.round((this.startOf("day") - this.startOf("year")) / 864e5) + 1;
                return o == null ? i : this.add(o - i, "day")
            }
        }
    })
})(Ii);
var Ti = Ii.exports;
const Ai = F(Ti),
    ol = Y({
        __proto__: null,
        default: Ai
    }, [Ti]);
var Ri = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        var r, n, o = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            i = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
            s = {
                years: 31536e6,
                months: 2592e6,
                days: 864e5,
                hours: 36e5,
                minutes: 6e4,
                seconds: 1e3,
                milliseconds: 1,
                weeks: 6048e5
            },
            a = function(C) {
                return C instanceof E
            },
            u = function(C, _, f) {
                return new E(C, f, _.$l)
            },
            l = function(C) {
                return n.p(C) + "s"
            },
            c = function(C) {
                return C < 0
            },
            m = function(C) {
                return c(C) ? Math.ceil(C) : Math.floor(C)
            },
            d = function(C, _) {
                return C ? c(C) ? {
                    negative: !0,
                    format: "" + function(f) {
                        return Math.abs(f)
                    }(C) + _
                } : {
                    negative: !1,
                    format: "" + C + _
                } : {
                    negative: !1,
                    format: ""
                }
            },
            E = function() {
                function C(f, S, g) {
                    var P = this;
                    if (this.$d = {}, this.$l = g, S) return u(f * s[l(S)], this);
                    if (typeof f == "number") return this.$ms = f, this.parseFromMilliseconds(), this;
                    if (typeof f == "object") return Object.keys(f).forEach(function(A) {
                        P.$d[l(A)] = f[A]
                    }), this.calMilliseconds(), this;
                    if (typeof f == "string") {
                        var L = f.match(i);
                        if (L) return this.$d.years = L[2], this.$d.months = L[3], this.$d.weeks = L[4], this.$d.days = L[5], this.$d.hours = L[6], this.$d.minutes = L[7], this.$d.seconds = L[8], this.calMilliseconds(), this
                    }
                    return this
                }
                var _ = C.prototype;
                return _.calMilliseconds = function() {
                    var f = this;
                    this.$ms = Object.keys(this.$d).reduce(function(S, g) {
                        return S + (f.$d[g] || 0) * s[g]
                    }, 0)
                }, _.parseFromMilliseconds = function() {
                    var f = this.$ms;
                    this.$d.years = m(f / 31536e6), f %= 31536e6, this.$d.months = m(f / 2592e6), f %= 2592e6, this.$d.days = m(f / 864e5), f %= 864e5, this.$d.hours = m(f / 36e5), f %= 36e5, this.$d.minutes = m(f / 6e4), f %= 6e4, this.$d.seconds = m(f / 1e3), f %= 1e3, this.$d.milliseconds = f
                }, _.toISOString = function() {
                    var f = d(this.$d.years, "Y"),
                        S = d(this.$d.months, "M"),
                        g = +this.$d.days || 0;
                    this.$d.weeks && (g += 7 * this.$d.weeks);
                    var P = d(g, "D"),
                        L = d(this.$d.hours, "H"),
                        A = d(this.$d.minutes, "M"),
                        b = this.$d.seconds || 0;
                    this.$d.milliseconds && (b += this.$d.milliseconds / 1e3);
                    var M = d(b, "S"),
                        y = f.negative || S.negative || P.negative || L.negative || A.negative || M.negative,
                        R = L.format || A.format || M.format ? "T" : "",
                        D = (y ? "-" : "") + "P" + f.format + S.format + P.format + R + L.format + A.format + M.format;
                    return D === "P" || D === "-P" ? "P0D" : D
                }, _.toJSON = function() {
                    return this.toISOString()
                }, _.format = function(f) {
                    var S = f || "YYYY-MM-DDTHH:mm:ss",
                        g = {
                            Y: this.$d.years,
                            YY: n.s(this.$d.years, 2, "0"),
                            YYYY: n.s(this.$d.years, 4, "0"),
                            M: this.$d.months,
                            MM: n.s(this.$d.months, 2, "0"),
                            D: this.$d.days,
                            DD: n.s(this.$d.days, 2, "0"),
                            H: this.$d.hours,
                            HH: n.s(this.$d.hours, 2, "0"),
                            m: this.$d.minutes,
                            mm: n.s(this.$d.minutes, 2, "0"),
                            s: this.$d.seconds,
                            ss: n.s(this.$d.seconds, 2, "0"),
                            SSS: n.s(this.$d.milliseconds, 3, "0")
                        };
                    return S.replace(o, function(P, L) {
                        return L || String(g[P])
                    })
                }, _.as = function(f) {
                    return this.$ms / s[l(f)]
                }, _.get = function(f) {
                    var S = this.$ms,
                        g = l(f);
                    return g === "milliseconds" ? S %= 1e3 : S = g === "weeks" ? m(S / s[g]) : this.$d[g], S === 0 ? 0 : S
                }, _.add = function(f, S, g) {
                    var P;
                    return P = S ? f * s[l(S)] : a(f) ? f.$ms : u(f, this).$ms, u(this.$ms + P * (g ? -1 : 1), this)
                }, _.subtract = function(f, S) {
                    return this.add(f, S, !0)
                }, _.locale = function(f) {
                    var S = this.clone();
                    return S.$l = f, S
                }, _.clone = function() {
                    return u(this.$ms, this)
                }, _.humanize = function(f) {
                    return r().add(this.$ms, "ms").locale(this.$l).fromNow(!f)
                }, _.milliseconds = function() {
                    return this.get("milliseconds")
                }, _.asMilliseconds = function() {
                    return this.as("milliseconds")
                }, _.seconds = function() {
                    return this.get("seconds")
                }, _.asSeconds = function() {
                    return this.as("seconds")
                }, _.minutes = function() {
                    return this.get("minutes")
                }, _.asMinutes = function() {
                    return this.as("minutes")
                }, _.hours = function() {
                    return this.get("hours")
                }, _.asHours = function() {
                    return this.as("hours")
                }, _.days = function() {
                    return this.get("days")
                }, _.asDays = function() {
                    return this.as("days")
                }, _.weeks = function() {
                    return this.get("weeks")
                }, _.asWeeks = function() {
                    return this.as("weeks")
                }, _.months = function() {
                    return this.get("months")
                }, _.asMonths = function() {
                    return this.as("months")
                }, _.years = function() {
                    return this.get("years")
                }, _.asYears = function() {
                    return this.as("years")
                }, C
            }();
        return function(C, _, f) {
            r = f, n = f().$utils(), f.duration = function(P, L) {
                var A = f.locale();
                return u(P, {
                    $l: A
                }, L)
            }, f.isDuration = a;
            var S = _.prototype.add,
                g = _.prototype.subtract;
            _.prototype.add = function(P, L) {
                return a(P) && (P = P.asMilliseconds()), S.bind(this)(P, L)
            }, _.prototype.subtract = function(P, L) {
                return a(P) && (P = P.asMilliseconds()), g.bind(this)(P, L)
            }
        }
    })
})(Ri);
var Oi = Ri.exports;
const bi = F(Oi),
    il = Y({
        __proto__: null,
        default: bi
    }, [Oi]);
var Di = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        return function(r, n, o) {
            n.prototype.isBetween = function(i, s, a, u) {
                var l = o(i),
                    c = o(s),
                    m = (u = u || "()")[0] === "(",
                    d = u[1] === ")";
                return (m ? this.isAfter(l, a) : !this.isBefore(l, a)) && (d ? this.isBefore(c, a) : !this.isAfter(c, a)) || (m ? this.isBefore(l, a) : !this.isAfter(l, a)) && (d ? this.isAfter(c, a) : !this.isBefore(c, a))
            }
        }
    })
})(Di);
var Pi = Di.exports;
const Ni = F(Pi),
    sl = Y({
        __proto__: null,
        default: Ni
    }, [Pi]);
var Li = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        return function(r, n) {
            n.prototype.isLeapYear = function() {
                return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0
            }
        }
    })
})(Li);
var Mi = Li.exports;
const rr = F(Mi),
    kn = Y({
        __proto__: null,
        default: rr
    }, [Mi]);
var yi = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        return function(r, n) {
            n.prototype.isSameOrAfter = function(o, i) {
                return this.isSame(o, i) || this.isAfter(o, i)
            }
        }
    })
})(yi);
var wi = yi.exports;
const Ui = F(wi),
    al = Y({
        __proto__: null,
        default: Ui
    }, [wi]);
var vi = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        return function(r, n) {
            n.prototype.isSameOrBefore = function(o, i) {
                return this.isSame(o, i) || this.isBefore(o, i)
            }
        }
    })
})(vi);
var ki = vi.exports;
const Bi = F(ki),
    ul = Y({
        __proto__: null,
        default: Bi
    }, [ki]);
var $i = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        var r = "month",
            n = "quarter";
        return function(o, i) {
            var s = i.prototype;
            s.quarter = function(l) {
                return this.$utils().u(l) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (l - 1))
            };
            var a = s.add;
            s.add = function(l, c) {
                return l = Number(l), this.$utils().p(c) === n ? this.add(3 * l, r) : a.bind(this)(l, c)
            };
            var u = s.startOf;
            s.startOf = function(l, c) {
                var m = this.$utils(),
                    d = !!m.u(c) || c;
                if (m.p(l) === n) {
                    var E = this.quarter() - 1;
                    return d ? this.month(3 * E).startOf(r).startOf("day") : this.month(3 * E + 2).endOf(r).endOf("day")
                }
                return u.bind(this)(l, c)
            }
        }
    })
})($i);
var xi = $i.exports;
const Fi = F(xi),
    cl = Y({
        __proto__: null,
        default: Fi
    }, [xi]);
var Gi = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        return function(r, n, o) {
            r = r || {};
            var i = n.prototype,
                s = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                };

            function a(l, c, m, d) {
                return i.fromToBase(l, c, m, d)
            }
            o.en.relativeTime = s, i.fromToBase = function(l, c, m, d, E) {
                for (var C, _, f, S = m.$locale().relativeTime || s, g = r.thresholds || [{
                        l: "s",
                        r: 44,
                        d: "second"
                    }, {
                        l: "m",
                        r: 89
                    }, {
                        l: "mm",
                        r: 44,
                        d: "minute"
                    }, {
                        l: "h",
                        r: 89
                    }, {
                        l: "hh",
                        r: 21,
                        d: "hour"
                    }, {
                        l: "d",
                        r: 35
                    }, {
                        l: "dd",
                        r: 25,
                        d: "day"
                    }, {
                        l: "M",
                        r: 45
                    }, {
                        l: "MM",
                        r: 10,
                        d: "month"
                    }, {
                        l: "y",
                        r: 17
                    }, {
                        l: "yy",
                        d: "year"
                    }], P = g.length, L = 0; L < P; L += 1) {
                    var A = g[L];
                    A.d && (C = d ? o(l).diff(m, A.d, !0) : m.diff(l, A.d, !0));
                    var b = (r.rounding || Math.round)(Math.abs(C));
                    if (f = C > 0, b <= A.r || !A.r) {
                        b <= 1 && L > 0 && (A = g[L - 1]);
                        var M = S[A.l];
                        E && (b = E("" + b)), _ = typeof M == "string" ? M.replace("%d", b) : M(b, c, A.l, f);
                        break
                    }
                }
                if (c) return _;
                var y = f ? S.future : S.past;
                return typeof y == "function" ? y(_) : y.replace("%s", _)
            }, i.to = function(l, c) {
                return a(l, c, this, !0)
            }, i.from = function(l, c) {
                return a(l, c, this)
            };
            var u = function(l) {
                return l.$u ? o.utc() : o()
            };
            i.toNow = function(l) {
                return this.to(u(this), l)
            }, i.fromNow = function(l) {
                return this.from(u(this), l)
            }
        }
    })
})(Gi);
var Hi = Gi.exports;
const Wi = F(Hi),
    ll = Y({
        __proto__: null,
        default: Wi
    }, [Hi]);
var Ki = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        return function(r, n, o) {
            var i = n.prototype;
            o.utc = function(d) {
                return new n({
                    date: d,
                    utc: !0,
                    args: arguments
                })
            }, i.utc = function(d) {
                var E = o(this.toDate(), {
                    locale: this.$L,
                    utc: !0
                });
                return d ? E.add(this.utcOffset(), "minute") : E
            }, i.local = function() {
                return o(this.toDate(), {
                    locale: this.$L,
                    utc: !1
                })
            };
            var s = i.parse;
            i.parse = function(d) {
                d.utc && (this.$u = !0), this.$utils().u(d.$offset) || (this.$offset = d.$offset), s.call(this, d)
            };
            var a = i.init;
            i.init = function() {
                if (this.$u) {
                    var d = this.$d;
                    this.$y = d.getUTCFullYear(), this.$M = d.getUTCMonth(), this.$D = d.getUTCDate(), this.$W = d.getUTCDay(), this.$H = d.getUTCHours(), this.$m = d.getUTCMinutes(), this.$s = d.getUTCSeconds(), this.$ms = d.getUTCMilliseconds()
                } else a.call(this)
            };
            var u = i.utcOffset;
            i.utcOffset = function(d, E) {
                var C = this.$utils().u;
                if (C(d)) return this.$u ? 0 : C(this.$offset) ? u.call(this) : this.$offset;
                var _ = Math.abs(d) <= 16 ? 60 * d : d,
                    f = this;
                if (E) return f.$offset = _, f.$u = d === 0, f;
                if (d !== 0) {
                    var S = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                    (f = this.local().add(_ + S, "minute")).$offset = _, f.$x.$localOffset = S
                } else f = this.utc();
                return f
            };
            var l = i.format;
            i.format = function(d) {
                var E = d || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                return l.call(this, E)
            }, i.valueOf = function() {
                var d = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || new Date().getTimezoneOffset());
                return this.$d.valueOf() - 6e4 * d
            }, i.isUTC = function() {
                return !!this.$u
            }, i.toISOString = function() {
                return this.toDate().toISOString()
            }, i.toString = function() {
                return this.toDate().toUTCString()
            };
            var c = i.toDate;
            i.toDate = function(d) {
                return d === "s" && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : c.call(this)
            };
            var m = i.diff;
            i.diff = function(d, E, C) {
                if (d && this.$u === d.$u) return m.call(this, d, E, C);
                var _ = this.local(),
                    f = o(d).local();
                return m.call(_, f, E, C)
            }
        }
    })
})(Ki);
var Vi = Ki.exports;
const Yi = F(Vi),
    _l = Y({
        __proto__: null,
        default: Yi
    }, [Vi]);
var ji = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        var r = "week",
            n = "year";
        return function(o, i, s) {
            var a = i.prototype;
            a.week = function(u) {
                if (u === void 0 && (u = null), u !== null) return this.add(7 * (u - this.week()), "day");
                var l = this.$locale().yearStart || 1;
                if (this.month() === 11 && this.date() > 25) {
                    var c = s(this).startOf(n).add(1, n).date(l),
                        m = s(this).endOf(r);
                    if (c.isBefore(m)) return 1
                }
                var d = s(this).startOf(n).date(l).startOf(r).subtract(1, "millisecond"),
                    E = this.diff(d, r, !0);
                return E < 0 ? s(this).startOf("week").week() : Math.ceil(E)
            }, a.weeks = function(u) {
                return u === void 0 && (u = null), this.week(u)
            }
        }
    })
})(ji);
var Ji = ji.exports;
const zi = F(Ji),
    dl = Y({
        __proto__: null,
        default: zi
    }, [Ji]);
var qi = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        var r = {
                year: 0,
                month: 1,
                day: 2,
                hour: 3,
                minute: 4,
                second: 5
            },
            n = {};
        return function(o, i, s) {
            var a, u = s().utcOffset(),
                l = function(E, C, _) {
                    _ === void 0 && (_ = {});
                    var f = new Date(E);
                    return function(S, g) {
                        g === void 0 && (g = {});
                        var P = g.timeZoneName || "short",
                            L = S + "|" + P,
                            A = n[L];
                        return A || (A = new Intl.DateTimeFormat("en-US", {
                            hour12: !1,
                            timeZone: S,
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            timeZoneName: P
                        }), n[L] = A), A
                    }(C, _).formatToParts(f)
                },
                c = function(E, C) {
                    for (var _ = l(E, C), f = [], S = 0; S < _.length; S += 1) {
                        var g = _[S],
                            P = g.type,
                            L = g.value,
                            A = r[P];
                        A >= 0 && (f[A] = parseInt(L, 10))
                    }
                    var b = f[3],
                        M = b === 24 ? 0 : b,
                        y = f[0] + "-" + f[1] + "-" + f[2] + " " + M + ":" + f[4] + ":" + f[5] + ":000",
                        R = +E;
                    return (s.utc(y).valueOf() - (R -= R % 1e3)) / 6e4
                },
                m = i.prototype;
            m.tz = function(E, C) {
                E === void 0 && (E = a);
                var _ = this.utcOffset(),
                    f = this.toDate().toLocaleString("en-US", {
                        timeZone: E
                    }),
                    S = Math.round((this.toDate() - new Date(f)) / 1e3 / 60),
                    g = s(f).$set("millisecond", this.$ms).utcOffset(u - S, !0);
                if (C) {
                    var P = g.utcOffset();
                    g = g.add(_ - P, "minute")
                }
                return g.$x.$timezone = E, g
            }, m.offsetName = function(E) {
                var C = this.$x.$timezone || s.tz.guess(),
                    _ = l(this.valueOf(), C, {
                        timeZoneName: E
                    }).find(function(f) {
                        return f.type.toLowerCase() === "timezonename"
                    });
                return _ && _.value
            };
            var d = m.startOf;
            m.startOf = function(E, C) {
                if (!this.$x || !this.$x.$timezone) return d.call(this, E, C);
                var _ = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
                return d.call(_, E, C).tz(this.$x.$timezone, !0)
            }, s.tz = function(E, C, _) {
                var f = _ && C,
                    S = _ || C || a,
                    g = c(+s(), S);
                if (typeof E != "string") return s(E).tz(S);
                var P = function(M, y, R) {
                        var D = M - 60 * y * 1e3,
                            O = c(D, R);
                        if (y === O) return [D, y];
                        var U = c(D -= 60 * (O - y) * 1e3, R);
                        return O === U ? [D, O] : [M - 60 * Math.min(O, U) * 1e3, Math.max(O, U)]
                    }(s.utc(E, f).valueOf(), g, S),
                    L = P[0],
                    A = P[1],
                    b = s(L).utcOffset(A);
                return b.$x.$timezone = S, b
            }, s.tz.guess = function() {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            }, s.tz.setDefault = function(E) {
                a = E
            }
        }
    })
})(qi);
var Zi = qi.exports;
const Xi = F(Zi),
    fl = Y({
        __proto__: null,
        default: Xi
    }, [Zi]);
var Qi = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        return function(r, n, o) {
            var i = "h:mm A",
                s = {
                    lastDay: "[Yesterday at] " + i,
                    sameDay: "[Today at] " + i,
                    nextDay: "[Tomorrow at] " + i,
                    nextWeek: "dddd [at] " + i,
                    lastWeek: "[Last] dddd [at] " + i,
                    sameElse: "MM/DD/YYYY"
                };
            n.prototype.calendar = function(a, u) {
                var l = u || this.$locale().calendar || s,
                    c = o(a || void 0).startOf("d"),
                    m = this.diff(c, "d", !0),
                    d = m < -6 ? "sameElse" : m < -1 ? "lastWeek" : m < 0 ? "lastDay" : m < 1 ? "sameDay" : m < 2 ? "nextDay" : m < 7 ? "nextWeek" : "sameElse",
                    E = l[d] || s[d];
                return typeof E == "function" ? E.call(this, o()) : this.format(E)
            }
        }
    })
})(Qi);
var es = Qi.exports;
const ts = F(es),
    El = Y({
        __proto__: null,
        default: ts
    }, [es]);
var rs = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        return function(r, n) {
            n.prototype.weekday = function(o) {
                var i = this.$locale().weekStart || 0,
                    s = this.$W,
                    a = (s < i ? s + 7 : s) - i;
                return this.$utils().u(o) ? a : this.subtract(a, "day").add(o, "day")
            }
        }
    })
})(rs);
var ns = rs.exports;
const os = F(ns),
    pl = Y({
        __proto__: null,
        default: os
    }, [ns]);
var is = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(W, function() {
        return function(r, n, o) {
            var i = n.prototype,
                s = i.parse;
            i.parse = function(a) {
                a.date = function(u) {
                    var l = u.date,
                        c = u.utc;
                    return Array.isArray(l) ? c ? l.length ? new Date(Date.UTC.apply(null, l)) : new Date : l.length === 1 ? o(String(l[0])).toDate() : new(Function.prototype.bind.apply(Date, [null].concat(l))) : l
                }.bind(this)(a), s.bind(this)(a)
            }
        }
    })
})(is);
var ss = is.exports;
const as = F(ss),
    ml = Y({
        __proto__: null,
        default: as
    }, [ss]);
var us = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n(De)
    })(W, function(r) {
        r = r && r.hasOwnProperty("default") ? r.default : r;
        var n = {
            s: "ein paar Sekunden",
            m: ["eine Minute", "einer Minute"],
            mm: "%d Minuten",
            h: ["eine Stunde", "einer Stunde"],
            hh: "%d Stunden",
            d: ["ein Tag", "einem Tag"],
            dd: ["%d Tage", "%d Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: ["%d Monate", "%d Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: ["%d Jahre", "%d Jahren"]
        };

        function o(s, a, u) {
            var l = n[u];
            return Array.isArray(l) && (l = l[a ? 0 : 1]), l.replace("%d", s)
        }
        var i = {
            name: "de",
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan_Feb_März_Apr_Mai_Juni_Juli_Aug_Sept_Okt_Nov_Dez".split("_"),
            ordinal: function(s) {
                return s + "."
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
                LTS: "HH:mm:ss",
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: o,
                m: o,
                mm: o,
                h: o,
                hh: o,
                d: o,
                dd: o,
                M: o,
                MM: o,
                y: o,
                yy: o
            }
        };
        return r.locale(i, null, !0), i
    })
})(us);
var cs = us.exports;
const ls = F(cs),
    Sl = Y({
        __proto__: null,
        default: ls
    }, [cs]);
var _s = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n(De)
    })(W, function(r) {
        r = r && r.hasOwnProperty("default") ? r.default : r;
        var n = {
            name: "es",
            monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
            weekStart: 1,
            formats: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            ordinal: function(o) {
                return o + "º"
            }
        };
        return r.locale(n, null, !0), n
    })
})(_s);
var ds = _s.exports;
const fs = F(ds),
    gl = Y({
        __proto__: null,
        default: fs
    }, [ds]);
var Es = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n(De)
    })(W, function(r) {
        r = r && r.hasOwnProperty("default") ? r.default : r;
        var n = {
            name: "it",
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            weekStart: 1,
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            relativeTime: {
                future: "tra %s",
                past: "%s fa",
                s: "qualche secondo",
                m: "un minuto",
                mm: "%d minuti",
                h: "un' ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            ordinal: function(o) {
                return o + "º"
            }
        };
        return r.locale(n, null, !0), n
    })
})(Es);
var ps = Es.exports;
const ms = F(ps),
    hl = Y({
        __proto__: null,
        default: ms
    }, [ps]);
var Ss = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n(De)
    })(W, function(r) {
        r = r && r.hasOwnProperty("default") ? r.default : r;
        var n = {
            name: "pt",
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sab".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            ordinal: function(o) {
                return o + "º"
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "alguns segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            }
        };
        return r.locale(n, null, !0), n
    })
})(Ss);
var gs = Ss.exports;
const hs = F(gs),
    Cl = Y({
        __proto__: null,
        default: hs
    }, [gs]);
var Cs = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n(De)
    })(W, function(r) {
        r = r && r.hasOwnProperty("default") ? r.default : r;
        var n = {
            name: "fr",
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekStart: 1,
            yearStart: 4,
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinal: function(o) {
                return "" + o + (o === 1 ? "er" : "")
            }
        };
        return r.locale(n, null, !0), n
    })
})(Cs);
var Is = Cs.exports;
const Ts = F(Is),
    Il = Y({
        __proto__: null,
        default: Ts
    }, [Is]);
var St = {
    exports: {}
};
const As = Mt || Ei;
St.exports = As;
As.extend(Si || rl).extend(Ci || nl).extend(Ai || ol).extend(bi || il).extend(Ni || sl).extend(rr || kn).extend(Ui || al).extend(Bi || ul).extend(Fi || cl).extend(Wi || ll).extend(Yi || _l).extend(zi || dl).extend(Xi || fl).extend(ts || El).extend(os || pl).extend(as || ml).extend(rr || kn).extend(Tl);

function Tl(e, t, r) {
    t.prototype.standardDateOrTime = function({
        long: A = !1
    } = {}) {
        if (this.add(1, "day").isBeforeNow()) return this.standardDate(); {
            const b = this.locale(),
                {
                    iString: M
                } = I18N.i(b),
                {
                    secondsToLargestUnit: y
                } = Je,
                R = r().diff(this, "seconds");
            return R < 60 ? M("just now") : y(R, {
                long: A,
                language: b,
                appendAgo: !0
            })
        }
    }, t.prototype.startOfLastWeekday = function() {
        return (this.day() > 1 ? this.subtract(1, "day") : this.subtract(this.day() + 2, "day")).utc().startOf("day")
    }, t.prototype.readerDateTime = function() {
        const A = this.locale(),
            {
                iString: b
            } = I18N.i(A),
            M = this.diff(r(), "day");
        let y;
        return M === 0 ? y = this.format("h:mm a") : M === -1 ? y = b("Yesterday") : M > -7 ? y = this.standardDate() : y = this.standardDate(), y
    }, t.prototype.standardDate = function({
        full: A = !1
    } = {}) {
        return !A && this.isSame(r(), "year") ? this.format("MMM D") : this.format("MMM D, YYYY")
    }, t.prototype.standardTime = function() {
        return this.format("MM-DD-YYYY") === r().format("MM-DD-YYYY") ? this.format("h:mm a") : this.standardDate()
    }, t.prototype.standardTimeWithSeconds = function() {
        return this.format("MM-DD-YYYY") === r().format("MM-DD-YYYY") ? this.format("h:mm:ss a") : this.standardDate()
    }, t.prototype.standardDatetime = function() {
        return this.format("MMM D [at] h:mm a")
    }, t.prototype.standardDatetimeWithYear = function() {
        const A = r().year();
        return this.year() != A ? this.format("MMM D, YYYY [at] h:mm a") : this.format("MMM D [at] h:mm a")
    }, t.prototype.min = function(...A) {
        let b = this;
        for (let M of A) M = r(M), b.isAfter(M) && (b = M);
        return b
    }, t.prototype.max = function(...A) {
        let b = this;
        for (let M of A) M = r(M), b.isBefore(M) && (b = M);
        return b
    }, t.prototype.minNow = function() {
        return this.min(r())
    }, t.prototype.maxNow = function() {
        return this.max(r())
    }, t.prototype.isBeforeNow = function(A) {
        return this.isBefore(r(), A)
    }, t.prototype.isAfterNow = function(A) {
        return this.isAfter(r(), A)
    }, t.prototype.isSameNow = function(A) {
        return this.isSame(r(), A)
    }, t.prototype.chatTime = function() {
        const A = r(),
            b = A.diff(this, "hour"),
            M = this.diff(A.startOf("day"), "day"),
            y = this.diff(A.startOf("year"), "year");
        let R;
        return M === 0 ? R = b >= 24 ? this.format("M/D h:mm a") : this.format("h:mm a") : y === 0 ? R = this.format("M/D") : R = this.format("M/D/YY"), R
    };
    const n = r.en,
        o = K(N({}, n), {
            relativeTime: {
                future: "in %s",
                past: "%s",
                s: "just now",
                m: "1m",
                mm: "%dm",
                h: "1h",
                hh: "%dh",
                d: "1d",
                dd: "%dd",
                M: "1mo",
                MM: "%dmo",
                y: "1y",
                yy: "%dy"
            }
        }),
        i = ls || Sl,
        s = K(N({}, i), {
            relativeTime: {
                future: "an %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: "einer Minute",
                mm: "%d Minuten",
                h: "einer Stunde",
                hh: "%d Stunden",
                d: "einem Tag",
                dd: "%d Tagen",
                M: "einem Monat",
                MM: "%d Monaten",
                y: "einem Jahr",
                yy: "%d Jahren"
            }
        }),
        a = K(N({}, i), {
            relativeTime: {
                future: "an %s",
                past: "%s",
                s: "soeben",
                m: "1M",
                mm: "%dMin",
                h: "1S",
                hh: "%dS",
                d: "1T",
                dd: "%dT",
                M: "1Mon",
                MM: "%dMon",
                y: "1J",
                yy: "%dJ"
            }
        }),
        u = fs || gl,
        l = K(N({}, u), {
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "en este momento",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            }
        }),
        c = K(N({}, u), {
            relativeTime: {
                future: "en %s",
                past: "%s",
                s: "en este momento",
                m: "1M",
                mm: "%dMin",
                h: "1H",
                hh: "%dH",
                d: "1D",
                dd: "%dD",
                M: "1Mes",
                MM: "%dMes",
                y: "1A",
                yy: "%dA"
            }
        }),
        m = ms || hl,
        d = K(N({}, m), {
            relativeTime: {
                future: "tra %s",
                past: "%s",
                s: "proprio adesso",
                m: "1 minuto",
                mm: "%d minuti",
                h: "1 ora",
                hh: "%d ore",
                d: "1 giorno",
                dd: "%d giorni",
                M: "1 mese",
                MM: "%d mesi",
                y: "1 anno",
                yy: "%d anni"
            }
        }),
        E = K(N({}, m), {
            relativeTime: {
                future: "tra %s",
                past: "%s",
                s: "proprio adesso",
                m: "1M",
                mm: "%dM",
                h: "1O",
                hh: "%dO",
                d: "1G",
                dd: "%dG",
                M: "1M",
                MM: "%dM",
                y: "1A",
                yy: "%dA"
            }
        }),
        C = hs || Cl,
        _ = K(N({}, C), {
            relativeTime: {
                future: "em %s",
                past: "%s",
                s: "agora há pouco",
                m: "1 minuto",
                mm: "%d minutos",
                h: "1 hora",
                hh: "%d horas",
                d: "1 dia",
                dd: "%d dias",
                M: "1 mês",
                MM: "%d meses",
                y: "1 ano",
                yy: "%d anos"
            }
        }),
        f = K(N({}, C), {
            relativeTime: {
                future: "em %s",
                past: "%s",
                s: "agora há pouco",
                m: "1M",
                mm: "%dM",
                h: "1H",
                hh: "%dH",
                d: "1D",
                dd: "%dD",
                M: "1M",
                MM: "%dM",
                y: "1A",
                yy: "%dA"
            }
        }),
        S = Ts || Il,
        g = K(N({}, S), {
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "tout à l'heure",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "une année",
                yy: "%d années"
            }
        }),
        P = K(N({}, S), {
            relativeTime: {
                future: "dans %s",
                past: "%s",
                s: "tout à l'heure",
                m: "1M",
                mm: "%dMin",
                h: "1H",
                hh: "%dH",
                d: "1J",
                dd: "%dJ",
                M: "1Mois",
                MM: "%dMois",
                y: "1A",
                yy: "%dA"
            }
        }),
        L = r.locale();
    r.locale("enshort", o), r.locale("de", s), r.locale("deshort", a), r.locale("es", l), r.locale("esshort", c), r.locale("fr", g), r.locale("frshort", P), r.locale("it", d), r.locale("itshort", E), r.locale("pt", _), r.locale("ptshort", f), r.locale("pt-br", _), r.locale("ptbrshort", f), r.locale(L), t.prototype.fromNowShort = function() {
        switch (this.locale()) {
            case "de":
                return this.locale("deshort").fromNow();
            case "es":
                return this.locale("esshort").fromNow();
            case "fr":
                return this.locale("frshort").fromNow();
            case "it":
                return this.locale("itshort").fromNow();
            case "pt":
                return this.locale("ptshort").fromNow();
            case "pt-br":
                return this.locale("ptbrshort").fromNow();
            default:
                return n ? this.locale("enshort").fromNow() : this.fromNow()
        }
    }
}
const Xe = (St.exports == null ? {} : St.exports).default || St.exports,
    Lr = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Xe
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Al = ["founding", "only_paid", "everyone", "only_free"],
    Rl = ["founding", "only_paid", "everyone"],
    Ol = ["founding", "only_paid"],
    bl = ["founding"];

function Dl() {
    return [...Al]
}

function Pl() {
    return [...Rl]
}

function Rs() {
    return [...Ol]
}

function Os() {
    return [...bl]
}

function Nl(e) {
    return Rs().includes(e)
}

function bs(e) {
    return Os().includes(e)
}

function Ll(e, t) {
    if (!t || (e == null ? void 0 : e.subscription_publication_id) === t) {
        if (e != null && e.is_founding || e != null && e.is_contributor) return "founding";
        if (e != null && e.is_subscribed) return "paid"
    }
    return "free"
}

function Qe(e) {
    switch (e) {
        case "founding":
            return ["founding"];
        case "only_paid":
            return ["paid", "founding"];
        case "only_free":
            return ["free"];
        case "everyone":
            return ["free", "paid", "founding"];
        default:
            throw new Error(`Unknown audience: ${e}`)
    }
}

function Ds(e, t, r) {
    if (!t) return !1;
    if (!t.audience) throw new Error("Post has no audience");
    const n = Ll(e, t.publication_id);
    return Qe(t.audience).includes(n)
}

function Ps(e, t) {
    if (!t || (e == null ? void 0 : e.publication_id) === t) {
        if ((e == null ? void 0 : e.membership_state) === "subscribed" && (e != null && e.is_founding)) return "founding";
        if ((e == null ? void 0 : e.membership_state) === "subscribed") return "paid"
    }
    return "free"
}

function Ml(e, t) {
    if (!t) return !1;
    if (!t.audience) throw new Error("Post has no audience");
    const r = Ps(e, t.publication_id);
    return Qe(t.audience).includes(r)
}

function yl(e, t) {
    const r = Ps(e);
    return Qe(t).includes(r)
}

function wl(e) {
    return (e == null ? void 0 : e.role) === "admin" || (e == null ? void 0 : e.role) === "contributor" || (e == null ? void 0 : e.membership_state) === "subscribed" && (e != null && e.is_founding) ? "founding" : (e == null ? void 0 : e.membership_state) === "subscribed" ? "paid" : "free"
}

function Ns(e, t) {
    if (!t) return !1;
    if (!t.audience) throw new Error("Post has no audience");
    const r = wl(e);
    return Qe(t.audience).includes(r)
}

function Ul(e, t) {
    return !!(t && Ns(e == null ? void 0 : e[t.publication_id], t))
}

function vl(e, t, {
    audienceOverride: r
}) {
    if (!t) return !1;
    if (!t.audience && !r) throw new Error("Post has no audience");
    const n = e;
    return Qe(r != null ? r : t.audience).includes(n)
}

function Ls(e, t) {
    var i;
    const r = (i = t == null ? void 0 : t.publishedBylines) == null ? void 0 : i[0];
    if (r) return r;
    const n = e.contributors.find(u => u.owner);
    if (n) {
        const s = n,
            {
                user_id: u
            } = s,
            l = Ce(s, ["user_id"]);
        return N({
            id: u
        }, l)
    }
    const o = e.contributors.find(u => ["admin", "contributor"].includes(u.role));
    if (o) {
        const a = o,
            {
                user_id: u
            } = a,
            l = Ce(a, ["user_id"]);
        return N({
            id: u
        }, l)
    }
    return {
        id: e.author_id,
        name: e.author_name,
        photo_url: e.author_photo_url,
        bio: e.author_bio
    }
}

function Ms(e) {
    var t, r, n, o, i, s, a, u, l, c, m, d, E, C, _;
    return {
        id: (n = (r = (t = e.user) == null ? void 0 : t.id) != null ? r : e.user_id) != null ? n : -1,
        name: (s = (i = (o = e.user) == null ? void 0 : o.name) != null ? i : e.name) != null ? s : "",
        handle: (u = (a = e.user) == null ? void 0 : a.handle) != null ? u : e.handle,
        photo_url: (c = (l = e.user) == null ? void 0 : l.photo_url) != null ? c : e.photo_url,
        bestseller_tier: (E = (d = (m = e.user) == null ? void 0 : m.bestseller_tier) != null ? d : e.user_bestseller_tier) != null ? E : null,
        primary_publication: (_ = (C = e.user) == null ? void 0 : C.primary_publication) != null ? _ : e.user_primary_publication
    }
}

function kl(e) {
    return !e.cover_image || /12634ced-0eb6-4238-a94a-70ab242c5ad8/.test(e.cover_image) || /fa15c776-f514-42fe-8ee0-4c94148a0a8a/.test(e.cover_image) || /8826edac-0d50-4ba0-b861-f3ed9336878b/.test(e.cover_image) || /49be2356-6491-4a6f-84a5-15e99d23b6d1/.test(e.cover_image) ? null : e.cover_image
}

function Bl({
    post: e
}) {
    var t, r;
    return (r = (t = e.podcastFields) == null ? void 0 : t.free_podcast_url) != null ? r : null
}

function $l({
    post: e
}) {
    var t, r, n, o, i, s, a;
    return (a = (s = (o = (t = e.videoUpload) == null ? void 0 : t.duration) != null ? o : (n = (r = e.podcastUpload) == null ? void 0 : r.full_podcast_info) == null ? void 0 : n.duration) != null ? s : (i = e.podcastUpload) == null ? void 0 : i.duration) != null ? a : 0
}
const ys = Object.freeze(Object.defineProperty({
    __proto__: null,
    getAllAudiences: Dl,
    getAudiencesForPublicListing: Pl,
    getCommentAuthor: Ms,
    getCoverImageUrl: kl,
    getDurationForPostPreview: $l,
    getFoundingAudiences: Os,
    getFreePodcastUrl: Bl,
    getPaidAudiences: Rs,
    getPostAuthor: Ls,
    isFoundingAudience: bs,
    isPaidAudience: Nl,
    previewSubHasFullAccessToPost: vl,
    pubRoleHasFullAccessToPost: Ns,
    pubRolesHaveFullAccessToPost: Ul,
    subHasFullAccessToPost: Ml,
    subHasFullAccessToPostAudience: yl,
    userHasFullAccessToPost: Ds
}, Symbol.toStringTag, {
    value: "Module"
}));
var we = 1e3,
    Ue = we * 60,
    ve = Ue * 60,
    Oe = ve * 24,
    xl = Oe * 7,
    Fl = Oe * 365.25,
    Gl = function(e, t) {
        t = t || {};
        var r = typeof e;
        if (r === "string" && e.length > 0) return Hl(e);
        if (r === "number" && isFinite(e)) return t.long ? Kl(e) : Wl(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    };

function Hl(e) {
    if (e = String(e), !(e.length > 100)) {
        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
        if (t) {
            var r = parseFloat(t[1]),
                n = (t[2] || "ms").toLowerCase();
            switch (n) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return r * Fl;
                case "weeks":
                case "week":
                case "w":
                    return r * xl;
                case "days":
                case "day":
                case "d":
                    return r * Oe;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return r * ve;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return r * Ue;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return r * we;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return r;
                default:
                    return
            }
        }
    }
}

function Wl(e) {
    var t = Math.abs(e);
    return t >= Oe ? Math.round(e / Oe) + "d" : t >= ve ? Math.round(e / ve) + "h" : t >= Ue ? Math.round(e / Ue) + "m" : t >= we ? Math.round(e / we) + "s" : e + "ms"
}

function Kl(e) {
    var t = Math.abs(e);
    return t >= Oe ? ft(e, t, Oe, "day") : t >= ve ? ft(e, t, ve, "hour") : t >= Ue ? ft(e, t, Ue, "minute") : t >= we ? ft(e, t, we, "second") : e + " ms"
}

function ft(e, t, r, n) {
    var o = t >= r * 1.5;
    return Math.round(e / r) + " " + n + (o ? "s" : "")
}
const Vl = F(Gl),
    te = {
        PLAY_ON_SUBSTACK: "%%play_on_substack_url%%",
        PLAY_ON_SUBSTACK_UFI: "%%play_on_substack_ufi_url%%",
        POST_URL: "%%post_url%%",
        POST_TITLE_URL: "%%post_title_url%%",
        NAME: "%%name%%",
        FIRST_NAME: "%%first_name%%",
        FIRST_NAME_NO_SPACE: "%%first_name_no_space%%",
        SUBSCRIBE_URL: "%%subscribe_url%%",
        UNSUBSCRIBE_URL: "%%unsubscribe_url%%",
        ONE_CLICK_UNSUBSCRIBE_URL: "%%one_click_unsubscribe_url%%",
        CHECKOUT_URL: "%%checkout_url%%",
        FOUNDING_CHECKOUT_URL: "%%founding_checkout_url%%",
        ACTIVITY_PAGE_URL: "%%activity_page_url%%",
        ACCOUNT_URL: "%%account_url%%",
        ARCHIVE_URL: "%%archive_url%%",
        PUBLICATION_NAME: "%%publication_name%%",
        PUBLICATION_HERO_TEXT: "%%publication_hero_text%%",
        AUTHOR_NAME: "%%author_name%%",
        AUTHOR_FIRST_NAME: "%%author_first_name%%",
        AUTHOR_BIO: "%%author_bio%%",
        AUTHOR_PHOTO_URL: "%%author_photo_url%%",
        SHARE_URL: "%%share_url%%",
        SHARE_PUB_URL: "%%share_pub_url%%",
        PODCAST_SETUP_URL: "%%podcast_setup_url%%",
        PERSONAL_PODCAST_SETUP_URL: "%%personal_podcast_setup_url%%",
        ALL_PODCASTS_SETUP_URL: "%%all_podcasts_setup_url%%",
        HOME_LINK: "%%home_link%%",
        THREAD_URL: "%%thread_url%%",
        CHAT_URL: "%%chat_url%%",
        MEETINGS_URL: "%%meetings_url%%",
        DASHBOARD_URL: "%%dashboard_url%%",
        CONTINUE_URL: "%%continue_url%%",
        LEADERBOARD_URL: "%%leaderboard_url%%",
        SURVEY_TOKEN: "%%survey_token%%",
        SURVEY_URL_PREFIX: "%%survey_url_prefix%%",
        SURVEY_ID: "%%survey_id%%",
        PAID_SUBSCRIPTION_BENEFITS_1: "%%paid_subscription_benefits_1%%",
        PAID_SUBSCRIPTION_BENEFITS_2: "%%paid_subscription_benefits_2%%",
        PAID_SUBSCRIPTION_BENEFITS_3: "%%paid_subscription_benefits_3%%",
        PAID_OR_FOUNDING_TIER_NAME: "%%paid_or_founding_tier_name%%",
        PUBLICATION_URL: "%%publication_url%%",
        MAGIC_UNLINK_URL: "%%magic_unlink_url%%",
        TWITTER_SCREEN_NAME: "%%twitter_screen_name%%",
        REFERRAL_URL: "%%referral_url%%",
        PRINTED_REFERRAL_URL: "%%printed_referral_url%%",
        COMMENTS_URL: "%%comments_url%%",
        HALF_MAGIC_COMMENTS_URL: "%%half_magic_comments_url%%",
        MAGIC_AMP_COMMENTS_URL: "%%magic_amp_comments_url%%",
        POST_APP_LINK_URL: "%%post_app_link_url%%",
        POST_APP_LINK_PLAY_URL: "%%post_app_link_play_url%%",
        SUBSCRIPTION_TYPE: "%%subscription_type%%",
        SUBSCRIPTION_DAYS_LEFT: "%%subscription_days_left%%",
        SUBSCRIPTION_DAYS_LEFT_LABEL: "%%subscription_days_left_label%%",
        SUBSCRIPTION_EXPIRY_DATE: "%%subscription_expiry_date%%",
        REACTION_URL: "%%reaction_url%%",
        HALF_POST_URL: "%%half_post_url%%",
        RELATED_PUB_URL: "%%related_pub_url%%",
        RELATED_PUB_DOMAIN: "%%related_pub_domain%%",
        REPLY_TO_AUTHOR: "%%reply_to_author%%",
        REPLY_TO_AUTHOR_PLUS: "%%reply_to_author_plus%%",
        REPLY_TO_FORUM: "%%reply_to_forum%%",
        REPLY_TO_FORUM_PLUS: "%%reply_to_forum_plus%%",
        SAVE_POST_URL: "%%save_post_url%%",
        RESTACK_URL: "%%restack_url%%",
        RESTACK_COMMENT_URL: "%%restack_comment_url%%",
        POST_UNSUBSCRIBE_URL: "%%post_unsubscribe_url%%",
        COMMENT_URL: "%%comment_url%%",
        COMMENTER_FROM_NAME: "%%commenter_from_name%%",
        COMMENTER_NAME: "%%commenter_name%%",
        COMMENT_REPLY_URL: "%%comment_reply_url%%",
        PARENT_COMMENT_URL: "%%parent_comment_url%%",
        REACTOR_FROM_NAMES: "%%reactor_from_names%%",
        REACTOR_NAMES: "%%reactor_names%%",
        RENEWAL_URL: "%%renewal_url%%",
        NUM_REFERRALS_REQUIRED: "%%num_referrals_required%%",
        REWARD_DESCRIPTION: "%%reward_description%%",
        FILE_DOWNLOAD_TOKEN: "%%file_download_token%%",
        COUPON_URL: "%%coupon_url%%",
        START_WRITING_URL: "%%start_writing_url%%",
        PREACT_COMPAT_HTML_COMMENT_OPEN: "<x_preact_compatible_html_comment_x>",
        PREACT_COMPAT_HTML_COMMENT_CLOSE: "</x_preact_compatible_html_comment_x>",
        USER_ID: "%%user_id%%",
        USER_ID_B36: "%%user_id_b36%%",
        USER_ID_JWT: "%%user_id_jwt%%",
        FIRST_NOTE_EMBED: "%%first_note_embed%%",
        FOLLOW_PROFILE_URL: "%%follow_profile_url%%",
        FOLLOW_POST_URL: "%%follow_post_url%%",
        CONTINUE_READING_URL: "%%continue_reading_url%%"
    },
    Yl = {
        test1: "SubstackInc",
        badnews: "ryangrim",
        dmortberg: "danielortberg",
        offthechain: "APompliano",
        on: "SubstackInc",
        petition: "petition",
        popularinformation: "JuddLegum",
        shane: "shanesnow",
        signalproblems: "A_W_Gordon",
        sinocism: "niubi",
        taibbi: "mtaibbi",
        thefirstand15th: "tressiemcphd",
        thenewsletter: "jbouie",
        numlock: "WaltHickey"
    };
var gt = (e => (e.comments_disabled = "comments_disabled", e.free_subscription_required = "free_subscription_required", e.paid_subscription_required = "paid_subscription_required", e.founding_subscription_required = "founding_subscription_required", e))(gt || {});
const bT = 5 * 60,
    DT = 1152,
    PT = 640;

function jl(e) {
    return !["team", "the"].includes(e.toLowerCase())
}

function ws(e, {
    prependSpace: t = !1
} = {}) {
    if (!e) return "";
    const r = e.trim().split(/\s+/g)[0];
    return (t ? " " : "") + (jl(r) ? r : e.trim())
}

function Jl(e) {
    if (e) {
        if (ws(e) === e.trim()) return
    } else return "";
    return e.trim().split(/\s+/g).slice(1).slice(-1)[0]
}
const Us = Yl,
    zl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjQAAAC0BAMAAABxiqvBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURd/n60dwTN/n7N/n7ODn69/n6N/n69/f6t/n6uHp7eLo7t/f3+Ho7QTAsUwAAAAMdFJOU4AATnVkIUAQN+W/CFiRL14AAALCSURBVHja7dy9TgJBFIbhAwtCYsOosBYWGDT+VGqMFjZQGKOVJBaWGivoiJWl8Q6M0cbKGHouwdLEi7JS92eGNWZcdpn3q7eYPJmdc2ZmQVT/+YPE86qk9jhQJJ6Nghwjo43/KC8o6NOXNxD0uYHGlCVooIEGGmiggQYaaKCBhkADDTQp05yvbMnueheaKE29JSIi4q1CE5Fpy1cOoQnG/5ERWYMmkLuAjHi30HxnTkKZgeY7zTCNLEOjnzQixcjjV5JidrJEcxEbXnjazEmqucwOzWJ8dNXQ0/Pp0mxnh+Y6PjpvEHy6li5NITs0Tc3wOtAopeq64ZUn+EJ1MkOzoBteKfh0w9Vl+FQ7vtAOvJWmzF52indTO0Bnu74gzVYGK2g2aOr6aV2GRtfwxZs+N2kMu4AiNPraHanejtIY+jkPGuMuABpooGGtoUJNsq+Bhm6YPRQ779TPayzdQ5UGOaNJPuWzdg91kDOa5LNha8fm1ZzRJN8o1FylUe2kpcZdmsTbS2svVDlvNIl33tbuofbzRqMp35FbspajxfsX39e42vIpvsoaQ9Ng0pho+ALUTOMHX6kjBU0gfG1upOE3CmYaftkyhoZAAw000EADDTTQQAMNNCBAAw000EADDTTQQAMNMdOciZMpjhJpfHE0nUSahqs0s9CYUoEGmn94oZxdhpcp3qZ/KxvR8tENQwMNNNBAAw000BBooIEGGmigyRvN1B9led0/0jhwAFr+I40Dx+ZFaKCBZvI0DizDFYq37eJNoIEGGmiggQYaaKCBhkADDTTQQAMNNLmnsXgA6l1OFY3VY/PqVNFYvWzxoIEGGnspsQybMkPxdqN4E2iggQYaaKCBBhpooCHQQAMNNNBAAw000EADDTTQQAMNNNBAkzOaJxBMNEMQ9NmU3gAFXfwHqd3DoJPpFUSdfJB43ofqE56LnR5mRT/HAAAAAElFTkSuQmCC",
    ql = [21267];

function Zl(e) {
    if (e == null) throw new Ur(`Expected value to be defined, but received ${e}`)
}

function Xl(e) {
    if (!(e instanceof Error)) throw new Ur(`Expected value to be an Error, but received ${e}`)
}
const Mr = "…",
    vs = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    Ql = ["CA", "AU", "HK", "NZ"],
    e_ = 350 * 1024 * 1024,
    t_ = 20 * 1024 * 1024 * 1024,
    r_ = 50 * 1024 * 1024,
    n_ = 700 * 1024 * 1024,
    ks = 1,
    Bs = 46438,
    $s = 86696,
    xs = 81318,
    Fs = 87805,
    Gs = 508885,
    Hs = 737237,
    Ws = 1014268,
    Ks = 1056696,
    o_ = [ks, Bs, $s, xs, Fs, Gs, Hs, Ws, Ks],
    Vs = 81309935,
    Ys = 41856304,
    i_ = [Vs, Ys],
    s_ = 16,
    a_ = 45,
    u_ = 30,
    c_ = 2 / 24,
    l_ = 1e3,
    __ = 356,
    d_ = 256,
    f_ = 6,
    E_ = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    p_ = "/img/missing-image.png",
    m_ = 455,
    S_ = 728,
    g_ = 3,
    yr = 2147483647,
    h_ = yr + 1,
    C_ = 25e4,
    I_ = ["illegal", "private_information", "general", "spam", "hate", "impersonation", "plagiarism", "porn"].sort();

function wr() {
    return "substack-post-media"
}

function T_() {
    return wr() === "substack-post-media" ? "substack-copyrighted-media" : "substack-copyrighted-media-staging"
}
const A_ = ["cdn", "cloudinary", "delivery", "jobs", "mailgun", "mail", "support", "www", "callback", "api", "admin", "reader", "sublink", "random", "your", "dashboard", "open"],
    R_ = ["In what city or town did your parents meet?", "What was your first teacher's last name?", "What is your earliest memory?", "What was the make and model of your first car?", "What was the first concert you attended?", "Where did you go on your first date?", "What was your first favorite band?", "What was your first computer or smartphone?", "What is your least favorite color?", "What was the first video game you beat?", "Who was your favorite artist, musician, or celebrity when you were a teenager?"],
    O_ = {
        everyone: "public",
        only_free: "free-only",
        only_paid: "subscribers-only",
        founding: "founding-only"
    },
    b_ = {
        everyone: "public",
        only_free: "free-only",
        only_paid: "subscriber's",
        founding: "subscriber's"
    },
    D_ = new Date("2020-01-16"),
    js = 1,
    Js = {
        Arts: ["Books", "Design", "Fashion & Beauty", "Food", "Performing Arts", "Visual Arts"],
        Business: ["Careers", "Entrepreneurship", "Investing", "Management", "Marketing", "Non-Profit"],
        Comedy: ["Comedy Interviews", "Improv", "Stand-Up"],
        Education: ["Courses", "How To", "Language Learning", "Self-Improvement"],
        Fiction: ["Comedy Fiction", "Drama", "Science Fiction"],
        Government: [],
        History: [],
        "Health & Fitness": ["Alternative Health", "Fitness", "Medicine", "Mental Health", "Nutrition", "Sexuality"],
        "Kids & Family": ["Education for Kids", "Parenting", "Pets & Animals", "Stories for Kids"],
        Leisure: ["Animation & Manga", "Automotive", "Aviation", "Crafts", "Games", "Hobbies", "Home & Garden", "Video Games"],
        Music: ["Music Commentary", "Music History", "Music Interviews"],
        News: ["Business News", "Daily News", "Entertainment News", "News Commentary", "Politics", "Sports News", "Tech News"],
        "Religion & Spirituality": ["Buddhism", "Christianity", "Hinduism", "Islam", "Judaism", "Religion", "Spirituality"],
        Science: ["Astronomy", "Chemistry", "Earth Sciences", "Life Sciences", "Mathematics", "Natural Sciences", "Nature", "Physics", "Social Sciences"],
        "Society & Culture": ["Documentary", "Personal Journals", "Philosophy", "Places & Travel", "Relationships"],
        Sports: ["Baseball", "Basketball", "Cricket", "Fantasy Sports", "Football", "Golf", "Hockey", "Rugby", "Running", "Soccer", "Swimming", "Tennis", "Volleyball", "Wilderness", "Wrestling"],
        Technology: [],
        "True Crime": [],
        "TV & Film": ["After Shows", "Film History", "Film Interviews", "Film Reviews", "TV Reviews"]
    },
    P_ = {
        Arts: ["Books", "Design", "Fashion & Beauty", "Food", "Literature", "Performing Arts", "Visual Arts"],
        Business: ["Business News", "Careers", "Investing", "Management & Marketing", "Shopping"],
        Comedy: [],
        Education: ["Educational Technology", "Higher Education", "K-12", "Language Courses", "Training"],
        "Games & Hobbies": ["Automotive", "Aviation", "Hobbies", "Other Games", "Video Games"],
        "Government & Organizations": ["Local", "National", "Non-Profit", "Regional"],
        Health: ["Alternative Health", "Fitness & Nutrition", "Self-Help", "Sexuality"],
        "Kids & Family": [],
        Music: [],
        "News & Politics": [],
        "Religion & Spirituality": ["Buddhism", "Christianity", "Hinduism", "Islam", "Judaism", "Other", "Spirituality"],
        "Science & Medicine": ["Medicine", "Natural Sciences", "Social Sciences"],
        "Society & Culture": ["History", "Personal Journals", "Philosophy", "Places & Travel"],
        "Sports & Recreation": ["Amateur", "College & High School", "Outdoor", "Professional"],
        Technology: ["Gadgets", "Tech News", "Podcasting", "Software How-To"],
        "TV & Film": []
    },
    zs = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    N_ = [{
        name: "eu_vat",
        description: "European VAT number"
    }, {
        name: "au_abn",
        description: "Australian Business Number (AU ABN)"
    }, {
        name: "au_arn",
        description: "Australian Taxation Office Reference Number"
    }, {
        name: "br_cnpj",
        description: "Brazilian CNPJ number"
    }, {
        name: "br_cpf",
        description: "Brazilian CPF number"
    }, {
        name: "bg_uic",
        description: "Bulgaria Unified Identification Code"
    }, {
        name: "ca_bn",
        description: "Canadian BN"
    }, {
        name: "ca_gst_hst",
        description: "Canadian GST/HST number"
    }, {
        name: "ca_pst_bc",
        description: "Canadian PST number (British Columbia)"
    }, {
        name: "ca_pst_mb",
        description: "Canadian PST number (Manitoba)"
    }, {
        name: "ca_pst_sk",
        description: "Canadian PST number (Saskatchewan)"
    }, {
        name: "ca_qst",
        description: "Canadian QST number (Québec)"
    }, {
        name: "cl_tin",
        description: "Chilean TIN"
    }, {
        name: "eu_oss_vat",
        description: "European One Stop Shop VAT number for non-Union scheme"
    }, {
        name: "ge_va",
        description: "Georgian VAT"
    }, {
        name: "hk_br",
        description: "Hong Kong BR number"
    }, {
        name: "hu_tin",
        description: "Hungary tax number (adószám)"
    }, {
        name: "is_vat",
        description: "Icelandic VAT"
    }, {
        name: "in_gst",
        description: "Indian GST number"
    }, {
        name: "id_npwp",
        description: "Indonesian NPWP number"
    }, {
        name: "il_vat",
        description: "Israel VAT"
    }, {
        name: "jp_cn",
        description: "Japanese Corporate Number (*Hōjin Bangō*)"
    }, {
        name: "jp_rn",
        description: "Japanese Registered Foreign Businesses' Registration Number (*Tōroku Kokugai Jigyōsha no Tōroku Bangō*) "
    }, {
        name: "li_uid",
        description: "Liechtensteinian UID number"
    }, {
        name: "my_frp",
        description: "Malaysian FRP number"
    }, {
        name: "my_itn",
        description: "Malaysian ITN C"
    }, {
        name: "my_sst",
        description: "Malaysian SST number"
    }, {
        name: "mx_rfc",
        description: "Mexican RFC number"
    }, {
        name: "nz_gst",
        description: "New Zealand GST number"
    }, {
        name: "no_vat",
        description: "Norwegian VAT number"
    }, {
        name: "ru_inn",
        description: "Russian INN"
    }, {
        name: "ru_kpp",
        description: "Russian KPP"
    }, {
        name: "sa_vat",
        description: "Saudi Arabia VAT"
    }, {
        name: "sg_gst",
        description: "Singaporean GST"
    }, {
        name: "sg_uen",
        description: "Singaporean UEN"
    }, {
        name: "si_tin",
        description: "Slovenia tax number (davčna številka)"
    }, {
        name: "za_vat",
        description: "South African VAT number"
    }, {
        name: "kr_brn",
        description: "Korean BRN"
    }, {
        name: "es_cif",
        description: "Spanish CIF number"
    }, {
        name: "ch_vat",
        description: "Switzerland VAT number"
    }, {
        name: "tw_vat",
        description: "Taiwanese VAT"
    }, {
        name: "th_vat",
        description: "Thai VAT"
    }, {
        name: "ua_vat",
        description: "Ukrainian VAT"
    }, {
        name: "ae_trn",
        description: "United Arab Emirates TRN"
    }, {
        name: "gb_vat",
        description: "United Kingdom VAT number"
    }, {
        name: "us_ein",
        description: "United States EIN"
    }],
    L_ = ["#EA410B", "#FF0000", "#FD5353", "#FF6B00", "#FF9900", "#00C2FF", "#67BDFC", "#2096FF", "#0068EF", "#121BFA", "#6B26FF", "#786CFF", "#9D6FFF", "#B599F1", "#99A2F1", "#FF5CD7", "#FF81CD", "#EA82FF", "#A33ACB", "#6C0095", "#009B50", "#25BD65", "#2EE240", "#8AE1A2", "#45D800", "#9A6600", "#BAA049", "#E8B500", "#D10000"],
    M_ = {
        de: "German",
        es: "Spanish",
        fr: "French",
        it: "Italian",
        pt: "Portuguese",
        "pt-br": "Brazilian Portuguese"
    },
    y_ = ["ar", "cs", "de", "el", "en", "es", "fr", "hi", "hu", "id", "it", "ja", "ko", "la", "nl", "no", "pl", "pt", "ro", "ru", "sv", "th", "tr", "vi", "zh"],
    w_ = ["IN"],
    U_ = 60 * 60 * 24 * 7,
    v_ = .0064,
    nr = {
        therampart: {
            sectionNames: [],
            sectionIds: [62635]
        },
        thebulwark: {
            sectionNames: ["Bulwark Goes to Hollywood"],
            sectionIds: []
        }
    },
    qs = ({
        section: e,
        pub: t
    }) => {
        var r, n;
        return !!((r = nr[t.subdomain]) != null && r.sectionNames.includes(e.name) || (n = nr[t.subdomain]) != null && n.sectionIds.includes(e.id))
    };
class Ur extends Error {
    constructor(t, {
        status: r = 500,
        userVisible: n = !1,
        messageHtml: o = null,
        responseBody: i = null
    } = {}) {
        super(t), this.name = this.constructor.name, this.status = r, this.userVisible = !!i || n || !1, this.messageHtml = o, this.response = {
            body: i || (this.userVisible ? o ? {
                errors: [{
                    msg: t,
                    msgHTML: o
                }]
            } : {
                error: t
            } : {
                error: ""
            })
        }, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
    }
}
class k_ extends Error {
    constructor({
        status: t = 500,
        errType: r = "SERVER_ERROR",
        errMessage: n = "",
        pub: o = null
    }) {
        super(n), this.name = this.constructor.name, this.status = t, this.response = {
            body: {
                status: r,
                error: n
            }
        }, o && (this.response.body.publication = o), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
    }
}

function B_(e, {
    skipMultiContributorCheck: t = !1
} = {}) {
    var o, i, s, a;
    if (e.subdomain === "popularinformation") return "Judd Legum";
    if (e.subdomain === "whyisthisinteresting") return "Noah & Colin";
    if (e.subdomain === "informant") return "Nick Martin";
    if (e.subdomain === "colinmeloy") return "Colin Meloy";
    if (e.subdomain === "petition" || e.subdomain === "russiandissent") return null;
    if (e.subdomain === "mattlabash") return "Matt Labash";
    if (e.subdomain === "wmbrown") return "Matt Hranek";
    if (e.subdomain === "bigtechontrial") return "Matt Stoller";
    if (e.subdomain === "thegreenspoon") return "Greta and Fanny";
    if (!t && "contributors" in e && ((o = e.contributors) == null ? void 0 : o.length) > 1) return null;
    const r = e.name || e.subdomain,
        n = ["contributors" in e && ((s = (i = e.contributors) == null ? void 0 : i[0]) == null ? void 0 : s.name), "author_name" in e && e.author_name, e.email_from_name, (a = e == null ? void 0 : e.author) == null ? void 0 : a.name];
    for (let u of n)
        if (u && (u = u.split(/(,|\||\s-|-\s|\bfrom\b|\bat\b)/g)[0].trim(), u && !u.startsWith(r) && !r.startsWith(u) && !u.endsWith(r) && !r.endsWith(u))) return u;
    return null
}

function $_({
    pub: e,
    post: t
}) {
    var o;
    const r = (e == null ? void 0 : e.twitter_screen_name) || e && Us[e == null ? void 0 : e.subdomain];
    let n = (o = t == null ? void 0 : t.title) != null ? o : e == null ? void 0 : e.name;
    return e && !t && (n = `Subscribe to ${n}`), r && (!t || e && (!t.publishedBylines.length || t.publishedBylines.some(i => i.id === e.author_id))) && (n += `, by @${r}`), n
}

function x_(e, {
    now: t = !1,
    isFreeSubscribed: r = !1,
    isMobile: n = !1,
    isPledged: o = !1,
    pledgesEnabled: i = !1,
    language: s
} = {}) {
    if (!e) return "Subscribe";
    const {
        iString: a
    } = I18N.i(s || e.language);
    return Ta(e, () => r && e.plans && n && t ? a("Upgrade now") : r && e.plans && n && !t ? a("Upgrade") : r && e.plans && !n && t ? a("Upgrade to paid now") : r && e.plans && !n && !t ? a("Upgrade to paid") : a(r && i && !o && t ? "Pledge your support now" : r && i && !o && !t ? "Pledge your support" : t ? "Subscribe now" : "Subscribe"), u => (r && e.plans ? or(n ? u.upgrade : u.upgradeToPaid) : r && i && !o ? "Pledge your support" : or(Aa(e, "subscribe"))) + (t ? " now" : ""))
}

function F_({
    date: e,
    bylines: t,
    like_count: r,
    comment_count: n,
    language: o = "en"
}) {
    const {
        iPlural: i
    } = I18N.i(o), s = Xe || Lr, a = [];
    return a.push(s(e).locale(o).fromNow()), r && a.push(i("1 like", "%1 likes", r)), n && a.push(i("1 comment", "%1 comments", n)), t && t.length && a.push(Ut(t.map(u => u.name).filter(u => u !== null), o)), a.join(" · ")
}
const G_ = ["astralcodexten"];

function H_(e, t) {
    return e.custom_publication_theme_id ? !1 : !!(["astralcodexten", "company", "library", "on", "blog", "stories"].includes(e == null ? void 0 : e.subdomain) || (t == null ? void 0 : t.type) === "podcast" || (t == null ? void 0 : t.type) === "video")
}
const Bn = (e = "") => e.toUpperCase().replace(/^(THE|A|AN)\s+/, "");

function W_(e) {
    return e.sort((t, r) => {
        var i, s;
        if (!t) return 1;
        if (!r || t.membership_state === "subscribed" && r.membership_state !== "subscribed") return -1;
        if (r.membership_state === "subscribed" && t.membership_state !== "subscribed") return 1;
        const n = Bn((i = t.publication) == null ? void 0 : i.name),
            o = Bn((s = r.publication) == null ? void 0 : s.name);
        return n < o ? -1 : n > o ? 1 : 0
    })
}

function K_(e) {
    if (e.expiry && new Date(e.expiry) > new Date) switch (e.type) {
        case "gift":
            return "Gifted Subscription";
        case "comp":
            return "Comped Subscription";
        default:
            return "Paid Subscriber"
    } else return !e.email_disabled || e.email_settings && Object.values(e.email_settings || {}).some(t => t === "individual") ? "Free Subscriber" : e.digest_enabled || e.email_settings && Object.values(e.email_settings || {}).some(t => t === "digest") ? "Follows in Digests" : "Emails Disabled"
}

function V_({
    post: e,
    user: t
}) {
    return !!(e && t && t.has_publication && !t.is_admin && !t.is_contributor && e.slug !== "coming-soon")
}
const Y_ = "no-reply@substack.com";

function j_(e) {
    if (!e || typeof e != "string") return e;
    try {
        return encodeURIComponent(e), e
    } catch (t) {}
    return e.replace(/[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g, t => t.length > 1 ? t : " ")
}

function J_(e, t) {
    const r = new TextEncoder().encode(e);
    return r.length > t ? new TextDecoder().decode(r.slice(0, t)) : e
}

function Zs(e) {
    for (;;) try {
        return encodeURIComponent(e), e
    } catch (t) {
        e = e.substring(0, e.length - 1)
    }
}

function Xs(e, t, {
    words: r = null,
    ellipsis: n = Mr,
    extension: o = null
} = {}) {
    if (!e) return e;
    let i = !1;
    if (r) {
        const s = new RegExp(`^(\\w+\\W+){${r-1}}\\w+`).exec(e);
        s && (i = !0, e = s[0])
    }
    return t && e.length > t && (i = !0, e = e.substring(0, t - n.length)), i && (e = Zs(e), e += n, o && (e += o)), e
}

function z_(e, t, {
    ellipsis: r = Mr,
    quotationMarks: n = !1
} = {}) {
    if (!e) return e;
    n && (t -= 2);
    let o = e;
    if (e && e.length > t) {
        const i = e.split(/\s+/),
            s = [];
        let a = 0;
        for (; a <= t;) {
            const u = i.shift();
            if (!u || a + u.length > t) break;
            s.push(u), a += u.length + 1
        }
        o = yt(s.join(" "), r)
    }
    return n && (o.endsWith(" ") || o.startsWith(" ")) && (o = o.trim()), n ? `"${o}"` : o
}
const q_ = e => e.replace(/(\s)(\S+)$/, " $2"),
    Z_ = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]+$/g;

function yt(e, t = Mr) {
    return `${e.replace(Z_,"")}${t}`
}

function X_(e) {
    return /[!.?](?:\s+)?$/.test(e)
}
const Q_ = new Set([" ", "-"]);

function ed(e, {
    maxCharsPerLine: t = 55,
    maxLines: r = 2,
    preferWide: n = !1
} = {}) {
    if (e.length <= t) return [e];
    const o = t * r;
    if (e.length > o) {
        let l = o;
        for (; l >= 0 && e.charAt(l) !== " ";) l--;
        e = yt(e.slice(0, l))
    }
    const i = n ? t : Math.floor(e.length / r);
    let s = -1,
        a = 0;
    const u = [];
    for (; a + i < e.length - 1;) {
        for (a = a + i; a <= e.length - 1 && !Q_.has(e.charAt(a));) a++;
        const l = e.charAt(a) === "-";
        u.push(e.slice(s + 1, l ? a + 1 : a)), s = a
    }
    return a < e.length - 1 && u.push(e.slice(s + 1)), u
}
const td = e => /[A-Z]/.test(e),
    rd = e => /[\s-]/.test(e);

function Ot(e, t) {
    let r = 0;
    for (let n = 0; n < e.length; n += 1) {
        const o = e[n];
        td(o) ? r += t : r += 1
    }
    return r
}

function Qs(e, t, r) {
    const n = [];
    let o = 0,
        i = !1;
    for (let u = 0; u < e.length; u += 1) {
        const l = e[u];
        if (rd(l)) {
            i = !0;
            continue
        } else i && (n.push(e.slice(o, u)), o = u, i = !1)
    }
    if (o < e.length && n.push(e.slice(o)), !n.length) return "";
    const s = [n[0]];
    let a = Ot(n[0], t);
    for (const u of n.slice(1)) {
        const l = Ot(u, t);
        if (a += l, a <= r) s.push(u);
        else break
    }
    return s.join("")
}

function nd(e, {
    maxCostPerLine: t = 55,
    maxLines: r = 2,
    capitalCost: n = 1.2
} = {}) {
    const o = e;
    if (Ot(e, n) <= t) return [e];
    const s = [];
    for (let a = 0; a < r; a += 1) {
        const u = Qs(e, n, t);
        if (u) s.push(u), e = e.slice(u.length);
        else break
    }
    return s.reduce((a, u) => a + u.length, 0) < o.length && (s[s.length - 1] = yt(s[s.length - 1].slice(0, s[s.length - 1].length - 1))), s
}
const ea = ["AT", "BE", "CY", "DE", "EE", "ES", "FI", "FR", "GR", "HR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK"],
    od = [...ea, "BG", "CZ", "DK", "HU", "PL", "RO", "SE"],
    ta = ["NZ", "CK", "NU", "PN", "TK"],
    id = ["usd", "eur", "gbp", "cad", "aud", "nzd", "brl", "mxn", "inr", "pln"];

function sd(e) {
    return e === "AU" ? "aud" : e === "BR" ? "brl" : e === "CA" ? "cad" : e === "LI" || e === "CH" ? "chf" : e === "DK" || e === "FO" || e === "GL" ? "dkk" : ea.includes(e) ? "eur" : e === "GB" ? "gbp" : e === "MX" ? "mxn" : e === "BV" || e === "NO" || e === "SJ" ? "nok" : ta.includes(e) ? "nzd" : e === "PL" ? "pln" : e === "SE" ? "sek" : e === "US" ? "usd" : null
}
const ra = e => {
    var t, r;
    return ((r = (t = e.draft_plans) == null ? void 0 : t[0]) == null ? void 0 : r.currency) || "usd"
};

function Ve(e) {
    return ["BIF", "CLP", "DJF", "GNF", "JPY", "KMF", "KRW", "MGA", "PYG", "RWF", "UGX", "VND", "VUV", "XAF", "XOF", "XPF"].includes(e.toUpperCase())
}

function ad(e) {
    const t = ra(e);
    return Ve(t)
}

function ud(e) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: e,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(0).replace(/\d/, "").trim()
}
const na = e => e / 1e8;

function wt(e, t, {
    forceDecimals: r = !1
} = {}) {
    let o = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: t,
        minimumFractionDigits: r || e % 100 && !Ve(t) ? 2 : 0,
        maximumFractionDigits: t === "btc" ? 8 : 2
    }).format(t === "btc" ? na(e) : Ve(t) ? e : e / 100);
    return t === "usd" && typeof window != "undefined" && window._preloads && window._preloads.country && Ql.includes(window._preloads.country) && (o = `US${o}`), o
}

function cd(e) {
    return new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(e / 100)
}
const ld = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

function _d(e) {
    if (!e) return null;
    if (typeof e != "string") throw new Error("Bad type for dollar string");
    const t = e.replace(/[^0-9.]/g, "");
    return t ? Math.round(Number(t) * 100) : null
}

function dd(e) {
    let t = e / 100;
    return t = t < 50 ? Math.ceil(t) : Math.ceil(t / 5) * 5, t * 100
}

function fd(e, {
    quantity: t = 1,
    coupon: r = null,
    noTrial: n = !1,
    trial_end_override: o = null
} = {}) {
    if (!n && (e.trial_period_days || r && r.trial_period_days || o && o > Date.now() / 1e3 + 120)) return 0;
    let i = e.amount * t;
    return r && r.percent_off ? i = Math.round(i * (1 - (r.percent_off_precise || r.percent_off) / 100)) : r && r.amount_off && (i = Math.max(0, i - r.amount_off)), i
}

function Ed(e, {
    interval: t = "month",
    interval_count: r = js,
    multiplier: n = 1,
    min: o = 0
} = {}) {
    let i, s, a;
    for (const m of e) {
        if (!a) a = m.currency;
        else if (a != m.currency) continue;
        m.interval == "month" ? (!i || m.amount < i) && (i = m.amount) : m.interval == "year" && (!s || m.amount < s) && (s = m.amount)
    }
    let u = i;
    if (!u && s && (u = s / 12), !u) return null;
    let l;
    switch (t) {
        case "month":
            l = u;
            break;
        case "day":
            l = u / 30;
            break;
        case "year":
            l = s || u * 12;
            break;
        default:
            throw new Error(`bad interval: ${t}`)
    }
    let c = l * r * n;
    return c < o ? null : (c = Math.floor(c / 100) * 100, wt(c, a))
}

function pd(e, {
    amount: t,
    interval: r = "",
    language: n = "en",
    isOneOff: o = !1
} = {}) {
    const i = wt(t != null ? t : e.amount, e.currency);
    if (e.interval !== "forever") {
        const s = r || e.interval,
            {
                iPlural: a,
                iString: u
            } = I18N.i(n);
        if (o) return i;
        if (e.interval_count === 3) {
            if (s === "day") return u("%1/three days", i);
            if (s === "month") return u("%1/three months", i);
            if (s === "week") return u("%1/three weeks", i);
            if (s === "year") return u("%1/three years", i)
        }
        if (s === "day") return a("%2/day", "%2/%1 days", e.interval_count, i);
        if (s === "month") return a("%2/month", "%2/%1 months", e.interval_count, i);
        if (s === "week") return a("%2/week", "%2/%1 weeks", e.interval_count, i);
        if (s === "year") return a("%2/year", "%2/%1 years", e.interval_count, i)
    }
    return i
}

function md(e, {
    secondsCutoff: t,
    minutesCutoff: r,
    hoursCutoff: n,
    daysCutoff: o,
    weeksCutoff: i,
    long: s,
    noNumber: a,
    noWord: u,
    lessThanMinute: l,
    language: c = "en",
    appendAgo: m
} = {}) {
    const {
        iCombo: d
    } = I18N.i(c);
    e = Math.round(e);
    let E;
    return e < (t || 60) ? (E = Math.round(e), u ? E : a && s ? d("secondsToLargestUnit", "second", "seconds", E) : a && !s ? d("secondsToLargestUnit", "sec", "secs", E) : !s && m ? d("secondsToLargestUnit", "%1 sec ago", "%1 secs ago", E) : s ? m ? d("secondsToLargestUnit", "%1 second ago", "%1 seconds ago", E) : d("secondsToLargestUnit", "%1 second", "%1 seconds", E) : d("secondsToLargestUnit", "%1 sec", "%1 secs", E)) : e < (r || 60 * 60) && l && !u && !a ? (E = Math.round(e / 60), !s && m ? d("secondsToLargestUnit", "%1 min ago", "%1 mins ago", E) : s ? m ? d("secondsToLargestUnit", "less than %1 second ago", "less than %1 seconds ago", E) : d("secondsToLargestUnit", "less than %1 minute", "less than %1 minutes", E) : d("secondsToLargestUnit", "less than %1 min", "less than %1 mins", E)) : e < (r || 60 * 60) ? (E = Math.round(e / 60), u ? E : a && s ? d("secondsToLargestUnit", "minute", "minutes", E) : a && !s ? d("secondsToLargestUnit", "min", "mins", E) : !s && m ? d("secondsToLargestUnit", "%1 min ago", "%1 mins ago", E) : s ? m ? d("secondsToLargestUnit", "%1 minute ago", "%1 minutes ago", E) : d("secondsToLargestUnit", "%1 minute", "%1 minutes", E) : d("secondsToLargestUnit", "%1 min", "%1 mins", E)) : e < (n || 60 * 60 * 24) ? (E = Math.round(e / 60 / 60), u ? E : a && s ? d("secondsToLargestUnit", "hour", "hours", E) : a && !s ? d("secondsToLargestUnit", "hr", "hrs", E) : !s && m ? d("secondsToLargestUnit", "%1 hr ago", "%1 hrs ago", E) : s ? m ? d("secondsToLargestUnit", "%1 hour ago", "%1 hours ago", E) : d("secondsToLargestUnit", "%1 hour", "%1 hours", E) : d("secondsToLargestUnit", "%1 hr", "%1 hrs", E)) : e < (o || 60 * 60 * 24 * 7) ? (E = Math.round(e / 60 / 60), u ? E : a ? d("secondsToLargestUnit", "day", "days", E) : m ? d("secondsToLargestUnit", "%1 day ago", "%1 days ago", E) : d("secondsToLargestUnit", "%1 day", "%1 days", E)) : e < (i || 60 * 60 * 24 * 365.25) ? (E = Math.round(e / 60 / 60), u ? E : a && s ? d("secondsToLargestUnit", "week", "weeks", E) : a && !s ? d("secondsToLargestUnit", "wk", "wks", E) : !s && m ? d("secondsToLargestUnit", "%1 wk ago", "%1 wks ago", E) : s ? m ? d("secondsToLargestUnit", "%1 week ago", "%1 weeks ago", E) : d("secondsToLargestUnit", "%1 week", "%1 weeks", E) : d("secondsToLargestUnit", "%1 wk", "%1 wks", E)) : (E = Math.round(e / 60 / 60 / 24 / 365.25), u ? E : a && s ? d("secondsToLargestUnit", "year", "years", E) : a && !s ? d("secondsToLargestUnit", "yr", "yrs", E) : !s && m ? d("secondsToLargestUnit", "%1 yr ago", "%1 yrs ago", E) : s ? m ? d("secondsToLargestUnit", "%1 year ago", "%1 years ago", E) : d("secondsToLargestUnit", "%1 year", "%1 years", E) : d("secondsToLargestUnit", "%1 yr", "%1 yrs", E))
}

function Sd(e) {
    const t = Math.floor(e / 60 / 60),
        r = Math.floor(e / 60) % 60,
        n = Math.floor(e % 60);
    return `${(t?`${t}:`:"")+(t?`0${r}`.slice(-2):r)}:${`0${n}`.slice(-2)}`
}

function gd(e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
}

function vr(e) {
    return e[0] !== "#" && (e = `#${e}`), e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (t, r, n, o) => r + r + n + n + o + o), e
}

function oa(e) {
    e = vr(e);

    function t(d, E) {
        typeof d == "string" && d.indexOf(".") != -1 && parseFloat(d) === 1 && (d = "100%");
        const C = typeof d == "string" && d.indexOf("%") != -1;
        return d = Math.min(E, Math.max(0, parseFloat(d))), C && (d = parseInt(d * E, 10) / 100), Math.abs(d - E) < 1e-6 ? 1 : d % E / parseFloat(E)
    }
    const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    let n = parseInt(r[1], 16),
        o = parseInt(r[2], 16),
        i = parseInt(r[3], 16);
    n = t(n, 255), o = t(o, 255), i = t(i, 255);
    const s = Math.max(n, o, i),
        a = Math.min(n, o, i);
    let u;
    const l = s,
        c = s - a,
        m = s === 0 ? 0 : c / s;
    if (s == a) u = 0;
    else {
        switch (s) {
            case n:
                u = (o - i) / c + (o < i ? 6 : 0);
                break;
            case o:
                u = (i - n) / c + 2;
                break;
            case i:
                u = (n - o) / c + 4;
                break
        }
        u /= 6
    }
    return {
        h: u,
        s: m,
        v: l
    }
}

function kr(e) {
    const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(vr(e));
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}

function ia({
    r: e,
    g: t,
    b: r
}) {
    return `#${e.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`
}

function hd(e) {
    const t = oa(e);
    if (t.h > .11 && t.h < .56)
        if (t.s > .25 && t.v > .5) {
            if (t.s < .6 && t.v > .8) return !0;
            if (t.s > .6) return !0
        } else return !1;
    else if (t.s > .25 && t.v > .5) return !0;
    return !1
}

function Cd(e, t) {
    const r = kr(e);
    return r ? (r.r = Math.max(0, Math.min(255, Math.round(r.r * t))), r.g = Math.max(0, Math.min(255, Math.round(r.g * t))), r.b = Math.max(0, Math.min(255, Math.round(r.b * t))), ia(r)) : e
}

function Id(e) {
    let {
        r: t,
        g: r,
        b: n
    } = kr(e);
    return t = t / 255, r = r / 255, n = n / 255, t = t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4), r = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4), n = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4), .2126 * t + .7152 * r + .0722 * n
}

function Td(e, t, {
    name: r = a => a,
    restWord: n = "other",
    noNames: o = "people",
    pluralizeRest: i = !0,
    showRestCount: s = !0
} = {}) {
    const a = e.map(r).filter(Boolean).slice(0, t);
    if (a.length === 0) a.push(da(e.length, o));
    else if (a.length < e.length) {
        const u = e.length - a.length;
        a.push(`${s?u:""} ${n}${u>1&&i?"s":""}`)
    }
    return Ut(a)
}

function Ut(e, t = "en") {
    const {
        iString: r
    } = I18N.i(t);
    let n = "";
    return e.length === 1 ? n = e[0] : e.length === 2 ? n = e.join(` ${r("and")} `) : e.length > 2 && (n = `${e.slice(0,-1).join(", ")}, ${r("and")} ${e.slice(-1)}`), n
}

function Ad(e, {
    minSignificantDigits: t = 1,
    language: r = "en"
} = {}) {
    if (e < 1e3) return e.toString();
    const {
        iTemplate: n
    } = I18N.i(r), o = i => {
        const s = Math.max(t - 1 - Math.floor(Math.log10(i)), 0);
        return Math.round(i * Math.pow(10, s)) / Math.pow(10, s)
    };
    return Math.round(e / 1e3) < 1e3 ? (e /= 1e3, n `${o(e)}k`) : Math.round(e / 1e6) < 1e3 ? (e /= 1e6, n `${o(e)}m`) : Math.round(e / 1e9) < 1e3 ? (e /= 1e9, n `${o(e)}b`) : (e /= 1e12, n `${o(e)}t`)
}
const sa = e => Math.max(0, Math.min(5, Math.floor(Math.log(Math.max(e, 1)) / Math.LN10 + 1e-9)) - 1),
    Rd = e => "🔥".repeat(sa(e));

function Od(e, t, r) {
    const n = (e || "").trim().split(/[\s\r]*\n[\s\r]*/g).map(i => i.trim()).filter(i => i),
        o = [];
    for (; n.length > 0;) {
        const i = n.shift(),
            s = o[o.length - 1];
        s && s.length < r ? o[o.length - 1] += t + i : o.push(i)
    }
    return o.join(`
`)
}

function aa() {
    return Math.random().toString(36).replace(/^0\./, "")
}

function bt(e) {
    return e.trim().split(/\s+/).filter(Boolean).map(t => t[0].toUpperCase() + t.substr(1).toLowerCase()).join(" ")
}

function or(e, t) {
    const r = t ? e.substr(1).toLowerCase() : e.substr(1);
    return e[0].toUpperCase() + r
}

function bd(e) {
    const t = ["th", "st", "nd", "rd"],
        r = e % 100;
    return e + (t[(r - 20) % 10] || t[r] || t[0])
}

function Ye(e, {
    precision: t = 0,
    language: r = "en"
} = {}) {
    return typeof e == "string" && (e = Number(e.replace(/,/g, ""))), new Intl.NumberFormat(r, {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: t
    }).format(e)
}

function Dd(e) {
    return Math.pow(10, Math.floor(Math.log10(e))) || 0
}

function Pd(e) {
    return e < 100 ? "tens" : e < 1e3 ? "hundreds" : e < 1e4 ? "thousands" : e < 1e5 ? "tens of thousands" : e < 1e6 ? "hundreds of thousands" : e < 1e7 ? "millions" : e < 1e8 ? "tens of millions" : e < 1e9 ? "hundreds of millions" : e < 1e10 ? "billions" : e < 1e11 ? "tens of billions" : e < 1e12 ? "hundreds of billions" : e < 1e13 ? "trillions" : e < 1e14 ? "tens of trillions" : e < 1e15 ? "hundreds of trillions" : "gagillions"
}

function ua(e) {
    const t = e.toLocaleString(void 0, {
        notation: "compact",
        maximumFractionDigits: 0,
        roundingMode: "floor"
    });
    return e >= 1e3 ? `${t}+` : e > 0 ? t : "0"
}

function Nd(e) {
    return e <= 10 ? `#${e}` : e <= 25 ? "Top 25" : e <= 50 ? "Top 50" : e <= 100 ? "Top 100" : ""
}

function ca(e) {
    if (e < 1e3) return null;
    let n = Math.floor(e / 1e3) * 1e3;
    return n >= 1e6 && (n = Math.floor(e / 1e5) * 1e5), Ye(n)
}

function Ld(e, t = "en") {
    const {
        iTemplate: r
    } = I18N.i(t), n = ca(e);
    return n ? r `Over ${n} subscribers` : null
}

function la(e) {
    if (!e || e < 100) return null;
    const t = e < 1e3 ? 100 : 1;
    return ua(Math.floor(e / t) * t)
}

function Md(e) {
    return !e || e < 100 ? "See subscribers" : `${la(e)} subscribers`
}
const _a = e => e < 1 ? "< 1%" : `${e}%`;

function yd(e, {
    rounded: t = !1,
    display: r = !1,
    decimalPlaces: n = -1
} = {}) {
    let o = parseFloat(e) * 100;
    return n >= 0 && (o = o.toFixed(n)), t && (o = Math.floor(o)), r ? _a(Number(o)) : o
}

function wd(e) {
    var t;
    if ((t = e == null ? void 0 : e.postSchedules) != null && t.length && e.postSchedules[0].trigger_at) return new Date(e.postSchedules[0].trigger_at);
    if ("scheduled_at" in e && !(!e || !e.scheduled_at) && !(e.email_sent_at && e.should_send_email)) return new Date(Math.max(new Date(e.scheduled_at).getTime(), Date.now()))
}

function Ud(e) {
    return e === 0 ? "zero" : e === 1 ? "one" : e === 2 ? "two" : e === 3 ? "three" : e === 4 ? "four" : e === 5 ? "five" : e === 6 ? "six" : e === 7 ? "seven" : e === 8 ? "eight" : e === 9 ? "nine" : e === 10 ? "ten" : e === 11 ? "eleven" : e === 12 ? "twelve" : Ye(e)
}

function da(e, t, {
    zero_fallback: r = "",
    just_word: n
} = {}) {
    let o, i;
    const s = t.lastIndexOf(" ") + 1,
        a = t.substr(s),
        u = t.substr(0, s);
    return ["person", "people"].includes(a) ? (o = `${u}person`, i = `${u}people`) : ["reply", "replies"].includes(a) ? (o = `${u}reply`, i = `${u}replies`) : ["entry", "entries"].includes(a) ? (o = `${u}entry`, i = `${u}entries`) : ["match", "matches"].includes(a) ? (o = `${u}match`, i = `${u}matches`) : (o = t, i = `${t}s`), n || (o = `${Ye(e)} ${o}`, i = `${Ye(e)} ${i}`), !e && r ? r : e == 1 ? o : i
}

function vd(e) {
    return `${e}’${e[e.length-1]==="s"?"":"s"}`
}

function kd(e) {
    return e.replace(/\n/g, "\\n")
}
const Bd = (e, t, r) => {
    const n = {};
    for (const o in e) n[o] = t.call(r, e[o], o, e);
    return n
};

function fa(e, t) {
    if (isNaN(e)) return isNaN(t);
    if (e === null) return t === null;
    switch (typeof e) {
        case "undefined":
        case "boolean":
        case "number":
        case "string":
            return e === t
    }
    const r = Object.keys(e).sort(),
        n = Object.keys(t).sort();
    if (r.length !== n.length) return !1;
    for (let o = 0; o < r.length; o += 1) {
        const i = r[o];
        if (i !== n[o] || !fa(e[i], t[i])) return !1
    }
    return !0
}
const $d = (e, t = "id") => {
    const r = {};
    for (const n of e) typeof t == "function" ? r[t(n)] = n : r[n[t]] = n;
    return r
};

function xd(e, t) {
    const r = [],
        n = [];
    for (const o of e) t(o) ? r.push(o) : n.push(o);
    return [r, n]
}
const Fd = (e, t = 1) => {
        const r = [];

        function n(o, i) {
            for (const s of o) Array.isArray(s) && i > 0 ? n(s, i - 1) : r.push(s)
        }
        return n(e, t), r
    },
    Gd = (e, t, r) => {
        if (typeof t == "string") {
            const n = t.split(".");
            t = o => n.reduce((i, s) => i[s], o)
        }
        return [].reduce.call(e, (n, o, i) => {
            const s = t.call(r, o, i, e),
                a = n.get(s);
            return a ? a.push(o) : n.set(s, [o]), n
        }, new Map)
    };

function Ea({
    publication: e,
    post: t
}) {
    return ["adhoc_email", "page"].includes(t == null ? void 0 : t.type) ? !1 : e.community_enabled && t && t.write_comment_permissions !== "none"
}

function Hd({
    publication: e,
    post: t
}) {
    return !!(e.community_enabled && t)
}

function Wd({
    publication: e,
    post: t
}) {
    return (t == null ? void 0 : t.type) === "adhoc_email" || (t == null ? void 0 : t.slug) === "coming-soon" ? !1 : t && t.comment_count > 0 || Ea({
        publication: e,
        post: t
    })
}
const Kd = e => !!(e && e.is_contributor);

function Vd(e, t, {
    bypassContentAccessCheck: r = !1
} = {}) {
    const {
        userHasFullAccessToPost: n
    } = ys;
    return e && t.publishedBylines && t.publishedBylines.find(o => o.id === e.id) ? !0 : r || n(e, t)
}

function Yd(e, t, {
    bypassContentAccessCheck: r = !1
} = {}) {
    const {
        userHasFullAccessToPost: n
    } = ys;
    return e && t.publishedBylines && t.publishedBylines.find(o => o.id === e.id) ? !0 : r || n(e, t)
}
const jd = e => e.type === "thread" && e.write_comment_permissions === "none";

function pa(e, t, r) {
    const n = e && "id" in e ? e.id : null;
    if (n && t.publishedBylines && t.publishedBylines.find(o => o.id === n)) return {
        canReply: !0
    };
    if (e && e.is_contributor) return {
        canReply: !0
    };
    switch (t.write_comment_permissions || r.default_write_comment_permissions) {
        case "everyone":
            return {
                canReply: !0
            };
        case "none":
            return {
                canReply: !1,
                repliesDisabledReason: gt.comments_disabled
            };
        case "only_paid":
            {
                if (bs(t.audience)) {
                    const i = e ? Ds(e, t) : !1;
                    return {
                        canReply: i,
                        repliesDisabledReason: i ? void 0 : gt.founding_subscription_required
                    }
                }
                const o = !!(e && e.is_subscribed);
                return {
                    canReply: o,
                    repliesDisabledReason: o ? void 0 : gt.paid_subscription_required
                }
            }
    }
    return {
        canReply: !1
    }
}

function Jd(e, t, r) {
    return pa(K(N({}, e), {
        is_subscribed: !0
    }), t, r).canReply
}
const zd = (e, t) => !!(t && e && e.id === t.user_id);

function qd(e, t, {
    pub: r,
    post: n,
    parentComments: o
}) {
    if (!e || !t) return !1;
    if (e.id === t.user_id) return !0;
    if (t.publication_id && t.post_id) {
        if (Sa(e, r)) return !0
    } else if (ma({
            user: e,
            comment: t,
            parentComments: o
        })) return !0;
    return !1
}

function ma({
    user: e,
    comment: t,
    parentComments: r
}) {
    var i;
    if (!e || !t || t.publication_id && t.post_id || e.id === t.user_id || e.is_contributor) return !1;
    const n = Number((i = t.ancestor_path) == null ? void 0 : i.split(".").filter(Boolean)[0]);
    if (!n) return !1;
    const o = r == null ? void 0 : r.find(s => (s == null ? void 0 : s.id) === n);
    return e.id === (o == null ? void 0 : o.user_id)
}

function Sa(e, t, r) {
    return e ? !!(e.id === (t == null ? void 0 : t.author_id) || t != null && t.contributors.find(n => n.user_id === e.id && ["admin", "contributor"].includes(n.role))) : !1
}

function Zd(e, t) {
    return !(!e || !t || e.id === t.user_id)
}

function Xd(e) {
    return !!e.plans
}

function Qd(e) {
    return !!(e.plans || e.has_subscribers)
}

function ef(e, {
    type: t,
    coupon: r
} = {}) {
    return !e.plans || t === "page" ? "everyone" : r ? "only_free" : "only_paid"
}

function Br(e, t, r) {
    if (t === "thread") switch (e) {
        case "only_paid":
            return ["only_paid"];
        case "founding":
            return ["only_paid"];
        case "everyone":
            return ["everyone"];
        default:
            return ["everyone"]
    } else switch (e) {
        case "only_paid":
            return ["only_paid", "none"];
        case "founding":
            return ["only_paid", "none"];
        case "everyone":
            return r ? ["only_paid", "everyone", "none"] : ["everyone", "none"];
        default:
            return ["none"]
    }
}

function ga(e, t, r, n) {
    return e != null && Br(t, r, n).includes(e)
}

function tf(e, t, r, n) {
    return ga(r.default_write_comment_permissions, e, t, n) ? r.default_write_comment_permissions : Br(e, t, n)[0]
}

function rf(e, t, r) {
    return t === "page" ? !1 : r === "only_free" ? !0 : !!e.default_post_publish_send_email
}

function nf(e, t, r) {
    return t && t.interval === "forever" ? 0 : Math.max(0, ...[e.trial_end_override > Date.now() / 1e3 ? e.trial_end_override : 0, t && t.trial_period_days && Math.round((Date.now() + t.trial_period_days * 24 * 60 * 60 * 1e3) / 1e3), r && r.trial_period_days && Math.round((Date.now() + r.trial_period_days * 24 * 60 * 60 * 1e3) / 1e3)].filter(n => n))
}
const of = e => zs[new Date(e).getMonth()];

function sf(e, {
    noBreakSpace: t
} = {}) {
    const r = t ? " " : " ";
    let n = [];
    if (e.length == 1) n = [e[0]];
    else if (e.length == 2) n = [e[0], `${r}and${r}`, e[1]];
    else if (e.length >= 3)
        for (let o = 0; o < e.length; o++) n.push(e[o]), o < e.length - 2 ? n.push(`,${r}`) : o === e.length - 2 && n.push(`,${r}and${r}`);
    return n.toString = () => n.join(""), n
}

function af(e) {
    const t = new Map;
    for (const r of e) {
        let n = t.get(r);
        n = (n || 0) + 1, t.set(r, n)
    }
    return Array.from(t).sort((r, n) => n[1] - r[1])[0][0]
}

function uf(e, t = "en") {
    const {
        iString: r
    } = I18N.i(t);
    return e.type === "thread" ? r("View thread") : e.type === "podcast" ? r("Listen") : r("Read")
}

function cf(e, {
    isFinalWord: t
} = {}) {
    return e === "podcast" ? `listening${t?"":" to"}` : e === "video" ? "watching" : "reading"
}

function lf(e) {
    return e === "newsletter" ? "post" : e === "podcast" ? "episode" : e === "adhoc_email" ? "email" : e === "video" ? "video" : e
}

function _f(e) {
    return `${Xs(e.title||"Untitled post",115)}`
}

function df(e) {
    return e.publication_id === 10475 && e.section_id === 18994
}

function ha(e, {
    isDraft: t = !1
} = {}) {
    return e ? ((t ? e.draftBylines : e.publishedBylines) || []).filter(n => n.name) : []
}

function ff(e, t, {
    isDraft: r = !1
} = {}) {
    const n = ha(t, {
        isDraft: r
    });
    return n.length > 0 ? Ut(n.map(o => o.name).filter(o => o !== null)) : null
}
const Ef = e => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e);

function pf(e) {
    return typeof e == "string" ? Vl(e) || 0 : typeof e == "number" ? e : 0
}

function Ca(e) {
    const t = r => new RegExp(`^.*${r}`);
    if (e) {
        if (e.includes(te.CHECKOUT_URL)) return e.replace(t(te.CHECKOUT_URL), "/subscribe?");
        if (e.includes(te.FOUNDING_CHECKOUT_URL)) return e.replace(t(te.FOUNDING_CHECKOUT_URL), "/subscribe?plan=founding&");
        if (e.includes(te.REFERRAL_URL)) return e.replace(t(te.REFERRAL_URL), "/?showWelcome=true");
        if (e.includes(te.UNSUBSCRIBE_URL)) return e.replace(t(te.UNSUBSCRIBE_URL), "/account?");
        if (e.includes(te.ONE_CLICK_UNSUBSCRIBE_URL)) return e.replace(t(te.ONE_CLICK_UNSUBSCRIBE_URL), "/account?");
        if (/^.*%%.*%%/.test(e)) return null
    } else return e;
    return e
}

function mf(e) {
    const t = Ca(e);
    if (t) {
        const r = window.open(t, "_blank");
        r != null && r.focus && r.focus()
    }
}

function Sf(e) {
    if (!e) return !0;
    const t = document.location && document.location.pathname || "";
    return ["publish", "account"].includes(t.split("/")[1])
}

function gf(e, t = 2) {
    if (e === 0) return "0 Bytes";
    const r = 1024,
        n = t < 0 ? 0 : t,
        o = Math.floor(Math.log(e) / Math.log(r));
    return `${parseFloat((e/Math.pow(r,o)).toFixed(n))} ${vs[o]}`
}

function hf(e = "") {
    if (!e) return 0;
    const [t, r] = e.split(" "), n = vs.indexOf(r);
    return n < 0 ? 0 : Number(t) * Math.pow(1024, n)
}

function Cf(e) {
    return /Googlebot/i.test(e || "") ? "Google" : /bingbot/i.test(e || "") || /BingPreview/i.test(e || "") ? "Bing" : /Slurp/i.test(e || "") ? "Yahoo" : /DuckDuckBot/i.test(e || "") ? "DDG" : /Baiduspider/i.test(e || "") ? "Baidu" : !1
}

function If(e, t, r, n) {
    return e.name ? e.name : (r && r.author_id === n.id || t && t.publishedBylines && t.publishedBylines.find(o => o.id === n.id)) && e.email || "Someone"
}

function Tf(e, t, r = "en") {
    const {
        iTemplate: n
    } = I18N.i(r);
    return e && e.description || t.hero_text || n `Get ${t.name} in your inbox`
}
const vt = [{
        pubs: ["thebulwark"],
        subscription: "membership",
        donateItem: "membership",
        subscriber: "member",
        subscribe: "join",
        subscribeTo: "join",
        upgrade: "join",
        upgradeTo: "join",
        upgradeToPaid: "join",
        upgradeSubscriptionTo: "upgrade your membership to"
    }, {
        pubs: ["georgesaunders"],
        donateItem: "scholarship"
    }, {
        pubs: ["thecoddlingmovie"],
        subscribe: new Date > new Date("2024-02-22T08:00:00Z") ? "watch the film" : "pre-order the film"
    }],
    Ia = {
        subscription: "subscription",
        donateItem: "subscription",
        subscriber: "subscriber",
        subscribe: "subscribe",
        subscribeTo: "subscribe to",
        upgrade: "upgrade",
        upgradeTo: "upgrade to",
        upgradeToPaid: "upgrade to paid",
        upgradeSubscriptionTo: "upgrade your subscription to"
    },
    Af = vt.flatMap(e => e.pubs);

function Ta(e, t, r) {
    const n = vt.find(i => i.pubs.includes(e == null ? void 0 : e.subdomain)) || null,
        o = n ? N(N({}, Ia), n) : null;
    return o ? r(o) : t()
}

function Aa(e, t) {
    const r = e ? vt.find(o => o.pubs.includes(e.subdomain)) : void 0;
    let n = r && r[t];
    if (!n && (n = Ia[t], !n)) throw new Error(`${t} is not a valid subscription word`);
    return n
}

function Rf(e) {
    const t = {
        0: 8304,
        1: 185,
        2: 178,
        3: 179,
        4: 8308,
        5: 8309,
        6: 8310,
        7: 8311,
        8: 8312,
        9: 8313
    };
    return String.fromCodePoint(...Array.from(`${e}`).map(r => t[r]))
}
const Of = e => {
        var t, r, n;
        return (n = (r = (t = e == null ? void 0 : e.plans) == null ? void 0 : t.find(o => {
            var i;
            return (i = o.metadata) == null ? void 0 : i.founding
        })) == null ? void 0 : r.metadata) == null ? void 0 : n.short_description
    },
    bf = e => `https://checkout.opennode.com/${e}`;

function Df(e = 0) {
    const t = e === 0 ? 0 : Math.floor(Math.log(e) / Math.log(1024));
    return `${+(e/Math.pow(1024,t)).toPrecision(3)}${["B","KB","MB","GB","TB"][t]}`
}

function Pf(e, t = "en") {
    if (!e) return null;
    const {
        iString: r
    } = I18N.i(t), n = r("Substack Network"), o = r("Substack App");
    if ($r(e)) return o;
    const i = {
        "blog.substack.com": n,
        "library.substack.com": n,
        "substack-network": n,
        "on.substack.com": n,
        "post-end-cta": "Post Footer CTA",
        "stories.substack.com": n,
        "substack-app": o,
        "substack-boost": n,
        "substack-categories-discovery": o,
        "substack-categories-discovery-search": o,
        "substack-comment-links": n,
        "substack-country-leaderboards": o,
        "substack-cross-posts": n,
        "substack-facepiles": n,
        "substack-feed-item": o,
        "substack-follow-recommendations": o,
        "substack-homepage-recommendations": n,
        "substack-ios-in-app-purchase": "Substack iOS In-App Purchase",
        "substack-leaderboards": o,
        "substack-mentions": n,
        "substack-notes": o,
        "substack-onboarding-discovery": o,
        "substack-post-embeds": n,
        "substack-post-reply-comment": n,
        "substack-presubscribe": o,
        "substack-publication-embeds": n,
        "substack-reader-discovery": o,
        "substack-reader-profile-discovery": o,
        "substack-reader-shared": "Reader sharing",
        "substack-your-weekly-stack": r("Substack Network — Your Weekly Stack"),
        "substack-recommendation-email": n,
        "substack-referral": n,
        "substack-signup-flow": n,
        "substack-spotify-integration": o,
        "substack-subscriber-referral": n,
        "substack-twitter-link": o,
        "substack-twitter-suggest": o,
        "substack-xp-post-template": n,
        "substack-xp-read-next": n,
        "substack.com": o,
        "t.co": "Twitter",
        "www.substack.com": n,
        external: r("external form / api"),
        "googleads.g.doubleclick.net": "Google",
        "score-upsell": r("Boost upsell to engaged subscribers"),
        "substack-boost-subscribe-page-upsell": r("Boost upsell on another publication")
    }[e];
    return i || (/(\b|\.)facebook\./.test(e) ? "Facebook" : /(\b|\.)instagram\./.test(e) ? "Instagram" : /(\b|\.)linkedin\./.test(e) ? "LinkedIn" : /(\b|\.)youtube\./.test(e) ? "YouTube" : /(\b|\.)duckduckgo\./.test(e) ? "DuckDuckGo" : /(\b|\.)medium\./.test(e) ? "Medium" : /(\b|\.)reddit\./.test(e) ? "Reddit" : /(\b|\.)bing\./.test(e) ? "Bing" : /(\b|\.)google\./.test(e) ? "Google" : e != null && e.includes(".") ? e : bt(e.replace(/-/g, " ")))
}

function Ra(e) {
    return $r(e) ? !0 : ["substack-app", "substack-categories-discovery", "substack-categories-discovery-search", "substack-country-leaderboards", "substack-feed-item", "substack-follow-recommendations", "substack-ios-in-app-purchase", "substack-leaderboards", "substack-notes", "substack-onboarding-discovery", "substack-presubscribe", "substack-reader-discovery", "substack-reader-profile-discovery", "substack-twitter-link", "substack-twitter-suggest", "substack.com"].includes(e)
}

function $r(e) {
    return ["substack-feed-item", "notes_inline_suggestions", "notes_sidebar_suggestions", "feed-nux", "feed-twitter-suggestions", "notes_all_suggestions", "note_permalink_upsell", "notes_likes", "note_inline_upsell", "notes_restacks", "notes_quote_attachment", "notes_context", "substack-notes"].includes(e)
}

function Nf(e) {
    return !Ra(e) && /substack/i.test(e)
}
const Lf = e => /^\S+@\S+\.\S+$/.test(e),
    Mf = e => (e || "").replace(/\s+/g, " "),
    yf = {
        "-2": {
            short: "Deleted - Flagged as spam",
            long: "This publication is deleted and every page will show a flagged error"
        },
        "-1": {
            short: "Noindexed - In moderation queue",
            long: "This publication is temporarily not available to search engines because it is pending moderation, where it will be approved or deleted"
        },
        0: {
            short: "Noindexed - New Pub",
            long: 'This publication is temporarily not available to search engines because the author needs to create a new post other than "coming-soon"'
        },
        1: {
            short: "Available",
            long: "This publication is available to search engines"
        },
        2: {
            short: "Available w/priority",
            long: "This publication is available to search engines and is given priority SEO treatment"
        }
    };

function wf(e) {
    return e ? e < 40 * 24 * 60 * 60 ? "monthly" : e < 94 * 24 * 60 * 60 ? "quarterly" : e < 186 * 24 * 60 * 60 ? "semiannual" : e < 400 * 24 * 60 * 60 ? "annual" : e > 45 * 24 * 60 * 60 ? "lifetime" : "other" : "free"
}

function Uf(e) {
    return e && (e.homepage_type === "newspaper" || e.homepage_type === "magaziney")
}
const vf = 35;

function kf(e, {
    isStatic: t
} = {}) {
    let r, n;
    return e.width >= e.height * (960 / 540) ? (r = t ? 550 : 960, n = Math.round(r * (e.height / e.width))) : e.width >= e.height ? (r = t ? 550 : 728, n = Math.round(r * (e.height / e.width))) : r = n = t ? 550 : 728, {
        height: n,
        width: r
    }
}

function Bf(e) {
    const t = Xe || Lr,
        r = t(e);
    return t.utc([r.year(), r.month(), r.date(), 8, 0, 0]).toDate()
}

function $f({
    now: e
} = {}) {
    const t = Xe || Lr,
        r = e ? t(e) : t();
    let n = r.utc().startOf("day").add(5, "hour");
    return n.isBefore(r) && (n = n.utc().add(1, "day")), n
}

function xf(e) {
    const t = Math.round(e / 60),
        r = Math.floor(t / 60),
        n = t % 60;
    return `${r?`${r}HR `:""}${n}M`
}

function Ff(e) {
    const t = e.toLowerCase()[0];
    return ["a", "e", "i", "o", "u"].includes(t)
}

function Gf(e) {
    return e.toLowerCase().startsWith("uni watch") ? "a" : Ff(e) ? "an" : "a"
}

function Hf(e) {
    return `${Gf(e)} ${e}`
}

function Wf(e) {
    return e.split("").reduce((t, r) => (t << 5) - t + r.charCodeAt(0) | 0, 0)
}

function Kf(e, t = "en") {
    const {
        iContext: r
    } = I18N.i(t), n = r("thousandsAbbreviation", "K");
    return Math.abs(e) > 9999 ? `${Math.sign(e)*(Math.abs(e)/1e3).toFixed(1)}${n}` : (Math.sign(e) * Math.abs(e)).toString()
}

function Vf({
    recommendedPubs: e
}) {
    let t = null;
    for (const r of e) {
        for (const n of r.recommendations)
            if (n.hasOwnProperty("blurb") && n.blurb) {
                t = `${n.name} recommended ${r.name}`;
                break
            }
        if (t) break
    }
    return t != null ? t : "Recommendations from your Substacks"
}

function Yf(e, t = "en") {
    var n, o, i, s, a;
    const {
        iString: r
    } = I18N.i(t);
    return ((n = e.metadata) == null ? void 0 : n.short_description_english) === "Stammleser" || ((o = e.metadata) == null ? void 0 : o.short_description_english) === "Gründungsmitglied" ? r("Founding Member") : (i = e.metadata) != null && i.short_description_english ? r((s = e.metadata) == null ? void 0 : s.short_description_english) : (a = e.metadata) != null && a.short_description ? r(e.metadata.short_description) : e.interval === "year" ? r("Annual") : e.interval === "forever" ? r("Founding Membership") : e.interval === "month" && e.interval_count === 3 ? r("Quarterly") : e.interval === "month" && e.interval_count === 6 ? r("Semiannually") : e.interval === "day" ? r("Daily") : e.interval === "week" ? r("Weekly") : r("Monthly")
}

function Oa(e) {
    var t;
    return ((t = e == null ? void 0 : e.metadata) == null ? void 0 : t.founding) === "yes"
}
const jf = ({
    minLength: e,
    maxLength: t,
    minAlphaNumeric: r
} = {}) => n => {
    if (!n) return "Missing input";
    if (e && n.length < e) return `Must be at least ${e} characters long`;
    if (t && n.length > t) return `Must be at most ${t} characters long`;
    const o = new RegExp("\\P{P}|`", "gu"),
        i = n.match(o);
    if (!i || (i == null ? void 0 : i.length) < (r != null ? r : e)) return `Must contain at least ${r!=null?r:e} non-punctuation characters`;
    const s = ["`"];
    let a = 0;
    return i.forEach(u => {
        s.includes(u) && (a += 1)
    }), i.length - a < (r != null ? r : e) ? `Must contain at least ${r!=null?r:e} non-punctuation characters` : null
};

function Jf(e, t) {
    const r = process.env[e],
        n = typeof r != "undefined",
        o = typeof t != "undefined";
    if (n) return r;
    if (o) return t;
    throw new Error(`Missing required env var ${e}`)
}

function zf(e) {
    return new Promise((t, r) => {
        const n = [];
        e.on("data", o => n.push(o)), e.once("end", () => t(Buffer.concat(n))), e.once("error", r)
    })
}

function qf(e, {
    maxWidth: t = 55,
    maxLines: r = 2,
    charWidth: n = 1
} = {}) {
    const o = [];
    let i = "",
        s = 0;
    const a = e.split(" ");
    for (const u of a) {
        const l = u.length * n;
        if (s + l <= t) i ? (i += ` ${u}`, s += l + n) : (i = u, s = l);
        else if (o.push(i), i = u, s = l, o.length === r) break
    }
    if (o.length === r && i) {
        const u = t - s;
        u >= 3 ? i += "..." : i = `${i.substring(0,i.length-(3-u))}...`, o[r - 1] = i
    } else i && o.push(i);
    return o
}

function Zf() {
    return typeof window != "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)
}

function Xf(e) {
    return (e == null ? void 0 : e.id) && e.id.toString(36) || null
}

function Qf(e) {
    if (!e) return null;
    try {
        const t = parseInt(e, 36);
        return isNaN(t) || t > yr ? null : t
    } catch (t) {
        return null
    }
}

function eE(e, t) {
    return typeof e != "string" ? t[0] : t.includes(e) ? e : t[0]
}

function tE(e) {
    const t = new Array(e[0].length).fill(0);
    for (let r = 0; r < e.length; r++)
        for (let n = 0; n < e[r].length; n++) t[n] += e[r][n] / e.length;
    return t
}

function rE(e) {
    return e == null
}
var nE = rE;
const ba = F(nE),
    oE = "#FF6719",
    NT = "#318631",
    LT = "#792BA9",
    MT = "#E07F69",
    yT = "#8BD1E0",
    wT = "#F7ED92",
    UT = "#444444",
    vT = "#F4F4F4",
    kT = "#AAAAAA",
    BT = 48;

function iE(e, t, r, n) {
    var o = -1,
        i = e == null ? 0 : e.length;
    for (n && i && (r = e[++o]); ++o < i;) r = t(r, e[o], o, e);
    return r
}
var sE = iE;

function aE(e) {
    return function(t) {
        return e == null ? void 0 : e[t]
    }
}
var uE = aE,
    cE = uE,
    lE = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
    },
    _E = cE(lE),
    dE = _E,
    fE = typeof W == "object" && W && W.Object === Object && W,
    EE = fE,
    pE = EE,
    mE = typeof self == "object" && self && self.Object === Object && self,
    SE = pE || mE || Function("return this")(),
    gE = SE,
    hE = gE,
    CE = hE.Symbol,
    xr = CE;

function IE(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
    return o
}
var TE = IE,
    AE = Array.isArray,
    Da = AE;
const $T = F(Da);
var $n = xr,
    Pa = Object.prototype,
    RE = Pa.hasOwnProperty,
    OE = Pa.toString,
    Fe = $n ? $n.toStringTag : void 0;

function bE(e) {
    var t = RE.call(e, Fe),
        r = e[Fe];
    try {
        e[Fe] = void 0;
        var n = !0
    } catch (i) {}
    var o = OE.call(e);
    return n && (t ? e[Fe] = r : delete e[Fe]), o
}
var DE = bE,
    PE = Object.prototype,
    NE = PE.toString;

function LE(e) {
    return NE.call(e)
}
var ME = LE,
    xn = xr,
    yE = DE,
    wE = ME,
    UE = "[object Null]",
    vE = "[object Undefined]",
    Fn = xn ? xn.toStringTag : void 0;

function kE(e) {
    return e == null ? e === void 0 ? vE : UE : Fn && Fn in Object(e) ? yE(e) : wE(e)
}
var BE = kE;

function $E(e) {
    return e != null && typeof e == "object"
}
var xE = $E,
    FE = BE,
    GE = xE,
    HE = "[object Symbol]";

function WE(e) {
    return typeof e == "symbol" || GE(e) && FE(e) == HE
}
var KE = WE,
    Gn = xr,
    VE = TE,
    YE = Da,
    jE = KE,
    JE = 1 / 0,
    Hn = Gn ? Gn.prototype : void 0,
    Wn = Hn ? Hn.toString : void 0;

function Na(e) {
    if (typeof e == "string") return e;
    if (YE(e)) return VE(e, Na) + "";
    if (jE(e)) return Wn ? Wn.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -JE ? "-0" : t
}
var zE = Na,
    qE = zE;

function ZE(e) {
    return e == null ? "" : qE(e)
}
var Fr = ZE,
    XE = dE,
    QE = Fr,
    ep = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    tp = "\\u0300-\\u036f",
    rp = "\\ufe20-\\ufe2f",
    np = "\\u20d0-\\u20ff",
    op = tp + rp + np,
    ip = "[" + op + "]",
    sp = RegExp(ip, "g");

function ap(e) {
    return e = QE(e), e && e.replace(ep, XE).replace(sp, "")
}
var up = ap,
    cp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

function lp(e) {
    return e.match(cp) || []
}
var _p = lp,
    dp = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

function fp(e) {
    return dp.test(e)
}
var Ep = fp,
    La = "\\ud800-\\udfff",
    pp = "\\u0300-\\u036f",
    mp = "\\ufe20-\\ufe2f",
    Sp = "\\u20d0-\\u20ff",
    gp = pp + mp + Sp,
    Ma = "\\u2700-\\u27bf",
    ya = "a-z\\xdf-\\xf6\\xf8-\\xff",
    hp = "\\xac\\xb1\\xd7\\xf7",
    Cp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
    Ip = "\\u2000-\\u206f",
    Tp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    wa = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    Ap = "\\ufe0e\\ufe0f",
    Ua = hp + Cp + Ip + Tp,
    va = "['’]",
    Kn = "[" + Ua + "]",
    Rp = "[" + gp + "]",
    ka = "\\d+",
    Op = "[" + Ma + "]",
    Ba = "[" + ya + "]",
    $a = "[^" + La + Ua + ka + Ma + ya + wa + "]",
    bp = "\\ud83c[\\udffb-\\udfff]",
    Dp = "(?:" + Rp + "|" + bp + ")",
    Pp = "[^" + La + "]",
    xa = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Fa = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Ne = "[" + wa + "]",
    Np = "\\u200d",
    Vn = "(?:" + Ba + "|" + $a + ")",
    Lp = "(?:" + Ne + "|" + $a + ")",
    Yn = "(?:" + va + "(?:d|ll|m|re|s|t|ve))?",
    jn = "(?:" + va + "(?:D|LL|M|RE|S|T|VE))?",
    Ga = Dp + "?",
    Ha = "[" + Ap + "]?",
    Mp = "(?:" + Np + "(?:" + [Pp, xa, Fa].join("|") + ")" + Ha + Ga + ")*",
    yp = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
    wp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
    Up = Ha + Ga + Mp,
    vp = "(?:" + [Op, xa, Fa].join("|") + ")" + Up,
    kp = RegExp([Ne + "?" + Ba + "+" + Yn + "(?=" + [Kn, Ne, "$"].join("|") + ")", Lp + "+" + jn + "(?=" + [Kn, Ne + Vn, "$"].join("|") + ")", Ne + "?" + Vn + "+" + Yn, Ne + "+" + jn, wp, yp, ka, vp].join("|"), "g");

function Bp(e) {
    return e.match(kp) || []
}
var $p = Bp,
    xp = _p,
    Fp = Ep,
    Gp = Fr,
    Hp = $p;

function Wp(e, t, r) {
    return e = Gp(e), t = r ? void 0 : t, t === void 0 ? Fp(e) ? Hp(e) : xp(e) : e.match(t) || []
}
var Wa = Wp;
const xT = F(Wa);
var Kp = sE,
    Vp = up,
    Yp = Wa,
    jp = "['’]",
    Jp = RegExp(jp, "g");

function zp(e) {
    return function(t) {
        return Kp(Yp(Vp(t).replace(Jp, "")), e, "")
    }
}
var qp = zp;

function Zp(e, t, r) {
    var n = -1,
        o = e.length;
    t < 0 && (t = -t > o ? 0 : o + t), r = r > o ? o : r, r < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
    for (var i = Array(o); ++n < o;) i[n] = e[n + t];
    return i
}
var Xp = Zp,
    Qp = Xp;

function em(e, t, r) {
    var n = e.length;
    return r = r === void 0 ? n : r, !t && r >= n ? e : Qp(e, t, r)
}
var tm = em,
    rm = "\\ud800-\\udfff",
    nm = "\\u0300-\\u036f",
    om = "\\ufe20-\\ufe2f",
    im = "\\u20d0-\\u20ff",
    sm = nm + om + im,
    am = "\\ufe0e\\ufe0f",
    um = "\\u200d",
    cm = RegExp("[" + um + rm + sm + am + "]");

function lm(e) {
    return cm.test(e)
}
var Ka = lm;

function _m(e) {
    return e.split("")
}
var dm = _m,
    Va = "\\ud800-\\udfff",
    fm = "\\u0300-\\u036f",
    Em = "\\ufe20-\\ufe2f",
    pm = "\\u20d0-\\u20ff",
    mm = fm + Em + pm,
    Sm = "\\ufe0e\\ufe0f",
    gm = "[" + Va + "]",
    ir = "[" + mm + "]",
    sr = "\\ud83c[\\udffb-\\udfff]",
    hm = "(?:" + ir + "|" + sr + ")",
    Ya = "[^" + Va + "]",
    ja = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Ja = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Cm = "\\u200d",
    za = hm + "?",
    qa = "[" + Sm + "]?",
    Im = "(?:" + Cm + "(?:" + [Ya, ja, Ja].join("|") + ")" + qa + za + ")*",
    Tm = qa + za + Im,
    Am = "(?:" + [Ya + ir + "?", ir, ja, Ja, gm].join("|") + ")",
    Rm = RegExp(sr + "(?=" + sr + ")|" + Am + Tm, "g");

function Om(e) {
    return e.match(Rm) || []
}
var bm = Om,
    Dm = dm,
    Pm = Ka,
    Nm = bm;

function Lm(e) {
    return Pm(e) ? Nm(e) : Dm(e)
}
var Mm = Lm,
    ym = tm,
    wm = Ka,
    Um = Mm,
    vm = Fr;

function km(e) {
    return function(t) {
        t = vm(t);
        var r = wm(t) ? Um(t) : void 0,
            n = r ? r[0] : t.charAt(0),
            o = r ? ym(r, 1).join("") : t.slice(1);
        return n[e]() + o
    }
}
var Bm = km,
    $m = Bm,
    xm = $m("toUpperCase"),
    Fm = xm,
    Gm = qp,
    Hm = Fm,
    Wm = Gm(function(e, t, r) {
        return e + (r ? " " : "") + Hm(t)
    }),
    Km = Wm;
const kt = F(Km),
    FT = e => {
        const {
            source: t,
            payment_method_details: r
        } = e, n = t || (r == null ? void 0 : r.card);
        if (!n) {
            const s = Ym(r == null ? void 0 : r.type),
                a = jm(r);
            return s ? `${s}${a?` (${a})`:""}` : "n/a"
        }
        const {
            brand: o,
            last4: i
        } = n;
        return `${o} (–${i})`
    },
    GT = (e, t) => {
        var n;
        let r;
        if (!t || t === e.currency) r = e.object === "price" ? e.unit_amount : e.amount;
        else {
            if (!((n = e.currency_options) != null && n[t])) return;
            r = e.currency_options[t].unit_amount
        }
        return r != null ? r : 0
    },
    Vm = (e, t) => {
        var r;
        return !t || t === e.currency ? e.metadata.minimum : (r = e.metadata.minimum_local) == null ? void 0 : r[t]
    },
    HT = (e, t) => {
        if (e === "open" && Mt(t).isBeforeNow()) return "Overdue";
        switch (e) {
            case "open":
                return "Unpaid";
            default:
                return kt(e)
        }
    },
    WT = (e, {
        language: t
    }) => {
        const {
            iString: r
        } = I18N.i(t != null ? t : "en");
        switch (e) {
            case "active":
                return r("Active");
            case "canceled":
                return r("Canceled");
            case "incomplete":
                return r("Incomplete");
            case "incomplete_expired":
                return r("Incomplete Expired");
            case "past_due":
                return r("Past Due");
            case "trialing":
                return r("Trialing");
            case "unpaid":
                return r("Unpaid");
            default:
                return kt(e)
        }
    },
    KT = (e, t) => {
        if (t) return "Refunded";
        switch (e) {
            case "succeeded":
                return "Paid";
            default:
                return kt(e)
        }
    },
    Ym = e => {
        switch (e) {
            case "card":
                return "Card";
            case "bancontact":
                return "Bancontact";
            case "ideal":
                return "iDEAL";
            case "sofort":
                return "Sofort";
            case "sepa_debit":
                return "SEPA Direct Debit";
            default:
                return kt(e)
        }
    },
    jm = e => {
        var t, r, n, o, i;
        return e != null && e.card ? (t = e.card) == null ? void 0 : t.last4 : e != null && e.ach_debit ? (r = e.ach_debit) == null ? void 0 : r.last4 : e != null && e.bancontact ? (n = e.bancontact) == null ? void 0 : n.iban_last4 : e != null && e.sepa_debit ? (o = e.sepa_debit) == null ? void 0 : o.last4 : e != null && e.us_bank_account ? (i = e.us_bank_account) == null ? void 0 : i.last4 : null
    },
    et = e => {
        var t;
        return !!(e != null && e.sections) && ((t = e.sections) == null ? void 0 : t.length) > 0
    },
    Za = e => e ? Gr(e) > 1 : !1,
    Xa = e => !!(e != null && e.podcast_enabled),
    Gr = e => {
        if (!e) return 0;
        let t = [];
        return et(e) && (t = Hr(e)), (Xa(e) ? 1 : 0) + t.length
    },
    Bt = e => e ? Gr(e) > 0 : !1,
    Jm = e => Gr(e) === 1,
    Hr = e => !e || !et(e) ? [] : e.sections.filter(t => t.is_podcast),
    Qa = e => !!e && !e.includes("substack"),
    eu = e => Qa(e.podcast_feed_url),
    tu = e => {
        var t;
        return Qa((t = e.podcastSettings) == null ? void 0 : t.podcast_feed_url)
    },
    zm = e => {
        if (!e) return !1;
        if (eu(e)) return !0;
        if (Za(e) && et(e)) {
            const t = Hr(e);
            for (const r of t)
                if (tu(r)) return !0
        }
        return !1
    },
    qm = (e, t) => !t || !Bt(t) || t.hide_podcast_feed_link ? !1 : t.has_free_podcast ? !0 : t.has_subscriber_only_podcast ? ru(e) : !1,
    Zm = e => e ? !!(e.is_free_subscribed && !e.is_subscribed) : !1,
    ru = e => e ? !!e.is_subscribed : !1,
    Xm = e => e ? e.payments_state === "enabled" : !1,
    nu = (e, {
        usePreview: t = !1,
        useDraft: r = !1
    } = {}) => {
        switch (e == null ? void 0 : e.type) {
            case "newsletter":
                return r ? e.draftVoiceoverUpload : e.voiceoverUpload;
            case "podcast":
                return t ? r ? e.draftPodcastPreviewUpload : e.podcastPreviewUpload : r ? e.draftPodcastUpload : e.podcastUpload;
            case "video":
                return r ? e.draftVideoUpload : e.videoUpload;
            default:
                return null
        }
    },
    Qm = (e, {
        usePreview: t = !1,
        useDraft: r = !1
    } = {}) => {
        var o;
        if (!e) return null;
        const n = nu(e, {
            usePreview: t,
            useDraft: r
        });
        if (n) return (o = n.duration) != null ? o : null;
        if ((e == null ? void 0 : e.type) === "podcast" && !t) {
            const i = r ? e.draft_podcast_duration : e.podcast_duration;
            return i != null ? i : null
        }
        return null
    },
    eS = (e, {
        usePreview: t = !1,
        useDraft: r = !1
    } = {}) => {
        var o, i;
        if (!e) return null;
        const n = nu(e, {
            usePreview: t,
            useDraft: r
        });
        return n ? (o = n.primary_file_size) != null ? o : null : (e == null ? void 0 : e.type) === "podcast" && !t && !r && (i = e.legacy_podcast_file_size) != null ? i : null
    },
    tS = e => !e || e.type !== "podcast" || !e.podcastUpload ? !1 : !!e.podcastUpload.is_free_preview,
    rS = e => !!e && !!e.podcast_preview_upload_id,
    nS = ({
        post: e
    }) => {
        var t;
        return !!e && !!((t = e.podcastFields) != null && t.free_podcast_url)
    },
    oS = e => {
        var t, r;
        return e.is_www ? (t = e.logo_url) != null ? t : void 0 : e.logo_url || e.cover_photo_url || e.author_photo_url || ((r = e.author) == null ? void 0 : r.photo_url)
    },
    $t = e => {
        var t;
        return !e || !("plans" in e) || !Array.isArray(e == null ? void 0 : e.plans) ? null : (t = e.plans.find(r => Dt({
            plan: r
        }))) != null ? t : null
    },
    iS = e => !!$t(e),
    sS = ({
        pub: e,
        currency: t
    }) => {
        const r = $t(e);
        return r ? Vm(r, t) : null
    },
    ou = e => {
        var r, n;
        if (tt({
                pub: e
            })) return "Founders";
        const t = $t(e);
        return (n = (r = t == null ? void 0 : t.metadata) == null ? void 0 : r.short_description) != null ? n : null
    },
    aS = e => !e || !e.state ? !1 : e.state === "error" || e.state === "cancelled",
    uS = (e, t) => (t == null ? void 0 : t.audience) === "founding" && ou(e) || "paid",
    cS = e => !!e && !!e.voiceover_upload_id,
    lS = (e, t) => !e || !t || !Bt(e) ? !1 : !!t.draft_voiceover_upload_id,
    _S = /\/images\/[-0-9a-fA-F]+_(\d+)x(\d+)(\.png)?$/i,
    dS = e => {
        const t = e.match(_S);
        return t ? parseInt(t[1]) / parseInt(t[2]) : null
    },
    iu = ({
        pub: e,
        url: t
    }) => {
        var r, n;
        if (!t.includes("api.substack.com")) return null;
        if (t.includes(`/feed/podcast/${e.id}.rss`)) return e.podcast_title || e.name;
        if (t.includes(`/feed/podcast/${e.id}/s/`)) {
            const o = (n = (r = t.match(new RegExp("\\/feed\\/podcast\\/\\d+\\/s\\/(?<sectionId>\\d+)\\.rss"))) == null ? void 0 : r.groups) == null ? void 0 : n.sectionId;
            if (!o) return "Unknown section";
            const i = e.sections.find(s => s.id === parseInt(o));
            return i ? i.name : "Unknown Section"
        }
        return "another podcast"
    },
    Wr = ({
        pub: e,
        url: t
    }) => t.includes("api.substack.com") ? t.includes(`/feed/podcast/${e.id}/s/`) || t.includes(`/feed/podcast/${e.id}.rss`) : !1,
    fS = e => {
        if (!e) return {
            can_syndicate: !1,
            hover_text: "Cannot find podcast"
        };
        if (!e.podcast_enabled) return {
            can_syndicate: !1,
            hover_text: "This podcast is not currently enabled."
        };
        if (!e.podcast_feed_url) return {
            can_syndicate: !0,
            hover_text: null
        };
        const t = iu({
            pub: e,
            url: e.podcast_feed_url
        });
        return t ? {
            can_syndicate: !1,
            hover_text: `This podcast is currently redirecting to ${t}.`
        } : {
            can_syndicate: !1,
            hover_text: `This podcast is currently redirecting to ${e.podcast_feed_url}.`
        }
    },
    ES = ({
        pub: e,
        section: t
    }) => {
        var o;
        if (!t.is_podcast) return {
            can_syndicate: !1,
            hover_text: "This section is not currently set up as a podcast."
        };
        const r = ((o = t.podcastSettings) == null ? void 0 : o.podcast_feed_url) || null;
        if (!r) return {
            can_syndicate: !0,
            hover_text: null
        };
        const n = iu({
            pub: e,
            url: r
        });
        return n ? {
            can_syndicate: !1,
            hover_text: `This podcast is currently redirecting to ${n}.`
        } : {
            can_syndicate: !1,
            hover_text: `This podcast is currently redirecting to ${r}.`
        }
    },
    pS = ({
        pub: e
    }) => {
        var r;
        const t = [];
        if (e.podcast_enabled || e.podcast_title) {
            const n = fS(e);
            t.push({
                name: e.podcast_title || e.name,
                description: e.podcast_description || "",
                can_publish_to: n.can_syndicate,
                hover_text: n.hover_text,
                publication_id: e.id,
                section_id: null
            })
        }
        for (const n of (r = e.sections) != null ? r : []) {
            if (!n.is_podcast) continue;
            const o = ES({
                pub: e,
                section: n
            });
            t.push({
                name: n.name,
                description: n.description,
                can_publish_to: o.can_syndicate,
                hover_text: o.hover_text,
                publication_id: e.id,
                section_id: n.id
            })
        }
        return t
    },
    mS = e => !e || !e.podcast_enabled ? !1 : e.podcast_feed_url ? !Wr({
        pub: e,
        url: e.podcast_feed_url
    }) : !0,
    SS = ({
        pub: e,
        section: t
    }) => {
        var n;
        if (!t.is_podcast) return !1;
        const r = ((n = t.podcastSettings) == null ? void 0 : n.podcast_feed_url) || null;
        return r ? !Wr({
            pub: e,
            url: r
        }) : !0
    },
    gS = (e, t = 0) => t ? hS(e, t) : e.email_disabled ? "none" : e.receive_podcast_emails ? "all" : "allButPodcasts",
    hS = (e, t) => {
        var r;
        return !e.email_settings || !e.email_settings[t] ? null : e.email_settings[t] === "disabled" ? "none" : (r = e.section_podcasts_enabled) != null && r.includes(t) ? "all" : "allButPodcasts"
    },
    CS = e => e.filter(t => t.is_live),
    IS = ({
        pub: e,
        includeMainPub: t,
        excludePodcasts: r
    }) => {
        var o;
        if (!e) return [];
        const n = [];
        return t && n.push({
            name: e.name,
            description: e.hero_text,
            logoUrl: e.logo_url,
            sectionId: null,
            linkUrl: Ru(e),
            defaultOn: !0
        }), (o = e.sections) == null || o.forEach(i => {
            r && i.is_podcast && !qs({
                section: i,
                pub: e
            }) || n.push({
                name: i.name,
                description: i.description,
                logoUrl: i.logo_url,
                sectionId: i.id,
                linkUrl: Cu(e, {
                    section: i
                }),
                defaultOn: i.is_default_on
            })
        }), n
    },
    TS = e => {
        var t, r;
        return ((t = e.trial_period_days) != null ? t : 0) > 0 ? "FREE_TRIAL" : ((r = e.extra_seats) != null ? r : 0) > 0 ? "EXTRA_SEATS" : "PERCENT_OFF"
    };

function AS({
    sub: e
}) {
    return !e || !e.plan || !e.is_founding || !e.plan.metadata ? !1 : !e.plan.metadata.fixed_price
}

function Dt({
    plan: e
}) {
    return e.metadata ? !!e.metadata.founding && !e.metadata.fixed_price : !1
}

function RS({
    plan: e
}) {
    return !e || !e.metadata ? !1 : !!e.metadata.founding && !!e.metadata.fixed_price
}
const OS = (e, t) => {
        if (et(e)) {
            if (["newsletter", "thread", "podcast", "video"].includes(t)) return e.sections
        } else return null;
        return null
    },
    bS = e => {
        var r;
        return (typeof window != "undefined" ? ((r = window._preloads) == null ? void 0 : r.customPublicationThemeContext) || [] : []).includes(e)
    },
    su = ({
        post: e,
        section: t,
        pub: r
    }) => {
        var n;
        return e.type === "video" || !!((n = e.podcastFields) != null && n.hide_from_feed) || !t && !r.podcast_enabled || !!(t && !t.is_podcast)
    },
    DS = ({
        post: e,
        pub: t,
        section: r
    }) => e.type === "podcast" && Bt(t) && !su({
        post: e,
        section: r,
        pub: t
    }),
    PS = e => {
        var t, r, n, o, i;
        return !!((n = (r = (t = e == null ? void 0 : e.videoUpload) == null ? void 0 : t.extractedAudio) == null ? void 0 : r.transcription) != null && n.transcript_url) || !!((i = (o = e == null ? void 0 : e.podcastUpload) == null ? void 0 : o.transcription) != null && i.transcript_url)
    },
    NS = e => {
        var t, r, n, o, i, s;
        return (s = (o = (r = (t = e == null ? void 0 : e.videoUpload) == null ? void 0 : t.extractedAudio) == null ? void 0 : r.transcription) != null ? o : (n = e == null ? void 0 : e.podcastUpload) == null ? void 0 : n.transcription) != null ? s : (i = e == null ? void 0 : e.videoUpload) == null ? void 0 : i.transcription
    };

function LS({
    pub: e,
    section: t
}) {
    var r, n;
    return (n = t ? (r = t.podcastSettings) == null ? void 0 : r.paid_podcast_episode_art_url : e.paid_podcast_episode_art_url) != null ? n : null
}

function MS({
    mediaUpload: e
}) {
    return e ? e.explicit || "rekognition_moderation_status" in e && !!e.rekognition_moderation_status && ["auto_explicit", "explicit", "forbidden"].includes(e.rekognition_moderation_status) : !1
}
const VT = Object.freeze(Object.defineProperty({
        __proto__: null,
        canSubscribeToPubPodcast: mS,
        canSubscribeToSectionPodcast: SS,
        canSyndicateVoiceoverDraft: lS,
        checkIfPostHasTranscription: PS,
        feedUrlBelongsToSamePub: Wr,
        filterForPublicSections: CS,
        getAspectRatioFromBucketeerUrl: dS,
        getCouponType: TS,
        getEmailSetting: gS,
        getFoundingTierEnabled: iS,
        getFoundingTierMinimum: sS,
        getFoundingTierName: ou,
        getFoundingTierPlan: $t,
        getLogo: oS,
        getMediaDuration: Qm,
        getMediaFileSize: eS,
        getNewslettersForSubscribeFromPub: IS,
        getPaidOrFoundingTierNameForPost: uS,
        getPaidPodcastImageUrl: LS,
        getPodcastFeedDestinations: pS,
        getPostTranscription: NS,
        getSectionPodcasts: Hr,
        getSectionsForPost: OS,
        hasCustomThemeContext: bS,
        hasFreePodcastUrl: nS,
        hasMultiplePodcasts: Za,
        hasOnePodcast: Jm,
        hasPodcast: Bt,
        hasPodcastPreview: rS,
        hasTopLevelPodcast: Xa,
        hasVoiceover: cS,
        isSectionedPub: et,
        mediaUploadHasProblem: aS,
        mediaUploadIsExplicit: MS,
        paymentsAreEnabled: Xm,
        planFromPubIsClassicFounding: Dt,
        planIsFixedPriceFounding: RS,
        podcastPostIsFreePreview: tS,
        postAppearsInPodcastRssFeed: DS,
        postIsStandaloneVideo: su,
        pubCouldHavePublicPodcastUrl: eu,
        sectionCouldHavePublicPodcastUrl: tu,
        subIsOnClassicFoundingPlan: AS,
        userCouldSeePublicPodcastUrls: zm,
        userCouldSubscribeToPodcast: qm,
        userIsFreeOnly: Zm,
        userIsPaidSubscriber: ru
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    yS = new Set([138155578, 137086721, 135978166, 138762631, 138967817, 140425637, 140631625, 140852480, 141087379, 141531268, 141735208, 142183848, 142428374, 142645863, 142865984]);

function tt({
    pub: e,
    includeTheRampart: t = !1
}) {
    return t && e.id === 1620566 ? !0 : e.id === 87281
}

function YT({
    pub: e
}) {
    return e.id === 2325511
}

function jT({
    pub: e,
    sub: t
}) {
    var r, n, o, i, s, a;
    return !e || !t || !wS({
        pub: e
    }) || !t.totalAmount || t.is_group_parent ? null : tt({
        pub: e
    }) ? !t.is_founding || !t.plan ? null : (r = t.plan) != null && r.amount && t.plan.amount >= 12e4 || ((n = t.plan) == null ? void 0 : n.interval) === "month" && t.plan.amount && t.plan.amount >= 1e4 ? {
        numSeats: 6,
        couponCode: "0af6dce7"
    } : (o = t.plan) != null && o.amount && t.plan.amount >= 25e3 || ((i = t.plan) == null ? void 0 : i.interval) === "month" && t.plan.amount && t.plan.amount >= 2500 ? {
        numSeats: 3,
        couponCode: "b2f6a20f"
    } : null : e.subdomain === "pinespayments" ? (s = t.plan) != null && s.amount && t.plan.amount >= 12e4 ? {
        numSeats: 6,
        couponCode: "0371e499"
    } : (a = t.plan) != null && a.amount && t.plan.amount >= 3e4 ? {
        numSeats: 3,
        couponCode: "557e2314"
    } : null : null
}

function wS({
    pub: e
}) {
    return tt({
        pub: e
    }) || e.subdomain === "pinespayments"
}

function JT({
    post: e
}) {
    return e ? yS.has(e.id) && !!e.podcast_preview_upload_id : !1
}

function zT({
    pub: e,
    benefits: t,
    plan: r
}) {
    if (!tt({
            pub: e
        }) || !Oa(r)) return t;
    const n = [];
    return Dt({
        plan: r
    }) ? n.push({
        benefit: "Navigator memberships help to fuel our growth and ensure our longevity. ",
        checked: !0
    }) : n.push({
        benefit: "Founding memberships help to keep The Bulwark available to the widest possible audience.",
        checked: !0
    }), n.push({
        benefit: "Unlimited access to our newsletters, ad-free and member-only podcasts, weekly livestreams and more…",
        checked: !0
    }), Dt({
        plan: r
    }) ? n.push({
        benefit: "6 free gift memberships to give to friends and family",
        checked: !0
    }) : n.push({
        benefit: "3 free gift memberships to give to friends and family",
        checked: !0
    }), n.push({
        benefit: "2 Bulwark virtual town hall meetings with Bulwark editors and staff and invites to informal meet-ups before Bulwark live shows.",
        checked: !0
    }), n
}
const Kr = {
        87908: "morning-shots",
        87934: "the-triad",
        87969: "press-pass",
        87950: "overtime",
        87957: "bulwark-podcast",
        87956: "screen-time",
        87963: "the-next-level",
        104848: "george-conway-explains-it-all",
        87971: "the-focus-group",
        87958: "beg-to-differ",
        87975: "movie-aisle",
        87961: "the-secret-podcast",
        87964: "between-us",
        87978: "thursday-night-bulwark"
    },
    Vr = {
        62624: "morning-shots",
        62631: "the-triad",
        62634: "overtime",
        62636: "press-pass",
        62639: "bulwark-podcast",
        62641: "beg-to-differ",
        62642: "the-secret-podcast",
        62644: "the-next-level",
        62645: "movie-aisle",
        62646: "between-us",
        62647: "the-focus-group",
        62648: "thursday-night-bulwark"
    },
    Jn = new Set(["between-us", "the-secret-podcast", "the-next-level", "bulwark-podcast", "beg-to-differ", "the-focus-group", "thursday-night-bulwark"]),
    qT = ({
        sectionId: e
    }) => !!e && (Jn.has(Kr[e]) || Jn.has(Vr[e])),
    zn = new Set(["between-us", "the-secret-podcast", "thursday-night-bulwark"]),
    ZT = ({
        sectionId: e
    }) => !!e && (zn.has(Kr[e]) || zn.has(Vr[e])),
    qn = new Set(["the-focus-group", "beg-to-differ", "the-next-level"]),
    XT = ({
        sectionId: e
    }) => e && (qn.has(Kr[e]) || qn.has(Vr[e])) ? ["audio", "video"] : ["audio"];
var ar = {
        exports: {}
    },
    Zn = typeof crypto != "undefined" && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && msCrypto.getRandomValues.bind(msCrypto);
if (Zn) {
    var Xn = new Uint8Array(16);
    ar.exports = function() {
        return Zn(Xn), Xn
    }
} else {
    var Qn = new Array(16);
    ar.exports = function() {
        for (var t = 0, r; t < 16; t++) t & 3 || (r = Math.random() * 4294967296), Qn[t] = r >>> ((t & 3) << 3) & 255;
        return Qn
    }
}
var US = ar.exports,
    au = [];
for (var Et = 0; Et < 256; ++Et) au[Et] = (Et + 256).toString(16).substr(1);

function vS(e, t) {
    var r = t || 0,
        n = au;
    return n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]]
}
var kS = vS,
    BS = US,
    $S = kS;

function xS(e, t, r) {
    var n = t && r || 0;
    typeof e == "string" && (t = e === "binary" ? new Array(16) : null, e = null), e = e || {};
    var o = e.random || (e.rng || BS)();
    if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t)
        for (var i = 0; i < 16; ++i) t[n + i] = o[i];
    return t || $S(o)
}
var FS = xS;
const GS = F(FS),
    HS = (e, {
        softMax: t = 32,
        hardMax: r = 48,
        extension: n = !1,
        extensionSeparator: o = "-"
    } = {}) => {
        let i = xt(e);
        if (i.length > t) {
            const a = i.indexOf("-", t);
            a !== -1 && (i = i.substr(0, a))
        }
        i.length > r && (i = i.substr(0, r));
        const s = n && typeof n == "string" ? n : GS().substr(0, 3);
        return i ? n && (i += `${o}${s}`) : i = s, i
    },
    xt = (e, {
        hashIfEmpty: t = !1,
        allowUnicode: r = !1
    } = {}) => {
        const n = (e || "").toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, "-").replace(/&/g, "-and-").replace(r ? /[^\p{L}-]+/gu : /[^\w-]+/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
        return e && typeof e == "string" && !n && t ? Array.from(e).map(o => o.codePointAt(0)).map(o => {
            var i;
            return (i = o == null ? void 0 : o.toString(16)) != null ? i : ""
        }).join("").substring(0, 12) : n
    },
    fe = "substack.com",
    Ae = "https://substackcdn.com";

function le(e) {
    let t = "https://",
        r = "";
    return t + e + r
}
const WS = le(fe),
    KS = new URL(WS);

function uu(e, {
    forceSubdomain: t = !1
} = {}) {
    if (e && "custom_domain" in e && e.custom_domain && !e.custom_domain_optional && !t) return e.custom_domain;
    let r = fe;
    return e && e.subdomain !== "www" && (r = `${e.subdomain}.${r}`), r
}

function de(e) {
    return Object.keys(e).filter(t => typeof e[t] != "undefined" && e[t] !== null).map(t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")
}

function h(e, t) {
    if (!e) return "";
    if (!t) return e;
    const r = de(t),
        n = r ? e.indexOf("?") === -1 ? "?" : "&" : "";
    return `${e}${n}${r}`
}

function T(e, {
    forceSubdomain: t = !1
} = {}) {
    if (e && "rss_website_url" in e && e.rss_website_url) try {
        return new URL(e.rss_website_url).origin
    } catch (n) {
        return e.rss_website_url
    } else if (e && "base_url" in e && e.base_url && !t) return e.base_url;
    const r = uu(e, {
        forceSubdomain: t
    });
    return le(r)
}

function B() {
    return T()
}

function cu(e) {
    return le(e)
}

function ce() {
    return le(`open.${fe}`)
}

function rt(e, {
    noBase: t,
    urlParams: r
} = {}) {
    const n = t ? "" : T();
    return h(`${n}${e}`, r)
}

function VS({
    id: e,
    name: t,
    handle: r
}) {
    if (r) return `@${r}`;
    const n = xt(t, {
        hashIfEmpty: !0
    });
    return `${e}${n?`-${n}`:""}`
}

function lu(e, t, {
    searchParams: r,
    noBase: n,
    baseUrl: o
} = {}) {
    const s = `${n?"":o!=null?o:B()}/profile/${VS({id:e,name:t})}`;
    return h(s, r)
}
const YS = (e, {
    searchParams: t,
    noBase: r,
    baseUrl: n
} = {}) => {
    const i = `${r?"":n!=null?n:B()}/@${e}`;
    return h(i, t)
};

function Be(e, {
    utm_source: t,
    utm_content: r,
    noBase: n,
    baseUrl: o,
    noHandle: i,
    extraParams: s
} = {}) {
    const a = t || r ? {
            utm_source: t,
            utm_content: r
        } : void 0,
        u = N(N({}, s), a),
        l = i ? void 0 : (e == null ? void 0 : e.handle) || (e == null ? void 0 : e.author_handle);
    return l ? YS(l, {
        noBase: n,
        baseUrl: o,
        searchParams: u
    }) : lu(e.author_id || e.user_id || e.id, e.user_profile_name || e.author_name || e.name, {
        noBase: n,
        baseUrl: o,
        searchParams: u
    })
}

function QT(e) {
    return `${Be(e)}?follow`
}

function eA(e, t, r) {
    return rt(`${Be(e,{noBase:!0})}/${t!=null?t:"subscribers"}`, r)
}

function jS(e = {}) {
    return h(`${B()}/profile/start`, e)
}
const JS = "home",
    Pe = `/${JS}`,
    _u = "/notes",
    zS = `${Pe}/`;

function tA(e) {
    return e === Pe || e.startsWith(zS)
}
const qS = /^([cp])-(\d+)$/,
    ZS = /^\/note\/([cp])-(\d+)$/,
    XS = /^\/profile\/(\d+)-([^\/]+)\/note\/c-(\d+)$/,
    QS = /^\/profile\/(\d+)-([^\/]+)\/note\/p-(\d+)$/,
    eg = /^\/@[^\/]+\/note\/c-(\d+)$/,
    tg = /^\/@[^\/]+\/note\/p-(\d+)$/,
    rg = new RegExp(`${Pe}/(short|post)/p-(\\d+)`);

function rA(e) {
    const t = og(e);
    if (t) return t;
    const r = ng(e);
    if (r) return r;
    const n = sg(e);
    return n || null
}
const du = new RegExp(`^${_u}(/?)`);

function nA(e) {
    return !!e.match(du)
}

function oA(e) {
    return e.replace(du, `${Pe}$1`)
}

function ng(e) {
    const t = e.match(QS);
    if (t) return {
        type: "post",
        id: Number(t[3]),
        author: {
            id: Number(t[1]),
            name: t[2]
        }
    };
    const r = e.match(tg);
    if (r) return {
        type: "post",
        id: Number(r[1])
    };
    const n = e.match(rg);
    return n ? {
        type: n[1] === "short" ? "post" : "postViewer",
        id: Number(n[2])
    } : null
}

function og(e) {
    const t = e.match(XS);
    if (t) return {
        type: "comment",
        id: Number(t[3]),
        author: {
            id: Number(t[1]),
            name: t[2]
        }
    };
    const r = e.match(eg);
    return r ? {
        type: "comment",
        id: Number(r[1])
    } : null
}
const ig = new RegExp(`^${_u}/comment/(d+)$`);

function iA(e) {
    return e.match(ig)
}

function sg(e) {
    const t = e.match(ZS);
    return t ? {
        type: t[1] === "c" ? "comment" : "post",
        id: Number(t[2])
    } : null
}

function sA(e) {
    const t = e.match(qS);
    return t ? {
        type: t[1] === "c" ? "comment" : "post",
        id: Number(t[2])
    } : null
}

function Ft({
    baseUrl: e,
    urlParams: t
} = {}) {
    var o;
    let r = Pe;
    const n = e != null ? e : B();
    return (typeof window == "undefined" || !((o = window.location.href) != null && o.startsWith(n))) && (r = n + r), h(r, t)
}

function aA({
    baseUrl: e,
    urlParams: t
} = {}) {
    const r = Ft({
        baseUrl: e
    });
    return h(`${r}/suggestions`, t)
}

function uA(e, t, {
    noBase: r,
    urlParams: n
} = {}) {
    var i, s;
    const o = (i = t.publishedBylines) != null && i[0] ? (s = t.publishedBylines) == null ? void 0 : s[0] : e ? Ls(e, t) : {
        id: 0,
        name: "someone"
    };
    return h(`${Be(o,{noBase:r})}/note/${jr(t.id)}`, n)
}

function cA(e, {
    isPreview: t = !1
}) {
    return `${B()}/embed/c/${e.id}?origin=${window.location.origin}${t?"&isPreview=true":""}`
}

function fu(e, {
    noBase: t,
    baseUrl: r,
    urlParams: n,
    noHandle: o
} = {}) {
    return e.user_id ? h(`${Be(Ms(e),{baseUrl:r,noBase:t,noHandle:o})}/note/${Yr(e.id)}`, n) : Ft({
        baseUrl: r
    })
}

function ag(e, {
    noBase: t,
    urlParams: r
} = {}) {
    const n = t ? "" : T();
    return h(`${n}/note/${Yr(e)}`, r)
}

function ug(e, {
    noBase: t,
    urlParams: r
} = {}) {
    const n = t ? "" : T();
    return h(`${n}${Pe}/post/${jr(e)}`, r)
}

function lA(e, t) {
    return rt(`/note/${jr(e)}/restacks`, t)
}

function _A(e, t, r) {
    return rt(`/note/${e}/restacks${t==="notes"?"/notes":"/instants"}`, r)
}

function dA(e, t) {
    return `${t==="comment"?"c":"p"}-${e}`
}

function Yr(e) {
    return `c-${e}`
}

function jr(e) {
    return `p-${e}`
}

function fA(e) {
    return h(Ft(), N({
        action: "compose"
    }, e))
}

function EA(e, {
    noBase: t
} = {}) {
    return `${t?"":T()}/note/${Yr(e)}/preview.jpg`
}

function nt(e, t, {
    noBase: r,
    edit: n,
    email: o,
    comments: i,
    commentId: s,
    commentInput: a,
    highlightComment: u,
    replyToComment: l,
    commentContextId: c,
    uuid: m,
    urlParams: d,
    signedIn: E = !1,
    feedViewer: C = !1,
    clipId: _
} = {}) {
    if ((e == null ? void 0 : e.type) === "rss" && t) return t.canonical_url || e.rss_website_url;
    const f = t ? m ? t.uuid : t.slug : null;
    if ((n || !f) && e && (t != null && t.id)) {
        const g = r ? "" : T(e),
            P = !!(t != null && t.editor_v2);
        return `${g}${pu(e,t.id,P,d)}`
    }
    if ((t == null ? void 0 : t.type) === "restack" && (t != null && t.id)) return `${r?"":T(e)}/cp/${t.id}`;
    if (C || !e || !t || !f) {
        const g = r ? "" : T();
        return s ? ag(s, {
            noBase: r,
            urlParams: d
        }) : t && _ ? h(`${T(e)}/p/${t.slug}`, d) : t ? ug(t.id, {
            noBase: r,
            urlParams: d
        }) : h(`${g}${Pe}`, d)
    }
    const S = ot(E, e);
    return Eu(e, f, {
        noBase: r,
        email: o,
        comments: i,
        commentId: s,
        commentInput: a,
        highlightComment: u,
        replyToComment: l,
        commentContextId: c,
        urlParams: N({
            lli: S
        }, d)
    })
}

function pA(e, t, {
    isPreview: r = !1
}) {
    return `${T(e)}/embed/p/${t}?origin=${window.location.origin}${r?"&isPreview=true":""}`
}

function Eu(e, t, {
    noBase: r,
    email: n,
    comments: o,
    commentId: i,
    commentInput: s,
    highlightComment: a,
    replyToComment: u,
    commentContextId: l,
    urlParams: c
} = {}) {
    let m = "";
    return r || (m += T(e)), m += `/p/${t}`, o && (!i || a) && (m += "/comments"), i && !a && !l && (m += `/comment/${i}`), n && (m += "/email"), c && (m = h(m, c)), i && (a || u) ? m += `#comment-${i}${u?"-reply":""}` : s && (m += "#input"), i && l && (m += `/comment/${l}#comment-${i}`), m
}

function Jr(e, t, r, n) {
    return nt(e, t, N({
        comments: !0,
        commentId: r == null ? void 0 : r.id
    }, n))
}

function cg({
    mediaUploadId: e
}) {
    return `media-${e}`
}

function mA({
    pub: e,
    post: t,
    mediaUploadId: r
}) {
    return `${nt(e,t)}#${cg({mediaUploadId:r})}`
}

function pu(e, t, r, n) {
    return h(`${r?"/publish/collab":"/publish/post"}/${t}`, n)
}

function ot(e, t) {
    return t.custom_domain && e ? "1" : void 0
}

function lg(e, {
    addBase: t,
    params: r,
    signedIn: n
} = {}) {
    const o = ot(n, e),
        i = t ? T(e) : "";
    return h(`${i}/account`, N({
        lli: o
    }, r))
}

function SA(e, t, r, n) {
    return t.post_id ? Jr(r != null ? r : void 0, e != null ? e : void 0, t, n) : fu(t, n)
}

function mu(e, {
    root: t,
    user: r,
    addBase: n,
    skipToken: o = !1,
    params: i = {}
} = {}) {
    var s;
    if (t ? /[&?]$/.test(t) || (t.includes("?") || t.endsWith("%%") ? t += "&" : t += "?") : t = n ? `${T(e)}/subscribe?` : "/subscribe?", r != null && r.email) i.autoSubmit = !0, i.email = r == null ? void 0 : r.email;
    else if (!i.token && !o) {
        const a = typeof window != "undefined" && ((s = window._preloads) != null && s.original_url) ? Xr(window._preloads.original_url, "token") : null;
        i.token = a
    }
    return t + de(i)
}

function gA({
    pub: e,
    user: t,
    params: r
}) {
    var n, o;
    return mu(e, {
        addBase: !0,
        user: t,
        params: N(N({}, r), tt({
            pub: e
        }) ? {
            plan: "yearly300usd",
            upgrade_to_founding: !0
        } : {
            selectedPlanId: (o = (n = e.plans) == null ? void 0 : n.find(i => {
                var s;
                return (s = i.metadata) == null ? void 0 : s.founding
            })) == null ? void 0 : o.id
        })
    })
}

function Su({
    pubId: e,
    postId: t,
    commentId: r,
    noBase: n,
    params: o
}) {
    const i = n ? "" : B();
    return h(`${i}/chat${e?`/${e}`:""}${t?`/post/${t}`:""}${r?`/reply/${r}`:""}`, o)
}

function _g(e, {
    root: t,
    addBase: r,
    params: n = {}
} = {}) {
    return t ? /[&?]$/.test(t) || (t.includes("?") || t.endsWith("%%") ? t += "&" : t += "?") : t = r ? `${T(e)}/donate?` : "/donate?", t + de(n)
}

function hA(e, {
    utm_source: t
} = {}) {
    return h(`${T(e)}/account/billing?details`, {
        utm_source: t
    })
}

function CA(e, {
    utm_source: t
} = {}) {
    return h(`${T(e)}/account/receipts`, {
        utm_source: t
    })
}

function IA(e, {
    utm_source: t
} = {}) {
    return h(`${T(e)}/account/email-test`, {
        utm_source: t
    })
}

function TA({
    utm_source: e
} = {}) {
    return h(`${B()}/account/email`, {
        utm_source: e
    })
}

function AA(e) {
    return `${T(e)}/account`
}

function RA({
    pub: e
}) {
    return h(`${T(e)}/account`, {
        extra_seats: !0
    })
}
const dg = (e, t = {}) => h(`${T(e)}/account/group`, t);

function it(e, {
    addBase: t,
    baseUrlOptions: r
} = {}) {
    return `${t?T(e,r):""}/publish`
}

function fg(e, {
    addBase: t = !1,
    baseUrlOptions: r = {},
    section: n = "",
    params: o
} = {}) {
    let i = h(`${it(e,{addBase:t,baseUrlOptions:r})}/settings`, o);
    return n && (i += `#${n}`), i
}

function Eg(e, {
    addBase: t = !1,
    baseUrlOptions: r = {},
    params: n
} = {}) {
    return h(`${it(e,{addBase:t,baseUrlOptions:r})}/groups`, n)
}

function pg(e, {
    addBase: t,
    params: r
} = {}) {
    const o = `${t?T(e):""}/publish`;
    return r ? h(o, r) : o
}

function mg(e, {
    addBase: t,
    params: r
} = {}) {
    const o = `${t?T(e):""}/publish/home`;
    return r ? h(o, r) : o
}

function OA(e, t = "published", {
    addBase: r,
    params: n
} = {}) {
    const i = `${r?T(e):""}/publish/posts/${t}`;
    return n ? h(i, n) : i
}

function Sg(e, {
    addBase: t,
    params: r
} = {}) {
    const o = `${t?T(e):""}/publish/subscribers`;
    return r ? h(o, r) : o
}

function bA(e, t, {
    addBase: r,
    params: n,
    referrer: o
} = {}) {
    const s = `${r?T(e):""}/meetings/book/${t}`,
        a = K(N({}, n), {
            referrer: o
        });
    return n || o ? h(s, a) : s
}

function DA(e, {
    addBase: t,
    params: r,
    referrer: n
} = {}) {
    const i = `${t?T(e):""}/meetings`,
        s = K(N({}, r), {
            referrer: n
        });
    return r || n ? h(i, s) : i
}

function PA(e, {
    addBase: t,
    params: r,
    filter: n
} = {}) {
    const i = `${t?T(e):""}/publish/meetings/${n!=null?n:"upcoming"}`;
    return r ? h(i, r) : i
}

function gg({
    user_id: e,
    user_name: t,
    utm_source: r,
    utm_campaign: n,
    redirect: o
}) {
    let i = `${ce()}/users/${e}`;
    const s = xt(t, {
        hashIfEmpty: !0
    });
    return s && (i += `-${s}`), h(i, {
        utm_source: r,
        utm_campaign: n,
        redirect: o
    })
}

function NA({
    tab: e,
    utm_source: t,
    utm_campaign: r,
    redirect: n
}) {
    return h(`${ce()}/${e}`, {
        utm_source: t,
        utm_campaign: r,
        redirect: n
    })
}

function LA({
    subdomain: e,
    utm_source: t,
    utm_campaign: r,
    redirect: n
}) {
    return h(`${ce()}/pub/${e}`, {
        utm_source: t,
        utm_campaign: r,
        redirect: n
    })
}

function MA({
    pubKey: e,
    utm_source: t,
    utm_campaign: r,
    r: n,
    redirect: o,
    modal: i
}) {
    return h(`${ce()}/pub/${e}/chat`, {
        utm_source: t,
        utm_campaign: r,
        redirect: o,
        modal: i,
        r: n
    })
}

function yA({
    postId: e,
    targetReplyId: t,
    utm_source: r,
    utm_campaign: n,
    showTarget: o,
    redirect: i,
    modal: s
}) {
    return h(`${ce()}/chat/posts/${e}`, {
        target_reply_id: t,
        utm_source: r,
        utm_campaign: n,
        showTarget: o,
        redirect: i,
        modal: s
    })
}

function wA({
    commentId: e,
    targetReplyId: t,
    utm_source: r,
    utm_campaign: n,
    showTarget: o,
    redirect: i,
    modal: s
}) {
    return h(`${ce()}/chat/replies/${e}`, {
        target_reply_id: t,
        showTarget: o,
        utm_source: r,
        utm_campaign: n,
        redirect: i,
        modal: s
    })
}

function UA(e, t) {
    return Su({
        pubId: e,
        postId: t,
        noBase: !0
    })
}

function vA(e, t, r) {
    return Su({
        pubId: e,
        postId: t,
        noBase: !0,
        params: {
            targetReplyId: r,
            showTarget: !0
        }
    })
}

function kA(e, {
    urlParams: t
} = {}) {
    return fu(e, {
        baseUrl: ce(),
        urlParams: t
    })
}

function BA({
    pub: e,
    params: t,
    section: r
}) {
    return h(r ? `${T(e)}/listen/${r.slug}/archive` : `${T(e)}/podcast/archive`, t)
}

function J(e, t, {
    quality: r = "auto:good",
    format: n = "auto",
    crop: o = "limit",
    lossy: i = !1,
    attachment: s = !1,
    filename: a = null,
    gravity: u = null,
    height: l = null,
    aspect: c = null,
    backgroundColor: m,
    version: d = null,
    smartCrop: E = !1,
    portraitCrop: C = !1,
    skipDomainValidation: _ = !1,
    leadingSegments: f = [],
    trailingSegments: S = []
} = {}) {
    var M;
    if (!e) return e;
    e.startsWith("/") && !e.startsWith("//") && (e = B() + e), e = gu(e);
    try {
        if (new URL(e).hostname.endsWith(".localhost")) return e
    } catch (y) {}
    if (typeof window != "undefined" && ((M = window == null ? void 0 : window.location) != null && M.hostname) && ["subwit.com", "herokuapp.com"].reduce((y, R) => y || window.location.hostname.endsWith(R), !1) && (e = e.replace("//substack.com", `//${window.location.hostname}`)), e.startsWith("https://substackcdn.com") || e.startsWith(Ae)) return e;
    if (e.startsWith("https://d3b3sm9t19x0yd.cloudfront.net")) return e.replace(/^https:\/\/d3b3sm9t19x0yd\.cloudfront\.net/, Ae);
    if (e.startsWith("https://res.cloudinary.com")) return e.replace(/^https:\/\/res\.cloudinary\.com\/[^/]+/, Ae);
    if (!_ && !e.match(/^https?:\/\/(bucketeer[^/]*\.s3\.amazonaws\.com|(.*\.)?substack\.com|substack\.info|substack-post-media\.s3\.amazonaws\.com|substack-post-media-staging\.s3\.amazonaws\.com|substack-video\.s3\.amazonaws\.com|substack-video-staging\.s3\.amazonaws\.com|substack-staging-pr-\d+\.herokuapp\.com|.*\.ngrok\.io|.*\.subwit\.com|www\.shatnerchatner\.com|cyberrisk\.news|proofofwork\.news|www\.trapital\.co|www\.truehoop\.com|www\.creditwritedowns\.com|sinocism\.com|nb\.sinocism\.com|popular\.info|robertcottrell\.com|pbs\.twimg\.com|www\.theupside\.us|www\.exponentialview\.co|storage\.opensea\.io).*/)) return e;
    if (E && t && l) {
        const y = hu(e);
        if (y) {
            const R = t / l,
                D = y.width / y.height;
            (R < 1 && D >= 1 || R >= 1 && D < 1 || R === 1 && D >= 1 || R === 1 && D <= 1) && Math.abs(R - D) >= .5 && (o = "fill", u = u != null ? u : "auto")
        }
    }
    if (E && (o = "fill", u = u != null ? u : "auto"), c && t && l == null) {
        const [y, R] = c.split(":").map(Number);
        l = Math.round(t * R / y)
    }
    const g = y => y.replace(/,/g, "%252C"),
        P = [t && `w_${t}`, l && `h_${l}`, o && (t || l) && `c_${o}`, n && `f_${n}`, r && `q_${r}`, `fl_${i?"lossy":"progressive:steep"}`, u && `g_${u}`, s && `fl_attachment${a?`:${g(a)}`:""}`, m && `b_rgb:${m}`].filter(Boolean).join(","),
        L = [t && `w_${t}`, n && `f_${n}`, r && `q_${r}`, `fl_${i?"lossy":"progressive:steep"}`, s && `fl_attachment${a?`:${g(a)}`:""}`, m && `b_rgb:${m}`].filter(Boolean).join(","),
        A = [o && (t || l) && `c_${o}`, u && `g_${u}`, c ? `ar_${c}` : "ar_1"].filter(Boolean).join(","),
        b = C ? [L, "/if_ar_lt_1.0/", A, "/if_end"].join("") : [P].filter(Boolean).join(",");
    return `${Ae}/image/fetch/${f.concat([b]).concat(S).join("/")}/${encodeURIComponent(e+(d?`${e.indexOf("?")!==-1?"&":"?"}version=${d}`:""))}`
}

function gu(e) {
    if (!e) return e;
    const t = [/^https:\/\/substackcdn\.com\/image\/fetch\/(?:\$[^/]+\/)?[^/]+\/(.+)$/i, /^https:\/\/substackcdn\.net\/image\/fetch\/(?:\$[^/]+\/)?[^/]+\/(.+)$/i, /^https:\/\/cdn\.substack\.com\/image\/fetch\/(?:\$[^/]+\/)?[^/]+\/(.+)$/i, /^https:\/\/cdn\.substack\.info\/image\/fetch\/(?:\$[^/]+\/)?[^/]+\/(.+)$/i, /^https:\/\/d3b3sm9t19x0yd\.cloudfront\.net\/image\/fetch\/(?:\$[^/]+\/)?[^/]+\/(.+)$/i, /^https:\/\/res\.cloudinary\.com\/hhsslviub\/image\/fetch\/(?:\$[^/]+\/)?[^/]+\/(.+)$/i];
    for (const r of t) {
        const n = r.exec(e);
        if (n) return decodeURIComponent(n[1])
    }
    return e
}

function hu(e) {
    const t = e.match(/(\d+)x(\d+)(\.\w+)?$/);
    return t ? {
        width: +t[1],
        height: +t[2]
    } : null
}

function $A(e, t) {
    return `${T(e)}/api/v1/custom-publication-theme/${t.id}/preview`
}

function xA(e) {
    return `${T(e)}/api/v1/custom-publication-theme/disable-preview`
}
const FA = "https://substack.link/chat-faq";

function st(e) {
    const t = e.trim();
    if (/\s/.test(t)) return null;
    try {
        const r = new URL(t);
        return ["http:", "https:"].includes(r.protocol) ? r : null
    } catch (r) {
        return null
    }
}
const GA = (e, t, r, n) => {
    switch (e) {
        case "user":
        default:
            return gg({
                user_id: t,
                user_name: r,
                utm_source: "mentions"
            });
        case "pub":
            return n ? h(n, {
                utm_source: "mentions"
            }) : ""
    }
};

function HA(e) {
    var i;
    const t = st(e);
    if (!t) return null;
    const r = (i = t.pathname.match(/^\/p\/([^\/]+)$/)) == null ? void 0 : i[1];
    if (!r) return null;
    let n, o;
    return t.hostname.endsWith(`.${KS.hostname}`) ? n = t.hostname.split(".")[0] : o = t.hostname, {
        slug: r,
        subdomain: n,
        customDomain: o
    }
}

function hg(e, t, {
    addBase: r = !1,
    query: n = {}
} = {}) {
    return h(`${r?T(e):""}/t/${t.slug}`, n)
}
const WA = ({
        section: e
    }) => `/publish/settings/new_podcast/${e.id}`,
    KA = ({
        section: e
    }) => e ? `/publish/import/podcast/${e.id}` : "",
    VA = ({
        pub: e,
        addBase: t
    }) => `${t?T(e):""}/publish/settings/podcast/edit`,
    YA = ({
        pub: e,
        section: t,
        addBase: r,
        referrer: n
    }) => t ? `${r?T(e):""}/publish/settings/podcast/${t.id}${n?`?referrer=${n}`:""}` : (console.error("section is missing when passed to getEditSectionPodcastUrl"), "");

function jA({
    pub: e,
    section: t
}) {
    const n = `${T(e)}/publish/settings/podcast`;
    return t ? `${n}/${t.id}` : `${n}/edit`
}

function JA({
    pub: e
}) {
    return `${T(e)}/publish/podcast/new`
}
const zr = "https://dashboard.stripe.com",
    zA = (e, t) => `${zr}/${e.stripe_user_id}/prices/${t}`,
    qA = (e, t) => `${zr}/${e.stripe_user_id}/invoices/${t}`;

function ZA(e) {
    return e ? e.startsWith("https://images.unsplash.com/") : !1
}

function XA(e) {
    if (e) {
        if (e.startsWith(Ae) || e.startsWith("https://res.cloudinary.com") || e.startsWith("https://bucketeer")) return !0;
        const t = `https://${wr()}.s3.amazonaws.com`;
        if (e.startsWith(t)) return !0
    }
    return !1
}

function Cg(e) {
    if (!e) return !1;
    let t;
    try {
        t = new URL(e)
    } catch (o) {
        return !1
    }
    const {
        hostname: r,
        pathname: n
    } = t;
    return r.startsWith("open.substack.com") ? n.startsWith("/pub/") && n.includes("/p/") : !1
}

function QA(e, t, {
    addBase: r
} = {}) {
    var n, o;
    return t.section ? Cu(e, {
        addBase: r,
        section: t.section
    }) : t.post ? nt(e, t.post, {
        noBase: !r
    }) : t.postTag ? hg(e, t.postTag, {
        addBase: r
    }) : r && /^\/[^/]/.test((n = t.link_url) != null ? n : "") ? `${T(e)}${t.link_url}` : (o = t.link_url) != null ? o : ""
}

function Cu(e, {
    addBase: t,
    section: r
} = {}) {
    if (r = r || (e == null ? void 0 : e.section), !r) throw new Error("Section not found");
    return `${t?T(e):""}/s/${r.slug||r.id}`
}

function eR(e, {
    addBase: t,
    section: r
} = {}) {
    if (r = r || (e == null ? void 0 : e.section), !r) throw new Error("Section not found");
    const n = t ? T(e) : "";
    return h(`${n}/publish/settings/preamble`, {
        section: r.id
    })
}
const Ig = (e, {
        addBase: t,
        params: r
    } = {}) => {
        const n = t && e ? exports.getBaseUrl(e) : "";
        return Iu(N({
            base: n
        }, r))
    },
    Iu = e => {
        var r;
        const t = `${(r=e==null?void 0:e.base)!=null?r:""}/api/v1/twitter/authorize`;
        return e ? h(t, e) : t
    },
    tR = e => {
        var r;
        const t = `${(r=e==null?void 0:e.base)!=null?r:""}/api/v1/fb/auth`;
        return e ? h(t, e) : t
    };

function rR(e, t) {
    return h(`${T()}/inbox/post/${e}`, t)
}

function eo(e) {
    const t = /^https?:\/\/open\.substack\.com(?:\.localhost:5000)?\/pub\/([^\/]+)/,
        r = /^https?:\/\/([^\.]+)\.substack\.com/;
    let n = e.match(t);
    return !n && (n = e.match(r), !n) ? null : n[1]
}

function Tg(e) {
    e = (e || "").toLowerCase();
    const t = e.match(/^\s*(\w+)\s*$/);
    if (t) return t[1];
    const r = e.match(/\w+(\.\w+)+/);
    if (r) {
        let n = r[0];
        return n.includes("substack") && (n = n.split(".")[0]), n
    }
}

function nR({
    url: e,
    currentSubdomain: t,
    currentCustomDomain: r
}) {
    return Cg(e) ? t === eo(e) : r ? r === Tg(e) : t === eo(e)
}
const Ag = (e, {
        addBase: t,
        params: r
    } = {}) => {
        const n = t ? T(e) : "";
        return h(`${n}/account/cancel`, r)
    },
    oR = (e, t, {
        addBase: r,
        referrer: n,
        params: o
    } = {}) => {
        const s = `${r?T(e):""}/publish/posts/detail/${t}`,
            a = K(N({}, o), {
                referrer: n
            });
        return o || n ? h(s, a) : s
    },
    Rg = (e, t, {
        addBase: r,
        referrer: n,
        params: o,
        selectionForQuote: i,
        alreadyPublished: s
    } = {}) => {
        const u = `${r?T(e):""}/publish/posts/detail/${t}/share-center`,
            l = K(N({}, o), {
                referrer: n,
                selectionForQuote: i,
                alreadyPublished: s
            });
        return o || n || i ? h(u, l) : u
    },
    iR = (e, t, {
        addBase: r,
        params: n
    } = {}) => {
        if (!(e != null && e.id)) return "";
        const o = r ? T(e) : "";
        return h(`${o}/leaderboard?`, N(N({}, n), (t == null ? void 0 : t.id) && {
            referrer_token: t.id.toString(36)
        }))
    },
    sR = (e, t) => {
        if (!e) return "";
        const r = T(e);
        return `${te.SURVEY_URL_PREFIX}${r}/survey/${t}?token=${te.SURVEY_TOKEN}`
    },
    aR = (e, t, {
        popup: r
    }) => {
        const n = T(e);
        return h(`${n}/publish/stats/reader-surveys-editor/${t}${r?"?popup=true":""}`)
    };

function Og({
    pubId: e,
    sectionId: t,
    token: r
}) {
    if (t) {
        let o = `${T({subdomain:"api"})}/feed/podcast/${e}/s/`;
        return r ? o += `${t}/private/${r}.rss` : o += `${t}.rss`, o
    }
    let n = `${T({subdomain:"api"})}/feed/podcast/${e}`;
    return r ? n += `/private/${r}.rss` : n += ".rss", n
}
const uR = ({
        pub: e,
        postId: t,
        params: r = {
            type: "newsletter",
            mediaType: "video"
        },
        addBase: n
    }) => {
        const o = `${n?T(e):""}/publish/collab`;
        return h(t ? `${o}/${t}` : o, r)
    },
    cR = (e, {
        addBase: t,
        baseUrlOptions: r,
        params: n
    } = {}) => {
        const o = t ? T(e, r) : "";
        return h(`${o}/publish/stats/pledges`, n)
    },
    lR = (e, {
        addBase: t,
        baseUrlOptions: r,
        params: n
    } = {}) => {
        const o = t ? T(e, r) : "";
        return h(`${o}/publish/stats/notes`, n)
    };

function _R(e, t) {
    return rt(`/collection/${e}`, t)
}

function dR(e = {}) {
    return h(`${B()}/invite-friends`, e)
}

function fR(e = {}) {
    return h(`${B()}/credit-invite-accepted`, e)
}

function ER(e, t = {}) {
    return h(`${B()}/reader-onboarding?credit_token_referring_user=${e}`, t)
}

function pR(e, t = {}) {
    return h(`${B()}/accept-pub-credit?credit_token_referring_user=${e}`, t)
}

function mR(e) {
    return rt("/chat", e)
}

function SR(e) {
    return `${B()}/api/v1/list/cover_image/${e.id}.jpg`
}

function gR(e) {
    return `${B()}/list/${e.slug}`
}

function bg({
    userId: e,
    userName: t
}) {
    return `${e}-${HS(t)}`
}

function hR({
    userId: e,
    userName: t,
    noBase: r = !0
}) {
    const n = bg({
        userId: e,
        userName: t
    });
    return `${r?"":B()}/api/v1/user/${n}/public_profile`
}

function CR(e) {
    return !!e && e.includes("podcast/generic.png")
}
var qr = (e => (e.ARR10K = "arr10k", e.ARR1K = "arr1k", e))(qr || {}),
    Zr = (e => (e.List1K = "list1k", e.List100 = "list100", e))(Zr || {});

function Dg(e, t) {
    const r = Pg(e, t);
    return r || Au
}

function Pg(e, {
    preferAuthorPhoto: t
} = {}) {
    return t && (e != null && e.author_photo_url) && J(e.author_photo_url) ? J(e.author_photo_url) : e != null && e.photo_url && J(e.photo_url) ? J(e.photo_url) : (e == null ? void 0 : e.id) != null ? Tu(e.id) : null
}

function Tu(e) {
    const t = ["purple", "yellow", "orange", "green", "black"];
    return `${B()}/img/avatars/${t[e%5]}.png`
}
const Au = `${B()}/img/avatars/logged-out.png`,
    Ng = {
        email: "email",
        menu: "menu",
        podcast: "podcast",
        reader2: "reader2",
        reader2Nav: "reader2-nav",
        rss: "rss",
        social: "social",
        web: "web"
    },
    IR = {
        CTA1: "CTA_1",
        CTA2: "CTA_2",
        CTA3: "CTA_3",
        CTA4: "CTA_4",
        CTA5: "CTA_5",
        CTA7: "CTA_7",
        about: "about",
        acceptCreditPage: "accept-credit-page",
        acceptPubCreditPage: "accept-pub-credit-page",
        androidChatLaunchEmail: "android-chat-launch-email",
        appMarketing: "app-marketing",
        appUpsellFaceCloud: "app-upsell-face-cloud",
        appUpsellFinishSubscribing: "app-upsell-finish-subscribing",
        appUpsellFollowAuthor: "app-upsell-follow-author",
        appUpsellFollowRecommendations: "app-upsell-follow-recommendations",
        appUpsellRedirect: "app-upsell-redirect",
        autoShare: "auto_share",
        autofilledFooter: "autofilled-footer",
        bestsellersDmsAnnouncement: "bestsellers-dms-announcement",
        book: "book",
        brand: "brand",
        bulletin: "bulletin",
        chatDigestEmail: "chat-digest-email",
        chatDripEmail: "chat-drip-email",
        chatMarketing: "chat-marketing",
        cohortPages: "cohort_pages",
        comment: "comment",
        commentListShareCta: "comment-list-share-cta",
        commentPage: "comment-page",
        comp: "comp",
        compExpiryNotice: "comp-expiry-notice",
        contactsSyncBlast: "contacts-sync-blast",
        continueYourSupport: "continue_your_support",
        creditAcceptedPage: "credit-accepted-page",
        creditAnnouncementEmail: "credit-announcement-email",
        creditGrantedEmail: "credit-granted-email",
        creditTokenInvitePage: "credit_token_invite_page",
        crossPost: "cross-post",
        cta: "cta",
        default: "default",
        discover: "discover",
        emailArchive: "email-archive",
        emailChat: "email-chat",
        emailCheckout: "email-checkout",
        emailComments: "email-comments",
        emailContinue: "email-continue",
        emailFoundingCheckout: "email-founding-checkout",
        emailHalfMagicComments: "email-half-magic-comments",
        emailHalfPost: "email-half-post",
        emailHome: "email-home",
        emailLeaderboard: "email-leaderboard",
        emailPlayOnSubstackUfi: "email-play-on-substack-ufi",
        emailPost: "email-post",
        emailPostAppLink: "email-post-app-link",
        emailPostTitle: "email-post-title",
        emailPublication: "email-publication",
        emailReaction: "email-reaction",
        emailRelatedPub: "email-related-pub",
        emailRestack: "email-restack",
        emailRestackComment: "email-restack-comment",
        emailSavePost: "email-save-post",
        emailShare: "email-share",
        emailSubscribe: "email-subscribe",
        emailThread: "email-thread",
        getChat: "get-chat",
        getStartedPage: "get_started_page",
        ghost: "ghost",
        giftExpiryNotice: "gift-expiry-notice",
        giftExpiryNoticeJudd: "gift-expiry-notice-judd",
        giveAnother: "give-another",
        growth: "growth",
        guestPostBio: "guest_post_bio",
        home: "home",
        internationalLeaderboard: "international-leaderboard",
        inviteFriendsCreditsShare: "invite-friends-credits-share",
        inviteFriendsPage: "invite-friends-page",
        inviteFriendsPostSubCreditsShareModal: "invite-friends-post-sub-credits-share-modal",
        inviteFriendsReaderOnboarding: "invite-friends-reader-onboarding",
        inviteFriendsReaderOnboardingCredit: "invite-friends-reader-onboarding-credit",
        lists: "lists",
        mentionNotification: "mention-notification",
        navbar: "navbar",
        newThreadEmail: "new-thread-email",
        notification: "notification",
        postEmbed: "post_embed",
        postFollowReferrerPrompt: "post-follow-referrer-prompt",
        postInstagramShareModal: "post-instagram-share-modal",
        postReplyComment: "post_reply_comment",
        postSelection: "post_selection",
        postShareCenter: "post-share-center",
        postShareSelection: "post-share-selection",
        postViewer: "post_viewer",
        profilePage: "profile_page",
        pss: "pss",
        pubShareChecklist: "pub-share-checklist",
        publicationEmbed: "publication_embed",
        publishSettings: "publish-settings",
        reaction: "reaction",
        reader2: "reader2",
        readerOnboarding: "reader-onboarding",
        readerTopNav: "reader-top-nav",
        referralsSubscribePageShareScreen: "referrals-subscribe-page-share-screen",
        restackNotification: "restack-notification",
        shareBestsellerBadge: "share_bestseller_badge",
        showNotesNoFreePreviewLanguage: "show-notes-no-free-preview-language",
        showNotesSpotifyOpenAccess: "show-notes-spotify-open-access",
        smartDeliveryPostDigestEmail: "smart-delivery-post-digest-email",
        subscribe: "subscribe",
        subscribePageShareScreen: "subscribe-page-share-screen",
        subscriberReferralsPubNotification: "subscriber_referrals_pub_notification",
        substackClips: "substack-clips",
        substackProfile: "substack_profile",
        threadEmail: "thread-email",
        threadPage: "thread-page",
        threadsPage: "threads-page",
        ttsModal: "tts-modal",
        twitterEmbed: "twitter-embed",
        twitterQuitter: "twitter-quitter",
        unbsubscribePage: "unbsubscribe-page",
        unifiedHomeEmailBlast: "unified-home-email-blast",
        uniqueShareLink: "unique-share-link",
        viralGiftTwoMonthsLeft1: "viral-gift-two-months-left-1",
        web: "web",
        welcome: "welcome",
        writerReferralButton: "writer_referral_button",
        xpPostEmbed: "xp_post_embed",
        xpReadNext: "xp_read_next"
    },
    Lg = {
        about: "about",
        aboutPage: "about-page",
        acceptCreditPage: "accept_credit_page",
        account: "account",
        accountCard: "account-card",
        activationDrip: "activation_drip",
        activityItem: "activity_item",
        allPodcasts: "all-podcasts",
        allPodcastsSetupButton: "all_podcasts_setup_button",
        allYourSubscriptions: "all-your-subscriptions",
        amp: "amp",
        appDeckAppstoreButton: "app-deck-appstore-button",
        appPage: "app-page",
        appPageBottomAppStoreButton: "app-page-bottom-app-store-button",
        appPageHeaderButton: "app-page-header-button",
        audienceInsights: "audience-insights",
        authorNoteEmail: "author-note-email",
        badge: "badge",
        batchPublicationRecommendedEmail: "batchPublicationRecommendedEmail",
        chatChecklist: "chat-checklist",
        chatEmbed: "chat_embed",
        chatEnabledEmail: "chat_enabled_email",
        chatPostLanding: "chat-post-landing",
        commentEmbed: "comment_embed",
        confirmationEmail: "confirmation_email",
        continueYourSupport: "continue_your_support",
        coverPage: "cover_page",
        crossPost: "cross-post",
        discover: "discover",
        discoverSearch: "discover_search",
        dripEmail: "drip_email",
        editProfileVisibility: "edit-profile-visibility",
        email: "email",
        emailRedirect: "email-redirect",
        emailUfi: "email-ufi",
        embed: "embed",
        facebook: "facebook",
        feedCommentReplyRestriction: "feed-comment-reply-restriction",
        floatingSubscribeButton: "floating_subscribe_button",
        giftsPage: "gifts_page",
        globalSearch: "global-search",
        goingPaid: "going-paid",
        google: "google",
        greatDiscussions: "great-discussions",
        handleNotification: "handle-notification",
        home: "home",
        homePage: "home-page",
        homeSitemap: "home-sitemap",
        homepageReaderOnboarding: "homepage-reader-onboarding",
        homepageRecommendations: "homepage_recommendations",
        homepageWelcomeCard: "homepage-welcome-card",
        import: "import",
        importBanner: "import_banner",
        instagram: "instagram",
        invitationEmail: "invitation_email",
        leaderboard: "leaderboard",
        likeButtonUpsell: "like-button-upsell",
        likeToast: "like_toast",
        listManagementModal: "list_management_modal",
        manageSubscriptions: "manage-subscriptions",
        mentions: "mentions",
        menu: "menu",
        menuDropdown: "menu-dropdown",
        messenger: "messenger",
        mobileSubscription: "mobile-subscription",
        multiplePersonalRecommendationsEmail: "multiple-personal-recommendations-email",
        navbar: "navbar",
        newThreadEmail: "new-thread-email",
        newsletterPage: "newsletter_page",
        notesInviteFriendsItem: "notes-invite-friends-item",
        notesShareAction: "notes-share-action",
        notification: "notification",
        paymentPledge: "payment-pledge",
        paymentPledgeConfirmPayment: "payment-pledge-confirm-payment",
        paywall: "paywall",
        paywallFreeTrial: "paywall-free-trial",
        personalizedRecommendationEmail: "personalized-recommendation-email",
        planPurchaseBox: "plan-purchase-box",
        pledged: "pledged",
        podcastEmail: "podcast-email",
        podcastPostHeader: "podcast_post_header",
        podcastSetupEmail: "podcast_setup_email",
        podcastsPage: "podcasts-page",
        pollSubscribeModal: "poll-subscribe-modal",
        post: "post",
        postEmailContinueReadingButton: "post-email-continue-reading-button",
        postEmailTitle: "post-email-title",
        postEmbed: "post_embed",
        postEndCta: "post-end-cta",
        postReferralBanner: "post-referral-banner",
        postScheduledPage: "post-scheduled-page",
        postSubscribe: "post_subscribe",
        postSubscribePrompt: "post-subscribe-prompt",
        presubscribe: "presubscribe",
        profileCard: "profile-card",
        profileToast: "profile_toast",
        pubHomeSidebar: "pub-home-sidebar",
        pubHoverCard: "pub_hover_card",
        publicationSearch: "publication-search",
        qr: "qr",
        readerCta: "reader-cta",
        readerSignupFullscreen: "reader_signup_fullscreen",
        readyForMore: "ready-for-more",
        receipt: "receipt",
        receiptPage: "receipt-page",
        recommendationsPage: "recommendations_page",
        referralLeaderboard: "referral-leaderboard",
        restackDigestEmail: "restack-digest-email",
        rewardEmail: "reward_email",
        sectionPage: "section-page",
        share: "share",
        showsAudioPlayerHeader: "shows-audio-player-header",
        showsListenOnMobileDropdown: "shows-listen-on-mobile-dropdown",
        showsPaywall: "shows-paywall",
        signup: "signup",
        spotifyOpenAccess: "spotify-open-access",
        subscribe: "subscribe",
        subscribeContentBlock: "subscribe_content_block",
        subscribeEmail: "subscribe_email",
        subscribeLater: "subscribe_later",
        subscribeWidget: "subscribe-widget",
        subscribeWidgetPreamble: "subscribe-widget-preamble",
        subscriberBadge: "subscriber_badge",
        subscriberChats: "subscriber-chats",
        subscriptionNotification: "subscription-notification",
        substack: "substack",
        substackDigest: "substack-digest",
        substackFeedItem: "substack-feed-item",
        suggest: "suggest",
        thread: "thread",
        threadEmbed: "thread_embed",
        twitter: "twitter",
        twitterPubsTryChatEmail: "twitter-pubs-try-chat-email",
        upsell: "upsell",
        userMenu: "user-menu",
        web: "web",
        webChatNavigation: "web-chat-navigation",
        webChatPaywall: "web-chat-paywall",
        whatsapp: "whatsapp",
        worldClassWriting: "world-class-writing",
        writerDashboard: "writer-dashboard",
        writerOnboardingRecommendations: "writer-onboarding-recommendations",
        writerReferral: "writer_referral",
        writerReferralInviteEmail: "writer_referral_invite_email",
        writerReferralInvitePage: "writer_referral_invite_page",
        writerReferralSignupEmail: "writer_referral_signup_email",
        writerStatsEmail: "writer_stats_email"
    },
    Mg = {
        account: "account",
        appUpsellFaceCloud: "app-upsell-face-cloud",
        appUpsellFinishSubscribing: "app-upsell-finish-subscribing",
        appUpsellFollowAuthor: "app-upsell-follow-author",
        appUpsellFollowRecommendations: "app-upsell-follow-recommendations",
        appUpsellRedirect: "app-upsell-redirect",
        authorPostInsert: "author-post-insert",
        bloggers: "bloggers",
        comicBookCreators: "comic-book-creators",
        comment: "comment",
        commentLink: "comment link",
        commentMetadata: "comment_metadata",
        commentShareCheckbox: "comment-share-checkbox",
        comments: "comments",
        communityPrograms: "community_programs",
        cta: "cta",
        dashboardActionBox: "dashboard_action_box",
        dashboardPubSwitcher: "dashboard_pub_switcher",
        defaultWelcomeEmail: "default-welcome-email",
        discoverTwitter: "discover-twitter",
        earningCalculator: "earning-calculator",
        email: "email",
        emailFooterButton: "email-footer-button",
        embeddedNote: "embedded-note",
        embeddedPost: "embedded-post",
        facepileRestacks: "facepile-restacks",
        feedFeaturedPublication: "feed_featured_publication",
        feedRecommendedCopyLink: "feed:recommended:copy_link",
        feedRecommendedViewPublication: "feed:recommended:view_publication",
        finance: "finance",
        firstNoteModal: "first-note-modal",
        foodWriters: "food_writers",
        footer: "footer",
        getMonth: "get-month",
        giveCredit: "give-credit",
        giveMonth: "give-month",
        giveMonthGetCredits: "give-month-get-credits",
        learnMore: "learn_more",
        like: "like",
        localNews: "local_news",
        newFromTwitter: "new-from-twitter",
        newFromTwitterWithPost: "new-from-twitter-with-post",
        noteShareModal: "note-share-modal",
        openInApp: "open-in-app",
        paywallPostUnlockPrompt: "paywall-post-unlock-prompt",
        podcasters: "podcasters",
        post: "post",
        postLink: "post link",
        postcta: "postcta",
        profile: "profile",
        reader: "reader",
        readerSurveySubscribePrompt: "reader-survey-subscribe-prompt",
        reads: "reads",
        renewheader: "renewheader",
        resackerItem: "resacker-item",
        revampedRecommendationsForReader: "revamped-recommendations-for-reader",
        scoreUpsell: "score-upsell",
        seeWhatElseYouMissed: "see-what-else-you-missed",
        share: "share",
        signInPage: "sign-in-page",
        signup: "signup",
        subscribes: "subscribes",
        substackFeedItem: "substack-feed-item",
        switchToSubstack: "switch-to-substack",
        teaserPostRedeemed: "teaser-post-redeemed",
        unifiedHomeDashboardActionBox: "unified_home_dashboard_action_box",
        unsubscribePage: "unsubscribe-page",
        unubscribePageTooManyEmails: "unubscribe-page-too-many-emails",
        userMenuLink: "user-menu-link",
        userName: "user name",
        video: "video",
        webChatMobilePage: "web-chat-mobile-page",
        webFooterButton: "web-footer-button",
        writes: "writes",
        wwwFooter: "www-footer"
    },
    TR = {
        post: "post"
    },
    AR = {
        groupSubscriptionOffer: "group-subscription-offer"
    },
    to = [/\/embed\/podcast\//],
    yg = 504,
    wg = 264,
    Ug = 70,
    vg = "https://support.substack.com/hc/en-us/requests/new?ticket_form_id=14793522353556&tf_14811460381460=i_m_a_subscriber/reader_only_&tf_14818406375316=i_am_unable_to_comment_or_publish_to_notes_",
    kg = "https://support.substack.com/hc/en-us/requests/new?ticket_form_id=18072253847444&tf_18071211318676=my_import_file_is_too_large_";

function Se(e, t, {
    skipHash: r = !1
} = {}) {
    typeof e == "object" && (t = e, e = document.location.pathname + document.location.search + document.location.hash);
    let n = h(e.split("?")[0].split("#")[0], Object.assign(Gt(e), t));
    return e.indexOf("#") !== -1 && !r && (n += e.substr(e.indexOf("#"))), n
}

function Gt(e) {
    const t = {},
        r = ((e == null ? void 0 : e.split("?")[1]) || "").split("#")[0].trim();
    if (r) {
        const n = r.split("&");
        for (let o = 0; o < n.length; o++) {
            const i = n[o].split("=");
            t[decodeURIComponent(i[0])] = decodeURIComponent(i.slice(1).join("="))
        }
    }
    return t
}
const Xr = (e, t) => {
        if (typeof t != "string") {
            if (typeof window == "undefined" || !(window != null && window.location)) return null;
            t = e, e = window.location.href
        }
        const r = Gt(e);
        if (String(t) in r) return r[String(t)]
    },
    Bg = (e, {
        params: t = {},
        signedIn: r = !1
    } = {}) => {
        const n = ot(r, e);
        return h(`${T(e)}/`, N({
            lli: n
        }, t))
    },
    $g = e => `${T({subdomain:"callback"})}${e}`,
    xg = e => {
        if (ba(e)) return null;
        try {
            return new URL(e).hostname.split(".").slice(-2).join(".")
        } catch (t) {
            return null
        }
    },
    Fg = e => !e || !e.startsWith("/") || e.startsWith("//") || !/\.svg(\?|#|$)/.test(e) ? e : `${Ae}/${e}`,
    $e = e => (e || "").replace(/^(\w+:)?\/\//g, ""),
    Gg = e => {
        const r = le(`admin.${fe}`);
        return e ? `${r}/publications/${e}` : r
    },
    Hg = e => `${le(`${fe}`)}/discover/stocks/${e}`,
    Wg = e => {
        const r = le(`admin.${fe}`);
        return e ? `${r}/users/${e}` : r
    },
    Kg = ({
        utm_source: e
    } = {}) => h(le(`reader.${fe}`), {
        utm_source: e
    }),
    Vg = e => h(`${le(fe)}/browse/staff-picks`, K(N({}, e), {
        action: "signup"
    })),
    Ht = (e, {
        query: t
    } = {}) => h(`${le(fe)}${e}`, t),
    Yg = e => Ht("/activity", {
        query: e
    }),
    jg = e => Ht("/library", {
        query: e
    }),
    Jg = e => Ht("/saved", e),
    zg = (e, t, {
        params: r = {},
        redirect: n = null,
        source: o = null,
        postUuid: i = null
    } = {}) => {
        const s = i ? `${B()}/app-link/publications/${e}/drafts/${i}` : `${B()}/app-link/post`,
            a = N({
                publication_id: e,
                post_id: t,
                utm_source: o,
                redirect: n
            }, r);
        return h(s, a)
    },
    qg = (e, t, {
        params: r = {},
        redirect: n = null,
        source: o = null,
        postUuid: i = null,
        inbox: s = null,
        hostOverride: a = null
    } = {}) => {
        if (!e || !t) return "";
        const u = a ? i ? `${a}/p/${i}` : `${a}/p/${t}` : i ? `${ce()}/pub/${e}/drafts/${i}` : `${ce()}/pub/${e}/p/${t}`,
            l = N({
                utm_source: o,
                redirect: n,
                inbox: s
            }, r);
        return h(u, l)
    };

function Zg(e, t, r, n = 3) {
    if (!r || !r.ancestor_path) return Jr(e, t, r);
    const o = r.ancestor_path.split("."),
        i = o.length < n ? 0 : o.length - n;
    return nt(e, t, {
        comments: !0,
        commentId: r.id,
        commentContextId: o[i]
    })
}
const Xg = ({
        pub: e,
        section: t,
        addBase: r = !0
    }) => {
        var o;
        t = (o = t != null ? t : e.section) != null ? o : null;
        const n = r ? T(e) : "";
        return t ? `${n}/listen/${t.slug||t.id}` : `${n}/podcast`
    },
    Qg = (e, {
        addBase: t,
        type: r,
        id: n
    } = {}) => `${t?T(e):""}/publish/settings/${r}/${n}`,
    Ru = (e, {
        params: t
    } = {}) => {
        const r = e.section ? `/s/${e.section.slug||e.section.id}` : "";
        return h(`${r}/archive`, t)
    },
    eh = (e, {
        addBase: t,
        params: r
    } = {}) => {
        const n = t ? T(e) : "";
        return h(`${n}/archive`, r)
    },
    th = (e, {
        addBase: t,
        params: r
    } = {}) => {
        const n = t ? T(e) : "";
        return h(`${n}/about`, r)
    },
    rh = (e, {
        addBase: t,
        params: r
    } = {}) => {
        const n = t ? T(e) : "";
        return h(`${n}/sitemap`, r)
    },
    nh = (e, {
        params: t
    } = {}) => {
        const r = `${T({subdomain:e})}/publish/home`;
        return h(r, t)
    },
    oh = e => h(`${B()}/twitter/find-pubs`, e),
    ih = (e, {
        addBase: t,
        params: r,
        slug: n,
        isSection: o
    } = {}) => {
        let s = `${t?T(e):""}/publish/podcasting`;
        return n && (o ? s = `${s}/s/${n}` : s = `${s}/${n}`), r ? h(s, r) : s
    },
    sh = (e, n = {}) => {
        var o = n,
            {
                baseUrl: t = null
            } = o,
            r = Ce(o, ["baseUrl"]);
        return h(`${t!=null?t:T(e)}/publish/post`, r)
    },
    ah = (e, t) => h(`${T(e)}/publish/post/marketing`, t),
    uh = (e, {
        addBase: t,
        params: r
    } = {}) => {
        const n = t ? T(e) : "";
        return h(`${n}/publish/subscribers`, r)
    },
    ch = e => "/publish/subscribers/add",
    lh = (e, t) => `${T(e)}/publish/subscribers/add?conditional_import_id=${t}`,
    _h = (e, t) => `${T(e)}/publish/subscribers/add?conditional_import_id=${t}`,
    dh = (e, {
        payment: t
    } = {}) => `/publish/domain${t?"/pay":""}`,
    fh = () => "/publish/domain/apex",
    Eh = () => "/publish/domain/migrate",
    ph = () => "/publish/domain/status",
    mh = () => "/publish/domain/redirects",
    Sh = () => "/publish/domain/redirects-status",
    gh = (e, t, {
        addBase: r,
        tab: n
    } = {}) => {
        const o = r ? T(e) : "";
        return h(`${o}/publish/subscribers/legacy`, {
            email: t,
            tab: n
        })
    },
    hh = e => `/publish/groups/${e}`,
    Ch = () => "/publish/groups",
    Ih = function(e, t = {}) {
        const r = h(`${T(e)}/subscribe`, t);
        return r.indexOf("?") === -1 ? `${r}?` : r
    },
    Th = function(e) {
        return `${T(e)}/subscribe?plan=founding&`
    },
    Ah = (e = {}) => h("/account/login", e),
    Rh = (e = {}) => h(`${B()}/sign-in/mfa`, e),
    Oh = (e, t, r) => {
        const n = e == null ? void 0 : e.subdomain;
        return h(`${B()}${t}`, {
            redirect: r,
            for_pub: n
        })
    },
    bh = (e, t = {}) => e ? h(`${B()}/refer/${e}`, t) : null,
    Dh = ({
        utm_source: e,
        utm_content: t
    } = {}) => h(`${B()}/referral`, {
        utm_source: e,
        utm_content: t
    }),
    Ou = ({
        utm_source: e,
        section: t,
        highlightNotification: r
    } = {}) => h(`${B()}/settings`, {
        utm_source: e,
        section: t,
        highlightNotification: r
    }),
    Ph = ({
        highlight: e,
        utm_source: t
    } = {}) => Ou({
        section: "notifications",
        highlightNotification: e,
        utm_source: t
    }),
    Nh = ({
        utm_source: e
    } = {}) => h(`${B()}/settings/subscriptions`, {
        utm_source: e
    }),
    Lh = e => `${T(e)}/?utm_source=${Lg.substack}&utm_medium=${Ng.email}&utm_content=${Mg.share}&action=share`,
    Mh = (e, n) => {
        var o = n,
            {
                startAtSubscribeFlow: t
            } = o,
            r = Ce(o, ["startAtSubscribeFlow"]);
        let i = `${T(e)}/listen`;
        if (r) {
            const s = de(r);
            s && (i += `?${s}`)
        }
        return t ? tn(e, N({
            addBase: !0,
            next: i,
            skipPodcastSetupPage: !0
        }, r)) : i
    },
    yh = (e, {
        addBase: t,
        params: r,
        noSection: n,
        section: o,
        user: i,
        startAtSubscribeFlow: s
    } = {}) => {
        var u;
        let a = "";
        if (t && (a += T(e)), o = (u = o != null ? o : e == null ? void 0 : e.section) != null ? u : null, o && !n && (a += `/s/${o.slug||o.id}`), a += "/account/add-podcast", i && i.email && (r = K(N({}, r), {
                email: i.email
            }), a += "/email"), r) {
            const l = de(r);
            l && (a += `?${l}`)
        }
        return s ? tn(e, N({
            addBase: !0,
            next: a,
            skipPodcastSetupPage: !0
        }, r)) : a
    },
    bu = (e, {
        cdnUrl: t = Ae
    } = {}) => {
        var r;
        return (r = e == null ? void 0 : e.replace(/^https:\/\/(bucketeer[^/]*|substack-post-media|substack-post-media-staging|substack-audio|substack-video|substack-video-staging|substack-content|substack-content-dev)\.s3\.amazonaws\.com/, t)) != null ? r : "undefined"
    },
    at = "https://",
    ur = (e, t) => e ? `${at}chrt.fm/track/${encodeURIComponent(e)}/${$e(t)}` : t,
    wh = e => `${at}prfx.byspotify.com/e/${$e(e)}`;

function Uh(e) {
    return `${at}claritaspod.com/measure/${$e(e)}`
}
const vh = e => `${at}pscrb.fm/rss/p/${$e(e)}`,
    kh = (e, t) => `${at}s.gum.fm/s-${e}/${$e(t)}`,
    Du = (e, t, {
        token: r
    } = {}) => {
        let n = bu(t);
        return n && (e != null && e.id && (n = Se(n, {
            post_id: e.id
        })), r && (n = Se(n, {
            podcast_rss_token: r
        })), n)
    },
    Bh = (e, t, {
        rssToken: r
    }) => {
        if (t.podcast_upload_id) {
            let n = Se(`${T({subdomain:"api"})}/api/v1/audio/upload/${t.podcast_upload_id}/src`, {
                token: r
            });
            return e != null && e.chartable_token && (n = ur(e.chartable_token, n)), n
        }
        if (t.podcast_url) {
            let n = Du(t, t.podcast_url, {
                token: r
            });
            return e != null && e.chartable_token && (n = ur(e.chartable_token, n)), n
        }
        return null
    },
    $h = e => {
        for (let t = 0; t < to.length; t++)
            if (to[t].test(e)) return !0;
        return !1
    },
    Pu = ({
        useOriginalUrl: e
    }) => {
        if (e && typeof window != "undefined" && window._preloads.original_url) try {
            const t = new URL(window._preloads.original_url);
            return `${t.pathname}${t.search}${t.hash}`
        } catch (t) {}
        return `${document.location.pathname}${document.location.search}${document.location.hash}`
    },
    xh = (e = {}) => {
        const {
            for_pub: t,
            email: r,
            prefilled_email: n,
            with_password: o,
            error: i,
            message: s,
            change_user: a,
            justTrying: u,
            useOriginalUrl: l
        } = e;
        let {
            redirect: c
        } = e;
        return typeof c != "string" && (c = Pu({
            useOriginalUrl: l != null ? l : !1
        })), h(`${B()}/sign-in`, {
            redirect: c,
            for_pub: t,
            email: r,
            prefilled_email: n,
            with_password: o,
            error: i,
            message: s,
            change_user: a,
            justTrying: u
        })
    },
    Qr = ({
        utm_source: e
    } = {}) => h(`${B()}/tos`, {
        utm_source: e
    }),
    Fh = ({
        pub: e,
        utm_source: t
    } = {}) => e ? h(`${T(e)}/tos`, {
        utm_source: t
    }) : Qr({
        utm_source: t
    }),
    Gh = () => `${B()}/going-paid`,
    Nu = ({
        utm_source: e
    } = {}) => `${h(`${B()}/ccpa`,{utm_source:e})}#personal-data-collected`,
    Hh = ({
        utm_source: e
    } = {}) => h(`${B()}/welcome`, {
        utm_source: e
    }),
    en = ({
        utm_source: e,
        hash: t = null
    } = {}) => {
        const r = t ? `#${t}` : "";
        return `${h(`${B()}/privacy`,{utm_source:e})}${r}`
    },
    Wh = ({
        pub: e,
        utm_source: t,
        hash: r = null
    } = {}) => {
        if (!e) return `${en({utm_source:t,hash:r})}`;
        const n = r ? `#${r}` : "";
        return `${h(`${T(e)}/privacy`,{utm_source:t})}${n}`
    },
    Kh = () => ({
        infoCollection: Nu(),
        privacy: en(),
        terms: Qr()
    }),
    Vh = ({
        params: e
    } = {}) => h(`${B()}/profile/edit`, e),
    Yh = ({
        isAbbreviated: e,
        redirect: t,
        postRedirectToast: r,
        pubId: n = null,
        referringUserKey: o = null,
        params: i = {}
    } = {}) => {
        let s = null;
        if (t) try {
            s = new URL(t), r && s.searchParams.set("profile-setup-message", r)
        } catch (u) {
            s = new URL(B())
        }
        const a = N({
            isAbbreviated: e,
            redirect: s ? s.toString() : null,
            pubId: n
        }, i);
        return o && (a.r = o), h(`${B()}/reader-onboarding`, a)
    },
    jh = (e, t) => `${B()}/discover${e?`/category/${e.slug}`:"/recomendations"}${t==="all"?"/all":""}`,
    Jh = ({
        query: e,
        params: t = {}
    } = {}) => {
        let r = `${B()}/search`;
        return e && (r = `${B()}/search/${encodeURIComponent(e)}`), Se(r, t)
    };

function tn(e, s = {}) {
    var a = s,
        {
            signedIn: t = !1,
            addBase: r = !1,
            root: n = void 0,
            user: o = void 0
        } = a,
        i = Ce(a, ["signedIn", "addBase", "root", "user"]);
    const u = ot(t, e);
    return mu(e, {
        root: n,
        user: o,
        addBase: r,
        params: N(N({}, u === void 0 ? {} : {
            lli: u
        }), i)
    })
}
const zh = (e, t = {}) => h(`${T(e)}/recommendations`, t),
    qh = (e = {}) => Se(`${B()}/signup`, e),
    Zh = (e = {}) => Se(`${B()}/twitter-quitter`, e),
    Xh = (e = {}) => Se(`${B()}/signup/import`, e),
    Qh = (e, {
        addBase: t = !1,
        baseUrlOptions: r = {},
        params: n = void 0
    } = {}) => h(`${it(e,{addBase:t,baseUrlOptions:r})}/stripe-import`, n),
    eC = (e, {
        addBase: t,
        baseUrlOptions: r,
        params: n
    } = {}) => {
        const o = t ? T(e, r) : "";
        return h(`${o}/publish/stats`, n)
    },
    tC = (e, {
        addBase: t,
        baseUrlOptions: r,
        params: n
    } = {}) => {
        const o = t ? T(e, r) : "";
        return h(`${o}/publish/settings/recommendations`, n)
    },
    rC = (e, {
        addBase: t,
        baseUrlOptions: r,
        params: n
    } = {}) => {
        const o = t ? T(e, r) : "";
        return h(`${o}/publish/recommendations`, n)
    },
    nC = (e, {
        addBase: t,
        baseUrlOptions: r,
        params: n
    } = {}) => {
        const o = t ? T(e, r) : "";
        return h(`${o}/publish/settings/blurbs`, n)
    },
    oC = e => {
        const t = T(e);
        return h(`${t}/publish/settings/`, {
            search: "referral"
        })
    },
    iC = (e, {
        addBase: t = !1,
        baseUrlOptions: r = {}
    } = {}) => `${it(e,{addBase:t,baseUrlOptions:r})}/moderation`,
    sC = e => "/publish/settings/podcast/edit",
    aC = e => `${T(e)}/invite`,
    uC = e => {
        let t = `${e.author_id||e.id}`;
        const r = xt(e.author_id ? e.author_name : e.name, {
            hashIfEmpty: !0
        });
        return r && (t += `-${r}`), t
    },
    cC = (e, t, {
        utm_source: r
    } = {}) => Be(e, {
        utm_source: r
    }),
    rn = ({
        pub: e,
        token: t = null
    }) => {
        var n;
        const {
            section: r
        } = e;
        return r ? (n = r.podcastSettings) != null && n.podcast_feed_url ? r.podcastSettings.podcast_feed_url : cr({
            pubId: e.id,
            sectionId: r.id,
            token: t
        }) : e.podcast_feed_url ? e.podcast_feed_url : cr({
            pubId: e.id,
            sectionId: null,
            token: t
        })
    };

function cr({
    pubId: e,
    sectionId: t,
    token: r
}) {
    if (t) {
        let o = `${T({subdomain:"api"})}/feed/podcast/${e}/s/`;
        return r ? o += `${t}/private/${r}.rss` : o += `${t}.rss`, o
    }
    let n = `${T({subdomain:"api"})}/feed/podcast/${e}`;
    return r ? n += `/private/${r}.rss` : n += ".rss", n
}
const Lu = (e, {
        noOverride: t
    } = {}) => {
        if (e) {
            if (e.support_email && !t) return e.support_email
        } else return "support@substack.com";
        return `support+${e.subdomain}@substack.com`
    },
    lC = (e, t) => `https://support.substack.com/hc/en-us?s=${encodeURIComponent(Lu(e,t))}`,
    _C = (e, t, r, n) => {
        const o = Mu(e, t, r, n);
        return J(o, null, {
            skipDomainValidation: !0,
            quality: "auto:best",
            version: 9
        })
    },
    Mu = (e, t, r, n) => h(`${T(e,{forceSubdomain:!0})}/api/v1/post_selection_preview/${t.id}/${r}.jpg`, N({}, n)),
    dC = (e, t) => {
        const r = yu(e, t);
        return J(r, null, {
            skipDomainValidation: !0,
            quality: "auto:best",
            version: 4
        })
    },
    yu = (e, t) => h(`${T(e,{forceSubdomain:!0})}/api/v1/post_preview/${t.id}/twitter.jpg`, {
        isDraft: t.is_draft || t.is_scheduled
    }),
    fC = (e, t, r, n, o) => {
        const i = wu(e, t, r, n);
        return J(i, null, {
            skipDomainValidation: !0,
            quality: "auto:best",
            version: 11,
            attachment: !!o,
            filename: o
        })
    },
    wu = (e, t, r, n) => h(`${T(e,{forceSubdomain:!0})}/api/v1/post_selection_image/${t.id}/${r}.jpg`, N({}, n)),
    EC = e => `https://twitter.com/${e}`,
    pC = e => `https://instagram.com/${e}`,
    mC = e => `https://tiktok.com/@${e}`,
    SC = e => `https://youtube.com/channel/${e}`,
    gC = e => J(`${Uu(e)}`, null, {
        quality: "auto:best",
        version: 9,
        skipDomainValidation: !0
    }),
    Uu = e => {
        const {
            hashString: t
        } = Je;
        let r = `${T(e,{forceSubdomain:!0})}/twitter/subscribe-card.jpg`;
        const n = `${e.logo_url}:${e.hero_text}:${e.name}:${e.author_name}:${e.subdomain}`,
            o = t(n);
        return o ? r += `?v=${o}` : r += "?v=bust", r
    },
    hC = (e, t, r, n) => {
        const o = vu(e, t, r);
        return J(o, null, {
            quality: "auto:best",
            skipDomainValidation: !0,
            version: 13,
            attachment: !!n,
            filename: n
        })
    },
    vu = (e, t, r) => {
        const {
            hashString: n
        } = Je, o = n(`${t.social_title+t.title+t.description+t.cover_image}`);
        return h(`${T(e,{forceSubdomain:!0})}/api/v1/press_kit/${t.id}.jpg`, K(N({}, r), {
            isDraft: "is_draft" in t ? t.is_draft : !1,
            hash: o
        }))
    },
    CC = (e, t, r, n, {
        useRootDomain: o = !1
    } = {}) => {
        const i = ku(e, t, r, {
            useRootDomain: o
        });
        return J(i, null, {
            quality: "auto:best",
            skipDomainValidation: !0,
            version: 10,
            attachment: !!n,
            filename: n
        })
    },
    IC = (e, t) => {
        let r = null;
        if (Object.values(qr).includes(t)) r = "arr";
        else if (Object.values(Zr).includes(t)) r = "subscribers";
        else throw Error(`endpoint for milestone not found [${t}]`);
        return h(`${T(e,{forceSubdomain:!0})}/api/v1/milestone_assets/all/${r}`, {
            milestone: t
        })
    },
    ku = (e, t, r, {
        useRootDomain: n = !1
    } = {}) => {
        let o = null;
        if (Object.values(qr).includes(t)) o = "arr";
        else if (Object.values(Zr).includes(t)) o = "subscribers";
        else throw Error(`endpoint for milestone not found [${t}]`);
        return h(`${n?T():T(e,{forceSubdomain:!0})}/api/v1/milestone_assets/${o}.jpg`, N(N({
            milestone: t
        }, r), n && {
            subdomain: e.subdomain
        }))
    },
    TC = (e, t, r, {
        fileToDownload: n = "",
        useRootDomain: o = !1
    } = {}) => {
        const i = Bu(e, t, r, {
            useRootDomain: o
        });
        return J(i, null, {
            quality: "auto:best",
            skipDomainValidation: !0,
            version: 10,
            attachment: !!n,
            filename: n
        })
    },
    Bu = (e, t, r, {
        useRootDomain: n = !1
    } = {}) => h(`${n?T():T(e,{forceSubdomain:!0})}/api/v1/subscription_note_assets/${t.id}.jpg`, N(N({}, r), n && {
        subdomain: e.subdomain
    })),
    AC = (e, t, r, {
        fileToDownload: n = "",
        useRootDomain: o = !1
    } = {}) => {
        const i = $u(e, t, r, {
            useRootDomain: o
        });
        return J(i, null, {
            quality: "auto:best",
            skipDomainValidation: !0,
            version: 10,
            attachment: !!n,
            filename: n
        })
    },
    $u = (e, t, r, {
        useRootDomain: n = !1
    } = {}) => h(`${n?T():T(e,{forceSubdomain:!0})}/api/v1/pledge_note_assets/${t.id}.jpg`, N(N({}, r), n && {
        subdomain: e.subdomain
    })),
    RC = (e, t, r, {
        fileToDownload: n = "",
        useRootDomain: o = !1
    } = {}) => {
        const i = xu(e, r, {
            useRootDomain: o
        });
        return J(i, null, {
            quality: "auto:best",
            skipDomainValidation: !0,
            version: 11,
            attachment: !!n,
            filename: n
        })
    },
    xu = (e, t, {
        useRootDomain: r = !1
    } = {}) => h(`${r?T():T(e,{forceSubdomain:!0})}/api/v1/publication_assets/image.jpg`, N(N({}, t), r && {
        subdomain: e.subdomain
    })),
    OC = (e, t, r) => h(`${T(e,{forceSubdomain:!0})}/api/v1/press_kit/all/${t.id}`, {
        aspectRatio: r,
        isDraft: t.is_draft
    }),
    bC = e => {
        const t = Fu(e);
        return J(t, null, {
            quality: "auto:best",
            version: 9
        })
    },
    Fu = e => h("/api/v1/latex/jpeg", {
        expression: e
    }),
    DC = e => {
        const t = `${T(null,{forceSubdomain:!0})}/api/v1/profile_assets/${e.id}-bestseller.jpg`;
        return J(t, null, {
            quality: "auto:best",
            skipDomainValidation: !0,
            version: 9
        })
    },
    PC = e => {
        const t = `${T(null,{forceSubdomain:!0})}/api/v1/profile_assets/${e.id}-bestseller-share-card.jpg`;
        return J(t, null, {
            quality: "auto:best",
            skipDomainValidation: !0,
            version: 9
        })
    },
    NC = e => `substack://publications/${e.id}/threads`,
    LC = (e, t) => e.startsWith("/publish"),
    nn = e => {
        const t = st(e);
        return t ? t.pathname.startsWith("/p/") : !1
    },
    MC = e => {
        var t, r;
        return nn(e) && (r = (t = st(e)) == null ? void 0 : t.pathname.split("/")[2]) != null ? r : null
    },
    yC = e => {
        if (!nn(e)) return !1;
        const t = st(e);
        if (!t) return !1;
        const r = t.pathname.split("/");
        return r.length === 4 && r[3] === "comments"
    },
    wC = ({
        redirect: e,
        for_pub: t,
        utm_source: r
    } = {}) => (e = e || "", h(`${B()}/sign-out`, {
        redirect: e,
        for_pub: t,
        utm_source: r
    })),
    UC = (e, t) => {
        const r = new URLSearchParams;
        return r.set("referrer", encodeURIComponent(e)), t && r.set("initialSectionId", String(t)), `/publish/podcast/new?${r.toString()}`
    },
    vC = e => {
        try {
            const r = new URL(e).pathname.match(/\.(\w+)$/);
            return r ? r[0] : null
        } catch (t) {
            return null
        }
    },
    kC = 550,
    Gu = 728,
    ht = 424,
    BC = [ht, ht * 2, ht * 3, Gu * 2],
    $C = 1200,
    xC = 2880,
    FC = 320,
    GC = 550,
    Hu = (e, {
        post: t
    } = {}) => {
        var i, s;
        if (!e) return;
        const n = "substack-video";
        return e.media_type === "audio" && (ba(e.thumbnail_id) || e.thumbnail_id === 1) ? (i = t == null ? void 0 : t.podcast_episode_image_info) == null ? void 0 : i.url : `${e.post_id?`https://${n}.s3.amazonaws.com/video_upload/post/${e.post_id}`:`https://${n}.s3.amazonaws.com/video_upload/user/${e.user_id}`}/${e.id}/transcoded-${((s=e.thumbnail_id)!=null?s:1).toString().padStart(5,"0")}.png`
    },
    HC = (e, {
        pub: t,
        isStatic: r,
        variant: n,
        post: o
    } = {}) => {
        var E, C;
        const {
            colorLuma: i,
            videoPlayerDimensions: s
        } = Je, {
            height: a,
            width: u
        } = s(e, {
            isStatic: r
        }), l = u / a < 1920 / 1080 ? "pad" : "fill", c = n === "shows" ? "#E2E0E0" : ((E = t == null ? void 0 : t.theme) == null ? void 0 : E.background_pop_color) || (t == null ? void 0 : t.theme_var_background_pop) || oE, m = n === "shows" ? "#161718" : i(c) > .6 ? "#1a1a1a" : "#ffffff", d = n === "shows" ? 120 : 152;
        return J((C = Hu(e, {
            post: o
        })) != null ? C : "", u * 2, {
            crop: l,
            height: a * 2,
            trailingSegments: r ? [`l_video_play_base_tu77jd,w_152,e_colorize:100,co_rgb:${c.slice(1)}`, `l_video_play_icon_c75z6z,w_${d},e_colorize:100,co_rgb:${m.slice(1)}`] : []
        })
    };

function WC({
    mediaUpload: e
}) {
    return `${T()}/api/v1/video/upload/${e.id}/src?type=hls`
}
const KC = (e, t, r = {}) => h(`https://substack.com/app-link/publications/${e.id}/drafts/${t}`, r),
    VC = (e, {
        userIdJwt: t,
        domain: r
    } = {}) => `${r?cu(r):B()}/redirect/${e}?j=${t||""}`,
    YC = e => h("substack://sign-in/challenge", {
        token: e
    }),
    jC = "https://apps.apple.com/us/app/substack-reader/id1581650857",
    JC = "https://play.google.com/store/apps/details?id=com.substack.app",
    zC = "itms-apps://apps.apple.com/us/app/substack-reader/id1581650857",
    qC = "intent://play.google.com/store/apps/details?id=com.substack.app#Intent;scheme=https;action=android.intent.action.VIEW;package=com.android.vending;end",
    ZC = (e = {}) => h(`${B()}/home`),
    XC = (e = {}) => h(`${B()}/app`, e),
    QC = (e = {}) => h("https://on.substack.com/p/writerfaq", e),
    eI = e => h(`${B()}/app/app-store-redirect`, e),
    tI = e => h(`${B()}/app/get-ios`, e),
    rI = e => h(`${B()}/app/get-android`, e),
    Wu = ({
        pathOnly: e = !1
    } = {}) => {
        const t = "/img/podcast/generic.png";
        return e ? t : `${B()}${t}`
    },
    nI = () => ({
        Vibrant: {
            rgb: [244.1949152542373, 162.0762711864407, 10.805084745762711],
            population: 0
        },
        DarkVibrant: {
            rgb: [126.9813559322034, 84.27966101694916, 5.618644067796606],
            population: 0
        },
        LightVibrant: {
            rgb: [250, 212, 142],
            population: 31
        },
        Muted: {
            rgb: [92, 158, 148],
            population: 4
        },
        DarkMuted: {
            rgb: [146.51694915254237, 97.24576271186443, 6.483050847457638],
            population: 0
        },
        LightMuted: {
            rgb: [164, 204, 196],
            population: 3
        }
    }),
    ut = () => {
        const e = Wu({
            pathOnly: !0
        });
        return J(e, 1400)
    },
    oI = e => h("https://twitter.com/intent/tweet", e);

function iI({
    spotifyUri: e
}) {
    return e ? `https://open.spotify.com/show/${Ku({spotifyUri:e})}` : ""
}

function Ku({
    spotifyUri: e
}) {
    return e ? e.replace("spotify:show:", "") : null
}

function sI({
    url: e
}) {
    var n;
    const t = new RegExp("https:\\/\\/open\\.spotify\\.com\\/show\\/(?<spotifyShowId>[^/?#]+)"),
        r = e.match(t);
    return !r || !((n = r.groups) != null && n.spotifyShowId) ? null : `spotify:show:${r.groups.spotifyShowId}`
}

function aI({
    spotifyUri: e
}) {
    return e ? `https://content-access.spotify.com/link/3NuiRiVbdxZaKYsqcCXKYV?spotifyShowUri=${e}` : ""
}
const uI = Object.freeze(Object.defineProperty({
        __proto__: null,
        DEFAULT_PHOTO_URL: Au,
        DIRECT_APPLE_APP_STORE_DEEPLINK_URL: zC,
        DIRECT_APPLE_APP_STORE_URL: jC,
        DIRECT_GOOGLE_PLAY_STORE_DEEPLINK_URL: qC,
        DIRECT_GOOGLE_PLAY_STORE_URL: JC,
        EMAIL_CONTENT_WIDTH: kC,
        IMPORT_FILE_TOO_LARGE_URL: kg,
        LARGE_IMAGE_WIDTH: $C,
        MAX_GIF_WIDTH: GC,
        MAX_REASONABLE_SCREEN_WIDTH: xC,
        MIN_GIF_WIDTH: FC,
        TWITTER_CARD_HEIGHT: wg,
        TWITTER_CARD_LOGO_SIZE: Ug,
        TWITTER_CARD_WIDTH: yg,
        USER_BAN_APPEAL_URL: vg,
        WEB_CONTENT_WIDTH: Gu,
        WEB_CONTENT_WIDTH_MOBILE: ht,
        WEB_RESPONSIVE_IMAGE_WIDTHS: BC,
        addClaritasPrefix: Uh,
        addGumballPrefix: kh,
        addPodscribePrefix: vh,
        addSpotifyAnalyticsPrefix: wh,
        cdnSvg: Fg,
        extractDimensionsFromImageUrl: hu,
        getAboutUrl: th,
        getAddSubscriberUrl: ch,
        getAllMilestoneAssetUrl: IC,
        getAppMarketingUrl: XC,
        getAppStoreRedirectUrl: eI,
        getAppStoreUrl: tI,
        getAppWriterFaqUrl: QC,
        getArchiveUrl: Ru,
        getAsChartableUrl: ur,
        getBaseAppLinkUrl: ce,
        getBaseArchiveUrl: eh,
        getBaseReaderUrl: Kg,
        getBaseUrl: T,
        getBestsellerAssetUrl: DC,
        getBestsellerShareCardUrl: PC,
        getBrowseCategoryUrl: jh,
        getCallbackUrl: $g,
        getCancelOrUncancelUrl: Ag,
        getCdnUrl: bu,
        getCdnUrlForAudio: Du,
        getCheckoutUrl: Ih,
        getClientReadyPodcastUrl: Bh,
        getConnectTwitterUrl: Iu,
        getCreateMarketingPostUrl: ah,
        getCreatePostUrl: sh,
        getCurrentUrlForLoginRedirect: Pu,
        getDashboardHomeUrl: mg,
        getDashboardUrlForSubdomain: nh,
        getDefaultPodcastArtPalette: nI,
        getDefaultPodcastArtUrl: Wu,
        getDefaultPodcastArtUrlCDN: ut,
        getDefaultUserPhotoById: Tu,
        getDeprecatedPostAppLinkUrl: zg,
        getDiscoverSearchUrl: Jh,
        getDomainApexConfigUrl: fh,
        getDomainApexRedirectsSetupUrl: mh,
        getDomainApexRedirectsStatusUrl: Sh,
        getDomainConfigUrl: dh,
        getDomainMigrateUrl: Eh,
        getDomainStatusUrl: ph,
        getDonateSubscriptionUrl: _g,
        getEditPostUrlById: pu,
        getEditProfileUrl: Vh,
        getEditSectionUrl: Qg,
        getFeedUrl: Ft,
        getFindTwitterPubsUrl: oh,
        getFoundingCheckoutUrl: Th,
        getGlobalAccountRedirectForPub: Oh,
        getGlobalAccountSettingsUrl: Ou,
        getGlobalNotificationSettingsUrl: Ph,
        getGoingPaidUrl: Gh,
        getGroupDetailsUrl: hh,
        getGroupManagementUrl: Eg,
        getHomeUrl: Hh,
        getHostname: uu,
        getIgnoreImportDoubleOptinUrl: _h,
        getImportUrl: Xh,
        getInfoCollectionUrl: Nu,
        getInstagramAccountUrl: pC,
        getInviteUrl: aC,
        getLatexImageUrl: Fu,
        getLatexUrl: bC,
        getLegalUrls: Kh,
        getLibraryUrl: jg,
        getLikelyLoggedInParam: ot,
        getLinkRedirectUrl: VC,
        getLinkSpotifyShowUrl: aI,
        getLoginChallengeDeepUrl: YC,
        getLoginUrl: Ah,
        getManageBlurbsUrl: nC,
        getManageGroupSubscriptionUrl: dg,
        getManageGroupsUrl: Ch,
        getManageReaderReferralSettingsUrl: oC,
        getManageSubscriptionsUrl: Nh,
        getMediaUploadThumbnailUrl: Hu,
        getMediaUploadThumbnailUrlForPlayer: HC,
        getMfaUrl: Rh,
        getMigrateFromTwitterUrl: Zh,
        getMilestoneAssetImageUrl: ku,
        getMilestoneAssetUrl: CC,
        getNotificationsUrl: Yg,
        getPlayStoreUrl: rI,
        getPledgeNoteAssetImageUrl: $u,
        getPledgeNoteAssetUrl: AC,
        getPodcastLandingUrl: Xg,
        getPodcastOnboardingUrl: UC,
        getPodcastRssUrl: rn,
        getPodcastRssUrlFromIds: Og,
        getPodcastRssUrlFromParts: cr,
        getPodcastingUrl: ih,
        getPodcatcherSetupUrl: yh,
        getPodcatcherSetupUrlForAllPodcasts: Mh,
        getPostAppLinkUrl: qg,
        getPostCommentInContextUrl: Zg,
        getPostCommentsUrl: Jr,
        getPostDashboardUrl: pg,
        getPostDetailsShareCenterUrl: Rg,
        getPostSelectionMediaImageUrl: wu,
        getPostSelectionMediaUrl: fC,
        getPostSelectionPreviewImageUrl: Mu,
        getPostSelectionPreviewUrl: _C,
        getPostSlug: MC,
        getPostUrl: nt,
        getPostUrlBySlug: Eu,
        getPressKitDownloadUrl: OC,
        getPressKitImageUrl: vu,
        getPressKitUrl: hC,
        getPreviewInAppUrl: KC,
        getProfileSetupUrl: jS,
        getProfileSlug: uC,
        getProfileUrl: cC,
        getProfileUrlById: lu,
        getPubAccountSettingsUrl: lg,
        getPubConnectTwitterUrl: Ig,
        getPubUrl: Bg,
        getPublicationAssetImageUrl: xu,
        getPublicationAssetUrl: RC,
        getPublicationPodcastUrl: sC,
        getPublishBaseUrl: it,
        getPublishModerationUrl: iC,
        getPublishSettingsRecommendationsUrl: tC,
        getPublishSettingsUrl: fg,
        getPublishStatsRecommendationsUrl: rC,
        getPublishStatsUrl: eC,
        getPublishStripeAccountImportUrl: Qh,
        getPublisherPrivacyUrl: Wh,
        getPublisherTermsUrl: Fh,
        getQueryItem: Xr,
        getReaderOnboardingUrl: Yh,
        getReaderProfileUrl: Be,
        getReaderSignupUrl: Vg,
        getReaderUrl: Ht,
        getRecommendationsPageUrl: zh,
        getSavedPostsUrl: Jg,
        getSharePubUrl: Lh,
        getSigninUrl: xh,
        getSignoutUrl: wC,
        getSitemapUrl: rh,
        getSpotifyShowIdFromUri: Ku,
        getSpotifyShowURIFromUrl: sI,
        getSpotifyShowUrl: iI,
        getStartPublishingUrl: qh,
        getStockLandingUrl: Hg,
        getSubscribeUrl: tn,
        getSubscriberDashboardUrl: Sg,
        getSubscriberDetailsUrl: gh,
        getSubscriberStatsUrl: uh,
        getSubscriptionNoteAssetImageUrl: Bu,
        getSubscriptionNoteAssetUrl: TC,
        getSubstackMarketingUrl: ZC,
        getSubstackPrivacyUrl: en,
        getSubstackTermsUrl: Qr,
        getSubstackUrl: B,
        getSubstackUrlWithDomain: cu,
        getSupportEmail: Lu,
        getSupportUrl: lC,
        getThreadDeepLinkUrl: NC,
        getTiktokAccountUrl: mC,
        getTld: xg,
        getTwitterAccountUrl: EC,
        getTwitterPreviewImageUrl: yu,
        getTwitterPreviewUrl: dC,
        getTwitterShareUrl: oI,
        getTwitterSubscribeCardSvgUrl: Uu,
        getTwitterSubscribeCardUrl: gC,
        getUndergroundUrl: Gg,
        getUrlExtension: vC,
        getUserPhotoUrl: Dg,
        getUserUndergroundUrl: Wg,
        getVerifyImportDoubleOptinUrl: lh,
        getVideoUploadPlaybackUrl: WC,
        getWriterReferralSettingsUrl: Dh,
        getWriterReferralUrl: bh,
        getYoutubeAccountUrl: SC,
        imginary: J,
        isPublishPath: LC,
        looksLikePostCommentsUrl: yC,
        looksLikePostUrl: nn,
        parseQuery: Gt,
        parseUrl: st,
        pathWithQuery: h,
        serializeQuery: de,
        stripProtocol: $e,
        stripeBaseUrl: zr,
        unimginary: gu,
        updateQuery: Se,
        urlIsRegularlyShownInIframe: $h
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    cI = () => typeof window != "undefined" && window._preloads && window._preloads.pub && window._preloads.pub.twitter_pixel_id || null,
    lI = () => typeof window != "undefined" && window._preloads && window._preloads.publicationSettings && window._preloads.publicationSettings.twitter_pixel_signup_event_id || null,
    _I = () => typeof window != "undefined" && window._preloads && window._preloads.publicationSettings && window._preloads.publicationSettings.twitter_pixel_subscribe_event_id || null,
    jt = (e, t = null) => {
        const r = cI();
        if (!r) return;
        const n = {
            p_id: "Twitter",
            p_user_id: 0,
            txn_id: r,
            events: JSON.stringify([
                [e, t]
            ]),
            tw_sale_amount: (t == null ? void 0 : t.value) || 0,
            tw_order_quantity: (t == null ? void 0 : t.num_items) || 0,
            tw_iframe_status: 0,
            tw_document_href: document.location.href
        };
        dI(n)
    },
    dI = e => {
        new Image().src = `https://t.co/i/adsct?${de(e)}`, new Image().src = `https://analytics.twitter.com/i/adsct?${de(e)}`
    },
    fI = (e, {
        quantity: t,
        price: r
    } = {}) => {
        if (e === "purchase") {
            const n = _I();
            n && typeof window.twq == "function" && window.twq("event", n), jt("purchase", {
                num_items: t,
                value: r
            })
        } else if (e === "signup") {
            const n = lI();
            n && typeof window.twq == "function" && window.twq("event", n), jt("signup")
        } else jt("pageview")
    };
var so;
const EI = typeof window != "undefined" ? (so = window._preloads) == null ? void 0 : so.siteConfigs : {},
    Vu = e => ({
        allConfigs: e,
        getConfigFor: r => {
            if (!r || !e) return null;
            const n = e[r];
            return n === void 0 ? null : n
        }
    }),
    on = Nt(Vu(EI));
on.displayName = "SiteConfigsContext";

function RR({
    siteConfigs: e = {},
    children: t
}) {
    const r = Ze(() => Vu(e), [e]);
    return z(on.Provider, {
        value: r
    }, t)
}
const OR = e => {
    const t = Or((r, n) => {
        const o = Yu();
        return z(e, K(N(N({}, o), r), {
            ref: n
        }))
    });
    return t.displayName = `withSiteConfigContext(${e.displayName||e.name||"Anonymous"})`, t
};

function Yu() {
    return Ar(on)
}

function lr(e) {
    var r;
    if (!e || typeof window == "undefined" || !((r = window._preloads) != null && r.siteConfigs)) return null;
    const t = window._preloads.siteConfigs[e];
    return t === void 0 ? null : t
}

function pI({
    configKey: e,
    children: t,
    value: r = !0
}) {
    return Yu().getConfigFor(e) == r ? z(ie, null, t) : null
}
const bR = Object.freeze(Object.defineProperty({
    __proto__: null,
    SiteConfigGate: pI,
    default: lr,
    getConfigFor: lr
}, Symbol.toStringTag, {
    value: "Module"
}));
var mI = {};

function ju(e, t) {
    for (var r in t) e[r] = t[r];
    return e
}

function sn(e, t, r) {
    var n = /(?:\?([^#]*))?(#.*)?$/,
        o = e.match(n),
        i = {},
        s;
    if (o && o[1])
        for (var a = o[1].split("&"), u = 0; u < a.length; u++) {
            var l = a[u].split("=");
            i[decodeURIComponent(l[0])] = decodeURIComponent(l.slice(1).join("="))
        }
    e = _r(e.replace(n, "")), t = _r(t || "");
    for (var c = Math.max(e.length, t.length), m = 0; m < c; m++)
        if (t[m] && t[m].charAt(0) === ":") {
            var d = t[m].replace(/(^:|[+*?]+$)/g, ""),
                E = (t[m].match(/[+*?]+$/) || mI)[0] || "",
                C = ~E.indexOf("+"),
                _ = ~E.indexOf("*"),
                f = e[m] || "";
            if (!f && !_ && (E.indexOf("?") < 0 || C)) {
                s = !1;
                break
            }
            if (i[d] = decodeURIComponent(f), C || _) {
                i[d] = e.slice(m).map(decodeURIComponent).join("/");
                break
            }
        } else if (t[m] !== e[m]) {
        s = !1;
        break
    }
    return r.default !== !0 && s === !1 ? !1 : i
}

function SI(e, t) {
    return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index
}

function gI(e, t) {
    return e.index = t, e.rank = II(e), e.props
}

function _r(e) {
    return e.replace(/(^\/+|\/+$)/g, "").split("/")
}

function hI(e) {
    return e.charAt(0) == ":" ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4 : 5
}

function CI(e) {
    return _r(e).map(hI).join("")
}

function II(e) {
    return e.props.default ? 0 : CI(e.props.path)
}
var X = null,
    Re = [],
    Pt = [],
    TI = {};

function AI(e, t) {
    t === void 0 && (t = "push"), X && X[t] ? X[t](e) : typeof history != "undefined" && history[t + "State"] && history[t + "State"](null, null, e)
}

function Wt() {
    var e;
    return X && X.location ? e = X.location : X && X.getCurrentLocation ? e = X.getCurrentLocation() : e = typeof location != "undefined" ? location : TI, "" + (e.pathname || "") + (e.search || "")
}

function an(e, t) {
    return t === void 0 && (t = !1), typeof e != "string" && e.url && (t = e.replace, e = e.url), RI(e) && AI(e, t ? "replace" : "push"), Ju(e)
}

function RI(e) {
    for (var t = Re.length; t--;)
        if (Re[t].canRoute(e)) return !0;
    return !1
}

function Ju(e) {
    for (var t = !1, r = 0; r < Re.length; r++) Re[r].routeTo(e) === !0 && (t = !0);
    for (var n = Pt.length; n--;) Pt[n](e);
    return t
}

function zu(e) {
    if (!(!e || !e.getAttribute)) {
        var t = e.getAttribute("href"),
            r = e.getAttribute("target");
        if (!(!t || !t.match(/^\//g) || r && !r.match(/^_?self$/i))) return an(t)
    }
}

function OI(e) {
    if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0)) return zu(e.currentTarget || e.target || this), qu(e)
}

function qu(e) {
    return e && (e.stopImmediatePropagation && e.stopImmediatePropagation(), e.stopPropagation && e.stopPropagation(), e.preventDefault()), !1
}

function bI(e) {
    if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0)) {
        var t = e.target;
        do
            if (String(t.nodeName).toUpperCase() === "A" && t.getAttribute("href")) {
                if (t.hasAttribute("native")) return;
                if (zu(t)) return qu(e)
            }
        while (t = t.parentNode)
    }
}
var ro = !1;

function DI() {
    ro || (typeof addEventListener == "function" && (X || addEventListener("popstate", function() {
        Ju(Wt())
    }), addEventListener("click", bI)), ro = !0)
}
var se = function(e) {
        function t(r) {
            e.call(this, r), r.history && (X = r.history), this.state = {
                url: r.url || Wt()
            }, DI()
        }
        return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.shouldComponentUpdate = function(n) {
            return n.static !== !0 ? !0 : n.url !== this.props.url || n.onChange !== this.props.onChange
        }, t.prototype.canRoute = function(n) {
            var o = re(this.props.children);
            return this.getMatchingChildren(o, n, !1).length > 0
        }, t.prototype.routeTo = function(n) {
            this.setState({
                url: n
            });
            var o = this.canRoute(n);
            return this.updating || this.forceUpdate(), o
        }, t.prototype.componentWillMount = function() {
            Re.push(this), this.updating = !0
        }, t.prototype.componentDidMount = function() {
            var n = this;
            X && (this.unlisten = X.listen(function(o) {
                n.routeTo("" + (o.pathname || "") + (o.search || ""))
            })), this.updating = !1
        }, t.prototype.componentWillUnmount = function() {
            typeof this.unlisten == "function" && this.unlisten(), Re.splice(Re.indexOf(this), 1)
        }, t.prototype.componentWillUpdate = function() {
            this.updating = !0
        }, t.prototype.componentDidUpdate = function() {
            this.updating = !1
        }, t.prototype.getMatchingChildren = function(n, o, i) {
            return n.filter(gI).sort(SI).map(function(s) {
                var a = sn(o, s.props.path, s.props);
                if (a) {
                    if (i !== !1) {
                        var u = {
                            url: o,
                            matches: a
                        };
                        return ju(u, a), delete u.ref, delete u.key, Cr(s, u)
                    }
                    return s
                }
            }).filter(Boolean)
        }, t.prototype.render = function(n, o) {
            var i = n.children,
                s = n.onChange,
                a = o.url,
                u = this.getMatchingChildren(re(i), a, !0),
                l = u[0] || null,
                c = this.previousUrl;
            return a !== c && (this.previousUrl = a, typeof s == "function" && s({
                router: this,
                url: a,
                previous: c,
                active: u,
                current: l
            })), l
        }, t
    }(Q),
    Zu = function(e) {
        return z("a", ju({
            onClick: OI
        }, e))
    },
    Xu = function(e) {
        return z(e.component, e)
    };
se.subscribers = Pt;
se.getCurrentUrl = Wt;
se.route = an;
se.Router = se;
se.Route = Xu;
se.Link = Zu;
se.exec = sn;
const PI = Object.freeze(Object.defineProperty({
    __proto__: null,
    Link: Zu,
    Route: Xu,
    Router: se,
    default: se,
    exec: sn,
    getCurrentUrl: Wt,
    route: an,
    subscribers: Pt
}, Symbol.toStringTag, {
    value: "Module"
}));
var Ct = {
    exports: {}
};
Ct.exports = class {
    constructor() {
        this.callbacks = {}
    }
    listenerCount(t) {
        return (this.callbacks[t] || []).length
    }
    on(t, r, n = !1) {
        return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push([r, n]), this
    }
    once(t, r) {
        return this.on(t, r, !0)
    }
    off(t, r) {
        this.callbacks[t] && (this.callbacks[t] = this.callbacks[t].filter(n => n[0] !== r))
    }
    emit(t, r) {
        const n = this.callbacks[t];
        if (n) {
            for (const [o, i] of n)
                if (i && this.off(t, o), o(r) === !1) return !1;
            return !0
        }
    }
};
const Qu = (Ct.exports == null ? {} : Ct.exports).default || Ct.exports,
    NI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Qu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    dr = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
    fr = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

function LI(e = {}) {
    let t = typeof navigator != "undefined" ? navigator.userAgent || navigator.vendor : void 0;
    return !t && typeof window != "undefined" && (t = window.opera), t ? ec(t, e) : !1
}

function ec(e, {
    checkFirst4: t
} = {}) {
    return dr.lastIndex = 0, fr.lastIndex = 0, !!(dr.test(e) || t && fr.test(e.substr(0, 4)))
}

function tc() {
    if (typeof navigator == "undefined") return null;
    const e = navigator.userAgent;
    if (!e.match(/iPad/i) && !e.match(/iPhone/i)) return null;
    const t = e.indexOf("OS ");
    return t === -1 ? null : parseInt(e.substr(t + 3, 3).replace("_", ".")) || null
}

function MI() {
    return !!tc()
}
const no = /Android/i;

function rc(e) {
    return no.lastIndex = 0, !!e && no.test(e)
}

function yI() {
    return typeof navigator == "undefined" ? !1 : rc(navigator.userAgent)
}
const wI = Object.freeze(Object.defineProperty({
        __proto__: null,
        MOBILE_USER_AGENT_FIRST_4_PATTERN: fr,
        MOBILE_USER_AGENT_PATTERN: dr,
        getIosVersion: tc,
        isAndroid: yI,
        isAndroidUserAgent: rc,
        isIos: MI,
        isMobile: LI,
        isMobileUserAgent: ec
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    nc = {
        gbp: {
            month: 3.5,
            year: 20,
            founding: 20
        },
        inr: {
            month: 50,
            year: 300,
            founding: 300
        }
    },
    oc = {
        month: 5,
        year: 50,
        founding: 50
    },
    ic = 99999999,
    sc = 99999999,
    UI = e => {
        const {
            value: t,
            interval: r,
            is_founding: n,
            currency: o
        } = e, i = (nc[o.toLowerCase()] || oc)[n ? "founding" : r], s = r === "month" ? ic : sc;
        return t < i ? `${bt(r)}ly plan price must be at least ${Er(i,o)}` : t > s ? `${bt(r)}ly${e.is_founding?" founding":""} plan price must be less than ${Er(s,o)}` : null
    },
    Er = (e, t) => wt(e * (Ve(t) ? 1 : 100), t),
    vI = Object.freeze(Object.defineProperty({
        __proto__: null,
        DEFAULT_MINIMUM_RATES: oc,
        MAX_MONTHLY_RATE: ic,
        MAX_YEARLY_RATE: sc,
        MINIMUM_CURRENCY_SPECIFIC_RATES: nc,
        currencyFormattedPledgePriceString: Er,
        validatePledgePrices: UI
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function kI(r) {
    return Ie(this, arguments, function*(e, t = {}) {
        var c;
        const l = N({
                cache: "no-cache"
            }, t),
            {
                query: o,
                json: i
            } = l,
            s = Ce(l, ["query", "json"]);
        let a = e;
        if (o) {
            let m;
            o instanceof URLSearchParams ? m = o : m = new URLSearchParams(Object.entries(o).reduce((E, [C, _]) => (_ !== void 0 && (Array.isArray(_) ? _.forEach(f => {
                f !== void 0 && E.push([`${C}[]`, f])
            }) : E.push([C, _])), E), []));
            const d = m.toString();
            d && (e.indexOf("?") !== -1 ? a += `&${d}` : a += `?${d}`)
        }
        i && (s.body = JSON.stringify(i), s.headers instanceof Headers || (s.headers = new Headers(s.headers)), s.headers.set("Content-Type", "application/json")), s.method && (s.method = s.method.toUpperCase());
        const u = yield fetch(a, s);
        if (!u.ok) {
            let m;
            try {
                m = yield u.json()
            } catch (d) {
                m = {}
            }
            throw new ac(u, m)
        }
        return (c = u.headers.get("Content-Type")) != null && c.startsWith("application/json") ? u.json() : u.text()
    })
}
class ac extends Error {
    constructor(t, r) {
        super(), this.response = t, this.body = r
    }
    getMessage(t) {
        return uT(this.body, t)
    }
}

function PR(e, t = "Something went wrong.") {
    return e instanceof ac ? e.getMessage() : t
}
const BI = e => {
        if (!e) return [];
        const t = [];
        for (const r of e) {
            if (t.length === 2) break;
            const n = r.toLowerCase();
            for (const [o, i] of Object.entries(Js)) {
                if (t.length === 2) break;
                if (o.toLowerCase() === n || o.toLowerCase().split(" & ").includes(n)) {
                    t.push({
                        category: o
                    });
                    break
                }
                for (const s of i) {
                    if (t.length === 2) break;
                    if (s.toLowerCase() === n || s.toLowerCase().split(" & ").includes(n)) {
                        t.push({
                            category: o,
                            subcategory: s
                        });
                        break
                    }
                }
            }
        }
        return t
    },
    uc = ({
        pub: e,
        section: t
    }) => {
        var f, S, g, P, L, A, b, M;
        const r = t == null ? void 0 : t.podcastSettings,
            n = (S = (f = r == null ? void 0 : r.podcast_title) != null ? f : t == null ? void 0 : t.name) != null ? S : null,
            o = (P = (g = r == null ? void 0 : r.podcast_description) != null ? g : t == null ? void 0 : t.description) != null ? P : null,
            i = (L = r == null ? void 0 : r.itunes_podcast_primary_category) != null ? L : null,
            s = (A = r == null ? void 0 : r.itunes_podcast_primary_subcategory) != null ? A : null,
            a = (b = r == null ? void 0 : r.itunes_podcast_secondary_category) != null ? b : null,
            u = (M = r == null ? void 0 : r.itunes_podcast_secondary_subcategory) != null ? M : null,
            l = (r == null ? void 0 : r.itunes_explicit) || !1,
            c = (r == null ? void 0 : r.podcast_art_url) || ut(),
            m = (r == null ? void 0 : r.paid_podcast_episode_art_url) || null,
            d = (r == null ? void 0 : r.podcast_byline) || e.podcast_byline || e.author_name || "",
            E = (r == null ? void 0 : r.language) || e.podcast_language || "",
            C = !!r && !!r.podcast_feed_url,
            _ = C ? r.podcast_feed_url : rn({
                pub: K(N({}, e), {
                    section: t
                })
            });
        return {
            title: n,
            description: o,
            primaryCategory: i,
            primarySubcategory: s,
            secondaryCategory: a,
            secondarySubcategory: u,
            isExplicit: l,
            artUrl: c,
            byline: d,
            language: E,
            isRedirected: C,
            podcastRssUrl: _,
            paidEpisodeArtUrl: m
        }
    },
    $I = ({
        pub: e,
        section: t
    }) => {
        var C, _;
        const r = (C = t == null ? void 0 : t.name) != null ? C : null,
            n = (_ = t == null ? void 0 : t.description) != null ? _ : null,
            o = null,
            i = null,
            s = null,
            a = null,
            u = !1,
            l = ut(),
            c = e.podcast_byline || e.author_name || "",
            m = e.podcast_language || "";
        return {
            title: r,
            description: n,
            primaryCategory: o,
            primarySubcategory: i,
            secondaryCategory: s,
            secondarySubcategory: a,
            isExplicit: u,
            artUrl: l,
            byline: c,
            language: m,
            isRedirected: !1,
            podcastRssUrl: null,
            paidEpisodeArtUrl: null
        }
    },
    xI = ({
        pub: e
    }) => {
        var _, f;
        const t = e.podcast_title || e.name,
            r = e.podcast_description || e.hero_text,
            n = e.itunes_podcast_primary_category,
            o = e.itunes_podcast_primary_subcategory,
            i = e.itunes_podcast_secondary_category,
            s = e.itunes_podcast_secondary_subcategory,
            a = (_ = e.itunes_explicit) != null ? _ : !1,
            u = e.podcast_art_url || ut(),
            l = e.podcast_byline || e.author_name,
            c = e.podcast_language || "",
            m = !!e.show_pub_podcast_tab,
            d = !!e.podcast_feed_url,
            E = N({}, e);
        delete E.section;
        const C = d ? e.podcast_feed_url : rn({
            pub: E
        });
        return {
            title: t,
            description: r,
            primaryCategory: n,
            primarySubcategory: o,
            secondaryCategory: i,
            secondarySubcategory: s,
            isExplicit: a,
            artUrl: u,
            byline: l,
            language: c,
            isRedirected: d,
            podcastRssUrl: C,
            showPodcastTab: m,
            paidEpisodeArtUrl: (f = e.paid_podcast_episode_art_url) != null ? f : null
        }
    },
    FI = ({
        pub: e,
        publication: t
    }) => {
        var _, f, S;
        const [r, n] = BI(t.tags.map(({
            canonical_name: g
        }) => g)), o = `${e.name} Podcast`, i = e.hero_text, s = r == null ? void 0 : r.category, a = (_ = r == null ? void 0 : r.subcategory) != null ? _ : null, u = n == null ? void 0 : n.category, l = (f = n == null ? void 0 : n.subcategory) != null ? f : null, c = e.explicit || !1, m = ut(), d = e.author_name;
        return {
            title: o,
            description: i,
            primaryCategory: s,
            primarySubcategory: a,
            secondaryCategory: u,
            secondarySubcategory: l,
            isExplicit: c,
            artUrl: m,
            byline: d,
            language: "",
            isRedirected: null,
            podcastRssUrl: null,
            showPodcastTab: !0,
            paidEpisodeArtUrl: (S = e.paid_podcast_episode_art_url) != null ? S : null
        }
    };

function GI(e, t) {
    return (t == null ? void 0 : t.cover_image) || (t == null ? void 0 : t.podcast_art_url) || (e == null ? void 0 : e.podcast_art_url)
}
const HI = e => {
        var r, n;
        const t = (n = (r = e.sections) == null ? void 0 : r.filter(({
            is_podcast: o
        }) => o).map(o => {
            var s;
            const i = uc({
                pub: e,
                section: o
            });
            return {
                slug: o.slug,
                podcastTitle: (s = i.title) != null ? s : "",
                sectionId: o.id
            }
        })) != null ? n : [];
        return [...e.podcast_enabled ? [{
            podcastTitle: e.podcast_title || e.name,
            slug: e.subdomain,
            sectionId: null
        }] : [], ...t]
    },
    WI = ({
        podcasts: e,
        urlSlug: t,
        isSection: r,
        defaultPodcastSlug: n
    }) => {
        if (!e.length) return null;
        if (t) {
            const o = e.find(({
                sectionId: i,
                slug: s
            }) => s === t && r === !!i);
            if (o) return o;
            typeof window != "undefined" && window.alert("No podcast was found at that URL")
        }
        return n && e.find(({
            slug: o
        }) => o == n) || e[0]
    };

function KI(t) {
    return Ie(this, arguments, function*({
        sectionId: e
    }) {
        return yield kI("/api/v1/can-syndicate-feed", {
            query: N({}, e && {
                sectionId: e
            })
        })
    })
}

function VI({
    pub: e,
    section: t
}) {
    var r, n;
    return t ? (r = t.spotify_podcast_settings) != null ? r : null : (n = e.spotify_podcast_settings) != null ? n : null
}
const YI = Object.freeze(Object.defineProperty({
    __proto__: null,
    getCanSyndicateInfo: KI,
    getInitialPodcast: WI,
    getNewPubPodcastSettings: FI,
    getNewSectionPodcastSettings: $I,
    getPodcastEpisodeImageUrl: GI,
    getPodcastsForDisplay: HI,
    getPubPodcastSettings: xI,
    getSectionPodcastSettings: uc,
    getSpotifyPodcastSettings: VI
}, Symbol.toStringTag, {
    value: "Module"
}));
var p = {
        exports: {}
    },
    I = p.exports;
const {
    h: pr,
    Fragment: NR
} = Nc, {
    route: jI
} = se || PI, {
    getQueryItem: JI,
    pathWithQuery: un,
    parseQuery: cc,
    getGlobalAccountSettingsUrl: zI,
    getPubAccountSettingsUrl: qI,
    getCurrentUrlForLoginRedirect: ZI
} = uI, {
    centsToPriceString: me,
    toTitleCase: XI,
    pluralize: LR,
    isZeroDecimalCurrency: MR
} = Je, QI = Qu || NI, {
    isMobileUserAgent: eT,
    getIosVersion: tT
} = wI, {
    validatePledgePrices: Jt
} = vI, oo = Mt || Ei, {
    getPodcastEpisodeImageUrl: rT
} = YI, {
    I18N: lc
} = tl;
I.getPodcastEpisodeImageUrl = rT;
const nT = ["text", "password", "file", "search", "email", "number", "date", "color", "datetime", "datetime-local", "month", "range", "search", "tel", "time", "url", "week"];
let mr = typeof window == "undefined" || !window.addEventListener;
mr || window.addEventListener("load", () => {
    mr = !0
}, !1);
typeof window != "undefined" && window._preloads;
I.globalPlaybackNotifier = typeof window != "undefined" ? new QI : null;
I.windowReady = e => {
    mr ? e() : window.addEventListener("load", e, !1)
};
I.debounce = function(e, t, r = this) {
    let n = null;
    return function() {
        clearTimeout(n), n = setTimeout(() => e.apply(r, arguments), t)
    }
};
I.couponToString = (e, t, {
    language: r = "en"
} = {}) => {
    const {
        iTemplate: n,
        iPlural: o
    } = lc.i(r);
    if (!e || e.loading || e.error) return;
    let i;
    if (e.trial_period_days) i = n `${e.trial_period_days} day free trial`;
    else if (e.extra_seats) i = o("an additional seat", "%1 additional seats", e.extra_seats);
    else if (e.percent_off)
        if (e.duration === "once")
            if (t) switch (t.interval) {
                case "month":
                    i = n `${Math.round(e.percent_off_precise||e.percent_off)}% off first month`;
                    break;
                case "year":
                    i = n `${Math.round(e.percent_off_precise||e.percent_off)}% off first year`;
                    break;
                case "week":
                    i = n `${Math.round(e.percent_off_precise||e.percent_off)}% off first week`;
                    break;
                case "day":
                    i = n `${Math.round(e.percent_off_precise||e.percent_off)}% off first day`;
                    break
            } else i = n `${Math.round(e.percent_off_precise||e.percent_off)}% off first payment`;
            else e.duration === "repeating" ? e.duration_in_months % 12 === 0 ? i = o("%2% off for 1 year", "%2% off for %1 years", e.duration_in_months / 12, Math.round(e.percent_off_precise || e.percent_off)) : i = o("%2% off for 1 month", "%2% off for %1 months", e.duration_in_months, Math.round(e.percent_off_precise || e.percent_off)) : i = n `${Math.round(e.percent_off_precise||e.percent_off)}% off forever`;
    else if (e.amount_off)
        if (e.duration === "once")
            if (t) switch (t.interval) {
                case "month":
                    i = n `${me(e.amount_off,t.currency)} off first month`;
                    break;
                case "year":
                    i = n `${me(e.amount_off,t.currency)} off first year`;
                    break;
                case "week":
                    i = n `${me(e.amount_off,t.currency)} off first week`;
                    break;
                case "day":
                    i = n `${me(e.amount_off,t.currency)} off first day`;
                    break
            } else i = n `${me(e.amount_off,t.currency)} off first payment`;
            else e.duration === "repeating" ? e.duration_in_months % 12 === 0 ? i = o("%2 off for 1 year", "%2 off for %1 years", e.duration_in_months / 12, me(e.amount_off, t.currency)) : i = o("%2 off for 1 month", "%2 off for %1 months", e.duration_in_months, me(e.amount_off, t.currency)) : i = n `${me(e.amount_off,t.currency)} off forever`;
    return i
};
I.preloadImage = function(e, t) {
    const r = new Image;
    r.onload = () => {
        r.onload = r.onerror = null, t && t(r)
    }, r.onerror = r.onload, r.src = e
};
I.getHostname = e => {
    const t = document.createElement("a");
    return t.href = e, (t.hostname || "").replace(/\.localhost$/, "")
};
I.getPathname = e => {
    const t = document.createElement("a");
    return t.href = e, t.pathname || ""
};
I.getPath = e => {
    const t = document.createElement("a");
    return t.href = e, (t.pathname || "") + (t.search || "") + (t.hash || "")
};
I.getNetworkErrorMessage = (e, t) => {
    var r;
    return I.getNetworkErrorMessageFromResponse((e == null ? void 0 : e.body) || ((r = e == null ? void 0 : e.response) == null ? void 0 : r.body), t)
};
I.getNetworkErrorBody = e => {
    var r;
    const t = (e == null ? void 0 : e.body) || ((r = e == null ? void 0 : e.response) == null ? void 0 : r.body);
    if (t && t.error) return {
        msg: t.error
    };
    if (t && t.errors && t.errors.length > 0) return {
        html: t.errors[t.errors.length - 1].msgHTML,
        msg: t.errors[t.errors.length - 1].msg
    }
};
I.getNetworkErrorMessageFromXhr = (e, t) => {
    let r;
    try {
        r = JSON.parse(e && e.responseText)
    } catch (n) {}
    return I.getNetworkErrorMessageFromResponse(r, t)
};
I.getNetworkErrorMessageFromResponse = (e, t) => (t = t || "Something went wrong", e && e.error ? e.error : e && e.errors && e.errors.length > 0 && e.errors[e.errors.length - 1].msg || t);
I.getNetworkErrorObjectFromResponse = e => {
    var r, n;
    if (!((n = (r = e == null ? void 0 : e.response) == null ? void 0 : r.body) != null && n.errors) || e.response.body.errors.length === 0) return null;
    const t = {};
    for (const o of e.response.body.errors) t[o.param] = o.msg;
    return t
};
I.getNetworkErrorObjectWithValuesFromResponse = e => {
    var r, n;
    if (!((n = (r = e == null ? void 0 : e.response) == null ? void 0 : r.body) != null && n.errors) || e.response.body.errors.length === 0) return null;
    const t = {};
    for (const o of e.response.body.errors) t[o.param] = {
        msg: o.msg,
        value: o.value
    };
    return t
};
I.inputPrefillHack = function() {
    return [pr("input", {
        type: "email",
        name: "fake_email",
        placeholder: "email",
        style: "position:absolute;top:-10000px;left:-10000px"
    }), pr("input", {
        type: "password",
        name: "fake_password",
        placeholder: "password",
        style: "position:absolute;top:-10000px;left:-10000px"
    })]
};
I.isBrowser = function() {
    return typeof window != "undefined"
};
I.isMobileBrowser = function() {
    if (typeof navigator != "undefined" || typeof window != "undefined") {
        const e = navigator.userAgent || navigator.vendor || window.opera;
        if (eT(e, {
                checkFirst4: !0
            })) return !0
    }
    return !1
};
I.isIE = () => typeof window == "undefined" || !window.navigator || !window.navigator.userAgent ? !1 : /(MSIE|Trident)/i.test(window.navigator.userAgent);
I.isFirefox = () => typeof window == "undefined" || !window.navigator || !window.navigator.userAgent ? !1 : /Firefox/i.test(window.navigator.userAgent);
I.isAndroid = () => typeof window == "undefined" || !window.navigator || !window.navigator.userAgent ? !1 : /Android/i.test(window.navigator.userAgent);
I.isBrave = () => !(typeof window == "undefined" || !window.navigator || !window.navigator.brave);
I.isIOs = () => !!I.iosVersion();
I.isMac = e => (typeof window != "undefined" && !e && (e = window.navigator), e ? e.userAgentData && e.userAgentData.platform ? /macOS/.test(e.userAgentData.platform) : /Mac/.test(e.platform) : !1);
I.isSafari = () => navigator ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
I.getModKeyLabel = (e = I.isMac()) => e ? "⌘" : "^";
I.iosVersion = () => typeof window == "undefined" ? null : tT();
I.fixSmsUrl = e => {
    const t = I.iosVersion();
    return t ? t >= 9 ? e.replace("?body=", "&body=") : e.replace("?body=", ";body=") : e
};
const oT = e => ((t, r) => {
    let n;
    const o = () => r.userAgent.match(/ipad|iphone/i),
        i = l => {
            n = t.createElement("textArea"), n.value = l, t.body.appendChild(n)
        },
        s = () => {
            let l, c;
            o() ? (l = t.createRange(), l.selectNodeContents(n), c = e.getSelection(), c.removeAllRanges(), c.addRange(l), n.setSelectionRange(0, 999999)) : n.select()
        },
        a = () => {
            t.execCommand("copy"), t.body.removeChild(n)
        };
    return {
        copy: l => {
            i(l), s(), a()
        }
    }
})(document, navigator);
I.copyToClipboard = e => {
    if (typeof window == "undefined") return;
    oT(window).copy(e);
    const t = r => {
        r && r.clipboardData ? (r.clipboardData.setData("text/plain", e), r.preventDefault()) : window.clipboardData && window.clipboardData.setData("Text", e)
    };
    I.iosVersion() || window.addEventListener("copy", t), setTimeout(() => {
        try {
            const r = document.createElement("input");
            r.style = "position: absolute; top: 0; right: 0; height: 1px; width: 1px;", document.documentElement.appendChild(r), r.value = e, r.contentEditable = !0, r.readOnly = !1;
            const n = document.createRange();
            n.selectNodeContents(r);
            const o = window.getSelection();
            o.removeAllRanges(), o.addRange(n), r.setSelectionRange(0, 999999), document.execCommand("copy"), document.documentElement.removeChild(r)
        } catch (r) {}
        window.removeEventListener("copy", t)
    }, 0)
};
I.copyNodeToClipboard = e => {
    try {
        I.selectNode(e), document.execCommand("copy")
    } catch (t) {
        console.error("Failed to copy text:", t)
    }
};
I.selectNode = e => {
    try {
        if (["INPUT", "TEXTAREA"].includes(e.nodeName) && e.select) e.select();
        else if (document.body.createTextRange) {
            const t = document.body.createTextRange();
            t.moveToElementText(e), t.select()
        } else if (window.getSelection) {
            const t = window.getSelection(),
                r = document.createRange();
            r.selectNodeContents(e), t.removeAllRanges(), t.addRange(r)
        } else console.warn("Could not select text in node: Unsupported browser")
    } catch (t) {
        console.error("Failed to select node:", t)
    }
};
I.deselectNode = e => {
    try {
        const t = window.getSelection ? window.getSelection() : document.selection;
        t && t.anchorNode === e && (t.empty ? t.empty() : t.removeAllRanges && t.removeAllRanges())
    } catch (t) {
        console.error("Failed to deselect node:", t)
    }
};
I.getBodyOffset = (e, t) => {
    const r = `offset${XI(t)}`;
    let n = 0;
    for (; e && e !== document.body;) n += e[r], e = e.offsetParent || e.parentNode;
    return n
};
I.getUrlHash = () => typeof window == "undefined" || !window.location.hash ? null : decodeURIComponent(window.location.hash.slice(1));
I.scrollToHash = function(e) {
    const t = I.getUrlHash();
    if (!t) return;
    const r = document.getElementById(t);
    r && (typeof e != "number" && (e = -122), document.documentElement.scrollTop = Math.max(0, I.getBodyOffset(r, "top") + e))
};
I.mightSupportApplePay = e => !(!e || !e.stripe_country || e.apple_pay_disabled || typeof window == "undefined" || !window.ApplePaySession);
I.addClass = (e, t) => {
    e.className += ` ${t}`
};
I.removeClass = (e, t) => {
    e.className = e.className.replace(new RegExp(`\\b${t}\\b`, "g"), "").trim()
};
I.hasClass = (e, t) => new RegExp(`\\b${t}\\b`, "g").test(e.className);
I.isFocused = (...e) => I.isRootOrChild(document.activeElement, ...e);
I.isRootOrChild = (e, ...t) => {
    for (; e;) {
        for (const r of t)
            if (typeof r == "function" ? r(e) : e === r) return !0;
        e = e.parentNode
    }
    return !1
};
I.getRootOrChild = (e, t, {
    maxDepth: r
} = {}) => {
    const n = [e];
    let o = 0;
    for (; n.length > 0;) {
        o++;
        const i = n.splice(0);
        for (const s of i)
            if (s) {
                if (t(s)) return s;
                (!r || o < r) && s.children && n.push(...s.children)
            }
    }
    return null
};
I.getRootOrParent = (e, t) => e ? t(e) ? e : I.getRootOrParent(e.parentNode, t) : null;
I.getVisibilityApi = () => {
    let e, t;
    return typeof document != "undefined" && typeof document.addEventListener != "undefined" && (typeof document.hidden != "undefined" ? (e = "visibilitychange", t = "hidden") : typeof document.msHidden != "undefined" ? (e = "msvisibilitychange", t = "msHidden") : typeof document.webkitHidden != "undefined" && (e = "webkitvisibilitychange", t = "webkitHidden")), {
        visibilityChange: e,
        hidden: t
    }
};
I.isWindowVisible = () => {
    const {
        hidden: e
    } = I.getVisibilityApi();
    return e ? !document[e] : !0
};
I.onWindowVisibilityChange = e => {
    const {
        visibilityChange: t
    } = I.getVisibilityApi();
    t && document.addEventListener(t, e, !1)
};
I.offWindowVisibilityChange = e => {
    const {
        visibilityChange: t
    } = I.getVisibilityApi();
    t && document.removeEventListener(t, e, !1)
};
I.disableBackspaceNavigation = () => {
    document.addEventListener("keydown", _c, !1)
};
I.enableBackspaceNavigation = () => {
    document.removeEventListener("keydown", _c, !1)
};

function _c(e) {
    if (e.keyCode !== 8) return;
    const t = e.srcElement || e.target;
    if (!t.readonly && !t.disabled) {
        if (t.isContentEditable) return;
        if (t.nodeName === "TEXTAREA") return;
        if (t.nodeName === "INPUT" && nT.indexOf((t.getAttribute("type") || "").toLowerCase()) > -1) return
    }
    return e.preventDefault(), !1
}
I.getBlob = e => new Promise((t, r) => {
    const n = new XMLHttpRequest;
    n.open("GET", e, !0), n.responseType = "blob", n.onerror = r, n.onload = o => {
        n.status == 200 ? t(n.response) : r(new Error("Failed to fetch blob"))
    }, n.send()
});
I.getDataUrlFromFile = e => new Promise((t, r) => {
    if (!window.FileReader) {
        r(new TypeError("File reader API not found"));
        return
    }
    const n = new FileReader;
    n.onerror = r, n.onload = () => {
        t(n.result)
    }, n.readAsDataURL(e)
});
I.getExifOrientationFromFile = e => new Promise((t, r) => {
    if (!window.FileReader) {
        r(new TypeError("File reader API not found"));
        return
    }
    if (!window.DataView) {
        r(new TypeError("DataView API not found"));
        return
    }
    const n = new FileReader;
    n.onerror = r, n.onload = () => {
        const o = new DataView(n.result);
        if (o.getUint16(0, !1) != 65496) return t(-2);
        const i = o.byteLength;
        let s = 2;
        for (; s < i;) {
            if (o.getUint16(s + 2, !1) <= 8) return t(-1);
            const a = o.getUint16(s, !1);
            if (s += 2, a == 65505) {
                if (o.getUint32(s += 2, !1) != 1165519206) return t(-1);
                const u = o.getUint16(s += 6, !1) == 18761;
                s += o.getUint32(s + 4, u);
                const l = o.getUint16(s, u);
                s += 2;
                for (let c = 0; c < l; c++)
                    if (o.getUint16(s + c * 12, u) == 274) return t(o.getUint16(s + c * 12 + 8, u))
            } else {
                if ((a & 65280) != 65280) break;
                s += o.getUint16(s, !1)
            }
        }
        t(-1)
    }, n.readAsArrayBuffer(e)
});
I.getImageDataFromFileInput = e => Ie(void 0, null, function*() {
    let t, r;
    const n = e != null && e.files ? e.files[0] : null;
    if (e.value = "", n) {
        try {
            t = yield I.getDataUrlFromFile(n)
        } catch (o) {
            console.error("Failed to get data URL from file:", o), alert(o.message);
            return
        }
        try {
            r = yield I.getExifOrientationFromFile(n)
        } catch (o) {
            console.error("Failed to extract EXIF data from file:", o)
        }
    }
    return {
        url: t,
        orientation: r
    }
});
I.transformExifOrientation = e => {
    switch (e) {
        case 2:
            return "rotateY(180deg)";
        case 3:
            return "rotateZ(-180deg)";
        case 4:
            return "rotateZ(-180deg) rotateY(180deg)";
        case 5:
            return "rotateZ(-90deg) rotateY(180deg)";
        case 6:
            return "rotateZ(90deg)";
        case 7:
            return "rotateZ(90deg) rotateY(180deg)";
        case 8:
            return "rotateZ(-90deg)";
        default:
            return ""
    }
};
I.maxScroll = () => Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight;
I.getLoginRedirect = ({
    redirect: e,
    email: t,
    justTrying: r,
    with_password: n = !1,
    useOriginalUrl: o = !1
} = {}) => (typeof e != "string" && (e = ZI({
    useOriginalUrl: o
})), un("/account/login", {
    redirect: e || "",
    email: t || "",
    with_password: n ? "1" : "",
    justTrying: r || ""
}));
I.redirectToLogin = (e = {}) => {
    document.location.href = I.getLoginRedirect(e)
};
I.redirectToAccount = e => {
    window.location.assign(qI(e))
};
I.redirectToAccountSettings = () => {
    document.location.href = zI()
};
I.base64encode = e => {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
    let r = "",
        n, o, i, s, a, u, l, c = 0;
    for (e = I.utf8Encode(e); c < e.length;) n = e.charCodeAt(c++), o = e.charCodeAt(c++), i = e.charCodeAt(c++), s = n >> 2, a = (n & 3) << 4 | o >> 4, u = (o & 15) << 2 | i >> 6, l = i & 63, isNaN(o) ? u = l = 64 : isNaN(i) && (l = 64), r = r + t.charAt(s) + t.charAt(a) + t.charAt(u) + t.charAt(l);
    return r
};
I.utf8Encode = e => {
    let t = "";
    for (let r = 0; r < e.length; r++) {
        const n = e.charCodeAt(r);
        n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(n & 63 | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(n & 63 | 128))
    }
    return t
};
I.redirectNoScroll = e => {
    const t = [window.scrollX, window.scrollY];
    I.redirect(e), window.scrollTo(...t)
};
I.redirect = (e, {
    event: t = null,
    local_navigation: r = !0,
    replace: n = !1,
    newTab: o = !1,
    state: i = void 0
} = {}) => {
    var a;
    if (t && t.preventDefault(), e.trim().startsWith("javascript:")) return;
    if (e.startsWith("#") && r) {
        window.location.hash !== e && (n && ((a = window.history) != null && a.replaceState) ? window.history.replaceState(i != null ? i : window.history.state, null, e) : window.location.hash = e), I.scrollToHash();
        return
    }
    if (r && I.getHostname(e) && I.getHostname(e) !== I.getHostname(window.location.href) && (r = !1), o || t && (t.metaKey || t.ctrlKey)) {
        window.open(e, "_blank");
        return
    }
    const s = history.state;
    if (r && jI(I.getPath(e), n)) {
        i !== void 0 ? history.replaceState(i, "") : n && s !== void 0 && history.replaceState(s, ""), setTimeout(() => I.scrollToHash(), 0);
        return
    }
    window.location.href = e
};
I.setState = (e, t) => new Promise(r => {
    e.setState(t, r)
});
I.stateTransaction = (e, t) => new Promise((r, n) => {
    e.setState((...o) => Ie(void 0, null, function*() {
        try {
            r(yield t.apply(e, o))
        } catch (i) {
            n(i)
        }
    }))
});
I.stateLock = (o, i, s, ...a) => Ie(void 0, [o, i, s, ...a], function*(e, t, r, {
    force: n
} = {}) {
    return typeof t == "function" && (r = t, t = "lock"), yield I.stateTransaction(e, (u, ...l) => Ie(void 0, null, function*() {
        if (u[t] && !n) return;
        yield I.setState(e, {
            [t]: !0
        });
        const c = yield r.call(e, u, ...l);
        return yield I.setState(e, {
            [t]: !1
        }), c
    }))
});
I.getsMessageQuery = e => t => {
    const r = cc(document.location.href),
        n = JI("message");
    if (n) {
        delete r.message;
        const o = `${un(document.location.pathname,r)}${document.location.hash}`;
        window && window.history && window.history.replaceState({}, document.title, o)
    }
    return pr(e, N({
        message: n
    }, t))
};
I.uuidV4 = () => {
    const e = window.crypto || window.msCrypto;
    if (typeof(e == null ? void 0 : e.randomUUID) == "function") return e.randomUUID();
    if (e) return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, t => (t ^ e.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16)); {
        let t = new Date().getTime(),
            r = typeof performance != "undefined" && performance.now && performance.now() * 1e3 || 0;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
            let o = Math.random() * 16;
            return t > 0 ? (o = (t + o) % 16 | 0, t = Math.floor(t / 16)) : (o = (r + o) % 16 | 0, r = Math.floor(r / 16)), (n === "x" ? o : o & 3 | 8).toString(16)
        })
    }
};
I.isStandaloneWebApp = () => navigator.standalone ? !0 : window.matchMedia("(display-mode: standalone)").matches;
I.disabledIfSSR = () => typeof window == "undefined" ? "disabled" : "";
I.focusElement = e => {
    e.focus && e.focus(), e.select && e.select()
};
I.getRoleOrOwner = (e, t) => e ? e.user_id === t.author_id ? "owner" : e.role : "byline";
I.hexWithOpacity = (e, t) => {
    if (!e) return e;
    e = e.replace("#", "");
    const r = parseInt(e.substring(0, 2), 16),
        n = parseInt(e.substring(2, 4), 16),
        o = parseInt(e.substring(4, 6), 16);
    return `rgba(${r},${n},${o},${t/100})`
};
I.getSelectTheme = ({
    primary: e,
    neutral0: t = "#f8f8f8",
    neutral20: r = "#d8d8d8",
    danger: n = "var(--color-accent-red)",
    dangerLight: o = "var(--color-bg-accent-red)"
}) => i => K(N({}, i), {
    colors: K(N({}, i.colors), {
        primary: e,
        primary25: I.hexWithOpacity(e, 25),
        primary50: I.hexWithOpacity(e, 50),
        primary75: I.hexWithOpacity(e, 75),
        neutral0: t,
        neutral20: r,
        danger: n,
        dangerLight: o
    })
});
I.removeQueryParam = (e, {
    stripHash: t = !1
} = {}) => {
    var r;
    if (typeof window != "undefined" && ((r = window.history) != null && r.replaceState)) {
        const n = cc(window.location.href);
        if (!Array.isArray(e)) delete n[e];
        else
            for (const i of e) delete n[i];
        const o = `${un(window.location.pathname,n)}${t?"":window.location.hash}`;
        window.history.replaceState(window.history.state, document.title, o)
    }
};
I.isFullscreen = () => typeof window == "undefined" ? !1 : typeof document.webkitCurrentFullScreenElement != "undefined" ? document.webkitCurrentFullScreenElement !== null : typeof document.fullscreenElement != "undefined" ? document.fullscreenElement !== null : !1;
I.goFullscreen = e => typeof window == "undefined" ? !1 : e.requestFullScreen ? (e.requestFullScreen(), !0) : e.webkitRequestFullScreen ? (e.webkitRequestFullScreen(), !0) : e.mozRequestFullScreen ? (e.mozRequestFullScreen(), !0) : !1;
I.exitFullscreen = () => {
    if (!I.isFullscreen()) return !1;
    if (document.exitFullscreen) return document.exitFullscreen(), !0;
    if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else {
        if (document.mozCancelFullScreen) return document.mozCancelFullScreen(), !0;
        if (document.msExitFullscreen) return document.msExitFullscreen(), !0
    }
    return !1
};
I.exitPictureInPicture = () => typeof window == "undefined" || !document.pictureInPictureElement || !document.exitPictureInPicture ? !1 : (document.exitPictureInPicture(), !0);
I.downloadSrc = e => {
    const t = document.createElement("a");
    document.body.appendChild(t), t.href = e, t.target = "_blank", t.click(), document.body.removeChild(t)
};
I.getCurrencyFormattedPledgePlans = (e, {
    skipFoundingPlan: t = !1
} = {}) => {
    if (!(e != null && e.length)) return [];
    const r = [];
    for (const n of e) t && n.is_founding ? r.push(N({}, n)) : n.amount ? r.push(K(N({}, n), {
        amount: n.amount
    })) : r.push(N({}, n));
    return r
};
I.validatePledgePlanValues = (e, t, r, n) => {
    if (r <= t) return "Your founding price must be greater than your yearly price";
    const o = Jt({
        value: e,
        interval: "month",
        is_founding: !1,
        currency: n
    });
    if (o) return o;
    const i = Jt({
        value: t,
        interval: "year",
        is_founding: !1,
        currency: n
    });
    if (i) return i;
    const s = Jt({
        value: r,
        interval: "year",
        is_founding: !0,
        currency: n
    });
    return s || null
};
I.decimalToPercentString = e => {
    let t = e;
    return typeof e == "string" && (t = parseFloat(e)), `${Math.round(t*100)}%`
};
const Ge = new Intl.DateTimeFormat(void 0, {
        timeStyle: "short"
    }),
    io = new Intl.DateTimeFormat(void 0, {
        month: "short",
        day: "numeric"
    }),
    iT = new Intl.DateTimeFormat(void 0, {
        dateStyle: "long"
    }),
    sT = new Intl.DateTimeFormat(void 0, {
        dateStyle: "long"
    });
I.formatPostDate = (e, {
    includeTime: t,
    language: r
} = {}) => {
    const n = oo(e).locale(r || "en"),
        o = oo(),
        {
            iTemplate: i
        } = lc.i(r);
    return n.isBefore(o.startOf("year")) ? iT.format(n.toDate()) + (t ? i ` at ${Ge.format(n.toDate())}` : "") : n.isBefore(o.startOf("day")) ? io.format(n.toDate()) + (t ? i ` at ${Ge.format(n.toDate())}` : "") : n.isAfter(o.endOf("year")) ? sT.format(n.toDate()) + (t ? i ` at ${Ge.format(n.toDate())}` : "") : n.isAfter(o.endOf("day")) ? io.format(n.toDate()) + (t ? i ` at ${Ge.format(n.toDate())}` : "") : Ge.format(n.toDate())
};
I.getBanMessage = e => {
    const t = r => `We've removed your publication from public view due a violation of Substack's ${r}. If you believe this was a mistake, you can submit an appeal to our Trust & Safety team`;
    switch (e) {
        case "hate":
            return t("Hate policy");
        case "illegal":
            return t("Illegal & Harmful Activities policy");
        case "impersonation":
            return t("Impersonation policy");
        case "plagiarism":
            return t("Plagiarism policy");
        case "porn":
            return t("Nudity, Porn, & Erotica policy");
        case "private_information":
            return t("Private Information policy");
        case "spam":
            return t("Spam & Phishing policy");
        default:
            return t("Content Guidelines, Terms of Service, or Publisher Agreement")
    }
};
I.isDevEnv = () => typeof window != "undefined" && window._preloads.isDevelopmentEnvironment;
(p.exports == null ? {} : p.exports).default || p.exports;
const yR = (p.exports == null ? {} : p.exports).getPodcastEpisodeImageUrl,
    wR = (p.exports == null ? {} : p.exports).globalPlaybackNotifier,
    aT = (p.exports == null ? {} : p.exports).windowReady,
    UR = (p.exports == null ? {} : p.exports).debounce,
    vR = (p.exports == null ? {} : p.exports).couponToString,
    kR = (p.exports == null ? {} : p.exports).preloadImage,
    BR = (p.exports == null ? {} : p.exports).getHostname,
    $R = (p.exports == null ? {} : p.exports).getPathname;
(p.exports == null ? {} : p.exports).getPath;
const xR = (p.exports == null ? {} : p.exports).getNetworkErrorMessage,
    FR = (p.exports == null ? {} : p.exports).getNetworkErrorBody,
    GR = (p.exports == null ? {} : p.exports).getNetworkErrorMessageFromXhr,
    uT = (p.exports == null ? {} : p.exports).getNetworkErrorMessageFromResponse;
(p.exports == null ? {} : p.exports).getNetworkErrorObjectFromResponse;
const HR = (p.exports == null ? {} : p.exports).getNetworkErrorObjectWithValuesFromResponse,
    WR = (p.exports == null ? {} : p.exports).inputPrefillHack;
(p.exports == null ? {} : p.exports).isBrowser;
const KR = (p.exports == null ? {} : p.exports).isMobileBrowser,
    VR = (p.exports == null ? {} : p.exports).isIE,
    YR = (p.exports == null ? {} : p.exports).isFirefox,
    jR = (p.exports == null ? {} : p.exports).isAndroid;
(p.exports == null ? {} : p.exports).isBrave;
const JR = (p.exports == null ? {} : p.exports).isIOs,
    zR = (p.exports == null ? {} : p.exports).isMac,
    qR = (p.exports == null ? {} : p.exports).isSafari,
    ZR = (p.exports == null ? {} : p.exports).getModKeyLabel;
(p.exports == null ? {} : p.exports).iosVersion;
(p.exports == null ? {} : p.exports).fixSmsUrl;
const XR = (p.exports == null ? {} : p.exports).copyToClipboard,
    QR = (p.exports == null ? {} : p.exports).copyNodeToClipboard,
    eO = (p.exports == null ? {} : p.exports).selectNode,
    tO = (p.exports == null ? {} : p.exports).deselectNode,
    rO = (p.exports == null ? {} : p.exports).getBodyOffset,
    nO = (p.exports == null ? {} : p.exports).getUrlHash,
    oO = (p.exports == null ? {} : p.exports).scrollToHash,
    iO = (p.exports == null ? {} : p.exports).mightSupportApplePay,
    sO = (p.exports == null ? {} : p.exports).addClass,
    aO = (p.exports == null ? {} : p.exports).removeClass,
    uO = (p.exports == null ? {} : p.exports).hasClass,
    cO = (p.exports == null ? {} : p.exports).isFocused,
    lO = (p.exports == null ? {} : p.exports).isRootOrChild,
    _O = (p.exports == null ? {} : p.exports).getRootOrChild,
    dO = (p.exports == null ? {} : p.exports).getRootOrParent;
(p.exports == null ? {} : p.exports).getVisibilityApi;
const fO = (p.exports == null ? {} : p.exports).isWindowVisible,
    EO = (p.exports == null ? {} : p.exports).onWindowVisibilityChange,
    pO = (p.exports == null ? {} : p.exports).offWindowVisibilityChange,
    mO = (p.exports == null ? {} : p.exports).disableBackspaceNavigation,
    SO = (p.exports == null ? {} : p.exports).enableBackspaceNavigation,
    gO = (p.exports == null ? {} : p.exports).getBlob,
    hO = (p.exports == null ? {} : p.exports).getDataUrlFromFile,
    CO = (p.exports == null ? {} : p.exports).getExifOrientationFromFile,
    IO = (p.exports == null ? {} : p.exports).getImageDataFromFileInput,
    TO = (p.exports == null ? {} : p.exports).transformExifOrientation,
    AO = (p.exports == null ? {} : p.exports).maxScroll;
(p.exports == null ? {} : p.exports).getLoginRedirect;
const RO = (p.exports == null ? {} : p.exports).redirectToLogin,
    OO = (p.exports == null ? {} : p.exports).redirectToAccount,
    bO = (p.exports == null ? {} : p.exports).redirectToAccountSettings,
    cT = (p.exports == null ? {} : p.exports).base64encode;
(p.exports == null ? {} : p.exports).utf8Encode;
const DO = (p.exports == null ? {} : p.exports).redirectNoScroll,
    PO = (p.exports == null ? {} : p.exports).redirect,
    NO = (p.exports == null ? {} : p.exports).setState,
    LO = (p.exports == null ? {} : p.exports).stateTransaction,
    MO = (p.exports == null ? {} : p.exports).stateLock,
    yO = (p.exports == null ? {} : p.exports).getsMessageQuery,
    lT = (p.exports == null ? {} : p.exports).uuidV4;
(p.exports == null ? {} : p.exports).isStandaloneWebApp;
const wO = (p.exports == null ? {} : p.exports).disabledIfSSR,
    UO = (p.exports == null ? {} : p.exports).focusElement,
    vO = (p.exports == null ? {} : p.exports).getRoleOrOwner;
(p.exports == null ? {} : p.exports).hexWithOpacity;
const kO = (p.exports == null ? {} : p.exports).getSelectTheme,
    BO = (p.exports == null ? {} : p.exports).removeQueryParam,
    $O = (p.exports == null ? {} : p.exports).isFullscreen,
    xO = (p.exports == null ? {} : p.exports).goFullscreen,
    FO = (p.exports == null ? {} : p.exports).exitFullscreen,
    GO = (p.exports == null ? {} : p.exports).exitPictureInPicture,
    HO = (p.exports == null ? {} : p.exports).downloadSrc,
    WO = (p.exports == null ? {} : p.exports).getCurrencyFormattedPledgePlans,
    KO = (p.exports == null ? {} : p.exports).validatePledgePlanValues,
    VO = (p.exports == null ? {} : p.exports).decimalToPercentString,
    YO = (p.exports == null ? {} : p.exports).formatPostDate,
    jO = (p.exports == null ? {} : p.exports).getBanMessage,
    JO = (p.exports == null ? {} : p.exports).isDevEnv,
    dc = aa();

function fc(e, {
    toHead: t = !1
} = {}) {
    aT(() => {
        const r = document.createElement("script");
        if (r.async = !0, r.src = e, t) document.head.appendChild(r);
        else {
            const n = document.getElementsByTagName("script")[0];
            n.parentNode && n.parentNode.insertBefore(r, n)
        }
    })
}

function Ec() {
    return typeof window != "undefined" && window._preloads && window._preloads.publicationSettings && window._preloads.publicationSettings.google_analytics_4_token
}

function zO() {
    var n, o, i;
    if (typeof window == "undefined") return;
    const e = (o = (n = window == null ? void 0 : window._preloads) == null ? void 0 : n.pub) == null ? void 0 : o.google_tag_manager_token;
    if (!e) return;
    const t = Ec();
    if (e === t) return;
    window.dataLayer = window.dataLayer || [], lr("exempt_from_gtm_filter") ? window.dataLayer.push({
        "gtm.allowlist": ["customPixels", "customScripts", "google", "html", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes", "sandboxedScripts"]
    }) : window.dataLayer.push({
        "gtm.allowlist": ["google"],
        "gtm.blocklist": ["customPixels", "customScripts", "html", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes", "sandboxedScripts"]
    }), window.dataLayer.push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js"
    });
    const r = ct();
    (i = r.user) != null && i.id && window.dataLayer.push({
        userId: r.user.id.toString()
    }), fc(`https://www.googletagmanager.com/gtm.js?id=${e}`, {
        toHead: !0
    })
}

function ct() {
    let e;
    return typeof window != "undefined" && (e = window._analyticsConfig), e || (e = {}), e.properties || (e.properties = {}), e.properties.browserSessionId = dc, e
}

function _T(e, t = {}) {
    var n;
    if (typeof window == "undefined" || !(window != null && window.publisherGA4gtag)) return;
    const r = ct();
    (n = r.user) != null && n.id && (t.user_id = r.user.id.toString()), window.publisherGA4gtag("event", e, t)
}

function qO(e, t) {
    typeof window == "undefined" || !(window != null && window.gtag) || window.gtag("event", e, t)
}

function dT(e, t = {}) {
    var i;
    const r = ct(),
        n = fT();
    if (!n) return;
    const o = Gt(window.location.href);
    t = Object.assign({
        v: 1,
        t: e,
        tid: n,
        cid: r.anonymousId,
        dl: document.location.origin + document.location.pathname + document.location.search,
        dt: document.title || "",
        dr: document.referrer || "",
        cn: o.utm_campaign,
        cs: o.utm_source,
        cm: o.utm_medium,
        ck: o.utm_term,
        cc: o.utm_content,
        ci: o.utm_id
    }, t), (i = r.user) != null && i.id && (t.uid = r.user.id.toString()), new Image().src = `https://www.google-analytics.com/collect?${de(t)}`
}

function ZO() {
    var r;
    if (typeof window == "undefined") return;
    const e = Ec();
    if (!e) return;
    window.GA4DataLayer = window.GA4DataLayer || [], window.publisherGA4gtag = function() {
        var n;
        (n = window.GA4DataLayer) == null || n.push(arguments)
    }, window.publisherGA4gtag("js", new Date);
    const t = ct();
    window.publisherGA4gtag("config", e, N({
        send_page_view: !1
    }, t.user && {
        user_id: (r = t == null ? void 0 : t.user) == null ? void 0 : r.id.toString()
    }))
}

function XO() {
    var t;
    if (typeof window == "undefined") return;
    const e = ct();
    !e.localGaPixelId && !e.adwordsAccountId || (window.localGaDataLayer = window.localGaDataLayer || [], window.gtag = function() {
        var r;
        (r = window == null ? void 0 : window.localGaDataLayer) == null || r.push(arguments)
    }, window.gtag("js", new Date), e.localGaPixelId && window.gtag("config", e.localGaPixelId), e.adwordsAccountId && window.gtag("config", e.adwordsAccountId), (t = e.user) != null && t.id && window.gtag("userId", e.user.id.toString()), fc(`https://www.googletagmanager.com/gtag/js?id=${e.localGaPixelId||e.adwordsAccountId}&l=localGaDataLayer`))
}

function fT() {
    const e = typeof window != "undefined" && window._preloads && window._preloads.pub && window._preloads.pub.ga_pixel_id;
    return e && e.startsWith("UA-") ? null : e
}

function ET() {
    return typeof window != "undefined" && window._preloads && window._preloads.pub && window._preloads.pub.fb_pixel_id
}
const pT = {
        ABOUT_PAGE_END_CTA_RENDERED: "About Page End Cta Rendered",
        ABOUT_PAGE_END_CTA_SEEN: "About Page End Cta Seen",
        ABOUT_PAGE_VISITED: "About Page Visited",
        ACCOUNT_CARD_READS_LINK_CLICKED: "Account Card Reads Link Clicked",
        ACCOUNT_CARD_SHOWN: "Account Card Shown",
        ACCOUNT_CARD_SUBSCRIBE_CLICKED: "Account Card Subscribe Clicked",
        ACCOUNT_CARD_VIEW_PROFILE_LINK_CLICKED: "Account Card View Profile Link Clicked",
        ACCOUNT_CARD_WRITES_LINK_CLICKED: "Account Card Writes Link Clicked",
        ACTIVITY_ITEM_TAPPED: "Activity Item Tapped",
        ACTIVITY_ITEM_VIEWED: "Activity Item Viewed",
        ACTIVITY_SCREEN_VIEWED: "Activity Screen Viewed",
        ADD_EPISODE_MEDIA_CLICKED: "Add Episode Media Clicked",
        ADD_TO_PODCAST_CLICKED: "Add To Podcast Clicked",
        ADD_TO_PODCAST_SCREEN_SHOWN: "Add To Podcast Screen Shown",
        ADD_TO_PODCAST_SKIPPED: "Add To Podcast Skipped",
        ADD_WATERMARK_CLICKED: "Add Watermark Clicked",
        ALL_FOLLOW_RECOMMENDATIONS_TOGGLED: "All Follow Recommendations Toggled",
        ALL_SUBSCRIBE_RECOMMENDATIONS_TOGGLED: "All Subscribe Recommendations Toggled",
        APPLE_PAY_ATTEMPED: "Apple Pay Attemped",
        APPLE_PAY_FAILED: "Apple Pay Failed",
        APPLE_PAY_SETUP_FINISHED: "Apple Pay Setup Finished",
        APPLE_PAY_SETUP_STARTED: "Apple Pay Setup Started",
        APPLE_PAY_SUCCEEDED: "Apple Pay Succeeded",
        APP_BANNER_DISMISSED: "App Banner Dismissed",
        APP_BANNER_TAPPED: "App Banner Tapped",
        APP_BANNER_VIEWED: "App Banner Viewed",
        APP_INSTALL_MODAL_OPENED: "App Install Modal Opened",
        APP_PROMO_WIZARD_CLICKED: "App Promo Wizard Clicked",
        APP_PROMO_WIZARD_DISMISSED: "App Promo Wizard Dismissed",
        APP_PROMO_WIZARD_SEEN: "App Promo Wizard Seen",
        APP_STORE_LINK_CLICKED: "App Store Link Clicked",
        APP_STORE_REDIRECT_CLICKED: "App Store Redirect Clicked",
        ARCHIVE_PAGE_POST_CLICKED: "Archive Page Post Clicked",
        AUDIOGRAM_DOWNLOAD_CLICKED: "Audiogram Download Clicked",
        AUDIO_BUFFERING_COMPLETED: "Audio Buffering Completed",
        AUDIO_BUFFERING_STARTED: "Audio Buffering Started",
        AUDIO_DRAWER_DONE_CLICKED: "Audio Drawer Done Clicked",
        AUDIO_MODAL_BROWSE_FILES_CLICKED: "Audio Modal Browse Files Clicked",
        AUDIO_MODAL_CANCEL_CLICKED: "Audio Modal Cancel Clicked",
        AUDIO_MODAL_DROPPED_FILE: "Audio Modal Dropped File",
        AUDIO_MODAL_INSERT_CLICKED: "Audio Modal Insert Clicked",
        AUDIO_MODAL_PLAYPAUSE_CLICKED: "Audio Modal Playpause Clicked",
        AUDIO_MODAL_START_OVER_CLICKED: "Audio Modal Start Over Clicked",
        AUDIO_PLAYBACK_COMPLETE: "Audio Playback Complete",
        AUDIO_PLAYBACK_CONTINUED: "Audio Playback Continued",
        AUDIO_PLAYBACK_STARTED: "Audio Playback Started",
        AUDIO_PRESS_RECORD_CLICKED: "Audio Press Record Clicked",
        AUDIO_UPLOAD_COMPLETED: "Audio Upload Completed",
        AUTOSAVE_CONFLICT_DISPLAYED: "Autosave Conflict Displayed",
        BESTSELLER_INFO_SHOWN: "Bestseller Info Shown",
        BESTSELLER_SURVEY_MODAL_CLOSED: "Bestseller Survey Modal Closed",
        BESTSELLER_SURVEY_MODAL_SEEN: "Bestseller Survey Modal Seen",
        BESTSELLER_SURVEY_MODAL_SUBMITTED: "Bestseller Survey Modal Submitted",
        BILLING_FORM_ERROR: "Billing Form Error",
        BILLING_FORM_INPUT_FILLED: "Billing Form Input Filled",
        BILLING_FORM_MISSING_PAYMENT: "Billing Form Missing Payment",
        BILLING_FORM_SUBMIT_PRESSED: "Billing Form Submit Pressed",
        BILLING_UPDATE_PAGE_SEEN: "Billing Update Page Seen",
        BOOST_LEARN_MORE_CLICKED: "Boost Learn More Clicked",
        BOOST_MODAL_DONE_CLICKED: "Boost Modal Done Clicked",
        BOOST_MODAL_SEEN: "Boost Modal Seen",
        BOOST_MODAL_TURN_ON_CLICKED: "Boost Modal Turn On Clicked",
        BUNDLE_PUBLICATION_TOGGLED: "Bundle Publication Toggled",
        BUNDLE_SCREEN_SHOWN: "Bundle Screen Shown",
        BUNDLE_SUBSCRIBED: "Bundle Subscribed",
        BUNDLE_SUBSCRIBE_FAILED: "Bundle Subscribe Failed",
        BUNDLE_SUBSCRIBE_INITIATED: "Bundle Subscribe Initiated",
        CARD_EXPIRED_WARNING_DISMISSED: "Card Expired Warning Dismissed",
        CHAT_APP_UPSELL_SUBSCRIBE_SCREEN_SHOWN: "Chat App Upsell Subscribe Screen Shown",
        CHAT_CHECKLIST_GET_APP_CLICKED: "Chat Checklist Get App Clicked",
        CHAT_CHECKLIST_SEE_EXAMPLES_CLICKED: "Chat Checklist See Examples Clicked",
        CHAT_CHECKLIST_USE_TEMPLATE_CLICKED: "Chat Checklist Use Template Clicked",
        CHAT_DROPDOWN_BADGE_SHOWN: "Chat Dropdown Badge Shown",
        CHAT_DROPDOWN_CLOSED: "Chat Dropdown Closed",
        CHAT_DROPDOWN_NEW_CHAT_CLICKED: "Chat Dropdown New Chat Clicked",
        CHAT_DROPDOWN_SEE_ALL_CLICKED: "Chat Dropdown See All Clicked",
        CHAT_ENABLE_DASHBOARD_CTA_CLICKED: "Chat Enable Dashboard Cta Clicked",
        CHAT_ENABLE_DASHBOARD_CTA_DISMISSED: "Chat Enable Dashboard Cta Dismissed",
        CHAT_ENABLE_DASHBOARD_CTA_SHOWN: "Chat Enable Dashboard Cta Shown",
        CHAT_INBOX_CONVERSATION_CLICKED: "Chat Inbox Conversation Clicked",
        CHAT_INBOX_SEARCHED: "Chat Inbox Searched",
        CHAT_INVITE_DRAFT_POST_CTA_CLICKED: "Chat Invite Draft Post Cta Clicked",
        CHAT_INVITE_DRAFT_POST_CTA_DISMISSED: "Chat Invite Draft Post Cta Dismissed",
        CHAT_INVITE_DRAFT_POST_CTA_SHOWN: "Chat Invite Draft Post Cta Shown",
        CHAT_READER_PARTICIPATION_CHANGED: "Chat Reader Participation Changed",
        CHAT_START_CHAT_THREAD_CLICKED: "Chat Start Chat Thread Clicked",
        CLICKED_CATEGORY: "Clicked Category",
        CLICKED_GO_TO_SUBSCRIPTION_ON_PROFILE_PAGE: "Clicked Go To Subscription On Profile Page",
        CLICKED_PAUSE_BUTTON: "Clicked Pause Button",
        CLICKED_PLAY_BUTTON: "Clicked Play Button",
        CLICKED_SUBSCRIBE_ON_PROFILE_PAGE: "Clicked Subscribe On Profile Page",
        COHORT_PAGE_CLICKED: "Cohort Page Clicked",
        COLLAPSED_POSTS_SHOWN: "Collapsed Posts Shown",
        COMMENTS_CLICKED: "Comments Clicked",
        COMMENTS_SORTED: "Comments Sorted",
        COMMENTS_VIEWED: "Comments Viewed",
        COMMENT_EXPAND_TOGGLE_CLICKED: "Comment Expand Toggle Clicked",
        COMMENT_PAYWALL_SHOWN: "Comment Paywall Shown",
        CONFLICT_TOAST_DISMISSED: "Conflict Toast Dismissed",
        CONNECT_FACEBOOK_SCREEN_COMPLETED: "Connect Facebook Screen Completed",
        CONNECT_FACEBOOK_SCREEN_VIEWED: "Connect Facebook Screen Viewed",
        COOKIE_BANNER_CLICKED: "Cookie Banner Clicked",
        COOKIE_BANNER_SEEN: "Cookie Banner Seen",
        COOKIE_MANAGEMENT_MODAL_COOKIE_TOGGLED: "Cookie Management Modal Cookie Toggled",
        COOKIE_MANAGEMENT_MODAL_DISMISSED: "Cookie Management Modal Dismissed",
        COOKIE_MANAGEMENT_MODAL_SEEN: "Cookie Management Modal Seen",
        COOKIE_MANAGEMENT_MODAL_SUBMITTED: "Cookie Management Modal Submitted",
        COOKIE_PREFERENCES_SET: "Cookie Preferences Set",
        COVER_PAGE_AUTHOR_CLICKED: "Cover Page Author Clicked",
        COVER_PAGE_BECOME_PAYING_CLICKED: "Cover Page Become Paying Clicked",
        COVER_PAGE_EMAIL_SUBMITTED: "Cover Page Email Submitted",
        COVER_PAGE_LEARN_MORE_CLICKED: "Cover Page Learn More Clicked",
        COVER_PAGE_MAYBE_LATER_CLICKED: "Cover Page Maybe Later Clicked",
        COVER_PAGE_REFERRAL_VISIT: "Cover Page Referral Visit",
        COVER_PAGE_SHOWN: "Cover Page Shown",
        CREDIT_TOKEN_OPT_OUT_MODAL_CLOSED: "Credit Token Opt Out Modal Closed",
        CREDIT_TOKEN_OPT_OUT_MODAL_SEEN: "Credit Token Opt Out Modal Seen",
        CREDIT_TOKEN_READER_ONBOARDING_STARTED: "Credit Token Reader Onboarding Started",
        CROSS_POST_MODAL_CLOSED: "Cross Post Modal Closed",
        CROSS_POST_MODAL_CONTINUED: "Cross Post Modal Continued",
        CROSS_POST_MODAL_CONTINUE_CLICKED: "Cross Post Modal Continue Clicked",
        CROSS_POST_MODAL_CONTINUE_FAILED: "Cross Post Modal Continue Failed",
        CROSS_POST_MODAL_SUBMITTED: "Cross Post Modal Submitted",
        CROSS_POST_MODAL_SUBMIT_CLICKED: "Cross Post Modal Submit Clicked",
        CROSS_POST_MODAL_SUBMIT_FAILED: "Cross Post Modal Submit Failed",
        CROSS_POST_MODAL_TYPING_STARTED: "Cross Post Modal Typing Started",
        CUSTOMER_SUPPORT_MODE_FORM_ERROR: "Customer Support Mode Form Error",
        CUSTOMER_SUPPORT_MODE_FORM_INPUT_FILLED: "Customer Support Mode Form Input Filled",
        CUSTOMER_SUPPORT_MODE_FORM_MISSING_PAYMENT: "Customer Support Mode Form Missing Payment",
        CUSTOMER_SUPPORT_MODE_FORM_SUBMIT_PRESSED: "Customer Support Mode Form Submit Pressed",
        CUSTOM_DOMAIN_CONFIG_ERROR: "Custom Domain Config Error",
        CUSTOM_DOMAIN_CONFIG_INPUT_FILLED: "Custom Domain Config Input Filled",
        CUSTOM_DOMAIN_CONFIG_MISSING_PAYMENT: "Custom Domain Config Missing Payment",
        CUSTOM_DOMAIN_CONFIG_SUBMIT_PRESSED: "Custom Domain Config Submit Pressed",
        CUSTOM_DOMAIN_INQUIRY: "Custom Domain Inquiry",
        CUSTOM_DOMAIN_LOGIN_REDIRECT_ATTEMPTED: "Custom Domain Login Redirect Attempted",
        CUSTOM_DOMAIN_PAYMENT_ERROR: "Custom Domain Payment Error",
        CUSTOM_DOMAIN_PAYMENT_INPUT_FILLED: "Custom Domain Payment Input Filled",
        CUSTOM_DOMAIN_PAYMENT_MISSING_PAYMENT: "Custom Domain Payment Missing Payment",
        CUSTOM_DOMAIN_PAYMENT_SUBMIT_PRESSED: "Custom Domain Payment Submit Pressed",
        DASHBOARD_ACTION_BOX_DISMISSED: "Dashboard Action Box Dismissed",
        DASHBOARD_ACTION_BOX_SHOWN: "Dashboard Action Box Shown",
        DASHBOARD_ACTION_CTA_CLICKED: "Dashboard Action Cta Clicked",
        DASHBOARD_ACTION_CTA_DISMISSED: "Dashboard Action Cta Dismissed",
        DEFAULT_PUBLICATION_CREATION_FAILED: "Default Publication Creation Failed",
        DIRECT_MESSAGE_ANNOUNCEMENT_DISMISSED: "Direct Message Announcement Dismissed",
        DIRECT_MESSAGE_ANNOUNCEMENT_LEARN_MORE_CLICKED: "Direct Message Announcement Learn More Clicked",
        DIRECT_MESSAGE_ANNOUNCEMENT_SEEN: "Direct Message Announcement Seen",
        DIRECT_MESSAGE_ANNOUNCEMENT_TRY_DMS_CLICKED: "Direct Message Announcement Try Dms Clicked",
        DIRECT_MESSAGE_CONVERSATION_VIEWED: "Direct Message Conversation Viewed",
        DIRECT_MESSAGE_REQUESTS_VIEWED: "Direct Message Requests Viewed",
        DIRECT_MESSAGE_SEARCH_RESULT_CLICKED: "Direct Message Search Result Clicked",
        DIRECT_MESSAGE_SEARCH_VIEWED: "Direct Message Search Viewed",
        DIRECT_MESSAGE_WRITER_BUTTON_CLICKED: "Direct Message Writer Button Clicked",
        DIRECT_MESSAGE_WRITER_UPSELL_MODAL_MAYBE_LATER_CLICKED: "Direct Message Writer Upsell Modal Maybe Later Clicked",
        DIRECT_MESSAGE_WRITER_UPSELL_MODAL_OKAY_CLICKED: "Direct Message Writer Upsell Modal Okay Clicked",
        DIRECT_MESSAGE_WRITER_UPSELL_MODAL_SEEN: "Direct Message Writer Upsell Modal Seen",
        DISTRIBUTE_TO_FEED_CLICKED: "Distribute To Feed Clicked",
        DONATE_SUBSCRIBE_FORM_ERROR: "Donate Subscribe Form Error",
        DONATE_SUBSCRIBE_FORM_INPUT_FILLED: "Donate Subscribe Form Input Filled",
        DONATE_SUBSCRIBE_FORM_MISSING_PAYMENT: "Donate Subscribe Form Missing Payment",
        DONATE_SUBSCRIBE_FORM_SUBMIT_PRESSED: "Donate Subscribe Form Submit Pressed",
        DONATE_SUBSCRIBE_SCREEN_SHOWN: "Donate Subscribe Screen Shown",
        EARNING_CALCULATOR_INFO_CLICKED: "Earning Calculator Info Clicked",
        EARNING_CALCULATOR_UPDATED: "Earning Calculator Updated",
        EDITOR_AWARENESS_UPDATED: "Editor Awareness Updated",
        EDITOR_CONVERSION_SURVEY_SUBMITTED: "Editor Conversion Survey Submitted",
        EDITOR_MEDIA_DOWNLOAD_CLICKED: "Editor Media Download Clicked",
        EDITOR_MEDIA_REMOVE_CLICKED: "Editor Media Remove Clicked",
        EDITOR_MEDIA_SET_THUMBNAIL_FROM_TIMELINE_CLICKED: "Editor Media Set Thumbnail From Timeline Clicked",
        EDITOR_MEDIA_SET_THUMBNAIL_UPLOAD_IMAGE_CLICKED: "Editor Media Set Thumbnail Upload Image Clicked",
        EDITOR_MENU_ICON_CLICKED: "Editor Menu Icon Clicked",
        EDITOR_NODE_RENDER_FAILED: "Editor Node Render Failed",
        EDIT_POST_DROPDOWN_MENU_OPENED: "Edit Post Dropdown Menu Opened",
        EMAIL_DISABLED_PAGE_APP_UPSELL_CLICKED: "Email Disabled Page App Upsell Clicked",
        EMAIL_DISABLED_PAGE_SEEN: "Email Disabled Page Seen",
        EMAIL_IMPORT_FAILED: "Email Import Failed",
        EMAIL_IMPORT_STARTED: "Email Import Started",
        EMAIL_LINK_INTERSTITIAL_CLICKED: "Email Link Interstitial Clicked",
        EMAIL_TYPO_SUGGESTION_ACCEPTED: "Email Typo Suggestion Accepted",
        EMAIL_TYPO_SUGGESTION_REJECTED: "Email Typo Suggestion Rejected",
        EMAIL_TYPO_SUGGESTION_SHOWN: "Email Typo Suggestion Shown",
        EMBED_MODAL_OPENED: "Embed Modal Opened",
        EMBED_URL_ATTEMPTED: "Embed Url Attempted",
        EMBED_URL_FAILED: "Embed Url Failed",
        EMBED_URL_SUCCEEDED: "Embed Url Succeeded",
        END_OF_POST_RECOMMEND_CTA_CLICKED: "End Of Post Recommend Cta Clicked",
        FACEBOOK_FOLLOW_SUGGESTIONS_SCREEN_COMPLETED: "Facebook Follow Suggestions Screen Completed",
        FACEBOOK_FOLLOW_SUGGESTIONS_SCREEN_VIEWED: "Facebook Follow Suggestions Screen Viewed",
        FACEBOOK_PROFILE_VISIBLE_TOGGLED: "Facebook Profile Visible Toggled",
        FACEBOOK_PUB_SUGGESTIONS_SCREEN_COMPLETED: "Facebook Pub Suggestions Screen Completed",
        FACEBOOK_PUB_SUGGESTIONS_SCREEN_VIEWED: "Facebook Pub Suggestions Screen Viewed",
        FACEBOOK_SUGGESTIONS_SCREEN_COMPLETED: "Facebook Suggestions Screen Completed",
        FACEBOOK_SUGGESTIONS_SCREEN_VIEWED: "Facebook Suggestions Screen Viewed",
        FEATURED_COLLECTION_ITEM_CLICKED: "Featured Collection Item Clicked",
        FEATURE_ANNOUNCEMENT_BANNER_CLICKED: "Feature Announcement Banner Clicked",
        FEATURE_ANNOUNCEMENT_BANNER_SHOWN: "Feature Announcement Banner Shown",
        FEED_DASHBOARD_CTA_CLICKED: "Feed Dashboard Cta Clicked",
        FEED_DASHBOARD_CTA_DISMISSED: "Feed Dashboard Cta Dismissed",
        FEED_FIRST_NOTE_DASHBOARD_CTA_CLICKED: "Feed First Note Dashboard Cta Clicked",
        FEED_FIRST_NOTE_DASHBOARD_CTA_DISMISSED: "Feed First Note Dashboard Cta Dismissed",
        FEED_FIRST_NOTE_DASHBOARD_CTA_SHOWN: "Feed First Note Dashboard Cta Shown",
        FEED_HIDDEN_ATTACHMENT_SHOWN: "Feed Hidden Attachment Shown",
        FEED_ITEM_CLICKED: "Feed Item Clicked",
        FEED_ITEM_SEEN: "Feed Item Seen",
        FEED_ITEM_SEEN_FOR_DURATION: "Feed Item Seen For Duration",
        FEED_ITEM_SHARE_LINK_CLICKED: "Feed Item Share Link Clicked",
        FEED_MODULE_ITEM_CLICKED: "Feed Module Item Clicked",
        FEED_MODULE_ITEM_SEEN: "Feed Module Item Seen",
        FEED_ONE_CLICK_SUBSCRIBE: "Feed One Click Subscribe",
        FEED_PERMALINK_SCREEN_VIEWED: "Feed Permalink Screen Viewed",
        FEED_PROFILE_SCREEN_VIEWED: "Feed Profile Screen Viewed",
        FEED_PUBLICATION_SCREEN_VIEWED: "Feed Publication Screen Viewed",
        FEED_SCREEN_VIEWED: "Feed Screen Viewed",
        FEED_USER_SUGGESTION_CLICKED: "Feed User Suggestion Clicked",
        FEED_USER_SUGGESTION_SEEN: "Feed User Suggestion Seen",
        FILES_REJECTED: "Files Rejected",
        FINISH_MAGIC_LOGIN_MODAL_SHOWN: "Finish Magic Login Modal Shown",
        FIRST_MONTH_UPSELL_MODAL_DONE_CLICKED: "First Month Upsell Modal Done Clicked",
        FIRST_MONTH_UPSELL_MODAL_EDIT_EMAIL_CLICKED: "First Month Upsell Modal Edit Email Clicked",
        FIRST_MONTH_UPSELL_MODAL_SEEN: "First Month Upsell Modal Seen",
        FOLLOW_RECOMMENDATIONS_PICKER_TOGGLED: "Follow Recommendations Picker Toggled",
        FOLLOW_RECOMMENDATIONS_TOGGLED: "Follow Recommendations Toggled",
        FOLLOW_RECOMMENDATION_ADDED: "Follow Recommendation Added",
        FOLLOW_RECOMMENDATION_REMOVED: "Follow Recommendation Removed",
        FOLLOW_REFERRER_PROMPT_CTA_CLICKED: "Follow Referrer Prompt Cta Clicked",
        FOLLOW_REFERRER_PROMPT_DISMISSED: "Follow Referrer Prompt Dismissed",
        FOLLOW_REFERRER_PROMPT_EXISTING_EMAIL_ENTERED: "Follow Referrer Prompt Existing Email Entered",
        FOLLOW_REFERRER_PROMPT_REDIRECTED: "Follow Referrer Prompt Redirected",
        FOLLOW_REFERRER_PROMPT_SHOWN: "Follow Referrer Prompt Shown",
        FOLLOW_REFERRER_PROMPT_SIGNUP_FAILED: "Follow Referrer Prompt Signup Failed",
        FOLLOW_REFERRER_PROMPT_SIGN_IN_INITIATED: "Follow Referrer Prompt Sign In Initiated",
        FOUNDING_PRICE_CONFIRMATION_DISMISSED: "Founding Price Confirmation Dismissed",
        FOUNDING_PRICE_CONFIRMATION_REQUIRED: "Founding Price Confirmation Required",
        FOUNDING_PRICE_CONFIRMATION_SUBMITTED: "Founding Price Confirmation Submitted",
        FRAME_MESSAGE_HANDLED: "Frame Message Handled",
        FRAME_MESSAGE_SENT: "Frame Message Sent",
        FREE_PREVIEW_PAYWALL_RESTART_BUTTON_CLICKED: "Free Preview Paywall Restart Button Clicked",
        FREE_PREVIEW_PAYWALL_SHOWN: "Free Preview Paywall Shown",
        FREE_SIGNUP_FAILED: "Free Signup Failed",
        FULL_EMAIL_FORM_SHOWN: "Full Email Form Shown",
        GIFT_SUBSCRIBE_FORM_ERROR: "Gift Subscribe Form Error",
        GIFT_SUBSCRIBE_FORM_INPUT_FILLED: "Gift Subscribe Form Input Filled",
        GIFT_SUBSCRIBE_FORM_MISSING_PAYMENT: "Gift Subscribe Form Missing Payment",
        GIFT_SUBSCRIBE_FORM_SUBMIT_PRESSED: "Gift Subscribe Form Submit Pressed",
        GIFT_SUBSCRIBE_SCREEN_SHOWN: "Gift Subscribe Screen Shown",
        GLOBAL_SEARCH_RESULTS_SHOWN: "Global Search Results Shown",
        GLOBAL_SEARCH_RESULT_CLICKED: "Global Search Result Clicked",
        GOOGLE_SIGN_IN_STARTED: "Google Sign In Started",
        GO_PAID_CTA_CLICKED: "Go Paid Cta Clicked",
        GO_PAID_CTA_DISMISSED: "Go Paid Cta Dismissed",
        GO_PAID_CTA_SHOWN: "Go Paid Cta Shown",
        GROUP_SUBSCRIBE_FORM_ERROR: "Group Subscribe Form Error",
        GROUP_SUBSCRIBE_FORM_INPUT_FILLED: "Group Subscribe Form Input Filled",
        GROUP_SUBSCRIBE_FORM_MISSING_PAYMENT: "Group Subscribe Form Missing Payment",
        GROUP_SUBSCRIBE_FORM_SUBMIT_PRESSED: "Group Subscribe Form Submit Pressed",
        GROUP_SUBSCRIBE_MODAL_CANCEL_CLICKED: "Group Subscribe Modal Cancel Clicked",
        GROUP_SUBSCRIBE_MODAL_CONFIRM_CLICKED: "Group Subscribe Modal Confirm Clicked",
        GROUP_SUBSCRIBE_SCREEN_SHOWN: "Group Subscribe Screen Shown",
        GROW_TAB_CTA_CLICKED: "Grow Tab Cta Clicked",
        GROW_TAB_SUGGESTION_SHOWN: "Grow Tab Suggestion Shown",
        HEADER_ANCHOR_WIDGET_CLICKED: "Header Anchor Widget Clicked",
        HEADER_SEARCHED: "Header Searched",
        HOLIDAY_GIFT_CTA_CLICKED: "Holiday Gift Cta Clicked",
        HOLIDAY_GIFT_CTA_DISMISSED: "Holiday Gift Cta Dismissed",
        HOLIDAY_GIFT_CTA_SHOWN: "Holiday Gift Cta Shown",
        HOMEPAGE_DASHBOARD_LINK_CLICKED: "Homepage Dashboard Link Clicked",
        HOMEPAGE_GET_STARTED_CLICKED: "Homepage Get Started Clicked",
        HOMEPAGE_GOING_PAID_LINK_CLICKED: "Homepage Going Paid Link Clicked",
        HOMEPAGE_GROW_LINK_CLICKED: "Homepage Grow Link Clicked",
        HOMEPAGE_LINK_CLICKED: "Homepage Link Clicked",
        HOMEPAGE_PUBLICATION_LINK_CLICKED: "Homepage Publication Link Clicked",
        HOMEPAGE_READER_LINK_CLICKED: "Homepage Reader Link Clicked",
        IMAGE_CONTEXT_MENU_CLICKED: "Image Context Menu Clicked",
        IMPORT_PUBLICATION_BYPASSED: "Import Publication Bypassed",
        IMPORT_PUBLICATION_CANCELLED: "Import Publication Cancelled",
        IMPORT_PUBLICATION_COMPLETE: "Import Publication Complete",
        IMPORT_PUBLICATION_CONFIRMED: "Import Publication Confirmed",
        IMPORT_PUBLICATION_ERROR: "Import Publication Error",
        IMPORT_PUBLICATION_ERROR_SKIPPED: "Import Publication Error Skipped",
        IMPORT_PUBLICATION_FILE_UPLOAD_ERROR: "Import Publication File Upload Error",
        IMPORT_PUBLICATION_FILE_UPLOAD_STARTED: "Import Publication File Upload Started",
        IMPORT_PUBLICATION_FILE_UPLOAD_SUCCEEDED: "Import Publication File Upload Succeeded",
        IMPORT_PUBLICATION_LOADED: "Import Publication Loaded",
        INBOX_LAYOUT_CHANGED: "Inbox Layout Changed",
        INBOX_POST_CLICKED: "Inbox Post Clicked",
        INBOX_TAB_CHANGED: "Inbox Tab Changed",
        INSTAGRAM_SHARE_MODAL_SEEN: "Instagram Share Modal Seen",
        INTERNATIONALIZATION_BETA_OPTIN_MODAL_SEEN: "Internationalization Beta Optin Modal Seen",
        INTERNATIONALIZATION_BETA_OPTIN_MODAL_SUBMITTED: "Internationalization Beta Optin Modal Submitted",
        INTRODUCING_RECOMMENDATION_DIGESTS_MODAL_LEARN_MORE_CLICKED: "Introducing Recommendation Digests Modal Learn More Clicked",
        INTRODUCING_RECOMMENDATION_DIGESTS_MODAL_SHOWN: "Introducing Recommendation Digests Modal Shown",
        INVITE_FRIENDS_CREDIT_SHARE_SCREEN_SHOWN: "Invite Friends Credit Share Screen Shown",
        INVITE_FRIENDS_MODAL_SHOWN: "Invite Friends Modal Shown",
        INVITE_FRIENDS_PAGE_SEEN: "Invite Friends Page Seen",
        INVITE_FRIENDS_SIGNIN_MODAL_SEEN: "Invite Friends Signin Modal Seen",
        LATEST_POST_CLICKED: "Latest Post Clicked",
        LATEX_BLOCK_ADDED: "Latex Block Added",
        LAUNCH_CHECKLIST_ITEM_CLICKED: "Launch Checklist Item Clicked",
        LAUNCH_CHECKLIST_SEEN: "Launch Checklist Seen",
        LIKE_ACTIVITY_TOGGLED: "Like Activity Toggled",
        LIKE_NUX_SHOWN: "Like Nux Shown",
        LIKE_UPSELL_FREE_SUBSCRIBED: "Like Upsell Free Subscribed",
        LIKE_UPSELL_MODAL_SEEN: "Like Upsell Modal Seen",
        LIKE_UPSELL_PLAN_SELECTED: "Like Upsell Plan Selected",
        LIKE_UPSELL_PLEDGE_CLICKED: "Like Upsell Pledge Clicked",
        LIKE_UPSELL_SHARE_CLICKED: "Like Upsell Share Clicked",
        LISTEN_AD_FREE_CLICKED: "Listen Ad Free Clicked",
        LISTEN_TO_THIS_POST_MODAL_DISMISSED: "Listen To This Post Modal Dismissed",
        LISTEN_TO_THIS_POST_MODAL_GET_THE_APP_CLICKED: "Listen To This Post Modal Get The App Clicked",
        LISTEN_TO_THIS_POST_MODAL_SHOWN: "Listen To This Post Modal Shown",
        LIST_MANAGEMENT_MODAL_CLOSED: "List Management Modal Closed",
        LIST_MANAGEMENT_MODAL_ERROR: "List Management Modal Error",
        LIST_MANAGEMENT_MODAL_PUBLICATION_ADDED: "List Management Modal Publication Added",
        LIST_MANAGEMENT_MODAL_PUBLICATION_REMOVED: "List Management Modal Publication Removed",
        LIST_MANAGEMENT_MODAL_PUBLICATION_SEARCHED: "List Management Modal Publication Searched",
        LIST_MANAGEMENT_MODAL_PUBLICATION_SUGGESTION_ADDED: "List Management Modal Publication Suggestion Added",
        LIST_MANAGEMENT_MODAL_SEEN: "List Management Modal Seen",
        LIST_MANAGEMENT_MODAL_SUBMITTED: "List Management Modal Submitted",
        LIST_PAGE_EDIT_CLICKED: "List Page Edit Clicked",
        LIST_PAGE_POST_CLICKED: "List Page Post Clicked",
        LIST_PAGE_POST_SHOWN: "List Page Post Shown",
        LIST_PAGE_SEEN: "List Page Seen",
        LIST_PAGE_SHARE_CLICKED: "List Page Share Clicked",
        LIST_PAGE_SIDEBAR_PUBLICATIONS_CLICKED: "List Page Sidebar Publications Clicked",
        LIST_PAGE_SIDEBAR_PUBLICATIONS_SUBSCRIBE_CLICKED: "List Page Sidebar Publications Subscribe Clicked",
        LIST_PAGE_SUBSCRIBE_CLICKED: "List Page Subscribe Clicked",
        LIST_PAGE_SUBSCRIBE_MODAL_DISMISSED: "List Page Subscribe Modal Dismissed",
        LIST_PAGE_SUBSCRIBE_MODAL_ERROR: "List Page Subscribe Modal Error",
        LIST_PAGE_SUBSCRIBE_MODAL_PUBLICATION_CLICKED: "List Page Subscribe Modal Publication Clicked",
        LIST_PAGE_SUBSCRIBE_MODAL_SEEN: "List Page Subscribe Modal Seen",
        LIST_PAGE_SUBSCRIBE_MODAL_SUBMITTED: "List Page Subscribe Modal Submitted",
        LIST_PROFILE_TAB_LIST_CLICKED: "List Profile Tab List Clicked",
        LIST_PROFILE_TAB_SEEN: "List Profile Tab Seen",
        LOCAL_CURRENCY_MODAL_SEEN: "Local Currency Modal Seen",
        LOCAL_CURRENCY_MODAL_TURN_OFF_CLICKED: "Local Currency Modal Turn Off Clicked",
        MANAGE_RECOMMENDATIONS_BUTTON_CLICKED: "Manage Recommendations Button Clicked",
        MANAGE_RECOMMENDATIONS_LEARN_MORE_CLICKED: "Manage Recommendations Learn More Clicked",
        MANAGE_RECOMMENDATIONS_MODAL_CLOSED: "Manage Recommendations Modal Closed",
        MANAGE_RECOMMENDATIONS_MODAL_OPENED: "Manage Recommendations Modal Opened",
        MANAGE_RECOMMENDATIONS_STEP_CHANGED: "Manage Recommendations Step Changed",
        MEDIA_UPLOAD_COMPLETED: "Media Upload Completed",
        MEDIA_UPLOAD_CREATED: "Media Upload Created",
        MEDIA_UPLOAD_FAILED: "Media Upload Failed",
        MEDIA_UPLOAD_STARTED: "Media Upload Started",
        MEETING_MISSING_PAYMENT: "Meeting Missing Payment",
        MEETING_ORDER_PAGE_VIEWED: "Meeting Order Page Viewed",
        MEETING_PAGE_VIEWED: "Meeting Page Viewed",
        MEETING_POST_TEMPLATE_CREATED: "Meeting Post Template Created",
        MEETING_SUBMIT_PRESSED: "Meeting Submit Pressed",
        MILESTONE_MEDIA_ASSETS_IMAGE_DOWNLOADED: "Milestone Media Assets Image Downloaded",
        NATIVE_SHARE_FAILED: "Native Share Failed",
        NATIVE_SHARE_SUCCESS: "Native Share Success",
        NAV_BAR_CTA_CLICKED: "Nav Bar Cta Clicked",
        NAV_BAR_HOME_LINK_CLICKED: "Nav Bar Home Link Clicked",
        NEW_GUEST_POST_CLICKED: "New Guest Post Clicked",
        NEW_SUBSCRIPTION_ON_PROFILE_DISPLAYED: "New Subscription On Profile Displayed",
        NEXT_POST_LINK_CLICKED: "Next Post Link Clicked",
        NOTES_BAN_PAGE_VIEWED: "Notes Ban Page Viewed",
        NOTES_TAB_ANNOUNCEMENT_CLICKED: "Notes Tab Announcement Clicked",
        NOTES_TAB_ANNOUNCEMENT_DISMISSED: "Notes Tab Announcement Dismissed",
        NOTIFICATIONS_ALERT_SHOWN: "Notifications Alert Shown",
        NOTIFICATIONS_DROPDOWN_VIEWED: "Notifications Dropdown Viewed",
        NOTIFICATIONS_UNREAD_SHOWN: "Notifications Unread Shown",
        NOT_YOU_BANNER_DISMISSED: "Not You Banner Dismissed",
        NOT_YOU_BANNER_TAPPED: "Not You Banner Tapped",
        NOT_YOU_BANNER_VIEWED: "Not You Banner Viewed",
        OPENNODE_ACCOUNT_SIGNUP_CLICKED: "Opennode Account Signup Clicked",
        OPENNODE_GENERATE_API_KEY_CLICKED: "Opennode Generate Api Key Clicked",
        OTHER_SUBSCRIPTION_OPTIONS_CLICKED: "Other Subscription Options Clicked",
        OTHER_SUBSCRIPTION_OPTION_SELECTED: "Other Subscription Option Selected",
        PAGES: "Pages",
        PAYMENT_CONFIRMATION_FAILED: "Payment Confirmation Failed",
        PAYMENT_CONFIRMATION_STARTED: "Payment Confirmation Started",
        PAYMENT_CONFIRMATION_SUCCEEDED: "Payment Confirmation Succeeded",
        PAYMENT_PLEDGE_LAUNCH_MODAL_SEEN: "Payment Pledge Launch Modal Seen",
        PAYMENT_PLEDGE_LAUNCH_MODAL_TURN_OFF_CLICKED: "Payment Pledge Launch Modal Turn Off Clicked",
        PAYMENT_PLEDGE_MISSING_PAYMENT: "Payment Pledge Missing Payment",
        PAYMENT_PLEDGE_NOTE_SCREEN_FAILED: "Payment Pledge Note Screen Failed",
        PAYMENT_PLEDGE_NOTE_SCREEN_SEEN: "Payment Pledge Note Screen Seen",
        PAYMENT_PLEDGE_NOTE_SCREEN_SKIPPED: "Payment Pledge Note Screen Skipped",
        PAYMENT_PLEDGE_NOTE_SCREEN_SUBMITTED: "Payment Pledge Note Screen Submitted",
        PAYMENT_PLEDGE_PRICE_WARNING_SEEN: "Payment Pledge Price Warning Seen",
        PAYMENT_PLEDGE_SCREEN_FAILED: "Payment Pledge Screen Failed",
        PAYMENT_PLEDGE_SCREEN_SEEN: "Payment Pledge Screen Seen",
        PAYMENT_PLEDGE_SCREEN_SKIPPED: "Payment Pledge Screen Skipped",
        PAYMENT_PLEDGE_SCREEN_SUBMITTED: "Payment Pledge Screen Submitted",
        PAYMENT_SETUP_BUTTON_CLICKED: "Payment Setup Button Clicked",
        PAYWALL_FREE_SIGNUP_FAILED: "Paywall Free Signup Failed",
        PAYWALL_FREE_TRIAL_CTA_CLICKED: "Paywall Free Trial Cta Clicked",
        PAYWALL_FREE_TRIAL_CTA_DISMISSED: "Paywall Free Trial Cta Dismissed",
        PAYWALL_FREE_TRIAL_CTA_SHOWN: "Paywall Free Trial Cta Shown",
        PAYWALL_PROMPT_ACCEPTED: "Paywall Prompt Accepted",
        PAYWALL_PROMPT_REJECTED: "Paywall Prompt Rejected",
        PAYWALL_UNLOCK_CTA_CLICKED: "Paywall Unlock Cta Clicked",
        PAYWALL_UNLOCK_CTA_VIEWED: "Paywall Unlock Cta Viewed",
        PAYWALL_UNLOCK_OPT_OUT_MODAL_CLOSED: "Paywall Unlock Opt Out Modal Closed",
        PAYWALL_UNLOCK_OPT_OUT_MODAL_SEEN: "Paywall Unlock Opt Out Modal Seen",
        PAYWALL_UNLOCK_REMINDER_MODAL_SEEN: "Paywall Unlock Reminder Modal Seen",
        PLAN_PURCHASE_BOX_ERROR: "Plan Purchase Box Error",
        PLAN_PURCHASE_BOX_SEEN: "Plan Purchase Box Seen",
        PLAN_PURCHASE_BOX_STRIPE_ERROR: "Plan Purchase Box Stripe Error",
        PLAN_PURCHASE_BOX_SUBMITTED: "Plan Purchase Box Submitted",
        PLEDGE_NOTE_MEDIA_ASSETS_IMAGE_DOWNLOADED: "Pledge Note Media Assets Image Downloaded",
        PODCAST_APP_LINK_CLICK: "Podcast App Link Click",
        PODCAST_EDITING_COMPLETE: "Podcast Editing Complete",
        PODCAST_EDITING_ERROR: "Podcast Editing Error",
        PODCAST_EDITING_INITIATED: "Podcast Editing Initiated",
        PODCAST_EDITOR_CTA_CLICKED: "Podcast Editor Cta Clicked",
        PODCAST_EDITOR_CTA_DISMISSED: "Podcast Editor Cta Dismissed",
        PODCAST_EDITOR_CTA_SEEN: "Podcast Editor Cta Seen",
        PODCAST_EMAIL_LINK_CLICKED: "Podcast Email Link Clicked",
        PODCAST_EPISODE_NOTES_SAVE_CLICKED: "Podcast Episode Notes Save Clicked",
        PODCAST_FEED_URL_COPIED: "Podcast Feed Url Copied",
        PODCAST_IMPORT_ERROR: "Podcast Import Error",
        PODCAST_IMPORT_SCRAPE_ERROR: "Podcast Import Scrape Error",
        PODCAST_LISTEN_ON_CLICKED: "Podcast Listen On Clicked",
        PODCAST_PREVIEW_MENU_ADD_PREVIEW_CLICKED: "Podcast Preview Menu Add Preview Clicked",
        PODCAST_PREVIEW_MENU_CLICKED: "Podcast Preview Menu Clicked",
        PODCAST_PREVIEW_MENU_REMOVE_CLICKED: "Podcast Preview Menu Remove Clicked",
        PODCAST_PREVIEW_MENU_REMOVE_PREVIEW_CLICKED: "Podcast Preview Menu Remove Preview Clicked",
        PODCAST_SETUP_COMPLETE: "Podcast Setup Complete",
        PODCAST_SETUP_ERROR: "Podcast Setup Error",
        PODCAST_SETUP_INITIATED: "Podcast Setup Initiated",
        POLL_SIGNUP_DIALOG_CLOSED: "Poll Signup Dialog Closed",
        POLL_SIGNUP_DIALOG_PRESENTED: "Poll Signup Dialog Presented",
        POLL_SIGNUP_DIALOG_SUBMITTED: "Poll Signup Dialog Submitted",
        POSTS_PAGE_FILTERED: "Posts Page Filtered",
        POSTS_PAGE_SORTED: "Posts Page Sorted",
        POST_ARCHIVED: "Post Archived",
        POST_BOTTOM_SEEN: "Post Bottom Seen",
        POST_COMMENTS_FOOTER_SEEN: "Post Comments Footer Seen",
        POST_COMPOSER_CREATION_SHARED: "Post Composer Creation Shared",
        POST_COMPOSER_CREATION_SHARE_SHEET_VIEWED: "Post Composer Creation Share Sheet Viewed",
        POST_COMPOSER_DRAFT_LOADED: "Post Composer Draft Loaded",
        POST_COMPOSER_PUBLISH_CONFIRMATION_VIEWED: "Post Composer Publish Confirmation Viewed",
        POST_COMPOSER_PUB_PICKER_PUB_SELECTED: "Post Composer Pub Picker Pub Selected",
        POST_COMPOSER_PUB_PICKER_VIEWED: "Post Composer Pub Picker Viewed",
        POST_COMPOSER_SETTINGS_VIEWED: "Post Composer Settings Viewed",
        POST_COMPOSER_VIEWED: "Post Composer Viewed",
        POST_EDITOR_ADD_GUEST_CLICKED: "Post Editor Add Guest Clicked",
        POST_EDITOR_MEDIA_DRAWER_CLOSED: "Post Editor Media Drawer Closed",
        POST_EDITOR_MEDIA_DRAWER_VIEWED: "Post Editor Media Drawer Viewed",
        POST_END_CTA_CLICKED: "Post End Cta Clicked",
        POST_END_CTA_RENDERED: "Post End Cta Rendered",
        POST_END_CTA_SEEN: "Post End Cta Seen",
        POST_IMPORT_FILE_SIZE_EXCEEDED: "Post Import File Size Exceeded",
        POST_INFO_VIEWED: "Post Info Viewed",
        POST_LINK_CLICKED: "Post Link Clicked",
        POST_PAGE_PINGBACK: "Post Page Pingback",
        POST_PAGE_VISIT_TRACKED: "Post Page Visit Tracked",
        POST_PAYWALL_SHOWN: "Post Paywall Shown",
        POST_PINGBACK_SEEN: "Post Pingback Seen",
        POST_PREVIEW_OPTION: "Post Preview Option",
        POST_PUBLISHED_SETTINGS: "Post Published Settings",
        POST_REACTIONS_MODAL_VIEWED: "Post Reactions Modal Viewed",
        POST_RECOMMENDATIONS_SHOWN: "Post Recommendations Shown",
        POST_SAVED: "Post Saved",
        POST_SEARCH_RESULT_CLICKED: "Post Search Result Clicked",
        POST_SEEN: "Post Seen",
        POST_SHARE_BUTTON_CLICKED: "Post Share Button Clicked",
        POST_TEXT_SELECTED: "Post Text Selected",
        POST_VIEWER_CLOSED: "Post Viewer Closed",
        POST_VIEWER_NAVIGATED: "Post Viewer Navigated",
        POST_VIEWER_VIEWED: "Post Viewer Viewed",
        PREFERRED_LANGUAGE_SET: "Preferred Language Set",
        PREFER_APPLE_PAY_CLICKED: "Prefer Apple Pay Clicked",
        PREFER_CREDIT_CARD_CLICKED: "Prefer Credit Card Clicked",
        PREPUBLISH_PROMPT_DISPLAYED: "Prepublish Prompt Displayed",
        PREVIEW_BUTTON_CLICKED: "Preview Button Clicked",
        PREVIOUS_POST_LINK_CLICKED: "Previous Post Link Clicked",
        PROCESSING_EPISODE_MEDIA_CLICKED: "Processing Episode Media Clicked",
        PROCESSING_VOICEOVER_AUDIO_CLICKED: "Processing Voiceover Audio Clicked",
        PROFILE_EDITED: "Profile Edited",
        PROFILE_FILLED_OUT: "Profile Filled Out",
        PROFILE_MORE_MENU_TAPPED: "Profile More Menu Tapped",
        PROFILE_PEOPLE_LIST_VIEWED: "Profile People List Viewed",
        PROFILE_SHARE_LINK_CLICKED: "Profile Share Link Clicked",
        PROFILE_STARTED: "Profile Started",
        PROFILE_UPDATER_SHOWN: "Profile Updater Shown",
        PROFILE_VISIBILITY_SET: "Profile Visibility Set",
        PROFILE_VISITED: "Profile Visited",
        PUBLICATION_FOOTER_SEEN: "Publication Footer Seen",
        PUBLICATION_HOVER_CARD_SHOWN: "Publication Hover Card Shown",
        PUBLICATION_MEDIA_ASSETS_IMAGE_DOWNLOADED: "Publication Media Assets Image Downloaded",
        PUBLICATION_RECOMMENDATIONS_SHOWN: "Publication Recommendations Shown",
        PUBLICATION_RECOMMENDATION_LINK_CLICKED: "Publication Recommendation Link Clicked",
        PUBLICATION_SEARCH_DROPDOWN_RESULT_CLICKED: "Publication Search Dropdown Result Clicked",
        PUBLICATION_SEARCH_DROPDOWN_SEARCHED: "Publication Search Dropdown Searched",
        PUBLICATION_SEARCH_RESULTS_SHOWN: "Publication Search Results Shown",
        PUBLICATION_SEARCH_RESULT_CLICKED: "Publication Search Result Clicked",
        PUBLICATION_SETTING_TEXT_INPUT_ERRORED: "Publication Setting Text Input Errored",
        PUBLICATION_SHARE_BUTTON_CLICKED: "Publication Share Button Clicked",
        PUBLICATION_THREADS_SCREEN_VIEWED: "Publication Threads Screen Viewed",
        PUBLICATION_VISITED: "Publication Visited",
        PUBLIC_LEADERBOARD_VIEWED: "Public Leaderboard Viewed",
        PUBLISHER_DASHBOARD_POST_BUTTON_CLICKED: "Publisher Dashboard Post Button Clicked",
        PUBLISHER_DASHBOARD_SEEN: "Publisher Dashboard Seen",
        PUBLISHER_DASHBOARD_VISIT_SITE_CLICKED: "Publisher Dashboard Visit Site Clicked",
        PUBLISH_DISABLED_APPEALED: "Publish Disabled Appealed",
        REACTION_REJECTED: "Reaction Rejected",
        READER_FLOATING_CTA_HOVERED: "Reader Floating Cta Hovered",
        READER_INBOX_TAB_CHANGED: "Reader Inbox Tab Changed",
        READER_ONBOARDING_APP_UPSELL_SHOWN: "Reader Onboarding App Upsell Shown",
        READER_ONBOARDING_BULK_SUBSCRIBED: "Reader Onboarding Bulk Subscribed",
        READER_ONBOARDING_BULK_SUBSCRIBE_SELECTED_IN_UI: "Reader Onboarding Bulk Subscribe Selected In Ui",
        READER_ONBOARDING_BULK_SUBSCRIBE_SKIPPED: "Reader Onboarding Bulk Subscribe Skipped",
        READER_ONBOARDING_CATEGORIES_FINALIZED: "Reader Onboarding Categories Finalized",
        READER_ONBOARDING_CATEGORY_REQUESTED: "Reader Onboarding Category Requested",
        READER_ONBOARDING_CREATE_PUBLICATION_STEP_ERROR: "Reader Onboarding Create Publication Step Error",
        READER_ONBOARDING_CREATE_PUBLICATION_STEP_STARTED: "Reader Onboarding Create Publication Step Started",
        READER_ONBOARDING_CREATE_PUBLICATION_SUCCESS_STEP_SKIPPED: "Reader Onboarding Create Publication Success Step Skipped",
        READER_ONBOARDING_CREATE_PUBLICATION_SUCCESS_STEP_STARTED: "Reader Onboarding Create Publication Success Step Started",
        READER_ONBOARDING_EDIT_SUB_VISIBILITY_SKIPPED: "Reader Onboarding Edit Sub Visibility Skipped",
        READER_ONBOARDING_ERROR: "Reader Onboarding Error",
        READER_ONBOARDING_INVITE_FRIENDS_PAID_REFERRAL_STEP_SHOWN: "Reader Onboarding Invite Friends Paid Referral Step Shown",
        READER_ONBOARDING_MODAL_CLOSED: "Reader Onboarding Modal Closed",
        READER_ONBOARDING_MODAL_OPENED: "Reader Onboarding Modal Opened",
        READER_ONBOARDING_NO_TWITTER_PUBS_RECOMMENDED: "Reader Onboarding No Twitter Pubs Recommended",
        READER_ONBOARDING_PROFILE_SETUP_SKIPPED: "Reader Onboarding Profile Setup Skipped",
        READER_ONBOARDING_PROFILE_SETUP_STARTED: "Reader Onboarding Profile Setup Started",
        READER_ONBOARDING_PUB_LANDING_LET_ME_READ_CLICKED: "Reader Onboarding Pub Landing Let Me Read Clicked",
        READER_ONBOARDING_PUB_LANDING_SIGNUP_SUCCEEDED: "Reader Onboarding Pub Landing Signup Succeeded",
        READER_ONBOARDING_PUB_LANDING_SUBSCRIBE_CLICKED: "Reader Onboarding Pub Landing Subscribe Clicked",
        READER_ONBOARDING_PUB_RECOMMENDED: "Reader Onboarding Pub Recommended",
        READER_ONBOARDING_PUB_SIGNUP_FAILED: "Reader Onboarding Pub Signup Failed",
        READER_ONBOARDING_PUB_SIGNUP_SUCCEEDED: "Reader Onboarding Pub Signup Succeeded",
        READER_ONBOARDING_SIGNUP_FAILED: "Reader Onboarding Signup Failed",
        READER_ONBOARDING_SIGNUP_SUCCEEDED: "Reader Onboarding Signup Succeeded",
        READER_ONBOARDING_SKIP_CATEGORIES_CLICKED: "Reader Onboarding Skip Categories Clicked",
        READER_ONBOARDING_SKIP_SUBSCRIBE_CLICKED: "Reader Onboarding Skip Subscribe Clicked",
        READER_ONBOARDING_SKIP_TWITTER_CLICKED: "Reader Onboarding Skip Twitter Clicked",
        READER_ONBOARDING_START_READING_CLICKED: "Reader Onboarding Start Reading Clicked",
        READER_ONBOARDING_START_WRITING_STEP_SKIPPED: "Reader Onboarding Start Writing Step Skipped",
        READER_ONBOARDING_START_WRITING_STEP_STARTED: "Reader Onboarding Start Writing Step Started",
        READER_ONBOARDING_STEP_CHANGED: "Reader Onboarding Step Changed",
        READER_ONBOARDING_TWITTER_LINK_CLICKED: "Reader Onboarding Twitter Link Clicked",
        READER_REFERRALS_MODAL_LEARN_MORE_CLICKED: "Reader Referrals Modal Learn More Clicked",
        READER_REFERRALS_MODAL_LEARN_MORE_SEEN: "Reader Referrals Modal Learn More Seen",
        READER_REFERRALS_MODAL_OPT_IN_CLICKED: "Reader Referrals Modal Opt In Clicked",
        READER_REFERRALS_MODAL_OPT_OUT_CLICKED: "Reader Referrals Modal Opt Out Clicked",
        READER_SURVEY_LINKED_IN_POST: "Reader Survey Linked In Post",
        READER_SURVEY_ONBOARDING_MODAL_SEEN: "Reader Survey Onboarding Modal Seen",
        READER_SURVEY_ONBOARDING_MODAL_SUBMITTED: "Reader Survey Onboarding Modal Submitted",
        READER_SURVEY_SEEN: "Reader Survey Seen",
        READER_SURVEY_SUGGESTED_QUESTION_ADDED: "Reader Survey Suggested Question Added",
        READING_QUEUE_ITEM_CLICKED: "Reading Queue Item Clicked",
        READING_QUEUE_ITEM_DISMISSED: "Reading Queue Item Dismissed",
        READING_QUEUE_ITEM_SEEN: "Reading Queue Item Seen",
        RECENT_EPISODE_ITEM_CLICKED: "Recent Episode Item Clicked",
        RECENT_EPISODE_ITEM_SEEN: "Recent Episode Item Seen",
        RECOMMENDATIONS_CTA_CLICKED: "Recommendations Cta Clicked",
        RECOMMENDATIONS_CTA_DISMISSED: "Recommendations Cta Dismissed",
        RECOMMENDATIONS_CTA_SHOWN: "Recommendations Cta Shown",
        RECOMMENDATIONS_INVITE_WRITER_CLICKED: "Recommendations Invite Writer Clicked",
        RECOMMENDATION_SUBSCRIBE_BUTTON_CLICKED: "Recommendation Subscribe Button Clicked",
        RECOMMENDATION_UNSUBSCRIBE_BUTTON_CLICKED: "Recommendation Unsubscribe Button Clicked",
        RECOMMENDED_POST_CLICKED: "Recommended Post Clicked",
        RECOMMENDED_PUBLICATIONS_MAYBE_LATER_CLICKED: "Recommended Publications Maybe Later Clicked",
        RECOMMENDED_PUBLICATION_CLICKED: "Recommended Publication Clicked",
        RECOMMENDED_PUBLICATION_TOGGLED: "Recommended Publication Toggled",
        RECOMMEND_FROM_WRITER_ONBOARDING_CLICKED: "Recommend From Writer Onboarding Clicked",
        RECOMMEND_FROM_WRITER_ONBOARDING_SKIPPED: "Recommend From Writer Onboarding Skipped",
        RECORD_EPISODE_AUDIO_CLICKED: "Record Episode Audio Clicked",
        REDIRECTED_PAYMENT_SCREEN_SHOWN: "Redirected Payment Screen Shown",
        REFERRALS_ENABLE_DASHBOARD_CTA_CLICKED: "Referrals Enable Dashboard Cta Clicked",
        REFERRALS_ENABLE_DASHBOARD_CTA_DISMISSED: "Referrals Enable Dashboard Cta Dismissed",
        REFERRALS_ENABLE_DASHBOARD_CTA_SHOWN: "Referrals Enable Dashboard Cta Shown",
        REMOVE_WATERMARK_CLICKED: "Remove Watermark Clicked",
        REPLY_ACTIVITY_SCREEN_VIEWED: "Reply Activity Screen Viewed",
        RESTACK_POST_CLICKED: "Restack Post Clicked",
        RESTACK_POST_SUBMITTED: "Restack Post Submitted",
        RESTACK_SELECTION_CLICKED: "Restack Selection Clicked",
        SAVED_CARD_PAYWALL_FAILED: "Saved Card Paywall Failed",
        SAVED_CARD_PAYWALL_SEEN: "Saved Card Paywall Seen",
        SAVED_CARD_PAYWALL_SUBMITTED: "Saved Card Paywall Submitted",
        SAVED_POST_CLICKED: "Saved Post Clicked",
        SAVE_WATERMARK_CLICKED: "Save Watermark Clicked",
        SCHEDULED_POST_SEEN: "Scheduled Post Seen",
        SCORE_BASED_UPSELL_MODAL_DONE_CLICKED: "Score Based Upsell Modal Done Clicked",
        SCORE_BASED_UPSELL_MODAL_EDIT_EMAIL_CLICKED: "Score Based Upsell Modal Edit Email Clicked",
        SCORE_BASED_UPSELL_MODAL_SEEN: "Score Based Upsell Modal Seen",
        SECRET_LINK_COPIED: "Secret Link Copied",
        SECTION_DELETION_INITIATED: "Section Deletion Initiated",
        SECTION_EDITING_ERROR: "Section Editing Error",
        SECTION_EMAIL_STATE_SCREEN_SHOWN: "Section Email State Screen Shown",
        SECTION_SETUP_ERROR: "Section Setup Error",
        SECURITY_QUESTIONS_VIEWED: "Security Questions Viewed",
        SEEKED_AUDIO: "Seeked Audio",
        SEE_ALL_EPISODES_CLICKED: "See All Episodes Clicked",
        SELECTED_PLAN_CHANGED: "Selected Plan Changed",
        SEND_AS_EMAIL_PROMPT_ACCEPTED: "Send As Email Prompt Accepted",
        SEND_AS_EMAIL_PROMPT_REJECTED: "Send As Email Prompt Rejected",
        SEND_NOTE_AS_EMAIL_CONFIRMATION_CONFIRMED: "Send Note As Email Confirmation Confirmed",
        SEND_NOTE_AS_EMAIL_CONFIRMATION_REJECTED: "Send Note As Email Confirmation Rejected",
        SEND_NOTE_AS_EMAIL_PUBLICATION_SELECTED: "Send Note As Email Publication Selected",
        SEND_NOTE_AS_EMAIL_TOGGLE_CLICKED: "Send Note As Email Toggle Clicked",
        SETTINGS_PAGE_CONFIRM_EMAIL_BANNER_SHOWN: "Settings Page Confirm Email Banner Shown",
        SETTINGS_PAGE_CONFIRM_EMAIL_BUTTON_TAPPED: "Settings Page Confirm Email Button Tapped",
        SETUP_PLANS_PAGE_FAILED: "Setup Plans Page Failed",
        SETUP_TWITTER_CTA_CONNECT_CLICKED: "Setup Twitter Cta Connect Clicked",
        SETUP_TWITTER_CTA_DISMISSED: "Setup Twitter Cta Dismissed",
        SETUP_TWITTER_CTA_SETDISCOVERABLE_CLICKED: "Setup Twitter Cta Setdiscoverable Clicked",
        SET_NEW_RATES_CLICKED: "Set New Rates Clicked",
        SET_UP_FEED_CLICKED: "Set Up Feed Clicked",
        SHARE_CENTER_CUSTOMIZE_ASSETS_MODAL_OPENED: "Share Center Customize Assets Modal Opened",
        SHARE_CENTER_CUSTOMIZE_ASSETS_PREVIEW_TEXT_TOGGLED: "Share Center Customize Assets Preview Text Toggled",
        SHARE_CENTER_DISPLAY_WELCOME_PAGE_SETTING_CLICKED: "Share Center Display Welcome Page Setting Clicked",
        SHARE_CENTER_INSTAGRAM_MODAL_OPENED: "Share Center Instagram Modal Opened",
        SHARE_CENTER_MEDIA_ASSETS_EMAILED: "Share Center Media Assets Emailed",
        SHARE_CENTER_MEDIA_ASSETS_EMAILED_FAILED: "Share Center Media Assets Emailed Failed",
        SHARE_CENTER_SEEN: "Share Center Seen",
        SHARE_CENTER_VIDEO_DOWNLOADED: "Share Center Video Downloaded",
        SHARE_CENTER_VIDEO_SELECT_QUOTE_CLICKED: "Share Center Video Select Quote Clicked",
        SHARE_DIALOG_MORE_OPTION_CLICKED: "Share Dialog More Option Clicked",
        SHARE_DIALOG_OPENED: "Share Dialog Opened",
        SHARE_LINK_CLICKED: "Share Link Clicked",
        SHARE_PUBLICATION_MODAL_OPENED: "Share Publication Modal Opened",
        SHARE_SELECTION_EDIT_MODAL_OPENED: "Share Selection Edit Modal Opened",
        SHARE_SELECTION_IMAGE_DOWNLOADED: "Share Selection Image Downloaded",
        SHARE_SELECTION_INSTAGRAM_MODAL_OPENED: "Share Selection Instagram Modal Opened",
        SHARE_SELECTION_MODAL_OPENED: "Share Selection Modal Opened",
        SHARE_SELECTION_RESTACK_CLICKED: "Share Selection Restack Clicked",
        SIGN_IN_APP_UPSELL_CLICKED: "Sign In App Upsell Clicked",
        STAGED_RELEASE_SCHEDULED: "Staged Release Scheduled",
        STATS_PAGE_VIEWED: "Stats Page Viewed",
        STATS_PLACEHOLDER_SEEN: "Stats Placeholder Seen",
        STREAKS_MODAL_SEEN: "Streaks Modal Seen",
        STREAKS_MODAL_TURN_ON_CLICKED: "Streaks Modal Turn On Clicked",
        SUBDOMAIN_CHANGED: "Subdomain Changed",
        SUBSCRIBER_BADGE_INFO_SHOWN: "Subscriber Badge Info Shown",
        SUBSCRIBER_COUNT_ANNOUNCEMENT_DISMISSED: "Subscriber Count Announcement Dismissed",
        SUBSCRIBER_COUNT_ANNOUNCEMENT_SETTINGS_CLICKED: "Subscriber Count Announcement Settings Clicked",
        SUBSCRIBER_COUNT_ANNOUNCEMENT_SHOWN: "Subscriber Count Announcement Shown",
        SUBSCRIBER_REFERRALS_SETUP_ERROR: "Subscriber Referrals Setup Error",
        SUBSCRIBER_REFERRALS_SETUP_MODAL_NOT_NOW: "Subscriber Referrals Setup Modal Not Now",
        SUBSCRIBER_REFERRALS_SETUP_MODAL_SHOWN: "Subscriber Referrals Setup Modal Shown",
        SUBSCRIBER_REFERRALS_SETUP_MODAL_SUBMITTED: "Subscriber Referrals Setup Modal Submitted",
        SUBSCRIBER_SUMMARY_TAB_CHANGED: "Subscriber Summary Tab Changed",
        SUBSCRIBE_BUTTON_FLOATING_IN_POST_CLICKED: "Subscribe Button Floating In Post Clicked",
        SUBSCRIBE_BUTTON_IN_READER_ONBOARDING_CLICKED: "Subscribe Button In Reader Onboarding Clicked",
        SUBSCRIBE_BUTTON_IN_SEARCH_RESULTS_CLICKED: "Subscribe Button In Search Results Clicked",
        SUBSCRIBE_CONFIRM_PAYMENT_SCREEN_SHOWN: "Subscribe Confirm Payment Screen Shown",
        SUBSCRIBE_CTA_PROMPT_ACCEPTED: "Subscribe Cta Prompt Accepted",
        SUBSCRIBE_CTA_PROMPT_REJECTED: "Subscribe Cta Prompt Rejected",
        SUBSCRIBE_EMAIL_FULL_SCREEN_SHOWN: "Subscribe Email Full Screen Shown",
        SUBSCRIBE_EMAIL_SCREEN_SHOWN: "Subscribe Email Screen Shown",
        SUBSCRIBE_FLOW_APP_UPSELL_SHOWN: "Subscribe Flow App Upsell Shown",
        SUBSCRIBE_FLOW_START_WRITING_SEEN: "Subscribe Flow Start Writing Seen",
        SUBSCRIBE_FOOTER_SEEN: "Subscribe Footer Seen",
        SUBSCRIBE_FORM_ERROR: "Subscribe Form Error",
        SUBSCRIBE_FORM_INPUT_FILLED: "Subscribe Form Input Filled",
        SUBSCRIBE_FORM_MISSING_PAYMENT: "Subscribe Form Missing Payment",
        SUBSCRIBE_FORM_SUBMIT_PRESSED: "Subscribe Form Submit Pressed",
        SUBSCRIBE_INVITE_SCREEN_SHOWN: "Subscribe Invite Screen Shown",
        SUBSCRIBE_LATER_SCREEN_SHOWN: "Subscribe Later Screen Shown",
        SUBSCRIBE_MODAL_IN_POST_CLOSED: "Subscribe Modal In Post Closed",
        SUBSCRIBE_MODAL_IN_POST_OPENED_AUTOMATICALLY: "Subscribe Modal In Post Opened Automatically",
        SUBSCRIBE_NOTE_SCREEN_FAILED: "Subscribe Note Screen Failed",
        SUBSCRIBE_NOTE_SCREEN_SEEN: "Subscribe Note Screen Seen",
        SUBSCRIBE_NOTE_SCREEN_SKIPPED: "Subscribe Note Screen Skipped",
        SUBSCRIBE_NOTE_SCREEN_SUBMITTED: "Subscribe Note Screen Submitted",
        SUBSCRIBE_PAGE_BULK_SUBSCRIBED: "Subscribe Page Bulk Subscribed",
        SUBSCRIBE_PAGE_REFERRAL_VISIT: "Subscribe Page Referral Visit",
        SUBSCRIBE_PROMPT_DISMISSED: "Subscribe Prompt Dismissed",
        SUBSCRIBE_PROMPT_EXPANDED: "Subscribe Prompt Expanded",
        SUBSCRIBE_PROMPT_SHOWN: "Subscribe Prompt Shown",
        SUBSCRIBE_PROMPT_SIGN_IN_CLICKED: "Subscribe Prompt Sign In Clicked",
        SUBSCRIBE_PROMPT_SUBMITTED: "Subscribe Prompt Submitted",
        SUBSCRIBE_RECOMMENDATIONS_PICKER_TOGGLED: "Subscribe Recommendations Picker Toggled",
        SUBSCRIBE_RECOMMENDATIONS_TOGGLED: "Subscribe Recommendations Toggled",
        SUBSCRIBE_RECOMMENDATION_ADDED: "Subscribe Recommendation Added",
        SUBSCRIBE_RECOMMENDATION_REMOVED: "Subscribe Recommendation Removed",
        SUBSCRIBE_SCREEN_SHOWN: "Subscribe Screen Shown",
        SUBSCRIBE_SCREEN_STEP_SHOWN: "Subscribe Screen Step Shown",
        SUBSCRIBE_SCREEN_SUBMIT_ERROR: "Subscribe Screen Submit Error",
        SUBSCRIBE_SCREEN_TYPE_SELECTED: "Subscribe Screen Type Selected",
        SUBSCRIBE_THANK_YOU_SCREEN_SHOWN: "Subscribe Thank You Screen Shown",
        SUBSCRIBE_TWEET_SCREEN_SHOWN: "Subscribe Tweet Screen Shown",
        SUBSCRIPTION_NOTE_MEDIA_ASSETS_IMAGE_DOWNLOADED: "Subscription Note Media Assets Image Downloaded",
        SUGGESTED_PUBS_SCREEN_SHOWN: "Suggested Pubs Screen Shown",
        SUGGESTED_RECOMMEND_SUBSCRIBING_PUB_SCREEN_SHOWN: "Suggested Recommend Subscribing Pub Screen Shown",
        SUGGESTED_SUBDOMAIN_SELECTED: "Suggested Subdomain Selected",
        SYNC_WITH_SPOTIFY_ANNOUNCEMENT_DISMISSED: "Sync With Spotify Announcement Dismissed",
        SYNC_WITH_SPOTIFY_ANNOUNCEMENT_SEEN: "Sync With Spotify Announcement Seen",
        SYNC_WITH_SPOTIFY_ANNOUNCEMENT_SYNC_BUTTON_CLICKED: "Sync With Spotify Announcement Sync Button Clicked",
        SYNC_WITH_SPOTIFY_COPY_URL_CLICKED: "Sync With Spotify Copy Url Clicked",
        SYNC_WITH_SPOTIFY_LEARN_MORE_CLICKED: "Sync With Spotify Learn More Clicked",
        SYNC_WITH_SPOTIFY_MANUAL_SETUP_CLICKED: "Sync With Spotify Manual Setup Clicked",
        SYNC_WITH_SPOTIFY_MODAL_CLOSED: "Sync With Spotify Modal Closed",
        SYNC_WITH_SPOTIFY_SYNC_TO_SPOTIFY_CLICKED: "Sync With Spotify Sync To Spotify Clicked",
        SYNC_WITH_SPOTIFY_SYNC_WITH_SPOTIFY_CLICKED: "Sync With Spotify Sync With Spotify Clicked",
        SYNC_WITH_SPOTIFY_UNPUBLISH_CLICKED: "Sync With Spotify Unpublish Clicked",
        TEST_DRAFT_EMAIL_ERROR: "Test Draft Email Error",
        TEST_DRAFT_EMAIL_INPUT_FILLED: "Test Draft Email Input Filled",
        TEST_DRAFT_EMAIL_MISSING_PAYMENT: "Test Draft Email Missing Payment",
        TEST_DRAFT_EMAIL_SUBMIT_PRESSED: "Test Draft Email Submit Pressed",
        THREADS_COMPOSER_SCREEN_VIEWED: "Threads Composer Screen Viewed",
        THREADS_INBOX_SCREEN_VIEWED: "Threads Inbox Screen Viewed",
        THREAD_PAYWALL_SCREEN_VIEWED: "Thread Paywall Screen Viewed",
        THREAD_PERMALINK_VIEWED: "Thread Permalink Viewed",
        THREAD_REPLY_PERMALINK_VIEWED: "Thread Reply Permalink Viewed",
        THREAD_SUBSCRIBE_WALL_BUTTON_CLICKED: "Thread Subscribe Wall Button Clicked",
        THREAD_SUBSCRIBE_WALL_VIEWED: "Thread Subscribe Wall Viewed",
        TICKER_DID_YOU_MEAN_CLICKED: "Ticker Did You Mean Clicked",
        TOPIC_PAGE_VIEWED: "Topic Page Viewed",
        TOP_POSTS_FOOTER_SEEN: "Top Posts Footer Seen",
        TRANSCRIPTION_DOWNLOAD_CLICKED: "Transcription Download Clicked",
        TRANSCRIPTION_EDITOR_EDIT_CHUNK_CLICKED: "Transcription Editor Edit Chunk Clicked",
        TRANSCRIPTION_EDITOR_SHOW_ON_POST_CLICKED: "Transcription Editor Show On Post Clicked",
        TRANSCRIPTION_EDITOR_VIEW_CLICKED: "Transcription Editor View Clicked",
        TRANSCRIPTION_EDIT_CANCELLED_CLICKED: "Transcription Edit Cancelled Clicked",
        TRANSCRIPTION_EDIT_CLICKED: "Transcription Edit Clicked",
        TRANSCRIPTION_PAGE_VIEWED: "Transcription Page Viewed",
        TRANSCRIPTION_PAUSE_BUTTON_CLICKED: "Transcription Pause Button Clicked",
        TRANSCRIPTION_PLAY_BUTTON_CLICKED: "Transcription Play Button Clicked",
        TRANSCRIPTION_REGENERATE_CLICKED: "Transcription Regenerate Clicked",
        TRANSCRIPTION_REMOVE_CLICKED: "Transcription Remove Clicked",
        TRANSCRIPTION_SEARCHED: "Transcription Searched",
        TRANSCRIPTION_SEARCH_CANCELLED: "Transcription Search Cancelled",
        TRANSCRIPTION_SEARCH_CLICKED: "Transcription Search Clicked",
        TRANSCRIPTION_SPEAKER_NAME_UPDATED: "Transcription Speaker Name Updated",
        TRANSCRIPTION_TIMESTAMP_CLICKED: "Transcription Timestamp Clicked",
        TRANSCRIPTION_TOGGLED: "Transcription Toggled",
        TRANSCRIPTION_UPLOAD_FILE_CLICKED: "Transcription Upload File Clicked",
        TRANSCRIPTION_UPLOAD_FILE_COMPLETED: "Transcription Upload File Completed",
        TRANSCRIPTION_UPLOAD_FILE_FAILED: "Transcription Upload File Failed",
        TRANSCRIPTION_UPLOAD_FILE_STARTED: "Transcription Upload File Started",
        TRANSCRIPTION_UPLOAD_FILE_TYPE_CLICKED: "Transcription Upload File Type Clicked",
        TWITTER_AUTO_SHARE_OPTION_TOGGLED: "Twitter Auto Share Option Toggled",
        TWITTER_PROFILE_VISIBLE_TOGGLED: "Twitter Profile Visible Toggled",
        UNSUBSCRIBE_BUTTON_IN_READER_ONBOARDING_CLICKED: "Unsubscribe Button In Reader Onboarding Clicked",
        UNSUBSCRIBE_BUTTON_IN_SEARCH_RESULTS_CLICKED: "Unsubscribe Button In Search Results Clicked",
        UPDATE_EXPIRED_CARD_LINK_CLICKED: "Update Expired Card Link Clicked",
        UPGRADE_PLAN_MODAL_DISMISSED: "Upgrade Plan Modal Dismissed",
        UPGRADE_PLAN_MODAL_OPENED: "Upgrade Plan Modal Opened",
        UPGRADE_PLAN_MODAL_PLAN_CHANGED: "Upgrade Plan Modal Plan Changed",
        UPGRADE_PLAN_MODAL_SUBMITTED: "Upgrade Plan Modal Submitted",
        UPLOAD_AUDIO_CLICKED: "Upload Audio Clicked",
        UPLOAD_EPISODE_AUDIO_CLICKED: "Upload Episode Audio Clicked",
        UPLOAD_VIDEO_CLICKED: "Upload Video Clicked",
        USER_HEAD_CLICKED: "User Head Clicked",
        USER_LINK_CLICKED: "User Link Clicked",
        USER_MENU_ACCOUNT_SETTINGS_CLICKED: "User Menu Account Settings Clicked",
        USER_MENU_ACTIVITY_CLICKED: "User Menu Activity Clicked",
        USER_MENU_DASHBOARD_CLICKED: "User Menu Dashboard Clicked",
        USER_MENU_DISCOVER_CLICKED: "User Menu Discover Clicked",
        USER_MENU_DISMISSED: "User Menu Dismissed",
        USER_MENU_INVITE_FRIENDS_CLICKED: "User Menu Invite Friends Clicked",
        USER_MENU_MANAGE_SUBSCRIPTION_CLICKED: "User Menu Manage Subscription Clicked",
        USER_MENU_OPENED: "User Menu Opened",
        USER_MENU_PROFILE_CLICKED: "User Menu Profile Clicked",
        USER_MENU_READER_CLICKED: "User Menu Reader Clicked",
        USER_MENU_SAVED_CLICKED: "User Menu Saved Clicked",
        VIDEO_BUFFERING_COMPLETED: "Video Buffering Completed",
        VIDEO_BUFFERING_STARTED: "Video Buffering Started",
        VIDEO_CLIP_BUTTON_CLICKED: "Video Clip Button Clicked",
        VIDEO_CLIP_CREATE_BUTTON_CLICKED: "Video Clip Create Button Clicked",
        VIDEO_CLIP_CREATE_MODAL_CLOSED: "Video Clip Create Modal Closed",
        VIDEO_CLIP_DOWNLOAD_BUTTON_CLICKED: "Video Clip Download Button Clicked",
        VIDEO_CLIP_INSTAGRAM_SHARE_MODAL_SEEN: "Video Clip Instagram Share Modal Seen",
        VIDEO_CLIP_LOOP_BUTTON_CLICKED: "Video Clip Loop Button Clicked",
        VIDEO_CLIP_MODAL_CLOSED: "Video Clip Modal Closed",
        VIDEO_CLIP_NUX_CLICKED: "Video Clip Nux Clicked",
        VIDEO_CLIP_NUX_DISMISSED: "Video Clip Nux Dismissed",
        VIDEO_CLIP_NUX_SEEN: "Video Clip Nux Seen",
        VIDEO_CLIP_SEEKED: "Video Clip Seeked",
        VIDEO_CLIP_SEEN: "Video Clip Seen",
        VIDEO_CLIP_SHARE_BUTTON_CLICKED: "Video Clip Share Button Clicked",
        VIDEO_CLIP_WATCH_FULL_EPISODE_BUTTON_CLICKED: "Video Clip Watch Full Episode Button Clicked",
        VIDEO_CLOSED_CAPTIONS_BUTTON_CLICKED: "Video Closed Captions Button Clicked",
        VIDEO_MODAL_BROWSE_FILES_CLICKED: "Video Modal Browse Files Clicked",
        VIDEO_MODAL_CANCEL_CLICKED: "Video Modal Cancel Clicked",
        VIDEO_MODAL_DROPPED_FILE: "Video Modal Dropped File",
        VIDEO_MODAL_INSERT_CLICKED: "Video Modal Insert Clicked",
        VIDEO_NEXT_VIDEO_BUTTON_CLICKED: "Video Next Video Button Clicked",
        VIDEO_PAUSE_BUTTON_CLICKED: "Video Pause Button Clicked",
        VIDEO_PLAYBACK_COMPLETED: "Video Playback Completed",
        VIDEO_PLAYBACK_CONTINUED: "Video Playback Continued",
        VIDEO_PLAY_BUTTON_CLICKED: "Video Play Button Clicked",
        VIDEO_QUOTE_TEXT_SELECTED: "Video Quote Text Selected",
        VIDEO_RECORDED: "Video Recorded",
        VIDEO_RECORDER_HIDDEN: "Video Recorder Hidden",
        VIDEO_RECORDER_SHOWN: "Video Recorder Shown",
        VIDEO_RECORDER_STARTED: "Video Recorder Started",
        VIDEO_RECORDER_STARTING: "Video Recorder Starting",
        VIDEO_RECORDER_STOPPED: "Video Recorder Stopped",
        VIDEO_RECORDER_STOPPING: "Video Recorder Stopping",
        VIDEO_UPLOAD_IN_NOTES_FAILED: "Video Upload In Notes Failed",
        VIEWED_MORE_CATEGORY: "Viewed More Category",
        VIRAL_GIFT_ALL_EMAILS_FILLED: "Viral Gift All Emails Filled",
        VIRAL_GIFT_FORM_SUBMITTED: "Viral Gift Form Submitted",
        VIRAL_GIFT_LINK_COPIED: "Viral Gift Link Copied",
        VIRAL_GIFT_LINK_INPUT_CLICKED: "Viral Gift Link Input Clicked",
        VIRAL_GIFT_PAGE_VIEWED: "Viral Gift Page Viewed",
        VIRAL_GIFT_SHARE_ON_TWITTER_CLICKED: "Viral Gift Share On Twitter Clicked",
        VIRTUAL_FREE_SIGNUP_FAILED: "Virtual Free Signup Failed",
        WEB_PUSH_NOTIFICATIONS_PERMISSION_SET: "Web Push Notifications Permission Set",
        WRITER_DASHBOARD_POSTS_SEARCHED: "Writer Dashboard Posts Searched",
        WRITER_MEDIA_ASSETS_IMAGE_DOWNLOADED: "Writer Media Assets Image Downloaded",
        WRITER_MEDIA_ASSETS_PAGE_VISITED: "Writer Media Assets Page Visited",
        WRITER_REFERRAL_ACTION_BOX_DISMISSED: "Writer Referral Action Box Dismissed",
        WRITER_REFERRAL_ACTION_BOX_SHOWN: "Writer Referral Action Box Shown",
        WRITER_REFERRAL_CODE_COPIED: "Writer Referral Code Copied",
        WRITER_REFERRAL_PROFILE_LINK_CLICKED: "Writer Referral Profile Link Clicked",
        WRITER_SIGNUP_ADD_SUBS_SKIP: "Writer Signup Add Subs Skip",
        WRITER_SIGNUP_ADD_SUBS_SUCCESS: "Writer Signup Add Subs Success",
        WRITER_SIGNUP_CONNECT_ACCOUNTS_SKIP: "Writer Signup Connect Accounts Skip",
        WRITER_SIGNUP_CREATE_PUBLICATION_FORM_ERROR: "Writer Signup Create Publication Form Error",
        WRITER_SIGNUP_CREATE_PUBLICATION_FORM_INPUT_FILLED: "Writer Signup Create Publication Form Input Filled",
        WRITER_SIGNUP_CREATE_PUBLICATION_FORM_MISSING_PAYMENT: "Writer Signup Create Publication Form Missing Payment",
        WRITER_SIGNUP_CREATE_PUBLICATION_FORM_SUBMIT_PRESSED: "Writer Signup Create Publication Form Submit Pressed",
        WRITER_SIGNUP_EMAIL_INPUTS_FORM_ERROR: "Writer Signup Email Inputs Form Error",
        WRITER_SIGNUP_EMAIL_INPUTS_FORM_INPUT_FILLED: "Writer Signup Email Inputs Form Input Filled",
        WRITER_SIGNUP_EMAIL_INPUTS_FORM_MISSING_PAYMENT: "Writer Signup Email Inputs Form Missing Payment",
        WRITER_SIGNUP_EMAIL_INPUTS_FORM_SUBMIT_PRESSED: "Writer Signup Email Inputs Form Submit Pressed",
        WRITER_SIGNUP_GOOGLE_CLICKED: "Writer Signup Google Clicked",
        WRITER_SIGNUP_IMPORT_SKIP: "Writer Signup Import Skip",
        WRITER_SIGNUP_IMPORT_SUCCESS: "Writer Signup Import Success",
        WRITER_SIGNUP_LOG_IN_CLICKED: "Writer Signup Log In Clicked",
        WRITER_SIGNUP_PUBLISHER_AGREEMENT_FORM_ERROR: "Writer Signup Publisher Agreement Form Error",
        WRITER_SIGNUP_PUBLISHER_AGREEMENT_FORM_INPUT_FILLED: "Writer Signup Publisher Agreement Form Input Filled",
        WRITER_SIGNUP_PUBLISHER_AGREEMENT_FORM_MISSING_PAYMENT: "Writer Signup Publisher Agreement Form Missing Payment",
        WRITER_SIGNUP_PUBLISHER_AGREEMENT_FORM_SUBMIT_PRESSED: "Writer Signup Publisher Agreement Form Submit Pressed",
        WRITER_SIGNUP_SECOND_TWITTER_SKIP: "Writer Signup Second Twitter Skip",
        WRITER_SIGNUP_SETUP_PROFILE_FORM_ERROR: "Writer Signup Setup Profile Form Error",
        WRITER_SIGNUP_SETUP_PROFILE_FORM_INPUT_FILLED: "Writer Signup Setup Profile Form Input Filled",
        WRITER_SIGNUP_SETUP_PROFILE_FORM_MISSING_PAYMENT: "Writer Signup Setup Profile Form Missing Payment",
        WRITER_SIGNUP_SETUP_PROFILE_FORM_SUBMIT_PRESSED: "Writer Signup Setup Profile Form Submit Pressed",
        WRITER_SIGNUP_SUBSCRIBE_TO_OTHERS_SKIPPED: "Writer Signup Subscribe To Others Skipped",
        WRITER_SIGNUP_SWITCH_ACCOUNTS_CLICKED: "Writer Signup Switch Accounts Clicked",
        WRITER_SIGNUP_TWITTER_CLICKED: "Writer Signup Twitter Clicked",
        WRITING_BRANDPAGE_VISITED: "Writing Brandpage Visited",
        WRITING_HOMEPAGE_VISITED: "Writing Homepage Visited",
        ZENDESK_CLASSIC_WIDGET_INTERACTED: "Zendesk Classic Widget Interacted"
    },
    mT = (e, {
        utm_source: t
    } = {}) => {
        const r = {
            id: e(),
            timestamp: new Date
        };
        return t && (r.utm_source = t), r
    };
let pc = {};

function QO(e) {
    pc = N({}, e)
}

function ST() {
    return N({}, pc)
}
const ke = pT,
    mc = typeof window != "undefined" && window != window.top && mT(lT);
let Sc = "browser";
var ao;
typeof window != "undefined" && (navigator.standalone || (ao = window.matchMedia) != null && ao.call(window, "(display-mode: standalone)").matches) && (Sc = "standalone");

function eb() {
    return mc
}

function je(e, t = {}) {
    if (["development", "test"].includes("production") && !e) throw new Error("`undefined` event passed to FRONTEND track call");
    gc(e, Object.assign({}, t))
}

function tb(e, t, r = {}) {
    je(ke.PUBLICATION_VISITED, N({
        visited_publication_id: e.id,
        visited_publication_subdomain: e.subdomain,
        source: t
    }, r))
}

function rb({
    post: e,
    hasPaywall: t,
    surface: r,
    markRead: n,
    trackerUuid: o
}) {
    je(ke.POST_SEEN, {
        post_id: e.id,
        post_audience: e.audience,
        post_type: e.type,
        has_paywall: t,
        post_age_minutes: e.post_date && Xe().diff(e.post_date, "minute"),
        surface: r,
        tracker_uuid: o
    }), n && gT(e.id)
}

function gT(e) {
    return fetch(`/api/v1/posts/${e}/seen`, {
        method: "POST"
    })
}

function nb({
    post: e,
    hasPaywall: t,
    surface: r,
    trackerUuid: n
}) {
    je(ke.POST_BOTTOM_SEEN, {
        post_id: e.id,
        post_audience: e.audience,
        post_type: e.type,
        has_paywall: t,
        surface: r,
        tracker_uuid: n
    })
}

function ob({
    post: e
}) {
    e != null && e.id && (je(ke.POST_PAGE_PINGBACK, {
        seconds: 0,
        post_id: e.id
    }), setTimeout(() => {
        je(ke.POST_PAGE_PINGBACK, {
            seconds: 10,
            post_id: e.id
        })
    }, 1e4))
}

function ib({
    previous: e,
    url: t
}) {
    e && (t.includes("_no_an=true") || hT())
}

function hT(e = {}) {
    var r, n;
    if (document.location.pathname.startsWith("/embed") && typeof window != "undefined" && ((n = (r = window == null ? void 0 : window._preloads) == null ? void 0 : r.pub) != null && n.embed_tracking_disabled)) return;
    gc(ke.PAGES, Object.assign(CT(), e));
    const t = ET();
    t && (new Image().src = `https://www.facebook.com/tr?id=${t}&ev=PageView`), fI("pageview"), dT("pageview"), _T("page_view"), typeof window != "undefined" && window.PARSELY && window.PARSELY.loaded && window.PARSELY.beacon && window.PARSELY.beacon.trackPageView && window.PARSELY.beacon.trackPageView({
        url: document.location.origin + document.location.pathname + document.location.search,
        urlref: document.referrer || "",
        js: 1
    })
}

function gc(e, t = {}) {
    var o, i;
    if (typeof window == "undefined") return;
    const r = {
            event: e,
            properties: Object.assign({
                browserSessionId: dc,
                iframeVisitId: mc,
                r: Xr("r")
            }, t),
            context: {
                client_type: "web",
                displayMode: Sc,
                page: {
                    referrer: document.referrer,
                    title: document.title,
                    url: document.location.href
                },
                campaign: ST()
            }
        },
        n = cT(JSON.stringify(r));
    new Image().src = h("/api/v1/firehose", {
        _: new Date().getTime(),
        d: n
    }), (i = (o = window == null ? void 0 : window._preloads) == null ? void 0 : o.user) != null && i.is_global_admin && console.log(`EVENT: ${e}`, t)
}

function sb(e) {
    typeof window != "undefined" && (new Image().src = h("/api/v1/firehose/batch", {
        _: new Date().getTime(),
        d: e.join(",")
    }))
}

function CT() {
    const e = {};
    if (typeof window != "undefined") {
        const t = window._preloads && window._preloads.post,
            r = window.location && /^\/p\/([^\/]+)/.exec(window.location.pathname);
        r && t && r[1] === t.slug && (e.post_id = t.id, e.post_audience = t.audience, e.post_type = t.type)
    }
    return e
}
export {
    qC as $, x_ as A, AR as B, tn as C, J as D, ke as E, Ve as F, ud as G, KR as H, vR as I, pd as J, tt as K, zT as L, Mg as M, bf as N, Oa as O, re as P, Dt as Q, Gd as R, N_ as S, Fg as T, Lg as U, ra as V, th as W, ac as X, WO as Y, yI as Z, iO as _, nf as a, Yu as a$, MI as a0, zC as a1, eI as a2, PO as a3, qg as a4, LA as a5, ws as a6, IR as a7, Dg as a8, B_ as a9, Ph as aA, Xc as aB, er as aC, bo as aD, nh as aE, qh as aF, XC as aG, Ft as aH, B as aI, Hh as aJ, fR as aK, mu as aL, Ah as aM, ER as aN, pR as aO, Yh as aP, tI as aQ, rI as aR, Xh as aS, YC as aT, MO as aU, Sr as aV, jh as aW, Bg as aX, tb as aY, qO as aZ, bt as a_, T as aa, qR as ab, YR as ac, Ag as ad, Xf as ae, Qf as af, lg as ag, qm as ah, Xm as ai, Ng as aj, HA as ak, xh as al, dg as am, $t as an, LI as ao, lr as ap, RR as aq, Wt as ar, se as as, JO as at, RO as au, bO as av, Ou as aw, R_ as ax, yO as ay, an as az, PR as b, NO as b$, Qr as b0, en as b1, Be as b2, Ze as b3, TO as b4, IO as b5, W_ as b6, Kg as b7, nt as b8, dR as b9, pu as bA, kt as bB, Xs as bC, Ye as bD, UC as bE, v as bF, Rt as bG, Or as bH, Zf as bI, XR as bJ, ZR as bK, HC as bL, Lc as bM, it as bN, pI as bO, cO as bP, eO as bQ, tO as bR, Tf as bS, Yc as bT, fg as bU, ga as bV, Xd as bW, pS as bX, bR as bY, OS as bZ, LO as b_, Zh as ba, Iu as bb, yo as bc, Cr as bd, UR as be, Mt as bf, kO as bg, YO as bh, Jr as bi, aa as bj, hO as bk, n_ as bl, Df as bm, oE as bn, Rg as bo, zl as bp, te as bq, Nl as br, XA as bs, ZA as bt, gO as bu, st as bv, vf as bw, Au as bx, F as by, mg as bz, fd as c, TS as c$, HS as c0, wd as c1, $e as c2, QR as c3, vl as c4, Mo as c5, Qd as c6, lS as c7, BO as c8, sh as c9, FA as cA, Su as cB, mR as cC, JA as cD, xI as cE, jA as cF, uc as cG, ah as cH, de as cI, Bt as cJ, TE as cK, WI as cL, HI as cM, Eu as cN, oR as cO, Pl as cP, Ad as cQ, gh as cR, Tu as cS, hR as cT, cR as cU, lR as cV, rn as cW, eh as cX, HR as cY, Ar as cZ, Zg as c_, US as ca, kS as cb, FS as cc, Xa as cd, Da as ce, gd as cf, iS as cg, BE as ch, xE as ci, fO as cj, EO as ck, pO as cl, tf as cm, rf as cn, ba as co, uR as cp, oO as cq, ef as cr, OA as cs, uh as ct, aS as cu, dh as cv, ph as cw, Sh as cx, Nt as cy, rO as cz, Xr as d, kR as d$, dO as d0, xT as d1, yd as d2, UT as d3, Fd as d4, vT as d5, kT as d6, vr as d7, ih as d8, sC as d9, M_ as dA, _d as dB, id as dC, OR as dD, Qh as dE, Ut as dF, KO as dG, mh as dH, Eh as dI, ou as dJ, PA as dK, DA as dL, iC as dM, vO as dN, cC as dO, rC as dP, nC as dQ, uu as dR, Vh as dS, jf as dT, QA as dU, hg as dV, VR as dW, $A as dX, iR as dY, fC as dZ, wu as d_, Qg as da, Js as db, KI as dc, VI as dd, $I as de, FI as df, YA as dg, VA as dh, WA as di, KA as dj, eR as dk, Cu as dl, VO as dm, cd as dn, _a as dp, fa as dq, or as dr, da as ds, cf as dt, Sd as du, md as dv, oC as dw, fA as dx, tC as dy, Xg as dz, wt as e, zr as e$, Pf as e0, ad as e1, a_ as e2, s_ as e3, Me as e4, NT as e5, LT as e6, MT as e7, yT as e8, wT as e9, lC as eA, mS as eB, SS as eC, TA as eD, hA as eE, CA as eF, Aa as eG, gS as eH, AS as eI, sS as eJ, GT as eK, jT as eL, aC as eM, wC as eN, FT as eO, KT as eP, Vm as eQ, qe as eR, W as eS, RT as eT, Ko as eU, Vo as eV, Wo as eW, xo as eX, Dr as eY, AT as eZ, Ir as e_, Gt as ea, ch as eb, Ch as ec, $R as ed, BR as ee, hh as ef, Eg as eg, qA as eh, HT as ei, zA as ej, WT as ek, jO as el, Bo as em, UO as en, Lf as eo, Dh as ep, JR as eq, aI as er, yh as es, OO as et, AA as eu, f_ as ev, Lu as ew, js as ex, Ed as ey, IA as ez, wO as f, Mh as f$, xt as f0, I_ as f1, fu as f2, Gg as f3, Wg as f4, kf as f5, yf as f6, Lr as f7, qp as f8, sa as f9, jS as fA, Jh as fB, gR as fC, y_ as fD, nA as fE, oA as fF, iA as fG, tR as fH, bh as fI, oh as fJ, DO as fK, KE as fL, WR as fM, Xp as fN, dT as fO, Ds as fP, nb as fQ, rb as fR, _O as fS, Vd as fT, pa as fU, Jd as fV, jc as fW, kd as fX, Ih as fY, Th as fZ, Lh as f_, Ef as fa, VC as fb, ld as fc, sf as fd, bd as fe, Bf as ff, Fr as fg, Fm as fh, sA as fi, _A as fj, vg as fk, Wd as fl, JS as fm, rA as fn, Pe as fo, Ls as fp, dA as fq, Yr as fr, Ms as fs, ug as ft, jr as fu, Yg as fv, lu as fw, tA as fx, eA as fy, SR as fz, sd as g, U_ as g$, MA as g0, Ca as g1, mf as g2, xA as g3, Oo as g4, Pu as g5, $h as g6, sO as g7, aO as g8, uO as g9, GS as gA, xr as gB, Mm as gC, bT as gD, FR as gE, EA as gF, oI as gG, Ea as gH, $_ as gI, Hd as gJ, IS as gK, yA as gL, wA as gM, on as gN, bA as gO, pT as gP, ff as gQ, H_ as gR, nS as gS, $T as gT, PI as gU, Nc as gV, GI as gW, AO as gX, YT as gY, qs as gZ, VT as g_, hu as ga, Pg as gb, eE as gc, Vu as gd, QT as ge, ct as gf, _T as gg, ET as gh, fI as gi, hT as gj, w_ as gk, ZO as gl, zO as gm, XO as gn, aT as go, sb as gp, Zc as gq, tr as gr, lT as gs, BC as gt, OT as gu, el as gv, Zu as gw, _R as gx, uA as gy, aA as gz, Lt as h, __ as h$, Us as h0, CO as h1, Ru as h2, ib as h3, hC as h4, vu as h5, PS as h6, wR as h7, FO as h8, GO as h9, z_ as hA, Hg as hB, kC as hC, bS as hD, Gu as hE, xC as hF, $C as hG, cg as hH, bg as hI, mA as hJ, MC as hK, bC as hL, gu as hM, Yd as hN, zd as hO, F_ as hP, bs as hQ, Of as hR, uf as hS, JT as hT, tS as hU, xf as hV, LC as hW, lA as hX, nO as hY, ob as hZ, ql as h_, $O as ha, xO as hb, jR as hc, Hu as hd, cA as he, pA as hf, SA as hg, Uf as hh, yt as hi, Jg as hj, ha as hk, rR as hl, G_ as hm, BA as hn, zR as ho, zh as hp, rh as hq, gA as hr, RA as hs, $l as ht, su as hu, qT as hv, XT as hw, CR as hx, NS as hy, vd as hz, ie as i, GC as i$, of as i0, X_ as i1, _C as i2, gC as i3, dC as i4, Hr as i5, ZT as i6, Wu as i7, Za as i8, q_ as i9, TC as iA, Bu as iB, AC as iC, $u as iD, GA as iE, EE as iF, QO as iG, WS as iH, rt as iI, ce as iJ, GR as iK, jo as iL, E_ as iM, zE as iN, tm as iO, nR as iP, Cg as iQ, p_ as iR, m_ as iS, S_ as iT, sR as iU, TR as iV, hf as iW, og as iX, kA as iY, Rf as iZ, FC as i_, kl as ia, eb as ib, yR as ic, HO as id, Zd as ie, qd as ig, Do as ih, sn as ii, Pt as ij, VS as ik, Cd as il, NC as im, Id as io, oS as ip, gE as iq, Mf as ir, lO as is, NA as it, Zr as iu, qr as iv, CC as iw, ku as ix, RC as iy, xu as iz, Nu as j, Ae as j0, BT as j1, Yo as j2, aR as j3, DT as j4, PT as j5, KC as j6, j_ as j7, Qm as j8, mO as j9, SO as ja, t_ as jb, gf as jc, r_ as jd, ci as je, UA as jf, vA as jg, gT as jh, lf as ji, Q as k, Wh as l, Fh as m, Ta as n, Ro as o, Tr as p, kI as q, h as r, xR as s, je as t, Se as u, uT as v, Yf as w, Xe as x, z as y, Hf as z
};