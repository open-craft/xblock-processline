var Iu = { exports: {} }, Qn = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var mo = Object.getOwnPropertySymbols, La = Object.prototype.hasOwnProperty, Fa = Object.prototype.propertyIsEnumerable;
function Ia(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function Oa() {
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
var Ou = Oa() ? Object.assign : function(e, t) {
  for (var n, r = Ia(e), l, i = 1; i < arguments.length; i++) {
    n = Object(arguments[i]);
    for (var o in n)
      La.call(n, o) && (r[o] = n[o]);
    if (mo) {
      l = mo(n);
      for (var u = 0; u < l.length; u++)
        Fa.call(n, l[u]) && (r[l[u]] = n[l[u]]);
    }
  }
  return r;
}, zu = { exports: {} }, O = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi = Ou, Yt = 60103, Du = 60106;
O.Fragment = 60107;
O.StrictMode = 60108;
O.Profiler = 60114;
var Ru = 60109, Mu = 60110, Uu = 60112;
O.Suspense = 60113;
var $u = 60115, Au = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var ge = Symbol.for;
  Yt = ge("react.element"), Du = ge("react.portal"), O.Fragment = ge("react.fragment"), O.StrictMode = ge("react.strict_mode"), O.Profiler = ge("react.profiler"), Ru = ge("react.provider"), Mu = ge("react.context"), Uu = ge("react.forward_ref"), O.Suspense = ge("react.suspense"), $u = ge("react.memo"), Au = ge("react.lazy");
}
var ho = typeof Symbol == "function" && Symbol.iterator;
function za(e) {
  return e === null || typeof e != "object" ? null : (e = ho && e[ho] || e["@@iterator"], typeof e == "function" ? e : null);
}
function Yn(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Bu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Vu = {};
function Xt(e, t, n) {
  this.props = e, this.context = t, this.refs = Vu, this.updater = n || Bu;
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
  this.props = e, this.context = t, this.refs = Vu, this.updater = n || Bu;
}
var wi = gi.prototype = new Hu();
wi.constructor = gi;
yi(wi, Xt.prototype);
wi.isPureReactComponent = !0;
var Si = { current: null }, Wu = Object.prototype.hasOwnProperty, Qu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yu(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) Wu.call(t, r) && !Qu.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Yt, type: e, key: i, ref: o, props: l, _owner: Si.current };
}
function Da(e, t) {
  return { $$typeof: Yt, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ki(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yt;
}
function Ra(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var vo = /\/+/g;
function ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ra("" + e.key) : t.toString(36);
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
  if (o) return o = e, l = l(o), e = r === "" ? "." + ol(o, 0) : r, Array.isArray(l) ? (n = "", e != null && (n = e.replace(vo, "$&/") + "/"), cr(l, t, n, "", function(d) {
    return d;
  })) : l != null && (ki(l) && (l = Da(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(vo, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Array.isArray(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + ol(i, u);
    o += cr(i, t, n, s, l);
  }
  else if (s = za(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + ol(i, u++), o += cr(i, t, n, s, l);
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
function Ma(e) {
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
var Xu = { current: null };
function ze() {
  var e = Xu.current;
  if (e === null) throw Error(Yn(321));
  return e;
}
var Ua = { ReactCurrentDispatcher: Xu, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: Si, IsSomeRendererActing: { current: !1 }, assign: yi };
O.Children = { map: qn, forEach: function(e, t, n) {
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
O.Component = Xt;
O.PureComponent = gi;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ua;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error(Yn(267, e));
  var r = yi({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Si.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) Wu.call(t, s) && !Qu.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
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
O.createContext = function(e, t) {
  return t === void 0 && (t = null), e = { $$typeof: Mu, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: Ru, _context: e }, e.Consumer = e;
};
O.createElement = Yu;
O.createFactory = function(e) {
  var t = Yu.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: Uu, render: e };
};
O.isValidElement = ki;
O.lazy = function(e) {
  return { $$typeof: Au, _payload: { _status: -1, _result: e }, _init: Ma };
};
O.memo = function(e, t) {
  return { $$typeof: $u, type: e, compare: t === void 0 ? null : t };
};
O.useCallback = function(e, t) {
  return ze().useCallback(e, t);
};
O.useContext = function(e, t) {
  return ze().useContext(e, t);
};
O.useDebugValue = function() {
};
O.useEffect = function(e, t) {
  return ze().useEffect(e, t);
};
O.useImperativeHandle = function(e, t, n) {
  return ze().useImperativeHandle(e, t, n);
};
O.useLayoutEffect = function(e, t) {
  return ze().useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return ze().useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return ze().useReducer(e, t, n);
};
O.useRef = function(e) {
  return ze().useRef(e);
};
O.useState = function(e) {
  return ze().useState(e);
};
O.version = "17.0.2";
zu.exports = O;
var fe = zu.exports;
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $a = fe, Ku = 60103;
Qn.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var yo = Symbol.for;
  Ku = yo("react.element"), Qn.Fragment = yo("react.fragment");
}
var Aa = $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ba = Object.prototype.hasOwnProperty, Va = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gu(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Ba.call(t, r) && !Va.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Ku, type: e, key: i, ref: o, props: l, _owner: Aa.current };
}
Qn.jsx = Gu;
Qn.jsxs = Gu;
Iu.exports = Qn;
var y = Iu.exports, Zu = { exports: {} }, ye = {}, Ju = { exports: {} }, qu = {};
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
    var s = null, d = null, S = function() {
      if (s !== null) try {
        var E = e.unstable_now();
        s(!0, E), s = null;
      } catch (F) {
        throw setTimeout(S, 0), F;
      }
    };
    t = function(E) {
      s !== null ? setTimeout(t, 0, E) : (s = E, setTimeout(S, 0));
    }, n = function(E, F) {
      d = setTimeout(E, F);
    }, r = function() {
      clearTimeout(d);
    }, e.unstable_shouldYield = function() {
      return !1;
    }, l = e.unstable_forceFrameRate = function() {
    };
  } else {
    var P = window.setTimeout, p = window.clearTimeout;
    if (typeof console < "u") {
      var x = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof x != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var _ = !1, N = null, f = -1, a = 5, c = 0;
    e.unstable_shouldYield = function() {
      return e.unstable_now() >= c;
    }, l = function() {
    }, e.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : a = 0 < E ? Math.floor(1e3 / E) : 5;
    };
    var m = new MessageChannel(), h = m.port2;
    m.port1.onmessage = function() {
      if (N !== null) {
        var E = e.unstable_now();
        c = E + a;
        try {
          N(!0, E) ? h.postMessage(null) : (_ = !1, N = null);
        } catch (F) {
          throw h.postMessage(null), F;
        }
      } else _ = !1;
    }, t = function(E) {
      N = E, _ || (_ = !0, h.postMessage(null));
    }, n = function(E, F) {
      f = P(function() {
        E(e.unstable_now());
      }, F);
    }, r = function() {
      p(f), f = -1;
    };
  }
  function j(E, F) {
    var I = E.length;
    E.push(F);
    e: for (; ; ) {
      var V = I - 1 >>> 1, G = E[V];
      if (G !== void 0 && 0 < v(G, F)) E[V] = F, E[I] = G, I = V;
      else break e;
    }
  }
  function k(E) {
    return E = E[0], E === void 0 ? null : E;
  }
  function T(E) {
    var F = E[0];
    if (F !== void 0) {
      var I = E.pop();
      if (I !== F) {
        E[0] = I;
        e: for (var V = 0, G = E.length; V < G; ) {
          var lt = 2 * (V + 1) - 1, it = E[lt], en = lt + 1, Et = E[en];
          if (it !== void 0 && 0 > v(it, I)) Et !== void 0 && 0 > v(Et, it) ? (E[V] = Et, E[en] = I, V = en) : (E[V] = it, E[lt] = I, V = lt);
          else if (Et !== void 0 && 0 > v(Et, I)) E[V] = Et, E[en] = I, V = en;
          else break e;
        }
      }
      return F;
    }
    return null;
  }
  function v(E, F) {
    var I = E.sortIndex - F.sortIndex;
    return I !== 0 ? I : E.id - F.id;
  }
  var g = [], z = [], De = 1, K = null, W = 3, Re = !1, ke = !1, rt = !1;
  function St(E) {
    for (var F = k(z); F !== null; ) {
      if (F.callback === null) T(z);
      else if (F.startTime <= E) T(z), F.sortIndex = F.expirationTime, j(g, F);
      else break;
      F = k(z);
    }
  }
  function kt(E) {
    if (rt = !1, St(E), !ke) if (k(g) !== null) ke = !0, t(bt);
    else {
      var F = k(z);
      F !== null && n(kt, F.startTime - E);
    }
  }
  function bt(E, F) {
    ke = !1, rt && (rt = !1, r()), Re = !0;
    var I = W;
    try {
      for (St(F), K = k(g); K !== null && (!(K.expirationTime > F) || E && !e.unstable_shouldYield()); ) {
        var V = K.callback;
        if (typeof V == "function") {
          K.callback = null, W = K.priorityLevel;
          var G = V(K.expirationTime <= F);
          F = e.unstable_now(), typeof G == "function" ? K.callback = G : K === k(g) && T(g), St(F);
        } else T(g);
        K = k(g);
      }
      if (K !== null) var lt = !0;
      else {
        var it = k(z);
        it !== null && n(kt, it.startTime - F), lt = !1;
      }
      return lt;
    } finally {
      K = null, W = I, Re = !1;
    }
  }
  var ja = l;
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    ke || Re || (ke = !0, t(bt));
  }, e.unstable_getCurrentPriorityLevel = function() {
    return W;
  }, e.unstable_getFirstCallbackNode = function() {
    return k(g);
  }, e.unstable_next = function(E) {
    switch (W) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = W;
    }
    var I = W;
    W = F;
    try {
      return E();
    } finally {
      W = I;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = ja, e.unstable_runWithPriority = function(E, F) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var I = W;
    W = E;
    try {
      return F();
    } finally {
      W = I;
    }
  }, e.unstable_scheduleCallback = function(E, F, I) {
    var V = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? V + I : V) : I = V, E) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = I + G, E = { id: De++, callback: F, priorityLevel: E, startTime: I, expirationTime: G, sortIndex: -1 }, I > V ? (E.sortIndex = I, j(z, E), k(g) === null && E === k(z) && (rt ? r() : rt = !0, n(kt, I - V))) : (E.sortIndex = G, j(g, E), ke || Re || (ke = !0, t(bt))), E;
  }, e.unstable_wrapCallback = function(E) {
    var F = W;
    return function() {
      var I = W;
      W = F;
      try {
        return E.apply(this, arguments);
      } finally {
        W = I;
      }
    };
  };
})(qu);
Ju.exports = qu;
var Ha = Ju.exports;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr = fe, U = Ou, X = Ha;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!Yr) throw Error(w(227));
var bu = /* @__PURE__ */ new Set(), Fn = {};
function vt(e, t) {
  Vt(e, t), Vt(e + "Capture", t);
}
function Vt(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++) bu.add(t[e]);
}
var Oe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wa = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, go = Object.prototype.hasOwnProperty, wo = {}, So = {};
function Qa(e) {
  return go.call(So, e) ? !0 : go.call(wo, e) ? !1 : Wa.test(e) ? So[e] = !0 : (wo[e] = !0, !1);
}
function Ya(e, t, n, r) {
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
function Xa(e, t, n, r) {
  if (t === null || typeof t > "u" || Ya(e, t, n, r)) return !0;
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
function le(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var q = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  q[e] = new le(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  q[t] = new le(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  q[e] = new le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  q[e] = new le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  q[e] = new le(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  q[e] = new le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  q[e] = new le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  q[e] = new le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  q[e] = new le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ei = /[\-:]([a-z])/g;
function xi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ei,
    xi
  );
  q[t] = new le(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ei, xi);
  q[t] = new le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ei, xi);
  q[t] = new le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  q[e] = new le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
q.xlinkHref = new le("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  q[e] = new le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ci(e, t, n, r) {
  var l = q.hasOwnProperty(t) ? q[t] : null, i = l !== null ? l.type === 0 : r ? !1 : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
  i || (Xa(t, n, l, r) && (n = null), r || l === null ? Qa(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = Yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mn = 60103, ut = 60106, Ue = 60107, _i = 60108, wn = 60114, Ni = 60109, Pi = 60110, Xr = 60112, Sn = 60113, xr = 60120, Kr = 60115, Ti = 60116, ji = 60121, Li = 60128, es = 60129, Fi = 60130, Fl = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var Y = Symbol.for;
  mn = Y("react.element"), ut = Y("react.portal"), Ue = Y("react.fragment"), _i = Y("react.strict_mode"), wn = Y("react.profiler"), Ni = Y("react.provider"), Pi = Y("react.context"), Xr = Y("react.forward_ref"), Sn = Y("react.suspense"), xr = Y("react.suspense_list"), Kr = Y("react.memo"), Ti = Y("react.lazy"), ji = Y("react.block"), Y("react.scope"), Li = Y("react.opaque.id"), es = Y("react.debug_trace_mode"), Fi = Y("react.offscreen"), Fl = Y("react.legacy_hidden");
}
var ko = typeof Symbol == "function" && Symbol.iterator;
function tn(e) {
  return e === null || typeof e != "object" ? null : (e = ko && e[ko] || e["@@iterator"], typeof e == "function" ? e : null);
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
function Ka(e) {
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
function It(e) {
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
    case xr:
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
      return It(e.type);
    case ji:
      return It(e._render);
    case Ti:
      t = e._payload, e = e._init;
      try {
        return It(e(t));
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
function ts(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ga(e) {
  var t = ts(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Ga(e));
}
function ns(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ts(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Cr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Il(e, t) {
  var n = t.checked;
  return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Eo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ze(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function rs(e, t) {
  t = t.checked, t != null && Ci(e, "checked", t, !1);
}
function Ol(e, t) {
  rs(e, t);
  var n = Ze(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? zl(e, t.type, n) : t.hasOwnProperty("defaultValue") && zl(e, t.type, Ze(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function xo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function zl(e, t, n) {
  (t !== "number" || Cr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function Za(e) {
  var t = "";
  return Yr.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Dl(e, t) {
  return e = U({ children: void 0 }, t), (t = Za(t.children)) && (e.children = t), e;
}
function Ot(e, t, n, r) {
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
function Rl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Co(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(w(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ze(n) };
}
function ls(e, t) {
  var n = Ze(t.value), r = Ze(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function _o(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var Ml = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function is(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? is(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var tr, os = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== Ml.svg || "innerHTML" in e) e.innerHTML = t;
  else {
    for (tr = tr || document.createElement("div"), tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = tr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function In(e, t) {
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
}, Ja = ["Webkit", "ms", "Moz", "O"];
Object.keys(kn).forEach(function(e) {
  Ja.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), kn[t] = kn[e];
  });
});
function us(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || kn.hasOwnProperty(e) && kn[e] ? ("" + t).trim() : t + "px";
}
function ss(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = us(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var qa = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function $l(e, t) {
  if (t) {
    if (qa[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
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
function Ii(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Bl = null, zt = null, Dt = null;
function No(e) {
  if (e = Kn(e)) {
    if (typeof Bl != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = el(t), Bl(e.stateNode, e.type, t));
  }
}
function as(e) {
  zt ? Dt ? Dt.push(e) : Dt = [e] : zt = e;
}
function cs() {
  if (zt) {
    var e = zt, t = Dt;
    if (Dt = zt = null, No(e), t) for (e = 0; e < t.length; e++) No(t[e]);
  }
}
function Oi(e, t) {
  return e(t);
}
function fs(e, t, n, r, l) {
  return e(t, n, r, l);
}
function zi() {
}
var ds = Oi, st = !1, al = !1;
function Di() {
  (zt !== null || Dt !== null) && (zi(), cs());
}
function ba(e, t, n) {
  if (al) return e(t, n);
  al = !0;
  try {
    return ds(e, t, n);
  } finally {
    al = !1, Di();
  }
}
function On(e, t) {
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
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var Vl = !1;
if (Oe) try {
  var nn = {};
  Object.defineProperty(nn, "passive", { get: function() {
    Vl = !0;
  } }), window.addEventListener("test", nn, nn), window.removeEventListener("test", nn, nn);
} catch {
  Vl = !1;
}
function ec(e, t, n, r, l, i, o, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (S) {
    this.onError(S);
  }
}
var En = !1, _r = null, Nr = !1, Hl = null, tc = { onError: function(e) {
  En = !0, _r = e;
} };
function nc(e, t, n, r, l, i, o, u, s) {
  En = !1, _r = null, ec.apply(tc, arguments);
}
function rc(e, t, n, r, l, i, o, u, s) {
  if (nc.apply(this, arguments), En) {
    if (En) {
      var d = _r;
      En = !1, _r = null;
    } else throw Error(w(198));
    Nr || (Nr = !0, Hl = d);
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
function ps(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Po(e) {
  if (gt(e) !== e) throw Error(w(188));
}
function lc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = gt(e), t === null) throw Error(w(188));
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
        if (i === n) return Po(l), e;
        if (i === r) return Po(l), t;
        i = i.sibling;
      }
      throw Error(w(188));
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
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function ms(e) {
  if (e = lc(e), !e) return null;
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
var hs, Ri, vs, ys, Wl = !1, Ee = [], Ve = null, He = null, We = null, zn = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map(), rn = [], jo = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ql(e, t, n, r, l) {
  return { blockedOn: e, domEventName: t, eventSystemFlags: n | 16, nativeEvent: l, targetContainers: [r] };
}
function Lo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ve = null;
      break;
    case "dragenter":
    case "dragleave":
      He = null;
      break;
    case "mouseover":
    case "mouseout":
      We = null;
      break;
    case "pointerover":
    case "pointerout":
      zn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dn.delete(t.pointerId);
  }
}
function ln(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = Ql(t, n, r, l, i), t !== null && (t = Kn(t), t !== null && Ri(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function ic(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Ve = ln(Ve, e, t, n, r, l), !0;
    case "dragenter":
      return He = ln(He, e, t, n, r, l), !0;
    case "mouseover":
      return We = ln(We, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return zn.set(i, ln(zn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Dn.set(i, ln(Dn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function oc(e) {
  var t = at(e.target);
  if (t !== null) {
    var n = gt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ps(n), t !== null) {
          e.blockedOn = t, ys(e.lanePriority, function() {
            X.unstable_runWithPriority(e.priority, function() {
              vs(n);
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
    if (n !== null) return t = Kn(n), t !== null && Ri(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Fo(e, t, n) {
  fr(e) && n.delete(t);
}
function uc() {
  for (Wl = !1; 0 < Ee.length; ) {
    var e = Ee[0];
    if (e.blockedOn !== null) {
      e = Kn(e.blockedOn), e !== null && hs(e);
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
    e.blockedOn === null && Ee.shift();
  }
  Ve !== null && fr(Ve) && (Ve = null), He !== null && fr(He) && (He = null), We !== null && fr(We) && (We = null), zn.forEach(Fo), Dn.forEach(Fo);
}
function on(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Wl || (Wl = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, uc)));
}
function gs(e) {
  function t(l) {
    return on(l, e);
  }
  if (0 < Ee.length) {
    on(Ee[0], e);
    for (var n = 1; n < Ee.length; n++) {
      var r = Ee[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ve !== null && on(Ve, e), He !== null && on(He, e), We !== null && on(We, e), zn.forEach(t), Dn.forEach(t), n = 0; n < rn.length; n++) r = rn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rn.length && (n = rn[0], n.blockedOn === null); ) oc(n), n.blockedOn === null && rn.shift();
}
function nr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Nt = { animationend: nr("Animation", "AnimationEnd"), animationiteration: nr("Animation", "AnimationIteration"), animationstart: nr("Animation", "AnimationStart"), transitionend: nr("Transition", "TransitionEnd") }, cl = {}, ws = {};
Oe && (ws = document.createElement("div").style, "AnimationEvent" in window || (delete Nt.animationend.animation, delete Nt.animationiteration.animation, delete Nt.animationstart.animation), "TransitionEvent" in window || delete Nt.transitionend.transition);
function Gr(e) {
  if (cl[e]) return cl[e];
  if (!Nt[e]) return e;
  var t = Nt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ws) return cl[e] = t[n];
  return e;
}
var Ss = Gr("animationend"), ks = Gr("animationiteration"), Es = Gr("animationstart"), xs = Gr("transitionend"), Cs = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), sc = [
  "abort",
  "abort",
  Ss,
  "animationEnd",
  ks,
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
  xs,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Ui(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n], l = e[n + 1];
    l = "on" + (l[0].toUpperCase() + l.slice(1)), Mi.set(r, t), Cs.set(r, l), vt(l, [r]);
  }
}
var ac = X.unstable_now;
ac();
var D = 8;
function Ct(e) {
  if (1 & e) return D = 15, 1;
  if (2 & e) return D = 14, 2;
  if (4 & e) return D = 13, 4;
  var t = 24 & e;
  return t !== 0 ? (D = 12, t) : e & 32 ? (D = 11, 32) : (t = 192 & e, t !== 0 ? (D = 10, t) : e & 256 ? (D = 9, 256) : (t = 3584 & e, t !== 0 ? (D = 8, t) : e & 4096 ? (D = 7, 4096) : (t = 4186112 & e, t !== 0 ? (D = 6, t) : (t = 62914560 & e, t !== 0 ? (D = 5, t) : e & 67108864 ? (D = 4, 67108864) : e & 134217728 ? (D = 3, 134217728) : (t = 805306368 & e, t !== 0 ? (D = 2, t) : 1073741824 & e ? (D = 1, 1073741824) : (D = 8, e))))));
}
function cc(e) {
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
function fc(e) {
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
      throw Error(w(358, e));
  }
}
function Rn(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return D = 0;
  var r = 0, l = 0, i = e.expiredLanes, o = e.suspendedLanes, u = e.pingedLanes;
  if (i !== 0) r = i, l = D = 15;
  else if (i = n & 134217727, i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = Ct(s), l = D) : (u &= i, u !== 0 && (r = Ct(u), l = D));
  } else i = n & ~o, i !== 0 ? (r = Ct(i), l = D) : u !== 0 && (r = Ct(u), l = D);
  if (r === 0) return 0;
  if (r = 31 - Je(r), r = n & ((0 > r ? 0 : 1 << r) << 1) - 1, t !== 0 && t !== r && !(t & o)) {
    if (Ct(t), l <= D) return t;
    D = l;
  }
  if (t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Je(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function _s(e) {
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
  throw Error(w(358, e));
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
var Je = Math.clz32 ? Math.clz32 : mc, dc = Math.log, pc = Math.LN2;
function mc(e) {
  return e === 0 ? 32 : 31 - (dc(e) / pc | 0) | 0;
}
var hc = X.unstable_UserBlockingPriority, vc = X.unstable_runWithPriority, dr = !0;
function yc(e, t, n, r) {
  st || zi();
  var l = $i, i = st;
  st = !0;
  try {
    fs(l, e, t, n, r);
  } finally {
    (st = i) || Di();
  }
}
function gc(e, t, n, r) {
  vc(hc, $i.bind(null, e, t, n, r));
}
function $i(e, t, n, r) {
  if (dr) {
    var l;
    if ((l = (t & 4) === 0) && 0 < Ee.length && -1 < jo.indexOf(e)) e = Ql(null, e, t, n, r), Ee.push(e);
    else {
      var i = Ai(e, t, n, r);
      if (i === null) l && Lo(e, r);
      else {
        if (l) {
          if (-1 < jo.indexOf(e)) {
            e = Ql(i, e, t, n, r), Ee.push(e);
            return;
          }
          if (ic(i, e, t, n, r)) return;
          Lo(e, r);
        }
        Ms(e, t, r, null, n);
      }
    }
  }
}
function Ai(e, t, n, r) {
  var l = Ii(r);
  if (l = at(l), l !== null) {
    var i = gt(l);
    if (i === null) l = null;
    else {
      var o = i.tag;
      if (o === 13) {
        if (l = ps(i), l !== null) return l;
        l = null;
      } else if (o === 3) {
        if (i.stateNode.hydrate) return i.tag === 3 ? i.stateNode.containerInfo : null;
        l = null;
      } else i !== l && (l = null);
    }
  }
  return Ms(e, t, r, l, n), null;
}
var $e = null, Bi = null, pr = null;
function Ns() {
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
function Io() {
  return !1;
}
function ce(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? rr : Io, this.isPropagationStopped = Io, this;
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
}, defaultPrevented: 0, isTrusted: 0 }, Vi = ce(Kt), Xn = U({}, Kt, { view: 0, detail: 0 }), wc = ce(Xn), dl, pl, un, Jr = U({}, Xn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Hi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== un && (un && e.type === "mousemove" ? (dl = e.screenX - un.screenX, pl = e.screenY - un.screenY) : pl = dl = 0, un = e), dl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : pl;
} }), Oo = ce(Jr), Sc = U({}, Jr, { dataTransfer: 0 }), kc = ce(Sc), Ec = U({}, Xn, { relatedTarget: 0 }), ml = ce(Ec), xc = U({}, Kt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cc = ce(xc), _c = U({}, Kt, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Nc = ce(_c), Pc = U({}, Kt, { data: 0 }), zo = ce(Pc), Tc = {
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
}, jc = {
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
}, Lc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Fc(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lc[e]) ? !!t[e] : !1;
}
function Hi() {
  return Fc;
}
var Ic = U({}, Xn, { key: function(e) {
  if (e.key) {
    var t = Tc[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? jc[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Hi, charCode: function(e) {
  return e.type === "keypress" ? mr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Oc = ce(Ic), zc = U({}, Jr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Do = ce(zc), Dc = U({}, Xn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Hi }), Rc = ce(Dc), Mc = U({}, Kt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Uc = ce(Mc), $c = U({}, Jr, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ac = ce($c), Bc = [9, 13, 27, 32], Wi = Oe && "CompositionEvent" in window, xn = null;
Oe && "documentMode" in document && (xn = document.documentMode);
var Vc = Oe && "TextEvent" in window && !xn, Ps = Oe && (!Wi || xn && 8 < xn && 11 >= xn), Ro = " ", Mo = !1;
function Ts(e, t) {
  switch (e) {
    case "keyup":
      return Bc.indexOf(t.keyCode) !== -1;
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
function js(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Pt = !1;
function Hc(e, t) {
  switch (e) {
    case "compositionend":
      return js(t);
    case "keypress":
      return t.which !== 32 ? null : (Mo = !0, Ro);
    case "textInput":
      return e = t.data, e === Ro && Mo ? null : e;
    default:
      return null;
  }
}
function Wc(e, t) {
  if (Pt) return e === "compositionend" || !Wi && Ts(e, t) ? (e = Ns(), pr = Bi = $e = null, Pt = !1, e) : null;
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
      return Ps && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Uo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qc[e.type] : t === "textarea";
}
function Ls(e, t, n, r) {
  as(r), t = Tr(t, "onChange"), 0 < t.length && (n = new Vi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Cn = null, Mn = null;
function Yc(e) {
  zs(e, 0);
}
function qr(e) {
  var t = jt(e);
  if (ns(t)) return e;
}
function Xc(e, t) {
  if (e === "change") return t;
}
var Fs = !1;
if (Oe) {
  var hl;
  if (Oe) {
    var vl = "oninput" in document;
    if (!vl) {
      var $o = document.createElement("div");
      $o.setAttribute("oninput", "return;"), vl = typeof $o.oninput == "function";
    }
    hl = vl;
  } else hl = !1;
  Fs = hl && (!document.documentMode || 9 < document.documentMode);
}
function Ao() {
  Cn && (Cn.detachEvent("onpropertychange", Is), Mn = Cn = null);
}
function Is(e) {
  if (e.propertyName === "value" && qr(Mn)) {
    var t = [];
    if (Ls(t, Mn, e, Ii(e)), e = Yc, st) e(t);
    else {
      st = !0;
      try {
        Oi(e, t);
      } finally {
        st = !1, Di();
      }
    }
  }
}
function Kc(e, t, n) {
  e === "focusin" ? (Ao(), Cn = t, Mn = n, Cn.attachEvent("onpropertychange", Is)) : e === "focusout" && Ao();
}
function Gc(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return qr(Mn);
}
function Zc(e, t) {
  if (e === "click") return qr(t);
}
function Jc(e, t) {
  if (e === "input" || e === "change") return qr(t);
}
function qc(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var de = typeof Object.is == "function" ? Object.is : qc, bc = Object.prototype.hasOwnProperty;
function Un(e, t) {
  if (de(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) if (!bc.call(t, n[r]) || !de(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function Bo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vo(e, t) {
  var n = Bo(e);
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
    n = Bo(n);
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
var ef = Oe && "documentMode" in document && 11 >= document.documentMode, Tt = null, Xl = null, _n = null, Kl = !1;
function Wo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Kl || Tt == null || Tt !== Cr(r) || (r = Tt, "selectionStart" in r && Yl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _n && Un(_n, r) || (_n = r, r = Tr(Xl, "onSelect"), 0 < r.length && (t = new Vi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Tt)));
}
Ui(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0
);
Ui("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Ui(sc, 2);
for (var Qo = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), yl = 0; yl < Qo.length; yl++) Mi.set(Qo[yl], 0);
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
var vn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), tf = new Set("cancel close invalid load scroll toggle".split(" ").concat(vn));
function Yo(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, rc(r, t, void 0, e), e.currentTarget = null;
}
function zs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, d = u.currentTarget;
        if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Yo(l, u, d), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, d = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Yo(l, u, d), i = s;
      }
    }
  }
  if (Nr) throw e = Hl, Nr = !1, Hl = null, e;
}
function R(e, t) {
  var n = $s(t), r = e + "__bubble";
  n.has(r) || (Rs(t, e, 2, !1), n.add(r));
}
var Xo = "_reactListening" + Math.random().toString(36).slice(2);
function Ds(e) {
  e[Xo] || (e[Xo] = !0, bu.forEach(function(t) {
    tf.has(t) || Ko(t, !1, e, null), Ko(t, !0, e, null);
  }));
}
function Ko(e, t, n, r) {
  var l = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, i = n;
  e === "selectionchange" && n.nodeType !== 9 && (i = n.ownerDocument);
  var o = $s(i), u = e + "__" + (t ? "capture" : "bubble");
  o.has(u) || (t && (l |= 4), Rs(i, e, l, t), o.add(u));
}
function Rs(e, t, n, r) {
  var l = Mi.get(t);
  switch (l === void 0 ? 2 : l) {
    case 0:
      l = yc;
      break;
    case 1:
      l = gc;
      break;
    default:
      l = $i;
  }
  n = l.bind(null, t, n, e), l = void 0, !Vl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Ms(e, t, n, r, l) {
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
  ba(function() {
    var d = i, S = Ii(n), P = [];
    e: {
      var p = Cs.get(e);
      if (p !== void 0) {
        var x = Vi, _ = e;
        switch (e) {
          case "keypress":
            if (mr(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Oc;
            break;
          case "focusin":
            _ = "focus", x = ml;
            break;
          case "focusout":
            _ = "blur", x = ml;
            break;
          case "beforeblur":
          case "afterblur":
            x = ml;
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
            x = Oo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = kc;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Rc;
            break;
          case Ss:
          case ks:
          case Es:
            x = Cc;
            break;
          case xs:
            x = Uc;
            break;
          case "scroll":
            x = wc;
            break;
          case "wheel":
            x = Ac;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Nc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Do;
        }
        var N = (t & 4) !== 0, f = !N && e === "scroll", a = N ? p !== null ? p + "Capture" : null : p;
        N = [];
        for (var c = d, m; c !== null; ) {
          m = c;
          var h = m.stateNode;
          if (m.tag === 5 && h !== null && (m = h, a !== null && (h = On(c, a), h != null && N.push($n(c, h, m)))), f) break;
          c = c.return;
        }
        0 < N.length && (p = new x(p, _, null, n, S), P.push({ event: p, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", p && !(t & 16) && (_ = n.relatedTarget || n.fromElement) && (at(_) || _[Gt])) break e;
        if ((x || p) && (p = S.window === S ? S : (p = S.ownerDocument) ? p.defaultView || p.parentWindow : window, x ? (_ = n.relatedTarget || n.toElement, x = d, _ = _ ? at(_) : null, _ !== null && (f = gt(_), _ !== f || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (x = null, _ = d), x !== _)) {
          if (N = Oo, h = "onMouseLeave", a = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (N = Do, h = "onPointerLeave", a = "onPointerEnter", c = "pointer"), f = x == null ? p : jt(x), m = _ == null ? p : jt(_), p = new N(h, c + "leave", x, n, S), p.target = f, p.relatedTarget = m, h = null, at(S) === d && (N = new N(a, c + "enter", _, n, S), N.target = m, N.relatedTarget = f, h = N), f = h, x && _) t: {
            for (N = x, a = _, c = 0, m = N; m; m = xt(m)) c++;
            for (m = 0, h = a; h; h = xt(h)) m++;
            for (; 0 < c - m; ) N = xt(N), c--;
            for (; 0 < m - c; ) a = xt(a), m--;
            for (; c--; ) {
              if (N === a || a !== null && N === a.alternate) break t;
              N = xt(N), a = xt(a);
            }
            N = null;
          }
          else N = null;
          x !== null && Go(P, p, x, N, !1), _ !== null && f !== null && Go(P, f, _, N, !0);
        }
      }
      e: {
        if (p = d ? jt(d) : window, x = p.nodeName && p.nodeName.toLowerCase(), x === "select" || x === "input" && p.type === "file") var j = Xc;
        else if (Uo(p)) if (Fs) j = Jc;
        else {
          j = Gc;
          var k = Kc;
        }
        else (x = p.nodeName) && x.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (j = Zc);
        if (j && (j = j(e, d))) {
          Ls(P, j, n, S);
          break e;
        }
        k && k(e, p, d), e === "focusout" && (k = p._wrapperState) && k.controlled && p.type === "number" && zl(p, "number", p.value);
      }
      switch (k = d ? jt(d) : window, e) {
        case "focusin":
          (Uo(k) || k.contentEditable === "true") && (Tt = k, Xl = d, _n = null);
          break;
        case "focusout":
          _n = Xl = Tt = null;
          break;
        case "mousedown":
          Kl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Kl = !1, Wo(P, n, S);
          break;
        case "selectionchange":
          if (ef) break;
        case "keydown":
        case "keyup":
          Wo(P, n, S);
      }
      var T;
      if (Wi) e: {
        switch (e) {
          case "compositionstart":
            var v = "onCompositionStart";
            break e;
          case "compositionend":
            v = "onCompositionEnd";
            break e;
          case "compositionupdate":
            v = "onCompositionUpdate";
            break e;
        }
        v = void 0;
      }
      else Pt ? Ts(e, n) && (v = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (v = "onCompositionStart");
      v && (Ps && n.locale !== "ko" && (Pt || v !== "onCompositionStart" ? v === "onCompositionEnd" && Pt && (T = Ns()) : ($e = S, Bi = "value" in $e ? $e.value : $e.textContent, Pt = !0)), k = Tr(d, v), 0 < k.length && (v = new zo(v, e, null, n, S), P.push({ event: v, listeners: k }), T ? v.data = T : (T = js(n), T !== null && (v.data = T)))), (T = Vc ? Hc(e, n) : Wc(e, n)) && (d = Tr(d, "onBeforeInput"), 0 < d.length && (S = new zo(
        "onBeforeInput",
        "beforeinput",
        null,
        n,
        S
      ), P.push({ event: S, listeners: d }), S.data = T));
    }
    zs(P, t);
  });
}
function $n(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Tr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = On(e, n), i != null && r.unshift($n(e, i, l)), i = On(e, t), i != null && r.push($n(e, i, l))), e = e.return;
  }
  return r;
}
function xt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Go(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && d !== null && (u = d, l ? (s = On(n, i), s != null && o.unshift($n(n, s, u))) : l || (s = On(n, i), s != null && o.push($n(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
function jr() {
}
var gl = null, wl = null;
function Us(e, t) {
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
var Zo = typeof setTimeout == "function" ? setTimeout : void 0, nf = typeof clearTimeout == "function" ? clearTimeout : void 0;
function Qi(e) {
  e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
}
function Rt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function Jo(e) {
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
function rf(e) {
  return { $$typeof: Li, toString: e, valueOf: e };
}
var br = Math.random().toString(36).slice(2), Ae = "__reactFiber$" + br, Lr = "__reactProps$" + br, Gt = "__reactContainer$" + br, qo = "__reactEvents$" + br;
function at(e) {
  var t = e[Ae];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Gt] || n[Ae]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Jo(e); e !== null; ) {
        if (n = e[Ae]) return n;
        e = Jo(e);
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
function jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function el(e) {
  return e[Lr] || null;
}
function $s(e) {
  var t = e[qo];
  return t === void 0 && (t = e[qo] = /* @__PURE__ */ new Set()), t;
}
var Zl = [], Lt = -1;
function tt(e) {
  return { current: e };
}
function M(e) {
  0 > Lt || (e.current = Zl[Lt], Zl[Lt] = null, Lt--);
}
function B(e, t) {
  Lt++, Zl[Lt] = e.current, e.current = t;
}
var qe = {}, ne = tt(qe), ue = tt(!1), pt = qe;
function Ht(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qe;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function se(e) {
  return e = e.childContextTypes, e != null;
}
function Fr() {
  M(ue), M(ne);
}
function bo(e, t, n) {
  if (ne.current !== qe) throw Error(w(168));
  B(ne, t), B(ue, n);
}
function As(e, t, n) {
  var r = e.stateNode;
  if (e = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in e)) throw Error(w(108, It(t) || "Unknown", l));
  return U({}, n, r);
}
function hr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qe, pt = ne.current, B(ne, e), B(ue, ue.current), !0;
}
function eu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = As(e, t, pt), r.__reactInternalMemoizedMergedChildContext = e, M(ue), M(ne), B(ne, e)) : M(ue), B(ue, n);
}
var Yi = null, dt = null, lf = X.unstable_runWithPriority, Xi = X.unstable_scheduleCallback, Jl = X.unstable_cancelCallback, of = X.unstable_shouldYield, tu = X.unstable_requestPaint, ql = X.unstable_now, uf = X.unstable_getCurrentPriorityLevel, tl = X.unstable_ImmediatePriority, Bs = X.unstable_UserBlockingPriority, Vs = X.unstable_NormalPriority, Hs = X.unstable_LowPriority, Ws = X.unstable_IdlePriority, kl = {}, sf = tu !== void 0 ? tu : function() {
}, Te = null, vr = null, El = !1, nu = ql(), ee = 1e4 > nu ? ql : function() {
  return ql() - nu;
};
function Wt() {
  switch (uf()) {
    case tl:
      return 99;
    case Bs:
      return 98;
    case Vs:
      return 97;
    case Hs:
      return 96;
    case Ws:
      return 95;
    default:
      throw Error(w(332));
  }
}
function Qs(e) {
  switch (e) {
    case 99:
      return tl;
    case 98:
      return Bs;
    case 97:
      return Vs;
    case 96:
      return Hs;
    case 95:
      return Ws;
    default:
      throw Error(w(332));
  }
}
function mt(e, t) {
  return e = Qs(e), lf(e, t);
}
function An(e, t, n) {
  return e = Qs(e), Xi(e, t, n);
}
function Pe() {
  if (vr !== null) {
    var e = vr;
    vr = null, Jl(e);
  }
  Ys();
}
function Ys() {
  if (!El && Te !== null) {
    El = !0;
    var e = 0;
    try {
      var t = Te;
      mt(99, function() {
        for (; e < t.length; e++) {
          var n = t[e];
          do
            n = n(!0);
          while (n !== null);
        }
      }), Te = null;
    } catch (n) {
      throw Te !== null && (Te = Te.slice(e + 1)), Xi(tl, Pe), n;
    } finally {
      El = !1;
    }
  }
}
var af = yt.ReactCurrentBatchConfig;
function we(e, t) {
  if (e && e.defaultProps) {
    t = U({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ir = tt(null), Or = null, Ft = null, zr = null;
function Ki() {
  zr = Ft = Or = null;
}
function Gi(e) {
  var t = Ir.current;
  M(Ir), e.type._context._currentValue = t;
}
function Xs(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else e.childLanes |= t, n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function Mt(e, t) {
  Or = e, zr = Ft = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function he(e, t) {
  if (zr !== e && t !== !1 && t !== 0)
    if ((typeof t != "number" || t === 1073741823) && (zr = e, t = 1073741823), t = { context: e, observedBits: t, next: null }, Ft === null) {
      if (Or === null) throw Error(w(308));
      Ft = t, Or.dependencies = { lanes: 0, firstContext: t, responders: null };
    } else Ft = Ft.next = t;
  return e._currentValue;
}
var Me = !1;
function Zi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function Ks(e, t) {
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
function ru(e, t) {
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
  Me = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, d = s.next;
    s.next = null, o === null ? i = d : o.next = d, o = s;
    var S = e.alternate;
    if (S !== null) {
      S = S.updateQueue;
      var P = S.lastBaseUpdate;
      P !== o && (P === null ? S.firstBaseUpdate = d : P.next = d, S.lastBaseUpdate = s);
    }
  }
  if (i !== null) {
    P = l.baseState, o = 0, S = d = s = null;
    do {
      u = i.lane;
      var p = i.eventTime;
      if ((r & u) === u) {
        S !== null && (S = S.next = {
          eventTime: p,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var x = e, _ = i;
          switch (u = t, p = n, _.tag) {
            case 1:
              if (x = _.payload, typeof x == "function") {
                P = x.call(p, P, u);
                break e;
              }
              P = x;
              break e;
            case 3:
              x.flags = x.flags & -4097 | 64;
            case 0:
              if (x = _.payload, u = typeof x == "function" ? x.call(p, P, u) : x, u == null) break e;
              P = U({}, P, u);
              break e;
            case 2:
              Me = !0;
          }
        }
        i.callback !== null && (e.flags |= 32, u = l.effects, u === null ? l.effects = [i] : u.push(i));
      } else p = { eventTime: p, lane: u, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, S === null ? (d = S = p, s = P) : S = S.next = p, o |= u;
      if (i = i.next, i === null) {
        if (u = l.shared.pending, u === null) break;
        i = u.next, u.next = null, l.lastBaseUpdate = u, l.shared.pending = null;
      }
    } while (!0);
    S === null && (s = P), l.baseState = s, l.firstBaseUpdate = d, l.lastBaseUpdate = S, Zn |= o, e.lanes = o, e.memoizedState = P;
  }
}
function lu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(w(191, l));
      l.call(r);
    }
  }
}
var Gs = new Yr.Component().refs;
function Dr(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var nl = { isMounted: function(e) {
  return (e = e._reactInternals) ? gt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = Xe(e), i = Qe(r, l);
  i.payload = t, n != null && (i.callback = n), Ye(e, i), Ke(e, l, r);
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = Xe(e), i = Qe(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), Ye(e, i), Ke(e, l, r);
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ae(), r = Xe(e), l = Qe(n, r);
  l.tag = 2, t != null && (l.callback = t), Ye(e, l), Ke(e, r, n);
} };
function iu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Un(n, r) || !Un(l, i) : !0;
}
function Zs(e, t, n) {
  var r = !1, l = qe, i = t.contextType;
  return typeof i == "object" && i !== null ? i = he(i) : (l = se(t) ? pt : ne.current, r = t.contextTypes, i = (r = r != null) ? Ht(e, l) : qe), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = nl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ou(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nl.enqueueReplaceState(t, t.state, null);
}
function bl(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = Gs, Zi(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = he(i) : (i = se(t) ? pt : ne.current, l.context = Ht(e, i)), Bn(e, n, l, r), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Dr(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && nl.enqueueReplaceState(l, l.state, null), Bn(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4);
}
var lr = Array.isArray;
function sn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
        var o = r.refs;
        o === Gs && (o = r.refs = {}), i === null ? delete o[l] : o[l] = i;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function ir(e, t) {
  if (e.type !== "textarea") throw Error(w(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t));
}
function Js(e) {
  function t(f, a) {
    if (e) {
      var c = f.lastEffect;
      c !== null ? (c.nextEffect = a, f.lastEffect = a) : f.firstEffect = f.lastEffect = a, a.nextEffect = null, a.flags = 8;
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = et(f, a), f.index = 0, f.sibling = null, f;
  }
  function i(f, a, c) {
    return f.index = c, e ? (c = f.alternate, c !== null ? (c = c.index, c < a ? (f.flags = 2, a) : c) : (f.flags = 2, a)) : a;
  }
  function o(f) {
    return e && f.alternate === null && (f.flags = 2), f;
  }
  function u(f, a, c, m) {
    return a === null || a.tag !== 6 ? (a = Pl(c, f.mode, m), a.return = f, a) : (a = l(a, c), a.return = f, a);
  }
  function s(f, a, c, m) {
    return a !== null && a.elementType === c.type ? (m = l(a, c.props), m.ref = sn(f, a, c), m.return = f, m) : (m = Sr(c.type, c.key, c.props, null, f.mode, m), m.ref = sn(f, a, c), m.return = f, m);
  }
  function d(f, a, c, m) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== c.containerInfo || a.stateNode.implementation !== c.implementation ? (a = Tl(c, f.mode, m), a.return = f, a) : (a = l(a, c.children || []), a.return = f, a);
  }
  function S(f, a, c, m, h) {
    return a === null || a.tag !== 7 ? (a = Bt(c, f.mode, m, h), a.return = f, a) : (a = l(a, c), a.return = f, a);
  }
  function P(f, a, c) {
    if (typeof a == "string" || typeof a == "number") return a = Pl("" + a, f.mode, c), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case mn:
          return c = Sr(a.type, a.key, a.props, null, f.mode, c), c.ref = sn(f, null, a), c.return = f, c;
        case ut:
          return a = Tl(a, f.mode, c), a.return = f, a;
      }
      if (lr(a) || tn(a)) return a = Bt(
        a,
        f.mode,
        c,
        null
      ), a.return = f, a;
      ir(f, a);
    }
    return null;
  }
  function p(f, a, c, m) {
    var h = a !== null ? a.key : null;
    if (typeof c == "string" || typeof c == "number") return h !== null ? null : u(f, a, "" + c, m);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case mn:
          return c.key === h ? c.type === Ue ? S(f, a, c.props.children, m, h) : s(f, a, c, m) : null;
        case ut:
          return c.key === h ? d(f, a, c, m) : null;
      }
      if (lr(c) || tn(c)) return h !== null ? null : S(f, a, c, m, null);
      ir(f, c);
    }
    return null;
  }
  function x(f, a, c, m, h) {
    if (typeof m == "string" || typeof m == "number") return f = f.get(c) || null, u(a, f, "" + m, h);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case mn:
          return f = f.get(m.key === null ? c : m.key) || null, m.type === Ue ? S(a, f, m.props.children, h, m.key) : s(a, f, m, h);
        case ut:
          return f = f.get(m.key === null ? c : m.key) || null, d(a, f, m, h);
      }
      if (lr(m) || tn(m)) return f = f.get(c) || null, S(a, f, m, h, null);
      ir(a, m);
    }
    return null;
  }
  function _(f, a, c, m) {
    for (var h = null, j = null, k = a, T = a = 0, v = null; k !== null && T < c.length; T++) {
      k.index > T ? (v = k, k = null) : v = k.sibling;
      var g = p(f, k, c[T], m);
      if (g === null) {
        k === null && (k = v);
        break;
      }
      e && k && g.alternate === null && t(f, k), a = i(g, a, T), j === null ? h = g : j.sibling = g, j = g, k = v;
    }
    if (T === c.length) return n(f, k), h;
    if (k === null) {
      for (; T < c.length; T++) k = P(f, c[T], m), k !== null && (a = i(k, a, T), j === null ? h = k : j.sibling = k, j = k);
      return h;
    }
    for (k = r(f, k); T < c.length; T++) v = x(k, f, T, c[T], m), v !== null && (e && v.alternate !== null && k.delete(v.key === null ? T : v.key), a = i(v, a, T), j === null ? h = v : j.sibling = v, j = v);
    return e && k.forEach(function(z) {
      return t(f, z);
    }), h;
  }
  function N(f, a, c, m) {
    var h = tn(c);
    if (typeof h != "function") throw Error(w(150));
    if (c = h.call(c), c == null) throw Error(w(151));
    for (var j = h = null, k = a, T = a = 0, v = null, g = c.next(); k !== null && !g.done; T++, g = c.next()) {
      k.index > T ? (v = k, k = null) : v = k.sibling;
      var z = p(f, k, g.value, m);
      if (z === null) {
        k === null && (k = v);
        break;
      }
      e && k && z.alternate === null && t(f, k), a = i(z, a, T), j === null ? h = z : j.sibling = z, j = z, k = v;
    }
    if (g.done) return n(f, k), h;
    if (k === null) {
      for (; !g.done; T++, g = c.next()) g = P(f, g.value, m), g !== null && (a = i(g, a, T), j === null ? h = g : j.sibling = g, j = g);
      return h;
    }
    for (k = r(f, k); !g.done; T++, g = c.next()) g = x(k, f, T, g.value, m), g !== null && (e && g.alternate !== null && k.delete(g.key === null ? T : g.key), a = i(g, a, T), j === null ? h = g : j.sibling = g, j = g);
    return e && k.forEach(function(De) {
      return t(f, De);
    }), h;
  }
  return function(f, a, c, m) {
    var h = typeof c == "object" && c !== null && c.type === Ue && c.key === null;
    h && (c = c.props.children);
    var j = typeof c == "object" && c !== null;
    if (j) switch (c.$$typeof) {
      case mn:
        e: {
          for (j = c.key, h = a; h !== null; ) {
            if (h.key === j) {
              switch (h.tag) {
                case 7:
                  if (c.type === Ue) {
                    n(f, h.sibling), a = l(h, c.props.children), a.return = f, f = a;
                    break e;
                  }
                  break;
                default:
                  if (h.elementType === c.type) {
                    n(f, h.sibling), a = l(h, c.props), a.ref = sn(f, h, c), a.return = f, f = a;
                    break e;
                  }
              }
              n(f, h);
              break;
            } else t(f, h);
            h = h.sibling;
          }
          c.type === Ue ? (a = Bt(c.props.children, f.mode, m, c.key), a.return = f, f = a) : (m = Sr(c.type, c.key, c.props, null, f.mode, m), m.ref = sn(f, a, c), m.return = f, f = m);
        }
        return o(f);
      case ut:
        e: {
          for (h = c.key; a !== null; ) {
            if (a.key === h) if (a.tag === 4 && a.stateNode.containerInfo === c.containerInfo && a.stateNode.implementation === c.implementation) {
              n(f, a.sibling), a = l(a, c.children || []), a.return = f, f = a;
              break e;
            } else {
              n(f, a);
              break;
            }
            else t(f, a);
            a = a.sibling;
          }
          a = Tl(c, f.mode, m), a.return = f, f = a;
        }
        return o(f);
    }
    if (typeof c == "string" || typeof c == "number") return c = "" + c, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, c), a.return = f, f = a) : (n(f, a), a = Pl(c, f.mode, m), a.return = f, f = a), o(f);
    if (lr(c)) return _(f, a, c, m);
    if (tn(c)) return N(f, a, c, m);
    if (j && ir(f, c), typeof c > "u" && !h) switch (f.tag) {
      case 1:
      case 22:
      case 0:
      case 11:
      case 15:
        throw Error(w(152, It(f.type) || "Component"));
    }
    return n(f, a);
  };
}
var Rr = Js(!0), qs = Js(!1), Gn = {}, _e = tt(Gn), Vn = tt(Gn), Hn = tt(Gn);
function ct(e) {
  if (e === Gn) throw Error(w(174));
  return e;
}
function ei(e, t) {
  switch (B(Hn, t), B(Vn, e), B(_e, Gn), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ul(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ul(t, e);
  }
  M(_e), B(_e, t);
}
function Qt() {
  M(_e), M(Vn), M(Hn);
}
function uu(e) {
  ct(Hn.current);
  var t = ct(_e.current), n = Ul(t, e.type);
  t !== n && (B(Vn, e), B(_e, n));
}
function Ji(e) {
  Vn.current === e && (M(_e), M(Vn));
}
var A = tt(0);
function Mr(e) {
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
function bs(e, t) {
  var n = pe(5, null, null, 0);
  n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
}
function su(e, t) {
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
      if (!su(e, t)) {
        if (t = Rt(n.nextSibling), !t || !su(e, t)) {
          e.flags = e.flags & -1025 | 2, Ne = !1, Le = e;
          return;
        }
        bs(Le, n);
      }
      Le = e, Be = Rt(t.firstChild);
    } else e.flags = e.flags & -1025 | 2, Ne = !1, Le = e;
  }
}
function au(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Le = e;
}
function or(e) {
  if (e !== Le) return !1;
  if (!Ne) return au(e), Ne = !0, !1;
  var t = e.type;
  if (e.tag !== 5 || t !== "head" && t !== "body" && !Gl(t, e.memoizedProps)) for (t = Be; t; ) bs(e, t), t = Rt(t.nextSibling);
  if (au(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = Le ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function xl() {
  Be = Le = null, Ne = !1;
}
var Ut = [];
function qi() {
  for (var e = 0; e < Ut.length; e++) Ut[e]._workInProgressVersionPrimary = null;
  Ut.length = 0;
}
var Nn = yt.ReactCurrentDispatcher, me = yt.ReactCurrentBatchConfig, Wn = 0, H = null, b = null, Z = null, Ur = !1, Pn = !1;
function ie() {
  throw Error(w(321));
}
function bi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!de(e[n], t[n])) return !1;
  return !0;
}
function eo(e, t, n, r, l, i) {
  if (Wn = i, H = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Nn.current = e === null || e.memoizedState === null ? ff : df, e = n(r, l), Pn) {
    i = 0;
    do {
      if (Pn = !1, !(25 > i)) throw Error(w(301));
      i += 1, Z = b = null, t.updateQueue = null, Nn.current = pf, e = n(r, l);
    } while (Pn);
  }
  if (Nn.current = Vr, t = b !== null && b.next !== null, Wn = 0, Z = b = H = null, Ur = !1, t) throw Error(w(300));
  return e;
}
function ft() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? H.memoizedState = Z = e : Z = Z.next = e, Z;
}
function wt() {
  if (b === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = b.next;
  var t = Z === null ? H.memoizedState : Z.next;
  if (t !== null) Z = t, b = e;
  else {
    if (e === null) throw Error(w(310));
    b = e, e = { memoizedState: b.memoizedState, baseState: b.baseState, baseQueue: b.baseQueue, queue: b.queue, next: null }, Z === null ? H.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
}
function xe(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function an(e) {
  var t = wt(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = b, l = r.baseQueue, i = n.pending;
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
      var d = s.lane;
      if ((Wn & d) === d) u !== null && (u = u.next = { lane: 0, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
      else {
        var S = {
          lane: d,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null
        };
        u === null ? (o = u = S, i = r) : u = u.next = S, H.lanes |= d, Zn |= d;
      }
      s = s.next;
    } while (s !== null && s !== l);
    u === null ? i = r : u.next = o, de(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  return [t.memoizedState, n.dispatch];
}
function cn(e) {
  var t = wt(), n = t.queue;
  if (n === null) throw Error(w(311));
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
function cu(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var l = t._workInProgressVersionPrimary;
  if (l !== null ? e = l === r : (e = e.mutableReadLanes, (e = (Wn & e) === e) && (t._workInProgressVersionPrimary = r, Ut.push(t))), e) return n(t._source);
  throw Ut.push(t), Error(w(350));
}
function ea(e, t, n, r) {
  var l = re;
  if (l === null) throw Error(w(349));
  var i = t._getVersion, o = i(t._source), u = Nn.current, s = u.useState(function() {
    return cu(l, t, n);
  }), d = s[1], S = s[0];
  s = Z;
  var P = e.memoizedState, p = P.refs, x = p.getSnapshot, _ = P.source;
  P = P.subscribe;
  var N = H;
  return e.memoizedState = { refs: p, source: t, subscribe: r }, u.useEffect(function() {
    p.getSnapshot = n, p.setSnapshot = d;
    var f = i(t._source);
    if (!de(o, f)) {
      f = n(t._source), de(S, f) || (d(f), f = Xe(N), l.mutableReadLanes |= f & l.pendingLanes), f = l.mutableReadLanes, l.entangledLanes |= f;
      for (var a = l.entanglements, c = f; 0 < c; ) {
        var m = 31 - Je(c), h = 1 << m;
        a[m] |= f, c &= ~h;
      }
    }
  }, [n, t, r]), u.useEffect(function() {
    return r(t._source, function() {
      var f = p.getSnapshot, a = p.setSnapshot;
      try {
        a(f(t._source));
        var c = Xe(N);
        l.mutableReadLanes |= c & l.pendingLanes;
      } catch (m) {
        a(function() {
          throw m;
        });
      }
    });
  }, [t, r]), de(x, n) && de(_, t) && de(P, r) || (e = { pending: null, dispatch: null, lastRenderedReducer: xe, lastRenderedState: S }, e.dispatch = d = ro.bind(null, H, e), s.queue = e, s.baseQueue = null, S = cu(l, t, n), s.memoizedState = s.baseState = S), S;
}
function ta(e, t, n) {
  var r = wt();
  return ea(r, e, t, n);
}
function fn(e) {
  var t = ft();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: xe, lastRenderedState: e }, e = e.dispatch = ro.bind(null, H, e), [t.memoizedState, e];
}
function $r(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = H.updateQueue, t === null ? (t = { lastEffect: null }, H.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function fu(e) {
  var t = ft();
  return e = { current: e }, t.memoizedState = e;
}
function Ar() {
  return wt().memoizedState;
}
function ni(e, t, n, r) {
  var l = ft();
  H.flags |= e, l.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r);
}
function to(e, t, n, r) {
  var l = wt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (b !== null) {
    var o = b.memoizedState;
    if (i = o.destroy, r !== null && bi(r, o.deps)) {
      $r(t, n, i, r);
      return;
    }
  }
  H.flags |= e, l.memoizedState = $r(1 | t, n, i, r);
}
function du(e, t) {
  return ni(516, 4, e, t);
}
function Br(e, t) {
  return to(516, 4, e, t);
}
function na(e, t) {
  return to(4, 2, e, t);
}
function ra(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function la(e, t, n) {
  return n = n != null ? n.concat([e]) : null, to(4, 2, ra.bind(null, t, e), n);
}
function no() {
}
function ia(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function oa(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function cf(e, t) {
  var n = Wt();
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
  var r = ae(), l = Xe(e), i = { lane: l, action: n, eagerReducer: null, eagerState: null, next: null }, o = t.pending;
  if (o === null ? i.next = i : (i.next = o.next, o.next = i), t.pending = i, o = e.alternate, e === H || o !== null && o === H) Pn = Ur = !0;
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
var Vr = { readContext: he, useCallback: ie, useContext: ie, useEffect: ie, useImperativeHandle: ie, useLayoutEffect: ie, useMemo: ie, useReducer: ie, useRef: ie, useState: ie, useDebugValue: ie, useDeferredValue: ie, useTransition: ie, useMutableSource: ie, useOpaqueIdentifier: ie, unstable_isNewReconciler: !1 }, ff = { readContext: he, useCallback: function(e, t) {
  return ft().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: he, useEffect: du, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ni(4, 2, ra.bind(
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, e = e.dispatch = ro.bind(null, H, e), [r.memoizedState, e];
}, useRef: fu, useState: fn, useDebugValue: no, useDeferredValue: function(e) {
  var t = fn(e), n = t[0], r = t[1];
  return du(function() {
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
  return e = cf.bind(null, e[1]), fu(e), [e, t];
}, useMutableSource: function(e, t, n) {
  var r = ft();
  return r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }, ea(r, e, t, n);
}, useOpaqueIdentifier: function() {
  if (Ne) {
    var e = !1, t = rf(function() {
      throw e || (e = !0, n("r:" + (Sl++).toString(36))), Error(w(355));
    }), n = fn(t)[1];
    return !(H.mode & 2) && (H.flags |= 516, $r(
      5,
      function() {
        n("r:" + (Sl++).toString(36));
      },
      void 0,
      null
    )), t;
  }
  return t = "r:" + (Sl++).toString(36), fn(t), t;
}, unstable_isNewReconciler: !1 }, df = { readContext: he, useCallback: ia, useContext: he, useEffect: Br, useImperativeHandle: la, useLayoutEffect: na, useMemo: oa, useReducer: an, useRef: Ar, useState: function() {
  return an(xe);
}, useDebugValue: no, useDeferredValue: function(e) {
  var t = an(xe), n = t[0], r = t[1];
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
  var e = an(xe)[0];
  return [
    Ar().current,
    e
  ];
}, useMutableSource: ta, useOpaqueIdentifier: function() {
  return an(xe)[0];
}, unstable_isNewReconciler: !1 }, pf = { readContext: he, useCallback: ia, useContext: he, useEffect: Br, useImperativeHandle: la, useLayoutEffect: na, useMemo: oa, useReducer: cn, useRef: Ar, useState: function() {
  return cn(xe);
}, useDebugValue: no, useDeferredValue: function(e) {
  var t = cn(xe), n = t[0], r = t[1];
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
  var e = cn(xe)[0];
  return [
    Ar().current,
    e
  ];
}, useMutableSource: ta, useOpaqueIdentifier: function() {
  return cn(xe)[0];
}, unstable_isNewReconciler: !1 }, mf = yt.ReactCurrentOwner, Se = !1;
function oe(e, t, n, r) {
  t.child = e === null ? qs(t, null, n, r) : Rr(t, e.child, n, r);
}
function pu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return Mt(t, l), r = eo(e, t, n, r, i, l), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~l, Fe(e, t, l)) : (t.flags |= 1, oe(e, t, r, l), t.child);
}
function mu(e, t, n, r, l, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ao(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ua(e, t, o, r, l, i)) : (e = Sr(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  return o = e.child, !(l & i) && (l = o.memoizedProps, n = n.compare, n = n !== null ? n : Un, n(l, r) && e.ref === t.ref) ? Fe(e, t, i) : (t.flags |= 1, e = et(o, r), e.ref = t.ref, e.return = t, t.child = e);
}
function ua(e, t, n, r, l, i) {
  if (e !== null && Un(e.memoizedProps, r) && e.ref === t.ref) if (Se = !1, (i & l) !== 0) e.flags & 16384 && (Se = !0);
  else return t.lanes = e.lanes, Fe(e, t, i);
  return ri(e, t, n, r, i);
}
function Cl(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") if (!(t.mode & 4)) t.memoizedState = { baseLanes: 0 }, sr(t, n);
  else if (n & 1073741824) t.memoizedState = { baseLanes: 0 }, sr(t, i !== null ? i.baseLanes : n);
  else return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e }, sr(t, e), null;
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, sr(t, r);
  return oe(e, t, l, n), t.child;
}
function sa(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128);
}
function ri(e, t, n, r, l) {
  var i = se(n) ? pt : ne.current;
  return i = Ht(t, i), Mt(t, l), n = eo(e, t, n, r, i, l), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~l, Fe(e, t, l)) : (t.flags |= 1, oe(e, t, n, l), t.child);
}
function hu(e, t, n, r, l) {
  if (se(n)) {
    var i = !0;
    hr(t);
  } else i = !1;
  if (Mt(t, l), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), Zs(t, n, r), bl(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = he(d) : (d = se(n) ? pt : ne.current, d = Ht(t, d));
    var S = n.getDerivedStateFromProps, P = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    P || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== d) && ou(t, o, r, d), Me = !1;
    var p = t.memoizedState;
    o.state = p, Bn(t, r, o, l), s = t.memoizedState, u !== r || p !== s || ue.current || Me ? (typeof S == "function" && (Dr(t, n, S, r), s = t.memoizedState), (u = Me || iu(t, n, u, r, p, s, d)) ? (P || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4)) : (typeof o.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = d, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4), r = !1);
  } else {
    o = t.stateNode, Ks(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : we(t.type, u), o.props = d, P = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = he(s) : (s = se(n) ? pt : ne.current, s = Ht(t, s));
    var x = n.getDerivedStateFromProps;
    (S = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== P || p !== s) && ou(t, o, r, s), Me = !1, p = t.memoizedState, o.state = p, Bn(t, r, o, l);
    var _ = t.memoizedState;
    u !== P || p !== _ || ue.current || Me ? (typeof x == "function" && (Dr(t, n, x, r), _ = t.memoizedState), (d = Me || iu(t, n, d, r, p, _, s)) ? (S || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(
      r,
      _,
      s
    ), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, _, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = _), o.props = r, o.state = _, o.context = s, r = d) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 256), r = !1);
  }
  return li(e, t, n, r, i, l);
}
function li(e, t, n, r, l, i) {
  sa(e, t);
  var o = (t.flags & 64) !== 0;
  if (!r && !o) return l && eu(t, n, !1), Fe(e, t, i);
  r = t.stateNode, mf.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Rr(t, e.child, null, i), t.child = Rr(t, null, u, i)) : oe(e, t, u, i), t.memoizedState = r.state, l && eu(t, n, !0), t.child;
}
function vu(e) {
  var t = e.stateNode;
  t.pendingContext ? bo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bo(e, t.context, !1), ei(e, t.containerInfo);
}
var ur = { dehydrated: null, retryLane: 0 };
function yu(e, t, n) {
  var r = t.pendingProps, l = A.current, i = !1, o;
  return (o = (t.flags & 64) !== 0) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (l |= 1), B(A, l & 1), e === null ? (r.fallback !== void 0 && ti(t), e = r.children, l = r.fallback, i ? (e = gu(t, e, l, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = ur, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = gu(t, e, l, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = ur, t.lanes = 33554432, e) : (n = co({ mode: "visible", children: e }, t.mode, n, null), n.return = t, t.child = n)) : e.memoizedState !== null ? i ? (r = Su(e, t, r.children, r.fallback, n), i = t.child, l = e.child.memoizedState, i.memoizedState = l === null ? { baseLanes: n } : { baseLanes: l.baseLanes | n }, i.childLanes = e.childLanes & ~n, t.memoizedState = ur, r) : (n = wu(e, t, r.children, n), t.memoizedState = null, n) : i ? (r = Su(e, t, r.children, r.fallback, n), i = t.child, l = e.child.memoizedState, i.memoizedState = l === null ? { baseLanes: n } : { baseLanes: l.baseLanes | n }, i.childLanes = e.childLanes & ~n, t.memoizedState = ur, r) : (n = wu(e, t, r.children, n), t.memoizedState = null, n);
}
function gu(e, t, n, r) {
  var l = e.mode, i = e.child;
  return t = { mode: "hidden", children: t }, !(l & 2) && i !== null ? (i.childLanes = 0, i.pendingProps = t) : i = co(t, l, 0, null), n = Bt(n, l, r, null), i.return = e, n.return = e, i.sibling = n, e.child = i, n;
}
function wu(e, t, n, r) {
  var l = e.child;
  return e = l.sibling, n = et(l, { mode: "visible", children: n }), !(t.mode & 2) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n;
}
function Su(e, t, n, r, l) {
  var i = t.mode, o = e.child;
  e = o.sibling;
  var u = { mode: "hidden", children: n };
  return !(i & 2) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = u, o = n.lastEffect, o !== null ? (t.firstEffect = n.firstEffect, t.lastEffect = o, o.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = et(o, u), e !== null ? r = et(e, r) : (r = Bt(r, i, l, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r;
}
function ku(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Xs(e.return, t);
}
function _l(e, t, n, r, l, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l, lastEffect: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l, o.lastEffect = i);
}
function Eu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (oe(e, t, r.children, n), r = A.current, r & 2) r = r & 1 | 2, t.flags |= 64;
  else {
    if (e !== null && e.flags & 64) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ku(e, n);
      else if (e.tag === 19) ku(e, n);
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
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Mr(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), _l(t, !1, l, n, i, t.lastEffect);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Mr(e) === null) {
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
function Fe(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Zn |= t.lanes, n & t.childLanes) {
    if (e !== null && t.child !== e.child) throw Error(w(153));
    if (t.child !== null) {
      for (e = t.child, n = et(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = et(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var aa, ii, ca, fa;
aa = function(e, t) {
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
ca = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, ct(_e.current);
    var i = null;
    switch (n) {
      case "input":
        l = Il(e, l), r = Il(e, r), i = [];
        break;
      case "option":
        l = Dl(e, l), r = Dl(e, r), i = [];
        break;
      case "select":
        l = U({}, l, { value: void 0 }), r = U({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = Rl(e, l), r = Rl(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = jr);
    }
    $l(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var u = l[d];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Fn.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (u = l != null ? l[d] : void 0, r.hasOwnProperty(d) && s !== u && (s != null || u != null)) if (d === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (i || (i = []), i.push(d, n)), n = s;
      else d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Fn.hasOwnProperty(d) ? (s != null && d === "onScroll" && R("scroll", e), i || u === s || (i = [])) : typeof s == "object" && s !== null && s.$$typeof === Li ? s.toString() : (i = i || []).push(d, s));
    }
    n && (i = i || []).push(
      "style",
      n
    );
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
fa = function(e, t, n, r) {
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
function hf(e, t, n) {
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
      return se(t.type) && Fr(), null;
    case 3:
      return Qt(), M(ue), M(ne), qi(), r = t.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (or(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), ii(t), null;
    case 5:
      Ji(t);
      var l = ct(Hn.current);
      if (n = t.type, e !== null && t.stateNode != null) ca(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return null;
        }
        if (e = ct(_e.current), or(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ae] = t, r[Lr] = i, n) {
            case "dialog":
              R("cancel", r), R("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              R("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < vn.length; e++) R(vn[e], r);
              break;
            case "source":
              R("error", r);
              break;
            case "img":
            case "image":
            case "link":
              R("error", r), R("load", r);
              break;
            case "details":
              R("toggle", r);
              break;
            case "input":
              Eo(r, i), R("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, R("invalid", r);
              break;
            case "textarea":
              Co(r, i), R("invalid", r);
          }
          $l(n, i), e = null;
          for (var o in i) i.hasOwnProperty(o) && (l = i[o], o === "children" ? typeof l == "string" ? r.textContent !== l && (e = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (e = ["children", "" + l]) : Fn.hasOwnProperty(o) && l != null && o === "onScroll" && R("scroll", r));
          switch (n) {
            case "input":
              er(r), xo(r, i, !0);
              break;
            case "textarea":
              er(r), _o(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = jr);
          }
          r = e, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          switch (o = l.nodeType === 9 ? l : l.ownerDocument, e === Ml.html && (e = is(n)), e === Ml.html ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ae] = t, e[Lr] = r, aa(e, t, !1, !1), t.stateNode = e, o = Al(n, r), n) {
            case "dialog":
              R("cancel", e), R("close", e), l = r;
              break;
            case "iframe":
            case "object":
            case "embed":
              R("load", e), l = r;
              break;
            case "video":
            case "audio":
              for (l = 0; l < vn.length; l++) R(vn[l], e);
              l = r;
              break;
            case "source":
              R("error", e), l = r;
              break;
            case "img":
            case "image":
            case "link":
              R("error", e), R("load", e), l = r;
              break;
            case "details":
              R("toggle", e), l = r;
              break;
            case "input":
              Eo(e, r), l = Il(e, r), R("invalid", e);
              break;
            case "option":
              l = Dl(e, r);
              break;
            case "select":
              e._wrapperState = { wasMultiple: !!r.multiple }, l = U({}, r, { value: void 0 }), R("invalid", e);
              break;
            case "textarea":
              Co(e, r), l = Rl(e, r), R("invalid", e);
              break;
            default:
              l = r;
          }
          $l(n, l);
          var u = l;
          for (i in u) if (u.hasOwnProperty(i)) {
            var s = u[i];
            i === "style" ? ss(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && os(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && In(e, s) : typeof s == "number" && In(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Fn.hasOwnProperty(i) ? s != null && i === "onScroll" && R("scroll", e) : s != null && Ci(e, i, s, o));
          }
          switch (n) {
            case "input":
              er(e), xo(e, r, !1);
              break;
            case "textarea":
              er(e), _o(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + Ze(r.value));
              break;
            case "select":
              e.multiple = !!r.multiple, i = r.value, i != null ? Ot(e, !!r.multiple, i, !1) : r.defaultValue != null && Ot(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof l.onClick == "function" && (e.onclick = jr);
          }
          Us(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) fa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        n = ct(Hn.current), ct(_e.current), or(t) ? (r = t.stateNode, n = t.memoizedProps, r[Ae] = t, r.nodeValue !== n && (t.flags |= 4)) : (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ae] = t, t.stateNode = r);
      }
      return null;
    case 13:
      return M(A), r = t.memoizedState, t.flags & 64 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? t.memoizedProps.fallback !== void 0 && or(t) : n = e.memoizedState !== null, r && !n && t.mode & 2 && (e === null && t.memoizedProps.unstable_avoidThisFallback !== !0 || A.current & 1 ? J === 0 && (J = 3) : ((J === 0 || J === 3) && (J = 4), re === null || !(Zn & 134217727) && !(Jt & 134217727) || $t(re, te))), (r || n) && (t.flags |= 4), null);
    case 4:
      return Qt(), ii(t), e === null && Ds(t.stateNode.containerInfo), null;
    case 10:
      return Gi(t), null;
    case 17:
      return se(t.type) && Fr(), null;
    case 19:
      if (M(A), r = t.memoizedState, r === null) return null;
      if (i = (t.flags & 64) !== 0, o = r.rendering, o === null) if (i) dn(r, !1);
      else {
        if (J !== 0 || e !== null && e.flags & 64) for (e = t.child; e !== null; ) {
          if (o = Mr(e), o !== null) {
            for (t.flags |= 64, dn(r, !1), i = o.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), r.lastEffect === null && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return B(A, A.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        r.tail !== null && ee() > fi && (t.flags |= 64, i = !0, dn(r, !1), t.lanes = 33554432);
      }
      else {
        if (!i) if (e = Mr(o), e !== null) {
          if (t.flags |= 64, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dn(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !Ne) return t = t.lastEffect = r.lastEffect, t !== null && (t.nextEffect = null), null;
        } else 2 * ee() - r.renderingStartTime > fi && n !== 1073741824 && (t.flags |= 64, i = !0, dn(r, !1), t.lanes = 33554432);
        r.isBackwards ? (o.sibling = t.child, t.child = o) : (n = r.last, n !== null ? n.sibling = o : t.child = o, r.last = o);
      }
      return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = ee(), n.sibling = null, t = A.current, B(A, i ? t & 1 | 2 : t & 1), n) : null;
    case 23:
    case 24:
      return so(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null;
  }
  throw Error(w(156, t.tag));
}
function vf(e) {
  switch (e.tag) {
    case 1:
      se(e.type) && Fr();
      var t = e.flags;
      return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 3:
      if (Qt(), M(ue), M(ne), qi(), t = e.flags, t & 64) throw Error(w(285));
      return e.flags = t & -4097 | 64, e;
    case 5:
      return Ji(e), null;
    case 13:
      return M(A), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 19:
      return M(A), null;
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
      n += Ka(r), r = r.return;
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
var yf = typeof WeakMap == "function" ? WeakMap : Map;
function da(e, t, n) {
  n = Qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Wr || (Wr = !0, di = r), oi(e, t);
  }, n;
}
function pa(e, t, n) {
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
var gf = typeof WeakSet == "function" ? WeakSet : Set;
function xu(e) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (n) {
    Ge(e, n);
  }
  else t.current = null;
}
function wf(e, t) {
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
  throw Error(w(163));
}
function Sf(e, t, n) {
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
          r = l.next, l = l.tag, l & 4 && l & 1 && (Ea(n, e), Tf(n, e)), e = r;
        } while (e !== t);
      }
      return;
    case 1:
      e = n.stateNode, n.flags & 4 && (t === null ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : we(n.type, t.memoizedProps), e.componentDidUpdate(
        r,
        t.memoizedState,
        e.__reactInternalSnapshotBeforeUpdate
      ))), t = n.updateQueue, t !== null && lu(n, t, e);
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
        lu(n, t, e);
      }
      return;
    case 5:
      e = n.stateNode, t === null && n.flags & 4 && Us(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null && gs(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(w(163));
}
function Cu(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
      else {
        r = n.stateNode;
        var l = n.memoizedProps.style;
        l = l != null && l.hasOwnProperty("display") ? l.display : null, r.style.display = us("display", l);
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
function _u(e, t) {
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
      if (xu(t), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
        e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount();
      } catch (i) {
        Ge(
          t,
          i
        );
      }
      break;
    case 5:
      xu(t);
      break;
    case 4:
      ma(e, t);
  }
}
function Nu(e) {
  e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
}
function Pu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Tu(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Pu(t)) break e;
      t = t.return;
    }
    throw Error(w(160));
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
      throw Error(w(161));
  }
  n.flags & 16 && (In(t, ""), n.flags &= -17);
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Pu(n.return)) {
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
  if (l) e = l ? e.stateNode : e.stateNode.instance, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = jr));
  else if (r !== 4 && (e = e.child, e !== null)) for (ui(e, t, n), e = e.sibling; e !== null; ) ui(e, t, n), e = e.sibling;
}
function si(e, t, n) {
  var r = e.tag, l = r === 5 || r === 6;
  if (l) e = l ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (si(e, t, n), e = e.sibling; e !== null; ) si(e, t, n), e = e.sibling;
}
function ma(e, t) {
  for (var n = t, r = !1, l, i; ; ) {
    if (!r) {
      r = n.return;
      e: for (; ; ) {
        if (r === null) throw Error(w(160));
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
      e: for (var o = e, u = n, s = u; ; ) if (_u(o, s), s.child !== null && s.tag !== 4) s.child.return = s, s = s.child;
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
    } else if (_u(e, n), n.child !== null) {
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
          for (n[Lr] = r, e === "input" && r.type === "radio" && r.name != null && rs(n, r), Al(e, l), t = Al(e, r), l = 0; l < i.length; l += 2) {
            var o = i[l], u = i[l + 1];
            o === "style" ? ss(n, u) : o === "dangerouslySetInnerHTML" ? os(n, u) : o === "children" ? In(n, u) : Ci(n, o, u, t);
          }
          switch (e) {
            case "input":
              Ol(n, r);
              break;
            case "textarea":
              ls(n, r);
              break;
            case "select":
              e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, i = r.value, i != null ? Ot(n, !!r.multiple, i, !1) : e !== !!r.multiple && (r.defaultValue != null ? Ot(n, !!r.multiple, r.defaultValue, !0) : Ot(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(w(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      n = t.stateNode, n.hydrate && (n.hydrate = !1, gs(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && (uo = ee(), Cu(t.child, !0)), ju(t);
      return;
    case 19:
      ju(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Cu(t, t.memoizedState !== null);
      return;
  }
  throw Error(w(163));
}
function ju(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gf()), t.forEach(function(r) {
      var l = Ff.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function kf(e, t) {
  return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : !1;
}
var Ef = Math.ceil, Hr = yt.ReactCurrentDispatcher, io = yt.ReactCurrentOwner, L = 0, re = null, Q = null, te = 0, ht = 0, ai = tt(0), J = 0, rl = null, Zt = 0, Zn = 0, Jt = 0, oo = 0, ci = null, uo = 0, fi = 1 / 0;
function qt() {
  fi = ee() + 500;
}
var C = null, Wr = !1, di = null, Ce = null, be = !1, Tn = null, yn = 90, pi = [], mi = [], Ie = null, jn = 0, hi = null, yr = -1, je = 0, gr = 0, Ln = null, wr = !1;
function ae() {
  return L & 48 ? ee() : yr !== -1 ? yr : yr = ee();
}
function Xe(e) {
  if (e = e.mode, !(e & 2)) return 1;
  if (!(e & 4)) return Wt() === 99 ? 1 : 2;
  if (je === 0 && (je = Zt), af.transition !== 0) {
    gr !== 0 && (gr = ci !== null ? ci.pendingLanes : 0), e = je;
    var t = 4186112 & ~gr;
    return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), t;
  }
  return e = Wt(), L & 4 && e === 98 ? e = Pr(12, je) : (e = cc(e), e = Pr(e, je)), e;
}
function Ke(e, t, n) {
  if (50 < jn) throw jn = 0, hi = null, Error(w(185));
  if (e = ll(e, t), e === null) return null;
  Zr(e, t, n), e === re && (Jt |= t, J === 4 && $t(e, te));
  var r = Wt();
  t === 1 ? L & 8 && !(L & 48) ? vi(e) : (ve(e, n), L === 0 && (qt(), Pe())) : (!(L & 4) || r !== 98 && r !== 99 || (Ie === null ? Ie = /* @__PURE__ */ new Set([e]) : Ie.add(e)), ve(e, n)), ci = e;
}
function ll(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
function ve(e, t) {
  for (var n = e.callbackNode, r = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var u = 31 - Je(o), s = 1 << u, d = i[u];
    if (d === -1) {
      if (!(s & r) || s & l) {
        d = t, Ct(s);
        var S = D;
        i[u] = 10 <= S ? d + 250 : 6 <= S ? d + 5e3 : -1;
      }
    } else d <= t && (e.expiredLanes |= s);
    o &= ~s;
  }
  if (r = Rn(e, e === re ? te : 0), t = D, r === 0) n !== null && (n !== kl && Jl(n), e.callbackNode = null, e.callbackPriority = 0);
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== kl && Jl(n);
    }
    t === 15 ? (n = vi.bind(null, e), Te === null ? (Te = [n], vr = Xi(tl, Ys)) : Te.push(n), n = kl) : t === 14 ? n = An(99, vi.bind(null, e)) : (n = fc(t), n = An(n, ha.bind(null, e))), e.callbackPriority = t, e.callbackNode = n;
  }
}
function ha(e) {
  if (yr = -1, gr = je = 0, L & 48) throw Error(w(327));
  var t = e.callbackNode;
  if (nt() && e.callbackNode !== t) return null;
  var n = Rn(e, e === re ? te : 0);
  if (n === 0) return null;
  var r = n, l = L;
  L |= 16;
  var i = wa();
  (re !== e || te !== r) && (qt(), At(e, r));
  do
    try {
      _f();
      break;
    } catch (u) {
      ga(e, u);
    }
  while (!0);
  if (Ki(), Hr.current = i, L = l, Q !== null ? r = 0 : (re = null, te = 0, r = J), Zt & Jt) At(e, 0);
  else if (r !== 0) {
    if (r === 2 && (L |= 64, e.hydrate && (e.hydrate = !1, Qi(e.containerInfo)), n = _s(e), n !== 0 && (r = gn(e, n))), r === 1) throw t = rl, At(e, 0), $t(e, n), ve(e, ee()), t;
    switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
      case 0:
      case 1:
        throw Error(w(345));
      case 2:
        ot(e);
        break;
      case 3:
        if ($t(e, n), (n & 62914560) === n && (r = uo + 500 - ee(), 10 < r)) {
          if (Rn(e, 0) !== 0) break;
          if (l = e.suspendedLanes, (l & n) !== n) {
            ae(), e.pingedLanes |= e.suspendedLanes & l;
            break;
          }
          e.timeoutHandle = Zo(ot.bind(null, e), r);
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
        if (n = l, n = ee() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Ef(n / 1960)) - n, 10 < n) {
          e.timeoutHandle = Zo(ot.bind(null, e), n);
          break;
        }
        ot(e);
        break;
      case 5:
        ot(e);
        break;
      default:
        throw Error(w(329));
    }
  }
  return ve(e, ee()), e.callbackNode === t ? ha.bind(null, e) : null;
}
function $t(e, t) {
  for (t &= ~oo, t &= ~Jt, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Je(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function vi(e) {
  if (L & 48) throw Error(w(327));
  if (nt(), e === re && e.expiredLanes & te) {
    var t = te, n = gn(e, t);
    Zt & Jt && (t = Rn(e, t), n = gn(e, t));
  } else t = Rn(e, 0), n = gn(e, t);
  if (e.tag !== 0 && n === 2 && (L |= 64, e.hydrate && (e.hydrate = !1, Qi(e.containerInfo)), t = _s(e), t !== 0 && (n = gn(e, t))), n === 1) throw n = rl, At(e, 0), $t(e, t), ve(e, ee()), n;
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ot(e), ve(e, ee()), null;
}
function xf() {
  if (Ie !== null) {
    var e = Ie;
    Ie = null, e.forEach(function(t) {
      t.expiredLanes |= 24 & t.pendingLanes, ve(t, ee());
    });
  }
  Pe();
}
function va(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    L = n, L === 0 && (qt(), Pe());
  }
}
function ya(e, t) {
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
  ht = ai.current, M(ai);
}
function At(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, nf(n)), Q !== null) for (n = Q.return; n !== null; ) {
    var r = n;
    switch (r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Fr();
        break;
      case 3:
        Qt(), M(ue), M(ne), qi();
        break;
      case 5:
        Ji(r);
        break;
      case 4:
        Qt();
        break;
      case 13:
        M(A);
        break;
      case 19:
        M(A);
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
  re = e, Q = et(e.current, null), te = ht = Zt = t, J = 0, rl = null, oo = Jt = Zn = 0;
}
function ga(e, t) {
  do {
    var n = Q;
    try {
      if (Ki(), Nn.current = Vr, Ur) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Ur = !1;
      }
      if (Wn = 0, Z = b = H = null, Pn = !1, io.current = null, n === null || n.return === null) {
        J = 1, rl = t, Q = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, s = t;
        if (t = te, u.flags |= 2048, u.firstEffect = u.lastEffect = null, s !== null && typeof s == "object" && typeof s.then == "function") {
          var d = s;
          if (!(u.mode & 2)) {
            var S = u.alternate;
            S ? (u.updateQueue = S.updateQueue, u.memoizedState = S.memoizedState, u.lanes = S.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var P = (A.current & 1) !== 0, p = o;
          do {
            var x;
            if (x = p.tag === 13) {
              var _ = p.memoizedState;
              if (_ !== null) x = _.dehydrated !== null;
              else {
                var N = p.memoizedProps;
                x = N.fallback === void 0 ? !1 : N.unstable_avoidThisFallback !== !0 ? !0 : !P;
              }
            }
            if (x) {
              var f = p.updateQueue;
              if (f === null) {
                var a = /* @__PURE__ */ new Set();
                a.add(d), p.updateQueue = a;
              } else f.add(d);
              if (!(p.mode & 2)) {
                if (p.flags |= 64, u.flags |= 16384, u.flags &= -2981, u.tag === 1) if (u.alternate === null) u.tag = 17;
                else {
                  var c = Qe(-1, 1);
                  c.tag = 2, Ye(u, c);
                }
                u.lanes |= 1;
                break e;
              }
              s = void 0, u = t;
              var m = i.pingCache;
              if (m === null ? (m = i.pingCache = new yf(), s = /* @__PURE__ */ new Set(), m.set(d, s)) : (s = m.get(d), s === void 0 && (s = /* @__PURE__ */ new Set(), m.set(d, s))), !s.has(u)) {
                s.add(u);
                var h = Lf.bind(null, i, d, u);
                d.then(h, h);
              }
              p.flags |= 4096, p.lanes = t;
              break e;
            }
            p = p.return;
          } while (p !== null);
          s = Error((It(u.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
        }
        J !== 5 && (J = 2), s = lo(s, u), p = o;
        do {
          switch (p.tag) {
            case 3:
              i = s, p.flags |= 4096, t &= -t, p.lanes |= t;
              var j = da(p, i, t);
              ru(p, j);
              break e;
            case 1:
              i = s;
              var k = p.type, T = p.stateNode;
              if (!(p.flags & 64) && (typeof k.getDerivedStateFromError == "function" || T !== null && typeof T.componentDidCatch == "function" && (Ce === null || !Ce.has(T)))) {
                p.flags |= 4096, t &= -t, p.lanes |= t;
                var v = pa(p, i, t);
                ru(p, v);
                break e;
              }
          }
          p = p.return;
        } while (p !== null);
      }
      ka(n);
    } catch (g) {
      t = g, Q === n && n !== null && (Q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function wa() {
  var e = Hr.current;
  return Hr.current = Vr, e === null ? Vr : e;
}
function gn(e, t) {
  var n = L;
  L |= 16;
  var r = wa();
  re === e && te === t || At(e, t);
  do
    try {
      Cf();
      break;
    } catch (l) {
      ga(e, l);
    }
  while (!0);
  if (Ki(), L = n, Hr.current = r, Q !== null) throw Error(w(261));
  return re = null, te = 0, J;
}
function Cf() {
  for (; Q !== null; ) Sa(Q);
}
function _f() {
  for (; Q !== null && !of(); ) Sa(Q);
}
function Sa(e) {
  var t = xa(e.alternate, e, ht);
  e.memoizedProps = e.pendingProps, t === null ? ka(e) : Q = t, io.current = null;
}
function ka(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 2048) {
      if (n = vf(t), n !== null) {
        n.flags &= 2047, Q = n;
        return;
      }
      e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
    } else {
      if (n = hf(n, t, ht), n !== null) {
        Q = n;
        return;
      }
      if (n = t, n.tag !== 24 && n.tag !== 23 || n.memoizedState === null || ht & 1073741824 || !(n.mode & 4)) {
        for (var r = 0, l = n.child; l !== null; ) r |= l.lanes | l.childLanes, l = l.sibling;
        n.childLanes = r;
      }
      e !== null && !(e.flags & 2048) && (e.firstEffect === null && (e.firstEffect = t.firstEffect), t.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t));
    }
    if (t = t.sibling, t !== null) {
      Q = t;
      return;
    }
    Q = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function ot(e) {
  var t = Wt();
  return mt(99, Nf.bind(null, e, t)), null;
}
function Nf(e, t) {
  do
    nt();
  while (Tn !== null);
  if (L & 48) throw Error(w(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes, l = r, i = e.pendingLanes & ~l;
  e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= l, e.mutableReadLanes &= l, e.entangledLanes &= l, l = e.entanglements;
  for (var o = e.eventTimes, u = e.expirationTimes; 0 < i; ) {
    var s = 31 - Je(i), d = 1 << s;
    l[s] = 0, o[s] = -1, u[s] = -1, i &= ~d;
  }
  if (Ie !== null && !(r & 24) && Ie.has(e) && Ie.delete(e), e === re && (Q = re = null, te = 0), 1 < n.flags ? n.lastEffect !== null ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, r !== null) {
    if (l = L, L |= 32, io.current = null, gl = dr, o = Ho(), Yl(o)) {
      if ("selectionStart" in o) u = { start: o.selectionStart, end: o.selectionEnd };
      else e: if (u = (u = o.ownerDocument) && u.defaultView || window, (d = u.getSelection && u.getSelection()) && d.rangeCount !== 0) {
        u = d.anchorNode, i = d.anchorOffset, s = d.focusNode, d = d.focusOffset;
        try {
          u.nodeType, s.nodeType;
        } catch {
          u = null;
          break e;
        }
        var S = 0, P = -1, p = -1, x = 0, _ = 0, N = o, f = null;
        t: for (; ; ) {
          for (var a; N !== u || i !== 0 && N.nodeType !== 3 || (P = S + i), N !== s || d !== 0 && N.nodeType !== 3 || (p = S + d), N.nodeType === 3 && (S += N.nodeValue.length), (a = N.firstChild) !== null; )
            f = N, N = a;
          for (; ; ) {
            if (N === o) break t;
            if (f === u && ++x === i && (P = S), f === s && ++_ === d && (p = S), (a = N.nextSibling) !== null) break;
            N = f, f = N.parentNode;
          }
          N = a;
        }
        u = P === -1 || p === -1 ? null : { start: P, end: p };
      } else u = null;
      u = u || { start: 0, end: 0 };
    } else u = null;
    wl = { focusedElem: o, selectionRange: u }, dr = !1, Ln = null, wr = !1, C = r;
    do
      try {
        Pf();
      } catch (g) {
        if (C === null) throw Error(w(330));
        Ge(C, g), C = C.nextEffect;
      }
    while (C !== null);
    Ln = null, C = r;
    do
      try {
        for (o = e; C !== null; ) {
          var c = C.flags;
          if (c & 16 && In(C.stateNode, ""), c & 128) {
            var m = C.alternate;
            if (m !== null) {
              var h = m.ref;
              h !== null && (typeof h == "function" ? h(null) : h.current = null);
            }
          }
          switch (c & 1038) {
            case 2:
              Tu(C), C.flags &= -3;
              break;
            case 6:
              Tu(C), C.flags &= -3, Nl(C.alternate, C);
              break;
            case 1024:
              C.flags &= -1025;
              break;
            case 1028:
              C.flags &= -1025, Nl(C.alternate, C);
              break;
            case 4:
              Nl(C.alternate, C);
              break;
            case 8:
              u = C, ma(o, u);
              var j = u.alternate;
              Nu(u), j !== null && Nu(j);
          }
          C = C.nextEffect;
        }
      } catch (g) {
        if (C === null) throw Error(w(330));
        Ge(C, g), C = C.nextEffect;
      }
    while (C !== null);
    if (h = wl, m = Ho(), c = h.focusedElem, o = h.selectionRange, m !== c && c && c.ownerDocument && Os(c.ownerDocument.documentElement, c)) {
      for (o !== null && Yl(c) && (m = o.start, h = o.end, h === void 0 && (h = m), "selectionStart" in c ? (c.selectionStart = m, c.selectionEnd = Math.min(h, c.value.length)) : (h = (m = c.ownerDocument || document) && m.defaultView || window, h.getSelection && (h = h.getSelection(), u = c.textContent.length, j = Math.min(o.start, u), o = o.end === void 0 ? j : Math.min(o.end, u), !h.extend && j > o && (u = o, o = j, j = u), u = Vo(c, j), i = Vo(c, o), u && i && (h.rangeCount !== 1 || h.anchorNode !== u.node || h.anchorOffset !== u.offset || h.focusNode !== i.node || h.focusOffset !== i.offset) && (m = m.createRange(), m.setStart(u.node, u.offset), h.removeAllRanges(), j > o ? (h.addRange(m), h.extend(i.node, i.offset)) : (m.setEnd(i.node, i.offset), h.addRange(m)))))), m = [], h = c; h = h.parentNode; ) h.nodeType === 1 && m.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < m.length; c++) h = m[c], h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
    }
    dr = !!gl, wl = gl = null, e.current = n, C = r;
    do
      try {
        for (c = e; C !== null; ) {
          var k = C.flags;
          if (k & 36 && Sf(c, C.alternate, C), k & 128) {
            m = void 0;
            var T = C.ref;
            if (T !== null) {
              var v = C.stateNode;
              switch (C.tag) {
                case 5:
                  m = v;
                  break;
                default:
                  m = v;
              }
              typeof T == "function" ? T(m) : T.current = m;
            }
          }
          C = C.nextEffect;
        }
      } catch (g) {
        if (C === null) throw Error(w(330));
        Ge(C, g), C = C.nextEffect;
      }
    while (C !== null);
    C = null, sf(), L = l;
  } else e.current = n;
  if (be) be = !1, Tn = e, yn = t;
  else for (C = r; C !== null; ) t = C.nextEffect, C.nextEffect = null, C.flags & 8 && (k = C, k.sibling = null, k.stateNode = null), C = t;
  if (r = e.pendingLanes, r === 0 && (Ce = null), r === 1 ? e === hi ? jn++ : (jn = 0, hi = e) : jn = 0, n = n.stateNode, dt && typeof dt.onCommitFiberRoot == "function") try {
    dt.onCommitFiberRoot(Yi, n, void 0, (n.current.flags & 64) === 64);
  } catch {
  }
  if (ve(e, ee()), Wr) throw Wr = !1, e = di, di = null, e;
  return L & 8 || Pe(), null;
}
function Pf() {
  for (; C !== null; ) {
    var e = C.alternate;
    wr || Ln === null || (C.flags & 8 ? To(C, Ln) && (wr = !0) : C.tag === 13 && kf(e, C) && To(C, Ln) && (wr = !0));
    var t = C.flags;
    t & 256 && wf(e, C), !(t & 512) || be || (be = !0, An(97, function() {
      return nt(), null;
    })), C = C.nextEffect;
  }
}
function nt() {
  if (yn !== 90) {
    var e = 97 < yn ? 97 : yn;
    return yn = 90, mt(e, jf);
  }
  return !1;
}
function Tf(e, t) {
  pi.push(t, e), be || (be = !0, An(97, function() {
    return nt(), null;
  }));
}
function Ea(e, t) {
  mi.push(t, e), be || (be = !0, An(97, function() {
    return nt(), null;
  }));
}
function jf() {
  if (Tn === null) return !1;
  var e = Tn;
  if (Tn = null, L & 48) throw Error(w(331));
  var t = L;
  L |= 32;
  var n = mi;
  mi = [];
  for (var r = 0; r < n.length; r += 2) {
    var l = n[r], i = n[r + 1], o = l.destroy;
    if (l.destroy = void 0, typeof o == "function") try {
      o();
    } catch (s) {
      if (i === null) throw Error(w(330));
      Ge(i, s);
    }
  }
  for (n = pi, pi = [], r = 0; r < n.length; r += 2) {
    l = n[r], i = n[r + 1];
    try {
      var u = l.create;
      l.destroy = u();
    } catch (s) {
      if (i === null) throw Error(w(330));
      Ge(i, s);
    }
  }
  for (u = e.current.firstEffect; u !== null; ) e = u.nextEffect, u.nextEffect = null, u.flags & 8 && (u.sibling = null, u.stateNode = null), u = e;
  return L = t, Pe(), !0;
}
function Lu(e, t, n) {
  t = lo(n, t), t = da(e, t, 1), Ye(e, t), t = ae(), e = ll(e, 1), e !== null && (Zr(e, 1, t), ve(e, t));
}
function Ge(e, t) {
  if (e.tag === 3) Lu(e, e, t);
  else for (var n = e.return; n !== null; ) {
    if (n.tag === 3) {
      Lu(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ce === null || !Ce.has(r))) {
        e = lo(t, e);
        var l = pa(n, e, 1);
        if (Ye(n, l), l = ae(), n = ll(n, 1), n !== null) Zr(n, 1, l), ve(n, l);
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
function Lf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ae(), e.pingedLanes |= e.suspendedLanes & n, re === e && (te & n) === n && (J === 4 || J === 3 && (te & 62914560) === te && 500 > ee() - uo ? At(e, 0) : oo |= n), ve(e, t);
}
function Ff(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t), t = 0, t === 0 && (t = e.mode, t & 2 ? t & 4 ? (je === 0 && (je = Zt), t = _t(62914560 & ~je), t === 0 && (t = 4194304)) : t = Wt() === 99 ? 1 : 2 : t = 1), n = ae(), e = ll(e, t), e !== null && (Zr(e, t, n), ve(e, n));
}
var xa;
xa = function(e, t, n) {
  var r = t.lanes;
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ue.current) Se = !0;
  else if (n & r) Se = !!(e.flags & 16384);
  else {
    switch (Se = !1, t.tag) {
      case 3:
        vu(t), xl();
        break;
      case 5:
        uu(t);
        break;
      case 1:
        se(t.type) && hr(t);
        break;
      case 4:
        ei(t, t.stateNode.containerInfo);
        break;
      case 10:
        r = t.memoizedProps.value;
        var l = t.type._context;
        B(Ir, l._currentValue), l._currentValue = r;
        break;
      case 13:
        if (t.memoizedState !== null)
          return n & t.child.childLanes ? yu(e, t, n) : (B(A, A.current & 1), t = Fe(e, t, n), t !== null ? t.sibling : null);
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
    return Fe(e, t, n);
  }
  else Se = !1;
  switch (t.lanes = 0, t.tag) {
    case 2:
      if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, l = Ht(t, ne.current), Mt(t, n), l = eo(null, t, r, e, l, n), t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0) {
        if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, se(r)) {
          var i = !0;
          hr(t);
        } else i = !1;
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Zi(t);
        var o = r.getDerivedStateFromProps;
        typeof o == "function" && Dr(t, r, o, e), l.updater = nl, t.stateNode = l, l._reactInternals = t, bl(t, r, e, n), t = li(null, t, r, !0, i, n);
      } else t.tag = 0, oe(null, t, l, n), t = t.child;
      return t;
    case 16:
      l = t.elementType;
      e: {
        switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = l._init, l = i(l._payload), t.type = l, i = t.tag = Of(l), e = we(l, e), i) {
          case 0:
            t = ri(null, t, l, e, n);
            break e;
          case 1:
            t = hu(null, t, l, e, n);
            break e;
          case 11:
            t = pu(null, t, l, e, n);
            break e;
          case 14:
            t = mu(null, t, l, we(l.type, e), r, n);
            break e;
        }
        throw Error(w(306, l, ""));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : we(r, l), ri(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : we(r, l), hu(e, t, r, l, n);
    case 3:
      if (vu(t), r = t.updateQueue, e === null || r === null) throw Error(w(282));
      if (r = t.pendingProps, l = t.memoizedState, l = l !== null ? l.element : null, Ks(e, t), Bn(t, r, null, n), r = t.memoizedState.element, r === l) xl(), t = Fe(e, t, n);
      else {
        if (l = t.stateNode, (i = l.hydrate) && (Be = Rt(t.stateNode.containerInfo.firstChild), Le = t, i = Ne = !0), i) {
          if (e = l.mutableSourceEagerHydrationData, e != null) for (l = 0; l < e.length; l += 2) i = e[l], i._workInProgressVersionPrimary = e[l + 1], Ut.push(i);
          for (n = qs(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 1024, n = n.sibling;
        } else oe(e, t, r, n), xl();
        t = t.child;
      }
      return t;
    case 5:
      return uu(t), e === null && ti(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Gl(r, l) ? o = null : i !== null && Gl(r, i) && (t.flags |= 16), sa(e, t), oe(e, t, o, n), t.child;
    case 6:
      return e === null && ti(t), null;
    case 13:
      return yu(e, t, n);
    case 4:
      return ei(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Rr(t, null, r, n) : oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : we(r, l), pu(e, t, r, l, n);
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(
        e,
        t,
        t.pendingProps.children,
        n
      ), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value;
        var u = t.type._context;
        if (B(Ir, u._currentValue), u._currentValue = i, o !== null) if (u = o.value, i = de(u, i) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u, i) : 1073741823) | 0, i === 0) {
          if (o.children === l.children && !ue.current) {
            t = Fe(e, t, n);
            break e;
          }
        } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
          var s = u.dependencies;
          if (s !== null) {
            o = u.child;
            for (var d = s.firstContext; d !== null; ) {
              if (d.context === r && d.observedBits & i) {
                u.tag === 1 && (d = Qe(-1, n & -n), d.tag = 2, Ye(u, d)), u.lanes |= n, d = u.alternate, d !== null && (d.lanes |= n), Xs(u.return, n), s.lanes |= n;
                break;
              }
              d = d.next;
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
        oe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, i = t.pendingProps, r = i.children, Mt(t, n), l = he(
        l,
        i.unstable_observedBits
      ), r = r(l), t.flags |= 1, oe(e, t, r, n), t.child;
    case 14:
      return l = t.type, i = we(l, t.pendingProps), i = we(l.type, i), mu(e, t, l, i, r, n);
    case 15:
      return ua(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : we(r, l), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, se(r) ? (e = !0, hr(t)) : e = !1, Mt(t, n), Zs(t, r, l), bl(t, r, l, n), li(null, t, r, !0, e, n);
    case 19:
      return Eu(e, t, n);
    case 23:
      return Cl(e, t, n);
    case 24:
      return Cl(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function If(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function pe(e, t, n, r) {
  return new If(e, t, n, r);
}
function ao(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Of(e) {
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
    case es:
      o = 8, l |= 16;
      break;
    case _i:
      o = 8, l |= 1;
      break;
    case wn:
      return e = pe(12, n, t, l | 8), e.elementType = wn, e.type = wn, e.lanes = i, e;
    case Sn:
      return e = pe(13, n, t, l), e.type = Sn, e.elementType = Sn, e.lanes = i, e;
    case xr:
      return e = pe(19, n, t, l), e.elementType = xr, e.lanes = i, e;
    case Fi:
      return co(n, l, i, t);
    case Fl:
      return e = pe(24, n, t, l), e.elementType = Fl, e.lanes = i, e;
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
        case Ti:
          o = 16, r = null;
          break e;
        case ji:
          o = 22;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = pe(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Bt(e, t, n, r) {
  return e = pe(7, e, r, t), e.lanes = n, e;
}
function co(e, t, n, r) {
  return e = pe(23, e, r, t), e.elementType = Fi, e.lanes = n, e;
}
function Pl(e, t, n) {
  return e = pe(6, e, null, t), e.lanes = n, e;
}
function Tl(e, t, n) {
  return t = pe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function zf(e, t, n) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = fl(0), this.expirationTimes = fl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fl(0), this.mutableSourceEagerHydrationData = null;
}
function Df(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ut, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Qr(e, t, n, r) {
  var l = t.current, i = ae(), o = Xe(l);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (gt(n) !== n || n.tag !== 1) throw Error(w(170));
      var u = n;
      do {
        switch (u.tag) {
          case 3:
            u = u.stateNode.context;
            break t;
          case 1:
            if (se(u.type)) {
              u = u.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        u = u.return;
      } while (u !== null);
      throw Error(w(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (se(s)) {
        n = As(n, s, u);
        break e;
      }
    }
    n = u;
  } else n = qe;
  return t.context === null ? t.context = n : t.pendingContext = n, t = Qe(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), Ye(l, t), Ke(l, o, i), o;
}
function jl(e) {
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
function Rf() {
  return null;
}
function po(e, t, n) {
  var r = n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources || null;
  if (n = new zf(e, t, n != null && n.hydrate === !0), t = pe(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), n.current = t, t.stateNode = n, Zi(t), e[Gt] = n.current, Ds(e.nodeType === 8 ? e.parentNode : e), r) for (e = 0; e < r.length; e++) {
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
function Mf(e, t) {
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
        var d = jl(o);
        u.call(d);
      };
    }
    Qr(t, o, e, l);
  } else {
    if (i = n._reactRootContainer = Mf(n, r), o = i._internalRoot, typeof l == "function") {
      var s = l;
      l = function() {
        var d = jl(o);
        s.call(d);
      };
    }
    ya(function() {
      Qr(t, o, e, l);
    });
  }
  return jl(o);
}
hs = function(e) {
  if (e.tag === 13) {
    var t = ae();
    Ke(e, 4, t), fo(e, 4);
  }
};
Ri = function(e) {
  if (e.tag === 13) {
    var t = ae();
    Ke(e, 67108864, t), fo(e, 67108864);
  }
};
vs = function(e) {
  if (e.tag === 13) {
    var t = ae(), n = Xe(e);
    Ke(e, n, t), fo(e, n);
  }
};
ys = function(e, t) {
  return t();
};
Bl = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ol(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = el(r);
            if (!l) throw Error(w(90));
            ns(r), Ol(r, l);
          }
        }
      }
      break;
    case "textarea":
      ls(e, n);
      break;
    case "select":
      t = n.value, t != null && Ot(e, !!n.multiple, t, !1);
  }
};
Oi = va;
fs = function(e, t, n, r, l) {
  var i = L;
  L |= 4;
  try {
    return mt(98, e.bind(null, t, n, r, l));
  } finally {
    L = i, L === 0 && (qt(), Pe());
  }
};
zi = function() {
  !(L & 49) && (xf(), nt());
};
ds = function(e, t) {
  var n = L;
  L |= 2;
  try {
    return e(t);
  } finally {
    L = n, L === 0 && (qt(), Pe());
  }
};
function Ca(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Jn(t)) throw Error(w(200));
  return Df(e, t, null, n);
}
var Uf = { Events: [Kn, jt, el, as, cs, nt, { current: !1 }] }, pn = { findFiberByHostInstance: at, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, $f = { bundleType: pn.bundleType, version: pn.version, rendererPackageName: pn.rendererPackageName, rendererConfig: pn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ms(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: pn.findFiberByHostInstance || Rf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ar.isDisabled && ar.supportsFiber) try {
    Yi = ar.inject($f), dt = ar;
  } catch {
  }
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf;
ye.createPortal = Ca;
ye.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : Error(w(268, Object.keys(e)));
  return e = ms(t), e = e === null ? null : e.stateNode, e;
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
  if (!Jn(t)) throw Error(w(200));
  return il(null, e, t, !0, n);
};
ye.render = function(e, t, n) {
  if (!Jn(t)) throw Error(w(200));
  return il(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function(e) {
  if (!Jn(e)) throw Error(w(40));
  return e._reactRootContainer ? (ya(function() {
    il(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Gt] = null;
    });
  }), !0) : !1;
};
ye.unstable_batchedUpdates = va;
ye.unstable_createPortal = function(e, t) {
  return Ca(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Jn(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return il(e, t, n, !1, r);
};
ye.version = "17.0.2";
function _a() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_a);
    } catch (e) {
      console.error(e);
    }
}
_a(), Zu.exports = ye;
var Af = Zu.exports;
const Bf = {
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
}), Na = (e) => Math.max(0, Math.min(1, e)), Vf = (e, t = 8) => {
  const n = Na(e), r = 100 - t * 2;
  return t + n * r;
}, Er = (e) => e.length <= 1 ? e.map((t) => ({ ...t, position: 0.5 })) : e.map((t, n) => ({
  ...t,
  position: n / (e.length - 1)
})), Pa = (e) => [...e].sort((t, n) => t.position - n.position), Ta = () => ({
  displayName: "Process Line Title",
  introductionText: "Click and drag to explore. Select an item for more details.",
  styling: Bf,
  items: Er([
    kr(0),
    kr(1),
    kr(2)
  ])
}), Ll = (e) => ({
  ...e,
  items: Pa(e.items)
});
function Hf({
  initialConfiguration: e,
  isSaving: t,
  saveError: n,
  onSave: r,
  onCancel: l
}) {
  const [i, o] = fe.useState("basic"), [u, s] = fe.useState(
    Ll(e)
  ), [d, S] = fe.useState(0), P = fe.useRef(null);
  fe.useEffect(() => {
    s(Ll(e));
  }, [e]), fe.useEffect(() => {
    d > u.items.length - 1 && S(Math.max(u.items.length - 1, 0));
  }, [u.items.length, d]);
  const p = u.items[d], x = (v) => {
    s((g) => Ll(v(g)));
  }, _ = (v, g) => {
    x((z) => ({
      ...z,
      styling: {
        ...z.styling,
        [v]: g
      }
    }));
  }, N = (v) => {
    x((g) => ({
      ...g,
      items: g.items.map((z, De) => De === d ? v(z) : z)
    }));
  }, f = () => {
    x((v) => {
      const g = [...v.items, kr(v.items.length)];
      return {
        ...v,
        items: Er(g)
      };
    }), S(u.items.length);
  }, a = (v) => {
    x((g) => {
      const z = g.items.filter((De, K) => K !== v);
      return z.length ? {
        ...g,
        items: Er(z)
      } : {
        ...g,
        items: []
      };
    });
  }, c = () => {
    x((v) => ({
      ...v,
      items: Er(v.items)
    }));
  }, m = () => {
    u.items.length && o("placement");
  }, h = (v, g) => {
    const z = P.current;
    if (!z)
      return;
    S(v), g.preventDefault();
    const { pointerId: De } = g, K = (Re) => {
      const ke = z.getBoundingClientRect(), rt = Na((Re.clientX - ke.left) / ke.width);
      x((St) => ({
        ...St,
        items: St.items.map((kt, bt) => bt === v ? { ...kt, position: rt } : kt)
      }));
    }, W = (Re) => {
      Re.pointerId === De && (window.removeEventListener("pointermove", K), window.removeEventListener("pointerup", W));
    };
    window.addEventListener("pointermove", K), window.addEventListener("pointerup", W);
  }, j = {
    basic: /* @__PURE__ */ y.jsxs("div", { className: "studio-page-content", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
        /* @__PURE__ */ y.jsx("label", { htmlFor: "processline-display-name", children: "Display Name" }),
        /* @__PURE__ */ y.jsx(
          "input",
          {
            id: "processline-display-name",
            type: "text",
            value: u.displayName,
            onChange: (v) => x((g) => ({
              ...g,
              displayName: v.target.value
            }))
          }
        )
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
        /* @__PURE__ */ y.jsx("label", { htmlFor: "processline-introduction-text", children: "Introduction Text" }),
        /* @__PURE__ */ y.jsx(
          "textarea",
          {
            id: "processline-introduction-text",
            rows: 6,
            value: u.introductionText,
            onChange: (v) => x((g) => ({
              ...g,
              introductionText: v.target.value
            }))
          }
        )
      ] })
    ] }),
    styling: /* @__PURE__ */ y.jsxs("div", { className: "studio-page-content styling-page", children: [
      /* @__PURE__ */ y.jsxs("section", { className: "styling-section", children: [
        /* @__PURE__ */ y.jsx("h3", { children: "Styling of Line Items" }),
        /* @__PURE__ */ y.jsxs("div", { className: "style-grid two-column", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ y.jsx("label", { htmlFor: "lineItemTitleColor", children: "Title text color" }),
            /* @__PURE__ */ y.jsx(
              "input",
              {
                id: "lineItemTitleColor",
                type: "text",
                value: u.styling.lineItemTitleColor,
                onChange: (v) => _("lineItemTitleColor", v.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ y.jsx("label", { htmlFor: "lineItemTitleFontSize", children: "Title font size" }),
            /* @__PURE__ */ y.jsx(
              "input",
              {
                id: "lineItemTitleFontSize",
                type: "number",
                min: 1,
                value: u.styling.lineItemTitleFontSize,
                onChange: (v) => _("lineItemTitleFontSize", Number(v.target.value) || 1)
              }
            )
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ y.jsx("label", { htmlFor: "lineItemLabelColor", children: "Label text color" }),
            /* @__PURE__ */ y.jsx(
              "input",
              {
                id: "lineItemLabelColor",
                type: "text",
                value: u.styling.lineItemLabelColor,
                onChange: (v) => _("lineItemLabelColor", v.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ y.jsx("label", { htmlFor: "lineItemLabelFontSize", children: "Label font size" }),
            /* @__PURE__ */ y.jsx(
              "input",
              {
                id: "lineItemLabelFontSize",
                type: "number",
                min: 1,
                value: u.styling.lineItemLabelFontSize,
                onChange: (v) => _("lineItemLabelFontSize", Number(v.target.value) || 1)
              }
            )
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group single-span", children: [
            /* @__PURE__ */ y.jsx("label", { htmlFor: "highlightColor", children: "Highlight color" }),
            /* @__PURE__ */ y.jsx(
              "input",
              {
                id: "highlightColor",
                type: "text",
                value: u.styling.highlightColor,
                onChange: (v) => _("highlightColor", v.target.value)
              }
            ),
            /* @__PURE__ */ y.jsx("span", { className: "field-hint", children: "Color of the title, dot, and progress pill when selected." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ y.jsxs("section", { className: "styling-section", children: [
        /* @__PURE__ */ y.jsx("h3", { children: "Styling of Cards" }),
        /* @__PURE__ */ y.jsxs("div", { className: "style-grid two-column", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group single-span", children: [
            /* @__PURE__ */ y.jsx("label", { htmlFor: "cardBackgroundColor", children: "Card background color" }),
            /* @__PURE__ */ y.jsx(
              "input",
              {
                id: "cardBackgroundColor",
                type: "text",
                value: u.styling.cardBackgroundColor,
                onChange: (v) => _("cardBackgroundColor", v.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ y.jsx("label", { htmlFor: "cardTitleColor", children: "Title text color" }),
            /* @__PURE__ */ y.jsx(
              "input",
              {
                id: "cardTitleColor",
                type: "text",
                value: u.styling.cardTitleColor,
                onChange: (v) => _("cardTitleColor", v.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ y.jsx("label", { htmlFor: "cardTitleFontSize", children: "Title font size" }),
            /* @__PURE__ */ y.jsx(
              "input",
              {
                id: "cardTitleFontSize",
                type: "number",
                min: 1,
                value: u.styling.cardTitleFontSize,
                onChange: (v) => _("cardTitleFontSize", Number(v.target.value) || 1)
              }
            )
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ y.jsx("label", { htmlFor: "cardDescriptionColor", children: "Description text color" }),
            /* @__PURE__ */ y.jsx(
              "input",
              {
                id: "cardDescriptionColor",
                type: "text",
                value: u.styling.cardDescriptionColor,
                onChange: (v) => _("cardDescriptionColor", v.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
            /* @__PURE__ */ y.jsx("label", { htmlFor: "cardDescriptionFontSize", children: "Description font size" }),
            /* @__PURE__ */ y.jsx(
              "input",
              {
                id: "cardDescriptionFontSize",
                type: "number",
                min: 1,
                value: u.styling.cardDescriptionFontSize,
                onChange: (v) => _("cardDescriptionFontSize", Number(v.target.value) || 1)
              }
            )
          ] })
        ] })
      ] })
    ] }),
    items: /* @__PURE__ */ y.jsxs("div", { className: "studio-page-content items-page", children: [
      /* @__PURE__ */ y.jsxs("aside", { className: "items-sidebar", children: [
        /* @__PURE__ */ y.jsx("button", { className: "primary-button add-item-button", type: "button", onClick: f, children: "+ Add line item" }),
        /* @__PURE__ */ y.jsx("div", { className: "items-list", children: u.items.map((v, g) => /* @__PURE__ */ y.jsxs(
          "div",
          {
            className: `item-row ${g === d ? "selected" : ""}`,
            children: [
              /* @__PURE__ */ y.jsx(
                "button",
                {
                  type: "button",
                  className: "item-select-button",
                  onClick: () => S(g),
                  children: v.title || `Item ${g + 1}`
                }
              ),
              /* @__PURE__ */ y.jsx(
                "button",
                {
                  type: "button",
                  className: "item-delete-button",
                  onClick: () => a(g),
                  "aria-label": `Delete ${v.title || `Item ${g + 1}`}`,
                  children: "🗑"
                }
              )
            ]
          },
          `${v.title}-${v.label}-${v.position}`
        )) })
      ] }),
      /* @__PURE__ */ y.jsx("div", { className: "item-editor-panel", children: p ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
          /* @__PURE__ */ y.jsx("label", { htmlFor: "lineItemTitle", children: "Title" }),
          /* @__PURE__ */ y.jsx(
            "input",
            {
              id: "lineItemTitle",
              type: "text",
              value: p.title,
              onChange: (v) => N((g) => ({
                ...g,
                title: v.target.value
              }))
            }
          )
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
          /* @__PURE__ */ y.jsx("label", { htmlFor: "lineItemLabel", children: "Label" }),
          /* @__PURE__ */ y.jsx(
            "input",
            {
              id: "lineItemLabel",
              type: "text",
              value: p.label,
              onChange: (v) => N((g) => ({
                ...g,
                label: v.target.value
              }))
            }
          )
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "studio-field-group", children: [
          /* @__PURE__ */ y.jsx("label", { htmlFor: "lineItemDescription", children: "Description" }),
          /* @__PURE__ */ y.jsx(
            "textarea",
            {
              id: "lineItemDescription",
              rows: 6,
              value: p.description,
              onChange: (v) => N((g) => ({
                ...g,
                description: v.target.value
              }))
            }
          )
        ] }),
        /* @__PURE__ */ y.jsxs("fieldset", { className: "radio-field-group", children: [
          /* @__PURE__ */ y.jsx("legend", { children: "Label placement" }),
          /* @__PURE__ */ y.jsxs("label", { htmlFor: `displayAboveLine-${d}`, children: [
            /* @__PURE__ */ y.jsx(
              "input",
              {
                id: `displayAboveLine-${d}`,
                type: "radio",
                name: "labelPlacement",
                checked: p.displayAboveLine,
                onChange: () => N((v) => ({
                  ...v,
                  displayAboveLine: !0
                }))
              }
            ),
            "Display above line"
          ] }),
          /* @__PURE__ */ y.jsxs("label", { htmlFor: `displayBelowLine-${d}`, children: [
            /* @__PURE__ */ y.jsx(
              "input",
              {
                id: `displayBelowLine-${d}`,
                type: "radio",
                name: "labelPlacement",
                checked: !p.displayAboveLine,
                onChange: () => N((v) => ({
                  ...v,
                  displayAboveLine: !1
                }))
              }
            ),
            "Display below line"
          ] })
        ] })
      ] }) : /* @__PURE__ */ y.jsx("div", { className: "empty-editor-state", children: "Add a line item to begin configuring the process line." }) })
    ] }),
    placement: /* @__PURE__ */ y.jsxs("div", { className: "studio-page-content placement-page", children: [
      /* @__PURE__ */ y.jsx("h3", { children: "Placement of Line Items" }),
      /* @__PURE__ */ y.jsx("p", { className: "placement-copy", children: "Drag items to position them along the line. Use the button below to space them evenly." }),
      /* @__PURE__ */ y.jsx("div", { className: "placement-shell", children: /* @__PURE__ */ y.jsx("div", { ref: P, className: "placement-track", children: Pa(u.items).map((v, g) => /* @__PURE__ */ y.jsxs(
        "button",
        {
          type: "button",
          className: `placement-marker ${v.displayAboveLine ? "above" : "below"} ${g === d ? "selected" : ""}`,
          style: { left: `${Vf(v.position)}%` },
          onPointerDown: (z) => h(g, z),
          onClick: () => S(g),
          onFocus: () => S(g),
          "aria-label": `Select ${v.title || `Item ${g + 1}`}`,
          "aria-pressed": g === d,
          children: [
            /* @__PURE__ */ y.jsx("span", { className: "placement-node" }),
            /* @__PURE__ */ y.jsx("span", { className: "placement-label", children: v.title || `Item ${g + 1}` })
          ]
        },
        `${v.title}-${v.label}-${v.position}`
      )) }) }),
      p && /* @__PURE__ */ y.jsxs("section", { className: "placement-detail-card", "aria-label": "Selected line item details", children: [
        /* @__PURE__ */ y.jsx("div", { className: "placement-detail-eyebrow", children: "Selected item" }),
        /* @__PURE__ */ y.jsxs("h4", { className: "placement-detail-title", children: [
          p.title,
          p.label ? ` - ${p.label}` : ""
        ] }),
        /* @__PURE__ */ y.jsx("p", { className: "placement-detail-description", children: p.description || "No description added yet." })
      ] }),
      /* @__PURE__ */ y.jsx("button", { className: "secondary-button evenly-space-button", type: "button", onClick: c, children: "Space items evenly" })
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
      onClick: m
    },
    placement: {
      label: "Save",
      onClick: () => r(u)
    }
  }[i], T = () => {
    i === "styling" ? o("basic") : i === "items" ? o("styling") : i === "placement" && o("items");
  };
  return /* @__PURE__ */ y.jsx("div", { className: "xblock-processline-editor", children: /* @__PURE__ */ y.jsxs("div", { className: "editor-shell", children: [
    /* @__PURE__ */ y.jsx("h2", { className: "editor-title", children: "Editing: Process Line" }),
    j[i],
    n && /* @__PURE__ */ y.jsx("div", { className: "save-error", role: "alert", children: n }),
    /* @__PURE__ */ y.jsxs("div", { className: "editor-actions", children: [
      /* @__PURE__ */ y.jsx(
        "button",
        {
          className: "primary-button",
          type: "button",
          onClick: k.onClick,
          disabled: t || i === "items" && !u.items.length,
          children: t ? "Saving…" : k.label
        }
      ),
      i !== "basic" && /* @__PURE__ */ y.jsx("button", { className: "secondary-button", type: "button", onClick: T, disabled: t, children: "Back" }),
      /* @__PURE__ */ y.jsx("button", { className: "link-button", type: "button", onClick: l, disabled: t, children: "Cancel" })
    ] })
  ] }) });
}
function Wf({
  initialConfiguration: e,
  studioSaveUrl: t,
  runtime: n
}) {
  const [r, l] = fe.useState(e), [i, o] = fe.useState(!1), [u, s] = fe.useState(""), d = () => {
    n.notify("cancel", {});
  }, S = (P) => {
    o(!0), s(""), n.notify("save", { state: "start" }), $.ajax({
      url: t,
      method: "POST",
      data: JSON.stringify(P),
      contentType: "application/json"
    }).done((p) => {
      if ((p == null ? void 0 : p.result) !== "success") {
        s((p == null ? void 0 : p.message) || "Failed to save Process Line configuration."), n.notify("error", {
          title: "Save Error",
          message: (p == null ? void 0 : p.message) || "Failed to save Process Line configuration."
        }), o(!1);
        return;
      }
      l(p.configuration || P), n.notify("save", { state: "end" }), o(!1);
    }).fail(() => {
      s("Failed to save Process Line configuration."), n.notify("error", {
        title: "Save Error",
        message: "Failed to save Process Line configuration."
      }), o(!1);
    });
  };
  return /* @__PURE__ */ y.jsx(
    Hf,
    {
      initialConfiguration: r || Ta(),
      isSaving: i,
      saveError: u,
      onCancel: d,
      onSave: S
    }
  );
}
const Qf = (e) => {
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
}, Yf = (e, t, n) => {
  const r = t && "jquery" in t ? t[0] : t;
  if (!r || !(r instanceof Element)) {
    console.error("Invalid DOM element provided to renderEditor:", t);
    return;
  }
  const l = e.handlerUrl(r, "studio_save");
  Af.render(
    /* @__PURE__ */ y.jsx(fe.StrictMode, { children: /* @__PURE__ */ y.jsx(
      Wf,
      {
        initialConfiguration: Qf(n),
        studioSaveUrl: l,
        runtime: e
      }
    ) }),
    r
  );
};
export {
  Yf as renderEditor
};
