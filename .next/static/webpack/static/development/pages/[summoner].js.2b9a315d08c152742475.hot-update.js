webpackHotUpdate("static/development/pages/[summoner].js",{

/***/ "./src/pages/[summoner].tsx":
/*!**********************************!*\
  !*** ./src/pages/[summoner].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/polones/httpd/augusto-cheme/rotzz-gg/src/pages/[summoner].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar SummonerPage = function SummonerPage() {\n  _s();\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/summoner', function (url) {\n    console.log(url);\n    return fetch(url).then(function (r) {\n      return r.json();\n    });\n  }),\n      matchHistory = _useSWR.data,\n      error = _useSWR.error;\n\n  console.log(matchHistory);\n  return __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 10\n    }\n  }, \"Summoner:\");\n}; // SummonerPage.getInitialProps = async context => {\n//   console.log(context.req.headers);\n//   const response = await axios({\n//     method: 'get',\n//     url: 'http://localhost:3000/api/matches',\n//     headers: context.req ? { cookie: context.req.headers.cookie } : undefined,\n//   });\n//   return {\n//     matchHistory: response.data,\n//   };\n// };\n\n\n_s(SummonerPage, \"yloQ2G2soXsPwJupCB+r+lYjVQk=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n});\n\n_c = SummonerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SummonerPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SummonerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW3N1bW1vbmVyXS50c3g/YzViNSJdLCJuYW1lcyI6WyJTdW1tb25lclBhZ2UiLCJ1c2VTV1IiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJtYXRjaEhpc3RvcnkiLCJkYXRhIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBS0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLGdCQUNhQyxtREFBTSxDQUFDLGVBQUQsRUFBa0IsVUFBQUMsR0FBRyxFQUFJO0FBQ25FQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFdBQU9HLEtBQUssQ0FBQ0gsR0FBRCxDQUFMLENBQVdJLElBQVgsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsSUFBRixFQUFKO0FBQUEsS0FBakIsQ0FBUDtBQUNELEdBSDJDLENBRG5CO0FBQUEsTUFDWEMsWUFEVyxXQUNqQkMsSUFEaUI7QUFBQSxNQUNHQyxLQURILFdBQ0dBLEtBREg7O0FBTXpCUixTQUFPLENBQUNDLEdBQVIsQ0FBWUssWUFBWjtBQUNBLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNELENBUkQsQyxDQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztHQXJCTVQsWTtVQUNrQ0MsMkM7OztLQURsQ0QsWTtBQXVCU0EsMkVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3N1bW1vbmVyXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tICdhc3NlcnQnO1xuXG5jb25zdCBTdW1tb25lclBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogbWF0Y2hIaXN0b3J5LCBlcnJvciB9ID0gdXNlU1dSKCcvYXBpL3N1bW1vbmVyJywgdXJsID0+IHtcbiAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKG1hdGNoSGlzdG9yeSk7XG4gIHJldHVybiA8cD5TdW1tb25lcjo8L3A+O1xufTtcblxuLy8gU3VtbW9uZXJQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhjb250ZXh0LnJlcS5oZWFkZXJzKTtcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4vLyAgICAgbWV0aG9kOiAnZ2V0Jyxcbi8vICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL21hdGNoZXMnLFxuLy8gICAgIGhlYWRlcnM6IGNvbnRleHQucmVxID8geyBjb29raWU6IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIH0gOiB1bmRlZmluZWQsXG4vLyAgIH0pO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgbWF0Y2hIaXN0b3J5OiByZXNwb25zZS5kYXRhLFxuLy8gICB9O1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgU3VtbW9uZXJQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[summoner].tsx\n");

/***/ })

})