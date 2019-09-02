!(function(r) {
  if (typeof exports === 'object' && typeof module !== 'undefined')
    module.exports = r();
  else if (typeof define === 'function' && define.amd) define([], r);
  else {
    let e;
    (e =
      typeof window !== 'undefined'
        ? window
        : typeof global !== 'undefined'
        ? global
        : typeof self !== 'undefined'
        ? self
        : this),
      (e.uuidv4 = r());
  }
})(function() {
  return (function r(e, n, t) {
    function o(f, u) {
      if (!n[f]) {
        if (!e[f]) {
          const a = typeof require === 'function' && require;
          if (!u && a) return a(f, !0);
          if (i) return i(f, !0);
          const d = new Error(`Cannot find module '${f}'`);
          throw ((d.code = 'MODULE_NOT_FOUND'), d);
        }
        const p = (n[f] = { exports: {} });
        e[f][0].call(
          p.exports,
          function(r) {
            const n = e[f][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[f].exports;
    }
    for (
      var i = typeof require === 'function' && require, f = 0;
      f < t.length;
      f++
    )
      o(t[f]);
    return o;
  })(
    {
      1: [
        function(r, e, n) {
          function t(r, e) {
            let n = e || 0;
            const t = o;
            return `${t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]]}-${
              t[r[n++]]
            }${t[r[n++]]}-${t[r[n++]]}${t[r[n++]]}-${t[r[n++]]}${t[r[n++]]}-${
              t[r[n++]]
            }${t[r[n++]]}${t[r[n++]]}${t[r[n++]]}${t[r[n++]]}${t[r[n++]]}`;
          }
          for (var o = [], i = 0; i < 256; ++i)
            o[i] = (i + 256).toString(16).substr(1);
          e.exports = t;
        },
        {},
      ],
      2: [
        function(r, e, n) {
          const t =
            (typeof crypto !== 'undefined' &&
              crypto.getRandomValues.bind(crypto)) ||
            (typeof msCrypto !== 'undefined' &&
              msCrypto.getRandomValues.bind(msCrypto));
          if (t) {
            const o = new Uint8Array(16);
            e.exports = function() {
              return t(o), o;
            };
          } else {
            const i = new Array(16);
            e.exports = function() {
              for (var r, e = 0; e < 16; e++)
                (3 & e) === 0 && (r = 4294967296 * Math.random()),
                  (i[e] = (r >>> ((3 & e) << 3)) & 255);
              return i;
            };
          }
        },
        {},
      ],
      3: [
        function(r, e, n) {
          function t(r, e, n) {
            const t = (e && n) || 0;
            typeof r === 'string' &&
              ((e = r === 'binary' ? new Array(16) : null), (r = null)),
              (r = r || {});
            const f = r.random || (r.rng || o)();
            if (((f[6] = (15 & f[6]) | 64), (f[8] = (63 & f[8]) | 128), e))
              for (let u = 0; u < 16; ++u) e[t + u] = f[u];
            return e || i(f);
          }
          var o = r('./lib/rng');
          var i = r('./lib/bytesToUuid');
          e.exports = t;
        },
        { './lib/bytesToUuid': 1, './lib/rng': 2 },
      ],
    },
    {},
    [3]
  )(3);
});
