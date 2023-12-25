function Wf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Qf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var aa = { exports: {} },
  Ql = {},
  ca = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr = Symbol.for("react.element"),
  Kf = Symbol.for("react.portal"),
  Yf = Symbol.for("react.fragment"),
  Gf = Symbol.for("react.strict_mode"),
  Zf = Symbol.for("react.profiler"),
  Xf = Symbol.for("react.provider"),
  Jf = Symbol.for("react.context"),
  qf = Symbol.for("react.forward_ref"),
  bf = Symbol.for("react.suspense"),
  ed = Symbol.for("react.memo"),
  td = Symbol.for("react.lazy"),
  Ku = Symbol.iterator;
function nd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ku && e[Ku]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  da = Object.assign,
  pa = {};
function Fn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pa),
    (this.updater = n || fa);
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ma() {}
ma.prototype = Fn.prototype;
function Yi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pa),
    (this.updater = n || fa);
}
var Gi = (Yi.prototype = new ma());
Gi.constructor = Yi;
da(Gi, Fn.prototype);
Gi.isPureReactComponent = !0;
var Yu = Array.isArray,
  ha = Object.prototype.hasOwnProperty,
  Zi = { current: null },
  va = { key: !0, ref: !0, __self: !0, __source: !0 };
function ga(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ha.call(t, r) && !va.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Tr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Zi.current,
  };
}
function rd(e, t) {
  return {
    $$typeof: Tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Xi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function ld(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Gu = /\/+/g;
function fo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ld("" + e.key)
    : t.toString(36);
}
function rl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Tr:
          case Kf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + fo(i, 0) : r),
      Yu(l)
        ? ((n = ""),
          e != null && (n = e.replace(Gu, "$&/") + "/"),
          rl(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Xi(l) &&
            (l = rd(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Gu, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Yu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + fo(o, u);
      i += rl(o, t, n, s, l);
    }
  else if (((s = nd(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + fo(o, u++)), (i += rl(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function Ir(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    rl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function od(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null },
  ll = { transition: null },
  id = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: ll,
    ReactCurrentOwner: Zi,
  };
R.Children = {
  map: Ir,
  forEach: function (e, t, n) {
    Ir(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ir(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ir(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
R.Component = Fn;
R.Fragment = Yf;
R.Profiler = Zf;
R.PureComponent = Yi;
R.StrictMode = Gf;
R.Suspense = bf;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = id;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = da({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Zi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ha.call(t, s) &&
        !va.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: Tr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: Jf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Xf, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = ga;
R.createFactory = function (e) {
  var t = ga.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: qf, render: e };
};
R.isValidElement = Xi;
R.lazy = function (e) {
  return { $$typeof: td, _payload: { _status: -1, _result: e }, _init: od };
};
R.memo = function (e, t) {
  return { $$typeof: ed, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = ll.transition;
  ll.transition = {};
  try {
    e();
  } finally {
    ll.transition = t;
  }
};
R.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
R.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
R.useContext = function (e) {
  return pe.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
R.useId = function () {
  return pe.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return pe.current.useRef(e);
};
R.useState = function (e) {
  return pe.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return pe.current.useTransition();
};
R.version = "18.2.0";
ca.exports = R;
var g = ca.exports;
const O = Qf(g),
  fr = Wf({ __proto__: null, default: O }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud = g,
  sd = Symbol.for("react.element"),
  ad = Symbol.for("react.fragment"),
  cd = Object.prototype.hasOwnProperty,
  fd = ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ya(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) cd.call(t, r) && !dd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: sd,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: fd.current,
  };
}
Ql.Fragment = ad;
Ql.jsx = ya;
Ql.jsxs = ya;
aa.exports = Ql;
var v = aa.exports,
  Ko = {},
  wa = { exports: {} },
  _e = {},
  xa = { exports: {} },
  Sa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, j) {
    var $ = L.length;
    L.push(j);
    e: for (; 0 < $; ) {
      var D = ($ - 1) >>> 1,
        Y = L[D];
      if (0 < l(Y, j)) (L[D] = j), (L[$] = Y), ($ = D);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var j = L[0],
      $ = L.pop();
    if ($ !== j) {
      L[0] = $;
      e: for (var D = 0, Y = L.length, ge = Y >>> 1; D < ge; ) {
        var et = 2 * (D + 1) - 1,
          Un = L[et],
          tt = et + 1,
          At = L[tt];
        if (0 > l(Un, $))
          tt < Y && 0 > l(At, Un)
            ? ((L[D] = At), (L[tt] = $), (D = tt))
            : ((L[D] = Un), (L[et] = $), (D = et));
        else if (tt < Y && 0 > l(At, $)) (L[D] = At), (L[tt] = $), (D = tt);
        else break e;
      }
    }
    return j;
  }
  function l(L, j) {
    var $ = L.sortIndex - j.sortIndex;
    return $ !== 0 ? $ : L.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    h = null,
    m = 3,
    y = !1,
    w = !1,
    x = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(L) {
    for (var j = n(a); j !== null; ) {
      if (j.callback === null) r(a);
      else if (j.startTime <= L)
        r(a), (j.sortIndex = j.expirationTime), t(s, j);
      else break;
      j = n(a);
    }
  }
  function S(L) {
    if (((x = !1), d(L), !w))
      if (n(s) !== null) (w = !0), ht(E);
      else {
        var j = n(a);
        j !== null && Ue(S, j.startTime - L);
      }
  }
  function E(L, j) {
    (w = !1), x && ((x = !1), f(T), (T = -1)), (y = !0);
    var $ = m;
    try {
      for (
        d(j), h = n(s);
        h !== null && (!(h.expirationTime > j) || (L && !te()));

      ) {
        var D = h.callback;
        if (typeof D == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var Y = D(h.expirationTime <= j);
          (j = e.unstable_now()),
            typeof Y == "function" ? (h.callback = Y) : h === n(s) && r(s),
            d(j);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var ge = !0;
      else {
        var et = n(a);
        et !== null && Ue(S, et.startTime - j), (ge = !1);
      }
      return ge;
    } finally {
      (h = null), (m = $), (y = !1);
    }
  }
  var N = !1,
    P = null,
    T = -1,
    z = 5,
    M = -1;
  function te() {
    return !(e.unstable_now() - M < z);
  }
  function he() {
    if (P !== null) {
      var L = e.unstable_now();
      M = L;
      var j = !0;
      try {
        j = P(!0, L);
      } finally {
        j ? ve() : ((N = !1), (P = null));
      }
    } else N = !1;
  }
  var ve;
  if (typeof c == "function")
    ve = function () {
      c(he);
    };
  else if (typeof MessageChannel < "u") {
    var on = new MessageChannel(),
      un = on.port2;
    (on.port1.onmessage = he),
      (ve = function () {
        un.postMessage(null);
      });
  } else
    ve = function () {
      C(he, 0);
    };
  function ht(L) {
    (P = L), N || ((N = !0), ve());
  }
  function Ue(L, j) {
    T = C(function () {
      L(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), ht(E));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (z = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (L) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = m;
      }
      var $ = m;
      m = j;
      try {
        return L();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, j) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var $ = m;
      m = L;
      try {
        return j();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (L, j, $) {
      var D = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? D + $ : D))
          : ($ = D),
        L)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = $ + Y),
        (L = {
          id: p++,
          callback: j,
          priorityLevel: L,
          startTime: $,
          expirationTime: Y,
          sortIndex: -1,
        }),
        $ > D
          ? ((L.sortIndex = $),
            t(a, L),
            n(s) === null &&
              L === n(a) &&
              (x ? (f(T), (T = -1)) : (x = !0), Ue(S, $ - D)))
          : ((L.sortIndex = Y), t(s, L), w || y || ((w = !0), ht(E))),
        L
      );
    }),
    (e.unstable_shouldYield = te),
    (e.unstable_wrapCallback = function (L) {
      var j = m;
      return function () {
        var $ = m;
        m = j;
        try {
          return L.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(Sa);
xa.exports = Sa;
var pd = xa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ka = g,
  Pe = pd;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ea = new Set(),
  dr = {};
function nn(e, t) {
  Pn(e, t), Pn(e + "Capture", t);
}
function Pn(e, t) {
  for (dr[e] = t, e = 0; e < t.length; e++) Ea.add(t[e]);
}
var ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yo = Object.prototype.hasOwnProperty,
  md =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Zu = {},
  Xu = {};
function hd(e) {
  return Yo.call(Xu, e)
    ? !0
    : Yo.call(Zu, e)
      ? !1
      : md.test(e)
        ? (Xu[e] = !0)
        : ((Zu[e] = !0), !1);
}
function vd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function gd(e, t, n, r) {
  if (t === null || typeof t > "u" || vd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function me(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ji = /[\-:]([a-z])/g;
function qi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ji, qi);
    oe[t] = new me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ji, qi);
    oe[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ji, qi);
  oe[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bi(e, t, n, r) {
  var l = oe.hasOwnProperty(t) ? oe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (gd(t, n, l, r) && (n = null),
    r || l === null
      ? hd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mt = ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ar = Symbol.for("react.element"),
  an = Symbol.for("react.portal"),
  cn = Symbol.for("react.fragment"),
  eu = Symbol.for("react.strict_mode"),
  Go = Symbol.for("react.profiler"),
  Ca = Symbol.for("react.provider"),
  Na = Symbol.for("react.context"),
  tu = Symbol.for("react.forward_ref"),
  Zo = Symbol.for("react.suspense"),
  Xo = Symbol.for("react.suspense_list"),
  nu = Symbol.for("react.memo"),
  yt = Symbol.for("react.lazy"),
  La = Symbol.for("react.offscreen"),
  Ju = Symbol.iterator;
function Hn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ju && e[Ju]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  po;
function Jn(e) {
  if (po === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      po = (t && t[1]) || "";
    }
  return (
    `
` +
    po +
    e
  );
}
var mo = !1;
function ho(e, t) {
  if (!e || mo) return "";
  mo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (mo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Jn(e) : "";
}
function yd(e) {
  switch (e.tag) {
    case 5:
      return Jn(e.type);
    case 16:
      return Jn("Lazy");
    case 13:
      return Jn("Suspense");
    case 19:
      return Jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ho(e.type, !1)), e;
    case 11:
      return (e = ho(e.type.render, !1)), e;
    case 1:
      return (e = ho(e.type, !0)), e;
    default:
      return "";
  }
}
function Jo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cn:
      return "Fragment";
    case an:
      return "Portal";
    case Go:
      return "Profiler";
    case eu:
      return "StrictMode";
    case Zo:
      return "Suspense";
    case Xo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Na:
        return (e.displayName || "Context") + ".Consumer";
      case Ca:
        return (e._context.displayName || "Context") + ".Provider";
      case tu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case nu:
        return (
          (t = e.displayName || null), t !== null ? t : Jo(e.type) || "Memo"
        );
      case yt:
        (t = e._payload), (e = e._init);
        try {
          return Jo(e(t));
        } catch {}
    }
  return null;
}
function wd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Jo(t);
    case 8:
      return t === eu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Pa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function xd(e) {
  var t = Pa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ur(e) {
  e._valueTracker || (e._valueTracker = xd(e));
}
function _a(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Pa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function gl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qo(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ta(e, t) {
  (t = t.checked), t != null && bi(e, "checked", t, !1);
}
function bo(e, t) {
  Ta(e, t);
  var n = Rt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ei(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ei(e, t.type, Rt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function bu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ei(e, t, n) {
  (t !== "number" || gl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var qn = Array.isArray;
function Sn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ti(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function es(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (qn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rt(n) };
}
function ja(e, t) {
  var n = Rt(t.value),
    r = Rt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ts(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $a(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ni(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? $a(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Hr,
  Ma = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Hr = Hr || document.createElement("div"),
          Hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Hr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var nr = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
    strokeWidth: !0,
  },
  Sd = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function (e) {
  Sd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (nr[t] = nr[e]);
  });
});
function Oa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (nr.hasOwnProperty(e) && nr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ra(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Oa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var kd = K(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ri(e, t) {
  if (t) {
    if (kd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function li(e, t) {
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
var oi = null;
function ru(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ii = null,
  kn = null,
  En = null;
function ns(e) {
  if ((e = Mr(e))) {
    if (typeof ii != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Xl(t)), ii(e.stateNode, e.type, t));
  }
}
function Fa(e) {
  kn ? (En ? En.push(e) : (En = [e])) : (kn = e);
}
function za() {
  if (kn) {
    var e = kn,
      t = En;
    if (((En = kn = null), ns(e), t)) for (e = 0; e < t.length; e++) ns(t[e]);
  }
}
function Da(e, t) {
  return e(t);
}
function Ia() {}
var vo = !1;
function Aa(e, t, n) {
  if (vo) return e(t, n);
  vo = !0;
  try {
    return Da(e, t, n);
  } finally {
    (vo = !1), (kn !== null || En !== null) && (Ia(), za());
  }
}
function mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xl(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var ui = !1;
if (ct)
  try {
    var Vn = {};
    Object.defineProperty(Vn, "passive", {
      get: function () {
        ui = !0;
      },
    }),
      window.addEventListener("test", Vn, Vn),
      window.removeEventListener("test", Vn, Vn);
  } catch {
    ui = !1;
  }
function Ed(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var rr = !1,
  yl = null,
  wl = !1,
  si = null,
  Cd = {
    onError: function (e) {
      (rr = !0), (yl = e);
    },
  };
function Nd(e, t, n, r, l, o, i, u, s) {
  (rr = !1), (yl = null), Ed.apply(Cd, arguments);
}
function Ld(e, t, n, r, l, o, i, u, s) {
  if ((Nd.apply(this, arguments), rr)) {
    if (rr) {
      var a = yl;
      (rr = !1), (yl = null);
    } else throw Error(k(198));
    wl || ((wl = !0), (si = a));
  }
}
function rn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ua(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function rs(e) {
  if (rn(e) !== e) throw Error(k(188));
}
function Pd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = rn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return rs(l), e;
        if (o === r) return rs(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Ha(e) {
  return (e = Pd(e)), e !== null ? Va(e) : null;
}
function Va(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Va(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ba = Pe.unstable_scheduleCallback,
  ls = Pe.unstable_cancelCallback,
  _d = Pe.unstable_shouldYield,
  Td = Pe.unstable_requestPaint,
  Z = Pe.unstable_now,
  jd = Pe.unstable_getCurrentPriorityLevel,
  lu = Pe.unstable_ImmediatePriority,
  Wa = Pe.unstable_UserBlockingPriority,
  xl = Pe.unstable_NormalPriority,
  $d = Pe.unstable_LowPriority,
  Qa = Pe.unstable_IdlePriority,
  Kl = null,
  qe = null;
function Md(e) {
  if (qe && typeof qe.onCommitFiberRoot == "function")
    try {
      qe.onCommitFiberRoot(Kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : Fd,
  Od = Math.log,
  Rd = Math.LN2;
function Fd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Od(e) / Rd) | 0)) | 0;
}
var Vr = 64,
  Br = 4194304;
function bn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Sl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = bn(u)) : ((o &= i), o !== 0 && (r = bn(o)));
  } else (i = n & ~l), i !== 0 ? (r = bn(i)) : o !== 0 && (r = bn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Qe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function zd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Dd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Qe(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = zd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function ai(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ka() {
  var e = Vr;
  return (Vr <<= 1), !(Vr & 4194240) && (Vr = 64), e;
}
function go(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function jr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n);
}
function Id(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Qe(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ou(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function Ya(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ga,
  iu,
  Za,
  Xa,
  Ja,
  ci = !1,
  Wr = [],
  Lt = null,
  Pt = null,
  _t = null,
  hr = new Map(),
  vr = new Map(),
  xt = [],
  Ad =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function os(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lt = null;
      break;
    case "dragenter":
    case "dragleave":
      Pt = null;
      break;
    case "mouseover":
    case "mouseout":
      _t = null;
      break;
    case "pointerover":
    case "pointerout":
      hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vr.delete(t.pointerId);
  }
}
function Bn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Mr(t)), t !== null && iu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Ud(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Lt = Bn(Lt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Pt = Bn(Pt, e, t, n, r, l)), !0;
    case "mouseover":
      return (_t = Bn(_t, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return hr.set(o, Bn(hr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), vr.set(o, Bn(vr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function qa(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = rn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ua(n)), t !== null)) {
          (e.blockedOn = t),
            Ja(e.priority, function () {
              Za(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ol(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (oi = r), n.target.dispatchEvent(r), (oi = null);
    } else return (t = Mr(n)), t !== null && iu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function is(e, t, n) {
  ol(e) && n.delete(t);
}
function Hd() {
  (ci = !1),
    Lt !== null && ol(Lt) && (Lt = null),
    Pt !== null && ol(Pt) && (Pt = null),
    _t !== null && ol(_t) && (_t = null),
    hr.forEach(is),
    vr.forEach(is);
}
function Wn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ci ||
      ((ci = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, Hd)));
}
function gr(e) {
  function t(l) {
    return Wn(l, e);
  }
  if (0 < Wr.length) {
    Wn(Wr[0], e);
    for (var n = 1; n < Wr.length; n++) {
      var r = Wr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Lt !== null && Wn(Lt, e),
      Pt !== null && Wn(Pt, e),
      _t !== null && Wn(_t, e),
      hr.forEach(t),
      vr.forEach(t),
      n = 0;
    n < xt.length;
    n++
  )
    (r = xt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xt.length && ((n = xt[0]), n.blockedOn === null); )
    qa(n), n.blockedOn === null && xt.shift();
}
var Cn = mt.ReactCurrentBatchConfig,
  kl = !0;
function Vd(e, t, n, r) {
  var l = I,
    o = Cn.transition;
  Cn.transition = null;
  try {
    (I = 1), uu(e, t, n, r);
  } finally {
    (I = l), (Cn.transition = o);
  }
}
function Bd(e, t, n, r) {
  var l = I,
    o = Cn.transition;
  Cn.transition = null;
  try {
    (I = 4), uu(e, t, n, r);
  } finally {
    (I = l), (Cn.transition = o);
  }
}
function uu(e, t, n, r) {
  if (kl) {
    var l = fi(e, t, n, r);
    if (l === null) Po(e, t, r, El, n), os(e, r);
    else if (Ud(l, e, t, n, r)) r.stopPropagation();
    else if ((os(e, r), t & 4 && -1 < Ad.indexOf(e))) {
      for (; l !== null; ) {
        var o = Mr(l);
        if (
          (o !== null && Ga(o),
          (o = fi(e, t, n, r)),
          o === null && Po(e, t, r, El, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Po(e, t, r, null, n);
  }
}
var El = null;
function fi(e, t, n, r) {
  if (((El = null), (e = ru(r)), (e = Wt(e)), e !== null))
    if (((t = rn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ua(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (El = e), null;
}
function ba(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (jd()) {
        case lu:
          return 1;
        case Wa:
          return 4;
        case xl:
        case $d:
          return 16;
        case Qa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null,
  su = null,
  il = null;
function ec() {
  if (il) return il;
  var e,
    t = su,
    n = t.length,
    r,
    l = "value" in Et ? Et.value : Et.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (il = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ul(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Qr() {
  return !0;
}
function us() {
  return !1;
}
function Te(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Qr
        : us),
      (this.isPropagationStopped = us),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Qr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Qr));
      },
      persist: function () {},
      isPersistent: Qr,
    }),
    t
  );
}
var zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  au = Te(zn),
  $r = K({}, zn, { view: 0, detail: 0 }),
  Wd = Te($r),
  yo,
  wo,
  Qn,
  Yl = K({}, $r, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: cu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Qn &&
            (Qn && e.type === "mousemove"
              ? ((yo = e.screenX - Qn.screenX), (wo = e.screenY - Qn.screenY))
              : (wo = yo = 0),
            (Qn = e)),
          yo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : wo;
    },
  }),
  ss = Te(Yl),
  Qd = K({}, Yl, { dataTransfer: 0 }),
  Kd = Te(Qd),
  Yd = K({}, $r, { relatedTarget: 0 }),
  xo = Te(Yd),
  Gd = K({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zd = Te(Gd),
  Xd = K({}, zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jd = Te(Xd),
  qd = K({}, zn, { data: 0 }),
  as = Te(qd),
  bd = {
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
    MozPrintableKey: "Unidentified",
  },
  e0 = {
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
    224: "Meta",
  },
  t0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function n0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = t0[e]) ? !!t[e] : !1;
}
function cu() {
  return n0;
}
var r0 = K({}, $r, {
    key: function (e) {
      if (e.key) {
        var t = bd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ul(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? e0[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cu,
    charCode: function (e) {
      return e.type === "keypress" ? ul(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ul(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  l0 = Te(r0),
  o0 = K({}, Yl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  cs = Te(o0),
  i0 = K({}, $r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cu,
  }),
  u0 = Te(i0),
  s0 = K({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  a0 = Te(s0),
  c0 = K({}, Yl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  f0 = Te(c0),
  d0 = [9, 13, 27, 32],
  fu = ct && "CompositionEvent" in window,
  lr = null;
ct && "documentMode" in document && (lr = document.documentMode);
var p0 = ct && "TextEvent" in window && !lr,
  tc = ct && (!fu || (lr && 8 < lr && 11 >= lr)),
  fs = " ",
  ds = !1;
function nc(e, t) {
  switch (e) {
    case "keyup":
      return d0.indexOf(t.keyCode) !== -1;
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
function rc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var fn = !1;
function m0(e, t) {
  switch (e) {
    case "compositionend":
      return rc(t);
    case "keypress":
      return t.which !== 32 ? null : ((ds = !0), fs);
    case "textInput":
      return (e = t.data), e === fs && ds ? null : e;
    default:
      return null;
  }
}
function h0(e, t) {
  if (fn)
    return e === "compositionend" || (!fu && nc(e, t))
      ? ((e = ec()), (il = su = Et = null), (fn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return tc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var v0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ps(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!v0[e.type] : t === "textarea";
}
function lc(e, t, n, r) {
  Fa(r),
    (t = Cl(t, "onChange")),
    0 < t.length &&
      ((n = new au("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var or = null,
  yr = null;
function g0(e) {
  hc(e, 0);
}
function Gl(e) {
  var t = mn(e);
  if (_a(t)) return e;
}
function y0(e, t) {
  if (e === "change") return t;
}
var oc = !1;
if (ct) {
  var So;
  if (ct) {
    var ko = "oninput" in document;
    if (!ko) {
      var ms = document.createElement("div");
      ms.setAttribute("oninput", "return;"),
        (ko = typeof ms.oninput == "function");
    }
    So = ko;
  } else So = !1;
  oc = So && (!document.documentMode || 9 < document.documentMode);
}
function hs() {
  or && (or.detachEvent("onpropertychange", ic), (yr = or = null));
}
function ic(e) {
  if (e.propertyName === "value" && Gl(yr)) {
    var t = [];
    lc(t, yr, e, ru(e)), Aa(g0, t);
  }
}
function w0(e, t, n) {
  e === "focusin"
    ? (hs(), (or = t), (yr = n), or.attachEvent("onpropertychange", ic))
    : e === "focusout" && hs();
}
function x0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Gl(yr);
}
function S0(e, t) {
  if (e === "click") return Gl(t);
}
function k0(e, t) {
  if (e === "input" || e === "change") return Gl(t);
}
function E0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == "function" ? Object.is : E0;
function wr(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Yo.call(t, l) || !Ye(e[l], t[l])) return !1;
  }
  return !0;
}
function vs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gs(e, t) {
  var n = vs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = vs(n);
  }
}
function uc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? uc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function sc() {
  for (var e = window, t = gl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = gl(e.document);
  }
  return t;
}
function du(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function C0(e) {
  var t = sc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    uc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && du(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = gs(n, o));
        var i = gs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var N0 = ct && "documentMode" in document && 11 >= document.documentMode,
  dn = null,
  di = null,
  ir = null,
  pi = !1;
function ys(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pi ||
    dn == null ||
    dn !== gl(r) ||
    ((r = dn),
    "selectionStart" in r && du(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ir && wr(ir, r)) ||
      ((ir = r),
      (r = Cl(di, "onSelect")),
      0 < r.length &&
        ((t = new au("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = dn))));
}
function Kr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var pn = {
    animationend: Kr("Animation", "AnimationEnd"),
    animationiteration: Kr("Animation", "AnimationIteration"),
    animationstart: Kr("Animation", "AnimationStart"),
    transitionend: Kr("Transition", "TransitionEnd"),
  },
  Eo = {},
  ac = {};
ct &&
  ((ac = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete pn.animationend.animation,
    delete pn.animationiteration.animation,
    delete pn.animationstart.animation),
  "TransitionEvent" in window || delete pn.transitionend.transition);
function Zl(e) {
  if (Eo[e]) return Eo[e];
  if (!pn[e]) return e;
  var t = pn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ac) return (Eo[e] = t[n]);
  return e;
}
var cc = Zl("animationend"),
  fc = Zl("animationiteration"),
  dc = Zl("animationstart"),
  pc = Zl("transitionend"),
  mc = new Map(),
  ws =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function zt(e, t) {
  mc.set(e, t), nn(t, [e]);
}
for (var Co = 0; Co < ws.length; Co++) {
  var No = ws[Co],
    L0 = No.toLowerCase(),
    P0 = No[0].toUpperCase() + No.slice(1);
  zt(L0, "on" + P0);
}
zt(cc, "onAnimationEnd");
zt(fc, "onAnimationIteration");
zt(dc, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(pc, "onTransitionEnd");
Pn("onMouseEnter", ["mouseout", "mouseover"]);
Pn("onMouseLeave", ["mouseout", "mouseover"]);
Pn("onPointerEnter", ["pointerout", "pointerover"]);
Pn("onPointerLeave", ["pointerout", "pointerover"]);
nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var er =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  _0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function xs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ld(r, t, void 0, e), (e.currentTarget = null);
}
function hc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          xs(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          xs(l, u, a), (o = s);
        }
    }
  }
  if (wl) throw ((e = si), (wl = !1), (si = null), e);
}
function U(e, t) {
  var n = t[yi];
  n === void 0 && (n = t[yi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (vc(t, e, 2, !1), n.add(r));
}
function Lo(e, t, n) {
  var r = 0;
  t && (r |= 4), vc(n, e, r, t);
}
var Yr = "_reactListening" + Math.random().toString(36).slice(2);
function xr(e) {
  if (!e[Yr]) {
    (e[Yr] = !0),
      Ea.forEach(function (n) {
        n !== "selectionchange" && (_0.has(n) || Lo(n, !1, e), Lo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yr] || ((t[Yr] = !0), Lo("selectionchange", !1, t));
  }
}
function vc(e, t, n, r) {
  switch (ba(t)) {
    case 1:
      var l = Vd;
      break;
    case 4:
      l = Bd;
      break;
    default:
      l = uu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ui ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Po(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Wt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Aa(function () {
    var a = o,
      p = ru(n),
      h = [];
    e: {
      var m = mc.get(e);
      if (m !== void 0) {
        var y = au,
          w = e;
        switch (e) {
          case "keypress":
            if (ul(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = l0;
            break;
          case "focusin":
            (w = "focus"), (y = xo);
            break;
          case "focusout":
            (w = "blur"), (y = xo);
            break;
          case "beforeblur":
          case "afterblur":
            y = xo;
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
            y = ss;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Kd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = u0;
            break;
          case cc:
          case fc:
          case dc:
            y = Zd;
            break;
          case pc:
            y = a0;
            break;
          case "scroll":
            y = Wd;
            break;
          case "wheel":
            y = f0;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = cs;
        }
        var x = (t & 4) !== 0,
          C = !x && e === "scroll",
          f = x ? (m !== null ? m + "Capture" : null) : m;
        x = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var S = d.stateNode;
          if (
            (d.tag === 5 &&
              S !== null &&
              ((d = S),
              f !== null && ((S = mr(c, f)), S != null && x.push(Sr(c, S, d)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < x.length &&
          ((m = new y(m, w, null, n, p)), h.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== oi &&
            (w = n.relatedTarget || n.fromElement) &&
            (Wt(w) || w[ft]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = a),
              (w = w ? Wt(w) : null),
              w !== null &&
                ((C = rn(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = a)),
          y !== w)
        ) {
          if (
            ((x = ss),
            (S = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = cs),
              (S = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (C = y == null ? m : mn(y)),
            (d = w == null ? m : mn(w)),
            (m = new x(S, c + "leave", y, n, p)),
            (m.target = C),
            (m.relatedTarget = d),
            (S = null),
            Wt(p) === a &&
              ((x = new x(f, c + "enter", w, n, p)),
              (x.target = d),
              (x.relatedTarget = C),
              (S = x)),
            (C = S),
            y && w)
          )
            t: {
              for (x = y, f = w, c = 0, d = x; d; d = sn(d)) c++;
              for (d = 0, S = f; S; S = sn(S)) d++;
              for (; 0 < c - d; ) (x = sn(x)), c--;
              for (; 0 < d - c; ) (f = sn(f)), d--;
              for (; c--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                (x = sn(x)), (f = sn(f));
              }
              x = null;
            }
          else x = null;
          y !== null && Ss(h, m, y, x, !1),
            w !== null && C !== null && Ss(h, C, w, x, !0);
        }
      }
      e: {
        if (
          ((m = a ? mn(a) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var E = y0;
        else if (ps(m))
          if (oc) E = k0;
          else {
            E = x0;
            var N = w0;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = S0);
        if (E && (E = E(e, a))) {
          lc(h, E, n, p);
          break e;
        }
        N && N(e, m, a),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            ei(m, "number", m.value);
      }
      switch (((N = a ? mn(a) : window), e)) {
        case "focusin":
          (ps(N) || N.contentEditable === "true") &&
            ((dn = N), (di = a), (ir = null));
          break;
        case "focusout":
          ir = di = dn = null;
          break;
        case "mousedown":
          pi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pi = !1), ys(h, n, p);
          break;
        case "selectionchange":
          if (N0) break;
        case "keydown":
        case "keyup":
          ys(h, n, p);
      }
      var P;
      if (fu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        fn
          ? nc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (tc &&
          n.locale !== "ko" &&
          (fn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && fn && (P = ec())
            : ((Et = p),
              (su = "value" in Et ? Et.value : Et.textContent),
              (fn = !0))),
        (N = Cl(a, T)),
        0 < N.length &&
          ((T = new as(T, e, null, n, p)),
          h.push({ event: T, listeners: N }),
          P ? (T.data = P) : ((P = rc(n)), P !== null && (T.data = P)))),
        (P = p0 ? m0(e, n) : h0(e, n)) &&
          ((a = Cl(a, "onBeforeInput")),
          0 < a.length &&
            ((p = new as("onBeforeInput", "beforeinput", null, n, p)),
            h.push({ event: p, listeners: a }),
            (p.data = P)));
    }
    hc(h, t);
  });
}
function Sr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Cl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = mr(e, n)),
      o != null && r.unshift(Sr(e, o, l)),
      (o = mr(e, t)),
      o != null && r.push(Sr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function sn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ss(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = mr(n, o)), s != null && i.unshift(Sr(n, s, u)))
        : l || ((s = mr(n, o)), s != null && i.push(Sr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var T0 = /\r\n?/g,
  j0 = /\u0000|\uFFFD/g;
function ks(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      T0,
      `
`,
    )
    .replace(j0, "");
}
function Gr(e, t, n) {
  if (((t = ks(t)), ks(e) !== t && n)) throw Error(k(425));
}
function Nl() {}
var mi = null,
  hi = null;
function vi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var gi = typeof setTimeout == "function" ? setTimeout : void 0,
  $0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Es = typeof Promise == "function" ? Promise : void 0,
  M0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Es < "u"
        ? function (e) {
            return Es.resolve(null).then(e).catch(O0);
          }
        : gi;
function O0(e) {
  setTimeout(function () {
    throw e;
  });
}
function _o(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), gr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  gr(t);
}
function Tt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Cs(e) {
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
var Dn = Math.random().toString(36).slice(2),
  Je = "__reactFiber$" + Dn,
  kr = "__reactProps$" + Dn,
  ft = "__reactContainer$" + Dn,
  yi = "__reactEvents$" + Dn,
  R0 = "__reactListeners$" + Dn,
  F0 = "__reactHandles$" + Dn;
function Wt(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ft] || n[Je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Cs(e); e !== null; ) {
          if ((n = e[Je])) return n;
          e = Cs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Mr(e) {
  return (
    (e = e[Je] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Xl(e) {
  return e[kr] || null;
}
var wi = [],
  hn = -1;
function Dt(e) {
  return { current: e };
}
function H(e) {
  0 > hn || ((e.current = wi[hn]), (wi[hn] = null), hn--);
}
function A(e, t) {
  hn++, (wi[hn] = e.current), (e.current = t);
}
var Ft = {},
  ce = Dt(Ft),
  xe = Dt(!1),
  Jt = Ft;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Se(e) {
  return (e = e.childContextTypes), e != null;
}
function Ll() {
  H(xe), H(ce);
}
function Ns(e, t, n) {
  if (ce.current !== Ft) throw Error(k(168));
  A(ce, t), A(xe, n);
}
function gc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, wd(e) || "Unknown", l));
  return K({}, n, r);
}
function Pl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
    (Jt = ce.current),
    A(ce, e),
    A(xe, xe.current),
    !0
  );
}
function Ls(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = gc(e, t, Jt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(xe),
      H(ce),
      A(ce, e))
    : H(xe),
    A(xe, n);
}
var lt = null,
  Jl = !1,
  To = !1;
function yc(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function z0(e) {
  (Jl = !0), yc(e);
}
function It() {
  if (!To && lt !== null) {
    To = !0;
    var e = 0,
      t = I;
    try {
      var n = lt;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (lt = null), (Jl = !1);
    } catch (l) {
      throw (lt !== null && (lt = lt.slice(e + 1)), Ba(lu, It), l);
    } finally {
      (I = t), (To = !1);
    }
  }
  return null;
}
var vn = [],
  gn = 0,
  _l = null,
  Tl = 0,
  Me = [],
  Oe = 0,
  qt = null,
  ot = 1,
  it = "";
function Ht(e, t) {
  (vn[gn++] = Tl), (vn[gn++] = _l), (_l = e), (Tl = t);
}
function wc(e, t, n) {
  (Me[Oe++] = ot), (Me[Oe++] = it), (Me[Oe++] = qt), (qt = e);
  var r = ot;
  e = it;
  var l = 32 - Qe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Qe(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (ot = (1 << (32 - Qe(t) + l)) | (n << l) | r),
      (it = o + e);
  } else (ot = (1 << o) | (n << l) | r), (it = e);
}
function pu(e) {
  e.return !== null && (Ht(e, 1), wc(e, 1, 0));
}
function mu(e) {
  for (; e === _l; )
    (_l = vn[--gn]), (vn[gn] = null), (Tl = vn[--gn]), (vn[gn] = null);
  for (; e === qt; )
    (qt = Me[--Oe]),
      (Me[Oe] = null),
      (it = Me[--Oe]),
      (Me[Oe] = null),
      (ot = Me[--Oe]),
      (Me[Oe] = null);
}
var Le = null,
  Ne = null,
  V = !1,
  We = null;
function xc(e, t) {
  var n = Re(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ps(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Le = e), (Ne = Tt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qt !== null ? { id: ot, overflow: it } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Re(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Le = e),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Si(e) {
  if (V) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!Ps(e, t)) {
        if (xi(e)) throw Error(k(418));
        t = Tt(n.nextSibling);
        var r = Le;
        t && Ps(e, t)
          ? xc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (Le = e));
      }
    } else {
      if (xi(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (Le = e);
    }
  }
}
function _s(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function Zr(e) {
  if (e !== Le) return !1;
  if (!V) return _s(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !vi(e.type, e.memoizedProps))),
    t && (t = Ne))
  ) {
    if (xi(e)) throw (Sc(), Error(k(418)));
    for (; t; ) xc(e, t), (t = Tt(t.nextSibling));
  }
  if ((_s(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = Tt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = Le ? Tt(e.stateNode.nextSibling) : null;
  return !0;
}
function Sc() {
  for (var e = Ne; e; ) e = Tt(e.nextSibling);
}
function Tn() {
  (Ne = Le = null), (V = !1);
}
function hu(e) {
  We === null ? (We = [e]) : We.push(e);
}
var D0 = mt.ReactCurrentBatchConfig;
function Ve(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var jl = Dt(null),
  $l = null,
  yn = null,
  vu = null;
function gu() {
  vu = yn = $l = null;
}
function yu(e) {
  var t = jl.current;
  H(jl), (e._currentValue = t);
}
function ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Nn(e, t) {
  ($l = e),
    (vu = yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (we = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (vu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yn === null)) {
      if ($l === null) throw Error(k(308));
      (yn = e), ($l.dependencies = { lanes: 0, firstContext: e });
    } else yn = yn.next = e;
  return t;
}
var Qt = null;
function wu(e) {
  Qt === null ? (Qt = [e]) : Qt.push(e);
}
function kc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), wu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    dt(e, r)
  );
}
function dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var wt = !1;
function xu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ec(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      dt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), wu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    dt(e, n)
  );
}
function sl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ou(e, n);
  }
}
function Ts(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ml(e, t, n, r) {
  var l = e.updateQueue;
  wt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (p = a = s = null), (u = o);
    do {
      var m = u.lane,
        y = u.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            x = u;
          switch (((m = t), (y = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                h = w.call(y, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (m = typeof w == "function" ? w.call(y, h, m) : w),
                m == null)
              )
                break e;
              h = K({}, h, m);
              break e;
            case 2:
              wt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = y), (s = h)) : (p = p.next = y),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (en |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function js(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var Cc = new ka.Component().refs;
function Ei(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ql = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? rn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = Mt(e),
      o = ut(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = jt(e, o, l)),
      t !== null && (Ke(t, e, l, r), sl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = Mt(e),
      o = ut(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = jt(e, o, l)),
      t !== null && (Ke(t, e, l, r), sl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = Mt(e),
      l = ut(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = jt(e, l, r)),
      t !== null && (Ke(t, e, r, n), sl(t, e, r));
  },
};
function $s(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !wr(n, r) || !wr(l, o)
        : !0
  );
}
function Nc(e, t, n) {
  var r = !1,
    l = Ft,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ze(o))
      : ((l = Se(t) ? Jt : ce.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? _n(e, l) : Ft)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ql),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ms(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ql.enqueueReplaceState(t, t.state, null);
}
function Ci(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Cc), xu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = ze(o))
    : ((o = Se(t) ? Jt : ce.current), (l.context = _n(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ei(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ql.enqueueReplaceState(l, l.state, null),
      Ml(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Kn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Cc && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Xr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Os(e) {
  var t = e._init;
  return t(e._payload);
}
function Lc(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = Ot(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, S) {
    return c === null || c.tag !== 6
      ? ((c = zo(d, f.mode, S)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, S) {
    var E = d.type;
    return E === cn
      ? p(f, c, d.props.children, S, d.key)
      : c !== null &&
          (c.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === yt &&
              Os(E) === c.type))
        ? ((S = l(c, d.props)), (S.ref = Kn(f, c, d)), (S.return = f), S)
        : ((S = ml(d.type, d.key, d.props, null, f.mode, S)),
          (S.ref = Kn(f, c, d)),
          (S.return = f),
          S);
  }
  function a(f, c, d, S) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = Do(d, f.mode, S)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function p(f, c, d, S, E) {
    return c === null || c.tag !== 7
      ? ((c = Zt(d, f.mode, S, E)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function h(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = zo("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Ar:
          return (
            (d = ml(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = Kn(f, null, c)),
            (d.return = f),
            d
          );
        case an:
          return (c = Do(c, f.mode, d)), (c.return = f), c;
        case yt:
          var S = c._init;
          return h(f, S(c._payload), d);
      }
      if (qn(c) || Hn(c))
        return (c = Zt(c, f.mode, d, null)), (c.return = f), c;
      Xr(f, c);
    }
    return null;
  }
  function m(f, c, d, S) {
    var E = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, c, "" + d, S);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Ar:
          return d.key === E ? s(f, c, d, S) : null;
        case an:
          return d.key === E ? a(f, c, d, S) : null;
        case yt:
          return (E = d._init), m(f, c, E(d._payload), S);
      }
      if (qn(d) || Hn(d)) return E !== null ? null : p(f, c, d, S, null);
      Xr(f, d);
    }
    return null;
  }
  function y(f, c, d, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (f = f.get(d) || null), u(c, f, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ar:
          return (f = f.get(S.key === null ? d : S.key) || null), s(c, f, S, E);
        case an:
          return (f = f.get(S.key === null ? d : S.key) || null), a(c, f, S, E);
        case yt:
          var N = S._init;
          return y(f, c, d, N(S._payload), E);
      }
      if (qn(S) || Hn(S)) return (f = f.get(d) || null), p(c, f, S, E, null);
      Xr(c, S);
    }
    return null;
  }
  function w(f, c, d, S) {
    for (
      var E = null, N = null, P = c, T = (c = 0), z = null;
      P !== null && T < d.length;
      T++
    ) {
      P.index > T ? ((z = P), (P = null)) : (z = P.sibling);
      var M = m(f, P, d[T], S);
      if (M === null) {
        P === null && (P = z);
        break;
      }
      e && P && M.alternate === null && t(f, P),
        (c = o(M, c, T)),
        N === null ? (E = M) : (N.sibling = M),
        (N = M),
        (P = z);
    }
    if (T === d.length) return n(f, P), V && Ht(f, T), E;
    if (P === null) {
      for (; T < d.length; T++)
        (P = h(f, d[T], S)),
          P !== null &&
            ((c = o(P, c, T)), N === null ? (E = P) : (N.sibling = P), (N = P));
      return V && Ht(f, T), E;
    }
    for (P = r(f, P); T < d.length; T++)
      (z = y(P, f, T, d[T], S)),
        z !== null &&
          (e && z.alternate !== null && P.delete(z.key === null ? T : z.key),
          (c = o(z, c, T)),
          N === null ? (E = z) : (N.sibling = z),
          (N = z));
    return (
      e &&
        P.forEach(function (te) {
          return t(f, te);
        }),
      V && Ht(f, T),
      E
    );
  }
  function x(f, c, d, S) {
    var E = Hn(d);
    if (typeof E != "function") throw Error(k(150));
    if (((d = E.call(d)), d == null)) throw Error(k(151));
    for (
      var N = (E = null), P = c, T = (c = 0), z = null, M = d.next();
      P !== null && !M.done;
      T++, M = d.next()
    ) {
      P.index > T ? ((z = P), (P = null)) : (z = P.sibling);
      var te = m(f, P, M.value, S);
      if (te === null) {
        P === null && (P = z);
        break;
      }
      e && P && te.alternate === null && t(f, P),
        (c = o(te, c, T)),
        N === null ? (E = te) : (N.sibling = te),
        (N = te),
        (P = z);
    }
    if (M.done) return n(f, P), V && Ht(f, T), E;
    if (P === null) {
      for (; !M.done; T++, M = d.next())
        (M = h(f, M.value, S)),
          M !== null &&
            ((c = o(M, c, T)), N === null ? (E = M) : (N.sibling = M), (N = M));
      return V && Ht(f, T), E;
    }
    for (P = r(f, P); !M.done; T++, M = d.next())
      (M = y(P, f, T, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? T : M.key),
          (c = o(M, c, T)),
          N === null ? (E = M) : (N.sibling = M),
          (N = M));
    return (
      e &&
        P.forEach(function (he) {
          return t(f, he);
        }),
      V && Ht(f, T),
      E
    );
  }
  function C(f, c, d, S) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === cn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case Ar:
          e: {
            for (var E = d.key, N = c; N !== null; ) {
              if (N.key === E) {
                if (((E = d.type), E === cn)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (c = l(N, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  N.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === yt &&
                    Os(E) === N.type)
                ) {
                  n(f, N.sibling),
                    (c = l(N, d.props)),
                    (c.ref = Kn(f, N, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === cn
              ? ((c = Zt(d.props.children, f.mode, S, d.key)),
                (c.return = f),
                (f = c))
              : ((S = ml(d.type, d.key, d.props, null, f.mode, S)),
                (S.ref = Kn(f, c, d)),
                (S.return = f),
                (f = S));
          }
          return i(f);
        case an:
          e: {
            for (N = d.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Do(d, f.mode, S)), (c.return = f), (f = c);
          }
          return i(f);
        case yt:
          return (N = d._init), C(f, c, N(d._payload), S);
      }
      if (qn(d)) return w(f, c, d, S);
      if (Hn(d)) return x(f, c, d, S);
      Xr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = zo(d, f.mode, S)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return C;
}
var jn = Lc(!0),
  Pc = Lc(!1),
  Or = {},
  be = Dt(Or),
  Er = Dt(Or),
  Cr = Dt(Or);
function Kt(e) {
  if (e === Or) throw Error(k(174));
  return e;
}
function Su(e, t) {
  switch ((A(Cr, t), A(Er, e), A(be, Or), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ni(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ni(t, e));
  }
  H(be), A(be, t);
}
function $n() {
  H(be), H(Er), H(Cr);
}
function _c(e) {
  Kt(Cr.current);
  var t = Kt(be.current),
    n = ni(t, e.type);
  t !== n && (A(Er, e), A(be, n));
}
function ku(e) {
  Er.current === e && (H(be), H(Er));
}
var W = Dt(0);
function Ol(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var jo = [];
function Eu() {
  for (var e = 0; e < jo.length; e++)
    jo[e]._workInProgressVersionPrimary = null;
  jo.length = 0;
}
var al = mt.ReactCurrentDispatcher,
  $o = mt.ReactCurrentBatchConfig,
  bt = 0,
  Q = null,
  J = null,
  b = null,
  Rl = !1,
  ur = !1,
  Nr = 0,
  I0 = 0;
function ie() {
  throw Error(k(321));
}
function Cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function Nu(e, t, n, r, l, o) {
  if (
    ((bt = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (al.current = e === null || e.memoizedState === null ? V0 : B0),
    (e = n(r, l)),
    ur)
  ) {
    o = 0;
    do {
      if (((ur = !1), (Nr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (b = J = null),
        (t.updateQueue = null),
        (al.current = W0),
        (e = n(r, l));
    } while (ur);
  }
  if (
    ((al.current = Fl),
    (t = J !== null && J.next !== null),
    (bt = 0),
    (b = J = Q = null),
    (Rl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Lu() {
  var e = Nr !== 0;
  return (Nr = 0), e;
}
function Xe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (Q.memoizedState = b = e) : (b = b.next = e), b;
}
function De() {
  if (J === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = b === null ? Q.memoizedState : b.next;
  if (t !== null) (b = t), (J = e);
  else {
    if (e === null) throw Error(k(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      b === null ? (Q.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function Lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Mo(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var p = a.lane;
      if ((bt & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
          (Q.lanes |= p),
          (en |= p);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Ye(r, t.memoizedState) || (we = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Q.lanes |= o), (en |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Oo(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ye(o, t.memoizedState) || (we = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Tc() {}
function jc(e, t) {
  var n = Q,
    r = De(),
    l = t(),
    o = !Ye(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (we = !0)),
    (r = r.queue),
    Pu(Oc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Pr(9, Mc.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(k(349));
    bt & 30 || $c(n, t, l);
  }
  return l;
}
function $c(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Mc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Rc(t) && Fc(e);
}
function Oc(e, t, n) {
  return n(function () {
    Rc(t) && Fc(e);
  });
}
function Rc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function Fc(e) {
  var t = dt(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function Rs(e) {
  var t = Xe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Lr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = H0.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function Pr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function zc() {
  return De().memoizedState;
}
function cl(e, t, n, r) {
  var l = Xe();
  (Q.flags |= e),
    (l.memoizedState = Pr(1 | t, n, void 0, r === void 0 ? null : r));
}
function bl(e, t, n, r) {
  var l = De();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (((o = i.destroy), r !== null && Cu(r, i.deps))) {
      l.memoizedState = Pr(t, n, o, r);
      return;
    }
  }
  (Q.flags |= e), (l.memoizedState = Pr(1 | t, n, o, r));
}
function Fs(e, t) {
  return cl(8390656, 8, e, t);
}
function Pu(e, t) {
  return bl(2048, 8, e, t);
}
function Dc(e, t) {
  return bl(4, 2, e, t);
}
function Ic(e, t) {
  return bl(4, 4, e, t);
}
function Ac(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Uc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bl(4, 4, Ac.bind(null, t, e), n)
  );
}
function _u() {}
function Hc(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Vc(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Bc(e, t, n) {
  return bt & 21
    ? (Ye(n, t) || ((n = Ka()), (Q.lanes |= n), (en |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = n));
}
function A0(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $o.transition;
  $o.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), ($o.transition = r);
  }
}
function Wc() {
  return De().memoizedState;
}
function U0(e, t, n) {
  var r = Mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qc(e))
  )
    Kc(t, n);
  else if (((n = kc(e, t, n, r)), n !== null)) {
    var l = de();
    Ke(n, e, r, l), Yc(n, t, r);
  }
}
function H0(e, t, n) {
  var r = Mt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qc(e)) Kc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ye(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), wu(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = kc(e, t, l, r)),
      n !== null && ((l = de()), Ke(n, e, r, l), Yc(n, t, r));
  }
}
function Qc(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function Kc(e, t) {
  ur = Rl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Yc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ou(e, n);
  }
}
var Fl = {
    readContext: ze,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  V0 = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Xe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: Fs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        cl(4194308, 4, Ac.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return cl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return cl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Xe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Xe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = U0.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Xe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Rs,
    useDebugValue: _u,
    useDeferredValue: function (e) {
      return (Xe().memoizedState = e);
    },
    useTransition: function () {
      var e = Rs(!1),
        t = e[0];
      return (e = A0.bind(null, e[1])), (Xe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        l = Xe();
      if (V) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(k(349));
        bt & 30 || $c(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Fs(Oc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Pr(9, Mc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Xe(),
        t = ee.identifierPrefix;
      if (V) {
        var n = it,
          r = ot;
        (n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Nr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = I0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  B0 = {
    readContext: ze,
    useCallback: Hc,
    useContext: ze,
    useEffect: Pu,
    useImperativeHandle: Uc,
    useInsertionEffect: Dc,
    useLayoutEffect: Ic,
    useMemo: Vc,
    useReducer: Mo,
    useRef: zc,
    useState: function () {
      return Mo(Lr);
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var t = De();
      return Bc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Mo(Lr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: Tc,
    useSyncExternalStore: jc,
    useId: Wc,
    unstable_isNewReconciler: !1,
  },
  W0 = {
    readContext: ze,
    useCallback: Hc,
    useContext: ze,
    useEffect: Pu,
    useImperativeHandle: Uc,
    useInsertionEffect: Dc,
    useLayoutEffect: Ic,
    useMemo: Vc,
    useReducer: Oo,
    useRef: zc,
    useState: function () {
      return Oo(Lr);
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var t = De();
      return J === null ? (t.memoizedState = e) : Bc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Oo(Lr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: Tc,
    useSyncExternalStore: jc,
    useId: Wc,
    unstable_isNewReconciler: !1,
  };
function Mn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += yd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ro(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ni(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Q0 = typeof WeakMap == "function" ? WeakMap : Map;
function Gc(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Dl || ((Dl = !0), (Fi = r)), Ni(e, t);
    }),
    n
  );
}
function Zc(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ni(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ni(e, t),
          typeof r != "function" &&
            ($t === null ? ($t = new Set([this])) : $t.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function zs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Q0();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = op.bind(null, e, t, n)), t.then(e, e));
}
function Ds(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Is(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var K0 = mt.ReactCurrentOwner,
  we = !1;
function fe(e, t, n, r) {
  t.child = e === null ? Pc(t, null, n, r) : jn(t, e.child, n, r);
}
function As(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Nn(t, l),
    (r = Nu(e, t, n, r, o, l)),
    (n = Lu()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        pt(e, t, l))
      : (V && n && pu(t), (t.flags |= 1), fe(e, t, r, l), t.child)
  );
}
function Us(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !zu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Xc(e, t, o, r, l))
      : ((e = ml(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : wr), n(i, r) && e.ref === t.ref)
    )
      return pt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ot(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Xc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (wr(o, r) && e.ref === t.ref)
      if (((we = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (we = !0);
      else return (t.lanes = e.lanes), pt(e, t, l);
  }
  return Li(e, t, n, r, l);
}
function Jc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        A(xn, Ee),
        (Ee |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          A(xn, Ee),
          (Ee |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        A(xn, Ee),
        (Ee |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(xn, Ee),
      (Ee |= r);
  return fe(e, t, l, n), t.child;
}
function qc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Li(e, t, n, r, l) {
  var o = Se(n) ? Jt : ce.current;
  return (
    (o = _n(t, o)),
    Nn(t, l),
    (n = Nu(e, t, n, r, o, l)),
    (r = Lu()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        pt(e, t, l))
      : (V && r && pu(t), (t.flags |= 1), fe(e, t, n, l), t.child)
  );
}
function Hs(e, t, n, r, l) {
  if (Se(n)) {
    var o = !0;
    Pl(t);
  } else o = !1;
  if ((Nn(t, l), t.stateNode === null))
    fl(e, t), Nc(t, n, r), Ci(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = ze(a))
      : ((a = Se(n) ? Jt : ce.current), (a = _n(t, a)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Ms(t, i, r, a)),
      (wt = !1);
    var m = t.memoizedState;
    (i.state = m),
      Ml(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || xe.current || wt
        ? (typeof p == "function" && (Ei(t, n, p, r), (s = t.memoizedState)),
          (u = wt || $s(t, n, u, r, m, s, a))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ec(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Ve(t.type, u)),
      (i.props = a),
      (h = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ze(s))
        : ((s = Se(n) ? Jt : ce.current), (s = _n(t, s)));
    var y = n.getDerivedStateFromProps;
    (p =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && Ms(t, i, r, s)),
      (wt = !1),
      (m = t.memoizedState),
      (i.state = m),
      Ml(t, r, i, l);
    var w = t.memoizedState;
    u !== h || m !== w || xe.current || wt
      ? (typeof y == "function" && (Ei(t, n, y, r), (w = t.memoizedState)),
        (a = wt || $s(t, n, a, r, m, w, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pi(e, t, n, r, o, l);
}
function Pi(e, t, n, r, l, o) {
  qc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ls(t, n, !1), pt(e, t, o);
  (r = t.stateNode), (K0.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = jn(t, e.child, null, o)), (t.child = jn(t, null, u, o)))
      : fe(e, t, u, o),
    (t.memoizedState = r.state),
    l && Ls(t, n, !0),
    t.child
  );
}
function bc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ns(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ns(e, t.context, !1),
    Su(e, t.containerInfo);
}
function Vs(e, t, n, r, l) {
  return Tn(), hu(l), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var _i = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ti(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ef(e, t, n) {
  var r = t.pendingProps,
    l = W.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    A(W, l & 1),
    e === null)
  )
    return (
      Si(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = no(i, r, 0, null)),
              (e = Zt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ti(n)),
              (t.memoizedState = _i),
              e)
            : Tu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Y0(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Ot(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Ot(u, o)) : ((o = Zt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ti(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = _i),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ot(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Tu(e, t) {
  return (
    (t = no({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Jr(e, t, n, r) {
  return (
    r !== null && hu(r),
    jn(t, e.child, null, n),
    (e = Tu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Y0(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ro(Error(k(422)))), Jr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = no({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Zt(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && jn(t, e.child, null, i),
          (t.child.memoizedState = Ti(i)),
          (t.memoizedState = _i),
          o);
  if (!(t.mode & 1)) return Jr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(k(419))), (r = Ro(o, r, void 0)), Jr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), we || u)) {
    if (((r = ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), dt(e, l), Ke(r, e, l, -1));
    }
    return Fu(), (r = Ro(Error(k(421)))), Jr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ip.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ne = Tt(l.nextSibling)),
      (Le = t),
      (V = !0),
      (We = null),
      e !== null &&
        ((Me[Oe++] = ot),
        (Me[Oe++] = it),
        (Me[Oe++] = qt),
        (ot = e.id),
        (it = e.overflow),
        (qt = t)),
      (t = Tu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Bs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ki(e.return, t, n);
}
function Fo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function tf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((fe(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bs(e, n, t);
        else if (e.tag === 19) Bs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((A(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Ol(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Fo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ol(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Fo(t, !0, n, null, o);
        break;
      case "together":
        Fo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (en |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ot(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function G0(e, t, n) {
  switch (t.tag) {
    case 3:
      bc(t), Tn();
      break;
    case 5:
      _c(t);
      break;
    case 1:
      Se(t.type) && Pl(t);
      break;
    case 4:
      Su(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      A(jl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ef(e, t, n)
            : (A(W, W.current & 1),
              (e = pt(e, t, n)),
              e !== null ? e.sibling : null);
      A(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return tf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        A(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Jc(e, t, n);
  }
  return pt(e, t, n);
}
var nf, ji, rf, lf;
nf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ji = function () {};
rf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Kt(be.current);
    var o = null;
    switch (n) {
      case "input":
        (l = qo(e, l)), (r = qo(e, r)), (o = []);
        break;
      case "select":
        (l = K({}, l, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ti(e, l)), (r = ti(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Nl);
    }
    ri(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (dr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (o = o || []).push(a, "" + s)
              : a !== "suppressContentEditableWarning" &&
                a !== "suppressHydrationWarning" &&
                (dr.hasOwnProperty(a)
                  ? (s != null && a === "onScroll" && U("scroll", e),
                    o || u === s || (o = []))
                  : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
lf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Yn(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Z0(e, t, n) {
  var r = t.pendingProps;
  switch ((mu(t), t.tag)) {
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
      return ue(t), null;
    case 1:
      return Se(t.type) && Ll(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        $n(),
        H(xe),
        H(ce),
        Eu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Zr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (Ii(We), (We = null)))),
        ji(e, t),
        ue(t),
        null
      );
    case 5:
      ku(t);
      var l = Kt(Cr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        rf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ue(t), null;
        }
        if (((e = Kt(be.current)), Zr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Je] = t), (r[kr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < er.length; l++) U(er[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              qu(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              es(r, o), U("invalid", r);
          }
          ri(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : dr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              Ur(r), bu(r, o, !0);
              break;
            case "textarea":
              Ur(r), ts(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Nl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = $a(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Je] = t),
            (e[kr] = r),
            nf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = li(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) U(er[l], e);
                l = r;
                break;
              case "source":
                U("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = r);
                break;
              case "details":
                U("toggle", e), (l = r);
                break;
              case "input":
                qu(e, r), (l = qo(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = K({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                es(e, r), (l = ti(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            ri(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Ra(e, s)
                  : o === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Ma(e, s))
                    : o === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && pr(e, s)
                        : typeof s == "number" && pr(e, "" + s)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (dr.hasOwnProperty(o)
                          ? s != null && o === "onScroll" && U("scroll", e)
                          : s != null && bi(e, o, s, i));
              }
            switch (n) {
              case "input":
                Ur(e), bu(e, r, !1);
                break;
              case "textarea":
                Ur(e), ts(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Sn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Sn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Nl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) lf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Kt(Cr.current)), Kt(be.current), Zr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (o = r.nodeValue !== n) && ((e = Le), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Je] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (H(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && Ne !== null && t.mode & 1 && !(t.flags & 128))
          Sc(), Tn(), (t.flags |= 98560), (o = !1);
        else if (((o = Zr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[Je] = t;
          } else
            Tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (o = !1);
        } else We !== null && (Ii(We), (We = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? q === 0 && (q = 3) : Fu())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        $n(), ji(e, t), e === null && xr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return yu(t.type._context), ue(t), null;
    case 17:
      return Se(t.type) && Ll(), ue(t), null;
    case 19:
      if ((H(W), (o = t.memoizedState), o === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Yn(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ol(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Yn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return A(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Z() > On &&
            ((t.flags |= 128), (r = !0), Yn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ol(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Yn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !V)
            )
              return ue(t), null;
          } else
            2 * Z() - o.renderingStartTime > On &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Yn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Z()),
          (t.sibling = null),
          (n = W.current),
          A(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        Ru(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ee & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function X0(e, t) {
  switch ((mu(t), t.tag)) {
    case 1:
      return (
        Se(t.type) && Ll(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        $n(),
        H(xe),
        H(ce),
        Eu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ku(t), null;
    case 13:
      if ((H(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Tn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(W), null;
    case 4:
      return $n(), null;
    case 10:
      return yu(t.type._context), null;
    case 22:
    case 23:
      return Ru(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qr = !1,
  se = !1,
  J0 = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function $i(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var Ws = !1;
function q0(e, t) {
  if (((mi = kl), (e = sc()), du(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (m = h), (h = y);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++a === l && (u = i),
                m === o && ++p === r && (s = i),
                (y = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = y;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hi = { focusedElem: e, selectionRange: n }, kl = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    C = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ve(t.type, x),
                      C,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (S) {
          G(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (w = Ws), (Ws = !1), w;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && $i(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function eo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Mi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function of(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), of(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[kr], delete t[yi], delete t[R0], delete t[F0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function uf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || uf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Nl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oi(e, t, n), e = e.sibling; e !== null; ) Oi(e, t, n), (e = e.sibling);
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
var re = null,
  Be = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; ) sf(e, t, n), (n = n.sibling);
}
function sf(e, t, n) {
  if (qe && typeof qe.onCommitFiberUnmount == "function")
    try {
      qe.onCommitFiberUnmount(Kl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || wn(n, t);
    case 6:
      var r = re,
        l = Be;
      (re = null),
        vt(e, t, n),
        (re = r),
        (Be = l),
        re !== null &&
          (Be
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        (Be
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? _o(e.parentNode, n)
              : e.nodeType === 1 && _o(e, n),
            gr(e))
          : _o(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (l = Be),
        (re = n.stateNode.containerInfo),
        (Be = !0),
        vt(e, t, n),
        (re = r),
        (Be = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && $i(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          G(n, t, u);
        }
      vt(e, t, n);
      break;
    case 21:
      vt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), vt(e, t, n), (se = r))
        : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function Ks(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new J0()),
      t.forEach(function (r) {
        var l = up.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function He(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (re = u.stateNode), (Be = !1);
              break e;
            case 3:
              (re = u.stateNode.containerInfo), (Be = !0);
              break e;
            case 4:
              (re = u.stateNode.containerInfo), (Be = !0);
              break e;
          }
          u = u.return;
        }
        if (re === null) throw Error(k(160));
        sf(o, i, l), (re = null), (Be = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        G(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) af(t, e), (t = t.sibling);
}
function af(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((He(t, e), Ze(e), r & 4)) {
        try {
          sr(3, e, e.return), eo(3, e);
        } catch (x) {
          G(e, e.return, x);
        }
        try {
          sr(5, e, e.return);
        } catch (x) {
          G(e, e.return, x);
        }
      }
      break;
    case 1:
      He(t, e), Ze(e), r & 512 && n !== null && wn(n, n.return);
      break;
    case 5:
      if (
        (He(t, e),
        Ze(e),
        r & 512 && n !== null && wn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          pr(l, "");
        } catch (x) {
          G(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Ta(l, o),
              li(u, i);
            var a = li(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                h = s[i + 1];
              p === "style"
                ? Ra(l, h)
                : p === "dangerouslySetInnerHTML"
                  ? Ma(l, h)
                  : p === "children"
                    ? pr(l, h)
                    : bi(l, p, h, a);
            }
            switch (u) {
              case "input":
                bo(l, o);
                break;
              case "textarea":
                ja(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? Sn(l, !!o.multiple, y, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Sn(l, !!o.multiple, o.defaultValue, !0)
                      : Sn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[kr] = o;
          } catch (x) {
            G(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((He(t, e), Ze(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (x) {
          G(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (He(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          gr(t.containerInfo);
        } catch (x) {
          G(e, e.return, x);
        }
      break;
    case 4:
      He(t, e), Ze(e);
      break;
    case 13:
      He(t, e),
        Ze(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Mu = Z())),
        r & 4 && Ks(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (a = se) || p), He(t, e), (se = a)) : He(t, e),
        Ze(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (_ = e, p = e.child; p !== null; ) {
            for (h = _ = p; _ !== null; ) {
              switch (((m = _), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  sr(4, m, m.return);
                  break;
                case 1:
                  wn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (x) {
                      G(r, n, x);
                    }
                  }
                  break;
                case 5:
                  wn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Gs(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (_ = y)) : Gs(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                (l = h.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Oa("display", i)));
              } catch (x) {
                G(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (x) {
                G(e, e.return, x);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), (h = h.return);
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      He(t, e), Ze(e), r & 4 && Ks(e);
      break;
    case 21:
      break;
    default:
      He(t, e), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (uf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (pr(l, ""), (r.flags &= -33));
          var o = Qs(e);
          Ri(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Qs(e);
          Oi(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      G(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function b0(e, t, n) {
  (_ = e), cf(e);
}
function cf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || qr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || se;
        u = qr;
        var a = se;
        if (((qr = i), (se = s) && !a))
          for (_ = l; _ !== null; )
            (i = _),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Zs(l)
                : s !== null
                  ? ((s.return = i), (_ = s))
                  : Zs(l);
        for (; o !== null; ) (_ = o), cf(o), (o = o.sibling);
        (_ = l), (qr = u), (se = a);
      }
      Ys(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : Ys(e);
  }
}
function Ys(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              se || eo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ve(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && js(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                js(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && gr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        se || (t.flags & 512 && Mi(t));
      } catch (m) {
        G(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Gs(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Zs(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            eo(4, t);
          } catch (s) {
            G(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              G(t, l, s);
            }
          }
          var o = t.return;
          try {
            Mi(t);
          } catch (s) {
            G(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Mi(t);
          } catch (s) {
            G(t, i, s);
          }
      }
    } catch (s) {
      G(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var ep = Math.ceil,
  zl = mt.ReactCurrentDispatcher,
  ju = mt.ReactCurrentOwner,
  Fe = mt.ReactCurrentBatchConfig,
  F = 0,
  ee = null,
  X = null,
  le = 0,
  Ee = 0,
  xn = Dt(0),
  q = 0,
  _r = null,
  en = 0,
  to = 0,
  $u = 0,
  ar = null,
  ye = null,
  Mu = 0,
  On = 1 / 0,
  rt = null,
  Dl = !1,
  Fi = null,
  $t = null,
  br = !1,
  Ct = null,
  Il = 0,
  cr = 0,
  zi = null,
  dl = -1,
  pl = 0;
function de() {
  return F & 6 ? Z() : dl !== -1 ? dl : (dl = Z());
}
function Mt(e) {
  return e.mode & 1
    ? F & 2 && le !== 0
      ? le & -le
      : D0.transition !== null
        ? (pl === 0 && (pl = Ka()), pl)
        : ((e = I),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ba(e.type))),
          e)
    : 1;
}
function Ke(e, t, n, r) {
  if (50 < cr) throw ((cr = 0), (zi = null), Error(k(185)));
  jr(e, n, r),
    (!(F & 2) || e !== ee) &&
      (e === ee && (!(F & 2) && (to |= n), q === 4 && St(e, le)),
      ke(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((On = Z() + 500), Jl && It()));
}
function ke(e, t) {
  var n = e.callbackNode;
  Dd(e, t);
  var r = Sl(e, e === ee ? le : 0);
  if (r === 0)
    n !== null && ls(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ls(n), t === 1))
      e.tag === 0 ? z0(Xs.bind(null, e)) : yc(Xs.bind(null, e)),
        M0(function () {
          !(F & 6) && It();
        }),
        (n = null);
    else {
      switch (Ya(r)) {
        case 1:
          n = lu;
          break;
        case 4:
          n = Wa;
          break;
        case 16:
          n = xl;
          break;
        case 536870912:
          n = Qa;
          break;
        default:
          n = xl;
      }
      n = yf(n, ff.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ff(e, t) {
  if (((dl = -1), (pl = 0), F & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Ln() && e.callbackNode !== n) return null;
  var r = Sl(e, e === ee ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Al(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var o = pf();
    (ee !== e || le !== t) && ((rt = null), (On = Z() + 500), Gt(e, t));
    do
      try {
        rp();
        break;
      } catch (u) {
        df(e, u);
      }
    while (!0);
    gu(),
      (zl.current = o),
      (F = l),
      X !== null ? (t = 0) : ((ee = null), (le = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ai(e)), l !== 0 && ((r = l), (t = Di(e, l)))), t === 1)
    )
      throw ((n = _r), Gt(e, 0), St(e, r), ke(e, Z()), n);
    if (t === 6) St(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !tp(l) &&
          ((t = Al(e, r)),
          t === 2 && ((o = ai(e)), o !== 0 && ((r = o), (t = Di(e, o)))),
          t === 1))
      )
        throw ((n = _r), Gt(e, 0), St(e, r), ke(e, Z()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Vt(e, ye, rt);
          break;
        case 3:
          if (
            (St(e, r), (r & 130023424) === r && ((t = Mu + 500 - Z()), 10 < t))
          ) {
            if (Sl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = gi(Vt.bind(null, e, ye, rt), t);
            break;
          }
          Vt(e, ye, rt);
          break;
        case 4:
          if ((St(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Qe(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * ep(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = gi(Vt.bind(null, e, ye, rt), r);
            break;
          }
          Vt(e, ye, rt);
          break;
        case 5:
          Vt(e, ye, rt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ke(e, Z()), e.callbackNode === n ? ff.bind(null, e) : null;
}
function Di(e, t) {
  var n = ar;
  return (
    e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256),
    (e = Al(e, t)),
    e !== 2 && ((t = ye), (ye = n), t !== null && Ii(t)),
    e
  );
}
function Ii(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function tp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ye(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function St(e, t) {
  for (
    t &= ~$u,
      t &= ~to,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xs(e) {
  if (F & 6) throw Error(k(327));
  Ln();
  var t = Sl(e, 0);
  if (!(t & 1)) return ke(e, Z()), null;
  var n = Al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ai(e);
    r !== 0 && ((t = r), (n = Di(e, r)));
  }
  if (n === 1) throw ((n = _r), Gt(e, 0), St(e, t), ke(e, Z()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vt(e, ye, rt),
    ke(e, Z()),
    null
  );
}
function Ou(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((On = Z() + 500), Jl && It());
  }
}
function tn(e) {
  Ct !== null && Ct.tag === 0 && !(F & 6) && Ln();
  var t = F;
  F |= 1;
  var n = Fe.transition,
    r = I;
  try {
    if (((Fe.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Fe.transition = n), (F = t), !(F & 6) && It();
  }
}
function Ru() {
  (Ee = xn.current), H(xn);
}
function Gt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $0(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((mu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ll();
          break;
        case 3:
          $n(), H(xe), H(ce), Eu();
          break;
        case 5:
          ku(r);
          break;
        case 4:
          $n();
          break;
        case 13:
          H(W);
          break;
        case 19:
          H(W);
          break;
        case 10:
          yu(r.type._context);
          break;
        case 22:
        case 23:
          Ru();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (X = e = Ot(e.current, null)),
    (le = Ee = t),
    (q = 0),
    (_r = null),
    ($u = to = en = 0),
    (ye = ar = null),
    Qt !== null)
  ) {
    for (t = 0; t < Qt.length; t++)
      if (((n = Qt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Qt = null;
  }
  return e;
}
function df(e, t) {
  do {
    var n = X;
    try {
      if ((gu(), (al.current = Fl), Rl)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Rl = !1;
      }
      if (
        ((bt = 0),
        (b = J = Q = null),
        (ur = !1),
        (Nr = 0),
        (ju.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (_r = t), (X = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = le),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            p = u,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var y = Ds(i);
          if (y !== null) {
            (y.flags &= -257),
              Is(y, i, u, o, t),
              y.mode & 1 && zs(o, a, t),
              (t = y),
              (s = a);
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              x.add(s), (t.updateQueue = x);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              zs(o, a, t), Fu();
              break e;
            }
            s = Error(k(426));
          }
        } else if (V && u.mode & 1) {
          var C = Ds(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Is(C, i, u, o, t),
              hu(Mn(s, u));
            break e;
          }
        }
        (o = s = Mn(s, u)),
          q !== 4 && (q = 2),
          ar === null ? (ar = [o]) : ar.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Gc(o, s, t);
              Ts(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    ($t === null || !$t.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Zc(o, u, t);
                Ts(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hf(n);
    } catch (E) {
      (t = E), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function pf() {
  var e = zl.current;
  return (zl.current = Fl), e === null ? Fl : e;
}
function Fu() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    ee === null || (!(en & 268435455) && !(to & 268435455)) || St(ee, le);
}
function Al(e, t) {
  var n = F;
  F |= 2;
  var r = pf();
  (ee !== e || le !== t) && ((rt = null), Gt(e, t));
  do
    try {
      np();
      break;
    } catch (l) {
      df(e, l);
    }
  while (!0);
  if ((gu(), (F = n), (zl.current = r), X !== null)) throw Error(k(261));
  return (ee = null), (le = 0), q;
}
function np() {
  for (; X !== null; ) mf(X);
}
function rp() {
  for (; X !== null && !_d(); ) mf(X);
}
function mf(e) {
  var t = gf(e.alternate, e, Ee);
  (e.memoizedProps = e.pendingProps),
    t === null ? hf(e) : (X = t),
    (ju.current = null);
}
function hf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = X0(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (X = null);
        return;
      }
    } else if (((n = Z0(n, t, Ee)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function Vt(e, t, n) {
  var r = I,
    l = Fe.transition;
  try {
    (Fe.transition = null), (I = 1), lp(e, t, n, r);
  } finally {
    (Fe.transition = l), (I = r);
  }
  return null;
}
function lp(e, t, n, r) {
  do Ln();
  while (Ct !== null);
  if (F & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Id(e, o),
    e === ee && ((X = ee = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      br ||
      ((br = !0),
      yf(xl, function () {
        return Ln(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Fe.transition), (Fe.transition = null);
    var i = I;
    I = 1;
    var u = F;
    (F |= 4),
      (ju.current = null),
      q0(e, n),
      af(n, e),
      C0(hi),
      (kl = !!mi),
      (hi = mi = null),
      (e.current = n),
      b0(n),
      Td(),
      (F = u),
      (I = i),
      (Fe.transition = o);
  } else e.current = n;
  if (
    (br && ((br = !1), (Ct = e), (Il = l)),
    (o = e.pendingLanes),
    o === 0 && ($t = null),
    Md(n.stateNode),
    ke(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Dl) throw ((Dl = !1), (e = Fi), (Fi = null), e);
  return (
    Il & 1 && e.tag !== 0 && Ln(),
    (o = e.pendingLanes),
    o & 1 ? (e === zi ? cr++ : ((cr = 0), (zi = e))) : (cr = 0),
    It(),
    null
  );
}
function Ln() {
  if (Ct !== null) {
    var e = Ya(Il),
      t = Fe.transition,
      n = I;
    try {
      if (((Fe.transition = null), (I = 16 > e ? 16 : e), Ct === null))
        var r = !1;
      else {
        if (((e = Ct), (Ct = null), (Il = 0), F & 6)) throw Error(k(331));
        var l = F;
        for (F |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (_ = a; _ !== null; ) {
                  var p = _;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null) (h.return = p), (_ = h);
                  else
                    for (; _ !== null; ) {
                      p = _;
                      var m = p.sibling,
                        y = p.return;
                      if ((of(p), p === a)) {
                        _ = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (_ = m);
                        break;
                      }
                      _ = y;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var C = x.sibling;
                    (x.sibling = null), (x = C);
                  } while (x !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sr(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (_ = f);
                break e;
              }
              _ = o.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          i = _;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (_ = d);
          else
            e: for (i = c; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      eo(9, u);
                  }
                } catch (E) {
                  G(u, u.return, E);
                }
              if (u === i) {
                _ = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                (S.return = u.return), (_ = S);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((F = l), It(), qe && typeof qe.onPostCommitFiberRoot == "function")
        )
          try {
            qe.onPostCommitFiberRoot(Kl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Fe.transition = t);
    }
  }
  return !1;
}
function Js(e, t, n) {
  (t = Mn(n, t)),
    (t = Gc(e, t, 1)),
    (e = jt(e, t, 1)),
    (t = de()),
    e !== null && (jr(e, 1, t), ke(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) Js(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Js(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            ($t === null || !$t.has(r)))
        ) {
          (e = Mn(n, e)),
            (e = Zc(t, e, 1)),
            (t = jt(t, e, 1)),
            (e = de()),
            t !== null && (jr(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function op(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (le & n) === n &&
      (q === 4 || (q === 3 && (le & 130023424) === le && 500 > Z() - Mu)
        ? Gt(e, 0)
        : ($u |= n)),
    ke(e, t);
}
function vf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Br), (Br <<= 1), !(Br & 130023424) && (Br = 4194304))
      : (t = 1));
  var n = de();
  (e = dt(e, t)), e !== null && (jr(e, t, n), ke(e, n));
}
function ip(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), vf(e, n);
}
function up(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), vf(e, n);
}
var gf;
gf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) we = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (we = !1), G0(e, t, n);
      we = !!(e.flags & 131072);
    }
  else (we = !1), V && t.flags & 1048576 && wc(t, Tl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      fl(e, t), (e = t.pendingProps);
      var l = _n(t, ce.current);
      Nn(t, n), (l = Nu(null, t, r, e, l, n));
      var o = Lu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Se(r) ? ((o = !0), Pl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            xu(t),
            (l.updater = ql),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ci(t, r, e, n),
            (t = Pi(null, t, r, !0, o, n)))
          : ((t.tag = 0), V && o && pu(t), fe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (fl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = ap(r)),
          (e = Ve(r, e)),
          l)
        ) {
          case 0:
            t = Li(null, t, r, e, n);
            break e;
          case 1:
            t = Hs(null, t, r, e, n);
            break e;
          case 11:
            t = As(null, t, r, e, n);
            break e;
          case 14:
            t = Us(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        Li(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        Hs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((bc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ec(e, t),
          Ml(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Mn(Error(k(423)), t)), (t = Vs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Mn(Error(k(424)), t)), (t = Vs(e, t, r, n, l));
            break e;
          } else
            for (
              Ne = Tt(t.stateNode.containerInfo.firstChild),
                Le = t,
                V = !0,
                We = null,
                n = Pc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Tn(), r === l)) {
            t = pt(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _c(t),
        e === null && Si(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        vi(r, l) ? (i = null) : o !== null && vi(r, o) && (t.flags |= 32),
        qc(e, t),
        fe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Si(t), null;
    case 13:
      return ef(e, t, n);
    case 4:
      return (
        Su(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        As(e, t, r, l, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          A(jl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ye(o.value, i)) {
            if (o.children === l.children && !xe.current) {
              t = pt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = ut(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      ki(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  ki(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        fe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Nn(t, n),
        (l = ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ve(r, t.pendingProps)),
        (l = Ve(r.type, l)),
        Us(e, t, r, l, n)
      );
    case 15:
      return Xc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        fl(e, t),
        (t.tag = 1),
        Se(r) ? ((e = !0), Pl(t)) : (e = !1),
        Nn(t, n),
        Nc(t, r, l),
        Ci(t, r, l, n),
        Pi(null, t, r, !0, e, n)
      );
    case 19:
      return tf(e, t, n);
    case 22:
      return Jc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function yf(e, t) {
  return Ba(e, t);
}
function sp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Re(e, t, n, r) {
  return new sp(e, t, n, r);
}
function zu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ap(e) {
  if (typeof e == "function") return zu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === tu)) return 11;
    if (e === nu) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Re(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ml(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) zu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case cn:
        return Zt(n.children, l, o, t);
      case eu:
        (i = 8), (l |= 8);
        break;
      case Go:
        return (
          (e = Re(12, n, t, l | 2)), (e.elementType = Go), (e.lanes = o), e
        );
      case Zo:
        return (e = Re(13, n, t, l)), (e.elementType = Zo), (e.lanes = o), e;
      case Xo:
        return (e = Re(19, n, t, l)), (e.elementType = Xo), (e.lanes = o), e;
      case La:
        return no(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ca:
              i = 10;
              break e;
            case Na:
              i = 9;
              break e;
            case tu:
              i = 11;
              break e;
            case nu:
              i = 14;
              break e;
            case yt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Re(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Zt(e, t, n, r) {
  return (e = Re(7, e, r, t)), (e.lanes = n), e;
}
function no(e, t, n, r) {
  return (
    (e = Re(22, e, r, t)),
    (e.elementType = La),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function zo(e, t, n) {
  return (e = Re(6, e, null, t)), (e.lanes = n), e;
}
function Do(e, t, n) {
  return (
    (t = Re(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = go(0)),
    (this.expirationTimes = go(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = go(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Du(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new cp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Re(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xu(o),
    e
  );
}
function fp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: an,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wf(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (rn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Se(n)) return gc(e, n, t);
  }
  return t;
}
function xf(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Du(n, r, !0, e, l, o, i, u, s)),
    (e.context = wf(null)),
    (n = e.current),
    (r = de()),
    (l = Mt(n)),
    (o = ut(r, l)),
    (o.callback = t ?? null),
    jt(n, o, l),
    (e.current.lanes = l),
    jr(e, l, r),
    ke(e, r),
    e
  );
}
function ro(e, t, n, r) {
  var l = t.current,
    o = de(),
    i = Mt(l);
  return (
    (n = wf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jt(l, t, i)),
    e !== null && (Ke(e, l, i, o), sl(e, l, i)),
    i
  );
}
function Ul(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Iu(e, t) {
  qs(e, t), (e = e.alternate) && qs(e, t);
}
function dp() {
  return null;
}
var Sf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Au(e) {
  this._internalRoot = e;
}
lo.prototype.render = Au.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  ro(e, t, null, null);
};
lo.prototype.unmount = Au.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tn(function () {
      ro(null, e, null, null);
    }),
      (t[ft] = null);
  }
};
function lo(e) {
  this._internalRoot = e;
}
lo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Xa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++);
    xt.splice(n, 0, e), n === 0 && qa(e);
  }
};
function Uu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function oo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function bs() {}
function pp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Ul(i);
        o.call(a);
      };
    }
    var i = xf(t, r, e, 0, null, !1, !1, "", bs);
    return (
      (e._reactRootContainer = i),
      (e[ft] = i.current),
      xr(e.nodeType === 8 ? e.parentNode : e),
      tn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = Ul(s);
      u.call(a);
    };
  }
  var s = Du(e, 0, !1, null, null, !1, !1, "", bs);
  return (
    (e._reactRootContainer = s),
    (e[ft] = s.current),
    xr(e.nodeType === 8 ? e.parentNode : e),
    tn(function () {
      ro(t, s, n, r);
    }),
    s
  );
}
function io(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = Ul(i);
        u.call(s);
      };
    }
    ro(t, i, e, l);
  } else i = pp(n, t, e, l, r);
  return Ul(i);
}
Ga = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = bn(t.pendingLanes);
        n !== 0 &&
          (ou(t, n | 1), ke(t, Z()), !(F & 6) && ((On = Z() + 500), It()));
      }
      break;
    case 13:
      tn(function () {
        var r = dt(e, 1);
        if (r !== null) {
          var l = de();
          Ke(r, e, 1, l);
        }
      }),
        Iu(e, 1);
  }
};
iu = function (e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var n = de();
      Ke(t, e, 134217728, n);
    }
    Iu(e, 134217728);
  }
};
Za = function (e) {
  if (e.tag === 13) {
    var t = Mt(e),
      n = dt(e, t);
    if (n !== null) {
      var r = de();
      Ke(n, e, t, r);
    }
    Iu(e, t);
  }
};
Xa = function () {
  return I;
};
Ja = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
ii = function (e, t, n) {
  switch (t) {
    case "input":
      if ((bo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Xl(r);
            if (!l) throw Error(k(90));
            _a(r), bo(r, l);
          }
        }
      }
      break;
    case "textarea":
      ja(e, n);
      break;
    case "select":
      (t = n.value), t != null && Sn(e, !!n.multiple, t, !1);
  }
};
Da = Ou;
Ia = tn;
var mp = { usingClientEntryPoint: !1, Events: [Mr, mn, Xl, Fa, za, Ou] },
  Gn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  hp = {
    bundleType: Gn.bundleType,
    version: Gn.version,
    rendererPackageName: Gn.rendererPackageName,
    rendererConfig: Gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ha(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Gn.findFiberByHostInstance || dp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var el = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!el.isDisabled && el.supportsFiber)
    try {
      (Kl = el.inject(hp)), (qe = el);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mp;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uu(t)) throw Error(k(200));
  return fp(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!Uu(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = Sf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Du(e, 1, !1, null, null, n, !1, r, l)),
    (e[ft] = t.current),
    xr(e.nodeType === 8 ? e.parentNode : e),
    new Au(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Ha(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return tn(e);
};
_e.hydrate = function (e, t, n) {
  if (!oo(t)) throw Error(k(200));
  return io(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!Uu(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Sf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = xf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[ft] = t.current),
    xr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new lo(t);
};
_e.render = function (e, t, n) {
  if (!oo(t)) throw Error(k(200));
  return io(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!oo(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (tn(function () {
        io(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ft] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Ou;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!oo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return io(e, t, n, !1, r);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
function kf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf);
    } catch (e) {
      console.error(e);
    }
}
kf(), (wa.exports = _e);
var Ef = wa.exports,
  ea = Ef;
(Ko.createRoot = ea.createRoot), (Ko.hydrateRoot = ea.hydrateRoot);
const vp = "/assets/logo-Al0JK_-I.svg",
  gp = "/assets/logo_white-s7IaMu6P.svg",
  ta =
    "data:image/svg+xml,%3csvg%20width='45'%20height='45'%20viewBox='0%200%2045%2045'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M13.9317%2038.5415L13.9317%2038.5413C14.5759%2036.2756%2013.9705%2033.9395%2012.312%2032.2808C10.6531%2030.6247%208.32108%2030.0178%206.05096%2030.6621C3.81734%2031.2961%202.1737%2033.011%201.64357%2035.2536L13.9317%2038.5415ZM13.9317%2038.5415C13.2976%2040.7752%2011.5827%2042.4189%209.34021%2042.949C4.94029%2043.9878%201.54955%2043.9998%201.42817%2043.9998C0.967731%2043.9998%200.594299%2043.6264%200.594299%2043.1659C0.594299%2043.0443%200.604792%2039.6536%201.64354%2035.2538L13.9317%2038.5415ZM2.28698%2042.3055L2.32855%2041.7293C2.42626%2040.3747%202.66943%2038.1702%203.26687%2035.6362L2.28698%2042.3055ZM2.28698%2042.3055L2.86319%2042.264M2.28698%2042.3055L2.86319%2042.264M2.86319%2042.264C4.21927%2042.1663%206.42235%2041.9231%208.95627%2041.3256M2.86319%2042.264L8.95627%2041.3256M8.95627%2041.3256C10.6008%2040.9381%2011.8628%2039.722%2012.3267%2038.0854M8.95627%2041.3256L12.3267%2038.0854M12.3267%2038.0854C12.8012%2036.4182%2012.3549%2034.6844%2011.1306%2033.4616C11.1305%2033.4615%2011.1305%2033.4615%2011.1304%2033.4614L10.7771%2033.8152L12.3267%2038.0854ZM6.50651%2032.2658C4.87023%2032.7298%203.65433%2033.9917%203.26689%2035.6361L6.50651%2032.2658Z'%20fill='white'%20stroke='white'/%3e%3cpath%20id='Vector_2'%20d='M44.1417%202.98885C44.0053%201.65494%2042.9382%200.58782%2041.6044%200.451465C37.7554%200.0616691%2026.6976%200.0364731%2017.0908%2010.3846L9.88642%2010.3787C9.88642%2010.3787%209.88197%2010.3787%209.87901%2010.3787C8.32283%2010.3787%206.80073%2011.0101%205.69955%2012.1098L1.91729%2015.8921C1.27407%2016.5354%200.980616%2017.4202%201.10956%2018.3184C1.2385%2019.2165%201.7676%2019.9828%202.56199%2020.42L9.55443%2024.2676L20.3232%2035.0366L24.1707%2042.0292C24.6079%2042.8251%2025.3756%2043.3557%2026.2738%2043.4817C26.4131%2043.5025%2026.5509%2043.5128%2026.6858%2043.5128C27.4387%2043.5128%2028.1545%2043.2179%2028.6984%2042.6754L32.4718%2038.902C33.5893%2037.7845%2034.2043%2036.2994%2034.2043%2034.7209L34.2058%2027.503C44.5581%2017.9004%2044.5344%206.84383%2044.1417%202.98885ZM3.74914%2017.9419C3.74173%2017.8782%203.75951%2017.8219%203.80546%2017.7774L7.58772%2013.9965C8.19092%2013.3933%209.02682%2013.0465%209.88197%2013.0465H9.88494L14.8395%2013.0509C13.0447%2015.3734%2011.3314%2018.1123%209.75748%2021.3345L3.84992%2018.0827C3.79212%2018.0516%203.75951%2018.0042%203.74914%2017.9419ZM41.3361%203.10593C41.4161%203.11334%2041.4799%203.17856%2041.4888%203.26007C41.9467%207.75385%2041.84%2023.0078%2021.7015%2032.64L11.9554%2022.8937C21.5874%202.75319%2036.8336%202.64351%2041.3361%203.10593ZM31.5381%2034.7224C31.5381%2035.5894%2031.2002%2036.4046%2030.5866%2037.0167L26.8132%2040.7902C26.7702%2040.8346%2026.7139%2040.8569%2026.6517%2040.845C26.588%2040.8346%2026.5405%2040.802%2026.5079%2040.7472L23.2577%2034.8395C26.4798%2033.267%2029.2172%2031.5536%2031.5381%2029.7603V34.7224Z'%20fill='white'/%3e%3cpath%20id='Vector_3'%20d='M29.2631%2020.7815C30.7185%2020.7815%2032.0894%2020.2153%2033.121%2019.1853C35.2463%2017.0584%2035.2463%2013.5992%2033.121%2011.4724C31.0594%209.41221%2027.4698%209.41221%2025.4082%2011.4724C24.3797%2012.5024%2023.8105%2013.8719%2023.8105%2015.3288C23.8105%2016.7857%2024.3797%2018.1552%2025.4082%2019.1853C26.4383%2020.2153%2027.8077%2020.7815%2029.2631%2020.7815ZM27.2949%2013.3591C27.8196%2012.8329%2028.5191%2012.5439%2029.2631%2012.5439C30.0071%2012.5439%2030.7081%2012.8329%2031.2328%2013.3591C32.3177%2014.4455%2032.3177%2016.2122%2031.2328%2017.2985C30.182%2018.3508%2028.3457%2018.3508%2027.2949%2017.2985C26.7688%2016.7724%2026.4783%2016.0728%2026.4783%2015.3288C26.4783%2014.5848%2026.7688%2013.8867%2027.2949%2013.3591Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",
  na =
    "data:image/svg+xml,%3csvg%20width='52'%20height='52'%20viewBox='0%200%2052%2052'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Layer%202'%3e%3cpath%20id='Vector'%20d='M0.349147%2028.9109L2.5534%2035.6948C2.99594%2037.0475%203.82727%2038.2372%204.94186%2039.1127C6.05644%2039.9883%207.404%2040.5103%208.81346%2040.6124L12.1816%2050.9809C12.2791%2051.2773%2012.4667%2051.5353%2012.7178%2051.7182C12.9689%2051.9011%2013.2707%2051.9997%2013.5805%2052C13.7346%2052.0004%2013.8877%2051.9744%2014.0331%2051.923L19.6231%2050.0803C19.8064%2050.021%2019.9761%2049.9254%2020.1225%2049.7993C20.2688%2049.6732%2020.3888%2049.519%2020.4754%2049.3457C20.6528%2048.9955%2020.6866%2048.5891%2020.5695%2048.214L19.2528%2044.1614C20.4512%2043.6232%2021.4738%2042.7538%2022.202%2041.6538C22.9302%2040.5538%2023.3343%2039.2683%2023.3674%2037.9463L50.4356%2036.7613C50.6608%2036.7446%2050.8793%2036.6761%2051.0741%2036.5609C51.2689%2036.4458%2051.4349%2036.287%2051.5593%2036.097C51.6837%2035.9069%2051.7631%2035.6907%2051.7915%2035.4648C51.8198%2035.2389%2051.7963%2035.0095%2051.7228%2034.7942L47.8551%2022.832L48.2078%2022.7135C49.596%2022.2546%2050.7466%2021.2587%2051.4063%2019.9448C52.0661%2018.6309%2052.181%2017.1066%2051.7258%2015.7073C51.2706%2014.308%2050.2825%2013.1483%2048.979%2012.4833C47.6755%2011.8183%2046.1633%2011.7025%2044.775%2012.1613L44.4282%2012.2739L40.7663%201.01668C40.6967%200.802737%2040.5795%200.607681%2040.4236%200.446447C40.2677%200.285213%2040.0773%200.162079%2039.8669%200.0864746C39.6556%200.0108091%2039.43%20-0.0157034%2039.2071%200.00892117C38.9842%200.0335457%2038.7697%200.10867%2038.5796%200.228671L11.2293%2017.7781L4.89872%2019.8636C3.10746%2020.4585%201.62301%2021.7446%200.770331%2023.4402C-0.0823496%2025.1358%20-0.233795%2027.1029%200.349147%2028.9109ZM14.4916%2048.6525L11.7525%2040.2155L14.5445%2039.2912L16.0081%2043.7704L17.2895%2047.7104L14.4916%2048.6525ZM18.2947%2041.3116L17.3366%2038.3491L17.8421%2038.1833L20.3931%2038.0648C20.3423%2038.7401%2020.1234%2039.3917%2019.7566%2039.9592C19.3898%2040.5267%2018.887%2040.9918%2018.2947%2041.3116ZM45.692%2014.9756C46.0125%2014.867%2046.3513%2014.8241%2046.6885%2014.8496C47.0257%2014.875%2047.3544%2014.9682%2047.6553%2015.1237C47.9565%2015.2776%2048.2247%2015.4898%2048.4445%2015.7482C48.6643%2016.0066%2048.8314%2016.3062%2048.9363%2016.6298C49.0411%2016.9533%2049.0816%2017.2946%2049.0554%2017.6339C49.0293%2017.9733%2048.937%2018.3042%2048.7838%2018.6075C48.633%2018.9123%2048.4232%2019.1836%2048.1668%2019.4054C47.9104%2019.6272%2047.6126%2019.7951%2047.2908%2019.8992L46.944%2020.0177L45.3393%2015.0882L45.692%2014.9756ZM48.3489%2033.864L18.6297%2035.1912L13.6158%2019.7866L38.562%203.7895L48.3489%2033.864ZM5.81568%2022.6779L10.9237%2020.9953L15.726%2035.8074L15.0265%2036.0325L10.6062%2037.496C10.0833%2037.67%209.53146%2037.7382%208.9823%2037.6969C8.43315%2037.6555%207.89749%2037.5053%207.40604%2037.2549C6.91458%2037.0044%206.47699%2036.6587%206.11835%2036.2374C5.75971%2035.8162%205.48707%2035.3278%205.31605%2034.8002L3.14707%2027.9925C2.80357%2026.931%202.89158%2025.7756%203.3918%2024.7794C3.89202%2023.7831%204.76366%2023.0275%205.81568%2022.6779Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",
  ra =
    "data:image/svg+xml,%3csvg%20width='53'%20height='52'%20viewBox='0%200%2053%2052'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M3.4533%2048.2857V48.7857H3.9533H50.3819C51.1322%2048.7857%2051.739%2049.3926%2051.739%2050.1429C51.739%2050.8932%2051.1322%2051.5%2050.3819%2051.5H2.09616C1.34586%2051.5%200.739014%2050.8932%200.739014%2050.1429V1.85714C0.739014%201.10684%201.34586%200.5%202.09616%200.5C2.84646%200.5%203.4533%201.10684%203.4533%201.85714V48.2857Z'%20fill='white'%20stroke='white'/%3e%3cpath%20id='Vector_2'%20d='M3.95142%2050.1426C3.55418%2050.1426%203.15155%2050.0156%202.81243%2049.751C2.00365%2049.1216%201.85675%2047.9555%202.4878%2047.1448L15.4878%2030.4305C16.0971%2029.6452%2017.2216%2029.4802%2018.0323%2030.0606L29.6413%2038.3507L48.9635%2015.5155C49.6273%2014.7319%2050.7971%2014.6359%2051.5806%2015.2959C52.3642%2015.9597%2052.462%2017.1314%2051.8001%2017.913L31.3716%2042.0559C30.7478%2042.7958%2029.6632%2042.9319%2028.8743%2042.3679L17.3251%2034.1196L5.41875%2049.4265C5.05233%2049.896%204.50466%2050.1426%203.95142%2050.1426Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",
  yp = "/assets/dashboard-oY1pDSHW.png",
  wp = "/assets/title_decoration-bNw8VpJV.png",
  xp = "/assets/title_decoration_2-1HypbrMv.png";
var Sp = Object.defineProperty,
  kp = (e, t, n) =>
    t in e
      ? Sp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Io = (e, t, n) => (kp(e, typeof t != "symbol" ? t + "" : t, n), n);
let Ep = class {
    constructor() {
      Io(this, "current", this.detect()),
        Io(this, "handoffState", "pending"),
        Io(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  st = new Ep(),
  Ie = (e, t) => {
    st.isServer ? g.useEffect(e, t) : g.useLayoutEffect(e, t);
  };
function at(e) {
  let t = g.useRef(e);
  return (
    Ie(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function uo(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          }),
        );
}
function ln() {
  let e = [],
    t = {
      addEventListener(n, r, l, o) {
        return (
          n.addEventListener(r, l, o),
          t.add(() => n.removeEventListener(r, l, o))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          uo(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let o = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: o });
          })
        );
      },
      group(n) {
        let r = ln();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let l of e.splice(r, 1)) l();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function Hu() {
  let [e] = g.useState(ln);
  return g.useEffect(() => () => e.dispose(), [e]), e;
}
let B = function (e) {
  let t = at(e);
  return O.useCallback((...n) => t.current(...n), [t]);
};
function Cp() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in fr
    ? ((t) => t.useSyncExternalStore)(fr)(
        () => () => {},
        () => !1,
        () => !e,
      )
    : !1;
}
function In() {
  let e = Cp(),
    [t, n] = g.useState(st.isHandoffComplete);
  return (
    t && st.isHandoffComplete === !1 && n(!1),
    g.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    g.useEffect(() => st.handoff(), []),
    e ? !1 : t
  );
}
var la;
let An =
  (la = O.useId) != null
    ? la
    : function () {
        let e = In(),
          [t, n] = O.useState(e ? () => st.nextId() : null);
        return (
          Ie(() => {
            t === null && n(st.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function ae(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t,
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`,
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, ae), r);
}
function Cf(e) {
  return st.isServer
    ? null
    : e instanceof Node
      ? e.ownerDocument
      : e != null && e.hasOwnProperty("current") && e.current instanceof Node
        ? e.current.ownerDocument
        : document;
}
let Ai = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var Bt = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(Bt || {}),
  Nf = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Nf || {}),
  Np = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Np || {});
function Lp(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Ai)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      );
}
var Lf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Lf || {});
function Pp(e, t = 0) {
  var n;
  return e === ((n = Cf(e)) == null ? void 0 : n.body)
    ? !1
    : ae(t, {
        0() {
          return e.matches(Ai);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(Ai)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var _p = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(_p || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ));
function Xt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Tp = ["textarea", "input"].join(",");
function jp(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Tp)) !=
    null
    ? n
    : !1;
}
function $p(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      o = t(r);
    if (l === null || o === null) return 0;
    let i = l.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0;
  });
}
function hl(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {},
) {
  let o = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? $p(e) : e) : Lp(e);
  l.length > 0 && i.length > 1 && (i = i.filter((y) => !l.includes(y))),
    (r = r ?? o.activeElement);
  let u = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    s = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, i.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, i.indexOf(r)) + 1;
      if (t & 8) return i.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    a = t & 32 ? { preventScroll: !0 } : {},
    p = 0,
    h = i.length,
    m;
  do {
    if (p >= h || p + h <= 0) return 0;
    let y = s + p;
    if (t & 16) y = (y + h) % h;
    else {
      if (y < 0) return 3;
      if (y >= h) return 1;
    }
    (m = i[y]), m == null || m.focus(a), (p += u);
  } while (m !== o.activeElement);
  return t & 6 && jp(m) && m.select(), 2;
}
function tl(e, t, n) {
  let r = at(t);
  g.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function Pf(e, t, n) {
  let r = at(t);
  g.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function Mp(e, t, n = !0) {
  let r = g.useRef(!1);
  g.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(i, u) {
    if (!r.current || i.defaultPrevented) return;
    let s = u(i);
    if (s === null || !s.getRootNode().contains(s) || !s.isConnected) return;
    let a = (function p(h) {
      return typeof h == "function"
        ? p(h())
        : Array.isArray(h) || h instanceof Set
          ? h
          : [h];
    })(e);
    for (let p of a) {
      if (p === null) continue;
      let h = p instanceof HTMLElement ? p : p.current;
      if (
        (h != null && h.contains(s)) ||
        (i.composed && i.composedPath().includes(h))
      )
        return;
    }
    return !Pp(s, Lf.Loose) && s.tabIndex !== -1 && i.preventDefault(), t(i, s);
  }
  let o = g.useRef(null);
  tl(
    "pointerdown",
    (i) => {
      var u, s;
      r.current &&
        (o.current =
          ((s = (u = i.composedPath) == null ? void 0 : u.call(i)) == null
            ? void 0
            : s[0]) || i.target);
    },
    !0,
  ),
    tl(
      "mousedown",
      (i) => {
        var u, s;
        r.current &&
          (o.current =
            ((s = (u = i.composedPath) == null ? void 0 : u.call(i)) == null
              ? void 0
              : s[0]) || i.target);
      },
      !0,
    ),
    tl(
      "click",
      (i) => {
        o.current && (l(i, () => o.current), (o.current = null));
      },
      !0,
    ),
    tl(
      "touchend",
      (i) => l(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0,
    ),
    Pf(
      "blur",
      (i) =>
        l(i, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    );
}
let _f = Symbol();
function Op(e, t = !0) {
  return Object.assign(e, { [_f]: t });
}
function Ge(...e) {
  let t = g.useRef(e);
  g.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = B((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[_f])) ? void 0 : n;
}
function Hl(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : []))),
  )
    .filter(Boolean)
    .join(" ");
}
var Vl = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Vl || {}),
  Nt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Nt || {});
function Ae({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: o = !0,
  name: i,
}) {
  let u = Tf(t, e);
  if (o) return nl(u, n, r, i);
  let s = l ?? 0;
  if (s & 2) {
    let { static: a = !1, ...p } = u;
    if (a) return nl(p, n, r, i);
  }
  if (s & 1) {
    let { unmount: a = !0, ...p } = u;
    return ae(a ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return nl({ ...p, hidden: !0, style: { display: "none" } }, n, r, i);
      },
    });
  }
  return nl(u, n, r, i);
}
function nl(e, t = {}, n, r) {
  let {
      as: l = n,
      children: o,
      refName: i = "ref",
      ...u
    } = Ao(e, ["unmount", "static"]),
    s = e.ref !== void 0 ? { [i]: e.ref } : {},
    a = typeof o == "function" ? o(t) : o;
  "className" in u &&
    u.className &&
    typeof u.className == "function" &&
    (u.className = u.className(t));
  let p = {};
  if (t) {
    let h = !1,
      m = [];
    for (let [y, w] of Object.entries(t))
      typeof w == "boolean" && (h = !0), w === !0 && m.push(y);
    h && (p["data-headlessui-state"] = m.join(" "));
  }
  if (l === g.Fragment && Object.keys(oa(u)).length > 0) {
    if (!g.isValidElement(a) || (Array.isArray(a) && a.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u).map((w) => `  - ${w}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((w) => `  - ${w}`).join(`
`),
        ].join(`
`),
      );
    let h = a.props,
      m =
        typeof (h == null ? void 0 : h.className) == "function"
          ? (...w) => Hl(h == null ? void 0 : h.className(...w), u.className)
          : Hl(h == null ? void 0 : h.className, u.className),
      y = m ? { className: m } : {};
    return g.cloneElement(
      a,
      Object.assign(
        {},
        Tf(a.props, oa(Ao(u, ["ref"]))),
        p,
        s,
        Rp(a.ref, s.ref),
        y,
      ),
    );
  }
  return g.createElement(
    l,
    Object.assign(
      {},
      Ao(u, ["ref"]),
      l !== g.Fragment && s,
      l !== g.Fragment && p,
    ),
    a,
  );
}
function Rp(...e) {
  return {
    ref: e.every((t) => t == null)
      ? void 0
      : (t) => {
          for (let n of e)
            n != null && (typeof n == "function" ? n(t) : (n.current = t));
        },
  };
}
function Tf(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith("on") && typeof r[l] == "function"
        ? (n[l] != null || (n[l] = []), n[l].push(r[l]))
        : (t[l] = r[l]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0])),
    );
  for (let r in n)
    Object.assign(t, {
      [r](l, ...o) {
        let i = n[r];
        for (let u of i) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          u(l, ...o);
        }
      },
    });
  return t;
}
function je(e) {
  var t;
  return Object.assign(g.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function oa(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Ao(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Fp(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && zp(n) ? !1 : r;
}
function zp(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Dp = "div";
var Bl = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(Bl || {});
function Ip(e, t) {
  let { features: n = 1, ...r } = e,
    l = {
      ref: t,
      "aria-hidden": (n & 2) === 2 ? !0 : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((n & 4) === 4 && (n & 2) !== 2 && { display: "none" }),
      },
    };
  return Ae({
    ourProps: l,
    theirProps: r,
    slot: {},
    defaultTag: Dp,
    name: "Hidden",
  });
}
let Ui = je(Ip),
  Vu = g.createContext(null);
Vu.displayName = "OpenClosedContext";
var Ce = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Ce || {});
function Bu() {
  return g.useContext(Vu);
}
function Ap({ value: e, children: t }) {
  return O.createElement(Vu.Provider, { value: e }, t);
}
var jf = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(jf || {});
function Wu(e, t) {
  let n = g.useRef([]),
    r = B(e);
  g.useEffect(() => {
    let l = [...n.current];
    for (let [o, i] of t.entries())
      if (n.current[o] !== i) {
        let u = r(t, l);
        return (n.current = t), u;
      }
  }, [r, ...t]);
}
function Up() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function Rr(...e) {
  return g.useMemo(() => Cf(...e), [...e]);
}
var tr = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(tr || {});
function Hp() {
  let e = g.useRef(0);
  return (
    Pf(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0,
    ),
    e
  );
}
function Fr() {
  let e = g.useRef(!1);
  return (
    Ie(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function $f(e, t, n, r) {
  let l = at(n);
  g.useEffect(() => {
    e = e ?? window;
    function o(i) {
      l.current(i);
    }
    return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
  }, [e, t, r]);
}
function Vp(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
function Mf(e) {
  let t = B(e),
    n = g.useRef(!1);
  g.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          uo(() => {
            n.current && t();
          });
      }
    ),
    [t],
  );
}
function Of(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let Bp = "div";
var Rf = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(Rf || {});
function Wp(e, t) {
  let n = g.useRef(null),
    r = Ge(n, t),
    { initialFocus: l, containers: o, features: i = 30, ...u } = e;
  In() || (i = 1);
  let s = Rr(n);
  Yp({ ownerDocument: s }, !!(i & 16));
  let a = Gp({ ownerDocument: s, container: n, initialFocus: l }, !!(i & 2));
  Zp(
    { ownerDocument: s, container: n, containers: o, previousActiveElement: a },
    !!(i & 8),
  );
  let p = Hp(),
    h = B((x) => {
      let C = n.current;
      C &&
        ((f) => f())(() => {
          ae(p.current, {
            [tr.Forwards]: () => {
              hl(C, Bt.First, { skipElements: [x.relatedTarget] });
            },
            [tr.Backwards]: () => {
              hl(C, Bt.Last, { skipElements: [x.relatedTarget] });
            },
          });
        });
    }),
    m = Hu(),
    y = g.useRef(!1),
    w = {
      ref: r,
      onKeyDown(x) {
        x.key == "Tab" &&
          ((y.current = !0),
          m.requestAnimationFrame(() => {
            y.current = !1;
          }));
      },
      onBlur(x) {
        let C = Of(o);
        n.current instanceof HTMLElement && C.add(n.current);
        let f = x.relatedTarget;
        f instanceof HTMLElement &&
          f.dataset.headlessuiFocusGuard !== "true" &&
          (Ff(C, f) ||
            (y.current
              ? hl(
                  n.current,
                  ae(p.current, {
                    [tr.Forwards]: () => Bt.Next,
                    [tr.Backwards]: () => Bt.Previous,
                  }) | Bt.WrapAround,
                  { relativeTo: x.target },
                )
              : x.target instanceof HTMLElement && Xt(x.target)));
      },
    };
  return O.createElement(
    O.Fragment,
    null,
    !!(i & 4) &&
      O.createElement(Ui, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: h,
        features: Bl.Focusable,
      }),
    Ae({ ourProps: w, theirProps: u, defaultTag: Bp, name: "FocusTrap" }),
    !!(i & 4) &&
      O.createElement(Ui, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: h,
        features: Bl.Focusable,
      }),
  );
}
let Qp = je(Wp),
  Zn = Object.assign(Qp, { features: Rf }),
  kt = [];
Vp(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      kt[0] !== t.target &&
      (kt.unshift(t.target),
      (kt = kt.filter((n) => n != null && n.isConnected)),
      kt.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function Kp(e = !0) {
  let t = g.useRef(kt.slice());
  return (
    Wu(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          uo(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = kt.slice());
      },
      [e, kt, t],
    ),
    B(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function Yp({ ownerDocument: e }, t) {
  let n = Kp(t);
  Wu(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        Xt(n()));
  }, [t]),
    Mf(() => {
      t && Xt(n());
    });
}
function Gp({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = g.useRef(null),
    o = Fr();
  return (
    Wu(() => {
      if (!r) return;
      let i = t.current;
      i &&
        uo(() => {
          if (!o.current) return;
          let u = e == null ? void 0 : e.activeElement;
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === u) {
              l.current = u;
              return;
            }
          } else if (i.contains(u)) {
            l.current = u;
            return;
          }
          n != null && n.current
            ? Xt(n.current)
            : hl(i, Bt.First) === Nf.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />",
              ),
            (l.current = e == null ? void 0 : e.activeElement);
        });
    }, [r]),
    l
  );
}
function Zp(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  l,
) {
  let o = Fr();
  $f(
    e == null ? void 0 : e.defaultView,
    "focus",
    (i) => {
      if (!l || !o.current) return;
      let u = Of(n);
      t.current instanceof HTMLElement && u.add(t.current);
      let s = r.current;
      if (!s) return;
      let a = i.target;
      a && a instanceof HTMLElement
        ? Ff(u, a)
          ? ((r.current = a), Xt(a))
          : (i.preventDefault(), i.stopPropagation(), Xt(s))
        : Xt(r.current);
    },
    !0,
  );
}
function Ff(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let zf = g.createContext(!1);
function Xp() {
  return g.useContext(zf);
}
function Hi(e) {
  return O.createElement(zf.Provider, { value: e.force }, e.children);
}
function Jp(e) {
  let t = Xp(),
    n = g.useContext(Df),
    r = Rr(e),
    [l, o] = g.useState(() => {
      if ((!t && n !== null) || st.isServer) return null;
      let i = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (i) return i;
      if (r === null) return null;
      let u = r.createElement("div");
      return (
        u.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(u)
      );
    });
  return (
    g.useEffect(() => {
      l !== null &&
        ((r != null && r.body.contains(l)) ||
          r == null ||
          r.body.appendChild(l));
    }, [l, r]),
    g.useEffect(() => {
      t || (n !== null && o(n.current));
    }, [n, o, t]),
    l
  );
}
let qp = g.Fragment;
function bp(e, t) {
  let n = e,
    r = g.useRef(null),
    l = Ge(
      Op((p) => {
        r.current = p;
      }),
      t,
    ),
    o = Rr(r),
    i = Jp(r),
    [u] = g.useState(() => {
      var p;
      return st.isServer
        ? null
        : (p = o == null ? void 0 : o.createElement("div")) != null
          ? p
          : null;
    }),
    s = g.useContext(Vi),
    a = In();
  return (
    Ie(() => {
      !i ||
        !u ||
        i.contains(u) ||
        (u.setAttribute("data-headlessui-portal", ""), i.appendChild(u));
    }, [i, u]),
    Ie(() => {
      if (u && s) return s.register(u);
    }, [s, u]),
    Mf(() => {
      var p;
      !i ||
        !u ||
        (u instanceof Node && i.contains(u) && i.removeChild(u),
        i.childNodes.length <= 0 &&
          ((p = i.parentElement) == null || p.removeChild(i)));
    }),
    a
      ? !i || !u
        ? null
        : Ef.createPortal(
            Ae({
              ourProps: { ref: l },
              theirProps: n,
              defaultTag: qp,
              name: "Portal",
            }),
            u,
          )
      : null
  );
}
let em = g.Fragment,
  Df = g.createContext(null);
function tm(e, t) {
  let { target: n, ...r } = e,
    l = { ref: Ge(t) };
  return O.createElement(
    Df.Provider,
    { value: n },
    Ae({ ourProps: l, theirProps: r, defaultTag: em, name: "Popover.Group" }),
  );
}
let Vi = g.createContext(null);
function nm() {
  let e = g.useContext(Vi),
    t = g.useRef([]),
    n = B((o) => (t.current.push(o), e && e.register(o), () => r(o))),
    r = B((o) => {
      let i = t.current.indexOf(o);
      i !== -1 && t.current.splice(i, 1), e && e.unregister(o);
    }),
    l = g.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t],
    );
  return [
    t,
    g.useMemo(
      () =>
        function ({ children: o }) {
          return O.createElement(Vi.Provider, { value: l }, o);
        },
      [l],
    ),
  ];
}
let rm = je(bp),
  lm = je(tm),
  Bi = Object.assign(rm, { Group: lm }),
  If = g.createContext(null);
function Af() {
  let e = g.useContext(If);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent.",
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, Af), t);
  }
  return e;
}
function om() {
  let [e, t] = g.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    g.useMemo(
      () =>
        function (n) {
          let r = B(
              (o) => (
                t((i) => [...i, o]),
                () =>
                  t((i) => {
                    let u = i.slice(),
                      s = u.indexOf(o);
                    return s !== -1 && u.splice(s, 1), u;
                  })
              ),
            ),
            l = g.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props],
            );
          return O.createElement(If.Provider, { value: l }, n.children);
        },
      [t],
    ),
  ];
}
let im = "p";
function um(e, t) {
  let n = An(),
    { id: r = `headlessui-description-${n}`, ...l } = e,
    o = Af(),
    i = Ge(t);
  Ie(() => o.register(r), [r, o.register]);
  let u = { ref: i, ...o.props, id: r };
  return Ae({
    ourProps: u,
    theirProps: l,
    slot: o.slot || {},
    defaultTag: im,
    name: o.name || "Description",
  });
}
let sm = je(um),
  am = Object.assign(sm, {}),
  Qu = g.createContext(() => {});
Qu.displayName = "StackContext";
var Wi = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  Wi || {},
);
function cm() {
  return g.useContext(Qu);
}
function fm({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let o = cm(),
    i = B((...u) => {
      t == null || t(...u), o(...u);
    });
  return (
    Ie(() => {
      let u = l === void 0 || l === !0;
      return (
        u && i(0, n, r),
        () => {
          u && i(1, n, r);
        }
      );
    }, [i, n, r, l]),
    O.createElement(Qu.Provider, { value: i }, e)
  );
}
function dm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const pm = typeof Object.is == "function" ? Object.is : dm,
  { useState: mm, useEffect: hm, useLayoutEffect: vm, useDebugValue: gm } = fr;
function ym(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = mm({ inst: { value: r, getSnapshot: t } });
  return (
    vm(() => {
      (l.value = r), (l.getSnapshot = t), Uo(l) && o({ inst: l });
    }, [e, r, t]),
    hm(
      () => (
        Uo(l) && o({ inst: l }),
        e(() => {
          Uo(l) && o({ inst: l });
        })
      ),
      [e],
    ),
    gm(r),
    r
  );
}
function Uo(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !pm(n, r);
  } catch {
    return !0;
  }
}
function wm(e, t, n) {
  return t();
}
const xm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Sm = !xm,
  km = Sm ? wm : ym,
  Em = "useSyncExternalStore" in fr ? ((e) => e.useSyncExternalStore)(fr) : km;
function Cm(e) {
  return Em(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Nm(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return r.add(l), () => r.delete(l);
    },
    dispatch(l, ...o) {
      let i = t[l].call(n, ...o);
      i && ((n = i), r.forEach((u) => u()));
    },
  };
}
function Lm() {
  let e;
  return {
    before({ doc: t }) {
      var n;
      let r = t.documentElement;
      e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
    },
    after({ doc: t, d: n }) {
      let r = t.documentElement,
        l = r.clientWidth - r.offsetWidth,
        o = e - l;
      n.style(r, "paddingRight", `${o}px`);
    },
  };
}
function Pm() {
  if (!Up()) return {};
  let e;
  return {
    before() {
      e = window.pageYOffset;
    },
    after({ doc: t, d: n, meta: r }) {
      function l(o) {
        return r.containers.flatMap((i) => i()).some((i) => i.contains(o));
      }
      n.microTask(() => {
        if (
          window.getComputedStyle(t.documentElement).scrollBehavior !== "auto"
        ) {
          let i = ln();
          i.style(t.documentElement, "scroll-behavior", "auto"),
            n.add(() => n.microTask(() => i.dispose()));
        }
        n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
        let o = null;
        n.addEventListener(
          t,
          "click",
          (i) => {
            if (i.target instanceof HTMLElement)
              try {
                let u = i.target.closest("a");
                if (!u) return;
                let { hash: s } = new URL(u.href),
                  a = t.querySelector(s);
                a && !l(a) && (o = a);
              } catch {}
          },
          !0,
        ),
          n.addEventListener(
            t,
            "touchmove",
            (i) => {
              i.target instanceof HTMLElement &&
                !l(i.target) &&
                i.preventDefault();
            },
            { passive: !1 },
          ),
          n.add(() => {
            window.scrollTo(0, window.pageYOffset + e),
              o &&
                o.isConnected &&
                (o.scrollIntoView({ block: "nearest" }), (o = null));
          });
      });
    },
  };
}
function _m() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Tm(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Yt = Nm(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: ln(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: Tm(n) },
      l = [Pm(), Lm(), _m()];
    l.forEach(({ before: o }) => (o == null ? void 0 : o(r))),
      l.forEach(({ after: o }) => (o == null ? void 0 : o(r)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
Yt.subscribe(() => {
  let e = Yt.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    ((l && !r) || (!l && r)) &&
      Yt.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && Yt.dispatch("TEARDOWN", n);
  }
});
function jm(e, t, n) {
  let r = Cm(Yt),
    l = e ? r.get(e) : void 0,
    o = l ? l.count > 0 : !1;
  return (
    Ie(() => {
      if (!(!e || !t))
        return Yt.dispatch("PUSH", e, n), () => Yt.dispatch("POP", e, n);
    }, [t, e]),
    o
  );
}
let Ho = new Map(),
  Xn = new Map();
function ia(e, t = !0) {
  Ie(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function l() {
      var i;
      if (!r) return;
      let u = (i = Xn.get(r)) != null ? i : 1;
      if ((u === 1 ? Xn.delete(r) : Xn.set(r, u - 1), u !== 1)) return;
      let s = Ho.get(r);
      s &&
        (s["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", s["aria-hidden"]),
        (r.inert = s.inert),
        Ho.delete(r));
    }
    let o = (n = Xn.get(r)) != null ? n : 0;
    return (
      Xn.set(r, o + 1),
      o !== 0 ||
        (Ho.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      l
    );
  }, [e, t]);
}
function $m({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let l = g.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    o = Rr(l),
    i = B(() => {
      var u;
      let s = [];
      for (let a of e)
        a !== null &&
          (a instanceof HTMLElement
            ? s.push(a)
            : "current" in a &&
              a.current instanceof HTMLElement &&
              s.push(a.current));
      if (t != null && t.current) for (let a of t.current) s.push(a);
      for (let a of (u =
        o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null
        ? u
        : [])
        a !== document.body &&
          a !== document.head &&
          a instanceof HTMLElement &&
          a.id !== "headlessui-portal-root" &&
          (a.contains(l.current) || s.some((p) => a.contains(p)) || s.push(a));
      return s;
    });
  return {
    resolveContainers: i,
    contains: B((u) => i().some((s) => s.contains(u))),
    mainTreeNodeRef: l,
    MainTreeNode: g.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : O.createElement(Ui, { features: Bl.Hidden, ref: l });
        },
      [l, n],
    ),
  };
}
var Mm = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(Mm || {}),
  Om = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(Om || {});
let Rm = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  Wl = g.createContext(null);
Wl.displayName = "DialogContext";
function zr(e) {
  let t = g.useContext(Wl);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, zr), n);
  }
  return t;
}
function Fm(e, t, n = () => [document.body]) {
  jm(e, t, (r) => {
    var l;
    return { containers: [...((l = r.containers) != null ? l : []), n] };
  });
}
function zm(e, t) {
  return ae(t.type, Rm, e, t);
}
let Dm = "div",
  Im = Vl.RenderStrategy | Vl.Static;
function Am(e, t) {
  var n;
  let r = An(),
    {
      id: l = `headlessui-dialog-${r}`,
      open: o,
      onClose: i,
      initialFocus: u,
      __demoMode: s = !1,
      ...a
    } = e,
    [p, h] = g.useState(0),
    m = Bu();
  o === void 0 && m !== null && (o = (m & Ce.Open) === Ce.Open);
  let y = g.useRef(null),
    w = Ge(y, t),
    x = Rr(y),
    C = e.hasOwnProperty("open") || m !== null,
    f = e.hasOwnProperty("onClose");
  if (!C && !f)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component.",
    );
  if (!C)
    throw new Error(
      "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.",
    );
  if (!f)
    throw new Error(
      "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.",
    );
  if (typeof o != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`,
    );
  if (typeof i != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`,
    );
  let c = o ? 0 : 1,
    [d, S] = g.useReducer(zm, {
      titleId: null,
      descriptionId: null,
      panelRef: g.createRef(),
    }),
    E = B(() => i(!1)),
    N = B((ne) => S({ type: 0, id: ne })),
    P = In() ? (s ? !1 : c === 0) : !1,
    T = p > 1,
    z = g.useContext(Wl) !== null,
    [M, te] = nm(),
    {
      resolveContainers: he,
      mainTreeNodeRef: ve,
      MainTreeNode: on,
    } = $m({
      portals: M,
      defaultContainers: [(n = d.panelRef.current) != null ? n : y.current],
    }),
    un = T ? "parent" : "leaf",
    ht = m !== null ? (m & Ce.Closing) === Ce.Closing : !1,
    Ue = z || ht ? !1 : P,
    L = g.useCallback(() => {
      var ne, nt;
      return (nt = Array.from(
        (ne = x == null ? void 0 : x.querySelectorAll("body > *")) != null
          ? ne
          : [],
      ).find(($e) =>
        $e.id === "headlessui-portal-root"
          ? !1
          : $e.contains(ve.current) && $e instanceof HTMLElement,
      )) != null
        ? nt
        : null;
    }, [ve]);
  ia(L, Ue);
  let j = T ? !0 : P,
    $ = g.useCallback(() => {
      var ne, nt;
      return (nt = Array.from(
        (ne =
          x == null
            ? void 0
            : x.querySelectorAll("[data-headlessui-portal]")) != null
          ? ne
          : [],
      ).find(($e) => $e.contains(ve.current) && $e instanceof HTMLElement)) !=
        null
        ? nt
        : null;
    }, [ve]);
  ia($, j), Mp(he, E, !(!P || T));
  let Y = !(T || c !== 0);
  $f(x == null ? void 0 : x.defaultView, "keydown", (ne) => {
    Y &&
      (ne.defaultPrevented ||
        (ne.key === jf.Escape &&
          (ne.preventDefault(), ne.stopPropagation(), E())));
  }),
    Fm(x, !(ht || c !== 0 || z), he),
    g.useEffect(() => {
      if (c !== 0 || !y.current) return;
      let ne = new ResizeObserver((nt) => {
        for (let $e of nt) {
          let Dr = $e.target.getBoundingClientRect();
          Dr.x === 0 && Dr.y === 0 && Dr.width === 0 && Dr.height === 0 && E();
        }
      });
      return ne.observe(y.current), () => ne.disconnect();
    }, [c, y, E]);
  let [et, Un] = om(),
    tt = g.useMemo(
      () => [{ dialogState: c, close: E, setTitleId: N }, d],
      [c, d, E, N],
    ),
    At = g.useMemo(() => ({ open: c === 0 }), [c]),
    Bf = {
      ref: w,
      id: l,
      role: "dialog",
      "aria-modal": c === 0 ? !0 : void 0,
      "aria-labelledby": d.titleId,
      "aria-describedby": et,
    };
  return O.createElement(
    fm,
    {
      type: "Dialog",
      enabled: c === 0,
      element: y,
      onUpdate: B((ne, nt) => {
        nt === "Dialog" &&
          ae(ne, {
            [Wi.Add]: () => h(($e) => $e + 1),
            [Wi.Remove]: () => h(($e) => $e - 1),
          });
      }),
    },
    O.createElement(
      Hi,
      { force: !0 },
      O.createElement(
        Bi,
        null,
        O.createElement(
          Wl.Provider,
          { value: tt },
          O.createElement(
            Bi.Group,
            { target: y },
            O.createElement(
              Hi,
              { force: !1 },
              O.createElement(
                Un,
                { slot: At, name: "Dialog.Description" },
                O.createElement(
                  Zn,
                  {
                    initialFocus: u,
                    containers: he,
                    features: P
                      ? ae(un, {
                          parent: Zn.features.RestoreFocus,
                          leaf: Zn.features.All & ~Zn.features.FocusLock,
                        })
                      : Zn.features.None,
                  },
                  O.createElement(
                    te,
                    null,
                    Ae({
                      ourProps: Bf,
                      theirProps: a,
                      slot: At,
                      defaultTag: Dm,
                      features: Im,
                      visible: c === 0,
                      name: "Dialog",
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    O.createElement(on, null),
  );
}
let Um = "div";
function Hm(e, t) {
  let n = An(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...l } = e,
    [{ dialogState: o, close: i }] = zr("Dialog.Overlay"),
    u = Ge(t),
    s = B((p) => {
      if (p.target === p.currentTarget) {
        if (Fp(p.currentTarget)) return p.preventDefault();
        p.preventDefault(), p.stopPropagation(), i();
      }
    }),
    a = g.useMemo(() => ({ open: o === 0 }), [o]);
  return Ae({
    ourProps: { ref: u, id: r, "aria-hidden": !0, onClick: s },
    theirProps: l,
    slot: a,
    defaultTag: Um,
    name: "Dialog.Overlay",
  });
}
let Vm = "div";
function Bm(e, t) {
  let n = An(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...l } = e,
    [{ dialogState: o }, i] = zr("Dialog.Backdrop"),
    u = Ge(t);
  g.useEffect(() => {
    if (i.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.",
      );
  }, [i.panelRef]);
  let s = g.useMemo(() => ({ open: o === 0 }), [o]);
  return O.createElement(
    Hi,
    { force: !0 },
    O.createElement(
      Bi,
      null,
      Ae({
        ourProps: { ref: u, id: r, "aria-hidden": !0 },
        theirProps: l,
        slot: s,
        defaultTag: Vm,
        name: "Dialog.Backdrop",
      }),
    ),
  );
}
let Wm = "div";
function Qm(e, t) {
  let n = An(),
    { id: r = `headlessui-dialog-panel-${n}`, ...l } = e,
    [{ dialogState: o }, i] = zr("Dialog.Panel"),
    u = Ge(t, i.panelRef),
    s = g.useMemo(() => ({ open: o === 0 }), [o]),
    a = B((p) => {
      p.stopPropagation();
    });
  return Ae({
    ourProps: { ref: u, id: r, onClick: a },
    theirProps: l,
    slot: s,
    defaultTag: Wm,
    name: "Dialog.Panel",
  });
}
let Km = "h2";
function Ym(e, t) {
  let n = An(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: o, setTitleId: i }] = zr("Dialog.Title"),
    u = Ge(t);
  g.useEffect(() => (i(r), () => i(null)), [r, i]);
  let s = g.useMemo(() => ({ open: o === 0 }), [o]);
  return Ae({
    ourProps: { ref: u, id: r },
    theirProps: l,
    slot: s,
    defaultTag: Km,
    name: "Dialog.Title",
  });
}
let Gm = je(Am),
  Zm = je(Bm),
  Xm = je(Qm),
  Jm = je(Hm),
  qm = je(Ym),
  ua = Object.assign(Gm, {
    Backdrop: Zm,
    Panel: Xm,
    Overlay: Jm,
    Title: qm,
    Description: am,
  });
function bm(e = 0) {
  let [t, n] = g.useState(e),
    r = Fr(),
    l = g.useCallback(
      (s) => {
        r.current && n((a) => a | s);
      },
      [t, r],
    ),
    o = g.useCallback((s) => !!(t & s), [t]),
    i = g.useCallback(
      (s) => {
        r.current && n((a) => a & ~s);
      },
      [n, r],
    ),
    u = g.useCallback(
      (s) => {
        r.current && n((a) => a ^ s);
      },
      [n],
    );
  return { flags: t, addFlag: l, hasFlag: o, removeFlag: i, toggleFlag: u };
}
function e1(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Vo(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Bo(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function t1(e, t) {
  let n = ln();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [o, i] = [r, l].map((s) => {
      let [a = 0] = s
        .split(",")
        .filter(Boolean)
        .map((p) => (p.includes("ms") ? parseFloat(p) : parseFloat(p) * 1e3))
        .sort((p, h) => h - p);
      return a;
    }),
    u = o + i;
  if (u !== 0) {
    n.group((a) => {
      a.setTimeout(() => {
        t(), a.dispose();
      }, u),
        a.addEventListener(e, "transitionrun", (p) => {
          p.target === p.currentTarget && a.dispose();
        });
    });
    let s = n.addEventListener(e, "transitionend", (a) => {
      a.target === a.currentTarget && (t(), s());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function n1(e, t, n, r) {
  let l = n ? "enter" : "leave",
    o = ln(),
    i = r !== void 0 ? e1(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let u = ae(l, { enter: () => t.enter, leave: () => t.leave }),
    s = ae(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    a = ae(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    Bo(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered,
    ),
    Vo(e, ...t.base, ...u, ...a),
    o.nextFrame(() => {
      Bo(e, ...t.base, ...u, ...a),
        Vo(e, ...t.base, ...u, ...s),
        t1(
          e,
          () => (Bo(e, ...t.base, ...u), Vo(e, ...t.base, ...t.entered), i()),
        );
    }),
    o.dispose
  );
}
function r1({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: o,
}) {
  let i = Fr(),
    u = Hu(),
    s = at(n);
  Ie(() => {
    e && (s.current = "enter");
  }, [e]),
    Ie(() => {
      let a = ln();
      u.add(a.dispose);
      let p = t.current;
      if (p && s.current !== "idle" && i.current)
        return (
          a.dispose(),
          l.current(s.current),
          a.add(
            n1(p, r.current, s.current === "enter", () => {
              a.dispose(), o.current(s.current);
            }),
          ),
          a.dispose
        );
    }, [n]);
}
function gt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let so = g.createContext(null);
so.displayName = "TransitionContext";
var l1 = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(l1 || {});
function o1() {
  let e = g.useContext(so);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return e;
}
function i1() {
  let e = g.useContext(ao);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return e;
}
let ao = g.createContext(null);
ao.displayName = "NestingContext";
function co(e) {
  return "children" in e
    ? co(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Uf(e, t) {
  let n = at(e),
    r = g.useRef([]),
    l = Fr(),
    o = Hu(),
    i = B((y, w = Nt.Hidden) => {
      let x = r.current.findIndex(({ el: C }) => C === y);
      x !== -1 &&
        (ae(w, {
          [Nt.Unmount]() {
            r.current.splice(x, 1);
          },
          [Nt.Hidden]() {
            r.current[x].state = "hidden";
          },
        }),
        o.microTask(() => {
          var C;
          !co(r) && l.current && ((C = n.current) == null || C.call(n));
        }));
    }),
    u = B((y) => {
      let w = r.current.find(({ el: x }) => x === y);
      return (
        w
          ? w.state !== "visible" && (w.state = "visible")
          : r.current.push({ el: y, state: "visible" }),
        () => i(y, Nt.Unmount)
      );
    }),
    s = g.useRef([]),
    a = g.useRef(Promise.resolve()),
    p = g.useRef({ enter: [], leave: [], idle: [] }),
    h = B((y, w, x) => {
      s.current.splice(0),
        t &&
          (t.chains.current[w] = t.chains.current[w].filter(([C]) => C !== y)),
        t == null ||
          t.chains.current[w].push([
            y,
            new Promise((C) => {
              s.current.push(C);
            }),
          ]),
        t == null ||
          t.chains.current[w].push([
            y,
            new Promise((C) => {
              Promise.all(p.current[w].map(([f, c]) => c)).then(() => C());
            }),
          ]),
        w === "enter"
          ? (a.current = a.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => x(w)))
          : x(w);
    }),
    m = B((y, w, x) => {
      Promise.all(p.current[w].splice(0).map(([C, f]) => f))
        .then(() => {
          var C;
          (C = s.current.shift()) == null || C();
        })
        .then(() => x(w));
    });
  return g.useMemo(
    () => ({
      children: r,
      register: u,
      unregister: i,
      onStart: h,
      onStop: m,
      wait: a,
      chains: p,
    }),
    [u, i, r, h, m, p, a],
  );
}
function u1() {}
let s1 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function sa(e) {
  var t;
  let n = {};
  for (let r of s1) n[r] = (t = e[r]) != null ? t : u1;
  return n;
}
function a1(e) {
  let t = g.useRef(sa(e));
  return (
    g.useEffect(() => {
      t.current = sa(e);
    }, [e]),
    t
  );
}
let c1 = "div",
  Hf = Vl.RenderStrategy;
function f1(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: o,
      beforeLeave: i,
      afterLeave: u,
      enter: s,
      enterFrom: a,
      enterTo: p,
      entered: h,
      leave: m,
      leaveFrom: y,
      leaveTo: w,
      ...x
    } = e,
    C = g.useRef(null),
    f = Ge(C, t),
    c = (n = x.unmount) == null || n ? Nt.Unmount : Nt.Hidden,
    { show: d, appear: S, initial: E } = o1(),
    [N, P] = g.useState(d ? "visible" : "hidden"),
    T = i1(),
    { register: z, unregister: M } = T;
  g.useEffect(() => z(C), [z, C]),
    g.useEffect(() => {
      if (c === Nt.Hidden && C.current) {
        if (d && N !== "visible") {
          P("visible");
          return;
        }
        return ae(N, { hidden: () => M(C), visible: () => z(C) });
      }
    }, [N, C, z, M, d, c]);
  let te = at({
      base: gt(x.className),
      enter: gt(s),
      enterFrom: gt(a),
      enterTo: gt(p),
      entered: gt(h),
      leave: gt(m),
      leaveFrom: gt(y),
      leaveTo: gt(w),
    }),
    he = a1({ beforeEnter: l, afterEnter: o, beforeLeave: i, afterLeave: u }),
    ve = In();
  g.useEffect(() => {
    if (ve && N === "visible" && C.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?",
      );
  }, [C, N, ve]);
  let on = E && !S,
    un = S && d && E,
    ht = !ve || on ? "idle" : d ? "enter" : "leave",
    Ue = bm(0),
    L = B((ge) =>
      ae(ge, {
        enter: () => {
          Ue.addFlag(Ce.Opening), he.current.beforeEnter();
        },
        leave: () => {
          Ue.addFlag(Ce.Closing), he.current.beforeLeave();
        },
        idle: () => {},
      }),
    ),
    j = B((ge) =>
      ae(ge, {
        enter: () => {
          Ue.removeFlag(Ce.Opening), he.current.afterEnter();
        },
        leave: () => {
          Ue.removeFlag(Ce.Closing), he.current.afterLeave();
        },
        idle: () => {},
      }),
    ),
    $ = Uf(() => {
      P("hidden"), M(C);
    }, T);
  r1({
    immediate: un,
    container: C,
    classes: te,
    direction: ht,
    onStart: at((ge) => {
      $.onStart(C, ge, L);
    }),
    onStop: at((ge) => {
      $.onStop(C, ge, j), ge === "leave" && !co($) && (P("hidden"), M(C));
    }),
  });
  let D = x,
    Y = { ref: f };
  return (
    un
      ? (D = {
          ...D,
          className: Hl(
            x.className,
            ...te.current.enter,
            ...te.current.enterFrom,
          ),
        })
      : ((D.className = Hl(
          x.className,
          (r = C.current) == null ? void 0 : r.className,
        )),
        D.className === "" && delete D.className),
    O.createElement(
      ao.Provider,
      { value: $ },
      O.createElement(
        Ap,
        { value: ae(N, { visible: Ce.Open, hidden: Ce.Closed }) | Ue.flags },
        Ae({
          ourProps: Y,
          theirProps: D,
          defaultTag: c1,
          features: Hf,
          visible: N === "visible",
          name: "Transition.Child",
        }),
      ),
    )
  );
}
function d1(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...o } = e,
    i = g.useRef(null),
    u = Ge(i, t);
  In();
  let s = Bu();
  if (
    (n === void 0 && s !== null && (n = (s & Ce.Open) === Ce.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop.",
    );
  let [a, p] = g.useState(n ? "visible" : "hidden"),
    h = Uf(() => {
      p("hidden");
    }),
    [m, y] = g.useState(!0),
    w = g.useRef([n]);
  Ie(() => {
    m !== !1 &&
      w.current[w.current.length - 1] !== n &&
      (w.current.push(n), y(!1));
  }, [w, n]);
  let x = g.useMemo(() => ({ show: n, appear: r, initial: m }), [n, r, m]);
  g.useEffect(() => {
    if (n) p("visible");
    else if (!co(h)) p("hidden");
    else {
      let d = i.current;
      if (!d) return;
      let S = d.getBoundingClientRect();
      S.x === 0 && S.y === 0 && S.width === 0 && S.height === 0 && p("hidden");
    }
  }, [n, h]);
  let C = { unmount: l },
    f = B(() => {
      var d;
      m && y(!1), (d = e.beforeEnter) == null || d.call(e);
    }),
    c = B(() => {
      var d;
      m && y(!1), (d = e.beforeLeave) == null || d.call(e);
    });
  return O.createElement(
    ao.Provider,
    { value: h },
    O.createElement(
      so.Provider,
      { value: x },
      Ae({
        ourProps: {
          ...C,
          as: g.Fragment,
          children: O.createElement(Vf, {
            ref: u,
            ...C,
            ...o,
            beforeEnter: f,
            beforeLeave: c,
          }),
        },
        theirProps: {},
        defaultTag: g.Fragment,
        features: Hf,
        visible: a === "visible",
        name: "Transition",
      }),
    ),
  );
}
function p1(e, t) {
  let n = g.useContext(so) !== null,
    r = Bu() !== null;
  return O.createElement(
    O.Fragment,
    null,
    !n && r
      ? O.createElement(Qi, { ref: t, ...e })
      : O.createElement(Vf, { ref: t, ...e }),
  );
}
let Qi = je(d1),
  Vf = je(f1),
  m1 = je(p1),
  Wo = Object.assign(Qi, { Child: m1, Root: Qi });
function h1(e) {
  var t = [],
    n = "";
  for (n in e) t.push(n);
  return t;
}
function Ki(e) {
  return (
    (e = JSON.stringify(e)), !(typeof e != "string" || !/^\{[\s\S]*\}$/.test(e))
  );
}
function v1(e) {
  return e instanceof Array;
}
function g1(e) {
  return Array.prototype.slice.call(e);
}
function Rn() {
  if (!(this instanceof Rn)) return new Rn();
}
Rn.prototype = {
  get: function (e) {
    for (
      var t = e + "=", n = document.cookie.split(";"), r = 0;
      r < n.length;
      r++
    ) {
      for (var l = n[r]; l.charAt(0) == " "; ) l = l.substring(1, l.length);
      if (l.indexOf(t) == 0) return decodeURI(l.substring(t.length, l.length));
    }
    return !1;
  },
  set: function (e, t, n) {
    if (Ki(e)) for (const r in e) this.set(r, e[r], t, n);
    else if (typeof e == "string") {
      const r = Ki(n) ? n : { expires: n },
        l = r.path !== void 0 ? `;path=${r.path};path=/` : ";path=/",
        o = r.domain ? `;domain=${r.domain}` : "",
        i = r.secure ? ";secure" : "";
      let u = r.expires !== void 0 ? r.expires : "";
      typeof u == "string" && u !== ""
        ? (u = new Date(u))
        : typeof u == "number" &&
          (u = new Date(+new Date() + 1e3 * 60 * 60 * 24 * u)),
        u !== "" && "toGMTString" in u && (u = `;expires=${u.toGMTString()}`);
      const s = r.sameSite ? `;SameSite=${r.sameSite}` : "";
      document.cookie = `${e}=${encodeURI(t) + u + l + o + i + s}`;
    }
  },
  remove: function (e) {
    e = v1(e) ? e : g1(arguments);
    for (var t = 0, n = e.length; t < n; t++) this.set(e[t], "", -1);
    return e;
  },
  clear: function (e) {
    return e ? this.remove(e) : this.remove(h1(this.all()));
  },
  all: function () {
    if (document.cookie === "") return {};
    for (
      var e = document.cookie.split("; "), t = {}, n = 0, r = e.length;
      n < r;
      n++
    ) {
      var l = e[n].split("=");
      t[decodeURI(l[0])] = decodeURI(l[1]);
    }
    return t;
  },
};
let Ut = null;
const vl = function (e, t, n) {
  const r = arguments;
  if ((Ut || (Ut = Rn()), r.length === 0)) return Ut.all();
  if (r.length === 1 && e === null) return Ut.clear();
  if (r.length === 2 && !t) return Ut.clear(e);
  if (typeof e == "string" && !t) return Ut.get(e);
  if ((typeof e == "string" && t) || Ki(e)) return Ut.set(e, t, n);
};
for (const e in Rn.prototype) vl[e] = Rn.prototype[e];
const Qo = "consent";
function y1() {
  const [e, t] = g.useState(!1),
    [n, r] = g.useState(!1),
    [l, o] = g.useState(!1);
  console.log(vl(Qo));
  const [i, u] = g.useState(!vl(Qo)),
    s = () => {
      vl.set(Qo, "1", { expires: 400 }), u(!1);
    },
    a = () => {
      r(!1), t(!0);
    },
    p = () => {
      t(!1);
    },
    h = ({ name: m, email: y, phone: w }) => {
      const x = "https://artel.one/api/v2/order/profiles";
      console.log({ name: m, email: y, phone: w }),
        fetch(x, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            profile_name: m,
            profile_email: y,
            profile_phone: w,
            company_name: "",
            company_role: "",
          }),
        })
          .then(function (C) {
            console.log(C), r(!0);
          })
          .catch(function (C) {
            console.log(C);
          });
    };
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx(Wo, {
        appear: !0,
        show: e,
        as: g.Fragment,
        children: v.jsxs(ua, {
          as: "div",
          className: "relative z-10",
          onClose: p,
          children: [
            v.jsx(Wo.Child, {
              as: g.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: v.jsx("div", {
                className: "fixed inset-0 bg-black/25",
              }),
            }),
            v.jsx("div", {
              className: "fixed inset-0 overflow-y-auto",
              children: v.jsx("div", {
                className:
                  "flex min-h-full items-center justify-center p-4 text-center",
                children: v.jsx(Wo.Child, {
                  as: g.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0 scale-95",
                  enterTo: "opacity-100 scale-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100 scale-100",
                  leaveTo: "opacity-0 scale-95",
                  children: v.jsx(ua.Panel, {
                    className:
                      "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                    children: v.jsx("div", {
                      className: "mt-2",
                      children: v.jsx("div", {
                        className:
                          "flex min-h-full flex-col justify-center px-6 py-12 lg:px-8",
                        children: v.jsx("div", {
                          className: "sm:mx-auto sm:w-full sm:max-w-sm",
                          children: n
                            ? v.jsxs(v.Fragment, {
                                children: [
                                  v.jsx("div", {
                                    className:
                                      "sm:mx-auto sm:w-full sm:max-w-sm",
                                    children: v.jsx("h2", {
                                      className:
                                        "text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",
                                      children: "Thank you for your inquiry!",
                                    }),
                                  }),
                                  v.jsx("div", {
                                    className: "mt-4 text-center",
                                    children: "We will contact you in 24 hours",
                                  }),
                                  v.jsx("div", {
                                    children: v.jsx("button", {
                                      type: "button",
                                      className:
                                        "flex w-full justify-center rounded-md mt-6 bg-prime px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                      onClick: p,
                                      children: "Close",
                                    }),
                                  }),
                                ],
                              })
                            : v.jsxs(v.Fragment, {
                                children: [
                                  v.jsx("div", {
                                    className:
                                      "sm:mx-auto sm:w-full sm:max-w-sm",
                                    children: v.jsx("h2", {
                                      className:
                                        "text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",
                                      children: "Request a demo",
                                    }),
                                  }),
                                  v.jsxs("form", {
                                    className: "space-y-6",
                                    action: "#",
                                    method: "POST",
                                    onSubmit: (m) => {
                                      if (
                                        (m.preventDefault(),
                                        console.log(m.target.elements),
                                        !m.target || !m.target.elements)
                                      )
                                        return !1;
                                      h({
                                        name: m.target.elements.name.value,
                                        email: m.target.elements.email.value,
                                        phone: m.target.elements.phone.value,
                                      });
                                    },
                                    children: [
                                      v.jsxs("div", {
                                        children: [
                                          v.jsx("label", {
                                            htmlFor: "name",
                                            className:
                                              "block text-sm font-medium leading-6 text-gray-900",
                                            children: "Name *",
                                          }),
                                          v.jsx("div", {
                                            className: "mt-2",
                                            children: v.jsx("input", {
                                              id: "name",
                                              name: "name",
                                              type: "text",
                                              autoComplete: "name",
                                              required: !0,
                                              className:
                                                "block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                            }),
                                          }),
                                        ],
                                      }),
                                      v.jsxs("div", {
                                        children: [
                                          v.jsx("label", {
                                            htmlFor: "email",
                                            className:
                                              "block text-sm font-medium leading-6 text-gray-900",
                                            children: "Email *",
                                          }),
                                          v.jsx("div", {
                                            className: "mt-2",
                                            children: v.jsx("input", {
                                              id: "email",
                                              name: "email",
                                              type: "email",
                                              autoComplete: "email",
                                              required: !0,
                                              className:
                                                "block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                            }),
                                          }),
                                        ],
                                      }),
                                      v.jsxs("div", {
                                        children: [
                                          v.jsx("label", {
                                            htmlFor: "phone",
                                            className:
                                              "block text-sm font-medium leading-6 text-gray-900",
                                            children: "Phone *",
                                          }),
                                          v.jsx("div", {
                                            className: "mt-2",
                                            children: v.jsx("input", {
                                              id: "phone",
                                              name: "phone",
                                              type: "text",
                                              autoComplete: "phone",
                                              required: !0,
                                              className:
                                                "block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                            }),
                                          }),
                                        ],
                                      }),
                                      v.jsx("div", {
                                        children: v.jsx("button", {
                                          type: "submit",
                                          className:
                                            "flex w-full justify-center rounded-md bg-prime px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                          children: "Send",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          ],
        }),
      }),
      l &&
        v.jsx("div", {
          className: "fixed left-0 right-0 z-8 top-0 bottom-0 bg-gray-950/50",
        }),
      v.jsxs("div", {
        className: "bg-white",
        children: [
          v.jsx("header", {
            className: "py-4 md:py-6",
            children: v.jsx("div", {
              className: "container px-4 mx-auto sm:px-6 lg:px-8",
              children: v.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  v.jsx("div", {
                    className: "flex-shrink-0",
                    children: v.jsx("a", {
                      href: "#",
                      title: "",
                      className:
                        "flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",
                      children: v.jsx("img", {
                        className: "w-auto h-5",
                        src: vp,
                        alt: "",
                      }),
                    }),
                  }),
                  v.jsx("div", {
                    className:
                      "hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16",
                  }),
                  v.jsx("div", {
                    className:
                      "lg:ml-auto lg:items-center lg:space-x-8 xl:space-x-10",
                    children: v.jsx("a", {
                      href: "#",
                      title: "",
                      onClick: a,
                      className:
                        "px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-prime border border-transparent rounded-xl hover:opacity-90 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
                      role: "button",
                      children: "Request demo",
                    }),
                  }),
                ],
              }),
            }),
          }),
          v.jsxs("section", {
            className: "overflow-hidden pb-12 xl:pb-24",
            children: [
              " ",
              v.jsxs("div", {
                className: "pt-12 container mx-auto sm:px-6 lg:px-8 relative",
                children: [
                  v.jsx("div", {
                    className:
                      "absolute 2xl:top-[-56px] 2xl:left-[733px] xl:left-[600px] xl:top-[20px] lg:left-[400px] lg:top-[90px]",
                    children: v.jsx("img", {
                      className: "min-w-[1087px] h-[753px] hidden lg:block",
                      src: yp,
                      alt: "",
                    }),
                  }),
                  v.jsxs("div", {
                    className: "px-4 mx-auto max-w-7xl",
                    children: [
                      " ",
                      v.jsx("div", {
                        className:
                          "grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16",
                        children: v.jsxs("div", {
                          children: [
                            v.jsxs("div", {
                              className: "text-center lg:text-left",
                              children: [
                                v.jsxs("h1", {
                                  className:
                                    "text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj relative",
                                  children: [
                                    v.jsx("img", {
                                      src: wp,
                                      alt: "",
                                      className:
                                        "absolute w-[372px] h-[110px] z-0 hidden sm:block sm:top-[-20px] lg:left-[-63px] lg:top-[-10px]",
                                    }),
                                    v.jsx("img", {
                                      src: xp,
                                      alt: "",
                                      className:
                                        "absolute w-[331px] h-[120px] z-0 hidden sm:block sm:left-[273px] sm:w-[240px] lg:left-[-20px] lg:w-[310px] xl:left-[263px] bottom-[-30px]",
                                    }),
                                    v.jsx("span", {
                                      className: "z-0 relative font-pj",
                                      children:
                                        "Maximise your marketing channels efficiency with AI",
                                    }),
                                  ],
                                }),
                                v.jsx("p", {
                                  className:
                                    "mt-2 text-lg text-gray-600 sm:mt-8",
                                  children:
                                    "We will significantly improve key metrics employing predictive AI analytics and ML algorithms to optimise your marketing activities",
                                }),
                              ],
                            }),
                            v.jsxs("div", {
                              className:
                                "flex gap-4 sm:gap-7 mt-10 flex-col sm:flex-row",
                              children: [
                                v.jsx("a", {
                                  href: "#",
                                  title: "",
                                  onClick: a,
                                  className:
                                    "px-10 py-3 text-lg leading-6 font-bold text-white transition-all duration-200 bg-prime border border-transparent rounded-xl hover:opacity-90 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:w-1/2 lg:w-auto text-center",
                                  role: "button",
                                  children: "Get started",
                                }),
                                v.jsx("a", {
                                  href: "#",
                                  title: "",
                                  onClick: a,
                                  className:
                                    "px-10 py-3 text-lg leading-6 font-bold text-black transition-all duration-200 box-border border-[3px] border-violet rounded-xl hover:bg-prime hover:text-white font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:w-1/2 lg:w-auto text-center",
                                  role: "button",
                                  children: "Talk to sales",
                                }),
                              ],
                            }),
                            v.jsxs("div", {
                              className:
                                "flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8",
                              children: [
                                v.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    v.jsxs("p", {
                                      children: [
                                        v.jsx("span", {
                                          className:
                                            "text-2xl font-bold text-gray-900 sm:text-4xl font-inter",
                                          children: "✕",
                                        }),
                                        v.jsx("span", {
                                          className:
                                            "text-3xl font-bold text-gray-900 sm:text-5xl font-pj",
                                          children: "2",
                                        }),
                                      ],
                                    }),
                                    v.jsxs("p", {
                                      className: "ml-3 text-sm text-gray-900",
                                      children: [
                                        v.jsx("span", {
                                          className: "font-bold",
                                          children: "Сbuyer",
                                        }),
                                        " with ML-scoring ",
                                        v.jsx("br", {}),
                                        "segments",
                                      ],
                                    }),
                                  ],
                                }),
                                v.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    v.jsxs("p", {
                                      children: [
                                        v.jsx("span", {
                                          className:
                                            "text-2xl font-bold text-gray-900 sm:text-4xl font-inter",
                                          children: "✕",
                                        }),
                                        v.jsx("span", {
                                          className:
                                            "text-3xl font-bold text-gray-900 sm:text-5xl font-pj",
                                          children: "4",
                                        }),
                                      ],
                                    }),
                                    v.jsxs("p", {
                                      className: "ml-3 text-sm text-gray-900",
                                      children: [
                                        v.jsx("span", {
                                          className: "font-bold",
                                          children: "ROMI",
                                        }),
                                        " with ML-scoring ",
                                        v.jsx("br", {}),
                                        "segments",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          v.jsxs("section", {
            className: "pt-12 pb-12 sm:pb-8 lg:pt-8 bg-black",
            children: [
              v.jsxs("div", {
                className:
                  "flex flex-col lg:flex-row justify-between px-4 py-11 container mx-auto sm:px-8 lg:px-10 gap-14 lg:gap-4 lg:max-w-7xl max-w-lg",
                children: [
                  v.jsxs("div", {
                    className: "flex flex-col lg:w-1/3",
                    children: [
                      v.jsx("img", {
                        className: "w-14 pl-3",
                        src: ta,
                        alt: "",
                      }),
                      v.jsx("p", {
                        className:
                          "text-xl font-bold text-white sm:text-base font-pj mt-8",
                        children: "Boosted profits",
                      }),
                      v.jsxs("p", {
                        className: "text-lg text-gray-300 mt-5",
                        children: [
                          "Cutting edge advantage ",
                          v.jsx("br", { className: "hidden lg:block" }),
                          "of tailored ML resulting in boosted ",
                          v.jsx("br", { className: "hidden lg:block" }),
                          "ROMI, ARPU and reduced CAC, Churn",
                        ],
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "flex flex-col lg:w-1/3",
                    children: [
                      v.jsx("img", {
                        className: "w-14 pl-3",
                        src: na,
                        alt: "",
                      }),
                      v.jsx("p", {
                        className:
                          "text-xl font-bold text-white sm:text-base font-pj mt-8",
                        children: "ML-attribution",
                      }),
                      v.jsx("p", {
                        className: "text-lg text-gray-300 mt-5",
                        children:
                          "Find out which marketing channel is most likely to lead to customer conversions",
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "flex flex-col lg:w-1/3",
                    children: [
                      v.jsx("img", {
                        className: "w-14 pl-3",
                        src: ra,
                        alt: "",
                      }),
                      v.jsx("p", {
                        className:
                          "text-xl font-bold text-white sm:text-base font-pj mt-8",
                        children: "Predictive analytics",
                      }),
                      v.jsx("p", {
                        className: "text-lg text-gray-300 mt-5",
                        children:
                          "Enrich your customer data with accurate predictions of their future actions and value: Lead, Cbuyer, ARPU, LTV...",
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                className:
                  "flex flex-col lg:flex-row justify-between px-4 py-11 container mx-auto sm:px-8 lg:px-10 gap-14 lg:gap-4 lg:max-w-7xl max-w-lg",
                children: [
                  v.jsxs("div", {
                    className: "flex flex-col lg:w-1/3",
                    children: [
                      v.jsx("img", {
                        className: "w-14 pl-3",
                        src: ta,
                        alt: "",
                      }),
                      v.jsx("p", {
                        className:
                          "text-xl font-bold text-white sm:text-base font-pj mt-8",
                        children: "Data personalisation",
                      }),
                      v.jsxs("p", {
                        className: "text-lg text-gray-300 mt-5",
                        children: [
                          "Offer personalised pricing and suggestions ",
                          v.jsx("br", { className: "hidden lg:block" }),
                          "to your customers based on their interests ",
                          v.jsx("br", { className: "hidden lg:block" }),
                          "and behaviours",
                        ],
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "flex flex-col lg:w-1/3",
                    children: [
                      v.jsx("img", {
                        className: "w-14 pl-3",
                        src: na,
                        alt: "",
                      }),
                      v.jsx("p", {
                        className:
                          "text-xl font-bold text-white sm:text-base font-pj mt-8",
                        children: "ML experiments",
                      }),
                      v.jsxs("p", {
                        className: "text-lg text-gray-300 mt-5",
                        children: [
                          "Flexible system of iterative A/B tests ",
                          v.jsx("br", { className: "hidden lg:block" }),
                          "on HADI cycles for marketing activities",
                        ],
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "flex flex-col lg:w-1/3",
                    children: [
                      v.jsx("img", {
                        className: "w-14 pl-3",
                        src: ra,
                        alt: "",
                      }),
                      v.jsx("p", {
                        className:
                          "text-xl font-bold text-white sm:text-base font-pj mt-8",
                        children: "End-to-end analytics",
                      }),
                      v.jsx("p", {
                        className: "text-lg text-gray-300 mt-5",
                        children:
                          "Comprehensive customer data from all sites and channels in one place",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i &&
            v.jsxs("div", {
              className:
                "max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-10 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between",
              children: [
                v.jsxs("div", {
                  className: "w-full",
                  children: [
                    "By clicking “Allow Cookies” you agree to our website′s cookie use as described in our",
                    " ",
                    v.jsx("a", {
                      href: "#",
                      className: "text-prime whitespace-nowrap hover:underline",
                      children: "Cookies Policy",
                    }),
                    ".",
                  ],
                }),
                v.jsxs("div", {
                  className: "flex gap-4 items-center flex-shrink-0",
                  children: [
                    v.jsx("button", {
                      className:
                        "text-prime focus:outline-none hover:underline",
                      onClick: () => u(!1),
                      children: "Decline",
                    }),
                    v.jsx("button", {
                      className:
                        "bg-prime px-5 py-2 text-white rounded-md hover:opacity-95 focus:outline-none",
                      onClick: s,
                      children: "Allow Cookies",
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
      v.jsx("footer", {
        className: "bg-black",
        children: v.jsxs("div", {
          className:
            "py-6 lg:py-8 container sm:px-6 lg:px-8 px-4 mx-auto max-w-7xl",
          children: [
            v.jsx("hr", {
              className: "mb-6 border-gray-700 sm:mx-auto lg:mb-8",
            }),
            v.jsxs("div", {
              className: "md:flex md:justify-between",
              children: [
                v.jsx("div", { className: "mb-6 md:mb-0" }),
                v.jsxs("div", {
                  className: "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3",
                  children: [
                    v.jsx("div", {}),
                    v.jsx("div", {}),
                    v.jsxs("div", {
                      children: [
                        v.jsx("h2", {
                          className:
                            "mb-6 text-sm font-semibold text-white uppercase",
                          children: "Legal",
                        }),
                        v.jsxs("ul", {
                          className:
                            "text-gray-500 dark:text-gray-400 font-medium",
                          children: [
                            v.jsx("li", {
                              className: "mb-4",
                              children: v.jsx("a", {
                                href: "/docs/terms-and-conditions.pdf",
                                className: "hover:underline",
                                children: "Terms and Conditions",
                              }),
                            }),
                            v.jsx("li", {
                              className: "mb-4",
                              children: v.jsx("a", {
                                href: "/docs/privacy-policy.pdf",
                                className: "hover:underline",
                                children: "Privacy Policy",
                              }),
                            }),
                            v.jsx("li", {
                              className: "mb-4",
                              children: v.jsx("a", {
                                href: "/docs/cookie-policy.pdf",
                                className: "hover:underline",
                                children: "Cookies Policy",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            v.jsx("hr", {
              className: "my-6 border-gray-700 sm:mx-auto lg:my-8",
            }),
            v.jsxs("div", {
              className: "sm:flex sm:items-center sm:justify-between",
              children: [
                v.jsx("a", {
                  href: "#",
                  title: "",
                  className:
                    "flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-2 sm:mb-0",
                  children: v.jsx("img", {
                    className: "w-auto h-4",
                    src: gp,
                    alt: "",
                  }),
                }),
                v.jsx("span", {
                  className:
                    "text-sm text-gray-500 sm:text-center dark:text-gray-400",
                  children: "© 2023 Reboost.ai. All rights reserved.",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
Ko.createRoot(document.getElementById("root")).render(
  v.jsx(O.StrictMode, { children: v.jsx(y1, {}) }),
);
