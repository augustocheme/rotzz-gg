webpackHotUpdate("static/development/pages/[summoner].js",{

/***/ "./src/pages/[summoner].tsx":
/*!**********************************!*\
  !*** ./src/pages/[summoner].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/polones/httpd/augusto-cheme/rotzz-gg/src/pages/[summoner].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar SummonerPage = function SummonerPage() {\n  _s();\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/summoner', function (url) {\n    return fetch(url).then(function (r) {\n      return r.json();\n    });\n  }),\n      matchHistory = _useSWR.data,\n      error = _useSWR.error;\n\n  console.log(matchHistory);\n  return __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 10\n    }\n  }, \"Summoner:\");\n}; // SummonerPage.getInitialProps = async context => {\n//   console.log(context.req.headers);\n//   const response = await axios({\n//     method: 'get',\n//     url: 'http://localhost:3000/api/matches',\n//     headers: context.req ? { cookie: context.req.headers.cookie } : undefined,\n//   });\n//   return {\n//     matchHistory: response.data,\n//   };\n// };\n\n\n_s(SummonerPage, \"yloQ2G2soXsPwJupCB+r+lYjVQk=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n});\n\n_c = SummonerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SummonerPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SummonerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW3N1bW1vbmVyXS50c3g/YzViNSJdLCJuYW1lcyI6WyJTdW1tb25lclBhZ2UiLCJ1c2VTV1IiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIm1hdGNoSGlzdG9yeSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBS0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLGdCQUNhQyxtREFBTSxDQUFDLGVBQUQsRUFBa0IsVUFBQUMsR0FBRztBQUFBLFdBQy9EQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNDLElBQUYsRUFBSjtBQUFBLEtBQWpCLENBRCtEO0FBQUEsR0FBckIsQ0FEbkI7QUFBQSxNQUNYQyxZQURXLFdBQ2pCQyxJQURpQjtBQUFBLE1BQ0dDLEtBREgsV0FDR0EsS0FESDs7QUFLekJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixZQUFaO0FBQ0EsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0QsQ0FQRCxDLENBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0dBcEJNUCxZO1VBQ2tDQywyQzs7O0tBRGxDRCxZO0FBc0JTQSwyRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9bc3VtbW9uZXJdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gJ2Fzc2VydCc7XG5cbmNvbnN0IFN1bW1vbmVyUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBtYXRjaEhpc3RvcnksIGVycm9yIH0gPSB1c2VTV1IoJy9hcGkvc3VtbW9uZXInLCB1cmwgPT5cbiAgICBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSlcbiAgKTtcblxuICBjb25zb2xlLmxvZyhtYXRjaEhpc3RvcnkpO1xuICByZXR1cm4gPHA+U3VtbW9uZXI6PC9wPjtcbn07XG5cbi8vIFN1bW1vbmVyUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcbi8vICAgY29uc29sZS5sb2coY29udGV4dC5yZXEuaGVhZGVycyk7XG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xuLy8gICAgIG1ldGhvZDogJ2dldCcsXG4vLyAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9tYXRjaGVzJyxcbi8vICAgICBoZWFkZXJzOiBjb250ZXh0LnJlcSA/IHsgY29va2llOiBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSB9IDogdW5kZWZpbmVkLFxuLy8gICB9KTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIG1hdGNoSGlzdG9yeTogcmVzcG9uc2UuZGF0YSxcbi8vICAgfTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IFN1bW1vbmVyUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[summoner].tsx\n");

/***/ })

})