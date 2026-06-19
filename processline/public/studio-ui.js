var zu = { exports: {} }, Qn = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ho = Object.getOwnPropertySymbols, Fa = Object.prototype.hasOwnProperty, za = Object.prototype.propertyIsEnumerable;
function Oa(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function Ma() {
  try {
    if (!Object.assign)
      return !1;
    var e = new String("abc");
    if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5")
      return !1;
    for (var t = {}, n = 0; n < 10; n++)
      t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function(i) {
      return t[i];
    });
    if (r.join("") !== "0123456789")
      return !1;
    var l = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(i) {
      l[i] = i;
    }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var Ou = Ma() ? Object.assign : function(e, t) {
  for (var n, r = Oa(e), l, i = 1; i < arguments.length; i++) {
    n = Object(arguments[i]);
    for (var o in n)
      Fa.call(n, o) && (r[o] = n[o]);
    if (ho) {
      l = ho(n);
      for (var u = 0; u < l.length; u++)
        za.call(n, l[u]) && (r[l[u]] = n[l[u]]);
    }
  }
  return r;
}, Mu = { exports: {} }, z = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi = Ou, Yt = 60103, Du = 60106;
z.Fragment = 60107;
z.StrictMode = 60108;
z.Profiler = 60114;
var Ru = 60109, Uu = 60110, $u = 60112;
z.Suspense = 60113;
var Au = 60115, Bu = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var ge = Symbol.for;
  Yt = ge("react.element"), Du = ge("react.portal"), z.Fragment = ge("react.fragment"), z.StrictMode = ge("react.strict_mode"), z.Profiler = ge("react.profiler"), Ru = ge("react.provider"), Uu = ge("react.context"), $u = ge("react.forward_ref"), z.Suspense = ge("react.suspense"), Au = ge("react.memo"), Bu = ge("react.lazy");
}
var vo = typeof Symbol == "function" && Symbol.iterator;
function Da(e) {
  return e === null || typeof e != "object" ? null : (e = vo && e[vo] || e["@@iterator"], typeof e == "function" ? e : null);
}
function Yn(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Vu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Wu = {};
function Xt(e, t, n) {
  this.props = e, this.context = t, this.refs = Wu, this.updater = n || Vu;
}
Xt.prototype.isReactComponent = {};
Xt.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error(Yn(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
Xt.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hu() {
}
Hu.prototype = Xt.prototype;
function gi(e, t, n) {
  this.props = e, this.context = t, this.refs = Wu, this.updater = n || Vu;
}
var wi = gi.prototype = new Hu();
wi.constructor = gi;
yi(wi, Xt.prototype);
wi.isPureReactComponent = !0;
var Si = { current: null }, Qu = Object.prototype.hasOwnProperty, Yu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xu(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) Qu.call(t, r) && !Yu.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Yt, type: e, key: i, ref: o, props: l, _owner: Si.current };
}
function Ra(e, t) {
  return { $$typeof: Yt, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ki(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yt;
}
function Ua(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var yo = /\/+/g;
function ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ua("" + e.key) : t.toString(36);
}
function cr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (i) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Yt:
        case Du:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + ol(o, 0) : r, Array.isArray(l) ? (n = "", e != null && (n = e.replace(yo, "$&/") + "/"), cr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (ki(l) && (l = Ra(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(yo, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Array.isArray(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + ol(i, u);
    o += cr(i, t, n, s, l);
  }
  else if (s = Da(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + ol(i, u++), o += cr(i, t, n, s, l);
  else if (i === "object") throw t = "" + e, Error(Yn(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
  return o;
}
function qn(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return cr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function $a(e) {
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
var Ku = { current: null };
function Oe() {
  var e = Ku.current;
  if (e === null) throw Error(Yn(321));
  return e;
}
var Aa = { ReactCurrentDispatcher: Ku, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: Si, IsSomeRendererActing: { current: !1 }, assign: yi };
z.Children = { map: qn, forEach: function(e, t, n) {
  qn(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return qn(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return qn(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ki(e)) throw Error(Yn(143));
  return e;
} };
z.Component = Xt;
z.PureComponent = gi;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Aa;
z.cloneElement = function(e, t, n) {
  if (e == null) throw Error(Yn(267, e));
  var r = yi({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Si.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) Qu.call(t, s) && !Yu.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return {
    $$typeof: Yt,
    type: e.type,
    key: l,
    ref: i,
    props: r,
    _owner: o
  };
};
z.createContext = function(e, t) {
  return t === void 0 && (t = null), e = { $$typeof: Uu, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: Ru, _context: e }, e.Consumer = e;
};
z.createElement = Xu;
z.createFactory = function(e) {
  var t = Xu.bind(null, e);
  return t.type = e, t;
};
z.createRef = function() {
  return { current: null };
};
z.forwardRef = function(e) {
  return { $$typeof: $u, render: e };
};
z.isValidElement = ki;
z.lazy = function(e) {
  return { $$typeof: Bu, _payload: { _status: -1, _result: e }, _init: $a };
};
z.memo = function(e, t) {
  return { $$typeof: Au, type: e, compare: t === void 0 ? null : t };
};
z.useCallback = function(e, t) {
  return Oe().useCallback(e, t);
};
z.useContext = function(e, t) {
  return Oe().useContext(e, t);
};
z.useDebugValue = function() {
};
z.useEffect = function(e, t) {
  return Oe().useEffect(e, t);
};
z.useImperativeHandle = function(e, t, n) {
  return Oe().useImperativeHandle(e, t, n);
};
z.useLayoutEffect = function(e, t) {
  return Oe().useLayoutEffect(e, t);
};
z.useMemo = function(e, t) {
  return Oe().useMemo(e, t);
};
z.useReducer = function(e, t, n) {
  return Oe().useReducer(e, t, n);
};
z.useRef = function(e) {
  return Oe().useRef(e);
};
z.useState = function(e) {
  return Oe().useState(e);
};
z.version = "17.0.2";
Mu.exports = z;
var Q = Mu.exports;
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ba = Q, Gu = 60103;
Qn.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var go = Symbol.for;
  Gu = go("react.element"), Qn.Fragment = go("react.fragment");
}
var Va = Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Wa = Object.prototype.hasOwnProperty, Ha = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zu(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Wa.call(t, r) && !Ha.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Gu, type: e, key: i, ref: o, props: l, _owner: Va.current };
}
Qn.jsx = Zu;
Qn.jsxs = Zu;
zu.exports = Qn;
var m = zu.exports, Ju = { exports: {} }, ye = {}, qu = { exports: {} }, bu = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  var t, n, r, l;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  if (typeof window > "u" || typeof MessageChannel != "function") {
    var s = null, f = null, S = function() {
      if (s !== null) try {
        var C = e.unstable_now();
        s(!0, C), s = null;
      } catch (I) {
        throw setTimeout(S, 0), I;
      }
    };
    t = function(C) {
      s !== null ? setTimeout(t, 0, C) : (s = C, setTimeout(S, 0));
    }, n = function(C, I) {
      f = setTimeout(C, I);
    }, r = function() {
      clearTimeout(f);
    }, e.unstable_shouldYield = function() {
      return !1;
    }, l = e.unstable_forceFrameRate = function() {
    };
  } else {
    var j = window.setTimeout, h = window.clearTimeout;
    if (typeof console < "u") {
      var E = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof E != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var N = !1, P = null, d = -1, a = 5, c = 0;
    e.unstable_shouldYield = function() {
      return e.unstable_now() >= c;
    }, l = function() {
    }, e.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : a = 0 < C ? Math.floor(1e3 / C) : 5;
    };
    var v = new MessageChannel(), p = v.port2;
    v.port1.onmessage = function() {
      if (P !== null) {
        var C = e.unstable_now();
        c = C + a;
        try {
          P(!0, C) ? p.postMessage(null) : (N = !1, P = null);
        } catch (I) {
          throw p.postMessage(null), I;
        }
      } else N = !1;
    }, t = function(C) {
      P = C, N || (N = !0, p.postMessage(null));
    }, n = function(C, I) {
      d = j(function() {
        C(e.unstable_now());
      }, I);
    }, r = function() {
      h(d), d = -1;
    };
  }
  function x(C, I) {
    var F = C.length;
    C.push(I);
    e: for (; ; ) {
      var V = F - 1 >>> 1, Z = C[V];
      if (Z !== void 0 && 0 < y(Z, I)) C[V] = I, C[F] = Z, F = V;
      else break e;
    }
  }
  function g(C) {
    return C = C[0], C === void 0 ? null : C;
  }
  function T(C) {
    var I = C[0];
    if (I !== void 0) {
      var F = C.pop();
      if (F !== I) {
        C[0] = F;
        e: for (var V = 0, Z = C.length; V < Z; ) {
          var lt = 2 * (V + 1) - 1, it = C[lt], en = lt + 1, xt = C[en];
          if (it !== void 0 && 0 > y(it, F)) xt !== void 0 && 0 > y(xt, it) ? (C[V] = xt, C[en] = F, V = en) : (C[V] = it, C[lt] = F, V = lt);
          else if (xt !== void 0 && 0 > y(xt, F)) C[V] = xt, C[en] = F, V = en;
          else break e;
        }
      }
      return I;
    }
    return null;
  }
  function y(C, I) {
    var F = C.sortIndex - I.sortIndex;
    return F !== 0 ? F : C.id - I.id;
  }
  var w = [], O = [], Me = 1, G = null, H = 3, De = !1, ke = !1, rt = !1;
  function St(C) {
    for (var I = g(O); I !== null; ) {
      if (I.callback === null) T(O);
      else if (I.startTime <= C) T(O), I.sortIndex = I.expirationTime, x(w, I);
      else break;
      I = g(O);
    }
  }
  function kt(C) {
    if (rt = !1, St(C), !ke) if (g(w) !== null) ke = !0, t(bt);
    else {
      var I = g(O);
      I !== null && n(kt, I.startTime - C);
    }
  }
  function bt(C, I) {
    ke = !1, rt && (rt = !1, r()), De = !0;
    var F = H;
    try {
      for (St(I), G = g(w); G !== null && (!(G.expirationTime > I) || C && !e.unstable_shouldYield()); ) {
        var V = G.callback;
        if (typeof V == "function") {
          G.callback = null, H = G.priorityLevel;
          var Z = V(G.expirationTime <= I);
          I = e.unstable_now(), typeof Z == "function" ? G.callback = Z : G === g(w) && T(w), St(I);
        } else T(w);
        G = g(w);
      }
      if (G !== null) var lt = !0;
      else {
        var it = g(O);
        it !== null && n(kt, it.startTime - I), lt = !1;
      }
      return lt;
    } finally {
      G = null, H = F, De = !1;
    }
  }
  var Ia = l;
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    ke || De || (ke = !0, t(bt));
  }, e.unstable_getCurrentPriorityLevel = function() {
    return H;
  }, e.unstable_getFirstCallbackNode = function() {
    return g(w);
  }, e.unstable_next = function(C) {
    switch (H) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = H;
    }
    var F = H;
    H = I;
    try {
      return C();
    } finally {
      H = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = Ia, e.unstable_runWithPriority = function(C, I) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var F = H;
    H = C;
    try {
      return I();
    } finally {
      H = F;
    }
  }, e.unstable_scheduleCallback = function(C, I, F) {
    var V = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? V + F : V) : F = V, C) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = F + Z, C = { id: Me++, callback: I, priorityLevel: C, startTime: F, expirationTime: Z, sortIndex: -1 }, F > V ? (C.sortIndex = F, x(O, C), g(w) === null && C === g(O) && (rt ? r() : rt = !0, n(kt, F - V))) : (C.sortIndex = Z, x(w, C), ke || De || (ke = !0, t(bt))), C;
  }, e.unstable_wrapCallback = function(C) {
    var I = H;
    return function() {
      var F = H;
      H = I;
      try {
        return C.apply(this, arguments);
      } finally {
        H = F;
      }
    };
  };
})(bu);
qu.exports = bu;
var Qa = qu.exports;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr = Q, U = Ou, K = Qa;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!Yr) throw Error(k(227));
var es = /* @__PURE__ */ new Set(), In = {};
function vt(e, t) {
  Vt(e, t), Vt(e + "Capture", t);
}
function Vt(e, t) {
  for (In[e] = t, e = 0; e < t.length; e++) es.add(t[e]);
}
var ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ya = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, wo = Object.prototype.hasOwnProperty, So = {}, ko = {};
function Xa(e) {
  return wo.call(ko, e) ? !0 : wo.call(So, e) ? !1 : Ya.test(e) ? ko[e] = !0 : (So[e] = !0, !1);
}
function Ka(e, t, n, r) {
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
function Ga(e, t, n, r) {
  if (t === null || typeof t > "u" || Ka(e, t, n, r)) return !0;
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
function ie(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var b = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  b[e] = new ie(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  b[t] = new ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  b[e] = new ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  b[e] = new ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  b[e] = new ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  b[e] = new ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  b[e] = new ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  b[e] = new ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  b[e] = new ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xi = /[\-:]([a-z])/g;
function Ei(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    xi,
    Ei
  );
  b[t] = new ie(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(xi, Ei);
  b[t] = new ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(xi, Ei);
  b[t] = new ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  b[e] = new ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  b[e] = new ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ci(e, t, n, r) {
  var l = b.hasOwnProperty(t) ? b[t] : null, i = l !== null ? l.type === 0 : r ? !1 : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
  i || (Ga(t, n, l, r) && (n = null), r || l === null ? Xa(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = Yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mn = 60103, ut = 60106, Ue = 60107, _i = 60108, wn = 60114, Ni = 60109, Pi = 60110, Xr = 60112, Sn = 60113, Er = 60120, Kr = 60115, ji = 60116, Ti = 60121, Li = 60128, ts = 60129, Ii = 60130, Il = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var X = Symbol.for;
  mn = X("react.element"), ut = X("react.portal"), Ue = X("react.fragment"), _i = X("react.strict_mode"), wn = X("react.profiler"), Ni = X("react.provider"), Pi = X("react.context"), Xr = X("react.forward_ref"), Sn = X("react.suspense"), Er = X("react.suspense_list"), Kr = X("react.memo"), ji = X("react.lazy"), Ti = X("react.block"), X("react.scope"), Li = X("react.opaque.id"), ts = X("react.debug_trace_mode"), Ii = X("react.offscreen"), Il = X("react.legacy_hidden");
}
var xo = typeof Symbol == "function" && Symbol.iterator;
function tn(e) {
  return e === null || typeof e != "object" ? null : (e = xo && e[xo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ul;
function hn(e) {
  if (ul === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ul = t && t[1] || "";
  }
  return `
` + ul + e;
}
var sl = !1;
function bn(e, t) {
  if (!e || sl) return "";
  sl = !0;
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
      } catch (s) {
        var r = s;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (s) {
        r = s;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (var l = s.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
      for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
        if (o !== 1 || u !== 1)
          do
            if (o--, u--, 0 > u || l[o] !== i[u]) return `
` + l[o].replace(" at new ", " at ");
          while (1 <= o && 0 <= u);
        break;
      }
    }
  } finally {
    sl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? hn(e) : "";
}
function Za(e) {
  switch (e.tag) {
    case 5:
      return hn(e.type);
    case 16:
      return hn("Lazy");
    case 13:
      return hn("Suspense");
    case 19:
      return hn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = bn(e.type, !1), e;
    case 11:
      return e = bn(e.type.render, !1), e;
    case 22:
      return e = bn(e.type._render, !1), e;
    case 1:
      return e = bn(e.type, !0), e;
    default:
      return "";
  }
}
function Ft(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ue:
      return "Fragment";
    case ut:
      return "Portal";
    case wn:
      return "Profiler";
    case _i:
      return "StrictMode";
    case Sn:
      return "Suspense";
    case Er:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Pi:
      return (e.displayName || "Context") + ".Consumer";
    case Ni:
      return (e._context.displayName || "Context") + ".Provider";
    case Xr:
      var t = e.render;
      return t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case Kr:
      return Ft(e.type);
    case Ti:
      return Ft(e._render);
    case ji:
      t = e._payload, e = e._init;
      try {
        return Ft(e(t));
      } catch {
      }
  }
  return null;
}
function Ze(e) {
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
function ns(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ja(e) {
  var t = ns(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function er(e) {
  e._valueTracker || (e._valueTracker = Ja(e));
}
function rs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ns(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Cr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fl(e, t) {
  var n = t.checked;
  return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Eo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ze(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ls(e, t) {
  t = t.checked, t != null && Ci(e, "checked", t, !1);
}
function zl(e, t) {
  ls(e, t);
  var n = Ze(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ol(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ol(e, t.type, Ze(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Co(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ol(e, t, n) {
  (t !== "number" || Cr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function qa(e) {
  var t = "";
  return Yr.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Ml(e, t) {
  return e = U({ children: void 0 }, t), (t = qa(t.children)) && (e.children = t), e;
}
function zt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ze(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Dl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function _o(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ze(n) };
}
function is(e, t) {
  var n = Ze(t.value), r = Ze(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function No(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var Rl = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function os(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ul(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? os(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var tr, us = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== Rl.svg || "innerHTML" in e) e.innerHTML = t;
  else {
    for (tr = tr || document.createElement("div"), tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = tr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Fn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kn = {
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
}, ba = ["Webkit", "ms", "Moz", "O"];
Object.keys(kn).forEach(function(e) {
  ba.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), kn[t] = kn[e];
  });
});
function ss(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || kn.hasOwnProperty(e) && kn[e] ? ("" + t).trim() : t + "px";
}
function as(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = ss(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var ec = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function $l(e, t) {
  if (t) {
    if (ec[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Al(e, t) {
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
function Fi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Bl = null, Ot = null, Mt = null;
function Po(e) {
  if (e = Kn(e)) {
    if (typeof Bl != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = el(t), Bl(e.stateNode, e.type, t));
  }
}
function cs(e) {
  Ot ? Mt ? Mt.push(e) : Mt = [e] : Ot = e;
}
function fs() {
  if (Ot) {
    var e = Ot, t = Mt;
    if (Mt = Ot = null, Po(e), t) for (e = 0; e < t.length; e++) Po(t[e]);
  }
}
function zi(e, t) {
  return e(t);
}
function ds(e, t, n, r, l) {
  return e(t, n, r, l);
}
function Oi() {
}
var ps = zi, st = !1, al = !1;
function Mi() {
  (Ot !== null || Mt !== null) && (Oi(), fs());
}
function tc(e, t, n) {
  if (al) return e(t, n);
  al = !0;
  try {
    return ps(e, t, n);
  } finally {
    al = !1, Mi();
  }
}
function zn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = el(n);
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
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Vl = !1;
if (ze) try {
  var nn = {};
  Object.defineProperty(nn, "passive", { get: function() {
    Vl = !0;
  } }), window.addEventListener("test", nn, nn), window.removeEventListener("test", nn, nn);
} catch {
  Vl = !1;
}
function nc(e, t, n, r, l, i, o, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (S) {
    this.onError(S);
  }
}
var xn = !1, _r = null, Nr = !1, Wl = null, rc = { onError: function(e) {
  xn = !0, _r = e;
} };
function lc(e, t, n, r, l, i, o, u, s) {
  xn = !1, _r = null, nc.apply(rc, arguments);
}
function ic(e, t, n, r, l, i, o, u, s) {
  if (lc.apply(this, arguments), xn) {
    if (xn) {
      var f = _r;
      xn = !1, _r = null;
    } else throw Error(k(198));
    Nr || (Nr = !0, Wl = f);
  }
}
function gt(e) {
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
function ms(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function jo(e) {
  if (gt(e) !== e) throw Error(k(188));
}
function oc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = gt(e), t === null) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return jo(l), e;
        if (i === r) return jo(l), t;
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          o = !0, n = l, r = i;
          break;
        }
        if (u === r) {
          o = !0, r = l, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            o = !0, n = i, r = l;
            break;
          }
          if (u === r) {
            o = !0, r = i, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function hs(e) {
  if (e = oc(e), !e) return null;
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
function To(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var vs, Di, ys, gs, Hl = !1, xe = [], Ve = null, We = null, He = null, On = /* @__PURE__ */ new Map(), Mn = /* @__PURE__ */ new Map(), rn = [], Lo = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ql(e, t, n, r, l) {
  return { blockedOn: e, domEventName: t, eventSystemFlags: n | 16, nativeEvent: l, targetContainers: [r] };
}
function Io(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ve = null;
      break;
    case "dragenter":
    case "dragleave":
      We = null;
      break;
    case "mouseover":
    case "mouseout":
      He = null;
      break;
    case "pointerover":
    case "pointerout":
      On.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Mn.delete(t.pointerId);
  }
}
function ln(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = Ql(t, n, r, l, i), t !== null && (t = Kn(t), t !== null && Di(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function uc(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Ve = ln(Ve, e, t, n, r, l), !0;
    case "dragenter":
      return We = ln(We, e, t, n, r, l), !0;
    case "mouseover":
      return He = ln(He, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return On.set(i, ln(On.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Mn.set(i, ln(Mn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function sc(e) {
  var t = at(e.target);
  if (t !== null) {
    var n = gt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ms(n), t !== null) {
          e.blockedOn = t, gs(e.lanePriority, function() {
            K.unstable_runWithPriority(e.priority, function() {
              ys(n);
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
function fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ai(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null) return t = Kn(n), t !== null && Di(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Fo(e, t, n) {
  fr(e) && n.delete(t);
}
function ac() {
  for (Hl = !1; 0 < xe.length; ) {
    var e = xe[0];
    if (e.blockedOn !== null) {
      e = Kn(e.blockedOn), e !== null && vs(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ai(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && xe.shift();
  }
  Ve !== null && fr(Ve) && (Ve = null), We !== null && fr(We) && (We = null), He !== null && fr(He) && (He = null), On.forEach(Fo), Mn.forEach(Fo);
}
function on(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Hl || (Hl = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, ac)));
}
function ws(e) {
  function t(l) {
    return on(l, e);
  }
  if (0 < xe.length) {
    on(xe[0], e);
    for (var n = 1; n < xe.length; n++) {
      var r = xe[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ve !== null && on(Ve, e), We !== null && on(We, e), He !== null && on(He, e), On.forEach(t), Mn.forEach(t), n = 0; n < rn.length; n++) r = rn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rn.length && (n = rn[0], n.blockedOn === null); ) sc(n), n.blockedOn === null && rn.shift();
}
function nr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Nt = { animationend: nr("Animation", "AnimationEnd"), animationiteration: nr("Animation", "AnimationIteration"), animationstart: nr("Animation", "AnimationStart"), transitionend: nr("Transition", "TransitionEnd") }, cl = {}, Ss = {};
ze && (Ss = document.createElement("div").style, "AnimationEvent" in window || (delete Nt.animationend.animation, delete Nt.animationiteration.animation, delete Nt.animationstart.animation), "TransitionEvent" in window || delete Nt.transitionend.transition);
function Gr(e) {
  if (cl[e]) return cl[e];
  if (!Nt[e]) return e;
  var t = Nt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ss) return cl[e] = t[n];
  return e;
}
var ks = Gr("animationend"), xs = Gr("animationiteration"), Es = Gr("animationstart"), Cs = Gr("transitionend"), _s = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), cc = [
  "abort",
  "abort",
  ks,
  "animationEnd",
  xs,
  "animationIteration",
  Es,
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
  Cs,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Ui(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n], l = e[n + 1];
    l = "on" + (l[0].toUpperCase() + l.slice(1)), Ri.set(r, t), _s.set(r, l), vt(l, [r]);
  }
}
var fc = K.unstable_now;
fc();
var M = 8;
function Ct(e) {
  if (1 & e) return M = 15, 1;
  if (2 & e) return M = 14, 2;
  if (4 & e) return M = 13, 4;
  var t = 24 & e;
  return t !== 0 ? (M = 12, t) : e & 32 ? (M = 11, 32) : (t = 192 & e, t !== 0 ? (M = 10, t) : e & 256 ? (M = 9, 256) : (t = 3584 & e, t !== 0 ? (M = 8, t) : e & 4096 ? (M = 7, 4096) : (t = 4186112 & e, t !== 0 ? (M = 6, t) : (t = 62914560 & e, t !== 0 ? (M = 5, t) : e & 67108864 ? (M = 4, 67108864) : e & 134217728 ? (M = 3, 134217728) : (t = 805306368 & e, t !== 0 ? (M = 2, t) : 1073741824 & e ? (M = 1, 1073741824) : (M = 8, e))))));
}
function dc(e) {
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
function pc(e) {
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
      throw Error(k(358, e));
  }
}
function Dn(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return M = 0;
  var r = 0, l = 0, i = e.expiredLanes, o = e.suspendedLanes, u = e.pingedLanes;
  if (i !== 0) r = i, l = M = 15;
  else if (i = n & 134217727, i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = Ct(s), l = M) : (u &= i, u !== 0 && (r = Ct(u), l = M));
  } else i = n & ~o, i !== 0 ? (r = Ct(i), l = M) : u !== 0 && (r = Ct(u), l = M);
  if (r === 0) return 0;
  if (r = 31 - Je(r), r = n & ((0 > r ? 0 : 1 << r) << 1) - 1, t !== 0 && t !== r && !(t & o)) {
    if (Ct(t), l <= M) return t;
    M = l;
  }
  if (t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Je(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Ns(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Pr(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return e = _t(24 & ~t), e === 0 ? Pr(10, t) : e;
    case 10:
      return e = _t(192 & ~t), e === 0 ? Pr(8, t) : e;
    case 8:
      return e = _t(3584 & ~t), e === 0 && (e = _t(4186112 & ~t), e === 0 && (e = 512)), e;
    case 2:
      return t = _t(805306368 & ~t), t === 0 && (t = 268435456), t;
  }
  throw Error(k(358, e));
}
function _t(e) {
  return e & -e;
}
function fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zr(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, t = 31 - Je(t), e[t] = n;
}
var Je = Math.clz32 ? Math.clz32 : vc, mc = Math.log, hc = Math.LN2;
function vc(e) {
  return e === 0 ? 32 : 31 - (mc(e) / hc | 0) | 0;
}
var yc = K.unstable_UserBlockingPriority, gc = K.unstable_runWithPriority, dr = !0;
function wc(e, t, n, r) {
  st || Oi();
  var l = $i, i = st;
  st = !0;
  try {
    ds(l, e, t, n, r);
  } finally {
    (st = i) || Mi();
  }
}
function Sc(e, t, n, r) {
  gc(yc, $i.bind(null, e, t, n, r));
}
function $i(e, t, n, r) {
  if (dr) {
    var l;
    if ((l = (t & 4) === 0) && 0 < xe.length && -1 < Lo.indexOf(e)) e = Ql(null, e, t, n, r), xe.push(e);
    else {
      var i = Ai(e, t, n, r);
      if (i === null) l && Io(e, r);
      else {
        if (l) {
          if (-1 < Lo.indexOf(e)) {
            e = Ql(i, e, t, n, r), xe.push(e);
            return;
          }
          if (uc(i, e, t, n, r)) return;
          Io(e, r);
        }
        Us(e, t, r, null, n);
      }
    }
  }
}
function Ai(e, t, n, r) {
  var l = Fi(r);
  if (l = at(l), l !== null) {
    var i = gt(l);
    if (i === null) l = null;
    else {
      var o = i.tag;
      if (o === 13) {
        if (l = ms(i), l !== null) return l;
        l = null;
      } else if (o === 3) {
        if (i.stateNode.hydrate) return i.tag === 3 ? i.stateNode.containerInfo : null;
        l = null;
      } else i !== l && (l = null);
    }
  }
  return Us(e, t, r, l, n), null;
}
var $e = null, Bi = null, pr = null;
function Ps() {
  if (pr) return pr;
  var e, t = Bi, n = t.length, r, l = "value" in $e ? $e.value : $e.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return pr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function mr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function rr() {
  return !0;
}
function zo() {
  return !1;
}
function fe(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? rr : zo, this.isPropagationStopped = zo, this;
  }
  return U(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = rr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = rr);
  }, persist: function() {
  }, isPersistent: rr }), t;
}
var Kt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Vi = fe(Kt), Xn = U({}, Kt, { view: 0, detail: 0 }), kc = fe(Xn), dl, pl, un, Jr = U({}, Xn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== un && (un && e.type === "mousemove" ? (dl = e.screenX - un.screenX, pl = e.screenY - un.screenY) : pl = dl = 0, un = e), dl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : pl;
} }), Oo = fe(Jr), xc = U({}, Jr, { dataTransfer: 0 }), Ec = fe(xc), Cc = U({}, Xn, { relatedTarget: 0 }), ml = fe(Cc), _c = U({}, Kt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Nc = fe(_c), Pc = U({}, Kt, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), jc = fe(Pc), Tc = U({}, Kt, { data: 0 }), Mo = fe(Tc), Lc = {
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
}, Ic = {
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
}, Fc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function zc(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fc[e]) ? !!t[e] : !1;
}
function Wi() {
  return zc;
}
var Oc = U({}, Xn, { key: function(e) {
  if (e.key) {
    var t = Lc[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ic[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wi, charCode: function(e) {
  return e.type === "keypress" ? mr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Mc = fe(Oc), Dc = U({}, Jr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Do = fe(Dc), Rc = U({}, Xn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wi }), Uc = fe(Rc), $c = U({}, Kt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ac = fe($c), Bc = U({}, Jr, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Vc = fe(Bc), Wc = [9, 13, 27, 32], Hi = ze && "CompositionEvent" in window, En = null;
ze && "documentMode" in document && (En = document.documentMode);
var Hc = ze && "TextEvent" in window && !En, js = ze && (!Hi || En && 8 < En && 11 >= En), Ro = " ", Uo = !1;
function Ts(e, t) {
  switch (e) {
    case "keyup":
      return Wc.indexOf(t.keyCode) !== -1;
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
function Ls(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Pt = !1;
function Qc(e, t) {
  switch (e) {
    case "compositionend":
      return Ls(t);
    case "keypress":
      return t.which !== 32 ? null : (Uo = !0, Ro);
    case "textInput":
      return e = t.data, e === Ro && Uo ? null : e;
    default:
      return null;
  }
}
function Yc(e, t) {
  if (Pt) return e === "compositionend" || !Hi && Ts(e, t) ? (e = Ps(), pr = Bi = $e = null, Pt = !1, e) : null;
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
      return js && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Xc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function $o(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Xc[e.type] : t === "textarea";
}
function Is(e, t, n, r) {
  cs(r), t = jr(t, "onChange"), 0 < t.length && (n = new Vi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Cn = null, Rn = null;
function Kc(e) {
  Ms(e, 0);
}
function qr(e) {
  var t = Tt(e);
  if (rs(t)) return e;
}
function Gc(e, t) {
  if (e === "change") return t;
}
var Fs = !1;
if (ze) {
  var hl;
  if (ze) {
    var vl = "oninput" in document;
    if (!vl) {
      var Ao = document.createElement("div");
      Ao.setAttribute("oninput", "return;"), vl = typeof Ao.oninput == "function";
    }
    hl = vl;
  } else hl = !1;
  Fs = hl && (!document.documentMode || 9 < document.documentMode);
}
function Bo() {
  Cn && (Cn.detachEvent("onpropertychange", zs), Rn = Cn = null);
}
function zs(e) {
  if (e.propertyName === "value" && qr(Rn)) {
    var t = [];
    if (Is(t, Rn, e, Fi(e)), e = Kc, st) e(t);
    else {
      st = !0;
      try {
        zi(e, t);
      } finally {
        st = !1, Mi();
      }
    }
  }
}
function Zc(e, t, n) {
  e === "focusin" ? (Bo(), Cn = t, Rn = n, Cn.attachEvent("onpropertychange", zs)) : e === "focusout" && Bo();
}
function Jc(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return qr(Rn);
}
function qc(e, t) {
  if (e === "click") return qr(t);
}
function bc(e, t) {
  if (e === "input" || e === "change") return qr(t);
}
function ef(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var de = typeof Object.is == "function" ? Object.is : ef, tf = Object.prototype.hasOwnProperty;
function Un(e, t) {
  if (de(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) if (!tf.call(t, n[r]) || !de(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function Vo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wo(e, t) {
  var n = Vo(e);
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
    n = Vo(n);
  }
}
function Os(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Os(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ho() {
  for (var e = window, t = Cr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Cr(e.document);
  }
  return t;
}
function Yl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
var nf = ze && "documentMode" in document && 11 >= document.documentMode, jt = null, Xl = null, _n = null, Kl = !1;
function Qo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Kl || jt == null || jt !== Cr(r) || (r = jt, "selectionStart" in r && Yl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _n && Un(_n, r) || (_n = r, r = jr(Xl, "onSelect"), 0 < r.length && (t = new Vi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = jt)));
}
Ui(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0
);
Ui("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Ui(cc, 2);
for (var Yo = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), yl = 0; yl < Yo.length; yl++) Ri.set(Yo[yl], 0);
Vt("onMouseEnter", ["mouseout", "mouseover"]);
Vt("onMouseLeave", ["mouseout", "mouseover"]);
Vt("onPointerEnter", ["pointerout", "pointerover"]);
Vt("onPointerLeave", ["pointerout", "pointerover"]);
vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rf = new Set("cancel close invalid load scroll toggle".split(" ").concat(vn));
function Xo(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ic(r, t, void 0, e), e.currentTarget = null;
}
function Ms(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, f = u.currentTarget;
        if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Xo(l, u, f), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, f = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Xo(l, u, f), i = s;
      }
    }
  }
  if (Nr) throw e = Wl, Nr = !1, Wl = null, e;
}
function D(e, t) {
  var n = As(t), r = e + "__bubble";
  n.has(r) || (Rs(t, e, 2, !1), n.add(r));
}
var Ko = "_reactListening" + Math.random().toString(36).slice(2);
function Ds(e) {
  e[Ko] || (e[Ko] = !0, es.forEach(function(t) {
    rf.has(t) || Go(t, !1, e, null), Go(t, !0, e, null);
  }));
}
function Go(e, t, n, r) {
  var l = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, i = n;
  e === "selectionchange" && n.nodeType !== 9 && (i = n.ownerDocument);
  var o = As(i), u = e + "__" + (t ? "capture" : "bubble");
  o.has(u) || (t && (l |= 4), Rs(i, e, l, t), o.add(u));
}
function Rs(e, t, n, r) {
  var l = Ri.get(t);
  switch (l === void 0 ? 2 : l) {
    case 0:
      l = wc;
      break;
    case 1:
      l = Sc;
      break;
    default:
      l = $i;
  }
  n = l.bind(null, t, n, e), l = void 0, !Vl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Us(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = at(u), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  tc(function() {
    var f = i, S = Fi(n), j = [];
    e: {
      var h = _s.get(e);
      if (h !== void 0) {
        var E = Vi, N = e;
        switch (e) {
          case "keypress":
            if (mr(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = Mc;
            break;
          case "focusin":
            N = "focus", E = ml;
            break;
          case "focusout":
            N = "blur", E = ml;
            break;
          case "beforeblur":
          case "afterblur":
            E = ml;
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
            E = Oo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = Ec;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Uc;
            break;
          case ks:
          case xs:
          case Es:
            E = Nc;
            break;
          case Cs:
            E = Ac;
            break;
          case "scroll":
            E = kc;
            break;
          case "wheel":
            E = Vc;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = jc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Do;
        }
        var P = (t & 4) !== 0, d = !P && e === "scroll", a = P ? h !== null ? h + "Capture" : null : h;
        P = [];
        for (var c = f, v; c !== null; ) {
          v = c;
          var p = v.stateNode;
          if (v.tag === 5 && p !== null && (v = p, a !== null && (p = zn(c, a), p != null && P.push($n(c, p, v)))), d) break;
          c = c.return;
        }
        0 < P.length && (h = new E(h, N, null, n, S), j.push({ event: h, listeners: P }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", h && !(t & 16) && (N = n.relatedTarget || n.fromElement) && (at(N) || N[Gt])) break e;
        if ((E || h) && (h = S.window === S ? S : (h = S.ownerDocument) ? h.defaultView || h.parentWindow : window, E ? (N = n.relatedTarget || n.toElement, E = f, N = N ? at(N) : null, N !== null && (d = gt(N), N !== d || N.tag !== 5 && N.tag !== 6) && (N = null)) : (E = null, N = f), E !== N)) {
          if (P = Oo, p = "onMouseLeave", a = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (P = Do, p = "onPointerLeave", a = "onPointerEnter", c = "pointer"), d = E == null ? h : Tt(E), v = N == null ? h : Tt(N), h = new P(p, c + "leave", E, n, S), h.target = d, h.relatedTarget = v, p = null, at(S) === f && (P = new P(a, c + "enter", N, n, S), P.target = v, P.relatedTarget = d, p = P), d = p, E && N) t: {
            for (P = E, a = N, c = 0, v = P; v; v = Et(v)) c++;
            for (v = 0, p = a; p; p = Et(p)) v++;
            for (; 0 < c - v; ) P = Et(P), c--;
            for (; 0 < v - c; ) a = Et(a), v--;
            for (; c--; ) {
              if (P === a || a !== null && P === a.alternate) break t;
              P = Et(P), a = Et(a);
            }
            P = null;
          }
          else P = null;
          E !== null && Zo(j, h, E, P, !1), N !== null && d !== null && Zo(j, d, N, P, !0);
        }
      }
      e: {
        if (h = f ? Tt(f) : window, E = h.nodeName && h.nodeName.toLowerCase(), E === "select" || E === "input" && h.type === "file") var x = Gc;
        else if ($o(h)) if (Fs) x = bc;
        else {
          x = Jc;
          var g = Zc;
        }
        else (E = h.nodeName) && E.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (x = qc);
        if (x && (x = x(e, f))) {
          Is(j, x, n, S);
          break e;
        }
        g && g(e, h, f), e === "focusout" && (g = h._wrapperState) && g.controlled && h.type === "number" && Ol(h, "number", h.value);
      }
      switch (g = f ? Tt(f) : window, e) {
        case "focusin":
          ($o(g) || g.contentEditable === "true") && (jt = g, Xl = f, _n = null);
          break;
        case "focusout":
          _n = Xl = jt = null;
          break;
        case "mousedown":
          Kl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Kl = !1, Qo(j, n, S);
          break;
        case "selectionchange":
          if (nf) break;
        case "keydown":
        case "keyup":
          Qo(j, n, S);
      }
      var T;
      if (Hi) e: {
        switch (e) {
          case "compositionstart":
            var y = "onCompositionStart";
            break e;
          case "compositionend":
            y = "onCompositionEnd";
            break e;
          case "compositionupdate":
            y = "onCompositionUpdate";
            break e;
        }
        y = void 0;
      }
      else Pt ? Ts(e, n) && (y = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
      y && (js && n.locale !== "ko" && (Pt || y !== "onCompositionStart" ? y === "onCompositionEnd" && Pt && (T = Ps()) : ($e = S, Bi = "value" in $e ? $e.value : $e.textContent, Pt = !0)), g = jr(f, y), 0 < g.length && (y = new Mo(y, e, null, n, S), j.push({ event: y, listeners: g }), T ? y.data = T : (T = Ls(n), T !== null && (y.data = T)))), (T = Hc ? Qc(e, n) : Yc(e, n)) && (f = jr(f, "onBeforeInput"), 0 < f.length && (S = new Mo(
        "onBeforeInput",
        "beforeinput",
        null,
        n,
        S
      ), j.push({ event: S, listeners: f }), S.data = T));
    }
    Ms(j, t);
  });
}
function $n(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function jr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = zn(e, n), i != null && r.unshift($n(e, i, l)), i = zn(e, t), i != null && r.push($n(e, i, l))), e = e.return;
  }
  return r;
}
function Et(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zo(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, l ? (s = zn(n, i), s != null && o.unshift($n(n, s, u))) : l || (s = zn(n, i), s != null && o.push($n(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
function Tr() {
}
var gl = null, wl = null;
function $s(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function Gl(e, t) {
  return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Jo = typeof setTimeout == "function" ? setTimeout : void 0, lf = typeof clearTimeout == "function" ? clearTimeout : void 0;
function Qi(e) {
  e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
}
function Dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function qo(e) {
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
var Sl = 0;
function of(e) {
  return { $$typeof: Li, toString: e, valueOf: e };
}
var br = Math.random().toString(36).slice(2), Ae = "__reactFiber$" + br, Lr = "__reactProps$" + br, Gt = "__reactContainer$" + br, bo = "__reactEvents$" + br;
function at(e) {
  var t = e[Ae];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Gt] || n[Ae]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = qo(e); e !== null; ) {
        if (n = e[Ae]) return n;
        e = qo(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Kn(e) {
  return e = e[Ae] || e[Gt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Tt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function el(e) {
  return e[Lr] || null;
}
function As(e) {
  var t = e[bo];
  return t === void 0 && (t = e[bo] = /* @__PURE__ */ new Set()), t;
}
var Zl = [], Lt = -1;
function tt(e) {
  return { current: e };
}
function R(e) {
  0 > Lt || (e.current = Zl[Lt], Zl[Lt] = null, Lt--);
}
function B(e, t) {
  Lt++, Zl[Lt] = e.current, e.current = t;
}
var qe = {}, re = tt(qe), se = tt(!1), pt = qe;
function Wt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qe;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ae(e) {
  return e = e.childContextTypes, e != null;
}
function Ir() {
  R(se), R(re);
}
function eu(e, t, n) {
  if (re.current !== qe) throw Error(k(168));
  B(re, t), B(se, n);
}
function Bs(e, t, n) {
  var r = e.stateNode;
  if (e = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in e)) throw Error(k(108, Ft(t) || "Unknown", l));
  return U({}, n, r);
}
function hr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qe, pt = re.current, B(re, e), B(se, se.current), !0;
}
function tu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = Bs(e, t, pt), r.__reactInternalMemoizedMergedChildContext = e, R(se), R(re), B(re, e)) : R(se), B(se, n);
}
var Yi = null, dt = null, uf = K.unstable_runWithPriority, Xi = K.unstable_scheduleCallback, Jl = K.unstable_cancelCallback, sf = K.unstable_shouldYield, nu = K.unstable_requestPaint, ql = K.unstable_now, af = K.unstable_getCurrentPriorityLevel, tl = K.unstable_ImmediatePriority, Vs = K.unstable_UserBlockingPriority, Ws = K.unstable_NormalPriority, Hs = K.unstable_LowPriority, Qs = K.unstable_IdlePriority, kl = {}, cf = nu !== void 0 ? nu : function() {
}, je = null, vr = null, xl = !1, ru = ql(), te = 1e4 > ru ? ql : function() {
  return ql() - ru;
};
function Ht() {
  switch (af()) {
    case tl:
      return 99;
    case Vs:
      return 98;
    case Ws:
      return 97;
    case Hs:
      return 96;
    case Qs:
      return 95;
    default:
      throw Error(k(332));
  }
}
function Ys(e) {
  switch (e) {
    case 99:
      return tl;
    case 98:
      return Vs;
    case 97:
      return Ws;
    case 96:
      return Hs;
    case 95:
      return Qs;
    default:
      throw Error(k(332));
  }
}
function mt(e, t) {
  return e = Ys(e), uf(e, t);
}
function An(e, t, n) {
  return e = Ys(e), Xi(e, t, n);
}
function Pe() {
  if (vr !== null) {
    var e = vr;
    vr = null, Jl(e);
  }
  Xs();
}
function Xs() {
  if (!xl && je !== null) {
    xl = !0;
    var e = 0;
    try {
      var t = je;
      mt(99, function() {
        for (; e < t.length; e++) {
          var n = t[e];
          do
            n = n(!0);
          while (n !== null);
        }
      }), je = null;
    } catch (n) {
      throw je !== null && (je = je.slice(e + 1)), Xi(tl, Pe), n;
    } finally {
      xl = !1;
    }
  }
}
var ff = yt.ReactCurrentBatchConfig;
function we(e, t) {
  if (e && e.defaultProps) {
    t = U({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Fr = tt(null), zr = null, It = null, Or = null;
function Ki() {
  Or = It = zr = null;
}
function Gi(e) {
  var t = Fr.current;
  R(Fr), e.type._context._currentValue = t;
}
function Ks(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else e.childLanes |= t, n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function Rt(e, t) {
  zr = e, Or = It = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function he(e, t) {
  if (Or !== e && t !== !1 && t !== 0)
    if ((typeof t != "number" || t === 1073741823) && (Or = e, t = 1073741823), t = { context: e, observedBits: t, next: null }, It === null) {
      if (zr === null) throw Error(k(308));
      It = t, zr.dependencies = { lanes: 0, firstContext: t, responders: null };
    } else It = It.next = t;
  return e._currentValue;
}
var Re = !1;
function Zi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function Gs(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Qe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ye(e, t) {
  if (e = e.updateQueue, e !== null) {
    e = e.shared;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
}
function lu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = o : i = i.next = o, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Bn(e, t, n, r) {
  var l = e.updateQueue;
  Re = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, o === null ? i = f : o.next = f, o = s;
    var S = e.alternate;
    if (S !== null) {
      S = S.updateQueue;
      var j = S.lastBaseUpdate;
      j !== o && (j === null ? S.firstBaseUpdate = f : j.next = f, S.lastBaseUpdate = s);
    }
  }
  if (i !== null) {
    j = l.baseState, o = 0, S = f = s = null;
    do {
      u = i.lane;
      var h = i.eventTime;
      if ((r & u) === u) {
        S !== null && (S = S.next = {
          eventTime: h,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var E = e, N = i;
          switch (u = t, h = n, N.tag) {
            case 1:
              if (E = N.payload, typeof E == "function") {
                j = E.call(h, j, u);
                break e;
              }
              j = E;
              break e;
            case 3:
              E.flags = E.flags & -4097 | 64;
            case 0:
              if (E = N.payload, u = typeof E == "function" ? E.call(h, j, u) : E, u == null) break e;
              j = U({}, j, u);
              break e;
            case 2:
              Re = !0;
          }
        }
        i.callback !== null && (e.flags |= 32, u = l.effects, u === null ? l.effects = [i] : u.push(i));
      } else h = { eventTime: h, lane: u, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, S === null ? (f = S = h, s = j) : S = S.next = h, o |= u;
      if (i = i.next, i === null) {
        if (u = l.shared.pending, u === null) break;
        i = u.next, u.next = null, l.lastBaseUpdate = u, l.shared.pending = null;
      }
    } while (!0);
    S === null && (s = j), l.baseState = s, l.firstBaseUpdate = f, l.lastBaseUpdate = S, Zn |= o, e.lanes = o, e.memoizedState = j;
  }
}
function iu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
      l.call(r);
    }
  }
}
var Zs = new Yr.Component().refs;
function Mr(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var nl = { isMounted: function(e) {
  return (e = e._reactInternals) ? gt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = Xe(e), i = Qe(r, l);
  i.payload = t, n != null && (i.callback = n), Ye(e, i), Ke(e, l, r);
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = Xe(e), i = Qe(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), Ye(e, i), Ke(e, l, r);
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ce(), r = Xe(e), l = Qe(n, r);
  l.tag = 2, t != null && (l.callback = t), Ye(e, l), Ke(e, r, n);
} };
function ou(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Un(n, r) || !Un(l, i) : !0;
}
function Js(e, t, n) {
  var r = !1, l = qe, i = t.contextType;
  return typeof i == "object" && i !== null ? i = he(i) : (l = ae(t) ? pt : re.current, r = t.contextTypes, i = (r = r != null) ? Wt(e, l) : qe), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = nl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function uu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nl.enqueueReplaceState(t, t.state, null);
}
function bl(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = Zs, Zi(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = he(i) : (i = ae(t) ? pt : re.current, l.context = Wt(e, i)), Bn(e, n, l, r), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Mr(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && nl.enqueueReplaceState(l, l.state, null), Bn(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4);
}
var lr = Array.isArray;
function sn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
        var o = r.refs;
        o === Zs && (o = r.refs = {}), i === null ? delete o[l] : o[l] = i;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function ir(e, t) {
  if (e.type !== "textarea") throw Error(k(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t));
}
function qs(e) {
  function t(d, a) {
    if (e) {
      var c = d.lastEffect;
      c !== null ? (c.nextEffect = a, d.lastEffect = a) : d.firstEffect = d.lastEffect = a, a.nextEffect = null, a.flags = 8;
    }
  }
  function n(d, a) {
    if (!e) return null;
    for (; a !== null; ) t(d, a), a = a.sibling;
    return null;
  }
  function r(d, a) {
    for (d = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? d.set(a.key, a) : d.set(a.index, a), a = a.sibling;
    return d;
  }
  function l(d, a) {
    return d = et(d, a), d.index = 0, d.sibling = null, d;
  }
  function i(d, a, c) {
    return d.index = c, e ? (c = d.alternate, c !== null ? (c = c.index, c < a ? (d.flags = 2, a) : c) : (d.flags = 2, a)) : a;
  }
  function o(d) {
    return e && d.alternate === null && (d.flags = 2), d;
  }
  function u(d, a, c, v) {
    return a === null || a.tag !== 6 ? (a = Pl(c, d.mode, v), a.return = d, a) : (a = l(a, c), a.return = d, a);
  }
  function s(d, a, c, v) {
    return a !== null && a.elementType === c.type ? (v = l(a, c.props), v.ref = sn(d, a, c), v.return = d, v) : (v = Sr(c.type, c.key, c.props, null, d.mode, v), v.ref = sn(d, a, c), v.return = d, v);
  }
  function f(d, a, c, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== c.containerInfo || a.stateNode.implementation !== c.implementation ? (a = jl(c, d.mode, v), a.return = d, a) : (a = l(a, c.children || []), a.return = d, a);
  }
  function S(d, a, c, v, p) {
    return a === null || a.tag !== 7 ? (a = Bt(c, d.mode, v, p), a.return = d, a) : (a = l(a, c), a.return = d, a);
  }
  function j(d, a, c) {
    if (typeof a == "string" || typeof a == "number") return a = Pl("" + a, d.mode, c), a.return = d, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case mn:
          return c = Sr(a.type, a.key, a.props, null, d.mode, c), c.ref = sn(d, null, a), c.return = d, c;
        case ut:
          return a = jl(a, d.mode, c), a.return = d, a;
      }
      if (lr(a) || tn(a)) return a = Bt(
        a,
        d.mode,
        c,
        null
      ), a.return = d, a;
      ir(d, a);
    }
    return null;
  }
  function h(d, a, c, v) {
    var p = a !== null ? a.key : null;
    if (typeof c == "string" || typeof c == "number") return p !== null ? null : u(d, a, "" + c, v);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case mn:
          return c.key === p ? c.type === Ue ? S(d, a, c.props.children, v, p) : s(d, a, c, v) : null;
        case ut:
          return c.key === p ? f(d, a, c, v) : null;
      }
      if (lr(c) || tn(c)) return p !== null ? null : S(d, a, c, v, null);
      ir(d, c);
    }
    return null;
  }
  function E(d, a, c, v, p) {
    if (typeof v == "string" || typeof v == "number") return d = d.get(c) || null, u(a, d, "" + v, p);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case mn:
          return d = d.get(v.key === null ? c : v.key) || null, v.type === Ue ? S(a, d, v.props.children, p, v.key) : s(a, d, v, p);
        case ut:
          return d = d.get(v.key === null ? c : v.key) || null, f(a, d, v, p);
      }
      if (lr(v) || tn(v)) return d = d.get(c) || null, S(a, d, v, p, null);
      ir(a, v);
    }
    return null;
  }
  function N(d, a, c, v) {
    for (var p = null, x = null, g = a, T = a = 0, y = null; g !== null && T < c.length; T++) {
      g.index > T ? (y = g, g = null) : y = g.sibling;
      var w = h(d, g, c[T], v);
      if (w === null) {
        g === null && (g = y);
        break;
      }
      e && g && w.alternate === null && t(d, g), a = i(w, a, T), x === null ? p = w : x.sibling = w, x = w, g = y;
    }
    if (T === c.length) return n(d, g), p;
    if (g === null) {
      for (; T < c.length; T++) g = j(d, c[T], v), g !== null && (a = i(g, a, T), x === null ? p = g : x.sibling = g, x = g);
      return p;
    }
    for (g = r(d, g); T < c.length; T++) y = E(g, d, T, c[T], v), y !== null && (e && y.alternate !== null && g.delete(y.key === null ? T : y.key), a = i(y, a, T), x === null ? p = y : x.sibling = y, x = y);
    return e && g.forEach(function(O) {
      return t(d, O);
    }), p;
  }
  function P(d, a, c, v) {
    var p = tn(c);
    if (typeof p != "function") throw Error(k(150));
    if (c = p.call(c), c == null) throw Error(k(151));
    for (var x = p = null, g = a, T = a = 0, y = null, w = c.next(); g !== null && !w.done; T++, w = c.next()) {
      g.index > T ? (y = g, g = null) : y = g.sibling;
      var O = h(d, g, w.value, v);
      if (O === null) {
        g === null && (g = y);
        break;
      }
      e && g && O.alternate === null && t(d, g), a = i(O, a, T), x === null ? p = O : x.sibling = O, x = O, g = y;
    }
    if (w.done) return n(d, g), p;
    if (g === null) {
      for (; !w.done; T++, w = c.next()) w = j(d, w.value, v), w !== null && (a = i(w, a, T), x === null ? p = w : x.sibling = w, x = w);
      return p;
    }
    for (g = r(d, g); !w.done; T++, w = c.next()) w = E(g, d, T, w.value, v), w !== null && (e && w.alternate !== null && g.delete(w.key === null ? T : w.key), a = i(w, a, T), x === null ? p = w : x.sibling = w, x = w);
    return e && g.forEach(function(Me) {
      return t(d, Me);
    }), p;
  }
  return function(d, a, c, v) {
    var p = typeof c == "object" && c !== null && c.type === Ue && c.key === null;
    p && (c = c.props.children);
    var x = typeof c == "object" && c !== null;
    if (x) switch (c.$$typeof) {
      case mn:
        e: {
          for (x = c.key, p = a; p !== null; ) {
            if (p.key === x) {
              switch (p.tag) {
                case 7:
                  if (c.type === Ue) {
                    n(d, p.sibling), a = l(p, c.props.children), a.return = d, d = a;
                    break e;
                  }
                  break;
                default:
                  if (p.elementType === c.type) {
                    n(d, p.sibling), a = l(p, c.props), a.ref = sn(d, p, c), a.return = d, d = a;
                    break e;
                  }
              }
              n(d, p);
              break;
            } else t(d, p);
            p = p.sibling;
          }
          c.type === Ue ? (a = Bt(c.props.children, d.mode, v, c.key), a.return = d, d = a) : (v = Sr(c.type, c.key, c.props, null, d.mode, v), v.ref = sn(d, a, c), v.return = d, d = v);
        }
        return o(d);
      case ut:
        e: {
          for (p = c.key; a !== null; ) {
            if (a.key === p) if (a.tag === 4 && a.stateNode.containerInfo === c.containerInfo && a.stateNode.implementation === c.implementation) {
              n(d, a.sibling), a = l(a, c.children || []), a.return = d, d = a;
              break e;
            } else {
              n(d, a);
              break;
            }
            else t(d, a);
            a = a.sibling;
          }
          a = jl(c, d.mode, v), a.return = d, d = a;
        }
        return o(d);
    }
    if (typeof c == "string" || typeof c == "number") return c = "" + c, a !== null && a.tag === 6 ? (n(d, a.sibling), a = l(a, c), a.return = d, d = a) : (n(d, a), a = Pl(c, d.mode, v), a.return = d, d = a), o(d);
    if (lr(c)) return N(d, a, c, v);
    if (tn(c)) return P(d, a, c, v);
    if (x && ir(d, c), typeof c > "u" && !p) switch (d.tag) {
      case 1:
      case 22:
      case 0:
      case 11:
      case 15:
        throw Error(k(152, Ft(d.type) || "Component"));
    }
    return n(d, a);
  };
}
var Dr = qs(!0), bs = qs(!1), Gn = {}, _e = tt(Gn), Vn = tt(Gn), Wn = tt(Gn);
function ct(e) {
  if (e === Gn) throw Error(k(174));
  return e;
}
function ei(e, t) {
  switch (B(Wn, t), B(Vn, e), B(_e, Gn), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ul(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ul(t, e);
  }
  R(_e), B(_e, t);
}
function Qt() {
  R(_e), R(Vn), R(Wn);
}
function su(e) {
  ct(Wn.current);
  var t = ct(_e.current), n = Ul(t, e.type);
  t !== n && (B(Vn, e), B(_e, n));
}
function Ji(e) {
  Vn.current === e && (R(_e), R(Vn));
}
var A = tt(0);
function Rr(e) {
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
var Le = null, Be = null, Ne = !1;
function ea(e, t) {
  var n = pe(5, null, null, 0);
  n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
}
function au(e, t) {
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
function ti(e) {
  if (Ne) {
    var t = Be;
    if (t) {
      var n = t;
      if (!au(e, t)) {
        if (t = Dt(n.nextSibling), !t || !au(e, t)) {
          e.flags = e.flags & -1025 | 2, Ne = !1, Le = e;
          return;
        }
        ea(Le, n);
      }
      Le = e, Be = Dt(t.firstChild);
    } else e.flags = e.flags & -1025 | 2, Ne = !1, Le = e;
  }
}
function cu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Le = e;
}
function or(e) {
  if (e !== Le) return !1;
  if (!Ne) return cu(e), Ne = !0, !1;
  var t = e.type;
  if (e.tag !== 5 || t !== "head" && t !== "body" && !Gl(t, e.memoizedProps)) for (t = Be; t; ) ea(e, t), t = Dt(t.nextSibling);
  if (cu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = Le ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function El() {
  Be = Le = null, Ne = !1;
}
var Ut = [];
function qi() {
  for (var e = 0; e < Ut.length; e++) Ut[e]._workInProgressVersionPrimary = null;
  Ut.length = 0;
}
var Nn = yt.ReactCurrentDispatcher, me = yt.ReactCurrentBatchConfig, Hn = 0, W = null, ee = null, J = null, Ur = !1, Pn = !1;
function oe() {
  throw Error(k(321));
}
function bi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!de(e[n], t[n])) return !1;
  return !0;
}
function eo(e, t, n, r, l, i) {
  if (Hn = i, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Nn.current = e === null || e.memoizedState === null ? pf : mf, e = n(r, l), Pn) {
    i = 0;
    do {
      if (Pn = !1, !(25 > i)) throw Error(k(301));
      i += 1, J = ee = null, t.updateQueue = null, Nn.current = hf, e = n(r, l);
    } while (Pn);
  }
  if (Nn.current = Vr, t = ee !== null && ee.next !== null, Hn = 0, J = ee = W = null, Ur = !1, t) throw Error(k(300));
  return e;
}
function ft() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? W.memoizedState = J = e : J = J.next = e, J;
}
function wt() {
  if (ee === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = J === null ? W.memoizedState : J.next;
  if (t !== null) J = t, ee = e;
  else {
    if (e === null) throw Error(k(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, J === null ? W.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function Ee(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function an(e) {
  var t = wt(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ee, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    l = l.next, r = r.baseState;
    var u = o = i = null, s = l;
    do {
      var f = s.lane;
      if ((Hn & f) === f) u !== null && (u = u.next = { lane: 0, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
      else {
        var S = {
          lane: f,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null
        };
        u === null ? (o = u = S, i = r) : u = u.next = S, W.lanes |= f, Zn |= f;
      }
      s = s.next;
    } while (s !== null && s !== l);
    u === null ? i = r : u.next = o, de(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  return [t.memoizedState, n.dispatch];
}
function cn(e) {
  var t = wt(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    de(i, t.memoizedState) || (Se = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function fu(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var l = t._workInProgressVersionPrimary;
  if (l !== null ? e = l === r : (e = e.mutableReadLanes, (e = (Hn & e) === e) && (t._workInProgressVersionPrimary = r, Ut.push(t))), e) return n(t._source);
  throw Ut.push(t), Error(k(350));
}
function ta(e, t, n, r) {
  var l = le;
  if (l === null) throw Error(k(349));
  var i = t._getVersion, o = i(t._source), u = Nn.current, s = u.useState(function() {
    return fu(l, t, n);
  }), f = s[1], S = s[0];
  s = J;
  var j = e.memoizedState, h = j.refs, E = h.getSnapshot, N = j.source;
  j = j.subscribe;
  var P = W;
  return e.memoizedState = { refs: h, source: t, subscribe: r }, u.useEffect(function() {
    h.getSnapshot = n, h.setSnapshot = f;
    var d = i(t._source);
    if (!de(o, d)) {
      d = n(t._source), de(S, d) || (f(d), d = Xe(P), l.mutableReadLanes |= d & l.pendingLanes), d = l.mutableReadLanes, l.entangledLanes |= d;
      for (var a = l.entanglements, c = d; 0 < c; ) {
        var v = 31 - Je(c), p = 1 << v;
        a[v] |= d, c &= ~p;
      }
    }
  }, [n, t, r]), u.useEffect(function() {
    return r(t._source, function() {
      var d = h.getSnapshot, a = h.setSnapshot;
      try {
        a(d(t._source));
        var c = Xe(P);
        l.mutableReadLanes |= c & l.pendingLanes;
      } catch (v) {
        a(function() {
          throw v;
        });
      }
    });
  }, [t, r]), de(E, n) && de(N, t) && de(j, r) || (e = { pending: null, dispatch: null, lastRenderedReducer: Ee, lastRenderedState: S }, e.dispatch = f = ro.bind(null, W, e), s.queue = e, s.baseQueue = null, S = fu(l, t, n), s.memoizedState = s.baseState = S), S;
}
function na(e, t, n) {
  var r = wt();
  return ta(r, e, t, n);
}
function fn(e) {
  var t = ft();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: Ee, lastRenderedState: e }, e = e.dispatch = ro.bind(null, W, e), [t.memoizedState, e];
}
function $r(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = W.updateQueue, t === null ? (t = { lastEffect: null }, W.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function du(e) {
  var t = ft();
  return e = { current: e }, t.memoizedState = e;
}
function Ar() {
  return wt().memoizedState;
}
function ni(e, t, n, r) {
  var l = ft();
  W.flags |= e, l.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r);
}
function to(e, t, n, r) {
  var l = wt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ee !== null) {
    var o = ee.memoizedState;
    if (i = o.destroy, r !== null && bi(r, o.deps)) {
      $r(t, n, i, r);
      return;
    }
  }
  W.flags |= e, l.memoizedState = $r(1 | t, n, i, r);
}
function pu(e, t) {
  return ni(516, 4, e, t);
}
function Br(e, t) {
  return to(516, 4, e, t);
}
function ra(e, t) {
  return to(4, 2, e, t);
}
function la(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function ia(e, t, n) {
  return n = n != null ? n.concat([e]) : null, to(4, 2, la.bind(null, t, e), n);
}
function no() {
}
function oa(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ua(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function df(e, t) {
  var n = Ht();
  mt(98 > n ? 98 : n, function() {
    e(!0);
  }), mt(97 < n ? 97 : n, function() {
    var r = me.transition;
    me.transition = 1;
    try {
      e(!1), t();
    } finally {
      me.transition = r;
    }
  });
}
function ro(e, t, n) {
  var r = ce(), l = Xe(e), i = { lane: l, action: n, eagerReducer: null, eagerState: null, next: null }, o = t.pending;
  if (o === null ? i.next = i : (i.next = o.next, o.next = i), t.pending = i, o = e.alternate, e === W || o !== null && o === W) Pn = Ur = !0;
  else {
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var u = t.lastRenderedState, s = o(u, n);
      if (i.eagerReducer = o, i.eagerState = s, de(s, u)) return;
    } catch {
    } finally {
    }
    Ke(e, l, r);
  }
}
var Vr = { readContext: he, useCallback: oe, useContext: oe, useEffect: oe, useImperativeHandle: oe, useLayoutEffect: oe, useMemo: oe, useReducer: oe, useRef: oe, useState: oe, useDebugValue: oe, useDeferredValue: oe, useTransition: oe, useMutableSource: oe, useOpaqueIdentifier: oe, unstable_isNewReconciler: !1 }, pf = { readContext: he, useCallback: function(e, t) {
  return ft().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: he, useEffect: pu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ni(4, 2, la.bind(
    null,
    t,
    e
  ), n);
}, useLayoutEffect: function(e, t) {
  return ni(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ft();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ft();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, e = e.dispatch = ro.bind(null, W, e), [r.memoizedState, e];
}, useRef: du, useState: fn, useDebugValue: no, useDeferredValue: function(e) {
  var t = fn(e), n = t[0], r = t[1];
  return pu(function() {
    var l = me.transition;
    me.transition = 1;
    try {
      r(e);
    } finally {
      me.transition = l;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = fn(!1), t = e[0];
  return e = df.bind(null, e[1]), du(e), [e, t];
}, useMutableSource: function(e, t, n) {
  var r = ft();
  return r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }, ta(r, e, t, n);
}, useOpaqueIdentifier: function() {
  if (Ne) {
    var e = !1, t = of(function() {
      throw e || (e = !0, n("r:" + (Sl++).toString(36))), Error(k(355));
    }), n = fn(t)[1];
    return !(W.mode & 2) && (W.flags |= 516, $r(
      5,
      function() {
        n("r:" + (Sl++).toString(36));
      },
      void 0,
      null
    )), t;
  }
  return t = "r:" + (Sl++).toString(36), fn(t), t;
}, unstable_isNewReconciler: !1 }, mf = { readContext: he, useCallback: oa, useContext: he, useEffect: Br, useImperativeHandle: ia, useLayoutEffect: ra, useMemo: ua, useReducer: an, useRef: Ar, useState: function() {
  return an(Ee);
}, useDebugValue: no, useDeferredValue: function(e) {
  var t = an(Ee), n = t[0], r = t[1];
  return Br(function() {
    var l = me.transition;
    me.transition = 1;
    try {
      r(e);
    } finally {
      me.transition = l;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = an(Ee)[0];
  return [
    Ar().current,
    e
  ];
}, useMutableSource: na, useOpaqueIdentifier: function() {
  return an(Ee)[0];
}, unstable_isNewReconciler: !1 }, hf = { readContext: he, useCallback: oa, useContext: he, useEffect: Br, useImperativeHandle: ia, useLayoutEffect: ra, useMemo: ua, useReducer: cn, useRef: Ar, useState: function() {
  return cn(Ee);
}, useDebugValue: no, useDeferredValue: function(e) {
  var t = cn(Ee), n = t[0], r = t[1];
  return Br(function() {
    var l = me.transition;
    me.transition = 1;
    try {
      r(e);
    } finally {
      me.transition = l;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = cn(Ee)[0];
  return [
    Ar().current,
    e
  ];
}, useMutableSource: na, useOpaqueIdentifier: function() {
  return cn(Ee)[0];
}, unstable_isNewReconciler: !1 }, vf = yt.ReactCurrentOwner, Se = !1;
function ue(e, t, n, r) {
  t.child = e === null ? bs(t, null, n, r) : Dr(t, e.child, n, r);
}
function mu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return Rt(t, l), r = eo(e, t, n, r, i, l), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~l, Ie(e, t, l)) : (t.flags |= 1, ue(e, t, r, l), t.child);
}
function hu(e, t, n, r, l, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ao(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, sa(e, t, o, r, l, i)) : (e = Sr(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  return o = e.child, !(l & i) && (l = o.memoizedProps, n = n.compare, n = n !== null ? n : Un, n(l, r) && e.ref === t.ref) ? Ie(e, t, i) : (t.flags |= 1, e = et(o, r), e.ref = t.ref, e.return = t, t.child = e);
}
function sa(e, t, n, r, l, i) {
  if (e !== null && Un(e.memoizedProps, r) && e.ref === t.ref) if (Se = !1, (i & l) !== 0) e.flags & 16384 && (Se = !0);
  else return t.lanes = e.lanes, Ie(e, t, i);
  return ri(e, t, n, r, i);
}
function Cl(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") if (!(t.mode & 4)) t.memoizedState = { baseLanes: 0 }, sr(t, n);
  else if (n & 1073741824) t.memoizedState = { baseLanes: 0 }, sr(t, i !== null ? i.baseLanes : n);
  else return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e }, sr(t, e), null;
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, sr(t, r);
  return ue(e, t, l, n), t.child;
}
function aa(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128);
}
function ri(e, t, n, r, l) {
  var i = ae(n) ? pt : re.current;
  return i = Wt(t, i), Rt(t, l), n = eo(e, t, n, r, i, l), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~l, Ie(e, t, l)) : (t.flags |= 1, ue(e, t, n, l), t.child);
}
function vu(e, t, n, r, l) {
  if (ae(n)) {
    var i = !0;
    hr(t);
  } else i = !1;
  if (Rt(t, l), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), Js(t, n, r), bl(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = he(f) : (f = ae(n) ? pt : re.current, f = Wt(t, f));
    var S = n.getDerivedStateFromProps, j = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    j || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== f) && uu(t, o, r, f), Re = !1;
    var h = t.memoizedState;
    o.state = h, Bn(t, r, o, l), s = t.memoizedState, u !== r || h !== s || se.current || Re ? (typeof S == "function" && (Mr(t, n, S, r), s = t.memoizedState), (u = Re || ou(t, n, u, r, h, s, f)) ? (j || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4)) : (typeof o.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = f, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4), r = !1);
  } else {
    o = t.stateNode, Gs(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : we(t.type, u), o.props = f, j = t.pendingProps, h = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = he(s) : (s = ae(n) ? pt : re.current, s = Wt(t, s));
    var E = n.getDerivedStateFromProps;
    (S = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== j || h !== s) && uu(t, o, r, s), Re = !1, h = t.memoizedState, o.state = h, Bn(t, r, o, l);
    var N = t.memoizedState;
    u !== j || h !== N || se.current || Re ? (typeof E == "function" && (Mr(t, n, E, r), N = t.memoizedState), (f = Re || ou(t, n, f, r, h, N, s)) ? (S || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(
      r,
      N,
      s
    ), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, N, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = N), o.props = r, o.state = N, o.context = s, r = f) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 256), r = !1);
  }
  return li(e, t, n, r, i, l);
}
function li(e, t, n, r, l, i) {
  aa(e, t);
  var o = (t.flags & 64) !== 0;
  if (!r && !o) return l && tu(t, n, !1), Ie(e, t, i);
  r = t.stateNode, vf.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Dr(t, e.child, null, i), t.child = Dr(t, null, u, i)) : ue(e, t, u, i), t.memoizedState = r.state, l && tu(t, n, !0), t.child;
}
function yu(e) {
  var t = e.stateNode;
  t.pendingContext ? eu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && eu(e, t.context, !1), ei(e, t.containerInfo);
}
var ur = { dehydrated: null, retryLane: 0 };
function gu(e, t, n) {
  var r = t.pendingProps, l = A.current, i = !1, o;
  return (o = (t.flags & 64) !== 0) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (l |= 1), B(A, l & 1), e === null ? (r.fallback !== void 0 && ti(t), e = r.children, l = r.fallback, i ? (e = wu(t, e, l, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = ur, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = wu(t, e, l, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = ur, t.lanes = 33554432, e) : (n = co({ mode: "visible", children: e }, t.mode, n, null), n.return = t, t.child = n)) : e.memoizedState !== null ? i ? (r = ku(e, t, r.children, r.fallback, n), i = t.child, l = e.child.memoizedState, i.memoizedState = l === null ? { baseLanes: n } : { baseLanes: l.baseLanes | n }, i.childLanes = e.childLanes & ~n, t.memoizedState = ur, r) : (n = Su(e, t, r.children, n), t.memoizedState = null, n) : i ? (r = ku(e, t, r.children, r.fallback, n), i = t.child, l = e.child.memoizedState, i.memoizedState = l === null ? { baseLanes: n } : { baseLanes: l.baseLanes | n }, i.childLanes = e.childLanes & ~n, t.memoizedState = ur, r) : (n = Su(e, t, r.children, n), t.memoizedState = null, n);
}
function wu(e, t, n, r) {
  var l = e.mode, i = e.child;
  return t = { mode: "hidden", children: t }, !(l & 2) && i !== null ? (i.childLanes = 0, i.pendingProps = t) : i = co(t, l, 0, null), n = Bt(n, l, r, null), i.return = e, n.return = e, i.sibling = n, e.child = i, n;
}
function Su(e, t, n, r) {
  var l = e.child;
  return e = l.sibling, n = et(l, { mode: "visible", children: n }), !(t.mode & 2) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n;
}
function ku(e, t, n, r, l) {
  var i = t.mode, o = e.child;
  e = o.sibling;
  var u = { mode: "hidden", children: n };
  return !(i & 2) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = u, o = n.lastEffect, o !== null ? (t.firstEffect = n.firstEffect, t.lastEffect = o, o.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = et(o, u), e !== null ? r = et(e, r) : (r = Bt(r, i, l, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r;
}
function xu(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Ks(e.return, t);
}
function _l(e, t, n, r, l, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l, lastEffect: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l, o.lastEffect = i);
}
function Eu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ue(e, t, r.children, n), r = A.current, r & 2) r = r & 1 | 2, t.flags |= 64;
  else {
    if (e !== null && e.flags & 64) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && xu(e, n);
      else if (e.tag === 19) xu(e, n);
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
  if (B(A, r), !(t.mode & 2)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Rr(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), _l(t, !1, l, n, i, t.lastEffect);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Rr(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      _l(t, !0, n, null, i, t.lastEffect);
      break;
    case "together":
      _l(t, !1, null, null, void 0, t.lastEffect);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ie(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Zn |= t.lanes, n & t.childLanes) {
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
      for (e = t.child, n = et(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = et(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var ca, ii, fa, da;
ca = function(e, t) {
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
ii = function() {
};
fa = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, ct(_e.current);
    var i = null;
    switch (n) {
      case "input":
        l = Fl(e, l), r = Fl(e, r), i = [];
        break;
      case "option":
        l = Ml(e, l), r = Ml(e, r), i = [];
        break;
      case "select":
        l = U({}, l, { value: void 0 }), r = U({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = Dl(e, l), r = Dl(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Tr);
    }
    $l(n, r);
    var o;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var u = l[f];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (In.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (i || (i = []), i.push(f, n)), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (In.hasOwnProperty(f) ? (s != null && f === "onScroll" && D("scroll", e), i || u === s || (i = [])) : typeof s == "object" && s !== null && s.$$typeof === Li ? s.toString() : (i = i || []).push(f, s));
    }
    n && (i = i || []).push(
      "style",
      n
    );
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
da = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function dn(e, t) {
  if (!Ne) switch (e.tailMode) {
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
function yf(e, t, n) {
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
      return ae(t.type) && Ir(), null;
    case 3:
      return Qt(), R(se), R(re), qi(), r = t.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (or(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), ii(t), null;
    case 5:
      Ji(t);
      var l = ct(Wn.current);
      if (n = t.type, e !== null && t.stateNode != null) fa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return null;
        }
        if (e = ct(_e.current), or(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ae] = t, r[Lr] = i, n) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < vn.length; e++) D(vn[e], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Eo(r, i), D("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, D("invalid", r);
              break;
            case "textarea":
              _o(r, i), D("invalid", r);
          }
          $l(n, i), e = null;
          for (var o in i) i.hasOwnProperty(o) && (l = i[o], o === "children" ? typeof l == "string" ? r.textContent !== l && (e = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (e = ["children", "" + l]) : In.hasOwnProperty(o) && l != null && o === "onScroll" && D("scroll", r));
          switch (n) {
            case "input":
              er(r), Co(r, i, !0);
              break;
            case "textarea":
              er(r), No(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Tr);
          }
          r = e, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          switch (o = l.nodeType === 9 ? l : l.ownerDocument, e === Rl.html && (e = os(n)), e === Rl.html ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ae] = t, e[Lr] = r, ca(e, t, !1, !1), t.stateNode = e, o = Al(n, r), n) {
            case "dialog":
              D("cancel", e), D("close", e), l = r;
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", e), l = r;
              break;
            case "video":
            case "audio":
              for (l = 0; l < vn.length; l++) D(vn[l], e);
              l = r;
              break;
            case "source":
              D("error", e), l = r;
              break;
            case "img":
            case "image":
            case "link":
              D("error", e), D("load", e), l = r;
              break;
            case "details":
              D("toggle", e), l = r;
              break;
            case "input":
              Eo(e, r), l = Fl(e, r), D("invalid", e);
              break;
            case "option":
              l = Ml(e, r);
              break;
            case "select":
              e._wrapperState = { wasMultiple: !!r.multiple }, l = U({}, r, { value: void 0 }), D("invalid", e);
              break;
            case "textarea":
              _o(e, r), l = Dl(e, r), D("invalid", e);
              break;
            default:
              l = r;
          }
          $l(n, l);
          var u = l;
          for (i in u) if (u.hasOwnProperty(i)) {
            var s = u[i];
            i === "style" ? as(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && us(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Fn(e, s) : typeof s == "number" && Fn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (In.hasOwnProperty(i) ? s != null && i === "onScroll" && D("scroll", e) : s != null && Ci(e, i, s, o));
          }
          switch (n) {
            case "input":
              er(e), Co(e, r, !1);
              break;
            case "textarea":
              er(e), No(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + Ze(r.value));
              break;
            case "select":
              e.multiple = !!r.multiple, i = r.value, i != null ? zt(e, !!r.multiple, i, !1) : r.defaultValue != null && zt(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof l.onClick == "function" && (e.onclick = Tr);
          }
          $s(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) da(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        n = ct(Wn.current), ct(_e.current), or(t) ? (r = t.stateNode, n = t.memoizedProps, r[Ae] = t, r.nodeValue !== n && (t.flags |= 4)) : (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ae] = t, t.stateNode = r);
      }
      return null;
    case 13:
      return R(A), r = t.memoizedState, t.flags & 64 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? t.memoizedProps.fallback !== void 0 && or(t) : n = e.memoizedState !== null, r && !n && t.mode & 2 && (e === null && t.memoizedProps.unstable_avoidThisFallback !== !0 || A.current & 1 ? q === 0 && (q = 3) : ((q === 0 || q === 3) && (q = 4), le === null || !(Zn & 134217727) && !(Jt & 134217727) || $t(le, ne))), (r || n) && (t.flags |= 4), null);
    case 4:
      return Qt(), ii(t), e === null && Ds(t.stateNode.containerInfo), null;
    case 10:
      return Gi(t), null;
    case 17:
      return ae(t.type) && Ir(), null;
    case 19:
      if (R(A), r = t.memoizedState, r === null) return null;
      if (i = (t.flags & 64) !== 0, o = r.rendering, o === null) if (i) dn(r, !1);
      else {
        if (q !== 0 || e !== null && e.flags & 64) for (e = t.child; e !== null; ) {
          if (o = Rr(e), o !== null) {
            for (t.flags |= 64, dn(r, !1), i = o.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), r.lastEffect === null && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return B(A, A.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        r.tail !== null && te() > fi && (t.flags |= 64, i = !0, dn(r, !1), t.lanes = 33554432);
      }
      else {
        if (!i) if (e = Rr(o), e !== null) {
          if (t.flags |= 64, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dn(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !Ne) return t = t.lastEffect = r.lastEffect, t !== null && (t.nextEffect = null), null;
        } else 2 * te() - r.renderingStartTime > fi && n !== 1073741824 && (t.flags |= 64, i = !0, dn(r, !1), t.lanes = 33554432);
        r.isBackwards ? (o.sibling = t.child, t.child = o) : (n = r.last, n !== null ? n.sibling = o : t.child = o, r.last = o);
      }
      return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = te(), n.sibling = null, t = A.current, B(A, i ? t & 1 | 2 : t & 1), n) : null;
    case 23:
    case 24:
      return so(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null;
  }
  throw Error(k(156, t.tag));
}
function gf(e) {
  switch (e.tag) {
    case 1:
      ae(e.type) && Ir();
      var t = e.flags;
      return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 3:
      if (Qt(), R(se), R(re), qi(), t = e.flags, t & 64) throw Error(k(285));
      return e.flags = t & -4097 | 64, e;
    case 5:
      return Ji(e), null;
    case 13:
      return R(A), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 19:
      return R(A), null;
    case 4:
      return Qt(), null;
    case 10:
      return Gi(e), null;
    case 23:
    case 24:
      return so(), null;
    default:
      return null;
  }
}
function lo(e, t) {
  try {
    var n = "", r = t;
    do
      n += Za(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l };
}
function oi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var wf = typeof WeakMap == "function" ? WeakMap : Map;
function pa(e, t, n) {
  n = Qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Hr || (Hr = !0, di = r), oi(e, t);
  }, n;
}
function ma(e, t, n) {
  n = Qe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return oi(e, t), r(l);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    typeof r != "function" && (Ce === null ? Ce = /* @__PURE__ */ new Set([this]) : Ce.add(this), oi(e, t));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
var Sf = typeof WeakSet == "function" ? WeakSet : Set;
function Cu(e) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (n) {
    Ge(e, n);
  }
  else t.current = null;
}
function kf(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps, r = e.memoizedState;
        e = t.stateNode, t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : we(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t;
      }
      return;
    case 3:
      t.flags & 256 && Qi(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(k(163));
}
function xf(e, t, n) {
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
          var l = e;
          r = l.next, l = l.tag, l & 4 && l & 1 && (Ea(n, e), Lf(n, e)), e = r;
        } while (e !== t);
      }
      return;
    case 1:
      e = n.stateNode, n.flags & 4 && (t === null ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : we(n.type, t.memoizedProps), e.componentDidUpdate(
        r,
        t.memoizedState,
        e.__reactInternalSnapshotBeforeUpdate
      ))), t = n.updateQueue, t !== null && iu(n, t, e);
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
        iu(n, t, e);
      }
      return;
    case 5:
      e = n.stateNode, t === null && n.flags & 4 && $s(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null && ws(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(k(163));
}
function _u(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
      else {
        r = n.stateNode;
        var l = n.memoizedProps.style;
        l = l != null && l.hasOwnProperty("display") ? l.display : null, r.style.display = ss("display", l);
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
function Nu(e, t) {
  if (dt && typeof dt.onCommitFiberUnmount == "function") try {
    dt.onCommitFiberUnmount(Yi, t);
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
          var r = n, l = r.destroy;
          if (r = r.tag, l !== void 0) if (r & 4) Ea(t, n);
          else {
            r = t;
            try {
              l();
            } catch (i) {
              Ge(r, i);
            }
          }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if (Cu(t), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
        e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount();
      } catch (i) {
        Ge(
          t,
          i
        );
      }
      break;
    case 5:
      Cu(t);
      break;
    case 4:
      ha(e, t);
  }
}
function Pu(e) {
  e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
}
function ju(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Tu(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (ju(t)) break e;
      t = t.return;
    }
    throw Error(k(160));
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
      throw Error(k(161));
  }
  n.flags & 16 && (Fn(t, ""), n.flags &= -17);
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || ju(n.return)) {
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
  r ? ui(e, n, t) : si(e, n, t);
}
function ui(e, t, n) {
  var r = e.tag, l = r === 5 || r === 6;
  if (l) e = l ? e.stateNode : e.stateNode.instance, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Tr));
  else if (r !== 4 && (e = e.child, e !== null)) for (ui(e, t, n), e = e.sibling; e !== null; ) ui(e, t, n), e = e.sibling;
}
function si(e, t, n) {
  var r = e.tag, l = r === 5 || r === 6;
  if (l) e = l ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (si(e, t, n), e = e.sibling; e !== null; ) si(e, t, n), e = e.sibling;
}
function ha(e, t) {
  for (var n = t, r = !1, l, i; ; ) {
    if (!r) {
      r = n.return;
      e: for (; ; ) {
        if (r === null) throw Error(k(160));
        switch (l = r.stateNode, r.tag) {
          case 5:
            i = !1;
            break e;
          case 3:
            l = l.containerInfo, i = !0;
            break e;
          case 4:
            l = l.containerInfo, i = !0;
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var o = e, u = n, s = u; ; ) if (Nu(o, s), s.child !== null && s.tag !== 4) s.child.return = s, s = s.child;
      else {
        if (s === u) break e;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === u) break e;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
      i ? (o = l, u = n.stateNode, o.nodeType === 8 ? o.parentNode.removeChild(u) : o.removeChild(u)) : l.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        l = n.stateNode.containerInfo, i = !0, n.child.return = n, n = n.child;
        continue;
      }
    } else if (Nu(e, n), n.child !== null) {
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
function Nl(e, t) {
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
        var l = e !== null ? e.memoizedProps : r;
        e = t.type;
        var i = t.updateQueue;
        if (t.updateQueue = null, i !== null) {
          for (n[Lr] = r, e === "input" && r.type === "radio" && r.name != null && ls(n, r), Al(e, l), t = Al(e, r), l = 0; l < i.length; l += 2) {
            var o = i[l], u = i[l + 1];
            o === "style" ? as(n, u) : o === "dangerouslySetInnerHTML" ? us(n, u) : o === "children" ? Fn(n, u) : Ci(n, o, u, t);
          }
          switch (e) {
            case "input":
              zl(n, r);
              break;
            case "textarea":
              is(n, r);
              break;
            case "select":
              e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, i = r.value, i != null ? zt(n, !!r.multiple, i, !1) : e !== !!r.multiple && (r.defaultValue != null ? zt(n, !!r.multiple, r.defaultValue, !0) : zt(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(k(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      n = t.stateNode, n.hydrate && (n.hydrate = !1, ws(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && (uo = te(), _u(t.child, !0)), Lu(t);
      return;
    case 19:
      Lu(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      _u(t, t.memoizedState !== null);
      return;
  }
  throw Error(k(163));
}
function Lu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sf()), t.forEach(function(r) {
      var l = zf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ef(e, t) {
  return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : !1;
}
var Cf = Math.ceil, Wr = yt.ReactCurrentDispatcher, io = yt.ReactCurrentOwner, L = 0, le = null, Y = null, ne = 0, ht = 0, ai = tt(0), q = 0, rl = null, Zt = 0, Zn = 0, Jt = 0, oo = 0, ci = null, uo = 0, fi = 1 / 0;
function qt() {
  fi = te() + 500;
}
var _ = null, Hr = !1, di = null, Ce = null, be = !1, jn = null, yn = 90, pi = [], mi = [], Fe = null, Tn = 0, hi = null, yr = -1, Te = 0, gr = 0, Ln = null, wr = !1;
function ce() {
  return L & 48 ? te() : yr !== -1 ? yr : yr = te();
}
function Xe(e) {
  if (e = e.mode, !(e & 2)) return 1;
  if (!(e & 4)) return Ht() === 99 ? 1 : 2;
  if (Te === 0 && (Te = Zt), ff.transition !== 0) {
    gr !== 0 && (gr = ci !== null ? ci.pendingLanes : 0), e = Te;
    var t = 4186112 & ~gr;
    return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), t;
  }
  return e = Ht(), L & 4 && e === 98 ? e = Pr(12, Te) : (e = dc(e), e = Pr(e, Te)), e;
}
function Ke(e, t, n) {
  if (50 < Tn) throw Tn = 0, hi = null, Error(k(185));
  if (e = ll(e, t), e === null) return null;
  Zr(e, t, n), e === le && (Jt |= t, q === 4 && $t(e, ne));
  var r = Ht();
  t === 1 ? L & 8 && !(L & 48) ? vi(e) : (ve(e, n), L === 0 && (qt(), Pe())) : (!(L & 4) || r !== 98 && r !== 99 || (Fe === null ? Fe = /* @__PURE__ */ new Set([e]) : Fe.add(e)), ve(e, n)), ci = e;
}
function ll(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
function ve(e, t) {
  for (var n = e.callbackNode, r = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var u = 31 - Je(o), s = 1 << u, f = i[u];
    if (f === -1) {
      if (!(s & r) || s & l) {
        f = t, Ct(s);
        var S = M;
        i[u] = 10 <= S ? f + 250 : 6 <= S ? f + 5e3 : -1;
      }
    } else f <= t && (e.expiredLanes |= s);
    o &= ~s;
  }
  if (r = Dn(e, e === le ? ne : 0), t = M, r === 0) n !== null && (n !== kl && Jl(n), e.callbackNode = null, e.callbackPriority = 0);
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== kl && Jl(n);
    }
    t === 15 ? (n = vi.bind(null, e), je === null ? (je = [n], vr = Xi(tl, Xs)) : je.push(n), n = kl) : t === 14 ? n = An(99, vi.bind(null, e)) : (n = pc(t), n = An(n, va.bind(null, e))), e.callbackPriority = t, e.callbackNode = n;
  }
}
function va(e) {
  if (yr = -1, gr = Te = 0, L & 48) throw Error(k(327));
  var t = e.callbackNode;
  if (nt() && e.callbackNode !== t) return null;
  var n = Dn(e, e === le ? ne : 0);
  if (n === 0) return null;
  var r = n, l = L;
  L |= 16;
  var i = Sa();
  (le !== e || ne !== r) && (qt(), At(e, r));
  do
    try {
      Pf();
      break;
    } catch (u) {
      wa(e, u);
    }
  while (!0);
  if (Ki(), Wr.current = i, L = l, Y !== null ? r = 0 : (le = null, ne = 0, r = q), Zt & Jt) At(e, 0);
  else if (r !== 0) {
    if (r === 2 && (L |= 64, e.hydrate && (e.hydrate = !1, Qi(e.containerInfo)), n = Ns(e), n !== 0 && (r = gn(e, n))), r === 1) throw t = rl, At(e, 0), $t(e, n), ve(e, te()), t;
    switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
      case 0:
      case 1:
        throw Error(k(345));
      case 2:
        ot(e);
        break;
      case 3:
        if ($t(e, n), (n & 62914560) === n && (r = uo + 500 - te(), 10 < r)) {
          if (Dn(e, 0) !== 0) break;
          if (l = e.suspendedLanes, (l & n) !== n) {
            ce(), e.pingedLanes |= e.suspendedLanes & l;
            break;
          }
          e.timeoutHandle = Jo(ot.bind(null, e), r);
          break;
        }
        ot(e);
        break;
      case 4:
        if ($t(e, n), (n & 4186112) === n) break;
        for (r = e.eventTimes, l = -1; 0 < n; ) {
          var o = 31 - Je(n);
          i = 1 << o, o = r[o], o > l && (l = o), n &= ~i;
        }
        if (n = l, n = te() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Cf(n / 1960)) - n, 10 < n) {
          e.timeoutHandle = Jo(ot.bind(null, e), n);
          break;
        }
        ot(e);
        break;
      case 5:
        ot(e);
        break;
      default:
        throw Error(k(329));
    }
  }
  return ve(e, te()), e.callbackNode === t ? va.bind(null, e) : null;
}
function $t(e, t) {
  for (t &= ~oo, t &= ~Jt, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Je(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function vi(e) {
  if (L & 48) throw Error(k(327));
  if (nt(), e === le && e.expiredLanes & ne) {
    var t = ne, n = gn(e, t);
    Zt & Jt && (t = Dn(e, t), n = gn(e, t));
  } else t = Dn(e, 0), n = gn(e, t);
  if (e.tag !== 0 && n === 2 && (L |= 64, e.hydrate && (e.hydrate = !1, Qi(e.containerInfo)), t = Ns(e), t !== 0 && (n = gn(e, t))), n === 1) throw n = rl, At(e, 0), $t(e, t), ve(e, te()), n;
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ot(e), ve(e, te()), null;
}
function _f() {
  if (Fe !== null) {
    var e = Fe;
    Fe = null, e.forEach(function(t) {
      t.expiredLanes |= 24 & t.pendingLanes, ve(t, te());
    });
  }
  Pe();
}
function ya(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    L = n, L === 0 && (qt(), Pe());
  }
}
function ga(e, t) {
  var n = L;
  L &= -2, L |= 8;
  try {
    return e(t);
  } finally {
    L = n, L === 0 && (qt(), Pe());
  }
}
function sr(e, t) {
  B(ai, ht), ht |= t, Zt |= t;
}
function so() {
  ht = ai.current, R(ai);
}
function At(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, lf(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ir();
        break;
      case 3:
        Qt(), R(se), R(re), qi();
        break;
      case 5:
        Ji(r);
        break;
      case 4:
        Qt();
        break;
      case 13:
        R(A);
        break;
      case 19:
        R(A);
        break;
      case 10:
        Gi(r);
        break;
      case 23:
      case 24:
        so();
    }
    n = n.return;
  }
  le = e, Y = et(e.current, null), ne = ht = Zt = t, q = 0, rl = null, oo = Jt = Zn = 0;
}
function wa(e, t) {
  do {
    var n = Y;
    try {
      if (Ki(), Nn.current = Vr, Ur) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Ur = !1;
      }
      if (Hn = 0, J = ee = W = null, Pn = !1, io.current = null, n === null || n.return === null) {
        q = 1, rl = t, Y = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, s = t;
        if (t = ne, u.flags |= 2048, u.firstEffect = u.lastEffect = null, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s;
          if (!(u.mode & 2)) {
            var S = u.alternate;
            S ? (u.updateQueue = S.updateQueue, u.memoizedState = S.memoizedState, u.lanes = S.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var j = (A.current & 1) !== 0, h = o;
          do {
            var E;
            if (E = h.tag === 13) {
              var N = h.memoizedState;
              if (N !== null) E = N.dehydrated !== null;
              else {
                var P = h.memoizedProps;
                E = P.fallback === void 0 ? !1 : P.unstable_avoidThisFallback !== !0 ? !0 : !j;
              }
            }
            if (E) {
              var d = h.updateQueue;
              if (d === null) {
                var a = /* @__PURE__ */ new Set();
                a.add(f), h.updateQueue = a;
              } else d.add(f);
              if (!(h.mode & 2)) {
                if (h.flags |= 64, u.flags |= 16384, u.flags &= -2981, u.tag === 1) if (u.alternate === null) u.tag = 17;
                else {
                  var c = Qe(-1, 1);
                  c.tag = 2, Ye(u, c);
                }
                u.lanes |= 1;
                break e;
              }
              s = void 0, u = t;
              var v = i.pingCache;
              if (v === null ? (v = i.pingCache = new wf(), s = /* @__PURE__ */ new Set(), v.set(f, s)) : (s = v.get(f), s === void 0 && (s = /* @__PURE__ */ new Set(), v.set(f, s))), !s.has(u)) {
                s.add(u);
                var p = Ff.bind(null, i, f, u);
                f.then(p, p);
              }
              h.flags |= 4096, h.lanes = t;
              break e;
            }
            h = h.return;
          } while (h !== null);
          s = Error((Ft(u.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
        }
        q !== 5 && (q = 2), s = lo(s, u), h = o;
        do {
          switch (h.tag) {
            case 3:
              i = s, h.flags |= 4096, t &= -t, h.lanes |= t;
              var x = pa(h, i, t);
              lu(h, x);
              break e;
            case 1:
              i = s;
              var g = h.type, T = h.stateNode;
              if (!(h.flags & 64) && (typeof g.getDerivedStateFromError == "function" || T !== null && typeof T.componentDidCatch == "function" && (Ce === null || !Ce.has(T)))) {
                h.flags |= 4096, t &= -t, h.lanes |= t;
                var y = ma(h, i, t);
                lu(h, y);
                break e;
              }
          }
          h = h.return;
        } while (h !== null);
      }
      xa(n);
    } catch (w) {
      t = w, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sa() {
  var e = Wr.current;
  return Wr.current = Vr, e === null ? Vr : e;
}
function gn(e, t) {
  var n = L;
  L |= 16;
  var r = Sa();
  le === e && ne === t || At(e, t);
  do
    try {
      Nf();
      break;
    } catch (l) {
      wa(e, l);
    }
  while (!0);
  if (Ki(), L = n, Wr.current = r, Y !== null) throw Error(k(261));
  return le = null, ne = 0, q;
}
function Nf() {
  for (; Y !== null; ) ka(Y);
}
function Pf() {
  for (; Y !== null && !sf(); ) ka(Y);
}
function ka(e) {
  var t = Ca(e.alternate, e, ht);
  e.memoizedProps = e.pendingProps, t === null ? xa(e) : Y = t, io.current = null;
}
function xa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 2048) {
      if (n = gf(t), n !== null) {
        n.flags &= 2047, Y = n;
        return;
      }
      e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
    } else {
      if (n = yf(n, t, ht), n !== null) {
        Y = n;
        return;
      }
      if (n = t, n.tag !== 24 && n.tag !== 23 || n.memoizedState === null || ht & 1073741824 || !(n.mode & 4)) {
        for (var r = 0, l = n.child; l !== null; ) r |= l.lanes | l.childLanes, l = l.sibling;
        n.childLanes = r;
      }
      e !== null && !(e.flags & 2048) && (e.firstEffect === null && (e.firstEffect = t.firstEffect), t.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t));
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function ot(e) {
  var t = Ht();
  return mt(99, jf.bind(null, e, t)), null;
}
function jf(e, t) {
  do
    nt();
  while (jn !== null);
  if (L & 48) throw Error(k(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes, l = r, i = e.pendingLanes & ~l;
  e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= l, e.mutableReadLanes &= l, e.entangledLanes &= l, l = e.entanglements;
  for (var o = e.eventTimes, u = e.expirationTimes; 0 < i; ) {
    var s = 31 - Je(i), f = 1 << s;
    l[s] = 0, o[s] = -1, u[s] = -1, i &= ~f;
  }
  if (Fe !== null && !(r & 24) && Fe.has(e) && Fe.delete(e), e === le && (Y = le = null, ne = 0), 1 < n.flags ? n.lastEffect !== null ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, r !== null) {
    if (l = L, L |= 32, io.current = null, gl = dr, o = Ho(), Yl(o)) {
      if ("selectionStart" in o) u = { start: o.selectionStart, end: o.selectionEnd };
      else e: if (u = (u = o.ownerDocument) && u.defaultView || window, (f = u.getSelection && u.getSelection()) && f.rangeCount !== 0) {
        u = f.anchorNode, i = f.anchorOffset, s = f.focusNode, f = f.focusOffset;
        try {
          u.nodeType, s.nodeType;
        } catch {
          u = null;
          break e;
        }
        var S = 0, j = -1, h = -1, E = 0, N = 0, P = o, d = null;
        t: for (; ; ) {
          for (var a; P !== u || i !== 0 && P.nodeType !== 3 || (j = S + i), P !== s || f !== 0 && P.nodeType !== 3 || (h = S + f), P.nodeType === 3 && (S += P.nodeValue.length), (a = P.firstChild) !== null; )
            d = P, P = a;
          for (; ; ) {
            if (P === o) break t;
            if (d === u && ++E === i && (j = S), d === s && ++N === f && (h = S), (a = P.nextSibling) !== null) break;
            P = d, d = P.parentNode;
          }
          P = a;
        }
        u = j === -1 || h === -1 ? null : { start: j, end: h };
      } else u = null;
      u = u || { start: 0, end: 0 };
    } else u = null;
    wl = { focusedElem: o, selectionRange: u }, dr = !1, Ln = null, wr = !1, _ = r;
    do
      try {
        Tf();
      } catch (w) {
        if (_ === null) throw Error(k(330));
        Ge(_, w), _ = _.nextEffect;
      }
    while (_ !== null);
    Ln = null, _ = r;
    do
      try {
        for (o = e; _ !== null; ) {
          var c = _.flags;
          if (c & 16 && Fn(_.stateNode, ""), c & 128) {
            var v = _.alternate;
            if (v !== null) {
              var p = v.ref;
              p !== null && (typeof p == "function" ? p(null) : p.current = null);
            }
          }
          switch (c & 1038) {
            case 2:
              Tu(_), _.flags &= -3;
              break;
            case 6:
              Tu(_), _.flags &= -3, Nl(_.alternate, _);
              break;
            case 1024:
              _.flags &= -1025;
              break;
            case 1028:
              _.flags &= -1025, Nl(_.alternate, _);
              break;
            case 4:
              Nl(_.alternate, _);
              break;
            case 8:
              u = _, ha(o, u);
              var x = u.alternate;
              Pu(u), x !== null && Pu(x);
          }
          _ = _.nextEffect;
        }
      } catch (w) {
        if (_ === null) throw Error(k(330));
        Ge(_, w), _ = _.nextEffect;
      }
    while (_ !== null);
    if (p = wl, v = Ho(), c = p.focusedElem, o = p.selectionRange, v !== c && c && c.ownerDocument && Os(c.ownerDocument.documentElement, c)) {
      for (o !== null && Yl(c) && (v = o.start, p = o.end, p === void 0 && (p = v), "selectionStart" in c ? (c.selectionStart = v, c.selectionEnd = Math.min(p, c.value.length)) : (p = (v = c.ownerDocument || document) && v.defaultView || window, p.getSelection && (p = p.getSelection(), u = c.textContent.length, x = Math.min(o.start, u), o = o.end === void 0 ? x : Math.min(o.end, u), !p.extend && x > o && (u = o, o = x, x = u), u = Wo(c, x), i = Wo(c, o), u && i && (p.rangeCount !== 1 || p.anchorNode !== u.node || p.anchorOffset !== u.offset || p.focusNode !== i.node || p.focusOffset !== i.offset) && (v = v.createRange(), v.setStart(u.node, u.offset), p.removeAllRanges(), x > o ? (p.addRange(v), p.extend(i.node, i.offset)) : (v.setEnd(i.node, i.offset), p.addRange(v)))))), v = [], p = c; p = p.parentNode; ) p.nodeType === 1 && v.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < v.length; c++) p = v[c], p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
    }
    dr = !!gl, wl = gl = null, e.current = n, _ = r;
    do
      try {
        for (c = e; _ !== null; ) {
          var g = _.flags;
          if (g & 36 && xf(c, _.alternate, _), g & 128) {
            v = void 0;
            var T = _.ref;
            if (T !== null) {
              var y = _.stateNode;
              switch (_.tag) {
                case 5:
                  v = y;
                  break;
                default:
                  v = y;
              }
              typeof T == "function" ? T(v) : T.current = v;
            }
          }
          _ = _.nextEffect;
        }
      } catch (w) {
        if (_ === null) throw Error(k(330));
        Ge(_, w), _ = _.nextEffect;
      }
    while (_ !== null);
    _ = null, cf(), L = l;
  } else e.current = n;
  if (be) be = !1, jn = e, yn = t;
  else for (_ = r; _ !== null; ) t = _.nextEffect, _.nextEffect = null, _.flags & 8 && (g = _, g.sibling = null, g.stateNode = null), _ = t;
  if (r = e.pendingLanes, r === 0 && (Ce = null), r === 1 ? e === hi ? Tn++ : (Tn = 0, hi = e) : Tn = 0, n = n.stateNode, dt && typeof dt.onCommitFiberRoot == "function") try {
    dt.onCommitFiberRoot(Yi, n, void 0, (n.current.flags & 64) === 64);
  } catch {
  }
  if (ve(e, te()), Hr) throw Hr = !1, e = di, di = null, e;
  return L & 8 || Pe(), null;
}
function Tf() {
  for (; _ !== null; ) {
    var e = _.alternate;
    wr || Ln === null || (_.flags & 8 ? To(_, Ln) && (wr = !0) : _.tag === 13 && Ef(e, _) && To(_, Ln) && (wr = !0));
    var t = _.flags;
    t & 256 && kf(e, _), !(t & 512) || be || (be = !0, An(97, function() {
      return nt(), null;
    })), _ = _.nextEffect;
  }
}
function nt() {
  if (yn !== 90) {
    var e = 97 < yn ? 97 : yn;
    return yn = 90, mt(e, If);
  }
  return !1;
}
function Lf(e, t) {
  pi.push(t, e), be || (be = !0, An(97, function() {
    return nt(), null;
  }));
}
function Ea(e, t) {
  mi.push(t, e), be || (be = !0, An(97, function() {
    return nt(), null;
  }));
}
function If() {
  if (jn === null) return !1;
  var e = jn;
  if (jn = null, L & 48) throw Error(k(331));
  var t = L;
  L |= 32;
  var n = mi;
  mi = [];
  for (var r = 0; r < n.length; r += 2) {
    var l = n[r], i = n[r + 1], o = l.destroy;
    if (l.destroy = void 0, typeof o == "function") try {
      o();
    } catch (s) {
      if (i === null) throw Error(k(330));
      Ge(i, s);
    }
  }
  for (n = pi, pi = [], r = 0; r < n.length; r += 2) {
    l = n[r], i = n[r + 1];
    try {
      var u = l.create;
      l.destroy = u();
    } catch (s) {
      if (i === null) throw Error(k(330));
      Ge(i, s);
    }
  }
  for (u = e.current.firstEffect; u !== null; ) e = u.nextEffect, u.nextEffect = null, u.flags & 8 && (u.sibling = null, u.stateNode = null), u = e;
  return L = t, Pe(), !0;
}
function Iu(e, t, n) {
  t = lo(n, t), t = pa(e, t, 1), Ye(e, t), t = ce(), e = ll(e, 1), e !== null && (Zr(e, 1, t), ve(e, t));
}
function Ge(e, t) {
  if (e.tag === 3) Iu(e, e, t);
  else for (var n = e.return; n !== null; ) {
    if (n.tag === 3) {
      Iu(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ce === null || !Ce.has(r))) {
        e = lo(t, e);
        var l = ma(n, e, 1);
        if (Ye(n, l), l = ce(), n = ll(n, 1), n !== null) Zr(n, 1, l), ve(n, l);
        else if (typeof r.componentDidCatch == "function" && (Ce === null || !Ce.has(r))) try {
          r.componentDidCatch(t, e);
        } catch {
        }
        break;
      }
    }
    n = n.return;
  }
}
function Ff(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ne & n) === n && (q === 4 || q === 3 && (ne & 62914560) === ne && 500 > te() - uo ? At(e, 0) : oo |= n), ve(e, t);
}
function zf(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t), t = 0, t === 0 && (t = e.mode, t & 2 ? t & 4 ? (Te === 0 && (Te = Zt), t = _t(62914560 & ~Te), t === 0 && (t = 4194304)) : t = Ht() === 99 ? 1 : 2 : t = 1), n = ce(), e = ll(e, t), e !== null && (Zr(e, t, n), ve(e, n));
}
var Ca;
Ca = function(e, t, n) {
  var r = t.lanes;
  if (e !== null) if (e.memoizedProps !== t.pendingProps || se.current) Se = !0;
  else if (n & r) Se = !!(e.flags & 16384);
  else {
    switch (Se = !1, t.tag) {
      case 3:
        yu(t), El();
        break;
      case 5:
        su(t);
        break;
      case 1:
        ae(t.type) && hr(t);
        break;
      case 4:
        ei(t, t.stateNode.containerInfo);
        break;
      case 10:
        r = t.memoizedProps.value;
        var l = t.type._context;
        B(Fr, l._currentValue), l._currentValue = r;
        break;
      case 13:
        if (t.memoizedState !== null)
          return n & t.child.childLanes ? gu(e, t, n) : (B(A, A.current & 1), t = Ie(e, t, n), t !== null ? t.sibling : null);
        B(A, A.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 64) {
          if (r) return Eu(e, t, n);
          t.flags |= 64;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), B(A, A.current), r) break;
        return null;
      case 23:
      case 24:
        return t.lanes = 0, Cl(e, t, n);
    }
    return Ie(e, t, n);
  }
  else Se = !1;
  switch (t.lanes = 0, t.tag) {
    case 2:
      if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, l = Wt(t, re.current), Rt(t, n), l = eo(null, t, r, e, l, n), t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0) {
        if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ae(r)) {
          var i = !0;
          hr(t);
        } else i = !1;
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Zi(t);
        var o = r.getDerivedStateFromProps;
        typeof o == "function" && Mr(t, r, o, e), l.updater = nl, t.stateNode = l, l._reactInternals = t, bl(t, r, e, n), t = li(null, t, r, !0, i, n);
      } else t.tag = 0, ue(null, t, l, n), t = t.child;
      return t;
    case 16:
      l = t.elementType;
      e: {
        switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = l._init, l = i(l._payload), t.type = l, i = t.tag = Mf(l), e = we(l, e), i) {
          case 0:
            t = ri(null, t, l, e, n);
            break e;
          case 1:
            t = vu(null, t, l, e, n);
            break e;
          case 11:
            t = mu(null, t, l, e, n);
            break e;
          case 14:
            t = hu(null, t, l, we(l.type, e), r, n);
            break e;
        }
        throw Error(k(306, l, ""));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : we(r, l), ri(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : we(r, l), vu(e, t, r, l, n);
    case 3:
      if (yu(t), r = t.updateQueue, e === null || r === null) throw Error(k(282));
      if (r = t.pendingProps, l = t.memoizedState, l = l !== null ? l.element : null, Gs(e, t), Bn(t, r, null, n), r = t.memoizedState.element, r === l) El(), t = Ie(e, t, n);
      else {
        if (l = t.stateNode, (i = l.hydrate) && (Be = Dt(t.stateNode.containerInfo.firstChild), Le = t, i = Ne = !0), i) {
          if (e = l.mutableSourceEagerHydrationData, e != null) for (l = 0; l < e.length; l += 2) i = e[l], i._workInProgressVersionPrimary = e[l + 1], Ut.push(i);
          for (n = bs(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 1024, n = n.sibling;
        } else ue(e, t, r, n), El();
        t = t.child;
      }
      return t;
    case 5:
      return su(t), e === null && ti(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Gl(r, l) ? o = null : i !== null && Gl(r, i) && (t.flags |= 16), aa(e, t), ue(e, t, o, n), t.child;
    case 6:
      return e === null && ti(t), null;
    case 13:
      return gu(e, t, n);
    case 4:
      return ei(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Dr(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : we(r, l), mu(e, t, r, l, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(
        e,
        t,
        t.pendingProps.children,
        n
      ), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value;
        var u = t.type._context;
        if (B(Fr, u._currentValue), u._currentValue = i, o !== null) if (u = o.value, i = de(u, i) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u, i) : 1073741823) | 0, i === 0) {
          if (o.children === l.children && !se.current) {
            t = Ie(e, t, n);
            break e;
          }
        } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
          var s = u.dependencies;
          if (s !== null) {
            o = u.child;
            for (var f = s.firstContext; f !== null; ) {
              if (f.context === r && f.observedBits & i) {
                u.tag === 1 && (f = Qe(-1, n & -n), f.tag = 2, Ye(u, f)), u.lanes |= n, f = u.alternate, f !== null && (f.lanes |= n), Ks(u.return, n), s.lanes |= n;
                break;
              }
              f = f.next;
            }
          } else o = u.tag === 10 && u.type === t.type ? null : u.child;
          if (o !== null) o.return = u;
          else for (o = u; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (u = o.sibling, u !== null) {
              u.return = o.return, o = u;
              break;
            }
            o = o.return;
          }
          u = o;
        }
        ue(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, i = t.pendingProps, r = i.children, Rt(t, n), l = he(
        l,
        i.unstable_observedBits
      ), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return l = t.type, i = we(l, t.pendingProps), i = we(l.type, i), hu(e, t, l, i, r, n);
    case 15:
      return sa(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : we(r, l), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, ae(r) ? (e = !0, hr(t)) : e = !1, Rt(t, n), Js(t, r, l), bl(t, r, l, n), li(null, t, r, !0, e, n);
    case 19:
      return Eu(e, t, n);
    case 23:
      return Cl(e, t, n);
    case 24:
      return Cl(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Of(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function pe(e, t, n, r) {
  return new Of(e, t, n, r);
}
function ao(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Mf(e) {
  if (typeof e == "function") return ao(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Xr) return 11;
    if (e === Kr) return 14;
  }
  return 2;
}
function et(e, t) {
  var n = e.alternate;
  return n === null ? (n = pe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Sr(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") ao(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Ue:
      return Bt(n.children, l, i, t);
    case ts:
      o = 8, l |= 16;
      break;
    case _i:
      o = 8, l |= 1;
      break;
    case wn:
      return e = pe(12, n, t, l | 8), e.elementType = wn, e.type = wn, e.lanes = i, e;
    case Sn:
      return e = pe(13, n, t, l), e.type = Sn, e.elementType = Sn, e.lanes = i, e;
    case Er:
      return e = pe(19, n, t, l), e.elementType = Er, e.lanes = i, e;
    case Ii:
      return co(n, l, i, t);
    case Il:
      return e = pe(24, n, t, l), e.elementType = Il, e.lanes = i, e;
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ni:
          o = 10;
          break e;
        case Pi:
          o = 9;
          break e;
        case Xr:
          o = 11;
          break e;
        case Kr:
          o = 14;
          break e;
        case ji:
          o = 16, r = null;
          break e;
        case Ti:
          o = 22;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = pe(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Bt(e, t, n, r) {
  return e = pe(7, e, r, t), e.lanes = n, e;
}
function co(e, t, n, r) {
  return e = pe(23, e, r, t), e.elementType = Ii, e.lanes = n, e;
}
function Pl(e, t, n) {
  return e = pe(6, e, null, t), e.lanes = n, e;
}
function jl(e, t, n) {
  return t = pe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Df(e, t, n) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = fl(0), this.expirationTimes = fl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fl(0), this.mutableSourceEagerHydrationData = null;
}
function Rf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ut, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Qr(e, t, n, r) {
  var l = t.current, i = ce(), o = Xe(l);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (gt(n) !== n || n.tag !== 1) throw Error(k(170));
      var u = n;
      do {
        switch (u.tag) {
          case 3:
            u = u.stateNode.context;
            break t;
          case 1:
            if (ae(u.type)) {
              u = u.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        u = u.return;
      } while (u !== null);
      throw Error(k(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (ae(s)) {
        n = Bs(n, s, u);
        break e;
      }
    }
    n = u;
  } else n = qe;
  return t.context === null ? t.context = n : t.pendingContext = n, t = Qe(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), Ye(l, t), Ke(l, o, i), o;
}
function Tl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Fu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fo(e, t) {
  Fu(e, t), (e = e.alternate) && Fu(e, t);
}
function Uf() {
  return null;
}
function po(e, t, n) {
  var r = n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources || null;
  if (n = new Df(e, t, n != null && n.hydrate === !0), t = pe(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), n.current = t, t.stateNode = n, Zi(t), e[Gt] = n.current, Ds(e.nodeType === 8 ? e.parentNode : e), r) for (e = 0; e < r.length; e++) {
    t = r[e];
    var l = t._getVersion;
    l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(t, l);
  }
  this._internalRoot = n;
}
po.prototype.render = function(e) {
  Qr(e, this._internalRoot, null, null);
};
po.prototype.unmount = function() {
  var e = this._internalRoot, t = e.containerInfo;
  Qr(null, e, null, function() {
    t[Gt] = null;
  });
};
function Jn(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function $f(e, t) {
  if (t || (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild; ) e.removeChild(n);
  return new po(e, 0, t ? { hydrate: !0 } : void 0);
}
function il(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i._internalRoot;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var f = Tl(o);
        u.call(f);
      };
    }
    Qr(t, o, e, l);
  } else {
    if (i = n._reactRootContainer = $f(n, r), o = i._internalRoot, typeof l == "function") {
      var s = l;
      l = function() {
        var f = Tl(o);
        s.call(f);
      };
    }
    ga(function() {
      Qr(t, o, e, l);
    });
  }
  return Tl(o);
}
vs = function(e) {
  if (e.tag === 13) {
    var t = ce();
    Ke(e, 4, t), fo(e, 4);
  }
};
Di = function(e) {
  if (e.tag === 13) {
    var t = ce();
    Ke(e, 67108864, t), fo(e, 67108864);
  }
};
ys = function(e) {
  if (e.tag === 13) {
    var t = ce(), n = Xe(e);
    Ke(e, n, t), fo(e, n);
  }
};
gs = function(e, t) {
  return t();
};
Bl = function(e, t, n) {
  switch (t) {
    case "input":
      if (zl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = el(r);
            if (!l) throw Error(k(90));
            rs(r), zl(r, l);
          }
        }
      }
      break;
    case "textarea":
      is(e, n);
      break;
    case "select":
      t = n.value, t != null && zt(e, !!n.multiple, t, !1);
  }
};
zi = ya;
ds = function(e, t, n, r, l) {
  var i = L;
  L |= 4;
  try {
    return mt(98, e.bind(null, t, n, r, l));
  } finally {
    L = i, L === 0 && (qt(), Pe());
  }
};
Oi = function() {
  !(L & 49) && (_f(), nt());
};
ps = function(e, t) {
  var n = L;
  L |= 2;
  try {
    return e(t);
  } finally {
    L = n, L === 0 && (qt(), Pe());
  }
};
function _a(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Jn(t)) throw Error(k(200));
  return Rf(e, t, null, n);
}
var Af = { Events: [Kn, Tt, el, cs, fs, nt, { current: !1 }] }, pn = { findFiberByHostInstance: at, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, Bf = { bundleType: pn.bundleType, version: pn.version, rendererPackageName: pn.rendererPackageName, rendererConfig: pn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = hs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: pn.findFiberByHostInstance || Uf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ar.isDisabled && ar.supportsFiber) try {
    Yi = ar.inject(Bf), dt = ar;
  } catch {
  }
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Af;
ye.createPortal = _a;
ye.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : Error(k(268, Object.keys(e)));
  return e = hs(t), e = e === null ? null : e.stateNode, e;
};
ye.flushSync = function(e, t) {
  var n = L;
  if (n & 48) return e(t);
  L |= 1;
  try {
    if (e) return mt(99, e.bind(null, t));
  } finally {
    L = n, Pe();
  }
};
ye.hydrate = function(e, t, n) {
  if (!Jn(t)) throw Error(k(200));
  return il(null, e, t, !0, n);
};
ye.render = function(e, t, n) {
  if (!Jn(t)) throw Error(k(200));
  return il(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function(e) {
  if (!Jn(e)) throw Error(k(40));
  return e._reactRootContainer ? (ga(function() {
    il(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Gt] = null;
    });
  }), !0) : !1;
};
ye.unstable_batchedUpdates = ya;
ye.unstable_createPortal = function(e, t) {
  return _a(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Jn(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return il(e, t, n, !1, r);
};
ye.version = "17.0.2";
function Na() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Na);
    } catch (e) {
      console.error(e);
    }
}
Na(), Ju.exports = ye;
var Vf = Ju.exports;
const Wf = {
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
}, kr = (e) => ({
  title: `Step ${e + 1}`,
  label: "",
  description: "",
  displayAboveLine: e % 2 === 0,
  position: e
}), Pa = (e) => Math.max(0, Math.min(1, e)), ja = (e, t = 8) => {
  const n = Pa(e), r = 100 - t * 2;
  return t + n * r;
}, xr = (e) => e.length <= 1 ? e.map((t) => ({ ...t, position: 0.5 })) : e.map((t, n) => ({
  ...t,
  position: n / (e.length - 1)
})), mo = (e) => [...e].sort((t, n) => t.position - n.position), Ta = () => ({
  displayName: "Process Line",
  introductionText: "Click and drag to explore. Select an item for more details.",
  styling: Wf,
  items: xr([
    kr(0),
    kr(1),
    kr(2)
  ])
});
function La({
  configuration: e,
  selectedIndex: t,
  onSelectedIndexChange: n
}) {
  const r = Q.useMemo(
    () => mo(e.items || []),
    [e.items]
  ), [l, i] = Q.useState(0), o = Q.useRef(null), u = Q.useRef({
    active: !1,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
    moved: !1
  }), s = t ?? l, f = Q.useCallback((p) => {
    const x = r.length ? Math.max(0, Math.min(r.length - 1, p)) : 0;
    t === void 0 && i(x), n && n(x);
  }, [t, r.length, n]);
  Q.useEffect(() => {
    s > r.length - 1 && f(Math.max(r.length - 1, 0));
  }, [r.length, s, f]);
  const S = r[s], j = (p) => {
    f(s + p);
  }, h = (p) => {
    const x = o.current;
    if (!x)
      return;
    const g = x.querySelector(`[data-step-index="${p}"]`);
    g && typeof g.scrollIntoView == "function" && g.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  };
  Q.useEffect(() => {
    h(s);
  }, [s]);
  const E = (p) => {
    u.current.moved || f(p);
  }, N = (p) => {
    const x = o.current;
    x && (u.current = {
      active: !0,
      pointerId: p.pointerId,
      startX: p.clientX,
      startScrollLeft: x.scrollLeft,
      moved: !1
    }, x.setPointerCapture(p.pointerId));
  }, P = (p) => {
    const x = o.current, g = u.current;
    if (!x || !g.active || g.pointerId !== p.pointerId)
      return;
    const T = p.clientX - g.startX;
    Math.abs(T) > 4 && (g.moved = !0), x.scrollLeft = g.startScrollLeft - T;
  }, d = (p) => {
    const x = o.current;
    x && x.hasPointerCapture(p) && x.releasePointerCapture(p);
    const g = u.current;
    g.active = !1, window.setTimeout(() => {
      u.current.moved = !1;
    }, 0);
  }, a = (p) => {
    u.current.pointerId === p.pointerId && d(p.pointerId);
  }, c = (p) => {
    u.current.pointerId === p.pointerId && d(p.pointerId);
  }, v = (p, x) => {
    const g = x === s;
    return {
      left: `${ja(p.position)}%`,
      "--processline-highlight-color": e.styling.highlightColor,
      "--processline-title-color": g ? e.styling.highlightColor : e.styling.lineItemTitleColor,
      "--processline-label-color": e.styling.lineItemLabelColor,
      "--processline-title-font-size": `${e.styling.lineItemTitleFontSize}px`,
      "--processline-label-font-size": `${e.styling.lineItemLabelFontSize}px`
    };
  };
  return r.length ? /* @__PURE__ */ m.jsxs("div", { className: "xblock-processline student-view", children: [
    /* @__PURE__ */ m.jsxs("header", { className: "processline-header", children: [
      /* @__PURE__ */ m.jsx("h2", { className: "processline-heading", children: e.displayName }),
      /* @__PURE__ */ m.jsx("p", { className: "processline-subheading", children: e.introductionText })
    ] }),
    /* @__PURE__ */ m.jsxs("section", { className: "processline-timeline-section", "aria-label": "Process line navigation", children: [
      /* @__PURE__ */ m.jsx(
        "button",
        {
          className: "timeline-side-button",
          type: "button",
          onClick: () => j(-1),
          disabled: s === 0,
          "aria-label": "Previous item",
          children: "←"
        }
      ),
      /* @__PURE__ */ m.jsx(
        "div",
        {
          ref: o,
          className: "timeline-viewport",
          onPointerDown: N,
          onPointerMove: P,
          onPointerUp: a,
          onPointerCancel: c,
          children: /* @__PURE__ */ m.jsxs(
            "div",
            {
              className: "timeline-canvas",
              style: { minWidth: `${Math.max(960, r.length * 220)}px` },
              children: [
                /* @__PURE__ */ m.jsx("div", { className: "timeline-track" }),
                r.map((p, x) => {
                  const g = x === s;
                  return /* @__PURE__ */ m.jsxs(
                    "button",
                    {
                      className: `timeline-marker ${p.displayAboveLine ? "above" : "below"} ${g ? "selected" : ""}`,
                      "data-step-index": x,
                      type: "button",
                      style: v(p, x),
                      onPointerDown: (T) => T.stopPropagation(),
                      onClick: () => E(x),
                      onFocus: () => f(x),
                      "aria-pressed": g,
                      children: [
                        /* @__PURE__ */ m.jsx("span", { className: "timeline-node" }),
                        /* @__PURE__ */ m.jsxs("span", { className: "timeline-marker-copy", children: [
                          /* @__PURE__ */ m.jsx("span", { className: "timeline-marker-title", children: p.title }),
                          /* @__PURE__ */ m.jsx("span", { className: "timeline-marker-label", children: p.label })
                        ] })
                      ]
                    },
                    `${p.title}-${p.position}`
                  );
                })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsx(
        "button",
        {
          className: "timeline-side-button",
          type: "button",
          onClick: () => j(1),
          disabled: s === r.length - 1,
          "aria-label": "Next item",
          children: "→"
        }
      )
    ] }),
    S && /* @__PURE__ */ m.jsxs(
      "section",
      {
        className: "processline-detail-card",
        style: {
          backgroundColor: e.styling.cardBackgroundColor,
          color: e.styling.cardDescriptionColor
        },
        children: [
          /* @__PURE__ */ m.jsxs(
            "span",
            {
              className: "detail-progress-pill",
              style: { backgroundColor: e.styling.highlightColor },
              children: [
                s + 1,
                " / ",
                r.length
              ]
            }
          ),
          /* @__PURE__ */ m.jsxs(
            "h3",
            {
              className: "detail-title",
              style: {
                color: e.styling.cardTitleColor,
                fontSize: `${e.styling.cardTitleFontSize}px`
              },
              children: [
                S.title,
                S.label ? ` - ${S.label}` : ""
              ]
            }
          ),
          /* @__PURE__ */ m.jsx(
            "p",
            {
              className: "detail-description",
              style: {
                color: e.styling.cardDescriptionColor,
                fontSize: `${e.styling.cardDescriptionFontSize}px`
              },
              children: S.description
            }
          ),
          /* @__PURE__ */ m.jsxs("div", { className: "detail-card-footer", children: [
            /* @__PURE__ */ m.jsxs("span", { className: "detail-count", children: [
              s + 1,
              " of ",
              r.length
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "detail-actions", children: [
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  className: "detail-nav-button",
                  type: "button",
                  onClick: () => j(-1),
                  disabled: s === 0,
                  "aria-label": "Previous detail",
                  children: "←"
                }
              ),
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  className: "detail-nav-button primary",
                  type: "button",
                  onClick: () => j(1),
                  disabled: s === r.length - 1,
                  "aria-label": "Next detail",
                  children: "→"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ m.jsxs("div", { className: "xblock-processline student-view empty-state", children: [
    /* @__PURE__ */ m.jsx("h2", { className: "processline-heading", children: e.displayName }),
    /* @__PURE__ */ m.jsx("p", { className: "processline-subheading", children: e.introductionText }),
    /* @__PURE__ */ m.jsx("p", { className: "processline-empty-message", children: "No line items have been configured yet." })
  ] });
}
La.defaultProps = {
  selectedIndex: void 0,
  onSelectedIndexChange: void 0
};
const Ll = (e) => ({
  ...e,
  items: mo(e.items)
});
function Hf({
  initialConfiguration: e,
  isSaving: t,
  saveError: n,
  onSave: r,
  onCancel: l
}) {
  const [i, o] = Q.useState("basic"), [u, s] = Q.useState(
    Ll(e)
  ), [f, S] = Q.useState(0), j = Q.useRef(null);
  Q.useEffect(() => {
    s(Ll(e));
  }, [e]), Q.useEffect(() => {
    f > u.items.length - 1 && S(Math.max(u.items.length - 1, 0));
  }, [u.items.length, f]);
  const h = u.items[f], E = (y) => {
    s((w) => Ll(y(w)));
  }, N = (y, w) => {
    E((O) => ({
      ...O,
      styling: {
        ...O.styling,
        [y]: w
      }
    }));
  }, P = (y) => {
    E((w) => ({
      ...w,
      items: w.items.map((O, Me) => Me === f ? y(O) : O)
    }));
  }, d = () => {
    E((y) => {
      const w = [...y.items, kr(y.items.length)];
      return {
        ...y,
        items: xr(w)
      };
    }), S(u.items.length);
  }, a = (y) => {
    E((w) => {
      const O = w.items.filter((Me, G) => G !== y);
      return O.length ? {
        ...w,
        items: xr(O)
      } : {
        ...w,
        items: []
      };
    });
  }, c = () => {
    E((y) => ({
      ...y,
      items: xr(y.items)
    }));
  }, v = () => {
    u.items.length && o("placement");
  }, p = (y, w) => {
    const O = j.current;
    if (!O)
      return;
    S(y), w.preventDefault();
    const { pointerId: Me } = w, G = (De) => {
      const ke = O.getBoundingClientRect(), rt = Pa((De.clientX - ke.left) / ke.width);
      E((St) => ({
        ...St,
        items: St.items.map((kt, bt) => bt === y ? { ...kt, position: rt } : kt)
      }));
    }, H = (De) => {
      De.pointerId === Me && (window.removeEventListener("pointermove", G), window.removeEventListener("pointerup", H));
    };
    window.addEventListener("pointermove", G), window.addEventListener("pointerup", H);
  }, x = {
    basic: /* @__PURE__ */ m.jsxs("div", { className: "studio-page-content", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
        /* @__PURE__ */ m.jsx("label", { htmlFor: "processline-display-name", children: "Display Name" }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            id: "processline-display-name",
            type: "text",
            value: u.displayName,
            onChange: (y) => E((w) => ({
              ...w,
              displayName: y.target.value
            }))
          }
        )
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
        /* @__PURE__ */ m.jsx("label", { htmlFor: "processline-introduction-text", children: "Introduction Text" }),
        /* @__PURE__ */ m.jsx(
          "textarea",
          {
            id: "processline-introduction-text",
            rows: 6,
            value: u.introductionText,
            onChange: (y) => E((w) => ({
              ...w,
              introductionText: y.target.value
            }))
          }
        )
      ] })
    ] }),
    styling: /* @__PURE__ */ m.jsxs("div", { className: "studio-page-content styling-page", children: [
      /* @__PURE__ */ m.jsxs("section", { className: "styling-section", children: [
        /* @__PURE__ */ m.jsx("h3", { children: "Styling of Line Items" }),
        /* @__PURE__ */ m.jsxs("div", { className: "style-grid two-column", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "lineItemTitleColor", children: "Title text color" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "lineItemTitleColor",
                type: "text",
                value: u.styling.lineItemTitleColor,
                onChange: (y) => N("lineItemTitleColor", y.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "lineItemTitleFontSize", children: "Title font size" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "lineItemTitleFontSize",
                type: "number",
                min: 1,
                value: u.styling.lineItemTitleFontSize,
                onChange: (y) => N("lineItemTitleFontSize", Number(y.target.value) || 1)
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "lineItemLabelColor", children: "Label text color" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "lineItemLabelColor",
                type: "text",
                value: u.styling.lineItemLabelColor,
                onChange: (y) => N("lineItemLabelColor", y.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "lineItemLabelFontSize", children: "Label font size" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "lineItemLabelFontSize",
                type: "number",
                min: 1,
                value: u.styling.lineItemLabelFontSize,
                onChange: (y) => N("lineItemLabelFontSize", Number(y.target.value) || 1)
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group single-span", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "highlightColor", children: "Highlight color" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "highlightColor",
                type: "text",
                value: u.styling.highlightColor,
                onChange: (y) => N("highlightColor", y.target.value)
              }
            ),
            /* @__PURE__ */ m.jsx("span", { className: "field-hint", children: "Color of the title, dot, and progress pill when selected." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("section", { className: "styling-section", children: [
        /* @__PURE__ */ m.jsx("h3", { children: "Styling of Cards" }),
        /* @__PURE__ */ m.jsxs("div", { className: "style-grid two-column", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group single-span", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "cardBackgroundColor", children: "Card background color" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "cardBackgroundColor",
                type: "text",
                value: u.styling.cardBackgroundColor,
                onChange: (y) => N("cardBackgroundColor", y.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "cardTitleColor", children: "Title text color" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "cardTitleColor",
                type: "text",
                value: u.styling.cardTitleColor,
                onChange: (y) => N("cardTitleColor", y.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "cardTitleFontSize", children: "Title font size" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "cardTitleFontSize",
                type: "number",
                min: 1,
                value: u.styling.cardTitleFontSize,
                onChange: (y) => N("cardTitleFontSize", Number(y.target.value) || 1)
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "cardDescriptionColor", children: "Description text color" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "cardDescriptionColor",
                type: "text",
                value: u.styling.cardDescriptionColor,
                onChange: (y) => N("cardDescriptionColor", y.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "cardDescriptionFontSize", children: "Description font size" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "cardDescriptionFontSize",
                type: "number",
                min: 1,
                value: u.styling.cardDescriptionFontSize,
                onChange: (y) => N("cardDescriptionFontSize", Number(y.target.value) || 1)
              }
            )
          ] })
        ] })
      ] })
    ] }),
    items: /* @__PURE__ */ m.jsxs("div", { className: "studio-page-content items-page", children: [
      /* @__PURE__ */ m.jsxs("aside", { className: "items-sidebar", children: [
        /* @__PURE__ */ m.jsx("button", { className: "primary-button add-item-button", type: "button", onClick: d, children: "+ Add line item" }),
        /* @__PURE__ */ m.jsx("div", { className: "items-list", children: u.items.map((y, w) => /* @__PURE__ */ m.jsxs(
          "div",
          {
            className: `item-row ${w === f ? "selected" : ""}`,
            children: [
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  className: "item-select-button",
                  onClick: () => S(w),
                  children: y.title || `Item ${w + 1}`
                }
              ),
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  className: "item-delete-button",
                  onClick: () => a(w),
                  "aria-label": `Delete ${y.title || `Item ${w + 1}`}`,
                  children: "🗑"
                }
              )
            ]
          },
          `${y.title}-${y.label}-${y.position}`
        )) })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: "item-editor-panel", children: h ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "lineItemTitle", children: "Title" }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: "lineItemTitle",
              type: "text",
              value: h.title,
              onChange: (y) => P((w) => ({
                ...w,
                title: y.target.value
              }))
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "lineItemLabel", children: "Label" }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: "lineItemLabel",
              type: "text",
              value: h.label,
              onChange: (y) => P((w) => ({
                ...w,
                label: y.target.value
              }))
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "studio-field-group", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "lineItemDescription", children: "Description" }),
          /* @__PURE__ */ m.jsx(
            "textarea",
            {
              id: "lineItemDescription",
              rows: 6,
              value: h.description,
              onChange: (y) => P((w) => ({
                ...w,
                description: y.target.value
              }))
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("fieldset", { className: "radio-field-group", children: [
          /* @__PURE__ */ m.jsx("legend", { children: "Label placement" }),
          /* @__PURE__ */ m.jsxs("label", { htmlFor: `displayAboveLine-${f}`, children: [
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: `displayAboveLine-${f}`,
                type: "radio",
                name: "labelPlacement",
                checked: h.displayAboveLine,
                onChange: () => P((y) => ({
                  ...y,
                  displayAboveLine: !0
                }))
              }
            ),
            "Display above line"
          ] }),
          /* @__PURE__ */ m.jsxs("label", { htmlFor: `displayBelowLine-${f}`, children: [
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: `displayBelowLine-${f}`,
                type: "radio",
                name: "labelPlacement",
                checked: !h.displayAboveLine,
                onChange: () => P((y) => ({
                  ...y,
                  displayAboveLine: !1
                }))
              }
            ),
            "Display below line"
          ] })
        ] })
      ] }) : /* @__PURE__ */ m.jsx("div", { className: "empty-editor-state", children: "Add a line item to begin configuring the process line." }) })
    ] }),
    placement: /* @__PURE__ */ m.jsxs("div", { className: "studio-page-content placement-page", children: [
      /* @__PURE__ */ m.jsx("h3", { children: "Placement of Line Items" }),
      /* @__PURE__ */ m.jsx("p", { className: "placement-copy", children: "Drag items to position them along the line. Use the button below to space them evenly." }),
      /* @__PURE__ */ m.jsx("div", { className: "placement-shell", children: /* @__PURE__ */ m.jsx("div", { ref: j, className: "placement-track", children: mo(u.items).map((y, w) => /* @__PURE__ */ m.jsxs(
        "button",
        {
          type: "button",
          className: `placement-marker ${y.displayAboveLine ? "above" : "below"} ${w === f ? "selected" : ""}`,
          style: { left: `${ja(y.position)}%` },
          onPointerDown: (O) => p(w, O),
          onClick: () => S(w),
          onFocus: () => S(w),
          "aria-label": `Select ${y.title || `Item ${w + 1}`}`,
          "aria-pressed": w === f,
          children: [
            /* @__PURE__ */ m.jsx("span", { className: "placement-node" }),
            /* @__PURE__ */ m.jsx("span", { className: "placement-label", children: y.title || `Item ${w + 1}` })
          ]
        },
        `${y.title}-${y.label}-${y.position}`
      )) }) }),
      /* @__PURE__ */ m.jsxs("section", { className: "student-preview-section", "aria-label": "Student preview", children: [
        /* @__PURE__ */ m.jsx("h4", { className: "student-preview-title", children: "Student preview" }),
        /* @__PURE__ */ m.jsx("div", { className: "student-preview-shell", children: /* @__PURE__ */ m.jsx(
          La,
          {
            configuration: u,
            selectedIndex: f,
            onSelectedIndexChange: S
          }
        ) })
      ] }),
      /* @__PURE__ */ m.jsx("button", { className: "secondary-button evenly-space-button", type: "button", onClick: c, children: "Space items evenly" })
    ] })
  }, g = {
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
      onClick: v
    },
    placement: {
      label: "Save",
      onClick: () => r(u)
    }
  }[i], T = () => {
    i === "styling" ? o("basic") : i === "items" ? o("styling") : i === "placement" && o("items");
  };
  return /* @__PURE__ */ m.jsx("div", { className: "xblock-processline-editor", children: /* @__PURE__ */ m.jsxs("div", { className: "editor-shell", children: [
    /* @__PURE__ */ m.jsx("h2", { className: "editor-title", children: "Editing: Process Line" }),
    x[i],
    n && /* @__PURE__ */ m.jsx("div", { className: "save-error", role: "alert", children: n }),
    /* @__PURE__ */ m.jsxs("div", { className: "editor-actions", children: [
      /* @__PURE__ */ m.jsx(
        "button",
        {
          className: "primary-button",
          type: "button",
          onClick: g.onClick,
          disabled: t || i === "items" && !u.items.length,
          children: t ? "Saving…" : g.label
        }
      ),
      i !== "basic" && /* @__PURE__ */ m.jsx("button", { className: "secondary-button", type: "button", onClick: T, disabled: t, children: "Back" }),
      /* @__PURE__ */ m.jsx("button", { className: "link-button", type: "button", onClick: l, disabled: t, children: "Cancel" })
    ] })
  ] }) });
}
function Qf({
  initialConfiguration: e,
  studioSaveUrl: t,
  runtime: n
}) {
  const [r, l] = Q.useState(e), [i, o] = Q.useState(!1), [u, s] = Q.useState(""), f = () => {
    n.notify("cancel", {});
  }, S = (j) => {
    o(!0), s(""), n.notify("save", { state: "start" }), $.ajax({
      url: t,
      method: "POST",
      data: JSON.stringify(j),
      contentType: "application/json"
    }).done((h) => {
      if ((h == null ? void 0 : h.result) !== "success") {
        s((h == null ? void 0 : h.message) || "Failed to save Process Line configuration."), n.notify("error", {
          title: "Save Error",
          message: (h == null ? void 0 : h.message) || "Failed to save Process Line configuration."
        }), o(!1);
        return;
      }
      l(h.configuration || j), n.notify("save", { state: "end" }), o(!1);
    }).fail(() => {
      s("Failed to save Process Line configuration."), n.notify("error", {
        title: "Save Error",
        message: "Failed to save Process Line configuration."
      }), o(!1);
    });
  };
  return /* @__PURE__ */ m.jsx(
    Hf,
    {
      initialConfiguration: r || Ta(),
      isSaving: i,
      saveError: u,
      onCancel: f,
      onSave: S
    }
  );
}
const Yf = (e) => {
  const t = Ta();
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
}, Xf = (e, t, n) => {
  const r = t && "jquery" in t ? t[0] : t;
  if (!r || !(r instanceof Element)) {
    console.error("Invalid DOM element provided to renderEditor:", t);
    return;
  }
  const l = e.handlerUrl(r, "studio_save");
  Vf.render(
    /* @__PURE__ */ m.jsx(Q.StrictMode, { children: /* @__PURE__ */ m.jsx(
      Qf,
      {
        initialConfiguration: Yf(n),
        studioSaveUrl: l,
        runtime: e
      }
    ) }),
    r
  );
};
export {
  Xf as renderEditor
};
