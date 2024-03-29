function kx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function nm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ex = { exports: {} },
  Yc = {},
  Px = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ml = Symbol.for("react.element"),
  Qk = Symbol.for("react.portal"),
  Zk = Symbol.for("react.fragment"),
  Jk = Symbol.for("react.strict_mode"),
  e2 = Symbol.for("react.profiler"),
  t2 = Symbol.for("react.provider"),
  n2 = Symbol.for("react.context"),
  r2 = Symbol.for("react.forward_ref"),
  o2 = Symbol.for("react.suspense"),
  i2 = Symbol.for("react.memo"),
  a2 = Symbol.for("react.lazy"),
  w0 = Symbol.iterator;
function s2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (w0 && e[w0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Rx = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  $x = Object.assign,
  Mx = {};
function ba(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mx),
    (this.updater = n || Rx);
}
ba.prototype.isReactComponent = {};
ba.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ba.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Tx() {}
Tx.prototype = ba.prototype;
function rm(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mx),
    (this.updater = n || Rx);
}
var om = (rm.prototype = new Tx());
om.constructor = rm;
$x(om, ba.prototype);
om.isPureReactComponent = !0;
var S0 = Array.isArray,
  Nx = Object.prototype.hasOwnProperty,
  im = { current: null },
  Ox = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ax(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Nx.call(t, r) && !Ox.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Ml,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: im.current,
  };
}
function l2(e, t) {
  return {
    $$typeof: Ml,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function am(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ml;
}
function u2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var C0 = /\/+/g;
function Rf(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? u2("" + e.key)
    : t.toString(36);
}
function Ru(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ml:
          case Qk:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + Rf(a, 0) : r),
      S0(o)
        ? ((n = ""),
          e != null && (n = e.replace(C0, "$&/") + "/"),
          Ru(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (am(o) &&
            (o = l2(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(C0, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), S0(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + Rf(i, s);
      a += Ru(i, t, n, l, o);
    }
  else if (((l = s2(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Rf(i, s++)), (a += Ru(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Xl(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ru(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function c2(e) {
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
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ht = { current: null },
  $u = { transition: null },
  d2 = {
    ReactCurrentDispatcher: Ht,
    ReactCurrentBatchConfig: $u,
    ReactCurrentOwner: im,
  };
Ee.Children = {
  map: Xl,
  forEach: function (e, t, n) {
    Xl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Xl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!am(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Ee.Component = ba;
Ee.Fragment = Zk;
Ee.Profiler = e2;
Ee.PureComponent = rm;
Ee.StrictMode = Jk;
Ee.Suspense = o2;
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d2;
Ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = $x({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = im.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      Nx.call(t, l) &&
        !Ox.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Ml, type: e.type, key: o, ref: i, props: r, _owner: a };
};
Ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: n2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: t2, _context: e }),
    (e.Consumer = e)
  );
};
Ee.createElement = Ax;
Ee.createFactory = function (e) {
  var t = Ax.bind(null, e);
  return (t.type = e), t;
};
Ee.createRef = function () {
  return { current: null };
};
Ee.forwardRef = function (e) {
  return { $$typeof: r2, render: e };
};
Ee.isValidElement = am;
Ee.lazy = function (e) {
  return { $$typeof: a2, _payload: { _status: -1, _result: e }, _init: c2 };
};
Ee.memo = function (e, t) {
  return { $$typeof: i2, type: e, compare: t === void 0 ? null : t };
};
Ee.startTransition = function (e) {
  var t = $u.transition;
  $u.transition = {};
  try {
    e();
  } finally {
    $u.transition = t;
  }
};
Ee.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Ee.useCallback = function (e, t) {
  return Ht.current.useCallback(e, t);
};
Ee.useContext = function (e) {
  return Ht.current.useContext(e);
};
Ee.useDebugValue = function () {};
Ee.useDeferredValue = function (e) {
  return Ht.current.useDeferredValue(e);
};
Ee.useEffect = function (e, t) {
  return Ht.current.useEffect(e, t);
};
Ee.useId = function () {
  return Ht.current.useId();
};
Ee.useImperativeHandle = function (e, t, n) {
  return Ht.current.useImperativeHandle(e, t, n);
};
Ee.useInsertionEffect = function (e, t) {
  return Ht.current.useInsertionEffect(e, t);
};
Ee.useLayoutEffect = function (e, t) {
  return Ht.current.useLayoutEffect(e, t);
};
Ee.useMemo = function (e, t) {
  return Ht.current.useMemo(e, t);
};
Ee.useReducer = function (e, t, n) {
  return Ht.current.useReducer(e, t, n);
};
Ee.useRef = function (e) {
  return Ht.current.useRef(e);
};
Ee.useState = function (e) {
  return Ht.current.useState(e);
};
Ee.useSyncExternalStore = function (e, t, n) {
  return Ht.current.useSyncExternalStore(e, t, n);
};
Ee.useTransition = function () {
  return Ht.current.useTransition();
};
Ee.version = "18.2.0";
Px.exports = Ee;
var y = Px.exports;
const ee = nm(y),
  Xu = kx({ __proto__: null, default: ee }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f2 = y,
  p2 = Symbol.for("react.element"),
  h2 = Symbol.for("react.fragment"),
  m2 = Object.prototype.hasOwnProperty,
  g2 = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  v2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function _x(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) m2.call(t, r) && !v2.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: p2,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: g2.current,
  };
}
Yc.Fragment = h2;
Yc.jsx = _x;
Yc.jsxs = _x;
Ex.exports = Yc;
var C = Ex.exports,
  Rp = {},
  Ix = { exports: {} },
  pn = {},
  Lx = { exports: {} },
  jx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, j) {
    var U = O.length;
    O.push(j);
    e: for (; 0 < U; ) {
      var X = (U - 1) >>> 1,
        Y = O[X];
      if (0 < o(Y, j)) (O[X] = j), (O[U] = Y), (U = X);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var j = O[0],
      U = O.pop();
    if (U !== j) {
      O[0] = U;
      e: for (var X = 0, Y = O.length, ce = Y >>> 1; X < ce; ) {
        var Q = 2 * (X + 1) - 1,
          q = O[Q],
          ne = Q + 1,
          ge = O[ne];
        if (0 > o(q, U))
          ne < Y && 0 > o(ge, q)
            ? ((O[X] = ge), (O[ne] = U), (X = ne))
            : ((O[X] = q), (O[Q] = U), (X = Q));
        else if (ne < Y && 0 > o(ge, U)) (O[X] = ge), (O[ne] = U), (X = ne);
        else break e;
      }
    }
    return j;
  }
  function o(O, j) {
    var U = O.sortIndex - j.sortIndex;
    return U !== 0 ? U : O.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    p = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(O) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= O)
        r(u), (j.sortIndex = j.expirationTime), t(l, j);
      else break;
      j = n(u);
    }
  }
  function S(O) {
    if (((g = !1), x(O), !p))
      if (n(l) !== null) (p = !0), D(E);
      else {
        var j = n(u);
        j !== null && F(S, j.startTime - O);
      }
  }
  function E(O, j) {
    (p = !1), g && ((g = !1), v(R), (R = -1)), (h = !0);
    var U = f;
    try {
      for (
        x(j), d = n(l);
        d !== null && (!(d.expirationTime > j) || (O && !M()));

      ) {
        var X = d.callback;
        if (typeof X == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var Y = X(d.expirationTime <= j);
          (j = e.unstable_now()),
            typeof Y == "function" ? (d.callback = Y) : d === n(l) && r(l),
            x(j);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var ce = !0;
      else {
        var Q = n(u);
        Q !== null && F(S, Q.startTime - j), (ce = !1);
      }
      return ce;
    } finally {
      (d = null), (f = U), (h = !1);
    }
  }
  var b = !1,
    k = null,
    R = -1,
    T = 5,
    $ = -1;
  function M() {
    return !(e.unstable_now() - $ < T);
  }
  function L() {
    if (k !== null) {
      var O = e.unstable_now();
      $ = O;
      var j = !0;
      try {
        j = k(!0, O);
      } finally {
        j ? _() : ((b = !1), (k = null));
      }
    } else b = !1;
  }
  var _;
  if (typeof m == "function")
    _ = function () {
      m(L);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      A = N.port2;
    (N.port1.onmessage = L),
      (_ = function () {
        A.postMessage(null);
      });
  } else
    _ = function () {
      w(L, 0);
    };
  function D(O) {
    (k = O), b || ((b = !0), _());
  }
  function F(O, j) {
    R = w(function () {
      O(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || h || ((p = !0), D(E));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (O) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = f;
      }
      var U = f;
      f = j;
      try {
        return O();
      } finally {
        f = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, j) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var U = f;
      f = O;
      try {
        return j();
      } finally {
        f = U;
      }
    }),
    (e.unstable_scheduleCallback = function (O, j, U) {
      var X = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? X + U : X))
          : (U = X),
        O)
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
        (Y = U + Y),
        (O = {
          id: c++,
          callback: j,
          priorityLevel: O,
          startTime: U,
          expirationTime: Y,
          sortIndex: -1,
        }),
        U > X
          ? ((O.sortIndex = U),
            t(u, O),
            n(l) === null &&
              O === n(u) &&
              (g ? (v(R), (R = -1)) : (g = !0), F(S, U - X)))
          : ((O.sortIndex = Y), t(l, O), p || h || ((p = !0), D(E))),
        O
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (O) {
      var j = f;
      return function () {
        var U = f;
        f = j;
        try {
          return O.apply(this, arguments);
        } finally {
          f = U;
        }
      };
    });
})(jx);
Lx.exports = jx;
var y2 = Lx.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dx = y,
  cn = y2;
function V(e) {
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
var Fx = new Set(),
  Ls = {};
function ei(e, t) {
  qi(e, t), qi(e + "Capture", t);
}
function qi(e, t) {
  for (Ls[e] = t, e = 0; e < t.length; e++) Fx.add(t[e]);
}
var Er = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $p = Object.prototype.hasOwnProperty,
  x2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  k0 = {},
  E0 = {};
function b2(e) {
  return $p.call(E0, e)
    ? !0
    : $p.call(k0, e)
    ? !1
    : x2.test(e)
    ? (E0[e] = !0)
    : ((k0[e] = !0), !1);
}
function w2(e, t, n, r) {
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
function S2(e, t, n, r) {
  if (t === null || typeof t > "u" || w2(e, t, n, r)) return !0;
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
function Vt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Nt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Nt[e] = new Vt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Nt[t] = new Vt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Nt[e] = new Vt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Nt[e] = new Vt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Nt[e] = new Vt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Nt[e] = new Vt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Nt[e] = new Vt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Nt[e] = new Vt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Nt[e] = new Vt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var sm = /[\-:]([a-z])/g;
function lm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(sm, lm);
    Nt[t] = new Vt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(sm, lm);
    Nt[t] = new Vt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(sm, lm);
  Nt[t] = new Vt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Nt[e] = new Vt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Nt.xlinkHref = new Vt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Nt[e] = new Vt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function um(e, t, n, r) {
  var o = Nt.hasOwnProperty(t) ? Nt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (S2(t, n, o, r) && (n = null),
    r || o === null
      ? b2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ar = Dx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ql = Symbol.for("react.element"),
  Si = Symbol.for("react.portal"),
  Ci = Symbol.for("react.fragment"),
  cm = Symbol.for("react.strict_mode"),
  Mp = Symbol.for("react.profiler"),
  zx = Symbol.for("react.provider"),
  Bx = Symbol.for("react.context"),
  dm = Symbol.for("react.forward_ref"),
  Tp = Symbol.for("react.suspense"),
  Np = Symbol.for("react.suspense_list"),
  fm = Symbol.for("react.memo"),
  Vr = Symbol.for("react.lazy"),
  Ux = Symbol.for("react.offscreen"),
  P0 = Symbol.iterator;
function Aa(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (P0 && e[P0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var et = Object.assign,
  $f;
function ls(e) {
  if ($f === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $f = (t && t[1]) || "";
    }
  return (
    `
` +
    $f +
    e
  );
}
var Mf = !1;
function Tf(e, t) {
  if (!e || Mf) return "";
  Mf = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Mf = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ls(e) : "";
}
function C2(e) {
  switch (e.tag) {
    case 5:
      return ls(e.type);
    case 16:
      return ls("Lazy");
    case 13:
      return ls("Suspense");
    case 19:
      return ls("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Tf(e.type, !1)), e;
    case 11:
      return (e = Tf(e.type.render, !1)), e;
    case 1:
      return (e = Tf(e.type, !0)), e;
    default:
      return "";
  }
}
function Op(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ci:
      return "Fragment";
    case Si:
      return "Portal";
    case Mp:
      return "Profiler";
    case cm:
      return "StrictMode";
    case Tp:
      return "Suspense";
    case Np:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Bx:
        return (e.displayName || "Context") + ".Consumer";
      case zx:
        return (e._context.displayName || "Context") + ".Provider";
      case dm:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fm:
        return (
          (t = e.displayName || null), t !== null ? t : Op(e.type) || "Memo"
        );
      case Vr:
        (t = e._payload), (e = e._init);
        try {
          return Op(e(t));
        } catch {}
    }
  return null;
}
function k2(e) {
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
      return Op(t);
    case 8:
      return t === cm ? "StrictMode" : "Mode";
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
function uo(e) {
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
function Wx(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function E2(e) {
  var t = Wx(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ql(e) {
  e._valueTracker || (e._valueTracker = E2(e));
}
function Hx(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Wx(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function qu(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ap(e, t) {
  var n = t.checked;
  return et({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function R0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = uo(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Vx(e, t) {
  (t = t.checked), t != null && um(e, "checked", t, !1);
}
function _p(e, t) {
  Vx(e, t);
  var n = uo(t.value),
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
    ? Ip(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ip(e, t.type, uo(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function $0(e, t, n) {
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
function Ip(e, t, n) {
  (t !== "number" || qu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var us = Array.isArray;
function ji(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + uo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Lp(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return et({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function M0(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(V(92));
      if (us(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: uo(n) };
}
function Kx(e, t) {
  var n = uo(t.value),
    r = uo(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function T0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function jp(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Gx(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Zl,
  Yx = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Zl = Zl || document.createElement("div"),
          Zl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Zl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function js(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ms = {
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
  P2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ms).forEach(function (e) {
  P2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ms[t] = ms[e]);
  });
});
function Xx(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ms.hasOwnProperty(e) && ms[e])
    ? ("" + t).trim()
    : t + "px";
}
function qx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Xx(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var R2 = et(
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
  }
);
function Dp(e, t) {
  if (t) {
    if (R2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function Fp(e, t) {
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
var zp = null;
function pm(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Bp = null,
  Di = null,
  Fi = null;
function N0(e) {
  if ((e = Ol(e))) {
    if (typeof Bp != "function") throw Error(V(280));
    var t = e.stateNode;
    t && ((t = Jc(t)), Bp(e.stateNode, e.type, t));
  }
}
function Qx(e) {
  Di ? (Fi ? Fi.push(e) : (Fi = [e])) : (Di = e);
}
function Zx() {
  if (Di) {
    var e = Di,
      t = Fi;
    if (((Fi = Di = null), N0(e), t)) for (e = 0; e < t.length; e++) N0(t[e]);
  }
}
function Jx(e, t) {
  return e(t);
}
function eb() {}
var Nf = !1;
function tb(e, t, n) {
  if (Nf) return e(t, n);
  Nf = !0;
  try {
    return Jx(e, t, n);
  } finally {
    (Nf = !1), (Di !== null || Fi !== null) && (eb(), Zx());
  }
}
function Ds(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Jc(n);
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
  if (n && typeof n != "function") throw Error(V(231, t, typeof n));
  return n;
}
var Up = !1;
if (Er)
  try {
    var _a = {};
    Object.defineProperty(_a, "passive", {
      get: function () {
        Up = !0;
      },
    }),
      window.addEventListener("test", _a, _a),
      window.removeEventListener("test", _a, _a);
  } catch {
    Up = !1;
  }
function $2(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var gs = !1,
  Qu = null,
  Zu = !1,
  Wp = null,
  M2 = {
    onError: function (e) {
      (gs = !0), (Qu = e);
    },
  };
function T2(e, t, n, r, o, i, a, s, l) {
  (gs = !1), (Qu = null), $2.apply(M2, arguments);
}
function N2(e, t, n, r, o, i, a, s, l) {
  if ((T2.apply(this, arguments), gs)) {
    if (gs) {
      var u = Qu;
      (gs = !1), (Qu = null);
    } else throw Error(V(198));
    Zu || ((Zu = !0), (Wp = u));
  }
}
function ti(e) {
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
function nb(e) {
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
function O0(e) {
  if (ti(e) !== e) throw Error(V(188));
}
function O2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ti(e)), t === null)) throw Error(V(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return O0(o), e;
        if (i === r) return O0(o), t;
        i = i.sibling;
      }
      throw Error(V(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(V(189));
      }
    }
    if (n.alternate !== r) throw Error(V(190));
  }
  if (n.tag !== 3) throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function rb(e) {
  return (e = O2(e)), e !== null ? ob(e) : null;
}
function ob(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ob(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ib = cn.unstable_scheduleCallback,
  A0 = cn.unstable_cancelCallback,
  A2 = cn.unstable_shouldYield,
  _2 = cn.unstable_requestPaint,
  ct = cn.unstable_now,
  I2 = cn.unstable_getCurrentPriorityLevel,
  hm = cn.unstable_ImmediatePriority,
  ab = cn.unstable_UserBlockingPriority,
  Ju = cn.unstable_NormalPriority,
  L2 = cn.unstable_LowPriority,
  sb = cn.unstable_IdlePriority,
  Xc = null,
  sr = null;
function j2(e) {
  if (sr && typeof sr.onCommitFiberRoot == "function")
    try {
      sr.onCommitFiberRoot(Xc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xn = Math.clz32 ? Math.clz32 : z2,
  D2 = Math.log,
  F2 = Math.LN2;
function z2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((D2(e) / F2) | 0)) | 0;
}
var Jl = 64,
  eu = 4194304;
function cs(e) {
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
function ec(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = cs(s)) : ((i &= a), i !== 0 && (r = cs(i)));
  } else (a = n & ~o), a !== 0 ? (r = cs(a)) : i !== 0 && (r = cs(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Xn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function B2(e, t) {
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
function U2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Xn(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & n) || s & r) && (o[a] = B2(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Hp(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function lb() {
  var e = Jl;
  return (Jl <<= 1), !(Jl & 4194240) && (Jl = 64), e;
}
function Of(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Tl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xn(t)),
    (e[t] = n);
}
function W2(e, t) {
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
    var o = 31 - Xn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function mm(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var De = 0;
function ub(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var cb,
  gm,
  db,
  fb,
  pb,
  Vp = !1,
  tu = [],
  eo = null,
  to = null,
  no = null,
  Fs = new Map(),
  zs = new Map(),
  Gr = [],
  H2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function _0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      eo = null;
      break;
    case "dragenter":
    case "dragleave":
      to = null;
      break;
    case "mouseover":
    case "mouseout":
      no = null;
      break;
    case "pointerover":
    case "pointerout":
      Fs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zs.delete(t.pointerId);
  }
}
function Ia(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ol(t)), t !== null && gm(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function V2(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (eo = Ia(eo, e, t, n, r, o)), !0;
    case "dragenter":
      return (to = Ia(to, e, t, n, r, o)), !0;
    case "mouseover":
      return (no = Ia(no, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Fs.set(i, Ia(Fs.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), zs.set(i, Ia(zs.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function hb(e) {
  var t = Mo(e.target);
  if (t !== null) {
    var n = ti(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = nb(n)), t !== null)) {
          (e.blockedOn = t),
            pb(e.priority, function () {
              db(n);
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
function Mu(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Kp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zp = r), n.target.dispatchEvent(r), (zp = null);
    } else return (t = Ol(n)), t !== null && gm(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function I0(e, t, n) {
  Mu(e) && n.delete(t);
}
function K2() {
  (Vp = !1),
    eo !== null && Mu(eo) && (eo = null),
    to !== null && Mu(to) && (to = null),
    no !== null && Mu(no) && (no = null),
    Fs.forEach(I0),
    zs.forEach(I0);
}
function La(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Vp ||
      ((Vp = !0),
      cn.unstable_scheduleCallback(cn.unstable_NormalPriority, K2)));
}
function Bs(e) {
  function t(o) {
    return La(o, e);
  }
  if (0 < tu.length) {
    La(tu[0], e);
    for (var n = 1; n < tu.length; n++) {
      var r = tu[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    eo !== null && La(eo, e),
      to !== null && La(to, e),
      no !== null && La(no, e),
      Fs.forEach(t),
      zs.forEach(t),
      n = 0;
    n < Gr.length;
    n++
  )
    (r = Gr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gr.length && ((n = Gr[0]), n.blockedOn === null); )
    hb(n), n.blockedOn === null && Gr.shift();
}
var zi = Ar.ReactCurrentBatchConfig,
  tc = !0;
function G2(e, t, n, r) {
  var o = De,
    i = zi.transition;
  zi.transition = null;
  try {
    (De = 1), vm(e, t, n, r);
  } finally {
    (De = o), (zi.transition = i);
  }
}
function Y2(e, t, n, r) {
  var o = De,
    i = zi.transition;
  zi.transition = null;
  try {
    (De = 4), vm(e, t, n, r);
  } finally {
    (De = o), (zi.transition = i);
  }
}
function vm(e, t, n, r) {
  if (tc) {
    var o = Kp(e, t, n, r);
    if (o === null) Uf(e, t, r, nc, n), _0(e, r);
    else if (V2(o, e, t, n, r)) r.stopPropagation();
    else if ((_0(e, r), t & 4 && -1 < H2.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ol(o);
        if (
          (i !== null && cb(i),
          (i = Kp(e, t, n, r)),
          i === null && Uf(e, t, r, nc, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Uf(e, t, r, null, n);
  }
}
var nc = null;
function Kp(e, t, n, r) {
  if (((nc = null), (e = pm(r)), (e = Mo(e)), e !== null))
    if (((t = ti(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = nb(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (nc = e), null;
}
function mb(e) {
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
      switch (I2()) {
        case hm:
          return 1;
        case ab:
          return 4;
        case Ju:
        case L2:
          return 16;
        case sb:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qr = null,
  ym = null,
  Tu = null;
function gb() {
  if (Tu) return Tu;
  var e,
    t = ym,
    n = t.length,
    r,
    o = "value" in qr ? qr.value : qr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (Tu = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Nu(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function nu() {
  return !0;
}
function L0() {
  return !1;
}
function hn(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? nu
        : L0),
      (this.isPropagationStopped = L0),
      this
    );
  }
  return (
    et(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = nu));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = nu));
      },
      persist: function () {},
      isPersistent: nu,
    }),
    t
  );
}
var wa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xm = hn(wa),
  Nl = et({}, wa, { view: 0, detail: 0 }),
  X2 = hn(Nl),
  Af,
  _f,
  ja,
  qc = et({}, Nl, {
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
    getModifierState: bm,
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
        : (e !== ja &&
            (ja && e.type === "mousemove"
              ? ((Af = e.screenX - ja.screenX), (_f = e.screenY - ja.screenY))
              : (_f = Af = 0),
            (ja = e)),
          Af);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : _f;
    },
  }),
  j0 = hn(qc),
  q2 = et({}, qc, { dataTransfer: 0 }),
  Q2 = hn(q2),
  Z2 = et({}, Nl, { relatedTarget: 0 }),
  If = hn(Z2),
  J2 = et({}, wa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  eE = hn(J2),
  tE = et({}, wa, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  nE = hn(tE),
  rE = et({}, wa, { data: 0 }),
  D0 = hn(rE),
  oE = {
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
  iE = {
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
  aE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function sE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = aE[e]) ? !!t[e] : !1;
}
function bm() {
  return sE;
}
var lE = et({}, Nl, {
    key: function (e) {
      if (e.key) {
        var t = oE[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Nu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? iE[e.keyCode] || "Unidentified"
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
    getModifierState: bm,
    charCode: function (e) {
      return e.type === "keypress" ? Nu(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Nu(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  uE = hn(lE),
  cE = et({}, qc, {
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
  F0 = hn(cE),
  dE = et({}, Nl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bm,
  }),
  fE = hn(dE),
  pE = et({}, wa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hE = hn(pE),
  mE = et({}, qc, {
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
  gE = hn(mE),
  vE = [9, 13, 27, 32],
  wm = Er && "CompositionEvent" in window,
  vs = null;
Er && "documentMode" in document && (vs = document.documentMode);
var yE = Er && "TextEvent" in window && !vs,
  vb = Er && (!wm || (vs && 8 < vs && 11 >= vs)),
  z0 = " ",
  B0 = !1;
function yb(e, t) {
  switch (e) {
    case "keyup":
      return vE.indexOf(t.keyCode) !== -1;
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
function xb(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ki = !1;
function xE(e, t) {
  switch (e) {
    case "compositionend":
      return xb(t);
    case "keypress":
      return t.which !== 32 ? null : ((B0 = !0), z0);
    case "textInput":
      return (e = t.data), e === z0 && B0 ? null : e;
    default:
      return null;
  }
}
function bE(e, t) {
  if (ki)
    return e === "compositionend" || (!wm && yb(e, t))
      ? ((e = gb()), (Tu = ym = qr = null), (ki = !1), e)
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
      return vb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wE = {
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
function U0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wE[e.type] : t === "textarea";
}
function bb(e, t, n, r) {
  Qx(r),
    (t = rc(t, "onChange")),
    0 < t.length &&
      ((n = new xm("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ys = null,
  Us = null;
function SE(e) {
  Nb(e, 0);
}
function Qc(e) {
  var t = Ri(e);
  if (Hx(t)) return e;
}
function CE(e, t) {
  if (e === "change") return t;
}
var wb = !1;
if (Er) {
  var Lf;
  if (Er) {
    var jf = "oninput" in document;
    if (!jf) {
      var W0 = document.createElement("div");
      W0.setAttribute("oninput", "return;"),
        (jf = typeof W0.oninput == "function");
    }
    Lf = jf;
  } else Lf = !1;
  wb = Lf && (!document.documentMode || 9 < document.documentMode);
}
function H0() {
  ys && (ys.detachEvent("onpropertychange", Sb), (Us = ys = null));
}
function Sb(e) {
  if (e.propertyName === "value" && Qc(Us)) {
    var t = [];
    bb(t, Us, e, pm(e)), tb(SE, t);
  }
}
function kE(e, t, n) {
  e === "focusin"
    ? (H0(), (ys = t), (Us = n), ys.attachEvent("onpropertychange", Sb))
    : e === "focusout" && H0();
}
function EE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Qc(Us);
}
function PE(e, t) {
  if (e === "click") return Qc(t);
}
function RE(e, t) {
  if (e === "input" || e === "change") return Qc(t);
}
function $E(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qn = typeof Object.is == "function" ? Object.is : $E;
function Ws(e, t) {
  if (Qn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!$p.call(t, o) || !Qn(e[o], t[o])) return !1;
  }
  return !0;
}
function V0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function K0(e, t) {
  var n = V0(e);
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
    n = V0(n);
  }
}
function Cb(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cb(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function kb() {
  for (var e = window, t = qu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = qu(e.document);
  }
  return t;
}
function Sm(e) {
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
function ME(e) {
  var t = kb(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Cb(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Sm(n)) {
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
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = K0(n, i));
        var a = K0(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
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
var TE = Er && "documentMode" in document && 11 >= document.documentMode,
  Ei = null,
  Gp = null,
  xs = null,
  Yp = !1;
function G0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yp ||
    Ei == null ||
    Ei !== qu(r) ||
    ((r = Ei),
    "selectionStart" in r && Sm(r)
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
    (xs && Ws(xs, r)) ||
      ((xs = r),
      (r = rc(Gp, "onSelect")),
      0 < r.length &&
        ((t = new xm("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ei))));
}
function ru(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Pi = {
    animationend: ru("Animation", "AnimationEnd"),
    animationiteration: ru("Animation", "AnimationIteration"),
    animationstart: ru("Animation", "AnimationStart"),
    transitionend: ru("Transition", "TransitionEnd"),
  },
  Df = {},
  Eb = {};
Er &&
  ((Eb = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pi.animationend.animation,
    delete Pi.animationiteration.animation,
    delete Pi.animationstart.animation),
  "TransitionEvent" in window || delete Pi.transitionend.transition);
function Zc(e) {
  if (Df[e]) return Df[e];
  if (!Pi[e]) return e;
  var t = Pi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Eb) return (Df[e] = t[n]);
  return e;
}
var Pb = Zc("animationend"),
  Rb = Zc("animationiteration"),
  $b = Zc("animationstart"),
  Mb = Zc("transitionend"),
  Tb = new Map(),
  Y0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mo(e, t) {
  Tb.set(e, t), ei(t, [e]);
}
for (var Ff = 0; Ff < Y0.length; Ff++) {
  var zf = Y0[Ff],
    NE = zf.toLowerCase(),
    OE = zf[0].toUpperCase() + zf.slice(1);
  mo(NE, "on" + OE);
}
mo(Pb, "onAnimationEnd");
mo(Rb, "onAnimationIteration");
mo($b, "onAnimationStart");
mo("dblclick", "onDoubleClick");
mo("focusin", "onFocus");
mo("focusout", "onBlur");
mo(Mb, "onTransitionEnd");
qi("onMouseEnter", ["mouseout", "mouseover"]);
qi("onMouseLeave", ["mouseout", "mouseover"]);
qi("onPointerEnter", ["pointerout", "pointerover"]);
qi("onPointerLeave", ["pointerout", "pointerover"]);
ei(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ei(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ei("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ei(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ei(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ei(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ds =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  AE = new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));
function X0(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), N2(r, t, void 0, e), (e.currentTarget = null);
}
function Nb(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          X0(o, s, u), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          X0(o, s, u), (i = l);
        }
    }
  }
  if (Zu) throw ((e = Wp), (Zu = !1), (Wp = null), e);
}
function Ge(e, t) {
  var n = t[Jp];
  n === void 0 && (n = t[Jp] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ob(t, e, 2, !1), n.add(r));
}
function Bf(e, t, n) {
  var r = 0;
  t && (r |= 4), Ob(n, e, r, t);
}
var ou = "_reactListening" + Math.random().toString(36).slice(2);
function Hs(e) {
  if (!e[ou]) {
    (e[ou] = !0),
      Fx.forEach(function (n) {
        n !== "selectionchange" && (AE.has(n) || Bf(n, !1, e), Bf(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ou] || ((t[ou] = !0), Bf("selectionchange", !1, t));
  }
}
function Ob(e, t, n, r) {
  switch (mb(t)) {
    case 1:
      var o = G2;
      break;
    case 4:
      o = Y2;
      break;
    default:
      o = vm;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Up ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Uf(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Mo(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  tb(function () {
    var u = i,
      c = pm(n),
      d = [];
    e: {
      var f = Tb.get(e);
      if (f !== void 0) {
        var h = xm,
          p = e;
        switch (e) {
          case "keypress":
            if (Nu(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = uE;
            break;
          case "focusin":
            (p = "focus"), (h = If);
            break;
          case "focusout":
            (p = "blur"), (h = If);
            break;
          case "beforeblur":
          case "afterblur":
            h = If;
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
            h = j0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Q2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = fE;
            break;
          case Pb:
          case Rb:
          case $b:
            h = eE;
            break;
          case Mb:
            h = hE;
            break;
          case "scroll":
            h = X2;
            break;
          case "wheel":
            h = gE;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = nE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = F0;
        }
        var g = (t & 4) !== 0,
          w = !g && e === "scroll",
          v = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var m = u, x; m !== null; ) {
          x = m;
          var S = x.stateNode;
          if (
            (x.tag === 5 &&
              S !== null &&
              ((x = S),
              v !== null && ((S = Ds(m, v)), S != null && g.push(Vs(m, S, x)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((f = new h(f, p, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== zp &&
            (p = n.relatedTarget || n.fromElement) &&
            (Mo(p) || p[Pr]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((p = n.relatedTarget || n.toElement),
              (h = u),
              (p = p ? Mo(p) : null),
              p !== null &&
                ((w = ti(p)), p !== w || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((h = null), (p = u)),
          h !== p)
        ) {
          if (
            ((g = j0),
            (S = "onMouseLeave"),
            (v = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = F0),
              (S = "onPointerLeave"),
              (v = "onPointerEnter"),
              (m = "pointer")),
            (w = h == null ? f : Ri(h)),
            (x = p == null ? f : Ri(p)),
            (f = new g(S, m + "leave", h, n, c)),
            (f.target = w),
            (f.relatedTarget = x),
            (S = null),
            Mo(c) === u &&
              ((g = new g(v, m + "enter", p, n, c)),
              (g.target = x),
              (g.relatedTarget = w),
              (S = g)),
            (w = S),
            h && p)
          )
            t: {
              for (g = h, v = p, m = 0, x = g; x; x = ci(x)) m++;
              for (x = 0, S = v; S; S = ci(S)) x++;
              for (; 0 < m - x; ) (g = ci(g)), m--;
              for (; 0 < x - m; ) (v = ci(v)), x--;
              for (; m--; ) {
                if (g === v || (v !== null && g === v.alternate)) break t;
                (g = ci(g)), (v = ci(v));
              }
              g = null;
            }
          else g = null;
          h !== null && q0(d, f, h, g, !1),
            p !== null && w !== null && q0(d, w, p, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? Ri(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var E = CE;
        else if (U0(f))
          if (wb) E = RE;
          else {
            E = EE;
            var b = kE;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (E = PE);
        if (E && (E = E(e, u))) {
          bb(d, E, n, c);
          break e;
        }
        b && b(e, f, u),
          e === "focusout" &&
            (b = f._wrapperState) &&
            b.controlled &&
            f.type === "number" &&
            Ip(f, "number", f.value);
      }
      switch (((b = u ? Ri(u) : window), e)) {
        case "focusin":
          (U0(b) || b.contentEditable === "true") &&
            ((Ei = b), (Gp = u), (xs = null));
          break;
        case "focusout":
          xs = Gp = Ei = null;
          break;
        case "mousedown":
          Yp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Yp = !1), G0(d, n, c);
          break;
        case "selectionchange":
          if (TE) break;
        case "keydown":
        case "keyup":
          G0(d, n, c);
      }
      var k;
      if (wm)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        ki
          ? yb(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (vb &&
          n.locale !== "ko" &&
          (ki || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && ki && (k = gb())
            : ((qr = c),
              (ym = "value" in qr ? qr.value : qr.textContent),
              (ki = !0))),
        (b = rc(u, R)),
        0 < b.length &&
          ((R = new D0(R, e, null, n, c)),
          d.push({ event: R, listeners: b }),
          k ? (R.data = k) : ((k = xb(n)), k !== null && (R.data = k)))),
        (k = yE ? xE(e, n) : bE(e, n)) &&
          ((u = rc(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new D0("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    Nb(d, t);
  });
}
function Vs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ds(e, n)),
      i != null && r.unshift(Vs(e, i, o)),
      (i = Ds(e, t)),
      i != null && r.push(Vs(e, i, o))),
      (e = e.return);
  }
  return r;
}
function ci(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function q0(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = Ds(n, i)), l != null && a.unshift(Vs(n, l, s)))
        : o || ((l = Ds(n, i)), l != null && a.push(Vs(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var _E = /\r\n?/g,
  IE = /\u0000|\uFFFD/g;
function Q0(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _E,
      `
`
    )
    .replace(IE, "");
}
function iu(e, t, n) {
  if (((t = Q0(t)), Q0(e) !== t && n)) throw Error(V(425));
}
function oc() {}
var Xp = null,
  qp = null;
function Qp(e, t) {
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
var Zp = typeof setTimeout == "function" ? setTimeout : void 0,
  LE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Z0 = typeof Promise == "function" ? Promise : void 0,
  jE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Z0 < "u"
      ? function (e) {
          return Z0.resolve(null).then(e).catch(DE);
        }
      : Zp;
function DE(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wf(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Bs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Bs(t);
}
function ro(e) {
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
function J0(e) {
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
var Sa = Math.random().toString(36).slice(2),
  or = "__reactFiber$" + Sa,
  Ks = "__reactProps$" + Sa,
  Pr = "__reactContainer$" + Sa,
  Jp = "__reactEvents$" + Sa,
  FE = "__reactListeners$" + Sa,
  zE = "__reactHandles$" + Sa;
function Mo(e) {
  var t = e[or];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pr] || n[or])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = J0(e); e !== null; ) {
          if ((n = e[or])) return n;
          e = J0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ol(e) {
  return (
    (e = e[or] || e[Pr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ri(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function Jc(e) {
  return e[Ks] || null;
}
var eh = [],
  $i = -1;
function go(e) {
  return { current: e };
}
function Ye(e) {
  0 > $i || ((e.current = eh[$i]), (eh[$i] = null), $i--);
}
function Ke(e, t) {
  $i++, (eh[$i] = e.current), (e.current = t);
}
var co = {},
  Lt = go(co),
  Zt = go(!1),
  Ho = co;
function Qi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return co;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Jt(e) {
  return (e = e.childContextTypes), e != null;
}
function ic() {
  Ye(Zt), Ye(Lt);
}
function ev(e, t, n) {
  if (Lt.current !== co) throw Error(V(168));
  Ke(Lt, t), Ke(Zt, n);
}
function Ab(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(V(108, k2(e) || "Unknown", o));
  return et({}, n, r);
}
function ac(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || co),
    (Ho = Lt.current),
    Ke(Lt, e),
    Ke(Zt, Zt.current),
    !0
  );
}
function tv(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n
    ? ((e = Ab(e, t, Ho)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ye(Zt),
      Ye(Lt),
      Ke(Lt, e))
    : Ye(Zt),
    Ke(Zt, n);
}
var yr = null,
  ed = !1,
  Hf = !1;
function _b(e) {
  yr === null ? (yr = [e]) : yr.push(e);
}
function BE(e) {
  (ed = !0), _b(e);
}
function vo() {
  if (!Hf && yr !== null) {
    Hf = !0;
    var e = 0,
      t = De;
    try {
      var n = yr;
      for (De = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (yr = null), (ed = !1);
    } catch (o) {
      throw (yr !== null && (yr = yr.slice(e + 1)), ib(hm, vo), o);
    } finally {
      (De = t), (Hf = !1);
    }
  }
  return null;
}
var Mi = [],
  Ti = 0,
  sc = null,
  lc = 0,
  bn = [],
  wn = 0,
  Vo = null,
  xr = 1,
  br = "";
function Eo(e, t) {
  (Mi[Ti++] = lc), (Mi[Ti++] = sc), (sc = e), (lc = t);
}
function Ib(e, t, n) {
  (bn[wn++] = xr), (bn[wn++] = br), (bn[wn++] = Vo), (Vo = e);
  var r = xr;
  e = br;
  var o = 32 - Xn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Xn(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (xr = (1 << (32 - Xn(t) + o)) | (n << o) | r),
      (br = i + e);
  } else (xr = (1 << i) | (n << o) | r), (br = e);
}
function Cm(e) {
  e.return !== null && (Eo(e, 1), Ib(e, 1, 0));
}
function km(e) {
  for (; e === sc; )
    (sc = Mi[--Ti]), (Mi[Ti] = null), (lc = Mi[--Ti]), (Mi[Ti] = null);
  for (; e === Vo; )
    (Vo = bn[--wn]),
      (bn[wn] = null),
      (br = bn[--wn]),
      (bn[wn] = null),
      (xr = bn[--wn]),
      (bn[wn] = null);
}
var ln = null,
  sn = null,
  Qe = !1,
  Vn = null;
function Lb(e, t) {
  var n = Pn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function nv(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ln = e), (sn = ro(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ln = e), (sn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Vo !== null ? { id: xr, overflow: br } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ln = e),
            (sn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function th(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function nh(e) {
  if (Qe) {
    var t = sn;
    if (t) {
      var n = t;
      if (!nv(e, t)) {
        if (th(e)) throw Error(V(418));
        t = ro(n.nextSibling);
        var r = ln;
        t && nv(e, t)
          ? Lb(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Qe = !1), (ln = e));
      }
    } else {
      if (th(e)) throw Error(V(418));
      (e.flags = (e.flags & -4097) | 2), (Qe = !1), (ln = e);
    }
  }
}
function rv(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ln = e;
}
function au(e) {
  if (e !== ln) return !1;
  if (!Qe) return rv(e), (Qe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Qp(e.type, e.memoizedProps))),
    t && (t = sn))
  ) {
    if (th(e)) throw (jb(), Error(V(418)));
    for (; t; ) Lb(e, t), (t = ro(t.nextSibling));
  }
  if ((rv(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              sn = ro(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      sn = null;
    }
  } else sn = ln ? ro(e.stateNode.nextSibling) : null;
  return !0;
}
function jb() {
  for (var e = sn; e; ) e = ro(e.nextSibling);
}
function Zi() {
  (sn = ln = null), (Qe = !1);
}
function Em(e) {
  Vn === null ? (Vn = [e]) : Vn.push(e);
}
var UE = Ar.ReactCurrentBatchConfig;
function Bn(e, t) {
  if (e && e.defaultProps) {
    (t = et({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var uc = go(null),
  cc = null,
  Ni = null,
  Pm = null;
function Rm() {
  Pm = Ni = cc = null;
}
function $m(e) {
  var t = uc.current;
  Ye(uc), (e._currentValue = t);
}
function rh(e, t, n) {
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
function Bi(e, t) {
  (cc = e),
    (Pm = Ni = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (qt = !0), (e.firstContext = null));
}
function Nn(e) {
  var t = e._currentValue;
  if (Pm !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ni === null)) {
      if (cc === null) throw Error(V(308));
      (Ni = e), (cc.dependencies = { lanes: 0, firstContext: e });
    } else Ni = Ni.next = e;
  return t;
}
var To = null;
function Mm(e) {
  To === null ? (To = [e]) : To.push(e);
}
function Db(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Mm(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Rr(e, r)
  );
}
function Rr(e, t) {
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
var Kr = !1;
function Tm(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Fb(e, t) {
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
function Cr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function oo(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Te & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Rr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Mm(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Rr(e, n)
  );
}
function Ou(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mm(e, n);
  }
}
function ov(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
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
function dc(e, t, n, r) {
  var o = e.updateQueue;
  Kr = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var f = s.lane,
        h = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var p = e,
            g = s;
          switch (((f = t), (h = n), g.tag)) {
            case 1:
              if (((p = g.payload), typeof p == "function")) {
                d = p.call(h, d, f);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = g.payload),
                (f = typeof p == "function" ? p.call(h, d, f) : p),
                f == null)
              )
                break e;
              d = et({}, d, f);
              break e;
            case 2:
              Kr = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Go |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function iv(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(V(191, o));
        o.call(r);
      }
    }
}
var zb = new Dx.Component().refs;
function oh(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : et({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var td = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ti(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ut(),
      o = ao(e),
      i = Cr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = oo(e, i, o)),
      t !== null && (qn(t, e, o, r), Ou(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ut(),
      o = ao(e),
      i = Cr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = oo(e, i, o)),
      t !== null && (qn(t, e, o, r), Ou(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ut(),
      r = ao(e),
      o = Cr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = oo(e, o, r)),
      t !== null && (qn(t, e, r, n), Ou(t, e, r));
  },
};
function av(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ws(n, r) || !Ws(o, i)
      : !0
  );
}
function Bb(e, t, n) {
  var r = !1,
    o = co,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Nn(i))
      : ((o = Jt(t) ? Ho : Lt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Qi(e, o) : co)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = td),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function sv(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && td.enqueueReplaceState(t, t.state, null);
}
function ih(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = zb), Tm(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Nn(i))
    : ((i = Jt(t) ? Ho : Lt.current), (o.context = Qi(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (oh(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && td.enqueueReplaceState(o, o.state, null),
      dc(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Da(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(V(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === zb && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(V(284));
    if (!n._owner) throw Error(V(290, e));
  }
  return e;
}
function su(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      V(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function lv(e) {
  var t = e._init;
  return t(e._payload);
}
function Ub(e) {
  function t(v, m) {
    if (e) {
      var x = v.deletions;
      x === null ? ((v.deletions = [m]), (v.flags |= 16)) : x.push(m);
    }
  }
  function n(v, m) {
    if (!e) return null;
    for (; m !== null; ) t(v, m), (m = m.sibling);
    return null;
  }
  function r(v, m) {
    for (v = new Map(); m !== null; )
      m.key !== null ? v.set(m.key, m) : v.set(m.index, m), (m = m.sibling);
    return v;
  }
  function o(v, m) {
    return (v = so(v, m)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, m, x) {
    return (
      (v.index = x),
      e
        ? ((x = v.alternate),
          x !== null
            ? ((x = x.index), x < m ? ((v.flags |= 2), m) : x)
            : ((v.flags |= 2), m))
        : ((v.flags |= 1048576), m)
    );
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, m, x, S) {
    return m === null || m.tag !== 6
      ? ((m = Qf(x, v.mode, S)), (m.return = v), m)
      : ((m = o(m, x)), (m.return = v), m);
  }
  function l(v, m, x, S) {
    var E = x.type;
    return E === Ci
      ? c(v, m, x.props.children, S, x.key)
      : m !== null &&
        (m.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Vr &&
            lv(E) === m.type))
      ? ((S = o(m, x.props)), (S.ref = Da(v, m, x)), (S.return = v), S)
      : ((S = Du(x.type, x.key, x.props, null, v.mode, S)),
        (S.ref = Da(v, m, x)),
        (S.return = v),
        S);
  }
  function u(v, m, x, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== x.containerInfo ||
      m.stateNode.implementation !== x.implementation
      ? ((m = Zf(x, v.mode, S)), (m.return = v), m)
      : ((m = o(m, x.children || [])), (m.return = v), m);
  }
  function c(v, m, x, S, E) {
    return m === null || m.tag !== 7
      ? ((m = zo(x, v.mode, S, E)), (m.return = v), m)
      : ((m = o(m, x)), (m.return = v), m);
  }
  function d(v, m, x) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Qf("" + m, v.mode, x)), (m.return = v), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ql:
          return (
            (x = Du(m.type, m.key, m.props, null, v.mode, x)),
            (x.ref = Da(v, null, m)),
            (x.return = v),
            x
          );
        case Si:
          return (m = Zf(m, v.mode, x)), (m.return = v), m;
        case Vr:
          var S = m._init;
          return d(v, S(m._payload), x);
      }
      if (us(m) || Aa(m))
        return (m = zo(m, v.mode, x, null)), (m.return = v), m;
      su(v, m);
    }
    return null;
  }
  function f(v, m, x, S) {
    var E = m !== null ? m.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return E !== null ? null : s(v, m, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ql:
          return x.key === E ? l(v, m, x, S) : null;
        case Si:
          return x.key === E ? u(v, m, x, S) : null;
        case Vr:
          return (E = x._init), f(v, m, E(x._payload), S);
      }
      if (us(x) || Aa(x)) return E !== null ? null : c(v, m, x, S, null);
      su(v, x);
    }
    return null;
  }
  function h(v, m, x, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (v = v.get(x) || null), s(m, v, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ql:
          return (v = v.get(S.key === null ? x : S.key) || null), l(m, v, S, E);
        case Si:
          return (v = v.get(S.key === null ? x : S.key) || null), u(m, v, S, E);
        case Vr:
          var b = S._init;
          return h(v, m, x, b(S._payload), E);
      }
      if (us(S) || Aa(S)) return (v = v.get(x) || null), c(m, v, S, E, null);
      su(m, S);
    }
    return null;
  }
  function p(v, m, x, S) {
    for (
      var E = null, b = null, k = m, R = (m = 0), T = null;
      k !== null && R < x.length;
      R++
    ) {
      k.index > R ? ((T = k), (k = null)) : (T = k.sibling);
      var $ = f(v, k, x[R], S);
      if ($ === null) {
        k === null && (k = T);
        break;
      }
      e && k && $.alternate === null && t(v, k),
        (m = i($, m, R)),
        b === null ? (E = $) : (b.sibling = $),
        (b = $),
        (k = T);
    }
    if (R === x.length) return n(v, k), Qe && Eo(v, R), E;
    if (k === null) {
      for (; R < x.length; R++)
        (k = d(v, x[R], S)),
          k !== null &&
            ((m = i(k, m, R)), b === null ? (E = k) : (b.sibling = k), (b = k));
      return Qe && Eo(v, R), E;
    }
    for (k = r(v, k); R < x.length; R++)
      (T = h(k, v, R, x[R], S)),
        T !== null &&
          (e && T.alternate !== null && k.delete(T.key === null ? R : T.key),
          (m = i(T, m, R)),
          b === null ? (E = T) : (b.sibling = T),
          (b = T));
    return (
      e &&
        k.forEach(function (M) {
          return t(v, M);
        }),
      Qe && Eo(v, R),
      E
    );
  }
  function g(v, m, x, S) {
    var E = Aa(x);
    if (typeof E != "function") throw Error(V(150));
    if (((x = E.call(x)), x == null)) throw Error(V(151));
    for (
      var b = (E = null), k = m, R = (m = 0), T = null, $ = x.next();
      k !== null && !$.done;
      R++, $ = x.next()
    ) {
      k.index > R ? ((T = k), (k = null)) : (T = k.sibling);
      var M = f(v, k, $.value, S);
      if (M === null) {
        k === null && (k = T);
        break;
      }
      e && k && M.alternate === null && t(v, k),
        (m = i(M, m, R)),
        b === null ? (E = M) : (b.sibling = M),
        (b = M),
        (k = T);
    }
    if ($.done) return n(v, k), Qe && Eo(v, R), E;
    if (k === null) {
      for (; !$.done; R++, $ = x.next())
        ($ = d(v, $.value, S)),
          $ !== null &&
            ((m = i($, m, R)), b === null ? (E = $) : (b.sibling = $), (b = $));
      return Qe && Eo(v, R), E;
    }
    for (k = r(v, k); !$.done; R++, $ = x.next())
      ($ = h(k, v, R, $.value, S)),
        $ !== null &&
          (e && $.alternate !== null && k.delete($.key === null ? R : $.key),
          (m = i($, m, R)),
          b === null ? (E = $) : (b.sibling = $),
          (b = $));
    return (
      e &&
        k.forEach(function (L) {
          return t(v, L);
        }),
      Qe && Eo(v, R),
      E
    );
  }
  function w(v, m, x, S) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Ci &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case ql:
          e: {
            for (var E = x.key, b = m; b !== null; ) {
              if (b.key === E) {
                if (((E = x.type), E === Ci)) {
                  if (b.tag === 7) {
                    n(v, b.sibling),
                      (m = o(b, x.props.children)),
                      (m.return = v),
                      (v = m);
                    break e;
                  }
                } else if (
                  b.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Vr &&
                    lv(E) === b.type)
                ) {
                  n(v, b.sibling),
                    (m = o(b, x.props)),
                    (m.ref = Da(v, b, x)),
                    (m.return = v),
                    (v = m);
                  break e;
                }
                n(v, b);
                break;
              } else t(v, b);
              b = b.sibling;
            }
            x.type === Ci
              ? ((m = zo(x.props.children, v.mode, S, x.key)),
                (m.return = v),
                (v = m))
              : ((S = Du(x.type, x.key, x.props, null, v.mode, S)),
                (S.ref = Da(v, m, x)),
                (S.return = v),
                (v = S));
          }
          return a(v);
        case Si:
          e: {
            for (b = x.key; m !== null; ) {
              if (m.key === b)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === x.containerInfo &&
                  m.stateNode.implementation === x.implementation
                ) {
                  n(v, m.sibling),
                    (m = o(m, x.children || [])),
                    (m.return = v),
                    (v = m);
                  break e;
                } else {
                  n(v, m);
                  break;
                }
              else t(v, m);
              m = m.sibling;
            }
            (m = Zf(x, v.mode, S)), (m.return = v), (v = m);
          }
          return a(v);
        case Vr:
          return (b = x._init), w(v, m, b(x._payload), S);
      }
      if (us(x)) return p(v, m, x, S);
      if (Aa(x)) return g(v, m, x, S);
      su(v, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        m !== null && m.tag === 6
          ? (n(v, m.sibling), (m = o(m, x)), (m.return = v), (v = m))
          : (n(v, m), (m = Qf(x, v.mode, S)), (m.return = v), (v = m)),
        a(v))
      : n(v, m);
  }
  return w;
}
var Ji = Ub(!0),
  Wb = Ub(!1),
  Al = {},
  lr = go(Al),
  Gs = go(Al),
  Ys = go(Al);
function No(e) {
  if (e === Al) throw Error(V(174));
  return e;
}
function Nm(e, t) {
  switch ((Ke(Ys, t), Ke(Gs, e), Ke(lr, Al), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : jp(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = jp(t, e));
  }
  Ye(lr), Ke(lr, t);
}
function ea() {
  Ye(lr), Ye(Gs), Ye(Ys);
}
function Hb(e) {
  No(Ys.current);
  var t = No(lr.current),
    n = jp(t, e.type);
  t !== n && (Ke(Gs, e), Ke(lr, n));
}
function Om(e) {
  Gs.current === e && (Ye(lr), Ye(Gs));
}
var Ze = go(0);
function fc(e) {
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
var Vf = [];
function Am() {
  for (var e = 0; e < Vf.length; e++)
    Vf[e]._workInProgressVersionPrimary = null;
  Vf.length = 0;
}
var Au = Ar.ReactCurrentDispatcher,
  Kf = Ar.ReactCurrentBatchConfig,
  Ko = 0,
  Je = null,
  gt = null,
  wt = null,
  pc = !1,
  bs = !1,
  Xs = 0,
  WE = 0;
function Ot() {
  throw Error(V(321));
}
function _m(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qn(e[n], t[n])) return !1;
  return !0;
}
function Im(e, t, n, r, o, i) {
  if (
    ((Ko = i),
    (Je = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Au.current = e === null || e.memoizedState === null ? GE : YE),
    (e = n(r, o)),
    bs)
  ) {
    i = 0;
    do {
      if (((bs = !1), (Xs = 0), 25 <= i)) throw Error(V(301));
      (i += 1),
        (wt = gt = null),
        (t.updateQueue = null),
        (Au.current = XE),
        (e = n(r, o));
    } while (bs);
  }
  if (
    ((Au.current = hc),
    (t = gt !== null && gt.next !== null),
    (Ko = 0),
    (wt = gt = Je = null),
    (pc = !1),
    t)
  )
    throw Error(V(300));
  return e;
}
function Lm() {
  var e = Xs !== 0;
  return (Xs = 0), e;
}
function er() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return wt === null ? (Je.memoizedState = wt = e) : (wt = wt.next = e), wt;
}
function On() {
  if (gt === null) {
    var e = Je.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = gt.next;
  var t = wt === null ? Je.memoizedState : wt.next;
  if (t !== null) (wt = t), (gt = e);
  else {
    if (e === null) throw Error(V(310));
    (gt = e),
      (e = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null,
      }),
      wt === null ? (Je.memoizedState = wt = e) : (wt = wt.next = e);
  }
  return wt;
}
function qs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gf(e) {
  var t = On(),
    n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = gt,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Ko & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (Je.lanes |= c),
          (Go |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = r) : (l.next = s),
      Qn(r, t.memoizedState) || (qt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Je.lanes |= i), (Go |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yf(e) {
  var t = On(),
    n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Qn(i, t.memoizedState) || (qt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Vb() {}
function Kb(e, t) {
  var n = Je,
    r = On(),
    o = t(),
    i = !Qn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (qt = !0)),
    (r = r.queue),
    jm(Xb.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (wt !== null && wt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qs(9, Yb.bind(null, n, r, o, t), void 0, null),
      St === null)
    )
      throw Error(V(349));
    Ko & 30 || Gb(n, t, o);
  }
  return o;
}
function Gb(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Je.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Je.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yb(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), qb(t) && Qb(e);
}
function Xb(e, t, n) {
  return n(function () {
    qb(t) && Qb(e);
  });
}
function qb(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qn(e, n);
  } catch {
    return !0;
  }
}
function Qb(e) {
  var t = Rr(e, 1);
  t !== null && qn(t, e, 1, -1);
}
function uv(e) {
  var t = er();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = KE.bind(null, Je, e)),
    [t.memoizedState, e]
  );
}
function Qs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Je.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Je.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zb() {
  return On().memoizedState;
}
function _u(e, t, n, r) {
  var o = er();
  (Je.flags |= e),
    (o.memoizedState = Qs(1 | t, n, void 0, r === void 0 ? null : r));
}
function nd(e, t, n, r) {
  var o = On();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (gt !== null) {
    var a = gt.memoizedState;
    if (((i = a.destroy), r !== null && _m(r, a.deps))) {
      o.memoizedState = Qs(t, n, i, r);
      return;
    }
  }
  (Je.flags |= e), (o.memoizedState = Qs(1 | t, n, i, r));
}
function cv(e, t) {
  return _u(8390656, 8, e, t);
}
function jm(e, t) {
  return nd(2048, 8, e, t);
}
function Jb(e, t) {
  return nd(4, 2, e, t);
}
function ew(e, t) {
  return nd(4, 4, e, t);
}
function tw(e, t) {
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
function nw(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), nd(4, 4, tw.bind(null, t, e), n)
  );
}
function Dm() {}
function rw(e, t) {
  var n = On();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _m(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ow(e, t) {
  var n = On();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _m(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function iw(e, t, n) {
  return Ko & 21
    ? (Qn(n, t) || ((n = lb()), (Je.lanes |= n), (Go |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (qt = !0)), (e.memoizedState = n));
}
function HE(e, t) {
  var n = De;
  (De = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Kf.transition;
  Kf.transition = {};
  try {
    e(!1), t();
  } finally {
    (De = n), (Kf.transition = r);
  }
}
function aw() {
  return On().memoizedState;
}
function VE(e, t, n) {
  var r = ao(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sw(e))
  )
    lw(t, n);
  else if (((n = Db(e, t, n, r)), n !== null)) {
    var o = Ut();
    qn(n, e, r, o), uw(n, t, r);
  }
}
function KE(e, t, n) {
  var r = ao(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sw(e)) lw(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Qn(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Mm(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Db(e, t, o, r)),
      n !== null && ((o = Ut()), qn(n, e, r, o), uw(n, t, r));
  }
}
function sw(e) {
  var t = e.alternate;
  return e === Je || (t !== null && t === Je);
}
function lw(e, t) {
  bs = pc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function uw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mm(e, n);
  }
}
var hc = {
    readContext: Nn,
    useCallback: Ot,
    useContext: Ot,
    useEffect: Ot,
    useImperativeHandle: Ot,
    useInsertionEffect: Ot,
    useLayoutEffect: Ot,
    useMemo: Ot,
    useReducer: Ot,
    useRef: Ot,
    useState: Ot,
    useDebugValue: Ot,
    useDeferredValue: Ot,
    useTransition: Ot,
    useMutableSource: Ot,
    useSyncExternalStore: Ot,
    useId: Ot,
    unstable_isNewReconciler: !1,
  },
  GE = {
    readContext: Nn,
    useCallback: function (e, t) {
      return (er().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Nn,
    useEffect: cv,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _u(4194308, 4, tw.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _u(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _u(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = er();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = er();
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
        (e = e.dispatch = VE.bind(null, Je, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = er();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: uv,
    useDebugValue: Dm,
    useDeferredValue: function (e) {
      return (er().memoizedState = e);
    },
    useTransition: function () {
      var e = uv(!1),
        t = e[0];
      return (e = HE.bind(null, e[1])), (er().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Je,
        o = er();
      if (Qe) {
        if (n === void 0) throw Error(V(407));
        n = n();
      } else {
        if (((n = t()), St === null)) throw Error(V(349));
        Ko & 30 || Gb(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        cv(Xb.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Qs(9, Yb.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = er(),
        t = St.identifierPrefix;
      if (Qe) {
        var n = br,
          r = xr;
        (n = (r & ~(1 << (32 - Xn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = WE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  YE = {
    readContext: Nn,
    useCallback: rw,
    useContext: Nn,
    useEffect: jm,
    useImperativeHandle: nw,
    useInsertionEffect: Jb,
    useLayoutEffect: ew,
    useMemo: ow,
    useReducer: Gf,
    useRef: Zb,
    useState: function () {
      return Gf(qs);
    },
    useDebugValue: Dm,
    useDeferredValue: function (e) {
      var t = On();
      return iw(t, gt.memoizedState, e);
    },
    useTransition: function () {
      var e = Gf(qs)[0],
        t = On().memoizedState;
      return [e, t];
    },
    useMutableSource: Vb,
    useSyncExternalStore: Kb,
    useId: aw,
    unstable_isNewReconciler: !1,
  },
  XE = {
    readContext: Nn,
    useCallback: rw,
    useContext: Nn,
    useEffect: jm,
    useImperativeHandle: nw,
    useInsertionEffect: Jb,
    useLayoutEffect: ew,
    useMemo: ow,
    useReducer: Yf,
    useRef: Zb,
    useState: function () {
      return Yf(qs);
    },
    useDebugValue: Dm,
    useDeferredValue: function (e) {
      var t = On();
      return gt === null ? (t.memoizedState = e) : iw(t, gt.memoizedState, e);
    },
    useTransition: function () {
      var e = Yf(qs)[0],
        t = On().memoizedState;
      return [e, t];
    },
    useMutableSource: Vb,
    useSyncExternalStore: Kb,
    useId: aw,
    unstable_isNewReconciler: !1,
  };
function ta(e, t) {
  try {
    var n = "",
      r = t;
    do (n += C2(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Xf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ah(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qE = typeof WeakMap == "function" ? WeakMap : Map;
function cw(e, t, n) {
  (n = Cr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      gc || ((gc = !0), (gh = r)), ah(e, t);
    }),
    n
  );
}
function dw(e, t, n) {
  (n = Cr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ah(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ah(e, t),
          typeof r != "function" &&
            (io === null ? (io = new Set([this])) : io.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function dv(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qE();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = cP.bind(null, e, t, n)), t.then(e, e));
}
function fv(e) {
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
function pv(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Cr(-1, 1)), (t.tag = 2), oo(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var QE = Ar.ReactCurrentOwner,
  qt = !1;
function zt(e, t, n, r) {
  t.child = e === null ? Wb(t, null, n, r) : Ji(t, e.child, n, r);
}
function hv(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Bi(t, o),
    (r = Im(e, t, n, r, i, o)),
    (n = Lm()),
    e !== null && !qt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        $r(e, t, o))
      : (Qe && n && Cm(t), (t.flags |= 1), zt(e, t, r, o), t.child)
  );
}
function mv(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Km(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), fw(e, t, i, r, o))
      : ((e = Du(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ws), n(a, r) && e.ref === t.ref)
    )
      return $r(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = so(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ws(i, r) && e.ref === t.ref)
      if (((qt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (qt = !0);
      else return (t.lanes = e.lanes), $r(e, t, o);
  }
  return sh(e, t, n, r, o);
}
function pw(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ke(Ai, on),
        (on |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ke(Ai, on),
          (on |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Ke(Ai, on),
        (on |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ke(Ai, on),
      (on |= r);
  return zt(e, t, o, n), t.child;
}
function hw(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function sh(e, t, n, r, o) {
  var i = Jt(n) ? Ho : Lt.current;
  return (
    (i = Qi(t, i)),
    Bi(t, o),
    (n = Im(e, t, n, r, i, o)),
    (r = Lm()),
    e !== null && !qt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        $r(e, t, o))
      : (Qe && r && Cm(t), (t.flags |= 1), zt(e, t, n, o), t.child)
  );
}
function gv(e, t, n, r, o) {
  if (Jt(n)) {
    var i = !0;
    ac(t);
  } else i = !1;
  if ((Bi(t, o), t.stateNode === null))
    Iu(e, t), Bb(t, n, r), ih(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Nn(u))
      : ((u = Jt(n) ? Ho : Lt.current), (u = Qi(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && sv(t, a, r, u)),
      (Kr = !1);
    var f = t.memoizedState;
    (a.state = f),
      dc(t, r, a, o),
      (l = t.memoizedState),
      s !== r || f !== l || Zt.current || Kr
        ? (typeof c == "function" && (oh(t, n, c, r), (l = t.memoizedState)),
          (s = Kr || av(t, n, s, r, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Fb(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Bn(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Nn(l))
        : ((l = Jt(n) ? Ho : Lt.current), (l = Qi(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && sv(t, a, r, l)),
      (Kr = !1),
      (f = t.memoizedState),
      (a.state = f),
      dc(t, r, a, o);
    var p = t.memoizedState;
    s !== d || f !== p || Zt.current || Kr
      ? (typeof h == "function" && (oh(t, n, h, r), (p = t.memoizedState)),
        (u = Kr || av(t, n, u, r, f, p, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, p, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, p, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (a.props = r),
        (a.state = p),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return lh(e, t, n, r, i, o);
}
function lh(e, t, n, r, o, i) {
  hw(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && tv(t, n, !1), $r(e, t, i);
  (r = t.stateNode), (QE.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Ji(t, e.child, null, i)), (t.child = Ji(t, null, s, i)))
      : zt(e, t, s, i),
    (t.memoizedState = r.state),
    o && tv(t, n, !0),
    t.child
  );
}
function mw(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ev(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ev(e, t.context, !1),
    Nm(e, t.containerInfo);
}
function vv(e, t, n, r, o) {
  return Zi(), Em(o), (t.flags |= 256), zt(e, t, n, r), t.child;
}
var uh = { dehydrated: null, treeContext: null, retryLane: 0 };
function ch(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gw(e, t, n) {
  var r = t.pendingProps,
    o = Ze.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ke(Ze, o & 1),
    e === null)
  )
    return (
      nh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = id(a, r, 0, null)),
              (e = zo(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ch(n)),
              (t.memoizedState = uh),
              e)
            : Fm(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return ZE(e, t, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = so(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = so(s, i)) : ((i = zo(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ch(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = uh),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = so(i, { mode: "visible", children: r.children })),
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
function Fm(e, t) {
  return (
    (t = id({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function lu(e, t, n, r) {
  return (
    r !== null && Em(r),
    Ji(t, e.child, null, n),
    (e = Fm(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ZE(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Xf(Error(V(422)))), lu(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = id({ mode: "visible", children: r.children }, o, 0, null)),
        (i = zo(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Ji(t, e.child, null, a),
        (t.child.memoizedState = ch(a)),
        (t.memoizedState = uh),
        i);
  if (!(t.mode & 1)) return lu(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(V(419))), (r = Xf(i, r, void 0)), lu(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), qt || s)) {
    if (((r = St), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Rr(e, o), qn(r, e, o, -1));
    }
    return Vm(), (r = Xf(Error(V(421)))), lu(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = dP.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (sn = ro(o.nextSibling)),
      (ln = t),
      (Qe = !0),
      (Vn = null),
      e !== null &&
        ((bn[wn++] = xr),
        (bn[wn++] = br),
        (bn[wn++] = Vo),
        (xr = e.id),
        (br = e.overflow),
        (Vo = t)),
      (t = Fm(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yv(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), rh(e.return, t, n);
}
function qf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function vw(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((zt(e, t, r.children, n), (r = Ze.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yv(e, n, t);
        else if (e.tag === 19) yv(e, n, t);
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
  if ((Ke(Ze, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && fc(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          qf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && fc(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        qf(t, !0, n, null, i);
        break;
      case "together":
        qf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Iu(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function $r(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Go |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (
      e = t.child, n = so(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = so(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function JE(e, t, n) {
  switch (t.tag) {
    case 3:
      mw(t), Zi();
      break;
    case 5:
      Hb(t);
      break;
    case 1:
      Jt(t.type) && ac(t);
      break;
    case 4:
      Nm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Ke(uc, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ke(Ze, Ze.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? gw(e, t, n)
          : (Ke(Ze, Ze.current & 1),
            (e = $r(e, t, n)),
            e !== null ? e.sibling : null);
      Ke(Ze, Ze.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return vw(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ke(Ze, Ze.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), pw(e, t, n);
  }
  return $r(e, t, n);
}
var yw, dh, xw, bw;
yw = function (e, t) {
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
dh = function () {};
xw = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), No(lr.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ap(e, o)), (r = Ap(e, r)), (i = []);
        break;
      case "select":
        (o = et({}, o, { value: void 0 })),
          (r = et({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Lp(e, o)), (r = Lp(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = oc);
    }
    Dp(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ls.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ls.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Ge("scroll", e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
bw = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fa(e, t) {
  if (!Qe)
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
function At(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function eP(e, t, n) {
  var r = t.pendingProps;
  switch ((km(t), t.tag)) {
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
      return At(t), null;
    case 1:
      return Jt(t.type) && ic(), At(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ea(),
        Ye(Zt),
        Ye(Lt),
        Am(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (au(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Vn !== null && (xh(Vn), (Vn = null)))),
        dh(e, t),
        At(t),
        null
      );
    case 5:
      Om(t);
      var o = No(Ys.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        xw(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return At(t), null;
        }
        if (((e = No(lr.current)), au(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[or] = t), (r[Ks] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ge("cancel", r), Ge("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ge("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ds.length; o++) Ge(ds[o], r);
              break;
            case "source":
              Ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ge("error", r), Ge("load", r);
              break;
            case "details":
              Ge("toggle", r);
              break;
            case "input":
              R0(r, i), Ge("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ge("invalid", r);
              break;
            case "textarea":
              M0(r, i), Ge("invalid", r);
          }
          Dp(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      iu(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      iu(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Ls.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  Ge("scroll", r);
            }
          switch (n) {
            case "input":
              Ql(r), $0(r, i, !0);
              break;
            case "textarea":
              Ql(r), T0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = oc);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Gx(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[or] = t),
            (e[Ks] = r),
            yw(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Fp(n, r)), n)) {
              case "dialog":
                Ge("cancel", e), Ge("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ge("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ds.length; o++) Ge(ds[o], e);
                o = r;
                break;
              case "source":
                Ge("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Ge("error", e), Ge("load", e), (o = r);
                break;
              case "details":
                Ge("toggle", e), (o = r);
                break;
              case "input":
                R0(e, r), (o = Ap(e, r)), Ge("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = et({}, r, { value: void 0 })),
                  Ge("invalid", e);
                break;
              case "textarea":
                M0(e, r), (o = Lp(e, r)), Ge("invalid", e);
                break;
              default:
                o = r;
            }
            Dp(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? qx(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Yx(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && js(e, l)
                    : typeof l == "number" && js(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ls.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && Ge("scroll", e)
                      : l != null && um(e, i, l, a));
              }
            switch (n) {
              case "input":
                Ql(e), $0(e, r, !1);
                break;
              case "textarea":
                Ql(e), T0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + uo(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ji(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ji(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = oc);
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
      return At(t), null;
    case 6:
      if (e && t.stateNode != null) bw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (((n = No(Ys.current)), No(lr.current), au(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[or] = t),
            (i = r.nodeValue !== n) && ((e = ln), e !== null))
          )
            switch (e.tag) {
              case 3:
                iu(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  iu(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[or] = t),
            (t.stateNode = r);
      }
      return At(t), null;
    case 13:
      if (
        (Ye(Ze),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Qe && sn !== null && t.mode & 1 && !(t.flags & 128))
          jb(), Zi(), (t.flags |= 98560), (i = !1);
        else if (((i = au(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(V(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(V(317));
            i[or] = t;
          } else
            Zi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          At(t), (i = !1);
        } else Vn !== null && (xh(Vn), (Vn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ze.current & 1 ? vt === 0 && (vt = 3) : Vm())),
          t.updateQueue !== null && (t.flags |= 4),
          At(t),
          null);
    case 4:
      return (
        ea(), dh(e, t), e === null && Hs(t.stateNode.containerInfo), At(t), null
      );
    case 10:
      return $m(t.type._context), At(t), null;
    case 17:
      return Jt(t.type) && ic(), At(t), null;
    case 19:
      if ((Ye(Ze), (i = t.memoizedState), i === null)) return At(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Fa(i, !1);
        else {
          if (vt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = fc(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Fa(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ke(Ze, (Ze.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ct() > na &&
            ((t.flags |= 128), (r = !0), Fa(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fc(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fa(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Qe)
            )
              return At(t), null;
          } else
            2 * ct() - i.renderingStartTime > na &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fa(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ct()),
          (t.sibling = null),
          (n = Ze.current),
          Ke(Ze, r ? (n & 1) | 2 : n & 1),
          t)
        : (At(t), null);
    case 22:
    case 23:
      return (
        Hm(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? on & 1073741824 && (At(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : At(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function tP(e, t) {
  switch ((km(t), t.tag)) {
    case 1:
      return (
        Jt(t.type) && ic(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ea(),
        Ye(Zt),
        Ye(Lt),
        Am(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Om(t), null;
    case 13:
      if (
        (Ye(Ze), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(V(340));
        Zi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ye(Ze), null;
    case 4:
      return ea(), null;
    case 10:
      return $m(t.type._context), null;
    case 22:
    case 23:
      return Hm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var uu = !1,
  It = !1,
  nP = typeof WeakSet == "function" ? WeakSet : Set,
  te = null;
function Oi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        at(e, t, r);
      }
    else n.current = null;
}
function fh(e, t, n) {
  try {
    n();
  } catch (r) {
    at(e, t, r);
  }
}
var xv = !1;
function rP(e, t) {
  if (((Xp = tc), (e = kb()), Sm(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (s = a),
                f === i && ++c === r && (l = a),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    qp = { focusedElem: e, selectionRange: n }, tc = !1, te = t;
    te !== null;

  )
    if (((t = te), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (te = e);
    else
      for (; te !== null; ) {
        t = te;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var g = p.memoizedProps,
                    w = p.memoizedState,
                    v = t.stateNode,
                    m = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Bn(t.type, g),
                      w
                    );
                  v.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(V(163));
            }
        } catch (S) {
          at(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (te = e);
          break;
        }
        te = t.return;
      }
  return (p = xv), (xv = !1), p;
}
function ws(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && fh(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function rd(e, t) {
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
function ph(e) {
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
function ww(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ww(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[or], delete t[Ks], delete t[Jp], delete t[FE], delete t[zE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Sw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bv(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sw(e.return)) return null;
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
function hh(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = oc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hh(e, t, n), e = e.sibling; e !== null; ) hh(e, t, n), (e = e.sibling);
}
function mh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (mh(e, t, n), e = e.sibling; e !== null; ) mh(e, t, n), (e = e.sibling);
}
var $t = null,
  Un = !1;
function Br(e, t, n) {
  for (n = n.child; n !== null; ) Cw(e, t, n), (n = n.sibling);
}
function Cw(e, t, n) {
  if (sr && typeof sr.onCommitFiberUnmount == "function")
    try {
      sr.onCommitFiberUnmount(Xc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      It || Oi(n, t);
    case 6:
      var r = $t,
        o = Un;
      ($t = null),
        Br(e, t, n),
        ($t = r),
        (Un = o),
        $t !== null &&
          (Un
            ? ((e = $t),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : $t.removeChild(n.stateNode));
      break;
    case 18:
      $t !== null &&
        (Un
          ? ((e = $t),
            (n = n.stateNode),
            e.nodeType === 8
              ? Wf(e.parentNode, n)
              : e.nodeType === 1 && Wf(e, n),
            Bs(e))
          : Wf($t, n.stateNode));
      break;
    case 4:
      (r = $t),
        (o = Un),
        ($t = n.stateNode.containerInfo),
        (Un = !0),
        Br(e, t, n),
        ($t = r),
        (Un = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !It &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && fh(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Br(e, t, n);
      break;
    case 1:
      if (
        !It &&
        (Oi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          at(n, t, s);
        }
      Br(e, t, n);
      break;
    case 21:
      Br(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((It = (r = It) || n.memoizedState !== null), Br(e, t, n), (It = r))
        : Br(e, t, n);
      break;
    default:
      Br(e, t, n);
  }
}
function wv(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new nP()),
      t.forEach(function (r) {
        var o = fP.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function zn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ($t = s.stateNode), (Un = !1);
              break e;
            case 3:
              ($t = s.stateNode.containerInfo), (Un = !0);
              break e;
            case 4:
              ($t = s.stateNode.containerInfo), (Un = !0);
              break e;
          }
          s = s.return;
        }
        if ($t === null) throw Error(V(160));
        Cw(i, a, o), ($t = null), (Un = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        at(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) kw(t, e), (t = t.sibling);
}
function kw(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((zn(t, e), Jn(e), r & 4)) {
        try {
          ws(3, e, e.return), rd(3, e);
        } catch (g) {
          at(e, e.return, g);
        }
        try {
          ws(5, e, e.return);
        } catch (g) {
          at(e, e.return, g);
        }
      }
      break;
    case 1:
      zn(t, e), Jn(e), r & 512 && n !== null && Oi(n, n.return);
      break;
    case 5:
      if (
        (zn(t, e),
        Jn(e),
        r & 512 && n !== null && Oi(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          js(o, "");
        } catch (g) {
          at(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Vx(o, i),
              Fp(s, a);
            var u = Fp(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? qx(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Yx(o, d)
                : c === "children"
                ? js(o, d)
                : um(o, c, d, u);
            }
            switch (s) {
              case "input":
                _p(o, i);
                break;
              case "textarea":
                Kx(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? ji(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ji(o, !!i.multiple, i.defaultValue, !0)
                      : ji(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ks] = i;
          } catch (g) {
            at(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((zn(t, e), Jn(e), r & 4)) {
        if (e.stateNode === null) throw Error(V(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          at(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (zn(t, e), Jn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Bs(t.containerInfo);
        } catch (g) {
          at(e, e.return, g);
        }
      break;
    case 4:
      zn(t, e), Jn(e);
      break;
    case 13:
      zn(t, e),
        Jn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Um = ct())),
        r & 4 && wv(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((It = (u = It) || c), zn(t, e), (It = u)) : zn(t, e),
        Jn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (te = e, c = e.child; c !== null; ) {
            for (d = te = c; te !== null; ) {
              switch (((f = te), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ws(4, f, f.return);
                  break;
                case 1:
                  Oi(f, f.return);
                  var p = f.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (g) {
                      at(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Oi(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Cv(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (te = h)) : Cv(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = Xx("display", a)));
              } catch (g) {
                at(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                at(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      zn(t, e), Jn(e), r & 4 && wv(e);
      break;
    case 21:
      break;
    default:
      zn(t, e), Jn(e);
  }
}
function Jn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (js(o, ""), (r.flags &= -33));
          var i = bv(e);
          mh(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = bv(e);
          hh(e, s, a);
          break;
        default:
          throw Error(V(161));
      }
    } catch (l) {
      at(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function oP(e, t, n) {
  (te = e), Ew(e);
}
function Ew(e, t, n) {
  for (var r = (e.mode & 1) !== 0; te !== null; ) {
    var o = te,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || uu;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || It;
        s = uu;
        var u = It;
        if (((uu = a), (It = l) && !u))
          for (te = o; te !== null; )
            (a = te),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? kv(o)
                : l !== null
                ? ((l.return = a), (te = l))
                : kv(o);
        for (; i !== null; ) (te = i), Ew(i), (i = i.sibling);
        (te = o), (uu = s), (It = u);
      }
      Sv(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (te = i)) : Sv(e);
  }
}
function Sv(e) {
  for (; te !== null; ) {
    var t = te;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              It || rd(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !It)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Bn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && iv(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                iv(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Bs(d);
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
              throw Error(V(163));
          }
        It || (t.flags & 512 && ph(t));
      } catch (f) {
        at(t, t.return, f);
      }
    }
    if (t === e) {
      te = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (te = n);
      break;
    }
    te = t.return;
  }
}
function Cv(e) {
  for (; te !== null; ) {
    var t = te;
    if (t === e) {
      te = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (te = n);
      break;
    }
    te = t.return;
  }
}
function kv(e) {
  for (; te !== null; ) {
    var t = te;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            rd(4, t);
          } catch (l) {
            at(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              at(t, o, l);
            }
          }
          var i = t.return;
          try {
            ph(t);
          } catch (l) {
            at(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ph(t);
          } catch (l) {
            at(t, a, l);
          }
      }
    } catch (l) {
      at(t, t.return, l);
    }
    if (t === e) {
      te = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (te = s);
      break;
    }
    te = t.return;
  }
}
var iP = Math.ceil,
  mc = Ar.ReactCurrentDispatcher,
  zm = Ar.ReactCurrentOwner,
  $n = Ar.ReactCurrentBatchConfig,
  Te = 0,
  St = null,
  pt = null,
  Tt = 0,
  on = 0,
  Ai = go(0),
  vt = 0,
  Zs = null,
  Go = 0,
  od = 0,
  Bm = 0,
  Ss = null,
  Xt = null,
  Um = 0,
  na = 1 / 0,
  gr = null,
  gc = !1,
  gh = null,
  io = null,
  cu = !1,
  Qr = null,
  vc = 0,
  Cs = 0,
  vh = null,
  Lu = -1,
  ju = 0;
function Ut() {
  return Te & 6 ? ct() : Lu !== -1 ? Lu : (Lu = ct());
}
function ao(e) {
  return e.mode & 1
    ? Te & 2 && Tt !== 0
      ? Tt & -Tt
      : UE.transition !== null
      ? (ju === 0 && (ju = lb()), ju)
      : ((e = De),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mb(e.type))),
        e)
    : 1;
}
function qn(e, t, n, r) {
  if (50 < Cs) throw ((Cs = 0), (vh = null), Error(V(185)));
  Tl(e, n, r),
    (!(Te & 2) || e !== St) &&
      (e === St && (!(Te & 2) && (od |= n), vt === 4 && Yr(e, Tt)),
      en(e, r),
      n === 1 && Te === 0 && !(t.mode & 1) && ((na = ct() + 500), ed && vo()));
}
function en(e, t) {
  var n = e.callbackNode;
  U2(e, t);
  var r = ec(e, e === St ? Tt : 0);
  if (r === 0)
    n !== null && A0(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && A0(n), t === 1))
      e.tag === 0 ? BE(Ev.bind(null, e)) : _b(Ev.bind(null, e)),
        jE(function () {
          !(Te & 6) && vo();
        }),
        (n = null);
    else {
      switch (ub(r)) {
        case 1:
          n = hm;
          break;
        case 4:
          n = ab;
          break;
        case 16:
          n = Ju;
          break;
        case 536870912:
          n = sb;
          break;
        default:
          n = Ju;
      }
      n = Aw(n, Pw.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Pw(e, t) {
  if (((Lu = -1), (ju = 0), Te & 6)) throw Error(V(327));
  var n = e.callbackNode;
  if (Ui() && e.callbackNode !== n) return null;
  var r = ec(e, e === St ? Tt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yc(e, r);
  else {
    t = r;
    var o = Te;
    Te |= 2;
    var i = $w();
    (St !== e || Tt !== t) && ((gr = null), (na = ct() + 500), Fo(e, t));
    do
      try {
        lP();
        break;
      } catch (s) {
        Rw(e, s);
      }
    while (!0);
    Rm(),
      (mc.current = i),
      (Te = o),
      pt !== null ? (t = 0) : ((St = null), (Tt = 0), (t = vt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Hp(e)), o !== 0 && ((r = o), (t = yh(e, o)))), t === 1)
    )
      throw ((n = Zs), Fo(e, 0), Yr(e, r), en(e, ct()), n);
    if (t === 6) Yr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !aP(o) &&
          ((t = yc(e, r)),
          t === 2 && ((i = Hp(e)), i !== 0 && ((r = i), (t = yh(e, i)))),
          t === 1))
      )
        throw ((n = Zs), Fo(e, 0), Yr(e, r), en(e, ct()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          Po(e, Xt, gr);
          break;
        case 3:
          if (
            (Yr(e, r), (r & 130023424) === r && ((t = Um + 500 - ct()), 10 < t))
          ) {
            if (ec(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ut(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Zp(Po.bind(null, e, Xt, gr), t);
            break;
          }
          Po(e, Xt, gr);
          break;
        case 4:
          if ((Yr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Xn(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ct() - r),
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
                : 1960 * iP(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Zp(Po.bind(null, e, Xt, gr), r);
            break;
          }
          Po(e, Xt, gr);
          break;
        case 5:
          Po(e, Xt, gr);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return en(e, ct()), e.callbackNode === n ? Pw.bind(null, e) : null;
}
function yh(e, t) {
  var n = Ss;
  return (
    e.current.memoizedState.isDehydrated && (Fo(e, t).flags |= 256),
    (e = yc(e, t)),
    e !== 2 && ((t = Xt), (Xt = n), t !== null && xh(t)),
    e
  );
}
function xh(e) {
  Xt === null ? (Xt = e) : Xt.push.apply(Xt, e);
}
function aP(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Qn(i(), o)) return !1;
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
function Yr(e, t) {
  for (
    t &= ~Bm,
      t &= ~od,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ev(e) {
  if (Te & 6) throw Error(V(327));
  Ui();
  var t = ec(e, 0);
  if (!(t & 1)) return en(e, ct()), null;
  var n = yc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hp(e);
    r !== 0 && ((t = r), (n = yh(e, r)));
  }
  if (n === 1) throw ((n = Zs), Fo(e, 0), Yr(e, t), en(e, ct()), n);
  if (n === 6) throw Error(V(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Po(e, Xt, gr),
    en(e, ct()),
    null
  );
}
function Wm(e, t) {
  var n = Te;
  Te |= 1;
  try {
    return e(t);
  } finally {
    (Te = n), Te === 0 && ((na = ct() + 500), ed && vo());
  }
}
function Yo(e) {
  Qr !== null && Qr.tag === 0 && !(Te & 6) && Ui();
  var t = Te;
  Te |= 1;
  var n = $n.transition,
    r = De;
  try {
    if ((($n.transition = null), (De = 1), e)) return e();
  } finally {
    (De = r), ($n.transition = n), (Te = t), !(Te & 6) && vo();
  }
}
function Hm() {
  (on = Ai.current), Ye(Ai);
}
function Fo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), LE(n)), pt !== null))
    for (n = pt.return; n !== null; ) {
      var r = n;
      switch ((km(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ic();
          break;
        case 3:
          ea(), Ye(Zt), Ye(Lt), Am();
          break;
        case 5:
          Om(r);
          break;
        case 4:
          ea();
          break;
        case 13:
          Ye(Ze);
          break;
        case 19:
          Ye(Ze);
          break;
        case 10:
          $m(r.type._context);
          break;
        case 22:
        case 23:
          Hm();
      }
      n = n.return;
    }
  if (
    ((St = e),
    (pt = e = so(e.current, null)),
    (Tt = on = t),
    (vt = 0),
    (Zs = null),
    (Bm = od = Go = 0),
    (Xt = Ss = null),
    To !== null)
  ) {
    for (t = 0; t < To.length; t++)
      if (((n = To[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    To = null;
  }
  return e;
}
function Rw(e, t) {
  do {
    var n = pt;
    try {
      if ((Rm(), (Au.current = hc), pc)) {
        for (var r = Je.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        pc = !1;
      }
      if (
        ((Ko = 0),
        (wt = gt = Je = null),
        (bs = !1),
        (Xs = 0),
        (zm.current = null),
        n === null || n.return === null)
      ) {
        (vt = 1), (Zs = t), (pt = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = Tt),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = fv(a);
          if (h !== null) {
            (h.flags &= -257),
              pv(h, a, s, i, t),
              h.mode & 1 && dv(i, u, t),
              (t = h),
              (l = u);
            var p = t.updateQueue;
            if (p === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else p.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              dv(i, u, t), Vm();
              break e;
            }
            l = Error(V(426));
          }
        } else if (Qe && s.mode & 1) {
          var w = fv(a);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              pv(w, a, s, i, t),
              Em(ta(l, s));
            break e;
          }
        }
        (i = l = ta(l, s)),
          vt !== 4 && (vt = 2),
          Ss === null ? (Ss = [i]) : Ss.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = cw(i, l, t);
              ov(i, v);
              break e;
            case 1:
              s = l;
              var m = i.type,
                x = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (io === null || !io.has(x))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = dw(i, s, t);
                ov(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Tw(n);
    } catch (E) {
      (t = E), pt === n && n !== null && (pt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function $w() {
  var e = mc.current;
  return (mc.current = hc), e === null ? hc : e;
}
function Vm() {
  (vt === 0 || vt === 3 || vt === 2) && (vt = 4),
    St === null || (!(Go & 268435455) && !(od & 268435455)) || Yr(St, Tt);
}
function yc(e, t) {
  var n = Te;
  Te |= 2;
  var r = $w();
  (St !== e || Tt !== t) && ((gr = null), Fo(e, t));
  do
    try {
      sP();
      break;
    } catch (o) {
      Rw(e, o);
    }
  while (!0);
  if ((Rm(), (Te = n), (mc.current = r), pt !== null)) throw Error(V(261));
  return (St = null), (Tt = 0), vt;
}
function sP() {
  for (; pt !== null; ) Mw(pt);
}
function lP() {
  for (; pt !== null && !A2(); ) Mw(pt);
}
function Mw(e) {
  var t = Ow(e.alternate, e, on);
  (e.memoizedProps = e.pendingProps),
    t === null ? Tw(e) : (pt = t),
    (zm.current = null);
}
function Tw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = tP(n, t)), n !== null)) {
        (n.flags &= 32767), (pt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (vt = 6), (pt = null);
        return;
      }
    } else if (((n = eP(n, t, on)), n !== null)) {
      pt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pt = t;
      return;
    }
    pt = t = e;
  } while (t !== null);
  vt === 0 && (vt = 5);
}
function Po(e, t, n) {
  var r = De,
    o = $n.transition;
  try {
    ($n.transition = null), (De = 1), uP(e, t, n, r);
  } finally {
    ($n.transition = o), (De = r);
  }
  return null;
}
function uP(e, t, n, r) {
  do Ui();
  while (Qr !== null);
  if (Te & 6) throw Error(V(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(V(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (W2(e, i),
    e === St && ((pt = St = null), (Tt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      cu ||
      ((cu = !0),
      Aw(Ju, function () {
        return Ui(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = $n.transition), ($n.transition = null);
    var a = De;
    De = 1;
    var s = Te;
    (Te |= 4),
      (zm.current = null),
      rP(e, n),
      kw(n, e),
      ME(qp),
      (tc = !!Xp),
      (qp = Xp = null),
      (e.current = n),
      oP(n),
      _2(),
      (Te = s),
      (De = a),
      ($n.transition = i);
  } else e.current = n;
  if (
    (cu && ((cu = !1), (Qr = e), (vc = o)),
    (i = e.pendingLanes),
    i === 0 && (io = null),
    j2(n.stateNode),
    en(e, ct()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (gc) throw ((gc = !1), (e = gh), (gh = null), e);
  return (
    vc & 1 && e.tag !== 0 && Ui(),
    (i = e.pendingLanes),
    i & 1 ? (e === vh ? Cs++ : ((Cs = 0), (vh = e))) : (Cs = 0),
    vo(),
    null
  );
}
function Ui() {
  if (Qr !== null) {
    var e = ub(vc),
      t = $n.transition,
      n = De;
    try {
      if ((($n.transition = null), (De = 16 > e ? 16 : e), Qr === null))
        var r = !1;
      else {
        if (((e = Qr), (Qr = null), (vc = 0), Te & 6)) throw Error(V(331));
        var o = Te;
        for (Te |= 4, te = e.current; te !== null; ) {
          var i = te,
            a = i.child;
          if (te.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (te = u; te !== null; ) {
                  var c = te;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ws(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (te = d);
                  else
                    for (; te !== null; ) {
                      c = te;
                      var f = c.sibling,
                        h = c.return;
                      if ((ww(c), c === u)) {
                        te = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (te = f);
                        break;
                      }
                      te = h;
                    }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var g = p.child;
                if (g !== null) {
                  p.child = null;
                  do {
                    var w = g.sibling;
                    (g.sibling = null), (g = w);
                  } while (g !== null);
                }
              }
              te = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (te = a);
          else
            e: for (; te !== null; ) {
              if (((i = te), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ws(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (te = v);
                break e;
              }
              te = i.return;
            }
        }
        var m = e.current;
        for (te = m; te !== null; ) {
          a = te;
          var x = a.child;
          if (a.subtreeFlags & 2064 && x !== null) (x.return = a), (te = x);
          else
            e: for (a = m; te !== null; ) {
              if (((s = te), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rd(9, s);
                  }
                } catch (E) {
                  at(s, s.return, E);
                }
              if (s === a) {
                te = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (te = S);
                break e;
              }
              te = s.return;
            }
        }
        if (
          ((Te = o), vo(), sr && typeof sr.onPostCommitFiberRoot == "function")
        )
          try {
            sr.onPostCommitFiberRoot(Xc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (De = n), ($n.transition = t);
    }
  }
  return !1;
}
function Pv(e, t, n) {
  (t = ta(n, t)),
    (t = cw(e, t, 1)),
    (e = oo(e, t, 1)),
    (t = Ut()),
    e !== null && (Tl(e, 1, t), en(e, t));
}
function at(e, t, n) {
  if (e.tag === 3) Pv(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pv(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (io === null || !io.has(r)))
        ) {
          (e = ta(n, e)),
            (e = dw(t, e, 1)),
            (t = oo(t, e, 1)),
            (e = Ut()),
            t !== null && (Tl(t, 1, e), en(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function cP(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ut()),
    (e.pingedLanes |= e.suspendedLanes & n),
    St === e &&
      (Tt & n) === n &&
      (vt === 4 || (vt === 3 && (Tt & 130023424) === Tt && 500 > ct() - Um)
        ? Fo(e, 0)
        : (Bm |= n)),
    en(e, t);
}
function Nw(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = eu), (eu <<= 1), !(eu & 130023424) && (eu = 4194304))
      : (t = 1));
  var n = Ut();
  (e = Rr(e, t)), e !== null && (Tl(e, t, n), en(e, n));
}
function dP(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Nw(e, n);
}
function fP(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(V(314));
  }
  r !== null && r.delete(t), Nw(e, n);
}
var Ow;
Ow = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Zt.current) qt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (qt = !1), JE(e, t, n);
      qt = !!(e.flags & 131072);
    }
  else (qt = !1), Qe && t.flags & 1048576 && Ib(t, lc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Iu(e, t), (e = t.pendingProps);
      var o = Qi(t, Lt.current);
      Bi(t, n), (o = Im(null, t, r, e, o, n));
      var i = Lm();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Jt(r) ? ((i = !0), ac(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Tm(t),
            (o.updater = td),
            (t.stateNode = o),
            (o._reactInternals = t),
            ih(t, r, e, n),
            (t = lh(null, t, r, !0, i, n)))
          : ((t.tag = 0), Qe && i && Cm(t), zt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Iu(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = hP(r)),
          (e = Bn(r, e)),
          o)
        ) {
          case 0:
            t = sh(null, t, r, e, n);
            break e;
          case 1:
            t = gv(null, t, r, e, n);
            break e;
          case 11:
            t = hv(null, t, r, e, n);
            break e;
          case 14:
            t = mv(null, t, r, Bn(r.type, e), n);
            break e;
        }
        throw Error(V(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Bn(r, o)),
        sh(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Bn(r, o)),
        gv(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((mw(t), e === null)) throw Error(V(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Fb(e, t),
          dc(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = ta(Error(V(423)), t)), (t = vv(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ta(Error(V(424)), t)), (t = vv(e, t, r, n, o));
            break e;
          } else
            for (
              sn = ro(t.stateNode.containerInfo.firstChild),
                ln = t,
                Qe = !0,
                Vn = null,
                n = Wb(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Zi(), r === o)) {
            t = $r(e, t, n);
            break e;
          }
          zt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Hb(t),
        e === null && nh(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Qp(r, o) ? (a = null) : i !== null && Qp(r, i) && (t.flags |= 32),
        hw(e, t),
        zt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && nh(t), null;
    case 13:
      return gw(e, t, n);
    case 4:
      return (
        Nm(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ji(t, null, r, n)) : zt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Bn(r, o)),
        hv(e, t, r, o, n)
      );
    case 7:
      return zt(e, t, t.pendingProps, n), t.child;
    case 8:
      return zt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return zt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Ke(uc, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Qn(i.value, a)) {
            if (i.children === o.children && !Zt.current) {
              t = $r(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Cr(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      rh(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(V(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  rh(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        zt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Bi(t, n),
        (o = Nn(o)),
        (r = r(o)),
        (t.flags |= 1),
        zt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Bn(r, t.pendingProps)),
        (o = Bn(r.type, o)),
        mv(e, t, r, o, n)
      );
    case 15:
      return fw(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Bn(r, o)),
        Iu(e, t),
        (t.tag = 1),
        Jt(r) ? ((e = !0), ac(t)) : (e = !1),
        Bi(t, n),
        Bb(t, r, o),
        ih(t, r, o, n),
        lh(null, t, r, !0, e, n)
      );
    case 19:
      return vw(e, t, n);
    case 22:
      return pw(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function Aw(e, t) {
  return ib(e, t);
}
function pP(e, t, n, r) {
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
function Pn(e, t, n, r) {
  return new pP(e, t, n, r);
}
function Km(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function hP(e) {
  if (typeof e == "function") return Km(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === dm)) return 11;
    if (e === fm) return 14;
  }
  return 2;
}
function so(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pn(e.tag, t, e.key, e.mode)),
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
function Du(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Km(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Ci:
        return zo(n.children, o, i, t);
      case cm:
        (a = 8), (o |= 8);
        break;
      case Mp:
        return (
          (e = Pn(12, n, t, o | 2)), (e.elementType = Mp), (e.lanes = i), e
        );
      case Tp:
        return (e = Pn(13, n, t, o)), (e.elementType = Tp), (e.lanes = i), e;
      case Np:
        return (e = Pn(19, n, t, o)), (e.elementType = Np), (e.lanes = i), e;
      case Ux:
        return id(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case zx:
              a = 10;
              break e;
            case Bx:
              a = 9;
              break e;
            case dm:
              a = 11;
              break e;
            case fm:
              a = 14;
              break e;
            case Vr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(V(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Pn(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function zo(e, t, n, r) {
  return (e = Pn(7, e, r, t)), (e.lanes = n), e;
}
function id(e, t, n, r) {
  return (
    (e = Pn(22, e, r, t)),
    (e.elementType = Ux),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Qf(e, t, n) {
  return (e = Pn(6, e, null, t)), (e.lanes = n), e;
}
function Zf(e, t, n) {
  return (
    (t = Pn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function mP(e, t, n, r, o) {
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
    (this.eventTimes = Of(0)),
    (this.expirationTimes = Of(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Of(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Gm(e, t, n, r, o, i, a, s, l) {
  return (
    (e = new mP(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Pn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Tm(i),
    e
  );
}
function gP(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Si,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function _w(e) {
  if (!e) return co;
  e = e._reactInternals;
  e: {
    if (ti(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Jt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Jt(n)) return Ab(e, n, t);
  }
  return t;
}
function Iw(e, t, n, r, o, i, a, s, l) {
  return (
    (e = Gm(n, r, !0, e, o, i, a, s, l)),
    (e.context = _w(null)),
    (n = e.current),
    (r = Ut()),
    (o = ao(n)),
    (i = Cr(r, o)),
    (i.callback = t ?? null),
    oo(n, i, o),
    (e.current.lanes = o),
    Tl(e, o, r),
    en(e, r),
    e
  );
}
function ad(e, t, n, r) {
  var o = t.current,
    i = Ut(),
    a = ao(o);
  return (
    (n = _w(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Cr(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = oo(o, t, a)),
    e !== null && (qn(e, o, a, i), Ou(e, o, a)),
    a
  );
}
function xc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ym(e, t) {
  Rv(e, t), (e = e.alternate) && Rv(e, t);
}
function vP() {
  return null;
}
var Lw =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xm(e) {
  this._internalRoot = e;
}
sd.prototype.render = Xm.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  ad(e, t, null, null);
};
sd.prototype.unmount = Xm.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yo(function () {
      ad(null, e, null, null);
    }),
      (t[Pr] = null);
  }
};
function sd(e) {
  this._internalRoot = e;
}
sd.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = fb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gr.length && t !== 0 && t < Gr[n].priority; n++);
    Gr.splice(n, 0, e), n === 0 && hb(e);
  }
};
function qm(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ld(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function $v() {}
function yP(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = xc(a);
        i.call(u);
      };
    }
    var a = Iw(t, r, e, 0, null, !1, !1, "", $v);
    return (
      (e._reactRootContainer = a),
      (e[Pr] = a.current),
      Hs(e.nodeType === 8 ? e.parentNode : e),
      Yo(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = xc(l);
      s.call(u);
    };
  }
  var l = Gm(e, 0, !1, null, null, !1, !1, "", $v);
  return (
    (e._reactRootContainer = l),
    (e[Pr] = l.current),
    Hs(e.nodeType === 8 ? e.parentNode : e),
    Yo(function () {
      ad(t, l, n, r);
    }),
    l
  );
}
function ud(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = xc(a);
        s.call(l);
      };
    }
    ad(t, a, e, o);
  } else a = yP(n, t, e, o, r);
  return xc(a);
}
cb = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = cs(t.pendingLanes);
        n !== 0 &&
          (mm(t, n | 1), en(t, ct()), !(Te & 6) && ((na = ct() + 500), vo()));
      }
      break;
    case 13:
      Yo(function () {
        var r = Rr(e, 1);
        if (r !== null) {
          var o = Ut();
          qn(r, e, 1, o);
        }
      }),
        Ym(e, 1);
  }
};
gm = function (e) {
  if (e.tag === 13) {
    var t = Rr(e, 134217728);
    if (t !== null) {
      var n = Ut();
      qn(t, e, 134217728, n);
    }
    Ym(e, 134217728);
  }
};
db = function (e) {
  if (e.tag === 13) {
    var t = ao(e),
      n = Rr(e, t);
    if (n !== null) {
      var r = Ut();
      qn(n, e, t, r);
    }
    Ym(e, t);
  }
};
fb = function () {
  return De;
};
pb = function (e, t) {
  var n = De;
  try {
    return (De = e), t();
  } finally {
    De = n;
  }
};
Bp = function (e, t, n) {
  switch (t) {
    case "input":
      if ((_p(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Jc(r);
            if (!o) throw Error(V(90));
            Hx(r), _p(r, o);
          }
        }
      }
      break;
    case "textarea":
      Kx(e, n);
      break;
    case "select":
      (t = n.value), t != null && ji(e, !!n.multiple, t, !1);
  }
};
Jx = Wm;
eb = Yo;
var xP = { usingClientEntryPoint: !1, Events: [Ol, Ri, Jc, Qx, Zx, Wm] },
  za = {
    findFiberByHostInstance: Mo,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  bP = {
    bundleType: za.bundleType,
    version: za.version,
    rendererPackageName: za.rendererPackageName,
    rendererConfig: za.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ar.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = rb(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: za.findFiberByHostInstance || vP,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!du.isDisabled && du.supportsFiber)
    try {
      (Xc = du.inject(bP)), (sr = du);
    } catch {}
}
pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xP;
pn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qm(t)) throw Error(V(200));
  return gP(e, t, null, n);
};
pn.createRoot = function (e, t) {
  if (!qm(e)) throw Error(V(299));
  var n = !1,
    r = "",
    o = Lw;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Gm(e, 1, !1, null, null, n, !1, r, o)),
    (e[Pr] = t.current),
    Hs(e.nodeType === 8 ? e.parentNode : e),
    new Xm(t)
  );
};
pn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(V(188))
      : ((e = Object.keys(e).join(",")), Error(V(268, e)));
  return (e = rb(t)), (e = e === null ? null : e.stateNode), e;
};
pn.flushSync = function (e) {
  return Yo(e);
};
pn.hydrate = function (e, t, n) {
  if (!ld(t)) throw Error(V(200));
  return ud(null, e, t, !0, n);
};
pn.hydrateRoot = function (e, t, n) {
  if (!qm(e)) throw Error(V(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = Lw;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Iw(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Pr] = t.current),
    Hs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new sd(t);
};
pn.render = function (e, t, n) {
  if (!ld(t)) throw Error(V(200));
  return ud(null, e, t, !1, n);
};
pn.unmountComponentAtNode = function (e) {
  if (!ld(e)) throw Error(V(40));
  return e._reactRootContainer
    ? (Yo(function () {
        ud(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Pr] = null);
        });
      }),
      !0)
    : !1;
};
pn.unstable_batchedUpdates = Wm;
pn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ld(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return ud(e, t, n, !1, r);
};
pn.version = "18.2.0-next-9e3b772b8-20220608";
function jw() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jw);
    } catch (e) {
      console.error(e);
    }
}
jw(), (Ix.exports = pn);
var yo = Ix.exports;
const fs = nm(yo),
  wP = kx({ __proto__: null, default: fs }, [yo]);
var Mv = yo;
(Rp.createRoot = Mv.createRoot), (Rp.hydrateRoot = Mv.hydrateRoot);
/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function st() {
  return (
    (st = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    st.apply(this, arguments)
  );
}
var ut;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ut || (ut = {}));
const Tv = "popstate";
function SP(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: s } = r.location;
    return Js(
      "",
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Xo(o);
  }
  return kP(t, n, null, e);
}
function Ce(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ra(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function CP() {
  return Math.random().toString(36).substr(2, 8);
}
function Nv(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Js(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    st(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? _r(t) : t,
      { state: n, key: (t && t.key) || r || CP() }
    )
  );
}
function Xo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function _r(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function kP(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    s = ut.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), a.replaceState(st({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = ut.Pop;
    let w = c(),
      v = w == null ? null : w - u;
    (u = w), l && l({ action: s, location: g.location, delta: v });
  }
  function f(w, v) {
    s = ut.Push;
    let m = Js(g.location, w, v);
    n && n(m, w), (u = c() + 1);
    let x = Nv(m, u),
      S = g.createHref(m);
    try {
      a.pushState(x, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(S);
    }
    i && l && l({ action: s, location: g.location, delta: 1 });
  }
  function h(w, v) {
    s = ut.Replace;
    let m = Js(g.location, w, v);
    n && n(m, w), (u = c());
    let x = Nv(m, u),
      S = g.createHref(m);
    a.replaceState(x, "", S),
      i && l && l({ action: s, location: g.location, delta: 0 });
  }
  function p(w) {
    let v = o.location.origin !== "null" ? o.location.origin : o.location.href,
      m = typeof w == "string" ? w : Xo(w);
    return (
      (m = m.replace(/ $/, "%20")),
      Ce(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, v)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Tv, d),
        (l = w),
        () => {
          o.removeEventListener(Tv, d), (l = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: p,
    encodeLocation(w) {
      let v = p(w);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: f,
    replace: h,
    go(w) {
      return a.go(w);
    },
  };
  return g;
}
var it;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(it || (it = {}));
const EP = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function PP(e) {
  return e.index === !0;
}
function bh(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let a = [...n, i],
        s = typeof o.id == "string" ? o.id : a.join("-");
      if (
        (Ce(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route"
        ),
        Ce(
          !r[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        PP(o))
      ) {
        let l = st({}, o, t(o), { id: s });
        return (r[s] = l), l;
      } else {
        let l = st({}, o, t(o), { id: s, children: void 0 });
        return (
          (r[s] = l), o.children && (l.children = bh(o.children, t, a, r)), l
        );
      }
    })
  );
}
function _i(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? _r(t) : t,
    o = Ca(r.pathname || "/", n);
  if (o == null) return null;
  let i = Dw(e);
  $P(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) {
    let l = zP(o);
    a = jP(i[s], l);
  }
  return a;
}
function RP(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Dw(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (Ce(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = kr([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (Ce(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Dw(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: IP(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, a);
      else for (let l of Fw(i.path)) o(i, a, l);
    }),
    t
  );
}
function Fw(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = Fw(r.join("/")),
    s = [];
  return (
    s.push(...a.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && s.push(...a),
    s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function $P(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : LP(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const MP = /^:[\w-]+$/,
  TP = 3,
  NP = 2,
  OP = 1,
  AP = 10,
  _P = -2,
  Ov = (e) => e === "*";
function IP(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ov) && (r += _P),
    t && (r += NP),
    n
      .filter((o) => !Ov(o))
      .reduce((o, i) => o + (MP.test(i) ? TP : i === "" ? OP : AP), r)
  );
}
function LP(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function jP(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      l = a === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = DP(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = s.route;
    i.push({
      params: r,
      pathname: kr([o, c.pathname]),
      pathnameBase: WP(kr([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = kr([o, c.pathnameBase]));
  }
  return i;
}
function DP(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = FP(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: h } = c;
      if (f === "*") {
        let g = s[d] || "";
        a = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const p = s[d];
      return (
        h && !p ? (u[f] = void 0) : (u[f] = (p || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function FP(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ra(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, s, l) => (
            r.push({ paramName: s, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function zP(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ra(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ca(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function BP(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? _r(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : UP(n, t)) : t,
    search: HP(r),
    hash: VP(o),
  };
}
function UP(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Jf(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function zw(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function cd(e, t) {
  let n = zw(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function dd(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = _r(e))
    : ((o = st({}, e)),
      Ce(
        !o.pathname || !o.pathname.includes("?"),
        Jf("?", "pathname", "search", o)
      ),
      Ce(
        !o.pathname || !o.pathname.includes("#"),
        Jf("#", "pathname", "hash", o)
      ),
      Ce(!o.search || !o.search.includes("#"), Jf("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    s;
  if (a == null) s = n;
  else {
    let d = t.length - 1;
    if (!r && a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      o.pathname = f.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let l = BP(o, s),
    u = a && a !== "/" && a.endsWith("/"),
    c = (i || a === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const kr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  WP = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  HP = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  VP = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Qm {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Bw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Uw = ["post", "put", "patch", "delete"],
  KP = new Set(Uw),
  GP = ["get", ...Uw],
  YP = new Set(GP),
  XP = new Set([301, 302, 303, 307, 308]),
  qP = new Set([307, 308]),
  ep = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  QP = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ba = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Ww = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ZP = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Hw = "remix-router-transitions";
function JP(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Ce(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let I = e.detectErrorBoundary;
    o = (z) => ({ hasErrorBoundary: I(z) });
  } else o = ZP;
  let i = {},
    a = bh(e.routes, o, void 0, i),
    s,
    l = e.basename || "/",
    u = st(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    c = null,
    d = new Set(),
    f = null,
    h = null,
    p = null,
    g = e.hydrationData != null,
    w = _i(a, e.history.location, l),
    v = null;
  if (w == null) {
    let I = yn(404, { pathname: e.history.location.pathname }),
      { matches: z, route: W } = zv(a);
    (w = z), (v = { [W.id]: I });
  }
  let m,
    x = w.some((I) => I.route.lazy),
    S = w.some((I) => I.route.loader);
  if (x) m = !1;
  else if (!S) m = !0;
  else if (u.v7_partialHydration) {
    let I = e.hydrationData ? e.hydrationData.loaderData : null,
      z = e.hydrationData ? e.hydrationData.errors : null;
    m = w.every(
      (W) =>
        W.route.loader &&
        W.route.loader.hydrate !== !0 &&
        ((I && I[W.route.id] !== void 0) || (z && z[W.route.id] !== void 0))
    );
  } else m = e.hydrationData != null;
  let E,
    b = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: w,
      initialized: m,
      navigation: ep,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || v,
      fetchers: new Map(),
      blockers: new Map(),
    },
    k = ut.Pop,
    R = !1,
    T,
    $ = !1,
    M = new Map(),
    L = null,
    _ = !1,
    N = !1,
    A = [],
    D = [],
    F = new Map(),
    O = 0,
    j = -1,
    U = new Map(),
    X = new Set(),
    Y = new Map(),
    ce = new Map(),
    Q = new Set(),
    q = new Map(),
    ne = new Map(),
    ge = !1;
  function we() {
    if (
      ((c = e.history.listen((I) => {
        let { action: z, location: W, delta: Z } = I;
        if (ge) {
          ge = !1;
          return;
        }
        ra(
          ne.size === 0 || Z != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let se = mr({
          currentLocation: b.location,
          nextLocation: W,
          historyAction: z,
        });
        if (se && Z != null) {
          (ge = !0),
            e.history.go(Z * -1),
            nt(se, {
              state: "blocked",
              location: W,
              proceed() {
                nt(se, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: W,
                }),
                  e.history.go(Z);
              },
              reset() {
                let Se = new Map(b.blockers);
                Se.set(se, Ba), G({ blockers: Se });
              },
            });
          return;
        }
        return pe(z, W);
      })),
      n)
    ) {
      cR(t, M);
      let I = () => dR(t, M);
      t.addEventListener("pagehide", I),
        (L = () => t.removeEventListener("pagehide", I));
    }
    return b.initialized || pe(ut.Pop, b.location, { initialHydration: !0 }), E;
  }
  function H() {
    c && c(),
      L && L(),
      d.clear(),
      T && T.abort(),
      b.fetchers.forEach((I, z) => Pt(z)),
      b.blockers.forEach((I, z) => ze(z));
  }
  function re(I) {
    return d.add(I), () => d.delete(I);
  }
  function G(I, z) {
    z === void 0 && (z = {}), (b = st({}, b, I));
    let W = [],
      Z = [];
    u.v7_fetcherPersist &&
      b.fetchers.forEach((se, Se) => {
        se.state === "idle" && (Q.has(Se) ? Z.push(Se) : W.push(Se));
      }),
      [...d].forEach((se) =>
        se(b, {
          deletedFetchers: Z,
          unstable_viewTransitionOpts: z.viewTransitionOpts,
          unstable_flushSync: z.flushSync === !0,
        })
      ),
      u.v7_fetcherPersist &&
        (W.forEach((se) => b.fetchers.delete(se)), Z.forEach((se) => Pt(se)));
  }
  function B(I, z, W) {
    var Z, se;
    let { flushSync: Se } = W === void 0 ? {} : W,
      me =
        b.actionData != null &&
        b.navigation.formMethod != null &&
        Wn(b.navigation.formMethod) &&
        b.navigation.state === "loading" &&
        ((Z = I.state) == null ? void 0 : Z._isRedirect) !== !0,
      he;
    z.actionData
      ? Object.keys(z.actionData).length > 0
        ? (he = z.actionData)
        : (he = null)
      : me
      ? (he = b.actionData)
      : (he = null);
    let de = z.loaderData
        ? Fv(b.loaderData, z.loaderData, z.matches || [], z.errors)
        : b.loaderData,
      Pe = b.blockers;
    Pe.size > 0 && ((Pe = new Map(Pe)), Pe.forEach((Ve, Rt) => Pe.set(Rt, Ba)));
    let xt =
      R === !0 ||
      (b.navigation.formMethod != null &&
        Wn(b.navigation.formMethod) &&
        ((se = I.state) == null ? void 0 : se._isRedirect) !== !0);
    s && ((a = s), (s = void 0)),
      _ ||
        k === ut.Pop ||
        (k === ut.Push
          ? e.history.push(I, I.state)
          : k === ut.Replace && e.history.replace(I, I.state));
    let be;
    if (k === ut.Pop) {
      let Ve = M.get(b.location.pathname);
      Ve && Ve.has(I.pathname)
        ? (be = { currentLocation: b.location, nextLocation: I })
        : M.has(I.pathname) &&
          (be = { currentLocation: I, nextLocation: b.location });
    } else if ($) {
      let Ve = M.get(b.location.pathname);
      Ve
        ? Ve.add(I.pathname)
        : ((Ve = new Set([I.pathname])), M.set(b.location.pathname, Ve)),
        (be = { currentLocation: b.location, nextLocation: I });
    }
    G(
      st({}, z, {
        actionData: he,
        loaderData: de,
        historyAction: k,
        location: I,
        initialized: !0,
        navigation: ep,
        revalidation: "idle",
        restoreScrollPosition: b0(I, z.matches || b.matches),
        preventScrollReset: xt,
        blockers: Pe,
      }),
      { viewTransitionOpts: be, flushSync: Se === !0 }
    ),
      (k = ut.Pop),
      (R = !1),
      ($ = !1),
      (_ = !1),
      (N = !1),
      (A = []),
      (D = []);
  }
  async function ae(I, z) {
    if (typeof I == "number") {
      e.history.go(I);
      return;
    }
    let W = wh(
        b.location,
        b.matches,
        l,
        u.v7_prependBasename,
        I,
        u.v7_relativeSplatPath,
        z == null ? void 0 : z.fromRouteId,
        z == null ? void 0 : z.relative
      ),
      {
        path: Z,
        submission: se,
        error: Se,
      } = Av(u.v7_normalizeFormMethod, !1, W, z),
      me = b.location,
      he = Js(b.location, Z, z && z.state);
    he = st({}, he, e.history.encodeLocation(he));
    let de = z && z.replace != null ? z.replace : void 0,
      Pe = ut.Push;
    de === !0
      ? (Pe = ut.Replace)
      : de === !1 ||
        (se != null &&
          Wn(se.formMethod) &&
          se.formAction === b.location.pathname + b.location.search &&
          (Pe = ut.Replace));
    let xt =
        z && "preventScrollReset" in z ? z.preventScrollReset === !0 : void 0,
      be = (z && z.unstable_flushSync) === !0,
      Ve = mr({ currentLocation: me, nextLocation: he, historyAction: Pe });
    if (Ve) {
      nt(Ve, {
        state: "blocked",
        location: he,
        proceed() {
          nt(Ve, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: he,
          }),
            ae(I, z);
        },
        reset() {
          let Rt = new Map(b.blockers);
          Rt.set(Ve, Ba), G({ blockers: Rt });
        },
      });
      return;
    }
    return await pe(Pe, he, {
      submission: se,
      pendingError: Se,
      preventScrollReset: xt,
      replace: z && z.replace,
      enableViewTransition: z && z.unstable_viewTransition,
      flushSync: be,
    });
  }
  function oe() {
    if (
      (lt(),
      G({ revalidation: "loading" }),
      b.navigation.state !== "submitting")
    ) {
      if (b.navigation.state === "idle") {
        pe(b.historyAction, b.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      pe(k || b.historyAction, b.navigation.location, {
        overrideNavigation: b.navigation,
      });
    }
  }
  async function pe(I, z, W) {
    T && T.abort(),
      (T = null),
      (k = I),
      (_ = (W && W.startUninterruptedRevalidation) === !0),
      Yk(b.location, b.matches),
      (R = (W && W.preventScrollReset) === !0),
      ($ = (W && W.enableViewTransition) === !0);
    let Z = s || a,
      se = W && W.overrideNavigation,
      Se = _i(Z, z, l),
      me = (W && W.flushSync) === !0;
    if (!Se) {
      let Rt = yn(404, { pathname: z.pathname }),
        { matches: vn, route: bt } = zv(Z);
      ai(),
        B(
          z,
          { matches: vn, loaderData: {}, errors: { [bt.id]: Rt } },
          { flushSync: me }
        );
      return;
    }
    if (
      b.initialized &&
      !N &&
      oR(b.location, z) &&
      !(W && W.submission && Wn(W.submission.formMethod))
    ) {
      B(z, { matches: Se }, { flushSync: me });
      return;
    }
    T = new AbortController();
    let he = Wa(e.history, z, T.signal, W && W.submission),
      de,
      Pe;
    if (W && W.pendingError) Pe = { [ks(Se).route.id]: W.pendingError };
    else if (W && W.submission && Wn(W.submission.formMethod)) {
      let Rt = await je(he, z, W.submission, Se, {
        replace: W.replace,
        flushSync: me,
      });
      if (Rt.shortCircuited) return;
      (de = Rt.pendingActionData),
        (Pe = Rt.pendingActionError),
        (se = tp(z, W.submission)),
        (me = !1),
        (he = new Request(he.url, { signal: he.signal }));
    }
    let {
      shortCircuited: xt,
      loaderData: be,
      errors: Ve,
    } = await We(
      he,
      z,
      Se,
      se,
      W && W.submission,
      W && W.fetcherSubmission,
      W && W.replace,
      W && W.initialHydration === !0,
      me,
      de,
      Pe
    );
    xt ||
      ((T = null),
      B(
        z,
        st({ matches: Se }, de ? { actionData: de } : {}, {
          loaderData: be,
          errors: Ve,
        })
      ));
  }
  async function je(I, z, W, Z, se) {
    se === void 0 && (se = {}), lt();
    let Se = lR(z, W);
    G({ navigation: Se }, { flushSync: se.flushSync === !0 });
    let me,
      he = Ch(Z, z);
    if (!he.route.action && !he.route.lazy)
      me = {
        type: it.error,
        error: yn(405, {
          method: I.method,
          pathname: z.pathname,
          routeId: he.route.id,
        }),
      };
    else if (
      ((me = await Ua("action", I, he, Z, i, o, l, u.v7_relativeSplatPath)),
      I.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Ao(me)) {
      let de;
      return (
        se && se.replace != null
          ? (de = se.replace)
          : (de = me.location === b.location.pathname + b.location.search),
        await Re(b, me, { submission: W, replace: de }),
        { shortCircuited: !0 }
      );
    }
    if (Ii(me)) {
      let de = ks(Z, he.route.id);
      return (
        (se && se.replace) !== !0 && (k = ut.Push),
        {
          pendingActionData: {},
          pendingActionError: { [de.route.id]: me.error },
        }
      );
    }
    if (Oo(me)) throw yn(400, { type: "defer-action" });
    return { pendingActionData: { [he.route.id]: me.data } };
  }
  async function We(I, z, W, Z, se, Se, me, he, de, Pe, xt) {
    let be = Z || tp(z, se),
      Ve = se || Se || Wv(be),
      Rt = s || a,
      [vn, bt] = _v(
        e.history,
        b,
        W,
        Ve,
        z,
        u.v7_partialHydration && he === !0,
        N,
        A,
        D,
        Q,
        Y,
        X,
        Rt,
        l,
        Pe,
        xt
      );
    if (
      (ai(
        (He) =>
          !(W && W.some((Xe) => Xe.route.id === He)) ||
          (vn && vn.some((Xe) => Xe.route.id === He))
      ),
      (j = ++O),
      vn.length === 0 && bt.length === 0)
    ) {
      let He = Dr();
      return (
        B(
          z,
          st(
            { matches: W, loaderData: {}, errors: xt || null },
            Pe ? { actionData: Pe } : {},
            He ? { fetchers: new Map(b.fetchers) } : {}
          ),
          { flushSync: de }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!_ && (!u.v7_partialHydration || !he)) {
      bt.forEach((Xe) => {
        let Zn = b.fetchers.get(Xe.key),
          Yl = Ha(void 0, Zn ? Zn.data : void 0);
        b.fetchers.set(Xe.key, Yl);
      });
      let He = Pe || b.actionData;
      G(
        st(
          { navigation: be },
          He
            ? Object.keys(He).length === 0
              ? { actionData: null }
              : { actionData: He }
            : {},
          bt.length > 0 ? { fetchers: new Map(b.fetchers) } : {}
        ),
        { flushSync: de }
      );
    }
    bt.forEach((He) => {
      F.has(He.key) && ue(He.key),
        He.controller && F.set(He.key, He.controller);
    });
    let si = () => bt.forEach((He) => ue(He.key));
    T && T.signal.addEventListener("abort", si);
    let {
      results: Cf,
      loaderResults: li,
      fetcherResults: zr,
    } = await Ft(b.matches, W, vn, bt, I);
    if (I.signal.aborted) return { shortCircuited: !0 };
    T && T.signal.removeEventListener("abort", si),
      bt.forEach((He) => F.delete(He.key));
    let So = Bv(Cf);
    if (So) {
      if (So.idx >= vn.length) {
        let He = bt[So.idx - vn.length].key;
        X.add(He);
      }
      return await Re(b, So.result, { replace: me }), { shortCircuited: !0 };
    }
    let { loaderData: kf, errors: Ef } = Dv(b, W, vn, li, xt, bt, zr, q);
    q.forEach((He, Xe) => {
      He.subscribe((Zn) => {
        (Zn || He.done) && q.delete(Xe);
      });
    });
    let Pf = Dr(),
      ui = Fr(j),
      Gl = Pf || ui || bt.length > 0;
    return st(
      { loaderData: kf, errors: Ef },
      Gl ? { fetchers: new Map(b.fetchers) } : {}
    );
  }
  function ht(I, z, W, Z) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    F.has(I) && ue(I);
    let se = (Z && Z.unstable_flushSync) === !0,
      Se = s || a,
      me = wh(
        b.location,
        b.matches,
        l,
        u.v7_prependBasename,
        W,
        u.v7_relativeSplatPath,
        z,
        Z == null ? void 0 : Z.relative
      ),
      he = _i(Se, me, l);
    if (!he) {
      mt(I, z, yn(404, { pathname: me }), { flushSync: se });
      return;
    }
    let {
      path: de,
      submission: Pe,
      error: xt,
    } = Av(u.v7_normalizeFormMethod, !0, me, Z);
    if (xt) {
      mt(I, z, xt, { flushSync: se });
      return;
    }
    let be = Ch(he, de);
    if (((R = (Z && Z.preventScrollReset) === !0), Pe && Wn(Pe.formMethod))) {
      Dt(I, z, de, be, he, se, Pe);
      return;
    }
    Y.set(I, { routeId: z, path: de }), tt(I, z, de, be, he, se, Pe);
  }
  async function Dt(I, z, W, Z, se, Se, me) {
    if ((lt(), Y.delete(I), !Z.route.action && !Z.route.lazy)) {
      let Xe = yn(405, { method: me.formMethod, pathname: W, routeId: z });
      mt(I, z, Xe, { flushSync: Se });
      return;
    }
    let he = b.fetchers.get(I);
    ke(I, uR(me, he), { flushSync: Se });
    let de = new AbortController(),
      Pe = Wa(e.history, W, de.signal, me);
    F.set(I, de);
    let xt = O,
      be = await Ua("action", Pe, Z, se, i, o, l, u.v7_relativeSplatPath);
    if (Pe.signal.aborted) {
      F.get(I) === de && F.delete(I);
      return;
    }
    if (u.v7_fetcherPersist && Q.has(I)) {
      if (Ao(be) || Ii(be)) {
        ke(I, Hr(void 0));
        return;
      }
    } else {
      if (Ao(be))
        if ((F.delete(I), j > xt)) {
          ke(I, Hr(void 0));
          return;
        } else
          return X.add(I), ke(I, Ha(me)), Re(b, be, { fetcherSubmission: me });
      if (Ii(be)) {
        mt(I, z, be.error);
        return;
      }
    }
    if (Oo(be)) throw yn(400, { type: "defer-action" });
    let Ve = b.navigation.location || b.location,
      Rt = Wa(e.history, Ve, de.signal),
      vn = s || a,
      bt =
        b.navigation.state !== "idle"
          ? _i(vn, b.navigation.location, l)
          : b.matches;
    Ce(bt, "Didn't find any matches after fetcher action");
    let si = ++O;
    U.set(I, si);
    let Cf = Ha(me, be.data);
    b.fetchers.set(I, Cf);
    let [li, zr] = _v(
      e.history,
      b,
      bt,
      me,
      Ve,
      !1,
      N,
      A,
      D,
      Q,
      Y,
      X,
      vn,
      l,
      { [Z.route.id]: be.data },
      void 0
    );
    zr
      .filter((Xe) => Xe.key !== I)
      .forEach((Xe) => {
        let Zn = Xe.key,
          Yl = b.fetchers.get(Zn),
          qk = Ha(void 0, Yl ? Yl.data : void 0);
        b.fetchers.set(Zn, qk),
          F.has(Zn) && ue(Zn),
          Xe.controller && F.set(Zn, Xe.controller);
      }),
      G({ fetchers: new Map(b.fetchers) });
    let So = () => zr.forEach((Xe) => ue(Xe.key));
    de.signal.addEventListener("abort", So);
    let {
      results: kf,
      loaderResults: Ef,
      fetcherResults: Pf,
    } = await Ft(b.matches, bt, li, zr, Rt);
    if (de.signal.aborted) return;
    de.signal.removeEventListener("abort", So),
      U.delete(I),
      F.delete(I),
      zr.forEach((Xe) => F.delete(Xe.key));
    let ui = Bv(kf);
    if (ui) {
      if (ui.idx >= li.length) {
        let Xe = zr[ui.idx - li.length].key;
        X.add(Xe);
      }
      return Re(b, ui.result);
    }
    let { loaderData: Gl, errors: He } = Dv(
      b,
      b.matches,
      li,
      Ef,
      void 0,
      zr,
      Pf,
      q
    );
    if (b.fetchers.has(I)) {
      let Xe = Hr(be.data);
      b.fetchers.set(I, Xe);
    }
    Fr(si),
      b.navigation.state === "loading" && si > j
        ? (Ce(k, "Expected pending action"),
          T && T.abort(),
          B(b.navigation.location, {
            matches: bt,
            loaderData: Gl,
            errors: He,
            fetchers: new Map(b.fetchers),
          }))
        : (G({
            errors: He,
            loaderData: Fv(b.loaderData, Gl, bt, He),
            fetchers: new Map(b.fetchers),
          }),
          (N = !1));
  }
  async function tt(I, z, W, Z, se, Se, me) {
    let he = b.fetchers.get(I);
    ke(I, Ha(me, he ? he.data : void 0), { flushSync: Se });
    let de = new AbortController(),
      Pe = Wa(e.history, W, de.signal);
    F.set(I, de);
    let xt = O,
      be = await Ua("loader", Pe, Z, se, i, o, l, u.v7_relativeSplatPath);
    if (
      (Oo(be) && (be = (await Gw(be, Pe.signal, !0)) || be),
      F.get(I) === de && F.delete(I),
      !Pe.signal.aborted)
    ) {
      if (Q.has(I)) {
        ke(I, Hr(void 0));
        return;
      }
      if (Ao(be))
        if (j > xt) {
          ke(I, Hr(void 0));
          return;
        } else {
          X.add(I), await Re(b, be);
          return;
        }
      if (Ii(be)) {
        mt(I, z, be.error);
        return;
      }
      Ce(!Oo(be), "Unhandled fetcher deferred data"), ke(I, Hr(be.data));
    }
  }
  async function Re(I, z, W) {
    let {
      submission: Z,
      fetcherSubmission: se,
      replace: Se,
    } = W === void 0 ? {} : W;
    z.revalidate && (N = !0);
    let me = Js(I.location, z.location, { _isRedirect: !0 });
    if ((Ce(me, "Expected a location on the redirect navigation"), n)) {
      let Ve = !1;
      if (z.reloadDocument) Ve = !0;
      else if (Ww.test(z.location)) {
        const Rt = e.history.createURL(z.location);
        Ve = Rt.origin !== t.location.origin || Ca(Rt.pathname, l) == null;
      }
      if (Ve) {
        Se ? t.location.replace(z.location) : t.location.assign(z.location);
        return;
      }
    }
    T = null;
    let he = Se === !0 ? ut.Replace : ut.Push,
      { formMethod: de, formAction: Pe, formEncType: xt } = I.navigation;
    !Z && !se && de && Pe && xt && (Z = Wv(I.navigation));
    let be = Z || se;
    if (qP.has(z.status) && be && Wn(be.formMethod))
      await pe(he, me, {
        submission: st({}, be, { formAction: z.location }),
        preventScrollReset: R,
      });
    else {
      let Ve = tp(me, Z);
      await pe(he, me, {
        overrideNavigation: Ve,
        fetcherSubmission: se,
        preventScrollReset: R,
      });
    }
  }
  async function Ft(I, z, W, Z, se) {
    let Se = await Promise.all([
        ...W.map((de) =>
          Ua("loader", se, de, z, i, o, l, u.v7_relativeSplatPath)
        ),
        ...Z.map((de) =>
          de.matches && de.match && de.controller
            ? Ua(
                "loader",
                Wa(e.history, de.path, de.controller.signal),
                de.match,
                de.matches,
                i,
                o,
                l,
                u.v7_relativeSplatPath
              )
            : { type: it.error, error: yn(404, { pathname: de.path }) }
        ),
      ]),
      me = Se.slice(0, W.length),
      he = Se.slice(W.length);
    return (
      await Promise.all([
        Uv(
          I,
          W,
          me,
          me.map(() => se.signal),
          !1,
          b.loaderData
        ),
        Uv(
          I,
          Z.map((de) => de.match),
          he,
          Z.map((de) => (de.controller ? de.controller.signal : null)),
          !0
        ),
      ]),
      { results: Se, loaderResults: me, fetcherResults: he }
    );
  }
  function lt() {
    (N = !0),
      A.push(...ai()),
      Y.forEach((I, z) => {
        F.has(z) && (D.push(z), ue(z));
      });
  }
  function ke(I, z, W) {
    W === void 0 && (W = {}),
      b.fetchers.set(I, z),
      G(
        { fetchers: new Map(b.fetchers) },
        { flushSync: (W && W.flushSync) === !0 }
      );
  }
  function mt(I, z, W, Z) {
    Z === void 0 && (Z = {});
    let se = ks(b.matches, z);
    Pt(I),
      G(
        { errors: { [se.route.id]: W }, fetchers: new Map(b.fetchers) },
        { flushSync: (Z && Z.flushSync) === !0 }
      );
  }
  function Kt(I) {
    return (
      u.v7_fetcherPersist &&
        (ce.set(I, (ce.get(I) || 0) + 1), Q.has(I) && Q.delete(I)),
      b.fetchers.get(I) || QP
    );
  }
  function Pt(I) {
    let z = b.fetchers.get(I);
    F.has(I) && !(z && z.state === "loading" && U.has(I)) && ue(I),
      Y.delete(I),
      U.delete(I),
      X.delete(I),
      Q.delete(I),
      b.fetchers.delete(I);
  }
  function Oe(I) {
    if (u.v7_fetcherPersist) {
      let z = (ce.get(I) || 0) - 1;
      z <= 0 ? (ce.delete(I), Q.add(I)) : ce.set(I, z);
    } else Pt(I);
    G({ fetchers: new Map(b.fetchers) });
  }
  function ue(I) {
    let z = F.get(I);
    Ce(z, "Expected fetch controller: " + I), z.abort(), F.delete(I);
  }
  function gn(I) {
    for (let z of I) {
      let W = Kt(z),
        Z = Hr(W.data);
      b.fetchers.set(z, Z);
    }
  }
  function Dr() {
    let I = [],
      z = !1;
    for (let W of X) {
      let Z = b.fetchers.get(W);
      Ce(Z, "Expected fetcher: " + W),
        Z.state === "loading" && (X.delete(W), I.push(W), (z = !0));
    }
    return gn(I), z;
  }
  function Fr(I) {
    let z = [];
    for (let [W, Z] of U)
      if (Z < I) {
        let se = b.fetchers.get(W);
        Ce(se, "Expected fetcher: " + W),
          se.state === "loading" && (ue(W), U.delete(W), z.push(W));
      }
    return gn(z), z.length > 0;
  }
  function fe(I, z) {
    let W = b.blockers.get(I) || Ba;
    return ne.get(I) !== z && ne.set(I, z), W;
  }
  function ze(I) {
    b.blockers.delete(I), ne.delete(I);
  }
  function nt(I, z) {
    let W = b.blockers.get(I) || Ba;
    Ce(
      (W.state === "unblocked" && z.state === "blocked") ||
        (W.state === "blocked" && z.state === "blocked") ||
        (W.state === "blocked" && z.state === "proceeding") ||
        (W.state === "blocked" && z.state === "unblocked") ||
        (W.state === "proceeding" && z.state === "unblocked"),
      "Invalid blocker state transition: " + W.state + " -> " + z.state
    );
    let Z = new Map(b.blockers);
    Z.set(I, z), G({ blockers: Z });
  }
  function mr(I) {
    let { currentLocation: z, nextLocation: W, historyAction: Z } = I;
    if (ne.size === 0) return;
    ne.size > 1 && ra(!1, "A router only supports one blocker at a time");
    let se = Array.from(ne.entries()),
      [Se, me] = se[se.length - 1],
      he = b.blockers.get(Se);
    if (
      !(he && he.state === "proceeding") &&
      me({ currentLocation: z, nextLocation: W, historyAction: Z })
    )
      return Se;
  }
  function ai(I) {
    let z = [];
    return (
      q.forEach((W, Z) => {
        (!I || I(Z)) && (W.cancel(), z.push(Z), q.delete(Z));
      }),
      z
    );
  }
  function Gk(I, z, W) {
    if (((f = I), (p = z), (h = W || null), !g && b.navigation === ep)) {
      g = !0;
      let Z = b0(b.location, b.matches);
      Z != null && G({ restoreScrollPosition: Z });
    }
    return () => {
      (f = null), (p = null), (h = null);
    };
  }
  function x0(I, z) {
    return (
      (h &&
        h(
          I,
          z.map((Z) => RP(Z, b.loaderData))
        )) ||
      I.key
    );
  }
  function Yk(I, z) {
    if (f && p) {
      let W = x0(I, z);
      f[W] = p();
    }
  }
  function b0(I, z) {
    if (f) {
      let W = x0(I, z),
        Z = f[W];
      if (typeof Z == "number") return Z;
    }
    return null;
  }
  function Xk(I) {
    (i = {}), (s = bh(I, o, void 0, i));
  }
  return (
    (E = {
      get basename() {
        return l;
      },
      get future() {
        return u;
      },
      get state() {
        return b;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: we,
      subscribe: re,
      enableScrollRestoration: Gk,
      navigate: ae,
      fetch: ht,
      revalidate: oe,
      createHref: (I) => e.history.createHref(I),
      encodeLocation: (I) => e.history.encodeLocation(I),
      getFetcher: Kt,
      deleteFetcher: Oe,
      dispose: H,
      getBlocker: fe,
      deleteBlocker: ze,
      _internalFetchControllers: F,
      _internalActiveDeferreds: q,
      _internalSetRoutes: Xk,
    }),
    E
  );
}
function eR(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function wh(e, t, n, r, o, i, a, s) {
  let l, u;
  if (a) {
    l = [];
    for (let d of t)
      if ((l.push(d), d.route.id === a)) {
        u = d;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let c = dd(o || ".", cd(l, i), Ca(e.pathname, n) || e.pathname, s === "path");
  return (
    o == null && ((c.search = e.search), (c.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      u &&
      u.route.index &&
      !Zm(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : kr([n, c.pathname])),
    Xo(c)
  );
}
function Av(e, t, n, r) {
  if (!r || !eR(r)) return { path: n };
  if (r.formMethod && !sR(r.formMethod))
    return { path: n, error: yn(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: yn(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    a = e ? i.toUpperCase() : i.toLowerCase(),
    s = Kw(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Wn(a)) return o();
      let f =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((h, p) => {
              let [g, w] = p;
              return (
                "" +
                h +
                g +
                "=" +
                w +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: s,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Wn(a)) return o();
      try {
        let f = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: s,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  Ce(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let l, u;
  if (r.formData) (l = Sh(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = Sh(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = jv(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = jv(l));
    } catch {
      return o();
    }
  let c = {
    formMethod: a,
    formAction: s,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (Wn(c.formMethod)) return { path: n, submission: c };
  let d = _r(n);
  return (
    t && d.search && Zm(d.search) && l.append("index", ""),
    (d.search = "?" + l),
    { path: Xo(d), submission: c }
  );
}
function tR(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function _v(e, t, n, r, o, i, a, s, l, u, c, d, f, h, p, g) {
  let w = g ? Object.values(g)[0] : p ? Object.values(p)[0] : void 0,
    v = e.createURL(t.location),
    m = e.createURL(o),
    x = g ? Object.keys(g)[0] : void 0,
    E = tR(n, x).filter((k, R) => {
      let { route: T } = k;
      if (T.lazy) return !0;
      if (T.loader == null) return !1;
      if (i)
        return T.loader.hydrate
          ? !0
          : t.loaderData[T.id] === void 0 &&
              (!t.errors || t.errors[T.id] === void 0);
      if (nR(t.loaderData, t.matches[R], k) || s.some((L) => L === k.route.id))
        return !0;
      let $ = t.matches[R],
        M = k;
      return Iv(
        k,
        st(
          {
            currentUrl: v,
            currentParams: $.params,
            nextUrl: m,
            nextParams: M.params,
          },
          r,
          {
            actionResult: w,
            defaultShouldRevalidate:
              a ||
              v.pathname + v.search === m.pathname + m.search ||
              v.search !== m.search ||
              Vw($, M),
          }
        )
      );
    }),
    b = [];
  return (
    c.forEach((k, R) => {
      if (i || !n.some((_) => _.route.id === k.routeId) || u.has(R)) return;
      let T = _i(f, k.path, h);
      if (!T) {
        b.push({
          key: R,
          routeId: k.routeId,
          path: k.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let $ = t.fetchers.get(R),
        M = Ch(T, k.path),
        L = !1;
      d.has(R)
        ? (L = !1)
        : l.includes(R)
        ? (L = !0)
        : $ && $.state !== "idle" && $.data === void 0
        ? (L = a)
        : (L = Iv(
            M,
            st(
              {
                currentUrl: v,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: m,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: w, defaultShouldRevalidate: a }
            )
          )),
        L &&
          b.push({
            key: R,
            routeId: k.routeId,
            path: k.path,
            matches: T,
            match: M,
            controller: new AbortController(),
          });
    }),
    [E, b]
  );
}
function nR(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function Vw(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Iv(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Lv(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  Ce(o, "No route found in manifest");
  let i = {};
  for (let a in r) {
    let l = o[a] !== void 0 && a !== "hasErrorBoundary";
    ra(
      !l,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !l && !EP.has(a) && (i[a] = r[a]);
  }
  Object.assign(o, i), Object.assign(o, st({}, t(o), { lazy: void 0 }));
}
async function Ua(e, t, n, r, o, i, a, s, l) {
  l === void 0 && (l = {});
  let u,
    c,
    d,
    f = (g) => {
      let w,
        v = new Promise((m, x) => (w = x));
      return (
        (d = () => w()),
        t.signal.addEventListener("abort", d),
        Promise.race([
          g({ request: t, params: n.params, context: l.requestContext }),
          v,
        ])
      );
    };
  try {
    let g = n.route[e];
    if (n.route.lazy)
      if (g) {
        let w,
          v = await Promise.all([
            f(g).catch((m) => {
              w = m;
            }),
            Lv(n.route, i, o),
          ]);
        if (w) throw w;
        c = v[0];
      } else if ((await Lv(n.route, i, o), (g = n.route[e]), g)) c = await f(g);
      else if (e === "action") {
        let w = new URL(t.url),
          v = w.pathname + w.search;
        throw yn(405, { method: t.method, pathname: v, routeId: n.route.id });
      } else return { type: it.data, data: void 0 };
    else if (g) c = await f(g);
    else {
      let w = new URL(t.url),
        v = w.pathname + w.search;
      throw yn(404, { pathname: v });
    }
    Ce(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (g) {
    (u = it.error), (c = g);
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  if (aR(c)) {
    let g = c.status;
    if (XP.has(g)) {
      let v = c.headers.get("Location");
      if (
        (Ce(
          v,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Ww.test(v))
      )
        v = wh(new URL(t.url), r.slice(0, r.indexOf(n) + 1), a, !0, v, s);
      else if (!l.isStaticRequest) {
        let m = new URL(t.url),
          x = v.startsWith("//") ? new URL(m.protocol + v) : new URL(v),
          S = Ca(x.pathname, a) != null;
        x.origin === m.origin && S && (v = x.pathname + x.search + x.hash);
      }
      if (l.isStaticRequest) throw (c.headers.set("Location", v), c);
      return {
        type: it.redirect,
        status: g,
        location: v,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (l.isRouteRequest)
      throw { type: u === it.error ? it.error : it.data, response: c };
    let w;
    try {
      let v = c.headers.get("Content-Type");
      v && /\bapplication\/json\b/.test(v)
        ? c.body == null
          ? (w = null)
          : (w = await c.json())
        : (w = await c.text());
    } catch (v) {
      return { type: it.error, error: v };
    }
    return u === it.error
      ? { type: u, error: new Qm(g, c.statusText, w), headers: c.headers }
      : { type: it.data, data: w, statusCode: c.status, headers: c.headers };
  }
  if (u === it.error) return { type: u, error: c };
  if (iR(c)) {
    var h, p;
    return {
      type: it.deferred,
      deferredData: c,
      statusCode: (h = c.init) == null ? void 0 : h.status,
      headers:
        ((p = c.init) == null ? void 0 : p.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: it.data, data: c };
}
function Wa(e, t, n, r) {
  let o = e.createURL(Kw(t)).toString(),
    i = { signal: n };
  if (r && Wn(r.formMethod)) {
    let { formMethod: a, formEncType: s } = r;
    (i.method = a.toUpperCase()),
      s === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": s })),
          (i.body = JSON.stringify(r.json)))
        : s === "text/plain"
        ? (i.body = r.text)
        : s === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = Sh(r.formData))
        : (i.body = r.formData);
  }
  return new Request(o, i);
}
function Sh(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function jv(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function rR(e, t, n, r, o) {
  let i = {},
    a = null,
    s,
    l = !1,
    u = {};
  return (
    n.forEach((c, d) => {
      let f = t[d].route.id;
      if (
        (Ce(!Ao(c), "Cannot handle redirect results in processLoaderData"),
        Ii(c))
      ) {
        let h = ks(e, f),
          p = c.error;
        r && ((p = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[h.route.id] == null && (a[h.route.id] = p),
          (i[f] = void 0),
          l || ((l = !0), (s = Bw(c.error) ? c.error.status : 500)),
          c.headers && (u[f] = c.headers);
      } else
        Oo(c)
          ? (o.set(f, c.deferredData), (i[f] = c.deferredData.data))
          : (i[f] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !l &&
            (s = c.statusCode),
          c.headers && (u[f] = c.headers);
    }),
    r && ((a = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: s || 200, loaderHeaders: u }
  );
}
function Dv(e, t, n, r, o, i, a, s) {
  let { loaderData: l, errors: u } = rR(t, n, r, o, s);
  for (let c = 0; c < i.length; c++) {
    let { key: d, match: f, controller: h } = i[c];
    Ce(
      a !== void 0 && a[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let p = a[c];
    if (!(h && h.signal.aborted))
      if (Ii(p)) {
        let g = ks(e.matches, f == null ? void 0 : f.route.id);
        (u && u[g.route.id]) || (u = st({}, u, { [g.route.id]: p.error })),
          e.fetchers.delete(d);
      } else if (Ao(p)) Ce(!1, "Unhandled fetcher revalidation redirect");
      else if (Oo(p)) Ce(!1, "Unhandled fetcher deferred data");
      else {
        let g = Hr(p.data);
        e.fetchers.set(d, g);
      }
  }
  return { loaderData: l, errors: u };
}
function Fv(e, t, n, r) {
  let o = st({}, t);
  for (let i of n) {
    let a = i.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (o[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return o;
}
function ks(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function zv(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function yn(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o && n && r
          ? (s =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (s = "defer() is not supported in actions")
          : i === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (s = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (s = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        o && n && r
          ? (s =
              "You made a " +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Qm(e || 500, a, new Error(s), !0)
  );
}
function Bv(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Ao(n)) return { result: n, idx: t };
  }
}
function Kw(e) {
  let t = typeof e == "string" ? _r(e) : e;
  return Xo(st({}, t, { hash: "" }));
}
function oR(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Oo(e) {
  return e.type === it.deferred;
}
function Ii(e) {
  return e.type === it.error;
}
function Ao(e) {
  return (e && e.type) === it.redirect;
}
function iR(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function aR(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function sR(e) {
  return YP.has(e.toLowerCase());
}
function Wn(e) {
  return KP.has(e.toLowerCase());
}
async function Uv(e, t, n, r, o, i) {
  for (let a = 0; a < n.length; a++) {
    let s = n[a],
      l = t[a];
    if (!l) continue;
    let u = e.find((d) => d.route.id === l.route.id),
      c = u != null && !Vw(u, l) && (i && i[l.route.id]) !== void 0;
    if (Oo(s) && (o || c)) {
      let d = r[a];
      Ce(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Gw(s, d, o).then((f) => {
          f && (n[a] = f || n[a]);
        });
    }
  }
}
async function Gw(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: it.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: it.error, error: o };
      }
    return { type: it.data, data: e.deferredData.data };
  }
}
function Zm(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ch(e, t) {
  let n = typeof t == "string" ? _r(t).search : t.search;
  if (e[e.length - 1].route.index && Zm(n || "")) return e[e.length - 1];
  let r = zw(e);
  return r[r.length - 1];
}
function Wv(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: i,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function tp(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function lR(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ha(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function uR(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Hr(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function cR(e, t) {
  try {
    let n = e.sessionStorage.getItem(Hw);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function dR(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(Hw, JSON.stringify(n));
    } catch (r) {
      ra(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function el() {
  return (
    (el = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    el.apply(this, arguments)
  );
}
const fd = y.createContext(null),
  Yw = y.createContext(null),
  xo = y.createContext(null),
  pd = y.createContext(null),
  Ir = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Xw = y.createContext(null);
function fR(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ka() || Ce(!1);
  let { basename: r, navigator: o } = y.useContext(xo),
    { hash: i, pathname: a, search: s } = Qw(e, { relative: n }),
    l = a;
  return (
    r !== "/" && (l = a === "/" ? r : kr([r, a])),
    o.createHref({ pathname: l, search: s, hash: i })
  );
}
function ka() {
  return y.useContext(pd) != null;
}
function _l() {
  return ka() || Ce(!1), y.useContext(pd).location;
}
function qw(e) {
  y.useContext(xo).static || y.useLayoutEffect(e);
}
function Il() {
  let { isDataRoute: e } = y.useContext(Ir);
  return e ? ER() : pR();
}
function pR() {
  ka() || Ce(!1);
  let e = y.useContext(fd),
    { basename: t, future: n, navigator: r } = y.useContext(xo),
    { matches: o } = y.useContext(Ir),
    { pathname: i } = _l(),
    a = JSON.stringify(cd(o, n.v7_relativeSplatPath)),
    s = y.useRef(!1);
  return (
    qw(() => {
      s.current = !0;
    }),
    y.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = dd(u, JSON.parse(a), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : kr([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, a, i, e]
    )
  );
}
const hR = y.createContext(null);
function mR(e) {
  let t = y.useContext(Ir).outlet;
  return t && y.createElement(hR.Provider, { value: e }, t);
}
function Qw(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(xo),
    { matches: o } = y.useContext(Ir),
    { pathname: i } = _l(),
    a = JSON.stringify(cd(o, r.v7_relativeSplatPath));
  return y.useMemo(() => dd(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
}
function gR(e, t, n, r) {
  ka() || Ce(!1);
  let { navigator: o } = y.useContext(xo),
    { matches: i } = y.useContext(Ir),
    a = i[i.length - 1],
    s = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : "/";
  a && a.route;
  let u = _l(),
    c;
  if (t) {
    var d;
    let w = typeof t == "string" ? _r(t) : t;
    l === "/" || ((d = w.pathname) != null && d.startsWith(l)) || Ce(!1),
      (c = w);
  } else c = u;
  let f = c.pathname || "/",
    h = f;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let p = _i(e, { pathname: h }),
    g = wR(
      p &&
        p.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, s, w.params),
            pathname: kr([
              l,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : kr([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && g
    ? y.createElement(
        pd.Provider,
        {
          value: {
            location: el(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: ut.Pop,
          },
        },
        g
      )
    : g;
}
function vR() {
  let e = eS(),
    t = Bw(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: o }, n) : null,
    null
  );
}
const yR = y.createElement(vR, null);
class xR extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          Ir.Provider,
          { value: this.props.routeContext },
          y.createElement(Xw.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function bR(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = y.useContext(fd);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Ir.Provider, { value: t }, r)
  );
}
function wR(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let a = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let c = a.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id])
    );
    c >= 0 || Ce(!1), (a = a.slice(0, Math.min(a.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let d = a[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          p =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || p) {
          (l = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((c, d, f) => {
    let h,
      p = !1,
      g = null,
      w = null;
    n &&
      ((h = s && d.route.id ? s[d.route.id] : void 0),
      (g = d.route.errorElement || yR),
      l &&
        (u < 0 && f === 0
          ? (PR("route-fallback", !1), (p = !0), (w = null))
          : u === f &&
            ((p = !0), (w = d.route.hydrateFallbackElement || null))));
    let v = t.concat(a.slice(0, f + 1)),
      m = () => {
        let x;
        return (
          h
            ? (x = g)
            : p
            ? (x = w)
            : d.route.Component
            ? (x = y.createElement(d.route.Component, null))
            : d.route.element
            ? (x = d.route.element)
            : (x = c),
          y.createElement(bR, {
            match: d,
            routeContext: { outlet: c, matches: v, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? y.createElement(xR, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: h,
          children: m(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Zw = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Zw || {}),
  bc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(bc || {});
function SR(e) {
  let t = y.useContext(fd);
  return t || Ce(!1), t;
}
function CR(e) {
  let t = y.useContext(Yw);
  return t || Ce(!1), t;
}
function kR(e) {
  let t = y.useContext(Ir);
  return t || Ce(!1), t;
}
function Jw(e) {
  let t = kR(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ce(!1), n.route.id;
}
function eS() {
  var e;
  let t = y.useContext(Xw),
    n = CR(bc.UseRouteError),
    r = Jw(bc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ER() {
  let { router: e } = SR(Zw.UseNavigateStable),
    t = Jw(bc.UseNavigateStable),
    n = y.useRef(!1);
  return (
    qw(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, el({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Hv = {};
function PR(e, t, n) {
  !t && !Hv[e] && (Hv[e] = !0);
}
function RR(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  ka() || Ce(!1);
  let { future: i, static: a } = y.useContext(xo),
    { matches: s } = y.useContext(Ir),
    { pathname: l } = _l(),
    u = Il(),
    c = dd(t, cd(s, i.v7_relativeSplatPath), l, o === "path"),
    d = JSON.stringify(c);
  return (
    y.useEffect(
      () => u(JSON.parse(d), { replace: n, state: r, relative: o }),
      [u, d, o, n, r]
    ),
    null
  );
}
function $R(e) {
  return mR(e.context);
}
function MR(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = ut.Pop,
    navigator: i,
    static: a = !1,
    future: s,
  } = e;
  ka() && Ce(!1);
  let l = t.replace(/^\/*/, "/"),
    u = y.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: a,
        future: el({ v7_relativeSplatPath: !1 }, s),
      }),
      [l, s, i, a]
    );
  typeof r == "string" && (r = _r(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: p = "default",
    } = r,
    g = y.useMemo(() => {
      let w = Ca(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: f, state: h, key: p },
            navigationType: o,
          };
    }, [l, c, d, f, h, p, o]);
  return g == null
    ? null
    : y.createElement(
        xo.Provider,
        { value: u },
        y.createElement(pd.Provider, { children: n, value: g })
      );
}
new Promise(() => {});
function TR(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: y.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: y.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: y.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tl() {
  return (
    (tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tl.apply(this, arguments)
  );
}
function NR(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function OR(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function AR(e, t) {
  return e.button === 0 && (!t || t === "_self") && !OR(e);
}
const _R = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  IR = "6";
try {
  window.__reactRouterVersion = IR;
} catch {}
function LR(e, t) {
  return JP({
    basename: t == null ? void 0 : t.basename,
    future: tl({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: SP({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || jR(),
    routes: e,
    mapRouteProperties: TR,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function jR() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = tl({}, t, { errors: DR(t.errors) })), t;
}
function DR(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new Qm(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == "function")
          try {
            let a = new i(o.message);
            (a.stack = ""), (n[r] = a);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(o.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = o;
  return n;
}
const FR = y.createContext({ isTransitioning: !1 }),
  zR = y.createContext(new Map()),
  BR = "startTransition",
  Vv = Xu[BR],
  UR = "flushSync",
  Kv = wP[UR];
function WR(e) {
  Vv ? Vv(e) : e();
}
function Va(e) {
  Kv ? Kv(e) : e();
}
class HR {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function VR(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, i] = y.useState(n.state),
    [a, s] = y.useState(),
    [l, u] = y.useState({ isTransitioning: !1 }),
    [c, d] = y.useState(),
    [f, h] = y.useState(),
    [p, g] = y.useState(),
    w = y.useRef(new Map()),
    { v7_startTransition: v } = r || {},
    m = y.useCallback(
      (k) => {
        v ? WR(k) : k();
      },
      [v]
    ),
    x = y.useCallback(
      (k, R) => {
        let {
          deletedFetchers: T,
          unstable_flushSync: $,
          unstable_viewTransitionOpts: M,
        } = R;
        T.forEach((_) => w.current.delete(_)),
          k.fetchers.forEach((_, N) => {
            _.data !== void 0 && w.current.set(N, _.data);
          });
        let L =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!M || L) {
          $ ? Va(() => i(k)) : m(() => i(k));
          return;
        }
        if ($) {
          Va(() => {
            f && (c && c.resolve(), f.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: M.currentLocation,
                nextLocation: M.nextLocation,
              });
          });
          let _ = n.window.document.startViewTransition(() => {
            Va(() => i(k));
          });
          _.finished.finally(() => {
            Va(() => {
              d(void 0), h(void 0), s(void 0), u({ isTransitioning: !1 });
            });
          }),
            Va(() => h(_));
          return;
        }
        f
          ? (c && c.resolve(),
            f.skipTransition(),
            g({
              state: k,
              currentLocation: M.currentLocation,
              nextLocation: M.nextLocation,
            }))
          : (s(k),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: M.currentLocation,
              nextLocation: M.nextLocation,
            }));
      },
      [n.window, f, c, w, m]
    );
  y.useLayoutEffect(() => n.subscribe(x), [n, x]),
    y.useEffect(() => {
      l.isTransitioning && !l.flushSync && d(new HR());
    }, [l]),
    y.useEffect(() => {
      if (c && a && n.window) {
        let k = a,
          R = c.promise,
          T = n.window.document.startViewTransition(async () => {
            m(() => i(k)), await R;
          });
        T.finished.finally(() => {
          d(void 0), h(void 0), s(void 0), u({ isTransitioning: !1 });
        }),
          h(T);
      }
    }, [m, a, c, n.window]),
    y.useEffect(() => {
      c && a && o.location.key === a.location.key && c.resolve();
    }, [c, f, o.location, a]),
    y.useEffect(() => {
      !l.isTransitioning &&
        p &&
        (s(p.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: p.currentLocation,
          nextLocation: p.nextLocation,
        }),
        g(void 0));
    }, [l.isTransitioning, p]),
    y.useEffect(() => {}, []);
  let S = y.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (k) => n.navigate(k),
        push: (k, R, T) =>
          n.navigate(k, {
            state: R,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset,
          }),
        replace: (k, R, T) =>
          n.navigate(k, {
            replace: !0,
            state: R,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset,
          }),
      }),
      [n]
    ),
    E = n.basename || "/",
    b = y.useMemo(
      () => ({ router: n, navigator: S, static: !1, basename: E }),
      [n, S, E]
    );
  return y.createElement(
    y.Fragment,
    null,
    y.createElement(
      fd.Provider,
      { value: b },
      y.createElement(
        Yw.Provider,
        { value: o },
        y.createElement(
          zR.Provider,
          { value: w.current },
          y.createElement(
            FR.Provider,
            { value: l },
            y.createElement(
              MR,
              {
                basename: E,
                location: o.location,
                navigationType: o.historyAction,
                navigator: S,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              o.initialized || n.future.v7_partialHydration
                ? y.createElement(KR, {
                    routes: n.routes,
                    future: n.future,
                    state: o,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function KR(e) {
  let { routes: t, future: n, state: r } = e;
  return gR(t, void 0, r, n);
}
const GR =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  YR = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  di = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: s,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      f = NR(t, _R),
      { basename: h } = y.useContext(xo),
      p,
      g = !1;
    if (typeof u == "string" && YR.test(u) && ((p = u), GR))
      try {
        let x = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u),
          E = Ca(S.pathname, h);
        S.origin === x.origin && E != null
          ? (u = E + S.search + S.hash)
          : (g = !0);
      } catch {}
    let w = fR(u, { relative: o }),
      v = XR(u, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: d,
      });
    function m(x) {
      r && r(x), x.defaultPrevented || v(x);
    }
    return y.createElement(
      "a",
      tl({}, f, { href: p || w, onClick: g || i ? r : m, ref: n, target: l })
    );
  });
var Gv;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Gv || (Gv = {}));
var Yv;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Yv || (Yv = {}));
function XR(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: a,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    l = Il(),
    u = _l(),
    c = Qw(e, { relative: a });
  return y.useCallback(
    (d) => {
      if (AR(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : Xo(u) === Xo(c);
        l(e, {
          replace: f,
          state: o,
          preventScrollReset: i,
          relative: a,
          unstable_viewTransition: s,
        });
      }
    },
    [u, l, c, r, o, n, e, i, a, s]
  );
}
function fi() {
  const e = eS();
  return (
    console.error(e),
    C.jsxs("div", {
      id: "error-page",
      children: [
        C.jsx("h1", { children: "Oops!" }),
        C.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
        C.jsx("p", {
          children: C.jsx("i", { children: e.statusText || e.message }),
        }),
      ],
    })
  );
}
function tS(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = tS(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function J() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = tS(t)) && (r && (r += " "), (r += n));
  return r;
}
var Xv = function (t) {
    return t.reduce(function (n, r) {
      var o = r[0],
        i = r[1];
      return (n[o] = i), n;
    }, {});
  },
  qv =
    typeof window < "u" && window.document && window.document.createElement
      ? y.useLayoutEffect
      : y.useEffect,
  tn = "top",
  An = "bottom",
  _n = "right",
  nn = "left",
  Jm = "auto",
  Ll = [tn, An, _n, nn],
  oa = "start",
  nl = "end",
  qR = "clippingParents",
  nS = "viewport",
  Ka = "popper",
  QR = "reference",
  Qv = Ll.reduce(function (e, t) {
    return e.concat([t + "-" + oa, t + "-" + nl]);
  }, []),
  rS = [].concat(Ll, [Jm]).reduce(function (e, t) {
    return e.concat([t, t + "-" + oa, t + "-" + nl]);
  }, []),
  ZR = "beforeRead",
  JR = "read",
  e$ = "afterRead",
  t$ = "beforeMain",
  n$ = "main",
  r$ = "afterMain",
  o$ = "beforeWrite",
  i$ = "write",
  a$ = "afterWrite",
  s$ = [ZR, JR, e$, t$, n$, r$, o$, i$, a$];
function fr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function dn(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function qo(e) {
  var t = dn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Mn(e) {
  var t = dn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function eg(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = dn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function l$(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !Mn(i) ||
      !fr(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (a) {
        var s = o[a];
        s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
      }));
  });
}
function u$(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          s = a.reduce(function (l, u) {
            return (l[u] = ""), l;
          }, {});
        !Mn(o) ||
          !fr(o) ||
          (Object.assign(o.style, s),
          Object.keys(i).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
const c$ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: l$,
  effect: u$,
  requires: ["computeStyles"],
};
function ur(e) {
  return e.split("-")[0];
}
var Bo = Math.max,
  wc = Math.min,
  ia = Math.round;
function kh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function oS() {
  return !/^((?!chrome|android).)*safari/i.test(kh());
}
function aa(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    Mn(e) &&
    ((o = (e.offsetWidth > 0 && ia(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && ia(r.height) / e.offsetHeight) || 1));
  var a = qo(e) ? dn(e) : window,
    s = a.visualViewport,
    l = !oS() && n,
    u = (r.left + (l && s ? s.offsetLeft : 0)) / o,
    c = (r.top + (l && s ? s.offsetTop : 0)) / i,
    d = r.width / o,
    f = r.height / i;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c,
  };
}
function tg(e) {
  var t = aa(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function iS(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && eg(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Mr(e) {
  return dn(e).getComputedStyle(e);
}
function d$(e) {
  return ["table", "td", "th"].indexOf(fr(e)) >= 0;
}
function bo(e) {
  return ((qo(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function hd(e) {
  return fr(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (eg(e) ? e.host : null) || bo(e);
}
function Zv(e) {
  return !Mn(e) || Mr(e).position === "fixed" ? null : e.offsetParent;
}
function f$(e) {
  var t = /firefox/i.test(kh()),
    n = /Trident/i.test(kh());
  if (n && Mn(e)) {
    var r = Mr(e);
    if (r.position === "fixed") return null;
  }
  var o = hd(e);
  for (eg(o) && (o = o.host); Mn(o) && ["html", "body"].indexOf(fr(o)) < 0; ) {
    var i = Mr(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function jl(e) {
  for (var t = dn(e), n = Zv(e); n && d$(n) && Mr(n).position === "static"; )
    n = Zv(n);
  return n &&
    (fr(n) === "html" || (fr(n) === "body" && Mr(n).position === "static"))
    ? t
    : n || f$(e) || t;
}
function ng(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Es(e, t, n) {
  return Bo(e, wc(t, n));
}
function p$(e, t, n) {
  var r = Es(e, t, n);
  return r > n ? n : r;
}
function aS() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function sS(e) {
  return Object.assign({}, aS(), e);
}
function lS(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var h$ = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    sS(typeof t != "number" ? t : lS(t, Ll))
  );
};
function m$(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    s = ur(n.placement),
    l = ng(s),
    u = [nn, _n].indexOf(s) >= 0,
    c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = h$(o.padding, n),
      f = tg(i),
      h = l === "y" ? tn : nn,
      p = l === "y" ? An : _n,
      g =
        n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c],
      w = a[l] - n.rects.reference[l],
      v = jl(i),
      m = v ? (l === "y" ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
      x = g / 2 - w / 2,
      S = d[h],
      E = m - f[c] - d[p],
      b = m / 2 - f[c] / 2 + x,
      k = Es(S, b, E),
      R = l;
    n.modifiersData[r] = ((t = {}), (t[R] = k), (t.centerOffset = k - b), t);
  }
}
function g$(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (iS(t.elements.popper, o) && (t.elements.arrow = o)));
}
const v$ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: m$,
  effect: g$,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function sa(e) {
  return e.split("-")[1];
}
var y$ = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function x$(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: ia(n * o) / o || 0, y: ia(r * o) / o || 0 };
}
function Jv(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    a = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    d = e.isFixed,
    f = a.x,
    h = f === void 0 ? 0 : f,
    p = a.y,
    g = p === void 0 ? 0 : p,
    w = typeof c == "function" ? c({ x: h, y: g }) : { x: h, y: g };
  (h = w.x), (g = w.y);
  var v = a.hasOwnProperty("x"),
    m = a.hasOwnProperty("y"),
    x = nn,
    S = tn,
    E = window;
  if (u) {
    var b = jl(n),
      k = "clientHeight",
      R = "clientWidth";
    if (
      (b === dn(n) &&
        ((b = bo(n)),
        Mr(b).position !== "static" &&
          s === "absolute" &&
          ((k = "scrollHeight"), (R = "scrollWidth"))),
      (b = b),
      o === tn || ((o === nn || o === _n) && i === nl))
    ) {
      S = An;
      var T = d && b === E && E.visualViewport ? E.visualViewport.height : b[k];
      (g -= T - r.height), (g *= l ? 1 : -1);
    }
    if (o === nn || ((o === tn || o === An) && i === nl)) {
      x = _n;
      var $ = d && b === E && E.visualViewport ? E.visualViewport.width : b[R];
      (h -= $ - r.width), (h *= l ? 1 : -1);
    }
  }
  var M = Object.assign({ position: s }, u && y$),
    L = c === !0 ? x$({ x: h, y: g }, dn(n)) : { x: h, y: g };
  if (((h = L.x), (g = L.y), l)) {
    var _;
    return Object.assign(
      {},
      M,
      ((_ = {}),
      (_[S] = m ? "0" : ""),
      (_[x] = v ? "0" : ""),
      (_.transform =
        (E.devicePixelRatio || 1) <= 1
          ? "translate(" + h + "px, " + g + "px)"
          : "translate3d(" + h + "px, " + g + "px, 0)"),
      _)
    );
  }
  return Object.assign(
    {},
    M,
    ((t = {}),
    (t[S] = m ? g + "px" : ""),
    (t[x] = v ? h + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function b$(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    a = i === void 0 ? !0 : i,
    s = n.roundOffsets,
    l = s === void 0 ? !0 : s,
    u = {
      placement: ur(t.placement),
      variation: sa(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Jv(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Jv(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const w$ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: b$,
  data: {},
};
var fu = { passive: !0 };
function S$(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    a = r.resize,
    s = a === void 0 ? !0 : a,
    l = dn(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, fu);
      }),
    s && l.addEventListener("resize", n.update, fu),
    function () {
      i &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, fu);
        }),
        s && l.removeEventListener("resize", n.update, fu);
    }
  );
}
const C$ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: S$,
  data: {},
};
var k$ = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Fu(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return k$[t];
  });
}
var E$ = { start: "end", end: "start" };
function ey(e) {
  return e.replace(/start|end/g, function (t) {
    return E$[t];
  });
}
function rg(e) {
  var t = dn(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function og(e) {
  return aa(bo(e)).left + rg(e).scrollLeft;
}
function P$(e, t) {
  var n = dn(e),
    r = bo(e),
    o = n.visualViewport,
    i = r.clientWidth,
    a = r.clientHeight,
    s = 0,
    l = 0;
  if (o) {
    (i = o.width), (a = o.height);
    var u = oS();
    (u || (!u && t === "fixed")) && ((s = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: a, x: s + og(e), y: l };
}
function R$(e) {
  var t,
    n = bo(e),
    r = rg(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Bo(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    a = Bo(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    s = -r.scrollLeft + og(e),
    l = -r.scrollTop;
  return (
    Mr(o || n).direction === "rtl" &&
      (s += Bo(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: a, x: s, y: l }
  );
}
function ig(e) {
  var t = Mr(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function uS(e) {
  return ["html", "body", "#document"].indexOf(fr(e)) >= 0
    ? e.ownerDocument.body
    : Mn(e) && ig(e)
    ? e
    : uS(hd(e));
}
function Ps(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = uS(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = dn(r),
    a = o ? [i].concat(i.visualViewport || [], ig(r) ? r : []) : r,
    s = t.concat(a);
  return o ? s : s.concat(Ps(hd(a)));
}
function Eh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function $$(e, t) {
  var n = aa(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function ty(e, t, n) {
  return t === nS ? Eh(P$(e, n)) : qo(t) ? $$(t, n) : Eh(R$(bo(e)));
}
function M$(e) {
  var t = Ps(hd(e)),
    n = ["absolute", "fixed"].indexOf(Mr(e).position) >= 0,
    r = n && Mn(e) ? jl(e) : e;
  return qo(r)
    ? t.filter(function (o) {
        return qo(o) && iS(o, r) && fr(o) !== "body";
      })
    : [];
}
function T$(e, t, n, r) {
  var o = t === "clippingParents" ? M$(e) : [].concat(t),
    i = [].concat(o, [n]),
    a = i[0],
    s = i.reduce(function (l, u) {
      var c = ty(e, u, r);
      return (
        (l.top = Bo(c.top, l.top)),
        (l.right = wc(c.right, l.right)),
        (l.bottom = wc(c.bottom, l.bottom)),
        (l.left = Bo(c.left, l.left)),
        l
      );
    }, ty(e, a, r));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function cS(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? ur(r) : null,
    i = r ? sa(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case tn:
      l = { x: a, y: t.y - n.height };
      break;
    case An:
      l = { x: a, y: t.y + t.height };
      break;
    case _n:
      l = { x: t.x + t.width, y: s };
      break;
    case nn:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? ng(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case oa:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case nl:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function rl(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    a = i === void 0 ? e.strategy : i,
    s = n.boundary,
    l = s === void 0 ? qR : s,
    u = n.rootBoundary,
    c = u === void 0 ? nS : u,
    d = n.elementContext,
    f = d === void 0 ? Ka : d,
    h = n.altBoundary,
    p = h === void 0 ? !1 : h,
    g = n.padding,
    w = g === void 0 ? 0 : g,
    v = sS(typeof w != "number" ? w : lS(w, Ll)),
    m = f === Ka ? QR : Ka,
    x = e.rects.popper,
    S = e.elements[p ? m : f],
    E = T$(qo(S) ? S : S.contextElement || bo(e.elements.popper), l, c, a),
    b = aa(e.elements.reference),
    k = cS({ reference: b, element: x, strategy: "absolute", placement: o }),
    R = Eh(Object.assign({}, x, k)),
    T = f === Ka ? R : b,
    $ = {
      top: E.top - T.top + v.top,
      bottom: T.bottom - E.bottom + v.bottom,
      left: E.left - T.left + v.left,
      right: T.right - E.right + v.right,
    },
    M = e.modifiersData.offset;
  if (f === Ka && M) {
    var L = M[o];
    Object.keys($).forEach(function (_) {
      var N = [_n, An].indexOf(_) >= 0 ? 1 : -1,
        A = [tn, An].indexOf(_) >= 0 ? "y" : "x";
      $[_] += L[A] * N;
    });
  }
  return $;
}
function N$(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    a = n.padding,
    s = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? rS : l,
    c = sa(r),
    d = c
      ? s
        ? Qv
        : Qv.filter(function (p) {
            return sa(p) === c;
          })
      : Ll,
    f = d.filter(function (p) {
      return u.indexOf(p) >= 0;
    });
  f.length === 0 && (f = d);
  var h = f.reduce(function (p, g) {
    return (
      (p[g] = rl(e, { placement: g, boundary: o, rootBoundary: i, padding: a })[
        ur(g)
      ]),
      p
    );
  }, {});
  return Object.keys(h).sort(function (p, g) {
    return h[p] - h[g];
  });
}
function O$(e) {
  if (ur(e) === Jm) return [];
  var t = Fu(e);
  return [ey(e), t, ey(t)];
}
function A$(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        a = n.altAxis,
        s = a === void 0 ? !0 : a,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        d = n.rootBoundary,
        f = n.altBoundary,
        h = n.flipVariations,
        p = h === void 0 ? !0 : h,
        g = n.allowedAutoPlacements,
        w = t.options.placement,
        v = ur(w),
        m = v === w,
        x = l || (m || !p ? [Fu(w)] : O$(w)),
        S = [w].concat(x).reduce(function (Q, q) {
          return Q.concat(
            ur(q) === Jm
              ? N$(t, {
                  placement: q,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: p,
                  allowedAutoPlacements: g,
                })
              : q
          );
        }, []),
        E = t.rects.reference,
        b = t.rects.popper,
        k = new Map(),
        R = !0,
        T = S[0],
        $ = 0;
      $ < S.length;
      $++
    ) {
      var M = S[$],
        L = ur(M),
        _ = sa(M) === oa,
        N = [tn, An].indexOf(L) >= 0,
        A = N ? "width" : "height",
        D = rl(t, {
          placement: M,
          boundary: c,
          rootBoundary: d,
          altBoundary: f,
          padding: u,
        }),
        F = N ? (_ ? _n : nn) : _ ? An : tn;
      E[A] > b[A] && (F = Fu(F));
      var O = Fu(F),
        j = [];
      if (
        (i && j.push(D[L] <= 0),
        s && j.push(D[F] <= 0, D[O] <= 0),
        j.every(function (Q) {
          return Q;
        }))
      ) {
        (T = M), (R = !1);
        break;
      }
      k.set(M, j);
    }
    if (R)
      for (
        var U = p ? 3 : 1,
          X = function (q) {
            var ne = S.find(function (ge) {
              var we = k.get(ge);
              if (we)
                return we.slice(0, q).every(function (H) {
                  return H;
                });
            });
            if (ne) return (T = ne), "break";
          },
          Y = U;
        Y > 0;
        Y--
      ) {
        var ce = X(Y);
        if (ce === "break") break;
      }
    t.placement !== T &&
      ((t.modifiersData[r]._skip = !0), (t.placement = T), (t.reset = !0));
  }
}
const _$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: A$,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function ny(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function ry(e) {
  return [tn, _n, An, nn].some(function (t) {
    return e[t] >= 0;
  });
}
function I$(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = rl(t, { elementContext: "reference" }),
    s = rl(t, { altBoundary: !0 }),
    l = ny(a, r),
    u = ny(s, o, i),
    c = ry(l),
    d = ry(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": d,
    }));
}
const L$ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: I$,
};
function j$(e, t, n) {
  var r = ur(e),
    o = [nn, tn].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    a = i[0],
    s = i[1];
  return (
    (a = a || 0),
    (s = (s || 0) * o),
    [nn, _n].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
  );
}
function D$(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    a = rS.reduce(function (c, d) {
      return (c[d] = j$(d, t.rects, i)), c;
    }, {}),
    s = a[t.placement],
    l = s.x,
    u = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = a);
}
const F$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: D$,
};
function z$(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = cS({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const B$ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: z$,
  data: {},
};
function U$(e) {
  return e === "x" ? "y" : "x";
}
function W$(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    a = n.altAxis,
    s = a === void 0 ? !1 : a,
    l = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    d = n.padding,
    f = n.tether,
    h = f === void 0 ? !0 : f,
    p = n.tetherOffset,
    g = p === void 0 ? 0 : p,
    w = rl(t, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
    v = ur(t.placement),
    m = sa(t.placement),
    x = !m,
    S = ng(v),
    E = U$(S),
    b = t.modifiersData.popperOffsets,
    k = t.rects.reference,
    R = t.rects.popper,
    T =
      typeof g == "function"
        ? g(Object.assign({}, t.rects, { placement: t.placement }))
        : g,
    $ =
      typeof T == "number"
        ? { mainAxis: T, altAxis: T }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    L = { x: 0, y: 0 };
  if (b) {
    if (i) {
      var _,
        N = S === "y" ? tn : nn,
        A = S === "y" ? An : _n,
        D = S === "y" ? "height" : "width",
        F = b[S],
        O = F + w[N],
        j = F - w[A],
        U = h ? -R[D] / 2 : 0,
        X = m === oa ? k[D] : R[D],
        Y = m === oa ? -R[D] : -k[D],
        ce = t.elements.arrow,
        Q = h && ce ? tg(ce) : { width: 0, height: 0 },
        q = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : aS(),
        ne = q[N],
        ge = q[A],
        we = Es(0, k[D], Q[D]),
        H = x ? k[D] / 2 - U - we - ne - $.mainAxis : X - we - ne - $.mainAxis,
        re = x
          ? -k[D] / 2 + U + we + ge + $.mainAxis
          : Y + we + ge + $.mainAxis,
        G = t.elements.arrow && jl(t.elements.arrow),
        B = G ? (S === "y" ? G.clientTop || 0 : G.clientLeft || 0) : 0,
        ae = (_ = M == null ? void 0 : M[S]) != null ? _ : 0,
        oe = F + H - ae - B,
        pe = F + re - ae,
        je = Es(h ? wc(O, oe) : O, F, h ? Bo(j, pe) : j);
      (b[S] = je), (L[S] = je - F);
    }
    if (s) {
      var We,
        ht = S === "x" ? tn : nn,
        Dt = S === "x" ? An : _n,
        tt = b[E],
        Re = E === "y" ? "height" : "width",
        Ft = tt + w[ht],
        lt = tt - w[Dt],
        ke = [tn, nn].indexOf(v) !== -1,
        mt = (We = M == null ? void 0 : M[E]) != null ? We : 0,
        Kt = ke ? Ft : tt - k[Re] - R[Re] - mt + $.altAxis,
        Pt = ke ? tt + k[Re] + R[Re] - mt - $.altAxis : lt,
        Oe = h && ke ? p$(Kt, tt, Pt) : Es(h ? Kt : Ft, tt, h ? Pt : lt);
      (b[E] = Oe), (L[E] = Oe - tt);
    }
    t.modifiersData[r] = L;
  }
}
const H$ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: W$,
  requiresIfExists: ["offset"],
};
function V$(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function K$(e) {
  return e === dn(e) || !Mn(e) ? rg(e) : V$(e);
}
function G$(e) {
  var t = e.getBoundingClientRect(),
    n = ia(t.width) / e.offsetWidth || 1,
    r = ia(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Y$(e, t, n) {
  n === void 0 && (n = !1);
  var r = Mn(t),
    o = Mn(t) && G$(t),
    i = bo(t),
    a = aa(e, o, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((fr(t) !== "body" || ig(i)) && (s = K$(t)),
      Mn(t)
        ? ((l = aa(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = og(i))),
    {
      x: a.left + s.scrollLeft - l.x,
      y: a.top + s.scrollTop - l.y,
      width: a.width,
      height: a.height,
    }
  );
}
function X$(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function q$(e) {
  var t = X$(e);
  return s$.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function Q$(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function Z$(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var oy = { placement: "bottom", modifiers: [], strategy: "absolute" };
function iy() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function J$(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? oy : o;
  return function (s, l, u) {
    u === void 0 && (u = i);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, oy, i),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      h = {
        state: c,
        setOptions: function (v) {
          var m = typeof v == "function" ? v(c.options) : v;
          g(),
            (c.options = Object.assign({}, i, c.options, m)),
            (c.scrollParents = {
              reference: qo(s)
                ? Ps(s)
                : s.contextElement
                ? Ps(s.contextElement)
                : [],
              popper: Ps(l),
            });
          var x = q$(Z$([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = x.filter(function (S) {
              return S.enabled;
            })),
            p(),
            h.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var v = c.elements,
              m = v.reference,
              x = v.popper;
            if (iy(m, x)) {
              (c.rects = {
                reference: Y$(m, jl(x), c.options.strategy === "fixed"),
                popper: tg(x),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function ($) {
                  return (c.modifiersData[$.name] = Object.assign({}, $.data));
                });
              for (var S = 0; S < c.orderedModifiers.length; S++) {
                if (c.reset === !0) {
                  (c.reset = !1), (S = -1);
                  continue;
                }
                var E = c.orderedModifiers[S],
                  b = E.fn,
                  k = E.options,
                  R = k === void 0 ? {} : k,
                  T = E.name;
                typeof b == "function" &&
                  (c = b({ state: c, options: R, name: T, instance: h }) || c);
              }
            }
          }
        },
        update: Q$(function () {
          return new Promise(function (w) {
            h.forceUpdate(), w(c);
          });
        }),
        destroy: function () {
          g(), (f = !0);
        },
      };
    if (!iy(s, l)) return h;
    h.setOptions(u).then(function (w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function p() {
      c.orderedModifiers.forEach(function (w) {
        var v = w.name,
          m = w.options,
          x = m === void 0 ? {} : m,
          S = w.effect;
        if (typeof S == "function") {
          var E = S({ state: c, name: v, instance: h, options: x }),
            b = function () {};
          d.push(E || b);
        }
      });
    }
    function g() {
      d.forEach(function (w) {
        return w();
      }),
        (d = []);
    }
    return h;
  };
}
var eM = [C$, B$, w$, c$, F$, _$, H$, v$, L$],
  dS = J$({ defaultModifiers: eM }),
  tM = typeof Element < "u",
  nM = typeof Map == "function",
  rM = typeof Set == "function",
  oM = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function zu(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!zu(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (nM && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!zu(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (rM && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (oM && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (tM && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !zu(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var iM = function (t, n) {
  try {
    return zu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const aM = nm(iM);
var sM = [],
  lM = function (t, n, r) {
    r === void 0 && (r = {});
    var o = y.useRef(null),
      i = {
        onFirstUpdate: r.onFirstUpdate,
        placement: r.placement || "bottom",
        strategy: r.strategy || "absolute",
        modifiers: r.modifiers || sM,
      },
      a = y.useState({
        styles: {
          popper: { position: i.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      s = a[0],
      l = a[1],
      u = y.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (h) {
            var p = h.state,
              g = Object.keys(p.elements);
            yo.flushSync(function () {
              l({
                styles: Xv(
                  g.map(function (w) {
                    return [w, p.styles[w] || {}];
                  })
                ),
                attributes: Xv(
                  g.map(function (w) {
                    return [w, p.attributes[w]];
                  })
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      c = y.useMemo(
        function () {
          var f = {
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [
              u,
              { name: "applyStyles", enabled: !1 },
            ]),
          };
          return aM(o.current, f) ? o.current || f : ((o.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, u]
      ),
      d = y.useRef();
    return (
      qv(
        function () {
          d.current && d.current.setOptions(c);
        },
        [c]
      ),
      qv(
        function () {
          if (!(t == null || n == null)) {
            var f = r.createPopper || dS,
              h = f(t, n, c);
            return (
              (d.current = h),
              function () {
                h.destroy(), (d.current = null);
              }
            );
          }
        },
        [t, n, r.createPopper]
      ),
      {
        state: d.current ? d.current.state : null,
        styles: s.styles,
        attributes: s.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  ol = "top",
  la = "bottom",
  md = "right",
  ag = "left",
  sg = "auto",
  gd = [ol, la, md, ag],
  vd = "start",
  lg = "end",
  uM = "clippingParents",
  fS = "viewport",
  Ga = "popper",
  cM = "reference",
  ay = gd.reduce(function (e, t) {
    return e.concat([t + "-" + vd, t + "-" + lg]);
  }, []),
  dM = [].concat(gd, [sg]).reduce(function (e, t) {
    return e.concat([t, t + "-" + vd, t + "-" + lg]);
  }, []);
function Qo(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wo(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function il(e) {
  var t = wo(e).Element;
  return e instanceof t || e instanceof Element;
}
function ua(e) {
  var t = wo(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ug(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = wo(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Wi(e) {
  return e.split("-")[0];
}
var Rs = Math.max,
  sy = Math.min,
  ly = Math.round;
function cg(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(),
    r = 1,
    o = 1;
  if (ua(e) && t) {
    var i = e.offsetHeight,
      a = e.offsetWidth;
    a > 0 && (r = ly(n.width) / a || 1), i > 0 && (o = ly(n.height) / i || 1);
  }
  return {
    width: n.width / r,
    height: n.height / o,
    top: n.top / o,
    right: n.right / r,
    bottom: n.bottom / o,
    left: n.left / r,
    x: n.left / r,
    y: n.top / o,
  };
}
function fM(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ug(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function fo(e) {
  return wo(e).getComputedStyle(e);
}
function pM(e) {
  return ["table", "td", "th"].indexOf(Qo(e)) >= 0;
}
function Ea(e) {
  return ((il(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function yd(e) {
  return Qo(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (ug(e) ? e.host : null) || Ea(e);
}
function uy(e) {
  return !ua(e) || fo(e).position === "fixed" ? null : e.offsetParent;
}
function hM(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1,
    n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && ua(e)) {
    var r = fo(e);
    if (r.position === "fixed") return null;
  }
  var o = yd(e);
  for (ug(o) && (o = o.host); ua(o) && ["html", "body"].indexOf(Qo(o)) < 0; ) {
    var i = fo(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function mM(e) {
  for (var t = wo(e), n = uy(e); n && pM(n) && fo(n).position === "static"; )
    n = uy(n);
  return n &&
    (Qo(n) === "html" || (Qo(n) === "body" && fo(n).position === "static"))
    ? t
    : n || hM(e) || t;
}
function gM(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function vM() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function yM(e) {
  return Object.assign({}, vM(), e);
}
function xM(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
function Sc(e) {
  return e.split("-")[1];
}
var bM = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Bu(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return bM[t];
  });
}
var wM = { start: "end", end: "start" };
function cy(e) {
  return e.replace(/start|end/g, function (t) {
    return wM[t];
  });
}
function pS(e) {
  var t = wo(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function hS(e) {
  return cg(Ea(e)).left + pS(e).scrollLeft;
}
function SM(e) {
  var t = wo(e),
    n = Ea(e),
    r = t.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    a = 0,
    s = 0;
  return (
    r &&
      ((o = r.width),
      (i = r.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((a = r.offsetLeft), (s = r.offsetTop))),
    { width: o, height: i, x: a + hS(e), y: s }
  );
}
function CM(e) {
  var t,
    n = Ea(e),
    r = pS(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Rs(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    a = Rs(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    s = -r.scrollLeft + hS(e),
    l = -r.scrollTop;
  return (
    fo(o || n).direction === "rtl" &&
      (s += Rs(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: a, x: s, y: l }
  );
}
function mS(e) {
  var t = fo(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function gS(e) {
  return ["html", "body", "#document"].indexOf(Qo(e)) >= 0
    ? e.ownerDocument.body
    : ua(e) && mS(e)
    ? e
    : gS(yd(e));
}
function vS(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = gS(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = wo(r),
    a = o ? [i].concat(i.visualViewport || [], mS(r) ? r : []) : r,
    s = t.concat(a);
  return o ? s : s.concat(vS(yd(a)));
}
function Ph(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function kM(e) {
  var t = cg(e);
  return (
    (t.top = t.top + e.clientTop),
    (t.left = t.left + e.clientLeft),
    (t.bottom = t.top + e.clientHeight),
    (t.right = t.left + e.clientWidth),
    (t.width = e.clientWidth),
    (t.height = e.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  );
}
function dy(e, t) {
  return t === fS ? Ph(SM(e)) : il(t) ? kM(t) : Ph(CM(Ea(e)));
}
function EM(e) {
  var t = vS(yd(e)),
    n = ["absolute", "fixed"].indexOf(fo(e).position) >= 0,
    r = n && ua(e) ? mM(e) : e;
  return il(r)
    ? t.filter(function (o) {
        return il(o) && fM(o, r) && Qo(o) !== "body";
      })
    : [];
}
function PM(e, t, n) {
  var r = t === "clippingParents" ? EM(e) : [].concat(t),
    o = [].concat(r, [n]),
    i = o[0],
    a = o.reduce(function (s, l) {
      var u = dy(e, l);
      return (
        (s.top = Rs(u.top, s.top)),
        (s.right = sy(u.right, s.right)),
        (s.bottom = sy(u.bottom, s.bottom)),
        (s.left = Rs(u.left, s.left)),
        s
      );
    }, dy(e, i));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function RM(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? Wi(r) : null,
    i = r ? Sc(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case ol:
      l = { x: a, y: t.y - n.height };
      break;
    case la:
      l = { x: a, y: t.y + t.height };
      break;
    case md:
      l = { x: t.x + t.width, y: s };
      break;
    case ag:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? gM(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case vd:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case lg:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function yS(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.boundary,
    a = i === void 0 ? uM : i,
    s = n.rootBoundary,
    l = s === void 0 ? fS : s,
    u = n.elementContext,
    c = u === void 0 ? Ga : u,
    d = n.altBoundary,
    f = d === void 0 ? !1 : d,
    h = n.padding,
    p = h === void 0 ? 0 : h,
    g = yM(typeof p != "number" ? p : xM(p, gd)),
    w = c === Ga ? cM : Ga,
    v = e.rects.popper,
    m = e.elements[f ? w : c],
    x = PM(il(m) ? m : m.contextElement || Ea(e.elements.popper), a, l),
    S = cg(e.elements.reference),
    E = RM({ reference: S, element: v, strategy: "absolute", placement: o }),
    b = Ph(Object.assign({}, v, E)),
    k = c === Ga ? b : S,
    R = {
      top: x.top - k.top + g.top,
      bottom: k.bottom - x.bottom + g.bottom,
      left: x.left - k.left + g.left,
      right: k.right - x.right + g.right,
    },
    T = e.modifiersData.offset;
  if (c === Ga && T) {
    var $ = T[o];
    Object.keys(R).forEach(function (M) {
      var L = [md, la].indexOf(M) >= 0 ? 1 : -1,
        _ = [ol, la].indexOf(M) >= 0 ? "y" : "x";
      R[M] += $[_] * L;
    });
  }
  return R;
}
function $M(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    a = n.padding,
    s = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? dM : l,
    c = Sc(r),
    d = c
      ? s
        ? ay
        : ay.filter(function (p) {
            return Sc(p) === c;
          })
      : gd,
    f = d.filter(function (p) {
      return u.indexOf(p) >= 0;
    });
  f.length === 0 && (f = d);
  var h = f.reduce(function (p, g) {
    return (
      (p[g] = yS(e, { placement: g, boundary: o, rootBoundary: i, padding: a })[
        Wi(g)
      ]),
      p
    );
  }, {});
  return Object.keys(h).sort(function (p, g) {
    return h[p] - h[g];
  });
}
function MM(e) {
  if (Wi(e) === sg) return [];
  var t = Bu(e);
  return [cy(e), t, cy(t)];
}
function TM(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        a = n.altAxis,
        s = a === void 0 ? !0 : a,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        d = n.rootBoundary,
        f = n.altBoundary,
        h = n.flipVariations,
        p = h === void 0 ? !0 : h,
        g = n.allowedAutoPlacements,
        w = t.options.placement,
        v = Wi(w),
        m = v === w,
        x = l || (m || !p ? [Bu(w)] : MM(w)),
        S = [w].concat(x).reduce(function (Q, q) {
          return Q.concat(
            Wi(q) === sg
              ? $M(t, {
                  placement: q,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: p,
                  allowedAutoPlacements: g,
                })
              : q
          );
        }, []),
        E = t.rects.reference,
        b = t.rects.popper,
        k = new Map(),
        R = !0,
        T = S[0],
        $ = 0;
      $ < S.length;
      $++
    ) {
      var M = S[$],
        L = Wi(M),
        _ = Sc(M) === vd,
        N = [ol, la].indexOf(L) >= 0,
        A = N ? "width" : "height",
        D = yS(t, {
          placement: M,
          boundary: c,
          rootBoundary: d,
          altBoundary: f,
          padding: u,
        }),
        F = N ? (_ ? md : ag) : _ ? la : ol;
      E[A] > b[A] && (F = Bu(F));
      var O = Bu(F),
        j = [];
      if (
        (i && j.push(D[L] <= 0),
        s && j.push(D[F] <= 0, D[O] <= 0),
        j.every(function (Q) {
          return Q;
        }))
      ) {
        (T = M), (R = !1);
        break;
      }
      k.set(M, j);
    }
    if (R)
      for (
        var U = p ? 3 : 1,
          X = function (q) {
            var ne = S.find(function (ge) {
              var we = k.get(ge);
              if (we)
                return we.slice(0, q).every(function (H) {
                  return H;
                });
            });
            if (ne) return (T = ne), "break";
          },
          Y = U;
        Y > 0;
        Y--
      ) {
        var ce = X(Y);
        if (ce === "break") break;
      }
    t.placement !== T &&
      ((t.modifiersData[r]._skip = !0), (t.placement = T), (t.reset = !0));
  }
}
const NM = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: TM,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
(function () {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(
        document.createTextNode(
          ".dropdown-menu .active:not(.form-control){color:#16181b;background-color:#eee}.dropdown-menu [data-active=true] a.dropdown-item,.dropdown-menu .dropdown-item:focus,.dropdown-menu li:focus .dropdown-item :not(.disabled){color:#16181b;background-color:#eee}.dropdown-menu li:focus{outline:none}.dropdown-menu.dropdown-menu-dark [data-active=true] a.dropdown-item,.dropdown-menu.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu.dropdown-menu-dark li:focus .dropdown-item{color:#fff;background-color:#1266f1}.btn-group.dropstart>.dropdown-menu{right:0!important}"
        )
      ),
        document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
const xS = ee.forwardRef(
  (
    {
      breakpoint: e,
      fluid: t,
      children: n,
      className: r,
      tag: o = "div",
      ...i
    },
    a
  ) => {
    const s = J(`${t ? "container-fluid" : `container${e ? "-" + e : ""}`}`, r);
    return C.jsx(o, { className: s, ...i, ref: a, children: n });
  }
);
xS.displayName = "MDBContainer";
const OM = ee.forwardRef(
  (
    {
      center: e,
      children: t,
      className: n,
      end: r,
      lg: o,
      md: i,
      offsetLg: a,
      offsetMd: s,
      offsetSm: l,
      order: u,
      size: c,
      sm: d,
      start: f,
      tag: h = "div",
      xl: p,
      xxl: g,
      xs: w,
      ...v
    },
    m
  ) => {
    const x = J(
      c && `col-${c}`,
      w && `col-xs-${w}`,
      d && `col-sm-${d}`,
      i && `col-md-${i}`,
      o && `col-lg-${o}`,
      p && `col-xl-${p}`,
      g && `col-xxl-${g}`,
      !c && !w && !d && !i && !o && !p && !g ? "col" : "",
      u && `order-${u}`,
      f && "align-self-start",
      e && "align-self-center",
      r && "align-self-end",
      l && `offset-sm-${l}`,
      s && `offset-md-${s}`,
      a && `offset-lg-${a}`,
      n
    );
    return C.jsx(h, { className: x, ref: m, ...v, children: t });
  }
);
OM.displayName = "MDBCol";
const AM = ee.forwardRef(
  (
    {
      className: e,
      color: t = "primary",
      pill: n,
      light: r,
      dot: o,
      tag: i = "span",
      children: a,
      notification: s,
      ...l
    },
    u
  ) => {
    const c = J(
      "badge",
      r ? t && `badge-${t}` : t && `bg-${t}`,
      o && "badge-dot",
      n && "rounded-pill",
      s && "badge-notification",
      e
    );
    return C.jsx(i, { className: c, ref: u, ...l, children: a });
  }
);
AM.displayName = "MDBBadge";
const _M = ({ ...e }) => {
    const [t, n] = y.useState(!1),
      r = J("ripple-wave", t && "active");
    return (
      y.useEffect(() => {
        const o = setTimeout(() => {
          n(!0);
        }, 50);
        return () => {
          clearTimeout(o);
        };
      }, []),
      C.jsx("div", { className: r, ...e })
    );
  },
  IM = (...e) => {
    const t = ee.useRef();
    return (
      ee.useEffect(() => {
        e.forEach((n) => {
          n &&
            (typeof n == "function" ? n(t.current) : (n.current = t.current));
        });
      }, [e]),
      t
    );
  },
  bS = ee.forwardRef(
    (
      {
        className: e,
        rippleTag: t = "div",
        rippleCentered: n,
        rippleDuration: r = 500,
        rippleUnbound: o,
        rippleRadius: i = 0,
        rippleColor: a = "dark",
        children: s,
        onMouseDown: l,
        ...u
      },
      c
    ) => {
      const d = y.useRef(null),
        f = IM(c, d),
        h =
          "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%",
        p = [0, 0, 0],
        g = [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ],
        [w, v] = y.useState([]),
        [m, x] = y.useState(!1),
        S = J(
          "ripple",
          "ripple-surface",
          o && "ripple-surface-unbound",
          m && `ripple-surface-${a}`,
          e
        ),
        E = () => {
          if (g.find(($) => $ === (a == null ? void 0 : a.toLowerCase())))
            return x(!0);
          {
            const $ = b(a).join(",");
            return `radial-gradient(circle, ${h
              .split("{{color}}")
              .join(`${$}`)})`;
          }
        },
        b = ($) => {
          const M = (N) => (
              N.length < 7 &&
                (N = `#${N[1]}${N[1]}${N[2]}${N[2]}${N[3]}${N[3]}`),
              [
                parseInt(N.substr(1, 2), 16),
                parseInt(N.substr(3, 2), 16),
                parseInt(N.substr(5, 2), 16),
              ]
            ),
            L = (N) => {
              const A = document.body.appendChild(
                  document.createElement("fictum")
                ),
                D = "rgb(1, 2, 3)";
              return (
                (A.style.color = D),
                A.style.color !== D ||
                ((A.style.color = N),
                A.style.color === D || A.style.color === "")
                  ? p
                  : ((N = getComputedStyle(A).color),
                    document.body.removeChild(A),
                    N)
              );
            },
            _ = (N) => (
              (N = N.match(/[.\d]+/g).map((A) => +Number(A))), (N.length = 3), N
            );
          return $.toLowerCase() === "transparent"
            ? p
            : $[0] === "#"
            ? M($)
            : ($.indexOf("rgb") === -1 && ($ = L($)),
              $.indexOf("rgb") === 0 ? _($) : p);
        },
        k = ($) => {
          const { offsetX: M, offsetY: L, height: _, width: N } = $,
            A = L <= _ / 2,
            D = M <= N / 2,
            F = (Y, ce) => Math.sqrt(Y ** 2 + ce ** 2),
            O = L === _ / 2 && M === N / 2,
            j = {
              first: A === !0 && D === !1,
              second: A === !0 && D === !0,
              third: A === !1 && D === !0,
              fourth: A === !1 && D === !1,
            },
            U = {
              topLeft: F(M, L),
              topRight: F(N - M, L),
              bottomLeft: F(M, _ - L),
              bottomRight: F(N - M, _ - L),
            };
          let X = 0;
          return (
            O || j.fourth
              ? (X = U.topLeft)
              : j.third
              ? (X = U.topRight)
              : j.second
              ? (X = U.bottomRight)
              : j.first && (X = U.bottomLeft),
            X * 2
          );
        },
        R = ($) => {
          var M;
          const L =
              (M = f.current) == null ? void 0 : M.getBoundingClientRect(),
            _ = $.clientX - L.left,
            N = $.clientY - L.top,
            A = L.height,
            D = L.width,
            F = {
              offsetX: n ? A / 2 : _,
              offsetY: n ? D / 2 : N,
              height: A,
              width: D,
            },
            O = { delay: r && r * 0.5, duration: r && r - r * 0.5 },
            j = k(F),
            U = i || j / 2,
            X = {
              left: n ? `${D / 2 - U}px` : `${_ - U}px`,
              top: n ? `${A / 2 - U}px` : `${N - U}px`,
              height: i ? `${i * 2}px` : `${j}px`,
              width: i ? `${i * 2}px` : `${j}px`,
              transitionDelay: `0s, ${O.delay}ms`,
              transitionDuration: `${r}ms, ${O.duration}ms`,
            };
          return m ? X : { ...X, backgroundImage: `${E()}` };
        },
        T = ($) => {
          const M = R($),
            L = w.concat(M);
          v(L), l && l($);
        };
      return (
        y.useEffect(() => {
          const $ = setTimeout(() => {
            w.length > 0 && v(w.splice(1, w.length - 1));
          }, r);
          return () => {
            clearTimeout($);
          };
        }, [r, w]),
        C.jsxs(t, {
          className: S,
          onMouseDown: ($) => T($),
          ref: f,
          ...u,
          children: [s, w.map(($, M) => C.jsx(_M, { style: $ }, M))],
        })
      );
    }
  );
bS.displayName = "MDBRipple";
const wS = ee.forwardRef(
  (
    {
      className: e,
      color: t = "primary",
      outline: n,
      children: r,
      rounded: o,
      disabled: i,
      floating: a,
      size: s,
      href: l,
      block: u,
      active: c,
      toggle: d,
      noRipple: f,
      tag: h = "button",
      role: p = "button",
      ...g
    },
    w
  ) => {
    const [v, m] = y.useState(c || !1);
    let x;
    const S = (t && ["light", "link"].includes(t)) || n ? "dark" : "light";
    t !== "none"
      ? n
        ? t
          ? (x = `btn-outline-${t}`)
          : (x = "btn-outline-primary")
        : t
        ? (x = `btn-${t}`)
        : (x = "btn-primary")
      : (x = "");
    const E = J(
      t !== "none" && "btn",
      x,
      o && "btn-rounded",
      a && "btn-floating",
      s && `btn-${s}`,
      `${(l || h !== "button") && i ? "disabled" : ""}`,
      u && "btn-block",
      v && "active",
      e
    );
    return (
      l && h !== "a" && (h = "a"),
      ["hr", "img", "input"].includes(h) || f
        ? C.jsx(h, {
            className: E,
            onClick: d
              ? () => {
                  m(!v);
                }
              : void 0,
            disabled: i && h === "button" ? !0 : void 0,
            href: l,
            ref: w,
            role: p,
            ...g,
            children: r,
          })
        : C.jsx(bS, {
            rippleTag: h,
            rippleColor: S,
            className: E,
            onClick: d
              ? () => {
                  m(!v);
                }
              : void 0,
            disabled: i && h === "button" ? !0 : void 0,
            href: l,
            ref: w,
            role: p,
            ...g,
            children: r,
          })
    );
  }
);
wS.displayName = "MDBBtn";
const LM = ee.forwardRef(
  (
    {
      className: e,
      children: t,
      shadow: n,
      toolbar: r,
      size: o,
      vertical: i,
      tag: a = "div",
      role: s = "group",
      ...l
    },
    u
  ) => {
    let c;
    r
      ? (c = "btn-toolbar")
      : i
      ? (c = "btn-group-vertical")
      : (c = "btn-group");
    const d = J(c, n && `shadow-${n}`, o && `btn-group-${o}`, e);
    return C.jsx(a, { className: d, ref: u, role: s, ...l, children: t });
  }
);
LM.displayName = "MDBBtnGroup";
const jM = ee.forwardRef(
  (
    {
      className: e,
      children: t,
      tag: n = "div",
      color: r,
      grow: o,
      size: i,
      ...a
    },
    s
  ) => {
    const l = J(
      `${o ? "spinner-grow" : "spinner-border"}`,
      r && `text-${r}`,
      `${i ? (o ? "spinner-grow-" + i : "spinner-border-" + i) : ""}`,
      e
    );
    return C.jsx(n, { className: l, ref: s, ...a, children: t });
  }
);
jM.displayName = "MDBSpinner";
const DM = ee.forwardRef(
  (
    {
      className: e,
      children: t,
      border: n,
      background: r,
      tag: o = "div",
      shadow: i,
      alignment: a,
      ...s
    },
    l
  ) => {
    const u = J(
      "card",
      n && `border border-${n}`,
      r && `bg-${r}`,
      i && `shadow-${i}`,
      a && `text-${a}`,
      e
    );
    return C.jsx(o, { className: u, ref: l, ...s, children: t });
  }
);
DM.displayName = "MDBCard";
const FM = ee.forwardRef(
  (
    {
      className: e,
      children: t,
      border: n,
      background: r,
      tag: o = "div",
      ...i
    },
    a
  ) => {
    const s = J("card-header", n && `border-${n}`, r && `bg-${r}`, e);
    return C.jsx(o, { className: s, ...i, ref: a, children: t });
  }
);
FM.displayName = "MDBCardHeader";
const zM = ee.forwardRef(
  ({ className: e, children: t, tag: n = "p", ...r }, o) => {
    const i = J("card-subtitle", e);
    return C.jsx(n, { className: i, ...r, ref: o, children: t });
  }
);
zM.displayName = "MDBCardSubTitle";
const BM = ee.forwardRef(
  ({ className: e, children: t, tag: n = "h5", ...r }, o) => {
    const i = J("card-title", e);
    return C.jsx(n, { className: i, ...r, ref: o, children: t });
  }
);
BM.displayName = "MDBCardTitle";
const UM = ee.forwardRef(
  ({ className: e, children: t, tag: n = "p", ...r }, o) => {
    const i = J("card-text", e);
    return C.jsx(n, { className: i, ...r, ref: o, children: t });
  }
);
UM.displayName = "MDBCardText";
const WM = ee.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const i = J("card-body", e);
    return C.jsx(n, { className: i, ...r, ref: o, children: t });
  }
);
WM.displayName = "MDBCardBody";
const HM = ee.forwardRef(
  (
    {
      className: e,
      children: t,
      border: n,
      background: r,
      tag: o = "div",
      ...i
    },
    a
  ) => {
    const s = J("card-footer", n && `border-${n}`, r && `bg-${r}`, e);
    return C.jsx(o, { className: s, ...i, ref: a, children: t });
  }
);
HM.displayName = "MDBCardFooter";
const VM = ee.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const i = J("card-img-overlay", e);
    return C.jsx(n, { className: i, ...r, ref: o, children: t });
  }
);
VM.displayName = "MDBCardOverlay";
const KM = ee.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const i = J("card-group", e);
    return C.jsx(n, { className: i, ...r, ref: o, children: t });
  }
);
KM.displayName = "MDBCardGroup";
const GM = ee.forwardRef(
  (
    {
      className: e,
      tag: t = "ul",
      horizontal: n,
      horizontalSize: r,
      light: o,
      numbered: i,
      children: a,
      small: s,
      ...l
    },
    u
  ) => {
    const c = J(
      "list-group",
      n && (r ? `list-group-horizontal-${r}` : "list-group-horizontal"),
      o && "list-group-light",
      i && "list-group-numbered",
      s && "list-group-small",
      e
    );
    return C.jsx(t, { className: c, ref: u, ...l, children: a });
  }
);
GM.displayName = "MDBListGroup";
const YM = ee.forwardRef(
  (
    {
      className: e,
      tag: t = "li",
      active: n,
      disabled: r,
      action: o,
      color: i,
      children: a,
      noBorders: s,
      ...l
    },
    u
  ) => {
    const c = t === "button",
      d = J(
        "list-group-item",
        n && "active",
        r && !c && "disabled",
        o && "list-group-item-action",
        i && `list-group-item-${i}`,
        s && "border-0",
        e
      );
    return C.jsx(t, {
      className: d,
      disabled: c && r,
      ref: u,
      ...l,
      children: a,
    });
  }
);
YM.displayName = "MDBListGroupItem";
const XM = ({ children: e, containerRef: t, disablePortal: n }) => {
    const [r, o] = y.useState(!1);
    return (
      y.useEffect(() => {
        !n && o(!0);
      }, [n]),
      n
        ? C.jsx(C.Fragment, { children: e })
        : r
        ? yo.createPortal(
            C.jsx(C.Fragment, { children: e }),
            (t == null ? void 0 : t.current) || document.body
          )
        : null
    );
  },
  qM = ee.forwardRef(
    (
      {
        around: e,
        between: t,
        bottom: n,
        center: r,
        children: o,
        className: i,
        evenly: a,
        end: s,
        middle: l,
        start: u,
        tag: c = "div",
        top: d,
        ...f
      },
      h
    ) => {
      const p = J(
        "row",
        e && "justify-content-around",
        t && "justify-content-between",
        n && "align-self-end",
        r && "justify-content-center",
        a && "justifty-content-evenly",
        s && "justify-content-end",
        l && "align-self-center",
        u && "justify-content-start",
        d && "align-self-start",
        i
      );
      return C.jsx(c, { className: p, ...f, ref: h, children: o });
    }
  );
qM.displayName = "MDBRow";
const QM = ({
    animate: e,
    className: t,
    icon: n,
    fab: r,
    fas: o,
    fal: i,
    far: a,
    flag: s,
    spin: l,
    fixed: u,
    flip: c,
    list: d,
    size: f,
    pull: h,
    pulse: p,
    color: g,
    border: w,
    rotate: v,
    inverse: m,
    stack: x,
    iconType: S,
    children: E,
    ...b
  }) => {
    let k;
    s
      ? (k = "flag")
      : r
      ? (k = "fab")
      : o
      ? (k = "fas")
      : a
      ? (k = "far")
      : i
      ? (k = "fal")
      : (k = "fa");
    const R = J(
      S ? `fa-${S}` : k,
      e && `fa-${e}`,
      s ? `flag-${s}` : n && `fa-${n}`,
      f && `fa-${f}`,
      g && `text-${g}`,
      w && "fa-border",
      v && `fa-rotate-${v}`,
      h && `fa-pull-${h}`,
      l && !e && "fa-spin",
      d && "fa-li",
      u && "fa-fw",
      p && !e && "fa-pulse",
      m && "fa-inverse",
      c && `fa-flip-${c}`,
      x && `fa-stack-${x}`,
      t
    );
    return C.jsx("i", { className: R, ...b, children: E });
  },
  ZM = ee.forwardRef(
    (
      {
        className: e,
        children: t,
        tag: n = "p",
        variant: r,
        color: o,
        blockquote: i,
        note: a,
        noteColor: s,
        listUnStyled: l,
        listInLine: u,
        ...c
      },
      d
    ) => {
      const f = J(
        r && r,
        i && "blockquote",
        a && "note",
        o && `text-${o}`,
        s && `note-${s}`,
        l && "list-unstyled",
        u && "list-inline",
        e
      );
      return (
        i && (n = "blockquote"),
        (l || u) && (n = "ul"),
        C.jsx(n, { className: f, ref: d, ...c, children: t })
      );
    }
  );
ZM.displayName = "MDBTypography";
const JM = ee.forwardRef(
  ({ className: e, color: t, uppercase: n, bold: r, children: o, ...i }, a) => {
    const s = J(
      "breadcrumb",
      r && "font-weight-bold",
      t && `text-${t}`,
      n && "text-uppercase",
      e
    );
    return C.jsx("nav", {
      "aria-label": "breadcrumb",
      children: C.jsx("ol", { className: s, ref: a, ...i, children: o }),
    });
  }
);
JM.displayName = "MDBBreadcrumb";
const eT = ee.forwardRef(
  ({ className: e, active: t, current: n = "page", children: r, ...o }, i) => {
    const a = J("breadcrumb-item", t && "active", e);
    return C.jsx("li", {
      className: a,
      ref: i,
      "aria-current": t && n,
      ...o,
      children: r,
    });
  }
);
eT.displayName = "MDBBreadcrumbItem";
const tT = (e) => {
    if (e !== !1) return `navbar-expand-${e}`;
  },
  SS = ee.forwardRef(
    (
      {
        className: e,
        children: t,
        light: n,
        dark: r,
        scrolling: o,
        fixed: i,
        sticky: a,
        scrollingNavbarOffset: s,
        color: l,
        transparent: u,
        expand: c,
        tag: d = "nav",
        bgColor: f,
        ...h
      },
      p
    ) => {
      const [g, w] = y.useState(!1),
        v = J(
          {
            "navbar-light": n,
            "navbar-dark": r,
            "scrolling-navbar": o || s,
            "top-nav-collapse": g,
            [`text-${l}`]: l && u ? g : l,
          },
          i && `fixed-${i}`,
          a && "sticky-top",
          "navbar",
          c && tT(c),
          f && `bg-${f}`,
          e
        ),
        m = y.useCallback(() => {
          s && window.pageYOffset > s ? w(!0) : w(!1);
        }, [s]);
      return (
        y.useEffect(
          () => (
            (o || s) && window.addEventListener("scroll", m),
            () => {
              window.removeEventListener("scroll", m);
            }
          ),
          [m, o, s]
        ),
        C.jsx(d, {
          className: v,
          role: "navigation",
          ...h,
          ref: p,
          children: t,
        })
      );
    }
  );
SS.displayName = "MDBNavbar";
const CS = ee.forwardRef(
  (
    {
      children: e,
      className: t = "",
      disabled: n = !1,
      active: r = !1,
      tag: o = "a",
      ...i
    },
    a
  ) => {
    const s = J("nav-link", n ? "disabled" : r ? "active" : "", t);
    return C.jsx(o, {
      "data-test": "nav-link",
      className: s,
      style: { cursor: "pointer" },
      ref: a,
      ...i,
      children: e,
    });
  }
);
CS.displayName = "MDBNavbarLink";
const kS = ee.forwardRef(
  ({ className: e, children: t, tag: n = "a", ...r }, o) => {
    const i = J("navbar-brand", e);
    return C.jsx(n, { className: i, ref: o, ...r, children: t });
  }
);
kS.displayName = "MDBNavbarBrand";
const Rh = ee.forwardRef(
  (
    { children: e, className: t, active: n, text: r, tag: o = "li", ...i },
    a
  ) => {
    const s = J("nav-item", n && "active", r && "navbar-text", t);
    return C.jsx(o, { ...i, className: s, ref: a, children: e });
  }
);
Rh.displayName = "MDBNavbarItem";
const ES = ee.forwardRef(
  (
    {
      children: e,
      className: t,
      right: n,
      fullWidth: r = !0,
      left: o,
      tag: i = "ul",
      ...a
    },
    s
  ) => {
    const l = J("navbar-nav", r && "w-100", n && "ms-auto", o && "me-auto", t);
    return C.jsx(i, { className: l, ref: s, ...a, children: e });
  }
);
ES.displayName = "MDBNavbarNav";
const PS = ee.forwardRef(
  ({ children: e, className: t, tag: n = "button", ...r }, o) => {
    const i = J("navbar-toggler", t);
    return C.jsx(n, { ...r, className: i, ref: o, children: e });
  }
);
PS.displayName = "MDBNavbarToggler";
const nT = ee.forwardRef(
  ({ children: e, bgColor: t, color: n, className: r, ...o }, i) => {
    const a = J(t && `bg-${t}`, n && `text-${n}`, r);
    return C.jsx("footer", { className: a, ...o, ref: i, children: e });
  }
);
nT.displayName = "MDBFooter";
const rT = ee.forwardRef(
  (
    {
      children: e,
      size: t,
      circle: n,
      center: r,
      end: o,
      start: i,
      className: a,
      ...s
    },
    l
  ) => {
    const u = J(
      "pagination",
      r && "justify-content-center",
      n && "pagination-circle",
      o && "justify-content-end",
      t && `pagination-${t}`,
      i && "justify-content-start",
      a
    );
    return C.jsx("ul", { className: u, ...s, ref: l, children: e });
  }
);
rT.displayName = "MDBPagination";
const oT = ee.forwardRef(
  ({ children: e, className: t, tag: n = "a", ...r }, o) => {
    const i = J("page-link", t);
    return C.jsx(n, { className: i, ...r, ref: o, children: e });
  }
);
oT.displayName = "MDBPaginationLink";
const iT = ee.forwardRef(
  ({ children: e, className: t, active: n, disabled: r, ...o }, i) => {
    const a = J("page-item", n && "active", r && "disabled", t);
    return C.jsx("li", { className: a, ...o, ref: i, children: e });
  }
);
iT.displayName = "MDBPaginationItem";
const aT = ({
    className: e,
    classNameResponsive: t,
    responsive: n,
    align: r,
    borderColor: o,
    bordered: i,
    borderless: a,
    children: s,
    color: l,
    hover: u,
    small: c,
    striped: d,
    ...f
  }) => {
    const h = J(
        "table",
        r && `align-${r}`,
        o && `border-${o}`,
        i && "table-bordered",
        a && "table-borderless",
        l && `table-${l}`,
        u && "table-hover",
        c && "table-sm",
        d && "table-striped",
        e
      ),
      p = y.useMemo(
        () => C.jsx("table", { className: h, ...f, children: s }),
        [s, h, f]
      );
    if (n) {
      const g = J(
        typeof n == "string" ? `table-responsive-${n}` : "table-responsive",
        t
      );
      return C.jsx("div", { className: g, children: p });
    } else return p;
  },
  sT = ({ className: e, children: t, dark: n, light: r, ...o }) => {
    const i = J(n && "table-dark", r && "table-light", e);
    return C.jsx("thead", { className: i, ...o, children: t });
  },
  lT = ({ className: e, children: t, ...n }) => {
    const r = J(e);
    return C.jsx("tbody", { className: r, ...n, children: t });
  },
  RS = ee.forwardRef(
    (
      {
        animated: e,
        children: t,
        className: n,
        style: r,
        tag: o = "div",
        valuenow: i,
        valuemax: a,
        striped: s,
        bgColor: l,
        valuemin: u,
        width: c,
        ...d
      },
      f
    ) => {
      const h = J(
          "progress-bar",
          l && `bg-${l}`,
          s && "progress-bar-striped",
          e && "progress-bar-animated",
          n
        ),
        p = { width: `${c}%`, ...r };
      return C.jsx(o, {
        className: h,
        style: p,
        ref: f,
        role: "progressbar",
        ...d,
        "aria-valuenow": Number(c) ?? i,
        "aria-valuemin": Number(u),
        "aria-valuemax": Number(a),
        children: t,
      });
    }
  );
RS.displayName = "MDBProgressBar";
const uT = ee.forwardRef(
  (
    { className: e, children: t, tag: n = "div", height: r, style: o, ...i },
    a
  ) => {
    const s = J("progress", e),
      l = { height: `${r}px`, ...o };
    return C.jsx(n, {
      className: s,
      ref: a,
      style: l,
      ...i,
      children: ee.Children.map(t, (u) => {
        if (!ee.isValidElement(u) || u.type !== RS) {
          console.error("Progress component only allows ProgressBar as child");
          return;
        } else return u;
      }),
    });
  }
);
uT.displayName = "MDBProgress";
const cT = (e) => {
    const [t, n] = y.useState(!1),
      [r, o] = y.useState(null);
    return (
      y.useEffect(() => {
        o(
          () =>
            new IntersectionObserver(([i]) => {
              n(i.isIntersecting);
            })
        );
      }, []),
      y.useEffect(() => {
        if (!(!e.current || !r))
          return r.observe(e.current), () => r.disconnect();
      }, [r, e]),
      t
    );
  },
  dT = ee.forwardRef(
    (
      {
        className: e,
        size: t,
        contrast: n,
        value: r,
        defaultValue: o,
        id: i,
        labelClass: a,
        wrapperClass: s,
        wrapperStyle: l,
        wrapperTag: u = "div",
        label: c,
        onChange: d,
        children: f,
        labelRef: h,
        labelStyle: p,
        type: g,
        onBlur: w,
        readonly: v = !1,
        showCounter: m = !1,
        ...x
      },
      S
    ) => {
      var E;
      const [b, k] = y.useState(o),
        R = y.useMemo(() => (r !== void 0 ? r : b), [r, b]),
        [T, $] = y.useState(0),
        [M, L] = y.useState(!1),
        [_, N] = y.useState(0),
        A = y.useRef(null),
        D = cT(A),
        F = y.useRef(null),
        O = h || F;
      y.useImperativeHandle(S, () => A.current);
      const j = J("form-outline", n && "form-white", s),
        U = J(
          "form-control",
          M && "active",
          g === "date" && "active",
          t && `form-control-${t}`,
          e
        ),
        X = J("form-label", a),
        Y = y.useCallback(() => {
          var q;
          (q = O.current) != null &&
            q.clientWidth &&
            $(O.current.clientWidth * 0.8 + 8);
        }, [O]),
        ce = (q) => {
          k(q.target.value), m && N(q.target.value.length), d == null || d(q);
        },
        Q = y.useCallback(
          (q) => {
            A.current && (L(!!R), w && w(q));
          },
          [R, w]
        );
      return (
        y.useEffect(() => {
          Y();
        }, [(E = O.current) == null ? void 0 : E.clientWidth, Y, D]),
        y.useEffect(() => {
          if (R) return L(!0);
          L(!1);
        }, [R]),
        C.jsxs(u, {
          className: j,
          style: l,
          children: [
            C.jsx("input", {
              type: g,
              readOnly: v,
              className: U,
              onBlur: Q,
              onChange: ce,
              onFocus: Y,
              value: r,
              defaultValue: o,
              id: i,
              ref: A,
              ...x,
            }),
            c &&
              C.jsx("label", {
                className: X,
                style: p,
                htmlFor: i,
                ref: O,
                children: c,
              }),
            C.jsxs("div", {
              className: "form-notch",
              children: [
                C.jsx("div", { className: "form-notch-leading" }),
                C.jsx("div", {
                  className: "form-notch-middle",
                  style: { width: T },
                }),
                C.jsx("div", { className: "form-notch-trailing" }),
              ],
            }),
            f,
            m &&
              x.maxLength &&
              C.jsx("div", {
                className: "form-helper",
                children: C.jsx("div", {
                  className: "form-counter",
                  children: `${_}/${x.maxLength}`,
                }),
              }),
          ],
        })
      );
    }
  );
dT.displayName = "MDBInput";
const fT = y.forwardRef(
  (
    {
      className: e,
      inputRef: t,
      labelClass: n,
      wrapperClass: r,
      labelStyle: o,
      wrapperTag: i = "div",
      wrapperStyle: a,
      label: s,
      inline: l,
      btn: u,
      id: c,
      btnColor: d,
      disableWrapper: f,
      toggleSwitch: h,
      ...p
    },
    g
  ) => {
    let w = "form-check-input",
      v = "form-check-label";
    u &&
      ((w = "btn-check"), d ? (v = `btn btn-${d}`) : (v = "btn btn-primary"));
    const m = J(
        s && !u && "form-check",
        l && !u && "form-check-inline",
        h && "form-switch",
        r
      ),
      x = J(w, e),
      S = J(v, n),
      E = C.jsxs(C.Fragment, {
        children: [
          C.jsx("input", { className: x, id: c, ref: t, ...p }),
          s &&
            C.jsx("label", { className: S, style: o, htmlFor: c, children: s }),
        ],
      });
    return C.jsx(C.Fragment, {
      children: f
        ? E
        : C.jsx(i, { style: a, className: m, ref: g, children: E }),
    });
  }
);
fT.displayName = "InputTemplate";
const $S = ({
    className: e,
    children: t,
    open: n = !1,
    id: r,
    navbar: o,
    tag: i = "div",
    collapseRef: a,
    style: s,
    onOpen: l,
    onClose: u,
    ...c
  }) => {
    const [d, f] = y.useState(!1),
      [h, p] = y.useState(void 0),
      [g, w] = y.useState(!1),
      v = J(
        g ? "collapsing" : "collapse",
        !g && d && "show",
        o && "navbar-collapse",
        e
      ),
      m = y.useRef(null),
      x = a ?? m,
      S = y.useCallback(() => {
        d && p(void 0);
      }, [d]);
    return (
      y.useEffect(() => {
        var E;
        h === void 0 &&
          d &&
          p(
            (E = x == null ? void 0 : x.current) == null
              ? void 0
              : E.scrollHeight
          );
      }, [h, d, x]),
      y.useEffect(() => {
        d !== n && (n ? l == null || l() : u == null || u(), f(n)), d && w(!0);
        const E = setTimeout(() => {
          w(!1);
        }, 350);
        return () => {
          clearTimeout(E);
        };
      }, [n, d, l, u]),
      y.useEffect(() => {
        var E;
        p(
          d
            ? (E = x == null ? void 0 : x.current) == null
              ? void 0
              : E.scrollHeight
            : 0
        );
      }, [d, x, t]),
      y.useEffect(
        () => (
          window.addEventListener("resize", S),
          () => {
            window.removeEventListener("resize", S);
          }
        ),
        [S]
      ),
      C.jsx(i, {
        style: { height: h, ...s },
        id: r,
        className: v,
        ...c,
        ref: x,
        children: t,
      })
    );
  },
  MS = y.createContext(null),
  pT = ({
    children: e,
    isOpen: t = !1,
    options: n,
    animation: r = !0,
    dropup: o,
    dropright: i,
    dropleft: a,
    onClose: s,
    onOpen: l,
  }) => {
    const [u, c] = y.useState(t),
      [d, f] = y.useState(null),
      [h, p] = y.useState(null),
      [g, w] = y.useState(-1);
    return C.jsx(MS.Provider, {
      value: {
        animation: r,
        activeIndex: g,
        isOpenState: u,
        setReferenceElement: f,
        setPopperElement: p,
        setActiveIndex: w,
        popperElement: h,
        setIsOpenState: c,
        referenceElement: d,
        onClose: s,
        onOpen: l,
        dropup: o,
        options: n,
        dropright: i,
        dropleft: a,
      },
      children: e,
    });
  },
  hT = (e) => e instanceof HTMLElement,
  mT = (e) => e instanceof Node,
  Pa = () => {
    const e = y.useContext(MS);
    if (!e) throw new Error("Missing context data");
    return e;
  },
  gT = () => {
    const {
        isOpenState: e,
        setIsOpenState: t,
        setActiveIndex: n,
        popperElement: r,
        referenceElement: o,
        onClose: i,
      } = Pa(),
      a = y.useCallback(
        (s) => {
          e && (i == null || i(s)),
            !(
              !e ||
              !mT(s.target) ||
              (r && r.contains(s.target)) ||
              (o && o.contains(s.target)) ||
              s.defaultPrevented
            ) && (t(!1), setTimeout(() => n(-1), 300));
        },
        [e, t, n, r, o, i]
      );
    y.useEffect(
      () => (
        document.addEventListener("mousedown", a),
        () => document.removeEventListener("mousedown", a)
      ),
      [a]
    );
  },
  vT = ({
    className: e,
    tag: t = "div",
    group: n,
    children: r,
    dropup: o,
    dropright: i,
    dropleft: a,
    wrapper: s,
    ...l
  }) => {
    gT();
    const u = J(
      n ? "btn-group" : "dropdown",
      o && "dropup",
      i && "dropend",
      a && "dropstart",
      e
    );
    return s
      ? C.jsx(t, { className: u, ...l, children: r })
      : C.jsx(C.Fragment, { children: r });
  },
  yT = ({ animation: e, onClose: t, onOpen: n, wrapper: r = !0, ...o }) =>
    C.jsx(pT, {
      animation: e,
      onClose: t,
      onOpen: n,
      ...o,
      children: C.jsx(vT, { wrapper: r, ...o }),
    }),
  xT = ({
    childTag: e,
    children: t,
    disabled: n,
    link: r,
    divider: o,
    header: i,
    href: a = "#",
  }) => {
    const s = J("dropdown-item", n && "disabled");
    return r
      ? e
        ? C.jsx(e, { className: s, children: t })
        : C.jsx("a", { href: a, className: s, children: t })
      : o
      ? e
        ? C.jsx(e, { className: "dropdown-divider", children: t })
        : C.jsx("hr", { className: "dropdown-divider" })
      : i
      ? e
        ? C.jsx(e, { className: "dropdown-header", children: t })
        : C.jsx("h6", { className: "dropdown-header", children: t })
      : C.jsx(C.Fragment, { children: t });
  },
  Ya = ({
    onClick: e,
    tag: t = "li",
    childTag: n,
    children: r,
    style: o,
    link: i,
    divider: a,
    header: s,
    disabled: l,
    href: u,
    preventCloseOnClick: c,
    ...d
  }) => {
    const { setIsOpenState: f, onClose: h, setActiveIndex: p } = Pa();
    return C.jsx(t, {
      style: o,
      onClick: (g) => {
        h == null || h(g),
          e == null || e(g),
          !(l || c || g.defaultPrevented) &&
            (setTimeout(() => p(-1), 300), f(!1));
      },
      ...d,
      children: C.jsx(xT, {
        link: i,
        divider: a,
        header: s,
        disabled: l,
        href: u,
        childTag: n,
        children: r,
      }),
    });
  },
  fy = (e, t, n) =>
    n === "up"
      ? e <= 0
        ? t[t.length - 1].props.divider === !0 ||
          t[t.length - 1].props.disabled === !0
        : t[e - 1].props.divider === !0 || t[e - 1].props.disabled === !0
      : e === t.length - 1
      ? t[0].props.divider === !0 || t[0].props.disabled === !0
      : t[e + 1].props.divider === !0 || t[e + 1].props.disabled === !0,
  bT = (e) => {
    const {
        activeIndex: t,
        isOpenState: n,
        setIsOpenState: r,
        setActiveIndex: o,
        onClose: i,
      } = Pa(),
      a = y.useCallback(
        (s) => {
          const l = ["ArrowUp", "ArrowDown", "Tab", "Enter", "Escape"];
          if (!(!Array.isArray(e) || !l.includes(s.key))) {
            if (
              (hT(document.activeElement) && document.activeElement.blur(),
              s.key === "ArrowUp")
            ) {
              s.preventDefault();
              const u = fy(t, e, "up");
              if (t === 1) {
                o(u ? e.length - 1 : 0);
                return;
              }
              if (t <= 0) {
                o(u ? e.length - 2 : e.length - 1);
                return;
              }
              o((c) => (u ? c - 2 : c - 1));
            }
            if (s.key === "ArrowDown" || s.key === "Tab") {
              s.preventDefault();
              const u = fy(t, e, "down");
              if (t === e.length - 2) {
                o((c) => (u ? 0 : c + 1));
                return;
              }
              if (t === e.length - 1) {
                o(u ? 1 : 0);
                return;
              }
              o((c) => (u ? c + 2 : c + 1));
            }
            if (s.key === "Enter") {
              const u = document.querySelector('[data-active="true"]'),
                c = u == null ? void 0 : u.firstElementChild;
              if (c) return c.click();
              if ((i == null || i(s), s.defaultPrevented)) return;
              r(!1), setTimeout(() => o(-1), 300);
            }
            if (s.key === "Escape") {
              if ((i == null || i(s), s.defaultPrevented)) return;
              r(!1), setTimeout(() => o(-1), 300);
            }
          }
        },
        [e, r, o, t, i]
      );
    y.useEffect(
      () => (
        n && document.addEventListener("keydown", a),
        () => {
          n && document.removeEventListener("keydown", a);
        }
      ),
      [n, a]
    ),
      y.useEffect(() => {
        const s = document.querySelector('[data-active="true"]'),
          l = s == null ? void 0 : s.firstElementChild;
        return l == null || l.focus(), () => (l == null ? void 0 : l.blur());
      }, [t]);
  },
  wT = () => {
    const { isOpenState: e } = Pa(),
      [t, n] = y.useState(!1),
      [r, o] = y.useState(!1),
      [i, a] = y.useState(e);
    return (
      y.useEffect(() => {
        let s;
        return (
          e ||
            (o(!0),
            n(!1),
            (s = setTimeout(() => {
              o(!1), a(!1);
            }, 300))),
          e &&
            (n(!0),
            o(!1),
            a(!0),
            (s = setTimeout(() => {
              n(!1);
            }, 300))),
          () => clearTimeout(s)
        );
      }, [e]),
      { open: i, isFadeIn: t, isFadeOut: r }
    );
  },
  ST = ({
    className: e,
    tag: t = "ul",
    children: n,
    style: r,
    dark: o,
    responsive: i = "",
    appendToBody: a = !1,
    alwaysOpen: s,
    ...l
  }) => {
    const {
        activeIndex: u,
        setPopperElement: c,
        isOpenState: d,
        animation: f,
        referenceElement: h,
        popperElement: p,
        options: g,
        dropleft: w,
        dropup: v,
        dropright: m,
      } = Pa(),
      { open: x, isFadeIn: S, isFadeOut: E } = wT();
    bT(n);
    const b = () => {
        if (m) return "right-start";
        if (w) return "left-start";
        const $ =
          p &&
          getComputedStyle(p).getPropertyValue("--mdb-position").trim() ===
            "end";
        return v
          ? $
            ? "top-end"
            : "top-start"
          : $
          ? "bottom-end"
          : "bottom-start";
      },
      { styles: k } = lM(h, p, { placement: b(), modifiers: [NM], ...g }),
      R = J(
        "dropdown-menu",
        o && "dropdown-menu-dark",
        d && "show",
        f && "animation",
        S && "fade-in",
        E && "fade-out",
        i && `dropdown-menu-${i}`,
        e
      );
    if (!x && !s) return null;
    const T = C.jsx(t, {
      className: R,
      style: { position: "absolute", zIndex: 1e3, ...k.popper, ...r },
      ref: c,
      ...l,
      children: y.Children.map(n, ($, M) =>
        y.cloneElement($, {
          tabIndex: 0,
          "data-active": u === M && !0,
          className: J(u === M ? "active" : "", $.props.className),
        })
      ),
    });
    return C.jsx(XM, { disablePortal: !a, children: T });
  },
  CT = ({
    className: e,
    tag: t = wS,
    children: n,
    onClick: r,
    split: o,
    ...i
  }) => {
    const {
        setIsOpenState: a,
        setReferenceElement: s,
        isOpenState: l,
        setActiveIndex: u,
        onClose: c,
        onOpen: d,
      } = Pa(),
      f = J("dropdown-toggle", o && "dropdown-toggle-split", e);
    return C.jsx(t, {
      onClick: (h) => {
        r == null || r(h),
          l ? c == null || c(h) : d == null || d(h),
          !h.defaultPrevented && (a((p) => !p), setTimeout(() => u(-1), 300));
      },
      ref: s,
      className: f,
      "aria-expanded": !!l,
      ...i,
      children: n,
    });
  },
  kT = ee.forwardRef(
    (
      {
        className: e,
        centered: t,
        children: n,
        size: r,
        scrollable: o,
        tag: i = "div",
        ...a
      },
      s
    ) => {
      const l = J(
        "modal-dialog",
        o && "modal-dialog-scrollable",
        t && "modal-dialog-centered",
        r && `modal-${r}`,
        e
      );
      return C.jsx(i, { className: l, ...a, ref: s, children: n });
    }
  );
kT.displayName = "MDBModalDialog";
const ET = ee.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const i = J("modal-content", e);
    return C.jsx(n, { className: i, ...r, ref: o, children: t });
  }
);
ET.displayName = "MDBModalContent";
const PT = ee.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const i = J("modal-header", e);
    return C.jsx(n, { className: i, ...r, ref: o, children: t });
  }
);
PT.displayName = "MDBModalHeader";
const RT = ee.forwardRef(
  ({ className: e, children: t, tag: n = "h5", ...r }, o) => {
    const i = J("modal-title", e);
    return C.jsx(n, { className: i, ...r, ref: o, children: t });
  }
);
RT.displayName = "MDBModalTitle";
const $T = ee.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const i = J("modal-body", e);
    return C.jsx(n, { className: i, ...r, ref: o, children: t });
  }
);
$T.displayName = "MDBModalBody";
const MT = ee.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const i = J("modal-footer", e);
    return C.jsx(n, { className: i, ...r, ref: o, children: t });
  }
);
MT.displayName = "MDBModalFooter";
ee.createContext({ activeElement: null, setTargets: null });
const TT = y.forwardRef(
  (
    {
      className: e,
      labelClass: t,
      labelStyle: n,
      inputRef: r,
      size: o,
      label: i,
      id: a,
      ...s
    },
    l
  ) => {
    const u = J("form-control", `form-control-${o}`, e),
      c = J("form-label", t),
      d = y.useRef(null);
    return (
      y.useImperativeHandle(
        l,
        () => d.current || (r == null ? void 0 : r.current)
      ),
      C.jsxs(C.Fragment, {
        children: [
          i &&
            C.jsx("label", { className: c, style: n, htmlFor: a, children: i }),
          C.jsx("input", { className: u, type: "file", id: a, ref: d, ...s }),
        ],
      })
    );
  }
);
TT.displayName = "MDBFile";
const NT = ee.forwardRef(
  (
    {
      className: e,
      children: t,
      noBorder: n,
      textBefore: r,
      textAfter: o,
      noWrap: i,
      tag: a = "div",
      textTag: s = "span",
      textClass: l,
      size: u,
      textProps: c,
      ...d
    },
    f
  ) => {
    const h = J("input-group", i && "flex-nowrap", u && `input-group-${u}`, e),
      p = J("input-group-text", n && "border-0", l),
      g = (w) =>
        C.jsx(C.Fragment, {
          children:
            w && Array.isArray(w)
              ? w.map((v, m) =>
                  C.jsx(s, { className: p, ...c, children: v }, m)
                )
              : C.jsx(s, { className: p, ...c, children: w }),
        });
    return C.jsxs(a, {
      className: h,
      ref: f,
      ...d,
      children: [r && g(r), t, o && g(o)],
    });
  }
);
NT.displayName = "MDBInputGroup";
const OT = ee.forwardRef(
  (
    {
      className: e,
      children: t,
      isValidated: n = !1,
      onReset: r,
      onSubmit: o,
      noValidate: i = !0,
      ...a
    },
    s
  ) => {
    const [l, u] = y.useState(n),
      c = J("needs-validation", l && "was-validated", e),
      d = (h) => {
        h.preventDefault(), u(!0), o && o(h);
      },
      f = (h) => {
        h.preventDefault(), u(!1), r && r(h);
      };
    return (
      y.useEffect(() => {
        u(n);
      }, [n]),
      C.jsx("form", {
        className: c,
        onSubmit: d,
        onReset: f,
        ref: s,
        noValidate: i,
        ...a,
        children: t,
      })
    );
  }
);
OT.displayName = "MDBValidation";
const AT = ee.forwardRef(
  ({ className: e, fill: t, pills: n, justify: r, children: o, ...i }, a) => {
    const s = J(
      "nav",
      n ? "nav-pills" : "nav-tabs",
      t && "nav-fill",
      r && "nav-justified",
      e
    );
    return C.jsx("ul", { className: s, ref: a, ...i, children: o });
  }
);
AT.displayName = "MDBTabs";
const _T = ee.forwardRef(
  ({ className: e, children: t, style: n, tag: r = "li", ...o }, i) => {
    const a = J("nav-item", e);
    return C.jsx(r, {
      className: a,
      style: { cursor: "pointer", ...n },
      role: "presentation",
      ref: i,
      ...o,
      children: t,
    });
  }
);
_T.displayName = "MDBTabsItem";
const IT = ee.forwardRef(
  (
    {
      className: e,
      color: t,
      active: n,
      onOpen: r,
      onClose: o,
      children: i,
      ...a
    },
    s
  ) => {
    const l = J("nav-link", n && "active", t && `bg-${t}`, e);
    return (
      y.useEffect(() => {
        n ? r == null || r() : o == null || o();
      }, [n]),
      C.jsx("a", { className: l, ref: s, ...a, children: i })
    );
  }
);
IT.displayName = "MDBTabsLink";
const LT = ee.forwardRef(
  ({ className: e, tag: t = "div", children: n, ...r }, o) => {
    const i = J("tab-content", e);
    return C.jsx(t, { className: i, ref: o, ...r, children: n });
  }
);
LT.displayName = "MDBTabsContent";
const jT = ee.forwardRef(
  ({ className: e, tag: t = "div", open: n, children: r, ...o }, i) => {
    const [a, s] = y.useState(!1),
      l = J("tab-pane", "fade", a && "show", n && "active", e);
    return (
      y.useEffect(() => {
        let u;
        return (
          n
            ? (u = setTimeout(() => {
                s(!0);
              }, 100))
            : s(!1),
          () => {
            clearTimeout(u);
          }
        );
      }, [n]),
      C.jsx(t, { className: l, role: "tabpanel", ref: i, ...o, children: r })
    );
  }
);
jT.displayName = "MDBTabsPane";
y.createContext({ active: 0 });
const TS = ee.createContext({
    activeItem: 0,
    setActiveItem: null,
    alwaysOpen: !1,
    initialActive: 0,
  }),
  DT = ee.forwardRef(
    (
      {
        alwaysOpen: e,
        borderless: t,
        className: n,
        flush: r,
        active: o,
        initialActive: i = 0,
        tag: a = "div",
        children: s,
        onChange: l,
        ...u
      },
      c
    ) => {
      const d = y.useMemo(() => typeof o < "u", [o]),
        f = J(
          "accordion",
          r && "accordion-flush",
          t && "accordion-borderless",
          n
        ),
        [h, p] = y.useState(i);
      return C.jsx(a, {
        className: f,
        ref: c,
        ...u,
        children: C.jsx(TS.Provider, {
          value: {
            activeItem: d ? o : h,
            setActiveItem: p,
            alwaysOpen: e,
            initialActive: i,
            onChange: l,
          },
          children: s,
        }),
      });
    }
  );
DT.displayName = "MDBAccordion";
const FT = ee.forwardRef(
  (
    {
      className: e,
      bodyClassName: t,
      bodyStyle: n,
      headerClassName: r,
      collapseId: o,
      headerTitle: i,
      headerStyle: a,
      btnClassName: s,
      tag: l = "div",
      children: u,
      ...c
    },
    d
  ) => {
    const {
        activeItem: f,
        setActiveItem: h,
        alwaysOpen: p,
        onChange: g,
      } = y.useContext(TS),
      w = y.useMemo(() => (Array.isArray(f) ? f.includes(o) : f === o), [f, o]),
      v = J("accordion-item", e),
      m = J("accordion-header", r),
      x = J("accordion-body", t),
      S = J("accordion-button", !w && "collapsed", s),
      E = y.useCallback(
        (b) => {
          let k = b;
          Array.isArray(f)
            ? f.includes(b)
              ? (k = f.filter((R) => R !== b))
              : (k = p ? [...f, b] : [b])
            : ((k = f === b ? 0 : b), p && (k = [k])),
            g == null || g(k),
            h(k);
        },
        [g, f, h, p]
      );
    return C.jsxs(l, {
      className: v,
      ref: d,
      ...c,
      children: [
        C.jsx("h2", {
          className: m,
          style: a,
          children: C.jsx("button", {
            onClick: () => E(o),
            className: S,
            type: "button",
            children: i,
          }),
        }),
        C.jsx($S, {
          id: o.toString(),
          open: w,
          children: C.jsx("div", { className: x, style: n, children: u }),
        }),
      ],
    });
  }
);
FT.displayName = "MDBAccordionItem";
function zT() {
  const [e, t] = y.useState(!1);
  return C.jsx(SS, {
    expand: "lg",
    light: !0,
    bgColor: "light",
    children: C.jsxs(xS, {
      fluid: !0,
      children: [
        C.jsx(kS, { href: "#", children: "Libreria" }),
        C.jsx(PS, {
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          onClick: () => t(!e),
          children: C.jsx(QM, { icon: "bars", fas: !0 }),
        }),
        C.jsx($S, {
          navbar: !0,
          open: e,
          children: C.jsxs(ES, {
            className: "mr-auto mb-2 mb-lg-0",
            children: [
              C.jsx(Rh, {
                children: C.jsx(di, {
                  to: "/",
                  children: C.jsx(CS, {
                    active: !0,
                    "aria-current": "page",
                    href: "#",
                    children: "Home",
                  }),
                }),
              }),
              C.jsx(Rh, {
                children: C.jsxs(yT, {
                  children: [
                    C.jsx(CT, {
                      tag: "a",
                      className: "nav-link",
                      role: "button",
                      children: "Libro",
                    }),
                    C.jsxs(ST, {
                      children: [
                        C.jsx(di, {
                          to: "/altalibro",
                          children: C.jsx(Ya, { link: !0, children: "Alta" }),
                        }),
                        C.jsx(di, {
                          to: "/actualizarlibro",
                          children: C.jsx(Ya, {
                            link: !0,
                            children: "Actualizar",
                          }),
                        }),
                        C.jsx(di, {
                          to: "/listadolibro",
                          children: C.jsx(Ya, {
                            link: !0,
                            children: "Listado",
                          }),
                        }),
                        C.jsx(di, {
                          to: "/eliminarlibro",
                          children: C.jsx(Ya, {
                            link: !0,
                            children: "Eliminar",
                          }),
                        }),
                        C.jsx(di, {
                          to: "/graficasautores",
                          children: C.jsx(Ya, {
                            link: !0,
                            children: "Graficas",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function BT() {
  return C.jsxs(C.Fragment, {
    children: [C.jsx(zT, {}), C.jsx("div", { children: C.jsx($R, {}) })],
  });
}
function ie(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function P() {
  return (
    (P = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    P.apply(this, arguments)
  );
}
function NS(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = NS(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ve() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = NS(e)) && (r && (r += " "), (r += t));
  return r;
}
function Xr(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function OS(e) {
  if (!Xr(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = OS(e[n]);
    }),
    t
  );
}
function Tn(e, t, n = { clone: !0 }) {
  const r = n.clone ? P({}, e) : e;
  return (
    Xr(e) &&
      Xr(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (Xr(t[o]) && o in e && Xr(e[o])
            ? (r[o] = Tn(e[o], t[o], n))
            : n.clone
            ? (r[o] = Xr(t[o]) ? OS(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function po(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function $e(e) {
  if (typeof e != "string") throw new Error(po(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function py(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function AS(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function np(e, t) {
  var n, r;
  return (
    y.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
          (r = r._payload) == null ||
          (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  );
}
function Wt(e) {
  return (e && e.ownerDocument) || document;
}
function ho(e) {
  return Wt(e).defaultView || window;
}
function $h(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const fn = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
let hy = 0;
function UT(e) {
  const [t, n] = y.useState(e),
    r = e || t;
  return (
    y.useEffect(() => {
      t == null && ((hy += 1), n(`mui-${hy}`));
    }, [t]),
    r
  );
}
const my = Xu.useId;
function dg(e) {
  if (my !== void 0) {
    const t = my();
    return e ?? t;
  }
  return UT(e);
}
function gy({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = y.useRef(e !== void 0),
    [i, a] = y.useState(t),
    s = o ? e : i,
    l = y.useCallback((u) => {
      o || a(u);
    }, []);
  return [s, l];
}
function Li(e) {
  const t = y.useRef(e);
  return (
    fn(() => {
      t.current = e;
    }),
    y.useRef((...n) => (0, t.current)(...n)).current
  );
}
function Ct(...e) {
  return y.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              $h(n, t);
            });
          },
    e
  );
}
const vy = {};
function WT(e, t) {
  const n = y.useRef(vy);
  return n.current === vy && (n.current = e(t)), n;
}
const HT = [];
function VT(e) {
  y.useEffect(e, HT);
}
class xd {
  constructor() {
    (this.currentId = 0),
      (this.clear = () => {
        this.currentId !== 0 &&
          (clearTimeout(this.currentId), (this.currentId = 0));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new xd();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = 0), n();
      }, t));
  }
}
function _S() {
  const e = WT(xd.create).current;
  return VT(e.disposeEffect), e;
}
let bd = !0,
  Mh = !1;
const KT = new xd(),
  GT = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function YT(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && GT[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function XT(e) {
  e.metaKey || e.altKey || e.ctrlKey || (bd = !0);
}
function rp() {
  bd = !1;
}
function qT() {
  this.visibilityState === "hidden" && Mh && (bd = !0);
}
function QT(e) {
  e.addEventListener("keydown", XT, !0),
    e.addEventListener("mousedown", rp, !0),
    e.addEventListener("pointerdown", rp, !0),
    e.addEventListener("touchstart", rp, !0),
    e.addEventListener("visibilitychange", qT, !0);
}
function ZT(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return bd || YT(t);
}
function JT() {
  const e = y.useCallback((o) => {
      o != null && QT(o.ownerDocument);
    }, []),
    t = y.useRef(!1);
  function n() {
    return t.current
      ? ((Mh = !0),
        KT.start(100, () => {
          Mh = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return ZT(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function IS(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function fg(e, t) {
  const n = P({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = P({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = P({}, i)),
              Object.keys(o).forEach((a) => {
                n[r][a] = fg(o[a], i[a]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function Ie(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, a) => {
          if (a) {
            const s = t(a);
            s !== "" && i.push(s), n && n[a] && i.push(n[a]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const yy = (e) => e,
  eN = () => {
    let e = yy;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = yy;
      },
    };
  },
  tN = eN(),
  pg = tN,
  LS = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function Le(e, t, n = "Mui") {
  const r = LS[t];
  return r ? `${n}-${r}` : `${pg.generate(e)}-${t}`;
}
function Me(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = Le(e, o, n);
    }),
    r
  );
}
function nN(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function jS(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var rN =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  oN = jS(function (e) {
    return (
      rN.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function iN(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function aN(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var sN = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(aN(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = iN(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  _t = "-ms-",
  Cc = "-moz-",
  Ae = "-webkit-",
  DS = "comm",
  hg = "rule",
  mg = "decl",
  lN = "@import",
  FS = "@keyframes",
  uN = "@layer",
  cN = Math.abs,
  wd = String.fromCharCode,
  dN = Object.assign;
function fN(e, t) {
  return Mt(e, 0) ^ 45
    ? (((((((t << 2) ^ Mt(e, 0)) << 2) ^ Mt(e, 1)) << 2) ^ Mt(e, 2)) << 2) ^
        Mt(e, 3)
    : 0;
}
function zS(e) {
  return e.trim();
}
function pN(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _e(e, t, n) {
  return e.replace(t, n);
}
function Th(e, t) {
  return e.indexOf(t);
}
function Mt(e, t) {
  return e.charCodeAt(t) | 0;
}
function al(e, t, n) {
  return e.slice(t, n);
}
function nr(e) {
  return e.length;
}
function gg(e) {
  return e.length;
}
function pu(e, t) {
  return t.push(e), e;
}
function hN(e, t) {
  return e.map(t).join("");
}
var Sd = 1,
  ca = 1,
  BS = 0,
  rn = 0,
  ft = 0,
  Ra = "";
function Cd(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Sd,
    column: ca,
    length: a,
    return: "",
  };
}
function Xa(e, t) {
  return dN(Cd("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function mN() {
  return ft;
}
function gN() {
  return (
    (ft = rn > 0 ? Mt(Ra, --rn) : 0), ca--, ft === 10 && ((ca = 1), Sd--), ft
  );
}
function un() {
  return (
    (ft = rn < BS ? Mt(Ra, rn++) : 0), ca++, ft === 10 && ((ca = 1), Sd++), ft
  );
}
function cr() {
  return Mt(Ra, rn);
}
function Uu() {
  return rn;
}
function Dl(e, t) {
  return al(Ra, e, t);
}
function sl(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function US(e) {
  return (Sd = ca = 1), (BS = nr((Ra = e))), (rn = 0), [];
}
function WS(e) {
  return (Ra = ""), e;
}
function Wu(e) {
  return zS(Dl(rn - 1, Nh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function vN(e) {
  for (; (ft = cr()) && ft < 33; ) un();
  return sl(e) > 2 || sl(ft) > 3 ? "" : " ";
}
function yN(e, t) {
  for (
    ;
    --t &&
    un() &&
    !(ft < 48 || ft > 102 || (ft > 57 && ft < 65) || (ft > 70 && ft < 97));

  );
  return Dl(e, Uu() + (t < 6 && cr() == 32 && un() == 32));
}
function Nh(e) {
  for (; un(); )
    switch (ft) {
      case e:
        return rn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nh(ft);
        break;
      case 40:
        e === 41 && Nh(e);
        break;
      case 92:
        un();
        break;
    }
  return rn;
}
function xN(e, t) {
  for (; un() && e + ft !== 57; ) if (e + ft === 84 && cr() === 47) break;
  return "/*" + Dl(t, rn - 1) + "*" + wd(e === 47 ? e : un());
}
function bN(e) {
  for (; !sl(cr()); ) un();
  return Dl(e, rn);
}
function wN(e) {
  return WS(Hu("", null, null, null, [""], (e = US(e)), 0, [0], e));
}
function Hu(e, t, n, r, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      h = 0,
      p = 0,
      g = 1,
      w = 1,
      v = 1,
      m = 0,
      x = "",
      S = o,
      E = i,
      b = r,
      k = x;
    w;

  )
    switch (((p = m), (m = un()))) {
      case 40:
        if (p != 108 && Mt(k, d - 1) == 58) {
          Th((k += _e(Wu(m), "&", "&\f")), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Wu(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += vN(p);
        break;
      case 92:
        k += yN(Uu() - 1, 7);
        continue;
      case 47:
        switch (cr()) {
          case 42:
          case 47:
            pu(SN(xN(un(), Uu()), t, n), l);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * g:
        s[u++] = nr(k) * v;
      case 125 * g:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            v == -1 && (k = _e(k, /\f/g, "")),
              h > 0 &&
                nr(k) - d &&
                pu(
                  h > 32
                    ? by(k + ";", r, n, d - 1)
                    : by(_e(k, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (pu((b = xy(k, t, n, u, c, o, s, x, (S = []), (E = []), d)), i),
              m === 123)
            )
              if (c === 0) Hu(k, t, b, b, S, i, d, s, E);
              else
                switch (f === 99 && Mt(k, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Hu(
                      e,
                      b,
                      b,
                      r && pu(xy(e, b, b, 0, 0, o, s, x, o, (S = []), d), E),
                      o,
                      E,
                      d,
                      s,
                      r ? S : E
                    );
                    break;
                  default:
                    Hu(k, b, b, b, [""], E, 0, s, E);
                }
        }
        (u = c = h = 0), (g = v = 1), (x = k = ""), (d = a);
        break;
      case 58:
        (d = 1 + nr(k)), (h = p);
      default:
        if (g < 1) {
          if (m == 123) --g;
          else if (m == 125 && g++ == 0 && gN() == 125) continue;
        }
        switch (((k += wd(m)), m * g)) {
          case 38:
            v = c > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (s[u++] = (nr(k) - 1) * v), (v = 1);
            break;
          case 64:
            cr() === 45 && (k += Wu(un())),
              (f = cr()),
              (c = d = nr((x = k += bN(Uu())))),
              m++;
            break;
          case 45:
            p === 45 && nr(k) == 2 && (g = 0);
        }
    }
  return i;
}
function xy(e, t, n, r, o, i, a, s, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], h = gg(f), p = 0, g = 0, w = 0;
    p < r;
    ++p
  )
    for (var v = 0, m = al(e, d + 1, (d = cN((g = a[p])))), x = e; v < h; ++v)
      (x = zS(g > 0 ? f[v] + " " + m : _e(m, /&\f/g, f[v]))) && (l[w++] = x);
  return Cd(e, t, n, o === 0 ? hg : s, l, u, c);
}
function SN(e, t, n) {
  return Cd(e, t, n, DS, wd(mN()), al(e, 2, -2), 0);
}
function by(e, t, n, r) {
  return Cd(e, t, n, mg, al(e, 0, r), al(e, r + 1, -1), r);
}
function Hi(e, t) {
  for (var n = "", r = gg(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function CN(e, t, n, r) {
  switch (e.type) {
    case uN:
      if (e.children.length) break;
    case lN:
    case mg:
      return (e.return = e.return || e.value);
    case DS:
      return "";
    case FS:
      return (e.return = e.value + "{" + Hi(e.children, r) + "}");
    case hg:
      e.value = e.props.join(",");
  }
  return nr((n = Hi(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function kN(e) {
  var t = gg(e);
  return function (n, r, o, i) {
    for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
    return a;
  };
}
function EN(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var PN = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = cr()), o === 38 && i === 12 && (n[r] = 1), !sl(i);

    )
      un();
    return Dl(t, rn);
  },
  RN = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (sl(o)) {
        case 0:
          o === 38 && cr() === 12 && (n[r] = 1), (t[r] += PN(rn - 1, n, r));
          break;
        case 2:
          t[r] += Wu(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = cr() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += wd(o);
      }
    while ((o = un()));
    return t;
  },
  $N = function (t, n) {
    return WS(RN(US(t), n));
  },
  wy = new WeakMap(),
  MN = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !wy.get(r)) &&
        !o
      ) {
        wy.set(t, !0);
        for (
          var i = [], a = $N(n, i), s = r.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
      }
    }
  },
  TN = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function HS(e, t) {
  switch (fN(e, t)) {
    case 5103:
      return Ae + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ae + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ae + e + Cc + e + _t + e + e;
    case 6828:
    case 4268:
      return Ae + e + _t + e + e;
    case 6165:
      return Ae + e + _t + "flex-" + e + e;
    case 5187:
      return (
        Ae + e + _e(e, /(\w+).+(:[^]+)/, Ae + "box-$1$2" + _t + "flex-$1$2") + e
      );
    case 5443:
      return Ae + e + _t + "flex-item-" + _e(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Ae +
        e +
        _t +
        "flex-line-pack" +
        _e(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Ae + e + _t + _e(e, "shrink", "negative") + e;
    case 5292:
      return Ae + e + _t + _e(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Ae +
        "box-" +
        _e(e, "-grow", "") +
        Ae +
        e +
        _t +
        _e(e, "grow", "positive") +
        e
      );
    case 4554:
      return Ae + _e(e, /([^-])(transform)/g, "$1" + Ae + "$2") + e;
    case 6187:
      return (
        _e(
          _e(_e(e, /(zoom-|grab)/, Ae + "$1"), /(image-set)/, Ae + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return _e(e, /(image-set\([^]*)/, Ae + "$1$`$1");
    case 4968:
      return (
        _e(
          _e(e, /(.+:)(flex-)?(.*)/, Ae + "box-pack:$3" + _t + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Ae +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _e(e, /(.+)-inline(.+)/, Ae + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (nr(e) - 1 - t > 6)
        switch (Mt(e, t + 1)) {
          case 109:
            if (Mt(e, t + 4) !== 45) break;
          case 102:
            return (
              _e(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Ae +
                  "$2-$3$1" +
                  Cc +
                  (Mt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Th(e, "stretch")
              ? HS(_e(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Mt(e, t + 1) !== 115) break;
    case 6444:
      switch (Mt(e, nr(e) - 3 - (~Th(e, "!important") && 10))) {
        case 107:
          return _e(e, ":", ":" + Ae) + e;
        case 101:
          return (
            _e(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Ae +
                (Mt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Ae +
                "$2$3$1" +
                _t +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Mt(e, t + 11)) {
        case 114:
          return Ae + e + _t + _e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ae + e + _t + _e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ae + e + _t + _e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ae + e + _t + e + e;
  }
  return e;
}
var NN = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case mg:
          t.return = HS(t.value, t.length);
          break;
        case FS:
          return Hi([Xa(t, { value: _e(t.value, "@", "@" + Ae) })], o);
        case hg:
          if (t.length)
            return hN(t.props, function (i) {
              switch (pN(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Hi(
                    [Xa(t, { props: [_e(i, /:(read-\w+)/, ":" + Cc + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Hi(
                    [
                      Xa(t, {
                        props: [_e(i, /:(plac\w+)/, ":" + Ae + "input-$1")],
                      }),
                      Xa(t, { props: [_e(i, /:(plac\w+)/, ":" + Cc + "$1")] }),
                      Xa(t, { props: [_e(i, /:(plac\w+)/, _t + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  ON = [NN],
  AN = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var w = g.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || ON,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var w = g.getAttribute("data-emotion").split(" "), v = 1;
            v < w.length;
            v++
          )
            i[w[v]] = !0;
          s.push(g);
        }
      );
    var l,
      u = [MN, TN];
    {
      var c,
        d = [
          CN,
          EN(function (g) {
            c.insert(g);
          }),
        ],
        f = kN(u.concat(o, d)),
        h = function (w) {
          return Hi(wN(w), f);
        };
      l = function (w, v, m, x) {
        (c = m),
          h(w ? w + "{" + v.styles + "}" : v.styles),
          x && (p.inserted[v.name] = !0);
      };
    }
    var p = {
      key: n,
      sheet: new sN({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return p.sheet.hydrate(s), p;
  },
  VS = { exports: {} },
  Fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kt = typeof Symbol == "function" && Symbol.for,
  vg = kt ? Symbol.for("react.element") : 60103,
  yg = kt ? Symbol.for("react.portal") : 60106,
  kd = kt ? Symbol.for("react.fragment") : 60107,
  Ed = kt ? Symbol.for("react.strict_mode") : 60108,
  Pd = kt ? Symbol.for("react.profiler") : 60114,
  Rd = kt ? Symbol.for("react.provider") : 60109,
  $d = kt ? Symbol.for("react.context") : 60110,
  xg = kt ? Symbol.for("react.async_mode") : 60111,
  Md = kt ? Symbol.for("react.concurrent_mode") : 60111,
  Td = kt ? Symbol.for("react.forward_ref") : 60112,
  Nd = kt ? Symbol.for("react.suspense") : 60113,
  _N = kt ? Symbol.for("react.suspense_list") : 60120,
  Od = kt ? Symbol.for("react.memo") : 60115,
  Ad = kt ? Symbol.for("react.lazy") : 60116,
  IN = kt ? Symbol.for("react.block") : 60121,
  LN = kt ? Symbol.for("react.fundamental") : 60117,
  jN = kt ? Symbol.for("react.responder") : 60118,
  DN = kt ? Symbol.for("react.scope") : 60119;
function mn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case vg:
        switch (((e = e.type), e)) {
          case xg:
          case Md:
          case kd:
          case Pd:
          case Ed:
          case Nd:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case $d:
              case Td:
              case Ad:
              case Od:
              case Rd:
                return e;
              default:
                return t;
            }
        }
      case yg:
        return t;
    }
  }
}
function KS(e) {
  return mn(e) === Md;
}
Fe.AsyncMode = xg;
Fe.ConcurrentMode = Md;
Fe.ContextConsumer = $d;
Fe.ContextProvider = Rd;
Fe.Element = vg;
Fe.ForwardRef = Td;
Fe.Fragment = kd;
Fe.Lazy = Ad;
Fe.Memo = Od;
Fe.Portal = yg;
Fe.Profiler = Pd;
Fe.StrictMode = Ed;
Fe.Suspense = Nd;
Fe.isAsyncMode = function (e) {
  return KS(e) || mn(e) === xg;
};
Fe.isConcurrentMode = KS;
Fe.isContextConsumer = function (e) {
  return mn(e) === $d;
};
Fe.isContextProvider = function (e) {
  return mn(e) === Rd;
};
Fe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === vg;
};
Fe.isForwardRef = function (e) {
  return mn(e) === Td;
};
Fe.isFragment = function (e) {
  return mn(e) === kd;
};
Fe.isLazy = function (e) {
  return mn(e) === Ad;
};
Fe.isMemo = function (e) {
  return mn(e) === Od;
};
Fe.isPortal = function (e) {
  return mn(e) === yg;
};
Fe.isProfiler = function (e) {
  return mn(e) === Pd;
};
Fe.isStrictMode = function (e) {
  return mn(e) === Ed;
};
Fe.isSuspense = function (e) {
  return mn(e) === Nd;
};
Fe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === kd ||
    e === Md ||
    e === Pd ||
    e === Ed ||
    e === Nd ||
    e === _N ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ad ||
        e.$$typeof === Od ||
        e.$$typeof === Rd ||
        e.$$typeof === $d ||
        e.$$typeof === Td ||
        e.$$typeof === LN ||
        e.$$typeof === jN ||
        e.$$typeof === DN ||
        e.$$typeof === IN))
  );
};
Fe.typeOf = mn;
VS.exports = Fe;
var FN = VS.exports,
  GS = FN,
  zN = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  BN = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  YS = {};
YS[GS.ForwardRef] = zN;
YS[GS.Memo] = BN;
var UN = !0;
function WN(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var XS = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || UN === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  qS = function (t, n, r) {
    XS(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function HN(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var VN = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  KN = /[A-Z]|^ms/g,
  GN = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  QS = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Sy = function (t) {
    return t != null && typeof t != "boolean";
  },
  op = jS(function (e) {
    return QS(e) ? e : e.replace(KN, "-$&").toLowerCase();
  }),
  Cy = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(GN, function (r, o, i) {
            return (rr = { name: o, styles: i, next: rr }), o;
          });
    }
    return VN[t] !== 1 && !QS(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function ll(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (rr = { name: n.name, styles: n.styles, next: rr }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (rr = { name: r.name, styles: r.styles, next: rr }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return YN(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = rr,
          a = n(e);
        return (rr = i), ll(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function YN(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += ll(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : Sy(a) && (r += op(i) + ":" + Cy(i, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          Sy(a[s]) && (r += op(i) + ":" + Cy(i, a[s]) + ";");
      else {
        var l = ll(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += op(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var ky = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  rr,
  bg = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    rr = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += ll(r, n, a)))
      : (i += a[0]);
    for (var s = 1; s < t.length; s++) (i += ll(r, n, t[s])), o && (i += a[s]);
    ky.lastIndex = 0;
    for (var l = "", u; (u = ky.exec(i)) !== null; ) l += "-" + u[1];
    var c = HN(i) + l;
    return { name: c, styles: i, next: rr };
  },
  XN = function (t) {
    return t();
  },
  ZS = Xu.useInsertionEffect ? Xu.useInsertionEffect : !1,
  qN = ZS || XN,
  Ey = ZS || y.useLayoutEffect,
  JS = y.createContext(typeof HTMLElement < "u" ? AN({ key: "css" }) : null);
JS.Provider;
var eC = function (t) {
    return y.forwardRef(function (n, r) {
      var o = y.useContext(JS);
      return t(n, o, r);
    });
  },
  wg = y.createContext({}),
  QN = eC(function (e, t) {
    var n = e.styles,
      r = bg([n], void 0, y.useContext(wg)),
      o = y.useRef();
    return (
      Ey(
        function () {
          var i = t.key + "-global",
            a = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            l !== null &&
              ((s = !0), l.setAttribute("data-emotion", i), a.hydrate([l])),
            (o.current = [a, s]),
            function () {
              a.flush();
            }
          );
        },
        [t]
      ),
      Ey(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1];
          if (s) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && qS(t, r.next, !0), a.tags.length)) {
            var l = a.tags[a.tags.length - 1].nextElementSibling;
            (a.before = l), a.flush();
          }
          t.insert("", r, a, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function ZN() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return bg(t);
}
var Sg = function () {
    var t = ZN.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  JN = oN,
  eO = function (t) {
    return t !== "theme";
  },
  Py = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? JN : eO;
  },
  Ry = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  tO = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      XS(n, r, o),
      qN(function () {
        return qS(n, r, o);
      }),
      null
    );
  },
  nO = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var s = Ry(t, n, r),
      l = s || Py(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, h = 1; h < f; h++) d.push(c[h], c[0][h]);
      }
      var p = eC(function (g, w, v) {
        var m = (u && g.as) || o,
          x = "",
          S = [],
          E = g;
        if (g.theme == null) {
          E = {};
          for (var b in g) E[b] = g[b];
          E.theme = y.useContext(wg);
        }
        typeof g.className == "string"
          ? (x = WN(w.registered, S, g.className))
          : g.className != null && (x = g.className + " ");
        var k = bg(d.concat(S), w.registered, E);
        (x += w.key + "-" + k.name), a !== void 0 && (x += " " + a);
        var R = u && s === void 0 ? Py(m) : l,
          T = {};
        for (var $ in g) (u && $ === "as") || (R($) && (T[$] = g[$]));
        return (
          (T.className = x),
          (T.ref = v),
          y.createElement(
            y.Fragment,
            null,
            y.createElement(tO, {
              cache: w,
              serialized: k,
              isStringTag: typeof m == "string",
            }),
            y.createElement(m, T)
          )
        );
      });
      return (
        (p.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (p.defaultProps = t.defaultProps),
        (p.__emotion_real = p),
        (p.__emotion_base = o),
        (p.__emotion_styles = d),
        (p.__emotion_forwardProp = s),
        Object.defineProperty(p, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (p.withComponent = function (g, w) {
          return e(g, P({}, n, w, { shouldForwardProp: Ry(p, w, !0) })).apply(
            void 0,
            d
          );
        }),
        p
      );
    };
  },
  rO = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Oh = nO.bind();
rO.forEach(function (e) {
  Oh[e] = Oh(e);
});
function oO(e) {
  return e == null || Object.keys(e).length === 0;
}
function iO(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(oO(o) ? n : o) : t;
  return C.jsx(QN, { styles: r });
}
function tC(e, t) {
  return Oh(e, t);
}
const aO = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  sO = ["values", "unit", "step"],
  lO = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => P({}, n, { [r.key]: r.val }), {})
    );
  };
function uO(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = ie(e, sO),
    i = lO(t),
    a = Object.keys(i);
  function s(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${
      (typeof t[f] == "number" ? t[f] : f) - r / 100
    }${n})`;
  }
  function u(f, h) {
    const p = a.indexOf(h);
    return `@media (min-width:${
      typeof t[f] == "number" ? t[f] : f
    }${n}) and (max-width:${
      (p !== -1 && typeof t[a[p]] == "number" ? t[a[p]] : h) - r / 100
    }${n})`;
  }
  function c(f) {
    return a.indexOf(f) + 1 < a.length ? u(f, a[a.indexOf(f) + 1]) : s(f);
  }
  function d(f) {
    const h = a.indexOf(f);
    return h === 0
      ? s(a[1])
      : h === a.length - 1
      ? l(a[h])
      : u(f, a[a.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return P(
    {
      keys: a,
      values: i,
      up: s,
      down: l,
      between: u,
      only: c,
      not: d,
      unit: n,
    },
    o
  );
}
const cO = { borderRadius: 4 },
  dO = cO;
function $s(e, t) {
  return t ? Tn(e, t, { clone: !1 }) : e;
}
const Cg = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  $y = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Cg[e]}px)`,
  };
function In(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || $y;
    return t.reduce((a, s, l) => ((a[i.up(i.keys[l])] = n(t[l])), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || $y;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || Cg).indexOf(s) !== -1) {
        const l = i.up(s);
        a[l] = n(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return n(t);
}
function fO(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function pO(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function hO(e, t) {
  if (typeof e != "object") return {};
  const n = {},
    r = Object.keys(t);
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0);
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0);
        }),
    n
  );
}
function _d({ values: e, breakpoints: t, base: n }) {
  const r = n || hO(e, t),
    o = Object.keys(r);
  if (o.length === 0) return e;
  let i;
  return o.reduce(
    (a, s, l) => (
      Array.isArray(e)
        ? ((a[s] = e[l] != null ? e[l] : e[i]), (i = l))
        : typeof e == "object"
        ? ((a[s] = e[s] != null ? e[s] : e[i]), (i = s))
        : (a[s] = e),
      a
    ),
    {}
  );
}
function Id(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function kc(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Id(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function dt(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (a) => {
      if (a[t] == null) return null;
      const s = a[t],
        l = a.theme,
        u = Id(l, r) || {};
      return In(a, s, (d) => {
        let f = kc(u, o, d);
        return (
          d === f &&
            typeof d == "string" &&
            (f = kc(u, o, `${t}${d === "default" ? "" : $e(d)}`, d)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function mO(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const gO = { m: "margin", p: "padding" },
  vO = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  My = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  yO = mO((e) => {
    if (e.length > 2)
      if (My[e]) e = My[e];
      else return [e];
    const [t, n] = e.split(""),
      r = gO[t],
      o = vO[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  kg = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Eg = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...kg, ...Eg];
function Fl(e, t, n, r) {
  var o;
  const i = (o = Id(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (a) => (typeof a == "string" ? a : i * a)
    : Array.isArray(i)
    ? (a) => (typeof a == "string" ? a : i[a])
    : typeof i == "function"
    ? i
    : () => {};
}
function nC(e) {
  return Fl(e, "spacing", 8);
}
function zl(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function xO(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = zl(t, n)), r), {});
}
function bO(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = yO(n),
    i = xO(o, r),
    a = e[n];
  return In(e, a, i);
}
function rC(e, t) {
  const n = nC(e.theme);
  return Object.keys(e)
    .map((r) => bO(e, t, r, n))
    .reduce($s, {});
}
function rt(e) {
  return rC(e, kg);
}
rt.propTypes = {};
rt.filterProps = kg;
function ot(e) {
  return rC(e, Eg);
}
ot.propTypes = {};
ot.filterProps = Eg;
function wO(e = 8) {
  if (e.mui) return e;
  const t = nC({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const a = t(i);
          return typeof a == "number" ? `${a}px` : a;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function Ld(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? $s(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function Sn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function jn(e, t) {
  return dt({ prop: e, themeKey: "borders", transform: t });
}
const SO = jn("border", Sn),
  CO = jn("borderTop", Sn),
  kO = jn("borderRight", Sn),
  EO = jn("borderBottom", Sn),
  PO = jn("borderLeft", Sn),
  RO = jn("borderColor"),
  $O = jn("borderTopColor"),
  MO = jn("borderRightColor"),
  TO = jn("borderBottomColor"),
  NO = jn("borderLeftColor"),
  OO = jn("outline", Sn),
  AO = jn("outlineColor"),
  jd = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Fl(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: zl(t, r) });
      return In(e, e.borderRadius, n);
    }
    return null;
  };
jd.propTypes = {};
jd.filterProps = ["borderRadius"];
Ld(SO, CO, kO, EO, PO, RO, $O, MO, TO, NO, jd, OO, AO);
const Dd = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Fl(e.theme, "spacing", 8),
      n = (r) => ({ gap: zl(t, r) });
    return In(e, e.gap, n);
  }
  return null;
};
Dd.propTypes = {};
Dd.filterProps = ["gap"];
const Fd = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Fl(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: zl(t, r) });
    return In(e, e.columnGap, n);
  }
  return null;
};
Fd.propTypes = {};
Fd.filterProps = ["columnGap"];
const zd = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Fl(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: zl(t, r) });
    return In(e, e.rowGap, n);
  }
  return null;
};
zd.propTypes = {};
zd.filterProps = ["rowGap"];
const _O = dt({ prop: "gridColumn" }),
  IO = dt({ prop: "gridRow" }),
  LO = dt({ prop: "gridAutoFlow" }),
  jO = dt({ prop: "gridAutoColumns" }),
  DO = dt({ prop: "gridAutoRows" }),
  FO = dt({ prop: "gridTemplateColumns" }),
  zO = dt({ prop: "gridTemplateRows" }),
  BO = dt({ prop: "gridTemplateAreas" }),
  UO = dt({ prop: "gridArea" });
Ld(Dd, Fd, zd, _O, IO, LO, jO, DO, FO, zO, BO, UO);
function Vi(e, t) {
  return t === "grey" ? t : e;
}
const WO = dt({ prop: "color", themeKey: "palette", transform: Vi }),
  HO = dt({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Vi,
  }),
  VO = dt({ prop: "backgroundColor", themeKey: "palette", transform: Vi });
Ld(WO, HO, VO);
function an(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const KO = dt({ prop: "width", transform: an }),
  Pg = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || Cg[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: an(n) };
      };
      return In(e, e.maxWidth, t);
    }
    return null;
  };
Pg.filterProps = ["maxWidth"];
const GO = dt({ prop: "minWidth", transform: an }),
  YO = dt({ prop: "height", transform: an }),
  XO = dt({ prop: "maxHeight", transform: an }),
  qO = dt({ prop: "minHeight", transform: an });
dt({ prop: "size", cssProperty: "width", transform: an });
dt({ prop: "size", cssProperty: "height", transform: an });
const QO = dt({ prop: "boxSizing" });
Ld(KO, Pg, GO, YO, XO, qO, QO);
const ZO = {
    border: { themeKey: "borders", transform: Sn },
    borderTop: { themeKey: "borders", transform: Sn },
    borderRight: { themeKey: "borders", transform: Sn },
    borderBottom: { themeKey: "borders", transform: Sn },
    borderLeft: { themeKey: "borders", transform: Sn },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: Sn },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: jd },
    color: { themeKey: "palette", transform: Vi },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Vi,
    },
    backgroundColor: { themeKey: "palette", transform: Vi },
    p: { style: ot },
    pt: { style: ot },
    pr: { style: ot },
    pb: { style: ot },
    pl: { style: ot },
    px: { style: ot },
    py: { style: ot },
    padding: { style: ot },
    paddingTop: { style: ot },
    paddingRight: { style: ot },
    paddingBottom: { style: ot },
    paddingLeft: { style: ot },
    paddingX: { style: ot },
    paddingY: { style: ot },
    paddingInline: { style: ot },
    paddingInlineStart: { style: ot },
    paddingInlineEnd: { style: ot },
    paddingBlock: { style: ot },
    paddingBlockStart: { style: ot },
    paddingBlockEnd: { style: ot },
    m: { style: rt },
    mt: { style: rt },
    mr: { style: rt },
    mb: { style: rt },
    ml: { style: rt },
    mx: { style: rt },
    my: { style: rt },
    margin: { style: rt },
    marginTop: { style: rt },
    marginRight: { style: rt },
    marginBottom: { style: rt },
    marginLeft: { style: rt },
    marginX: { style: rt },
    marginY: { style: rt },
    marginInline: { style: rt },
    marginInlineStart: { style: rt },
    marginInlineEnd: { style: rt },
    marginBlock: { style: rt },
    marginBlockStart: { style: rt },
    marginBlockEnd: { style: rt },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Dd },
    rowGap: { style: zd },
    columnGap: { style: Fd },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: an },
    maxWidth: { style: Pg },
    minWidth: { transform: an },
    height: { transform: an },
    maxHeight: { transform: an },
    minHeight: { transform: an },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Bd = ZO;
function JO(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function e5(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function t5() {
  function e(n, r, o, i) {
    const a = { [n]: r, theme: o },
      s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: d } = s;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const f = Id(o, u) || {};
    return d
      ? d(a)
      : In(a, r, (p) => {
          let g = kc(f, c, p);
          return (
            p === g &&
              typeof p == "string" &&
              (g = kc(f, c, `${n}${p === "default" ? "" : $e(p)}`, p)),
            l === !1 ? g : { [l]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const a = (r = i.unstable_sxConfig) != null ? r : Bd;
    function s(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = fO(i.breakpoints),
        d = Object.keys(c);
      let f = c;
      return (
        Object.keys(u).forEach((h) => {
          const p = e5(u[h], i);
          if (p != null)
            if (typeof p == "object")
              if (a[h]) f = $s(f, e(h, p, i, a));
              else {
                const g = In({ theme: i }, p, (w) => ({ [h]: w }));
                JO(g, p) ? (f[h] = t({ sx: p, theme: i })) : (f = $s(f, g));
              }
            else f = $s(f, e(h, p, i, a));
        }),
        pO(d, f)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const oC = t5();
oC.filterProps = ["sx"];
const Ud = oC;
function n5(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const r5 = ["breakpoints", "palette", "spacing", "shape"];
function Wd(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    a = ie(e, r5),
    s = uO(n),
    l = wO(o);
  let u = Tn(
    {
      breakpoints: s,
      direction: "ltr",
      components: {},
      palette: P({ mode: "light" }, r),
      spacing: l,
      shape: P({}, dO, i),
    },
    a
  );
  return (
    (u.applyStyles = n5),
    (u = t.reduce((c, d) => Tn(c, d), u)),
    (u.unstable_sxConfig = P({}, Bd, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return Ud({ sx: d, theme: this });
    }),
    u
  );
}
function o5(e) {
  return Object.keys(e).length === 0;
}
function i5(e = null) {
  const t = y.useContext(wg);
  return !t || o5(t) ? e : t;
}
const a5 = Wd();
function Hd(e = a5) {
  return i5(e);
}
function s5({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = Hd(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return C.jsx(iO, { styles: o });
}
const l5 = ["sx"],
  u5 = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : Bd;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function Rg(e) {
  const { sx: t } = e,
    n = ie(e, l5),
    { systemProps: r, otherProps: o } = u5(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...a) => {
          const s = t(...a);
          return Xr(s) ? P({}, r, s) : r;
        })
      : (i = P({}, r, t)),
    P({}, o, { sx: i })
  );
}
const c5 = ["className", "component"];
function iC(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = tC("div", {
      shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as",
    })(Ud);
  return y.forwardRef(function (l, u) {
    const c = Hd(n),
      d = Rg(l),
      { className: f, component: h = "div" } = d,
      p = ie(d, c5);
    return C.jsx(
      i,
      P(
        {
          as: h,
          ref: u,
          className: ve(f, o ? o(r) : r),
          theme: (t && c[t]) || c,
        },
        p
      )
    );
  });
}
const d5 = Me("MuiBox", ["root"]),
  f5 = d5,
  p5 = iC({ defaultClassName: f5.root, generateClassName: pg.generate }),
  h5 = p5,
  m5 = ["ownerState"],
  g5 = ["variants"],
  v5 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function y5(e) {
  return Object.keys(e).length === 0;
}
function x5(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Ms(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const b5 = Wd(),
  w5 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function hu({ defaultTheme: e, theme: t, themeId: n }) {
  return y5(t) ? e : t[n] || t;
}
function S5(e) {
  return e ? (t, n) => n[e] : null;
}
function Vu(e, t) {
  let { ownerState: n } = t,
    r = ie(t, m5);
  const o = typeof e == "function" ? e(P({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => Vu(i, P({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let s = ie(o, g5);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props(P({ ownerState: n }, r)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(s) || (s = [s]),
            s.push(
              typeof l.style == "function"
                ? l.style(P({ ownerState: n }, r))
                : l.style
            ));
      }),
      s
    );
  }
  return o;
}
function aC(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = b5,
      rootShouldForwardProp: r = Ms,
      slotShouldForwardProp: o = Ms,
    } = e,
    i = (a) =>
      Ud(P({}, a, { theme: hu(P({}, a, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (a, s = {}) => {
      aO(a, (E) => E.filter((b) => !(b != null && b.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f = S5(w5(u)),
        } = s,
        h = ie(s, v5),
        p = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        g = d || !1;
      let w,
        v = Ms;
      u === "Root" || u === "root"
        ? (v = r)
        : u
        ? (v = o)
        : x5(a) && (v = void 0);
      const m = tC(a, P({ shouldForwardProp: v, label: w }, h)),
        x = (E) =>
          (typeof E == "function" && E.__emotion_real !== E) || Xr(E)
            ? (b) =>
                Vu(
                  E,
                  P({}, b, {
                    theme: hu({ theme: b.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : E,
        S = (E, ...b) => {
          let k = x(E);
          const R = b ? b.map(x) : [];
          l &&
            f &&
            R.push((M) => {
              const L = hu(P({}, M, { defaultTheme: n, themeId: t }));
              if (
                !L.components ||
                !L.components[l] ||
                !L.components[l].styleOverrides
              )
                return null;
              const _ = L.components[l].styleOverrides,
                N = {};
              return (
                Object.entries(_).forEach(([A, D]) => {
                  N[A] = Vu(D, P({}, M, { theme: L }));
                }),
                f(M, N)
              );
            }),
            l &&
              !p &&
              R.push((M) => {
                var L;
                const _ = hu(P({}, M, { defaultTheme: n, themeId: t })),
                  N =
                    _ == null ||
                    (L = _.components) == null ||
                    (L = L[l]) == null
                      ? void 0
                      : L.variants;
                return Vu({ variants: N }, P({}, M, { theme: _ }));
              }),
            g || R.push(i);
          const T = R.length - b.length;
          if (Array.isArray(E) && T > 0) {
            const M = new Array(T).fill("");
            (k = [...E, ...M]), (k.raw = [...E.raw, ...M]);
          }
          const $ = m(k, ...R);
          return a.muiName && ($.muiName = a.muiName), $;
        };
      return m.withConfig && (S.withConfig = m.withConfig), S;
    }
  );
}
const C5 = aC();
function k5(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : fg(t.components[n].defaultProps, r);
}
function sC({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = Hd(n);
  return r && (o = o[r] || o), k5({ theme: o, name: t, props: e });
}
function $g(e, t = 0, n = 1) {
  return nN(e, t, n);
}
function E5(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Zo(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Zo(E5(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(po(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(po(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function Vd(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function P5(e) {
  e = Zo(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    a = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const l = [
    Math.round(a(0) * 255),
    Math.round(a(8) * 255),
    Math.round(a(4) * 255),
  ];
  return (
    e.type === "hsla" && ((s += "a"), l.push(t[3])), Vd({ type: s, values: l })
  );
}
function Ty(e) {
  e = Zo(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Zo(P5(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function R5(e, t) {
  const n = Ty(e),
    r = Ty(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ir(e, t) {
  return (
    (e = Zo(e)),
    (t = $g(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Vd(e)
  );
}
function $5(e, t) {
  if (((e = Zo(e)), (t = $g(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Vd(e);
}
function M5(e, t) {
  if (((e = Zo(e)), (t = $g(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Vd(e);
}
const T5 = [
    "className",
    "component",
    "disableGutters",
    "fixed",
    "maxWidth",
    "classes",
  ],
  N5 = Wd(),
  O5 = C5("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${$e(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  A5 = (e) => sC({ props: e, name: "MuiContainer", defaultTheme: N5 }),
  _5 = (e, t) => {
    const n = (l) => Le(t, l),
      { classes: r, fixed: o, disableGutters: i, maxWidth: a } = e,
      s = {
        root: [
          "root",
          a && `maxWidth${$e(String(a))}`,
          o && "fixed",
          i && "disableGutters",
        ],
      };
    return Ie(s, n, r);
  };
function I5(e = {}) {
  const {
      createStyledComponent: t = O5,
      useThemeProps: n = A5,
      componentName: r = "MuiContainer",
    } = e,
    o = t(
      ({ theme: a, ownerState: s }) =>
        P(
          {
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            display: "block",
          },
          !s.disableGutters && {
            paddingLeft: a.spacing(2),
            paddingRight: a.spacing(2),
            [a.breakpoints.up("sm")]: {
              paddingLeft: a.spacing(3),
              paddingRight: a.spacing(3),
            },
          }
        ),
      ({ theme: a, ownerState: s }) =>
        s.fixed &&
        Object.keys(a.breakpoints.values).reduce((l, u) => {
          const c = u,
            d = a.breakpoints.values[c];
          return (
            d !== 0 &&
              (l[a.breakpoints.up(c)] = {
                maxWidth: `${d}${a.breakpoints.unit}`,
              }),
            l
          );
        }, {}),
      ({ theme: a, ownerState: s }) =>
        P(
          {},
          s.maxWidth === "xs" && {
            [a.breakpoints.up("xs")]: {
              maxWidth: Math.max(a.breakpoints.values.xs, 444),
            },
          },
          s.maxWidth &&
            s.maxWidth !== "xs" && {
              [a.breakpoints.up(s.maxWidth)]: {
                maxWidth: `${a.breakpoints.values[s.maxWidth]}${
                  a.breakpoints.unit
                }`,
              },
            }
        )
    );
  return y.forwardRef(function (s, l) {
    const u = n(s),
      {
        className: c,
        component: d = "div",
        disableGutters: f = !1,
        fixed: h = !1,
        maxWidth: p = "lg",
      } = u,
      g = ie(u, T5),
      w = P({}, u, { component: d, disableGutters: f, fixed: h, maxWidth: p }),
      v = _5(w, r);
    return C.jsx(
      o,
      P({ as: d, ownerState: w, className: ve(v.root, c), ref: l }, g)
    );
  });
}
function L5(e, t) {
  return P(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const j5 = { black: "#000", white: "#fff" },
  ul = j5,
  D5 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  F5 = D5,
  z5 = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  pi = z5,
  B5 = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  hi = B5,
  U5 = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  qa = U5,
  W5 = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  mi = W5,
  H5 = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  gi = H5,
  V5 = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  vi = V5,
  K5 = ["mode", "contrastThreshold", "tonalOffset"],
  Ny = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: ul.white, default: ul.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  ip = {
    text: {
      primary: ul.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: ul.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Oy(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = M5(e.main, o))
      : t === "dark" && (e.dark = $5(e.main, i)));
}
function G5(e = "light") {
  return e === "dark"
    ? { main: mi[200], light: mi[50], dark: mi[400] }
    : { main: mi[700], light: mi[400], dark: mi[800] };
}
function Y5(e = "light") {
  return e === "dark"
    ? { main: pi[200], light: pi[50], dark: pi[400] }
    : { main: pi[500], light: pi[300], dark: pi[700] };
}
function X5(e = "light") {
  return e === "dark"
    ? { main: hi[500], light: hi[300], dark: hi[700] }
    : { main: hi[700], light: hi[400], dark: hi[800] };
}
function q5(e = "light") {
  return e === "dark"
    ? { main: gi[400], light: gi[300], dark: gi[700] }
    : { main: gi[700], light: gi[500], dark: gi[900] };
}
function Q5(e = "light") {
  return e === "dark"
    ? { main: vi[400], light: vi[300], dark: vi[700] }
    : { main: vi[800], light: vi[500], dark: vi[900] };
}
function Z5(e = "light") {
  return e === "dark"
    ? { main: qa[400], light: qa[300], dark: qa[700] }
    : { main: "#ed6c02", light: qa[500], dark: qa[900] };
}
function J5(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = ie(e, K5),
    i = e.primary || G5(t),
    a = e.secondary || Y5(t),
    s = e.error || X5(t),
    l = e.info || q5(t),
    u = e.success || Q5(t),
    c = e.warning || Z5(t);
  function d(g) {
    return R5(g, ip.text.primary) >= n ? ip.text.primary : Ny.text.primary;
  }
  const f = ({
      color: g,
      name: w,
      mainShade: v = 500,
      lightShade: m = 300,
      darkShade: x = 700,
    }) => {
      if (
        ((g = P({}, g)),
        !g.main && g[v] && (g.main = g[v]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(po(11, w ? ` (${w})` : "", v));
      if (typeof g.main != "string")
        throw new Error(po(12, w ? ` (${w})` : "", JSON.stringify(g.main)));
      return (
        Oy(g, "light", m, r),
        Oy(g, "dark", x, r),
        g.contrastText || (g.contrastText = d(g.main)),
        g
      );
    },
    h = { dark: ip, light: Ny };
  return Tn(
    P(
      {
        common: P({}, ul),
        mode: t,
        primary: f({ color: i, name: "primary" }),
        secondary: f({
          color: a,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: s, name: "error" }),
        warning: f({ color: c, name: "warning" }),
        info: f({ color: l, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: F5,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: r,
      },
      h[t]
    ),
    o
  );
}
const eA = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function tA(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ay = { textTransform: "uppercase" },
  _y = '"Roboto", "Helvetica", "Arial", sans-serif';
function nA(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = _y,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d,
    } = n,
    f = ie(n, eA),
    h = o / 14,
    p = d || ((v) => `${(v / u) * h}rem`),
    g = (v, m, x, S, E) =>
      P(
        { fontFamily: r, fontWeight: v, fontSize: p(m), lineHeight: x },
        r === _y ? { letterSpacing: `${tA(S / m)}em` } : {},
        E,
        c
      ),
    w = {
      h1: g(i, 96, 1.167, -1.5),
      h2: g(i, 60, 1.2, -0.5),
      h3: g(a, 48, 1.167, 0),
      h4: g(a, 34, 1.235, 0.25),
      h5: g(a, 24, 1.334, 0),
      h6: g(s, 20, 1.6, 0.15),
      subtitle1: g(a, 16, 1.75, 0.15),
      subtitle2: g(s, 14, 1.57, 0.1),
      body1: g(a, 16, 1.5, 0.15),
      body2: g(a, 14, 1.43, 0.15),
      button: g(s, 14, 1.75, 0.4, Ay),
      caption: g(a, 12, 1.66, 0.4),
      overline: g(a, 12, 2.66, 1, Ay),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Tn(
    P(
      {
        htmlFontSize: u,
        pxToRem: p,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: a,
        fontWeightMedium: s,
        fontWeightBold: l,
      },
      w
    ),
    f,
    { clone: !1 }
  );
}
const rA = 0.2,
  oA = 0.14,
  iA = 0.12;
function qe(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${rA})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${oA})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${iA})`,
  ].join(",");
}
const aA = [
    "none",
    qe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    qe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    qe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    qe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    qe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    qe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    qe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    qe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    qe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    qe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    qe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    qe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    qe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    qe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    qe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    qe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    qe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    qe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    qe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    qe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    qe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    qe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    qe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    qe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  sA = ["duration", "easing", "delay"],
  lA = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  uA = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Iy(e) {
  return `${Math.round(e)}ms`;
}
function cA(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function dA(e) {
  const t = P({}, lA, e.easing),
    n = P({}, uA, e.duration);
  return P(
    {
      getAutoHeightDuration: cA,
      create: (o = ["all"], i = {}) => {
        const {
          duration: a = n.standard,
          easing: s = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          ie(i, sA),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof a == "string" ? a : Iy(a)} ${s} ${
                  typeof l == "string" ? l : Iy(l)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const fA = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  pA = fA,
  hA = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function lC(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    a = ie(e, hA);
  if (e.vars) throw new Error(po(18));
  const s = J5(r),
    l = Wd(e);
  let u = Tn(l, {
    mixins: L5(l.breakpoints, n),
    palette: s,
    shadows: aA.slice(),
    typography: nA(s, i),
    transitions: dA(o),
    zIndex: P({}, pA),
  });
  return (
    (u = Tn(u, a)),
    (u = t.reduce((c, d) => Tn(c, d), u)),
    (u.unstable_sxConfig = P({}, Bd, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return Ud({ sx: d, theme: this });
    }),
    u
  );
}
const mA = lC(),
  Kd = mA,
  Bl = "$$material",
  Dn = (e) => Ms(e) && e !== "classes",
  gA = Ms,
  le = aC({ themeId: Bl, defaultTheme: Kd, rootShouldForwardProp: Dn });
function Be({ props: e, name: t }) {
  return sC({ props: e, name: t, defaultTheme: Kd, themeId: Bl });
}
function Ah(e, t) {
  return (
    (Ah = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Ah(e, t)
  );
}
function uC(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Ah(e, t);
}
const Ly = { disabled: !1 },
  Ec = ee.createContext(null);
var vA = function (t) {
    return t.scrollTop;
  },
  ps = "unmounted",
  Ro = "exited",
  $o = "entering",
  wi = "entered",
  _h = "exiting",
  Lr = (function (e) {
    uC(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var a = o,
        s = a && !a.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? s
            ? ((l = Ro), (i.appearStatus = $o))
            : (l = wi)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = ps)
          : (l = Ro),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var a = o.in;
      return a && i.status === ps ? { status: Ro } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== $o && a !== wi && (i = $o)
            : (a === $o || a === wi) && (i = _h);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          a,
          s;
        return (
          (i = a = s = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (a = o.enter),
            (s = o.appear !== void 0 ? o.appear : a)),
          { exit: i, enter: a, appear: s }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === $o)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : fs.findDOMNode(this);
              a && vA(a);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Ro &&
            this.setState({ status: ps });
      }),
      (n.performEnter = function (o) {
        var i = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [s] : [fs.findDOMNode(this), s],
          u = l[0],
          c = l[1],
          d = this.getTimeouts(),
          f = s ? d.appear : d.enter;
        if ((!o && !a) || Ly.disabled) {
          this.safeSetState({ status: wi }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: $o }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: wi }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : fs.findDOMNode(this);
        if (!i || Ly.disabled) {
          this.safeSetState({ status: Ro }, function () {
            o.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: _h }, function () {
            o.props.onExiting(s),
              o.onTransitionEnd(a.exit, function () {
                o.safeSetState({ status: Ro }, function () {
                  o.props.onExited(s);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          a = !0;
        return (
          (this.nextCallback = function (s) {
            a && ((a = !1), (i.nextCallback = null), o(s));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : fs.findDOMNode(this),
          s = o == null && !this.props.addEndListener;
        if (!a || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === ps) return null;
        var i = this.props,
          a = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var s = ie(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return ee.createElement(
          Ec.Provider,
          { value: null },
          typeof a == "function"
            ? a(o, s)
            : ee.cloneElement(ee.Children.only(a), s)
        );
      }),
      t
    );
  })(ee.Component);
Lr.contextType = Ec;
Lr.propTypes = {};
function yi() {}
Lr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: yi,
  onEntering: yi,
  onEntered: yi,
  onExit: yi,
  onExiting: yi,
  onExited: yi,
};
Lr.UNMOUNTED = ps;
Lr.EXITED = Ro;
Lr.ENTERING = $o;
Lr.ENTERED = wi;
Lr.EXITING = _h;
const cC = Lr;
function yA(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Mg(e, t) {
  var n = function (i) {
      return t && y.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      y.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function xA(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var a,
    s = {};
  for (var l in t) {
    if (r[l])
      for (a = 0; a < r[l].length; a++) {
        var u = r[l][a];
        s[r[l][a]] = n(u);
      }
    s[l] = n(l);
  }
  for (a = 0; a < o.length; a++) s[o[a]] = n(o[a]);
  return s;
}
function _o(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function bA(e, t) {
  return Mg(e.children, function (n) {
    return y.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: _o(n, "appear", e),
      enter: _o(n, "enter", e),
      exit: _o(n, "exit", e),
    });
  });
}
function wA(e, t, n) {
  var r = Mg(e.children),
    o = xA(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var a = o[i];
      if (y.isValidElement(a)) {
        var s = i in t,
          l = i in r,
          u = t[i],
          c = y.isValidElement(u) && !u.props.in;
        l && (!s || c)
          ? (o[i] = y.cloneElement(a, {
              onExited: n.bind(null, a),
              in: !0,
              exit: _o(a, "exit", e),
              enter: _o(a, "enter", e),
            }))
          : !l && s && !c
          ? (o[i] = y.cloneElement(a, { in: !1 }))
          : l &&
            s &&
            y.isValidElement(u) &&
            (o[i] = y.cloneElement(a, {
              onExited: n.bind(null, a),
              in: u.props.in,
              exit: _o(a, "exit", e),
              enter: _o(a, "enter", e),
            }));
      }
    }),
    o
  );
}
var SA =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  CA = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Tg = (function (e) {
    uC(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var a = i.handleExited.bind(yA(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: a,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var a = i.children,
          s = i.handleExited,
          l = i.firstRender;
        return { children: l ? bA(o, s) : wA(o, a, s), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var a = Mg(this.props.children);
        o.key in a ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var l = P({}, s.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          a = o.childFactory,
          s = ie(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = SA(this.state.children).map(a);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? ee.createElement(Ec.Provider, { value: l }, u)
            : ee.createElement(
                Ec.Provider,
                { value: l },
                ee.createElement(i, s, u)
              )
        );
      }),
      t
    );
  })(ee.Component);
Tg.propTypes = {};
Tg.defaultProps = CA;
const kA = Tg;
function EA(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: a,
      in: s,
      onExited: l,
      timeout: u,
    } = e,
    [c, d] = y.useState(!1),
    f = ve(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    h = { width: a, height: a, top: -(a / 2) + i, left: -(a / 2) + o },
    p = ve(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !s && !c && d(!0),
    y.useEffect(() => {
      if (!s && l != null) {
        const g = setTimeout(l, u);
        return () => {
          clearTimeout(g);
        };
      }
    }, [l, s, u]),
    C.jsx("span", {
      className: f,
      style: h,
      children: C.jsx("span", { className: p }),
    })
  );
}
const xn = Me("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  PA = ["center", "classes", "className"];
let Gd = (e) => e,
  jy,
  Dy,
  Fy,
  zy;
const Ih = 550,
  RA = 80,
  $A = Sg(
    jy ||
      (jy = Gd`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  MA = Sg(
    Dy ||
      (Dy = Gd`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  TA = Sg(
    Fy ||
      (Fy = Gd`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  NA = le("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  OA = le(EA, { name: "MuiTouchRipple", slot: "Ripple" })(
    zy ||
      (zy = Gd`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    xn.rippleVisible,
    $A,
    Ih,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    xn.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    xn.child,
    xn.childLeaving,
    MA,
    Ih,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    xn.childPulsate,
    TA,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  AA = y.forwardRef(function (t, n) {
    const r = Be({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: a } = r,
      s = ie(r, PA),
      [l, u] = y.useState([]),
      c = y.useRef(0),
      d = y.useRef(null);
    y.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [l]);
    const f = y.useRef(!1),
      h = _S(),
      p = y.useRef(null),
      g = y.useRef(null),
      w = y.useCallback(
        (S) => {
          const {
            pulsate: E,
            rippleX: b,
            rippleY: k,
            rippleSize: R,
            cb: T,
          } = S;
          u(($) => [
            ...$,
            C.jsx(
              OA,
              {
                classes: {
                  ripple: ve(i.ripple, xn.ripple),
                  rippleVisible: ve(i.rippleVisible, xn.rippleVisible),
                  ripplePulsate: ve(i.ripplePulsate, xn.ripplePulsate),
                  child: ve(i.child, xn.child),
                  childLeaving: ve(i.childLeaving, xn.childLeaving),
                  childPulsate: ve(i.childPulsate, xn.childPulsate),
                },
                timeout: Ih,
                pulsate: E,
                rippleX: b,
                rippleY: k,
                rippleSize: R,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (d.current = T);
        },
        [i]
      ),
      v = y.useCallback(
        (S = {}, E = {}, b = () => {}) => {
          const {
            pulsate: k = !1,
            center: R = o || E.pulsate,
            fakeElement: T = !1,
          } = E;
          if ((S == null ? void 0 : S.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (S == null ? void 0 : S.type) === "touchstart" && (f.current = !0);
          const $ = T ? null : g.current,
            M = $
              ? $.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let L, _, N;
          if (
            R ||
            S === void 0 ||
            (S.clientX === 0 && S.clientY === 0) ||
            (!S.clientX && !S.touches)
          )
            (L = Math.round(M.width / 2)), (_ = Math.round(M.height / 2));
          else {
            const { clientX: A, clientY: D } =
              S.touches && S.touches.length > 0 ? S.touches[0] : S;
            (L = Math.round(A - M.left)), (_ = Math.round(D - M.top));
          }
          if (R)
            (N = Math.sqrt((2 * M.width ** 2 + M.height ** 2) / 3)),
              N % 2 === 0 && (N += 1);
          else {
            const A =
                Math.max(Math.abs(($ ? $.clientWidth : 0) - L), L) * 2 + 2,
              D = Math.max(Math.abs(($ ? $.clientHeight : 0) - _), _) * 2 + 2;
            N = Math.sqrt(A ** 2 + D ** 2);
          }
          S != null && S.touches
            ? p.current === null &&
              ((p.current = () => {
                w({ pulsate: k, rippleX: L, rippleY: _, rippleSize: N, cb: b });
              }),
              h.start(RA, () => {
                p.current && (p.current(), (p.current = null));
              }))
            : w({ pulsate: k, rippleX: L, rippleY: _, rippleSize: N, cb: b });
        },
        [o, w, h]
      ),
      m = y.useCallback(() => {
        v({}, { pulsate: !0 });
      }, [v]),
      x = y.useCallback(
        (S, E) => {
          if (
            (h.clear(),
            (S == null ? void 0 : S.type) === "touchend" && p.current)
          ) {
            p.current(),
              (p.current = null),
              h.start(0, () => {
                x(S, E);
              });
            return;
          }
          (p.current = null),
            u((b) => (b.length > 0 ? b.slice(1) : b)),
            (d.current = E);
        },
        [h]
      );
    return (
      y.useImperativeHandle(n, () => ({ pulsate: m, start: v, stop: x }), [
        m,
        v,
        x,
      ]),
      C.jsx(
        NA,
        P({ className: ve(xn.root, i.root, a), ref: g }, s, {
          children: C.jsx(kA, { component: null, exit: !0, children: l }),
        })
      )
    );
  }),
  _A = AA;
function IA(e) {
  return Le("MuiButtonBase", e);
}
const LA = Me("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  jA = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  DA = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      a = Ie({ root: ["root", t && "disabled", n && "focusVisible"] }, IA, o);
    return n && r && (a.root += ` ${r}`), a;
  },
  FA = le("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${LA.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  zA = y.forwardRef(function (t, n) {
    const r = Be({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: a,
        className: s,
        component: l = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: d = !1,
        focusRipple: f = !1,
        LinkComponent: h = "a",
        onBlur: p,
        onClick: g,
        onContextMenu: w,
        onDragLeave: v,
        onFocus: m,
        onFocusVisible: x,
        onKeyDown: S,
        onKeyUp: E,
        onMouseDown: b,
        onMouseLeave: k,
        onMouseUp: R,
        onTouchEnd: T,
        onTouchMove: $,
        onTouchStart: M,
        tabIndex: L = 0,
        TouchRippleProps: _,
        touchRippleRef: N,
        type: A,
      } = r,
      D = ie(r, jA),
      F = y.useRef(null),
      O = y.useRef(null),
      j = Ct(O, N),
      { isFocusVisibleRef: U, onFocus: X, onBlur: Y, ref: ce } = JT(),
      [Q, q] = y.useState(!1);
    u && Q && q(!1),
      y.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            q(!0), F.current.focus();
          },
        }),
        []
      );
    const [ne, ge] = y.useState(!1);
    y.useEffect(() => {
      ge(!0);
    }, []);
    const we = ne && !c && !u;
    y.useEffect(() => {
      Q && f && !c && ne && O.current.pulsate();
    }, [c, f, Q, ne]);
    function H(ue, gn, Dr = d) {
      return Li(
        (Fr) => (gn && gn(Fr), !Dr && O.current && O.current[ue](Fr), !0)
      );
    }
    const re = H("start", b),
      G = H("stop", w),
      B = H("stop", v),
      ae = H("stop", R),
      oe = H("stop", (ue) => {
        Q && ue.preventDefault(), k && k(ue);
      }),
      pe = H("start", M),
      je = H("stop", T),
      We = H("stop", $),
      ht = H(
        "stop",
        (ue) => {
          Y(ue), U.current === !1 && q(!1), p && p(ue);
        },
        !1
      ),
      Dt = Li((ue) => {
        F.current || (F.current = ue.currentTarget),
          X(ue),
          U.current === !0 && (q(!0), x && x(ue)),
          m && m(ue);
      }),
      tt = () => {
        const ue = F.current;
        return l && l !== "button" && !(ue.tagName === "A" && ue.href);
      },
      Re = y.useRef(!1),
      Ft = Li((ue) => {
        f &&
          !Re.current &&
          Q &&
          O.current &&
          ue.key === " " &&
          ((Re.current = !0),
          O.current.stop(ue, () => {
            O.current.start(ue);
          })),
          ue.target === ue.currentTarget &&
            tt() &&
            ue.key === " " &&
            ue.preventDefault(),
          S && S(ue),
          ue.target === ue.currentTarget &&
            tt() &&
            ue.key === "Enter" &&
            !u &&
            (ue.preventDefault(), g && g(ue));
      }),
      lt = Li((ue) => {
        f &&
          ue.key === " " &&
          O.current &&
          Q &&
          !ue.defaultPrevented &&
          ((Re.current = !1),
          O.current.stop(ue, () => {
            O.current.pulsate(ue);
          })),
          E && E(ue),
          g &&
            ue.target === ue.currentTarget &&
            tt() &&
            ue.key === " " &&
            !ue.defaultPrevented &&
            g(ue);
      });
    let ke = l;
    ke === "button" && (D.href || D.to) && (ke = h);
    const mt = {};
    ke === "button"
      ? ((mt.type = A === void 0 ? "button" : A), (mt.disabled = u))
      : (!D.href && !D.to && (mt.role = "button"),
        u && (mt["aria-disabled"] = u));
    const Kt = Ct(n, ce, F),
      Pt = P({}, r, {
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: d,
        focusRipple: f,
        tabIndex: L,
        focusVisible: Q,
      }),
      Oe = DA(Pt);
    return C.jsxs(
      FA,
      P(
        {
          as: ke,
          className: ve(Oe.root, s),
          ownerState: Pt,
          onBlur: ht,
          onClick: g,
          onContextMenu: G,
          onFocus: Dt,
          onKeyDown: Ft,
          onKeyUp: lt,
          onMouseDown: re,
          onMouseLeave: oe,
          onMouseUp: ae,
          onDragLeave: B,
          onTouchEnd: je,
          onTouchMove: We,
          onTouchStart: pe,
          ref: Kt,
          tabIndex: u ? -1 : L,
          type: A,
        },
        mt,
        D,
        { children: [a, we ? C.jsx(_A, P({ ref: j, center: i }, _)) : null] }
      )
    );
  }),
  dC = zA;
function BA(e) {
  return Le("MuiButton", e);
}
const UA = Me("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  mu = UA,
  WA = y.createContext({}),
  HA = WA,
  VA = y.createContext(void 0),
  KA = VA,
  GA = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  YA = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: a,
      } = e,
      s = {
        root: [
          "root",
          i,
          `${i}${$e(t)}`,
          `size${$e(o)}`,
          `${i}Size${$e(o)}`,
          t === "inherit" && "colorInherit",
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${$e(o)}`],
        endIcon: ["endIcon", `iconSize${$e(o)}`],
      },
      l = Ie(s, BA, a);
    return P({}, a, l);
  },
  fC = (e) =>
    P(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  XA = le(dC, {
    shouldForwardProp: (e) => Dn(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${$e(n.color)}`],
        t[`size${$e(n.size)}`],
        t[`${n.variant}Size${$e(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return P(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": P(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : ir(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : ir(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : ir(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": P(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${mu.focusVisible}`]: P(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${mu.disabled}`]: P(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${ir(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${mu.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${mu.disabled}`]: { boxShadow: "none" },
      }
  ),
  qA = le("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${$e(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    P(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      fC(e)
    )
  ),
  QA = le("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${$e(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    P(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      fC(e)
    )
  ),
  ZA = y.forwardRef(function (t, n) {
    const r = y.useContext(HA),
      o = y.useContext(KA),
      i = fg(r, t),
      a = Be({ props: i, name: "MuiButton" }),
      {
        children: s,
        color: l = "primary",
        component: u = "button",
        className: c,
        disabled: d = !1,
        disableElevation: f = !1,
        disableFocusRipple: h = !1,
        endIcon: p,
        focusVisibleClassName: g,
        fullWidth: w = !1,
        size: v = "medium",
        startIcon: m,
        type: x,
        variant: S = "text",
      } = a,
      E = ie(a, GA),
      b = P({}, a, {
        color: l,
        component: u,
        disabled: d,
        disableElevation: f,
        disableFocusRipple: h,
        fullWidth: w,
        size: v,
        type: x,
        variant: S,
      }),
      k = YA(b),
      R =
        m && C.jsx(qA, { className: k.startIcon, ownerState: b, children: m }),
      T = p && C.jsx(QA, { className: k.endIcon, ownerState: b, children: p }),
      $ = o || "";
    return C.jsxs(
      XA,
      P(
        {
          ownerState: b,
          className: ve(r.className, k.root, c, $),
          component: u,
          disabled: d,
          focusRipple: !h,
          focusVisibleClassName: ve(k.focusVisible, g),
          ref: n,
          type: x,
        },
        E,
        { classes: k, children: [R, s, T] }
      )
    );
  }),
  Ng = ZA;
function Pc(e) {
  return typeof e == "string";
}
function JA(e, t, n) {
  return e === void 0 || Pc(e)
    ? t
    : P({}, t, { ownerState: P({}, t.ownerState, n) });
}
const e_ = { disableDefaultClasses: !1 },
  t_ = y.createContext(e_);
function n_(e) {
  const { disableDefaultClasses: t } = y.useContext(t_);
  return (n) => (t ? "" : e(n));
}
function pC(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function r_(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function By(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function o_(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const h = ve(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      p = P(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      g = P({}, n, o, r);
    return (
      h.length > 0 && (g.className = h),
      Object.keys(p).length > 0 && (g.style = p),
      { props: g, internalRef: void 0 }
    );
  }
  const a = pC(P({}, o, r)),
    s = By(r),
    l = By(o),
    u = t(a),
    c = ve(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    d = P(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    f = P({}, u, n, l, s);
  return (
    c.length > 0 && (f.className = c),
    Object.keys(d).length > 0 && (f.style = d),
    { props: f, internalRef: u.ref }
  );
}
const i_ = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function jt(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    a = ie(e, i_),
    s = i ? {} : r_(r, o),
    { props: l, internalRef: u } = o_(P({}, a, { externalSlotProps: s })),
    c = Ct(
      u,
      s == null ? void 0 : s.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return JA(n, P({}, l, { ref: c }), o);
}
const hC = "base";
function a_(e) {
  return `${hC}--${e}`;
}
function s_(e, t) {
  return `${hC}-${e}-${t}`;
}
function mC(e, t) {
  const n = LS[t];
  return n ? a_(n) : s_(e, t);
}
function l_(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      n[r] = mC(e, r);
    }),
    n
  );
}
const u_ = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function c_(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function d_(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function f_(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    d_(e)
  );
}
function p_(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(u_)).forEach((r, o) => {
      const i = c_(r);
      i === -1 ||
        !f_(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function h_() {
  return !0;
}
function m_(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = p_,
      isEnabled: a = h_,
      open: s,
    } = e,
    l = y.useRef(!1),
    u = y.useRef(null),
    c = y.useRef(null),
    d = y.useRef(null),
    f = y.useRef(null),
    h = y.useRef(!1),
    p = y.useRef(null),
    g = Ct(t.ref, p),
    w = y.useRef(null);
  y.useEffect(() => {
    !s || !p.current || (h.current = !n);
  }, [n, s]),
    y.useEffect(() => {
      if (!s || !p.current) return;
      const x = Wt(p.current);
      return (
        p.current.contains(x.activeElement) ||
          (p.current.hasAttribute("tabIndex") ||
            p.current.setAttribute("tabIndex", "-1"),
          h.current && p.current.focus()),
        () => {
          o ||
            (d.current &&
              d.current.focus &&
              ((l.current = !0), d.current.focus()),
            (d.current = null));
        }
      );
    }, [s]),
    y.useEffect(() => {
      if (!s || !p.current) return;
      const x = Wt(p.current),
        S = (k) => {
          (w.current = k),
            !(r || !a() || k.key !== "Tab") &&
              x.activeElement === p.current &&
              k.shiftKey &&
              ((l.current = !0), c.current && c.current.focus());
        },
        E = () => {
          const k = p.current;
          if (k === null) return;
          if (!x.hasFocus() || !a() || l.current) {
            l.current = !1;
            return;
          }
          if (
            k.contains(x.activeElement) ||
            (r &&
              x.activeElement !== u.current &&
              x.activeElement !== c.current)
          )
            return;
          if (x.activeElement !== f.current) f.current = null;
          else if (f.current !== null) return;
          if (!h.current) return;
          let R = [];
          if (
            ((x.activeElement === u.current || x.activeElement === c.current) &&
              (R = i(p.current)),
            R.length > 0)
          ) {
            var T, $;
            const M = !!(
                (T = w.current) != null &&
                T.shiftKey &&
                (($ = w.current) == null ? void 0 : $.key) === "Tab"
              ),
              L = R[0],
              _ = R[R.length - 1];
            typeof L != "string" &&
              typeof _ != "string" &&
              (M ? _.focus() : L.focus());
          } else k.focus();
        };
      x.addEventListener("focusin", E), x.addEventListener("keydown", S, !0);
      const b = setInterval(() => {
        x.activeElement && x.activeElement.tagName === "BODY" && E();
      }, 50);
      return () => {
        clearInterval(b),
          x.removeEventListener("focusin", E),
          x.removeEventListener("keydown", S, !0);
      };
    }, [n, r, o, a, s, i]);
  const v = (x) => {
      d.current === null && (d.current = x.relatedTarget),
        (h.current = !0),
        (f.current = x.target);
      const S = t.props.onFocus;
      S && S(x);
    },
    m = (x) => {
      d.current === null && (d.current = x.relatedTarget), (h.current = !0);
    };
  return C.jsxs(y.Fragment, {
    children: [
      C.jsx("div", {
        tabIndex: s ? 0 : -1,
        onFocus: m,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      y.cloneElement(t, { ref: g, onFocus: v }),
      C.jsx("div", {
        tabIndex: s ? 0 : -1,
        onFocus: m,
        ref: c,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function g_(e) {
  return typeof e == "function" ? e() : e;
}
const gC = y.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [a, s] = y.useState(null),
    l = Ct(y.isValidElement(r) ? r.ref : null, n);
  if (
    (fn(() => {
      i || s(g_(o) || document.body);
    }, [o, i]),
    fn(() => {
      if (a && !i)
        return (
          $h(n, a),
          () => {
            $h(n, null);
          }
        );
    }, [n, a, i]),
    i)
  ) {
    if (y.isValidElement(r)) {
      const u = { ref: l };
      return y.cloneElement(r, u);
    }
    return C.jsx(y.Fragment, { children: r });
  }
  return C.jsx(y.Fragment, { children: a && yo.createPortal(r, a) });
});
function v_(e) {
  const t = Wt(e);
  return t.body === e
    ? ho(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Ts(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Uy(e) {
  return parseInt(ho(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function y_(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Wy(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const s = i.indexOf(a) === -1,
      l = !y_(a);
    s && l && Ts(a, o);
  });
}
function ap(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function x_(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (v_(r)) {
      const a = IS(Wt(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Uy(r) + a}px`);
      const s = Wt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${Uy(l) + a}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = Wt(r).body;
    else {
      const a = r.parentElement,
        s = ho(r);
      i =
        (a == null ? void 0 : a.nodeName) === "HTML" &&
        s.getComputedStyle(a).overflowY === "scroll"
          ? a
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: a, property: s }) => {
      i ? a.style.setProperty(s, i) : a.style.removeProperty(s);
    });
  };
}
function b_(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class w_ {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && Ts(t.modalRef, !1);
    const o = b_(n);
    Wy(n, t.mount, t.modalRef, o, !0);
    const i = ap(this.containers, (a) => a.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = ap(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = x_(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = ap(this.containers, (a) => a.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && Ts(t.modalRef, n),
        Wy(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && Ts(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function S_(e) {
  return typeof e == "function" ? e() : e;
}
function C_(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const k_ = new w_();
function E_(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = k_,
      closeAfterTransition: i = !1,
      onTransitionEnter: a,
      onTransitionExited: s,
      children: l,
      onClose: u,
      open: c,
      rootRef: d,
    } = e,
    f = y.useRef({}),
    h = y.useRef(null),
    p = y.useRef(null),
    g = Ct(p, d),
    [w, v] = y.useState(!c),
    m = C_(l);
  let x = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (x = !1);
  const S = () => Wt(h.current),
    E = () => (
      (f.current.modalRef = p.current), (f.current.mount = h.current), f.current
    ),
    b = () => {
      o.mount(E(), { disableScrollLock: r }),
        p.current && (p.current.scrollTop = 0);
    },
    k = Li(() => {
      const D = S_(t) || S().body;
      o.add(E(), D), p.current && b();
    }),
    R = y.useCallback(() => o.isTopModal(E()), [o]),
    T = Li((D) => {
      (h.current = D), D && (c && R() ? b() : p.current && Ts(p.current, x));
    }),
    $ = y.useCallback(() => {
      o.remove(E(), x);
    }, [x, o]);
  y.useEffect(
    () => () => {
      $();
    },
    [$]
  ),
    y.useEffect(() => {
      c ? k() : (!m || !i) && $();
    }, [c, $, m, i, k]);
  const M = (D) => (F) => {
      var O;
      (O = D.onKeyDown) == null || O.call(D, F),
        !(F.key !== "Escape" || F.which === 229 || !R()) &&
          (n || (F.stopPropagation(), u && u(F, "escapeKeyDown")));
    },
    L = (D) => (F) => {
      var O;
      (O = D.onClick) == null || O.call(D, F),
        F.target === F.currentTarget && u && u(F, "backdropClick");
    };
  return {
    getRootProps: (D = {}) => {
      const F = pC(e);
      delete F.onTransitionEnter, delete F.onTransitionExited;
      const O = P({}, F, D);
      return P({ role: "presentation" }, O, { onKeyDown: M(O), ref: g });
    },
    getBackdropProps: (D = {}) => {
      const F = D;
      return P({ "aria-hidden": !0 }, F, { onClick: L(F), open: c });
    },
    getTransitionProps: () => {
      const D = () => {
          v(!1), a && a();
        },
        F = () => {
          v(!0), s && s(), i && $();
        };
      return {
        onEnter: py(D, l == null ? void 0 : l.props.onEnter),
        onExited: py(F, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: g,
    portalRef: T,
    isTopModal: R,
    exited: w,
    hasTransition: m,
  };
}
function vC(e) {
  const { children: t, defer: n = !1, fallback: r = null } = e,
    [o, i] = y.useState(!1);
  return (
    fn(() => {
      n || i(!0);
    }, [n]),
    y.useEffect(() => {
      n && i(!0);
    }, [n]),
    C.jsx(y.Fragment, { children: o ? t : r })
  );
}
const yC = "Popper";
function P_(e) {
  return mC(yC, e);
}
l_(yC, ["root"]);
const R_ = [
    "anchorEl",
    "children",
    "direction",
    "disablePortal",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "slotProps",
    "slots",
    "TransitionProps",
    "ownerState",
  ],
  $_ = [
    "anchorEl",
    "children",
    "container",
    "direction",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "style",
    "transition",
    "slotProps",
    "slots",
  ];
function M_(e, t) {
  if (t === "ltr") return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Lh(e) {
  return typeof e == "function" ? e() : e;
}
function T_(e) {
  return e.nodeType !== void 0;
}
const N_ = () => Ie({ root: ["root"] }, n_(P_)),
  O_ = {},
  A_ = y.forwardRef(function (t, n) {
    var r;
    const {
        anchorEl: o,
        children: i,
        direction: a,
        disablePortal: s,
        modifiers: l,
        open: u,
        placement: c,
        popperOptions: d,
        popperRef: f,
        slotProps: h = {},
        slots: p = {},
        TransitionProps: g,
      } = t,
      w = ie(t, R_),
      v = y.useRef(null),
      m = Ct(v, n),
      x = y.useRef(null),
      S = Ct(x, f),
      E = y.useRef(S);
    fn(() => {
      E.current = S;
    }, [S]),
      y.useImperativeHandle(f, () => x.current, []);
    const b = M_(c, a),
      [k, R] = y.useState(b),
      [T, $] = y.useState(Lh(o));
    y.useEffect(() => {
      x.current && x.current.forceUpdate();
    }),
      y.useEffect(() => {
        o && $(Lh(o));
      }, [o]),
      fn(() => {
        if (!T || !u) return;
        const A = (O) => {
          R(O.placement);
        };
        let D = [
          { name: "preventOverflow", options: { altBoundary: s } },
          { name: "flip", options: { altBoundary: s } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: O }) => {
              A(O);
            },
          },
        ];
        l != null && (D = D.concat(l)),
          d && d.modifiers != null && (D = D.concat(d.modifiers));
        const F = dS(T, v.current, P({ placement: b }, d, { modifiers: D }));
        return (
          E.current(F),
          () => {
            F.destroy(), E.current(null);
          }
        );
      }, [T, s, l, u, d, b]);
    const M = { placement: k };
    g !== null && (M.TransitionProps = g);
    const L = N_(),
      _ = (r = p.root) != null ? r : "div",
      N = jt({
        elementType: _,
        externalSlotProps: h.root,
        externalForwardedProps: w,
        additionalProps: { role: "tooltip", ref: m },
        ownerState: t,
        className: L.root,
      });
    return C.jsx(_, P({}, N, { children: typeof i == "function" ? i(M) : i }));
  }),
  __ = y.forwardRef(function (t, n) {
    const {
        anchorEl: r,
        children: o,
        container: i,
        direction: a = "ltr",
        disablePortal: s = !1,
        keepMounted: l = !1,
        modifiers: u,
        open: c,
        placement: d = "bottom",
        popperOptions: f = O_,
        popperRef: h,
        style: p,
        transition: g = !1,
        slotProps: w = {},
        slots: v = {},
      } = t,
      m = ie(t, $_),
      [x, S] = y.useState(!0),
      E = () => {
        S(!1);
      },
      b = () => {
        S(!0);
      };
    if (!l && !c && (!g || x)) return null;
    let k;
    if (i) k = i;
    else if (r) {
      const $ = Lh(r);
      k = $ && T_($) ? Wt($).body : Wt(null).body;
    }
    const R = !c && l && (!g || x) ? "none" : void 0,
      T = g ? { in: c, onEnter: E, onExited: b } : void 0;
    return C.jsx(gC, {
      disablePortal: s,
      container: k,
      children: C.jsx(
        A_,
        P(
          {
            anchorEl: r,
            direction: a,
            disablePortal: s,
            modifiers: u,
            ref: n,
            open: g ? !x : c,
            placement: d,
            popperOptions: f,
            popperRef: h,
            slotProps: w,
            slots: v,
          },
          m,
          {
            style: P({ position: "fixed", top: 0, left: 0, display: R }, p),
            TransitionProps: T,
            children: o,
          }
        )
      ),
    });
  }),
  I_ = ["onChange", "maxRows", "minRows", "style", "value"];
function gu(e) {
  return parseInt(e, 10) || 0;
}
const L_ = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function Hy(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflow)
  );
}
const j_ = y.forwardRef(function (t, n) {
  const { onChange: r, maxRows: o, minRows: i = 1, style: a, value: s } = t,
    l = ie(t, I_),
    { current: u } = y.useRef(s != null),
    c = y.useRef(null),
    d = Ct(n, c),
    f = y.useRef(null),
    h = y.useRef(0),
    [p, g] = y.useState({ outerHeightStyle: 0 }),
    w = y.useCallback(() => {
      const S = c.current,
        b = ho(S).getComputedStyle(S);
      if (b.width === "0px") return { outerHeightStyle: 0 };
      const k = f.current;
      (k.style.width = b.width),
        (k.value = S.value || t.placeholder || "x"),
        k.value.slice(-1) ===
          `
` && (k.value += " ");
      const R = b.boxSizing,
        T = gu(b.paddingBottom) + gu(b.paddingTop),
        $ = gu(b.borderBottomWidth) + gu(b.borderTopWidth),
        M = k.scrollHeight;
      k.value = "x";
      const L = k.scrollHeight;
      let _ = M;
      i && (_ = Math.max(Number(i) * L, _)),
        o && (_ = Math.min(Number(o) * L, _)),
        (_ = Math.max(_, L));
      const N = _ + (R === "border-box" ? T + $ : 0),
        A = Math.abs(_ - M) <= 1;
      return { outerHeightStyle: N, overflow: A };
    }, [o, i, t.placeholder]),
    v = (S, E) => {
      const { outerHeightStyle: b, overflow: k } = E;
      return h.current < 20 &&
        ((b > 0 && Math.abs((S.outerHeightStyle || 0) - b) > 1) ||
          S.overflow !== k)
        ? ((h.current += 1), { overflow: k, outerHeightStyle: b })
        : S;
    },
    m = y.useCallback(() => {
      const S = w();
      Hy(S) || g((E) => v(E, S));
    }, [w]);
  fn(() => {
    const S = () => {
        const M = w();
        Hy(M) ||
          yo.flushSync(() => {
            g((L) => v(L, M));
          });
      },
      E = () => {
        (h.current = 0), S();
      };
    let b;
    const k = AS(E),
      R = c.current,
      T = ho(R);
    T.addEventListener("resize", k);
    let $;
    return (
      typeof ResizeObserver < "u" &&
        (($ = new ResizeObserver(E)), $.observe(R)),
      () => {
        k.clear(),
          cancelAnimationFrame(b),
          T.removeEventListener("resize", k),
          $ && $.disconnect();
      }
    );
  }, [w]),
    fn(() => {
      m();
    }),
    y.useEffect(() => {
      h.current = 0;
    }, [s]);
  const x = (S) => {
    (h.current = 0), u || m(), r && r(S);
  };
  return C.jsxs(y.Fragment, {
    children: [
      C.jsx(
        "textarea",
        P(
          {
            value: s,
            onChange: x,
            ref: d,
            rows: i,
            style: P(
              {
                height: p.outerHeightStyle,
                overflow: p.overflow ? "hidden" : void 0,
              },
              a
            ),
          },
          l
        )
      ),
      C.jsx("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: f,
        tabIndex: -1,
        style: P({}, L_.shadow, a, { paddingTop: 0, paddingBottom: 0 }),
      }),
    ],
  });
});
function $a({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {}
  );
}
const D_ = y.createContext(void 0),
  Og = D_;
function Ma() {
  return y.useContext(Og);
}
function F_(e) {
  return C.jsx(s5, P({}, e, { defaultTheme: Kd, themeId: Bl }));
}
function Vy(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Rc(e, t = !1) {
  return (
    e &&
    ((Vy(e.value) && e.value !== "") ||
      (t && Vy(e.defaultValue) && e.defaultValue !== ""))
  );
}
function z_(e) {
  return e.startAdornment;
}
function B_(e) {
  return Le("MuiInputBase", e);
}
const U_ = Me("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  da = U_,
  W_ = [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "className",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disabled",
    "disableInjectingGlobalStyles",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onClick",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "rows",
    "size",
    "slotProps",
    "slots",
    "startAdornment",
    "type",
    "value",
  ],
  Yd = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${$e(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  Xd = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  H_ = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: a,
        formControl: s,
        fullWidth: l,
        hiddenLabel: u,
        multiline: c,
        readOnly: d,
        size: f,
        startAdornment: h,
        type: p,
      } = e,
      g = {
        root: [
          "root",
          `color${$e(n)}`,
          r && "disabled",
          o && "error",
          l && "fullWidth",
          a && "focused",
          s && "formControl",
          f && f !== "medium" && `size${$e(f)}`,
          c && "multiline",
          h && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          d && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          p === "search" && "inputTypeSearch",
          c && "inputMultiline",
          f === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          h && "inputAdornedStart",
          i && "inputAdornedEnd",
          d && "readOnly",
        ],
      };
    return Ie(g, B_, t);
  },
  qd = le("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Yd })(
    ({ theme: e, ownerState: t }) =>
      P(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${da.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          P({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" }
      )
  ),
  Qd = le("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Xd,
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light",
      r = P(
        { color: "currentColor" },
        e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 },
        {
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        }
      ),
      o = { opacity: "0 !important" },
      i = e.vars
        ? { opacity: e.vars.opacity.inputPlaceholder }
        : { opacity: n ? 0.42 : 0.5 };
    return P(
      {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&:-ms-input-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${da.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&:-ms-input-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": i,
          "&:focus::-moz-placeholder": i,
          "&:focus:-ms-input-placeholder": i,
          "&:focus::-ms-input-placeholder": i,
        },
        [`&.${da.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill",
        },
      },
      t.size === "small" && { paddingTop: 1 },
      t.multiline && {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0,
      },
      t.type === "search" && { MozAppearance: "textfield" }
    );
  }),
  V_ = C.jsx(F_, {
    styles: {
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    },
  }),
  K_ = y.forwardRef(function (t, n) {
    var r;
    const o = Be({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": i,
        autoComplete: a,
        autoFocus: s,
        className: l,
        components: u = {},
        componentsProps: c = {},
        defaultValue: d,
        disabled: f,
        disableInjectingGlobalStyles: h,
        endAdornment: p,
        fullWidth: g = !1,
        id: w,
        inputComponent: v = "input",
        inputProps: m = {},
        inputRef: x,
        maxRows: S,
        minRows: E,
        multiline: b = !1,
        name: k,
        onBlur: R,
        onChange: T,
        onClick: $,
        onFocus: M,
        onKeyDown: L,
        onKeyUp: _,
        placeholder: N,
        readOnly: A,
        renderSuffix: D,
        rows: F,
        slotProps: O = {},
        slots: j = {},
        startAdornment: U,
        type: X = "text",
        value: Y,
      } = o,
      ce = ie(o, W_),
      Q = m.value != null ? m.value : Y,
      { current: q } = y.useRef(Q != null),
      ne = y.useRef(),
      ge = y.useCallback((Oe) => {}, []),
      we = Ct(ne, x, m.ref, ge),
      [H, re] = y.useState(!1),
      G = Ma(),
      B = $a({
        props: o,
        muiFormControl: G,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (B.focused = G ? G.focused : H),
      y.useEffect(() => {
        !G && f && H && (re(!1), R && R());
      }, [G, f, H, R]);
    const ae = G && G.onFilled,
      oe = G && G.onEmpty,
      pe = y.useCallback(
        (Oe) => {
          Rc(Oe) ? ae && ae() : oe && oe();
        },
        [ae, oe]
      );
    fn(() => {
      q && pe({ value: Q });
    }, [Q, pe, q]);
    const je = (Oe) => {
        if (B.disabled) {
          Oe.stopPropagation();
          return;
        }
        M && M(Oe),
          m.onFocus && m.onFocus(Oe),
          G && G.onFocus ? G.onFocus(Oe) : re(!0);
      },
      We = (Oe) => {
        R && R(Oe),
          m.onBlur && m.onBlur(Oe),
          G && G.onBlur ? G.onBlur(Oe) : re(!1);
      },
      ht = (Oe, ...ue) => {
        if (!q) {
          const gn = Oe.target || ne.current;
          if (gn == null) throw new Error(po(1));
          pe({ value: gn.value });
        }
        m.onChange && m.onChange(Oe, ...ue), T && T(Oe, ...ue);
      };
    y.useEffect(() => {
      pe(ne.current);
    }, []);
    const Dt = (Oe) => {
      ne.current && Oe.currentTarget === Oe.target && ne.current.focus(),
        $ && $(Oe);
    };
    let tt = v,
      Re = m;
    b &&
      tt === "input" &&
      (F
        ? (Re = P({ type: void 0, minRows: F, maxRows: F }, Re))
        : (Re = P({ type: void 0, maxRows: S, minRows: E }, Re)),
      (tt = j_));
    const Ft = (Oe) => {
      pe(
        Oe.animationName === "mui-auto-fill-cancel"
          ? ne.current
          : { value: "x" }
      );
    };
    y.useEffect(() => {
      G && G.setAdornedStart(!!U);
    }, [G, U]);
    const lt = P({}, o, {
        color: B.color || "primary",
        disabled: B.disabled,
        endAdornment: p,
        error: B.error,
        focused: B.focused,
        formControl: G,
        fullWidth: g,
        hiddenLabel: B.hiddenLabel,
        multiline: b,
        size: B.size,
        startAdornment: U,
        type: X,
      }),
      ke = H_(lt),
      mt = j.root || u.Root || qd,
      Kt = O.root || c.root || {},
      Pt = j.input || u.Input || Qd;
    return (
      (Re = P({}, Re, (r = O.input) != null ? r : c.input)),
      C.jsxs(y.Fragment, {
        children: [
          !h && V_,
          C.jsxs(
            mt,
            P(
              {},
              Kt,
              !Pc(mt) && { ownerState: P({}, lt, Kt.ownerState) },
              { ref: n, onClick: Dt },
              ce,
              {
                className: ve(
                  ke.root,
                  Kt.className,
                  l,
                  A && "MuiInputBase-readOnly"
                ),
                children: [
                  U,
                  C.jsx(Og.Provider, {
                    value: null,
                    children: C.jsx(
                      Pt,
                      P(
                        {
                          ownerState: lt,
                          "aria-invalid": B.error,
                          "aria-describedby": i,
                          autoComplete: a,
                          autoFocus: s,
                          defaultValue: d,
                          disabled: B.disabled,
                          id: w,
                          onAnimationStart: Ft,
                          name: k,
                          placeholder: N,
                          readOnly: A,
                          required: B.required,
                          rows: F,
                          value: Q,
                          onKeyDown: L,
                          onKeyUp: _,
                          type: X,
                        },
                        Re,
                        !Pc(Pt) && {
                          as: tt,
                          ownerState: P({}, lt, Re.ownerState),
                        },
                        {
                          ref: we,
                          className: ve(
                            ke.input,
                            Re.className,
                            A && "MuiInputBase-readOnly"
                          ),
                          onBlur: We,
                          onChange: ht,
                          onFocus: je,
                        }
                      )
                    ),
                  }),
                  p,
                  D ? D(P({}, B, { startAdornment: U })) : null,
                ],
              }
            )
          ),
        ],
      })
    );
  }),
  Ag = K_;
function G_(e) {
  return Le("MuiInput", e);
}
const Y_ = P({}, da, Me("MuiInput", ["root", "underline", "input"])),
  Qa = Y_,
  X_ = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  q_ = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = Ie({ root: ["root", !n && "underline"], input: ["input"] }, G_, t);
    return P({}, t, o);
  },
  Q_ = le(qd, {
    shouldForwardProp: (e) => Dn(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Yd(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    let r =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.42)"
        : "rgba(255, 255, 255, 0.7)";
    return (
      e.vars &&
        (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      P(
        { position: "relative" },
        t.formControl && { "label + &": { marginTop: 16 } },
        !t.disableUnderline && {
          "&::after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: "none",
          },
          [`&.${Qa.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${Qa.error}`]: {
            "&::before, &::after": {
              borderBottomColor: (e.vars || e).palette.error.main,
            },
          },
          "&::before": {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: "none",
          },
          [`&:hover:not(.${Qa.disabled}, .${Qa.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": { borderBottom: `1px solid ${r}` },
          },
          [`&.${Qa.disabled}:before`]: { borderBottomStyle: "dotted" },
        }
      )
    );
  }),
  Z_ = le(Qd, { name: "MuiInput", slot: "Input", overridesResolver: Xd })({}),
  xC = y.forwardRef(function (t, n) {
    var r, o, i, a;
    const s = Be({ props: t, name: "MuiInput" }),
      {
        disableUnderline: l,
        components: u = {},
        componentsProps: c,
        fullWidth: d = !1,
        inputComponent: f = "input",
        multiline: h = !1,
        slotProps: p,
        slots: g = {},
        type: w = "text",
      } = s,
      v = ie(s, X_),
      m = q_(s),
      S = { root: { ownerState: { disableUnderline: l } } },
      E = p ?? c ? Tn(p ?? c, S) : S,
      b = (r = (o = g.root) != null ? o : u.Root) != null ? r : Q_,
      k = (i = (a = g.input) != null ? a : u.Input) != null ? i : Z_;
    return C.jsx(
      Ag,
      P(
        {
          slots: { root: b, input: k },
          slotProps: E,
          fullWidth: d,
          inputComponent: f,
          multiline: h,
          ref: n,
          type: w,
        },
        v,
        { classes: m }
      )
    );
  });
xC.muiName = "Input";
const bC = xC;
function J_(e) {
  return Le("MuiFilledInput", e);
}
const eI = P({}, da, Me("MuiFilledInput", ["root", "underline", "input"])),
  Co = eI,
  tI = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "hiddenLabel",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  nI = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = Ie({ root: ["root", !n && "underline"], input: ["input"] }, J_, t);
    return P({}, t, o);
  },
  rI = le(qd, {
    shouldForwardProp: (e) => Dn(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Yd(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    const r = e.palette.mode === "light",
      o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
      i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
      a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
      s = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return P(
      {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
        },
        [`&.${Co.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        },
        [`&.${Co.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s,
        },
      },
      !t.disableUnderline && {
        "&::after": {
          borderBottom: `2px solid ${
            (n = (e.vars || e).palette[t.color || "primary"]) == null
              ? void 0
              : n.main
          }`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          pointerEvents: "none",
        },
        [`&.${Co.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
        [`&.${Co.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main,
          },
        },
        "&::before": {
          borderBottom: `1px solid ${
            e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
              : o
          }`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter,
          }),
          pointerEvents: "none",
        },
        [`&:hover:not(.${Co.disabled}, .${Co.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
        },
        [`&.${Co.disabled}:before`]: { borderBottomStyle: "dotted" },
      },
      t.startAdornment && { paddingLeft: 12 },
      t.endAdornment && { paddingRight: 12 },
      t.multiline &&
        P(
          { padding: "25px 12px 8px" },
          t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
          t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          t.hiddenLabel &&
            t.size === "small" && { paddingTop: 8, paddingBottom: 9 }
        )
    );
  }),
  oI = le(Qd, { name: "MuiFilledInput", slot: "Input", overridesResolver: Xd })(
    ({ theme: e, ownerState: t }) =>
      P(
        { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
        !e.vars && {
          "&:-webkit-autofill": {
            WebkitBoxShadow:
              e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
        },
        e.vars && {
          "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
          [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            },
          },
        },
        t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
        t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
        t.hiddenLabel &&
          t.size === "small" && { paddingTop: 8, paddingBottom: 9 },
        t.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }
      )
  ),
  wC = y.forwardRef(function (t, n) {
    var r, o, i, a;
    const s = Be({ props: t, name: "MuiFilledInput" }),
      {
        components: l = {},
        componentsProps: u,
        fullWidth: c = !1,
        inputComponent: d = "input",
        multiline: f = !1,
        slotProps: h,
        slots: p = {},
        type: g = "text",
      } = s,
      w = ie(s, tI),
      v = P({}, s, { fullWidth: c, inputComponent: d, multiline: f, type: g }),
      m = nI(s),
      x = { root: { ownerState: v }, input: { ownerState: v } },
      S = h ?? u ? Tn(x, h ?? u) : x,
      E = (r = (o = p.root) != null ? o : l.Root) != null ? r : rI,
      b = (i = (a = p.input) != null ? a : l.Input) != null ? i : oI;
    return C.jsx(
      Ag,
      P(
        {
          slots: { root: E, input: b },
          componentsProps: S,
          fullWidth: c,
          inputComponent: d,
          multiline: f,
          ref: n,
          type: g,
        },
        w,
        { classes: m }
      )
    );
  });
wC.muiName = "Input";
const SC = wC;
var Ky;
const iI = ["children", "classes", "className", "label", "notched"],
  aI = le("fieldset", { shouldForwardProp: Dn })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  sI = le("legend", { shouldForwardProp: Dn })(({ ownerState: e, theme: t }) =>
    P(
      { float: "unset", width: "auto", overflow: "hidden" },
      !e.withLabel && {
        padding: 0,
        lineHeight: "11px",
        transition: t.transitions.create("width", {
          duration: 150,
          easing: t.transitions.easing.easeOut,
        }),
      },
      e.withLabel &&
        P(
          {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: t.transitions.create("max-width", {
              duration: 50,
              easing: t.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
          e.notched && {
            maxWidth: "100%",
            transition: t.transitions.create("max-width", {
              duration: 100,
              easing: t.transitions.easing.easeOut,
              delay: 50,
            }),
          }
        )
    )
  );
function lI(e) {
  const { className: t, label: n, notched: r } = e,
    o = ie(e, iI),
    i = n != null && n !== "",
    a = P({}, e, { notched: r, withLabel: i });
  return C.jsx(
    aI,
    P({ "aria-hidden": !0, className: t, ownerState: a }, o, {
      children: C.jsx(sI, {
        ownerState: a,
        children: i
          ? C.jsx("span", { children: n })
          : Ky ||
            (Ky = C.jsx("span", { className: "notranslate", children: "​" })),
      }),
    })
  );
}
function uI(e) {
  return Le("MuiOutlinedInput", e);
}
const cI = P(
    {},
    da,
    Me("MuiOutlinedInput", ["root", "notchedOutline", "input"])
  ),
  Ur = cI,
  dI = [
    "components",
    "fullWidth",
    "inputComponent",
    "label",
    "multiline",
    "notched",
    "slots",
    "type",
  ],
  fI = (e) => {
    const { classes: t } = e,
      r = Ie(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        uI,
        t
      );
    return P({}, t, r);
  },
  pI = le(qd, {
    shouldForwardProp: (e) => Dn(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Yd,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return P(
      {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${Ur.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${Ur.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : n,
          },
        },
        [`&.${Ur.focused} .${Ur.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[t.color].main,
          borderWidth: 2,
        },
        [`&.${Ur.error} .${Ur.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main,
        },
        [`&.${Ur.disabled} .${Ur.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled,
        },
      },
      t.startAdornment && { paddingLeft: 14 },
      t.endAdornment && { paddingRight: 14 },
      t.multiline &&
        P(
          { padding: "16.5px 14px" },
          t.size === "small" && { padding: "8.5px 14px" }
        )
    );
  }),
  hI = le(lI, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(({ theme: e }) => {
    const t =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: e.vars
        ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
        : t,
    };
  }),
  mI = le(Qd, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Xd,
  })(({ theme: e, ownerState: t }) =>
    P(
      { padding: "16.5px 14px" },
      !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      },
      e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      },
      t.size === "small" && { padding: "8.5px 14px" },
      t.multiline && { padding: 0 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 }
    )
  ),
  CC = y.forwardRef(function (t, n) {
    var r, o, i, a, s;
    const l = Be({ props: t, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: c = !1,
        inputComponent: d = "input",
        label: f,
        multiline: h = !1,
        notched: p,
        slots: g = {},
        type: w = "text",
      } = l,
      v = ie(l, dI),
      m = fI(l),
      x = Ma(),
      S = $a({
        props: l,
        muiFormControl: x,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      E = P({}, l, {
        color: S.color || "primary",
        disabled: S.disabled,
        error: S.error,
        focused: S.focused,
        formControl: x,
        fullWidth: c,
        hiddenLabel: S.hiddenLabel,
        multiline: h,
        size: S.size,
        type: w,
      }),
      b = (r = (o = g.root) != null ? o : u.Root) != null ? r : pI,
      k = (i = (a = g.input) != null ? a : u.Input) != null ? i : mI;
    return C.jsx(
      Ag,
      P(
        {
          slots: { root: b, input: k },
          renderSuffix: (R) =>
            C.jsx(hI, {
              ownerState: E,
              className: m.notchedOutline,
              label:
                f != null && f !== "" && S.required
                  ? s || (s = C.jsxs(y.Fragment, { children: [f, " ", "*"] }))
                  : f,
              notched:
                typeof p < "u"
                  ? p
                  : !!(R.startAdornment || R.filled || R.focused),
            }),
          fullWidth: c,
          inputComponent: d,
          multiline: h,
          ref: n,
          type: w,
        },
        v,
        { classes: P({}, m, { notchedOutline: null }) }
      )
    );
  });
CC.muiName = "Input";
const kC = CC;
function gI(e) {
  return Le("MuiFormLabel", e);
}
const vI = Me("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  Ns = vI,
  yI = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "required",
  ],
  xI = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: a,
        required: s,
      } = e,
      l = {
        root: [
          "root",
          `color${$e(n)}`,
          o && "disabled",
          i && "error",
          a && "filled",
          r && "focused",
          s && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return Ie(l, gI, t);
  },
  bI = le("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      P(
        {},
        t.root,
        e.color === "secondary" && t.colorSecondary,
        e.filled && t.filled
      ),
  })(({ theme: e, ownerState: t }) =>
    P({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      [`&.${Ns.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${Ns.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${Ns.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  wI = le("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${Ns.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  SI = y.forwardRef(function (t, n) {
    const r = Be({ props: t, name: "MuiFormLabel" }),
      { children: o, className: i, component: a = "label" } = r,
      s = ie(r, yI),
      l = Ma(),
      u = $a({
        props: r,
        muiFormControl: l,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      c = P({}, r, {
        color: u.color || "primary",
        component: a,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      d = xI(c);
    return C.jsxs(
      bI,
      P({ as: a, ownerState: c, className: ve(d.root, i), ref: n }, s, {
        children: [
          o,
          u.required &&
            C.jsxs(wI, {
              ownerState: c,
              "aria-hidden": !0,
              className: d.asterisk,
              children: [" ", "*"],
            }),
        ],
      })
    );
  }),
  CI = SI;
function kI(e) {
  return Le("MuiInputLabel", e);
}
Me("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const EI = ["disableAnimation", "margin", "shrink", "variant", "className"],
  PI = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: a,
        required: s,
      } = e,
      l = {
        root: [
          "root",
          n && "formControl",
          !i && "animated",
          o && "shrink",
          r && r !== "normal" && `size${$e(r)}`,
          a,
        ],
        asterisk: [s && "asterisk"],
      },
      u = Ie(l, kI, t);
    return P({}, t, u);
  },
  RI = le(CI, {
    shouldForwardProp: (e) => Dn(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Ns.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    P(
      {
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      },
      t.formControl && {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0, 20px) scale(1)",
      },
      t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
      t.shrink && {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%",
      },
      !t.disableAnimation && {
        transition: e.transitions.create(["color", "transform", "max-width"], {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
      },
      t.variant === "filled" &&
        P(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(12px, 13px) scale(1)" },
          t.shrink &&
            P(
              {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)",
              },
              t.size === "small" && {
                transform: "translate(12px, 4px) scale(0.75)",
              }
            )
        ),
      t.variant === "outlined" &&
        P(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(14px, 9px) scale(1)" },
          t.shrink && {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          }
        )
    )
  ),
  $I = y.forwardRef(function (t, n) {
    const r = Be({ name: "MuiInputLabel", props: t }),
      { disableAnimation: o = !1, shrink: i, className: a } = r,
      s = ie(r, EI),
      l = Ma();
    let u = i;
    typeof u > "u" && l && (u = l.filled || l.focused || l.adornedStart);
    const c = $a({
        props: r,
        muiFormControl: l,
        states: ["size", "variant", "required", "focused"],
      }),
      d = P({}, r, {
        disableAnimation: o,
        formControl: l,
        shrink: u,
        size: c.size,
        variant: c.variant,
        required: c.required,
        focused: c.focused,
      }),
      f = PI(d);
    return C.jsx(
      RI,
      P(
        { "data-shrink": u, ownerState: d, ref: n, className: ve(f.root, a) },
        s,
        { classes: f }
      )
    );
  }),
  cl = $I;
function MI(e) {
  return Le("MuiFormControl", e);
}
Me("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const TI = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  NI = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = {
        root: ["root", n !== "none" && `margin${$e(n)}`, r && "fullWidth"],
      };
    return Ie(o, MI, t);
  },
  OI = le("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      P({}, t.root, t[`margin${$e(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    P(
      {
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
      },
      e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
      e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: "100%" }
    )
  ),
  AI = y.forwardRef(function (t, n) {
    const r = Be({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: a = "primary",
        component: s = "div",
        disabled: l = !1,
        error: u = !1,
        focused: c,
        fullWidth: d = !1,
        hiddenLabel: f = !1,
        margin: h = "none",
        required: p = !1,
        size: g = "medium",
        variant: w = "outlined",
      } = r,
      v = ie(r, TI),
      m = P({}, r, {
        color: a,
        component: s,
        disabled: l,
        error: u,
        fullWidth: d,
        hiddenLabel: f,
        margin: h,
        required: p,
        size: g,
        variant: w,
      }),
      x = NI(m),
      [S, E] = y.useState(() => {
        let _ = !1;
        return (
          o &&
            y.Children.forEach(o, (N) => {
              if (!np(N, ["Input", "Select"])) return;
              const A = np(N, ["Select"]) ? N.props.input : N;
              A && z_(A.props) && (_ = !0);
            }),
          _
        );
      }),
      [b, k] = y.useState(() => {
        let _ = !1;
        return (
          o &&
            y.Children.forEach(o, (N) => {
              np(N, ["Input", "Select"]) &&
                (Rc(N.props, !0) || Rc(N.props.inputProps, !0)) &&
                (_ = !0);
            }),
          _
        );
      }),
      [R, T] = y.useState(!1);
    l && R && T(!1);
    const $ = c !== void 0 && !l ? c : R;
    let M;
    const L = y.useMemo(
      () => ({
        adornedStart: S,
        setAdornedStart: E,
        color: a,
        disabled: l,
        error: u,
        filled: b,
        focused: $,
        fullWidth: d,
        hiddenLabel: f,
        size: g,
        onBlur: () => {
          T(!1);
        },
        onEmpty: () => {
          k(!1);
        },
        onFilled: () => {
          k(!0);
        },
        onFocus: () => {
          T(!0);
        },
        registerEffect: M,
        required: p,
        variant: w,
      }),
      [S, a, l, u, b, $, d, f, M, p, g, w]
    );
    return C.jsx(Og.Provider, {
      value: L,
      children: C.jsx(
        OI,
        P({ as: s, ownerState: m, className: ve(x.root, i), ref: n }, v, {
          children: o,
        })
      ),
    });
  }),
  dl = AI;
function _I(e) {
  return Le("MuiFormHelperText", e);
}
const II = Me("MuiFormHelperText", [
    "root",
    "error",
    "disabled",
    "sizeSmall",
    "sizeMedium",
    "contained",
    "focused",
    "filled",
    "required",
  ]),
  Gy = II;
var Yy;
const LI = [
    "children",
    "className",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "margin",
    "required",
    "variant",
  ],
  jI = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: o,
        error: i,
        filled: a,
        focused: s,
        required: l,
      } = e,
      u = {
        root: [
          "root",
          o && "disabled",
          i && "error",
          r && `size${$e(r)}`,
          n && "contained",
          s && "focused",
          a && "filled",
          l && "required",
        ],
      };
    return Ie(u, _I, t);
  },
  DI = le("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size && t[`size${$e(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    P(
      { color: (e.vars || e).palette.text.secondary },
      e.typography.caption,
      {
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${Gy.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${Gy.error}`]: { color: (e.vars || e).palette.error.main },
      },
      t.size === "small" && { marginTop: 4 },
      t.contained && { marginLeft: 14, marginRight: 14 }
    )
  ),
  FI = y.forwardRef(function (t, n) {
    const r = Be({ props: t, name: "MuiFormHelperText" }),
      { children: o, className: i, component: a = "p" } = r,
      s = ie(r, LI),
      l = Ma(),
      u = $a({
        props: r,
        muiFormControl: l,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      c = P({}, r, {
        component: a,
        contained: u.variant === "filled" || u.variant === "outlined",
        variant: u.variant,
        size: u.size,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      d = jI(c);
    return C.jsx(
      DI,
      P({ as: a, ownerState: c, className: ve(d.root, i), ref: n }, s, {
        children:
          o === " "
            ? Yy ||
              (Yy = C.jsx("span", { className: "notranslate", children: "​" }))
            : o,
      })
    );
  }),
  zI = FI;
var Ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _g = Symbol.for("react.element"),
  Ig = Symbol.for("react.portal"),
  Zd = Symbol.for("react.fragment"),
  Jd = Symbol.for("react.strict_mode"),
  ef = Symbol.for("react.profiler"),
  tf = Symbol.for("react.provider"),
  nf = Symbol.for("react.context"),
  BI = Symbol.for("react.server_context"),
  rf = Symbol.for("react.forward_ref"),
  of = Symbol.for("react.suspense"),
  af = Symbol.for("react.suspense_list"),
  sf = Symbol.for("react.memo"),
  lf = Symbol.for("react.lazy"),
  UI = Symbol.for("react.offscreen"),
  EC;
EC = Symbol.for("react.module.reference");
function Fn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case _g:
        switch (((e = e.type), e)) {
          case Zd:
          case ef:
          case Jd:
          case of:
          case af:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case BI:
              case nf:
              case rf:
              case lf:
              case sf:
              case tf:
                return e;
              default:
                return t;
            }
        }
      case Ig:
        return t;
    }
  }
}
Ue.ContextConsumer = nf;
Ue.ContextProvider = tf;
Ue.Element = _g;
Ue.ForwardRef = rf;
Ue.Fragment = Zd;
Ue.Lazy = lf;
Ue.Memo = sf;
Ue.Portal = Ig;
Ue.Profiler = ef;
Ue.StrictMode = Jd;
Ue.Suspense = of;
Ue.SuspenseList = af;
Ue.isAsyncMode = function () {
  return !1;
};
Ue.isConcurrentMode = function () {
  return !1;
};
Ue.isContextConsumer = function (e) {
  return Fn(e) === nf;
};
Ue.isContextProvider = function (e) {
  return Fn(e) === tf;
};
Ue.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === _g;
};
Ue.isForwardRef = function (e) {
  return Fn(e) === rf;
};
Ue.isFragment = function (e) {
  return Fn(e) === Zd;
};
Ue.isLazy = function (e) {
  return Fn(e) === lf;
};
Ue.isMemo = function (e) {
  return Fn(e) === sf;
};
Ue.isPortal = function (e) {
  return Fn(e) === Ig;
};
Ue.isProfiler = function (e) {
  return Fn(e) === ef;
};
Ue.isStrictMode = function (e) {
  return Fn(e) === Jd;
};
Ue.isSuspense = function (e) {
  return Fn(e) === of;
};
Ue.isSuspenseList = function (e) {
  return Fn(e) === af;
};
Ue.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Zd ||
    e === ef ||
    e === Jd ||
    e === of ||
    e === af ||
    e === UI ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === lf ||
        e.$$typeof === sf ||
        e.$$typeof === tf ||
        e.$$typeof === nf ||
        e.$$typeof === rf ||
        e.$$typeof === EC ||
        e.getModuleId !== void 0))
  );
};
Ue.typeOf = Fn;
const WI = y.createContext({}),
  jh = WI;
function HI(e) {
  return Le("MuiList", e);
}
Me("MuiList", ["root", "padding", "dense", "subheader"]);
const VI = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  KI = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return Ie(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      HI,
      t
    );
  },
  GI = le("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    P(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  YI = y.forwardRef(function (t, n) {
    const r = Be({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: a = "ul",
        dense: s = !1,
        disablePadding: l = !1,
        subheader: u,
      } = r,
      c = ie(r, VI),
      d = y.useMemo(() => ({ dense: s }), [s]),
      f = P({}, r, { component: a, dense: s, disablePadding: l }),
      h = KI(f);
    return C.jsx(jh.Provider, {
      value: d,
      children: C.jsxs(
        GI,
        P({ as: a, className: ve(h.root, i), ref: n, ownerState: f }, c, {
          children: [u, o],
        })
      ),
    });
  }),
  XI = YI,
  qI = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function sp(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function Xy(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function PC(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.indexOf(t.keys.join("")) === 0
  );
}
function Za(e, t, n, r, o, i) {
  let a = !1,
    s = o(e, t, t ? n : !1);
  for (; s; ) {
    if (s === e.firstChild) {
      if (a) return !1;
      a = !0;
    }
    const l = r ? !1 : s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || !PC(s, i) || l) s = o(e, s, n);
    else return s.focus(), !0;
  }
  return !1;
}
const QI = y.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: a,
        className: s,
        disabledItemsFocusable: l = !1,
        disableListWrap: u = !1,
        onKeyDown: c,
        variant: d = "selectedMenu",
      } = t,
      f = ie(t, qI),
      h = y.useRef(null),
      p = y.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    fn(() => {
      o && h.current.focus();
    }, [o]),
      y.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (x, S) => {
            const E = !h.current.style.width;
            if (x.clientHeight < h.current.clientHeight && E) {
              const b = `${IS(Wt(x))}px`;
              (h.current.style[
                S.direction === "rtl" ? "paddingLeft" : "paddingRight"
              ] = b),
                (h.current.style.width = `calc(100% + ${b})`);
            }
            return h.current;
          },
        }),
        []
      );
    const g = (x) => {
        const S = h.current,
          E = x.key,
          b = Wt(S).activeElement;
        if (E === "ArrowDown") x.preventDefault(), Za(S, b, u, l, sp);
        else if (E === "ArrowUp") x.preventDefault(), Za(S, b, u, l, Xy);
        else if (E === "Home") x.preventDefault(), Za(S, null, u, l, sp);
        else if (E === "End") x.preventDefault(), Za(S, null, u, l, Xy);
        else if (E.length === 1) {
          const k = p.current,
            R = E.toLowerCase(),
            T = performance.now();
          k.keys.length > 0 &&
            (T - k.lastTime > 500
              ? ((k.keys = []), (k.repeating = !0), (k.previousKeyMatched = !0))
              : k.repeating && R !== k.keys[0] && (k.repeating = !1)),
            (k.lastTime = T),
            k.keys.push(R);
          const $ = b && !k.repeating && PC(b, k);
          k.previousKeyMatched && ($ || Za(S, b, !1, l, sp, k))
            ? x.preventDefault()
            : (k.previousKeyMatched = !1);
        }
        c && c(x);
      },
      w = Ct(h, n);
    let v = -1;
    y.Children.forEach(a, (x, S) => {
      if (!y.isValidElement(x)) {
        v === S && ((v += 1), v >= a.length && (v = -1));
        return;
      }
      x.props.disabled ||
        (((d === "selectedMenu" && x.props.selected) || v === -1) && (v = S)),
        v === S &&
          (x.props.disabled ||
            x.props.muiSkipListHighlight ||
            x.type.muiSkipListHighlight) &&
          ((v += 1), v >= a.length && (v = -1));
    });
    const m = y.Children.map(a, (x, S) => {
      if (S === v) {
        const E = {};
        return (
          i && (E.autoFocus = !0),
          x.props.tabIndex === void 0 &&
            d === "selectedMenu" &&
            (E.tabIndex = 0),
          y.cloneElement(x, E)
        );
      }
      return x;
    });
    return C.jsx(
      XI,
      P(
        {
          role: "menu",
          ref: w,
          className: s,
          onKeyDown: g,
          tabIndex: o ? 0 : -1,
        },
        f,
        { children: m }
      )
    );
  }),
  ZI = QI;
function jr() {
  const e = Hd(Kd);
  return e[Bl] || e;
}
const RC = (e) => e.scrollTop;
function $c(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: a = {} } = e;
  return {
    duration:
      (n = a.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = a.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: a.transitionDelay,
  };
}
const JI = [
  "addEndListener",
  "appear",
  "children",
  "easing",
  "in",
  "onEnter",
  "onEntered",
  "onEntering",
  "onExit",
  "onExited",
  "onExiting",
  "style",
  "timeout",
  "TransitionComponent",
];
function Dh(e) {
  return `scale(${e}, ${e ** 2})`;
}
const e3 = {
    entering: { opacity: 1, transform: Dh(1) },
    entered: { opacity: 1, transform: "none" },
  },
  lp =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  $C = y.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: a,
        in: s,
        onEnter: l,
        onEntered: u,
        onEntering: c,
        onExit: d,
        onExited: f,
        onExiting: h,
        style: p,
        timeout: g = "auto",
        TransitionComponent: w = cC,
      } = t,
      v = ie(t, JI),
      m = _S(),
      x = y.useRef(),
      S = jr(),
      E = y.useRef(null),
      b = Ct(E, i.ref, n),
      k = (A) => (D) => {
        if (A) {
          const F = E.current;
          D === void 0 ? A(F) : A(F, D);
        }
      },
      R = k(c),
      T = k((A, D) => {
        RC(A);
        const {
          duration: F,
          delay: O,
          easing: j,
        } = $c({ style: p, timeout: g, easing: a }, { mode: "enter" });
        let U;
        g === "auto"
          ? ((U = S.transitions.getAutoHeightDuration(A.clientHeight)),
            (x.current = U))
          : (U = F),
          (A.style.transition = [
            S.transitions.create("opacity", { duration: U, delay: O }),
            S.transitions.create("transform", {
              duration: lp ? U : U * 0.666,
              delay: O,
              easing: j,
            }),
          ].join(",")),
          l && l(A, D);
      }),
      $ = k(u),
      M = k(h),
      L = k((A) => {
        const {
          duration: D,
          delay: F,
          easing: O,
        } = $c({ style: p, timeout: g, easing: a }, { mode: "exit" });
        let j;
        g === "auto"
          ? ((j = S.transitions.getAutoHeightDuration(A.clientHeight)),
            (x.current = j))
          : (j = D),
          (A.style.transition = [
            S.transitions.create("opacity", { duration: j, delay: F }),
            S.transitions.create("transform", {
              duration: lp ? j : j * 0.666,
              delay: lp ? F : F || j * 0.333,
              easing: O,
            }),
          ].join(",")),
          (A.style.opacity = 0),
          (A.style.transform = Dh(0.75)),
          d && d(A);
      }),
      _ = k(f),
      N = (A) => {
        g === "auto" && m.start(x.current || 0, A), r && r(E.current, A);
      };
    return C.jsx(
      w,
      P(
        {
          appear: o,
          in: s,
          nodeRef: E,
          onEnter: T,
          onEntered: $,
          onEntering: R,
          onExit: L,
          onExited: _,
          onExiting: M,
          addEndListener: N,
          timeout: g === "auto" ? null : g,
        },
        v,
        {
          children: (A, D) =>
            y.cloneElement(
              i,
              P(
                {
                  style: P(
                    {
                      opacity: 0,
                      transform: Dh(0.75),
                      visibility: A === "exited" && !s ? "hidden" : void 0,
                    },
                    e3[A],
                    p,
                    i.props.style
                  ),
                  ref: b,
                },
                D
              )
            ),
        }
      )
    );
  });
$C.muiSupportAuto = !0;
const t3 = $C,
  n3 = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  r3 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  o3 = y.forwardRef(function (t, n) {
    const r = jr(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: a = !0,
        children: s,
        easing: l,
        in: u,
        onEnter: c,
        onEntered: d,
        onEntering: f,
        onExit: h,
        onExited: p,
        onExiting: g,
        style: w,
        timeout: v = o,
        TransitionComponent: m = cC,
      } = t,
      x = ie(t, n3),
      S = y.useRef(null),
      E = Ct(S, s.ref, n),
      b = (N) => (A) => {
        if (N) {
          const D = S.current;
          A === void 0 ? N(D) : N(D, A);
        }
      },
      k = b(f),
      R = b((N, A) => {
        RC(N);
        const D = $c({ style: w, timeout: v, easing: l }, { mode: "enter" });
        (N.style.webkitTransition = r.transitions.create("opacity", D)),
          (N.style.transition = r.transitions.create("opacity", D)),
          c && c(N, A);
      }),
      T = b(d),
      $ = b(g),
      M = b((N) => {
        const A = $c({ style: w, timeout: v, easing: l }, { mode: "exit" });
        (N.style.webkitTransition = r.transitions.create("opacity", A)),
          (N.style.transition = r.transitions.create("opacity", A)),
          h && h(N);
      }),
      L = b(p),
      _ = (N) => {
        i && i(S.current, N);
      };
    return C.jsx(
      m,
      P(
        {
          appear: a,
          in: u,
          nodeRef: S,
          onEnter: R,
          onEntered: T,
          onEntering: k,
          onExit: M,
          onExited: L,
          onExiting: $,
          addEndListener: _,
          timeout: v,
        },
        x,
        {
          children: (N, A) =>
            y.cloneElement(
              s,
              P(
                {
                  style: P(
                    {
                      opacity: 0,
                      visibility: N === "exited" && !u ? "hidden" : void 0,
                    },
                    r3[N],
                    w,
                    s.props.style
                  ),
                  ref: E,
                },
                A
              )
            ),
        }
      )
    );
  }),
  i3 = o3;
function a3(e) {
  return Le("MuiBackdrop", e);
}
Me("MuiBackdrop", ["root", "invisible"]);
const s3 = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  l3 = (e) => {
    const { classes: t, invisible: n } = e;
    return Ie({ root: ["root", n && "invisible"] }, a3, t);
  },
  u3 = le("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    P(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  c3 = y.forwardRef(function (t, n) {
    var r, o, i;
    const a = Be({ props: t, name: "MuiBackdrop" }),
      {
        children: s,
        className: l,
        component: u = "div",
        components: c = {},
        componentsProps: d = {},
        invisible: f = !1,
        open: h,
        slotProps: p = {},
        slots: g = {},
        TransitionComponent: w = i3,
        transitionDuration: v,
      } = a,
      m = ie(a, s3),
      x = P({}, a, { component: u, invisible: f }),
      S = l3(x),
      E = (r = p.root) != null ? r : d.root;
    return C.jsx(
      w,
      P({ in: h, timeout: v }, m, {
        children: C.jsx(
          u3,
          P({ "aria-hidden": !0 }, E, {
            as: (o = (i = g.root) != null ? i : c.Root) != null ? o : u,
            className: ve(S.root, l, E == null ? void 0 : E.className),
            ownerState: P({}, x, E == null ? void 0 : E.ownerState),
            classes: S,
            ref: n,
            children: s,
          })
        ),
      })
    );
  }),
  d3 = c3;
function f3(e) {
  return Le("MuiModal", e);
}
Me("MuiModal", ["root", "hidden", "backdrop"]);
const p3 = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  h3 = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return Ie(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      f3,
      r
    );
  },
  m3 = le("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    P(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  g3 = le(d3, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  v3 = y.forwardRef(function (t, n) {
    var r, o, i, a, s, l;
    const u = Be({ name: "MuiModal", props: t }),
      {
        BackdropComponent: c = g3,
        BackdropProps: d,
        className: f,
        closeAfterTransition: h = !1,
        children: p,
        container: g,
        component: w,
        components: v = {},
        componentsProps: m = {},
        disableAutoFocus: x = !1,
        disableEnforceFocus: S = !1,
        disableEscapeKeyDown: E = !1,
        disablePortal: b = !1,
        disableRestoreFocus: k = !1,
        disableScrollLock: R = !1,
        hideBackdrop: T = !1,
        keepMounted: $ = !1,
        onBackdropClick: M,
        open: L,
        slotProps: _,
        slots: N,
      } = u,
      A = ie(u, p3),
      D = P({}, u, {
        closeAfterTransition: h,
        disableAutoFocus: x,
        disableEnforceFocus: S,
        disableEscapeKeyDown: E,
        disablePortal: b,
        disableRestoreFocus: k,
        disableScrollLock: R,
        hideBackdrop: T,
        keepMounted: $,
      }),
      {
        getRootProps: F,
        getBackdropProps: O,
        getTransitionProps: j,
        portalRef: U,
        isTopModal: X,
        exited: Y,
        hasTransition: ce,
      } = E_(P({}, D, { rootRef: n })),
      Q = P({}, D, { exited: Y }),
      q = h3(Q),
      ne = {};
    if ((p.props.tabIndex === void 0 && (ne.tabIndex = "-1"), ce)) {
      const { onEnter: ae, onExited: oe } = j();
      (ne.onEnter = ae), (ne.onExited = oe);
    }
    const ge =
        (r = (o = N == null ? void 0 : N.root) != null ? o : v.Root) != null
          ? r
          : m3,
      we =
        (i = (a = N == null ? void 0 : N.backdrop) != null ? a : v.Backdrop) !=
        null
          ? i
          : c,
      H = (s = _ == null ? void 0 : _.root) != null ? s : m.root,
      re = (l = _ == null ? void 0 : _.backdrop) != null ? l : m.backdrop,
      G = jt({
        elementType: ge,
        externalSlotProps: H,
        externalForwardedProps: A,
        getSlotProps: F,
        additionalProps: { ref: n, as: w },
        ownerState: Q,
        className: ve(
          f,
          H == null ? void 0 : H.className,
          q == null ? void 0 : q.root,
          !Q.open && Q.exited && (q == null ? void 0 : q.hidden)
        ),
      }),
      B = jt({
        elementType: we,
        externalSlotProps: re,
        additionalProps: d,
        getSlotProps: (ae) =>
          O(
            P({}, ae, {
              onClick: (oe) => {
                M && M(oe), ae != null && ae.onClick && ae.onClick(oe);
              },
            })
          ),
        className: ve(
          re == null ? void 0 : re.className,
          d == null ? void 0 : d.className,
          q == null ? void 0 : q.backdrop
        ),
        ownerState: Q,
      });
    return !$ && !L && (!ce || Y)
      ? null
      : C.jsx(gC, {
          ref: U,
          container: g,
          disablePortal: b,
          children: C.jsxs(
            ge,
            P({}, G, {
              children: [
                !T && c ? C.jsx(we, P({}, B)) : null,
                C.jsx(m_, {
                  disableEnforceFocus: S,
                  disableAutoFocus: x,
                  disableRestoreFocus: k,
                  isEnabled: X,
                  open: L,
                  children: y.cloneElement(p, ne),
                }),
              ],
            })
          ),
        });
  }),
  y3 = v3,
  qy = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  };
function x3(e) {
  return Le("MuiPaper", e);
}
Me("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const b3 = ["className", "component", "elevation", "square", "variant"],
  w3 = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return Ie(i, x3, o);
  },
  S3 = le("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return P(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        P(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${ir(
                "#fff",
                qy(t.elevation)
              )}, ${ir("#fff", qy(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  C3 = y.forwardRef(function (t, n) {
    const r = Be({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: a = 1,
        square: s = !1,
        variant: l = "elevation",
      } = r,
      u = ie(r, b3),
      c = P({}, r, { component: i, elevation: a, square: s, variant: l }),
      d = w3(c);
    return C.jsx(
      S3,
      P({ as: i, ownerState: c, className: ve(d.root, o), ref: n }, u)
    );
  }),
  k3 = C3;
function E3(e) {
  return Le("MuiPopover", e);
}
Me("MuiPopover", ["root", "paper"]);
const P3 = ["onEntering"],
  R3 = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "slots",
    "slotProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
    "disableScrollLock",
  ],
  $3 = ["slotProps"];
function Qy(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  );
}
function Zy(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  );
}
function Jy(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function up(e) {
  return typeof e == "function" ? e() : e;
}
const M3 = (e) => {
    const { classes: t } = e;
    return Ie({ root: ["root"], paper: ["paper"] }, E3, t);
  },
  T3 = le(y3, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  MC = le(k3, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  N3 = y.forwardRef(function (t, n) {
    var r, o, i;
    const a = Be({ props: t, name: "MuiPopover" }),
      {
        action: s,
        anchorEl: l,
        anchorOrigin: u = { vertical: "top", horizontal: "left" },
        anchorPosition: c,
        anchorReference: d = "anchorEl",
        children: f,
        className: h,
        container: p,
        elevation: g = 8,
        marginThreshold: w = 16,
        open: v,
        PaperProps: m = {},
        slots: x,
        slotProps: S,
        transformOrigin: E = { vertical: "top", horizontal: "left" },
        TransitionComponent: b = t3,
        transitionDuration: k = "auto",
        TransitionProps: { onEntering: R } = {},
        disableScrollLock: T = !1,
      } = a,
      $ = ie(a.TransitionProps, P3),
      M = ie(a, R3),
      L = (r = S == null ? void 0 : S.paper) != null ? r : m,
      _ = y.useRef(),
      N = Ct(_, L.ref),
      A = P({}, a, {
        anchorOrigin: u,
        anchorReference: d,
        elevation: g,
        marginThreshold: w,
        externalPaperSlotProps: L,
        transformOrigin: E,
        TransitionComponent: b,
        transitionDuration: k,
        TransitionProps: $,
      }),
      D = M3(A),
      F = y.useCallback(() => {
        if (d === "anchorPosition") return c;
        const ae = up(l),
          pe = (
            ae && ae.nodeType === 1 ? ae : Wt(_.current).body
          ).getBoundingClientRect();
        return {
          top: pe.top + Qy(pe, u.vertical),
          left: pe.left + Zy(pe, u.horizontal),
        };
      }, [l, u.horizontal, u.vertical, c, d]),
      O = y.useCallback(
        (ae) => ({
          vertical: Qy(ae, E.vertical),
          horizontal: Zy(ae, E.horizontal),
        }),
        [E.horizontal, E.vertical]
      ),
      j = y.useCallback(
        (ae) => {
          const oe = { width: ae.offsetWidth, height: ae.offsetHeight },
            pe = O(oe);
          if (d === "none")
            return { top: null, left: null, transformOrigin: Jy(pe) };
          const je = F();
          let We = je.top - pe.vertical,
            ht = je.left - pe.horizontal;
          const Dt = We + oe.height,
            tt = ht + oe.width,
            Re = ho(up(l)),
            Ft = Re.innerHeight - w,
            lt = Re.innerWidth - w;
          if (w !== null && We < w) {
            const ke = We - w;
            (We -= ke), (pe.vertical += ke);
          } else if (w !== null && Dt > Ft) {
            const ke = Dt - Ft;
            (We -= ke), (pe.vertical += ke);
          }
          if (w !== null && ht < w) {
            const ke = ht - w;
            (ht -= ke), (pe.horizontal += ke);
          } else if (tt > lt) {
            const ke = tt - lt;
            (ht -= ke), (pe.horizontal += ke);
          }
          return {
            top: `${Math.round(We)}px`,
            left: `${Math.round(ht)}px`,
            transformOrigin: Jy(pe),
          };
        },
        [l, d, F, O, w]
      ),
      [U, X] = y.useState(v),
      Y = y.useCallback(() => {
        const ae = _.current;
        if (!ae) return;
        const oe = j(ae);
        oe.top !== null && (ae.style.top = oe.top),
          oe.left !== null && (ae.style.left = oe.left),
          (ae.style.transformOrigin = oe.transformOrigin),
          X(!0);
      }, [j]);
    y.useEffect(
      () => (
        T && window.addEventListener("scroll", Y),
        () => window.removeEventListener("scroll", Y)
      ),
      [l, T, Y]
    );
    const ce = (ae, oe) => {
        R && R(ae, oe), Y();
      },
      Q = () => {
        X(!1);
      };
    y.useEffect(() => {
      v && Y();
    }),
      y.useImperativeHandle(
        s,
        () =>
          v
            ? {
                updatePosition: () => {
                  Y();
                },
              }
            : null,
        [v, Y]
      ),
      y.useEffect(() => {
        if (!v) return;
        const ae = AS(() => {
            Y();
          }),
          oe = ho(l);
        return (
          oe.addEventListener("resize", ae),
          () => {
            ae.clear(), oe.removeEventListener("resize", ae);
          }
        );
      }, [l, v, Y]);
    let q = k;
    k === "auto" && !b.muiSupportAuto && (q = void 0);
    const ne = p || (l ? Wt(up(l)).body : void 0),
      ge = (o = x == null ? void 0 : x.root) != null ? o : T3,
      we = (i = x == null ? void 0 : x.paper) != null ? i : MC,
      H = jt({
        elementType: we,
        externalSlotProps: P({}, L, {
          style: U ? L.style : P({}, L.style, { opacity: 0 }),
        }),
        additionalProps: { elevation: g, ref: N },
        ownerState: A,
        className: ve(D.paper, L == null ? void 0 : L.className),
      }),
      re = jt({
        elementType: ge,
        externalSlotProps: (S == null ? void 0 : S.root) || {},
        externalForwardedProps: M,
        additionalProps: {
          ref: n,
          slotProps: { backdrop: { invisible: !0 } },
          container: ne,
          open: v,
        },
        ownerState: A,
        className: ve(D.root, h),
      }),
      { slotProps: G } = re,
      B = ie(re, $3);
    return C.jsx(
      ge,
      P({}, B, !Pc(ge) && { slotProps: G, disableScrollLock: T }, {
        children: C.jsx(
          b,
          P({ appear: !0, in: v, onEntering: ce, onExited: Q, timeout: q }, $, {
            children: C.jsx(we, P({}, H, { children: f })),
          })
        ),
      })
    );
  }),
  O3 = N3;
function A3(e) {
  return Le("MuiMenu", e);
}
Me("MuiMenu", ["root", "paper", "list"]);
const _3 = ["onEntering"],
  I3 = [
    "autoFocus",
    "children",
    "className",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
    "slots",
    "slotProps",
  ],
  L3 = { vertical: "top", horizontal: "right" },
  j3 = { vertical: "top", horizontal: "left" },
  D3 = (e) => {
    const { classes: t } = e;
    return Ie({ root: ["root"], paper: ["paper"], list: ["list"] }, A3, t);
  },
  F3 = le(O3, {
    shouldForwardProp: (e) => Dn(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  z3 = le(MC, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  B3 = le(ZI, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  U3 = y.forwardRef(function (t, n) {
    var r, o;
    const i = Be({ props: t, name: "MuiMenu" }),
      {
        autoFocus: a = !0,
        children: s,
        className: l,
        disableAutoFocusItem: u = !1,
        MenuListProps: c = {},
        onClose: d,
        open: f,
        PaperProps: h = {},
        PopoverClasses: p,
        transitionDuration: g = "auto",
        TransitionProps: { onEntering: w } = {},
        variant: v = "selectedMenu",
        slots: m = {},
        slotProps: x = {},
      } = i,
      S = ie(i.TransitionProps, _3),
      E = ie(i, I3),
      b = jr(),
      k = b.direction === "rtl",
      R = P({}, i, {
        autoFocus: a,
        disableAutoFocusItem: u,
        MenuListProps: c,
        onEntering: w,
        PaperProps: h,
        transitionDuration: g,
        TransitionProps: S,
        variant: v,
      }),
      T = D3(R),
      $ = a && !u && f,
      M = y.useRef(null),
      L = (j, U) => {
        M.current && M.current.adjustStyleForScrollbar(j, b), w && w(j, U);
      },
      _ = (j) => {
        j.key === "Tab" && (j.preventDefault(), d && d(j, "tabKeyDown"));
      };
    let N = -1;
    y.Children.map(s, (j, U) => {
      y.isValidElement(j) &&
        (j.props.disabled ||
          (((v === "selectedMenu" && j.props.selected) || N === -1) &&
            (N = U)));
    });
    const A = (r = m.paper) != null ? r : z3,
      D = (o = x.paper) != null ? o : h,
      F = jt({
        elementType: m.root,
        externalSlotProps: x.root,
        ownerState: R,
        className: [T.root, l],
      }),
      O = jt({
        elementType: A,
        externalSlotProps: D,
        ownerState: R,
        className: T.paper,
      });
    return C.jsx(
      F3,
      P(
        {
          onClose: d,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: k ? "right" : "left",
          },
          transformOrigin: k ? L3 : j3,
          slots: { paper: A, root: m.root },
          slotProps: { root: F, paper: O },
          open: f,
          ref: n,
          transitionDuration: g,
          TransitionProps: P({ onEntering: L }, S),
          ownerState: R,
        },
        E,
        {
          classes: p,
          children: C.jsx(
            B3,
            P(
              {
                onKeyDown: _,
                actions: M,
                autoFocus: a && (N === -1 || u),
                autoFocusItem: $,
                variant: v,
              },
              c,
              { className: ve(T.list, c.className), children: s }
            )
          ),
        }
      )
    );
  }),
  W3 = U3;
function H3(e) {
  return Le("MuiNativeSelect", e);
}
const V3 = Me("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  Lg = V3,
  K3 = [
    "className",
    "disabled",
    "error",
    "IconComponent",
    "inputRef",
    "variant",
  ],
  G3 = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: a,
      } = e,
      s = {
        select: ["select", n, r && "disabled", o && "multiple", a && "error"],
        icon: ["icon", `icon${$e(n)}`, i && "iconOpen", r && "disabled"],
      };
    return Ie(s, H3, t);
  },
  TC = ({ ownerState: e, theme: t }) =>
    P(
      {
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": P(
          {},
          t.vars
            ? {
                backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
              }
            : {
                backgroundColor:
                  t.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.05)",
              },
          { borderRadius: 0 }
        ),
        "&::-ms-expand": { display: "none" },
        [`&.${Lg.disabled}`]: { cursor: "default" },
        "&[multiple]": { height: "auto" },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        "&&&": { paddingRight: 24, minWidth: 16 },
      },
      e.variant === "filled" && { "&&&": { paddingRight: 32 } },
      e.variant === "outlined" && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
        "&&&": { paddingRight: 32 },
      }
    ),
  Y3 = le("select", {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: Dn,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${Lg.multiple}`]: t.multiple },
      ];
    },
  })(TC),
  NC = ({ ownerState: e, theme: t }) =>
    P(
      {
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${Lg.disabled}`]: { color: (t.vars || t).palette.action.disabled },
      },
      e.open && { transform: "rotate(180deg)" },
      e.variant === "filled" && { right: 7 },
      e.variant === "outlined" && { right: 7 }
    ),
  X3 = le("svg", {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${$e(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(NC),
  q3 = y.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: a,
        inputRef: s,
        variant: l = "standard",
      } = t,
      u = ie(t, K3),
      c = P({}, t, { disabled: o, variant: l, error: i }),
      d = G3(c);
    return C.jsxs(y.Fragment, {
      children: [
        C.jsx(
          Y3,
          P(
            {
              ownerState: c,
              className: ve(d.select, r),
              disabled: o,
              ref: s || n,
            },
            u
          )
        ),
        t.multiple
          ? null
          : C.jsx(X3, { as: a, ownerState: c, className: d.icon }),
      ],
    });
  }),
  Q3 = q3;
function Z3(e) {
  return Le("MuiSelect", e);
}
const Ja = Me("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var e1;
const J3 = [
    "aria-describedby",
    "aria-label",
    "autoFocus",
    "autoWidth",
    "children",
    "className",
    "defaultOpen",
    "defaultValue",
    "disabled",
    "displayEmpty",
    "error",
    "IconComponent",
    "inputRef",
    "labelId",
    "MenuProps",
    "multiple",
    "name",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "type",
    "value",
    "variant",
  ],
  eL = le("div", {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${Ja.select}`]: t.select },
        { [`&.${Ja.select}`]: t[n.variant] },
        { [`&.${Ja.error}`]: t.error },
        { [`&.${Ja.multiple}`]: t.multiple },
      ];
    },
  })(TC, {
    [`&.${Ja.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  tL = le("svg", {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${$e(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(NC),
  nL = le("input", {
    shouldForwardProp: (e) => gA(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function t1(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function rL(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const oL = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: a,
      } = e,
      s = {
        select: ["select", n, r && "disabled", o && "multiple", a && "error"],
        icon: ["icon", `icon${$e(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return Ie(s, Z3, t);
  },
  iL = y.forwardRef(function (t, n) {
    var r;
    const {
        "aria-describedby": o,
        "aria-label": i,
        autoFocus: a,
        autoWidth: s,
        children: l,
        className: u,
        defaultOpen: c,
        defaultValue: d,
        disabled: f,
        displayEmpty: h,
        error: p = !1,
        IconComponent: g,
        inputRef: w,
        labelId: v,
        MenuProps: m = {},
        multiple: x,
        name: S,
        onBlur: E,
        onChange: b,
        onClose: k,
        onFocus: R,
        onOpen: T,
        open: $,
        readOnly: M,
        renderValue: L,
        SelectDisplayProps: _ = {},
        tabIndex: N,
        value: A,
        variant: D = "standard",
      } = t,
      F = ie(t, J3),
      [O, j] = gy({ controlled: A, default: d, name: "Select" }),
      [U, X] = gy({ controlled: $, default: c, name: "Select" }),
      Y = y.useRef(null),
      ce = y.useRef(null),
      [Q, q] = y.useState(null),
      { current: ne } = y.useRef($ != null),
      [ge, we] = y.useState(),
      H = Ct(n, w),
      re = y.useCallback((fe) => {
        (ce.current = fe), fe && q(fe);
      }, []),
      G = Q == null ? void 0 : Q.parentNode;
    y.useImperativeHandle(
      H,
      () => ({
        focus: () => {
          ce.current.focus();
        },
        node: Y.current,
        value: O,
      }),
      [O]
    ),
      y.useEffect(() => {
        c &&
          U &&
          Q &&
          !ne &&
          (we(s ? null : G.clientWidth), ce.current.focus());
      }, [Q, s]),
      y.useEffect(() => {
        a && ce.current.focus();
      }, [a]),
      y.useEffect(() => {
        if (!v) return;
        const fe = Wt(ce.current).getElementById(v);
        if (fe) {
          const ze = () => {
            getSelection().isCollapsed && ce.current.focus();
          };
          return (
            fe.addEventListener("click", ze),
            () => {
              fe.removeEventListener("click", ze);
            }
          );
        }
      }, [v]);
    const B = (fe, ze) => {
        fe ? T && T(ze) : k && k(ze),
          ne || (we(s ? null : G.clientWidth), X(fe));
      },
      ae = (fe) => {
        fe.button === 0 && (fe.preventDefault(), ce.current.focus(), B(!0, fe));
      },
      oe = (fe) => {
        B(!1, fe);
      },
      pe = y.Children.toArray(l),
      je = (fe) => {
        const ze = pe.find((nt) => nt.props.value === fe.target.value);
        ze !== void 0 && (j(ze.props.value), b && b(fe, ze));
      },
      We = (fe) => (ze) => {
        let nt;
        if (ze.currentTarget.hasAttribute("tabindex")) {
          if (x) {
            nt = Array.isArray(O) ? O.slice() : [];
            const mr = O.indexOf(fe.props.value);
            mr === -1 ? nt.push(fe.props.value) : nt.splice(mr, 1);
          } else nt = fe.props.value;
          if (
            (fe.props.onClick && fe.props.onClick(ze), O !== nt && (j(nt), b))
          ) {
            const mr = ze.nativeEvent || ze,
              ai = new mr.constructor(mr.type, mr);
            Object.defineProperty(ai, "target", {
              writable: !0,
              value: { value: nt, name: S },
            }),
              b(ai, fe);
          }
          x || B(!1, ze);
        }
      },
      ht = (fe) => {
        M ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(fe.key) !== -1 &&
            (fe.preventDefault(), B(!0, fe)));
      },
      Dt = Q !== null && U,
      tt = (fe) => {
        !Dt &&
          E &&
          (Object.defineProperty(fe, "target", {
            writable: !0,
            value: { value: O, name: S },
          }),
          E(fe));
      };
    delete F["aria-invalid"];
    let Re, Ft;
    const lt = [];
    let ke = !1;
    (Rc({ value: O }) || h) && (L ? (Re = L(O)) : (ke = !0));
    const mt = pe.map((fe) => {
      if (!y.isValidElement(fe)) return null;
      let ze;
      if (x) {
        if (!Array.isArray(O)) throw new Error(po(2));
        (ze = O.some((nt) => t1(nt, fe.props.value))),
          ze && ke && lt.push(fe.props.children);
      } else (ze = t1(O, fe.props.value)), ze && ke && (Ft = fe.props.children);
      return y.cloneElement(fe, {
        "aria-selected": ze ? "true" : "false",
        onClick: We(fe),
        onKeyUp: (nt) => {
          nt.key === " " && nt.preventDefault(),
            fe.props.onKeyUp && fe.props.onKeyUp(nt);
        },
        role: "option",
        selected: ze,
        value: void 0,
        "data-value": fe.props.value,
      });
    });
    ke &&
      (x
        ? lt.length === 0
          ? (Re = null)
          : (Re = lt.reduce(
              (fe, ze, nt) => (
                fe.push(ze), nt < lt.length - 1 && fe.push(", "), fe
              ),
              []
            ))
        : (Re = Ft));
    let Kt = ge;
    !s && ne && Q && (Kt = G.clientWidth);
    let Pt;
    typeof N < "u" ? (Pt = N) : (Pt = f ? null : 0);
    const Oe = _.id || (S ? `mui-component-select-${S}` : void 0),
      ue = P({}, t, { variant: D, value: O, open: Dt, error: p }),
      gn = oL(ue),
      Dr = P({}, m.PaperProps, (r = m.slotProps) == null ? void 0 : r.paper),
      Fr = dg();
    return C.jsxs(y.Fragment, {
      children: [
        C.jsx(
          eL,
          P(
            {
              ref: re,
              tabIndex: Pt,
              role: "combobox",
              "aria-controls": Fr,
              "aria-disabled": f ? "true" : void 0,
              "aria-expanded": Dt ? "true" : "false",
              "aria-haspopup": "listbox",
              "aria-label": i,
              "aria-labelledby": [v, Oe].filter(Boolean).join(" ") || void 0,
              "aria-describedby": o,
              onKeyDown: ht,
              onMouseDown: f || M ? null : ae,
              onBlur: tt,
              onFocus: R,
            },
            _,
            {
              ownerState: ue,
              className: ve(_.className, gn.select, u),
              id: Oe,
              children: rL(Re)
                ? e1 ||
                  (e1 = C.jsx("span", {
                    className: "notranslate",
                    children: "​",
                  }))
                : Re,
            }
          )
        ),
        C.jsx(
          nL,
          P(
            {
              "aria-invalid": p,
              value: Array.isArray(O) ? O.join(",") : O,
              name: S,
              ref: Y,
              "aria-hidden": !0,
              onChange: je,
              tabIndex: -1,
              disabled: f,
              className: gn.nativeInput,
              autoFocus: a,
              ownerState: ue,
            },
            F
          )
        ),
        C.jsx(tL, { as: g, className: gn.icon, ownerState: ue }),
        C.jsx(
          W3,
          P(
            {
              id: `menu-${S || ""}`,
              anchorEl: G,
              open: Dt,
              onClose: oe,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              transformOrigin: { vertical: "top", horizontal: "center" },
            },
            m,
            {
              MenuListProps: P(
                {
                  "aria-labelledby": v,
                  role: "listbox",
                  "aria-multiselectable": x ? "true" : void 0,
                  disableListWrap: !0,
                  id: Fr,
                },
                m.MenuListProps
              ),
              slotProps: P({}, m.slotProps, {
                paper: P({}, Dr, {
                  style: P({ minWidth: Kt }, Dr != null ? Dr.style : null),
                }),
              }),
              children: mt,
            }
          )
        ),
      ],
    });
  }),
  aL = iL;
function sL(e) {
  return Le("MuiSvgIcon", e);
}
Me("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const lL = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  uL = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${$e(t)}`, `fontSize${$e(n)}`],
      };
    return Ie(o, sL, r);
  },
  cL = le("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${$e(n.color)}`],
        t[`fontSize${$e(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, a, s, l, u, c, d, f, h, p;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (a = i.pxToRem) == null
            ? void 0
            : a.call(i, 20)) || "1.25rem",
        medium:
          ((s = e.typography) == null || (l = s.pxToRem) == null
            ? void 0
            : l.call(s, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (d =
          (f = (e.vars || e).palette) == null || (f = f[t.color]) == null
            ? void 0
            : f.main) != null
          ? d
          : {
              action:
                (h = (e.vars || e).palette) == null || (h = h.action) == null
                  ? void 0
                  : h.active,
              disabled:
                (p = (e.vars || e).palette) == null || (p = p.action) == null
                  ? void 0
                  : p.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Fh = y.forwardRef(function (t, n) {
    const r = Be({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: a = "inherit",
        component: s = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: f = "0 0 24 24",
      } = r,
      h = ie(r, lL),
      p = y.isValidElement(o) && o.type === "svg",
      g = P({}, r, {
        color: a,
        component: s,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: f,
        hasSvgAsChild: p,
      }),
      w = {};
    c || (w.viewBox = f);
    const v = uL(g);
    return C.jsxs(
      cL,
      P(
        {
          as: s,
          className: ve(v.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": d ? void 0 : !0,
          role: d ? "img" : void 0,
          ref: n,
        },
        w,
        h,
        p && o.props,
        {
          ownerState: g,
          children: [
            p ? o.props.children : o,
            d ? C.jsx("title", { children: d }) : null,
          ],
        }
      )
    );
  });
Fh.muiName = "SvgIcon";
function dL(e, t) {
  function n(r, o) {
    return C.jsx(
      Fh,
      P({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = Fh.muiName), y.memo(y.forwardRef(n));
}
const fL = dL(C.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  pL = [
    "autoWidth",
    "children",
    "classes",
    "className",
    "defaultOpen",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "variant",
  ],
  hL = ["root"],
  mL = (e) => {
    const { classes: t } = e;
    return t;
  },
  jg = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => Dn(e) && e !== "variant",
    slot: "Root",
  },
  gL = le(bC, jg)(""),
  vL = le(kC, jg)(""),
  yL = le(SC, jg)(""),
  OC = y.forwardRef(function (t, n) {
    const r = Be({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: a = {},
        className: s,
        defaultOpen: l = !1,
        displayEmpty: u = !1,
        IconComponent: c = fL,
        id: d,
        input: f,
        inputProps: h,
        label: p,
        labelId: g,
        MenuProps: w,
        multiple: v = !1,
        native: m = !1,
        onClose: x,
        onOpen: S,
        open: E,
        renderValue: b,
        SelectDisplayProps: k,
        variant: R = "outlined",
      } = r,
      T = ie(r, pL),
      $ = m ? Q3 : aL,
      M = Ma(),
      L = $a({ props: r, muiFormControl: M, states: ["variant", "error"] }),
      _ = L.variant || R,
      N = P({}, r, { variant: _, classes: a }),
      A = mL(N),
      D = ie(A, hL),
      F =
        f ||
        {
          standard: C.jsx(gL, { ownerState: N }),
          outlined: C.jsx(vL, { label: p, ownerState: N }),
          filled: C.jsx(yL, { ownerState: N }),
        }[_],
      O = Ct(n, F.ref);
    return C.jsx(y.Fragment, {
      children: y.cloneElement(
        F,
        P(
          {
            inputComponent: $,
            inputProps: P(
              {
                children: i,
                error: L.error,
                IconComponent: c,
                variant: _,
                type: void 0,
                multiple: v,
              },
              m
                ? { id: d }
                : {
                    autoWidth: o,
                    defaultOpen: l,
                    displayEmpty: u,
                    labelId: g,
                    MenuProps: w,
                    onClose: x,
                    onOpen: S,
                    open: E,
                    renderValue: b,
                    SelectDisplayProps: P({ id: d }, k),
                  },
              h,
              { classes: h ? Tn(D, h.classes) : D },
              f ? f.props.inputProps : {}
            ),
          },
          ((v && m) || u) && _ === "outlined" ? { notched: !0 } : {},
          { ref: O, className: ve(F.props.className, s, A.root) },
          !f && { variant: _ },
          T
        )
      ),
    });
  });
OC.muiName = "Select";
const fl = OC;
function xL(e) {
  return Le("MuiTextField", e);
}
Me("MuiTextField", ["root"]);
const bL = [
    "autoComplete",
    "autoFocus",
    "children",
    "className",
    "color",
    "defaultValue",
    "disabled",
    "error",
    "FormHelperTextProps",
    "fullWidth",
    "helperText",
    "id",
    "InputLabelProps",
    "inputProps",
    "InputProps",
    "inputRef",
    "label",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "placeholder",
    "required",
    "rows",
    "select",
    "SelectProps",
    "type",
    "value",
    "variant",
  ],
  wL = { standard: bC, filled: SC, outlined: kC },
  SL = (e) => {
    const { classes: t } = e;
    return Ie({ root: ["root"] }, xL, t);
  },
  CL = le(dl, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  kL = y.forwardRef(function (t, n) {
    const r = Be({ props: t, name: "MuiTextField" }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: a,
        className: s,
        color: l = "primary",
        defaultValue: u,
        disabled: c = !1,
        error: d = !1,
        FormHelperTextProps: f,
        fullWidth: h = !1,
        helperText: p,
        id: g,
        InputLabelProps: w,
        inputProps: v,
        InputProps: m,
        inputRef: x,
        label: S,
        maxRows: E,
        minRows: b,
        multiline: k = !1,
        name: R,
        onBlur: T,
        onChange: $,
        onFocus: M,
        placeholder: L,
        required: _ = !1,
        rows: N,
        select: A = !1,
        SelectProps: D,
        type: F,
        value: O,
        variant: j = "outlined",
      } = r,
      U = ie(r, bL),
      X = P({}, r, {
        autoFocus: i,
        color: l,
        disabled: c,
        error: d,
        fullWidth: h,
        multiline: k,
        required: _,
        select: A,
        variant: j,
      }),
      Y = SL(X),
      ce = {};
    j === "outlined" &&
      (w && typeof w.shrink < "u" && (ce.notched = w.shrink), (ce.label = S)),
      A &&
        ((!D || !D.native) && (ce.id = void 0),
        (ce["aria-describedby"] = void 0));
    const Q = dg(g),
      q = p && Q ? `${Q}-helper-text` : void 0,
      ne = S && Q ? `${Q}-label` : void 0,
      ge = wL[j],
      we = C.jsx(
        ge,
        P(
          {
            "aria-describedby": q,
            autoComplete: o,
            autoFocus: i,
            defaultValue: u,
            fullWidth: h,
            multiline: k,
            name: R,
            rows: N,
            maxRows: E,
            minRows: b,
            type: F,
            value: O,
            id: Q,
            inputRef: x,
            onBlur: T,
            onChange: $,
            onFocus: M,
            placeholder: L,
            inputProps: v,
          },
          ce,
          m
        )
      );
    return C.jsxs(
      CL,
      P(
        {
          className: ve(Y.root, s),
          disabled: c,
          error: d,
          fullWidth: h,
          ref: n,
          required: _,
          color: l,
          variant: j,
          ownerState: X,
        },
        U,
        {
          children: [
            S != null &&
              S !== "" &&
              C.jsx(cl, P({ htmlFor: Q, id: ne }, w, { children: S })),
            A
              ? C.jsx(
                  fl,
                  P(
                    {
                      "aria-describedby": q,
                      id: Q,
                      labelId: ne,
                      value: O,
                      input: we,
                    },
                    D,
                    { children: a }
                  )
                )
              : we,
            p && C.jsx(zI, P({ id: q }, f, { children: p })),
          ],
        }
      )
    );
  }),
  Mc = kL,
  EL = y.createContext(),
  n1 = EL;
function PL(e) {
  return Le("MuiGrid", e);
}
const RL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  $L = ["column-reverse", "column", "row-reverse", "row"],
  ML = ["nowrap", "wrap-reverse", "wrap"],
  es = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  pl = Me("MuiGrid", [
    "root",
    "container",
    "item",
    "zeroMinWidth",
    ...RL.map((e) => `spacing-xs-${e}`),
    ...$L.map((e) => `direction-xs-${e}`),
    ...ML.map((e) => `wrap-xs-${e}`),
    ...es.map((e) => `grid-xs-${e}`),
    ...es.map((e) => `grid-sm-${e}`),
    ...es.map((e) => `grid-md-${e}`),
    ...es.map((e) => `grid-lg-${e}`),
    ...es.map((e) => `grid-xl-${e}`),
  ]),
  TL = [
    "className",
    "columns",
    "columnSpacing",
    "component",
    "container",
    "direction",
    "item",
    "rowSpacing",
    "spacing",
    "wrap",
    "zeroMinWidth",
  ];
function Ki(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function NL({ theme: e, ownerState: t }) {
  let n;
  return e.breakpoints.keys.reduce((r, o) => {
    let i = {};
    if ((t[o] && (n = t[o]), !n)) return r;
    if (n === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
    else if (n === "auto")
      i = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto",
      };
    else {
      const a = _d({ values: t.columns, breakpoints: e.breakpoints.values }),
        s = typeof a == "object" ? a[o] : a;
      if (s == null) return r;
      const l = `${Math.round((n / s) * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const c = e.spacing(t.columnSpacing);
        if (c !== "0px") {
          const d = `calc(${l} + ${Ki(c)})`;
          u = { flexBasis: d, maxWidth: d };
        }
      }
      i = P({ flexBasis: l, flexGrow: 0, maxWidth: l }, u);
    }
    return (
      e.breakpoints.values[o] === 0
        ? Object.assign(r, i)
        : (r[e.breakpoints.up(o)] = i),
      r
    );
  }, {});
}
function OL({ theme: e, ownerState: t }) {
  const n = _d({ values: t.direction, breakpoints: e.breakpoints.values });
  return In({ theme: e }, n, (r) => {
    const o = { flexDirection: r };
    return (
      r.indexOf("column") === 0 &&
        (o[`& > .${pl.item}`] = { maxWidth: "none" }),
      o
    );
  });
}
function AC({ breakpoints: e, values: t }) {
  let n = "";
  Object.keys(t).forEach((o) => {
    n === "" && t[o] !== 0 && (n = o);
  });
  const r = Object.keys(e).sort((o, i) => e[o] - e[i]);
  return r.slice(0, r.indexOf(n));
}
function AL({ theme: e, ownerState: t }) {
  const { container: n, rowSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = _d({ values: r, breakpoints: e.breakpoints.values });
    let a;
    typeof i == "object" &&
      (a = AC({ breakpoints: e.breakpoints.values, values: i })),
      (o = In({ theme: e }, i, (s, l) => {
        var u;
        const c = e.spacing(s);
        return c !== "0px"
          ? {
              marginTop: `-${Ki(c)}`,
              [`& > .${pl.item}`]: { paddingTop: Ki(c) },
            }
          : (u = a) != null && u.includes(l)
          ? {}
          : { marginTop: 0, [`& > .${pl.item}`]: { paddingTop: 0 } };
      }));
  }
  return o;
}
function _L({ theme: e, ownerState: t }) {
  const { container: n, columnSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = _d({ values: r, breakpoints: e.breakpoints.values });
    let a;
    typeof i == "object" &&
      (a = AC({ breakpoints: e.breakpoints.values, values: i })),
      (o = In({ theme: e }, i, (s, l) => {
        var u;
        const c = e.spacing(s);
        return c !== "0px"
          ? {
              width: `calc(100% + ${Ki(c)})`,
              marginLeft: `-${Ki(c)}`,
              [`& > .${pl.item}`]: { paddingLeft: Ki(c) },
            }
          : (u = a) != null && u.includes(l)
          ? {}
          : {
              width: "100%",
              marginLeft: 0,
              [`& > .${pl.item}`]: { paddingLeft: 0 },
            };
      }));
  }
  return o;
}
function IL(e, t, n = {}) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [n[`spacing-xs-${String(e)}`]];
  const r = [];
  return (
    t.forEach((o) => {
      const i = e[o];
      Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`]);
    }),
    r
  );
}
const LL = le("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const { ownerState: n } = e,
      {
        container: r,
        direction: o,
        item: i,
        spacing: a,
        wrap: s,
        zeroMinWidth: l,
        breakpoints: u,
      } = n;
    let c = [];
    r && (c = IL(a, u, t));
    const d = [];
    return (
      u.forEach((f) => {
        const h = n[f];
        h && d.push(t[`grid-${f}-${String(h)}`]);
      }),
      [
        t.root,
        r && t.container,
        i && t.item,
        l && t.zeroMinWidth,
        ...c,
        o !== "row" && t[`direction-xs-${String(o)}`],
        s !== "wrap" && t[`wrap-xs-${String(s)}`],
        ...d,
      ]
    );
  },
})(
  ({ ownerState: e }) =>
    P(
      { boxSizing: "border-box" },
      e.container && { display: "flex", flexWrap: "wrap", width: "100%" },
      e.item && { margin: 0 },
      e.zeroMinWidth && { minWidth: 0 },
      e.wrap !== "wrap" && { flexWrap: e.wrap }
    ),
  OL,
  AL,
  _L,
  NL
);
function jL(e, t) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return (
    t.forEach((r) => {
      const o = e[r];
      if (Number(o) > 0) {
        const i = `spacing-${r}-${String(o)}`;
        n.push(i);
      }
    }),
    n
  );
}
const DL = (e) => {
    const {
      classes: t,
      container: n,
      direction: r,
      item: o,
      spacing: i,
      wrap: a,
      zeroMinWidth: s,
      breakpoints: l,
    } = e;
    let u = [];
    n && (u = jL(i, l));
    const c = [];
    l.forEach((f) => {
      const h = e[f];
      h && c.push(`grid-${f}-${String(h)}`);
    });
    const d = {
      root: [
        "root",
        n && "container",
        o && "item",
        s && "zeroMinWidth",
        ...u,
        r !== "row" && `direction-xs-${String(r)}`,
        a !== "wrap" && `wrap-xs-${String(a)}`,
        ...c,
      ],
    };
    return Ie(d, PL, t);
  },
  FL = y.forwardRef(function (t, n) {
    const r = Be({ props: t, name: "MuiGrid" }),
      { breakpoints: o } = jr(),
      i = Rg(r),
      {
        className: a,
        columns: s,
        columnSpacing: l,
        component: u = "div",
        container: c = !1,
        direction: d = "row",
        item: f = !1,
        rowSpacing: h,
        spacing: p = 0,
        wrap: g = "wrap",
        zeroMinWidth: w = !1,
      } = i,
      v = ie(i, TL),
      m = h || p,
      x = l || p,
      S = y.useContext(n1),
      E = c ? s || 12 : S,
      b = {},
      k = P({}, v);
    o.keys.forEach(($) => {
      v[$] != null && ((b[$] = v[$]), delete k[$]);
    });
    const R = P(
        {},
        i,
        {
          columns: E,
          container: c,
          direction: d,
          item: f,
          rowSpacing: m,
          columnSpacing: x,
          wrap: g,
          zeroMinWidth: w,
          spacing: p,
        },
        b,
        { breakpoints: o.keys }
      ),
      T = DL(R);
    return C.jsx(n1.Provider, {
      value: E,
      children: C.jsx(
        LL,
        P({ ownerState: R, className: ve(T.root, a), as: u, ref: n }, k)
      ),
    });
  }),
  kn = FL,
  zL = Me("MuiBox", ["root"]),
  BL = zL,
  UL = lC(),
  WL = iC({
    themeId: Bl,
    defaultTheme: UL,
    defaultClassName: BL.root,
    generateClassName: pg.generate,
  }),
  Dg = WL,
  uf = "http://52.87.193.68:3001/api";
async function fa(e, t) {
  let n = new URL(uf);
  if (((n.pathname += e), t)) for (let [i, a] of t) n.searchParams.append(i, a);
  let r = await fetch(n, { method: "GET" }),
    o;
  return (
    r.ok
      ? (o = await r.json())
      : r.status == 404
      ? ((o = await r.json()),
        console.warn("Petición: " + n.toString() + " Respuesta: " + r.status))
      : ((o = {
          ok: !1,
          mensaje:
            "Error al acceder al acceder al servidor (STATUS != 200..299) Status: " +
            r.status,
          datos: null,
        }),
        console.error("Petición: " + n.toString() + " Respuesta: " + r.status)),
    o
  );
}
async function HL(e) {
  let t = new URL(uf);
  t.pathname += e;
  let n = await fetch(t, { method: "DELETE" }),
    r;
  return (
    n.ok
      ? (r = {
          ok: !0,
          mensaje: "Borrado realizado correctamente.",
          datos: null,
        })
      : (console.error(
          "Error al acceder al acceder al servidor (STATUS != 200..299).Status: " +
            n.status
        ),
        (r = {
          ok: !1,
          mensaje:
            "Error al acceder al acceder al servidor (STATUS != 200..299). Status: " +
            n.status,
          datos: null,
        })),
    r
  );
}
async function VL(e, t) {
  let n = new URL(uf);
  n.pathname += e;
  let r = await fetch(n, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t),
    }),
    o;
  return (
    r.ok
      ? (o = await r.json())
      : (console.error(
          "Error al acceder al acceder al servidor (STATUS != 200..299).Status: " +
            r.status
        ),
        (o = {
          ok: !1,
          mensaje:
            "Error al acceder al acceder al servidor (STATUS != 200..299). Status: " +
            r.status,
          datos: null,
        })),
    o
  );
}
async function KL(e, t, n) {
  let r = new URL(uf);
  (r.pathname += e), (r.pathname += `/${n}`);
  let o = await fetch(r, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t),
    }),
    i;
  return (
    o.ok
      ? (i = await o.json())
      : (console.error(
          "Error al acceder al acceder al servidor (STATUS != 200..299).Status: " +
            o.status
        ),
        (i = {
          ok: !1,
          mensaje:
            "Error al acceder al acceder al servidor (STATUS != 200..299). Status: " +
            o.status,
          datos: null,
        })),
    i
  );
}
function GL(e) {
  return Le("MuiTypography", e);
}
Me("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const YL = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  XL = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: a,
      } = e,
      s = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${$e(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return Ie(s, GL, a);
  },
  qL = le("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${$e(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    P(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  r1 = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  QL = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  ZL = (e) => QL[e] || e,
  JL = y.forwardRef(function (t, n) {
    const r = Be({ props: t, name: "MuiTypography" }),
      o = ZL(r.color),
      i = Rg(P({}, r, { color: o })),
      {
        align: a = "inherit",
        className: s,
        component: l,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: d = !1,
        variant: f = "body1",
        variantMapping: h = r1,
      } = i,
      p = ie(i, YL),
      g = P({}, i, {
        align: a,
        color: o,
        className: s,
        component: l,
        gutterBottom: u,
        noWrap: c,
        paragraph: d,
        variant: f,
        variantMapping: h,
      }),
      w = l || (d ? "p" : h[f] || r1[f]) || "span",
      v = XL(g);
    return C.jsx(
      qL,
      P({ as: w, ref: n, ownerState: g, className: ve(v.root, s) }, p)
    );
  }),
  Uo = JL,
  e4 = I5({
    createStyledComponent: le("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${$e(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => Be({ props: e, name: "MuiContainer" }),
  }),
  cf = e4,
  t4 = Me("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  o1 = t4,
  n4 = Me("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  i1 = n4,
  r4 = Me("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  a1 = r4;
function o4(e) {
  return Le("MuiMenuItem", e);
}
const i4 = Me("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  ts = i4,
  a4 = [
    "autoFocus",
    "component",
    "dense",
    "divider",
    "disableGutters",
    "focusVisibleClassName",
    "role",
    "tabIndex",
    "className",
  ],
  s4 = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  l4 = (e) => {
    const {
        disabled: t,
        dense: n,
        divider: r,
        disableGutters: o,
        selected: i,
        classes: a,
      } = e,
      l = Ie(
        {
          root: [
            "root",
            n && "dense",
            t && "disabled",
            !o && "gutters",
            r && "divider",
            i && "selected",
          ],
        },
        o4,
        a
      );
    return P({}, a, l);
  },
  u4 = le(dC, {
    shouldForwardProp: (e) => Dn(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: s4,
  })(({ theme: e, ownerState: t }) =>
    P(
      {},
      e.typography.body1,
      {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
      },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      {
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${ts.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : ir(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${ts.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : ir(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${ts.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : ir(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : ir(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${ts.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${ts.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${o1.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${o1.inset}`]: { marginLeft: 52 },
        [`& .${a1.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${a1.inset}`]: { paddingLeft: 36 },
        [`& .${i1.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
      t.dense &&
        P(
          { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
          e.typography.body2,
          { [`& .${i1.root} svg`]: { fontSize: "1.25rem" } }
        )
    )
  ),
  c4 = y.forwardRef(function (t, n) {
    const r = Be({ props: t, name: "MuiMenuItem" }),
      {
        autoFocus: o = !1,
        component: i = "li",
        dense: a = !1,
        divider: s = !1,
        disableGutters: l = !1,
        focusVisibleClassName: u,
        role: c = "menuitem",
        tabIndex: d,
        className: f,
      } = r,
      h = ie(r, a4),
      p = y.useContext(jh),
      g = y.useMemo(
        () => ({ dense: a || p.dense || !1, disableGutters: l }),
        [p.dense, a, l]
      ),
      w = y.useRef(null);
    fn(() => {
      o && w.current && w.current.focus();
    }, [o]);
    const v = P({}, r, { dense: g.dense, divider: s, disableGutters: l }),
      m = l4(r),
      x = Ct(w, n);
    let S;
    return (
      r.disabled || (S = d !== void 0 ? d : -1),
      C.jsx(jh.Provider, {
        value: g,
        children: C.jsx(
          u4,
          P(
            {
              ref: x,
              role: c,
              tabIndex: S,
              component: i,
              focusVisibleClassName: ve(m.focusVisible, u),
              className: ve(m.root, f),
            },
            h,
            { ownerState: v, classes: m }
          )
        ),
      })
    );
  }),
  Tc = c4;
function d4() {
  const [e, t] = y.useState(""),
    [n, r] = y.useState([]),
    [o, i] = y.useState(null),
    a = Il(),
    s = (u) => {
      t(u.target.value);
    },
    l = async (u) => {
      u.preventDefault();
      const c = new FormData(u.currentTarget);
      let d = {
          bookId: null,
          bookIdAutor: e,
          bookTitle: c.get("nombreLibro").trim(),
          bookPublished: c.get("fechaPublicacion"),
        },
        f = await VL("/books", d);
      alert(f.mensaje), f.ok && a("/");
    };
  return (
    y.useEffect(() => {
      async function u() {
        try {
          let c = await fa("/authors", new FormData());
          if ((console.log(c.datos), c.ok)) {
            const d = c.datos;
            r(d);
          } else i("Hubo un error al obtener los tipos de componentes");
        } catch {
          i(
            "No pudimos hacer la solicitud para obtener los tipos de componente"
          );
        }
      }
      u();
    }, []),
    o
      ? C.jsx("h4", { children: o })
      : C.jsx(C.Fragment, {
          children: C.jsx(cf, {
            fixed: !0,
            sx: { mt: 3, p: 5 },
            children: C.jsxs(Dg, {
              component: "form",
              onSubmit: l,
              children: [
                C.jsx(Uo, {
                  variant: "h4",
                  gutterBottom: !0,
                  children: "Alta Libro",
                }),
                C.jsxs(kn, {
                  container: !0,
                  spacing: 2,
                  children: [
                    C.jsx(kn, {
                      item: !0,
                      xs: 12,
                      md: 7,
                      children: C.jsx(Mc, {
                        required: !0,
                        fullWidth: !0,
                        id: "nombreLibro",
                        label: "Nombre libro",
                        name: "nombreLibro",
                        type: "text",
                        inputProps: { maxLength: 25 },
                      }),
                    }),
                    C.jsx(kn, {
                      item: !0,
                      xs: 12,
                      md: 7,
                      children: C.jsx(Mc, {
                        required: !0,
                        fullWidth: !0,
                        name: "fechaPublicacion",
                        label: "Fecha de publicación",
                        type: "date",
                        id: "fechaPublicacion",
                      }),
                    }),
                    C.jsx(kn, {
                      item: !0,
                      xs: 12,
                      md: 7,
                      children: C.jsxs(dl, {
                        fullWidth: !0,
                        children: [
                          C.jsx(cl, { id: "lblAutor", children: "Autor" }),
                          C.jsx(fl, {
                            labelId: "lblAutor",
                            id: "idAutor",
                            name: "idAutor",
                            value: e,
                            label: "idAutor",
                            onChange: s,
                            children: n.map((u) =>
                              C.jsx(
                                Tc,
                                { value: u.authorId, children: u.authorNname },
                                u.authorId
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                C.jsx(Ng, {
                  type: "submit",
                  variant: "contained",
                  sx: { mt: 3 },
                  children: "Aceptar",
                }),
              ],
            }),
          }),
        })
  );
}
function f4() {
  const [e, t] = y.useState([]),
    [n, r] = y.useState(null);
  return (
    y.useEffect(() => {
      async function o() {
        try {
          let i = await fa("/books", new FormData());
          if ((console.log(i.datos), i.ok)) {
            const a = i.datos;
            t(a);
          } else r("Hubo un error al obtener los tipos de componentes");
        } catch {
          r(
            "No pudimos hacer la solicitud para obtener los tipos de componente"
          );
        }
      }
      o();
    }, []),
    n
      ? C.jsx("h4", { children: n })
      : C.jsx(C.Fragment, {
          children: C.jsxs(kn, {
            container: !0,
            sx: { px: 4 },
            children: [
              C.jsx(Uo, {
                variant: "h4",
                gutterBottom: !0,
                sx: { mt: 4 },
                children: "Listado libros",
              }),
              C.jsxs(aT, {
                striped: !0,
                children: [
                  C.jsx(sT, {
                    children: C.jsxs("tr", {
                      children: [
                        C.jsx("th", { scope: "col", children: "IDLIBRO" }),
                        C.jsx("th", { scope: "col", children: "NOMBRE" }),
                        C.jsx("th", {
                          scope: "col",
                          children: "AÑO PUBLICACIÓN",
                        }),
                      ],
                    }),
                  }),
                  C.jsx(lT, {
                    children: e.map((o) =>
                      C.jsxs(
                        "tr",
                        {
                          children: [
                            C.jsx("th", { scope: "row", children: o.bookId }),
                            C.jsx("td", { children: o.bookTitle }),
                            C.jsx("td", {
                              children: new Date(o.bookPublished)
                                .toISOString()
                                .split("T")[0],
                            }),
                          ],
                        },
                        o.idcomponente
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        })
  );
}
function p4() {
  const [e, t] = y.useState(""),
    [n, r] = y.useState(""),
    [o, i] = y.useState([]),
    [a, s] = y.useState([]),
    [l, u] = y.useState(null),
    c = Il(),
    d = (p) => {
      t(p.target.value);
    },
    f = (p) => {
      r(p.target.value);
    },
    h = async (p) => {
      p.preventDefault();
      const g = new FormData(p.currentTarget);
      let w = {
          bookId: e,
          bookIdAutor: n,
          bookTitle: g.get("nombreLibro").trim(),
          bookPublished: g.get("fechaPublicacion"),
        },
        v = await KL("/books", w, e);
      alert(v.mensaje), v.ok && c("/");
    };
  return (
    y.useEffect(() => {
      async function p() {
        try {
          let w = await fa("/books", new FormData());
          if ((console.log(w.datos), w.ok)) {
            const v = w.datos;
            i(v);
          } else u("Hubo un error al obtener los tipos de componentes");
        } catch {
          u(
            "No pudimos hacer la solicitud para obtener los tipos de componente"
          );
        }
      }
      async function g() {
        try {
          let w = await fa("/authors", new FormData());
          if ((console.log(w.datos), w.ok)) {
            const v = w.datos;
            s(v);
          } else u("Hubo un error al obtener los tipos de componentes");
        } catch {
          u(
            "No pudimos hacer la solicitud para obtener los tipos de componente"
          );
        }
      }
      p(), g();
    }, []),
    l
      ? C.jsx("h4", { children: l })
      : C.jsx(C.Fragment, {
          children: C.jsx(cf, {
            fixed: !0,
            sx: { mt: 3, p: 5 },
            children: C.jsxs(Dg, {
              component: "form",
              onSubmit: h,
              sx: { mt: 3, p: 5 },
              children: [
                C.jsx(Uo, {
                  variant: "h4",
                  gutterBottom: !0,
                  children: "Actualizar Libro",
                }),
                C.jsxs(kn, {
                  container: !0,
                  spacing: 2,
                  children: [
                    C.jsx(kn, {
                      item: !0,
                      xs: 12,
                      md: 7,
                      children: C.jsxs(dl, {
                        fullWidth: !0,
                        children: [
                          C.jsx(cl, { id: "lblLibro", children: "Libro" }),
                          C.jsx(fl, {
                            labelId: "lblLibro",
                            id: "idLibro",
                            name: "idLibro",
                            value: e,
                            label: "idLibro",
                            onChange: d,
                            children: o.map((p) =>
                              C.jsx(
                                Tc,
                                { value: p.bookId, children: p.bookTitle },
                                p.bookId
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                    C.jsx(kn, {
                      item: !0,
                      xs: 12,
                      md: 7,
                      children: C.jsx(Mc, {
                        required: !0,
                        fullWidth: !0,
                        id: "nombreLibro",
                        label: "Nombre libro",
                        name: "nombreLibro",
                        type: "text",
                        inputProps: { maxLength: 25 },
                      }),
                    }),
                    C.jsx(kn, {
                      item: !0,
                      xs: 12,
                      md: 7,
                      children: C.jsxs(dl, {
                        fullWidth: !0,
                        children: [
                          C.jsx(cl, { id: "lblAutor", children: "Autor" }),
                          C.jsx(fl, {
                            labelId: "lblAutor",
                            id: "idAutor",
                            name: "idAutor",
                            value: n,
                            label: "idAutor",
                            onChange: f,
                            children: a.map((p) =>
                              C.jsx(
                                Tc,
                                { value: p.authorId, children: p.authorNname },
                                p.authorId
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                    C.jsx(kn, {
                      item: !0,
                      xs: 12,
                      md: 7,
                      children: C.jsx(Mc, {
                        required: !0,
                        fullWidth: !0,
                        name: "fechaPublicacion",
                        label: "Fecha de publicación",
                        type: "date",
                        id: "fechaPublicacion",
                      }),
                    }),
                  ],
                }),
                C.jsx(Ng, {
                  type: "submit",
                  variant: "contained",
                  sx: { mt: 3 },
                  children: "Aceptar",
                }),
              ],
            }),
          }),
        })
  );
}
function h4() {
  const [e, t] = y.useState(""),
    [n, r] = y.useState([]),
    [o, i] = y.useState(null);
  Il();
  const a = (l) => {
      t(l.target.value);
    },
    s = async (l) => {
      l.preventDefault();
      let u = await HL("/books/" + e);
      alert(u.mensaje), u.ok && RR("/");
    };
  return (
    y.useEffect(() => {
      async function l() {
        try {
          let u = await fa("/books", new FormData());
          if ((console.log(u.datos), u.ok)) {
            const c = u.datos;
            r(c);
          } else i("Hubo un error al obtener los tipos de componentes");
        } catch {
          i(
            "No pudimos hacer la solicitud para obtener los tipos de componente"
          );
        }
      }
      l();
    }, []),
    o
      ? C.jsx("h4", { children: o })
      : C.jsx(C.Fragment, {
          children: C.jsx(cf, {
            fixed: !0,
            sx: { mt: 3, p: 5 },
            children: C.jsxs(Dg, {
              component: "form",
              onSubmit: s,
              sx: { mt: 3, p: 5 },
              children: [
                C.jsx(Uo, {
                  variant: "h4",
                  gutterBottom: !0,
                  children: "Eliminar Libro",
                }),
                C.jsx(kn, {
                  container: !0,
                  spacing: 2,
                  children: C.jsx(kn, {
                    item: !0,
                    xs: 7,
                    children: C.jsxs(dl, {
                      fullWidth: !0,
                      children: [
                        C.jsx(cl, { id: "lblAutor", children: "Autor" }),
                        C.jsx(fl, {
                          labelId: "lblAutor",
                          id: "idAutor",
                          name: "idAutor",
                          value: e,
                          label: "idAutor",
                          onChange: a,
                          children: n.map((l) =>
                            C.jsx(
                              Tc,
                              { value: l.bookId, children: l.bookTitle },
                              l.bookId
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
                C.jsx(Ng, {
                  type: "submit",
                  variant: "contained",
                  sx: { mt: 3 },
                  children: "Eliminar",
                }),
              ],
            }),
          }),
        })
  );
}
var m4 = Object.defineProperty,
  g4 = (e, t) => {
    for (var n in t) m4(e, n, { get: t[n], enumerable: !0 });
  },
  Ln = {};
g4(Ln, {
  assign: () => x4,
  colors: () => lo,
  createStringInterpolator: () => Vg,
  skipAnimation: () => zC,
  to: () => FC,
  willAdvance: () => Kg,
});
var Fg = Wl(),
  ye = (e) => Ul(e, Fg),
  zg = Wl();
ye.write = (e) => Ul(e, zg);
var df = Wl();
ye.onStart = (e) => Ul(e, df);
var Bg = Wl();
ye.onFrame = (e) => Ul(e, Bg);
var Ug = Wl();
ye.onFinish = (e) => Ul(e, Ug);
var Gi = [];
ye.setTimeout = (e, t) => {
  const n = ye.now() + t,
    r = () => {
      const i = Gi.findIndex((a) => a.cancel == r);
      ~i && Gi.splice(i, 1), (Jr -= ~i ? 1 : 0);
    },
    o = { time: n, handler: e, cancel: r };
  return Gi.splice(_C(n), 0, o), (Jr += 1), IC(), o;
};
var _C = (e) => ~(~Gi.findIndex((t) => t.time > e) || ~Gi.length);
ye.cancel = (e) => {
  df.delete(e), Bg.delete(e), Ug.delete(e), Fg.delete(e), zg.delete(e);
};
ye.sync = (e) => {
  (zh = !0), ye.batchedUpdates(e), (zh = !1);
};
ye.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...o) {
    (t = o), ye.onStart(n);
  }
  return (
    (r.handler = e),
    (r.cancel = () => {
      df.delete(n), (t = null);
    }),
    r
  );
};
var Wg = typeof window < "u" ? window.requestAnimationFrame : () => {};
ye.use = (e) => (Wg = e);
ye.now = typeof performance < "u" ? () => performance.now() : Date.now;
ye.batchedUpdates = (e) => e();
ye.catch = console.error;
ye.frameLoop = "always";
ye.advance = () => {
  ye.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
      )
    : jC();
};
var Zr = -1,
  Jr = 0,
  zh = !1;
function Ul(e, t) {
  zh ? (t.delete(e), e(0)) : (t.add(e), IC());
}
function IC() {
  Zr < 0 && ((Zr = 0), ye.frameLoop !== "demand" && Wg(LC));
}
function v4() {
  Zr = -1;
}
function LC() {
  ~Zr && (Wg(LC), ye.batchedUpdates(jC));
}
function jC() {
  const e = Zr;
  Zr = ye.now();
  const t = _C(Zr);
  if ((t && (DC(Gi.splice(0, t), (n) => n.handler()), (Jr -= t)), !Jr)) {
    v4();
    return;
  }
  df.flush(),
    Fg.flush(e ? Math.min(64, Zr - e) : 16.667),
    Bg.flush(),
    zg.flush(),
    Ug.flush();
}
function Wl() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (Jr += t == e && !e.has(n) ? 1 : 0), e.add(n);
    },
    delete(n) {
      return (Jr -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (Jr -= t.size),
        DC(t, (r) => r(n) && e.add(r)),
        (Jr += e.size),
        (t = e));
    },
  };
}
function DC(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      ye.catch(r);
    }
  });
}
function Bh() {}
var y4 = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  K = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === "Object",
    fun: (e) => typeof e == "function",
    str: (e) => typeof e == "string",
    num: (e) => typeof e == "number",
    und: (e) => e === void 0,
  };
function vr(e, t) {
  if (K.arr(e)) {
    if (!K.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var xe = (e, t) => e.forEach(t);
function pr(e, t, n) {
  if (K.arr(e)) {
    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Bt = (e) => (K.und(e) ? [] : K.arr(e) ? e : [e]);
function Os(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), xe(n, t);
  }
}
var hs = (e, ...t) => Os(e, (n) => n(...t)),
  Hg = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  Vg,
  FC,
  lo = null,
  zC = !1,
  Kg = Bh,
  x4 = (e) => {
    e.to && (FC = e.to),
      e.now && (ye.now = e.now),
      e.colors !== void 0 && (lo = e.colors),
      e.skipAnimation != null && (zC = e.skipAnimation),
      e.createStringInterpolator && (Vg = e.createStringInterpolator),
      e.requestAnimationFrame && ye.use(e.requestAnimationFrame),
      e.batchedUpdates && (ye.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (Kg = e.willAdvance),
      e.frameLoop && (ye.frameLoop = e.frameLoop);
  },
  As = new Set(),
  En = [],
  cp = [],
  Nc = 0,
  ff = {
    get idle() {
      return !As.size && !En.length;
    },
    start(e) {
      Nc > e.priority ? (As.add(e), ye.onStart(b4)) : (BC(e), ye(Uh));
    },
    advance: Uh,
    sort(e) {
      if (Nc) ye.onFrame(() => ff.sort(e));
      else {
        const t = En.indexOf(e);
        ~t && (En.splice(t, 1), UC(e));
      }
    },
    clear() {
      (En = []), As.clear();
    },
  };
function b4() {
  As.forEach(BC), As.clear(), ye(Uh);
}
function BC(e) {
  En.includes(e) || UC(e);
}
function UC(e) {
  En.splice(
    w4(En, (t) => t.priority > e.priority),
    0,
    e
  );
}
function Uh(e) {
  const t = cp;
  for (let n = 0; n < En.length; n++) {
    const r = En[n];
    (Nc = r.priority), r.idle || (Kg(r), r.advance(e), r.idle || t.push(r));
  }
  return (Nc = 0), (cp = En), (cp.length = 0), (En = t), En.length > 0;
}
function w4(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var S4 = (e, t, n) => Math.min(Math.max(n, e), t),
  C4 = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  Yn = "[-+]?\\d*\\.?\\d+",
  Oc = Yn + "%";
function pf(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var k4 = new RegExp("rgb" + pf(Yn, Yn, Yn)),
  E4 = new RegExp("rgba" + pf(Yn, Yn, Yn, Yn)),
  P4 = new RegExp("hsl" + pf(Yn, Oc, Oc)),
  R4 = new RegExp("hsla" + pf(Yn, Oc, Oc, Yn)),
  $4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  M4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  T4 = /^#([0-9a-fA-F]{6})$/,
  N4 = /^#([0-9a-fA-F]{8})$/;
function O4(e) {
  let t;
  return typeof e == "number"
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = T4.exec(e))
    ? parseInt(t[1] + "ff", 16) >>> 0
    : lo && lo[e] !== void 0
    ? lo[e]
    : (t = k4.exec(e))
    ? ((xi(t[1]) << 24) | (xi(t[2]) << 16) | (xi(t[3]) << 8) | 255) >>> 0
    : (t = E4.exec(e))
    ? ((xi(t[1]) << 24) | (xi(t[2]) << 16) | (xi(t[3]) << 8) | u1(t[4])) >>> 0
    : (t = $4.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
    : (t = N4.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = M4.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = P4.exec(e))
    ? (s1(l1(t[1]), vu(t[2]), vu(t[3])) | 255) >>> 0
    : (t = R4.exec(e))
    ? (s1(l1(t[1]), vu(t[2]), vu(t[3])) | u1(t[4])) >>> 0
    : null;
}
function dp(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function s1(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    o = 2 * n - r,
    i = dp(o, r, e + 1 / 3),
    a = dp(o, r, e),
    s = dp(o, r, e - 1 / 3);
  return (
    (Math.round(i * 255) << 24) |
    (Math.round(a * 255) << 16) |
    (Math.round(s * 255) << 8)
  );
}
function xi(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function l1(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function u1(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function vu(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function c1(e) {
  let t = O4(e);
  if (t === null) return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24,
    r = (t & 16711680) >>> 16,
    o = (t & 65280) >>> 8,
    i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
var hl = (e, t, n) => {
  if (K.fun(e)) return e;
  if (K.arr(e)) return hl({ range: e, output: t, extrapolate: n });
  if (K.str(e.output[0])) return Vg(e);
  const r = e,
    o = r.output,
    i = r.range || [0, 1],
    a = r.extrapolateLeft || r.extrapolate || "extend",
    s = r.extrapolateRight || r.extrapolate || "extend",
    l = r.easing || ((u) => u);
  return (u) => {
    const c = _4(u, i);
    return A4(u, i[c], i[c + 1], o[c], o[c + 1], l, a, s, r.map);
  };
};
function A4(e, t, n, r, o, i, a, s, l) {
  let u = l ? l(e) : e;
  if (u < t) {
    if (a === "identity") return u;
    a === "clamp" && (u = t);
  }
  if (u > n) {
    if (s === "identity") return u;
    s === "clamp" && (u = n);
  }
  return r === o
    ? r
    : t === n
    ? e <= t
      ? r
      : o
    : (t === -1 / 0
        ? (u = -u)
        : n === 1 / 0
        ? (u = u - t)
        : (u = (u - t) / (n - t)),
      (u = i(u)),
      r === -1 / 0
        ? (u = -u)
        : o === 1 / 0
        ? (u = u + r)
        : (u = u * (o - r) + r),
      u);
}
function _4(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var I4 =
    (e, t = "end") =>
    (n) => {
      n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
      const r = n * e,
        o = t === "end" ? Math.floor(r) : Math.ceil(r);
      return S4(0, 1, o / e);
    },
  Ac = 1.70158,
  yu = Ac * 1.525,
  d1 = Ac + 1,
  f1 = (2 * Math.PI) / 3,
  p1 = (2 * Math.PI) / 4.5,
  xu = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  L4 = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => d1 * e * e * e - Ac * e * e,
    easeOutBack: (e) => 1 + d1 * Math.pow(e - 1, 3) + Ac * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((yu + 1) * 2 * e - yu)) / 2
        : (Math.pow(2 * e - 2, 2) * ((yu + 1) * (e * 2 - 2) + yu) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * f1),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * f1) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * p1)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * p1)) / 2 +
          1,
    easeInBounce: (e) => 1 - xu(1 - e),
    easeOutBounce: xu,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - xu(1 - 2 * e)) / 2 : (1 + xu(2 * e - 1)) / 2,
    steps: I4,
  },
  ml = Symbol.for("FluidValue.get"),
  pa = Symbol.for("FluidValue.observers"),
  Cn = (e) => !!(e && e[ml]),
  Gt = (e) => (e && e[ml] ? e[ml]() : e),
  h1 = (e) => e[pa] || null;
function j4(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function gl(e, t) {
  const n = e[pa];
  n &&
    n.forEach((r) => {
      j4(r, t);
    });
}
var WC = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error("Unknown getter");
      D4(this, e);
    }
  },
  D4 = (e, t) => HC(e, ml, t);
function Ta(e, t) {
  if (e[ml]) {
    let n = e[pa];
    n || HC(e, pa, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function vl(e, t) {
  const n = e[pa];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : (e[pa] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var HC = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  Ku = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  F4 =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  m1 = new RegExp(`(${Ku.source})(%|[a-z]+)`, "i"),
  z4 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  hf = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  VC = (e) => {
    const [t, n] = B4(e);
    if (!t || Hg()) return e;
    const r = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    if (r) return r.trim();
    if (n && n.startsWith("--")) {
      const o = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(n);
      return o || e;
    } else {
      if (n && hf.test(n)) return VC(n);
      if (n) return n;
    }
    return e;
  },
  B4 = (e) => {
    const t = hf.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
  },
  fp,
  U4 = (e, t, n, r, o) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
  KC = (e) => {
    fp ||
      (fp = lo
        ? new RegExp(`(${Object.keys(lo).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    const t = e.output.map((i) =>
        Gt(i).replace(hf, VC).replace(F4, c1).replace(fp, c1)
      ),
      n = t.map((i) => i.match(Ku).map(Number)),
      o = n[0]
        .map((i, a) =>
          n.map((s) => {
            if (!(a in s))
              throw Error('The arity of each "output" value must be equal');
            return s[a];
          })
        )
        .map((i) => hl({ ...e, output: i }));
    return (i) => {
      var l;
      const a =
        !m1.test(t[0]) &&
        ((l = t.find((u) => m1.test(u))) == null ? void 0 : l.replace(Ku, ""));
      let s = 0;
      return t[0].replace(Ku, () => `${o[s++](i)}${a || ""}`).replace(z4, U4);
    };
  },
  Gg = "react-spring: ",
  GC = (e) => {
    const t = e;
    let n = !1;
    if (typeof t != "function")
      throw new TypeError(`${Gg}once requires a function parameter`);
    return (...r) => {
      n || (t(...r), (n = !0));
    };
  },
  W4 = GC(console.warn);
function H4() {
  W4(`${Gg}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var V4 = GC(console.warn);
function K4() {
  V4(
    `${Gg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function mf(e) {
  return (
    K.str(e) &&
    (e[0] == "#" || /\d/.test(e) || (!Hg() && hf.test(e)) || e in (lo || {}))
  );
}
var Io = Hg() ? y.useEffect : y.useLayoutEffect,
  G4 = () => {
    const e = y.useRef(!1);
    return (
      Io(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function YC() {
  const e = y.useState()[1],
    t = G4();
  return () => {
    t.current && e(Math.random());
  };
}
function Y4(e, t) {
  const [n] = y.useState(() => ({ inputs: t, result: e() })),
    r = y.useRef(),
    o = r.current;
  let i = o;
  return (
    i
      ? (t && i.inputs && X4(t, i.inputs)) || (i = { inputs: t, result: e() })
      : (i = n),
    y.useEffect(() => {
      (r.current = i), o == n && (n.inputs = n.result = void 0);
    }, [i]),
    i.result
  );
}
function X4(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var XC = (e) => y.useEffect(e, q4),
  q4 = [];
function Q4(e) {
  const t = y.useRef();
  return (
    y.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
var yl = Symbol.for("Animated:node"),
  Z4 = (e) => !!e && e[yl] === e,
  tr = (e) => e && e[yl],
  Yg = (e, t) => y4(e, yl, t),
  gf = (e) => e && e[yl] && e[yl].getPayload(),
  qC = class {
    constructor() {
      Yg(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  Hl = class extends qC {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        K.num(this._value) && (this.lastPosition = this._value);
    }
    static create(e) {
      return new Hl(e);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(e, t) {
      return (
        K.num(e) &&
          ((this.lastPosition = e),
          t &&
            ((e = Math.round(e / t) * t),
            this.done && (this.lastPosition = e))),
        this._value === e ? !1 : ((this._value = e), !0)
      );
    }
    reset() {
      const { done: e } = this;
      (this.done = !1),
        K.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  xl = class extends Hl {
    constructor(e) {
      super(0),
        (this._string = null),
        (this._toString = hl({ output: [e, e] }));
    }
    static create(e) {
      return new xl(e);
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value));
    }
    setValue(e) {
      if (K.str(e)) {
        if (e == this._string) return !1;
        (this._string = e), (this._value = 1);
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0;
    }
    reset(e) {
      e && (this._toString = hl({ output: [this.getValue(), e] })),
        (this._value = 0),
        super.reset();
    }
  },
  _c = { dependencies: null },
  vf = class extends qC {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      const t = {};
      return (
        pr(this.source, (n, r) => {
          Z4(n)
            ? (t[r] = n.getValue(e))
            : Cn(n)
            ? (t[r] = Gt(n))
            : e || (t[r] = n);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && xe(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        const t = new Set();
        return pr(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      _c.dependencies && Cn(e) && _c.dependencies.add(e);
      const t = gf(e);
      t && xe(t, (n) => this.add(n));
    }
  },
  QC = class extends vf {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new QC(e);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      const t = this.getPayload();
      return e.length == t.length
        ? t.map((n, r) => n.setValue(e[r])).some(Boolean)
        : (super.setValue(e.map(J4)), !0);
    }
  };
function J4(e) {
  return (mf(e) ? xl : Hl).create(e);
}
function Wh(e) {
  const t = tr(e);
  return t ? t.constructor : K.arr(e) ? QC : mf(e) ? xl : Hl;
}
var g1 = (e, t) => {
    const n = !K.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return y.forwardRef((r, o) => {
      const i = y.useRef(null),
        a =
          n &&
          y.useCallback(
            (p) => {
              i.current = nj(o, p);
            },
            [o]
          ),
        [s, l] = tj(r, t),
        u = YC(),
        c = () => {
          const p = i.current;
          if (n && !p) return;
          (p ? t.applyAnimatedValues(p, s.getValue(!0)) : !1) === !1 && u();
        },
        d = new ej(c, l),
        f = y.useRef();
      Io(
        () => (
          (f.current = d),
          xe(l, (p) => Ta(p, d)),
          () => {
            f.current &&
              (xe(f.current.deps, (p) => vl(p, f.current)),
              ye.cancel(f.current.update));
          }
        )
      ),
        y.useEffect(c, []),
        XC(() => () => {
          const p = f.current;
          xe(p.deps, (g) => vl(g, p));
        });
      const h = t.getComponentProps(s.getValue());
      return y.createElement(e, { ...h, ref: a });
    });
  },
  ej = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == "change" && ye.write(this.update);
    }
  };
function tj(e, t) {
  const n = new Set();
  return (
    (_c.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new vf(e)),
    (_c.dependencies = null),
    [e, n]
  );
}
function nj(e, t) {
  return e && (K.fun(e) ? e(t) : (e.current = t)), t;
}
var v1 = Symbol.for("AnimatedComponent"),
  rj = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (o) => new vf(o),
      getComponentProps: r = (o) => o,
    } = {}
  ) => {
    const o = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      i = (a) => {
        const s = y1(a) || "Anonymous";
        return (
          K.str(a)
            ? (a = i[a] || (i[a] = g1(a, o)))
            : (a = a[v1] || (a[v1] = g1(a, o))),
          (a.displayName = `Animated(${s})`),
          a
        );
      };
    return (
      pr(e, (a, s) => {
        K.arr(e) && (s = y1(a)), (i[s] = i(a));
      }),
      { animated: i }
    );
  },
  y1 = (e) =>
    K.str(e)
      ? e
      : e && K.str(e.displayName)
      ? e.displayName
      : (K.fun(e) && e.name) || null;
function Yt(e, ...t) {
  return K.fun(e) ? e(...t) : e;
}
var _s = (e, t) =>
    e === !0 || !!(t && e && (K.fun(e) ? e(t) : Bt(e).includes(t))),
  ZC = (e, t) => (K.obj(e) ? t && e[t] : e),
  JC = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  oj = (e) => e,
  Xg = (e, t = oj) => {
    let n = ij;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    const r = {};
    for (const o of n) {
      const i = t(e[o], o);
      K.und(i) || (r[o] = i);
    }
    return r;
  },
  ij = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest",
  ],
  aj = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function sj(e) {
  const t = {};
  let n = 0;
  if (
    (pr(e, (r, o) => {
      aj[o] || ((t[o] = r), n++);
    }),
    n)
  )
    return t;
}
function qg(e) {
  const t = sj(e);
  if (t) {
    const n = { to: t };
    return pr(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return { ...e };
}
function bl(e) {
  return (
    (e = Gt(e)),
    K.arr(e)
      ? e.map(bl)
      : mf(e)
      ? Ln.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function lj(e) {
  for (const t in e) return !0;
  return !1;
}
function Hh(e) {
  return K.fun(e) || (K.arr(e) && K.obj(e[0]));
}
function x1(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function uj(e, t) {
  var n;
  t &&
    e.ref !== t &&
    ((n = e.ref) == null || n.delete(e), t.add(e), (e.ref = t));
}
var cj = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  Vh = { ...cj.default, mass: 1, damping: 1, easing: L4.linear, clamp: !1 },
  dj = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, Vh);
    }
  };
function fj(e, t, n) {
  n && ((n = { ...n }), b1(n, t), (t = { ...n, ...t })),
    b1(e, t),
    Object.assign(e, t);
  for (const a in Vh) e[a] == null && (e[a] = Vh[a]);
  let { frequency: r, damping: o } = e;
  const { mass: i } = e;
  return (
    K.und(r) ||
      (r < 0.01 && (r = 0.01),
      o < 0 && (o = 0),
      (e.tension = Math.pow((2 * Math.PI) / r, 2) * i),
      (e.friction = (4 * Math.PI * o * i) / r)),
    e
  );
}
function b1(e, t) {
  if (!K.und(t.decay)) e.duration = void 0;
  else {
    const n = !K.und(t.tension) || !K.und(t.friction);
    (n || !K.und(t.frequency) || !K.und(t.damping) || !K.und(t.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var w1 = [],
  pj = class {
    constructor() {
      (this.changed = !1),
        (this.values = w1),
        (this.toValues = null),
        (this.fromValues = w1),
        (this.config = new dj()),
        (this.immediate = !1);
    }
  };
function ek(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
  return new Promise((a, s) => {
    let l,
      u,
      c = _s(n.cancel ?? (r == null ? void 0 : r.cancel), t);
    if (c) h();
    else {
      K.und(n.pause) || (o.paused = _s(n.pause, t));
      let p = r == null ? void 0 : r.pause;
      p !== !0 && (p = o.paused || _s(p, t)),
        (l = Yt(n.delay || 0, t)),
        p ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f());
    }
    function d() {
      o.resumeQueue.add(f),
        o.timeouts.delete(u),
        u.cancel(),
        (l = u.time - ye.now());
    }
    function f() {
      l > 0 && !Ln.skipAnimation
        ? ((o.delayed = !0),
          (u = ye.setTimeout(h, l)),
          o.pauseQueue.add(d),
          o.timeouts.add(u))
        : h();
    }
    function h() {
      o.delayed && (o.delayed = !1),
        o.pauseQueue.delete(d),
        o.timeouts.delete(u),
        e <= (o.cancelId || 0) && (c = !0);
      try {
        i.start({ ...n, callId: e, cancel: c }, a);
      } catch (p) {
        s(p);
      }
    }
  });
}
var Qg = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((n) => n.cancelled)
      ? Yi(e.get())
      : t.every((n) => n.noop)
      ? tk(e.get())
      : Kn(
          e.get(),
          t.every((n) => n.finished)
        ),
  tk = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  Kn = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  Yi = (e) => ({ value: e, cancelled: !0, finished: !1 });
function nk(e, t, n, r) {
  const { callId: o, parentId: i, onRest: a } = t,
    { asyncTo: s, promise: l } = n;
  return !i && e === s && !t.reset
    ? l
    : (n.promise = (async () => {
        (n.asyncId = o), (n.asyncTo = e);
        const u = Xg(t, (w, v) => (v === "onRest" ? void 0 : w));
        let c, d;
        const f = new Promise((w, v) => ((c = w), (d = v))),
          h = (w) => {
            const v =
              (o <= (n.cancelId || 0) && Yi(r)) ||
              (o !== n.asyncId && Kn(r, !1));
            if (v) throw ((w.result = v), d(w), w);
          },
          p = (w, v) => {
            const m = new S1(),
              x = new C1();
            return (async () => {
              if (Ln.skipAnimation)
                throw (wl(n), (x.result = Kn(r, !1)), d(x), x);
              h(m);
              const S = K.obj(w) ? { ...w } : { ...v, to: w };
              (S.parentId = o),
                pr(u, (b, k) => {
                  K.und(S[k]) && (S[k] = b);
                });
              const E = await r.start(S);
              return (
                h(m),
                n.paused &&
                  (await new Promise((b) => {
                    n.resumeQueue.add(b);
                  })),
                E
              );
            })();
          };
        let g;
        if (Ln.skipAnimation) return wl(n), Kn(r, !1);
        try {
          let w;
          K.arr(e)
            ? (w = (async (v) => {
                for (const m of v) await p(m);
              })(e))
            : (w = Promise.resolve(e(p, r.stop.bind(r)))),
            await Promise.all([w.then(c), f]),
            (g = Kn(r.get(), !0, !1));
        } catch (w) {
          if (w instanceof S1) g = w.result;
          else if (w instanceof C1) g = w.result;
          else throw w;
        } finally {
          o == n.asyncId &&
            ((n.asyncId = i),
            (n.asyncTo = i ? s : void 0),
            (n.promise = i ? l : void 0));
        }
        return (
          K.fun(a) &&
            ye.batchedUpdates(() => {
              a(g, r, r.item);
            }),
          g
        );
      })());
}
function wl(e, t) {
  Os(e.timeouts, (n) => n.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var S1 = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
      );
    }
  },
  C1 = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
    }
  },
  Kh = (e) => e instanceof Zg,
  hj = 1,
  Zg = class extends WC {
    constructor() {
      super(...arguments), (this.id = hj++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
      const e = tr(this);
      return e && e.getValue();
    }
    to(...e) {
      return Ln.to(this, e);
    }
    interpolate(...e) {
      return H4(), Ln.to(this, e);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(e) {
      e == 1 && this._attach();
    }
    observerRemoved(e) {
      e == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(e, t = !1) {
      gl(this, { type: "change", parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
      this.idle || ff.sort(this),
        gl(this, { type: "priority", parent: this, priority: e });
    }
  },
  Jo = Symbol.for("SpringPhase"),
  rk = 1,
  Gh = 2,
  Yh = 4,
  pp = (e) => (e[Jo] & rk) > 0,
  Wr = (e) => (e[Jo] & Gh) > 0,
  ns = (e) => (e[Jo] & Yh) > 0,
  k1 = (e, t) => (t ? (e[Jo] |= Gh | rk) : (e[Jo] &= ~Gh)),
  E1 = (e, t) => (t ? (e[Jo] |= Yh) : (e[Jo] &= ~Yh)),
  mj = class extends Zg {
    constructor(e, t) {
      if (
        (super(),
        (this.animation = new pj()),
        (this.defaultProps = {}),
        (this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !K.und(e) || !K.und(t))
      ) {
        const n = K.obj(e) ? { ...e } : { ...t, from: e };
        K.und(n.default) && (n.default = !0), this.start(n);
      }
    }
    get idle() {
      return !(Wr(this) || this._state.asyncTo) || ns(this);
    }
    get goal() {
      return Gt(this.animation.to);
    }
    get velocity() {
      const e = tr(this);
      return e instanceof Hl
        ? e.lastVelocity || 0
        : e.getPayload().map((t) => t.lastVelocity || 0);
    }
    get hasAnimated() {
      return pp(this);
    }
    get isAnimating() {
      return Wr(this);
    }
    get isPaused() {
      return ns(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(e) {
      let t = !0,
        n = !1;
      const r = this.animation;
      let { toValues: o } = r;
      const { config: i } = r,
        a = gf(r.to);
      !a && Cn(r.to) && (o = Bt(Gt(r.to))),
        r.values.forEach((u, c) => {
          if (u.done) return;
          const d = u.constructor == xl ? 1 : a ? a[c].lastPosition : o[c];
          let f = r.immediate,
            h = d;
          if (!f) {
            if (((h = u.lastPosition), i.tension <= 0)) {
              u.done = !0;
              return;
            }
            let p = (u.elapsedTime += e);
            const g = r.fromValues[c],
              w =
                u.v0 != null
                  ? u.v0
                  : (u.v0 = K.arr(i.velocity) ? i.velocity[c] : i.velocity);
            let v;
            const m =
              i.precision ||
              (g == d ? 0.005 : Math.min(1, Math.abs(d - g) * 0.001));
            if (K.und(i.duration))
              if (i.decay) {
                const x = i.decay === !0 ? 0.998 : i.decay,
                  S = Math.exp(-(1 - x) * p);
                (h = g + (w / (1 - x)) * (1 - S)),
                  (f = Math.abs(u.lastPosition - h) <= m),
                  (v = w * S);
              } else {
                v = u.lastVelocity == null ? w : u.lastVelocity;
                const x = i.restVelocity || m / 10,
                  S = i.clamp ? 0 : i.bounce,
                  E = !K.und(S),
                  b = g == d ? u.v0 > 0 : g < d;
                let k,
                  R = !1;
                const T = 1,
                  $ = Math.ceil(e / T);
                for (
                  let M = 0;
                  M < $ &&
                  ((k = Math.abs(v) > x),
                  !(!k && ((f = Math.abs(d - h) <= m), f)));
                  ++M
                ) {
                  E &&
                    ((R = h == d || h > d == b), R && ((v = -v * S), (h = d)));
                  const L = -i.tension * 1e-6 * (h - d),
                    _ = -i.friction * 0.001 * v,
                    N = (L + _) / i.mass;
                  (v = v + N * T), (h = h + v * T);
                }
              }
            else {
              let x = 1;
              i.duration > 0 &&
                (this._memoizedDuration !== i.duration &&
                  ((this._memoizedDuration = i.duration),
                  u.durationProgress > 0 &&
                    ((u.elapsedTime = i.duration * u.durationProgress),
                    (p = u.elapsedTime += e))),
                (x = (i.progress || 0) + p / this._memoizedDuration),
                (x = x > 1 ? 1 : x < 0 ? 0 : x),
                (u.durationProgress = x)),
                (h = g + i.easing(x) * (d - g)),
                (v = (h - u.lastPosition) / e),
                (f = x == 1);
            }
            (u.lastVelocity = v),
              Number.isNaN(h) &&
                (console.warn("Got NaN while animating:", this), (f = !0));
          }
          a && !a[c].done && (f = !1),
            f ? (u.done = !0) : (t = !1),
            u.setValue(h, i.round) && (n = !0);
        });
      const s = tr(this),
        l = s.getValue();
      if (t) {
        const u = Gt(r.to);
        (l !== u || n) && !i.decay
          ? (s.setValue(u), this._onChange(u))
          : n && i.decay && this._onChange(l),
          this._stop();
      } else n && this._onChange(l);
    }
    set(e) {
      return (
        ye.batchedUpdates(() => {
          this._stop(), this._focus(e), this._set(e);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (Wr(this)) {
        const { to: e, config: t } = this.animation;
        ye.batchedUpdates(() => {
          this._onStart(), t.decay || this._set(e, !1), this._stop();
        });
      }
      return this;
    }
    update(e) {
      return (this.queue || (this.queue = [])).push(e), this;
    }
    start(e, t) {
      let n;
      return (
        K.und(e)
          ? ((n = this.queue || []), (this.queue = []))
          : (n = [K.obj(e) ? e : { ...t, to: e }]),
        Promise.all(n.map((r) => this._update(r))).then((r) => Qg(this, r))
      );
    }
    stop(e) {
      const { to: t } = this.animation;
      return (
        this._focus(this.get()),
        wl(this._state, e && this._lastCallId),
        ye.batchedUpdates(() => this._stop(t, e)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(e) {
      e.type == "change"
        ? this._start()
        : e.type == "priority" && (this.priority = e.priority + 1);
    }
    _prepareNode(e) {
      const t = this.key || "";
      let { to: n, from: r } = e;
      (n = K.obj(n) ? n[t] : n),
        (n == null || Hh(n)) && (n = void 0),
        (r = K.obj(r) ? r[t] : r),
        r == null && (r = void 0);
      const o = { to: n, from: r };
      return (
        pp(this) ||
          (e.reverse && ([n, r] = [r, n]),
          (r = Gt(r)),
          K.und(r) ? tr(this) || this._set(n) : this._set(r)),
        o
      );
    }
    _update({ ...e }, t) {
      const { key: n, defaultProps: r } = this;
      e.default &&
        Object.assign(
          r,
          Xg(e, (a, s) => (/^on/.test(s) ? ZC(a, n) : a))
        ),
        R1(this, e, "onProps"),
        os(this, "onProps", e, this);
      const o = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
        );
      const i = this._state;
      return ek(++this._lastCallId, {
        key: n,
        props: e,
        defaultProps: r,
        state: i,
        actions: {
          pause: () => {
            ns(this) ||
              (E1(this, !0),
              hs(i.pauseQueue),
              os(this, "onPause", Kn(this, rs(this, this.animation.to)), this));
          },
          resume: () => {
            ns(this) &&
              (E1(this, !1),
              Wr(this) && this._resume(),
              hs(i.resumeQueue),
              os(
                this,
                "onResume",
                Kn(this, rs(this, this.animation.to)),
                this
              ));
          },
          start: this._merge.bind(this, o),
        },
      }).then((a) => {
        if (e.loop && a.finished && !(t && a.noop)) {
          const s = ok(e);
          if (s) return this._update(s, !0);
        }
        return a;
      });
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(Yi(this));
      const r = !K.und(e.to),
        o = !K.und(e.from);
      if (r || o)
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return n(Yi(this));
      const { key: i, defaultProps: a, animation: s } = this,
        { to: l, from: u } = s;
      let { to: c = l, from: d = u } = e;
      o && !r && (!t.default || K.und(c)) && (c = d),
        t.reverse && ([c, d] = [d, c]);
      const f = !vr(d, u);
      f && (s.from = d), (d = Gt(d));
      const h = !vr(c, l);
      h && this._focus(c);
      const p = Hh(t.to),
        { config: g } = s,
        { decay: w, velocity: v } = g;
      (r || o) && (g.velocity = 0),
        t.config &&
          !p &&
          fj(
            g,
            Yt(t.config, i),
            t.config !== a.config ? Yt(a.config, i) : void 0
          );
      let m = tr(this);
      if (!m || K.und(c)) return n(Kn(this, !0));
      const x = K.und(t.reset) ? o && !t.default : !K.und(d) && _s(t.reset, i),
        S = x ? d : this.get(),
        E = bl(c),
        b = K.num(E) || K.arr(E) || mf(E),
        k = !p && (!b || _s(a.immediate || t.immediate, i));
      if (h) {
        const M = Wh(c);
        if (M !== m.constructor)
          if (k) m = this._set(E);
          else
            throw Error(
              `Cannot animate between ${m.constructor.name} and ${M.name}, as the "to" prop suggests`
            );
      }
      const R = m.constructor;
      let T = Cn(c),
        $ = !1;
      if (!T) {
        const M = x || (!pp(this) && f);
        (h || M) && (($ = vr(bl(S), E)), (T = !$)),
          ((!vr(s.immediate, k) && !k) ||
            !vr(g.decay, w) ||
            !vr(g.velocity, v)) &&
            (T = !0);
      }
      if (
        ($ && Wr(this) && (s.changed && !x ? (T = !0) : T || this._stop(l)),
        !p &&
          ((T || Cn(l)) &&
            ((s.values = m.getPayload()),
            (s.toValues = Cn(c) ? null : R == xl ? [1] : Bt(E))),
          s.immediate != k && ((s.immediate = k), !k && !x && this._set(l)),
          T))
      ) {
        const { onRest: M } = s;
        xe(gj, (_) => R1(this, t, _));
        const L = Kn(this, rs(this, l));
        hs(this._pendingCalls, L),
          this._pendingCalls.add(n),
          s.changed &&
            ye.batchedUpdates(() => {
              var _;
              (s.changed = !x),
                M == null || M(L, this),
                x
                  ? Yt(a.onRest, L)
                  : (_ = s.onStart) == null || _.call(s, L, this);
            });
      }
      x && this._set(S),
        p
          ? n(nk(t.to, t, this._state, this))
          : T
          ? this._start()
          : Wr(this) && !h
          ? this._pendingCalls.add(n)
          : n(tk(S));
    }
    _focus(e) {
      const t = this.animation;
      e !== t.to &&
        (h1(this) && this._detach(), (t.to = e), h1(this) && this._attach());
    }
    _attach() {
      let e = 0;
      const { to: t } = this.animation;
      Cn(t) && (Ta(t, this), Kh(t) && (e = t.priority + 1)),
        (this.priority = e);
    }
    _detach() {
      const { to: e } = this.animation;
      Cn(e) && vl(e, this);
    }
    _set(e, t = !0) {
      const n = Gt(e);
      if (!K.und(n)) {
        const r = tr(this);
        if (!r || !vr(n, r.getValue())) {
          const o = Wh(n);
          !r || r.constructor != o ? Yg(this, o.create(n)) : r.setValue(n),
            r &&
              ye.batchedUpdates(() => {
                this._onChange(n, t);
              });
        }
      }
      return tr(this);
    }
    _onStart() {
      const e = this.animation;
      e.changed ||
        ((e.changed = !0), os(this, "onStart", Kn(this, rs(this, e.to)), this));
    }
    _onChange(e, t) {
      t || (this._onStart(), Yt(this.animation.onChange, e, this)),
        Yt(this.defaultProps.onChange, e, this),
        super._onChange(e, t);
    }
    _start() {
      const e = this.animation;
      tr(this).reset(Gt(e.to)),
        e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)),
        Wr(this) || (k1(this, !0), ns(this) || this._resume());
    }
    _resume() {
      Ln.skipAnimation ? this.finish() : ff.start(this);
    }
    _stop(e, t) {
      if (Wr(this)) {
        k1(this, !1);
        const n = this.animation;
        xe(n.values, (o) => {
          o.done = !0;
        }),
          n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
          gl(this, { type: "idle", parent: this });
        const r = t ? Yi(this.get()) : Kn(this.get(), rs(this, e ?? n.to));
        hs(this._pendingCalls, r),
          n.changed && ((n.changed = !1), os(this, "onRest", r, this));
      }
    }
  };
function rs(e, t) {
  const n = bl(t),
    r = bl(e.get());
  return vr(r, n);
}
function ok(e, t = e.loop, n = e.to) {
  const r = Yt(t);
  if (r) {
    const o = r !== !0 && qg(r),
      i = (o || e).reverse,
      a = !o || o.reset;
    return Ic({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !i || Hh(n) ? n : void 0,
      from: a ? e.from : void 0,
      reset: a,
      ...o,
    });
  }
}
function Ic(e) {
  const { to: t, from: n } = (e = qg(e)),
    r = new Set();
  return (
    K.obj(t) && P1(t, r),
    K.obj(n) && P1(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  );
}
function P1(e, t) {
  pr(e, (n, r) => n != null && t.add(r));
}
var gj = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function R1(e, t, n) {
  e.animation[n] = t[n] !== JC(t, n) ? ZC(t[n], e.key) : void 0;
}
function os(e, t, ...n) {
  var r, o, i, a;
  (o = (r = e.animation)[t]) == null || o.call(r, ...n),
    (a = (i = e.defaultProps)[t]) == null || a.call(i, ...n);
}
var vj = ["onStart", "onChange", "onRest"],
  yj = 1,
  xj = class {
    constructor(e, t) {
      (this.id = yj++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = {
          paused: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._events = {
          onStart: new Map(),
          onChange: new Map(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      const e = {};
      return this.each((t, n) => (e[n] = t.get())), e;
    }
    set(e) {
      for (const t in e) {
        const n = e[t];
        K.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(Ic(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = Bt(e).map(Ic)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (lk(this, t), bj(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        const n = this.springs;
        xe(Bt(t), (r) => n[r].stop(!!e));
      } else wl(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
      return this;
    }
    pause(e) {
      if (K.und(e)) this.start({ pause: !0 });
      else {
        const t = this.springs;
        xe(Bt(e), (n) => t[n].pause());
      }
      return this;
    }
    resume(e) {
      if (K.und(e)) this.start({ pause: !1 });
      else {
        const t = this.springs;
        xe(Bt(e), (n) => t[n].resume());
      }
      return this;
    }
    each(e) {
      pr(this.springs, e);
    }
    _onFrame() {
      const { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0,
        o = this._changed.size > 0;
      ((r && !this._started) || (o && !this._started)) &&
        ((this._started = !0),
        Os(e, ([s, l]) => {
          (l.value = this.get()), s(l, this, this._item);
        }));
      const i = !r && this._started,
        a = o || (i && n.size) ? this.get() : null;
      o &&
        t.size &&
        Os(t, ([s, l]) => {
          (l.value = a), s(l, this, this._item);
        }),
        i &&
          ((this._started = !1),
          Os(n, ([s, l]) => {
            (l.value = a), s(l, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == "change")
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == "idle") this._active.delete(e.parent);
      else return;
      ye.onFrame(this._onFrame);
    }
  };
function bj(e, t) {
  return Promise.all(t.map((n) => ik(e, n))).then((n) => Qg(e, n));
}
async function ik(e, t, n) {
  const { keys: r, to: o, from: i, loop: a, onRest: s, onResolve: l } = t,
    u = K.obj(t.default) && t.default;
  a && (t.loop = !1), o === !1 && (t.to = null), i === !1 && (t.from = null);
  const c = K.arr(o) || K.fun(o) ? o : void 0;
  c
    ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
    : xe(vj, (g) => {
        const w = t[g];
        if (K.fun(w)) {
          const v = e._events[g];
          (t[g] = ({ finished: m, cancelled: x }) => {
            const S = v.get(w);
            S
              ? (m || (S.finished = !1), x && (S.cancelled = !0))
              : v.set(w, {
                  value: null,
                  finished: m || !1,
                  cancelled: x || !1,
                });
          }),
            u && (u[g] = t[g]);
        }
      });
  const d = e._state;
  t.pause === !d.paused
    ? ((d.paused = t.pause), hs(t.pause ? d.pauseQueue : d.resumeQueue))
    : d.paused && (t.pause = !0);
  const f = (r || Object.keys(e.springs)).map((g) => e.springs[g].start(t)),
    h = t.cancel === !0 || JC(t, "cancel") === !0;
  (c || (h && d.asyncId)) &&
    f.push(
      ek(++e._lastAsyncId, {
        props: t,
        state: d,
        actions: {
          pause: Bh,
          resume: Bh,
          start(g, w) {
            h
              ? (wl(d, e._lastAsyncId), w(Yi(e)))
              : ((g.onRest = s), w(nk(c, g, d, e)));
          },
        },
      })
    ),
    d.paused &&
      (await new Promise((g) => {
        d.resumeQueue.add(g);
      }));
  const p = Qg(e, await Promise.all(f));
  if (a && p.finished && !(n && p.noop)) {
    const g = ok(t, a, o);
    if (g) return lk(e, [g]), ik(e, g, !0);
  }
  return l && ye.batchedUpdates(() => l(p, e, e.item)), p;
}
function wj(e, t) {
  const n = { ...e.springs };
  return (
    t &&
      xe(Bt(t), (r) => {
        K.und(r.keys) && (r = Ic(r)),
          K.obj(r.to) || (r = { ...r, to: void 0 }),
          sk(n, r, (o) => ak(o));
      }),
    Sj(e, n),
    n
  );
}
function Sj(e, t) {
  pr(t, (n, r) => {
    e.springs[r] || ((e.springs[r] = n), Ta(n, e));
  });
}
function ak(e, t) {
  const n = new mj();
  return (n.key = e), t && Ta(n, t), n;
}
function sk(e, t, n) {
  t.keys &&
    xe(t.keys, (r) => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function lk(e, t) {
  xe(t, (n) => {
    sk(e.springs, n, (r) => ak(r, e));
  });
}
var yf = ({ children: e, ...t }) => {
    const n = y.useContext(Lc),
      r = t.pause || !!n.pause,
      o = t.immediate || !!n.immediate;
    t = Y4(() => ({ pause: r, immediate: o }), [r, o]);
    const { Provider: i } = Lc;
    return y.createElement(i, { value: t }, e);
  },
  Lc = Cj(yf, {});
yf.Provider = Lc.Provider;
yf.Consumer = Lc.Consumer;
function Cj(e, t) {
  return (
    Object.assign(e, y.createContext(t)),
    (e.Provider._context = e),
    (e.Consumer._context = e),
    e
  );
}
var kj = () => {
  const e = [],
    t = function (r) {
      K4();
      const o = [];
      return (
        xe(e, (i, a) => {
          if (K.und(r)) o.push(i.start());
          else {
            const s = n(r, i, a);
            s && o.push(i.start(s));
          }
        }),
        o
      );
    };
  (t.current = e),
    (t.add = function (r) {
      e.includes(r) || e.push(r);
    }),
    (t.delete = function (r) {
      const o = e.indexOf(r);
      ~o && e.splice(o, 1);
    }),
    (t.pause = function () {
      return xe(e, (r) => r.pause(...arguments)), this;
    }),
    (t.resume = function () {
      return xe(e, (r) => r.resume(...arguments)), this;
    }),
    (t.set = function (r) {
      xe(e, (o, i) => {
        const a = K.fun(r) ? r(i, o) : r;
        a && o.set(a);
      });
    }),
    (t.start = function (r) {
      const o = [];
      return (
        xe(e, (i, a) => {
          if (K.und(r)) o.push(i.start());
          else {
            const s = this._getProps(r, i, a);
            s && o.push(i.start(s));
          }
        }),
        o
      );
    }),
    (t.stop = function () {
      return xe(e, (r) => r.stop(...arguments)), this;
    }),
    (t.update = function (r) {
      return xe(e, (o, i) => o.update(this._getProps(r, o, i))), this;
    });
  const n = function (r, o, i) {
    return K.fun(r) ? r(i, o) : r;
  };
  return (t._getProps = n), t;
};
function Ej(e, t, n) {
  const r = K.fun(t) && t,
    {
      reset: o,
      sort: i,
      trail: a = 0,
      expires: s = !0,
      exitBeforeEnter: l = !1,
      onDestroyed: u,
      ref: c,
      config: d,
    } = r ? r() : t,
    f = y.useMemo(() => (r || arguments.length == 3 ? kj() : void 0), []),
    h = Bt(e),
    p = [],
    g = y.useRef(null),
    w = o ? null : g.current;
  Io(() => {
    g.current = p;
  }),
    XC(
      () => (
        xe(p, (N) => {
          f == null || f.add(N.ctrl), (N.ctrl.ref = f);
        }),
        () => {
          xe(g.current, (N) => {
            N.expired && clearTimeout(N.expirationId),
              x1(N.ctrl, f),
              N.ctrl.stop(!0);
          });
        }
      )
    );
  const v = Rj(h, r ? r() : t, w),
    m = (o && g.current) || [];
  Io(() =>
    xe(m, ({ ctrl: N, item: A, key: D }) => {
      x1(N, f), Yt(u, A, D);
    })
  );
  const x = [];
  if (
    (w &&
      xe(w, (N, A) => {
        N.expired
          ? (clearTimeout(N.expirationId), m.push(N))
          : ((A = x[A] = v.indexOf(N.key)), ~A && (p[A] = N));
      }),
    xe(h, (N, A) => {
      p[A] ||
        ((p[A] = { key: v[A], item: N, phase: "mount", ctrl: new xj() }),
        (p[A].ctrl.item = N));
    }),
    x.length)
  ) {
    let N = -1;
    const { leave: A } = r ? r() : t;
    xe(x, (D, F) => {
      const O = w[F];
      ~D
        ? ((N = p.indexOf(O)), (p[N] = { ...O, item: h[D] }))
        : A && p.splice(++N, 0, O);
    });
  }
  K.fun(i) && p.sort((N, A) => i(N.item, A.item));
  let S = -a;
  const E = YC(),
    b = Xg(t),
    k = new Map(),
    R = y.useRef(new Map()),
    T = y.useRef(!1);
  xe(p, (N, A) => {
    const D = N.key,
      F = N.phase,
      O = r ? r() : t;
    let j, U;
    const X = Yt(O.delay || 0, D);
    if (F == "mount") (j = O.enter), (U = "enter");
    else {
      const q = v.indexOf(D) < 0;
      if (F != "leave")
        if (q) (j = O.leave), (U = "leave");
        else if ((j = O.update)) U = "update";
        else return;
      else if (!q) (j = O.enter), (U = "enter");
      else return;
    }
    if (
      ((j = Yt(j, N.item, A)), (j = K.obj(j) ? qg(j) : { to: j }), !j.config)
    ) {
      const q = d || b.config;
      j.config = Yt(q, N.item, A, U);
    }
    S += a;
    const Y = {
      ...b,
      delay: X + S,
      ref: c,
      immediate: O.immediate,
      reset: !1,
      ...j,
    };
    if (U == "enter" && K.und(Y.from)) {
      const q = r ? r() : t,
        ne = K.und(q.initial) || w ? q.from : q.initial;
      Y.from = Yt(ne, N.item, A);
    }
    const { onResolve: ce } = Y;
    Y.onResolve = (q) => {
      Yt(ce, q);
      const ne = g.current,
        ge = ne.find((we) => we.key === D);
      if (ge && !(q.cancelled && ge.phase != "update") && ge.ctrl.idle) {
        const we = ne.every((H) => H.ctrl.idle);
        if (ge.phase == "leave") {
          const H = Yt(s, ge.item);
          if (H !== !1) {
            const re = H === !0 ? 0 : H;
            if (((ge.expired = !0), !we && re > 0)) {
              re <= 2147483647 && (ge.expirationId = setTimeout(E, re));
              return;
            }
          }
        }
        we &&
          ne.some((H) => H.expired) &&
          (R.current.delete(ge), l && (T.current = !0), E());
      }
    };
    const Q = wj(N.ctrl, Y);
    U === "leave" && l
      ? R.current.set(N, { phase: U, springs: Q, payload: Y })
      : k.set(N, { phase: U, springs: Q, payload: Y });
  });
  const $ = y.useContext(yf),
    M = Q4($),
    L = $ !== M && lj($);
  Io(() => {
    L &&
      xe(p, (N) => {
        N.ctrl.start({ default: $ });
      });
  }, [$]),
    xe(k, (N, A) => {
      if (R.current.size) {
        const D = p.findIndex((F) => F.key === A.key);
        p.splice(D, 1);
      }
    }),
    Io(
      () => {
        xe(R.current.size ? R.current : k, ({ phase: N, payload: A }, D) => {
          const { ctrl: F } = D;
          (D.phase = N),
            f == null || f.add(F),
            L && N == "enter" && F.start({ default: $ }),
            A &&
              (uj(F, A.ref),
              (F.ref || f) && !T.current
                ? F.update(A)
                : (F.start(A), T.current && (T.current = !1)));
        });
      },
      o ? void 0 : n
    );
  const _ = (N) =>
    y.createElement(
      y.Fragment,
      null,
      p.map((A, D) => {
        const { springs: F } = k.get(A) || A.ctrl,
          O = N({ ...F }, A.item, A, D);
        return O && O.type
          ? y.createElement(O.type, {
              ...O.props,
              key: K.str(A.key) || K.num(A.key) ? A.key : A.ctrl.id,
              ref: O.ref,
            })
          : O;
      })
    );
  return f ? [_, f] : _;
}
var Pj = 1;
function Rj(e, { key: t, keys: n = t }, r) {
  if (n === null) {
    const o = new Set();
    return e.map((i) => {
      const a =
        r && r.find((s) => s.item === i && s.phase !== "leave" && !o.has(s));
      return a ? (o.add(a), a.key) : Pj++;
    });
  }
  return K.und(n) ? e : K.fun(n) ? e.map(n) : Bt(n);
}
var $j = class extends Zg {
  constructor(e, t) {
    super(),
      (this.source = e),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = hl(...t));
    const n = this._get(),
      r = Wh(n);
    Yg(this, r.create(n));
  }
  advance(e) {
    const t = this._get(),
      n = this.get();
    vr(t, n) || (tr(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && $1(this._active) && hp(this);
  }
  _get() {
    const e = K.arr(this.source) ? this.source.map(Gt) : Bt(Gt(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !$1(this._active) &&
      ((this.idle = !1),
      xe(gf(this), (e) => {
        e.done = !1;
      }),
      Ln.skipAnimation
        ? (ye.batchedUpdates(() => this.advance()), hp(this))
        : ff.start(this));
  }
  _attach() {
    let e = 1;
    xe(Bt(this.source), (t) => {
      Cn(t) && Ta(t, this),
        Kh(t) &&
          (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    xe(Bt(this.source), (e) => {
      Cn(e) && vl(e, this);
    }),
      this._active.clear(),
      hp(this);
  }
  eventObserved(e) {
    e.type == "change"
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : e.type == "idle"
      ? this._active.delete(e.parent)
      : e.type == "priority" &&
        (this.priority = Bt(this.source).reduce(
          (t, n) => Math.max(t, (Kh(n) ? n.priority : 0) + 1),
          0
        ));
  }
};
function Mj(e) {
  return e.idle !== !1;
}
function $1(e) {
  return !e.size || Array.from(e).every(Mj);
}
function hp(e) {
  e.idle ||
    ((e.idle = !0),
    xe(gf(e), (t) => {
      t.done = !0;
    }),
    gl(e, { type: "idle", parent: e }));
}
Ln.assign({ createStringInterpolator: KC, to: (e, t) => new $j(e, t) });
var uk = /^--/;
function Tj(e, t) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : typeof t == "number" &&
      t !== 0 &&
      !uk.test(e) &&
      !(Is.hasOwnProperty(e) && Is[e])
    ? t + "px"
    : ("" + t).trim();
}
var M1 = {};
function Nj(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  const n =
      e.nodeName === "filter" ||
      (e.parentNode && e.parentNode.nodeName === "filter"),
    {
      style: r,
      children: o,
      scrollTop: i,
      scrollLeft: a,
      viewBox: s,
      ...l
    } = t,
    u = Object.values(l),
    c = Object.keys(l).map((d) =>
      n || e.hasAttribute(d)
        ? d
        : M1[d] || (M1[d] = d.replace(/([A-Z])/g, (f) => "-" + f.toLowerCase()))
    );
  o !== void 0 && (e.textContent = o);
  for (const d in r)
    if (r.hasOwnProperty(d)) {
      const f = Tj(d, r[d]);
      uk.test(d) ? e.style.setProperty(d, f) : (e.style[d] = f);
    }
  c.forEach((d, f) => {
    e.setAttribute(d, u[f]);
  }),
    i !== void 0 && (e.scrollTop = i),
    a !== void 0 && (e.scrollLeft = a),
    s !== void 0 && e.setAttribute("viewBox", s);
}
var Is = {
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
  Oj = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  Aj = ["Webkit", "Ms", "Moz", "O"];
Is = Object.keys(Is).reduce(
  (e, t) => (Aj.forEach((n) => (e[Oj(n, t)] = e[t])), e),
  Is
);
var _j = /^(matrix|translate|scale|rotate|skew)/,
  Ij = /^(translate)/,
  Lj = /^(rotate|skew)/,
  mp = (e, t) => (K.num(e) && e !== 0 ? e + t : e),
  Gu = (e, t) =>
    K.arr(e)
      ? e.every((n) => Gu(n, t))
      : K.num(e)
      ? e === t
      : parseFloat(e) === t,
  jj = class extends vf {
    constructor({ x: e, y: t, z: n, ...r }) {
      const o = [],
        i = [];
      (e || t || n) &&
        (o.push([e || 0, t || 0, n || 0]),
        i.push((a) => [
          `translate3d(${a.map((s) => mp(s, "px")).join(",")})`,
          Gu(a, 0),
        ])),
        pr(r, (a, s) => {
          if (s === "transform")
            o.push([a || ""]), i.push((l) => [l, l === ""]);
          else if (_j.test(s)) {
            if ((delete r[s], K.und(a))) return;
            const l = Ij.test(s) ? "px" : Lj.test(s) ? "deg" : "";
            o.push(Bt(a)),
              i.push(
                s === "rotate3d"
                  ? ([u, c, d, f]) => [
                      `rotate3d(${u},${c},${d},${mp(f, l)})`,
                      Gu(f, 0),
                    ]
                  : (u) => [
                      `${s}(${u.map((c) => mp(c, l)).join(",")})`,
                      Gu(u, s.startsWith("scale") ? 1 : 0),
                    ]
              );
          }
        }),
        o.length && (r.transform = new Dj(o, i)),
        super(r);
    }
  },
  Dj = class extends WC {
    constructor(e, t) {
      super(), (this.inputs = e), (this.transforms = t), (this._value = null);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let e = "",
        t = !0;
      return (
        xe(this.inputs, (n, r) => {
          const o = Gt(n[0]),
            [i, a] = this.transforms[r](K.arr(o) ? o : n.map(Gt));
          (e += " " + i), (t = t && a);
        }),
        t ? "none" : e
      );
    }
    observerAdded(e) {
      e == 1 && xe(this.inputs, (t) => xe(t, (n) => Cn(n) && Ta(n, this)));
    }
    observerRemoved(e) {
      e == 0 && xe(this.inputs, (t) => xe(t, (n) => Cn(n) && vl(n, this)));
    }
    eventObserved(e) {
      e.type == "change" && (this._value = null), gl(this, e);
    }
  },
  Fj = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ];
Ln.assign({
  batchedUpdates: yo.unstable_batchedUpdates,
  createStringInterpolator: KC,
  colors: C4,
});
var zj = rj(Fj, {
    applyAnimatedValues: Nj,
    createAnimatedStyle: (e) => new jj(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }),
  Bj = zj.animated;
function Hn(e) {
  return function () {
    return e;
  };
}
const Uj = Math.PI,
  gp = 2 * Uj;
function ck(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Wj(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Hj(e) {
  return e;
}
function Vj() {
  var e = Hj,
    t = Wj,
    n = null,
    r = Hn(0),
    o = Hn(gp),
    i = Hn(0);
  function a(s) {
    var l,
      u = (s = ck(s)).length,
      c,
      d,
      f = 0,
      h = new Array(u),
      p = new Array(u),
      g = +r.apply(this, arguments),
      w = Math.min(gp, Math.max(-gp, o.apply(this, arguments) - g)),
      v,
      m = Math.min(Math.abs(w) / u, i.apply(this, arguments)),
      x = m * (w < 0 ? -1 : 1),
      S;
    for (l = 0; l < u; ++l)
      (S = p[(h[l] = l)] = +e(s[l], l, s)) > 0 && (f += S);
    for (
      t != null
        ? h.sort(function (E, b) {
            return t(p[E], p[b]);
          })
        : n != null &&
          h.sort(function (E, b) {
            return n(s[E], s[b]);
          }),
        l = 0,
        d = f ? (w - u * x) / f : 0;
      l < u;
      ++l, g = v
    )
      (c = h[l]),
        (S = p[c]),
        (v = g + (S > 0 ? S * d : 0) + x),
        (p[c] = {
          data: s[c],
          index: l,
          value: S,
          startAngle: g,
          endAngle: v,
          padAngle: m,
        });
    return p;
  }
  return (
    (a.value = function (s) {
      return arguments.length
        ? ((e = typeof s == "function" ? s : Hn(+s)), a)
        : e;
    }),
    (a.sortValues = function (s) {
      return arguments.length ? ((t = s), (n = null), a) : t;
    }),
    (a.sort = function (s) {
      return arguments.length ? ((n = s), (t = null), a) : n;
    }),
    (a.startAngle = function (s) {
      return arguments.length
        ? ((r = typeof s == "function" ? s : Hn(+s)), a)
        : r;
    }),
    (a.endAngle = function (s) {
      return arguments.length
        ? ((o = typeof s == "function" ? s : Hn(+s)), a)
        : o;
    }),
    (a.padAngle = function (s) {
      return arguments.length
        ? ((i = typeof s == "function" ? s : Hn(+s)), a)
        : i;
    }),
    a
  );
}
function ha(e, t) {
  if ((a = e.length) > 1)
    for (var n = 1, r, o, i = e[t[0]], a, s = i.length; n < a; ++n)
      for (o = i, i = e[t[n]], r = 0; r < s; ++r)
        i[r][1] += i[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1];
}
function ma(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; ) n[t] = t;
  return n;
}
function Kj(e, t) {
  return e[t];
}
function Gj(e) {
  const t = [];
  return (t.key = e), t;
}
function dk() {
  var e = Hn([]),
    t = ma,
    n = ha,
    r = Kj;
  function o(i) {
    var a = Array.from(e.apply(this, arguments), Gj),
      s,
      l = a.length,
      u = -1,
      c;
    for (const d of i)
      for (s = 0, ++u; s < l; ++s)
        (a[s][u] = [0, +r(d, a[s].key, u, i)]).data = d;
    for (s = 0, c = ck(t(a)); s < l; ++s) a[c[s]].index = s;
    return n(a, c), a;
  }
  return (
    (o.keys = function (i) {
      return arguments.length
        ? ((e = typeof i == "function" ? i : Hn(Array.from(i))), o)
        : e;
    }),
    (o.value = function (i) {
      return arguments.length
        ? ((r = typeof i == "function" ? i : Hn(+i)), o)
        : r;
    }),
    (o.order = function (i) {
      return arguments.length
        ? ((t =
            i == null ? ma : typeof i == "function" ? i : Hn(Array.from(i))),
          o)
        : t;
    }),
    (o.offset = function (i) {
      return arguments.length ? ((n = i ?? ha), o) : n;
    }),
    o
  );
}
function Yj(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, o = 0, i = e[0].length, a; o < i; ++o) {
      for (a = n = 0; n < r; ++n) a += e[n][o][1] || 0;
      if (a) for (n = 0; n < r; ++n) e[n][o][1] /= a;
    }
    ha(e, t);
  }
}
function Xj(e, t) {
  if ((l = e.length) > 0)
    for (var n, r = 0, o, i, a, s, l, u = e[t[0]].length; r < u; ++r)
      for (a = s = 0, n = 0; n < l; ++n)
        (i = (o = e[t[n]][r])[1] - o[0]) > 0
          ? ((o[0] = a), (o[1] = a += i))
          : i < 0
          ? ((o[1] = s), (o[0] = s += i))
          : ((o[0] = 0), (o[1] = i));
}
function qj(e, t) {
  if ((o = e.length) > 0) {
    for (var n = 0, r = e[t[0]], o, i = r.length; n < i; ++n) {
      for (var a = 0, s = 0; a < o; ++a) s += e[a][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    ha(e, t);
  }
}
function Qj(e, t) {
  if (!(!((a = e.length) > 0) || !((i = (o = e[t[0]]).length) > 0))) {
    for (var n = 0, r = 1, o, i, a; r < i; ++r) {
      for (var s = 0, l = 0, u = 0; s < a; ++s) {
        for (
          var c = e[t[s]],
            d = c[r][1] || 0,
            f = c[r - 1][1] || 0,
            h = (d - f) / 2,
            p = 0;
          p < s;
          ++p
        ) {
          var g = e[t[p]],
            w = g[r][1] || 0,
            v = g[r - 1][1] || 0;
          h += w - v;
        }
        (l += d), (u += h * d);
      }
      (o[r - 1][1] += o[r - 1][0] = n), l && (n -= u / l);
    }
    (o[r - 1][1] += o[r - 1][0] = n), ha(e, t);
  }
}
function fk(e) {
  var t = e.map(Zj);
  return ma(e).sort(function (n, r) {
    return t[n] - t[r];
  });
}
function Zj(e) {
  for (var t = -1, n = 0, r = e.length, o, i = -1 / 0; ++t < r; )
    (o = +e[t][1]) > i && ((i = o), (n = t));
  return n;
}
function pk(e) {
  var t = e.map(hk);
  return ma(e).sort(function (n, r) {
    return t[n] - t[r];
  });
}
function hk(e) {
  for (var t = 0, n = -1, r = e.length, o; ++n < r; )
    (o = +e[n][1]) && (t += o);
  return t;
}
function Jj(e) {
  return pk(e).reverse();
}
function eD(e) {
  var t = e.length,
    n,
    r,
    o = e.map(hk),
    i = fk(e),
    a = 0,
    s = 0,
    l = [],
    u = [];
  for (n = 0; n < t; ++n)
    (r = i[n]), a < s ? ((a += o[r]), l.push(r)) : ((s += o[r]), u.push(r));
  return u.reverse().concat(l);
}
function tD(e) {
  return ma(e).reverse();
}
const vp = {
    appearance: fk,
    ascending: pk,
    descending: Jj,
    insideOut: eD,
    none: ma,
    reverse: tD,
  },
  yp = { expand: Yj, diverging: Xj, none: ha, silhouette: qj, wiggle: Qj },
  mk = (e) => {
    const { series: t, seriesOrder: n, defaultStrategy: r } = e,
      o = [],
      i = {};
    return (
      n.forEach((a) => {
        const { stack: s, stackOrder: l, stackOffset: u } = t[a];
        if (s === void 0)
          o.push({ ids: [a], stackingOrder: vp.none, stackingOffset: yp.none });
        else if (i[s] === void 0) {
          var c, d;
          (i[s] = o.length),
            o.push({
              ids: [a],
              stackingOrder:
                vp[
                  (c = l ?? (r == null ? void 0 : r.stackOrder)) != null
                    ? c
                    : "none"
                ],
              stackingOffset:
                yp[
                  (d = u ?? (r == null ? void 0 : r.stackOffset)) != null
                    ? d
                    : "diverging"
                ],
            });
        } else
          o[i[s]].ids.push(a),
            l !== void 0 && (o[i[s]].stackingOrder = vp[l]),
            u !== void 0 && (o[i[s]].stackingOffset = yp[u]);
      }),
      o
    );
  };
function Jg(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      var o;
      n[r] = P({}, e[r], {
        valueFormatter: (o = e[r].valueFormatter) != null ? o : t,
      });
    }),
    n
  );
}
const nD = (e, t) => {
    var n;
    const { seriesOrder: r, series: o } = e,
      i = mk(e),
      a = (n = t) != null ? n : [];
    r.forEach((l) => {
      const u = o[l].data;
      if (u !== void 0)
        u.forEach((c, d) => {
          a.length <= d ? a.push({ [l]: c }) : (a[d][l] = c);
        });
      else if (t === void 0)
        throw new Error(
          [
            `MUI-X-Charts: bar series with id='${l}' has no data.`,
            "Either provide a data property to the series or use the dataset prop.",
          ].join(`
`)
        );
    });
    const s = {};
    return (
      i.forEach((l) => {
        const { ids: u, stackingOffset: c, stackingOrder: d } = l,
          f = dk()
            .keys(
              u.map((h) => {
                const p = o[h].dataKey;
                return o[h].data === void 0 && p !== void 0 ? p : h;
              })
            )
            .value((h, p) => {
              var g;
              return (g = h[p]) != null ? g : 0;
            })
            .order(d)
            .offset(c)(a);
        u.forEach((h, p) => {
          const g = o[h].dataKey;
          s[h] = P({ layout: "vertical" }, o[h], {
            data: g
              ? t.map((w) => {
                  const v = w[g];
                  return typeof v != "number" ? 0 : v;
                })
              : o[h].data,
            stackedData: f[p].map(([w, v]) => [w, v]),
          });
        });
      }),
      {
        seriesOrder: r,
        stackingGroups: i,
        series: Jg(s, (l) => (l == null ? void 0 : l.toLocaleString())),
      }
    );
  },
  rD = nD,
  oD = ({ series: e, seriesOrder: t }) => ({
    series: Jg(e, (n) => `(${n.x}, ${n.y})`),
    seriesOrder: t,
  }),
  iD = oD,
  aD = (e, t) => {
    var n;
    const { seriesOrder: r, series: o } = e,
      i = mk(P({}, e, { defaultStrategy: { stackOffset: "none" } })),
      a = (n = t) != null ? n : [];
    r.forEach((l) => {
      const u = o[l].data;
      u !== void 0 &&
        u.forEach((c, d) => {
          a.length <= d ? a.push({ [l]: c }) : (a[d][l] = c);
        });
    });
    const s = {};
    return (
      i.forEach((l) => {
        const { ids: u, stackingOrder: c, stackingOffset: d } = l,
          f = dk()
            .keys(
              u.map((h) => {
                const p = o[h].dataKey;
                return o[h].data === void 0 && p !== void 0 ? p : h;
              })
            )
            .value((h, p) => {
              var g;
              return (g = h[p]) != null ? g : 0;
            })
            .order(c)
            .offset(d)(a);
        u.forEach((h, p) => {
          const g = o[h].dataKey;
          s[h] = P({}, o[h], {
            data: g
              ? t.map((w) => {
                  const v = w[g];
                  return typeof v != "number" ? null : v;
                })
              : o[h].data,
            stackedData: f[p].map(([w, v]) => [w, v]),
          });
        });
      }),
      {
        seriesOrder: r,
        stackingGroups: i,
        series: Jg(s, (l) => (l == null ? void 0 : l.toLocaleString())),
      }
    );
  },
  sD = aD,
  lD = (e = "none") => {
    if (typeof e == "function") return e;
    switch (e) {
      case "none":
        return null;
      case "desc":
        return (t, n) => n - t;
      case "asc":
        return (t, n) => t - n;
      default:
        return null;
    }
  },
  uD = (e) => {
    const { seriesOrder: t, series: n } = e,
      r = {};
    return (
      t.forEach((o) => {
        var i, a, s, l;
        const u = Vj()
          .startAngle(
            (2 * Math.PI * ((i = n[o].startAngle) != null ? i : 0)) / 360
          )
          .endAngle(
            (2 * Math.PI * ((a = n[o].endAngle) != null ? a : 360)) / 360
          )
          .padAngle(
            (2 * Math.PI * ((s = n[o].paddingAngle) != null ? s : 0)) / 360
          )
          .sortValues(lD((l = n[o].sortingValues) != null ? l : "none"))(
          n[o].data.map((c) => c.value)
        );
        r[o] = P({ valueFormatter: (c) => c.value.toLocaleString() }, n[o], {
          data: n[o].data
            .map((c, d) => {
              var f;
              return P(
                {},
                c,
                {
                  id:
                    (f = c.id) != null ? f : `auto-generated-pie-id-${o}-${d}`,
                },
                u[d]
              );
            })
            .map((c) => {
              var d, f, h;
              return P({}, c, {
                formattedValue:
                  (d =
                    (f = (h = n[o]).valueFormatter) == null
                      ? void 0
                      : f.call(h, c)) != null
                    ? d
                    : c.value.toLocaleString(),
              });
            }),
        });
      }),
      { seriesOrder: t, series: r }
    );
  },
  cD = uD,
  dD = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
  ];
function fD(e, t, n = dD) {
  return e.type === "pie"
    ? P({}, e, { data: e.data.map((r, o) => P({ color: n[o % n.length] }, r)) })
    : P({ color: n[t % n.length] }, e);
}
const pD = ["#02B2AF", "#2E96FF", "#B800D8", "#60009B", "#2731C8", "#03008D"],
  hD = ["#02B2AF", "#72CCFF", "#DA00FF", "#9001CB", "#2E96FF", "#3B48E0"],
  mD = (e) => (e === "dark" ? hD : pD),
  Na = y.createContext({}),
  xp = { bar: rD, scatter: iD, line: sD, pie: cD },
  gD = (e, t, n) => {
    const r = {};
    e.forEach((i, a) => {
      var s;
      const { id: l = `auto-generated-id-${a}`, type: u } = i;
      if (
        (r[u] === void 0 && (r[u] = { series: {}, seriesOrder: [] }),
        ((s = r[u]) == null ? void 0 : s.series[l]) !== void 0)
      )
        throw new Error(`MUI-X-Charts: series' id "${l}" is not unique`);
      (r[u].series[l] = P({ id: l }, fD(i, a, t))), r[u].seriesOrder.push(l);
    });
    const o = {};
    return (
      Object.keys(xp).forEach((i) => {
        if (r[i] !== void 0) {
          var a, s;
          o[i] =
            (a = (s = xp[i]) == null ? void 0 : s.call(xp, r[i], n)) != null
              ? a
              : r[i];
        }
      }),
      o
    );
  };
function vD(e) {
  const { series: t, dataset: n, colors: r = mD, children: o } = e,
    i = jr(),
    a = y.useMemo(
      () => gD(t, typeof r == "function" ? r(i.palette.mode) : r, n),
      [t, r, i.palette.mode, n]
    );
  return C.jsx(Na.Provider, { value: a, children: o });
}
function Yu(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
    ? -1
    : e > t
    ? 1
    : e >= t
    ? 0
    : NaN;
}
function yD(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
    ? -1
    : t > e
    ? 1
    : t >= e
    ? 0
    : NaN;
}
function e0(e) {
  let t, n, r;
  e.length !== 2
    ? ((t = Yu), (n = (s, l) => Yu(e(s), l)), (r = (s, l) => e(s) - l))
    : ((t = e === Yu || e === yD ? e : xD), (n = e), (r = e));
  function o(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (t(l, l) !== 0) return c;
      do {
        const d = (u + c) >>> 1;
        n(s[d], l) < 0 ? (u = d + 1) : (c = d);
      } while (u < c);
    }
    return u;
  }
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (t(l, l) !== 0) return c;
      do {
        const d = (u + c) >>> 1;
        n(s[d], l) <= 0 ? (u = d + 1) : (c = d);
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    const d = o(s, l, u, c - 1);
    return d > u && r(s[d - 1], l) > -r(s[d], l) ? d - 1 : d;
  }
  return { left: o, center: a, right: i };
}
function xD() {
  return 0;
}
function bD(e) {
  return e === null ? NaN : +e;
}
const wD = e0(Yu),
  SD = wD.right;
e0(bD).center;
class T1 extends Map {
  constructor(t, n = ED) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: n },
      }),
      t != null)
    )
      for (const [r, o] of t) this.set(r, o);
  }
  get(t) {
    return super.get(N1(this, t));
  }
  has(t) {
    return super.has(N1(this, t));
  }
  set(t, n) {
    return super.set(CD(this, t), n);
  }
  delete(t) {
    return super.delete(kD(this, t));
  }
}
function N1({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function CD({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function kD({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) && ((n = e.get(r)), e.delete(r)), n;
}
function ED(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const PD = Math.sqrt(50),
  RD = Math.sqrt(10),
  $D = Math.sqrt(2);
function jc(e, t, n) {
  const r = (t - e) / Math.max(0, n),
    o = Math.floor(Math.log10(r)),
    i = r / Math.pow(10, o),
    a = i >= PD ? 10 : i >= RD ? 5 : i >= $D ? 2 : 1;
  let s, l, u;
  return (
    o < 0
      ? ((u = Math.pow(10, -o) / a),
        (s = Math.round(e * u)),
        (l = Math.round(t * u)),
        s / u < e && ++s,
        l / u > t && --l,
        (u = -u))
      : ((u = Math.pow(10, o) * a),
        (s = Math.round(e / u)),
        (l = Math.round(t / u)),
        s * u < e && ++s,
        l * u > t && --l),
    l < s && 0.5 <= n && n < 2 ? jc(e, t, n * 2) : [s, l, u]
  );
}
function Xh(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  const r = t < e,
    [o, i, a] = r ? jc(t, e, n) : jc(e, t, n);
  if (!(i >= o)) return [];
  const s = i - o + 1,
    l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (i - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (o + u) * a;
  return l;
}
function qh(e, t, n) {
  return (t = +t), (e = +e), (n = +n), jc(e, t, n)[2];
}
function Qh(e, t, n) {
  (t = +t), (e = +e), (n = +n);
  const r = t < e,
    o = r ? qh(t, e, n) : qh(e, t, n);
  return (r ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function MD(e, t, n) {
  (e = +e),
    (t = +t),
    (n = (o = arguments.length) < 2 ? ((t = e), (e = 0), 1) : o < 3 ? 1 : +n);
  for (
    var r = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, i = new Array(o);
    ++r < o;

  )
    i[r] = e + r * n;
  return i;
}
function ni(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
const O1 = Symbol("implicit");
function gk() {
  var e = new T1(),
    t = [],
    n = [],
    r = O1;
  function o(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== O1) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (o.domain = function (i) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new T1());
      for (const a of i) e.has(a) || e.set(a, t.push(a) - 1);
      return o;
    }),
    (o.range = function (i) {
      return arguments.length ? ((n = Array.from(i)), o) : n.slice();
    }),
    (o.unknown = function (i) {
      return arguments.length ? ((r = i), o) : r;
    }),
    (o.copy = function () {
      return gk(t, n).unknown(r);
    }),
    ni.apply(o, arguments),
    o
  );
}
function Dc() {
  var e = gk().unknown(void 0),
    t = e.domain,
    n = e.range,
    r = 0,
    o = 1,
    i,
    a,
    s = !1,
    l = 0,
    u = 0,
    c = 0.5;
  delete e.unknown;
  function d() {
    var f = t().length,
      h = o < r,
      p = h ? o : r,
      g = h ? r : o;
    (i = (g - p) / Math.max(1, f - l + u * 2)),
      s && (i = Math.floor(i)),
      (p += (g - p - i * (f - l)) * c),
      (a = i * (1 - l)),
      s && ((p = Math.round(p)), (a = Math.round(a)));
    var w = MD(f).map(function (v) {
      return p + i * v;
    });
    return n(h ? w.reverse() : w);
  }
  return (
    (e.domain = function (f) {
      return arguments.length ? (t(f), d()) : t();
    }),
    (e.range = function (f) {
      return arguments.length
        ? (([r, o] = f), (r = +r), (o = +o), d())
        : [r, o];
    }),
    (e.rangeRound = function (f) {
      return ([r, o] = f), (r = +r), (o = +o), (s = !0), d();
    }),
    (e.bandwidth = function () {
      return a;
    }),
    (e.step = function () {
      return i;
    }),
    (e.round = function (f) {
      return arguments.length ? ((s = !!f), d()) : s;
    }),
    (e.padding = function (f) {
      return arguments.length ? ((l = Math.min(1, (u = +f))), d()) : l;
    }),
    (e.paddingInner = function (f) {
      return arguments.length ? ((l = Math.min(1, f)), d()) : l;
    }),
    (e.paddingOuter = function (f) {
      return arguments.length ? ((u = +f), d()) : u;
    }),
    (e.align = function (f) {
      return arguments.length ? ((c = Math.max(0, Math.min(1, f))), d()) : c;
    }),
    (e.copy = function () {
      return Dc(t(), [r, o]).round(s).paddingInner(l).paddingOuter(u).align(c);
    }),
    ni.apply(d(), arguments)
  );
}
function vk(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return vk(t());
    }),
    e
  );
}
function A1() {
  return vk(Dc.apply(null, arguments).paddingInner(1));
}
function t0(e, t, n) {
  (e.prototype = t.prototype = n), (n.constructor = e);
}
function yk(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Vl() {}
var Sl = 0.7,
  Fc = 1 / Sl,
  Xi = "\\s*([+-]?\\d+)\\s*",
  Cl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  dr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  TD = /^#([0-9a-f]{3,8})$/,
  ND = new RegExp(`^rgb\\(${Xi},${Xi},${Xi}\\)$`),
  OD = new RegExp(`^rgb\\(${dr},${dr},${dr}\\)$`),
  AD = new RegExp(`^rgba\\(${Xi},${Xi},${Xi},${Cl}\\)$`),
  _D = new RegExp(`^rgba\\(${dr},${dr},${dr},${Cl}\\)$`),
  ID = new RegExp(`^hsl\\(${Cl},${dr},${dr}\\)$`),
  LD = new RegExp(`^hsla\\(${Cl},${dr},${dr},${Cl}\\)$`),
  _1 = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
t0(Vl, ga, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: I1,
  formatHex: I1,
  formatHex8: jD,
  formatHsl: DD,
  formatRgb: L1,
  toString: L1,
});
function I1() {
  return this.rgb().formatHex();
}
function jD() {
  return this.rgb().formatHex8();
}
function DD() {
  return xk(this).formatHsl();
}
function L1() {
  return this.rgb().formatRgb();
}
function ga(e) {
  var t, n;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = TD.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? j1(t)
          : n === 3
          ? new Qt(
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              ((t & 15) << 4) | (t & 15),
              1
            )
          : n === 8
          ? bu(
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              (t & 255) / 255
            )
          : n === 4
          ? bu(
              ((t >> 12) & 15) | ((t >> 8) & 240),
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              (((t & 15) << 4) | (t & 15)) / 255
            )
          : null)
      : (t = ND.exec(e))
      ? new Qt(t[1], t[2], t[3], 1)
      : (t = OD.exec(e))
      ? new Qt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
      : (t = AD.exec(e))
      ? bu(t[1], t[2], t[3], t[4])
      : (t = _D.exec(e))
      ? bu((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
      : (t = ID.exec(e))
      ? z1(t[1], t[2] / 100, t[3] / 100, 1)
      : (t = LD.exec(e))
      ? z1(t[1], t[2] / 100, t[3] / 100, t[4])
      : _1.hasOwnProperty(e)
      ? j1(_1[e])
      : e === "transparent"
      ? new Qt(NaN, NaN, NaN, 0)
      : null
  );
}
function j1(e) {
  return new Qt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function bu(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Qt(e, t, n, r);
}
function FD(e) {
  return (
    e instanceof Vl || (e = ga(e)),
    e ? ((e = e.rgb()), new Qt(e.r, e.g, e.b, e.opacity)) : new Qt()
  );
}
function Zh(e, t, n, r) {
  return arguments.length === 1 ? FD(e) : new Qt(e, t, n, r ?? 1);
}
function Qt(e, t, n, r) {
  (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
}
t0(
  Qt,
  Zh,
  yk(Vl, {
    brighter(e) {
      return (
        (e = e == null ? Fc : Math.pow(Fc, e)),
        new Qt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Sl : Math.pow(Sl, e)),
        new Qt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Qt(Wo(this.r), Wo(this.g), Wo(this.b), zc(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: D1,
    formatHex: D1,
    formatHex8: zD,
    formatRgb: F1,
    toString: F1,
  })
);
function D1() {
  return `#${Lo(this.r)}${Lo(this.g)}${Lo(this.b)}`;
}
function zD() {
  return `#${Lo(this.r)}${Lo(this.g)}${Lo(this.b)}${Lo(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`;
}
function F1() {
  const e = zc(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Wo(this.r)}, ${Wo(this.g)}, ${Wo(
    this.b
  )}${e === 1 ? ")" : `, ${e})`}`;
}
function zc(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Wo(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Lo(e) {
  return (e = Wo(e)), (e < 16 ? "0" : "") + e.toString(16);
}
function z1(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
      ? (e = t = NaN)
      : t <= 0 && (e = NaN),
    new Gn(e, t, n, r)
  );
}
function xk(e) {
  if (e instanceof Gn) return new Gn(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Vl || (e = ga(e)), !e)) return new Gn();
  if (e instanceof Gn) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    o = Math.min(t, n, r),
    i = Math.max(t, n, r),
    a = NaN,
    s = i - o,
    l = (i + o) / 2;
  return (
    s
      ? (t === i
          ? (a = (n - r) / s + (n < r) * 6)
          : n === i
          ? (a = (r - t) / s + 2)
          : (a = (t - n) / s + 4),
        (s /= l < 0.5 ? i + o : 2 - i - o),
        (a *= 60))
      : (s = l > 0 && l < 1 ? 0 : a),
    new Gn(a, s, l, e.opacity)
  );
}
function BD(e, t, n, r) {
  return arguments.length === 1 ? xk(e) : new Gn(e, t, n, r ?? 1);
}
function Gn(e, t, n, r) {
  (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
}
t0(
  Gn,
  BD,
  yk(Vl, {
    brighter(e) {
      return (
        (e = e == null ? Fc : Math.pow(Fc, e)),
        new Gn(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Sl : Math.pow(Sl, e)),
        new Gn(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        o = 2 * n - r;
      return new Qt(
        bp(e >= 240 ? e - 240 : e + 120, o, r),
        bp(e, o, r),
        bp(e < 120 ? e + 240 : e - 120, o, r),
        this.opacity
      );
    },
    clamp() {
      return new Gn(B1(this.h), wu(this.s), wu(this.l), zc(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = zc(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${B1(this.h)}, ${
        wu(this.s) * 100
      }%, ${wu(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  })
);
function B1(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function wu(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function bp(e, t, n) {
  return (
    (e < 60
      ? t + ((n - t) * e) / 60
      : e < 180
      ? n
      : e < 240
      ? t + ((n - t) * (240 - e)) / 60
      : t) * 255
  );
}
const n0 = (e) => () => e;
function UD(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function WD(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function HD(e) {
  return (e = +e) == 1
    ? bk
    : function (t, n) {
        return n - t ? WD(t, n, e) : n0(isNaN(t) ? n : t);
      };
}
function bk(e, t) {
  var n = t - e;
  return n ? UD(e, n) : n0(isNaN(e) ? t : e);
}
const U1 = (function e(t) {
  var n = HD(t);
  function r(o, i) {
    var a = n((o = Zh(o)).r, (i = Zh(i)).r),
      s = n(o.g, i.g),
      l = n(o.b, i.b),
      u = bk(o.opacity, i.opacity);
    return function (c) {
      return (
        (o.r = a(c)), (o.g = s(c)), (o.b = l(c)), (o.opacity = u(c)), o + ""
      );
    };
  }
  return (r.gamma = e), r;
})(1);
function VD(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    o;
  return function (i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function KD(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function GD(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    o = new Array(r),
    i = new Array(n),
    a;
  for (a = 0; a < r; ++a) o[a] = r0(e[a], t[a]);
  for (; a < n; ++a) i[a] = t[a];
  return function (s) {
    for (a = 0; a < r; ++a) i[a] = o[a](s);
    return i;
  };
}
function YD(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return n.setTime(e * (1 - r) + t * r), n;
    }
  );
}
function Bc(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function XD(e, t) {
  var n = {},
    r = {},
    o;
  (e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {});
  for (o in t) o in e ? (n[o] = r0(e[o], t[o])) : (r[o] = t[o]);
  return function (i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Jh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  wp = new RegExp(Jh.source, "g");
function qD(e) {
  return function () {
    return e;
  };
}
function QD(e) {
  return function (t) {
    return e(t) + "";
  };
}
function ZD(e, t) {
  var n = (Jh.lastIndex = wp.lastIndex = 0),
    r,
    o,
    i,
    a = -1,
    s = [],
    l = [];
  for (e = e + "", t = t + ""; (r = Jh.exec(e)) && (o = wp.exec(t)); )
    (i = o.index) > n &&
      ((i = t.slice(n, i)), s[a] ? (s[a] += i) : (s[++a] = i)),
      (r = r[0]) === (o = o[0])
        ? s[a]
          ? (s[a] += o)
          : (s[++a] = o)
        : ((s[++a] = null), l.push({ i: a, x: Bc(r, o) })),
      (n = wp.lastIndex);
  return (
    n < t.length && ((i = t.slice(n)), s[a] ? (s[a] += i) : (s[++a] = i)),
    s.length < 2
      ? l[0]
        ? QD(l[0].x)
        : qD(t)
      : ((t = l.length),
        function (u) {
          for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
          return s.join("");
        })
  );
}
function r0(e, t) {
  var n = typeof t,
    r;
  return t == null || n === "boolean"
    ? n0(t)
    : (n === "number"
        ? Bc
        : n === "string"
        ? (r = ga(t))
          ? ((t = r), U1)
          : ZD
        : t instanceof ga
        ? U1
        : t instanceof Date
        ? YD
        : KD(t)
        ? VD
        : Array.isArray(t)
        ? GD
        : (typeof t.valueOf != "function" && typeof t.toString != "function") ||
          isNaN(t)
        ? XD
        : Bc)(e, t);
}
function JD(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function eF(e) {
  return function () {
    return e;
  };
}
function tF(e) {
  return +e;
}
var W1 = [0, 1];
function ar(e) {
  return e;
}
function em(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : eF(isNaN(t) ? NaN : 0.5);
}
function nF(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (r) {
      return Math.max(e, Math.min(t, r));
    }
  );
}
function rF(e, t, n) {
  var r = e[0],
    o = e[1],
    i = t[0],
    a = t[1];
  return (
    o < r ? ((r = em(o, r)), (i = n(a, i))) : ((r = em(r, o)), (i = n(i, a))),
    function (s) {
      return i(r(s));
    }
  );
}
function oF(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    o = new Array(r),
    i = new Array(r),
    a = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++a < r;

  )
    (o[a] = em(e[a], e[a + 1])), (i[a] = n(t[a], t[a + 1]));
  return function (s) {
    var l = SD(e, s, 1, r) - 1;
    return i[l](o[l](s));
  };
}
function xf(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function o0() {
  var e = W1,
    t = W1,
    n = r0,
    r,
    o,
    i,
    a = ar,
    s,
    l,
    u;
  function c() {
    var f = Math.min(e.length, t.length);
    return (
      a !== ar && (a = nF(e[0], e[f - 1])),
      (s = f > 2 ? oF : rF),
      (l = u = null),
      d
    );
  }
  function d(f) {
    return f == null || isNaN((f = +f))
      ? i
      : (l || (l = s(e.map(r), t, n)))(r(a(f)));
  }
  return (
    (d.invert = function (f) {
      return a(o((u || (u = s(t, e.map(r), Bc)))(f)));
    }),
    (d.domain = function (f) {
      return arguments.length ? ((e = Array.from(f, tF)), c()) : e.slice();
    }),
    (d.range = function (f) {
      return arguments.length ? ((t = Array.from(f)), c()) : t.slice();
    }),
    (d.rangeRound = function (f) {
      return (t = Array.from(f)), (n = JD), c();
    }),
    (d.clamp = function (f) {
      return arguments.length ? ((a = f ? !0 : ar), c()) : a !== ar;
    }),
    (d.interpolate = function (f) {
      return arguments.length ? ((n = f), c()) : n;
    }),
    (d.unknown = function (f) {
      return arguments.length ? ((i = f), d) : i;
    }),
    function (f, h) {
      return (r = f), (o = h), c();
    }
  );
}
function wk() {
  return o0()(ar, ar);
}
function iF(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function Uc(e, t) {
  if (
    (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0
  )
    return null;
  var n,
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function va(e) {
  return (e = Uc(Math.abs(e))), e ? e[1] : NaN;
}
function aF(e, t) {
  return function (n, r) {
    for (
      var o = n.length, i = [], a = 0, s = e[0], l = 0;
      o > 0 &&
      s > 0 &&
      (l + s + 1 > r && (s = Math.max(1, r - l)),
      i.push(n.substring((o -= s), o + s)),
      !((l += s + 1) > r));

    )
      s = e[(a = (a + 1) % e.length)];
    return i.reverse().join(t);
  };
}
function sF(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (n) {
      return e[+n];
    });
  };
}
var lF =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function kl(e) {
  if (!(t = lF.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new i0({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
kl.prototype = i0.prototype;
function i0(e) {
  (this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + "");
}
i0.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function uF(e) {
  e: for (var t = e.length, n = 1, r = -1, o; n < t; ++n)
    switch (e[n]) {
      case ".":
        r = o = n;
        break;
      case "0":
        r === 0 && (r = n), (o = n);
        break;
      default:
        if (!+e[n]) break e;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(o + 1) : e;
}
var Sk;
function cF(e, t) {
  var n = Uc(e, t);
  if (!n) return e + "";
  var r = n[0],
    o = n[1],
    i = o - (Sk = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1,
    a = r.length;
  return i === a
    ? r
    : i > a
    ? r + new Array(i - a + 1).join("0")
    : i > 0
    ? r.slice(0, i) + "." + r.slice(i)
    : "0." + new Array(1 - i).join("0") + Uc(e, Math.max(0, t + i - 1))[0];
}
function H1(e, t) {
  var n = Uc(e, t);
  if (!n) return e + "";
  var r = n[0],
    o = n[1];
  return o < 0
    ? "0." + new Array(-o).join("0") + r
    : r.length > o + 1
    ? r.slice(0, o + 1) + "." + r.slice(o + 1)
    : r + new Array(o - r.length + 2).join("0");
}
const V1 = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: iF,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => H1(e * 100, t),
  r: H1,
  s: cF,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function K1(e) {
  return e;
}
var G1 = Array.prototype.map,
  Y1 = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function dF(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? K1
        : aF(G1.call(e.grouping, Number), e.thousands + ""),
    n = e.currency === void 0 ? "" : e.currency[0] + "",
    r = e.currency === void 0 ? "" : e.currency[1] + "",
    o = e.decimal === void 0 ? "." : e.decimal + "",
    i = e.numerals === void 0 ? K1 : sF(G1.call(e.numerals, String)),
    a = e.percent === void 0 ? "%" : e.percent + "",
    s = e.minus === void 0 ? "−" : e.minus + "",
    l = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(d) {
    d = kl(d);
    var f = d.fill,
      h = d.align,
      p = d.sign,
      g = d.symbol,
      w = d.zero,
      v = d.width,
      m = d.comma,
      x = d.precision,
      S = d.trim,
      E = d.type;
    E === "n"
      ? ((m = !0), (E = "g"))
      : V1[E] || (x === void 0 && (x = 12), (S = !0), (E = "g")),
      (w || (f === "0" && h === "=")) && ((w = !0), (f = "0"), (h = "="));
    var b =
        g === "$"
          ? n
          : g === "#" && /[boxX]/.test(E)
          ? "0" + E.toLowerCase()
          : "",
      k = g === "$" ? r : /[%p]/.test(E) ? a : "",
      R = V1[E],
      T = /[defgprs%]/.test(E);
    x =
      x === void 0
        ? 6
        : /[gprs]/.test(E)
        ? Math.max(1, Math.min(21, x))
        : Math.max(0, Math.min(20, x));
    function $(M) {
      var L = b,
        _ = k,
        N,
        A,
        D;
      if (E === "c") (_ = R(M) + _), (M = "");
      else {
        M = +M;
        var F = M < 0 || 1 / M < 0;
        if (
          ((M = isNaN(M) ? l : R(Math.abs(M), x)),
          S && (M = uF(M)),
          F && +M == 0 && p !== "+" && (F = !1),
          (L = (F ? (p === "(" ? p : s) : p === "-" || p === "(" ? "" : p) + L),
          (_ =
            (E === "s" ? Y1[8 + Sk / 3] : "") +
            _ +
            (F && p === "(" ? ")" : "")),
          T)
        ) {
          for (N = -1, A = M.length; ++N < A; )
            if (((D = M.charCodeAt(N)), 48 > D || D > 57)) {
              (_ = (D === 46 ? o + M.slice(N + 1) : M.slice(N)) + _),
                (M = M.slice(0, N));
              break;
            }
        }
      }
      m && !w && (M = t(M, 1 / 0));
      var O = L.length + M.length + _.length,
        j = O < v ? new Array(v - O + 1).join(f) : "";
      switch (
        (m && w && ((M = t(j + M, j.length ? v - _.length : 1 / 0)), (j = "")),
        h)
      ) {
        case "<":
          M = L + M + _ + j;
          break;
        case "=":
          M = L + j + M + _;
          break;
        case "^":
          M = j.slice(0, (O = j.length >> 1)) + L + M + _ + j.slice(O);
          break;
        default:
          M = j + L + M + _;
          break;
      }
      return i(M);
    }
    return (
      ($.toString = function () {
        return d + "";
      }),
      $
    );
  }
  function c(d, f) {
    var h = u(((d = kl(d)), (d.type = "f"), d)),
      p = Math.max(-8, Math.min(8, Math.floor(va(f) / 3))) * 3,
      g = Math.pow(10, -p),
      w = Y1[8 + p / 3];
    return function (v) {
      return h(g * v) + w;
    };
  }
  return { format: u, formatPrefix: c };
}
var Su, a0, Ck;
fF({ thousands: ",", grouping: [3], currency: ["$", ""] });
function fF(e) {
  return (Su = dF(e)), (a0 = Su.format), (Ck = Su.formatPrefix), Su;
}
function pF(e) {
  return Math.max(0, -va(Math.abs(e)));
}
function hF(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(va(t) / 3))) * 3 - va(Math.abs(e))
  );
}
function mF(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, va(t) - va(e)) + 1
  );
}
function gF(e, t, n, r) {
  var o = Qh(e, t, n),
    i;
  switch (((r = kl(r ?? ",f")), r.type)) {
    case "s": {
      var a = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((i = hF(o, a))) && (r.precision = i),
        Ck(r, a)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null &&
        !isNaN((i = mF(o, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = i - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null &&
        !isNaN((i = pF(o))) &&
        (r.precision = i - (r.type === "%") * 2);
      break;
    }
  }
  return a0(r);
}
function kk(e) {
  var t = e.domain;
  return (
    (e.ticks = function (n) {
      var r = t();
      return Xh(r[0], r[r.length - 1], n ?? 10);
    }),
    (e.tickFormat = function (n, r) {
      var o = t();
      return gF(o[0], o[o.length - 1], n ?? 10, r);
    }),
    (e.nice = function (n) {
      n == null && (n = 10);
      var r = t(),
        o = 0,
        i = r.length - 1,
        a = r[o],
        s = r[i],
        l,
        u,
        c = 10;
      for (
        s < a && ((u = a), (a = s), (s = u), (u = o), (o = i), (i = u));
        c-- > 0;

      ) {
        if (((u = qh(a, s, n)), u === l)) return (r[o] = a), (r[i] = s), t(r);
        if (u > 0) (a = Math.floor(a / u) * u), (s = Math.ceil(s / u) * u);
        else if (u < 0) (a = Math.ceil(a * u) / u), (s = Math.floor(s * u) / u);
        else break;
        l = u;
      }
      return e;
    }),
    e
  );
}
function Ek() {
  var e = wk();
  return (
    (e.copy = function () {
      return xf(e, Ek());
    }),
    ni.apply(e, arguments),
    kk(e)
  );
}
function Pk(e, t) {
  e = e.slice();
  var n = 0,
    r = e.length - 1,
    o = e[n],
    i = e[r],
    a;
  return (
    i < o && ((a = n), (n = r), (r = a), (a = o), (o = i), (i = a)),
    (e[n] = t.floor(o)),
    (e[r] = t.ceil(i)),
    e
  );
}
function X1(e) {
  return Math.log(e);
}
function q1(e) {
  return Math.exp(e);
}
function vF(e) {
  return -Math.log(-e);
}
function yF(e) {
  return -Math.exp(-e);
}
function xF(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function bF(e) {
  return e === 10 ? xF : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function wF(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function Q1(e) {
  return (t, n) => -e(-t, n);
}
function SF(e) {
  const t = e(X1, q1),
    n = t.domain;
  let r = 10,
    o,
    i;
  function a() {
    return (
      (o = wF(r)),
      (i = bF(r)),
      n()[0] < 0 ? ((o = Q1(o)), (i = Q1(i)), e(vF, yF)) : e(X1, q1),
      t
    );
  }
  return (
    (t.base = function (s) {
      return arguments.length ? ((r = +s), a()) : r;
    }),
    (t.domain = function (s) {
      return arguments.length ? (n(s), a()) : n();
    }),
    (t.ticks = (s) => {
      const l = n();
      let u = l[0],
        c = l[l.length - 1];
      const d = c < u;
      d && ([u, c] = [c, u]);
      let f = o(u),
        h = o(c),
        p,
        g;
      const w = s == null ? 10 : +s;
      let v = [];
      if (!(r % 1) && h - f < w) {
        if (((f = Math.floor(f)), (h = Math.ceil(h)), u > 0)) {
          for (; f <= h; ++f)
            for (p = 1; p < r; ++p)
              if (((g = f < 0 ? p / i(-f) : p * i(f)), !(g < u))) {
                if (g > c) break;
                v.push(g);
              }
        } else
          for (; f <= h; ++f)
            for (p = r - 1; p >= 1; --p)
              if (((g = f > 0 ? p / i(-f) : p * i(f)), !(g < u))) {
                if (g > c) break;
                v.push(g);
              }
        v.length * 2 < w && (v = Xh(u, c, w));
      } else v = Xh(f, h, Math.min(h - f, w)).map(i);
      return d ? v.reverse() : v;
    }),
    (t.tickFormat = (s, l) => {
      if (
        (s == null && (s = 10),
        l == null && (l = r === 10 ? "s" : ","),
        typeof l != "function" &&
          (!(r % 1) && (l = kl(l)).precision == null && (l.trim = !0),
          (l = a0(l))),
        s === 1 / 0)
      )
        return l;
      const u = Math.max(1, (r * s) / t.ticks().length);
      return (c) => {
        let d = c / i(Math.round(o(c)));
        return d * r < r - 0.5 && (d *= r), d <= u ? l(c) : "";
      };
    }),
    (t.nice = () =>
      n(
        Pk(n(), {
          floor: (s) => i(Math.floor(o(s))),
          ceil: (s) => i(Math.ceil(o(s))),
        })
      )),
    t
  );
}
function Rk() {
  const e = SF(o0()).domain([1, 10]);
  return (e.copy = () => xf(e, Rk()).base(e.base())), ni.apply(e, arguments), e;
}
function Z1(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function CF(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function kF(e) {
  return e < 0 ? -e * e : e * e;
}
function EF(e) {
  var t = e(ar, ar),
    n = 1;
  function r() {
    return n === 1 ? e(ar, ar) : n === 0.5 ? e(CF, kF) : e(Z1(n), Z1(1 / n));
  }
  return (
    (t.exponent = function (o) {
      return arguments.length ? ((n = +o), r()) : n;
    }),
    kk(t)
  );
}
function s0() {
  var e = EF(o0());
  return (
    (e.copy = function () {
      return xf(e, s0()).exponent(e.exponent());
    }),
    ni.apply(e, arguments),
    e
  );
}
function PF() {
  return s0.apply(null, arguments).exponent(0.5);
}
const Sp = new Date(),
  Cp = new Date();
function yt(e, t, n, r) {
  function o(i) {
    return e((i = arguments.length === 0 ? new Date() : new Date(+i))), i;
  }
  return (
    (o.floor = (i) => (e((i = new Date(+i))), i)),
    (o.ceil = (i) => (e((i = new Date(i - 1))), t(i, 1), e(i), i)),
    (o.round = (i) => {
      const a = o(i),
        s = o.ceil(i);
      return i - a < s - i ? a : s;
    }),
    (o.offset = (i, a) => (
      t((i = new Date(+i)), a == null ? 1 : Math.floor(a)), i
    )),
    (o.range = (i, a, s) => {
      const l = [];
      if (
        ((i = o.ceil(i)),
        (s = s == null ? 1 : Math.floor(s)),
        !(i < a) || !(s > 0))
      )
        return l;
      let u;
      do l.push((u = new Date(+i))), t(i, s), e(i);
      while (u < i && i < a);
      return l;
    }),
    (o.filter = (i) =>
      yt(
        (a) => {
          if (a >= a) for (; e(a), !i(a); ) a.setTime(a - 1);
        },
        (a, s) => {
          if (a >= a)
            if (s < 0) for (; ++s <= 0; ) for (; t(a, -1), !i(a); );
            else for (; --s >= 0; ) for (; t(a, 1), !i(a); );
        }
      )),
    n &&
      ((o.count = (i, a) => (
        Sp.setTime(+i), Cp.setTime(+a), e(Sp), e(Cp), Math.floor(n(Sp, Cp))
      )),
      (o.every = (i) => (
        (i = Math.floor(i)),
        !isFinite(i) || !(i > 0)
          ? null
          : i > 1
          ? o.filter(r ? (a) => r(a) % i === 0 : (a) => o.count(0, a) % i === 0)
          : o
      ))),
    o
  );
}
const Wc = yt(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e
);
Wc.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
    ? yt(
        (t) => {
          t.setTime(Math.floor(t / e) * e);
        },
        (t, n) => {
          t.setTime(+t + n * e);
        },
        (t, n) => (n - t) / e
      )
    : Wc
);
Wc.range;
const wr = 1e3,
  Rn = wr * 60,
  Sr = Rn * 60,
  Tr = Sr * 24,
  l0 = Tr * 7,
  J1 = Tr * 30,
  kp = Tr * 365,
  jo = yt(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * wr);
    },
    (e, t) => (t - e) / wr,
    (e) => e.getUTCSeconds()
  );
jo.range;
const u0 = yt(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * wr);
  },
  (e, t) => {
    e.setTime(+e + t * Rn);
  },
  (e, t) => (t - e) / Rn,
  (e) => e.getMinutes()
);
u0.range;
const c0 = yt(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Rn);
  },
  (e, t) => (t - e) / Rn,
  (e) => e.getUTCMinutes()
);
c0.range;
const d0 = yt(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * wr - e.getMinutes() * Rn
    );
  },
  (e, t) => {
    e.setTime(+e + t * Sr);
  },
  (e, t) => (t - e) / Sr,
  (e) => e.getHours()
);
d0.range;
const f0 = yt(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Sr);
  },
  (e, t) => (t - e) / Sr,
  (e) => e.getUTCHours()
);
f0.range;
const Kl = yt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Rn) / Tr,
  (e) => e.getDate() - 1
);
Kl.range;
const bf = yt(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Tr,
  (e) => e.getUTCDate() - 1
);
bf.range;
const $k = yt(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Tr,
  (e) => Math.floor(e / Tr)
);
$k.range;
function ri(e) {
  return yt(
    (t) => {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setDate(t.getDate() + n * 7);
    },
    (t, n) =>
      (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Rn) / l0
  );
}
const wf = ri(0),
  Hc = ri(1),
  RF = ri(2),
  $F = ri(3),
  ya = ri(4),
  MF = ri(5),
  TF = ri(6);
wf.range;
Hc.range;
RF.range;
$F.range;
ya.range;
MF.range;
TF.range;
function oi(e) {
  return yt(
    (t) => {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setUTCDate(t.getUTCDate() + n * 7);
    },
    (t, n) => (n - t) / l0
  );
}
const Sf = oi(0),
  Vc = oi(1),
  NF = oi(2),
  OF = oi(3),
  xa = oi(4),
  AF = oi(5),
  _F = oi(6);
Sf.range;
Vc.range;
NF.range;
OF.range;
xa.range;
AF.range;
_F.range;
const p0 = yt(
  (e) => {
    e.setDate(1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth()
);
p0.range;
const h0 = yt(
  (e) => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth()
);
h0.range;
const Nr = yt(
  (e) => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear()
);
Nr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : yt(
        (t) => {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        }
      );
Nr.range;
const Or = yt(
  (e) => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear()
);
Or.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : yt(
        (t) => {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        }
      );
Or.range;
function Mk(e, t, n, r, o, i) {
  const a = [
    [jo, 1, wr],
    [jo, 5, 5 * wr],
    [jo, 15, 15 * wr],
    [jo, 30, 30 * wr],
    [i, 1, Rn],
    [i, 5, 5 * Rn],
    [i, 15, 15 * Rn],
    [i, 30, 30 * Rn],
    [o, 1, Sr],
    [o, 3, 3 * Sr],
    [o, 6, 6 * Sr],
    [o, 12, 12 * Sr],
    [r, 1, Tr],
    [r, 2, 2 * Tr],
    [n, 1, l0],
    [t, 1, J1],
    [t, 3, 3 * J1],
    [e, 1, kp],
  ];
  function s(u, c, d) {
    const f = c < u;
    f && ([u, c] = [c, u]);
    const h = d && typeof d.range == "function" ? d : l(u, c, d),
      p = h ? h.range(u, +c + 1) : [];
    return f ? p.reverse() : p;
  }
  function l(u, c, d) {
    const f = Math.abs(c - u) / d,
      h = e0(([, , w]) => w).right(a, f);
    if (h === a.length) return e.every(Qh(u / kp, c / kp, d));
    if (h === 0) return Wc.every(Math.max(Qh(u, c, d), 1));
    const [p, g] = a[f / a[h - 1][2] < a[h][2] / f ? h - 1 : h];
    return p.every(g);
  }
  return [s, l];
}
const [IF, LF] = Mk(Or, h0, Sf, $k, f0, c0),
  [jF, DF] = Mk(Nr, p0, wf, Kl, d0, u0);
function Ep(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Pp(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function is(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function FF(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    o = e.periods,
    i = e.days,
    a = e.shortDays,
    s = e.months,
    l = e.shortMonths,
    u = as(o),
    c = ss(o),
    d = as(i),
    f = ss(i),
    h = as(a),
    p = ss(a),
    g = as(s),
    w = ss(s),
    v = as(l),
    m = ss(l),
    x = {
      a: F,
      A: O,
      b: j,
      B: U,
      c: null,
      d: ix,
      e: ix,
      f: lz,
      g: yz,
      G: bz,
      H: iz,
      I: az,
      j: sz,
      L: Tk,
      m: uz,
      M: cz,
      p: X,
      q: Y,
      Q: lx,
      s: ux,
      S: dz,
      u: fz,
      U: pz,
      V: hz,
      w: mz,
      W: gz,
      x: null,
      X: null,
      y: vz,
      Y: xz,
      Z: wz,
      "%": sx,
    },
    S = {
      a: ce,
      A: Q,
      b: q,
      B: ne,
      c: null,
      d: ax,
      e: ax,
      f: Ez,
      g: Iz,
      G: jz,
      H: Sz,
      I: Cz,
      j: kz,
      L: Ok,
      m: Pz,
      M: Rz,
      p: ge,
      q: we,
      Q: lx,
      s: ux,
      S: $z,
      u: Mz,
      U: Tz,
      V: Nz,
      w: Oz,
      W: Az,
      x: null,
      X: null,
      y: _z,
      Y: Lz,
      Z: Dz,
      "%": sx,
    },
    E = {
      a: $,
      A: M,
      b: L,
      B: _,
      c: N,
      d: rx,
      e: rx,
      f: tz,
      g: nx,
      G: tx,
      H: ox,
      I: ox,
      j: QF,
      L: ez,
      m: qF,
      M: ZF,
      p: T,
      q: XF,
      Q: rz,
      s: oz,
      S: JF,
      u: HF,
      U: VF,
      V: KF,
      w: WF,
      W: GF,
      x: A,
      X: D,
      y: nx,
      Y: tx,
      Z: YF,
      "%": nz,
    };
  (x.x = b(n, x)),
    (x.X = b(r, x)),
    (x.c = b(t, x)),
    (S.x = b(n, S)),
    (S.X = b(r, S)),
    (S.c = b(t, S));
  function b(H, re) {
    return function (G) {
      var B = [],
        ae = -1,
        oe = 0,
        pe = H.length,
        je,
        We,
        ht;
      for (G instanceof Date || (G = new Date(+G)); ++ae < pe; )
        H.charCodeAt(ae) === 37 &&
          (B.push(H.slice(oe, ae)),
          (We = ex[(je = H.charAt(++ae))]) != null
            ? (je = H.charAt(++ae))
            : (We = je === "e" ? " " : "0"),
          (ht = re[je]) && (je = ht(G, We)),
          B.push(je),
          (oe = ae + 1));
      return B.push(H.slice(oe, ae)), B.join("");
    };
  }
  function k(H, re) {
    return function (G) {
      var B = is(1900, void 0, 1),
        ae = R(B, H, (G += ""), 0),
        oe,
        pe;
      if (ae != G.length) return null;
      if ("Q" in B) return new Date(B.Q);
      if ("s" in B) return new Date(B.s * 1e3 + ("L" in B ? B.L : 0));
      if (
        (re && !("Z" in B) && (B.Z = 0),
        "p" in B && (B.H = (B.H % 12) + B.p * 12),
        B.m === void 0 && (B.m = "q" in B ? B.q : 0),
        "V" in B)
      ) {
        if (B.V < 1 || B.V > 53) return null;
        "w" in B || (B.w = 1),
          "Z" in B
            ? ((oe = Pp(is(B.y, 0, 1))),
              (pe = oe.getUTCDay()),
              (oe = pe > 4 || pe === 0 ? Vc.ceil(oe) : Vc(oe)),
              (oe = bf.offset(oe, (B.V - 1) * 7)),
              (B.y = oe.getUTCFullYear()),
              (B.m = oe.getUTCMonth()),
              (B.d = oe.getUTCDate() + ((B.w + 6) % 7)))
            : ((oe = Ep(is(B.y, 0, 1))),
              (pe = oe.getDay()),
              (oe = pe > 4 || pe === 0 ? Hc.ceil(oe) : Hc(oe)),
              (oe = Kl.offset(oe, (B.V - 1) * 7)),
              (B.y = oe.getFullYear()),
              (B.m = oe.getMonth()),
              (B.d = oe.getDate() + ((B.w + 6) % 7)));
      } else
        ("W" in B || "U" in B) &&
          ("w" in B || (B.w = "u" in B ? B.u % 7 : "W" in B ? 1 : 0),
          (pe =
            "Z" in B
              ? Pp(is(B.y, 0, 1)).getUTCDay()
              : Ep(is(B.y, 0, 1)).getDay()),
          (B.m = 0),
          (B.d =
            "W" in B
              ? ((B.w + 6) % 7) + B.W * 7 - ((pe + 5) % 7)
              : B.w + B.U * 7 - ((pe + 6) % 7)));
      return "Z" in B
        ? ((B.H += (B.Z / 100) | 0), (B.M += B.Z % 100), Pp(B))
        : Ep(B);
    };
  }
  function R(H, re, G, B) {
    for (var ae = 0, oe = re.length, pe = G.length, je, We; ae < oe; ) {
      if (B >= pe) return -1;
      if (((je = re.charCodeAt(ae++)), je === 37)) {
        if (
          ((je = re.charAt(ae++)),
          (We = E[je in ex ? re.charAt(ae++) : je]),
          !We || (B = We(H, G, B)) < 0)
        )
          return -1;
      } else if (je != G.charCodeAt(B++)) return -1;
    }
    return B;
  }
  function T(H, re, G) {
    var B = u.exec(re.slice(G));
    return B ? ((H.p = c.get(B[0].toLowerCase())), G + B[0].length) : -1;
  }
  function $(H, re, G) {
    var B = h.exec(re.slice(G));
    return B ? ((H.w = p.get(B[0].toLowerCase())), G + B[0].length) : -1;
  }
  function M(H, re, G) {
    var B = d.exec(re.slice(G));
    return B ? ((H.w = f.get(B[0].toLowerCase())), G + B[0].length) : -1;
  }
  function L(H, re, G) {
    var B = v.exec(re.slice(G));
    return B ? ((H.m = m.get(B[0].toLowerCase())), G + B[0].length) : -1;
  }
  function _(H, re, G) {
    var B = g.exec(re.slice(G));
    return B ? ((H.m = w.get(B[0].toLowerCase())), G + B[0].length) : -1;
  }
  function N(H, re, G) {
    return R(H, t, re, G);
  }
  function A(H, re, G) {
    return R(H, n, re, G);
  }
  function D(H, re, G) {
    return R(H, r, re, G);
  }
  function F(H) {
    return a[H.getDay()];
  }
  function O(H) {
    return i[H.getDay()];
  }
  function j(H) {
    return l[H.getMonth()];
  }
  function U(H) {
    return s[H.getMonth()];
  }
  function X(H) {
    return o[+(H.getHours() >= 12)];
  }
  function Y(H) {
    return 1 + ~~(H.getMonth() / 3);
  }
  function ce(H) {
    return a[H.getUTCDay()];
  }
  function Q(H) {
    return i[H.getUTCDay()];
  }
  function q(H) {
    return l[H.getUTCMonth()];
  }
  function ne(H) {
    return s[H.getUTCMonth()];
  }
  function ge(H) {
    return o[+(H.getUTCHours() >= 12)];
  }
  function we(H) {
    return 1 + ~~(H.getUTCMonth() / 3);
  }
  return {
    format: function (H) {
      var re = b((H += ""), x);
      return (
        (re.toString = function () {
          return H;
        }),
        re
      );
    },
    parse: function (H) {
      var re = k((H += ""), !1);
      return (
        (re.toString = function () {
          return H;
        }),
        re
      );
    },
    utcFormat: function (H) {
      var re = b((H += ""), S);
      return (
        (re.toString = function () {
          return H;
        }),
        re
      );
    },
    utcParse: function (H) {
      var re = k((H += ""), !0);
      return (
        (re.toString = function () {
          return H;
        }),
        re
      );
    },
  };
}
var ex = { "-": "", _: " ", 0: "0" },
  Et = /^\s*\d+/,
  zF = /^%/,
  BF = /[\\^$*+?|[\]().{}]/g;
function Ne(e, t, n) {
  var r = e < 0 ? "-" : "",
    o = (r ? -e : e) + "",
    i = o.length;
  return r + (i < n ? new Array(n - i + 1).join(t) + o : o);
}
function UF(e) {
  return e.replace(BF, "\\$&");
}
function as(e) {
  return new RegExp("^(?:" + e.map(UF).join("|") + ")", "i");
}
function ss(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function WF(e, t, n) {
  var r = Et.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function HF(e, t, n) {
  var r = Et.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function VF(e, t, n) {
  var r = Et.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function KF(e, t, n) {
  var r = Et.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function GF(e, t, n) {
  var r = Et.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function tx(e, t, n) {
  var r = Et.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function nx(e, t, n) {
  var r = Et.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function YF(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
    : -1;
}
function XF(e, t, n) {
  var r = Et.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function qF(e, t, n) {
  var r = Et.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function rx(e, t, n) {
  var r = Et.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function QF(e, t, n) {
  var r = Et.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function ox(e, t, n) {
  var r = Et.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function ZF(e, t, n) {
  var r = Et.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function JF(e, t, n) {
  var r = Et.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function ez(e, t, n) {
  var r = Et.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function tz(e, t, n) {
  var r = Et.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function nz(e, t, n) {
  var r = zF.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function rz(e, t, n) {
  var r = Et.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function oz(e, t, n) {
  var r = Et.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function ix(e, t) {
  return Ne(e.getDate(), t, 2);
}
function iz(e, t) {
  return Ne(e.getHours(), t, 2);
}
function az(e, t) {
  return Ne(e.getHours() % 12 || 12, t, 2);
}
function sz(e, t) {
  return Ne(1 + Kl.count(Nr(e), e), t, 3);
}
function Tk(e, t) {
  return Ne(e.getMilliseconds(), t, 3);
}
function lz(e, t) {
  return Tk(e, t) + "000";
}
function uz(e, t) {
  return Ne(e.getMonth() + 1, t, 2);
}
function cz(e, t) {
  return Ne(e.getMinutes(), t, 2);
}
function dz(e, t) {
  return Ne(e.getSeconds(), t, 2);
}
function fz(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function pz(e, t) {
  return Ne(wf.count(Nr(e) - 1, e), t, 2);
}
function Nk(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ya(e) : ya.ceil(e);
}
function hz(e, t) {
  return (e = Nk(e)), Ne(ya.count(Nr(e), e) + (Nr(e).getDay() === 4), t, 2);
}
function mz(e) {
  return e.getDay();
}
function gz(e, t) {
  return Ne(Hc.count(Nr(e) - 1, e), t, 2);
}
function vz(e, t) {
  return Ne(e.getFullYear() % 100, t, 2);
}
function yz(e, t) {
  return (e = Nk(e)), Ne(e.getFullYear() % 100, t, 2);
}
function xz(e, t) {
  return Ne(e.getFullYear() % 1e4, t, 4);
}
function bz(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? ya(e) : ya.ceil(e)),
    Ne(e.getFullYear() % 1e4, t, 4)
  );
}
function wz(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    Ne((t / 60) | 0, "0", 2) +
    Ne(t % 60, "0", 2)
  );
}
function ax(e, t) {
  return Ne(e.getUTCDate(), t, 2);
}
function Sz(e, t) {
  return Ne(e.getUTCHours(), t, 2);
}
function Cz(e, t) {
  return Ne(e.getUTCHours() % 12 || 12, t, 2);
}
function kz(e, t) {
  return Ne(1 + bf.count(Or(e), e), t, 3);
}
function Ok(e, t) {
  return Ne(e.getUTCMilliseconds(), t, 3);
}
function Ez(e, t) {
  return Ok(e, t) + "000";
}
function Pz(e, t) {
  return Ne(e.getUTCMonth() + 1, t, 2);
}
function Rz(e, t) {
  return Ne(e.getUTCMinutes(), t, 2);
}
function $z(e, t) {
  return Ne(e.getUTCSeconds(), t, 2);
}
function Mz(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Tz(e, t) {
  return Ne(Sf.count(Or(e) - 1, e), t, 2);
}
function Ak(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? xa(e) : xa.ceil(e);
}
function Nz(e, t) {
  return (e = Ak(e)), Ne(xa.count(Or(e), e) + (Or(e).getUTCDay() === 4), t, 2);
}
function Oz(e) {
  return e.getUTCDay();
}
function Az(e, t) {
  return Ne(Vc.count(Or(e) - 1, e), t, 2);
}
function _z(e, t) {
  return Ne(e.getUTCFullYear() % 100, t, 2);
}
function Iz(e, t) {
  return (e = Ak(e)), Ne(e.getUTCFullYear() % 100, t, 2);
}
function Lz(e, t) {
  return Ne(e.getUTCFullYear() % 1e4, t, 4);
}
function jz(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? xa(e) : xa.ceil(e)),
    Ne(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function Dz() {
  return "+0000";
}
function sx() {
  return "%";
}
function lx(e) {
  return +e;
}
function ux(e) {
  return Math.floor(+e / 1e3);
}
var bi, _k, Ik;
Fz({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
function Fz(e) {
  return (
    (bi = FF(e)),
    (_k = bi.format),
    bi.parse,
    (Ik = bi.utcFormat),
    bi.utcParse,
    bi
  );
}
function zz(e) {
  return new Date(e);
}
function Bz(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function m0(e, t, n, r, o, i, a, s, l, u) {
  var c = wk(),
    d = c.invert,
    f = c.domain,
    h = u(".%L"),
    p = u(":%S"),
    g = u("%I:%M"),
    w = u("%I %p"),
    v = u("%a %d"),
    m = u("%b %d"),
    x = u("%B"),
    S = u("%Y");
  function E(b) {
    return (
      l(b) < b
        ? h
        : s(b) < b
        ? p
        : a(b) < b
        ? g
        : i(b) < b
        ? w
        : r(b) < b
        ? o(b) < b
          ? v
          : m
        : n(b) < b
        ? x
        : S
    )(b);
  }
  return (
    (c.invert = function (b) {
      return new Date(d(b));
    }),
    (c.domain = function (b) {
      return arguments.length ? f(Array.from(b, Bz)) : f().map(zz);
    }),
    (c.ticks = function (b) {
      var k = f();
      return e(k[0], k[k.length - 1], b ?? 10);
    }),
    (c.tickFormat = function (b, k) {
      return k == null ? E : u(k);
    }),
    (c.nice = function (b) {
      var k = f();
      return (
        (!b || typeof b.range != "function") &&
          (b = t(k[0], k[k.length - 1], b ?? 10)),
        b ? f(Pk(k, b)) : c
      );
    }),
    (c.copy = function () {
      return xf(c, m0(e, t, n, r, o, i, a, s, l, u));
    }),
    c
  );
}
function Uz() {
  return ni.apply(
    m0(jF, DF, Nr, p0, wf, Kl, d0, u0, jo, _k).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments
  );
}
function Wz() {
  return ni.apply(
    m0(IF, LF, Or, h0, Sf, bf, f0, c0, jo, Ik).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments
  );
}
const Lk = (e) => {
    var t, n;
    const { axis: r } = e,
      o = Math.min(...((t = r.data) != null ? t : [])),
      i = Math.max(...((n = r.data) != null ? n : []));
    return [o, i];
  },
  jk = (e) => {
    const { series: t, axis: n, isDefaultAxis: r } = e;
    return Object.keys(t)
      .filter((o) => t[o].yAxisKey === n.id || (r && t[o].yAxisKey === void 0))
      .reduce(
        (o, i) => {
          const [a, s] = t[i].stackedData.reduce(
            (l, u) => [
              Math.min(...u, ...(l[0] === null ? [] : [l[0]])),
              Math.max(...u, ...(l[1] === null ? [] : [l[1]])),
            ],
            t[i].stackedData[0]
          );
          return [
            o[0] === null ? a : Math.min(a, o[0]),
            o[1] === null ? s : Math.max(s, o[1]),
          ];
        },
        [null, null]
      );
  },
  Hz = (e) =>
    Object.keys(e.series).some((n) => e.series[n].layout === "horizontal")
      ? jk(e)
      : Lk(e),
  Vz = (e) =>
    Object.keys(e.series).some((n) => e.series[n].layout === "horizontal")
      ? Lk(e)
      : jk(e),
  Kc = (e, t) =>
    e[0] === null || e[1] === null
      ? t
      : t[0] === null || t[1] === null
      ? e
      : [Math.min(e[0], t[0]), Math.max(e[1], t[1])],
  Kz = (e) => {
    const { series: t, axis: n, isDefaultAxis: r } = e;
    return Object.keys(t)
      .filter((o) => t[o].xAxisKey === n.id || (t[o].xAxisKey === void 0 && r))
      .reduce(
        (o, i) => {
          const a = t[i].data.reduce(
            (s, { x: l }) => Kc(s, [l, l]),
            [null, null]
          );
          return Kc(o, a);
        },
        [null, null]
      );
  },
  Gz = (e) => {
    const { series: t, axis: n, isDefaultAxis: r } = e;
    return Object.keys(t)
      .filter((o) => t[o].yAxisKey === n.id || (t[o].yAxisKey === void 0 && r))
      .reduce(
        (o, i) => {
          const a = t[i].data.reduce(
            (s, { y: l }) => Kc(s, [l, l]),
            [null, null]
          );
          return Kc(o, a);
        },
        [null, null]
      );
  },
  Yz = (e) => {
    var t, n;
    const { axis: r } = e,
      o = Math.min(...((t = r.data) != null ? t : [])),
      i = Math.max(...((n = r.data) != null ? n : []));
    return [o, i];
  };
function Xz(e, t) {
  return t.length === 0
    ? [null, null]
    : t.reduce((n, r) => {
        const [o, i] = e(r);
        return n[0] === null
          ? [Math.min(o, i), Math.max(o, i)]
          : [Math.min(o, i, n[0]), Math.max(o, i, n[1])];
      }, e(t[0]));
}
const qz = (e) => {
  const { series: t, axis: n, isDefaultAxis: r } = e;
  return Object.keys(t)
    .filter((o) => t[o].yAxisKey === n.id || (r && t[o].yAxisKey === void 0))
    .reduce(
      (o, i) => {
        const { area: a, stackedData: s } = t[i],
          c = Xz(a !== void 0 ? (h) => h : (h) => [h[1], h[1]], s);
        if (o[0] === null) return c;
        if (c[0] === null) return o;
        const [d, f] = c;
        return [Math.min(d, o[0]), Math.max(f, o[1])];
      },
      [null, null]
    );
};
function Gc(e) {
  return e.scaleType === "band";
}
function cx(e) {
  return e.scaleType === "point";
}
function dx(e, t, n) {
  switch (e) {
    case "log":
      return Rk(t, n);
    case "pow":
      return s0(t, n);
    case "sqrt":
      return PF(t, n);
    case "time":
      return Uz(t, n);
    case "utc":
      return Wz(t, n);
    default:
      return Ek(t, n);
  }
}
const El = "DEFAULT_X_AXIS_KEY",
  Pl = "DEFAULT_Y_AXIS_KEY",
  Qz = { top: 50, bottom: 50, left: 50, right: 50 },
  Zz = (e, t, n) => {
    const r = P({}, Qz, n);
    return y.useMemo(
      () => ({
        left: r.left,
        top: r.top,
        right: r.right,
        bottom: r.bottom,
        width: Math.max(0, e - r.left - r.right),
        height: Math.max(0, t - r.top - r.bottom),
      }),
      [e, t, r.top, r.bottom, r.left, r.right]
    );
  },
  ii = y.createContext({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 300,
    width: 400,
  }),
  g0 = y.createContext({ current: null });
function Jz(e) {
  const { width: t, height: n, margin: r, svgRef: o, children: i } = e,
    a = Zz(t, n, r);
  return C.jsx(g0.Provider, {
    value: o,
    children: C.jsx(ii.Provider, { value: a, children: i }),
  });
}
function Rl(e) {
  return e.bandwidth !== void 0;
}
function fx(e) {
  const {
      tickMaxStep: t,
      tickMinStep: n,
      tickNumber: r,
      range: o,
      domain: i,
    } = e,
    a = n === void 0 ? 999 : Math.floor(Math.abs(i[1] - i[0]) / n),
    s = t === void 0 ? 2 : Math.ceil(Math.abs(i[1] - i[0]) / t),
    l = r ?? Math.floor(Math.abs(o[1] - o[0]) / 50);
  return Math.min(a, Math.max(s, l));
}
function Dk(e) {
  const { scale: t, tickNumber: n, valueFormatter: r, tickInterval: o } = e;
  return y.useMemo(() => {
    if (Rl(t)) {
      const a = t.domain();
      return t.bandwidth() > 0
        ? [
            ...a.map((l) => {
              var u;
              return {
                value: l,
                formattedValue:
                  (u = r == null ? void 0 : r(l)) != null ? u : `${l}`,
                offset: t(l) - (t.step() - t.bandwidth()) / 2,
                labelOffset: t.step() / 2,
              };
            }),
            { formattedValue: void 0, offset: t.range()[1], labelOffset: 0 },
          ]
        : (
            (typeof o == "function" && a.filter(o)) ||
            (typeof o == "object" && o) ||
            a
          ).map((l) => {
            var u;
            return {
              value: l,
              formattedValue:
                (u = r == null ? void 0 : r(l)) != null ? u : `${l}`,
              offset: t(l),
              labelOffset: 0,
            };
          });
    }
    return (typeof o == "object" ? o : t.ticks(n)).map((a) => {
      var s;
      return {
        value: a,
        formattedValue:
          (s = r == null ? void 0 : r(a)) != null ? s : t.tickFormat(n)(a),
        offset: t(a),
        labelOffset: 0,
      };
    });
  }, [n, t, r, o]);
}
const px = 0.2,
  e6 = 0.1,
  t6 = { bar: Hz, scatter: Kz, line: Yz },
  n6 = { bar: Vz, scatter: Gz, line: qz },
  hr = y.createContext({ xAxis: {}, yAxis: {}, xAxisIds: [], yAxisIds: [] });
function r6(e) {
  const { xAxis: t, yAxis: n, dataset: r, children: o } = e,
    i = y.useContext(Na),
    a = y.useContext(ii),
    s = y.useMemo(
      () =>
        t == null
          ? void 0
          : t.map((c) => {
              const d = c.dataKey;
              if (d === void 0 || c.data !== void 0) return c;
              if (r === void 0)
                throw Error(
                  "MUI-X-Charts: x-axis uses `dataKey` but no `dataset` is provided."
                );
              return P({}, c, { data: r.map((f) => f[d]) });
            }),
      [t, r]
    ),
    l = y.useMemo(
      () =>
        n == null
          ? void 0
          : n.map((c) => {
              const d = c.dataKey;
              if (d === void 0 || c.data !== void 0) return c;
              if (r === void 0)
                throw Error(
                  "MUI-X-Charts: y-axis uses `dataKey` but no `dataset` is provided."
                );
              return P({}, c, { data: r.map((f) => f[d]) });
            }),
      [n, r]
    ),
    u = y.useMemo(() => {
      var c, d;
      const f = (m, x, S, E, b) => {
          var k, R;
          const T = E[x],
            $ = (k = (R = i[x]) == null ? void 0 : R.series) != null ? k : {},
            [M, L] = T({ series: $, axis: S, isDefaultAxis: b }),
            [_, N] = m;
          return _ === null || N === null
            ? [M, L]
            : M === null || L === null
            ? [_, N]
            : [Math.min(M, _), Math.max(L, N)];
        },
        h = (m, x, S) =>
          Object.keys(x).reduce((b, k) => f(b, k, m, x, S), [null, null]),
        p = [
          ...((c =
            s == null
              ? void 0
              : s.map((m, x) => P({ id: `deaultized-x-axis-${x}` }, m))) != null
            ? c
            : []),
          ...(s === void 0 || s.findIndex(({ id: m }) => m === El) === -1
            ? [{ id: El, scaleType: "linear" }]
            : []),
        ],
        g = {};
      p.forEach((m, x) => {
        var S, E, b, k, R;
        const T = x === 0,
          [$, M] = h(m, t6, T),
          L = m.reverse
            ? [a.left + a.width, a.left]
            : [a.left, a.left + a.width];
        if (Gc(m)) {
          var _, N;
          const X = (_ = m.categoryGapRatio) != null ? _ : px,
            Y = (N = m.barGapRatio) != null ? N : e6;
          g[m.id] = P({ categoryGapRatio: X, barGapRatio: Y }, m, {
            scale: Dc(m.data, L)
              .paddingInner(X)
              .paddingOuter(X / 2),
            tickNumber: m.data.length,
          });
        }
        if (
          (cx(m) &&
            (g[m.id] = P({}, m, {
              scale: A1(m.data, L),
              tickNumber: m.data.length,
            })),
          m.scaleType === "band" || m.scaleType === "point")
        )
          return;
        const A = (S = m.scaleType) != null ? S : "linear",
          D = [(E = m.min) != null ? E : $, (b = m.max) != null ? b : M],
          F = fx(P({}, m, { range: L, domain: D })),
          O = dx(A, D, L).nice(F),
          j = O.domain(),
          U = [(k = m.min) != null ? k : j[0], (R = m.max) != null ? R : j[1]];
        g[m.id] = P({}, m, { scaleType: A, scale: O.domain(U), tickNumber: F });
      });
      const w = [
          ...((d =
            l == null
              ? void 0
              : l.map((m, x) => P({ id: `deaultized-y-axis-${x}` }, m))) != null
            ? d
            : []),
          ...(l === void 0 || l.findIndex(({ id: m }) => m === Pl) === -1
            ? [{ id: Pl, scaleType: "linear" }]
            : []),
        ],
        v = {};
      return (
        w.forEach((m, x) => {
          var S, E, b, k, R;
          const T = x === 0,
            [$, M] = h(m, n6, T),
            L = m.reverse
              ? [a.top, a.top + a.height]
              : [a.top + a.height, a.top];
          if (Gc(m)) {
            var _;
            const U = (_ = m.categoryGapRatio) != null ? _ : px;
            v[m.id] = P({ categoryGapRatio: U, barGapRatio: 0 }, m, {
              scale: Dc(m.data, [L[1], L[0]])
                .paddingInner(U)
                .paddingOuter(U / 2),
              tickNumber: m.data.length,
            });
          }
          if (
            (cx(m) &&
              (v[m.id] = P({}, m, {
                scale: A1(m.data, [L[1], L[0]]),
                tickNumber: m.data.length,
              })),
            m.scaleType === "band" || m.scaleType === "point")
          )
            return;
          const N = (S = m.scaleType) != null ? S : "linear",
            A = [(E = m.min) != null ? E : $, (b = m.max) != null ? b : M],
            D = fx(P({}, m, { range: L, domain: A })),
            F = dx(N, A, L).nice(D),
            O = F.domain(),
            j = [
              (k = m.min) != null ? k : O[0],
              (R = m.max) != null ? R : O[1],
            ];
          v[m.id] = P({}, m, {
            scaleType: N,
            scale: F.domain(j),
            tickNumber: D,
          });
        }),
        {
          xAxis: g,
          yAxis: v,
          xAxisIds: p.map(({ id: m }) => m),
          yAxisIds: w.map(({ id: m }) => m),
        }
      );
    }, [a.height, a.left, a.top, a.width, i, s, l]);
  return C.jsx(hr.Provider, { value: u, children: o });
}
const Oa = y.createContext({
    item: null,
    axis: { x: null, y: null },
    dispatch: () => null,
  }),
  o6 = (e, t) => {
    switch (t.type) {
      case "enterItem":
        return P({}, e, { item: t.data });
      case "leaveItem":
        return e.item === null ||
          Object.keys(t.data).some((n) => t.data[n] !== e.item[n])
          ? e
          : P({}, e, { item: null });
      case "updateAxis":
        return P({}, e, { axis: t.data });
      default:
        return e;
    }
  };
function i6(e) {
  const { children: t } = e,
    [n, r] = y.useReducer(o6, { item: null, axis: { x: null, y: null } }),
    o = y.useMemo(() => P({}, n, { dispatch: r }), [n]);
  return C.jsx(Oa.Provider, { value: o, children: t });
}
const v0 = { highlighted: "none", faded: "none" },
  Fk = y.createContext({ item: null, scope: v0, dispatch: () => null }),
  a6 = (e, t) => {
    switch (t.type) {
      case "enterItem":
        return P({}, e, { item: t.item, scope: P({}, v0, t.scope) });
      case "leaveItem":
        return e.item === null ||
          Object.keys(t.item).some((n) => t.item[n] !== e.item[n])
          ? e
          : P({}, e, { item: null });
      default:
        return e;
    }
  };
function s6(e) {
  const { children: t } = e,
    [n, r] = y.useReducer(a6, { item: null, scope: v0 }),
    o = y.useMemo(() => P({}, n, { dispatch: r }), [n]);
  return C.jsx(Fk.Provider, { value: o, children: t });
}
const l6 = (e) => {
    const { dispatch: t } = y.useContext(Oa),
      { dispatch: n } = y.useContext(Fk);
    return (o) => ({
      onMouseEnter: () => {
        t({ type: "enterItem", data: o }),
          n({ type: "enterItem", item: o, scope: e });
      },
      onMouseLeave: () => {
        t({ type: "leaveItem", data: o }), n({ type: "leaveItem", item: o });
      },
    });
  },
  u6 = (e, t, n) => {
    if (!(n != null && n.highlighted) || n.highlighted === "none" || e === null)
      return !1;
    const r = e.type === t.type && e.seriesId === t.seriesId;
    return r
      ? n.highlighted === "series"
        ? r
        : e.dataIndex !== void 0 && e.dataIndex === t.dataIndex
      : !1;
  },
  c6 = (e, t, n) => {
    if (!(n != null && n.faded) || n.faded === "none" || e === null) return !1;
    const r = e.type === t.type && e.seriesId === t.seriesId;
    return n.faded === "series"
      ? r && e.dataIndex !== t.dataIndex
      : n.faded === "global"
      ? r
        ? e.dataIndex !== void 0 && e.dataIndex !== t.dataIndex
        : !0
      : !1;
  },
  d6 = [
    "id",
    "dataIndex",
    "classes",
    "color",
    "highlightScope",
    "slots",
    "slotProps",
    "style",
  ];
function f6(e) {
  return Le("MuiBarElement", e);
}
Me("MuiBarElement", ["root"]);
const p6 = (e) => {
    const { classes: t, id: n } = e,
      r = { root: ["root", `series-${n}`] };
    return Ie(r, f6, t);
  },
  h6 = le(Bj.rect, {
    name: "MuiBarElement",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ ownerState: e }) => ({
    stroke: "none",
    shapeRendering: "crispEdges",
    fill: e.isHighlighted ? ga(e.color).brighter(0.5).formatHex() : e.color,
    transition: "opacity 0.2s ease-in, fill 0.2s ease-in",
    opacity: (e.isFaded && 0.3) || 1,
  }));
function m6(e) {
  var t;
  const {
      id: n,
      dataIndex: r,
      classes: o,
      color: i,
      highlightScope: a,
      slots: s,
      slotProps: l,
      style: u,
    } = e,
    c = ie(e, d6),
    d = l6(a),
    { item: f } = y.useContext(Oa),
    h = u6(f, { type: "bar", seriesId: n, dataIndex: r }, a),
    p = !h && c6(f, { type: "bar", seriesId: n, dataIndex: r }, a),
    g = {
      id: n,
      dataIndex: r,
      classes: o,
      color: i,
      isFaded: p,
      isHighlighted: h,
    },
    w = p6(g),
    v = (t = s == null ? void 0 : s.bar) != null ? t : h6,
    m = jt({
      elementType: v,
      externalSlotProps: l == null ? void 0 : l.bar,
      additionalProps: P({}, c, d({ type: "bar", seriesId: n, dataIndex: r }), {
        style: u,
        className: w.root,
      }),
      ownerState: g,
    });
  return C.jsx(v, P({}, m));
}
const g6 = ["skipAnimation"];
function v6({ bandWidth: e, numberOfGroups: t, gapRatio: n }) {
  if (n === 0) return { barWidth: e / t, offset: 0 };
  const r = e / (t + (t - 1) * n),
    o = n * r;
  return { barWidth: r, offset: o };
}
const y6 = () => {
    var e;
    const t =
        (e = y.useContext(Na).bar) != null
          ? e
          : { series: {}, stackingGroups: [], seriesOrder: [] },
      n = y.useContext(hr),
      { series: r, stackingGroups: o } = t,
      { xAxis: i, yAxis: a, xAxisIds: s, yAxisIds: l } = n,
      u = s[0],
      c = l[0];
    return o.flatMap(({ ids: f }, h) =>
      f.flatMap((p) => {
        var g, w;
        const v = (g = r[p].xAxisKey) != null ? g : u,
          m = (w = r[p].yAxisKey) != null ? w : c,
          x = i[v],
          S = a[m],
          E = r[p].layout === "vertical";
        let b;
        if (E) {
          if (!Gc(x))
            throw new Error(
              `MUI-X-Charts: ${
                v === El ? "The first `xAxis`" : `The x-axis with id "${v}"`
              } shoud be of type "band" to display the bar series of id "${p}"`
            );
          if (i[v].data === void 0)
            throw new Error(
              `MUI-X-Charts: ${
                v === El ? "The first `xAxis`" : `The x-axis with id "${v}"`
              } shoud have data property`
            );
          b = x;
        } else {
          if (!Gc(S))
            throw new Error(
              `MUI-X-Charts: ${
                m === Pl ? "The first `yAxis`" : `The y-axis with id "${m}"`
              } shoud be of type "band" to display the bar series of id "${p}"`
            );
          if (a[m].data === void 0)
            throw new Error(
              `MUI-X-Charts: ${
                m === Pl ? "The first `yAxis`" : `The y-axis with id "${m}"`
              } shoud have data property`
            );
          b = S;
        }
        const k = x.scale,
          R = S.scale,
          T = b.scale.bandwidth(),
          { barWidth: $, offset: M } = v6({
            bandWidth: T,
            numberOfGroups: o.length,
            gapRatio: b.barGapRatio,
          }),
          L = h * ($ + M),
          { stackedData: _, color: N } = r[p];
        return _.map((A, D) => {
          var F, O;
          const j = A.map((Y) => (E ? R(Y) : k(Y))),
            U = Math.min(...j),
            X = Math.max(...j);
          return {
            seriesId: p,
            dataIndex: D,
            layout: r[p].layout,
            x: E ? k((F = i[v].data) == null ? void 0 : F[D]) + L : U,
            y: E ? U : R((O = a[m].data) == null ? void 0 : O[D]) + L,
            xOrigin: k(0),
            yOrigin: R(0),
            height: E ? X - U : $,
            width: E ? $ : X - U,
            color: N,
            highlightScope: r[p].highlightScope,
          };
        });
      })
    );
  },
  hx = ({
    layout: e,
    yOrigin: t,
    x: n,
    width: r,
    y: o,
    xOrigin: i,
    height: a,
  }) =>
    P(
      {},
      e === "vertical"
        ? { y: t, x: n, height: 0, width: r }
        : { y: o, x: i, height: a, width: 0 }
    ),
  mx = ({ x: e, width: t, y: n, height: r }) => ({
    y: n,
    x: e,
    height: r,
    width: t,
  });
function x6(e) {
  const t = y6(),
    { skipAnimation: n } = e,
    r = ie(e, g6),
    o = Ej(t, {
      keys: (i) => `${i.seriesId}-${i.dataIndex}`,
      from: hx,
      leave: hx,
      enter: mx,
      update: mx,
      immediate: n,
    });
  return C.jsx(y.Fragment, {
    children: o(
      (i, { seriesId: a, dataIndex: s, color: l, highlightScope: u }) =>
        C.jsx(
          m6,
          P({ id: a, dataIndex: s, highlightScope: u, color: l }, r, {
            style: i,
          })
        )
    ),
  });
}
const b6 = () => {
    Io(() => {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = (n) => {
          Ln.assign({ skipAnimation: n.matches || void 0 });
        };
      return (
        t(e),
        e.addEventListener("change", t),
        () => {
          e.removeEventListener("change", t);
        }
      );
    }, []);
  },
  w6 = (e) => {
    const t = y.useContext(g0),
      { width: n, height: r, top: o, left: i } = y.useContext(ii),
      { xAxis: a, yAxis: s, xAxisIds: l, yAxisIds: u } = y.useContext(hr),
      { dispatch: c } = y.useContext(Oa),
      d = l[0],
      f = u[0],
      h = y.useRef({ x: -1, y: -1 });
    y.useEffect(() => {
      const p = t.current;
      if (p === null || e) return () => {};
      const g = (m, x) => {
          if (d === null) return null;
          const { scale: S, data: E } = m;
          if (!Rl(S)) {
            const k = S.invert(x);
            if (E === void 0) return { value: k };
            const R =
              E == null
                ? void 0
                : E.findIndex(
                    (T, $) =>
                      (T > k &&
                        ($ === 0 ||
                          Math.abs(k - T) <= Math.abs(k - E[$ - 1]))) ||
                      (T <= k &&
                        ($ === E.length - 1 ||
                          Math.abs(k - T) < Math.abs(k - E[$ + 1])))
                  );
            return { value: R !== void 0 && R >= 0 ? E[R] : k, index: R };
          }
          const b =
            S.bandwidth() === 0
              ? Math.floor(
                  (x - Math.min(...S.range()) + S.step() / 2) / S.step()
                )
              : Math.floor((x - Math.min(...S.range())) / S.step());
          return b < 0 || b >= E.length ? null : { index: b, value: E[b] };
        },
        w = () => {
          (h.current = { x: -1, y: -1 }),
            c({ type: "updateAxis", data: { x: null, y: null } });
        },
        v = (m) => {
          const x = t.current.createSVGPoint();
          (x.x = m.clientX), (x.y = m.clientY);
          const S = x.matrixTransform(t.current.getScreenCTM().inverse());
          h.current = { x: S.x, y: S.y };
          const E = S.x < i || S.x > i + n,
            b = S.y < o || S.y > o + r;
          if (E || b) {
            c({ type: "updateAxis", data: { x: null, y: null } });
            return;
          }
          const k = g(a[d], S.x),
            R = g(s[f], S.y);
          c({ type: "updateAxis", data: { x: k, y: R } });
        };
      return (
        p.addEventListener("mouseout", w),
        p.addEventListener("mousemove", v),
        () => {
          p.removeEventListener("mouseout", w),
            p.removeEventListener("mousemove", v);
        }
      );
    }, [t, c, i, n, o, r, f, s, d, a, e]);
  },
  S6 = [
    "children",
    "width",
    "height",
    "viewBox",
    "disableAxisListener",
    "className",
  ],
  C6 = le("svg", { name: "MuiChartsSurface", slot: "Root" })(() => ({})),
  k6 = y.forwardRef(function (t, n) {
    const {
        children: r,
        width: o,
        height: i,
        viewBox: a,
        disableAxisListener: s = !1,
      } = t,
      l = ie(t, S6),
      u = P({ width: o, height: i, x: 0, y: 0 }, a);
    return (
      w6(s),
      C.jsxs(
        C6,
        P(
          {
            width: o,
            height: i,
            viewBox: `${u.x} ${u.y} ${u.width} ${u.height}`,
            ref: n,
          },
          l,
          {
            children: [
              C.jsx("title", { children: t.title }),
              C.jsx("desc", { children: t.desc }),
              r,
            ],
          }
        )
      )
    );
  }),
  E6 = y.forwardRef(function (t, n) {
    const {
        width: r,
        height: o,
        series: i,
        margin: a,
        xAxis: s,
        yAxis: l,
        colors: u,
        dataset: c,
        sx: d,
        title: f,
        desc: h,
        disableAxisListener: p,
        children: g,
      } = t,
      w = y.useRef(null),
      v = Ct(n, w);
    return (
      b6(),
      C.jsx(Jz, {
        width: r,
        height: o,
        margin: a,
        svgRef: w,
        children: C.jsx(vD, {
          series: i,
          colors: u,
          dataset: c,
          children: C.jsx(r6, {
            xAxis: s,
            yAxis: l,
            dataset: c,
            children: C.jsx(i6, {
              children: C.jsx(s6, {
                children: C.jsx(k6, {
                  width: r,
                  height: o,
                  ref: v,
                  sx: d,
                  title: f,
                  desc: h,
                  disableAxisListener: p,
                  children: g,
                }),
              }),
            }),
          }),
        }),
      })
    );
  }),
  P6 = ["width", "height"],
  R6 = (e, t) => {
    const n = y.useRef(null),
      r = y.useRef(!1),
      [o, i] = y.useState(0),
      [a, s] = y.useState(0),
      l = y.useCallback(() => {
        const u = n == null ? void 0 : n.current;
        if (!u) return;
        const d = ho(u).getComputedStyle(u),
          f = Math.floor(parseFloat(d.height)) || 0,
          h = Math.floor(parseFloat(d.width)) || 0;
        i(h), s(f);
      }, []);
    return (
      y.useEffect(() => {
        r.current = !0;
      }, []),
      fn(() => {
        if (e !== void 0 && t !== void 0) return () => {};
        l();
        const u = n.current;
        if (typeof ResizeObserver > "u") return () => {};
        let c;
        const d = new ResizeObserver(() => {
          c = requestAnimationFrame(() => {
            l();
          });
        });
        return (
          u && d.observe(u),
          () => {
            c && window.cancelAnimationFrame(c), u && d.unobserve(u);
          }
        );
      }, [l, t, e]),
      [n, e ?? o, t ?? a]
    );
  },
  $6 = le("div", { name: "MuiResponsiveChart", slot: "Container" })(
    ({ ownerState: e }) => {
      var t, n;
      return {
        width: (t = e.width) != null ? t : "100%",
        height: (n = e.height) != null ? n : "100%",
        display: "flex",
        position: "relative",
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        "&>svg": { width: "100%", height: "100%" },
      };
    }
  ),
  M6 = y.forwardRef(function (t, n) {
    const { width: r, height: o } = t,
      i = ie(t, P6),
      [a, s, l] = R6(r, o);
    return C.jsx($6, {
      ref: a,
      ownerState: { width: r, height: o },
      children:
        s && l ? C.jsx(E6, P({}, i, { width: s, height: l, ref: n })) : null,
    });
  });
function zk(e) {
  return Le("MuiChartsAxis", e);
}
const Cu = Me("MuiChartsAxis", [
    "root",
    "line",
    "tickContainer",
    "tick",
    "tickLabel",
    "label",
    "directionX",
    "directionY",
    "top",
    "bottom",
    "left",
    "right",
  ]),
  Bk = le("g", {
    name: "MuiChartsAxis",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    [`& .${Cu.tickLabel}`]: P({}, e.typography.caption, {
      fill: (e.vars || e).palette.text.primary,
    }),
    [`& .${Cu.label}`]: P({}, e.typography.body1, {
      fill: (e.vars || e).palette.text.primary,
    }),
    [`& .${Cu.line}`]: {
      stroke: (e.vars || e).palette.text.primary,
      shapeRendering: "crispEdges",
      strokeWidth: 1,
    },
    [`& .${Cu.tick}`]: {
      stroke: (e.vars || e).palette.text.primary,
      shapeRendering: "crispEdges",
    },
  })),
  T6 = () => !(typeof window < "u" && window.document && window.setTimeout),
  ko = { widthCache: {}, cacheCount: 0 },
  N6 = 2e3,
  O6 = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  A6 = [
    "minWidth",
    "maxWidth",
    "width",
    "minHeight",
    "maxHeight",
    "height",
    "top",
    "left",
    "fontSize",
    "padding",
    "margin",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingBottom",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginBottom",
  ],
  gx = "mui_measurement_span";
function Uk(e, t) {
  return A6.indexOf(e) >= 0 && t === +t ? `${t}px` : t;
}
function Wk(e) {
  return e
    .split("")
    .reduce(
      (r, o) =>
        o === o.toUpperCase() ? [...r, "-", o.toLowerCase()] : [...r, o],
      []
    )
    .join("");
}
const _6 = (e) =>
    Object.keys(e)
      .sort()
      .reduce((t, n) => `${t}${Wk(n)}:${Uk(n, e[n])};`, ""),
  I6 = (e, t = {}) => {
    if (e == null || T6()) return { width: 0, height: 0 };
    const n = `${e}`,
      r = _6(t),
      o = `${n}-${r}`;
    if (ko.widthCache[o]) return ko.widthCache[o];
    try {
      let i = document.getElementById(gx);
      i === null &&
        ((i = document.createElement("span")),
        i.setAttribute("id", gx),
        i.setAttribute("aria-hidden", "true"),
        document.body.appendChild(i));
      const a = P({}, O6, t);
      Object.keys(a).map((u) => ((i.style[Wk(u)] = Uk(u, a[u])), u)),
        (i.textContent = n);
      const s = i.getBoundingClientRect(),
        l = { width: s.width, height: s.height };
      return (
        (ko.widthCache[o] = l),
        ko.cacheCount + 1 > N6
          ? ((ko.cacheCount = 0), (ko.widthCache = {}))
          : (ko.cacheCount += 1),
        l
      );
    } catch {
      return { width: 0, height: 0 };
    }
  };
function y0({ style: e, needsComputation: t, text: n }) {
  return n
    .split(
      `
`
    )
    .map((r) => P({ text: r }, t ? I6(r, e) : { width: 0, height: 0 }));
}
const L6 = ["x", "y", "style", "text", "ownerState"],
  j6 = ["angle", "textAnchor", "dominantBaseline"];
function $l(e) {
  const { x: t, y: n, style: r, text: o } = e,
    i = ie(e, L6),
    a = r ?? {},
    { angle: s, textAnchor: l, dominantBaseline: u } = a,
    c = ie(a, j6),
    d = y.useMemo(
      () =>
        y0({
          style: c,
          needsComputation: o.includes(`
`),
          text: o,
        }),
      [c, o]
    );
  let f;
  switch (u) {
    case "hanging":
      f = 0;
      break;
    case "central":
      f = ((d.length - 1) / 2) * -d[0].height;
      break;
    default:
      f = (d.length - 1) * -d[0].height;
      break;
  }
  const h = [];
  return (
    s && h.push(`rotate(${s}, ${t}, ${n})`),
    h.length && (i.transform = h.join(" ")),
    C.jsx(
      "text",
      P({}, i, {
        x: t,
        y: n,
        textAnchor: l,
        dominantBaseline: u,
        style: c,
        children: d.map((p, g) =>
          C.jsx(
            "tspan",
            {
              x: t,
              dy: `${g === 0 ? f : d[0].height}px`,
              dominantBaseline: u,
              children: p.text,
            },
            g
          )
        ),
      })
    )
  );
}
const vx = 5;
function D6(e, t, n = 0) {
  const r = Math.min(
    Math.abs(n) % 180,
    Math.abs((Math.abs(n) % 180) - 180) % 180
  );
  if (r < vx) return e;
  if (r > 90 - vx) return t;
  const o = (r * Math.PI) / 180,
    i = Math.atan2(t, e);
  return o < i ? e / Math.cos(o) : t / Math.sin(o);
}
function F6(e = !1) {
  const [t, n] = y.useState(!1);
  return (
    fn(() => {
      e || n(!0);
    }, [e]),
    y.useEffect(() => {
      e && n(!0);
    }, [e]),
    t
  );
}
const z6 = ["scale", "tickNumber", "reverse"],
  B6 = (e) => {
    const { classes: t, position: n } = e;
    return Ie(
      {
        root: ["root", "directionX", n],
        line: ["line"],
        tickContainer: ["tickContainer"],
        tick: ["tick"],
        tickLabel: ["tickLabel"],
        label: ["label"],
      },
      zk,
      t
    );
  };
function U6(
  e,
  { tickLabelStyle: t, tickLabelInterval: n, reverse: r, isMounted: o }
) {
  const i = e.map((u) => {
    if (!o || u.formattedValue === void 0)
      return P({}, u, { width: 0, height: 0 });
    const c = y0({ style: t, needsComputation: !0, text: u.formattedValue });
    return P({}, u, {
      width: Math.max(...c.map((d) => d.width)),
      height: Math.max(c.length * c[0].height),
    });
  });
  if (typeof n == "function")
    return i.map((u, c) => P({}, u, { skipLabel: !n(u.value, c) }));
  let a = 0,
    s = 0;
  const l = r ? -1 : 1;
  return i.map((u, c) => {
    const { width: d, offset: f, labelOffset: h, height: p } = u,
      g = D6(d, p, t == null ? void 0 : t.angle),
      w = f + h,
      v = 1.2;
    return (
      (a = w - (l * (v * g)) / 2),
      c > 0 && l * a < l * s
        ? P({}, u, { skipLabel: !0 })
        : ((s = w + (l * (v * g)) / 2), u)
    );
  });
}
const yx = {
  position: "bottom",
  disableLine: !1,
  disableTicks: !1,
  tickSize: 6,
};
function xx(e) {
  var t, n, r, o, i;
  const a = Be({ props: P({}, yx, e), name: "MuiChartsXAxis" }),
    { xAxisIds: s } = y.useContext(hr),
    l = y.useContext(hr),
    u = (t = a.axisId) != null ? t : s[0],
    {
      xAxis: {
        [u]: { scale: c, tickNumber: d, reverse: f },
      },
    } = l,
    h = ie(l.xAxis[u], z6),
    p = F6(),
    g = P({}, yx, h, a),
    {
      position: w,
      disableLine: v,
      disableTicks: m,
      tickLabelStyle: x,
      label: S,
      labelStyle: E,
      tickFontSize: b,
      labelFontSize: k,
      tickSize: R,
      valueFormatter: T,
      slots: $,
      slotProps: M,
      tickInterval: L,
      tickLabelInterval: _,
    } = g,
    N = jr(),
    A = B6(P({}, g, { theme: N })),
    { left: D, top: F, width: O, height: j } = y.useContext(ii),
    U = m ? 4 : R,
    X = w === "bottom" ? 1 : -1,
    Y = (n = $ == null ? void 0 : $.axisLine) != null ? n : "line",
    ce = (r = $ == null ? void 0 : $.axisTick) != null ? r : "line",
    Q = (o = $ == null ? void 0 : $.axisTickLabel) != null ? o : $l,
    q = (i = $ == null ? void 0 : $.axisLabel) != null ? i : $l,
    ne = jt({
      elementType: Q,
      externalSlotProps: M == null ? void 0 : M.axisTickLabel,
      additionalProps: {
        style: P(
          {
            textAnchor: "middle",
            dominantBaseline: w === "bottom" ? "hanging" : "auto",
            fontSize: b ?? 12,
          },
          x
        ),
        className: A.tickLabel,
      },
      className: A.tickLabel,
      ownerState: {},
    }),
    ge = Dk({ scale: c, tickNumber: d, valueFormatter: T, tickInterval: L }),
    we = U6(ge, {
      tickLabelStyle: ne.style,
      tickLabelInterval: _,
      reverse: f,
      isMounted: p,
    }),
    H = { x: D + O / 2, y: X * (U + 22) },
    re = jt({
      elementType: q,
      externalSlotProps: M == null ? void 0 : M.axisLabel,
      additionalProps: {
        style: P(
          {
            fontSize: k ?? 14,
            textAnchor: "middle",
            dominantBaseline: w === "bottom" ? "hanging" : "auto",
          },
          E
        ),
      },
      ownerState: {},
    });
  return C.jsxs(Bk, {
    transform: `translate(0, ${w === "bottom" ? F + j : F})`,
    className: A.root,
    children: [
      !v &&
        C.jsx(
          Y,
          P(
            { x1: c.range()[0], x2: c.range()[1], className: A.line },
            M == null ? void 0 : M.axisLine
          )
        ),
      we.map(
        (
          { formattedValue: G, offset: B, labelOffset: ae, skipLabel: oe },
          pe
        ) => {
          const je = ae ?? 0,
            We = X * (U + 3);
          return C.jsxs(
            "g",
            {
              transform: `translate(${B}, 0)`,
              className: A.tickContainer,
              children: [
                !m &&
                  C.jsx(
                    ce,
                    P(
                      { y2: X * U, className: A.tick },
                      M == null ? void 0 : M.axisTick
                    )
                  ),
                G !== void 0 &&
                  !oe &&
                  C.jsx(Q, P({ x: je, y: We }, ne, { text: G.toString() })),
              ],
            },
            pe
          );
        }
      ),
      S &&
        C.jsx("g", {
          className: A.label,
          children: C.jsx(q, P({}, H, re, { text: S })),
        }),
    ],
  });
}
const W6 = ["scale", "tickNumber"],
  H6 = (e) => {
    const { classes: t, position: n } = e;
    return Ie(
      {
        root: ["root", "directionY", n],
        line: ["line"],
        tickContainer: ["tickContainer"],
        tick: ["tick"],
        tickLabel: ["tickLabel"],
        label: ["label"],
      },
      zk,
      t
    );
  },
  bx = {
    position: "left",
    disableLine: !1,
    disableTicks: !1,
    tickFontSize: 12,
    labelFontSize: 14,
    tickSize: 6,
  };
function wx(e) {
  var t, n, r, o, i;
  const a = Be({ props: P({}, bx, e), name: "MuiChartsYAxis" }),
    { yAxisIds: s } = y.useContext(hr),
    l = y.useContext(hr),
    u = (t = a.axisId) != null ? t : s[0],
    {
      yAxis: {
        [u]: { scale: c, tickNumber: d },
      },
    } = l,
    f = ie(l.yAxis[u], W6),
    h = P({}, bx, f, a),
    {
      position: p,
      disableLine: g,
      disableTicks: w,
      tickFontSize: v,
      label: m,
      labelFontSize: x,
      labelStyle: S,
      tickLabelStyle: E,
      tickSize: b,
      valueFormatter: k,
      slots: R,
      slotProps: T,
    } = h,
    $ = jr(),
    M = H6(P({}, h, { theme: $ })),
    { left: L, top: _, width: N, height: A } = y.useContext(ii),
    D = w ? 4 : b,
    F = Dk({ scale: c, tickNumber: d, valueFormatter: k }),
    O = p === "right" ? 1 : -1,
    j = { x: O * (v + D + 10), y: _ + A / 2 },
    U = (n = R == null ? void 0 : R.axisLine) != null ? n : "line",
    X = (r = R == null ? void 0 : R.axisTick) != null ? r : "line",
    Y = (o = R == null ? void 0 : R.axisTickLabel) != null ? o : $l,
    ce = (i = R == null ? void 0 : R.axisLabel) != null ? i : $l,
    Q = jt({
      elementType: Y,
      externalSlotProps: T == null ? void 0 : T.axisTickLabel,
      additionalProps: {
        style: P(
          {
            fontSize: v,
            textAnchor: p === "right" ? "start" : "end",
            dominantBaseline: "central",
          },
          E
        ),
        className: M.tickLabel,
      },
      ownerState: {},
    }),
    q = jt({
      elementType: ce,
      externalSlotProps: T == null ? void 0 : T.axisLabel,
      additionalProps: {
        style: P(
          {
            fontSize: x,
            angle: O * 90,
            textAnchor: "middle",
            dominantBaseline: "auto",
          },
          S
        ),
      },
      ownerState: {},
    });
  return C.jsxs(Bk, {
    transform: `translate(${p === "right" ? L + N : L}, 0)`,
    className: M.root,
    children: [
      !g &&
        C.jsx(
          U,
          P(
            { y1: c.range()[0], y2: c.range()[1], className: M.line },
            T == null ? void 0 : T.axisLine
          )
        ),
      F.map(({ formattedValue: ne, offset: ge, labelOffset: we }, H) => {
        const re = O * (D + 2),
          G = we;
        return C.jsxs(
          "g",
          {
            transform: `translate(0, ${ge})`,
            className: M.tickContainer,
            children: [
              !w &&
                C.jsx(
                  X,
                  P(
                    { x2: O * D, className: M.tick },
                    T == null ? void 0 : T.axisTick
                  )
                ),
              ne !== void 0 &&
                C.jsx(Y, P({ x: re, y: G, text: ne.toString() }, Q)),
            ],
          },
          H
        );
      }),
      m &&
        C.jsx("g", {
          className: M.label,
          children: C.jsx(ce, P({}, j, q, { text: m })),
        }),
    ],
  });
}
const ku = (e) => {
    if (e == null) return null;
    if (typeof e == "object") {
      var t;
      return (t = e.axisId) != null ? t : null;
    }
    return e;
  },
  Eu = (e, t, n) =>
    typeof e == "object"
      ? P({}, e, {
          slots: P({}, t, e == null ? void 0 : e.slots),
          slotProps: P({}, n, e == null ? void 0 : e.slotProps),
        })
      : { slots: t, slotProps: n };
function V6(e) {
  const {
      topAxis: t,
      leftAxis: n,
      rightAxis: r,
      bottomAxis: o,
      slots: i,
      slotProps: a,
    } = e,
    { xAxis: s, xAxisIds: l, yAxis: u, yAxisIds: c } = y.useContext(hr),
    d = ku(n === void 0 ? c[0] : n),
    f = ku(o === void 0 ? l[0] : o),
    h = ku(t),
    p = ku(r);
  if (h !== null && !s[h])
    throw Error(
      [
        `MUI-X-Charts: id used for top axis "${h}" is not defined.`,
        `Available ids are: ${l.join(", ")}.`,
      ].join(`
`)
    );
  if (d !== null && !u[d])
    throw Error(
      [
        `MUI-X-Charts: id used for left axis "${d}" is not defined.`,
        `Available ids are: ${c.join(", ")}.`,
      ].join(`
`)
    );
  if (p !== null && !u[p])
    throw Error(
      [
        `MUI-X-Charts: id used for right axis "${p}" is not defined.`,
        `Available ids are: ${c.join(", ")}.`,
      ].join(`
`)
    );
  if (f !== null && !s[f])
    throw Error(
      [
        `MUI-X-Charts: id used for bottom axis "${f}" is not defined.`,
        `Available ids are: ${l.join(", ")}.`,
      ].join(`
`)
    );
  const g = Eu(t, i, a),
    w = Eu(o, i, a),
    v = Eu(n, i, a),
    m = Eu(r, i, a);
  return C.jsxs(y.Fragment, {
    children: [
      h && C.jsx(xx, P({}, g, { position: "top", axisId: h })),
      f && C.jsx(xx, P({}, w, { position: "bottom", axisId: f })),
      d && C.jsx(wx, P({}, v, { position: "left", axisId: d })),
      p && C.jsx(wx, P({}, m, { position: "right", axisId: p })),
    ],
  });
}
function K6(e) {
  if (e === null)
    return {
      getBoundingClientRect: () => ({
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        toJSON: () => "",
      }),
    };
  const { x: t, y: n } = e;
  return {
    getBoundingClientRect: () => ({
      width: 0,
      height: 0,
      x: t,
      y: n,
      top: n,
      right: t,
      bottom: n,
      left: t,
      toJSON: () =>
        JSON.stringify({
          width: 0,
          height: 0,
          x: t,
          y: n,
          top: n,
          right: t,
          bottom: n,
          left: t,
        }),
    }),
  };
}
function G6() {
  const e = y.useContext(g0),
    [t, n] = y.useState(null);
  return (
    y.useEffect(() => {
      const r = e.current;
      if (r === null) return () => {};
      const o = () => {
          n(null);
        },
        i = (a) => {
          n({ x: a.clientX, y: a.clientY });
        };
      return (
        r.addEventListener("mouseout", o),
        r.addEventListener("mousemove", i),
        () => {
          r.removeEventListener("mouseout", o),
            r.removeEventListener("mousemove", i);
        }
      );
    }, [e]),
    t
  );
}
function Y6(e, t) {
  if (e === "item") return t !== null;
  const n = t.x !== null,
    r = t.y !== null;
  return n || r;
}
function X6(e) {
  return Le("MuiChartsTooltip", e);
}
const Sx = Me("MuiChartsTooltip", [
    "root",
    "table",
    "row",
    "cell",
    "mark",
    "markCell",
    "labelCell",
    "valueCell",
  ]),
  Hk = le("div", { name: "MuiChartsTooltip", slot: "Container" })(
    ({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create("box-shadow"),
      border: `1px solid ${(e.vars || e).palette.divider}`,
      borderRadius: e.shape.borderRadius,
    })
  ),
  Vk = le("table", { name: "MuiChartsTooltip", slot: "Table" })(
    ({ theme: e }) => ({
      borderSpacing: 0,
      "& thead td": {
        borderBottom: `solid ${(e.vars || e).palette.divider} 1px`,
      },
    })
  ),
  tm = le("tr", { name: "MuiChartsTooltip", slot: "Row" })(({ theme: e }) => ({
    "tr:first-of-type& td": { paddingTop: e.spacing(1) },
    "tr:last-of-type& td": { paddingBottom: e.spacing(1) },
  })),
  Do = le("td", { name: "MuiChartsTooltip", slot: "Cell" })(({ theme: e }) => ({
    verticalAlign: "middle",
    color: (e.vars || e).palette.text.secondary,
    [`&.${Sx.labelCell}`]: { paddingLeft: e.spacing(1) },
    [`&.${Sx.valueCell}`]: {
      paddingLeft: e.spacing(4),
      color: (e.vars || e).palette.text.primary,
    },
    "td:first-of-type&": { paddingLeft: e.spacing(2) },
    "td:last-of-type&": { paddingRight: e.spacing(2) },
  })),
  Kk = le(h5, { name: "MuiChartsTooltip", slot: "Mark" })(
    ({ theme: e, ownerState: t }) => ({
      width: e.spacing(1),
      height: e.spacing(1),
      borderRadius: "50%",
      backgroundColor: t.color,
      borderColor: (e.vars || e).palette.background.paper,
      border: `solid ${(e.vars || e).palette.background.paper} ${e.spacing(
        0.25
      )}`,
      boxSizing: "content-box",
    })
  );
function q6(e) {
  const { series: t, itemData: n, sx: r, classes: o } = e;
  if (n.dataIndex === void 0) return null;
  const { displayedLabel: i, color: a } =
      t.type === "pie"
        ? {
            color: t.data[n.dataIndex].color,
            displayedLabel: t.data[n.dataIndex].label,
          }
        : { color: t.color, displayedLabel: t.label },
    s = t.valueFormatter(t.data[n.dataIndex]);
  return C.jsx(Hk, {
    sx: r,
    className: o.root,
    children: C.jsx(Vk, {
      className: o.table,
      children: C.jsx("tbody", {
        children: C.jsxs(tm, {
          className: o.row,
          children: [
            C.jsx(Do, {
              className: ve(o.markCell, o.cell),
              children: C.jsx(Kk, {
                ownerState: { color: a },
                className: o.mark,
              }),
            }),
            C.jsx(Do, { className: ve(o.labelCell, o.cell), children: i }),
            C.jsx(Do, { className: ve(o.valueCell, o.cell), children: s }),
          ],
        }),
      }),
    }),
  });
}
function Q6(e) {
  const { content: t, itemData: n, sx: r, classes: o, contentProps: i } = e,
    a = y.useContext(Na)[n.type].series[n.seriesId],
    s = t ?? q6,
    l = jt({
      elementType: s,
      externalSlotProps: i,
      additionalProps: { itemData: n, series: a, sx: r, classes: o },
      ownerState: {},
    });
  return C.jsx(s, P({}, l));
}
function Z6(e) {
  var t;
  const {
    series: n,
    axis: r,
    dataIndex: o,
    axisValue: i,
    sx: a,
    classes: s,
  } = e;
  if (o == null) return null;
  const l = (t = r.valueFormatter) != null ? t : (u) => u.toLocaleString();
  return C.jsx(Hk, {
    sx: a,
    className: s.root,
    children: C.jsxs(Vk, {
      className: s.table,
      children: [
        i != null &&
          !r.hideTooltip &&
          C.jsx("thead", {
            children: C.jsx(tm, {
              children: C.jsx(Do, {
                colSpan: 3,
                children: C.jsx(Uo, { children: l(i) }),
              }),
            }),
          }),
        C.jsx("tbody", {
          children: n.map(
            ({ color: u, id: c, label: d, valueFormatter: f, data: h }) => {
              const p = f(h[o]);
              return p == null
                ? null
                : C.jsxs(
                    tm,
                    {
                      className: s.row,
                      children: [
                        C.jsx(Do, {
                          className: ve(s.markCell, s.cell),
                          children: C.jsx(Kk, {
                            ownerState: { color: u },
                            boxShadow: 1,
                            className: s.mark,
                          }),
                        }),
                        C.jsx(Do, {
                          className: ve(s.labelCell, s.cell),
                          children: d ? C.jsx(Uo, { children: d }) : null,
                        }),
                        C.jsx(Do, {
                          className: ve(s.valueCell, s.cell),
                          children: C.jsx(Uo, { children: p }),
                        }),
                      ],
                    },
                    c
                  );
            }
          ),
        }),
      ],
    }),
  });
}
function J6(e) {
  const { content: t, contentProps: n, axisData: r, sx: o, classes: i } = e,
    a = (r.x && r.x.index) !== void 0,
    s = a ? r.x && r.x.index : r.y && r.y.index,
    l = a ? r.x && r.x.value : r.y && r.y.value,
    { xAxisIds: u, xAxis: c, yAxisIds: d, yAxis: f } = y.useContext(hr),
    h = y.useContext(Na),
    p = a ? u[0] : d[0],
    g = y.useMemo(() => {
      const x = [];
      return (
        Object.keys(h)
          .filter((S) => ["bar", "line", "scatter"].includes(S))
          .forEach((S) => {
            h[S].seriesOrder.forEach((E) => {
              const b = h[S].series[E],
                k = a ? b.xAxisKey : b.yAxisKey;
              (k === void 0 || k === p) && x.push(h[S].series[E]);
            });
          }),
        x
      );
    }, [p, a, h]),
    w = y.useMemo(() => (a ? c[p] : f[p]), [p, a, c, f]),
    v = t ?? Z6,
    m = jt({
      elementType: v,
      externalSlotProps: n,
      additionalProps: {
        axisData: r,
        series: g,
        axis: w,
        dataIndex: s,
        axisValue: l,
        sx: o,
        classes: i,
      },
      ownerState: {},
    });
  return C.jsx(v, P({}, m));
}
const e8 = (e) => {
    const { classes: t } = e;
    return Ie(
      {
        root: ["root"],
        table: ["table"],
        row: ["row"],
        cell: ["cell"],
        mark: ["mark"],
        markCell: ["markCell"],
        labelCell: ["labelCell"],
        valueCell: ["valueCell"],
      },
      X6,
      t
    );
  },
  t8 = le(__, {
    name: "MuiChartsTooltip",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({ pointerEvents: "none", zIndex: e.zIndex.modal }));
function n8(e) {
  var t, n, r;
  const o = Be({ props: e, name: "MuiChartsTooltip" }),
    {
      trigger: i = "axis",
      itemContent: a,
      axisContent: s,
      slots: l,
      slotProps: u,
    } = o,
    c = G6(),
    { item: d, axis: f } = y.useContext(Oa),
    h = i === "item" ? d : f,
    p = Y6(i, h),
    g = c !== null && p,
    w = e8({ classes: o.classes }),
    v = (t = l == null ? void 0 : l.popper) != null ? t : t8,
    m = jt({
      elementType: v,
      externalSlotProps: u == null ? void 0 : u.popper,
      additionalProps: { open: g, placement: "right-start", anchorEl: K6(c) },
      ownerState: {},
    });
  return i === "none"
    ? null
    : C.jsx(vC, {
        children:
          g &&
          C.jsx(
            v,
            P({}, m, {
              children:
                i === "item"
                  ? C.jsx(Q6, {
                      itemData: h,
                      content:
                        (n = l == null ? void 0 : l.itemContent) != null
                          ? n
                          : a,
                      contentProps: u == null ? void 0 : u.itemContent,
                      sx: { mx: 2 },
                      classes: w,
                    })
                  : C.jsx(J6, {
                      axisData: h,
                      content:
                        (r = l == null ? void 0 : l.axisContent) != null
                          ? r
                          : s,
                      contentProps: u == null ? void 0 : u.axisContent,
                      sx: { mx: 2 },
                      classes: w,
                    }),
            })
          ),
      });
}
const r8 = (e) => {
    const { seriesOrder: t, series: n } = e;
    return t
      .map((o) => ({ color: n[o].color, label: n[o].label, id: o }))
      .filter((o) => o.label !== void 0);
  },
  o8 = r8,
  i8 = (e) => {
    const { seriesOrder: t, series: n } = e;
    return t
      .map((o) => ({ color: n[o].color, label: n[o].label, id: o }))
      .filter((o) => o.label !== void 0);
  },
  a8 = i8,
  s8 = (e) => {
    const { seriesOrder: t, series: n } = e;
    return t
      .map((o) => ({ color: n[o].color, label: n[o].label, id: o }))
      .filter((o) => o.label !== void 0);
  },
  l8 = s8,
  u8 = (e) => {
    const { seriesOrder: t, series: n } = e;
    return t.flatMap((r) =>
      n[r].data
        .map((o) => ({ color: o.color, label: o.label, id: o.id }))
        .filter((o) => o.label !== void 0)
    );
  },
  c8 = u8,
  d8 = { bar: o8, scatter: a8, line: l8, pie: c8 };
function f8(e) {
  return Object.keys(e).flatMap((t) => d8[t](e[t]));
}
function p8(e) {
  return Le("MuiChartsLegend", e);
}
Me("MuiChartsLegend", ["root", "series", "mark", "label", "column", "row"]);
const h8 = ["rotate", "dominantBaseline"],
  m8 = ["label"],
  g8 = (e) => {
    const { classes: t, direction: n } = e;
    return Ie(
      {
        root: ["root", n],
        mark: ["mark"],
        label: ["label"],
        series: ["series"],
      },
      p8,
      t
    );
  },
  v8 = le("g", {
    name: "MuiChartsLegend",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  y8 = {
    position: { horizontal: "middle", vertical: "top" },
    direction: "row",
  },
  x8 = (e) =>
    typeof e == "number"
      ? { left: e, right: e, top: e, bottom: e }
      : P({ left: 0, right: 0, top: 0, bottom: 0 }, e);
function b8(e) {
  const {
      hidden: t,
      position: n,
      direction: r,
      seriesToDisplay: o,
      drawingArea: i,
      classes: a,
      itemMarkWidth: s = 20,
      itemMarkHeight: l = 20,
      markGap: u = 5,
      itemGap: c = 10,
      padding: d = 10,
      labelStyle: f,
    } = e,
    h = jr(),
    p = y.useMemo(
      () =>
        P(
          {},
          h.typography.subtitle1,
          {
            color: "inherit",
            dominantBaseline: "central",
            textAnchor: "start",
            fill: (h.vars || h).palette.text.primary,
            lineHeight: 1,
          },
          f
        ),
      [f, h]
    ),
    g = y.useMemo(() => x8(d), [d]),
    w = y.useCallback(
      (b, k = {}) => {
        const R = ie(k, h8),
          T = y0({ style: R, needsComputation: !0, text: b }),
          $ = {
            innerWidth: s + u + Math.max(...T.map((M) => M.width)),
            innerHeight: Math.max(l, T.length * T[0].height),
          };
        return P({}, $, {
          outerWidth: $.innerWidth + c,
          outerHeight: $.innerHeight + c,
        });
      },
      [c, l, s, u]
    ),
    v = i.left + i.width + i.right,
    m = i.top + i.height + i.bottom,
    x = v - g.left - g.right,
    S = m - g.top - g.bottom,
    E = y.useMemo(() => {
      let b = 0,
        k = 0,
        R = 0,
        T = 0,
        $ = 0;
      const M = [0],
        L = o.map((A) => {
          let { label: D } = A,
            F = ie(A, m8);
          const O = w(D, p),
            j = P({}, F, {
              label: D,
              positionX: b,
              positionY: k,
              innerHeight: O.innerHeight,
              innerWidth: O.innerWidth,
              outerHeight: O.outerHeight,
              outerWidth: O.outerWidth,
              rowIndex: $,
            });
          return (
            r === "row" &&
              (b + O.innerWidth > x &&
                ((b = 0),
                (k += M[$]),
                ($ += 1),
                M.length <= $ && M.push(0),
                (j.positionX = b),
                (j.positionY = k),
                (j.rowIndex = $)),
              (R = Math.max(R, b + O.outerWidth)),
              (T = Math.max(T, k + O.outerHeight)),
              (M[$] = Math.max(M[$], O.outerHeight)),
              (b += O.outerWidth)),
            r === "column" &&
              (k + O.innerHeight > S &&
                ((b = R + c),
                (k = 0),
                ($ = 0),
                (j.positionX = b),
                (j.positionY = k),
                (j.rowIndex = $)),
              M.length <= $ && M.push(0),
              (R = Math.max(R, b + O.outerWidth)),
              (T = Math.max(T, k + O.outerHeight)),
              ($ += 1),
              (k += O.outerHeight)),
            j
          );
        });
      let _ = 0,
        N = 0;
      switch (n.horizontal) {
        case "left":
          _ = g.left;
          break;
        case "right":
          _ = v - g.right - R;
          break;
        default:
          _ = (v - R) / 2;
          break;
      }
      switch (n.vertical) {
        case "top":
          N = g.top;
          break;
        case "bottom":
          N = m - g.bottom - T;
          break;
        default:
          N = (m - T) / 2;
          break;
      }
      return L.map((A) =>
        P({}, A, {
          positionX: A.positionX + _,
          positionY:
            A.positionY +
            N +
            (r === "row" ? M[A.rowIndex] / 2 : A.outerHeight / 2),
        })
      );
    }, [
      o,
      n.horizontal,
      n.vertical,
      w,
      p,
      r,
      x,
      S,
      c,
      g.left,
      g.right,
      g.top,
      g.bottom,
      v,
      m,
    ]);
  return t
    ? null
    : C.jsx(vC, {
        children: C.jsx(v8, {
          className: a.root,
          children: E.map(
            ({ id: b, label: k, color: R, positionX: T, positionY: $ }) =>
              C.jsxs(
                "g",
                {
                  className: a.series,
                  transform: `translate(${T} ${$})`,
                  children: [
                    C.jsx("rect", {
                      className: a.mark,
                      y: -l / 2,
                      width: s,
                      height: l,
                      fill: R,
                    }),
                    C.jsx($l, { style: p, text: k, x: s + u, y: 0 }),
                  ],
                },
                b
              )
          ),
        }),
      });
}
function w8(e) {
  var t;
  const n = Be({ props: P({}, y8, e), name: "MuiChartsLegend" }),
    { position: r, direction: o, hidden: i, slots: a, slotProps: s } = n,
    l = jr(),
    u = g8(P({}, n, { theme: l })),
    c = y.useContext(ii),
    d = y.useContext(Na),
    f = f8(d),
    h = (t = a == null ? void 0 : a.legend) != null ? t : b8,
    p = jt({
      elementType: h,
      externalSlotProps: s == null ? void 0 : s.legend,
      additionalProps: {
        position: r,
        direction: o,
        classes: u,
        drawingArea: c,
        series: d,
        hidden: i,
        seriesToDisplay: f,
      },
      ownerState: {},
    });
  return C.jsx(h, P({}, p));
}
function Cx(e) {
  return Rl(e) ? (t) => e(t) + e.bandwidth() / 2 : (t) => e(t);
}
function S8(e) {
  return Le("MuiChartsAxisHighlight", e);
}
Me("MuiChartsAxisHighlight", ["root"]);
const C8 = () => Ie({ root: ["root"] }, S8),
  Pu = le("path", {
    name: "MuiChartsAxisHighlight",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ ownerState: e, theme: t }) =>
    P(
      { pointerEvents: "none" },
      e.axisHighlight === "band" && {
        fill: t.palette.mode === "light" ? "gray" : "white",
        fillOpacity: 0.1,
      },
      e.axisHighlight === "line" && {
        strokeDasharray: "5 2",
        stroke: t.palette.mode === "light" ? "#000000" : "#ffffff",
      }
    )
  );
function k8(e) {
  const { x: t, y: n } = e,
    { xAxisIds: r, xAxis: o, yAxisIds: i, yAxis: a } = y.useContext(hr),
    s = C8(),
    l = r[0],
    u = i[0],
    c = o[l].scale,
    d = a[u].scale,
    { axis: f } = y.useContext(Oa),
    h = Cx(c),
    p = Cx(d);
  return C.jsxs(y.Fragment, {
    children: [
      t === "band" &&
        f.x !== null &&
        Rl(c) &&
        C.jsx(Pu, {
          d: `M ${c(f.x.value) - (c.step() - c.bandwidth()) / 2} ${
            d.range()[0]
          } l ${c.step()} 0 l 0 ${
            d.range()[1] - d.range()[0]
          } l ${-c.step()} 0 Z`,
          className: s.root,
          ownerState: { axisHighlight: "band" },
        }),
      n === "band" &&
        f.y !== null &&
        Rl(d) &&
        C.jsx(Pu, {
          d: `M ${c.range()[0]} ${
            d(f.y.value) - (d.step() - d.bandwidth()) / 2
          } l 0 ${d.step()} l ${
            c.range()[1] - c.range()[0]
          } 0 l 0 ${-d.step()} Z`,
          className: s.root,
          ownerState: { axisHighlight: "band" },
        }),
      t === "line" &&
        f.x !== null &&
        C.jsx(Pu, {
          d: `M ${h(f.x.value)} ${d.range()[0]} L ${h(f.x.value)} ${
            d.range()[1]
          }`,
          className: s.root,
          ownerState: { axisHighlight: "line" },
        }),
      n === "line" &&
        f.y !== null &&
        C.jsx(Pu, {
          d: `M ${c.range()[0]} ${p(f.y.value)} L ${c.range()[1]} ${p(
            f.y.value
          )}`,
          className: s.root,
          ownerState: { axisHighlight: "line" },
        }),
    ],
  });
}
function E8(e) {
  const { id: t, offset: n } = e,
    { left: r, top: o, width: i, height: a } = y.useContext(ii),
    s = P({ top: 0, right: 0, bottom: 0, left: 0 }, n);
  return C.jsx("clipPath", {
    id: t,
    children: C.jsx("rect", {
      x: r - s.left,
      y: o - s.top,
      width: i + s.left + s.right,
      height: a + s.top + s.bottom,
    }),
  });
}
const P8 = y.forwardRef(function (t, n) {
  const {
      xAxis: r,
      yAxis: o,
      series: i,
      width: a,
      height: s,
      margin: l,
      colors: u,
      dataset: c,
      sx: d,
      layout: f,
      tooltip: h,
      axisHighlight: p,
      legend: g,
      topAxis: w,
      leftAxis: v,
      rightAxis: m,
      bottomAxis: x,
      skipAnimation: S,
      children: E,
      slots: b,
      slotProps: k,
    } = t,
    T = `${dg()}-clip-path`,
    $ =
      f === "horizontal" ||
      (f === void 0 && i.some((_) => _.layout === "horizontal")),
    M = {
      scaleType: "band",
      data: Array.from(
        {
          length: Math.max(
            ...i.map((_) => {
              var N, A;
              return ((N = (A = _.data) != null ? A : c) != null ? N : [])
                .length;
            })
          ),
        },
        (_, N) => N
      ),
    },
    L = P({}, $ ? { y: "band" } : { x: "band" }, p);
  return C.jsxs(M6, {
    ref: n,
    series: i.map((_) =>
      P({ type: "bar" }, _, { layout: $ ? "horizontal" : "vertical" })
    ),
    width: a,
    height: s,
    margin: l,
    xAxis: r ?? ($ ? void 0 : [P({ id: El }, M)]),
    yAxis: o ?? ($ ? [P({ id: Pl }, M)] : void 0),
    colors: u,
    dataset: c,
    sx: d,
    disableAxisListener:
      (h == null ? void 0 : h.trigger) !== "axis" &&
      (p == null ? void 0 : p.x) === "none" &&
      (p == null ? void 0 : p.y) === "none",
    children: [
      C.jsx("g", {
        clipPath: `url(#${T})`,
        children: C.jsx(x6, { slots: b, slotProps: k, skipAnimation: S }),
      }),
      C.jsx(V6, {
        topAxis: w,
        leftAxis: v,
        rightAxis: m,
        bottomAxis: x,
        slots: b,
        slotProps: k,
      }),
      C.jsx(w8, P({}, g, { slots: b, slotProps: k })),
      C.jsx(k8, P({}, L)),
      C.jsx(n8, P({}, h, { slots: b, slotProps: k })),
      C.jsx(E8, { id: T }),
      E,
    ],
  });
});
function R8() {
  const [e, t] = y.useState([""]),
    [n, r] = y.useState([2]);
  return (
    y.useEffect(() => {
      async function o() {
        try {
          new FormData().append("grafica", "true");
          let a = await fa("/authors/librosdeautor", new FormData());
          if (a.ok) {
            const s = a.datos;
            let l = [],
              u = [];
            for (let { name: c, num: d } of s) u.push(d), l.push(c);
            t(l), r(u);
          } else alert("Hubo un error al obtener los datos de componentes");
        } catch {
          alert("No pudimos hacer la solicitud los datos de componentes");
        }
      }
      o();
    }, []),
    C.jsx(C.Fragment, {
      children: C.jsxs(cf, {
        fixed: !0,
        sx: { mt: 3, p: 5 },
        children: [
          C.jsx("h1", { children: "Gráfica" }),
          C.jsx(P8, {
            width: 500,
            height: 300,
            series: [{ data: n, label: "numLibro", id: "numLibroId" }],
            xAxis: [{ data: e, scaleType: "band" }],
          }),
        ],
      }),
    })
  );
}
const $8 = LR([
  {
    path: "/",
    element: C.jsx(BT, {}),
    errorElement: C.jsx(fi, {}),
    children: [
      {
        path: "altalibro",
        element: C.jsx(d4, {}),
        errorElement: C.jsx(fi, {}),
      },
      {
        path: "listadolibro",
        element: C.jsx(f4, {}),
        errorElement: C.jsx(fi, {}),
      },
      {
        path: "actualizarlibro",
        element: C.jsx(p4, {}),
        errorElement: C.jsx(fi, {}),
      },
      {
        path: "eliminarlibro",
        element: C.jsx(h4, {}),
        errorElement: C.jsx(fi, {}),
      },
      {
        path: "graficasautores",
        element: C.jsx(R8, {}),
        errorElement: C.jsx(fi, {}),
      },
    ],
  },
]);
Rp.createRoot(document.getElementById("root")).render(
  C.jsx(ee.StrictMode, { children: C.jsx(VR, { router: $8 }) })
);
