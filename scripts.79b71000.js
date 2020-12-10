parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    il2D: [
      function (require, module, exports) {
        "use strict";
        function e(e, r, t) {
          void 0 === t && (t = {});
          var o = { type: "Feature" };
          return (
            (0 === t.id || t.id) && (o.id = t.id),
            t.bbox && (o.bbox = t.bbox),
            (o.properties = r || {}),
            (o.geometry = e),
            o
          );
        }
        function r(e, r, o) {
          switch ((void 0 === o && (o = {}), e)) {
            case "Point":
              return t(r).geometry;
            case "LineString":
              return s(r).geometry;
            case "Polygon":
              return n(r).geometry;
            case "MultiPoint":
              return m(r).geometry;
            case "MultiLineString":
              return d(r).geometry;
            case "MultiPolygon":
              return c(r).geometry;
            default:
              throw new Error(e + " is invalid");
          }
        }
        function t(r, t, o) {
          return (
            void 0 === o && (o = {}), e({ type: "Point", coordinates: r }, t, o)
          );
        }
        function o(e, r, o) {
          return (
            void 0 === o && (o = {}),
            u(
              e.map(function (e) {
                return t(e, r);
              }),
              o
            )
          );
        }
        function n(r, t, o) {
          void 0 === o && (o = {});
          for (var n = 0, i = r; n < i.length; n++) {
            var s = i[n];
            if (s.length < 4)
              throw new Error(
                "Each LinearRing of a Polygon must have 4 or more Positions."
              );
            for (var a = 0; a < s[s.length - 1].length; a++)
              if (s[s.length - 1][a] !== s[0][a])
                throw new Error("First and last Position are not equivalent.");
          }
          return e({ type: "Polygon", coordinates: r }, t, o);
        }
        function i(e, r, t) {
          return (
            void 0 === t && (t = {}),
            u(
              e.map(function (e) {
                return n(e, r);
              }),
              t
            )
          );
        }
        function s(r, t, o) {
          if ((void 0 === o && (o = {}), r.length < 2))
            throw new Error(
              "coordinates must be an array of two or more positions"
            );
          return e({ type: "LineString", coordinates: r }, t, o);
        }
        function a(e, r, t) {
          return (
            void 0 === t && (t = {}),
            u(
              e.map(function (e) {
                return s(e, r);
              }),
              t
            )
          );
        }
        function u(e, r) {
          void 0 === r && (r = {});
          var t = { type: "FeatureCollection" };
          return (
            r.id && (t.id = r.id),
            r.bbox && (t.bbox = r.bbox),
            (t.features = e),
            t
          );
        }
        function d(r, t, o) {
          return (
            void 0 === o && (o = {}),
            e({ type: "MultiLineString", coordinates: r }, t, o)
          );
        }
        function m(r, t, o) {
          return (
            void 0 === o && (o = {}),
            e({ type: "MultiPoint", coordinates: r }, t, o)
          );
        }
        function c(r, t, o) {
          return (
            void 0 === o && (o = {}),
            e({ type: "MultiPolygon", coordinates: r }, t, o)
          );
        }
        function l(r, t, o) {
          return (
            void 0 === o && (o = {}),
            e({ type: "GeometryCollection", geometries: r }, t, o)
          );
        }
        function h(e, r) {
          if ((void 0 === r && (r = 0), r && !(r >= 0)))
            throw new Error("precision must be a positive number");
          var t = Math.pow(10, r || 0);
          return Math.round(e * t) / t;
        }
        function p(e, r) {
          void 0 === r && (r = "kilometers");
          var t = exports.factors[r];
          if (!t) throw new Error(r + " units is invalid");
          return e * t;
        }
        function f(e, r) {
          void 0 === r && (r = "kilometers");
          var t = exports.factors[r];
          if (!t) throw new Error(r + " units is invalid");
          return e / t;
        }
        function x(e, r) {
          return w(f(e, r));
        }
        function g(e) {
          var r = e % 360;
          return r < 0 && (r += 360), r;
        }
        function w(e) {
          return (180 * (e % (2 * Math.PI))) / Math.PI;
        }
        function b(e) {
          return ((e % 360) * Math.PI) / 180;
        }
        function v(e, r, t) {
          if (
            (void 0 === r && (r = "kilometers"),
            void 0 === t && (t = "kilometers"),
            !(e >= 0))
          )
            throw new Error("length must be a positive number");
          return p(f(e, r), t);
        }
        function y(e, r, t) {
          if (
            (void 0 === r && (r = "meters"),
            void 0 === t && (t = "kilometers"),
            !(e >= 0))
          )
            throw new Error("area must be a positive number");
          var o = exports.areaFactors[r];
          if (!o) throw new Error("invalid original units");
          var n = exports.areaFactors[t];
          if (!n) throw new Error("invalid final units");
          return (e / o) * n;
        }
        function E(e) {
          return (
            !isNaN(e) && null !== e && !Array.isArray(e) && !/^\s*$/.test(e)
          );
        }
        function R(e) {
          return !!e && e.constructor === Object;
        }
        function P(e) {
          if (!e) throw new Error("bbox is required");
          if (!Array.isArray(e)) throw new Error("bbox must be an Array");
          if (4 !== e.length && 6 !== e.length)
            throw new Error("bbox must be an Array of 4 or 6 numbers");
          e.forEach(function (e) {
            if (!E(e)) throw new Error("bbox must only contain numbers");
          });
        }
        function T(e) {
          if (!e) throw new Error("id is required");
          if (-1 === ["string", "number"].indexOf(typeof e))
            throw new Error("id must be a number or a string");
        }
        function M() {
          throw new Error("method has been renamed to `radiansToDegrees`");
        }
        function k() {
          throw new Error("method has been renamed to `degreesToRadians`");
        }
        function A() {
          throw new Error("method has been renamed to `lengthToDegrees`");
        }
        function L() {
          throw new Error("method has been renamed to `lengthToRadians`");
        }
        function D() {
          throw new Error("method has been renamed to `radiansToLength`");
        }
        function F() {
          throw new Error("method has been renamed to `bearingToAzimuth`");
        }
        function S() {
          throw new Error("method has been renamed to `convertLength`");
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.earthRadius = 6371008.8),
          (exports.factors = {
            centimeters: 100 * exports.earthRadius,
            centimetres: 100 * exports.earthRadius,
            degrees: exports.earthRadius / 111325,
            feet: 3.28084 * exports.earthRadius,
            inches: 39.37 * exports.earthRadius,
            kilometers: exports.earthRadius / 1e3,
            kilometres: exports.earthRadius / 1e3,
            meters: exports.earthRadius,
            metres: exports.earthRadius,
            miles: exports.earthRadius / 1609.344,
            millimeters: 1e3 * exports.earthRadius,
            millimetres: 1e3 * exports.earthRadius,
            nauticalmiles: exports.earthRadius / 1852,
            radians: 1,
            yards: exports.earthRadius / 1.0936,
          }),
          (exports.unitsFactors = {
            centimeters: 100,
            centimetres: 100,
            degrees: 1 / 111325,
            feet: 3.28084,
            inches: 39.37,
            kilometers: 0.001,
            kilometres: 0.001,
            meters: 1,
            metres: 1,
            miles: 1 / 1609.344,
            millimeters: 1e3,
            millimetres: 1e3,
            nauticalmiles: 1 / 1852,
            radians: 1 / exports.earthRadius,
            yards: 1 / 1.0936,
          }),
          (exports.areaFactors = {
            acres: 247105e-9,
            centimeters: 1e4,
            centimetres: 1e4,
            feet: 10.763910417,
            inches: 1550.003100006,
            kilometers: 1e-6,
            kilometres: 1e-6,
            meters: 1,
            metres: 1,
            miles: 3.86e-7,
            millimeters: 1e6,
            millimetres: 1e6,
            yards: 1.195990046,
          }),
          (exports.feature = e),
          (exports.geometry = r),
          (exports.point = t),
          (exports.points = o),
          (exports.polygon = n),
          (exports.polygons = i),
          (exports.lineString = s),
          (exports.lineStrings = a),
          (exports.featureCollection = u),
          (exports.multiLineString = d),
          (exports.multiPoint = m),
          (exports.multiPolygon = c),
          (exports.geometryCollection = l),
          (exports.round = h),
          (exports.radiansToLength = p),
          (exports.lengthToRadians = f),
          (exports.lengthToDegrees = x),
          (exports.bearingToAzimuth = g),
          (exports.radiansToDegrees = w),
          (exports.degreesToRadians = b),
          (exports.convertLength = v),
          (exports.convertArea = y),
          (exports.isNumber = E),
          (exports.isObject = R),
          (exports.validateBBox = P),
          (exports.validateId = T),
          (exports.radians2degrees = M),
          (exports.degrees2radians = k),
          (exports.distanceToDegrees = A),
          (exports.distanceToRadians = L),
          (exports.radiansToDistance = D),
          (exports.bearingToAngle = F),
          (exports.convertDistance = S);
      },
      {},
    ],
    MNcG: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = require("@turf/helpers");
        function t(e, r, n) {
          if (null !== e)
            for (
              var o,
                i,
                a,
                u,
                l,
                s,
                c,
                g,
                f = 0,
                p = 0,
                h = e.type,
                y = "FeatureCollection" === h,
                d = "Feature" === h,
                v = y ? e.features.length : 1,
                P = 0;
              P < v;
              P++
            ) {
              l = (g =
                !!(c = y ? e.features[P].geometry : d ? e.geometry : e) &&
                "GeometryCollection" === c.type)
                ? c.geometries.length
                : 1;
              for (var m = 0; m < l; m++) {
                var w = 0,
                  x = 0;
                if (null !== (u = g ? c.geometries[m] : c)) {
                  s = u.coordinates;
                  var b = u.type;
                  switch (
                    ((f =
                      !n || ("Polygon" !== b && "MultiPolygon" !== b) ? 0 : 1),
                    b)
                  ) {
                    case null:
                      break;
                    case "Point":
                      if (!1 === r(s, p, P, w, x)) return !1;
                      p++, w++;
                      break;
                    case "LineString":
                    case "MultiPoint":
                      for (o = 0; o < s.length; o++) {
                        if (!1 === r(s[o], p, P, w, x)) return !1;
                        p++, "MultiPoint" === b && w++;
                      }
                      "LineString" === b && w++;
                      break;
                    case "Polygon":
                    case "MultiLineString":
                      for (o = 0; o < s.length; o++) {
                        for (i = 0; i < s[o].length - f; i++) {
                          if (!1 === r(s[o][i], p, P, w, x)) return !1;
                          p++;
                        }
                        "MultiLineString" === b && w++, "Polygon" === b && x++;
                      }
                      "Polygon" === b && w++;
                      break;
                    case "MultiPolygon":
                      for (o = 0; o < s.length; o++) {
                        for (x = 0, i = 0; i < s[o].length; i++) {
                          for (a = 0; a < s[o][i].length - f; a++) {
                            if (!1 === r(s[o][i][a], p, P, w, x)) return !1;
                            p++;
                          }
                          x++;
                        }
                        w++;
                      }
                      break;
                    case "GeometryCollection":
                      for (o = 0; o < u.geometries.length; o++)
                        if (!1 === t(u.geometries[o], r, n)) return !1;
                      break;
                    default:
                      throw new Error("Unknown Geometry Type");
                  }
                }
              }
            }
        }
        function r(e, r, n, o) {
          var i = n;
          return (
            t(
              e,
              function (e, t, o, a, u) {
                i = 0 === t && void 0 === n ? e : r(i, e, t, o, a, u);
              },
              o
            ),
            i
          );
        }
        function n(e, t) {
          var r;
          switch (e.type) {
            case "FeatureCollection":
              for (
                r = 0;
                r < e.features.length && !1 !== t(e.features[r].properties, r);
                r++
              );
              break;
            case "Feature":
              t(e.properties, 0);
          }
        }
        function o(e, t, r) {
          var o = r;
          return (
            n(e, function (e, n) {
              o = 0 === n && void 0 === r ? e : t(o, e, n);
            }),
            o
          );
        }
        function i(e, t) {
          if ("Feature" === e.type) t(e, 0);
          else if ("FeatureCollection" === e.type)
            for (
              var r = 0;
              r < e.features.length && !1 !== t(e.features[r], r);
              r++
            );
        }
        function a(e, t, r) {
          var n = r;
          return (
            i(e, function (e, o) {
              n = 0 === o && void 0 === r ? e : t(n, e, o);
            }),
            n
          );
        }
        function u(e) {
          var r = [];
          return (
            t(e, function (e) {
              r.push(e);
            }),
            r
          );
        }
        function l(e, t) {
          var r,
            n,
            o,
            i,
            a,
            u,
            l,
            s,
            c,
            g,
            f = 0,
            p = "FeatureCollection" === e.type,
            h = "Feature" === e.type,
            y = p ? e.features.length : 1;
          for (r = 0; r < y; r++) {
            for (
              u = p ? e.features[r].geometry : h ? e.geometry : e,
                s = p ? e.features[r].properties : h ? e.properties : {},
                c = p ? e.features[r].bbox : h ? e.bbox : void 0,
                g = p ? e.features[r].id : h ? e.id : void 0,
                a = (l = !!u && "GeometryCollection" === u.type)
                  ? u.geometries.length
                  : 1,
                o = 0;
              o < a;
              o++
            )
              if (null !== (i = l ? u.geometries[o] : u))
                switch (i.type) {
                  case "Point":
                  case "LineString":
                  case "MultiPoint":
                  case "Polygon":
                  case "MultiLineString":
                  case "MultiPolygon":
                    if (!1 === t(i, f, s, c, g)) return !1;
                    break;
                  case "GeometryCollection":
                    for (n = 0; n < i.geometries.length; n++)
                      if (!1 === t(i.geometries[n], f, s, c, g)) return !1;
                    break;
                  default:
                    throw new Error("Unknown Geometry Type");
                }
              else if (!1 === t(null, f, s, c, g)) return !1;
            f++;
          }
        }
        function s(e, t, r) {
          var n = r;
          return (
            l(e, function (e, o, i, a, u) {
              n = 0 === o && void 0 === r ? e : t(n, e, o, i, a, u);
            }),
            n
          );
        }
        function c(t, r) {
          l(t, function (t, n, o, i, a) {
            var u,
              l = null === t ? null : t.type;
            switch (l) {
              case null:
              case "Point":
              case "LineString":
              case "Polygon":
                return (
                  !1 !== r(e.feature(t, o, { bbox: i, id: a }), n, 0) && void 0
                );
            }
            switch (l) {
              case "MultiPoint":
                u = "Point";
                break;
              case "MultiLineString":
                u = "LineString";
                break;
              case "MultiPolygon":
                u = "Polygon";
            }
            for (var s = 0; s < t.coordinates.length; s++) {
              var c = { type: u, coordinates: t.coordinates[s] };
              if (!1 === r(e.feature(c, o), n, s)) return !1;
            }
          });
        }
        function g(e, t, r) {
          var n = r;
          return (
            c(e, function (e, o, i) {
              n = 0 === o && 0 === i && void 0 === r ? e : t(n, e, o, i);
            }),
            n
          );
        }
        function f(r, n) {
          c(r, function (r, o, i) {
            var a = 0;
            if (r.geometry) {
              var u = r.geometry.type;
              if ("Point" !== u && "MultiPoint" !== u) {
                var l,
                  s = 0,
                  c = 0,
                  g = 0;
                return (
                  !1 !==
                    t(r, function (t, u, f, p, h) {
                      if (void 0 === l || o > s || p > c || h > g)
                        return (l = t), (s = o), (c = p), (g = h), void (a = 0);
                      var y = e.lineString([l, t], r.properties);
                      if (!1 === n(y, o, i, h, a)) return !1;
                      a++, (l = t);
                    }) && void 0
                );
              }
            }
          });
        }
        function p(e, t, r) {
          var n = r,
            o = !1;
          return (
            f(e, function (e, i, a, u, l) {
              (n = !1 === o && void 0 === r ? e : t(n, e, i, a, u, l)),
                (o = !0);
            }),
            n
          );
        }
        function h(t, r) {
          if (!t) throw new Error("geojson is required");
          c(t, function (t, n, o) {
            if (null !== t.geometry) {
              var i = t.geometry.type,
                a = t.geometry.coordinates;
              switch (i) {
                case "LineString":
                  if (!1 === r(t, n, o, 0, 0)) return !1;
                  break;
                case "Polygon":
                  for (var u = 0; u < a.length; u++)
                    if (!1 === r(e.lineString(a[u], t.properties), n, o, u))
                      return !1;
              }
            }
          });
        }
        function y(e, t, r) {
          var n = r;
          return (
            h(e, function (e, o, i, a) {
              n = 0 === o && void 0 === r ? e : t(n, e, o, i, a);
            }),
            n
          );
        }
        function d(t, r) {
          if (((r = r || {}), !e.isObject(r)))
            throw new Error("options is invalid");
          var n,
            o = r.featureIndex || 0,
            i = r.multiFeatureIndex || 0,
            a = r.geometryIndex || 0,
            u = r.segmentIndex || 0,
            l = r.properties;
          switch (t.type) {
            case "FeatureCollection":
              o < 0 && (o = t.features.length + o),
                (l = l || t.features[o].properties),
                (n = t.features[o].geometry);
              break;
            case "Feature":
              (l = l || t.properties), (n = t.geometry);
              break;
            case "Point":
            case "MultiPoint":
              return null;
            case "LineString":
            case "Polygon":
            case "MultiLineString":
            case "MultiPolygon":
              n = t;
              break;
            default:
              throw new Error("geojson is invalid");
          }
          if (null === n) return null;
          var s = n.coordinates;
          switch (n.type) {
            case "Point":
            case "MultiPoint":
              return null;
            case "LineString":
              return (
                u < 0 && (u = s.length + u - 1),
                e.lineString([s[u], s[u + 1]], l, r)
              );
            case "Polygon":
              return (
                a < 0 && (a = s.length + a),
                u < 0 && (u = s[a].length + u - 1),
                e.lineString([s[a][u], s[a][u + 1]], l, r)
              );
            case "MultiLineString":
              return (
                i < 0 && (i = s.length + i),
                u < 0 && (u = s[i].length + u - 1),
                e.lineString([s[i][u], s[i][u + 1]], l, r)
              );
            case "MultiPolygon":
              return (
                i < 0 && (i = s.length + i),
                a < 0 && (a = s[i].length + a),
                u < 0 && (u = s[i][a].length - u - 1),
                e.lineString([s[i][a][u], s[i][a][u + 1]], l, r)
              );
          }
          throw new Error("geojson is invalid");
        }
        function v(t, r) {
          if (((r = r || {}), !e.isObject(r)))
            throw new Error("options is invalid");
          var n,
            o = r.featureIndex || 0,
            i = r.multiFeatureIndex || 0,
            a = r.geometryIndex || 0,
            u = r.coordIndex || 0,
            l = r.properties;
          switch (t.type) {
            case "FeatureCollection":
              o < 0 && (o = t.features.length + o),
                (l = l || t.features[o].properties),
                (n = t.features[o].geometry);
              break;
            case "Feature":
              (l = l || t.properties), (n = t.geometry);
              break;
            case "Point":
            case "MultiPoint":
              return null;
            case "LineString":
            case "Polygon":
            case "MultiLineString":
            case "MultiPolygon":
              n = t;
              break;
            default:
              throw new Error("geojson is invalid");
          }
          if (null === n) return null;
          var s = n.coordinates;
          switch (n.type) {
            case "Point":
              return e.point(s, l, r);
            case "MultiPoint":
              return i < 0 && (i = s.length + i), e.point(s[i], l, r);
            case "LineString":
              return u < 0 && (u = s.length + u), e.point(s[u], l, r);
            case "Polygon":
              return (
                a < 0 && (a = s.length + a),
                u < 0 && (u = s[a].length + u),
                e.point(s[a][u], l, r)
              );
            case "MultiLineString":
              return (
                i < 0 && (i = s.length + i),
                u < 0 && (u = s[i].length + u),
                e.point(s[i][u], l, r)
              );
            case "MultiPolygon":
              return (
                i < 0 && (i = s.length + i),
                a < 0 && (a = s[i].length + a),
                u < 0 && (u = s[i][a].length - u),
                e.point(s[i][a][u], l, r)
              );
          }
          throw new Error("geojson is invalid");
        }
        (exports.coordEach = t),
          (exports.coordReduce = r),
          (exports.propEach = n),
          (exports.propReduce = o),
          (exports.featureEach = i),
          (exports.featureReduce = a),
          (exports.coordAll = u),
          (exports.geomEach = l),
          (exports.geomReduce = s),
          (exports.flattenEach = c),
          (exports.flattenReduce = g),
          (exports.segmentEach = f),
          (exports.segmentReduce = p),
          (exports.lineEach = h),
          (exports.lineReduce = y),
          (exports.findSegment = d),
          (exports.findPoint = v);
      },
      { "@turf/helpers": "il2D" },
    ],
    lhdg: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = require("@turf/meta");
        function r(r) {
          var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
          return (
            e.coordEach(r, function (e) {
              t[0] > e[0] && (t[0] = e[0]),
                t[1] > e[1] && (t[1] = e[1]),
                t[2] < e[0] && (t[2] = e[0]),
                t[3] < e[1] && (t[3] = e[1]);
            }),
            t
          );
        }
        exports.default = r;
      },
      { "@turf/meta": "MNcG" },
    ],
    ZA2Y: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = require("@turf/helpers");
        function r(e) {
          if (!e) throw new Error("coord is required");
          if (!Array.isArray(e)) {
            if (
              "Feature" === e.type &&
              null !== e.geometry &&
              "Point" === e.geometry.type
            )
              return e.geometry.coordinates;
            if ("Point" === e.type) return e.coordinates;
          }
          if (
            Array.isArray(e) &&
            e.length >= 2 &&
            !Array.isArray(e[0]) &&
            !Array.isArray(e[1])
          )
            return e;
          throw new Error("coord must be GeoJSON Point or an Array of numbers");
        }
        function t(e) {
          if (Array.isArray(e)) return e;
          if ("Feature" === e.type) {
            if (null !== e.geometry) return e.geometry.coordinates;
          } else if (e.coordinates) return e.coordinates;
          throw new Error(
            "coords must be GeoJSON Feature, Geometry Object or an Array"
          );
        }
        function o(r) {
          if (r.length > 1 && e.isNumber(r[0]) && e.isNumber(r[1])) return !0;
          if (Array.isArray(r[0]) && r[0].length) return o(r[0]);
          throw new Error("coordinates must only contain numbers");
        }
        function n(e, r, t) {
          if (!r || !t) throw new Error("type and name required");
          if (!e || e.type !== r)
            throw new Error(
              "Invalid input to " + t + ": must be a " + r + ", given " + e.type
            );
        }
        function i(e, r, t) {
          if (!e) throw new Error("No feature passed");
          if (!t) throw new Error(".featureOf() requires a name");
          if (!e || "Feature" !== e.type || !e.geometry)
            throw new Error(
              "Invalid input to " + t + ", Feature with geometry required"
            );
          if (!e.geometry || e.geometry.type !== r)
            throw new Error(
              "Invalid input to " +
                t +
                ": must be a " +
                r +
                ", given " +
                e.geometry.type
            );
        }
        function u(e, r, t) {
          if (!e) throw new Error("No featureCollection passed");
          if (!t) throw new Error(".collectionOf() requires a name");
          if (!e || "FeatureCollection" !== e.type)
            throw new Error(
              "Invalid input to " + t + ", FeatureCollection required"
            );
          for (var o = 0, n = e.features; o < n.length; o++) {
            var i = n[o];
            if (!i || "Feature" !== i.type || !i.geometry)
              throw new Error(
                "Invalid input to " + t + ", Feature with geometry required"
              );
            if (!i.geometry || i.geometry.type !== r)
              throw new Error(
                "Invalid input to " +
                  t +
                  ": must be a " +
                  r +
                  ", given " +
                  i.geometry.type
              );
          }
        }
        function a(e) {
          return "Feature" === e.type ? e.geometry : e;
        }
        function y(e, r) {
          return "FeatureCollection" === e.type
            ? "FeatureCollection"
            : "GeometryCollection" === e.type
            ? "GeometryCollection"
            : "Feature" === e.type && null !== e.geometry
            ? e.geometry.type
            : e.type;
        }
        (exports.getCoord = r),
          (exports.getCoords = t),
          (exports.containsNumber = o),
          (exports.geojsonType = n),
          (exports.featureOf = i),
          (exports.collectionOf = u),
          (exports.getGeom = a),
          (exports.getType = y);
      },
      { "@turf/helpers": "il2D" },
    ],
    HpwF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var r = require("@turf/invariant");
        function e(e, o, i) {
          if ((void 0 === i && (i = {}), !e))
            throw new Error("point is required");
          if (!o) throw new Error("polygon is required");
          var u = r.getCoord(e),
            a = r.getGeom(o),
            f = a.type,
            g = o.bbox,
            l = a.coordinates;
          if (g && !1 === t(u, g)) return !1;
          "Polygon" === f && (l = [l]);
          for (var d = !1, v = 0; v < l.length && !d; v++)
            if (n(u, l[v][0], i.ignoreBoundary)) {
              for (var h = !1, s = 1; s < l[v].length && !h; )
                n(u, l[v][s], !i.ignoreBoundary) && (h = !0), s++;
              h || (d = !0);
            }
          return d;
        }
        function n(r, e, n) {
          var t = !1;
          e[0][0] === e[e.length - 1][0] &&
            e[0][1] === e[e.length - 1][1] &&
            (e = e.slice(0, e.length - 1));
          for (var o = 0, i = e.length - 1; o < e.length; i = o++) {
            var u = e[o][0],
              a = e[o][1],
              f = e[i][0],
              g = e[i][1];
            if (
              r[1] * (u - f) + a * (f - r[0]) + g * (r[0] - u) == 0 &&
              (u - r[0]) * (f - r[0]) <= 0 &&
              (a - r[1]) * (g - r[1]) <= 0
            )
              return !n;
            a > r[1] != g > r[1] &&
              r[0] < ((f - u) * (r[1] - a)) / (g - a) + u &&
              (t = !t);
          }
          return t;
        }
        function t(r, e) {
          return e[0] <= r[0] && e[1] <= r[1] && e[2] >= r[0] && e[3] >= r[1];
        }
        exports.default = e;
      },
      { "@turf/invariant": "ZA2Y" },
    ],
    OMlY: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var t = require("@turf/invariant");
        function a(a, r, n) {
          void 0 === n && (n = {});
          for (
            var s = t.getCoord(a), o = t.getCoords(r), h = 0;
            h < o.length - 1;
            h++
          ) {
            var b = !1;
            if (
              (n.ignoreEndVertices &&
                (0 === h && (b = "start"),
                h === o.length - 2 && (b = "end"),
                0 === h && h + 1 === o.length - 1 && (b = "both")),
              e(o[h], o[h + 1], s, b))
            )
              return !0;
          }
          return !1;
        }
        function e(t, a, e, r) {
          var n = e[0],
            s = e[1],
            o = t[0],
            h = t[1],
            b = a[0],
            i = a[1],
            u = b - o,
            d = i - h;
          return (
            0 == (e[0] - o) * d - (e[1] - h) * u &&
            (r
              ? "start" === r
                ? Math.abs(u) >= Math.abs(d)
                  ? u > 0
                    ? o < n && n <= b
                    : b <= n && n < o
                  : d > 0
                  ? h < s && s <= i
                  : i <= s && s < h
                : "end" === r
                ? Math.abs(u) >= Math.abs(d)
                  ? u > 0
                    ? o <= n && n < b
                    : b < n && n <= o
                  : d > 0
                  ? h <= s && s < i
                  : i < s && s <= h
                : "both" === r &&
                  (Math.abs(u) >= Math.abs(d)
                    ? u > 0
                      ? o < n && n < b
                      : b < n && n < o
                    : d > 0
                    ? h < s && s < i
                    : i < s && s < h)
              : Math.abs(u) >= Math.abs(d)
              ? u > 0
                ? o <= n && n <= b
                : b <= n && n <= o
              : d > 0
              ? h <= s && s <= i
              : i <= s && s <= h)
          );
        }
        exports.default = a;
      },
      { "@turf/invariant": "ZA2Y" },
    ],
    jWcY: [
      function (require, module, exports) {
        "use strict";
        var e =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var t = e(require("@turf/bbox")),
          r = e(require("@turf/boolean-point-in-polygon")),
          n = e(require("@turf/boolean-point-on-line")),
          o = require("@turf/invariant");
        function i(e, t) {
          var i = o.getGeom(e),
            g = o.getGeom(t),
            y = o.getType(e),
            P = o.getType(t),
            h = o.getCoords(e),
            v = o.getCoords(t);
          switch (y) {
            case "Point":
              switch (P) {
                case "Point":
                  return p(h, v);
                default:
                  throw new Error("feature2 " + P + " geometry not supported");
              }
            case "MultiPoint":
              switch (P) {
                case "Point":
                  return u(i, g);
                case "MultiPoint":
                  return a(i, g);
                default:
                  throw new Error("feature2 " + P + " geometry not supported");
              }
            case "LineString":
              switch (P) {
                case "Point":
                  return n.default(g, i, { ignoreEndVertices: !0 });
                case "LineString":
                  return l(i, g);
                case "MultiPoint":
                  return s(i, g);
                default:
                  throw new Error("feature2 " + P + " geometry not supported");
              }
            case "Polygon":
              switch (P) {
                case "Point":
                  return r.default(g, i, { ignoreBoundary: !0 });
                case "LineString":
                  return d(i, g);
                case "Polygon":
                  return c(i, g);
                case "MultiPoint":
                  return f(i, g);
                default:
                  throw new Error("feature2 " + P + " geometry not supported");
              }
            default:
              throw new Error("feature1 " + y + " geometry not supported");
          }
        }
        function u(e, t) {
          var r,
            n = !1;
          for (r = 0; r < e.coordinates.length; r++)
            if (p(e.coordinates[r], t.coordinates)) {
              n = !0;
              break;
            }
          return n;
        }
        function a(e, t) {
          for (var r = 0, n = t.coordinates; r < n.length; r++) {
            for (
              var o = n[r], i = !1, u = 0, a = e.coordinates;
              u < a.length;
              u++
            ) {
              if (p(o, a[u])) {
                i = !0;
                break;
              }
            }
            if (!i) return !1;
          }
          return !0;
        }
        function s(e, t) {
          for (var r = !1, o = 0, i = t.coordinates; o < i.length; o++) {
            var u = i[o];
            if (
              (n.default(u, e, { ignoreEndVertices: !0 }) && (r = !0),
              !n.default(u, e))
            )
              return !1;
          }
          return !!r;
        }
        function f(e, t) {
          for (var n = 0, o = t.coordinates; n < o.length; n++) {
            var i = o[n];
            if (!r.default(i, e, { ignoreBoundary: !0 })) return !1;
          }
          return !0;
        }
        function l(e, t) {
          for (var r = !1, o = 0, i = t.coordinates; o < i.length; o++) {
            var u = i[o];
            if (
              (n.default({ type: "Point", coordinates: u }, e, {
                ignoreEndVertices: !0,
              }) && (r = !0),
              !n.default({ type: "Point", coordinates: u }, e, {
                ignoreEndVertices: !1,
              }))
            )
              return !1;
          }
          return r;
        }
        function d(e, n) {
          var o = !1,
            i = 0;
          if (!g(t.default(e), t.default(n))) return !1;
          for (; i < n.coordinates.length - 1; i++) {
            var u = y(n.coordinates[i], n.coordinates[i + 1]);
            if (
              r.default({ type: "Point", coordinates: u }, e, {
                ignoreBoundary: !0,
              })
            ) {
              o = !0;
              break;
            }
          }
          return o;
        }
        function c(e, n) {
          if ("Feature" === e.type && null === e.geometry) return !1;
          if ("Feature" === n.type && null === n.geometry) return !1;
          if (!g(t.default(e), t.default(n))) return !1;
          for (var i = 0, u = o.getGeom(n).coordinates; i < u.length; i++)
            for (var a = 0, s = u[i]; a < s.length; a++) {
              var f = s[a];
              if (!r.default(f, e)) return !1;
            }
          return !0;
        }
        function g(e, t) {
          return (
            !(e[0] > t[0]) && !(e[2] < t[2]) && !(e[1] > t[1]) && !(e[3] < t[3])
          );
        }
        function p(e, t) {
          return e[0] === t[0] && e[1] === t[1];
        }
        function y(e, t) {
          return [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2];
        }
        (exports.default = i),
          (exports.isPointInMultiPoint = u),
          (exports.isMultiPointInMultiPoint = a),
          (exports.isMultiPointOnLine = s),
          (exports.isMultiPointInPoly = f),
          (exports.isLineOnLine = l),
          (exports.isLineInPoly = d),
          (exports.isPolyInPoly = c),
          (exports.doBBoxOverlap = g),
          (exports.compareCoords = p),
          (exports.getMidpoint = y);
      },
      {
        "@turf/bbox": "lhdg",
        "@turf/boolean-point-in-polygon": "HpwF",
        "@turf/boolean-point-on-line": "OMlY",
        "@turf/invariant": "ZA2Y",
      },
    ],
    tMTn: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var n = {
            update: null,
            begin: null,
            loopBegin: null,
            changeBegin: null,
            change: null,
            changeComplete: null,
            loopComplete: null,
            complete: null,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            timelineOffset: 0,
          },
          e = {
            duration: 1e3,
            delay: 0,
            endDelay: 0,
            easing: "easeOutElastic(1, .5)",
            round: 0,
          },
          t = [
            "translateX",
            "translateY",
            "translateZ",
            "rotate",
            "rotateX",
            "rotateY",
            "rotateZ",
            "scale",
            "scaleX",
            "scaleY",
            "scaleZ",
            "skew",
            "skewX",
            "skewY",
            "perspective",
            "matrix",
            "matrix3d",
          ],
          r = { CSS: {}, springs: {} };
        function a(n, e, t) {
          return Math.min(Math.max(n, e), t);
        }
        function u(n, e) {
          return n.indexOf(e) > -1;
        }
        function o(n, e) {
          return n.apply(null, e);
        }
        var i = {
          arr: function (n) {
            return Array.isArray(n);
          },
          obj: function (n) {
            return u(Object.prototype.toString.call(n), "Object");
          },
          pth: function (n) {
            return i.obj(n) && n.hasOwnProperty("totalLength");
          },
          svg: function (n) {
            return n instanceof SVGElement;
          },
          inp: function (n) {
            return n instanceof HTMLInputElement;
          },
          dom: function (n) {
            return n.nodeType || i.svg(n);
          },
          str: function (n) {
            return "string" == typeof n;
          },
          fnc: function (n) {
            return "function" == typeof n;
          },
          und: function (n) {
            return void 0 === n;
          },
          nil: function (n) {
            return i.und(n) || null === n;
          },
          hex: function (n) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n);
          },
          rgb: function (n) {
            return /^rgb/.test(n);
          },
          hsl: function (n) {
            return /^hsl/.test(n);
          },
          col: function (n) {
            return i.hex(n) || i.rgb(n) || i.hsl(n);
          },
          key: function (t) {
            return (
              !n.hasOwnProperty(t) &&
              !e.hasOwnProperty(t) &&
              "targets" !== t &&
              "keyframes" !== t
            );
          },
        };
        function c(n) {
          var e = /\(([^)]+)\)/.exec(n);
          return e
            ? e[1].split(",").map(function (n) {
                return parseFloat(n);
              })
            : [];
        }
        function s(n, e) {
          var t = c(n),
            u = a(i.und(t[0]) ? 1 : t[0], 0.1, 100),
            o = a(i.und(t[1]) ? 100 : t[1], 0.1, 100),
            s = a(i.und(t[2]) ? 10 : t[2], 0.1, 100),
            f = a(i.und(t[3]) ? 0 : t[3], 0.1, 100),
            l = Math.sqrt(o / u),
            d = s / (2 * Math.sqrt(o * u)),
            p = d < 1 ? l * Math.sqrt(1 - d * d) : 0,
            v = 1,
            h = d < 1 ? (d * l - f) / p : -f + l;
          function g(n) {
            var t = e ? (e * n) / 1e3 : n;
            return (
              (t =
                d < 1
                  ? Math.exp(-t * d * l) *
                    (v * Math.cos(p * t) + h * Math.sin(p * t))
                  : (v + h * t) * Math.exp(-t * l)),
              0 === n || 1 === n ? n : 1 - t
            );
          }
          return e
            ? g
            : function () {
                var e = r.springs[n];
                if (e) return e;
                for (var t = 0, a = 0; ; )
                  if (1 === g((t += 1 / 6))) {
                    if (++a >= 16) break;
                  } else a = 0;
                var u = t * (1 / 6) * 1e3;
                return (r.springs[n] = u), u;
              };
        }
        function f(n) {
          return (
            void 0 === n && (n = 10),
            function (e) {
              return Math.ceil(a(e, 1e-6, 1) * n) * (1 / n);
            }
          );
        }
        var l = (function () {
            var n = 11,
              e = 1 / (n - 1);
            function t(n, e) {
              return 1 - 3 * e + 3 * n;
            }
            function r(n, e) {
              return 3 * e - 6 * n;
            }
            function a(n) {
              return 3 * n;
            }
            function u(n, e, u) {
              return ((t(e, u) * n + r(e, u)) * n + a(e)) * n;
            }
            function o(n, e, u) {
              return 3 * t(e, u) * n * n + 2 * r(e, u) * n + a(e);
            }
            return function (t, r, a, i) {
              if (0 <= t && t <= 1 && 0 <= a && a <= 1) {
                var c = new Float32Array(n);
                if (t !== r || a !== i)
                  for (var s = 0; s < n; ++s) c[s] = u(s * e, t, a);
                return function (n) {
                  return t === r && a === i
                    ? n
                    : 0 === n || 1 === n
                    ? n
                    : u(f(n), r, i);
                };
              }
              function f(r) {
                for (var i = 0, s = 1, f = n - 1; s !== f && c[s] <= r; ++s)
                  i += e;
                var l = i + ((r - c[--s]) / (c[s + 1] - c[s])) * e,
                  d = o(l, t, a);
                return d >= 0.001
                  ? (function (n, e, t, r) {
                      for (var a = 0; a < 4; ++a) {
                        var i = o(e, t, r);
                        if (0 === i) return e;
                        e -= (u(e, t, r) - n) / i;
                      }
                      return e;
                    })(r, l, t, a)
                  : 0 === d
                  ? l
                  : (function (n, e, t, r, a) {
                      var o,
                        i,
                        c = 0;
                      do {
                        (o = u((i = e + (t - e) / 2), r, a) - n) > 0
                          ? (t = i)
                          : (e = i);
                      } while (Math.abs(o) > 1e-7 && ++c < 10);
                      return i;
                    })(r, i, i + e, t, a);
              }
            };
          })(),
          d = (function () {
            var n = {
                linear: function () {
                  return function (n) {
                    return n;
                  };
                },
              },
              e = {
                Sine: function () {
                  return function (n) {
                    return 1 - Math.cos((n * Math.PI) / 2);
                  };
                },
                Circ: function () {
                  return function (n) {
                    return 1 - Math.sqrt(1 - n * n);
                  };
                },
                Back: function () {
                  return function (n) {
                    return n * n * (3 * n - 2);
                  };
                },
                Bounce: function () {
                  return function (n) {
                    for (var e, t = 4; n < ((e = Math.pow(2, --t)) - 1) / 11; );
                    return (
                      1 / Math.pow(4, 3 - t) -
                      7.5625 * Math.pow((3 * e - 2) / 22 - n, 2)
                    );
                  };
                },
                Elastic: function (n, e) {
                  void 0 === n && (n = 1), void 0 === e && (e = 0.5);
                  var t = a(n, 1, 10),
                    r = a(e, 0.1, 2);
                  return function (n) {
                    return 0 === n || 1 === n
                      ? n
                      : -t *
                          Math.pow(2, 10 * (n - 1)) *
                          Math.sin(
                            ((n - 1 - (r / (2 * Math.PI)) * Math.asin(1 / t)) *
                              (2 * Math.PI)) /
                              r
                          );
                  };
                },
              };
            return (
              ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (
                n,
                t
              ) {
                e[n] = function () {
                  return function (n) {
                    return Math.pow(n, t + 2);
                  };
                };
              }),
              Object.keys(e).forEach(function (t) {
                var r = e[t];
                (n["easeIn" + t] = r),
                  (n["easeOut" + t] = function (n, e) {
                    return function (t) {
                      return 1 - r(n, e)(1 - t);
                    };
                  }),
                  (n["easeInOut" + t] = function (n, e) {
                    return function (t) {
                      return t < 0.5
                        ? r(n, e)(2 * t) / 2
                        : 1 - r(n, e)(-2 * t + 2) / 2;
                    };
                  }),
                  (n["easeOutIn" + t] = function (n, e) {
                    return function (t) {
                      return t < 0.5
                        ? (1 - r(n, e)(1 - 2 * t)) / 2
                        : (r(n, e)(2 * t - 1) + 1) / 2;
                    };
                  });
              }),
              n
            );
          })();
        function p(n, e) {
          if (i.fnc(n)) return n;
          var t = n.split("(")[0],
            r = d[t],
            a = c(n);
          switch (t) {
            case "spring":
              return s(n, e);
            case "cubicBezier":
              return o(l, a);
            case "steps":
              return o(f, a);
            default:
              return o(r, a);
          }
        }
        function v(n) {
          try {
            return document.querySelectorAll(n);
          } catch (e) {
            return;
          }
        }
        function h(n, e) {
          for (
            var t = n.length,
              r = arguments.length >= 2 ? arguments[1] : void 0,
              a = [],
              u = 0;
            u < t;
            u++
          )
            if (u in n) {
              var o = n[u];
              e.call(r, o, u, n) && a.push(o);
            }
          return a;
        }
        function g(n) {
          return n.reduce(function (n, e) {
            return n.concat(i.arr(e) ? g(e) : e);
          }, []);
        }
        function m(n) {
          return i.arr(n)
            ? n
            : (i.str(n) && (n = v(n) || n),
              n instanceof NodeList || n instanceof HTMLCollection
                ? [].slice.call(n)
                : [n]);
        }
        function y(n, e) {
          return n.some(function (n) {
            return n === e;
          });
        }
        function b(n) {
          var e = {};
          for (var t in n) e[t] = n[t];
          return e;
        }
        function M(n, e) {
          var t = b(n);
          for (var r in n) t[r] = e.hasOwnProperty(r) ? e[r] : n[r];
          return t;
        }
        function x(n, e) {
          var t = b(n);
          for (var r in e) t[r] = i.und(n[r]) ? e[r] : n[r];
          return t;
        }
        function w(n) {
          var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
          return e ? "rgba(" + e[1] + ",1)" : n;
        }
        function O(n) {
          var e = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (
              n,
              e,
              t,
              r
            ) {
              return e + e + t + t + r + r;
            }),
            t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
          return (
            "rgba(" +
            parseInt(t[1], 16) +
            "," +
            parseInt(t[2], 16) +
            "," +
            parseInt(t[3], 16) +
            ",1)"
          );
        }
        function k(n) {
          var e,
            t,
            r,
            a =
              /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) ||
              /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),
            u = parseInt(a[1], 10) / 360,
            o = parseInt(a[2], 10) / 100,
            i = parseInt(a[3], 10) / 100,
            c = a[4] || 1;
          function s(n, e, t) {
            return (
              t < 0 && (t += 1),
              t > 1 && (t -= 1),
              t < 1 / 6
                ? n + 6 * (e - n) * t
                : t < 0.5
                ? e
                : t < 2 / 3
                ? n + (e - n) * (2 / 3 - t) * 6
                : n
            );
          }
          if (0 == o) e = t = r = i;
          else {
            var f = i < 0.5 ? i * (1 + o) : i + o - i * o,
              l = 2 * i - f;
            (e = s(l, f, u + 1 / 3)),
              (t = s(l, f, u)),
              (r = s(l, f, u - 1 / 3));
          }
          return (
            "rgba(" + 255 * e + "," + 255 * t + "," + 255 * r + "," + c + ")"
          );
        }
        function P(n) {
          return i.rgb(n) ? w(n) : i.hex(n) ? O(n) : i.hsl(n) ? k(n) : void 0;
        }
        function C(n) {
          var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
            n
          );
          if (e) return e[1];
        }
        function I(n) {
          return u(n, "translate") || "perspective" === n
            ? "px"
            : u(n, "rotate") || u(n, "skew")
            ? "deg"
            : void 0;
        }
        function D(n, e) {
          return i.fnc(n) ? n(e.target, e.id, e.total) : n;
        }
        function B(n, e) {
          return n.getAttribute(e);
        }
        function T(n, e, t) {
          if (y([t, "deg", "rad", "turn"], C(e))) return e;
          var a = r.CSS[e + t];
          if (!i.und(a)) return a;
          var u = document.createElement(n.tagName),
            o =
              n.parentNode && n.parentNode !== document
                ? n.parentNode
                : document.body;
          o.appendChild(u),
            (u.style.position = "absolute"),
            (u.style.width = 100 + t);
          var c = 100 / u.offsetWidth;
          o.removeChild(u);
          var s = c * parseFloat(e);
          return (r.CSS[e + t] = s), s;
        }
        function E(n, e, t) {
          if (e in n.style) {
            var r = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              a = n.style[e] || getComputedStyle(n).getPropertyValue(r) || "0";
            return t ? T(n, a, t) : a;
          }
        }
        function F(n, e) {
          return i.dom(n) &&
            !i.inp(n) &&
            (!i.nil(B(n, e)) || (i.svg(n) && n[e]))
            ? "attribute"
            : i.dom(n) && y(t, e)
            ? "transform"
            : i.dom(n) && "transform" !== e && E(n, e)
            ? "css"
            : null != n[e]
            ? "object"
            : void 0;
        }
        function A(n) {
          if (i.dom(n)) {
            for (
              var e,
                t = n.style.transform || "",
                r = /(\w+)\(([^)]*)\)/g,
                a = new Map();
              (e = r.exec(t));

            )
              a.set(e[1], e[2]);
            return a;
          }
        }
        function N(n, e, t, r) {
          var a = u(e, "scale") ? 1 : 0 + I(e),
            o = A(n).get(e) || a;
          return (
            t && (t.transforms.list.set(e, o), (t.transforms.last = e)),
            r ? T(n, o, r) : o
          );
        }
        function S(n, e, t, r) {
          switch (F(n, e)) {
            case "transform":
              return N(n, e, r, t);
            case "css":
              return E(n, e, t);
            case "attribute":
              return B(n, e);
            default:
              return n[e] || 0;
          }
        }
        function L(n, e) {
          var t = /^(\*=|\+=|-=)/.exec(n);
          if (!t) return n;
          var r = C(n) || 0,
            a = parseFloat(e),
            u = parseFloat(n.replace(t[0], ""));
          switch (t[0][0]) {
            case "+":
              return a + u + r;
            case "-":
              return a - u + r;
            case "*":
              return a * u + r;
          }
        }
        function j(n, e) {
          if (i.col(n)) return P(n);
          if (/\s/g.test(n)) return n;
          var t = C(n),
            r = t ? n.substr(0, n.length - t.length) : n;
          return e ? r + e : r;
        }
        function q(n, e) {
          return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
        }
        function H(n) {
          return 2 * Math.PI * B(n, "r");
        }
        function V(n) {
          return 2 * B(n, "width") + 2 * B(n, "height");
        }
        function $(n) {
          return q(
            { x: B(n, "x1"), y: B(n, "y1") },
            { x: B(n, "x2"), y: B(n, "y2") }
          );
        }
        function W(n) {
          for (var e, t = n.points, r = 0, a = 0; a < t.numberOfItems; a++) {
            var u = t.getItem(a);
            a > 0 && (r += q(e, u)), (e = u);
          }
          return r;
        }
        function X(n) {
          var e = n.points;
          return W(n) + q(e.getItem(e.numberOfItems - 1), e.getItem(0));
        }
        function Y(n) {
          if (n.getTotalLength) return n.getTotalLength();
          switch (n.tagName.toLowerCase()) {
            case "circle":
              return H(n);
            case "rect":
              return V(n);
            case "line":
              return $(n);
            case "polyline":
              return W(n);
            case "polygon":
              return X(n);
          }
        }
        function Z(n) {
          var e = Y(n);
          return n.setAttribute("stroke-dasharray", e), e;
        }
        function _(n) {
          for (var e = n.parentNode; i.svg(e) && i.svg(e.parentNode); )
            e = e.parentNode;
          return e;
        }
        function G(n, e) {
          var t = e || {},
            r = t.el || _(n),
            a = r.getBoundingClientRect(),
            u = B(r, "viewBox"),
            o = a.width,
            i = a.height,
            c = t.viewBox || (u ? u.split(" ") : [0, 0, o, i]);
          return {
            el: r,
            viewBox: c,
            x: c[0] / 1,
            y: c[1] / 1,
            w: o,
            h: i,
            vW: c[2],
            vH: c[3],
          };
        }
        function Q(n, e) {
          var t = i.str(n) ? v(n)[0] : n,
            r = e || 100;
          return function (n) {
            return {
              property: n,
              el: t,
              svg: G(t),
              totalLength: Y(t) * (r / 100),
            };
          };
        }
        function z(n, e, t) {
          function r(t) {
            void 0 === t && (t = 0);
            var r = e + t >= 1 ? e + t : 0;
            return n.el.getPointAtLength(r);
          }
          var a = G(n.el, n.svg),
            u = r(),
            o = r(-1),
            i = r(1),
            c = t ? 1 : a.w / a.vW,
            s = t ? 1 : a.h / a.vH;
          switch (n.property) {
            case "x":
              return (u.x - a.x) * c;
            case "y":
              return (u.y - a.y) * s;
            case "angle":
              return (180 * Math.atan2(i.y - o.y, i.x - o.x)) / Math.PI;
          }
        }
        function R(n, e) {
          var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
            r = j(i.pth(n) ? n.totalLength : n, e) + "";
          return {
            original: r,
            numbers: r.match(t) ? r.match(t).map(Number) : [0],
            strings: i.str(n) || e ? r.split(t) : [],
          };
        }
        function J(n) {
          return h(n ? g(i.arr(n) ? n.map(m) : m(n)) : [], function (n, e, t) {
            return t.indexOf(n) === e;
          });
        }
        function K(n) {
          var e = J(n);
          return e.map(function (n, t) {
            return {
              target: n,
              id: t,
              total: e.length,
              transforms: { list: A(n) },
            };
          });
        }
        function U(n, e) {
          var t = b(e);
          if (
            (/^spring/.test(t.easing) && (t.duration = s(t.easing)), i.arr(n))
          ) {
            var r = n.length;
            2 === r && !i.obj(n[0])
              ? (n = { value: n })
              : i.fnc(e.duration) || (t.duration = e.duration / r);
          }
          var a = i.arr(n) ? n : [n];
          return a
            .map(function (n, t) {
              var r = i.obj(n) && !i.pth(n) ? n : { value: n };
              return (
                i.und(r.delay) && (r.delay = t ? 0 : e.delay),
                i.und(r.endDelay) &&
                  (r.endDelay = t === a.length - 1 ? e.endDelay : 0),
                r
              );
            })
            .map(function (n) {
              return x(n, t);
            });
        }
        function nn(n) {
          for (
            var e = h(
                g(
                  n.map(function (n) {
                    return Object.keys(n);
                  })
                ),
                function (n) {
                  return i.key(n);
                }
              ).reduce(function (n, e) {
                return n.indexOf(e) < 0 && n.push(e), n;
              }, []),
              t = {},
              r = function (r) {
                var a = e[r];
                t[a] = n.map(function (n) {
                  var e = {};
                  for (var t in n)
                    i.key(t) ? t == a && (e.value = n[t]) : (e[t] = n[t]);
                  return e;
                });
              },
              a = 0;
            a < e.length;
            a++
          )
            r(a);
          return t;
        }
        function en(n, e) {
          var t = [],
            r = e.keyframes;
          for (var a in (r && (e = x(nn(r), e)), e))
            i.key(a) && t.push({ name: a, tweens: U(e[a], n) });
          return t;
        }
        function tn(n, e) {
          var t = {};
          for (var r in n) {
            var a = D(n[r], e);
            i.arr(a) &&
              1 ===
                (a = a.map(function (n) {
                  return D(n, e);
                })).length &&
              (a = a[0]),
              (t[r] = a);
          }
          return (
            (t.duration = parseFloat(t.duration)),
            (t.delay = parseFloat(t.delay)),
            t
          );
        }
        function rn(n, e) {
          var t;
          return n.tweens.map(function (r) {
            var a = tn(r, e),
              u = a.value,
              o = i.arr(u) ? u[1] : u,
              c = C(o),
              s = S(e.target, n.name, c, e),
              f = t ? t.to.original : s,
              l = i.arr(u) ? u[0] : f,
              d = C(l) || C(s),
              v = c || d;
            return (
              i.und(o) && (o = f),
              (a.from = R(l, v)),
              (a.to = R(L(o, l), v)),
              (a.start = t ? t.end : 0),
              (a.end = a.start + a.delay + a.duration + a.endDelay),
              (a.easing = p(a.easing, a.duration)),
              (a.isPath = i.pth(u)),
              (a.isPathTargetInsideSVG = a.isPath && i.svg(e.target)),
              (a.isColor = i.col(a.from.original)),
              a.isColor && (a.round = 1),
              (t = a),
              a
            );
          });
        }
        var an = {
          css: function (n, e, t) {
            return (n.style[e] = t);
          },
          attribute: function (n, e, t) {
            return n.setAttribute(e, t);
          },
          object: function (n, e, t) {
            return (n[e] = t);
          },
          transform: function (n, e, t, r, a) {
            if ((r.list.set(e, t), e === r.last || a)) {
              var u = "";
              r.list.forEach(function (n, e) {
                u += e + "(" + n + ") ";
              }),
                (n.style.transform = u);
            }
          },
        };
        function un(n, e) {
          K(n).forEach(function (n) {
            for (var t in e) {
              var r = D(e[t], n),
                a = n.target,
                u = C(r),
                o = S(a, t, u, n),
                i = L(j(r, u || C(o)), o),
                c = F(a, t);
              an[c](a, t, i, n.transforms, !0);
            }
          });
        }
        function on(n, e) {
          var t = F(n.target, e.name);
          if (t) {
            var r = rn(e, n),
              a = r[r.length - 1];
            return {
              type: t,
              property: e.name,
              animatable: n,
              tweens: r,
              duration: a.end,
              delay: r[0].delay,
              endDelay: a.endDelay,
            };
          }
        }
        function cn(n, e) {
          return h(
            g(
              n.map(function (n) {
                return e.map(function (e) {
                  return on(n, e);
                });
              })
            ),
            function (n) {
              return !i.und(n);
            }
          );
        }
        function sn(n, e) {
          var t = n.length,
            r = function (n) {
              return n.timelineOffset ? n.timelineOffset : 0;
            },
            a = {};
          return (
            (a.duration = t
              ? Math.max.apply(
                  Math,
                  n.map(function (n) {
                    return r(n) + n.duration;
                  })
                )
              : e.duration),
            (a.delay = t
              ? Math.min.apply(
                  Math,
                  n.map(function (n) {
                    return r(n) + n.delay;
                  })
                )
              : e.delay),
            (a.endDelay = t
              ? a.duration -
                Math.max.apply(
                  Math,
                  n.map(function (n) {
                    return r(n) + n.duration - n.endDelay;
                  })
                )
              : e.endDelay),
            a
          );
        }
        var fn = 0;
        function ln(t) {
          var r = M(n, t),
            a = M(e, t),
            u = en(a, t),
            o = K(t.targets),
            i = cn(o, u),
            c = sn(i, a),
            s = fn;
          return (
            fn++,
            x(r, {
              id: s,
              children: [],
              animatables: o,
              animations: i,
              duration: c.duration,
              delay: c.delay,
              endDelay: c.endDelay,
            })
          );
        }
        var dn = [],
          pn = (function () {
            var n;
            function e(t) {
              for (var r = dn.length, a = 0; a < r; ) {
                var u = dn[a];
                u.paused ? (dn.splice(a, 1), r--) : (u.tick(t), a++);
              }
              n = a > 0 ? requestAnimationFrame(e) : void 0;
            }
            return (
              "undefined" != typeof document &&
                document.addEventListener("visibilitychange", function () {
                  hn.suspendWhenDocumentHidden &&
                    (vn()
                      ? (n = cancelAnimationFrame(n))
                      : (dn.forEach(function (n) {
                          return n._onDocumentVisibility();
                        }),
                        pn()));
                }),
              function () {
                n ||
                  (vn() && hn.suspendWhenDocumentHidden) ||
                  !(dn.length > 0) ||
                  (n = requestAnimationFrame(e));
              }
            );
          })();
        function vn() {
          return !!document && document.hidden;
        }
        function hn(n) {
          void 0 === n && (n = {});
          var e,
            t = 0,
            r = 0,
            u = 0,
            o = 0,
            i = null;
          function c(n) {
            var e =
              window.Promise &&
              new Promise(function (n) {
                return (i = n);
              });
            return (n.finished = e), e;
          }
          var s = ln(n);
          c(s);
          function f() {
            var n = s.direction;
            "alternate" !== n &&
              (s.direction = "normal" !== n ? "normal" : "reverse"),
              (s.reversed = !s.reversed),
              e.forEach(function (n) {
                return (n.reversed = s.reversed);
              });
          }
          function l(n) {
            return s.reversed ? s.duration - n : n;
          }
          function d() {
            (t = 0), (r = l(s.currentTime) * (1 / hn.speed));
          }
          function p(n, e) {
            e && e.seek(n - e.timelineOffset);
          }
          function v(n) {
            for (var e = 0, t = s.animations, r = t.length; e < r; ) {
              var u = t[e],
                o = u.animatable,
                i = u.tweens,
                c = i.length - 1,
                f = i[c];
              c &&
                (f =
                  h(i, function (e) {
                    return n < e.end;
                  })[0] || f);
              for (
                var l = a(n - f.start - f.delay, 0, f.duration) / f.duration,
                  d = isNaN(l) ? 1 : f.easing(l),
                  p = f.to.strings,
                  v = f.round,
                  g = [],
                  m = f.to.numbers.length,
                  y = void 0,
                  b = 0;
                b < m;
                b++
              ) {
                var M = void 0,
                  x = f.to.numbers[b],
                  w = f.from.numbers[b] || 0;
                (M = f.isPath
                  ? z(f.value, d * x, f.isPathTargetInsideSVG)
                  : w + d * (x - w)),
                  v && ((f.isColor && b > 2) || (M = Math.round(M * v) / v)),
                  g.push(M);
              }
              var O = p.length;
              if (O) {
                y = p[0];
                for (var k = 0; k < O; k++) {
                  p[k];
                  var P = p[k + 1],
                    C = g[k];
                  isNaN(C) || (y += P ? C + P : C + " ");
                }
              } else y = g[0];
              an[u.type](o.target, u.property, y, o.transforms),
                (u.currentValue = y),
                e++;
            }
          }
          function g(n) {
            s[n] && !s.passThrough && s[n](s);
          }
          function m(n) {
            var d = s.duration,
              h = s.delay,
              m = d - s.endDelay,
              y = l(n);
            (s.progress = a((y / d) * 100, 0, 100)),
              (s.reversePlayback = y < s.currentTime),
              e &&
                (function (n) {
                  if (s.reversePlayback) for (var t = o; t--; ) p(n, e[t]);
                  else for (var r = 0; r < o; r++) p(n, e[r]);
                })(y),
              !s.began && s.currentTime > 0 && ((s.began = !0), g("begin")),
              !s.loopBegan &&
                s.currentTime > 0 &&
                ((s.loopBegan = !0), g("loopBegin")),
              y <= h && 0 !== s.currentTime && v(0),
              ((y >= m && s.currentTime !== d) || !d) && v(d),
              y > h && y < m
                ? (s.changeBegan ||
                    ((s.changeBegan = !0),
                    (s.changeCompleted = !1),
                    g("changeBegin")),
                  g("change"),
                  v(y))
                : s.changeBegan &&
                  ((s.changeCompleted = !0),
                  (s.changeBegan = !1),
                  g("changeComplete")),
              (s.currentTime = a(y, 0, d)),
              s.began && g("update"),
              n >= d &&
                ((r = 0),
                s.remaining && !0 !== s.remaining && s.remaining--,
                s.remaining
                  ? ((t = u),
                    g("loopComplete"),
                    (s.loopBegan = !1),
                    "alternate" === s.direction && f())
                  : ((s.paused = !0),
                    s.completed ||
                      ((s.completed = !0),
                      g("loopComplete"),
                      g("complete"),
                      !s.passThrough && "Promise" in window && (i(), c(s)))));
          }
          return (
            (s.reset = function () {
              var n = s.direction;
              (s.passThrough = !1),
                (s.currentTime = 0),
                (s.progress = 0),
                (s.paused = !0),
                (s.began = !1),
                (s.loopBegan = !1),
                (s.changeBegan = !1),
                (s.completed = !1),
                (s.changeCompleted = !1),
                (s.reversePlayback = !1),
                (s.reversed = "reverse" === n),
                (s.remaining = s.loop),
                (e = s.children);
              for (var t = (o = e.length); t--; ) s.children[t].reset();
              ((s.reversed && !0 !== s.loop) ||
                ("alternate" === n && 1 === s.loop)) &&
                s.remaining++,
                v(s.reversed ? s.duration : 0);
            }),
            (s._onDocumentVisibility = d),
            (s.set = function (n, e) {
              return un(n, e), s;
            }),
            (s.tick = function (n) {
              (u = n), t || (t = u), m((u + (r - t)) * hn.speed);
            }),
            (s.seek = function (n) {
              m(l(n));
            }),
            (s.pause = function () {
              (s.paused = !0), d();
            }),
            (s.play = function () {
              s.paused &&
                (s.completed && s.reset(),
                (s.paused = !1),
                dn.push(s),
                d(),
                pn());
            }),
            (s.reverse = function () {
              f(), (s.completed = !s.reversed), d();
            }),
            (s.restart = function () {
              s.reset(), s.play();
            }),
            (s.remove = function (n) {
              mn(J(n), s);
            }),
            s.reset(),
            s.autoplay && s.play(),
            s
          );
        }
        function gn(n, e) {
          for (var t = e.length; t--; )
            y(n, e[t].animatable.target) && e.splice(t, 1);
        }
        function mn(n, e) {
          var t = e.animations,
            r = e.children;
          gn(n, t);
          for (var a = r.length; a--; ) {
            var u = r[a],
              o = u.animations;
            gn(n, o), o.length || u.children.length || r.splice(a, 1);
          }
          t.length || r.length || e.pause();
        }
        function yn(n) {
          for (var e = J(n), t = dn.length; t--; ) {
            mn(e, dn[t]);
          }
        }
        function bn(n, e) {
          void 0 === e && (e = {});
          var t = e.direction || "normal",
            r = e.easing ? p(e.easing) : null,
            a = e.grid,
            u = e.axis,
            o = e.from || 0,
            c = "first" === o,
            s = "center" === o,
            f = "last" === o,
            l = i.arr(n),
            d = l ? parseFloat(n[0]) : parseFloat(n),
            v = l ? parseFloat(n[1]) : 0,
            h = C(l ? n[1] : n) || 0,
            g = e.start || 0 + (l ? d : 0),
            m = [],
            y = 0;
          return function (n, e, i) {
            if (
              (c && (o = 0),
              s && (o = (i - 1) / 2),
              f && (o = i - 1),
              !m.length)
            ) {
              for (var p = 0; p < i; p++) {
                if (a) {
                  var b = s ? (a[0] - 1) / 2 : o % a[0],
                    M = s ? (a[1] - 1) / 2 : Math.floor(o / a[0]),
                    x = b - (p % a[0]),
                    w = M - Math.floor(p / a[0]),
                    O = Math.sqrt(x * x + w * w);
                  "x" === u && (O = -x), "y" === u && (O = -w), m.push(O);
                } else m.push(Math.abs(o - p));
                y = Math.max.apply(Math, m);
              }
              r &&
                (m = m.map(function (n) {
                  return r(n / y) * y;
                })),
                "reverse" === t &&
                  (m = m.map(function (n) {
                    return u ? (n < 0 ? -1 * n : -n) : Math.abs(y - n);
                  }));
            }
            return (
              g + (l ? (v - d) / y : d) * (Math.round(100 * m[e]) / 100) + h
            );
          };
        }
        function Mn(n) {
          void 0 === n && (n = {});
          var t = hn(n);
          return (
            (t.duration = 0),
            (t.add = function (r, a) {
              var u = dn.indexOf(t),
                o = t.children;
              function c(n) {
                n.passThrough = !0;
              }
              u > -1 && dn.splice(u, 1);
              for (var s = 0; s < o.length; s++) c(o[s]);
              var f = x(r, M(e, n));
              f.targets = f.targets || n.targets;
              var l = t.duration;
              (f.autoplay = !1),
                (f.direction = t.direction),
                (f.timelineOffset = i.und(a) ? l : L(a, l)),
                c(t),
                t.seek(f.timelineOffset);
              var d = hn(f);
              c(d), o.push(d);
              var p = sn(o, n);
              return (
                (t.delay = p.delay),
                (t.endDelay = p.endDelay),
                (t.duration = p.duration),
                t.seek(0),
                t.reset(),
                t.autoplay && t.play(),
                t
              );
            }),
            t
          );
        }
        (hn.version = "3.2.1"),
          (hn.speed = 1),
          (hn.suspendWhenDocumentHidden = !0),
          (hn.running = dn),
          (hn.remove = yn),
          (hn.get = S),
          (hn.set = un),
          (hn.convertPx = T),
          (hn.path = Q),
          (hn.setDashoffset = Z),
          (hn.stagger = bn),
          (hn.timeline = Mn),
          (hn.easing = p),
          (hn.penner = d),
          (hn.random = function (n, e) {
            return Math.floor(Math.random() * (e - n + 1)) + n;
          });
        var xn = hn;
        exports.default = xn;
      },
      {},
    ],
    JN7f: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.navAnimator = exports.navListAnime = exports.navListAnimeRestore = exports.navAnime = exports.navAnimeRestore = exports.dragElement = exports.navHighlighter = exports.sg_geojson = void 0);
        var e = t(require("animejs"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [103.59489440917969, 1.2715630876314767],
                    [103.59077453613281, 1.2296876901489255],
                    [103.58940124511719, 1.1987955811436186],
                    [103.61618041992188, 1.1658436142465605],
                    [103.64639282226562, 1.1356373055193174],
                    [103.6834716796875, 1.1438754213781501],
                    [103.73291015625, 1.1541730329228161],
                    [103.77960205078125, 1.176141145843977],
                    [103.85581970214844, 1.2029145493452873],
                    [103.87195587158203, 1.2386120110295982],
                    [103.89083862304688, 1.2712198493992468],
                    [103.97666931152344, 1.2887249407943617],
                    [104.02713775634766, 1.3038272759700005],
                    [104.09065246582031, 1.334718132769963],
                    [104.08035278320312, 1.3498201887565244],
                    [104.08721923828125, 1.3807104645408492],
                    [104.09271240234374, 1.4006173190275208],
                    [104.07829284667969, 1.4308204986633148],
                    [104.04945373535156, 1.4466083666436405],
                    [104.0185546875, 1.4445490857204621],
                    [103.99658203125, 1.425329040790274],
                    [103.941650390625, 1.4294476354255539],
                    [103.90731811523438, 1.4267019064882447],
                    [103.87298583984375, 1.4514133481911609],
                    [103.83316040039062, 1.474065265973824],
                    [103.79745483398438, 1.4754381021049132],
                    [103.75419616699219, 1.4493540716333067],
                    [103.71299743652344, 1.4555318956783565],
                    [103.67523193359375, 1.435625513519856],
                    [103.65463256835938, 1.4019901993378632],
                    [103.59489440917969, 1.2715630876314767],
                  ],
                ],
              },
            },
          ],
        };
        exports.sg_geojson = a;
        var n = document.querySelectorAll("section[id]"),
          o = function () {
            var e = document.getElementById("scroll-container").scrollTop;
            n.forEach(function (t) {
              var a = t.offsetHeight,
                n = t.offsetTop - 50,
                o = t.getAttribute("id"),
                r = document.querySelector(".nav a[href*=" + o + "]").classList,
                i = document.querySelector(".nav-list a[href*=" + o + "]")
                  .classList;
              e > n && e <= n + a
                ? (r.add("active-light"), i.add("active-light"))
                : (r.remove("active-light"), i.remove("active-light"));
            });
          };
        exports.navHighlighter = o;
        var r = function (e) {
          var t = 0,
            a = 0,
            n = 0,
            o = 0;
          function r(e) {
            (e = e || window.event).preventDefault(),
              (n = e.clientX),
              (o = e.clientY),
              (document.onmouseup = s),
              (document.onmousemove = i);
          }
          function i(r) {
            (r = r || window.event).preventDefault(),
              (t = n - r.clientX),
              (a = o - r.clientY),
              (n = r.clientX),
              (o = r.clientY),
              (e.style.top = e.offsetTop - a + "px"),
              (e.style.left = e.offsetLeft - t + "px");
          }
          function s() {
            (document.onmouseup = null), (document.onmousemove = null);
          }
          document.getElementById(e.id + "header")
            ? (document.getElementById(e.id + "header").onmousedown = r)
            : (e.onmousedown = r);
        };
        exports.dragElement = r;
        var i = document.getElementById("avatar"),
          s = window.innerHeight / 2 - 64,
          l = window.innerWidth / 4 - 64,
          u = 64,
          d = 128,
          c = i.offsetTop,
          p = i.offsetLeft,
          f = (0, e.default)({
            targets: "#navbar",
            top: [c, 0],
            left: [-p, 0],
            width: [0, "100%"],
            height: [0, 56],
            opacity: 1,
            autoplay: !1,
            easing: "easeOutExpo",
            duration: 500,
            delay: 250,
          });
        exports.navAnimeRestore = f;
        var v = (0, e.default)({
          targets: "#navbar",
          top: [0, u],
          left: [0, -d],
          width: ["100%", 0],
          height: [56, 0],
          opacity: 0,
          autoplay: !1,
          easing: "easeOutExpo",
          duration: 500,
        });
        exports.navAnime = v;
        var g = (0, e.default)({
            targets: "#avatar",
            top: [c, s],
            left: [p, l],
            autoplay: !1,
            easing: "easeOutElastic(1, 1)",
            duration: 500,
            delay: 500,
          }),
          m = (0, e.default)({
            targets: "#avatar",
            top: [c, u],
            left: [p, d],
            autoplay: !1,
            opacity: 0.7,
            easing: "easeOutElastic(1, 1)",
            duration: 500,
          }),
          y = (0, e.default)({
            targets: ".nav-list .list-icon",
            translateX: function (e, t) {
              return [-88 * Math.sin(((2.5 + 25 * t) / 180) * Math.PI), 0];
            },
            translateY: function (e, t) {
              return [-88 * Math.cos(((2.5 + 25 * t) / 180) * Math.PI), 0];
            },
            opacity: [1, 0],
            delay: e.default.stagger(30),
            duration: 250,
            autoplay: !1,
            zIndex: [998, -1],
          });
        exports.navListAnimeRestore = y;
        var h = (0, e.default)({
          targets: ".nav-list .list-icon",
          translateX: function (e, t) {
            return [0, -88 * Math.sin(((2.5 + 25 * t) / 180) * Math.PI)];
          },
          translateY: function (e, t) {
            return [0, -88 * Math.cos(((2.5 + 25 * t) / 180) * Math.PI)];
          },
          opacity: [0, 1],
          delay: e.default.stagger(30),
          duration: 250,
          autoplay: !1,
          zIndex: [-1, 998],
        });
        exports.navListAnime = h;
        var x = !1,
          w = function () {
            var e = document.getElementById("scroll-container").scrollTop,
              t = document.getElementById("navbar");
            e > window.innerHeight / 2 && 0 === t.offsetTop && !x
              ? (v.play(), m.play(), h.play(), (x = !0))
              : e < window.innerHeight / 2 &&
                0 !== t.offsetTop &&
                x &&
                (y.play(), f.play(), g.play(), (x = !1));
          };
        exports.navAnimator = w;
      },
      { animejs: "tMTn" },
    ],
    VJtr: [
      function (require, module, exports) {
        "use strict";
        var e = n(require("@turf/boolean-contains")),
          o = require("@turf/helpers"),
          t = require("./consts");
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (window.downloadResume = function () {
          navigator.geolocation
            ? navigator.geolocation.getCurrentPosition(
                function (n) {
                  var d = (0, o.point)([n.coords.longitude, n.coords.latitude]),
                    l = (0, o.polygon)(
                      t.sg_geojson.features[0].geometry.coordinates
                    );
                  (0, e.default)(l, d)
                    ? document.getElementById("download-local").click()
                    : document.getElementById("download-resume").click();
                },
                function () {
                  document.getElementById("download-resume").click();
                }
              )
            : document.getElementById("download-resume").click();
        }),
          (document.getElementById("resume-icon").onclick = downloadResume),
          document
            .getElementById("scroll-container")
            .addEventListener("scroll", t.navHighlighter),
          document
            .getElementById("scroll-container")
            .addEventListener("scroll", t.navAnimator, {
              capture: !0,
              passive: !0,
            }),
          (0, t.dragElement)(document.getElementById("avatar"));
      },
      {
        "@turf/boolean-contains": "jWcY",
        "@turf/helpers": "il2D",
        "./consts": "JN7f",
      },
    ],
  },
  {},
  ["VJtr"],
  null
);
//# sourceMappingURL=/scripts.79b71000.js.map