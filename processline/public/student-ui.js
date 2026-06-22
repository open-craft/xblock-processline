function xi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rd = { exports: {} }, ki = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pf = Object.getOwnPropertySymbols, Vv = Object.prototype.hasOwnProperty, Yv = Object.prototype.propertyIsEnumerable;
function Qv(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function Xv() {
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
var Id = Xv() ? Object.assign : function(e, t) {
  for (var n, r = Qv(e), i, a = 1; a < arguments.length; a++) {
    n = Object(arguments[a]);
    for (var o in n)
      Vv.call(n, o) && (r[o] = n[o]);
    if (pf) {
      i = pf(n);
      for (var l = 0; l < i.length; l++)
        Yv.call(n, i[l]) && (r[i[l]] = n[i[l]]);
    }
  }
  return r;
}, Ld = { exports: {} }, U = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xs = Id, or = 60103, Md = 60106;
U.Fragment = 60107;
U.StrictMode = 60108;
U.Profiler = 60114;
var Dd = 60109, $d = 60110, Fd = 60112;
U.Suspense = 60113;
var zd = 60115, Ud = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var Qe = Symbol.for;
  or = Qe("react.element"), Md = Qe("react.portal"), U.Fragment = Qe("react.fragment"), U.StrictMode = Qe("react.strict_mode"), U.Profiler = Qe("react.profiler"), Dd = Qe("react.provider"), $d = Qe("react.context"), Fd = Qe("react.forward_ref"), U.Suspense = Qe("react.suspense"), zd = Qe("react.memo"), Ud = Qe("react.lazy");
}
var mf = typeof Symbol == "function" && Symbol.iterator;
function Gv(e) {
  return e === null || typeof e != "object" ? null : (e = mf && e[mf] || e["@@iterator"], typeof e == "function" ? e : null);
}
function Si(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Bd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Hd = {};
function lr(e, t, n) {
  this.props = e, this.context = t, this.refs = Hd, this.updater = n || Bd;
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error(Si(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
lr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wd() {
}
Wd.prototype = lr.prototype;
function ks(e, t, n) {
  this.props = e, this.context = t, this.refs = Hd, this.updater = n || Bd;
}
var Ss = ks.prototype = new Wd();
Ss.constructor = ks;
xs(Ss, lr.prototype);
Ss.isPureReactComponent = !0;
var Os = { current: null }, Vd = Object.prototype.hasOwnProperty, Yd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qd(e, t, n) {
  var r, i = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Vd.call(t, r) && !Yd.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: or, type: e, key: a, ref: o, props: i, _owner: Os.current };
}
function Kv(e, t) {
  return { $$typeof: or, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ps(e) {
  return typeof e == "object" && e !== null && e.$$typeof === or;
}
function qv(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var vf = /\/+/g;
function Oo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? qv("" + e.key) : t.toString(36);
}
function la(e, t, n, r, i) {
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
        case or:
        case Md:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + Oo(o, 0) : r, Array.isArray(i) ? (n = "", e != null && (n = e.replace(vf, "$&/") + "/"), la(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Ps(i) && (i = Kv(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(vf, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Array.isArray(e)) for (var l = 0; l < e.length; l++) {
    a = e[l];
    var s = r + Oo(a, l);
    o += la(a, t, n, s, i);
  }
  else if (s = Gv(e), typeof s == "function") for (e = s.call(e), l = 0; !(a = e.next()).done; ) a = a.value, s = r + Oo(a, l++), o += la(a, t, n, s, i);
  else if (a === "object") throw t = "" + e, Error(Si(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
  return o;
}
function Di(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return la(e, r, "", "", function(a) {
    return t.call(n, a, i++);
  }), r;
}
function Zv(e) {
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
var Xd = { current: null };
function gt() {
  var e = Xd.current;
  if (e === null) throw Error(Si(321));
  return e;
}
var Jv = { ReactCurrentDispatcher: Xd, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: Os, IsSomeRendererActing: { current: !1 }, assign: xs };
U.Children = { map: Di, forEach: function(e, t, n) {
  Di(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Di(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Di(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ps(e)) throw Error(Si(143));
  return e;
} };
U.Component = lr;
U.PureComponent = ks;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jv;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error(Si(267, e));
  var r = xs({}, e.props), i = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = Os.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (s in t) Vd.call(t, s) && !Yd.hasOwnProperty(s) && (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return {
    $$typeof: or,
    type: e.type,
    key: i,
    ref: a,
    props: r,
    _owner: o
  };
};
U.createContext = function(e, t) {
  return t === void 0 && (t = null), e = { $$typeof: $d, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: Dd, _context: e }, e.Consumer = e;
};
U.createElement = Qd;
U.createFactory = function(e) {
  var t = Qd.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: Fd, render: e };
};
U.isValidElement = Ps;
U.lazy = function(e) {
  return { $$typeof: Ud, _payload: { _status: -1, _result: e }, _init: Zv };
};
U.memo = function(e, t) {
  return { $$typeof: zd, type: e, compare: t === void 0 ? null : t };
};
U.useCallback = function(e, t) {
  return gt().useCallback(e, t);
};
U.useContext = function(e, t) {
  return gt().useContext(e, t);
};
U.useDebugValue = function() {
};
U.useEffect = function(e, t) {
  return gt().useEffect(e, t);
};
U.useImperativeHandle = function(e, t, n) {
  return gt().useImperativeHandle(e, t, n);
};
U.useLayoutEffect = function(e, t) {
  return gt().useLayoutEffect(e, t);
};
U.useMemo = function(e, t) {
  return gt().useMemo(e, t);
};
U.useReducer = function(e, t, n) {
  return gt().useReducer(e, t, n);
};
U.useRef = function(e) {
  return gt().useRef(e);
};
U.useState = function(e) {
  return gt().useState(e);
};
U.version = "17.0.2";
Ld.exports = U;
var _ = Ld.exports;
const S = /* @__PURE__ */ xi(_);
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eh = _, Gd = 60103;
ki.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var hf = Symbol.for;
  Gd = hf("react.element"), ki.Fragment = hf("react.fragment");
}
var th = eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, nh = Object.prototype.hasOwnProperty, rh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kd(e, t, n) {
  var r, i = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) nh.call(t, r) && !rh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Gd, type: e, key: a, ref: o, props: i, _owner: th.current };
}
ki.jsx = Kd;
ki.jsxs = Kd;
Rd.exports = ki;
var z = Rd.exports, qd = { exports: {} }, Ye = {}, Zd = { exports: {} }, Jd = {};
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
    var o = Date, l = o.now();
    e.unstable_now = function() {
      return o.now() - l;
    };
  }
  if (typeof window > "u" || typeof MessageChannel != "function") {
    var s = null, u = null, f = function() {
      if (s !== null) try {
        var C = e.unstable_now();
        s(!0, C), s = null;
      } catch (T) {
        throw setTimeout(f, 0), T;
      }
    };
    t = function(C) {
      s !== null ? setTimeout(t, 0, C) : (s = C, setTimeout(f, 0));
    }, n = function(C, T) {
      u = setTimeout(C, T);
    }, r = function() {
      clearTimeout(u);
    }, e.unstable_shouldYield = function() {
      return !1;
    }, i = e.unstable_forceFrameRate = function() {
    };
  } else {
    var h = window.setTimeout, p = window.clearTimeout;
    if (typeof console < "u") {
      var y = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof y != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var x = !1, b = null, d = -1, c = 5, m = 0;
    e.unstable_shouldYield = function() {
      return e.unstable_now() >= m;
    }, i = function() {
    }, e.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : c = 0 < C ? Math.floor(1e3 / C) : 5;
    };
    var w = new MessageChannel(), v = w.port2;
    w.port1.onmessage = function() {
      if (b !== null) {
        var C = e.unstable_now();
        m = C + c;
        try {
          b(!0, C) ? v.postMessage(null) : (x = !1, b = null);
        } catch (T) {
          throw v.postMessage(null), T;
        }
      } else x = !1;
    }, t = function(C) {
      b = C, x || (x = !0, v.postMessage(null));
    }, n = function(C, T) {
      d = h(function() {
        C(e.unstable_now());
      }, T);
    }, r = function() {
      p(d), d = -1;
    };
  }
  function k(C, T) {
    var $ = C.length;
    C.push(T);
    e: for (; ; ) {
      var W = $ - 1 >>> 1, Q = C[W];
      if (Q !== void 0 && 0 < N(Q, T)) C[W] = T, C[$] = Q, $ = W;
      else break e;
    }
  }
  function E(C) {
    return C = C[0], C === void 0 ? null : C;
  }
  function O(C) {
    var T = C[0];
    if (T !== void 0) {
      var $ = C.pop();
      if ($ !== T) {
        C[0] = $;
        e: for (var W = 0, Q = C.length; W < Q; ) {
          var Ne = 2 * (W + 1) - 1, Me = C[Ne], _e = Ne + 1, qe = C[_e];
          if (Me !== void 0 && 0 > N(Me, $)) qe !== void 0 && 0 > N(qe, Me) ? (C[W] = qe, C[_e] = $, W = _e) : (C[W] = Me, C[Ne] = $, W = Ne);
          else if (qe !== void 0 && 0 > N(qe, $)) C[W] = qe, C[_e] = $, W = _e;
          else break e;
        }
      }
      return T;
    }
    return null;
  }
  function N(C, T) {
    var $ = C.sortIndex - T.sortIndex;
    return $ !== 0 ? $ : C.id - T.id;
  }
  var P = [], L = [], H = 1, F = null, D = 3, ae = !1, re = !1, V = !1;
  function oe(C) {
    for (var T = E(L); T !== null; ) {
      if (T.callback === null) O(L);
      else if (T.startTime <= C) O(L), T.sortIndex = T.expirationTime, k(P, T);
      else break;
      T = E(L);
    }
  }
  function Ae(C) {
    if (V = !1, oe(C), !re) if (E(P) !== null) re = !0, t(le);
    else {
      var T = E(L);
      T !== null && n(Ae, T.startTime - C);
    }
  }
  function le(C, T) {
    re = !1, V && (V = !1, r()), ae = !0;
    var $ = D;
    try {
      for (oe(T), F = E(P); F !== null && (!(F.expirationTime > T) || C && !e.unstable_shouldYield()); ) {
        var W = F.callback;
        if (typeof W == "function") {
          F.callback = null, D = F.priorityLevel;
          var Q = W(F.expirationTime <= T);
          T = e.unstable_now(), typeof Q == "function" ? F.callback = Q : F === E(P) && O(P), oe(T);
        } else O(P);
        F = E(P);
      }
      if (F !== null) var Ne = !0;
      else {
        var Me = E(L);
        Me !== null && n(Ae, Me.startTime - T), Ne = !1;
      }
      return Ne;
    } finally {
      F = null, D = $, ae = !1;
    }
  }
  var fe = i;
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    re || ae || (re = !0, t(le));
  }, e.unstable_getCurrentPriorityLevel = function() {
    return D;
  }, e.unstable_getFirstCallbackNode = function() {
    return E(P);
  }, e.unstable_next = function(C) {
    switch (D) {
      case 1:
      case 2:
      case 3:
        var T = 3;
        break;
      default:
        T = D;
    }
    var $ = D;
    D = T;
    try {
      return C();
    } finally {
      D = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = fe, e.unstable_runWithPriority = function(C, T) {
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
    var $ = D;
    D = C;
    try {
      return T();
    } finally {
      D = $;
    }
  }, e.unstable_scheduleCallback = function(C, T, $) {
    var W = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? W + $ : W) : $ = W, C) {
      case 1:
        var Q = -1;
        break;
      case 2:
        Q = 250;
        break;
      case 5:
        Q = 1073741823;
        break;
      case 4:
        Q = 1e4;
        break;
      default:
        Q = 5e3;
    }
    return Q = $ + Q, C = { id: H++, callback: T, priorityLevel: C, startTime: $, expirationTime: Q, sortIndex: -1 }, $ > W ? (C.sortIndex = $, k(L, C), E(P) === null && C === E(L) && (V ? r() : V = !0, n(Ae, $ - W))) : (C.sortIndex = Q, k(P, C), re || ae || (re = !0, t(le))), C;
  }, e.unstable_wrapCallback = function(C) {
    var T = D;
    return function() {
      var $ = D;
      D = T;
      try {
        return C.apply(this, arguments);
      } finally {
        D = $;
      }
    };
  };
})(Jd);
Zd.exports = Jd;
var ih = Zd.exports;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var to = _, J = Id, de = ih;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!to) throw Error(A(227));
var ep = /* @__PURE__ */ new Set(), qr = {};
function gn(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (qr[e] = t, e = 0; e < t.length; e++) ep.add(t[e]);
}
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ah = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, gf = Object.prototype.hasOwnProperty, yf = {}, wf = {};
function oh(e) {
  return gf.call(wf, e) ? !0 : gf.call(yf, e) ? !1 : ah.test(e) ? wf[e] = !0 : (yf[e] = !0, !1);
}
function lh(e, t, n, r) {
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
function sh(e, t, n, r) {
  if (t === null || typeof t > "u" || lh(e, t, n, r)) return !0;
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
function Ee(e, t, n, r, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ve[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ve[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ve[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ve[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ve[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ve[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ve[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ve[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ve[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cs = /[\-:]([a-z])/g;
function As(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Cs,
    As
  );
  ve[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Cs, As);
  ve[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Cs, As);
  ve[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ve[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ve[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ns(e, t, n, r) {
  var i = ve.hasOwnProperty(t) ? ve[t] : null, a = i !== null ? i.type === 0 : r ? !1 : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
  a || (sh(t, n, i, r) && (n = null), r || i === null ? oh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yn = to.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Cr = 60103, en = 60106, kt = 60107, _s = 60108, Lr = 60114, Ts = 60109, js = 60110, no = 60112, Mr = 60113, Ea = 60120, ro = 60115, Rs = 60116, Is = 60121, Ls = 60128, tp = 60129, Ms = 60130, ol = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var ce = Symbol.for;
  Cr = ce("react.element"), en = ce("react.portal"), kt = ce("react.fragment"), _s = ce("react.strict_mode"), Lr = ce("react.profiler"), Ts = ce("react.provider"), js = ce("react.context"), no = ce("react.forward_ref"), Mr = ce("react.suspense"), Ea = ce("react.suspense_list"), ro = ce("react.memo"), Rs = ce("react.lazy"), Is = ce("react.block"), ce("react.scope"), Ls = ce("react.opaque.id"), tp = ce("react.debug_trace_mode"), Ms = ce("react.offscreen"), ol = ce("react.legacy_hidden");
}
var bf = typeof Symbol == "function" && Symbol.iterator;
function mr(e) {
  return e === null || typeof e != "object" ? null : (e = bf && e[bf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Po;
function Ar(e) {
  if (Po === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Po = t && t[1] || "";
  }
  return `
` + Po + e;
}
var Co = !1;
function $i(e, t) {
  if (!e || Co) return "";
  Co = !0;
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
      for (var i = s.stack.split(`
`), a = r.stack.split(`
`), o = i.length - 1, l = a.length - 1; 1 <= o && 0 <= l && i[o] !== a[l]; ) l--;
      for (; 1 <= o && 0 <= l; o--, l--) if (i[o] !== a[l]) {
        if (o !== 1 || l !== 1)
          do
            if (o--, l--, 0 > l || i[o] !== a[l]) return `
` + i[o].replace(" at new ", " at ");
          while (1 <= o && 0 <= l);
        break;
      }
    }
  } finally {
    Co = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ar(e) : "";
}
function uh(e) {
  switch (e.tag) {
    case 5:
      return Ar(e.type);
    case 16:
      return Ar("Lazy");
    case 13:
      return Ar("Suspense");
    case 19:
      return Ar("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = $i(e.type, !1), e;
    case 11:
      return e = $i(e.type.render, !1), e;
    case 22:
      return e = $i(e.type._render, !1), e;
    case 1:
      return e = $i(e.type, !0), e;
    default:
      return "";
  }
}
function $n(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kt:
      return "Fragment";
    case en:
      return "Portal";
    case Lr:
      return "Profiler";
    case _s:
      return "StrictMode";
    case Mr:
      return "Suspense";
    case Ea:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case js:
      return (e.displayName || "Context") + ".Consumer";
    case Ts:
      return (e._context.displayName || "Context") + ".Provider";
    case no:
      var t = e.render;
      return t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case ro:
      return $n(e.type);
    case Is:
      return $n(e._render);
    case Rs:
      t = e._payload, e = e._init;
      try {
        return $n(e(t));
      } catch {
      }
  }
  return null;
}
function Dt(e) {
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
function np(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function fh(e) {
  var t = np(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Fi(e) {
  e._valueTracker || (e._valueTracker = fh(e));
}
function rp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = np(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function xa(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ll(e, t) {
  var n = t.checked;
  return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ef(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Dt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ip(e, t) {
  t = t.checked, t != null && Ns(e, "checked", t, !1);
}
function sl(e, t) {
  ip(e, t);
  var n = Dt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ul(e, t.type, n) : t.hasOwnProperty("defaultValue") && ul(e, t.type, Dt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function xf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ul(e, t, n) {
  (t !== "number" || xa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function ch(e) {
  var t = "";
  return to.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function fl(e, t) {
  return e = J({ children: void 0 }, t), (t = ch(t.children)) && (e.children = t), e;
}
function Fn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Dt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function cl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function kf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Dt(n) };
}
function ap(e, t) {
  var n = Dt(t.value), r = Dt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Sf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var dl = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function op(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? op(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var zi, lp = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== dl.svg || "innerHTML" in e) e.innerHTML = t;
  else {
    for (zi = zi || document.createElement("div"), zi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Zr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dr = {
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
}, dh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function(e) {
  dh.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Dr[t] = Dr[e];
  });
});
function sp(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dr.hasOwnProperty(e) && Dr[e] ? ("" + t).trim() : t + "px";
}
function up(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = sp(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var ph = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ml(e, t) {
  if (t) {
    if (ph[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function vl(e, t) {
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
function Ds(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var hl = null, zn = null, Un = null;
function Of(e) {
  if (e = Pi(e)) {
    if (typeof hl != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = uo(t), hl(e.stateNode, e.type, t));
  }
}
function fp(e) {
  zn ? Un ? Un.push(e) : Un = [e] : zn = e;
}
function cp() {
  if (zn) {
    var e = zn, t = Un;
    if (Un = zn = null, Of(e), t) for (e = 0; e < t.length; e++) Of(t[e]);
  }
}
function $s(e, t) {
  return e(t);
}
function dp(e, t, n, r, i) {
  return e(t, n, r, i);
}
function Fs() {
}
var pp = $s, tn = !1, Ao = !1;
function zs() {
  (zn !== null || Un !== null) && (Fs(), cp());
}
function mh(e, t, n) {
  if (Ao) return e(t, n);
  Ao = !0;
  try {
    return pp(e, t, n);
  } finally {
    Ao = !1, zs();
  }
}
function Jr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = uo(n);
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
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var gl = !1;
if (dt) try {
  var vr = {};
  Object.defineProperty(vr, "passive", { get: function() {
    gl = !0;
  } }), window.addEventListener("test", vr, vr), window.removeEventListener("test", vr, vr);
} catch {
  gl = !1;
}
function vh(e, t, n, r, i, a, o, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var $r = !1, ka = null, Sa = !1, yl = null, hh = { onError: function(e) {
  $r = !0, ka = e;
} };
function gh(e, t, n, r, i, a, o, l, s) {
  $r = !1, ka = null, vh.apply(hh, arguments);
}
function yh(e, t, n, r, i, a, o, l, s) {
  if (gh.apply(this, arguments), $r) {
    if ($r) {
      var u = ka;
      $r = !1, ka = null;
    } else throw Error(A(198));
    Sa || (Sa = !0, yl = u);
  }
}
function wn(e) {
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
function mp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Pf(e) {
  if (wn(e) !== e) throw Error(A(188));
}
function wh(e) {
  var t = e.alternate;
  if (!t) {
    if (t = wn(e), t === null) throw Error(A(188));
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
        if (a === n) return Pf(i), e;
        if (a === r) return Pf(i), t;
        a = a.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) n = i, r = a;
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          o = !0, n = i, r = a;
          break;
        }
        if (l === r) {
          o = !0, r = i, n = a;
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = a.child; l; ) {
          if (l === n) {
            o = !0, n = a, r = i;
            break;
          }
          if (l === r) {
            o = !0, r = a, n = i;
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function vp(e) {
  if (e = wh(e), !e) return null;
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
function Cf(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var hp, Us, gp, yp, wl = !1, Ze = [], Nt = null, _t = null, Tt = null, ei = /* @__PURE__ */ new Map(), ti = /* @__PURE__ */ new Map(), hr = [], Af = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bl(e, t, n, r, i) {
  return { blockedOn: e, domEventName: t, eventSystemFlags: n | 16, nativeEvent: i, targetContainers: [r] };
}
function Nf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nt = null;
      break;
    case "dragenter":
    case "dragleave":
      _t = null;
      break;
    case "mouseover":
    case "mouseout":
      Tt = null;
      break;
    case "pointerover":
    case "pointerout":
      ei.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ti.delete(t.pointerId);
  }
}
function gr(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a ? (e = bl(t, n, r, i, a), t !== null && (t = Pi(t), t !== null && Us(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function bh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Nt = gr(Nt, e, t, n, r, i), !0;
    case "dragenter":
      return _t = gr(_t, e, t, n, r, i), !0;
    case "mouseover":
      return Tt = gr(Tt, e, t, n, r, i), !0;
    case "pointerover":
      var a = i.pointerId;
      return ei.set(a, gr(ei.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return a = i.pointerId, ti.set(a, gr(ti.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Eh(e) {
  var t = nn(e.target);
  if (t !== null) {
    var n = wn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = mp(n), t !== null) {
          e.blockedOn = t, yp(e.lanePriority, function() {
            de.unstable_runWithPriority(e.priority, function() {
              gp(n);
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
function sa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null) return t = Pi(n), t !== null && Us(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function _f(e, t, n) {
  sa(e) && n.delete(t);
}
function xh() {
  for (wl = !1; 0 < Ze.length; ) {
    var e = Ze[0];
    if (e.blockedOn !== null) {
      e = Pi(e.blockedOn), e !== null && hp(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Vs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && Ze.shift();
  }
  Nt !== null && sa(Nt) && (Nt = null), _t !== null && sa(_t) && (_t = null), Tt !== null && sa(Tt) && (Tt = null), ei.forEach(_f), ti.forEach(_f);
}
function yr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, wl || (wl = !0, de.unstable_scheduleCallback(de.unstable_NormalPriority, xh)));
}
function wp(e) {
  function t(i) {
    return yr(i, e);
  }
  if (0 < Ze.length) {
    yr(Ze[0], e);
    for (var n = 1; n < Ze.length; n++) {
      var r = Ze[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Nt !== null && yr(Nt, e), _t !== null && yr(_t, e), Tt !== null && yr(Tt, e), ei.forEach(t), ti.forEach(t), n = 0; n < hr.length; n++) r = hr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < hr.length && (n = hr[0], n.blockedOn === null); ) Eh(n), n.blockedOn === null && hr.shift();
}
function Ui(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Pn = { animationend: Ui("Animation", "AnimationEnd"), animationiteration: Ui("Animation", "AnimationIteration"), animationstart: Ui("Animation", "AnimationStart"), transitionend: Ui("Transition", "TransitionEnd") }, No = {}, bp = {};
dt && (bp = document.createElement("div").style, "AnimationEvent" in window || (delete Pn.animationend.animation, delete Pn.animationiteration.animation, delete Pn.animationstart.animation), "TransitionEvent" in window || delete Pn.transitionend.transition);
function io(e) {
  if (No[e]) return No[e];
  if (!Pn[e]) return e;
  var t = Pn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in bp) return No[e] = t[n];
  return e;
}
var Ep = io("animationend"), xp = io("animationiteration"), kp = io("animationstart"), Sp = io("transitionend"), Op = /* @__PURE__ */ new Map(), Bs = /* @__PURE__ */ new Map(), kh = [
  "abort",
  "abort",
  Ep,
  "animationEnd",
  xp,
  "animationIteration",
  kp,
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
  Sp,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Hs(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n], i = e[n + 1];
    i = "on" + (i[0].toUpperCase() + i.slice(1)), Bs.set(r, t), Op.set(r, i), gn(i, [r]);
  }
}
var Sh = de.unstable_now;
Sh();
var X = 8;
function Sn(e) {
  if (1 & e) return X = 15, 1;
  if (2 & e) return X = 14, 2;
  if (4 & e) return X = 13, 4;
  var t = 24 & e;
  return t !== 0 ? (X = 12, t) : e & 32 ? (X = 11, 32) : (t = 192 & e, t !== 0 ? (X = 10, t) : e & 256 ? (X = 9, 256) : (t = 3584 & e, t !== 0 ? (X = 8, t) : e & 4096 ? (X = 7, 4096) : (t = 4186112 & e, t !== 0 ? (X = 6, t) : (t = 62914560 & e, t !== 0 ? (X = 5, t) : e & 67108864 ? (X = 4, 67108864) : e & 134217728 ? (X = 3, 134217728) : (t = 805306368 & e, t !== 0 ? (X = 2, t) : 1073741824 & e ? (X = 1, 1073741824) : (X = 8, e))))));
}
function Oh(e) {
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
function Ph(e) {
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
      throw Error(A(358, e));
  }
}
function ni(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return X = 0;
  var r = 0, i = 0, a = e.expiredLanes, o = e.suspendedLanes, l = e.pingedLanes;
  if (a !== 0) r = a, i = X = 15;
  else if (a = n & 134217727, a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = Sn(s), i = X) : (l &= a, l !== 0 && (r = Sn(l), i = X));
  } else a = n & ~o, a !== 0 ? (r = Sn(a), i = X) : l !== 0 && (r = Sn(l), i = X);
  if (r === 0) return 0;
  if (r = 31 - $t(r), r = n & ((0 > r ? 0 : 1 << r) << 1) - 1, t !== 0 && t !== r && !(t & o)) {
    if (Sn(t), i <= X) return t;
    X = i;
  }
  if (t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - $t(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Pp(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Oa(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return e = On(24 & ~t), e === 0 ? Oa(10, t) : e;
    case 10:
      return e = On(192 & ~t), e === 0 ? Oa(8, t) : e;
    case 8:
      return e = On(3584 & ~t), e === 0 && (e = On(4186112 & ~t), e === 0 && (e = 512)), e;
    case 2:
      return t = On(805306368 & ~t), t === 0 && (t = 268435456), t;
  }
  throw Error(A(358, e));
}
function On(e) {
  return e & -e;
}
function _o(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ao(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, t = 31 - $t(t), e[t] = n;
}
var $t = Math.clz32 ? Math.clz32 : Nh, Ch = Math.log, Ah = Math.LN2;
function Nh(e) {
  return e === 0 ? 32 : 31 - (Ch(e) / Ah | 0) | 0;
}
var _h = de.unstable_UserBlockingPriority, Th = de.unstable_runWithPriority, ua = !0;
function jh(e, t, n, r) {
  tn || Fs();
  var i = Ws, a = tn;
  tn = !0;
  try {
    dp(i, e, t, n, r);
  } finally {
    (tn = a) || zs();
  }
}
function Rh(e, t, n, r) {
  Th(_h, Ws.bind(null, e, t, n, r));
}
function Ws(e, t, n, r) {
  if (ua) {
    var i;
    if ((i = (t & 4) === 0) && 0 < Ze.length && -1 < Af.indexOf(e)) e = bl(null, e, t, n, r), Ze.push(e);
    else {
      var a = Vs(e, t, n, r);
      if (a === null) i && Nf(e, r);
      else {
        if (i) {
          if (-1 < Af.indexOf(e)) {
            e = bl(a, e, t, n, r), Ze.push(e);
            return;
          }
          if (bh(a, e, t, n, r)) return;
          Nf(e, r);
        }
        $p(e, t, r, null, n);
      }
    }
  }
}
function Vs(e, t, n, r) {
  var i = Ds(r);
  if (i = nn(i), i !== null) {
    var a = wn(i);
    if (a === null) i = null;
    else {
      var o = a.tag;
      if (o === 13) {
        if (i = mp(a), i !== null) return i;
        i = null;
      } else if (o === 3) {
        if (a.stateNode.hydrate) return a.tag === 3 ? a.stateNode.containerInfo : null;
        i = null;
      } else a !== i && (i = null);
    }
  }
  return $p(e, t, r, i, n), null;
}
var St = null, Ys = null, fa = null;
function Cp() {
  if (fa) return fa;
  var e, t = Ys, n = t.length, r, i = "value" in St ? St.value : St.textContent, a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++) ;
  return fa = i.slice(e, 1 < r ? 1 - r : void 0);
}
function ca(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Bi() {
  return !0;
}
function Tf() {
  return !1;
}
function Re(e) {
  function t(n, r, i, a, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(a) : a[l]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Bi : Tf, this.isPropagationStopped = Tf, this;
  }
  return J(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Bi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Bi);
  }, persist: function() {
  }, isPersistent: Bi }), t;
}
var sr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Qs = Re(sr), Oi = J({}, sr, { view: 0, detail: 0 }), Ih = Re(Oi), To, jo, wr, oo = J({}, Oi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== wr && (wr && e.type === "mousemove" ? (To = e.screenX - wr.screenX, jo = e.screenY - wr.screenY) : jo = To = 0, wr = e), To);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : jo;
} }), jf = Re(oo), Lh = J({}, oo, { dataTransfer: 0 }), Mh = Re(Lh), Dh = J({}, Oi, { relatedTarget: 0 }), Ro = Re(Dh), $h = J({}, sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Fh = Re($h), zh = J({}, sr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Uh = Re(zh), Bh = J({}, sr, { data: 0 }), Rf = Re(Bh), Hh = {
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
}, Wh = {
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
}, Vh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Yh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vh[e]) ? !!t[e] : !1;
}
function Xs() {
  return Yh;
}
var Qh = J({}, Oi, { key: function(e) {
  if (e.key) {
    var t = Hh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ca(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xs, charCode: function(e) {
  return e.type === "keypress" ? ca(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ca(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Xh = Re(Qh), Gh = J({}, oo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), If = Re(Gh), Kh = J({}, Oi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xs }), qh = Re(Kh), Zh = J({}, sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jh = Re(Zh), eg = J({}, oo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), tg = Re(eg), ng = [9, 13, 27, 32], Gs = dt && "CompositionEvent" in window, Fr = null;
dt && "documentMode" in document && (Fr = document.documentMode);
var rg = dt && "TextEvent" in window && !Fr, Ap = dt && (!Gs || Fr && 8 < Fr && 11 >= Fr), Lf = " ", Mf = !1;
function Np(e, t) {
  switch (e) {
    case "keyup":
      return ng.indexOf(t.keyCode) !== -1;
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
function _p(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function ig(e, t) {
  switch (e) {
    case "compositionend":
      return _p(t);
    case "keypress":
      return t.which !== 32 ? null : (Mf = !0, Lf);
    case "textInput":
      return e = t.data, e === Lf && Mf ? null : e;
    default:
      return null;
  }
}
function ag(e, t) {
  if (Cn) return e === "compositionend" || !Gs && Np(e, t) ? (e = Cp(), fa = Ys = St = null, Cn = !1, e) : null;
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
      return Ap && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var og = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Df(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!og[e.type] : t === "textarea";
}
function Tp(e, t, n, r) {
  fp(r), t = Pa(t, "onChange"), 0 < t.length && (n = new Qs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var zr = null, ri = null;
function lg(e) {
  Lp(e, 0);
}
function lo(e) {
  var t = Nn(e);
  if (rp(t)) return e;
}
function sg(e, t) {
  if (e === "change") return t;
}
var jp = !1;
if (dt) {
  var Io;
  if (dt) {
    var Lo = "oninput" in document;
    if (!Lo) {
      var $f = document.createElement("div");
      $f.setAttribute("oninput", "return;"), Lo = typeof $f.oninput == "function";
    }
    Io = Lo;
  } else Io = !1;
  jp = Io && (!document.documentMode || 9 < document.documentMode);
}
function Ff() {
  zr && (zr.detachEvent("onpropertychange", Rp), ri = zr = null);
}
function Rp(e) {
  if (e.propertyName === "value" && lo(ri)) {
    var t = [];
    if (Tp(t, ri, e, Ds(e)), e = lg, tn) e(t);
    else {
      tn = !0;
      try {
        $s(e, t);
      } finally {
        tn = !1, zs();
      }
    }
  }
}
function ug(e, t, n) {
  e === "focusin" ? (Ff(), zr = t, ri = n, zr.attachEvent("onpropertychange", Rp)) : e === "focusout" && Ff();
}
function fg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return lo(ri);
}
function cg(e, t) {
  if (e === "click") return lo(t);
}
function dg(e, t) {
  if (e === "input" || e === "change") return lo(t);
}
function pg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var De = typeof Object.is == "function" ? Object.is : pg, mg = Object.prototype.hasOwnProperty;
function ii(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) if (!mg.call(t, n[r]) || !De(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function zf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Uf(e, t) {
  var n = zf(e);
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
    n = zf(n);
  }
}
function Ip(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ip(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Bf() {
  for (var e = window, t = xa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = xa(e.document);
  }
  return t;
}
function El(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
var vg = dt && "documentMode" in document && 11 >= document.documentMode, An = null, xl = null, Ur = null, kl = !1;
function Hf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  kl || An == null || An !== xa(r) || (r = An, "selectionStart" in r && El(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ur && ii(Ur, r) || (Ur = r, r = Pa(xl, "onSelect"), 0 < r.length && (t = new Qs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = An)));
}
Hs(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0
);
Hs("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Hs(kh, 2);
for (var Wf = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Mo = 0; Mo < Wf.length; Mo++) Bs.set(Wf[Mo], 0);
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
gn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));
function Vf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, yh(r, t, void 0, e), e.currentTarget = null;
}
function Lp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var l = r[o], s = l.instance, u = l.currentTarget;
        if (l = l.listener, s !== a && i.isPropagationStopped()) break e;
        Vf(i, l, u), a = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (l = r[o], s = l.instance, u = l.currentTarget, l = l.listener, s !== a && i.isPropagationStopped()) break e;
        Vf(i, l, u), a = s;
      }
    }
  }
  if (Sa) throw e = yl, Sa = !1, yl = null, e;
}
function G(e, t) {
  var n = zp(t), r = e + "__bubble";
  n.has(r) || (Dp(t, e, 2, !1), n.add(r));
}
var Yf = "_reactListening" + Math.random().toString(36).slice(2);
function Mp(e) {
  e[Yf] || (e[Yf] = !0, ep.forEach(function(t) {
    hg.has(t) || Qf(t, !1, e, null), Qf(t, !0, e, null);
  }));
}
function Qf(e, t, n, r) {
  var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, a = n;
  e === "selectionchange" && n.nodeType !== 9 && (a = n.ownerDocument);
  var o = zp(a), l = e + "__" + (t ? "capture" : "bubble");
  o.has(l) || (t && (i |= 4), Dp(a, e, i, t), o.add(l));
}
function Dp(e, t, n, r) {
  var i = Bs.get(t);
  switch (i === void 0 ? 2 : i) {
    case 0:
      i = jh;
      break;
    case 1:
      i = Rh;
      break;
    default:
      i = Ws;
  }
  n = i.bind(null, t, n, e), i = void 0, !gl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function $p(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var l = r.stateNode.containerInfo;
      if (l === i || l.nodeType === 8 && l.parentNode === i) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === i || s.nodeType === 8 && s.parentNode === i)) return;
        o = o.return;
      }
      for (; l !== null; ) {
        if (o = nn(l), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = a = o;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  mh(function() {
    var u = a, f = Ds(n), h = [];
    e: {
      var p = Op.get(e);
      if (p !== void 0) {
        var y = Qs, x = e;
        switch (e) {
          case "keypress":
            if (ca(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Xh;
            break;
          case "focusin":
            x = "focus", y = Ro;
            break;
          case "focusout":
            x = "blur", y = Ro;
            break;
          case "beforeblur":
          case "afterblur":
            y = Ro;
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
            y = jf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Mh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = qh;
            break;
          case Ep:
          case xp:
          case kp:
            y = Fh;
            break;
          case Sp:
            y = Jh;
            break;
          case "scroll":
            y = Ih;
            break;
          case "wheel":
            y = tg;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Uh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = If;
        }
        var b = (t & 4) !== 0, d = !b && e === "scroll", c = b ? p !== null ? p + "Capture" : null : p;
        b = [];
        for (var m = u, w; m !== null; ) {
          w = m;
          var v = w.stateNode;
          if (w.tag === 5 && v !== null && (w = v, c !== null && (v = Jr(m, c), v != null && b.push(ai(m, v, w)))), d) break;
          m = m.return;
        }
        0 < b.length && (p = new y(p, x, null, n, f), h.push({ event: p, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", p && !(t & 16) && (x = n.relatedTarget || n.fromElement) && (nn(x) || x[ur])) break e;
        if ((y || p) && (p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window, y ? (x = n.relatedTarget || n.toElement, y = u, x = x ? nn(x) : null, x !== null && (d = wn(x), x !== d || x.tag !== 5 && x.tag !== 6) && (x = null)) : (y = null, x = u), y !== x)) {
          if (b = jf, v = "onMouseLeave", c = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (b = If, v = "onPointerLeave", c = "onPointerEnter", m = "pointer"), d = y == null ? p : Nn(y), w = x == null ? p : Nn(x), p = new b(v, m + "leave", y, n, f), p.target = d, p.relatedTarget = w, v = null, nn(f) === u && (b = new b(c, m + "enter", x, n, f), b.target = w, b.relatedTarget = d, v = b), d = v, y && x) t: {
            for (b = y, c = x, m = 0, w = b; w; w = xn(w)) m++;
            for (w = 0, v = c; v; v = xn(v)) w++;
            for (; 0 < m - w; ) b = xn(b), m--;
            for (; 0 < w - m; ) c = xn(c), w--;
            for (; m--; ) {
              if (b === c || c !== null && b === c.alternate) break t;
              b = xn(b), c = xn(c);
            }
            b = null;
          }
          else b = null;
          y !== null && Xf(h, p, y, b, !1), x !== null && d !== null && Xf(h, d, x, b, !0);
        }
      }
      e: {
        if (p = u ? Nn(u) : window, y = p.nodeName && p.nodeName.toLowerCase(), y === "select" || y === "input" && p.type === "file") var k = sg;
        else if (Df(p)) if (jp) k = dg;
        else {
          k = fg;
          var E = ug;
        }
        else (y = p.nodeName) && y.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (k = cg);
        if (k && (k = k(e, u))) {
          Tp(h, k, n, f);
          break e;
        }
        E && E(e, p, u), e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && ul(p, "number", p.value);
      }
      switch (E = u ? Nn(u) : window, e) {
        case "focusin":
          (Df(E) || E.contentEditable === "true") && (An = E, xl = u, Ur = null);
          break;
        case "focusout":
          Ur = xl = An = null;
          break;
        case "mousedown":
          kl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          kl = !1, Hf(h, n, f);
          break;
        case "selectionchange":
          if (vg) break;
        case "keydown":
        case "keyup":
          Hf(h, n, f);
      }
      var O;
      if (Gs) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else Cn ? Np(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Ap && n.locale !== "ko" && (Cn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Cn && (O = Cp()) : (St = f, Ys = "value" in St ? St.value : St.textContent, Cn = !0)), E = Pa(u, N), 0 < E.length && (N = new Rf(N, e, null, n, f), h.push({ event: N, listeners: E }), O ? N.data = O : (O = _p(n), O !== null && (N.data = O)))), (O = rg ? ig(e, n) : ag(e, n)) && (u = Pa(u, "onBeforeInput"), 0 < u.length && (f = new Rf(
        "onBeforeInput",
        "beforeinput",
        null,
        n,
        f
      ), h.push({ event: f, listeners: u }), f.data = O));
    }
    Lp(h, t);
  });
}
function ai(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Pa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = Jr(e, n), a != null && r.unshift(ai(e, a, i)), a = Jr(e, t), a != null && r.push(ai(e, a, i))), e = e.return;
  }
  return r;
}
function xn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xf(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n, s = l.alternate, u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 && u !== null && (l = u, i ? (s = Jr(n, a), s != null && o.unshift(ai(n, s, l))) : i || (s = Jr(n, a), s != null && o.push(ai(n, s, l)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
function Ca() {
}
var Do = null, $o = null;
function Fp(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function Sl(e, t) {
  return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Gf = typeof setTimeout == "function" ? setTimeout : void 0, gg = typeof clearTimeout == "function" ? clearTimeout : void 0;
function Ks(e) {
  e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
}
function Bn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function Kf(e) {
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
var Fo = 0;
function yg(e) {
  return { $$typeof: Ls, toString: e, valueOf: e };
}
var so = Math.random().toString(36).slice(2), Ot = "__reactFiber$" + so, Aa = "__reactProps$" + so, ur = "__reactContainer$" + so, qf = "__reactEvents$" + so;
function nn(e) {
  var t = e[Ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ur] || n[Ot]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Kf(e); e !== null; ) {
        if (n = e[Ot]) return n;
        e = Kf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Pi(e) {
  return e = e[Ot] || e[ur], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function uo(e) {
  return e[Aa] || null;
}
function zp(e) {
  var t = e[qf];
  return t === void 0 && (t = e[qf] = /* @__PURE__ */ new Set()), t;
}
var Ol = [], _n = -1;
function Yt(e) {
  return { current: e };
}
function q(e) {
  0 > _n || (e.current = Ol[_n], Ol[_n] = null, _n--);
}
function ne(e, t) {
  _n++, Ol[_n] = e.current, e.current = t;
}
var Ft = {}, we = Yt(Ft), Se = Yt(!1), fn = Ft;
function Kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in n) i[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Oe(e) {
  return e = e.childContextTypes, e != null;
}
function Na() {
  q(Se), q(we);
}
function Zf(e, t, n) {
  if (we.current !== Ft) throw Error(A(168));
  ne(we, t), ne(Se, n);
}
function Up(e, t, n) {
  var r = e.stateNode;
  if (e = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(A(108, $n(t) || "Unknown", i));
  return J({}, n, r);
}
function da(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, fn = we.current, ne(we, e), ne(Se, Se.current), !0;
}
function Jf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = Up(e, t, fn), r.__reactInternalMemoizedMergedChildContext = e, q(Se), q(we), ne(we, e)) : q(Se), ne(Se, n);
}
var qs = null, sn = null, wg = de.unstable_runWithPriority, Zs = de.unstable_scheduleCallback, Pl = de.unstable_cancelCallback, bg = de.unstable_shouldYield, ec = de.unstable_requestPaint, Cl = de.unstable_now, Eg = de.unstable_getCurrentPriorityLevel, fo = de.unstable_ImmediatePriority, Bp = de.unstable_UserBlockingPriority, Hp = de.unstable_NormalPriority, Wp = de.unstable_LowPriority, Vp = de.unstable_IdlePriority, zo = {}, xg = ec !== void 0 ? ec : function() {
}, lt = null, pa = null, Uo = !1, tc = Cl(), ge = 1e4 > tc ? Cl : function() {
  return Cl() - tc;
};
function qn() {
  switch (Eg()) {
    case fo:
      return 99;
    case Bp:
      return 98;
    case Hp:
      return 97;
    case Wp:
      return 96;
    case Vp:
      return 95;
    default:
      throw Error(A(332));
  }
}
function Yp(e) {
  switch (e) {
    case 99:
      return fo;
    case 98:
      return Bp;
    case 97:
      return Hp;
    case 96:
      return Wp;
    case 95:
      return Vp;
    default:
      throw Error(A(332));
  }
}
function cn(e, t) {
  return e = Yp(e), wg(e, t);
}
function oi(e, t, n) {
  return e = Yp(e), Zs(e, t, n);
}
function ot() {
  if (pa !== null) {
    var e = pa;
    pa = null, Pl(e);
  }
  Qp();
}
function Qp() {
  if (!Uo && lt !== null) {
    Uo = !0;
    var e = 0;
    try {
      var t = lt;
      cn(99, function() {
        for (; e < t.length; e++) {
          var n = t[e];
          do
            n = n(!0);
          while (n !== null);
        }
      }), lt = null;
    } catch (n) {
      throw lt !== null && (lt = lt.slice(e + 1)), Zs(fo, ot), n;
    } finally {
      Uo = !1;
    }
  }
}
var kg = yn.ReactCurrentBatchConfig;
function Xe(e, t) {
  if (e && e.defaultProps) {
    t = J({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var _a = Yt(null), Ta = null, Tn = null, ja = null;
function Js() {
  ja = Tn = Ta = null;
}
function eu(e) {
  var t = _a.current;
  q(_a), e.type._context._currentValue = t;
}
function Xp(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else e.childLanes |= t, n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function Hn(e, t) {
  Ta = e, ja = Tn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ge = !0), e.firstContext = null);
}
function Ue(e, t) {
  if (ja !== e && t !== !1 && t !== 0)
    if ((typeof t != "number" || t === 1073741823) && (ja = e, t = 1073741823), t = { context: e, observedBits: t, next: null }, Tn === null) {
      if (Ta === null) throw Error(A(308));
      Tn = t, Ta.dependencies = { lanes: 0, firstContext: t, responders: null };
    } else Tn = Tn.next = t;
  return e._currentValue;
}
var Et = !1;
function tu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function Gp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function jt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Rt(e, t) {
  if (e = e.updateQueue, e !== null) {
    e = e.shared;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
}
function nc(e, t) {
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
function li(e, t, n, r) {
  var i = e.updateQueue;
  Et = !1;
  var a = i.firstBaseUpdate, o = i.lastBaseUpdate, l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l, u = s.next;
    s.next = null, o === null ? a = u : o.next = u, o = s;
    var f = e.alternate;
    if (f !== null) {
      f = f.updateQueue;
      var h = f.lastBaseUpdate;
      h !== o && (h === null ? f.firstBaseUpdate = u : h.next = u, f.lastBaseUpdate = s);
    }
  }
  if (a !== null) {
    h = i.baseState, o = 0, f = u = s = null;
    do {
      l = a.lane;
      var p = a.eventTime;
      if ((r & l) === l) {
        f !== null && (f = f.next = {
          eventTime: p,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var y = e, x = a;
          switch (l = t, p = n, x.tag) {
            case 1:
              if (y = x.payload, typeof y == "function") {
                h = y.call(p, h, l);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = y.flags & -4097 | 64;
            case 0:
              if (y = x.payload, l = typeof y == "function" ? y.call(p, h, l) : y, l == null) break e;
              h = J({}, h, l);
              break e;
            case 2:
              Et = !0;
          }
        }
        a.callback !== null && (e.flags |= 32, l = i.effects, l === null ? i.effects = [a] : l.push(a));
      } else p = { eventTime: p, lane: l, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, f === null ? (u = f = p, s = h) : f = f.next = p, o |= l;
      if (a = a.next, a === null) {
        if (l = i.shared.pending, l === null) break;
        a = l.next, l.next = null, i.lastBaseUpdate = l, i.shared.pending = null;
      }
    } while (!0);
    f === null && (s = h), i.baseState = s, i.firstBaseUpdate = u, i.lastBaseUpdate = f, Ai |= o, e.lanes = o, e.memoizedState = h;
  }
}
function rc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(A(191, i));
      i.call(r);
    }
  }
}
var Kp = new to.Component().refs;
function Ra(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var co = { isMounted: function(e) {
  return (e = e._reactInternals) ? wn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Te(), i = It(e), a = jt(r, i);
  a.payload = t, n != null && (a.callback = n), Rt(e, a), Lt(e, i, r);
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Te(), i = It(e), a = jt(r, i);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), Rt(e, a), Lt(e, i, r);
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Te(), r = It(e), i = jt(n, r);
  i.tag = 2, t != null && (i.callback = t), Rt(e, i), Lt(e, r, n);
} };
function ic(e, t, n, r, i, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !ii(n, r) || !ii(i, a) : !0;
}
function qp(e, t, n) {
  var r = !1, i = Ft, a = t.contextType;
  return typeof a == "object" && a !== null ? a = Ue(a) : (i = Oe(t) ? fn : we.current, r = t.contextTypes, a = (r = r != null) ? Kn(e, i) : Ft), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = co, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function ac(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && co.enqueueReplaceState(t, t.state, null);
}
function Al(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = Kp, tu(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = Ue(a) : (a = Oe(t) ? fn : we.current, i.context = Kn(e, a)), li(e, n, i, r), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Ra(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && co.enqueueReplaceState(i, i.state, null), li(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4);
}
var Hi = Array.isArray;
function br(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var o = r.refs;
        o === Kp && (o = r.refs = {}), a === null ? delete o[i] : o[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Wi(e, t) {
  if (e.type !== "textarea") throw Error(A(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t));
}
function Zp(e) {
  function t(d, c) {
    if (e) {
      var m = d.lastEffect;
      m !== null ? (m.nextEffect = c, d.lastEffect = c) : d.firstEffect = d.lastEffect = c, c.nextEffect = null, c.flags = 8;
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function i(d, c) {
    return d = Ut(d, c), d.index = 0, d.sibling = null, d;
  }
  function a(d, c, m) {
    return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < c ? (d.flags = 2, c) : m) : (d.flags = 2, c)) : c;
  }
  function o(d) {
    return e && d.alternate === null && (d.flags = 2), d;
  }
  function l(d, c, m, w) {
    return c === null || c.tag !== 6 ? (c = Yo(m, d.mode, w), c.return = d, c) : (c = i(c, m), c.return = d, c);
  }
  function s(d, c, m, w) {
    return c !== null && c.elementType === m.type ? (w = i(c, m.props), w.ref = br(d, c, m), w.return = d, w) : (w = ga(m.type, m.key, m.props, null, d.mode, w), w.ref = br(d, c, m), w.return = d, w);
  }
  function u(d, c, m, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = Qo(m, d.mode, w), c.return = d, c) : (c = i(c, m.children || []), c.return = d, c);
  }
  function f(d, c, m, w, v) {
    return c === null || c.tag !== 7 ? (c = Qn(m, d.mode, w, v), c.return = d, c) : (c = i(c, m), c.return = d, c);
  }
  function h(d, c, m) {
    if (typeof c == "string" || typeof c == "number") return c = Yo("" + c, d.mode, m), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Cr:
          return m = ga(c.type, c.key, c.props, null, d.mode, m), m.ref = br(d, null, c), m.return = d, m;
        case en:
          return c = Qo(c, d.mode, m), c.return = d, c;
      }
      if (Hi(c) || mr(c)) return c = Qn(
        c,
        d.mode,
        m,
        null
      ), c.return = d, c;
      Wi(d, c);
    }
    return null;
  }
  function p(d, c, m, w) {
    var v = c !== null ? c.key : null;
    if (typeof m == "string" || typeof m == "number") return v !== null ? null : l(d, c, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Cr:
          return m.key === v ? m.type === kt ? f(d, c, m.props.children, w, v) : s(d, c, m, w) : null;
        case en:
          return m.key === v ? u(d, c, m, w) : null;
      }
      if (Hi(m) || mr(m)) return v !== null ? null : f(d, c, m, w, null);
      Wi(d, m);
    }
    return null;
  }
  function y(d, c, m, w, v) {
    if (typeof w == "string" || typeof w == "number") return d = d.get(m) || null, l(c, d, "" + w, v);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Cr:
          return d = d.get(w.key === null ? m : w.key) || null, w.type === kt ? f(c, d, w.props.children, v, w.key) : s(c, d, w, v);
        case en:
          return d = d.get(w.key === null ? m : w.key) || null, u(c, d, w, v);
      }
      if (Hi(w) || mr(w)) return d = d.get(m) || null, f(c, d, w, v, null);
      Wi(c, w);
    }
    return null;
  }
  function x(d, c, m, w) {
    for (var v = null, k = null, E = c, O = c = 0, N = null; E !== null && O < m.length; O++) {
      E.index > O ? (N = E, E = null) : N = E.sibling;
      var P = p(d, E, m[O], w);
      if (P === null) {
        E === null && (E = N);
        break;
      }
      e && E && P.alternate === null && t(d, E), c = a(P, c, O), k === null ? v = P : k.sibling = P, k = P, E = N;
    }
    if (O === m.length) return n(d, E), v;
    if (E === null) {
      for (; O < m.length; O++) E = h(d, m[O], w), E !== null && (c = a(E, c, O), k === null ? v = E : k.sibling = E, k = E);
      return v;
    }
    for (E = r(d, E); O < m.length; O++) N = y(E, d, O, m[O], w), N !== null && (e && N.alternate !== null && E.delete(N.key === null ? O : N.key), c = a(N, c, O), k === null ? v = N : k.sibling = N, k = N);
    return e && E.forEach(function(L) {
      return t(d, L);
    }), v;
  }
  function b(d, c, m, w) {
    var v = mr(m);
    if (typeof v != "function") throw Error(A(150));
    if (m = v.call(m), m == null) throw Error(A(151));
    for (var k = v = null, E = c, O = c = 0, N = null, P = m.next(); E !== null && !P.done; O++, P = m.next()) {
      E.index > O ? (N = E, E = null) : N = E.sibling;
      var L = p(d, E, P.value, w);
      if (L === null) {
        E === null && (E = N);
        break;
      }
      e && E && L.alternate === null && t(d, E), c = a(L, c, O), k === null ? v = L : k.sibling = L, k = L, E = N;
    }
    if (P.done) return n(d, E), v;
    if (E === null) {
      for (; !P.done; O++, P = m.next()) P = h(d, P.value, w), P !== null && (c = a(P, c, O), k === null ? v = P : k.sibling = P, k = P);
      return v;
    }
    for (E = r(d, E); !P.done; O++, P = m.next()) P = y(E, d, O, P.value, w), P !== null && (e && P.alternate !== null && E.delete(P.key === null ? O : P.key), c = a(P, c, O), k === null ? v = P : k.sibling = P, k = P);
    return e && E.forEach(function(H) {
      return t(d, H);
    }), v;
  }
  return function(d, c, m, w) {
    var v = typeof m == "object" && m !== null && m.type === kt && m.key === null;
    v && (m = m.props.children);
    var k = typeof m == "object" && m !== null;
    if (k) switch (m.$$typeof) {
      case Cr:
        e: {
          for (k = m.key, v = c; v !== null; ) {
            if (v.key === k) {
              switch (v.tag) {
                case 7:
                  if (m.type === kt) {
                    n(d, v.sibling), c = i(v, m.props.children), c.return = d, d = c;
                    break e;
                  }
                  break;
                default:
                  if (v.elementType === m.type) {
                    n(d, v.sibling), c = i(v, m.props), c.ref = br(d, v, m), c.return = d, d = c;
                    break e;
                  }
              }
              n(d, v);
              break;
            } else t(d, v);
            v = v.sibling;
          }
          m.type === kt ? (c = Qn(m.props.children, d.mode, w, m.key), c.return = d, d = c) : (w = ga(m.type, m.key, m.props, null, d.mode, w), w.ref = br(d, c, m), w.return = d, d = w);
        }
        return o(d);
      case en:
        e: {
          for (v = m.key; c !== null; ) {
            if (c.key === v) if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
              n(d, c.sibling), c = i(c, m.children || []), c.return = d, d = c;
              break e;
            } else {
              n(d, c);
              break;
            }
            else t(d, c);
            c = c.sibling;
          }
          c = Qo(m, d.mode, w), c.return = d, d = c;
        }
        return o(d);
    }
    if (typeof m == "string" || typeof m == "number") return m = "" + m, c !== null && c.tag === 6 ? (n(d, c.sibling), c = i(c, m), c.return = d, d = c) : (n(d, c), c = Yo(m, d.mode, w), c.return = d, d = c), o(d);
    if (Hi(m)) return x(d, c, m, w);
    if (mr(m)) return b(d, c, m, w);
    if (k && Wi(d, m), typeof m > "u" && !v) switch (d.tag) {
      case 1:
      case 22:
      case 0:
      case 11:
      case 15:
        throw Error(A(152, $n(d.type) || "Component"));
    }
    return n(d, c);
  };
}
var Ia = Zp(!0), Jp = Zp(!1), Ci = {}, nt = Yt(Ci), si = Yt(Ci), ui = Yt(Ci);
function rn(e) {
  if (e === Ci) throw Error(A(174));
  return e;
}
function Nl(e, t) {
  switch (ne(ui, t), ne(si, e), ne(nt, Ci), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = pl(t, e);
  }
  q(nt), ne(nt, t);
}
function Zn() {
  q(nt), q(si), q(ui);
}
function oc(e) {
  rn(ui.current);
  var t = rn(nt.current), n = pl(t, e.type);
  t !== n && (ne(si, e), ne(nt, n));
}
function nu(e) {
  si.current === e && (q(nt), q(si));
}
var ee = Yt(0);
function La(e) {
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
var ut = null, Pt = null, rt = !1;
function em(e, t) {
  var n = $e(5, null, null, 0);
  n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
}
function lc(e, t) {
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
function _l(e) {
  if (rt) {
    var t = Pt;
    if (t) {
      var n = t;
      if (!lc(e, t)) {
        if (t = Bn(n.nextSibling), !t || !lc(e, t)) {
          e.flags = e.flags & -1025 | 2, rt = !1, ut = e;
          return;
        }
        em(ut, n);
      }
      ut = e, Pt = Bn(t.firstChild);
    } else e.flags = e.flags & -1025 | 2, rt = !1, ut = e;
  }
}
function sc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ut = e;
}
function Vi(e) {
  if (e !== ut) return !1;
  if (!rt) return sc(e), rt = !0, !1;
  var t = e.type;
  if (e.tag !== 5 || t !== "head" && t !== "body" && !Sl(t, e.memoizedProps)) for (t = Pt; t; ) em(e, t), t = Bn(t.nextSibling);
  if (sc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Pt = Bn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Pt = null;
    }
  } else Pt = ut ? Bn(e.stateNode.nextSibling) : null;
  return !0;
}
function Bo() {
  Pt = ut = null, rt = !1;
}
var Wn = [];
function ru() {
  for (var e = 0; e < Wn.length; e++) Wn[e]._workInProgressVersionPrimary = null;
  Wn.length = 0;
}
var Br = yn.ReactCurrentDispatcher, ze = yn.ReactCurrentBatchConfig, fi = 0, ie = null, he = null, pe = null, Ma = !1, Hr = !1;
function xe() {
  throw Error(A(321));
}
function iu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!De(e[n], t[n])) return !1;
  return !0;
}
function au(e, t, n, r, i, a) {
  if (fi = a, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Br.current = e === null || e.memoizedState === null ? Og : Pg, e = n(r, i), Hr) {
    a = 0;
    do {
      if (Hr = !1, !(25 > a)) throw Error(A(301));
      a += 1, pe = he = null, t.updateQueue = null, Br.current = Cg, e = n(r, i);
    } while (Hr);
  }
  if (Br.current = za, t = he !== null && he.next !== null, fi = 0, pe = he = ie = null, Ma = !1, t) throw Error(A(300));
  return e;
}
function an() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return pe === null ? ie.memoizedState = pe = e : pe = pe.next = e, pe;
}
function bn() {
  if (he === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = pe === null ? ie.memoizedState : pe.next;
  if (t !== null) pe = t, he = e;
  else {
    if (e === null) throw Error(A(310));
    he = e, e = { memoizedState: he.memoizedState, baseState: he.baseState, baseQueue: he.baseQueue, queue: he.queue, next: null }, pe === null ? ie.memoizedState = pe = e : pe = pe.next = e;
  }
  return pe;
}
function Je(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Er(e) {
  var t = bn(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = he, i = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = a.next, a.next = o;
    }
    r.baseQueue = i = a, n.pending = null;
  }
  if (i !== null) {
    i = i.next, r = r.baseState;
    var l = o = a = null, s = i;
    do {
      var u = s.lane;
      if ((fi & u) === u) l !== null && (l = l.next = { lane: 0, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
      else {
        var f = {
          lane: u,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null
        };
        l === null ? (o = l = f, a = r) : l = l.next = f, ie.lanes |= u, Ai |= u;
      }
      s = s.next;
    } while (s !== null && s !== i);
    l === null ? a = r : l.next = o, De(r, t.memoizedState) || (Ge = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  return [t.memoizedState, n.dispatch];
}
function xr(e) {
  var t = bn(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== i);
    De(a, t.memoizedState) || (Ge = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function uc(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var i = t._workInProgressVersionPrimary;
  if (i !== null ? e = i === r : (e = e.mutableReadLanes, (e = (fi & e) === e) && (t._workInProgressVersionPrimary = r, Wn.push(t))), e) return n(t._source);
  throw Wn.push(t), Error(A(350));
}
function tm(e, t, n, r) {
  var i = be;
  if (i === null) throw Error(A(349));
  var a = t._getVersion, o = a(t._source), l = Br.current, s = l.useState(function() {
    return uc(i, t, n);
  }), u = s[1], f = s[0];
  s = pe;
  var h = e.memoizedState, p = h.refs, y = p.getSnapshot, x = h.source;
  h = h.subscribe;
  var b = ie;
  return e.memoizedState = { refs: p, source: t, subscribe: r }, l.useEffect(function() {
    p.getSnapshot = n, p.setSnapshot = u;
    var d = a(t._source);
    if (!De(o, d)) {
      d = n(t._source), De(f, d) || (u(d), d = It(b), i.mutableReadLanes |= d & i.pendingLanes), d = i.mutableReadLanes, i.entangledLanes |= d;
      for (var c = i.entanglements, m = d; 0 < m; ) {
        var w = 31 - $t(m), v = 1 << w;
        c[w] |= d, m &= ~v;
      }
    }
  }, [n, t, r]), l.useEffect(function() {
    return r(t._source, function() {
      var d = p.getSnapshot, c = p.setSnapshot;
      try {
        c(d(t._source));
        var m = It(b);
        i.mutableReadLanes |= m & i.pendingLanes;
      } catch (w) {
        c(function() {
          throw w;
        });
      }
    });
  }, [t, r]), De(y, n) && De(x, t) && De(h, r) || (e = { pending: null, dispatch: null, lastRenderedReducer: Je, lastRenderedState: f }, e.dispatch = u = su.bind(null, ie, e), s.queue = e, s.baseQueue = null, f = uc(i, t, n), s.memoizedState = s.baseState = f), f;
}
function nm(e, t, n) {
  var r = bn();
  return tm(r, e, t, n);
}
function kr(e) {
  var t = an();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: Je, lastRenderedState: e }, e = e.dispatch = su.bind(null, ie, e), [t.memoizedState, e];
}
function Da(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ie.updateQueue, t === null ? (t = { lastEffect: null }, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function fc(e) {
  var t = an();
  return e = { current: e }, t.memoizedState = e;
}
function $a() {
  return bn().memoizedState;
}
function Tl(e, t, n, r) {
  var i = an();
  ie.flags |= e, i.memoizedState = Da(1 | t, n, void 0, r === void 0 ? null : r);
}
function ou(e, t, n, r) {
  var i = bn();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (he !== null) {
    var o = he.memoizedState;
    if (a = o.destroy, r !== null && iu(r, o.deps)) {
      Da(t, n, a, r);
      return;
    }
  }
  ie.flags |= e, i.memoizedState = Da(1 | t, n, a, r);
}
function cc(e, t) {
  return Tl(516, 4, e, t);
}
function Fa(e, t) {
  return ou(516, 4, e, t);
}
function rm(e, t) {
  return ou(4, 2, e, t);
}
function im(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function am(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ou(4, 2, im.bind(null, t, e), n);
}
function lu() {
}
function om(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && iu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function lm(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && iu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Sg(e, t) {
  var n = qn();
  cn(98 > n ? 98 : n, function() {
    e(!0);
  }), cn(97 < n ? 97 : n, function() {
    var r = ze.transition;
    ze.transition = 1;
    try {
      e(!1), t();
    } finally {
      ze.transition = r;
    }
  });
}
function su(e, t, n) {
  var r = Te(), i = It(e), a = { lane: i, action: n, eagerReducer: null, eagerState: null, next: null }, o = t.pending;
  if (o === null ? a.next = a : (a.next = o.next, o.next = a), t.pending = a, o = e.alternate, e === ie || o !== null && o === ie) Hr = Ma = !0;
  else {
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var l = t.lastRenderedState, s = o(l, n);
      if (a.eagerReducer = o, a.eagerState = s, De(s, l)) return;
    } catch {
    } finally {
    }
    Lt(e, i, r);
  }
}
var za = { readContext: Ue, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useLayoutEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useMutableSource: xe, useOpaqueIdentifier: xe, unstable_isNewReconciler: !1 }, Og = { readContext: Ue, useCallback: function(e, t) {
  return an().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ue, useEffect: cc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Tl(4, 2, im.bind(
    null,
    t,
    e
  ), n);
}, useLayoutEffect: function(e, t) {
  return Tl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = an();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = an();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, e = e.dispatch = su.bind(null, ie, e), [r.memoizedState, e];
}, useRef: fc, useState: kr, useDebugValue: lu, useDeferredValue: function(e) {
  var t = kr(e), n = t[0], r = t[1];
  return cc(function() {
    var i = ze.transition;
    ze.transition = 1;
    try {
      r(e);
    } finally {
      ze.transition = i;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = kr(!1), t = e[0];
  return e = Sg.bind(null, e[1]), fc(e), [e, t];
}, useMutableSource: function(e, t, n) {
  var r = an();
  return r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }, tm(r, e, t, n);
}, useOpaqueIdentifier: function() {
  if (rt) {
    var e = !1, t = yg(function() {
      throw e || (e = !0, n("r:" + (Fo++).toString(36))), Error(A(355));
    }), n = kr(t)[1];
    return !(ie.mode & 2) && (ie.flags |= 516, Da(
      5,
      function() {
        n("r:" + (Fo++).toString(36));
      },
      void 0,
      null
    )), t;
  }
  return t = "r:" + (Fo++).toString(36), kr(t), t;
}, unstable_isNewReconciler: !1 }, Pg = { readContext: Ue, useCallback: om, useContext: Ue, useEffect: Fa, useImperativeHandle: am, useLayoutEffect: rm, useMemo: lm, useReducer: Er, useRef: $a, useState: function() {
  return Er(Je);
}, useDebugValue: lu, useDeferredValue: function(e) {
  var t = Er(Je), n = t[0], r = t[1];
  return Fa(function() {
    var i = ze.transition;
    ze.transition = 1;
    try {
      r(e);
    } finally {
      ze.transition = i;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = Er(Je)[0];
  return [
    $a().current,
    e
  ];
}, useMutableSource: nm, useOpaqueIdentifier: function() {
  return Er(Je)[0];
}, unstable_isNewReconciler: !1 }, Cg = { readContext: Ue, useCallback: om, useContext: Ue, useEffect: Fa, useImperativeHandle: am, useLayoutEffect: rm, useMemo: lm, useReducer: xr, useRef: $a, useState: function() {
  return xr(Je);
}, useDebugValue: lu, useDeferredValue: function(e) {
  var t = xr(Je), n = t[0], r = t[1];
  return Fa(function() {
    var i = ze.transition;
    ze.transition = 1;
    try {
      r(e);
    } finally {
      ze.transition = i;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = xr(Je)[0];
  return [
    $a().current,
    e
  ];
}, useMutableSource: nm, useOpaqueIdentifier: function() {
  return xr(Je)[0];
}, unstable_isNewReconciler: !1 }, Ag = yn.ReactCurrentOwner, Ge = !1;
function ke(e, t, n, r) {
  t.child = e === null ? Jp(t, null, n, r) : Ia(t, e.child, n, r);
}
function dc(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return Hn(t, i), r = au(e, t, n, r, a, i), e !== null && !Ge ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, ft(e, t, i)) : (t.flags |= 1, ke(e, t, r, i), t.child);
}
function pc(e, t, n, r, i, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !mu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, sm(e, t, o, r, i, a)) : (e = ga(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  return o = e.child, !(i & a) && (i = o.memoizedProps, n = n.compare, n = n !== null ? n : ii, n(i, r) && e.ref === t.ref) ? ft(e, t, a) : (t.flags |= 1, e = Ut(o, r), e.ref = t.ref, e.return = t, t.child = e);
}
function sm(e, t, n, r, i, a) {
  if (e !== null && ii(e.memoizedProps, r) && e.ref === t.ref) if (Ge = !1, (a & i) !== 0) e.flags & 16384 && (Ge = !0);
  else return t.lanes = e.lanes, ft(e, t, a);
  return jl(e, t, n, r, a);
}
function Ho(e, t, n) {
  var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") if (!(t.mode & 4)) t.memoizedState = { baseLanes: 0 }, Qi(t, n);
  else if (n & 1073741824) t.memoizedState = { baseLanes: 0 }, Qi(t, a !== null ? a.baseLanes : n);
  else return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e }, Qi(t, e), null;
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Qi(t, r);
  return ke(e, t, i, n), t.child;
}
function um(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128);
}
function jl(e, t, n, r, i) {
  var a = Oe(n) ? fn : we.current;
  return a = Kn(t, a), Hn(t, i), n = au(e, t, n, r, a, i), e !== null && !Ge ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, ft(e, t, i)) : (t.flags |= 1, ke(e, t, n, i), t.child);
}
function mc(e, t, n, r, i) {
  if (Oe(n)) {
    var a = !0;
    da(t);
  } else a = !1;
  if (Hn(t, i), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), qp(t, n, r), Al(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, l = t.memoizedProps;
    o.props = l;
    var s = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Ue(u) : (u = Oe(n) ? fn : we.current, u = Kn(t, u));
    var f = n.getDerivedStateFromProps, h = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || s !== u) && ac(t, o, r, u), Et = !1;
    var p = t.memoizedState;
    o.state = p, li(t, r, o, i), s = t.memoizedState, l !== r || p !== s || Se.current || Et ? (typeof f == "function" && (Ra(t, n, f, r), s = t.memoizedState), (l = Et || ic(t, n, l, r, p, s, u)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4)) : (typeof o.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = u, r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4), r = !1);
  } else {
    o = t.stateNode, Gp(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Xe(t.type, l), o.props = u, h = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ue(s) : (s = Oe(n) ? fn : we.current, s = Kn(t, s));
    var y = n.getDerivedStateFromProps;
    (f = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== h || p !== s) && ac(t, o, r, s), Et = !1, p = t.memoizedState, o.state = p, li(t, r, o, i);
    var x = t.memoizedState;
    l !== h || p !== x || Se.current || Et ? (typeof y == "function" && (Ra(t, n, y, r), x = t.memoizedState), (u = Et || ic(t, n, u, r, p, x, s)) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(
      r,
      x,
      s
    ), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = x), o.props = r, o.state = x, o.context = s, r = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 256), r = !1);
  }
  return Rl(e, t, n, r, a, i);
}
function Rl(e, t, n, r, i, a) {
  um(e, t);
  var o = (t.flags & 64) !== 0;
  if (!r && !o) return i && Jf(t, n, !1), ft(e, t, a);
  r = t.stateNode, Ag.current = t;
  var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Ia(t, e.child, null, a), t.child = Ia(t, null, l, a)) : ke(e, t, l, a), t.memoizedState = r.state, i && Jf(t, n, !0), t.child;
}
function vc(e) {
  var t = e.stateNode;
  t.pendingContext ? Zf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zf(e, t.context, !1), Nl(e, t.containerInfo);
}
var Yi = { dehydrated: null, retryLane: 0 };
function hc(e, t, n) {
  var r = t.pendingProps, i = ee.current, a = !1, o;
  return (o = (t.flags & 64) !== 0) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), o ? (a = !0, t.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (i |= 1), ne(ee, i & 1), e === null ? (r.fallback !== void 0 && _l(t), e = r.children, i = r.fallback, a ? (e = gc(t, e, i, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = Yi, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = gc(t, e, i, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = Yi, t.lanes = 33554432, e) : (n = vu({ mode: "visible", children: e }, t.mode, n, null), n.return = t, t.child = n)) : e.memoizedState !== null ? a ? (r = wc(e, t, r.children, r.fallback, n), a = t.child, i = e.child.memoizedState, a.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }, a.childLanes = e.childLanes & ~n, t.memoizedState = Yi, r) : (n = yc(e, t, r.children, n), t.memoizedState = null, n) : a ? (r = wc(e, t, r.children, r.fallback, n), a = t.child, i = e.child.memoizedState, a.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }, a.childLanes = e.childLanes & ~n, t.memoizedState = Yi, r) : (n = yc(e, t, r.children, n), t.memoizedState = null, n);
}
function gc(e, t, n, r) {
  var i = e.mode, a = e.child;
  return t = { mode: "hidden", children: t }, !(i & 2) && a !== null ? (a.childLanes = 0, a.pendingProps = t) : a = vu(t, i, 0, null), n = Qn(n, i, r, null), a.return = e, n.return = e, a.sibling = n, e.child = a, n;
}
function yc(e, t, n, r) {
  var i = e.child;
  return e = i.sibling, n = Ut(i, { mode: "visible", children: n }), !(t.mode & 2) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n;
}
function wc(e, t, n, r, i) {
  var a = t.mode, o = e.child;
  e = o.sibling;
  var l = { mode: "hidden", children: n };
  return !(a & 2) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, o = n.lastEffect, o !== null ? (t.firstEffect = n.firstEffect, t.lastEffect = o, o.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = Ut(o, l), e !== null ? r = Ut(e, r) : (r = Qn(r, a, i, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r;
}
function bc(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Xp(e.return, t);
}
function Wo(e, t, n, r, i, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i, lastEffect: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.lastEffect = a);
}
function Ec(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, a = r.tail;
  if (ke(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 64;
  else {
    if (e !== null && e.flags & 64) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && bc(e, n);
      else if (e.tag === 19) bc(e, n);
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
  if (ne(ee, r), !(t.mode & 2)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && La(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Wo(t, !1, i, n, a, t.lastEffect);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && La(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Wo(t, !0, n, null, a, t.lastEffect);
      break;
    case "together":
      Wo(t, !1, null, null, void 0, t.lastEffect);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ft(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ai |= t.lanes, n & t.childLanes) {
    if (e !== null && t.child !== e.child) throw Error(A(153));
    if (t.child !== null) {
      for (e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var fm, Il, cm, dm;
fm = function(e, t) {
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
Il = function() {
};
cm = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, rn(nt.current);
    var a = null;
    switch (n) {
      case "input":
        i = ll(e, i), r = ll(e, r), a = [];
        break;
      case "option":
        i = fl(e, i), r = fl(e, r), a = [];
        break;
      case "select":
        i = J({}, i, { value: void 0 }), r = J({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = cl(e, i), r = cl(e, r), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ca);
    }
    ml(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var l = i[u];
      for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (qr.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && s !== l && (s != null || l != null)) if (u === "style") if (l) {
        for (o in l) !l.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && l[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (a || (a = []), a.push(u, n)), n = s;
      else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, s != null && l !== s && (a = a || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (a = a || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (qr.hasOwnProperty(u) ? (s != null && u === "onScroll" && G("scroll", e), a || l === s || (a = [])) : typeof s == "object" && s !== null && s.$$typeof === Ls ? s.toString() : (a = a || []).push(u, s));
    }
    n && (a = a || []).push(
      "style",
      n
    );
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
dm = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!rt) switch (e.tailMode) {
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
function Ng(e, t, n) {
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
      return Oe(t.type) && Na(), null;
    case 3:
      return Zn(), q(Se), q(we), ru(), r = t.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vi(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), Il(t), null;
    case 5:
      nu(t);
      var i = rn(ui.current);
      if (n = t.type, e !== null && t.stateNode != null) cm(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return null;
        }
        if (e = rn(nt.current), Vi(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Ot] = t, r[Aa] = a, n) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < Nr.length; e++) G(Nr[e], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G("error", r), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              Ef(r, a), G("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, G("invalid", r);
              break;
            case "textarea":
              kf(r, a), G("invalid", r);
          }
          ml(n, a), e = null;
          for (var o in a) a.hasOwnProperty(o) && (i = a[o], o === "children" ? typeof i == "string" ? r.textContent !== i && (e = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (e = ["children", "" + i]) : qr.hasOwnProperty(o) && i != null && o === "onScroll" && G("scroll", r));
          switch (n) {
            case "input":
              Fi(r), xf(r, a, !0);
              break;
            case "textarea":
              Fi(r), Sf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Ca);
          }
          r = e, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          switch (o = i.nodeType === 9 ? i : i.ownerDocument, e === dl.html && (e = op(n)), e === dl.html ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ot] = t, e[Aa] = r, fm(e, t, !1, !1), t.stateNode = e, o = vl(n, r), n) {
            case "dialog":
              G("cancel", e), G("close", e), i = r;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", e), i = r;
              break;
            case "video":
            case "audio":
              for (i = 0; i < Nr.length; i++) G(Nr[i], e);
              i = r;
              break;
            case "source":
              G("error", e), i = r;
              break;
            case "img":
            case "image":
            case "link":
              G("error", e), G("load", e), i = r;
              break;
            case "details":
              G("toggle", e), i = r;
              break;
            case "input":
              Ef(e, r), i = ll(e, r), G("invalid", e);
              break;
            case "option":
              i = fl(e, r);
              break;
            case "select":
              e._wrapperState = { wasMultiple: !!r.multiple }, i = J({}, r, { value: void 0 }), G("invalid", e);
              break;
            case "textarea":
              kf(e, r), i = cl(e, r), G("invalid", e);
              break;
            default:
              i = r;
          }
          ml(n, i);
          var l = i;
          for (a in l) if (l.hasOwnProperty(a)) {
            var s = l[a];
            a === "style" ? up(e, s) : a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && lp(e, s)) : a === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Zr(e, s) : typeof s == "number" && Zr(e, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (qr.hasOwnProperty(a) ? s != null && a === "onScroll" && G("scroll", e) : s != null && Ns(e, a, s, o));
          }
          switch (n) {
            case "input":
              Fi(e), xf(e, r, !1);
              break;
            case "textarea":
              Fi(e), Sf(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + Dt(r.value));
              break;
            case "select":
              e.multiple = !!r.multiple, a = r.value, a != null ? Fn(e, !!r.multiple, a, !1) : r.defaultValue != null && Fn(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof i.onClick == "function" && (e.onclick = Ca);
          }
          Fp(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) dm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        n = rn(ui.current), rn(nt.current), Vi(t) ? (r = t.stateNode, n = t.memoizedProps, r[Ot] = t, r.nodeValue !== n && (t.flags |= 4)) : (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ot] = t, t.stateNode = r);
      }
      return null;
    case 13:
      return q(ee), r = t.memoizedState, t.flags & 64 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? t.memoizedProps.fallback !== void 0 && Vi(t) : n = e.memoizedState !== null, r && !n && t.mode & 2 && (e === null && t.memoizedProps.unstable_avoidThisFallback !== !0 || ee.current & 1 ? me === 0 && (me = 3) : ((me === 0 || me === 3) && (me = 4), be === null || !(Ai & 134217727) && !(cr & 134217727) || Vn(be, ye))), (r || n) && (t.flags |= 4), null);
    case 4:
      return Zn(), Il(t), e === null && Mp(t.stateNode.containerInfo), null;
    case 10:
      return eu(t), null;
    case 17:
      return Oe(t.type) && Na(), null;
    case 19:
      if (q(ee), r = t.memoizedState, r === null) return null;
      if (a = (t.flags & 64) !== 0, o = r.rendering, o === null) if (a) Sr(r, !1);
      else {
        if (me !== 0 || e !== null && e.flags & 64) for (e = t.child; e !== null; ) {
          if (o = La(e), o !== null) {
            for (t.flags |= 64, Sr(r, !1), a = o.updateQueue, a !== null && (t.updateQueue = a, t.flags |= 4), r.lastEffect === null && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ne(ee, ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        r.tail !== null && ge() > zl && (t.flags |= 64, a = !0, Sr(r, !1), t.lanes = 33554432);
      }
      else {
        if (!a) if (e = La(o), e !== null) {
          if (t.flags |= 64, a = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Sr(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !rt) return t = t.lastEffect = r.lastEffect, t !== null && (t.nextEffect = null), null;
        } else 2 * ge() - r.renderingStartTime > zl && n !== 1073741824 && (t.flags |= 64, a = !0, Sr(r, !1), t.lanes = 33554432);
        r.isBackwards ? (o.sibling = t.child, t.child = o) : (n = r.last, n !== null ? n.sibling = o : t.child = o, r.last = o);
      }
      return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = ge(), n.sibling = null, t = ee.current, ne(ee, a ? t & 1 | 2 : t & 1), n) : null;
    case 23:
    case 24:
      return pu(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null;
  }
  throw Error(A(156, t.tag));
}
function _g(e) {
  switch (e.tag) {
    case 1:
      Oe(e.type) && Na();
      var t = e.flags;
      return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 3:
      if (Zn(), q(Se), q(we), ru(), t = e.flags, t & 64) throw Error(A(285));
      return e.flags = t & -4097 | 64, e;
    case 5:
      return nu(e), null;
    case 13:
      return q(ee), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 19:
      return q(ee), null;
    case 4:
      return Zn(), null;
    case 10:
      return eu(e), null;
    case 23:
    case 24:
      return pu(), null;
    default:
      return null;
  }
}
function uu(e, t) {
  try {
    var n = "", r = t;
    do
      n += uh(r), r = r.return;
    while (r);
    var i = n;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: i };
}
function Ll(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Tg = typeof WeakMap == "function" ? WeakMap : Map;
function pm(e, t, n) {
  n = jt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ba || (Ba = !0, Ul = r), Ll(e, t);
  }, n;
}
function mm(e, t, n) {
  n = jt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return Ll(e, t), r(i);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    typeof r != "function" && (et === null ? et = /* @__PURE__ */ new Set([this]) : et.add(this), Ll(e, t));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
var jg = typeof WeakSet == "function" ? WeakSet : Set;
function xc(e) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (n) {
    Mt(e, n);
  }
  else t.current = null;
}
function Rg(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps, r = e.memoizedState;
        e = t.stateNode, t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : Xe(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t;
      }
      return;
    case 3:
      t.flags & 256 && Ks(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(A(163));
}
function Ig(e, t, n) {
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
          r = i.next, i = i.tag, i & 4 && i & 1 && (km(n, e), Bg(n, e)), e = r;
        } while (e !== t);
      }
      return;
    case 1:
      e = n.stateNode, n.flags & 4 && (t === null ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Xe(n.type, t.memoizedProps), e.componentDidUpdate(
        r,
        t.memoizedState,
        e.__reactInternalSnapshotBeforeUpdate
      ))), t = n.updateQueue, t !== null && rc(n, t, e);
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
        rc(n, t, e);
      }
      return;
    case 5:
      e = n.stateNode, t === null && n.flags & 4 && Fp(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null && wp(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(A(163));
}
function kc(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
      else {
        r = n.stateNode;
        var i = n.memoizedProps.style;
        i = i != null && i.hasOwnProperty("display") ? i.display : null, r.style.display = sp("display", i);
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
function Sc(e, t) {
  if (sn && typeof sn.onCommitFiberUnmount == "function") try {
    sn.onCommitFiberUnmount(qs, t);
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
          if (r = r.tag, i !== void 0) if (r & 4) km(t, n);
          else {
            r = t;
            try {
              i();
            } catch (a) {
              Mt(r, a);
            }
          }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if (xc(t), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
        e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount();
      } catch (a) {
        Mt(
          t,
          a
        );
      }
      break;
    case 5:
      xc(t);
      break;
    case 4:
      vm(e, t);
  }
}
function Oc(e) {
  e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
}
function Pc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cc(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Pc(t)) break e;
      t = t.return;
    }
    throw Error(A(160));
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
      throw Error(A(161));
  }
  n.flags & 16 && (Zr(t, ""), n.flags &= -17);
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Pc(n.return)) {
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
  r ? Ml(e, n, t) : Dl(e, n, t);
}
function Ml(e, t, n) {
  var r = e.tag, i = r === 5 || r === 6;
  if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ca));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ml(e, t, n), e = e.sibling; e !== null; ) Ml(e, t, n), e = e.sibling;
}
function Dl(e, t, n) {
  var r = e.tag, i = r === 5 || r === 6;
  if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Dl(e, t, n), e = e.sibling; e !== null; ) Dl(e, t, n), e = e.sibling;
}
function vm(e, t) {
  for (var n = t, r = !1, i, a; ; ) {
    if (!r) {
      r = n.return;
      e: for (; ; ) {
        if (r === null) throw Error(A(160));
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
      e: for (var o = e, l = n, s = l; ; ) if (Sc(o, s), s.child !== null && s.tag !== 4) s.child.return = s, s = s.child;
      else {
        if (s === l) break e;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === l) break e;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
      a ? (o = i, l = n.stateNode, o.nodeType === 8 ? o.parentNode.removeChild(l) : o.removeChild(l)) : i.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        i = n.stateNode.containerInfo, a = !0, n.child.return = n, n = n.child;
        continue;
      }
    } else if (Sc(e, n), n.child !== null) {
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
function Vo(e, t) {
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
          for (n[Aa] = r, e === "input" && r.type === "radio" && r.name != null && ip(n, r), vl(e, i), t = vl(e, r), i = 0; i < a.length; i += 2) {
            var o = a[i], l = a[i + 1];
            o === "style" ? up(n, l) : o === "dangerouslySetInnerHTML" ? lp(n, l) : o === "children" ? Zr(n, l) : Ns(n, o, l, t);
          }
          switch (e) {
            case "input":
              sl(n, r);
              break;
            case "textarea":
              ap(n, r);
              break;
            case "select":
              e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, a = r.value, a != null ? Fn(n, !!r.multiple, a, !1) : e !== !!r.multiple && (r.defaultValue != null ? Fn(n, !!r.multiple, r.defaultValue, !0) : Fn(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(A(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      n = t.stateNode, n.hydrate && (n.hydrate = !1, wp(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && (du = ge(), kc(t.child, !0)), Ac(t);
      return;
    case 19:
      Ac(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      kc(t, t.memoizedState !== null);
      return;
  }
  throw Error(A(163));
}
function Ac(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jg()), t.forEach(function(r) {
      var i = Vg.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Lg(e, t) {
  return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : !1;
}
var Mg = Math.ceil, Ua = yn.ReactCurrentDispatcher, fu = yn.ReactCurrentOwner, M = 0, be = null, se = null, ye = 0, dn = 0, $l = Yt(0), me = 0, po = null, fr = 0, Ai = 0, cr = 0, cu = 0, Fl = null, du = 0, zl = 1 / 0;
function dr() {
  zl = ge() + 500;
}
var R = null, Ba = !1, Ul = null, et = null, zt = !1, Wr = null, _r = 90, Bl = [], Hl = [], ct = null, Vr = 0, Wl = null, ma = -1, st = 0, va = 0, Yr = null, ha = !1;
function Te() {
  return M & 48 ? ge() : ma !== -1 ? ma : ma = ge();
}
function It(e) {
  if (e = e.mode, !(e & 2)) return 1;
  if (!(e & 4)) return qn() === 99 ? 1 : 2;
  if (st === 0 && (st = fr), kg.transition !== 0) {
    va !== 0 && (va = Fl !== null ? Fl.pendingLanes : 0), e = st;
    var t = 4186112 & ~va;
    return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), t;
  }
  return e = qn(), M & 4 && e === 98 ? e = Oa(12, st) : (e = Oh(e), e = Oa(e, st)), e;
}
function Lt(e, t, n) {
  if (50 < Vr) throw Vr = 0, Wl = null, Error(A(185));
  if (e = mo(e, t), e === null) return null;
  ao(e, t, n), e === be && (cr |= t, me === 4 && Vn(e, ye));
  var r = qn();
  t === 1 ? M & 8 && !(M & 48) ? Vl(e) : (Be(e, n), M === 0 && (dr(), ot())) : (!(M & 4) || r !== 98 && r !== 99 || (ct === null ? ct = /* @__PURE__ */ new Set([e]) : ct.add(e)), Be(e, n)), Fl = e;
}
function mo(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
function Be(e, t) {
  for (var n = e.callbackNode, r = e.suspendedLanes, i = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - $t(o), s = 1 << l, u = a[l];
    if (u === -1) {
      if (!(s & r) || s & i) {
        u = t, Sn(s);
        var f = X;
        a[l] = 10 <= f ? u + 250 : 6 <= f ? u + 5e3 : -1;
      }
    } else u <= t && (e.expiredLanes |= s);
    o &= ~s;
  }
  if (r = ni(e, e === be ? ye : 0), t = X, r === 0) n !== null && (n !== zo && Pl(n), e.callbackNode = null, e.callbackPriority = 0);
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== zo && Pl(n);
    }
    t === 15 ? (n = Vl.bind(null, e), lt === null ? (lt = [n], pa = Zs(fo, Qp)) : lt.push(n), n = zo) : t === 14 ? n = oi(99, Vl.bind(null, e)) : (n = Ph(t), n = oi(n, hm.bind(null, e))), e.callbackPriority = t, e.callbackNode = n;
  }
}
function hm(e) {
  if (ma = -1, va = st = 0, M & 48) throw Error(A(327));
  var t = e.callbackNode;
  if (Qt() && e.callbackNode !== t) return null;
  var n = ni(e, e === be ? ye : 0);
  if (n === 0) return null;
  var r = n, i = M;
  M |= 16;
  var a = bm();
  (be !== e || ye !== r) && (dr(), Yn(e, r));
  do
    try {
      Fg();
      break;
    } catch (l) {
      wm(e, l);
    }
  while (!0);
  if (Js(), Ua.current = a, M = i, se !== null ? r = 0 : (be = null, ye = 0, r = me), fr & cr) Yn(e, 0);
  else if (r !== 0) {
    if (r === 2 && (M |= 64, e.hydrate && (e.hydrate = !1, Ks(e.containerInfo)), n = Pp(e), n !== 0 && (r = Tr(e, n))), r === 1) throw t = po, Yn(e, 0), Vn(e, n), Be(e, ge()), t;
    switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
      case 0:
      case 1:
        throw Error(A(345));
      case 2:
        qt(e);
        break;
      case 3:
        if (Vn(e, n), (n & 62914560) === n && (r = du + 500 - ge(), 10 < r)) {
          if (ni(e, 0) !== 0) break;
          if (i = e.suspendedLanes, (i & n) !== n) {
            Te(), e.pingedLanes |= e.suspendedLanes & i;
            break;
          }
          e.timeoutHandle = Gf(qt.bind(null, e), r);
          break;
        }
        qt(e);
        break;
      case 4:
        if (Vn(e, n), (n & 4186112) === n) break;
        for (r = e.eventTimes, i = -1; 0 < n; ) {
          var o = 31 - $t(n);
          a = 1 << o, o = r[o], o > i && (i = o), n &= ~a;
        }
        if (n = i, n = ge() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Mg(n / 1960)) - n, 10 < n) {
          e.timeoutHandle = Gf(qt.bind(null, e), n);
          break;
        }
        qt(e);
        break;
      case 5:
        qt(e);
        break;
      default:
        throw Error(A(329));
    }
  }
  return Be(e, ge()), e.callbackNode === t ? hm.bind(null, e) : null;
}
function Vn(e, t) {
  for (t &= ~cu, t &= ~cr, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $t(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Vl(e) {
  if (M & 48) throw Error(A(327));
  if (Qt(), e === be && e.expiredLanes & ye) {
    var t = ye, n = Tr(e, t);
    fr & cr && (t = ni(e, t), n = Tr(e, t));
  } else t = ni(e, 0), n = Tr(e, t);
  if (e.tag !== 0 && n === 2 && (M |= 64, e.hydrate && (e.hydrate = !1, Ks(e.containerInfo)), t = Pp(e), t !== 0 && (n = Tr(e, t))), n === 1) throw n = po, Yn(e, 0), Vn(e, t), Be(e, ge()), n;
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, qt(e), Be(e, ge()), null;
}
function Dg() {
  if (ct !== null) {
    var e = ct;
    ct = null, e.forEach(function(t) {
      t.expiredLanes |= 24 & t.pendingLanes, Be(t, ge());
    });
  }
  ot();
}
function gm(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    M = n, M === 0 && (dr(), ot());
  }
}
function ym(e, t) {
  var n = M;
  M &= -2, M |= 8;
  try {
    return e(t);
  } finally {
    M = n, M === 0 && (dr(), ot());
  }
}
function Qi(e, t) {
  ne($l, dn), dn |= t, fr |= t;
}
function pu() {
  dn = $l.current, q($l);
}
function Yn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, gg(n)), se !== null) for (n = se.return; n !== null; ) {
    var r = n;
    switch (r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Na();
        break;
      case 3:
        Zn(), q(Se), q(we), ru();
        break;
      case 5:
        nu(r);
        break;
      case 4:
        Zn();
        break;
      case 13:
        q(ee);
        break;
      case 19:
        q(ee);
        break;
      case 10:
        eu(r);
        break;
      case 23:
      case 24:
        pu();
    }
    n = n.return;
  }
  be = e, se = Ut(e.current, null), ye = dn = fr = t, me = 0, po = null, cu = cr = Ai = 0;
}
function wm(e, t) {
  do {
    var n = se;
    try {
      if (Js(), Br.current = za, Ma) {
        for (var r = ie.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Ma = !1;
      }
      if (fi = 0, pe = he = ie = null, Hr = !1, fu.current = null, n === null || n.return === null) {
        me = 1, po = t, se = null;
        break;
      }
      e: {
        var a = e, o = n.return, l = n, s = t;
        if (t = ye, l.flags |= 2048, l.firstEffect = l.lastEffect = null, s !== null && typeof s == "object" && typeof s.then == "function") {
          var u = s;
          if (!(l.mode & 2)) {
            var f = l.alternate;
            f ? (l.updateQueue = f.updateQueue, l.memoizedState = f.memoizedState, l.lanes = f.lanes) : (l.updateQueue = null, l.memoizedState = null);
          }
          var h = (ee.current & 1) !== 0, p = o;
          do {
            var y;
            if (y = p.tag === 13) {
              var x = p.memoizedState;
              if (x !== null) y = x.dehydrated !== null;
              else {
                var b = p.memoizedProps;
                y = b.fallback === void 0 ? !1 : b.unstable_avoidThisFallback !== !0 ? !0 : !h;
              }
            }
            if (y) {
              var d = p.updateQueue;
              if (d === null) {
                var c = /* @__PURE__ */ new Set();
                c.add(u), p.updateQueue = c;
              } else d.add(u);
              if (!(p.mode & 2)) {
                if (p.flags |= 64, l.flags |= 16384, l.flags &= -2981, l.tag === 1) if (l.alternate === null) l.tag = 17;
                else {
                  var m = jt(-1, 1);
                  m.tag = 2, Rt(l, m);
                }
                l.lanes |= 1;
                break e;
              }
              s = void 0, l = t;
              var w = a.pingCache;
              if (w === null ? (w = a.pingCache = new Tg(), s = /* @__PURE__ */ new Set(), w.set(u, s)) : (s = w.get(u), s === void 0 && (s = /* @__PURE__ */ new Set(), w.set(u, s))), !s.has(l)) {
                s.add(l);
                var v = Wg.bind(null, a, u, l);
                u.then(v, v);
              }
              p.flags |= 4096, p.lanes = t;
              break e;
            }
            p = p.return;
          } while (p !== null);
          s = Error(($n(l.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
        }
        me !== 5 && (me = 2), s = uu(s, l), p = o;
        do {
          switch (p.tag) {
            case 3:
              a = s, p.flags |= 4096, t &= -t, p.lanes |= t;
              var k = pm(p, a, t);
              nc(p, k);
              break e;
            case 1:
              a = s;
              var E = p.type, O = p.stateNode;
              if (!(p.flags & 64) && (typeof E.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (et === null || !et.has(O)))) {
                p.flags |= 4096, t &= -t, p.lanes |= t;
                var N = mm(p, a, t);
                nc(p, N);
                break e;
              }
          }
          p = p.return;
        } while (p !== null);
      }
      xm(n);
    } catch (P) {
      t = P, se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function bm() {
  var e = Ua.current;
  return Ua.current = za, e === null ? za : e;
}
function Tr(e, t) {
  var n = M;
  M |= 16;
  var r = bm();
  be === e && ye === t || Yn(e, t);
  do
    try {
      $g();
      break;
    } catch (i) {
      wm(e, i);
    }
  while (!0);
  if (Js(), M = n, Ua.current = r, se !== null) throw Error(A(261));
  return be = null, ye = 0, me;
}
function $g() {
  for (; se !== null; ) Em(se);
}
function Fg() {
  for (; se !== null && !bg(); ) Em(se);
}
function Em(e) {
  var t = Sm(e.alternate, e, dn);
  e.memoizedProps = e.pendingProps, t === null ? xm(e) : se = t, fu.current = null;
}
function xm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 2048) {
      if (n = _g(t), n !== null) {
        n.flags &= 2047, se = n;
        return;
      }
      e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
    } else {
      if (n = Ng(n, t, dn), n !== null) {
        se = n;
        return;
      }
      if (n = t, n.tag !== 24 && n.tag !== 23 || n.memoizedState === null || dn & 1073741824 || !(n.mode & 4)) {
        for (var r = 0, i = n.child; i !== null; ) r |= i.lanes | i.childLanes, i = i.sibling;
        n.childLanes = r;
      }
      e !== null && !(e.flags & 2048) && (e.firstEffect === null && (e.firstEffect = t.firstEffect), t.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t));
    }
    if (t = t.sibling, t !== null) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function qt(e) {
  var t = qn();
  return cn(99, zg.bind(null, e, t)), null;
}
function zg(e, t) {
  do
    Qt();
  while (Wr !== null);
  if (M & 48) throw Error(A(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes, i = r, a = e.pendingLanes & ~i;
  e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= i, e.mutableReadLanes &= i, e.entangledLanes &= i, i = e.entanglements;
  for (var o = e.eventTimes, l = e.expirationTimes; 0 < a; ) {
    var s = 31 - $t(a), u = 1 << s;
    i[s] = 0, o[s] = -1, l[s] = -1, a &= ~u;
  }
  if (ct !== null && !(r & 24) && ct.has(e) && ct.delete(e), e === be && (se = be = null, ye = 0), 1 < n.flags ? n.lastEffect !== null ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, r !== null) {
    if (i = M, M |= 32, fu.current = null, Do = ua, o = Bf(), El(o)) {
      if ("selectionStart" in o) l = { start: o.selectionStart, end: o.selectionEnd };
      else e: if (l = (l = o.ownerDocument) && l.defaultView || window, (u = l.getSelection && l.getSelection()) && u.rangeCount !== 0) {
        l = u.anchorNode, a = u.anchorOffset, s = u.focusNode, u = u.focusOffset;
        try {
          l.nodeType, s.nodeType;
        } catch {
          l = null;
          break e;
        }
        var f = 0, h = -1, p = -1, y = 0, x = 0, b = o, d = null;
        t: for (; ; ) {
          for (var c; b !== l || a !== 0 && b.nodeType !== 3 || (h = f + a), b !== s || u !== 0 && b.nodeType !== 3 || (p = f + u), b.nodeType === 3 && (f += b.nodeValue.length), (c = b.firstChild) !== null; )
            d = b, b = c;
          for (; ; ) {
            if (b === o) break t;
            if (d === l && ++y === a && (h = f), d === s && ++x === u && (p = f), (c = b.nextSibling) !== null) break;
            b = d, d = b.parentNode;
          }
          b = c;
        }
        l = h === -1 || p === -1 ? null : { start: h, end: p };
      } else l = null;
      l = l || { start: 0, end: 0 };
    } else l = null;
    $o = { focusedElem: o, selectionRange: l }, ua = !1, Yr = null, ha = !1, R = r;
    do
      try {
        Ug();
      } catch (P) {
        if (R === null) throw Error(A(330));
        Mt(R, P), R = R.nextEffect;
      }
    while (R !== null);
    Yr = null, R = r;
    do
      try {
        for (o = e; R !== null; ) {
          var m = R.flags;
          if (m & 16 && Zr(R.stateNode, ""), m & 128) {
            var w = R.alternate;
            if (w !== null) {
              var v = w.ref;
              v !== null && (typeof v == "function" ? v(null) : v.current = null);
            }
          }
          switch (m & 1038) {
            case 2:
              Cc(R), R.flags &= -3;
              break;
            case 6:
              Cc(R), R.flags &= -3, Vo(R.alternate, R);
              break;
            case 1024:
              R.flags &= -1025;
              break;
            case 1028:
              R.flags &= -1025, Vo(R.alternate, R);
              break;
            case 4:
              Vo(R.alternate, R);
              break;
            case 8:
              l = R, vm(o, l);
              var k = l.alternate;
              Oc(l), k !== null && Oc(k);
          }
          R = R.nextEffect;
        }
      } catch (P) {
        if (R === null) throw Error(A(330));
        Mt(R, P), R = R.nextEffect;
      }
    while (R !== null);
    if (v = $o, w = Bf(), m = v.focusedElem, o = v.selectionRange, w !== m && m && m.ownerDocument && Ip(m.ownerDocument.documentElement, m)) {
      for (o !== null && El(m) && (w = o.start, v = o.end, v === void 0 && (v = w), "selectionStart" in m ? (m.selectionStart = w, m.selectionEnd = Math.min(v, m.value.length)) : (v = (w = m.ownerDocument || document) && w.defaultView || window, v.getSelection && (v = v.getSelection(), l = m.textContent.length, k = Math.min(o.start, l), o = o.end === void 0 ? k : Math.min(o.end, l), !v.extend && k > o && (l = o, o = k, k = l), l = Uf(m, k), a = Uf(m, o), l && a && (v.rangeCount !== 1 || v.anchorNode !== l.node || v.anchorOffset !== l.offset || v.focusNode !== a.node || v.focusOffset !== a.offset) && (w = w.createRange(), w.setStart(l.node, l.offset), v.removeAllRanges(), k > o ? (v.addRange(w), v.extend(a.node, a.offset)) : (w.setEnd(a.node, a.offset), v.addRange(w)))))), w = [], v = m; v = v.parentNode; ) v.nodeType === 1 && w.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
      for (typeof m.focus == "function" && m.focus(), m = 0; m < w.length; m++) v = w[m], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
    }
    ua = !!Do, $o = Do = null, e.current = n, R = r;
    do
      try {
        for (m = e; R !== null; ) {
          var E = R.flags;
          if (E & 36 && Ig(m, R.alternate, R), E & 128) {
            w = void 0;
            var O = R.ref;
            if (O !== null) {
              var N = R.stateNode;
              switch (R.tag) {
                case 5:
                  w = N;
                  break;
                default:
                  w = N;
              }
              typeof O == "function" ? O(w) : O.current = w;
            }
          }
          R = R.nextEffect;
        }
      } catch (P) {
        if (R === null) throw Error(A(330));
        Mt(R, P), R = R.nextEffect;
      }
    while (R !== null);
    R = null, xg(), M = i;
  } else e.current = n;
  if (zt) zt = !1, Wr = e, _r = t;
  else for (R = r; R !== null; ) t = R.nextEffect, R.nextEffect = null, R.flags & 8 && (E = R, E.sibling = null, E.stateNode = null), R = t;
  if (r = e.pendingLanes, r === 0 && (et = null), r === 1 ? e === Wl ? Vr++ : (Vr = 0, Wl = e) : Vr = 0, n = n.stateNode, sn && typeof sn.onCommitFiberRoot == "function") try {
    sn.onCommitFiberRoot(qs, n, void 0, (n.current.flags & 64) === 64);
  } catch {
  }
  if (Be(e, ge()), Ba) throw Ba = !1, e = Ul, Ul = null, e;
  return M & 8 || ot(), null;
}
function Ug() {
  for (; R !== null; ) {
    var e = R.alternate;
    ha || Yr === null || (R.flags & 8 ? Cf(R, Yr) && (ha = !0) : R.tag === 13 && Lg(e, R) && Cf(R, Yr) && (ha = !0));
    var t = R.flags;
    t & 256 && Rg(e, R), !(t & 512) || zt || (zt = !0, oi(97, function() {
      return Qt(), null;
    })), R = R.nextEffect;
  }
}
function Qt() {
  if (_r !== 90) {
    var e = 97 < _r ? 97 : _r;
    return _r = 90, cn(e, Hg);
  }
  return !1;
}
function Bg(e, t) {
  Bl.push(t, e), zt || (zt = !0, oi(97, function() {
    return Qt(), null;
  }));
}
function km(e, t) {
  Hl.push(t, e), zt || (zt = !0, oi(97, function() {
    return Qt(), null;
  }));
}
function Hg() {
  if (Wr === null) return !1;
  var e = Wr;
  if (Wr = null, M & 48) throw Error(A(331));
  var t = M;
  M |= 32;
  var n = Hl;
  Hl = [];
  for (var r = 0; r < n.length; r += 2) {
    var i = n[r], a = n[r + 1], o = i.destroy;
    if (i.destroy = void 0, typeof o == "function") try {
      o();
    } catch (s) {
      if (a === null) throw Error(A(330));
      Mt(a, s);
    }
  }
  for (n = Bl, Bl = [], r = 0; r < n.length; r += 2) {
    i = n[r], a = n[r + 1];
    try {
      var l = i.create;
      i.destroy = l();
    } catch (s) {
      if (a === null) throw Error(A(330));
      Mt(a, s);
    }
  }
  for (l = e.current.firstEffect; l !== null; ) e = l.nextEffect, l.nextEffect = null, l.flags & 8 && (l.sibling = null, l.stateNode = null), l = e;
  return M = t, ot(), !0;
}
function Nc(e, t, n) {
  t = uu(n, t), t = pm(e, t, 1), Rt(e, t), t = Te(), e = mo(e, 1), e !== null && (ao(e, 1, t), Be(e, t));
}
function Mt(e, t) {
  if (e.tag === 3) Nc(e, e, t);
  else for (var n = e.return; n !== null; ) {
    if (n.tag === 3) {
      Nc(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (et === null || !et.has(r))) {
        e = uu(t, e);
        var i = mm(n, e, 1);
        if (Rt(n, i), i = Te(), n = mo(n, 1), n !== null) ao(n, 1, i), Be(n, i);
        else if (typeof r.componentDidCatch == "function" && (et === null || !et.has(r))) try {
          r.componentDidCatch(t, e);
        } catch {
        }
        break;
      }
    }
    n = n.return;
  }
}
function Wg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Te(), e.pingedLanes |= e.suspendedLanes & n, be === e && (ye & n) === n && (me === 4 || me === 3 && (ye & 62914560) === ye && 500 > ge() - du ? Yn(e, 0) : cu |= n), Be(e, t);
}
function Vg(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t), t = 0, t === 0 && (t = e.mode, t & 2 ? t & 4 ? (st === 0 && (st = fr), t = On(62914560 & ~st), t === 0 && (t = 4194304)) : t = qn() === 99 ? 1 : 2 : t = 1), n = Te(), e = mo(e, t), e !== null && (ao(e, t, n), Be(e, n));
}
var Sm;
Sm = function(e, t, n) {
  var r = t.lanes;
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Se.current) Ge = !0;
  else if (n & r) Ge = !!(e.flags & 16384);
  else {
    switch (Ge = !1, t.tag) {
      case 3:
        vc(t), Bo();
        break;
      case 5:
        oc(t);
        break;
      case 1:
        Oe(t.type) && da(t);
        break;
      case 4:
        Nl(t, t.stateNode.containerInfo);
        break;
      case 10:
        r = t.memoizedProps.value;
        var i = t.type._context;
        ne(_a, i._currentValue), i._currentValue = r;
        break;
      case 13:
        if (t.memoizedState !== null)
          return n & t.child.childLanes ? hc(e, t, n) : (ne(ee, ee.current & 1), t = ft(e, t, n), t !== null ? t.sibling : null);
        ne(ee, ee.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 64) {
          if (r) return Ec(e, t, n);
          t.flags |= 64;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ne(ee, ee.current), r) break;
        return null;
      case 23:
      case 24:
        return t.lanes = 0, Ho(e, t, n);
    }
    return ft(e, t, n);
  }
  else Ge = !1;
  switch (t.lanes = 0, t.tag) {
    case 2:
      if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = Kn(t, we.current), Hn(t, n), i = au(null, t, r, e, i, n), t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0) {
        if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r)) {
          var a = !0;
          da(t);
        } else a = !1;
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, tu(t);
        var o = r.getDerivedStateFromProps;
        typeof o == "function" && Ra(t, r, o, e), i.updater = co, t.stateNode = i, i._reactInternals = t, Al(t, r, e, n), t = Rl(null, t, r, !0, a, n);
      } else t.tag = 0, ke(null, t, i, n), t = t.child;
      return t;
    case 16:
      i = t.elementType;
      e: {
        switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = Qg(i), e = Xe(i, e), a) {
          case 0:
            t = jl(null, t, i, e, n);
            break e;
          case 1:
            t = mc(null, t, i, e, n);
            break e;
          case 11:
            t = dc(null, t, i, e, n);
            break e;
          case 14:
            t = pc(null, t, i, Xe(i.type, e), r, n);
            break e;
        }
        throw Error(A(306, i, ""));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), jl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), mc(e, t, r, i, n);
    case 3:
      if (vc(t), r = t.updateQueue, e === null || r === null) throw Error(A(282));
      if (r = t.pendingProps, i = t.memoizedState, i = i !== null ? i.element : null, Gp(e, t), li(t, r, null, n), r = t.memoizedState.element, r === i) Bo(), t = ft(e, t, n);
      else {
        if (i = t.stateNode, (a = i.hydrate) && (Pt = Bn(t.stateNode.containerInfo.firstChild), ut = t, a = rt = !0), a) {
          if (e = i.mutableSourceEagerHydrationData, e != null) for (i = 0; i < e.length; i += 2) a = e[i], a._workInProgressVersionPrimary = e[i + 1], Wn.push(a);
          for (n = Jp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 1024, n = n.sibling;
        } else ke(e, t, r, n), Bo();
        t = t.child;
      }
      return t;
    case 5:
      return oc(t), e === null && _l(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = i.children, Sl(r, i) ? o = null : a !== null && Sl(r, a) && (t.flags |= 16), um(e, t), ke(e, t, o, n), t.child;
    case 6:
      return e === null && _l(t), null;
    case 13:
      return hc(e, t, n);
    case 4:
      return Nl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ia(t, null, r, n) : ke(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), dc(e, t, r, i, n);
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(
        e,
        t,
        t.pendingProps.children,
        n
      ), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        r = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value;
        var l = t.type._context;
        if (ne(_a, l._currentValue), l._currentValue = a, o !== null) if (l = o.value, a = De(l, a) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(l, a) : 1073741823) | 0, a === 0) {
          if (o.children === i.children && !Se.current) {
            t = ft(e, t, n);
            break e;
          }
        } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
          var s = l.dependencies;
          if (s !== null) {
            o = l.child;
            for (var u = s.firstContext; u !== null; ) {
              if (u.context === r && u.observedBits & a) {
                l.tag === 1 && (u = jt(-1, n & -n), u.tag = 2, Rt(l, u)), l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Xp(l.return, n), s.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else o = l.tag === 10 && l.type === t.type ? null : l.child;
          if (o !== null) o.return = l;
          else for (o = l; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (l = o.sibling, l !== null) {
              l.return = o.return, o = l;
              break;
            }
            o = o.return;
          }
          l = o;
        }
        ke(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, a = t.pendingProps, r = a.children, Hn(t, n), i = Ue(
        i,
        a.unstable_observedBits
      ), r = r(i), t.flags |= 1, ke(e, t, r, n), t.child;
    case 14:
      return i = t.type, a = Xe(i, t.pendingProps), a = Xe(i.type, a), pc(e, t, i, a, r, n);
    case 15:
      return sm(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, Oe(r) ? (e = !0, da(t)) : e = !1, Hn(t, n), qp(t, r, i), Al(t, r, i, n), Rl(null, t, r, !0, e, n);
    case 19:
      return Ec(e, t, n);
    case 23:
      return Ho(e, t, n);
    case 24:
      return Ho(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Yg(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function $e(e, t, n, r) {
  return new Yg(e, t, n, r);
}
function mu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Qg(e) {
  if (typeof e == "function") return mu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === no) return 11;
    if (e === ro) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return n === null ? (n = $e(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ga(e, t, n, r, i, a) {
  var o = 2;
  if (r = e, typeof e == "function") mu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case kt:
      return Qn(n.children, i, a, t);
    case tp:
      o = 8, i |= 16;
      break;
    case _s:
      o = 8, i |= 1;
      break;
    case Lr:
      return e = $e(12, n, t, i | 8), e.elementType = Lr, e.type = Lr, e.lanes = a, e;
    case Mr:
      return e = $e(13, n, t, i), e.type = Mr, e.elementType = Mr, e.lanes = a, e;
    case Ea:
      return e = $e(19, n, t, i), e.elementType = Ea, e.lanes = a, e;
    case Ms:
      return vu(n, i, a, t);
    case ol:
      return e = $e(24, n, t, i), e.elementType = ol, e.lanes = a, e;
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ts:
          o = 10;
          break e;
        case js:
          o = 9;
          break e;
        case no:
          o = 11;
          break e;
        case ro:
          o = 14;
          break e;
        case Rs:
          o = 16, r = null;
          break e;
        case Is:
          o = 22;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = $e(o, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
}
function Qn(e, t, n, r) {
  return e = $e(7, e, r, t), e.lanes = n, e;
}
function vu(e, t, n, r) {
  return e = $e(23, e, r, t), e.elementType = Ms, e.lanes = n, e;
}
function Yo(e, t, n) {
  return e = $e(6, e, null, t), e.lanes = n, e;
}
function Qo(e, t, n) {
  return t = $e(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Xg(e, t, n) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = _o(0), this.expirationTimes = _o(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _o(0), this.mutableSourceEagerHydrationData = null;
}
function Gg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: en, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ha(e, t, n, r) {
  var i = t.current, a = Te(), o = It(i);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (wn(n) !== n || n.tag !== 1) throw Error(A(170));
      var l = n;
      do {
        switch (l.tag) {
          case 3:
            l = l.stateNode.context;
            break t;
          case 1:
            if (Oe(l.type)) {
              l = l.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        l = l.return;
      } while (l !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (Oe(s)) {
        n = Up(n, s, l);
        break e;
      }
    }
    n = l;
  } else n = Ft;
  return t.context === null ? t.context = n : t.pendingContext = n, t = jt(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), Rt(i, t), Lt(i, o, a), o;
}
function Xo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _c(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hu(e, t) {
  _c(e, t), (e = e.alternate) && _c(e, t);
}
function Kg() {
  return null;
}
function gu(e, t, n) {
  var r = n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources || null;
  if (n = new Xg(e, t, n != null && n.hydrate === !0), t = $e(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), n.current = t, t.stateNode = n, tu(t), e[ur] = n.current, Mp(e.nodeType === 8 ? e.parentNode : e), r) for (e = 0; e < r.length; e++) {
    t = r[e];
    var i = t._getVersion;
    i = i(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, i] : n.mutableSourceEagerHydrationData.push(t, i);
  }
  this._internalRoot = n;
}
gu.prototype.render = function(e) {
  Ha(e, this._internalRoot, null, null);
};
gu.prototype.unmount = function() {
  var e = this._internalRoot, t = e.containerInfo;
  Ha(null, e, null, function() {
    t[ur] = null;
  });
};
function Ni(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function qg(e, t) {
  if (t || (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild; ) e.removeChild(n);
  return new gu(e, 0, t ? { hydrate: !0 } : void 0);
}
function vo(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a._internalRoot;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var u = Xo(o);
        l.call(u);
      };
    }
    Ha(t, o, e, i);
  } else {
    if (a = n._reactRootContainer = qg(n, r), o = a._internalRoot, typeof i == "function") {
      var s = i;
      i = function() {
        var u = Xo(o);
        s.call(u);
      };
    }
    ym(function() {
      Ha(t, o, e, i);
    });
  }
  return Xo(o);
}
hp = function(e) {
  if (e.tag === 13) {
    var t = Te();
    Lt(e, 4, t), hu(e, 4);
  }
};
Us = function(e) {
  if (e.tag === 13) {
    var t = Te();
    Lt(e, 67108864, t), hu(e, 67108864);
  }
};
gp = function(e) {
  if (e.tag === 13) {
    var t = Te(), n = It(e);
    Lt(e, n, t), hu(e, n);
  }
};
yp = function(e, t) {
  return t();
};
hl = function(e, t, n) {
  switch (t) {
    case "input":
      if (sl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = uo(r);
            if (!i) throw Error(A(90));
            rp(r), sl(r, i);
          }
        }
      }
      break;
    case "textarea":
      ap(e, n);
      break;
    case "select":
      t = n.value, t != null && Fn(e, !!n.multiple, t, !1);
  }
};
$s = gm;
dp = function(e, t, n, r, i) {
  var a = M;
  M |= 4;
  try {
    return cn(98, e.bind(null, t, n, r, i));
  } finally {
    M = a, M === 0 && (dr(), ot());
  }
};
Fs = function() {
  !(M & 49) && (Dg(), Qt());
};
pp = function(e, t) {
  var n = M;
  M |= 2;
  try {
    return e(t);
  } finally {
    M = n, M === 0 && (dr(), ot());
  }
};
function Om(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ni(t)) throw Error(A(200));
  return Gg(e, t, null, n);
}
var Zg = { Events: [Pi, Nn, uo, fp, cp, Qt, { current: !1 }] }, Or = { findFiberByHostInstance: nn, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, Jg = { bundleType: Or.bundleType, version: Or.version, rendererPackageName: Or.rendererPackageName, rendererConfig: Or.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = vp(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Or.findFiberByHostInstance || Kg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xi.isDisabled && Xi.supportsFiber) try {
    qs = Xi.inject(Jg), sn = Xi;
  } catch {
  }
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zg;
Ye.createPortal = Om;
Ye.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : Error(A(268, Object.keys(e)));
  return e = vp(t), e = e === null ? null : e.stateNode, e;
};
Ye.flushSync = function(e, t) {
  var n = M;
  if (n & 48) return e(t);
  M |= 1;
  try {
    if (e) return cn(99, e.bind(null, t));
  } finally {
    M = n, ot();
  }
};
Ye.hydrate = function(e, t, n) {
  if (!Ni(t)) throw Error(A(200));
  return vo(null, e, t, !0, n);
};
Ye.render = function(e, t, n) {
  if (!Ni(t)) throw Error(A(200));
  return vo(null, e, t, !1, n);
};
Ye.unmountComponentAtNode = function(e) {
  if (!Ni(e)) throw Error(A(40));
  return e._reactRootContainer ? (ym(function() {
    vo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ur] = null;
    });
  }), !0) : !1;
};
Ye.unstable_batchedUpdates = gm;
Ye.unstable_createPortal = function(e, t) {
  return Om(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
Ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ni(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return vo(e, t, n, !1, r);
};
Ye.version = "17.0.2";
function Pm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pm);
    } catch (e) {
      console.error(e);
    }
}
Pm(), qd.exports = Ye;
var Cm = qd.exports;
const jn = /* @__PURE__ */ xi(Cm);
var Am = { exports: {} }, ey = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", ty = ey, ny = ty;
function Nm() {
}
function _m() {
}
_m.resetWarningCache = Nm;
var ry = function() {
  function e(r, i, a, o, l, s) {
    if (s !== ny) {
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
    checkPropTypes: _m,
    resetWarningCache: Nm
  };
  return n.PropTypes = n, n;
};
Am.exports = ry();
var iy = Am.exports;
const g = /* @__PURE__ */ xi(iy);
var Tm = { exports: {} };
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
        var l = arguments[o];
        l && (a = i(a, r(l)));
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
      for (var l in a)
        t.call(a, l) && a[l] && (o = i(o, l));
      return o;
    }
    function i(a, o) {
      return o ? a ? a + " " + o : a + o : a;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Tm);
var ay = Tm.exports;
const Y = /* @__PURE__ */ xi(ay);
function B() {
  return B = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, B.apply(null, arguments);
}
function He(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
var yu = /* @__PURE__ */ S.createContext({});
yu.Consumer;
yu.Provider;
function pn(e, t) {
  var n = _.useContext(yu);
  return e || n[t] || t;
}
var oy = ["children"];
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
function ly(e, t) {
  if (e == null) return {};
  var n = sy(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function sy(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function uy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Im(r.key), r);
  }
}
function cy(e, t, n) {
  return t && fy(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Yl(e, t);
}
function Yl(e, t) {
  return Yl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Yl(e, t);
}
function py(e) {
  var t = Rm();
  return function() {
    var r = Wa(e), i;
    if (t) {
      var a = Wa(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return my(this, i);
  };
}
function my(e, t) {
  if (t && (Jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return jm(e);
}
function jm(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Rm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Rm = function() {
    return !!e;
  })();
}
function Wa(e) {
  return Wa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Wa(e);
}
function vy(e, t, n) {
  return t = Im(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Im(e) {
  var t = hy(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function hy(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Jn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rn = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Lm(e, t, n) {
  var r = /* @__PURE__ */ function(i) {
    dy(o, i);
    var a = py(o);
    function o(l) {
      var s;
      return uy(this, o), s = a.call(this, l), s.transformProps = s.transformProps.bind(jm(s)), s;
    }
    return cy(o, [{
      key: "warn",
      value: function(s) {
      }
    }, {
      key: "transformProps",
      value: function(s, u) {
        if (n[u] === void 0)
          return s[u] = this.props[u], s;
        var f = n[u], h = f.deprType, p = f.newName, y = f.expect, x = f.transform, b = f.message;
        switch (h) {
          case Rn.MOVED:
            this.warn("".concat(t, ": The prop '").concat(u, "' has been moved to '").concat(p, "'.")), s[p] = this.props[u];
            break;
          case Rn.REMOVED:
            this.warn("".concat(t, ": The prop '").concat(u, "' has been removed. '").concat(b, "'"));
            break;
          case Rn.FORMAT:
            y(this.props[u]) ? s[u] = this.props[u] : (this.warn("".concat(t, ": The prop '").concat(u, "' expects a new format. ").concat(b)), s[u] = x(this.props[u], this.props));
            break;
          case Rn.MOVED_AND_FORMAT:
            this.warn("".concat(t, ": The prop '").concat(u, "' has been moved to '").concat(p, "' and expects a new format. ").concat(b)), s[p] = x(this.props[u], this.props);
            break;
          default:
            s[u] = this.props[u];
            break;
        }
        return s;
      }
    }, {
      key: "render",
      value: function() {
        var s = Object.keys(this.props).reduce(this.transformProps, {}), u = s.children, f = ly(s, oy);
        return /* @__PURE__ */ S.createElement(e, f, this.props.children || u);
      }
    }]), o;
  }(S.Component);
  return vy(r, "displayName", "withDeprecatedProps(".concat(t, ")")), r;
}
let Tc = 0;
const gy = (e = "id") => (Tc += 1, `${e}${Tc}`);
function ci(e) {
  "@babel/helpers - typeof";
  return ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ci(e);
}
var yy = ["src", "id", "className", "hidden", "screenReaderText", "svgAttrs", "size"];
function Va() {
  return Va = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Va.apply(this, arguments);
}
function jc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jc(Object(n), !0).forEach(function(r) {
      Mm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Mm(e, t, n) {
  return t = by(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function by(e) {
  var t = Ey(e, "string");
  return ci(t) == "symbol" ? t : t + "";
}
function Ey(e, t) {
  if (ci(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ci(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xy(e, t) {
  if (e == null) return {};
  var n = ky(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function ky(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function wu(e) {
  var t = e.src, n = e.id, r = e.className, i = e.hidden, a = e.screenReaderText, o = e.svgAttrs, l = e.size, s = xy(e, yy);
  if (t) {
    var u = o["aria-label"] || o["aria-labelledby"], f = wy({}, o);
    return u || (f["aria-label"] = void 0, f["aria-hidden"] = !0), /* @__PURE__ */ S.createElement("span", Va({
      className: Y("pgn__icon", Mm({}, "pgn__icon__".concat(l), !!l), r),
      id: n
    }, s), /* @__PURE__ */ S.createElement(t, Va({
      role: "img",
      focusable: !1
    }, f)), a && /* @__PURE__ */ S.createElement("span", {
      className: "sr-only"
    }, a));
  }
  return /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("span", {
    id: n || gy("Icon"),
    className: r,
    "aria-hidden": i
  }), a && /* @__PURE__ */ S.createElement("span", {
    className: "sr-only"
  }, a));
}
wu.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: g.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: g.shape({
    "aria-label": g.string,
    "aria-labelledby": g.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: g.string,
  /** The size of the icon. */
  size: g.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: g.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: g.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: g.oneOfType([g.string, g.element])
};
wu.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const jr = Lm(wu, "Icon", {
  className: {
    deprType: Rn.FORMAT,
    expect: function(t) {
      return typeof t == "string";
    },
    transform: function(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    },
    message: "It should be a string."
  }
});
function Rc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rc(Object(n), !0).forEach(function(r) {
      ue(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ya(e) {
  "@babel/helpers - typeof";
  return Ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ya(e);
}
function Sy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Py(e, t, n) {
  return t && Oy(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ue(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function bu(e, t) {
  return Ay(e) || _y(e, t) || Dm(e, t) || jy();
}
function _i(e) {
  return Cy(e) || Ny(e) || Dm(e) || Ty();
}
function Cy(e) {
  if (Array.isArray(e)) return Ql(e);
}
function Ay(e) {
  if (Array.isArray(e)) return e;
}
function Ny(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _y(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, a = !1, o, l;
    try {
      for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0)
        ;
    } catch (s) {
      a = !0, l = s;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    }
    return r;
  }
}
function Dm(e, t) {
  if (e) {
    if (typeof e == "string") return Ql(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ql(e, t);
  }
}
function Ql(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ty() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ic = function() {
}, Eu = {}, $m = {}, Fm = null, zm = {
  mark: Ic,
  measure: Ic
};
try {
  typeof window < "u" && (Eu = window), typeof document < "u" && ($m = document), typeof MutationObserver < "u" && (Fm = MutationObserver), typeof performance < "u" && (zm = performance);
} catch {
}
var Ry = Eu.navigator || {}, Lc = Ry.userAgent, Mc = Lc === void 0 ? "" : Lc, Bt = Eu, Z = $m, Dc = Fm, Gi = zm;
Bt.document;
var yt = !!Z.documentElement && !!Z.head && typeof Z.addEventListener == "function" && typeof Z.createElement == "function", Um = ~Mc.indexOf("MSIE") || ~Mc.indexOf("Trident/"), Ki, qi, Zi, Ji, ea, pt = "___FONT_AWESOME___", Xl = 16, Bm = "fa", Hm = "svg-inline--fa", mn = "data-fa-i2svg", Gl = "data-fa-pseudo-element", Iy = "data-fa-pseudo-element-pending", xu = "data-prefix", ku = "data-icon", $c = "fontawesome-i2svg", Ly = "async", My = ["HTML", "HEAD", "STYLE", "SCRIPT"], Wm = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), K = "classic", te = "sharp", Su = [K, te];
function Ti(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[K];
    }
  });
}
var di = Ti((Ki = {}, ue(Ki, K, {
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
}), ue(Ki, te, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Ki)), pi = Ti((qi = {}, ue(qi, K, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), ue(qi, te, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), qi)), mi = Ti((Zi = {}, ue(Zi, K, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), ue(Zi, te, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Zi)), Dy = Ti((Ji = {}, ue(Ji, K, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), ue(Ji, te, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Ji)), $y = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, Vm = "fa-layers-text", Fy = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, zy = Ti((ea = {}, ue(ea, K, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), ue(ea, te, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), ea)), Ym = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Uy = Ym.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), By = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], on = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, vi = /* @__PURE__ */ new Set();
Object.keys(pi[K]).map(vi.add.bind(vi));
Object.keys(pi[te]).map(vi.add.bind(vi));
var Hy = [].concat(Su, _i(vi), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", on.GROUP, on.SWAP_OPACITY, on.PRIMARY, on.SECONDARY]).concat(Ym.map(function(e) {
  return "".concat(e, "x");
})).concat(Uy.map(function(e) {
  return "w-".concat(e);
})), Qr = Bt.FontAwesomeConfig || {};
function Wy(e) {
  var t = Z.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Vy(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (Z && typeof Z.querySelector == "function") {
  var Yy = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Yy.forEach(function(e) {
    var t = bu(e, 2), n = t[0], r = t[1], i = Vy(Wy(n));
    i != null && (Qr[r] = i);
  });
}
var Qm = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Bm,
  replacementClass: Hm,
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
Qr.familyPrefix && (Qr.cssPrefix = Qr.familyPrefix);
var er = j(j({}, Qm), Qr);
er.autoReplaceSvg || (er.observeMutations = !1);
var I = {};
Object.keys(Qm).forEach(function(e) {
  Object.defineProperty(I, e, {
    enumerable: !0,
    set: function(n) {
      er[e] = n, Xr.forEach(function(r) {
        return r(I);
      });
    },
    get: function() {
      return er[e];
    }
  });
});
Object.defineProperty(I, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    er.cssPrefix = t, Xr.forEach(function(n) {
      return n(I);
    });
  },
  get: function() {
    return er.cssPrefix;
  }
});
Bt.FontAwesomeConfig = I;
var Xr = [];
function Qy(e) {
  return Xr.push(e), function() {
    Xr.splice(Xr.indexOf(e), 1);
  };
}
var bt = Xl, tt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Xy(e) {
  if (!(!e || !yt)) {
    var t = Z.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = Z.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var a = n[i], o = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
    }
    return Z.head.insertBefore(t, r), e;
  }
}
var Gy = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function hi() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Gy[Math.random() * 62 | 0];
  return t;
}
function pr(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Ou(e) {
  return e.classList ? pr(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function Xm(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ky(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(Xm(e[n]), '" ');
  }, "").trim();
}
function ho(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function Pu(e) {
  return e.size !== tt.size || e.x !== tt.x || e.y !== tt.y || e.rotate !== tt.rotate || e.flipX || e.flipY;
}
function qy(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), s = {
    transform: "".concat(a, " ").concat(o, " ").concat(l)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: s,
    path: u
  };
}
function Zy(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? Xl : n, i = e.height, a = i === void 0 ? Xl : i, o = e.startCentered, l = o === void 0 ? !1 : o, s = "";
  return l && Um ? s += "translate(".concat(t.x / bt - r / 2, "em, ").concat(t.y / bt - a / 2, "em) ") : l ? s += "translate(calc(-50% + ".concat(t.x / bt, "em), calc(-50% + ").concat(t.y / bt, "em)) ") : s += "translate(".concat(t.x / bt, "em, ").concat(t.y / bt, "em) "), s += "scale(".concat(t.size / bt * (t.flipX ? -1 : 1), ", ").concat(t.size / bt * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var Jy = `:root, :host {
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
function Gm() {
  var e = Bm, t = Hm, n = I.cssPrefix, r = I.replacementClass, i = Jy;
  if (n !== e || r !== t) {
    var a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return i;
}
var Fc = !1;
function Go() {
  I.autoAddCss && !Fc && (Xy(Gm()), Fc = !0);
}
var e0 = {
  mixout: function() {
    return {
      dom: {
        css: Gm,
        insertCss: Go
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Go();
      },
      beforeI2svg: function() {
        Go();
      }
    };
  }
}, mt = Bt || {};
mt[pt] || (mt[pt] = {});
mt[pt].styles || (mt[pt].styles = {});
mt[pt].hooks || (mt[pt].hooks = {});
mt[pt].shims || (mt[pt].shims = []);
var Ke = mt[pt], Km = [], t0 = function e() {
  Z.removeEventListener("DOMContentLoaded", e), Qa = 1, Km.map(function(t) {
    return t();
  });
}, Qa = !1;
yt && (Qa = (Z.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Z.readyState), Qa || Z.addEventListener("DOMContentLoaded", t0));
function n0(e) {
  yt && (Qa ? setTimeout(e, 0) : Km.push(e));
}
function ji(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, i = e.children, a = i === void 0 ? [] : i;
  return typeof e == "string" ? Xm(e) : "<".concat(t, " ").concat(Ky(r), ">").concat(a.map(ji).join(""), "</").concat(t, ">");
}
function zc(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Ko = function(t, n, r, i) {
  var a = Object.keys(t), o = a.length, l = n, s, u, f;
  for (r === void 0 ? (s = 1, f = t[a[0]]) : (s = 0, f = r); s < o; s++)
    u = a[s], f = l(f, t[u], u, t);
  return f;
};
function r0(e) {
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
function Kl(e) {
  var t = r0(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function i0(e, t) {
  var n = e.length, r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function Uc(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], i = !!r.icon;
    return i ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function ql(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, i = r === void 0 ? !1 : r, a = Uc(t);
  typeof Ke.hooks.addPack == "function" && !i ? Ke.hooks.addPack(e, Uc(t)) : Ke.styles[e] = j(j({}, Ke.styles[e] || {}), a), e === "fas" && ql("fa", t);
}
var ta, na, ra, In = Ke.styles, a0 = Ke.shims, o0 = (ta = {}, ue(ta, K, Object.values(mi[K])), ue(ta, te, Object.values(mi[te])), ta), Cu = null, qm = {}, Zm = {}, Jm = {}, ev = {}, tv = {}, l0 = (na = {}, ue(na, K, Object.keys(di[K])), ue(na, te, Object.keys(di[te])), na);
function s0(e) {
  return ~Hy.indexOf(e);
}
function u0(e, t) {
  var n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !s0(i) ? i : null;
}
var nv = function() {
  var t = function(a) {
    return Ko(In, function(o, l, s) {
      return o[s] = Ko(l, a, {}), o;
    }, {});
  };
  qm = t(function(i, a, o) {
    if (a[3] && (i[a[3]] = o), a[2]) {
      var l = a[2].filter(function(s) {
        return typeof s == "number";
      });
      l.forEach(function(s) {
        i[s.toString(16)] = o;
      });
    }
    return i;
  }), Zm = t(function(i, a, o) {
    if (i[o] = o, a[2]) {
      var l = a[2].filter(function(s) {
        return typeof s == "string";
      });
      l.forEach(function(s) {
        i[s] = o;
      });
    }
    return i;
  }), tv = t(function(i, a, o) {
    var l = a[2];
    return i[o] = o, l.forEach(function(s) {
      i[s] = o;
    }), i;
  });
  var n = "far" in In || I.autoFetchSvg, r = Ko(a0, function(i, a) {
    var o = a[0], l = a[1], s = a[2];
    return l === "far" && !n && (l = "fas"), typeof o == "string" && (i.names[o] = {
      prefix: l,
      iconName: s
    }), typeof o == "number" && (i.unicodes[o.toString(16)] = {
      prefix: l,
      iconName: s
    }), i;
  }, {
    names: {},
    unicodes: {}
  });
  Jm = r.names, ev = r.unicodes, Cu = go(I.styleDefault, {
    family: I.familyDefault
  });
};
Qy(function(e) {
  Cu = go(e.styleDefault, {
    family: I.familyDefault
  });
});
nv();
function Au(e, t) {
  return (qm[e] || {})[t];
}
function f0(e, t) {
  return (Zm[e] || {})[t];
}
function ln(e, t) {
  return (tv[e] || {})[t];
}
function rv(e) {
  return Jm[e] || {
    prefix: null,
    iconName: null
  };
}
function c0(e) {
  var t = ev[e], n = Au("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Ht() {
  return Cu;
}
var Nu = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function go(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? K : n, i = di[r][e], a = pi[r][e] || pi[r][i], o = e in Ke.styles ? e : null;
  return a || o || null;
}
var Bc = (ra = {}, ue(ra, K, Object.keys(mi[K])), ue(ra, te, Object.keys(mi[te])), ra);
function yo(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, i = r === void 0 ? !1 : r, a = (t = {}, ue(t, K, "".concat(I.cssPrefix, "-").concat(K)), ue(t, te, "".concat(I.cssPrefix, "-").concat(te)), t), o = null, l = K;
  (e.includes(a[K]) || e.some(function(u) {
    return Bc[K].includes(u);
  })) && (l = K), (e.includes(a[te]) || e.some(function(u) {
    return Bc[te].includes(u);
  })) && (l = te);
  var s = e.reduce(function(u, f) {
    var h = u0(I.cssPrefix, f);
    if (In[f] ? (f = o0[l].includes(f) ? Dy[l][f] : f, o = f, u.prefix = f) : l0[l].indexOf(f) > -1 ? (o = f, u.prefix = go(f, {
      family: l
    })) : h ? u.iconName = h : f !== I.replacementClass && f !== a[K] && f !== a[te] && u.rest.push(f), !i && u.prefix && u.iconName) {
      var p = o === "fa" ? rv(u.iconName) : {}, y = ln(u.prefix, u.iconName);
      p.prefix && (o = null), u.iconName = p.iconName || y || u.iconName, u.prefix = p.prefix || u.prefix, u.prefix === "far" && !In.far && In.fas && !I.autoFetchSvg && (u.prefix = "fas");
    }
    return u;
  }, Nu());
  return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"), !s.prefix && l === te && (In.fass || I.autoFetchSvg) && (s.prefix = "fass", s.iconName = ln(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || o === "fa") && (s.prefix = Ht() || "fas"), s;
}
var d0 = /* @__PURE__ */ function() {
  function e() {
    Sy(this, e), this.definitions = {};
  }
  return Py(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
        i[a] = arguments[a];
      var o = i.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(l) {
        n.definitions[l] = j(j({}, n.definitions[l] || {}), o[l]), ql(l, o[l]);
        var s = mi[K][l];
        s && ql(s, o[l]), nv();
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
        var o = i[a], l = o.prefix, s = o.iconName, u = o.icon, f = u[2];
        n[l] || (n[l] = {}), f.length > 0 && f.forEach(function(h) {
          typeof h == "string" && (n[l][h] = u);
        }), n[l][s] = u;
      }), n;
    }
  }]), e;
}(), Hc = [], Ln = {}, Xn = {}, p0 = Object.keys(Xn);
function m0(e, t) {
  var n = t.mixoutsTo;
  return Hc = e, Ln = {}, Object.keys(Xn).forEach(function(r) {
    p0.indexOf(r) === -1 && delete Xn[r];
  }), Hc.forEach(function(r) {
    var i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach(function(o) {
      typeof i[o] == "function" && (n[o] = i[o]), Ya(i[o]) === "object" && Object.keys(i[o]).forEach(function(l) {
        n[o] || (n[o] = {}), n[o][l] = i[o][l];
      });
    }), r.hooks) {
      var a = r.hooks();
      Object.keys(a).forEach(function(o) {
        Ln[o] || (Ln[o] = []), Ln[o].push(a[o]);
      });
    }
    r.provides && r.provides(Xn);
  }), n;
}
function Zl(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  var a = Ln[e] || [];
  return a.forEach(function(o) {
    t = o.apply(null, [t].concat(r));
  }), t;
}
function vn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = Ln[e] || [];
  i.forEach(function(a) {
    a.apply(null, n);
  });
}
function vt() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Xn[e] ? Xn[e].apply(null, t) : void 0;
}
function Jl(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || Ht();
  if (t)
    return t = ln(n, t) || t, zc(iv.definitions, n, t) || zc(Ke.styles, n, t);
}
var iv = new d0(), v0 = function() {
  I.autoReplaceSvg = !1, I.observeMutations = !1, vn("noAuto");
}, h0 = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return yt ? (vn("beforeI2svg", t), vt("pseudoElements2svg", t), vt("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    I.autoReplaceSvg === !1 && (I.autoReplaceSvg = !0), I.observeMutations = !0, n0(function() {
      y0({
        autoReplaceSvgRoot: n
      }), vn("watch", t);
    });
  }
}, g0 = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Ya(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: ln(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = go(t[0]);
      return {
        prefix: r,
        iconName: ln(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(I.cssPrefix, "-")) > -1 || t.match($y))) {
      var i = yo(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || Ht(),
        iconName: ln(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof t == "string") {
      var a = Ht();
      return {
        prefix: a,
        iconName: ln(a, t) || t
      };
    }
  }
}, Ie = {
  noAuto: v0,
  config: I,
  dom: h0,
  parse: g0,
  library: iv,
  findIconDefinition: Jl,
  toHtml: ji
}, y0 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? Z : n;
  (Object.keys(Ke.styles).length > 0 || I.autoFetchSvg) && yt && I.autoReplaceSvg && Ie.dom.i2svg({
    node: r
  });
};
function wo(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return ji(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (yt) {
        var r = Z.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function w0(e) {
  var t = e.children, n = e.main, r = e.mask, i = e.attributes, a = e.styles, o = e.transform;
  if (Pu(o) && n.found && !r.found) {
    var l = n.width, s = n.height, u = {
      x: l / s / 2,
      y: 0.5
    };
    i.style = ho(j(j({}, a), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function b0(e) {
  var t = e.prefix, n = e.iconName, r = e.children, i = e.attributes, a = e.symbol, o = a === !0 ? "".concat(t, "-").concat(I.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: j(j({}, i), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function _u(e) {
  var t = e.icons, n = t.main, r = t.mask, i = e.prefix, a = e.iconName, o = e.transform, l = e.symbol, s = e.title, u = e.maskId, f = e.titleId, h = e.extra, p = e.watchable, y = p === void 0 ? !1 : p, x = r.found ? r : n, b = x.width, d = x.height, c = i === "fak", m = [I.replacementClass, a ? "".concat(I.cssPrefix, "-").concat(a) : ""].filter(function(P) {
    return h.classes.indexOf(P) === -1;
  }).filter(function(P) {
    return P !== "" || !!P;
  }).concat(h.classes).join(" "), w = {
    children: [],
    attributes: j(j({}, h.attributes), {}, {
      "data-prefix": i,
      "data-icon": a,
      class: m,
      role: h.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(b, " ").concat(d)
    })
  }, v = c && !~h.classes.indexOf("fa-fw") ? {
    width: "".concat(b / d * 16 * 0.0625, "em")
  } : {};
  y && (w.attributes[mn] = ""), s && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(f || hi())
    },
    children: [s]
  }), delete w.attributes.title);
  var k = j(j({}, w), {}, {
    prefix: i,
    iconName: a,
    main: n,
    mask: r,
    maskId: u,
    transform: o,
    symbol: l,
    styles: j(j({}, v), h.styles)
  }), E = r.found && n.found ? vt("generateAbstractMask", k) || {
    children: [],
    attributes: {}
  } : vt("generateAbstractIcon", k) || {
    children: [],
    attributes: {}
  }, O = E.children, N = E.attributes;
  return k.children = O, k.attributes = N, l ? b0(k) : w0(k);
}
function Wc(e) {
  var t = e.content, n = e.width, r = e.height, i = e.transform, a = e.title, o = e.extra, l = e.watchable, s = l === void 0 ? !1 : l, u = j(j(j({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (u[mn] = "");
  var f = j({}, o.styles);
  Pu(i) && (f.transform = Zy({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  var h = ho(f);
  h.length > 0 && (u.style = h);
  var p = [];
  return p.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), a && p.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), p;
}
function E0(e) {
  var t = e.content, n = e.title, r = e.extra, i = j(j(j({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = ho(r.styles);
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
var qo = Ke.styles;
function es(e) {
  var t = e[0], n = e[1], r = e.slice(4), i = bu(r, 1), a = i[0], o = null;
  return Array.isArray(a) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(I.cssPrefix, "-").concat(on.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(I.cssPrefix, "-").concat(on.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(I.cssPrefix, "-").concat(on.PRIMARY),
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
var x0 = {
  found: !1,
  width: 512,
  height: 512
};
function k0(e, t) {
  !Wm && !I.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function ts(e, t) {
  var n = t;
  return t === "fa" && I.styleDefault !== null && (t = Ht()), new Promise(function(r, i) {
    if (vt("missingIconAbstract"), n === "fa") {
      var a = rv(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && qo[t] && qo[t][e]) {
      var o = qo[t][e];
      return r(es(o));
    }
    k0(e, t), r(j(j({}, x0), {}, {
      icon: I.showMissingIcons && e ? vt("missingIconAbstract") || {} : {}
    }));
  });
}
var Vc = function() {
}, ns = I.measurePerformance && Gi && Gi.mark && Gi.measure ? Gi : {
  mark: Vc,
  measure: Vc
}, Rr = 'FA "6.5.2"', S0 = function(t) {
  return ns.mark("".concat(Rr, " ").concat(t, " begins")), function() {
    return av(t);
  };
}, av = function(t) {
  ns.mark("".concat(Rr, " ").concat(t, " ends")), ns.measure("".concat(Rr, " ").concat(t), "".concat(Rr, " ").concat(t, " begins"), "".concat(Rr, " ").concat(t, " ends"));
}, Tu = {
  begin: S0,
  end: av
}, ya = function() {
};
function Yc(e) {
  var t = e.getAttribute ? e.getAttribute(mn) : null;
  return typeof t == "string";
}
function O0(e) {
  var t = e.getAttribute ? e.getAttribute(xu) : null, n = e.getAttribute ? e.getAttribute(ku) : null;
  return t && n;
}
function P0(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(I.replacementClass);
}
function C0() {
  if (I.autoReplaceSvg === !0)
    return wa.replace;
  var e = wa[I.autoReplaceSvg];
  return e || wa.replace;
}
function A0(e) {
  return Z.createElementNS("http://www.w3.org/2000/svg", e);
}
function N0(e) {
  return Z.createElement(e);
}
function ov(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? A0 : N0 : n;
  if (typeof e == "string")
    return Z.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    i.setAttribute(o, e.attributes[o]);
  });
  var a = e.children || [];
  return a.forEach(function(o) {
    i.appendChild(ov(o, {
      ceFn: r
    }));
  }), i;
}
function _0(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var wa = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(i) {
        n.parentNode.insertBefore(ov(i), n);
      }), n.getAttribute(mn) === null && I.keepOriginalSource) {
        var r = Z.createComment(_0(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~Ou(n).indexOf(I.replacementClass))
      return wa.replace(t);
    var i = new RegExp("".concat(I.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var a = r[0].attributes.class.split(" ").reduce(function(l, s) {
        return s === I.replacementClass || s.match(i) ? l.toSvg.push(s) : l.toNode.push(s), l;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", a.toNode.join(" "));
    }
    var o = r.map(function(l) {
      return ji(l);
    }).join(`
`);
    n.setAttribute(mn, ""), n.innerHTML = o;
  }
};
function Qc(e) {
  e();
}
function lv(e, t) {
  var n = typeof t == "function" ? t : ya;
  if (e.length === 0)
    n();
  else {
    var r = Qc;
    I.mutateApproach === Ly && (r = Bt.requestAnimationFrame || Qc), r(function() {
      var i = C0(), a = Tu.begin("mutate");
      e.map(i), a(), n();
    });
  }
}
var ju = !1;
function sv() {
  ju = !0;
}
function rs() {
  ju = !1;
}
var Xa = null;
function Xc(e) {
  if (Dc && I.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? ya : t, r = e.nodeCallback, i = r === void 0 ? ya : r, a = e.pseudoElementsCallback, o = a === void 0 ? ya : a, l = e.observeMutationsRoot, s = l === void 0 ? Z : l;
    Xa = new Dc(function(u) {
      if (!ju) {
        var f = Ht();
        pr(u).forEach(function(h) {
          if (h.type === "childList" && h.addedNodes.length > 0 && !Yc(h.addedNodes[0]) && (I.searchPseudoElements && o(h.target), n(h.target)), h.type === "attributes" && h.target.parentNode && I.searchPseudoElements && o(h.target.parentNode), h.type === "attributes" && Yc(h.target) && ~By.indexOf(h.attributeName))
            if (h.attributeName === "class" && O0(h.target)) {
              var p = yo(Ou(h.target)), y = p.prefix, x = p.iconName;
              h.target.setAttribute(xu, y || f), x && h.target.setAttribute(ku, x);
            } else P0(h.target) && i(h.target);
        });
      }
    }), yt && Xa.observe(s, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function T0() {
  Xa && Xa.disconnect();
}
function j0(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, i) {
    var a = i.split(":"), o = a[0], l = a.slice(1);
    return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
  }, {})), n;
}
function R0(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", i = yo(Ou(e));
  return i.prefix || (i.prefix = Ht()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = f0(i.prefix, e.innerText) || Au(i.prefix, Kl(e.innerText))), !i.iconName && I.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function I0(e) {
  var t = pr(e.attributes).reduce(function(i, a) {
    return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return I.autoA11y && (n ? t["aria-labelledby"] = "".concat(I.replacementClass, "-title-").concat(r || hi()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function L0() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: tt,
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
function Gc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = R0(e), r = n.iconName, i = n.prefix, a = n.rest, o = I0(e), l = Zl("parseNodeAttributes", {}, e), s = t.styleParser ? j0(e) : [];
  return j({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: tt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: s,
      attributes: o
    }
  }, l);
}
var M0 = Ke.styles;
function uv(e) {
  var t = I.autoReplaceSvg === "nest" ? Gc(e, {
    styleParser: !1
  }) : Gc(e);
  return ~t.extra.classes.indexOf(Vm) ? vt("generateLayersText", e, t) : vt("generateSvgReplacementMutation", e, t);
}
var Wt = /* @__PURE__ */ new Set();
Su.map(function(e) {
  Wt.add("fa-".concat(e));
});
Object.keys(di[K]).map(Wt.add.bind(Wt));
Object.keys(di[te]).map(Wt.add.bind(Wt));
Wt = _i(Wt);
function Kc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!yt) return Promise.resolve();
  var n = Z.documentElement.classList, r = function(h) {
    return n.add("".concat($c, "-").concat(h));
  }, i = function(h) {
    return n.remove("".concat($c, "-").concat(h));
  }, a = I.autoFetchSvg ? Wt : Su.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(M0));
  a.includes("fa") || a.push("fa");
  var o = [".".concat(Vm, ":not([").concat(mn, "])")].concat(a.map(function(f) {
    return ".".concat(f, ":not([").concat(mn, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var l = [];
  try {
    l = pr(e.querySelectorAll(o));
  } catch {
  }
  if (l.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  var s = Tu.begin("onTree"), u = l.reduce(function(f, h) {
    try {
      var p = uv(h);
      p && f.push(p);
    } catch (y) {
      Wm || y.name === "MissingIcon" && console.error(y);
    }
    return f;
  }, []);
  return new Promise(function(f, h) {
    Promise.all(u).then(function(p) {
      lv(p, function() {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), s(), f();
      });
    }).catch(function(p) {
      s(), h(p);
    });
  });
}
function D0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  uv(e).then(function(n) {
    n && lv([n], t);
  });
}
function $0(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : Jl(t || {}), i = n.mask;
    return i && (i = (i || {}).icon ? i : Jl(i || {})), e(r, j(j({}, n), {}, {
      mask: i
    }));
  };
}
var F0 = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, i = r === void 0 ? tt : r, a = n.symbol, o = a === void 0 ? !1 : a, l = n.mask, s = l === void 0 ? null : l, u = n.maskId, f = u === void 0 ? null : u, h = n.title, p = h === void 0 ? null : h, y = n.titleId, x = y === void 0 ? null : y, b = n.classes, d = b === void 0 ? [] : b, c = n.attributes, m = c === void 0 ? {} : c, w = n.styles, v = w === void 0 ? {} : w;
  if (t) {
    var k = t.prefix, E = t.iconName, O = t.icon;
    return wo(j({
      type: "icon"
    }, t), function() {
      return vn("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), I.autoA11y && (p ? m["aria-labelledby"] = "".concat(I.replacementClass, "-title-").concat(x || hi()) : (m["aria-hidden"] = "true", m.focusable = "false")), _u({
        icons: {
          main: es(O),
          mask: s ? es(s.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: k,
        iconName: E,
        transform: j(j({}, tt), i),
        symbol: o,
        title: p,
        maskId: f,
        titleId: x,
        extra: {
          attributes: m,
          styles: v,
          classes: d
        }
      });
    });
  }
}, z0 = {
  mixout: function() {
    return {
      icon: $0(F0)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = Kc, n.nodeCallback = D0, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, i = r === void 0 ? Z : r, a = n.callback, o = a === void 0 ? function() {
      } : a;
      return Kc(i, o);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var i = r.iconName, a = r.title, o = r.titleId, l = r.prefix, s = r.transform, u = r.symbol, f = r.mask, h = r.maskId, p = r.extra;
      return new Promise(function(y, x) {
        Promise.all([ts(i, l), f.iconName ? ts(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(b) {
          var d = bu(b, 2), c = d[0], m = d[1];
          y([n, _u({
            icons: {
              main: c,
              mask: m
            },
            prefix: l,
            iconName: i,
            transform: s,
            symbol: u,
            maskId: h,
            title: a,
            titleId: o,
            extra: p,
            watchable: !0
          })]);
        }).catch(x);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, i = n.attributes, a = n.main, o = n.transform, l = n.styles, s = ho(l);
      s.length > 0 && (i.style = s);
      var u;
      return Pu(o) && (u = vt("generateAbstractTransformGrouping", {
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
}, U0 = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.classes, a = i === void 0 ? [] : i;
        return wo({
          type: "layer"
        }, function() {
          vn("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var o = [];
          return n(function(l) {
            Array.isArray(l) ? l.map(function(s) {
              o = o.concat(s.abstract);
            }) : o = o.concat(l.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(I.cssPrefix, "-layers")].concat(_i(a)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, B0 = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.title, a = i === void 0 ? null : i, o = r.classes, l = o === void 0 ? [] : o, s = r.attributes, u = s === void 0 ? {} : s, f = r.styles, h = f === void 0 ? {} : f;
        return wo({
          type: "counter",
          content: n
        }, function() {
          return vn("beforeDOMElementCreation", {
            content: n,
            params: r
          }), E0({
            content: n.toString(),
            title: a,
            extra: {
              attributes: u,
              styles: h,
              classes: ["".concat(I.cssPrefix, "-layers-counter")].concat(_i(l))
            }
          });
        });
      }
    };
  }
}, H0 = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.transform, a = i === void 0 ? tt : i, o = r.title, l = o === void 0 ? null : o, s = r.classes, u = s === void 0 ? [] : s, f = r.attributes, h = f === void 0 ? {} : f, p = r.styles, y = p === void 0 ? {} : p;
        return wo({
          type: "text",
          content: n
        }, function() {
          return vn("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Wc({
            content: n,
            transform: j(j({}, tt), a),
            title: l,
            extra: {
              attributes: h,
              styles: y,
              classes: ["".concat(I.cssPrefix, "-layers-text")].concat(_i(u))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var i = r.title, a = r.transform, o = r.extra, l = null, s = null;
      if (Um) {
        var u = parseInt(getComputedStyle(n).fontSize, 10), f = n.getBoundingClientRect();
        l = f.width / u, s = f.height / u;
      }
      return I.autoA11y && !i && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, Wc({
        content: n.innerHTML,
        width: l,
        height: s,
        transform: a,
        title: i,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, W0 = new RegExp('"', "ug"), qc = [1105920, 1112319];
function V0(e) {
  var t = e.replace(W0, ""), n = i0(t, 0), r = n >= qc[0] && n <= qc[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Kl(i ? t[0] : t),
    isSecondary: r || i
  };
}
function Zc(e, t) {
  var n = "".concat(Iy).concat(t.replace(":", "-"));
  return new Promise(function(r, i) {
    if (e.getAttribute(n) !== null)
      return r();
    var a = pr(e.children), o = a.filter(function(O) {
      return O.getAttribute(Gl) === t;
    })[0], l = Bt.getComputedStyle(e, t), s = l.getPropertyValue("font-family").match(Fy), u = l.getPropertyValue("font-weight"), f = l.getPropertyValue("content");
    if (o && !s)
      return e.removeChild(o), r();
    if (s && f !== "none" && f !== "") {
      var h = l.getPropertyValue("content"), p = ~["Sharp"].indexOf(s[2]) ? te : K, y = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(s[2]) ? pi[p][s[2].toLowerCase()] : zy[p][u], x = V0(h), b = x.value, d = x.isSecondary, c = s[0].startsWith("FontAwesome"), m = Au(y, b), w = m;
      if (c) {
        var v = c0(b);
        v.iconName && v.prefix && (m = v.iconName, y = v.prefix);
      }
      if (m && !d && (!o || o.getAttribute(xu) !== y || o.getAttribute(ku) !== w)) {
        e.setAttribute(n, w), o && e.removeChild(o);
        var k = L0(), E = k.extra;
        E.attributes[Gl] = t, ts(m, y).then(function(O) {
          var N = _u(j(j({}, k), {}, {
            icons: {
              main: O,
              mask: Nu()
            },
            prefix: y,
            iconName: w,
            extra: E,
            watchable: !0
          })), P = Z.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(P, e.firstChild) : e.appendChild(P), P.outerHTML = N.map(function(L) {
            return ji(L);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function Y0(e) {
  return Promise.all([Zc(e, "::before"), Zc(e, "::after")]);
}
function Q0(e) {
  return e.parentNode !== document.head && !~My.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Gl) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Jc(e) {
  if (yt)
    return new Promise(function(t, n) {
      var r = pr(e.querySelectorAll("*")).filter(Q0).map(Y0), i = Tu.begin("searchPseudoElements");
      sv(), Promise.all(r).then(function() {
        i(), rs(), t();
      }).catch(function() {
        i(), rs(), n();
      });
    });
}
var X0 = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = Jc, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, i = r === void 0 ? Z : r;
      I.searchPseudoElements && Jc(i);
    };
  }
}, ed = !1, G0 = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          sv(), ed = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Xc(Zl("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        T0();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        ed ? rs() : Xc(Zl("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, td = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, i) {
    var a = i.toLowerCase().split("-"), o = a[0], l = a.slice(1).join("-");
    if (o && l === "h")
      return r.flipX = !0, r;
    if (o && l === "v")
      return r.flipY = !0, r;
    if (l = parseFloat(l), isNaN(l))
      return r;
    switch (o) {
      case "grow":
        r.size = r.size + l;
        break;
      case "shrink":
        r.size = r.size - l;
        break;
      case "left":
        r.x = r.x - l;
        break;
      case "right":
        r.x = r.x + l;
        break;
      case "up":
        r.y = r.y - l;
        break;
      case "down":
        r.y = r.y + l;
        break;
      case "rotate":
        r.rotate = r.rotate + l;
        break;
    }
    return r;
  }, n);
}, K0 = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return td(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-transform");
        return i && (n.transform = td(i)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, i = n.transform, a = n.containerWidth, o = n.iconWidth, l = {
        transform: "translate(".concat(a / 2, " 256)")
      }, s = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), u = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), f = "rotate(".concat(i.rotate, " 0 0)"), h = {
        transform: "".concat(s, " ").concat(u, " ").concat(f)
      }, p = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, y = {
        outer: l,
        inner: h,
        path: p
      };
      return {
        tag: "g",
        attributes: j({}, y.outer),
        children: [{
          tag: "g",
          attributes: j({}, y.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: j(j({}, r.icon.attributes), y.path)
          }]
        }]
      };
    };
  }
}, Zo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function nd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function q0(e) {
  return e.tag === "g" ? e.children : [e];
}
var Z0 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-mask"), a = i ? yo(i.split(" ").map(function(o) {
          return o.trim();
        })) : Nu();
        return a.prefix || (a.prefix = Ht()), n.mask = a, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, i = n.attributes, a = n.main, o = n.mask, l = n.maskId, s = n.transform, u = a.width, f = a.icon, h = o.width, p = o.icon, y = qy({
        transform: s,
        containerWidth: h,
        iconWidth: u
      }), x = {
        tag: "rect",
        attributes: j(j({}, Zo), {}, {
          fill: "white"
        })
      }, b = f.children ? {
        children: f.children.map(nd)
      } : {}, d = {
        tag: "g",
        attributes: j({}, y.inner),
        children: [nd(j({
          tag: f.tag,
          attributes: j(j({}, f.attributes), y.path)
        }, b))]
      }, c = {
        tag: "g",
        attributes: j({}, y.outer),
        children: [d]
      }, m = "mask-".concat(l || hi()), w = "clip-".concat(l || hi()), v = {
        tag: "mask",
        attributes: j(j({}, Zo), {}, {
          id: m,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [x, c]
      }, k = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: q0(p)
        }, v]
      };
      return r.push(k, {
        tag: "rect",
        attributes: j({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(m, ")")
        }, Zo)
      }), {
        children: r,
        attributes: i
      };
    };
  }
}, J0 = {
  provides: function(t) {
    var n = !1;
    Bt.matchMedia && (n = Bt.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], i = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: j(j({}, i), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = j(j({}, a), {}, {
        attributeName: "opacity"
      }), l = {
        tag: "circle",
        attributes: j(j({}, i), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || l.children.push({
        tag: "animate",
        attributes: j(j({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: j(j({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(l), r.push({
        tag: "path",
        attributes: j(j({}, i), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: j(j({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: j(j({}, i), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: j(j({}, o), {}, {
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
}, e1 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-symbol"), a = i === null ? !1 : i === "" ? !0 : i;
        return n.symbol = a, n;
      }
    };
  }
}, t1 = [e0, z0, U0, B0, H0, X0, G0, K0, Z0, J0, e1];
m0(t1, {
  mixoutsTo: Ie
});
Ie.noAuto;
Ie.config;
Ie.library;
Ie.dom;
var is = Ie.parse;
Ie.findIconDefinition;
Ie.toHtml;
var n1 = Ie.icon;
Ie.layer;
Ie.text;
Ie.counter;
function rd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rd(Object(n), !0).forEach(function(r) {
      Mn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rd(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ga(e) {
  "@babel/helpers - typeof";
  return Ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ga(e);
}
function Mn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function r1(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function fv(e, t) {
  if (e == null) return {};
  var n = r1(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function as(e) {
  return i1(e) || a1(e) || o1(e) || l1();
}
function i1(e) {
  if (Array.isArray(e)) return os(e);
}
function a1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function o1(e, t) {
  if (e) {
    if (typeof e == "string") return os(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return os(e, t);
  }
}
function os(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function l1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s1(e) {
  var t, n = e.beat, r = e.fade, i = e.beatFade, a = e.bounce, o = e.shake, l = e.flash, s = e.spin, u = e.spinPulse, f = e.spinReverse, h = e.pulse, p = e.fixedWidth, y = e.inverse, x = e.border, b = e.listItem, d = e.flip, c = e.size, m = e.rotation, w = e.pull, v = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": i,
    "fa-bounce": a,
    "fa-shake": o,
    "fa-flash": l,
    "fa-spin": s,
    "fa-spin-reverse": f,
    "fa-spin-pulse": u,
    "fa-pulse": h,
    "fa-fw": p,
    "fa-inverse": y,
    "fa-border": x,
    "fa-li": b,
    "fa-flip": d === !0,
    "fa-flip-horizontal": d === "horizontal" || d === "both",
    "fa-flip-vertical": d === "vertical" || d === "both"
  }, Mn(t, "fa-".concat(c), typeof c < "u" && c !== null), Mn(t, "fa-rotate-".concat(m), typeof m < "u" && m !== null && m !== 0), Mn(t, "fa-pull-".concat(w), typeof w < "u" && w !== null), Mn(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(v).map(function(k) {
    return v[k] ? k : null;
  }).filter(function(k) {
    return k;
  });
}
function u1(e) {
  return e = e - 0, e === e;
}
function cv(e) {
  return u1(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var f1 = ["style"];
function c1(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function d1(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = cv(n.slice(0, r)), a = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[c1(i)] = a : t[i] = a, t;
  }, {});
}
function dv(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(s) {
    return dv(e, s);
  }), i = Object.keys(t.attributes || {}).reduce(function(s, u) {
    var f = t.attributes[u];
    switch (u) {
      case "class":
        s.attrs.className = f, delete t.attributes.class;
        break;
      case "style":
        s.attrs.style = d1(f);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? s.attrs[u.toLowerCase()] = f : s.attrs[cv(u)] = f;
    }
    return s;
  }, {
    attrs: {}
  }), a = n.style, o = a === void 0 ? {} : a, l = fv(n, f1);
  return i.attrs.style = Ct(Ct({}, i.attrs.style), o), e.apply(void 0, [t.tag, Ct(Ct({}, i.attrs), l)].concat(as(r)));
}
var pv = !1;
try {
  pv = !0;
} catch {
}
function p1() {
  if (!pv && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function id(e) {
  if (e && Ga(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (is.icon)
    return is.icon(e);
  if (e === null)
    return null;
  if (e && Ga(e) === "object" && e.prefix && e.iconName)
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
function Jo(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Mn({}, e, t) : {};
}
var m1 = ["forwardedRef"];
function Ri(e) {
  var t = e.forwardedRef, n = fv(e, m1), r = n.icon, i = n.mask, a = n.symbol, o = n.className, l = n.title, s = n.titleId, u = n.maskId, f = id(r), h = Jo("classes", [].concat(as(s1(n)), as(o.split(" ")))), p = Jo("transform", typeof n.transform == "string" ? is.transform(n.transform) : n.transform), y = Jo("mask", id(i)), x = n1(f, Ct(Ct(Ct(Ct({}, h), p), y), {}, {
    symbol: a,
    title: l,
    titleId: s,
    maskId: u
  }));
  if (!x)
    return p1("Could not find icon", f), null;
  var b = x.abstract, d = {
    ref: t
  };
  return Object.keys(n).forEach(function(c) {
    Ri.defaultProps.hasOwnProperty(c) || (d[c] = n[c]);
  }), v1(b[0], d);
}
Ri.displayName = "FontAwesomeIcon";
Ri.propTypes = {
  beat: g.bool,
  border: g.bool,
  beatFade: g.bool,
  bounce: g.bool,
  className: g.string,
  fade: g.bool,
  flash: g.bool,
  mask: g.oneOfType([g.object, g.array, g.string]),
  maskId: g.string,
  fixedWidth: g.bool,
  inverse: g.bool,
  flip: g.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: g.oneOfType([g.object, g.array, g.string]),
  listItem: g.bool,
  pull: g.oneOf(["right", "left"]),
  pulse: g.bool,
  rotation: g.oneOf([0, 90, 180, 270]),
  shake: g.bool,
  size: g.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: g.bool,
  spinPulse: g.bool,
  spinReverse: g.bool,
  symbol: g.oneOfType([g.bool, g.string]),
  title: g.string,
  titleId: g.string,
  transform: g.oneOfType([g.string, g.object]),
  swapOpacity: g.bool
};
Ri.defaultProps = {
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
var v1 = dv.bind(null, S.createElement);
function ad() {
  return _.useState(null);
}
const od = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function h1(e, t) {
  const n = od(e), r = od(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function g1(e, t) {
  return _.useMemo(() => h1(e, t), [e, t]);
}
var Pe = "top", We = "bottom", Ve = "right", Ce = "left", Ru = "auto", Ii = [Pe, We, Ve, Ce], tr = "start", gi = "end", y1 = "clippingParents", mv = "viewport", Pr = "popper", w1 = "reference", ld = /* @__PURE__ */ Ii.reduce(function(e, t) {
  return e.concat([t + "-" + tr, t + "-" + gi]);
}, []), Iu = /* @__PURE__ */ [].concat(Ii, [Ru]).reduce(function(e, t) {
  return e.concat([t, t + "-" + tr, t + "-" + gi]);
}, []), b1 = "beforeRead", E1 = "read", x1 = "afterRead", k1 = "beforeMain", S1 = "main", O1 = "afterMain", P1 = "beforeWrite", C1 = "write", A1 = "afterWrite", N1 = [b1, E1, x1, k1, S1, O1, P1, C1, A1];
function it(e) {
  return e.split("-")[0];
}
function je(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function hn(e) {
  var t = je(e).Element;
  return e instanceof t || e instanceof Element;
}
function at(e) {
  var t = je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Lu(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var un = Math.max, Ka = Math.min, nr = Math.round;
function ls() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function vv() {
  return !/^((?!chrome|android).)*safari/i.test(ls());
}
function rr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && at(e) && (i = e.offsetWidth > 0 && nr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && nr(r.height) / e.offsetHeight || 1);
  var o = hn(e) ? je(e) : window, l = o.visualViewport, s = !vv() && n, u = (r.left + (s && l ? l.offsetLeft : 0)) / i, f = (r.top + (s && l ? l.offsetTop : 0)) / a, h = r.width / i, p = r.height / a;
  return {
    width: h,
    height: p,
    top: f,
    right: u + h,
    bottom: f + p,
    left: u,
    x: u,
    y: f
  };
}
function Mu(e) {
  var t = rr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function hv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Lu(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Vt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ht(e) {
  return je(e).getComputedStyle(e);
}
function _1(e) {
  return ["table", "td", "th"].indexOf(Vt(e)) >= 0;
}
function Xt(e) {
  return ((hn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function bo(e) {
  return Vt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Lu(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Xt(e)
  );
}
function sd(e) {
  return !at(e) || // https://github.com/popperjs/popper-core/issues/837
  ht(e).position === "fixed" ? null : e.offsetParent;
}
function T1(e) {
  var t = /firefox/i.test(ls()), n = /Trident/i.test(ls());
  if (n && at(e)) {
    var r = ht(e);
    if (r.position === "fixed")
      return null;
  }
  var i = bo(e);
  for (Lu(i) && (i = i.host); at(i) && ["html", "body"].indexOf(Vt(i)) < 0; ) {
    var a = ht(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Li(e) {
  for (var t = je(e), n = sd(e); n && _1(n) && ht(n).position === "static"; )
    n = sd(n);
  return n && (Vt(n) === "html" || Vt(n) === "body" && ht(n).position === "static") ? t : n || T1(e) || t;
}
function Du(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Gr(e, t, n) {
  return un(e, Ka(t, n));
}
function j1(e, t, n) {
  var r = Gr(e, t, n);
  return r > n ? n : r;
}
function gv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function yv(e) {
  return Object.assign({}, gv(), e);
}
function wv(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var R1 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, yv(typeof t != "number" ? t : wv(t, Ii));
};
function I1(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, l = it(n.placement), s = Du(l), u = [Ce, Ve].indexOf(l) >= 0, f = u ? "height" : "width";
  if (!(!a || !o)) {
    var h = R1(i.padding, n), p = Mu(a), y = s === "y" ? Pe : Ce, x = s === "y" ? We : Ve, b = n.rects.reference[f] + n.rects.reference[s] - o[s] - n.rects.popper[f], d = o[s] - n.rects.reference[s], c = Li(a), m = c ? s === "y" ? c.clientHeight || 0 : c.clientWidth || 0 : 0, w = b / 2 - d / 2, v = h[y], k = m - p[f] - h[x], E = m / 2 - p[f] / 2 + w, O = Gr(v, E, k), N = s;
    n.modifiersData[r] = (t = {}, t[N] = O, t.centerOffset = O - E, t);
  }
}
function L1(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || hv(t.elements.popper, i) && (t.elements.arrow = i));
}
const M1 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: I1,
  effect: L1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ir(e) {
  return e.split("-")[1];
}
var D1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function $1(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: nr(n * i) / i || 0,
    y: nr(r * i) / i || 0
  };
}
function ud(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, h = e.isFixed, p = o.x, y = p === void 0 ? 0 : p, x = o.y, b = x === void 0 ? 0 : x, d = typeof f == "function" ? f({
    x: y,
    y: b
  }) : {
    x: y,
    y: b
  };
  y = d.x, b = d.y;
  var c = o.hasOwnProperty("x"), m = o.hasOwnProperty("y"), w = Ce, v = Pe, k = window;
  if (u) {
    var E = Li(n), O = "clientHeight", N = "clientWidth";
    if (E === je(n) && (E = Xt(n), ht(E).position !== "static" && l === "absolute" && (O = "scrollHeight", N = "scrollWidth")), E = E, i === Pe || (i === Ce || i === Ve) && a === gi) {
      v = We;
      var P = h && E === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[O]
      );
      b -= P - r.height, b *= s ? 1 : -1;
    }
    if (i === Ce || (i === Pe || i === We) && a === gi) {
      w = Ve;
      var L = h && E === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[N]
      );
      y -= L - r.width, y *= s ? 1 : -1;
    }
  }
  var H = Object.assign({
    position: l
  }, u && D1), F = f === !0 ? $1({
    x: y,
    y: b
  }, je(n)) : {
    x: y,
    y: b
  };
  if (y = F.x, b = F.y, s) {
    var D;
    return Object.assign({}, H, (D = {}, D[v] = m ? "0" : "", D[w] = c ? "0" : "", D.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + b + "px)" : "translate3d(" + y + "px, " + b + "px, 0)", D));
  }
  return Object.assign({}, H, (t = {}, t[v] = m ? b + "px" : "", t[w] = c ? y + "px" : "", t.transform = "", t));
}
function F1(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, l = n.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: it(t.placement),
    variation: ir(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ud(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ud(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const z1 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: F1,
  data: {}
};
var ia = {
  passive: !0
};
function U1(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, l = o === void 0 ? !0 : o, s = je(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, ia);
  }), l && s.addEventListener("resize", n.update, ia), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, ia);
    }), l && s.removeEventListener("resize", n.update, ia);
  };
}
const B1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: U1,
  data: {}
};
var H1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ba(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return H1[t];
  });
}
var W1 = {
  start: "end",
  end: "start"
};
function fd(e) {
  return e.replace(/start|end/g, function(t) {
    return W1[t];
  });
}
function $u(e) {
  var t = je(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Fu(e) {
  return rr(Xt(e)).left + $u(e).scrollLeft;
}
function V1(e, t) {
  var n = je(e), r = Xt(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, l = 0, s = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = vv();
    (u || !u && t === "fixed") && (l = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: l + Fu(e),
    y: s
  };
}
function Y1(e) {
  var t, n = Xt(e), r = $u(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = un(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = un(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + Fu(e), s = -r.scrollTop;
  return ht(i || n).direction === "rtl" && (l += un(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: l,
    y: s
  };
}
function zu(e) {
  var t = ht(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function bv(e) {
  return ["html", "body", "#document"].indexOf(Vt(e)) >= 0 ? e.ownerDocument.body : at(e) && zu(e) ? e : bv(bo(e));
}
function Kr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = bv(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = je(r), o = i ? [a].concat(a.visualViewport || [], zu(r) ? r : []) : r, l = t.concat(o);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Kr(bo(o)))
  );
}
function ss(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Q1(e, t) {
  var n = rr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function cd(e, t, n) {
  return t === mv ? ss(V1(e, n)) : hn(t) ? Q1(t, n) : ss(Y1(Xt(e)));
}
function X1(e) {
  var t = Kr(bo(e)), n = ["absolute", "fixed"].indexOf(ht(e).position) >= 0, r = n && at(e) ? Li(e) : e;
  return hn(r) ? t.filter(function(i) {
    return hn(i) && hv(i, r) && Vt(i) !== "body";
  }) : [];
}
function G1(e, t, n, r) {
  var i = t === "clippingParents" ? X1(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], l = a.reduce(function(s, u) {
    var f = cd(e, u, r);
    return s.top = un(f.top, s.top), s.right = Ka(f.right, s.right), s.bottom = Ka(f.bottom, s.bottom), s.left = un(f.left, s.left), s;
  }, cd(e, o, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ev(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? it(r) : null, a = r ? ir(r) : null, o = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, s;
  switch (i) {
    case Pe:
      s = {
        x: o,
        y: t.y - n.height
      };
      break;
    case We:
      s = {
        x: o,
        y: t.y + t.height
      };
      break;
    case Ve:
      s = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Ce:
      s = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? Du(i) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case tr:
        s[u] = s[u] - (t[f] / 2 - n[f] / 2);
        break;
      case gi:
        s[u] = s[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return s;
}
function yi(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, l = n.boundary, s = l === void 0 ? y1 : l, u = n.rootBoundary, f = u === void 0 ? mv : u, h = n.elementContext, p = h === void 0 ? Pr : h, y = n.altBoundary, x = y === void 0 ? !1 : y, b = n.padding, d = b === void 0 ? 0 : b, c = yv(typeof d != "number" ? d : wv(d, Ii)), m = p === Pr ? w1 : Pr, w = e.rects.popper, v = e.elements[x ? m : p], k = G1(hn(v) ? v : v.contextElement || Xt(e.elements.popper), s, f, o), E = rr(e.elements.reference), O = Ev({
    reference: E,
    element: w,
    strategy: "absolute",
    placement: i
  }), N = ss(Object.assign({}, w, O)), P = p === Pr ? N : E, L = {
    top: k.top - P.top + c.top,
    bottom: P.bottom - k.bottom + c.bottom,
    left: k.left - P.left + c.left,
    right: P.right - k.right + c.right
  }, H = e.modifiersData.offset;
  if (p === Pr && H) {
    var F = H[i];
    Object.keys(L).forEach(function(D) {
      var ae = [Ve, We].indexOf(D) >= 0 ? 1 : -1, re = [Pe, We].indexOf(D) >= 0 ? "y" : "x";
      L[D] += F[re] * ae;
    });
  }
  return L;
}
function K1(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, l = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? Iu : s, f = ir(r), h = f ? l ? ld : ld.filter(function(x) {
    return ir(x) === f;
  }) : Ii, p = h.filter(function(x) {
    return u.indexOf(x) >= 0;
  });
  p.length === 0 && (p = h);
  var y = p.reduce(function(x, b) {
    return x[b] = yi(e, {
      placement: b,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[it(b)], x;
  }, {});
  return Object.keys(y).sort(function(x, b) {
    return y[x] - y[b];
  });
}
function q1(e) {
  if (it(e) === Ru)
    return [];
  var t = ba(e);
  return [fd(e), t, fd(t)];
}
function Z1(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, l = o === void 0 ? !0 : o, s = n.fallbackPlacements, u = n.padding, f = n.boundary, h = n.rootBoundary, p = n.altBoundary, y = n.flipVariations, x = y === void 0 ? !0 : y, b = n.allowedAutoPlacements, d = t.options.placement, c = it(d), m = c === d, w = s || (m || !x ? [ba(d)] : q1(d)), v = [d].concat(w).reduce(function(W, Q) {
      return W.concat(it(Q) === Ru ? K1(t, {
        placement: Q,
        boundary: f,
        rootBoundary: h,
        padding: u,
        flipVariations: x,
        allowedAutoPlacements: b
      }) : Q);
    }, []), k = t.rects.reference, E = t.rects.popper, O = /* @__PURE__ */ new Map(), N = !0, P = v[0], L = 0; L < v.length; L++) {
      var H = v[L], F = it(H), D = ir(H) === tr, ae = [Pe, We].indexOf(F) >= 0, re = ae ? "width" : "height", V = yi(t, {
        placement: H,
        boundary: f,
        rootBoundary: h,
        altBoundary: p,
        padding: u
      }), oe = ae ? D ? Ve : Ce : D ? We : Pe;
      k[re] > E[re] && (oe = ba(oe));
      var Ae = ba(oe), le = [];
      if (a && le.push(V[F] <= 0), l && le.push(V[oe] <= 0, V[Ae] <= 0), le.every(function(W) {
        return W;
      })) {
        P = H, N = !1;
        break;
      }
      O.set(H, le);
    }
    if (N)
      for (var fe = x ? 3 : 1, C = function(Q) {
        var Ne = v.find(function(Me) {
          var _e = O.get(Me);
          if (_e)
            return _e.slice(0, Q).every(function(qe) {
              return qe;
            });
        });
        if (Ne)
          return P = Ne, "break";
      }, T = fe; T > 0; T--) {
        var $ = C(T);
        if ($ === "break") break;
      }
    t.placement !== P && (t.modifiersData[r]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const J1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Z1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function dd(e, t, n) {
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
function pd(e) {
  return [Pe, Ve, We, Ce].some(function(t) {
    return e[t] >= 0;
  });
}
function ew(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = yi(t, {
    elementContext: "reference"
  }), l = yi(t, {
    altBoundary: !0
  }), s = dd(o, r), u = dd(l, i, a), f = pd(s), h = pd(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: u,
    isReferenceHidden: f,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": h
  });
}
const tw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ew
};
function nw(e, t, n) {
  var r = it(e), i = [Ce, Pe].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = a[0], l = a[1];
  return o = o || 0, l = (l || 0) * i, [Ce, Ve].indexOf(r) >= 0 ? {
    x: l,
    y: o
  } : {
    x: o,
    y: l
  };
}
function rw(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = Iu.reduce(function(f, h) {
    return f[h] = nw(h, t.rects, a), f;
  }, {}), l = o[t.placement], s = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o;
}
const iw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: rw
};
function aw(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ev({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ow = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: aw,
  data: {}
};
function lw(e) {
  return e === "x" ? "y" : "x";
}
function sw(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, l = o === void 0 ? !1 : o, s = n.boundary, u = n.rootBoundary, f = n.altBoundary, h = n.padding, p = n.tether, y = p === void 0 ? !0 : p, x = n.tetherOffset, b = x === void 0 ? 0 : x, d = yi(t, {
    boundary: s,
    rootBoundary: u,
    padding: h,
    altBoundary: f
  }), c = it(t.placement), m = ir(t.placement), w = !m, v = Du(c), k = lw(v), E = t.modifiersData.popperOffsets, O = t.rects.reference, N = t.rects.popper, P = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, L = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (E) {
    if (a) {
      var D, ae = v === "y" ? Pe : Ce, re = v === "y" ? We : Ve, V = v === "y" ? "height" : "width", oe = E[v], Ae = oe + d[ae], le = oe - d[re], fe = y ? -N[V] / 2 : 0, C = m === tr ? O[V] : N[V], T = m === tr ? -N[V] : -O[V], $ = t.elements.arrow, W = y && $ ? Mu($) : {
        width: 0,
        height: 0
      }, Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : gv(), Ne = Q[ae], Me = Q[re], _e = Gr(0, O[V], W[V]), qe = w ? O[V] / 2 - fe - _e - Ne - L.mainAxis : C - _e - Ne - L.mainAxis, Fv = w ? -O[V] / 2 + fe + _e + Me + L.mainAxis : T + _e + Me + L.mainAxis, ko = t.elements.arrow && Li(t.elements.arrow), zv = ko ? v === "y" ? ko.clientTop || 0 : ko.clientLeft || 0 : 0, rf = (D = H == null ? void 0 : H[v]) != null ? D : 0, Uv = oe + qe - rf - zv, Bv = oe + Fv - rf, af = Gr(y ? Ka(Ae, Uv) : Ae, oe, y ? un(le, Bv) : le);
      E[v] = af, F[v] = af - oe;
    }
    if (l) {
      var of, Hv = v === "x" ? Pe : Ce, Wv = v === "x" ? We : Ve, Kt = E[k], Mi = k === "y" ? "height" : "width", lf = Kt + d[Hv], sf = Kt - d[Wv], So = [Pe, Ce].indexOf(c) !== -1, uf = (of = H == null ? void 0 : H[k]) != null ? of : 0, ff = So ? lf : Kt - O[Mi] - N[Mi] - uf + L.altAxis, cf = So ? Kt + O[Mi] + N[Mi] - uf - L.altAxis : sf, df = y && So ? j1(ff, Kt, cf) : Gr(y ? ff : lf, Kt, y ? cf : sf);
      E[k] = df, F[k] = df - Kt;
    }
    t.modifiersData[r] = F;
  }
}
const uw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: sw,
  requiresIfExists: ["offset"]
};
function fw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function cw(e) {
  return e === je(e) || !at(e) ? $u(e) : fw(e);
}
function dw(e) {
  var t = e.getBoundingClientRect(), n = nr(t.width) / e.offsetWidth || 1, r = nr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function pw(e, t, n) {
  n === void 0 && (n = !1);
  var r = at(t), i = at(t) && dw(t), a = Xt(t), o = rr(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Vt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  zu(a)) && (l = cw(t)), at(t) ? (s = rr(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : a && (s.x = Fu(a))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function mw(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    n.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    o.forEach(function(l) {
      if (!n.has(l)) {
        var s = t.get(l);
        s && i(s);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || i(a);
  }), r;
}
function vw(e) {
  var t = mw(e);
  return N1.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function hw(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function gw(e) {
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
var md = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function vd() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function yw(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? md : i;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, md, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, h = [], p = !1, y = {
      state: f,
      setOptions: function(c) {
        var m = typeof c == "function" ? c(f.options) : c;
        b(), f.options = Object.assign({}, a, f.options, m), f.scrollParents = {
          reference: hn(l) ? Kr(l) : l.contextElement ? Kr(l.contextElement) : [],
          popper: Kr(s)
        };
        var w = vw(gw([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = w.filter(function(v) {
          return v.enabled;
        }), x(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var c = f.elements, m = c.reference, w = c.popper;
          if (vd(m, w)) {
            f.rects = {
              reference: pw(m, Li(w), f.options.strategy === "fixed"),
              popper: Mu(w)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(L) {
              return f.modifiersData[L.name] = Object.assign({}, L.data);
            });
            for (var v = 0; v < f.orderedModifiers.length; v++) {
              if (f.reset === !0) {
                f.reset = !1, v = -1;
                continue;
              }
              var k = f.orderedModifiers[v], E = k.fn, O = k.options, N = O === void 0 ? {} : O, P = k.name;
              typeof E == "function" && (f = E({
                state: f,
                options: N,
                name: P,
                instance: y
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: hw(function() {
        return new Promise(function(d) {
          y.forceUpdate(), d(f);
        });
      }),
      destroy: function() {
        b(), p = !0;
      }
    };
    if (!vd(l, s))
      return y;
    y.setOptions(u).then(function(d) {
      !p && u.onFirstUpdate && u.onFirstUpdate(d);
    });
    function x() {
      f.orderedModifiers.forEach(function(d) {
        var c = d.name, m = d.options, w = m === void 0 ? {} : m, v = d.effect;
        if (typeof v == "function") {
          var k = v({
            state: f,
            name: c,
            instance: y,
            options: w
          }), E = function() {
          };
          h.push(k || E);
        }
      });
    }
    function b() {
      h.forEach(function(d) {
        return d();
      }), h = [];
    }
    return y;
  };
}
var ww = yw({
  defaultModifiers: [tw, ow, z1, B1, iw, J1, uw, M1]
});
function xv() {
  const e = _.useRef(!0), t = _.useRef(() => e.current);
  return _.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function bw(e) {
  const t = xv();
  return [e[0], _.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var hd = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, Ew = {
  name: "applyStyles",
  enabled: !1
}, xw = {
  name: "ariaDescribedBy",
  enabled: !0,
  phase: "afterWrite",
  effect: function(t) {
    var n = t.state;
    return function() {
      var r = n.elements, i = r.reference, a = r.popper;
      if ("removeAttribute" in i) {
        var o = (i.getAttribute("aria-describedby") || "").split(",").filter(function(l) {
          return l.trim() !== a.id;
        });
        o.length ? i.setAttribute("aria-describedby", o.join(",")) : i.removeAttribute("aria-describedby");
      }
    };
  },
  fn: function(t) {
    var n, r = t.state, i = r.elements, a = i.popper, o = i.reference, l = (n = a.getAttribute("role")) == null ? void 0 : n.toLowerCase();
    if (a.id && l === "tooltip" && "setAttribute" in o) {
      var s = o.getAttribute("aria-describedby");
      if (s && s.split(",").indexOf(a.id) !== -1)
        return;
      o.setAttribute("aria-describedby", s ? s + "," + a.id : a.id);
    }
  }
}, kw = [];
function Sw(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, l = o === void 0 ? "bottom" : o, s = r.strategy, u = s === void 0 ? "absolute" : s, f = r.modifiers, h = f === void 0 ? kw : f, p = He(r, ["enabled", "placement", "strategy", "modifiers"]), y = _.useRef(), x = _.useCallback(function() {
    var v;
    (v = y.current) == null || v.update();
  }, []), b = _.useCallback(function() {
    var v;
    (v = y.current) == null || v.forceUpdate();
  }, []), d = bw(_.useState({
    placement: l,
    update: x,
    forceUpdate: b,
    attributes: {},
    styles: {
      popper: hd(u),
      arrow: {}
    }
  })), c = d[0], m = d[1], w = _.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(k) {
        var E = k.state, O = {}, N = {};
        Object.keys(E.elements).forEach(function(P) {
          O[P] = E.styles[P], N[P] = E.attributes[P];
        }), m({
          state: E,
          styles: O,
          attributes: N,
          update: x,
          forceUpdate: b,
          placement: E.placement
        });
      }
    };
  }, [x, b, m]);
  return _.useEffect(function() {
    !y.current || !a || y.current.setOptions({
      placement: l,
      strategy: u,
      modifiers: [].concat(h, [w, Ew])
    });
  }, [u, l, w, a]), _.useEffect(function() {
    if (!(!a || e == null || t == null))
      return y.current = ww(e, t, B({}, p, {
        placement: l,
        strategy: u,
        modifiers: [].concat(h, [xw, w])
      })), function() {
        y.current != null && (y.current.destroy(), y.current = void 0, m(function(v) {
          return B({}, v, {
            attributes: {},
            styles: {
              popper: hd(u)
            }
          });
        }));
      };
  }, [a, e, t]), c;
}
function kv(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const Ow = !!(typeof window < "u" && window.document && window.document.createElement);
var us = !1, fs = !1;
try {
  var el = {
    get passive() {
      return us = !0;
    },
    get once() {
      return fs = us = !0;
    }
  };
  Ow && (window.addEventListener("test", el, el), window.removeEventListener("test", el, !0));
} catch {
}
function Pw(e, t, n, r) {
  if (r && typeof r != "boolean" && !fs) {
    var i = r.once, a = r.capture, o = n;
    !fs && i && (o = n.__once || function l(s) {
      this.removeEventListener(t, l, a), n.call(this, s);
    }, n.__once = o), e.addEventListener(t, o, us ? r : a);
  }
  e.addEventListener(t, n, r);
}
function Cw(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function Dn(e, t, n, r) {
  return Pw(e, t, n, r), function() {
    Cw(e, t, n, r);
  };
}
function Aw(e) {
  const t = _.useRef(e);
  return _.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function gd(e) {
  const t = Aw(e);
  return _.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
var Nw = function() {
}, _w = Nw;
const Tw = /* @__PURE__ */ xi(_w);
function Uu(e) {
  return e && e.ownerDocument || document;
}
function qa(e) {
  return e && "setState" in e ? jn.findDOMNode(e) : e ?? null;
}
const jw = function(e) {
  return Uu(qa(e));
};
var Rw = 27, yd = function() {
};
function Iw(e) {
  return e.button === 0;
}
function Lw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var wd = function(t) {
  return t && ("current" in t ? t.current : t);
};
function Mw(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, l = _.useRef(!1), s = t || yd, u = _.useCallback(function(p) {
    var y, x = wd(e);
    Tw(!!x, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), l.current = !x || Lw(p) || !Iw(p) || !!kv(x, (y = p.composedPath == null ? void 0 : p.composedPath()[0]) != null ? y : p.target);
  }, [e]), f = gd(function(p) {
    l.current || s(p);
  }), h = gd(function(p) {
    p.keyCode === Rw && s(p);
  });
  _.useEffect(function() {
    if (!(i || e == null)) {
      var p = window.event, y = jw(wd(e)), x = Dn(y, o, u, !0), b = Dn(y, o, function(m) {
        if (m === p) {
          p = void 0;
          return;
        }
        f(m);
      }), d = Dn(y, "keyup", function(m) {
        if (m === p) {
          p = void 0;
          return;
        }
        h(m);
      }), c = [];
      return "ontouchstart" in y.documentElement && (c = [].slice.call(y.body.children).map(function(m) {
        return Dn(m, "mousemove", yd);
      })), function() {
        x(), b(), d(), c.forEach(function(m) {
          return m();
        });
      };
    }
  }, [e, i, o, u, f, h]);
}
var tl = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? Uu().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function bd(e, t) {
  var n = _.useState(function() {
    return tl(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var a = tl(e);
    a && i(a);
  }
  return _.useEffect(function() {
  }, [t, r]), _.useEffect(function() {
    var o = tl(e);
    o !== r && i(o);
  }, [e, r]), r;
}
function Dw(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function $w(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function Fw(e) {
  var t, n, r, i, a = e.enabled, o = e.enableEvents, l = e.placement, s = e.flip, u = e.offset, f = e.fixed, h = e.containerPadding, p = e.arrowElement, y = e.popperConfig, x = y === void 0 ? {} : y, b = Dw(x.modifiers);
  return B({}, x, {
    placement: l,
    enabled: a,
    strategy: f ? "fixed" : x.strategy,
    modifiers: $w(B({}, b, {
      eventListeners: {
        enabled: o
      },
      preventOverflow: B({}, b.preventOverflow, {
        options: h ? B({
          padding: h
        }, (t = b.preventOverflow) == null ? void 0 : t.options) : (n = b.preventOverflow) == null ? void 0 : n.options
      }),
      offset: {
        options: B({
          offset: u
        }, (r = b.offset) == null ? void 0 : r.options)
      },
      arrow: B({}, b.arrow, {
        enabled: !!p,
        options: B({}, (i = b.arrow) == null ? void 0 : i.options, {
          element: p
        })
      }),
      flip: B({
        enabled: !!s
      }, b.flip)
    }))
  });
}
var Bu = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, l = e.popperConfig, s = l === void 0 ? {} : l, u = e.transition, f = ad(), h = f[0], p = f[1], y = ad(), x = y[0], b = y[1], d = g1(p, t), c = bd(e.container), m = bd(e.target), w = _.useState(!e.show), v = w[0], k = w[1], E = Sw(m, h, Fw({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: o || 5,
    flip: n,
    offset: r,
    arrowElement: x,
    popperConfig: s
  })), O = E.styles, N = E.attributes, P = He(E, ["styles", "attributes"]);
  e.show ? v && k(!1) : !e.transition && !v && k(!0);
  var L = function() {
    k(!0), e.onExited && e.onExited.apply(e, arguments);
  }, H = e.show || u && !v;
  if (Mw(h, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !H)
    return null;
  var F = e.children(B({}, P, {
    show: !!e.show,
    props: B({}, N.popper, {
      style: O.popper,
      ref: d
    }),
    arrowProps: B({}, N.arrow, {
      style: O.arrow,
      ref: b
    })
  }));
  if (u) {
    var D = e.onExit, ae = e.onExiting, re = e.onEnter, V = e.onEntering, oe = e.onEntered;
    F = /* @__PURE__ */ S.createElement(u, {
      in: e.show,
      appear: !0,
      onExit: D,
      onExiting: ae,
      onExited: L,
      onEnter: re,
      onEntering: V,
      onEntered: oe
    }, F);
  }
  return c ? /* @__PURE__ */ jn.createPortal(F, c) : null;
});
Bu.displayName = "Overlay";
Bu.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: g.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: g.oneOf(Iu),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: g.any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: g.any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: g.bool,
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
  children: g.func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: g.number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: g.object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: g.bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: g.oneOf(["click", "mousedown"]),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: g.bool,
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
      return (a = g.func).isRequired.apply(a, [t].concat(r));
    }
    return g.func.apply(g, [t].concat(r));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: g.elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: g.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: g.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: g.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: g.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: g.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: g.func
};
function nl(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function rl(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, a = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: a
  };
}
function zw() {
  var e = _.useRef(null), t = _.useRef(null), n = _.useRef(null), r = pn(void 0, "popover"), i = pn(void 0, "dropdown-menu"), a = _.useCallback(function(u) {
    !u || !(nl(u, r) || nl(u, i)) || (t.current = rl(u), u.style.margin = "0", e.current = u);
  }, [r, i]), o = _.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(f) {
          var h = f.placement;
          if (!t.current) return [0, 0];
          var p = t.current, y = p.top, x = p.left, b = p.bottom, d = p.right;
          switch (h.split("-")[0]) {
            case "top":
              return [0, b];
            case "left":
              return [0, d];
            case "bottom":
              return [0, y];
            case "right":
              return [0, x];
            default:
              return [0, 0];
          }
        }
      }
    };
  }, [t]), l = _.useMemo(function() {
    return {
      name: "arrow",
      options: {
        padding: function() {
          if (!n.current)
            return 0;
          var f = n.current, h = f.top, p = f.right, y = h || p;
          return {
            top: y,
            left: y,
            right: y,
            bottom: y
          };
        }
      }
    };
  }, [n]), s = _.useMemo(function() {
    return {
      name: "popoverArrowMargins",
      enabled: !0,
      phase: "main",
      fn: function() {
      },
      requiresIfExists: ["arrow"],
      effect: function(f) {
        var h = f.state;
        if (!(!e.current || !h.elements.arrow || !nl(e.current, r))) {
          if (h.modifiersData["arrow#persistent"]) {
            var p = rl(h.elements.arrow), y = p.top, x = p.right, b = y || x;
            h.modifiersData["arrow#persistent"].padding = {
              top: b,
              left: b,
              right: b,
              bottom: b
            };
          } else
            n.current = rl(h.elements.arrow);
          return h.elements.arrow.style.margin = "0", function() {
            h.elements.arrow && (h.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [a, [o, l, s]];
}
function cs(e, t) {
  return cs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, cs(e, t);
}
function Sv(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, cs(e, t);
}
const Ed = {
  disabled: !1
}, Ov = S.createContext(null);
var Uw = function(t) {
  return t.scrollTop;
}, Ir = "unmounted", Zt = "exited", xt = "entering", Jt = "entered", ds = "exiting", wt = /* @__PURE__ */ function(e) {
  Sv(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, l = o && !o.isMounting ? r.enter : r.appear, s;
    return a.appearStatus = null, r.in ? l ? (s = Zt, a.appearStatus = xt) : s = Jt : r.unmountOnExit || r.mountOnEnter ? s = Ir : s = Zt, a.state = {
      status: s
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === Ir ? {
      status: Zt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== xt && o !== Jt && (a = xt) : (o === xt || o === Jt) && (a = ds);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, o, l;
    return a = o = l = i, i != null && typeof i != "number" && (a = i.exit, o = i.enter, l = i.appear !== void 0 ? i.appear : o), {
      exit: a,
      enter: o,
      appear: l
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === xt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : jn.findDOMNode(this);
          o && Uw(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Zt && this.setState({
      status: Ir
    });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, l = this.context ? this.context.isMounting : i, s = this.props.nodeRef ? [l] : [jn.findDOMNode(this), l], u = s[0], f = s[1], h = this.getTimeouts(), p = l ? h.appear : h.enter;
    if (!i && !o || Ed.disabled) {
      this.safeSetState({
        status: Jt
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: xt
    }, function() {
      a.props.onEntering(u, f), a.onTransitionEnd(p, function() {
        a.safeSetState({
          status: Jt
        }, function() {
          a.props.onEntered(u, f);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), l = this.props.nodeRef ? void 0 : jn.findDOMNode(this);
    if (!a || Ed.disabled) {
      this.safeSetState({
        status: Zt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: ds
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: Zt
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, o = !0;
    return this.nextCallback = function(l) {
      o && (o = !1, a.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      o = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var o = this.props.nodeRef ? this.props.nodeRef.current : jn.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!o || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var s = this.props.nodeRef ? [this.nextCallback] : [o, this.nextCallback], u = s[0], f = s[1];
      this.props.addEndListener(u, f);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Ir)
      return null;
    var a = this.props, o = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = He(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ S.createElement(Ov.Provider, {
        value: null
      }, typeof o == "function" ? o(i, l) : S.cloneElement(S.Children.only(o), l))
    );
  }, t;
}(S.Component);
wt.contextType = Ov;
wt.propTypes = {};
function kn() {
}
wt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: kn,
  onEntering: kn,
  onEntered: kn,
  onExit: kn,
  onExiting: kn,
  onExited: kn
};
wt.UNMOUNTED = Ir;
wt.EXITED = Zt;
wt.ENTERING = xt;
wt.ENTERED = Jt;
wt.EXITING = ds;
const Bw = wt;
function Hw(e) {
  var t = Uu(e);
  return t && t.defaultView || window;
}
function Ww(e, t) {
  return Hw(e).getComputedStyle(e, t);
}
var Vw = /([A-Z])/g;
function Yw(e) {
  return e.replace(Vw, "-$1").toLowerCase();
}
var Qw = /^ms-/;
function aa(e) {
  return Yw(e).replace(Qw, "-ms-");
}
var Xw = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Gw(e) {
  return !!(e && Xw.test(e));
}
function Pv(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(aa(t)) || Ww(e).getPropertyValue(aa(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(aa(i)) : Gw(i) ? r += i + "(" + a + ") " : n += aa(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
function Kw(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function qw(e) {
  var t = Pv(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function Zw(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || Kw(e, "transitionend", !0);
  }, t + n), a = Dn(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function Jw(e, t, n, r) {
  n == null && (n = qw(e) || 0);
  var i = Zw(e, n, r), a = Dn(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function xd(e, t) {
  var n = Pv(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function eb(e, t) {
  var n = xd(e, "transitionDuration"), r = xd(e, "transitionDelay"), i = Jw(e, function(a) {
    a.target === e && (i(), t(a));
  }, n + r);
}
function tb(e) {
  e.offsetHeight;
}
var nb = ["className", "children"], oa, rb = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, ib = (oa = {}, oa[xt] = "show", oa[Jt] = "show", oa), Eo = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = He(e, nb), a = _.useCallback(function(o) {
    tb(o), i.onEnter && i.onEnter(o);
  }, [i]);
  return /* @__PURE__ */ S.createElement(Bw, B({
    ref: t,
    addEndListener: eb
  }, i, {
    onEnter: a
  }), function(o, l) {
    return /* @__PURE__ */ S.cloneElement(r, B({}, l, {
      className: Y("fade", n, r.props.className, ib[o])
    }));
  });
});
Eo.defaultProps = rb;
Eo.displayName = "Fade";
var ab = ["children", "transition", "popperConfig"], ob = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], lb = {
  transition: Eo,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function sb(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(qa(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(qa(i));
  });
}
function Cv(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = He(e, ab), o = _.useRef({}), l = zw(), s = l[0], u = l[1], f = n === !0 ? Eo : n || null;
  return /* @__PURE__ */ S.createElement(Bu, B({}, a, {
    ref: s,
    popperConfig: B({}, i, {
      modifiers: u.concat(i.modifiers || [])
    }),
    transition: f
  }), function(h) {
    var p, y = h.props, x = h.arrowProps, b = h.show, d = h.update;
    h.forceUpdate;
    var c = h.placement, m = h.state, w = He(h, ob);
    sb(y, x);
    var v = Object.assign(o.current, {
      state: m,
      scheduleUpdate: d,
      placement: c,
      outOfBoundaries: (m == null || (p = m.modifiersData.hide) == null ? void 0 : p.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t(B({}, w, y, {
      placement: c,
      show: b
    }, !n && b && {
      className: "show"
    }, {
      popper: v,
      arrowProps: x
    })) : /* @__PURE__ */ S.cloneElement(t, B({}, w, y, {
      placement: c,
      arrowProps: x,
      popper: v,
      className: Y(t.props.className, !n && b && "show"),
      style: B({}, t.props.style, y.style)
    }));
  });
}
Cv.defaultProps = lb;
function ub(e) {
  const t = _.useRef(e);
  return t.current = e, t;
}
function fb(e) {
  const t = ub(e);
  _.useEffect(() => () => t.current(), []);
}
const ps = 2 ** 31 - 1;
function Av(e, t, n) {
  const r = n - Date.now();
  e.current = r <= ps ? setTimeout(t, r) : setTimeout(() => Av(e, t, n), ps);
}
function cb() {
  const e = xv(), t = _.useRef();
  return fb(() => clearTimeout(t.current)), _.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, a = 0) {
      e() && (n(), a <= ps ? t.current = setTimeout(i, a) : Av(t, i, Date.now() + a));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
function db(e, t, n) {
  var r = _.useRef(e !== void 0), i = _.useState(t), a = i[0], o = i[1], l = e !== void 0, s = r.current;
  return r.current = l, !l && s && a !== t && o(t), [l ? e : a, _.useCallback(function(u) {
    for (var f = arguments.length, h = new Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++)
      h[p - 1] = arguments[p];
    n && n.apply(void 0, [u].concat(h)), o(u);
  }, [n])];
}
var pb = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], mb = /* @__PURE__ */ function(e) {
  Sv(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(S.Component);
function vb(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function kd(e, t, n) {
  var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
  (!a || a !== i) && !kv(i, a) && e.apply(void 0, t);
}
var hb = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function Nv(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, l = e.defaultShow, s = l === void 0 ? !1 : l, u = e.onToggle, f = e.delay, h = e.placement, p = e.flip, y = p === void 0 ? h && h.indexOf("auto") !== -1 : p, x = He(e, pb), b = _.useRef(null), d = cb(), c = _.useRef(""), m = db(o, s, u), w = m[0], v = m[1], k = vb(f), E = typeof r != "function" ? S.Children.only(r).props : {}, O = E.onFocus, N = E.onBlur, P = E.onClick, L = _.useCallback(function() {
    return qa(b.current);
  }, []), H = _.useCallback(function() {
    if (d.clear(), c.current = "show", !k.show) {
      v(!0);
      return;
    }
    d.set(function() {
      c.current === "show" && v(!0);
    }, k.show);
  }, [k.show, v, d]), F = _.useCallback(function() {
    if (d.clear(), c.current = "hide", !k.hide) {
      v(!1);
      return;
    }
    d.set(function() {
      c.current === "hide" && v(!1);
    }, k.hide);
  }, [k.hide, v, d]), D = _.useCallback(function() {
    H();
    for (var fe = arguments.length, C = new Array(fe), T = 0; T < fe; T++)
      C[T] = arguments[T];
    O == null || O.apply(void 0, C);
  }, [H, O]), ae = _.useCallback(function() {
    F();
    for (var fe = arguments.length, C = new Array(fe), T = 0; T < fe; T++)
      C[T] = arguments[T];
    N == null || N.apply(void 0, C);
  }, [F, N]), re = _.useCallback(function() {
    v(!w), P && P.apply(void 0, arguments);
  }, [P, v, w]), V = _.useCallback(function() {
    for (var fe = arguments.length, C = new Array(fe), T = 0; T < fe; T++)
      C[T] = arguments[T];
    kd(H, C, "fromElement");
  }, [H]), oe = _.useCallback(function() {
    for (var fe = arguments.length, C = new Array(fe), T = 0; T < fe; T++)
      C[T] = arguments[T];
    kd(F, C, "toElement");
  }, [F]), Ae = t == null ? [] : [].concat(t), le = {};
  return Ae.indexOf("click") !== -1 && (le.onClick = re), Ae.indexOf("focus") !== -1 && (le.onFocus = D, le.onBlur = ae), Ae.indexOf("hover") !== -1 && (le.onMouseOver = V, le.onMouseOut = oe), /* @__PURE__ */ S.createElement(S.Fragment, null, typeof r == "function" ? r(B({}, le, {
    ref: b
  })) : /* @__PURE__ */ S.createElement(mb, {
    ref: b
  }, /* @__PURE__ */ _.cloneElement(r, le)), /* @__PURE__ */ S.createElement(Cv, B({}, x, {
    show: w,
    onHide: F,
    flip: y,
    placement: h,
    popperConfig: a,
    target: L
  }), n));
}
Nv.defaultProps = hb;
var _v = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], gb = ["hover", "click", "focus"];
function Hu(e) {
  return /* @__PURE__ */ S.createElement(Nv, e, e.children);
}
var Sd = g.oneOf(gb);
g.node.isRequired, g.oneOfType([g.elementType, g.func]), g.func, g.func, g.func, g.func, g.func, g.func, g.func, g.oneOf(_v), g.shape({}), g.bool, g.oneOf(["click", "mousedown"]), g.bool, g.oneOfType([g.elementType, g.func]), g.oneOfType([g.object, g.bool]);
Hu.propTypes = {
  /** Specifies the content of the `OverlayTrigger`. */
  children: g.oneOfType([g.element, g.func]).isRequired,
  /** An element or text to overlay next to the target. */
  overlay: g.oneOfType([g.element, g.func]).isRequired,
  /** The initial visibility state of the `Overlay`. */
  defaultShow: g.bool,
  /** A millisecond delay amount to show and hide the `Overlay` once triggered. */
  delay: g.oneOfType([g.number, g.shape({})]),
  /** The initial flip state of the `Overlay`. */
  flip: g.bool,
  onHide: g.func,
  /**
   * A callback that fires when the user triggers a change in tooltip visibility.
   * `onToggle` is called with the desired next show, and generally should be
   * passed back to the `show` prop. `onToggle` fires after the configured `delay`.
   *
   * Controls `show`.
   */
  onToggle: g.func,
  /** The placement of the `Overlay` in relation to it's target. */
  placement: g.oneOf(_v),
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popperConfig: g.shape({}),
  /**
   * The visibility of the `Overlay`. `show` is a controlled prop so should
   * be paired with `onToggle` to avoid breaking user interactions.
   *
   * Manually toggling show does not wait for delay to change the visibility.
   *
   * Controls `onToggle`.
   */
  show: g.bool,
  target: g.instanceOf(EventTarget),
  /** Specify which action or actions trigger `Overlay` visibility. */
  trigger: g.oneOfType([Sd, g.arrayOf(Sd)])
};
Hu.defaultProps = {
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
var Od = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(a, o, l, s, u) {
      var f = l || "<<anonymous>>", h = u || o;
      if (a[o] == null)
        return new Error("The " + s + " `" + h + "` is required to make " + ("`" + f + "` accessible for users of assistive ") + "technologies such as screen readers.");
      for (var p = arguments.length, y = Array(p > 5 ? p - 5 : 0), x = 5; x < p; x++)
        y[x - 5] = arguments[x];
      return r.apply(void 0, [a, o, l, s, u].concat(y));
    };
  }
  e.exports = t.default;
})(Od, Od.exports);
var yb = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], wb = {
  placement: "right"
}, xo = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, l = e.arrowProps;
  e.popper, e.show;
  var s = He(e, yb);
  n = pn(n, "tooltip");
  var u = (r == null ? void 0 : r.split("-")) || [], f = u[0];
  return /* @__PURE__ */ S.createElement("div", B({
    ref: t,
    style: a,
    role: "tooltip",
    "x-placement": f,
    className: Y(i, n, "bs-tooltip-" + f)
  }, s), /* @__PURE__ */ S.createElement("div", B({
    className: "arrow"
  }, l)), /* @__PURE__ */ S.createElement("div", {
    className: n + "-inner"
  }, o));
});
xo.defaultProps = wb;
xo.displayName = "Tooltip";
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
var bb = ["children", "variant"];
function Pd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Za(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pd(Object(n), !0).forEach(function(r) {
      Eb(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pd(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Eb(e, t, n) {
  return t = xb(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function xb(e) {
  var t = kb(e, "string");
  return wi(t) == "symbol" ? t : t + "";
}
function kb(e, t) {
  if (wi(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (wi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ms() {
  return ms = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ms.apply(this, arguments);
}
function Sb(e, t) {
  if (e == null) return {};
  var n = Ob(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ob(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Pb = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], Ja = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.children, r = e.variant, i = Sb(e, bb);
  return /* @__PURE__ */ S.createElement(xo, ms({}, i, {
    className: Y({
      "tooltip-light": r === "light"
    }, i.className),
    ref: t
  }), n);
});
Ja.propTypes = Za(Za({}, xo.propTypes), {}, {
  /** An html id attribute, necessary for accessibility. */
  id: g.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: g.oneOf(Pb),
  /**
   * An `Overlay` injected set of props for positioning the `Tooltip` arrow.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  arrowProps: g.shape({
    ref: g.oneOfType([g.func, g.shape({
      current: g.element
    })]),
    style: g.shape({})
  }),
  /** Whether the `Overlay` is shown. */
  show: g.bool,
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popper: g.shape({}),
  /** Overrides underlying component base CSS class name */
  bsPrefix: g.string,
  /** Specifies the content of the `Tooltip` */
  children: g.node,
  /** Specifies class name to append to the base element */
  className: g.string,
  /** The visual style of the `Tooltip` */
  variant: g.string
});
Ja.defaultProps = Za(Za({}, Ja.defaultProps), {}, {
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
function bi(e) {
  "@babel/helpers - typeof";
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bi(e);
}
var Cb = ["className", "alt", "invertColors", "icon", "src", "iconClassNames", "onClick", "size", "variant", "iconAs", "isActive"], Ab = ["tooltipPlacement", "tooltipContent", "variant", "invertColors"];
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, eo.apply(this, arguments);
}
function Nb(e, t, n) {
  return t = _b(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _b(e) {
  var t = Tb(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function Tb(e, t) {
  if (bi(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (bi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tv(e, t) {
  if (e == null) return {};
  var n = jb(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function jb(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var At = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.className, r = e.alt, i = e.invertColors, a = e.icon, o = e.src, l = e.iconClassNames, s = e.onClick, u = e.size, f = e.variant, h = e.iconAs, p = e.isActive, y = Tv(e, Cb), x = i ? "inverse-" : "", b = p ? "".concat(f, "-") : "";
  if (!h && !1)
    var d;
  var c = h || Ri;
  return /* @__PURE__ */ S.createElement("button", eo({
    "aria-label": r,
    className: Y("btn-icon", "btn-icon-".concat(x).concat(f), "btn-icon-".concat(u), Nb({}, "btn-icon-".concat(x).concat(b, "active"), p), n),
    onClick: s,
    type: "button",
    ref: t
  }, y), /* @__PURE__ */ S.createElement("span", {
    className: "btn-icon__icon-container"
  }, /* @__PURE__ */ S.createElement(c, {
    className: Y("btn-icon__icon", l),
    icon: a,
    src: o
  })));
});
At.defaultProps = {
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
At.propTypes = {
  /** A custom class name. */
  className: g.string,
  /** Component that renders the icon, currently defaults to `FontAwesomeIcon`,
   *  but is going to be deprecated soon, please use Paragon's icons instead. */
  iconAs: g.elementType,
  /** An icon component to render. Example import of a Paragon icon component:
   * `import { Check } from '@openedx/paragon/dist/icon';`
   * */
  src: g.oneOfType([g.element, g.elementType]),
  /** Alt text for your icon. For best practice, avoid using alt text to describe
   * the image in the `IconButton`. Instead, we recommend describing the function
   * of the button. */
  alt: g.string.isRequired,
  /** Changes icon styles for dark background */
  invertColors: g.bool,
  /** Accepts a React fontawesome icon. */
  icon: g.shape({
    prefix: g.string,
    iconName: g.string,
    // eslint-disable-next-line react/forbid-prop-types
    icon: g.array
  }),
  /** Extra class names that will be added to the icon */
  iconClassNames: g.string,
  /** Click handler for the button */
  onClick: g.func,
  /** Type of button (uses Bootstrap options) */
  variant: g.oneOf(["primary", "secondary", "success", "warning", "danger", "light", "dark", "black", "brand"]),
  /** size of button to render */
  size: g.oneOf(["sm", "md", "inline"]),
  /** whether to show the `IconButton` in an active state, whose styling is distinct from default state */
  isActive: g.bool
};
function Wu(e) {
  var t = e.tooltipPlacement, n = e.tooltipContent, r = e.variant, i = e.invertColors, a = Tv(e, Ab), o = i ? "inverse-" : "";
  return /* @__PURE__ */ S.createElement(Hu, {
    placement: t,
    overlay: /* @__PURE__ */ S.createElement(Ja, {
      id: "iconbutton-tooltip-".concat(t),
      variant: o ? "light" : ""
    }, n)
  }, /* @__PURE__ */ S.createElement(At, eo({
    variant: r,
    invertColors: i
  }, a)));
}
Wu.defaultProps = {
  tooltipPlacement: "top",
  variant: "primary",
  invertColors: !1
};
Wu.propTypes = {
  /** tooltip placement can be top, left, right etc, per https://popper.js.org/docs/v2/constructors/#options  */
  tooltipPlacement: g.string,
  /** any valid JSX or text to be rendered as tooltip contents */
  tooltipContent: g.node.isRequired,
  /** Type of button (uses Bootstrap options) */
  variant: g.oneOf(["primary", "secondary", "success", "warning", "danger", "light", "dark", "black", "brand"]),
  /** Changes icon styles for dark background */
  invertColors: g.bool
};
At.IconButtonWithTooltip = Wu;
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vs.apply(this, arguments);
}
var Cd = function(t) {
  return /* @__PURE__ */ _.createElement("svg", vs({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59Z",
    fill: "currentColor"
  }));
};
function hs() {
  return hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hs.apply(this, arguments);
}
var Ad = function(t) {
  return /* @__PURE__ */ _.createElement("svg", hs({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6Z",
    fill: "currentColor"
  }));
};
const jv = function(e) {
  return /* @__PURE__ */ S.forwardRef(function(t, n) {
    return /* @__PURE__ */ S.createElement("div", B({}, t, {
      ref: n,
      className: Y(t.className, e)
    }));
  });
};
var Rb = /-(.)/g;
function Ib(e) {
  return e.replace(Rb, function(t, n) {
    return n.toUpperCase();
  });
}
var Lb = ["className", "bsPrefix", "as"], Mb = function(t) {
  return t[0].toUpperCase() + Ib(t).slice(1);
};
function Gt(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? Mb(e) : r, a = n.Component, o = n.defaultProps, l = /* @__PURE__ */ S.forwardRef(function(s, u) {
    var f = s.className, h = s.bsPrefix, p = s.as, y = p === void 0 ? a || "div" : p, x = He(s, Lb), b = pn(h, e);
    return /* @__PURE__ */ S.createElement(y, B({
      ref: u,
      className: Y(f, b)
    }, x));
  });
  return l.defaultProps = o, l.displayName = i, l;
}
var Db = ["bsPrefix", "variant", "pill", "className", "as"], $b = {
  pill: !1
}, Vu = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.pill, a = e.className, o = e.as, l = o === void 0 ? "span" : o, s = He(e, Db), u = pn(n, "badge");
  return /* @__PURE__ */ S.createElement(l, B({
    ref: t
  }, s, {
    className: Y(a, u, i && u + "-pill", r && u + "-" + r)
  }));
});
Vu.displayName = "Badge";
Vu.defaultProps = $b;
function gs() {
  return gs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gs.apply(this, arguments);
}
var Yu = /* @__PURE__ */ S.forwardRef(function(e, t) {
  return /* @__PURE__ */ S.createElement(Vu, gs({}, e, {
    ref: t
  }));
}), Fb = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
Yu.propTypes = {
  /** Specifies element type for this component */
  as: g.elementType,
  /** Visual style of the badge */
  variant: g.oneOf(Fb),
  /** Add the `pill` modifier to make badges more rounded with some additional horizontal padding */
  pill: g.bool,
  /** Overrides underlying component base CSS class name */
  bsPrefix: g.string
};
Yu.defaultProps = {
  as: "span",
  variant: "primary",
  pill: !1,
  bsPrefix: "badge"
};
var Rv = /* @__PURE__ */ S.createContext(null);
Rv.displayName = "CardContext";
var zb = ["bsPrefix", "className", "variant", "as"], Ub = {
  variant: null
}, Qu = /* @__PURE__ */ S.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.variant, a = e.as, o = a === void 0 ? "img" : a, l = He(e, zb), s = pn(n, "card-img");
    return /* @__PURE__ */ S.createElement(o, B({
      ref: t,
      className: Y(i ? s + "-" + i : s, r)
    }, l));
  }
);
Qu.displayName = "CardImg";
Qu.defaultProps = Ub;
var Bb = ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"], Hb = jv("h5"), Wb = jv("h6"), Iv = Gt("card-body"), Vb = Gt("card-title", {
  Component: Hb
}), Yb = Gt("card-subtitle", {
  Component: Wb
}), Qb = Gt("card-link", {
  Component: "a"
}), Xb = Gt("card-text", {
  Component: "p"
}), Gb = Gt("card-header"), Kb = Gt("card-footer"), qb = Gt("card-img-overlay"), Zb = {
  body: !1
}, Le = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.bg, a = e.text, o = e.border, l = e.body, s = e.children, u = e.as, f = u === void 0 ? "div" : u, h = He(e, Bb), p = pn(n, "card"), y = _.useMemo(function() {
    return {
      cardHeaderBsPrefix: p + "-header"
    };
  }, [p]);
  return /* @__PURE__ */ S.createElement(Rv.Provider, {
    value: y
  }, /* @__PURE__ */ S.createElement(f, B({
    ref: t
  }, h, {
    className: Y(r, p, i && "bg-" + i, a && "text-" + a, o && "border-" + o)
  }), l ? (
    // @ts-ignore
    /* @__PURE__ */ S.createElement(Iv, null, s)
  ) : s));
});
Le.displayName = "Card";
Le.defaultProps = Zb;
Le.Img = Qu;
Le.Title = Vb;
Le.Subtitle = Yb;
Le.Body = Iv;
Le.Link = Qb;
Le.Text = Xb;
Le.Header = Gb;
Le.Footer = Kb;
Le.ImgOverlay = qb;
var En = /* @__PURE__ */ _.createContext({});
function Xu(e) {
  var t = e.orientation, n = e.children, r = e.isLoading, i = e.variant;
  return /* @__PURE__ */ S.createElement(En.Provider, {
    value: {
      orientation: t,
      isLoading: r,
      variant: i
    }
  }, n);
}
Xu.propTypes = {
  /** Specifies which orientation to use. */
  orientation: g.oneOf(["horizontal", "vertical"]),
  /** Specifies loading state. */
  isLoading: g.bool,
  /** Specifies content of the component. */
  children: g.node,
  /** Specifies `Card` style variant */
  variant: g.oneOf(["light", "dark", "muted"])
};
Xu.defaultProps = {
  orientation: "vertical",
  isLoading: !1,
  children: null,
  variant: "light"
};
const Jb = S.createContext({}), Lv = !0;
function eE({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: l, enableAnimation: s = Lv }) {
  const u = {};
  return o === "rtl" && (u["--animation-direction"] = "reverse"), typeof l == "number" && (u["--animation-duration"] = `${l}s`), s || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), a && (u.borderRadius = "50%"), typeof e < "u" && (u["--base-color"] = e), typeof t < "u" && (u["--highlight-color"] = t), u;
}
function ar({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...l }) {
  var s, u, f;
  const h = S.useContext(Jb), p = { ...l };
  for (const [w, v] of Object.entries(l))
    typeof v > "u" && delete p[w];
  const y = {
    ...h,
    ...p,
    circle: a
  }, x = {
    ...o,
    ...eE(y)
  };
  let b = "react-loading-skeleton";
  n && (b += ` ${n}`);
  const d = (s = y.inline) !== null && s !== void 0 ? s : !1, c = [], m = Math.ceil(e);
  for (let w = 0; w < m; w++) {
    let v = x;
    if (m > e && w === m - 1) {
      const E = (u = v.width) !== null && u !== void 0 ? u : "100%", O = e % 1, N = typeof E == "number" ? E * O : `calc(${E} * ${O})`;
      v = { ...v, width: N };
    }
    const k = S.createElement("span", { className: b, style: v, key: w }, "‌");
    d ? c.push(k) : c.push(S.createElement(
      S.Fragment,
      { key: w },
      k,
      S.createElement("br", null)
    ));
  }
  return S.createElement("span", { className: r, "data-testid": i, "aria-live": "polite", "aria-busy": (f = y.enableAnimation) !== null && f !== void 0 ? f : Lv }, t ? c.map((w, v) => S.createElement(t, { key: v }, w)) : c);
}
var tE = 20, Gu = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.actions, r = e.className, i = e.size, a = e.subtitle, o = e.title, l = e.skeletonHeight, s = e.skeletonWidth, u = _.useContext(En), f = u.isLoading, h = _.useCallback(function(p) {
    if (/* @__PURE__ */ S.isValidElement(p)) {
      var y = p.props.children, x = {
        size: i,
        children: Array.isArray(y) ? y.map(h) : h(y)
      };
      return /* @__PURE__ */ S.cloneElement(p, x);
    }
    return p;
  }, [i]);
  return f ? /* @__PURE__ */ S.createElement("div", {
    className: Y("pgn__card-header", r)
  }, /* @__PURE__ */ S.createElement(ar, {
    containerClassName: "pgn__card-header-loader",
    height: l,
    width: s
  })) : /* @__PURE__ */ S.createElement("div", {
    className: Y("pgn__card-header", r),
    ref: t
  }, /* @__PURE__ */ S.createElement("div", {
    className: "pgn__card-header-content"
  }, o && /* @__PURE__ */ S.createElement("div", {
    className: "pgn__card-header-title-".concat(i)
  }, o), a && /* @__PURE__ */ S.createElement("div", {
    className: "pgn__card-header-subtitle-".concat(i)
  }, a)), n && /* @__PURE__ */ S.createElement("div", {
    className: "pgn__card-header-actions"
  }, i !== "md" ? h(n) : n));
});
Gu.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: g.node,
  /** The class name for the CardHeader component */
  className: g.string,
  /** The title for the CardHeader component */
  title: g.node,
  /** The size of the CardHeader component */
  size: g.oneOf(["sm", "md"]),
  /** The subtitle of the CardHeader component */
  subtitle: g.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: g.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: g.number
};
Gu.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: tE,
  skeletonWidth: null
};
var nE = ["className"];
function ys() {
  return ys = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ys.apply(this, arguments);
}
function rE(e, t) {
  if (e == null) return {};
  var n = iE(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function iE(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ku = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.className, r = rE(e, nE);
  return /* @__PURE__ */ S.createElement("div", ys({
    className: Y("pgn__card-divider", n),
    ref: t
  }, r));
});
Ku.propTypes = {
  /** Specifies class name to append to the base element. */
  className: g.string
};
Ku.defaultProps = {
  className: void 0
};
var aE = 100, qu = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = e.title, a = e.actions, o = e.muted, l = e.skeletonHeight, s = e.skeletonWidth, u = _.useContext(En), f = u.isLoading;
  return f ? /* @__PURE__ */ S.createElement("div", {
    className: Y("pgn__card-section", n, {
      "is-muted": o
    })
  }, /* @__PURE__ */ S.createElement(ar, {
    containerClassName: "pgn__card-section-loader",
    height: l,
    width: s
  })) : /* @__PURE__ */ S.createElement("div", {
    className: Y("pgn__card-section", n, {
      "is-muted": o
    }),
    ref: t
  }, i && /* @__PURE__ */ S.createElement("div", {
    className: "pgn__card-section-title"
  }, i), r, a && /* @__PURE__ */ S.createElement("div", {
    className: "pgn__card-section-actions"
  }, a));
});
qu.propTypes = {
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies title of the `Section`. */
  title: g.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: g.node,
  /** Specifies whether to display `Section` with muted styling. */
  muted: g.bool,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: g.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: g.number
};
qu.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: aE,
  skeletonWidth: void 0
};
var oE = 18, Zu = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.isStacked, a = e.textElement, o = e.skeletonHeight, l = e.skeletonWidth, s = e.orientation, u = _.useContext(En), f = u.orientation, h = u.isLoading, p = s || f, y = "pgn__card-footer ".concat(p).concat(i ? "-stacked" : ""), x = "pgn__card-footer-text ".concat(p).concat(i ? "-stacked" : "");
  return h ? /* @__PURE__ */ S.createElement("div", {
    className: Y(r, y)
  }, /* @__PURE__ */ S.createElement(ar, {
    containerClassName: "pgn__card-footer-loader",
    height: o,
    width: l
  })) : /* @__PURE__ */ S.createElement("div", {
    className: Y(r, y),
    ref: t
  }, a && /* @__PURE__ */ S.createElement("div", {
    className: x
  }, a), n);
});
Zu.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: g.node,
  /** Specifies whether to use stacked variant. */
  isStacked: g.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: g.oneOf(["horizontal", "vertical"]),
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: g.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: g.number
};
Zu.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: oE,
  skeletonWidth: void 0
};
const Mv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==";
function Nd(e, t) {
  return fE(e) || uE(e, t) || sE(e, t) || lE();
}
function lE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sE(e, t) {
  if (e) {
    if (typeof e == "string") return _d(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _d(e, t);
  }
}
function _d(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function uE(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, l = [], s = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(s = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (f) {
      u = !0, i = f;
    } finally {
      try {
        if (!s && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return l;
  }
}
function fE(e) {
  if (Array.isArray(e)) return e;
}
var cE = 140, dE = 41, Ju = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.src, r = e.fallbackSrc, i = e.srcAlt, a = e.logoSrc, o = e.fallbackLogoSrc, l = e.logoAlt, s = e.skeletonHeight, u = e.skeletonWidth, f = e.logoSkeleton, h = e.logoSkeletonHeight, p = e.logoSkeletonWidth, y = e.className, x = e.imageLoadingType, b = _.useContext(En), d = b.orientation, c = b.isLoading, m = _.useState(!1), w = Nd(m, 2), v = w[0], k = w[1], E = _.useState(!1), O = Nd(E, 2), N = O[0], P = O[1], L = "pgn__card-wrapper-image-cap ".concat(d);
  if (c)
    return /* @__PURE__ */ S.createElement("div", {
      className: Y(L, y),
      "data-testid": "image-loader-wrapper"
    }, /* @__PURE__ */ S.createElement(ar, {
      containerClassName: "pgn__card-image-cap-loader",
      height: d === "horizontal" ? "100%" : s,
      width: u
    }), f && /* @__PURE__ */ S.createElement(ar, {
      containerClassName: "pgn__card-logo-cap",
      height: h,
      width: p
    }));
  var H = function(D, ae, re) {
    var V = D.currentTarget;
    if (!ae || V.src.endsWith(ae)) {
      re === "imageCap" ? V.src = Mv : P(!1);
      return;
    }
    V.src = ae;
  };
  return /* @__PURE__ */ S.createElement("div", {
    className: Y(y, L),
    ref: t
  }, !!n && /* @__PURE__ */ S.createElement("img", {
    className: Y("pgn__card-image-cap", {
      show: v
    }),
    src: n,
    onError: function(D) {
      return H(D, r, "imageCap");
    },
    onLoad: function() {
      return k(!0);
    },
    alt: i,
    loading: x
  }), !!a && /* @__PURE__ */ S.createElement("img", {
    className: Y("pgn__card-logo-cap", {
      show: N
    }),
    src: a,
    onError: function(D) {
      return H(D, o, "logoCap");
    },
    onLoad: function() {
      return P(!0);
    },
    alt: l,
    loading: x
  }));
});
Ju.propTypes = {
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies image src. */
  src: g.string,
  /** Specifies fallback image src. */
  fallbackSrc: g.string,
  /** Specifies image alt text. */
  srcAlt: g.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: g.string,
  /** Specifies fallback image logo src. */
  fallbackLogoSrc: g.string,
  /** Specifies logo image alt text. */
  logoAlt: g.string,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: g.number,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: g.number,
  /** Specifies whether the cap should be displayed during loading. */
  logoSkeleton: g.bool,
  /** Specifies height of Logo skeleton in loading state. */
  logoSkeletonHeight: g.number,
  /** Specifies width of Logo skeleton in loading state. */
  logoSkeletonWidth: g.number,
  /** Specifies loading type for images */
  imageLoadingType: g.oneOf(["eager", "lazy"])
};
Ju.defaultProps = {
  src: void 0,
  fallbackSrc: Mv,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: cE,
  logoSkeleton: !1,
  logoSkeletonHeight: dE,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager"
};
var pE = ["className", "children"];
function ws() {
  return ws = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ws.apply(this, arguments);
}
function mE(e, t) {
  if (e == null) return {};
  var n = vE(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function vE(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var ef = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = mE(e, pE);
  return /* @__PURE__ */ S.createElement("div", ws({
    className: Y("pgn__card-body", n),
    ref: t
  }, i), r);
});
ef.propTypes = {
  /** Specifies the content of the component. */
  children: g.node,
  /** The class to append to the base element. */
  className: g.string
};
ef.defaultProps = {
  children: void 0,
  className: void 0
};
var hE = ["className", "children", "variant", "icon", "title", "actions"];
function bs() {
  return bs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bs.apply(this, arguments);
}
function gE(e, t) {
  if (e == null) return {};
  var n = yE(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function yE(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var tf = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = e.variant, a = e.icon, o = e.title, l = e.actions, s = gE(e, hE), u = _.useContext(En), f = u.isLoading;
  return f ? /* @__PURE__ */ S.createElement("div", {
    className: Y("pgn__card-status", n),
    "data-testid": "card-status-skeleton",
    ref: t
  }, /* @__PURE__ */ S.createElement(ar, null)) : /* @__PURE__ */ S.createElement("div", bs({
    className: Y("pgn__card-status", "pgn__card-status__".concat(i), n),
    ref: t
  }, s), /* @__PURE__ */ S.createElement("div", {
    className: "pgn__card-status__content"
  }, a && /* @__PURE__ */ S.createElement(jr, {
    className: "pgn__card-status__content-icon",
    src: a
  }), /* @__PURE__ */ S.createElement("div", {
    className: "pgn__card-status__message-content"
  }, o && /* @__PURE__ */ S.createElement("div", {
    className: "pgn__card-status__heading"
  }, o), r)), !!l && /* @__PURE__ */ S.createElement("div", {
    className: "pgn__card-status__actions"
  }, l));
});
tf.propTypes = {
  /** Specifies the content of the component. */
  children: g.node.isRequired,
  /** The class to append to the base element. */
  className: g.string,
  /** Icon that will be shown in the top-left corner. */
  icon: g.func,
  /** Specifies variant to use. */
  variant: g.oneOf(["primary", "success", "danger", "warning"]),
  /** Specifies title for the `Card.Status`. */
  title: g.oneOfType([g.element, g.string]),
  /** Specifies any optional actions, e.g. button(s). */
  actions: g.node
};
tf.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
function Ei(e) {
  "@babel/helpers - typeof";
  return Ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ei(e);
}
var wE = ["orientation", "isLoading", "className", "isClickable", "muted", "variant"];
function Td(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Td(Object(n), !0).forEach(function(r) {
      Dv(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Td(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Es() {
  return Es = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Es.apply(this, arguments);
}
function Dv(e, t, n) {
  return t = bE(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function bE(e) {
  var t = EE(e, "string");
  return Ei(t) == "symbol" ? t : t + "";
}
function EE(e, t) {
  if (Ei(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ei(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xE(e, t) {
  if (e == null) return {};
  var n = kE(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function kE(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var SE = ["light", "dark", "muted"], nf = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var n = e.orientation, r = e.isLoading, i = e.className, a = e.isClickable, o = e.muted, l = e.variant, s = xE(e, wE), u = o ? "muted" : l;
  return /* @__PURE__ */ S.createElement(Xu, {
    orientation: n,
    isLoading: r,
    variant: u
  }, /* @__PURE__ */ S.createElement(Le, Es({}, s, {
    className: Y(i, "pgn__card", Dv({
      horizontal: n === "horizontal",
      clickable: a
    }, "pgn__card-".concat(u), u)),
    ref: t,
    tabIndex: a ? 0 : -1
  })));
});
nf.propTypes = {
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies which orientation to use. */
  orientation: g.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: g.bool,
  /** Specifies loading state. */
  isLoading: g.bool,
  /** Specifies `Card` style variant. */
  variant: g.oneOf(SE),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: g.bool
};
nf.defaultProps = jd(jd({}, Le.defaultProps), {}, {
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
});
var Fe = Lm(nf, "Card", {
  muted: {
    deprType: Rn.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
Fe.Status = tf;
Fe.Header = Gu;
Fe.Divider = Ku;
Fe.Section = qu;
Fe.Footer = Zu;
Fe.ImageCap = Ju;
Fe.Context = En;
Fe.Body = ef;
const OE = {
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
}, il = (e) => ({
  title: `Step ${e + 1}`,
  label: "",
  description: "",
  displayAboveLine: e % 2 === 0,
  position: e
}), PE = (e) => Math.max(0, Math.min(1, e)), CE = (e, t = 8) => {
  const n = PE(e), r = 100 - t * 2;
  return t + n * r;
}, AE = (e) => e.length <= 1 ? e.map((t) => ({ ...t, position: 0.5 })) : e.map((t, n) => ({
  ...t,
  position: n / (e.length - 1)
})), NE = (e) => [...e].sort((t, n) => t.position - n.position), al = () => ({
  displayName: "Process Line",
  introductionText: "Click and drag to explore. Select an item for more details.",
  styling: OE,
  items: AE([
    il(0),
    il(1),
    il(2)
  ])
});
function $v({
  configuration: e,
  selectedIndex: t,
  onSelectedIndexChange: n
}) {
  const r = _.useMemo(
    () => NE(e.items || []),
    [e.items]
  ), [i, a] = _.useState(0), o = _.useRef(null), l = _.useRef({
    active: !1,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
    moved: !1
  }), s = t ?? i, u = _.useCallback((v) => {
    const k = r.length ? Math.max(0, Math.min(r.length - 1, v)) : 0;
    t === void 0 && a(k), n && n(k);
  }, [t, r.length, n]);
  _.useEffect(() => {
    s > r.length - 1 && u(Math.max(r.length - 1, 0));
  }, [r.length, s, u]);
  const f = r[s], h = (v) => {
    u(s + v);
  }, p = (v) => {
    const k = o.current;
    if (!k)
      return;
    const E = k.querySelector(`[data-step-index="${v}"]`);
    E && typeof E.scrollIntoView == "function" && E.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  };
  _.useEffect(() => {
    p(s);
  }, [s]);
  const y = (v) => {
    l.current.moved || u(v);
  }, x = (v) => {
    const k = o.current;
    k && (l.current = {
      active: !0,
      pointerId: v.pointerId,
      startX: v.clientX,
      startScrollLeft: k.scrollLeft,
      moved: !1
    }, k.setPointerCapture(v.pointerId));
  }, b = (v) => {
    const k = o.current, E = l.current;
    if (!k || !E.active || E.pointerId !== v.pointerId)
      return;
    const O = v.clientX - E.startX;
    Math.abs(O) > 4 && (E.moved = !0), k.scrollLeft = E.startScrollLeft - O;
  }, d = (v) => {
    const k = o.current;
    k && k.hasPointerCapture(v) && k.releasePointerCapture(v);
    const E = l.current;
    E.active = !1, window.setTimeout(() => {
      l.current.moved = !1;
    }, 0);
  }, c = (v) => {
    l.current.pointerId === v.pointerId && d(v.pointerId);
  }, m = (v) => {
    l.current.pointerId === v.pointerId && d(v.pointerId);
  }, w = (v, k) => {
    const E = k === s;
    return {
      left: `${CE(v.position)}%`,
      "--processline-highlight-color": e.styling.highlightColor,
      "--processline-title-color": E ? e.styling.highlightColor : e.styling.lineItemTitleColor,
      "--processline-label-color": e.styling.lineItemLabelColor,
      "--processline-title-font-size": `${e.styling.lineItemTitleFontSize}px`,
      "--processline-label-font-size": `${e.styling.lineItemLabelFontSize}px`
    };
  };
  return r.length ? /* @__PURE__ */ z.jsxs("div", { className: "xblock-processline student-view", children: [
    /* @__PURE__ */ z.jsxs("header", { className: "processline-header", children: [
      /* @__PURE__ */ z.jsx("h2", { className: "processline-heading", children: e.displayName }),
      /* @__PURE__ */ z.jsx("p", { className: "processline-subheading", children: e.introductionText })
    ] }),
    /* @__PURE__ */ z.jsxs("section", { className: "processline-timeline-section", "aria-label": "Process line navigation", children: [
      /* @__PURE__ */ z.jsx(
        At,
        {
          className: "timeline-side-button",
          src: Cd,
          iconAs: jr,
          alt: "Previous item",
          onClick: () => h(-1),
          disabled: s === 0
        }
      ),
      /* @__PURE__ */ z.jsx(
        "div",
        {
          ref: o,
          className: "timeline-viewport",
          onPointerDown: x,
          onPointerMove: b,
          onPointerUp: c,
          onPointerCancel: m,
          children: /* @__PURE__ */ z.jsxs(
            "div",
            {
              className: "timeline-canvas",
              style: { minWidth: `${Math.max(960, r.length * 220)}px` },
              children: [
                /* @__PURE__ */ z.jsx("div", { className: "timeline-track" }),
                r.map((v, k) => {
                  const E = k === s;
                  return /* @__PURE__ */ z.jsxs(
                    "button",
                    {
                      className: `timeline-marker ${v.displayAboveLine ? "above" : "below"} ${E ? "selected" : ""}`,
                      "data-step-index": k,
                      type: "button",
                      style: w(v, k),
                      onPointerDown: (O) => O.stopPropagation(),
                      onClick: () => y(k),
                      "aria-pressed": E,
                      children: [
                        /* @__PURE__ */ z.jsx("span", { className: "timeline-node" }),
                        /* @__PURE__ */ z.jsxs("span", { className: "timeline-marker-copy", children: [
                          /* @__PURE__ */ z.jsx("span", { className: "timeline-marker-title", children: v.title }),
                          /* @__PURE__ */ z.jsx("span", { className: "timeline-marker-label", children: v.label })
                        ] })
                      ]
                    },
                    `${v.title}-${v.position}`
                  );
                })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ z.jsx(
        At,
        {
          className: "timeline-side-button",
          src: Ad,
          iconAs: jr,
          alt: "Next item",
          onClick: () => h(1),
          disabled: s === r.length - 1
        }
      )
    ] }),
    f && /* @__PURE__ */ z.jsx(
      Fe,
      {
        as: "section",
        className: "processline-detail-card",
        style: {
          backgroundColor: e.styling.cardBackgroundColor,
          color: e.styling.cardDescriptionColor
        },
        children: /* @__PURE__ */ z.jsxs(Fe.Body, { children: [
          /* @__PURE__ */ z.jsxs(
            Yu,
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
          /* @__PURE__ */ z.jsxs(
            "h3",
            {
              className: "detail-title",
              style: {
                color: e.styling.cardTitleColor,
                fontSize: `${e.styling.cardTitleFontSize}px`
              },
              children: [
                f.title,
                f.label ? ` - ${f.label}` : ""
              ]
            }
          ),
          /* @__PURE__ */ z.jsx(
            "p",
            {
              className: "detail-description",
              style: {
                color: e.styling.cardDescriptionColor,
                fontSize: `${e.styling.cardDescriptionFontSize}px`
              },
              children: f.description
            }
          ),
          /* @__PURE__ */ z.jsxs("div", { className: "detail-card-footer", children: [
            /* @__PURE__ */ z.jsxs("span", { className: "detail-count", children: [
              s + 1,
              " of ",
              r.length
            ] }),
            /* @__PURE__ */ z.jsxs("div", { className: "detail-actions", children: [
              /* @__PURE__ */ z.jsx(
                At,
                {
                  className: "detail-nav-button",
                  src: Cd,
                  iconAs: jr,
                  alt: "Previous detail",
                  onClick: () => h(-1),
                  disabled: s === 0
                }
              ),
              /* @__PURE__ */ z.jsx(
                At,
                {
                  className: "detail-nav-button primary",
                  src: Ad,
                  iconAs: jr,
                  alt: "Next detail",
                  onClick: () => h(1),
                  disabled: s === r.length - 1
                }
              )
            ] })
          ] })
        ] })
      }
    )
  ] }) : /* @__PURE__ */ z.jsxs("div", { className: "xblock-processline student-view empty-state", children: [
    /* @__PURE__ */ z.jsxs("header", { className: "processline-header", children: [
      /* @__PURE__ */ z.jsx("h2", { className: "processline-heading", children: e.displayName }),
      /* @__PURE__ */ z.jsx("p", { className: "processline-subheading", children: e.introductionText })
    ] }),
    /* @__PURE__ */ z.jsx(Fe, { className: "processline-empty-card", children: /* @__PURE__ */ z.jsx(Fe.Body, { children: /* @__PURE__ */ z.jsx("p", { className: "processline-empty-message mb-0", children: "No line items have been configured yet." }) }) })
  ] });
}
$v.defaultProps = {
  selectedIndex: void 0,
  onSelectedIndexChange: void 0
};
const _E = (e) => ({
  ...al(),
  displayName: e.displayName || "Process Line",
  introductionText: e.introductionText || "Click and drag to explore. Select an item for more details.",
  styling: {
    ...al().styling,
    ...e.styling || {}
  },
  items: Array.isArray(e.items) ? e.items : al().items
}), TE = (e, t) => {
  const n = e && "jquery" in e ? e[0] : e;
  if (!n || !(n instanceof Element)) {
    console.error("Invalid DOM element provided to renderBlock:", e);
    return;
  }
  Cm.render(
    /* @__PURE__ */ z.jsx(_.StrictMode, { children: /* @__PURE__ */ z.jsx($v, { configuration: _E(t) }) }),
    n
  );
};
export {
  TE as renderBlock
};
