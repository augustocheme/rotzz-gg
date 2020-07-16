webpackHotUpdate("static/development/pages/[summoner].js",{

/***/ "./src/pages/[summoner].tsx":
/*!**********************************!*\
  !*** ./src/pages/[summoner].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal-cookie */ \"./node_modules/universal-cookie/es6/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/polones/httpd/augusto-cheme/rotzz-gg/src/pages/[summoner].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\nvar SummonerPage = function SummonerPage() {\n  _s();\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('/api/matches', /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {\n      var cookies, response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default()({\n                method: 'get',\n                url: url,\n                headers: {\n                  accountId: cookies.get('accountId')\n                }\n              });\n\n            case 3:\n              response = _context.sent;\n              return _context.abrupt(\"return\", fetch(url).then(function (r) {\n                return r.json();\n              }));\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }()),\n      matchHistory = _useSWR.data,\n      error = _useSWR.error;\n\n  console.log(matchHistory);\n  return __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 10\n    }\n  }, \"Summoner:\");\n}; // SummonerPage.getInitialProps = async context => {\n//   console.log(context.req.headers);\n//   const response = await axios({\n//     method: 'get',\n//     url: 'http://localhost:3000/api/matches',\n//     headers: context.req ? { cookie: context.req.headers.cookie } : undefined,\n//   });\n//   return {\n//     matchHistory: response.data,\n//   };\n// };\n\n\n_s(SummonerPage, \"yloQ2G2soXsPwJupCB+r+lYjVQk=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = SummonerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SummonerPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SummonerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW3N1bW1vbmVyXS50c3g/YzViNSJdLCJuYW1lcyI6WyJTdW1tb25lclBhZ2UiLCJ1c2VTV1IiLCJ1cmwiLCJjb29raWVzIiwiQ29va2llcyIsImF4aW9zIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY291bnRJZCIsImdldCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJtYXRjaEhpc3RvcnkiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsZ0JBQ2FDLG1EQUFNLENBQUMsY0FBRDtBQUFBLGdNQUFpQixpQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckRDLHFCQURxRCxHQUMzQyxJQUFJQyx3REFBSixFQUQyQztBQUFBO0FBQUEscUJBRXBDQyw0Q0FBSyxDQUFDO0FBQzNCQyxzQkFBTSxFQUFFLEtBRG1CO0FBRTNCSixtQkFBRyxFQUFIQSxHQUYyQjtBQUczQkssdUJBQU8sRUFBRTtBQUFFQywyQkFBUyxFQUFFTCxPQUFPLENBQUNNLEdBQVIsQ0FBWSxXQUFaO0FBQWI7QUFIa0IsZUFBRCxDQUYrQjs7QUFBQTtBQUVyREMsc0JBRnFEO0FBQUEsK0NBT3BEQyxLQUFLLENBQUNULEdBQUQsQ0FBTCxDQUFXVSxJQUFYLENBQWdCLFVBQUFDLENBQUM7QUFBQSx1QkFBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBQUo7QUFBQSxlQUFqQixDQVBvRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURuQjtBQUFBLE1BQ1hDLFlBRFcsV0FDakJDLElBRGlCO0FBQUEsTUFDR0MsS0FESCxXQUNHQSxLQURIOztBQVd6QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFlBQVo7QUFDQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxDQWJELEMsQ0FlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7R0ExQk1mLFk7VUFDa0NDLDJDOzs7S0FEbENELFk7QUE0QlNBLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL1tzdW1tb25lcl0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSAnYXNzZXJ0JztcblxuY29uc3QgU3VtbW9uZXJQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGE6IG1hdGNoSGlzdG9yeSwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9tYXRjaGVzJywgYXN5bmMgdXJsID0+IHtcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICB1cmwsXG4gICAgICBoZWFkZXJzOiB7IGFjY291bnRJZDogY29va2llcy5nZXQoJ2FjY291bnRJZCcpIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cobWF0Y2hIaXN0b3J5KTtcbiAgcmV0dXJuIDxwPlN1bW1vbmVyOjwvcD47XG59O1xuXG4vLyBTdW1tb25lclBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGNvbnRleHQucmVxLmhlYWRlcnMpO1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcbi8vICAgICBtZXRob2Q6ICdnZXQnLFxuLy8gICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbWF0Y2hlcycsXG4vLyAgICAgaGVhZGVyczogY29udGV4dC5yZXEgPyB7IGNvb2tpZTogY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgfSA6IHVuZGVmaW5lZCxcbi8vICAgfSk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBtYXRjaEhpc3Rvcnk6IHJlc3BvbnNlLmRhdGEsXG4vLyAgIH07XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBTdW1tb25lclBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[summoner].tsx\n");

/***/ })

})