import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './lib/queryClient.js';
import { TanStackCustomersTable } from './components/TanStackCustomersTable.jsx';
import { TanStackInvoicesTable } from './components/TanStackInvoicesTable.jsx';

var ov = Object.defineProperty;
var lv = (n, e, r) => e in n ? ov(n, e, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: r
}) : n[e] = r;
var Tr = (n, e, r) => lv(n, typeof e != "symbol" ? e + "" : e, r);
function cv(n, e) {
  for (var r = 0; r < e.length; r++) {
    const i = e[r];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const l in i) {
        if (l !== "default" && !(l in n)) {
          const c = Object.getOwnPropertyDescriptor(i, l);
          if (c) {
            Object.defineProperty(n, l, c.get ? c : {
              enumerable: true,
              get: () => i[l]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
    value: "Module"
  }));
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) {
    return;
  }
  for (const l of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    i(l);
  }
  new MutationObserver(l => {
    for (const c of l) {
      if (c.type === "childList") {
        for (const d of c.addedNodes) {
          if (d.tagName === "LINK" && d.rel === "modulepreload") {
            i(d);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function r(l) {
    const c = {};
    if (l.integrity) {
      c.integrity = l.integrity;
    }
    if (l.referrerPolicy) {
      c.referrerPolicy = l.referrerPolicy;
    }
    if (l.crossOrigin === "use-credentials") {
      c.credentials = "include";
    } else if (l.crossOrigin === "anonymous") {
      c.credentials = "omit";
    } else {
      c.credentials = "same-origin";
    }
    return c;
  }
  function i(l) {
    if (l.ep) {
      return;
    }
    l.ep = true;
    const c = r(l);
    fetch(l.href, c);
  }
})();
function uv(n) {
  if (n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")) {
    return n.default;
  } else {
    return n;
  }
}
var Bc = {
  exports: {}
};
var Ua = {};
var zc = {
  exports: {}
};
var Re = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Nf;
function dv() {
  if (Nf) {
    return Re;
  }
  Nf = 1;
  var n = Symbol.for("react.element");
  var e = Symbol.for("react.portal");
  var r = Symbol.for("react.fragment");
  var i = Symbol.for("react.strict_mode");
  var l = Symbol.for("react.profiler");
  var c = Symbol.for("react.provider");
  var d = Symbol.for("react.context");
  var h = Symbol.for("react.forward_ref");
  var m = Symbol.for("react.suspense");
  var g = Symbol.for("react.memo");
  var w = Symbol.for("react.lazy");
  var y = Symbol.iterator;
  function _(T) {
    if (T === null || typeof T != "object") {
      return null;
    } else {
      T = y && T[y] || T["@@iterator"];
      if (typeof T == "function") {
        return T;
      } else {
        return null;
      }
    }
  }
  var v = {
    isMounted: function () {
      return false;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  };
  var j = Object.assign;
  var b = {};
  function C(T, V, U) {
    this.props = T;
    this.context = V;
    this.refs = b;
    this.updater = U || v;
  }
  C.prototype.isReactComponent = {};
  C.prototype.setState = function (T, V) {
    if (typeof T != "object" && typeof T != "function" && T != null) {
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    }
    this.updater.enqueueSetState(this, T, V, "setState");
  };
  C.prototype.forceUpdate = function (T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function O() {}
  O.prototype = C.prototype;
  function L(T, V, U) {
    this.props = T;
    this.context = V;
    this.refs = b;
    this.updater = U || v;
  }
  var R = L.prototype = new O();
  R.constructor = L;
  j(R, C.prototype);
  R.isPureReactComponent = true;
  var W = Array.isArray;
  var I = Object.prototype.hasOwnProperty;
  var z = {
    current: null
  };
  var X = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function le(T, V, U) {
    var ie;
    var me = {};
    var A = null;
    var oe = null;
    if (V != null) {
      if (V.ref !== undefined) {
        oe = V.ref;
      }
      if (V.key !== undefined) {
        A = "" + V.key;
      }
      for (ie in V) {
        if (I.call(V, ie) && !X.hasOwnProperty(ie)) {
          me[ie] = V[ie];
        }
      }
    }
    var we = arguments.length - 2;
    if (we === 1) {
      me.children = U;
    } else if (we > 1) {
      var Ee = Array(we);
      for (var Oe = 0; Oe < we; Oe++) {
        Ee[Oe] = arguments[Oe + 2];
      }
      me.children = Ee;
    }
    if (T && T.defaultProps) {
      we = T.defaultProps;
      for (ie in we) {
        if (me[ie] === undefined) {
          me[ie] = we[ie];
        }
      }
    }
    return {
      $$typeof: n,
      type: T,
      key: A,
      ref: oe,
      props: me,
      _owner: z.current
    };
  }
  function G(T, V) {
    return {
      $$typeof: n,
      type: T.type,
      key: V,
      ref: T.ref,
      props: T.props,
      _owner: T._owner
    };
  }
  function B(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function re(T) {
    var V = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + T.replace(/[=:]/g, function (U) {
      return V[U];
    });
  }
  var be = /\/+/g;
  function q(T, V) {
    if (typeof T == "object" && T !== null && T.key != null) {
      return re("" + T.key);
    } else {
      return V.toString(36);
    }
  }
  function ge(T, V, U, ie, me) {
    var A = typeof T;
    if (A === "undefined" || A === "boolean") {
      T = null;
    }
    var oe = false;
    if (T === null) {
      oe = true;
    } else {
      switch (A) {
        case "string":
        case "number":
          oe = true;
          break;
        case "object":
          switch (T.$$typeof) {
            case n:
            case e:
              oe = true;
          }
      }
    }
    if (oe) {
      oe = T;
      me = me(oe);
      T = ie === "" ? "." + q(oe, 0) : ie;
      if (W(me)) {
        U = "";
        if (T != null) {
          U = T.replace(be, "$&/") + "/";
        }
        ge(me, V, U, "", function (Oe) {
          return Oe;
        });
      } else if (me != null) {
        if (B(me)) {
          me = G(me, U + (!me.key || oe && oe.key === me.key ? "" : ("" + me.key).replace(be, "$&/") + "/") + T);
        }
        V.push(me);
      }
      return 1;
    }
    oe = 0;
    ie = ie === "" ? "." : ie + ":";
    if (W(T)) {
      for (var we = 0; we < T.length; we++) {
        A = T[we];
        var Ee = ie + q(A, we);
        oe += ge(A, V, U, Ee, me);
      }
    } else {
      Ee = _(T);
      if (typeof Ee == "function") {
        T = Ee.call(T);
        we = 0;
        while (!(A = T.next()).done) {
          A = A.value;
          Ee = ie + q(A, we++);
          oe += ge(A, V, U, Ee, me);
        }
      } else if (A === "object") {
        V = String(T);
        throw Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
      }
    }
    return oe;
  }
  function _e(T, V, U) {
    if (T == null) {
      return T;
    }
    var ie = [];
    var me = 0;
    ge(T, ie, "", "", function (A) {
      return V.call(U, A, me++);
    });
    return ie;
  }
  function K(T) {
    if (T._status === -1) {
      var V = T._result;
      V = V();
      V.then(function (U) {
        if (T._status === 0 || T._status === -1) {
          T._status = 1;
          T._result = U;
        }
      }, function (U) {
        if (T._status === 0 || T._status === -1) {
          T._status = 2;
          T._result = U;
        }
      });
      if (T._status === -1) {
        T._status = 0;
        T._result = V;
      }
    }
    if (T._status === 1) {
      return T._result.default;
    }
    throw T._result;
  }
  var D = {
    current: null
  };
  var H = {
    transition: null
  };
  var se = {
    ReactCurrentDispatcher: D,
    ReactCurrentBatchConfig: H,
    ReactCurrentOwner: z
  };
  function te() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  Re.Children = {
    map: _e,
    forEach: function (T, V, U) {
      _e(T, function () {
        V.apply(this, arguments);
      }, U);
    },
    count: function (T) {
      var V = 0;
      _e(T, function () {
        V++;
      });
      return V;
    },
    toArray: function (T) {
      return _e(T, function (V) {
        return V;
      }) || [];
    },
    only: function (T) {
      if (!B(T)) {
        throw Error("React.Children.only expected to receive a single React element child.");
      }
      return T;
    }
  };
  Re.Component = C;
  Re.Fragment = r;
  Re.Profiler = l;
  Re.PureComponent = L;
  Re.StrictMode = i;
  Re.Suspense = m;
  Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se;
  Re.act = te;
  Re.cloneElement = function (T, V, U) {
    if (T == null) {
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    }
    var ie = j({}, T.props);
    var me = T.key;
    var A = T.ref;
    var oe = T._owner;
    if (V != null) {
      if (V.ref !== undefined) {
        A = V.ref;
        oe = z.current;
      }
      if (V.key !== undefined) {
        me = "" + V.key;
      }
      if (T.type && T.type.defaultProps) {
        var we = T.type.defaultProps;
      }
      for (Ee in V) {
        if (I.call(V, Ee) && !X.hasOwnProperty(Ee)) {
          ie[Ee] = V[Ee] === undefined && we !== undefined ? we[Ee] : V[Ee];
        }
      }
    }
    var Ee = arguments.length - 2;
    if (Ee === 1) {
      ie.children = U;
    } else if (Ee > 1) {
      we = Array(Ee);
      for (var Oe = 0; Oe < Ee; Oe++) {
        we[Oe] = arguments[Oe + 2];
      }
      ie.children = we;
    }
    return {
      $$typeof: n,
      type: T.type,
      key: me,
      ref: A,
      props: ie,
      _owner: oe
    };
  };
  Re.createContext = function (T) {
    T = {
      $$typeof: d,
      _currentValue: T,
      _currentValue2: T,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    };
    T.Provider = {
      $$typeof: c,
      _context: T
    };
    return T.Consumer = T;
  };
  Re.createElement = le;
  Re.createFactory = function (T) {
    var V = le.bind(null, T);
    V.type = T;
    return V;
  };
  Re.createRef = function () {
    return {
      current: null
    };
  };
  Re.forwardRef = function (T) {
    return {
      $$typeof: h,
      render: T
    };
  };
  Re.isValidElement = B;
  Re.lazy = function (T) {
    return {
      $$typeof: w,
      _payload: {
        _status: -1,
        _result: T
      },
      _init: K
    };
  };
  Re.memo = function (T, V) {
    return {
      $$typeof: g,
      type: T,
      compare: V === undefined ? null : V
    };
  };
  Re.startTransition = function (T) {
    var V = H.transition;
    H.transition = {};
    try {
      T();
    } finally {
      H.transition = V;
    }
  };
  Re.unstable_act = te;
  Re.useCallback = function (T, V) {
    return D.current.useCallback(T, V);
  };
  Re.useContext = function (T) {
    return D.current.useContext(T);
  };
  Re.useDebugValue = function () {};
  Re.useDeferredValue = function (T) {
    return D.current.useDeferredValue(T);
  };
  Re.useEffect = function (T, V) {
    return D.current.useEffect(T, V);
  };
  Re.useId = function () {
    return D.current.useId();
  };
  Re.useImperativeHandle = function (T, V, U) {
    return D.current.useImperativeHandle(T, V, U);
  };
  Re.useInsertionEffect = function (T, V) {
    return D.current.useInsertionEffect(T, V);
  };
  Re.useLayoutEffect = function (T, V) {
    return D.current.useLayoutEffect(T, V);
  };
  Re.useMemo = function (T, V) {
    return D.current.useMemo(T, V);
  };
  Re.useReducer = function (T, V, U) {
    return D.current.useReducer(T, V, U);
  };
  Re.useRef = function (T) {
    return D.current.useRef(T);
  };
  Re.useState = function (T) {
    return D.current.useState(T);
  };
  Re.useSyncExternalStore = function (T, V, U) {
    return D.current.useSyncExternalStore(T, V, U);
  };
  Re.useTransition = function () {
    return D.current.useTransition();
  };
  Re.version = "18.3.1";
  return Re;
}
var Tf;
function Tu() {
  if (!Tf) {
    Tf = 1;
    zc.exports = dv();
  }
  return zc.exports;
} /**
  * @license React
  * react-jsx-runtime.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
var Rf;
function hv() {
  if (Rf) {
    return Ua;
  }
  Rf = 1;
  var n = Tu();
  var e = Symbol.for("react.element");
  var r = Symbol.for("react.fragment");
  var i = Object.prototype.hasOwnProperty;
  var l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  var c = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function d(h, m, g) {
    var w;
    var y = {};
    var _ = null;
    var v = null;
    if (g !== undefined) {
      _ = "" + g;
    }
    if (m.key !== undefined) {
      _ = "" + m.key;
    }
    if (m.ref !== undefined) {
      v = m.ref;
    }
    for (w in m) {
      if (i.call(m, w) && !c.hasOwnProperty(w)) {
        y[w] = m[w];
      }
    }
    if (h && h.defaultProps) {
      m = h.defaultProps;
      for (w in m) {
        if (y[w] === undefined) {
          y[w] = m[w];
        }
      }
    }
    return {
      $$typeof: e,
      type: h,
      key: _,
      ref: v,
      props: y,
      _owner: l.current
    };
  }
  Ua.Fragment = r;
  Ua.jsx = d;
  Ua.jsxs = d;
  return Ua;
}
var If;
function fv() {
  if (!If) {
    If = 1;
    Bc.exports = hv();
  }
  return Bc.exports;
}
var a = fv();
var k = React;
const mv = uv(k);
const pv = cv({
  __proto__: null,
  default: mv
}, [k]);
var _o = {};
var Wc = {
  exports: {}
};
var $t = {};
var qc = {
  exports: {}
};
var Hc = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Af;
function gv() {
  if (!Af) {
    Af = 1;
    (function (n) {
      function e(H, se) {
        var te = H.length;
        H.push(se);
        e: while (te > 0) {
          var T = te - 1 >>> 1;
          var V = H[T];
          if (l(V, se) > 0) {
            H[T] = se;
            H[te] = V;
            te = T;
          } else {
            break e;
          }
        }
      }
      function r(H) {
        if (H.length === 0) {
          return null;
        } else {
          return H[0];
        }
      }
      function i(H) {
        if (H.length === 0) {
          return null;
        }
        var se = H[0];
        var te = H.pop();
        if (te !== se) {
          H[0] = te;
          e: for (var T = 0, V = H.length, U = V >>> 1; T < U;) {
            var ie = (T + 1) * 2 - 1;
            var me = H[ie];
            var A = ie + 1;
            var oe = H[A];
            if (l(me, te) < 0) {
              if (A < V && l(oe, me) < 0) {
                H[T] = oe;
                H[A] = te;
                T = A;
              } else {
                H[T] = me;
                H[ie] = te;
                T = ie;
              }
            } else if (A < V && l(oe, te) < 0) {
              H[T] = oe;
              H[A] = te;
              T = A;
            } else {
              break e;
            }
          }
        }
        return se;
      }
      function l(H, se) {
        var te = H.sortIndex - se.sortIndex;
        if (te !== 0) {
          return te;
        } else {
          return H.id - se.id;
        }
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var c = performance;
        n.unstable_now = function () {
          return c.now();
        };
      } else {
        var d = Date;
        var h = d.now();
        n.unstable_now = function () {
          return d.now() - h;
        };
      }
      var m = [];
      var g = [];
      var w = 1;
      var y = null;
      var _ = 3;
      var v = false;
      var j = false;
      var b = false;
      var C = typeof setTimeout == "function" ? setTimeout : null;
      var O = typeof clearTimeout == "function" ? clearTimeout : null;
      var L = typeof setImmediate !== "undefined" ? setImmediate : null;
      if (typeof navigator !== "undefined" && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      }
      function R(H) {
        for (var se = r(g); se !== null;) {
          if (se.callback === null) {
            i(g);
          } else if (se.startTime <= H) {
            i(g);
            se.sortIndex = se.expirationTime;
            e(m, se);
          } else {
            break;
          }
          se = r(g);
        }
      }
      function W(H) {
        b = false;
        R(H);
        if (!j) {
          if (r(m) !== null) {
            j = true;
            K(I);
          } else {
            var se = r(g);
            if (se !== null) {
              D(W, se.startTime - H);
            }
          }
        }
      }
      function I(H, se) {
        j = false;
        if (b) {
          b = false;
          O(le);
          le = -1;
        }
        v = true;
        var te = _;
        try {
          R(se);
          y = r(m);
          while (y !== null && (!(y.expirationTime > se) || H && !re())) {
            var T = y.callback;
            if (typeof T == "function") {
              y.callback = null;
              _ = y.priorityLevel;
              var V = T(y.expirationTime <= se);
              se = n.unstable_now();
              if (typeof V == "function") {
                y.callback = V;
              } else if (y === r(m)) {
                i(m);
              }
              R(se);
            } else {
              i(m);
            }
            y = r(m);
          }
          if (y !== null) {
            var U = true;
          } else {
            var ie = r(g);
            if (ie !== null) {
              D(W, ie.startTime - se);
            }
            U = false;
          }
          return U;
        } finally {
          y = null;
          _ = te;
          v = false;
        }
      }
      var z = false;
      var X = null;
      var le = -1;
      var G = 5;
      var B = -1;
      function re() {
        return !(n.unstable_now() - B < G);
      }
      function be() {
        if (X !== null) {
          var H = n.unstable_now();
          B = H;
          var se = true;
          try {
            se = X(true, H);
          } finally {
            if (se) {
              q();
            } else {
              z = false;
              X = null;
            }
          }
        } else {
          z = false;
        }
      }
      var q;
      if (typeof L == "function") {
        q = function () {
          L(be);
        };
      } else if (typeof MessageChannel !== "undefined") {
        var ge = new MessageChannel();
        var _e = ge.port2;
        ge.port1.onmessage = be;
        q = function () {
          _e.postMessage(null);
        };
      } else {
        q = function () {
          C(be, 0);
        };
      }
      function K(H) {
        X = H;
        if (!z) {
          z = true;
          q();
        }
      }
      function D(H, se) {
        le = C(function () {
          H(n.unstable_now());
        }, se);
      }
      n.unstable_IdlePriority = 5;
      n.unstable_ImmediatePriority = 1;
      n.unstable_LowPriority = 4;
      n.unstable_NormalPriority = 3;
      n.unstable_Profiling = null;
      n.unstable_UserBlockingPriority = 2;
      n.unstable_cancelCallback = function (H) {
        H.callback = null;
      };
      n.unstable_continueExecution = function () {
        if (!j && !v) {
          j = true;
          K(I);
        }
      };
      n.unstable_forceFrameRate = function (H) {
        if (H < 0 || H > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        } else {
          G = H > 0 ? Math.floor(1000 / H) : 5;
        }
      };
      n.unstable_getCurrentPriorityLevel = function () {
        return _;
      };
      n.unstable_getFirstCallbackNode = function () {
        return r(m);
      };
      n.unstable_next = function (H) {
        switch (_) {
          case 1:
          case 2:
          case 3:
            var se = 3;
            break;
          default:
            se = _;
        }
        var te = _;
        _ = se;
        try {
          return H();
        } finally {
          _ = te;
        }
      };
      n.unstable_pauseExecution = function () {};
      n.unstable_requestPaint = function () {};
      n.unstable_runWithPriority = function (H, se) {
        switch (H) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            H = 3;
        }
        var te = _;
        _ = H;
        try {
          return se();
        } finally {
          _ = te;
        }
      };
      n.unstable_scheduleCallback = function (H, se, te) {
        var T = n.unstable_now();
        if (typeof te == "object" && te !== null) {
          te = te.delay;
          te = typeof te == "number" && te > 0 ? T + te : T;
        } else {
          te = T;
        }
        switch (H) {
          case 1:
            var V = -1;
            break;
          case 2:
            V = 250;
            break;
          case 5:
            V = 1073741823;
            break;
          case 4:
            V = 10000;
            break;
          default:
            V = 5000;
        }
        V = te + V;
        H = {
          id: w++,
          callback: se,
          priorityLevel: H,
          startTime: te,
          expirationTime: V,
          sortIndex: -1
        };
        if (te > T) {
          H.sortIndex = te;
          e(g, H);
          if (r(m) === null && H === r(g)) {
            if (b) {
              O(le);
              le = -1;
            } else {
              b = true;
            }
            D(W, te - T);
          }
        } else {
          H.sortIndex = V;
          e(m, H);
          if (!j && !v) {
            j = true;
            K(I);
          }
        }
        return H;
      };
      n.unstable_shouldYield = re;
      n.unstable_wrapCallback = function (H) {
        var se = _;
        return function () {
          var te = _;
          _ = se;
          try {
            return H.apply(this, arguments);
          } finally {
            _ = te;
          }
        };
      };
    })(Hc);
  }
  return Hc;
}
var Pf;
function vv() {
  if (!Pf) {
    Pf = 1;
    qc.exports = gv();
  }
  return qc.exports;
} /**
  * @license React
  * react-dom.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
var Of;
function yv() {
  if (Of) {
    return $t;
  }
  Of = 1;
  var n = Tu();
  var e = vv();
  function r(t) {
    var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + t;
    for (var o = 1; o < arguments.length; o++) {
      s += "&args[]=" + encodeURIComponent(arguments[o]);
    }
    return "Minified React error #" + t + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var i = new Set();
  var l = {};
  function c(t, s) {
    d(t, s);
    d(t + "Capture", s);
  }
  function d(t, s) {
    l[t] = s;
    t = 0;
    for (; t < s.length; t++) {
      i.add(s[t]);
    }
  }
  var h = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  var m = Object.prototype.hasOwnProperty;
  var g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  var w = {};
  var y = {};
  function _(t) {
    if (m.call(y, t)) {
      return true;
    } else if (m.call(w, t)) {
      return false;
    } else if (g.test(t)) {
      return y[t] = true;
    } else {
      w[t] = true;
      return false;
    }
  }
  function v(t, s, o, u) {
    if (o !== null && o.type === 0) {
      return false;
    }
    switch (typeof s) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (u) {
          return false;
        } else if (o !== null) {
          return !o.acceptsBooleans;
        } else {
          t = t.toLowerCase().slice(0, 5);
          return t !== "data-" && t !== "aria-";
        }
      default:
        return false;
    }
  }
  function j(t, s, o, u) {
    if (s === null || typeof s === "undefined" || v(t, s, o, u)) {
      return true;
    }
    if (u) {
      return false;
    }
    if (o !== null) {
      switch (o.type) {
        case 3:
          return !s;
        case 4:
          return s === false;
        case 5:
          return isNaN(s);
        case 6:
          return isNaN(s) || s < 1;
      }
    }
    return false;
  }
  function b(t, s, o, u, f, p, x) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4;
    this.attributeName = u;
    this.attributeNamespace = f;
    this.mustUseProperty = o;
    this.propertyName = t;
    this.type = s;
    this.sanitizeURL = p;
    this.removeEmptyString = x;
  }
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (t) {
    C[t] = new b(t, 0, false, t, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (t) {
    var s = t[0];
    C[s] = new b(s, 1, false, t[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
    C[t] = new b(t, 2, false, t.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (t) {
    C[t] = new b(t, 2, false, t, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (t) {
    C[t] = new b(t, 3, false, t.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function (t) {
    C[t] = new b(t, 3, true, t, null, false, false);
  });
  ["capture", "download"].forEach(function (t) {
    C[t] = new b(t, 4, false, t, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function (t) {
    C[t] = new b(t, 6, false, t, null, false, false);
  });
  ["rowSpan", "start"].forEach(function (t) {
    C[t] = new b(t, 5, false, t.toLowerCase(), null, false, false);
  });
  var O = /[\-:]([a-z])/g;
  function L(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (t) {
    var s = t.replace(O, L);
    C[s] = new b(s, 1, false, t, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (t) {
    var s = t.replace(O, L);
    C[s] = new b(s, 1, false, t, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
    var s = t.replace(O, L);
    C[s] = new b(s, 1, false, t, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function (t) {
    C[t] = new b(t, 1, false, t.toLowerCase(), null, false, false);
  });
  C.xlinkHref = new b("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function (t) {
    C[t] = new b(t, 1, false, t.toLowerCase(), null, true, true);
  });
  function R(t, s, o, u) {
    var f = C.hasOwnProperty(s) ? C[s] : null;
    if (f !== null ? f.type !== 0 : u || !(s.length > 2) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") {
      if (j(s, o, f, u)) {
        o = null;
      }
      if (u || f === null) {
        if (_(s)) {
          if (o === null) {
            t.removeAttribute(s);
          } else {
            t.setAttribute(s, "" + o);
          }
        }
      } else if (f.mustUseProperty) {
        t[f.propertyName] = o === null ? f.type === 3 ? false : "" : o;
      } else {
        s = f.attributeName;
        u = f.attributeNamespace;
        if (o === null) {
          t.removeAttribute(s);
        } else {
          f = f.type;
          o = f === 3 || f === 4 && o === true ? "" : "" + o;
          if (u) {
            t.setAttributeNS(u, s, o);
          } else {
            t.setAttribute(s, o);
          }
        }
      }
    }
  }
  var W = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var I = Symbol.for("react.element");
  var z = Symbol.for("react.portal");
  var X = Symbol.for("react.fragment");
  var le = Symbol.for("react.strict_mode");
  var G = Symbol.for("react.profiler");
  var B = Symbol.for("react.provider");
  var re = Symbol.for("react.context");
  var be = Symbol.for("react.forward_ref");
  var q = Symbol.for("react.suspense");
  var ge = Symbol.for("react.suspense_list");
  var _e = Symbol.for("react.memo");
  var K = Symbol.for("react.lazy");
  var D = Symbol.for("react.offscreen");
  var H = Symbol.iterator;
  function se(t) {
    if (t === null || typeof t != "object") {
      return null;
    } else {
      t = H && t[H] || t["@@iterator"];
      if (typeof t == "function") {
        return t;
      } else {
        return null;
      }
    }
  }
  var te = Object.assign;
  var T;
  function V(t) {
    if (T === undefined) {
      try {
        throw Error();
      } catch (o) {
        var s = o.stack.trim().match(/\n( *(at )?)/);
        T = s && s[1] || "";
      }
    }
    return `
${T}${t}`;
  }
  var U = false;
  function ie(t, s) {
    if (!t || U) {
      return "";
    }
    U = true;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = undefined;
    try {
      if (s) {
        s = function () {
          throw Error();
        };
        Object.defineProperty(s.prototype, "props", {
          set: function () {
            throw Error();
          }
        });
        if (typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(s, []);
          } catch (M) {
            var u = M;
          }
          Reflect.construct(t, [], s);
        } else {
          try {
            s.call();
          } catch (M) {
            u = M;
          }
          t.call(s.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (M) {
          u = M;
        }
        t();
      }
    } catch (M) {
      if (M && u && typeof M.stack == "string") {
        for (var f = M.stack.split(`
`), p = u.stack.split(`
`), x = f.length - 1, S = p.length - 1; x >= 1 && S >= 0 && f[x] !== p[S];) {
          S--;
        }
        for (; x >= 1 && S >= 0; x--, S--) {
          if (f[x] !== p[S]) {
            if (x !== 1 || S !== 1) {
              do {
                x--;
                S--;
                if (S < 0 || f[x] !== p[S]) {
                  var E = `
${f[x].replace(" at new ", " at ")}`;
                  if (t.displayName && E.includes("<anonymous>")) {
                    E = E.replace("<anonymous>", t.displayName);
                  }
                  return E;
                }
              } while (x >= 1 && S >= 0);
            }
            break;
          }
        }
      }
    } finally {
      U = false;
      Error.prepareStackTrace = o;
    }
    if (t = t ? t.displayName || t.name : "") {
      return V(t);
    } else {
      return "";
    }
  }
  function me(t) {
    switch (t.tag) {
      case 5:
        return V(t.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        t = ie(t.type, false);
        return t;
      case 11:
        t = ie(t.type.render, false);
        return t;
      case 1:
        t = ie(t.type, true);
        return t;
      default:
        return "";
    }
  }
  function A(t) {
    if (t == null) {
      return null;
    }
    if (typeof t == "function") {
      return t.displayName || t.name || null;
    }
    if (typeof t == "string") {
      return t;
    }
    switch (t) {
      case X:
        return "Fragment";
      case z:
        return "Portal";
      case G:
        return "Profiler";
      case le:
        return "StrictMode";
      case q:
        return "Suspense";
      case ge:
        return "SuspenseList";
    }
    if (typeof t == "object") {
      switch (t.$$typeof) {
        case re:
          return (t.displayName || "Context") + ".Consumer";
        case B:
          return (t._context.displayName || "Context") + ".Provider";
        case be:
          var s = t.render;
          t = t.displayName;
          if (!t) {
            t = s.displayName || s.name || "";
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef";
          }
          return t;
        case _e:
          s = t.displayName || null;
          if (s !== null) {
            return s;
          } else {
            return A(t.type) || "Memo";
          }
        case K:
          s = t._payload;
          t = t._init;
          try {
            return A(t(s));
          } catch {}
      }
    }
    return null;
  }
  function oe(t) {
    var s = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (s.displayName || "Context") + ".Consumer";
      case 10:
        return (s._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        t = s.render;
        t = t.displayName || t.name || "";
        return s.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return s;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return A(s);
      case 8:
        if (s === le) {
          return "StrictMode";
        } else {
          return "Mode";
        }
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
        if (typeof s == "function") {
          return s.displayName || s.name || null;
        }
        if (typeof s == "string") {
          return s;
        }
    }
    return null;
  }
  function we(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Ee(t) {
    var s = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (s === "checkbox" || s === "radio");
  }
  function Oe(t) {
    var s = Ee(t) ? "checked" : "value";
    var o = Object.getOwnPropertyDescriptor(t.constructor.prototype, s);
    var u = "" + t[s];
    if (!t.hasOwnProperty(s) && typeof o !== "undefined" && typeof o.get == "function" && typeof o.set == "function") {
      var f = o.get;
      var p = o.set;
      Object.defineProperty(t, s, {
        configurable: true,
        get: function () {
          return f.call(this);
        },
        set: function (x) {
          u = "" + x;
          p.call(this, x);
        }
      });
      Object.defineProperty(t, s, {
        enumerable: o.enumerable
      });
      return {
        getValue: function () {
          return u;
        },
        setValue: function (x) {
          u = "" + x;
        },
        stopTracking: function () {
          t._valueTracker = null;
          delete t[s];
        }
      };
    }
  }
  function Gt(t) {
    t._valueTracker ||= Oe(t);
  }
  function ln(t) {
    if (!t) {
      return false;
    }
    var s = t._valueTracker;
    if (!s) {
      return true;
    }
    var o = s.getValue();
    var u = "";
    if (t) {
      u = Ee(t) ? t.checked ? "true" : "false" : t.value;
    }
    t = u;
    if (t !== o) {
      s.setValue(t);
      return true;
    } else {
      return false;
    }
  }
  function Ct(t) {
    t = t || (typeof document !== "undefined" ? document : undefined);
    if (typeof t === "undefined") {
      return null;
    }
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Ln(t, s) {
    var o = s.checked;
    return te({}, s, {
      defaultChecked: undefined,
      defaultValue: undefined,
      value: undefined,
      checked: o ?? t._wrapperState.initialChecked
    });
  }
  function Et(t, s) {
    var o = s.defaultValue == null ? "" : s.defaultValue;
    var u = s.checked ?? s.defaultChecked;
    o = we(s.value ?? o);
    t._wrapperState = {
      initialChecked: u,
      initialValue: o,
      controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
    };
  }
  function kn(t, s) {
    s = s.checked;
    if (s != null) {
      R(t, "checked", s, false);
    }
  }
  function Dn(t, s) {
    kn(t, s);
    var o = we(s.value);
    var u = s.type;
    if (o != null) {
      if (u === "number") {
        if (o === 0 && t.value === "" || t.value != o) {
          t.value = "" + o;
        }
      } else if (t.value !== "" + o) {
        t.value = "" + o;
      }
    } else if (u === "submit" || u === "reset") {
      t.removeAttribute("value");
      return;
    }
    if (s.hasOwnProperty("value")) {
      ar(t, s.type, o);
    } else if (s.hasOwnProperty("defaultValue")) {
      ar(t, s.type, we(s.defaultValue));
    }
    if (s.checked == null && s.defaultChecked != null) {
      t.defaultChecked = !!s.defaultChecked;
    }
  }
  function cn(t, s, o) {
    if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
      var u = s.type;
      if ((u === "submit" || u === "reset") && (s.value === undefined || s.value === null)) {
        return;
      }
      s = "" + t._wrapperState.initialValue;
      if (!o && s !== t.value) {
        t.value = s;
      }
      t.defaultValue = s;
    }
    o = t.name;
    if (o !== "") {
      t.name = "";
    }
    t.defaultChecked = !!t._wrapperState.initialChecked;
    if (o !== "") {
      t.name = o;
    }
  }
  function ar(t, s, o) {
    if (s !== "number" || Ct(t.ownerDocument) !== t) {
      if (o == null) {
        t.defaultValue = "" + t._wrapperState.initialValue;
      } else if (t.defaultValue !== "" + o) {
        t.defaultValue = "" + o;
      }
    }
  }
  var Jt = Array.isArray;
  function un(t, s, o, u) {
    t = t.options;
    if (s) {
      s = {};
      for (var f = 0; f < o.length; f++) {
        s["$" + o[f]] = true;
      }
      for (o = 0; o < t.length; o++) {
        f = s.hasOwnProperty("$" + t[o].value);
        if (t[o].selected !== f) {
          t[o].selected = f;
        }
        if (f && u) {
          t[o].defaultSelected = true;
        }
      }
    } else {
      o = "" + we(o);
      s = null;
      f = 0;
      for (; f < t.length; f++) {
        if (t[f].value === o) {
          t[f].selected = true;
          if (u) {
            t[f].defaultSelected = true;
          }
          return;
        }
        if (s === null && !t[f].disabled) {
          s = t[f];
        }
      }
      if (s !== null) {
        s.selected = true;
      }
    }
  }
  function dn(t, s) {
    if (s.dangerouslySetInnerHTML != null) {
      throw Error(r(91));
    }
    return te({}, s, {
      value: undefined,
      defaultValue: undefined,
      children: "" + t._wrapperState.initialValue
    });
  }
  function F(t, s) {
    var o = s.value;
    if (o == null) {
      o = s.children;
      s = s.defaultValue;
      if (o != null) {
        if (s != null) {
          throw Error(r(92));
        }
        if (Jt(o)) {
          if (o.length > 1) {
            throw Error(r(93));
          }
          o = o[0];
        }
        s = o;
      }
      if (s == null) {
        s = "";
      }
      o = s;
    }
    t._wrapperState = {
      initialValue: we(o)
    };
  }
  function ae(t, s) {
    var o = we(s.value);
    var u = we(s.defaultValue);
    if (o != null) {
      o = "" + o;
      if (o !== t.value) {
        t.value = o;
      }
      if (s.defaultValue == null && t.defaultValue !== o) {
        t.defaultValue = o;
      }
    }
    if (u != null) {
      t.defaultValue = "" + u;
    }
  }
  function he(t) {
    var s = t.textContent;
    if (s === t._wrapperState.initialValue && s !== "" && s !== null) {
      t.value = s;
    }
  }
  function ye(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fe(t, s) {
    if (t == null || t === "http://www.w3.org/1999/xhtml") {
      return ye(s);
    } else if (t === "http://www.w3.org/2000/svg" && s === "foreignObject") {
      return "http://www.w3.org/1999/xhtml";
    } else {
      return t;
    }
  }
  var Y;
  var Ke = function (t) {
    if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) {
      return function (s, o, u, f) {
        MSApp.execUnsafeLocalFunction(function () {
          return t(s, o, u, f);
        });
      };
    } else {
      return t;
    }
  }(function (t, s) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) {
      t.innerHTML = s;
    } else {
      Y = Y || document.createElement("div");
      Y.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>";
      s = Y.firstChild;
      while (t.firstChild) {
        t.removeChild(t.firstChild);
      }
      while (s.firstChild) {
        t.appendChild(s.firstChild);
      }
    }
  });
  function Pe(t, s) {
    if (s) {
      var o = t.firstChild;
      if (o && o === t.lastChild && o.nodeType === 3) {
        o.nodeValue = s;
        return;
      }
    }
    t.textContent = s;
  }
  var Be = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  var ot = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Be).forEach(function (t) {
    ot.forEach(function (s) {
      s = s + t.charAt(0).toUpperCase() + t.substring(1);
      Be[s] = Be[t];
    });
  });
  function Br(t, s, o) {
    if (s == null || typeof s == "boolean" || s === "") {
      return "";
    } else if (o || typeof s != "number" || s === 0 || Be.hasOwnProperty(t) && Be[t]) {
      return ("" + s).trim();
    } else {
      return s + "px";
    }
  }
  function ir(t, s) {
    t = t.style;
    for (var o in s) {
      if (s.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0;
        var f = Br(o, s[o], u);
        if (o === "float") {
          o = "cssFloat";
        }
        if (u) {
          t.setProperty(o, f);
        } else {
          t[o] = f;
        }
      }
    }
  }
  var di = te({
    menuitem: true
  }, {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  });
  function Qt(t, s) {
    if (s) {
      if (di[t] && (s.children != null || s.dangerouslySetInnerHTML != null)) {
        throw Error(r(137, t));
      }
      if (s.dangerouslySetInnerHTML != null) {
        if (s.children != null) {
          throw Error(r(60));
        }
        if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) {
          throw Error(r(61));
        }
      }
      if (s.style != null && typeof s.style != "object") {
        throw Error(r(62));
      }
    }
  }
  function ms(t, s) {
    if (t.indexOf("-") === -1) {
      return typeof s.is == "string";
    }
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var or = null;
  function lr(t) {
    t = t.target || t.srcElement || window;
    if (t.correspondingUseElement) {
      t = t.correspondingUseElement;
    }
    if (t.nodeType === 3) {
      return t.parentNode;
    } else {
      return t;
    }
  }
  var ps = null;
  var cr = null;
  var Mn = null;
  function hi(t) {
    if (t = ba(t)) {
      if (typeof ps != "function") {
        throw Error(r(280));
      }
      var s = t.stateNode;
      if (s) {
        s = $i(s);
        ps(t.stateNode, t.type, s);
      }
    }
  }
  function Hu(t) {
    if (cr) {
      if (Mn) {
        Mn.push(t);
      } else {
        Mn = [t];
      }
    } else {
      cr = t;
    }
  }
  function Vu() {
    if (cr) {
      var t = cr;
      var s = Mn;
      Mn = cr = null;
      hi(t);
      if (s) {
        for (t = 0; t < s.length; t++) {
          hi(s[t]);
        }
      }
    }
  }
  function Ku(t, s) {
    return t(s);
  }
  function Gu() {}
  var sl = false;
  function Ju(t, s, o) {
    if (sl) {
      return t(s, o);
    }
    sl = true;
    try {
      return Ku(t, s, o);
    } finally {
      sl = false;
      if (cr !== null || Mn !== null) {
        Gu();
        Vu();
      }
    }
  }
  function ra(t, s) {
    var o = t.stateNode;
    if (o === null) {
      return null;
    }
    var u = $i(o);
    if (u === null) {
      return null;
    }
    o = u[s];
    e: switch (s) {
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
        if (!(u = !u.disabled)) {
          t = t.type;
          u = t !== "button" && t !== "input" && t !== "select" && t !== "textarea";
        }
        t = !u;
        break e;
      default:
        t = false;
    }
    if (t) {
      return null;
    }
    if (o && typeof o != "function") {
      throw Error(r(231, s, typeof o));
    }
    return o;
  }
  var al = false;
  if (h) {
    try {
      var sa = {};
      Object.defineProperty(sa, "passive", {
        get: function () {
          al = true;
        }
      });
      window.addEventListener("test", sa, sa);
      window.removeEventListener("test", sa, sa);
    } catch {
      al = false;
    }
  }
  function fg(t, s, o, u, f, p, x, S, E) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      s.apply(o, M);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var aa = false;
  var fi = null;
  var mi = false;
  var il = null;
  var mg = {
    onError: function (t) {
      aa = true;
      fi = t;
    }
  };
  function pg(t, s, o, u, f, p, x, S, E) {
    aa = false;
    fi = null;
    fg.apply(mg, arguments);
  }
  function gg(t, s, o, u, f, p, x, S, E) {
    pg.apply(this, arguments);
    if (aa) {
      if (aa) {
        var M = fi;
        aa = false;
        fi = null;
      } else {
        throw Error(r(198));
      }
      if (!mi) {
        mi = true;
        il = M;
      }
    }
  }
  function zr(t) {
    var s = t;
    var o = t;
    if (t.alternate) {
      while (s.return) {
        s = s.return;
      }
    } else {
      t = s;
      do {
        s = t;
        if ((s.flags & 4098) !== 0) {
          o = s.return;
        }
        t = s.return;
      } while (t);
    }
    if (s.tag === 3) {
      return o;
    } else {
      return null;
    }
  }
  function Qu(t) {
    if (t.tag === 13) {
      var s = t.memoizedState;
      if (s === null) {
        t = t.alternate;
        if (t !== null) {
          s = t.memoizedState;
        }
      }
      if (s !== null) {
        return s.dehydrated;
      }
    }
    return null;
  }
  function Yu(t) {
    if (zr(t) !== t) {
      throw Error(r(188));
    }
  }
  function vg(t) {
    var s = t.alternate;
    if (!s) {
      s = zr(t);
      if (s === null) {
        throw Error(r(188));
      }
      if (s !== t) {
        return null;
      } else {
        return t;
      }
    }
    var o = t;
    var u = s;
    while (true) {
      var f = o.return;
      if (f === null) {
        break;
      }
      var p = f.alternate;
      if (p === null) {
        u = f.return;
        if (u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p;) {
          if (p === o) {
            Yu(f);
            return t;
          }
          if (p === u) {
            Yu(f);
            return s;
          }
          p = p.sibling;
        }
        throw Error(r(188));
      }
      if (o.return !== u.return) {
        o = f;
        u = p;
      } else {
        var x = false;
        for (var S = f.child; S;) {
          if (S === o) {
            x = true;
            o = f;
            u = p;
            break;
          }
          if (S === u) {
            x = true;
            u = f;
            o = p;
            break;
          }
          S = S.sibling;
        }
        if (!x) {
          for (S = p.child; S;) {
            if (S === o) {
              x = true;
              o = p;
              u = f;
              break;
            }
            if (S === u) {
              x = true;
              u = p;
              o = f;
              break;
            }
            S = S.sibling;
          }
          if (!x) {
            throw Error(r(189));
          }
        }
      }
      if (o.alternate !== u) {
        throw Error(r(190));
      }
    }
    if (o.tag !== 3) {
      throw Error(r(188));
    }
    if (o.stateNode.current === o) {
      return t;
    } else {
      return s;
    }
  }
  function Xu(t) {
    t = vg(t);
    if (t !== null) {
      return Zu(t);
    } else {
      return null;
    }
  }
  function Zu(t) {
    if (t.tag === 5 || t.tag === 6) {
      return t;
    }
    for (t = t.child; t !== null;) {
      var s = Zu(t);
      if (s !== null) {
        return s;
      }
      t = t.sibling;
    }
    return null;
  }
  var ed = e.unstable_scheduleCallback;
  var td = e.unstable_cancelCallback;
  var yg = e.unstable_shouldYield;
  var wg = e.unstable_requestPaint;
  var nt = e.unstable_now;
  var xg = e.unstable_getCurrentPriorityLevel;
  var ol = e.unstable_ImmediatePriority;
  var nd = e.unstable_UserBlockingPriority;
  var pi = e.unstable_NormalPriority;
  var _g = e.unstable_LowPriority;
  var rd = e.unstable_IdlePriority;
  var gi = null;
  var bn = null;
  function jg(t) {
    if (bn && typeof bn.onCommitFiberRoot == "function") {
      try {
        bn.onCommitFiberRoot(gi, t, undefined, (t.current.flags & 128) === 128);
      } catch {}
    }
  }
  var hn = Math.clz32 ? Math.clz32 : Sg;
  var kg = Math.log;
  var bg = Math.LN2;
  function Sg(t) {
    t >>>= 0;
    if (t === 0) {
      return 32;
    } else {
      return 31 - (kg(t) / bg | 0) | 0;
    }
  }
  var vi = 64;
  var yi = 4194304;
  function ia(t) {
    switch (t & -t) {
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
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function wi(t, s) {
    var o = t.pendingLanes;
    if (o === 0) {
      return 0;
    }
    var u = 0;
    var f = t.suspendedLanes;
    var p = t.pingedLanes;
    var x = o & 268435455;
    if (x !== 0) {
      var S = x & ~f;
      if (S !== 0) {
        u = ia(S);
      } else {
        p &= x;
        if (p !== 0) {
          u = ia(p);
        }
      }
    } else {
      x = o & ~f;
      if (x !== 0) {
        u = ia(x);
      } else if (p !== 0) {
        u = ia(p);
      }
    }
    if (u === 0) {
      return 0;
    }
    if (s !== 0 && s !== u && (s & f) === 0 && (f = u & -u, p = s & -s, f >= p || f === 16 && (p & 4194240) !== 0)) {
      return s;
    }
    if ((u & 4) !== 0) {
      u |= o & 16;
    }
    s = t.entangledLanes;
    if (s !== 0) {
      t = t.entanglements;
      s &= u;
      while (s > 0) {
        o = 31 - hn(s);
        f = 1 << o;
        u |= t[o];
        s &= ~f;
      }
    }
    return u;
  }
  function Cg(t, s) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return s + 250;
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
        return s + 5000;
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
  function Eg(t, s) {
    var o = t.suspendedLanes;
    var u = t.pingedLanes;
    var f = t.expirationTimes;
    for (var p = t.pendingLanes; p > 0;) {
      var x = 31 - hn(p);
      var S = 1 << x;
      var E = f[x];
      if (E === -1) {
        if ((S & o) === 0 || (S & u) !== 0) {
          f[x] = Cg(S, s);
        }
      } else if (E <= s) {
        t.expiredLanes |= S;
      }
      p &= ~S;
    }
  }
  function ll(t) {
    t = t.pendingLanes & -1073741825;
    if (t !== 0) {
      return t;
    } else if (t & 1073741824) {
      return 1073741824;
    } else {
      return 0;
    }
  }
  function sd() {
    var t = vi;
    vi <<= 1;
    if ((vi & 4194240) === 0) {
      vi = 64;
    }
    return t;
  }
  function cl(t) {
    var s = [];
    for (var o = 0; o < 31; o++) {
      s.push(t);
    }
    return s;
  }
  function oa(t, s, o) {
    t.pendingLanes |= s;
    if (s !== 536870912) {
      t.suspendedLanes = 0;
      t.pingedLanes = 0;
    }
    t = t.eventTimes;
    s = 31 - hn(s);
    t[s] = o;
  }
  function Ng(t, s) {
    var o = t.pendingLanes & ~s;
    t.pendingLanes = s;
    t.suspendedLanes = 0;
    t.pingedLanes = 0;
    t.expiredLanes &= s;
    t.mutableReadLanes &= s;
    t.entangledLanes &= s;
    s = t.entanglements;
    var u = t.eventTimes;
    for (t = t.expirationTimes; o > 0;) {
      var f = 31 - hn(o);
      var p = 1 << f;
      s[f] = 0;
      u[f] = -1;
      t[f] = -1;
      o &= ~p;
    }
  }
  function ul(t, s) {
    var o = t.entangledLanes |= s;
    for (t = t.entanglements; o;) {
      var u = 31 - hn(o);
      var f = 1 << u;
      if (f & s | t[u] & s) {
        t[u] |= s;
      }
      o &= ~f;
    }
  }
  var Me = 0;
  function ad(t) {
    t &= -t;
    if (t > 1) {
      if (t > 4) {
        if ((t & 268435455) !== 0) {
          return 16;
        } else {
          return 536870912;
        }
      } else {
        return 4;
      }
    } else {
      return 1;
    }
  }
  var id;
  var dl;
  var od;
  var ld;
  var cd;
  var hl = false;
  var xi = [];
  var ur = null;
  var dr = null;
  var hr = null;
  var la = new Map();
  var ca = new Map();
  var fr = [];
  var Tg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ud(t, s) {
    switch (t) {
      case "focusin":
      case "focusout":
        ur = null;
        break;
      case "dragenter":
      case "dragleave":
        dr = null;
        break;
      case "mouseover":
      case "mouseout":
        hr = null;
        break;
      case "pointerover":
      case "pointerout":
        la.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ca.delete(s.pointerId);
    }
  }
  function ua(t, s, o, u, f, p) {
    if (t === null || t.nativeEvent !== p) {
      t = {
        blockedOn: s,
        domEventName: o,
        eventSystemFlags: u,
        nativeEvent: p,
        targetContainers: [f]
      };
      if (s !== null) {
        s = ba(s);
        if (s !== null) {
          dl(s);
        }
      }
      return t;
    } else {
      t.eventSystemFlags |= u;
      s = t.targetContainers;
      if (f !== null && s.indexOf(f) === -1) {
        s.push(f);
      }
      return t;
    }
  }
  function Rg(t, s, o, u, f) {
    switch (s) {
      case "focusin":
        ur = ua(ur, t, s, o, u, f);
        return true;
      case "dragenter":
        dr = ua(dr, t, s, o, u, f);
        return true;
      case "mouseover":
        hr = ua(hr, t, s, o, u, f);
        return true;
      case "pointerover":
        var p = f.pointerId;
        la.set(p, ua(la.get(p) || null, t, s, o, u, f));
        return true;
      case "gotpointercapture":
        p = f.pointerId;
        ca.set(p, ua(ca.get(p) || null, t, s, o, u, f));
        return true;
    }
    return false;
  }
  function dd(t) {
    var s = Wr(t.target);
    if (s !== null) {
      var o = zr(s);
      if (o !== null) {
        s = o.tag;
        if (s === 13) {
          s = Qu(o);
          if (s !== null) {
            t.blockedOn = s;
            cd(t.priority, function () {
              od(o);
            });
            return;
          }
        } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function _i(t) {
    if (t.blockedOn !== null) {
      return false;
    }
    for (var s = t.targetContainers; s.length > 0;) {
      var o = ml(t.domEventName, t.eventSystemFlags, s[0], t.nativeEvent);
      if (o === null) {
        o = t.nativeEvent;
        var u = new o.constructor(o.type, o);
        or = u;
        o.target.dispatchEvent(u);
        or = null;
      } else {
        s = ba(o);
        if (s !== null) {
          dl(s);
        }
        t.blockedOn = o;
        return false;
      }
      s.shift();
    }
    return true;
  }
  function hd(t, s, o) {
    if (_i(t)) {
      o.delete(s);
    }
  }
  function Ig() {
    hl = false;
    if (ur !== null && _i(ur)) {
      ur = null;
    }
    if (dr !== null && _i(dr)) {
      dr = null;
    }
    if (hr !== null && _i(hr)) {
      hr = null;
    }
    la.forEach(hd);
    ca.forEach(hd);
  }
  function da(t, s) {
    if (t.blockedOn === s) {
      t.blockedOn = null;
      if (!hl) {
        hl = true;
        e.unstable_scheduleCallback(e.unstable_NormalPriority, Ig);
      }
    }
  }
  function ha(t) {
    function s(f) {
      return da(f, t);
    }
    if (xi.length > 0) {
      da(xi[0], t);
      for (var o = 1; o < xi.length; o++) {
        var u = xi[o];
        if (u.blockedOn === t) {
          u.blockedOn = null;
        }
      }
    }
    if (ur !== null) {
      da(ur, t);
    }
    if (dr !== null) {
      da(dr, t);
    }
    if (hr !== null) {
      da(hr, t);
    }
    la.forEach(s);
    ca.forEach(s);
    o = 0;
    for (; o < fr.length; o++) {
      u = fr[o];
      if (u.blockedOn === t) {
        u.blockedOn = null;
      }
    }
    while (fr.length > 0 && (o = fr[0], o.blockedOn === null)) {
      dd(o);
      if (o.blockedOn === null) {
        fr.shift();
      }
    }
  }
  var gs = W.ReactCurrentBatchConfig;
  var ji = true;
  function Ag(t, s, o, u) {
    var f = Me;
    var p = gs.transition;
    gs.transition = null;
    try {
      Me = 1;
      fl(t, s, o, u);
    } finally {
      Me = f;
      gs.transition = p;
    }
  }
  function Pg(t, s, o, u) {
    var f = Me;
    var p = gs.transition;
    gs.transition = null;
    try {
      Me = 4;
      fl(t, s, o, u);
    } finally {
      Me = f;
      gs.transition = p;
    }
  }
  function fl(t, s, o, u) {
    if (ji) {
      var f = ml(t, s, o, u);
      if (f === null) {
        Il(t, s, u, ki, o);
        ud(t, u);
      } else if (Rg(f, t, s, o, u)) {
        u.stopPropagation();
      } else {
        ud(t, u);
        if (s & 4 && Tg.indexOf(t) > -1) {
          while (f !== null) {
            var p = ba(f);
            if (p !== null) {
              id(p);
            }
            p = ml(t, s, o, u);
            if (p === null) {
              Il(t, s, u, ki, o);
            }
            if (p === f) {
              break;
            }
            f = p;
          }
          if (f !== null) {
            u.stopPropagation();
          }
        } else {
          Il(t, s, u, null, o);
        }
      }
    }
  }
  var ki = null;
  function ml(t, s, o, u) {
    ki = null;
    t = lr(u);
    t = Wr(t);
    if (t !== null) {
      s = zr(t);
      if (s === null) {
        t = null;
      } else {
        o = s.tag;
        if (o === 13) {
          t = Qu(s);
          if (t !== null) {
            return t;
          }
          t = null;
        } else if (o === 3) {
          if (s.stateNode.current.memoizedState.isDehydrated) {
            if (s.tag === 3) {
              return s.stateNode.containerInfo;
            } else {
              return null;
            }
          }
          t = null;
        } else if (s !== t) {
          t = null;
        }
      }
    }
    ki = t;
    return null;
  }
  function fd(t) {
    switch (t) {
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
        switch (xg()) {
          case ol:
            return 1;
          case nd:
            return 4;
          case pi:
          case _g:
            return 16;
          case rd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mr = null;
  var pl = null;
  var bi = null;
  function md() {
    if (bi) {
      return bi;
    }
    var t;
    var s = pl;
    var o = s.length;
    var u;
    var f = "value" in mr ? mr.value : mr.textContent;
    var p = f.length;
    for (t = 0; t < o && s[t] === f[t]; t++);
    var x = o - t;
    for (u = 1; u <= x && s[o - u] === f[p - u]; u++);
    return bi = f.slice(t, u > 1 ? 1 - u : undefined);
  }
  function Si(t) {
    var s = t.keyCode;
    if ("charCode" in t) {
      t = t.charCode;
      if (t === 0 && s === 13) {
        t = 13;
      }
    } else {
      t = s;
    }
    if (t === 10) {
      t = 13;
    }
    if (t >= 32 || t === 13) {
      return t;
    } else {
      return 0;
    }
  }
  function Ci() {
    return true;
  }
  function pd() {
    return false;
  }
  function Bt(t) {
    function s(o, u, f, p, x) {
      this._reactName = o;
      this._targetInst = f;
      this.type = u;
      this.nativeEvent = p;
      this.target = x;
      this.currentTarget = null;
      for (var S in t) {
        if (t.hasOwnProperty(S)) {
          o = t[S];
          this[S] = o ? o(p) : p[S];
        }
      }
      this.isDefaultPrevented = p.defaultPrevented ?? p.returnValue === false ? Ci : pd;
      this.isPropagationStopped = pd;
      return this;
    }
    te(s.prototype, {
      preventDefault: function () {
        this.defaultPrevented = true;
        var o = this.nativeEvent;
        if (o) {
          if (o.preventDefault) {
            o.preventDefault();
          } else if (typeof o.returnValue != "unknown") {
            o.returnValue = false;
          }
          this.isDefaultPrevented = Ci;
        }
      },
      stopPropagation: function () {
        var o = this.nativeEvent;
        if (o) {
          if (o.stopPropagation) {
            o.stopPropagation();
          } else if (typeof o.cancelBubble != "unknown") {
            o.cancelBubble = true;
          }
          this.isPropagationStopped = Ci;
        }
      },
      persist: function () {},
      isPersistent: Ci
    });
    return s;
  }
  var vs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  };
  var gl = Bt(vs);
  var fa = te({}, vs, {
    view: 0,
    detail: 0
  });
  var Og = Bt(fa);
  var vl;
  var yl;
  var ma;
  var Ei = te({}, fa, {
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
    getModifierState: xl,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      if (t.relatedTarget === undefined) {
        if (t.fromElement === t.srcElement) {
          return t.toElement;
        } else {
          return t.fromElement;
        }
      } else {
        return t.relatedTarget;
      }
    },
    movementX: function (t) {
      if ("movementX" in t) {
        return t.movementX;
      } else {
        if (t !== ma) {
          if (ma && t.type === "mousemove") {
            vl = t.screenX - ma.screenX;
            yl = t.screenY - ma.screenY;
          } else {
            yl = vl = 0;
          }
          ma = t;
        }
        return vl;
      }
    },
    movementY: function (t) {
      if ("movementY" in t) {
        return t.movementY;
      } else {
        return yl;
      }
    }
  });
  var gd = Bt(Ei);
  var $g = te({}, Ei, {
    dataTransfer: 0
  });
  var Lg = Bt($g);
  var Dg = te({}, fa, {
    relatedTarget: 0
  });
  var wl = Bt(Dg);
  var Mg = te({}, vs, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  });
  var Ug = Bt(Mg);
  var Fg = te({}, vs, {
    clipboardData: function (t) {
      if ("clipboardData" in t) {
        return t.clipboardData;
      } else {
        return window.clipboardData;
      }
    }
  });
  var Bg = Bt(Fg);
  var zg = te({}, vs, {
    data: 0
  });
  var vd = Bt(zg);
  var Wg = {
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
  };
  var qg = {
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
  };
  var Hg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Vg(t) {
    var s = this.nativeEvent;
    if (s.getModifierState) {
      return s.getModifierState(t);
    } else if (t = Hg[t]) {
      return !!s[t];
    } else {
      return false;
    }
  }
  function xl() {
    return Vg;
  }
  var Kg = te({}, fa, {
    key: function (t) {
      if (t.key) {
        var s = Wg[t.key] || t.key;
        if (s !== "Unidentified") {
          return s;
        }
      }
      if (t.type === "keypress") {
        t = Si(t);
        if (t === 13) {
          return "Enter";
        } else {
          return String.fromCharCode(t);
        }
      } else if (t.type === "keydown" || t.type === "keyup") {
        return qg[t.keyCode] || "Unidentified";
      } else {
        return "";
      }
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xl,
    charCode: function (t) {
      if (t.type === "keypress") {
        return Si(t);
      } else {
        return 0;
      }
    },
    keyCode: function (t) {
      if (t.type === "keydown" || t.type === "keyup") {
        return t.keyCode;
      } else {
        return 0;
      }
    },
    which: function (t) {
      if (t.type === "keypress") {
        return Si(t);
      } else if (t.type === "keydown" || t.type === "keyup") {
        return t.keyCode;
      } else {
        return 0;
      }
    }
  });
  var Gg = Bt(Kg);
  var Jg = te({}, Ei, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  });
  var yd = Bt(Jg);
  var Qg = te({}, fa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xl
  });
  var Yg = Bt(Qg);
  var Xg = te({}, vs, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  });
  var Zg = Bt(Xg);
  var e0 = te({}, Ei, {
    deltaX: function (t) {
      if ("deltaX" in t) {
        return t.deltaX;
      } else if ("wheelDeltaX" in t) {
        return -t.wheelDeltaX;
      } else {
        return 0;
      }
    },
    deltaY: function (t) {
      if ("deltaY" in t) {
        return t.deltaY;
      } else if ("wheelDeltaY" in t) {
        return -t.wheelDeltaY;
      } else if ("wheelDelta" in t) {
        return -t.wheelDelta;
      } else {
        return 0;
      }
    },
    deltaZ: 0,
    deltaMode: 0
  });
  var t0 = Bt(e0);
  var n0 = [9, 13, 27, 32];
  var _l = h && "CompositionEvent" in window;
  var pa = null;
  if (h && "documentMode" in document) {
    pa = document.documentMode;
  }
  var r0 = h && "TextEvent" in window && !pa;
  var wd = h && (!_l || pa && pa > 8 && pa <= 11);
  var xd = " ";
  var _d = false;
  function jd(t, s) {
    switch (t) {
      case "keyup":
        return n0.indexOf(s.keyCode) !== -1;
      case "keydown":
        return s.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function kd(t) {
    t = t.detail;
    if (typeof t == "object" && "data" in t) {
      return t.data;
    } else {
      return null;
    }
  }
  var ys = false;
  function s0(t, s) {
    switch (t) {
      case "compositionend":
        return kd(s);
      case "keypress":
        if (s.which !== 32) {
          return null;
        } else {
          _d = true;
          return xd;
        }
      case "textInput":
        t = s.data;
        if (t === xd && _d) {
          return null;
        } else {
          return t;
        }
      default:
        return null;
    }
  }
  function a0(t, s) {
    if (ys) {
      if (t === "compositionend" || !_l && jd(t, s)) {
        t = md();
        bi = pl = mr = null;
        ys = false;
        return t;
      } else {
        return null;
      }
    }
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!s.ctrlKey && !s.altKey && !s.metaKey || s.ctrlKey && s.altKey) {
          if (s.char && s.char.length > 1) {
            return s.char;
          }
          if (s.which) {
            return String.fromCharCode(s.which);
          }
        }
        return null;
      case "compositionend":
        if (wd && s.locale !== "ko") {
          return null;
        } else {
          return s.data;
        }
      default:
        return null;
    }
  }
  var i0 = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function bd(t) {
    var s = t && t.nodeName && t.nodeName.toLowerCase();
    if (s === "input") {
      return !!i0[t.type];
    } else {
      return s === "textarea";
    }
  }
  function Sd(t, s, o, u) {
    Hu(u);
    s = Ai(s, "onChange");
    if (s.length > 0) {
      o = new gl("onChange", "change", null, o, u);
      t.push({
        event: o,
        listeners: s
      });
    }
  }
  var ga = null;
  var va = null;
  function o0(t) {
    Wd(t, 0);
  }
  function Ni(t) {
    var s = ks(t);
    if (ln(s)) {
      return t;
    }
  }
  function l0(t, s) {
    if (t === "change") {
      return s;
    }
  }
  var Cd = false;
  if (h) {
    var jl;
    if (h) {
      var kl = "oninput" in document;
      if (!kl) {
        var Ed = document.createElement("div");
        Ed.setAttribute("oninput", "return;");
        kl = typeof Ed.oninput == "function";
      }
      jl = kl;
    } else {
      jl = false;
    }
    Cd = jl && (!document.documentMode || document.documentMode > 9);
  }
  function Nd() {
    if (ga) {
      ga.detachEvent("onpropertychange", Td);
      va = ga = null;
    }
  }
  function Td(t) {
    if (t.propertyName === "value" && Ni(va)) {
      var s = [];
      Sd(s, va, t, lr(t));
      Ju(o0, s);
    }
  }
  function c0(t, s, o) {
    if (t === "focusin") {
      Nd();
      ga = s;
      va = o;
      ga.attachEvent("onpropertychange", Td);
    } else if (t === "focusout") {
      Nd();
    }
  }
  function u0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") {
      return Ni(va);
    }
  }
  function d0(t, s) {
    if (t === "click") {
      return Ni(s);
    }
  }
  function h0(t, s) {
    if (t === "input" || t === "change") {
      return Ni(s);
    }
  }
  function f0(t, s) {
    return t === s && (t !== 0 || 1 / t === 1 / s) || t !== t && s !== s;
  }
  var fn = typeof Object.is == "function" ? Object.is : f0;
  function ya(t, s) {
    if (fn(t, s)) {
      return true;
    }
    if (typeof t != "object" || t === null || typeof s != "object" || s === null) {
      return false;
    }
    var o = Object.keys(t);
    var u = Object.keys(s);
    if (o.length !== u.length) {
      return false;
    }
    for (u = 0; u < o.length; u++) {
      var f = o[u];
      if (!m.call(s, f) || !fn(t[f], s[f])) {
        return false;
      }
    }
    return true;
  }
  function Rd(t) {
    while (t && t.firstChild) {
      t = t.firstChild;
    }
    return t;
  }
  function Id(t, s) {
    var o = Rd(t);
    t = 0;
    var u;
    for (; o;) {
      if (o.nodeType === 3) {
        u = t + o.textContent.length;
        if (t <= s && u >= s) {
          return {
            node: o,
            offset: s - t
          };
        }
        t = u;
      }
      e: {
        while (o) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = undefined;
      }
      o = Rd(o);
    }
  }
  function Ad(t, s) {
    if (t && s) {
      if (t === s) {
        return true;
      } else if (t && t.nodeType === 3) {
        return false;
      } else if (s && s.nodeType === 3) {
        return Ad(t, s.parentNode);
      } else if ("contains" in t) {
        return t.contains(s);
      } else if (t.compareDocumentPosition) {
        return !!(t.compareDocumentPosition(s) & 16);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  function Pd() {
    for (var t = window, s = Ct(); s instanceof t.HTMLIFrameElement;) {
      try {
        var o = typeof s.contentWindow.location.href == "string";
      } catch {
        o = false;
      }
      if (o) {
        t = s.contentWindow;
      } else {
        break;
      }
      s = Ct(t.document);
    }
    return s;
  }
  function bl(t) {
    var s = t && t.nodeName && t.nodeName.toLowerCase();
    return s && (s === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || s === "textarea" || t.contentEditable === "true");
  }
  function m0(t) {
    var s = Pd();
    var o = t.focusedElem;
    var u = t.selectionRange;
    if (s !== o && o && o.ownerDocument && Ad(o.ownerDocument.documentElement, o)) {
      if (u !== null && bl(o)) {
        s = u.start;
        t = u.end;
        if (t === undefined) {
          t = s;
        }
        if ("selectionStart" in o) {
          o.selectionStart = s;
          o.selectionEnd = Math.min(t, o.value.length);
        } else {
          t = (s = o.ownerDocument || document) && s.defaultView || window;
          if (t.getSelection) {
            t = t.getSelection();
            var f = o.textContent.length;
            var p = Math.min(u.start, f);
            u = u.end === undefined ? p : Math.min(u.end, f);
            if (!t.extend && p > u) {
              f = u;
              u = p;
              p = f;
            }
            f = Id(o, p);
            var x = Id(o, u);
            if (f && x && (t.rangeCount !== 1 || t.anchorNode !== f.node || t.anchorOffset !== f.offset || t.focusNode !== x.node || t.focusOffset !== x.offset)) {
              s = s.createRange();
              s.setStart(f.node, f.offset);
              t.removeAllRanges();
              if (p > u) {
                t.addRange(s);
                t.extend(x.node, x.offset);
              } else {
                s.setEnd(x.node, x.offset);
                t.addRange(s);
              }
            }
          }
        }
      }
      s = [];
      t = o;
      while (t = t.parentNode) {
        if (t.nodeType === 1) {
          s.push({
            element: t,
            left: t.scrollLeft,
            top: t.scrollTop
          });
        }
      }
      if (typeof o.focus == "function") {
        o.focus();
      }
      o = 0;
      for (; o < s.length; o++) {
        t = s[o];
        t.element.scrollLeft = t.left;
        t.element.scrollTop = t.top;
      }
    }
  }
  var p0 = h && "documentMode" in document && document.documentMode <= 11;
  var ws = null;
  var Sl = null;
  var wa = null;
  var Cl = false;
  function Od(t, s, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    if (!Cl && ws != null && ws === Ct(u)) {
      u = ws;
      if ("selectionStart" in u && bl(u)) {
        u = {
          start: u.selectionStart,
          end: u.selectionEnd
        };
      } else {
        u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection();
        u = {
          anchorNode: u.anchorNode,
          anchorOffset: u.anchorOffset,
          focusNode: u.focusNode,
          focusOffset: u.focusOffset
        };
      }
      if (!wa || !ya(wa, u)) {
        wa = u;
        u = Ai(Sl, "onSelect");
        if (u.length > 0) {
          s = new gl("onSelect", "select", null, s, o);
          t.push({
            event: s,
            listeners: u
          });
          s.target = ws;
        }
      }
    }
  }
  function Ti(t, s) {
    var o = {};
    o[t.toLowerCase()] = s.toLowerCase();
    o["Webkit" + t] = "webkit" + s;
    o["Moz" + t] = "moz" + s;
    return o;
  }
  var xs = {
    animationend: Ti("Animation", "AnimationEnd"),
    animationiteration: Ti("Animation", "AnimationIteration"),
    animationstart: Ti("Animation", "AnimationStart"),
    transitionend: Ti("Transition", "TransitionEnd")
  };
  var El = {};
  var $d = {};
  if (h) {
    $d = document.createElement("div").style;
    if (!("AnimationEvent" in window)) {
      delete xs.animationend.animation;
      delete xs.animationiteration.animation;
      delete xs.animationstart.animation;
    }
    if (!("TransitionEvent" in window)) {
      delete xs.transitionend.transition;
    }
  }
  function Ri(t) {
    if (El[t]) {
      return El[t];
    }
    if (!xs[t]) {
      return t;
    }
    var s = xs[t];
    var o;
    for (o in s) {
      if (s.hasOwnProperty(o) && o in $d) {
        return El[t] = s[o];
      }
    }
    return t;
  }
  var Ld = Ri("animationend");
  var Dd = Ri("animationiteration");
  var Md = Ri("animationstart");
  var Ud = Ri("transitionend");
  var Fd = new Map();
  var Bd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function pr(t, s) {
    Fd.set(t, s);
    c(s, [t]);
  }
  for (var Nl = 0; Nl < Bd.length; Nl++) {
    var Tl = Bd[Nl];
    var g0 = Tl.toLowerCase();
    var v0 = Tl[0].toUpperCase() + Tl.slice(1);
    pr(g0, "on" + v0);
  }
  pr(Ld, "onAnimationEnd");
  pr(Dd, "onAnimationIteration");
  pr(Md, "onAnimationStart");
  pr("dblclick", "onDoubleClick");
  pr("focusin", "onFocus");
  pr("focusout", "onBlur");
  pr(Ud, "onTransitionEnd");
  d("onMouseEnter", ["mouseout", "mouseover"]);
  d("onMouseLeave", ["mouseout", "mouseover"]);
  d("onPointerEnter", ["pointerout", "pointerover"]);
  d("onPointerLeave", ["pointerout", "pointerover"]);
  c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  var y0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));
  function zd(t, s, o) {
    var u = t.type || "unknown-event";
    t.currentTarget = o;
    gg(u, s, undefined, t);
    t.currentTarget = null;
  }
  function Wd(t, s) {
    s = (s & 4) !== 0;
    for (var o = 0; o < t.length; o++) {
      var u = t[o];
      var f = u.event;
      u = u.listeners;
      e: {
        var p = undefined;
        if (s) {
          for (var x = u.length - 1; x >= 0; x--) {
            var S = u[x];
            var E = S.instance;
            var M = S.currentTarget;
            S = S.listener;
            if (E !== p && f.isPropagationStopped()) {
              break e;
            }
            zd(f, S, M);
            p = E;
          }
        } else {
          for (x = 0; x < u.length; x++) {
            S = u[x];
            E = S.instance;
            M = S.currentTarget;
            S = S.listener;
            if (E !== p && f.isPropagationStopped()) {
              break e;
            }
            zd(f, S, M);
            p = E;
          }
        }
      }
    }
    if (mi) {
      t = il;
      mi = false;
      il = null;
      throw t;
    }
  }
  function He(t, s) {
    var o = s[Dl];
    if (o === undefined) {
      o = s[Dl] = new Set();
    }
    var u = t + "__bubble";
    if (!o.has(u)) {
      qd(s, t, 2, false);
      o.add(u);
    }
  }
  function Rl(t, s, o) {
    var u = 0;
    if (s) {
      u |= 4;
    }
    qd(o, t, u, s);
  }
  var Ii = "_reactListening" + Math.random().toString(36).slice(2);
  function _a(t) {
    if (!t[Ii]) {
      t[Ii] = true;
      i.forEach(function (o) {
        if (o !== "selectionchange") {
          if (!y0.has(o)) {
            Rl(o, false, t);
          }
          Rl(o, true, t);
        }
      });
      var s = t.nodeType === 9 ? t : t.ownerDocument;
      if (s !== null && !s[Ii]) {
        s[Ii] = true;
        Rl("selectionchange", false, s);
      }
    }
  }
  function qd(t, s, o, u) {
    switch (fd(s)) {
      case 1:
        var f = Ag;
        break;
      case 4:
        f = Pg;
        break;
      default:
        f = fl;
    }
    o = f.bind(null, s, o, t);
    f = undefined;
    if (!!al && (s === "touchstart" || s === "touchmove" || s === "wheel")) {
      f = true;
    }
    if (u) {
      if (f !== undefined) {
        t.addEventListener(s, o, {
          capture: true,
          passive: f
        });
      } else {
        t.addEventListener(s, o, true);
      }
    } else if (f !== undefined) {
      t.addEventListener(s, o, {
        passive: f
      });
    } else {
      t.addEventListener(s, o, false);
    }
  }
  function Il(t, s, o, u, f) {
    var p = u;
    if ((s & 1) === 0 && (s & 2) === 0 && u !== null) {
      e: while (true) {
        if (u === null) {
          return;
        }
        var x = u.tag;
        if (x === 3 || x === 4) {
          var S = u.stateNode.containerInfo;
          if (S === f || S.nodeType === 8 && S.parentNode === f) {
            break;
          }
          if (x === 4) {
            for (x = u.return; x !== null;) {
              var E = x.tag;
              if ((E === 3 || E === 4) && (E = x.stateNode.containerInfo, E === f || E.nodeType === 8 && E.parentNode === f)) {
                return;
              }
              x = x.return;
            }
          }
          while (S !== null) {
            x = Wr(S);
            if (x === null) {
              return;
            }
            E = x.tag;
            if (E === 5 || E === 6) {
              u = p = x;
              continue e;
            }
            S = S.parentNode;
          }
        }
        u = u.return;
      }
    }
    Ju(function () {
      var M = p;
      var Q = lr(o);
      var Z = [];
      e: {
        var J = Fd.get(t);
        if (J !== undefined) {
          var ce = gl;
          var fe = t;
          switch (t) {
            case "keypress":
              if (Si(o) === 0) {
                break e;
              }
            case "keydown":
            case "keyup":
              ce = Gg;
              break;
            case "focusin":
              fe = "focus";
              ce = wl;
              break;
            case "focusout":
              fe = "blur";
              ce = wl;
              break;
            case "beforeblur":
            case "afterblur":
              ce = wl;
              break;
            case "click":
              if (o.button === 2) {
                break e;
              }
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ce = gd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Lg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = Yg;
              break;
            case Ld:
            case Dd:
            case Md:
              ce = Ug;
              break;
            case Ud:
              ce = Zg;
              break;
            case "scroll":
              ce = Og;
              break;
            case "wheel":
              ce = t0;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Bg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = yd;
          }
          var pe = (s & 4) !== 0;
          var rt = !pe && t === "scroll";
          var P = pe ? J !== null ? J + "Capture" : null : J;
          pe = [];
          for (var N = M, $; N !== null;) {
            $ = N;
            var ee = $.stateNode;
            if ($.tag === 5 && ee !== null) {
              $ = ee;
              if (P !== null) {
                ee = ra(N, P);
                if (ee != null) {
                  pe.push(ja(N, ee, $));
                }
              }
            }
            if (rt) {
              break;
            }
            N = N.return;
          }
          if (pe.length > 0) {
            J = new ce(J, fe, null, o, Q);
            Z.push({
              event: J,
              listeners: pe
            });
          }
        }
      }
      if ((s & 7) === 0) {
        e: {
          J = t === "mouseover" || t === "pointerover";
          ce = t === "mouseout" || t === "pointerout";
          if (J && o !== or && (fe = o.relatedTarget || o.fromElement) && (Wr(fe) || fe[Un])) {
            break e;
          }
          if ((ce || J) && (J = Q.window === Q ? Q : (J = Q.ownerDocument) ? J.defaultView || J.parentWindow : window, ce ? (fe = o.relatedTarget || o.toElement, ce = M, fe = fe ? Wr(fe) : null, fe !== null && (rt = zr(fe), fe !== rt || fe.tag !== 5 && fe.tag !== 6) && (fe = null)) : (ce = null, fe = M), ce !== fe)) {
            pe = gd;
            ee = "onMouseLeave";
            P = "onMouseEnter";
            N = "mouse";
            if (t === "pointerout" || t === "pointerover") {
              pe = yd;
              ee = "onPointerLeave";
              P = "onPointerEnter";
              N = "pointer";
            }
            rt = ce == null ? J : ks(ce);
            $ = fe == null ? J : ks(fe);
            J = new pe(ee, N + "leave", ce, o, Q);
            J.target = rt;
            J.relatedTarget = $;
            ee = null;
            if (Wr(Q) === M) {
              pe = new pe(P, N + "enter", fe, o, Q);
              pe.target = $;
              pe.relatedTarget = rt;
              ee = pe;
            }
            rt = ee;
            if (ce && fe) {
              t: {
                pe = ce;
                P = fe;
                N = 0;
                $ = pe;
                for (; $; $ = _s($)) {
                  N++;
                }
                $ = 0;
                ee = P;
                for (; ee; ee = _s(ee)) {
                  $++;
                }
                while (N - $ > 0) {
                  pe = _s(pe);
                  N--;
                }
                while ($ - N > 0) {
                  P = _s(P);
                  $--;
                }
                while (N--) {
                  if (pe === P || P !== null && pe === P.alternate) {
                    break t;
                  }
                  pe = _s(pe);
                  P = _s(P);
                }
                pe = null;
              }
            } else {
              pe = null;
            }
            if (ce !== null) {
              Hd(Z, J, ce, pe, false);
            }
            if (fe !== null && rt !== null) {
              Hd(Z, rt, fe, pe, true);
            }
          }
        }
        e: {
          J = M ? ks(M) : window;
          ce = J.nodeName && J.nodeName.toLowerCase();
          if (ce === "select" || ce === "input" && J.type === "file") {
            var ve = l0;
          } else if (bd(J)) {
            if (Cd) {
              ve = h0;
            } else {
              ve = u0;
              var je = c0;
            }
          } else if ((ce = J.nodeName) && ce.toLowerCase() === "input" && (J.type === "checkbox" || J.type === "radio")) {
            ve = d0;
          }
          if (ve &&= ve(t, M)) {
            Sd(Z, ve, o, Q);
            break e;
          }
          if (je) {
            je(t, J, M);
          }
          if (t === "focusout" && (je = J._wrapperState) && je.controlled && J.type === "number") {
            ar(J, "number", J.value);
          }
        }
        je = M ? ks(M) : window;
        switch (t) {
          case "focusin":
            if (bd(je) || je.contentEditable === "true") {
              ws = je;
              Sl = M;
              wa = null;
            }
            break;
          case "focusout":
            wa = Sl = ws = null;
            break;
          case "mousedown":
            Cl = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Cl = false;
            Od(Z, o, Q);
            break;
          case "selectionchange":
            if (p0) {
              break;
            }
          case "keydown":
          case "keyup":
            Od(Z, o, Q);
        }
        var ke;
        if (_l) {
          e: {
            switch (t) {
              case "compositionstart":
                var Ce = "onCompositionStart";
                break e;
              case "compositionend":
                Ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ce = "onCompositionUpdate";
                break e;
            }
            Ce = undefined;
          }
        } else if (ys) {
          if (jd(t, o)) {
            Ce = "onCompositionEnd";
          }
        } else if (t === "keydown" && o.keyCode === 229) {
          Ce = "onCompositionStart";
        }
        if (Ce) {
          if (wd && o.locale !== "ko") {
            if (ys || Ce !== "onCompositionStart") {
              if (Ce === "onCompositionEnd" && ys) {
                ke = md();
              }
            } else {
              mr = Q;
              pl = "value" in mr ? mr.value : mr.textContent;
              ys = true;
            }
          }
          je = Ai(M, Ce);
          if (je.length > 0) {
            Ce = new vd(Ce, t, null, o, Q);
            Z.push({
              event: Ce,
              listeners: je
            });
            if (ke) {
              Ce.data = ke;
            } else {
              ke = kd(o);
              if (ke !== null) {
                Ce.data = ke;
              }
            }
          }
        }
        if (ke = r0 ? s0(t, o) : a0(t, o)) {
          M = Ai(M, "onBeforeInput");
          if (M.length > 0) {
            Q = new vd("onBeforeInput", "beforeinput", null, o, Q);
            Z.push({
              event: Q,
              listeners: M
            });
            Q.data = ke;
          }
        }
      }
      Wd(Z, s);
    });
  }
  function ja(t, s, o) {
    return {
      instance: t,
      listener: s,
      currentTarget: o
    };
  }
  function Ai(t, s) {
    var o = s + "Capture";
    var u = [];
    for (; t !== null;) {
      var f = t;
      var p = f.stateNode;
      if (f.tag === 5 && p !== null) {
        f = p;
        p = ra(t, o);
        if (p != null) {
          u.unshift(ja(t, p, f));
        }
        p = ra(t, s);
        if (p != null) {
          u.push(ja(t, p, f));
        }
      }
      t = t.return;
    }
    return u;
  }
  function _s(t) {
    if (t === null) {
      return null;
    }
    do {
      t = t.return;
    } while (t && t.tag !== 5);
    return t || null;
  }
  function Hd(t, s, o, u, f) {
    var p = s._reactName;
    var x = [];
    for (; o !== null && o !== u;) {
      var S = o;
      var E = S.alternate;
      var M = S.stateNode;
      if (E !== null && E === u) {
        break;
      }
      if (S.tag === 5 && M !== null) {
        S = M;
        if (f) {
          E = ra(o, p);
          if (E != null) {
            x.unshift(ja(o, E, S));
          }
        } else if (!f) {
          E = ra(o, p);
          if (E != null) {
            x.push(ja(o, E, S));
          }
        }
      }
      o = o.return;
    }
    if (x.length !== 0) {
      t.push({
        event: s,
        listeners: x
      });
    }
  }
  var w0 = /\r\n?/g;
  var x0 = /\u0000|\uFFFD/g;
  function Vd(t) {
    return (typeof t == "string" ? t : "" + t).replace(w0, `
`).replace(x0, "");
  }
  function Pi(t, s, o) {
    s = Vd(s);
    if (Vd(t) !== s && o) {
      throw Error(r(425));
    }
  }
  function Oi() {}
  var Al = null;
  var Pl = null;
  function Ol(t, s) {
    return t === "textarea" || t === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
  }
  var $l = typeof setTimeout == "function" ? setTimeout : undefined;
  var _0 = typeof clearTimeout == "function" ? clearTimeout : undefined;
  var Kd = typeof Promise == "function" ? Promise : undefined;
  var j0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kd !== "undefined" ? function (t) {
    return Kd.resolve(null).then(t).catch(k0);
  } : $l;
  function k0(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Ll(t, s) {
    var o = s;
    var u = 0;
    do {
      var f = o.nextSibling;
      t.removeChild(o);
      if (f && f.nodeType === 8) {
        o = f.data;
        if (o === "/$") {
          if (u === 0) {
            t.removeChild(f);
            ha(s);
            return;
          }
          u--;
        } else if (o === "$" || o === "$?" || o === "$!") {
          u++;
        }
      }
      o = f;
    } while (o);
    ha(s);
  }
  function gr(t) {
    for (; t != null; t = t.nextSibling) {
      var s = t.nodeType;
      if (s === 1 || s === 3) {
        break;
      }
      if (s === 8) {
        s = t.data;
        if (s === "$" || s === "$!" || s === "$?") {
          break;
        }
        if (s === "/$") {
          return null;
        }
      }
    }
    return t;
  }
  function Gd(t) {
    t = t.previousSibling;
    var s = 0;
    for (; t;) {
      if (t.nodeType === 8) {
        var o = t.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (s === 0) {
            return t;
          }
          s--;
        } else if (o === "/$") {
          s++;
        }
      }
      t = t.previousSibling;
    }
    return null;
  }
  var js = Math.random().toString(36).slice(2);
  var Sn = "__reactFiber$" + js;
  var ka = "__reactProps$" + js;
  var Un = "__reactContainer$" + js;
  var Dl = "__reactEvents$" + js;
  var b0 = "__reactListeners$" + js;
  var S0 = "__reactHandles$" + js;
  function Wr(t) {
    var s = t[Sn];
    if (s) {
      return s;
    }
    for (var o = t.parentNode; o;) {
      if (s = o[Un] || o[Sn]) {
        o = s.alternate;
        if (s.child !== null || o !== null && o.child !== null) {
          for (t = Gd(t); t !== null;) {
            if (o = t[Sn]) {
              return o;
            }
            t = Gd(t);
          }
        }
        return s;
      }
      t = o;
      o = t.parentNode;
    }
    return null;
  }
  function ba(t) {
    t = t[Sn] || t[Un];
    if (!t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) {
      return null;
    } else {
      return t;
    }
  }
  function ks(t) {
    if (t.tag === 5 || t.tag === 6) {
      return t.stateNode;
    }
    throw Error(r(33));
  }
  function $i(t) {
    return t[ka] || null;
  }
  var Ml = [];
  var bs = -1;
  function vr(t) {
    return {
      current: t
    };
  }
  function Ve(t) {
    if (!(bs < 0)) {
      t.current = Ml[bs];
      Ml[bs] = null;
      bs--;
    }
  }
  function ze(t, s) {
    bs++;
    Ml[bs] = t.current;
    t.current = s;
  }
  var yr = {};
  var wt = vr(yr);
  var Rt = vr(false);
  var qr = yr;
  function Ss(t, s) {
    var o = t.type.contextTypes;
    if (!o) {
      return yr;
    }
    var u = t.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === s) {
      return u.__reactInternalMemoizedMaskedChildContext;
    }
    var f = {};
    var p;
    for (p in o) {
      f[p] = s[p];
    }
    if (u) {
      t = t.stateNode;
      t.__reactInternalMemoizedUnmaskedChildContext = s;
      t.__reactInternalMemoizedMaskedChildContext = f;
    }
    return f;
  }
  function It(t) {
    t = t.childContextTypes;
    return t != null;
  }
  function Li() {
    Ve(Rt);
    Ve(wt);
  }
  function Jd(t, s, o) {
    if (wt.current !== yr) {
      throw Error(r(168));
    }
    ze(wt, s);
    ze(Rt, o);
  }
  function Qd(t, s, o) {
    var u = t.stateNode;
    s = s.childContextTypes;
    if (typeof u.getChildContext != "function") {
      return o;
    }
    u = u.getChildContext();
    for (var f in u) {
      if (!(f in s)) {
        throw Error(r(108, oe(t) || "Unknown", f));
      }
    }
    return te({}, o, u);
  }
  function Di(t) {
    t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || yr;
    qr = wt.current;
    ze(wt, t);
    ze(Rt, Rt.current);
    return true;
  }
  function Yd(t, s, o) {
    var u = t.stateNode;
    if (!u) {
      throw Error(r(169));
    }
    if (o) {
      t = Qd(t, s, qr);
      u.__reactInternalMemoizedMergedChildContext = t;
      Ve(Rt);
      Ve(wt);
      ze(wt, t);
    } else {
      Ve(Rt);
    }
    ze(Rt, o);
  }
  var Fn = null;
  var Mi = false;
  var Ul = false;
  function Xd(t) {
    if (Fn === null) {
      Fn = [t];
    } else {
      Fn.push(t);
    }
  }
  function C0(t) {
    Mi = true;
    Xd(t);
  }
  function wr() {
    if (!Ul && Fn !== null) {
      Ul = true;
      var t = 0;
      var s = Me;
      try {
        var o = Fn;
        for (Me = 1; t < o.length; t++) {
          var u = o[t];
          do {
            u = u(true);
          } while (u !== null);
        }
        Fn = null;
        Mi = false;
      } catch (f) {
        if (Fn !== null) {
          Fn = Fn.slice(t + 1);
        }
        ed(ol, wr);
        throw f;
      } finally {
        Me = s;
        Ul = false;
      }
    }
    return null;
  }
  var Cs = [];
  var Es = 0;
  var Ui = null;
  var Fi = 0;
  var Yt = [];
  var Xt = 0;
  var Hr = null;
  var Bn = 1;
  var zn = "";
  function Vr(t, s) {
    Cs[Es++] = Fi;
    Cs[Es++] = Ui;
    Ui = t;
    Fi = s;
  }
  function Zd(t, s, o) {
    Yt[Xt++] = Bn;
    Yt[Xt++] = zn;
    Yt[Xt++] = Hr;
    Hr = t;
    var u = Bn;
    t = zn;
    var f = 32 - hn(u) - 1;
    u &= ~(1 << f);
    o += 1;
    var p = 32 - hn(s) + f;
    if (p > 30) {
      var x = f - f % 5;
      p = (u & (1 << x) - 1).toString(32);
      u >>= x;
      f -= x;
      Bn = 1 << 32 - hn(s) + f | o << f | u;
      zn = p + t;
    } else {
      Bn = 1 << p | o << f | u;
      zn = t;
    }
  }
  function Fl(t) {
    if (t.return !== null) {
      Vr(t, 1);
      Zd(t, 1, 0);
    }
  }
  function Bl(t) {
    while (t === Ui) {
      Ui = Cs[--Es];
      Cs[Es] = null;
      Fi = Cs[--Es];
      Cs[Es] = null;
    }
    while (t === Hr) {
      Hr = Yt[--Xt];
      Yt[Xt] = null;
      zn = Yt[--Xt];
      Yt[Xt] = null;
      Bn = Yt[--Xt];
      Yt[Xt] = null;
    }
  }
  var zt = null;
  var Wt = null;
  var Ge = false;
  var mn = null;
  function eh(t, s) {
    var o = nn(5, null, null, 0);
    o.elementType = "DELETED";
    o.stateNode = s;
    o.return = t;
    s = t.deletions;
    if (s === null) {
      t.deletions = [o];
      t.flags |= 16;
    } else {
      s.push(o);
    }
  }
  function th(t, s) {
    switch (t.tag) {
      case 5:
        var o = t.type;
        s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s;
        if (s !== null) {
          t.stateNode = s;
          zt = t;
          Wt = gr(s.firstChild);
          return true;
        } else {
          return false;
        }
      case 6:
        s = t.pendingProps === "" || s.nodeType !== 3 ? null : s;
        if (s !== null) {
          t.stateNode = s;
          zt = t;
          Wt = null;
          return true;
        } else {
          return false;
        }
      case 13:
        s = s.nodeType !== 8 ? null : s;
        if (s !== null) {
          o = Hr !== null ? {
            id: Bn,
            overflow: zn
          } : null;
          t.memoizedState = {
            dehydrated: s,
            treeContext: o,
            retryLane: 1073741824
          };
          o = nn(18, null, null, 0);
          o.stateNode = s;
          o.return = t;
          t.child = o;
          zt = t;
          Wt = null;
          return true;
        } else {
          return false;
        }
      default:
        return false;
    }
  }
  function zl(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function Wl(t) {
    if (Ge) {
      var s = Wt;
      if (s) {
        var o = s;
        if (!th(t, s)) {
          if (zl(t)) {
            throw Error(r(418));
          }
          s = gr(o.nextSibling);
          var u = zt;
          if (s && th(t, s)) {
            eh(u, o);
          } else {
            t.flags = t.flags & -4097 | 2;
            Ge = false;
            zt = t;
          }
        }
      } else {
        if (zl(t)) {
          throw Error(r(418));
        }
        t.flags = t.flags & -4097 | 2;
        Ge = false;
        zt = t;
      }
    }
  }
  function nh(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;) {
      t = t.return;
    }
    zt = t;
  }
  function Bi(t) {
    if (t !== zt) {
      return false;
    }
    if (!Ge) {
      nh(t);
      Ge = true;
      return false;
    }
    var s;
    if ((s = t.tag !== 3) && !(s = t.tag !== 5)) {
      s = t.type;
      s = s !== "head" && s !== "body" && !Ol(t.type, t.memoizedProps);
    }
    if (s &&= Wt) {
      if (zl(t)) {
        rh();
        throw Error(r(418));
      }
      while (s) {
        eh(t, s);
        s = gr(s.nextSibling);
      }
    }
    nh(t);
    if (t.tag === 13) {
      t = t.memoizedState;
      t = t !== null ? t.dehydrated : null;
      if (!t) {
        throw Error(r(317));
      }
      e: {
        t = t.nextSibling;
        s = 0;
        while (t) {
          if (t.nodeType === 8) {
            var o = t.data;
            if (o === "/$") {
              if (s === 0) {
                Wt = gr(t.nextSibling);
                break e;
              }
              s--;
            } else if (o === "$" || o === "$!" || o === "$?") {
              s++;
            }
          }
          t = t.nextSibling;
        }
        Wt = null;
      }
    } else {
      Wt = zt ? gr(t.stateNode.nextSibling) : null;
    }
    return true;
  }
  function rh() {
    for (var t = Wt; t;) {
      t = gr(t.nextSibling);
    }
  }
  function Ns() {
    Wt = zt = null;
    Ge = false;
  }
  function ql(t) {
    if (mn === null) {
      mn = [t];
    } else {
      mn.push(t);
    }
  }
  var E0 = W.ReactCurrentBatchConfig;
  function Sa(t, s, o) {
    t = o.ref;
    if (t !== null && typeof t != "function" && typeof t != "object") {
      if (o._owner) {
        o = o._owner;
        if (o) {
          if (o.tag !== 1) {
            throw Error(r(309));
          }
          var u = o.stateNode;
        }
        if (!u) {
          throw Error(r(147, t));
        }
        var f = u;
        var p = "" + t;
        if (s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === p) {
          return s.ref;
        } else {
          s = function (x) {
            var S = f.refs;
            if (x === null) {
              delete S[p];
            } else {
              S[p] = x;
            }
          };
          s._stringRef = p;
          return s;
        }
      }
      if (typeof t != "string") {
        throw Error(r(284));
      }
      if (!o._owner) {
        throw Error(r(290, t));
      }
    }
    return t;
  }
  function zi(t, s) {
    t = Object.prototype.toString.call(s);
    throw Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : t));
  }
  function sh(t) {
    var s = t._init;
    return s(t._payload);
  }
  function ah(t) {
    function s(P, N) {
      if (t) {
        var $ = P.deletions;
        if ($ === null) {
          P.deletions = [N];
          P.flags |= 16;
        } else {
          $.push(N);
        }
      }
    }
    function o(P, N) {
      if (!t) {
        return null;
      }
      while (N !== null) {
        s(P, N);
        N = N.sibling;
      }
      return null;
    }
    function u(P, N) {
      for (P = new Map(); N !== null;) {
        if (N.key !== null) {
          P.set(N.key, N);
        } else {
          P.set(N.index, N);
        }
        N = N.sibling;
      }
      return P;
    }
    function f(P, N) {
      P = Er(P, N);
      P.index = 0;
      P.sibling = null;
      return P;
    }
    function p(P, N, $) {
      P.index = $;
      if (t) {
        $ = P.alternate;
        if ($ !== null) {
          $ = $.index;
          if ($ < N) {
            P.flags |= 2;
            return N;
          } else {
            return $;
          }
        } else {
          P.flags |= 2;
          return N;
        }
      } else {
        P.flags |= 1048576;
        return N;
      }
    }
    function x(P) {
      if (t && P.alternate === null) {
        P.flags |= 2;
      }
      return P;
    }
    function S(P, N, $, ee) {
      if (N === null || N.tag !== 6) {
        N = $c($, P.mode, ee);
        N.return = P;
        return N;
      } else {
        N = f(N, $);
        N.return = P;
        return N;
      }
    }
    function E(P, N, $, ee) {
      var ve = $.type;
      if (ve === X) {
        return Q(P, N, $.props.children, ee, $.key);
      } else if (N !== null && (N.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === K && sh(ve) === N.type)) {
        ee = f(N, $.props);
        ee.ref = Sa(P, N, $);
        ee.return = P;
        return ee;
      } else {
        ee = fo($.type, $.key, $.props, null, P.mode, ee);
        ee.ref = Sa(P, N, $);
        ee.return = P;
        return ee;
      }
    }
    function M(P, N, $, ee) {
      if (N === null || N.tag !== 4 || N.stateNode.containerInfo !== $.containerInfo || N.stateNode.implementation !== $.implementation) {
        N = Lc($, P.mode, ee);
        N.return = P;
        return N;
      } else {
        N = f(N, $.children || []);
        N.return = P;
        return N;
      }
    }
    function Q(P, N, $, ee, ve) {
      if (N === null || N.tag !== 7) {
        N = es($, P.mode, ee, ve);
        N.return = P;
        return N;
      } else {
        N = f(N, $);
        N.return = P;
        return N;
      }
    }
    function Z(P, N, $) {
      if (typeof N == "string" && N !== "" || typeof N == "number") {
        N = $c("" + N, P.mode, $);
        N.return = P;
        return N;
      }
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case I:
            $ = fo(N.type, N.key, N.props, null, P.mode, $);
            $.ref = Sa(P, null, N);
            $.return = P;
            return $;
          case z:
            N = Lc(N, P.mode, $);
            N.return = P;
            return N;
          case K:
            var ee = N._init;
            return Z(P, ee(N._payload), $);
        }
        if (Jt(N) || se(N)) {
          N = es(N, P.mode, $, null);
          N.return = P;
          return N;
        }
        zi(P, N);
      }
      return null;
    }
    function J(P, N, $, ee) {
      var ve = N !== null ? N.key : null;
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") {
        if (ve !== null) {
          return null;
        } else {
          return S(P, N, "" + $, ee);
        }
      }
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case I:
            if ($.key === ve) {
              return E(P, N, $, ee);
            } else {
              return null;
            }
          case z:
            if ($.key === ve) {
              return M(P, N, $, ee);
            } else {
              return null;
            }
          case K:
            ve = $._init;
            return J(P, N, ve($._payload), ee);
        }
        if (Jt($) || se($)) {
          if (ve !== null) {
            return null;
          } else {
            return Q(P, N, $, ee, null);
          }
        }
        zi(P, $);
      }
      return null;
    }
    function ce(P, N, $, ee, ve) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
        P = P.get($) || null;
        return S(N, P, "" + ee, ve);
      }
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case I:
            P = P.get(ee.key === null ? $ : ee.key) || null;
            return E(N, P, ee, ve);
          case z:
            P = P.get(ee.key === null ? $ : ee.key) || null;
            return M(N, P, ee, ve);
          case K:
            var je = ee._init;
            return ce(P, N, $, je(ee._payload), ve);
        }
        if (Jt(ee) || se(ee)) {
          P = P.get($) || null;
          return Q(N, P, ee, ve, null);
        }
        zi(N, ee);
      }
      return null;
    }
    function fe(P, N, $, ee) {
      var ve = null;
      var je = null;
      for (var ke = N, Ce = N = 0, ht = null; ke !== null && Ce < $.length; Ce++) {
        if (ke.index > Ce) {
          ht = ke;
          ke = null;
        } else {
          ht = ke.sibling;
        }
        var Le = J(P, ke, $[Ce], ee);
        if (Le === null) {
          if (ke === null) {
            ke = ht;
          }
          break;
        }
        if (t && ke && Le.alternate === null) {
          s(P, ke);
        }
        N = p(Le, N, Ce);
        if (je === null) {
          ve = Le;
        } else {
          je.sibling = Le;
        }
        je = Le;
        ke = ht;
      }
      if (Ce === $.length) {
        o(P, ke);
        if (Ge) {
          Vr(P, Ce);
        }
        return ve;
      }
      if (ke === null) {
        for (; Ce < $.length; Ce++) {
          ke = Z(P, $[Ce], ee);
          if (ke !== null) {
            N = p(ke, N, Ce);
            if (je === null) {
              ve = ke;
            } else {
              je.sibling = ke;
            }
            je = ke;
          }
        }
        if (Ge) {
          Vr(P, Ce);
        }
        return ve;
      }
      for (ke = u(P, ke); Ce < $.length; Ce++) {
        ht = ce(ke, P, Ce, $[Ce], ee);
        if (ht !== null) {
          if (t && ht.alternate !== null) {
            ke.delete(ht.key === null ? Ce : ht.key);
          }
          N = p(ht, N, Ce);
          if (je === null) {
            ve = ht;
          } else {
            je.sibling = ht;
          }
          je = ht;
        }
      }
      if (t) {
        ke.forEach(function (Nr) {
          return s(P, Nr);
        });
      }
      if (Ge) {
        Vr(P, Ce);
      }
      return ve;
    }
    function pe(P, N, $, ee) {
      var ve = se($);
      if (typeof ve != "function") {
        throw Error(r(150));
      }
      $ = ve.call($);
      if ($ == null) {
        throw Error(r(151));
      }
      var je = ve = null;
      for (var ke = N, Ce = N = 0, ht = null, Le = $.next(); ke !== null && !Le.done; Ce++, Le = $.next()) {
        if (ke.index > Ce) {
          ht = ke;
          ke = null;
        } else {
          ht = ke.sibling;
        }
        var Nr = J(P, ke, Le.value, ee);
        if (Nr === null) {
          if (ke === null) {
            ke = ht;
          }
          break;
        }
        if (t && ke && Nr.alternate === null) {
          s(P, ke);
        }
        N = p(Nr, N, Ce);
        if (je === null) {
          ve = Nr;
        } else {
          je.sibling = Nr;
        }
        je = Nr;
        ke = ht;
      }
      if (Le.done) {
        o(P, ke);
        if (Ge) {
          Vr(P, Ce);
        }
        return ve;
      }
      if (ke === null) {
        for (; !Le.done; Ce++, Le = $.next()) {
          Le = Z(P, Le.value, ee);
          if (Le !== null) {
            N = p(Le, N, Ce);
            if (je === null) {
              ve = Le;
            } else {
              je.sibling = Le;
            }
            je = Le;
          }
        }
        if (Ge) {
          Vr(P, Ce);
        }
        return ve;
      }
      for (ke = u(P, ke); !Le.done; Ce++, Le = $.next()) {
        Le = ce(ke, P, Ce, Le.value, ee);
        if (Le !== null) {
          if (t && Le.alternate !== null) {
            ke.delete(Le.key === null ? Ce : Le.key);
          }
          N = p(Le, N, Ce);
          if (je === null) {
            ve = Le;
          } else {
            je.sibling = Le;
          }
          je = Le;
        }
      }
      if (t) {
        ke.forEach(function (iv) {
          return s(P, iv);
        });
      }
      if (Ge) {
        Vr(P, Ce);
      }
      return ve;
    }
    function rt(P, N, $, ee) {
      if (typeof $ == "object" && $ !== null && $.type === X && $.key === null) {
        $ = $.props.children;
      }
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case I:
            e: {
              var ve = $.key;
              for (var je = N; je !== null;) {
                if (je.key === ve) {
                  ve = $.type;
                  if (ve === X) {
                    if (je.tag === 7) {
                      o(P, je.sibling);
                      N = f(je, $.props.children);
                      N.return = P;
                      P = N;
                      break e;
                    }
                  } else if (je.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === K && sh(ve) === je.type) {
                    o(P, je.sibling);
                    N = f(je, $.props);
                    N.ref = Sa(P, je, $);
                    N.return = P;
                    P = N;
                    break e;
                  }
                  o(P, je);
                  break;
                } else {
                  s(P, je);
                }
                je = je.sibling;
              }
              if ($.type === X) {
                N = es($.props.children, P.mode, ee, $.key);
                N.return = P;
                P = N;
              } else {
                ee = fo($.type, $.key, $.props, null, P.mode, ee);
                ee.ref = Sa(P, N, $);
                ee.return = P;
                P = ee;
              }
            }
            return x(P);
          case z:
            e: {
              for (je = $.key; N !== null;) {
                if (N.key === je) {
                  if (N.tag === 4 && N.stateNode.containerInfo === $.containerInfo && N.stateNode.implementation === $.implementation) {
                    o(P, N.sibling);
                    N = f(N, $.children || []);
                    N.return = P;
                    P = N;
                    break e;
                  } else {
                    o(P, N);
                    break;
                  }
                } else {
                  s(P, N);
                }
                N = N.sibling;
              }
              N = Lc($, P.mode, ee);
              N.return = P;
              P = N;
            }
            return x(P);
          case K:
            je = $._init;
            return rt(P, N, je($._payload), ee);
        }
        if (Jt($)) {
          return fe(P, N, $, ee);
        }
        if (se($)) {
          return pe(P, N, $, ee);
        }
        zi(P, $);
      }
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") {
        $ = "" + $;
        if (N !== null && N.tag === 6) {
          o(P, N.sibling);
          N = f(N, $);
          N.return = P;
          P = N;
        } else {
          o(P, N);
          N = $c($, P.mode, ee);
          N.return = P;
          P = N;
        }
        return x(P);
      } else {
        return o(P, N);
      }
    }
    return rt;
  }
  var Ts = ah(true);
  var ih = ah(false);
  var Wi = vr(null);
  var qi = null;
  var Rs = null;
  var Hl = null;
  function Vl() {
    Hl = Rs = qi = null;
  }
  function Kl(t) {
    var s = Wi.current;
    Ve(Wi);
    t._currentValue = s;
  }
  function Gl(t, s, o) {
    while (t !== null) {
      var u = t.alternate;
      if ((t.childLanes & s) !== s) {
        t.childLanes |= s;
        if (u !== null) {
          u.childLanes |= s;
        }
      } else if (u !== null && (u.childLanes & s) !== s) {
        u.childLanes |= s;
      }
      if (t === o) {
        break;
      }
      t = t.return;
    }
  }
  function Is(t, s) {
    qi = t;
    Hl = Rs = null;
    t = t.dependencies;
    if (t !== null && t.firstContext !== null) {
      if ((t.lanes & s) !== 0) {
        At = true;
      }
      t.firstContext = null;
    }
  }
  function Zt(t) {
    var s = t._currentValue;
    if (Hl !== t) {
      t = {
        context: t,
        memoizedValue: s,
        next: null
      };
      if (Rs === null) {
        if (qi === null) {
          throw Error(r(308));
        }
        Rs = t;
        qi.dependencies = {
          lanes: 0,
          firstContext: t
        };
      } else {
        Rs = Rs.next = t;
      }
    }
    return s;
  }
  var Kr = null;
  function Jl(t) {
    if (Kr === null) {
      Kr = [t];
    } else {
      Kr.push(t);
    }
  }
  function oh(t, s, o, u) {
    var f = s.interleaved;
    if (f === null) {
      o.next = o;
      Jl(s);
    } else {
      o.next = f.next;
      f.next = o;
    }
    s.interleaved = o;
    return Wn(t, u);
  }
  function Wn(t, s) {
    t.lanes |= s;
    var o = t.alternate;
    if (o !== null) {
      o.lanes |= s;
    }
    o = t;
    t = t.return;
    while (t !== null) {
      t.childLanes |= s;
      o = t.alternate;
      if (o !== null) {
        o.childLanes |= s;
      }
      o = t;
      t = t.return;
    }
    if (o.tag === 3) {
      return o.stateNode;
    } else {
      return null;
    }
  }
  var xr = false;
  function Ql(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function lh(t, s) {
    t = t.updateQueue;
    if (s.updateQueue === t) {
      s.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
      };
    }
  }
  function qn(t, s) {
    return {
      eventTime: t,
      lane: s,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function _r(t, s, o) {
    var u = t.updateQueue;
    if (u === null) {
      return null;
    }
    u = u.shared;
    if (($e & 2) !== 0) {
      var f = u.pending;
      if (f === null) {
        s.next = s;
      } else {
        s.next = f.next;
        f.next = s;
      }
      u.pending = s;
      return Wn(t, o);
    }
    f = u.interleaved;
    if (f === null) {
      s.next = s;
      Jl(u);
    } else {
      s.next = f.next;
      f.next = s;
    }
    u.interleaved = s;
    return Wn(t, o);
  }
  function Hi(t, s, o) {
    s = s.updateQueue;
    if (s !== null && (s = s.shared, (o & 4194240) !== 0)) {
      var u = s.lanes;
      u &= t.pendingLanes;
      o |= u;
      s.lanes = o;
      ul(t, o);
    }
  }
  function ch(t, s) {
    var o = t.updateQueue;
    var u = t.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var f = null;
      var p = null;
      o = o.firstBaseUpdate;
      if (o !== null) {
        do {
          var x = {
            eventTime: o.eventTime,
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          };
          if (p === null) {
            f = p = x;
          } else {
            p = p.next = x;
          }
          o = o.next;
        } while (o !== null);
        if (p === null) {
          f = p = s;
        } else {
          p = p.next = s;
        }
      } else {
        f = p = s;
      }
      o = {
        baseState: u.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: p,
        shared: u.shared,
        effects: u.effects
      };
      t.updateQueue = o;
      return;
    }
    t = o.lastBaseUpdate;
    if (t === null) {
      o.firstBaseUpdate = s;
    } else {
      t.next = s;
    }
    o.lastBaseUpdate = s;
  }
  function Vi(t, s, o, u) {
    var f = t.updateQueue;
    xr = false;
    var p = f.firstBaseUpdate;
    var x = f.lastBaseUpdate;
    var S = f.shared.pending;
    if (S !== null) {
      f.shared.pending = null;
      var E = S;
      var M = E.next;
      E.next = null;
      if (x === null) {
        p = M;
      } else {
        x.next = M;
      }
      x = E;
      var Q = t.alternate;
      if (Q !== null) {
        Q = Q.updateQueue;
        S = Q.lastBaseUpdate;
        if (S !== x) {
          if (S === null) {
            Q.firstBaseUpdate = M;
          } else {
            S.next = M;
          }
          Q.lastBaseUpdate = E;
        }
      }
    }
    if (p !== null) {
      var Z = f.baseState;
      x = 0;
      Q = M = E = null;
      S = p;
      do {
        var J = S.lane;
        var ce = S.eventTime;
        if ((u & J) === J) {
          if (Q !== null) {
            Q = Q.next = {
              eventTime: ce,
              lane: 0,
              tag: S.tag,
              payload: S.payload,
              callback: S.callback,
              next: null
            };
          }
          e: {
            var fe = t;
            var pe = S;
            J = s;
            ce = o;
            switch (pe.tag) {
              case 1:
                fe = pe.payload;
                if (typeof fe == "function") {
                  Z = fe.call(ce, Z, J);
                  break e;
                }
                Z = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                fe = pe.payload;
                J = typeof fe == "function" ? fe.call(ce, Z, J) : fe;
                if (J == null) {
                  break e;
                }
                Z = te({}, Z, J);
                break e;
              case 2:
                xr = true;
            }
          }
          if (S.callback !== null && S.lane !== 0) {
            t.flags |= 64;
            J = f.effects;
            if (J === null) {
              f.effects = [S];
            } else {
              J.push(S);
            }
          }
        } else {
          ce = {
            eventTime: ce,
            lane: J,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          };
          if (Q === null) {
            M = Q = ce;
            E = Z;
          } else {
            Q = Q.next = ce;
          }
          x |= J;
        }
        S = S.next;
        if (S === null) {
          S = f.shared.pending;
          if (S === null) {
            break;
          }
          J = S;
          S = J.next;
          J.next = null;
          f.lastBaseUpdate = J;
          f.shared.pending = null;
        }
      } while (true);
      if (Q === null) {
        E = Z;
      }
      f.baseState = E;
      f.firstBaseUpdate = M;
      f.lastBaseUpdate = Q;
      s = f.shared.interleaved;
      if (s !== null) {
        f = s;
        do {
          x |= f.lane;
          f = f.next;
        } while (f !== s);
      } else if (p === null) {
        f.shared.lanes = 0;
      }
      Qr |= x;
      t.lanes = x;
      t.memoizedState = Z;
    }
  }
  function uh(t, s, o) {
    t = s.effects;
    s.effects = null;
    if (t !== null) {
      for (s = 0; s < t.length; s++) {
        var u = t[s];
        var f = u.callback;
        if (f !== null) {
          u.callback = null;
          u = o;
          if (typeof f != "function") {
            throw Error(r(191, f));
          }
          f.call(u);
        }
      }
    }
  }
  var Ca = {};
  var Cn = vr(Ca);
  var Ea = vr(Ca);
  var Na = vr(Ca);
  function Gr(t) {
    if (t === Ca) {
      throw Error(r(174));
    }
    return t;
  }
  function Yl(t, s) {
    ze(Na, s);
    ze(Ea, t);
    ze(Cn, Ca);
    t = s.nodeType;
    switch (t) {
      case 9:
      case 11:
        s = (s = s.documentElement) ? s.namespaceURI : Fe(null, "");
        break;
      default:
        t = t === 8 ? s.parentNode : s;
        s = t.namespaceURI || null;
        t = t.tagName;
        s = Fe(s, t);
    }
    Ve(Cn);
    ze(Cn, s);
  }
  function As() {
    Ve(Cn);
    Ve(Ea);
    Ve(Na);
  }
  function dh(t) {
    Gr(Na.current);
    var s = Gr(Cn.current);
    var o = Fe(s, t.type);
    if (s !== o) {
      ze(Ea, t);
      ze(Cn, o);
    }
  }
  function Xl(t) {
    if (Ea.current === t) {
      Ve(Cn);
      Ve(Ea);
    }
  }
  var Qe = vr(0);
  function Ki(t) {
    for (var s = t; s !== null;) {
      if (s.tag === 13) {
        var o = s.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) {
          return s;
        }
      } else if (s.tag === 19 && s.memoizedProps.revealOrder !== undefined) {
        if ((s.flags & 128) !== 0) {
          return s;
        }
      } else if (s.child !== null) {
        s.child.return = s;
        s = s.child;
        continue;
      }
      if (s === t) {
        break;
      }
      while (s.sibling === null) {
        if (s.return === null || s.return === t) {
          return null;
        }
        s = s.return;
      }
      s.sibling.return = s.return;
      s = s.sibling;
    }
    return null;
  }
  var Zl = [];
  function ec() {
    for (var t = 0; t < Zl.length; t++) {
      Zl[t]._workInProgressVersionPrimary = null;
    }
    Zl.length = 0;
  }
  var Gi = W.ReactCurrentDispatcher;
  var tc = W.ReactCurrentBatchConfig;
  var Jr = 0;
  var Ye = null;
  var lt = null;
  var ut = null;
  var Ji = false;
  var Ta = false;
  var Ra = 0;
  var N0 = 0;
  function xt() {
    throw Error(r(321));
  }
  function nc(t, s) {
    if (s === null) {
      return false;
    }
    for (var o = 0; o < s.length && o < t.length; o++) {
      if (!fn(t[o], s[o])) {
        return false;
      }
    }
    return true;
  }
  function rc(t, s, o, u, f, p) {
    Jr = p;
    Ye = s;
    s.memoizedState = null;
    s.updateQueue = null;
    s.lanes = 0;
    Gi.current = t === null || t.memoizedState === null ? A0 : P0;
    t = o(u, f);
    if (Ta) {
      p = 0;
      do {
        Ta = false;
        Ra = 0;
        if (p >= 25) {
          throw Error(r(301));
        }
        p += 1;
        ut = lt = null;
        s.updateQueue = null;
        Gi.current = O0;
        t = o(u, f);
      } while (Ta);
    }
    Gi.current = Xi;
    s = lt !== null && lt.next !== null;
    Jr = 0;
    ut = lt = Ye = null;
    Ji = false;
    if (s) {
      throw Error(r(300));
    }
    return t;
  }
  function sc() {
    var t = Ra !== 0;
    Ra = 0;
    return t;
  }
  function En() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    if (ut === null) {
      Ye.memoizedState = ut = t;
    } else {
      ut = ut.next = t;
    }
    return ut;
  }
  function en() {
    if (lt === null) {
      var t = Ye.alternate;
      t = t !== null ? t.memoizedState : null;
    } else {
      t = lt.next;
    }
    var s = ut === null ? Ye.memoizedState : ut.next;
    if (s !== null) {
      ut = s;
      lt = t;
    } else {
      if (t === null) {
        throw Error(r(310));
      }
      lt = t;
      t = {
        memoizedState: lt.memoizedState,
        baseState: lt.baseState,
        baseQueue: lt.baseQueue,
        queue: lt.queue,
        next: null
      };
      if (ut === null) {
        Ye.memoizedState = ut = t;
      } else {
        ut = ut.next = t;
      }
    }
    return ut;
  }
  function Ia(t, s) {
    if (typeof s == "function") {
      return s(t);
    } else {
      return s;
    }
  }
  function ac(t) {
    var s = en();
    var o = s.queue;
    if (o === null) {
      throw Error(r(311));
    }
    o.lastRenderedReducer = t;
    var u = lt;
    var f = u.baseQueue;
    var p = o.pending;
    if (p !== null) {
      if (f !== null) {
        var x = f.next;
        f.next = p.next;
        p.next = x;
      }
      u.baseQueue = f = p;
      o.pending = null;
    }
    if (f !== null) {
      p = f.next;
      u = u.baseState;
      var S = x = null;
      var E = null;
      var M = p;
      do {
        var Q = M.lane;
        if ((Jr & Q) === Q) {
          if (E !== null) {
            E = E.next = {
              lane: 0,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            };
          }
          u = M.hasEagerState ? M.eagerState : t(u, M.action);
        } else {
          var Z = {
            lane: Q,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          if (E === null) {
            S = E = Z;
            x = u;
          } else {
            E = E.next = Z;
          }
          Ye.lanes |= Q;
          Qr |= Q;
        }
        M = M.next;
      } while (M !== null && M !== p);
      if (E === null) {
        x = u;
      } else {
        E.next = S;
      }
      if (!fn(u, s.memoizedState)) {
        At = true;
      }
      s.memoizedState = u;
      s.baseState = x;
      s.baseQueue = E;
      o.lastRenderedState = u;
    }
    t = o.interleaved;
    if (t !== null) {
      f = t;
      do {
        p = f.lane;
        Ye.lanes |= p;
        Qr |= p;
        f = f.next;
      } while (f !== t);
    } else if (f === null) {
      o.lanes = 0;
    }
    return [s.memoizedState, o.dispatch];
  }
  function ic(t) {
    var s = en();
    var o = s.queue;
    if (o === null) {
      throw Error(r(311));
    }
    o.lastRenderedReducer = t;
    var u = o.dispatch;
    var f = o.pending;
    var p = s.memoizedState;
    if (f !== null) {
      o.pending = null;
      var x = f = f.next;
      do {
        p = t(p, x.action);
        x = x.next;
      } while (x !== f);
      if (!fn(p, s.memoizedState)) {
        At = true;
      }
      s.memoizedState = p;
      if (s.baseQueue === null) {
        s.baseState = p;
      }
      o.lastRenderedState = p;
    }
    return [p, u];
  }
  function hh() {}
  function fh(t, s) {
    var o = Ye;
    var u = en();
    var f = s();
    var p = !fn(u.memoizedState, f);
    if (p) {
      u.memoizedState = f;
      At = true;
    }
    u = u.queue;
    oc(gh.bind(null, o, u, t), [t]);
    if (u.getSnapshot !== s || p || ut !== null && ut.memoizedState.tag & 1) {
      o.flags |= 2048;
      Aa(9, ph.bind(null, o, u, f, s), undefined, null);
      if (dt === null) {
        throw Error(r(349));
      }
      if ((Jr & 30) === 0) {
        mh(o, s, f);
      }
    }
    return f;
  }
  function mh(t, s, o) {
    t.flags |= 16384;
    t = {
      getSnapshot: s,
      value: o
    };
    s = Ye.updateQueue;
    if (s === null) {
      s = {
        lastEffect: null,
        stores: null
      };
      Ye.updateQueue = s;
      s.stores = [t];
    } else {
      o = s.stores;
      if (o === null) {
        s.stores = [t];
      } else {
        o.push(t);
      }
    }
  }
  function ph(t, s, o, u) {
    s.value = o;
    s.getSnapshot = u;
    if (vh(s)) {
      yh(t);
    }
  }
  function gh(t, s, o) {
    return o(function () {
      if (vh(s)) {
        yh(t);
      }
    });
  }
  function vh(t) {
    var s = t.getSnapshot;
    t = t.value;
    try {
      var o = s();
      return !fn(t, o);
    } catch {
      return true;
    }
  }
  function yh(t) {
    var s = Wn(t, 1);
    if (s !== null) {
      yn(s, t, 1, -1);
    }
  }
  function wh(t) {
    var s = En();
    if (typeof t == "function") {
      t = t();
    }
    s.memoizedState = s.baseState = t;
    t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ia,
      lastRenderedState: t
    };
    s.queue = t;
    t = t.dispatch = I0.bind(null, Ye, t);
    return [s.memoizedState, t];
  }
  function Aa(t, s, o, u) {
    t = {
      tag: t,
      create: s,
      destroy: o,
      deps: u,
      next: null
    };
    s = Ye.updateQueue;
    if (s === null) {
      s = {
        lastEffect: null,
        stores: null
      };
      Ye.updateQueue = s;
      s.lastEffect = t.next = t;
    } else {
      o = s.lastEffect;
      if (o === null) {
        s.lastEffect = t.next = t;
      } else {
        u = o.next;
        o.next = t;
        t.next = u;
        s.lastEffect = t;
      }
    }
    return t;
  }
  function xh() {
    return en().memoizedState;
  }
  function Qi(t, s, o, u) {
    var f = En();
    Ye.flags |= t;
    f.memoizedState = Aa(s | 1, o, undefined, u === undefined ? null : u);
  }
  function Yi(t, s, o, u) {
    var f = en();
    u = u === undefined ? null : u;
    var p = undefined;
    if (lt !== null) {
      var x = lt.memoizedState;
      p = x.destroy;
      if (u !== null && nc(u, x.deps)) {
        f.memoizedState = Aa(s, o, p, u);
        return;
      }
    }
    Ye.flags |= t;
    f.memoizedState = Aa(s | 1, o, p, u);
  }
  function _h(t, s) {
    return Qi(8390656, 8, t, s);
  }
  function oc(t, s) {
    return Yi(2048, 8, t, s);
  }
  function jh(t, s) {
    return Yi(4, 2, t, s);
  }
  function kh(t, s) {
    return Yi(4, 4, t, s);
  }
  function bh(t, s) {
    if (typeof s == "function") {
      t = t();
      s(t);
      return function () {
        s(null);
      };
    }
    if (s != null) {
      t = t();
      s.current = t;
      return function () {
        s.current = null;
      };
    }
  }
  function Sh(t, s, o) {
    o = o != null ? o.concat([t]) : null;
    return Yi(4, 4, bh.bind(null, s, t), o);
  }
  function lc() {}
  function Ch(t, s) {
    var o = en();
    s = s === undefined ? null : s;
    var u = o.memoizedState;
    if (u !== null && s !== null && nc(s, u[1])) {
      return u[0];
    } else {
      o.memoizedState = [t, s];
      return t;
    }
  }
  function Eh(t, s) {
    var o = en();
    s = s === undefined ? null : s;
    var u = o.memoizedState;
    if (u !== null && s !== null && nc(s, u[1])) {
      return u[0];
    } else {
      t = t();
      o.memoizedState = [t, s];
      return t;
    }
  }
  function Nh(t, s, o) {
    if ((Jr & 21) === 0) {
      if (t.baseState) {
        t.baseState = false;
        At = true;
      }
      return t.memoizedState = o;
    } else {
      if (!fn(o, s)) {
        o = sd();
        Ye.lanes |= o;
        Qr |= o;
        t.baseState = true;
      }
      return s;
    }
  }
  function T0(t, s) {
    var o = Me;
    Me = o !== 0 && o < 4 ? o : 4;
    t(true);
    var u = tc.transition;
    tc.transition = {};
    try {
      t(false);
      s();
    } finally {
      Me = o;
      tc.transition = u;
    }
  }
  function Th() {
    return en().memoizedState;
  }
  function R0(t, s, o) {
    var u = Sr(t);
    o = {
      lane: u,
      action: o,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Rh(t)) {
      Ih(s, o);
    } else {
      o = oh(t, s, o, u);
      if (o !== null) {
        var f = Tt();
        yn(o, t, u, f);
        Ah(o, s, u);
      }
    }
  }
  function I0(t, s, o) {
    var u = Sr(t);
    var f = {
      lane: u,
      action: o,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Rh(t)) {
      Ih(s, f);
    } else {
      var p = t.alternate;
      if (t.lanes === 0 && (p === null || p.lanes === 0) && (p = s.lastRenderedReducer, p !== null)) {
        try {
          var x = s.lastRenderedState;
          var S = p(x, o);
          f.hasEagerState = true;
          f.eagerState = S;
          if (fn(S, x)) {
            var E = s.interleaved;
            if (E === null) {
              f.next = f;
              Jl(s);
            } else {
              f.next = E.next;
              E.next = f;
            }
            s.interleaved = f;
            return;
          }
        } catch {} finally {}
      }
      o = oh(t, s, f, u);
      if (o !== null) {
        f = Tt();
        yn(o, t, u, f);
        Ah(o, s, u);
      }
    }
  }
  function Rh(t) {
    var s = t.alternate;
    return t === Ye || s !== null && s === Ye;
  }
  function Ih(t, s) {
    Ta = Ji = true;
    var o = t.pending;
    if (o === null) {
      s.next = s;
    } else {
      s.next = o.next;
      o.next = s;
    }
    t.pending = s;
  }
  function Ah(t, s, o) {
    if ((o & 4194240) !== 0) {
      var u = s.lanes;
      u &= t.pendingLanes;
      o |= u;
      s.lanes = o;
      ul(t, o);
    }
  }
  var Xi = {
    readContext: Zt,
    useCallback: xt,
    useContext: xt,
    useEffect: xt,
    useImperativeHandle: xt,
    useInsertionEffect: xt,
    useLayoutEffect: xt,
    useMemo: xt,
    useReducer: xt,
    useRef: xt,
    useState: xt,
    useDebugValue: xt,
    useDeferredValue: xt,
    useTransition: xt,
    useMutableSource: xt,
    useSyncExternalStore: xt,
    useId: xt,
    unstable_isNewReconciler: false
  };
  var A0 = {
    readContext: Zt,
    useCallback: function (t, s) {
      En().memoizedState = [t, s === undefined ? null : s];
      return t;
    },
    useContext: Zt,
    useEffect: _h,
    useImperativeHandle: function (t, s, o) {
      o = o != null ? o.concat([t]) : null;
      return Qi(4194308, 4, bh.bind(null, s, t), o);
    },
    useLayoutEffect: function (t, s) {
      return Qi(4194308, 4, t, s);
    },
    useInsertionEffect: function (t, s) {
      return Qi(4, 2, t, s);
    },
    useMemo: function (t, s) {
      var o = En();
      s = s === undefined ? null : s;
      t = t();
      o.memoizedState = [t, s];
      return t;
    },
    useReducer: function (t, s, o) {
      var u = En();
      s = o !== undefined ? o(s) : s;
      u.memoizedState = u.baseState = s;
      t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      };
      u.queue = t;
      t = t.dispatch = R0.bind(null, Ye, t);
      return [u.memoizedState, t];
    },
    useRef: function (t) {
      var s = En();
      t = {
        current: t
      };
      return s.memoizedState = t;
    },
    useState: wh,
    useDebugValue: lc,
    useDeferredValue: function (t) {
      return En().memoizedState = t;
    },
    useTransition: function () {
      var t = wh(false);
      var s = t[0];
      t = T0.bind(null, t[1]);
      En().memoizedState = t;
      return [s, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, s, o) {
      var u = Ye;
      var f = En();
      if (Ge) {
        if (o === undefined) {
          throw Error(r(407));
        }
        o = o();
      } else {
        o = s();
        if (dt === null) {
          throw Error(r(349));
        }
        if ((Jr & 30) === 0) {
          mh(u, s, o);
        }
      }
      f.memoizedState = o;
      var p = {
        value: o,
        getSnapshot: s
      };
      f.queue = p;
      _h(gh.bind(null, u, p, t), [t]);
      u.flags |= 2048;
      Aa(9, ph.bind(null, u, p, o, s), undefined, null);
      return o;
    },
    useId: function () {
      var t = En();
      var s = dt.identifierPrefix;
      if (Ge) {
        var o = zn;
        var u = Bn;
        o = (u & ~(1 << 32 - hn(u) - 1)).toString(32) + o;
        s = ":" + s + "R" + o;
        o = Ra++;
        if (o > 0) {
          s += "H" + o.toString(32);
        }
        s += ":";
      } else {
        o = N0++;
        s = ":" + s + "r" + o.toString(32) + ":";
      }
      return t.memoizedState = s;
    },
    unstable_isNewReconciler: false
  };
  var P0 = {
    readContext: Zt,
    useCallback: Ch,
    useContext: Zt,
    useEffect: oc,
    useImperativeHandle: Sh,
    useInsertionEffect: jh,
    useLayoutEffect: kh,
    useMemo: Eh,
    useReducer: ac,
    useRef: xh,
    useState: function () {
      return ac(Ia);
    },
    useDebugValue: lc,
    useDeferredValue: function (t) {
      var s = en();
      return Nh(s, lt.memoizedState, t);
    },
    useTransition: function () {
      var t = ac(Ia)[0];
      var s = en().memoizedState;
      return [t, s];
    },
    useMutableSource: hh,
    useSyncExternalStore: fh,
    useId: Th,
    unstable_isNewReconciler: false
  };
  var O0 = {
    readContext: Zt,
    useCallback: Ch,
    useContext: Zt,
    useEffect: oc,
    useImperativeHandle: Sh,
    useInsertionEffect: jh,
    useLayoutEffect: kh,
    useMemo: Eh,
    useReducer: ic,
    useRef: xh,
    useState: function () {
      return ic(Ia);
    },
    useDebugValue: lc,
    useDeferredValue: function (t) {
      var s = en();
      if (lt === null) {
        return s.memoizedState = t;
      } else {
        return Nh(s, lt.memoizedState, t);
      }
    },
    useTransition: function () {
      var t = ic(Ia)[0];
      var s = en().memoizedState;
      return [t, s];
    },
    useMutableSource: hh,
    useSyncExternalStore: fh,
    useId: Th,
    unstable_isNewReconciler: false
  };
  function pn(t, s) {
    if (t && t.defaultProps) {
      s = te({}, s);
      t = t.defaultProps;
      for (var o in t) {
        if (s[o] === undefined) {
          s[o] = t[o];
        }
      }
      return s;
    }
    return s;
  }
  function cc(t, s, o, u) {
    s = t.memoizedState;
    o = o(u, s);
    o = o == null ? s : te({}, s, o);
    t.memoizedState = o;
    if (t.lanes === 0) {
      t.updateQueue.baseState = o;
    }
  }
  var Zi = {
    isMounted: function (t) {
      if (t = t._reactInternals) {
        return zr(t) === t;
      } else {
        return false;
      }
    },
    enqueueSetState: function (t, s, o) {
      t = t._reactInternals;
      var u = Tt();
      var f = Sr(t);
      var p = qn(u, f);
      p.payload = s;
      if (o != null) {
        p.callback = o;
      }
      s = _r(t, p, f);
      if (s !== null) {
        yn(s, t, f, u);
        Hi(s, t, f);
      }
    },
    enqueueReplaceState: function (t, s, o) {
      t = t._reactInternals;
      var u = Tt();
      var f = Sr(t);
      var p = qn(u, f);
      p.tag = 1;
      p.payload = s;
      if (o != null) {
        p.callback = o;
      }
      s = _r(t, p, f);
      if (s !== null) {
        yn(s, t, f, u);
        Hi(s, t, f);
      }
    },
    enqueueForceUpdate: function (t, s) {
      t = t._reactInternals;
      var o = Tt();
      var u = Sr(t);
      var f = qn(o, u);
      f.tag = 2;
      if (s != null) {
        f.callback = s;
      }
      s = _r(t, f, u);
      if (s !== null) {
        yn(s, t, u, o);
        Hi(s, t, u);
      }
    }
  };
  function Ph(t, s, o, u, f, p, x) {
    t = t.stateNode;
    if (typeof t.shouldComponentUpdate == "function") {
      return t.shouldComponentUpdate(u, p, x);
    } else if (s.prototype && s.prototype.isPureReactComponent) {
      return !ya(o, u) || !ya(f, p);
    } else {
      return true;
    }
  }
  function Oh(t, s, o) {
    var u = false;
    var f = yr;
    var p = s.contextType;
    if (typeof p == "object" && p !== null) {
      p = Zt(p);
    } else {
      f = It(s) ? qr : wt.current;
      u = s.contextTypes;
      p = (u = u != null) ? Ss(t, f) : yr;
    }
    s = new s(o, p);
    t.memoizedState = s.state ?? null;
    s.updater = Zi;
    t.stateNode = s;
    s._reactInternals = t;
    if (u) {
      t = t.stateNode;
      t.__reactInternalMemoizedUnmaskedChildContext = f;
      t.__reactInternalMemoizedMaskedChildContext = p;
    }
    return s;
  }
  function $h(t, s, o, u) {
    t = s.state;
    if (typeof s.componentWillReceiveProps == "function") {
      s.componentWillReceiveProps(o, u);
    }
    if (typeof s.UNSAFE_componentWillReceiveProps == "function") {
      s.UNSAFE_componentWillReceiveProps(o, u);
    }
    if (s.state !== t) {
      Zi.enqueueReplaceState(s, s.state, null);
    }
  }
  function uc(t, s, o, u) {
    var f = t.stateNode;
    f.props = o;
    f.state = t.memoizedState;
    f.refs = {};
    Ql(t);
    var p = s.contextType;
    if (typeof p == "object" && p !== null) {
      f.context = Zt(p);
    } else {
      p = It(s) ? qr : wt.current;
      f.context = Ss(t, p);
    }
    f.state = t.memoizedState;
    p = s.getDerivedStateFromProps;
    if (typeof p == "function") {
      cc(t, s, p, o);
      f.state = t.memoizedState;
    }
    if (typeof s.getDerivedStateFromProps != "function" && typeof f.getSnapshotBeforeUpdate != "function" && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function")) {
      s = f.state;
      if (typeof f.componentWillMount == "function") {
        f.componentWillMount();
      }
      if (typeof f.UNSAFE_componentWillMount == "function") {
        f.UNSAFE_componentWillMount();
      }
      if (s !== f.state) {
        Zi.enqueueReplaceState(f, f.state, null);
      }
      Vi(t, o, f, u);
      f.state = t.memoizedState;
    }
    if (typeof f.componentDidMount == "function") {
      t.flags |= 4194308;
    }
  }
  function Ps(t, s) {
    try {
      var o = "";
      var u = s;
      do {
        o += me(u);
        u = u.return;
      } while (u);
      var f = o;
    } catch (p) {
      f = `
Error generating stack: ${p.message}
${p.stack}`;
    }
    return {
      value: t,
      source: s,
      stack: f,
      digest: null
    };
  }
  function dc(t, s, o) {
    return {
      value: t,
      source: null,
      stack: o ?? null,
      digest: s ?? null
    };
  }
  function hc(t, s) {
    try {
      console.error(s.value);
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  var $0 = typeof WeakMap == "function" ? WeakMap : Map;
  function Lh(t, s, o) {
    o = qn(-1, o);
    o.tag = 3;
    o.payload = {
      element: null
    };
    var u = s.value;
    o.callback = function () {
      if (!io) {
        io = true;
        Ec = u;
      }
      hc(t, s);
    };
    return o;
  }
  function Dh(t, s, o) {
    o = qn(-1, o);
    o.tag = 3;
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = s.value;
      o.payload = function () {
        return u(f);
      };
      o.callback = function () {
        hc(t, s);
      };
    }
    var p = t.stateNode;
    if (p !== null && typeof p.componentDidCatch == "function") {
      o.callback = function () {
        hc(t, s);
        if (typeof u != "function") {
          if (kr === null) {
            kr = new Set([this]);
          } else {
            kr.add(this);
          }
        }
        var x = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: x !== null ? x : ""
        });
      };
    }
    return o;
  }
  function Mh(t, s, o) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new $0();
      var f = new Set();
      u.set(s, f);
    } else {
      f = u.get(s);
      if (f === undefined) {
        f = new Set();
        u.set(s, f);
      }
    }
    if (!f.has(o)) {
      f.add(o);
      t = J0.bind(null, t, s, o);
      s.then(t, t);
    }
  }
  function Uh(t) {
    do {
      var s;
      if (s = t.tag === 13) {
        s = t.memoizedState;
        s = s !== null ? s.dehydrated !== null : true;
      }
      if (s) {
        return t;
      }
      t = t.return;
    } while (t !== null);
    return null;
  }
  function Fh(t, s, o, u, f) {
    if ((t.mode & 1) === 0) {
      if (t === s) {
        t.flags |= 65536;
      } else {
        t.flags |= 128;
        o.flags |= 131072;
        o.flags &= -52805;
        if (o.tag === 1) {
          if (o.alternate === null) {
            o.tag = 17;
          } else {
            s = qn(-1, 1);
            s.tag = 2;
            _r(o, s, 1);
          }
        }
        o.lanes |= 1;
      }
      return t;
    } else {
      t.flags |= 65536;
      t.lanes = f;
      return t;
    }
  }
  var L0 = W.ReactCurrentOwner;
  var At = false;
  function Nt(t, s, o, u) {
    s.child = t === null ? ih(s, null, o, u) : Ts(s, t.child, o, u);
  }
  function Bh(t, s, o, u, f) {
    o = o.render;
    var p = s.ref;
    Is(s, f);
    u = rc(t, s, o, u, p, f);
    o = sc();
    if (t !== null && !At) {
      s.updateQueue = t.updateQueue;
      s.flags &= -2053;
      t.lanes &= ~f;
      return Hn(t, s, f);
    } else {
      if (Ge && o) {
        Fl(s);
      }
      s.flags |= 1;
      Nt(t, s, u, f);
      return s.child;
    }
  }
  function zh(t, s, o, u, f) {
    if (t === null) {
      var p = o.type;
      if (typeof p == "function" && !Oc(p) && p.defaultProps === undefined && o.compare === null && o.defaultProps === undefined) {
        s.tag = 15;
        s.type = p;
        return Wh(t, s, p, u, f);
      } else {
        t = fo(o.type, null, u, s, s.mode, f);
        t.ref = s.ref;
        t.return = s;
        return s.child = t;
      }
    }
    p = t.child;
    if ((t.lanes & f) === 0) {
      var x = p.memoizedProps;
      o = o.compare;
      o = o !== null ? o : ya;
      if (o(x, u) && t.ref === s.ref) {
        return Hn(t, s, f);
      }
    }
    s.flags |= 1;
    t = Er(p, u);
    t.ref = s.ref;
    t.return = s;
    return s.child = t;
  }
  function Wh(t, s, o, u, f) {
    if (t !== null) {
      var p = t.memoizedProps;
      if (ya(p, u) && t.ref === s.ref) {
        At = false;
        s.pendingProps = u = p;
        if ((t.lanes & f) !== 0) {
          if ((t.flags & 131072) !== 0) {
            At = true;
          }
        } else {
          s.lanes = t.lanes;
          return Hn(t, s, f);
        }
      }
    }
    return fc(t, s, o, u, f);
  }
  function qh(t, s, o) {
    var u = s.pendingProps;
    var f = u.children;
    var p = t !== null ? t.memoizedState : null;
    if (u.mode === "hidden") {
      if ((s.mode & 1) === 0) {
        s.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        };
        ze($s, qt);
        qt |= o;
      } else {
        if ((o & 1073741824) === 0) {
          t = p !== null ? p.baseLanes | o : o;
          s.lanes = s.childLanes = 1073741824;
          s.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null
          };
          s.updateQueue = null;
          ze($s, qt);
          qt |= t;
          return null;
        }
        s.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        };
        u = p !== null ? p.baseLanes : o;
        ze($s, qt);
        qt |= u;
      }
    } else {
      if (p !== null) {
        u = p.baseLanes | o;
        s.memoizedState = null;
      } else {
        u = o;
      }
      ze($s, qt);
      qt |= u;
    }
    Nt(t, s, f, o);
    return s.child;
  }
  function Hh(t, s) {
    var o = s.ref;
    if (t === null && o !== null || t !== null && t.ref !== o) {
      s.flags |= 512;
      s.flags |= 2097152;
    }
  }
  function fc(t, s, o, u, f) {
    var p = It(o) ? qr : wt.current;
    p = Ss(s, p);
    Is(s, f);
    o = rc(t, s, o, u, p, f);
    u = sc();
    if (t !== null && !At) {
      s.updateQueue = t.updateQueue;
      s.flags &= -2053;
      t.lanes &= ~f;
      return Hn(t, s, f);
    } else {
      if (Ge && u) {
        Fl(s);
      }
      s.flags |= 1;
      Nt(t, s, o, f);
      return s.child;
    }
  }
  function Vh(t, s, o, u, f) {
    if (It(o)) {
      var p = true;
      Di(s);
    } else {
      p = false;
    }
    Is(s, f);
    if (s.stateNode === null) {
      to(t, s);
      Oh(s, o, u);
      uc(s, o, u, f);
      u = true;
    } else if (t === null) {
      var x = s.stateNode;
      var S = s.memoizedProps;
      x.props = S;
      var E = x.context;
      var M = o.contextType;
      if (typeof M == "object" && M !== null) {
        M = Zt(M);
      } else {
        M = It(o) ? qr : wt.current;
        M = Ss(s, M);
      }
      var Q = o.getDerivedStateFromProps;
      var Z = typeof Q == "function" || typeof x.getSnapshotBeforeUpdate == "function";
      if (!Z && (typeof x.UNSAFE_componentWillReceiveProps == "function" || typeof x.componentWillReceiveProps == "function")) {
        if (S !== u || E !== M) {
          $h(s, x, u, M);
        }
      }
      xr = false;
      var J = s.memoizedState;
      x.state = J;
      Vi(s, u, x, f);
      E = s.memoizedState;
      if (S !== u || J !== E || Rt.current || xr) {
        if (typeof Q == "function") {
          cc(s, o, Q, u);
          E = s.memoizedState;
        }
        if (S = xr || Ph(s, o, S, u, J, E, M)) {
          if (!Z && (typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function")) {
            if (typeof x.componentWillMount == "function") {
              x.componentWillMount();
            }
            if (typeof x.UNSAFE_componentWillMount == "function") {
              x.UNSAFE_componentWillMount();
            }
          }
          if (typeof x.componentDidMount == "function") {
            s.flags |= 4194308;
          }
        } else {
          if (typeof x.componentDidMount == "function") {
            s.flags |= 4194308;
          }
          s.memoizedProps = u;
          s.memoizedState = E;
        }
        x.props = u;
        x.state = E;
        x.context = M;
        u = S;
      } else {
        if (typeof x.componentDidMount == "function") {
          s.flags |= 4194308;
        }
        u = false;
      }
    } else {
      x = s.stateNode;
      lh(t, s);
      S = s.memoizedProps;
      M = s.type === s.elementType ? S : pn(s.type, S);
      x.props = M;
      Z = s.pendingProps;
      J = x.context;
      E = o.contextType;
      if (typeof E == "object" && E !== null) {
        E = Zt(E);
      } else {
        E = It(o) ? qr : wt.current;
        E = Ss(s, E);
      }
      var ce = o.getDerivedStateFromProps;
      if (!(Q = typeof ce == "function" || typeof x.getSnapshotBeforeUpdate == "function") && (typeof x.UNSAFE_componentWillReceiveProps == "function" || typeof x.componentWillReceiveProps == "function")) {
        if (S !== Z || J !== E) {
          $h(s, x, u, E);
        }
      }
      xr = false;
      J = s.memoizedState;
      x.state = J;
      Vi(s, u, x, f);
      var fe = s.memoizedState;
      if (S !== Z || J !== fe || Rt.current || xr) {
        if (typeof ce == "function") {
          cc(s, o, ce, u);
          fe = s.memoizedState;
        }
        if (M = xr || Ph(s, o, M, u, J, fe, E) || false) {
          if (!Q && (typeof x.UNSAFE_componentWillUpdate == "function" || typeof x.componentWillUpdate == "function")) {
            if (typeof x.componentWillUpdate == "function") {
              x.componentWillUpdate(u, fe, E);
            }
            if (typeof x.UNSAFE_componentWillUpdate == "function") {
              x.UNSAFE_componentWillUpdate(u, fe, E);
            }
          }
          if (typeof x.componentDidUpdate == "function") {
            s.flags |= 4;
          }
          if (typeof x.getSnapshotBeforeUpdate == "function") {
            s.flags |= 1024;
          }
        } else {
          if (typeof x.componentDidUpdate == "function" && (S !== t.memoizedProps || J !== t.memoizedState)) {
            s.flags |= 4;
          }
          if (typeof x.getSnapshotBeforeUpdate == "function" && (S !== t.memoizedProps || J !== t.memoizedState)) {
            s.flags |= 1024;
          }
          s.memoizedProps = u;
          s.memoizedState = fe;
        }
        x.props = u;
        x.state = fe;
        x.context = E;
        u = M;
      } else {
        if (typeof x.componentDidUpdate == "function" && (S !== t.memoizedProps || J !== t.memoizedState)) {
          s.flags |= 4;
        }
        if (typeof x.getSnapshotBeforeUpdate == "function" && (S !== t.memoizedProps || J !== t.memoizedState)) {
          s.flags |= 1024;
        }
        u = false;
      }
    }
    return mc(t, s, o, u, p, f);
  }
  function mc(t, s, o, u, f, p) {
    Hh(t, s);
    var x = (s.flags & 128) !== 0;
    if (!u && !x) {
      if (f) {
        Yd(s, o, false);
      }
      return Hn(t, s, p);
    }
    u = s.stateNode;
    L0.current = s;
    var S = x && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    s.flags |= 1;
    if (t !== null && x) {
      s.child = Ts(s, t.child, null, p);
      s.child = Ts(s, null, S, p);
    } else {
      Nt(t, s, S, p);
    }
    s.memoizedState = u.state;
    if (f) {
      Yd(s, o, true);
    }
    return s.child;
  }
  function Kh(t) {
    var s = t.stateNode;
    if (s.pendingContext) {
      Jd(t, s.pendingContext, s.pendingContext !== s.context);
    } else if (s.context) {
      Jd(t, s.context, false);
    }
    Yl(t, s.containerInfo);
  }
  function Gh(t, s, o, u, f) {
    Ns();
    ql(f);
    s.flags |= 256;
    Nt(t, s, o, u);
    return s.child;
  }
  var pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function gc(t) {
    return {
      baseLanes: t,
      cachePool: null,
      transitions: null
    };
  }
  function Jh(t, s, o) {
    var u = s.pendingProps;
    var f = Qe.current;
    var p = false;
    var x = (s.flags & 128) !== 0;
    var S;
    if (!(S = x)) {
      S = t !== null && t.memoizedState === null ? false : (f & 2) !== 0;
    }
    if (S) {
      p = true;
      s.flags &= -129;
    } else if (t === null || t.memoizedState !== null) {
      f |= 1;
    }
    ze(Qe, f & 1);
    if (t === null) {
      Wl(s);
      t = s.memoizedState;
      if (t !== null && (t = t.dehydrated, t !== null)) {
        if ((s.mode & 1) === 0) {
          s.lanes = 1;
        } else if (t.data === "$!") {
          s.lanes = 8;
        } else {
          s.lanes = 1073741824;
        }
        return null;
      } else {
        x = u.children;
        t = u.fallback;
        if (p) {
          u = s.mode;
          p = s.child;
          x = {
            mode: "hidden",
            children: x
          };
          if ((u & 1) === 0 && p !== null) {
            p.childLanes = 0;
            p.pendingProps = x;
          } else {
            p = mo(x, u, 0, null);
          }
          t = es(t, u, o, null);
          p.return = s;
          t.return = s;
          p.sibling = t;
          s.child = p;
          s.child.memoizedState = gc(o);
          s.memoizedState = pc;
          return t;
        } else {
          return vc(s, x);
        }
      }
    }
    f = t.memoizedState;
    if (f !== null && (S = f.dehydrated, S !== null)) {
      return D0(t, s, x, u, S, f, o);
    }
    if (p) {
      p = u.fallback;
      x = s.mode;
      f = t.child;
      S = f.sibling;
      var E = {
        mode: "hidden",
        children: u.children
      };
      if ((x & 1) === 0 && s.child !== f) {
        u = s.child;
        u.childLanes = 0;
        u.pendingProps = E;
        s.deletions = null;
      } else {
        u = Er(f, E);
        u.subtreeFlags = f.subtreeFlags & 14680064;
      }
      if (S !== null) {
        p = Er(S, p);
      } else {
        p = es(p, x, o, null);
        p.flags |= 2;
      }
      p.return = s;
      u.return = s;
      u.sibling = p;
      s.child = u;
      u = p;
      p = s.child;
      x = t.child.memoizedState;
      x = x === null ? gc(o) : {
        baseLanes: x.baseLanes | o,
        cachePool: null,
        transitions: x.transitions
      };
      p.memoizedState = x;
      p.childLanes = t.childLanes & ~o;
      s.memoizedState = pc;
      return u;
    }
    p = t.child;
    t = p.sibling;
    u = Er(p, {
      mode: "visible",
      children: u.children
    });
    if ((s.mode & 1) === 0) {
      u.lanes = o;
    }
    u.return = s;
    u.sibling = null;
    if (t !== null) {
      o = s.deletions;
      if (o === null) {
        s.deletions = [t];
        s.flags |= 16;
      } else {
        o.push(t);
      }
    }
    s.child = u;
    s.memoizedState = null;
    return u;
  }
  function vc(t, s) {
    s = mo({
      mode: "visible",
      children: s
    }, t.mode, 0, null);
    s.return = t;
    return t.child = s;
  }
  function eo(t, s, o, u) {
    if (u !== null) {
      ql(u);
    }
    Ts(s, t.child, null, o);
    t = vc(s, s.pendingProps.children);
    t.flags |= 2;
    s.memoizedState = null;
    return t;
  }
  function D0(t, s, o, u, f, p, x) {
    if (o) {
      if (s.flags & 256) {
        s.flags &= -257;
        u = dc(Error(r(422)));
        return eo(t, s, x, u);
      } else if (s.memoizedState !== null) {
        s.child = t.child;
        s.flags |= 128;
        return null;
      } else {
        p = u.fallback;
        f = s.mode;
        u = mo({
          mode: "visible",
          children: u.children
        }, f, 0, null);
        p = es(p, f, x, null);
        p.flags |= 2;
        u.return = s;
        p.return = s;
        u.sibling = p;
        s.child = u;
        if ((s.mode & 1) !== 0) {
          Ts(s, t.child, null, x);
        }
        s.child.memoizedState = gc(x);
        s.memoizedState = pc;
        return p;
      }
    }
    if ((s.mode & 1) === 0) {
      return eo(t, s, x, null);
    }
    if (f.data === "$!") {
      u = f.nextSibling && f.nextSibling.dataset;
      if (u) {
        var S = u.dgst;
      }
      u = S;
      p = Error(r(419));
      u = dc(p, u, undefined);
      return eo(t, s, x, u);
    }
    S = (x & t.childLanes) !== 0;
    if (At || S) {
      u = dt;
      if (u !== null) {
        switch (x & -x) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
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
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = (f & (u.suspendedLanes | x)) !== 0 ? 0 : f;
        if (f !== 0 && f !== p.retryLane) {
          p.retryLane = f;
          Wn(t, f);
          yn(u, t, f, -1);
        }
      }
      Pc();
      u = dc(Error(r(421)));
      return eo(t, s, x, u);
    }
    if (f.data === "$?") {
      s.flags |= 128;
      s.child = t.child;
      s = Q0.bind(null, t);
      f._reactRetry = s;
      return null;
    } else {
      t = p.treeContext;
      Wt = gr(f.nextSibling);
      zt = s;
      Ge = true;
      mn = null;
      if (t !== null) {
        Yt[Xt++] = Bn;
        Yt[Xt++] = zn;
        Yt[Xt++] = Hr;
        Bn = t.id;
        zn = t.overflow;
        Hr = s;
      }
      s = vc(s, u.children);
      s.flags |= 4096;
      return s;
    }
  }
  function Qh(t, s, o) {
    t.lanes |= s;
    var u = t.alternate;
    if (u !== null) {
      u.lanes |= s;
    }
    Gl(t.return, s, o);
  }
  function yc(t, s, o, u, f) {
    var p = t.memoizedState;
    if (p === null) {
      t.memoizedState = {
        isBackwards: s,
        rendering: null,
        renderingStartTime: 0,
        last: u,
        tail: o,
        tailMode: f
      };
    } else {
      p.isBackwards = s;
      p.rendering = null;
      p.renderingStartTime = 0;
      p.last = u;
      p.tail = o;
      p.tailMode = f;
    }
  }
  function Yh(t, s, o) {
    var u = s.pendingProps;
    var f = u.revealOrder;
    var p = u.tail;
    Nt(t, s, u.children, o);
    u = Qe.current;
    if ((u & 2) !== 0) {
      u = u & 1 | 2;
      s.flags |= 128;
    } else {
      if (t !== null && (t.flags & 128) !== 0) {
        e: for (t = s.child; t !== null;) {
          if (t.tag === 13) {
            if (t.memoizedState !== null) {
              Qh(t, o, s);
            }
          } else if (t.tag === 19) {
            Qh(t, o, s);
          } else if (t.child !== null) {
            t.child.return = t;
            t = t.child;
            continue;
          }
          if (t === s) {
            break e;
          }
          while (t.sibling === null) {
            if (t.return === null || t.return === s) {
              break e;
            }
            t = t.return;
          }
          t.sibling.return = t.return;
          t = t.sibling;
        }
      }
      u &= 1;
    }
    ze(Qe, u);
    if ((s.mode & 1) === 0) {
      s.memoizedState = null;
    } else {
      switch (f) {
        case "forwards":
          o = s.child;
          f = null;
          while (o !== null) {
            t = o.alternate;
            if (t !== null && Ki(t) === null) {
              f = o;
            }
            o = o.sibling;
          }
          o = f;
          if (o === null) {
            f = s.child;
            s.child = null;
          } else {
            f = o.sibling;
            o.sibling = null;
          }
          yc(s, false, f, o, p);
          break;
        case "backwards":
          o = null;
          f = s.child;
          s.child = null;
          while (f !== null) {
            t = f.alternate;
            if (t !== null && Ki(t) === null) {
              s.child = f;
              break;
            }
            t = f.sibling;
            f.sibling = o;
            o = f;
            f = t;
          }
          yc(s, true, o, null, p);
          break;
        case "together":
          yc(s, false, null, null, undefined);
          break;
        default:
          s.memoizedState = null;
      }
    }
    return s.child;
  }
  function to(t, s) {
    if ((s.mode & 1) === 0 && t !== null) {
      t.alternate = null;
      s.alternate = null;
      s.flags |= 2;
    }
  }
  function Hn(t, s, o) {
    if (t !== null) {
      s.dependencies = t.dependencies;
    }
    Qr |= s.lanes;
    if ((o & s.childLanes) === 0) {
      return null;
    }
    if (t !== null && s.child !== t.child) {
      throw Error(r(153));
    }
    if (s.child !== null) {
      t = s.child;
      o = Er(t, t.pendingProps);
      s.child = o;
      o.return = s;
      while (t.sibling !== null) {
        t = t.sibling;
        o = o.sibling = Er(t, t.pendingProps);
        o.return = s;
      }
      o.sibling = null;
    }
    return s.child;
  }
  function M0(t, s, o) {
    switch (s.tag) {
      case 3:
        Kh(s);
        Ns();
        break;
      case 5:
        dh(s);
        break;
      case 1:
        if (It(s.type)) {
          Di(s);
        }
        break;
      case 4:
        Yl(s, s.stateNode.containerInfo);
        break;
      case 10:
        var u = s.type._context;
        var f = s.memoizedProps.value;
        ze(Wi, u._currentValue);
        u._currentValue = f;
        break;
      case 13:
        u = s.memoizedState;
        if (u !== null) {
          if (u.dehydrated !== null) {
            ze(Qe, Qe.current & 1);
            s.flags |= 128;
            return null;
          } else if ((o & s.child.childLanes) !== 0) {
            return Jh(t, s, o);
          } else {
            ze(Qe, Qe.current & 1);
            t = Hn(t, s, o);
            if (t !== null) {
              return t.sibling;
            } else {
              return null;
            }
          }
        }
        ze(Qe, Qe.current & 1);
        break;
      case 19:
        u = (o & s.childLanes) !== 0;
        if ((t.flags & 128) !== 0) {
          if (u) {
            return Yh(t, s, o);
          }
          s.flags |= 128;
        }
        f = s.memoizedState;
        if (f !== null) {
          f.rendering = null;
          f.tail = null;
          f.lastEffect = null;
        }
        ze(Qe, Qe.current);
        if (u) {
          break;
        }
        return null;
      case 22:
      case 23:
        s.lanes = 0;
        return qh(t, s, o);
    }
    return Hn(t, s, o);
  }
  var Xh;
  var wc;
  var Zh;
  var ef;
  Xh = function (t, s) {
    for (var o = s.child; o !== null;) {
      if (o.tag === 5 || o.tag === 6) {
        t.appendChild(o.stateNode);
      } else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o;
        o = o.child;
        continue;
      }
      if (o === s) {
        break;
      }
      while (o.sibling === null) {
        if (o.return === null || o.return === s) {
          return;
        }
        o = o.return;
      }
      o.sibling.return = o.return;
      o = o.sibling;
    }
  };
  wc = function () {};
  Zh = function (t, s, o, u) {
    var f = t.memoizedProps;
    if (f !== u) {
      t = s.stateNode;
      Gr(Cn.current);
      var p = null;
      switch (o) {
        case "input":
          f = Ln(t, f);
          u = Ln(t, u);
          p = [];
          break;
        case "select":
          f = te({}, f, {
            value: undefined
          });
          u = te({}, u, {
            value: undefined
          });
          p = [];
          break;
        case "textarea":
          f = dn(t, f);
          u = dn(t, u);
          p = [];
          break;
        default:
          if (typeof f.onClick != "function" && typeof u.onClick == "function") {
            t.onclick = Oi;
          }
      }
      Qt(o, u);
      var x;
      o = null;
      for (M in f) {
        if (!u.hasOwnProperty(M) && f.hasOwnProperty(M) && f[M] != null) {
          if (M === "style") {
            var S = f[M];
            for (x in S) {
              if (S.hasOwnProperty(x)) {
                o ||= {};
                o[x] = "";
              }
            }
          } else if (M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus") {
            if (l.hasOwnProperty(M)) {
              p ||= [];
            } else {
              (p = p || []).push(M, null);
            }
          }
        }
      }
      for (M in u) {
        var E = u[M];
        S = f != null ? f[M] : undefined;
        if (u.hasOwnProperty(M) && E !== S && (E != null || S != null)) {
          if (M === "style") {
            if (S) {
              for (x in S) {
                if (!!S.hasOwnProperty(x) && (!E || !E.hasOwnProperty(x))) {
                  o ||= {};
                  o[x] = "";
                }
              }
              for (x in E) {
                if (E.hasOwnProperty(x) && S[x] !== E[x]) {
                  o ||= {};
                  o[x] = E[x];
                }
              }
            } else {
              if (!o) {
                p ||= [];
                p.push(M, o);
              }
              o = E;
            }
          } else if (M === "dangerouslySetInnerHTML") {
            E = E ? E.__html : undefined;
            S = S ? S.__html : undefined;
            if (E != null && S !== E) {
              (p = p || []).push(M, E);
            }
          } else if (M === "children") {
            if (typeof E == "string" || typeof E == "number") {
              (p = p || []).push(M, "" + E);
            }
          } else if (M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning") {
            if (l.hasOwnProperty(M)) {
              if (E != null && M === "onScroll") {
                He("scroll", t);
              }
              if (!p && S !== E) {
                p = [];
              }
            } else {
              (p = p || []).push(M, E);
            }
          }
        }
      }
      if (o) {
        (p = p || []).push("style", o);
      }
      var M = p;
      if (s.updateQueue = M) {
        s.flags |= 4;
      }
    }
  };
  ef = function (t, s, o, u) {
    if (o !== u) {
      s.flags |= 4;
    }
  };
  function Pa(t, s) {
    if (!Ge) {
      switch (t.tailMode) {
        case "hidden":
          s = t.tail;
          var o = null;
          for (; s !== null;) {
            if (s.alternate !== null) {
              o = s;
            }
            s = s.sibling;
          }
          if (o === null) {
            t.tail = null;
          } else {
            o.sibling = null;
          }
          break;
        case "collapsed":
          o = t.tail;
          var u = null;
          for (; o !== null;) {
            if (o.alternate !== null) {
              u = o;
            }
            o = o.sibling;
          }
          if (u === null) {
            if (s || t.tail === null) {
              t.tail = null;
            } else {
              t.tail.sibling = null;
            }
          } else {
            u.sibling = null;
          }
      }
    }
  }
  function _t(t) {
    var s = t.alternate !== null && t.alternate.child === t.child;
    var o = 0;
    var u = 0;
    if (s) {
      for (var f = t.child; f !== null;) {
        o |= f.lanes | f.childLanes;
        u |= f.subtreeFlags & 14680064;
        u |= f.flags & 14680064;
        f.return = t;
        f = f.sibling;
      }
    } else {
      for (f = t.child; f !== null;) {
        o |= f.lanes | f.childLanes;
        u |= f.subtreeFlags;
        u |= f.flags;
        f.return = t;
        f = f.sibling;
      }
    }
    t.subtreeFlags |= u;
    t.childLanes = o;
    return s;
  }
  function U0(t, s, o) {
    var u = s.pendingProps;
    Bl(s);
    switch (s.tag) {
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
        _t(s);
        return null;
      case 1:
        if (It(s.type)) {
          Li();
        }
        _t(s);
        return null;
      case 3:
        u = s.stateNode;
        As();
        Ve(Rt);
        Ve(wt);
        ec();
        if (u.pendingContext) {
          u.context = u.pendingContext;
          u.pendingContext = null;
        }
        if (t === null || t.child === null) {
          if (Bi(s)) {
            s.flags |= 4;
          } else if (t !== null && (!t.memoizedState.isDehydrated || (s.flags & 256) !== 0)) {
            s.flags |= 1024;
            if (mn !== null) {
              Rc(mn);
              mn = null;
            }
          }
        }
        wc(t, s);
        _t(s);
        return null;
      case 5:
        Xl(s);
        var f = Gr(Na.current);
        o = s.type;
        if (t !== null && s.stateNode != null) {
          Zh(t, s, o, u, f);
          if (t.ref !== s.ref) {
            s.flags |= 512;
            s.flags |= 2097152;
          }
        } else {
          if (!u) {
            if (s.stateNode === null) {
              throw Error(r(166));
            }
            _t(s);
            return null;
          }
          t = Gr(Cn.current);
          if (Bi(s)) {
            u = s.stateNode;
            o = s.type;
            var p = s.memoizedProps;
            u[Sn] = s;
            u[ka] = p;
            t = (s.mode & 1) !== 0;
            switch (o) {
              case "dialog":
                He("cancel", u);
                He("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                He("load", u);
                break;
              case "video":
              case "audio":
                for (f = 0; f < xa.length; f++) {
                  He(xa[f], u);
                }
                break;
              case "source":
                He("error", u);
                break;
              case "img":
              case "image":
              case "link":
                He("error", u);
                He("load", u);
                break;
              case "details":
                He("toggle", u);
                break;
              case "input":
                Et(u, p);
                He("invalid", u);
                break;
              case "select":
                u._wrapperState = {
                  wasMultiple: !!p.multiple
                };
                He("invalid", u);
                break;
              case "textarea":
                F(u, p);
                He("invalid", u);
            }
            Qt(o, p);
            f = null;
            for (var x in p) {
              if (p.hasOwnProperty(x)) {
                var S = p[x];
                if (x === "children") {
                  if (typeof S == "string") {
                    if (u.textContent !== S) {
                      if (p.suppressHydrationWarning !== true) {
                        Pi(u.textContent, S, t);
                      }
                      f = ["children", S];
                    }
                  } else if (typeof S == "number" && u.textContent !== "" + S) {
                    if (p.suppressHydrationWarning !== true) {
                      Pi(u.textContent, S, t);
                    }
                    f = ["children", "" + S];
                  }
                } else if (l.hasOwnProperty(x) && S != null && x === "onScroll") {
                  He("scroll", u);
                }
              }
            }
            switch (o) {
              case "input":
                Gt(u);
                cn(u, p, true);
                break;
              case "textarea":
                Gt(u);
                he(u);
                break;
              case "select":
              case "option":
                break;
              default:
                if (typeof p.onClick == "function") {
                  u.onclick = Oi;
                }
            }
            u = f;
            s.updateQueue = u;
            if (u !== null) {
              s.flags |= 4;
            }
          } else {
            x = f.nodeType === 9 ? f : f.ownerDocument;
            if (t === "http://www.w3.org/1999/xhtml") {
              t = ye(o);
            }
            if (t === "http://www.w3.org/1999/xhtml") {
              if (o === "script") {
                t = x.createElement("div");
                t.innerHTML = "<script></script>";
                t = t.removeChild(t.firstChild);
              } else if (typeof u.is == "string") {
                t = x.createElement(o, {
                  is: u.is
                });
              } else {
                t = x.createElement(o);
                if (o === "select") {
                  x = t;
                  if (u.multiple) {
                    x.multiple = true;
                  } else if (u.size) {
                    x.size = u.size;
                  }
                }
              }
            } else {
              t = x.createElementNS(t, o);
            }
            t[Sn] = s;
            t[ka] = u;
            Xh(t, s, false, false);
            s.stateNode = t;
            e: {
              x = ms(o, u);
              switch (o) {
                case "dialog":
                  He("cancel", t);
                  He("close", t);
                  f = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  He("load", t);
                  f = u;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < xa.length; f++) {
                    He(xa[f], t);
                  }
                  f = u;
                  break;
                case "source":
                  He("error", t);
                  f = u;
                  break;
                case "img":
                case "image":
                case "link":
                  He("error", t);
                  He("load", t);
                  f = u;
                  break;
                case "details":
                  He("toggle", t);
                  f = u;
                  break;
                case "input":
                  Et(t, u);
                  f = Ln(t, u);
                  He("invalid", t);
                  break;
                case "option":
                  f = u;
                  break;
                case "select":
                  t._wrapperState = {
                    wasMultiple: !!u.multiple
                  };
                  f = te({}, u, {
                    value: undefined
                  });
                  He("invalid", t);
                  break;
                case "textarea":
                  F(t, u);
                  f = dn(t, u);
                  He("invalid", t);
                  break;
                default:
                  f = u;
              }
              Qt(o, f);
              S = f;
              for (p in S) {
                if (S.hasOwnProperty(p)) {
                  var E = S[p];
                  if (p === "style") {
                    ir(t, E);
                  } else if (p === "dangerouslySetInnerHTML") {
                    E = E ? E.__html : undefined;
                    if (E != null) {
                      Ke(t, E);
                    }
                  } else if (p === "children") {
                    if (typeof E == "string") {
                      if (o !== "textarea" || E !== "") {
                        Pe(t, E);
                      }
                    } else if (typeof E == "number") {
                      Pe(t, "" + E);
                    }
                  } else if (p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus") {
                    if (l.hasOwnProperty(p)) {
                      if (E != null && p === "onScroll") {
                        He("scroll", t);
                      }
                    } else if (E != null) {
                      R(t, p, E, x);
                    }
                  }
                }
              }
              switch (o) {
                case "input":
                  Gt(t);
                  cn(t, u, false);
                  break;
                case "textarea":
                  Gt(t);
                  he(t);
                  break;
                case "option":
                  if (u.value != null) {
                    t.setAttribute("value", "" + we(u.value));
                  }
                  break;
                case "select":
                  t.multiple = !!u.multiple;
                  p = u.value;
                  if (p != null) {
                    un(t, !!u.multiple, p, false);
                  } else if (u.defaultValue != null) {
                    un(t, !!u.multiple, u.defaultValue, true);
                  }
                  break;
                default:
                  if (typeof f.onClick == "function") {
                    t.onclick = Oi;
                  }
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = true;
                  break e;
                default:
                  u = false;
              }
            }
            if (u) {
              s.flags |= 4;
            }
          }
          if (s.ref !== null) {
            s.flags |= 512;
            s.flags |= 2097152;
          }
        }
        _t(s);
        return null;
      case 6:
        if (t && s.stateNode != null) {
          ef(t, s, t.memoizedProps, u);
        } else {
          if (typeof u != "string" && s.stateNode === null) {
            throw Error(r(166));
          }
          o = Gr(Na.current);
          Gr(Cn.current);
          if (Bi(s)) {
            u = s.stateNode;
            o = s.memoizedProps;
            u[Sn] = s;
            if ((p = u.nodeValue !== o) && (t = zt, t !== null)) {
              switch (t.tag) {
                case 3:
                  Pi(u.nodeValue, o, (t.mode & 1) !== 0);
                  break;
                case 5:
                  if (t.memoizedProps.suppressHydrationWarning !== true) {
                    Pi(u.nodeValue, o, (t.mode & 1) !== 0);
                  }
              }
            }
            if (p) {
              s.flags |= 4;
            }
          } else {
            u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u);
            u[Sn] = s;
            s.stateNode = u;
          }
        }
        _t(s);
        return null;
      case 13:
        Ve(Qe);
        u = s.memoizedState;
        if (t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (Ge && Wt !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) {
            rh();
            Ns();
            s.flags |= 98560;
            p = false;
          } else {
            p = Bi(s);
            if (u !== null && u.dehydrated !== null) {
              if (t === null) {
                if (!p) {
                  throw Error(r(318));
                }
                p = s.memoizedState;
                p = p !== null ? p.dehydrated : null;
                if (!p) {
                  throw Error(r(317));
                }
                p[Sn] = s;
              } else {
                Ns();
                if ((s.flags & 128) === 0) {
                  s.memoizedState = null;
                }
                s.flags |= 4;
              }
              _t(s);
              p = false;
            } else {
              if (mn !== null) {
                Rc(mn);
                mn = null;
              }
              p = true;
            }
          }
          if (!p) {
            if (s.flags & 65536) {
              return s;
            } else {
              return null;
            }
          }
        }
        if ((s.flags & 128) !== 0) {
          s.lanes = o;
          return s;
        } else {
          u = u !== null;
          if (u !== (t !== null && t.memoizedState !== null) && u) {
            s.child.flags |= 8192;
            if ((s.mode & 1) !== 0) {
              if (t === null || (Qe.current & 1) !== 0) {
                if (ct === 0) {
                  ct = 3;
                }
              } else {
                Pc();
              }
            }
          }
          if (s.updateQueue !== null) {
            s.flags |= 4;
          }
          _t(s);
          return null;
        }
      case 4:
        As();
        wc(t, s);
        if (t === null) {
          _a(s.stateNode.containerInfo);
        }
        _t(s);
        return null;
      case 10:
        Kl(s.type._context);
        _t(s);
        return null;
      case 17:
        if (It(s.type)) {
          Li();
        }
        _t(s);
        return null;
      case 19:
        Ve(Qe);
        p = s.memoizedState;
        if (p === null) {
          _t(s);
          return null;
        }
        u = (s.flags & 128) !== 0;
        x = p.rendering;
        if (x === null) {
          if (u) {
            Pa(p, false);
          } else {
            if (ct !== 0 || t !== null && (t.flags & 128) !== 0) {
              for (t = s.child; t !== null;) {
                x = Ki(t);
                if (x !== null) {
                  s.flags |= 128;
                  Pa(p, false);
                  u = x.updateQueue;
                  if (u !== null) {
                    s.updateQueue = u;
                    s.flags |= 4;
                  }
                  s.subtreeFlags = 0;
                  u = o;
                  o = s.child;
                  while (o !== null) {
                    p = o;
                    t = u;
                    p.flags &= 14680066;
                    x = p.alternate;
                    if (x === null) {
                      p.childLanes = 0;
                      p.lanes = t;
                      p.child = null;
                      p.subtreeFlags = 0;
                      p.memoizedProps = null;
                      p.memoizedState = null;
                      p.updateQueue = null;
                      p.dependencies = null;
                      p.stateNode = null;
                    } else {
                      p.childLanes = x.childLanes;
                      p.lanes = x.lanes;
                      p.child = x.child;
                      p.subtreeFlags = 0;
                      p.deletions = null;
                      p.memoizedProps = x.memoizedProps;
                      p.memoizedState = x.memoizedState;
                      p.updateQueue = x.updateQueue;
                      p.type = x.type;
                      t = x.dependencies;
                      p.dependencies = t === null ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                      };
                    }
                    o = o.sibling;
                  }
                  ze(Qe, Qe.current & 1 | 2);
                  return s.child;
                }
                t = t.sibling;
              }
            }
            if (p.tail !== null && nt() > Ls) {
              s.flags |= 128;
              u = true;
              Pa(p, false);
              s.lanes = 4194304;
            }
          }
        } else {
          if (!u) {
            t = Ki(x);
            if (t !== null) {
              s.flags |= 128;
              u = true;
              o = t.updateQueue;
              if (o !== null) {
                s.updateQueue = o;
                s.flags |= 4;
              }
              Pa(p, true);
              if (p.tail === null && p.tailMode === "hidden" && !x.alternate && !Ge) {
                _t(s);
                return null;
              }
            } else if (nt() * 2 - p.renderingStartTime > Ls && o !== 1073741824) {
              s.flags |= 128;
              u = true;
              Pa(p, false);
              s.lanes = 4194304;
            }
          }
          if (p.isBackwards) {
            x.sibling = s.child;
            s.child = x;
          } else {
            o = p.last;
            if (o !== null) {
              o.sibling = x;
            } else {
              s.child = x;
            }
            p.last = x;
          }
        }
        if (p.tail !== null) {
          s = p.tail;
          p.rendering = s;
          p.tail = s.sibling;
          p.renderingStartTime = nt();
          s.sibling = null;
          o = Qe.current;
          ze(Qe, u ? o & 1 | 2 : o & 1);
          return s;
        } else {
          _t(s);
          return null;
        }
      case 22:
      case 23:
        Ac();
        u = s.memoizedState !== null;
        if (t !== null && t.memoizedState !== null !== u) {
          s.flags |= 8192;
        }
        if (u && (s.mode & 1) !== 0) {
          if ((qt & 1073741824) !== 0) {
            _t(s);
            if (s.subtreeFlags & 6) {
              s.flags |= 8192;
            }
          }
        } else {
          _t(s);
        }
        return null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, s.tag));
  }
  function F0(t, s) {
    Bl(s);
    switch (s.tag) {
      case 1:
        if (It(s.type)) {
          Li();
        }
        t = s.flags;
        if (t & 65536) {
          s.flags = t & -65537 | 128;
          return s;
        } else {
          return null;
        }
      case 3:
        As();
        Ve(Rt);
        Ve(wt);
        ec();
        t = s.flags;
        if ((t & 65536) !== 0 && (t & 128) === 0) {
          s.flags = t & -65537 | 128;
          return s;
        } else {
          return null;
        }
      case 5:
        Xl(s);
        return null;
      case 13:
        Ve(Qe);
        t = s.memoizedState;
        if (t !== null && t.dehydrated !== null) {
          if (s.alternate === null) {
            throw Error(r(340));
          }
          Ns();
        }
        t = s.flags;
        if (t & 65536) {
          s.flags = t & -65537 | 128;
          return s;
        } else {
          return null;
        }
      case 19:
        Ve(Qe);
        return null;
      case 4:
        As();
        return null;
      case 10:
        Kl(s.type._context);
        return null;
      case 22:
      case 23:
        Ac();
        return null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var no = false;
  var jt = false;
  var B0 = typeof WeakSet == "function" ? WeakSet : Set;
  var de = null;
  function Os(t, s) {
    var o = t.ref;
    if (o !== null) {
      if (typeof o == "function") {
        try {
          o(null);
        } catch (u) {
          et(t, s, u);
        }
      } else {
        o.current = null;
      }
    }
  }
  function xc(t, s, o) {
    try {
      o();
    } catch (u) {
      et(t, s, u);
    }
  }
  var tf = false;
  function z0(t, s) {
    Al = ji;
    t = Pd();
    if (bl(t)) {
      if ("selectionStart" in t) {
        var o = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      } else {
        e: {
          o = (o = t.ownerDocument) && o.defaultView || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var f = u.anchorOffset;
            var p = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType;
              p.nodeType;
            } catch {
              o = null;
              break e;
            }
            var x = 0;
            var S = -1;
            var E = -1;
            var M = 0;
            var Q = 0;
            var Z = t;
            var J = null;
            t: while (true) {
              for (var ce; Z !== o || f !== 0 && Z.nodeType !== 3 || (S = x + f), Z !== p || u !== 0 && Z.nodeType !== 3 || (E = x + u), Z.nodeType === 3 && (x += Z.nodeValue.length), (ce = Z.firstChild) !== null;) {
                J = Z;
                Z = ce;
              }
              while (true) {
                if (Z === t) {
                  break t;
                }
                if (J === o && ++M === f) {
                  S = x;
                }
                if (J === p && ++Q === u) {
                  E = x;
                }
                if ((ce = Z.nextSibling) !== null) {
                  break;
                }
                Z = J;
                J = Z.parentNode;
              }
              Z = ce;
            }
            o = S === -1 || E === -1 ? null : {
              start: S,
              end: E
            };
          } else {
            o = null;
          }
        }
      }
      o = o || {
        start: 0,
        end: 0
      };
    } else {
      o = null;
    }
    Pl = {
      focusedElem: t,
      selectionRange: o
    };
    ji = false;
    de = s;
    while (de !== null) {
      s = de;
      t = s.child;
      if ((s.subtreeFlags & 1028) !== 0 && t !== null) {
        t.return = s;
        de = t;
      } else {
        while (de !== null) {
          s = de;
          try {
            var fe = s.alternate;
            if ((s.flags & 1024) !== 0) {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (fe !== null) {
                    var pe = fe.memoizedProps;
                    var rt = fe.memoizedState;
                    var P = s.stateNode;
                    var N = P.getSnapshotBeforeUpdate(s.elementType === s.type ? pe : pn(s.type, pe), rt);
                    P.__reactInternalSnapshotBeforeUpdate = N;
                  }
                  break;
                case 3:
                  var $ = s.stateNode.containerInfo;
                  if ($.nodeType === 1) {
                    $.textContent = "";
                  } else if ($.nodeType === 9 && $.documentElement) {
                    $.removeChild($.documentElement);
                  }
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
            }
          } catch (ee) {
            et(s, s.return, ee);
          }
          t = s.sibling;
          if (t !== null) {
            t.return = s.return;
            de = t;
            break;
          }
          de = s.return;
        }
      }
    }
    fe = tf;
    tf = false;
    return fe;
  }
  function Oa(t, s, o) {
    var u = s.updateQueue;
    u = u !== null ? u.lastEffect : null;
    if (u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & t) === t) {
          var p = f.destroy;
          f.destroy = undefined;
          if (p !== undefined) {
            xc(s, o, p);
          }
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function ro(t, s) {
    s = s.updateQueue;
    s = s !== null ? s.lastEffect : null;
    if (s !== null) {
      var o = s = s.next;
      do {
        if ((o.tag & t) === t) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== s);
    }
  }
  function _c(t) {
    var s = t.ref;
    if (s !== null) {
      var o = t.stateNode;
      switch (t.tag) {
        case 5:
          t = o;
          break;
        default:
          t = o;
      }
      if (typeof s == "function") {
        s(t);
      } else {
        s.current = t;
      }
    }
  }
  function nf(t) {
    var s = t.alternate;
    if (s !== null) {
      t.alternate = null;
      nf(s);
    }
    t.child = null;
    t.deletions = null;
    t.sibling = null;
    if (t.tag === 5) {
      s = t.stateNode;
      if (s !== null) {
        delete s[Sn];
        delete s[ka];
        delete s[Dl];
        delete s[b0];
        delete s[S0];
      }
    }
    t.stateNode = null;
    t.return = null;
    t.dependencies = null;
    t.memoizedProps = null;
    t.memoizedState = null;
    t.pendingProps = null;
    t.stateNode = null;
    t.updateQueue = null;
  }
  function rf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function sf(t) {
    e: while (true) {
      while (t.sibling === null) {
        if (t.return === null || rf(t.return)) {
          return null;
        }
        t = t.return;
      }
      t.sibling.return = t.return;
      t = t.sibling;
      while (t.tag !== 5 && t.tag !== 6 && t.tag !== 18) {
        if (t.flags & 2 || t.child === null || t.tag === 4) {
          continue e;
        }
        t.child.return = t;
        t = t.child;
      }
      if (!(t.flags & 2)) {
        return t.stateNode;
      }
    }
  }
  function jc(t, s, o) {
    var u = t.tag;
    if (u === 5 || u === 6) {
      t = t.stateNode;
      if (s) {
        if (o.nodeType === 8) {
          o.parentNode.insertBefore(t, s);
        } else {
          o.insertBefore(t, s);
        }
      } else {
        if (o.nodeType === 8) {
          s = o.parentNode;
          s.insertBefore(t, o);
        } else {
          s = o;
          s.appendChild(t);
        }
        o = o._reactRootContainer;
        if (o == null && s.onclick === null) {
          s.onclick = Oi;
        }
      }
    } else if (u !== 4 && (t = t.child, t !== null)) {
      jc(t, s, o);
      t = t.sibling;
      while (t !== null) {
        jc(t, s, o);
        t = t.sibling;
      }
    }
  }
  function kc(t, s, o) {
    var u = t.tag;
    if (u === 5 || u === 6) {
      t = t.stateNode;
      if (s) {
        o.insertBefore(t, s);
      } else {
        o.appendChild(t);
      }
    } else if (u !== 4 && (t = t.child, t !== null)) {
      kc(t, s, o);
      t = t.sibling;
      while (t !== null) {
        kc(t, s, o);
        t = t.sibling;
      }
    }
  }
  var pt = null;
  var gn = false;
  function jr(t, s, o) {
    for (o = o.child; o !== null;) {
      af(t, s, o);
      o = o.sibling;
    }
  }
  function af(t, s, o) {
    if (bn && typeof bn.onCommitFiberUnmount == "function") {
      try {
        bn.onCommitFiberUnmount(gi, o);
      } catch {}
    }
    switch (o.tag) {
      case 5:
        if (!jt) {
          Os(o, s);
        }
      case 6:
        var u = pt;
        var f = gn;
        pt = null;
        jr(t, s, o);
        pt = u;
        gn = f;
        if (pt !== null) {
          if (gn) {
            t = pt;
            o = o.stateNode;
            if (t.nodeType === 8) {
              t.parentNode.removeChild(o);
            } else {
              t.removeChild(o);
            }
          } else {
            pt.removeChild(o.stateNode);
          }
        }
        break;
      case 18:
        if (pt !== null) {
          if (gn) {
            t = pt;
            o = o.stateNode;
            if (t.nodeType === 8) {
              Ll(t.parentNode, o);
            } else if (t.nodeType === 1) {
              Ll(t, o);
            }
            ha(t);
          } else {
            Ll(pt, o.stateNode);
          }
        }
        break;
      case 4:
        u = pt;
        f = gn;
        pt = o.stateNode.containerInfo;
        gn = true;
        jr(t, s, o);
        pt = u;
        gn = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!jt && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var p = f;
            var x = p.destroy;
            p = p.tag;
            if (x !== undefined && ((p & 2) !== 0 || (p & 4) !== 0)) {
              xc(o, s, x);
            }
            f = f.next;
          } while (f !== u);
        }
        jr(t, s, o);
        break;
      case 1:
        if (!jt && (Os(o, s), u = o.stateNode, typeof u.componentWillUnmount == "function")) {
          try {
            u.props = o.memoizedProps;
            u.state = o.memoizedState;
            u.componentWillUnmount();
          } catch (S) {
            et(o, s, S);
          }
        }
        jr(t, s, o);
        break;
      case 21:
        jr(t, s, o);
        break;
      case 22:
        if (o.mode & 1) {
          jt = (u = jt) || o.memoizedState !== null;
          jr(t, s, o);
          jt = u;
        } else {
          jr(t, s, o);
        }
        break;
      default:
        jr(t, s, o);
    }
  }
  function of(t) {
    var s = t.updateQueue;
    if (s !== null) {
      t.updateQueue = null;
      var o = t.stateNode;
      if (o === null) {
        o = t.stateNode = new B0();
      }
      s.forEach(function (u) {
        var f = Y0.bind(null, t, u);
        if (!o.has(u)) {
          o.add(u);
          u.then(f, f);
        }
      });
    }
  }
  function vn(t, s) {
    var o = s.deletions;
    if (o !== null) {
      for (var u = 0; u < o.length; u++) {
        var f = o[u];
        try {
          var p = t;
          var x = s;
          var S = x;
          e: while (S !== null) {
            switch (S.tag) {
              case 5:
                pt = S.stateNode;
                gn = false;
                break e;
              case 3:
                pt = S.stateNode.containerInfo;
                gn = true;
                break e;
              case 4:
                pt = S.stateNode.containerInfo;
                gn = true;
                break e;
            }
            S = S.return;
          }
          if (pt === null) {
            throw Error(r(160));
          }
          af(p, x, f);
          pt = null;
          gn = false;
          var E = f.alternate;
          if (E !== null) {
            E.return = null;
          }
          f.return = null;
        } catch (M) {
          et(f, s, M);
        }
      }
    }
    if (s.subtreeFlags & 12854) {
      for (s = s.child; s !== null;) {
        lf(s, t);
        s = s.sibling;
      }
    }
  }
  function lf(t, s) {
    var o = t.alternate;
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        vn(s, t);
        Nn(t);
        if (u & 4) {
          try {
            Oa(3, t, t.return);
            ro(3, t);
          } catch (pe) {
            et(t, t.return, pe);
          }
          try {
            Oa(5, t, t.return);
          } catch (pe) {
            et(t, t.return, pe);
          }
        }
        break;
      case 1:
        vn(s, t);
        Nn(t);
        if (u & 512 && o !== null) {
          Os(o, o.return);
        }
        break;
      case 5:
        vn(s, t);
        Nn(t);
        if (u & 512 && o !== null) {
          Os(o, o.return);
        }
        if (t.flags & 32) {
          var f = t.stateNode;
          try {
            Pe(f, "");
          } catch (pe) {
            et(t, t.return, pe);
          }
        }
        if (u & 4 && (f = t.stateNode, f != null)) {
          var p = t.memoizedProps;
          var x = o !== null ? o.memoizedProps : p;
          var S = t.type;
          var E = t.updateQueue;
          t.updateQueue = null;
          if (E !== null) {
            try {
              if (S === "input" && p.type === "radio" && p.name != null) {
                kn(f, p);
              }
              ms(S, x);
              var M = ms(S, p);
              for (x = 0; x < E.length; x += 2) {
                var Q = E[x];
                var Z = E[x + 1];
                if (Q === "style") {
                  ir(f, Z);
                } else if (Q === "dangerouslySetInnerHTML") {
                  Ke(f, Z);
                } else if (Q === "children") {
                  Pe(f, Z);
                } else {
                  R(f, Q, Z, M);
                }
              }
              switch (S) {
                case "input":
                  Dn(f, p);
                  break;
                case "textarea":
                  ae(f, p);
                  break;
                case "select":
                  var J = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!p.multiple;
                  var ce = p.value;
                  if (ce != null) {
                    un(f, !!p.multiple, ce, false);
                  } else if (J !== !!p.multiple) {
                    if (p.defaultValue != null) {
                      un(f, !!p.multiple, p.defaultValue, true);
                    } else {
                      un(f, !!p.multiple, p.multiple ? [] : "", false);
                    }
                  }
              }
              f[ka] = p;
            } catch (pe) {
              et(t, t.return, pe);
            }
          }
        }
        break;
      case 6:
        vn(s, t);
        Nn(t);
        if (u & 4) {
          if (t.stateNode === null) {
            throw Error(r(162));
          }
          f = t.stateNode;
          p = t.memoizedProps;
          try {
            f.nodeValue = p;
          } catch (pe) {
            et(t, t.return, pe);
          }
        }
        break;
      case 3:
        vn(s, t);
        Nn(t);
        if (u & 4 && o !== null && o.memoizedState.isDehydrated) {
          try {
            ha(s.containerInfo);
          } catch (pe) {
            et(t, t.return, pe);
          }
        }
        break;
      case 4:
        vn(s, t);
        Nn(t);
        break;
      case 13:
        vn(s, t);
        Nn(t);
        f = t.child;
        if (f.flags & 8192) {
          p = f.memoizedState !== null;
          f.stateNode.isHidden = p;
          if (!!p && (f.alternate === null || f.alternate.memoizedState === null)) {
            Cc = nt();
          }
        }
        if (u & 4) {
          of(t);
        }
        break;
      case 22:
        Q = o !== null && o.memoizedState !== null;
        if (t.mode & 1) {
          jt = (M = jt) || Q;
          vn(s, t);
          jt = M;
        } else {
          vn(s, t);
        }
        Nn(t);
        if (u & 8192) {
          M = t.memoizedState !== null;
          if ((t.stateNode.isHidden = M) && !Q && (t.mode & 1) !== 0) {
            de = t;
            Q = t.child;
            while (Q !== null) {
              for (Z = de = Q; de !== null;) {
                J = de;
                ce = J.child;
                switch (J.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Oa(4, J, J.return);
                    break;
                  case 1:
                    Os(J, J.return);
                    var fe = J.stateNode;
                    if (typeof fe.componentWillUnmount == "function") {
                      u = J;
                      o = J.return;
                      try {
                        s = u;
                        fe.props = s.memoizedProps;
                        fe.state = s.memoizedState;
                        fe.componentWillUnmount();
                      } catch (pe) {
                        et(u, o, pe);
                      }
                    }
                    break;
                  case 5:
                    Os(J, J.return);
                    break;
                  case 22:
                    if (J.memoizedState !== null) {
                      df(Z);
                      continue;
                    }
                }
                if (ce !== null) {
                  ce.return = J;
                  de = ce;
                } else {
                  df(Z);
                }
              }
              Q = Q.sibling;
            }
          }
          Q = null;
          Z = t;
          e: while (true) {
            if (Z.tag === 5) {
              if (Q === null) {
                Q = Z;
                try {
                  f = Z.stateNode;
                  if (M) {
                    p = f.style;
                    if (typeof p.setProperty == "function") {
                      p.setProperty("display", "none", "important");
                    } else {
                      p.display = "none";
                    }
                  } else {
                    S = Z.stateNode;
                    E = Z.memoizedProps.style;
                    x = E != null && E.hasOwnProperty("display") ? E.display : null;
                    S.style.display = Br("display", x);
                  }
                } catch (pe) {
                  et(t, t.return, pe);
                }
              }
            } else if (Z.tag === 6) {
              if (Q === null) {
                try {
                  Z.stateNode.nodeValue = M ? "" : Z.memoizedProps;
                } catch (pe) {
                  et(t, t.return, pe);
                }
              }
            } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === t) && Z.child !== null) {
              Z.child.return = Z;
              Z = Z.child;
              continue;
            }
            if (Z === t) {
              break e;
            }
            while (Z.sibling === null) {
              if (Z.return === null || Z.return === t) {
                break e;
              }
              if (Q === Z) {
                Q = null;
              }
              Z = Z.return;
            }
            if (Q === Z) {
              Q = null;
            }
            Z.sibling.return = Z.return;
            Z = Z.sibling;
          }
        }
        break;
      case 19:
        vn(s, t);
        Nn(t);
        if (u & 4) {
          of(t);
        }
        break;
      case 21:
        break;
      default:
        vn(s, t);
        Nn(t);
    }
  }
  function Nn(t) {
    var s = t.flags;
    if (s & 2) {
      try {
        e: {
          for (var o = t.return; o !== null;) {
            if (rf(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(r(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            if (u.flags & 32) {
              Pe(f, "");
              u.flags &= -33;
            }
            var p = sf(t);
            kc(t, p, f);
            break;
          case 3:
          case 4:
            var x = u.stateNode.containerInfo;
            var S = sf(t);
            jc(t, S, x);
            break;
          default:
            throw Error(r(161));
        }
      } catch (E) {
        et(t, t.return, E);
      }
      t.flags &= -3;
    }
    if (s & 4096) {
      t.flags &= -4097;
    }
  }
  function W0(t, s, o) {
    de = t;
    cf(t);
  }
  function cf(t, s, o) {
    var u = (t.mode & 1) !== 0;
    for (; de !== null;) {
      var f = de;
      var p = f.child;
      if (f.tag === 22 && u) {
        var x = f.memoizedState !== null || no;
        if (!x) {
          var S = f.alternate;
          var E = S !== null && S.memoizedState !== null || jt;
          S = no;
          var M = jt;
          no = x;
          if ((jt = E) && !M) {
            for (de = f; de !== null;) {
              x = de;
              E = x.child;
              if (x.tag === 22 && x.memoizedState !== null) {
                hf(f);
              } else if (E !== null) {
                E.return = x;
                de = E;
              } else {
                hf(f);
              }
            }
          }
          while (p !== null) {
            de = p;
            cf(p);
            p = p.sibling;
          }
          de = f;
          no = S;
          jt = M;
        }
        uf(t);
      } else if ((f.subtreeFlags & 8772) !== 0 && p !== null) {
        p.return = f;
        de = p;
      } else {
        uf(t);
      }
    }
  }
  function uf(t) {
    while (de !== null) {
      var s = de;
      if ((s.flags & 8772) !== 0) {
        var o = s.alternate;
        try {
          if ((s.flags & 8772) !== 0) {
            switch (s.tag) {
              case 0:
              case 11:
              case 15:
                if (!jt) {
                  ro(5, s);
                }
                break;
              case 1:
                var u = s.stateNode;
                if (s.flags & 4 && !jt) {
                  if (o === null) {
                    u.componentDidMount();
                  } else {
                    var f = s.elementType === s.type ? o.memoizedProps : pn(s.type, o.memoizedProps);
                    u.componentDidUpdate(f, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                }
                var p = s.updateQueue;
                if (p !== null) {
                  uh(s, p, u);
                }
                break;
              case 3:
                var x = s.updateQueue;
                if (x !== null) {
                  o = null;
                  if (s.child !== null) {
                    switch (s.child.tag) {
                      case 5:
                        o = s.child.stateNode;
                        break;
                      case 1:
                        o = s.child.stateNode;
                    }
                  }
                  uh(s, x, o);
                }
                break;
              case 5:
                var S = s.stateNode;
                if (o === null && s.flags & 4) {
                  o = S;
                  var E = s.memoizedProps;
                  switch (s.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      if (E.autoFocus) {
                        o.focus();
                      }
                      break;
                    case "img":
                      if (E.src) {
                        o.src = E.src;
                      }
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
                if (s.memoizedState === null) {
                  var M = s.alternate;
                  if (M !== null) {
                    var Q = M.memoizedState;
                    if (Q !== null) {
                      var Z = Q.dehydrated;
                      if (Z !== null) {
                        ha(Z);
                      }
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
                throw Error(r(163));
            }
          }
          if (!jt) {
            if (s.flags & 512) {
              _c(s);
            }
          }
        } catch (J) {
          et(s, s.return, J);
        }
      }
      if (s === t) {
        de = null;
        break;
      }
      o = s.sibling;
      if (o !== null) {
        o.return = s.return;
        de = o;
        break;
      }
      de = s.return;
    }
  }
  function df(t) {
    while (de !== null) {
      var s = de;
      if (s === t) {
        de = null;
        break;
      }
      var o = s.sibling;
      if (o !== null) {
        o.return = s.return;
        de = o;
        break;
      }
      de = s.return;
    }
  }
  function hf(t) {
    while (de !== null) {
      var s = de;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var o = s.return;
            try {
              ro(4, s);
            } catch (E) {
              et(s, o, E);
            }
            break;
          case 1:
            var u = s.stateNode;
            if (typeof u.componentDidMount == "function") {
              var f = s.return;
              try {
                u.componentDidMount();
              } catch (E) {
                et(s, f, E);
              }
            }
            var p = s.return;
            try {
              _c(s);
            } catch (E) {
              et(s, p, E);
            }
            break;
          case 5:
            var x = s.return;
            try {
              _c(s);
            } catch (E) {
              et(s, x, E);
            }
        }
      } catch (E) {
        et(s, s.return, E);
      }
      if (s === t) {
        de = null;
        break;
      }
      var S = s.sibling;
      if (S !== null) {
        S.return = s.return;
        de = S;
        break;
      }
      de = s.return;
    }
  }
  var q0 = Math.ceil;
  var so = W.ReactCurrentDispatcher;
  var bc = W.ReactCurrentOwner;
  var tn = W.ReactCurrentBatchConfig;
  var $e = 0;
  var dt = null;
  var at = null;
  var gt = 0;
  var qt = 0;
  var $s = vr(0);
  var ct = 0;
  var $a = null;
  var Qr = 0;
  var ao = 0;
  var Sc = 0;
  var La = null;
  var Pt = null;
  var Cc = 0;
  var Ls = Infinity;
  var Vn = null;
  var io = false;
  var Ec = null;
  var kr = null;
  var oo = false;
  var br = null;
  var lo = 0;
  var Da = 0;
  var Nc = null;
  var co = -1;
  var uo = 0;
  function Tt() {
    if (($e & 6) !== 0) {
      return nt();
    } else if (co !== -1) {
      return co;
    } else {
      return co = nt();
    }
  }
  function Sr(t) {
    if ((t.mode & 1) === 0) {
      return 1;
    } else if (($e & 2) !== 0 && gt !== 0) {
      return gt & -gt;
    } else if (E0.transition !== null) {
      if (uo === 0) {
        uo = sd();
      }
      return uo;
    } else {
      t = Me;
      if (t === 0) {
        t = window.event;
        t = t === undefined ? 16 : fd(t.type);
      }
      return t;
    }
  }
  function yn(t, s, o, u) {
    if (Da > 50) {
      Da = 0;
      Nc = null;
      throw Error(r(185));
    }
    oa(t, o, u);
    if (($e & 2) === 0 || t !== dt) {
      if (t === dt) {
        if (($e & 2) === 0) {
          ao |= o;
        }
        if (ct === 4) {
          Cr(t, gt);
        }
      }
      Ot(t, u);
      if (o === 1 && $e === 0 && (s.mode & 1) === 0) {
        Ls = nt() + 500;
        if (Mi) {
          wr();
        }
      }
    }
  }
  function Ot(t, s) {
    var o = t.callbackNode;
    Eg(t, s);
    var u = wi(t, t === dt ? gt : 0);
    if (u === 0) {
      if (o !== null) {
        td(o);
      }
      t.callbackNode = null;
      t.callbackPriority = 0;
    } else {
      s = u & -u;
      if (t.callbackPriority !== s) {
        if (o != null) {
          td(o);
        }
        if (s === 1) {
          if (t.tag === 0) {
            C0(mf.bind(null, t));
          } else {
            Xd(mf.bind(null, t));
          }
          j0(function () {
            if (($e & 6) === 0) {
              wr();
            }
          });
          o = null;
        } else {
          switch (ad(u)) {
            case 1:
              o = ol;
              break;
            case 4:
              o = nd;
              break;
            case 16:
              o = pi;
              break;
            case 536870912:
              o = rd;
              break;
            default:
              o = pi;
          }
          o = jf(o, ff.bind(null, t));
        }
        t.callbackPriority = s;
        t.callbackNode = o;
      }
    }
  }
  function ff(t, s) {
    co = -1;
    uo = 0;
    if (($e & 6) !== 0) {
      throw Error(r(327));
    }
    var o = t.callbackNode;
    if (Ds() && t.callbackNode !== o) {
      return null;
    }
    var u = wi(t, t === dt ? gt : 0);
    if (u === 0) {
      return null;
    }
    if ((u & 30) !== 0 || (u & t.expiredLanes) !== 0 || s) {
      s = ho(t, u);
    } else {
      s = u;
      var f = $e;
      $e |= 2;
      var p = gf();
      if (dt !== t || gt !== s) {
        Vn = null;
        Ls = nt() + 500;
        Xr(t, s);
      }
      do {
        try {
          K0();
          break;
        } catch (S) {
          pf(t, S);
        }
      } while (true);
      Vl();
      so.current = p;
      $e = f;
      if (at !== null) {
        s = 0;
      } else {
        dt = null;
        gt = 0;
        s = ct;
      }
    }
    if (s !== 0) {
      if (s === 2) {
        f = ll(t);
        if (f !== 0) {
          u = f;
          s = Tc(t, f);
        }
      }
      if (s === 1) {
        o = $a;
        Xr(t, 0);
        Cr(t, u);
        Ot(t, nt());
        throw o;
      }
      if (s === 6) {
        Cr(t, u);
      } else {
        f = t.current.alternate;
        if ((u & 30) === 0 && !H0(f) && (s = ho(t, u), s === 2 && (p = ll(t), p !== 0 && (u = p, s = Tc(t, p))), s === 1)) {
          o = $a;
          Xr(t, 0);
          Cr(t, u);
          Ot(t, nt());
          throw o;
        }
        t.finishedWork = f;
        t.finishedLanes = u;
        switch (s) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Zr(t, Pt, Vn);
            break;
          case 3:
            Cr(t, u);
            if ((u & 130023424) === u && (s = Cc + 500 - nt(), s > 10)) {
              if (wi(t, 0) !== 0) {
                break;
              }
              f = t.suspendedLanes;
              if ((f & u) !== u) {
                Tt();
                t.pingedLanes |= t.suspendedLanes & f;
                break;
              }
              t.timeoutHandle = $l(Zr.bind(null, t, Pt, Vn), s);
              break;
            }
            Zr(t, Pt, Vn);
            break;
          case 4:
            Cr(t, u);
            if ((u & 4194240) === u) {
              break;
            }
            s = t.eventTimes;
            f = -1;
            while (u > 0) {
              var x = 31 - hn(u);
              p = 1 << x;
              x = s[x];
              if (x > f) {
                f = x;
              }
              u &= ~p;
            }
            u = f;
            u = nt() - u;
            u = (u < 120 ? 120 : u < 480 ? 480 : u < 1080 ? 1080 : u < 1920 ? 1920 : u < 3000 ? 3000 : u < 4320 ? 4320 : q0(u / 1960) * 1960) - u;
            if (u > 10) {
              t.timeoutHandle = $l(Zr.bind(null, t, Pt, Vn), u);
              break;
            }
            Zr(t, Pt, Vn);
            break;
          case 5:
            Zr(t, Pt, Vn);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    Ot(t, nt());
    if (t.callbackNode === o) {
      return ff.bind(null, t);
    } else {
      return null;
    }
  }
  function Tc(t, s) {
    var o = La;
    if (t.current.memoizedState.isDehydrated) {
      Xr(t, s).flags |= 256;
    }
    t = ho(t, s);
    if (t !== 2) {
      s = Pt;
      Pt = o;
      if (s !== null) {
        Rc(s);
      }
    }
    return t;
  }
  function Rc(t) {
    if (Pt === null) {
      Pt = t;
    } else {
      Pt.push.apply(Pt, t);
    }
  }
  function H0(t) {
    var s = t;
    for (;;) {
      if (s.flags & 16384) {
        var o = s.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) {
          for (var u = 0; u < o.length; u++) {
            var f = o[u];
            var p = f.getSnapshot;
            f = f.value;
            try {
              if (!fn(p(), f)) {
                return false;
              }
            } catch {
              return false;
            }
          }
        }
      }
      o = s.child;
      if (s.subtreeFlags & 16384 && o !== null) {
        o.return = s;
        s = o;
      } else {
        if (s === t) {
          break;
        }
        while (s.sibling === null) {
          if (s.return === null || s.return === t) {
            return true;
          }
          s = s.return;
        }
        s.sibling.return = s.return;
        s = s.sibling;
      }
    }
    return true;
  }
  function Cr(t, s) {
    s &= ~Sc;
    s &= ~ao;
    t.suspendedLanes |= s;
    t.pingedLanes &= ~s;
    t = t.expirationTimes;
    while (s > 0) {
      var o = 31 - hn(s);
      var u = 1 << o;
      t[o] = -1;
      s &= ~u;
    }
  }
  function mf(t) {
    if (($e & 6) !== 0) {
      throw Error(r(327));
    }
    Ds();
    var s = wi(t, 0);
    if ((s & 1) === 0) {
      Ot(t, nt());
      return null;
    }
    var o = ho(t, s);
    if (t.tag !== 0 && o === 2) {
      var u = ll(t);
      if (u !== 0) {
        s = u;
        o = Tc(t, u);
      }
    }
    if (o === 1) {
      o = $a;
      Xr(t, 0);
      Cr(t, s);
      Ot(t, nt());
      throw o;
    }
    if (o === 6) {
      throw Error(r(345));
    }
    t.finishedWork = t.current.alternate;
    t.finishedLanes = s;
    Zr(t, Pt, Vn);
    Ot(t, nt());
    return null;
  }
  function Ic(t, s) {
    var o = $e;
    $e |= 1;
    try {
      return t(s);
    } finally {
      $e = o;
      if ($e === 0) {
        Ls = nt() + 500;
        if (Mi) {
          wr();
        }
      }
    }
  }
  function Yr(t) {
    if (br !== null && br.tag === 0 && ($e & 6) === 0) {
      Ds();
    }
    var s = $e;
    $e |= 1;
    var o = tn.transition;
    var u = Me;
    try {
      tn.transition = null;
      Me = 1;
      if (t) {
        return t();
      }
    } finally {
      Me = u;
      tn.transition = o;
      $e = s;
      if (($e & 6) === 0) {
        wr();
      }
    }
  }
  function Ac() {
    qt = $s.current;
    Ve($s);
  }
  function Xr(t, s) {
    t.finishedWork = null;
    t.finishedLanes = 0;
    var o = t.timeoutHandle;
    if (o !== -1) {
      t.timeoutHandle = -1;
      _0(o);
    }
    if (at !== null) {
      for (o = at.return; o !== null;) {
        var u = o;
        Bl(u);
        switch (u.tag) {
          case 1:
            u = u.type.childContextTypes;
            if (u != null) {
              Li();
            }
            break;
          case 3:
            As();
            Ve(Rt);
            Ve(wt);
            ec();
            break;
          case 5:
            Xl(u);
            break;
          case 4:
            As();
            break;
          case 13:
            Ve(Qe);
            break;
          case 19:
            Ve(Qe);
            break;
          case 10:
            Kl(u.type._context);
            break;
          case 22:
          case 23:
            Ac();
        }
        o = o.return;
      }
    }
    dt = t;
    at = t = Er(t.current, null);
    gt = qt = s;
    ct = 0;
    $a = null;
    Sc = ao = Qr = 0;
    Pt = La = null;
    if (Kr !== null) {
      for (s = 0; s < Kr.length; s++) {
        o = Kr[s];
        u = o.interleaved;
        if (u !== null) {
          o.interleaved = null;
          var f = u.next;
          var p = o.pending;
          if (p !== null) {
            var x = p.next;
            p.next = f;
            u.next = x;
          }
          o.pending = u;
        }
      }
      Kr = null;
    }
    return t;
  }
  function pf(t, s) {
    do {
      var o = at;
      try {
        Vl();
        Gi.current = Xi;
        if (Ji) {
          for (var u = Ye.memoizedState; u !== null;) {
            var f = u.queue;
            if (f !== null) {
              f.pending = null;
            }
            u = u.next;
          }
          Ji = false;
        }
        Jr = 0;
        ut = lt = Ye = null;
        Ta = false;
        Ra = 0;
        bc.current = null;
        if (o === null || o.return === null) {
          ct = 1;
          $a = s;
          at = null;
          break;
        }
        e: {
          var p = t;
          var x = o.return;
          var S = o;
          var E = s;
          s = gt;
          S.flags |= 32768;
          if (E !== null && typeof E == "object" && typeof E.then == "function") {
            var M = E;
            var Q = S;
            var Z = Q.tag;
            if ((Q.mode & 1) === 0 && (Z === 0 || Z === 11 || Z === 15)) {
              var J = Q.alternate;
              if (J) {
                Q.updateQueue = J.updateQueue;
                Q.memoizedState = J.memoizedState;
                Q.lanes = J.lanes;
              } else {
                Q.updateQueue = null;
                Q.memoizedState = null;
              }
            }
            var ce = Uh(x);
            if (ce !== null) {
              ce.flags &= -257;
              Fh(ce, x, S, p, s);
              if (ce.mode & 1) {
                Mh(p, M, s);
              }
              s = ce;
              E = M;
              var fe = s.updateQueue;
              if (fe === null) {
                var pe = new Set();
                pe.add(E);
                s.updateQueue = pe;
              } else {
                fe.add(E);
              }
              break e;
            } else {
              if ((s & 1) === 0) {
                Mh(p, M, s);
                Pc();
                break e;
              }
              E = Error(r(426));
            }
          } else if (Ge && S.mode & 1) {
            var rt = Uh(x);
            if (rt !== null) {
              if ((rt.flags & 65536) === 0) {
                rt.flags |= 256;
              }
              Fh(rt, x, S, p, s);
              ql(Ps(E, S));
              break e;
            }
          }
          p = E = Ps(E, S);
          if (ct !== 4) {
            ct = 2;
          }
          if (La === null) {
            La = [p];
          } else {
            La.push(p);
          }
          p = x;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536;
                s &= -s;
                p.lanes |= s;
                var P = Lh(p, E, s);
                ch(p, P);
                break e;
              case 1:
                S = E;
                var N = p.type;
                var $ = p.stateNode;
                if ((p.flags & 128) === 0 && (typeof N.getDerivedStateFromError == "function" || $ !== null && typeof $.componentDidCatch == "function" && (kr === null || !kr.has($)))) {
                  p.flags |= 65536;
                  s &= -s;
                  p.lanes |= s;
                  var ee = Dh(p, S, s);
                  ch(p, ee);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        yf(o);
      } catch (ve) {
        s = ve;
        if (at === o && o !== null) {
          at = o = o.return;
        }
        continue;
      }
      break;
    } while (true);
  }
  function gf() {
    var t = so.current;
    so.current = Xi;
    if (t === null) {
      return Xi;
    } else {
      return t;
    }
  }
  function Pc() {
    if (ct === 0 || ct === 3 || ct === 2) {
      ct = 4;
    }
    if (dt !== null && ((Qr & 268435455) !== 0 || (ao & 268435455) !== 0)) {
      Cr(dt, gt);
    }
  }
  function ho(t, s) {
    var o = $e;
    $e |= 2;
    var u = gf();
    if (dt !== t || gt !== s) {
      Vn = null;
      Xr(t, s);
    }
    do {
      try {
        V0();
        break;
      } catch (f) {
        pf(t, f);
      }
    } while (true);
    Vl();
    $e = o;
    so.current = u;
    if (at !== null) {
      throw Error(r(261));
    }
    dt = null;
    gt = 0;
    return ct;
  }
  function V0() {
    while (at !== null) {
      vf(at);
    }
  }
  function K0() {
    while (at !== null && !yg()) {
      vf(at);
    }
  }
  function vf(t) {
    var s = _f(t.alternate, t, qt);
    t.memoizedProps = t.pendingProps;
    if (s === null) {
      yf(t);
    } else {
      at = s;
    }
    bc.current = null;
  }
  function yf(t) {
    var s = t;
    do {
      var o = s.alternate;
      t = s.return;
      if ((s.flags & 32768) === 0) {
        o = U0(o, s, qt);
        if (o !== null) {
          at = o;
          return;
        }
      } else {
        o = F0(o, s);
        if (o !== null) {
          o.flags &= 32767;
          at = o;
          return;
        }
        if (t !== null) {
          t.flags |= 32768;
          t.subtreeFlags = 0;
          t.deletions = null;
        } else {
          ct = 6;
          at = null;
          return;
        }
      }
      s = s.sibling;
      if (s !== null) {
        at = s;
        return;
      }
      at = s = t;
    } while (s !== null);
    if (ct === 0) {
      ct = 5;
    }
  }
  function Zr(t, s, o) {
    var u = Me;
    var f = tn.transition;
    try {
      tn.transition = null;
      Me = 1;
      G0(t, s, o, u);
    } finally {
      tn.transition = f;
      Me = u;
    }
    return null;
  }
  function G0(t, s, o, u) {
    do {
      Ds();
    } while (br !== null);
    if (($e & 6) !== 0) {
      throw Error(r(327));
    }
    o = t.finishedWork;
    var f = t.finishedLanes;
    if (o === null) {
      return null;
    }
    t.finishedWork = null;
    t.finishedLanes = 0;
    if (o === t.current) {
      throw Error(r(177));
    }
    t.callbackNode = null;
    t.callbackPriority = 0;
    var p = o.lanes | o.childLanes;
    Ng(t, p);
    if (t === dt) {
      at = dt = null;
      gt = 0;
    }
    if (((o.subtreeFlags & 2064) !== 0 || (o.flags & 2064) !== 0) && !oo) {
      oo = true;
      jf(pi, function () {
        Ds();
        return null;
      });
    }
    p = (o.flags & 15990) !== 0;
    if ((o.subtreeFlags & 15990) !== 0 || p) {
      p = tn.transition;
      tn.transition = null;
      var x = Me;
      Me = 1;
      var S = $e;
      $e |= 4;
      bc.current = null;
      z0(t, o);
      lf(o, t);
      m0(Pl);
      ji = !!Al;
      Pl = Al = null;
      t.current = o;
      W0(o);
      wg();
      $e = S;
      Me = x;
      tn.transition = p;
    } else {
      t.current = o;
    }
    if (oo) {
      oo = false;
      br = t;
      lo = f;
    }
    p = t.pendingLanes;
    if (p === 0) {
      kr = null;
    }
    jg(o.stateNode);
    Ot(t, nt());
    if (s !== null) {
      u = t.onRecoverableError;
      o = 0;
      for (; o < s.length; o++) {
        f = s[o];
        u(f.value, {
          componentStack: f.stack,
          digest: f.digest
        });
      }
    }
    if (io) {
      io = false;
      t = Ec;
      Ec = null;
      throw t;
    }
    if ((lo & 1) !== 0 && t.tag !== 0) {
      Ds();
    }
    p = t.pendingLanes;
    if ((p & 1) !== 0) {
      if (t === Nc) {
        Da++;
      } else {
        Da = 0;
        Nc = t;
      }
    } else {
      Da = 0;
    }
    wr();
    return null;
  }
  function Ds() {
    if (br !== null) {
      var t = ad(lo);
      var s = tn.transition;
      var o = Me;
      try {
        tn.transition = null;
        Me = t < 16 ? 16 : t;
        if (br === null) {
          var u = false;
        } else {
          t = br;
          br = null;
          lo = 0;
          if (($e & 6) !== 0) {
            throw Error(r(331));
          }
          var f = $e;
          $e |= 4;
          de = t.current;
          while (de !== null) {
            var p = de;
            var x = p.child;
            if ((de.flags & 16) !== 0) {
              var S = p.deletions;
              if (S !== null) {
                for (var E = 0; E < S.length; E++) {
                  var M = S[E];
                  for (de = M; de !== null;) {
                    var Q = de;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oa(8, Q, p);
                    }
                    var Z = Q.child;
                    if (Z !== null) {
                      Z.return = Q;
                      de = Z;
                    } else {
                      while (de !== null) {
                        Q = de;
                        var J = Q.sibling;
                        var ce = Q.return;
                        nf(Q);
                        if (Q === M) {
                          de = null;
                          break;
                        }
                        if (J !== null) {
                          J.return = ce;
                          de = J;
                          break;
                        }
                        de = ce;
                      }
                    }
                  }
                }
                var fe = p.alternate;
                if (fe !== null) {
                  var pe = fe.child;
                  if (pe !== null) {
                    fe.child = null;
                    do {
                      var rt = pe.sibling;
                      pe.sibling = null;
                      pe = rt;
                    } while (pe !== null);
                  }
                }
                de = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && x !== null) {
              x.return = p;
              de = x;
            } else {
              e: while (de !== null) {
                p = de;
                if ((p.flags & 2048) !== 0) {
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oa(9, p, p.return);
                  }
                }
                var P = p.sibling;
                if (P !== null) {
                  P.return = p.return;
                  de = P;
                  break e;
                }
                de = p.return;
              }
            }
          }
          var N = t.current;
          for (de = N; de !== null;) {
            x = de;
            var $ = x.child;
            if ((x.subtreeFlags & 2064) !== 0 && $ !== null) {
              $.return = x;
              de = $;
            } else {
              e: for (x = N; de !== null;) {
                S = de;
                if ((S.flags & 2048) !== 0) {
                  try {
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ro(9, S);
                    }
                  } catch (ve) {
                    et(S, S.return, ve);
                  }
                }
                if (S === x) {
                  de = null;
                  break e;
                }
                var ee = S.sibling;
                if (ee !== null) {
                  ee.return = S.return;
                  de = ee;
                  break e;
                }
                de = S.return;
              }
            }
          }
          $e = f;
          wr();
          if (bn && typeof bn.onPostCommitFiberRoot == "function") {
            try {
              bn.onPostCommitFiberRoot(gi, t);
            } catch {}
          }
          u = true;
        }
        return u;
      } finally {
        Me = o;
        tn.transition = s;
      }
    }
    return false;
  }
  function wf(t, s, o) {
    s = Ps(o, s);
    s = Lh(t, s, 1);
    t = _r(t, s, 1);
    s = Tt();
    if (t !== null) {
      oa(t, 1, s);
      Ot(t, s);
    }
  }
  function et(t, s, o) {
    if (t.tag === 3) {
      wf(t, t, o);
    } else {
      while (s !== null) {
        if (s.tag === 3) {
          wf(s, t, o);
          break;
        } else if (s.tag === 1) {
          var u = s.stateNode;
          if (typeof s.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (kr === null || !kr.has(u))) {
            t = Ps(o, t);
            t = Dh(s, t, 1);
            s = _r(s, t, 1);
            t = Tt();
            if (s !== null) {
              oa(s, 1, t);
              Ot(s, t);
            }
            break;
          }
        }
        s = s.return;
      }
    }
  }
  function J0(t, s, o) {
    var u = t.pingCache;
    if (u !== null) {
      u.delete(s);
    }
    s = Tt();
    t.pingedLanes |= t.suspendedLanes & o;
    if (dt === t && (gt & o) === o) {
      if (ct === 4 || ct === 3 && (gt & 130023424) === gt && nt() - Cc < 500) {
        Xr(t, 0);
      } else {
        Sc |= o;
      }
    }
    Ot(t, s);
  }
  function xf(t, s) {
    if (s === 0) {
      if ((t.mode & 1) === 0) {
        s = 1;
      } else {
        s = yi;
        yi <<= 1;
        if ((yi & 130023424) === 0) {
          yi = 4194304;
        }
      }
    }
    var o = Tt();
    t = Wn(t, s);
    if (t !== null) {
      oa(t, s, o);
      Ot(t, o);
    }
  }
  function Q0(t) {
    var s = t.memoizedState;
    var o = 0;
    if (s !== null) {
      o = s.retryLane;
    }
    xf(t, o);
  }
  function Y0(t, s) {
    var o = 0;
    switch (t.tag) {
      case 13:
        var u = t.stateNode;
        var f = t.memoizedState;
        if (f !== null) {
          o = f.retryLane;
        }
        break;
      case 19:
        u = t.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    if (u !== null) {
      u.delete(s);
    }
    xf(t, o);
  }
  var _f;
  _f = function (t, s, o) {
    if (t !== null) {
      if (t.memoizedProps !== s.pendingProps || Rt.current) {
        At = true;
      } else {
        if ((t.lanes & o) === 0 && (s.flags & 128) === 0) {
          At = false;
          return M0(t, s, o);
        }
        At = (t.flags & 131072) !== 0;
      }
    } else {
      At = false;
      if (Ge && (s.flags & 1048576) !== 0) {
        Zd(s, Fi, s.index);
      }
    }
    s.lanes = 0;
    switch (s.tag) {
      case 2:
        var u = s.type;
        to(t, s);
        t = s.pendingProps;
        var f = Ss(s, wt.current);
        Is(s, o);
        f = rc(null, s, u, t, f, o);
        var p = sc();
        s.flags |= 1;
        if (typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === undefined) {
          s.tag = 1;
          s.memoizedState = null;
          s.updateQueue = null;
          if (It(u)) {
            p = true;
            Di(s);
          } else {
            p = false;
          }
          s.memoizedState = f.state ?? null;
          Ql(s);
          f.updater = Zi;
          s.stateNode = f;
          f._reactInternals = s;
          uc(s, u, t, o);
          s = mc(null, s, u, true, p, o);
        } else {
          s.tag = 0;
          if (Ge && p) {
            Fl(s);
          }
          Nt(null, s, f, o);
          s = s.child;
        }
        return s;
      case 16:
        u = s.elementType;
        e: {
          to(t, s);
          t = s.pendingProps;
          f = u._init;
          u = f(u._payload);
          s.type = u;
          f = s.tag = Z0(u);
          t = pn(u, t);
          switch (f) {
            case 0:
              s = fc(null, s, u, t, o);
              break e;
            case 1:
              s = Vh(null, s, u, t, o);
              break e;
            case 11:
              s = Bh(null, s, u, t, o);
              break e;
            case 14:
              s = zh(null, s, u, pn(u.type, t), o);
              break e;
          }
          throw Error(r(306, u, ""));
        }
        return s;
      case 0:
        u = s.type;
        f = s.pendingProps;
        f = s.elementType === u ? f : pn(u, f);
        return fc(t, s, u, f, o);
      case 1:
        u = s.type;
        f = s.pendingProps;
        f = s.elementType === u ? f : pn(u, f);
        return Vh(t, s, u, f, o);
      case 3:
        e: {
          Kh(s);
          if (t === null) {
            throw Error(r(387));
          }
          u = s.pendingProps;
          p = s.memoizedState;
          f = p.element;
          lh(t, s);
          Vi(s, u, null, o);
          var x = s.memoizedState;
          u = x.element;
          if (p.isDehydrated) {
            p = {
              element: u,
              isDehydrated: false,
              cache: x.cache,
              pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
              transitions: x.transitions
            };
            s.updateQueue.baseState = p;
            s.memoizedState = p;
            if (s.flags & 256) {
              f = Ps(Error(r(423)), s);
              s = Gh(t, s, u, o, f);
              break e;
            } else if (u !== f) {
              f = Ps(Error(r(424)), s);
              s = Gh(t, s, u, o, f);
              break e;
            } else {
              Wt = gr(s.stateNode.containerInfo.firstChild);
              zt = s;
              Ge = true;
              mn = null;
              o = ih(s, null, u, o);
              s.child = o;
              while (o) {
                o.flags = o.flags & -3 | 4096;
                o = o.sibling;
              }
            }
          } else {
            Ns();
            if (u === f) {
              s = Hn(t, s, o);
              break e;
            }
            Nt(t, s, u, o);
          }
          s = s.child;
        }
        return s;
      case 5:
        dh(s);
        if (t === null) {
          Wl(s);
        }
        u = s.type;
        f = s.pendingProps;
        p = t !== null ? t.memoizedProps : null;
        x = f.children;
        if (Ol(u, f)) {
          x = null;
        } else if (p !== null && Ol(u, p)) {
          s.flags |= 32;
        }
        Hh(t, s);
        Nt(t, s, x, o);
        return s.child;
      case 6:
        if (t === null) {
          Wl(s);
        }
        return null;
      case 13:
        return Jh(t, s, o);
      case 4:
        Yl(s, s.stateNode.containerInfo);
        u = s.pendingProps;
        if (t === null) {
          s.child = Ts(s, null, u, o);
        } else {
          Nt(t, s, u, o);
        }
        return s.child;
      case 11:
        u = s.type;
        f = s.pendingProps;
        f = s.elementType === u ? f : pn(u, f);
        return Bh(t, s, u, f, o);
      case 7:
        Nt(t, s, s.pendingProps, o);
        return s.child;
      case 8:
        Nt(t, s, s.pendingProps.children, o);
        return s.child;
      case 12:
        Nt(t, s, s.pendingProps.children, o);
        return s.child;
      case 10:
        e: {
          u = s.type._context;
          f = s.pendingProps;
          p = s.memoizedProps;
          x = f.value;
          ze(Wi, u._currentValue);
          u._currentValue = x;
          if (p !== null) {
            if (fn(p.value, x)) {
              if (p.children === f.children && !Rt.current) {
                s = Hn(t, s, o);
                break e;
              }
            } else {
              p = s.child;
              if (p !== null) {
                p.return = s;
              }
              while (p !== null) {
                var S = p.dependencies;
                if (S !== null) {
                  x = p.child;
                  for (var E = S.firstContext; E !== null;) {
                    if (E.context === u) {
                      if (p.tag === 1) {
                        E = qn(-1, o & -o);
                        E.tag = 2;
                        var M = p.updateQueue;
                        if (M !== null) {
                          M = M.shared;
                          var Q = M.pending;
                          if (Q === null) {
                            E.next = E;
                          } else {
                            E.next = Q.next;
                            Q.next = E;
                          }
                          M.pending = E;
                        }
                      }
                      p.lanes |= o;
                      E = p.alternate;
                      if (E !== null) {
                        E.lanes |= o;
                      }
                      Gl(p.return, o, s);
                      S.lanes |= o;
                      break;
                    }
                    E = E.next;
                  }
                } else if (p.tag === 10) {
                  x = p.type === s.type ? null : p.child;
                } else if (p.tag === 18) {
                  x = p.return;
                  if (x === null) {
                    throw Error(r(341));
                  }
                  x.lanes |= o;
                  S = x.alternate;
                  if (S !== null) {
                    S.lanes |= o;
                  }
                  Gl(x, o, s);
                  x = p.sibling;
                } else {
                  x = p.child;
                }
                if (x !== null) {
                  x.return = p;
                } else {
                  for (x = p; x !== null;) {
                    if (x === s) {
                      x = null;
                      break;
                    }
                    p = x.sibling;
                    if (p !== null) {
                      p.return = x.return;
                      x = p;
                      break;
                    }
                    x = x.return;
                  }
                }
                p = x;
              }
            }
          }
          Nt(t, s, f.children, o);
          s = s.child;
        }
        return s;
      case 9:
        f = s.type;
        u = s.pendingProps.children;
        Is(s, o);
        f = Zt(f);
        u = u(f);
        s.flags |= 1;
        Nt(t, s, u, o);
        return s.child;
      case 14:
        u = s.type;
        f = pn(u, s.pendingProps);
        f = pn(u.type, f);
        return zh(t, s, u, f, o);
      case 15:
        return Wh(t, s, s.type, s.pendingProps, o);
      case 17:
        u = s.type;
        f = s.pendingProps;
        f = s.elementType === u ? f : pn(u, f);
        to(t, s);
        s.tag = 1;
        if (It(u)) {
          t = true;
          Di(s);
        } else {
          t = false;
        }
        Is(s, o);
        Oh(s, u, f);
        uc(s, u, f, o);
        return mc(null, s, u, true, t, o);
      case 19:
        return Yh(t, s, o);
      case 22:
        return qh(t, s, o);
    }
    throw Error(r(156, s.tag));
  };
  function jf(t, s) {
    return ed(t, s);
  }
  function X0(t, s, o, u) {
    this.tag = t;
    this.key = o;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = s;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = u;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function nn(t, s, o, u) {
    return new X0(t, s, o, u);
  }
  function Oc(t) {
    t = t.prototype;
    return !!t && !!t.isReactComponent;
  }
  function Z0(t) {
    if (typeof t == "function") {
      if (Oc(t)) {
        return 1;
      } else {
        return 0;
      }
    }
    if (t != null) {
      t = t.$$typeof;
      if (t === be) {
        return 11;
      }
      if (t === _e) {
        return 14;
      }
    }
    return 2;
  }
  function Er(t, s) {
    var o = t.alternate;
    if (o === null) {
      o = nn(t.tag, s, t.key, t.mode);
      o.elementType = t.elementType;
      o.type = t.type;
      o.stateNode = t.stateNode;
      o.alternate = t;
      t.alternate = o;
    } else {
      o.pendingProps = s;
      o.type = t.type;
      o.flags = 0;
      o.subtreeFlags = 0;
      o.deletions = null;
    }
    o.flags = t.flags & 14680064;
    o.childLanes = t.childLanes;
    o.lanes = t.lanes;
    o.child = t.child;
    o.memoizedProps = t.memoizedProps;
    o.memoizedState = t.memoizedState;
    o.updateQueue = t.updateQueue;
    s = t.dependencies;
    o.dependencies = s === null ? null : {
      lanes: s.lanes,
      firstContext: s.firstContext
    };
    o.sibling = t.sibling;
    o.index = t.index;
    o.ref = t.ref;
    return o;
  }
  function fo(t, s, o, u, f, p) {
    var x = 2;
    u = t;
    if (typeof t == "function") {
      if (Oc(t)) {
        x = 1;
      }
    } else if (typeof t == "string") {
      x = 5;
    } else {
      e: switch (t) {
        case X:
          return es(o.children, f, p, s);
        case le:
          x = 8;
          f |= 8;
          break;
        case G:
          t = nn(12, o, s, f | 2);
          t.elementType = G;
          t.lanes = p;
          return t;
        case q:
          t = nn(13, o, s, f);
          t.elementType = q;
          t.lanes = p;
          return t;
        case ge:
          t = nn(19, o, s, f);
          t.elementType = ge;
          t.lanes = p;
          return t;
        case D:
          return mo(o, f, p, s);
        default:
          if (typeof t == "object" && t !== null) {
            switch (t.$$typeof) {
              case B:
                x = 10;
                break e;
              case re:
                x = 9;
                break e;
              case be:
                x = 11;
                break e;
              case _e:
                x = 14;
                break e;
              case K:
                x = 16;
                u = null;
                break e;
            }
          }
          throw Error(r(130, t == null ? t : typeof t, ""));
      }
    }
    s = nn(x, o, s, f);
    s.elementType = t;
    s.type = u;
    s.lanes = p;
    return s;
  }
  function es(t, s, o, u) {
    t = nn(7, t, u, s);
    t.lanes = o;
    return t;
  }
  function mo(t, s, o, u) {
    t = nn(22, t, u, s);
    t.elementType = D;
    t.lanes = o;
    t.stateNode = {
      isHidden: false
    };
    return t;
  }
  function $c(t, s, o) {
    t = nn(6, t, null, s);
    t.lanes = o;
    return t;
  }
  function Lc(t, s, o) {
    s = nn(4, t.children !== null ? t.children : [], t.key, s);
    s.lanes = o;
    s.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    };
    return s;
  }
  function ev(t, s, o, u, f) {
    this.tag = s;
    this.containerInfo = t;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = cl(0);
    this.expirationTimes = cl(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = cl(0);
    this.identifierPrefix = u;
    this.onRecoverableError = f;
    this.mutableSourceEagerHydrationData = null;
  }
  function Dc(t, s, o, u, f, p, x, S, E) {
    t = new ev(t, s, o, S, E);
    if (s === 1) {
      s = 1;
      if (p === true) {
        s |= 8;
      }
    } else {
      s = 0;
    }
    p = nn(3, null, null, s);
    t.current = p;
    p.stateNode = t;
    p.memoizedState = {
      element: u,
      isDehydrated: o,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    };
    Ql(p);
    return t;
  }
  function tv(t, s, o, u = null) {
    return {
      $$typeof: z,
      key: u == null ? null : "" + u,
      children: t,
      containerInfo: s,
      implementation: o
    };
  }
  function kf(t) {
    if (!t) {
      return yr;
    }
    t = t._reactInternals;
    e: {
      if (zr(t) !== t || t.tag !== 1) {
        throw Error(r(170));
      }
      var s = t;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break e;
          case 1:
            if (It(s.type)) {
              s = s.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        s = s.return;
      } while (s !== null);
      throw Error(r(171));
    }
    if (t.tag === 1) {
      var o = t.type;
      if (It(o)) {
        return Qd(t, o, s);
      }
    }
    return s;
  }
  function bf(t, s, o, u, f, p, x, S, E) {
    t = Dc(o, u, true, t, f, p, x, S, E);
    t.context = kf(null);
    o = t.current;
    u = Tt();
    f = Sr(o);
    p = qn(u, f);
    p.callback = s ?? null;
    _r(o, p, f);
    t.current.lanes = f;
    oa(t, f, u);
    Ot(t, u);
    return t;
  }
  function po(t, s, o, u) {
    var f = s.current;
    var p = Tt();
    var x = Sr(f);
    o = kf(o);
    if (s.context === null) {
      s.context = o;
    } else {
      s.pendingContext = o;
    }
    s = qn(p, x);
    s.payload = {
      element: t
    };
    u = u === undefined ? null : u;
    if (u !== null) {
      s.callback = u;
    }
    t = _r(f, s, x);
    if (t !== null) {
      yn(t, f, x, p);
      Hi(t, f, x);
    }
    return x;
  }
  function go(t) {
    t = t.current;
    if (!t.child) {
      return null;
    }
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Sf(t, s) {
    t = t.memoizedState;
    if (t !== null && t.dehydrated !== null) {
      var o = t.retryLane;
      t.retryLane = o !== 0 && o < s ? o : s;
    }
  }
  function Mc(t, s) {
    Sf(t, s);
    if (t = t.alternate) {
      Sf(t, s);
    }
  }
  function nv() {
    return null;
  }
  var Cf = typeof reportError == "function" ? reportError : function (t) {
    console.error(t);
  };
  function Uc(t) {
    this._internalRoot = t;
  }
  vo.prototype.render = Uc.prototype.render = function (t) {
    var s = this._internalRoot;
    if (s === null) {
      throw Error(r(409));
    }
    po(t, s, null, null);
  };
  vo.prototype.unmount = Uc.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var s = t.containerInfo;
      Yr(function () {
        po(null, t, null, null);
      });
      s[Un] = null;
    }
  };
  function vo(t) {
    this._internalRoot = t;
  }
  vo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var s = ld();
      t = {
        blockedOn: null,
        target: t,
        priority: s
      };
      for (var o = 0; o < fr.length && s !== 0 && s < fr[o].priority; o++);
      fr.splice(o, 0, t);
      if (o === 0) {
        dd(t);
      }
    }
  };
  function Fc(t) {
    return !!t && (t.nodeType === 1 || t.nodeType === 9 || t.nodeType === 11);
  }
  function yo(t) {
    return !!t && (t.nodeType === 1 || t.nodeType === 9 || t.nodeType === 11 || t.nodeType === 8 && t.nodeValue === " react-mount-point-unstable ");
  }
  function Ef() {}
  function rv(t, s, o, u, f) {
    if (f) {
      if (typeof u == "function") {
        var p = u;
        u = function () {
          var M = go(x);
          p.call(M);
        };
      }
      var x = bf(s, u, t, 0, null, false, false, "", Ef);
      t._reactRootContainer = x;
      t[Un] = x.current;
      _a(t.nodeType === 8 ? t.parentNode : t);
      Yr();
      return x;
    }
    while (f = t.lastChild) {
      t.removeChild(f);
    }
    if (typeof u == "function") {
      var S = u;
      u = function () {
        var M = go(E);
        S.call(M);
      };
    }
    var E = Dc(t, 0, false, null, null, false, false, "", Ef);
    t._reactRootContainer = E;
    t[Un] = E.current;
    _a(t.nodeType === 8 ? t.parentNode : t);
    Yr(function () {
      po(s, E, o, u);
    });
    return E;
  }
  function wo(t, s, o, u, f) {
    var p = o._reactRootContainer;
    if (p) {
      var x = p;
      if (typeof f == "function") {
        var S = f;
        f = function () {
          var E = go(x);
          S.call(E);
        };
      }
      po(s, x, t, f);
    } else {
      x = rv(o, s, t, f, u);
    }
    return go(x);
  }
  id = function (t) {
    switch (t.tag) {
      case 3:
        var s = t.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var o = ia(s.pendingLanes);
          if (o !== 0) {
            ul(s, o | 1);
            Ot(s, nt());
            if (($e & 6) === 0) {
              Ls = nt() + 500;
              wr();
            }
          }
        }
        break;
      case 13:
        Yr(function () {
          var u = Wn(t, 1);
          if (u !== null) {
            var f = Tt();
            yn(u, t, 1, f);
          }
        });
        Mc(t, 1);
    }
  };
  dl = function (t) {
    if (t.tag === 13) {
      var s = Wn(t, 134217728);
      if (s !== null) {
        var o = Tt();
        yn(s, t, 134217728, o);
      }
      Mc(t, 134217728);
    }
  };
  od = function (t) {
    if (t.tag === 13) {
      var s = Sr(t);
      var o = Wn(t, s);
      if (o !== null) {
        var u = Tt();
        yn(o, t, s, u);
      }
      Mc(t, s);
    }
  };
  ld = function () {
    return Me;
  };
  cd = function (t, s) {
    var o = Me;
    try {
      Me = t;
      return s();
    } finally {
      Me = o;
    }
  };
  ps = function (t, s, o) {
    switch (s) {
      case "input":
        Dn(t, o);
        s = o.name;
        if (o.type === "radio" && s != null) {
          for (o = t; o.parentNode;) {
            o = o.parentNode;
          }
          o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + "][type=\"radio\"]");
          s = 0;
          for (; s < o.length; s++) {
            var u = o[s];
            if (u !== t && u.form === t.form) {
              var f = $i(u);
              if (!f) {
                throw Error(r(90));
              }
              ln(u);
              Dn(u, f);
            }
          }
        }
        break;
      case "textarea":
        ae(t, o);
        break;
      case "select":
        s = o.value;
        if (s != null) {
          un(t, !!o.multiple, s, false);
        }
    }
  };
  Ku = Ic;
  Gu = Yr;
  var sv = {
    usingClientEntryPoint: false,
    Events: [ba, ks, $i, Hu, Vu, Ic]
  };
  var Ma = {
    findFiberByHostInstance: Wr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  };
  var av = {
    bundleType: Ma.bundleType,
    version: Ma.version,
    rendererPackageName: Ma.rendererPackageName,
    rendererConfig: Ma.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: W.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      t = Xu(t);
      if (t === null) {
        return null;
      } else {
        return t.stateNode;
      }
    },
    findFiberByHostInstance: Ma.findFiberByHostInstance || nv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
    var xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xo.isDisabled && xo.supportsFiber) {
      try {
        gi = xo.inject(av);
        bn = xo;
      } catch {}
    }
  }
  $t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sv;
  $t.createPortal = function (t, s, o = null) {
    if (!Fc(s)) {
      throw Error(r(200));
    }
    return tv(t, s, null, o);
  };
  $t.createRoot = function (t, s) {
    if (!Fc(t)) {
      throw Error(r(299));
    }
    var o = false;
    var u = "";
    var f = Cf;
    if (s != null) {
      if (s.unstable_strictMode === true) {
        o = true;
      }
      if (s.identifierPrefix !== undefined) {
        u = s.identifierPrefix;
      }
      if (s.onRecoverableError !== undefined) {
        f = s.onRecoverableError;
      }
    }
    s = Dc(t, 1, false, null, null, o, false, u, f);
    t[Un] = s.current;
    _a(t.nodeType === 8 ? t.parentNode : t);
    return new Uc(s);
  };
  $t.findDOMNode = function (t) {
    if (t == null) {
      return null;
    }
    if (t.nodeType === 1) {
      return t;
    }
    var s = t._reactInternals;
    if (s === undefined) {
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    }
    t = Xu(s);
    t = t === null ? null : t.stateNode;
    return t;
  };
  $t.flushSync = function (t) {
    return Yr(t);
  };
  $t.hydrate = function (t, s, o) {
    if (!yo(s)) {
      throw Error(r(200));
    }
    return wo(null, t, s, true, o);
  };
  $t.hydrateRoot = function (t, s, o) {
    if (!Fc(t)) {
      throw Error(r(405));
    }
    var u = o != null && o.hydratedSources || null;
    var f = false;
    var p = "";
    var x = Cf;
    if (o != null) {
      if (o.unstable_strictMode === true) {
        f = true;
      }
      if (o.identifierPrefix !== undefined) {
        p = o.identifierPrefix;
      }
      if (o.onRecoverableError !== undefined) {
        x = o.onRecoverableError;
      }
    }
    s = bf(s, null, t, 1, o ?? null, f, false, p, x);
    t[Un] = s.current;
    _a(t);
    if (u) {
      for (t = 0; t < u.length; t++) {
        o = u[t];
        f = o._getVersion;
        f = f(o._source);
        if (s.mutableSourceEagerHydrationData == null) {
          s.mutableSourceEagerHydrationData = [o, f];
        } else {
          s.mutableSourceEagerHydrationData.push(o, f);
        }
      }
    }
    return new vo(s);
  };
  $t.render = function (t, s, o) {
    if (!yo(s)) {
      throw Error(r(200));
    }
    return wo(null, t, s, false, o);
  };
  $t.unmountComponentAtNode = function (t) {
    if (!yo(t)) {
      throw Error(r(40));
    }
    if (t._reactRootContainer) {
      Yr(function () {
        wo(null, null, t, false, function () {
          t._reactRootContainer = null;
          t[Un] = null;
        });
      });
      return true;
    } else {
      return false;
    }
  };
  $t.unstable_batchedUpdates = Ic;
  $t.unstable_renderSubtreeIntoContainer = function (t, s, o, u) {
    if (!yo(o)) {
      throw Error(r(200));
    }
    if (t == null || t._reactInternals === undefined) {
      throw Error(r(38));
    }
    return wo(t, s, o, false, u);
  };
  $t.version = "18.3.1-next-f1338f8080-20240426";
  return $t;
}
var $f;
function ep() {
  if ($f) {
    return Wc.exports;
  }
  $f = 1;
  function n() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (e) {
        console.error(e);
      }
    }
  }
  n();
  Wc.exports = yv();
  return Wc.exports;
}
var Lf;
function wv() {
  if (Lf) {
    return _o;
  }
  Lf = 1;
  var n = ep();
  _o.createRoot = n.createRoot;
  _o.hydrateRoot = n.hydrateRoot;
  return _o;
}
var xv = ReactDOM;
ep(); /**
      * @remix-run/router v1.23.4
      *
      * Copyright (c) Remix Software Inc.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.md file in the root directory of this source tree.
      *
      * @license MIT
      */
function Qa() {
  Qa = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r) {
        if ({}.hasOwnProperty.call(r, i)) {
          n[i] = r[i];
        }
      }
    }
    return n;
  };
  return Qa.apply(null, arguments);
}
var Pr;
(function (n) {
  n.Pop = "POP";
  n.Push = "PUSH";
  n.Replace = "REPLACE";
})(Pr ||= {});
const Df = "popstate";
function _v(n = {}) {
  function e(l, c) {
    let {
      pathname: d = "/",
      search: h = "",
      hash: m = ""
    } = ds(l.location.hash.substr(1));
    if (!d.startsWith("/") && !d.startsWith(".")) {
      d = "/" + d;
    }
    return au("", {
      pathname: d,
      search: h,
      hash: m
    }, c.state && c.state.usr || null, c.state && c.state.key || "default");
  }
  function r(l, c) {
    let d = l.document.querySelector("base");
    let h = "";
    if (d && d.getAttribute("href")) {
      let m = l.location.href;
      let g = m.indexOf("#");
      h = g === -1 ? m : m.slice(0, g);
    }
    return h + "#" + (typeof c == "string" ? c : Po(c));
  }
  function i(l, c) {
    Ru(l.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(c) + ")");
  }
  return kv(e, r, i, n);
}
function Ze(n, e) {
  if (n === false || n === null || typeof n === "undefined") {
    throw new Error(e);
  }
}
function Ru(n, e) {
  if (!n) {
    if (typeof console !== "undefined") {
      console.warn(e);
    }
    try {
      throw new Error(e);
    } catch {}
  }
}
function jv() {
  return Math.random().toString(36).substr(2, 8);
}
function Mf(n, e) {
  return {
    usr: n.state,
    key: n.key,
    idx: e
  };
}
function au(n, e, r = null, i) {
  return Qa({
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: ""
  }, typeof e == "string" ? ds(e) : e, {
    state: r,
    key: e && e.key || i || jv()
  });
}
function Po(n) {
  let {
    pathname: e = "/",
    search: r = "",
    hash: i = ""
  } = n;
  if (r && r !== "?") {
    e += r.charAt(0) === "?" ? r : "?" + r;
  }
  if (i && i !== "#") {
    e += i.charAt(0) === "#" ? i : "#" + i;
  }
  return e;
}
function ds(n) {
  let e = {};
  if (n) {
    let r = n.indexOf("#");
    if (r >= 0) {
      e.hash = n.substr(r);
      n = n.substr(0, r);
    }
    let i = n.indexOf("?");
    if (i >= 0) {
      e.search = n.substr(i);
      n = n.substr(0, i);
    }
    if (n) {
      e.pathname = n;
    }
  }
  return e;
}
function kv(n, e, r, i = {}) {
  let {
    window: l = document.defaultView,
    v5Compat: c = false
  } = i;
  let d = l.history;
  let h = Pr.Pop;
  let m = null;
  let g = w();
  if (g == null) {
    g = 0;
    d.replaceState(Qa({}, d.state, {
      idx: g
    }), "");
  }
  function w() {
    return (d.state || {
      idx: null
    }).idx;
  }
  function y() {
    h = Pr.Pop;
    let C = w();
    let O = C == null ? null : C - g;
    g = C;
    if (m) {
      m({
        action: h,
        location: b.location,
        delta: O
      });
    }
  }
  function _(C, O) {
    h = Pr.Push;
    let L = au(b.location, C, O);
    if (r) {
      r(L, C);
    }
    g = w() + 1;
    let R = Mf(L, g);
    let W = b.createHref(L);
    try {
      d.pushState(R, "", W);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError") {
        throw I;
      }
      l.location.assign(W);
    }
    if (c && m) {
      m({
        action: h,
        location: b.location,
        delta: 1
      });
    }
  }
  function v(C, O) {
    h = Pr.Replace;
    let L = au(b.location, C, O);
    if (r) {
      r(L, C);
    }
    g = w();
    let R = Mf(L, g);
    let W = b.createHref(L);
    d.replaceState(R, "", W);
    if (c && m) {
      m({
        action: h,
        location: b.location,
        delta: 0
      });
    }
  }
  function j(C) {
    let O = l.location.origin !== "null" ? l.location.origin : l.location.href;
    let L = typeof C == "string" ? C : Po(C);
    L = L.replace(/ $/, "%20");
    Ze(O, "No window.location.(origin|href) available to create URL for href: " + L);
    return new URL(L, O);
  }
  let b = {
    get action() {
      return h;
    },
    get location() {
      return n(l, d);
    },
    listen(C) {
      if (m) {
        throw new Error("A history only accepts one active listener");
      }
      l.addEventListener(Df, y);
      m = C;
      return () => {
        l.removeEventListener(Df, y);
        m = null;
      };
    },
    createHref(C) {
      return e(l, C);
    },
    createURL: j,
    encodeLocation(C) {
      let O = j(C);
      return {
        pathname: O.pathname,
        search: O.search,
        hash: O.hash
      };
    },
    push: _,
    replace: v,
    go(C) {
      return d.go(C);
    }
  };
  return b;
}
var Uf;
(function (n) {
  n.data = "data";
  n.deferred = "deferred";
  n.redirect = "redirect";
  n.error = "error";
})(Uf ||= {});
function bv(n, e, r = "/") {
  return Sv(n, e, r);
}
function Sv(n, e, r, i) {
  let l = typeof e == "string" ? ds(e) : e;
  let c = Xs(l.pathname || "/", r);
  if (c == null) {
    return null;
  }
  let d = tp(n);
  Cv(d);
  let h = null;
  let m = Dv(c);
  for (let g = 0; h == null && g < d.length; ++g) {
    h = $v(d[g], m);
  }
  return h;
}
function tp(n, e = [], r = [], i = "") {
  let l = (c, d, h) => {
    let m = {
      relativePath: h === undefined ? c.path || "" : h,
      caseSensitive: c.caseSensitive === true,
      childrenIndex: d,
      route: c
    };
    if (m.relativePath.startsWith("/")) {
      Ze(m.relativePath.startsWith(i), "Absolute route path \"" + m.relativePath + "\" nested under path " + ("\"" + i + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      m.relativePath = m.relativePath.slice(i.length);
    }
    let g = Or([i, m.relativePath]);
    let w = r.concat(m);
    if (c.children && c.children.length > 0) {
      Ze(c.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + g + "\"."));
      tp(c.children, e, w, g);
    }
    if (c.path != null || !!c.index) {
      e.push({
        path: g,
        score: Pv(g, c.index),
        routesMeta: w
      });
    }
  };
  n.forEach((c, d) => {
    var h;
    if (c.path === "" || (h = c.path) == null || !h.includes("?")) {
      l(c, d);
    } else {
      for (let m of np(c.path)) {
        l(c, d, m);
      }
    }
  });
  return e;
}
function np(n) {
  let e = n.split("/");
  if (e.length === 0) {
    return [];
  }
  let [r, ...i] = e;
  let l = r.endsWith("?");
  let c = r.replace(/\?$/, "");
  if (i.length === 0) {
    if (l) {
      return [c, ""];
    } else {
      return [c];
    }
  }
  let d = np(i.join("/"));
  let h = [];
  h.push(...d.map(m => m === "" ? c : [c, m].join("/")));
  if (l) {
    h.push(...d);
  }
  return h.map(m => n.startsWith("/") && m === "" ? "/" : m);
}
function Cv(n) {
  n.sort((e, r) => e.score !== r.score ? r.score - e.score : Ov(e.routesMeta.map(i => i.childrenIndex), r.routesMeta.map(i => i.childrenIndex)));
}
const Ev = /^:[\w-]+$/;
const Nv = 3;
const Tv = 2;
const Rv = 1;
const Iv = 10;
const Av = -2;
const Ff = n => n === "*";
function Pv(n, e) {
  let r = n.split("/");
  let i = r.length;
  if (r.some(Ff)) {
    i += Av;
  }
  if (e) {
    i += Tv;
  }
  return r.filter(l => !Ff(l)).reduce((l, c) => l + (Ev.test(c) ? Nv : c === "" ? Rv : Iv), i);
}
function Ov(n, e) {
  if (n.length === e.length && n.slice(0, -1).every((i, l) => i === e[l])) {
    return n[n.length - 1] - e[e.length - 1];
  } else {
    return 0;
  }
}
function $v(n, e, r) {
  let {
    routesMeta: i
  } = n;
  let l = {};
  let c = "/";
  let d = [];
  for (let h = 0; h < i.length; ++h) {
    let m = i[h];
    let g = h === i.length - 1;
    let w = c === "/" ? e : e.slice(c.length) || "/";
    let y = iu({
      path: m.relativePath,
      caseSensitive: m.caseSensitive,
      end: g
    }, w);
    let _ = m.route;
    if (!y) {
      return null;
    }
    Object.assign(l, y.params);
    d.push({
      params: l,
      pathname: Or([c, y.pathname]),
      pathnameBase: Fv(Or([c, y.pathnameBase])),
      route: _
    });
    if (y.pathnameBase !== "/") {
      c = Or([c, y.pathnameBase]);
    }
  }
  return d;
}
function iu(n, e) {
  if (typeof n == "string") {
    n = {
      path: n,
      caseSensitive: false,
      end: true
    };
  }
  let [r, i] = Lv(n.path, n.caseSensitive, n.end);
  let l = e.match(r);
  if (!l) {
    return null;
  }
  let c = l[0];
  let d = c.replace(/(.)\/+$/, "$1");
  let h = l.slice(1);
  return {
    params: i.reduce((g, w, y) => {
      let {
        paramName: _,
        isOptional: v
      } = w;
      if (_ === "*") {
        let b = h[y] || "";
        d = c.slice(0, c.length - b.length).replace(/(.)\/+$/, "$1");
      }
      const j = h[y];
      if (v && !j) {
        g[_] = undefined;
      } else {
        g[_] = (j || "").replace(/%2F/g, "/");
      }
      return g;
    }, {}),
    pathname: c,
    pathnameBase: d,
    pattern: n
  };
}
function Lv(n, e = false, r = true) {
  Ru(n === "*" || !n.endsWith("*") || n.endsWith("/*"), "Route path \"" + n + "\" will be treated as if it were " + ("\"" + n.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + n.replace(/\*$/, "/*") + "\"."));
  let i = [];
  let l = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, h, m) => {
    i.push({
      paramName: h,
      isOptional: m != null
    });
    if (m) {
      return "/?([^\\/]+)?";
    } else {
      return "/([^\\/]+)";
    }
  });
  if (n.endsWith("*")) {
    i.push({
      paramName: "*"
    });
    l += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (r) {
    l += "\\/*$";
  } else if (n !== "" && n !== "/") {
    l += "(?:(?=\\/|$))";
  }
  return [new RegExp(l, e ? undefined : "i"), i];
}
function Dv(n) {
  try {
    return n.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
  } catch (e) {
    Ru(false, "The URL path \"" + n + "\" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent " + ("encoding (" + e + ")."));
    return n;
  }
}
function Xs(n, e) {
  if (e === "/") {
    return n;
  }
  if (!n.toLowerCase().startsWith(e.toLowerCase())) {
    return null;
  }
  let r = e.endsWith("/") ? e.length - 1 : e.length;
  let i = n.charAt(r);
  if (i && i !== "/") {
    return null;
  } else {
    return n.slice(r) || "/";
  }
}
function Mv(n, e = "/") {
  let {
    pathname: r,
    search: i = "",
    hash: l = ""
  } = typeof n == "string" ? ds(n) : n;
  let c;
  if (r) {
    r = rp(r);
    if (r.startsWith("/")) {
      c = Bf(r.substring(1), "/");
    } else {
      c = Bf(r, e);
    }
  } else {
    c = e;
  }
  return {
    pathname: c,
    search: Bv(i),
    hash: zv(l)
  };
}
function Bf(n, e) {
  let r = e.replace(/\/+$/, "").split("/");
  n.split("/").forEach(l => {
    if (l === "..") {
      if (r.length > 1) {
        r.pop();
      }
    } else if (l !== ".") {
      r.push(l);
    }
  });
  if (r.length > 1) {
    return r.join("/");
  } else {
    return "/";
  }
}
function Vc(n, e, r, i) {
  return "Cannot include a '" + n + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
function Uv(n) {
  return n.filter((e, r) => r === 0 || e.route.path && e.route.path.length > 0);
}
function Iu(n, e) {
  let r = Uv(n);
  if (e) {
    return r.map((i, l) => l === r.length - 1 ? i.pathname : i.pathnameBase);
  } else {
    return r.map(i => i.pathnameBase);
  }
}
function Au(n, e, r, i = false) {
  let l;
  if (typeof n == "string") {
    l = ds(n);
  } else {
    l = Qa({}, n);
    Ze(!l.pathname || !l.pathname.includes("?"), Vc("?", "pathname", "search", l));
    Ze(!l.pathname || !l.pathname.includes("#"), Vc("#", "pathname", "hash", l));
    Ze(!l.search || !l.search.includes("#"), Vc("#", "search", "hash", l));
  }
  let c = n === "" || l.pathname === "";
  let d = c ? "/" : l.pathname;
  let h;
  if (d == null) {
    h = r;
  } else {
    let y = e.length - 1;
    if (!i && d.startsWith("..")) {
      let _ = d.split("/");
      while (_[0] === "..") {
        _.shift();
        y -= 1;
      }
      l.pathname = _.join("/");
    }
    h = y >= 0 ? e[y] : "/";
  }
  let m = Mv(l, h);
  let g = d && d !== "/" && d.endsWith("/");
  let w = (c || d === ".") && r.endsWith("/");
  if (!m.pathname.endsWith("/") && (g || w)) {
    m.pathname += "/";
  }
  return m;
}
const rp = n => n.replace(/\/\/+/g, "/");
const Or = n => rp(n.join("/"));
const Fv = n => n.replace(/\/+$/, "").replace(/^\/*/, "/");
const Bv = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n;
const zv = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function Wv(n) {
  return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n;
}
const sp = ["post", "put", "patch", "delete"];
new Set(sp);
const qv = ["get", ...sp];
new Set(qv); /**
             * React Router v6.30.6
             *
             * Copyright (c) Remix Software Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE.md file in the root directory of this source tree.
             *
             * @license MIT
             */
function Ya() {
  Ya = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r) {
        if ({}.hasOwnProperty.call(r, i)) {
          n[i] = r[i];
        }
      }
    }
    return n;
  };
  return Ya.apply(null, arguments);
}
const Qo = k.createContext(null);
const ap = k.createContext(null);
const tr = k.createContext(null);
const Yo = k.createContext(null);
const nr = k.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
const ip = k.createContext(null);
function Hv(n, e) {
  let {
    relative: r
  } = e === undefined ? {} : e;
  if (!ta()) {
    Ze(false);
  }
  let {
    basename: i,
    navigator: l
  } = k.useContext(tr);
  let {
    hash: c,
    pathname: d,
    search: h
  } = Xo(n, {
    relative: r
  });
  let m = d;
  if (i !== "/") {
    m = d === "/" ? i : Or([i, d]);
  }
  return l.createHref({
    pathname: m,
    search: h,
    hash: c
  });
}
function ta() {
  return k.useContext(Yo) != null;
}
function On() {
  if (!ta()) {
    Ze(false);
  }
  return k.useContext(Yo).location;
}
function op(n) {
  if (!k.useContext(tr).static) {
    k.useLayoutEffect(n);
  }
}
function on() {
  let {
    isDataRoute: n
  } = k.useContext(nr);
  if (n) {
    return ay();
  } else {
    return Vv();
  }
}
function Vv() {
  if (!ta()) {
    Ze(false);
  }
  let n = k.useContext(Qo);
  let {
    basename: e,
    future: r,
    navigator: i
  } = k.useContext(tr);
  let {
    matches: l
  } = k.useContext(nr);
  let {
    pathname: c
  } = On();
  let d = JSON.stringify(Iu(l, r.v7_relativeSplatPath));
  let h = k.useRef(false);
  op(() => {
    h.current = true;
  });
  return k.useCallback(function (g, w = {}) {
    if (!h.current) {
      return;
    }
    if (typeof g == "number") {
      i.go(g);
      return;
    }
    let y = Au(g, JSON.parse(d), c, w.relative === "path");
    if (n == null && e !== "/") {
      y.pathname = y.pathname === "/" ? e : Or([e, y.pathname]);
    }
    (w.replace ? i.replace : i.push)(y, w.state, w);
  }, [e, i, d, c, n]);
}
function Kv() {
  let {
    matches: n
  } = k.useContext(nr);
  let e = n[n.length - 1];
  if (e) {
    return e.params;
  } else {
    return {};
  }
}
function Xo(n, e) {
  let {
    relative: r
  } = e === undefined ? {} : e;
  let {
    future: i
  } = k.useContext(tr);
  let {
    matches: l
  } = k.useContext(nr);
  let {
    pathname: c
  } = On();
  let d = JSON.stringify(Iu(l, i.v7_relativeSplatPath));
  return k.useMemo(() => Au(n, JSON.parse(d), c, r === "path"), [n, d, c, r]);
}
function Gv(n, e) {
  return Jv(n, e);
}
function Jv(n, e, r, i) {
  if (!ta()) {
    Ze(false);
  }
  let {
    navigator: l
  } = k.useContext(tr);
  let {
    matches: c
  } = k.useContext(nr);
  let d = c[c.length - 1];
  let h = d ? d.params : {};
  if (d) {
    d.pathname;
  }
  let m = d ? d.pathnameBase : "/";
  if (d) {
    d.route;
  }
  let g = On();
  let w;
  if (e) {
    var y;
    let C = typeof e == "string" ? ds(e) : e;
    if (m !== "/" && ((y = C.pathname) == null || !y.startsWith(m))) {
      Ze(false);
    }
    w = C;
  } else {
    w = g;
  }
  let _ = w.pathname || "/";
  let v = _;
  if (m !== "/") {
    let C = m.replace(/^\//, "").split("/");
    v = "/" + _.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let j = bv(n, {
    pathname: v
  });
  let b = ey(j && j.map(C => Object.assign({}, C, {
    params: Object.assign({}, h, C.params),
    pathname: Or([m, l.encodeLocation ? l.encodeLocation(C.pathname).pathname : C.pathname]),
    pathnameBase: C.pathnameBase === "/" ? m : Or([m, l.encodeLocation ? l.encodeLocation(C.pathnameBase).pathname : C.pathnameBase])
  })), c, r, i);
  if (e && b) {
    return k.createElement(Yo.Provider, {
      value: {
        location: Ya({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, w),
        navigationType: Pr.Pop
      }
    }, b);
  } else {
    return b;
  }
}
function Qv() {
  let n = sy();
  let e = Wv(n) ? n.status + " " + n.statusText : n instanceof Error ? n.message : JSON.stringify(n);
  let r = n instanceof Error ? n.stack : null;
  let l = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, e), r ? k.createElement("pre", {
    style: l
  }, r) : null, null);
}
const Yv = k.createElement(Qv, null);
class Xv extends k.Component {
  constructor(e) {
    super(e);
    this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    };
  }
  static getDerivedStateFromProps(e, r) {
    if (r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle") {
      return {
        error: e.error,
        location: e.location,
        revalidation: e.revalidation
      };
    } else {
      return {
        error: e.error !== undefined ? e.error : r.error,
        location: r.location,
        revalidation: e.revalidation || r.revalidation
      };
    }
  }
  componentDidCatch(e, r) {
    console.error("React Router caught the following error during render", e, r);
  }
  render() {
    if (this.state.error !== undefined) {
      return k.createElement(nr.Provider, {
        value: this.props.routeContext
      }, k.createElement(ip.Provider, {
        value: this.state.error,
        children: this.props.component
      }));
    } else {
      return this.props.children;
    }
  }
}
function Zv(n) {
  let {
    routeContext: e,
    match: r,
    children: i
  } = n;
  let l = k.useContext(Qo);
  if (l && l.static && l.staticContext && (r.route.errorElement || r.route.ErrorBoundary)) {
    l.staticContext._deepestRenderedBoundaryId = r.route.id;
  }
  return k.createElement(nr.Provider, {
    value: e
  }, i);
}
function ey(n, e, r, i) {
  var l;
  if (e === undefined) {
    e = [];
  }
  if (r === undefined) {
    r = null;
  }
  if (i === undefined) {
    i = null;
  }
  if (n == null) {
    var c;
    if (!r) {
      return null;
    }
    if (r.errors) {
      n = r.matches;
    } else if ((c = i) != null && c.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0) {
      n = r.matches;
    } else {
      return null;
    }
  }
  let d = n;
  let h = (l = r) == null ? undefined : l.errors;
  if (h != null) {
    let w = d.findIndex(y => y.route.id && (h == null ? undefined : h[y.route.id]) !== undefined);
    if (!(w >= 0)) {
      Ze(false);
    }
    d = d.slice(0, Math.min(d.length, w + 1));
  }
  let m = false;
  let g = -1;
  if (r && i && i.v7_partialHydration) {
    for (let w = 0; w < d.length; w++) {
      let y = d[w];
      if (y.route.HydrateFallback || y.route.hydrateFallbackElement) {
        g = w;
      }
      if (y.route.id) {
        let {
          loaderData: _,
          errors: v
        } = r;
        let j = y.route.loader && _[y.route.id] === undefined && (!v || v[y.route.id] === undefined);
        if (y.route.lazy || j) {
          m = true;
          if (g >= 0) {
            d = d.slice(0, g + 1);
          } else {
            d = [d[0]];
          }
          break;
        }
      }
    }
  }
  return d.reduceRight((w, y, _) => {
    let v;
    let j = false;
    let b = null;
    let C = null;
    if (r) {
      v = h && y.route.id ? h[y.route.id] : undefined;
      b = y.route.errorElement || Yv;
      if (m) {
        if (g < 0 && _ === 0) {
          iy("route-fallback");
          j = true;
          C = null;
        } else if (g === _) {
          j = true;
          C = y.route.hydrateFallbackElement || null;
        }
      }
    }
    let O = e.concat(d.slice(0, _ + 1));
    let L = () => {
      let R;
      if (v) {
        R = b;
      } else if (j) {
        R = C;
      } else if (y.route.Component) {
        R = k.createElement(y.route.Component, null);
      } else if (y.route.element) {
        R = y.route.element;
      } else {
        R = w;
      }
      return k.createElement(Zv, {
        match: y,
        routeContext: {
          outlet: w,
          matches: O,
          isDataRoute: r != null
        },
        children: R
      });
    };
    if (r && (y.route.ErrorBoundary || y.route.errorElement || _ === 0)) {
      return k.createElement(Xv, {
        location: r.location,
        revalidation: r.revalidation,
        component: b,
        error: v,
        children: L(),
        routeContext: {
          outlet: null,
          matches: O,
          isDataRoute: true
        }
      });
    } else {
      return L();
    }
  }, null);
}
var lp = function (n) {
  n.UseBlocker = "useBlocker";
  n.UseRevalidator = "useRevalidator";
  n.UseNavigateStable = "useNavigate";
  return n;
}(lp || {});
var cp = function (n) {
  n.UseBlocker = "useBlocker";
  n.UseLoaderData = "useLoaderData";
  n.UseActionData = "useActionData";
  n.UseRouteError = "useRouteError";
  n.UseNavigation = "useNavigation";
  n.UseRouteLoaderData = "useRouteLoaderData";
  n.UseMatches = "useMatches";
  n.UseRevalidator = "useRevalidator";
  n.UseNavigateStable = "useNavigate";
  n.UseRouteId = "useRouteId";
  return n;
}(cp || {});
function ty(n) {
  let e = k.useContext(Qo);
  if (!e) {
    Ze(false);
  }
  return e;
}
function ny(n) {
  let e = k.useContext(ap);
  if (!e) {
    Ze(false);
  }
  return e;
}
function ry(n) {
  let e = k.useContext(nr);
  if (!e) {
    Ze(false);
  }
  return e;
}
function up(n) {
  let e = ry();
  let r = e.matches[e.matches.length - 1];
  if (!r.route.id) {
    Ze(false);
  }
  return r.route.id;
}
function sy() {
  var n;
  let e = k.useContext(ip);
  let r = ny();
  let i = up();
  if (e !== undefined) {
    return e;
  } else if ((n = r.errors) == null) {
    return undefined;
  } else {
    return n[i];
  }
}
function ay() {
  let {
    router: n
  } = ty(lp.UseNavigateStable);
  let e = up(cp.UseNavigateStable);
  let r = k.useRef(false);
  op(() => {
    r.current = true;
  });
  return k.useCallback(function (l, c = {}) {
    if (r.current) {
      if (typeof l == "number") {
        n.navigate(l);
      } else {
        n.navigate(l, Ya({
          fromRouteId: e
        }, c));
      }
    }
  }, [n, e]);
}
const zf = {};
function iy(n, e, r) {
  zf[n] ||= true;
}
function oy(n, e) {
  if (n != null) {
    n.v7_startTransition;
  }
  if (n != null) {
    n.v7_relativeSplatPath;
  }
}
function Pu(n) {
  let {
    to: e,
    replace: r,
    state: i,
    relative: l
  } = n;
  if (!ta()) {
    Ze(false);
  }
  let {
    future: c,
    static: d
  } = k.useContext(tr);
  let {
    matches: h
  } = k.useContext(nr);
  let {
    pathname: m
  } = On();
  let g = on();
  let w = Au(e, Iu(h, c.v7_relativeSplatPath), m, l === "path");
  let y = JSON.stringify(w);
  k.useEffect(() => g(JSON.parse(y), {
    replace: r,
    state: i,
    relative: l
  }), [g, y, l, r, i]);
  return null;
}
function Dt(n) {
  Ze(false);
}
function ly(n) {
  let {
    basename: e = "/",
    children: r = null,
    location: i,
    navigationType: l = Pr.Pop,
    navigator: c,
    static: d = false,
    future: h
  } = n;
  if (ta()) {
    Ze(false);
  }
  let m = e.replace(/^\/*/, "/");
  let g = k.useMemo(() => ({
    basename: m,
    navigator: c,
    static: d,
    future: Ya({
      v7_relativeSplatPath: false
    }, h)
  }), [m, h, c, d]);
  if (typeof i == "string") {
    i = ds(i);
  }
  let {
    pathname: w = "/",
    search: y = "",
    hash: _ = "",
    state: v = null,
    key: j = "default"
  } = i;
  let b = k.useMemo(() => {
    let C = Xs(w, m);
    if (C == null) {
      return null;
    } else {
      return {
        location: {
          pathname: C,
          search: y,
          hash: _,
          state: v,
          key: j
        },
        navigationType: l
      };
    }
  }, [m, w, y, _, v, j, l]);
  if (b == null) {
    return null;
  } else {
    return k.createElement(tr.Provider, {
      value: g
    }, k.createElement(Yo.Provider, {
      children: r,
      value: b
    }));
  }
}
function Wf(n) {
  let {
    children: e,
    location: r
  } = n;
  return Gv(ou(e), r);
}
new Promise(() => {});
function ou(n, e = []) {
  let r = [];
  k.Children.forEach(n, (i, l) => {
    if (!k.isValidElement(i)) {
      return;
    }
    let c = [...e, l];
    if (i.type === k.Fragment) {
      r.push.apply(r, ou(i.props.children, c));
      return;
    }
    if (i.type !== Dt) {
      Ze(false);
    }
    if (!!i.props.index && !!i.props.children) {
      Ze(false);
    }
    let d = {
      id: i.props.id || c.join("-"),
      caseSensitive: i.props.caseSensitive,
      element: i.props.element,
      Component: i.props.Component,
      index: i.props.index,
      path: i.props.path,
      loader: i.props.loader,
      action: i.props.action,
      errorElement: i.props.errorElement,
      ErrorBoundary: i.props.ErrorBoundary,
      hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
      shouldRevalidate: i.props.shouldRevalidate,
      handle: i.props.handle,
      lazy: i.props.lazy
    };
    if (i.props.children) {
      d.children = ou(i.props.children, c);
    }
    r.push(d);
  });
  return r;
} /**
  * React Router DOM v6.30.6
  *
  * Copyright (c) Remix Software Inc.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */
function Oo() {
  Oo = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r) {
        if ({}.hasOwnProperty.call(r, i)) {
          n[i] = r[i];
        }
      }
    }
    return n;
  };
  return Oo.apply(null, arguments);
}
function dp(n, e) {
  if (n == null) {
    return {};
  }
  var r = {};
  for (var i in n) {
    if ({}.hasOwnProperty.call(n, i)) {
      if (e.indexOf(i) !== -1) {
        continue;
      }
      r[i] = n[i];
    }
  }
  return r;
}
function cy(n) {
  return !!n.metaKey || !!n.altKey || !!n.ctrlKey || !!n.shiftKey;
}
function uy(n, e) {
  return n.button === 0 && (!e || e === "_self") && !cy(n);
}
function lu(n = "") {
  return new URLSearchParams(typeof n == "string" || Array.isArray(n) || n instanceof URLSearchParams ? n : Object.keys(n).reduce((e, r) => {
    let i = n[r];
    return e.concat(Array.isArray(i) ? i.map(l => [r, l]) : [[r, i]]);
  }, []));
}
function dy(n, e) {
  let r = lu(n);
  if (e) {
    e.forEach((i, l) => {
      if (!r.has(l)) {
        e.getAll(l).forEach(c => {
          r.append(l, c);
        });
      }
    });
  }
  return r;
}
const hy = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
const fy = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"];
const my = "6";
try {
  window.__reactRouterVersion = my;
} catch {}
const py = k.createContext({
  isTransitioning: false
});
const gy = "startTransition";
const qf = pv[gy];
function _Component42(n) {
  let {
    basename: e,
    children: r,
    future: i,
    window: l
  } = n;
  let c = k.useRef();
  if (c.current == null) {
    c.current = _v({
      window: l,
      v5Compat: true
    });
  }
  let d = c.current;
  let [h, m] = k.useState({
    action: d.action,
    location: d.location
  });
  let {
    v7_startTransition: g
  } = i || {};
  let w = k.useCallback(y => {
    if (g && qf) {
      qf(() => m(y));
    } else {
      m(y);
    }
  }, [m, g]);
  k.useLayoutEffect(() => d.listen(w), [d, w]);
  k.useEffect(() => oy(i), [i]);
  return k.createElement(ly, {
    basename: e,
    children: r,
    location: h.location,
    navigationType: h.action,
    navigator: d,
    future: i
  });
}
const yy = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const wy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const _Component14 = k.forwardRef(function (e, r) {
  let {
    onClick: i,
    relative: l,
    reloadDocument: c,
    replace: d,
    state: h,
    target: m,
    to: g,
    preventScrollReset: w,
    viewTransition: y
  } = e;
  let _ = dp(e, hy);
  let {
    basename: v
  } = k.useContext(tr);
  let j;
  let b = false;
  if (typeof g == "string" && wy.test(g) && (j = g, yy)) {
    try {
      let R = new URL(window.location.href);
      let W = g.startsWith("//") ? new URL(R.protocol + g) : new URL(g);
      let I = Xs(W.pathname, v);
      if (W.origin === R.origin && I != null) {
        g = I + W.search + W.hash;
      } else {
        b = true;
      }
    } catch {}
  }
  let C = Hv(g, {
    relative: l
  });
  let O = _y(g, {
    replace: d,
    state: h,
    target: m,
    preventScrollReset: w,
    relative: l,
    viewTransition: y
  });
  function L(R) {
    if (i) {
      i(R);
    }
    if (!R.defaultPrevented) {
      O(R);
    }
  }
  return k.createElement("a", Oo({}, _, {
    href: j || C,
    onClick: b || c ? i : L,
    ref: r,
    target: m
  }));
});
const Kc = k.forwardRef(function (e, r) {
  let {
    "aria-current": i = "page",
    caseSensitive: l = false,
    className: c = "",
    end: d = false,
    style: h,
    to: m,
    viewTransition: g,
    children: w
  } = e;
  let y = dp(e, fy);
  let _ = Xo(m, {
    relative: y.relative
  });
  let v = On();
  let j = k.useContext(ap);
  let {
    navigator: b,
    basename: C
  } = k.useContext(tr);
  let O = j != null && jy(_) && g === true;
  let L = b.encodeLocation ? b.encodeLocation(_).pathname : _.pathname;
  let R = v.pathname;
  let W = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
  if (!l) {
    R = R.toLowerCase();
    W = W ? W.toLowerCase() : null;
    L = L.toLowerCase();
  }
  if (W && C) {
    W = Xs(W, C) || W;
  }
  const I = L !== "/" && L.endsWith("/") ? L.length - 1 : L.length;
  let z = R === L || !d && R.startsWith(L) && R.charAt(I) === "/";
  let X = W != null && (W === L || !d && W.startsWith(L) && W.charAt(L.length) === "/");
  let le = {
    isActive: z,
    isPending: X,
    isTransitioning: O
  };
  let G = z ? i : undefined;
  let B;
  if (typeof c == "function") {
    B = c(le);
  } else {
    B = [c, z ? "active" : null, X ? "pending" : null, O ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let re = typeof h == "function" ? h(le) : h;
  return k.createElement(_Component14, Oo({}, y, {
    "aria-current": G,
    className: B,
    ref: r,
    style: re,
    to: m,
    viewTransition: g
  }), typeof w == "function" ? w(le) : w);
});
var uu;
(function (n) {
  n.UseScrollRestoration = "useScrollRestoration";
  n.UseSubmit = "useSubmit";
  n.UseSubmitFetcher = "useSubmitFetcher";
  n.UseFetcher = "useFetcher";
  n.useViewTransitionState = "useViewTransitionState";
})(uu ||= {});
var Hf;
(function (n) {
  n.UseFetcher = "useFetcher";
  n.UseFetchers = "useFetchers";
  n.UseScrollRestoration = "useScrollRestoration";
})(Hf ||= {});
function xy(n) {
  let e = k.useContext(Qo);
  if (!e) {
    Ze(false);
  }
  return e;
}
function _y(n, e) {
  let {
    target: r,
    replace: i,
    state: l,
    preventScrollReset: c,
    relative: d,
    viewTransition: h
  } = e === undefined ? {} : e;
  let m = on();
  let g = On();
  let w = Xo(n, {
    relative: d
  });
  return k.useCallback(y => {
    if (uy(y, r)) {
      y.preventDefault();
      let _ = i !== undefined ? i : Po(g) === Po(w);
      m(n, {
        replace: _,
        state: l,
        preventScrollReset: c,
        relative: d,
        viewTransition: h
      });
    }
  }, [g, m, w, i, l, r, n, c, d, h]);
}
function li(n) {
  let e = k.useRef(lu(n));
  let r = k.useRef(false);
  let i = On();
  let l = k.useMemo(() => dy(i.search, r.current ? null : e.current), [i.search]);
  let c = on();
  let d = k.useCallback((h, m) => {
    const g = lu(typeof h == "function" ? h(l) : h);
    r.current = true;
    c("?" + g, m);
  }, [c, l]);
  return [l, d];
}
function jy(n, e = {}) {
  let r = k.useContext(py);
  if (r == null) {
    Ze(false);
  }
  let {
    basename: i
  } = xy(uu.useViewTransitionState);
  let l = Xo(n, {
    relative: e.relative
  });
  if (!r.isTransitioning) {
    return false;
  }
  let c = Xs(r.currentLocation.pathname, i) || r.currentLocation.pathname;
  let d = Xs(r.nextLocation.pathname, i) || r.nextLocation.pathname;
  return iu(l.pathname, d) != null || iu(l.pathname, c) != null;
}
const ky = [{
  id: "m-sofia",
  name: "Sofia Reyes",
  role: "Account Executive",
  photo: "sofia-reyes",
  quota: 420000
}, {
  id: "m-theo",
  name: "Theo Adeyemi",
  role: "Account Executive",
  photo: "theo-adeyemi",
  quota: 380000
}, {
  id: "m-amara",
  name: "Amara Okafor",
  role: "Sales Engineer",
  photo: "amara-okafor",
  quota: 300000
}, {
  id: "m-rohan",
  name: "Rohan Mehta",
  role: "Head of Sales",
  photo: "rohan-mehta",
  quota: 520000
}, {
  id: "m-hanna",
  name: "Hanna Lindqvist",
  role: "Customer Success",
  photo: "hanna-lindqvist",
  quota: 260000
}];
const by = [{
  id: "clara-vos",
  first: "Clara",
  last: "Vos",
  role: "Head of Operations",
  company: "Tidewater Freight",
  industry: "Logistics",
  segment: "Enterprise",
  city: "Rotterdam",
  email: "clara@tidewater-freight.com",
  phone: "+31 10 736 9460",
  sources: ["whatsapp", "slack", "linkedin", "discord"],
  owner: "m-sofia",
  since: -15724800000,
  lastContacted: -657000000,
  favorite: true,
  health: 86,
  photo: "clara-vos"
}, {
  id: "daniel-osei",
  first: "Daniel",
  last: "Osei",
  role: "VP Procurement",
  company: "Brightmoor Clinics",
  industry: "Healthcare",
  segment: "Enterprise",
  city: "London",
  email: "daniel@brightmoor.health",
  phone: "+44 20 557 7883",
  sources: ["discord"],
  owner: "m-sofia",
  since: -1728000000,
  lastContacted: -22500000,
  favorite: true,
  health: 51,
  photo: "daniel-osei"
}, {
  id: "kenji-arai",
  first: "Kenji",
  last: "Arai",
  role: "Founder & CEO",
  company: "Lumio Solar",
  industry: "Energy",
  segment: "Mid-market",
  city: "Osaka",
  email: "kenji@lumiosolar.jp",
  phone: "+81 6 254 4741",
  sources: ["whatsapp", "linkedin", "web"],
  owner: "m-sofia",
  since: -2073600000,
  lastContacted: -745200000,
  favorite: false,
  health: 93,
  photo: "kenji-arai"
}, {
  id: "graham-whitley",
  first: "Graham",
  last: "Whitley",
  role: "Chief Financial Officer",
  company: "Fennick & Rowe",
  industry: "Legal",
  segment: "Mid-market",
  city: "Edinburgh",
  email: "graham@fennickrowe.co.uk",
  phone: "+44 131 405 5585",
  sources: ["whatsapp", "slack", "web"],
  owner: "m-hanna",
  since: -8812800000,
  lastContacted: -298800000,
  favorite: false,
  health: 74,
  photo: "graham-whitley"
}, {
  id: "mei-tanaka",
  first: "Mei",
  last: "Tanaka",
  role: "IT Director",
  company: "Aldercrest Hotels",
  industry: "Hospitality",
  segment: "Enterprise",
  city: "Singapore",
  email: "mei@aldercrest.com",
  phone: "+65 683 2909",
  sources: ["linkedin", "discord", "web"],
  owner: "m-sofia",
  since: -22896000000,
  lastContacted: 57600000,
  favorite: false,
  health: 91,
  photo: "mei-tanaka"
}, {
  id: "lucia-moreno",
  first: "Lucía",
  last: "Moreno",
  role: "Purchasing Lead",
  company: "Copperline Foods",
  industry: "Food & Beverage",
  segment: "Mid-market",
  city: "Madrid",
  email: "lucia@copperline.es",
  phone: "+34 91 373 4173",
  sources: ["whatsapp", "slack", "discord"],
  owner: "m-hanna",
  since: -172800000,
  lastContacted: -648000000,
  favorite: false,
  health: 72,
  photo: "lucia-moreno"
}, {
  id: "karim-haddad",
  first: "Karim",
  last: "Haddad",
  role: "Chief Operating Officer",
  company: "Orchard Row Bank",
  industry: "Finance",
  segment: "Enterprise",
  city: "Dubai",
  email: "karim@orchardrow.ae",
  phone: "+971 4 322 2648",
  sources: ["whatsapp", "linkedin", "discord", "email"],
  owner: "m-amara",
  since: -17020800000,
  lastContacted: -122400000,
  favorite: false,
  health: 89,
  photo: "karim-haddad"
}, {
  id: "priya-natarajan",
  first: "Priya",
  last: "Natarajan",
  role: "Head of Data",
  company: "Quillon Analytics",
  industry: "Software",
  segment: "SMB",
  city: "Bengaluru",
  email: "priya@quillon.io",
  phone: "+91 80 895 2721",
  sources: ["linkedin", "web"],
  owner: "m-amara",
  since: -21081600000,
  lastContacted: 50400000,
  favorite: false,
  health: 58
}, {
  id: "jonas-becker",
  first: "Jonas",
  last: "Becker",
  role: "Operations Manager",
  company: "Hafenwerk",
  industry: "Manufacturing",
  segment: "Mid-market",
  city: "Hamburg",
  email: "jonas@hafenwerk.de",
  phone: "+49 40 596 1647",
  sources: ["whatsapp", "slack", "linkedin", "web"],
  owner: "m-hanna",
  since: -13564800000,
  lastContacted: -725400000,
  favorite: false,
  health: 87
}, {
  id: "elena-rossi",
  first: "Elena",
  last: "Rossi",
  role: "Marketing Director",
  company: "Vela Cosmetics",
  industry: "Retail",
  segment: "Mid-market",
  city: "Milan",
  email: "elena@velacosmetics.it",
  phone: "+39 02 455 8714",
  sources: ["discord", "web"],
  owner: "m-theo",
  since: -11145600000,
  lastContacted: -207000000,
  favorite: false,
  health: 88
}, {
  id: "marcus-bell",
  first: "Marcus",
  last: "Bell",
  role: "Owner",
  company: "Bell & Birch Joinery",
  industry: "Construction",
  segment: "SMB",
  city: "Leeds",
  email: "marcus@bellbirch.co.uk",
  phone: "+44 113 712 7251",
  sources: ["whatsapp", "slack", "linkedin", "discord", "email"],
  owner: "m-amara",
  since: -34992000000,
  lastContacted: -459900000,
  favorite: false,
  health: 59
}, {
  id: "aisha-rahman",
  first: "Aisha",
  last: "Rahman",
  role: "Product Lead",
  company: "Nimbus Health",
  industry: "Healthcare",
  segment: "SMB",
  city: "Dhaka",
  email: "aisha@nimbushealth.app",
  phone: "+880 2 774 5530",
  sources: ["whatsapp", "linkedin", "discord", "web"],
  owner: "m-theo",
  since: -86400000,
  lastContacted: 36900000,
  favorite: false,
  health: 91
}, {
  id: "tomas-silva",
  first: "Tomás",
  last: "Silva",
  role: "Chief Technology Officer",
  company: "Corvo Mobility",
  industry: "Transport",
  segment: "Mid-market",
  city: "Lisbon",
  email: "tomas@corvo.pt",
  phone: "+351 21 739 2980",
  sources: ["whatsapp", "web"],
  owner: "m-sofia",
  since: -34992000000,
  lastContacted: -122400000,
  favorite: false,
  health: 92
}, {
  id: "nadia-petrova",
  first: "Nadia",
  last: "Petrova",
  role: "Finance Director",
  company: "Sable Freight",
  industry: "Logistics",
  segment: "Enterprise",
  city: "Warsaw",
  email: "nadia@sablefreight.pl",
  phone: "+48 22 362 5724",
  sources: ["slack", "discord", "web"],
  owner: "m-rohan",
  since: -14083200000,
  lastContacted: -644400000,
  favorite: false,
  health: 97
}, {
  id: "oliver-grant",
  first: "Oliver",
  last: "Grant",
  role: "General Manager",
  company: "Northgate Cinemas",
  industry: "Media",
  segment: "SMB",
  city: "Manchester",
  email: "oliver@northgate.film",
  phone: "+44 161 689 6825",
  sources: ["slack", "linkedin", "discord", "email", "web"],
  owner: "m-hanna",
  since: -17971200000,
  lastContacted: -309600000,
  favorite: false,
  health: 50
}, {
  id: "yuki-mori",
  first: "Yuki",
  last: "Mori",
  role: "Head of IT",
  company: "Kumo Retail",
  industry: "Retail",
  segment: "Enterprise",
  city: "Tokyo",
  email: "yuki@kumoretail.jp",
  phone: "+81 3 309 3504",
  sources: ["slack", "discord"],
  owner: "m-hanna",
  since: -30585600000,
  lastContacted: -384300000,
  favorite: false,
  health: 96
}, {
  id: "sara-lindholm",
  first: "Sara",
  last: "Lindholm",
  role: "Operations Lead",
  company: "Fjord Outdoor",
  industry: "Retail",
  segment: "SMB",
  city: "Oslo",
  email: "sara@fjordoutdoor.no",
  phone: "+47 22 882 2070",
  sources: ["whatsapp", "slack", "linkedin", "web"],
  owner: "m-theo",
  since: -12182400000,
  lastContacted: -140400000,
  favorite: false,
  health: 54
}, {
  id: "ben-carter",
  first: "Ben",
  last: "Carter",
  role: "Founder",
  company: "Loop Coffee Co.",
  industry: "Food & Beverage",
  segment: "SMB",
  city: "Portland",
  email: "ben@loopcoffee.co",
  phone: "+1 503 383 3364",
  sources: ["linkedin", "discord", "email"],
  owner: "m-hanna",
  since: -259200000,
  lastContacted: -637200000,
  favorite: false,
  health: 65
}, {
  id: "fatima-zahra",
  first: "Fatima",
  last: "Zahra",
  role: "Procurement Manager",
  company: "Atlas Ceramics",
  industry: "Manufacturing",
  segment: "Mid-market",
  city: "Casablanca",
  email: "fatima@atlasceramics.ma",
  phone: "+212 5 500 5855",
  sources: ["whatsapp", "email"],
  owner: "m-amara",
  since: -4147200000,
  lastContacted: -480600000,
  favorite: false,
  health: 64
}, {
  id: "leo-martins",
  first: "Leo",
  last: "Martins",
  role: "Chief Executive",
  company: "Brisa Travel",
  industry: "Travel",
  segment: "SMB",
  city: "Porto",
  email: "leo@brisatravel.pt",
  phone: "+351 22 744 3973",
  sources: ["slack", "linkedin"],
  owner: "m-theo",
  since: -10627200000,
  lastContacted: -129600000,
  favorite: false,
  health: 78
}, {
  id: "grace-liu",
  first: "Grace",
  last: "Liu",
  role: "VP Sales",
  company: "Peakline Software",
  industry: "Software",
  segment: "Mid-market",
  city: "Vancouver",
  email: "grace@peakline.dev",
  phone: "+1 604 729 3643",
  sources: ["whatsapp", "linkedin", "discord", "email"],
  owner: "m-theo",
  since: -15120000000,
  lastContacted: 63900000,
  favorite: false,
  health: 59
}, {
  id: "hugo-laurent",
  first: "Hugo",
  last: "Laurent",
  role: "Managing Director",
  company: "Maison Clair Hotels",
  industry: "Hospitality",
  segment: "Mid-market",
  city: "Lyon",
  email: "hugo@maisonclair.fr",
  phone: "+33 4 845 2759",
  sources: ["whatsapp", "web"],
  owner: "m-rohan",
  since: -7084800000,
  lastContacted: -49500000,
  favorite: false,
  health: 59
}, {
  id: "isabel-cruz",
  first: "Isabel",
  last: "Cruz",
  role: "Head of Operations",
  company: "Verde Farms",
  industry: "Agriculture",
  segment: "SMB",
  city: "Seville",
  email: "isabel@verdefarms.es",
  phone: "+34 95 505 4280",
  sources: ["whatsapp", "email", "web"],
  owner: "m-rohan",
  since: -34214400000,
  lastContacted: -375300000,
  favorite: false,
  health: 56
}, {
  id: "noah-fischer",
  first: "Noah",
  last: "Fischer",
  role: "IT Manager",
  company: "Alpenrail",
  industry: "Transport",
  segment: "Enterprise",
  city: "Zurich",
  email: "noah@alpenrail.ch",
  phone: "+41 44 535 3620",
  sources: ["slack", "discord"],
  owner: "m-amara",
  since: 0,
  lastContacted: -44100000,
  favorite: false,
  health: 69
}];
const Sy = [{
  id: "d1",
  customerId: "clara-vos",
  title: "Annual renewal",
  stage: "negotiate",
  amount: 18190,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-amara"],
  notes: "Budget confirmed for this quarter.",
  created: -3283200000,
  close: 1728000000
}, {
  id: "d2",
  customerId: "clara-vos",
  title: "Fleet licence expansion",
  stage: "proposal",
  amount: 54350,
  owner: "m-sofia",
  team: ["m-sofia", "m-theo", "m-hanna"],
  notes: "Comparing us with one other vendor on price.",
  created: -3801600000,
  close: 777600000
}, {
  id: "d3",
  customerId: "clara-vos",
  title: "Pilot rollout, 3 sites",
  stage: "closing",
  amount: 19630,
  owner: "m-sofia",
  team: ["m-sofia", "m-theo", "m-hanna"],
  notes: "Wants a pilot before committing the wider team.",
  created: -5011200000,
  close: 1555200000
}, {
  id: "d4",
  customerId: "clara-vos",
  title: "Support plan upgrade",
  stage: "qualify",
  amount: 22060,
  owner: "m-sofia",
  team: ["m-sofia", "m-theo", "m-hanna"],
  notes: "Legal review is the long pole — start early.",
  created: -3456000000,
  close: 518400000
}, {
  id: "d5",
  customerId: "clara-vos",
  title: "Data migration package",
  stage: "won",
  amount: 12850,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-rohan"],
  notes: "Budget confirmed for this quarter.",
  created: -1900800000,
  close: -86400000
}, {
  id: "d6",
  customerId: "clara-vos",
  title: "Onboarding services",
  stage: "won",
  amount: 17820,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-theo"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -28252800000,
  close: -26524800000
}, {
  id: "d7",
  customerId: "clara-vos",
  title: "Analytics add-on",
  stage: "proposal",
  amount: 35230,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-theo"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -1209600000,
  close: 432000000
}, {
  id: "d8",
  customerId: "clara-vos",
  title: "Multi-year platform deal",
  stage: "won",
  amount: 4320,
  owner: "m-sofia",
  team: ["m-sofia", "m-theo", "m-amara"],
  notes: "Budget confirmed for this quarter.",
  created: -3024000000,
  close: -518400000
}, {
  id: "d9",
  customerId: "daniel-osei",
  title: "Support plan upgrade",
  stage: "won",
  amount: 9450,
  owner: "m-sofia",
  team: ["m-sofia", "m-theo", "m-amara"],
  notes: "Budget confirmed for this quarter.",
  created: -29548800000,
  close: -26956800000
}, {
  id: "d10",
  customerId: "daniel-osei",
  title: "Data migration package",
  stage: "lost",
  amount: 28030,
  owner: "m-sofia",
  team: ["m-sofia", "m-amara", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -9244800000,
  close: -6825600000
}, {
  id: "d11",
  customerId: "daniel-osei",
  title: "Onboarding services",
  stage: "lost",
  amount: 29270,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-rohan"],
  notes: "Legal review is the long pole — start early.",
  created: -13651200000,
  close: -11318400000
}, {
  id: "d12",
  customerId: "daniel-osei",
  title: "Analytics add-on",
  stage: "won",
  amount: 37810,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-rohan"],
  notes: "Legal review is the long pole — start early.",
  created: -20390400000,
  close: -16588800000
}, {
  id: "d13",
  customerId: "daniel-osei",
  title: "Multi-year platform deal",
  stage: "won",
  amount: 48220,
  owner: "m-sofia",
  team: ["m-sofia", "m-amara", "m-rohan"],
  notes: "Comparing us with one other vendor on price.",
  created: -21600000000,
  close: -20649600000
}, {
  id: "d14",
  customerId: "daniel-osei",
  title: "Security review bundle",
  stage: "negotiate",
  amount: 63550,
  owner: "m-sofia",
  team: ["m-sofia", "m-theo", "m-hanna"],
  notes: "Comparing us with one other vendor on price.",
  created: -950400000,
  close: 5270400000
}, {
  id: "d15",
  customerId: "daniel-osei",
  title: "Team training workshops",
  stage: "negotiate",
  amount: 46120,
  owner: "m-sofia",
  team: ["m-sofia", "m-rohan", "m-theo"],
  notes: "Budget confirmed for this quarter.",
  created: -3283200000,
  close: 2678400000
}, {
  id: "d16",
  customerId: "kenji-arai",
  title: "Analytics add-on",
  stage: "won",
  amount: 34500,
  owner: "m-sofia",
  team: ["m-sofia", "m-theo", "m-amara"],
  notes: "Comparing us with one other vendor on price.",
  created: -6220800000,
  close: -5270400000
}, {
  id: "d17",
  customerId: "kenji-arai",
  title: "Multi-year platform deal",
  stage: "closing",
  amount: 22190,
  owner: "m-sofia",
  team: ["m-sofia", "m-theo", "m-amara"],
  notes: "Wants a pilot before committing the wider team.",
  created: -172800000,
  close: 3024000000
}, {
  id: "d18",
  customerId: "kenji-arai",
  title: "Security review bundle",
  stage: "proposal",
  amount: 23650,
  owner: "m-sofia",
  team: ["m-sofia", "m-theo", "m-hanna"],
  notes: "Legal review is the long pole — start early.",
  created: -3369600000,
  close: 5097600000
}, {
  id: "d19",
  customerId: "kenji-arai",
  title: "Team training workshops",
  stage: "closing",
  amount: 20070,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-amara"],
  notes: "Legal review is the long pole — start early.",
  created: -1987200000,
  close: 604800000
}, {
  id: "d20",
  customerId: "graham-whitley",
  title: "Team training workshops",
  stage: "negotiate",
  amount: 7650,
  owner: "m-hanna",
  team: ["m-hanna", "m-sofia", "m-theo"],
  notes: "Budget confirmed for this quarter.",
  created: -4233600000,
  close: 518400000
}, {
  id: "d21",
  customerId: "graham-whitley",
  title: "API access tier",
  stage: "won",
  amount: 35520,
  owner: "m-hanna",
  team: ["m-hanna", "m-amara", "m-theo"],
  notes: "Budget confirmed for this quarter.",
  created: -14947200000,
  close: -11664000000
}, {
  id: "d22",
  customerId: "graham-whitley",
  title: "Regional expansion",
  stage: "qualify",
  amount: 14100,
  owner: "m-hanna",
  team: ["m-hanna", "m-sofia", "m-theo"],
  notes: "Legal review is the long pole — start early.",
  created: -950400000,
  close: 6480000000
}, {
  id: "d23",
  customerId: "graham-whitley",
  title: "Seat true-up",
  stage: "negotiate",
  amount: 20230,
  owner: "m-hanna",
  team: ["m-hanna", "m-amara", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -4147200000,
  close: 1728000000
}, {
  id: "d24",
  customerId: "graham-whitley",
  title: "Premium SLA",
  stage: "closing",
  amount: 8160,
  owner: "m-hanna",
  team: ["m-hanna", "m-amara", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -259200000,
  close: 3628800000
}, {
  id: "d25",
  customerId: "graham-whitley",
  title: "Integration build",
  stage: "closing",
  amount: 29950,
  owner: "m-hanna",
  team: ["m-hanna", "m-amara", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -777600000,
  close: 2678400000
}, {
  id: "d26",
  customerId: "mei-tanaka",
  title: "Seat true-up",
  stage: "proposal",
  amount: 61310,
  owner: "m-sofia",
  team: ["m-sofia", "m-theo", "m-rohan"],
  notes: "Budget confirmed for this quarter.",
  created: -4320000000,
  close: 1641600000
}, {
  id: "d27",
  customerId: "mei-tanaka",
  title: "Premium SLA",
  stage: "won",
  amount: 12390,
  owner: "m-sofia",
  team: ["m-sofia", "m-rohan", "m-hanna"],
  notes: "Legal review is the long pole — start early.",
  created: -25660800000,
  close: -23068800000
}, {
  id: "d28",
  customerId: "mei-tanaka",
  title: "Integration build",
  stage: "lost",
  amount: 42120,
  owner: "m-sofia",
  team: ["m-sofia", "m-rohan", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -34732800000,
  close: -31276800000
}, {
  id: "d29",
  customerId: "mei-tanaka",
  title: "Annual renewal",
  stage: "proposal",
  amount: 12960,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-rohan"],
  notes: "Comparing us with one other vendor on price.",
  created: -604800000,
  close: 5443200000
}, {
  id: "d30",
  customerId: "mei-tanaka",
  title: "Fleet licence expansion",
  stage: "won",
  amount: 13830,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-rohan"],
  notes: "Budget confirmed for this quarter.",
  created: -16675200000,
  close: -15724800000
}, {
  id: "d31",
  customerId: "mei-tanaka",
  title: "Pilot rollout, 3 sites",
  stage: "proposal",
  amount: 42980,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -1900800000,
  close: 3715200000
}, {
  id: "d32",
  customerId: "lucia-moreno",
  title: "Annual renewal",
  stage: "qualify",
  amount: 7390,
  owner: "m-hanna",
  team: ["m-hanna", "m-rohan", "m-sofia"],
  notes: "Comparing us with one other vendor on price.",
  created: -432000000,
  close: 2678400000
}, {
  id: "d33",
  customerId: "lucia-moreno",
  title: "Fleet licence expansion",
  stage: "negotiate",
  amount: 19620,
  owner: "m-hanna",
  team: ["m-hanna", "m-sofia", "m-rohan"],
  notes: "Comparing us with one other vendor on price.",
  created: -2419200000,
  close: 1468800000
}, {
  id: "d34",
  customerId: "lucia-moreno",
  title: "Pilot rollout, 3 sites",
  stage: "closing",
  amount: 19420,
  owner: "m-hanna",
  team: ["m-hanna", "m-sofia", "m-theo"],
  notes: "Legal review is the long pole — start early.",
  created: -1987200000,
  close: 518400000
}, {
  id: "d35",
  customerId: "lucia-moreno",
  title: "Support plan upgrade",
  stage: "proposal",
  amount: 14090,
  owner: "m-hanna",
  team: ["m-hanna", "m-rohan", "m-amara"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -1468800000,
  close: 6220800000
}, {
  id: "d36",
  customerId: "lucia-moreno",
  title: "Data migration package",
  stage: "qualify",
  amount: 9920,
  owner: "m-hanna",
  team: ["m-hanna", "m-sofia", "m-theo"],
  notes: "Budget confirmed for this quarter.",
  created: -3974400000,
  close: 2332800000
}, {
  id: "d37",
  customerId: "lucia-moreno",
  title: "Onboarding services",
  stage: "closing",
  amount: 16080,
  owner: "m-hanna",
  team: ["m-hanna", "m-theo", "m-rohan"],
  notes: "Comparing us with one other vendor on price.",
  created: -950400000,
  close: 6220800000
}, {
  id: "d38",
  customerId: "karim-haddad",
  title: "Support plan upgrade",
  stage: "proposal",
  amount: 12720,
  owner: "m-amara",
  team: ["m-amara", "m-sofia", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -4665600000,
  close: 6480000000
}, {
  id: "d39",
  customerId: "karim-haddad",
  title: "Data migration package",
  stage: "won",
  amount: 28680,
  owner: "m-amara",
  team: ["m-amara", "m-rohan", "m-hanna"],
  notes: "Comparing us with one other vendor on price.",
  created: -3542400000,
  close: -345600000
}, {
  id: "d40",
  customerId: "karim-haddad",
  title: "Onboarding services",
  stage: "closing",
  amount: 64750,
  owner: "m-amara",
  team: ["m-amara", "m-rohan", "m-hanna"],
  notes: "Budget confirmed for this quarter.",
  created: -777600000,
  close: 1296000000
}, {
  id: "d41",
  customerId: "karim-haddad",
  title: "Analytics add-on",
  stage: "negotiate",
  amount: 57900,
  owner: "m-amara",
  team: ["m-amara", "m-sofia", "m-theo"],
  notes: "Legal review is the long pole — start early.",
  created: -172800000,
  close: 6480000000
}, {
  id: "d42",
  customerId: "karim-haddad",
  title: "Multi-year platform deal",
  stage: "proposal",
  amount: 20710,
  owner: "m-amara",
  team: ["m-amara", "m-hanna", "m-sofia"],
  notes: "Budget confirmed for this quarter.",
  created: -1123200000,
  close: 6393600000
}, {
  id: "d43",
  customerId: "priya-natarajan",
  title: "Analytics add-on",
  stage: "lost",
  amount: 2870,
  owner: "m-amara",
  team: ["m-amara", "m-rohan", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -17193600000,
  close: -14083200000
}, {
  id: "d44",
  customerId: "priya-natarajan",
  title: "Multi-year platform deal",
  stage: "won",
  amount: 10800,
  owner: "m-amara",
  team: ["m-amara", "m-sofia", "m-theo"],
  notes: "Legal review is the long pole — start early.",
  created: -19699200000,
  close: -18576000000
}, {
  id: "d45",
  customerId: "priya-natarajan",
  title: "Security review bundle",
  stage: "closing",
  amount: 15790,
  owner: "m-amara",
  team: ["m-amara", "m-rohan", "m-hanna"],
  notes: "Comparing us with one other vendor on price.",
  created: -2332800000,
  close: 4752000000
}, {
  id: "d46",
  customerId: "jonas-becker",
  title: "Team training workshops",
  stage: "proposal",
  amount: 4120,
  owner: "m-hanna",
  team: ["m-hanna", "m-rohan", "m-amara"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -172800000,
  close: 5356800000
}, {
  id: "d47",
  customerId: "jonas-becker",
  title: "API access tier",
  stage: "proposal",
  amount: 21190,
  owner: "m-hanna",
  team: ["m-hanna", "m-sofia", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -4924800000,
  close: 4492800000
}, {
  id: "d48",
  customerId: "jonas-becker",
  title: "Regional expansion",
  stage: "lost",
  amount: 34580,
  owner: "m-hanna",
  team: ["m-hanna", "m-sofia", "m-theo"],
  notes: "Comparing us with one other vendor on price.",
  created: -3283200000,
  close: -1123200000
}, {
  id: "d49",
  customerId: "jonas-becker",
  title: "Seat true-up",
  stage: "proposal",
  amount: 25230,
  owner: "m-hanna",
  team: ["m-hanna", "m-amara", "m-rohan"],
  notes: "Budget confirmed for this quarter.",
  created: -4924800000,
  close: 4147200000
}, {
  id: "d50",
  customerId: "jonas-becker",
  title: "Premium SLA",
  stage: "won",
  amount: 4570,
  owner: "m-hanna",
  team: ["m-hanna", "m-amara", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -6739200000,
  close: -5356800000
}, {
  id: "d51",
  customerId: "jonas-becker",
  title: "Integration build",
  stage: "closing",
  amount: 23330,
  owner: "m-hanna",
  team: ["m-hanna", "m-sofia", "m-theo"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -1987200000,
  close: 3715200000
}, {
  id: "d52",
  customerId: "elena-rossi",
  title: "Seat true-up",
  stage: "lost",
  amount: 28470,
  owner: "m-theo",
  team: ["m-theo", "m-sofia", "m-hanna"],
  notes: "Comparing us with one other vendor on price.",
  created: -21945600000,
  close: -18403200000
}, {
  id: "d53",
  customerId: "elena-rossi",
  title: "Premium SLA",
  stage: "closing",
  amount: 14170,
  owner: "m-theo",
  team: ["m-theo", "m-rohan", "m-amara"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -5011200000,
  close: 5788800000
}, {
  id: "d54",
  customerId: "elena-rossi",
  title: "Integration build",
  stage: "negotiate",
  amount: 25440,
  owner: "m-theo",
  team: ["m-theo", "m-rohan", "m-sofia"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -1296000000,
  close: 2073600000
}, {
  id: "d55",
  customerId: "marcus-bell",
  title: "Annual renewal",
  stage: "qualify",
  amount: 5010,
  owner: "m-amara",
  team: ["m-amara", "m-sofia", "m-hanna"],
  notes: "Budget confirmed for this quarter.",
  created: -1123200000,
  close: 3196800000
}, {
  id: "d56",
  customerId: "marcus-bell",
  title: "Fleet licence expansion",
  stage: "qualify",
  amount: 11550,
  owner: "m-amara",
  team: ["m-amara", "m-hanna", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -4579200000,
  close: 4579200000
}, {
  id: "d57",
  customerId: "marcus-bell",
  title: "Pilot rollout, 3 sites",
  stage: "won",
  amount: 10720,
  owner: "m-amara",
  team: ["m-amara", "m-theo", "m-sofia"],
  notes: "Legal review is the long pole — start early.",
  created: -1555200000,
  close: -604800000
}, {
  id: "d58",
  customerId: "marcus-bell",
  title: "Support plan upgrade",
  stage: "negotiate",
  amount: 11140,
  owner: "m-amara",
  team: ["m-amara", "m-sofia", "m-theo"],
  notes: "Comparing us with one other vendor on price.",
  created: -5184000000,
  close: 1900800000
}, {
  id: "d59",
  customerId: "aisha-rahman",
  title: "Support plan upgrade",
  stage: "won",
  amount: 6730,
  owner: "m-theo",
  team: ["m-theo", "m-amara", "m-hanna"],
  notes: "Legal review is the long pole — start early.",
  created: -5788800000,
  close: -2246400000
}, {
  id: "d60",
  customerId: "aisha-rahman",
  title: "Data migration package",
  stage: "won",
  amount: 1630,
  owner: "m-theo",
  team: ["m-theo", "m-hanna", "m-rohan"],
  notes: "Wants a pilot before committing the wider team.",
  created: -21168000000,
  close: -20217600000
}, {
  id: "d61",
  customerId: "tomas-silva",
  title: "Analytics add-on",
  stage: "won",
  amount: 31630,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-rohan"],
  notes: "Comparing us with one other vendor on price.",
  created: -21859200000,
  close: -19094400000
}, {
  id: "d62",
  customerId: "tomas-silva",
  title: "Multi-year platform deal",
  stage: "lost",
  amount: 32730,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-rohan"],
  notes: "Legal review is the long pole — start early.",
  created: -2764800000,
  close: -1382400000
}, {
  id: "d63",
  customerId: "tomas-silva",
  title: "Security review bundle",
  stage: "proposal",
  amount: 20420,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-rohan"],
  notes: "Legal review is the long pole — start early.",
  created: -4665600000,
  close: 1209600000
}, {
  id: "d64",
  customerId: "tomas-silva",
  title: "Team training workshops",
  stage: "qualify",
  amount: 32650,
  owner: "m-sofia",
  team: ["m-sofia", "m-theo", "m-amara"],
  notes: "Legal review is the long pole — start early.",
  created: -2851200000,
  close: 3283200000
}, {
  id: "d65",
  customerId: "tomas-silva",
  title: "API access tier",
  stage: "proposal",
  amount: 22800,
  owner: "m-sofia",
  team: ["m-sofia", "m-hanna", "m-rohan"],
  notes: "Comparing us with one other vendor on price.",
  created: -432000000,
  close: 1900800000
}, {
  id: "d66",
  customerId: "tomas-silva",
  title: "Regional expansion",
  stage: "proposal",
  amount: 17770,
  owner: "m-sofia",
  team: ["m-sofia", "m-theo", "m-amara"],
  notes: "Budget confirmed for this quarter.",
  created: -4838400000,
  close: 5443200000
}, {
  id: "d67",
  customerId: "nadia-petrova",
  title: "Team training workshops",
  stage: "won",
  amount: 57650,
  owner: "m-rohan",
  team: ["m-rohan", "m-hanna", "m-sofia"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -8899200000,
  close: -7948800000
}, {
  id: "d68",
  customerId: "nadia-petrova",
  title: "API access tier",
  stage: "closing",
  amount: 14000,
  owner: "m-rohan",
  team: ["m-rohan", "m-hanna", "m-theo"],
  notes: "Budget confirmed for this quarter.",
  created: -4924800000,
  close: 1036800000
}, {
  id: "d69",
  customerId: "nadia-petrova",
  title: "Regional expansion",
  stage: "won",
  amount: 6610,
  owner: "m-rohan",
  team: ["m-rohan", "m-amara", "m-hanna"],
  notes: "Budget confirmed for this quarter.",
  created: -18921600000,
  close: -17193600000
}, {
  id: "d70",
  customerId: "nadia-petrova",
  title: "Seat true-up",
  stage: "proposal",
  amount: 46670,
  owner: "m-rohan",
  team: ["m-rohan", "m-sofia", "m-theo"],
  notes: "Legal review is the long pole — start early.",
  created: -2678400000,
  close: 5356800000
}, {
  id: "d71",
  customerId: "nadia-petrova",
  title: "Premium SLA",
  stage: "lost",
  amount: 17040,
  owner: "m-rohan",
  team: ["m-rohan", "m-theo", "m-sofia"],
  notes: "Comparing us with one other vendor on price.",
  created: -10195200000,
  close: -7257600000
}, {
  id: "d72",
  customerId: "nadia-petrova",
  title: "Integration build",
  stage: "won",
  amount: 11740,
  owner: "m-rohan",
  team: ["m-rohan", "m-sofia", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -7689600000,
  close: -6652800000
}, {
  id: "d73",
  customerId: "nadia-petrova",
  title: "Annual renewal",
  stage: "lost",
  amount: 28940,
  owner: "m-rohan",
  team: ["m-rohan", "m-hanna", "m-theo"],
  notes: "Budget confirmed for this quarter.",
  created: -31708800000,
  close: -28598400000
}, {
  id: "d74",
  customerId: "oliver-grant",
  title: "Seat true-up",
  stage: "won",
  amount: 2020,
  owner: "m-hanna",
  team: ["m-hanna", "m-rohan", "m-amara"],
  notes: "Wants a pilot before committing the wider team.",
  created: -11750400000,
  close: -8035200000
}, {
  id: "d75",
  customerId: "oliver-grant",
  title: "Premium SLA",
  stage: "qualify",
  amount: 4240,
  owner: "m-hanna",
  team: ["m-hanna", "m-theo", "m-sofia"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -5184000000,
  close: 432000000
}, {
  id: "d76",
  customerId: "oliver-grant",
  title: "Integration build",
  stage: "closing",
  amount: 3400,
  owner: "m-hanna",
  team: ["m-hanna", "m-theo", "m-sofia"],
  notes: "Comparing us with one other vendor on price.",
  created: -3369600000,
  close: 5184000000
}, {
  id: "d77",
  customerId: "oliver-grant",
  title: "Annual renewal",
  stage: "won",
  amount: 14710,
  owner: "m-hanna",
  team: ["m-hanna", "m-rohan", "m-amara"],
  notes: "Wants a pilot before committing the wider team.",
  created: -7344000000,
  close: -4060800000
}, {
  id: "d78",
  customerId: "yuki-mori",
  title: "Annual renewal",
  stage: "won",
  amount: 37590,
  owner: "m-hanna",
  team: ["m-hanna", "m-rohan", "m-amara"],
  notes: "Budget confirmed for this quarter.",
  created: -30326400000,
  close: -28425600000
}, {
  id: "d79",
  customerId: "yuki-mori",
  title: "Fleet licence expansion",
  stage: "lost",
  amount: 28080,
  owner: "m-hanna",
  team: ["m-hanna", "m-sofia", "m-rohan"],
  notes: "Wants a pilot before committing the wider team.",
  created: -2764800000,
  close: -1555200000
}, {
  id: "d80",
  customerId: "yuki-mori",
  title: "Pilot rollout, 3 sites",
  stage: "qualify",
  amount: 13110,
  owner: "m-hanna",
  team: ["m-hanna", "m-amara", "m-theo"],
  notes: "Wants a pilot before committing the wider team.",
  created: -1123200000,
  close: 2505600000
}, {
  id: "d81",
  customerId: "yuki-mori",
  title: "Support plan upgrade",
  stage: "negotiate",
  amount: 55320,
  owner: "m-hanna",
  team: ["m-hanna", "m-rohan", "m-amara"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -5011200000,
  close: 1728000000
}, {
  id: "d82",
  customerId: "yuki-mori",
  title: "Data migration package",
  stage: "lost",
  amount: 10590,
  owner: "m-hanna",
  team: ["m-hanna", "m-rohan", "m-sofia"],
  notes: "Budget confirmed for this quarter.",
  created: -20649600000,
  close: -19699200000
}, {
  id: "d83",
  customerId: "yuki-mori",
  title: "Onboarding services",
  stage: "won",
  amount: 47820,
  owner: "m-hanna",
  team: ["m-hanna", "m-amara", "m-rohan"],
  notes: "Legal review is the long pole — start early.",
  created: -6912000000,
  close: -3110400000
}, {
  id: "d84",
  customerId: "sara-lindholm",
  title: "Support plan upgrade",
  stage: "qualify",
  amount: 5670,
  owner: "m-theo",
  team: ["m-theo", "m-hanna", "m-sofia"],
  notes: "Legal review is the long pole — start early.",
  created: -4924800000,
  close: 2160000000
}, {
  id: "d85",
  customerId: "sara-lindholm",
  title: "Data migration package",
  stage: "won",
  amount: 3280,
  owner: "m-theo",
  team: ["m-theo", "m-sofia", "m-amara"],
  notes: "Comparing us with one other vendor on price.",
  created: -29376000000,
  close: -26697600000
}, {
  id: "d86",
  customerId: "ben-carter",
  title: "Analytics add-on",
  stage: "negotiate",
  amount: 6130,
  owner: "m-hanna",
  team: ["m-hanna", "m-rohan", "m-sofia"],
  notes: "Wants a pilot before committing the wider team.",
  created: -3110400000,
  close: 3369600000
}, {
  id: "d87",
  customerId: "ben-carter",
  title: "Multi-year platform deal",
  stage: "won",
  amount: 10250,
  owner: "m-hanna",
  team: ["m-hanna", "m-sofia", "m-theo"],
  notes: "Comparing us with one other vendor on price.",
  created: -15724800000,
  close: -13737600000
}, {
  id: "d88",
  customerId: "ben-carter",
  title: "Security review bundle",
  stage: "proposal",
  amount: 6180,
  owner: "m-hanna",
  team: ["m-hanna", "m-amara", "m-rohan"],
  notes: "Legal review is the long pole — start early.",
  created: -691200000,
  close: 3369600000
}, {
  id: "d89",
  customerId: "fatima-zahra",
  title: "Team training workshops",
  stage: "qualify",
  amount: 17330,
  owner: "m-amara",
  team: ["m-amara", "m-hanna", "m-rohan"],
  notes: "Budget confirmed for this quarter.",
  created: -3715200000,
  close: 2332800000
}, {
  id: "d90",
  customerId: "fatima-zahra",
  title: "API access tier",
  stage: "qualify",
  amount: 25650,
  owner: "m-amara",
  team: ["m-amara", "m-hanna", "m-rohan"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -3715200000,
  close: 4060800000
}, {
  id: "d91",
  customerId: "fatima-zahra",
  title: "Regional expansion",
  stage: "qualify",
  amount: 10560,
  owner: "m-amara",
  team: ["m-amara", "m-sofia", "m-theo"],
  notes: "Comparing us with one other vendor on price.",
  created: -5097600000,
  close: 1296000000
}, {
  id: "d92",
  customerId: "fatima-zahra",
  title: "Seat true-up",
  stage: "proposal",
  amount: 7110,
  owner: "m-amara",
  team: ["m-amara", "m-hanna", "m-rohan"],
  notes: "Budget confirmed for this quarter.",
  created: -3369600000,
  close: 6048000000
}, {
  id: "d93",
  customerId: "fatima-zahra",
  title: "Premium SLA",
  stage: "won",
  amount: 4480,
  owner: "m-amara",
  team: ["m-amara", "m-theo", "m-sofia"],
  notes: "Legal review is the long pole — start early.",
  created: -21168000000,
  close: -18835200000
}, {
  id: "d94",
  customerId: "fatima-zahra",
  title: "Integration build",
  stage: "won",
  amount: 7080,
  owner: "m-amara",
  team: ["m-amara", "m-sofia", "m-theo"],
  notes: "Budget confirmed for this quarter.",
  created: -24537600000,
  close: -22032000000
}, {
  id: "d95",
  customerId: "leo-martins",
  title: "Seat true-up",
  stage: "lost",
  amount: 8430,
  owner: "m-theo",
  team: ["m-theo", "m-hanna", "m-rohan"],
  notes: "Budget confirmed for this quarter.",
  created: -28512000000,
  close: -27129600000
}, {
  id: "d96",
  customerId: "leo-martins",
  title: "Premium SLA",
  stage: "lost",
  amount: 12220,
  owner: "m-theo",
  team: ["m-theo", "m-sofia", "m-amara"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -28425600000,
  close: -24624000000
}, {
  id: "d97",
  customerId: "leo-martins",
  title: "Integration build",
  stage: "won",
  amount: 13770,
  owner: "m-theo",
  team: ["m-theo", "m-hanna", "m-rohan"],
  notes: "Legal review is the long pole — start early.",
  created: -30585600000,
  close: -29721600000
}, {
  id: "d98",
  customerId: "leo-martins",
  title: "Annual renewal",
  stage: "won",
  amount: 6110,
  owner: "m-theo",
  team: ["m-theo", "m-sofia", "m-amara"],
  notes: "Legal review is the long pole — start early.",
  created: -31622400000,
  close: -28512000000
}, {
  id: "d99",
  customerId: "grace-liu",
  title: "Annual renewal",
  stage: "won",
  amount: 3810,
  owner: "m-theo",
  team: ["m-theo", "m-rohan", "m-hanna"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -16416000000,
  close: -13996800000
}, {
  id: "d100",
  customerId: "grace-liu",
  title: "Fleet licence expansion",
  stage: "won",
  amount: 17810,
  owner: "m-theo",
  team: ["m-theo", "m-hanna", "m-rohan"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -10195200000,
  close: -6825600000
}, {
  id: "d101",
  customerId: "grace-liu",
  title: "Pilot rollout, 3 sites",
  stage: "won",
  amount: 5520,
  owner: "m-theo",
  team: ["m-theo", "m-rohan", "m-amara"],
  notes: "Wants a pilot before committing the wider team.",
  created: -25747200000,
  close: -24624000000
}, {
  id: "d102",
  customerId: "grace-liu",
  title: "Support plan upgrade",
  stage: "won",
  amount: 5640,
  owner: "m-theo",
  team: ["m-theo", "m-hanna", "m-sofia"],
  notes: "Wants a pilot before committing the wider team.",
  created: -14601600000,
  close: -11145600000
}, {
  id: "d103",
  customerId: "hugo-laurent",
  title: "Support plan upgrade",
  stage: "qualify",
  amount: 11500,
  owner: "m-rohan",
  team: ["m-rohan", "m-hanna", "m-amara"],
  notes: "Comparing us with one other vendor on price.",
  created: -518400000,
  close: 4492800000
}, {
  id: "d104",
  customerId: "hugo-laurent",
  title: "Data migration package",
  stage: "lost",
  amount: 8700,
  owner: "m-rohan",
  team: ["m-rohan", "m-sofia", "m-amara"],
  notes: "Budget confirmed for this quarter.",
  created: -14342400000,
  close: -12614400000
}, {
  id: "d105",
  customerId: "hugo-laurent",
  title: "Onboarding services",
  stage: "lost",
  amount: 26080,
  owner: "m-rohan",
  team: ["m-rohan", "m-amara", "m-sofia"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -9590400000,
  close: -7603200000
}, {
  id: "d106",
  customerId: "hugo-laurent",
  title: "Analytics add-on",
  stage: "qualify",
  amount: 5450,
  owner: "m-rohan",
  team: ["m-rohan", "m-hanna", "m-sofia"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -2073600000,
  close: 2332800000
}, {
  id: "d107",
  customerId: "isabel-cruz",
  title: "Analytics add-on",
  stage: "lost",
  amount: 6780,
  owner: "m-rohan",
  team: ["m-rohan", "m-theo", "m-sofia"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -9331200000,
  close: -8294400000
}, {
  id: "d108",
  customerId: "isabel-cruz",
  title: "Multi-year platform deal",
  stage: "negotiate",
  amount: 12830,
  owner: "m-rohan",
  team: ["m-rohan", "m-amara", "m-hanna"],
  notes: "Budget confirmed for this quarter.",
  created: -4752000000,
  close: 4665600000
}, {
  id: "d109",
  customerId: "isabel-cruz",
  title: "Security review bundle",
  stage: "won",
  amount: 9070,
  owner: "m-rohan",
  team: ["m-rohan", "m-sofia", "m-theo"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -12182400000,
  close: -9244800000
}, {
  id: "d110",
  customerId: "noah-fischer",
  title: "Team training workshops",
  stage: "won",
  amount: 16010,
  owner: "m-amara",
  team: ["m-amara", "m-hanna", "m-theo"],
  notes: "Comparing us with one other vendor on price.",
  created: -21427200000,
  close: -20217600000
}, {
  id: "d111",
  customerId: "noah-fischer",
  title: "API access tier",
  stage: "closing",
  amount: 38470,
  owner: "m-amara",
  team: ["m-amara", "m-hanna", "m-rohan"],
  notes: "Legal review is the long pole — start early.",
  created: -4838400000,
  close: 4406400000
}, {
  id: "d112",
  customerId: "noah-fischer",
  title: "Regional expansion",
  stage: "qualify",
  amount: 29520,
  owner: "m-amara",
  team: ["m-amara", "m-sofia", "m-theo"],
  notes: "Legal review is the long pole — start early.",
  created: -3456000000,
  close: 5788800000
}, {
  id: "d113",
  customerId: "noah-fischer",
  title: "Seat true-up",
  stage: "qualify",
  amount: 39920,
  owner: "m-amara",
  team: ["m-amara", "m-sofia", "m-theo"],
  notes: "Budget confirmed for this quarter.",
  created: -2419200000,
  close: 6134400000
}, {
  id: "d114",
  customerId: "noah-fischer",
  title: "Premium SLA",
  stage: "won",
  amount: 18610,
  owner: "m-amara",
  team: ["m-amara", "m-hanna", "m-sofia"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -16243200000,
  close: -14515200000
}, {
  id: "d115",
  customerId: "noah-fischer",
  title: "Integration build",
  stage: "won",
  amount: 34610,
  owner: "m-amara",
  team: ["m-amara", "m-hanna", "m-rohan"],
  notes: "Champion is the ops lead; finance signs off above $20k.",
  created: -26179200000,
  close: -23587200000
}];
const Cy = [{
  id: "t1",
  customerId: "clara-vos",
  title: "Send revised proposal",
  kind: "email",
  who: "m-rohan",
  at: -739800000,
  done: true
}, {
  id: "t2",
  customerId: "clara-vos",
  title: "Draft contract redlines",
  kind: "task",
  who: "m-sofia",
  at: -466200000,
  done: false
}, {
  id: "t3",
  customerId: "clara-vos",
  title: "Security walkthrough",
  kind: "meeting",
  who: "m-theo",
  at: -199800000,
  done: true
}, {
  id: "t4",
  customerId: "clara-vos",
  title: "Draft contract redlines",
  kind: "task",
  who: "m-sofia",
  at: -54000000,
  done: true
}, {
  id: "t5",
  customerId: "clara-vos",
  title: "Check in on pilot",
  kind: "call",
  who: "m-sofia",
  at: 32400000,
  done: false
}, {
  id: "t6",
  customerId: "clara-vos",
  title: "Prepare pricing sheet",
  kind: "task",
  who: "m-sofia",
  at: 43200000,
  done: false
}, {
  id: "t7",
  customerId: "clara-vos",
  title: "Update account plan",
  kind: "task",
  who: "m-sofia",
  at: 216000000,
  done: false
}, {
  id: "t8",
  customerId: "clara-vos",
  title: "Product demo",
  kind: "meeting",
  who: "m-sofia",
  at: 394200000,
  done: false
}, {
  id: "t9",
  customerId: "clara-vos",
  title: "Kick-off workshop",
  kind: "meeting",
  who: "m-hanna",
  at: 730800000,
  done: false
}, {
  id: "t10",
  customerId: "clara-vos",
  title: "Discovery call",
  kind: "call",
  who: "m-sofia",
  at: 1175400000,
  done: false
}, {
  id: "t11",
  customerId: "clara-vos",
  title: "Security walkthrough",
  kind: "meeting",
  who: "m-theo",
  at: 1855800000,
  done: false
}, {
  id: "t12",
  customerId: "daniel-osei",
  title: "Check in on pilot",
  kind: "call",
  who: "m-sofia",
  at: -120600000,
  done: true
}, {
  id: "t13",
  customerId: "daniel-osei",
  title: "Prepare pricing sheet",
  kind: "task",
  who: "m-sofia",
  at: -631800000,
  done: true
}, {
  id: "t14",
  customerId: "daniel-osei",
  title: "Draft contract redlines",
  kind: "task",
  who: "m-hanna",
  at: -558000000,
  done: true
}, {
  id: "t15",
  customerId: "kenji-arai",
  title: "Update account plan",
  kind: "task",
  who: "m-sofia",
  at: 1009800000,
  done: false
}, {
  id: "t16",
  customerId: "kenji-arai",
  title: "Share case study",
  kind: "email",
  who: "m-sofia",
  at: 900000000,
  done: false
}, {
  id: "t17",
  customerId: "kenji-arai",
  title: "Kick-off workshop",
  kind: "meeting",
  who: "m-hanna",
  at: 723600000,
  done: false
}, {
  id: "t18",
  customerId: "kenji-arai",
  title: "Kick-off workshop",
  kind: "meeting",
  who: "m-sofia",
  at: -304200000,
  done: true
}, {
  id: "t19",
  customerId: "graham-whitley",
  title: "Prepare pricing sheet",
  kind: "task",
  who: "m-rohan",
  at: 45000000,
  done: false
}, {
  id: "t20",
  customerId: "graham-whitley",
  title: "Send revised proposal",
  kind: "email",
  who: "m-hanna",
  at: 1953000000,
  done: false
}, {
  id: "t21",
  customerId: "mei-tanaka",
  title: "Send revised proposal",
  kind: "email",
  who: "m-rohan",
  at: 642600000,
  done: false
}, {
  id: "t22",
  customerId: "mei-tanaka",
  title: "Check in on pilot",
  kind: "call",
  who: "m-sofia",
  at: 662400000,
  done: false
}, {
  id: "t23",
  customerId: "lucia-moreno",
  title: "Quarterly review",
  kind: "meeting",
  who: "m-rohan",
  at: 819000000,
  done: false
}, {
  id: "t24",
  customerId: "lucia-moreno",
  title: "Send revised proposal",
  kind: "email",
  who: "m-hanna",
  at: -298800000,
  done: false
}, {
  id: "t25",
  customerId: "karim-haddad",
  title: "Update account plan",
  kind: "task",
  who: "m-hanna",
  at: -138600000,
  done: true
}, {
  id: "t26",
  customerId: "priya-natarajan",
  title: "Share case study",
  kind: "email",
  who: "m-amara",
  at: 732600000,
  done: false
}, {
  id: "t27",
  customerId: "priya-natarajan",
  title: "Kick-off workshop",
  kind: "meeting",
  who: "m-amara",
  at: 1677600000,
  done: false
}, {
  id: "t28",
  customerId: "priya-natarajan",
  title: "Prepare pricing sheet",
  kind: "task",
  who: "m-theo",
  at: 57600000,
  done: false
}, {
  id: "t29",
  customerId: "jonas-becker",
  title: "Update account plan",
  kind: "task",
  who: "m-sofia",
  at: 1605600000,
  done: false
}, {
  id: "t30",
  customerId: "jonas-becker",
  title: "Kick-off workshop",
  kind: "meeting",
  who: "m-hanna",
  at: 2116800000,
  done: false
}, {
  id: "t31",
  customerId: "elena-rossi",
  title: "Share case study",
  kind: "email",
  who: "m-amara",
  at: 1265400000,
  done: false
}, {
  id: "t32",
  customerId: "elena-rossi",
  title: "Discovery call",
  kind: "call",
  who: "m-theo",
  at: 835200000,
  done: false
}, {
  id: "t33",
  customerId: "elena-rossi",
  title: "Quarterly review",
  kind: "meeting",
  who: "m-amara",
  at: 219600000,
  done: false
}, {
  id: "t34",
  customerId: "elena-rossi",
  title: "Prepare pricing sheet",
  kind: "task",
  who: "m-theo",
  at: -37800000,
  done: true
}, {
  id: "t35",
  customerId: "marcus-bell",
  title: "Renewal conversation",
  kind: "call",
  who: "m-hanna",
  at: -43200000,
  done: true
}, {
  id: "t36",
  customerId: "marcus-bell",
  title: "Send revised proposal",
  kind: "email",
  who: "m-amara",
  at: 923400000,
  done: false
}, {
  id: "t37",
  customerId: "aisha-rahman",
  title: "Quarterly review",
  kind: "meeting",
  who: "m-sofia",
  at: 1416600000,
  done: false
}, {
  id: "t38",
  customerId: "aisha-rahman",
  title: "Quarterly review",
  kind: "meeting",
  who: "m-theo",
  at: 466200000,
  done: false
}, {
  id: "t39",
  customerId: "tomas-silva",
  title: "Security walkthrough",
  kind: "meeting",
  who: "m-theo",
  at: 491400000,
  done: false
}, {
  id: "t40",
  customerId: "tomas-silva",
  title: "Quarterly review",
  kind: "meeting",
  who: "m-sofia",
  at: 1166400000,
  done: false
}, {
  id: "t41",
  customerId: "nadia-petrova",
  title: "Draft contract redlines",
  kind: "task",
  who: "m-theo",
  at: 2028600000,
  done: false
}, {
  id: "t42",
  customerId: "nadia-petrova",
  title: "Quarterly review",
  kind: "meeting",
  who: "m-rohan",
  at: 307800000,
  done: false
}, {
  id: "t43",
  customerId: "oliver-grant",
  title: "Send revised proposal",
  kind: "email",
  who: "m-rohan",
  at: 1090800000,
  done: false
}, {
  id: "t44",
  customerId: "oliver-grant",
  title: "Update account plan",
  kind: "task",
  who: "m-hanna",
  at: 1857600000,
  done: false
}, {
  id: "t45",
  customerId: "oliver-grant",
  title: "Discovery call",
  kind: "call",
  who: "m-rohan",
  at: -48600000,
  done: false
}, {
  id: "t46",
  customerId: "yuki-mori",
  title: "Kick-off workshop",
  kind: "meeting",
  who: "m-hanna",
  at: -374400000,
  done: true
}, {
  id: "t47",
  customerId: "yuki-mori",
  title: "Update account plan",
  kind: "task",
  who: "m-hanna",
  at: 993600000,
  done: false
}, {
  id: "t48",
  customerId: "sara-lindholm",
  title: "Prepare pricing sheet",
  kind: "task",
  who: "m-amara",
  at: 2034000000,
  done: false
}, {
  id: "t49",
  customerId: "ben-carter",
  title: "Kick-off workshop",
  kind: "meeting",
  who: "m-theo",
  at: 2037600000,
  done: false
}, {
  id: "t50",
  customerId: "fatima-zahra",
  title: "Quarterly review",
  kind: "meeting",
  who: "m-hanna",
  at: 1684800000,
  done: false
}, {
  id: "t51",
  customerId: "fatima-zahra",
  title: "Kick-off workshop",
  kind: "meeting",
  who: "m-amara",
  at: -223200000,
  done: false
}, {
  id: "t52",
  customerId: "fatima-zahra",
  title: "Kick-off workshop",
  kind: "meeting",
  who: "m-theo",
  at: 133200000,
  done: false
}, {
  id: "t53",
  customerId: "leo-martins",
  title: "Product demo",
  kind: "meeting",
  who: "m-rohan",
  at: 1598400000,
  done: false
}, {
  id: "t54",
  customerId: "leo-martins",
  title: "Product demo",
  kind: "meeting",
  who: "m-theo",
  at: 124200000,
  done: false
}, {
  id: "t55",
  customerId: "leo-martins",
  title: "Send revised proposal",
  kind: "email",
  who: "m-rohan",
  at: 563400000,
  done: false
}, {
  id: "t56",
  customerId: "leo-martins",
  title: "Prepare pricing sheet",
  kind: "task",
  who: "m-theo",
  at: 2129400000,
  done: false
}, {
  id: "t57",
  customerId: "grace-liu",
  title: "Update account plan",
  kind: "task",
  who: "m-hanna",
  at: 39600000,
  done: false
}, {
  id: "t58",
  customerId: "hugo-laurent",
  title: "Security walkthrough",
  kind: "meeting",
  who: "m-amara",
  at: 1427400000,
  done: false
}, {
  id: "t59",
  customerId: "hugo-laurent",
  title: "Send revised proposal",
  kind: "email",
  who: "m-rohan",
  at: -478800000,
  done: true
}, {
  id: "t60",
  customerId: "isabel-cruz",
  title: "Security walkthrough",
  kind: "meeting",
  who: "m-theo",
  at: 1674000000,
  done: false
}, {
  id: "t61",
  customerId: "isabel-cruz",
  title: "Share case study",
  kind: "email",
  who: "m-rohan",
  at: -36000000,
  done: true
}, {
  id: "t62",
  customerId: "isabel-cruz",
  title: "Update account plan",
  kind: "task",
  who: "m-rohan",
  at: -223200000,
  done: true
}, {
  id: "t63",
  customerId: "isabel-cruz",
  title: "Send revised proposal",
  kind: "email",
  who: "m-rohan",
  at: 1850400000,
  done: false
}, {
  id: "t64",
  customerId: "noah-fischer",
  title: "Product demo",
  kind: "meeting",
  who: "m-hanna",
  at: 2035800000,
  done: false
}, {
  id: "t65",
  customerId: "noah-fischer",
  title: "Send revised proposal",
  kind: "email",
  who: "m-amara",
  at: -460800000,
  done: true
}, {
  id: "t66",
  customerId: null,
  title: "Team stand-up",
  kind: "meeting",
  who: "m-amara",
  at: -223200000,
  done: false
}, {
  id: "t67",
  customerId: null,
  title: "Coaching 1:1",
  kind: "meeting",
  who: "m-rohan",
  at: 126000000,
  done: false
}, {
  id: "t68",
  customerId: null,
  title: "Coaching 1:1",
  kind: "meeting",
  who: "m-sofia",
  at: 298800000,
  done: false
}, {
  id: "t69",
  customerId: null,
  title: "Pipeline review",
  kind: "meeting",
  who: "m-amara",
  at: 1076400000,
  done: false
}, {
  id: "t70",
  customerId: null,
  title: "Forecast call",
  kind: "meeting",
  who: "m-sofia",
  at: 464400000,
  done: false
}, {
  id: "t71",
  customerId: null,
  title: "Forecast call",
  kind: "meeting",
  who: "m-theo",
  at: 39600000,
  done: false
}];
const Ey = [{
  id: "i1",
  number: "RP-2400",
  customerId: "clara-vos",
  amount: 12850,
  status: "due",
  issued: 0,
  due: 2592000000,
  paidAt: null
}, {
  id: "i2",
  number: "RP-2401",
  customerId: "clara-vos",
  amount: 17820,
  status: "paid",
  issued: -26438400000,
  due: -23846400000,
  paidAt: -25574400000
}, {
  id: "i3",
  number: "RP-2402",
  customerId: "clara-vos",
  amount: 4320,
  status: "due",
  issued: -432000000,
  due: 2160000000,
  paidAt: null
}, {
  id: "i4",
  number: "RP-2403",
  customerId: "daniel-osei",
  amount: 9450,
  status: "paid",
  issued: -26870400000,
  due: -24278400000,
  paidAt: -25228800000
}, {
  id: "i5",
  number: "RP-2404",
  customerId: "daniel-osei",
  amount: 37810,
  status: "paid",
  issued: -16502400000,
  due: -13910400000,
  paidAt: -15897600000
}, {
  id: "i6",
  number: "RP-2405",
  customerId: "daniel-osei",
  amount: 48220,
  status: "paid",
  issued: -20563200000,
  due: -17971200000,
  paidAt: -18835200000
}, {
  id: "i7",
  number: "RP-2406",
  customerId: "kenji-arai",
  amount: 34500,
  status: "paid",
  issued: -5184000000,
  due: -2592000000,
  paidAt: -4060800000
}, {
  id: "i8",
  number: "RP-2407",
  customerId: "graham-whitley",
  amount: 35520,
  status: "paid",
  issued: -11577600000,
  due: -8985600000,
  paidAt: -9590400000
}, {
  id: "i9",
  number: "RP-2408",
  customerId: "mei-tanaka",
  amount: 12390,
  status: "paid",
  issued: -22982400000,
  due: -20390400000,
  paidAt: -22550400000
}, {
  id: "i10",
  number: "RP-2409",
  customerId: "mei-tanaka",
  amount: 13830,
  status: "paid",
  issued: -15638400000,
  due: -13046400000,
  paidAt: -13824000000
}, {
  id: "i11",
  number: "RP-2410",
  customerId: "karim-haddad",
  amount: 28680,
  status: "due",
  issued: -259200000,
  due: 2332800000,
  paidAt: null
}, {
  id: "i12",
  number: "RP-2411",
  customerId: "priya-natarajan",
  amount: 10800,
  status: "paid",
  issued: -18489600000,
  due: -15897600000,
  paidAt: -16416000000
}, {
  id: "i13",
  number: "RP-2412",
  customerId: "jonas-becker",
  amount: 4570,
  status: "overdue",
  issued: -5270400000,
  due: -2678400000,
  paidAt: null
}, {
  id: "i14",
  number: "RP-2413",
  customerId: "marcus-bell",
  amount: 10720,
  status: "due",
  issued: -518400000,
  due: 2073600000,
  paidAt: null
}, {
  id: "i15",
  number: "RP-2414",
  customerId: "aisha-rahman",
  amount: 6730,
  status: "paid",
  issued: -2160000000,
  due: 432000000,
  paidAt: -1555200000
}, {
  id: "i16",
  number: "RP-2415",
  customerId: "aisha-rahman",
  amount: 1630,
  status: "paid",
  issued: -20131200000,
  due: -17539200000,
  paidAt: -18316800000
}, {
  id: "i17",
  number: "RP-2416",
  customerId: "tomas-silva",
  amount: 31630,
  status: "paid",
  issued: -19008000000,
  due: -16416000000,
  paidAt: -18316800000
}, {
  id: "i18",
  number: "RP-2417",
  customerId: "nadia-petrova",
  amount: 57650,
  status: "paid",
  issued: -7862400000,
  due: -5270400000,
  paidAt: -6739200000
}, {
  id: "i19",
  number: "RP-2418",
  customerId: "nadia-petrova",
  amount: 6610,
  status: "paid",
  issued: -17107200000,
  due: -14515200000,
  paidAt: -15465600000
}, {
  id: "i20",
  number: "RP-2419",
  customerId: "nadia-petrova",
  amount: 11740,
  status: "overdue",
  issued: -6566400000,
  due: -3974400000,
  paidAt: null
}, {
  id: "i21",
  number: "RP-2420",
  customerId: "oliver-grant",
  amount: 2020,
  status: "overdue",
  issued: -7948800000,
  due: -5356800000,
  paidAt: null
}, {
  id: "i22",
  number: "RP-2421",
  customerId: "oliver-grant",
  amount: 14710,
  status: "paid",
  issued: -3974400000,
  due: -1382400000,
  paidAt: -3283200000
}, {
  id: "i23",
  number: "RP-2422",
  customerId: "yuki-mori",
  amount: 37590,
  status: "paid",
  issued: -28339200000,
  due: -25747200000,
  paidAt: -27129600000
}, {
  id: "i24",
  number: "RP-2423",
  customerId: "yuki-mori",
  amount: 47820,
  status: "paid",
  issued: -3024000000,
  due: -432000000,
  paidAt: -2592000000
}, {
  id: "i25",
  number: "RP-2424",
  customerId: "sara-lindholm",
  amount: 3280,
  status: "paid",
  issued: -26611200000,
  due: -24019200000,
  paidAt: -25574400000
}, {
  id: "i26",
  number: "RP-2425",
  customerId: "ben-carter",
  amount: 10250,
  status: "paid",
  issued: -13651200000,
  due: -11059200000,
  paidAt: -12614400000
}, {
  id: "i27",
  number: "RP-2426",
  customerId: "fatima-zahra",
  amount: 4480,
  status: "paid",
  issued: -18748800000,
  due: -16156800000,
  paidAt: -16588800000
}, {
  id: "i28",
  number: "RP-2427",
  customerId: "fatima-zahra",
  amount: 7080,
  status: "paid",
  issued: -21945600000,
  due: -19353600000,
  paidAt: -21081600000
}, {
  id: "i29",
  number: "RP-2428",
  customerId: "leo-martins",
  amount: 13770,
  status: "paid",
  issued: -29635200000,
  due: -27043200000,
  paidAt: -27561600000
}, {
  id: "i30",
  number: "RP-2429",
  customerId: "leo-martins",
  amount: 6110,
  status: "paid",
  issued: -28425600000,
  due: -25833600000,
  paidAt: -27129600000
}, {
  id: "i31",
  number: "RP-2430",
  customerId: "grace-liu",
  amount: 3810,
  status: "paid",
  issued: -13910400000,
  due: -11318400000,
  paidAt: -13651200000
}, {
  id: "i32",
  number: "RP-2431",
  customerId: "grace-liu",
  amount: 17810,
  status: "overdue",
  issued: -6739200000,
  due: -4147200000,
  paidAt: null
}, {
  id: "i33",
  number: "RP-2432",
  customerId: "grace-liu",
  amount: 5520,
  status: "paid",
  issued: -24537600000,
  due: -21945600000,
  paidAt: -23155200000
}, {
  id: "i34",
  number: "RP-2433",
  customerId: "grace-liu",
  amount: 5640,
  status: "paid",
  issued: -11059200000,
  due: -8467200000,
  paidAt: -8985600000
}, {
  id: "i35",
  number: "RP-2434",
  customerId: "isabel-cruz",
  amount: 9070,
  status: "paid",
  issued: -9158400000,
  due: -6566400000,
  paidAt: -8467200000
}, {
  id: "i36",
  number: "RP-2435",
  customerId: "noah-fischer",
  amount: 16010,
  status: "overdue",
  issued: -20131200000,
  due: -17539200000,
  paidAt: null
}, {
  id: "i37",
  number: "RP-2436",
  customerId: "noah-fischer",
  amount: 18610,
  status: "paid",
  issued: -14428800000,
  due: -11836800000,
  paidAt: -12182400000
}, {
  id: "i38",
  number: "RP-2437",
  customerId: "noah-fischer",
  amount: 34610,
  status: "paid",
  issued: -23500800000,
  due: -20908800000,
  paidAt: -21772800000
}, {
  id: "i39",
  number: "RP-2438",
  customerId: "clara-vos",
  amount: 5900,
  status: "draft",
  issued: 0,
  due: 2592000000,
  paidAt: null
}, {
  id: "i40",
  number: "RP-2439",
  customerId: "daniel-osei",
  amount: 6000,
  status: "draft",
  issued: 0,
  due: 2592000000,
  paidAt: null
}, {
  id: "i41",
  number: "RP-2440",
  customerId: "kenji-arai",
  amount: 2100,
  status: "draft",
  issued: 0,
  due: 2592000000,
  paidAt: null
}];
const Ny = [{
  id: "p1",
  customerId: "clara-vos",
  name: "Platform onboarding",
  status: "active",
  team: ["m-sofia", "m-rohan", "m-hanna"],
  start: -3283200000,
  due: 3283200000,
  steps: [{
    label: "Kick-off call",
    done: true
  }, {
    label: "Access & accounts",
    done: true
  }, {
    label: "Data import",
    done: true
  }, {
    label: "Workflow setup",
    done: true
  }, {
    label: "Team training",
    done: false
  }, {
    label: "Go-live review",
    done: false
  }]
}, {
  id: "p2",
  customerId: "daniel-osei",
  name: "Data migration",
  status: "active",
  team: ["m-sofia", "m-hanna", "m-theo"],
  start: -3196800000,
  due: 864000000,
  steps: [{
    label: "Scope sign-off",
    done: true
  }, {
    label: "Sandbox ready",
    done: true
  }, {
    label: "Integration build",
    done: false
  }, {
    label: "User testing",
    done: false
  }, {
    label: "Launch",
    done: false
  }]
}, {
  id: "p3",
  customerId: "kenji-arai",
  name: "SSO rollout",
  status: "planning",
  team: ["m-sofia", "m-theo", "m-amara"],
  start: -1209600000,
  due: 2419200000,
  steps: [{
    label: "Requirements",
    done: true
  }, {
    label: "Configuration",
    done: false
  }, {
    label: "Pilot group",
    done: false
  }, {
    label: "Rollout",
    done: false
  }, {
    label: "Handover",
    done: false
  }]
}, {
  id: "p4",
  customerId: "graham-whitley",
  name: "Warehouse integration",
  status: "review",
  team: ["m-hanna", "m-amara", "m-theo"],
  start: -2332800000,
  due: 1555200000,
  steps: [{
    label: "Kick-off call",
    done: true
  }, {
    label: "Access & accounts",
    done: true
  }, {
    label: "Data import",
    done: true
  }, {
    label: "Workflow setup",
    done: true
  }, {
    label: "Team training",
    done: true
  }, {
    label: "Go-live review",
    done: false
  }]
}, {
  id: "p5",
  customerId: "mei-tanaka",
  name: "Team training programme",
  status: "active",
  team: ["m-sofia", "m-hanna", "m-theo"],
  start: -1641600000,
  due: 3542400000,
  steps: [{
    label: "Scope sign-off",
    done: true
  }, {
    label: "Sandbox ready",
    done: true
  }, {
    label: "Integration build",
    done: true
  }, {
    label: "User testing",
    done: false
  }, {
    label: "Launch",
    done: false
  }]
}, {
  id: "p6",
  customerId: "lucia-moreno",
  name: "Reporting setup",
  status: "done",
  team: ["m-hanna", "m-sofia", "m-theo"],
  start: -3283200000,
  due: -1296000000,
  steps: [{
    label: "Requirements",
    done: true
  }, {
    label: "Configuration",
    done: true
  }, {
    label: "Pilot group",
    done: true
  }, {
    label: "Rollout",
    done: true
  }, {
    label: "Handover",
    done: true
  }]
}, {
  id: "p7",
  customerId: "karim-haddad",
  name: "API integration",
  status: "planning",
  team: ["m-amara", "m-hanna", "m-sofia"],
  start: -3196800000,
  due: 4147200000,
  steps: [{
    label: "Kick-off call",
    done: false
  }, {
    label: "Access & accounts",
    done: false
  }, {
    label: "Data import",
    done: false
  }, {
    label: "Workflow setup",
    done: false
  }, {
    label: "Team training",
    done: false
  }, {
    label: "Go-live review",
    done: false
  }]
}, {
  id: "p8",
  customerId: "priya-natarajan",
  name: "Platform onboarding",
  status: "active",
  team: ["m-amara", "m-rohan", "m-theo"],
  start: -3715200000,
  due: 2073600000,
  steps: [{
    label: "Scope sign-off",
    done: true
  }, {
    label: "Sandbox ready",
    done: true
  }, {
    label: "Integration build",
    done: true
  }, {
    label: "User testing",
    done: false
  }, {
    label: "Launch",
    done: false
  }]
}, {
  id: "p9",
  customerId: "jonas-becker",
  name: "Data migration",
  status: "review",
  team: ["m-hanna", "m-theo", "m-sofia"],
  start: -1728000000,
  due: 1555200000,
  steps: [{
    label: "Requirements",
    done: true
  }, {
    label: "Configuration",
    done: true
  }, {
    label: "Pilot group",
    done: true
  }, {
    label: "Rollout",
    done: true
  }, {
    label: "Handover",
    done: false
  }]
}, {
  id: "p10",
  customerId: "elena-rossi",
  name: "SSO rollout",
  status: "done",
  team: ["m-theo", "m-sofia", "m-amara"],
  start: -1296000000,
  due: -1728000000,
  steps: [{
    label: "Kick-off call",
    done: true
  }, {
    label: "Access & accounts",
    done: true
  }, {
    label: "Data import",
    done: true
  }, {
    label: "Workflow setup",
    done: true
  }, {
    label: "Team training",
    done: true
  }, {
    label: "Go-live review",
    done: true
  }]
}];
const Ms = {
  members: ky,
  customers: by,
  deals: Sy,
  tasks: Cy,
  invoices: Ey,
  projects: Ny
};
const sn = 86400000;
const Vf = "USD";
const Kf = [["Kick-off call", "Access & accounts", "Data import", "Workflow setup", "Team training", "Go-live review"], ["Scope sign-off", "Sandbox ready", "Integration build", "User testing", "Launch"], ["Requirements", "Configuration", "Pilot group", "Rollout", "Handover"]];
const yt = {
  qualify: "Qualification",
  proposal: "Proposal",
  negotiate: "Negotiation",
  closing: "Closing",
  won: "Won",
  lost: "Lost"
};
const hp = {
  qualify: 0.2,
  proposal: 0.45,
  negotiate: 0.7,
  closing: 0.9,
  won: 1,
  lost: 0
};
const $o = {
  ...hp
};
const os = {
  qualify: "butter",
  proposal: "pine",
  negotiate: "tomato",
  closing: "ink",
  won: "pine",
  lost: "muted"
};
const hs = ["qualify", "proposal", "negotiate", "closing"];
function Ty(n) {
  const e = new Date(n);
  return new Date(e.getFullYear(), e.getMonth(), 1).getTime();
}
function fp(n) {
  const e = new Date(n);
  return new Date(e.getFullYear(), e.getMonth() + 1, 0, 23, 59, 59, 999).getTime();
}
function Ry(n) {
  const e = new Date(n);
  e.setHours(0, 0, 0, 0);
  return e.getTime();
}
function Gf(n = {}) {
  const e = n.now ?? Date.now();
  const r = Ry(e);
  const i = v => r + (v ?? 0);
  const l = Ms.members.map(v => ({
    id: v.id,
    name: v.name,
    role: v.role,
    quota: v.quota,
    photo: v.photo,
    email: `${v.id.replace("m-", "")}@salescrm.app`
  }));
  const c = Ms.customers.map(v => ({
    id: v.id,
    first: v.first,
    last: v.last,
    name: `${v.first} ${v.last}`,
    jobRole: v.role,
    company: v.company,
    domain: v.email.split("@")[1] ?? "",
    industry: v.industry,
    segment: v.segment,
    city: v.city,
    email: v.email,
    phone: v.phone,
    sources: v.sources,
    owner: v.owner,
    since: i(v.since),
    lastContacted: i(v.lastContacted),
    favorite: v.favorite,
    health: v.health,
    ...(v.photo ? {
      photo: v.photo
    } : {})
  }));
  const d = Ms.deals.map(v => ({
    id: v.id,
    customerId: v.customerId,
    title: v.title,
    stage: v.stage,
    amount: v.amount,
    currency: Vf,
    createdAt: i(v.created),
    closeAt: i(v.close),
    owner: v.owner,
    team: v.team,
    notes: v.notes
  }));
  const h = d.filter(v => hs.includes(v.stage));
  const m = Ms.tasks.map(v => ({
    id: v.id,
    customerId: v.customerId,
    title: v.title,
    kind: v.kind,
    who: v.who,
    at: i(v.at),
    done: v.done
  }));
  const g = Ms.invoices.map(v => ({
    id: v.id,
    number: v.number,
    customerId: v.customerId,
    dealId: null,
    amount: v.amount,
    currency: Vf,
    issuedAt: i(v.issued),
    dueAt: i(v.due),
    paidAt: v.paidAt == null ? null : i(v.paidAt),
    status: v.status
  }));
  const w = Ms.projects.map(v => ({
    id: v.id,
    customerId: v.customerId,
    name: v.name,
    status: v.status,
    owner: v.team[0] ?? "m-sofia",
    team: v.team,
    dueAt: i(v.due),
    steps: v.steps.map(j => ({
      label: j.label,
      done: j.done
    }))
  }));
  const y = [{
    id: "a1",
    actor: "m-sofia",
    kind: "movedDeal",
    params: {
      deal: "Pilot rollout, 3 sites",
      stage: "Closing",
      customer: "Tidewater Freight"
    },
    at: e - 360000
  }, {
    id: "a2",
    actor: "m-theo",
    kind: "sentProposal",
    params: {
      customer: "Brightmoor Clinics"
    },
    at: e - 3180000
  }, {
    id: "a3",
    actor: "m-sofia",
    kind: "loggedCall",
    params: {
      minutes: "24",
      customer: "Lumio Solar"
    },
    at: e - 7200000
  }, {
    id: "a4",
    actor: "m-rohan",
    kind: "invoicePaid",
    params: {
      invoice: "RP-2403",
      customer: "Fennick & Rowe"
    },
    at: e - 7200000 - 60000
  }, {
    id: "a5",
    actor: "m-hanna",
    kind: "finishedStep",
    params: {
      step: "Data import",
      project: "Aldercrest Hotels"
    },
    at: e - 10800000
  }, {
    id: "a6",
    actor: "m-amara",
    kind: "wonDeal",
    params: {
      deal: "Annual renewal",
      customer: "Orchard Row Bank"
    },
    at: e - 14400000
  }, {
    id: "a7",
    actor: "m-theo",
    kind: "addedTask",
    params: {
      task: "a note about procurement timing"
    },
    at: e - 18000000
  }];
  const _ = [{
    id: "n1",
    title: "Clara Vos opened your proposal twice",
    body: "Tidewater Freight",
    at: e - 720000,
    unread: true
  }, {
    id: "n2",
    title: "Invoice for Orchard Row Bank is overdue",
    body: "Finance",
    at: e - 10800000,
    unread: true
  }, {
    id: "n3",
    title: "Lumio Solar moved to Negotiation",
    body: "Pipeline",
    at: e - 93600000,
    unread: true
  }];
  return {
    now: e,
    thisMonthStart: Ty(e),
    thisMonthEnd: fp(e),
    members: l,
    customers: c,
    deals: d,
    openDeals: h,
    tasks: m,
    invoices: g,
    projects: w,
    activity: y,
    notifications: _
  };
}
const Jf = "rapport:workspace:v2";
const Iy = "rapport:theme";
const du = "rapport:session:v1";
function Us(n) {
  return `${n}${Math.random().toString(36).slice(2, 9)}`;
}
function Ay(n) {
  return n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
class mp {
  constructor(e) {
    Tr(this, "data");
    Tr(this, "members");
    Tr(this, "baseActivity");
    Tr(this, "baseNotifications");
    Tr(this, "auditLogs", []);
    Tr(this, "storage", null);
    Tr(this, "onChange", null);
    const r = Gf();
    this.members = r.members;
    this.baseActivity = r.activity;
    this.baseNotifications = r.notifications;
    const i = {
      version: 2,
      customers: r.customers,
      deals: r.deals,
      tasks: r.tasks,
      invoices: r.invoices,
      projects: r.projects,
      favoritePageKeys: ["customers", "pipeline"],
      auditLogs: []
    };
    this.data = i;
    const l = e ?? Py();
    if (l) {
      this.storage = l;
      const c = l.getItem(Jf);
      if (c) {
        try {
          const d = JSON.parse(c);
          if (d.version === 2) {
            this.data = d;
          }
        } catch {}
      }
    }
  }
  persist() {
    var e;
    var r;
    if ((e = this.storage) != null) {
      e.setItem(Jf, JSON.stringify(this.data));
    }
    if ((r = this.onChange) != null) {
      r.call(this);
    }
  }
  audit(e) {
    const r = {
      ...e,
      id: Us("log-"),
      createdAt: Date.now()
    };
    this.auditLogs = [r, ...this.auditLogs].slice(0, 200);
    this.data.auditLogs = this.auditLogs;
    return r;
  }
  logAudit(e) {
    this.audit(e);
    this.persist();
  }
  createCustomer(e) {
    const r = Ay(`${e.first} ${e.last}`) || Us("c-");
    const i = {
      id: r,
      first: e.first,
      last: e.last,
      name: `${e.first} ${e.last}`.trim(),
      jobRole: e.jobRole,
      company: e.company,
      domain: e.domain,
      industry: e.industry,
      segment: e.segment,
      city: e.city,
      email: e.email,
      phone: e.phone,
      sources: ["web"],
      owner: e.owner,
      since: Date.now(),
      lastContacted: Date.now(),
      favorite: false,
      health: 70
    };
    this.data.customers = [i, ...this.data.customers];
    this.audit({
      actorId: "current",
      action: "create",
      entityType: "customers",
      entityId: r,
      metadata: {
        company: e.company
      }
    });
    this.persist();
    return i;
  }
  updateCustomer(e, r) {
    const i = this.data.customers.findIndex(d => d.id === e);
    if (i < 0) {
      throw new Error("Customer not found");
    }
    const l = this.data.customers[i];
    const c = {
      ...l,
      ...r,
      name: `${r.first ?? l.first} ${r.last ?? l.last}`.trim()
    };
    this.data.customers = this.data.customers.map(d => d.id === e ? c : d);
    this.audit({
      actorId: "current",
      action: "update",
      entityType: "customers",
      entityId: e,
      metadata: {
        fields: Object.keys(r)
      }
    });
    this.persist();
    return c;
  }
  archiveCustomer(e) {
    if (!this.data.customers.some(r => r.id === e)) {
      throw new Error("Customer not found");
    }
    this.data.customers = this.data.customers.map(r => r.id === e ? {
      ...r,
      archivedAt: Date.now()
    } : r);
    this.audit({
      actorId: "current",
      action: "archive",
      entityType: "customers",
      entityId: e,
      metadata: {
        openDeals: this.data.deals.filter(r => r.customerId === e).length
      }
    });
    this.persist();
  }
  unarchiveCustomer(e) {
    this.data.customers = this.data.customers.map(r => r.id === e ? {
      ...r,
      archivedAt: null
    } : r);
    this.persist();
  }
  toggleFavoriteCustomer(e) {
    const r = this.data.customers.find(l => l.id === e);
    if (!r) {
      throw new Error("Customer not found");
    }
    const i = !r.favorite;
    this.data.customers = this.data.customers.map(l => l.id === e ? {
      ...l,
      favorite: i
    } : l);
    this.persist();
    return i;
  }
  createDeal(e) {
    const r = {
      id: Us("d-"),
      customerId: e.customerId,
      title: e.title,
      stage: e.stage,
      amount: e.amount,
      currency: "USD",
      createdAt: Date.now(),
      closeAt: e.closeAt,
      owner: e.owner,
      team: [e.owner],
      notes: ""
    };
    this.data.deals = [r, ...this.data.deals];
    this.audit({
      actorId: "current",
      action: "create",
      entityType: "deals",
      entityId: r.id,
      metadata: {
        amount: r.amount,
        stage: r.stage
      }
    });
    this.persist();
    return r;
  }
  updateDeal(e, r) {
    const i = this.data.deals.find(c => c.id === e);
    if (!i) {
      throw new Error("Deal not found");
    }
    const l = {
      ...i,
      ...r
    };
    this.data.deals = this.data.deals.map(c => c.id === e ? l : c);
    this.audit({
      actorId: "current",
      action: "update",
      entityType: "deals",
      entityId: e,
      metadata: {
        fields: Object.keys(r)
      }
    });
    this.persist();
    return l;
  }
  moveDeal(e, r) {
    const i = this.data.deals.find(c => c.id === e);
    if (!i) {
      throw new Error("Deal not found");
    }
    const l = {
      ...i,
      stage: r
    };
    this.data.deals = this.data.deals.map(c => c.id === e ? l : c);
    this.audit({
      actorId: "current",
      action: "stage_change",
      entityType: "deals",
      entityId: e,
      metadata: {
        from: i.stage,
        to: r
      }
    });
    this.persist();
    return l;
  }
  deleteDeal(e) {
    const r = this.data.deals.find(i => i.id === e);
    if (!r) {
      throw new Error("Deal not found");
    }
    this.data.deals = this.data.deals.filter(i => i.id !== e);
    this.audit({
      actorId: "current",
      action: "archive",
      entityType: "deals",
      entityId: e,
      metadata: {
        archived: true
      }
    });
    this.persist();
    return r;
  }
  restoreDeal(e) {
    if (!this.data.deals.some(r => r.id === e.id)) {
      this.data.deals = [e, ...this.data.deals];
      this.persist();
    }
  }
  createTask(e) {
    const r = {
      id: Us("t-"),
      done: false,
      ...e
    };
    this.data.tasks = [...this.data.tasks, r];
    this.persist();
    return r;
  }
  toggleTask(e, r) {
    this.data.tasks = this.data.tasks.map(i => i.id === e ? {
      ...i,
      done: r
    } : i);
    this.persist();
  }
  updateTaskAt(e, r) {
    this.data.tasks = this.data.tasks.map(i => i.id === e ? {
      ...i,
      at: r
    } : i);
    this.audit({
      actorId: "current",
      action: "update",
      entityType: "activities",
      entityId: e,
      metadata: {
        moved: true
      }
    });
    this.persist();
  }
  deleteTask(e) {
    const r = this.data.tasks.find(i => i.id === e);
    if (!r) {
      throw new Error("Task not found");
    }
    this.data.tasks = this.data.tasks.filter(i => i.id !== e);
    this.persist();
    return r;
  }
  createInvoice(e) {
    const r = this.data.invoices.length + 2400;
    const i = {
      id: Us("i-"),
      number: `RP-${r}`,
      customerId: e.customerId,
      dealId: null,
      amount: e.amount,
      currency: "USD",
      issuedAt: e.issuedAt,
      dueAt: e.dueAt,
      paidAt: null,
      status: e.dueAt < Date.now() ? "overdue" : "due"
    };
    this.data.invoices = [i, ...this.data.invoices];
    this.audit({
      actorId: "current",
      action: "create",
      entityType: "finance_records",
      entityId: i.id,
      metadata: {
        amount: i.amount
      }
    });
    this.persist();
    return i;
  }
  markInvoicePaid(e) {
    this.data.invoices = this.data.invoices.map(r => r.id === e ? {
      ...r,
      status: "paid",
      paidAt: Date.now()
    } : r);
    this.audit({
      actorId: "current",
      action: "update",
      entityType: "finance_records",
      entityId: e,
      metadata: {
        status: "paid"
      }
    });
    this.persist();
  }
  unmarkInvoicePaid(e) {
    this.data.invoices = this.data.invoices.map(r => r.id === e ? {
      ...r,
      paidAt: null,
      status: r.dueAt < Date.now() ? "overdue" : "due"
    } : r);
    this.audit({
      actorId: "current",
      action: "update",
      entityType: "finance_records",
      entityId: e,
      metadata: {
        status: "unpaid"
      }
    });
    this.persist();
  }
  createProject(e) {
    const r = {
      id: Us("p-"),
      customerId: e.customerId,
      name: e.name,
      status: e.status,
      owner: e.owner,
      team: [e.owner],
      dueAt: e.dueAt,
      steps: e.steps.map(i => ({
        label: i,
        done: false
      }))
    };
    this.data.projects = [r, ...this.data.projects];
    this.audit({
      actorId: "current",
      action: "create",
      entityType: "projects",
      entityId: r.id,
      metadata: {
        steps: r.steps.length
      }
    });
    this.persist();
    return r;
  }
  updateProject(e, r) {
    const i = this.data.projects.find(c => c.id === e);
    if (!i) {
      throw new Error("Project not found");
    }
    const l = {
      ...i,
      ...(r.name ? {
        name: r.name
      } : {}),
      ...(r.customerId ? {
        customerId: r.customerId
      } : {}),
      ...(r.status ? {
        status: r.status
      } : {}),
      ...(r.owner ? {
        owner: r.owner
      } : {}),
      ...(r.dueAt ? {
        dueAt: r.dueAt
      } : {}),
      ...(r.steps ? {
        steps: r.steps.map((c, d) => {
          var h;
          return {
            label: c,
            done: ((h = i.steps[d]) == null ? undefined : h.done) ?? false
          };
        })
      } : {})
    };
    this.data.projects = this.data.projects.map(c => c.id === e ? l : c);
    this.persist();
    return l;
  }
  toggleProjectStep(e, r) {
    this.data.projects = this.data.projects.map(i => {
      if (i.id !== e) {
        return i;
      }
      const l = i.steps.map((h, m) => m === r ? {
        ...h,
        done: !h.done
      } : h);
      const c = l.every(h => h.done);
      const d = l.every(h => !h.done);
      return {
        ...i,
        steps: l,
        status: c ? "done" : d ? "planning" : l.filter(h => h.done).length === l.length - 1 ? "review" : "active"
      };
    });
    this.audit({
      actorId: "current",
      action: "update",
      entityType: "projects",
      entityId: e,
      metadata: {
        step: r
      }
    });
    this.persist();
  }
  setTheme(e) {
    var r;
    if ((r = this.storage) != null) {
      r.setItem(Iy, JSON.stringify(e));
    }
  }
  toggleFavoritePage(e) {
    const r = this.data.favoritePageKeys.includes(e);
    this.data.favoritePageKeys = r ? this.data.favoritePageKeys.filter(i => i !== e) : [...this.data.favoritePageKeys, e];
    this.persist();
  }
  markNotificationsRead() {
    this.baseNotifications.forEach(e => {
      e.unread = false;
    });
  }
  snapshot() {
    return {
      me: this.members[0],
      members: this.members,
      customers: this.data.customers,
      deals: this.data.deals,
      tasks: this.data.tasks,
      invoices: this.data.invoices,
      projects: this.data.projects,
      activity: this.baseActivity.map(r => ({
        ...r
      })),
      notifications: this.baseNotifications.map(r => ({
        ...r
      })),
      favoritePageKeys: this.data.favoritePageKeys
    };
  }
  reset() {
    const e = Gf();
    this.data = {
      version: 2,
      customers: e.customers,
      deals: e.deals,
      tasks: e.tasks,
      invoices: e.invoices,
      projects: e.projects,
      favoritePageKeys: ["customers", "pipeline"],
      auditLogs: []
    };
    this.auditLogs = [];
    this.persist();
  }
  get auditLogsRead() {
    return this.auditLogs;
  }
}
function Py() {
  try {
    const n = "__rapport_probe__";
    window.localStorage.setItem(n, "1");
    window.localStorage.removeItem(n);
    return window.localStorage;
  } catch {
    return null;
  }
}
const hu = k.createContext(null);
function jn() {
  const n = k.useContext(hu);
  if (!n) {
    throw new Error("useWorkspace must be used inside <WorkspaceProvider>");
  }
  return n;
}
function Oy({ children: n }) {
  const e = k.useRef(null);
  e.current ||= new mp();
  const r = e.current;
  const qc = useQueryClient();

  // Modern TanStack Query v5 cache & synchronization
  const { data: snapshot, isLoading, error, refetch } = useQuery({
    queryKey: ['workspace'],
    queryFn: () => r.snapshot(),
    initialData: () => r.snapshot()
  });

  k.useEffect(() => {
    r.onChange = () => {
      qc.invalidateQueries({ queryKey: ['workspace'] });
    };
    return () => {
      r.onChange = null;
    };
  }, [r, qc]);

  const j = k.useMemo(() => ({
    status: isLoading ? "loading" : error ? "error" : "ready",
    error: error ? error.message : null,
    data: snapshot || $y,
    repo: r,
    reload: refetch
  }), [snapshot, isLoading, error, r, refetch]);

  return <hu.Provider value={j}>{n}</hu.Provider>;
}
const $y = {
  me: {
    id: "m-sofia",
    name: "Sofia Reyes",
    role: "Account Executive",
    quota: 420000,
    photo: "sofia-reyes",
    email: "sofia@salescrm.app"
  },
  members: [],
  customers: [],
  deals: [],
  tasks: [],
  invoices: [],
  projects: [],
  activity: [],
  notifications: [],
  favoritePageKeys: []
};
function Ae(n) {
  return n.reduce((e, r) => e + r, 0);
}
function an(n) {
  return n.filter(e => hs.includes(e.stage));
}
function Dr(n) {
  return n.filter(e => e.stage === "won");
}
function Ly(n) {
  return n.filter(e => e.stage === "lost");
}
function fu(n) {
  return n.amount * hp[n.stage];
}
function Dy(n) {
  return Math.round(Ae(an(n).map(fu)));
}
function My(n, e, r) {
  return an(n).filter(i => i.closeAt >= e && i.closeAt <= r);
}
function Tn(n, e, r) {
  return Ae(Dr(n).filter(i => i.closeAt >= e && i.closeAt <= r).map(i => i.amount));
}
function Uy(n) {
  const e = Dr(n).length;
  const r = Ly(n).length;
  const i = e + r;
  return {
    rate: i ? e / i : 0,
    won: e,
    lost: r,
    closed: i
  };
}
function Kt(n, e) {
  const r = new Date(n);
  const i = [];
  for (let l = e - 1; l >= 0; l -= 1) {
    const c = new Date(r.getFullYear(), r.getMonth() - l, 1).getTime();
    i.push({
      start: c,
      end: fp(c)
    });
  }
  return i;
}
function Fy(n) {
  const e = an(n);
  const r = Ae(e.map(i => i.amount));
  return hs.map(i => {
    const l = e.filter(d => d.stage === i);
    const c = Ae(l.map(d => d.amount));
    return {
      stage: i,
      label: i,
      count: l.length,
      total: c,
      share: r ? c / r : 0
    };
  });
}
function By(n) {
  const e = new Date(n);
  const r = Math.floor(e.getMonth() / 3);
  const i = new Date(e.getFullYear(), r * 3, 1).getTime();
  const l = new Date(e.getFullYear(), r * 3 + 3, 0, 23, 59, 59, 999).getTime();
  const c = Math.max(0, Math.ceil((l - n) / sn));
  return {
    start: i,
    end: l,
    label: `Q${r + 1}`,
    daysLeft: c
  };
}
function zy(n, e, r, i) {
  return n.map(c => {
    const d = Dr(e).filter(g => g.owner === c.id && g.closeAt >= r && g.closeAt <= i);
    const h = Ae(d.map(g => g.amount));
    const m = c.quota / 12;
    return {
      member: c,
      won: h,
      deals: d.length,
      monthlyQuota: m,
      attainment: m ? h / m : 0
    };
  }).sort((c, d) => d.won - c.won);
}
function Wy(n, e = 6) {
  return [...an(n)].sort((r, i) => fu(i) - fu(r)).slice(0, e);
}
function Rr(n, e) {
  const r = new Date(e);
  const i = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime();
  const l = i + sn - 1;
  return n.filter(c => c.at >= i && c.at <= l).sort((c, d) => c.at - d.at);
}
function Qf(n) {
  const e = new Date(n);
  const r = (e.getDay() + 6) % 7;
  const i = new Date(e.getFullYear(), e.getMonth(), e.getDate() - r).getTime();
  return {
    start: i,
    end: i + sn * 7 - 1
  };
}
function pp(n, e, r) {
  const i = e + r * sn;
  return n.filter(l => l.at > e && l.at <= i).sort((l, c) => l.at - c.at);
}
function Lo(n, e) {
  return n.filter(r => !r.done && r.at < e).sort((r, i) => r.at - i.at);
}
function Yf(n, e, r) {
  return Ae(n.filter(i => i.paidAt !== null && i.paidAt >= e && i.paidAt <= r).map(i => i.amount));
}
function qy(n, e, r) {
  return Ae(n.filter(i => i.issuedAt >= e && i.issuedAt <= r).map(i => i.amount));
}
function Hy(n) {
  return n.filter(e => e.paidAt === null && e.status === "due");
}
function Vy(n) {
  return n.filter(e => e.paidAt === null && e.status === "overdue");
}
function Ky(n, e) {
  const r = [["0–30", 0, 30], ["31–60", 31, 60], ["61–90", 61, 90], ["90+", 91, Number.POSITIVE_INFINITY]];
  const i = n.filter(l => l.paidAt === null);
  return r.map(([l, c, d]) => {
    const h = i.filter(m => {
      const g = Math.floor((e - m.issuedAt) / sn);
      return g >= c && g <= d;
    });
    return {
      label: l,
      from: c,
      to: d,
      count: h.length,
      total: Ae(h.map(m => m.amount))
    };
  });
}
function Ou(n, e, r) {
  return n.filter(i => i.since >= e && i.since <= r && !i.archivedAt);
}
function Gy(n, e, r) {
  const i = e - r * sn;
  return n.filter(l => l.lastContacted >= i);
}
function Jy(n, e, r) {
  const i = Dr(n).filter(l => l.closeAt >= e && l.closeAt <= r);
  if (i.length) {
    return Ae(i.map(l => l.amount)) / i.length;
  } else {
    return 0;
  }
}
function Qy(n, e, r) {
  const i = Dr(n).filter(c => c.closeAt >= e && c.closeAt <= r);
  if (!i.length) {
    return 0;
  }
  const l = i.map(c => Math.max(1, (c.closeAt - c.createdAt) / sn));
  return Math.round(Ae(l) / i.length);
}
function Yy(n, e, r, i) {
  const l = Kt(r, i);
  const c = ["Enterprise", "Mid-market", "SMB"];
  const d = new Map(e.map(m => [m.id, m]));
  const h = {
    Enterprise: [],
    "Mid-market": [],
    SMB: []
  };
  l.forEach(({
    start: m,
    end: g
  }) => {
    c.forEach(w => {
      const y = Ae(Dr(n).filter(_ => _.closeAt >= m && _.closeAt <= g).filter(_ => {
        var v;
        return ((v = d.get(_.customerId)) == null ? undefined : v.segment) === w;
      }).map(_ => _.amount));
      h[w].push(y);
    });
  });
  return {
    windows: l.map(m => m.start),
    segments: c,
    values: h,
    totals: {
      Enterprise: Ae(h.Enterprise),
      "Mid-market": Ae(h["Mid-market"]),
      SMB: Ae(h.SMB)
    }
  };
}
function Xy(n, e, r) {
  return Kt(e, r).map(({
    start: i,
    end: l
  }) => Ou(n, i, l).length);
}
function Zy(n, e, r) {
  return Kt(e, r).map(({
    start: i,
    end: l
  }) => {
    const c = n.filter(d => (d.stage === "won" || d.stage === "lost") && d.closeAt >= i && d.closeAt <= l);
    if (c.length) {
      return c.filter(d => d.stage === "won").length / c.length;
    } else {
      return 0;
    }
  });
}
const mu = {
  whatsapp: "WhatsApp",
  slack: "Slack",
  linkedin: "LinkedIn",
  discord: "Discord",
  email: "Email",
  web: "Website"
};
function ew(n, e, r) {
  const i = Ou(n, e, r);
  const l = Object.keys(mu);
  const c = Ae(i.map(d => Math.max(1, d.sources.length)));
  return l.map(d => {
    const h = i.filter(m => m.sources.includes(d)).length;
    return {
      key: d,
      label: mu[d],
      count: h,
      share: c ? h / c : 0
    };
  }).filter(d => d.count > 0).sort((d, h) => h.count - d.count);
}
function tw(n, e, r, i, l = 6) {
  const c = new Map(e.map(h => [h.id, h]));
  const d = new Map();
  Dr(n).filter(h => h.closeAt >= r && h.closeAt <= i).forEach(h => {
    const m = d.get(h.customerId) ?? {
      won: 0,
      deals: 0
    };
    d.set(h.customerId, {
      won: m.won + h.amount,
      deals: m.deals + 1
    });
  });
  return [...d.entries()].map(([h, m]) => ({
    customer: c.get(h),
    ...m
  })).filter(h => !!h.customer).sort((h, m) => m.won - h.won).slice(0, l);
}
function nw(n, e, r, i) {
  return n.map(l => {
    const c = e.filter(m => m.owner === l.id && (m.stage === "won" || m.stage === "lost") && m.closeAt >= r && m.closeAt <= i);
    const d = Ae(Dr(e).filter(m => m.owner === l.id && m.closeAt >= r && m.closeAt <= i).map(m => m.amount));
    const h = Ae(an(e).filter(m => m.owner === l.id).map(m => m.amount));
    return {
      member: l,
      won: d,
      open: h,
      deals: c.length,
      winRate: c.length ? c.filter(m => m.stage === "won").length / c.length : 0
    };
  }).sort((l, c) => c.won - l.won);
}
function gp(n) {
  var d;
  const e = n.steps.length;
  const r = n.steps.filter(h => h.done).length;
  const i = e ? r / e : 0;
  const l = ((d = n.steps.find(h => !h.done)) == null ? undefined : d.label) ?? "Every step is done";
  const c = n.status === "done" ? "good" : n.status === "planning" ? "ink" : n.status === "review" ? "pine" : "butter";
  return {
    done: r,
    total: e,
    pct: i,
    next: l,
    tone: c
  };
}
const Vs = {
  planning: "Planning",
  active: "In progress",
  review: "In review",
  done: "Done"
};
const $u = ["planning", "active", "review", "done"];
function vp(n, e) {
  const r = e(n.actor);
  switch (n.kind) {
    case "movedDeal":
      return `${r} moved ${n.params.deal} to ${n.params.stage} · ${n.params.customer}`;
    case "sentProposal":
      return `${r} sent the revised proposal · ${n.params.customer}`;
    case "loggedCall":
      return `${r} logged a ${n.params.minutes} min call · ${n.params.customer}`;
    case "invoicePaid":
      return `${r} marked invoice ${n.params.invoice} as paid · ${n.params.customer}`;
    case "finishedStep":
      return `${r} finished ${n.params.step} · ${n.params.project}`;
    case "wonDeal":
      return `${r} won ${n.params.deal} · ${n.params.customer}`;
    case "createdCustomer":
      return `${r} added ${n.params.customer} to the directory`;
    case "addedTask":
      return `${r} added ${n.params.task}`;
    default:
      return `${r} updated a record`;
  }
}
const yp = k.createContext(null);
function rr() {
  const n = k.useContext(yp);
  if (!n) {
    throw new Error("useGlobal must be used inside <AppShell>");
  }
  return n;
}
const rw = /^[=+\-@\t\r]/;
function sw(n) {
  if (n == null) {
    return "";
  }
  let e = String(n);
  if (rw.test(e)) {
    e = `'${e}`;
  }
  return e;
}
function Xf(n) {
  const e = sw(n);
  if (/["\n\r,]/.test(e)) {
    return `"${e.replace(/"/g, "\"\"")}"`;
  } else {
    return e;
  }
}
function Mr(n, e) {
  const r = [n.map(Xf).join(",")];
  e.forEach(i => r.push(i.map(Xf).join(",")));
  return `\uFEFF${r.join(`\r
`)}\r
`;
}
function Ur(n, e) {
  const r = new Blob([e], {
    type: "text/csv;charset=utf-8;"
  });
  const i = URL.createObjectURL(r);
  const l = document.createElement("a");
  l.href = i;
  l.download = n;
  document.body.appendChild(l);
  l.click();
  document.body.removeChild(l);
  window.setTimeout(() => URL.revokeObjectURL(i), 1000);
}
function Fr(n = new Date()) {
  const e = r => r.toString().padStart(2, "0");
  return `${n.getFullYear()}-${e(n.getMonth() + 1)}-${e(n.getDate())}-${e(n.getHours())}${e(n.getMinutes())}`;
}
const aw = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});
function Ie(n, e = "USD") {
  if (e === "USD") {
    return aw.format(n);
  } else {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: e,
      maximumFractionDigits: 0
    }).format(n);
  }
}
function Xe(n, e = "USD") {
  const r = Math.abs(n);
  const i = n < 0 ? "-" : "";
  const l = e === "USD" ? "$" : `${e} `;
  const c = (d, h) => `${i}${l}${d.toFixed(1).replace(/\.0$/, "")}${h}`;
  if (r >= 1000000) {
    return c(r / 1000000, "M");
  } else if (r >= 1000) {
    return c(r / 1000, "K");
  } else {
    return `${i}${l}${r.toFixed(0)}`;
  }
}
function wp(n) {
  return new Intl.NumberFormat("en-US").format(Math.round(n));
}
function st(n, e = 0) {
  return `${(n * 100).toFixed(e)}%`;
}
const iw = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric"
});
const ow = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric"
});
const lw = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric"
});
const cw = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric"
});
const uw = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric"
});
const dw = new Intl.DateTimeFormat("en-GB", {
  month: "short"
});
const hw = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true
});
function Zf(n) {
  return iw.format(n);
}
function mt(n) {
  return ow.format(n);
}
function $r(n) {
  return lw.format(n);
}
function fw(n) {
  return cw.format(n);
}
function em(n) {
  return uw.format(n);
}
function Va(n) {
  return dw.format(n);
}
function ls(n) {
  return hw.format(n).replace(/\u202f/g, " ");
}
function mw(n) {
  const e = new Date(n);
  const r = e.getHours();
  const i = e.getMinutes();
  const l = r < 12 ? "a" : "p";
  const c = r % 12 === 0 ? 12 : r % 12;
  if (i === 0) {
    return `${c}${l}`;
  } else {
    return `${c}:${i.toString().padStart(2, "0")}${l}`;
  }
}
function Lu(n, e = Date.now()) {
  const r = Math.max(0, e - n);
  const i = Math.floor(r / 60000);
  if (i < 1) {
    return "just now";
  }
  if (i < 60) {
    return `${i} min ago`;
  }
  const l = Math.floor(i / 60);
  if (l < 24) {
    return `${l} h ago`;
  }
  const c = Math.floor(l / 24);
  if (c < 7) {
    return `${c} d ago`;
  }
  const d = Math.floor(c / 7);
  if (d === 1) {
    return "1 week ago";
  } else {
    return `${d} weeks ago`;
  }
}
function pw(n, e = Date.now()) {
  const r = n - e;
  const i = r > 0;
  const l = Math.floor(Math.abs(r) / 60000);
  if (l < 1) {
    return "just now";
  }
  if (l < 60) {
    if (i) {
      return `in ${l} min`;
    } else {
      return `${l} min ago`;
    }
  }
  const c = Math.floor(l / 60);
  if (c < 24) {
    if (i) {
      return `in ${c} h`;
    } else {
      return `${c} h ago`;
    }
  }
  const d = Math.floor(c / 24);
  if (d < 7) {
    if (i) {
      return `in ${d} d`;
    } else {
      return `${d} d ago`;
    }
  } else {
    return mt(n);
  }
}
function Do(n, e = Date.now()) {
  const r = Math.round((tm(n) - tm(e)) / 86400000);
  if (r === 0) {
    return "Closes today";
  } else if (r === 1) {
    return "Closes tomorrow";
  } else if (r < 0) {
    return `Closed ${mt(n)}`;
  } else {
    return `Closes ${mt(n)}`;
  }
}
function tm(n) {
  const e = new Date(n);
  return new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
}
function Gc(n, e) {
  const r = new Date(n);
  const i = new Date(e);
  return r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth() && r.getDate() === i.getDate();
}
function nm(n) {
  return n.split(" ").filter(Boolean).slice(0, 2).map(e => e[0].toUpperCase()).join("");
}
function gw(n) {
  let e = 0;
  for (let r = 0; r < n.length; r += 1) {
    e = e * 31 + n.charCodeAt(r) >>> 0;
  }
  return `av--t${e % 4}`;
}
const xp = "rapport:theme";
function Du(n) {
  const e = n === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : n;
  document.documentElement.dataset.theme = e;
  try {
    window.localStorage.setItem(xp, JSON.stringify(n));
  } catch {}
}
function vw() {
  try {
    const n = window.localStorage.getItem(xp);
    if (n === "\"dark\"" || n === "\"system\"" || n === "\"light\"") {
      return JSON.parse(n);
    }
  } catch {}
  return "light";
}
const yw = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
function Te({
  children: n,
  ...e
}) {
  return <svg className="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...yw} {...e}>{n}</svg>;
}
const _p = n => <svg viewBox="0 0 24 24" aria-hidden="true" {...n}><path d="M7 4.5h6.5a5 5 0 0 1 0 10H7z" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 14.5l5 5M7 4.5v15" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const _Component = n => <Te {...n}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></Te>;
const Ut = n => <Te {...n}><path d="M12 5v14M5 12h14" /></Te>;
const Zs = n => <Te {...n}><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" /></Te>;
const _Component2 = n => <Te {...n}><rect x="3.5" y="5" width="17" height="15.5" rx="3" /><path d="M3.5 10h17M8 3v4M16 3v4" /></Te>;
const _Component7 = n => <Te {...n}><rect x="3.5" y="5" width="17" height="15.5" rx="3" /><path d="M3.5 10h17M8 3v4M16 3v4M12 13v5M9.5 15.5h5" /></Te>;
const _Component9 = n => <Te {...n}><path d="M6 3.5h12v17l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4-2 1.4Z" /><path d="M9 8h6M9 11.5h6M9 15h3.5" /></Te>;
const _Component3 = n => <Te {...n}><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M11 18.5h2" /></Te>;
const _w = n => <Te {...n}><path d="M20.5 3.5 3.5 10.6l6.6 2.8 2.8 6.6z" /><path d="m10.1 13.4 4.2-4.2" /></Te>;
const _Component4 = n => <Te {...n}><circle cx="6" cy="12" r="2.5" /><circle cx="17.5" cy="6" r="2.5" /><circle cx="17.5" cy="18" r="2.5" /><path d="m8.2 10.8 7.1-3.6M8.2 13.2l7.1 3.6" /></Te>;
const _Component24 = n => <Te {...n}><path d="M4 6h16M7 12h10M10 18h4" /></Te>;
const _Component25 = n => <Te {...n}><path d="M6.8 4.5h-1A1.8 1.8 0 0 0 4 6.3c0 7.6 6.1 13.7 13.7 13.7a1.8 1.8 0 0 0 1.8-1.8v-1a1.8 1.8 0 0 0-1.4-1.8l-2.2-.5a1.8 1.8 0 0 0-1.8.6l-.8 1a13.6 13.6 0 0 1-5.6-5.6l1-.8a1.8 1.8 0 0 0 .6-1.8l-.5-2.2a1.8 1.8 0 0 0-1.8-1.4Z" /></Te>;
const Lr = n => <Te {...n}><path d="M12 15.5V4M7 8.5l5-5 5 5M5 14.5v3.5A2 2 0 0 0 7 20h10a2 2 0 0 0 2-2v-3.5" /></Te>;
const An = n => <Te {...n}><circle cx="5.5" cy="12" r="1.3" /><circle cx="12" cy="12" r="1.3" /><circle cx="18.5" cy="12" r="1.3" /></Te>;
const _Component5 = n => <Te {...n}><circle cx="12" cy="12" r="3" /><path d="M12 2.8l2 2.1 2.9-.4.7 2.8 2.6 1.4-1 2.8 1 2.8-2.6 1.4-.7 2.8-2.9-.4-2 2.1-2-2.1-2.9.4-.7-2.8-2.6-1.4 1-2.8-1-2.8 2.6-1.4.7-2.8 2.9.4Z" /></Te>;
const _Component6 = n => <Te {...n}><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10Z" /></Te>;
const Mo = n => <Te {...n}><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" /></Te>;
const Mu = n => <Te {...n}><path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z" /><path d="M10 20.5a2 2 0 0 0 4 0" /></Te>;
const _Component8 = n => <Te {...n}><path d="M8 4.5h8v5a4 4 0 0 1-8 0zM8 6.5H4.5a3 3 0 0 0 3.5 4M16 6.5h3.5a3 3 0 0 1-3.5 4M12 13.5v3.5M8.5 20h7l-.5-3h-6z" /></Te>;
const Sp = n => <Te {...n}><path d="M4.5 19.5h15" /><path d="M7.5 16v-4.5M12 16V7.5M16.5 16v-6.5" /></Te>;
const Cp = n => <Te {...n}><path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5H12z" /><path d="M15 3.8A8.5 8.5 0 0 1 20.2 9H15z" /></Te>;
const Ep = n => <Te {...n}><path d="M4 16.5 9.5 11l3.5 3.5L20 7.5" /><path d="M15 7.5h5v5" /></Te>;
const _Component22 = n => <Te {...n}><circle cx="9" cy="8.5" r="3.5" /><path d="M3 19.5c.6-3.2 3-5 6-5s5.4 1.8 6 5" /><path d="M15.5 5.2a3.5 3.5 0 0 1 0 6.6M17.5 14.8c1.8.6 3 2.2 3.5 4.7" /></Te>;
const Ka = n => <Te {...n}><circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c.8-3.8 3.8-6 7.5-6s6.7 2.2 7.5 6" /></Te>;
const _Component23 = n => <Te {...n}><rect x="3.5" y="5.5" width="17" height="13" rx="2.5" /><path d="m4 7 8 6 8-6" /></Te>;
const Xa = n => <Te {...n}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></Te>;
const Np = n => <Te {...n}><path d="M4.5 20V5.5a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5V20" /><path d="M15.5 9.5H18a1.5 1.5 0 0 1 1.5 1.5v9M3 20h18M8 8h3M8 12h3M8 16h3" /></Te>;
const Za = n => <Te {...n}><path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" /></Te>;
const Uo = n => <Te {...n}><path d="m5 12.5 4.5 4.5L19 7" /></Te>;
const Pn = n => <Te {...n}><path d="m6 6 12 12M18 6 6 18" /></Te>;
const Tp = n => <Te {...n}><path d="m9.5 6 6 6-6 6" /></Te>;
const _Component27 = n => <Te {...n}><path d="m14.5 6-6 6 6 6" /></Te>;
const Sw = n => <Te {...n}><path d="M7 17 17 7M8.5 7H17v8.5" /></Te>;
const _Component16 = n => <Te {...n}><path d="M4.5 7h15M9.5 7V5.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5V7" /><path d="M6.5 7l.8 11a2 2 0 0 0 2 1.9h5.4a2 2 0 0 0 2-1.9L17.5 7" /></Te>;
const Rp = n => <Te {...n}><path d="M4.5 19.5h4L19 9a2.1 2.1 0 0 0-3-3L5.5 16.5z" /><path d="m14.5 7.5 3 3" /></Te>;
const Cw = n => <Te {...n}><path d="M20 12a8 8 0 1 1-2.6-5.9" /><path d="M20 4v4.5h-4.5" /></Te>;
const Uu = n => <Te {...n}><rect x="3.5" y="5" width="17" height="14" rx="2.5" /><path d="M3.5 10h17M7 14.5h4" /></Te>;
const Ip = n => <Te {...n}><rect x="3.5" y="6" width="17" height="13" rx="2.5" /><path d="M3.5 10.5h17M16.5 14.5h1.5" /></Te>;
const Ap = n => <Te {...n}><path d="M12 4.5 3.5 19h17z" /><path d="M12 10v4M12 16.5h.01" /></Te>;
const Ew = n => <Te {...n}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1.2" /></Te>;
function De({
  id: n,
  title: e,
  tools: r,
  children: i,
  className: l = "",
  focusable: c = false,
  label: d
}) {
  const [h, m] = k.useState(false);
  const g = n ? `${n}-t` : undefined;
  return <a.Fragment><div className={`scrim ${h ? "is-on" : ""}`} aria-hidden="true" onClick={() => m(false)} /><section id={n} className={`card ${l} ${h ? "is-focus" : ""}`} aria-labelledby={e ? g : undefined} aria-label={e ? undefined : d}>{(e || r || c) && <header className="card__head">{e ? <h2 className="card__title" id={g}>{e}</h2> : <span />}<div className="card__tools">{r}{c && <button type="button" className="ibtn card__expand" aria-label={h ? "Collapse" : "Expand"} title={h ? "Collapse" : "Expand"} onClick={() => m(w => !w)}>{h ? <Pn /> : <Sw />}</button>}</div></header>}{i}</section></a.Fragment>;
}
function Je({
  value: n,
  format: e,
  duration: r = 900
}) {
  const i = e ?? (h => wp(h));
  const [l, c] = k.useState(() => i(n));
  const d = k.useRef(0);
  k.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      c(i(n));
      return;
    }
    const h = performance.now();
    const m = g => {
      const w = Math.min(1, (g - h) / r);
      const y = 1 - (1 - w) ** 3;
      c(i(n * y));
      if (w < 1) {
        d.current = requestAnimationFrame(m);
      }
    };
    d.current = requestAnimationFrame(m);
    return () => cancelAnimationFrame(d.current);
  }, [n, r]);
  return <span className="tnum" aria-label={i(n)}>{l}</span>;
}
function Nw({
  stats: n
}) {
  return <dl className="head__stats">{n.map(e => <div className="stat" data-stat={e.key} key={e.key}><span className="stat__ico" aria-hidden="true">{e.icon}</span><div className="stat__body"><dd className="stat__value">{e.value}</dd><dt className="stat__label">{e.label}</dt></div></div>)}</dl>;
}
function _Component11({
  title: n,
  stats: e,
  actions: r
}) {
  return <header className="head"><div className="head__lead"><h1 className="head__title" tabIndex={-1}>{n}</h1></div>{e && e.length > 0 && <Nw stats={e} />}{r && <div className="head__actions">{r}</div>}</header>;
}
const Ue = k.forwardRef(function ({
  label: e,
  className: r = "",
  size: i,
  variant: l,
  active: c,
  children: d,
  ...h
}, m) {
  const g = ["ibtn", l === "glass" ? "ibtn--glass" : "", l === "fill" ? "ibtn--fill" : "", i === "sm" ? "ibtn--sm" : "", i === "lg" ? "ibtn--lg" : "", r].filter(Boolean).join(" ");
  return <button type="button" ref={m} className={g} aria-label={e} title={e} aria-pressed={c} {...h}>{d}</button>;
});
function Se({
  variant: n = "ink",
  size: e,
  children: r,
  className: i = "",
  ...l
}) {
  return <button type="button" className={`btn btn--${n} ${e === "sm" ? "btn--sm" : ""} ${i}`} {...l}>{r}</button>;
}
function _Component18({
  label: n,
  value: e,
  options: r,
  onChange: i
}) {
  const l = k.useRef(null);
  const [c, d] = k.useState(null);
  k.useLayoutEffect(() => {
    const h = l.current;
    if (!h) {
      return;
    }
    const m = h.querySelector(`[data-value="${e}"]`);
    if (m) {
      d({
        left: m.offsetLeft,
        width: m.offsetWidth
      });
    }
  }, [e, r.length]);
  return <div className="seg" role="group" aria-label={n} ref={l}>{c && <span className="seg__pill" aria-hidden="true" style={{
      transform: `translateX(${c.left}px)`,
      width: c.width
    }} />}{r.map(h => <button type="button" className="seg__btn" data-value={h.value} aria-pressed={e === h.value} onClick={() => i(h.value)} key={h.value}>{h.label}</button>)}</div>;
}
function Ft({
  pressed: n,
  children: e,
  className: r = "",
  ...i
}) {
  return <button type="button" className={`chip ${r}`} aria-pressed={n} {...i}>{e}</button>;
}
function St({
  name: n,
  size: e = "sm",
  photo: r,
  title: i
}) {
  const l = gw(n);
  if (r) {
    return <span className={`av av--${e} ${l} av--photo`} title={i ?? n} aria-hidden="true" style={{
      backgroundImage: `url("${r}")`
    }}>{nm(n)}</span>;
  } else {
    return <span className={`av av--${e} ${l}`} title={i ?? n} aria-hidden="true">{nm(n)}</span>;
  }
}
function Pp({
  people: n,
  size: e = "xs"
}) {
  if (n.length) {
    return <span className="av-stack" role="img" aria-label={n.map(r => r.name).join(", ")}>{n.map(r => <St name={r.name} photo={r.photo} size={e} key={r.name} />)}</span>;
  } else {
    return null;
  }
}
function Fo({
  value: n,
  tone: e = "ink",
  label: r
}) {
  return <span className="meter" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(n * 100)} aria-label={r ?? `${Math.round(n * 100)} percent`}><span className={`meter__fill ${e !== "ink" ? `meter__fill--${e}` : ""}`} style={{
      transform: `scaleX(${Math.min(1, Math.max(0, n))})`
    }} /></span>;
}
function _Component10({
  tone: n = "plain",
  children: e
}) {
  return <span className={`badge badge--${n}`}>{e}</span>;
}
function Zo({
  tone: n = "due",
  children: e
}) {
  return <span className={`status ${n !== "draft" ? `status--${n}` : ""}`}>{e}</span>;
}
function _Component13({
  icon: n,
  title: e,
  text: r,
  action: i
}) {
  return <div className="empty">{n}<p className="empty__title">{e}</p>{r && <p className="empty__text">{r}</p>}{i}</div>;
}
function Ne({
  label: n,
  hint: e,
  wide: r,
  children: i,
  htmlFor: l
}) {
  return <label className={`field ${r ? "field--wide" : ""}`} htmlFor={l}><span className="field__label">{n}</span>{i}{e && <span className="field__hint">{e}</span>}</label>;
}
function _Component1(n) {
  return <input {...n} />;
}
function _Component0({
  open: n,
  onClose: e,
  anchor: r,
  className: i = "",
  label: l,
  children: c
}) {
  const d = k.useRef(null);
  const [h, m] = k.useState({
    top: 0,
    left: 0,
    visibility: "hidden"
  });
  k.useLayoutEffect(() => {
    if (!n || !r) {
      return;
    }
    const g = () => {
      var O;
      const w = (O = d.current) == null ? undefined : O.getBoundingClientRect();
      const y = r.getBoundingClientRect();
      const _ = (w == null ? undefined : w.width) ?? 240;
      const v = (w == null ? undefined : w.height) ?? 200;
      const j = 12;
      let b = y.bottom + 8;
      if (b + v > window.innerHeight - j) {
        b = Math.max(j, y.top - v - 8);
      }
      if (b < j) {
        b = j;
      }
      let C = y.left;
      if (C + _ > window.innerWidth - j) {
        C = y.right - _;
      }
      if (C < j) {
        C = j;
      }
      m({
        top: b,
        left: C,
        visibility: "visible"
      });
    };
    g();
    window.addEventListener("resize", g);
    window.addEventListener("scroll", g, true);
    return () => {
      window.removeEventListener("resize", g);
      window.removeEventListener("scroll", g, true);
    };
  }, [n, r]);
  k.useEffect(() => {
    if (!n) {
      return;
    }
    const g = y => {
      if (y.key === "Escape") {
        y.stopPropagation();
        e();
        if (r != null) {
          r.focus();
        }
      }
    };
    const w = y => {
      var v;
      const _ = y.target;
      if (((v = d.current) == null || !v.contains(_)) && (r == null || !r.contains(_))) {
        e();
      }
    };
    document.addEventListener("keydown", g);
    document.addEventListener("mousedown", w);
    return () => {
      document.removeEventListener("keydown", g);
      document.removeEventListener("mousedown", w);
    };
  }, [n, e, r]);
  k.useEffect(() => {
    var w;
    if (!n) {
      return;
    }
    const g = (w = d.current) == null ? undefined : w.querySelector("button, [href], input");
    if (g != null) {
      g.focus();
    }
  }, [n]);
  if (n) {
    return <div className="pop-layer"><div className={`pop ${i}`} style={h} ref={d} role="menu" aria-label={l}>{c}</div></div>;
  } else {
    return null;
  }
}
function Ht({
  onClick: n,
  danger: e,
  selected: r,
  children: i
}) {
  return <button type="button" role={r === undefined ? "menuitem" : "menuitemradio"} aria-checked={r} className={`menu__item ${e ? "is-danger" : ""}`} onClick={n}>{i}</button>;
}
function _Component17({
  open: n,
  onClose: e,
  title: r,
  subtitle: i,
  children: l,
  footer: c,
  error: d
}) {
  const h = k.useRef(null);
  const m = k.useId();
  k.useEffect(() => {
    const g = h.current;
    if (g) {
      if (n && !g.open) {
        g.showModal();
      }
      if (!n && g.open) {
        g.close();
      }
    }
  }, [n]);
  k.useEffect(() => {
    const g = h.current;
    if (!g) {
      return;
    }
    const w = y => {
      y.preventDefault();
      e();
    };
    g.addEventListener("cancel", w);
    return () => g.removeEventListener("cancel", w);
  }, [e]);
  return <dialog className="modal" ref={h} aria-labelledby={m} onClick={g => {
    if (g.target === h.current) {
      e();
    }
  }}><div className="mform"><header className="mform__head"><div><h2 className="mform__title" id={m}>{r}</h2>{i && <p className="mform__sub">{i}</p>}</div><Ue label="Close" onClick={e}><Pn /></Ue></header><div className="mform__grid">{l}</div><p className="mform__err" role="alert">{d ?? ""}</p><footer className="mform__foot">{c}</footer></div></dialog>;
}
function Ga({
  open: n,
  onClose: e,
  title: r,
  children: i
}) {
  const l = k.useRef(null);
  k.useEffect(() => {
    const c = l.current;
    if (c) {
      if (n && !c.open) {
        c.showModal();
      }
      if (!n && c.open) {
        c.close();
      }
    }
  }, [n]);
  k.useEffect(() => {
    const c = l.current;
    if (!c) {
      return;
    }
    const d = h => {
      h.preventDefault();
      e();
    };
    c.addEventListener("cancel", d);
    return () => c.removeEventListener("cancel", d);
  }, [e]);
  return <dialog className="drawer" ref={l} onClick={c => {
    if (c.target === l.current) {
      e();
    }
  }}><div className="drawer__inner"><Ue label="Close" className="drawer__close" onClick={e}><Pn /></Ue><h2>{r}</h2>{i}</div></dialog>;
}
const vu = [{
  key: "overview",
  label: "Overview",
  path: "/overview"
}, {
  key: "pipeline",
  label: "Pipeline",
  path: "/pipeline"
}, {
  key: "customers",
  label: "Customers",
  path: "/customers"
}, {
  key: "schedule",
  label: "Schedule",
  path: "/schedule"
}, {
  key: "finance",
  label: "Finance",
  path: "/finance"
}, {
  key: "growth",
  label: "Growth",
  path: "/growth"
}, {
  key: "projects",
  label: "Projects",
  path: "/projects"
}];
function Tw({
  children: n
}) {
  const {
    data: e
  } = jn();
  const r = on();
  const i = On();
  const [l, c] = k.useState(() => vw());
  const [d, h] = k.useState(false);
  const [m, g] = k.useState("");
  const [w, y] = k.useState(false);
  const [_, v] = k.useState(false);
  const [j, b] = k.useState(false);
  const [C, O] = k.useState(false);
  const [L, R] = k.useState(false);
  const [W, I] = k.useState(false);
  const [z, X] = k.useState(false);
  const [le, G] = k.useState(false);
  const [B, re] = k.useState(null);
  const [be, q] = k.useState(false);
  const [ge, _e] = k.useState(0);
  const [K, D] = k.useState(null);
  const [H, se] = k.useState({
    to: "",
    subject: "",
    body: ""
  });
  const [te, T] = k.useState(false);
  const V = k.useRef(null);
  const U = k.useRef(null);
  const ie = k.useRef(null);
  const me = k.useRef(null);
  const A = k.useRef(null);
  const oe = k.useRef(null);
  const we = k.useRef(null);
  const Ee = i.pathname.replace("/", "") || "overview";
  k.useEffect(() => {
    Du(l);
  }, [l]);
  k.useEffect(() => {
    if (B === null) {
      return;
    }
    const Y = window.setInterval(() => {
      _e(Math.floor((Date.now() - B) / 1000));
    }, 1000);
    return () => window.clearInterval(Y);
  }, [B]);
  const Oe = k.useCallback((Y, Ke) => {
    D({
      message: Y,
      action: Ke
    });
    if (we.current) {
      window.clearTimeout(we.current);
    }
    we.current = window.setTimeout(() => D(null), Ke ? 7000 : 3200);
  }, []);
  const Gt = k.useCallback((Y = "") => {
    g(Y);
    h(true);
  }, []);
  const ln = k.useCallback(async () => {
    const Y = `${window.location.origin}${window.location.pathname}#${i.pathname}${i.search}`;
    try {
      await navigator.clipboard.writeText(Y);
      Oe("Link copied to the clipboard");
    } catch {
      window.prompt("Copy this link", Y);
    }
  }, [i.pathname, i.search, Oe]);
  const Ct = k.useCallback(() => {
    const Y = V.current;
    if (Y) {
      Y.run();
      return;
    }
    const Pe = Kt(Date.now(), 12).map(({
      start: Be,
      end: ot
    }) => [new Date(Be).toISOString().slice(0, 7), Tn(e.deals, Be, ot)]);
    Ur(`sales-crm-overview-${Fr()}.csv`, Mr(["month", "won_revenue_usd"], Pe));
    Oe("Overview exported as CSV");
  }, [e.deals, Oe]);
  const Ln = k.useCallback((Y, Ke) => {
    V.current = Y ? {
      run: Y,
      label: Ke
    } : null;
  }, []);
  const Et = k.useCallback(() => y(true), []);
  const kn = k.useCallback(() => v(true), []);
  const Dn = k.useCallback(() => b(true), []);
  const cn = k.useCallback(() => {
    T(false);
    O(true);
  }, []);
  const ar = k.useCallback(() => R(true), []);
  const Jt = k.useCallback(() => {
    G(true);
    I(true);
  }, []);
  const un = k.useCallback(Y => {
    r(Y);
  }, [r]);
  const dn = k.useMemo(() => ({
    openSearch: Gt,
    openCreate: Et,
    openFavourites: kn,
    openToday: Dn,
    openCompose: cn,
    openMore: ar,
    openNotifications: Jt,
    startCall: () => {
      _e(0);
      re(Date.now());
      q(false);
    },
    copyLink: ln,
    toast: Oe,
    exportCurrent: Ct,
    registerExport: Ln,
    go: un
  }), [Gt, Et, kn, Dn, cn, ar, Jt, ln, Oe, Ct, Ln, un]);
  k.useEffect(() => {
    const Y = Ke => {
      if ((Ke.metaKey || Ke.ctrlKey) && Ke.key.toLowerCase() === "k") {
        Ke.preventDefault();
        h(true);
      }
      if (Ke.key === "Escape") {
        y(false);
        R(false);
        I(false);
        X(false);
      }
    };
    document.addEventListener("keydown", Y);
    return () => document.removeEventListener("keydown", Y);
  }, []);
  const F = le ? 0 : e.notifications.filter(Y => Y.unread).length;
  const ae = Rr(e.tasks, Date.now());
  const he = ae.filter(Y => Y.done).length;
  const ye = Y => {
    var Ke;
    re(null);
    Oe(Y > 0 ? `Call logged · ${Y} min against ${((Ke = e.customers[0]) == null ? undefined : Ke.company) ?? "the account"}` : "Call ended without a note");
  };
  const Fe = `${Math.floor(ge / 60).toString().padStart(2, "0")}:${(ge % 60).toString().padStart(2, "0")}`;
  return <yp.Provider value={dn}><div className="mesh" aria-hidden="true"><i className="mesh__a" /><i className="mesh__b" /><i className="mesh__c" /></div><a className="skip" href="#main">Skip to content</a><div className="app"><header className="top"><Kc className="brand" to="/overview" aria-label="Sales CRM — overview"><span className="brand__mark" aria-hidden="true"><_p /></span><span className="brand__name">Sales CRM</span></Kc><nav className="tabs" aria-label="Main"><div className="tabs__track">{vu.map(Y => <Kc to={Y.path} className="tab" data-route={Y.key} aria-current={Ee === Y.key ? "page" : undefined} key={Y.key}>{Y.label}</Kc>)}</div></nav><div className="top__tools"><Ue label="Activity" variant="glass" onClick={() => Oe(`${e.activity.length} events in the last 24 hours`)}><Uu /></Ue><span style={{
            position: "relative",
            display: "inline-flex"
          }}><Ue ref={A} label="Notifications" variant="glass" aria-haspopup="dialog" aria-expanded={W} onClick={() => W ? I(false) : Jt()}><Mu />{F > 0 && <span className="dot-badge" />}</Ue></span><button type="button" className="me" ref={oe} aria-label="Account menu" aria-haspopup="menu" aria-expanded={z} onClick={() => X(Y => !Y)}><St name={e.me.name} size="lg" /></button></div></header><nav className="dock" aria-label="Quick actions"><button type="button" className="dock__btn" ref={U} data-act="search" aria-label="Search (⌘K)" onClick={() => Gt()}><_Component /><span className="dock__tip">Search <kbd>⌘K</kbd></span></button><button type="button" className="dock__btn" ref={ie} data-act="new" aria-label="Create new" aria-haspopup="menu" aria-expanded={w} onClick={() => y(Y => !Y)}><Ut /><span className="dock__tip">Create</span></button><button type="button" className="dock__btn" data-act="favs" aria-label="Favourite customers" onClick={kn}><Zs /><span className="dock__tip">Favourites</span></button><button type="button" className="dock__btn" data-act="today" aria-label="Today's agenda" onClick={Dn}><_Component2 /><span className="dock__tip">Today</span></button><button type="button" className="dock__btn" data-act="call" aria-label="Log a call" onClick={() => dn.startCall()}><_Component3 /><span className="dock__tip">Log a call</span></button><button type="button" className="dock__btn" data-act="compose" aria-label="Compose email" onClick={cn}><_w /><span className="dock__tip">Compose</span></button><button type="button" className="dock__btn" data-act="share" aria-label="Copy link to this page" onClick={() => void ln()}><_Component4 /><span className="dock__tip">Copy link</span></button><button type="button" className="dock__btn" data-act="export" aria-label="Export customers as CSV" onClick={Ct}><Lr /><span className="dock__tip">Export CSV</span></button><button type="button" className="dock__btn dock__more" ref={me} data-act="more" aria-label="More actions" aria-haspopup="menu" aria-expanded={L} onClick={() => R(Y => !Y)}><An /><span className="dock__tip">More</span></button><span className="dock__sep" aria-hidden="true" /><Kc to="/settings" className="dock__btn" data-route="settings" aria-label="Settings" aria-current={Ee === "settings" ? "page" : undefined}><_Component5 /><span className="dock__tip">Settings</span></Kc><button type="button" className="dock__btn dock__theme" data-act="theme" aria-label={l === "dark" ? "Switch to light theme" : "Switch to dark theme"} onClick={() => {
          const Y = l === "dark" ? "light" : "dark";
          c(Y);
          Oe(`${Y === "dark" ? "Dark" : "Light"} theme on`);
        }}><_Component6 className="ico ico--moon" /><Mo className="ico ico--sun" /><span className="dock__tip">Theme</span></button></nav><main className="main" id="main">{n}</main></div><Rw open={d} query={m} onQuery={g} onClose={() => h(false)} /><_Component0 open={w} onClose={() => y(false)} anchor={ie.current} label="Create"><Ht onClick={() => {
        y(false);
        r("/schedule?new=1");
      }}><_Component7 /> New task</Ht><Ht onClick={() => {
        y(false);
        r("/pipeline?new=1");
      }}><_Component8 /> New deal</Ht><Ht onClick={() => {
        y(false);
        r("/customers?new=1");
      }}><Ka /> New customer</Ht><hr /><Ht onClick={() => {
        y(false);
        r("/finance?new=1");
      }}><_Component9 /> New invoice</Ht><Ht onClick={() => {
        y(false);
        r("/projects?new=1");
      }}><Za /> New project</Ht></_Component0><_Component0 open={L} onClose={() => R(false)} anchor={me.current} label="More actions"><Ht onClick={() => {
        R(false);
        r("/customers?fav=1");
      }}><Zs /> Favourite customers</Ht><Ht onClick={() => {
        R(false);
        cn();
      }}><_Component3 /> Log a call</Ht><Ht onClick={() => {
        R(false);
        ln();
      }}><_Component4 /> Copy link to this page</Ht><Ht onClick={() => {
        R(false);
        Ct();
      }}><Lr /> Export customers (CSV)</Ht></_Component0><_Component0 open={W} onClose={() => I(false)} anchor={A.current} label="Notifications" className="pop--wide"><div className="pop__head"><span className="pop__title">Notifications</span><Ft onClick={() => I(false)}>Close</Ft></div><div className="pop__list">{e.notifications.map(Y => <button type="button" className={`pop__row ${Y.unread && !le ? "is-unread" : ""}`} onClick={() => I(false)} key={Y.id}><span><b>{Y.title}</b><small>{Y.body}</small><small>{Lu(Y.at)}</small></span></button>)}</div></_Component0><_Component0 open={z} onClose={() => X(false)} anchor={oe.current} label="Account"><div className="pop__head"><span style={{
          display: "flex",
          gap: 10,
          alignItems: "center"
        }}><St name={e.me.name} size="md" /><span><b style={{
              display: "block",
              fontSize: 13.5
            }}>{e.me.name}</b><small style={{
              color: "var(--muted)",
              fontSize: 12
            }}>{e.me.role}</small></span></span></div><hr /><Ht onClick={() => {
        X(false);
        r("/settings");
      }}><Ka /> Profile & settings</Ht><Ht onClick={() => {
        X(false);
        c(l === "dark" ? "light" : "dark");
      }}>{l === "dark" ? <Mo /> : <_Component6 />} Switch theme</Ht><hr /><Ht danger={true} onClick={() => {
        X(false);
        Oe("Sign-out is handled by Supabase Auth when configured");
      }}><Pn /> Sign out</Ht></_Component0><Ga open={_} onClose={() => v(false)} title="Favourites"><p className="card__sub">Customers you starred. Favourites are per user and follow you between sessions (FR-006).</p><div className="set-list">{e.customers.filter(Y => Y.favorite).length === 0 && <p className="card__sub">Nothing starred yet — use the star on any customer card.</p>}{e.customers.filter(Y => Y.favorite).map(Y => <button type="button" className="pop__row" onClick={() => {
          v(false);
          r(`/customers/${Y.id}`);
        }} key={Y.id}><St name={Y.name} photo={Y.photo ? `/photos/${Y.photo}.jpg` : undefined} size="md" /><span><b>{Y.name}</b><small>{Y.jobRole} · {Y.company}</small></span></button>)}</div><p className="card__sub">Pages you pinned: {e.favoritePageKeys.join(", ") || "none"}</p></Ga><Ga open={j} onClose={() => b(false)} title="Today"><p className="card__sub">{he} of {ae.length} done · times shown in your organisation's timezone.</p><div className="set-list">{ae.map(Y => <div className="pop__row" key={Y.id}><span><b style={Y.done ? {
              textDecoration: "line-through",
              color: "var(--muted)"
            } : undefined}>{Y.title}</b><small>{ls(Y.at)}</small></span></div>)}</div><div className="set-list"><b style={{
          fontSize: 13
        }}>Coming up</b>{pp(e.tasks, Date.now(), 7).slice(0, 5).map(Y => <div className="pop__row" key={Y.id}><span><b>{Y.title}</b><small>{ls(Y.at)}</small></span></div>)}</div>{Lo(e.tasks, Date.now()).length > 0 && <p className="card__sub">{Lo(e.tasks, Date.now()).length} overdue items are waiting on the schedule.</p>}</Ga><Ga open={C} onClose={() => O(false)} title="Compose"><p className="card__sub">Drafts stay in Sales CRM. Nothing is sent until an email provider is configured and you confirm (BR-012).</p><Ne label="To" htmlFor="compose-to"><_Component1 id="compose-to" type="email" value={H.to} placeholder="name@company.com" onChange={Y => se({
          ...H,
          to: Y.target.value
        })} /></Ne><Ne label="Subject" htmlFor="compose-subject"><_Component1 id="compose-subject" value={H.subject} placeholder="Following up on the proposal" onChange={Y => se({
          ...H,
          subject: Y.target.value
        })} /></Ne><Ne label="Message" htmlFor="compose-body"><textarea id="compose-body" rows={6} value={H.body} placeholder="Write the message…" onChange={Y => se({
          ...H,
          body: Y.target.value
        })} /></Ne>{te && <p className="card__sub">Draft saved in this browser.</p>}<div style={{
        display: "flex",
        gap: 10,
        justifyContent: "flex-end"
      }}><Se variant="ghost" onClick={() => O(false)}>Close</Se><Se onClick={() => {
          T(true);
          Oe("Draft saved — not sent");
        }}><Uo /> Save draft</Se></div></Ga>{B !== null && <div className="callbar" role="status"><span className="callbar__who"><St name={e.me.name} size="md" /><span className="callbar__ring" aria-hidden="true" /></span><span className="callbar__text"><b>On a call</b><small>{Fe}</small></span><Ue label={be ? "Unmute" : "Mute"} active={be} onClick={() => q(Y => !Y)}><Ka /></Ue><Ue label="End call and log it" className="callbar__end" onClick={() => ye(Math.max(1, Math.round(ge / 60)))}><Pn /></Ue></div>}<div className={`toast ${K ? "is-on" : ""}`} role="status" aria-live="polite"><span className="toast__ico"><Uo /></span><span>{(K == null ? undefined : K.message) ?? ""}</span>{(K == null ? undefined : K.action) && <button type="button" className="toast__undo" onClick={() => {
        var Y;
        if ((Y = K.action) != null) {
          Y.run();
        }
        D(null);
      }}>{K.action.label}</button>}</div></yp.Provider>;
}
function Rw({
  open: n,
  query: e,
  onQuery: r,
  onClose: i
}) {
  const {
    data: l
  } = jn();
  const c = on();
  const d = k.useRef(null);
  const [h, m] = k.useState(0);
  k.useEffect(() => {
    const v = d.current;
    if (v) {
      if (n && !v.open) {
        v.showModal();
      }
      if (!n && v.open) {
        v.close();
      }
    }
  }, [n]);
  const g = k.useMemo(() => {
    const v = e.trim().toLowerCase();
    if (v) {
      return {
        pages: vu.filter(j => j.label.toLowerCase().includes(v)).map(j => ({
          id: j.key,
          title: j.label,
          sub: "Page",
          path: j.path
        })),
        customers: l.customers.filter(j => [j.name, j.company, j.city, j.email, j.industry].some(b => b.toLowerCase().includes(v))).slice(0, 6).map(j => ({
          id: j.id,
          title: j.name,
          sub: `${j.jobRole} · ${j.company}`,
          path: `/customers/${j.id}`
        })),
        deals: l.deals.filter(j => j.title.toLowerCase().includes(v)).slice(0, 6).map(j => {
          var b;
          return {
            id: j.id,
            title: j.title,
            sub: `${((b = l.customers.find(C => C.id === j.customerId)) == null ? undefined : b.company) ?? "Account"} · ${Ie(j.amount)}`,
            path: `/pipeline?deal=${j.id}`
          };
        })
      };
    } else {
      return {
        pages: vu.slice(0, 7).map(j => ({
          id: j.key,
          title: j.label,
          sub: "Page",
          path: j.path
        })),
        customers: [],
        deals: []
      };
    }
  }, [e, l.customers, l.deals]);
  const w = k.useMemo(() => [...g.pages, ...g.customers, ...g.deals], [g]);
  k.useEffect(() => m(0), [e]);
  const y = w.length;
  const _ = v => {
    i();
    c(v);
  };
  return <dialog className="finder" ref={d} aria-label="Search customers, deals and pages" onClose={i} onClick={v => {
    if (v.target === d.current) {
      i();
    }
  }} onKeyDown={v => {
    if (v.key === "ArrowDown") {
      v.preventDefault();
      m(j => y ? (j + 1) % y : 0);
    }
    if (v.key === "ArrowUp") {
      v.preventDefault();
      m(j => y ? (j - 1 + y) % y : 0);
    }
    if (v.key === "Enter" && w[h]) {
      v.preventDefault();
      _(w[h].path);
    }
  }}><div className="finder__bar"><_Component /><input value={e} onChange={v => r(v.target.value)} placeholder="Search customers, deals, pages…" aria-label="Search customers, deals, pages" autoFocus={true} /><kbd>esc</kbd></div><div className="finder__list">{y === 0 && <p className="card__sub" style={{
        padding: "18px 10px"
      }}>No matches for “{e}”. Try a company, a city or a deal title.</p>}{g.pages.length > 0 && <p className="finder__group">Pages</p>}{g.pages.map(v => {
        var j;
        return <Jc row={v} selected={((j = w[h]) == null ? undefined : j.id) === v.id} onSelect={() => _(v.path)} icon={<Uu />} key={`p-${v.id}`} />;
      })}{g.customers.length > 0 && <p className="finder__group">Customers</p>}{g.customers.map(v => {
        var j;
        return <Jc row={v} selected={((j = w[h]) == null ? undefined : j.id) === v.id} onSelect={() => _(v.path)} icon={<Ka />} key={`c-${v.id}`} />;
      })}{g.deals.length > 0 && <p className="finder__group">Deals</p>}{g.deals.map(v => {
        var j;
        return <Jc row={v} selected={((j = w[h]) == null ? undefined : j.id) === v.id} onSelect={() => _(v.path)} icon={<Zs />} key={`d-${v.id}`} />;
      })}</div></dialog>;
}
function Jc({
  row: n,
  selected: e,
  onSelect: r,
  icon: i
}) {
  return <button type="button" className="finder__opt" aria-selected={e} onClick={r}><span className="lead" aria-hidden="true">{i}</span><span style={{
      minWidth: 0
    }}><b>{n.title}</b><small>{n.sub}</small></span><span className="go" aria-hidden="true"><Ut style={{
        transform: "rotate(45deg)"
      }} /></span></button>;
}
const Iw = Symbol.for("@supabase/supabase-js.traceContextExtractor");
function Aw() {
  return globalThis[Iw];
}
function el(n, e) {
  var r = {};
  for (var i in n) {
    if (Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0) {
      r[i] = n[i];
    }
  }
  if (n != null && typeof Object.getOwnPropertySymbols == "function") {
    for (var l = 0, i = Object.getOwnPropertySymbols(n); l < i.length; l++) {
      if (e.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[l])) {
        r[i[l]] = n[i[l]];
      }
    }
  }
  return r;
}
function Pw(n, e, r, i) {
  function l(c) {
    if (c instanceof r) {
      return c;
    } else {
      return new r(function (d) {
        d(c);
      });
    }
  }
  return new (r ||= Promise)(function (c, d) {
    function h(w) {
      try {
        g(i.next(w));
      } catch (y) {
        d(y);
      }
    }
    function m(w) {
      try {
        g(i.throw(w));
      } catch (y) {
        d(y);
      }
    }
    function g(w) {
      if (w.done) {
        c(w.value);
      } else {
        l(w.value).then(h, m);
      }
    }
    g((i = i.apply(n, e || [])).next());
  });
}
const Ow = n => n ? (...e) => n(...e) : (...e) => fetch(...e);
class Fu extends Error {
  constructor(e, r = "FunctionsError", i) {
    super(e);
    this.name = r;
    this.context = i;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      context: this.context
    };
  }
}
class $w extends Fu {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class am extends Fu {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class im extends Fu {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var yu;
(function (n) {
  n.Any = "any";
  n.ApNortheast1 = "ap-northeast-1";
  n.ApNortheast2 = "ap-northeast-2";
  n.ApSouth1 = "ap-south-1";
  n.ApSoutheast1 = "ap-southeast-1";
  n.ApSoutheast2 = "ap-southeast-2";
  n.CaCentral1 = "ca-central-1";
  n.EuCentral1 = "eu-central-1";
  n.EuWest1 = "eu-west-1";
  n.EuWest2 = "eu-west-2";
  n.EuWest3 = "eu-west-3";
  n.SaEast1 = "sa-east-1";
  n.UsEast1 = "us-east-1";
  n.UsWest1 = "us-west-1";
  n.UsWest2 = "us-west-2";
})(yu ||= {});
class Lw {
  constructor(e, {
    headers: r = {},
    customFetch: i,
    region: l = yu.Any
  } = {}) {
    this.url = e;
    this.headers = r;
    this.region = l;
    this.fetch = Ow(i);
  }
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  invoke(e) {
    return Pw(this, arguments, undefined, function* (r, i = {}) {
      var c;
      let d;
      let h;
      let m;
      try {
        const {
          headers: g,
          method: w,
          body: y,
          signal: _,
          timeout: v
        } = i;
        let j = {};
        let {
          region: b
        } = i;
        b ||= this.region;
        const C = new URL(`${this.url}/${r}`);
        if (b && b !== "any") {
          j["x-region"] = b;
          C.searchParams.set("forceFunctionRegion", b);
        }
        let O;
        const L = !!g && Object.keys(g).some(le => le.toLowerCase() === "content-type");
        if (y && !L) {
          if (typeof Blob !== "undefined" && y instanceof Blob || y instanceof ArrayBuffer) {
            j["Content-Type"] = y.type || "application/octet-stream";
            O = y;
          } else if (typeof y == "string") {
            j["Content-Type"] = "text/plain";
            O = y;
          } else if (typeof FormData !== "undefined" && y instanceof FormData) {
            O = y;
          } else {
            j["Content-Type"] = "application/json";
            O = JSON.stringify(y);
          }
        } else if (y && typeof y != "string" && (typeof Blob === "undefined" || !(y instanceof Blob)) && !(y instanceof ArrayBuffer) && (typeof FormData === "undefined" || !(y instanceof FormData))) {
          O = JSON.stringify(y);
        } else {
          O = y;
        }
        let R = _;
        if (v) {
          h = new AbortController();
          d = setTimeout(() => h.abort(), v);
          if (_) {
            R = h.signal;
            m = () => h.abort();
            _.addEventListener("abort", m);
          } else {
            R = h.signal;
          }
        }
        const W = yield this.fetch(C.toString(), {
          method: w || "POST",
          headers: Object.assign(Object.assign(Object.assign({}, j), this.headers), g),
          body: O,
          signal: R
        }).catch(le => {
          throw new $w(le);
        });
        const I = W.headers.get("x-relay-error");
        if (I && I === "true") {
          throw new am(W);
        }
        if (!W.ok) {
          throw new im(W);
        }
        let z = (W.headers.get("Content-Type") ?? "text/plain").split(";")[0].trim().toLowerCase();
        let X;
        if (z === "application/json") {
          X = yield W.json();
        } else if (z === "application/octet-stream" || z === "application/pdf") {
          X = yield W.blob();
        } else if (z === "text/event-stream") {
          X = W;
        } else if (z === "multipart/form-data") {
          X = yield W.formData();
        } else {
          X = yield W.text();
        }
        return {
          data: X,
          error: null,
          response: W
        };
      } catch (g) {
        return {
          data: null,
          error: g,
          response: g instanceof im || g instanceof am ? g.context : undefined
        };
      } finally {
        if (d) {
          clearTimeout(d);
        }
        if (m) {
          if ((c = i.signal) !== null && c !== undefined) {
            c.removeEventListener("abort", m);
          }
        }
      }
    });
  }
}
var Ks = class extends Error {
  constructor(n) {
    super(n.message);
    this.name = "PostgrestError";
    this.details = n.details;
    this.hint = n.hint;
    this.code = n.code;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code
    };
  }
};
const Op = 3;
const om = n => Math.min(2 ** n * 1000, 30000);
const Dw = [520, 503];
const $p = ["GET", "HEAD", "OPTIONS"];
function ti(n) {
  "@babel/helpers - typeof";

  ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  };
  return ti(n);
}
function Mw(n, e) {
  if (ti(n) != "object" || !n) {
    return n;
  }
  var r = n[Symbol.toPrimitive];
  if (r !== undefined) {
    var i = r.call(n, e);
    if (ti(i) != "object") {
      return i;
    }
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Uw(n) {
  var e = Mw(n, "string");
  if (ti(e) == "symbol") {
    return e;
  } else {
    return e + "";
  }
}
function Fw(n, e, r) {
  if ((e = Uw(e)) in n) {
    Object.defineProperty(n, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    n[e] = r;
  }
  return n;
}
function lm(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    if (e) {
      i = i.filter(function (l) {
        return Object.getOwnPropertyDescriptor(n, l).enumerable;
      });
    }
    r.push.apply(r, i);
  }
  return r;
}
function ss(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] ?? {};
    if (e % 2) {
      lm(Object(r), true).forEach(function (i) {
        Fw(n, i, r[i]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(n, Object.getOwnPropertyDescriptors(r));
    } else {
      lm(Object(r)).forEach(function (i) {
        Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(r, i));
      });
    }
  }
  return n;
}
function cm(n, e) {
  return new Promise(r => {
    if (e != null && e.aborted) {
      r();
      return;
    }
    const i = setTimeout(() => {
      if (e != null) {
        e.removeEventListener("abort", l);
      }
      r();
    }, n);
    function l() {
      clearTimeout(i);
      r();
    }
    if (e != null) {
      e.addEventListener("abort", l);
    }
  });
}
function Bw(n, e, r, i) {
  return !!i && !(r >= Op) && !!$p.includes(n) && !!Dw.includes(e);
}
async function Lp(n, e, r, i) {
  let l = 0;
  while (true) {
    const m = ss({}, r.headers);
    if (l > 0) {
      m["X-Retry-Count"] = String(l);
    }
    let g;
    try {
      g = await n(e, {
        method: r.method,
        headers: m,
        body: r.body,
        signal: r.signal
      });
    } catch (w) {
      var c;
      if ((w == null ? undefined : w.name) === "AbortError" || (w == null ? undefined : w.code) === "ABORT_ERR" || (w == null ? undefined : w.name) === "TimeoutError" && (c = r.signal) !== null && c !== undefined && c.aborted || !$p.includes(r.method)) {
        throw w;
      }
      if (i && l < Op) {
        const y = om(l);
        l++;
        await cm(y, r.signal);
        continue;
      }
      throw w;
    }
    if (Bw(r.method, g.status, l, i)) {
      var h;
      const w = ((h = g.headers) === null || h === undefined ? undefined : h.get("Retry-After")) ?? null;
      const y = w !== null ? Math.max(0, parseInt(w, 10) || 0) * 1000 : om(l);
      await g.text();
      l++;
      await cm(y, r.signal);
      continue;
    }
    return g;
  }
}
var zw = class {
  constructor(n) {
    this.shouldThrowOnError = false;
    this.retryEnabled = true;
    this.method = n.method;
    this.url = n.url;
    this.headers = new Headers(n.headers);
    this.schema = n.schema;
    this.body = n.body;
    this.shouldThrowOnError = n.shouldThrowOnError ?? false;
    this.signal = n.signal;
    this.isMaybeSingle = n.isMaybeSingle ?? false;
    this.shouldStripNulls = n.shouldStripNulls ?? false;
    this.urlLengthLimit = n.urlLengthLimit ?? 8000;
    this.retryEnabled = n.retry ?? true;
    if (n.fetch) {
      this.fetch = n.fetch;
    } else {
      this.fetch = fetch;
    }
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  stripNulls() {
    if (this.headers.get("Accept") === "text/csv") {
      throw new Error("stripNulls() cannot be used with csv()");
    }
    this.shouldStripNulls = true;
    return this;
  }
  setHeader(n, e) {
    this.headers = new Headers(this.headers);
    this.headers.set(n, e);
    return this;
  }
  retry(n) {
    this.retryEnabled = n;
    return this;
  }
  then(n, e) {
    var r = this;
    if (this.schema !== undefined) {
      if (["GET", "HEAD"].includes(this.method)) {
        this.headers.set("Accept-Profile", this.schema);
      } else {
        this.headers.set("Content-Profile", this.schema);
      }
    }
    if (this.method !== "GET" && this.method !== "HEAD") {
      this.headers.set("Content-Type", "application/json");
    }
    if (this.shouldStripNulls) {
      const d = this.headers.get("Accept");
      if (d === "application/vnd.pgrst.object+json") {
        this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped");
      } else if (!d || d === "application/json") {
        this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped");
      }
    }
    const i = this.fetch;
    let c = (async () => {
      const d = {};
      r.headers.forEach((m, g) => {
        d[g] = m;
      });
      const h = await Lp(i, r.url.toString(), {
        method: r.method,
        headers: d,
        body: JSON.stringify(r.body, (m, g) => typeof g == "bigint" ? g.toString() : g),
        signal: r.signal
      }, r.retryEnabled);
      return await r.processResponse(h);
    })();
    if (!this.shouldThrowOnError) {
      c = c.catch(d => {
        let m = "";
        let g = "";
        let w = "";
        const y = d == null ? undefined : d.cause;
        if (y) {
          const L = (y == null ? undefined : y.message) ?? "";
          const R = (y == null ? undefined : y.code) ?? "";
          m = `${(d == null ? undefined : d.name) ?? "FetchError"}: ${d == null ? undefined : d.message}`;
          m += `

Caused by: ${(y == null ? undefined : y.name) ?? "Error"}: ${L}`;
          if (R) {
            m += ` (${R})`;
          }
          if (y != null && y.stack) {
            m += `
${y.stack}`;
          }
        } else {
          m = (d == null ? undefined : d.stack) ?? "";
        }
        const O = this.url.toString().length;
        if ((d == null ? undefined : d.name) === "AbortError" || (d == null ? undefined : d.code) === "ABORT_ERR") {
          w = "";
          g = "Request was aborted (timeout or manual cancellation)";
          if (O > this.urlLengthLimit) {
            g += `. Note: Your request URL is ${O} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`;
          }
        } else if ((y == null ? undefined : y.name) === "HeadersOverflowError" || (y == null ? undefined : y.code) === "UND_ERR_HEADERS_OVERFLOW") {
          w = "";
          g = "HTTP headers exceeded server limits (typically 16KB)";
          if (O > this.urlLengthLimit) {
            g += `. Your request URL is ${O} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`;
          }
        }
        return {
          success: false,
          error: {
            message: `${(d == null ? undefined : d.name) ?? "FetchError"}: ${d == null ? undefined : d.message}`,
            details: m,
            hint: g,
            code: w
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      });
    }
    return c.then(n, e);
  }
  async processResponse(n) {
    var e = this;
    let r = null;
    let i = null;
    let l = null;
    let c = n.status;
    let d = n.statusText;
    if (n.ok) {
      var h;
      var m;
      if (e.method !== "HEAD") {
        var g;
        const v = await n.text();
        if (v !== "") {
          if (e.headers.get("Accept") === "text/csv") {
            i = v;
          } else if (e.headers.get("Accept") && (g = e.headers.get("Accept")) !== null && g !== undefined && g.includes("application/vnd.pgrst.plan+text")) {
            i = v;
          } else {
            try {
              i = JSON.parse(v);
            } catch {
              r = {
                message: v
              };
              i = null;
              if (e.shouldThrowOnError) {
                throw new Ks({
                  message: v,
                  details: "",
                  hint: "",
                  code: ""
                });
              }
            }
          }
        }
      }
      const y = (h = e.headers.get("Prefer")) === null || h === undefined ? undefined : h.match(/count=(exact|planned|estimated)/);
      const _ = (m = n.headers.get("content-range")) === null || m === undefined ? undefined : m.split("/");
      if (y && _ && _.length > 1) {
        l = parseInt(_[1]);
      }
      if (e.isMaybeSingle && Array.isArray(i)) {
        if (i.length > 1) {
          r = {
            code: "PGRST116",
            details: `Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: "JSON object requested, multiple (or no) rows returned"
          };
          i = null;
          l = null;
          c = 406;
          d = "Not Acceptable";
          if (e.shouldThrowOnError) {
            throw new Ks(ss(ss({}, r), {}, {
              hint: r.hint ?? ""
            }));
          }
        } else if (i.length === 1) {
          i = i[0];
        } else {
          i = null;
        }
      }
    } else {
      const y = await n.text();
      try {
        r = JSON.parse(y);
        if (Array.isArray(r) && n.status === 404) {
          i = [];
          r = null;
          c = 200;
          d = "OK";
        }
      } catch {
        if (n.status === 404 && y === "") {
          c = 204;
          d = "No Content";
        } else {
          r = {
            message: y
          };
        }
      }
      if (r && e.shouldThrowOnError) {
        throw new Ks(r);
      }
    }
    return {
      success: r === null,
      error: r,
      data: i,
      count: l,
      status: c,
      statusText: d
    };
  }
  returns() {
    return this;
  }
  overrideTypes() {
    return this;
  }
};
var Ww = class extends zw {
  throwOnError() {
    return super.throwOnError();
  }
  select(n) {
    let e = false;
    const r = (n ?? "*").split("").map(i => /\s/.test(i) && !e ? "" : (i === "\"" && (e = !e), i)).join("");
    this.url.searchParams.set("select", r);
    this.headers.append("Prefer", "return=representation");
    return this;
  }
  order(n, {
    ascending: e = true,
    nullsFirst: r,
    foreignTable: i,
    referencedTable: l = i
  } = {}) {
    const c = l ? `${l}.order` : "order";
    const d = this.url.searchParams.get(c);
    this.url.searchParams.set(c, `${d ? `${d},` : ""}${n}.${e ? "asc" : "desc"}${r === undefined ? "" : r ? ".nullsfirst" : ".nullslast"}`);
    return this;
  }
  limit(n, {
    foreignTable: e,
    referencedTable: r = e
  } = {}) {
    const i = typeof r === "undefined" ? "limit" : `${r}.limit`;
    this.url.searchParams.set(i, `${n}`);
    return this;
  }
  range(n, e, {
    foreignTable: r,
    referencedTable: i = r
  } = {}) {
    const l = typeof i === "undefined" ? "offset" : `${i}.offset`;
    const c = typeof i === "undefined" ? "limit" : `${i}.limit`;
    this.url.searchParams.set(l, `${n}`);
    this.url.searchParams.set(c, `${e - n + 1}`);
    return this;
  }
  abortSignal(n) {
    this.signal = n;
    return this;
  }
  single() {
    this.headers.set("Accept", "application/vnd.pgrst.object+json");
    return this;
  }
  maybeSingle() {
    this.isMaybeSingle = true;
    return this;
  }
  csv() {
    this.headers.set("Accept", "text/csv");
    return this;
  }
  geojson() {
    this.headers.set("Accept", "application/geo+json");
    return this;
  }
  explain({
    analyze: n = false,
    verbose: e = false,
    settings: r = false,
    buffers: i = false,
    wal: l = false,
    format: c = "text"
  } = {}) {
    const h = [n ? "analyze" : null, e ? "verbose" : null, r ? "settings" : null, i ? "buffers" : null, l ? "wal" : null].filter(Boolean).join("|");
    const m = this.headers.get("Accept") ?? "application/json";
    this.headers.set("Accept", `application/vnd.pgrst.plan+${c}; for="${m}"; options=${h};`);
    if (c === "json") {
      return this;
    } else {
      return this;
    }
  }
  rollback() {
    this.headers.append("Prefer", "tx=rollback");
    return this;
  }
  returns() {
    return this;
  }
  maxAffected(n) {
    this.headers.append("Prefer", "handling=strict");
    this.headers.append("Prefer", `max-affected=${n}`);
    return this;
  }
};
const um = new RegExp("[,()]");
var qs = class extends Ww {
  throwOnError() {
    return super.throwOnError();
  }
  eq(n, e) {
    this.url.searchParams.append(n, `eq.${e}`);
    return this;
  }
  neq(n, e) {
    this.url.searchParams.append(n, `neq.${e}`);
    return this;
  }
  gt(n, e) {
    this.url.searchParams.append(n, `gt.${e}`);
    return this;
  }
  gte(n, e) {
    this.url.searchParams.append(n, `gte.${e}`);
    return this;
  }
  lt(n, e) {
    this.url.searchParams.append(n, `lt.${e}`);
    return this;
  }
  lte(n, e) {
    this.url.searchParams.append(n, `lte.${e}`);
    return this;
  }
  like(n, e) {
    this.url.searchParams.append(n, `like.${e}`);
    return this;
  }
  likeAllOf(n, e) {
    this.url.searchParams.append(n, `like(all).{${e.join(",")}}`);
    return this;
  }
  likeAnyOf(n, e) {
    this.url.searchParams.append(n, `like(any).{${e.join(",")}}`);
    return this;
  }
  ilike(n, e) {
    this.url.searchParams.append(n, `ilike.${e}`);
    return this;
  }
  ilikeAllOf(n, e) {
    this.url.searchParams.append(n, `ilike(all).{${e.join(",")}}`);
    return this;
  }
  ilikeAnyOf(n, e) {
    this.url.searchParams.append(n, `ilike(any).{${e.join(",")}}`);
    return this;
  }
  regexMatch(n, e) {
    this.url.searchParams.append(n, `match.${e}`);
    return this;
  }
  regexIMatch(n, e) {
    this.url.searchParams.append(n, `imatch.${e}`);
    return this;
  }
  is(n, e) {
    this.url.searchParams.append(n, `is.${e}`);
    return this;
  }
  isDistinct(n, e) {
    this.url.searchParams.append(n, `isdistinct.${e}`);
    return this;
  }
  in(n, e) {
    const r = Array.from(new Set(e)).map(i => typeof i == "string" && um.test(i) ? `"${i}"` : `${i}`).join(",");
    this.url.searchParams.append(n, `in.(${r})`);
    return this;
  }
  notIn(n, e) {
    const r = Array.from(new Set(e)).map(i => typeof i == "string" && um.test(i) ? `"${i}"` : `${i}`).join(",");
    this.url.searchParams.append(n, `not.in.(${r})`);
    return this;
  }
  contains(n, e) {
    if (typeof e == "string") {
      this.url.searchParams.append(n, `cs.${e}`);
    } else if (Array.isArray(e)) {
      this.url.searchParams.append(n, `cs.{${e.join(",")}}`);
    } else {
      this.url.searchParams.append(n, `cs.${JSON.stringify(e)}`);
    }
    return this;
  }
  containedBy(n, e) {
    if (typeof e == "string") {
      this.url.searchParams.append(n, `cd.${e}`);
    } else if (Array.isArray(e)) {
      this.url.searchParams.append(n, `cd.{${e.join(",")}}`);
    } else {
      this.url.searchParams.append(n, `cd.${JSON.stringify(e)}`);
    }
    return this;
  }
  rangeGt(n, e) {
    this.url.searchParams.append(n, `sr.${e}`);
    return this;
  }
  rangeGte(n, e) {
    this.url.searchParams.append(n, `nxl.${e}`);
    return this;
  }
  rangeLt(n, e) {
    this.url.searchParams.append(n, `sl.${e}`);
    return this;
  }
  rangeLte(n, e) {
    this.url.searchParams.append(n, `nxr.${e}`);
    return this;
  }
  rangeAdjacent(n, e) {
    this.url.searchParams.append(n, `adj.${e}`);
    return this;
  }
  overlaps(n, e) {
    if (typeof e == "string") {
      this.url.searchParams.append(n, `ov.${e}`);
    } else {
      this.url.searchParams.append(n, `ov.{${e.join(",")}}`);
    }
    return this;
  }
  textSearch(n, e, {
    config: r,
    type: i
  } = {}) {
    let l = "";
    if (i === "plain") {
      l = "pl";
    } else if (i === "phrase") {
      l = "ph";
    } else if (i === "websearch") {
      l = "w";
    }
    const c = r === undefined ? "" : `(${r})`;
    this.url.searchParams.append(n, `${l}fts${c}.${e}`);
    return this;
  }
  match(n) {
    Object.entries(n).filter(([e, r]) => r !== undefined).forEach(([e, r]) => {
      this.url.searchParams.append(e, `eq.${r}`);
    });
    return this;
  }
  not(n, e, r) {
    this.url.searchParams.append(n, `not.${e}.${r}`);
    return this;
  }
  or(n, {
    foreignTable: e,
    referencedTable: r = e
  } = {}) {
    const i = r ? `${r}.or` : "or";
    this.url.searchParams.append(i, `(${n})`);
    return this;
  }
  filter(n, e, r) {
    this.url.searchParams.append(n, `${e}.${r}`);
    return this;
  }
};
var qw = class {
  constructor(n, {
    headers: e = {},
    schema: r,
    fetch: i,
    urlLengthLimit: l = 8000,
    retry: c
  }) {
    this.url = n;
    this.headers = new Headers(e);
    this.schema = r;
    this.fetch = i;
    this.urlLengthLimit = l;
    this.retry = c;
  }
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  select(n, e) {
    const {
      head: r = false,
      count: i
    } = e ?? {};
    const l = r ? "HEAD" : "GET";
    let c = false;
    const d = (n ?? "*").split("").map(g => /\s/.test(g) && !c ? "" : (g === "\"" && (c = !c), g)).join("");
    const {
      url: h,
      headers: m
    } = this.cloneRequestState();
    h.searchParams.set("select", d);
    if (i) {
      m.append("Prefer", `count=${i}`);
    }
    return new qs({
      method: l,
      url: h,
      headers: m,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  insert(n, {
    count: e,
    defaultToNull: r = true
  } = {}) {
    const l = "POST";
    const {
      url: c,
      headers: d
    } = this.cloneRequestState();
    if (e) {
      d.append("Prefer", `count=${e}`);
    }
    if (!r) {
      d.append("Prefer", "missing=default");
    }
    if (Array.isArray(n)) {
      const h = n.reduce((m, g) => m.concat(Object.keys(g)), []);
      if (h.length > 0) {
        const m = [...new Set(h)].map(g => `"${g}"`);
        c.searchParams.set("columns", m.join(","));
      }
    }
    return new qs({
      method: l,
      url: c,
      headers: d,
      schema: this.schema,
      body: n,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  upsert(n, {
    onConflict: e,
    ignoreDuplicates: r = false,
    count: i,
    defaultToNull: l = true
  } = {}) {
    const d = "POST";
    const {
      url: h,
      headers: m
    } = this.cloneRequestState();
    m.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`);
    if (e !== undefined) {
      h.searchParams.set("on_conflict", e);
    }
    if (i) {
      m.append("Prefer", `count=${i}`);
    }
    if (!l) {
      m.append("Prefer", "missing=default");
    }
    if (Array.isArray(n)) {
      const g = n.reduce((w, y) => w.concat(Object.keys(y)), []);
      if (g.length > 0) {
        const w = [...new Set(g)].map(y => `"${y}"`);
        h.searchParams.set("columns", w.join(","));
      }
    }
    return new qs({
      method: d,
      url: h,
      headers: m,
      schema: this.schema,
      body: n,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  update(n, {
    count: e
  } = {}) {
    const i = "PATCH";
    const {
      url: l,
      headers: c
    } = this.cloneRequestState();
    if (e) {
      c.append("Prefer", `count=${e}`);
    }
    return new qs({
      method: i,
      url: l,
      headers: c,
      schema: this.schema,
      body: n,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  delete({
    count: n
  } = {}) {
    const r = "DELETE";
    const {
      url: i,
      headers: l
    } = this.cloneRequestState();
    if (n) {
      l.append("Prefer", `count=${n}`);
    }
    return new qs({
      method: r,
      url: i,
      headers: l,
      schema: this.schema,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
function Hw(n, e) {
  try {
    const d = JSON.parse(n);
    if (d && typeof d == "object" && !Array.isArray(d)) {
      return new Ks({
        message: String(d.message ?? n),
        details: d.details ?? "",
        hint: d.hint ?? "",
        code: d.code ?? ""
      });
    }
  } catch {}
  return new Ks({
    message: n || e,
    details: "",
    hint: "",
    code: ""
  });
}
function dm(n, e, r) {
  const l = n;
  return {
    success: false,
    error: new Ks({
      message: `${(l == null ? undefined : l.name) ?? "FetchError"}: ${l == null ? undefined : l.message}`,
      details: "",
      hint: "",
      code: ""
    }),
    data: null,
    count: null,
    status: e,
    statusText: r
  };
}
var Vw = class Dp {
  constructor(e, {
    headers: r = {},
    schema: i,
    fetch: l,
    timeout: c,
    urlLengthLimit: d = 8000,
    retry: h
  } = {}) {
    this.url = e;
    this.headers = new Headers(r);
    this.schemaName = i;
    this.urlLengthLimit = d;
    const m = l ?? globalThis.fetch;
    if (c !== undefined && c > 0) {
      this.fetch = (g, w) => {
        const y = new AbortController();
        const _ = setTimeout(() => y.abort(), c);
        const v = w == null ? undefined : w.signal;
        if (v) {
          if (v.aborted) {
            clearTimeout(_);
            return m(g, w);
          }
          const j = () => {
            clearTimeout(_);
            y.abort();
          };
          v.addEventListener("abort", j, {
            once: true
          });
          return m(g, ss(ss({}, w), {}, {
            signal: y.signal
          })).finally(() => {
            clearTimeout(_);
            v.removeEventListener("abort", j);
          });
        }
        return m(g, ss(ss({}, w), {}, {
          signal: y.signal
        })).finally(() => clearTimeout(_));
      };
    } else {
      this.fetch = m;
    }
    this.retry = h;
  }
  from(e) {
    if (!e || typeof e != "string" || e.trim() === "") {
      throw new Error("Invalid relation name: relation must be a non-empty string.");
    }
    return new qw(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  schema(e) {
    return new Dp(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  async getOpenApiSpec() {
    var e = this;
    const i = new Headers(e.headers);
    i.set("Accept", "application/openapi+json");
    if (e.schemaName) {
      i.set("Accept-Profile", e.schemaName);
    }
    const l = {};
    i.forEach((g, w) => {
      l[w] = g;
    });
    const c = e.fetch ?? globalThis.fetch;
    let d;
    try {
      d = await Lp(c, `${e.url}/`, {
        method: "GET",
        headers: l
      }, e.retry ?? true);
    } catch (g) {
      return dm(g, 0, "");
    }
    let m;
    try {
      m = await d.text();
    } catch (g) {
      return dm(g, d.status, d.statusText);
    }
    if (d.ok) {
      try {
        return {
          success: true,
          error: null,
          data: JSON.parse(m),
          count: null,
          status: d.status,
          statusText: d.statusText
        };
      } catch {}
    }
    return {
      success: false,
      error: Hw(m, d.statusText),
      data: null,
      count: null,
      status: d.status,
      statusText: d.statusText
    };
  }
  rpc(e, r = {}, {
    head: i = false,
    get: l = false,
    count: c
  } = {}) {
    let h;
    const m = new URL(`${this.url}/rpc/${e}`);
    let g;
    const w = v => v !== null && typeof v == "object" && (!Array.isArray(v) || v.some(w));
    const y = i && Object.values(r).some(w);
    if (y) {
      h = "POST";
      g = r;
    } else if (i || l) {
      h = i ? "HEAD" : "GET";
      Object.entries(r).filter(([v, j]) => j !== undefined).map(([v, j]) => [v, Array.isArray(j) ? `{${j.join(",")}}` : `${j}`]).forEach(([v, j]) => {
        m.searchParams.append(v, j);
      });
    } else {
      h = "POST";
      g = r;
    }
    const _ = new Headers(this.headers);
    if (y) {
      _.set("Prefer", c ? `count=${c},return=minimal` : "return=minimal");
    } else if (c) {
      _.set("Prefer", `count=${c}`);
    }
    return new qs({
      method: h,
      url: m,
      headers: _,
      schema: this.schemaName,
      body: g,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
class Kw {
  constructor() {}
  static detectEnvironment() {
    var e;
    if (typeof WebSocket !== "undefined") {
      return {
        type: "native",
        wsConstructor: WebSocket
      };
    }
    const r = globalThis;
    if (typeof globalThis !== "undefined" && typeof r.WebSocket !== "undefined") {
      return {
        type: "native",
        wsConstructor: r.WebSocket
      };
    }
    const i = typeof global !== "undefined" ? global : undefined;
    if (i && typeof i.WebSocket !== "undefined") {
      return {
        type: "native",
        wsConstructor: i.WebSocket
      };
    }
    if (typeof globalThis !== "undefined" && typeof r.WebSocketPair !== "undefined" && typeof globalThis.WebSocket === "undefined") {
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    }
    if (typeof globalThis !== "undefined" && r.EdgeRuntime || typeof navigator !== "undefined" && (e = navigator.userAgent) !== null && e !== undefined && e.includes("Vercel-Edge")) {
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    }
    const l = globalThis.process;
    if (l) {
      const c = l.versions;
      if (c && c.node) {
        return {
          type: "unsupported",
          error: "Node.js detected but native WebSocket not found.",
          workaround: "Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option."
        };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.wsConstructor) {
      return e.wsConstructor;
    }
    let r = e.error || "WebSocket not supported in this environment.";
    if (e.workaround) {
      r += `

Suggested solution: ${e.workaround}`;
    }
    throw new Error(r);
  }
  static isWebSocketSupported() {
    try {
      return this.detectEnvironment().type === "native";
    } catch {
      return false;
    }
  }
}
const Gw = "2.118.0";
const Jw = `realtime-js/${Gw}`;
const Qw = "1.0.0";
const Mp = "2.0.0";
const Yw = Mp;
const Xw = 10000;
const Zw = 15000;
const ex = 10000;
const tx = 100;
const Ir = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
};
const Up = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  leave: "phx_leave",
  access_token: "access_token"
};
const wu = {
  connecting: "connecting",
  closing: "closing",
  closed: "closed"
};
class nx {
  constructor(e) {
    this.HEADER_LENGTH = 1;
    this.USER_BROADCAST_PUSH_META_LENGTH = 6;
    this.KINDS = {
      userBroadcastPush: 3,
      userBroadcast: 4
    };
    this.BINARY_ENCODING = 0;
    this.JSON_ENCODING = 1;
    this.BROADCAST_EVENT = "broadcast";
    this.allowedMetadataKeys = [];
    this.allowedMetadataKeys = e ?? [];
  }
  encode(e, r) {
    if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == "string") {
      return r(this._binaryEncodeUserBroadcastPush(e));
    }
    let i = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return r(JSON.stringify(i));
  }
  _binaryEncodeUserBroadcastPush(e) {
    if (this._isArrayBuffer(e.payload?.payload)) {
      return this._encodeBinaryUserBroadcastPush(e);
    } else {
      return this._encodeJsonUserBroadcastPush(e);
    }
  }
  _encodeBinaryUserBroadcastPush(e) {
    const l = e.payload?.payload ?? new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, l);
  }
  _encodeJsonUserBroadcastPush(e) {
    const l = e.payload?.payload ?? {};
    const d = new TextEncoder().encode(JSON.stringify(l)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, d);
  }
  _encodeUserBroadcastPush(e, r, i) {
    const d = new TextEncoder();
    const h = d.encode(e.topic);
    const m = d.encode(e.ref ?? "");
    const g = d.encode(e.join_ref ?? "");
    const w = d.encode(e.payload.event);
    const y = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {};
    const _ = d.encode(Object.keys(y).length === 0 ? "" : JSON.stringify(y));
    if (g.length > 255) {
      throw new Error(`joinRef length ${g.length} exceeds maximum of 255`);
    }
    if (m.length > 255) {
      throw new Error(`ref length ${m.length} exceeds maximum of 255`);
    }
    if (h.length > 255) {
      throw new Error(`topic length ${h.length} exceeds maximum of 255`);
    }
    if (w.length > 255) {
      throw new Error(`userEvent length ${w.length} exceeds maximum of 255`);
    }
    if (_.length > 255) {
      throw new Error(`metadata length ${_.length} exceeds maximum of 255`);
    }
    const v = this.USER_BROADCAST_PUSH_META_LENGTH + g.length + m.length + h.length + w.length + _.length;
    const j = new ArrayBuffer(this.HEADER_LENGTH + v);
    const b = new DataView(j);
    const C = new Uint8Array(j);
    let O = 0;
    b.setUint8(O++, this.KINDS.userBroadcastPush);
    b.setUint8(O++, g.length);
    b.setUint8(O++, m.length);
    b.setUint8(O++, h.length);
    b.setUint8(O++, w.length);
    b.setUint8(O++, _.length);
    b.setUint8(O++, r);
    C.set(g, O);
    O += g.length;
    C.set(m, O);
    O += m.length;
    C.set(h, O);
    O += h.length;
    C.set(w, O);
    O += w.length;
    C.set(_, O);
    O += _.length;
    var L = new Uint8Array(j.byteLength + i.byteLength);
    L.set(new Uint8Array(j), 0);
    L.set(new Uint8Array(i), j.byteLength);
    return L.buffer;
  }
  decode(e, r) {
    if (this._isArrayBuffer(e)) {
      let i = this._binaryDecode(e);
      return r(i);
    }
    if (typeof e == "string") {
      const i = JSON.parse(e);
      const [l, c, d, h, m] = i;
      return r({
        join_ref: l,
        ref: c,
        topic: d,
        event: h,
        payload: m
      });
    }
    return r({});
  }
  _binaryDecode(e) {
    const r = new DataView(e);
    const i = r.getUint8(0);
    const l = new TextDecoder();
    switch (i) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, r, l);
    }
  }
  _decodeUserBroadcast(e, r, i) {
    const l = r.getUint8(1);
    const c = r.getUint8(2);
    const d = r.getUint8(3);
    const h = r.getUint8(4);
    let m = this.HEADER_LENGTH + 4;
    const g = i.decode(e.slice(m, m + l));
    m = m + l;
    const w = i.decode(e.slice(m, m + c));
    m = m + c;
    const y = i.decode(e.slice(m, m + d));
    m = m + d;
    const _ = e.slice(m, e.byteLength);
    const v = h === this.JSON_ENCODING ? JSON.parse(i.decode(_)) : _;
    const j = {
      type: this.BROADCAST_EVENT,
      event: w,
      payload: v
    };
    if (d > 0) {
      j.meta = JSON.parse(y);
    }
    return {
      join_ref: null,
      ref: null,
      topic: g,
      event: this.BROADCAST_EVENT,
      payload: j
    };
  }
  _isArrayBuffer(e) {
    return e instanceof ArrayBuffer || (e == null ? undefined : e.constructor)?.name === "ArrayBuffer";
  }
  _pick(e, r) {
    if (!e || typeof e != "object") {
      return {};
    } else {
      return Object.fromEntries(Object.entries(e).filter(([i]) => r.includes(i)));
    }
  }
}
var We;
(function (n) {
  n.abstime = "abstime";
  n.bool = "bool";
  n.date = "date";
  n.daterange = "daterange";
  n.float4 = "float4";
  n.float8 = "float8";
  n.int2 = "int2";
  n.int4 = "int4";
  n.int4range = "int4range";
  n.int8 = "int8";
  n.int8range = "int8range";
  n.json = "json";
  n.jsonb = "jsonb";
  n.money = "money";
  n.numeric = "numeric";
  n.oid = "oid";
  n.reltime = "reltime";
  n.text = "text";
  n.time = "time";
  n.timestamp = "timestamp";
  n.timestamptz = "timestamptz";
  n.timetz = "timetz";
  n.tsrange = "tsrange";
  n.tstzrange = "tstzrange";
})(We ||= {});
const hm = (n, e, r = {}) => {
  const l = r.skipTypes ?? [];
  if (e) {
    return Object.keys(e).reduce((c, d) => {
      c[d] = rx(d, n, e, l);
      return c;
    }, {});
  } else {
    return {};
  }
};
const rx = (n, e, r, i) => {
  const l = e.find(h => h.name === n);
  const c = l == null ? undefined : l.type;
  const d = r[n];
  if (c && !i.includes(c)) {
    return Fp(c, d);
  } else {
    return xu(d);
  }
};
const Fp = (n, e) => {
  if (n.charAt(0) === "_") {
    const r = n.slice(1, n.length);
    return ox(e, r);
  }
  switch (n) {
    case We.bool:
      return sx(e);
    case We.float4:
    case We.float8:
    case We.int2:
    case We.int4:
    case We.int8:
    case We.numeric:
    case We.oid:
      return ax(e);
    case We.json:
    case We.jsonb:
      return ix(e);
    case We.timestamp:
      return lx(e);
    case We.abstime:
    case We.date:
    case We.daterange:
    case We.int4range:
    case We.int8range:
    case We.money:
    case We.reltime:
    case We.text:
    case We.time:
    case We.timestamptz:
    case We.timetz:
    case We.tsrange:
    case We.tstzrange:
      return xu(e);
    default:
      return xu(e);
  }
};
const xu = n => n;
const sx = n => {
  switch (n) {
    case "t":
      return true;
    case "f":
      return false;
    default:
      return n;
  }
};
const ax = n => {
  if (typeof n == "string") {
    const e = parseFloat(n);
    if (!Number.isNaN(e)) {
      return e;
    }
  }
  return n;
};
const ix = n => {
  if (typeof n == "string") {
    try {
      return JSON.parse(n);
    } catch {
      return n;
    }
  }
  return n;
};
const ox = (n, e) => {
  if (typeof n != "string") {
    return n;
  }
  const r = n.length - 1;
  const i = n[r];
  if (n[0] === "{" && i === "}") {
    let c;
    const d = n.slice(1, r);
    try {
      c = JSON.parse("[" + d + "]");
    } catch {
      c = d ? d.split(",") : [];
    }
    return c.map(h => Fp(e, h));
  }
  return n;
};
const lx = n => typeof n == "string" ? n.replace(" ", "T") : n;
const Bp = n => {
  const e = new URL(n);
  e.protocol = e.protocol.replace(/^ws/i, "http");
  e.pathname = e.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, "");
  if (e.pathname === "" || e.pathname === "/") {
    e.pathname = "/api/broadcast";
  } else {
    e.pathname = e.pathname + "/api/broadcast";
  }
  return e.href;
};
var Gs = n => typeof n == "function" ? n : function () {
  return n;
};
var cx = typeof self !== "undefined" ? self : null;
var Hs = typeof window !== "undefined" ? window : null;
var Rn = cx || Hs || globalThis;
var ux = "2.0.0";
var dx = 10000;
var hx = 1000;
var fx = 100;
var In = {
  connecting: 0,
  open: 1,
  closing: 2,
  closed: 3
};
var Lt = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
};
var Gn = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  reply: "phx_reply",
  leave: "phx_leave"
};
var _u = {
  longpoll: "longpoll",
  websocket: "websocket"
};
var mx = {
  complete: 4
};
var ju = "base64url.bearer.phx.";
var jo = class {
  constructor(n, e, r, i) {
    this.channel = n;
    this.event = e;
    this.payload = r || function () {
      return {};
    };
    this.receivedResp = null;
    this.timeout = i;
    this.timeoutTimer = null;
    this.recHooks = [];
    this.sent = false;
    this.ref = undefined;
  }
  resend(n) {
    this.timeout = n;
    this.reset();
    this.send();
  }
  send() {
    if (!this.hasReceived("timeout")) {
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload(),
        ref: this.ref,
        join_ref: this.channel.joinRef()
      });
    }
  }
  receive(n, e) {
    if (this.hasReceived(n)) {
      e(this.receivedResp.response);
    }
    this.recHooks.push({
      status: n,
      callback: e
    });
    return this;
  }
  reset() {
    this.cancelRefEvent();
    this.ref = null;
    this.refEvent = null;
    this.receivedResp = null;
    this.sent = false;
  }
  destroy() {
    this.cancelRefEvent();
    this.cancelTimeout();
  }
  matchReceive({
    status: n,
    response: e,
    _ref: r
  }) {
    this.recHooks.filter(i => i.status === n).forEach(i => i.callback(e));
  }
  cancelRefEvent() {
    if (this.refEvent) {
      this.channel.off(this.refEvent);
    }
  }
  cancelTimeout() {
    clearTimeout(this.timeoutTimer);
    this.timeoutTimer = null;
  }
  startTimeout() {
    if (this.timeoutTimer) {
      this.cancelTimeout();
    }
    this.ref = this.channel.socket.makeRef();
    this.refEvent = this.channel.replyEventName(this.ref);
    this.channel.on(this.refEvent, n => {
      this.cancelRefEvent();
      this.cancelTimeout();
      this.receivedResp = n;
      this.matchReceive(n);
    });
    this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  hasReceived(n) {
    return this.receivedResp && this.receivedResp.status === n;
  }
  trigger(n, e) {
    this.channel.trigger(this.refEvent, {
      status: n,
      response: e
    });
  }
};
var zp = class {
  constructor(n, e) {
    this.callback = n;
    this.timerCalc = e;
    this.timer = undefined;
    this.tries = 0;
  }
  reset() {
    this.tries = 0;
    clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.tries = this.tries + 1;
      this.callback();
    }, this.timerCalc(this.tries + 1));
  }
};
var px = class {
  constructor(n, e, r) {
    this.state = Lt.closed;
    this.topic = n;
    this.params = Gs(e || {});
    this.socket = r;
    this.bindings = [];
    this.bindingRef = 0;
    this.timeout = this.socket.timeout;
    this.joinedOnce = false;
    this.joinPush = new jo(this, Gn.join, this.params, this.timeout);
    this.pushBuffer = [];
    this.stateChangeRefs = [];
    this.rejoinTimer = new zp(() => {
      if (this.socket.isConnected()) {
        this.rejoin();
      }
    }, this.socket.rejoinAfterMs);
    this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
    this.stateChangeRefs.push(this.socket.onOpen(() => {
      this.rejoinTimer.reset();
      if (this.isErrored()) {
        this.rejoin();
      }
    }));
    this.joinPush.receive("ok", () => {
      this.state = Lt.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach(i => i.send());
      this.pushBuffer = [];
    });
    this.joinPush.receive("error", i => {
      this.state = Lt.errored;
      if (this.socket.hasLogger()) {
        this.socket.log("channel", `error ${this.topic}`, i);
      }
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.onClose(() => {
      this.rejoinTimer.reset();
      if (this.socket.hasLogger()) {
        this.socket.log("channel", `close ${this.topic}`);
      }
      this.state = Lt.closed;
      this.socket.remove(this);
    });
    this.onError(i => {
      if (this.socket.hasLogger()) {
        this.socket.log("channel", `error ${this.topic}`, i);
      }
      if (this.isJoining()) {
        this.joinPush.reset();
      }
      this.state = Lt.errored;
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.joinPush.receive("timeout", () => {
      if (this.socket.hasLogger()) {
        this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
      }
      new jo(this, Gn.leave, Gs({}), this.timeout).send();
      this.state = Lt.errored;
      this.joinPush.reset();
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.on(Gn.reply, (i, l) => {
      this.trigger(this.replyEventName(l), i);
    });
  }
  join(n = this.timeout) {
    if (this.joinedOnce) {
      throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
    }
    this.timeout = n;
    this.joinedOnce = true;
    this.rejoin();
    return this.joinPush;
  }
  teardown() {
    this.pushBuffer.forEach(n => n.destroy());
    this.pushBuffer = [];
    this.rejoinTimer.reset();
    this.joinPush.destroy();
    this.state = Lt.closed;
    this.bindings = [];
  }
  onClose(n) {
    this.on(Gn.close, n);
  }
  onError(n) {
    return this.on(Gn.error, e => n(e));
  }
  on(n, e) {
    let r = this.bindingRef++;
    this.bindings.push({
      event: n,
      ref: r,
      callback: e
    });
    return r;
  }
  off(n, e) {
    this.bindings = this.bindings.filter(r => r.event !== n || typeof e !== "undefined" && e !== r.ref);
  }
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  push(n, e, r = this.timeout) {
    e = e || {};
    if (!this.joinedOnce) {
      throw new Error(`tried to push '${n}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    }
    let i = new jo(this, n, function () {
      return e;
    }, r);
    if (this.canPush()) {
      i.send();
    } else {
      i.startTimeout();
      this.pushBuffer.push(i);
    }
    return i;
  }
  leave(n = this.timeout) {
    this.rejoinTimer.reset();
    this.joinPush.cancelTimeout();
    this.state = Lt.leaving;
    let e = () => {
      if (this.socket.hasLogger()) {
        this.socket.log("channel", `leave ${this.topic}`);
      }
      this.trigger(Gn.close, "leave");
    };
    let r = new jo(this, Gn.leave, Gs({}), n);
    r.receive("ok", () => e()).receive("timeout", () => e());
    r.send();
    if (!this.canPush()) {
      r.trigger("ok", {});
    }
    return r;
  }
  onMessage(n, e, r) {
    return e;
  }
  filterBindings(n, e, r) {
    return true;
  }
  isMember(n, e, r, i) {
    if (this.topic !== n) {
      return false;
    } else if (i && i !== this.joinRef()) {
      if (this.socket.hasLogger()) {
        this.socket.log("channel", "dropping outdated message", {
          topic: n,
          event: e,
          payload: r,
          joinRef: i
        });
      }
      return false;
    } else {
      return true;
    }
  }
  joinRef() {
    return this.joinPush.ref;
  }
  rejoin(n = this.timeout) {
    if (!this.isLeaving()) {
      this.socket.leaveOpenTopic(this.topic);
      this.state = Lt.joining;
      this.joinPush.resend(n);
    }
  }
  trigger(n, e, r, i) {
    let l = this.onMessage(n, e, r, i);
    if (e && !l) {
      throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
    }
    let c = this.bindings.filter(d => d.event === n && this.filterBindings(d, e, r));
    for (let d = 0; d < c.length; d++) {
      c[d].callback(l, r, i || this.joinRef());
    }
  }
  replyEventName(n) {
    return `chan_reply_${n}`;
  }
  isClosed() {
    return this.state === Lt.closed;
  }
  isErrored() {
    return this.state === Lt.errored;
  }
  isJoined() {
    return this.state === Lt.joined;
  }
  isJoining() {
    return this.state === Lt.joining;
  }
  isLeaving() {
    return this.state === Lt.leaving;
  }
};
var Bo = class {
  static request(n, e, r, i, l, c, d) {
    if (Rn.XDomainRequest) {
      let h = new Rn.XDomainRequest();
      return this.xdomainRequest(h, n, e, i, l, c, d);
    } else if (Rn.XMLHttpRequest) {
      let h = new Rn.XMLHttpRequest();
      return this.xhrRequest(h, n, e, r, i, l, c, d);
    } else {
      if (Rn.fetch && Rn.AbortController) {
        return this.fetchRequest(n, e, r, i, l, c, d);
      }
      throw new Error("No suitable XMLHttpRequest implementation found");
    }
  }
  static fetchRequest(n, e, r, i, l, c, d) {
    let h = {
      method: n,
      headers: r,
      body: i
    };
    let m = null;
    if (l) {
      m = new AbortController();
      setTimeout(() => m.abort(), l);
      h.signal = m.signal;
    }
    Rn.fetch(e, h).then(g => g.text()).then(g => this.parseJSON(g)).then(g => d && d(g)).catch(g => {
      if (g.name === "AbortError" && c) {
        c();
      } else if (d) {
        d(null);
      }
    });
    return m;
  }
  static xdomainRequest(n, e, r, i, l, c, d) {
    n.timeout = l;
    n.open(e, r);
    n.onload = () => {
      let h = this.parseJSON(n.responseText);
      if (d) {
        d(h);
      }
    };
    if (c) {
      n.ontimeout = c;
    }
    n.onprogress = () => {};
    n.send(i);
    return n;
  }
  static xhrRequest(n, e, r, i, l, c, d, h) {
    n.open(e, r, true);
    n.timeout = c;
    for (let [m, g] of Object.entries(i)) {
      n.setRequestHeader(m, g);
    }
    n.onerror = () => h && h(null);
    n.onreadystatechange = () => {
      if (n.readyState === mx.complete && h) {
        let m = this.parseJSON(n.responseText);
        h(m);
      }
    };
    if (d) {
      n.ontimeout = d;
    }
    n.send(l);
    return n;
  }
  static parseJSON(n) {
    if (!n || n === "") {
      return null;
    }
    try {
      return JSON.parse(n);
    } catch {
      if (console) {
        console.log("failed to parse JSON response", n);
      }
      return null;
    }
  }
  static serialize(n, e) {
    let r = [];
    for (var i in n) {
      if (!Object.prototype.hasOwnProperty.call(n, i)) {
        continue;
      }
      let l = e ? `${e}[${i}]` : i;
      let c = n[i];
      if (typeof c == "object") {
        r.push(this.serialize(c, l));
      } else {
        r.push(encodeURIComponent(l) + "=" + encodeURIComponent(c));
      }
    }
    return r.join("&");
  }
  static appendParams(n, e) {
    if (Object.keys(e).length === 0) {
      return n;
    }
    let r = n.match(/\?/) ? "&" : "?";
    return `${n}${r}${this.serialize(e)}`;
  }
};
var gx = n => {
  let e = "";
  let r = new Uint8Array(n);
  let i = r.byteLength;
  for (let l = 0; l < i; l++) {
    e += String.fromCharCode(r[l]);
  }
  return btoa(e);
};
var Fs = class {
  constructor(n, e) {
    if (e && e.length === 2 && e[1].startsWith(ju)) {
      this.authToken = atob(e[1].slice(ju.length));
    }
    this.endPoint = null;
    this.token = null;
    this.skipHeartbeat = true;
    this.reqs = new Set();
    this.awaitingBatchAck = false;
    this.currentBatch = null;
    this.currentBatchTimer = null;
    this.batchBuffer = [];
    this.onopen = function () {};
    this.onerror = function () {};
    this.onmessage = function () {};
    this.onclose = function () {};
    this.pollEndpoint = this.normalizeEndpoint(n);
    this.readyState = In.connecting;
    setTimeout(() => this.poll(), 0);
  }
  normalizeEndpoint(n) {
    return n.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + _u.websocket), "$1/" + _u.longpoll);
  }
  endpointURL() {
    return Bo.appendParams(this.pollEndpoint, {
      token: this.token
    });
  }
  closeAndRetry(n, e, r) {
    this.close(n, e, r);
    this.readyState = In.connecting;
  }
  ontimeout() {
    this.onerror("timeout");
    this.closeAndRetry(1005, "timeout", false);
  }
  isActive() {
    return this.readyState === In.open || this.readyState === In.connecting;
  }
  poll() {
    const n = {
      Accept: "application/json"
    };
    if (this.authToken) {
      n["X-Phoenix-AuthToken"] = this.authToken;
    }
    this.ajax("GET", n, null, () => this.ontimeout(), e => {
      if (e) {
        var {
          status: r,
          token: i,
          messages: l
        } = e;
        if (r === 410 && this.token !== null) {
          this.onerror(410);
          this.closeAndRetry(3410, "session_gone", false);
          return;
        }
        this.token = i;
      } else {
        r = 0;
      }
      switch (r) {
        case 200:
          l.forEach(c => {
            setTimeout(() => this.onmessage({
              data: c
            }), 0);
          });
          this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = In.open;
          this.onopen({});
          this.poll();
          break;
        case 403:
          this.onerror(403);
          this.close(1008, "forbidden", false);
          break;
        case 0:
        case 500:
          this.onerror(500);
          this.closeAndRetry(1011, "internal server error", 500);
          break;
        default:
          throw new Error(`unhandled poll status ${r}`);
      }
    });
  }
  send(n) {
    if (typeof n != "string") {
      n = gx(n);
    }
    if (this.currentBatch) {
      this.currentBatch.push(n);
    } else if (this.awaitingBatchAck) {
      this.batchBuffer.push(n);
    } else {
      this.currentBatch = [n];
      this.currentBatchTimer = setTimeout(() => {
        this.batchSend(this.currentBatch);
        this.currentBatch = null;
      }, 0);
    }
  }
  batchSend(n, e = 0) {
    this.awaitingBatchAck = true;
    const r = e + fx;
    const i = n.slice(e, r);
    this.ajax("POST", {
      "Content-Type": "application/x-ndjson"
    }, i.join(`
`), () => this.onerror("timeout"), l => {
      if (!l || l.status !== 200) {
        this.awaitingBatchAck = false;
        this.onerror(l && l.status);
        this.closeAndRetry(1011, "internal server error", false);
      } else if (r < n.length) {
        this.batchSend(n, r);
      } else if (this.batchBuffer.length > 0) {
        this.batchSend(this.batchBuffer);
        this.batchBuffer = [];
      } else {
        this.awaitingBatchAck = false;
      }
    });
  }
  close(n, e, r) {
    for (let l of this.reqs) {
      l.abort();
    }
    this.readyState = In.closed;
    let i = Object.assign({
      code: 1000,
      reason: undefined,
      wasClean: true
    }, {
      code: n,
      reason: e,
      wasClean: r
    });
    this.batchBuffer = [];
    clearTimeout(this.currentBatchTimer);
    this.currentBatchTimer = null;
    if (typeof CloseEvent !== "undefined") {
      this.onclose(new CloseEvent("close", i));
    } else {
      this.onclose(i);
    }
  }
  ajax(n, e, r, i, l) {
    let c;
    let d = () => {
      this.reqs.delete(c);
      i();
    };
    c = Bo.request(n, this.endpointURL(), e, r, this.timeout, d, h => {
      this.reqs.delete(c);
      if (this.isActive()) {
        l(h);
      }
    });
    this.reqs.add(c);
  }
};
var vx = class Wa {
  constructor(e, r = {}) {
    let i = r.events || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.state = Object.create(null);
    this.pendingDiffs = [];
    this.channel = e;
    this.joinRef = null;
    this.caller = {
      onJoin: function () {},
      onLeave: function () {},
      onSync: function () {}
    };
    this.channel.on(i.state, l => {
      let {
        onJoin: c,
        onLeave: d,
        onSync: h
      } = this.caller;
      this.joinRef = this.channel.joinRef();
      this.state = Wa.syncState(this.state, l, c, d);
      this.pendingDiffs.forEach(m => {
        this.state = Wa.syncDiff(this.state, m, c, d);
      });
      this.pendingDiffs = [];
      h();
    });
    this.channel.on(i.diff, l => {
      let {
        onJoin: c,
        onLeave: d,
        onSync: h
      } = this.caller;
      if (this.inPendingSyncState()) {
        this.pendingDiffs.push(l);
      } else {
        this.state = Wa.syncDiff(this.state, l, c, d);
        h();
      }
    });
  }
  onJoin(e) {
    this.caller.onJoin = e;
  }
  onLeave(e) {
    this.caller.onLeave = e;
  }
  onSync(e) {
    this.caller.onSync = e;
  }
  list(e) {
    return Wa.list(this.state, e);
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel.joinRef();
  }
  static syncState(e, r, i, l) {
    let c = this.toNullProtoObj(this.clone(e));
    r = this.toNullProtoObj(r);
    let d = Object.create(null);
    let h = Object.create(null);
    this.map(c, (m, g) => {
      if (!r[m]) {
        h[m] = g;
      }
    });
    this.map(r, (m, g) => {
      let w = c[m];
      if (w) {
        let y = g.metas.map(b => b.phx_ref);
        let _ = w.metas.map(b => b.phx_ref);
        let v = g.metas.filter(b => _.indexOf(b.phx_ref) < 0);
        let j = w.metas.filter(b => y.indexOf(b.phx_ref) < 0);
        if (v.length > 0) {
          d[m] = g;
          d[m].metas = v;
        }
        if (j.length > 0) {
          h[m] = this.clone(w);
          h[m].metas = j;
        }
      } else {
        d[m] = g;
      }
    });
    return this.syncDiff(c, {
      joins: d,
      leaves: h
    }, i, l);
  }
  static syncDiff(e, r, i, l) {
    e = this.toNullProtoObj(e);
    let {
      joins: c,
      leaves: d
    } = this.clone(r);
    i ||= function () {};
    l ||= function () {};
    this.map(c, (h, m) => {
      let g = e[h];
      e[h] = this.clone(m);
      if (g) {
        let w = e[h].metas.map(_ => _.phx_ref);
        let y = g.metas.filter(_ => w.indexOf(_.phx_ref) < 0);
        e[h].metas.unshift(...y);
      }
      i(h, g, m);
    });
    this.map(d, (h, m) => {
      let g = e[h];
      if (!g) {
        return;
      }
      let w = m.metas.map(y => y.phx_ref);
      g.metas = g.metas.filter(y => w.indexOf(y.phx_ref) < 0);
      l(h, g, m);
      if (g.metas.length === 0) {
        delete e[h];
      }
    });
    return e;
  }
  static list(e, r) {
    r ||= function (i, l) {
      return l;
    };
    return this.map(e, (i, l) => r(i, l));
  }
  static map(e, r) {
    return Object.getOwnPropertyNames(e).map(i => r(i, e[i]));
  }
  static toNullProtoObj(e) {
    if (Object.getPrototypeOf(e) === null) {
      return e;
    }
    let r = Object.create(null);
    Object.getOwnPropertyNames(e).forEach(i => {
      r[i] = e[i];
    });
    return r;
  }
  static clone(e) {
    return JSON.parse(JSON.stringify(e));
  }
};
var ko = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: {
    push: 0,
    reply: 1,
    broadcast: 2
  },
  encode(n, e) {
    if (n.payload.constructor === ArrayBuffer) {
      return e(this.binaryEncode(n));
    }
    {
      let r = [n.join_ref, n.ref, n.topic, n.event, n.payload];
      return e(JSON.stringify(r));
    }
  },
  decode(n, e) {
    if (n.constructor === ArrayBuffer) {
      return e(this.binaryDecode(n));
    }
    {
      let [r, i, l, c, d] = JSON.parse(n);
      return e({
        join_ref: r,
        ref: i,
        topic: l,
        event: c,
        payload: d
      });
    }
  },
  binaryEncode(n) {
    let {
      join_ref: e,
      ref: r,
      event: i,
      topic: l,
      payload: c
    } = n;
    let d = new TextEncoder();
    let h = d.encode(e);
    let m = d.encode(r);
    let g = d.encode(l);
    let w = d.encode(i);
    this.assertFieldSize(h.byteLength, "join_ref");
    this.assertFieldSize(m.byteLength, "ref");
    this.assertFieldSize(g.byteLength, "topic");
    this.assertFieldSize(w.byteLength, "event");
    let y = this.META_LENGTH + h.byteLength + m.byteLength + g.byteLength + w.byteLength;
    let _ = new ArrayBuffer(this.HEADER_LENGTH + y);
    let v = new Uint8Array(_);
    let j = new DataView(_);
    let b = 0;
    j.setUint8(b++, this.KINDS.push);
    j.setUint8(b++, h.byteLength);
    j.setUint8(b++, m.byteLength);
    j.setUint8(b++, g.byteLength);
    j.setUint8(b++, w.byteLength);
    v.set(h, b);
    b += h.byteLength;
    v.set(m, b);
    b += m.byteLength;
    v.set(g, b);
    b += g.byteLength;
    v.set(w, b);
    b += w.byteLength;
    var C = new Uint8Array(_.byteLength + c.byteLength);
    C.set(v, 0);
    C.set(new Uint8Array(c), _.byteLength);
    return C.buffer;
  },
  assertFieldSize(n, e) {
    if (n > 255) {
      throw new Error(`unable to convert ${e} to binary: must be less than or equal to 255 bytes, but is ${n} bytes`);
    }
  },
  binaryDecode(n) {
    let e = new DataView(n);
    let r = e.getUint8(0);
    let i = new TextDecoder();
    switch (r) {
      case this.KINDS.push:
        return this.decodePush(n, e, i);
      case this.KINDS.reply:
        return this.decodeReply(n, e, i);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(n, e, i);
    }
  },
  decodePush(n, e, r) {
    let i = e.getUint8(1);
    let l = e.getUint8(2);
    let c = e.getUint8(3);
    let d = this.HEADER_LENGTH + this.META_LENGTH - 1;
    let h = r.decode(n.slice(d, d + i));
    d = d + i;
    let m = r.decode(n.slice(d, d + l));
    d = d + l;
    let g = r.decode(n.slice(d, d + c));
    d = d + c;
    let w = n.slice(d, n.byteLength);
    return {
      join_ref: h,
      ref: null,
      topic: m,
      event: g,
      payload: w
    };
  },
  decodeReply(n, e, r) {
    let i = e.getUint8(1);
    let l = e.getUint8(2);
    let c = e.getUint8(3);
    let d = e.getUint8(4);
    let h = this.HEADER_LENGTH + this.META_LENGTH;
    let m = r.decode(n.slice(h, h + i));
    h = h + i;
    let g = r.decode(n.slice(h, h + l));
    h = h + l;
    let w = r.decode(n.slice(h, h + c));
    h = h + c;
    let y = r.decode(n.slice(h, h + d));
    h = h + d;
    let _ = n.slice(h, n.byteLength);
    let v = {
      status: y,
      response: _
    };
    return {
      join_ref: m,
      ref: g,
      topic: w,
      event: Gn.reply,
      payload: v
    };
  },
  decodeBroadcast(n, e, r) {
    let i = e.getUint8(1);
    let l = e.getUint8(2);
    let c = this.HEADER_LENGTH + 2;
    let d = r.decode(n.slice(c, c + i));
    c = c + i;
    let h = r.decode(n.slice(c, c + l));
    c = c + l;
    let m = n.slice(c, n.byteLength);
    return {
      join_ref: null,
      ref: null,
      topic: d,
      event: h,
      payload: m
    };
  }
};
var yx = class {
  constructor(n, e = {}) {
    this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    };
    this.channels = [];
    this.sendBuffer = [];
    this.ref = 0;
    this.fallbackRef = null;
    this.timeout = e.timeout || dx;
    this.transport = e.transport || Rn.WebSocket || Fs;
    this.conn = undefined;
    this.primaryPassedHealthCheck = false;
    this.longPollFallbackMs = e.longPollFallbackMs;
    this.fallbackTimer = null;
    let r = null;
    try {
      r = Rn && Rn.sessionStorage;
    } catch {}
    this.sessionStore = e.sessionStorage || r;
    this.establishedConnections = 0;
    this.defaultEncoder = ko.encode.bind(ko);
    this.defaultDecoder = ko.decode.bind(ko);
    this.closeWasClean = true;
    this.disconnecting = false;
    this.binaryType = e.binaryType || "arraybuffer";
    this.connectClock = 1;
    this.pageHidden = false;
    this.encode = undefined;
    this.decode = undefined;
    if (this.transport !== Fs) {
      this.encode = e.encode || this.defaultEncoder;
      this.decode = e.decode || this.defaultDecoder;
    } else {
      this.encode = this.defaultEncoder;
      this.decode = this.defaultDecoder;
    }
    let i = null;
    if (Hs && Hs.addEventListener) {
      Hs.addEventListener("pagehide", l => {
        if (this.conn) {
          this.disconnect();
          i = this.connectClock;
        }
      });
      Hs.addEventListener("pageshow", l => {
        if (i === this.connectClock) {
          i = null;
          this.connect();
        }
      });
      Hs.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          this.pageHidden = true;
        } else {
          this.pageHidden = false;
          if (!this.isConnected() && !this.closeWasClean) {
            this.teardown(() => this.connect());
          }
        }
      });
    }
    this.heartbeatIntervalMs = e.heartbeatIntervalMs || 30000;
    this.autoSendHeartbeat = e.autoSendHeartbeat ?? true;
    this.heartbeatCallback = e.heartbeatCallback ?? (() => {});
    this.rejoinAfterMs = l => e.rejoinAfterMs ? e.rejoinAfterMs(l) : [1000, 2000, 5000][l - 1] || 10000;
    this.reconnectAfterMs = l => e.reconnectAfterMs ? e.reconnectAfterMs(l) : [10, 50, 100, 150, 200, 250, 500, 1000, 2000][l - 1] || 5000;
    this.logger = e.logger || null;
    if (!this.logger && e.debug) {
      this.logger = (l, c, d) => {
        console.log(`${l}: ${c}`, d);
      };
    }
    this.longpollerTimeout = e.longpollerTimeout || 20000;
    this.params = Gs(e.params || {});
    this.endPoint = `${n}/${_u.websocket}`;
    this.vsn = e.vsn || ux;
    this.heartbeatTimeoutTimer = null;
    this.heartbeatTimer = null;
    this.heartbeatSentAt = null;
    this.pendingHeartbeatRef = null;
    this.reconnectTimer = new zp(() => {
      if (this.pageHidden) {
        this.log("Not reconnecting as page is hidden!");
        this.teardown();
        return;
      }
      this.teardown(async () => {
        if (e.beforeReconnect) {
          await e.beforeReconnect();
        }
        this.connect();
      });
    }, this.reconnectAfterMs);
    this.authToken = e.authToken && Gs(e.authToken);
  }
  getLongPollTransport() {
    return Fs;
  }
  replaceTransport(n) {
    this.connectClock++;
    this.closeWasClean = true;
    clearTimeout(this.fallbackTimer);
    this.reconnectTimer.reset();
    if (this.conn) {
      this.conn.close();
      this.conn = null;
    }
    this.transport = n;
  }
  protocol() {
    if (location.protocol.match(/^https/)) {
      return "wss";
    } else {
      return "ws";
    }
  }
  endPointURL() {
    let n = Bo.appendParams(Bo.appendParams(this.endPoint, this.params()), {
      vsn: this.vsn
    });
    if (n.charAt(0) !== "/") {
      return n;
    } else if (n.charAt(1) === "/") {
      return `${this.protocol()}:${n}`;
    } else {
      return `${this.protocol()}://${location.host}${n}`;
    }
  }
  disconnect(n, e, r) {
    this.connectClock++;
    this.disconnecting = true;
    this.closeWasClean = true;
    clearTimeout(this.fallbackTimer);
    this.reconnectTimer.reset();
    this.teardown(() => {
      this.disconnecting = false;
      if (n) {
        n();
      }
    }, e, r);
  }
  connect(n) {
    if (n) {
      if (console) {
        console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
      }
      this.params = Gs(n);
    }
    if (!this.conn || !!this.disconnecting) {
      if (this.longPollFallbackMs && this.transport !== Fs) {
        this.connectWithFallback(Fs, this.longPollFallbackMs);
      } else {
        this.transportConnect();
      }
    }
  }
  log(n, e, r) {
    if (this.logger) {
      this.logger(n, e, r);
    }
  }
  hasLogger() {
    return this.logger !== null;
  }
  onOpen(n) {
    let e = this.makeRef();
    this.stateChangeCallbacks.open.push([e, n]);
    return e;
  }
  onClose(n) {
    let e = this.makeRef();
    this.stateChangeCallbacks.close.push([e, n]);
    return e;
  }
  onError(n) {
    let e = this.makeRef();
    this.stateChangeCallbacks.error.push([e, n]);
    return e;
  }
  onMessage(n) {
    let e = this.makeRef();
    this.stateChangeCallbacks.message.push([e, n]);
    return e;
  }
  onHeartbeat(n) {
    this.heartbeatCallback = n;
  }
  ping(n) {
    if (!this.isConnected()) {
      return false;
    }
    let e = this.makeRef();
    let r = Date.now();
    this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: e
    });
    let i = this.onMessage(l => {
      if (l.ref === e) {
        this.off([i]);
        n(Date.now() - r);
      }
    });
    return true;
  }
  transportName(n) {
    switch (n) {
      case Fs:
        return "LongPoll";
      default:
        return n.name;
    }
  }
  transportConnect() {
    this.connectClock++;
    this.closeWasClean = false;
    let n;
    if (this.authToken) {
      n = ["phoenix", `${ju}${btoa(this.authToken()).replace(/=/g, "")}`];
    }
    this.conn = new this.transport(this.endPointURL(), n);
    this.conn.binaryType = this.binaryType;
    this.conn.timeout = this.longpollerTimeout;
    this.conn.onopen = () => this.onConnOpen();
    this.conn.onerror = e => this.onConnError(e);
    this.conn.onmessage = e => this.onConnMessage(e);
    this.conn.onclose = e => this.onConnClose(e);
  }
  getSession(n) {
    return this.sessionStore && this.sessionStore.getItem(n);
  }
  storeSession(n, e) {
    if (this.sessionStore) {
      this.sessionStore.setItem(n, e);
    }
  }
  connectWithFallback(n, e = 2500) {
    clearTimeout(this.fallbackTimer);
    let r = false;
    let i = true;
    let l;
    let c;
    let d = this.transportName(n);
    let h = m => {
      this.log("transport", `falling back to ${d}...`, m);
      this.off([l, c]);
      i = false;
      this.replaceTransport(n);
      this.transportConnect();
    };
    if (this.getSession(`phx:fallback:${d}`)) {
      return h("memorized");
    }
    this.fallbackTimer = setTimeout(h, e);
    c = this.onError(m => {
      this.log("transport", "error", m);
      if (i && !r) {
        clearTimeout(this.fallbackTimer);
        h(m);
      }
    });
    if (this.fallbackRef) {
      this.off([this.fallbackRef]);
    }
    this.fallbackRef = this.onOpen(() => {
      r = true;
      if (!i) {
        let m = this.transportName(n);
        if (!this.primaryPassedHealthCheck) {
          this.storeSession(`phx:fallback:${m}`, "true");
        }
        return this.log("transport", `established ${m} fallback`);
      }
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = setTimeout(h, e);
      this.ping(m => {
        this.log("transport", "connected to primary after", m);
        this.primaryPassedHealthCheck = true;
        clearTimeout(this.fallbackTimer);
      });
    });
    this.transportConnect();
  }
  clearHeartbeats() {
    clearTimeout(this.heartbeatTimer);
    clearTimeout(this.heartbeatTimeoutTimer);
  }
  onConnOpen() {
    if (this.hasLogger()) {
      this.log("transport", `connected to ${this.endPointURL()}`);
    }
    this.closeWasClean = false;
    this.disconnecting = false;
    this.establishedConnections++;
    this.flushSendBuffer();
    this.reconnectTimer.reset();
    if (this.autoSendHeartbeat) {
      this.resetHeartbeat();
    }
    this.triggerStateCallbacks("open");
  }
  heartbeatTimeout() {
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null;
      this.heartbeatSentAt = null;
      if (this.hasLogger()) {
        this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      }
      try {
        this.heartbeatCallback("timeout");
      } catch (n) {
        this.log("error", "error in heartbeat callback", n);
      }
      this.triggerChanError(new Error("heartbeat timeout"));
      this.closeWasClean = false;
      this.teardown(() => this.reconnectTimer.scheduleTimeout(), hx, "heartbeat timeout");
    }
  }
  resetHeartbeat() {
    if (!this.conn || !this.conn.skipHeartbeat) {
      this.pendingHeartbeatRef = null;
      this.clearHeartbeats();
      this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
  }
  teardown(n, e, r) {
    if (!this.conn) {
      return n && n();
    }
    const i = this.conn;
    this.waitForBufferDone(i, () => {
      if (e) {
        i.close(e, r || "");
      } else {
        i.close();
      }
      this.waitForSocketClosed(i, () => {
        if (this.conn === i) {
          this.conn.onopen = function () {};
          this.conn.onerror = function () {};
          this.conn.onmessage = function () {};
          this.conn.onclose = function () {};
          this.conn = null;
        }
        if (n) {
          n();
        }
      });
    });
  }
  waitForBufferDone(n, e, r = 1) {
    if (r === 5 || !n.bufferedAmount) {
      e();
      return;
    }
    setTimeout(() => {
      this.waitForBufferDone(n, e, r + 1);
    }, r * 150);
  }
  waitForSocketClosed(n, e, r = 1) {
    if (r === 5 || n.readyState === In.closed) {
      e();
      return;
    }
    setTimeout(() => {
      this.waitForSocketClosed(n, e, r + 1);
    }, r * 150);
  }
  onConnClose(n) {
    if (this.conn) {
      this.conn.onclose = () => {};
    }
    if (this.hasLogger()) {
      this.log("transport", "close", n);
    }
    this.triggerChanError(n);
    this.clearHeartbeats();
    if (!this.closeWasClean) {
      this.reconnectTimer.scheduleTimeout();
    }
    this.triggerStateCallbacks("close", n);
  }
  onConnError(n) {
    if (this.hasLogger()) {
      this.log("transport", "error", n);
    }
    let e = this.transport;
    let r = this.establishedConnections;
    this.triggerStateCallbacks("error", n, e, r);
    if (e === this.transport || r > 0) {
      this.triggerChanError(n);
    }
  }
  triggerChanError(n) {
    this.channels.forEach(e => {
      if (!e.isErrored() && !e.isLeaving() && !e.isClosed()) {
        e.trigger(Gn.error, n);
      }
    });
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case In.connecting:
        return "connecting";
      case In.open:
        return "open";
      case In.closing:
        return "closing";
      default:
        return "closed";
    }
  }
  isConnected() {
    return this.connectionState() === "open";
  }
  remove(n) {
    this.off(n.stateChangeRefs);
    this.channels = this.channels.filter(e => e !== n);
  }
  off(n) {
    for (let e in this.stateChangeCallbacks) {
      this.stateChangeCallbacks[e] = this.stateChangeCallbacks[e].filter(([r]) => n.indexOf(r) === -1);
    }
  }
  channel(n, e = {}) {
    let r = new px(n, e, this);
    this.channels.push(r);
    return r;
  }
  push(n) {
    if (this.hasLogger()) {
      let {
        topic: e,
        event: r,
        payload: i,
        ref: l,
        join_ref: c
      } = n;
      this.log("push", `${e} ${r} (${c}, ${l})`, i);
    }
    if (this.isConnected()) {
      this.encode(n, e => this.conn.send(e));
    } else {
      this.sendBuffer.push(() => this.encode(n, e => this.conn.send(e)));
    }
  }
  makeRef() {
    let n = this.ref + 1;
    if (n === this.ref) {
      this.ref = 0;
    } else {
      this.ref = n;
    }
    return this.ref.toString();
  }
  sendHeartbeat() {
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (n) {
        this.log("error", "error in heartbeat callback", n);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.heartbeatTimeout();
      return;
    }
    this.pendingHeartbeatRef = this.makeRef();
    this.heartbeatSentAt = Date.now();
    this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    try {
      this.heartbeatCallback("sent");
    } catch (n) {
      this.log("error", "error in heartbeat callback", n);
    }
    this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
  }
  flushSendBuffer() {
    if (this.isConnected() && this.sendBuffer.length > 0) {
      this.sendBuffer.forEach(n => n());
      this.sendBuffer = [];
    }
  }
  onConnMessage(n) {
    this.decode(n.data, e => {
      let {
        topic: r,
        event: i,
        payload: l,
        ref: c,
        join_ref: d
      } = e;
      if (c && c === this.pendingHeartbeatRef) {
        const h = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : undefined;
        this.clearHeartbeats();
        try {
          this.heartbeatCallback(l.status === "ok" ? "ok" : "error", h);
        } catch (m) {
          this.log("error", "error in heartbeat callback", m);
        }
        this.pendingHeartbeatRef = null;
        this.heartbeatSentAt = null;
        if (this.autoSendHeartbeat) {
          this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
        }
      }
      if (this.hasLogger()) {
        this.log("receive", `${l.status || ""} ${r} ${i} ${c && "(" + c + ")" || ""}`.trim(), l);
      }
      for (let h = 0; h < this.channels.length; h++) {
        const m = this.channels[h];
        if (m.isMember(r, i, l, d)) {
          m.trigger(i, l, c, d);
        }
      }
      this.triggerStateCallbacks("message", e);
    });
  }
  triggerStateCallbacks(n, ...e) {
    try {
      this.stateChangeCallbacks[n].forEach(([r, i]) => {
        try {
          i(...e);
        } catch (l) {
          this.log("error", `error in ${n} callback`, l);
        }
      });
    } catch (r) {
      this.log("error", `error triggering ${n} callbacks`, r);
    }
  }
  leaveOpenTopic(n) {
    let e = this.channels.find(r => r.topic === n && (r.isJoined() || r.isJoining()));
    if (e) {
      if (this.hasLogger()) {
        this.log("transport", `leaving duplicate topic "${n}"`);
      }
      e.leave();
    }
  }
};
class Ja {
  constructor(e, r) {
    const i = xx(r);
    this.presence = new vx(e.getChannel(), i);
    this.presence.onJoin((l, c, d) => {
      const h = Ja.onJoinPayload(l, c, d);
      e.getChannel().trigger("presence", h);
    });
    this.presence.onLeave((l, c, d) => {
      const h = Ja.onLeavePayload(l, c, d);
      e.getChannel().trigger("presence", h);
    });
    this.presence.onSync(() => {
      e.getChannel().trigger("presence", {
        event: "sync"
      });
    });
  }
  get state() {
    return Ja.transformState(this.presence.state);
  }
  static transformState(e) {
    e = wx(e);
    return Object.getOwnPropertyNames(e).reduce((r, i) => {
      const l = e[i];
      r[i] = Ro(l);
      return r;
    }, {});
  }
  static onJoinPayload(e, r, i) {
    const l = fm(r);
    const c = Ro(i);
    return {
      event: "join",
      key: e,
      currentPresences: l,
      newPresences: c
    };
  }
  static onLeavePayload(e, r, i) {
    const l = fm(r);
    const c = Ro(i);
    return {
      event: "leave",
      key: e,
      currentPresences: l,
      leftPresences: c
    };
  }
}
function Ro(n) {
  return n.metas.map(e => {
    const r = Object.getOwnPropertyDescriptors(e);
    const i = Object.defineProperties({}, r);
    i.presence_ref = i.phx_ref;
    delete i.phx_ref;
    delete i.phx_ref_prev;
    return i;
  });
}
function wx(n) {
  return JSON.parse(JSON.stringify(n));
}
function xx(n) {
  return (n == null ? undefined : n.events) && {
    events: n.events
  };
}
function fm(n) {
  if (n != null && n.metas) {
    return Ro(n);
  } else {
    return [];
  }
}
var mm;
(function (n) {
  n.SYNC = "sync";
  n.JOIN = "join";
  n.LEAVE = "leave";
})(mm ||= {});
class _x {
  get state() {
    return this.presenceAdapter.state;
  }
  constructor(e, r) {
    this.channel = e;
    this.presenceAdapter = new Ja(this.channel.channelAdapter, r);
  }
}
function jx(n) {
  if (n instanceof Error) {
    return n;
  }
  if (typeof n == "string") {
    return new Error(n);
  }
  if (n && typeof n == "object") {
    const e = n;
    if (typeof e.code == "number") {
      const r = typeof e.reason == "string" && e.reason ? ` (${e.reason})` : "";
      return new Error(`socket closed: ${e.code}${r}`, {
        cause: n
      });
    }
    return new Error("channel error: transport failure", {
      cause: n
    });
  }
  return new Error("channel error: connection lost");
}
class kx {
  constructor(e, r, i) {
    const l = bx(i);
    this.channel = e.getSocket().channel(r, l);
    this.socket = e;
  }
  get state() {
    return this.channel.state;
  }
  set state(e) {
    this.channel.state = e;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(e, r) {
    return this.channel.on(e, r);
  }
  off(e, r) {
    this.channel.off(e, r);
  }
  subscribe(e) {
    return this.channel.join(e);
  }
  unsubscribe(e) {
    return this.channel.leave(e);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(e) {
    this.channel.onClose(e);
  }
  onError(e) {
    return this.channel.onError(e);
  }
  push(e, r, i) {
    let l;
    try {
      l = this.channel.push(e, r, i);
    } catch {
      throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`);
    }
    if (this.channel.pushBuffer.length > tx) {
      const c = this.channel.pushBuffer.shift();
      c.cancelTimeout();
      this.socket.log("channel", `discarded push due to buffer overflow: ${c.event}`, c.payload());
    }
    return l;
  }
  updateJoinPayload(e) {
    const r = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () => Object.assign(Object.assign({}, r), e);
  }
  canPush() {
    return this.socket.isConnected() && this.state === Ir.joined;
  }
  isJoined() {
    return this.state === Ir.joined;
  }
  isJoining() {
    return this.state === Ir.joining;
  }
  isClosed() {
    return this.state === Ir.closed;
  }
  isLeaving() {
    return this.state === Ir.leaving;
  }
  updateFilterBindings(e) {
    this.channel.filterBindings = e;
  }
  updatePayloadTransform(e) {
    this.channel.onMessage = e;
  }
  getChannel() {
    return this.channel;
  }
}
function bx(n) {
  return {
    config: Object.assign({
      broadcast: {
        ack: false,
        self: false
      },
      presence: {
        key: "",
        enabled: false
      },
      private: false
    }, n.config)
  };
}
const Sx = /[,()"\\]/;
const Cx = n => Sx.test(n) || n !== n.trim();
const Ex = n => `"${n.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`;
const pm = n => {
  const e = n === null ? "null" : String(n);
  if (Cx(e)) {
    return Ex(e);
  } else {
    return e;
  }
};
const Nx = n => n === null ? "null" : String(n);
const Tx = (n, e) => {
  if (n === "in") {
    const r = Array.isArray(e) ? e : [e];
    if (r.length === 0) {
      throw new Error("Realtime `in` filter requires at least one value.");
    }
    return `in.(${Array.from(new Set(r)).map(l => pm(l)).join(",")})`;
  }
  if (n === "is") {
    return `is.${Nx(e)}`;
  } else {
    return `${n}.${pm(e)}`;
  }
};
class Rx {
  constructor() {
    this.filters = [];
  }
  add(e, r, i, l = false) {
    const c = l ? "not." : "";
    this.filters.push(`${e}=${c}${Tx(r, i)}`);
    return this;
  }
  eq(e, r) {
    return this.add(e, "eq", r);
  }
  neq(e, r) {
    return this.add(e, "neq", r);
  }
  gt(e, r) {
    return this.add(e, "gt", r);
  }
  gte(e, r) {
    return this.add(e, "gte", r);
  }
  lt(e, r) {
    return this.add(e, "lt", r);
  }
  lte(e, r) {
    return this.add(e, "lte", r);
  }
  in(e, r) {
    return this.add(e, "in", r);
  }
  like(e, r) {
    return this.add(e, "like", r);
  }
  ilike(e, r) {
    return this.add(e, "ilike", r);
  }
  match(e, r) {
    return this.add(e, "match", r);
  }
  imatch(e, r) {
    return this.add(e, "imatch", r);
  }
  is(e, r) {
    return this.add(e, "is", r);
  }
  isDistinct(e, r) {
    return this.add(e, "isdistinct", r);
  }
  not(e, r, i) {
    return this.add(e, r, i, true);
  }
  build() {
    return this.filters.join(",");
  }
  toString() {
    return this.build();
  }
}
var gm;
(function (n) {
  n.ALL = "*";
  n.INSERT = "INSERT";
  n.UPDATE = "UPDATE";
  n.DELETE = "DELETE";
})(gm ||= {});
var rs;
(function (n) {
  n.BROADCAST = "broadcast";
  n.PRESENCE = "presence";
  n.POSTGRES_CHANGES = "postgres_changes";
  n.SYSTEM = "system";
})(rs ||= {});
var Jn;
(function (n) {
  n.SUBSCRIBED = "SUBSCRIBED";
  n.TIMED_OUT = "TIMED_OUT";
  n.CLOSED = "CLOSED";
  n.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Jn ||= {});
class Qn {
  get state() {
    return this.channelAdapter.state;
  }
  set state(e) {
    this.channelAdapter.state = e;
  }
  get joinedOnce() {
    return this.channelAdapter.joinedOnce;
  }
  get timeout() {
    return this.socket.timeout;
  }
  get joinPush() {
    return this.channelAdapter.joinPush;
  }
  get rejoinTimer() {
    return this.channelAdapter.rejoinTimer;
  }
  constructor(e, r = {
    config: {}
  }, i) {
    var c;
    this.topic = e;
    this.params = r;
    this.socket = i;
    this.bindings = {};
    this.subTopic = e.replace(/^realtime:/i, "");
    this.params.config = Object.assign({
      broadcast: {
        ack: false,
        self: false
      },
      presence: {
        key: "",
        enabled: false
      },
      private: false
    }, r.config);
    this.channelAdapter = new kx(this.socket.socketAdapter, e, this.params);
    this.presence = new _x(this);
    this._onClose(() => {
      this.socket._remove(this);
    });
    this._updateFilterTransform();
    this.broadcastEndpointURL = Bp(this.socket.socketAdapter.endPointURL());
    this.private = this.params.config.private || false;
    if (!this.private && (c = this.params.config?.broadcast) !== null && c !== undefined && c.replay) {
      throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
    }
  }
  subscribe(e, r = this.timeout) {
    var i;
    if (!this.socket.isConnected()) {
      this.socket.connect();
    }
    if (this.channelAdapter.isClosed()) {
      const {
        config: {
          broadcast: h,
          presence: m,
          private: g,
          postgres_changes_options: w
        }
      } = this.params;
      const y = ((i = this.bindings.postgres_changes) === null || i === undefined ? undefined : i.map(C => C.filter)) ?? [];
      const _ = !!this.bindings[rs.PRESENCE] && this.bindings[rs.PRESENCE].length > 0 || this.params.config.presence?.enabled === true;
      const v = {};
      const j = Object.assign({
        broadcast: h,
        presence: Object.assign(Object.assign({}, m), {
          enabled: _
        }),
        postgres_changes: y,
        private: g
      }, w ? {
        postgres_changes_options: w
      } : {});
      if (this.socket.accessTokenValue) {
        v.access_token = this.socket.accessTokenValue;
      }
      this._onError(C => {
        if (e != null) {
          e(Jn.CHANNEL_ERROR, jx(C));
        }
      });
      this._onClose(() => e == null ? undefined : e(Jn.CLOSED));
      this.updateJoinPayload(Object.assign({
        config: j
      }, v));
      this._updateFilterMessage();
      const b = w != null && w.wait && y.length > 0 ? Math.max(r, (w.timeout ?? Zw) + ex) : r;
      this.channelAdapter.subscribe(b).receive("ok", async ({
        postgres_changes: C
      }) => {
        if (!this.socket._isManualToken()) {
          this.socket.setAuth();
        }
        if (C === undefined) {
          if (e != null) {
            e(Jn.SUBSCRIBED);
          }
          return;
        }
        this._updatePostgresBindings(C, e);
      }).receive("error", C => {
        this.state = Ir.errored;
        const O = Object.values(C).join(", ") || "error";
        if (e != null) {
          e(Jn.CHANNEL_ERROR, new Error(O, {
            cause: C
          }));
        }
      }).receive("timeout", () => {
        if (e != null) {
          e(Jn.TIMED_OUT);
        }
      });
    }
    return this;
  }
  _updatePostgresBindings(e, r) {
    const l = this.bindings.postgres_changes;
    const c = (l == null ? undefined : l.length) ?? 0;
    const d = [];
    for (let h = 0; h < c; h++) {
      const m = l[h];
      const {
        filter: {
          event: g,
          schema: w,
          table: y,
          filter: _
        }
      } = m;
      const v = e && e[h];
      if (v && v.event === g && Qn.isFilterValueEqual(v.schema, w) && Qn.isFilterValueEqual(v.table, y) && Qn.isFilterValueEqual(v.filter, _)) {
        d.push(Object.assign(Object.assign({}, m), {
          id: v.id
        }));
      } else {
        this.unsubscribe();
        this.state = Ir.errored;
        if (r != null) {
          r(Jn.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
        }
        return;
      }
    }
    this.bindings.postgres_changes = d;
    if (this.state != Ir.errored && r) {
      r(Jn.SUBSCRIBED);
    }
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, r = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, r);
  }
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, r, i) {
    const l = this.channelAdapter.isJoined() || this.channelAdapter.isJoining();
    const c = e === rs.PRESENCE || e === rs.POSTGRES_CHANGES;
    if (l && c) {
      this.socket.log("channel", `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
      throw new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
    }
    return this._on(e, r, i);
  }
  async httpSend(e, r, i = {}) {
    if (r == null) {
      return Promise.reject(new Error("Payload is required for httpSend()"));
    }
    const c = r instanceof ArrayBuffer || ArrayBuffer.isView(r);
    const d = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": c ? "application/octet-stream" : "application/json"
    };
    if (this.socket.accessTokenValue) {
      d.Authorization = `Bearer ${this.socket.accessTokenValue}`;
    }
    const h = new URL(this.broadcastEndpointURL);
    h.pathname += `/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`;
    if (this.private) {
      h.searchParams.set("private", "true");
    }
    const m = {
      method: "POST",
      headers: d,
      body: c ? r : JSON.stringify(r)
    };
    const g = await this._fetchWithTimeout(h.toString(), m, i.timeout ?? this.timeout);
    if (g.status === 202) {
      return {
        success: true
      };
    }
    if (g.status === 404) {
      return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));
    }
    let w = g.statusText;
    try {
      const y = await g.json();
      w = y.error || y.message || w;
    } catch {}
    return Promise.reject(new Error(w));
  }
  async send(e, r = {}) {
    var l;
    if (!this.channelAdapter.canPush() && e.type === "broadcast") {
      const c = "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.";
      if (this.socket.hasLogger()) {
        this.socket.log("channel", c);
      } else {
        console.warn(c);
      }
      const {
        event: d,
        payload: h
      } = e;
      const m = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      if (this.socket.accessTokenValue) {
        m.Authorization = `Bearer ${this.socket.accessTokenValue}`;
      }
      const g = {
        method: "POST",
        headers: m,
        body: JSON.stringify({
          messages: [{
            topic: this.subTopic,
            event: d,
            payload: h,
            private: this.private
          }]
        })
      };
      try {
        const w = await this._fetchWithTimeout(this.broadcastEndpointURL, g, r.timeout ?? this.timeout);
        await ((l = w.body) === null || l === undefined ? undefined : l.cancel());
        if (w.ok) {
          return "ok";
        } else {
          return "error";
        }
      } catch (w) {
        if (w instanceof Error && w.name === "AbortError") {
          return "timed out";
        } else {
          return "error";
        }
      }
    } else {
      return new Promise(c => {
        var m;
        const g = this.channelAdapter.push(e.type, e, r.timeout || this.timeout);
        if (e.type === "broadcast" && ((m = this.params?.config?.broadcast) === null || m === undefined || !m.ack)) {
          c("ok");
        }
        g.receive("ok", () => c("ok"));
        g.receive("error", () => c("error"));
        g.receive("timeout", () => c("timed out"));
      });
    }
  }
  updateJoinPayload(e) {
    this.channelAdapter.updateJoinPayload(e);
  }
  async unsubscribe(e = this.timeout) {
    return new Promise(r => {
      this.channelAdapter.unsubscribe(e).receive("ok", () => r("ok")).receive("timeout", () => r("timed out")).receive("error", () => r("error"));
    });
  }
  teardown() {
    this.channelAdapter.teardown();
  }
  async _fetchWithTimeout(e, r, i) {
    const l = new AbortController();
    const c = setTimeout(() => l.abort(), i);
    const d = await this.socket.fetch(e, Object.assign(Object.assign({}, r), {
      signal: l.signal
    }));
    clearTimeout(c);
    return d;
  }
  _on(e, r, i) {
    var l;
    const c = e.toLocaleLowerCase();
    const d = r == null ? undefined : r.filter;
    if (d instanceof Rx || typeof d == "object" && d !== null && typeof d.build == "function") {
      r = Object.assign(Object.assign({}, r), {
        filter: d.build()
      });
    }
    if (c === rs.POSTGRES_CHANGES && ((l = this.bindings[c]) === null || l === undefined ? undefined : l.find(w => Qn.isSamePostgresFilter(w.filter, r)))) {
      this.socket.log("error", `duplicate \`postgres_changes\` binding for ${this.topic} ignored`, r);
      return this;
    }
    const h = this.channelAdapter.on(e, i);
    const m = {
      type: c,
      filter: r,
      callback: i,
      ref: h
    };
    if (this.bindings[c]) {
      this.bindings[c].push(m);
    } else {
      this.bindings[c] = [m];
    }
    this._updateFilterMessage();
    return this;
  }
  _onClose(e) {
    this.channelAdapter.onClose(e);
  }
  _onError(e) {
    this.channelAdapter.onError(e);
  }
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((e, r, i) => {
      var l;
      var d;
      var h;
      var g;
      var w;
      const y = e.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(y, i)) {
        return false;
      }
      const _ = (l = this.bindings[y]) === null || l === undefined ? undefined : l.find(v => v.ref === e.ref);
      if (!_) {
        return true;
      }
      if (["broadcast", "presence", "postgres_changes"].includes(y)) {
        if ("id" in _) {
          const v = _.id;
          const j = _.filter?.event;
          return v && ((d = r.ids) === null || d === undefined ? undefined : d.includes(v)) && (j === "*" || (j == null ? undefined : j.toLocaleLowerCase()) === ((h = r.data) === null || h === undefined ? undefined : h.type.toLocaleLowerCase()));
        } else {
          const v = (g = (_ == null ? undefined : _.filter)?.event) === null || g === undefined ? undefined : g.toLocaleLowerCase();
          return v === "*" || v === ((w = r == null ? undefined : r.event) === null || w === undefined ? undefined : w.toLocaleLowerCase());
        }
      } else {
        return _.type.toLocaleLowerCase() === y;
      }
    });
  }
  _notThisChannelEvent(e, r) {
    const {
      close: i,
      error: l,
      leave: c,
      join: d
    } = Up;
    return r && [i, l, c, d].includes(e) && r !== this.joinPush.ref;
  }
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((e, r, i) => {
      if (typeof r == "object" && "ids" in r) {
        const l = r.data;
        const {
          schema: c,
          table: d,
          commit_timestamp: h,
          type: m,
          errors: g
        } = l;
        return Object.assign(Object.assign({}, {
          schema: c,
          table: d,
          commit_timestamp: h,
          eventType: m,
          new: {},
          old: {},
          errors: g
        }), this._getPayloadRecords(l));
      }
      return r;
    });
  }
  copyBindings(e) {
    if (this.joinedOnce) {
      throw new Error("cannot copy bindings into joined channel");
    }
    for (const r in e.bindings) {
      for (const i of e.bindings[r]) {
        this._on(i.type, i.filter, i.callback);
      }
    }
  }
  static isFilterValueEqual(e, r) {
    return (e ?? undefined) === (r ?? undefined);
  }
  static isSamePostgresFilter(e, r) {
    var i;
    var c;
    const h = ((i = e == null ? undefined : e.select) === null || i === undefined ? undefined : i.join()) ?? undefined;
    const m = ((c = r == null ? undefined : r.select) === null || c === undefined ? undefined : c.join()) ?? undefined;
    return (e == null ? undefined : e.event) === (r == null ? undefined : r.event) && Qn.isFilterValueEqual(e == null ? undefined : e.schema, r == null ? undefined : r.schema) && Qn.isFilterValueEqual(e == null ? undefined : e.table, r == null ? undefined : r.table) && Qn.isFilterValueEqual(e == null ? undefined : e.filter, r == null ? undefined : r.filter) && h === m;
  }
  _getPayloadRecords(e) {
    const r = {
      new: {},
      old: {}
    };
    if (e.type === "INSERT" || e.type === "UPDATE") {
      r.new = hm(e.columns, e.record);
    }
    if (e.type === "UPDATE" || e.type === "DELETE") {
      r.old = hm(e.columns, e.old_record);
    }
    return r;
  }
}
class Ix {
  constructor(e, r) {
    this.socket = new yx(e, r);
  }
  get timeout() {
    return this.socket.timeout;
  }
  get endPoint() {
    return this.socket.endPoint;
  }
  get transport() {
    return this.socket.transport;
  }
  get heartbeatIntervalMs() {
    return this.socket.heartbeatIntervalMs;
  }
  get heartbeatCallback() {
    return this.socket.heartbeatCallback;
  }
  set heartbeatCallback(e) {
    this.socket.heartbeatCallback = e;
  }
  get heartbeatTimer() {
    return this.socket.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.socket.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socket.reconnectTimer;
  }
  get vsn() {
    return this.socket.vsn;
  }
  get encode() {
    return this.socket.encode;
  }
  get decode() {
    return this.socket.decode;
  }
  get reconnectAfterMs() {
    return this.socket.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socket.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socket.stateChangeCallbacks;
  }
  connect() {
    this.socket.connect();
  }
  disconnect(e, r, i, l = 10000) {
    return new Promise(c => {
      setTimeout(() => c("timeout"), l);
      this.socket.disconnect(() => {
        e();
        c("ok");
      }, r, i);
    });
  }
  push(e) {
    this.socket.push(e);
  }
  log(e, r, i) {
    this.socket.log(e, r, i);
  }
  hasLogger() {
    return this.socket.hasLogger();
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(e) {
    this.socket.onOpen(e);
  }
  onClose(e) {
    this.socket.onClose(e);
  }
  onError(e) {
    this.socket.onError(e);
  }
  onMessage(e) {
    this.socket.onMessage(e);
  }
  isConnected() {
    return this.socket.isConnected();
  }
  isConnecting() {
    return this.socket.connectionState() == wu.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == wu.closing;
  }
  connectionState() {
    return this.socket.connectionState();
  }
  endPointURL() {
    return this.socket.endPointURL();
  }
  sendHeartbeat() {
    this.socket.sendHeartbeat();
  }
  getSocket() {
    return this.socket;
  }
}
const vm = {
  HEARTBEAT_INTERVAL: 25000
};
const Ax = [1000, 2000, 5000, 10000];
const Px = 10000;
function Ox() {
  const n = new Map();
  return {
    get length() {
      return n.size;
    },
    clear() {
      n.clear();
    },
    getItem(e) {
      if (n.has(e)) {
        return n.get(e);
      } else {
        return null;
      }
    },
    key(e) {
      return Array.from(n.keys())[e] ?? null;
    },
    removeItem(e) {
      n.delete(e);
    },
    setItem(e, r) {
      n.set(e, String(r));
    }
  };
}
function $x() {
  try {
    if (typeof globalThis !== "undefined" && globalThis.sessionStorage) {
      return globalThis.sessionStorage;
    }
  } catch {}
  return Ox();
}
const Lx = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Dx {
  get endPoint() {
    return this.socketAdapter.endPoint;
  }
  get timeout() {
    return this.socketAdapter.timeout;
  }
  get transport() {
    return this.socketAdapter.transport;
  }
  get heartbeatCallback() {
    return this.socketAdapter.heartbeatCallback;
  }
  get heartbeatIntervalMs() {
    return this.socketAdapter.heartbeatIntervalMs;
  }
  get heartbeatTimer() {
    if (this.worker) {
      return this._workerHeartbeatTimer;
    } else {
      return this.socketAdapter.heartbeatTimer;
    }
  }
  get pendingHeartbeatRef() {
    if (this.worker) {
      return this._pendingWorkerHeartbeatRef;
    } else {
      return this.socketAdapter.pendingHeartbeatRef;
    }
  }
  get reconnectTimer() {
    return this.socketAdapter.reconnectTimer;
  }
  get vsn() {
    return this.socketAdapter.vsn;
  }
  get encode() {
    return this.socketAdapter.encode;
  }
  get decode() {
    return this.socketAdapter.decode;
  }
  get reconnectAfterMs() {
    return this.socketAdapter.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socketAdapter.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socketAdapter.stateChangeCallbacks;
  }
  constructor(e, r) {
    var i;
    this.channels = new Array();
    this.accessTokenValue = null;
    this.accessToken = null;
    this.apiKey = null;
    this.httpEndpoint = "";
    this.headers = {};
    this.params = {};
    this.ref = 0;
    this.serializer = new nx();
    this._manuallySetToken = false;
    this._authPromise = null;
    this._authGeneration = 0;
    this._workerHeartbeatTimer = undefined;
    this._pendingWorkerHeartbeatRef = null;
    this._pendingDisconnectTimer = null;
    this._disconnectOnEmptyChannelsAfterMs = 0;
    this._resolveFetch = c => c ? (...d) => c(...d) : (...d) => fetch(...d);
    if ((i = r == null ? undefined : r.params) === null || i === undefined || !i.apikey) {
      throw new Error("API key is required to connect to Realtime");
    }
    this.apiKey = r.params.apikey;
    const l = this._initializeOptions(r);
    this.socketAdapter = new Ix(e, l);
    this.httpEndpoint = Bp(e);
    this.fetch = this._resolveFetch(r == null ? undefined : r.fetch);
  }
  connect() {
    if (!this.isConnecting() && !this.isDisconnecting() && !this.isConnected()) {
      if (this.accessToken && !this._authPromise) {
        this._setAuthSafely("connect");
      }
      this._setupConnectionHandlers();
      try {
        this.socketAdapter.connect();
      } catch (e) {
        const r = e.message;
        throw new Error(`WebSocket not available: ${r}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  async disconnect(e, r) {
    this._cancelPendingDisconnect();
    if (this.isDisconnecting()) {
      return "ok";
    } else {
      return await this.socketAdapter.disconnect(() => {
        clearInterval(this._workerHeartbeatTimer);
        this._terminateWorker();
      }, e, r);
    }
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(e) {
    const r = await e.unsubscribe();
    if (r === "ok") {
      e.teardown();
    }
    return r;
  }
  async removeAllChannels() {
    const e = this.channels.map(async i => {
      const l = await i.unsubscribe();
      i.teardown();
      return l;
    });
    const r = await Promise.all(e);
    await this.disconnect();
    return r;
  }
  log(e, r, i) {
    this.socketAdapter.log(e, r, i);
  }
  hasLogger() {
    return this.socketAdapter.hasLogger();
  }
  connectionState() {
    return this.socketAdapter.connectionState() || wu.closed;
  }
  isConnected() {
    return this.socketAdapter.isConnected();
  }
  isConnecting() {
    return this.socketAdapter.isConnecting();
  }
  isDisconnecting() {
    return this.socketAdapter.isDisconnecting();
  }
  channel(e, r = {
    config: {}
  }) {
    const i = `realtime:${e}`;
    const l = this.getChannels().find(c => c.topic === i);
    if (l) {
      return l;
    }
    {
      const c = new Qn(`realtime:${e}`, r, this);
      this._cancelPendingDisconnect();
      this.channels.push(c);
      return c;
    }
  }
  push(e) {
    this.socketAdapter.push(e);
  }
  async setAuth(e = null) {
    const r = ++this._authGeneration;
    const i = this._performAuth(e, r);
    if (r === this._authGeneration) {
      this._authPromise = i;
    }
    try {
      await i;
    } finally {
      if (this._authPromise === i) {
        this._authPromise = null;
      }
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    this.socketAdapter.sendHeartbeat();
  }
  onHeartbeat(e) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e);
  }
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  _remove(e) {
    this.channels = this.channels.filter(r => r.topic !== e.topic);
    if (this.channels.length === 0) {
      this.log("transport", "no channels remaining, scheduling disconnect");
      this._schedulePendingDisconnect();
    }
  }
  _schedulePendingDisconnect() {
    this._cancelPendingDisconnect();
    if (this._disconnectOnEmptyChannelsAfterMs === 0) {
      this.log("transport", "disconnecting immediately - no channels");
      this.disconnect();
      return;
    }
    this._pendingDisconnectTimer = setTimeout(() => {
      this._pendingDisconnectTimer = null;
      if (this.channels.length === 0) {
        this.log("transport", "deferred disconnect fired - no channels, disconnecting");
        this.disconnect();
      }
    }, this._disconnectOnEmptyChannelsAfterMs);
    this.log("transport", `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`);
  }
  _cancelPendingDisconnect() {
    if (this._pendingDisconnectTimer !== null) {
      this.log("transport", "pending disconnect cancelled - channel activity detected");
      clearTimeout(this._pendingDisconnectTimer);
      this._pendingDisconnectTimer = null;
    }
  }
  async _performAuth(e, r) {
    let i;
    let l = false;
    if (e) {
      i = e;
      l = true;
    } else if (this.accessToken) {
      try {
        i = await this.accessToken();
      } catch (c) {
        this.log("error", "Error fetching access token from callback", c);
        i = this.accessTokenValue;
      }
    } else {
      i = this.accessTokenValue;
    }
    if (r === this._authGeneration) {
      if (this.accessToken) {
        this._manuallySetToken = false;
      } else if (l) {
        this._manuallySetToken = true;
      }
      if (this.accessTokenValue != i) {
        this.accessTokenValue = i;
        this.channels.forEach(c => {
          const d = {
            access_token: i,
            version: Jw
          };
          c.updateJoinPayload(d);
          if (c.joinedOnce && c.channelAdapter.isJoined()) {
            c.channelAdapter.push(Up.access_token, {
              access_token: i
            });
          }
        });
      }
    }
  }
  async _waitForAuthIfNeeded() {
    if (this._authPromise) {
      await this._authPromise;
    }
  }
  _setAuthSafely(e = "general") {
    if (!this._isManualToken()) {
      this.setAuth().catch(r => {
        this.log("error", `Error setting auth in ${e}`, r);
      });
    }
  }
  _setupConnectionHandlers() {
    this.socketAdapter.onOpen(() => {
      (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch(r => {
        this.log("error", "error waiting for auth on connect", r);
      });
      if (this.worker && !this.workerRef) {
        this._startWorkerHeartbeat();
      }
    });
    this.socketAdapter.onClose(() => {
      if (this.worker && this.workerRef) {
        this._terminateWorker();
      }
    });
    this.socketAdapter.onMessage(e => {
      if (e.ref && e.ref === this._pendingWorkerHeartbeatRef) {
        this._pendingWorkerHeartbeatRef = null;
      }
    });
  }
  _handleNodeJsRaceCondition() {
    if (this.socketAdapter.isConnected()) {
      this.socketAdapter.getSocket().onConnOpen();
    }
  }
  _wrapHeartbeatCallback(e) {
    return (r, i) => {
      if (r !== "disconnected") {
        if (r == "sent") {
          this._setAuthSafely();
        }
        if (e) {
          e(r, i);
        }
      }
    };
  }
  _startWorkerHeartbeat() {
    if (this.workerUrl) {
      this.log("worker", `starting worker for from ${this.workerUrl}`);
    } else {
      this.log("worker", "starting default worker");
    }
    const e = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e);
    this.workerRef.onerror = r => {
      this.log("worker", "worker error", r.message);
      this._terminateWorker();
      this.disconnect();
    };
    this.workerRef.onmessage = r => {
      if (r.data.event === "keepAlive") {
        this.sendHeartbeat();
      }
    };
    this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  _terminateWorker() {
    if (this.workerRef) {
      this.log("worker", "terminating worker");
      this.workerRef.terminate();
      this.workerRef = undefined;
    }
  }
  _workerObjectUrl(e) {
    let r;
    if (e) {
      r = e;
    } else {
      const i = new Blob([Lx], {
        type: "application/javascript"
      });
      r = URL.createObjectURL(i);
    }
    return r;
  }
  _initializeOptions(e) {
    this.worker = (e == null ? undefined : e.worker) ?? false;
    this.accessToken = (e == null ? undefined : e.accessToken) ?? null;
    const j = {
      timeout: (e == null ? undefined : e.timeout) ?? Xw,
      heartbeatIntervalMs: (e == null ? undefined : e.heartbeatIntervalMs) ?? vm.HEARTBEAT_INTERVAL
    };
    this._disconnectOnEmptyChannelsAfterMs = (e == null ? undefined : e.disconnectOnEmptyChannelsAfterMs) ?? ((e == null ? undefined : e.heartbeatIntervalMs) ?? vm.HEARTBEAT_INTERVAL) * 2;
    j.transport = (e == null ? undefined : e.transport) ?? Kw.getWebSocketConstructor();
    j.params = e == null ? undefined : e.params;
    j.logger = e == null ? undefined : e.logger;
    j.heartbeatCallback = this._wrapHeartbeatCallback(e == null ? undefined : e.heartbeatCallback);
    j.sessionStorage = (e == null ? undefined : e.sessionStorage) ?? $x();
    j.reconnectAfterMs = (e == null ? undefined : e.reconnectAfterMs) ?? (L => Ax[L - 1] || Px);
    let b;
    let C;
    const O = (e == null ? undefined : e.vsn) ?? Yw;
    switch (O) {
      case Qw:
        b = (L, R) => R(JSON.stringify(L));
        C = (L, R) => R(JSON.parse(L));
        break;
      case Mp:
        b = this.serializer.encode.bind(this.serializer);
        C = this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${j.vsn}`);
    }
    j.vsn = O;
    j.encode = (e == null ? undefined : e.encode) ?? b;
    j.decode = (e == null ? undefined : e.decode) ?? C;
    j.beforeReconnect = this._reconnectAuth.bind(this);
    if (e != null && e.logLevel || e != null && e.log_level) {
      this.logLevel = e.logLevel || e.log_level;
      j.params = Object.assign(Object.assign({}, j.params), {
        log_level: this.logLevel
      });
    }
    if (this.worker) {
      if (typeof window !== "undefined" && !window.Worker) {
        throw new Error("Web Worker is not supported");
      }
      this.workerUrl = e == null ? undefined : e.workerUrl;
      j.autoSendHeartbeat = !this.worker;
    }
    return j;
  }
  async _reconnectAuth() {
    await this._waitForAuthIfNeeded();
    if (!this.isConnected()) {
      this.connect();
    }
  }
}
var ni = class extends Error {
  constructor(n, e) {
    var r;
    super(n);
    this.name = "IcebergError";
    this.status = e.status;
    this.icebergType = e.icebergType;
    this.icebergCode = e.icebergCode;
    this.details = e.details;
    this.isCommitStateUnknown = e.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(e.status) && ((r = e.icebergType) == null ? undefined : r.includes("CommitState")) === true;
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function Mx(n, e, r) {
  const i = new URL(e, n);
  if (r) {
    for (const [l, c] of Object.entries(r)) {
      if (c !== undefined) {
        i.searchParams.set(l, c);
      }
    }
  }
  return i.toString();
}
async function Ux(n) {
  if (!n || n.type === "none") {
    return {};
  } else if (n.type === "bearer") {
    return {
      Authorization: `Bearer ${n.token}`
    };
  } else if (n.type === "header") {
    return {
      [n.name]: n.value
    };
  } else if (n.type === "custom") {
    return await n.getHeaders();
  } else {
    return {};
  }
}
function Fx(n) {
  const e = n.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: r,
      path: i,
      query: l,
      body: c,
      headers: d
    }) {
      const h = Mx(n.baseUrl, i, l);
      const m = await Ux(n.auth);
      const g = await e(h, {
        method: r,
        headers: {
          ...(c ? {
            "Content-Type": "application/json"
          } : {}),
          ...m,
          ...d
        },
        body: c ? JSON.stringify(c) : undefined
      });
      const w = await g.text();
      const y = (g.headers.get("content-type") || "").includes("application/json");
      const _ = y && w ? JSON.parse(w) : w;
      if (!g.ok) {
        const v = y ? _ : undefined;
        const j = v == null ? undefined : v.error;
        throw new ni((j == null ? undefined : j.message) ?? `Request failed with status ${g.status}`, {
          status: g.status,
          icebergType: j == null ? undefined : j.type,
          icebergCode: j == null ? undefined : j.code,
          details: v
        });
      }
      return {
        status: g.status,
        headers: g.headers,
        data: _
      };
    }
  };
}
function bo(n) {
  return n.join("");
}
var Bx = class {
  constructor(n, e = "") {
    this.client = n;
    this.prefix = e;
  }
  async listNamespaces(n) {
    const e = n ? {
      parent: bo(n.namespace)
    } : undefined;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: e
    })).data.namespaces.map(i => ({
      namespace: i
    }));
  }
  async createNamespace(n, e) {
    const r = {
      namespace: n.namespace,
      properties: e == null ? undefined : e.properties
    };
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: r
    })).data;
  }
  async dropNamespace(n) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${bo(n.namespace)}`
    });
  }
  async loadNamespaceMetadata(n) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${bo(n.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(n) {
    try {
      await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${bo(n.namespace)}`
      });
      return true;
    } catch (e) {
      if (e instanceof ni && e.status === 404) {
        return false;
      }
      throw e;
    }
  }
  async createNamespaceIfNotExists(n, e) {
    try {
      return await this.createNamespace(n, e);
    } catch (r) {
      if (r instanceof ni && r.status === 409) {
        return;
      }
      throw r;
    }
  }
};
function Bs(n) {
  return n.join("");
}
var zx = class {
  constructor(n, e = "", r) {
    this.client = n;
    this.prefix = e;
    this.accessDelegation = r;
  }
  async listTables(n) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Bs(n.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(n, e) {
    const r = {};
    if (this.accessDelegation) {
      r["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Bs(n.namespace)}/tables`,
      body: e,
      headers: r
    })).data.metadata;
  }
  async updateTable(n, e) {
    const r = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Bs(n.namespace)}/tables/${n.name}`,
      body: e
    });
    return {
      "metadata-location": r.data["metadata-location"],
      metadata: r.data.metadata
    };
  }
  async dropTable(n, e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Bs(n.namespace)}/tables/${n.name}`,
      query: {
        purgeRequested: String((e == null ? undefined : e.purge) ?? false)
      }
    });
  }
  async loadTable(n) {
    const e = {};
    if (this.accessDelegation) {
      e["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Bs(n.namespace)}/tables/${n.name}`,
      headers: e
    })).data.metadata;
  }
  async tableExists(n) {
    const e = {};
    if (this.accessDelegation) {
      e["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    try {
      await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Bs(n.namespace)}/tables/${n.name}`,
        headers: e
      });
      return true;
    } catch (r) {
      if (r instanceof ni && r.status === 404) {
        return false;
      }
      throw r;
    }
  }
  async createTableIfNotExists(n, e) {
    try {
      return await this.createTable(n, e);
    } catch (r) {
      if (r instanceof ni && r.status === 409) {
        return await this.loadTable({
          namespace: n.namespace,
          name: e.name
        });
      }
      throw r;
    }
  }
};
var Wx = class {
  constructor(n) {
    var i;
    let e = "v1";
    if (n.catalogName) {
      e += `/${n.catalogName}`;
    }
    const r = n.baseUrl.endsWith("/") ? n.baseUrl : `${n.baseUrl}/`;
    this.client = Fx({
      baseUrl: r,
      auth: n.auth,
      fetchImpl: n.fetch
    });
    this.accessDelegation = (i = n.accessDelegation) == null ? undefined : i.join(",");
    this.namespaceOps = new Bx(this.client, e);
    this.tableOps = new zx(this.client, e, this.accessDelegation);
  }
  async listNamespaces(n) {
    return this.namespaceOps.listNamespaces(n);
  }
  async createNamespace(n, e) {
    return this.namespaceOps.createNamespace(n, e);
  }
  async dropNamespace(n) {
    await this.namespaceOps.dropNamespace(n);
  }
  async loadNamespaceMetadata(n) {
    return this.namespaceOps.loadNamespaceMetadata(n);
  }
  async listTables(n) {
    return this.tableOps.listTables(n);
  }
  async createTable(n, e) {
    return this.tableOps.createTable(n, e);
  }
  async updateTable(n, e) {
    return this.tableOps.updateTable(n, e);
  }
  async dropTable(n, e) {
    await this.tableOps.dropTable(n, e);
  }
  async loadTable(n) {
    return this.tableOps.loadTable(n);
  }
  async namespaceExists(n) {
    return this.namespaceOps.namespaceExists(n);
  }
  async tableExists(n) {
    return this.tableOps.tableExists(n);
  }
  async createNamespaceIfNotExists(n, e) {
    return this.namespaceOps.createNamespaceIfNotExists(n, e);
  }
  async createTableIfNotExists(n, e) {
    return this.tableOps.createTableIfNotExists(n, e);
  }
};
function ri(n) {
  "@babel/helpers - typeof";

  ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  };
  return ri(n);
}
function qx(n, e) {
  if (ri(n) != "object" || !n) {
    return n;
  }
  var r = n[Symbol.toPrimitive];
  if (r !== undefined) {
    var i = r.call(n, e);
    if (ri(i) != "object") {
      return i;
    }
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Hx(n) {
  var e = qx(n, "string");
  if (ri(e) == "symbol") {
    return e;
  } else {
    return e + "";
  }
}
function Vx(n, e, r) {
  if ((e = Hx(e)) in n) {
    Object.defineProperty(n, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    n[e] = r;
  }
  return n;
}
function ym(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    if (e) {
      i = i.filter(function (l) {
        return Object.getOwnPropertyDescriptor(n, l).enumerable;
      });
    }
    r.push.apply(r, i);
  }
  return r;
}
function xe(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] ?? {};
    if (e % 2) {
      ym(Object(r), true).forEach(function (i) {
        Vx(n, i, r[i]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(n, Object.getOwnPropertyDescriptors(r));
    } else {
      ym(Object(r)).forEach(function (i) {
        Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(r, i));
      });
    }
  }
  return n;
}
var tl = class extends Error {
  constructor(n, e = "storage", r, i) {
    super(n);
    this.__isStorageError = true;
    this.namespace = e;
    this.name = e === "vectors" ? "StorageVectorsError" : "StorageError";
    this.status = r;
    this.statusCode = i;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
};
function nl(n) {
  return typeof n == "object" && n !== null && "__isStorageError" in n;
}
var ku = class extends tl {
  constructor(n, e, r, i = "storage", l) {
    super(n, i, e, r);
    this.name = i === "vectors" ? "StorageVectorsApiError" : "StorageApiError";
    this.status = e;
    this.statusCode = r;
    this.code = l;
  }
  toJSON() {
    return xe(xe({}, super.toJSON()), {}, {
      code: this.code
    });
  }
};
var Wp = class extends tl {
  constructor(n, e, r = "storage") {
    super(n, r);
    this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError";
    this.originalError = e;
  }
};
function zo(n, e, r) {
  const i = xe({}, n);
  const l = e.toLowerCase();
  for (const c of Object.keys(i)) {
    if (c.toLowerCase() === l) {
      delete i[c];
    }
  }
  i[l] = r;
  return i;
}
function Kx(n) {
  const e = {};
  for (const [r, i] of Object.entries(n)) {
    e[r.toLowerCase()] = i;
  }
  return e;
}
const Gx = n => n ? (...e) => n(...e) : (...e) => fetch(...e);
const Jx = n => {
  if (typeof n != "object" || n === null) {
    return false;
  }
  const e = Object.getPrototypeOf(n);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
};
const bu = n => {
  if (Array.isArray(n)) {
    return n.map(r => bu(r));
  }
  if (typeof n == "function" || n !== Object(n)) {
    return n;
  }
  const e = {};
  Object.entries(n).forEach(([r, i]) => {
    const l = r.replace(/([-_][a-z])/gi, c => c.toUpperCase().replace(/[-_]/g, ""));
    e[l] = bu(i);
  });
  return e;
};
const Qx = n => !n || typeof n != "string" || n.length === 0 || n.length > 100 || n.trim() !== n || n.includes("/") || n.includes("\\") ? false : /^[\w!.\*'() &$@=;:+,?-]+$/.test(n);
const Su = n => n.split("/").map(encodeURIComponent).join("/");
const wm = n => {
  if (typeof n == "object" && n !== null) {
    const e = n;
    if (typeof e.msg == "string") {
      return e.msg;
    }
    if (typeof e.message == "string") {
      return e.message;
    }
    if (typeof e.error_description == "string") {
      return e.error_description;
    }
    if (typeof e.error == "string") {
      return e.error;
    }
    if (typeof e.error == "object" && e.error !== null) {
      const r = e.error;
      if (typeof r.message == "string") {
        return r.message;
      }
    }
  }
  return JSON.stringify(n);
};
const Yx = async (n, e, r, i) => {
  if (n !== null && typeof n == "object" && "json" in n && typeof n.json == "function") {
    const l = n;
    let c = parseInt(String(l.status), 10);
    if (!Number.isFinite(c)) {
      c = 500;
    }
    l.json().then(d => {
      const h = (d == null ? undefined : d.statusCode) || (d == null ? undefined : d.code) || c + "";
      e(new ku(wm(d), c, h, i, d == null ? undefined : d.code));
    }).catch(() => {
      const d = c + "";
      e(new ku(l.statusText || `HTTP ${c} error`, c, d, i));
    });
  } else {
    e(new Wp(wm(n), n, i));
  }
};
const Xx = (n, e, r, i) => {
  const l = {
    method: n,
    headers: (e == null ? undefined : e.headers) || {}
  };
  if (n === "GET" || n === "HEAD" || !i) {
    return xe(xe({}, l), r);
  }
  if (Jx(i)) {
    const d = (e == null ? undefined : e.headers) || {};
    let h;
    for (const [m, g] of Object.entries(d)) {
      if (m.toLowerCase() === "content-type") {
        h = g;
      }
    }
    l.headers = zo(d, "Content-Type", h ?? "application/json");
    l.body = JSON.stringify(i);
  } else {
    l.body = i;
  }
  if (e != null && e.duplex) {
    l.duplex = e.duplex;
  }
  return xe(xe({}, l), r);
};
async function Fa(n, e, r, i, l, c, d) {
  return new Promise((h, m) => {
    n(r, Xx(e, i, l, c)).then(g => {
      if (!g.ok) {
        throw g;
      }
      if (i != null && i.noResolveJson) {
        return g;
      }
      if (d === "vectors") {
        const w = g.headers.get("content-type");
        if (g.headers.get("content-length") === "0" || g.status === 204) {
          return {};
        }
        if (!w || !w.includes("application/json")) {
          return {};
        }
      }
      return g.json();
    }).then(g => h(g)).catch(g => Yx(g, m, i, d));
  });
}
function qp(n = "storage") {
  return {
    get: async (e, r, i, l) => Fa(e, "GET", r, i, l, undefined, n),
    post: async (e, r, i, l, c) => Fa(e, "POST", r, l, c, i, n),
    put: async (e, r, i, l, c) => Fa(e, "PUT", r, l, c, i, n),
    head: async (e, r, i, l) => Fa(e, "HEAD", r, xe(xe({}, i), {}, {
      noResolveJson: true
    }), l, undefined, n),
    remove: async (e, r, i, l, c) => Fa(e, "DELETE", r, l, c, i, n)
  };
}
const Zx = qp("storage");
const {
  get: Js,
  post: xn,
  put: Wo,
  head: e_,
  remove: Qs
} = Zx;
const Vt = qp("vectors");
var na = class {
  constructor(n, e = {}, r, i = "storage") {
    this.shouldThrowOnError = false;
    this.url = n;
    this.headers = Kx(e);
    this.fetch = Gx(r);
    this.namespace = i;
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  setHeader(n, e) {
    this.headers = zo(this.headers, n, e);
    return this;
  }
  async handleOperation(n) {
    var e = this;
    try {
      return {
        data: await n(),
        error: null
      };
    } catch (r) {
      if (e.shouldThrowOnError) {
        throw r;
      }
      if (nl(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
};
let Hp;
Hp = Symbol.toStringTag;
var t_ = class {
  constructor(n, e) {
    this.downloadFn = n;
    this.shouldThrowOnError = e;
    this[Hp] = "StreamDownloadBuilder";
    this.promise = null;
  }
  then(n, e) {
    return this.getPromise().then(n, e);
  }
  catch(n) {
    return this.getPromise().catch(n);
  }
  finally(n) {
    return this.getPromise().finally(n);
  }
  getPromise() {
    this.promise ||= this.execute();
    return this.promise;
  }
  async execute() {
    var n = this;
    try {
      return {
        data: (await n.downloadFn()).body,
        error: null
      };
    } catch (e) {
      if (n.shouldThrowOnError) {
        throw e;
      }
      if (nl(e)) {
        return {
          data: null,
          error: e
        };
      }
      throw e;
    }
  }
};
let Vp;
Vp = Symbol.toStringTag;
var n_ = class {
  constructor(n, e) {
    this.downloadFn = n;
    this.shouldThrowOnError = e;
    this[Vp] = "BlobDownloadBuilder";
    this.promise = null;
  }
  asStream() {
    return new t_(this.downloadFn, this.shouldThrowOnError);
  }
  then(n, e) {
    return this.getPromise().then(n, e);
  }
  catch(n) {
    return this.getPromise().catch(n);
  }
  finally(n) {
    return this.getPromise().finally(n);
  }
  getPromise() {
    this.promise ||= this.execute();
    return this.promise;
  }
  async execute() {
    var n = this;
    try {
      return {
        data: await (await n.downloadFn()).blob(),
        error: null
      };
    } catch (e) {
      if (n.shouldThrowOnError) {
        throw e;
      }
      if (nl(e)) {
        return {
          data: null,
          error: e
        };
      }
      throw e;
    }
  }
};
const Qc = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
};
const xm = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: false
};
var r_ = class extends na {
  constructor(n, e = {}, r, i) {
    super(n, e, i, "storage");
    this.bucketId = r;
  }
  async uploadOrUpdate(n, e, r, i) {
    var l = this;
    return l.handleOperation(async () => {
      let c;
      const d = xe(xe({}, xm), i);
      let h = xe(xe({}, l.headers), n === "POST" && {
        "x-upsert": String(d.upsert)
      });
      const m = d.metadata;
      if (typeof Blob !== "undefined" && r instanceof Blob || typeof FormData !== "undefined" && r instanceof FormData) {
        c = l.prepareUploadFormData(r, d);
      } else {
        c = r;
        h["cache-control"] = `max-age=${d.cacheControl}`;
        h["content-type"] = d.contentType;
        if (d.contentEncoding) {
          h["content-encoding"] = d.contentEncoding;
        }
        if (m) {
          h["x-metadata"] = l.toBase64(l.encodeMetadata(m));
        }
        if ((typeof ReadableStream !== "undefined" && c instanceof ReadableStream || c && typeof c == "object" && "pipe" in c && typeof c.pipe == "function") && !d.duplex) {
          d.duplex = "half";
        }
      }
      if (i != null && i.headers) {
        for (const [_, v] of Object.entries(i.headers)) {
          h = zo(h, _, v);
        }
      }
      const g = l._removeEmptyFolders(e);
      const w = l._getFinalPath(g);
      const y = await (n == "PUT" ? Wo : xn)(l.fetch, `${l.url}/object/${w}`, c, xe({
        headers: h
      }, d != null && d.duplex ? {
        duplex: d.duplex
      } : {}));
      return {
        path: g,
        id: y.Id,
        fullPath: y.Key
      };
    });
  }
  async upload(n, e, r) {
    return this.uploadOrUpdate("POST", n, e, r);
  }
  async uploadToSignedUrl(n, e, r, i) {
    var l = this;
    const c = l._removeEmptyFolders(n);
    const d = l._getFinalPath(c);
    const h = new URL(`${l.url}/object/upload/sign/${d}`);
    h.searchParams.set("token", e);
    return l.handleOperation(async () => {
      let m;
      const g = xe(xe({}, xm), i);
      let w = xe(xe({}, l.headers), {
        "x-upsert": String(g.upsert)
      });
      const y = g.metadata;
      if (typeof Blob !== "undefined" && r instanceof Blob || typeof FormData !== "undefined" && r instanceof FormData) {
        m = l.prepareUploadFormData(r, g);
      } else {
        m = r;
        w["cache-control"] = `max-age=${g.cacheControl}`;
        w["content-type"] = g.contentType;
        if (g.contentEncoding) {
          w["content-encoding"] = g.contentEncoding;
        }
        if (y) {
          w["x-metadata"] = l.toBase64(l.encodeMetadata(y));
        }
        if ((typeof ReadableStream !== "undefined" && m instanceof ReadableStream || m && typeof m == "object" && "pipe" in m && typeof m.pipe == "function") && !g.duplex) {
          g.duplex = "half";
        }
      }
      if (i != null && i.headers) {
        for (const [_, v] of Object.entries(i.headers)) {
          w = zo(w, _, v);
        }
      }
      return {
        path: c,
        fullPath: (await Wo(l.fetch, h.toString(), m, xe({
          headers: w
        }, g != null && g.duplex ? {
          duplex: g.duplex
        } : {}))).Key
      };
    });
  }
  async createSignedUploadUrl(n, e) {
    var r = this;
    return r.handleOperation(async () => {
      let i = r._getFinalPath(n);
      const l = xe({}, r.headers);
      if (e != null && e.upsert) {
        l["x-upsert"] = "true";
      }
      const c = await xn(r.fetch, `${r.url}/object/upload/sign/${i}`, {}, {
        headers: l
      });
      const d = new URL(r.url + c.url);
      const h = d.searchParams.get("token");
      if (!h) {
        throw new tl("No token returned by API");
      }
      return {
        signedUrl: d.toString(),
        path: n,
        token: h
      };
    });
  }
  async update(n, e, r) {
    return this.uploadOrUpdate("PUT", n, e, r);
  }
  async move(n, e, r) {
    var i = this;
    return i.handleOperation(async () => await xn(i.fetch, `${i.url}/object/move`, {
      bucketId: i.bucketId,
      sourceKey: n,
      destinationKey: e,
      destinationBucket: r == null ? undefined : r.destinationBucket,
      sourceVersionId: r == null ? undefined : r.sourceVersionId
    }, {
      headers: i.headers
    }));
  }
  async copy(n, e, r) {
    var i = this;
    return i.handleOperation(async () => {
      const l = r;
      return {
        path: (await xn(i.fetch, `${i.url}/object/copy`, {
          bucketId: i.bucketId,
          sourceKey: n,
          destinationKey: e,
          destinationBucket: r == null ? undefined : r.destinationBucket,
          sourceVersionId: r == null ? undefined : r.sourceVersionId,
          copyMetadata: typeof (l == null ? undefined : l.copyMetadata) == "boolean" ? l.copyMetadata : undefined,
          metadata: (l == null ? undefined : l.copyMetadata) === false ? l.metadata : undefined
        }, {
          headers: i.headers
        })).Key
      };
    });
  }
  async createSignedUrl(n, e, r) {
    var i = this;
    return i.handleOperation(async () => {
      let l = i._getFinalPath(n);
      const c = typeof (r == null ? undefined : r.transform) == "object" && r.transform !== null && Object.keys(r.transform).length > 0;
      let d = await xn(i.fetch, `${i.url}/object/sign/${l}`, xe(xe({
        expiresIn: e
      }, c ? {
        transform: r.transform
      } : {}), (r == null ? undefined : r.versionId) != null ? {
        versionId: r.versionId
      } : {}), {
        headers: i.headers
      });
      const h = new URLSearchParams();
      if (r != null && r.download) {
        h.set("download", r.download === true ? "" : r.download);
      }
      if ((r == null ? undefined : r.cacheNonce) != null) {
        h.set("cacheNonce", String(r.cacheNonce));
      }
      const m = h.toString();
      return {
        signedUrl: encodeURI(`${i.url}${d.signedURL}${m ? `&${m}` : ""}`)
      };
    });
  }
  async createSignedUrls(n, e, r) {
    var i = this;
    return i.handleOperation(async () => {
      const l = await xn(i.fetch, `${i.url}/object/sign/${i.bucketId}`, {
        expiresIn: e,
        paths: n
      }, {
        headers: i.headers
      });
      const c = new URLSearchParams();
      if (r != null && r.download) {
        c.set("download", r.download === true ? "" : r.download);
      }
      if ((r == null ? undefined : r.cacheNonce) != null) {
        c.set("cacheNonce", String(r.cacheNonce));
      }
      const d = c.toString();
      return l.map(h => xe(xe({}, h), {}, {
        signedUrl: h.signedURL ? encodeURI(`${i.url}${h.signedURL}${d ? `&${d}` : ""}`) : null
      }));
    });
  }
  download(n, e, r) {
    const i = typeof (e == null ? undefined : e.transform) == "object" && e.transform !== null && Object.keys(e.transform).length > 0 ? "render/image/authenticated" : "object";
    const l = new URLSearchParams();
    if (e != null && e.transform) {
      this.applyTransformOptsToQuery(l, e.transform);
    }
    if ((e == null ? undefined : e.cacheNonce) != null) {
      l.set("cacheNonce", String(e.cacheNonce));
    }
    if ((e == null ? undefined : e.versionId) != null) {
      l.set("versionId", String(e.versionId));
    }
    const c = l.toString();
    const d = this._getFinalPath(n);
    const h = () => Js(this.fetch, `${this.url}/${i}/${d}${c ? `?${c}` : ""}`, {
      headers: this.headers,
      noResolveJson: true
    }, r);
    return new n_(h, this.shouldThrowOnError);
  }
  async info(n, e) {
    var r = this;
    const i = r._getFinalPath(n);
    const l = new URLSearchParams();
    if ((e == null ? undefined : e.versionId) != null) {
      l.set("versionId", String(e.versionId));
    }
    const c = l.toString();
    return r.handleOperation(async () => bu(await Js(r.fetch, `${r.url}/object/info/${i}${c ? `?${c}` : ""}`, {
      headers: r.headers
    })));
  }
  async exists(n) {
    var e = this;
    const r = e._getFinalPath(n);
    try {
      await e_(e.fetch, `${e.url}/object/${r}`, {
        headers: e.headers
      });
      return {
        data: true,
        error: null
      };
    } catch (l) {
      if (e.shouldThrowOnError) {
        throw l;
      }
      if (nl(l)) {
        const c = l instanceof ku ? l.status : l instanceof Wp ? l.originalError?.status : undefined;
        if (c !== undefined && [400, 404].includes(c)) {
          return {
            data: false,
            error: l
          };
        }
      }
      throw l;
    }
  }
  getPublicUrl(n, e) {
    const r = this._getFinalPath(n);
    const i = new URLSearchParams();
    if (e != null && e.download) {
      i.set("download", e.download === true ? "" : e.download);
    }
    if (e != null && e.transform) {
      this.applyTransformOptsToQuery(i, e.transform);
    }
    if ((e == null ? undefined : e.cacheNonce) != null) {
      i.set("cacheNonce", String(e.cacheNonce));
    }
    if ((e == null ? undefined : e.versionId) != null) {
      i.set("versionId", String(e.versionId));
    }
    const l = i.toString();
    const c = typeof (e == null ? undefined : e.transform) == "object" && e.transform !== null && Object.keys(e.transform).length > 0 ? "render/image" : "object";
    return {
      data: {
        publicUrl: encodeURI(`${this.url}/${c}/public/${r}`) + (l ? `?${l}` : "")
      }
    };
  }
  async remove(n) {
    var e = this;
    return e.handleOperation(async () => await Qs(e.fetch, `${e.url}/object/${e.bucketId}`, {
      prefixes: n
    }, {
      headers: e.headers
    }));
  }
  async purgeCache(n, e, r) {
    var i = this;
    return i.handleOperation(async () => {
      const l = Su(i._getFinalPath(n));
      const c = new URLSearchParams();
      if (e != null && e.transformations) {
        c.set("transformations", "true");
      }
      const d = c.toString();
      return await Qs(i.fetch, `${i.url}/cdn/${l}${d ? `?${d}` : ""}`, {}, {
        headers: i.headers
      }, r);
    });
  }
  async list(n, e, r) {
    var i = this;
    return i.handleOperation(async () => {
      const l = e != null && e.sortBy ? xe(xe({}, Qc.sortBy), e.sortBy) : Qc.sortBy;
      const c = xe(xe(xe({}, Qc), e), {}, {
        sortBy: l,
        prefix: n || ""
      });
      return await xn(i.fetch, `${i.url}/object/list/${i.bucketId}`, c, {
        headers: i.headers
      }, r);
    });
  }
  async listV2(n, e) {
    var r = this;
    return r.handleOperation(async () => {
      const i = xe({}, n);
      return await xn(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, i, {
        headers: r.headers
      }, e);
    });
  }
  prepareUploadFormData(n, e) {
    const r = new FormData();
    const i = [];
    if (n instanceof FormData) {
      n.forEach((l, c) => {
        if (typeof l == "string") {
          r.append(c, l);
        } else {
          i.push([c, l]);
        }
      });
    } else {
      i.push(["", n]);
    }
    if (!r.has("cacheControl")) {
      r.append("cacheControl", e.cacheControl);
    }
    if (e.metadata && !r.has("metadata")) {
      r.append("metadata", this.encodeMetadata(e.metadata));
    }
    if (e.contentEncoding && !r.has("contentEncoding")) {
      r.append("contentEncoding", e.contentEncoding);
    }
    for (const [l, c] of i) {
      r.append(l, c);
    }
    return r;
  }
  encodeMetadata(n) {
    return JSON.stringify(n);
  }
  toBase64(n) {
    if (typeof Buffer !== "undefined") {
      return Buffer.from(n).toString("base64");
    } else {
      return btoa(n);
    }
  }
  _getFinalPath(n) {
    return `${this.bucketId}/${n.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(n) {
    return n.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  applyTransformOptsToQuery(n, e) {
    if (e.width) {
      n.set("width", e.width.toString());
    }
    if (e.height) {
      n.set("height", e.height.toString());
    }
    if (e.resize) {
      n.set("resize", e.resize);
    }
    if (e.format) {
      n.set("format", e.format);
    }
    if (e.quality) {
      n.set("quality", e.quality.toString());
    }
    return n;
  }
};
const s_ = "2.118.0";
const ui = {
  "X-Client-Info": `storage-js/${s_}`
};
var a_ = class extends na {
  constructor(n, e = {}, r, i) {
    const l = new URL(n);
    if (i != null && i.useNewHostname && /supabase\.(co|in|red)$/.test(l.hostname) && !l.hostname.includes("storage.supabase.")) {
      l.hostname = l.hostname.replace("supabase.", "storage.supabase.");
    }
    const c = l.href.replace(/\/$/, "");
    const d = xe(xe({}, ui), e);
    super(c, d, r, "storage");
  }
  async listBuckets(n) {
    var e = this;
    return e.handleOperation(async () => {
      const r = e.listBucketOptionsToQueryString(n);
      return await Js(e.fetch, `${e.url}/bucket${r}`, {
        headers: e.headers
      });
    });
  }
  async getBucket(n) {
    var e = this;
    return e.handleOperation(async () => await Js(e.fetch, `${e.url}/bucket/${n}`, {
      headers: e.headers
    }));
  }
  async createBucket(n, e = {
    public: false
  }) {
    var r = this;
    return r.handleOperation(async () => await xn(r.fetch, `${r.url}/bucket`, {
      id: n,
      name: n,
      type: e.type,
      public: e.public,
      file_size_limit: e.fileSizeLimit,
      allowed_mime_types: e.allowedMimeTypes,
      versioning_status: e.versioningStatus
    }, {
      headers: r.headers
    }));
  }
  async updateBucket(n, e) {
    var r = this;
    return r.handleOperation(async () => await Wo(r.fetch, `${r.url}/bucket/${n}`, {
      id: n,
      name: n,
      public: e.public,
      file_size_limit: e.fileSizeLimit,
      allowed_mime_types: e.allowedMimeTypes,
      versioning_status: e.versioningStatus
    }, {
      headers: r.headers
    }));
  }
  async emptyBucket(n) {
    var e = this;
    return e.handleOperation(async () => await xn(e.fetch, `${e.url}/bucket/${n}/empty`, {}, {
      headers: e.headers
    }));
  }
  async deleteBucket(n) {
    var e = this;
    return e.handleOperation(async () => await Qs(e.fetch, `${e.url}/bucket/${n}`, {}, {
      headers: e.headers
    }));
  }
  async getBucketLifecycle(n) {
    var e = this;
    return e.handleOperation(async () => await Js(e.fetch, e.bucketLifecycleUrl(n), {
      headers: e.headers
    }));
  }
  async updateBucketLifecycle(n, e) {
    var r = this;
    return r.handleOperation(async () => await Wo(r.fetch, r.bucketLifecycleUrl(n), e, {
      headers: r.headers
    }));
  }
  async deleteBucketLifecycle(n) {
    var e = this;
    return e.handleOperation(async () => await Qs(e.fetch, e.bucketLifecycleUrl(n), {}, {
      headers: e.headers
    }));
  }
  async purgeBucketCache(n, e, r) {
    var i = this;
    return i.handleOperation(async () => {
      const l = new URLSearchParams();
      if (e != null && e.transformations) {
        l.set("transformations", "true");
      }
      const c = l.toString();
      return await Qs(i.fetch, `${i.url}/cdn/${Su(n)}${c ? `?${c}` : ""}`, {}, {
        headers: i.headers
      }, r);
    });
  }
  bucketLifecycleUrl(n) {
    return `${this.url}/bucket/${Su(n)}/lifecycle`;
  }
  listBucketOptionsToQueryString(n) {
    const e = {};
    if (n) {
      if ("limit" in n) {
        e.limit = String(n.limit);
      }
      if ("offset" in n) {
        e.offset = String(n.offset);
      }
      if (n.search) {
        e.search = n.search;
      }
      if (n.sortColumn) {
        e.sortColumn = n.sortColumn;
      }
      if (n.sortOrder) {
        e.sortOrder = n.sortOrder;
      }
    }
    if (Object.keys(e).length > 0) {
      return "?" + new URLSearchParams(e).toString();
    } else {
      return "";
    }
  }
};
var i_ = class extends na {
  constructor(n, e = {}, r) {
    const i = n.replace(/\/$/, "");
    const l = xe(xe({}, ui), e);
    super(i, l, r, "storage");
  }
  async createBucket(n) {
    var e = this;
    return e.handleOperation(async () => await xn(e.fetch, `${e.url}/bucket`, {
      name: n
    }, {
      headers: e.headers
    }));
  }
  async listBuckets(n) {
    var e = this;
    return e.handleOperation(async () => {
      const r = new URLSearchParams();
      if ((n == null ? undefined : n.limit) !== undefined) {
        r.set("limit", n.limit.toString());
      }
      if ((n == null ? undefined : n.offset) !== undefined) {
        r.set("offset", n.offset.toString());
      }
      if (n != null && n.sortColumn) {
        r.set("sortColumn", n.sortColumn);
      }
      if (n != null && n.sortOrder) {
        r.set("sortOrder", n.sortOrder);
      }
      if (n != null && n.search) {
        r.set("search", n.search);
      }
      const i = r.toString();
      const l = i ? `${e.url}/bucket?${i}` : `${e.url}/bucket`;
      return await Js(e.fetch, l, {
        headers: e.headers
      });
    });
  }
  async deleteBucket(n) {
    var e = this;
    return e.handleOperation(async () => await Qs(e.fetch, `${e.url}/bucket/${n}`, {}, {
      headers: e.headers
    }));
  }
  from(n) {
    var e = this;
    if (!Qx(n)) {
      throw new tl("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    }
    const r = new Wx({
      baseUrl: this.url,
      catalogName: n,
      auth: {
        type: "custom",
        getHeaders: async () => e.headers
      },
      fetch: this.fetch
    });
    const i = this.shouldThrowOnError;
    return new Proxy(r, {
      get(l, c) {
        const d = l[c];
        if (typeof d != "function") {
          return d;
        } else {
          return async (...h) => {
            try {
              return {
                data: await d.apply(l, h),
                error: null
              };
            } catch (m) {
              if (i) {
                throw m;
              }
              return {
                data: null,
                error: m
              };
            }
          };
        }
      }
    });
  }
};
var o_ = class extends na {
  constructor(n, e = {}, r) {
    const i = n.replace(/\/$/, "");
    const l = xe(xe({}, ui), {}, {
      "Content-Type": "application/json"
    }, e);
    super(i, l, r, "vectors");
  }
  async createIndex(n) {
    var e = this;
    return e.handleOperation(async () => (await Vt.post(e.fetch, `${e.url}/CreateIndex`, n, {
      headers: e.headers
    })) || {});
  }
  async getIndex(n, e) {
    var r = this;
    return r.handleOperation(async () => await Vt.post(r.fetch, `${r.url}/GetIndex`, {
      vectorBucketName: n,
      indexName: e
    }, {
      headers: r.headers
    }));
  }
  async listIndexes(n) {
    var e = this;
    return e.handleOperation(async () => await Vt.post(e.fetch, `${e.url}/ListIndexes`, n, {
      headers: e.headers
    }));
  }
  async deleteIndex(n, e) {
    var r = this;
    return r.handleOperation(async () => (await Vt.post(r.fetch, `${r.url}/DeleteIndex`, {
      vectorBucketName: n,
      indexName: e
    }, {
      headers: r.headers
    })) || {});
  }
};
var l_ = class extends na {
  constructor(n, e = {}, r) {
    const i = n.replace(/\/$/, "");
    const l = xe(xe({}, ui), {}, {
      "Content-Type": "application/json"
    }, e);
    super(i, l, r, "vectors");
  }
  async putVectors(n) {
    var e = this;
    if (n.vectors.length < 1 || n.vectors.length > 500) {
      throw new Error("Vector batch size must be between 1 and 500 items");
    }
    return e.handleOperation(async () => (await Vt.post(e.fetch, `${e.url}/PutVectors`, n, {
      headers: e.headers
    })) || {});
  }
  async getVectors(n) {
    var e = this;
    return e.handleOperation(async () => await Vt.post(e.fetch, `${e.url}/GetVectors`, n, {
      headers: e.headers
    }));
  }
  async listVectors(n) {
    var e = this;
    if (n.segmentCount !== undefined) {
      if (n.segmentCount < 1 || n.segmentCount > 16) {
        throw new Error("segmentCount must be between 1 and 16");
      }
      if (n.segmentIndex !== undefined && (n.segmentIndex < 0 || n.segmentIndex >= n.segmentCount)) {
        throw new Error(`segmentIndex must be between 0 and ${n.segmentCount - 1}`);
      }
    }
    return e.handleOperation(async () => await Vt.post(e.fetch, `${e.url}/ListVectors`, n, {
      headers: e.headers
    }));
  }
  async queryVectors(n) {
    var e = this;
    return e.handleOperation(async () => await Vt.post(e.fetch, `${e.url}/QueryVectors`, n, {
      headers: e.headers
    }));
  }
  async deleteVectors(n) {
    var e = this;
    if (n.keys.length < 1 || n.keys.length > 500) {
      throw new Error("Keys batch size must be between 1 and 500 items");
    }
    return e.handleOperation(async () => (await Vt.post(e.fetch, `${e.url}/DeleteVectors`, n, {
      headers: e.headers
    })) || {});
  }
};
var c_ = class extends na {
  constructor(n, e = {}, r) {
    const i = n.replace(/\/$/, "");
    const l = xe(xe({}, ui), {}, {
      "Content-Type": "application/json"
    }, e);
    super(i, l, r, "vectors");
  }
  async createBucket(n) {
    var e = this;
    return e.handleOperation(async () => (await Vt.post(e.fetch, `${e.url}/CreateVectorBucket`, {
      vectorBucketName: n
    }, {
      headers: e.headers
    })) || {});
  }
  async getBucket(n) {
    var e = this;
    return e.handleOperation(async () => await Vt.post(e.fetch, `${e.url}/GetVectorBucket`, {
      vectorBucketName: n
    }, {
      headers: e.headers
    }));
  }
  async listBuckets(n = {}) {
    var e = this;
    return e.handleOperation(async () => await Vt.post(e.fetch, `${e.url}/ListVectorBuckets`, n, {
      headers: e.headers
    }));
  }
  async deleteBucket(n) {
    var e = this;
    return e.handleOperation(async () => (await Vt.post(e.fetch, `${e.url}/DeleteVectorBucket`, {
      vectorBucketName: n
    }, {
      headers: e.headers
    })) || {});
  }
};
var u_ = class extends c_ {
  constructor(n, e = {}) {
    super(n, e.headers || {}, e.fetch);
  }
  from(n) {
    return new d_(this.url, this.headers, n, this.fetch);
  }
  async createBucket(n) {
    var e = () => super.createBucket;
    var r = this;
    return e().call(r, n);
  }
  async getBucket(n) {
    var e = () => super.getBucket;
    var r = this;
    return e().call(r, n);
  }
  async listBuckets(n = {}) {
    var e = () => super.listBuckets;
    var r = this;
    return e().call(r, n);
  }
  async deleteBucket(n) {
    var e = () => super.deleteBucket;
    var r = this;
    return e().call(r, n);
  }
};
var d_ = class extends o_ {
  constructor(n, e, r, i) {
    super(n, e, i);
    this.vectorBucketName = r;
  }
  async createIndex(n) {
    var e = () => super.createIndex;
    var r = this;
    return e().call(r, xe(xe({}, n), {}, {
      vectorBucketName: r.vectorBucketName
    }));
  }
  async listIndexes(n = {}) {
    var e = () => super.listIndexes;
    var r = this;
    return e().call(r, xe(xe({}, n), {}, {
      vectorBucketName: r.vectorBucketName
    }));
  }
  async getIndex(n) {
    var e = () => super.getIndex;
    var r = this;
    return e().call(r, r.vectorBucketName, n);
  }
  async deleteIndex(n) {
    var e = () => super.deleteIndex;
    var r = this;
    return e().call(r, r.vectorBucketName, n);
  }
  index(n) {
    return new h_(this.url, this.headers, this.vectorBucketName, n, this.fetch);
  }
};
var h_ = class extends l_ {
  constructor(n, e, r, i, l) {
    super(n, e, l);
    this.vectorBucketName = r;
    this.indexName = i;
  }
  async putVectors(n) {
    var e = () => super.putVectors;
    var r = this;
    return e().call(r, xe(xe({}, n), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  async getVectors(n) {
    var e = () => super.getVectors;
    var r = this;
    return e().call(r, xe(xe({}, n), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  async listVectors(n = {}) {
    var e = () => super.listVectors;
    var r = this;
    return e().call(r, xe(xe({}, n), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  async queryVectors(n) {
    var e = () => super.queryVectors;
    var r = this;
    return e().call(r, xe(xe({}, n), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  async deleteVectors(n) {
    var e = () => super.deleteVectors;
    var r = this;
    return e().call(r, xe(xe({}, n), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
};
var f_ = class extends a_ {
  constructor(n, e = {}, r, i) {
    super(n, e, r, i);
  }
  from(n) {
    return new r_(this.url, this.headers, n, this.fetch);
  }
  get vectors() {
    return new u_(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  get analytics() {
    return new i_(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const Kp = "2.118.0";
const Yn = 30000;
const qa = 3;
const Yc = qa * Yn;
const m_ = Yn * 2;
const p_ = "http://localhost:9999";
const g_ = "supabase.auth.token";
const v_ = {
  "X-Client-Info": `gotrue-js/${Kp}`
};
const Cu = "X-Supabase-Api-Version";
const Gp = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
};
const y_ = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
const as = "sb_flow_id";
const w_ = 5;
const x_ = 600000;
class si extends Error {
  constructor(e, r, i) {
    super(e);
    this.__isAuthError = true;
    this.name = "AuthError";
    this.status = r;
    this.code = i;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code
    };
  }
}
function ne(n) {
  return typeof n == "object" && n !== null && "__isAuthError" in n;
}
class __ extends si {
  constructor(e, r, i) {
    super(e, r, i);
    this.name = "AuthApiError";
    this.status = r;
    this.code = i;
  }
}
function _m(n) {
  return ne(n) && n.name === "AuthApiError";
}
class _n extends si {
  constructor(e, r) {
    super(e);
    this.name = "AuthUnknownError";
    this.originalError = r;
  }
}
class $n extends si {
  constructor(e, r, i, l) {
    super(e, i, l);
    this.name = r;
    this.status = i;
  }
}
class ft extends $n {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, undefined);
  }
}
function So(n) {
  return ne(n) && n.name === "AuthSessionMissingError";
}
class zs extends $n {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, undefined);
  }
}
class Co extends $n {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, undefined);
  }
}
class Eo extends $n {
  constructor(e, r = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, undefined);
    this.details = null;
    this.details = r;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      details: this.details
    });
  }
}
function j_(n) {
  return ne(n) && n.name === "AuthImplicitGrantRedirectError";
}
class jm extends $n {
  constructor(e, r = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, undefined);
    this.details = null;
    this.details = r;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      details: this.details
    });
  }
}
class k_ extends $n {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class Io extends $n {
  constructor(e, r) {
    super(e, "AuthRetryableFetchError", r, undefined);
  }
}
function No(n) {
  return ne(n) && n.name === "AuthRetryableFetchError";
}
class km extends $n {
  constructor(e = "Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)") {
    super(e, "AuthRefreshDiscardedError", 409, undefined);
  }
}
function bm(n) {
  return ne(n) && n.name === "AuthRefreshDiscardedError";
}
class Sm extends $n {
  constructor(e, r, i) {
    super(e, "AuthWeakPasswordError", r, "weak_password");
    this.reasons = i;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      reasons: this.reasons
    });
  }
}
class qo extends $n {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Ho = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
const Cm = ` 	
\r=`.split("");
const b_ = (() => {
  const n = new Array(128);
  for (let e = 0; e < n.length; e += 1) {
    n[e] = -1;
  }
  for (let e = 0; e < Cm.length; e += 1) {
    n[Cm[e].charCodeAt(0)] = -2;
  }
  for (let e = 0; e < Ho.length; e += 1) {
    n[Ho[e].charCodeAt(0)] = e;
  }
  return n;
})();
function Em(n, e, r) {
  if (n !== null) {
    e.queue = e.queue << 8 | n;
    e.queuedBits += 8;
    while (e.queuedBits >= 6) {
      const i = e.queue >> e.queuedBits - 6 & 63;
      r(Ho[i]);
      e.queuedBits -= 6;
    }
  } else if (e.queuedBits > 0) {
    e.queue = e.queue << 6 - e.queuedBits;
    e.queuedBits = 6;
    while (e.queuedBits >= 6) {
      const i = e.queue >> e.queuedBits - 6 & 63;
      r(Ho[i]);
      e.queuedBits -= 6;
    }
  }
}
function Jp(n, e, r) {
  const i = b_[n];
  if (i > -1) {
    e.queue = e.queue << 6 | i;
    e.queuedBits += 6;
    while (e.queuedBits >= 8) {
      r(e.queue >> e.queuedBits - 8 & 255);
      e.queuedBits -= 8;
    }
  } else {
    if (i === -2) {
      return;
    }
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`);
  }
}
function Nm(n) {
  const e = [];
  const r = d => {
    e.push(String.fromCodePoint(d));
  };
  const i = {
    utf8seq: 0,
    codepoint: 0
  };
  const l = {
    queue: 0,
    queuedBits: 0
  };
  const c = d => {
    E_(d, i, r);
  };
  for (let d = 0; d < n.length; d += 1) {
    Jp(n.charCodeAt(d), l, c);
  }
  return e.join("");
}
function S_(n, e) {
  if (n <= 127) {
    e(n);
    return;
  } else if (n <= 2047) {
    e(n >> 6 | 192);
    e(n & 63 | 128);
    return;
  } else if (n <= 65535) {
    e(n >> 12 | 224);
    e(n >> 6 & 63 | 128);
    e(n & 63 | 128);
    return;
  } else if (n <= 1114111) {
    e(n >> 18 | 240);
    e(n >> 12 & 63 | 128);
    e(n >> 6 & 63 | 128);
    e(n & 63 | 128);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`);
}
function C_(n, e) {
  for (let r = 0; r < n.length; r += 1) {
    let i = n.charCodeAt(r);
    if (i > 55295 && i <= 56319) {
      const l = (i - 55296) * 1024 & 65535;
      i = (n.charCodeAt(r + 1) - 56320 & 65535 | l) + 65536;
      r += 1;
    }
    S_(i, e);
  }
}
function E_(n, e, r) {
  if (e.utf8seq === 0) {
    if (n <= 127) {
      r(n);
      return;
    }
    for (let i = 1; i < 6; i += 1) {
      if ((n >> 7 - i & 1) === 0) {
        e.utf8seq = i;
        break;
      }
    }
    if (e.utf8seq === 2) {
      e.codepoint = n & 31;
    } else if (e.utf8seq === 3) {
      e.codepoint = n & 15;
    } else if (e.utf8seq === 4) {
      e.codepoint = n & 7;
    } else {
      throw new Error("Invalid UTF-8 sequence");
    }
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (n <= 127) {
      throw new Error("Invalid UTF-8 sequence");
    }
    e.codepoint = e.codepoint << 6 | n & 63;
    e.utf8seq -= 1;
    if (e.utf8seq === 0) {
      r(e.codepoint);
    }
  }
}
function Ys(n) {
  const e = [];
  const r = {
    queue: 0,
    queuedBits: 0
  };
  const i = l => {
    e.push(l);
  };
  for (let l = 0; l < n.length; l += 1) {
    Jp(n.charCodeAt(l), r, i);
  }
  return new Uint8Array(e);
}
function N_(n) {
  const e = [];
  C_(n, r => e.push(r));
  return new Uint8Array(e);
}
function is(n) {
  const e = [];
  const r = {
    queue: 0,
    queuedBits: 0
  };
  const i = l => {
    e.push(l);
  };
  n.forEach(l => Em(l, r, i));
  Em(null, r, i);
  return e.join("");
}
function Qp(n) {
  return Math.round(Date.now() / 1000) + n;
}
function T_() {
  return Symbol("auth-callback");
}
const vt = () => typeof window !== "undefined" && typeof document !== "undefined";
const ts = {
  tested: false,
  writable: false
};
const Yp = () => {
  if (!vt()) {
    return false;
  }
  try {
    if (typeof globalThis.localStorage != "object") {
      return false;
    }
  } catch {
    return false;
  }
  if (ts.tested) {
    return ts.writable;
  }
  const n = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(n, n);
    globalThis.localStorage.removeItem(n);
    ts.tested = true;
    ts.writable = true;
  } catch {
    ts.tested = true;
    ts.writable = false;
  }
  return ts.writable;
};
function Tm(n) {
  const e = {};
  const r = new URL(n);
  if (r.hash && r.hash[0] === "#") {
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((l, c) => {
        e[c] = l;
      });
    } catch {}
  }
  r.searchParams.forEach((i, l) => {
    e[l] = i;
  });
  return e;
}
const Xp = n => n ? (...e) => n(...e) : (...e) => fetch(...e);
const R_ = n => typeof n == "object" && n !== null && "status" in n && "ok" in n && "json" in n && typeof n.json == "function";
const Zn = async (n, e, r) => {
  await n.setItem(e, JSON.stringify(r));
};
const kt = async (n, e) => {
  const r = await n.getItem(e);
  if (!r) {
    return null;
  }
  try {
    return JSON.parse(r);
  } catch {
    return null;
  }
};
const Mt = async (n, e) => {
  await n.removeItem(e);
};
class rl {
  constructor() {
    this.promise = new rl.promiseConstructor((e, r) => {
      this.resolve = e;
      this.reject = r;
    });
  }
}
rl.promiseConstructor = Promise;
function To(n) {
  const e = n.split(".");
  if (e.length !== 3) {
    throw new qo("Invalid JWT structure");
  }
  for (let i = 0; i < e.length; i++) {
    if (!y_.test(e[i])) {
      throw new qo("JWT not in base64url format");
    }
  }
  return {
    header: JSON.parse(Nm(e[0])),
    payload: JSON.parse(Nm(e[1])),
    signature: Ys(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function I_(n) {
  return await new Promise(e => {
    setTimeout(() => e(null), n);
  });
}
function A_(n, e) {
  return new Promise((i, l) => {
    (async () => {
      for (let c = 0; c < Infinity; c++) {
        try {
          const d = await n(c);
          if (!e(c, null, d)) {
            i(d);
            return;
          }
        } catch (d) {
          if (!e(c, d)) {
            l(d);
            return;
          }
        }
      }
    })();
  });
}
function Zp(n) {
  return ("0" + n.toString(16)).substr(-2);
}
function P_() {
  const e = new Uint32Array(56);
  if (typeof crypto === "undefined") {
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    const i = r.length;
    let l = "";
    for (let c = 0; c < 56; c++) {
      l += r.charAt(Math.floor(Math.random() * i));
    }
    return l;
  }
  crypto.getRandomValues(e);
  return Array.from(e, Zp).join("");
}
async function O_(n) {
  const r = new TextEncoder().encode(n);
  const i = await crypto.subtle.digest("SHA-256", r);
  const l = new Uint8Array(i);
  return Array.from(l).map(c => String.fromCharCode(c)).join("");
}
async function $_(n) {
  if (typeof crypto === "undefined" || typeof crypto.subtle === "undefined" || typeof TextEncoder === "undefined") {
    console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.");
    return n;
  }
  const r = await O_(n);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
const L_ = /^[a-zA-Z0-9_-]{8,64}$/;
function Ao(n) {
  if (typeof n == "string" && L_.test(n)) {
    return n;
  } else {
    return null;
  }
}
function D_() {
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues == "function") {
    const e = new Uint8Array(16);
    crypto.getRandomValues(e);
    return Array.from(e, Zp).join("");
  }
  let n = "";
  for (let e = 0; e < 32; e++) {
    n += Math.floor(Math.random() * 16).toString(16);
  }
  return n;
}
const ea = (n, e) => `${n}-flow-${e}-code-verifier`;
const ai = n => `${n}-flows-code-verifier`;
async function Bu(n, e) {
  const r = await kt(n, ai(e));
  if (Array.isArray(r)) {
    return r.filter(i => Ao(i) !== null);
  } else {
    return [];
  }
}
async function M_(n, e, r, i, l) {
  await Zn(n, ea(e, r), i);
  const c = (await Bu(n, e)).filter(d => d !== r);
  for (c.push(r); c.length > w_;) {
    const d = c.shift();
    await Mt(n, ea(e, d));
    if (l != null) {
      l(d);
    }
  }
  await Zn(n, ai(e), c);
  await Zn(n, `${e}-code-verifier`, i);
}
async function U_(n, e, r) {
  if (r) {
    const l = await kt(n, ea(e, r));
    return {
      verifier: typeof l == "string" ? l : null,
      flowId: r
    };
  }
  const i = await kt(n, `${e}-code-verifier`);
  return {
    verifier: typeof i == "string" ? i : null,
    flowId: null
  };
}
async function wn(n, e, r) {
  const i = `${e}-code-verifier`;
  if (!r) {
    await Mt(n, i);
    return;
  }
  const l = ea(e, r);
  const c = await kt(n, l);
  await Mt(n, l);
  const d = await Bu(n, e);
  const h = d.filter(m => m !== r);
  if (h.length !== d.length) {
    if (h.length > 0) {
      await Zn(n, ai(e), h);
    } else {
      await Mt(n, ai(e));
    }
  }
  if (c != null && c === (await kt(n, i))) {
    await Mt(n, i);
  }
}
async function F_(n, e) {
  const r = await Bu(n, e);
  for (const i of r) {
    await Mt(n, ea(e, i));
  }
  await Mt(n, ai(e));
  await Mt(n, `${e}-code-verifier`);
}
function B_(n, e) {
  const r = n.indexOf("#");
  let i = r === -1 ? n : n.slice(0, r);
  const l = r === -1 ? "" : n.slice(r);
  const c = i.indexOf("?");
  if (c !== -1) {
    const h = i.slice(0, c);
    const m = i.slice(c + 1).split("&").filter(g => g !== "" && g !== as && !g.startsWith(`${as}=`));
    i = m.length > 0 ? `${h}?${m.join("&")}` : h;
  }
  const d = i.includes("?") ? "&" : "?";
  return `${i}${d}${as}=${encodeURIComponent(e)}${l}`;
}
async function z_(n, e, r = false, i) {
  const l = P_();
  let c = l;
  if (r) {
    c += "/recovery";
  }
  const d = D_();
  await M_(n, e, d, c, i);
  const h = await $_(l);
  return [h, l === h ? "plain" : "s256", d];
}
const W_ = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function q_(n) {
  const e = n.headers.get(Cu);
  if (!e || !e.match(W_)) {
    return null;
  }
  try {
    return new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function H_(n) {
  if (!n) {
    throw new Error("Missing exp claim");
  }
  const e = Math.floor(Date.now() / 1000);
  if (n <= e) {
    throw new Error("JWT has expired");
  }
}
function V_(n) {
  switch (n) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: {
          name: "SHA-256"
        }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const K_ = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function Kn(n) {
  if (!K_.test(n)) {
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
  }
}
function Ba(n) {
  if (!n.recoveryCodes) {
    throw new Error("@supabase/auth-js: the MFA recovery codes API is experimental and disabled by default. Enable it by passing `auth: { experimental: { recoveryCodes: true } }` to createClient (or to the GoTrueClient constructor).");
  }
}
function Xc() {
  const n = {};
  return new Proxy(n, {
    get: (e, r) => {
      if (r === "__isUserNotAvailableProxy") {
        return true;
      }
      if (typeof r == "symbol") {
        const i = r.toString();
        if (i === "Symbol(Symbol.toPrimitive)" || i === "Symbol(Symbol.toStringTag)" || i === "Symbol(util.inspect.custom)") {
          return;
        }
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (e, r) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (e, r) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function G_(n, e) {
  return new Proxy(n, {
    get: (r, i, l) => {
      if (i === "__isInsecureUserWarningProxy") {
        return true;
      }
      if (typeof i == "symbol") {
        const c = i.toString();
        if (c === "Symbol(Symbol.toPrimitive)" || c === "Symbol(Symbol.toStringTag)" || c === "Symbol(util.inspect.custom)" || c === "Symbol(nodejs.util.inspect.custom)") {
          return Reflect.get(r, i, l);
        }
      }
      if (!e.value && typeof i == "string") {
        console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.");
        e.value = true;
      }
      return Reflect.get(r, i, l);
    }
  });
}
function Rm(n) {
  return JSON.parse(JSON.stringify(n));
}
const ns = n => {
  if (typeof n == "object" && n !== null) {
    const e = n;
    if (typeof e.msg == "string") {
      return e.msg;
    }
    if (typeof e.message == "string") {
      return e.message;
    }
    if (typeof e.error_description == "string") {
      return e.error_description;
    }
    if (typeof e.error == "string") {
      return e.error;
    }
  }
  return JSON.stringify(n);
};
const Im = [500, 501, 502, 503, 504, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530];
async function Am(n) {
  if (!R_(n)) {
    throw new Io(ns(n), 0);
  }
  let r;
  try {
    r = await n.json();
  } catch (c) {
    throw Im.includes(n.status) ? new Io(n.statusText || `HTTP ${n.status}`, n.status) : new _n(ns(c), c);
  }
  if (Im.includes(n.status)) {
    throw new Io(ns(r), n.status);
  }
  let i;
  const l = q_(n);
  if (l && l.getTime() >= Gp["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string") {
    i = r.code;
  } else if (typeof r == "object" && r && typeof r.error_code == "string") {
    i = r.error_code;
  }
  if (i) {
    if (i === "weak_password") {
      throw new Sm(ns(r), n.status, r.weak_password?.reasons || []);
    }
    if (i === "session_not_found") {
      throw new ft();
    }
  } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((c, d) => c && typeof d == "string", true)) {
    throw new Sm(ns(r), n.status, r.weak_password.reasons);
  }
  throw new __(ns(r), n.status || 500, i);
}
const J_ = (n, e, r, i) => {
  const l = {
    method: n,
    headers: (e == null ? undefined : e.headers) || {}
  };
  if (n === "GET") {
    return l;
  } else {
    l.headers = Object.assign({
      "Content-Type": "application/json;charset=UTF-8"
    }, e == null ? undefined : e.headers);
    l.body = JSON.stringify(i);
    return Object.assign(Object.assign({}, l), r);
  }
};
async function ue(n, e, r, i) {
  const c = Object.assign({}, i == null ? undefined : i.headers);
  c[Cu] ||= Gp["2024-01-01"].name;
  if (i != null && i.jwt) {
    c.Authorization = `Bearer ${i.jwt}`;
  }
  const d = (i == null ? undefined : i.query) ?? {};
  if (i != null && i.redirectTo) {
    d.redirect_to = i.redirectTo;
  }
  const h = Object.keys(d).length ? "?" + new URLSearchParams(d).toString() : "";
  const m = await Q_(n, e, r + h, {
    headers: c,
    noResolveJson: i == null ? undefined : i.noResolveJson
  }, {}, i == null ? undefined : i.body);
  if (i != null && i.xform) {
    if (i == null) {
      return undefined;
    } else {
      return i.xform(m);
    }
  } else {
    return {
      data: Object.assign({}, m),
      error: null
    };
  }
}
async function Q_(n, e, r, i, l, c) {
  const d = J_(e, i, l, c);
  let h;
  try {
    h = await n(r, Object.assign({}, d));
  } catch (m) {
    throw new Io(ns(m), 0);
  }
  if (!h.ok) {
    await Am(h);
  }
  if (i != null && i.noResolveJson) {
    return h;
  }
  try {
    return await h.json();
  } catch (m) {
    await Am(m);
  }
}
function rn(n) {
  let r = null;
  if (Z_(n)) {
    r = Object.assign({}, n);
    if (!n.expires_at) {
      r.expires_at = Qp(n.expires_in);
    }
  }
  const i = n.user ?? (typeof (n == null ? undefined : n.id) == "string" ? n : null);
  return {
    data: {
      session: r,
      user: i
    },
    error: null
  };
}
function Pm(n) {
  const e = rn(n);
  if (!e.error && n.weak_password && typeof n.weak_password == "object" && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.message && typeof n.weak_password.message == "string" && n.weak_password.reasons.reduce((r, i) => r && typeof i == "string", true)) {
    e.data.weak_password = n.weak_password;
  }
  return e;
}
function Ar(n) {
  return {
    data: {
      user: n.user ?? n
    },
    error: null
  };
}
function Y_(n) {
  return {
    data: n,
    error: null
  };
}
function X_(n) {
  const {
    action_link: e,
    email_otp: r,
    hashed_token: i,
    redirect_to: l,
    verification_type: c
  } = n;
  const d = el(n, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]);
  const h = {
    action_link: e,
    email_otp: r,
    hashed_token: i,
    redirect_to: l,
    verification_type: c
  };
  const m = Object.assign({}, d);
  return {
    data: {
      properties: h,
      user: m
    },
    error: null
  };
}
function Om(n) {
  return n;
}
function Z_(n) {
  return !!n.access_token && !!n.refresh_token && !!n.expires_in;
}
const Zc = ["global", "local", "others"];
class ej {
  constructor({
    url: e = "",
    headers: r = {},
    fetch: i,
    experimental: l
  }) {
    this.url = e;
    this.headers = r;
    this.fetch = Xp(i);
    this.experimental = l ?? {};
    this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
    this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    };
    this.customProviders = {
      listProviders: this._listCustomProviders.bind(this),
      createProvider: this._createCustomProvider.bind(this),
      getProvider: this._getCustomProvider.bind(this),
      updateProvider: this._updateCustomProvider.bind(this),
      deleteProvider: this._deleteCustomProvider.bind(this)
    };
    this.passkey = {
      listPasskeys: this._adminListPasskeys.bind(this),
      deletePasskey: this._adminDeletePasskey.bind(this)
    };
  }
  async signOut(e, r = Zc[0]) {
    if (Zc.indexOf(r) < 0) {
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Zc.join(", ")}`);
    }
    try {
      await ue(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (i) {
      if (ne(i)) {
        return {
          data: null,
          error: i
        };
      }
      throw i;
    }
  }
  async inviteUserByEmail(e, r = {}) {
    try {
      return await ue(this.fetch, "POST", `${this.url}/invite`, {
        body: {
          email: e,
          data: r.data
        },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: Ar
      });
    } catch (i) {
      if (ne(i)) {
        return {
          data: {
            user: null
          },
          error: i
        };
      }
      throw i;
    }
  }
  async generateLink(e) {
    try {
      const {
        options: r
      } = e;
      const i = el(e, ["options"]);
      const l = Object.assign(Object.assign({}, i), r);
      if ("newEmail" in i) {
        l.new_email = i == null ? undefined : i.newEmail;
        delete l.newEmail;
      }
      return await ue(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: l,
        headers: this.headers,
        xform: X_,
        redirectTo: r == null ? undefined : r.redirectTo
      });
    } catch (r) {
      if (ne(r)) {
        return {
          data: {
            properties: null,
            user: null
          },
          error: r
        };
      }
      throw r;
    }
  }
  async createUser(e) {
    try {
      return await ue(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: Ar
      });
    } catch (r) {
      if (ne(r)) {
        return {
          data: {
            user: null
          },
          error: r
        };
      }
      throw r;
    }
  }
  async listUsers(e) {
    var r;
    var l;
    var h;
    try {
      const g = {
        nextPage: null,
        lastPage: 0,
        total: 0
      };
      const w = await ue(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: true,
        query: {
          page: ((r = e == null ? undefined : e.page) === null || r === undefined ? undefined : r.toString()) ?? "",
          per_page: ((l = e == null ? undefined : e.perPage) === null || l === undefined ? undefined : l.toString()) ?? ""
        },
        xform: Om
      });
      if (w.error) {
        throw w.error;
      }
      const y = await w.json();
      const _ = w.headers.get("x-total-count") ?? 0;
      const v = ((h = w.headers.get("link")) === null || h === undefined ? undefined : h.split(",")) ?? [];
      if (v.length > 0) {
        v.forEach(j => {
          const b = parseInt(j.split(";")[0].split("=")[1].substring(0, 1));
          const C = JSON.parse(j.split(";")[1].split("=")[1]);
          g[`${C}Page`] = b;
        });
        g.total = parseInt(_);
      }
      return {
        data: Object.assign(Object.assign({}, y), g),
        error: null
      };
    } catch (g) {
      if (ne(g)) {
        return {
          data: {
            users: []
          },
          error: g
        };
      }
      throw g;
    }
  }
  async getUserById(e) {
    Kn(e);
    try {
      return await ue(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: Ar
      });
    } catch (r) {
      if (ne(r)) {
        return {
          data: {
            user: null
          },
          error: r
        };
      }
      throw r;
    }
  }
  async updateUserById(e, r) {
    Kn(e);
    try {
      return await ue(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: r,
        headers: this.headers,
        xform: Ar
      });
    } catch (i) {
      if (ne(i)) {
        return {
          data: {
            user: null
          },
          error: i
        };
      }
      throw i;
    }
  }
  async deleteUser(e, r = false) {
    Kn(e);
    try {
      return await ue(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: r
        },
        xform: Ar
      });
    } catch (i) {
      if (ne(i)) {
        return {
          data: {
            user: null
          },
          error: i
        };
      }
      throw i;
    }
  }
  async _listFactors(e) {
    Kn(e.userId);
    try {
      const {
        data: r,
        error: i
      } = await ue(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: l => ({
          data: {
            factors: l
          },
          error: null
        })
      });
      return {
        data: r,
        error: i
      };
    } catch (r) {
      if (ne(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async _deleteFactor(e) {
    Kn(e.userId);
    Kn(e.id);
    try {
      return {
        data: await ue(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
          headers: this.headers
        }),
        error: null
      };
    } catch (r) {
      if (ne(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async _listOAuthClients(e) {
    var r;
    var l;
    var h;
    try {
      const g = {
        nextPage: null,
        lastPage: 0,
        total: 0
      };
      const w = await ue(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: true,
        query: {
          page: ((r = e == null ? undefined : e.page) === null || r === undefined ? undefined : r.toString()) ?? "",
          per_page: ((l = e == null ? undefined : e.perPage) === null || l === undefined ? undefined : l.toString()) ?? ""
        },
        xform: Om
      });
      if (w.error) {
        throw w.error;
      }
      const y = await w.json();
      const _ = w.headers.get("x-total-count") ?? 0;
      const v = ((h = w.headers.get("link")) === null || h === undefined ? undefined : h.split(",")) ?? [];
      if (v.length > 0) {
        v.forEach(j => {
          const b = parseInt(j.split(";")[0].split("=")[1].substring(0, 1));
          const C = JSON.parse(j.split(";")[1].split("=")[1]);
          g[`${C}Page`] = b;
        });
        g.total = parseInt(_);
      }
      return {
        data: Object.assign(Object.assign({}, y), g),
        error: null
      };
    } catch (g) {
      if (ne(g)) {
        return {
          data: {
            clients: []
          },
          error: g
        };
      }
      throw g;
    }
  }
  async _createOAuthClient(e) {
    try {
      return await ue(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: r => ({
          data: r,
          error: null
        })
      });
    } catch (r) {
      if (ne(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async _getOAuthClient(e) {
    try {
      return await ue(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        xform: r => ({
          data: r,
          error: null
        })
      });
    } catch (r) {
      if (ne(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async _updateOAuthClient(e, r) {
    try {
      return await ue(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${e}`, {
        body: r,
        headers: this.headers,
        xform: i => ({
          data: i,
          error: null
        })
      });
    } catch (i) {
      if (ne(i)) {
        return {
          data: null,
          error: i
        };
      }
      throw i;
    }
  }
  async _deleteOAuthClient(e) {
    try {
      await ue(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (r) {
      if (ne(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async _regenerateOAuthClientSecret(e) {
    try {
      return await ue(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
        headers: this.headers,
        xform: r => ({
          data: r,
          error: null
        })
      });
    } catch (r) {
      if (ne(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async _listCustomProviders(e) {
    try {
      const r = {};
      if (e != null && e.type) {
        r.type = e.type;
      }
      return await ue(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
        headers: this.headers,
        query: r,
        xform: i => {
          return {
            data: {
              providers: (i == null ? undefined : i.providers) ?? []
            },
            error: null
          };
        }
      });
    } catch (r) {
      if (ne(r)) {
        return {
          data: {
            providers: []
          },
          error: r
        };
      }
      throw r;
    }
  }
  async _createCustomProvider(e) {
    try {
      return await ue(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: e,
        headers: this.headers,
        xform: r => ({
          data: r,
          error: null
        })
      });
    } catch (r) {
      if (ne(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async _getCustomProvider(e) {
    try {
      return await ue(this.fetch, "GET", `${this.url}/admin/custom-providers/${e}`, {
        headers: this.headers,
        xform: r => ({
          data: r,
          error: null
        })
      });
    } catch (r) {
      if (ne(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async _updateCustomProvider(e, r) {
    try {
      return await ue(this.fetch, "PUT", `${this.url}/admin/custom-providers/${e}`, {
        body: r,
        headers: this.headers,
        xform: i => ({
          data: i,
          error: null
        })
      });
    } catch (i) {
      if (ne(i)) {
        return {
          data: null,
          error: i
        };
      }
      throw i;
    }
  }
  async _deleteCustomProvider(e) {
    try {
      await ue(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${e}`, {
        headers: this.headers,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (r) {
      if (ne(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async _adminListPasskeys(e) {
    Kn(e.userId);
    try {
      return await ue(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/passkeys`, {
        headers: this.headers,
        xform: r => ({
          data: r,
          error: null
        })
      });
    } catch (r) {
      if (ne(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async _adminDeletePasskey(e) {
    Kn(e.userId);
    Kn(e.passkeyId);
    try {
      await ue(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`, {
        headers: this.headers,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (r) {
      if (ne(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
}
function $m(n = {}) {
  return {
    getItem: e => n[e] || null,
    setItem: (e, r) => {
      n[e] = r;
    },
    removeItem: e => {
      delete n[e];
    }
  };
}
if (globalThis && Yp() && globalThis.localStorage) {
  globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");
}
class tj extends Error {
  constructor(e) {
    super(e);
    this.isAcquireTimeout = true;
  }
}
function nj() {
  if (typeof globalThis != "object") {
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: true
      });
      __magic__.globalThis = __magic__;
      delete Object.prototype.__magic__;
    } catch {
      if (typeof self !== "undefined") {
        self.globalThis = self;
      }
    }
  }
}
function eg(n) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(n)) {
    throw new Error(`@supabase/auth-js: Address "${n}" is invalid.`);
  }
  return n.toLowerCase();
}
function rj(n) {
  return parseInt(n, 16);
}
function sj(n) {
  const e = new TextEncoder().encode(n);
  return "0x" + Array.from(e, i => i.toString(16).padStart(2, "0")).join("");
}
function aj(n) {
  var e;
  const {
    chainId: r,
    domain: i,
    expirationTime: l,
    issuedAt: c = new Date(),
    nonce: d,
    notBefore: h,
    requestId: m,
    resources: g,
    scheme: w,
    uri: y,
    version: _
  } = n;
  {
    if (!Number.isInteger(r)) {
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
    }
    if (!i) {
      throw new Error("@supabase/auth-js: Invalid SIWE message field \"domain\". Domain must be provided.");
    }
    if (d && d.length < 8) {
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${d}`);
    }
    if (!y) {
      throw new Error("@supabase/auth-js: Invalid SIWE message field \"uri\". URI must be provided.");
    }
    if (_ !== "1") {
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${_}`);
    }
    if ((e = n.statement) !== null && e !== undefined && e.includes(`
`)) {
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${n.statement}`);
    }
  }
  const v = eg(n.address);
  const j = w ? `${w}://${i}` : i;
  const b = n.statement ? `${n.statement}
` : "";
  const C = `${j} wants you to sign in with your Ethereum account:
${v}

${b}`;
  let O = `URI: ${y}
Version: ${_}
Chain ID: ${r}${d ? `
Nonce: ${d}` : ""}
Issued At: ${c.toISOString()}`;
  if (l) {
    O += `
Expiration Time: ${l.toISOString()}`;
  }
  if (h) {
    O += `
Not Before: ${h.toISOString()}`;
  }
  if (m) {
    O += `
Request ID: ${m}`;
  }
  if (g) {
    let L = `
Resources:`;
    for (const R of g) {
      if (!R || typeof R != "string") {
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${R}`);
      }
      L += `
- ${R}`;
    }
    O += L;
  }
  return `${C}
${O}`;
}
class it extends Error {
  constructor({
    message: e,
    code: r,
    cause: i,
    name: l
  }) {
    super(e, {
      cause: i
    });
    this.__isWebAuthnError = true;
    this.name = l ?? (i instanceof Error ? i.name : undefined) ?? "Unknown Error";
    this.code = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}
class Vo extends it {
  constructor(e, r) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: e
    });
    this.name = "WebAuthnUnknownError";
    this.originalError = r;
  }
}
function ij({
  error: n,
  options: e
}) {
  const {
    publicKey: c
  } = e;
  if (!c) {
    throw Error("options was missing required publicKey property");
  }
  if (n.name === "AbortError") {
    if (e.signal instanceof AbortSignal) {
      return new it({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: n
      });
    }
  } else if (n.name === "ConstraintError") {
    if (c.authenticatorSelection?.requireResidentKey === true) {
      return new it({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: n
      });
    }
    if (e.mediation === "conditional" && c.authenticatorSelection?.userVerification === "required") {
      return new it({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: n
      });
    }
    if (c.authenticatorSelection?.userVerification === "required") {
      return new it({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: n
      });
    }
  } else {
    if (n.name === "InvalidStateError") {
      return new it({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: n
      });
    }
    if (n.name === "NotAllowedError") {
      return new it({
        message: n.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: n
      });
    }
    if (n.name === "NotSupportedError") {
      if (c.pubKeyCredParams.filter(h => h.type === "public-key").length === 0) {
        return new it({
          message: "No entry in pubKeyCredParams was of type \"public-key\"",
          code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
          cause: n
        });
      } else {
        return new it({
          message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
          code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
          cause: n
        });
      }
    }
    if (n.name === "SecurityError") {
      const d = window.location.hostname;
      if (tg(d)) {
        if (c.rp.id !== d) {
          return new it({
            message: `The RP ID "${c.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: n
          });
        }
      } else {
        return new it({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: n
        });
      }
    } else if (n.name === "TypeError") {
      if (c.user.id.byteLength < 1 || c.user.id.byteLength > 64) {
        return new it({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: n
        });
      }
    } else if (n.name === "UnknownError") {
      return new it({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: n
      });
    }
  }
  return new it({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: n
  });
}
function oj({
  error: n,
  options: e
}) {
  const {
    publicKey: r
  } = e;
  if (!r) {
    throw Error("options was missing required publicKey property");
  }
  if (n.name === "AbortError") {
    if (e.signal instanceof AbortSignal) {
      return new it({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: n
      });
    }
  } else {
    if (n.name === "NotAllowedError") {
      return new it({
        message: n.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: n
      });
    }
    if (n.name === "SecurityError") {
      const i = window.location.hostname;
      if (tg(i)) {
        if (r.rpId !== i) {
          return new it({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: n
          });
        }
      } else {
        return new it({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: n
        });
      }
    } else if (n.name === "UnknownError") {
      return new it({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: n
      });
    }
  }
  return new it({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: n
  });
}
class lj {
  createNewAbortSignal() {
    if (this.controller) {
      const r = new Error("Cancelling existing WebAuthn API call for new one");
      r.name = "AbortError";
      this.controller.abort(r);
    }
    const e = new AbortController();
    this.controller = e;
    return e.signal;
  }
  cancelCeremony() {
    if (this.controller) {
      const e = new Error("Manually cancelling existing WebAuthn API call");
      e.name = "AbortError";
      this.controller.abort(e);
      this.controller = undefined;
    }
  }
}
const Eu = new lj();
function Lm(n) {
  if (!n) {
    throw new Error("Credential creation options are required");
  }
  if (typeof PublicKeyCredential !== "undefined" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function") {
    return PublicKeyCredential.parseCreationOptionsFromJSON(n);
  }
  const {
    challenge: e,
    user: r,
    excludeCredentials: i
  } = n;
  const l = el(n, ["challenge", "user", "excludeCredentials"]);
  const c = Ys(e).buffer;
  const d = Object.assign(Object.assign({}, r), {
    id: Ys(r.id).buffer
  });
  const h = Object.assign(Object.assign({}, l), {
    challenge: c,
    user: d
  });
  if (i && i.length > 0) {
    h.excludeCredentials = new Array(i.length);
    for (let m = 0; m < i.length; m++) {
      const g = i[m];
      h.excludeCredentials[m] = Object.assign(Object.assign({}, g), {
        id: Ys(g.id).buffer,
        type: g.type || "public-key",
        transports: g.transports
      });
    }
  }
  return h;
}
function Dm(n) {
  if (!n) {
    throw new Error("Credential request options are required");
  }
  if (typeof PublicKeyCredential !== "undefined" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function") {
    return PublicKeyCredential.parseRequestOptionsFromJSON(n);
  }
  const {
    challenge: e,
    allowCredentials: r
  } = n;
  const i = el(n, ["challenge", "allowCredentials"]);
  const l = Ys(e).buffer;
  const c = Object.assign(Object.assign({}, i), {
    challenge: l
  });
  if (r && r.length > 0) {
    c.allowCredentials = new Array(r.length);
    for (let d = 0; d < r.length; d++) {
      const h = r[d];
      c.allowCredentials[d] = Object.assign(Object.assign({}, h), {
        id: Ys(h.id).buffer,
        type: h.type || "public-key",
        transports: h.transports
      });
    }
  }
  return c;
}
function Mm(n) {
  if ("toJSON" in n && typeof n.toJSON == "function") {
    return n.toJSON();
  }
  const r = n;
  return {
    id: n.id,
    rawId: n.id,
    response: {
      attestationObject: is(new Uint8Array(n.response.attestationObject)),
      clientDataJSON: is(new Uint8Array(n.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: n.getClientExtensionResults(),
    authenticatorAttachment: r.authenticatorAttachment ?? undefined
  };
}
function Um(n) {
  if ("toJSON" in n && typeof n.toJSON == "function") {
    return n.toJSON();
  }
  const r = n;
  const i = n.getClientExtensionResults();
  const l = n.response;
  return {
    id: n.id,
    rawId: n.id,
    response: {
      authenticatorData: is(new Uint8Array(l.authenticatorData)),
      clientDataJSON: is(new Uint8Array(l.clientDataJSON)),
      signature: is(new Uint8Array(l.signature)),
      userHandle: l.userHandle ? is(new Uint8Array(l.userHandle)) : undefined
    },
    type: "public-key",
    clientExtensionResults: i,
    authenticatorAttachment: r.authenticatorAttachment ?? undefined
  };
}
function tg(n) {
  return n === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(n);
}
function Ko() {
  return !!vt() && !!("PublicKeyCredential" in window) && !!window.PublicKeyCredential && !!("credentials" in navigator) && typeof (navigator == null ? undefined : navigator.credentials)?.create == "function" && typeof (navigator == null ? undefined : navigator.credentials)?.get == "function";
}
async function ng(n) {
  try {
    const e = await navigator.credentials.create(n);
    if (e) {
      if (e instanceof PublicKeyCredential) {
        return {
          data: e,
          error: null
        };
      } else {
        return {
          data: null,
          error: new Vo("Browser returned unexpected credential type", e)
        };
      }
    } else {
      return {
        data: null,
        error: new Vo("Empty credential response", e)
      };
    }
  } catch (e) {
    return {
      data: null,
      error: ij({
        error: e,
        options: n
      })
    };
  }
}
async function rg(n) {
  try {
    const e = await navigator.credentials.get(n);
    if (e) {
      if (e instanceof PublicKeyCredential) {
        return {
          data: e,
          error: null
        };
      } else {
        return {
          data: null,
          error: new Vo("Browser returned unexpected credential type", e)
        };
      }
    } else {
      return {
        data: null,
        error: new Vo("Empty credential response", e)
      };
    }
  } catch (e) {
    return {
      data: null,
      error: oj({
        error: e,
        options: n
      })
    };
  }
}
const cj = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: false,
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
};
const uj = {
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function Go(...n) {
  const e = l => l !== null && typeof l == "object" && !Array.isArray(l);
  const r = l => l instanceof ArrayBuffer || ArrayBuffer.isView(l);
  const i = {};
  for (const l of n) {
    if (l) {
      for (const c in l) {
        const d = l[c];
        if (d !== undefined) {
          if (Array.isArray(d)) {
            i[c] = d;
          } else if (r(d)) {
            i[c] = d;
          } else if (e(d)) {
            const h = i[c];
            if (e(h)) {
              i[c] = Go(h, d);
            } else {
              i[c] = Go(d);
            }
          } else {
            i[c] = d;
          }
        }
      }
    }
  }
  return i;
}
function dj(n, e) {
  return Go(cj, n, e || {});
}
function hj(n, e) {
  return Go(uj, n, e || {});
}
class fj {
  constructor(e) {
    this.client = e;
    this.enroll = this._enroll.bind(this);
    this.challenge = this._challenge.bind(this);
    this.verify = this._verify.bind(this);
    this.authenticate = this._authenticate.bind(this);
    this.register = this._register.bind(this);
  }
  async _enroll(e) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, e), {
      factorType: "webauthn"
    }));
  }
  async _challenge({
    factorId: e,
    webauthn: r,
    friendlyName: i,
    signal: l
  }, c) {
    try {
      const {
        data: h,
        error: m
      } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: r
      });
      if (!h) {
        return {
          data: null,
          error: m
        };
      }
      const g = l ?? Eu.createNewAbortSignal();
      if (h.webauthn.type === "create") {
        const {
          user: w
        } = h.webauthn.credential_options.publicKey;
        if (!w.name) {
          const y = i;
          if (y) {
            w.name = `${w.id}:${y}`;
          } else {
            const v = (await this.client.getUser()).data.user;
            const j = (v == null ? undefined : v.user_metadata)?.name || (v == null ? undefined : v.email) || (v == null ? undefined : v.id) || "User";
            w.name = `${w.id}:${j}`;
          }
        }
        w.displayName ||= w.name;
      }
      switch (h.webauthn.type) {
        case "create":
          {
            const w = dj(h.webauthn.credential_options.publicKey, c == null ? undefined : c.create);
            const {
              data: y,
              error: _
            } = await ng({
              publicKey: w,
              signal: g
            });
            if (y) {
              return {
                data: {
                  factorId: e,
                  challengeId: h.id,
                  webauthn: {
                    type: h.webauthn.type,
                    credential_response: y
                  }
                },
                error: null
              };
            } else {
              return {
                data: null,
                error: _
              };
            }
          }
        case "request":
          {
            const w = hj(h.webauthn.credential_options.publicKey, c == null ? undefined : c.request);
            const {
              data: y,
              error: _
            } = await rg(Object.assign(Object.assign({}, h.webauthn.credential_options), {
              publicKey: w,
              signal: g
            }));
            if (y) {
              return {
                data: {
                  factorId: e,
                  challengeId: h.id,
                  webauthn: {
                    type: h.webauthn.type,
                    credential_response: y
                  }
                },
                error: null
              };
            } else {
              return {
                data: null,
                error: _
              };
            }
          }
      }
    } catch (h) {
      if (ne(h)) {
        return {
          data: null,
          error: h
        };
      } else {
        return {
          data: null,
          error: new _n("Unexpected error in challenge", h)
        };
      }
    }
  }
  async _verify({
    challengeId: e,
    factorId: r,
    webauthn: i
  }) {
    return this.client.mfa.verify({
      factorId: r,
      challengeId: e,
      webauthn: i
    });
  }
  async _authenticate({
    factorId: e,
    webauthn: {
      rpId: r = typeof window !== "undefined" ? window.location.hostname : undefined,
      rpOrigins: i = typeof window !== "undefined" ? [window.location.origin] : undefined,
      signal: l
    } = {}
  }, c) {
    if (!r) {
      return {
        data: null,
        error: new si("rpId is required for WebAuthn authentication")
      };
    }
    try {
      if (!Ko()) {
        return {
          data: null,
          error: new _n("Browser does not support WebAuthn", null)
        };
      }
      const {
        data: d,
        error: h
      } = await this.challenge({
        factorId: e,
        webauthn: {
          rpId: r,
          rpOrigins: i
        },
        signal: l
      }, {
        request: c
      });
      if (!d) {
        return {
          data: null,
          error: h
        };
      }
      const {
        webauthn: m
      } = d;
      return this._verify({
        factorId: e,
        challengeId: d.challengeId,
        webauthn: {
          type: m.type,
          rpId: r,
          rpOrigins: i,
          credential_response: m.credential_response
        }
      });
    } catch (d) {
      if (ne(d)) {
        return {
          data: null,
          error: d
        };
      } else {
        return {
          data: null,
          error: new _n("Unexpected error in authenticate", d)
        };
      }
    }
  }
  async _register({
    friendlyName: e,
    webauthn: {
      rpId: r = typeof window !== "undefined" ? window.location.hostname : undefined,
      rpOrigins: i = typeof window !== "undefined" ? [window.location.origin] : undefined,
      signal: l
    } = {}
  }, c) {
    if (!r) {
      return {
        data: null,
        error: new si("rpId is required for WebAuthn registration")
      };
    }
    try {
      if (!Ko()) {
        return {
          data: null,
          error: new _n("Browser does not support WebAuthn", null)
        };
      }
      const {
        data: d,
        error: h
      } = await this._enroll({
        friendlyName: e
      });
      if (!d) {
        await this.client.mfa.listFactors().then(w => {
          var y;
          if ((y = w.data) === null || y === undefined) {
            return undefined;
          } else {
            return y.all.find(_ => _.factor_type === "webauthn" && _.friendly_name === e && _.status === "unverified");
          }
        }).then(w => w ? this.client.mfa.unenroll({
          factorId: w == null ? undefined : w.id
        }) : undefined);
        return {
          data: null,
          error: h
        };
      }
      const {
        data: m,
        error: g
      } = await this._challenge({
        factorId: d.id,
        friendlyName: d.friendly_name,
        webauthn: {
          rpId: r,
          rpOrigins: i
        },
        signal: l
      }, {
        create: c
      });
      if (m) {
        return this._verify({
          factorId: d.id,
          challengeId: m.challengeId,
          webauthn: {
            rpId: r,
            rpOrigins: i,
            type: m.webauthn.type,
            credential_response: m.webauthn.credential_response
          }
        });
      } else {
        return {
          data: null,
          error: g
        };
      }
    } catch (d) {
      if (ne(d)) {
        return {
          data: null,
          error: d
        };
      } else {
        return {
          data: null,
          error: new _n("Unexpected error in register", d)
        };
      }
    }
  }
}
nj();
const mj = {
  url: p_,
  storageKey: g_,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  headers: v_,
  flowType: "implicit",
  debug: false,
  hasCustomAuthorizationHeader: false,
  throwOnError: false,
  lockAcquireTimeout: 5000,
  skipAutoInitialize: false,
  experimental: {}
};
const Ws = {};
let Fm = false;
class ii {
  get jwks() {
    return Ws[this.storageKey]?.jwks ?? {
      keys: []
    };
  }
  set jwks(e) {
    Ws[this.storageKey] = Object.assign(Object.assign({}, Ws[this.storageKey]), {
      jwks: e
    });
  }
  get jwks_cached_at() {
    return Ws[this.storageKey]?.cachedAt ?? Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    Ws[this.storageKey] = Object.assign(Object.assign({}, Ws[this.storageKey]), {
      cachedAt: e
    });
  }
  constructor(e) {
    var l;
    this.userStorage = null;
    this.memoryStorage = null;
    this.stateChangeEmitters = new Map();
    this.autoRefreshTicker = null;
    this.autoRefreshTickTimeout = null;
    this.visibilityChangedCallback = null;
    this.refreshingDeferred = null;
    this.lastRefreshFailure = null;
    this._sessionRemovalEpoch = 0;
    this.initializePromise = null;
    this._pendingInitNotifications = null;
    this.detectSessionInUrl = true;
    this.hasCustomAuthorizationHeader = false;
    this.suppressGetSessionWarning = false;
    this.lock = null;
    this.lockAcquired = false;
    this.pendingInLock = [];
    this.broadcastChannel = null;
    this.logger = console.log;
    const c = Object.assign(Object.assign({}, mj), e);
    this.storageKey = c.storageKey;
    this.instanceID = ii.nextInstanceID[this.storageKey] ?? 0;
    ii.nextInstanceID[this.storageKey] = this.instanceID + 1;
    this.logDebugMessages = !!c.debug;
    if (typeof c.debug == "function") {
      this.logger = c.debug;
    }
    if (this.instanceID > 0 && vt()) {
      const d = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(d);
      if (this.logDebugMessages) {
        console.trace(d);
      }
    }
    this.persistSession = c.persistSession;
    this.autoRefreshToken = c.autoRefreshToken;
    this.experimental = c.experimental ?? {};
    this.admin = new ej({
      url: c.url,
      headers: c.headers,
      fetch: c.fetch,
      experimental: this.experimental
    });
    this.url = c.url;
    this.headers = c.headers;
    this.fetch = Xp(c.fetch);
    this.detectSessionInUrl = c.detectSessionInUrl;
    this.flowType = c.flowType;
    this.hasCustomAuthorizationHeader = c.hasCustomAuthorizationHeader;
    this.throwOnError = c.throwOnError;
    this.lockAcquireTimeout = c.lockAcquireTimeout;
    if (c.lock != null) {
      this.lock = c.lock;
      if (!Fm) {
        Fm = true;
        console.warn(`${this._logPrefix()} The "lock" option is deprecated and will be removed in v3. The client now coordinates session refreshes without a lock, so most apps can drop the option. See https://github.com/supabase/supabase-js/blob/master/packages/core/auth-js/migrations/lockless-coordination.md`);
      }
    }
    if (!this.jwks) {
      this.jwks = {
        keys: []
      };
      this.jwks_cached_at = Number.MIN_SAFE_INTEGER;
    }
    this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new fj(this),
      recoveryCodes: {
        getStatus: this._getRecoveryCodesStatus.bind(this),
        generate: this._generateRecoveryCodes.bind(this),
        verify: this._verifyRecoveryCode.bind(this),
        regenerate: this._regenerateRecoveryCodes.bind(this),
        unenroll: this._unenrollRecoveryCodes.bind(this)
      }
    };
    this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    };
    this.passkey = {
      startRegistration: this._startPasskeyRegistration.bind(this),
      verifyRegistration: this._verifyPasskeyRegistration.bind(this),
      startAuthentication: this._startPasskeyAuthentication.bind(this),
      verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
      list: this._listPasskeys.bind(this),
      update: this._updatePasskey.bind(this),
      delete: this._deletePasskey.bind(this)
    };
    if (this.persistSession) {
      if (c.storage) {
        this.storage = c.storage;
      } else if (Yp()) {
        this.storage = globalThis.localStorage;
      } else {
        this.memoryStorage = {};
        this.storage = $m(this.memoryStorage);
      }
      if (c.userStorage) {
        this.userStorage = c.userStorage;
      }
    } else {
      this.memoryStorage = {};
      this.storage = $m(this.memoryStorage);
    }
    if (vt() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (d) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", d);
      }
      if ((l = this.broadcastChannel) !== null && l !== undefined) {
        l.addEventListener("message", async d => {
          this._debug("received broadcast notification from other tab or client", d);
          if (d.data.event === "TOKEN_REFRESHED" || d.data.event === "SIGNED_IN") {
            this.lastRefreshFailure = null;
          }
          try {
            await this._notifyAllSubscribers(d.data.event, d.data.session, false);
          } catch (h) {
            this._debug("#broadcastChannel", "error", h);
          }
        });
      }
    }
    if (!c.skipAutoInitialize) {
      this.initialize().catch(d => {
        this._debug("#initialize()", "error", d);
      });
    }
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(e) {
    if (this.throwOnError && e && e.error) {
      throw e.error;
    }
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Kp}) ${new Date().toISOString()}`;
  }
  _debug(...e) {
    if (this.logDebugMessages) {
      this.logger(this._logPrefix(), ...e);
    }
    return this;
  }
  async initialize() {
    if (this.initializePromise) {
      return await this.initializePromise;
    }
    this._pendingInitNotifications = [];
    this.initializePromise = (async () => this.lock != null ? await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()) : await this._initialize())();
    const r = await this.initializePromise;
    const i = this._pendingInitNotifications ?? [];
    this._pendingInitNotifications = null;
    for (const l of i) {
      await this._notifyAllSubscribers(l.event, l.session, l.broadcast);
    }
    return r;
  }
  async _initialize() {
    try {
      let r = {};
      let i = "none";
      if (vt()) {
        r = Tm(window.location.href);
        if (this._isImplicitGrantCallback(r)) {
          i = "implicit";
        } else if (await this._isPKCECallback(r)) {
          i = "pkce";
        }
      }
      if (vt() && this.detectSessionInUrl && i !== "none") {
        const {
          data: l,
          error: c
        } = await this._getSessionFromURL(r, i);
        if (c) {
          this._debug("#_initialize()", "error detecting session from URL", c);
          if (j_(c)) {
            const m = c.details?.code;
            if (m === "identity_already_exists" || m === "identity_not_found" || m === "single_identity_not_deletable") {
              return {
                error: c
              };
            }
          }
          return {
            error: c
          };
        }
        const {
          session: d,
          redirectType: h
        } = l;
        this._debug("#_initialize()", "detected session in URL", d, "redirect type", h);
        await this._saveSession(d);
        setTimeout(async () => {
          if (h === "recovery") {
            await this._notifyAllSubscribers("PASSWORD_RECOVERY", d);
          } else {
            await this._notifyAllSubscribers("SIGNED_IN", d);
          }
        }, 0);
        return {
          error: null
        };
      }
      await this._recoverAndRefresh();
      return {
        error: null
      };
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          error: r
        });
      } else {
        return this._returnResult({
          error: new _n("Unexpected error during initialization", r)
        });
      }
    } finally {
      await this._handleVisibilityChange();
      this._debug("#_initialize()", "end");
    }
  }
  async signInAnonymously(e) {
    try {
      const c = await ue(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (e == null ? undefined : e.options)?.data ?? {},
          gotrue_meta_security: {
            captcha_token: (e == null ? undefined : e.options)?.captchaToken
          }
        },
        xform: rn
      });
      const {
        data: d,
        error: h
      } = c;
      if (h || !d) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: h
        });
      }
      const m = d.session;
      const g = d.user;
      if (d.session) {
        await this._saveSession(d.session);
        await this._notifyAllSubscribers("SIGNED_IN", m);
      }
      return this._returnResult({
        data: {
          user: g,
          session: m
        },
        error: null
      });
    } catch (c) {
      if (ne(c)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: c
        });
      }
      throw c;
    }
  }
  async signUp(e) {
    let c = null;
    try {
      let d;
      if ("email" in e) {
        const {
          email: y,
          password: _,
          options: v
        } = e;
        let j = null;
        let b = null;
        if (this.flowType === "pkce") {
          [j, b, c] = await this._getCodeChallengeAndMethod();
        }
        d = await ue(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: this._maybeAppendFlowIdToRedirect(v == null ? undefined : v.emailRedirectTo, c),
          body: {
            email: y,
            password: _,
            data: (v == null ? undefined : v.data) ?? {},
            gotrue_meta_security: {
              captcha_token: v == null ? undefined : v.captchaToken
            },
            code_challenge: j,
            code_challenge_method: b
          },
          xform: rn
        });
      } else if ("phone" in e) {
        const {
          phone: y,
          password: _,
          options: v
        } = e;
        d = await ue(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: y,
            password: _,
            data: (v == null ? undefined : v.data) ?? {},
            channel: (v == null ? undefined : v.channel) ?? "sms",
            gotrue_meta_security: {
              captcha_token: v == null ? undefined : v.captchaToken
            }
          },
          xform: rn
        });
      } else {
        throw new Co("You must provide either an email or phone number and a password");
      }
      const {
        data: h,
        error: m
      } = d;
      if (m || !h) {
        await wn(this.storage, this.storageKey, c);
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: m
        });
      }
      const g = h.session;
      const w = h.user;
      if (h.session) {
        await this._saveSession(h.session);
        await this._notifyAllSubscribers("SIGNED_IN", g);
      }
      return this._returnResult({
        data: {
          user: w,
          session: g
        },
        error: null
      });
    } catch (d) {
      await wn(this.storage, this.storageKey, c);
      if (ne(d)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: d
        });
      }
      throw d;
    }
  }
  async signInWithPassword(e) {
    try {
      let r;
      if ("email" in e) {
        const {
          email: c,
          password: d,
          options: h
        } = e;
        r = await ue(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: c,
            password: d,
            gotrue_meta_security: {
              captcha_token: h == null ? undefined : h.captchaToken
            }
          },
          xform: Pm
        });
      } else if ("phone" in e) {
        const {
          phone: c,
          password: d,
          options: h
        } = e;
        r = await ue(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: c,
            password: d,
            gotrue_meta_security: {
              captcha_token: h == null ? undefined : h.captchaToken
            }
          },
          xform: Pm
        });
      } else {
        throw new Co("You must provide either an email or phone number and a password");
      }
      const {
        data: i,
        error: l
      } = r;
      if (l) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: l
        });
      }
      if (!i || !i.session || !i.user) {
        const c = new zs();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: c
        });
      }
      if (i.session) {
        await this._saveSession(i.session);
        await this._notifyAllSubscribers("SIGNED_IN", i.session);
      }
      return this._returnResult({
        data: Object.assign({
          user: i.user,
          session: i.session
        }, i.weak_password ? {
          weakPassword: i.weak_password
        } : null),
        error: l
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: r
        });
      }
      throw r;
    }
  }
  async signInWithOAuth(e) {
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: e.options?.redirectTo,
      scopes: e.options?.scopes,
      queryParams: e.options?.queryParams,
      skipBrowserRedirect: e.options?.skipBrowserRedirect
    });
  }
  async exchangeCodeForSession(e, r) {
    await this.initializePromise;
    if (this.lock != null) {
      return this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(e, r));
    } else {
      return this._exchangeCodeForSession(e, r);
    }
  }
  async signInWithWeb3(e) {
    const {
      chain: r
    } = e;
    switch (r) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
    }
  }
  async signInWithEthereum(e) {
    var y;
    let v;
    let j;
    if ("message" in e) {
      v = e.message;
      j = e.signature;
    } else {
      const {
        chain: b,
        wallet: C,
        statement: O,
        options: L
      } = e;
      let R;
      if (vt()) {
        if (typeof C == "object") {
          R = C;
        } else {
          const G = window;
          if ("ethereum" in G && typeof G.ethereum == "object" && "request" in G.ethereum && typeof G.ethereum.request == "function") {
            R = G.ethereum;
          } else {
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
          }
        }
      } else {
        if (typeof C != "object" || L == null || !L.url) {
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        }
        R = C;
      }
      const W = new URL((L == null ? undefined : L.url) ?? window.location.href);
      const I = await R.request({
        method: "eth_requestAccounts"
      }).then(G => G).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!I || I.length === 0) {
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      }
      const z = eg(I[0]);
      let X = (L == null ? undefined : L.signInWithEthereum)?.chainId;
      if (!X) {
        const G = await R.request({
          method: "eth_chainId"
        });
        X = rj(G);
      }
      const le = {
        domain: W.host,
        address: z,
        statement: O,
        uri: W.href,
        version: "1",
        chainId: X,
        nonce: (L == null ? undefined : L.signInWithEthereum)?.nonce,
        issuedAt: (L == null ? undefined : L.signInWithEthereum)?.issuedAt ?? new Date(),
        expirationTime: (L == null ? undefined : L.signInWithEthereum)?.expirationTime,
        notBefore: (L == null ? undefined : L.signInWithEthereum)?.notBefore,
        requestId: (L == null ? undefined : L.signInWithEthereum)?.requestId,
        resources: (L == null ? undefined : L.signInWithEthereum)?.resources
      };
      v = aj(le);
      j = await R.request({
        method: "personal_sign",
        params: [sj(v), z]
      });
    }
    try {
      const {
        data: b,
        error: C
      } = await ue(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: v,
          signature: j
        }, (y = e.options) !== null && y !== undefined && y.captchaToken ? {
          gotrue_meta_security: {
            captcha_token: e.options?.captchaToken
          }
        } : null),
        xform: rn
      });
      if (C) {
        throw C;
      }
      if (!b || !b.session || !b.user) {
        const O = new zs();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: O
        });
      }
      if (b.session) {
        await this._saveSession(b.session);
        await this._notifyAllSubscribers("SIGNED_IN", b.session);
      }
      return this._returnResult({
        data: Object.assign({}, b),
        error: C
      });
    } catch (b) {
      if (ne(b)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: b
        });
      }
      throw b;
    }
  }
  async signInWithSolana(e) {
    var c;
    var d;
    var h;
    var m;
    var g;
    var y;
    var _;
    let j;
    let b;
    if ("message" in e) {
      j = e.message;
      b = e.signature;
    } else {
      const {
        chain: C,
        wallet: O,
        statement: L,
        options: R
      } = e;
      let W;
      if (vt()) {
        if (typeof O == "object") {
          W = O;
        } else {
          const z = window;
          if ("solana" in z && typeof z.solana == "object" && ("signIn" in z.solana && typeof z.solana.signIn == "function" || "signMessage" in z.solana && typeof z.solana.signMessage == "function")) {
            W = z.solana;
          } else {
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
          }
        }
      } else {
        if (typeof O != "object" || R == null || !R.url) {
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        }
        W = O;
      }
      const I = new URL((R == null ? undefined : R.url) ?? window.location.href);
      if ("signIn" in W && W.signIn) {
        const z = await W.signIn(Object.assign(Object.assign(Object.assign({
          issuedAt: new Date().toISOString()
        }, R == null ? undefined : R.signInWithSolana), {
          version: "1",
          domain: I.host,
          uri: I.href
        }), L ? {
          statement: L
        } : null));
        let X;
        if (Array.isArray(z) && z[0] && typeof z[0] == "object") {
          X = z[0];
        } else if (z && typeof z == "object" && "signedMessage" in z && "signature" in z) {
          X = z;
        } else {
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        }
        if ("signedMessage" in X && "signature" in X && (typeof X.signedMessage == "string" || X.signedMessage instanceof Uint8Array) && X.signature instanceof Uint8Array) {
          j = typeof X.signedMessage == "string" ? X.signedMessage : new TextDecoder().decode(X.signedMessage);
          b = X.signature;
        } else {
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
        }
      } else {
        if (!("signMessage" in W) || typeof W.signMessage != "function" || !("publicKey" in W) || typeof W != "object" || !W.publicKey || !("toBase58" in W.publicKey) || typeof W.publicKey.toBase58 != "function") {
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        }
        j = [`${I.host} wants you to sign in with your Solana account:`, W.publicKey.toBase58(), ...(L ? ["", L, ""] : [""]), "Version: 1", `URI: ${I.href}`, `Issued At: ${(R == null ? undefined : R.signInWithSolana)?.issuedAt ?? new Date().toISOString()}`, ...((c = R == null ? undefined : R.signInWithSolana) !== null && c !== undefined && c.notBefore ? [`Not Before: ${R.signInWithSolana.notBefore}`] : []), ...((d = R == null ? undefined : R.signInWithSolana) !== null && d !== undefined && d.expirationTime ? [`Expiration Time: ${R.signInWithSolana.expirationTime}`] : []), ...((h = R == null ? undefined : R.signInWithSolana) !== null && h !== undefined && h.chainId ? [`Chain ID: ${R.signInWithSolana.chainId}`] : []), ...((m = R == null ? undefined : R.signInWithSolana) !== null && m !== undefined && m.nonce ? [`Nonce: ${R.signInWithSolana.nonce}`] : []), ...((g = R == null ? undefined : R.signInWithSolana) !== null && g !== undefined && g.requestId ? [`Request ID: ${R.signInWithSolana.requestId}`] : []), ...((y = (R == null ? undefined : R.signInWithSolana)?.resources) !== null && y !== undefined && y.length ? ["Resources", ...R.signInWithSolana.resources.map(X => `- ${X}`)] : [])].join(`
`);
        const z = await W.signMessage(new TextEncoder().encode(j), "utf8");
        if (!z || !(z instanceof Uint8Array)) {
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        }
        b = z;
      }
    }
    try {
      const {
        data: C,
        error: O
      } = await ue(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "solana",
          message: j,
          signature: is(b)
        }, (_ = e.options) !== null && _ !== undefined && _.captchaToken ? {
          gotrue_meta_security: {
            captcha_token: e.options?.captchaToken
          }
        } : null),
        xform: rn
      });
      if (O) {
        throw O;
      }
      if (!C || !C.session || !C.user) {
        const L = new zs();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: L
        });
      }
      if (C.session) {
        await this._saveSession(C.session);
        await this._notifyAllSubscribers("SIGNED_IN", C.session);
      }
      return this._returnResult({
        data: Object.assign({}, C),
        error: O
      });
    } catch (C) {
      if (ne(C)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: C
        });
      }
      throw C;
    }
  }
  async _exchangeCodeForSession(e, r) {
    const i = (r == null ? undefined : r.flowId) != null;
    const l = i ? Ao(r == null ? undefined : r.flowId) : vt() ? Ao(Tm(window.location.href)[as]) : null;
    if (i && !l) {
      this._debug("#_exchangeCodeForSession()", "provided flowId is not a valid flow id", r == null ? undefined : r.flowId);
    }
    const {
      verifier: c,
      flowId: d
    } = i && !l ? {
      verifier: null,
      flowId: null
    } : await U_(this.storage, this.storageKey, l);
    const [h, m] = (c ?? "").split("/");
    try {
      if (!h && this.flowType === "pkce") {
        throw new k_();
      }
      const {
        data: g,
        error: w
      } = await ue(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: h
        },
        xform: rn
      });
      await wn(this.storage, this.storageKey, d);
      if (w) {
        throw w;
      }
      if (!g || !g.session || !g.user) {
        const y = new zs();
        return this._returnResult({
          data: {
            user: null,
            session: null,
            redirectType: null
          },
          error: y
        });
      }
      if (g.session) {
        await this._saveSession(g.session);
        await this._notifyAllSubscribers(m === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", g.session);
      }
      return this._returnResult({
        data: Object.assign(Object.assign({}, g), {
          redirectType: m ?? null
        }),
        error: w
      });
    } catch (g) {
      await wn(this.storage, this.storageKey, d);
      if (ne(g)) {
        return this._returnResult({
          data: {
            user: null,
            session: null,
            redirectType: null
          },
          error: g
        });
      }
      throw g;
    }
  }
  async signInWithIdToken(e) {
    try {
      const {
        options: r,
        provider: i,
        token: l,
        access_token: c,
        nonce: d
      } = e;
      const h = await ue(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: i,
          id_token: l,
          access_token: c,
          nonce: d,
          gotrue_meta_security: {
            captcha_token: r == null ? undefined : r.captchaToken
          }
        },
        xform: rn
      });
      const {
        data: m,
        error: g
      } = h;
      if (g) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: g
        });
      }
      if (!m || !m.session || !m.user) {
        const w = new zs();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: w
        });
      }
      if (m.session) {
        await this._saveSession(m.session);
        await this._notifyAllSubscribers("SIGNED_IN", m.session);
      }
      return this._returnResult({
        data: m,
        error: g
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: r
        });
      }
      throw r;
    }
  }
  async signInWithOtp(e) {
    let h = null;
    try {
      if ("email" in e) {
        const {
          email: m,
          options: g
        } = e;
        let w = null;
        let y = null;
        if (this.flowType === "pkce") {
          [w, y, h] = await this._getCodeChallengeAndMethod();
        }
        const {
          error: _
        } = await ue(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: m,
            data: (g == null ? undefined : g.data) ?? {},
            create_user: (g == null ? undefined : g.shouldCreateUser) ?? true,
            gotrue_meta_security: {
              captcha_token: g == null ? undefined : g.captchaToken
            },
            code_challenge: w,
            code_challenge_method: y
          },
          redirectTo: this._maybeAppendFlowIdToRedirect(g == null ? undefined : g.emailRedirectTo, h)
        });
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: _
        });
      }
      if ("phone" in e) {
        const {
          phone: m,
          options: g
        } = e;
        const {
          data: w,
          error: y
        } = await ue(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: m,
            data: (g == null ? undefined : g.data) ?? {},
            create_user: (g == null ? undefined : g.shouldCreateUser) ?? true,
            gotrue_meta_security: {
              captcha_token: g == null ? undefined : g.captchaToken
            },
            channel: (g == null ? undefined : g.channel) ?? "sms"
          }
        });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: w == null ? undefined : w.message_id
          },
          error: y
        });
      }
      throw new Co("You must provide either an email or phone number.");
    } catch (m) {
      await wn(this.storage, this.storageKey, h);
      if (ne(m)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: m
        });
      }
      throw m;
    }
  }
  async verifyOtp(e) {
    try {
      let l;
      let c;
      if ("options" in e) {
        l = e.options?.redirectTo;
        c = e.options?.captchaToken;
      }
      const {
        data: d,
        error: h
      } = await ue(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), {
          gotrue_meta_security: {
            captcha_token: c
          }
        }),
        redirectTo: l,
        xform: rn
      });
      if (h) {
        throw h;
      }
      if (!d) {
        throw new Error("An error occurred on token verification.");
      }
      const m = d.session;
      const g = d.user;
      if (m != null && m.access_token) {
        await this._saveSession(m);
        await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", m);
      }
      return this._returnResult({
        data: {
          user: g,
          session: m
        },
        error: null
      });
    } catch (l) {
      if (ne(l)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: l
        });
      }
      throw l;
    }
  }
  async signInWithSSO(e) {
    var i;
    var l;
    var c;
    let d = null;
    try {
      let h = null;
      let m = null;
      if (this.flowType === "pkce") {
        [h, m, d] = await this._getCodeChallengeAndMethod();
      }
      const g = await ue(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? {
          provider_id: e.providerId
        } : null), "domain" in e ? {
          domain: e.domain
        } : null), {
          redirect_to: this._maybeAppendFlowIdToRedirect(e.options?.redirectTo, d)
        }), (i = e == null ? undefined : e.options) !== null && i !== undefined && i.captchaToken ? {
          gotrue_meta_security: {
            captcha_token: e.options.captchaToken
          }
        } : null), {
          skip_http_redirect: true,
          code_challenge: h,
          code_challenge_method: m
        }),
        headers: this.headers,
        xform: Y_
      });
      if ((l = g.data) !== null && l !== undefined && l.url && vt() && ((c = e.options) === null || c === undefined || !c.skipBrowserRedirect)) {
        window.location.assign(g.data.url);
      }
      return this._returnResult(g);
    } catch (h) {
      await wn(this.storage, this.storageKey, d);
      if (ne(h)) {
        return this._returnResult({
          data: null,
          error: h
        });
      }
      throw h;
    }
  }
  async reauthenticate() {
    await this.initializePromise;
    if (this.lock != null) {
      return await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate());
    } else {
      return await this._reauthenticate();
    }
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async e => {
        const {
          data: {
            session: r
          },
          error: i
        } = e;
        if (i) {
          throw i;
        }
        if (!r) {
          throw new ft();
        }
        const {
          error: l
        } = await ue(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: r.access_token
        });
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: l
        });
      });
    } catch (e) {
      if (ne(e)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e
        });
      }
      throw e;
    }
  }
  async resend(e) {
    let r = null;
    try {
      const i = `${this.url}/resend`;
      if ("email" in e) {
        const {
          email: l,
          type: c,
          options: d
        } = e;
        let h = null;
        let m = null;
        if (this.flowType === "pkce") {
          [h, m, r] = await this._getCodeChallengeAndMethod();
        }
        const {
          error: g
        } = await ue(this.fetch, "POST", i, {
          headers: this.headers,
          body: {
            email: l,
            type: c,
            gotrue_meta_security: {
              captcha_token: d == null ? undefined : d.captchaToken
            },
            code_challenge: h,
            code_challenge_method: m
          },
          redirectTo: this._maybeAppendFlowIdToRedirect(d == null ? undefined : d.emailRedirectTo, r)
        });
        if (g) {
          await wn(this.storage, this.storageKey, r);
        }
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: g
        });
      } else if ("phone" in e) {
        const {
          phone: l,
          type: c,
          options: d
        } = e;
        const {
          data: h,
          error: m
        } = await ue(this.fetch, "POST", i, {
          headers: this.headers,
          body: {
            phone: l,
            type: c,
            gotrue_meta_security: {
              captcha_token: d == null ? undefined : d.captchaToken
            }
          }
        });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: h == null ? undefined : h.message_id
          },
          error: m
        });
      }
      throw new Co("You must provide either an email or phone number and a type");
    } catch (i) {
      await wn(this.storage, this.storageKey, r);
      if (ne(i)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: i
        });
      }
      throw i;
    }
  }
  async getSession() {
    await this.initializePromise;
    if (this.lock != null) {
      return await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async e => e));
    } else {
      return await this._useSession(async e => e);
    }
  }
  async _acquireLock(e, r) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const i = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
        const l = (async () => {
          await i;
          return await r();
        })();
        this.pendingInLock.push((async () => {
          try {
            await l;
          } catch {}
        })());
        return l;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = true;
          const i = r();
          this.pendingInLock.push((async () => {
            try {
              await i;
            } catch {}
          })());
          await i;
          while (this.pendingInLock.length) {
            const l = [...this.pendingInLock];
            await Promise.all(l);
            this.pendingInLock.splice(0, l.length);
          }
          return await i;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey);
          this.lockAcquired = false;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const r = await this.__loadSession();
      return await e(r);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    this._debug("#__loadSession()", "begin");
    if (this.lock != null && !this.lockAcquired) {
      this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    }
    try {
      let e = null;
      const r = await kt(this.storage, this.storageKey);
      this._debug("#getSession()", "session from storage", r);
      if (r !== null) {
        if (this._isValidSession(r)) {
          e = r;
        } else {
          this._debug("#getSession()", "session from storage is not valid");
          await this._removeSession();
        }
      }
      if (!e) {
        return {
          data: {
            session: null
          },
          error: null
        };
      }
      const i = e.expires_at ? e.expires_at * 1000 - Date.now() < Yc : false;
      this._debug("#__loadSession()", `session has${i ? "" : " not"} expired`, "expires_at", e.expires_at);
      if (!i) {
        return {
          data: {
            session: await this._hydrateSessionUser(e)
          },
          error: null
        };
      }
      const {
        data: l,
        error: c
      } = await this._callRefreshToken(e.refresh_token);
      if (c) {
        const d = await kt(this.storage, this.storageKey);
        if (d && this._isValidSession(d) && d.expires_at && d.expires_at * 1000 > Date.now()) {
          return this._returnResult({
            data: {
              session: await this._hydrateSessionUser(d)
            },
            error: null
          });
        } else {
          return this._returnResult({
            data: {
              session: null
            },
            error: c
          });
        }
      }
      return this._returnResult({
        data: {
          session: l
        },
        error: null
      });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async _hydrateSessionUser(e) {
    if (this.userStorage) {
      const r = await kt(this.userStorage, this.storageKey + "-user");
      e.user = r != null && r.user ? r.user : Xc();
    }
    if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
      const r = {
        value: this.suppressGetSessionWarning
      };
      e.user = G_(e.user, r);
      if (r.value) {
        this.suppressGetSessionWarning = true;
      }
    }
    return e;
  }
  async getUser(e) {
    if (e) {
      return await this._getUser(e);
    }
    await this.initializePromise;
    let r;
    if (this.lock != null) {
      r = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
    } else {
      r = await this._getUser();
    }
    if (r.data.user) {
      this.suppressGetSessionWarning = true;
    }
    return r;
  }
  async _getUser(e) {
    try {
      if (e) {
        return await ue(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: e,
          xform: Ar
        });
      } else {
        return await this._useSession(async r => {
          var i;
          const {
            data: d,
            error: h
          } = r;
          if (h) {
            throw h;
          }
          if (((i = d.session) === null || i === undefined || !i.access_token) && !this.hasCustomAuthorizationHeader) {
            return {
              data: {
                user: null
              },
              error: new ft()
            };
          } else {
            return await ue(this.fetch, "GET", `${this.url}/user`, {
              headers: this.headers,
              jwt: d.session?.access_token ?? undefined,
              xform: Ar
            });
          }
        });
      }
    } catch (r) {
      if (ne(r)) {
        if (So(r)) {
          await this._removeSession();
        }
        return this._returnResult({
          data: {
            user: null
          },
          error: r
        });
      }
      throw r;
    }
  }
  async updateUser(e, r = {}) {
    await this.initializePromise;
    if (this.lock != null) {
      return await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(e, r));
    } else {
      return await this._updateUser(e, r);
    }
  }
  async _updateUser(e, r = {}) {
    let i = null;
    try {
      return await this._useSession(async l => {
        const {
          data: c,
          error: d
        } = l;
        if (d) {
          throw d;
        }
        if (!c.session) {
          throw new ft();
        }
        const h = c.session;
        let m = null;
        let g = null;
        if (this.flowType === "pkce" && e.email != null) {
          [m, g, i] = await this._getCodeChallengeAndMethod();
        }
        const {
          data: w,
          error: y
        } = await ue(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: this._maybeAppendFlowIdToRedirect(r == null ? undefined : r.emailRedirectTo, i),
          body: Object.assign(Object.assign({}, e), {
            code_challenge: m,
            code_challenge_method: g
          }),
          jwt: h.access_token,
          xform: Ar
        });
        if (y) {
          throw y;
        }
        h.user = w.user;
        await this._saveSession(h);
        await this._notifyAllSubscribers("USER_UPDATED", h);
        return this._returnResult({
          data: {
            user: h.user
          },
          error: null
        });
      });
    } catch (l) {
      await wn(this.storage, this.storageKey, i);
      if (ne(l)) {
        return this._returnResult({
          data: {
            user: null
          },
          error: l
        });
      }
      throw l;
    }
  }
  async setSession(e) {
    await this.initializePromise;
    if (this.lock != null) {
      return await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(e));
    } else {
      return await this._setSession(e);
    }
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token) {
        throw new ft();
      }
      const r = Date.now() / 1000;
      let i = r;
      let l = true;
      let c = null;
      const {
        payload: d
      } = To(e.access_token);
      if (d.exp) {
        i = d.exp;
        l = i <= r;
      }
      if (l) {
        const {
          data: h,
          error: m
        } = await this._callRefreshToken(e.refresh_token);
        if (m) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: m
          });
        }
        if (!h) {
          return {
            data: {
              user: null,
              session: null
            },
            error: null
          };
        }
        c = h;
      } else {
        const {
          data: h,
          error: m
        } = await this._getUser(e.access_token);
        if (m) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: m
          });
        }
        c = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: h.user,
          token_type: "bearer",
          expires_in: i - r,
          expires_at: i
        };
        await this._saveSession(c);
        await this._notifyAllSubscribers("SIGNED_IN", c);
      }
      return this._returnResult({
        data: {
          user: c.user,
          session: c
        },
        error: null
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: {
            session: null,
            user: null
          },
          error: r
        });
      }
      throw r;
    }
  }
  async refreshSession(e) {
    await this.initializePromise;
    if (this.lock != null) {
      return await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(e));
    } else {
      return await this._refreshSession(e);
    }
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async r => {
        if (!e) {
          const {
            data: d,
            error: h
          } = r;
          if (h) {
            throw h;
          }
          e = d.session ?? undefined;
        }
        if (e == null || !e.refresh_token) {
          throw new ft();
        }
        const {
          data: l,
          error: c
        } = await this._callRefreshToken(e.refresh_token);
        if (c) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: c
          });
        } else if (l) {
          return this._returnResult({
            data: {
              user: l.user,
              session: l
            },
            error: null
          });
        } else {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: null
          });
        }
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: r
        });
      }
      throw r;
    }
  }
  async _getSessionFromURL(e, r) {
    try {
      if (!vt()) {
        throw new Eo("No browser detected.");
      }
      if (e.error || e.error_description || e.error_code) {
        throw new Eo(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      }
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce") {
            throw new jm("Not a valid PKCE flow url.");
          }
          break;
        case "pkce":
          if (this.flowType === "implicit") {
            throw new Eo("Not a valid implicit grant flow url.");
          }
          break;
        default:
      }
      if (r === "pkce") {
        this._debug("#_initialize()", "begin", "is PKCE flow", true);
        if (!e.code) {
          throw new jm("No code detected.");
        }
        const {
          data: R,
          error: W
        } = await this._exchangeCodeForSession(e.code, {
          flowId: e[as]
        });
        if (W) {
          throw W;
        }
        const I = new URL(window.location.href);
        I.searchParams.delete("code");
        I.searchParams.delete(as);
        window.history.replaceState(window.history.state, "", I.toString());
        return {
          data: {
            session: R.session,
            redirectType: R.redirectType ?? null
          },
          error: null
        };
      }
      const {
        provider_token: l,
        provider_refresh_token: c,
        access_token: d,
        refresh_token: h,
        expires_in: m,
        expires_at: g,
        token_type: w
      } = e;
      if (!d || !m || !h || !w) {
        throw new Eo("No session defined in URL");
      }
      const y = Math.round(Date.now() / 1000);
      const _ = parseInt(m);
      let v = y + _;
      if (g) {
        v = parseInt(g);
      }
      const j = v - y;
      if (j * 1000 <= Yn) {
        console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${j}s, should have been closer to ${_}s`);
      }
      const b = v - _;
      if (y - b >= 120) {
        console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", b, v, y);
      } else if (y - b < 0) {
        console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", b, v, y);
      }
      const {
        data: C,
        error: O
      } = await this._getUser(d);
      if (O) {
        throw O;
      }
      const L = {
        provider_token: l,
        provider_refresh_token: c,
        access_token: d,
        expires_in: _,
        expires_at: v,
        refresh_token: h,
        token_type: w,
        user: C.user
      };
      window.location.hash = "";
      this._debug("#_getSessionFromURL()", "clearing window.location.hash");
      return this._returnResult({
        data: {
          session: L,
          redirectType: e.type
        },
        error: null
      });
    } catch (l) {
      if (ne(l)) {
        return this._returnResult({
          data: {
            session: null,
            redirectType: null
          },
          error: l
        });
      }
      throw l;
    }
  }
  _isImplicitGrantCallback(e) {
    if (typeof this.detectSessionInUrl == "function") {
      return this.detectSessionInUrl(new URL(window.location.href), e);
    } else {
      return !!e.access_token || !!e.error || !!e.error_description || !!e.error_code;
    }
  }
  async _isPKCECallback(e) {
    if (!e.code) {
      return false;
    }
    const r = Ao(e[as]);
    if (r && (await kt(this.storage, ea(this.storageKey, r)))) {
      return true;
    } else {
      return !!(await kt(this.storage, `${this.storageKey}-code-verifier`));
    }
  }
  async signOut(e = {
    scope: "global"
  }) {
    await this.initializePromise;
    if (this.lock != null) {
      return await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e));
    } else {
      return await this._signOut(e);
    }
  }
  async _signOut({
    scope: e
  } = {
    scope: "global"
  }) {
    return await this._useSession(async r => {
      const l = async () => {
        await this._removeSession();
      };
      const {
        data: c,
        error: d
      } = r;
      if (d && !So(d)) {
        return this._returnResult({
          error: d
        });
      }
      const h = c.session?.access_token;
      if (h) {
        const {
          error: m
        } = await this.admin.signOut(h, e);
        if (m && (!_m(m) || m.status !== 404 && m.status !== 401 && m.status !== 403) && !So(m)) {
          if (e !== "others") {
            await l();
          }
          return this._returnResult({
            error: m
          });
        }
      }
      if (e !== "others") {
        await l();
      }
      return this._returnResult({
        error: null
      });
    });
  }
  onAuthStateChange(e) {
    const r = T_();
    const i = {
      id: r,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", r);
        this.stateChangeEmitters.delete(r);
      }
    };
    this._debug("#onAuthStateChange()", "registered callback with id", r);
    this.stateChangeEmitters.set(r, i);
    (async () => {
      await this.initializePromise;
      if (this.lock != null) {
        return await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(r);
        });
      } else {
        return await this._emitInitialSession(r);
      }
    })();
    return {
      data: {
        subscription: i
      }
    };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async r => {
      var i;
      var l;
      try {
        const {
          data: {
            session: c
          },
          error: d
        } = r;
        if (d) {
          throw d;
        }
        await ((i = this.stateChangeEmitters.get(e)) === null || i === undefined ? undefined : i.callback("INITIAL_SESSION", c));
        this._debug("INITIAL_SESSION", "callback id", e, "session", c);
      } catch (c) {
        await ((l = this.stateChangeEmitters.get(e)) === null || l === undefined ? undefined : l.callback("INITIAL_SESSION", null));
        this._debug("INITIAL_SESSION", "callback id", e, "error", c);
        if (bm(c)) {
          return;
        }
        if (So(c) || No(c) || _m(c) && (c.code === "refresh_token_not_found" || c.code === "refresh_token_already_used" || c.code === "session_expired")) {
          console.warn(c);
        } else {
          console.error(c);
        }
      }
    });
  }
  async resetPasswordForEmail(e, r = {}) {
    let i = null;
    let l = null;
    let c = null;
    if (this.flowType === "pkce") {
      [i, l, c] = await this._getCodeChallengeAndMethod(true);
    }
    try {
      return await ue(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: i,
          code_challenge_method: l,
          gotrue_meta_security: {
            captcha_token: r.captchaToken
          }
        },
        headers: this.headers,
        redirectTo: this._maybeAppendFlowIdToRedirect(r.redirectTo, c)
      });
    } catch (d) {
      await wn(this.storage, this.storageKey, c);
      if (ne(d)) {
        return this._returnResult({
          data: null,
          error: d
        });
      }
      throw d;
    }
  }
  async getUserIdentities() {
    try {
      const {
        data: r,
        error: i
      } = await this.getUser();
      if (i) {
        throw i;
      }
      return this._returnResult({
        data: {
          identities: r.user.identities ?? []
        },
        error: null
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
  async linkIdentity(e) {
    if ("token" in e) {
      return this.linkIdentityIdToken(e);
    } else {
      return this.linkIdentityOAuth(e);
    }
  }
  async linkIdentityOAuth(e) {
    var r;
    let i = null;
    try {
      const {
        data: l,
        error: c
      } = await this._useSession(async d => {
        const {
          data: _,
          error: v
        } = d;
        if (v) {
          throw v;
        }
        const {
          url: j,
          flowId: b
        } = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: e.options?.redirectTo,
          scopes: e.options?.scopes,
          queryParams: e.options?.queryParams,
          skipBrowserRedirect: true
        });
        i = b;
        return await ue(this.fetch, "GET", j, {
          headers: this.headers,
          jwt: _.session?.access_token ?? undefined
        });
      });
      if (c) {
        throw c;
      }
      if (vt() && ((r = e.options) === null || r === undefined || !r.skipBrowserRedirect)) {
        window.location.assign(l == null ? undefined : l.url);
      }
      return this._returnResult({
        data: {
          provider: e.provider,
          url: l == null ? undefined : l.url,
          flowId: i
        },
        error: null
      });
    } catch (l) {
      if (ne(l)) {
        return this._returnResult({
          data: {
            provider: e.provider,
            url: null,
            flowId: i
          },
          error: l
        });
      }
      throw l;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async r => {
      try {
        const {
          error: l,
          data: {
            session: c
          }
        } = r;
        if (l) {
          throw l;
        }
        const {
          options: d,
          provider: h,
          token: m,
          access_token: g,
          nonce: w
        } = e;
        const y = await ue(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (c == null ? undefined : c.access_token) ?? undefined,
          body: {
            provider: h,
            id_token: m,
            access_token: g,
            nonce: w,
            link_identity: true,
            gotrue_meta_security: {
              captcha_token: d == null ? undefined : d.captchaToken
            }
          },
          xform: rn
        });
        const {
          data: _,
          error: v
        } = y;
        if (v) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: v
          });
        } else if (!_ || !_.session || !_.user) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: new zs()
          });
        } else {
          if (_.session) {
            await this._saveSession(_.session);
            await this._notifyAllSubscribers("USER_UPDATED", _.session);
          }
          return this._returnResult({
            data: _,
            error: v
          });
        }
      } catch (l) {
        await wn(this.storage, this.storageKey, null);
        if (ne(l)) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: l
          });
        }
        throw l;
      }
    });
  }
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async r => {
        const {
          data: c,
          error: d
        } = r;
        if (d) {
          throw d;
        }
        return await ue(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: c.session?.access_token ?? undefined
        });
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
  async _refreshAccessToken(e) {
    const r = "#_refreshAccessToken()";
    this._debug(r, "begin");
    try {
      const i = Date.now();
      return await A_(async l => {
        if (l > 0) {
          await I_(Math.pow(2, l - 1) * 200);
        }
        this._debug(r, "refreshing attempt", l);
        return await ue(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
          body: {
            refresh_token: e
          },
          headers: this.headers,
          xform: rn
        });
      }, (l, c) => {
        const d = Math.pow(2, l) * 200;
        return c && No(c) && Date.now() + d - i < Yn;
      });
    } catch (i) {
      this._debug(r, "error", i);
      if (ne(i)) {
        return this._returnResult({
          data: {
            session: null,
            user: null
          },
          error: i
        });
      }
      throw i;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, r) {
    const {
      url: i,
      flowId: l
    } = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams
    });
    this._debug("#_handleProviderSignIn()", "provider", e, "options", r, "url", i);
    if (vt() && !r.skipBrowserRedirect) {
      window.location.assign(i);
    }
    return {
      data: {
        provider: e,
        url: i,
        flowId: l
      },
      error: null
    };
  }
  async _recoverAndRefresh() {
    const i = "#_recoverAndRefresh()";
    this._debug(i, "begin");
    try {
      const l = await kt(this.storage, this.storageKey);
      if (l && this.userStorage) {
        let d = await kt(this.userStorage, this.storageKey + "-user");
        if (!this.storage.isServer && Object.is(this.storage, this.userStorage) && !d) {
          d = {
            user: l.user
          };
          await Zn(this.userStorage, this.storageKey + "-user", d);
        }
        l.user = (d == null ? undefined : d.user) ?? Xc();
      } else if (l && !l.user && !l.user) {
        const d = await kt(this.storage, this.storageKey + "-user");
        if (d && d != null && d.user) {
          l.user = d.user;
          await Mt(this.storage, this.storageKey + "-user");
          await Zn(this.storage, this.storageKey, l);
        } else {
          l.user = Xc();
        }
      }
      this._debug(i, "session from storage", l);
      if (!this._isValidSession(l)) {
        this._debug(i, "session is not valid");
        if (l !== null) {
          await this._removeSession();
        }
        return;
      }
      const c = (l.expires_at ?? Infinity) * 1000 - Date.now() < Yc;
      this._debug(i, `session has${c ? "" : " not"} expired with margin of ${Yc}s`);
      if (c) {
        if (this.autoRefreshToken && l.refresh_token) {
          const {
            error: d
          } = await this._callRefreshToken(l.refresh_token);
          if (d) {
            if (bm(d)) {
              this._debug(i, "refresh discarded by commit guard", d);
            } else {
              this._debug(i, "refresh failed", d);
            }
          }
        }
      } else if (l.user && l.user.__isUserNotAvailableProxy === true) {
        try {
          const {
            data: d,
            error: h
          } = await this._getUser(l.access_token);
          if (!h && d != null && d.user) {
            l.user = d.user;
            await this._saveSession(l);
            await this._notifyAllSubscribers("SIGNED_IN", l);
          } else {
            this._debug(i, "could not get user data, skipping SIGNED_IN notification");
          }
        } catch (d) {
          console.error("Error getting user data:", d);
          this._debug(i, "error getting user data, skipping SIGNED_IN notification", d);
        }
      } else {
        await this._notifyAllSubscribers("SIGNED_IN", l);
      }
    } catch (l) {
      this._debug(i, "error", l);
      if (No(l)) {
        console.warn(l);
      } else {
        console.error(l);
      }
      return;
    } finally {
      this._debug(i, "end");
    }
  }
  async _callRefreshToken(e) {
    var r;
    var i;
    if (!e) {
      throw new ft();
    }
    if (this.refreshingDeferred) {
      return this.refreshingDeferred.promise;
    }
    if (this.lastRefreshFailure && this.lastRefreshFailure.refreshToken === e && Date.now() < this.lastRefreshFailure.expiresAt) {
      this._debug("#_callRefreshToken()", "returning cached failure (cooldown active)");
      return this.lastRefreshFailure.result;
    }
    const l = "#_callRefreshToken()";
    this._debug(l, "begin");
    try {
      this.refreshingDeferred = new rl();
      this.refreshingDeferred.promise.then(undefined, () => {});
      const c = await kt(this.storage, this.storageKey);
      const {
        data: d,
        error: h
      } = await this._refreshAccessToken(e);
      if (h) {
        throw h;
      }
      if (!d.session) {
        throw new ft();
      }
      const m = await kt(this.storage, this.storageKey);
      if (c !== null && (m === null || m.refresh_token !== c.refresh_token)) {
        this._debug(l, "commit guard: storage changed since refresh started, discarding rotated tokens", {
          startedWith: "present",
          nowHolds: m ? "replaced" : "cleared"
        });
        const _ = {
          data: null,
          error: new km()
        };
        this.refreshingDeferred.resolve(_);
        return _;
      }
      const w = this._sessionRemovalEpoch;
      await this._saveSession(d.session);
      if (this._sessionRemovalEpoch !== w) {
        this._debug(l, "commit guard (post-save): _removeSession ran during _saveSession, undoing write");
        await Mt(this.storage, this.storageKey);
        if (this.userStorage) {
          await Mt(this.userStorage, this.storageKey + "-user");
        }
        const _ = {
          data: null,
          error: new km()
        };
        this.refreshingDeferred.resolve(_);
        return _;
      }
      await this._notifyAllSubscribers("TOKEN_REFRESHED", d.session);
      const y = {
        data: d.session,
        error: null
      };
      this.lastRefreshFailure = null;
      this.refreshingDeferred.resolve(y);
      return y;
    } catch (c) {
      this._debug(l, "error", c);
      if (ne(c)) {
        const d = {
          data: null,
          error: c
        };
        if (!No(c)) {
          const h = await kt(this.storage, this.storageKey);
          if (h != null && !!h.expires_at && !!(h.expires_at * 1000 > Date.now())) {
            this._debug(l, "proactive refresh failed, access token still valid — preserving session");
          } else {
            await this._removeSession();
          }
        }
        this.lastRefreshFailure = {
          refreshToken: e,
          result: d,
          expiresAt: Date.now() + m_
        };
        if ((r = this.refreshingDeferred) !== null && r !== undefined) {
          r.resolve(d);
        }
        return d;
      }
      if ((i = this.refreshingDeferred) !== null && i !== undefined) {
        i.reject(c);
      }
      throw c;
    } finally {
      this.refreshingDeferred = null;
      this._debug(l, "end");
    }
  }
  async _notifyAllSubscribers(e, r, i = true) {
    if (this._pendingInitNotifications !== null && i) {
      this._pendingInitNotifications.push({
        event: e,
        session: r,
        broadcast: i
      });
      return;
    }
    const l = `#_notifyAllSubscribers(${e})`;
    this._debug(l, "begin", r, `broadcast = ${i}`);
    try {
      if (this.broadcastChannel && i) {
        this.broadcastChannel.postMessage({
          event: e,
          session: r
        });
      }
      const c = [];
      const d = Array.from(this.stateChangeEmitters.values()).map(async h => {
        try {
          await h.callback(e, r);
        } catch (m) {
          c.push(m);
        }
      });
      await Promise.all(d);
      if (c.length > 0) {
        for (let h = 0; h < c.length; h += 1) {
          console.error(c[h]);
        }
        throw c[0];
      }
    } finally {
      this._debug(l, "end");
    }
  }
  async _saveSession(e) {
    this._debug("#_saveSession()", e);
    this.suppressGetSessionWarning = true;
    const r = Object.assign({}, e);
    const i = r.user && r.user.__isUserNotAvailableProxy === true;
    if (this.userStorage) {
      if (!i && r.user) {
        await Zn(this.userStorage, this.storageKey + "-user", {
          user: r.user
        });
      }
      const l = Object.assign({}, r);
      delete l.user;
      const c = Rm(l);
      await Zn(this.storage, this.storageKey, c);
    } else {
      const l = Rm(r);
      await Zn(this.storage, this.storageKey, l);
    }
  }
  async _removeSession() {
    this._sessionRemovalEpoch += 1;
    this._debug("#_removeSession()");
    this.lastRefreshFailure = null;
    this.suppressGetSessionWarning = false;
    await Mt(this.storage, this.storageKey);
    await F_(this.storage, this.storageKey);
    await Mt(this.storage, this.storageKey + "-user");
    if (this.userStorage) {
      await Mt(this.userStorage, this.storageKey + "-user");
    }
    await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      if (e && vt() && window != null && window.removeEventListener) {
        window.removeEventListener("visibilitychange", e);
      }
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh();
    this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), Yn);
    this.autoRefreshTicker = e;
    if (e && typeof e == "object" && typeof e.unref == "function") {
      e.unref();
    } else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer == "function") {
      Deno.unrefTimer(e);
    }
    const r = setTimeout(async () => {
      await this.initializePromise;
      await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = r;
    if (r && typeof r == "object" && typeof r.unref == "function") {
      r.unref();
    } else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer == "function") {
      Deno.unrefTimer(r);
    }
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null;
    if (e) {
      clearInterval(e);
    }
    const r = this.autoRefreshTickTimeout;
    this.autoRefreshTickTimeout = null;
    if (r) {
      clearTimeout(r);
    }
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback();
    await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback();
    await this._stopAutoRefresh();
  }
  async dispose() {
    var e;
    this._removeVisibilityChangedCallback();
    await this._stopAutoRefresh();
    if ((e = this.broadcastChannel) !== null && e !== undefined) {
      e.close();
    }
    this.broadcastChannel = null;
    this.stateChangeEmitters.clear();
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    if (this.lock != null) {
      try {
        await this._acquireLock(0, async () => {
          try {
            const e = Date.now();
            try {
              return await this._useSession(async r => {
                const {
                  data: {
                    session: i
                  }
                } = r;
                if (!i || !i.refresh_token || !i.expires_at) {
                  this._debug("#_autoRefreshTokenTick()", "no session");
                  return;
                }
                const l = Math.floor((i.expires_at * 1000 - e) / Yn);
                this._debug("#_autoRefreshTokenTick()", `access token expires in ${l} ticks, a tick lasts ${Yn}ms, refresh threshold is ${qa} ticks`);
                if (l <= qa) {
                  await this._callRefreshToken(i.refresh_token);
                }
              });
            } catch (r) {
              console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
            }
          } finally {
            this._debug("#_autoRefreshTokenTick()", "end");
          }
        });
      } catch (e) {
        if (e instanceof tj) {
          this._debug("auto refresh token tick lock not available");
        } else {
          throw e;
        }
      }
      return;
    }
    if (this.refreshingDeferred !== null) {
      this._debug("#_autoRefreshTokenTick()", "refresh already in flight, skipping");
      return;
    }
    try {
      const e = Date.now();
      try {
        await this._useSession(async r => {
          const {
            data: {
              session: i
            }
          } = r;
          if (!i || !i.refresh_token || !i.expires_at) {
            this._debug("#_autoRefreshTokenTick()", "no session");
            return;
          }
          const l = Math.floor((i.expires_at * 1000 - e) / Yn);
          this._debug("#_autoRefreshTokenTick()", `access token expires in ${l} ticks, a tick lasts ${Yn}ms, refresh threshold is ${qa} ticks`);
          if (l <= qa) {
            await this._callRefreshToken(i.refresh_token);
          }
        });
      } catch (r) {
        console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
      }
    } finally {
      this._debug("#_autoRefreshTokenTick()", "end");
    }
  }
  async _handleVisibilityChange() {
    this._debug("#_handleVisibilityChange()");
    if (!vt() || window == null || !window.addEventListener) {
      if (this.autoRefreshToken) {
        this.startAutoRefresh();
      }
      return false;
    }
    try {
      this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(false);
        } catch (e) {
          this._debug("#visibilityChangedCallback", "error", e);
        }
      };
      if (window != null) {
        window.addEventListener("visibilitychange", this.visibilityChangedCallback);
      }
      await this._onVisibilityChanged(true);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  async _onVisibilityChanged(e) {
    const r = `#_onVisibilityChanged(${e})`;
    this._debug(r, "visibilityState", document.visibilityState);
    if (document.visibilityState === "visible") {
      if (this.autoRefreshToken) {
        this._startAutoRefresh();
      }
      if (!e) {
        await this.initializePromise;
        if (this.lock != null) {
          await this._acquireLock(this.lockAcquireTimeout, async () => {
            if (document.visibilityState !== "visible") {
              this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
              return;
            }
            await this._recoverAndRefresh();
          });
        } else {
          if (document.visibilityState !== "visible") {
            this._debug(r, "visibilityState is no longer visible, skipping recovery");
            return;
          }
          await this._recoverAndRefresh();
        }
      }
    } else if (document.visibilityState === "hidden" && this.autoRefreshToken) {
      this._stopAutoRefresh();
    }
  }
  async _getUrlForProvider(e, r, i) {
    let l = i == null ? undefined : i.redirectTo;
    let c = null;
    let d = null;
    let h = null;
    if (this.flowType === "pkce") {
      [c, d, h] = await this._getCodeChallengeAndMethod();
      l = this._maybeAppendFlowIdToRedirect(l, h);
    }
    const m = [`provider=${encodeURIComponent(r)}`];
    if (l) {
      m.push(`redirect_to=${encodeURIComponent(l)}`);
    }
    if (i != null && i.scopes) {
      m.push(`scopes=${encodeURIComponent(i.scopes)}`);
    }
    if (c != null && d != null) {
      const g = new URLSearchParams({
        code_challenge: `${encodeURIComponent(c)}`,
        code_challenge_method: `${encodeURIComponent(d)}`
      });
      m.push(g.toString());
    }
    if (i != null && i.queryParams) {
      const g = new URLSearchParams(i.queryParams);
      m.push(g.toString());
    }
    if (i != null && i.skipBrowserRedirect) {
      m.push(`skip_http_redirect=${i.skipBrowserRedirect}`);
    }
    return {
      url: `${e}?${m.join("&")}`,
      flowId: h
    };
  }
  _maybeAppendFlowIdToRedirect(e, r) {
    if (!e || !r || !this.experimental.appendPkceFlowIdToRedirects) {
      return e ?? undefined;
    } else {
      return B_(e, r);
    }
  }
  async _getCodeChallengeAndMethod(e = false) {
    return z_(this.storage, this.storageKey, e, r => this._debug("#_getCodeChallengeAndMethod()", "evicted oldest pending PKCE verifier slot", r));
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async r => {
        const {
          data: l,
          error: c
        } = r;
        if (c) {
          return this._returnResult({
            data: null,
            error: c
          });
        } else {
          return await ue(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
            headers: this.headers,
            jwt: (l == null ? undefined : l.session)?.access_token
          });
        }
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async r => {
        var l;
        const {
          data: c,
          error: d
        } = r;
        if (d) {
          return this._returnResult({
            data: null,
            error: d
          });
        }
        const h = Object.assign({
          friendly_name: e.friendlyName,
          factor_type: e.factorType
        }, e.factorType === "phone" ? {
          phone: e.phone
        } : e.factorType === "totp" ? {
          issuer: e.issuer
        } : {});
        const {
          data: m,
          error: g
        } = await ue(this.fetch, "POST", `${this.url}/factors`, {
          body: h,
          headers: this.headers,
          jwt: (c == null ? undefined : c.session)?.access_token
        });
        if (g) {
          return this._returnResult({
            data: null,
            error: g
          });
        } else {
          if (e.factorType === "totp" && m.type === "totp" && (l = m == null ? undefined : m.totp) !== null && l !== undefined && l.qr_code) {
            m.totp.qr_code = `data:image/svg+xml;utf-8,${m.totp.qr_code}`;
          }
          return this._returnResult({
            data: m,
            error: null
          });
        }
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
  async _verify(e) {
    const r = async () => {
      try {
        return await this._useSession(async i => {
          const {
            data: c,
            error: d
          } = i;
          if (d) {
            return this._returnResult({
              data: null,
              error: d
            });
          }
          const h = Object.assign({
            challenge_id: e.challengeId
          }, "webauthn" in e ? {
            webauthn: Object.assign(Object.assign({}, e.webauthn), {
              credential_response: e.webauthn.type === "create" ? Mm(e.webauthn.credential_response) : Um(e.webauthn.credential_response)
            })
          } : {
            code: e.code
          });
          const {
            data: m,
            error: g
          } = await ue(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: h,
            headers: this.headers,
            jwt: (c == null ? undefined : c.session)?.access_token
          });
          if (g) {
            return this._returnResult({
              data: null,
              error: g
            });
          } else {
            await this._saveSession(Object.assign({
              expires_at: Math.round(Date.now() / 1000) + m.expires_in
            }, m));
            await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", m);
            return this._returnResult({
              data: m,
              error: g
            });
          }
        });
      } catch (i) {
        if (ne(i)) {
          return this._returnResult({
            data: null,
            error: i
          });
        }
        throw i;
      }
    };
    if (this.lock != null) {
      return this._acquireLock(this.lockAcquireTimeout, r);
    } else {
      return r();
    }
  }
  async _challenge(e) {
    const r = async () => {
      try {
        return await this._useSession(async i => {
          const {
            data: c,
            error: d
          } = i;
          if (d) {
            return this._returnResult({
              data: null,
              error: d
            });
          }
          const h = await ue(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: e,
            headers: this.headers,
            jwt: (c == null ? undefined : c.session)?.access_token
          });
          if (h.error) {
            return h;
          }
          const {
            data: m
          } = h;
          if (m.type !== "webauthn") {
            return {
              data: m,
              error: null
            };
          }
          switch (m.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, m), {
                  webauthn: Object.assign(Object.assign({}, m.webauthn), {
                    credential_options: Object.assign(Object.assign({}, m.webauthn.credential_options), {
                      publicKey: Lm(m.webauthn.credential_options.publicKey)
                    })
                  })
                }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, m), {
                  webauthn: Object.assign(Object.assign({}, m.webauthn), {
                    credential_options: Object.assign(Object.assign({}, m.webauthn.credential_options), {
                      publicKey: Dm(m.webauthn.credential_options.publicKey)
                    })
                  })
                }),
                error: null
              };
          }
        });
      } catch (i) {
        if (ne(i)) {
          return this._returnResult({
            data: null,
            error: i
          });
        }
        throw i;
      }
    };
    if (this.lock != null) {
      return this._acquireLock(this.lockAcquireTimeout, r);
    } else {
      return r();
    }
  }
  async _challengeAndVerify(e) {
    const {
      data: r,
      error: i
    } = await this._challenge({
      factorId: e.factorId
    });
    if (i) {
      return this._returnResult({
        data: null,
        error: i
      });
    } else {
      return await this._verify({
        factorId: e.factorId,
        challengeId: r.id,
        code: e.code
      });
    }
  }
  async _listFactors() {
    const {
      data: {
        user: r
      },
      error: i
    } = await this.getUser();
    if (i) {
      return {
        data: null,
        error: i
      };
    }
    const l = {
      all: [],
      phone: [],
      totp: [],
      webauthn: [],
      recovery_code: []
    };
    for (const c of (r == null ? undefined : r.factors) ?? []) {
      l.all.push(c);
      if (c.status === "verified" && c.factor_type in l && Array.isArray(l[c.factor_type])) {
        l[c.factor_type].push(c);
      }
    }
    return {
      data: l,
      error: null
    };
  }
  async _getAuthenticatorAssuranceLevel(e) {
    var r;
    var l;
    if (e) {
      try {
        const {
          payload: v
        } = To(e);
        let j = null;
        if (v.aal) {
          j = v.aal;
        }
        let b = j;
        const {
          data: {
            user: C
          },
          error: O
        } = await this.getUser(e);
        if (O) {
          return this._returnResult({
            data: null,
            error: O
          });
        }
        if ((((r = C == null ? undefined : C.factors) === null || r === undefined ? undefined : r.filter(W => W.status === "verified")) ?? []).length > 0) {
          b = "aal2";
        }
        const R = v.amr || [];
        return {
          data: {
            currentLevel: j,
            nextLevel: b,
            currentAuthenticationMethods: R
          },
          error: null
        };
      } catch (v) {
        if (ne(v)) {
          return this._returnResult({
            data: null,
            error: v
          });
        }
        throw v;
      }
    }
    const {
      data: {
        session: d
      },
      error: h
    } = await this.getSession();
    if (h) {
      return this._returnResult({
        data: null,
        error: h
      });
    }
    if (!d) {
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: []
        },
        error: null
      };
    }
    const {
      payload: m
    } = To(d.access_token);
    let g = null;
    if (m.aal) {
      g = m.aal;
    }
    let w = g;
    if ((((l = d.user.factors) === null || l === undefined ? undefined : l.filter(v => v.status === "verified")) ?? []).length > 0) {
      w = "aal2";
    }
    const _ = m.amr || [];
    return {
      data: {
        currentLevel: g,
        nextLevel: w,
        currentAuthenticationMethods: _
      },
      error: null
    };
  }
  async _getRecoveryCodesStatus() {
    Ba(this.experimental);
    try {
      return await this._useSession(async e => {
        const {
          data: i,
          error: l
        } = e;
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        }
        const {
          data: c,
          error: d
        } = await ue(this.fetch, "GET", `${this.url}/factors/recovery-codes`, {
          headers: this.headers,
          jwt: (i == null ? undefined : i.session)?.access_token
        });
        if (d) {
          return this._returnResult({
            data: null,
            error: d
          });
        } else {
          return this._returnResult({
            data: c,
            error: null
          });
        }
      });
    } catch (e) {
      if (ne(e)) {
        return this._returnResult({
          data: null,
          error: e
        });
      }
      throw e;
    }
  }
  async _generateRecoveryCodes(e) {
    Ba(this.experimental);
    try {
      return await this._useSession(async r => {
        const {
          data: l,
          error: c
        } = r;
        if (c) {
          return this._returnResult({
            data: null,
            error: c
          });
        }
        const {
          data: d,
          error: h
        } = await ue(this.fetch, "POST", `${this.url}/factors/recovery-codes`, {
          body: e != null && e.friendlyName ? {
            friendly_name: e.friendlyName
          } : undefined,
          headers: this.headers,
          jwt: (l == null ? undefined : l.session)?.access_token
        });
        if (h) {
          return this._returnResult({
            data: null,
            error: h
          });
        } else {
          return this._returnResult({
            data: d,
            error: null
          });
        }
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
  async _verifyRecoveryCode(e) {
    Ba(this.experimental);
    const r = async () => {
      try {
        return await this._useSession(async i => {
          const {
            data: c,
            error: d
          } = i;
          if (d) {
            return this._returnResult({
              data: null,
              error: d
            });
          }
          const {
            data: h,
            error: m
          } = await ue(this.fetch, "POST", `${this.url}/factors/recovery-codes/verify`, {
            body: {
              code: e.code
            },
            headers: this.headers,
            jwt: (c == null ? undefined : c.session)?.access_token
          });
          if (m) {
            return this._returnResult({
              data: null,
              error: m
            });
          }
          const g = Object.assign({
            expires_at: Qp(h.expires_in)
          }, h);
          await this._saveSession(g);
          await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", g);
          return this._returnResult({
            data: h,
            error: null
          });
        });
      } catch (i) {
        if (ne(i)) {
          return this._returnResult({
            data: null,
            error: i
          });
        }
        throw i;
      }
    };
    if (this.lock != null) {
      return this._acquireLock(this.lockAcquireTimeout, r);
    } else {
      return r();
    }
  }
  async _regenerateRecoveryCodes() {
    Ba(this.experimental);
    try {
      return await this._useSession(async e => {
        const {
          data: i,
          error: l
        } = e;
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        }
        const {
          data: c,
          error: d
        } = await ue(this.fetch, "POST", `${this.url}/factors/recovery-codes/regenerate`, {
          headers: this.headers,
          jwt: (i == null ? undefined : i.session)?.access_token
        });
        if (d) {
          return this._returnResult({
            data: null,
            error: d
          });
        } else {
          return this._returnResult({
            data: c,
            error: null
          });
        }
      });
    } catch (e) {
      if (ne(e)) {
        return this._returnResult({
          data: null,
          error: e
        });
      }
      throw e;
    }
  }
  async _unenrollRecoveryCodes() {
    Ba(this.experimental);
    try {
      return await this._useSession(async e => {
        const {
          data: i,
          error: l
        } = e;
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        }
        const {
          data: c,
          error: d
        } = await ue(this.fetch, "DELETE", `${this.url}/factors/recovery-codes`, {
          headers: this.headers,
          jwt: (i == null ? undefined : i.session)?.access_token
        });
        if (d) {
          return this._returnResult({
            data: null,
            error: d
          });
        } else {
          return this._returnResult({
            data: c,
            error: null
          });
        }
      });
    } catch (e) {
      if (ne(e)) {
        return this._returnResult({
          data: null,
          error: e
        });
      }
      throw e;
    }
  }
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async r => {
        const {
          data: {
            session: i
          },
          error: l
        } = r;
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        } else if (i) {
          return await ue(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
            headers: this.headers,
            jwt: i.access_token,
            xform: c => ({
              data: c,
              error: null
            })
          });
        } else {
          return this._returnResult({
            data: null,
            error: new ft()
          });
        }
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
  async _approveAuthorization(e, r) {
    try {
      return await this._useSession(async i => {
        const {
          data: {
            session: l
          },
          error: c
        } = i;
        if (c) {
          return this._returnResult({
            data: null,
            error: c
          });
        }
        if (!l) {
          return this._returnResult({
            data: null,
            error: new ft()
          });
        }
        const d = await ue(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: l.access_token,
          body: {
            action: "approve"
          },
          xform: h => ({
            data: h,
            error: null
          })
        });
        if (d.data && d.data.redirect_url && vt() && (r == null || !r.skipBrowserRedirect)) {
          window.location.assign(d.data.redirect_url);
        }
        return d;
      });
    } catch (i) {
      if (ne(i)) {
        return this._returnResult({
          data: null,
          error: i
        });
      }
      throw i;
    }
  }
  async _denyAuthorization(e, r) {
    try {
      return await this._useSession(async i => {
        const {
          data: {
            session: l
          },
          error: c
        } = i;
        if (c) {
          return this._returnResult({
            data: null,
            error: c
          });
        }
        if (!l) {
          return this._returnResult({
            data: null,
            error: new ft()
          });
        }
        const d = await ue(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: l.access_token,
          body: {
            action: "deny"
          },
          xform: h => ({
            data: h,
            error: null
          })
        });
        if (d.data && d.data.redirect_url && vt() && (r == null || !r.skipBrowserRedirect)) {
          window.location.assign(d.data.redirect_url);
        }
        return d;
      });
    } catch (i) {
      if (ne(i)) {
        return this._returnResult({
          data: null,
          error: i
        });
      }
      throw i;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async e => {
        const {
          data: {
            session: r
          },
          error: i
        } = e;
        if (i) {
          return this._returnResult({
            data: null,
            error: i
          });
        } else if (r) {
          return await ue(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: r.access_token,
            xform: l => ({
              data: l,
              error: null
            })
          });
        } else {
          return this._returnResult({
            data: null,
            error: new ft()
          });
        }
      });
    } catch (e) {
      if (ne(e)) {
        return this._returnResult({
          data: null,
          error: e
        });
      }
      throw e;
    }
  }
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async r => {
        const {
          data: {
            session: i
          },
          error: l
        } = r;
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        } else if (i) {
          await ue(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: i.access_token,
            query: {
              client_id: e.clientId
            },
            noResolveJson: true
          });
          return {
            data: {},
            error: null
          };
        } else {
          return this._returnResult({
            data: null,
            error: new ft()
          });
        }
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
  async fetchJwk(e, r = {
    keys: []
  }) {
    let i = r.keys.find(h => h.kid === e);
    if (i) {
      return i;
    }
    const l = Date.now();
    i = this.jwks.keys.find(h => h.kid === e);
    if (i && this.jwks_cached_at + x_ > l) {
      return i;
    }
    const {
      data: c,
      error: d
    } = await ue(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (d) {
      throw d;
    }
    if (!c.keys || c.keys.length === 0 || (this.jwks = c, this.jwks_cached_at = l, i = c.keys.find(h => h.kid === e), !i)) {
      return null;
    } else {
      return i;
    }
  }
  async getClaims(e, r = {}) {
    try {
      let i = e;
      if (!i) {
        const {
          data: v,
          error: j
        } = await this.getSession();
        if (j || !v.session) {
          return this._returnResult({
            data: null,
            error: j
          });
        }
        i = v.session.access_token;
      }
      const {
        header: l,
        payload: c,
        signature: d,
        raw: {
          header: h,
          payload: m
        }
      } = To(i);
      if (r == null || !r.allowExpired) {
        try {
          H_(c.exp);
        } catch (v) {
          throw new qo(v instanceof Error ? v.message : "JWT validation failed");
        }
      }
      const g = !l.alg || l.alg.startsWith("HS") || !l.kid || !("crypto" in globalThis) || !("subtle" in globalThis.crypto) ? null : await this.fetchJwk(l.kid, r != null && r.keys ? {
        keys: r.keys
      } : r == null ? undefined : r.jwks);
      if (!g) {
        const {
          error: v
        } = await this.getUser(i);
        if (v) {
          throw v;
        }
        return {
          data: {
            claims: c,
            header: l,
            signature: d
          },
          error: null
        };
      }
      const w = V_(l.alg);
      const y = await crypto.subtle.importKey("jwk", g, w, true, ["verify"]);
      if (!(await crypto.subtle.verify(w, y, d, N_(`${h}.${m}`)))) {
        throw new qo("Invalid JWT signature");
      }
      return {
        data: {
          claims: c,
          header: l,
          signature: d
        },
        error: null
      };
    } catch (i) {
      if (ne(i)) {
        return this._returnResult({
          data: null,
          error: i
        });
      }
      throw i;
    }
  }
  async signInWithPasskey(e) {
    try {
      if (!Ko()) {
        return this._returnResult({
          data: null,
          error: new _n("Browser does not support WebAuthn", null)
        });
      }
      const {
        data: d,
        error: h
      } = await this._startPasskeyAuthentication({
        options: {
          captchaToken: (e == null ? undefined : e.options)?.captchaToken
        }
      });
      if (h || !d) {
        return this._returnResult({
          data: null,
          error: h
        });
      }
      const m = Dm(d.options);
      const g = (e == null ? undefined : e.options)?.signal ?? Eu.createNewAbortSignal();
      const {
        data: w,
        error: y
      } = await rg({
        publicKey: m,
        signal: g,
        mediation: (e == null ? undefined : e.options)?.mediation
      });
      if (y || !w) {
        return this._returnResult({
          data: null,
          error: y ?? new _n("WebAuthn ceremony failed", null)
        });
      }
      const _ = Um(w);
      return this._verifyPasskeyAuthentication({
        challengeId: d.challenge_id,
        credential: _
      });
    } catch (d) {
      if (ne(d)) {
        return this._returnResult({
          data: null,
          error: d
        });
      }
      throw d;
    }
  }
  async registerPasskey(e) {
    try {
      if (!Ko()) {
        return this._returnResult({
          data: null,
          error: new _n("Browser does not support WebAuthn", null)
        });
      }
      const {
        data: l,
        error: c
      } = await this._startPasskeyRegistration();
      if (c || !l) {
        return this._returnResult({
          data: null,
          error: c
        });
      }
      const d = Lm(l.options);
      const h = (e == null ? undefined : e.options)?.signal ?? Eu.createNewAbortSignal();
      const {
        data: m,
        error: g
      } = await ng({
        publicKey: d,
        signal: h
      });
      if (g || !m) {
        return this._returnResult({
          data: null,
          error: g ?? new _n("WebAuthn ceremony failed", null)
        });
      }
      const w = Mm(m);
      return this._verifyPasskeyRegistration({
        challengeId: l.challenge_id,
        credential: w
      });
    } catch (l) {
      if (ne(l)) {
        return this._returnResult({
          data: null,
          error: l
        });
      }
      throw l;
    }
  }
  async _startPasskeyRegistration() {
    try {
      return await this._useSession(async e => {
        const {
          data: {
            session: r
          },
          error: i
        } = e;
        if (i) {
          return this._returnResult({
            data: null,
            error: i
          });
        }
        if (!r) {
          return this._returnResult({
            data: null,
            error: new ft()
          });
        }
        const {
          data: l,
          error: c
        } = await ue(this.fetch, "POST", `${this.url}/passkeys/registration/options`, {
          headers: this.headers,
          jwt: r.access_token,
          body: {}
        });
        if (c) {
          return this._returnResult({
            data: null,
            error: c
          });
        } else {
          return this._returnResult({
            data: l,
            error: null
          });
        }
      });
    } catch (e) {
      if (ne(e)) {
        return this._returnResult({
          data: null,
          error: e
        });
      }
      throw e;
    }
  }
  async _verifyPasskeyRegistration(e) {
    try {
      return await this._useSession(async r => {
        const {
          data: {
            session: i
          },
          error: l
        } = r;
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        }
        if (!i) {
          return this._returnResult({
            data: null,
            error: new ft()
          });
        }
        const {
          data: c,
          error: d
        } = await ue(this.fetch, "POST", `${this.url}/passkeys/registration/verify`, {
          headers: this.headers,
          jwt: i.access_token,
          body: {
            challenge_id: e.challengeId,
            credential: e.credential
          }
        });
        if (d) {
          return this._returnResult({
            data: null,
            error: d
          });
        } else {
          return this._returnResult({
            data: c,
            error: null
          });
        }
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
  async _startPasskeyAuthentication(e) {
    try {
      const {
        data: i,
        error: l
      } = await ue(this.fetch, "POST", `${this.url}/passkeys/authentication/options`, {
        headers: this.headers,
        body: {
          gotrue_meta_security: {
            captcha_token: (e == null ? undefined : e.options)?.captchaToken
          }
        }
      });
      if (l) {
        return this._returnResult({
          data: null,
          error: l
        });
      } else {
        return this._returnResult({
          data: i,
          error: null
        });
      }
    } catch (i) {
      if (ne(i)) {
        return this._returnResult({
          data: null,
          error: i
        });
      }
      throw i;
    }
  }
  async _verifyPasskeyAuthentication(e) {
    try {
      const {
        data: r,
        error: i
      } = await ue(this.fetch, "POST", `${this.url}/passkeys/authentication/verify`, {
        headers: this.headers,
        body: {
          challenge_id: e.challengeId,
          credential: e.credential
        },
        xform: rn
      });
      if (i) {
        return this._returnResult({
          data: null,
          error: i
        });
      } else {
        if (r.session) {
          await this._saveSession(r.session);
          await this._notifyAllSubscribers("SIGNED_IN", r.session);
        }
        return this._returnResult({
          data: r,
          error: null
        });
      }
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
  async _listPasskeys() {
    try {
      return await this._useSession(async e => {
        const {
          data: {
            session: r
          },
          error: i
        } = e;
        if (i) {
          return this._returnResult({
            data: null,
            error: i
          });
        }
        if (!r) {
          return this._returnResult({
            data: null,
            error: new ft()
          });
        }
        const {
          data: l,
          error: c
        } = await ue(this.fetch, "GET", `${this.url}/passkeys`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: d => ({
            data: d,
            error: null
          })
        });
        if (c) {
          return this._returnResult({
            data: null,
            error: c
          });
        } else {
          return this._returnResult({
            data: l,
            error: null
          });
        }
      });
    } catch (e) {
      if (ne(e)) {
        return this._returnResult({
          data: null,
          error: e
        });
      }
      throw e;
    }
  }
  async _updatePasskey(e) {
    try {
      return await this._useSession(async r => {
        const {
          data: {
            session: i
          },
          error: l
        } = r;
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        }
        if (!i) {
          return this._returnResult({
            data: null,
            error: new ft()
          });
        }
        const {
          data: c,
          error: d
        } = await ue(this.fetch, "PATCH", `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: i.access_token,
          body: {
            friendly_name: e.friendlyName
          }
        });
        if (d) {
          return this._returnResult({
            data: null,
            error: d
          });
        } else {
          return this._returnResult({
            data: c,
            error: null
          });
        }
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
  async _deletePasskey(e) {
    try {
      return await this._useSession(async r => {
        const {
          data: {
            session: i
          },
          error: l
        } = r;
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        }
        if (!i) {
          return this._returnResult({
            data: null,
            error: new ft()
          });
        }
        const {
          error: c
        } = await ue(this.fetch, "DELETE", `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: i.access_token,
          noResolveJson: true
        });
        if (c) {
          return this._returnResult({
            data: null,
            error: c
          });
        } else {
          return this._returnResult({
            data: null,
            error: null
          });
        }
      });
    } catch (r) {
      if (ne(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
}
ii.nextInstanceID = {};
const pj = ii;
const gj = "2.118.0";
let Ha = "";
let Jo;
if (typeof Deno !== "undefined") {
  Ha = "deno";
  Jo = Deno.version?.deno;
} else if (typeof document !== "undefined") {
  Ha = "web";
} else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
  Ha = "react-native";
} else {
  var tu;
  Ha = "node";
  const n = globalThis.process;
  Jo = n == null || (tu = n.version) === null || tu === undefined ? undefined : tu.replace(/^v/, "");
}
const sg = [`runtime=${Ha}`];
if (Jo) {
  sg.push(`runtime-version=${Jo}`);
}
const vj = {
  "X-Client-Info": `supabase-js/${gj}; ${sg.join("; ")}`
};
const yj = {
  headers: vj
};
const wj = {
  schema: "public"
};
const xj = {
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  flowType: "implicit"
};
const _j = {};
const jj = {
  enabled: false,
  respectSamplingDecision: true
};
function kj(n) {
  if (!n || typeof n != "string") {
    return null;
  }
  const e = n.split("-");
  if (e.length !== 4) {
    return null;
  }
  const [r, i, l, c] = e;
  if (r.length !== 2 || i.length !== 32 || l.length !== 16 || c.length !== 2) {
    return null;
  }
  const d = /^[0-9a-f]+$/i;
  if (!d.test(r) || !d.test(i) || !d.test(l) || !d.test(c) || i === "00000000000000000000000000000000" || l === "0000000000000000") {
    return null;
  } else {
    return {
      version: r,
      traceId: i,
      parentId: l,
      traceFlags: c,
      isSampled: (parseInt(c, 16) & 1) === 1
    };
  }
}
function bj(n, e) {
  if (!n || !e || e.length === 0) {
    return false;
  }
  let r;
  if (n instanceof URL) {
    r = n;
  } else {
    try {
      r = new URL(n);
    } catch {
      return false;
    }
  }
  for (const i of e) {
    try {
      if (typeof i == "string") {
        if (Sj(r.hostname, i)) {
          return true;
        }
      } else if (i instanceof RegExp) {
        if (i.test(r.hostname)) {
          return true;
        }
      } else if (typeof i == "function" && i(r)) {
        return true;
      }
    } catch {
      continue;
    }
  }
  return false;
}
function Sj(n, e) {
  if (e === n) {
    return true;
  }
  if (e.startsWith("*.")) {
    const r = e.slice(2);
    if (n.endsWith(r) && (n === r || n.endsWith("." + r))) {
      return true;
    }
  }
  return false;
}
function Cj(n) {
  const e = [];
  try {
    const r = new URL(n);
    e.push(r.hostname);
  } catch {}
  e.push("*.supabase.co", "*.supabase.in");
  e.push("localhost", "127.0.0.1", "[::1]");
  return e;
}
function oi(n) {
  "@babel/helpers - typeof";

  oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  };
  return oi(n);
}
function Ej(n, e) {
  if (oi(n) != "object" || !n) {
    return n;
  }
  var r = n[Symbol.toPrimitive];
  if (r !== undefined) {
    var i = r.call(n, e);
    if (oi(i) != "object") {
      return i;
    }
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Nj(n) {
  var e = Ej(n, "string");
  if (oi(e) == "symbol") {
    return e;
  } else {
    return e + "";
  }
}
function Tj(n, e, r) {
  if ((e = Nj(e)) in n) {
    Object.defineProperty(n, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    n[e] = r;
  }
  return n;
}
function Bm(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    if (e) {
      i = i.filter(function (l) {
        return Object.getOwnPropertyDescriptor(n, l).enumerable;
      });
    }
    r.push.apply(r, i);
  }
  return r;
}
function tt(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] ?? {};
    if (e % 2) {
      Bm(Object(r), true).forEach(function (i) {
        Tj(n, i, r[i]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(n, Object.getOwnPropertyDescriptors(r));
    } else {
      Bm(Object(r)).forEach(function (i) {
        Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(r, i));
      });
    }
  }
  return n;
}
const Rj = n => n ? (...e) => n(...e) : (...e) => fetch(...e);
const Ij = () => Headers;
const ag = n => n.startsWith("sb_publishable_") || n.startsWith("sb_secret_");
const Aj = "sb_temp_";
const zm = new Set();
const Pj = n => {
  if (!n.startsWith("sb_") || ag(n) || n.startsWith(Aj)) {
    return;
  }
  const i = n.match(/^sb_[a-zA-Z0-9]+_/)?.[0] ?? "unknown";
  if (!zm.has(i)) {
    zm.add(i);
    console.warn("@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type.");
  }
};
const Wm = (n, e, r, i, l, c) => {
  const d = Rj(i);
  const h = Ij();
  const m = (l == null ? undefined : l.enabled) === true;
  const g = (l == null ? undefined : l.respectSamplingDecision) !== false;
  const w = m ? Cj(e) : null;
  const y = c == null || !c.omitApiKeyAsBearer || !ag(n);
  return async (_, v) => {
    const j = await r();
    let b = new h(v == null ? undefined : v.headers);
    if (!b.has("apikey")) {
      b.set("apikey", n);
    }
    if (!b.has("Authorization")) {
      const C = j ?? (y ? n : null);
      if (C) {
        b.set("Authorization", `Bearer ${C}`);
      }
    }
    if (w) {
      const C = Oj(_, w, g);
      if (C) {
        if (C.traceparent && !b.has("traceparent")) {
          b.set("traceparent", C.traceparent);
        }
        if (C.tracestate && !b.has("tracestate")) {
          b.set("tracestate", C.tracestate);
        }
        if (C.baggage && !b.has("baggage")) {
          b.set("baggage", C.baggage);
        }
      }
    }
    return d(_, tt(tt({}, v), {}, {
      headers: b
    }));
  };
};
let qm = false;
let Hm = false;
function Oj(n, e, r) {
  const i = Aw();
  if (!i) {
    if (!qm) {
      qm = true;
      console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.");
    }
    return null;
  }
  if (!bj(typeof n == "string" || n instanceof URL ? n : n.url, e)) {
    return null;
  }
  const l = i();
  if (!l || !l.traceparent) {
    var c;
    if (l != null && (c = l.carrierKeys) !== null && c !== undefined && c.length && !Hm) {
      Hm = true;
      const d = l.carrierKeys.includes("sentry-trace") ? " Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it." : " Configure your tracing SDK to emit W3C trace context on outgoing requests.";
      console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${l.carrierKeys.join(", ")}] and no W3C traceparent header, so trace headers will not be attached.${d}`);
    }
    return null;
  }
  if (r) {
    const d = kj(l.traceparent);
    if (d && !d.isSampled) {
      return {
        traceparent: l.traceparent
      };
    }
  }
  return l;
}
function Vm(n) {
  if (typeof n == "boolean") {
    return {
      enabled: n
    };
  } else {
    return n;
  }
}
function $j(n) {
  if (n.endsWith("/")) {
    return n;
  } else {
    return n + "/";
  }
}
let Km = false;
function Lj(n) {
  if (!Km && typeof n == "object" && n !== null && !!("schema" in n) && n.schema !== undefined) {
    Km = true;
    console.warn(`@supabase/supabase-js: The "schema" option must be nested under "db", e.g. createClient(url, key, { db: { schema: 'myschema' } }). A top-level "schema" is ignored and queries go to the default schema.`);
  }
}
function Dj(n, e) {
  const {
    db: m,
    auth: g,
    realtime: w,
    global: y
  } = n;
  const {
    db: _,
    auth: v,
    realtime: j,
    global: b
  } = e;
  const C = Vm(n.tracePropagation);
  const O = Vm(e.tracePropagation);
  const L = {
    db: tt(tt({}, _), m),
    auth: tt(tt({}, v), g),
    realtime: tt(tt({}, j), w),
    storage: {},
    global: tt(tt(tt({}, b), y), {}, {
      headers: tt(tt({}, (b == null ? undefined : b.headers) ?? {}), (y == null ? undefined : y.headers) ?? {})
    }),
    tracePropagation: {
      enabled: (C == null ? undefined : C.enabled) ?? (O == null ? undefined : O.enabled) ?? false,
      respectSamplingDecision: (C == null ? undefined : C.respectSamplingDecision) ?? (O == null ? undefined : O.respectSamplingDecision) ?? true
    },
    accessToken: async () => ""
  };
  if (n.accessToken) {
    L.accessToken = n.accessToken;
  } else {
    delete L.accessToken;
  }
  return L;
}
function Mj(n) {
  const e = n == null ? undefined : n.trim();
  if (!e) {
    throw new Error("supabaseUrl is required.");
  }
  if (!e.match(/^https?:\/\//i)) {
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  }
  try {
    return new URL($j(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var Uj = class extends pj {
  constructor(n) {
    super(n);
  }
};
var Fj = class {
  constructor(n, e, r) {
    this.supabaseUrl = n;
    this.supabaseKey = e;
    const c = Mj(n);
    if (!e) {
      throw new Error("supabaseKey is required.");
    }
    Pj(e);
    Lj(r);
    this.realtimeUrl = new URL("realtime/v1", c);
    this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws");
    this.authUrl = new URL("auth/v1", c);
    this.storageUrl = new URL("storage/v1", c);
    this.functionsUrl = new URL("functions/v1", c);
    const d = `sb-${c.hostname.split(".")[0]}-auth-token`;
    const h = {
      db: wj,
      realtime: _j,
      auth: tt(tt({}, xj), {}, {
        storageKey: d
      }),
      global: yj,
      tracePropagation: jj
    };
    const m = Dj(r ?? {}, h);
    this.settings = m;
    this.storageKey = m.auth.storageKey ?? "";
    this.headers = m.global.headers ?? {};
    if (m.accessToken) {
      this.accessToken = m.accessToken;
      this.auth = new Proxy({}, {
        get: (w, y) => {
          throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(y)} is not possible`);
        }
      });
    } else {
      this.auth = this._initSupabaseAuthClient(m.auth ?? {}, this.headers, m.global.fetch);
    }
    this.fetch = Wm(e, n, this._getSessionToken.bind(this), m.global.fetch, m.tracePropagation);
    this.functionsFetch = Wm(e, n, this._getSessionToken.bind(this), m.global.fetch, m.tracePropagation, {
      omitApiKeyAsBearer: true
    });
    this.realtime = this._initRealtimeClient(tt({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this),
      fetch: this.fetch
    }, m.realtime));
    if (this.accessToken) {
      Promise.resolve(this.accessToken()).then(w => this.realtime.setAuth(w)).catch(w => console.warn("Failed to set initial Realtime auth token:", w));
    }
    this.rest = new Vw(new URL("rest/v1", c).href, {
      headers: this.headers,
      schema: m.db.schema,
      fetch: this.fetch,
      timeout: m.db.timeout,
      urlLengthLimit: m.db.urlLengthLimit,
      retry: m.db.retry
    });
    this.storage = new f_(this.storageUrl.href, this.headers, this.fetch, r == null ? undefined : r.storage);
    if (!m.accessToken) {
      this._listenForAuthEvents();
    }
  }
  get functions() {
    return new Lw(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.functionsFetch
    });
  }
  from(n) {
    return this.rest.from(n);
  }
  schema(n) {
    return this.rest.schema(n);
  }
  getOpenApiSpec() {
    return this.rest.getOpenApiSpec();
  }
  rpc(n, e = {}, r = {
    head: false,
    get: false,
    count: undefined
  }) {
    return this.rest.rpc(n, e, r);
  }
  channel(n, e = {
    config: {}
  }) {
    return this.realtime.channel(n, e);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(n) {
    return this.realtime.removeChannel(n);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getSessionToken() {
    var n = this;
    if (n.accessToken) {
      return await n.accessToken();
    }
    const {
      data: i
    } = await n.auth.getSession();
    return i.session?.access_token ?? null;
  }
  async _getAccessToken() {
    var n = this;
    return (await n._getSessionToken()) ?? n.supabaseKey;
  }
  _initSupabaseAuthClient({
    autoRefreshToken: n,
    persistSession: e,
    detectSessionInUrl: r,
    storage: i,
    userStorage: l,
    storageKey: c,
    flowType: d,
    lock: h,
    debug: m,
    throwOnError: g,
    experimental: w,
    lockAcquireTimeout: y,
    skipAutoInitialize: _
  }, v, j) {
    const b = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Uj({
      url: this.authUrl.href,
      headers: tt(tt({}, b), v),
      storageKey: c,
      autoRefreshToken: n,
      persistSession: e,
      detectSessionInUrl: r,
      storage: i,
      userStorage: l,
      flowType: d,
      lock: h,
      debug: m,
      throwOnError: g,
      experimental: w,
      fetch: j,
      lockAcquireTimeout: y,
      skipAutoInitialize: _,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some(C => C.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(n) {
    return new Dx(this.realtimeUrl.href, tt(tt({}, n), {}, {
      params: tt(tt({}, {
        apikey: this.supabaseKey
      }), n == null ? undefined : n.params)
    }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((n, e) => {
      this._handleTokenChanged(n, "CLIENT", e == null ? undefined : e.access_token);
    });
  }
  _handleTokenChanged(n, e, r) {
    if ((n === "TOKEN_REFRESHED" || n === "SIGNED_IN" || n === "INITIAL_SESSION") && this.changedAccessToken !== r) {
      this.changedAccessToken = r;
      this.realtime.setAuth(r);
    } else if (n === "SIGNED_OUT") {
      this.realtime.setAuth();
      if (e == "STORAGE") {
        this.auth.signOut();
      }
      this.changedAccessToken = undefined;
    }
  }
};
const Bj = (n, e, r) => new Fj(n, e, r);
function zj() {
  if (typeof window !== "undefined" || globalThis.Deno !== undefined) {
    return false;
  }
  const n = globalThis.process;
  if (!n) {
    return false;
  }
  const e = n.version;
  if (e == null) {
    return false;
  }
  const r = e.match(/^v(\d+)\./);
  if (r) {
    return parseInt(r[1], 10) <= 20;
  } else {
    return false;
  }
}
if (zj()) {
  console.warn("⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715");
}
const ig = "".trim();
const og = "".trim();
const lg = !!ig && !!og;
let nu = null;
function ru() {
  if (lg) {
    nu ||= Bj(ig, og, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
    return nu;
  } else {
    return null;
  }
}
const cg = k.createContext(null);
function Nu() {
  const n = k.useContext(cg);
  if (!n) {
    throw new Error("useSession must be used inside <SessionProvider>");
  }
  return n;
}
function Wj() {
  try {
    const n = window.localStorage.getItem(du);
    if (n) {
      return JSON.parse(n);
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
function Gm(n) {
  try {
    if (n) {
      window.localStorage.setItem(du, JSON.stringify(n));
    } else {
      window.localStorage.removeItem(du);
    }
  } catch {}
}
function _Component43({
  children: n
}) {
  const [e, r] = k.useState(null);
  const [i, l] = k.useState(false);
  const [c, d] = k.useState(null);
  k.useEffect(() => {
    let w = false;
    const y = ru();
    if (!y) {
      r(Wj());
      l(true);
      return () => {
        w = true;
      };
    }
    (async () => {
      var b;
      const {
        data: v
      } = await y.auth.getSession();
      if (w) {
        return;
      }
      const j = v.session;
      r(j != null && j.user ? {
        id: j.user.id,
        email: j.user.email ?? "",
        displayName: ((b = j.user.user_metadata) == null ? undefined : b.display_name) ?? j.user.email ?? ""
      } : null);
      l(true);
    })();
    const {
      data: _
    } = y.auth.onAuthStateChange((v, j) => {
      var b;
      r(j != null && j.user ? {
        id: j.user.id,
        email: j.user.email ?? "",
        displayName: ((b = j.user.user_metadata) == null ? undefined : b.display_name) ?? j.user.email ?? ""
      } : null);
    });
    return () => {
      w = true;
      _.subscription.unsubscribe();
    };
  }, []);
  const h = k.useCallback(async (w, y) => {
    d(null);
    const _ = ru();
    if (_) {
      const {
        error: j
      } = await _.auth.signInWithPassword({
        email: w,
        password: y
      });
      if (j) {
        d("Those credentials did not work. Check them and try again.");
        return;
      }
      return;
    }
    if (!w.trim() || y.length < 4) {
      d("Enter an email address and a password of at least four characters.");
      return;
    }
    const v = {
      id: "m-sofia",
      email: w.trim(),
      displayName: w.split("@")[0].replace(/[._-]/g, " ")
    };
    Gm(v);
    r(v);
  }, []);
  const m = k.useCallback(async () => {
    const w = ru();
    if (w) {
      await w.auth.signOut();
    }
    Gm(null);
    r(null);
  }, []);
  const g = k.useMemo(() => ({
    user: e,
    ready: i,
    mode: lg ? "supabase" : "demo",
    signIn: h,
    signOut: m,
    error: c
  }), [e, i, h, m, c]);
  return <cg.Provider value={g}>{n}</cg.Provider>;
}
function Hj({
  children: n
}) {
  const {
    user: e,
    ready: r
  } = Nu();
  const i = On();
  if (r) {
    if (e) {
      return <a.Fragment>{n}</a.Fragment>;
    } else {
      return <Pu to="/signin" replace={true} state={{
        from: `${i.pathname}${i.search}`
      }} />;
    }
  } else {
    return <div className="app" style={{
      display: "grid",
      placeItems: "center",
      minHeight: "70vh"
    }}><De label="Loading"><p className="card__sub">Checking your session…</p></De></div>;
  }
}
function Vj() {
  var y;
  const {
    signIn: n,
    user: e,
    mode: r
  } = Nu();
  const i = On();
  const [l, c] = k.useState("sofia@salescrm.app");
  const [d, h] = k.useState("rapport-demo");
  const [m, g] = k.useState(false);
  const w = Nu().error;
  k.useEffect(() => {
    var _;
    Du(((_ = window.localStorage.getItem("rapport:theme")) == null ? undefined : _.replace(/"/g, "")) ?? "light");
  }, []);
  if (e) {
    const _ = (y = i.state) == null ? undefined : y.from;
    return <Pu to={_ ?? "/overview"} replace={true} />;
  }
  return <main className="app" style={{
    display: "grid",
    placeItems: "center",
    minHeight: "100dvh"
  }}><De label="Sign in" className="signin"><div style={{
        display: "grid",
        gap: 14,
        justifyItems: "center",
        maxWidth: 380,
        padding: "10px 4px"
      }}><span className="brand__mark" aria-hidden="true"><_p /></span><h1 className="brand" style={{
          fontSize: 24
        }}>Sales CRM</h1><p className="card__sub" style={{
          textAlign: "center"
        }}>Sign in to your workspace. {r === "demo" ? <a.Fragment>Supabase is not configured, so this runs a local demo session — any email and a password of four or more characters will do.</a.Fragment> : <a.Fragment>Your session is managed by Supabase Auth.</a.Fragment>}</p><form style={{
          display: "grid",
          gap: 12,
          width: "100%"
        }} onSubmit={async _ => {
          _.preventDefault();
          g(true);
          await n(l, d);
          g(false);
        }}><Ne label="Email" htmlFor="signin-email"><_Component1 id="signin-email" type="email" autoComplete="email" required={true} value={l} onChange={_ => c(_.target.value)} /></Ne><Ne label="Password" htmlFor="signin-password"><_Component1 id="signin-password" type="password" autoComplete="current-password" required={true} minLength={4} value={d} onChange={_ => h(_.target.value)} /></Ne><p className="mform__err" role="alert" aria-live="polite">{w ?? ""}</p><Se type="submit" disabled={m}>{m ? "Signing in…" : "Sign in"}</Se></form><p className="card__sub" style={{
          textAlign: "center"
        }}>Routed to protect every module: deep links are restored after you sign in.</p></div></De></main>;
}
function zu() {
  const [n, e] = k.useState(null);
  return {
    tip: n,
    move: (l, c) => {
      const h = l.currentTarget.getBoundingClientRect();
      e({
        x: l.clientX - h.left,
        y: l.clientY - h.top,
        lines: c
      });
    },
    leave: () => e(null)
  };
}
function Wu({
  tip: n
}) {
  if (n) {
    return <div className="chart__tip is-on chart__tip--follow" role="status" style={{
      left: n.x,
      top: n.y
    }}>{n.lines}</div>;
  } else {
    return null;
  }
}
function _Component12({
  series: n,
  xLabels: e,
  height: r = 236,
  format: i = c => Xe(c),
  ariaLabel: l
}) {
  var le;
  const [c, d] = k.useState(null);
  const h = 715;
  const m = 44;
  const g = 14;
  const w = 12;
  const y = 26;
  const _ = k.useMemo(() => {
    const G = n.flatMap(be => be.values);
    const B = Math.max(1, ...G);
    const re = 10 ** Math.floor(Math.log10(B));
    return Math.ceil(B / re) * re;
  }, [n]);
  const v = ((le = n[0]) == null ? undefined : le.values.length) ?? 0;
  const j = n.map(G => `${G.key}:${G.values.join(",")}`).join("|");
  const b = h - m - g;
  const C = r - w - y;
  const O = v > 1 ? b / (v - 1) : b;
  const L = G => m + G * O;
  const R = G => w + C - G / _ * C;
  const W = (G, B) => {
    if (!G.length) {
      return "";
    }
    const re = G.map((q, ge) => [L(ge), R(q)]);
    let be = `M${re[0][0]},${re[0][1]}`;
    for (let q = 1; q < re.length; q += 1) {
      const [ge, _e] = re[q - 1];
      const [K, D] = re[q];
      const H = (ge + K) / 2;
      be += ` C${H},${_e} ${H},${D} ${K},${D}`;
    }
    if (B) {
      be += ` L${re[re.length - 1][0]},${w + C} L${re[0][0]},${w + C} Z`;
    }
    return be;
  };
  const I = [0, 1, 2].map(G => _ / 2 * G).reverse();
  const z = `g-${l.replace(/[^a-zA-Z0-9]/g, "")}`;
  const X = `c-${l.replace(/[^a-zA-Z0-9]/g, "")}`;
  return <div className="chart" tabIndex={0} aria-label={l} role="img"><svg className="chart__svg" viewBox={`0 0 ${h} ${r}`} width="100%" height={r}><defs><linearGradient id={z} x1="0" x2="0" y1="0" y2="1"><stop className="chart__stop0" offset="0" /><stop className="chart__stop1" offset="1" /></linearGradient><clipPath id={X}><rect x="0" y="0" width={h} height={r} /></clipPath></defs><g className="chart__grid">{I.map((G, B) => {
          const re = R(G);
          return <g key={G}><line x1={m} x2={h - g} y1={re} y2={re} /><text x={m - 8} y={re + 4} textAnchor="end">{i(G)}</text>{B === 0 && <title>{`Axis top ${i(_)}`}</title>}</g>;
        })}</g><g className="chart__plot" clipPath={`url(#${X})`} key={j}>{n.map(G => <g key={G.key}>{G.area && <path className={`chart__area chart__area--${G.tone}`} fill={`url(#${z})`} d={W(G.values, true)} style={{
            "--area": `var(--${G.tone === "muted" ? "faint" : G.tone})`
          }} />}{G.dashed ? <path className={`chart__line chart__line--${G.tone} is-dashed`} d={W(G.values, false)} /> : <path className={`chart__line chart__line--${G.tone}`} pathLength={1} d={W(G.values, false)} />}</g>)}</g><g className="chart__x">{e.map((G, B) => <text x={L(B)} y={r - 6} textAnchor="middle" key={`${G}-${B}`}>{G}</text>)}</g>{c !== null && v > 1 && <line className="chart__cross is-on" x1={L(c)} x2={L(c)} y1={w} y2={w + C} />}{c !== null && v > 1 && <g>{n.map(G => <circle className={`chart__dot chart__dot--${G.tone}`} cx={L(c)} cy={R(G.values[c] ?? 0)} r={4} key={G.key} />)}</g>}</svg><div style={{
      position: "absolute",
      inset: 0,
      display: "flex"
    }} onMouseLeave={() => d(null)} onKeyDown={G => {
      if (G.key === "ArrowRight") {
        d(B => Math.min(v - 1, (B ?? -1) + 1));
      }
      if (G.key === "ArrowLeft") {
        d(B => Math.max(0, (B ?? v) - 1));
      }
      if (G.key === "Escape") {
        d(null);
      }
    }}>{e.map((G, B) => <button type="button" aria-label={`${G}: ${n.map(re => `${re.label} ${i(re.values[B] ?? 0)}`).join(", ")}`} style={{
        flex: 1,
        background: "none",
        border: 0,
        cursor: "crosshair"
      }} onMouseEnter={() => d(B)} onFocus={() => d(B)} key={`hit-${G}-${B}`} />)}</div><div className={`chart__tip ${c !== null ? "is-on" : ""}`} role="status" aria-live="polite"><span>{c !== null ? e[c] : ""}</span>{n.map(G => <span key={G.key}><i className={`tone--${G.tone}`} />{G.label}<strong>{c !== null ? i(G.values[c] ?? 0) : ""}</strong></span>)}</div></div>;
}
function Jm({
  columns: n,
  series: e,
  format: r = d => Xe(d),
  ariaLabel: i,
  stacked: l = true,
  height: c = 220
}) {
  const d = n.map((y, _) => e.reduce((v, j) => v + (j.values[_] ?? 0), 0));
  const h = Math.max(1, ...d);
  const {
    tip: m,
    move: g,
    leave: w
  } = zu();
  return <div className="gcols" onMouseLeave={w}><div className="gcols__grid" aria-hidden="true" style={{
      bottom: 22
    }}>{[h, h / 2, 0].map(y => <div className="gcols__line" key={y}><span>{r(y)}</span></div>)}</div><div className="gcols__plot" role="list" aria-label={i} style={{
      height: c
    }}>{n.map((y, _) => <div className="gcols__col" role="listitem" tabIndex={0} aria-label={`${y}: ${d[_] ? r(d[_]) : "0"} — ${e.map(v => `${v.label} ${r(v.values[_] ?? 0)}`).join(", ")}`} onMouseMove={v => g(v, <a.Fragment><span>{y}</span>{e.map(j => <span key={j.key}><i className={`tone--${j.tone}`} />{j.label}<strong>{r(j.values[_] ?? 0)}</strong></span>)}{e.length > 1 && <span><strong>{d[_] ? r(d[_]) : "0"}</strong></span>}</a.Fragment>)} key={`${y}-${_}`}><div className="gcols__track"><div className="gcols__stack" style={{
            height: `${Math.max(2, (d[_] ?? 0) / h * 100)}%`,
            "--i": _
          }}>{e.map(v => {
              const j = v.values[_] ?? 0;
              if (!j) {
                return null;
              }
              const b = l ? d[_] ? j / d[_] : 0 : j / h;
              return <span className={`gcols__piece gcols__piece--${v.tone}`} style={{
                height: `${b * 100}%`
              }} key={v.key} />;
            })}</div></div><span className="gcols__lab">{y}</span></div>)}<Wu tip={m} /></div><div className="legend" style={{
      justifyContent: "center",
      marginTop: 8
    }}>{e.map(y => <span key={y.key}><i className={`gcols__piece--${y.tone}`} />{y.label}</span>)}</div></div>;
}
function Kj({
  items: n,
  format: e = i => Xe(i),
  ariaLabel: r
}) {
  const i = Math.max(1, ...n.map(m => m.value));
  const l = n.reduce((m, g, w) => {
    var y;
    if (g.value > (((y = n[m]) == null ? undefined : y.value) ?? -1)) {
      return w;
    } else {
      return m;
    }
  }, 0);
  const {
    tip: c,
    move: d,
    leave: h
  } = zu();
  return <div className="bars" role="list" aria-label={r} onMouseLeave={h}>{n.map((m, g) => <div className={`bars__col ${g === l ? "is-hi" : ""}`} role="listitem" style={{
      "--i": g
    }} aria-label={`${m.label}: ${e(m.value)}`} onMouseMove={w => d(w, <a.Fragment><span>{m.label}</span><span><i className={g === l ? "tone--tomato" : "tone--ink"} />{g === l ? "Peak" : "Total"}<strong>{e(m.value)}</strong></span></a.Fragment>)} key={m.label}><div className="bars__track"><span className={`bars__bar ${g === l ? "" : "bars__bar--ink"}`} style={{
          height: `${Math.max(4, m.value / i * 100)}%`
        }} /></div><span className="bars__lab">{m.label}</span></div>)}<Wu tip={c} /></div>;
}
function Gj({
  segments: n,
  center: e,
  size: r = 168,
  format: i = l => wp(l)
}) {
  const l = n.reduce((y, _) => y + _.value, 0) || 1;
  const c = 72;
  const d = Math.PI * 2 * c;
  const {
    tip: h,
    move: m,
    leave: g
  } = zu();
  let w = 0;
  return <div className="donut" style={{
    width: r,
    "--circ": d.toFixed(1)
  }} onMouseLeave={g}><svg viewBox="0 0 200 200" aria-hidden="true"><circle className="donut__track" cx="100" cy="100" r={c} />{n.map((y, _) => {
        const v = y.value / l * d;
        const j = `${v} ${d - v}`;
        const b = <circle className={`donut__arc tone-stroke--${y.tone}`} style={{
          "--i": _
        }} cx="100" cy="100" r={c} strokeDasharray={j} strokeDashoffset={-w} onMouseMove={C => m(C, <a.Fragment><span><i className={`tone--${y.tone}`} />{y.label ?? y.key}</span><span>{i(y.value)}<strong>{st(y.value / l)}</strong></span></a.Fragment>)} key={y.key} />;
        w += v;
        return b;
      })}</svg><div className="donut__mid">{e}</div><Wu tip={h} /></div>;
}
function Jj({
  company: n
}) {
  return <p className="ov-tile__co">{n ?? "Unassigned account"}</p>;
}
function Qj({
  people: n
}) {
  const e = n.filter(r => !!r);
  if (e.length) {
    return <Pp size="xs" people={e.map(r => ({
      name: r.name
    }))} />;
  } else {
    return null;
  }
}
function Yj({
  task: n,
  company: e,
  timeLabel: r,
  onToggle: i
}) {
  return <div className={`ov-today__row ${n.done ? "is-done" : ""}`}><input className="check" type="checkbox" checked={n.done} aria-label={`Done: ${n.title}`} onChange={l => i(l.target.checked)} /><div className="ov-today__body"><b>{n.title}</b><small>{r}{e ? ` · ${e}` : ""}</small></div><span className={`sch-dot sch-dot--${n.kind}`} aria-hidden="true" /></div>;
}
function Xj({
  tasks: n,
  nameOf: e
}) {
  return <div className="ov-up"><p className="ov-up__head"><span>Coming up</span></p>{n.map(r => {
      const i = new Date(r.at);
      return <div className="ov-up__row" key={r.id}><span className="ov-up__day">{i.toLocaleDateString("en-GB", {
            weekday: "short"
          })}<b>{i.getDate()}</b></span><span><b style={{
            fontSize: 13
          }}>{r.title}</b><small>{ls(r.at)}{r.customerId ? ` · ${e(r.customerId)}` : ""}</small></span></div>;
    })}</div>;
}
function Zj({
  done: n,
  total: e,
  onAdd: r,
  children: i,
  footer: l
}) {
  return <De id="ov-today" className="ov-today" title="Today" tools={<a.Fragment><span className="card__sub">{n} of {e} done</span><Ue label="Add a task for today" onClick={r}><Ut /></Ue></a.Fragment>}><div className="ov-today__list">{i}</div>{l}</De>;
}
function _Component15({
  onOpen: n
}) {
  return null;
}
function _Component33() {
  const {
    data: n,
    repo: e
  } = jn();
  const r = rr();
  const i = on();
  const l = Date.now();
  const [c, d] = k.useState(12);
  const [h, m] = k.useState("team");
  const [g, w] = k.useState(false);
  const y = k.useRef(null);
  const _ = k.useMemo(() => Kt(l, c), [l, c]);
  const v = k.useMemo(() => _.map(({
    start: A,
    end: oe
  }) => Tn(n.deals, A, oe)), [_, n.deals]);
  const j = k.useMemo(() => _.map(({
    start: A
  }) => Va(A)), [_]);
  const b = Ae(n.members.map(A => A.quota)) / 4;
  const C = b / 3;
  const O = By(l);
  const L = Tn(n.deals, O.start, O.end);
  const R = k.useMemo(() => Kt(l, 12).filter(({
    start: A,
    end: oe
  }) => Tn(n.deals, A, oe) >= C).length, [l, n.deals, C]);
  const W = Kt(l, 1)[0];
  const I = Tn(n.deals, W.start, W.end);
  const z = Kt(l, 2)[0];
  const X = Tn(n.deals, z.start, z.end);
  const le = X ? (I - X) / X : 0;
  const G = Ae(an(n.deals).map(A => A.amount));
  const B = Uy(n.deals);
  const re = Fy(n.deals);
  const be = Ae(re.map(A => A.total));
  const q = k.useMemo(() => zy(n.members, n.deals, W.start, W.end), [n.members, n.deals, W.start, W.end]);
  const ge = k.useMemo(() => Wy(n.deals, 6), [n.deals]);
  const _e = Rr(n.tasks, l);
  const K = _e.filter(A => A.done).length;
  const D = pp(n.tasks, l, 14).slice(0, 3);
  const H = Lo(n.tasks, l);
  const se = h === "team" ? null : n.members.find(A => A.id === h) ?? null;
  const te = se ? se.quota / 4 : b;
  const T = se ? Tn(n.deals.filter(A => A.owner === se.id), O.start, O.end) : L;
  const V = te ? T / te : 0;
  const U = Math.max(0, (te - T) / Math.max(1, O.daysLeft));
  k.useEffect(() => {
    r.registerExport(() => {
      const A = _.map(({
        start: oe,
        end: we
      }) => [new Date(oe).toISOString().slice(0, 7), Tn(n.deals, oe, we)]);
      Ur(`sales-crm-overview-${Fr()}.csv`, Mr(["month", "won_revenue_usd"], A));
      e.logAudit({
        actorId: n.me.id,
        action: "export",
        entityType: "overview",
        entityId: "overview",
        metadata: {
          months: c
        }
      });
      r.toast(`Overview exported · ${c} months`);
    }, "Overview");
    return () => r.registerExport(null, "Overview");
  }, [c, n.deals, _]);
  const ie = [{
    key: "won",
    icon: <_Component8 />,
    value: <a.Fragment><b className="num"><Je value={I} format={Ie} /></b>{le !== 0 && <_Component10 tone={le > 0 ? "pine" : "tomato"}>{le > 0 ? "+" : ""}{st(le)} vs last month</_Component10>}</a.Fragment>,
    label: "Won this month"
  }, {
    key: "open",
    icon: <Sp />,
    value: <b className="num"><Je value={G} format={Ie} /></b>,
    label: "Open pipeline"
  }, {
    key: "rate",
    icon: <Cp />,
    value: <b className="num"><Je value={B.rate * 100} format={A => `${A.toFixed(0)}%`} /></b>,
    label: "Win rate, closed deals"
  }];
  const me = Math.PI * 2 * 84;
  return <section className="view" data-view="overview"><_Component11 title="Sales Overview" stats={ie} /><div className="ov-grid"><De id="ov-rev" className="ov-rev" title="Revenue" focusable={true} tools={<a.Fragment><div className="seg" role="group" aria-label="Revenue range"><span className="seg__pill" aria-hidden="true" style={{
            transform: c === 6 ? "translateX(0)" : "translateX(52px)",
            width: 52
          }} /><button type="button" className="seg__btn" data-value="6" aria-pressed={c === 6} onClick={() => d(6)}>6M</button><button type="button" className="seg__btn" data-value="12" aria-pressed={c === 12} onClick={() => d(12)}>12M</button></div><Ue label="Revenue options" onClick={() => r.toast(`${R} of 12 months reached the ${Xe(C)} target`)}><An /></Ue></a.Fragment>}><div className="ov-rev__sum"><b className="ov-rev__total num">{Ie(Ae(v))}</b><span className="ov-rev__sub">won in {c} months · <b>{R} of 12</b> at target</span></div><div className="legend ov-rev__legend"><span><i className="tone--tomato" /> Won revenue</span><span><i className="ov-dash" aria-hidden="true" /> Monthly target · {Xe(C)}</span></div><div className="ov-rev__chart"><_Component12 ariaLabel="Revenue won per month against the monthly team target" xLabels={j} series={[{
            key: "won",
            label: "Won",
            tone: "tomato",
            values: v,
            area: true
          }, {
            key: "target",
            label: "Target",
            tone: "ink",
            dashed: true,
            values: _.map(() => C)
          }]} /></div></De><De id="ov-hot" className="ov-hot" title="Hot deals" focusable={true} tools={<a.Fragment><span className="card__sub ov-hot__sub">by weighted value</span><Ue label="New deal" onClick={() => i("/pipeline?new=1")}><Ut /></Ue></a.Fragment>}><div className="ov-hot__grid">{ge.length === 0 && <_Component13 title="No open deals" text="Create a deal to see it ranked here." />}{ge.map(A => {
            const oe = n.customers.find(Ee => Ee.id === A.customerId);
            const we = A.team.map(Ee => n.members.find(Oe => Oe.id === Ee)).filter(Ee => !!Ee);
            return <article className={`ov-tile ov-tile--${os[A.stage]}`} data-key={A.id} key={A.id}><div className="ov-tile__top"><span className="ov-tile__date">{Do(A.closeAt, l)}</span><Ue size="sm" label={`Actions for ${A.title}`} onClick={() => i(`/pipeline?deal=${A.id}`)}><An /></Ue></div><h3 className="ov-tile__title"><_Component14 className="ov-tile__link" to={`/pipeline?deal=${A.id}`}>{A.title}</_Component14></h3><Jj company={oe == null ? undefined : oe.company} /><div className="ov-tile__foot"><div><b className="ov-tile__amt num">{Ie(A.amount)}</b><small>{yt[A.stage]} · {st($o[A.stage])}</small></div><Qj people={we} /></div></article>;
          })}</div></De><De id="ov-quota" title={se ? `${se.name.split(" ")[0]}'s quota` : "Team quota"} className="ov-quota" tools={<Ue ref={y} label="Choose whose quota" aria-haspopup="menu" aria-expanded={g} onClick={() => w(A => !A)}><An /></Ue>}><div className="ov-quota__body"><div className="ov-ring" role="img" aria-label={`${st(V)} of ${O.label} quota: ${Ie(T)} won of ${Ie(te)}`} style={{
            "--circ": me.toFixed(1)
          }}><svg viewBox="0 0 200 200" aria-hidden="true"><circle className="ov-ring__track" cx="100" cy="100" r="84" /><circle className="ov-ring__arc" cx="100" cy="100" r="84" strokeDasharray={me} strokeDashoffset={me * (1 - Math.min(1, V))} /></svg><div className="ov-ring__mid"><b className="num">{st(V)}</b><span>of {O.label} quota</span></div></div><dl className="ov-quota__facts"><div><dt>Won</dt><dd className="num">{Xe(T)}</dd></div><div><dt>Quota</dt><dd className="num">{Xe(te)}</dd></div><div><dt>Days left</dt><dd className="num">{O.daysLeft}</dd></div></dl></div><p className="ov-quota__pace">Needs <b>{Xe(U)}</b> a day to land it</p></De><_Component0 open={g} onClose={() => w(false)} anchor={y.current} label="Quota scope">{[{
          id: "team",
          name: "Whole team"
        }, ...n.members].map(A => <Ht selected={h === A.id} onClick={() => {
          var oe;
          m(A.id);
          w(false);
          if ((oe = y.current) != null) {
            oe.focus();
          }
        }} key={A.id}><span aria-hidden="true">{h === A.id ? "✓" : "\xA0"}</span> {A.name}</Ht>)}</_Component0><De id="ov-mix" className="ov-mix" title="Stage mix" focusable={true}><p className="ov-mix__sum"><b className="num">{Ie(be)}</b><span className="card__sub">open across {an(n.deals).length} deals</span></p><div className="ov-mix__bar">{re.map((A, oe) => <_Component14 className={`ov-mix__seg tone--${os[A.stage]}`} to="/pipeline" style={{
            flexGrow: A.share,
            flexBasis: 0,
            "--i": oe
          }} aria-label={`${yt[A.stage]}: ${Ie(A.total)} across ${A.count} deals, open the pipeline`} title={`${yt[A.stage]} · ${Ie(A.total)}`} key={A.stage} />)}</div><ul className="ov-mix__legend">{re.map(A => <li key={A.stage}><i className={`tone--${os[A.stage]}`} /><span>{yt[A.stage]}</span><b className="num">{A.count}</b><b className="num">{Xe(A.total)}</b><span className="num ov-mix__share">{st(A.share)}</span></li>)}</ul></De><De id="ov-team" className="ov-team" title="Team leaderboard" tools={<span className="card__sub">Won this month</span>}><div className="ov-rank">{q.map((A, oe) => <div className={`ov-rank__row ${oe === 0 ? "is-lead" : ""}`} key={A.member.id}><span className="ov-rank__n num">{oe + 1}</span><St name={A.member.name} size="md" /><div className="ov-rank__body"><span className="ov-rank__line"><b>{A.member.name}</b><span className="ov-rank__val num">{Ie(A.won)}</span></span><small>{st(A.attainment)} of monthly quota · {A.deals} {A.deals === 1 ? "deal" : "deals"}</small></div></div>)}</div></De><Zj done={K} total={_e.length} onAdd={() => i("/schedule?new=1")} footer={<a.Fragment>{D.length > 0 && <Xj tasks={D} nameOf={A => {
          var oe;
          return ((oe = n.customers.find(we => we.id === A)) == null ? undefined : oe.company) ?? "";
        }} />}{H.length > 0 && <p className="card__sub">{H.length} items are overdue on the schedule.</p>}</a.Fragment>}>{_e.map(A => {
          var oe;
          return <Yj task={A} company={(oe = n.customers.find(we => we.id === A.customerId)) == null ? undefined : oe.company} timeLabel={ls(A.at)} onToggle={we => e.toggleTask(A.id, we)} key={A.id} />;
        })}{_e.length === 0 && <_Component13 title="Nothing scheduled" text="Your day is clear." />}</Zj><De id="ov-act" className="ov-act" title="Recent activity" tools={<Ue label="Activity log" onClick={() => r.toast(`${n.activity.length} recent events in the workspace`)}><Xa /></Ue>}><div className="feed">{n.activity.map(A => {
            var oe;
            return <div className="feed__item" key={A.id}><St name={((oe = n.members.find(we => we.id === A.actor)) == null ? undefined : oe.name) ?? "Someone"} size="sm" /><div><p>{vp(A, we => {
                    var Ee;
                    return ((Ee = n.members.find(Oe => Oe.id === we)) == null ? undefined : Ee.name.split(" ")[0]) ?? "Someone";
                  })}</p><small>{Lu(A.at, l)}</small></div></div>;
          })}</div><_Component15 onOpen={() => r.toast("Sales CRM · built to the reference brief")} /></De></div></section>;
}
function _Component19({
  deal: n,
  company: e,
  now: r,
  onOpen: i,
  onDragStart: l,
  onDragEnd: c,
  onKeyMove: d,
  onTouchDrag: h,
  dragging: m
}) {
  const g = n.closeAt < r;
  const w = k.useRef(null);
  const y = k.useRef(false);
  const _ = k.useRef(null);
  const v = () => {
    if (w.current) {
      window.clearTimeout(w.current.timer);
      w.current.el.draggable = true;
    }
    w.current = null;
  };
  const j = (b, C = 0, O = 0) => {
    var L;
    v();
    if (y.current) {
      y.current = false;
      if ((L = _.current) != null) {
        L.call(_);
      }
      _.current = null;
      if (h != null) {
        h(b, C, O);
      }
    }
  };
  k.useEffect(() => () => {
    var b;
    v();
    if ((b = _.current) != null) {
      b.call(_);
    }
    _.current = null;
  }, []);
  return <article className={`pl-card ${m ? "is-dragging" : ""}`} tabIndex={0} data-key={n.id} role="listitem" aria-keyshortcuts="Enter Shift+ArrowLeft Shift+ArrowRight" aria-label={`${n.title}, ${e ?? "unassigned"}, ${Ie(n.amount)}, ${yt[n.stage]}, ${g ? "overdue" : Do(n.closeAt, r)}`} draggable={true} onDragStart={b => {
    b.dataTransfer.setData("text/plain", n.id);
    b.dataTransfer.effectAllowed = "move";
    l();
  }} onDragEnd={c} onPointerDown={b => {
    if (b.pointerType === "mouse" || !h || b.target.closest("button")) {
      return;
    }
    const C = b.currentTarget;
    const {
      pointerId: O,
      clientX: L,
      clientY: R
    } = b;
    v();
    C.draggable = false;
    w.current = {
      x: L,
      y: R,
      el: C,
      timer: window.setTimeout(() => {
        y.current = true;
        try {
          C.setPointerCapture(O);
        } catch {}
        const W = I => {
          if (y.current) {
            I.preventDefault();
          }
        };
        document.addEventListener("touchmove", W, {
          passive: false
        });
        _.current = () => document.removeEventListener("touchmove", W);
        h("start", L, R);
      }, 250)
    };
  }} onPointerMove={b => {
    if (!y.current) {
      const C = w.current;
      if (C && Math.hypot(b.clientX - C.x, b.clientY - C.y) > 10) {
        v();
      }
      return;
    }
    if (h != null) {
      h("move", b.clientX, b.clientY);
    }
  }} onPointerUp={b => j("end", b.clientX, b.clientY)} onPointerCancel={() => j("cancel")} onKeyDown={b => {
    if (b.key === "Enter" || b.key === " ") {
      b.preventDefault();
      i();
    }
    if (b.shiftKey && b.key === "ArrowRight") {
      b.preventDefault();
      d(1);
    }
    if (b.shiftKey && b.key === "ArrowLeft") {
      b.preventDefault();
      d(-1);
    }
  }}><div className={`pl-face pl-face--${os[n.stage]}`}><div className="pl-face__top"><span className="pl-face__date">{g ? `Was due ${$r(n.closeAt)}` : Do(n.closeAt, r)}</span><button type="button" className="pl-face__more" aria-label={`Actions for ${n.title}`} onClick={b => {
          b.stopPropagation();
          i();
        }}><An /></button></div><h3 className="pl-face__title">{n.title}</h3><p className="pl-face__co">{e ?? "Unassigned account"}</p><div className="pl-face__foot"><div><b className="pl-face__amt num">{Ie(n.amount)}</b><small className="pl-face__sub">{yt[n.stage]} · {st($o[n.stage])}</small></div></div></div></article>;
}
function _Component20({
  deal: n,
  customer: e,
  members: r,
  onClose: i,
  onEdit: l,
  onMove: c,
  onDelete: d
}) {
  var h;
  return <Ga open={!!n} onClose={i} title={(n == null ? undefined : n.title) ?? "Deal"}>{n && <a.Fragment><div className={`pd-head pl-face--${os[n.stage]}`}><span className="card__sub" style={{
          color: "inherit",
          opacity: 0.8
        }}>{(e == null ? undefined : e.company) ?? "Unassigned account"} · {Do(n.closeAt)}</span><b style={{
          fontSize: 26,
          letterSpacing: "-0.02em"
        }}>{Ie(n.amount)}</b><span className="card__sub" style={{
          color: "inherit",
          opacity: 0.8
        }}>{yt[n.stage]} · {st($o[n.stage])} win probability</span></div><div className="pd-steps"><b style={{
          fontSize: 13
        }}>Move to stage</b><ol style={{
          listStyle: "none",
          display: "grid",
          gap: 6,
          gridTemplateColumns: "repeat(2, minmax(0,1fr))"
        }}>{hs.map(m => <li key={m}><Se variant={n.stage === m ? "ink" : "ghost"} size="sm" onClick={() => c(n, m)} style={{
              width: "100%"
            }}>{yt[m]}</Se></li>)}</ol></div><dl className="keys"><div><dt>Owner</dt><dd>{((h = r.find(m => m.id === n.owner)) == null ? undefined : h.name) ?? "—"}</dd></div><div><dt>Team</dt><dd>{n.team.map(m => {
              var g;
              return ((g = r.find(w => w.id === m)) == null ? undefined : g.name.split(" ")[0]) ?? "";
            }).filter(Boolean).join(", ")}</dd></div><div><dt>Created</dt><dd>{$r(n.createdAt)}</dd></div><div><dt>Expected close</dt><dd>{$r(n.closeAt)}</dd></div><div><dt>Weighted value</dt><dd className="num">{Ie(Math.round(n.amount * $o[n.stage]))}</dd></div><div><dt>Currency</dt><dd>{n.currency}</dd></div></dl>{n.notes && <p className="card__sub">{n.notes}</p>}<div style={{
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }}><Se variant="ghost" onClick={() => l(n)}><Rp /> Edit</Se>{n.stage !== "won" && <Se onClick={() => {
          c(n, "won");
        }}><Uo /> Mark won</Se>}<Se variant="ghost" onClick={() => c(n, "lost")}><Pn /> Mark lost</Se><Se variant="danger" onClick={() => d(n)}><_Component16 /> Archive</Se></div><p className="card__sub">Archiving keeps the customer and every linked activity — nothing is hard deleted (BR-009).</p></a.Fragment>}</Ga>;
}
function _Component21({
  open: n,
  deal: e,
  customers: r,
  members: i,
  presetStage: l,
  error: c,
  onClose: d,
  onSave: h
}) {
  const [m, g] = k.useState(() => Qm(l));
  const [w, y] = k.useState(null);
  k.useEffect(() => {
    if (n) {
      y(null);
      g(e ? {
        title: e.title,
        customerId: e.customerId,
        stage: e.stage,
        amount: e.amount,
        closeAt: e.closeAt,
        owner: e.owner
      } : Qm(l));
    }
  }, [n, e, l]);
  const _ = () => {
    if (!m.title.trim()) {
      y("Give the deal a title before saving.");
      return;
    }
    if (!m.customerId) {
      y("Pick the customer this deal belongs to.");
      return;
    }
    if (!Number.isFinite(m.amount) || m.amount <= 0) {
      y("Enter a value greater than zero.");
      return;
    }
    h(m);
  };
  return <_Component17 open={n} onClose={d} title={e ? `Edit ${e.title}` : "New deal"} subtitle="Value is stored as a number with a currency code — never a formatted string." error={w ?? c} footer={<a.Fragment><Se variant="ghost" onClick={d}>Cancel</Se><Se onClick={_}>{e ? "Save changes" : "Create deal"}</Se></a.Fragment>}><Ne label="Deal title" wide={true} htmlFor="deal-title"><_Component1 id="deal-title" value={m.title} placeholder="Annual renewal" onChange={v => g({
        ...m,
        title: v.target.value
      })} /></Ne><Ne label="Customer" htmlFor="deal-customer"><select id="deal-customer" value={m.customerId} onChange={v => g({
        ...m,
        customerId: v.target.value
      })}><option value="">Select a customer…</option>{r.map(v => <option value={v.id} key={v.id}>{v.company} — {v.name}</option>)}</select></Ne><Ne label="Stage" htmlFor="deal-stage"><select id="deal-stage" value={m.stage} onChange={v => g({
        ...m,
        stage: v.target.value
      })}>{[...hs, "won", "lost"].map(v => <option value={v} key={v}>{yt[v]}</option>)}</select></Ne><Ne label="Value (USD)" htmlFor="deal-amount"><_Component1 id="deal-amount" type="number" min={0} step={10} inputMode="numeric" value={m.amount} onChange={v => g({
        ...m,
        amount: Number(v.target.value)
      })} /></Ne><Ne label="Owner" htmlFor="deal-owner"><select id="deal-owner" value={m.owner} onChange={v => g({
        ...m,
        owner: v.target.value
      })}>{i.map(v => <option value={v.id} key={v.id}>{v.name}</option>)}</select></Ne><Ne label="Expected close" htmlFor="deal-close"><_Component1 id="deal-close" type="date" value={new Date(m.closeAt).toISOString().slice(0, 10)} onChange={v => g({
        ...m,
        closeAt: new Date(`${v.target.value}T12:00:00`).getTime()
      })} /></Ne></_Component17>;
}
function Qm(n) {
  return {
    title: "",
    customerId: "",
    stage: n ?? "qualify",
    amount: 10000,
    closeAt: Date.now() + 2592000000,
    owner: "m-sofia"
  };
}
const su = [...hs, "won", "lost"];
function _Component34() {
  const {
    data: n,
    repo: e
  } = jn();
  const r = rr();
  const [i, l] = li();
  const c = Date.now();
  const [d, h] = k.useState("board");
  const [m, g] = k.useState("");
  const [w, y] = k.useState([]);
  const [_, v] = k.useState(false);
  const [j, b] = k.useState(null);
  const [C, O] = k.useState(null);
  const [L, R] = k.useState("amount");
  const [W, I] = k.useState("desc");
  const [z, X] = k.useState(null);
  const [le, G] = k.useState(false);
  const [B, re] = k.useState(null);
  const [be, q] = k.useState(null);
  const [ge, _e] = k.useState(null);
  const K = k.useRef(null);
  k.useEffect(() => {
    const F = i.get("deal");
    if (F) {
      X(F);
      l({}, {
        replace: true
      });
      return;
    }
    if (i.get("new") === "1") {
      q(null);
      _e(null);
      re(i.get("stage"));
      G(true);
      l({}, {
        replace: true
      });
    }
  }, [i, l]);
  const D = k.useMemo(() => {
    const F = m.trim().toLowerCase();
    return n.deals.filter(ae => {
      if (!_ && (ae.stage === "won" || ae.stage === "lost") || w.length && !w.includes(ae.owner)) {
        return false;
      }
      if (!F) {
        return true;
      }
      const he = n.customers.find(ye => ye.id === ae.customerId);
      return [ae.title, (he == null ? undefined : he.company) ?? "", (he == null ? undefined : he.name) ?? ""].some(ye => ye.toLowerCase().includes(F));
    });
  }, [n.deals, n.customers, m, w, _]);
  const H = k.useMemo(() => an(D), [D]);
  const se = Ae(H.map(F => F.amount));
  const te = Dy(D);
  const T = Kt(c, 1)[0];
  const V = My(D, c, T.end);
  const U = Ae(V.map(F => F.amount));
  const ie = D.filter(F => F.stage === "won").length;
  const me = Ae(D.filter(F => F.stage === "won").map(F => F.amount));
  const A = D.filter(F => F.stage === "lost").length;
  const oe = H.length;
  const we = k.useMemo(() => {
    const F = [...D];
    F.sort((ae, he) => {
      const ye = W === "asc" ? 1 : -1;
      if (L === "amount") {
        return (ae.amount - he.amount) * ye;
      } else if (L === "closeAt") {
        return (ae.closeAt - he.closeAt) * ye;
      } else {
        return ae.title.localeCompare(he.title) * ye;
      }
    });
    return F;
  }, [D, L, W]);
  k.useEffect(() => {
    r.registerExport(() => {
      const F = we.map(ae => {
        var ye;
        const he = n.customers.find(Fe => Fe.id === ae.customerId);
        return [ae.title, (he == null ? undefined : he.company) ?? "", (he == null ? undefined : he.name) ?? "", yt[ae.stage], ae.amount, ae.currency, new Date(ae.closeAt).toISOString().slice(0, 10), ((ye = n.members.find(Fe => Fe.id === ae.owner)) == null ? undefined : ye.name) ?? ""];
      });
      Ur(`sales-crm-deals-${Fr()}.csv`, Mr(["deal", "customer", "contact", "stage", "amount", "currency", "closes_on", "owner"], F));
      e.logAudit({
        actorId: n.me.id,
        action: "export",
        entityType: "deals",
        entityId: "pipeline",
        metadata: {
          rows: F.length,
          owners: w,
          query: m || null,
          includeClosed: _
        }
      });
      r.toast(`${F.length} deals exported`);
    }, "Deals");
    return () => r.registerExport(null, "Deals");
  }, [we, w, m, _]);
  const Ee = F => {
    if (K.current) {
      K.current.textContent = F;
    }
  };
  const Oe = k.useRef(null);
  const Gt = k.useRef(null);
  const ln = () => {
    var ae;
    const F = new Map();
    if ((ae = Oe.current) != null) {
      ae.querySelectorAll("[data-key]").forEach(he => {
        var Fe;
        var Y;
        const ye = (Fe = he.closest("[data-stage],[data-end]")) == null ? undefined : Fe.dataset.stage;
        if (!!he.dataset.key && !!ye) {
          F.set(he.dataset.key, {
            rect: he.getBoundingClientRect(),
            stage: ye,
            face: ((Y = he.querySelector(".pl-face")) == null ? undefined : Y.cloneNode(true)) ?? null
          });
        }
      });
    }
    Gt.current = F;
  };
  k.useLayoutEffect(() => {
    var Ke;
    const F = Gt.current;
    Gt.current = null;
    if (!F || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const ae = (Ke = Oe.current) == null ? undefined : Ke.querySelectorAll("[data-key]");
    if (!ae) {
      return;
    }
    const he = [];
    const ye = [];
    const Fe = new Set();
    const Y = [];
    ae.forEach(Pe => {
      var ir;
      if (Pe.dataset.key) {
        Fe.add(Pe.dataset.key);
      }
      const Be = Pe.dataset.key ? F.get(Pe.dataset.key) : undefined;
      if (!Be) {
        return;
      }
      const ot = Pe.getBoundingClientRect();
      const Br = (ir = Pe.closest("[data-stage],[data-end]")) == null ? undefined : ir.dataset.stage;
      Y.push({
        el: Pe,
        start: Be,
        to: ot,
        stage: Br
      });
    });
    Y.forEach(({
      el: Pe,
      start: Be,
      to: ot,
      stage: Br
    }) => {
      if (Br && Br !== Be.stage) {
        if (!Be.face) {
          return;
        }
        const Qt = document.createElement("div");
        Qt.className = "pl-fly";
        Qt.setAttribute("aria-hidden", "true");
        Qt.style.cssText = `width:${Be.rect.width}px;height:${Be.rect.height}px;left:${Be.rect.left}px;top:${Be.rect.top}px`;
        Qt.append(Be.face);
        document.body.append(Qt);
        const ms = Be.rect.left > ot.left ? 4 : -4;
        const or = ot.left - Be.rect.left;
        const lr = ot.top - Be.rect.top;
        const ps = Math.hypot(or, lr);
        const cr = Math.round(Math.min(720, Math.max(420, 380 + ps * 0.75)));
        const Mn = -Math.min(30, ps * 0.12);
        Pe.style.opacity = "0";
        const hi = Qt.animate([{
          transform: "translate(0, 0) scale(1) rotate(0deg)",
          offset: 0
        }, {
          transform: `translate(${or * 0.16}px, ${lr * 0.16 + Mn}px) scale(1.05) rotate(${ms}deg)`,
          offset: 0.22
        }, {
          transform: `translate(${or * 0.84}px, ${lr * 0.84 + Mn}px) scale(1.05) rotate(${ms}deg)`,
          offset: 0.68
        }, {
          transform: `translate(${or}px, ${lr}px) scale(1) rotate(0deg)`,
          offset: 1
        }], {
          duration: cr,
          easing: "cubic-bezier(.45,0,.2,1)"
        });
        he.push(() => {
          Qt.remove();
          Pe.style.opacity = "";
        });
        ye.push(hi.finished.then(() => {
          Qt.remove();
          Pe.style.opacity = "";
          Pe.animate([{
            opacity: 0,
            transform: "scale(.97)"
          }, {
            opacity: 1,
            transform: "scale(1)"
          }], {
            duration: 260,
            easing: "cubic-bezier(.2,.8,.2,1)"
          });
        }));
        return;
      }
      const ir = Be.rect.left - ot.left;
      const di = Be.rect.top - ot.top;
      if (!(Math.abs(ir) < 1) || !(Math.abs(di) < 1)) {
        ye.push(Pe.animate([{
          transform: `translate(${ir}px, ${di}px)`
        }, {
          transform: "translate(0, 0)"
        }], {
          duration: 500,
          easing: "cubic-bezier(.2,.8,.2,1)"
        }).finished);
      }
    });
    F.forEach((Pe, Be) => {
      if (Fe.has(Be) || !Pe.face) {
        return;
      }
      const ot = document.createElement("div");
      ot.className = "pl-fly";
      ot.setAttribute("aria-hidden", "true");
      ot.style.cssText = `width:${Pe.rect.width}px;height:${Pe.rect.height}px;left:${Pe.rect.left}px;top:${Pe.rect.top}px`;
      ot.append(Pe.face);
      document.body.append(ot);
      ye.push(ot.animate([{
        opacity: 1,
        transform: "scale(1)"
      }, {
        opacity: 0,
        transform: "translateY(10px) scale(.9)"
      }], {
        duration: 320,
        easing: "cubic-bezier(.4,0,1,1)",
        fill: "forwards"
      }).finished.then(() => ot.remove()));
    });
    if (ye.length) {
      Promise.allSettled(ye).then(() => he.forEach(Pe => Pe()));
    }
  }, [n.deals]);
  const Ct = (F, ae) => {
    if (F.stage === ae) {
      return;
    }
    const he = F.stage;
    ln();
    e.moveDeal(F.id, ae);
    Ee(`${F.title} moved to ${yt[ae]}`);
    r.toast(`${F.title} → ${yt[ae]}`, {
      label: "Undo",
      run: () => {
        ln();
        e.moveDeal(F.id, he);
        r.toast(`${F.title} moved back to ${yt[he]}`);
      }
    });
  };
  const Ln = (F, ae) => {
    var ye;
    const he = (ye = document.elementFromPoint(F, ae)) == null ? undefined : ye.closest("[data-stage],[data-end]");
    return (he == null ? undefined : he.dataset.stage) ?? (he == null ? undefined : he.dataset.end) ?? null;
  };
  const Et = k.useRef(null);
  const kn = () => {
    if (Et.current) {
      cancelAnimationFrame(Et.current.raf);
    }
    Et.current = null;
  };
  const Dn = F => {
    const ae = F < 90 ? -16 : F > window.innerHeight - 90 ? 16 : 0;
    if (!ae) {
      return kn();
    }
    if (Et.current) {
      Et.current.speed = ae;
      return;
    }
    const he = () => {
      if (Et.current) {
        window.scrollBy(0, Et.current.speed);
        Et.current.raf = requestAnimationFrame(he);
      }
    };
    Et.current = {
      speed: ae,
      raf: requestAnimationFrame(he)
    };
  };
  k.useEffect(() => kn, []);
  const cn = k.useRef({
    x: 0,
    y: 0
  });
  const ar = F => (ae, he, ye) => {
    if (ae === "move" || ae === "start") {
      cn.current = {
        x: he,
        y: ye
      };
    }
    if (ae === "start") {
      b(F.id);
      O(null);
      return;
    }
    if (ae === "move") {
      O(Ln(he, ye));
      Dn(ye);
      return;
    }
    kn();
    const Fe = ae === "end" ? Ln(cn.current.x, cn.current.y) : null;
    b(null);
    O(null);
    if (Fe) {
      Ct(F, Fe);
    }
  };
  const Jt = F => {
    q(null);
    _e(null);
    re(F);
    G(true);
  };
  const un = [{
    key: "open",
    icon: <Sp />,
    value: <b className="num"><Je value={se} format={Ie} /></b>,
    label: "Open pipeline"
  }, {
    key: "weighted",
    icon: <Cp />,
    value: <b className="num"><Je value={te} format={Ie} /></b>,
    label: "Weighted forecast"
  }, {
    key: "month",
    icon: <Ep />,
    value: <a.Fragment><b className="num"><Je value={V.length} /></b><_Component10 tone="butter">{Xe(U)}</_Component10></a.Fragment>,
    label: "Deals closing this month"
  }];
  const dn = z ? n.deals.find(F => F.id === z) ?? null : null;
  return <section className="view" data-view="pipeline"><_Component11 title="Deal Pipeline" stats={un} /><div className="toolbar pl-toolbar"><label className="search pl-search"><_Component /><input type="search" placeholder="Search deals…" aria-label="Search deals" autoComplete="off" value={m} onChange={F => g(F.target.value)} /></label><div className="pl-owners" role="group" aria-label="Filter by owner">{n.members.map(F => <Ft className="pl-owner" pressed={w.includes(F.id)} aria-label={F.name} title={F.name} onClick={() => y(ae => ae.includes(F.id) ? ae.filter(he => he !== F.id) : [...ae, F.id])} key={F.id}><span aria-hidden="true">{F.name.split(" ")[0]}</span></Ft>)}</div><span className="toolbar__spacer" /><_Component18 label="View" value={d} onChange={h} options={[{
        value: "board",
        label: "Board"
      }, {
        value: "list",
        label: "List"
      }]} /><Ue label="Export deals as CSV" variant="glass" onClick={r.exportCurrent}><Lr /></Ue><Se onClick={() => Jt(null)}><Ut /> New deal</Se></div><p className="sr-live" aria-live="polite" ref={K} />{d === "board" ? <div className="pl-board" ref={Oe}><div className="pl-cols">{hs.map(F => {
          const ae = D.filter(ye => ye.stage === F);
          const he = C === F;
          return <section className={`pl-col ${he ? "is-over" : ""}`} aria-labelledby={`pl-h-${F}`} data-stage={F} onDragOver={ye => {
            ye.preventDefault();
            O(F);
          }} onDragLeave={() => O(ye => ye === F ? null : ye)} onDrop={ye => {
            ye.preventDefault();
            O(null);
            const Fe = j ?? ye.dataTransfer.getData("text/plain");
            const Y = n.deals.find(Ke => Ke.id === Fe);
            if (Y) {
              Ct(Y, F);
            }
            b(null);
          }} key={F}><header className="pl-col__head"><span className={`pl-col__dot tone--${os[F]}`} aria-hidden="true" /><h2 className="pl-col__name" id={`pl-h-${F}`}>{yt[F]}</h2><span className="pl-col__count tnum" aria-label="deals">{ae.length}</span><b className="pl-col__total tnum">{Xe(Ae(ae.map(ye => ye.amount)))}</b><Ue size="sm" className="pl-col__add" label={`New deal in ${yt[F]}`} onClick={() => Jt(F)}><Ut /></Ue></header><div className="pl-col__body" role="list" aria-label={`${yt[F]} deals`}>{ae.length === 0 && <_Component13 title="Nothing here" text="Drag a deal in or add one." />}{ae.map(ye => {
                var Fe;
                return <_Component19 deal={ye} company={(Fe = n.customers.find(Y => Y.id === ye.customerId)) == null ? undefined : Fe.company} now={c} onOpen={() => X(ye.id)} onDragStart={() => b(ye.id)} onDragEnd={() => b(null)} onTouchDrag={ar(ye)} dragging={j === ye.id} onKeyMove={Y => {
                  const Ke = su.indexOf(ye.stage);
                  const Pe = su[Math.max(0, Math.min(su.length - 1, Ke + Y))];
                  if (Pe) {
                    Ct(ye, Pe);
                  }
                }} key={ye.id} />;
              })}</div></section>;
        })}</div><div className="pl-ends">{["won", "lost"].map(F => {
          const ae = C === F;
          return <div className={`pl-end pl-end--${F} ${ae ? "is-over" : ""}`} data-end={F} onDragOver={he => {
            he.preventDefault();
            O(F);
          }} onDragLeave={() => O(he => he === F ? null : he)} onDrop={he => {
            he.preventDefault();
            O(null);
            const ye = j ?? he.dataTransfer.getData("text/plain");
            const Fe = n.deals.find(Y => Y.id === ye);
            if (Fe) {
              Ct(Fe, F);
            }
            b(null);
          }} key={F}><span className="pl-end__ico" aria-hidden="true">{F === "won" ? <Uo /> : <Pn />}</span><span className="pl-end__txt"><b>{F === "won" ? "Won" : "Lost"}</b><small><span className="tnum">{F === "won" ? ie : A}</span>{F === "won" && <b className="tnum"> {Xe(me)}</b>}</small></span><span className="pl-end__hint">{F === "won" ? "Drop to win" : "Drop to lose"}</span></div>;
        })}</div></div> : <De title={<span className="tnum">· {D.length}</span>} className="pl-listcard" tools={<Ft pressed={_} onClick={() => v(F => !F)}>Include won & lost</Ft>}><div className="table-wrap"><table className="table pl-table"><thead><tr>{[["title", "Deal"], ["amount", "Value"], ["closeAt", "Closes"]].map(([F, ae]) => <th scope="col" data-th={F} aria-sort={L === F ? W === "asc" ? "ascending" : "descending" : "none"} key={F}><button type="button" data-sort={F} onClick={() => {
                  if (L === F) {
                    I(he => he === "asc" ? "desc" : "asc");
                  } else {
                    R(F);
                    I(F === "title" ? "asc" : "desc");
                  }
                }}>{ae}<Tp style={{
                    width: 13,
                    height: 13,
                    transform: L === F && W === "asc" ? "rotate(-90deg)" : "rotate(90deg)"
                  }} /></button></th>)}<th scope="col">Customer</th><th scope="col">Stage</th><th scope="col">Owner</th><th scope="col" className="r">Actions</th></tr></thead><tbody>{we.map(F => {
              var he;
              const ae = n.customers.find(ye => ye.id === F.customerId);
              return <tr key={F.id}><td><button type="button" onClick={() => X(F.id)} style={{
                    textAlign: "left",
                    textDecoration: "underline",
                    textUnderlineOffset: 2
                  }}><b>{F.title}</b></button></td><td className="num">{Ie(F.amount)}</td><td>{mt(F.closeAt)}</td><td><span className="cell-person"><span><b>{(ae == null ? undefined : ae.company) ?? "—"}</b><small>{(ae == null ? undefined : ae.name) ?? ""}</small></span></span></td><td><span className={`spill ${F.stage === "lost" ? "spill--lost" : `spill--${os[F.stage]}`}`}><i />{yt[F.stage]}</span></td><td>{((he = n.members.find(ye => ye.id === F.owner)) == null ? undefined : he.name) ?? "—"}</td><td className="r"><Ue size="sm" label={`Open ${F.title}`} onClick={() => X(F.id)}><Za /></Ue></td></tr>;
            })}</tbody></table></div>{we.length === 0 && <_Component13 icon={<Za />} title="No deals here" text="Try another owner, clear the search, or include closed deals." action={<Se variant="ghost" size="sm" onClick={() => {
        g("");
        y([]);
        v(true);
      }}>Show all deals</Se>} />}<p className="card__sub" style={{
        marginTop: 10
      }}>{oe} open deals · totals never add different currencies together (FR-033).</p></De>}<_Component20 deal={dn} customer={n.customers.find(F => F.id === (dn == null ? undefined : dn.customerId))} members={n.members} onClose={() => X(null)} onEdit={F => {
      q(F);
      _e(null);
      re(null);
      G(true);
    }} onMove={(F, ae) => {
      Ct(F, ae);
      X(null);
    }} onDelete={F => {
      e.deleteDeal(F.id);
      X(null);
      r.toast(`${F.title} archived`, {
        label: "Undo",
        run: () => e.restoreDeal(F)
      });
    }} /><_Component21 open={le} deal={be} customers={n.customers.filter(F => !F.archivedAt)} members={n.members} presetStage={B} error={ge} onClose={() => {
      G(false);
      q(null);
      re(null);
    }} onSave={F => {
      try {
        if (be) {
          ln();
          e.updateDeal(be.id, F);
          r.toast(`${F.title} updated`);
        } else {
          const ae = e.createDeal(F);
          r.toast(`${ae.title} created`);
        }
        G(false);
        q(null);
        re(null);
        _e(null);
      } catch (ae) {
        _e(ae instanceof Error ? ae.message : "Could not save the deal");
      }
    }} /></section>;
}
const dg = ["Enterprise", "Mid-market", "SMB"];
function ak(n) {
  if (n >= 80) {
    return "meter__fill--pine";
  } else if (n >= 60) {
    return "meter__fill--butter";
  } else {
    return "meter__fill--tomato";
  }
}
function _Component35() {
  const {
    data: n,
    repo: e
  } = jn();
  const r = rr();
  const i = on();
  const [l, c] = li();
  const [d, h] = k.useState("");
  const [m, g] = k.useState("all");
  const [w, y] = k.useState("grid");
  const [_, v] = k.useState("contact");
  const [j, b] = k.useState(false);
  const [C, O] = k.useState(null);
  const [L, R] = k.useState(null);
  const W = Date.now();
  k.useEffect(() => {
    if (l.get("new") === "1") {
      O(null);
      R(null);
      b(true);
      const q = new URLSearchParams(l);
      q.delete("new");
      c(q, {
        replace: true
      });
    }
  }, [l, c]);
  const I = n.customers.filter(q => !q.archivedAt);
  const z = l.get("fav") === "1";
  const X = q => {
    const ge = new URLSearchParams(l);
    if (q) {
      ge.set("fav", "1");
    } else {
      ge.delete("fav");
    }
    c(ge, {
      replace: true
    });
  };
  const le = k.useMemo(() => {
    const q = d.trim().toLowerCase();
    const _e = I.filter(K => z && !K.favorite || m !== "all" && K.segment !== m ? false : q ? [K.name, K.company, K.city, K.email, K.industry].some(D => D.toLowerCase().includes(q)) : true).map(K => ({
      customer: K,
      pipeline: Ae(an(n.deals).filter(D => D.customerId === K.id).map(D => D.amount))
    }));
    _e.sort((K, D) => K.customer.favorite !== D.customer.favorite ? K.customer.favorite ? -1 : 1 : _ === "name" ? K.customer.name.localeCompare(D.customer.name) : _ === "pipeline" ? D.pipeline - K.pipeline : D.customer.lastContacted - K.customer.lastContacted);
    return _e;
  }, [I, d, m, _, n.deals, z]);
  const G = I.filter(q => q.since >= W - sn * 7).length;
  const B = Gy(I, W, 7);
  const re = Ae(an(n.deals).map(q => q.amount));
  k.useEffect(() => {
    r.registerExport(() => {
      const q = le.map(({
        customer: ge,
        pipeline: _e
      }) => [ge.name, ge.jobRole, ge.company, ge.email, ge.phone, ge.segment, ge.industry, ge.city, ge.owner, _e, new Date(ge.lastContacted).toISOString().slice(0, 10), ge.favorite ? "yes" : "no"]);
      Ur(`sales-crm-customers-${Fr()}.csv`, Mr(["name", "job_role", "company", "email", "phone", "segment", "industry", "city", "owner", "open_pipeline_usd", "last_contacted", "favourite"], q));
      e.logAudit({
        actorId: n.me.id,
        action: "export",
        entityType: "customers",
        entityId: "customers",
        metadata: {
          rows: q.length,
          segment: m,
          query: d || null,
          favourites: z || null,
          archived: "excluded"
        }
      });
      r.toast(`${q.length} customers exported`);
    }, "Customers");
    return () => r.registerExport(null, "Customers");
  }, [le, m, d, z]);
  const be = [{
    key: "total",
    icon: <_Component22 />,
    value: <a.Fragment><b className="num"><Je value={I.length} /></b>{G > 0 && <_Component10 tone="butter">+{G} this week</_Component10>}</a.Fragment>,
    label: "Customers in your book"
  }, {
    key: "contacted",
    icon: <_Component23 />,
    value: <a.Fragment><b className="num"><Je value={B.length} /></b><_Component10 tone="plain">{Math.round(B.length / Math.max(1, I.length) * 100)}%</_Component10></a.Fragment>,
    label: "Contacted in the last 7 days"
  }, {
    key: "pipe",
    icon: <Np />,
    value: <b className="num"><Je value={re} format={Ie} /></b>,
    label: "Open pipeline across the book"
  }];
  return <section className="view" data-view="customers"><_Component11 title="Customer Directory" stats={be} /><div className="toolbar cx-tools"><label className="search cx-search"><_Component /><span className="sr">Search customers</span><input type="search" placeholder="Search name, company, city…" value={d} onChange={q => h(q.target.value)} /></label><div className="cx-chips" role="group" aria-label="Filter customers"><Ft pressed={z} onClick={() => X(!z)}><Zs /> Favourites</Ft><Ft pressed={m === "all"} onClick={() => g("all")}>All</Ft>{dg.map(q => <Ft pressed={m === q} onClick={() => g(q)} key={q}>{q}</Ft>)}</div><span className="toolbar__spacer" /><Se variant="ghost" size="sm" onClick={() => v(_ === "contact" ? "name" : _ === "name" ? "pipeline" : "contact")}><_Component24 />{_ === "contact" ? "Last contacted" : _ === "name" ? "Name" : "Open pipeline"}</Se><_Component18 label="Layout" value={w} onChange={y} options={[{
        value: "grid",
        label: "Grid"
      }, {
        value: "table",
        label: "Table"
      }]} /><Se variant="ghost" size="sm" className="cx-export" onClick={r.exportCurrent} aria-label="Export customers as CSV"><Lr /><span className="cx-lbl" aria-hidden="true">Export</span></Se><Se className="cx-new" aria-label="New customer" onClick={() => {
        O(null);
        R(null);
        b(true);
      }}><Ut /><span className="cx-lbl" aria-hidden="true">New customer</span></Se></div><p className="sr-live" role="status" aria-live="polite">{le.length} customers</p>{le.length === 0 && <_Component13 icon={<_Component22 />} title="No customers match" text={z ? "Star a customer to add it to your favourites, or turn the filter off." : "Clear the search or pick another segment."} action={<Se variant="ghost" size="sm" onClick={() => {
      h("");
      g("all");
      X(false);
    }}>Show everyone</Se>} />}{w === "grid" ? <div className="cx-grid">{le.map(({
        customer: q,
        pipeline: ge
      }) => <article className="cx-card" data-key={q.id} key={q.id}><button type="button" className="cx-card__link" aria-label={`Open ${q.name}`} onClick={() => i(`/customers/${q.id}`)} /><header className="cx-card__top"><St name={q.name} size="lg" photo={q.photo ? `/photos/${q.photo}.jpg` : undefined} /><Ue size="sm" className="cx-star" active={q.favorite} label={q.favorite ? "Remove from favourites" : `Add ${q.name} to favourites`} onClick={() => {
            const _e = e.toggleFavoriteCustomer(q.id);
            r.toast(_e ? `${q.name} starred` : `${q.name} unstarred`);
          }}><Zs /></Ue></header><h3 className="cx-card__name">{q.name}</h3><p className="cx-card__role">{q.jobRole} · {q.company}</p><dl className="cx-card__facts"><div><dt>Open pipeline</dt><dd className="num">{Xe(ge)}</dd></div><div><dt>Last contact</dt><dd>{pw(q.lastContacted, W)}</dd></div></dl><div className="cx-card__health" title={`Relationship health ${q.health} of 100`}><span className="meter" role="img" aria-label={`Relationship health ${q.health} of 100`}><span className={`meter__fill ${ak(q.health)}`} style={{
              width: `${q.health}%`
            }} /></span><b className="num">{q.health}</b></div><footer className="cx-card__foot"><span className="chip">{q.segment}</span><span className="cx-card__acts"><Ue size="sm" label={`Email ${q.first}`} onClick={() => {
              window.location.href = `mailto:${q.email}`;
            }}><_Component23 /></Ue><Ue size="sm" label={`Call ${q.first}`} onClick={() => {
              window.location.href = `tel:${q.phone.replace(/[^+\d]/g, "")}`;
            }}><_Component25 /></Ue></span></footer></article>)}</div> : <De title="Directory"><div className="table-wrap"><table className="table"><thead><tr><th scope="col">Customer</th><th scope="col">Company</th><th scope="col">Segment</th><th scope="col">City</th><th scope="col" className="r">Open pipeline</th><th scope="col">Last contact</th><th scope="col" className="r">Actions</th></tr></thead><tbody>{le.map(({
              customer: q,
              pipeline: ge
            }) => <tr key={q.id}><td><button type="button" className="cell-person" onClick={() => i(`/customers/${q.id}`)}><St name={q.name} size="sm" photo={q.photo ? `/photos/${q.photo}.jpg` : undefined} /><span><b>{q.name}</b><small>{q.jobRole}</small></span></button></td><td>{q.company}</td><td><span className="spill spill--plain"><i />{q.segment}</span></td><td>{q.city}</td><td className="num r">{Ie(ge)}</td><td>{mt(q.lastContacted)}</td><td className="r"><Ue size="sm" label={`Edit ${q.name}`} onClick={() => {
                  O(q);
                  R(null);
                  b(true);
                }}><Rp /></Ue></td></tr>)}</tbody></table></div></De>}<_Component26 open={j} customer={C} owners={n.members.map(q => ({
      id: q.id,
      name: q.name
    }))} existing={I} error={L} onClose={() => {
      b(false);
      O(null);
    }} onSave={q => {
      const ge = I.find(_e => _e.email.toLowerCase() === q.email.trim().toLowerCase() && _e.id !== (C == null ? undefined : C.id));
      if (ge) {
        R(`${q.email} already belongs to ${ge.name}. Open that record instead?`);
        return;
      }
      try {
        if (C) {
          e.updateCustomer(C.id, q);
          r.toast(`${q.first} ${q.last} updated`);
        } else {
          const _e = e.createCustomer(q);
          r.toast(`${_e.name} added to the directory`);
        }
        b(false);
        O(null);
        R(null);
      } catch (_e) {
        R(_e instanceof Error ? _e.message : "Could not save the customer");
      }
    }} /></section>;
}
function _Component36() {
  var v;
  const {
    id: n
  } = Kv();
  const {
    data: e,
    repo: r
  } = jn();
  const i = rr();
  const l = on();
  const c = e.customers.find(j => j.id === n);
  const [d, h] = k.useState(false);
  if (!c) {
    return <section className="view" data-view="customers"><De title="Customer not found"><_Component13 icon={<_Component22 />} title="That record is gone" text="It may have been archived, or the link belongs to another workspace." action={<Se onClick={() => l("/customers")}>Back to the directory</Se>} /></De></section>;
  }
  const m = e.deals.filter(j => j.customerId === c.id);
  const g = an(m);
  const w = e.tasks.filter(j => j.customerId === c.id).sort((j, b) => j.at - b.at);
  const y = e.invoices.filter(j => j.customerId === c.id);
  const _ = e.projects.filter(j => j.customerId === c.id);
  return <section className="view" data-view="customers"><_Component11 title={c.name} stats={[{
      key: "open",
      icon: <Np />,
      value: <b className="num">{Ie(Ae(g.map(j => j.amount)))}</b>,
      label: "Open pipeline"
    }, {
      key: "contact",
      icon: <_Component23 />,
      value: <b className="num">{mt(c.lastContacted)}</b>,
      label: "Last contact"
    }, {
      key: "since",
      icon: <_Component22 />,
      value: <b className="num">{$r(c.since)}</b>,
      label: "Customer since"
    }]} actions={<a.Fragment><Se variant="ghost" onClick={() => l("/customers")}>Back</Se><Se variant={c.favorite ? "ink" : "ghost"} onClick={() => {
        const j = r.toggleFavoriteCustomer(c.id);
        i.toast(j ? `${c.name} starred` : `${c.name} unstarred`);
      }}><Zs /> {c.favorite ? "Starred" : "Star"}</Se><Se onClick={() => r.createTask({
        title: "Follow-up call",
        kind: "call",
        customerId: c.id,
        who: c.owner,
        at: Date.now() + 86400000
      })}><Ut /> Log a follow-up</Se><Se variant="ghost" onClick={() => h(true)}><_Component16 /> Archive</Se></a.Fragment>} /><_Component17 open={d} onClose={() => h(false)} title={`Archive ${c.name}?`} subtitle="Archiving hides the record from the directory and keeps every linked deal, task and invoice." footer={<a.Fragment><Se variant="ghost" onClick={() => h(false)}>Cancel</Se><Se variant="danger" onClick={() => {
        h(false);
        r.archiveCustomer(c.id);
        l("/customers");
        i.toast(`${c.name} archived`, {
          label: "Undo",
          run: () => {
            r.unarchiveCustomer(c.id);
            l(`/customers/${c.id}`);
          }
        });
      }}><_Component16 /> Archive customer</Se></a.Fragment>}><p className="card__sub" style={{
        gridColumn: "1 / -1"
      }}>{`${c.name} is linked to ${m.length} deals and ${w.length} activities. Those stay intact (SRS-FR-034).`}</p></_Component17><div className="cx-detail"><div style={{
        display: "grid",
        gap: "var(--gap)"
      }}><De title="Deals">{m.length === 0 && <_Component13 title="No deals yet" text="Create one from the pipeline board." />}<div className="table-wrap">{m.length > 0 && <table className="table"><thead><tr><th scope="col">Deal</th><th scope="col">Stage</th><th scope="col" className="r">Value</th><th scope="col">Closes</th></tr></thead><tbody>{m.map(j => <tr key={j.id}><td>{j.title}</td><td>{j.stage}</td><td className="num r">{Ie(j.amount)}</td><td>{mt(j.closeAt)}</td></tr>)}</tbody></table>}</div></De><De title="Activity history">{w.length === 0 && <_Component13 title="Nothing logged" text="Calls and meetings appear here." />}<div className="feed">{w.map(j => {
              var b;
              return <div className="feed__item" key={j.id}><span className={`sch-dot sch-dot--${j.kind}`} aria-hidden="true" /><div><p>{j.title}</p><small>{$r(j.at)} · {((b = e.members.find(C => C.id === j.who)) == null ? undefined : b.name) ?? "—"}{j.done ? " · done" : ""}</small></div></div>;
            })}</div></De></div><div style={{
        display: "grid",
        gap: "var(--gap)"
      }}><De title="Profile"><div className="cx-person"><St name={c.name} size="lg" photo={c.photo ? `/photos/${c.photo}.jpg` : undefined} /><span className="cx-person__meta"><b>{c.name}</b><small>{c.jobRole}</small><small>{c.company}</small></span></div><dl className="keys cx-keys"><div><dt>Email</dt><dd><a href={`mailto:${c.email}`} style={{
                  textDecoration: "underline"
                }}>{c.email}</a></dd></div><div><dt>Phone</dt><dd>{c.phone}</dd></div><div><dt>Industry</dt><dd>{c.industry}</dd></div><div><dt>Segment</dt><dd>{c.segment}</dd></div><div><dt>City</dt><dd>{c.city}</dd></div><div><dt>Owner</dt><dd>{((v = e.members.find(j => j.id === c.owner)) == null ? undefined : v.name) ?? "—"}</dd></div><div><dt>Health</dt><dd><Zo tone={c.health > 70 ? "paid" : c.health > 50 ? "due" : "overdue"}>{c.health}%</Zo></dd></div><div><dt>Channels</dt><dd>{c.sources.map(j => mu[j]).join(", ")}</dd></div></dl></De><De title="Finance">{y.length === 0 && <_Component13 title="No invoices" text="Issued invoices show up here." />}<ul className="keys">{y.map(j => <div key={j.id}><dt>{j.number}</dt><dd className="num">{Ie(j.amount)} · {j.status}</dd></div>)}</ul></De><De title="Projects">{_.length === 0 && <_Component13 title="No projects" text="Onboarding work shows up here." />}<ul className="keys">{_.map(j => <div key={j.id}><dt>{j.name}</dt><dd>{j.status}</dd></div>)}</ul></De></div></div></section>;
}
function Ym() {
  return {
    first: "",
    last: "",
    jobRole: "",
    company: "",
    domain: "",
    industry: "",
    segment: "Mid-market",
    city: "",
    email: "",
    phone: "",
    owner: "m-sofia"
  };
}
function _Component26({
  open: n,
  customer: e,
  owners: r,
  existing: i,
  error: l,
  onClose: c,
  onSave: d
}) {
  const [h, m] = k.useState(Ym);
  const [g, w] = k.useState(null);
  k.useEffect(() => {
    if (n) {
      w(null);
      if (e) {
        const {
          first: _,
          last: v,
          jobRole: j,
          company: b,
          domain: C,
          industry: O,
          segment: L,
          city: R,
          email: W,
          phone: I,
          owner: z
        } = e;
        m({
          first: _,
          last: v,
          jobRole: j,
          company: b,
          domain: C,
          industry: O,
          segment: L,
          city: R,
          email: W,
          phone: I,
          owner: z
        });
      } else {
        m(Ym());
      }
    }
  }, [n, e]);
  const y = () => {
    if (!h.first.trim() || !h.last.trim()) {
      w("A first and last name are required.");
      return;
    }
    if (!h.company.trim()) {
      w("Add the company so the record can be found later.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(h.email.trim())) {
      w("That email address does not look right.");
      return;
    }
    if (i.length > 0 && !h.owner) {
      w("Assign an owner.");
      return;
    }
    d(h);
  };
  return <_Component17 open={n} onClose={c} title={e ? `Edit ${e.name}` : "New customer"} subtitle="Server-side validation is the source of truth; this form just fails fast." error={g ?? l} footer={<a.Fragment><Se variant="ghost" onClick={c}>Cancel</Se><Se onClick={y}>{e ? "Save changes" : "Create customer"}</Se></a.Fragment>}><Ne label="First name" htmlFor="cx-first"><_Component1 id="cx-first" value={h.first} onChange={_ => m({
        ...h,
        first: _.target.value
      })} /></Ne><Ne label="Last name" htmlFor="cx-last"><_Component1 id="cx-last" value={h.last} onChange={_ => m({
        ...h,
        last: _.target.value
      })} /></Ne><Ne label="Job role" htmlFor="cx-role"><_Component1 id="cx-role" value={h.jobRole} onChange={_ => m({
        ...h,
        jobRole: _.target.value
      })} /></Ne><Ne label="Company" htmlFor="cx-company"><_Component1 id="cx-company" value={h.company} onChange={_ => m({
        ...h,
        company: _.target.value
      })} /></Ne><Ne label="Email" htmlFor="cx-email"><_Component1 id="cx-email" type="email" value={h.email} onChange={_ => m({
        ...h,
        email: _.target.value
      })} /></Ne><Ne label="Phone" htmlFor="cx-phone"><_Component1 id="cx-phone" value={h.phone} onChange={_ => m({
        ...h,
        phone: _.target.value
      })} /></Ne><Ne label="Segment" htmlFor="cx-segment"><select id="cx-segment" value={h.segment} onChange={_ => m({
        ...h,
        segment: _.target.value
      })}>{dg.map(_ => <option value={_} key={_}>{_}</option>)}</select></Ne><Ne label="Owner" htmlFor="cx-owner"><select id="cx-owner" value={h.owner} onChange={_ => m({
        ...h,
        owner: _.target.value
      })}>{r.map(_ => <option value={_.id} key={_.id}>{_.name}</option>)}</select></Ne><Ne label="Industry" htmlFor="cx-industry"><_Component1 id="cx-industry" value={h.industry} onChange={_ => m({
        ...h,
        industry: _.target.value
      })} /></Ne><Ne label="City" htmlFor="cx-city"><_Component1 id="cx-city" value={h.city} onChange={_ => m({
        ...h,
        city: _.target.value
      })} /></Ne></_Component17>;
}
const Xn = {
  call: "Calls",
  meeting: "Meetings",
  task: "Tasks",
  email: "Emails"
};
function _Component37() {
  const {
    data: n,
    repo: e
  } = jn();
  const r = rr();
  const i = on();
  const [l, c] = li();
  const d = Date.now();
  const [h, m] = k.useState("month");
  const [g, w] = k.useState(() => new Date(d).getTime());
  const [y, _] = k.useState("");
  const [v, j] = k.useState([]);
  const [b, C] = k.useState(() => new Date(d).getTime());
  const [O, L] = k.useState(null);
  const [R, W] = k.useState(null);
  const [I, z] = k.useState(false);
  const [X, le] = k.useState(null);
  const [G, B] = k.useState(null);
  const re = k.useRef(null);
  k.useEffect(() => {
    if (l.get("new") === "1") {
      z(true);
      B(null);
      c({}, {
        replace: true
      });
    }
  }, [l, c]);
  const be = k.useMemo(() => n.tasks.filter(U => (!y || U.who === y) && (!v.length || !!v.includes(U.kind))), [n.tasks, y, v]);
  const q = Rr(be, d);
  const ge = Qf(d);
  const _e = be.filter(U => U.at >= ge.start && U.at <= ge.end);
  const K = Lo(be, d);
  k.useEffect(() => {
    r.registerExport(() => {
      const U = be.slice().sort((ie, me) => ie.at - me.at).map(ie => {
        var me;
        var A;
        return [new Date(ie.at).toISOString(), ie.title, ie.kind, ((me = n.members.find(oe => oe.id === ie.who)) == null ? undefined : me.name) ?? "", ((A = n.customers.find(oe => oe.id === ie.customerId)) == null ? undefined : A.company) ?? "", ie.done ? "done" : "open"];
      });
      Ur(`sales-crm-schedule-${Fr()}.csv`, Mr(["starts_at", "title", "kind", "owner", "customer", "status"], U));
      e.logAudit({
        actorId: n.me.id,
        action: "export",
        entityType: "activities",
        entityId: "schedule",
        metadata: {
          rows: U.length,
          who: y || "everyone",
          kinds: v
        }
      });
      r.toast(`${U.length} activities exported`);
    }, "Schedule");
    return () => r.registerExport(null, "Schedule");
  }, [be, y, v]);
  const D = k.useMemo(() => {
    const U = new Date(g);
    const me = (new Date(U.getFullYear(), U.getMonth(), 1).getDay() + 6) % 7;
    const A = new Date(U.getFullYear(), U.getMonth(), 1 - me);
    return Array.from({
      length: 42
    }, (oe, we) => new Date(A.getFullYear(), A.getMonth(), A.getDate() + we).getTime());
  }, [g]);
  const H = k.useMemo(() => {
    const U = new Date(Qf(h === "week" ? g : d).start);
    return Array.from({
      length: 7
    }, (ie, me) => new Date(U.getFullYear(), U.getMonth(), U.getDate() + me).getTime());
  }, [g, h, d]);
  const se = h === "month" ? D : H;
  const te = new Date(g).getMonth();
  const T = (U, ie) => {
    const me = new Date(U.at);
    const A = new Date(ie);
    A.setHours(me.getHours(), me.getMinutes(), 0, 0);
    const oe = U.at;
    e.updateTaskAt(U.id, A.getTime());
    if (re.current) {
      re.current.textContent = `${U.title} moved to ${mt(A.getTime())}`;
    }
    r.toast(`${U.title} → ${mt(A.getTime())}`, {
      label: "Undo",
      run: () => e.updateTaskAt(U.id, oe)
    });
  };
  const V = [{
    key: "today",
    icon: <Xa />,
    value: <b className="num"><Je value={q.length} /></b>,
    label: "Tasks today"
  }, {
    key: "week",
    icon: <_Component2 />,
    value: <b className="num"><Je value={_e.length} /></b>,
    label: "This week"
  }, {
    key: "late",
    icon: <Pn />,
    value: <b className="num"><Je value={K.length} /></b>,
    label: "Overdue, unfinished"
  }];
  return <section className="view sch" data-view="schedule"><_Component11 title="Team Schedule" stats={V} /><div className="toolbar sch-bar"><div className="sch-filters"><div className="sch-chips" role="group" aria-label="Filter by teammate"><Ft pressed={y === ""} onClick={() => _("")}>Everyone</Ft>{n.members.map(U => <Ft pressed={y === U.id} aria-label={U.name} onClick={() => _(U.id)} key={U.id}>{U.name.split(" ")[0]}</Ft>)}</div><span className="sch-sep" aria-hidden="true" /><div className="sch-chips" role="group" aria-label="Filter by type">{Object.keys(Xn).map(U => <Ft pressed={v.includes(U)} aria-label={Xn[U]} title={Xn[U]} onClick={() => j(ie => ie.includes(U) ? ie.filter(me => me !== U) : [...ie, U])} key={U}><i className={`sch-dot sch-dot--${U}`} /><span aria-hidden="true">{Xn[U]}</span></Ft>)}</div></div><span className="toolbar__spacer" /><Se className="sch-new" onClick={() => {
        B(b);
        le(null);
        z(true);
      }}><Ut /> New task</Se></div><p className="sr-live" aria-live="polite" ref={re} /><div className="sch-grid"><De id="sch-cal" className="sch-calcard" title={<span className="sch-period">{h === "month" ? em(g) : `Week of ${mt(H[0])}`}</span>} tools={<a.Fragment><div className="sch-nav" style={{
          display: "flex",
          gap: 6,
          alignItems: "center"
        }}><Ue size="sm" label="Previous month" onClick={() => {
            const U = new Date(g);
            w(new Date(U.getFullYear(), U.getMonth() + (h === "month" ? -1 : 0), h === "month" ? 1 : U.getDate() - 7).getTime());
          }}><_Component27 /></Ue><Se variant="ghost" size="sm" onClick={() => {
            w(Date.now());
            C(Date.now());
          }}>Today</Se><Ue size="sm" label="Next month" onClick={() => {
            const U = new Date(g);
            w(new Date(U.getFullYear(), U.getMonth() + (h === "month" ? 1 : 0), h === "month" ? 1 : U.getDate() + 7).getTime());
          }}><Tp /></Ue></div><_Component18 label="Calendar view" value={h} onChange={m} options={[{
          value: "month",
          label: "Month"
        }, {
          value: "week",
          label: "Week"
        }]} /><Ue size="sm" label="Calendar options" onClick={() => r.toast(`${be.length} activities in view`)}><An /></Ue></a.Fragment>}>{h === "month" && <div className="sch-dow" aria-hidden="true">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(U => <span key={U}>{U}</span>)}</div>}<div className="sch-cells" role="group" aria-label={h === "month" ? em(g) : "This week"} style={h === "week" ? {
          gridTemplateColumns: "repeat(7, minmax(82px, 1fr))",
          gridAutoRows: "240px"
        } : undefined}>{se.map(U => {
            const ie = Rr(be, U);
            const me = h === "month" && new Date(U).getMonth() !== te;
            return <div className={`sch-day ${me ? "is-out" : ""} ${Gc(U, Date.now()) ? "is-today" : ""} ${R === U ? "is-over" : ""}`} data-day={U} onDragOver={A => {
              A.preventDefault();
              W(U);
            }} onDragLeave={() => W(A => A === U ? null : A)} onDrop={A => {
              A.preventDefault();
              W(null);
              const oe = O ?? A.dataTransfer.getData("text/plain");
              const we = be.find(Ee => Ee.id === oe);
              if (we) {
                T(we, U);
              }
              L(null);
            }} key={U}><button type="button" className="sch-day__num" aria-pressed={Gc(U, b)} aria-label={fw(U)} onClick={() => C(U)}><span>{new Date(U).getDate()}</span></button><span className="sch-day__add" aria-hidden="true"><Ut style={{
                  width: 15,
                  height: 15
                }} /></span><div className="sch-day__dots" aria-hidden="true">{ie.slice(0, 3).map(A => <i className={`sch-dot sch-dot--${A.kind}`} key={`dot-${A.id}`} />)}</div><div className="sch-day__chips">{ie.slice(0, h === "week" ? 6 : 3).map(A => <button type="button" className={`sch-chip sch-chip--${A.kind} ${A.done ? "is-done" : ""}`} draggable={true} data-task={A.id} aria-label={`${A.title}, ${ls(A.at)}${A.done ? ", done" : ""}. Drag to another day, or press Enter for options`} onDragStart={oe => {
                  oe.dataTransfer.setData("text/plain", A.id);
                  L(A.id);
                }} onDragEnd={() => L(null)} onClick={() => {
                  C(A.at);
                  r.toast(`${A.title} · ${ls(A.at)}`);
                }} key={A.id}><i className={`sch-dot sch-dot--${A.kind}`} aria-hidden="true" /><span className="sch-chip__t">{mw(A.at)}</span><span className="sch-chip__n">{A.title}</span></button>)}{ie.length > (h === "week" ? 6 : 3) && <span className="sch-more">+{ie.length - (h === "week" ? 6 : 3)} more</span>}</div></div>;
          })}</div></De><De className="sch-agenda" title={<span className="sch-ag__lead"><span className="card__title" id="sch-ag-t">{Gc(b, Date.now()) ? "Today" : Zf(b)}</span><span className="card__sub">{Zf(b)} · {Rr(be, b).filter(U => U.done).length}/{Rr(be, b).length} done</span></span>} tools={<Ue size="sm" label="Add a task on this day" onClick={() => {
        B(b);
        z(true);
      }}><Ut /></Ue>}><ul className="sch-list">{Rr(be, b).map(U => {
            var me;
            const ie = n.customers.find(A => A.id === U.customerId);
            return <li className={`sch-row ${U.done ? "is-done" : ""}`} data-task={U.id} key={U.id}><input className="check" type="checkbox" checked={U.done} aria-label={`Done: ${U.title}`} onChange={A => e.toggleTask(U.id, A.target.checked)} /><div className="sch-row__main"><b className="sch-row__title"><span>{U.title}</span></b><small><span>{ls(U.at)}</span><span className="sch-kindtag"><i className={`sch-dot sch-dot--${U.kind}`} /><span className="sr">{Xn[U.kind]}</span></span>{ie && <button type="button" style={{
                    textDecoration: "underline"
                  }} onClick={() => i(`/customers/${ie.id}`)}>{ie.company}</button>}</small></div><St name={((me = n.members.find(A => A.id === U.who)) == null ? undefined : me.name) ?? "Unassigned"} size="sm" /><Ue size="sm" label={`Options for ${U.title}`} onClick={() => {
                var A;
                return r.toast(`${U.title} · ${((A = n.members.find(oe => oe.id === U.who)) == null ? undefined : A.name) ?? "Unassigned"}`);
              }}><An /></Ue></li>;
          })}</ul>{Rr(be, b).length === 0 && <_Component13 title="Nothing scheduled" text="Add the first task for this day." />}{K.length > 0 && <p className="card__sub sch-late__more">{K.length} unfinished items are past their date — the earliest is {mt(K[0].at)}.</p>}<div className="sch-legend">{Object.keys(Xn).map(U => <span key={U}><i className={`sch-dot sch-dot--${U}`} /> {Xn[U]}</span>)}</div>{n.activity[0] && <p className="card__sub" style={{
          marginTop: 10
        }}>Latest activity: {vp(n.activity[0], U => {
            var ie;
            return ((ie = n.members.find(me => me.id === U)) == null ? undefined : ie.name.split(" ")[0]) ?? "Someone";
          })}</p>}<p className="card__sub" style={{
          marginTop: 6
        }}>{Ie(0)} owed on today's calls · {n.tasks.filter(U => !U.done).length} open activities in the workspace.</p></De></div><_Component28 open={I} day={G ?? b} customers={n.customers} members={n.members} error={X} onClose={() => z(false)} onSave={U => {
      if (!U.title.trim()) {
        le("Give the task a title.");
        return;
      }
      e.createTask(U);
      r.toast(`${U.title} added to ${mt(U.at)}`);
      z(false);
      le(null);
    }} /></section>;
}
function _Component28({
  open: n,
  day: e,
  customers: r,
  members: i,
  error: l,
  onClose: c,
  onSave: d
}) {
  var W;
  const [h, m] = k.useState("");
  const [g, w] = k.useState("call");
  const [y, _] = k.useState("");
  const [v, j] = k.useState(((W = i[0]) == null ? undefined : W.id) ?? "");
  const [b, C] = k.useState("");
  const [O, L] = k.useState("10:00");
  k.useEffect(() => {
    if (!n) {
      return;
    }
    const I = new Date(e);
    C(new Date(I.getFullYear(), I.getMonth(), I.getDate()).toISOString().slice(0, 10));
    m("");
    w("call");
  }, [n, e]);
  const R = () => {
    const I = new Date(`${b}T${O}:00`).getTime();
    d({
      title: h,
      kind: g,
      customerId: y || null,
      who: v,
      at: Number.isFinite(I) ? I : Date.now() + sn
    });
  };
  return <_Component17 open={n} onClose={c} title="New task" subtitle="Activities can hang off a customer or stand on their own." error={l} footer={<a.Fragment><Se variant="ghost" onClick={c}>Cancel</Se><Se onClick={R}>Create task</Se></a.Fragment>}><Ne label="Title" wide={true} htmlFor="task-title"><_Component1 id="task-title" value={h} placeholder="Discovery call" onChange={I => m(I.target.value)} /></Ne><Ne label="Type" htmlFor="task-kind"><select id="task-kind" value={g} onChange={I => w(I.target.value)}>{Object.keys(Xn).map(I => <option value={I} key={I}>{Xn[I]}</option>)}</select></Ne><Ne label="Owner" htmlFor="task-who"><select id="task-who" value={v} onChange={I => j(I.target.value)}>{i.map(I => <option value={I.id} key={I.id}>{I.name}</option>)}</select></Ne><Ne label="Customer (optional)" htmlFor="task-customer"><select id="task-customer" value={y} onChange={I => _(I.target.value)}><option value="">No customer</option>{r.map(I => <option value={I.id} key={I.id}>{I.company} — {I.name}</option>)}</select></Ne><Ne label="Date" htmlFor="task-date"><_Component1 id="task-date" type="date" value={b} onChange={I => C(I.target.value)} /></Ne><Ne label="Time" htmlFor="task-time"><_Component1 id="task-time" type="time" value={O} onChange={I => L(I.target.value)} /></Ne></_Component17>;
}
const _Component29 = k.memo(function ({
  invoice: e,
  customer: r,
  late: i,
  onOpen: l
}) {
  return <tr><td><b>{e.number}</b></td><td><span className="cell-person"><span><b>{(r == null ? undefined : r.company) ?? "—"}</b><small>{(r == null ? undefined : r.name) ?? ""}</small></span></span></td><td>{mt(e.issuedAt)}</td><td>{mt(e.dueAt)}</td><td><Zo tone={e.status === "paid" ? "paid" : i ? "overdue" : "due"}>{e.status === "paid" ? "Paid" : i ? "Overdue" : "Due"}</Zo></td><td className="num r fin-amount">{Ie(e.amount)}</td><td className="r"><Se size="sm" variant="ghost" onClick={() => l(e)}>Open</Se></td></tr>;
});
const hk = [{
  value: "all",
  label: "All"
}, {
  value: "draft",
  label: "Draft"
}, {
  value: "due",
  label: "Due"
}, {
  value: "overdue",
  label: "Overdue"
}, {
  value: "paid",
  label: "Paid"
}];
function _Component38() {
  var _e;
  const {
    data: n,
    repo: e
  } = jn();
  const r = rr();
  const [i, l] = li();
  const c = Date.now();
  const [d, h] = k.useState(6);
  const [m, g] = k.useState("all");
  const [w, y] = k.useState(null);
  const [_, v] = k.useState(false);
  const [j, b] = k.useState(null);
  k.useEffect(() => {
    if (i.get("new") === "1") {
      v(true);
      l({}, {
        replace: true
      });
    }
  }, [i, l]);
  const C = k.useMemo(() => Kt(c, d), [c, d]);
  const O = Kt(c, 1)[0];
  const L = Yf(n.invoices, O.start, O.end);
  const R = Ae(Hy(n.invoices).map(K => K.amount));
  const W = Vy(n.invoices);
  const I = Ae(W.map(K => K.amount));
  const z = C.map(({
    start: K,
    end: D
  }) => Yf(n.invoices, K, D));
  const X = C.map(({
    start: K,
    end: D
  }) => qy(n.invoices, K, D));
  const le = Ae(z);
  const G = Ae(X);
  const B = Ky(n.invoices, c);
  const re = k.useMemo(() => n.invoices.filter(D => m === "all" || D.status === m).sort((D, H) => H.issuedAt - D.issuedAt), [n.invoices, m]);
  const be = k.useMemo(() => new Map(n.customers.map(K => [K.id, K])), [n.customers]);
  k.useEffect(() => {
    r.registerExport(() => {
      const K = re.map(D => {
        const H = n.customers.find(se => se.id === D.customerId);
        return [D.number, (H == null ? undefined : H.company) ?? "", (H == null ? undefined : H.name) ?? "", D.amount, D.currency, new Date(D.issuedAt).toISOString().slice(0, 10), new Date(D.dueAt).toISOString().slice(0, 10), D.paidAt ? new Date(D.paidAt).toISOString().slice(0, 10) : "", D.status];
      });
      Ur(`sales-crm-invoices-${Fr()}.csv`, Mr(["number", "customer", "contact", "amount", "currency", "issued", "due", "paid", "status"], K));
      e.logAudit({
        actorId: n.me.id,
        action: "export",
        entityType: "finance_records",
        entityId: "invoices",
        metadata: {
          rows: K.length,
          status: m
        }
      });
      r.toast(`${K.length} invoices exported`);
    }, "Invoices");
    return () => r.registerExport(null, "Invoices");
  }, [re, m]);
  const q = [{
    key: "collected",
    icon: <Ip />,
    value: <b className="num"><Je value={L} format={Ie} /></b>,
    label: "Collected this month"
  }, {
    key: "due",
    icon: <Xa />,
    value: <b className="num"><Je value={R} format={Ie} /></b>,
    label: "Outstanding, not yet due"
  }, {
    key: "overdue",
    icon: <Ap />,
    value: <a.Fragment><b className="num"><Je value={I} format={Ie} /></b>{W.length > 0 && <_Component10 tone="tomato">{W.length} late</_Component10>}</a.Fragment>,
    label: "Overdue"
  }];
  const ge = G ? le / G : 0;
  return <section className="view fin" data-view="finance"><_Component11 title="Revenue & Invoices" stats={q} /><div className="grid fin-grid"><De id="fin-cash" className="fin-cash" title="Cash flow" focusable={true} tools={<a.Fragment><_Component18 label="Range" value={String(d)} onChange={K => h(Number(K))} options={[{
          value: "6",
          label: "6M"
        }, {
          value: "12",
          label: "12M"
        }]} /><Ue size="sm" label="Cash flow options" onClick={() => r.toast(`${st(ge)} of ${Xe(G)} invoiced has been collected`)}><An /></Ue></a.Fragment>}><div className="fin-cash__sum"><b className="num">{Ie(le)}</b><span className="card__sub">collected in {d} months · {st(ge)} of {Xe(G)} invoiced</span></div><div className="fin-chart"><_Component12 ariaLabel="Collected against invoiced per month" height={220} xLabels={C.map(({
            start: K
          }) => Va(K))} series={[{
            key: "collected",
            label: "Collected",
            tone: "pine",
            values: z,
            area: true
          }, {
            key: "invoiced",
            label: "Invoiced",
            tone: "ink",
            dashed: true,
            values: X
          }]} /></div><div className="legend"><span><i className="tone--pine" /> Collected</span><span><i className="fin-dash" aria-hidden="true" /> Invoiced</span></div></De><De id="fin-aging" className="fin-aging" title="Aging" focusable={true}><p className="card__sub fin-aging__sub">Unpaid invoices by age since issue</p><Kj ariaLabel="Unpaid invoices by age" items={B.map(K => ({
          label: K.label,
          value: K.total
        }))} /><ul className="fin-aging__list">{B.map((K, D) => <li key={K.label}><span><i className={`fin-age fin-age--${D}`} /><span className="card__sub">{K.count} {K.count === 1 ? "invoice" : "invoices"}</span></span><b className="num">{Ie(K.total)}</b></li>)}</ul></De><De id="fin-inv" className="fin-inv" title="Invoices" focusable={true} tools={<a.Fragment><Se size="sm" onClick={() => {
          b(null);
          v(true);
        }}><Ut /> New invoice</Se><Ue size="sm" label="Invoice options" onClick={() => r.toast(`${re.length} invoices in view`)}><An /></Ue></a.Fragment>}><div className="toolbar fin-tools"><_Component18 label="Status" value={m} onChange={g} options={hk.map(K => ({
            value: K.value,
            label: K.label
          }))} /><span className="toolbar__spacer" /><span className="card__sub fin-count">{re.length} of {n.invoices.length} invoices</span><Ue label="Export invoices as CSV" variant="glass" onClick={r.exportCurrent}><Lr /></Ue></div><div className="table-wrap"><table className="table fin-table"><thead><tr><th scope="col">Invoice</th><th scope="col">Customer</th><th scope="col">Issued</th><th scope="col">Due</th><th scope="col">Status</th><th scope="col" className="r">Amount</th><th scope="col" className="r">Actions</th></tr></thead><tbody>{re.map(K => <_Component29 invoice={K} customer={be.get(K.customerId)} late={K.paidAt === null && K.dueAt < c} onOpen={y} key={K.id} />)}</tbody></table></div>{re.length === 0 && <_Component13 icon={<Uu />} title="No invoices here" text="Try another status filter, or raise a new invoice." />}<p className="card__sub" style={{
          marginTop: 10
        }}>Collections in the last {d} months: {Xe(le)} of {Xe(G)} invoiced. This module tracks CRM-level money only — it is not a ledger (MRD §9).</p></De></div><_Component17 open={!!w} onClose={() => y(null)} title={w ? `Invoice ${w.number}` : "Invoice"} subtitle={w ? $r(w.issuedAt) : undefined} footer={<a.Fragment><Se variant="ghost" onClick={() => y(null)}>Close</Se>{w && w.paidAt === null && <Se onClick={() => {
        const K = w;
        e.markInvoicePaid(K.id);
        r.toast(`${K.number} marked as paid`, {
          label: "Undo",
          run: () => {
            e.unmarkInvoicePaid(K.id);
            r.toast(`${K.number} marked unpaid`);
          }
        });
        y(null);
      }}>Mark as paid</Se>}</a.Fragment>}>{w && <dl className="keys" style={{
        gridColumn: "1 / -1",
        width: "100%"
      }}><div><dt>Customer</dt><dd>{((_e = n.customers.find(K => K.id === w.customerId)) == null ? undefined : _e.company) ?? "—"}</dd></div><div><dt>Amount</dt><dd className="num">{Ie(w.amount)}</dd></div><div><dt>Due</dt><dd>{$r(w.dueAt)}</dd></div><div><dt>Age</dt><dd>{Math.floor((c - w.issuedAt) / sn)} days since issue</dd></div><div><dt>Status</dt><dd>{w.status}</dd></div></dl>}</_Component17><_Component30 open={_} customers={n.customers.filter(K => !K.archivedAt)} error={j} onClose={() => v(false)} onSave={K => {
      if (!K.customerId) {
        b("Pick the customer this invoice belongs to.");
        return;
      }
      if (!Number.isFinite(K.amount) || K.amount <= 0) {
        b("Enter an amount greater than zero.");
        return;
      }
      const D = e.createInvoice(K);
      r.toast(`Invoice ${D.number} raised`);
      v(false);
      b(null);
    }} /></section>;
}
function _Component30({
  open: n,
  customers: e,
  error: r,
  onClose: i,
  onSave: l
}) {
  const [c, d] = k.useState("");
  const [h, m] = k.useState(12000);
  const [g, w] = k.useState(new Date().toISOString().slice(0, 10));
  const [y, _] = k.useState(new Date(Date.now() + sn * 30).toISOString().slice(0, 10));
  k.useEffect(() => {
    if (n) {
      w(new Date().toISOString().slice(0, 10));
      _(new Date(Date.now() + sn * 30).toISOString().slice(0, 10));
    }
  }, [n]);
  return <_Component17 open={n} onClose={i} title="New invoice" subtitle="Issued and due dates drive the aging buckets on this page." error={r} footer={<a.Fragment><Se variant="ghost" onClick={i}>Cancel</Se><Se onClick={() => l({
      customerId: c,
      amount: h,
      issuedAt: new Date(`${g}T12:00:00`).getTime(),
      dueAt: new Date(`${y}T12:00:00`).getTime()
    })}>Raise invoice</Se></a.Fragment>}><Ne label="Customer" wide={true} htmlFor="inv-customer"><select id="inv-customer" value={c} onChange={v => d(v.target.value)}><option value="">Select a customer…</option>{e.map(v => <option value={v.id} key={v.id}>{v.company} — {v.name}</option>)}</select></Ne><Ne label="Amount (USD)" htmlFor="inv-amount"><_Component1 id="inv-amount" type="number" min={0} step={10} value={h} onChange={v => m(Number(v.target.value))} /></Ne><Ne label="Issued" htmlFor="inv-issued"><_Component1 id="inv-issued" type="date" value={g} onChange={v => w(v.target.value)} /></Ne><Ne label="Due" htmlFor="inv-due"><_Component1 id="inv-due" type="date" value={y} onChange={v => _(v.target.value)} /></Ne><p className="card__sub" style={{
      gridColumn: "1 / -1"
    }}>Nothing here posts to an external ledger; the row is written to the audit log with its amount and status only.</p></_Component17>;
}
const Xm = {
  Enterprise: "pine",
  "Mid-market": "tomato",
  SMB: "butter"
};
function _Component39() {
  const {
    data: n,
    repo: e
  } = jn();
  const r = rr();
  const i = on();
  const l = Date.now();
  const [c, d] = k.useState(6);
  const [h, m] = k.useState("abs");
  const [g, w] = k.useState([]);
  const y = k.useMemo(() => Kt(l, c), [l, c]);
  const _ = {
    start: y[0].start,
    end: y[y.length - 1].end
  };
  const v = Ou(n.customers, _.start, _.end);
  const j = Jy(n.deals, _.start, _.end);
  const b = Qy(n.deals, _.start, _.end);
  const C = k.useMemo(() => Yy(n.deals, n.customers, l, c), [n.deals, n.customers, l, c]);
  const O = C.segments.filter(B => !g.includes(B));
  const L = Ae(O.map(B => C.totals[B]));
  const R = k.useMemo(() => ew(n.customers, _.start, _.end), [n.customers, _.start, _.end]);
  const W = k.useMemo(() => Xy(n.customers, l, c), [n.customers, l, c]);
  const I = k.useMemo(() => Zy(n.deals, l, c), [n.deals, l, c]);
  const z = k.useMemo(() => nw(n.members, n.deals, _.start, _.end), [n.members, n.deals, _.start, _.end]);
  const X = k.useMemo(() => tw(n.deals, n.customers, _.start, _.end, 6), [n.deals, n.customers, _.start, _.end]);
  k.useEffect(() => {
    r.registerExport(() => {
      const B = y.map(({
        start: re
      }) => {
        const be = new Date(re).toISOString().slice(0, 7);
        const q = I[y.findIndex(_e => _e.start === re)] ?? 0;
        const ge = y.findIndex(_e => _e.start === re);
        return [be, C.values.Enterprise[ge] ?? 0, C.values["Mid-market"][ge] ?? 0, C.values.SMB[ge] ?? 0, W[ge] ?? 0, q];
      });
      Ur(`sales-crm-growth-${Fr()}.csv`, Mr(["month", "enterprise_won", "midmarket_won", "smb_won", "new_customers", "win_rate"], B));
      e.logAudit({
        actorId: n.me.id,
        action: "export",
        entityType: "growth",
        entityId: "growth",
        metadata: {
          months: c
        }
      });
      r.toast(`Growth report exported · ${c} months`);
    }, "Growth");
    return () => r.registerExport(null, "Growth");
  }, [y, C, W, I, c]);
  const le = [{
    key: "new",
    icon: <_Component22 />,
    value: <b className="num"><Je value={v.length} /></b>,
    label: `New customers, last ${c} months`
  }, {
    key: "avg",
    icon: <Ep />,
    value: <b className="num"><Je value={j} format={Ie} /></b>,
    label: "Average won deal"
  }, {
    key: "cycle",
    icon: <Ew />,
    value: <b className="num"><Je value={b} /></b>,
    label: "Average sales cycle, days"
  }];
  const G = I.filter(B => B >= 0.5).length;
  return <section className="view" data-view="growth"><_Component11 title="Growth Reports" stats={le} actions={<a.Fragment><_Component18 label="Report period" value={String(c)} onChange={B => d(Number(B))} options={[{
        value: "3",
        label: "3M"
      }, {
        value: "6",
        label: "6M"
      }, {
        value: "12",
        label: "12M"
      }]} /><Se onClick={r.exportCurrent}><Lr /> Export</Se></a.Fragment>} /><div className="g-grid"><De id="g-seg" className="g-seg" title="Revenue by segment" focusable={true} tools={<_Component18 label="Show as" value={h} onChange={m} options={[{
        value: "abs",
        label: "$"
      }, {
        value: "share",
        label: "%"
      }]} />}><p className="g-fig"><b className="num">{h === "abs" ? Ie(L) : st(1)}</b><span className="card__sub">{h === "abs" ? `won, last ${c} months` : "share of won revenue"}</span></p><div className="g-chips" role="group" aria-label="Segments shown">{C.segments.map(B => <Ft className="g-chip" pressed={!g.includes(B)} onClick={() => w(re => re.includes(B) ? re.filter(be => be !== B) : [...re, B])} key={B}><i className={`gcols__piece--${Xm[B]}`} /><span className="g-chip__v num">{h === "abs" ? Xe(C.totals[B]) : st(L ? C.totals[B] / L : 0)}</span></Ft>)}</div><div className="g-seg__chart"><Jm ariaLabel="Revenue won per month by customer segment" columns={y.map(({
            start: B
          }) => Va(B))} series={O.map(B => ({
            key: B,
            label: B,
            tone: Xm[B],
            values: C.values[B].map(re => h === "abs" ? re : L ? re / L : 0)
          }))} format={B => h === "abs" ? Xe(B) : st(B, 0)} /></div></De><De id="g-src" className="g-src" title="Lead sources" focusable={true}><p className="card__sub g-src__sub">How the {v.length} customers who joined in the last {c} months reached us. One customer can come through several channels.</p>{R.length === 0 ? <_Component13 icon={<_Component22 />} title="No new customers" text="Nobody joined in this period, so there are no sources to show." /> : <div className="g-src__body"><Gj segments={R.map(B => ({
            key: B.key,
            label: B.label,
            value: B.count,
            tone: B.key === "web" ? "pine" : B.key === "email" ? "tomato" : B.key === "slack" ? "butter" : "ink"
          }))} center={<a.Fragment><b>{v.length}</b><span>new customers</span></a.Fragment>} /><ul className="g-src__legend">{R.map(B => {
              var re;
              return <li key={B.key}><button type="button" className="g-src__item" aria-pressed={B.key === ((re = R[0]) == null ? undefined : re.key)} onClick={() => r.toast(`${B.label}: ${B.count} customers`)}><i className={`g-key g-key--${B.key}`} /><span>{B.label}</span><b className="num">{B.count}</b><span className="num g-src__pct">{st(B.share)}</span></button></li>;
            })}</ul></div>}</De><De id="g-new" className="g-new" title="New customers per month" focusable={true}><p className="g-fig"><b className="num">{Ae(W)}</b><span className="card__sub">joined in the last {c} months</span></p><Jm ariaLabel="New customers per month" columns={y.map(({
          start: B
        }) => Va(B))} series={[{
          key: "n",
          label: "New customers",
          tone: "ink",
          values: W
        }]} format={B => `${Math.round(B)}`} height={190} /></De><De id="g-win" className="g-win" title="Win rate trend" focusable={true}><p className="g-fig"><b className="num">{st(I[I.length - 1] ?? 0)}</b><span className="card__sub">closed deals this month · {G} of {c} months at or above 50%</span></p><_Component12 ariaLabel="Win rate trend" height={210} format={B => st(B)} xLabels={y.map(({
          start: B
        }) => Va(B))} series={[{
          key: "rate",
          label: "Win rate",
          tone: "pine",
          values: I,
          area: true
        }]} /><p className="card__sub" style={{
          marginTop: 8
        }}><_Component10 tone="plain">Monthly</_Component10> Rate is won ÷ closed. Months with no closed deals read 0%.</p></De><De id="g-top" className="g-top" title="Top customers by revenue won" focusable={true}>{X.length === 0 ? <_Component13 icon={<Ap />} title="No wins in this period" text="Widen the report range." /> : <div className="table-wrap"><table className="table g-table"><thead><tr><th scope="col">Customer</th><th scope="col">Industry</th><th scope="col" className="num">Deals</th><th scope="col" className="r">Won</th></tr></thead><tbody>{X.map(B => <tr key={B.customer.id}><td><button type="button" className="cell-person" onClick={() => i(`/customers/${B.customer.id}`)}><St name={B.customer.name} size="sm" /><span><b>{B.customer.company}</b><small>{B.customer.name}</small></span></button></td><td>{B.customer.industry}</td><td className="num">{B.deals}</td><td className="num r">{Ie(B.won)}</td></tr>)}</tbody></table></div>}</De><De id="g-rep" className="g-rep" title="Rep performance" focusable={true}><p className="card__sub">Won revenue, open pipeline and close rate in this period.</p><div className="g-rep__body">{z.map(B => <div className="g-rep__row" key={B.member.id}><St name={B.member.name} size="md" /><div className="g-rep__who"><b>{B.member.name}</b><small>{Ie(B.won)} won · {Xe(B.open)} open · {B.deals} {B.deals === 1 ? "closed deal" : "closed deals"}</small></div><span className="spill spill--plain"><i />{st(B.winRate)} close rate</span></div>)}</div><_Component15 onOpen={() => r.toast("Sales CRM · built to the reference brief")} /><p className="card__sub" style={{
          marginTop: 10
        }}><Ue label="Growth options" size="sm" onClick={() => r.toast(`Period: last ${c} months`)}><An /></Ue> Definitions: won = deals closed-won in the window; open = deals still in Qualification, Proposal, Negotiation or Closing.</p></De></div></section>;
}
function _Component40() {
  const {
    data: n,
    repo: e
  } = jn();
  const r = rr();
  const i = on();
  const [l, c] = li();
  const d = Date.now();
  const [h, m] = k.useState("");
  const [g, w] = k.useState("all");
  const [y, _] = k.useState(null);
  const [v, j] = k.useState(false);
  const [b, C] = k.useState(null);
  k.useEffect(() => {
    if (l.get("new") === "1") {
      j(true);
      c({}, {
        replace: true
      });
    }
  }, [l, c]);
  const O = k.useMemo(() => {
    const I = h.trim().toLowerCase();
    return n.projects.map(z => ({
      project: z,
      progress: gp(z)
    })).filter(({
      project: z
    }) => {
      if (g !== "all" && z.status !== g) {
        return false;
      }
      if (!I) {
        return true;
      }
      const X = n.customers.find(le => le.id === z.customerId);
      return [z.name, (X == null ? undefined : X.company) ?? ""].some(le => le.toLowerCase().includes(I));
    }).sort((z, X) => X.progress.pct - z.progress.pct);
  }, [n.projects, n.customers, h, g]);
  const L = n.projects.filter(I => I.status !== "done" && I.dueAt < d).length;
  k.useEffect(() => {
    r.registerExport(() => {
      const I = O.map(({
        project: z,
        progress: X
      }) => {
        var G;
        const le = n.customers.find(B => B.id === z.customerId);
        return [z.name, (le == null ? undefined : le.company) ?? "", Vs[z.status], ((G = n.members.find(B => B.id === z.owner)) == null ? undefined : G.name) ?? "", `${X.done}/${X.total}`, Math.round(X.pct * 100), new Date(z.dueAt).toISOString().slice(0, 10), X.next];
      });
      Ur(`sales-crm-projects-${Fr()}.csv`, Mr(["project", "customer", "status", "owner", "steps_done", "percent", "due", "next_step"], I));
      e.logAudit({
        actorId: n.me.id,
        action: "export",
        entityType: "projects",
        entityId: "projects",
        metadata: {
          rows: I.length,
          status: g
        }
      });
      r.toast(`${I.length} projects exported`);
    }, "Projects");
    return () => r.registerExport(null, "Projects");
  }, [O, g]);
  const R = [{
    key: "active",
    icon: <Za />,
    value: <b className="num"><Je value={n.projects.filter(I => I.status === "active" || I.status === "review").length} /></b>,
    label: "In progress or review"
  }, {
    key: "done",
    icon: <Xa />,
    value: <b className="num"><Je value={n.projects.filter(I => I.status === "done").length} /></b>,
    label: "Completed projects"
  }, {
    key: "late",
    icon: <Pn />,
    value: <b className="num"><Je value={L} /></b>,
    label: "Past due, unfinished"
  }];
  const W = y ? n.projects.find(I => I.id === y) ?? null : null;
  return <section className="view" data-view="projects"><_Component11 title="Onboarding Projects" stats={R} /><div className="toolbar"><label className="search"><_Component /><input type="search" placeholder="Search projects…" aria-label="Search projects" value={h} onChange={I => m(I.target.value)} /></label><div className="cx-chips" role="group" aria-label="Status"><Ft pressed={g === "all"} onClick={() => w("all")}>All</Ft>{$u.map(I => <Ft pressed={g === I} onClick={() => w(I)} key={I}>{Vs[I]}</Ft>)}</div><span className="toolbar__spacer" /><Se onClick={() => {
        C(null);
        j(true);
      }}><Ut /> New project</Se></div><div className="pj-grid" role="list" aria-label="Projects">{O.map(({
        project: I,
        progress: z
      }) => {
        const X = n.customers.find(re => re.id === I.customerId);
        const le = n.members.find(re => re.id === I.owner);
        const G = I.team.map(re => n.members.find(be => be.id === re)).filter(re => !!re);
        const B = I.status !== "done" && I.dueAt < d;
        return <div className="pj-cell" role="listitem" data-key={I.id} key={I.id}><article className="card pj-card" data-status={I.status}><header className="pj-card__head"><St name={(le == null ? undefined : le.name) ?? "Unassigned"} size="md" /><span className="pj-card__who"><b>{(X == null ? undefined : X.company) ?? "Unassigned"}</b><small>{(le == null ? undefined : le.name) ?? "Unassigned"}</small></span><Zo tone={I.status === "done" ? "done" : I.status === "review" ? "review" : I.status === "active" ? "active" : "draft"}>{Vs[I.status]}</Zo></header><h3 className="pj-card__name"><button type="button" className="pj-card__link" onClick={() => _(I.id)}>{I.name}</button></h3><div className="pj-card__mid"><span className={`pj-ring pj-tone--${z.tone}`} role="img" aria-label={`${st(z.pct)} complete`} style={{
                "--circ": "100"
              }}><svg viewBox="0 0 64 64" aria-hidden="true"><circle className="pj-ring__track" cx="32" cy="32" r="27" /><circle className="pj-ring__arc" cx="32" cy="32" r="27" pathLength={100} strokeDasharray="100 100" strokeDashoffset={100 - z.pct * 100} /></svg><b className="pj-ring__pct tnum" aria-hidden="true">{st(z.pct)}</b></span><div className="pj-card__prog"><b className="tnum">{z.done} of {z.total} steps</b><small>Next: {z.next}</small><Fo value={z.pct} tone={z.tone === "good" || z.tone === "pine" ? "pine" : z.tone === "butter" ? "butter" : "ink"} label={`${I.name} progress`} /></div></div><footer className="pj-card__foot"><span className="pj-due"><Xa />{B ? `Was due ${mt(I.dueAt)}` : `Due ${mt(I.dueAt)}`}</span><Pp size="xs" people={G.map(re => ({
                name: re.name
              }))} /></footer></article></div>;
      })}</div>{O.length === 0 && <De><_Component13 icon={<Za />} title="No projects here" text="Try another status or clear the search." action={<Se variant="ghost" size="sm" onClick={() => {
        w("all");
        m("");
      }}>Show all projects</Se>} /></De>}<_Component31 project={W} onClose={() => _(null)} onToggleStep={(I, z) => {
      e.toggleProjectStep(I.id, z);
    }} onStatus={(I, z) => {
      e.updateProject(I.id, {
        status: z
      });
      r.toast(`${I.name} → ${Vs[z]}`);
    }} onDelete={I => {
      e.updateProject(I.id, {
        status: "done"
      });
      _(null);
      r.toast(`${I.name} closed out`);
    }} memberName={I => {
      var z;
      return ((z = n.members.find(X => X.id === I)) == null ? undefined : z.name) ?? "—";
    }} customerName={I => {
      var z;
      return ((z = n.customers.find(X => X.id === I)) == null ? undefined : z.company) ?? "—";
    }} /><_Component32 open={v} customers={n.customers.filter(I => !I.archivedAt)} members={n.members} error={b} onClose={() => j(false)} onSave={I => {
      if (!I.name.trim()) {
        C("Give the project a name.");
        return;
      }
      if (!I.customerId) {
        C("Projects belong to a customer.");
        return;
      }
      const z = e.createProject(I);
      r.toast(`${z.name} created`);
      j(false);
      C(null);
    }} /><p className="card__sub" style={{
      marginTop: 14
    }}>{n.projects.length} projects · {L} past their date · <button type="button" style={{
        textDecoration: "underline"
      }} onClick={() => i("/customers")}>link a project to a customer from their profile</button></p></section>;
}
function _Component31({
  project: n,
  onClose: e,
  onToggleStep: r,
  onStatus: i,
  onDelete: l,
  memberName: c,
  customerName: d
}) {
  const h = n ? gp(n) : null;
  return <Ga open={!!n} onClose={e} title={(n == null ? undefined : n.name) ?? "Project"}>{n && h && <a.Fragment><div className={`pjd-head pj-tone--${h.tone}`} style={{
        background: "var(--well)",
        padding: 16,
        borderRadius: 20,
        display: "grid",
        gap: 6
      }}><span className="card__sub">{d(n.customerId)} · owner {c(n.owner)}</span><b style={{
          fontSize: 22
        }}>{h.done} of {h.total} steps done</b><span className="card__sub">Due {$r(n.dueAt)} · next: {h.next}</span><Fo value={h.pct} tone="pine" label="Project progress" /></div><div className="pjd-check"><b style={{
          fontSize: 13
        }}>Steps</b><div className="pjd-list">{n.steps.map((m, g) => <button type="button" className={`pj-step ${m.done ? "is-done" : ""}`} aria-pressed={m.done} onClick={() => r(n, g)} key={m.label}><input className="check" type="checkbox" checked={m.done} readOnly={true} tabIndex={-1} /><span>{m.label}</span></button>)}</div></div><div style={{
        display: "grid",
        gap: 8
      }}><b style={{
          fontSize: 13
        }}>Move status</b><div style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap"
        }}>{$u.map(m => <Se size="sm" variant={n.status === m ? "ink" : "ghost"} onClick={() => i(n, m)} key={m}>{Vs[m]}</Se>)}</div></div><div style={{
        display: "flex",
        gap: 10
      }}><Se variant="ghost" onClick={e}>Close</Se><Se variant="danger" onClick={() => l(n)}><_Component16 /> Close out project</Se></div><p className="card__sub">Every step change is stamped with the actor and time in the audit log (FR-062).</p></a.Fragment>}</Ga>;
}
function _Component32({
  open: n,
  customers: e,
  members: r,
  error: i,
  onClose: l,
  onSave: c
}) {
  var L;
  const [d, h] = k.useState("");
  const [m, g] = k.useState("");
  const [w, y] = k.useState(((L = r[0]) == null ? undefined : L.id) ?? "");
  const [_, v] = k.useState("planning");
  const [j, b] = k.useState(new Date(Date.now() + 2592000000).toISOString().slice(0, 10));
  const [C, O] = k.useState(0);
  k.useEffect(() => {
    if (n) {
      h("");
      v("planning");
    }
  }, [n]);
  return <_Component17 open={n} onClose={l} title="New project" subtitle="Pick a step template — the checklist keeps onboarding consistent across the team." error={i} footer={<a.Fragment><Se variant="ghost" onClick={l}>Cancel</Se><Se onClick={() => c({
      name: d,
      customerId: m,
      status: _,
      owner: w,
      dueAt: new Date(`${j}T12:00:00`).getTime(),
      steps: Kf[C]
    })}>Create project</Se></a.Fragment>}><Ne label="Project name" wide={true} htmlFor="pj-name"><_Component1 id="pj-name" value={d} placeholder="Platform onboarding" onChange={R => h(R.target.value)} /></Ne><Ne label="Customer" htmlFor="pj-customer"><select id="pj-customer" value={m} onChange={R => g(R.target.value)}><option value="">Select a customer…</option>{e.map(R => <option value={R.id} key={R.id}>{R.company} — {R.name}</option>)}</select></Ne><Ne label="Owner" htmlFor="pj-owner"><select id="pj-owner" value={w} onChange={R => y(R.target.value)}>{r.map(R => <option value={R.id} key={R.id}>{R.name}</option>)}</select></Ne><Ne label="Status" htmlFor="pj-status"><select id="pj-status" value={_} onChange={R => v(R.target.value)}>{$u.map(R => <option value={R} key={R}>{Vs[R]}</option>)}</select></Ne><Ne label="Due" htmlFor="pj-due"><_Component1 id="pj-due" type="date" value={j} onChange={R => b(R.target.value)} /></Ne><Ne label="Step template" htmlFor="pj-steps"><select id="pj-steps" value={String(C)} onChange={R => O(Number(R.target.value))}>{Kf.map((R, W) => <option value={String(W)} key={R.join("|")}>{R.join(" · ")}</option>)}</select></Ne><p className="card__sub" style={{
      gridColumn: "1 / -1"
    }}><Ue label="Hint" size="sm" onClick={() => l()}><Ut style={{
          transform: "rotate(45deg)"
        }} /></Ue> Steps can be changed later from the project drawer.</p></_Component17>;
}
const wk = [{
  key: "profile",
  label: "Profile",
  icon: <Ka />
}, {
  key: "team",
  label: "Team",
  icon: <_Component22 />
}, {
  key: "notifications",
  label: "Notifications",
  icon: <Mu />
}, {
  key: "appearance",
  label: "Appearance",
  icon: <Mo />
}, {
  key: "data",
  label: "Data",
  icon: <Ip />
}];
const Zm = "rapport:alerts";
function _Component41() {
  var K;
  const {
    data: n,
    repo: e
  } = jn();
  const r = rr();
  const i = on();
  const l = Date.now();
  const [c, d] = k.useState("profile");
  const [h, m] = k.useState("light");
  const [g, w] = k.useState({
    overdue: true,
    closeSoon: true,
    digest: true,
    mentions: false,
    weekly: false
  });
  const [y, _] = k.useState({
    name: n.me.name,
    email: n.me.email,
    role: n.me.role,
    quota: n.me.quota
  });
  const [v, j] = k.useState(false);
  const [b, C] = k.useState(null);
  const [O, L] = k.useState(null);
  const R = k.useRef(y);
  k.useEffect(() => {
    try {
      const D = window.localStorage.getItem("rapport:theme");
      if (D) {
        m(JSON.parse(D));
      }
      const H = window.localStorage.getItem(Zm);
      if (H) {
        w(JSON.parse(H));
      }
    } catch {}
  }, []);
  k.useEffect(() => {
    _({
      name: n.me.name,
      email: n.me.email,
      role: n.me.role,
      quota: n.me.quota
    });
    R.current = {
      name: n.me.name,
      email: n.me.email,
      role: n.me.role,
      quota: n.me.quota
    };
  }, [n.me]);
  const W = k.useMemo(() => an(n.deals).filter(D => D.owner === n.me.id), [n.deals, n.me.id]);
  const I = Ae(W.map(D => D.amount));
  const z = Kt(l, 1)[0];
  const X = Tn(n.deals.filter(D => D.owner === n.me.id), z.start, z.end);
  const le = Tn(n.deals.filter(D => D.owner === n.me.id), new Date(new Date(l).getFullYear(), Math.floor(new Date(l).getMonth() / 3) * 3, 1).getTime(), l);
  const G = [...W].sort((D, H) => D.closeAt - H.closeAt)[0];
  const B = n.tasks.filter(D => D.who === n.me.id && !D.done && D.at <= l + 604800000);
  const re = n.customers.filter(D => D.owner === n.me.id);
  const be = Object.values(g).filter(Boolean).length;
  const q = Math.round(JSON.stringify({
    customers: n.customers,
    deals: n.deals
  }).length / 1024);
  const ge = [{
    key: "members",
    icon: <_Component22 />,
    value: <b className="num"><Je value={n.members.length} /></b>,
    label: "Team members"
  }, {
    key: "alerts",
    icon: <Mu />,
    value: <b className="num"><Je value={be} /></b>,
    label: "Alerts switched on"
  }, {
    key: "kb",
    icon: <_Component5 />,
    value: <b className="num"><Je value={q} /></b>,
    label: "KB saved in this browser"
  }];
  const _e = () => {
    if (!y.name.trim()) {
      L("Your name cannot be empty.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(y.email.trim())) {
      L("That email address does not look right.");
      return;
    }
    if (!Number.isFinite(y.quota) || y.quota < 0) {
      L("The quota must be zero or more.");
      return;
    }
    L(null);
    R.current = y;
    j(false);
    C(`Saved ${new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    })}`);
    r.toast("Profile saved");
    e.logAudit({
      actorId: n.me.id,
      action: "update",
      entityType: "profiles",
      entityId: n.me.id,
      metadata: {
        fields: Object.keys(y)
      }
    });
  };
  return <section className="view set" data-view="settings"><_Component11 title="Workspace Settings" stats={ge} /><div className="set-grid"><De className="set-me" label="Your profile"><div className="set-me__face"><St name={n.me.name} size="xl" /><span className="set-me__dot" title="Online" aria-label="Online" role="img" /></div><h2 className="set-me__name">{y.name}</h2><p className="set-me__role">{y.role}</p><p className="set-me__mail"><_Component22 /> {y.email}</p><div className="set-me__quota"><div className="set-me__qhead"><span>Q4 quota</span><b className="tnum">{st(y.quota ? le / (y.quota / 4) : 0)}</b></div><Fo value={y.quota ? le / (y.quota / 4) : 0} tone="pine" label="Quarter quota attainment" /><p className="card__sub"><b className="tnum">{Ie(X)}</b> won in {mt(z.start)}–{mt(z.end)}</p></div><dl className="set-me__facts"><div><dt>Open deals</dt><dd className="tnum">{W.length}</dd></div><div><dt>Customers</dt><dd className="tnum">{re.length}</dd></div><div><dt>Due this week</dt><dd className="tnum">{B.length}</dd></div></dl>{G && <button type="button" className="set-me__next" onClick={() => i(`/pipeline?deal=${G.id}`)}><span className="set-me__tone tone--pine" aria-hidden="true" /><span><small>Next close</small><b>{G.title}</b><small>{(K = n.customers.find(D => D.id === G.customerId)) == null ? undefined : K.company} · {Ie(G.amount)}</small></span><Lr style={{
            transform: "rotate(90deg)"
          }} /></button>}<p className="card__sub" style={{
          marginTop: 8
        }}>Pipeline owned: {Xe(I)}</p></De><De className="set-main" label="Settings"><div className="set-navwrap"><div className="set-nav" role="tablist" aria-label="Settings sections">{wk.map(D => <button type="button" role="tab" className="set-tab" id={`set-tab-${D.key}`} data-sec={D.key} aria-selected={c === D.key} aria-controls="set-panel" tabIndex={c === D.key ? 0 : -1} onClick={() => d(D.key)} key={D.key}>{D.icon}<span>{D.label}</span></button>)}</div></div><div className="set-panel" id="set-panel" role="tabpanel" aria-labelledby={`set-tab-${c}`} tabIndex={0}>{c === "profile" && <form className="set-panel" onSubmit={D => {
            D.preventDefault();
            _e();
          }}><header className="set-sec"><h2>Profile</h2><p className="card__sub">How you appear to the team and on everything you send.</p></header><div className="set-fields"><Ne label="Full name" htmlFor="set-name"><_Component1 id="set-name" name="name" value={y.name} autoComplete="name" required={true} onChange={D => {
                  _({
                    ...y,
                    name: D.target.value
                  });
                  j(true);
                }} /></Ne><Ne label="Email" htmlFor="set-email"><_Component1 id="set-email" name="email" type="email" value={y.email} autoComplete="email" required={true} onChange={D => {
                  _({
                    ...y,
                    email: D.target.value
                  });
                  j(true);
                }} /></Ne><Ne label="Role" htmlFor="set-role"><select id="set-role" name="role" value={y.role} onChange={D => {
                  _({
                    ...y,
                    role: D.target.value
                  });
                  j(true);
                }}>{["Account Executive", "Sales Engineer", "Customer Success", "Sales Development Rep", "Head of Sales"].map(D => <option value={D} key={D}>{D}</option>)}</select></Ne><Ne label="Annual quota (USD)" htmlFor="set-quota" hint="A quarter of it is your quota ring on the overview."><_Component1 id="set-quota" name="quota" type="number" min={0} step={1000} inputMode="numeric" value={y.quota} required={true} onChange={D => {
                  _({
                    ...y,
                    quota: Number(D.target.value)
                  });
                  j(true);
                }} /></Ne></div><p className="mform__err" role="alert">{O ?? ""}</p><footer className="set-foot"><span className="set-dirty" aria-live="polite">{v ? "Unsaved changes" : b ?? ""}</span><Se variant="ghost" type="button" disabled={!v} onClick={() => {
                _(R.current);
                j(false);
                L(null);
              }}>Discard</Se><Se type="submit" disabled={!v}>Save changes</Se></footer></form>}{c === "team" && <div className="set-list"><header className="set-sec"><h2>Team</h2><p className="card__sub">Roles are read-only in this build; role changes need an admin flow (FR-081).</p></header>{n.members.map(D => {
              const H = Ae(n.deals.filter(se => se.owner === D.id && se.stage === "won").map(se => se.amount));
              return <div className="set-member" key={D.id}><St name={D.name} size="lg" /><div className="set-member__body"><b>{D.name}</b><small>{D.role} · {D.email}</small></div><div className="set-member__quota"><span className="card__sub">{Xe(H)} won · {Xe(D.quota)} annual quota</span><Fo value={D.quota ? H / D.quota : 0} tone="pine" label={`${D.name} attainment`} /></div><_Component10 tone={D.id === n.me.id ? "pine" : "plain"}>{D.id === n.me.id ? "You" : "Member"}</_Component10></div>;
            })}</div>}{c === "notifications" && <div className="set-list"><header className="set-sec"><h2>Notifications</h2><p className="card__sub">Alerts are kept in this browser. Nothing is emailed until a provider is configured.</p></header>{[["overdue", "Overdue invoices", "Tell me when an invoice passes its due date."], ["closeSoon", "Deals closing soon", "A nudge three days before the expected close."], ["digest", "Weekly digest", "A Monday summary of pipeline and activity."], ["mentions", "Mentions and notes", "When a teammate mentions me in a note."], ["weekly", "Project milestones", "When a step is finished or a project slips."]].map(([D, H, se]) => <div className="set-toggle" key={D}><span><b>{H}</b><small>{se}</small></span><button type="button" className="switch" role="switch" aria-checked={g[D] ?? false} aria-label={H} onClick={() => {
                const te = {
                  ...g,
                  [D]: !g[D]
                };
                w(te);
                try {
                  window.localStorage.setItem(Zm, JSON.stringify(te));
                } catch {}
                r.toast(`${H} ${te[D] ? "on" : "off"}`);
              }} /></div>)}</div>}{c === "appearance" && <div className="set-list"><header className="set-sec"><h2>Appearance</h2><p className="card__sub">The palette is fixed to the measured reference. Theme choice is per user and follows you between sessions (FR-005).</p></header><div className="set-swatches">{[["light", "Light", "linear-gradient(135deg,#ebe8e1,#fbf8f2)"], ["dark", "Dark", "linear-gradient(135deg,#111412,#242927)"], ["system", "Match system", "linear-gradient(135deg,#ebe8e1 0 50%,#111412 50% 100%)"]].map(([D, H, se]) => <button type="button" className="set-swatch" aria-pressed={h === D} onClick={() => {
                m(D);
                Du(D);
                e.setTheme(D);
                r.toast(`${H} theme selected`);
              }} key={D}><i style={{
                  background: se
                }} aria-hidden="true" />{H}</button>)}</div><p className="card__sub" style={{
              marginTop: 12
            }}>{h === "dark" ? <_Component6 /> : <Mo />} Dark mode swaps the glass surfaces for translucent overlays; accents keep their measured values.</p></div>}{c === "data" && <div className="set-list"><header className="set-sec"><h2>Data</h2><p className="card__sub">Local demo workspace — Supabase is not configured, so records live in this browser.</p></header><dl className="keys"><div><dt>Customers</dt><dd className="num">{n.customers.length}</dd></div><div><dt>Deals</dt><dd className="num">{n.deals.length}</dd></div><div><dt>Activities</dt><dd className="num">{n.tasks.length}</dd></div><div><dt>Invoices</dt><dd className="num">{n.invoices.length}</dd></div><div><dt>Projects</dt><dd className="num">{n.projects.length}</dd></div><div><dt>Rows in the browser store</dt><dd className="num">{q} KB</dd></div></dl><div style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginTop: 12
            }}><Se variant="ghost" onClick={r.exportCurrent}><Lr /> Export customers</Se><Se variant="ghost" onClick={() => {
                new mp().reset();
                window.localStorage.removeItem("rapport:workspace:v1");
                r.toast("Demo data restored to the reference baseline");
                window.location.reload();
              }}><Cw /> Restore demo data</Se><Se variant="danger" onClick={() => {
                if (window.confirm("Clear every local record? This cannot be undone.")) {
                  window.localStorage.removeItem("rapport:workspace:v1");
                  window.location.reload();
                }
              }}><_Component16 /> Clear local data</Se></div><p className="card__sub" style={{
              marginTop: 14
            }}><Zo tone="due">Audit</Zo> create, update, archive, stage change and export events are written to <code>audit_logs</code> with the actor, entity and timestamp — never the record contents.</p><_Component13 icon={<Pn />} title="No destructive shortcuts" text="Retention and permanent deletion follow the organisation's policy and are not exposed as a one-click action." /><p className="card__sub">Last change seen: {n.activity[0] ? Lu(n.activity[0].at, l) : "—"}</p></div>}</div></De></div><p className="card__sub" style={{
      marginTop: 14
    }}><Ft onClick={() => i("/overview")}>Back to overview</Ft> <Ft onClick={() => r.openSearch("")}>Search the workspace</Ft></p></section>;
}
function _k() {
  return <section className="view" data-view="overview"><De label="Not found"><h2 className="card__title">That page is not part of Sales CRM</h2><p className="card__sub" style={{
        marginTop: 6
      }}>Use the dock on the left, or the tabs at the top, to get back to a module.</p></De></section>;
}
function _Component44() {
  return <_Component43><_Component42><Wf><Dt path="/signin" element={<Vj />} /><Dt path="/*" element={<Hj><Oy><Tw><Wf><Dt path="/" element={<Pu to="/overview" replace={true} />} /><Dt path="/overview" element={<_Component33 />} /><Dt path="/pipeline" element={<_Component34 />} /><Dt path="/customers" element={<_Component35 />} /><Dt path="/customers/:id" element={<_Component36 />} /><Dt path="/schedule" element={<_Component37 />} /><Dt path="/finance" element={<_Component38 />} /><Dt path="/growth" element={<_Component39 />} /><Dt path="/projects" element={<_Component40 />} /><Dt path="/settings" element={<_Component41 />} /><Dt path="*" element={<_k />} /></Wf></Tw></Oy></Hj>} /></Wf></_Component42></_Component43>;
}
const hg = document.getElementById("root");
if (!hg) {
  throw new Error("Root element missing from index.html");
}
xv.createRoot(hg).render(
  <k.StrictMode>
    <QueryClientProvider client={queryClient}>
      <_Component44 />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  </k.StrictMode>
);