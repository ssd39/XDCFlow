"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [isLoader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const connectWallet = async ()=>{\n        setLoader(true);\n        if (typeof window.ethereum == \"undefined\") {\n            alert(\"Please install XDCPay\");\n            return;\n        }\n        try {\n            window.web3 = new window.Web3(window.ethereum);\n            await window.ethereum.enable();\n            const accounts = await window.web3.eth.getAccounts();\n            window.account = accounts[0].replace(\"0x\", \"xdc\");\n            const signature = await window.web3.eth.sign(window.web3.utils.sha3(\"challange: \".concat((Math.random() + 1).toString(36).substring(7))), window.account);\n            let x = new Promise((resolve, reject)=>{\n                setTimeout(()=>{\n                    resolve(signature);\n                }, 1000);\n            });\n            let out = await x();\n            console.log(out);\n            location.replace(\"/editor/index.html\");\n        } catch (e) {\n            console.error(e);\n            alert(\"Unlock wallet to continue\");\n        }\n        setLoader(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"TheFlowX\"\n                    }, void 0, false, {\n                        fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/web3.min.js\"\n            }, void 0, false, {\n                fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    fontSize: 120,\n                                    fontWeight: \"bold\"\n                                },\n                                className: \"gradientText\",\n                                children: \"TheFlow\"\n                            }, void 0, false, {\n                                fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    fontSize: 180,\n                                    color: \"white\",\n                                    fontFamily: \"monospace\",\n                                    fontWeight: \"bolder\"\n                                },\n                                className: \"spinnerX\",\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            fontSize: 40,\n                            color: \"white\"\n                        },\n                        children: \"No-Code DeFi Automation Platform.\"\n                    }, void 0, false, {\n                        fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    !isLoader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            cursor: \"pointer\",\n                            marginTop: 25,\n                            fontSize: 25,\n                            padding: 5,\n                            paddingLeft: 25,\n                            paddingRight: 25,\n                            borderRadius: 30,\n                            fontWeight: \"bold\"\n                        },\n                        onClick: async ()=>{\n                            connectWallet();\n                        },\n                        children: \"Let's Go\"\n                    }, void 0, false, {\n                        fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 24\n                    }, this),\n                    isLoader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__.ProgressBar, {\n                        height: \"80\",\n                        width: \"80\",\n                        ariaLabel: \"progress-bar-loading\",\n                        wrapperStyle: {},\n                        wrapperClass: \"progress-bar-wrapper\",\n                        borderColor: \"#F4442E\",\n                        barColor: \"#51E5FF\"\n                    }, void 0, false, {\n                        fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 23\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/ddl/MySSD/AutoDefi/WebApp/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Zb17Osf51SYQI+Ot5hTP484BeSg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7QUFPckIsQ0FBQztHQWpFdUJwRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnXG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gICdyZWFjdC1sb2FkZXItc3Bpbm5lcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2lzTG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpPT57XG4gICAgc2V0TG9hZGVyKHRydWUpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgWERDUGF5XCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeXtcbiAgICAgIHdpbmRvdy53ZWIzID0gbmV3IHdpbmRvdy5XZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKClcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LndlYjMuZXRoLmdldEFjY291bnRzKClcbiAgICAgIHdpbmRvdy5hY2NvdW50ID0gYWNjb3VudHNbMF0ucmVwbGFjZShcIjB4XCIsXCJ4ZGNcIik7XG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCB3aW5kb3cud2ViMy5ldGguc2lnbih3aW5kb3cud2ViMy51dGlscy5zaGEzKGBjaGFsbGFuZ2U6ICR7KE1hdGgucmFuZG9tKCkgKyAxKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpfWApLCB3aW5kb3cuYWNjb3VudCk7XG4gICAgICBsZXQgeCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICByZXNvbHZlKHNpZ25hdHVyZSlcbiAgICAgICAgfSwgMTAwMClcbiAgICAgIH0pIFxuICAgICAgbGV0IG91dCA9IGF3YWl0IHgoKVxuICAgICAgY29uc29sZS5sb2cob3V0KVxuICAgICAgbG9jYXRpb24ucmVwbGFjZShcIi9lZGl0b3IvaW5kZXguaHRtbFwiKVxuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIGFsZXJ0KFwiVW5sb2NrIHdhbGxldCB0byBjb250aW51ZVwiKVxuICAgIH1cbiAgICBzZXRMb2FkZXIoZmFsc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGhlRmxvd1g8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgXG4gICAgICA8L0hlYWQ+XG4gICAgICA8U2NyaXB0IHNyYz1cIi93ZWIzLm1pbi5qc1wiIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInfX0+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTIwLCBmb250V2VpZ2h0Oidib2xkJ319IGNsYXNzTmFtZT17J2dyYWRpZW50VGV4dCd9PlRoZUZsb3c8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTgwLCBjb2xvcjond2hpdGUnLCBmb250RmFtaWx5Oidtb25vc3BhY2UnLCBmb250V2VpZ2h0Oidib2xkZXInfX0gY2xhc3NOYW1lPXsnc3Bpbm5lclgnfT5YPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gIHN0eWxlPXt7Zm9udFNpemU6IDQwLCBjb2xvcjond2hpdGUnfX0+XG4gICAgICAgICAgTm8tQ29kZSBEZUZpIEF1dG9tYXRpb24gUGxhdGZvcm0uXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgeyFpc0xvYWRlciAmJiAoPGJ1dHRvbiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcicsIG1hcmdpblRvcDoyNSwgZm9udFNpemU6IDI1LCBwYWRkaW5nOjUsIHBhZGRpbmdMZWZ0OjI1LCBwYWRkaW5nUmlnaHQ6MjUsIGJvcmRlclJhZGl1czozMCwgZm9udFdlaWdodDonYm9sZCd9fSBvbkNsaWNrPXthc3luYyAoKT0+e1xuICAgICAgICAgIGNvbm5lY3RXYWxsZXQoKVxuICAgICAgICB9fT5MZXQncyBHbzwvYnV0dG9uPil9XG4gICAgICAgIHtpc0xvYWRlciAmJiAoPFByb2dyZXNzQmFyXG4gICAgICAgICAgaGVpZ2h0PVwiODBcIlxuICAgICAgICAgIHdpZHRoPVwiODBcIlxuICAgICAgICAgIGFyaWFMYWJlbD1cInByb2dyZXNzLWJhci1sb2FkaW5nXCJcbiAgICAgICAgICB3cmFwcGVyU3R5bGU9e3t9fVxuICAgICAgICAgIHdyYXBwZXJDbGFzcz1cInByb2dyZXNzLWJhci13cmFwcGVyXCJcbiAgICAgICAgICBib3JkZXJDb2xvciA9ICcjRjQ0NDJFJ1xuICAgICAgICAgIGJhckNvbG9yID0gJyM1MUU1RkYnXG4gICAgICAgIC8+KX1cbiAgICAgIDwvbWFpbj5cblxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiU2NyaXB0IiwiUHJvZ3Jlc3NCYXIiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJpc0xvYWRlciIsInNldExvYWRlciIsImNvbm5lY3RXYWxsZXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImFsZXJ0Iiwid2ViMyIsIldlYjMiLCJlbmFibGUiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudCIsInJlcGxhY2UiLCJzaWduYXR1cmUiLCJzaWduIiwidXRpbHMiLCJzaGEzIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwieCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsIm91dCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsImUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJzcmMiLCJtYWluIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInNwYW4iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJidXR0b24iLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXJSYWRpdXMiLCJvbkNsaWNrIiwiaGVpZ2h0Iiwid2lkdGgiLCJhcmlhTGFiZWwiLCJ3cmFwcGVyU3R5bGUiLCJ3cmFwcGVyQ2xhc3MiLCJib3JkZXJDb2xvciIsImJhckNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});