var Hb = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wv = { exports: {} }, Ha = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Tp = Object.getOwnPropertySymbols, Kb = Object.prototype.hasOwnProperty, Yb = Object.prototype.propertyIsEnumerable;
function Gb(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function Qb() {
  try {
    if (!Object.assign)
      return !1;
    var e = new String("abc");
    if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5")
      return !1;
    for (var t = {}, n = 0; n < 10; n++)
      t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function(a) {
      return t[a];
    });
    if (r.join("") !== "0123456789")
      return !1;
    var i = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(a) {
      i[a] = a;
    }), Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var Hv = Qb() ? Object.assign : function(e, t) {
  for (var n, r = Gb(e), i, a = 1; a < arguments.length; a++) {
    n = Object(arguments[a]);
    for (var o in n)
      Kb.call(n, o) && (r[o] = n[o]);
    if (Tp) {
      i = Tp(n);
      for (var s = 0; s < i.length; s++)
        Yb.call(n, i[s]) && (r[i[s]] = n[i[s]]);
    }
  }
  return r;
}, Kv = { exports: {} }, ue = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cf = Hv, ri = 60103, Yv = 60106;
ue.Fragment = 60107;
ue.StrictMode = 60108;
ue.Profiler = 60114;
var Gv = 60109, Qv = 60110, Xv = 60112;
ue.Suspense = 60113;
var qv = 60115, Zv = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var Et = Symbol.for;
  ri = Et("react.element"), Yv = Et("react.portal"), ue.Fragment = Et("react.fragment"), ue.StrictMode = Et("react.strict_mode"), ue.Profiler = Et("react.profiler"), Gv = Et("react.provider"), Qv = Et("react.context"), Xv = Et("react.forward_ref"), ue.Suspense = Et("react.suspense"), qv = Et("react.memo"), Zv = Et("react.lazy");
}
var Ip = typeof Symbol == "function" && Symbol.iterator;
function Xb(e) {
  return e === null || typeof e != "object" ? null : (e = Ip && e[Ip] || e["@@iterator"], typeof e == "function" ? e : null);
}
function Ka(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Jv = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, eg = {};
function ii(e, t, n) {
  this.props = e, this.context = t, this.refs = eg, this.updater = n || Jv;
}
ii.prototype.isReactComponent = {};
ii.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error(Ka(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
ii.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tg() {
}
tg.prototype = ii.prototype;
function ff(e, t, n) {
  this.props = e, this.context = t, this.refs = eg, this.updater = n || Jv;
}
var df = ff.prototype = new tg();
df.constructor = ff;
cf(df, ii.prototype);
df.isPureReactComponent = !0;
var pf = { current: null }, ng = Object.prototype.hasOwnProperty, rg = { key: !0, ref: !0, __self: !0, __source: !0 };
function ig(e, t, n) {
  var r, i = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) ng.call(t, r) && !rg.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: ri, type: e, key: a, ref: o, props: i, _owner: pf.current };
}
function qb(e, t) {
  return { $$typeof: ri, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ri;
}
function Zb(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var jp = /\/+/g;
function Bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Zb("" + e.key) : t.toString(36);
}
function Vo(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (a) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ri:
        case Yv:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + Bl(o, 0) : r, Array.isArray(i) ? (n = "", e != null && (n = e.replace(jp, "$&/") + "/"), Vo(i, t, n, "", function(u) {
    return u;
  })) : i != null && (mf(i) && (i = qb(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(jp, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Array.isArray(e)) for (var s = 0; s < e.length; s++) {
    a = e[s];
    var l = r + Bl(a, s);
    o += Vo(a, t, n, l, i);
  }
  else if (l = Xb(e), typeof l == "function") for (e = l.call(e), s = 0; !(a = e.next()).done; ) a = a.value, l = r + Bl(a, s++), o += Vo(a, t, n, l, i);
  else if (a === "object") throw t = "" + e, Error(Ka(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
  return o;
}
function vo(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Vo(e, r, "", "", function(a) {
    return t.call(n, a, i++);
  }), r;
}
function Jb(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), e._status = 0, e._result = t, t.then(function(n) {
      e._status === 0 && (n = n.default, e._status = 1, e._result = n);
    }, function(n) {
      e._status === 0 && (e._status = 2, e._result = n);
    });
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var ag = { current: null };
function nn() {
  var e = ag.current;
  if (e === null) throw Error(Ka(321));
  return e;
}
var e1 = { ReactCurrentDispatcher: ag, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: pf, IsSomeRendererActing: { current: !1 }, assign: cf };
ue.Children = { map: vo, forEach: function(e, t, n) {
  vo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return vo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return vo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!mf(e)) throw Error(Ka(143));
  return e;
} };
ue.Component = ii;
ue.PureComponent = ff;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e1;
ue.cloneElement = function(e, t, n) {
  if (e == null) throw Error(Ka(267, e));
  var r = cf({}, e.props), i = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = pf.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (l in t) ng.call(t, l) && !rg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return {
    $$typeof: ri,
    type: e.type,
    key: i,
    ref: a,
    props: r,
    _owner: o
  };
};
ue.createContext = function(e, t) {
  return t === void 0 && (t = null), e = { $$typeof: Qv, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: Gv, _context: e }, e.Consumer = e;
};
ue.createElement = ig;
ue.createFactory = function(e) {
  var t = ig.bind(null, e);
  return t.type = e, t;
};
ue.createRef = function() {
  return { current: null };
};
ue.forwardRef = function(e) {
  return { $$typeof: Xv, render: e };
};
ue.isValidElement = mf;
ue.lazy = function(e) {
  return { $$typeof: Zv, _payload: { _status: -1, _result: e }, _init: Jb };
};
ue.memo = function(e, t) {
  return { $$typeof: qv, type: e, compare: t === void 0 ? null : t };
};
ue.useCallback = function(e, t) {
  return nn().useCallback(e, t);
};
ue.useContext = function(e, t) {
  return nn().useContext(e, t);
};
ue.useDebugValue = function() {
};
ue.useEffect = function(e, t) {
  return nn().useEffect(e, t);
};
ue.useImperativeHandle = function(e, t, n) {
  return nn().useImperativeHandle(e, t, n);
};
ue.useLayoutEffect = function(e, t) {
  return nn().useLayoutEffect(e, t);
};
ue.useMemo = function(e, t) {
  return nn().useMemo(e, t);
};
ue.useReducer = function(e, t, n) {
  return nn().useReducer(e, t, n);
};
ue.useRef = function(e) {
  return nn().useRef(e);
};
ue.useState = function(e) {
  return nn().useState(e);
};
ue.version = "17.0.2";
Kv.exports = ue;
var _ = Kv.exports;
const y = /* @__PURE__ */ Wa(_);
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t1 = _, og = 60103;
Ha.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var Np = Symbol.for;
  og = Np("react.element"), Ha.Fragment = Np("react.fragment");
}
var n1 = t1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r1 = Object.prototype.hasOwnProperty, i1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function sg(e, t, n) {
  var r, i = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) r1.call(t, r) && !i1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: og, type: e, key: a, ref: o, props: i, _owner: n1.current };
}
Ha.jsx = sg;
Ha.jsxs = sg;
Wv.exports = Ha;
var T = Wv.exports, lg = { exports: {} }, vt = {}, ug = { exports: {} }, cg = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  var t, n, r, i;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function() {
      return a.now();
    };
  } else {
    var o = Date, s = o.now();
    e.unstable_now = function() {
      return o.now() - s;
    };
  }
  if (typeof window > "u" || typeof MessageChannel != "function") {
    var l = null, u = null, c = function() {
      if (l !== null) try {
        var P = e.unstable_now();
        l(!0, P), l = null;
      } catch (I) {
        throw setTimeout(c, 0), I;
      }
    };
    t = function(P) {
      l !== null ? setTimeout(t, 0, P) : (l = P, setTimeout(c, 0));
    }, n = function(P, I) {
      u = setTimeout(P, I);
    }, r = function() {
      clearTimeout(u);
    }, e.unstable_shouldYield = function() {
      return !1;
    }, i = e.unstable_forceFrameRate = function() {
    };
  } else {
    var p = window.setTimeout, d = window.clearTimeout;
    if (typeof console < "u") {
      var g = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof g != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var w = !1, x = null, v = -1, m = 5, h = 0;
    e.unstable_shouldYield = function() {
      return e.unstable_now() >= h;
    }, i = function() {
    }, e.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : m = 0 < P ? Math.floor(1e3 / P) : 5;
    };
    var E = new MessageChannel(), b = E.port2;
    E.port1.onmessage = function() {
      if (x !== null) {
        var P = e.unstable_now();
        h = P + m;
        try {
          x(!0, P) ? b.postMessage(null) : (w = !1, x = null);
        } catch (I) {
          throw b.postMessage(null), I;
        }
      } else w = !1;
    }, t = function(P) {
      x = P, w || (w = !0, b.postMessage(null));
    }, n = function(P, I) {
      v = p(function() {
        P(e.unstable_now());
      }, I);
    }, r = function() {
      d(v), v = -1;
    };
  }
  function O(P, I) {
    var F = P.length;
    P.push(I);
    e: for (; ; ) {
      var H = F - 1 >>> 1, U = P[H];
      if (U !== void 0 && 0 < C(U, I)) P[H] = I, P[F] = U, F = H;
      else break e;
    }
  }
  function k(P) {
    return P = P[0], P === void 0 ? null : P;
  }
  function A(P) {
    var I = P[0];
    if (I !== void 0) {
      var F = P.pop();
      if (F !== I) {
        P[0] = F;
        e: for (var H = 0, U = P.length; H < U; ) {
          var te = 2 * (H + 1) - 1, ee = P[te], ne = te + 1, ie = P[ne];
          if (ee !== void 0 && 0 > C(ee, F)) ie !== void 0 && 0 > C(ie, ee) ? (P[H] = ie, P[ne] = F, H = ne) : (P[H] = ee, P[te] = F, H = te);
          else if (ie !== void 0 && 0 > C(ie, F)) P[H] = ie, P[ne] = F, H = ne;
          else break e;
        }
      }
      return I;
    }
    return null;
  }
  function C(P, I) {
    var F = P.sortIndex - I.sortIndex;
    return F !== 0 ? F : P.id - I.id;
  }
  var S = [], N = [], G = 1, B = null, j = 3, L = !1, D = !1, K = !1;
  function Z(P) {
    for (var I = k(N); I !== null; ) {
      if (I.callback === null) A(N);
      else if (I.startTime <= P) A(N), I.sortIndex = I.expirationTime, O(S, I);
      else break;
      I = k(N);
    }
  }
  function re(P) {
    if (K = !1, Z(P), !D) if (k(S) !== null) D = !0, t(J);
    else {
      var I = k(N);
      I !== null && n(re, I.startTime - P);
    }
  }
  function J(P, I) {
    D = !1, K && (K = !1, r()), L = !0;
    var F = j;
    try {
      for (Z(I), B = k(S); B !== null && (!(B.expirationTime > I) || P && !e.unstable_shouldYield()); ) {
        var H = B.callback;
        if (typeof H == "function") {
          B.callback = null, j = B.priorityLevel;
          var U = H(B.expirationTime <= I);
          I = e.unstable_now(), typeof U == "function" ? B.callback = U : B === k(S) && A(S), Z(I);
        } else A(S);
        B = k(S);
      }
      if (B !== null) var te = !0;
      else {
        var ee = k(N);
        ee !== null && n(re, ee.startTime - I), te = !1;
      }
      return te;
    } finally {
      B = null, j = F, L = !1;
    }
  }
  var se = i;
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    D || L || (D = !0, t(J));
  }, e.unstable_getCurrentPriorityLevel = function() {
    return j;
  }, e.unstable_getFirstCallbackNode = function() {
    return k(S);
  }, e.unstable_next = function(P) {
    switch (j) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = j;
    }
    var F = j;
    j = I;
    try {
      return P();
    } finally {
      j = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = se, e.unstable_runWithPriority = function(P, I) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var F = j;
    j = P;
    try {
      return I();
    } finally {
      j = F;
    }
  }, e.unstable_scheduleCallback = function(P, I, F) {
    var H = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? H + F : H) : F = H, P) {
      case 1:
        var U = -1;
        break;
      case 2:
        U = 250;
        break;
      case 5:
        U = 1073741823;
        break;
      case 4:
        U = 1e4;
        break;
      default:
        U = 5e3;
    }
    return U = F + U, P = { id: G++, callback: I, priorityLevel: P, startTime: F, expirationTime: U, sortIndex: -1 }, F > H ? (P.sortIndex = F, O(N, P), k(S) === null && P === k(N) && (K ? r() : K = !0, n(re, F - H))) : (P.sortIndex = U, O(S, P), D || L || (D = !0, t(J))), P;
  }, e.unstable_wrapCallback = function(P) {
    var I = j;
    return function() {
      var F = j;
      j = I;
      try {
        return P.apply(this, arguments);
      } finally {
        j = F;
      }
    };
  };
})(cg);
ug.exports = cg;
var a1 = ug.exports;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xs = _, be = Hv, Te = a1;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!Xs) throw Error(R(227));
var fg = /* @__PURE__ */ new Set(), ea = {};
function ur(e, t) {
  Wr(e, t), Wr(e + "Capture", t);
}
function Wr(e, t) {
  for (ea[e] = t, e = 0; e < t.length; e++) fg.add(t[e]);
}
var Qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), o1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Rp = Object.prototype.hasOwnProperty, Fp = {}, Dp = {};
function s1(e) {
  return Rp.call(Dp, e) ? !0 : Rp.call(Fp, e) ? !1 : o1.test(e) ? Dp[e] = !0 : (Fp[e] = !0, !1);
}
function l1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function u1(e, t, n, r) {
  if (t === null || typeof t > "u" || l1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function He(e, t, n, r, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Le[e] = new He(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Le[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Le[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Le[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Le[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Le[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Le[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Le[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Le[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hf = /[\-:]([a-z])/g;
function vf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    hf,
    vf
  );
  Le[t] = new He(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(hf, vf);
  Le[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(hf, vf);
  Le[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Le[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new He("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Le[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gf(e, t, n, r) {
  var i = Le.hasOwnProperty(t) ? Le[t] : null, a = i !== null ? i.type === 0 : r ? !1 : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
  a || (u1(t, n, i, r) && (n = null), r || i === null ? s1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var cr = Xs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ti = 60103, Hn = 60106, dn = 60107, yf = 60108, Mi = 60114, bf = 60109, wf = 60110, qs = 60112, $i = 60113, as = 60120, Zs = 60115, Ef = 60116, xf = 60121, Of = 60128, dg = 60129, Cf = 60130, Ou = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var Ae = Symbol.for;
  Ti = Ae("react.element"), Hn = Ae("react.portal"), dn = Ae("react.fragment"), yf = Ae("react.strict_mode"), Mi = Ae("react.profiler"), bf = Ae("react.provider"), wf = Ae("react.context"), qs = Ae("react.forward_ref"), $i = Ae("react.suspense"), as = Ae("react.suspense_list"), Zs = Ae("react.memo"), Ef = Ae("react.lazy"), xf = Ae("react.block"), Ae("react.scope"), Of = Ae("react.opaque.id"), dg = Ae("react.debug_trace_mode"), Cf = Ae("react.offscreen"), Ou = Ae("react.legacy_hidden");
}
var Lp = typeof Symbol == "function" && Symbol.iterator;
function gi(e) {
  return e === null || typeof e != "object" ? null : (e = Lp && e[Lp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Vl;
function Ii(e) {
  if (Vl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Vl = t && t[1] || "";
  }
  return `
` + Vl + e;
}
var zl = !1;
function go(e, t) {
  if (!e || zl) return "";
  zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (l) {
        var r = l;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (l) {
        r = l;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l) {
        r = l;
      }
      e();
    }
  } catch (l) {
    if (l && r && typeof l.stack == "string") {
      for (var i = l.stack.split(`
`), a = r.stack.split(`
`), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s]; ) s--;
      for (; 1 <= o && 0 <= s; o--, s--) if (i[o] !== a[s]) {
        if (o !== 1 || s !== 1)
          do
            if (o--, s--, 0 > s || i[o] !== a[s]) return `
` + i[o].replace(" at new ", " at ");
          while (1 <= o && 0 <= s);
        break;
      }
    }
  } finally {
    zl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ii(e) : "";
}
function c1(e) {
  switch (e.tag) {
    case 5:
      return Ii(e.type);
    case 16:
      return Ii("Lazy");
    case 13:
      return Ii("Suspense");
    case 19:
      return Ii("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = go(e.type, !1), e;
    case 11:
      return e = go(e.type.render, !1), e;
    case 22:
      return e = go(e.type._render, !1), e;
    case 1:
      return e = go(e.type, !0), e;
    default:
      return "";
  }
}
function Nr(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case dn:
      return "Fragment";
    case Hn:
      return "Portal";
    case Mi:
      return "Profiler";
    case yf:
      return "StrictMode";
    case $i:
      return "Suspense";
    case as:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case wf:
      return (e.displayName || "Context") + ".Consumer";
    case bf:
      return (e._context.displayName || "Context") + ".Provider";
    case qs:
      var t = e.render;
      return t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case Zs:
      return Nr(e.type);
    case xf:
      return Nr(e._render);
    case Ef:
      t = e._payload, e = e._init;
      try {
        return Nr(e(t));
      } catch {
      }
  }
  return null;
}
function Pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function pg(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function f1(e) {
  var t = pg(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(o) {
      r = "" + o, a.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function yo(e) {
  e._valueTracker || (e._valueTracker = f1(e));
}
function mg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = pg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function os(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Cu(e, t) {
  var n = t.checked;
  return be({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Mp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Pn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function hg(e, t) {
  t = t.checked, t != null && gf(e, "checked", t, !1);
}
function ku(e, t) {
  hg(e, t);
  var n = Pn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Su(e, t.type, n) : t.hasOwnProperty("defaultValue") && Su(e, t.type, Pn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function $p(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Su(e, t, n) {
  (t !== "number" || os(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function d1(e) {
  var t = "";
  return Xs.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Pu(e, t) {
  return e = be({ children: void 0 }, t), (t = d1(t.children)) && (e.children = t), e;
}
function Rr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function _u(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return be({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Bp(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(R(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Pn(n) };
}
function vg(e, t) {
  var n = Pn(t.value), r = Pn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Vp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var Au = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function gg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Tu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? gg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var bo, yg = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== Au.svg || "innerHTML" in e) e.innerHTML = t;
  else {
    for (bo = bo || document.createElement("div"), bo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = bo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ta(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bi = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, p1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bi).forEach(function(e) {
  p1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Bi[t] = Bi[e];
  });
});
function bg(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bi.hasOwnProperty(e) && Bi[e] ? ("" + t).trim() : t + "px";
}
function wg(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = bg(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var m1 = be({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Iu(e, t) {
  if (t) {
    if (m1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function ju(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
function kf(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Nu = null, Fr = null, Dr = null;
function zp(e) {
  if (e = Ga(e)) {
    if (typeof Nu != "function") throw Error(R(280));
    var t = e.stateNode;
    t && (t = il(t), Nu(e.stateNode, e.type, t));
  }
}
function Eg(e) {
  Fr ? Dr ? Dr.push(e) : Dr = [e] : Fr = e;
}
function xg() {
  if (Fr) {
    var e = Fr, t = Dr;
    if (Dr = Fr = null, zp(e), t) for (e = 0; e < t.length; e++) zp(t[e]);
  }
}
function Sf(e, t) {
  return e(t);
}
function Og(e, t, n, r, i) {
  return e(t, n, r, i);
}
function Pf() {
}
var Cg = Sf, Kn = !1, Ul = !1;
function _f() {
  (Fr !== null || Dr !== null) && (Pf(), xg());
}
function h1(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return Cg(e, t, n);
  } finally {
    Ul = !1, _f();
  }
}
function na(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = il(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Ru = !1;
if (Qt) try {
  var yi = {};
  Object.defineProperty(yi, "passive", { get: function() {
    Ru = !0;
  } }), window.addEventListener("test", yi, yi), window.removeEventListener("test", yi, yi);
} catch {
  Ru = !1;
}
function v1(e, t, n, r, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Vi = !1, ss = null, ls = !1, Fu = null, g1 = { onError: function(e) {
  Vi = !0, ss = e;
} };
function y1(e, t, n, r, i, a, o, s, l) {
  Vi = !1, ss = null, v1.apply(g1, arguments);
}
function b1(e, t, n, r, i, a, o, s, l) {
  if (y1.apply(this, arguments), Vi) {
    if (Vi) {
      var u = ss;
      Vi = !1, ss = null;
    } else throw Error(R(198));
    ls || (ls = !0, Fu = u);
  }
}
function fr(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 1026 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function kg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Up(e) {
  if (fr(e) !== e) throw Error(R(188));
}
function w1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = fr(e), t === null) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return Up(i), e;
        if (a === r) return Up(i), t;
        a = a.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) n = i, r = a;
    else {
      for (var o = !1, s = i.child; s; ) {
        if (s === n) {
          o = !0, n = i, r = a;
          break;
        }
        if (s === r) {
          o = !0, r = i, n = a;
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = a.child; s; ) {
          if (s === n) {
            o = !0, n = a, r = i;
            break;
          }
          if (s === r) {
            o = !0, r = a, n = i;
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Sg(e) {
  if (e = w1(e), !e) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) t.child.return = t, t = t.child;
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return null;
}
function Wp(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var Pg, Af, _g, Ag, Du = !1, Tt = [], yn = null, bn = null, wn = null, ra = /* @__PURE__ */ new Map(), ia = /* @__PURE__ */ new Map(), bi = [], Hp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Lu(e, t, n, r, i) {
  return { blockedOn: e, domEventName: t, eventSystemFlags: n | 16, nativeEvent: i, targetContainers: [r] };
}
function Kp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      yn = null;
      break;
    case "dragenter":
    case "dragleave":
      bn = null;
      break;
    case "mouseover":
    case "mouseout":
      wn = null;
      break;
    case "pointerover":
    case "pointerout":
      ra.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ia.delete(t.pointerId);
  }
}
function wi(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a ? (e = Lu(t, n, r, i, a), t !== null && (t = Ga(t), t !== null && Af(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function E1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return yn = wi(yn, e, t, n, r, i), !0;
    case "dragenter":
      return bn = wi(bn, e, t, n, r, i), !0;
    case "mouseover":
      return wn = wi(wn, e, t, n, r, i), !0;
    case "pointerover":
      var a = i.pointerId;
      return ra.set(a, wi(ra.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return a = i.pointerId, ia.set(a, wi(ia.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function x1(e) {
  var t = Yn(e.target);
  if (t !== null) {
    var n = fr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = kg(n), t !== null) {
          e.blockedOn = t, Ag(e.lanePriority, function() {
            Te.unstable_runWithPriority(e.priority, function() {
              _g(n);
            });
          });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Nf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null) return t = Ga(n), t !== null && Af(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Yp(e, t, n) {
  zo(e) && n.delete(t);
}
function O1() {
  for (Du = !1; 0 < Tt.length; ) {
    var e = Tt[0];
    if (e.blockedOn !== null) {
      e = Ga(e.blockedOn), e !== null && Pg(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Nf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && Tt.shift();
  }
  yn !== null && zo(yn) && (yn = null), bn !== null && zo(bn) && (bn = null), wn !== null && zo(wn) && (wn = null), ra.forEach(Yp), ia.forEach(Yp);
}
function Ei(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Du || (Du = !0, Te.unstable_scheduleCallback(Te.unstable_NormalPriority, O1)));
}
function Tg(e) {
  function t(i) {
    return Ei(i, e);
  }
  if (0 < Tt.length) {
    Ei(Tt[0], e);
    for (var n = 1; n < Tt.length; n++) {
      var r = Tt[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (yn !== null && Ei(yn, e), bn !== null && Ei(bn, e), wn !== null && Ei(wn, e), ra.forEach(t), ia.forEach(t), n = 0; n < bi.length; n++) r = bi[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bi.length && (n = bi[0], n.blockedOn === null); ) x1(n), n.blockedOn === null && bi.shift();
}
function wo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Er = { animationend: wo("Animation", "AnimationEnd"), animationiteration: wo("Animation", "AnimationIteration"), animationstart: wo("Animation", "AnimationStart"), transitionend: wo("Transition", "TransitionEnd") }, Wl = {}, Ig = {};
Qt && (Ig = document.createElement("div").style, "AnimationEvent" in window || (delete Er.animationend.animation, delete Er.animationiteration.animation, delete Er.animationstart.animation), "TransitionEvent" in window || delete Er.transitionend.transition);
function Js(e) {
  if (Wl[e]) return Wl[e];
  if (!Er[e]) return e;
  var t = Er[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ig) return Wl[e] = t[n];
  return e;
}
var jg = Js("animationend"), Ng = Js("animationiteration"), Rg = Js("animationstart"), Fg = Js("transitionend"), Dg = /* @__PURE__ */ new Map(), Tf = /* @__PURE__ */ new Map(), C1 = [
  "abort",
  "abort",
  jg,
  "animationEnd",
  Ng,
  "animationIteration",
  Rg,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Fg,
  "transitionEnd",
  "waiting",
  "waiting"
];
function If(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n], i = e[n + 1];
    i = "on" + (i[0].toUpperCase() + i.slice(1)), Tf.set(r, t), Dg.set(r, i), ur(i, [r]);
  }
}
var k1 = Te.unstable_now;
k1();
var me = 8;
function br(e) {
  if (1 & e) return me = 15, 1;
  if (2 & e) return me = 14, 2;
  if (4 & e) return me = 13, 4;
  var t = 24 & e;
  return t !== 0 ? (me = 12, t) : e & 32 ? (me = 11, 32) : (t = 192 & e, t !== 0 ? (me = 10, t) : e & 256 ? (me = 9, 256) : (t = 3584 & e, t !== 0 ? (me = 8, t) : e & 4096 ? (me = 7, 4096) : (t = 4186112 & e, t !== 0 ? (me = 6, t) : (t = 62914560 & e, t !== 0 ? (me = 5, t) : e & 67108864 ? (me = 4, 67108864) : e & 134217728 ? (me = 3, 134217728) : (t = 805306368 & e, t !== 0 ? (me = 2, t) : 1073741824 & e ? (me = 1, 1073741824) : (me = 8, e))))));
}
function S1(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function P1(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(R(358, e));
  }
}
function aa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return me = 0;
  var r = 0, i = 0, a = e.expiredLanes, o = e.suspendedLanes, s = e.pingedLanes;
  if (a !== 0) r = a, i = me = 15;
  else if (a = n & 134217727, a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = br(l), i = me) : (s &= a, s !== 0 && (r = br(s), i = me));
  } else a = n & ~o, a !== 0 ? (r = br(a), i = me) : s !== 0 && (r = br(s), i = me);
  if (r === 0) return 0;
  if (r = 31 - _n(r), r = n & ((0 > r ? 0 : 1 << r) << 1) - 1, t !== 0 && t !== r && !(t & o)) {
    if (br(t), i <= me) return t;
    me = i;
  }
  if (t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - _n(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Lg(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function us(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return e = wr(24 & ~t), e === 0 ? us(10, t) : e;
    case 10:
      return e = wr(192 & ~t), e === 0 ? us(8, t) : e;
    case 8:
      return e = wr(3584 & ~t), e === 0 && (e = wr(4186112 & ~t), e === 0 && (e = 512)), e;
    case 2:
      return t = wr(805306368 & ~t), t === 0 && (t = 268435456), t;
  }
  throw Error(R(358, e));
}
function wr(e) {
  return e & -e;
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function el(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, t = 31 - _n(t), e[t] = n;
}
var _n = Math.clz32 ? Math.clz32 : T1, _1 = Math.log, A1 = Math.LN2;
function T1(e) {
  return e === 0 ? 32 : 31 - (_1(e) / A1 | 0) | 0;
}
var I1 = Te.unstable_UserBlockingPriority, j1 = Te.unstable_runWithPriority, Uo = !0;
function N1(e, t, n, r) {
  Kn || Pf();
  var i = jf, a = Kn;
  Kn = !0;
  try {
    Og(i, e, t, n, r);
  } finally {
    (Kn = a) || _f();
  }
}
function R1(e, t, n, r) {
  j1(I1, jf.bind(null, e, t, n, r));
}
function jf(e, t, n, r) {
  if (Uo) {
    var i;
    if ((i = (t & 4) === 0) && 0 < Tt.length && -1 < Hp.indexOf(e)) e = Lu(null, e, t, n, r), Tt.push(e);
    else {
      var a = Nf(e, t, n, r);
      if (a === null) i && Kp(e, r);
      else {
        if (i) {
          if (-1 < Hp.indexOf(e)) {
            e = Lu(a, e, t, n, r), Tt.push(e);
            return;
          }
          if (E1(a, e, t, n, r)) return;
          Kp(e, r);
        }
        Qg(e, t, r, null, n);
      }
    }
  }
}
function Nf(e, t, n, r) {
  var i = kf(r);
  if (i = Yn(i), i !== null) {
    var a = fr(i);
    if (a === null) i = null;
    else {
      var o = a.tag;
      if (o === 13) {
        if (i = kg(a), i !== null) return i;
        i = null;
      } else if (o === 3) {
        if (a.stateNode.hydrate) return a.tag === 3 ? a.stateNode.containerInfo : null;
        i = null;
      } else a !== i && (i = null);
    }
  }
  return Qg(e, t, r, i, n), null;
}
var pn = null, Rf = null, Wo = null;
function Mg() {
  if (Wo) return Wo;
  var e, t = Rf, n = t.length, r, i = "value" in pn ? pn.value : pn.textContent, a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++) ;
  return Wo = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Ho(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Eo() {
  return !0;
}
function Gp() {
  return !1;
}
function at(e) {
  function t(n, r, i, a, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(a) : a[s]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Eo : Gp, this.isPropagationStopped = Gp, this;
  }
  return be(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Eo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Eo);
  }, persist: function() {
  }, isPersistent: Eo }), t;
}
var ai = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ff = at(ai), Ya = be({}, ai, { view: 0, detail: 0 }), F1 = at(Ya), Kl, Yl, xi, tl = be({}, Ya, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Df, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xi && (xi && e.type === "mousemove" ? (Kl = e.screenX - xi.screenX, Yl = e.screenY - xi.screenY) : Yl = Kl = 0, xi = e), Kl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Yl;
} }), Qp = at(tl), D1 = be({}, tl, { dataTransfer: 0 }), L1 = at(D1), M1 = be({}, Ya, { relatedTarget: 0 }), Gl = at(M1), $1 = be({}, ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), B1 = at($1), V1 = be({}, ai, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), z1 = at(V1), U1 = be({}, ai, { data: 0 }), Xp = at(U1), W1 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, H1 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, K1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Y1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = K1[e]) ? !!t[e] : !1;
}
function Df() {
  return Y1;
}
var G1 = be({}, Ya, { key: function(e) {
  if (e.key) {
    var t = W1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ho(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? H1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Df, charCode: function(e) {
  return e.type === "keypress" ? Ho(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ho(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Q1 = at(G1), X1 = be({}, tl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), qp = at(X1), q1 = be({}, Ya, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Df }), Z1 = at(q1), J1 = be({}, ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ew = at(J1), tw = be({}, tl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), nw = at(tw), rw = [9, 13, 27, 32], Lf = Qt && "CompositionEvent" in window, zi = null;
Qt && "documentMode" in document && (zi = document.documentMode);
var iw = Qt && "TextEvent" in window && !zi, $g = Qt && (!Lf || zi && 8 < zi && 11 >= zi), Zp = " ", Jp = !1;
function Bg(e, t) {
  switch (e) {
    case "keyup":
      return rw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var xr = !1;
function aw(e, t) {
  switch (e) {
    case "compositionend":
      return Vg(t);
    case "keypress":
      return t.which !== 32 ? null : (Jp = !0, Zp);
    case "textInput":
      return e = t.data, e === Zp && Jp ? null : e;
    default:
      return null;
  }
}
function ow(e, t) {
  if (xr) return e === "compositionend" || !Lf && Bg(e, t) ? (e = Mg(), Wo = Rf = pn = null, xr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return $g && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var sw = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function em(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!sw[e.type] : t === "textarea";
}
function zg(e, t, n, r) {
  Eg(r), t = cs(t, "onChange"), 0 < t.length && (n = new Ff("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ui = null, oa = null;
function lw(e) {
  Kg(e, 0);
}
function nl(e) {
  var t = Cr(e);
  if (mg(t)) return e;
}
function uw(e, t) {
  if (e === "change") return t;
}
var Ug = !1;
if (Qt) {
  var Ql;
  if (Qt) {
    var Xl = "oninput" in document;
    if (!Xl) {
      var tm = document.createElement("div");
      tm.setAttribute("oninput", "return;"), Xl = typeof tm.oninput == "function";
    }
    Ql = Xl;
  } else Ql = !1;
  Ug = Ql && (!document.documentMode || 9 < document.documentMode);
}
function nm() {
  Ui && (Ui.detachEvent("onpropertychange", Wg), oa = Ui = null);
}
function Wg(e) {
  if (e.propertyName === "value" && nl(oa)) {
    var t = [];
    if (zg(t, oa, e, kf(e)), e = lw, Kn) e(t);
    else {
      Kn = !0;
      try {
        Sf(e, t);
      } finally {
        Kn = !1, _f();
      }
    }
  }
}
function cw(e, t, n) {
  e === "focusin" ? (nm(), Ui = t, oa = n, Ui.attachEvent("onpropertychange", Wg)) : e === "focusout" && nm();
}
function fw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return nl(oa);
}
function dw(e, t) {
  if (e === "click") return nl(t);
}
function pw(e, t) {
  if (e === "input" || e === "change") return nl(t);
}
function mw(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ut = typeof Object.is == "function" ? Object.is : mw, hw = Object.prototype.hasOwnProperty;
function sa(e, t) {
  if (ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) if (!hw.call(t, n[r]) || !ut(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function rm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function im(e, t) {
  var n = rm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = rm(n);
  }
}
function Hg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function am() {
  for (var e = window, t = os(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = os(e.document);
  }
  return t;
}
function Mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
var vw = Qt && "documentMode" in document && 11 >= document.documentMode, Or = null, $u = null, Wi = null, Bu = !1;
function om(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bu || Or == null || Or !== os(r) || (r = Or, "selectionStart" in r && Mu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wi && sa(Wi, r) || (Wi = r, r = cs($u, "onSelect"), 0 < r.length && (t = new Ff("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Or)));
}
If(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0
);
If("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
If(C1, 2);
for (var sm = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), ql = 0; ql < sm.length; ql++) Tf.set(sm[ql], 0);
Wr("onMouseEnter", ["mouseout", "mouseover"]);
Wr("onMouseLeave", ["mouseout", "mouseover"]);
Wr("onPointerEnter", ["pointerout", "pointerover"]);
Wr("onPointerLeave", ["pointerout", "pointerover"]);
ur("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ur("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ur("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ur("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ur("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gw = new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));
function lm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, b1(r, t, void 0, e), e.currentTarget = null;
}
function Kg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], l = s.instance, u = s.currentTarget;
        if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
        lm(i, s, u), a = l;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], l = s.instance, u = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
        lm(i, s, u), a = l;
      }
    }
  }
  if (ls) throw e = Fu, ls = !1, Fu = null, e;
}
function he(e, t) {
  var n = qg(t), r = e + "__bubble";
  n.has(r) || (Gg(t, e, 2, !1), n.add(r));
}
var um = "_reactListening" + Math.random().toString(36).slice(2);
function Yg(e) {
  e[um] || (e[um] = !0, fg.forEach(function(t) {
    gw.has(t) || cm(t, !1, e, null), cm(t, !0, e, null);
  }));
}
function cm(e, t, n, r) {
  var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, a = n;
  e === "selectionchange" && n.nodeType !== 9 && (a = n.ownerDocument);
  var o = qg(a), s = e + "__" + (t ? "capture" : "bubble");
  o.has(s) || (t && (i |= 4), Gg(a, e, i, t), o.add(s));
}
function Gg(e, t, n, r) {
  var i = Tf.get(t);
  switch (i === void 0 ? 2 : i) {
    case 0:
      i = N1;
      break;
    case 1:
      i = R1;
      break;
    default:
      i = jf;
  }
  n = i.bind(null, t, n, e), i = void 0, !Ru || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Qg(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var s = r.stateNode.containerInfo;
      if (s === i || s.nodeType === 8 && s.parentNode === i) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var l = o.tag;
        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        o = o.return;
      }
      for (; s !== null; ) {
        if (o = Yn(s), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          r = a = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  h1(function() {
    var u = a, c = kf(n), p = [];
    e: {
      var d = Dg.get(e);
      if (d !== void 0) {
        var g = Ff, w = e;
        switch (e) {
          case "keypress":
            if (Ho(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Q1;
            break;
          case "focusin":
            w = "focus", g = Gl;
            break;
          case "focusout":
            w = "blur", g = Gl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Gl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Qp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = L1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Z1;
            break;
          case jg:
          case Ng:
          case Rg:
            g = B1;
            break;
          case Fg:
            g = ew;
            break;
          case "scroll":
            g = F1;
            break;
          case "wheel":
            g = nw;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = z1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = qp;
        }
        var x = (t & 4) !== 0, v = !x && e === "scroll", m = x ? d !== null ? d + "Capture" : null : d;
        x = [];
        for (var h = u, E; h !== null; ) {
          E = h;
          var b = E.stateNode;
          if (E.tag === 5 && b !== null && (E = b, m !== null && (b = na(h, m), b != null && x.push(la(h, b, E)))), v) break;
          h = h.return;
        }
        0 < x.length && (d = new g(d, w, null, n, c), p.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && !(t & 16) && (w = n.relatedTarget || n.fromElement) && (Yn(w) || w[oi])) break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = u, w = w ? Yn(w) : null, w !== null && (v = fr(w), w !== v || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = u), g !== w)) {
          if (x = Qp, b = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (x = qp, b = "onPointerLeave", m = "onPointerEnter", h = "pointer"), v = g == null ? d : Cr(g), E = w == null ? d : Cr(w), d = new x(b, h + "leave", g, n, c), d.target = v, d.relatedTarget = E, b = null, Yn(c) === u && (x = new x(m, h + "enter", w, n, c), x.target = E, x.relatedTarget = v, b = x), v = b, g && w) t: {
            for (x = g, m = w, h = 0, E = x; E; E = gr(E)) h++;
            for (E = 0, b = m; b; b = gr(b)) E++;
            for (; 0 < h - E; ) x = gr(x), h--;
            for (; 0 < E - h; ) m = gr(m), E--;
            for (; h--; ) {
              if (x === m || m !== null && x === m.alternate) break t;
              x = gr(x), m = gr(m);
            }
            x = null;
          }
          else x = null;
          g !== null && fm(p, d, g, x, !1), w !== null && v !== null && fm(p, v, w, x, !0);
        }
      }
      e: {
        if (d = u ? Cr(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var O = uw;
        else if (em(d)) if (Ug) O = pw;
        else {
          O = fw;
          var k = cw;
        }
        else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (O = dw);
        if (O && (O = O(e, u))) {
          zg(p, O, n, c);
          break e;
        }
        k && k(e, d, u), e === "focusout" && (k = d._wrapperState) && k.controlled && d.type === "number" && Su(d, "number", d.value);
      }
      switch (k = u ? Cr(u) : window, e) {
        case "focusin":
          (em(k) || k.contentEditable === "true") && (Or = k, $u = u, Wi = null);
          break;
        case "focusout":
          Wi = $u = Or = null;
          break;
        case "mousedown":
          Bu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Bu = !1, om(p, n, c);
          break;
        case "selectionchange":
          if (vw) break;
        case "keydown":
        case "keyup":
          om(p, n, c);
      }
      var A;
      if (Lf) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e;
        }
        C = void 0;
      }
      else xr ? Bg(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && ($g && n.locale !== "ko" && (xr || C !== "onCompositionStart" ? C === "onCompositionEnd" && xr && (A = Mg()) : (pn = c, Rf = "value" in pn ? pn.value : pn.textContent, xr = !0)), k = cs(u, C), 0 < k.length && (C = new Xp(C, e, null, n, c), p.push({ event: C, listeners: k }), A ? C.data = A : (A = Vg(n), A !== null && (C.data = A)))), (A = iw ? aw(e, n) : ow(e, n)) && (u = cs(u, "onBeforeInput"), 0 < u.length && (c = new Xp(
        "onBeforeInput",
        "beforeinput",
        null,
        n,
        c
      ), p.push({ event: c, listeners: u }), c.data = A));
    }
    Kg(p, t);
  });
}
function la(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = na(e, n), a != null && r.unshift(la(e, a, i)), a = na(e, t), a != null && r.push(la(e, a, i))), e = e.return;
  }
  return r;
}
function gr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fm(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 && u !== null && (s = u, i ? (l = na(n, a), l != null && o.unshift(la(n, l, s))) : i || (l = na(n, a), l != null && o.push(la(n, l, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
function fs() {
}
var Zl = null, Jl = null;
function Xg(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function Vu(e, t) {
  return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var dm = typeof setTimeout == "function" ? setTimeout : void 0, yw = typeof clearTimeout == "function" ? clearTimeout : void 0;
function Mf(e) {
  e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
}
function Lr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function pm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var eu = 0;
function bw(e) {
  return { $$typeof: Of, toString: e, valueOf: e };
}
var rl = Math.random().toString(36).slice(2), mn = "__reactFiber$" + rl, ds = "__reactProps$" + rl, oi = "__reactContainer$" + rl, mm = "__reactEvents$" + rl;
function Yn(e) {
  var t = e[mn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[oi] || n[mn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = pm(e); e !== null; ) {
        if (n = e[mn]) return n;
        e = pm(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ga(e) {
  return e = e[mn] || e[oi], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Cr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function il(e) {
  return e[ds] || null;
}
function qg(e) {
  var t = e[mm];
  return t === void 0 && (t = e[mm] = /* @__PURE__ */ new Set()), t;
}
var zu = [], kr = -1;
function Mn(e) {
  return { current: e };
}
function ge(e) {
  0 > kr || (e.current = zu[kr], zu[kr] = null, kr--);
}
function Oe(e, t) {
  kr++, zu[kr] = e.current, e.current = t;
}
var An = {}, Ue = Mn(An), Xe = Mn(!1), nr = An;
function Hr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return An;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in n) i[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function qe(e) {
  return e = e.childContextTypes, e != null;
}
function ps() {
  ge(Xe), ge(Ue);
}
function hm(e, t, n) {
  if (Ue.current !== An) throw Error(R(168));
  Oe(Ue, t), Oe(Xe, n);
}
function Zg(e, t, n) {
  var r = e.stateNode;
  if (e = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(R(108, Nr(t) || "Unknown", i));
  return be({}, n, r);
}
function Ko(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || An, nr = Ue.current, Oe(Ue, e), Oe(Xe, Xe.current), !0;
}
function vm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n ? (e = Zg(e, t, nr), r.__reactInternalMemoizedMergedChildContext = e, ge(Xe), ge(Ue), Oe(Ue, e)) : ge(Xe), Oe(Xe, n);
}
var $f = null, Jn = null, ww = Te.unstable_runWithPriority, Bf = Te.unstable_scheduleCallback, Uu = Te.unstable_cancelCallback, Ew = Te.unstable_shouldYield, gm = Te.unstable_requestPaint, Wu = Te.unstable_now, xw = Te.unstable_getCurrentPriorityLevel, al = Te.unstable_ImmediatePriority, Jg = Te.unstable_UserBlockingPriority, ey = Te.unstable_NormalPriority, ty = Te.unstable_LowPriority, ny = Te.unstable_IdlePriority, tu = {}, Ow = gm !== void 0 ? gm : function() {
}, Ut = null, Yo = null, nu = !1, ym = Wu(), $e = 1e4 > ym ? Wu : function() {
  return Wu() - ym;
};
function Kr() {
  switch (xw()) {
    case al:
      return 99;
    case Jg:
      return 98;
    case ey:
      return 97;
    case ty:
      return 96;
    case ny:
      return 95;
    default:
      throw Error(R(332));
  }
}
function ry(e) {
  switch (e) {
    case 99:
      return al;
    case 98:
      return Jg;
    case 97:
      return ey;
    case 96:
      return ty;
    case 95:
      return ny;
    default:
      throw Error(R(332));
  }
}
function rr(e, t) {
  return e = ry(e), ww(e, t);
}
function ua(e, t, n) {
  return e = ry(e), Bf(e, t, n);
}
function $t() {
  if (Yo !== null) {
    var e = Yo;
    Yo = null, Uu(e);
  }
  iy();
}
function iy() {
  if (!nu && Ut !== null) {
    nu = !0;
    var e = 0;
    try {
      var t = Ut;
      rr(99, function() {
        for (; e < t.length; e++) {
          var n = t[e];
          do
            n = n(!0);
          while (n !== null);
        }
      }), Ut = null;
    } catch (n) {
      throw Ut !== null && (Ut = Ut.slice(e + 1)), Bf(al, $t), n;
    } finally {
      nu = !1;
    }
  }
}
var Cw = cr.ReactCurrentBatchConfig;
function xt(e, t) {
  if (e && e.defaultProps) {
    t = be({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ms = Mn(null), hs = null, Sr = null, vs = null;
function Vf() {
  vs = Sr = hs = null;
}
function zf(e) {
  var t = ms.current;
  ge(ms), e.type._context._currentValue = t;
}
function ay(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else e.childLanes |= t, n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function Mr(e, t) {
  hs = e, vs = Sr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (kt = !0), e.firstContext = null);
}
function dt(e, t) {
  if (vs !== e && t !== !1 && t !== 0)
    if ((typeof t != "number" || t === 1073741823) && (vs = e, t = 1073741823), t = { context: e, observedBits: t, next: null }, Sr === null) {
      if (hs === null) throw Error(R(308));
      Sr = t, hs.dependencies = { lanes: 0, firstContext: t, responders: null };
    } else Sr = Sr.next = t;
  return e._currentValue;
}
var cn = !1;
function Uf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function oy(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function En(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function xn(e, t) {
  if (e = e.updateQueue, e !== null) {
    e = e.shared;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
}
function bm(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? i = a = o : a = a.next = o, n = n.next;
      } while (n !== null);
      a === null ? i = a = t : a = a.next = t;
    } else i = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ca(e, t, n, r) {
  var i = e.updateQueue;
  cn = !1;
  var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, o === null ? a = u : o.next = u, o = l;
    var c = e.alternate;
    if (c !== null) {
      c = c.updateQueue;
      var p = c.lastBaseUpdate;
      p !== o && (p === null ? c.firstBaseUpdate = u : p.next = u, c.lastBaseUpdate = l);
    }
  }
  if (a !== null) {
    p = i.baseState, o = 0, c = u = l = null;
    do {
      s = a.lane;
      var d = a.eventTime;
      if ((r & s) === s) {
        c !== null && (c = c.next = {
          eventTime: d,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var g = e, w = a;
          switch (s = t, d = n, w.tag) {
            case 1:
              if (g = w.payload, typeof g == "function") {
                p = g.call(d, p, s);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = g.flags & -4097 | 64;
            case 0:
              if (g = w.payload, s = typeof g == "function" ? g.call(d, p, s) : g, s == null) break e;
              p = be({}, p, s);
              break e;
            case 2:
              cn = !0;
          }
        }
        a.callback !== null && (e.flags |= 32, s = i.effects, s === null ? i.effects = [a] : s.push(a));
      } else d = { eventTime: d, lane: s, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = d, l = p) : c = c.next = d, o |= s;
      if (a = a.next, a === null) {
        if (s = i.shared.pending, s === null) break;
        a = s.next, s.next = null, i.lastBaseUpdate = s, i.shared.pending = null;
      }
    } while (!0);
    c === null && (l = p), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, Xa |= o, e.lanes = o, e.memoizedState = p;
  }
}
function wm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(R(191, i));
      i.call(r);
    }
  }
}
var sy = new Xs.Component().refs;
function gs(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : be({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ol = { isMounted: function(e) {
  return (e = e._reactInternals) ? fr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = rt(), i = On(e), a = En(r, i);
  a.payload = t, n != null && (a.callback = n), xn(e, a), Cn(e, i, r);
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = rt(), i = On(e), a = En(r, i);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), xn(e, a), Cn(e, i, r);
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = rt(), r = On(e), i = En(n, r);
  i.tag = 2, t != null && (i.callback = t), xn(e, i), Cn(e, r, n);
} };
function Em(e, t, n, r, i, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !sa(n, r) || !sa(i, a) : !0;
}
function ly(e, t, n) {
  var r = !1, i = An, a = t.contextType;
  return typeof a == "object" && a !== null ? a = dt(a) : (i = qe(t) ? nr : Ue.current, r = t.contextTypes, a = (r = r != null) ? Hr(e, i) : An), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ol, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function xm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ol.enqueueReplaceState(t, t.state, null);
}
function Hu(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = sy, Uf(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = dt(a) : (a = qe(t) ? nr : Ue.current, i.context = Hr(e, a)), ca(e, n, i, r), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (gs(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ol.enqueueReplaceState(i, i.state, null), ca(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4);
}
var xo = Array.isArray;
function Oi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var o = r.refs;
        o === sy && (o = r.refs = {}), a === null ? delete o[i] : o[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Oo(e, t) {
  if (e.type !== "textarea") throw Error(R(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t));
}
function uy(e) {
  function t(v, m) {
    if (e) {
      var h = v.lastEffect;
      h !== null ? (h.nextEffect = m, v.lastEffect = m) : v.firstEffect = v.lastEffect = m, m.nextEffect = null, m.flags = 8;
    }
  }
  function n(v, m) {
    if (!e) return null;
    for (; m !== null; ) t(v, m), m = m.sibling;
    return null;
  }
  function r(v, m) {
    for (v = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? v.set(m.key, m) : v.set(m.index, m), m = m.sibling;
    return v;
  }
  function i(v, m) {
    return v = In(v, m), v.index = 0, v.sibling = null, v;
  }
  function a(v, m, h) {
    return v.index = h, e ? (h = v.alternate, h !== null ? (h = h.index, h < m ? (v.flags = 2, m) : h) : (v.flags = 2, m)) : m;
  }
  function o(v) {
    return e && v.alternate === null && (v.flags = 2), v;
  }
  function s(v, m, h, E) {
    return m === null || m.tag !== 6 ? (m = su(h, v.mode, E), m.return = v, m) : (m = i(m, h), m.return = v, m);
  }
  function l(v, m, h, E) {
    return m !== null && m.elementType === h.type ? (E = i(m, h.props), E.ref = Oi(v, m, h), E.return = v, E) : (E = qo(h.type, h.key, h.props, null, v.mode, E), E.ref = Oi(v, m, h), E.return = v, E);
  }
  function u(v, m, h, E) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== h.containerInfo || m.stateNode.implementation !== h.implementation ? (m = lu(h, v.mode, E), m.return = v, m) : (m = i(m, h.children || []), m.return = v, m);
  }
  function c(v, m, h, E, b) {
    return m === null || m.tag !== 7 ? (m = zr(h, v.mode, E, b), m.return = v, m) : (m = i(m, h), m.return = v, m);
  }
  function p(v, m, h) {
    if (typeof m == "string" || typeof m == "number") return m = su("" + m, v.mode, h), m.return = v, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ti:
          return h = qo(m.type, m.key, m.props, null, v.mode, h), h.ref = Oi(v, null, m), h.return = v, h;
        case Hn:
          return m = lu(m, v.mode, h), m.return = v, m;
      }
      if (xo(m) || gi(m)) return m = zr(
        m,
        v.mode,
        h,
        null
      ), m.return = v, m;
      Oo(v, m);
    }
    return null;
  }
  function d(v, m, h, E) {
    var b = m !== null ? m.key : null;
    if (typeof h == "string" || typeof h == "number") return b !== null ? null : s(v, m, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ti:
          return h.key === b ? h.type === dn ? c(v, m, h.props.children, E, b) : l(v, m, h, E) : null;
        case Hn:
          return h.key === b ? u(v, m, h, E) : null;
      }
      if (xo(h) || gi(h)) return b !== null ? null : c(v, m, h, E, null);
      Oo(v, h);
    }
    return null;
  }
  function g(v, m, h, E, b) {
    if (typeof E == "string" || typeof E == "number") return v = v.get(h) || null, s(m, v, "" + E, b);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Ti:
          return v = v.get(E.key === null ? h : E.key) || null, E.type === dn ? c(m, v, E.props.children, b, E.key) : l(m, v, E, b);
        case Hn:
          return v = v.get(E.key === null ? h : E.key) || null, u(m, v, E, b);
      }
      if (xo(E) || gi(E)) return v = v.get(h) || null, c(m, v, E, b, null);
      Oo(m, E);
    }
    return null;
  }
  function w(v, m, h, E) {
    for (var b = null, O = null, k = m, A = m = 0, C = null; k !== null && A < h.length; A++) {
      k.index > A ? (C = k, k = null) : C = k.sibling;
      var S = d(v, k, h[A], E);
      if (S === null) {
        k === null && (k = C);
        break;
      }
      e && k && S.alternate === null && t(v, k), m = a(S, m, A), O === null ? b = S : O.sibling = S, O = S, k = C;
    }
    if (A === h.length) return n(v, k), b;
    if (k === null) {
      for (; A < h.length; A++) k = p(v, h[A], E), k !== null && (m = a(k, m, A), O === null ? b = k : O.sibling = k, O = k);
      return b;
    }
    for (k = r(v, k); A < h.length; A++) C = g(k, v, A, h[A], E), C !== null && (e && C.alternate !== null && k.delete(C.key === null ? A : C.key), m = a(C, m, A), O === null ? b = C : O.sibling = C, O = C);
    return e && k.forEach(function(N) {
      return t(v, N);
    }), b;
  }
  function x(v, m, h, E) {
    var b = gi(h);
    if (typeof b != "function") throw Error(R(150));
    if (h = b.call(h), h == null) throw Error(R(151));
    for (var O = b = null, k = m, A = m = 0, C = null, S = h.next(); k !== null && !S.done; A++, S = h.next()) {
      k.index > A ? (C = k, k = null) : C = k.sibling;
      var N = d(v, k, S.value, E);
      if (N === null) {
        k === null && (k = C);
        break;
      }
      e && k && N.alternate === null && t(v, k), m = a(N, m, A), O === null ? b = N : O.sibling = N, O = N, k = C;
    }
    if (S.done) return n(v, k), b;
    if (k === null) {
      for (; !S.done; A++, S = h.next()) S = p(v, S.value, E), S !== null && (m = a(S, m, A), O === null ? b = S : O.sibling = S, O = S);
      return b;
    }
    for (k = r(v, k); !S.done; A++, S = h.next()) S = g(k, v, A, S.value, E), S !== null && (e && S.alternate !== null && k.delete(S.key === null ? A : S.key), m = a(S, m, A), O === null ? b = S : O.sibling = S, O = S);
    return e && k.forEach(function(G) {
      return t(v, G);
    }), b;
  }
  return function(v, m, h, E) {
    var b = typeof h == "object" && h !== null && h.type === dn && h.key === null;
    b && (h = h.props.children);
    var O = typeof h == "object" && h !== null;
    if (O) switch (h.$$typeof) {
      case Ti:
        e: {
          for (O = h.key, b = m; b !== null; ) {
            if (b.key === O) {
              switch (b.tag) {
                case 7:
                  if (h.type === dn) {
                    n(v, b.sibling), m = i(b, h.props.children), m.return = v, v = m;
                    break e;
                  }
                  break;
                default:
                  if (b.elementType === h.type) {
                    n(v, b.sibling), m = i(b, h.props), m.ref = Oi(v, b, h), m.return = v, v = m;
                    break e;
                  }
              }
              n(v, b);
              break;
            } else t(v, b);
            b = b.sibling;
          }
          h.type === dn ? (m = zr(h.props.children, v.mode, E, h.key), m.return = v, v = m) : (E = qo(h.type, h.key, h.props, null, v.mode, E), E.ref = Oi(v, m, h), E.return = v, v = E);
        }
        return o(v);
      case Hn:
        e: {
          for (b = h.key; m !== null; ) {
            if (m.key === b) if (m.tag === 4 && m.stateNode.containerInfo === h.containerInfo && m.stateNode.implementation === h.implementation) {
              n(v, m.sibling), m = i(m, h.children || []), m.return = v, v = m;
              break e;
            } else {
              n(v, m);
              break;
            }
            else t(v, m);
            m = m.sibling;
          }
          m = lu(h, v.mode, E), m.return = v, v = m;
        }
        return o(v);
    }
    if (typeof h == "string" || typeof h == "number") return h = "" + h, m !== null && m.tag === 6 ? (n(v, m.sibling), m = i(m, h), m.return = v, v = m) : (n(v, m), m = su(h, v.mode, E), m.return = v, v = m), o(v);
    if (xo(h)) return w(v, m, h, E);
    if (gi(h)) return x(v, m, h, E);
    if (O && Oo(v, h), typeof h > "u" && !b) switch (v.tag) {
      case 1:
      case 22:
      case 0:
      case 11:
      case 15:
        throw Error(R(152, Nr(v.type) || "Component"));
    }
    return n(v, m);
  };
}
var ys = uy(!0), cy = uy(!1), Qa = {}, Ft = Mn(Qa), fa = Mn(Qa), da = Mn(Qa);
function Gn(e) {
  if (e === Qa) throw Error(R(174));
  return e;
}
function Ku(e, t) {
  switch (Oe(da, t), Oe(fa, e), Oe(Ft, Qa), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Tu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Tu(t, e);
  }
  ge(Ft), Oe(Ft, t);
}
function Yr() {
  ge(Ft), ge(fa), ge(da);
}
function Om(e) {
  Gn(da.current);
  var t = Gn(Ft.current), n = Tu(t, e.type);
  t !== n && (Oe(fa, e), Oe(Ft, n));
}
function Wf(e) {
  fa.current === e && (ge(Ft), ge(fa));
}
var Ee = Mn(0);
function bs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 64) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Kt = null, hn = null, Dt = !1;
function fy(e, t) {
  var n = ct(5, null, null, 0);
  n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
}
function Cm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, !0) : !1;
    case 13:
      return !1;
    default:
      return !1;
  }
}
function Yu(e) {
  if (Dt) {
    var t = hn;
    if (t) {
      var n = t;
      if (!Cm(e, t)) {
        if (t = Lr(n.nextSibling), !t || !Cm(e, t)) {
          e.flags = e.flags & -1025 | 2, Dt = !1, Kt = e;
          return;
        }
        fy(Kt, n);
      }
      Kt = e, hn = Lr(t.firstChild);
    } else e.flags = e.flags & -1025 | 2, Dt = !1, Kt = e;
  }
}
function km(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Kt = e;
}
function Co(e) {
  if (e !== Kt) return !1;
  if (!Dt) return km(e), Dt = !0, !1;
  var t = e.type;
  if (e.tag !== 5 || t !== "head" && t !== "body" && !Vu(t, e.memoizedProps)) for (t = hn; t; ) fy(e, t), t = Lr(t.nextSibling);
  if (km(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              hn = Lr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      hn = null;
    }
  } else hn = Kt ? Lr(e.stateNode.nextSibling) : null;
  return !0;
}
function ru() {
  hn = Kt = null, Dt = !1;
}
var $r = [];
function Hf() {
  for (var e = 0; e < $r.length; e++) $r[e]._workInProgressVersionPrimary = null;
  $r.length = 0;
}
var Hi = cr.ReactCurrentDispatcher, ft = cr.ReactCurrentBatchConfig, pa = 0, Ce = null, Me = null, Fe = null, ws = !1, Ki = !1;
function Ge() {
  throw Error(R(321));
}
function Kf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ut(e[n], t[n])) return !1;
  return !0;
}
function Yf(e, t, n, r, i, a) {
  if (pa = a, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hi.current = e === null || e.memoizedState === null ? Sw : Pw, e = n(r, i), Ki) {
    a = 0;
    do {
      if (Ki = !1, !(25 > a)) throw Error(R(301));
      a += 1, Fe = Me = null, t.updateQueue = null, Hi.current = _w, e = n(r, i);
    } while (Ki);
  }
  if (Hi.current = Cs, t = Me !== null && Me.next !== null, pa = 0, Fe = Me = Ce = null, ws = !1, t) throw Error(R(300));
  return e;
}
function Qn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Fe === null ? Ce.memoizedState = Fe = e : Fe = Fe.next = e, Fe;
}
function dr() {
  if (Me === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Me.next;
  var t = Fe === null ? Ce.memoizedState : Fe.next;
  if (t !== null) Fe = t, Me = e;
  else {
    if (e === null) throw Error(R(310));
    Me = e, e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, Fe === null ? Ce.memoizedState = Fe = e : Fe = Fe.next = e;
  }
  return Fe;
}
function It(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ci(e) {
  var t = dr(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Me, i = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = a.next, a.next = o;
    }
    r.baseQueue = i = a, n.pending = null;
  }
  if (i !== null) {
    i = i.next, r = r.baseState;
    var s = o = a = null, l = i;
    do {
      var u = l.lane;
      if ((pa & u) === u) s !== null && (s = s.next = { lane: 0, action: l.action, eagerReducer: l.eagerReducer, eagerState: l.eagerState, next: null }), r = l.eagerReducer === e ? l.eagerState : e(r, l.action);
      else {
        var c = {
          lane: u,
          action: l.action,
          eagerReducer: l.eagerReducer,
          eagerState: l.eagerState,
          next: null
        };
        s === null ? (o = s = c, a = r) : s = s.next = c, Ce.lanes |= u, Xa |= u;
      }
      l = l.next;
    } while (l !== null && l !== i);
    s === null ? a = r : s.next = o, ut(r, t.memoizedState) || (kt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = s, n.lastRenderedState = r;
  }
  return [t.memoizedState, n.dispatch];
}
function ki(e) {
  var t = dr(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== i);
    ut(a, t.memoizedState) || (kt = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function Sm(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var i = t._workInProgressVersionPrimary;
  if (i !== null ? e = i === r : (e = e.mutableReadLanes, (e = (pa & e) === e) && (t._workInProgressVersionPrimary = r, $r.push(t))), e) return n(t._source);
  throw $r.push(t), Error(R(350));
}
function dy(e, t, n, r) {
  var i = We;
  if (i === null) throw Error(R(349));
  var a = t._getVersion, o = a(t._source), s = Hi.current, l = s.useState(function() {
    return Sm(i, t, n);
  }), u = l[1], c = l[0];
  l = Fe;
  var p = e.memoizedState, d = p.refs, g = d.getSnapshot, w = p.source;
  p = p.subscribe;
  var x = Ce;
  return e.memoizedState = { refs: d, source: t, subscribe: r }, s.useEffect(function() {
    d.getSnapshot = n, d.setSnapshot = u;
    var v = a(t._source);
    if (!ut(o, v)) {
      v = n(t._source), ut(c, v) || (u(v), v = On(x), i.mutableReadLanes |= v & i.pendingLanes), v = i.mutableReadLanes, i.entangledLanes |= v;
      for (var m = i.entanglements, h = v; 0 < h; ) {
        var E = 31 - _n(h), b = 1 << E;
        m[E] |= v, h &= ~b;
      }
    }
  }, [n, t, r]), s.useEffect(function() {
    return r(t._source, function() {
      var v = d.getSnapshot, m = d.setSnapshot;
      try {
        m(v(t._source));
        var h = On(x);
        i.mutableReadLanes |= h & i.pendingLanes;
      } catch (E) {
        m(function() {
          throw E;
        });
      }
    });
  }, [t, r]), ut(g, n) && ut(w, t) && ut(p, r) || (e = { pending: null, dispatch: null, lastRenderedReducer: It, lastRenderedState: c }, e.dispatch = u = Xf.bind(null, Ce, e), l.queue = e, l.baseQueue = null, c = Sm(i, t, n), l.memoizedState = l.baseState = c), c;
}
function py(e, t, n) {
  var r = dr();
  return dy(r, e, t, n);
}
function Si(e) {
  var t = Qn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: It, lastRenderedState: e }, e = e.dispatch = Xf.bind(null, Ce, e), [t.memoizedState, e];
}
function Es(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null }, Ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Pm(e) {
  var t = Qn();
  return e = { current: e }, t.memoizedState = e;
}
function xs() {
  return dr().memoizedState;
}
function Gu(e, t, n, r) {
  var i = Qn();
  Ce.flags |= e, i.memoizedState = Es(1 | t, n, void 0, r === void 0 ? null : r);
}
function Gf(e, t, n, r) {
  var i = dr();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Me !== null) {
    var o = Me.memoizedState;
    if (a = o.destroy, r !== null && Kf(r, o.deps)) {
      Es(t, n, a, r);
      return;
    }
  }
  Ce.flags |= e, i.memoizedState = Es(1 | t, n, a, r);
}
function _m(e, t) {
  return Gu(516, 4, e, t);
}
function Os(e, t) {
  return Gf(516, 4, e, t);
}
function my(e, t) {
  return Gf(4, 2, e, t);
}
function hy(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function vy(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Gf(4, 2, hy.bind(null, t, e), n);
}
function Qf() {
}
function gy(e, t) {
  var n = dr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function yy(e, t) {
  var n = dr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function kw(e, t) {
  var n = Kr();
  rr(98 > n ? 98 : n, function() {
    e(!0);
  }), rr(97 < n ? 97 : n, function() {
    var r = ft.transition;
    ft.transition = 1;
    try {
      e(!1), t();
    } finally {
      ft.transition = r;
    }
  });
}
function Xf(e, t, n) {
  var r = rt(), i = On(e), a = { lane: i, action: n, eagerReducer: null, eagerState: null, next: null }, o = t.pending;
  if (o === null ? a.next = a : (a.next = o.next, o.next = a), t.pending = a, o = e.alternate, e === Ce || o !== null && o === Ce) Ki = ws = !0;
  else {
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, l = o(s, n);
      if (a.eagerReducer = o, a.eagerState = l, ut(l, s)) return;
    } catch {
    } finally {
    }
    Cn(e, i, r);
  }
}
var Cs = { readContext: dt, useCallback: Ge, useContext: Ge, useEffect: Ge, useImperativeHandle: Ge, useLayoutEffect: Ge, useMemo: Ge, useReducer: Ge, useRef: Ge, useState: Ge, useDebugValue: Ge, useDeferredValue: Ge, useTransition: Ge, useMutableSource: Ge, useOpaqueIdentifier: Ge, unstable_isNewReconciler: !1 }, Sw = { readContext: dt, useCallback: function(e, t) {
  return Qn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: dt, useEffect: _m, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Gu(4, 2, hy.bind(
    null,
    t,
    e
  ), n);
}, useLayoutEffect: function(e, t) {
  return Gu(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Qn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Qn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, e = e.dispatch = Xf.bind(null, Ce, e), [r.memoizedState, e];
}, useRef: Pm, useState: Si, useDebugValue: Qf, useDeferredValue: function(e) {
  var t = Si(e), n = t[0], r = t[1];
  return _m(function() {
    var i = ft.transition;
    ft.transition = 1;
    try {
      r(e);
    } finally {
      ft.transition = i;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = Si(!1), t = e[0];
  return e = kw.bind(null, e[1]), Pm(e), [e, t];
}, useMutableSource: function(e, t, n) {
  var r = Qn();
  return r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }, dy(r, e, t, n);
}, useOpaqueIdentifier: function() {
  if (Dt) {
    var e = !1, t = bw(function() {
      throw e || (e = !0, n("r:" + (eu++).toString(36))), Error(R(355));
    }), n = Si(t)[1];
    return !(Ce.mode & 2) && (Ce.flags |= 516, Es(
      5,
      function() {
        n("r:" + (eu++).toString(36));
      },
      void 0,
      null
    )), t;
  }
  return t = "r:" + (eu++).toString(36), Si(t), t;
}, unstable_isNewReconciler: !1 }, Pw = { readContext: dt, useCallback: gy, useContext: dt, useEffect: Os, useImperativeHandle: vy, useLayoutEffect: my, useMemo: yy, useReducer: Ci, useRef: xs, useState: function() {
  return Ci(It);
}, useDebugValue: Qf, useDeferredValue: function(e) {
  var t = Ci(It), n = t[0], r = t[1];
  return Os(function() {
    var i = ft.transition;
    ft.transition = 1;
    try {
      r(e);
    } finally {
      ft.transition = i;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = Ci(It)[0];
  return [
    xs().current,
    e
  ];
}, useMutableSource: py, useOpaqueIdentifier: function() {
  return Ci(It)[0];
}, unstable_isNewReconciler: !1 }, _w = { readContext: dt, useCallback: gy, useContext: dt, useEffect: Os, useImperativeHandle: vy, useLayoutEffect: my, useMemo: yy, useReducer: ki, useRef: xs, useState: function() {
  return ki(It);
}, useDebugValue: Qf, useDeferredValue: function(e) {
  var t = ki(It), n = t[0], r = t[1];
  return Os(function() {
    var i = ft.transition;
    ft.transition = 1;
    try {
      r(e);
    } finally {
      ft.transition = i;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = ki(It)[0];
  return [
    xs().current,
    e
  ];
}, useMutableSource: py, useOpaqueIdentifier: function() {
  return ki(It)[0];
}, unstable_isNewReconciler: !1 }, Aw = cr.ReactCurrentOwner, kt = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? cy(t, null, n, r) : ys(t, e.child, n, r);
}
function Am(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return Mr(t, i), r = Yf(e, t, n, r, a, i), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, Yt(e, t, i)) : (t.flags |= 1, Qe(e, t, r, i), t.child);
}
function Tm(e, t, n, r, i, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !nd(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, by(e, t, o, r, i, a)) : (e = qo(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  return o = e.child, !(i & a) && (i = o.memoizedProps, n = n.compare, n = n !== null ? n : sa, n(i, r) && e.ref === t.ref) ? Yt(e, t, a) : (t.flags |= 1, e = In(o, r), e.ref = t.ref, e.return = t, t.child = e);
}
function by(e, t, n, r, i, a) {
  if (e !== null && sa(e.memoizedProps, r) && e.ref === t.ref) if (kt = !1, (a & i) !== 0) e.flags & 16384 && (kt = !0);
  else return t.lanes = e.lanes, Yt(e, t, a);
  return Qu(e, t, n, r, a);
}
function iu(e, t, n) {
  var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") if (!(t.mode & 4)) t.memoizedState = { baseLanes: 0 }, So(t, n);
  else if (n & 1073741824) t.memoizedState = { baseLanes: 0 }, So(t, a !== null ? a.baseLanes : n);
  else return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e }, So(t, e), null;
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, So(t, r);
  return Qe(e, t, i, n), t.child;
}
function wy(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128);
}
function Qu(e, t, n, r, i) {
  var a = qe(n) ? nr : Ue.current;
  return a = Hr(t, a), Mr(t, i), n = Yf(e, t, n, r, a, i), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, Yt(e, t, i)) : (t.flags |= 1, Qe(e, t, n, i), t.child);
}
function Im(e, t, n, r, i) {
  if (qe(n)) {
    var a = !0;
    Ko(t);
  } else a = !1;
  if (Mr(t, i), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), ly(t, n, r), Hu(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var l = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = dt(u) : (u = qe(n) ? nr : Ue.current, u = Hr(t, u));
    var c = n.getDerivedStateFromProps, p = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || l !== u) && xm(t, o, r, u), cn = !1;
    var d = t.memoizedState;
    o.state = d, ca(t, r, o, i), l = t.memoizedState, s !== r || d !== l || Xe.current || cn ? (typeof c == "function" && (gs(t, n, c, r), l = t.memoizedState), (s = cn || Em(t, n, s, r, d, l, u)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4)) : (typeof o.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4), r = !1);
  } else {
    o = t.stateNode, oy(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : xt(t.type, s), o.props = u, p = t.pendingProps, d = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = dt(l) : (l = qe(n) ? nr : Ue.current, l = Hr(t, l));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== p || d !== l) && xm(t, o, r, l), cn = !1, d = t.memoizedState, o.state = d, ca(t, r, o, i);
    var w = t.memoizedState;
    s !== p || d !== w || Xe.current || cn ? (typeof g == "function" && (gs(t, n, g, r), w = t.memoizedState), (u = cn || Em(t, n, u, r, d, w, l)) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(
      r,
      w,
      l
    ), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 256), r = !1);
  }
  return Xu(e, t, n, r, a, i);
}
function Xu(e, t, n, r, i, a) {
  wy(e, t);
  var o = (t.flags & 64) !== 0;
  if (!r && !o) return i && vm(t, n, !1), Yt(e, t, a);
  r = t.stateNode, Aw.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = ys(t, e.child, null, a), t.child = ys(t, null, s, a)) : Qe(e, t, s, a), t.memoizedState = r.state, i && vm(t, n, !0), t.child;
}
function jm(e) {
  var t = e.stateNode;
  t.pendingContext ? hm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hm(e, t.context, !1), Ku(e, t.containerInfo);
}
var ko = { dehydrated: null, retryLane: 0 };
function Nm(e, t, n) {
  var r = t.pendingProps, i = Ee.current, a = !1, o;
  return (o = (t.flags & 64) !== 0) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), o ? (a = !0, t.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (i |= 1), Oe(Ee, i & 1), e === null ? (r.fallback !== void 0 && Yu(t), e = r.children, i = r.fallback, a ? (e = Rm(t, e, i, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = ko, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = Rm(t, e, i, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = ko, t.lanes = 33554432, e) : (n = rd({ mode: "visible", children: e }, t.mode, n, null), n.return = t, t.child = n)) : e.memoizedState !== null ? a ? (r = Dm(e, t, r.children, r.fallback, n), a = t.child, i = e.child.memoizedState, a.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }, a.childLanes = e.childLanes & ~n, t.memoizedState = ko, r) : (n = Fm(e, t, r.children, n), t.memoizedState = null, n) : a ? (r = Dm(e, t, r.children, r.fallback, n), a = t.child, i = e.child.memoizedState, a.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }, a.childLanes = e.childLanes & ~n, t.memoizedState = ko, r) : (n = Fm(e, t, r.children, n), t.memoizedState = null, n);
}
function Rm(e, t, n, r) {
  var i = e.mode, a = e.child;
  return t = { mode: "hidden", children: t }, !(i & 2) && a !== null ? (a.childLanes = 0, a.pendingProps = t) : a = rd(t, i, 0, null), n = zr(n, i, r, null), a.return = e, n.return = e, a.sibling = n, e.child = a, n;
}
function Fm(e, t, n, r) {
  var i = e.child;
  return e = i.sibling, n = In(i, { mode: "visible", children: n }), !(t.mode & 2) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n;
}
function Dm(e, t, n, r, i) {
  var a = t.mode, o = e.child;
  e = o.sibling;
  var s = { mode: "hidden", children: n };
  return !(a & 2) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = s, o = n.lastEffect, o !== null ? (t.firstEffect = n.firstEffect, t.lastEffect = o, o.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = In(o, s), e !== null ? r = In(e, r) : (r = zr(r, a, i, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r;
}
function Lm(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), ay(e.return, t);
}
function au(e, t, n, r, i, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i, lastEffect: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.lastEffect = a);
}
function Mm(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, a = r.tail;
  if (Qe(e, t, r.children, n), r = Ee.current, r & 2) r = r & 1 | 2, t.flags |= 64;
  else {
    if (e !== null && e.flags & 64) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Lm(e, n);
      else if (e.tag === 19) Lm(e, n);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (Oe(Ee, r), !(t.mode & 2)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && bs(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), au(t, !1, i, n, a, t.lastEffect);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && bs(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      au(t, !0, n, null, a, t.lastEffect);
      break;
    case "together":
      au(t, !1, null, null, void 0, t.lastEffect);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Yt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Xa |= t.lanes, n & t.childLanes) {
    if (e !== null && t.child !== e.child) throw Error(R(153));
    if (t.child !== null) {
      for (e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = In(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var Ey, qu, xy, Oy;
Ey = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
qu = function() {
};
xy = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Gn(Ft.current);
    var a = null;
    switch (n) {
      case "input":
        i = Cu(e, i), r = Cu(e, r), a = [];
        break;
      case "option":
        i = Pu(e, i), r = Pu(e, r), a = [];
        break;
      case "select":
        i = be({}, i, { value: void 0 }), r = be({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = _u(e, i), r = _u(e, r), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fs);
    }
    Iu(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var s = i[u];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ea.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null)) if (u === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in l) l.hasOwnProperty(o) && s[o] !== l[o] && (n || (n = {}), n[o] = l[o]);
      } else n || (a || (a = []), a.push(u, n)), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (a = a || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ea.hasOwnProperty(u) ? (l != null && u === "onScroll" && he("scroll", e), a || s === l || (a = [])) : typeof l == "object" && l !== null && l.$$typeof === Of ? l.toString() : (a = a || []).push(u, l));
    }
    n && (a = a || []).push(
      "style",
      n
    );
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Oy = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pi(e, t) {
  if (!Dt) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Tw(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return qe(t.type) && ps(), null;
    case 3:
      return Yr(), ge(Xe), ge(Ue), Hf(), r = t.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Co(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), qu(t), null;
    case 5:
      Wf(t);
      var i = Gn(da.current);
      if (n = t.type, e !== null && t.stateNode != null) xy(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return null;
        }
        if (e = Gn(Ft.current), Co(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[mn] = t, r[ds] = a, n) {
            case "dialog":
              he("cancel", r), he("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < ji.length; e++) he(ji[e], r);
              break;
            case "source":
              he("error", r);
              break;
            case "img":
            case "image":
            case "link":
              he("error", r), he("load", r);
              break;
            case "details":
              he("toggle", r);
              break;
            case "input":
              Mp(r, a), he("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, he("invalid", r);
              break;
            case "textarea":
              Bp(r, a), he("invalid", r);
          }
          Iu(n, a), e = null;
          for (var o in a) a.hasOwnProperty(o) && (i = a[o], o === "children" ? typeof i == "string" ? r.textContent !== i && (e = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (e = ["children", "" + i]) : ea.hasOwnProperty(o) && i != null && o === "onScroll" && he("scroll", r));
          switch (n) {
            case "input":
              yo(r), $p(r, a, !0);
              break;
            case "textarea":
              yo(r), Vp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = fs);
          }
          r = e, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          switch (o = i.nodeType === 9 ? i : i.ownerDocument, e === Au.html && (e = gg(n)), e === Au.html ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[mn] = t, e[ds] = r, Ey(e, t, !1, !1), t.stateNode = e, o = ju(n, r), n) {
            case "dialog":
              he("cancel", e), he("close", e), i = r;
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", e), i = r;
              break;
            case "video":
            case "audio":
              for (i = 0; i < ji.length; i++) he(ji[i], e);
              i = r;
              break;
            case "source":
              he("error", e), i = r;
              break;
            case "img":
            case "image":
            case "link":
              he("error", e), he("load", e), i = r;
              break;
            case "details":
              he("toggle", e), i = r;
              break;
            case "input":
              Mp(e, r), i = Cu(e, r), he("invalid", e);
              break;
            case "option":
              i = Pu(e, r);
              break;
            case "select":
              e._wrapperState = { wasMultiple: !!r.multiple }, i = be({}, r, { value: void 0 }), he("invalid", e);
              break;
            case "textarea":
              Bp(e, r), i = _u(e, r), he("invalid", e);
              break;
            default:
              i = r;
          }
          Iu(n, i);
          var s = i;
          for (a in s) if (s.hasOwnProperty(a)) {
            var l = s[a];
            a === "style" ? wg(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && yg(e, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ta(e, l) : typeof l == "number" && ta(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (ea.hasOwnProperty(a) ? l != null && a === "onScroll" && he("scroll", e) : l != null && gf(e, a, l, o));
          }
          switch (n) {
            case "input":
              yo(e), $p(e, r, !1);
              break;
            case "textarea":
              yo(e), Vp(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + Pn(r.value));
              break;
            case "select":
              e.multiple = !!r.multiple, a = r.value, a != null ? Rr(e, !!r.multiple, a, !1) : r.defaultValue != null && Rr(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof i.onClick == "function" && (e.onclick = fs);
          }
          Xg(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) Oy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        n = Gn(da.current), Gn(Ft.current), Co(t) ? (r = t.stateNode, n = t.memoizedProps, r[mn] = t, r.nodeValue !== n && (t.flags |= 4)) : (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[mn] = t, t.stateNode = r);
      }
      return null;
    case 13:
      return ge(Ee), r = t.memoizedState, t.flags & 64 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? t.memoizedProps.fallback !== void 0 && Co(t) : n = e.memoizedState !== null, r && !n && t.mode & 2 && (e === null && t.memoizedProps.unstable_avoidThisFallback !== !0 || Ee.current & 1 ? De === 0 && (De = 3) : ((De === 0 || De === 3) && (De = 4), We === null || !(Xa & 134217727) && !(li & 134217727) || Br(We, Be))), (r || n) && (t.flags |= 4), null);
    case 4:
      return Yr(), qu(t), e === null && Yg(t.stateNode.containerInfo), null;
    case 10:
      return zf(t), null;
    case 17:
      return qe(t.type) && ps(), null;
    case 19:
      if (ge(Ee), r = t.memoizedState, r === null) return null;
      if (a = (t.flags & 64) !== 0, o = r.rendering, o === null) if (a) Pi(r, !1);
      else {
        if (De !== 0 || e !== null && e.flags & 64) for (e = t.child; e !== null; ) {
          if (o = bs(e), o !== null) {
            for (t.flags |= 64, Pi(r, !1), a = o.updateQueue, a !== null && (t.updateQueue = a, t.flags |= 4), r.lastEffect === null && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Oe(Ee, Ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        r.tail !== null && $e() > rc && (t.flags |= 64, a = !0, Pi(r, !1), t.lanes = 33554432);
      }
      else {
        if (!a) if (e = bs(o), e !== null) {
          if (t.flags |= 64, a = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Pi(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !Dt) return t = t.lastEffect = r.lastEffect, t !== null && (t.nextEffect = null), null;
        } else 2 * $e() - r.renderingStartTime > rc && n !== 1073741824 && (t.flags |= 64, a = !0, Pi(r, !1), t.lanes = 33554432);
        r.isBackwards ? (o.sibling = t.child, t.child = o) : (n = r.last, n !== null ? n.sibling = o : t.child = o, r.last = o);
      }
      return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = $e(), n.sibling = null, t = Ee.current, Oe(Ee, a ? t & 1 | 2 : t & 1), n) : null;
    case 23:
    case 24:
      return td(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null;
  }
  throw Error(R(156, t.tag));
}
function Iw(e) {
  switch (e.tag) {
    case 1:
      qe(e.type) && ps();
      var t = e.flags;
      return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 3:
      if (Yr(), ge(Xe), ge(Ue), Hf(), t = e.flags, t & 64) throw Error(R(285));
      return e.flags = t & -4097 | 64, e;
    case 5:
      return Wf(e), null;
    case 13:
      return ge(Ee), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 19:
      return ge(Ee), null;
    case 4:
      return Yr(), null;
    case 10:
      return zf(e), null;
    case 23:
    case 24:
      return td(), null;
    default:
      return null;
  }
}
function qf(e, t) {
  try {
    var n = "", r = t;
    do
      n += c1(r), r = r.return;
    while (r);
    var i = n;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: i };
}
function Zu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var jw = typeof WeakMap == "function" ? WeakMap : Map;
function Cy(e, t, n) {
  n = En(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ss || (Ss = !0, ic = r), Zu(e, t);
  }, n;
}
function ky(e, t, n) {
  n = En(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return Zu(e, t), r(i);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    typeof r != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this), Zu(e, t));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
var Nw = typeof WeakSet == "function" ? WeakSet : Set;
function $m(e) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (n) {
    kn(e, n);
  }
  else t.current = null;
}
function Rw(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps, r = e.memoizedState;
        e = t.stateNode, t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : xt(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t;
      }
      return;
    case 3:
      t.flags & 256 && Mf(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(R(163));
}
function Fw(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        e = t = t.next;
        do {
          var i = e;
          r = i.next, i = i.tag, i & 4 && i & 1 && (Ry(n, e), Uw(n, e)), e = r;
        } while (e !== t);
      }
      return;
    case 1:
      e = n.stateNode, n.flags & 4 && (t === null ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : xt(n.type, t.memoizedProps), e.componentDidUpdate(
        r,
        t.memoizedState,
        e.__reactInternalSnapshotBeforeUpdate
      ))), t = n.updateQueue, t !== null && wm(n, t, e);
      return;
    case 3:
      if (t = n.updateQueue, t !== null) {
        if (e = null, n.child !== null) switch (n.child.tag) {
          case 5:
            e = n.child.stateNode;
            break;
          case 1:
            e = n.child.stateNode;
        }
        wm(n, t, e);
      }
      return;
    case 5:
      e = n.stateNode, t === null && n.flags & 4 && Xg(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null && Tg(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(R(163));
}
function Bm(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
      else {
        r = n.stateNode;
        var i = n.memoizedProps.style;
        i = i != null && i.hasOwnProperty("display") ? i.display : null, r.style.display = bg("display", i);
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
    else if ((n.tag !== 23 && n.tag !== 24 || n.memoizedState === null || n === e) && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
}
function Vm(e, t) {
  if (Jn && typeof Jn.onCommitFiberUnmount == "function") try {
    Jn.onCommitFiberUnmount($f, t);
  } catch {
  }
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (e = t.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
        var n = e = e.next;
        do {
          var r = n, i = r.destroy;
          if (r = r.tag, i !== void 0) if (r & 4) Ry(t, n);
          else {
            r = t;
            try {
              i();
            } catch (a) {
              kn(r, a);
            }
          }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if ($m(t), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
        e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount();
      } catch (a) {
        kn(
          t,
          a
        );
      }
      break;
    case 5:
      $m(t);
      break;
    case 4:
      Sy(e, t);
  }
}
function zm(e) {
  e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
}
function Um(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wm(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Um(t)) break e;
      t = t.return;
    }
    throw Error(R(160));
  }
  var n = t;
  switch (t = n.stateNode, n.tag) {
    case 5:
      var r = !1;
      break;
    case 3:
      t = t.containerInfo, r = !0;
      break;
    case 4:
      t = t.containerInfo, r = !0;
      break;
    default:
      throw Error(R(161));
  }
  n.flags & 16 && (ta(t, ""), n.flags &= -17);
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Um(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      n.child.return = n, n = n.child;
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? Ju(e, n, t) : ec(e, n, t);
}
function Ju(e, t, n) {
  var r = e.tag, i = r === 5 || r === 6;
  if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = fs));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ju(e, t, n), e = e.sibling; e !== null; ) Ju(e, t, n), e = e.sibling;
}
function ec(e, t, n) {
  var r = e.tag, i = r === 5 || r === 6;
  if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ec(e, t, n), e = e.sibling; e !== null; ) ec(e, t, n), e = e.sibling;
}
function Sy(e, t) {
  for (var n = t, r = !1, i, a; ; ) {
    if (!r) {
      r = n.return;
      e: for (; ; ) {
        if (r === null) throw Error(R(160));
        switch (i = r.stateNode, r.tag) {
          case 5:
            a = !1;
            break e;
          case 3:
            i = i.containerInfo, a = !0;
            break e;
          case 4:
            i = i.containerInfo, a = !0;
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var o = e, s = n, l = s; ; ) if (Vm(o, l), l.child !== null && l.tag !== 4) l.child.return = l, l = l.child;
      else {
        if (l === s) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === s) break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
      a ? (o = i, s = n.stateNode, o.nodeType === 8 ? o.parentNode.removeChild(s) : o.removeChild(s)) : i.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        i = n.stateNode.containerInfo, a = !0, n.child.return = n, n = n.child;
        continue;
      }
    } else if (Vm(e, n), n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return, n.tag === 4 && (r = !1);
    }
    n.sibling.return = n.return, n = n.sibling;
  }
}
function ou(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (n = n !== null ? n.lastEffect : null, n !== null) {
        var r = n = n.next;
        do
          (r.tag & 3) === 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next;
        while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (n = t.stateNode, n != null) {
        r = t.memoizedProps;
        var i = e !== null ? e.memoizedProps : r;
        e = t.type;
        var a = t.updateQueue;
        if (t.updateQueue = null, a !== null) {
          for (n[ds] = r, e === "input" && r.type === "radio" && r.name != null && hg(n, r), ju(e, i), t = ju(e, r), i = 0; i < a.length; i += 2) {
            var o = a[i], s = a[i + 1];
            o === "style" ? wg(n, s) : o === "dangerouslySetInnerHTML" ? yg(n, s) : o === "children" ? ta(n, s) : gf(n, o, s, t);
          }
          switch (e) {
            case "input":
              ku(n, r);
              break;
            case "textarea":
              vg(n, r);
              break;
            case "select":
              e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, a = r.value, a != null ? Rr(n, !!r.multiple, a, !1) : e !== !!r.multiple && (r.defaultValue != null ? Rr(n, !!r.multiple, r.defaultValue, !0) : Rr(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(R(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      n = t.stateNode, n.hydrate && (n.hydrate = !1, Tg(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && (ed = $e(), Bm(t.child, !0)), Hm(t);
      return;
    case 19:
      Hm(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Bm(t, t.memoizedState !== null);
      return;
  }
  throw Error(R(163));
}
function Hm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Nw()), t.forEach(function(r) {
      var i = Kw.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Dw(e, t) {
  return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : !1;
}
var Lw = Math.ceil, ks = cr.ReactCurrentDispatcher, Zf = cr.ReactCurrentOwner, oe = 0, We = null, Se = null, Be = 0, ir = 0, tc = Mn(0), De = 0, sl = null, si = 0, Xa = 0, li = 0, Jf = 0, nc = null, ed = 0, rc = 1 / 0;
function ui() {
  rc = $e() + 500;
}
var W = null, Ss = !1, ic = null, jt = null, Tn = !1, Yi = null, Ni = 90, ac = [], oc = [], Gt = null, Gi = 0, sc = null, Go = -1, Wt = 0, Qo = 0, Qi = null, Xo = !1;
function rt() {
  return oe & 48 ? $e() : Go !== -1 ? Go : Go = $e();
}
function On(e) {
  if (e = e.mode, !(e & 2)) return 1;
  if (!(e & 4)) return Kr() === 99 ? 1 : 2;
  if (Wt === 0 && (Wt = si), Cw.transition !== 0) {
    Qo !== 0 && (Qo = nc !== null ? nc.pendingLanes : 0), e = Wt;
    var t = 4186112 & ~Qo;
    return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), t;
  }
  return e = Kr(), oe & 4 && e === 98 ? e = us(12, Wt) : (e = S1(e), e = us(e, Wt)), e;
}
function Cn(e, t, n) {
  if (50 < Gi) throw Gi = 0, sc = null, Error(R(185));
  if (e = ll(e, t), e === null) return null;
  el(e, t, n), e === We && (li |= t, De === 4 && Br(e, Be));
  var r = Kr();
  t === 1 ? oe & 8 && !(oe & 48) ? lc(e) : (pt(e, n), oe === 0 && (ui(), $t())) : (!(oe & 4) || r !== 98 && r !== 99 || (Gt === null ? Gt = /* @__PURE__ */ new Set([e]) : Gt.add(e)), pt(e, n)), nc = e;
}
function ll(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
function pt(e, t) {
  for (var n = e.callbackNode, r = e.suspendedLanes, i = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - _n(o), l = 1 << s, u = a[s];
    if (u === -1) {
      if (!(l & r) || l & i) {
        u = t, br(l);
        var c = me;
        a[s] = 10 <= c ? u + 250 : 6 <= c ? u + 5e3 : -1;
      }
    } else u <= t && (e.expiredLanes |= l);
    o &= ~l;
  }
  if (r = aa(e, e === We ? Be : 0), t = me, r === 0) n !== null && (n !== tu && Uu(n), e.callbackNode = null, e.callbackPriority = 0);
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== tu && Uu(n);
    }
    t === 15 ? (n = lc.bind(null, e), Ut === null ? (Ut = [n], Yo = Bf(al, iy)) : Ut.push(n), n = tu) : t === 14 ? n = ua(99, lc.bind(null, e)) : (n = P1(t), n = ua(n, Py.bind(null, e))), e.callbackPriority = t, e.callbackNode = n;
  }
}
function Py(e) {
  if (Go = -1, Qo = Wt = 0, oe & 48) throw Error(R(327));
  var t = e.callbackNode;
  if ($n() && e.callbackNode !== t) return null;
  var n = aa(e, e === We ? Be : 0);
  if (n === 0) return null;
  var r = n, i = oe;
  oe |= 16;
  var a = Iy();
  (We !== e || Be !== r) && (ui(), Vr(e, r));
  do
    try {
      Bw();
      break;
    } catch (s) {
      Ty(e, s);
    }
  while (!0);
  if (Vf(), ks.current = a, oe = i, Se !== null ? r = 0 : (We = null, Be = 0, r = De), si & li) Vr(e, 0);
  else if (r !== 0) {
    if (r === 2 && (oe |= 64, e.hydrate && (e.hydrate = !1, Mf(e.containerInfo)), n = Lg(e), n !== 0 && (r = Ri(e, n))), r === 1) throw t = sl, Vr(e, 0), Br(e, n), pt(e, $e()), t;
    switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
      case 0:
      case 1:
        throw Error(R(345));
      case 2:
        zn(e);
        break;
      case 3:
        if (Br(e, n), (n & 62914560) === n && (r = ed + 500 - $e(), 10 < r)) {
          if (aa(e, 0) !== 0) break;
          if (i = e.suspendedLanes, (i & n) !== n) {
            rt(), e.pingedLanes |= e.suspendedLanes & i;
            break;
          }
          e.timeoutHandle = dm(zn.bind(null, e), r);
          break;
        }
        zn(e);
        break;
      case 4:
        if (Br(e, n), (n & 4186112) === n) break;
        for (r = e.eventTimes, i = -1; 0 < n; ) {
          var o = 31 - _n(n);
          a = 1 << o, o = r[o], o > i && (i = o), n &= ~a;
        }
        if (n = i, n = $e() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Lw(n / 1960)) - n, 10 < n) {
          e.timeoutHandle = dm(zn.bind(null, e), n);
          break;
        }
        zn(e);
        break;
      case 5:
        zn(e);
        break;
      default:
        throw Error(R(329));
    }
  }
  return pt(e, $e()), e.callbackNode === t ? Py.bind(null, e) : null;
}
function Br(e, t) {
  for (t &= ~Jf, t &= ~li, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - _n(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function lc(e) {
  if (oe & 48) throw Error(R(327));
  if ($n(), e === We && e.expiredLanes & Be) {
    var t = Be, n = Ri(e, t);
    si & li && (t = aa(e, t), n = Ri(e, t));
  } else t = aa(e, 0), n = Ri(e, t);
  if (e.tag !== 0 && n === 2 && (oe |= 64, e.hydrate && (e.hydrate = !1, Mf(e.containerInfo)), t = Lg(e), t !== 0 && (n = Ri(e, t))), n === 1) throw n = sl, Vr(e, 0), Br(e, t), pt(e, $e()), n;
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, zn(e), pt(e, $e()), null;
}
function Mw() {
  if (Gt !== null) {
    var e = Gt;
    Gt = null, e.forEach(function(t) {
      t.expiredLanes |= 24 & t.pendingLanes, pt(t, $e());
    });
  }
  $t();
}
function _y(e, t) {
  var n = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    oe = n, oe === 0 && (ui(), $t());
  }
}
function Ay(e, t) {
  var n = oe;
  oe &= -2, oe |= 8;
  try {
    return e(t);
  } finally {
    oe = n, oe === 0 && (ui(), $t());
  }
}
function So(e, t) {
  Oe(tc, ir), ir |= t, si |= t;
}
function td() {
  ir = tc.current, ge(tc);
}
function Vr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, yw(n)), Se !== null) for (n = Se.return; n !== null; ) {
    var r = n;
    switch (r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ps();
        break;
      case 3:
        Yr(), ge(Xe), ge(Ue), Hf();
        break;
      case 5:
        Wf(r);
        break;
      case 4:
        Yr();
        break;
      case 13:
        ge(Ee);
        break;
      case 19:
        ge(Ee);
        break;
      case 10:
        zf(r);
        break;
      case 23:
      case 24:
        td();
    }
    n = n.return;
  }
  We = e, Se = In(e.current, null), Be = ir = si = t, De = 0, sl = null, Jf = li = Xa = 0;
}
function Ty(e, t) {
  do {
    var n = Se;
    try {
      if (Vf(), Hi.current = Cs, ws) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        ws = !1;
      }
      if (pa = 0, Fe = Me = Ce = null, Ki = !1, Zf.current = null, n === null || n.return === null) {
        De = 1, sl = t, Se = null;
        break;
      }
      e: {
        var a = e, o = n.return, s = n, l = t;
        if (t = Be, s.flags |= 2048, s.firstEffect = s.lastEffect = null, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l;
          if (!(s.mode & 2)) {
            var c = s.alternate;
            c ? (s.updateQueue = c.updateQueue, s.memoizedState = c.memoizedState, s.lanes = c.lanes) : (s.updateQueue = null, s.memoizedState = null);
          }
          var p = (Ee.current & 1) !== 0, d = o;
          do {
            var g;
            if (g = d.tag === 13) {
              var w = d.memoizedState;
              if (w !== null) g = w.dehydrated !== null;
              else {
                var x = d.memoizedProps;
                g = x.fallback === void 0 ? !1 : x.unstable_avoidThisFallback !== !0 ? !0 : !p;
              }
            }
            if (g) {
              var v = d.updateQueue;
              if (v === null) {
                var m = /* @__PURE__ */ new Set();
                m.add(u), d.updateQueue = m;
              } else v.add(u);
              if (!(d.mode & 2)) {
                if (d.flags |= 64, s.flags |= 16384, s.flags &= -2981, s.tag === 1) if (s.alternate === null) s.tag = 17;
                else {
                  var h = En(-1, 1);
                  h.tag = 2, xn(s, h);
                }
                s.lanes |= 1;
                break e;
              }
              l = void 0, s = t;
              var E = a.pingCache;
              if (E === null ? (E = a.pingCache = new jw(), l = /* @__PURE__ */ new Set(), E.set(u, l)) : (l = E.get(u), l === void 0 && (l = /* @__PURE__ */ new Set(), E.set(u, l))), !l.has(s)) {
                l.add(s);
                var b = Hw.bind(null, a, u, s);
                u.then(b, b);
              }
              d.flags |= 4096, d.lanes = t;
              break e;
            }
            d = d.return;
          } while (d !== null);
          l = Error((Nr(s.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
        }
        De !== 5 && (De = 2), l = qf(l, s), d = o;
        do {
          switch (d.tag) {
            case 3:
              a = l, d.flags |= 4096, t &= -t, d.lanes |= t;
              var O = Cy(d, a, t);
              bm(d, O);
              break e;
            case 1:
              a = l;
              var k = d.type, A = d.stateNode;
              if (!(d.flags & 64) && (typeof k.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && (jt === null || !jt.has(A)))) {
                d.flags |= 4096, t &= -t, d.lanes |= t;
                var C = ky(d, a, t);
                bm(d, C);
                break e;
              }
          }
          d = d.return;
        } while (d !== null);
      }
      Ny(n);
    } catch (S) {
      t = S, Se === n && n !== null && (Se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Iy() {
  var e = ks.current;
  return ks.current = Cs, e === null ? Cs : e;
}
function Ri(e, t) {
  var n = oe;
  oe |= 16;
  var r = Iy();
  We === e && Be === t || Vr(e, t);
  do
    try {
      $w();
      break;
    } catch (i) {
      Ty(e, i);
    }
  while (!0);
  if (Vf(), oe = n, ks.current = r, Se !== null) throw Error(R(261));
  return We = null, Be = 0, De;
}
function $w() {
  for (; Se !== null; ) jy(Se);
}
function Bw() {
  for (; Se !== null && !Ew(); ) jy(Se);
}
function jy(e) {
  var t = Fy(e.alternate, e, ir);
  e.memoizedProps = e.pendingProps, t === null ? Ny(e) : Se = t, Zf.current = null;
}
function Ny(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 2048) {
      if (n = Iw(t), n !== null) {
        n.flags &= 2047, Se = n;
        return;
      }
      e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
    } else {
      if (n = Tw(n, t, ir), n !== null) {
        Se = n;
        return;
      }
      if (n = t, n.tag !== 24 && n.tag !== 23 || n.memoizedState === null || ir & 1073741824 || !(n.mode & 4)) {
        for (var r = 0, i = n.child; i !== null; ) r |= i.lanes | i.childLanes, i = i.sibling;
        n.childLanes = r;
      }
      e !== null && !(e.flags & 2048) && (e.firstEffect === null && (e.firstEffect = t.firstEffect), t.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t));
    }
    if (t = t.sibling, t !== null) {
      Se = t;
      return;
    }
    Se = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function zn(e) {
  var t = Kr();
  return rr(99, Vw.bind(null, e, t)), null;
}
function Vw(e, t) {
  do
    $n();
  while (Yi !== null);
  if (oe & 48) throw Error(R(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes, i = r, a = e.pendingLanes & ~i;
  e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= i, e.mutableReadLanes &= i, e.entangledLanes &= i, i = e.entanglements;
  for (var o = e.eventTimes, s = e.expirationTimes; 0 < a; ) {
    var l = 31 - _n(a), u = 1 << l;
    i[l] = 0, o[l] = -1, s[l] = -1, a &= ~u;
  }
  if (Gt !== null && !(r & 24) && Gt.has(e) && Gt.delete(e), e === We && (Se = We = null, Be = 0), 1 < n.flags ? n.lastEffect !== null ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, r !== null) {
    if (i = oe, oe |= 32, Zf.current = null, Zl = Uo, o = am(), Mu(o)) {
      if ("selectionStart" in o) s = { start: o.selectionStart, end: o.selectionEnd };
      else e: if (s = (s = o.ownerDocument) && s.defaultView || window, (u = s.getSelection && s.getSelection()) && u.rangeCount !== 0) {
        s = u.anchorNode, a = u.anchorOffset, l = u.focusNode, u = u.focusOffset;
        try {
          s.nodeType, l.nodeType;
        } catch {
          s = null;
          break e;
        }
        var c = 0, p = -1, d = -1, g = 0, w = 0, x = o, v = null;
        t: for (; ; ) {
          for (var m; x !== s || a !== 0 && x.nodeType !== 3 || (p = c + a), x !== l || u !== 0 && x.nodeType !== 3 || (d = c + u), x.nodeType === 3 && (c += x.nodeValue.length), (m = x.firstChild) !== null; )
            v = x, x = m;
          for (; ; ) {
            if (x === o) break t;
            if (v === s && ++g === a && (p = c), v === l && ++w === u && (d = c), (m = x.nextSibling) !== null) break;
            x = v, v = x.parentNode;
          }
          x = m;
        }
        s = p === -1 || d === -1 ? null : { start: p, end: d };
      } else s = null;
      s = s || { start: 0, end: 0 };
    } else s = null;
    Jl = { focusedElem: o, selectionRange: s }, Uo = !1, Qi = null, Xo = !1, W = r;
    do
      try {
        zw();
      } catch (S) {
        if (W === null) throw Error(R(330));
        kn(W, S), W = W.nextEffect;
      }
    while (W !== null);
    Qi = null, W = r;
    do
      try {
        for (o = e; W !== null; ) {
          var h = W.flags;
          if (h & 16 && ta(W.stateNode, ""), h & 128) {
            var E = W.alternate;
            if (E !== null) {
              var b = E.ref;
              b !== null && (typeof b == "function" ? b(null) : b.current = null);
            }
          }
          switch (h & 1038) {
            case 2:
              Wm(W), W.flags &= -3;
              break;
            case 6:
              Wm(W), W.flags &= -3, ou(W.alternate, W);
              break;
            case 1024:
              W.flags &= -1025;
              break;
            case 1028:
              W.flags &= -1025, ou(W.alternate, W);
              break;
            case 4:
              ou(W.alternate, W);
              break;
            case 8:
              s = W, Sy(o, s);
              var O = s.alternate;
              zm(s), O !== null && zm(O);
          }
          W = W.nextEffect;
        }
      } catch (S) {
        if (W === null) throw Error(R(330));
        kn(W, S), W = W.nextEffect;
      }
    while (W !== null);
    if (b = Jl, E = am(), h = b.focusedElem, o = b.selectionRange, E !== h && h && h.ownerDocument && Hg(h.ownerDocument.documentElement, h)) {
      for (o !== null && Mu(h) && (E = o.start, b = o.end, b === void 0 && (b = E), "selectionStart" in h ? (h.selectionStart = E, h.selectionEnd = Math.min(b, h.value.length)) : (b = (E = h.ownerDocument || document) && E.defaultView || window, b.getSelection && (b = b.getSelection(), s = h.textContent.length, O = Math.min(o.start, s), o = o.end === void 0 ? O : Math.min(o.end, s), !b.extend && O > o && (s = o, o = O, O = s), s = im(h, O), a = im(h, o), s && a && (b.rangeCount !== 1 || b.anchorNode !== s.node || b.anchorOffset !== s.offset || b.focusNode !== a.node || b.focusOffset !== a.offset) && (E = E.createRange(), E.setStart(s.node, s.offset), b.removeAllRanges(), O > o ? (b.addRange(E), b.extend(a.node, a.offset)) : (E.setEnd(a.node, a.offset), b.addRange(E)))))), E = [], b = h; b = b.parentNode; ) b.nodeType === 1 && E.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
      for (typeof h.focus == "function" && h.focus(), h = 0; h < E.length; h++) b = E[h], b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
    }
    Uo = !!Zl, Jl = Zl = null, e.current = n, W = r;
    do
      try {
        for (h = e; W !== null; ) {
          var k = W.flags;
          if (k & 36 && Fw(h, W.alternate, W), k & 128) {
            E = void 0;
            var A = W.ref;
            if (A !== null) {
              var C = W.stateNode;
              switch (W.tag) {
                case 5:
                  E = C;
                  break;
                default:
                  E = C;
              }
              typeof A == "function" ? A(E) : A.current = E;
            }
          }
          W = W.nextEffect;
        }
      } catch (S) {
        if (W === null) throw Error(R(330));
        kn(W, S), W = W.nextEffect;
      }
    while (W !== null);
    W = null, Ow(), oe = i;
  } else e.current = n;
  if (Tn) Tn = !1, Yi = e, Ni = t;
  else for (W = r; W !== null; ) t = W.nextEffect, W.nextEffect = null, W.flags & 8 && (k = W, k.sibling = null, k.stateNode = null), W = t;
  if (r = e.pendingLanes, r === 0 && (jt = null), r === 1 ? e === sc ? Gi++ : (Gi = 0, sc = e) : Gi = 0, n = n.stateNode, Jn && typeof Jn.onCommitFiberRoot == "function") try {
    Jn.onCommitFiberRoot($f, n, void 0, (n.current.flags & 64) === 64);
  } catch {
  }
  if (pt(e, $e()), Ss) throw Ss = !1, e = ic, ic = null, e;
  return oe & 8 || $t(), null;
}
function zw() {
  for (; W !== null; ) {
    var e = W.alternate;
    Xo || Qi === null || (W.flags & 8 ? Wp(W, Qi) && (Xo = !0) : W.tag === 13 && Dw(e, W) && Wp(W, Qi) && (Xo = !0));
    var t = W.flags;
    t & 256 && Rw(e, W), !(t & 512) || Tn || (Tn = !0, ua(97, function() {
      return $n(), null;
    })), W = W.nextEffect;
  }
}
function $n() {
  if (Ni !== 90) {
    var e = 97 < Ni ? 97 : Ni;
    return Ni = 90, rr(e, Ww);
  }
  return !1;
}
function Uw(e, t) {
  ac.push(t, e), Tn || (Tn = !0, ua(97, function() {
    return $n(), null;
  }));
}
function Ry(e, t) {
  oc.push(t, e), Tn || (Tn = !0, ua(97, function() {
    return $n(), null;
  }));
}
function Ww() {
  if (Yi === null) return !1;
  var e = Yi;
  if (Yi = null, oe & 48) throw Error(R(331));
  var t = oe;
  oe |= 32;
  var n = oc;
  oc = [];
  for (var r = 0; r < n.length; r += 2) {
    var i = n[r], a = n[r + 1], o = i.destroy;
    if (i.destroy = void 0, typeof o == "function") try {
      o();
    } catch (l) {
      if (a === null) throw Error(R(330));
      kn(a, l);
    }
  }
  for (n = ac, ac = [], r = 0; r < n.length; r += 2) {
    i = n[r], a = n[r + 1];
    try {
      var s = i.create;
      i.destroy = s();
    } catch (l) {
      if (a === null) throw Error(R(330));
      kn(a, l);
    }
  }
  for (s = e.current.firstEffect; s !== null; ) e = s.nextEffect, s.nextEffect = null, s.flags & 8 && (s.sibling = null, s.stateNode = null), s = e;
  return oe = t, $t(), !0;
}
function Km(e, t, n) {
  t = qf(n, t), t = Cy(e, t, 1), xn(e, t), t = rt(), e = ll(e, 1), e !== null && (el(e, 1, t), pt(e, t));
}
function kn(e, t) {
  if (e.tag === 3) Km(e, e, t);
  else for (var n = e.return; n !== null; ) {
    if (n.tag === 3) {
      Km(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
        e = qf(t, e);
        var i = ky(n, e, 1);
        if (xn(n, i), i = rt(), n = ll(n, 1), n !== null) el(n, 1, i), pt(n, i);
        else if (typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) try {
          r.componentDidCatch(t, e);
        } catch {
        }
        break;
      }
    }
    n = n.return;
  }
}
function Hw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = rt(), e.pingedLanes |= e.suspendedLanes & n, We === e && (Be & n) === n && (De === 4 || De === 3 && (Be & 62914560) === Be && 500 > $e() - ed ? Vr(e, 0) : Jf |= n), pt(e, t);
}
function Kw(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t), t = 0, t === 0 && (t = e.mode, t & 2 ? t & 4 ? (Wt === 0 && (Wt = si), t = wr(62914560 & ~Wt), t === 0 && (t = 4194304)) : t = Kr() === 99 ? 1 : 2 : t = 1), n = rt(), e = ll(e, t), e !== null && (el(e, t, n), pt(e, n));
}
var Fy;
Fy = function(e, t, n) {
  var r = t.lanes;
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Xe.current) kt = !0;
  else if (n & r) kt = !!(e.flags & 16384);
  else {
    switch (kt = !1, t.tag) {
      case 3:
        jm(t), ru();
        break;
      case 5:
        Om(t);
        break;
      case 1:
        qe(t.type) && Ko(t);
        break;
      case 4:
        Ku(t, t.stateNode.containerInfo);
        break;
      case 10:
        r = t.memoizedProps.value;
        var i = t.type._context;
        Oe(ms, i._currentValue), i._currentValue = r;
        break;
      case 13:
        if (t.memoizedState !== null)
          return n & t.child.childLanes ? Nm(e, t, n) : (Oe(Ee, Ee.current & 1), t = Yt(e, t, n), t !== null ? t.sibling : null);
        Oe(Ee, Ee.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 64) {
          if (r) return Mm(e, t, n);
          t.flags |= 64;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Oe(Ee, Ee.current), r) break;
        return null;
      case 23:
      case 24:
        return t.lanes = 0, iu(e, t, n);
    }
    return Yt(e, t, n);
  }
  else kt = !1;
  switch (t.lanes = 0, t.tag) {
    case 2:
      if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = Hr(t, Ue.current), Mr(t, n), i = Yf(null, t, r, e, i, n), t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0) {
        if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, qe(r)) {
          var a = !0;
          Ko(t);
        } else a = !1;
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Uf(t);
        var o = r.getDerivedStateFromProps;
        typeof o == "function" && gs(t, r, o, e), i.updater = ol, t.stateNode = i, i._reactInternals = t, Hu(t, r, e, n), t = Xu(null, t, r, !0, a, n);
      } else t.tag = 0, Qe(null, t, i, n), t = t.child;
      return t;
    case 16:
      i = t.elementType;
      e: {
        switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = Gw(i), e = xt(i, e), a) {
          case 0:
            t = Qu(null, t, i, e, n);
            break e;
          case 1:
            t = Im(null, t, i, e, n);
            break e;
          case 11:
            t = Am(null, t, i, e, n);
            break e;
          case 14:
            t = Tm(null, t, i, xt(i.type, e), r, n);
            break e;
        }
        throw Error(R(306, i, ""));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : xt(r, i), Qu(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : xt(r, i), Im(e, t, r, i, n);
    case 3:
      if (jm(t), r = t.updateQueue, e === null || r === null) throw Error(R(282));
      if (r = t.pendingProps, i = t.memoizedState, i = i !== null ? i.element : null, oy(e, t), ca(t, r, null, n), r = t.memoizedState.element, r === i) ru(), t = Yt(e, t, n);
      else {
        if (i = t.stateNode, (a = i.hydrate) && (hn = Lr(t.stateNode.containerInfo.firstChild), Kt = t, a = Dt = !0), a) {
          if (e = i.mutableSourceEagerHydrationData, e != null) for (i = 0; i < e.length; i += 2) a = e[i], a._workInProgressVersionPrimary = e[i + 1], $r.push(a);
          for (n = cy(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 1024, n = n.sibling;
        } else Qe(e, t, r, n), ru();
        t = t.child;
      }
      return t;
    case 5:
      return Om(t), e === null && Yu(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = i.children, Vu(r, i) ? o = null : a !== null && Vu(r, a) && (t.flags |= 16), wy(e, t), Qe(e, t, o, n), t.child;
    case 6:
      return e === null && Yu(t), null;
    case 13:
      return Nm(e, t, n);
    case 4:
      return Ku(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ys(t, null, r, n) : Qe(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : xt(r, i), Am(e, t, r, i, n);
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(
        e,
        t,
        t.pendingProps.children,
        n
      ), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        r = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value;
        var s = t.type._context;
        if (Oe(ms, s._currentValue), s._currentValue = a, o !== null) if (s = o.value, a = ut(s, a) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(s, a) : 1073741823) | 0, a === 0) {
          if (o.children === i.children && !Xe.current) {
            t = Yt(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var l = s.dependencies;
          if (l !== null) {
            o = s.child;
            for (var u = l.firstContext; u !== null; ) {
              if (u.context === r && u.observedBits & a) {
                s.tag === 1 && (u = En(-1, n & -n), u.tag = 2, xn(s, u)), s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), ay(s.return, n), l.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else o = s.tag === 10 && s.type === t.type ? null : s.child;
          if (o !== null) o.return = s;
          else for (o = s; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (s = o.sibling, s !== null) {
              s.return = o.return, o = s;
              break;
            }
            o = o.return;
          }
          s = o;
        }
        Qe(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, a = t.pendingProps, r = a.children, Mr(t, n), i = dt(
        i,
        a.unstable_observedBits
      ), r = r(i), t.flags |= 1, Qe(e, t, r, n), t.child;
    case 14:
      return i = t.type, a = xt(i, t.pendingProps), a = xt(i.type, a), Tm(e, t, i, a, r, n);
    case 15:
      return by(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : xt(r, i), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, qe(r) ? (e = !0, Ko(t)) : e = !1, Mr(t, n), ly(t, r, i), Hu(t, r, i, n), Xu(null, t, r, !0, e, n);
    case 19:
      return Mm(e, t, n);
    case 23:
      return iu(e, t, n);
    case 24:
      return iu(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Yw(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ct(e, t, n, r) {
  return new Yw(e, t, n, r);
}
function nd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Gw(e) {
  if (typeof e == "function") return nd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === qs) return 11;
    if (e === Zs) return 14;
  }
  return 2;
}
function In(e, t) {
  var n = e.alternate;
  return n === null ? (n = ct(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function qo(e, t, n, r, i, a) {
  var o = 2;
  if (r = e, typeof e == "function") nd(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case dn:
      return zr(n.children, i, a, t);
    case dg:
      o = 8, i |= 16;
      break;
    case yf:
      o = 8, i |= 1;
      break;
    case Mi:
      return e = ct(12, n, t, i | 8), e.elementType = Mi, e.type = Mi, e.lanes = a, e;
    case $i:
      return e = ct(13, n, t, i), e.type = $i, e.elementType = $i, e.lanes = a, e;
    case as:
      return e = ct(19, n, t, i), e.elementType = as, e.lanes = a, e;
    case Cf:
      return rd(n, i, a, t);
    case Ou:
      return e = ct(24, n, t, i), e.elementType = Ou, e.lanes = a, e;
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case bf:
          o = 10;
          break e;
        case wf:
          o = 9;
          break e;
        case qs:
          o = 11;
          break e;
        case Zs:
          o = 14;
          break e;
        case Ef:
          o = 16, r = null;
          break e;
        case xf:
          o = 22;
          break e;
      }
      throw Error(R(130, e == null ? e : typeof e, ""));
  }
  return t = ct(o, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
}
function zr(e, t, n, r) {
  return e = ct(7, e, r, t), e.lanes = n, e;
}
function rd(e, t, n, r) {
  return e = ct(23, e, r, t), e.elementType = Cf, e.lanes = n, e;
}
function su(e, t, n) {
  return e = ct(6, e, null, t), e.lanes = n, e;
}
function lu(e, t, n) {
  return t = ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Qw(e, t, n) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Hl(0), this.expirationTimes = Hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hl(0), this.mutableSourceEagerHydrationData = null;
}
function Xw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Hn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ps(e, t, n, r) {
  var i = t.current, a = rt(), o = On(i);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (fr(n) !== n || n.tag !== 1) throw Error(R(170));
      var s = n;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break t;
          case 1:
            if (qe(s.type)) {
              s = s.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        s = s.return;
      } while (s !== null);
      throw Error(R(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (qe(l)) {
        n = Zg(n, l, s);
        break e;
      }
    }
    n = s;
  } else n = An;
  return t.context === null ? t.context = n : t.pendingContext = n, t = En(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), xn(i, t), Cn(i, o, a), o;
}
function uu(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ym(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function id(e, t) {
  Ym(e, t), (e = e.alternate) && Ym(e, t);
}
function qw() {
  return null;
}
function ad(e, t, n) {
  var r = n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources || null;
  if (n = new Qw(e, t, n != null && n.hydrate === !0), t = ct(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), n.current = t, t.stateNode = n, Uf(t), e[oi] = n.current, Yg(e.nodeType === 8 ? e.parentNode : e), r) for (e = 0; e < r.length; e++) {
    t = r[e];
    var i = t._getVersion;
    i = i(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, i] : n.mutableSourceEagerHydrationData.push(t, i);
  }
  this._internalRoot = n;
}
ad.prototype.render = function(e) {
  Ps(e, this._internalRoot, null, null);
};
ad.prototype.unmount = function() {
  var e = this._internalRoot, t = e.containerInfo;
  Ps(null, e, null, function() {
    t[oi] = null;
  });
};
function qa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Zw(e, t) {
  if (t || (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild; ) e.removeChild(n);
  return new ad(e, 0, t ? { hydrate: !0 } : void 0);
}
function ul(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a._internalRoot;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var u = uu(o);
        s.call(u);
      };
    }
    Ps(t, o, e, i);
  } else {
    if (a = n._reactRootContainer = Zw(n, r), o = a._internalRoot, typeof i == "function") {
      var l = i;
      i = function() {
        var u = uu(o);
        l.call(u);
      };
    }
    Ay(function() {
      Ps(t, o, e, i);
    });
  }
  return uu(o);
}
Pg = function(e) {
  if (e.tag === 13) {
    var t = rt();
    Cn(e, 4, t), id(e, 4);
  }
};
Af = function(e) {
  if (e.tag === 13) {
    var t = rt();
    Cn(e, 67108864, t), id(e, 67108864);
  }
};
_g = function(e) {
  if (e.tag === 13) {
    var t = rt(), n = On(e);
    Cn(e, n, t), id(e, n);
  }
};
Ag = function(e, t) {
  return t();
};
Nu = function(e, t, n) {
  switch (t) {
    case "input":
      if (ku(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = il(r);
            if (!i) throw Error(R(90));
            mg(r), ku(r, i);
          }
        }
      }
      break;
    case "textarea":
      vg(e, n);
      break;
    case "select":
      t = n.value, t != null && Rr(e, !!n.multiple, t, !1);
  }
};
Sf = _y;
Og = function(e, t, n, r, i) {
  var a = oe;
  oe |= 4;
  try {
    return rr(98, e.bind(null, t, n, r, i));
  } finally {
    oe = a, oe === 0 && (ui(), $t());
  }
};
Pf = function() {
  !(oe & 49) && (Mw(), $n());
};
Cg = function(e, t) {
  var n = oe;
  oe |= 2;
  try {
    return e(t);
  } finally {
    oe = n, oe === 0 && (ui(), $t());
  }
};
function Dy(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qa(t)) throw Error(R(200));
  return Xw(e, t, null, n);
}
var Jw = { Events: [Ga, Cr, il, Eg, xg, $n, { current: !1 }] }, _i = { findFiberByHostInstance: Yn, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, eE = { bundleType: _i.bundleType, version: _i.version, rendererPackageName: _i.rendererPackageName, rendererConfig: _i.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: cr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Sg(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: _i.findFiberByHostInstance || qw, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Po.isDisabled && Po.supportsFiber) try {
    $f = Po.inject(eE), Jn = Po;
  } catch {
  }
}
vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jw;
vt.createPortal = Dy;
vt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(R(188)) : Error(R(268, Object.keys(e)));
  return e = Sg(t), e = e === null ? null : e.stateNode, e;
};
vt.flushSync = function(e, t) {
  var n = oe;
  if (n & 48) return e(t);
  oe |= 1;
  try {
    if (e) return rr(99, e.bind(null, t));
  } finally {
    oe = n, $t();
  }
};
vt.hydrate = function(e, t, n) {
  if (!qa(t)) throw Error(R(200));
  return ul(null, e, t, !0, n);
};
vt.render = function(e, t, n) {
  if (!qa(t)) throw Error(R(200));
  return ul(null, e, t, !1, n);
};
vt.unmountComponentAtNode = function(e) {
  if (!qa(e)) throw Error(R(40));
  return e._reactRootContainer ? (Ay(function() {
    ul(null, null, e, !1, function() {
      e._reactRootContainer = null, e[oi] = null;
    });
  }), !0) : !1;
};
vt.unstable_batchedUpdates = _y;
vt.unstable_createPortal = function(e, t) {
  return Dy(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
vt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!qa(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return ul(e, t, n, !1, r);
};
vt.version = "17.0.2";
function Ly() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ly);
    } catch (e) {
      console.error(e);
    }
}
Ly(), lg.exports = vt;
var My = lg.exports;
const Pr = /* @__PURE__ */ Wa(My);
var $y = { exports: {} }, tE = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", nE = tE, rE = nE;
function By() {
}
function Vy() {
}
Vy.resetWarningCache = By;
var iE = function() {
  function e(r, i, a, o, s, l) {
    if (l !== rE) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw u.name = "Invariant Violation", u;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Vy,
    resetWarningCache: By
  };
  return n.PropTypes = n, n;
};
$y.exports = iE();
var aE = $y.exports;
const f = /* @__PURE__ */ Wa(aE);
var zy = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var a = "", o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        s && (a = i(a, r(s)));
      }
      return a;
    }
    function r(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return n.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var o = "";
      for (var s in a)
        t.call(a, s) && a[s] && (o = i(o, s));
      return o;
    }
    function i(a, o) {
      return o ? a ? a + " " + o : a + o : a;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(zy);
var oE = zy.exports;
const V = /* @__PURE__ */ Wa(oE);
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, q.apply(null, arguments);
}
function ce(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
var od = /* @__PURE__ */ y.createContext({});
od.Consumer;
od.Provider;
function we(e, t) {
  var n = _.useContext(od);
  return e || n[t] || t;
}
function sE() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.filter(function(r) {
    return r != null;
  }).reduce(function(r, i) {
    if (typeof i != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return r === null ? i : function() {
      for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
        s[l] = arguments[l];
      r.apply(this, s), i.apply(this, s);
    };
  }, null);
}
var lE = ["as", "disabled", "onKeyDown"];
function Gm(e) {
  return !e || e.trim() === "#";
}
var sd = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = ce(e, lE), s = function(c) {
    var p = o.href, d = o.onClick;
    if ((i || Gm(p)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    d && d(c);
  }, l = function(c) {
    c.key === " " && (c.preventDefault(), s(c));
  };
  return Gm(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ y.createElement(r, q({
    ref: t
  }, o, {
    onClick: s,
    onKeyDown: sE(l, a)
  }));
});
sd.displayName = "SafeAnchor";
var uE = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], cE = {
  variant: "primary",
  active: !1,
  disabled: !1
}, ld = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, l = e.type, u = e.as, c = ce(e, uE), p = we(n, "btn"), d = V(o, p, a && "active", r && p + "-" + r, s && p + "-block", i && p + "-" + i);
  if (c.href)
    return /* @__PURE__ */ y.createElement(sd, q({}, c, {
      as: u,
      ref: t,
      className: V(d, c.disabled && "disabled")
    }));
  t && (c.ref = t), l ? c.type = l : u || (c.type = "button");
  var g = u || "button";
  return /* @__PURE__ */ y.createElement(g, q({}, c, {
    className: d
  }));
});
ld.displayName = "Button";
ld.defaultProps = cE;
var fE = ["bsPrefix", "size", "toggle", "vertical", "className", "as"], dE = {
  vertical: !1,
  toggle: !1,
  role: "group"
}, ud = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.size, i = e.toggle, a = e.vertical, o = e.className, s = e.as, l = s === void 0 ? "div" : s, u = ce(e, fE), c = we(n, "btn-group"), p = c;
  return a && (p = c + "-vertical"), /* @__PURE__ */ y.createElement(l, q({}, u, {
    ref: t,
    className: V(o, p, r && c + "-" + r, i && c + "-toggle")
  }));
});
ud.displayName = "ButtonGroup";
ud.defaultProps = dE;
var pE = ["bsPrefix", "className"], mE = {
  role: "toolbar"
}, cd = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = ce(e, pE), a = we(n, "btn-toolbar");
  return /* @__PURE__ */ y.createElement("div", q({}, i, {
    ref: t,
    className: V(r, a)
  }));
});
cd.displayName = "ButtonToolbar";
cd.defaultProps = mE;
var hE = ["children"];
function Gr(e) {
  "@babel/helpers - typeof";
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
function vE(e, t) {
  if (e == null) return {};
  var n = gE(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function gE(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function yE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bE(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Hy(r.key), r);
  }
}
function wE(e, t, n) {
  return t && bE(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function EE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && uc(e, t);
}
function uc(e, t) {
  return uc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, uc(e, t);
}
function xE(e) {
  var t = Wy();
  return function() {
    var r = _s(e), i;
    if (t) {
      var a = _s(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return OE(this, i);
  };
}
function OE(e, t) {
  if (t && (Gr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Uy(e);
}
function Uy(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Wy = function() {
    return !!e;
  })();
}
function _s(e) {
  return _s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _s(e);
}
function CE(e, t, n) {
  return t = Hy(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Hy(e) {
  var t = kE(e, "string");
  return Gr(t) == "symbol" ? t : t + "";
}
function kE(e, t) {
  if (Gr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Gr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vn = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function fd(e, t, n) {
  var r = /* @__PURE__ */ function(i) {
    EE(o, i);
    var a = xE(o);
    function o(s) {
      var l;
      return yE(this, o), l = a.call(this, s), l.transformProps = l.transformProps.bind(Uy(l)), l;
    }
    return wE(o, [{
      key: "warn",
      value: function(l) {
      }
    }, {
      key: "transformProps",
      value: function(l, u) {
        if (n[u] === void 0)
          return l[u] = this.props[u], l;
        var c = n[u], p = c.deprType, d = c.newName, g = c.expect, w = c.transform, x = c.message;
        switch (p) {
          case vn.MOVED:
            this.warn("".concat(t, ": The prop '").concat(u, "' has been moved to '").concat(d, "'.")), l[d] = this.props[u];
            break;
          case vn.REMOVED:
            this.warn("".concat(t, ": The prop '").concat(u, "' has been removed. '").concat(x, "'"));
            break;
          case vn.FORMAT:
            g(this.props[u]) ? l[u] = this.props[u] : (this.warn("".concat(t, ": The prop '").concat(u, "' expects a new format. ").concat(x)), l[u] = w(this.props[u], this.props));
            break;
          case vn.MOVED_AND_FORMAT:
            this.warn("".concat(t, ": The prop '").concat(u, "' has been moved to '").concat(d, "' and expects a new format. ").concat(x)), l[d] = w(this.props[u], this.props);
            break;
          default:
            l[u] = this.props[u];
            break;
        }
        return l;
      }
    }, {
      key: "render",
      value: function() {
        var l = Object.keys(this.props).reduce(this.transformProps, {}), u = l.children, c = vE(l, hE);
        return /* @__PURE__ */ y.createElement(e, c, this.props.children || u);
      }
    }]), o;
  }(y.Component);
  return CE(r, "displayName", "withDeprecatedProps(".concat(t, ")")), r;
}
function Qr(e) {
  "@babel/helpers - typeof";
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qr(e);
}
var SE = ["buttonType", "className", "children", "isClose", "type", "inputRef"];
function cc() {
  return cc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, cc.apply(this, arguments);
}
function PE(e, t, n) {
  return t = Ky(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _E(e, t) {
  if (e == null) return {};
  var n = AE(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function AE(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function TE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function IE(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ky(r.key), r);
  }
}
function jE(e, t, n) {
  return t && IE(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ky(e) {
  var t = NE(e, "string");
  return Qr(t) == "symbol" ? t : t + "";
}
function NE(e, t) {
  if (Qr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Qr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function RE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && fc(e, t);
}
function fc(e, t) {
  return fc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, fc(e, t);
}
function FE(e) {
  var t = Yy();
  return function() {
    var r = As(e), i;
    if (t) {
      var a = As(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return DE(this, i);
  };
}
function DE(e, t) {
  if (t && (Qr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Fi(e);
}
function Fi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Yy = function() {
    return !!e;
  })();
}
function As(e) {
  return As = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, As(e);
}
var dd = /* @__PURE__ */ function(e) {
  RE(n, e);
  var t = FE(n);
  function n(r) {
    var i;
    TE(this, n), i = t.call(this, r);
    var a = r.onBlur, o = r.onKeyDown;
    return i.onBlur = a.bind(Fi(i)), i.onKeyDown = o.bind(Fi(i)), i.onClick = i.onClick.bind(Fi(i)), i.setRefs = i.setRefs.bind(Fi(i)), i;
  }
  return jE(n, [{
    key: "onClick",
    value: function(i) {
      this.buttonRef.focus(), this.props.onClick(i);
    }
    /*
      The button component needs a ref to itself to be able to force
      focus in its onClick function (buttonRef). It also needs to accept
      a callback function from parent components to give those parents
      a reference to their child button (e.g. for the modal component).
      Therefore, both have been wrapped in a function bound on the class,
      since one cannot set two ref attributes on a component.
    */
  }, {
    key: "setRefs",
    value: function(i) {
      this.buttonRef = i, this.props.inputRef(i);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.buttonType, o = i.className, s = i.children, l = i.isClose, u = i.type;
      i.inputRef;
      var c = _E(i, SE);
      return /* @__PURE__ */ y.createElement("button", cc({}, c, {
        className: V(["btn", o], PE({}, "btn-".concat(a), a !== void 0), {
          close: l
        }),
        onBlur: this.onBlur,
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        type: u,
        ref: this.setRefs
      }), s);
    }
  }]), n;
}(y.Component), LE = {
  /** Used to determine the type of button to be rendered.  See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable button types. For example, `buttonType="light"`. The default is `undefined`. */
  buttonType: f.string,
  /** Specifies Bootstrap class names to apply to the button. See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable class names. The default is an empty array. */
  className: f.string,
  /** Specifies the text that is displayed within the button. */
  children: f.node.isRequired,
  // eslint-disable-next-line max-len
  /** A function that defines a reference for the button. An example `inputRef` from the calling component could look something like: `inputRef={(input) => { this.button = input; }}`. The default is an empty function. */
  inputRef: f.oneOfType([f.func, f.shape({
    current: f.instanceOf(f.element)
  })]),
  /** Used to determine if the button is a "Close" style button to leverage bootstrap styling. Example use case is with the Status Alert [dismiss button](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing). The default is false. */
  isClose: f.bool,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onBlur` event is triggered. For example, the button could change in color or `buttonType` when focus is changed. The default is an empty function. */
  onBlur: f.func,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onClick` event is triggered. For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: f.func,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.  For example, this could handle using the `Escape` key to trigger the button's action. The default is an empty function. */
  onKeyDown: f.func,
  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: f.string,
  /** Specifies variant to use. */
  variant: f.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "dark", "light", "link", "outline-primary", "outline-secondary", "outline-success", "outline-danger", "outline-warning", "outline-info", "outline-dark", "outline-light"])
};
dd.propTypes = LE;
dd.defaultProps = {
  buttonType: void 0,
  className: void 0,
  inputRef: function() {
  },
  isClose: !1,
  onBlur: function() {
  },
  onKeyDown: function() {
  },
  onClick: function() {
  },
  type: "button",
  variant: "outline-primary"
};
const ME = fd(dd, "Button", {
  label: {
    deprType: vn.MOVED,
    newName: "children"
  },
  className: {
    deprType: vn.FORMAT,
    expect: function(t) {
      return typeof t == "string";
    },
    transform: function(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    },
    message: "It should be a string."
  }
});
let Qm = 0;
const pd = (e = "id") => (Qm += 1, `${e}${Qm}`);
function ma(e) {
  "@babel/helpers - typeof";
  return ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ma(e);
}
var $E = ["src", "id", "className", "hidden", "screenReaderText", "svgAttrs", "size"];
function Ts() {
  return Ts = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ts.apply(this, arguments);
}
function Xm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function BE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xm(Object(n), !0).forEach(function(r) {
      Gy(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xm(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Gy(e, t, n) {
  return t = VE(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function VE(e) {
  var t = zE(e, "string");
  return ma(t) == "symbol" ? t : t + "";
}
function zE(e, t) {
  if (ma(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ma(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UE(e, t) {
  if (e == null) return {};
  var n = WE(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function WE(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function md(e) {
  var t = e.src, n = e.id, r = e.className, i = e.hidden, a = e.screenReaderText, o = e.svgAttrs, s = e.size, l = UE(e, $E);
  if (t) {
    var u = o["aria-label"] || o["aria-labelledby"], c = BE({}, o);
    return u || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ y.createElement("span", Ts({
      className: V("pgn__icon", Gy({}, "pgn__icon__".concat(s), !!s), r),
      id: n
    }, l), /* @__PURE__ */ y.createElement(t, Ts({
      role: "img",
      focusable: !1
    }, c)), a && /* @__PURE__ */ y.createElement("span", {
      className: "sr-only"
    }, a));
  }
  return /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement("span", {
    id: n || pd("Icon"),
    className: r,
    "aria-hidden": i
  }), a && /* @__PURE__ */ y.createElement("span", {
    className: "sr-only"
  }, a));
}
md.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: f.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: f.shape({
    "aria-label": f.string,
    "aria-labelledby": f.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: f.string,
  /** The size of the icon. */
  size: f.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: f.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: f.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: f.oneOfType([f.string, f.element])
};
md.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Xt = fd(md, "Icon", {
  className: {
    deprType: vn.FORMAT,
    expect: function(t) {
      return typeof t == "string";
    },
    transform: function(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    },
    message: "It should be a string."
  }
});
function ha(e) {
  "@babel/helpers - typeof";
  return ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ha(e);
}
var HE = ["children", "iconAfter", "iconBefore", "size"], KE = ["size"];
function qm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Zm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qm(Object(n), !0).forEach(function(r) {
      YE(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qm(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function YE(e, t, n) {
  return t = GE(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function GE(e) {
  var t = QE(e, "string");
  return ha(t) == "symbol" ? t : t + "";
}
function QE(e, t) {
  if (ha(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ha(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function va() {
  return va = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, va.apply(this, arguments);
}
function Qy(e, t) {
  if (e == null) return {};
  var n = XE(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function XE(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ct = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.iconAfter, i = e.iconBefore, a = e.size, o = Qy(e, HE);
  return /* @__PURE__ */ y.createElement(ld, va({
    size: a
    // Bootstrap's <Button> types do not allow 'md' or 'inline', but we do.
  }, o, {
    className: V(o.className),
    ref: t
  }), i && /* @__PURE__ */ y.createElement(Xt, {
    className: "btn-icon-before",
    size: a,
    src: i
  }), n, r && /* @__PURE__ */ y.createElement(Xt, {
    className: "btn-icon-after",
    size: a,
    src: r
  }));
});
Ct.propTypes = {
  /** Specifies class name to apply to the button */
  className: f.string,
  /** Disables the Button, preventing mouse events, even if the underlying component is an `<a>` element */
  disabled: f.bool,
  /** Specifies the text that is displayed within the button. */
  children: f.node.isRequired,
  /** A function that would specify what the button should do when the `onClick` event is triggered.
   * For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: f.func,
  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.
   * For example, this could handle using the `Escape` key to trigger the button's action.
   * The default is an empty function. */
  onKeyDown: f.func,
  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: f.string,
  /** Specifies variant to use.
   * Can be on of the base variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `dark`,
   * `light`, `link`
   *
   * as well as one of the customized variants (= base variant prefixed with `inverse-`, `outline-`
   * or `inverse-outline-`)
   * */
  variant: f.string,
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';` */
  iconBefore: f.elementType,
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';` */
  iconAfter: f.elementType
  // The 'as' type casting above is required for TypeScript checking, because the 'PropTypes.elementType' type normally
  // allows strings as a value (for use cases like 'div') but we don't support that for <Icon />/iconBefore/iconAfter.
  // The React TypeScript type definitions are more specific (React.ComponentType vs React.ElementType).
};
Ct.defaultProps = Zm(Zm({}, Ct.defaultProps), {}, {
  children: void 0,
  className: void 0,
  iconBefore: void 0,
  iconAfter: void 0,
  disabled: !1
});
Ct.Deprecated = ME;
var Xy = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.size, r = Qy(e, KE);
  return /* @__PURE__ */ y.createElement(ud, va({
    size: n
  }, r, {
    ref: t
  }));
});
Xy.propTypes = {
  /** Specifies element type for this component. */
  as: f.elementType,
  /** An ARIA role describing the button group. */
  role: f.string,
  /** Specifies the size for all Buttons in the group. */
  size: f.oneOf(["sm", "md", "lg", "inline"]),
  /** Display as a button toggle group. */
  toggle: f.bool,
  /** Specifies if the set of Buttons should appear vertically stacked. */
  vertical: f.bool,
  /** Overrides underlying component base CSS class name */
  bsPrefix: f.string
};
Xy.defaultProps = {
  as: "div",
  role: "group",
  toggle: !1,
  vertical: !1,
  bsPrefix: "btn-group",
  size: "md"
};
var qy = /* @__PURE__ */ y.forwardRef(function(e, t) {
  return /* @__PURE__ */ y.createElement(cd, va({}, e, {
    ref: t
  }));
});
qy.propTypes = {
  /** An ARIA role describing the button group. */
  role: f.string,
  /** Overrides underlying component base CSS class name */
  bsPrefix: f.string
};
qy.defaultProps = {
  role: "toolbar",
  bsPrefix: "btn-toolbar"
};
const qE = (e, t, n) => (r, i, a, ...o) => t(r) && r[i] === void 0 ? new Error(
  `${a}: ${i} is required when ${n}`
) : e(r, i, a, ...o), ZE = (e, t) => t.every((n) => e[n] !== void 0), cu = (e, t) => qE(
  e,
  (n) => Array.isArray(t) ? ZE(n, t) : n[t] === !0,
  `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`
);
function Jm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jm(Object(n), !0).forEach(function(r) {
      Pe(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jm(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Is(e) {
  "@babel/helpers - typeof";
  return Is = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Is(e);
}
function JE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ex(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function tx(e, t, n) {
  return t && ex(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Pe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function hd(e, t) {
  return rx(e) || ax(e, t) || Zy(e, t) || sx();
}
function Za(e) {
  return nx(e) || ix(e) || Zy(e) || ox();
}
function nx(e) {
  if (Array.isArray(e)) return dc(e);
}
function rx(e) {
  if (Array.isArray(e)) return e;
}
function ix(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ax(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, a = !1, o, s;
    try {
      for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0)
        ;
    } catch (l) {
      a = !0, s = l;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw s;
      }
    }
    return r;
  }
}
function Zy(e, t) {
  if (e) {
    if (typeof e == "string") return dc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dc(e, t);
  }
}
function dc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ox() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var eh = function() {
}, vd = {}, Jy = {}, e0 = null, t0 = {
  mark: eh,
  measure: eh
};
try {
  typeof window < "u" && (vd = window), typeof document < "u" && (Jy = document), typeof MutationObserver < "u" && (e0 = MutationObserver), typeof performance < "u" && (t0 = performance);
} catch {
}
var lx = vd.navigator || {}, th = lx.userAgent, nh = th === void 0 ? "" : th, jn = vd, ye = Jy, rh = e0, _o = t0;
jn.document;
var rn = !!ye.documentElement && !!ye.head && typeof ye.addEventListener == "function" && typeof ye.createElement == "function", n0 = ~nh.indexOf("MSIE") || ~nh.indexOf("Trident/"), Ao, To, Io, jo, No, qt = "___FONT_AWESOME___", pc = 16, r0 = "fa", i0 = "svg-inline--fa", ar = "data-fa-i2svg", mc = "data-fa-pseudo-element", ux = "data-fa-pseudo-element-pending", gd = "data-prefix", yd = "data-icon", ih = "fontawesome-i2svg", cx = "async", fx = ["HTML", "HEAD", "STYLE", "SCRIPT"], a0 = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), ve = "classic", xe = "sharp", bd = [ve, xe];
function Ja(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[ve];
    }
  });
}
var ga = Ja((Ao = {}, Pe(Ao, ve, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), Pe(Ao, xe, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Ao)), ya = Ja((To = {}, Pe(To, ve, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Pe(To, xe, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), To)), ba = Ja((Io = {}, Pe(Io, ve, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Pe(Io, xe, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Io)), dx = Ja((jo = {}, Pe(jo, ve, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Pe(jo, xe, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), jo)), px = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, o0 = "fa-layers-text", mx = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, hx = Ja((No = {}, Pe(No, ve, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Pe(No, xe, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), No)), s0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vx = s0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), gx = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Xn = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, wa = /* @__PURE__ */ new Set();
Object.keys(ya[ve]).map(wa.add.bind(wa));
Object.keys(ya[xe]).map(wa.add.bind(wa));
var yx = [].concat(bd, Za(wa), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Xn.GROUP, Xn.SWAP_OPACITY, Xn.PRIMARY, Xn.SECONDARY]).concat(s0.map(function(e) {
  return "".concat(e, "x");
})).concat(vx.map(function(e) {
  return "w-".concat(e);
})), Xi = jn.FontAwesomeConfig || {};
function bx(e) {
  var t = ye.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function wx(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (ye && typeof ye.querySelector == "function") {
  var Ex = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Ex.forEach(function(e) {
    var t = hd(e, 2), n = t[0], r = t[1], i = wx(bx(n));
    i != null && (Xi[r] = i);
  });
}
var l0 = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: r0,
  replacementClass: i0,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Xi.familyPrefix && (Xi.cssPrefix = Xi.familyPrefix);
var Xr = z(z({}, l0), Xi);
Xr.autoReplaceSvg || (Xr.observeMutations = !1);
var Y = {};
Object.keys(l0).forEach(function(e) {
  Object.defineProperty(Y, e, {
    enumerable: !0,
    set: function(n) {
      Xr[e] = n, qi.forEach(function(r) {
        return r(Y);
      });
    },
    get: function() {
      return Xr[e];
    }
  });
});
Object.defineProperty(Y, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    Xr.cssPrefix = t, qi.forEach(function(n) {
      return n(Y);
    });
  },
  get: function() {
    return Xr.cssPrefix;
  }
});
jn.FontAwesomeConfig = Y;
var qi = [];
function xx(e) {
  return qi.push(e), function() {
    qi.splice(qi.indexOf(e), 1);
  };
}
var ln = pc, Nt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Ox(e) {
  if (!(!e || !rn)) {
    var t = ye.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = ye.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var a = n[i], o = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
    }
    return ye.head.insertBefore(t, r), e;
  }
}
var Cx = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ea() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Cx[Math.random() * 62 | 0];
  return t;
}
function ci(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function wd(e) {
  return e.classList ? ci(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function u0(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function kx(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(u0(e[n]), '" ');
  }, "").trim();
}
function cl(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function Ed(e) {
  return e.size !== Nt.size || e.x !== Nt.x || e.y !== Nt.y || e.rotate !== Nt.rotate || e.flipX || e.flipY;
}
function Sx(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(a, " ").concat(o, " ").concat(s)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: l,
    path: u
  };
}
function Px(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? pc : n, i = e.height, a = i === void 0 ? pc : i, o = e.startCentered, s = o === void 0 ? !1 : o, l = "";
  return s && n0 ? l += "translate(".concat(t.x / ln - r / 2, "em, ").concat(t.y / ln - a / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(t.x / ln, "em), calc(-50% + ").concat(t.y / ln, "em)) ") : l += "translate(".concat(t.x / ln, "em, ").concat(t.y / ln, "em) "), l += "scale(".concat(t.size / ln * (t.flipX ? -1 : 1), ", ").concat(t.size / ln * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var _x = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function c0() {
  var e = r0, t = i0, n = Y.cssPrefix, r = Y.replacementClass, i = _x;
  if (n !== e || r !== t) {
    var a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return i;
}
var ah = !1;
function fu() {
  Y.autoAddCss && !ah && (Ox(c0()), ah = !0);
}
var Ax = {
  mixout: function() {
    return {
      dom: {
        css: c0,
        insertCss: fu
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        fu();
      },
      beforeI2svg: function() {
        fu();
      }
    };
  }
}, Zt = jn || {};
Zt[qt] || (Zt[qt] = {});
Zt[qt].styles || (Zt[qt].styles = {});
Zt[qt].hooks || (Zt[qt].hooks = {});
Zt[qt].shims || (Zt[qt].shims = []);
var St = Zt[qt], f0 = [], Tx = function e() {
  ye.removeEventListener("DOMContentLoaded", e), js = 1, f0.map(function(t) {
    return t();
  });
}, js = !1;
rn && (js = (ye.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ye.readyState), js || ye.addEventListener("DOMContentLoaded", Tx));
function Ix(e) {
  rn && (js ? setTimeout(e, 0) : f0.push(e));
}
function eo(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, i = e.children, a = i === void 0 ? [] : i;
  return typeof e == "string" ? u0(e) : "<".concat(t, " ").concat(kx(r), ">").concat(a.map(eo).join(""), "</").concat(t, ">");
}
function oh(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var du = function(t, n, r, i) {
  var a = Object.keys(t), o = a.length, s = n, l, u, c;
  for (r === void 0 ? (l = 1, c = t[a[0]]) : (l = 0, c = r); l < o; l++)
    u = a[l], c = s(c, t[u], u, t);
  return c;
};
function jx(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var a = e.charCodeAt(n++);
      (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--);
    } else
      t.push(i);
  }
  return t;
}
function hc(e) {
  var t = jx(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Nx(e, t) {
  var n = e.length, r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function sh(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], i = !!r.icon;
    return i ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function vc(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, i = r === void 0 ? !1 : r, a = sh(t);
  typeof St.hooks.addPack == "function" && !i ? St.hooks.addPack(e, sh(t)) : St.styles[e] = z(z({}, St.styles[e] || {}), a), e === "fas" && vc("fa", t);
}
var Ro, Fo, Do, _r = St.styles, Rx = St.shims, Fx = (Ro = {}, Pe(Ro, ve, Object.values(ba[ve])), Pe(Ro, xe, Object.values(ba[xe])), Ro), xd = null, d0 = {}, p0 = {}, m0 = {}, h0 = {}, v0 = {}, Dx = (Fo = {}, Pe(Fo, ve, Object.keys(ga[ve])), Pe(Fo, xe, Object.keys(ga[xe])), Fo);
function Lx(e) {
  return ~yx.indexOf(e);
}
function Mx(e, t) {
  var n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !Lx(i) ? i : null;
}
var g0 = function() {
  var t = function(a) {
    return du(_r, function(o, s, l) {
      return o[l] = du(s, a, {}), o;
    }, {});
  };
  d0 = t(function(i, a, o) {
    if (a[3] && (i[a[3]] = o), a[2]) {
      var s = a[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        i[l.toString(16)] = o;
      });
    }
    return i;
  }), p0 = t(function(i, a, o) {
    if (i[o] = o, a[2]) {
      var s = a[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        i[l] = o;
      });
    }
    return i;
  }), v0 = t(function(i, a, o) {
    var s = a[2];
    return i[o] = o, s.forEach(function(l) {
      i[l] = o;
    }), i;
  });
  var n = "far" in _r || Y.autoFetchSvg, r = du(Rx, function(i, a) {
    var o = a[0], s = a[1], l = a[2];
    return s === "far" && !n && (s = "fas"), typeof o == "string" && (i.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (i.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), i;
  }, {
    names: {},
    unicodes: {}
  });
  m0 = r.names, h0 = r.unicodes, xd = fl(Y.styleDefault, {
    family: Y.familyDefault
  });
};
xx(function(e) {
  xd = fl(e.styleDefault, {
    family: Y.familyDefault
  });
});
g0();
function Od(e, t) {
  return (d0[e] || {})[t];
}
function $x(e, t) {
  return (p0[e] || {})[t];
}
function qn(e, t) {
  return (v0[e] || {})[t];
}
function y0(e) {
  return m0[e] || {
    prefix: null,
    iconName: null
  };
}
function Bx(e) {
  var t = h0[e], n = Od("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Nn() {
  return xd;
}
var Cd = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function fl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? ve : n, i = ga[r][e], a = ya[r][e] || ya[r][i], o = e in St.styles ? e : null;
  return a || o || null;
}
var lh = (Do = {}, Pe(Do, ve, Object.keys(ba[ve])), Pe(Do, xe, Object.keys(ba[xe])), Do);
function dl(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, i = r === void 0 ? !1 : r, a = (t = {}, Pe(t, ve, "".concat(Y.cssPrefix, "-").concat(ve)), Pe(t, xe, "".concat(Y.cssPrefix, "-").concat(xe)), t), o = null, s = ve;
  (e.includes(a[ve]) || e.some(function(u) {
    return lh[ve].includes(u);
  })) && (s = ve), (e.includes(a[xe]) || e.some(function(u) {
    return lh[xe].includes(u);
  })) && (s = xe);
  var l = e.reduce(function(u, c) {
    var p = Mx(Y.cssPrefix, c);
    if (_r[c] ? (c = Fx[s].includes(c) ? dx[s][c] : c, o = c, u.prefix = c) : Dx[s].indexOf(c) > -1 ? (o = c, u.prefix = fl(c, {
      family: s
    })) : p ? u.iconName = p : c !== Y.replacementClass && c !== a[ve] && c !== a[xe] && u.rest.push(c), !i && u.prefix && u.iconName) {
      var d = o === "fa" ? y0(u.iconName) : {}, g = qn(u.prefix, u.iconName);
      d.prefix && (o = null), u.iconName = d.iconName || g || u.iconName, u.prefix = d.prefix || u.prefix, u.prefix === "far" && !_r.far && _r.fas && !Y.autoFetchSvg && (u.prefix = "fas");
    }
    return u;
  }, Cd());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === xe && (_r.fass || Y.autoFetchSvg) && (l.prefix = "fass", l.iconName = qn(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = Nn() || "fas"), l;
}
var Vx = /* @__PURE__ */ function() {
  function e() {
    JE(this, e), this.definitions = {};
  }
  return tx(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
        i[a] = arguments[a];
      var o = i.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        n.definitions[s] = z(z({}, n.definitions[s] || {}), o[s]), vc(s, o[s]);
        var l = ba[ve][s];
        l && vc(l, o[s]), g0();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var i = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(i).map(function(a) {
        var o = i[a], s = o.prefix, l = o.iconName, u = o.icon, c = u[2];
        n[s] || (n[s] = {}), c.length > 0 && c.forEach(function(p) {
          typeof p == "string" && (n[s][p] = u);
        }), n[s][l] = u;
      }), n;
    }
  }]), e;
}(), uh = [], Ar = {}, Ur = {}, zx = Object.keys(Ur);
function Ux(e, t) {
  var n = t.mixoutsTo;
  return uh = e, Ar = {}, Object.keys(Ur).forEach(function(r) {
    zx.indexOf(r) === -1 && delete Ur[r];
  }), uh.forEach(function(r) {
    var i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach(function(o) {
      typeof i[o] == "function" && (n[o] = i[o]), Is(i[o]) === "object" && Object.keys(i[o]).forEach(function(s) {
        n[o] || (n[o] = {}), n[o][s] = i[o][s];
      });
    }), r.hooks) {
      var a = r.hooks();
      Object.keys(a).forEach(function(o) {
        Ar[o] || (Ar[o] = []), Ar[o].push(a[o]);
      });
    }
    r.provides && r.provides(Ur);
  }), n;
}
function gc(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  var a = Ar[e] || [];
  return a.forEach(function(o) {
    t = o.apply(null, [t].concat(r));
  }), t;
}
function or(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = Ar[e] || [];
  i.forEach(function(a) {
    a.apply(null, n);
  });
}
function Jt() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Ur[e] ? Ur[e].apply(null, t) : void 0;
}
function yc(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || Nn();
  if (t)
    return t = qn(n, t) || t, oh(b0.definitions, n, t) || oh(St.styles, n, t);
}
var b0 = new Vx(), Wx = function() {
  Y.autoReplaceSvg = !1, Y.observeMutations = !1, or("noAuto");
}, Hx = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return rn ? (or("beforeI2svg", t), Jt("pseudoElements2svg", t), Jt("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    Y.autoReplaceSvg === !1 && (Y.autoReplaceSvg = !0), Y.observeMutations = !0, Ix(function() {
      Yx({
        autoReplaceSvgRoot: n
      }), or("watch", t);
    });
  }
}, Kx = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Is(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: qn(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = fl(t[0]);
      return {
        prefix: r,
        iconName: qn(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(Y.cssPrefix, "-")) > -1 || t.match(px))) {
      var i = dl(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || Nn(),
        iconName: qn(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof t == "string") {
      var a = Nn();
      return {
        prefix: a,
        iconName: qn(a, t) || t
      };
    }
  }
}, ot = {
  noAuto: Wx,
  config: Y,
  dom: Hx,
  parse: Kx,
  library: b0,
  findIconDefinition: yc,
  toHtml: eo
}, Yx = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? ye : n;
  (Object.keys(St.styles).length > 0 || Y.autoFetchSvg) && rn && Y.autoReplaceSvg && ot.dom.i2svg({
    node: r
  });
};
function pl(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return eo(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (rn) {
        var r = ye.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function Gx(e) {
  var t = e.children, n = e.main, r = e.mask, i = e.attributes, a = e.styles, o = e.transform;
  if (Ed(o) && n.found && !r.found) {
    var s = n.width, l = n.height, u = {
      x: s / l / 2,
      y: 0.5
    };
    i.style = cl(z(z({}, a), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function Qx(e) {
  var t = e.prefix, n = e.iconName, r = e.children, i = e.attributes, a = e.symbol, o = a === !0 ? "".concat(t, "-").concat(Y.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: z(z({}, i), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function kd(e) {
  var t = e.icons, n = t.main, r = t.mask, i = e.prefix, a = e.iconName, o = e.transform, s = e.symbol, l = e.title, u = e.maskId, c = e.titleId, p = e.extra, d = e.watchable, g = d === void 0 ? !1 : d, w = r.found ? r : n, x = w.width, v = w.height, m = i === "fak", h = [Y.replacementClass, a ? "".concat(Y.cssPrefix, "-").concat(a) : ""].filter(function(S) {
    return p.classes.indexOf(S) === -1;
  }).filter(function(S) {
    return S !== "" || !!S;
  }).concat(p.classes).join(" "), E = {
    children: [],
    attributes: z(z({}, p.attributes), {}, {
      "data-prefix": i,
      "data-icon": a,
      class: h,
      role: p.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(x, " ").concat(v)
    })
  }, b = m && !~p.classes.indexOf("fa-fw") ? {
    width: "".concat(x / v * 16 * 0.0625, "em")
  } : {};
  g && (E.attributes[ar] = ""), l && (E.children.push({
    tag: "title",
    attributes: {
      id: E.attributes["aria-labelledby"] || "title-".concat(c || Ea())
    },
    children: [l]
  }), delete E.attributes.title);
  var O = z(z({}, E), {}, {
    prefix: i,
    iconName: a,
    main: n,
    mask: r,
    maskId: u,
    transform: o,
    symbol: s,
    styles: z(z({}, b), p.styles)
  }), k = r.found && n.found ? Jt("generateAbstractMask", O) || {
    children: [],
    attributes: {}
  } : Jt("generateAbstractIcon", O) || {
    children: [],
    attributes: {}
  }, A = k.children, C = k.attributes;
  return O.children = A, O.attributes = C, s ? Qx(O) : Gx(O);
}
function ch(e) {
  var t = e.content, n = e.width, r = e.height, i = e.transform, a = e.title, o = e.extra, s = e.watchable, l = s === void 0 ? !1 : s, u = z(z(z({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (u[ar] = "");
  var c = z({}, o.styles);
  Ed(i) && (c.transform = Px({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  var p = cl(c);
  p.length > 0 && (u.style = p);
  var d = [];
  return d.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), a && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), d;
}
function Xx(e) {
  var t = e.content, n = e.title, r = e.extra, i = z(z(z({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = cl(r.styles);
  a.length > 0 && (i.style = a);
  var o = [];
  return o.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
var pu = St.styles;
function bc(e) {
  var t = e[0], n = e[1], r = e.slice(4), i = hd(r, 1), a = i[0], o = null;
  return Array.isArray(a) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(Y.cssPrefix, "-").concat(Xn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Y.cssPrefix, "-").concat(Xn.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Y.cssPrefix, "-").concat(Xn.PRIMARY),
        fill: "currentColor",
        d: a[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: a
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: o
  };
}
var qx = {
  found: !1,
  width: 512,
  height: 512
};
function Zx(e, t) {
  !a0 && !Y.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function wc(e, t) {
  var n = t;
  return t === "fa" && Y.styleDefault !== null && (t = Nn()), new Promise(function(r, i) {
    if (Jt("missingIconAbstract"), n === "fa") {
      var a = y0(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && pu[t] && pu[t][e]) {
      var o = pu[t][e];
      return r(bc(o));
    }
    Zx(e, t), r(z(z({}, qx), {}, {
      icon: Y.showMissingIcons && e ? Jt("missingIconAbstract") || {} : {}
    }));
  });
}
var fh = function() {
}, Ec = Y.measurePerformance && _o && _o.mark && _o.measure ? _o : {
  mark: fh,
  measure: fh
}, Di = 'FA "6.5.2"', Jx = function(t) {
  return Ec.mark("".concat(Di, " ").concat(t, " begins")), function() {
    return w0(t);
  };
}, w0 = function(t) {
  Ec.mark("".concat(Di, " ").concat(t, " ends")), Ec.measure("".concat(Di, " ").concat(t), "".concat(Di, " ").concat(t, " begins"), "".concat(Di, " ").concat(t, " ends"));
}, Sd = {
  begin: Jx,
  end: w0
}, Zo = function() {
};
function dh(e) {
  var t = e.getAttribute ? e.getAttribute(ar) : null;
  return typeof t == "string";
}
function eO(e) {
  var t = e.getAttribute ? e.getAttribute(gd) : null, n = e.getAttribute ? e.getAttribute(yd) : null;
  return t && n;
}
function tO(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(Y.replacementClass);
}
function nO() {
  if (Y.autoReplaceSvg === !0)
    return Jo.replace;
  var e = Jo[Y.autoReplaceSvg];
  return e || Jo.replace;
}
function rO(e) {
  return ye.createElementNS("http://www.w3.org/2000/svg", e);
}
function iO(e) {
  return ye.createElement(e);
}
function E0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? rO : iO : n;
  if (typeof e == "string")
    return ye.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    i.setAttribute(o, e.attributes[o]);
  });
  var a = e.children || [];
  return a.forEach(function(o) {
    i.appendChild(E0(o, {
      ceFn: r
    }));
  }), i;
}
function aO(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var Jo = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(i) {
        n.parentNode.insertBefore(E0(i), n);
      }), n.getAttribute(ar) === null && Y.keepOriginalSource) {
        var r = ye.createComment(aO(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~wd(n).indexOf(Y.replacementClass))
      return Jo.replace(t);
    var i = new RegExp("".concat(Y.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var a = r[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === Y.replacementClass || l.match(i) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", a.toNode.join(" "));
    }
    var o = r.map(function(s) {
      return eo(s);
    }).join(`
`);
    n.setAttribute(ar, ""), n.innerHTML = o;
  }
};
function ph(e) {
  e();
}
function x0(e, t) {
  var n = typeof t == "function" ? t : Zo;
  if (e.length === 0)
    n();
  else {
    var r = ph;
    Y.mutateApproach === cx && (r = jn.requestAnimationFrame || ph), r(function() {
      var i = nO(), a = Sd.begin("mutate");
      e.map(i), a(), n();
    });
  }
}
var Pd = !1;
function O0() {
  Pd = !0;
}
function xc() {
  Pd = !1;
}
var Ns = null;
function mh(e) {
  if (rh && Y.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? Zo : t, r = e.nodeCallback, i = r === void 0 ? Zo : r, a = e.pseudoElementsCallback, o = a === void 0 ? Zo : a, s = e.observeMutationsRoot, l = s === void 0 ? ye : s;
    Ns = new rh(function(u) {
      if (!Pd) {
        var c = Nn();
        ci(u).forEach(function(p) {
          if (p.type === "childList" && p.addedNodes.length > 0 && !dh(p.addedNodes[0]) && (Y.searchPseudoElements && o(p.target), n(p.target)), p.type === "attributes" && p.target.parentNode && Y.searchPseudoElements && o(p.target.parentNode), p.type === "attributes" && dh(p.target) && ~gx.indexOf(p.attributeName))
            if (p.attributeName === "class" && eO(p.target)) {
              var d = dl(wd(p.target)), g = d.prefix, w = d.iconName;
              p.target.setAttribute(gd, g || c), w && p.target.setAttribute(yd, w);
            } else tO(p.target) && i(p.target);
        });
      }
    }), rn && Ns.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function oO() {
  Ns && Ns.disconnect();
}
function sO(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, i) {
    var a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), n;
}
function lO(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", i = dl(wd(e));
  return i.prefix || (i.prefix = Nn()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = $x(i.prefix, e.innerText) || Od(i.prefix, hc(e.innerText))), !i.iconName && Y.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function uO(e) {
  var t = ci(e.attributes).reduce(function(i, a) {
    return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return Y.autoA11y && (n ? t["aria-labelledby"] = "".concat(Y.replacementClass, "-title-").concat(r || Ea()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function cO() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Nt,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function hh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = lO(e), r = n.iconName, i = n.prefix, a = n.rest, o = uO(e), s = gc("parseNodeAttributes", {}, e), l = t.styleParser ? sO(e) : [];
  return z({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: Nt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: l,
      attributes: o
    }
  }, s);
}
var fO = St.styles;
function C0(e) {
  var t = Y.autoReplaceSvg === "nest" ? hh(e, {
    styleParser: !1
  }) : hh(e);
  return ~t.extra.classes.indexOf(o0) ? Jt("generateLayersText", e, t) : Jt("generateSvgReplacementMutation", e, t);
}
var Rn = /* @__PURE__ */ new Set();
bd.map(function(e) {
  Rn.add("fa-".concat(e));
});
Object.keys(ga[ve]).map(Rn.add.bind(Rn));
Object.keys(ga[xe]).map(Rn.add.bind(Rn));
Rn = Za(Rn);
function vh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!rn) return Promise.resolve();
  var n = ye.documentElement.classList, r = function(p) {
    return n.add("".concat(ih, "-").concat(p));
  }, i = function(p) {
    return n.remove("".concat(ih, "-").concat(p));
  }, a = Y.autoFetchSvg ? Rn : bd.map(function(c) {
    return "fa-".concat(c);
  }).concat(Object.keys(fO));
  a.includes("fa") || a.push("fa");
  var o = [".".concat(o0, ":not([").concat(ar, "])")].concat(a.map(function(c) {
    return ".".concat(c, ":not([").concat(ar, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = ci(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  var l = Sd.begin("onTree"), u = s.reduce(function(c, p) {
    try {
      var d = C0(p);
      d && c.push(d);
    } catch (g) {
      a0 || g.name === "MissingIcon" && console.error(g);
    }
    return c;
  }, []);
  return new Promise(function(c, p) {
    Promise.all(u).then(function(d) {
      x0(d, function() {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), l(), c();
      });
    }).catch(function(d) {
      l(), p(d);
    });
  });
}
function dO(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  C0(e).then(function(n) {
    n && x0([n], t);
  });
}
function pO(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : yc(t || {}), i = n.mask;
    return i && (i = (i || {}).icon ? i : yc(i || {})), e(r, z(z({}, n), {}, {
      mask: i
    }));
  };
}
var mO = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, i = r === void 0 ? Nt : r, a = n.symbol, o = a === void 0 ? !1 : a, s = n.mask, l = s === void 0 ? null : s, u = n.maskId, c = u === void 0 ? null : u, p = n.title, d = p === void 0 ? null : p, g = n.titleId, w = g === void 0 ? null : g, x = n.classes, v = x === void 0 ? [] : x, m = n.attributes, h = m === void 0 ? {} : m, E = n.styles, b = E === void 0 ? {} : E;
  if (t) {
    var O = t.prefix, k = t.iconName, A = t.icon;
    return pl(z({
      type: "icon"
    }, t), function() {
      return or("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), Y.autoA11y && (d ? h["aria-labelledby"] = "".concat(Y.replacementClass, "-title-").concat(w || Ea()) : (h["aria-hidden"] = "true", h.focusable = "false")), kd({
        icons: {
          main: bc(A),
          mask: l ? bc(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: O,
        iconName: k,
        transform: z(z({}, Nt), i),
        symbol: o,
        title: d,
        maskId: c,
        titleId: w,
        extra: {
          attributes: h,
          styles: b,
          classes: v
        }
      });
    });
  }
}, hO = {
  mixout: function() {
    return {
      icon: pO(mO)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = vh, n.nodeCallback = dO, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, i = r === void 0 ? ye : r, a = n.callback, o = a === void 0 ? function() {
      } : a;
      return vh(i, o);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var i = r.iconName, a = r.title, o = r.titleId, s = r.prefix, l = r.transform, u = r.symbol, c = r.mask, p = r.maskId, d = r.extra;
      return new Promise(function(g, w) {
        Promise.all([wc(i, s), c.iconName ? wc(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(x) {
          var v = hd(x, 2), m = v[0], h = v[1];
          g([n, kd({
            icons: {
              main: m,
              mask: h
            },
            prefix: s,
            iconName: i,
            transform: l,
            symbol: u,
            maskId: p,
            title: a,
            titleId: o,
            extra: d,
            watchable: !0
          })]);
        }).catch(w);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, i = n.attributes, a = n.main, o = n.transform, s = n.styles, l = cl(s);
      l.length > 0 && (i.style = l);
      var u;
      return Ed(o) && (u = Jt("generateAbstractTransformGrouping", {
        main: a,
        transform: o,
        containerWidth: a.width,
        iconWidth: a.width
      })), r.push(u || a.icon), {
        children: r,
        attributes: i
      };
    };
  }
}, vO = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.classes, a = i === void 0 ? [] : i;
        return pl({
          type: "layer"
        }, function() {
          or("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var o = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(Y.cssPrefix, "-layers")].concat(Za(a)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, gO = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.title, a = i === void 0 ? null : i, o = r.classes, s = o === void 0 ? [] : o, l = r.attributes, u = l === void 0 ? {} : l, c = r.styles, p = c === void 0 ? {} : c;
        return pl({
          type: "counter",
          content: n
        }, function() {
          return or("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Xx({
            content: n.toString(),
            title: a,
            extra: {
              attributes: u,
              styles: p,
              classes: ["".concat(Y.cssPrefix, "-layers-counter")].concat(Za(s))
            }
          });
        });
      }
    };
  }
}, yO = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.transform, a = i === void 0 ? Nt : i, o = r.title, s = o === void 0 ? null : o, l = r.classes, u = l === void 0 ? [] : l, c = r.attributes, p = c === void 0 ? {} : c, d = r.styles, g = d === void 0 ? {} : d;
        return pl({
          type: "text",
          content: n
        }, function() {
          return or("beforeDOMElementCreation", {
            content: n,
            params: r
          }), ch({
            content: n,
            transform: z(z({}, Nt), a),
            title: s,
            extra: {
              attributes: p,
              styles: g,
              classes: ["".concat(Y.cssPrefix, "-layers-text")].concat(Za(u))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var i = r.title, a = r.transform, o = r.extra, s = null, l = null;
      if (n0) {
        var u = parseInt(getComputedStyle(n).fontSize, 10), c = n.getBoundingClientRect();
        s = c.width / u, l = c.height / u;
      }
      return Y.autoA11y && !i && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, ch({
        content: n.innerHTML,
        width: s,
        height: l,
        transform: a,
        title: i,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, bO = new RegExp('"', "ug"), gh = [1105920, 1112319];
function wO(e) {
  var t = e.replace(bO, ""), n = Nx(t, 0), r = n >= gh[0] && n <= gh[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: hc(i ? t[0] : t),
    isSecondary: r || i
  };
}
function yh(e, t) {
  var n = "".concat(ux).concat(t.replace(":", "-"));
  return new Promise(function(r, i) {
    if (e.getAttribute(n) !== null)
      return r();
    var a = ci(e.children), o = a.filter(function(A) {
      return A.getAttribute(mc) === t;
    })[0], s = jn.getComputedStyle(e, t), l = s.getPropertyValue("font-family").match(mx), u = s.getPropertyValue("font-weight"), c = s.getPropertyValue("content");
    if (o && !l)
      return e.removeChild(o), r();
    if (l && c !== "none" && c !== "") {
      var p = s.getPropertyValue("content"), d = ~["Sharp"].indexOf(l[2]) ? xe : ve, g = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? ya[d][l[2].toLowerCase()] : hx[d][u], w = wO(p), x = w.value, v = w.isSecondary, m = l[0].startsWith("FontAwesome"), h = Od(g, x), E = h;
      if (m) {
        var b = Bx(x);
        b.iconName && b.prefix && (h = b.iconName, g = b.prefix);
      }
      if (h && !v && (!o || o.getAttribute(gd) !== g || o.getAttribute(yd) !== E)) {
        e.setAttribute(n, E), o && e.removeChild(o);
        var O = cO(), k = O.extra;
        k.attributes[mc] = t, wc(h, g).then(function(A) {
          var C = kd(z(z({}, O), {}, {
            icons: {
              main: A,
              mask: Cd()
            },
            prefix: g,
            iconName: E,
            extra: k,
            watchable: !0
          })), S = ye.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(S, e.firstChild) : e.appendChild(S), S.outerHTML = C.map(function(N) {
            return eo(N);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function EO(e) {
  return Promise.all([yh(e, "::before"), yh(e, "::after")]);
}
function xO(e) {
  return e.parentNode !== document.head && !~fx.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(mc) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function bh(e) {
  if (rn)
    return new Promise(function(t, n) {
      var r = ci(e.querySelectorAll("*")).filter(xO).map(EO), i = Sd.begin("searchPseudoElements");
      O0(), Promise.all(r).then(function() {
        i(), xc(), t();
      }).catch(function() {
        i(), xc(), n();
      });
    });
}
var OO = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = bh, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, i = r === void 0 ? ye : r;
      Y.searchPseudoElements && bh(i);
    };
  }
}, wh = !1, CO = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          O0(), wh = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        mh(gc("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        oO();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        wh ? xc() : mh(gc("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Eh = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, i) {
    var a = i.toLowerCase().split("-"), o = a[0], s = a.slice(1).join("-");
    if (o && s === "h")
      return r.flipX = !0, r;
    if (o && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (o) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, n);
}, kO = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return Eh(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-transform");
        return i && (n.transform = Eh(i)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, i = n.transform, a = n.containerWidth, o = n.iconWidth, s = {
        transform: "translate(".concat(a / 2, " 256)")
      }, l = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), u = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), c = "rotate(".concat(i.rotate, " 0 0)"), p = {
        transform: "".concat(l, " ").concat(u, " ").concat(c)
      }, d = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, g = {
        outer: s,
        inner: p,
        path: d
      };
      return {
        tag: "g",
        attributes: z({}, g.outer),
        children: [{
          tag: "g",
          attributes: z({}, g.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: z(z({}, r.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
}, mu = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function xh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function SO(e) {
  return e.tag === "g" ? e.children : [e];
}
var PO = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-mask"), a = i ? dl(i.split(" ").map(function(o) {
          return o.trim();
        })) : Cd();
        return a.prefix || (a.prefix = Nn()), n.mask = a, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, i = n.attributes, a = n.main, o = n.mask, s = n.maskId, l = n.transform, u = a.width, c = a.icon, p = o.width, d = o.icon, g = Sx({
        transform: l,
        containerWidth: p,
        iconWidth: u
      }), w = {
        tag: "rect",
        attributes: z(z({}, mu), {}, {
          fill: "white"
        })
      }, x = c.children ? {
        children: c.children.map(xh)
      } : {}, v = {
        tag: "g",
        attributes: z({}, g.inner),
        children: [xh(z({
          tag: c.tag,
          attributes: z(z({}, c.attributes), g.path)
        }, x))]
      }, m = {
        tag: "g",
        attributes: z({}, g.outer),
        children: [v]
      }, h = "mask-".concat(s || Ea()), E = "clip-".concat(s || Ea()), b = {
        tag: "mask",
        attributes: z(z({}, mu), {}, {
          id: h,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [w, m]
      }, O = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: E
          },
          children: SO(d)
        }, b]
      };
      return r.push(O, {
        tag: "rect",
        attributes: z({
          fill: "currentColor",
          "clip-path": "url(#".concat(E, ")"),
          mask: "url(#".concat(h, ")")
        }, mu)
      }), {
        children: r,
        attributes: i
      };
    };
  }
}, _O = {
  provides: function(t) {
    var n = !1;
    jn.matchMedia && (n = jn.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], i = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: z(z({}, i), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = z(z({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: z(z({}, i), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: z(z({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: z(z({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: z(z({}, i), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: z(z({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: z(z({}, i), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: z(z({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, AO = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-symbol"), a = i === null ? !1 : i === "" ? !0 : i;
        return n.symbol = a, n;
      }
    };
  }
}, TO = [Ax, hO, vO, gO, yO, OO, CO, kO, PO, _O, AO];
Ux(TO, {
  mixoutsTo: ot
});
ot.noAuto;
ot.config;
ot.library;
ot.dom;
var Oc = ot.parse;
ot.findIconDefinition;
ot.toHtml;
var IO = ot.icon;
ot.layer;
ot.text;
ot.counter;
function Oh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oh(Object(n), !0).forEach(function(r) {
      Tr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Rs(e) {
  "@babel/helpers - typeof";
  return Rs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rs(e);
}
function Tr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function jO(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function k0(e, t) {
  if (e == null) return {};
  var n = jO(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Cc(e) {
  return NO(e) || RO(e) || FO(e) || DO();
}
function NO(e) {
  if (Array.isArray(e)) return kc(e);
}
function RO(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function FO(e, t) {
  if (e) {
    if (typeof e == "string") return kc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return kc(e, t);
  }
}
function kc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function DO() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LO(e) {
  var t, n = e.beat, r = e.fade, i = e.beatFade, a = e.bounce, o = e.shake, s = e.flash, l = e.spin, u = e.spinPulse, c = e.spinReverse, p = e.pulse, d = e.fixedWidth, g = e.inverse, w = e.border, x = e.listItem, v = e.flip, m = e.size, h = e.rotation, E = e.pull, b = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": i,
    "fa-bounce": a,
    "fa-shake": o,
    "fa-flash": s,
    "fa-spin": l,
    "fa-spin-reverse": c,
    "fa-spin-pulse": u,
    "fa-pulse": p,
    "fa-fw": d,
    "fa-inverse": g,
    "fa-border": w,
    "fa-li": x,
    "fa-flip": v === !0,
    "fa-flip-horizontal": v === "horizontal" || v === "both",
    "fa-flip-vertical": v === "vertical" || v === "both"
  }, Tr(t, "fa-".concat(m), typeof m < "u" && m !== null), Tr(t, "fa-rotate-".concat(h), typeof h < "u" && h !== null && h !== 0), Tr(t, "fa-pull-".concat(E), typeof E < "u" && E !== null), Tr(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(b).map(function(O) {
    return b[O] ? O : null;
  }).filter(function(O) {
    return O;
  });
}
function MO(e) {
  return e = e - 0, e === e;
}
function S0(e) {
  return MO(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var $O = ["style"];
function BO(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function VO(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = S0(n.slice(0, r)), a = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[BO(i)] = a : t[i] = a, t;
  }, {});
}
function P0(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(l) {
    return P0(e, l);
  }), i = Object.keys(t.attributes || {}).reduce(function(l, u) {
    var c = t.attributes[u];
    switch (u) {
      case "class":
        l.attrs.className = c, delete t.attributes.class;
        break;
      case "style":
        l.attrs.style = VO(c);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? l.attrs[u.toLowerCase()] = c : l.attrs[S0(u)] = c;
    }
    return l;
  }, {
    attrs: {}
  }), a = n.style, o = a === void 0 ? {} : a, s = k0(n, $O);
  return i.attrs.style = gn(gn({}, i.attrs.style), o), e.apply(void 0, [t.tag, gn(gn({}, i.attrs), s)].concat(Cc(r)));
}
var _0 = !1;
try {
  _0 = !0;
} catch {
}
function zO() {
  if (!_0 && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Ch(e) {
  if (e && Rs(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Oc.icon)
    return Oc.icon(e);
  if (e === null)
    return null;
  if (e && Rs(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function hu(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Tr({}, e, t) : {};
}
var UO = ["forwardedRef"];
function to(e) {
  var t = e.forwardedRef, n = k0(e, UO), r = n.icon, i = n.mask, a = n.symbol, o = n.className, s = n.title, l = n.titleId, u = n.maskId, c = Ch(r), p = hu("classes", [].concat(Cc(LO(n)), Cc(o.split(" ")))), d = hu("transform", typeof n.transform == "string" ? Oc.transform(n.transform) : n.transform), g = hu("mask", Ch(i)), w = IO(c, gn(gn(gn(gn({}, p), d), g), {}, {
    symbol: a,
    title: s,
    titleId: l,
    maskId: u
  }));
  if (!w)
    return zO("Could not find icon", c), null;
  var x = w.abstract, v = {
    ref: t
  };
  return Object.keys(n).forEach(function(m) {
    to.defaultProps.hasOwnProperty(m) || (v[m] = n[m]);
  }), WO(x[0], v);
}
to.displayName = "FontAwesomeIcon";
to.propTypes = {
  beat: f.bool,
  border: f.bool,
  beatFade: f.bool,
  bounce: f.bool,
  className: f.string,
  fade: f.bool,
  flash: f.bool,
  mask: f.oneOfType([f.object, f.array, f.string]),
  maskId: f.string,
  fixedWidth: f.bool,
  inverse: f.bool,
  flip: f.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: f.oneOfType([f.object, f.array, f.string]),
  listItem: f.bool,
  pull: f.oneOf(["right", "left"]),
  pulse: f.bool,
  rotation: f.oneOf([0, 90, 180, 270]),
  shake: f.bool,
  size: f.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: f.bool,
  spinPulse: f.bool,
  spinReverse: f.bool,
  symbol: f.oneOfType([f.bool, f.string]),
  title: f.string,
  titleId: f.string,
  transform: f.oneOfType([f.string, f.object]),
  swapOpacity: f.bool
};
to.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var WO = P0.bind(null, y.createElement);
function kh() {
  return _.useState(null);
}
const Sh = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function HO(e, t) {
  const n = Sh(e), r = Sh(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function KO(e, t) {
  return _.useMemo(() => HO(e, t), [e, t]);
}
var Ze = "top", mt = "bottom", ht = "right", Je = "left", _d = "auto", no = [Ze, mt, ht, Je], qr = "start", xa = "end", YO = "clippingParents", A0 = "viewport", Ai = "popper", GO = "reference", Ph = /* @__PURE__ */ no.reduce(function(e, t) {
  return e.concat([t + "-" + qr, t + "-" + xa]);
}, []), Ad = /* @__PURE__ */ [].concat(no, [_d]).reduce(function(e, t) {
  return e.concat([t, t + "-" + qr, t + "-" + xa]);
}, []), QO = "beforeRead", XO = "read", qO = "afterRead", ZO = "beforeMain", JO = "main", eC = "afterMain", tC = "beforeWrite", nC = "write", rC = "afterWrite", iC = [QO, XO, qO, ZO, JO, eC, tC, nC, rC];
function Lt(e) {
  return e.split("-")[0];
}
function it(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function sr(e) {
  var t = it(e).Element;
  return e instanceof t || e instanceof Element;
}
function Mt(e) {
  var t = it(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Td(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = it(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var er = Math.max, Fs = Math.min, Zr = Math.round;
function Sc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function T0() {
  return !/^((?!chrome|android).)*safari/i.test(Sc());
}
function Jr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && Mt(e) && (i = e.offsetWidth > 0 && Zr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Zr(r.height) / e.offsetHeight || 1);
  var o = sr(e) ? it(e) : window, s = o.visualViewport, l = !T0() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / i, c = (r.top + (l && s ? s.offsetTop : 0)) / a, p = r.width / i, d = r.height / a;
  return {
    width: p,
    height: d,
    top: c,
    right: u + p,
    bottom: c + d,
    left: u,
    x: u,
    y: c
  };
}
function Id(e) {
  var t = Jr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function I0(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Td(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Fn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function en(e) {
  return it(e).getComputedStyle(e);
}
function aC(e) {
  return ["table", "td", "th"].indexOf(Fn(e)) >= 0;
}
function Bn(e) {
  return ((sr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ml(e) {
  return Fn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Td(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Bn(e)
  );
}
function _h(e) {
  return !Mt(e) || // https://github.com/popperjs/popper-core/issues/837
  en(e).position === "fixed" ? null : e.offsetParent;
}
function oC(e) {
  var t = /firefox/i.test(Sc()), n = /Trident/i.test(Sc());
  if (n && Mt(e)) {
    var r = en(e);
    if (r.position === "fixed")
      return null;
  }
  var i = ml(e);
  for (Td(i) && (i = i.host); Mt(i) && ["html", "body"].indexOf(Fn(i)) < 0; ) {
    var a = en(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ro(e) {
  for (var t = it(e), n = _h(e); n && aC(n) && en(n).position === "static"; )
    n = _h(n);
  return n && (Fn(n) === "html" || Fn(n) === "body" && en(n).position === "static") ? t : n || oC(e) || t;
}
function jd(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zi(e, t, n) {
  return er(e, Fs(t, n));
}
function sC(e, t, n) {
  var r = Zi(e, t, n);
  return r > n ? n : r;
}
function j0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function N0(e) {
  return Object.assign({}, j0(), e);
}
function R0(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var lC = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, N0(typeof t != "number" ? t : R0(t, no));
};
function uC(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Lt(n.placement), l = jd(s), u = [Je, ht].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!a || !o)) {
    var p = lC(i.padding, n), d = Id(a), g = l === "y" ? Ze : Je, w = l === "y" ? mt : ht, x = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], v = o[l] - n.rects.reference[l], m = ro(a), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, E = x / 2 - v / 2, b = p[g], O = h - d[c] - p[w], k = h / 2 - d[c] / 2 + E, A = Zi(b, k, O), C = l;
    n.modifiersData[r] = (t = {}, t[C] = A, t.centerOffset = A - k, t);
  }
}
function cC(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || I0(t.elements.popper, i) && (t.elements.arrow = i));
}
const fC = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: uC,
  effect: cC,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ei(e) {
  return e.split("-")[1];
}
var dC = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function pC(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Zr(n * i) / i || 0,
    y: Zr(r * i) / i || 0
  };
}
function Ah(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, d = o.x, g = d === void 0 ? 0 : d, w = o.y, x = w === void 0 ? 0 : w, v = typeof c == "function" ? c({
    x: g,
    y: x
  }) : {
    x: g,
    y: x
  };
  g = v.x, x = v.y;
  var m = o.hasOwnProperty("x"), h = o.hasOwnProperty("y"), E = Je, b = Ze, O = window;
  if (u) {
    var k = ro(n), A = "clientHeight", C = "clientWidth";
    if (k === it(n) && (k = Bn(n), en(k).position !== "static" && s === "absolute" && (A = "scrollHeight", C = "scrollWidth")), k = k, i === Ze || (i === Je || i === ht) && a === xa) {
      b = mt;
      var S = p && k === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[A]
      );
      x -= S - r.height, x *= l ? 1 : -1;
    }
    if (i === Je || (i === Ze || i === mt) && a === xa) {
      E = ht;
      var N = p && k === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[C]
      );
      g -= N - r.width, g *= l ? 1 : -1;
    }
  }
  var G = Object.assign({
    position: s
  }, u && dC), B = c === !0 ? pC({
    x: g,
    y: x
  }, it(n)) : {
    x: g,
    y: x
  };
  if (g = B.x, x = B.y, l) {
    var j;
    return Object.assign({}, G, (j = {}, j[b] = h ? "0" : "", j[E] = m ? "0" : "", j.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + x + "px)" : "translate3d(" + g + "px, " + x + "px, 0)", j));
  }
  return Object.assign({}, G, (t = {}, t[b] = h ? x + "px" : "", t[E] = m ? g + "px" : "", t.transform = "", t));
}
function mC(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: Lt(t.placement),
    variation: ei(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ah(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ah(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const hC = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: mC,
  data: {}
};
var Lo = {
  passive: !0
};
function vC(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, l = it(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Lo);
  }), s && l.addEventListener("resize", n.update, Lo), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Lo);
    }), s && l.removeEventListener("resize", n.update, Lo);
  };
}
const gC = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: vC,
  data: {}
};
var yC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function es(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return yC[t];
  });
}
var bC = {
  start: "end",
  end: "start"
};
function Th(e) {
  return e.replace(/start|end/g, function(t) {
    return bC[t];
  });
}
function Nd(e) {
  var t = it(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Rd(e) {
  return Jr(Bn(e)).left + Nd(e).scrollLeft;
}
function wC(e, t) {
  var n = it(e), r = Bn(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = T0();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + Rd(e),
    y: l
  };
}
function EC(e) {
  var t, n = Bn(e), r = Nd(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = er(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = er(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -r.scrollLeft + Rd(e), l = -r.scrollTop;
  return en(i || n).direction === "rtl" && (s += er(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function Fd(e) {
  var t = en(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function F0(e) {
  return ["html", "body", "#document"].indexOf(Fn(e)) >= 0 ? e.ownerDocument.body : Mt(e) && Fd(e) ? e : F0(ml(e));
}
function Ji(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = F0(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = it(r), o = i ? [a].concat(a.visualViewport || [], Fd(r) ? r : []) : r, s = t.concat(o);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ji(ml(o)))
  );
}
function Pc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function xC(e, t) {
  var n = Jr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ih(e, t, n) {
  return t === A0 ? Pc(wC(e, n)) : sr(t) ? xC(t, n) : Pc(EC(Bn(e)));
}
function OC(e) {
  var t = Ji(ml(e)), n = ["absolute", "fixed"].indexOf(en(e).position) >= 0, r = n && Mt(e) ? ro(e) : e;
  return sr(r) ? t.filter(function(i) {
    return sr(i) && I0(i, r) && Fn(i) !== "body";
  }) : [];
}
function CC(e, t, n, r) {
  var i = t === "clippingParents" ? OC(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(l, u) {
    var c = Ih(e, u, r);
    return l.top = er(c.top, l.top), l.right = Fs(c.right, l.right), l.bottom = Fs(c.bottom, l.bottom), l.left = er(c.left, l.left), l;
  }, Ih(e, o, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function D0(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Lt(r) : null, a = r ? ei(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case Ze:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case mt:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case ht:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Je:
      l = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? jd(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case qr:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case xa:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Oa(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, l = s === void 0 ? YO : s, u = n.rootBoundary, c = u === void 0 ? A0 : u, p = n.elementContext, d = p === void 0 ? Ai : p, g = n.altBoundary, w = g === void 0 ? !1 : g, x = n.padding, v = x === void 0 ? 0 : x, m = N0(typeof v != "number" ? v : R0(v, no)), h = d === Ai ? GO : Ai, E = e.rects.popper, b = e.elements[w ? h : d], O = CC(sr(b) ? b : b.contextElement || Bn(e.elements.popper), l, c, o), k = Jr(e.elements.reference), A = D0({
    reference: k,
    element: E,
    strategy: "absolute",
    placement: i
  }), C = Pc(Object.assign({}, E, A)), S = d === Ai ? C : k, N = {
    top: O.top - S.top + m.top,
    bottom: S.bottom - O.bottom + m.bottom,
    left: O.left - S.left + m.left,
    right: S.right - O.right + m.right
  }, G = e.modifiersData.offset;
  if (d === Ai && G) {
    var B = G[i];
    Object.keys(N).forEach(function(j) {
      var L = [ht, mt].indexOf(j) >= 0 ? 1 : -1, D = [Ze, mt].indexOf(j) >= 0 ? "y" : "x";
      N[j] += B[D] * L;
    });
  }
  return N;
}
function kC(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Ad : l, c = ei(r), p = c ? s ? Ph : Ph.filter(function(w) {
    return ei(w) === c;
  }) : no, d = p.filter(function(w) {
    return u.indexOf(w) >= 0;
  });
  d.length === 0 && (d = p);
  var g = d.reduce(function(w, x) {
    return w[x] = Oa(e, {
      placement: x,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[Lt(x)], w;
  }, {});
  return Object.keys(g).sort(function(w, x) {
    return g[w] - g[x];
  });
}
function SC(e) {
  if (Lt(e) === _d)
    return [];
  var t = es(e);
  return [Th(e), t, Th(t)];
}
function PC(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, p = n.rootBoundary, d = n.altBoundary, g = n.flipVariations, w = g === void 0 ? !0 : g, x = n.allowedAutoPlacements, v = t.options.placement, m = Lt(v), h = m === v, E = l || (h || !w ? [es(v)] : SC(v)), b = [v].concat(E).reduce(function(H, U) {
      return H.concat(Lt(U) === _d ? kC(t, {
        placement: U,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: w,
        allowedAutoPlacements: x
      }) : U);
    }, []), O = t.rects.reference, k = t.rects.popper, A = /* @__PURE__ */ new Map(), C = !0, S = b[0], N = 0; N < b.length; N++) {
      var G = b[N], B = Lt(G), j = ei(G) === qr, L = [Ze, mt].indexOf(B) >= 0, D = L ? "width" : "height", K = Oa(t, {
        placement: G,
        boundary: c,
        rootBoundary: p,
        altBoundary: d,
        padding: u
      }), Z = L ? j ? ht : Je : j ? mt : Ze;
      O[D] > k[D] && (Z = es(Z));
      var re = es(Z), J = [];
      if (a && J.push(K[B] <= 0), s && J.push(K[Z] <= 0, K[re] <= 0), J.every(function(H) {
        return H;
      })) {
        S = G, C = !1;
        break;
      }
      A.set(G, J);
    }
    if (C)
      for (var se = w ? 3 : 1, P = function(U) {
        var te = b.find(function(ee) {
          var ne = A.get(ee);
          if (ne)
            return ne.slice(0, U).every(function(ie) {
              return ie;
            });
        });
        if (te)
          return S = te, "break";
      }, I = se; I > 0; I--) {
        var F = P(I);
        if (F === "break") break;
      }
    t.placement !== S && (t.modifiersData[r]._skip = !0, t.placement = S, t.reset = !0);
  }
}
const _C = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: PC,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function jh(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Nh(e) {
  return [Ze, ht, mt, Je].some(function(t) {
    return e[t] >= 0;
  });
}
function AC(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Oa(t, {
    elementContext: "reference"
  }), s = Oa(t, {
    altBoundary: !0
  }), l = jh(o, r), u = jh(s, i, a), c = Nh(l), p = Nh(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": p
  });
}
const TC = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: AC
};
function IC(e, t, n) {
  var r = Lt(e), i = [Je, Ze].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = a[0], s = a[1];
  return o = o || 0, s = (s || 0) * i, [Je, ht].indexOf(r) >= 0 ? {
    x: s,
    y: o
  } : {
    x: o,
    y: s
  };
}
function jC(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = Ad.reduce(function(c, p) {
    return c[p] = IC(p, t.rects, a), c;
  }, {}), s = o[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o;
}
const NC = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: jC
};
function RC(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = D0({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const FC = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: RC,
  data: {}
};
function DC(e) {
  return e === "x" ? "y" : "x";
}
function LC(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, p = n.padding, d = n.tether, g = d === void 0 ? !0 : d, w = n.tetherOffset, x = w === void 0 ? 0 : w, v = Oa(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), m = Lt(t.placement), h = ei(t.placement), E = !h, b = jd(m), O = DC(b), k = t.modifiersData.popperOffsets, A = t.rects.reference, C = t.rects.popper, S = typeof x == "function" ? x(Object.assign({}, t.rects, {
    placement: t.placement
  })) : x, N = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), G = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
    x: 0,
    y: 0
  };
  if (k) {
    if (a) {
      var j, L = b === "y" ? Ze : Je, D = b === "y" ? mt : ht, K = b === "y" ? "height" : "width", Z = k[b], re = Z + v[L], J = Z - v[D], se = g ? -C[K] / 2 : 0, P = h === qr ? A[K] : C[K], I = h === qr ? -C[K] : -A[K], F = t.elements.arrow, H = g && F ? Id(F) : {
        width: 0,
        height: 0
      }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : j0(), te = U[L], ee = U[D], ne = Zi(0, A[K], H[K]), ie = E ? A[K] / 2 - se - ne - te - N.mainAxis : P - ne - te - N.mainAxis, de = E ? -A[K] / 2 + se + ne + ee + N.mainAxis : I + ne + ee + N.mainAxis, pe = t.elements.arrow && ro(t.elements.arrow), je = pe ? b === "y" ? pe.clientTop || 0 : pe.clientLeft || 0 : 0, et = (j = G == null ? void 0 : G[b]) != null ? j : 0, At = Z + ie - et - je, Bt = Z + de - et, hr = Zi(g ? Fs(re, At) : re, Z, g ? er(J, Bt) : J);
      k[b] = hr, B[b] = hr - Z;
    }
    if (s) {
      var sn, Q = b === "x" ? Ze : Je, yt = b === "x" ? mt : ht, Ke = k[O], tt = O === "y" ? "height" : "width", co = Ke + v[Q], hi = Ke - v[yt], vr = [Ze, Je].indexOf(m) !== -1, fo = (sn = G == null ? void 0 : G[O]) != null ? sn : 0, po = vr ? co : Ke - A[tt] - C[tt] - fo + N.altAxis, mo = vr ? Ke + A[tt] + C[tt] - fo - N.altAxis : hi, vi = g && vr ? sC(po, Ke, mo) : Zi(g ? po : co, Ke, g ? mo : hi);
      k[O] = vi, B[O] = vi - Ke;
    }
    t.modifiersData[r] = B;
  }
}
const MC = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: LC,
  requiresIfExists: ["offset"]
};
function $C(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function BC(e) {
  return e === it(e) || !Mt(e) ? Nd(e) : $C(e);
}
function VC(e) {
  var t = e.getBoundingClientRect(), n = Zr(t.width) / e.offsetWidth || 1, r = Zr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function zC(e, t, n) {
  n === void 0 && (n = !1);
  var r = Mt(t), i = Mt(t) && VC(t), a = Bn(t), o = Jr(e, i, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Fn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fd(a)) && (s = BC(t)), Mt(t) ? (l = Jr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Rd(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function UC(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    n.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    o.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && i(l);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || i(a);
  }), r;
}
function WC(e) {
  var t = UC(e);
  return iC.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function HC(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function KC(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Rh = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Fh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function YC(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Rh : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Rh, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], d = !1, g = {
      state: c,
      setOptions: function(m) {
        var h = typeof m == "function" ? m(c.options) : m;
        x(), c.options = Object.assign({}, a, c.options, h), c.scrollParents = {
          reference: sr(s) ? Ji(s) : s.contextElement ? Ji(s.contextElement) : [],
          popper: Ji(l)
        };
        var E = WC(KC([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = E.filter(function(b) {
          return b.enabled;
        }), w(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var m = c.elements, h = m.reference, E = m.popper;
          if (Fh(h, E)) {
            c.rects = {
              reference: zC(h, ro(E), c.options.strategy === "fixed"),
              popper: Id(E)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(N) {
              return c.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var b = 0; b < c.orderedModifiers.length; b++) {
              if (c.reset === !0) {
                c.reset = !1, b = -1;
                continue;
              }
              var O = c.orderedModifiers[b], k = O.fn, A = O.options, C = A === void 0 ? {} : A, S = O.name;
              typeof k == "function" && (c = k({
                state: c,
                options: C,
                name: S,
                instance: g
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: HC(function() {
        return new Promise(function(v) {
          g.forceUpdate(), v(c);
        });
      }),
      destroy: function() {
        x(), d = !0;
      }
    };
    if (!Fh(s, l))
      return g;
    g.setOptions(u).then(function(v) {
      !d && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function w() {
      c.orderedModifiers.forEach(function(v) {
        var m = v.name, h = v.options, E = h === void 0 ? {} : h, b = v.effect;
        if (typeof b == "function") {
          var O = b({
            state: c,
            name: m,
            instance: g,
            options: E
          }), k = function() {
          };
          p.push(O || k);
        }
      });
    }
    function x() {
      p.forEach(function(v) {
        return v();
      }), p = [];
    }
    return g;
  };
}
var GC = YC({
  defaultModifiers: [TC, FC, hC, gC, NC, _C, MC, fC]
});
function L0() {
  const e = _.useRef(!0), t = _.useRef(() => e.current);
  return _.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function QC(e) {
  const t = L0();
  return [e[0], _.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var Dh = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, XC = {
  name: "applyStyles",
  enabled: !1
}, qC = {
  name: "ariaDescribedBy",
  enabled: !0,
  phase: "afterWrite",
  effect: function(t) {
    var n = t.state;
    return function() {
      var r = n.elements, i = r.reference, a = r.popper;
      if ("removeAttribute" in i) {
        var o = (i.getAttribute("aria-describedby") || "").split(",").filter(function(s) {
          return s.trim() !== a.id;
        });
        o.length ? i.setAttribute("aria-describedby", o.join(",")) : i.removeAttribute("aria-describedby");
      }
    };
  },
  fn: function(t) {
    var n, r = t.state, i = r.elements, a = i.popper, o = i.reference, s = (n = a.getAttribute("role")) == null ? void 0 : n.toLowerCase();
    if (a.id && s === "tooltip" && "setAttribute" in o) {
      var l = o.getAttribute("aria-describedby");
      if (l && l.split(",").indexOf(a.id) !== -1)
        return;
      o.setAttribute("aria-describedby", l ? l + "," + a.id : a.id);
    }
  }
}, ZC = [];
function JC(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, l = r.strategy, u = l === void 0 ? "absolute" : l, c = r.modifiers, p = c === void 0 ? ZC : c, d = ce(r, ["enabled", "placement", "strategy", "modifiers"]), g = _.useRef(), w = _.useCallback(function() {
    var b;
    (b = g.current) == null || b.update();
  }, []), x = _.useCallback(function() {
    var b;
    (b = g.current) == null || b.forceUpdate();
  }, []), v = QC(_.useState({
    placement: s,
    update: w,
    forceUpdate: x,
    attributes: {},
    styles: {
      popper: Dh(u),
      arrow: {}
    }
  })), m = v[0], h = v[1], E = _.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(O) {
        var k = O.state, A = {}, C = {};
        Object.keys(k.elements).forEach(function(S) {
          A[S] = k.styles[S], C[S] = k.attributes[S];
        }), h({
          state: k,
          styles: A,
          attributes: C,
          update: w,
          forceUpdate: x,
          placement: k.placement
        });
      }
    };
  }, [w, x, h]);
  return _.useEffect(function() {
    !g.current || !a || g.current.setOptions({
      placement: s,
      strategy: u,
      modifiers: [].concat(p, [E, XC])
    });
  }, [u, s, E, a]), _.useEffect(function() {
    if (!(!a || e == null || t == null))
      return g.current = GC(e, t, q({}, d, {
        placement: s,
        strategy: u,
        modifiers: [].concat(p, [qC, E])
      })), function() {
        g.current != null && (g.current.destroy(), g.current = void 0, h(function(b) {
          return q({}, b, {
            attributes: {},
            styles: {
              popper: Dh(u)
            }
          });
        }));
      };
  }, [a, e, t]), m;
}
function M0(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const ek = !!(typeof window < "u" && window.document && window.document.createElement);
var _c = !1, Ac = !1;
try {
  var vu = {
    get passive() {
      return _c = !0;
    },
    get once() {
      return Ac = _c = !0;
    }
  };
  ek && (window.addEventListener("test", vu, vu), window.removeEventListener("test", vu, !0));
} catch {
}
function tk(e, t, n, r) {
  if (r && typeof r != "boolean" && !Ac) {
    var i = r.once, a = r.capture, o = n;
    !Ac && i && (o = n.__once || function s(l) {
      this.removeEventListener(t, s, a), n.call(this, l);
    }, n.__once = o), e.addEventListener(t, o, _c ? r : a);
  }
  e.addEventListener(t, n, r);
}
function nk(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function Ir(e, t, n, r) {
  return tk(e, t, n, r), function() {
    nk(e, t, n, r);
  };
}
function rk(e) {
  const t = _.useRef(e);
  return _.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function Tc(e) {
  const t = rk(e);
  return _.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
var ik = function() {
}, ak = ik;
const ok = /* @__PURE__ */ Wa(ak);
function Dd(e) {
  return e && e.ownerDocument || document;
}
function Ds(e) {
  return e && "setState" in e ? Pr.findDOMNode(e) : e ?? null;
}
const sk = function(e) {
  return Dd(Ds(e));
};
var lk = 27, Lh = function() {
};
function uk(e) {
  return e.button === 0;
}
function ck(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Mh = function(t) {
  return t && ("current" in t ? t.current : t);
};
function fk(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = _.useRef(!1), l = t || Lh, u = _.useCallback(function(d) {
    var g, w = Mh(e);
    ok(!!w, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !w || ck(d) || !uk(d) || !!M0(w, (g = d.composedPath == null ? void 0 : d.composedPath()[0]) != null ? g : d.target);
  }, [e]), c = Tc(function(d) {
    s.current || l(d);
  }), p = Tc(function(d) {
    d.keyCode === lk && l(d);
  });
  _.useEffect(function() {
    if (!(i || e == null)) {
      var d = window.event, g = sk(Mh(e)), w = Ir(g, o, u, !0), x = Ir(g, o, function(h) {
        if (h === d) {
          d = void 0;
          return;
        }
        c(h);
      }), v = Ir(g, "keyup", function(h) {
        if (h === d) {
          d = void 0;
          return;
        }
        p(h);
      }), m = [];
      return "ontouchstart" in g.documentElement && (m = [].slice.call(g.body.children).map(function(h) {
        return Ir(h, "mousemove", Lh);
      })), function() {
        w(), x(), v(), m.forEach(function(h) {
          return h();
        });
      };
    }
  }, [e, i, o, u, c, p]);
}
var gu = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? Dd().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function $h(e, t) {
  var n = _.useState(function() {
    return gu(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var a = gu(e);
    a && i(a);
  }
  return _.useEffect(function() {
  }, [t, r]), _.useEffect(function() {
    var o = gu(e);
    o !== r && i(o);
  }, [e, r]), r;
}
function dk(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function pk(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function mk(e) {
  var t, n, r, i, a = e.enabled, o = e.enableEvents, s = e.placement, l = e.flip, u = e.offset, c = e.fixed, p = e.containerPadding, d = e.arrowElement, g = e.popperConfig, w = g === void 0 ? {} : g, x = dk(w.modifiers);
  return q({}, w, {
    placement: s,
    enabled: a,
    strategy: c ? "fixed" : w.strategy,
    modifiers: pk(q({}, x, {
      eventListeners: {
        enabled: o
      },
      preventOverflow: q({}, x.preventOverflow, {
        options: p ? q({
          padding: p
        }, (t = x.preventOverflow) == null ? void 0 : t.options) : (n = x.preventOverflow) == null ? void 0 : n.options
      }),
      offset: {
        options: q({
          offset: u
        }, (r = x.offset) == null ? void 0 : r.options)
      },
      arrow: q({}, x.arrow, {
        enabled: !!d,
        options: q({}, (i = x.arrow) == null ? void 0 : i.options, {
          element: d
        })
      }),
      flip: q({
        enabled: !!l
      }, x.flip)
    }))
  });
}
var Ld = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, l = s === void 0 ? {} : s, u = e.transition, c = kh(), p = c[0], d = c[1], g = kh(), w = g[0], x = g[1], v = KO(d, t), m = $h(e.container), h = $h(e.target), E = _.useState(!e.show), b = E[0], O = E[1], k = JC(h, p, mk({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: o || 5,
    flip: n,
    offset: r,
    arrowElement: w,
    popperConfig: l
  })), A = k.styles, C = k.attributes, S = ce(k, ["styles", "attributes"]);
  e.show ? b && O(!1) : !e.transition && !b && O(!0);
  var N = function() {
    O(!0), e.onExited && e.onExited.apply(e, arguments);
  }, G = e.show || u && !b;
  if (fk(p, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !G)
    return null;
  var B = e.children(q({}, S, {
    show: !!e.show,
    props: q({}, C.popper, {
      style: A.popper,
      ref: v
    }),
    arrowProps: q({}, C.arrow, {
      style: A.arrow,
      ref: x
    })
  }));
  if (u) {
    var j = e.onExit, L = e.onExiting, D = e.onEnter, K = e.onEntering, Z = e.onEntered;
    B = /* @__PURE__ */ y.createElement(u, {
      in: e.show,
      appear: !0,
      onExit: j,
      onExiting: L,
      onExited: N,
      onEnter: D,
      onEntering: K,
      onEntered: Z
    }, B);
  }
  return m ? /* @__PURE__ */ Pr.createPortal(B, m) : null;
});
Ld.displayName = "Overlay";
Ld.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: f.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: f.oneOf(Ad),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: f.any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: f.any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: f.bool,
  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: f.func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: f.number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: f.object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: f.bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: f.oneOf(["click", "mousedown"]),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: f.bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    if (t.rootClose) {
      var a;
      return (a = f.func).isRequired.apply(a, [t].concat(r));
    }
    return f.func.apply(f, [t].concat(r));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: f.elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: f.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: f.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: f.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: f.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: f.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: f.func
};
function yu(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function bu(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, a = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: a
  };
}
function hk() {
  var e = _.useRef(null), t = _.useRef(null), n = _.useRef(null), r = we(void 0, "popover"), i = we(void 0, "dropdown-menu"), a = _.useCallback(function(u) {
    !u || !(yu(u, r) || yu(u, i)) || (t.current = bu(u), u.style.margin = "0", e.current = u);
  }, [r, i]), o = _.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(c) {
          var p = c.placement;
          if (!t.current) return [0, 0];
          var d = t.current, g = d.top, w = d.left, x = d.bottom, v = d.right;
          switch (p.split("-")[0]) {
            case "top":
              return [0, x];
            case "left":
              return [0, v];
            case "bottom":
              return [0, g];
            case "right":
              return [0, w];
            default:
              return [0, 0];
          }
        }
      }
    };
  }, [t]), s = _.useMemo(function() {
    return {
      name: "arrow",
      options: {
        padding: function() {
          if (!n.current)
            return 0;
          var c = n.current, p = c.top, d = c.right, g = p || d;
          return {
            top: g,
            left: g,
            right: g,
            bottom: g
          };
        }
      }
    };
  }, [n]), l = _.useMemo(function() {
    return {
      name: "popoverArrowMargins",
      enabled: !0,
      phase: "main",
      fn: function() {
      },
      requiresIfExists: ["arrow"],
      effect: function(c) {
        var p = c.state;
        if (!(!e.current || !p.elements.arrow || !yu(e.current, r))) {
          if (p.modifiersData["arrow#persistent"]) {
            var d = bu(p.elements.arrow), g = d.top, w = d.right, x = g || w;
            p.modifiersData["arrow#persistent"].padding = {
              top: x,
              left: x,
              right: x,
              bottom: x
            };
          } else
            n.current = bu(p.elements.arrow);
          return p.elements.arrow.style.margin = "0", function() {
            p.elements.arrow && (p.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [a, [o, s, l]];
}
function Ic(e, t) {
  return Ic = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ic(e, t);
}
function $0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ic(e, t);
}
const Bh = {
  disabled: !1
}, B0 = y.createContext(null);
var vk = function(t) {
  return t.scrollTop;
}, Li = "unmounted", Un = "exited", fn = "entering", Wn = "entered", jc = "exiting", an = /* @__PURE__ */ function(e) {
  $0(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, s = o && !o.isMounting ? r.enter : r.appear, l;
    return a.appearStatus = null, r.in ? s ? (l = Un, a.appearStatus = fn) : l = Wn : r.unmountOnExit || r.mountOnEnter ? l = Li : l = Un, a.state = {
      status: l
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === Li ? {
      status: Un
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== fn && o !== Wn && (a = fn) : (o === fn || o === Wn) && (a = jc);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, o, s;
    return a = o = s = i, i != null && typeof i != "number" && (a = i.exit, o = i.enter, s = i.appear !== void 0 ? i.appear : o), {
      exit: a,
      enter: o,
      appear: s
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === fn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : Pr.findDOMNode(this);
          o && vk(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Un && this.setState({
      status: Li
    });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, s = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [s] : [Pr.findDOMNode(this), s], u = l[0], c = l[1], p = this.getTimeouts(), d = s ? p.appear : p.enter;
    if (!i && !o || Bh.disabled) {
      this.safeSetState({
        status: Wn
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: fn
    }, function() {
      a.props.onEntering(u, c), a.onTransitionEnd(d, function() {
        a.safeSetState({
          status: Wn
        }, function() {
          a.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Pr.findDOMNode(this);
    if (!a || Bh.disabled) {
      this.safeSetState({
        status: Un
      }, function() {
        i.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: jc
    }, function() {
      i.props.onExiting(s), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: Un
        }, function() {
          i.props.onExited(s);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, o = !0;
    return this.nextCallback = function(s) {
      o && (o = !1, a.nextCallback = null, i(s));
    }, this.nextCallback.cancel = function() {
      o = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var o = this.props.nodeRef ? this.props.nodeRef.current : Pr.findDOMNode(this), s = i == null && !this.props.addEndListener;
    if (!o || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [o, this.nextCallback], u = l[0], c = l[1];
      this.props.addEndListener(u, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Li)
      return null;
    var a = this.props, o = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var s = ce(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ y.createElement(B0.Provider, {
        value: null
      }, typeof o == "function" ? o(i, s) : y.cloneElement(y.Children.only(o), s))
    );
  }, t;
}(y.Component);
an.contextType = B0;
an.propTypes = {};
function yr() {
}
an.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: yr,
  onEntering: yr,
  onEntered: yr,
  onExit: yr,
  onExiting: yr,
  onExited: yr
};
an.UNMOUNTED = Li;
an.EXITED = Un;
an.ENTERING = fn;
an.ENTERED = Wn;
an.EXITING = jc;
const gk = an;
function yk(e) {
  var t = Dd(e);
  return t && t.defaultView || window;
}
function bk(e, t) {
  return yk(e).getComputedStyle(e, t);
}
var wk = /([A-Z])/g;
function Ek(e) {
  return e.replace(wk, "-$1").toLowerCase();
}
var xk = /^ms-/;
function Mo(e) {
  return Ek(e).replace(xk, "-ms-");
}
var Ok = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Ck(e) {
  return !!(e && Ok.test(e));
}
function V0(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Mo(t)) || bk(e).getPropertyValue(Mo(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(Mo(i)) : Ck(i) ? r += i + "(" + a + ") " : n += Mo(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
function kk(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function Sk(e) {
  var t = V0(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function Pk(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || kk(e, "transitionend", !0);
  }, t + n), a = Ir(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function _k(e, t, n, r) {
  n == null && (n = Sk(e) || 0);
  var i = Pk(e, n, r), a = Ir(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function Vh(e, t) {
  var n = V0(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function Ak(e, t) {
  var n = Vh(e, "transitionDuration"), r = Vh(e, "transitionDelay"), i = _k(e, function(a) {
    a.target === e && (i(), t(a));
  }, n + r);
}
function Tk(e) {
  e.offsetHeight;
}
var Ik = ["className", "children"], $o, jk = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, Nk = ($o = {}, $o[fn] = "show", $o[Wn] = "show", $o), fi = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = ce(e, Ik), a = _.useCallback(function(o) {
    Tk(o), i.onEnter && i.onEnter(o);
  }, [i]);
  return /* @__PURE__ */ y.createElement(gk, q({
    ref: t,
    addEndListener: Ak
  }, i, {
    onEnter: a
  }), function(o, s) {
    return /* @__PURE__ */ y.cloneElement(r, q({}, s, {
      className: V("fade", n, r.props.className, Nk[o])
    }));
  });
});
fi.defaultProps = jk;
fi.displayName = "Fade";
var Rk = ["children", "transition", "popperConfig"], Fk = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], Dk = {
  transition: fi,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function Lk(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(Ds(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(Ds(i));
  });
}
function z0(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = ce(e, Rk), o = _.useRef({}), s = hk(), l = s[0], u = s[1], c = n === !0 ? fi : n || null;
  return /* @__PURE__ */ y.createElement(Ld, q({}, a, {
    ref: l,
    popperConfig: q({}, i, {
      modifiers: u.concat(i.modifiers || [])
    }),
    transition: c
  }), function(p) {
    var d, g = p.props, w = p.arrowProps, x = p.show, v = p.update;
    p.forceUpdate;
    var m = p.placement, h = p.state, E = ce(p, Fk);
    Lk(g, w);
    var b = Object.assign(o.current, {
      state: h,
      scheduleUpdate: v,
      placement: m,
      outOfBoundaries: (h == null || (d = h.modifiersData.hide) == null ? void 0 : d.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t(q({}, E, g, {
      placement: m,
      show: x
    }, !n && x && {
      className: "show"
    }, {
      popper: b,
      arrowProps: w
    })) : /* @__PURE__ */ y.cloneElement(t, q({}, E, g, {
      placement: m,
      arrowProps: w,
      popper: b,
      className: V(t.props.className, !n && x && "show"),
      style: q({}, t.props.style, g.style)
    }));
  });
}
z0.defaultProps = Dk;
function Mk(e) {
  const t = _.useRef(e);
  return t.current = e, t;
}
function $k(e) {
  const t = Mk(e);
  _.useEffect(() => () => t.current(), []);
}
const Nc = 2 ** 31 - 1;
function U0(e, t, n) {
  const r = n - Date.now();
  e.current = r <= Nc ? setTimeout(t, r) : setTimeout(() => U0(e, t, n), Nc);
}
function Bk() {
  const e = L0(), t = _.useRef();
  return $k(() => clearTimeout(t.current)), _.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, a = 0) {
      e() && (n(), a <= Nc ? t.current = setTimeout(i, a) : U0(t, i, Date.now() + a));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
function zh(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function Vk(e) {
  var t = zk(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function zk(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function W0(e, t, n) {
  var r = _.useRef(e !== void 0), i = _.useState(t), a = i[0], o = i[1], s = e !== void 0, l = r.current;
  return r.current = s, !s && l && a !== t && o(t), [s ? e : a, _.useCallback(function(u) {
    for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++)
      p[d - 1] = arguments[d];
    n && n.apply(void 0, [u].concat(p)), o(u);
  }, [n])];
}
function Uk(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, o = a[zh(r)], s = a[r], l = ce(a, [zh(r), r].map(Vk)), u = t[r], c = W0(s, o, e[u]), p = c[0], d = c[1];
    return q({}, l, (i = {}, i[r] = p, i[u] = d, i));
  }, e);
}
var Wk = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], Hk = /* @__PURE__ */ function(e) {
  $0(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(y.Component);
function Kk(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function Uh(e, t, n) {
  var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
  (!a || a !== i) && !M0(i, a) && e.apply(void 0, t);
}
var Yk = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function H0(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, l = s === void 0 ? !1 : s, u = e.onToggle, c = e.delay, p = e.placement, d = e.flip, g = d === void 0 ? p && p.indexOf("auto") !== -1 : d, w = ce(e, Wk), x = _.useRef(null), v = Bk(), m = _.useRef(""), h = W0(o, l, u), E = h[0], b = h[1], O = Kk(c), k = typeof r != "function" ? y.Children.only(r).props : {}, A = k.onFocus, C = k.onBlur, S = k.onClick, N = _.useCallback(function() {
    return Ds(x.current);
  }, []), G = _.useCallback(function() {
    if (v.clear(), m.current = "show", !O.show) {
      b(!0);
      return;
    }
    v.set(function() {
      m.current === "show" && b(!0);
    }, O.show);
  }, [O.show, b, v]), B = _.useCallback(function() {
    if (v.clear(), m.current = "hide", !O.hide) {
      b(!1);
      return;
    }
    v.set(function() {
      m.current === "hide" && b(!1);
    }, O.hide);
  }, [O.hide, b, v]), j = _.useCallback(function() {
    G();
    for (var se = arguments.length, P = new Array(se), I = 0; I < se; I++)
      P[I] = arguments[I];
    A == null || A.apply(void 0, P);
  }, [G, A]), L = _.useCallback(function() {
    B();
    for (var se = arguments.length, P = new Array(se), I = 0; I < se; I++)
      P[I] = arguments[I];
    C == null || C.apply(void 0, P);
  }, [B, C]), D = _.useCallback(function() {
    b(!E), S && S.apply(void 0, arguments);
  }, [S, b, E]), K = _.useCallback(function() {
    for (var se = arguments.length, P = new Array(se), I = 0; I < se; I++)
      P[I] = arguments[I];
    Uh(G, P, "fromElement");
  }, [G]), Z = _.useCallback(function() {
    for (var se = arguments.length, P = new Array(se), I = 0; I < se; I++)
      P[I] = arguments[I];
    Uh(B, P, "toElement");
  }, [B]), re = t == null ? [] : [].concat(t), J = {};
  return re.indexOf("click") !== -1 && (J.onClick = D), re.indexOf("focus") !== -1 && (J.onFocus = j, J.onBlur = L), re.indexOf("hover") !== -1 && (J.onMouseOver = K, J.onMouseOut = Z), /* @__PURE__ */ y.createElement(y.Fragment, null, typeof r == "function" ? r(q({}, J, {
    ref: x
  })) : /* @__PURE__ */ y.createElement(Hk, {
    ref: x
  }, /* @__PURE__ */ _.cloneElement(r, J)), /* @__PURE__ */ y.createElement(z0, q({}, w, {
    show: E,
    onHide: B,
    flip: g,
    placement: p,
    popperConfig: a,
    target: N
  }), n));
}
H0.defaultProps = Yk;
var K0 = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], Gk = ["hover", "click", "focus"];
function Md(e) {
  return /* @__PURE__ */ y.createElement(H0, e, e.children);
}
var Wh = f.oneOf(Gk);
f.node.isRequired, f.oneOfType([f.elementType, f.func]), f.func, f.func, f.func, f.func, f.func, f.func, f.func, f.oneOf(K0), f.shape({}), f.bool, f.oneOf(["click", "mousedown"]), f.bool, f.oneOfType([f.elementType, f.func]), f.oneOfType([f.object, f.bool]);
Md.propTypes = {
  /** Specifies the content of the `OverlayTrigger`. */
  children: f.oneOfType([f.element, f.func]).isRequired,
  /** An element or text to overlay next to the target. */
  overlay: f.oneOfType([f.element, f.func]).isRequired,
  /** The initial visibility state of the `Overlay`. */
  defaultShow: f.bool,
  /** A millisecond delay amount to show and hide the `Overlay` once triggered. */
  delay: f.oneOfType([f.number, f.shape({})]),
  /** The initial flip state of the `Overlay`. */
  flip: f.bool,
  onHide: f.func,
  /**
   * A callback that fires when the user triggers a change in tooltip visibility.
   * `onToggle` is called with the desired next show, and generally should be
   * passed back to the `show` prop. `onToggle` fires after the configured `delay`.
   *
   * Controls `show`.
   */
  onToggle: f.func,
  /** The placement of the `Overlay` in relation to it's target. */
  placement: f.oneOf(K0),
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popperConfig: f.shape({}),
  /**
   * The visibility of the `Overlay`. `show` is a controlled prop so should
   * be paired with `onToggle` to avoid breaking user interactions.
   *
   * Manually toggling show does not wait for delay to change the visibility.
   *
   * Controls `onToggle`.
   */
  show: f.bool,
  target: f.instanceOf(EventTarget),
  /** Specify which action or actions trigger `Overlay` visibility. */
  trigger: f.oneOfType([Wh, f.arrayOf(Wh)])
};
Md.defaultProps = {
  defaultShow: !1,
  delay: void 0,
  flip: void 0,
  onHide: void 0,
  onToggle: void 0,
  placement: void 0,
  popperConfig: {},
  show: void 0,
  target: void 0,
  trigger: ["hover", "focus"]
};
var Hh = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(a, o, s, l, u) {
      var c = s || "<<anonymous>>", p = u || o;
      if (a[o] == null)
        return new Error("The " + l + " `" + p + "` is required to make " + ("`" + c + "` accessible for users of assistive ") + "technologies such as screen readers.");
      for (var d = arguments.length, g = Array(d > 5 ? d - 5 : 0), w = 5; w < d; w++)
        g[w - 5] = arguments[w];
      return r.apply(void 0, [a, o, s, l, u].concat(g));
    };
  }
  e.exports = t.default;
})(Hh, Hh.exports);
var Qk = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], Xk = {
  placement: "right"
}, hl = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
  e.popper, e.show;
  var l = ce(e, Qk);
  n = we(n, "tooltip");
  var u = (r == null ? void 0 : r.split("-")) || [], c = u[0];
  return /* @__PURE__ */ y.createElement("div", q({
    ref: t,
    style: a,
    role: "tooltip",
    "x-placement": c,
    className: V(i, n, "bs-tooltip-" + c)
  }, l), /* @__PURE__ */ y.createElement("div", q({
    className: "arrow"
  }, s)), /* @__PURE__ */ y.createElement("div", {
    className: n + "-inner"
  }, o));
});
hl.defaultProps = Xk;
hl.displayName = "Tooltip";
function Ca(e) {
  "@babel/helpers - typeof";
  return Ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ca(e);
}
var qk = ["children", "variant"];
function Kh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ls(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kh(Object(n), !0).forEach(function(r) {
      Zk(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Zk(e, t, n) {
  return t = Jk(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Jk(e) {
  var t = eS(e, "string");
  return Ca(t) == "symbol" ? t : t + "";
}
function eS(e, t) {
  if (Ca(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ca(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rc() {
  return Rc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Rc.apply(this, arguments);
}
function tS(e, t) {
  if (e == null) return {};
  var n = nS(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function nS(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var rS = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], Ms = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.variant, i = tS(e, qk);
  return /* @__PURE__ */ y.createElement(hl, Rc({}, i, {
    className: V({
      "tooltip-light": r === "light"
    }, i.className),
    ref: t
  }), n);
});
Ms.propTypes = Ls(Ls({}, hl.propTypes), {}, {
  /** An html id attribute, necessary for accessibility. */
  id: f.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: f.oneOf(rS),
  /**
   * An `Overlay` injected set of props for positioning the `Tooltip` arrow.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  arrowProps: f.shape({
    ref: f.oneOfType([f.func, f.shape({
      current: f.element
    })]),
    style: f.shape({})
  }),
  /** Whether the `Overlay` is shown. */
  show: f.bool,
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popper: f.shape({}),
  /** Overrides underlying component base CSS class name */
  bsPrefix: f.string,
  /** Specifies the content of the `Tooltip` */
  children: f.node,
  /** Specifies class name to append to the base element */
  className: f.string,
  /** The visual style of the `Tooltip` */
  variant: f.string
});
Ms.defaultProps = Ls(Ls({}, Ms.defaultProps), {}, {
  id: void 0,
  placement: "right",
  arrowProps: void 0,
  show: void 0,
  popper: void 0,
  children: void 0,
  className: void 0,
  variant: void 0,
  bsPrefix: "tooltip"
});
function ka(e) {
  "@babel/helpers - typeof";
  return ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ka(e);
}
var iS = ["className", "alt", "invertColors", "icon", "src", "iconClassNames", "onClick", "size", "variant", "iconAs", "isActive"], aS = ["tooltipPlacement", "tooltipContent", "variant", "invertColors"];
function $s() {
  return $s = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $s.apply(this, arguments);
}
function oS(e, t, n) {
  return t = sS(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function sS(e) {
  var t = lS(e, "string");
  return ka(t) == "symbol" ? t : t + "";
}
function lS(e, t) {
  if (ka(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ka(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Y0(e, t) {
  if (e == null) return {};
  var n = uS(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function uS(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var di = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.alt, i = e.invertColors, a = e.icon, o = e.src, s = e.iconClassNames, l = e.onClick, u = e.size, c = e.variant, p = e.iconAs, d = e.isActive, g = Y0(e, iS), w = i ? "inverse-" : "", x = d ? "".concat(c, "-") : "";
  if (!p && !1)
    var v;
  var m = p || to;
  return /* @__PURE__ */ y.createElement("button", $s({
    "aria-label": r,
    className: V("btn-icon", "btn-icon-".concat(w).concat(c), "btn-icon-".concat(u), oS({}, "btn-icon-".concat(w).concat(x, "active"), d), n),
    onClick: l,
    type: "button",
    ref: t
  }, g), /* @__PURE__ */ y.createElement("span", {
    className: "btn-icon__icon-container"
  }, /* @__PURE__ */ y.createElement(m, {
    className: V("btn-icon__icon", s),
    icon: a,
    src: o
  })));
});
di.defaultProps = {
  iconAs: void 0,
  src: null,
  icon: void 0,
  iconClassNames: void 0,
  className: void 0,
  invertColors: !1,
  variant: "primary",
  size: "md",
  onClick: function() {
  },
  isActive: !1
};
di.propTypes = {
  /** A custom class name. */
  className: f.string,
  /** Component that renders the icon, currently defaults to `FontAwesomeIcon`,
   *  but is going to be deprecated soon, please use Paragon's icons instead. */
  iconAs: f.elementType,
  /** An icon component to render. Example import of a Paragon icon component:
   * `import { Check } from '@openedx/paragon/dist/icon';`
   * */
  src: f.oneOfType([f.element, f.elementType]),
  /** Alt text for your icon. For best practice, avoid using alt text to describe
   * the image in the `IconButton`. Instead, we recommend describing the function
   * of the button. */
  alt: f.string.isRequired,
  /** Changes icon styles for dark background */
  invertColors: f.bool,
  /** Accepts a React fontawesome icon. */
  icon: f.shape({
    prefix: f.string,
    iconName: f.string,
    // eslint-disable-next-line react/forbid-prop-types
    icon: f.array
  }),
  /** Extra class names that will be added to the icon */
  iconClassNames: f.string,
  /** Click handler for the button */
  onClick: f.func,
  /** Type of button (uses Bootstrap options) */
  variant: f.oneOf(["primary", "secondary", "success", "warning", "danger", "light", "dark", "black", "brand"]),
  /** size of button to render */
  size: f.oneOf(["sm", "md", "inline"]),
  /** whether to show the `IconButton` in an active state, whose styling is distinct from default state */
  isActive: f.bool
};
function $d(e) {
  var t = e.tooltipPlacement, n = e.tooltipContent, r = e.variant, i = e.invertColors, a = Y0(e, aS), o = i ? "inverse-" : "";
  return /* @__PURE__ */ y.createElement(Md, {
    placement: t,
    overlay: /* @__PURE__ */ y.createElement(Ms, {
      id: "iconbutton-tooltip-".concat(t),
      variant: o ? "light" : ""
    }, n)
  }, /* @__PURE__ */ y.createElement(di, $s({
    variant: r,
    invertColors: i
  }, a)));
}
$d.defaultProps = {
  tooltipPlacement: "top",
  variant: "primary",
  invertColors: !1
};
$d.propTypes = {
  /** tooltip placement can be top, left, right etc, per https://popper.js.org/docs/v2/constructors/#options  */
  tooltipPlacement: f.string,
  /** any valid JSX or text to be rendered as tooltip contents */
  tooltipContent: f.node.isRequired,
  /** Type of button (uses Bootstrap options) */
  variant: f.oneOf(["primary", "secondary", "success", "warning", "danger", "light", "dark", "black", "brand"]),
  /** Changes icon styles for dark background */
  invertColors: f.bool
};
di.IconButtonWithTooltip = $d;
var Bs = function() {
  return Bs = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Bs.apply(this, arguments);
};
function Vs(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function io(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function ao(e, t) {
  var n = t && t.cache ? t.cache : hS, r = t && t.serializer ? t.serializer : mS, i = t && t.strategy ? t.strategy : fS;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function cS(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function G0(e, t, n, r) {
  var i = cS(r) ? r : n(r), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, r), t.set(i, a)), a;
}
function Q0(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, r), t.set(i, a)), a;
}
function Bd(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function fS(e, t) {
  var n = e.length === 1 ? G0 : Q0;
  return Bd(e, this, n, t.cache.create(), t.serializer);
}
function dS(e, t) {
  return Bd(e, this, Q0, t.cache.create(), t.serializer);
}
function pS(e, t) {
  return Bd(e, this, G0, t.cache.create(), t.serializer);
}
var mS = function() {
  return JSON.stringify(arguments);
};
function Vd() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Vd.prototype.get = function(e) {
  return this.cache[e];
};
Vd.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var hS = {
  create: function() {
    return new Vd();
  }
}, oo = {
  variadic: dS,
  monadic: pS
};
function vS(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
ao(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, io([void 0], t, !1)))();
}, {
  strategy: oo.variadic
});
ao(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, io([void 0], t, !1)))();
}, {
  strategy: oo.variadic
});
ao(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, io([void 0], t, !1)))();
}, {
  strategy: oo.variadic
});
ao(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, io([void 0], t, !1)))();
}, {
  strategy: oo.variadic
});
ao(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, io([void 0], t, !1)))();
}, {
  strategy: oo.variadic
});
var gS = function(e) {
}, yS = function(e) {
}, bS = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: gS,
  onWarn: yS
};
function wS(e) {
  vS(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
Bs(Bs({}, bS), { textComponent: _.Fragment });
function Yh(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  var n = Object.keys(e), r = Object.keys(t), i = n.length;
  if (r.length !== i)
    return !1;
  for (var a = 0; a < i; a++) {
    var o = n[a];
    if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o))
      return !1;
  }
  return !0;
}
var X0 = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie = typeof Symbol == "function" && Symbol.for, zd = Ie ? Symbol.for("react.element") : 60103, Ud = Ie ? Symbol.for("react.portal") : 60106, vl = Ie ? Symbol.for("react.fragment") : 60107, gl = Ie ? Symbol.for("react.strict_mode") : 60108, yl = Ie ? Symbol.for("react.profiler") : 60114, bl = Ie ? Symbol.for("react.provider") : 60109, wl = Ie ? Symbol.for("react.context") : 60110, Wd = Ie ? Symbol.for("react.async_mode") : 60111, El = Ie ? Symbol.for("react.concurrent_mode") : 60111, xl = Ie ? Symbol.for("react.forward_ref") : 60112, Ol = Ie ? Symbol.for("react.suspense") : 60113, ES = Ie ? Symbol.for("react.suspense_list") : 60120, Cl = Ie ? Symbol.for("react.memo") : 60115, kl = Ie ? Symbol.for("react.lazy") : 60116, xS = Ie ? Symbol.for("react.block") : 60121, OS = Ie ? Symbol.for("react.fundamental") : 60117, CS = Ie ? Symbol.for("react.responder") : 60118, kS = Ie ? Symbol.for("react.scope") : 60119;
function st(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case zd:
        switch (e = e.type, e) {
          case Wd:
          case El:
          case vl:
          case yl:
          case gl:
          case Ol:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case wl:
              case xl:
              case kl:
              case Cl:
              case bl:
                return e;
              default:
                return t;
            }
        }
      case Ud:
        return t;
    }
  }
}
function q0(e) {
  return st(e) === El;
}
fe.AsyncMode = Wd;
fe.ConcurrentMode = El;
fe.ContextConsumer = wl;
fe.ContextProvider = bl;
fe.Element = zd;
fe.ForwardRef = xl;
fe.Fragment = vl;
fe.Lazy = kl;
fe.Memo = Cl;
fe.Portal = Ud;
fe.Profiler = yl;
fe.StrictMode = gl;
fe.Suspense = Ol;
fe.isAsyncMode = function(e) {
  return q0(e) || st(e) === Wd;
};
fe.isConcurrentMode = q0;
fe.isContextConsumer = function(e) {
  return st(e) === wl;
};
fe.isContextProvider = function(e) {
  return st(e) === bl;
};
fe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zd;
};
fe.isForwardRef = function(e) {
  return st(e) === xl;
};
fe.isFragment = function(e) {
  return st(e) === vl;
};
fe.isLazy = function(e) {
  return st(e) === kl;
};
fe.isMemo = function(e) {
  return st(e) === Cl;
};
fe.isPortal = function(e) {
  return st(e) === Ud;
};
fe.isProfiler = function(e) {
  return st(e) === yl;
};
fe.isStrictMode = function(e) {
  return st(e) === gl;
};
fe.isSuspense = function(e) {
  return st(e) === Ol;
};
fe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === vl || e === El || e === yl || e === gl || e === Ol || e === ES || typeof e == "object" && e !== null && (e.$$typeof === kl || e.$$typeof === Cl || e.$$typeof === bl || e.$$typeof === wl || e.$$typeof === xl || e.$$typeof === OS || e.$$typeof === CS || e.$$typeof === kS || e.$$typeof === xS);
};
fe.typeOf = st;
X0.exports = fe;
var SS = X0.exports, Z0 = SS, PS = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, _S = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, J0 = {};
J0[Z0.ForwardRef] = PS;
J0[Z0.Memo] = _S;
var Hd = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = _.createContext(null)) : _.createContext(null);
Hd.Consumer;
Hd.Provider;
var AS = Hd;
function Sl() {
  var e = _.useContext(AS);
  return wS(e), e;
}
var Fc;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Fc || (Fc = {}));
var Dc;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Dc || (Dc = {}));
function eb(e) {
  var t = function(n) {
    var r = Sl(), i = n.value, a = n.children, o = Vs(n, ["value", "children"]), s = typeof i == "string" ? new Date(i || 0) : i, l = e === "formatDate" ? r.formatDateToParts(s, o) : r.formatTimeToParts(s, o);
    return a(l);
  };
  return t.displayName = Dc[e], t;
}
function so(e) {
  var t = function(n) {
    var r = Sl(), i = n.value, a = n.children, o = Vs(
      n,
      ["value", "children"]
    ), s = r[e](i, o);
    if (typeof a == "function")
      return a(s);
    var l = r.textComponent || _.Fragment;
    return _.createElement(l, null, s);
  };
  return t.displayName = Fc[e], t;
}
function TS(e, t) {
  var n = e.values, r = Vs(e, ["values"]), i = t.values, a = Vs(t, ["values"]);
  return Yh(i, n) && Yh(r, a);
}
function tb(e) {
  var t = Sl(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? _.Fragment : r, a = e.id, o = e.description, s = e.defaultMessage, l = e.values, u = e.children, c = e.tagName, p = c === void 0 ? i : c, d = e.ignoreTag, g = { id: a, description: o, defaultMessage: s }, w = n(g, l, {
    ignoreTag: d
  });
  return typeof u == "function" ? u(Array.isArray(w) ? w : [w]) : p ? _.createElement(p, null, _.Children.toArray(w)) : _.createElement(_.Fragment, null, w);
}
tb.displayName = "FormattedMessage";
var nb = _.memo(tb, TS);
nb.displayName = "MemoizedFormattedMessage";
so("formatDate");
so("formatTime");
so("formatNumber");
so("formatList");
so("formatDisplayName");
eb("formatDate");
eb("formatTime");
function Lc() {
  return Lc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Lc.apply(this, arguments);
}
var IS = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Lc({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
    fill: "currentColor"
  }));
};
function Mc() {
  return Mc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Mc.apply(this, arguments);
}
var jS = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Mc({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
    fill: "currentColor"
  }));
};
function $c() {
  return $c = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $c.apply(this, arguments);
}
var NS = function(t) {
  return /* @__PURE__ */ _.createElement("svg", $c({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
    fill: "currentColor"
  }));
};
function Bc() {
  return Bc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bc.apply(this, arguments);
}
var RS = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Bc({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
    fill: "currentColor"
  }));
};
function Vc() {
  return Vc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vc.apply(this, arguments);
}
var FS = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Vc({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",
    fill: "currentColor"
  }));
};
function zc() {
  return zc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zc.apply(this, arguments);
}
var DS = function(t) {
  return /* @__PURE__ */ _.createElement("svg", zc({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
    fill: "currentColor"
  }));
};
function Uc() {
  return Uc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Uc.apply(this, arguments);
}
var LS = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Uc({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
    fill: "currentColor"
  }));
};
function Wc() {
  return Wc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wc.apply(this, arguments);
}
var MS = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Wc({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
    fill: "currentColor"
  }));
};
function Hc() {
  return Hc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Hc.apply(this, arguments);
}
var $S = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Hc({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ _.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
    fill: "currentColor"
  }));
};
function Sa(e) {
  "@babel/helpers - typeof";
  return Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sa(e);
}
var BS = ["as", "isStacked", "children"];
function Gh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Qh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gh(Object(n), !0).forEach(function(r) {
      VS(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function VS(e, t, n) {
  return t = zS(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function zS(e) {
  var t = US(e, "string");
  return Sa(t) == "symbol" ? t : t + "";
}
function US(e, t) {
  if (Sa(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Sa(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function WS(e, t) {
  if (e == null) return {};
  var n = HS(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function HS(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function lr(e) {
  var t = e.as, n = e.isStacked, r = e.children, i = WS(e, BS);
  return /* @__PURE__ */ y.createElement(t, Qh(Qh({}, i), {}, {
    className: V(i.className, {
      "pgn__action-row": !n,
      "pgn__action-row-stacked": n
    })
  }), r);
}
lr.propTypes = {
  /** Specifies the base element */
  as: f.elementType,
  /** Specifies class name to append to the base element */
  className: f.string,
  /** Specifies the contents of the row */
  children: f.node,
  /** Specifies whether row should be displayed horizontally */
  isStacked: f.bool
};
lr.defaultProps = {
  as: "div",
  className: void 0,
  children: null,
  isStacked: !1
};
function KS() {
  return /* @__PURE__ */ y.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
lr.Spacer = KS;
var YS = ["label", "onClick", "className"], GS = {
  label: f.string.isRequired,
  onClick: f.func
}, QS = {
  label: "Close"
}, Pl = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, a = ce(e, YS);
  return /* @__PURE__ */ y.createElement("button", q({
    ref: t,
    type: "button",
    className: V("close", i),
    onClick: r
  }, a), /* @__PURE__ */ y.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ y.createElement("span", {
    className: "sr-only"
  }, n));
});
Pl.displayName = "CloseButton";
Pl.propTypes = GS;
Pl.defaultProps = QS;
const _l = function(e) {
  return /* @__PURE__ */ y.forwardRef(function(t, n) {
    return /* @__PURE__ */ y.createElement("div", q({}, t, {
      ref: n,
      className: V(t.className, e)
    }));
  });
};
var XS = /-(.)/g;
function qS(e) {
  return e.replace(XS, function(t, n) {
    return n.toUpperCase();
  });
}
var ZS = ["className", "bsPrefix", "as"], JS = function(t) {
  return t[0].toUpperCase() + qS(t).slice(1);
};
function _t(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? JS(e) : r, a = n.Component, o = n.defaultProps, s = /* @__PURE__ */ y.forwardRef(function(l, u) {
    var c = l.className, p = l.bsPrefix, d = l.as, g = d === void 0 ? a || "div" : d, w = ce(l, ZS), x = we(p, e);
    return /* @__PURE__ */ y.createElement(g, q({
      ref: u,
      className: V(c, x)
    }, w));
  });
  return s.defaultProps = o, s.displayName = i, s;
}
var eP = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], rb = _l("h4");
rb.displayName = "DivStyledAsH4";
var tP = _t("alert-heading", {
  Component: rb
}), nP = _t("alert-link", {
  Component: sd
}), rP = {
  show: !0,
  transition: fi,
  closeLabel: "Close alert"
}, on = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = Uk(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, a = n.closeLabel, o = n.className, s = n.children, l = n.variant, u = n.onClose, c = n.dismissible, p = n.transition, d = ce(n, eP), g = we(r, "alert"), w = Tc(function(m) {
    u && u(!1, m);
  }), x = p === !0 ? fi : p, v = /* @__PURE__ */ y.createElement("div", q({
    role: "alert"
  }, x ? void 0 : d, {
    ref: t,
    className: V(o, g, l && g + "-" + l, c && g + "-dismissible")
  }), c && /* @__PURE__ */ y.createElement(Pl, {
    onClick: w,
    label: a
  }), s);
  return x ? /* @__PURE__ */ y.createElement(x, q({
    unmountOnExit: !0
  }, d, {
    ref: void 0,
    in: i
  }), v) : i ? v : null;
});
on.displayName = "Alert";
on.defaultProps = rP;
on.Link = nP;
on.Heading = tP;
var ib = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r(_);
  })(typeof self < "u" ? self : Hb, function(n) {
    return function(r) {
      function i(o) {
        if (a[o]) return a[o].exports;
        var s = a[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return r[o].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
      }
      var a = {};
      return i.m = r, i.c = a, i.d = function(o, s, l) {
        i.o(o, s) || Object.defineProperty(o, s, {
          configurable: !1,
          enumerable: !0,
          get: l
        });
      }, i.n = function(o) {
        var s = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return i.d(s, "a", s), s;
      }, i.o = function(o, s) {
        return Object.prototype.hasOwnProperty.call(o, s);
      }, i.p = "", i(i.s = 7);
    }([function(r, i, a) {
      function o(j, L) {
        return p(j) || c(j, L) || l(j, L) || s();
      }
      function s() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function l(j, L) {
        if (j) {
          if (typeof j == "string") return u(j, L);
          var D = Object.prototype.toString.call(j).slice(8, -1);
          return D === "Object" && j.constructor && (D = j.constructor.name), D === "Map" || D === "Set" ? Array.from(j) : D === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D) ? u(j, L) : void 0;
        }
      }
      function u(j, L) {
        (L == null || L > j.length) && (L = j.length);
        for (var D = 0, K = new Array(L); D < L; D++) K[D] = j[D];
        return K;
      }
      function c(j, L) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(j)) {
          var D = [], K = !0, Z = !1, re = void 0;
          try {
            for (var J, se = j[Symbol.iterator](); !(K = (J = se.next()).done) && (D.push(J.value), !L || D.length !== L); K = !0) ;
          } catch (P) {
            Z = !0, re = P;
          } finally {
            try {
              K || se.return == null || se.return();
            } finally {
              if (Z) throw re;
            }
          }
          return D;
        }
      }
      function p(j) {
        if (Array.isArray(j)) return j;
      }
      var d = a(1), g = a.n(d), w = a(8), x = a.n(w), v = a(2), m = a(10), h = a.n(m), E = a(3), b = a(6), O = function(j) {
        return j.query || Object(E.a)(j);
      }, k = function(j) {
        if (!j) return null;
        var L = Object.keys(j);
        return L.length === 0 ? null : L.reduce(function(D, K) {
          return D[Object(v.a)(K)] = j[K], D;
        }, {});
      }, A = function() {
        var j = g.a.useRef(!1);
        return g.a.useEffect(function() {
          j.current = !0;
        }, []), j.current;
      }, C = function(j) {
        var L = g.a.useContext(b.a), D = function() {
          return k(j) || k(L);
        }, K = g.a.useState(D), Z = o(K, 2), re = Z[0], J = Z[1];
        return g.a.useEffect(function() {
          var se = D();
          h()(re, se) || J(se);
        }, [j, L]), re;
      }, S = function(j) {
        var L = function() {
          return O(j);
        }, D = g.a.useState(L), K = o(D, 2), Z = K[0], re = K[1];
        return g.a.useEffect(function() {
          var J = L();
          Z !== J && re(J);
        }, [j]), Z;
      }, N = function(j, L) {
        var D = function() {
          return x()(j, L || {}, !!L);
        }, K = g.a.useState(D), Z = o(K, 2), re = Z[0], J = Z[1], se = A();
        return g.a.useEffect(function() {
          return se && J(D()), function() {
            re.dispose();
          };
        }, [j, L]), re;
      }, G = function(j) {
        var L = g.a.useState(j.matches), D = o(L, 2), K = D[0], Z = D[1];
        return g.a.useEffect(function() {
          var re = function() {
            Z(j.matches);
          };
          return j.addListener(re), re(), function() {
            j.removeListener(re);
          };
        }, [j]), K;
      }, B = function(j, L, D) {
        var K = C(L), Z = S(j);
        if (!Z) throw new Error("Invalid or missing MediaQuery!");
        var re = N(Z, K), J = G(re), se = A();
        return g.a.useEffect(function() {
          se && D && D(J);
        }, [J]), J;
      };
      i.a = B;
    }, function(r, i) {
      r.exports = n;
    }, function(r, i, a) {
      function o(p) {
        return "-" + p.toLowerCase();
      }
      function s(p) {
        if (c.hasOwnProperty(p)) return c[p];
        var d = p.replace(l, o);
        return c[p] = u.test(d) ? "-" + d : d;
      }
      var l = /[A-Z]/g, u = /^ms-/, c = {};
      i.a = s;
    }, function(r, i, a) {
      var o = a(2), s = a(11), l = function(d) {
        return "not ".concat(d);
      }, u = function(d, g) {
        var w = Object(o.a)(d);
        return typeof g == "number" && (g = "".concat(g, "px")), g === !0 ? w : g === !1 ? l(w) : "(".concat(w, ": ").concat(g, ")");
      }, c = function(d) {
        return d.join(" and ");
      }, p = function(d) {
        var g = [];
        return Object.keys(s.a.all).forEach(function(w) {
          var x = d[w];
          x != null && g.push(u(w, x));
        }), c(g);
      };
      i.a = p;
    }, function(r, i, a) {
      r.exports = a(13);
    }, function(r, i, a) {
      r.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, function(r, i, a) {
      var o = a(1), s = a.n(o), l = s.a.createContext();
      i.a = l;
    }, function(r, i, a) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      });
      var o = a(0), s = a(17), l = a(3), u = a(6);
      a.d(i, "default", function() {
        return s.a;
      }), a.d(i, "useMediaQuery", function() {
        return o.a;
      }), a.d(i, "toQuery", function() {
        return l.a;
      }), a.d(i, "Context", function() {
        return u.a;
      });
    }, function(r, i, a) {
      function o(c, p, d) {
        function g(E) {
          h && h.addListener(E);
        }
        function w(E) {
          h && h.removeListener(E);
        }
        function x(E) {
          m.matches = E.matches, m.media = E.media;
        }
        function v() {
          h && h.removeListener(x);
        }
        var m = this;
        if (u && !d) {
          var h = u.call(window, c);
          this.matches = h.matches, this.media = h.media, h.addListener(x);
        } else this.matches = l(c, p), this.media = c;
        this.addListener = g, this.removeListener = w, this.dispose = v;
      }
      function s(c, p, d) {
        return new o(c, p, d);
      }
      var l = a(9).match, u = typeof window < "u" ? window.matchMedia : null;
      r.exports = s;
    }, function(r, i, a) {
      function o(v, m) {
        return s(v).some(function(h) {
          var E = h.inverse, b = h.type === "all" || m.type === h.type;
          if (b && E || !b && !E) return !1;
          var O = h.expressions.every(function(k) {
            var A = k.feature, C = k.modifier, S = k.value, N = m[A];
            if (!N) return !1;
            switch (A) {
              case "orientation":
              case "scan":
                return N.toLowerCase() === S.toLowerCase();
              case "width":
              case "height":
              case "device-width":
              case "device-height":
                S = c(S), N = c(N);
                break;
              case "resolution":
                S = u(S), N = u(N);
                break;
              case "aspect-ratio":
              case "device-aspect-ratio":
              case "device-pixel-ratio":
                S = l(S), N = l(N);
                break;
              case "grid":
              case "color":
              case "color-index":
              case "monochrome":
                S = parseInt(S, 10) || 1, N = parseInt(N, 10) || 0;
            }
            switch (C) {
              case "min":
                return N >= S;
              case "max":
                return N <= S;
              default:
                return N === S;
            }
          });
          return O && !E || !O && E;
        });
      }
      function s(v) {
        return v.split(",").map(function(m) {
          m = m.trim();
          var h = m.match(p), E = h[1], b = h[2], O = h[3] || "", k = {};
          return k.inverse = !!E && E.toLowerCase() === "not", k.type = b ? b.toLowerCase() : "all", O = O.match(/\([^\)]+\)/g) || [], k.expressions = O.map(function(A) {
            var C = A.match(d), S = C[1].toLowerCase().match(g);
            return {
              modifier: S[1],
              feature: S[2],
              value: C[2]
            };
          }), k;
        });
      }
      function l(v) {
        var m, h = Number(v);
        return h || (m = v.match(/^(\d+)\s*\/\s*(\d+)$/), h = m[1] / m[2]), h;
      }
      function u(v) {
        var m = parseFloat(v);
        switch (String(v).match(x)[1]) {
          case "dpcm":
            return m / 2.54;
          case "dppx":
            return 96 * m;
          default:
            return m;
        }
      }
      function c(v) {
        var m = parseFloat(v);
        switch (String(v).match(w)[1]) {
          case "em":
          case "rem":
            return 16 * m;
          case "cm":
            return 96 * m / 2.54;
          case "mm":
            return 96 * m / 2.54 / 10;
          case "in":
            return 96 * m;
          case "pt":
            return 72 * m;
          case "pc":
            return 72 * m / 12;
          default:
            return m;
        }
      }
      i.match = o, i.parse = s;
      var p = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, d = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, g = /^(?:(min|max)-)?(.+)/, w = /(em|rem|px|cm|mm|in|pt|pc)?$/, x = /(dpi|dpcm|dppx)?$/;
    }, function(r, i, a) {
      function o(s, l) {
        if (s === l) return !0;
        if (!s || !l) return !1;
        var u = Object.keys(s), c = Object.keys(l), p = u.length;
        if (c.length !== p) return !1;
        for (var d = 0; d < p; d++) {
          var g = u[d];
          if (s[g] !== l[g] || !Object.prototype.hasOwnProperty.call(l, g)) return !1;
        }
        return !0;
      }
      r.exports = o;
    }, function(r, i, a) {
      function o(v, m) {
        var h = Object.keys(v);
        if (Object.getOwnPropertySymbols) {
          var E = Object.getOwnPropertySymbols(v);
          m && (E = E.filter(function(b) {
            return Object.getOwnPropertyDescriptor(v, b).enumerable;
          })), h.push.apply(h, E);
        }
        return h;
      }
      function s(v) {
        for (var m = 1; m < arguments.length; m++) {
          var h = arguments[m] != null ? arguments[m] : {};
          m % 2 ? o(Object(h), !0).forEach(function(E) {
            l(v, E, h[E]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(h)) : o(Object(h)).forEach(function(E) {
            Object.defineProperty(v, E, Object.getOwnPropertyDescriptor(h, E));
          });
        }
        return v;
      }
      function l(v, m, h) {
        return m in v ? Object.defineProperty(v, m, {
          value: h,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : v[m] = h, v;
      }
      var u = a(12), c = a.n(u), p = c.a.oneOfType([c.a.string, c.a.number]), d = {
        orientation: c.a.oneOf(["portrait", "landscape"]),
        scan: c.a.oneOf(["progressive", "interlace"]),
        aspectRatio: c.a.string,
        deviceAspectRatio: c.a.string,
        height: p,
        deviceHeight: p,
        width: p,
        deviceWidth: p,
        color: c.a.bool,
        colorIndex: c.a.bool,
        monochrome: c.a.bool,
        resolution: p
      }, g = s({
        minAspectRatio: c.a.string,
        maxAspectRatio: c.a.string,
        minDeviceAspectRatio: c.a.string,
        maxDeviceAspectRatio: c.a.string,
        minHeight: p,
        maxHeight: p,
        minDeviceHeight: p,
        maxDeviceHeight: p,
        minWidth: p,
        maxWidth: p,
        minDeviceWidth: p,
        maxDeviceWidth: p,
        minColor: c.a.number,
        maxColor: c.a.number,
        minColorIndex: c.a.number,
        maxColorIndex: c.a.number,
        minMonochrome: c.a.number,
        maxMonochrome: c.a.number,
        minResolution: p,
        maxResolution: p
      }, d), w = {
        all: c.a.bool,
        grid: c.a.bool,
        aural: c.a.bool,
        braille: c.a.bool,
        handheld: c.a.bool,
        print: c.a.bool,
        projection: c.a.bool,
        screen: c.a.bool,
        tty: c.a.bool,
        tv: c.a.bool,
        embossed: c.a.bool
      }, x = s(s({}, w), g);
      d.type = Object.keys(w), i.a = {
        all: x,
        types: w,
        matchers: d,
        features: g
      };
    }, function(r, i, a) {
      var o = a(4);
      r.exports = a(14)(o.isElement, !0);
    }, function(r, i, a) {
      (function() {
        function o(Q) {
          return typeof Q == "string" || typeof Q == "function" || Q === C || Q === L || Q === N || Q === S || Q === K || Q === Z || typeof Q == "object" && Q !== null && (Q.$$typeof === J || Q.$$typeof === re || Q.$$typeof === G || Q.$$typeof === B || Q.$$typeof === D || Q.$$typeof === P || Q.$$typeof === I || Q.$$typeof === F || Q.$$typeof === se);
        }
        function s(Q) {
          if (typeof Q == "object" && Q !== null) {
            var yt = Q.$$typeof;
            switch (yt) {
              case k:
                var Ke = Q.type;
                switch (Ke) {
                  case j:
                  case L:
                  case C:
                  case N:
                  case S:
                  case K:
                    return Ke;
                  default:
                    var tt = Ke && Ke.$$typeof;
                    switch (tt) {
                      case B:
                      case D:
                      case J:
                      case re:
                      case G:
                        return tt;
                      default:
                        return yt;
                    }
                }
              case A:
                return yt;
            }
          }
        }
        function l(Q) {
          return sn || (sn = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(Q) || s(Q) === j;
        }
        function u(Q) {
          return s(Q) === L;
        }
        function c(Q) {
          return s(Q) === B;
        }
        function p(Q) {
          return s(Q) === G;
        }
        function d(Q) {
          return typeof Q == "object" && Q !== null && Q.$$typeof === k;
        }
        function g(Q) {
          return s(Q) === D;
        }
        function w(Q) {
          return s(Q) === C;
        }
        function x(Q) {
          return s(Q) === J;
        }
        function v(Q) {
          return s(Q) === re;
        }
        function m(Q) {
          return s(Q) === A;
        }
        function h(Q) {
          return s(Q) === N;
        }
        function E(Q) {
          return s(Q) === S;
        }
        function b(Q) {
          return s(Q) === K;
        }
        var O = typeof Symbol == "function" && Symbol.for, k = O ? Symbol.for("react.element") : 60103, A = O ? Symbol.for("react.portal") : 60106, C = O ? Symbol.for("react.fragment") : 60107, S = O ? Symbol.for("react.strict_mode") : 60108, N = O ? Symbol.for("react.profiler") : 60114, G = O ? Symbol.for("react.provider") : 60109, B = O ? Symbol.for("react.context") : 60110, j = O ? Symbol.for("react.async_mode") : 60111, L = O ? Symbol.for("react.concurrent_mode") : 60111, D = O ? Symbol.for("react.forward_ref") : 60112, K = O ? Symbol.for("react.suspense") : 60113, Z = O ? Symbol.for("react.suspense_list") : 60120, re = O ? Symbol.for("react.memo") : 60115, J = O ? Symbol.for("react.lazy") : 60116, se = O ? Symbol.for("react.block") : 60121, P = O ? Symbol.for("react.fundamental") : 60117, I = O ? Symbol.for("react.responder") : 60118, F = O ? Symbol.for("react.scope") : 60119, H = j, U = L, te = B, ee = G, ne = k, ie = D, de = C, pe = J, je = re, et = A, At = N, Bt = S, hr = K, sn = !1;
        i.AsyncMode = H, i.ConcurrentMode = U, i.ContextConsumer = te, i.ContextProvider = ee, i.Element = ne, i.ForwardRef = ie, i.Fragment = de, i.Lazy = pe, i.Memo = je, i.Portal = et, i.Profiler = At, i.StrictMode = Bt, i.Suspense = hr, i.isAsyncMode = l, i.isConcurrentMode = u, i.isContextConsumer = c, i.isContextProvider = p, i.isElement = d, i.isForwardRef = g, i.isFragment = w, i.isLazy = x, i.isMemo = v, i.isPortal = m, i.isProfiler = h, i.isStrictMode = E, i.isSuspense = b, i.isValidElementType = o, i.typeOf = s;
      })();
    }, function(r, i, a) {
      function o() {
        return null;
      }
      var s = a(4), l = a(15), u = a(5), c = a(16), p = Function.call.bind(Object.prototype.hasOwnProperty), d = function() {
      };
      d = function(g) {
        var w = "Warning: " + g;
        typeof console < "u" && console.error(w);
        try {
          throw new Error(w);
        } catch {
        }
      }, r.exports = function(g, w) {
        function x(P) {
          var I = P && (Z && P[Z] || P[re]);
          if (typeof I == "function") return I;
        }
        function v(P, I) {
          return P === I ? P !== 0 || 1 / P == 1 / I : P !== P && I !== I;
        }
        function m(P) {
          this.message = P, this.stack = "";
        }
        function h(P) {
          function I(te, ee, ne, ie, de, pe, je) {
            if (ie = ie || J, pe = pe || ne, je !== u) {
              if (w) {
                var et = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                throw et.name = "Invariant Violation", et;
              }
              if (typeof console < "u") {
                var At = ie + ":" + ne;
                !F[At] && H < 3 && (d("You are manually calling a React.PropTypes validation function for the `" + pe + "` prop on `" + ie + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), F[At] = !0, H++);
              }
            }
            return ee[ne] == null ? te ? new m(ee[ne] === null ? "The " + de + " `" + pe + "` is marked as required in `" + ie + "`, but its value is `null`." : "The " + de + " `" + pe + "` is marked as required in `" + ie + "`, but its value is `undefined`.") : null : P(ee, ne, ie, de, pe);
          }
          var F = {}, H = 0, U = I.bind(null, !1);
          return U.isRequired = I.bind(null, !0), U;
        }
        function E(P) {
          function I(F, H, U, te, ee, ne) {
            var ie = F[H];
            return j(ie) !== P ? new m("Invalid " + te + " `" + ee + "` of type `" + L(ie) + "` supplied to `" + U + "`, expected `" + P + "`.") : null;
          }
          return h(I);
        }
        function b(P) {
          function I(F, H, U, te, ee) {
            if (typeof P != "function") return new m("Property `" + ee + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
            var ne = F[H];
            if (!Array.isArray(ne))
              return new m("Invalid " + te + " `" + ee + "` of type `" + j(ne) + "` supplied to `" + U + "`, expected an array.");
            for (var ie = 0; ie < ne.length; ie++) {
              var de = P(ne, ie, U, te, ee + "[" + ie + "]", u);
              if (de instanceof Error) return de;
            }
            return null;
          }
          return h(I);
        }
        function O(P) {
          function I(F, H, U, te, ee) {
            if (!(F[H] instanceof P)) {
              var ne = P.name || J;
              return new m("Invalid " + te + " `" + ee + "` of type `" + K(F[H]) + "` supplied to `" + U + "`, expected instance of `" + ne + "`.");
            }
            return null;
          }
          return h(I);
        }
        function k(P) {
          function I(F, H, U, te, ee) {
            for (var ne = F[H], ie = 0; ie < P.length; ie++) if (v(ne, P[ie])) return null;
            var de = JSON.stringify(P, function(pe, je) {
              return L(je) === "symbol" ? String(je) : je;
            });
            return new m("Invalid " + te + " `" + ee + "` of value `" + String(ne) + "` supplied to `" + U + "`, expected one of " + de + ".");
          }
          return Array.isArray(P) ? h(I) : (d(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), o);
        }
        function A(P) {
          function I(F, H, U, te, ee) {
            if (typeof P != "function") return new m("Property `" + ee + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
            var ne = F[H], ie = j(ne);
            if (ie !== "object") return new m("Invalid " + te + " `" + ee + "` of type `" + ie + "` supplied to `" + U + "`, expected an object.");
            for (var de in ne) if (p(ne, de)) {
              var pe = P(ne, de, U, te, ee + "." + de, u);
              if (pe instanceof Error) return pe;
            }
            return null;
          }
          return h(I);
        }
        function C(P) {
          function I(U, te, ee, ne, ie) {
            for (var de = 0; de < P.length; de++)
              if ((0, P[de])(U, te, ee, ne, ie, u) == null) return null;
            return new m("Invalid " + ne + " `" + ie + "` supplied to `" + ee + "`.");
          }
          if (!Array.isArray(P)) return d("Invalid argument supplied to oneOfType, expected an instance of array."), o;
          for (var F = 0; F < P.length; F++) {
            var H = P[F];
            if (typeof H != "function") return d("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + D(H) + " at index " + F + "."), o;
          }
          return h(I);
        }
        function S(P) {
          function I(F, H, U, te, ee) {
            var ne = F[H], ie = j(ne);
            if (ie !== "object") return new m("Invalid " + te + " `" + ee + "` of type `" + ie + "` supplied to `" + U + "`, expected `object`.");
            for (var de in P) {
              var pe = P[de];
              if (pe) {
                var je = pe(ne, de, U, te, ee + "." + de, u);
                if (je) return je;
              }
            }
            return null;
          }
          return h(I);
        }
        function N(P) {
          function I(F, H, U, te, ee) {
            var ne = F[H], ie = j(ne);
            if (ie !== "object") return new m("Invalid " + te + " `" + ee + "` of type `" + ie + "` supplied to `" + U + "`, expected `object`.");
            var de = l({}, F[H], P);
            for (var pe in de) {
              var je = P[pe];
              if (!je) return new m("Invalid " + te + " `" + ee + "` key `" + pe + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(F[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(P), null, "  "));
              var et = je(ne, pe, U, te, ee + "." + pe, u);
              if (et) return et;
            }
            return null;
          }
          return h(I);
        }
        function G(P) {
          switch (typeof P) {
            case "number":
            case "string":
            case "undefined":
              return !0;
            case "boolean":
              return !P;
            case "object":
              if (Array.isArray(P)) return P.every(G);
              if (P === null || g(P)) return !0;
              var I = x(P);
              if (!I) return !1;
              var F, H = I.call(P);
              if (I !== P.entries) {
                for (; !(F = H.next()).done; ) if (!G(F.value)) return !1;
              } else for (; !(F = H.next()).done; ) {
                var U = F.value;
                if (U && !G(U[1])) return !1;
              }
              return !0;
            default:
              return !1;
          }
        }
        function B(P, I) {
          return P === "symbol" || !!I && (I["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && I instanceof Symbol);
        }
        function j(P) {
          var I = typeof P;
          return Array.isArray(P) ? "array" : P instanceof RegExp ? "object" : B(I, P) ? "symbol" : I;
        }
        function L(P) {
          if (P == null) return "" + P;
          var I = j(P);
          if (I === "object") {
            if (P instanceof Date) return "date";
            if (P instanceof RegExp) return "regexp";
          }
          return I;
        }
        function D(P) {
          var I = L(P);
          switch (I) {
            case "array":
            case "object":
              return "an " + I;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + I;
            default:
              return I;
          }
        }
        function K(P) {
          return P.constructor && P.constructor.name ? P.constructor.name : J;
        }
        var Z = typeof Symbol == "function" && Symbol.iterator, re = "@@iterator", J = "<<anonymous>>", se = {
          array: E("array"),
          bool: E("boolean"),
          func: E("function"),
          number: E("number"),
          object: E("object"),
          string: E("string"),
          symbol: E("symbol"),
          any: function() {
            return h(o);
          }(),
          arrayOf: b,
          element: function() {
            function P(I, F, H, U, te) {
              var ee = I[F];
              return g(ee) ? null : new m("Invalid " + U + " `" + te + "` of type `" + j(ee) + "` supplied to `" + H + "`, expected a single ReactElement.");
            }
            return h(P);
          }(),
          elementType: function() {
            function P(I, F, H, U, te) {
              var ee = I[F];
              return s.isValidElementType(ee) ? null : new m("Invalid " + U + " `" + te + "` of type `" + j(ee) + "` supplied to `" + H + "`, expected a single ReactElement type.");
            }
            return h(P);
          }(),
          instanceOf: O,
          node: function() {
            function P(I, F, H, U, te) {
              return G(I[F]) ? null : new m("Invalid " + U + " `" + te + "` supplied to `" + H + "`, expected a ReactNode.");
            }
            return h(P);
          }(),
          objectOf: A,
          oneOf: k,
          oneOfType: C,
          shape: S,
          exact: N
        };
        return m.prototype = Error.prototype, se.checkPropTypes = c, se.resetWarningCache = c.resetWarningCache, se.PropTypes = se, se;
      };
    }, function(r, i, a) {
      function o(c) {
        if (c == null) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(c);
      }
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */
      var s = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
      r.exports = function() {
        try {
          if (!Object.assign) return !1;
          var c = new String("abc");
          if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5") return !1;
          for (var p = {}, d = 0; d < 10; d++) p["_" + String.fromCharCode(d)] = d;
          if (Object.getOwnPropertyNames(p).map(function(w) {
            return p[w];
          }).join("") !== "0123456789") return !1;
          var g = {};
          return "abcdefghijklmnopqrst".split("").forEach(function(w) {
            g[w] = w;
          }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
        } catch {
          return !1;
        }
      }() ? Object.assign : function(c, p) {
        for (var d, g, w = o(c), x = 1; x < arguments.length; x++) {
          d = Object(arguments[x]);
          for (var v in d) l.call(d, v) && (w[v] = d[v]);
          if (s) {
            g = s(d);
            for (var m = 0; m < g.length; m++) u.call(d, g[m]) && (w[g[m]] = d[g[m]]);
          }
        }
        return w;
      };
    }, function(r, i, a) {
      function o(p, d, g, w, x) {
        for (var v in p) if (c(p, v)) {
          var m;
          try {
            if (typeof p[v] != "function") {
              var h = Error((w || "React class") + ": " + g + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[v] + "`.");
              throw h.name = "Invariant Violation", h;
            }
            m = p[v](d, v, w, g, null, l);
          } catch (b) {
            m = b;
          }
          if (!m || m instanceof Error || s((w || "React class") + ": type specification of " + g + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), m instanceof Error && !(m.message in u)) {
            u[m.message] = !0;
            var E = x ? x() : "";
            s("Failed " + g + " type: " + m.message + (E ?? ""));
          }
        }
      }
      var s = function() {
      }, l = a(5), u = {}, c = Function.call.bind(Object.prototype.hasOwnProperty);
      s = function(p) {
        var d = "Warning: " + p;
        typeof console < "u" && console.error(d);
        try {
          throw new Error(d);
        } catch {
        }
      }, o.resetWarningCache = function() {
        u = {};
      }, r.exports = o;
    }, function(r, i, a) {
      function o(c, p) {
        if (c == null) return {};
        var d, g, w = s(c, p);
        if (Object.getOwnPropertySymbols) {
          var x = Object.getOwnPropertySymbols(c);
          for (g = 0; g < x.length; g++) d = x[g], p.indexOf(d) >= 0 || Object.prototype.propertyIsEnumerable.call(c, d) && (w[d] = c[d]);
        }
        return w;
      }
      function s(c, p) {
        if (c == null) return {};
        var d, g, w = {}, x = Object.keys(c);
        for (g = 0; g < x.length; g++) d = x[g], p.indexOf(d) >= 0 || (w[d] = c[d]);
        return w;
      }
      function l(c) {
        var p = c.children, d = c.device, g = c.onChange, w = o(c, ["children", "device", "onChange"]), x = Object(u.a)(w, d, g);
        return typeof p == "function" ? p(x) : x ? p : null;
      }
      i.a = l;
      var u = a(0);
    }]);
  });
})(ib);
var iP = ib.exports;
const aP = "0", oP = "576px", sP = "768px", lP = "992px", uP = "1200px", cP = "1400px", fP = {
  xs: aP,
  sm: oP,
  md: sP,
  lg: lP,
  xl: uP,
  xxl: cP
}, {
  sm: Xh,
  md: qh,
  lg: Zh,
  xl: Jh,
  xxl: ev
} = fP, dP = {
  extraSmall: {
    maxWidth: parseFloat(Xh) || 575.98
  },
  small: {
    minWidth: parseFloat(Xh) || 576,
    maxWidth: parseFloat(qh) || 767.98
  },
  medium: {
    minWidth: parseFloat(qh) || 768,
    maxWidth: parseFloat(Zh) || 991.98
  },
  large: {
    minWidth: parseFloat(Zh) || 992,
    maxWidth: parseFloat(Jh) || 1199.98
  },
  extraLarge: {
    minWidth: parseFloat(Jh) || 1200,
    maxWidth: parseFloat(ev) || 1399.98
  },
  extraExtraLarge: {
    minWidth: parseFloat(ev) || 1400
  }
};
function Pa(e) {
  "@babel/helpers - typeof";
  return Pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pa(e);
}
var pP = ["children", "icon", "actions", "dismissible", "onClose", "closeLabel", "stacked"];
function tv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function zs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tv(Object(n), !0).forEach(function(r) {
      mP(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function mP(e, t, n) {
  return t = hP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function hP(e) {
  var t = vP(e, "string");
  return Pa(t) == "symbol" ? t : t + "";
}
function vP(e, t) {
  if (Pa(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Pa(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kc() {
  return Kc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Kc.apply(this, arguments);
}
function gP(e, t) {
  return EP(e) || wP(e, t) || bP(e, t) || yP();
}
function yP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bP(e, t) {
  if (e) {
    if (typeof e == "string") return nv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nv(e, t);
  }
}
function nv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function wP(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function EP(e) {
  if (Array.isArray(e)) return e;
}
function xP(e, t) {
  if (e == null) return {};
  var n = OP(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function OP(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var ti = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.icon, i = e.actions, a = e.dismissible, o = e.onClose, s = e.closeLabel, l = e.stacked, u = xP(e, pP), c = _.useState(l), p = gP(c, 2), d = p[0], g = p[1], w = iP.useMediaQuery({
    maxWidth: dP.extraSmall.maxWidth
  }), x = "sm";
  _.useEffect(function() {
    g(w ? !0 : l);
  }, [w, l]);
  var v = _.useCallback(function(m) {
    var h = {
      size: x,
      key: m.props.children
    };
    return /* @__PURE__ */ y.cloneElement(m, h);
  }, []);
  return /* @__PURE__ */ y.createElement(on, Kc({}, u, {
    className: V("alert-content", u.className),
    ref: t
  }), r && /* @__PURE__ */ y.createElement(Xt, {
    src: r,
    className: "alert-icon"
  }), /* @__PURE__ */ y.createElement("div", {
    className: V({
      "pgn__alert-message-wrapper": !d,
      "pgn__alert-message-wrapper-stacked": d
    })
  }, /* @__PURE__ */ y.createElement("div", {
    className: "alert-message-content"
  }, n), (a || (i == null ? void 0 : i.length) > 0) && /* @__PURE__ */ y.createElement(lr, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ y.createElement(lr.Spacer, null), a && /* @__PURE__ */ y.createElement(Ct, {
    size: x,
    variant: "tertiary",
    onClick: o
  }, s || /* @__PURE__ */ y.createElement(nb, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), i && i.map(v))));
}), ab = _l("h4");
ab.displayName = "DivStyledAsH4";
function Kd(e) {
  return /* @__PURE__ */ y.createElement(on.Heading, e);
}
function Yd(e) {
  return /* @__PURE__ */ y.createElement(on.Link, e);
}
var ob = {
  /** Specifies the base element */
  as: f.elementType,
  /** Overrides underlying component base CSS class name */
  bsPrefix: f.string
};
Yd.propTypes = ob;
Kd.propTypes = ob;
Yd.defaultProps = {
  as: "a",
  bsPrefix: "alert-link"
};
Kd.defaultProps = {
  as: ab,
  bsPrefix: "alert-heading"
};
ti.propTypes = zs(zs({}, on.propTypes), {}, {
  /** Specifies class name to append to the base element */
  className: f.string,
  /** Overrides underlying component base CSS class name */
  bsPrefix: f.string,
  /** Specifies variant to use. */
  variant: f.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"]),
  /**
   * Animate the entering and exiting of the Alert. `true` will use the `<Fade>` transition,
   * more detailed customization is also provided.
   */
  transition: f.oneOfType([f.bool, f.shape({
    in: f.bool,
    appear: f.bool,
    children: f.node,
    onEnter: f.func,
    onEntered: f.func,
    onEntering: f.func,
    onExit: f.func,
    onExited: f.func,
    onExiting: f.func
  })]),
  /** Docstring for the children prop */
  children: f.node,
  /** Docstring for the icon prop... Icon that will be shown in the alert */
  icon: f.func,
  /** Whether the alert is shown. */
  show: f.bool,
  /** Whether the alert is dismissible. Defaults to true. */
  dismissible: f.bool,
  /** Optional callback function for when the alert it dismissed. */
  onClose: f.func,
  /** Optional list of action elements. May include, at most, 2 actions, or 1 if dismissible is true. */
  actions: f.arrayOf(f.element),
  /** Position of the dismiss and call-to-action buttons. Defaults to ``false``. */
  stacked: f.bool,
  /** Sets the text for alert close button, defaults to 'Dismiss'. */
  closeLabel: f.oneOfType([f.string, f.element])
});
ti.defaultProps = zs(zs({}, on.defaultProps), {}, {
  children: void 0,
  icon: void 0,
  actions: void 0,
  dismissible: !1,
  onClose: function() {
  },
  closeLabel: void 0,
  show: !0,
  stacked: !1
});
ti.Heading = Kd;
ti.Link = Yd;
var sb = /* @__PURE__ */ y.createContext(null);
sb.displayName = "CardContext";
var CP = ["bsPrefix", "className", "variant", "as"], kP = {
  variant: null
}, Gd = /* @__PURE__ */ y.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.variant, a = e.as, o = a === void 0 ? "img" : a, s = ce(e, CP), l = we(n, "card-img");
    return /* @__PURE__ */ y.createElement(o, q({
      ref: t,
      className: V(i ? l + "-" + i : l, r)
    }, s));
  }
);
Gd.displayName = "CardImg";
Gd.defaultProps = kP;
var SP = ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"], PP = _l("h5"), _P = _l("h6"), lb = _t("card-body"), AP = _t("card-title", {
  Component: PP
}), TP = _t("card-subtitle", {
  Component: _P
}), IP = _t("card-link", {
  Component: "a"
}), jP = _t("card-text", {
  Component: "p"
}), NP = _t("card-header"), RP = _t("card-footer"), FP = _t("card-img-overlay"), DP = {
  body: !1
}, lt = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.bg, a = e.text, o = e.border, s = e.body, l = e.children, u = e.as, c = u === void 0 ? "div" : u, p = ce(e, SP), d = we(n, "card"), g = _.useMemo(function() {
    return {
      cardHeaderBsPrefix: d + "-header"
    };
  }, [d]);
  return /* @__PURE__ */ y.createElement(sb.Provider, {
    value: g
  }, /* @__PURE__ */ y.createElement(c, q({
    ref: t
  }, p, {
    className: V(r, d, i && "bg-" + i, a && "text-" + a, o && "border-" + o)
  }), s ? (
    // @ts-ignore
    /* @__PURE__ */ y.createElement(lb, null, l)
  ) : l));
});
lt.displayName = "Card";
lt.defaultProps = DP;
lt.Img = Gd;
lt.Title = AP;
lt.Subtitle = TP;
lt.Body = lb;
lt.Link = IP;
lt.Text = jP;
lt.Header = NP;
lt.Footer = RP;
lt.ImgOverlay = FP;
var pr = /* @__PURE__ */ _.createContext({});
function Qd(e) {
  var t = e.orientation, n = e.children, r = e.isLoading, i = e.variant;
  return /* @__PURE__ */ y.createElement(pr.Provider, {
    value: {
      orientation: t,
      isLoading: r,
      variant: i
    }
  }, n);
}
Qd.propTypes = {
  /** Specifies which orientation to use. */
  orientation: f.oneOf(["horizontal", "vertical"]),
  /** Specifies loading state. */
  isLoading: f.bool,
  /** Specifies content of the component. */
  children: f.node,
  /** Specifies `Card` style variant */
  variant: f.oneOf(["light", "dark", "muted"])
};
Qd.defaultProps = {
  orientation: "vertical",
  isLoading: !1,
  children: null,
  variant: "light"
};
const LP = y.createContext({}), ub = !0;
function MP({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: l = ub }) {
  const u = {};
  return o === "rtl" && (u["--animation-direction"] = "reverse"), typeof s == "number" && (u["--animation-duration"] = `${s}s`), l || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), a && (u.borderRadius = "50%"), typeof e < "u" && (u["--base-color"] = e), typeof t < "u" && (u["--highlight-color"] = t), u;
}
function ni({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
  var l, u, c;
  const p = y.useContext(LP), d = { ...s };
  for (const [E, b] of Object.entries(s))
    typeof b > "u" && delete d[E];
  const g = {
    ...p,
    ...d,
    circle: a
  }, w = {
    ...o,
    ...MP(g)
  };
  let x = "react-loading-skeleton";
  n && (x += ` ${n}`);
  const v = (l = g.inline) !== null && l !== void 0 ? l : !1, m = [], h = Math.ceil(e);
  for (let E = 0; E < h; E++) {
    let b = w;
    if (h > e && E === h - 1) {
      const k = (u = b.width) !== null && u !== void 0 ? u : "100%", A = e % 1, C = typeof k == "number" ? k * A : `calc(${k} * ${A})`;
      b = { ...b, width: C };
    }
    const O = y.createElement("span", { className: x, style: b, key: E }, "‌");
    v ? m.push(O) : m.push(y.createElement(
      y.Fragment,
      { key: E },
      O,
      y.createElement("br", null)
    ));
  }
  return y.createElement("span", { className: r, "data-testid": i, "aria-live": "polite", "aria-busy": (c = g.enableAnimation) !== null && c !== void 0 ? c : ub }, t ? m.map((E, b) => y.createElement(t, { key: b }, E)) : m);
}
var $P = 20, Xd = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.actions, r = e.className, i = e.size, a = e.subtitle, o = e.title, s = e.skeletonHeight, l = e.skeletonWidth, u = _.useContext(pr), c = u.isLoading, p = _.useCallback(function(d) {
    if (/* @__PURE__ */ y.isValidElement(d)) {
      var g = d.props.children, w = {
        size: i,
        children: Array.isArray(g) ? g.map(p) : p(g)
      };
      return /* @__PURE__ */ y.cloneElement(d, w);
    }
    return d;
  }, [i]);
  return c ? /* @__PURE__ */ y.createElement("div", {
    className: V("pgn__card-header", r)
  }, /* @__PURE__ */ y.createElement(ni, {
    containerClassName: "pgn__card-header-loader",
    height: s,
    width: l
  })) : /* @__PURE__ */ y.createElement("div", {
    className: V("pgn__card-header", r),
    ref: t
  }, /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-header-content"
  }, o && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-header-title-".concat(i)
  }, o), a && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-header-subtitle-".concat(i)
  }, a)), n && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-header-actions"
  }, i !== "md" ? p(n) : n));
});
Xd.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: f.node,
  /** The class name for the CardHeader component */
  className: f.string,
  /** The title for the CardHeader component */
  title: f.node,
  /** The size of the CardHeader component */
  size: f.oneOf(["sm", "md"]),
  /** The subtitle of the CardHeader component */
  subtitle: f.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: f.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: f.number
};
Xd.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: $P,
  skeletonWidth: null
};
var BP = ["className"];
function Yc() {
  return Yc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Yc.apply(this, arguments);
}
function VP(e, t) {
  if (e == null) return {};
  var n = zP(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function zP(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var qd = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = VP(e, BP);
  return /* @__PURE__ */ y.createElement("div", Yc({
    className: V("pgn__card-divider", n),
    ref: t
  }, r));
});
qd.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string
};
qd.defaultProps = {
  className: void 0
};
var UP = 100, Zd = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = e.title, a = e.actions, o = e.muted, s = e.skeletonHeight, l = e.skeletonWidth, u = _.useContext(pr), c = u.isLoading;
  return c ? /* @__PURE__ */ y.createElement("div", {
    className: V("pgn__card-section", n, {
      "is-muted": o
    })
  }, /* @__PURE__ */ y.createElement(ni, {
    containerClassName: "pgn__card-section-loader",
    height: s,
    width: l
  })) : /* @__PURE__ */ y.createElement("div", {
    className: V("pgn__card-section", n, {
      "is-muted": o
    }),
    ref: t
  }, i && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-section-title"
  }, i), r, a && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-section-actions"
  }, a));
});
Zd.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies contents of the component. */
  children: f.node,
  /** Specifies title of the `Section`. */
  title: f.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: f.node,
  /** Specifies whether to display `Section` with muted styling. */
  muted: f.bool,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: f.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: f.number
};
Zd.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: UP,
  skeletonWidth: void 0
};
var WP = 18, Jd = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.isStacked, a = e.textElement, o = e.skeletonHeight, s = e.skeletonWidth, l = e.orientation, u = _.useContext(pr), c = u.orientation, p = u.isLoading, d = l || c, g = "pgn__card-footer ".concat(d).concat(i ? "-stacked" : ""), w = "pgn__card-footer-text ".concat(d).concat(i ? "-stacked" : "");
  return p ? /* @__PURE__ */ y.createElement("div", {
    className: V(r, g)
  }, /* @__PURE__ */ y.createElement(ni, {
    containerClassName: "pgn__card-footer-loader",
    height: o,
    width: s
  })) : /* @__PURE__ */ y.createElement("div", {
    className: V(r, g),
    ref: t
  }, a && /* @__PURE__ */ y.createElement("div", {
    className: w
  }, a), n);
});
Jd.propTypes = {
  /** Specifies contents of the component. */
  children: f.node,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: f.node,
  /** Specifies whether to use stacked variant. */
  isStacked: f.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: f.oneOf(["horizontal", "vertical"]),
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: f.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: f.number
};
Jd.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: WP,
  skeletonWidth: void 0
};
const cb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==";
function rv(e, t) {
  return GP(e) || YP(e, t) || KP(e, t) || HP();
}
function HP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KP(e, t) {
  if (e) {
    if (typeof e == "string") return iv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return iv(e, t);
  }
}
function iv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function YP(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function GP(e) {
  if (Array.isArray(e)) return e;
}
var QP = 140, XP = 41, ep = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.src, r = e.fallbackSrc, i = e.srcAlt, a = e.logoSrc, o = e.fallbackLogoSrc, s = e.logoAlt, l = e.skeletonHeight, u = e.skeletonWidth, c = e.logoSkeleton, p = e.logoSkeletonHeight, d = e.logoSkeletonWidth, g = e.className, w = e.imageLoadingType, x = _.useContext(pr), v = x.orientation, m = x.isLoading, h = _.useState(!1), E = rv(h, 2), b = E[0], O = E[1], k = _.useState(!1), A = rv(k, 2), C = A[0], S = A[1], N = "pgn__card-wrapper-image-cap ".concat(v);
  if (m)
    return /* @__PURE__ */ y.createElement("div", {
      className: V(N, g),
      "data-testid": "image-loader-wrapper"
    }, /* @__PURE__ */ y.createElement(ni, {
      containerClassName: "pgn__card-image-cap-loader",
      height: v === "horizontal" ? "100%" : l,
      width: u
    }), c && /* @__PURE__ */ y.createElement(ni, {
      containerClassName: "pgn__card-logo-cap",
      height: p,
      width: d
    }));
  var G = function(j, L, D) {
    var K = j.currentTarget;
    if (!L || K.src.endsWith(L)) {
      D === "imageCap" ? K.src = cb : S(!1);
      return;
    }
    K.src = L;
  };
  return /* @__PURE__ */ y.createElement("div", {
    className: V(g, N),
    ref: t
  }, !!n && /* @__PURE__ */ y.createElement("img", {
    className: V("pgn__card-image-cap", {
      show: b
    }),
    src: n,
    onError: function(j) {
      return G(j, r, "imageCap");
    },
    onLoad: function() {
      return O(!0);
    },
    alt: i,
    loading: w
  }), !!a && /* @__PURE__ */ y.createElement("img", {
    className: V("pgn__card-logo-cap", {
      show: C
    }),
    src: a,
    onError: function(j) {
      return G(j, o, "logoCap");
    },
    onLoad: function() {
      return S(!0);
    },
    alt: s,
    loading: w
  }));
});
ep.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies image src. */
  src: f.string,
  /** Specifies fallback image src. */
  fallbackSrc: f.string,
  /** Specifies image alt text. */
  srcAlt: f.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: f.string,
  /** Specifies fallback image logo src. */
  fallbackLogoSrc: f.string,
  /** Specifies logo image alt text. */
  logoAlt: f.string,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: f.number,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: f.number,
  /** Specifies whether the cap should be displayed during loading. */
  logoSkeleton: f.bool,
  /** Specifies height of Logo skeleton in loading state. */
  logoSkeletonHeight: f.number,
  /** Specifies width of Logo skeleton in loading state. */
  logoSkeletonWidth: f.number,
  /** Specifies loading type for images */
  imageLoadingType: f.oneOf(["eager", "lazy"])
};
ep.defaultProps = {
  src: void 0,
  fallbackSrc: cb,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: QP,
  logoSkeleton: !1,
  logoSkeletonHeight: XP,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager"
};
var qP = ["className", "children"];
function Gc() {
  return Gc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Gc.apply(this, arguments);
}
function ZP(e, t) {
  if (e == null) return {};
  var n = JP(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function JP(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var tp = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = ZP(e, qP);
  return /* @__PURE__ */ y.createElement("div", Gc({
    className: V("pgn__card-body", n),
    ref: t
  }, i), r);
});
tp.propTypes = {
  /** Specifies the content of the component. */
  children: f.node,
  /** The class to append to the base element. */
  className: f.string
};
tp.defaultProps = {
  children: void 0,
  className: void 0
};
var e_ = ["className", "children", "variant", "icon", "title", "actions"];
function Qc() {
  return Qc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qc.apply(this, arguments);
}
function t_(e, t) {
  if (e == null) return {};
  var n = n_(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function n_(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var np = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = e.variant, a = e.icon, o = e.title, s = e.actions, l = t_(e, e_), u = _.useContext(pr), c = u.isLoading;
  return c ? /* @__PURE__ */ y.createElement("div", {
    className: V("pgn__card-status", n),
    "data-testid": "card-status-skeleton",
    ref: t
  }, /* @__PURE__ */ y.createElement(ni, null)) : /* @__PURE__ */ y.createElement("div", Qc({
    className: V("pgn__card-status", "pgn__card-status__".concat(i), n),
    ref: t
  }, l), /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-status__content"
  }, a && /* @__PURE__ */ y.createElement(Xt, {
    className: "pgn__card-status__content-icon",
    src: a
  }), /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-status__message-content"
  }, o && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-status__heading"
  }, o), r)), !!s && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__card-status__actions"
  }, s));
});
np.propTypes = {
  /** Specifies the content of the component. */
  children: f.node.isRequired,
  /** The class to append to the base element. */
  className: f.string,
  /** Icon that will be shown in the top-left corner. */
  icon: f.func,
  /** Specifies variant to use. */
  variant: f.oneOf(["primary", "success", "danger", "warning"]),
  /** Specifies title for the `Card.Status`. */
  title: f.oneOfType([f.element, f.string]),
  /** Specifies any optional actions, e.g. button(s). */
  actions: f.node
};
np.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
var r_ = ["bsPrefix", "className", "as"], i_ = ["xl", "lg", "md", "sm", "xs"], fb = /* @__PURE__ */ y.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = ce(e, r_), s = we(n, "col"), l = [], u = [];
    return i_.forEach(function(c) {
      var p = o[c];
      delete o[c];
      var d, g, w;
      if (typeof p == "object" && p != null) {
        var x = p.span;
        d = x === void 0 ? !0 : x, g = p.offset, w = p.order;
      } else
        d = p;
      var v = c !== "xs" ? "-" + c : "";
      d && l.push(d === !0 ? "" + s + v : "" + s + v + "-" + d), w != null && u.push("order" + v + "-" + w), g != null && u.push("offset" + v + "-" + g);
    }), l.length || l.push(s), /* @__PURE__ */ y.createElement(a, q({}, o, {
      ref: t,
      className: V.apply(void 0, [r].concat(l, u))
    }));
  }
);
fb.displayName = "Col";
function _a(e) {
  "@babel/helpers - typeof";
  return _a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _a(e);
}
var a_ = ["orientation", "isLoading", "className", "isClickable", "muted", "variant"];
function av(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ov(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? av(Object(n), !0).forEach(function(r) {
      db(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : av(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Xc() {
  return Xc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xc.apply(this, arguments);
}
function db(e, t, n) {
  return t = o_(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function o_(e) {
  var t = s_(e, "string");
  return _a(t) == "symbol" ? t : t + "";
}
function s_(e, t) {
  if (_a(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (_a(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function l_(e, t) {
  if (e == null) return {};
  var n = u_(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function u_(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var c_ = ["light", "dark", "muted"], rp = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.orientation, r = e.isLoading, i = e.className, a = e.isClickable, o = e.muted, s = e.variant, l = l_(e, a_), u = o ? "muted" : s;
  return /* @__PURE__ */ y.createElement(Qd, {
    orientation: n,
    isLoading: r,
    variant: u
  }, /* @__PURE__ */ y.createElement(lt, Xc({}, l, {
    className: V(i, "pgn__card", db({
      horizontal: n === "horizontal",
      clickable: a
    }, "pgn__card-".concat(u), u)),
    ref: t,
    tabIndex: a ? 0 : -1
  })));
});
rp.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies which orientation to use. */
  orientation: f.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: f.bool,
  /** Specifies loading state. */
  isLoading: f.bool,
  /** Specifies `Card` style variant. */
  variant: f.oneOf(c_),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: f.bool
};
rp.defaultProps = ov(ov({}, lt.defaultProps), {}, {
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
});
var ke = fd(rp, "Card", {
  muted: {
    deprType: vn.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
ke.Status = np;
ke.Header = Xd;
ke.Divider = qd;
ke.Section = Zd;
ke.Footer = Jd;
ke.ImageCap = ep;
ke.Context = pr;
ke.Body = tp;
var sv = { exports: {} }, qc = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    function i(o, s, l, u, c, p) {
      var d = u || "<<anonymous>>", g = p || l;
      if (s[l] == null)
        return o ? new Error("Required " + c + " `" + g + "` was not specified " + ("in `" + d + "`.")) : null;
      for (var w = arguments.length, x = Array(w > 6 ? w - 6 : 0), v = 6; v < w; v++)
        x[v - 6] = arguments[v];
      return r.apply(void 0, [s, l, d, c, g].concat(x));
    }
    var a = i.bind(null, !1);
    return a.isRequired = i.bind(null, !0), a;
  }
  e.exports = t.default;
})(qc, qc.exports);
var f_ = qc.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = f_, r = i(n);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a() {
    for (var o = arguments.length, s = Array(o), l = 0; l < o; l++)
      s[l] = arguments[l];
    function u() {
      for (var c = arguments.length, p = Array(c), d = 0; d < c; d++)
        p[d] = arguments[d];
      var g = null;
      return s.forEach(function(w) {
        if (g == null) {
          var x = w.apply(void 0, p);
          x != null && (g = x);
        }
      }), g;
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(sv, sv.exports);
var d_ = ["as", "className", "type", "tooltip"], p_ = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: f.string,
  /** Display feedback as a tooltip. */
  tooltip: f.bool,
  as: f.elementType
}, lo = /* @__PURE__ */ y.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, l = s === void 0 ? !1 : s, u = ce(e, d_);
    return /* @__PURE__ */ y.createElement(r, q({}, u, {
      ref: t,
      className: V(i, o + "-" + (l ? "tooltip" : "feedback"))
    }));
  }
);
lo.displayName = "Feedback";
lo.propTypes = p_;
var Pt = /* @__PURE__ */ y.createContext({
  controlId: void 0
}), m_ = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"], ip = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, l = e.isValid, u = l === void 0 ? !1 : l, c = e.isInvalid, p = c === void 0 ? !1 : c, d = e.isStatic, g = e.as, w = g === void 0 ? "input" : g, x = ce(e, m_), v = _.useContext(Pt), m = v.controlId, h = v.custom, E = h ? [i, "custom-control-input"] : [r, "form-check-input"], b = E[0], O = E[1];
  return r = we(b, O), /* @__PURE__ */ y.createElement(w, q({}, x, {
    ref: t,
    type: s,
    id: n || m,
    className: V(a, r, u && "is-valid", p && "is-invalid", d && "position-static")
  }));
});
ip.displayName = "FormCheckInput";
var h_ = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], ap = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = ce(e, h_), s = _.useContext(Pt), l = s.controlId, u = s.custom, c = u ? [r, "custom-control-label"] : [n, "form-check-label"], p = c[0], d = c[1];
  return n = we(p, d), /* @__PURE__ */ y.createElement("label", q({}, o, {
    ref: t,
    htmlFor: a || l,
    className: V(i, n)
  }));
});
ap.displayName = "FormCheckLabel";
var v_ = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"], mr = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a === void 0 ? !1 : a, s = e.disabled, l = s === void 0 ? !1 : s, u = e.isValid, c = u === void 0 ? !1 : u, p = e.isInvalid, d = p === void 0 ? !1 : p, g = e.feedbackTooltip, w = g === void 0 ? !1 : g, x = e.feedback, v = e.className, m = e.style, h = e.title, E = h === void 0 ? "" : h, b = e.type, O = b === void 0 ? "checkbox" : b, k = e.label, A = e.children, C = e.custom, S = e.as, N = S === void 0 ? "input" : S, G = ce(e, v_), B = O === "switch" ? !0 : C, j = B ? [i, "custom-control"] : [r, "form-check"], L = j[0], D = j[1];
  r = we(L, D);
  var K = _.useContext(Pt), Z = K.controlId, re = _.useMemo(function() {
    return {
      controlId: n || Z,
      custom: B
    };
  }, [Z, B, n]), J = B || k != null && k !== !1 && !A, se = /* @__PURE__ */ y.createElement(ip, q({}, G, {
    type: O === "switch" ? "checkbox" : O,
    ref: t,
    isValid: c,
    isInvalid: d,
    isStatic: !J,
    disabled: l,
    as: N
  }));
  return /* @__PURE__ */ y.createElement(Pt.Provider, {
    value: re
  }, /* @__PURE__ */ y.createElement("div", {
    style: m,
    className: V(v, r, B && "custom-" + O, o && r + "-inline")
  }, A || /* @__PURE__ */ y.createElement(y.Fragment, null, se, J && /* @__PURE__ */ y.createElement(ap, {
    title: E
  }, k), (c || d) && /* @__PURE__ */ y.createElement(lo, {
    type: c ? "valid" : "invalid",
    tooltip: w
  }, x))));
});
mr.displayName = "FormCheck";
mr.Input = ip;
mr.Label = ap;
var g_ = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"], op = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, l = e.lang, u = e.as, c = u === void 0 ? "input" : u, p = ce(e, g_), d = _.useContext(Pt), g = d.controlId, w = d.custom, x = "file", v = w ? [i, "custom-file-input"] : [r, "form-control-file"], m = v[0], h = v[1];
  return r = we(m, h), /* @__PURE__ */ y.createElement(c, q({}, p, {
    ref: t,
    id: n || g,
    type: x,
    lang: l,
    className: V(a, r, o && "is-valid", s && "is-invalid")
  }));
});
op.displayName = "FormFileInput";
var y_ = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], Us = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = ce(e, y_), s = _.useContext(Pt), l = s.controlId, u = s.custom, c = u ? [r, "custom-file-label"] : [n, "form-file-label"], p = c[0], d = c[1];
  return n = we(p, d), /* @__PURE__ */ y.createElement("label", q({}, o, {
    ref: t,
    htmlFor: a || l,
    className: V(i, n),
    "data-browse": o["data-browse"]
  }));
});
Us.displayName = "FormFileLabel";
var b_ = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"], Al = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a === void 0 ? !1 : a, s = e.isValid, l = s === void 0 ? !1 : s, u = e.isInvalid, c = u === void 0 ? !1 : u, p = e.feedbackTooltip, d = p === void 0 ? !1 : p, g = e.feedback, w = e.className, x = e.style, v = e.label, m = e.children, h = e.custom, E = e.lang, b = e["data-browse"], O = e.as, k = O === void 0 ? "div" : O, A = e.inputAs, C = A === void 0 ? "input" : A, S = ce(e, b_), N = h ? [i, "custom"] : [r, "form-file"], G = N[0], B = N[1];
  r = we(G, B);
  var j = "file", L = _.useContext(Pt), D = L.controlId, K = _.useMemo(function() {
    return {
      controlId: n || D,
      custom: h
    };
  }, [D, h, n]), Z = v != null && v !== !1 && !m, re = /* @__PURE__ */ y.createElement(op, q({}, S, {
    ref: t,
    isValid: l,
    isInvalid: c,
    disabled: o,
    as: C,
    lang: E
  }));
  return /* @__PURE__ */ y.createElement(Pt.Provider, {
    value: K
  }, /* @__PURE__ */ y.createElement(k, {
    style: x,
    className: V(w, r, h && "custom-" + j)
  }, m || /* @__PURE__ */ y.createElement(y.Fragment, null, h ? /* @__PURE__ */ y.createElement(y.Fragment, null, re, Z && /* @__PURE__ */ y.createElement(Us, {
    "data-browse": b
  }, v)) : /* @__PURE__ */ y.createElement(y.Fragment, null, Z && /* @__PURE__ */ y.createElement(Us, null, v), re), (l || c) && /* @__PURE__ */ y.createElement(lo, {
    type: l ? "valid" : "invalid",
    tooltip: d
  }, g))));
});
Al.displayName = "FormFile";
Al.Input = op;
Al.Label = Us;
var w_ = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"], pb = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, l = e.className, u = e.isValid, c = u === void 0 ? !1 : u, p = e.isInvalid, d = p === void 0 ? !1 : p, g = e.plaintext, w = e.readOnly, x = e.custom, v = e.as, m = v === void 0 ? "input" : v, h = ce(e, w_), E = _.useContext(Pt), b = E.controlId, O = x ? [r, "custom"] : [n, "form-control"], k = O[0], A = O[1];
  n = we(k, A);
  var C;
  if (g) {
    var S;
    C = (S = {}, S[n + "-plaintext"] = !0, S);
  } else if (i === "file") {
    var N;
    C = (N = {}, N[n + "-file"] = !0, N);
  } else if (i === "range") {
    var G;
    C = (G = {}, G[n + "-range"] = !0, G);
  } else if (m === "select" && x) {
    var B;
    C = (B = {}, B[n + "-select"] = !0, B[n + "-select-" + a] = a, B);
  } else {
    var j;
    C = (j = {}, j[n] = !0, j[n + "-" + a] = a, j);
  }
  return /* @__PURE__ */ y.createElement(m, q({}, h, {
    type: i,
    size: o,
    ref: t,
    readOnly: w,
    id: s || b,
    className: V(l, C, c && "is-valid", d && "is-invalid")
  }));
});
pb.displayName = "FormControl";
const mb = Object.assign(pb, {
  Feedback: lo
});
var E_ = ["bsPrefix", "className", "children", "controlId", "as"], hb = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, l = ce(e, E_);
  n = we(n, "form-group");
  var u = _.useMemo(function() {
    return {
      controlId: a
    };
  }, [a]);
  return /* @__PURE__ */ y.createElement(Pt.Provider, {
    value: u
  }, /* @__PURE__ */ y.createElement(s, q({}, l, {
    ref: t,
    className: V(r, n)
  }), i));
});
hb.displayName = "FormGroup";
var x_ = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"], O_ = {
  column: !1,
  srOnly: !1
}, sp = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, l = e.htmlFor, u = ce(e, x_), c = _.useContext(Pt), p = c.controlId;
  i = we(i, "form-label");
  var d = "col-form-label";
  typeof a == "string" && (d = d + " " + d + "-" + a);
  var g = V(s, i, o && "sr-only", a && d);
  return l = l || p, a ? /* @__PURE__ */ y.createElement(fb, q({
    ref: t,
    as: "label",
    className: g,
    htmlFor: l
  }, u)) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ y.createElement(r, q({
      ref: t,
      className: g,
      htmlFor: l
    }, u))
  );
});
sp.displayName = "FormLabel";
sp.defaultProps = O_;
var C_ = ["bsPrefix", "className", "as", "muted"], vb = /* @__PURE__ */ y.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = ce(e, C_);
    return n = we(n, "form-text"), /* @__PURE__ */ y.createElement(a, q({}, s, {
      ref: t,
      className: V(r, n, o && "text-muted")
    }));
  }
);
vb.displayName = "FormText";
var Tl = /* @__PURE__ */ y.forwardRef(function(e, t) {
  return /* @__PURE__ */ y.createElement(mr, q({}, e, {
    ref: t,
    type: "switch"
  }));
});
Tl.displayName = "Switch";
Tl.Input = mr.Input;
Tl.Label = mr.Label;
var k_ = ["bsPrefix", "inline", "className", "validated", "as"], S_ = _t("form-row"), P_ = {
  inline: !1
}, M = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, l = ce(e, k_);
  return n = we(n, "form"), /* @__PURE__ */ y.createElement(s, q({}, l, {
    ref: t,
    className: V(i, a && "was-validated", r && n + "-inline")
  }));
});
M.displayName = "Form";
M.defaultProps = P_;
M.Row = S_;
M.Group = hb;
M.Control = mb;
M.Check = mr;
M.File = Al;
M.Switch = Tl;
M.Label = sp;
M.Text = vb;
function Sn(e) {
  return typeof e == "string" || e instanceof String;
}
function lv(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function gb(e, t) {
  return Array.isArray(t) ? gb(e, (n, r) => t.includes(r)) : Object.entries(e).reduce((n, r) => {
    let [i, a] = r;
    return t(a, i) && (n[i] = a), n;
  }, {});
}
const X = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function __(e) {
  switch (e) {
    case X.LEFT:
      return X.FORCE_LEFT;
    case X.RIGHT:
      return X.FORCE_RIGHT;
    default:
      return e;
  }
}
function wu(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function Ws(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), r = Array.isArray(e);
  let i;
  if (n && r) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!Ws(t[i], e[i])) return !1;
    return !0;
  }
  if (n != r) return !1;
  if (t && e && typeof t == "object" && typeof e == "object") {
    const a = t instanceof Date, o = e instanceof Date;
    if (a && o) return t.getTime() == e.getTime();
    if (a != o) return !1;
    const s = t instanceof RegExp, l = e instanceof RegExp;
    if (s && l) return t.toString() == e.toString();
    if (s != l) return !1;
    const u = Object.keys(t);
    for (i = 0; i < u.length; i++) if (!Object.prototype.hasOwnProperty.call(e, u[i])) return !1;
    for (i = 0; i < u.length; i++) if (!Ws(e[u[i]], t[u[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class A_ {
  /** Current input value */
  /** Current cursor position */
  /** Old input value */
  /** Old selection */
  constructor(t) {
    for (Object.assign(this, t); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos); )
      --this.oldSelection.start;
    if (this.insertedCount)
      for (; this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end); )
        this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end ? ++this.oldSelection.end : ++this.cursorPos;
  }
  /** Start changing position */
  get startChangePos() {
    return Math.min(this.cursorPos, this.oldSelection.start);
  }
  /** Inserted symbols count */
  get insertedCount() {
    return this.cursorPos - this.startChangePos;
  }
  /** Inserted symbols */
  get inserted() {
    return this.value.substr(this.startChangePos, this.insertedCount);
  }
  /** Removed symbols count */
  get removedCount() {
    return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
    this.oldValue.length - this.value.length, 0);
  }
  /** Removed symbols */
  get removed() {
    return this.oldValue.substr(this.startChangePos, this.removedCount);
  }
  /** Unchanged head symbols */
  get head() {
    return this.value.substring(0, this.startChangePos);
  }
  /** Unchanged tail symbols */
  get tail() {
    return this.value.substring(this.startChangePos + this.insertedCount);
  }
  /** Remove direction */
  get removeDirection() {
    return !this.removedCount || this.insertedCount ? X.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? X.RIGHT : X.LEFT;
  }
}
function ae(e, t) {
  return new ae.InputMask(e, t);
}
function yb(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? ae.MaskedRegExp : Sn(e) ? ae.MaskedPattern : e === Date ? ae.MaskedDate : e === Number ? ae.MaskedNumber : Array.isArray(e) || e === Array ? ae.MaskedDynamic : ae.Masked && e.prototype instanceof ae.Masked ? e : ae.Masked && e instanceof ae.Masked ? e.constructor : e instanceof Function ? ae.MaskedFunction : (console.warn("Mask not found for mask", e), ae.Masked);
}
function Aa(e) {
  if (!e) throw new Error("Options in not defined");
  if (ae.Masked) {
    if (e.prototype instanceof ae.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof ae.Masked ? {
      mask: e
    } : lv(e) && e.mask instanceof ae.Masked ? e : {};
    if (t) {
      const r = t.mask;
      return {
        ...gb(t, (i, a) => !a.startsWith("_")),
        mask: t.constructor,
        _mask: r,
        ...n
      };
    }
  }
  return lv(e) ? {
    ...e
  } : {
    mask: e
  };
}
function tn(e) {
  if (ae.Masked && e instanceof ae.Masked) return e;
  const t = Aa(e), n = yb(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
ae.createMask = tn;
class lp {
  /** */
  /** */
  /** */
  /** Safely returns selection start */
  get selectionStart() {
    let t;
    try {
      t = this._unsafeSelectionStart;
    } catch {
    }
    return t ?? this.value.length;
  }
  /** Safely returns selection end */
  get selectionEnd() {
    let t;
    try {
      t = this._unsafeSelectionEnd;
    } catch {
    }
    return t ?? this.value.length;
  }
  /** Safely sets element selection */
  select(t, n) {
    if (!(t == null || n == null || t === this.selectionStart && n === this.selectionEnd))
      try {
        this._unsafeSelect(t, n);
      } catch {
      }
  }
  /** */
  get isActive() {
    return !1;
  }
  /** */
  /** */
  /** */
}
ae.MaskElement = lp;
const uv = 90, T_ = 89;
class Il extends lp {
  /** HTMLElement to use mask on */
  constructor(t) {
    super(), this.input = t, this._onKeydown = this._onKeydown.bind(this), this._onInput = this._onInput.bind(this), this._onBeforeinput = this._onBeforeinput.bind(this), this._onCompositionEnd = this._onCompositionEnd.bind(this);
  }
  get rootElement() {
    var t, n, r;
    return (t = (n = (r = this.input).getRootNode) == null ? void 0 : n.call(r)) != null ? t : document;
  }
  /** Is element in focus */
  get isActive() {
    return this.input === this.rootElement.activeElement;
  }
  /** Binds HTMLElement events to mask internal events */
  bindEvents(t) {
    this.input.addEventListener("keydown", this._onKeydown), this.input.addEventListener("input", this._onInput), this.input.addEventListener("beforeinput", this._onBeforeinput), this.input.addEventListener("compositionend", this._onCompositionEnd), this.input.addEventListener("drop", t.drop), this.input.addEventListener("click", t.click), this.input.addEventListener("focus", t.focus), this.input.addEventListener("blur", t.commit), this._handlers = t;
  }
  _onKeydown(t) {
    if (this._handlers.redo && (t.keyCode === uv && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === T_ && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === uv && (t.metaKey || t.ctrlKey))
      return t.preventDefault(), this._handlers.undo(t);
    t.isComposing || this._handlers.selectionChange(t);
  }
  _onBeforeinput(t) {
    if (t.inputType === "historyUndo" && this._handlers.undo)
      return t.preventDefault(), this._handlers.undo(t);
    if (t.inputType === "historyRedo" && this._handlers.redo)
      return t.preventDefault(), this._handlers.redo(t);
  }
  _onCompositionEnd(t) {
    this._handlers.input(t);
  }
  _onInput(t) {
    t.isComposing || this._handlers.input(t);
  }
  /** Unbinds HTMLElement events to mask internal events */
  unbindEvents() {
    this.input.removeEventListener("keydown", this._onKeydown), this.input.removeEventListener("input", this._onInput), this.input.removeEventListener("beforeinput", this._onBeforeinput), this.input.removeEventListener("compositionend", this._onCompositionEnd), this.input.removeEventListener("drop", this._handlers.drop), this.input.removeEventListener("click", this._handlers.click), this.input.removeEventListener("focus", this._handlers.focus), this.input.removeEventListener("blur", this._handlers.commit), this._handlers = {};
  }
}
ae.HTMLMaskElement = Il;
class I_ extends Il {
  /** InputElement to use mask on */
  constructor(t) {
    super(t), this.input = t;
  }
  /** Returns InputElement selection start */
  get _unsafeSelectionStart() {
    return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
  }
  /** Returns InputElement selection end */
  get _unsafeSelectionEnd() {
    return this.input.selectionEnd;
  }
  /** Sets InputElement selection */
  _unsafeSelect(t, n) {
    this.input.setSelectionRange(t, n);
  }
  get value() {
    return this.input.value;
  }
  set value(t) {
    this.input.value = t;
  }
}
ae.HTMLMaskElement = Il;
class bb extends Il {
  /** Returns HTMLElement selection start */
  get _unsafeSelectionStart() {
    const t = this.rootElement, n = t.getSelection && t.getSelection(), r = n && n.anchorOffset, i = n && n.focusOffset;
    return i == null || r == null || r < i ? r : i;
  }
  /** Returns HTMLElement selection end */
  get _unsafeSelectionEnd() {
    const t = this.rootElement, n = t.getSelection && t.getSelection(), r = n && n.anchorOffset, i = n && n.focusOffset;
    return i == null || r == null || r > i ? r : i;
  }
  /** Sets HTMLElement selection */
  _unsafeSelect(t, n) {
    if (!this.rootElement.createRange) return;
    const r = this.rootElement.createRange();
    r.setStart(this.input.firstChild || this.input, t), r.setEnd(this.input.lastChild || this.input, n);
    const i = this.rootElement, a = i.getSelection && i.getSelection();
    a && (a.removeAllRanges(), a.addRange(r));
  }
  /** HTMLElement value */
  get value() {
    return this.input.textContent || "";
  }
  set value(t) {
    this.input.textContent = t;
  }
}
ae.HTMLContenteditableMaskElement = bb;
class jl {
  constructor() {
    this.states = [], this.currentIndex = 0;
  }
  get currentState() {
    return this.states[this.currentIndex];
  }
  get isEmpty() {
    return this.states.length === 0;
  }
  push(t) {
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > jl.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
  }
  go(t) {
    return this.currentIndex = Math.min(Math.max(this.currentIndex + t, 0), this.states.length - 1), this.currentState;
  }
  undo() {
    return this.go(-1);
  }
  redo() {
    return this.go(1);
  }
  clear() {
    this.states.length = 0, this.currentIndex = 0;
  }
}
jl.MAX_LENGTH = 100;
class j_ {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof lp ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new bb(t) : new I_(t), this.masked = tn(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new jl(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
  }
  maskEquals(t) {
    var n;
    return t == null || ((n = this.masked) == null ? void 0 : n.maskEquals(t));
  }
  /** Masked */
  get mask() {
    return this.masked.mask;
  }
  set mask(t) {
    if (this.maskEquals(t)) return;
    if (!(t instanceof ae.Masked) && this.masked.constructor === yb(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof ae.Masked ? t : tn({
      mask: t
    });
    n.unmaskedValue = this.masked.unmaskedValue, this.masked = n;
  }
  /** Raw value */
  get value() {
    return this._value;
  }
  set value(t) {
    this.value !== t && (this.masked.value = t, this.updateControl("auto"));
  }
  /** Unmasked value */
  get unmaskedValue() {
    return this._unmaskedValue;
  }
  set unmaskedValue(t) {
    this.unmaskedValue !== t && (this.masked.unmaskedValue = t, this.updateControl("auto"));
  }
  /** Raw input value */
  get rawInputValue() {
    return this._rawInputValue;
  }
  set rawInputValue(t) {
    this.rawInputValue !== t && (this.masked.rawInputValue = t, this.updateControl(), this.alignCursor());
  }
  /** Typed unmasked value */
  get typedValue() {
    return this.masked.typedValue;
  }
  set typedValue(t) {
    this.masked.typedValueEquals(t) || (this.masked.typedValue = t, this.updateControl("auto"));
  }
  /** Display value */
  get displayValue() {
    return this.masked.displayValue;
  }
  /** Starts listening to element events */
  _bindEvents() {
    this.el.bindEvents({
      selectionChange: this._saveSelection,
      input: this._onInput,
      drop: this._onDrop,
      click: this._onClick,
      focus: this._onFocus,
      commit: this._onChange,
      undo: this._onUndo,
      redo: this._onRedo
    });
  }
  /** Stops listening to element events */
  _unbindEvents() {
    this.el && this.el.unbindEvents();
  }
  /** Fires custom event */
  _fireEvent(t, n) {
    const r = this._listeners[t];
    r && r.forEach((i) => i(n));
  }
  /** Current selection start */
  get selectionStart() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
  }
  /** Current cursor position */
  get cursorPos() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
  }
  set cursorPos(t) {
    !this.el || !this.el.isActive || (this.el.select(t, t), this._saveSelection());
  }
  /** Stores current selection */
  _saveSelection() {
    this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
      start: this.selectionStart,
      end: this.cursorPos
    };
  }
  /** Syncronizes model value from view */
  updateValue() {
    this.masked.value = this.el.value, this._value = this.masked.value, this._unmaskedValue = this.masked.unmaskedValue, this._rawInputValue = this.masked.rawInputValue;
  }
  /** Syncronizes view from model value, fires change events */
  updateControl(t) {
    const n = this.masked.unmaskedValue, r = this.masked.value, i = this.masked.rawInputValue, a = this.displayValue, o = this.unmaskedValue !== n || this.value !== r || this._rawInputValue !== i;
    this._unmaskedValue = n, this._value = r, this._rawInputValue = i, this.el.value !== a && (this.el.value = a), t === "auto" ? this.alignCursor() : t != null && (this.cursorPos = t), o && this._fireChangeEvents(), !this._historyChanging && (o || this.history.isEmpty) && this.history.push({
      unmaskedValue: n,
      selection: {
        start: this.selectionStart,
        end: this.cursorPos
      }
    });
  }
  /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
  updateOptions(t) {
    const {
      mask: n,
      ...r
    } = t, i = !this.maskEquals(n), a = this.masked.optionsIsChanged(r);
    i && (this.mask = n), a && this.masked.updateOptions(r), (i || a) && this.updateControl();
  }
  /** Updates cursor */
  updateCursor(t) {
    t != null && (this.cursorPos = t, this._delayUpdateCursor(t));
  }
  /** Delays cursor update to support mobile browsers */
  _delayUpdateCursor(t) {
    this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout(() => {
      this.el && (this.cursorPos = this._changingCursorPos, this._abortUpdateCursor());
    }, 10);
  }
  /** Fires custom events */
  _fireChangeEvents() {
    this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
  }
  /** Aborts delayed cursor update */
  _abortUpdateCursor() {
    this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
  }
  /** Aligns cursor to nearest available position */
  alignCursor() {
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, X.LEFT));
  }
  /** Aligns cursor only if selection is empty */
  alignCursorFriendly() {
    this.selectionStart === this.cursorPos && this.alignCursor();
  }
  /** Adds listener on custom event */
  on(t, n) {
    return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(n), this;
  }
  /** Removes custom event listener */
  off(t, n) {
    if (!this._listeners[t]) return this;
    if (!n)
      return delete this._listeners[t], this;
    const r = this._listeners[t].indexOf(n);
    return r >= 0 && this._listeners[t].splice(r, 1), this;
  }
  /** Handles view input event */
  _onInput(t) {
    this._inputEvent = t, this._abortUpdateCursor();
    const n = new A_({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), r = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, a = r === this.masked.rawInputValue ? n.removeDirection : X.NONE;
    let o = this.masked.nearestInputPos(n.startChangePos + i, a);
    a !== X.NONE && (o = this.masked.nearestInputPos(o, X.NONE)), this.updateControl(o), delete this._inputEvent;
  }
  /** Handles view change event and commits model value */
  _onChange() {
    this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
  }
  /** Handles view drop event, prevents by default */
  _onDrop(t) {
    t.preventDefault(), t.stopPropagation();
  }
  /** Restore last selection on focus */
  _onFocus(t) {
    this.alignCursorFriendly();
  }
  /** Restore last selection on focus */
  _onClick(t) {
    this.alignCursorFriendly();
  }
  _onUndo() {
    this._applyHistoryState(this.history.undo());
  }
  _onRedo() {
    this._applyHistoryState(this.history.redo());
  }
  _applyHistoryState(t) {
    t && (this._historyChanging = !0, this.unmaskedValue = t.unmaskedValue, this.el.select(t.selection.start, t.selection.end), this._saveSelection(), this._historyChanging = !1);
  }
  /** Unbind view events and removes element reference */
  destroy() {
    this._unbindEvents(), this._listeners.length = 0, delete this.el;
  }
}
ae.InputMask = j_;
class le {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new le()];
  }
  constructor(t) {
    Object.assign(this, {
      inserted: "",
      rawInserted: "",
      tailShift: 0,
      skip: !1
    }, t);
  }
  /** Aggregate changes */
  aggregate(t) {
    return this.inserted += t.inserted, this.rawInserted += t.rawInserted, this.tailShift += t.tailShift, this.skip = this.skip || t.skip, this;
  }
  /** Total offset considering all changes */
  get offset() {
    return this.tailShift + this.inserted.length;
  }
  get consumed() {
    return !!this.rawInserted || this.skip;
  }
  equals(t) {
    return this.inserted === t.inserted && this.tailShift === t.tailShift && this.rawInserted === t.rawInserted && this.skip === t.skip;
  }
}
ae.ChangeDetails = le;
class Rt {
  /** Tail value as string */
  /** Tail start position */
  /** Start position */
  constructor(t, n, r) {
    t === void 0 && (t = ""), n === void 0 && (n = 0), this.value = t, this.from = n, this.stop = r;
  }
  toString() {
    return this.value;
  }
  extend(t) {
    this.value += String(t);
  }
  appendTo(t) {
    return t.append(this.toString(), {
      tail: !0
    }).aggregate(t._appendPlaceholder());
  }
  get state() {
    return {
      value: this.value,
      from: this.from,
      stop: this.stop
    };
  }
  set state(t) {
    Object.assign(this, t);
  }
  unshift(t) {
    if (!this.value.length || t != null && this.from >= t) return "";
    const n = this.value[0];
    return this.value = this.value.slice(1), n;
  }
  shift() {
    if (!this.value.length) return "";
    const t = this.value[this.value.length - 1];
    return this.value = this.value.slice(0, -1), t;
  }
}
class Ve {
  /** */
  /** */
  /** Transforms value before mask processing */
  /** Transforms each char before mask processing */
  /** Validates if value is acceptable */
  /** Does additional processing at the end of editing */
  /** Format typed value to string */
  /** Parse string to get typed value */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  /** */
  constructor(t) {
    this._value = "", this._update({
      ...Ve.DEFAULTS,
      ...t
    }), this._initialized = !0;
  }
  /** Sets and applies new options */
  updateOptions(t) {
    this.optionsIsChanged(t) && this.withValueRefresh(this._update.bind(this, t));
  }
  /** Sets new options */
  _update(t) {
    Object.assign(this, t);
  }
  /** Mask state */
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(t) {
    this._value = t._value;
  }
  /** Resets value */
  reset() {
    this._value = "";
  }
  get value() {
    return this._value;
  }
  set value(t) {
    this.resolve(t, {
      input: !0
    });
  }
  /** Resolve new value */
  resolve(t, n) {
    n === void 0 && (n = {
      input: !0
    }), this.reset(), this.append(t, n, ""), this.doCommit();
  }
  get unmaskedValue() {
    return this.value;
  }
  set unmaskedValue(t) {
    this.resolve(t, {});
  }
  get typedValue() {
    return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
  }
  set typedValue(t) {
    this.format ? this.value = this.format(t, this) : this.unmaskedValue = String(t);
  }
  /** Value that includes raw user input */
  get rawInputValue() {
    return this.extractInput(0, this.displayValue.length, {
      raw: !0
    });
  }
  set rawInputValue(t) {
    this.resolve(t, {
      raw: !0
    });
  }
  get displayValue() {
    return this.value;
  }
  get isComplete() {
    return !0;
  }
  get isFilled() {
    return this.isComplete;
  }
  /** Finds nearest input position in direction */
  nearestInputPos(t, n) {
    return t;
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), Math.min(this.displayValue.length, n - t);
  }
  /** Extracts value in range considering flags */
  extractInput(t, n, r) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this.displayValue.slice(t, n);
  }
  /** Extracts tail in range */
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Rt(this.extractInput(t, n), t);
  }
  /** Appends tail */
  appendTail(t) {
    return Sn(t) && (t = new Rt(String(t))), t.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(t, n) {
    return t ? (this._value += t, new le({
      inserted: t,
      rawInserted: t
    })) : new le();
  }
  /** Appends char */
  _appendChar(t, n, r) {
    n === void 0 && (n = {});
    const i = this.state;
    let a;
    if ([t, a] = this.doPrepareChar(t, n), t && (a = a.aggregate(this._appendCharRaw(t, n)), !a.rawInserted && this.autofix === "pad")) {
      const o = this.state;
      this.state = i;
      let s = this.pad(n);
      const l = this._appendCharRaw(t, n);
      s = s.aggregate(l), l.rawInserted || s.equals(a) ? a = s : this.state = o;
    }
    if (a.inserted) {
      let o, s = this.doValidate(n) !== !1;
      if (s && r != null) {
        const l = this.state;
        if (this.overwrite === !0) {
          o = r.state;
          for (let c = 0; c < a.rawInserted.length; ++c)
            r.unshift(this.displayValue.length - a.tailShift);
        }
        let u = this.appendTail(r);
        if (s = u.rawInserted.length === r.toString().length, !(s && u.inserted) && this.overwrite === "shift") {
          this.state = l, o = r.state;
          for (let c = 0; c < a.rawInserted.length; ++c)
            r.shift();
          u = this.appendTail(r), s = u.rawInserted.length === r.toString().length;
        }
        s && u.inserted && (this.state = l);
      }
      s || (a = new le(), this.state = i, r && o && (r.state = o));
    }
    return a;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new le();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new le();
  }
  /** Appends symbols considering flags */
  append(t, n, r) {
    if (!Sn(t)) throw new Error("value should be string");
    const i = Sn(r) ? new Rt(String(r)) : r;
    n != null && n.tail && (n._beforeTailState = this.state);
    let a;
    [t, a] = this.doPrepare(t, n);
    for (let o = 0; o < t.length; ++o) {
      const s = this._appendChar(t[o], n, i);
      if (!s.rawInserted && !this.doSkipInvalid(t[o], n, i)) break;
      a.aggregate(s);
    }
    return (this.eager === !0 || this.eager === "append") && n != null && n.input && t && a.aggregate(this._appendEager()), i != null && (a.tailShift += this.appendTail(i).tailShift), a;
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new le();
  }
  /** Calls function and reapplies current value */
  withValueRefresh(t) {
    if (this._refreshing || !this._initialized) return t();
    this._refreshing = !0;
    const n = this.rawInputValue, r = this.value, i = t();
    return this.rawInputValue = n, this.value && this.value !== r && r.indexOf(this.value) === 0 && (this.append(r.slice(this.displayValue.length), {}, ""), this.doCommit()), delete this._refreshing, i;
  }
  runIsolated(t) {
    if (this._isolated || !this._initialized) return t(this);
    this._isolated = !0;
    const n = this.state, r = t(this);
    return this.state = n, delete this._isolated, r;
  }
  doSkipInvalid(t, n, r) {
    return !!this.skipInvalid;
  }
  /** Prepares string before mask processing */
  doPrepare(t, n) {
    return n === void 0 && (n = {}), le.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), le.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
  }
  /** Validates if value is acceptable */
  doValidate(t) {
    return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t));
  }
  /** Does additional processing at the end of editing */
  doCommit() {
    this.commit && this.commit(this.value, this);
  }
  splice(t, n, r, i, a) {
    r === void 0 && (r = ""), i === void 0 && (i = X.NONE), a === void 0 && (a = {
      input: !0
    });
    const o = t + n, s = this.extractTail(o), l = this.eager === !0 || this.eager === "remove";
    let u;
    l && (i = __(i), u = this.extractInput(0, o, {
      raw: !0
    }));
    let c = t;
    const p = new le();
    if (i !== X.NONE && (c = this.nearestInputPos(t, n > 1 && t !== 0 && !l ? X.NONE : i), p.tailShift = c - t), p.aggregate(this.remove(c)), l && i !== X.NONE && u === this.rawInputValue)
      if (i === X.FORCE_LEFT) {
        let d;
        for (; u === this.rawInputValue && (d = this.displayValue.length); )
          p.aggregate(new le({
            tailShift: -1
          })).aggregate(this.remove(d - 1));
      } else i === X.FORCE_RIGHT && s.unshift();
    return p.aggregate(this.append(r, a, s));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !Ws(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || Ve.EMPTY_VALUES.includes(t) && Ve.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new le();
  }
}
Ve.DEFAULTS = {
  skipInvalid: !0
};
Ve.EMPTY_VALUES = [void 0, null, ""];
ae.Masked = Ve;
class Zn {
  /** */
  constructor(t, n) {
    t === void 0 && (t = []), n === void 0 && (n = 0), this.chunks = t, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(t) {
    if (!String(t)) return;
    t = Sn(t) ? new Rt(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], r = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof Rt)
      r ? n.extend(t.toString()) : this.chunks.push(t);
    else if (t instanceof Zn) {
      if (t.stop == null) {
        let i;
        for (; t.chunks.length && t.chunks[0].stop == null; )
          i = t.chunks.shift(), i.from += t.from, this.extend(i);
      }
      t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
    }
  }
  appendTo(t) {
    if (!(t instanceof ae.MaskedPattern))
      return new Rt(this.toString()).appendTo(t);
    const n = new le();
    for (let r = 0; r < this.chunks.length; ++r) {
      const i = this.chunks[r], a = t._mapPosToBlock(t.displayValue.length), o = i.stop;
      let s;
      if (o != null && // if block not found or stop is behind lastBlock
      (!a || a.index <= o) && ((i instanceof Zn || // for continuous block also check if stop is exist
      t._stops.indexOf(o) >= 0) && n.aggregate(t._appendPlaceholder(o)), s = i instanceof Zn && t._blocks[o]), s) {
        const l = s.appendTail(i);
        n.aggregate(l);
        const u = i.toString().slice(l.rawInserted.length);
        u && n.aggregate(t.append(u, {
          tail: !0
        }));
      } else
        n.aggregate(t.append(i.toString(), {
          tail: !0
        }));
    }
    return n;
  }
  get state() {
    return {
      chunks: this.chunks.map((t) => t.state),
      from: this.from,
      stop: this.stop,
      blockIndex: this.blockIndex
    };
  }
  set state(t) {
    const {
      chunks: n,
      ...r
    } = t;
    Object.assign(this, r), this.chunks = n.map((i) => {
      const a = "chunks" in i ? new Zn() : new Rt();
      return a.state = i, a;
    });
  }
  unshift(t) {
    if (!this.chunks.length || t != null && this.from >= t) return "";
    const n = t != null ? t - this.from : t;
    let r = 0;
    for (; r < this.chunks.length; ) {
      const i = this.chunks[r], a = i.unshift(n);
      if (i.toString()) {
        if (!a) break;
        ++r;
      } else
        this.chunks.splice(r, 1);
      if (a) return a;
    }
    return "";
  }
  shift() {
    if (!this.chunks.length) return "";
    let t = this.chunks.length - 1;
    for (; 0 <= t; ) {
      const n = this.chunks[t], r = n.shift();
      if (n.toString()) {
        if (!r) break;
        --t;
      } else
        this.chunks.splice(t, 1);
      if (r) return r;
    }
    return "";
  }
}
class N_ {
  constructor(t, n) {
    this.masked = t, this._log = [];
    const {
      offset: r,
      index: i
    } = t._mapPosToBlock(n) || (n < 0 ? (
      // first
      {
        index: 0,
        offset: 0
      }
    ) : (
      // last
      {
        index: this.masked._blocks.length,
        offset: 0
      }
    ));
    this.offset = r, this.index = i, this.ok = !1;
  }
  get block() {
    return this.masked._blocks[this.index];
  }
  get pos() {
    return this.masked._blockStartPos(this.index) + this.offset;
  }
  get state() {
    return {
      index: this.index,
      offset: this.offset,
      ok: this.ok
    };
  }
  set state(t) {
    Object.assign(this, t);
  }
  pushState() {
    this._log.push(this.state);
  }
  popState() {
    const t = this._log.pop();
    return t && (this.state = t), t;
  }
  bindBlock() {
    this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.displayValue.length));
  }
  _pushLeft(t) {
    for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((n = this.block) == null ? void 0 : n.displayValue.length) || 0) {
      var n;
      if (t()) return this.ok = !0;
    }
    return this.ok = !1;
  }
  _pushRight(t) {
    for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0)
      if (t()) return this.ok = !0;
    return this.ok = !1;
  }
  pushLeftBeforeFilled() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, X.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, X.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, X.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, X.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, X.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, X.NONE), !0;
    });
  }
}
class wb {
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  constructor(t) {
    Object.assign(this, t), this._value = "", this.isFixed = !0;
  }
  get value() {
    return this._value;
  }
  get unmaskedValue() {
    return this.isUnmasking ? this.value : "";
  }
  get rawInputValue() {
    return this._isRawInput ? this.value : "";
  }
  get displayValue() {
    return this.value;
  }
  reset() {
    this._isRawInput = !1, this._value = "";
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new le();
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = X.NONE);
    const r = 0, i = this._value.length;
    switch (n) {
      case X.LEFT:
      case X.FORCE_LEFT:
        return r;
      case X.NONE:
      case X.RIGHT:
      case X.FORCE_RIGHT:
      default:
        return i;
    }
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._isRawInput ? n - t : 0;
  }
  extractInput(t, n, r) {
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), r === void 0 && (r = {}), r.raw && this._isRawInput && this._value.slice(t, n) || "";
  }
  get isComplete() {
    return !0;
  }
  get isFilled() {
    return !!this._value;
  }
  _appendChar(t, n) {
    if (n === void 0 && (n = {}), this.isFilled) return new le();
    const r = this.eager === !0 || this.eager === "append", a = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !r) && !n.tail, o = new le({
      inserted: this.char,
      rawInserted: a ? this.char : ""
    });
    return this._value = this.char, this._isRawInput = a && (n.raw || n.input), o;
  }
  _appendEager() {
    return this._appendChar(this.char, {
      tail: !0
    });
  }
  _appendPlaceholder() {
    const t = new le();
    return this.isFilled || (this._value = t.inserted = this.char), t;
  }
  extractTail() {
    return new Rt("");
  }
  appendTail(t) {
    return Sn(t) && (t = new Rt(String(t))), t.appendTo(this);
  }
  append(t, n, r) {
    const i = this._appendChar(t[0], n);
    return r != null && (i.tailShift += this.appendTail(r).tailShift), i;
  }
  doCommit() {
  }
  get state() {
    return {
      _value: this._value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(t) {
    this._value = t._value, this._isRawInput = !!t._rawInputValue;
  }
  pad(t) {
    return this._appendPlaceholder();
  }
}
class Hs {
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  constructor(t) {
    const {
      parent: n,
      isOptional: r,
      placeholderChar: i,
      displayChar: a,
      lazy: o,
      eager: s,
      ...l
    } = t;
    this.masked = tn(l), Object.assign(this, {
      parent: n,
      isOptional: r,
      placeholderChar: i,
      displayChar: a,
      lazy: o,
      eager: s
    });
  }
  reset() {
    this.isFilled = !1, this.masked.reset();
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new le();
  }
  get value() {
    return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
  }
  get unmaskedValue() {
    return this.masked.unmaskedValue;
  }
  get rawInputValue() {
    return this.masked.rawInputValue;
  }
  get displayValue() {
    return this.masked.value && this.displayChar || this.value;
  }
  get isComplete() {
    return !!this.masked.value || this.isOptional;
  }
  _appendChar(t, n) {
    if (n === void 0 && (n = {}), this.isFilled) return new le();
    const r = this.masked.state;
    let i = this.masked._appendChar(t, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new le(), this.masked.state = r), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(t, n, r) {
    return this.masked.append(t, this.currentMaskFlags(n), r);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new le() : (this.isFilled = !0, new le({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new le();
  }
  extractTail(t, n) {
    return this.masked.extractTail(t, n);
  }
  appendTail(t) {
    return this.masked.appendTail(t);
  }
  extractInput(t, n, r) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), this.masked.extractInput(t, n, r);
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = X.NONE);
    const r = 0, i = this.value.length, a = Math.min(Math.max(t, r), i);
    switch (n) {
      case X.LEFT:
      case X.FORCE_LEFT:
        return this.isComplete ? a : r;
      case X.RIGHT:
      case X.FORCE_RIGHT:
        return this.isComplete ? a : i;
      case X.NONE:
      default:
        return a;
    }
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), this.value.slice(t, n).length;
  }
  doValidate(t) {
    return this.masked.doValidate(this.currentMaskFlags(t)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(t)));
  }
  doCommit() {
    this.masked.doCommit();
  }
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue,
      masked: this.masked.state,
      isFilled: this.isFilled
    };
  }
  set state(t) {
    this.masked.state = t.masked, this.isFilled = t.isFilled;
  }
  currentMaskFlags(t) {
    var n;
    return {
      ...t,
      _beforeTailState: (t == null || (n = t._beforeTailState) == null ? void 0 : n.masked) || (t == null ? void 0 : t._beforeTailState)
    };
  }
  pad(t) {
    return new le();
  }
}
Hs.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class R_ extends Ve {
  /** */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const n = t.mask;
    n && (t.validate = (r) => r.search(n) >= 0), super._update(t);
  }
}
ae.MaskedRegExp = R_;
class ze extends Ve {
  /** */
  /** */
  /** Single char for empty input */
  /** Single char for filled input */
  /** Show placeholder only when needed */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  constructor(t) {
    super({
      ...ze.DEFAULTS,
      ...t,
      definitions: Object.assign({}, Hs.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
    });
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    t.definitions = Object.assign({}, this.definitions, t.definitions), super._update(t), this._rebuildMask();
  }
  _rebuildMask() {
    const t = this.definitions;
    this._blocks = [], this.exposeBlock = void 0, this._stops = [], this._maskedBlocks = {};
    const n = this.mask;
    if (!n || !t) return;
    let r = !1, i = !1;
    for (let a = 0; a < n.length; ++a) {
      if (this.blocks) {
        const u = n.slice(a), c = Object.keys(this.blocks).filter((d) => u.indexOf(d) === 0);
        c.sort((d, g) => g.length - d.length);
        const p = c[0];
        if (p) {
          const {
            expose: d,
            repeat: g,
            ...w
          } = Aa(this.blocks[p]), x = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...w,
            repeat: g,
            parent: this
          }, v = g != null ? new ae.RepeatBlock(
            x
            /* TODO */
          ) : tn(x);
          v && (this._blocks.push(v), d && (this.exposeBlock = v), this._maskedBlocks[p] || (this._maskedBlocks[p] = []), this._maskedBlocks[p].push(this._blocks.length - 1)), a += p.length - 1;
          continue;
        }
      }
      let o = n[a], s = o in t;
      if (o === ze.STOP_CHAR) {
        this._stops.push(this._blocks.length);
        continue;
      }
      if (o === "{" || o === "}") {
        r = !r;
        continue;
      }
      if (o === "[" || o === "]") {
        i = !i;
        continue;
      }
      if (o === ze.ESCAPE_CHAR) {
        if (++a, o = n[a], !o) break;
        s = !1;
      }
      const l = s ? new Hs({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Aa(t[o]),
        parent: this
      }) : new wb({
        char: o,
        eager: this.eager,
        isUnmasking: r
      });
      this._blocks.push(l);
    }
  }
  get state() {
    return {
      ...super.state,
      _blocks: this._blocks.map((t) => t.state)
    };
  }
  set state(t) {
    if (!t) {
      this.reset();
      return;
    }
    const {
      _blocks: n,
      ...r
    } = t;
    this._blocks.forEach((i, a) => i.state = n[a]), super.state = r;
  }
  reset() {
    super.reset(), this._blocks.forEach((t) => t.reset());
  }
  get isComplete() {
    return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((t) => t.isComplete);
  }
  get isFilled() {
    return this._blocks.every((t) => t.isFilled);
  }
  get isFixed() {
    return this._blocks.every((t) => t.isFixed);
  }
  get isOptional() {
    return this._blocks.every((t) => t.isOptional);
  }
  doCommit() {
    this._blocks.forEach((t) => t.doCommit()), super.doCommit();
  }
  get unmaskedValue() {
    return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((t, n) => t += n.unmaskedValue, "");
  }
  set unmaskedValue(t) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.unmaskedValue = t, this.appendTail(n), this.doCommit();
    } else super.unmaskedValue = t;
  }
  get value() {
    return this.exposeBlock ? this.exposeBlock.value : (
      // TODO return _value when not in change?
      this._blocks.reduce((t, n) => t += n.value, "")
    );
  }
  set value(t) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.value = t, this.appendTail(n), this.doCommit();
    } else super.value = t;
  }
  get typedValue() {
    return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
  }
  set typedValue(t) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.typedValue = t, this.appendTail(n), this.doCommit();
    } else super.typedValue = t;
  }
  get displayValue() {
    return this._blocks.reduce((t, n) => t += n.displayValue, "");
  }
  appendTail(t) {
    return super.appendTail(t).aggregate(this._appendPlaceholder());
  }
  _appendEager() {
    var t;
    const n = new le();
    let r = (t = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : t.index;
    if (r == null) return n;
    this._blocks[r].isFilled && ++r;
    for (let i = r; i < this._blocks.length; ++i) {
      const a = this._blocks[i]._appendEager();
      if (!a.inserted) break;
      n.aggregate(a);
    }
    return n;
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = this._mapPosToBlock(this.displayValue.length), i = new le();
    if (!r) return i;
    for (let o = r.index, s; s = this._blocks[o]; ++o) {
      var a;
      const l = s._appendChar(t, {
        ...n,
        _beforeTailState: (a = n._beforeTailState) == null || (a = a._blocks) == null ? void 0 : a[o]
      });
      if (i.aggregate(l), l.consumed) break;
    }
    return i;
  }
  extractTail(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const r = new Zn();
    return t === n || this._forEachBlocksInRange(t, n, (i, a, o, s) => {
      const l = i.extractTail(o, s);
      l.stop = this._findStopBefore(a), l.from = this._blockStartPos(a), l instanceof Zn && (l.blockIndex = a), r.extend(l);
    }), r;
  }
  extractInput(t, n, r) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), r === void 0 && (r = {}), t === n) return "";
    let i = "";
    return this._forEachBlocksInRange(t, n, (a, o, s, l) => {
      i += a.extractInput(s, l, r);
    }), i;
  }
  _findStopBefore(t) {
    let n;
    for (let r = 0; r < this._stops.length; ++r) {
      const i = this._stops[r];
      if (i <= t) n = i;
      else break;
    }
    return n;
  }
  /** Appends placeholder depending on laziness */
  _appendPlaceholder(t) {
    const n = new le();
    if (this.lazy && t == null) return n;
    const r = this._mapPosToBlock(this.displayValue.length);
    if (!r) return n;
    const i = r.index, a = t ?? this._blocks.length;
    return this._blocks.slice(i, a).forEach((o) => {
      if (!o.lazy || t != null) {
        var s;
        n.aggregate(o._appendPlaceholder((s = o._blocks) == null ? void 0 : s.length));
      }
    }), n;
  }
  /** Finds block in pos */
  _mapPosToBlock(t) {
    let n = "";
    for (let r = 0; r < this._blocks.length; ++r) {
      const i = this._blocks[r], a = n.length;
      if (n += i.displayValue, t <= n.length)
        return {
          index: r,
          offset: t - a
        };
    }
  }
  _blockStartPos(t) {
    return this._blocks.slice(0, t).reduce((n, r) => n += r.displayValue.length, 0);
  }
  _forEachBlocksInRange(t, n, r) {
    n === void 0 && (n = this.displayValue.length);
    const i = this._mapPosToBlock(t);
    if (i) {
      const a = this._mapPosToBlock(n), o = a && i.index === a.index, s = i.offset, l = a && o ? a.offset : this._blocks[i.index].displayValue.length;
      if (r(this._blocks[i.index], i.index, s, l), a && !o) {
        for (let u = i.index + 1; u < a.index; ++u)
          r(this._blocks[u], u, 0, this._blocks[u].displayValue.length);
        r(this._blocks[a.index], a.index, 0, a.offset);
      }
    }
  }
  remove(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const r = super.remove(t, n);
    return this._forEachBlocksInRange(t, n, (i, a, o, s) => {
      r.aggregate(i.remove(o, s));
    }), r;
  }
  nearestInputPos(t, n) {
    if (n === void 0 && (n = X.NONE), !this._blocks.length) return 0;
    const r = new N_(this, t);
    if (n === X.NONE)
      return r.pushRightBeforeInput() || (r.popState(), r.pushLeftBeforeInput()) ? r.pos : this.displayValue.length;
    if (n === X.LEFT || n === X.FORCE_LEFT) {
      if (n === X.LEFT) {
        if (r.pushRightBeforeFilled(), r.ok && r.pos === t) return t;
        r.popState();
      }
      if (r.pushLeftBeforeInput(), r.pushLeftBeforeRequired(), r.pushLeftBeforeFilled(), n === X.LEFT) {
        if (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.ok && r.pos <= t || (r.popState(), r.ok && r.pos <= t)) return r.pos;
        r.popState();
      }
      return r.ok ? r.pos : n === X.FORCE_LEFT ? 0 : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : 0);
    }
    return n === X.RIGHT || n === X.FORCE_RIGHT ? (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.pushRightBeforeFilled() ? r.pos : n === X.FORCE_RIGHT ? this.displayValue.length : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : this.nearestInputPos(t, X.LEFT))) : t;
  }
  totalInputPositions(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    let r = 0;
    return this._forEachBlocksInRange(t, n, (i, a, o, s) => {
      r += i.totalInputPositions(o, s);
    }), r;
  }
  /** Get block by name */
  maskedBlock(t) {
    return this.maskedBlocks(t)[0];
  }
  /** Get all blocks by name */
  maskedBlocks(t) {
    const n = this._maskedBlocks[t];
    return n ? n.map((r) => this._blocks[r]) : [];
  }
  pad(t) {
    const n = new le();
    return this._forEachBlocksInRange(0, this.displayValue.length, (r) => n.aggregate(r.pad(t))), n;
  }
}
ze.DEFAULTS = {
  ...Ve.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
ze.STOP_CHAR = "`";
ze.ESCAPE_CHAR = "\\";
ze.InputDefinition = Hs;
ze.FixedDefinition = wb;
ae.MaskedPattern = ze;
class ts extends ze {
  /**
    Optionally sets max length of pattern.
    Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
  */
  /** Min bound */
  /** Max bound */
  get _matchFrom() {
    return this.maxLength - String(this.from).length;
  }
  constructor(t) {
    super(t);
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const {
      to: n = this.to || 0,
      from: r = this.from || 0,
      maxLength: i = this.maxLength || 0,
      autofix: a = this.autofix,
      ...o
    } = t;
    this.to = n, this.from = r, this.maxLength = Math.max(String(n).length, i), this.autofix = a;
    const s = String(this.from).padStart(this.maxLength, "0"), l = String(this.to).padStart(this.maxLength, "0");
    let u = 0;
    for (; u < l.length && l[u] === s[u]; ) ++u;
    o.mask = l.slice(0, u).replace(/0/g, "\\0") + "0".repeat(this.maxLength - u), super._update(o);
  }
  get isComplete() {
    return super.isComplete && !!this.value;
  }
  boundaries(t) {
    let n = "", r = "";
    const [, i, a] = t.match(/^(\D*)(\d*)(\D*)/) || [];
    return a && (n = "0".repeat(i.length) + a, r = "9".repeat(i.length) + a), n = n.padEnd(this.maxLength, "0"), r = r.padEnd(this.maxLength, "9"), [n, r];
  }
  doPrepareChar(t, n) {
    n === void 0 && (n = {});
    let r;
    return [t, r] = super.doPrepareChar(t.replace(/\D/g, ""), n), t || (r.skip = !this.isComplete), [t, r];
  }
  _appendCharRaw(t, n) {
    if (n === void 0 && (n = {}), !this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(t, n);
    const r = String(this.from).padStart(this.maxLength, "0"), i = String(this.to).padStart(this.maxLength, "0"), [a, o] = this.boundaries(this.value + t);
    return Number(o) < this.from ? super._appendCharRaw(r[this.value.length], n) : Number(a) > this.to ? !n.tail && this.autofix === "pad" && this.value.length + 1 < this.maxLength ? super._appendCharRaw(r[this.value.length], n).aggregate(this._appendCharRaw(t, n)) : super._appendCharRaw(i[this.value.length], n) : super._appendCharRaw(t, n);
  }
  doValidate(t) {
    const n = this.value;
    if (n.search(/[^0]/) === -1 && n.length <= this._matchFrom) return !0;
    const [i, a] = this.boundaries(n);
    return this.from <= Number(a) && Number(i) <= this.to && super.doValidate(t);
  }
  pad(t) {
    const n = new le();
    if (this.value.length === this.maxLength) return n;
    const r = this.value, i = this.maxLength - this.value.length;
    if (i) {
      this.reset();
      for (let a = 0; a < i; ++a)
        n.aggregate(super._appendCharRaw("0", t));
      r.split("").forEach((a) => this._appendCharRaw(a));
    }
    return n;
  }
}
ae.MaskedRange = ts;
const F_ = "d{.}`m{.}`Y";
class Ht extends ze {
  static extractPatternOptions(t) {
    const {
      mask: n,
      pattern: r,
      ...i
    } = t;
    return {
      ...i,
      mask: Sn(n) ? n : r
    };
  }
  /** Pattern mask for date according to {@link MaskedDate#format} */
  /** Start date */
  /** End date */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super(Ht.extractPatternOptions({
      ...Ht.DEFAULTS,
      ...t
    }));
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const {
      mask: n,
      pattern: r,
      blocks: i,
      ...a
    } = {
      ...Ht.DEFAULTS,
      ...t
    }, o = Object.assign({}, Ht.GET_DEFAULT_BLOCKS());
    t.min && (o.Y.from = t.min.getFullYear()), t.max && (o.Y.to = t.max.getFullYear()), t.min && t.max && o.Y.from === o.Y.to && (o.m.from = t.min.getMonth() + 1, o.m.to = t.max.getMonth() + 1, o.m.from === o.m.to && (o.d.from = t.min.getDate(), o.d.to = t.max.getDate())), Object.assign(o, this.blocks, i), super._update({
      ...a,
      mask: Sn(n) ? n : r,
      blocks: o
    });
  }
  doValidate(t) {
    const n = this.date;
    return super.doValidate(t) && (!this.isComplete || this.isDateExist(this.value) && n != null && (this.min == null || this.min <= n) && (this.max == null || n <= this.max));
  }
  /** Checks if date is exists */
  isDateExist(t) {
    return this.format(this.parse(t, this), this).indexOf(t) >= 0;
  }
  /** Parsed Date */
  get date() {
    return this.typedValue;
  }
  set date(t) {
    this.typedValue = t;
  }
  get typedValue() {
    return this.isComplete ? super.typedValue : null;
  }
  set typedValue(t) {
    super.typedValue = t;
  }
  maskEquals(t) {
    return t === Date || super.maskEquals(t);
  }
  optionsIsChanged(t) {
    return super.optionsIsChanged(Ht.extractPatternOptions(t));
  }
}
Ht.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: ts,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: ts,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: ts,
    from: 1900,
    to: 9999
  }
});
Ht.DEFAULTS = {
  ...ze.DEFAULTS,
  mask: Date,
  pattern: F_,
  format: (e, t) => {
    if (!e) return "";
    const n = String(e.getDate()).padStart(2, "0"), r = String(e.getMonth() + 1).padStart(2, "0"), i = e.getFullYear();
    return [n, r, i].join(".");
  },
  parse: (e, t) => {
    const [n, r, i] = e.split(".").map(Number);
    return new Date(i, r - 1, n);
  }
};
ae.MaskedDate = Ht;
class Nl extends Ve {
  constructor(t) {
    super({
      ...Nl.DEFAULTS,
      ...t
    }), this.currentMask = void 0;
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    super._update(t), "mask" in t && (this.exposeMask = void 0, this.compiledMasks = Array.isArray(t.mask) ? t.mask.map((n) => {
      const {
        expose: r,
        ...i
      } = Aa(n), a = tn({
        overwrite: this._overwrite,
        eager: this._eager,
        skipInvalid: this._skipInvalid,
        ...i
      });
      return r && (this.exposeMask = a), a;
    }) : []);
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = this._applyDispatch(t, n);
    return this.currentMask && r.aggregate(this.currentMask._appendChar(t, this.currentMaskFlags(n))), r;
  }
  _applyDispatch(t, n, r) {
    t === void 0 && (t = ""), n === void 0 && (n = {}), r === void 0 && (r = "");
    const i = n.tail && n._beforeTailState != null ? n._beforeTailState._value : this.value, a = this.rawInputValue, o = n.tail && n._beforeTailState != null ? n._beforeTailState._rawInputValue : a, s = a.slice(o.length), l = this.currentMask, u = new le(), c = l == null ? void 0 : l.state;
    return this.currentMask = this.doDispatch(t, {
      ...n
    }, r), this.currentMask && (this.currentMask !== l ? (this.currentMask.reset(), o && (this.currentMask.append(o, {
      raw: !0
    }), u.tailShift = this.currentMask.value.length - i.length), s && (u.tailShift += this.currentMask.append(s, {
      raw: !0,
      tail: !0
    }).tailShift)) : c && (this.currentMask.state = c)), u;
  }
  _appendPlaceholder() {
    const t = this._applyDispatch();
    return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t;
  }
  _appendEager() {
    const t = this._applyDispatch();
    return this.currentMask && t.aggregate(this.currentMask._appendEager()), t;
  }
  appendTail(t) {
    const n = new le();
    return t && n.aggregate(this._applyDispatch("", {}, t)), n.aggregate(this.currentMask ? this.currentMask.appendTail(t) : super.appendTail(t));
  }
  currentMaskFlags(t) {
    var n, r;
    return {
      ...t,
      _beforeTailState: ((n = t._beforeTailState) == null ? void 0 : n.currentMaskRef) === this.currentMask && ((r = t._beforeTailState) == null ? void 0 : r.currentMask) || t._beforeTailState
    };
  }
  doDispatch(t, n, r) {
    return n === void 0 && (n = {}), r === void 0 && (r = ""), this.dispatch(t, this, n, r);
  }
  doValidate(t) {
    return super.doValidate(t) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(t)));
  }
  doPrepare(t, n) {
    n === void 0 && (n = {});
    let [r, i] = super.doPrepare(t, n);
    if (this.currentMask) {
      let a;
      [r, a] = super.doPrepare(r, this.currentMaskFlags(n)), i = i.aggregate(a);
    }
    return [r, i];
  }
  doPrepareChar(t, n) {
    n === void 0 && (n = {});
    let [r, i] = super.doPrepareChar(t, n);
    if (this.currentMask) {
      let a;
      [r, a] = super.doPrepareChar(r, this.currentMaskFlags(n)), i = i.aggregate(a);
    }
    return [r, i];
  }
  reset() {
    var t;
    (t = this.currentMask) == null || t.reset(), this.compiledMasks.forEach((n) => n.reset());
  }
  get value() {
    return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : "";
  }
  set value(t) {
    this.exposeMask ? (this.exposeMask.value = t, this.currentMask = this.exposeMask, this._applyDispatch()) : super.value = t;
  }
  get unmaskedValue() {
    return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : "";
  }
  set unmaskedValue(t) {
    this.exposeMask ? (this.exposeMask.unmaskedValue = t, this.currentMask = this.exposeMask, this._applyDispatch()) : super.unmaskedValue = t;
  }
  get typedValue() {
    return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : "";
  }
  set typedValue(t) {
    if (this.exposeMask) {
      this.exposeMask.typedValue = t, this.currentMask = this.exposeMask, this._applyDispatch();
      return;
    }
    let n = String(t);
    this.currentMask && (this.currentMask.typedValue = t, n = this.currentMask.unmaskedValue), this.unmaskedValue = n;
  }
  get displayValue() {
    return this.currentMask ? this.currentMask.displayValue : "";
  }
  get isComplete() {
    var t;
    return !!((t = this.currentMask) != null && t.isComplete);
  }
  get isFilled() {
    var t;
    return !!((t = this.currentMask) != null && t.isFilled);
  }
  remove(t, n) {
    const r = new le();
    return this.currentMask && r.aggregate(this.currentMask.remove(t, n)).aggregate(this._applyDispatch()), r;
  }
  get state() {
    var t;
    return {
      ...super.state,
      _rawInputValue: this.rawInputValue,
      compiledMasks: this.compiledMasks.map((n) => n.state),
      currentMaskRef: this.currentMask,
      currentMask: (t = this.currentMask) == null ? void 0 : t.state
    };
  }
  set state(t) {
    const {
      compiledMasks: n,
      currentMaskRef: r,
      currentMask: i,
      ...a
    } = t;
    n && this.compiledMasks.forEach((o, s) => o.state = n[s]), r != null && (this.currentMask = r, this.currentMask.state = i), super.state = a;
  }
  extractInput(t, n, r) {
    return this.currentMask ? this.currentMask.extractInput(t, n, r) : "";
  }
  extractTail(t, n) {
    return this.currentMask ? this.currentMask.extractTail(t, n) : super.extractTail(t, n);
  }
  doCommit() {
    this.currentMask && this.currentMask.doCommit(), super.doCommit();
  }
  nearestInputPos(t, n) {
    return this.currentMask ? this.currentMask.nearestInputPos(t, n) : super.nearestInputPos(t, n);
  }
  get overwrite() {
    return this.currentMask ? this.currentMask.overwrite : this._overwrite;
  }
  set overwrite(t) {
    this._overwrite = t;
  }
  get eager() {
    return this.currentMask ? this.currentMask.eager : this._eager;
  }
  set eager(t) {
    this._eager = t;
  }
  get skipInvalid() {
    return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
  }
  set skipInvalid(t) {
    this._skipInvalid = t;
  }
  get autofix() {
    return this.currentMask ? this.currentMask.autofix : this._autofix;
  }
  set autofix(t) {
    this._autofix = t;
  }
  maskEquals(t) {
    return Array.isArray(t) ? this.compiledMasks.every((n, r) => {
      if (!t[r]) return;
      const {
        mask: i,
        ...a
      } = t[r];
      return Ws(n, a) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
Nl.DEFAULTS = {
  ...Ve.DEFAULTS,
  dispatch: (e, t, n, r) => {
    if (!t.compiledMasks.length) return;
    const i = t.rawInputValue, a = t.compiledMasks.map((o, s) => {
      const l = t.currentMask === o, u = l ? o.displayValue.length : o.nearestInputPos(o.displayValue.length, X.FORCE_LEFT);
      return o.rawInputValue !== i ? (o.reset(), o.append(i, {
        raw: !0
      })) : l || o.remove(u), o.append(e, t.currentMaskFlags(n)), o.appendTail(r), {
        index: s,
        weight: o.rawInputValue.length,
        totalInputPositions: o.totalInputPositions(0, Math.max(u, o.nearestInputPos(o.displayValue.length, X.FORCE_LEFT)))
      };
    });
    return a.sort((o, s) => s.weight - o.weight || s.totalInputPositions - o.totalInputPositions), t.compiledMasks[a[0].index];
  }
};
ae.MaskedDynamic = Nl;
class Rl extends ze {
  constructor(t) {
    super({
      ...Rl.DEFAULTS,
      ...t
    });
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const {
      enum: n,
      ...r
    } = t;
    if (n) {
      const i = n.map((s) => s.length), a = Math.min(...i), o = Math.max(...i) - a;
      r.mask = "*".repeat(a), o && (r.mask += "[" + "*".repeat(o) + "]"), this.enum = n;
    }
    super._update(r);
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = Math.min(this.nearestInputPos(0, X.FORCE_RIGHT), this.value.length), i = this.enum.filter((a) => this.matchValue(a, this.unmaskedValue + t, r));
    if (i.length) {
      i.length === 1 && this._forEachBlocksInRange(0, this.value.length, (o, s) => {
        const l = i[0][s];
        s >= this.value.length || l === o.value || (o.reset(), o._appendChar(l, n));
      });
      const a = super._appendCharRaw(i[0][this.value.length], n);
      return i.length === 1 && i[0].slice(this.unmaskedValue.length).split("").forEach((o) => a.aggregate(super._appendCharRaw(o))), a;
    }
    return new le({
      skip: !this.isComplete
    });
  }
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Rt("", t);
  }
  remove(t, n) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), t === n) return new le();
    const r = Math.min(super.nearestInputPos(0, X.FORCE_RIGHT), this.value.length);
    let i;
    for (i = t; i >= 0 && !(this.enum.filter((s) => this.matchValue(s, this.value.slice(r, i), r)).length > 1); --i)
      ;
    const a = super.remove(i, n);
    return a.tailShift += i - t, a;
  }
  get isComplete() {
    return this.enum.indexOf(this.value) >= 0;
  }
}
Rl.DEFAULTS = {
  ...ze.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
ae.MaskedEnum = Rl;
class D_ extends Ve {
  /** */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    super._update({
      ...t,
      validate: t.mask
    });
  }
}
ae.MaskedFunction = D_;
var Eb;
class nt extends Ve {
  /** Single char */
  /** Single char */
  /** Array of single chars */
  /** */
  /** */
  /** Digits after point */
  /** Flag to remove leading and trailing zeros in the end of editing */
  /** Flag to pad trailing zeros after point in the end of editing */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super({
      ...nt.DEFAULTS,
      ...t
    });
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    super._update(t), this._updateRegExps();
  }
  _updateRegExps() {
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", r = (this.scale ? "(" + wu(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + r), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(wu).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(wu(this.thousandsSeparator), "g");
  }
  _removeThousandsSeparators(t) {
    return t.replace(this._thousandsSeparatorRegExp, "");
  }
  _insertThousandsSeparators(t) {
    const n = t.split(this.radix);
    return n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), n.join(this.radix);
  }
  doPrepareChar(t, n) {
    n === void 0 && (n = {});
    const [r, i] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && /*
      radix should be mapped when
      1) input is done from keyboard = flags.input && flags.raw
      2) unmasked value is set = !flags.input && !flags.raw
      and should not be mapped when
      1) value is set = flags.input && !flags.raw
      2) raw value is set = !flags.input && flags.raw
    */
    (n.input && n.raw || !n.input && !n.raw) ? t.replace(this._mapToRadixRegExp, this.radix) : t), n);
    return t && !r && (i.skip = !0), r && !this.allowPositive && !this.value && r !== "-" && i.aggregate(this._appendChar("-")), [r, i];
  }
  _separatorsCount(t, n) {
    n === void 0 && (n = !1);
    let r = 0;
    for (let i = 0; i < t; ++i)
      this._value.indexOf(this.thousandsSeparator, i) === i && (++r, n && (t += this.thousandsSeparator.length));
    return r;
  }
  _separatorsCountFromSlice(t) {
    return t === void 0 && (t = this._value), this._separatorsCount(this._removeThousandsSeparators(t).length, !0);
  }
  extractInput(t, n, r) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), [t, n] = this._adjustRangeWithSeparators(t, n), this._removeThousandsSeparators(super.extractInput(t, n, r));
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, i = this._separatorsCountFromSlice(r);
    this._value = this._removeThousandsSeparators(this.value);
    const a = this._value;
    this._value += t;
    const o = this.number;
    let s = !isNaN(o), l = !1;
    if (s) {
      let d;
      this.min != null && this.min < 0 && this.number < this.min && (d = this.min), this.max != null && this.max > 0 && this.number > this.max && (d = this.max), d != null && (this.autofix ? (this._value = this.format(d, this).replace(nt.UNMASKED_RADIX, this.radix), l || (l = a === this._value && !n.tail)) : s = !1), s && (s = !!this._value.match(this._numberRegExp));
    }
    let u;
    s ? u = new le({
      inserted: this._value.slice(a.length),
      rawInserted: l ? "" : t,
      skip: l
    }) : (this._value = a, u = new le()), this._value = this._insertThousandsSeparators(this._value);
    const c = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, p = this._separatorsCountFromSlice(c);
    return u.tailShift += (p - i) * this.thousandsSeparator.length, u;
  }
  _findSeparatorAround(t) {
    if (this.thousandsSeparator) {
      const n = t - this.thousandsSeparator.length + 1, r = this.value.indexOf(this.thousandsSeparator, n);
      if (r <= t) return r;
    }
    return -1;
  }
  _adjustRangeWithSeparators(t, n) {
    const r = this._findSeparatorAround(t);
    r >= 0 && (t = r);
    const i = this._findSeparatorAround(n);
    return i >= 0 && (n = i + this.thousandsSeparator.length), [t, n];
  }
  remove(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), [t, n] = this._adjustRangeWithSeparators(t, n);
    const r = this.value.slice(0, t), i = this.value.slice(n), a = this._separatorsCount(r.length);
    this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(r + i));
    const o = this._separatorsCountFromSlice(r);
    return new le({
      tailShift: (o - a) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(t, n) {
    if (!this.thousandsSeparator) return t;
    switch (n) {
      case X.NONE:
      case X.LEFT:
      case X.FORCE_LEFT: {
        const r = this._findSeparatorAround(t - 1);
        if (r >= 0) {
          const i = r + this.thousandsSeparator.length;
          if (t < i || this.value.length <= i || n === X.FORCE_LEFT)
            return r;
        }
        break;
      }
      case X.RIGHT:
      case X.FORCE_RIGHT: {
        const r = this._findSeparatorAround(t);
        if (r >= 0)
          return r + this.thousandsSeparator.length;
      }
    }
    return t;
  }
  doCommit() {
    if (this.value) {
      const t = this.number;
      let n = t;
      this.min != null && (n = Math.max(n, this.min)), this.max != null && (n = Math.min(n, this.max)), n !== t && (this.unmaskedValue = this.format(n, this));
      let r = this.value;
      this.normalizeZeros && (r = this._normalizeZeros(r)), this.padFractionalZeros && this.scale > 0 && (r = this._padFractionalZeros(r)), this._value = r;
    }
    super.doCommit();
  }
  _normalizeZeros(t) {
    const n = this._removeThousandsSeparators(t).split(this.radix);
    return n[0] = n[0].replace(/^(\D*)(0*)(\d*)/, (r, i, a, o) => i + o), t.length && !/\d$/.test(n[0]) && (n[0] = n[0] + "0"), n.length > 1 && (n[1] = n[1].replace(/0*$/, ""), n[1].length || (n.length = 1)), this._insertThousandsSeparators(n.join(this.radix));
  }
  _padFractionalZeros(t) {
    if (!t) return t;
    const n = t.split(this.radix);
    return n.length < 2 && n.push(""), n[1] = n[1].padEnd(this.scale, "0"), n.join(this.radix);
  }
  doSkipInvalid(t, n, r) {
    n === void 0 && (n = {});
    const i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === nt.UNMASKED_RADIX || this.mapToRadix.includes(t));
    return super.doSkipInvalid(t, n, r) && !i;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, nt.UNMASKED_RADIX);
  }
  set unmaskedValue(t) {
    super.unmaskedValue = t;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(t) {
    this.rawInputValue = this.format(t, this).replace(nt.UNMASKED_RADIX, this.radix);
  }
  /** Parsed Number */
  get number() {
    return this.typedValue;
  }
  set number(t) {
    this.typedValue = t;
  }
  get allowNegative() {
    return this.min != null && this.min < 0 || this.max != null && this.max < 0;
  }
  get allowPositive() {
    return this.min != null && this.min > 0 || this.max != null && this.max > 0;
  }
  typedValueEquals(t) {
    return (super.typedValueEquals(t) || nt.EMPTY_VALUES.includes(t) && nt.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
  }
}
Eb = nt;
nt.UNMASKED_RADIX = ".";
nt.EMPTY_VALUES = [...Ve.EMPTY_VALUES, 0];
nt.DEFAULTS = {
  ...Ve.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [Eb.UNMASKED_RADIX],
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  scale: 2,
  normalizeZeros: !0,
  padFractionalZeros: !1,
  parse: Number,
  format: (e) => e.toLocaleString("en-US", {
    useGrouping: !1,
    maximumFractionDigits: 20
  })
};
ae.MaskedNumber = nt;
const Zc = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function xb(e, t, n) {
  t === void 0 && (t = Zc.MASKED), n === void 0 && (n = Zc.MASKED);
  const r = tn(e);
  return (i) => r.runIsolated((a) => (a[t] = i, a[n]));
}
function L_(e, t, n, r) {
  return xb(t, n, r)(e);
}
ae.PIPE_TYPE = Zc;
ae.createPipe = xb;
ae.pipe = L_;
class M_ extends ze {
  get repeatFrom() {
    var t;
    return (t = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === 1 / 0 ? 0 : this.repeat) != null ? t : 0;
  }
  get repeatTo() {
    var t;
    return (t = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) != null ? t : 1 / 0;
  }
  constructor(t) {
    super(t);
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    var n, r, i;
    const {
      repeat: a,
      ...o
    } = Aa(t);
    this._blockOpts = Object.assign({}, this._blockOpts, o);
    const s = tn(this._blockOpts);
    this.repeat = (n = (r = a ?? s.repeat) != null ? r : this.repeat) != null ? n : 1 / 0, super._update({
      mask: "m".repeat(Math.max(this.repeatTo === 1 / 0 && ((i = this._blocks) == null ? void 0 : i.length) || 0, this.repeatFrom)),
      blocks: {
        m: s
      },
      eager: s.eager,
      overwrite: s.overwrite,
      skipInvalid: s.skipInvalid,
      lazy: s.lazy,
      placeholderChar: s.placeholderChar,
      displayChar: s.displayChar
    });
  }
  _allocateBlock(t) {
    if (t < this._blocks.length) return this._blocks[t];
    if (this.repeatTo === 1 / 0 || this._blocks.length < this.repeatTo)
      return this._blocks.push(tn(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = new le();
    for (
      let l = (i = (a = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : a.index) != null ? i : Math.max(this._blocks.length - 1, 0), u, c;
      // try to get a block or
      // try to allocate a new block if not allocated already
      u = (o = this._blocks[l]) != null ? o : c = !c && this._allocateBlock(l);
      ++l
    ) {
      var i, a, o, s;
      const p = u._appendChar(t, {
        ...n,
        _beforeTailState: (s = n._beforeTailState) == null || (s = s._blocks) == null ? void 0 : s[l]
      });
      if (p.skip && c) {
        this._blocks.pop(), this.mask = this.mask.slice(1);
        break;
      }
      if (r.aggregate(p), p.consumed) break;
    }
    return r;
  }
  _trimEmptyTail(t, n) {
    var r, i;
    t === void 0 && (t = 0);
    const a = Math.max(((r = this._mapPosToBlock(t)) == null ? void 0 : r.index) || 0, this.repeatFrom, 0);
    let o;
    n != null && (o = (i = this._mapPosToBlock(n)) == null ? void 0 : i.index), o == null && (o = this._blocks.length - 1);
    let s = 0;
    for (let l = o; a <= l && !this._blocks[l].unmaskedValue; --l, ++s)
      ;
    s && (this._blocks.splice(o - s + 1, s), this.mask = this.mask.slice(s));
  }
  reset() {
    super.reset(), this._trimEmptyTail();
  }
  remove(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const r = super.remove(t, n);
    return this._trimEmptyTail(t, n), r;
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n == null && this.repeatTo === 1 / 0 ? 1 / 0 : super.totalInputPositions(t, n);
  }
  get state() {
    return super.state;
  }
  set state(t) {
    this._blocks.length = t._blocks.length, this.mask = this.mask.slice(0, this._blocks.length), super.state = t;
  }
}
ae.RepeatBlock = M_;
try {
  globalThis.IMask = ae;
} catch {
}
const Ob = {
  // common
  mask: f.oneOfType([f.array, f.func, f.string, f.instanceOf(RegExp), f.oneOf([Date, Number, ae.Masked]), f.instanceOf(ae.Masked)]),
  value: f.any,
  unmask: f.oneOfType([f.bool, f.oneOf(["typed"])]),
  prepare: f.func,
  prepareChar: f.func,
  validate: f.func,
  commit: f.func,
  overwrite: f.oneOfType([f.bool, f.oneOf(["shift"])]),
  eager: f.oneOfType([f.bool, f.oneOf(["append", "remove"])]),
  skipInvalid: f.bool,
  // events
  onAccept: f.func,
  onComplete: f.func,
  // pattern
  placeholderChar: f.string,
  displayChar: f.string,
  lazy: f.bool,
  definitions: f.object,
  blocks: f.object,
  // enum
  enum: f.arrayOf(f.string),
  // range
  maxLength: f.number,
  from: f.number,
  to: f.number,
  // date
  pattern: f.string,
  format: f.func,
  parse: f.func,
  autofix: f.oneOfType([f.bool, f.oneOf(["pad"])]),
  // number
  radix: f.string,
  thousandsSeparator: f.string,
  mapToRadix: f.arrayOf(f.string),
  scale: f.number,
  normalizeZeros: f.bool,
  padFractionalZeros: f.bool,
  min: f.oneOfType([f.number, f.instanceOf(Date)]),
  max: f.oneOfType([f.number, f.instanceOf(Date)]),
  // dynamic
  dispatch: f.func,
  // ref
  inputRef: f.oneOfType([f.func, f.shape({
    current: f.object
  })])
}, Cb = Object.keys(Ob).filter((e) => e !== "value"), $_ = ["value", "unmask", "onAccept", "onComplete", "inputRef"], B_ = Cb.filter((e) => $_.indexOf(e) < 0);
function V_(e) {
  var t;
  const n = (t = class extends y.Component {
    constructor(a) {
      super(a), this._inputRef = this._inputRef.bind(this);
    }
    componentDidMount() {
      this.props.mask && this.initMask();
    }
    componentDidUpdate() {
      const a = this.props, o = this._extractMaskOptionsFromProps(a);
      if (o.mask)
        this.maskRef ? (this.maskRef.updateOptions(o), "value" in a && a.value !== void 0 && (this.maskValue = a.value)) : this.initMask(o);
      else if (this.destroyMask(), "value" in a && a.value !== void 0) {
        var s;
        (s = this.element) != null && s.isContentEditable && this.element.tagName !== "INPUT" && this.element.tagName !== "TEXTAREA" ? this.element.textContent = a.value : this.element.value = a.value;
      }
    }
    componentWillUnmount() {
      this.destroyMask();
    }
    _inputRef(a) {
      this.element = a, this.props.inputRef && (Object.prototype.hasOwnProperty.call(this.props.inputRef, "current") ? this.props.inputRef.current = a : this.props.inputRef(a));
    }
    initMask(a) {
      a === void 0 && (a = this._extractMaskOptionsFromProps(this.props)), this.maskRef = ae(this.element, a).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(a) {
      const {
        ...o
      } = a;
      return Object.keys(o).filter((s) => B_.indexOf(s) < 0).forEach((s) => {
        delete o[s];
      }), o;
    }
    _extractNonMaskProps(a) {
      const {
        ...o
      } = a;
      return Cb.forEach((s) => {
        s !== "maxLength" && delete o[s];
      }), "defaultValue" in o || (o.defaultValue = a.mask ? "" : o.value), delete o.value, o;
    }
    get maskValue() {
      return this.maskRef ? this.props.unmask === "typed" ? this.maskRef.typedValue : this.props.unmask ? this.maskRef.unmaskedValue : this.maskRef.value : "";
    }
    set maskValue(a) {
      this.maskRef && (a = a == null && this.props.unmask !== "typed" ? "" : a, this.props.unmask === "typed" ? this.maskRef.typedValue = a : this.props.unmask ? this.maskRef.unmaskedValue = a : this.maskRef.value = a);
    }
    _onAccept(a) {
      this.props.onAccept && this.maskRef && this.props.onAccept(this.maskValue, this.maskRef, a);
    }
    _onComplete(a) {
      this.props.onComplete && this.maskRef && this.props.onComplete(this.maskValue, this.maskRef, a);
    }
    render() {
      return y.createElement(e, {
        ...this._extractNonMaskProps(this.props),
        inputRef: this._inputRef
      });
    }
  }, t.displayName = void 0, t.propTypes = void 0, t), r = e.displayName || e.name || "Component";
  return n.displayName = "IMask(" + r + ")", n.propTypes = Ob, y.forwardRef((i, a) => y.createElement(n, {
    ...i,
    ref: a
  }));
}
const z_ = V_((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return y.createElement("input", {
    ...n,
    ref: t
  });
}), U_ = (e, t) => y.createElement(z_, {
  ...e,
  ref: t
}), W_ = y.forwardRef(U_), H_ = (e = {}) => Object.entries(e).reduce((t, [n, r]) => (r !== void 0 && (t[n] = r), t), {}), tr = (...e) => (n) => {
  e.filter((r) => typeof r == "function").forEach((r) => r(n));
}, K_ = ({ defaultValue: e, value: t }) => {
  const [n, r] = _.useState(!!e || e === 0);
  return [!!t || t === 0 || n, (o) => r(o.target.value)];
}, cv = (e, t) => {
  const [n, r] = _.useState([]), i = (l) => (r((u) => [...u, l]), l), a = () => {
    const l = pd(`${e}-`);
    return i(l);
  }, o = (l) => {
    r((u) => u.filter((c) => c !== l));
  };
  return [n, (l) => {
    const [u, c] = _.useState(l);
    return _.useEffect(() => (l ? i(l) : u || c(a()), () => o(u)), [u, l]), u;
  }];
}, Dn = {
  SMALL: "sm",
  LARGE: "lg"
}, Ot = {
  DEFAULT: "default",
  VALID: "valid",
  INVALID: "invalid",
  WARNING: "warning",
  CRITERIA_EMPTY: "criteria-empty",
  CRITERIA_VALID: "criteria-valid",
  CRITERIA_INVALID: "criteria-invalid"
};
function Ta(e) {
  "@babel/helpers - typeof";
  return Ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ta(e);
}
function fv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fv(Object(n), !0).forEach(function(r) {
      Y_(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Y_(e, t, n) {
  return t = G_(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function G_(e) {
  var t = Q_(e, "string");
  return Ta(t) == "symbol" ? t : t + "";
}
function Q_(e, t) {
  if (Ta(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ta(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ns(e, t) {
  return J_(e) || Z_(e, t) || q_(e, t) || X_();
}
function X_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q_(e, t) {
  if (e) {
    if (typeof e == "string") return dv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dv(e, t);
  }
}
function dv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Z_(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function J_(e) {
  if (Array.isArray(e)) return e;
}
var Eu = function(t) {
  return t;
}, eA = function() {
}, kb = /* @__PURE__ */ y.createContext({
  getControlProps: Eu,
  useSetIsControlGroupEffect: eA,
  getLabelProps: Eu,
  getDescriptorProps: Eu,
  hasFormGroupProvider: !1
}), gt = function() {
  return y.useContext(kb);
}, tA = function(t) {
  var n = _.useState(t), r = ns(n, 2), i = r[0], a = r[1], o = function(l) {
    _.useEffect(function() {
      return a(l);
    }, [l]);
  };
  return [i, o];
};
function pi(e) {
  var t = e.children, n = e.controlId, r = e.isInvalid, i = e.isValid, a = e.size, o = _.useMemo(function() {
    return n || pd("form-field");
  }, [n]), s = cv(o), l = ns(s, 2), u = l[0], c = l[1], p = cv(o), d = ns(p, 2), g = d[0], w = d[1], x = tA(!1), v = ns(x, 2), m = v[0], h = v[1], E = _.useCallback(function(A) {
    var C = m ? g : void 0;
    return H_(un(un({}, A), {}, {
      "aria-describedby": V(A["aria-describedby"], u) || void 0,
      "aria-labelledby": V(A["aria-labelledby"], C) || void 0,
      id: o
    }));
  }, [m, u, g, o]), b = function(C) {
    var S = w(C == null ? void 0 : C.id);
    return m ? un(un({}, C), {}, {
      id: S
    }) : un(un({}, C), {}, {
      htmlFor: o
    });
  }, O = function(C) {
    var S = c(C == null ? void 0 : C.id);
    return un(un({}, C), {}, {
      id: S
    });
  }, k = {
    getControlProps: E,
    getLabelProps: b,
    getDescriptorProps: O,
    useSetIsControlGroupEffect: h,
    isControlGroup: m,
    controlId: o,
    isInvalid: r,
    isValid: i,
    size: a,
    hasFormGroupProvider: !0
  };
  return /* @__PURE__ */ y.createElement(kb.Provider, {
    value: k
  }, t);
}
pi.propTypes = {
  children: f.node.isRequired,
  controlId: f.string,
  isInvalid: f.bool,
  isValid: f.bool,
  size: f.oneOf([Dn.SMALL, Dn.LARGE])
};
pi.defaultProps = {
  controlId: void 0,
  isInvalid: void 0,
  isValid: void 0,
  size: void 0
};
var nA = ["children", "type", "icon", "muted", "hasIcon"], Vt;
function Ia(e) {
  "@babel/helpers - typeof";
  return Ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ia(e);
}
function Jc() {
  return Jc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Jc.apply(this, arguments);
}
function rA(e, t) {
  if (e == null) return {};
  var n = iA(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function iA(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Vn(e, t, n) {
  return t = aA(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function aA(e) {
  var t = oA(e, "string");
  return Ia(t) == "symbol" ? t : t + "";
}
function oA(e, t) {
  if (Ia(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ia(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var sA = (Vt = {}, Vn(Vt, Ot.DEFAULT, null), Vn(Vt, Ot.VALID, jS), Vn(Vt, Ot.INVALID, RS), Vn(Vt, Ot.WARNING, $S), Vn(Vt, Ot.CRITERIA_EMPTY, MS), Vn(Vt, Ot.CRITERIA_VALID, NS), Vn(Vt, Ot.CRITERIA_INVALID, IS), Vt), lA = function(t) {
  var n = t.isInvalid, r = t.isValid;
  return r ? Ot.VALID : n ? Ot.INVALID : Ot.DEFAULT;
};
function up(e) {
  var t = e.type, n = e.customIcon;
  if (n)
    return n;
  var r = sA[t];
  return r ? /* @__PURE__ */ y.createElement(Xt, {
    src: r
  }) : null;
}
up.propTypes = {
  type: f.oneOf(Object.values(Ot)),
  customIcon: f.node
};
up.defaultProps = {
  type: void 0,
  customIcon: void 0
};
function Fl(e) {
  var t = e.children, n = e.type, r = e.icon, i = e.muted, a = e.hasIcon, o = rA(e, nA), s = V(o.className, "pgn__form-text", "pgn__form-text-".concat(n), {
    "text-muted": i
  });
  return /* @__PURE__ */ y.createElement("div", Jc({}, o, {
    className: s
  }), a && /* @__PURE__ */ y.createElement(up, {
    customIcon: r,
    type: n
  }), /* @__PURE__ */ y.createElement("div", null, t));
}
var uA = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
Fl.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: f.bool,
  /** Specifies text type, this affects styling. */
  type: f.oneOf(uA),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: f.node,
  /** Specifies whether to show text with muted styling. */
  muted: f.bool
};
Fl.defaultProps = {
  hasIcon: !0,
  type: "default",
  icon: void 0,
  className: void 0,
  muted: !1
};
var cA = ["children"];
function ef() {
  return ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ef.apply(this, arguments);
}
function fA(e, t) {
  if (e == null) return {};
  var n = dA(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function dA(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ln(e) {
  var t = e.children, n = fA(e, cA), r = gt(), i = r.getDescriptorProps, a = r.isInvalid, o = r.isValid, s = i(n), l = V("pgn__form-control-description", n.className), u = n.type || lA({
    isInvalid: a,
    isValid: o
  });
  return /* @__PURE__ */ y.createElement(Fl, ef({}, s, {
    className: l,
    type: u
  }), t);
}
var pA = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
Ln.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: f.bool,
  /** Specifies feedback type, this affects styling. */
  type: f.oneOf(pA),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: f.node,
  /** Specifies whether to show feedback with muted styling. */
  muted: f.bool
};
Ln.defaultProps = {
  hasIcon: !0,
  type: void 0,
  icon: void 0,
  className: void 0,
  muted: !1
};
function Sb(e) {
  var t = e.children, n = gt(), r = n.controlId;
  return /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /* @__PURE__ */ y.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: r
  }, t)));
}
Sb.propTypes = {
  children: f.node.isRequired
};
function Ks(e) {
  var t = e.children, n = e.location;
  return /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-control-decorator pgn__form-control-decorator-".concat(n)
  }, t);
}
Ks.propTypes = {
  children: f.node.isRequired,
  location: f.oneOf(["leading", "trailing"])
};
Ks.defaultProps = {
  location: "leading"
};
var mA = ["children", "leadingElement", "trailingElement", "floatingLabel", "className"];
function tf() {
  return tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tf.apply(this, arguments);
}
function hA(e, t) {
  if (e == null) return {};
  var n = vA(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function vA(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function cp(e) {
  var t = e.children, n = e.leadingElement, r = e.trailingElement, i = e.floatingLabel, a = e.className, o = hA(e, mA), s = gt(), l = o.size || s.size;
  return /* @__PURE__ */ y.createElement("div", tf({
    className: V("pgn__form-control-decorator-group", {
      "has-prepended-node": !!n,
      "has-appended-node": !!r,
      "has-leading-element": !!n,
      "has-trailing-element": !!r,
      "has-floating-label": !!i,
      "pgn__form-control-decorator-group-lg": l === Dn.LARGE,
      "pgn__form-control-decorator-group-sm": l === Dn.SMALL
    }, a)
  }, o), t, n && /* @__PURE__ */ y.createElement(Ks, {
    location: "leading"
  }, n), r && /* @__PURE__ */ y.createElement(Ks, {
    location: "trailing"
  }, r), i && /* @__PURE__ */ y.createElement(Sb, null, i));
}
cp.propTypes = {
  children: f.node.isRequired,
  leadingElement: f.node,
  trailingElement: f.node,
  floatingLabel: f.node,
  className: f.string,
  size: f.oneOf([Dn.SMALL, Dn.LARGE])
};
cp.defaultProps = {
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  className: void 0,
  size: void 0
};
function ja(e) {
  "@babel/helpers - typeof";
  return ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ja(e);
}
var gA = ["as", "className", "controlClassName", "leadingElement", "trailingElement", "floatingLabel", "autoResize", "onChange", "inputMask"], yA = ["isInvalid", "isValid", "getControlProps"];
function nf() {
  return nf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, nf.apply(this, arguments);
}
function pv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function mv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pv(Object(n), !0).forEach(function(r) {
      bA(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function bA(e, t, n) {
  return t = wA(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wA(e) {
  var t = EA(e, "string");
  return ja(t) == "symbol" ? t : t + "";
}
function EA(e, t) {
  if (ja(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ja(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xA(e, t) {
  return SA(e) || kA(e, t) || CA(e, t) || OA();
}
function OA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CA(e, t) {
  if (e) {
    if (typeof e == "string") return hv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hv(e, t);
  }
}
function hv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function kA(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function SA(e) {
  if (Array.isArray(e)) return e;
}
function vv(e, t) {
  if (e == null) return {};
  var n = PA(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function PA(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var mi = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.as, r = e.className, i = e.controlClassName, a = e.leadingElement, o = e.trailingElement, s = e.floatingLabel, l = e.autoResize, u = e.onChange, c = e.inputMask, p = vv(e, gA), d = gt(), g = d.isInvalid, w = d.isValid, x = d.getControlProps, v = vv(d, yA), m = y.useRef(), h = t || m, E = p.size || v.size, b = K_({
    defaultValue: p.defaultValue,
    value: p.value
  }), O = xA(b, 2), k = O[0], A = O[1], C = _.useCallback(function() {
    n === "textarea" && l && (!h.current.initialHeight && !h.current.offsets && (h.current.initialHeight = h.current.offsetHeight, h.current.offsets = h.current.offsetHeight - h.current.clientHeight), h.current.style.height = "".concat(h.current.initialHeight, "px"), h.current.style.height = "".concat(h.current.scrollHeight + h.current.offsets, "px"));
  }, [n, l, h]);
  _.useEffect(function() {
    C();
  }, [C]);
  var S = x(mv(mv({}, p), {}, {
    // eslint-disable-next-line react/prop-types
    onBlur: tr(A, p.onBlur)
  })), N = function(B) {
    C(), u && u(B);
  };
  return /* @__PURE__ */ y.createElement(cp, {
    size: E,
    leadingElement: a,
    trailingElement: o,
    floatingLabel: s,
    className: r
  }, /* @__PURE__ */ y.createElement(mb, nf({
    as: c ? W_ : n,
    ref: h,
    size: E,
    isInvalid: g,
    isValid: w,
    className: V(i, {
      "has-value": k
    }),
    onChange: N,
    mask: c
  }, S)));
}), _A = ["sm", "lg"];
mi.Feedback = Ln;
mi.Description = Ln;
mi.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies base element for the control component. */
  as: f.elementType,
  /** Specifies function that is triggered on input value change. */
  onChange: f.func,
  /** Specifies default value of the input component. */
  defaultValue: f.oneOfType([f.string, f.number]),
  /** Specifies current value of the input component. */
  value: f.oneOfType([f.string, f.number]),
  /** Specifies id of the control component. */
  id: f.string,
  /** Specifies class name for the control component. */
  controlClassName: f.string,
  /** Specifies size for the control component. */
  size: f.oneOf(_A),
  /** Specifies leading element to display for the input component. */
  leadingElement: f.node,
  /** Specifies trailing element to display for the input component. */
  trailingElement: f.node,
  /** Specifies floating label to display for the input component. */
  floatingLabel: f.node,
  /** Specifies whether to render input as plain text. */
  plaintext: f.bool,
  /** Specifies whether to display control in valid state, this affects styling. */
  isValid: f.bool,
  /** Specifies whether to display control in invalid state, this affects styling. */
  isInvalid: f.bool,
  /** Only for `as="textarea"`. Specifies whether the input can be resized according to the height of content. */
  autoResize: f.bool,
  /** Specifies what format to use for the input mask. */
  inputMask: f.string
};
mi.defaultProps = {
  as: "input",
  className: void 0,
  id: void 0,
  controlClassName: void 0,
  onChange: void 0,
  defaultValue: void 0,
  value: void 0,
  size: void 0,
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  plaintext: !1,
  isValid: void 0,
  isInvalid: void 0,
  autoResize: !1,
  inputMask: void 0
};
function Na(e) {
  "@babel/helpers - typeof";
  return Na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Na(e);
}
var AA = ["children", "isInline"];
function gv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function yv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gv(Object(n), !0).forEach(function(r) {
      TA(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function TA(e, t, n) {
  return t = IA(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function IA(e) {
  var t = jA(e, "string");
  return Na(t) == "symbol" ? t : t + "";
}
function jA(e, t) {
  if (Na(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Na(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function NA(e, t) {
  if (e == null) return {};
  var n = RA(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function RA(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function uo(e) {
  var t = e.children, n = e.isInline, r = NA(e, AA), i = gt(), a = i.size, o = i.isControlGroup, s = i.getLabelProps, l = V("pgn__form-label", {
    "pgn__form-label-inline": n,
    "pgn__form-label-lg": a === Dn.LARGE,
    "pgn__form-label-sm": a === Dn.SMALL
  }, r.className), u = s(yv(yv({}, r), {}, {
    className: l
  })), c = o ? "p" : "label";
  return /* @__PURE__ */ y.createElement(c, u, t);
}
var FA = ["sm", "lg"];
uo.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: f.bool,
  /** Specifies size of the component. */
  size: f.oneOf(FA)
};
uo.defaultProps = {
  isInline: !1,
  size: void 0,
  className: void 0
};
function Ra(e) {
  "@babel/helpers - typeof";
  return Ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ra(e);
}
var DA = ["children", "controlId", "isInvalid", "isValid", "size", "as"];
function bv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bv(Object(n), !0).forEach(function(r) {
      LA(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function LA(e, t, n) {
  return t = MA(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function MA(e) {
  var t = $A(e, "string");
  return Ra(t) == "symbol" ? t : t + "";
}
function $A(e, t) {
  if (Ra(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ra(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function BA(e, t) {
  if (e == null) return {};
  var n = VA(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function VA(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function fp(e) {
  var t = e.children, n = e.controlId, r = e.isInvalid, i = e.isValid, a = e.size, o = e.as, s = BA(e, DA);
  return /* @__PURE__ */ y.createElement(o, wv(wv({}, s), {}, {
    className: V("pgn__form-group", s.className)
  }), /* @__PURE__ */ y.createElement(pi, {
    controlId: n,
    isInvalid: r,
    isValid: i,
    size: a
  }, t));
}
var zA = ["sm", "lg"];
fp.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies base element for the component. */
  as: f.elementType,
  /** Specifies id to use in the group, it will be used as `htmlFor` in `FormLabel` and as `id` in input components.
   *  Will be autogenerated if none is supplied. */
  controlId: f.string,
  /** Specifies whether to display components in invalid state, this affects styling. */
  isInvalid: f.bool,
  /** Specifies whether to display components in valid state, this affects styling. */
  isValid: f.bool,
  /** Specifies size for the component. */
  size: f.oneOf(zA)
};
fp.defaultProps = {
  as: "div",
  className: void 0,
  controlId: void 0,
  isInvalid: !1,
  isValid: !1,
  size: void 0
};
function Fa(e) {
  "@babel/helpers - typeof";
  return Fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fa(e);
}
function Ev(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ev(Object(n), !0).forEach(function(r) {
      UA(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ev(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function UA(e, t, n) {
  return t = WA(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function WA(e) {
  var t = HA(e, "string");
  return Fa(t) == "symbol" ? t : t + "";
}
function HA(e, t) {
  if (Fa(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Fa(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var KA = function(t) {
  return t;
}, Pb = /* @__PURE__ */ y.createContext({
  getRadioControlProps: KA,
  hasRadioSetProvider: !1
}), YA = function() {
  return _.useContext(Pb);
};
function dp(e) {
  var t = e.children, n = e.name, r = e.onBlur, i = e.onFocus, a = e.onChange, o = e.value, s = e.defaultValue, l = !s && o !== void 0, u = function(d) {
    return xv(xv({}, d), {}, {
      name: n,
      /* istanbul ignore next */
      onBlur: d.onBlur ? tr(r, d.onBlur) : r,
      /* istanbul ignore next */
      onFocus: d.onFocus ? tr(i, d.onFocus) : i,
      /* istanbul ignore next */
      onChange: d.onChange ? tr(a, d.onChange) : a,
      checked: l ? o === d.value : void 0,
      defaultChecked: l ? void 0 : s === d.value
    });
  }, c = {
    name: n,
    value: o,
    defaultValue: s,
    getRadioControlProps: u,
    onBlur: r,
    onFocus: i,
    onChange: a,
    hasRadioSetProvider: !0
  };
  return /* @__PURE__ */ y.createElement(Pb.Provider, {
    value: c
  }, t);
}
dp.propTypes = {
  children: f.node.isRequired,
  name: f.string.isRequired,
  onBlur: f.func,
  onFocus: f.func,
  onChange: f.func,
  value: f.string,
  defaultValue: f.string
};
dp.defaultProps = {
  onBlur: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
var GA = ["children", "className", "controlClassName", "labelClassName", "description", "isInvalid", "isValid"];
function Da(e) {
  "@babel/helpers - typeof";
  return Da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Da(e);
}
function QA(e, t) {
  if (e == null) return {};
  var n = XA(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function XA(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ys() {
  return Ys = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ys.apply(this, arguments);
}
function Ov(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Cv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ov(Object(n), !0).forEach(function(r) {
      qA(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ov(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function qA(e, t, n) {
  return t = ZA(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ZA(e) {
  var t = JA(e, "string");
  return Da(t) == "symbol" ? t : t + "";
}
function JA(e, t) {
  if (Da(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Da(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pp = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = gt(), r = n.getControlProps, i = YA(), a = i.getRadioControlProps, o = i.hasRadioSetProvider, s = r(Cv(Cv({}, e), {}, {
    className: V("pgn__form-radio-input", e.className)
  }));
  return o && (s = a(s)), /* @__PURE__ */ y.createElement("input", Ys({}, s, {
    type: "radio",
    ref: t
  }));
});
pp.propTypes = {
  className: f.string
};
pp.defaultProps = {
  className: void 0
};
var mp = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.controlClassName, a = e.labelClassName, o = e.description, s = e.isInvalid, l = e.isValid, u = QA(e, GA);
  return /* @__PURE__ */ y.createElement(pi, {
    controlId: u.id,
    isInvalid: s,
    isValid: l
  }, /* @__PURE__ */ y.createElement("div", {
    className: V("pgn__form-radio", r, {
      "pgn__form-control-valid": l,
      "pgn__form-control-invalid": s,
      "pgn__form-control-disabled": u.disabled
    })
  }, /* @__PURE__ */ y.createElement(pp, Ys({
    ref: t,
    className: i
  }, u)), /* @__PURE__ */ y.createElement("div", null, /* @__PURE__ */ y.createElement(uo, {
    className: a
  }, n), o && /* @__PURE__ */ y.createElement(Ln, {
    hasIcon: !1
  }, o))));
});
mp.propTypes = {
  /** Specifies id of the FormRadio component. */
  id: f.string,
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies class name for control component. */
  controlClassName: f.string,
  /** Specifies class name for label component. */
  labelClassName: f.string,
  /** Specifies description to show under the radio's value. */
  description: f.node,
  /** Specifies whether to display component in invalid state, this affects styling. */
  isInvalid: f.bool,
  /** Specifies whether to display component in valid state, this affects styling. */
  isValid: f.bool,
  /** Specifies whether the `FormRadio` is disabled. */
  disabled: f.bool
};
mp.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  disabled: !1
};
function La(e) {
  "@babel/helpers - typeof";
  return La = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, La(e);
}
var eT = ["as", "className", "isInline", "children"];
function kv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function tT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kv(Object(n), !0).forEach(function(r) {
      nT(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function nT(e, t, n) {
  return t = rT(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function rT(e) {
  var t = iT(e, "string");
  return La(t) == "symbol" ? t : t + "";
}
function iT(e, t) {
  if (La(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (La(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function aT(e, t) {
  if (e == null) return {};
  var n = oT(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function oT(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Dl(e) {
  var t = e.as, n = e.className, r = e.isInline, i = e.children, a = aT(e, eT);
  return /* @__PURE__ */ y.createElement(t, tT({
    className: V(n, {
      "pgn__form-control-set": !r,
      "pgn__form-control-set-inline": r
    })
  }, a), i);
}
Dl.propTypes = {
  /** Specifies the base element */
  as: f.elementType,
  /** A class name to append to the base element. */
  className: f.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: f.bool,
  /** Specifies contents of the component. */
  children: f.node
};
Dl.defaultProps = {
  as: "div",
  className: void 0,
  isInline: !1,
  children: null
};
var sT = ["children", "name", "value", "defaultValue", "isInline", "onChange", "onFocus", "onBlur"];
function rf() {
  return rf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, rf.apply(this, arguments);
}
function lT(e, t) {
  if (e == null) return {};
  var n = uT(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function uT(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function hp(e) {
  var t = e.children, n = e.name, r = e.value, i = e.defaultValue, a = e.isInline, o = e.onChange, s = e.onFocus, l = e.onBlur, u = lT(e, sT), c = gt(), p = c.getControlProps, d = c.useSetIsControlGroupEffect;
  d(!0);
  var g = p(u);
  return /* @__PURE__ */ y.createElement(dp, {
    name: n,
    value: r,
    defaultValue: i,
    onFocus: s,
    onBlur: l,
    onChange: o
  }, /* @__PURE__ */ y.createElement(Dl, rf({
    role: "radiogroup",
    isInline: a
  }, g), t));
}
hp.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** A class name to append to the base element. */
  className: f.string,
  /** Specifies name for the component. */
  name: f.string.isRequired,
  /** Specifies values for the FormRadioSet. */
  value: f.string,
  /** Specifies default values. */
  defaultValue: f.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: f.bool,
  /** Specifies onChange event handler. */
  onChange: f.func,
  /** Specifies onFocus event handler. */
  onFocus: f.func,
  /** Specifies onBlur event handler. */
  onBlur: f.func
};
hp.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
let Bo;
const cT = new Uint8Array(16);
function fT() {
  if (!Bo && (Bo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Bo))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Bo(cT);
}
const Re = [];
for (let e = 0; e < 256; ++e)
  Re.push((e + 256).toString(16).slice(1));
function dT(e, t = 0) {
  return Re[e[t + 0]] + Re[e[t + 1]] + Re[e[t + 2]] + Re[e[t + 3]] + "-" + Re[e[t + 4]] + Re[e[t + 5]] + "-" + Re[e[t + 6]] + Re[e[t + 7]] + "-" + Re[e[t + 8]] + Re[e[t + 9]] + "-" + Re[e[t + 10]] + Re[e[t + 11]] + Re[e[t + 12]] + Re[e[t + 13]] + Re[e[t + 14]] + Re[e[t + 15]];
}
const pT = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Sv = {
  randomUUID: pT
};
function mT(e, t, n) {
  if (Sv.randomUUID && !t && !e)
    return Sv.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || fT)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, dT(r);
}
var hT = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"], _b = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, l = s === void 0 ? "div" : s, u = e.className, c = ce(e, hT);
  n = we(n, "spinner");
  var p = n + "-" + i;
  return /* @__PURE__ */ y.createElement(l, q({
    ref: t
  }, c, {
    className: V(u, p, a && p + "-" + a, r && "text-" + r)
  }), o);
});
_b.displayName = "Spinner";
function Ma(e) {
  "@babel/helpers - typeof";
  return Ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ma(e);
}
var vT = ["className", "screenReaderText"];
function af() {
  return af = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, af.apply(this, arguments);
}
function Pv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pv(Object(n), !0).forEach(function(r) {
      gT(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function gT(e, t, n) {
  return t = yT(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yT(e) {
  var t = bT(e, "string");
  return Ma(t) == "symbol" ? t : t + "";
}
function bT(e, t) {
  if (Ma(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ma(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wT(e, t) {
  if (e == null) return {};
  var n = ET(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function ET(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var vp = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.screenReaderText, i = wT(e, vT), a = _v(_v({}, i), {}, {
    className: V("pgn__spinner", n),
    role: r ? "status" : void 0
  });
  return /* @__PURE__ */ y.createElement(_b, af({}, a, {
    ref: t
  }), r && /* @__PURE__ */ y.createElement("span", {
    className: "sr-only"
  }, r));
});
vp.propTypes = {
  /** Specifies the class name for the component. */
  className: f.string,
  /** Specifies the screen reader content for a11y. */
  screenReaderText: f.node
};
vp.defaultProps = {
  className: void 0,
  screenReaderText: void 0
};
function xT(e, t) {
  return ST(e) || kT(e, t) || CT(e, t) || OT();
}
function OT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CT(e, t) {
  if (e) {
    if (typeof e == "string") return Av(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Av(e, t);
  }
}
function Av(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function kT(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function ST(e) {
  if (Array.isArray(e)) return e;
}
function PT(e) {
  var t = e.event, n = e.currentIndex, r = e.activeElement;
  n !== -1 && (r.click(), t.preventDefault());
}
function _T(e) {
  var t = e.event, n = e.currentIndex, r = e.availableElements;
  n === -1 && r[0].focus();
  var i;
  if ((t.key === "ArrowDown" || t.key === "ArrowRight") && (i = r[(n + 1) % r.length]), (t.key === "ArrowUp" || t.key === "ArrowLeft") && (i = n - 1 < 0 ? r[n - 1 + r.length] : r[n - 1]), t.key === "End" && (i = r[r.length - 1]), t.key === "Home") {
    var a = xT(r, 1);
    i = a[0];
  }
  i && i.focus(), t.preventDefault();
}
function AT(e) {
  var t = e.event, n = e.ignoredKeys, r = n === void 0 ? [] : n, i = e.parentNode, a = e.selectors, o = a === void 0 ? "a,button,input" : a;
  if (i) {
    var s = t.key;
    if (!(!["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Home", "End"].includes(s) || r.includes(s))) {
      var l = document, u = l.activeElement;
      if (i.contains(u)) {
        var c = i.querySelectorAll(o);
        if (c.length) {
          var p = Array.from(c).findIndex(function(d) {
            return d === u;
          });
          s === "Enter" && PT({
            event: t,
            currentIndex: p,
            activeElement: u
          }), _T({
            event: t,
            currentIndex: p,
            availableElements: c
          });
        }
      }
    }
  }
}
function TT(e) {
  var t = e || {}, n = t.selectors, r = t.ignoredKeys, i = _.useRef();
  return _.useEffect(function() {
    var a = function(s) {
      AT({
        event: s,
        ignoredKeys: r,
        parentNode: i.current,
        selectors: n
      });
    };
    return document.addEventListener("keydown", a), function() {
      return document.removeEventListener("keydown", a);
    };
  }, [r, n]), i;
}
const Tv = {
  iconButtonOpened: {
    id: "pgn.FormAutosuggest.iconButtonOpened",
    defaultMessage: "Open the options menu",
    description: "A message shown in case when the autosuggest menu is closed."
  },
  iconButtonClosed: {
    id: "pgn.FormAutosuggest.iconButtonClosed",
    defaultMessage: "Close the options menu",
    description: "A message shown in case when the autosuggest menu is opened."
  }
};
function $a(e) {
  "@babel/helpers - typeof";
  return $a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $a(e);
}
var IT = ["children", "arrowKeyNavigationSelector", "ignoredArrowKeysNames", "screenReaderText", "value", "isLoading", "isValueRequired", "valueRequiredErrorMessageText", "isSelectionRequired", "selectionRequiredErrorMessageText", "hasCustomError", "customErrorMessageText", "onChange", "helpMessage"], jT = ["children", "onClick"];
function of() {
  return of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, of.apply(this, arguments);
}
function Iv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Iv(Object(n), !0).forEach(function(r) {
      NT(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Iv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function NT(e, t, n) {
  return t = RT(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function RT(e) {
  var t = FT(e, "string");
  return $a(t) == "symbol" ? t : t + "";
}
function FT(e, t) {
  if ($a(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if ($a(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zt(e, t) {
  return $T(e) || MT(e, t) || LT(e, t) || DT();
}
function DT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LT(e, t) {
  if (e) {
    if (typeof e == "string") return Nv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Nv(e, t);
  }
}
function Nv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function MT(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function $T(e) {
  if (Array.isArray(e)) return e;
}
function Rv(e, t) {
  if (e == null) return {};
  var n = BT(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function BT(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var gp = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.children, r = e.arrowKeyNavigationSelector, i = e.ignoredArrowKeysNames, a = e.screenReaderText, o = e.value, s = e.isLoading, l = e.isValueRequired, u = e.valueRequiredErrorMessageText, c = e.isSelectionRequired, p = e.selectionRequiredErrorMessageText, d = e.hasCustomError, g = e.customErrorMessageText, w = e.onChange, x = e.helpMessage, v = Rv(e, IT), m = Sl(), h = _.useRef(), E = TT({
    selectors: r,
    ignoredKeys: i
  }), b = _.useState(!1), O = zt(b, 2), k = O[0], A = O[1], C = _.useState(!1), S = zt(C, 2), N = S[0], G = S[1], B = _.useState(!1), j = zt(B, 2), L = j[0], D = j[1], K = _.useState(!1), Z = zt(K, 2), re = Z[0], J = Z[1], se = _.useState((o == null ? void 0 : o.userProvidedText) || ""), P = zt(se, 2), I = P[0], F = P[1], H = _.useState([]), U = zt(H, 2), te = U[0], ee = U[1], ne = _.useState(null), ie = zt(ne, 2), de = ie[0], pe = ie[1], je = _.useState(!0), et = zt(je, 2), At = et[0], Bt = et[1], hr = _.useState(""), sn = zt(hr, 2), Q = sn[0], yt = sn[1], Ke = function(Ne) {
    pe(Ne);
  }, tt = function() {
    ee([]), A(!1), pe(null);
  }, co = function(Ne, Ye) {
    var bt = Ne.currentTarget.getAttribute("data-value"), wt = Ne.currentTarget.id;
    D(!0), J(!0), F(bt), w && (!o || o && bt !== o.selectionValue) && w({
      userProvidedText: bt,
      selectionValue: bt,
      selectionId: wt
    }), tt(), Ye && Ye(Ne);
  };
  function hi() {
    var _e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Ne = y.Children.map(n, function(Ye) {
      var bt, wt = Ye.props, ho = wt.children, Vb = wt.onClick, zb = Rv(wt, jT), Ap = (bt = Ye.props.id) !== null && bt !== void 0 ? bt : mT();
      return /* @__PURE__ */ y.cloneElement(Ye, jv(jv({}, zb), {}, {
        children: ho,
        "data-value": ho,
        onClick: function(Wb) {
          return co(Wb, Vb);
        },
        id: Ap,
        onFocus: function() {
          return Ke(Ap);
        }
      }));
    });
    return _e.length > 0 && (Ne = Ne.filter(function(Ye) {
      return Ye.props.children.toLowerCase().includes(_e.toLowerCase());
    })), Ne;
  }
  var vr = function() {
    ee(hi(I)), Bt(!0), yt(""), A(!0);
  }, fo = function() {
    k ? tt() : vr();
  }, po = /* @__PURE__ */ y.createElement(di, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: k ? LS : DS,
    iconAs: Xt,
    size: "sm",
    variant: "secondary",
    alt: k ? m.formatMessage(Tv.iconButtonClosed) : m.formatMessage(Tv.iconButtonOpened),
    onClick: fo
  }), mo = function() {
    G(!0);
  }, vi = function() {
    if (d) {
      Bt(!1), yt(g);
      return;
    }
    if (l && !L) {
      Bt(!1), yt(u);
      return;
    }
    if (L && c && !re) {
      Bt(!1), yt(p);
      return;
    }
    Bt(!0), yt("");
  };
  _.useImperativeHandle(t, function() {
    return {
      // expose updateErrorStateAndErrorMessage so consumers can trigger validation
      // when changing the value of the control externally
      updateErrorStateAndErrorMessage: vi
    };
  });
  var Sp = function() {
    G(!1), tt(), vi();
  }, Pp = function(Ne) {
    if (N) {
      if (Ne.key === "Escape") {
        Ne.preventDefault(), h && h.current.focus(), tt();
        return;
      }
      Ne.key === "Tab" && Sp();
    }
  }, _p = function(Ne) {
    E.current && !E.current.contains(Ne.target) && N && Sp();
  };
  _.useEffect(function() {
    return document.addEventListener("keydown", Pp), document.addEventListener("click", _p, !0), function() {
      document.removeEventListener("click", _p, !0), document.removeEventListener("keydown", Pp);
    };
  }), _.useEffect(function() {
    var _e;
    F(o && (_e = o.userProvidedText) !== null && _e !== void 0 ? _e : ""), D(!!o && !!o.userProvidedText), J(!!o && !!o.selectionValue);
  }, [o]);
  var Lb = function() {
    vr();
  }, Mb = function(Ne) {
    var Ye = Ne.target.value;
    if (!Ye.length) {
      F(""), D(!1), J(!1), ee([]), tt(), w && w({
        userProvidedText: "",
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    D(!0);
    var bt = hi(Ye);
    ee(bt);
    var wt = bt.find(function(ho) {
      return ho.props.children.toLowerCase() === Ye.toLowerCase();
    });
    if (!wt) {
      J(!1), F(Ye), w && w({
        userProvidedText: Ye,
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    J(!0), F(wt.props.children), w && w({
      userProvidedText: wt.props.children,
      selectionValue: wt.props.children,
      selectionId: wt.props.id
    });
  }, $b = gt(), Bb = $b.getControlProps, $l = Bb(v);
  return /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: E,
    onFocus: mo
  }, /* @__PURE__ */ y.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, "".concat(te.length, " options found")), /* @__PURE__ */ y.createElement(pi, {
    controlId: $l.id,
    isInvalid: !At
  }, /* @__PURE__ */ y.createElement(mi, of({
    ref: h,
    "aria-expanded": (te.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: I,
    "aria-invalid": Q,
    "aria-activedescendant": de,
    onChange: Mb,
    onClick: Lb,
    trailingElement: po,
    "data-testid": "autosuggest-textbox-input"
  }, $l)), x && At && /* @__PURE__ */ y.createElement(Ln, {
    type: "default"
  }, x), !At && /* @__PURE__ */ y.createElement(Ln, {
    type: "invalid",
    "feedback-for": $l.name
  }, Q)), /* @__PURE__ */ y.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, s ? /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /* @__PURE__ */ y.createElement(vp, {
    animation: "border",
    variant: "dark",
    screenReaderText: a,
    "data-testid": "autosuggest-loading-spinner"
  })) : te.length > 0 && te));
});
gp.defaultProps = {
  arrowKeyNavigationSelector: "a:not(:disabled),li:not(:disabled, .btn-icon),input:not(:disabled)",
  ignoredArrowKeysNames: ["ArrowRight", "ArrowLeft"],
  isLoading: !1,
  className: null,
  floatingLabel: null,
  onChange: null,
  helpMessage: "",
  placeholder: "",
  value: null,
  isValueRequired: !1,
  valueRequiredErrorMessageText: null,
  isSelectionRequired: !1,
  selectionRequiredErrorMessageText: null,
  hasCustomError: !1,
  customErrorMessageText: null,
  readOnly: !1,
  children: null,
  name: "form-autosuggest",
  screenReaderText: "loading"
};
gp.propTypes = {
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
  */
  arrowKeyNavigationSelector: f.string,
  /** Specifies ignored hook keys. */
  ignoredArrowKeysNames: f.arrayOf(f.string),
  /** Specifies loading state. */
  isLoading: f.bool,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies floating label to display for the input component. */
  floatingLabel: f.string,
  /** Specifies onChange event handler. */
  onChange: f.func,
  /** Specifies help information for the user. */
  helpMessage: f.string,
  /** Specifies the placeholder text for the input. */
  placeholder: f.string,
  /** Specifies values for the input. */
  value: f.shape({
    userProvidedText: f.string,
    selectionValue: f.string,
    selectionId: f.string
  }),
  /** Specifies if empty values trigger an error state */
  isValueRequired: f.bool,
  /** Informs user they must input a value. */
  valueRequiredErrorMessageText: cu(f.string, "isValueRequired"),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: f.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: cu(f.string, "isSelectionRequired"),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: f.bool,
  /** Informs user of other errors. */
  customErrorMessageText: cu(f.string, "hasCustomError"),
  /** Specifies the name of the base input element. */
  name: f.string,
  /** Selected list item is read-only. */
  readOnly: f.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: f.node,
  /** Specifies the screen reader text */
  screenReaderText: f.string
};
function Ba(e) {
  "@babel/helpers - typeof";
  return Ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ba(e);
}
var VT = ["as", "children", "defaultSelected", "iconAfter", "iconBefore"];
function Fv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Dv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fv(Object(n), !0).forEach(function(r) {
      zT(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function zT(e, t, n) {
  return t = UT(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function UT(e) {
  var t = WT(e, "string");
  return Ba(t) == "symbol" ? t : t + "";
}
function WT(e, t) {
  if (Ba(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ba(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function HT(e, t) {
  if (e == null) return {};
  var n = KT(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function KT(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function yp(e) {
  var t = e.as, n = e.children;
  e.defaultSelected;
  var r = e.iconAfter, i = e.iconBefore, a = HT(e, VT), o = V(a.className, "pgn__menu-item");
  return /* @__PURE__ */ y.createElement(t, Dv(Dv({}, a), {}, {
    className: o
  }), /* @__PURE__ */ y.createElement(y.Fragment, null, i && /* @__PURE__ */ y.createElement(Xt, {
    className: "btn-icon-before",
    src: i
  }), /* @__PURE__ */ y.createElement("span", {
    className: "pgn__menu-item-text"
  }, n), /* @__PURE__ */ y.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), r && /* @__PURE__ */ y.createElement(Xt, {
    className: "btn-icon-after",
    src: r
  })));
}
yp.propTypes = {
  /** Specifies that this ``MenuItem`` is selected inside the ``SelectMenu`` */
  defaultSelected: f.bool,
  /** Specifies class name to append to the base element */
  className: f.string,
  /** Specifies the content of the ``MenuItem`` */
  children: f.node,
  /** Specifies the base element */
  as: f.elementType,
  /** Specifies the jsx before the content of the ``MenuItem`` */
  iconBefore: f.oneOfType([f.element, f.elementType]),
  /** Specifies the jsx after the content of the ``MenuItem`` */
  iconAfter: f.oneOfType([f.element, f.elementType])
};
yp.defaultProps = {
  defaultSelected: !1,
  as: "button",
  className: void 0,
  children: null,
  iconBefore: void 0,
  iconAfter: void 0
};
var YT = ["children", "className", "onClick"];
function sf() {
  return sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, sf.apply(this, arguments);
}
function GT(e, t) {
  if (e == null) return {};
  var n = QT(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function QT(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function bp(e) {
  var t = e.children, n = e.className, r = e.onClick, i = GT(e, YT);
  return /* @__PURE__ */ y.createElement(yp, sf({
    as: "li",
    "data-testid": "autosuggest-optionitem",
    role: "option",
    tabIndex: "-1",
    onClick: r,
    className: V(n, "dropdown-item")
  }, i), t);
}
bp.defaultProps = {
  className: null,
  children: null,
  onClick: null
};
bp.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: f.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: f.func
};
function Va(e) {
  "@babel/helpers - typeof";
  return Va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Va(e);
}
function Lv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Mv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lv(Object(n), !0).forEach(function(r) {
      XT(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function XT(e, t, n) {
  return t = qT(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function qT(e) {
  var t = ZT(e, "string");
  return Va(t) == "symbol" ? t : t + "";
}
function ZT(e, t) {
  if (Va(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Va(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var JT = function(t) {
  return t;
}, Ab = /* @__PURE__ */ y.createContext({
  getCheckboxControlProps: JT,
  hasCheckboxSetProvider: !1
}), Tb = function() {
  return _.useContext(Ab);
};
function wp(e) {
  var t = e.children, n = e.name, r = e.onBlur, i = e.onFocus, a = e.onChange, o = e.value, s = e.defaultValue, l = !s && Array.isArray(o), u = function(d) {
    return Mv(Mv({}, d), {}, {
      name: n,
      /* istanbul ignore next */
      onBlur: d.onBlur ? tr(r, d.onBlur) : r,
      /* istanbul ignore next */
      onFocus: d.onFocus ? tr(i, d.onFocus) : i,
      /* istanbul ignore next */
      onChange: d.onChange ? tr(a, d.onChange) : a,
      checked: l ? o.includes(d.value) : void 0,
      defaultChecked: l ? void 0 : s && s.includes(d.value)
    });
  }, c = {
    name: n,
    value: o,
    defaultValue: s,
    getCheckboxControlProps: u,
    onBlur: r,
    onFocus: i,
    onChange: a,
    hasCheckboxSetProvider: !0
  };
  return /* @__PURE__ */ y.createElement(Ab.Provider, {
    value: c
  }, t);
}
wp.propTypes = {
  children: f.node.isRequired,
  name: f.string,
  onBlur: f.func,
  onFocus: f.func,
  onChange: f.func,
  value: f.arrayOf(f.string),
  defaultValue: f.arrayOf(f.string)
};
wp.defaultProps = {
  onBlur: void 0,
  name: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
function za(e) {
  "@babel/helpers - typeof";
  return za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, za(e);
}
var eI = ["isIndeterminate"], tI = ["children", "className", "controlClassName", "labelClassName", "description", "isInvalid", "isValid", "controlAs", "floatLabelLeft"];
function Gs() {
  return Gs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Gs.apply(this, arguments);
}
function $v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $v(Object(n), !0).forEach(function(r) {
      nI(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $v(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function nI(e, t, n) {
  return t = rI(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function rI(e) {
  var t = iI(e, "string");
  return za(t) == "symbol" ? t : t + "";
}
function iI(e, t) {
  if (za(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (za(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ib(e, t) {
  if (e == null) return {};
  var n = aI(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function aI(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ep = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.isIndeterminate, r = Ib(e, eI), i = Tb(), a = i.getCheckboxControlProps, o = i.hasCheckboxSetProvider, s = y.useRef(), l = t || s, u = gt(), c = u.getControlProps, p = c(jr(jr({}, r), {}, {
    className: V("pgn__form-checkbox-input", r.className)
  }));
  return o && (p = a(p)), y.useEffect(function() {
    l.current && (l.current.indeterminate = n);
  }, [l, n]), /* @__PURE__ */ y.createElement("input", Gs({
    type: "checkbox"
  }, p, {
    ref: l
  }));
});
Ep.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: f.bool,
  /** Specifies class name to append to the base element. */
  className: f.string
};
Ep.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
var Ll = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.controlClassName, a = e.labelClassName, o = e.description, s = e.isInvalid, l = e.isValid, u = e.controlAs, c = e.floatLabelLeft, p = Ib(e, tI), d = Tb(), g = d.hasCheckboxSetProvider, w = gt(), x = w.hasFormGroupProvider, v = w.useSetIsControlGroupEffect, m = w.getControlProps;
  v(!0);
  var h = x && !g, E = h ? jr(jr({}, m({})), {}, {
    role: "group"
  }) : {}, b = /* @__PURE__ */ y.createElement(u, jr(jr({}, p), {}, {
    className: i,
    ref: t
  }));
  return /* @__PURE__ */ y.createElement(pi, {
    controlId: p.id,
    isInvalid: s,
    isValid: l
  }, /* @__PURE__ */ y.createElement("div", Gs({
    className: V("pgn__form-checkbox", r, {
      "pgn__form-control-valid": l,
      "pgn__form-control-invalid": s,
      "pgn__form-control-disabled": p.disabled,
      "pgn__form-control-label-left": !!c
    })
  }, E), b, /* @__PURE__ */ y.createElement("div", null, /* @__PURE__ */ y.createElement(uo, {
    className: a
  }, n), o && /* @__PURE__ */ y.createElement(Ln, {
    hasIcon: !1
  }, o))));
});
Ll.propTypes = {
  /** Specifies id of the FormCheckbox component. */
  id: f.string,
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies class name for control component. */
  controlClassName: f.string,
  /** Specifies class name for label component. */
  labelClassName: f.string,
  /** Specifies description to show under the checkbox. */
  description: f.node,
  /** Specifies whether to display checkbox in invalid state, this affects styling. */
  isInvalid: f.bool,
  /** Specifies whether to display checkbox in valid state, this affects styling. */
  isValid: f.bool,
  /** Specifies control element. */
  controlAs: f.elementType,
  /** Specifies whether the floating label should be aligned to the left. */
  floatLabelLeft: f.bool,
  /** Specifies whether the `FormCheckbox` is disabled. */
  disabled: f.bool
};
Ll.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  controlAs: Ep,
  floatLabelLeft: !1,
  disabled: !1
};
function Ua(e) {
  "@babel/helpers - typeof";
  return Ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ua(e);
}
var oI = ["isIndeterminate"], sI = ["children", "className", "helperText"];
function Qs() {
  return Qs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qs.apply(this, arguments);
}
function Bv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Vv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bv(Object(n), !0).forEach(function(r) {
      lI(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function lI(e, t, n) {
  return t = uI(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function uI(e) {
  var t = cI(e, "string");
  return Ua(t) == "symbol" ? t : t + "";
}
function cI(e, t) {
  if (Ua(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ua(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jb(e, t) {
  if (e == null) return {};
  var n = fI(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function fI(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var xp = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.isIndeterminate, r = jb(e, oI), i = y.useRef(), a = t || i, o = gt(), s = o.getControlProps, l = s(Vv(Vv({}, r), {}, {
    className: V("pgn__form-switch-input", r.className)
  }));
  return y.useEffect(function() {
    a.current && (a.current.indeterminate = n);
  }, [a, n]), /* @__PURE__ */ y.createElement("input", Qs({
    type: "checkbox"
  }, l, {
    ref: a
  }));
});
xp.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: f.bool,
  /** Specifies class name to append to the base element. */
  className: f.string
};
xp.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
var Op = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.helperText, a = jb(e, sI);
  return /* @__PURE__ */ y.createElement("div", {
    className: "d-inline-flex flex-column"
  }, /* @__PURE__ */ y.createElement(Ll, Qs({
    className: V("pgn__form-switch", r)
  }, a, {
    role: "switch",
    ref: t,
    controlAs: xp,
    isValid: null,
    isInvalid: null,
    description: null
  }), n), i && /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-switch-helper-text"
  }, i));
});
Op.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies class name to append to the label element. */
  labelClassName: f.string,
  /** Specifies helper text to display below the switch. */
  helperText: f.node,
  /** Determines whether the label should float to the left when the switch is active. */
  floatLabelLeft: f.bool
};
Op.defaultProps = {
  className: void 0,
  labelClassName: void 0,
  helperText: void 0,
  floatLabelLeft: !1
};
var dI = ["children", "name", "value", "defaultValue", "isInline", "onChange", "onFocus", "onBlur"];
function lf() {
  return lf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, lf.apply(this, arguments);
}
function pI(e, t) {
  if (e == null) return {};
  var n = mI(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function mI(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ml(e) {
  var t = e.children, n = e.name, r = e.value, i = e.defaultValue, a = e.isInline, o = e.onChange, s = e.onFocus, l = e.onBlur, u = pI(e, dI), c = gt(), p = c.getControlProps, d = c.useSetIsControlGroupEffect;
  d(!0);
  var g = p(u);
  return /* @__PURE__ */ y.createElement(wp, {
    name: n,
    value: r,
    defaultValue: i,
    onFocus: s,
    onBlur: l,
    onChange: o
  }, /* @__PURE__ */ y.createElement(Dl, lf({
    role: "group",
    isInline: a
  }, g), t));
}
Ml.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies name for the component. */
  name: f.string.isRequired,
  /** Specifies values for the checkboxes. */
  value: f.arrayOf(f.string),
  /** Specifies default values for the checkboxes. */
  defaultValue: f.arrayOf(f.string),
  /** Specifies whether to display components with inline styling. */
  isInline: f.bool,
  /** Specifies onChange event handler. */
  onChange: f.func,
  /** Specifies onFocus event handler. */
  onFocus: f.func,
  /** Specifies onBlur event handler. */
  onBlur: f.func
};
Ml.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
M.Control = mi;
M.Radio = mp;
M.RadioSet = hp;
M.Autosuggest = gp;
M.AutosuggestOption = bp;
M.Checkbox = Ll;
M.CheckboxSet = Ml;
M.Switch = Op;
M.SwitchSet = Ml;
M.Label = uo;
M.Group = fp;
M.Text = Fl;
var hI = ["position", "children", "offset", "className"];
function uf() {
  return uf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, uf.apply(this, arguments);
}
function zv(e, t) {
  return bI(e) || yI(e, t) || gI(e, t) || vI();
}
function vI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gI(e, t) {
  if (e) {
    if (typeof e == "string") return Uv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Uv(e, t);
  }
}
function Uv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function yI(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function bI(e) {
  if (Array.isArray(e)) return e;
}
function wI(e, t) {
  if (e == null) return {};
  var n = EI(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function EI(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var xI = ["top", "bottom"], Cp = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.position, r = e.children, i = e.offset, a = e.className, o = wI(e, hI), s = _.useState(!1), l = zv(s, 2), u = l[0], c = l[1], p = y.useRef(), d = t || p;
  return _.useLayoutEffect(function() {
    if (d.current) {
      var g = d.current, w = window.getComputedStyle(g), x = w[n || "top"], v = 1 + (parseInt(x, 10) || 0), m = new IntersectionObserver(function(h) {
        var E = zv(h, 1), b = E[0];
        return c(b.intersectionRatio < 1);
      }, {
        threshold: [1],
        rootMargin: n === "bottom" ? "0px 0px -".concat(v, "px 0px") : "-".concat(v, "px 0px 0px 0px")
      });
      return m.observe(g), function() {
        m.unobserve(g);
      };
    }
  }, [n, d]), /* @__PURE__ */ y.createElement("div", uf({
    className: V("pgn__sticky", "pgn__sticky-".concat(n || "top"), i ? "pgn__sticky-offset--".concat(i) : "", {
      "pgn__sticky-shadow": u
    }, a),
    ref: d
  }, o), r);
});
Cp.propTypes = {
  /** Specifies content of the component. */
  children: f.node.isRequired,
  /** Specifies position of the element. */
  position: f.oneOf(xI),
  /**
   * Specifies offset from top/bottom depending on the `position` property.
   *
   * Valid values are based on `the spacing classes`:
   * `0, 0.5, ... 6`.
   */
  offset: f.oneOfType([f.number, f.string]),
  /** Specifies an additional `className` to add to the base element. */
  className: f.string
};
Cp.defaultProps = {
  position: "top",
  offset: void 0,
  className: void 0
};
const OI = {
  lineItemTitleColor: "#001731",
  lineItemTitleFontSize: 18,
  lineItemLabelColor: "#001731",
  lineItemLabelFontSize: 16,
  highlightColor: "#0070F0",
  cardBackgroundColor: "#001731",
  cardTitleColor: "#FFFFFF",
  cardTitleFontSize: 22,
  cardDescriptionColor: "#FFFFFF",
  cardDescriptionFontSize: 16
}, rs = (e) => ({
  title: `Step ${e + 1}`,
  label: "",
  description: "",
  displayAboveLine: e % 2 === 0,
  position: e
}), Nb = (e) => Math.max(0, Math.min(1, e)), Rb = (e, t = 8) => {
  const n = Nb(e), r = 100 - t * 2;
  return t + n * r;
}, is = (e) => e.length <= 1 ? e.map((t) => ({ ...t, position: 0.5 })) : e.map((t, n) => ({
  ...t,
  position: n / (e.length - 1)
})), kp = (e) => [...e].sort((t, n) => t.position - n.position), Fb = () => ({
  displayName: "Process Line",
  introductionText: "Click and drag to explore. Select an item for more details.",
  styling: OI,
  items: is([
    rs(0),
    rs(1),
    rs(2)
  ])
});
function Db({
  configuration: e,
  selectedIndex: t,
  onSelectedIndexChange: n
}) {
  const r = _.useMemo(
    () => kp(e.items || []),
    [e.items]
  ), [i, a] = _.useState(0), o = _.useRef(null), s = _.useRef({
    active: !1,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
    moved: !1
  }), l = t ?? i, u = _.useCallback((b) => {
    const O = r.length ? Math.max(0, Math.min(r.length - 1, b)) : 0;
    t === void 0 && a(O), n && n(O);
  }, [t, r.length, n]);
  _.useEffect(() => {
    l > r.length - 1 && u(Math.max(r.length - 1, 0));
  }, [r.length, l, u]);
  const c = r[l], p = (b) => {
    u(l + b);
  }, d = (b) => {
    const O = o.current;
    if (!O)
      return;
    const k = O.querySelector(`[data-step-index="${b}"]`);
    k && typeof k.scrollIntoView == "function" && k.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  };
  _.useEffect(() => {
    d(l);
  }, [l]);
  const g = (b) => {
    s.current.moved || u(b);
  }, w = (b) => {
    const O = o.current;
    O && (s.current = {
      active: !0,
      pointerId: b.pointerId,
      startX: b.clientX,
      startScrollLeft: O.scrollLeft,
      moved: !1
    }, O.setPointerCapture(b.pointerId));
  }, x = (b) => {
    const O = o.current, k = s.current;
    if (!O || !k.active || k.pointerId !== b.pointerId)
      return;
    const A = b.clientX - k.startX;
    Math.abs(A) > 4 && (k.moved = !0), O.scrollLeft = k.startScrollLeft - A;
  }, v = (b) => {
    const O = o.current;
    O && O.hasPointerCapture(b) && O.releasePointerCapture(b);
    const k = s.current;
    k.active = !1, window.setTimeout(() => {
      s.current.moved = !1;
    }, 0);
  }, m = (b) => {
    s.current.pointerId === b.pointerId && v(b.pointerId);
  }, h = (b) => {
    s.current.pointerId === b.pointerId && v(b.pointerId);
  }, E = (b, O) => {
    const k = O === l;
    return {
      left: `${Rb(b.position)}%`,
      "--processline-highlight-color": e.styling.highlightColor,
      "--processline-title-color": k ? e.styling.highlightColor : e.styling.lineItemTitleColor,
      "--processline-label-color": e.styling.lineItemLabelColor,
      "--processline-title-font-size": `${e.styling.lineItemTitleFontSize}px`,
      "--processline-label-font-size": `${e.styling.lineItemLabelFontSize}px`
    };
  };
  return r.length ? /* @__PURE__ */ T.jsxs("div", { className: "xblock-processline student-view", children: [
    /* @__PURE__ */ T.jsxs("header", { className: "processline-header", children: [
      /* @__PURE__ */ T.jsx("h2", { className: "processline-heading", children: e.displayName }),
      /* @__PURE__ */ T.jsx("p", { className: "processline-subheading", children: e.introductionText })
    ] }),
    /* @__PURE__ */ T.jsxs("section", { className: "processline-timeline-section", "aria-label": "Process line navigation", children: [
      /* @__PURE__ */ T.jsx(
        "button",
        {
          className: "timeline-side-button",
          type: "button",
          onClick: () => p(-1),
          disabled: l === 0,
          "aria-label": "Previous item",
          children: "←"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "div",
        {
          ref: o,
          className: "timeline-viewport",
          onPointerDown: w,
          onPointerMove: x,
          onPointerUp: m,
          onPointerCancel: h,
          children: /* @__PURE__ */ T.jsxs(
            "div",
            {
              className: "timeline-canvas",
              style: { minWidth: `${Math.max(960, r.length * 220)}px` },
              children: [
                /* @__PURE__ */ T.jsx("div", { className: "timeline-track" }),
                r.map((b, O) => {
                  const k = O === l;
                  return /* @__PURE__ */ T.jsxs(
                    "button",
                    {
                      className: `timeline-marker ${b.displayAboveLine ? "above" : "below"} ${k ? "selected" : ""}`,
                      "data-step-index": O,
                      type: "button",
                      style: E(b, O),
                      onPointerDown: (A) => A.stopPropagation(),
                      onClick: () => g(O),
                      onFocus: () => u(O),
                      "aria-pressed": k,
                      children: [
                        /* @__PURE__ */ T.jsx("span", { className: "timeline-node" }),
                        /* @__PURE__ */ T.jsxs("span", { className: "timeline-marker-copy", children: [
                          /* @__PURE__ */ T.jsx("span", { className: "timeline-marker-title", children: b.title }),
                          /* @__PURE__ */ T.jsx("span", { className: "timeline-marker-label", children: b.label })
                        ] })
                      ]
                    },
                    `${b.title}-${b.position}`
                  );
                })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ T.jsx(
        "button",
        {
          className: "timeline-side-button",
          type: "button",
          onClick: () => p(1),
          disabled: l === r.length - 1,
          "aria-label": "Next item",
          children: "→"
        }
      )
    ] }),
    c && /* @__PURE__ */ T.jsxs(
      "section",
      {
        className: "processline-detail-card",
        style: {
          backgroundColor: e.styling.cardBackgroundColor,
          color: e.styling.cardDescriptionColor
        },
        children: [
          /* @__PURE__ */ T.jsxs(
            "span",
            {
              className: "detail-progress-pill",
              style: { backgroundColor: e.styling.highlightColor },
              children: [
                l + 1,
                " / ",
                r.length
              ]
            }
          ),
          /* @__PURE__ */ T.jsxs(
            "h3",
            {
              className: "detail-title",
              style: {
                color: e.styling.cardTitleColor,
                fontSize: `${e.styling.cardTitleFontSize}px`
              },
              children: [
                c.title,
                c.label ? ` - ${c.label}` : ""
              ]
            }
          ),
          /* @__PURE__ */ T.jsx(
            "p",
            {
              className: "detail-description",
              style: {
                color: e.styling.cardDescriptionColor,
                fontSize: `${e.styling.cardDescriptionFontSize}px`
              },
              children: c.description
            }
          ),
          /* @__PURE__ */ T.jsxs("div", { className: "detail-card-footer", children: [
            /* @__PURE__ */ T.jsxs("span", { className: "detail-count", children: [
              l + 1,
              " of ",
              r.length
            ] }),
            /* @__PURE__ */ T.jsxs("div", { className: "detail-actions", children: [
              /* @__PURE__ */ T.jsx(
                "button",
                {
                  className: "detail-nav-button",
                  type: "button",
                  onClick: () => p(-1),
                  disabled: l === 0,
                  "aria-label": "Previous detail",
                  children: "←"
                }
              ),
              /* @__PURE__ */ T.jsx(
                "button",
                {
                  className: "detail-nav-button primary",
                  type: "button",
                  onClick: () => p(1),
                  disabled: l === r.length - 1,
                  "aria-label": "Next detail",
                  children: "→"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ T.jsxs("div", { className: "xblock-processline student-view empty-state", children: [
    /* @__PURE__ */ T.jsx("h2", { className: "processline-heading", children: e.displayName }),
    /* @__PURE__ */ T.jsx("p", { className: "processline-subheading", children: e.introductionText }),
    /* @__PURE__ */ T.jsx("p", { className: "processline-empty-message", children: "No line items have been configured yet." })
  ] });
}
Db.defaultProps = {
  selectedIndex: void 0,
  onSelectedIndexChange: void 0
};
const xu = (e) => ({
  ...e,
  items: kp(e.items)
});
function CI({
  initialConfiguration: e,
  isSaving: t,
  saveError: n,
  onSave: r,
  onCancel: i
}) {
  const [a, o] = _.useState("basic"), [s, l] = _.useState(
    xu(e)
  ), [u, c] = _.useState(0), p = _.useRef(null);
  _.useEffect(() => {
    l(xu(e));
  }, [e]), _.useEffect(() => {
    u > s.items.length - 1 && c(Math.max(s.items.length - 1, 0));
  }, [s.items.length, u]);
  const d = s.items[u], g = (C) => {
    l((S) => xu(C(S)));
  }, w = (C, S) => {
    g((N) => ({
      ...N,
      styling: {
        ...N.styling,
        [C]: S
      }
    }));
  }, x = (C) => {
    g((S) => ({
      ...S,
      items: S.items.map((N, G) => G === u ? C(N) : N)
    }));
  }, v = () => {
    g((C) => {
      const S = [...C.items, rs(C.items.length)];
      return {
        ...C,
        items: is(S)
      };
    }), c(s.items.length);
  }, m = (C) => {
    g((S) => {
      const N = S.items.filter((G, B) => B !== C);
      return N.length ? {
        ...S,
        items: is(N)
      } : {
        ...S,
        items: []
      };
    });
  }, h = () => {
    g((C) => ({
      ...C,
      items: is(C.items)
    }));
  }, E = () => {
    s.items.length && o("placement");
  }, b = (C, S) => {
    const N = p.current;
    if (!N)
      return;
    c(C), S.preventDefault();
    const { pointerId: G } = S, B = (L) => {
      const D = N.getBoundingClientRect(), K = Nb((L.clientX - D.left) / D.width);
      g((Z) => ({
        ...Z,
        items: Z.items.map((re, J) => J === C ? { ...re, position: K } : re)
      }));
    }, j = (L) => {
      L.pointerId === G && (window.removeEventListener("pointermove", B), window.removeEventListener("pointerup", j));
    };
    window.addEventListener("pointermove", B), window.addEventListener("pointerup", j);
  }, O = {
    basic: /* @__PURE__ */ T.jsx(ke, { className: "studio-page-content", children: /* @__PURE__ */ T.jsx(ke.Body, { children: /* @__PURE__ */ T.jsxs("div", { className: "form-stack", children: [
      /* @__PURE__ */ T.jsxs(M.Group, { controlId: "processline-display-name", children: [
        /* @__PURE__ */ T.jsx(M.Label, { children: "Display Name" }),
        /* @__PURE__ */ T.jsx(
          M.Control,
          {
            type: "text",
            value: s.displayName,
            onChange: (C) => g((S) => ({
              ...S,
              displayName: C.target.value
            }))
          }
        )
      ] }),
      /* @__PURE__ */ T.jsxs(M.Group, { className: "mb-0", controlId: "processline-introduction-text", children: [
        /* @__PURE__ */ T.jsx(M.Label, { children: "Introduction Text" }),
        /* @__PURE__ */ T.jsx(
          M.Control,
          {
            as: "textarea",
            rows: 6,
            value: s.introductionText,
            onChange: (C) => g((S) => ({
              ...S,
              introductionText: C.target.value
            }))
          }
        )
      ] })
    ] }) }) }),
    styling: /* @__PURE__ */ T.jsxs("div", { className: "styling-page", children: [
      /* @__PURE__ */ T.jsx(ke, { className: "studio-page-content", children: /* @__PURE__ */ T.jsxs(ke.Body, { children: [
        /* @__PURE__ */ T.jsx("h3", { className: "section-title", children: "Styling of Line Items" }),
        /* @__PURE__ */ T.jsxs("div", { className: "style-grid two-column", children: [
          /* @__PURE__ */ T.jsxs(M.Group, { controlId: "lineItemTitleColor", children: [
            /* @__PURE__ */ T.jsx(M.Label, { children: "Title text color" }),
            /* @__PURE__ */ T.jsx(
              M.Control,
              {
                type: "text",
                value: s.styling.lineItemTitleColor,
                onChange: (C) => w("lineItemTitleColor", C.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ T.jsxs(M.Group, { controlId: "lineItemTitleFontSize", children: [
            /* @__PURE__ */ T.jsx(M.Label, { children: "Title font size" }),
            /* @__PURE__ */ T.jsx(
              M.Control,
              {
                type: "number",
                min: 1,
                value: s.styling.lineItemTitleFontSize,
                onChange: (C) => w("lineItemTitleFontSize", Number(C.target.value) || 1)
              }
            )
          ] }),
          /* @__PURE__ */ T.jsxs(M.Group, { controlId: "lineItemLabelColor", children: [
            /* @__PURE__ */ T.jsx(M.Label, { children: "Label text color" }),
            /* @__PURE__ */ T.jsx(
              M.Control,
              {
                type: "text",
                value: s.styling.lineItemLabelColor,
                onChange: (C) => w("lineItemLabelColor", C.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ T.jsxs(M.Group, { controlId: "lineItemLabelFontSize", children: [
            /* @__PURE__ */ T.jsx(M.Label, { children: "Label font size" }),
            /* @__PURE__ */ T.jsx(
              M.Control,
              {
                type: "number",
                min: 1,
                value: s.styling.lineItemLabelFontSize,
                onChange: (C) => w("lineItemLabelFontSize", Number(C.target.value) || 1)
              }
            )
          ] }),
          /* @__PURE__ */ T.jsxs(M.Group, { className: "single-span mb-0", controlId: "highlightColor", children: [
            /* @__PURE__ */ T.jsx(M.Label, { children: "Highlight color" }),
            /* @__PURE__ */ T.jsx(
              M.Control,
              {
                type: "text",
                value: s.styling.highlightColor,
                onChange: (C) => w("highlightColor", C.target.value)
              }
            ),
            /* @__PURE__ */ T.jsx(M.Text, { muted: !0, children: "Color of the title, dot, and progress pill when selected." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ T.jsx(ke, { className: "studio-page-content", children: /* @__PURE__ */ T.jsxs(ke.Body, { children: [
        /* @__PURE__ */ T.jsx("h3", { className: "section-title", children: "Styling of Cards" }),
        /* @__PURE__ */ T.jsxs("div", { className: "style-grid two-column", children: [
          /* @__PURE__ */ T.jsxs(M.Group, { className: "single-span", controlId: "cardBackgroundColor", children: [
            /* @__PURE__ */ T.jsx(M.Label, { children: "Card background color" }),
            /* @__PURE__ */ T.jsx(
              M.Control,
              {
                type: "text",
                value: s.styling.cardBackgroundColor,
                onChange: (C) => w("cardBackgroundColor", C.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ T.jsxs(M.Group, { controlId: "cardTitleColor", children: [
            /* @__PURE__ */ T.jsx(M.Label, { children: "Title text color" }),
            /* @__PURE__ */ T.jsx(
              M.Control,
              {
                type: "text",
                value: s.styling.cardTitleColor,
                onChange: (C) => w("cardTitleColor", C.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ T.jsxs(M.Group, { controlId: "cardTitleFontSize", children: [
            /* @__PURE__ */ T.jsx(M.Label, { children: "Title font size" }),
            /* @__PURE__ */ T.jsx(
              M.Control,
              {
                type: "number",
                min: 1,
                value: s.styling.cardTitleFontSize,
                onChange: (C) => w("cardTitleFontSize", Number(C.target.value) || 1)
              }
            )
          ] }),
          /* @__PURE__ */ T.jsxs(M.Group, { controlId: "cardDescriptionColor", children: [
            /* @__PURE__ */ T.jsx(M.Label, { children: "Description text color" }),
            /* @__PURE__ */ T.jsx(
              M.Control,
              {
                type: "text",
                value: s.styling.cardDescriptionColor,
                onChange: (C) => w("cardDescriptionColor", C.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ T.jsxs(M.Group, { className: "mb-0", controlId: "cardDescriptionFontSize", children: [
            /* @__PURE__ */ T.jsx(M.Label, { children: "Description font size" }),
            /* @__PURE__ */ T.jsx(
              M.Control,
              {
                type: "number",
                min: 1,
                value: s.styling.cardDescriptionFontSize,
                onChange: (C) => w("cardDescriptionFontSize", Number(C.target.value) || 1)
              }
            )
          ] })
        ] })
      ] }) })
    ] }),
    items: /* @__PURE__ */ T.jsx(ke, { className: "studio-page-content", children: /* @__PURE__ */ T.jsxs(ke.Body, { className: "items-page", children: [
      /* @__PURE__ */ T.jsxs("aside", { className: "items-sidebar", children: [
        /* @__PURE__ */ T.jsx(Ct, { className: "add-item-button", type: "button", onClick: v, children: "+ Add line item" }),
        /* @__PURE__ */ T.jsx("div", { className: "items-list", children: s.items.map((C, S) => /* @__PURE__ */ T.jsxs(
          "div",
          {
            className: `item-row ${S === u ? "selected" : ""}`,
            children: [
              /* @__PURE__ */ T.jsx(
                Ct,
                {
                  className: "item-select-button",
                  type: "button",
                  variant: S === u ? "primary" : "tertiary",
                  onClick: () => c(S),
                  children: C.title || `Item ${S + 1}`
                }
              ),
              /* @__PURE__ */ T.jsx(
                di,
                {
                  className: "item-delete-button",
                  src: FS,
                  iconAs: Xt,
                  variant: "danger",
                  alt: `Delete ${C.title || `Item ${S + 1}`}`,
                  onClick: () => m(S)
                }
              )
            ]
          },
          `${C.title}-${C.label}-${C.position}`
        )) })
      ] }),
      /* @__PURE__ */ T.jsx("div", { className: "item-editor-panel", children: d ? /* @__PURE__ */ T.jsxs("div", { className: "form-stack", children: [
        /* @__PURE__ */ T.jsxs(M.Group, { controlId: "lineItemTitle", children: [
          /* @__PURE__ */ T.jsx(M.Label, { children: "Title" }),
          /* @__PURE__ */ T.jsx(
            M.Control,
            {
              type: "text",
              value: d.title,
              onChange: (C) => x((S) => ({
                ...S,
                title: C.target.value
              }))
            }
          )
        ] }),
        /* @__PURE__ */ T.jsxs(M.Group, { controlId: "lineItemLabel", children: [
          /* @__PURE__ */ T.jsx(M.Label, { children: "Label" }),
          /* @__PURE__ */ T.jsx(
            M.Control,
            {
              type: "text",
              value: d.label,
              onChange: (C) => x((S) => ({
                ...S,
                label: C.target.value
              }))
            }
          )
        ] }),
        /* @__PURE__ */ T.jsxs(M.Group, { controlId: "lineItemDescription", children: [
          /* @__PURE__ */ T.jsx(M.Label, { children: "Description" }),
          /* @__PURE__ */ T.jsx(
            M.Control,
            {
              as: "textarea",
              rows: 6,
              value: d.description,
              onChange: (C) => x((S) => ({
                ...S,
                description: C.target.value
              }))
            }
          )
        ] }),
        /* @__PURE__ */ T.jsxs(M.Group, { className: "mb-0", children: [
          /* @__PURE__ */ T.jsx(M.Label, { children: "Label placement" }),
          /* @__PURE__ */ T.jsxs("div", { className: "radio-field-group", children: [
            /* @__PURE__ */ T.jsx(
              M.Check,
              {
                id: `displayAboveLine-${u}`,
                type: "radio",
                name: "labelPlacement",
                label: "Display above line",
                checked: d.displayAboveLine,
                onChange: () => x((C) => ({
                  ...C,
                  displayAboveLine: !0
                }))
              }
            ),
            /* @__PURE__ */ T.jsx(
              M.Check,
              {
                id: `displayBelowLine-${u}`,
                type: "radio",
                name: "labelPlacement",
                label: "Display below line",
                checked: !d.displayAboveLine,
                onChange: () => x((C) => ({
                  ...C,
                  displayAboveLine: !1
                }))
              }
            )
          ] })
        ] })
      ] }) : /* @__PURE__ */ T.jsx(ti, { variant: "light", className: "mb-0 empty-editor-state", children: "Add a line item to begin configuring the process line." }) })
    ] }) }),
    placement: /* @__PURE__ */ T.jsxs("div", { className: "placement-page", children: [
      /* @__PURE__ */ T.jsx(ke, { className: "studio-page-content placement-card", children: /* @__PURE__ */ T.jsxs(ke.Body, { children: [
        /* @__PURE__ */ T.jsx("h3", { children: "Placement of Line Items" }),
        /* @__PURE__ */ T.jsx("p", { className: "placement-copy", children: "Drag items to position them along the line. Use the button below to space them evenly." }),
        /* @__PURE__ */ T.jsx("div", { className: "placement-shell", children: /* @__PURE__ */ T.jsx("div", { ref: p, className: "placement-track", children: kp(s.items).map((C, S) => /* @__PURE__ */ T.jsxs(
          "button",
          {
            type: "button",
            className: `placement-marker ${C.displayAboveLine ? "above" : "below"} ${S === u ? "selected" : ""}`,
            style: { left: `${Rb(C.position)}%` },
            onPointerDown: (N) => b(S, N),
            onClick: () => c(S),
            onFocus: () => c(S),
            "aria-label": `Select ${C.title || `Item ${S + 1}`}`,
            "aria-pressed": S === u,
            children: [
              /* @__PURE__ */ T.jsx("span", { className: "placement-node" }),
              /* @__PURE__ */ T.jsx("span", { className: "placement-label", children: C.title || `Item ${S + 1}` })
            ]
          },
          `${C.title}-${C.label}-${C.position}`
        )) }) }),
        /* @__PURE__ */ T.jsx(Ct, { variant: "outline-primary", type: "button", onClick: h, children: "Space items evenly" })
      ] }) }),
      /* @__PURE__ */ T.jsx(ke, { as: "section", className: "student-preview-section", "aria-label": "Student preview", children: /* @__PURE__ */ T.jsxs(ke.Body, { className: "student-preview-shell", children: [
        /* @__PURE__ */ T.jsx("h4", { className: "student-preview-title", children: "Student preview" }),
        /* @__PURE__ */ T.jsx(
          Db,
          {
            configuration: s,
            selectedIndex: u,
            onSelectedIndexChange: c
          }
        )
      ] }) })
    ] })
  }, k = {
    basic: {
      label: "Continue",
      onClick: () => o("styling")
    },
    styling: {
      label: "Continue",
      onClick: () => o("items")
    },
    items: {
      label: "Continue",
      onClick: E
    },
    placement: {
      label: "Save",
      onClick: () => r(s)
    }
  }[a], A = () => {
    a === "styling" ? o("basic") : a === "items" ? o("styling") : a === "placement" && o("items");
  };
  return /* @__PURE__ */ T.jsx("div", { className: "xblock-processline-editor", children: /* @__PURE__ */ T.jsxs("div", { className: "editor-shell", children: [
    /* @__PURE__ */ T.jsx("h2", { className: "editor-title", children: "Editing: Process Line" }),
    O[a],
    n && /* @__PURE__ */ T.jsx(ti, { className: "save-error", variant: "danger", children: n }),
    /* @__PURE__ */ T.jsx(Cp, { position: "bottom", className: "editor-actions border-top p-3", children: /* @__PURE__ */ T.jsxs(lr, { children: [
      /* @__PURE__ */ T.jsx(lr.Spacer, {}),
      /* @__PURE__ */ T.jsx(Ct, { variant: "tertiary", type: "button", onClick: i, disabled: t, children: "Cancel" }),
      a !== "basic" && /* @__PURE__ */ T.jsx(Ct, { variant: "outline-primary", type: "button", onClick: A, disabled: t, children: "Back" }),
      /* @__PURE__ */ T.jsx(
        Ct,
        {
          variant: "primary",
          type: "button",
          onClick: k.onClick,
          disabled: t || a === "items" && !s.items.length,
          children: t ? "Saving…" : k.label
        }
      )
    ] }) })
  ] }) });
}
function kI({
  initialConfiguration: e,
  studioSaveUrl: t,
  runtime: n
}) {
  const [r, i] = _.useState(e), [a, o] = _.useState(!1), [s, l] = _.useState(""), u = () => {
    n.notify("cancel", {});
  }, c = (p) => {
    o(!0), l(""), n.notify("save", { state: "start" }), $.ajax({
      url: t,
      method: "POST",
      data: JSON.stringify(p),
      contentType: "application/json"
    }).done((d) => {
      if ((d == null ? void 0 : d.result) !== "success") {
        l((d == null ? void 0 : d.message) || "Failed to save Process Line configuration."), n.notify("error", {
          title: "Save Error",
          message: (d == null ? void 0 : d.message) || "Failed to save Process Line configuration."
        }), o(!1);
        return;
      }
      i(d.configuration || p), n.notify("save", { state: "end" }), o(!1);
    }).fail(() => {
      l("Failed to save Process Line configuration."), n.notify("error", {
        title: "Save Error",
        message: "Failed to save Process Line configuration."
      }), o(!1);
    });
  };
  return /* @__PURE__ */ T.jsx(
    CI,
    {
      initialConfiguration: r || Fb(),
      isSaving: a,
      saveError: s,
      onCancel: u,
      onSave: c
    }
  );
}
const SI = (e) => {
  const t = Fb();
  return {
    ...t,
    displayName: e.displayName || t.displayName,
    introductionText: e.introductionText || t.introductionText,
    styling: {
      ...t.styling,
      ...e.styling || {}
    },
    items: Array.isArray(e.items) ? e.items : t.items
  };
}, _I = (e, t, n) => {
  const r = t && "jquery" in t ? t[0] : t;
  if (!r || !(r instanceof Element)) {
    console.error("Invalid DOM element provided to renderEditor:", t);
    return;
  }
  const i = e.handlerUrl(r, "studio_save");
  My.render(
    /* @__PURE__ */ T.jsx(_.StrictMode, { children: /* @__PURE__ */ T.jsx(
      kI,
      {
        initialConfiguration: SI(n),
        studioSaveUrl: i,
        runtime: e
      }
    ) }),
    r
  );
};
export {
  _I as renderEditor
};
