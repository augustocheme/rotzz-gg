webpackHotUpdate("static/development/pages/[summoner].js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./src/pages/[summoner].tsx":
/*!**********************************!*\
  !*** ./src/pages/[summoner].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-cookie */ \"./node_modules/universal-cookie/es6/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/polones/httpd/augusto-cheme/rotzz-gg/src/pages/[summoner].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar SummonerPage = function SummonerPage() {\n  _s();\n\n  // const { data: matchHistory, error } = useSWR('/api/matches', async url => {\n  //   const cookies = new Cookies();\n  //   const response = await axios.get('/api/matches', {\n  //     params: {\n  //       accountId: cookies.get('accountId'),\n  //     },\n  //   });\n  //   return response.data;\n  // });\n  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  var accountId = cookies.get(accountId);\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"https://br1.api.riotgames.com/lol/match/v4/matchlists/by-account/\".concat(accountId, \"?endIndex=20&api_key=RGAPI-010fd2a0-a370-44eb-acc2-93947b3a2516\")),\n      matchHistory = _useSWR.data,\n      error = _useSWR.error;\n\n  if (!matchHistory) {\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 12\n      }\n    }, \"loading\");\n  }\n\n  console.log(matchHistory);\n  return __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, matchHistory.matches.map(function (match) {\n    return __jsx(\"li\", {\n      key: match.timestamp,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 16\n      }\n    }, match.gameId);\n  }));\n};\n\n_s(SummonerPage, \"yloQ2G2soXsPwJupCB+r+lYjVQk=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n});\n\n_c = SummonerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SummonerPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SummonerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW3N1bW1vbmVyXS50c3g/YzViNSJdLCJuYW1lcyI6WyJTdW1tb25lclBhZ2UiLCJjb29raWVzIiwiQ29va2llcyIsImFjY291bnRJZCIsImdldCIsInVzZVNXUiIsIm1hdGNoSGlzdG9yeSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaGVzIiwibWFwIiwibWF0Y2giLCJ0aW1lc3RhbXAiLCJnYW1lSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUMsd0RBQUosRUFBaEI7QUFDQSxNQUFNQyxTQUFTLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZRCxTQUFaLENBQWxCOztBQVp5QixnQkFjYUUsbURBQU0sNEVBQzBCRixTQUQxQixxRUFkbkI7QUFBQSxNQWNYRyxZQWRXLFdBY2pCQyxJQWRpQjtBQUFBLE1BY0dDLEtBZEgsV0FjR0EsS0FkSDs7QUFrQnpCLE1BQUksQ0FBQ0YsWUFBTCxFQUFtQjtBQUNqQixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFFREcsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFlBQVo7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsWUFBWSxDQUFDSyxPQUFiLENBQXFCQyxHQUFyQixDQUF5QixVQUFBQyxLQUFLLEVBQUk7QUFDakMsV0FBTztBQUFJLFNBQUcsRUFBRUEsS0FBSyxDQUFDQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMkJELEtBQUssQ0FBQ0UsTUFBakMsQ0FBUDtBQUNELEdBRkEsQ0FESCxDQURGO0FBT0QsQ0EvQkQ7O0dBQU1mLFk7VUFja0NLLDJDOzs7S0FkbENMLFk7QUFpQ1NBLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL1tzdW1tb25lcl0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSAnYXNzZXJ0JztcblxuY29uc3QgU3VtbW9uZXJQYWdlID0gKCkgPT4ge1xuICAvLyBjb25zdCB7IGRhdGE6IG1hdGNoSGlzdG9yeSwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9tYXRjaGVzJywgYXN5bmMgdXJsID0+IHtcbiAgLy8gICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tYXRjaGVzJywge1xuICAvLyAgICAgcGFyYW1zOiB7XG4gIC8vICAgICAgIGFjY291bnRJZDogY29va2llcy5nZXQoJ2FjY291bnRJZCcpLFxuICAvLyAgICAgfSxcbiAgLy8gICB9KTtcbiAgLy8gICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgLy8gfSk7XG5cbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gIGNvbnN0IGFjY291bnRJZCA9IGNvb2tpZXMuZ2V0KGFjY291bnRJZCk7XG5cbiAgY29uc3QgeyBkYXRhOiBtYXRjaEhpc3RvcnksIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgYGh0dHBzOi8vYnIxLmFwaS5yaW90Z2FtZXMuY29tL2xvbC9tYXRjaC92NC9tYXRjaGxpc3RzL2J5LWFjY291bnQvJHthY2NvdW50SWR9P2VuZEluZGV4PTIwJmFwaV9rZXk9UkdBUEktMDEwZmQyYTAtYTM3MC00NGViLWFjYzItOTM5NDdiM2EyNTE2YFxuICApO1xuXG4gIGlmICghbWF0Y2hIaXN0b3J5KSB7XG4gICAgcmV0dXJuIDxwPmxvYWRpbmc8L3A+O1xuICB9XG5cbiAgY29uc29sZS5sb2cobWF0Y2hIaXN0b3J5KTtcblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHttYXRjaEhpc3RvcnkubWF0Y2hlcy5tYXAobWF0Y2ggPT4ge1xuICAgICAgICByZXR1cm4gPGxpIGtleT17bWF0Y2gudGltZXN0YW1wfT57bWF0Y2guZ2FtZUlkfTwvbGk+O1xuICAgICAgfSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1bW1vbmVyUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[summoner].tsx\n");

/***/ })

})