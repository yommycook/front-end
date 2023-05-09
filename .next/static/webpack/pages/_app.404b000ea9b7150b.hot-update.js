"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/reset.css */ \"./node_modules/antd/dist/reset.css\");\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/services */ \"./service/services.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Title = antd__WEBPACK_IMPORTED_MODULE_5__.Typography.Title;\nvar FireBaseAuth = new _service_services__WEBPACK_IMPORTED_MODULE_4__.FirebaseService();\nvar App = function(param) {\n    var Component = param.Component;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        state: false\n    }), isLogin = ref[0], setLogin = ref[1];\n    var onGoogleLogin = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            var info, _user, uid, email, photoURL;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            FireBaseAuth.onLogin()\n                        ];\n                    case 1:\n                        info = _state.sent();\n                        if (info) {\n                            _user = info.user, uid = _user.uid, email = _user.email, photoURL = _user.photoURL;\n                            console.log(\"Login.jsx: \", uid);\n                            setLogin({\n                                state: true,\n                                user: {\n                                    uid: uid,\n                                    email: email,\n                                    profile: photoURL\n                                }\n                            });\n                        }\n                        console.log(isLogin);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onGoogleLogin() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onSignOut = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            var signOut;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            FireBaseAuth.signOut()\n                        ];\n                    case 1:\n                        signOut = _state.sent();\n                        if (signOut) setLogin({\n                            state: false\n                        });\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSignOut() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"요미\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\",\n                    verticalAlign: \"middle\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                    children: \"요미\"\n                }, void 0, false, {\n                    fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\",\n                    verticalAlign: \"middle\",\n                    marginLeft: \"80px\",\n                    marginRight: \"40px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Input.Search, {}, void 0, false, {\n                    fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, _this),\n            isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\",\n                    verticalAlign: \"middle\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                        style: {\n                            backgroundColor: \"slateblue\",\n                            verticalAlign: \"middle\"\n                        },\n                        size: \"large\",\n                        children: \"지니\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        size: \"small\",\n                        style: {\n                            margin: \"0 16px\",\n                            verticalAlign: \"middle\"\n                        },\n                        onClick: onSignOut,\n                        children: \"로그아웃\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                lineNumber: 61,\n                columnNumber: 17\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                size: \"small\",\n                style: {\n                    margin: \"0 16px\",\n                    verticalAlign: \"middle\"\n                },\n                onClick: onGoogleLogin,\n                children: \"로그인\"\n            }, void 0, false, {\n                fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {\n                fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"iDVhK+ORnfLhD6dOXsnR9KNsn9I=\");\n_c = App;\nApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().elementType.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUF3QztBQUNMO0FBQ047QUFFQTtBQUU0QjtBQUVIO0FBRXRELElBQU0sS0FBTyxHQUFLSSxrREFBTDtBQUViLElBQU1NLFlBQVksR0FBRyxJQUFJRiw4REFBZSxFQUFFO0FBRTFDLElBQU1HLEdBQUcsR0FBRyxnQkFBbUI7UUFBaEJDLFNBQVMsU0FBVEEsU0FBUzs7SUFDcEIsSUFBNEJYLEdBQTBCLEdBQTFCQSwrQ0FBUSxDQUFDO1FBQUVZLEtBQUssRUFBRSxLQUFLO0tBQUUsQ0FBQyxFQUEvQ0MsT0FBTyxHQUFjYixHQUEwQixHQUF4QyxFQUFFYyxRQUFRLEdBQUlkLEdBQTBCLEdBQTlCO0lBRXhCLElBQU1lLGFBQWE7bUJBQUcsK0ZBQVk7Z0JBQ3hCQyxJQUFJLFNBR01DLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxRQUFROzs7O3dCQUh2Qjs7NEJBQU1WLFlBQVksQ0FBQ1csT0FBTyxFQUFFOzBCQUFBOzt3QkFBbkNKLElBQUksR0FBRyxhQUE0Qjt3QkFDekMsSUFBSUEsSUFBSSxFQUFFO29DQUdGQSxJQUFJLENBREpLLElBQUksRUFBSUosR0FBRyxTQUFIQSxHQUFHLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsQ0FDdkI7NEJBQ1RHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRU4sR0FBRyxDQUFDLENBQUM7NEJBQ2hDSCxRQUFRLENBQUM7Z0NBQ0xGLEtBQUssRUFBRSxJQUFJO2dDQUNYUyxJQUFJLEVBQUU7b0NBQ0ZKLEdBQUcsRUFBSEEsR0FBRztvQ0FDSEMsS0FBSyxFQUFMQSxLQUFLO29DQUNMTSxPQUFPLEVBQUVMLFFBQVE7aUNBQ3BCOzZCQUNKLENBQUMsQ0FBQzt3QkFDUCxDQUFDO3dCQUNERyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsT0FBTyxDQUFDLENBQUM7Ozs7OztRQUN6QixDQUFDO3dCQWpCS0UsYUFBYTs7O09BaUJsQjtJQUVELElBQU1VLFNBQVM7bUJBQUcsK0ZBQVk7Z0JBQ3BCQyxPQUFPOzs7O3dCQUFHOzs0QkFBTWpCLFlBQVksQ0FBQ2lCLE9BQU8sRUFBRTswQkFBQTs7d0JBQXRDQSxPQUFPLEdBQUcsYUFBNEI7d0JBQzVDLElBQUlBLE9BQU8sRUFBRVosUUFBUSxDQUFDOzRCQUFFRixLQUFLLEVBQUUsS0FBSzt5QkFBRSxDQUFDLENBQUM7Ozs7OztRQUM1QyxDQUFDO3dCQUhLYSxTQUFTOzs7T0FHZDtJQUNELHFCQUNJOzswQkFDSSw4REFBQ3ZCLGtEQUFJOztrQ0FDRCw4REFBQ3lCLE1BQUk7d0JBQUNDLE9BQU8sRUFBQyxPQUFPOzs7Ozs2QkFBRztrQ0FDeEIsOERBQUNDLE9BQUs7a0NBQUMsSUFBRTs7Ozs7NkJBQVE7Ozs7OztxQkFDZDswQkFDUCw4REFBQ0MsS0FBRztnQkFBQ0MsS0FBSyxFQUFFO29CQUFFQyxPQUFPLEVBQUUsY0FBYztvQkFBRUMsYUFBYSxFQUFFLFFBQVE7aUJBQUU7MEJBQzVELDRFQUFDekIsS0FBSzs4QkFBQyxJQUFFOzs7Ozt5QkFBUTs7Ozs7cUJBQ2Y7MEJBQ04sOERBQUNzQixLQUFHO2dCQUNBQyxLQUFLLEVBQUU7b0JBQ0hDLE9BQU8sRUFBRSxjQUFjO29CQUN2QkMsYUFBYSxFQUFFLFFBQVE7b0JBQ3ZCQyxVQUFVLEVBQUUsTUFBTTtvQkFDbEJDLFdBQVcsRUFBRSxNQUFNO2lCQUN0QjswQkFFRCw0RUFBQy9CLDhDQUFZOzs7O3lCQUFHOzs7OztxQkFDZDtZQUNMUyxPQUFPLGlCQUNKLDhEQUFDaUIsS0FBRztnQkFBQ0MsS0FBSyxFQUFFO29CQUFFQyxPQUFPLEVBQUUsY0FBYztvQkFBRUMsYUFBYSxFQUFFLFFBQVE7aUJBQUU7O2tDQUM1RCw4REFBQzVCLHdDQUFNO3dCQUNIMEIsS0FBSyxFQUFFOzRCQUFFTSxlQUFlLEVBQUUsV0FBVzs0QkFBRUosYUFBYSxFQUFFLFFBQVE7eUJBQUU7d0JBQ2hFSyxJQUFJLEVBQUMsT0FBTztrQ0FDZixJQUVEOzs7Ozs2QkFBUztrQ0FDVCw4REFBQ2hDLHdDQUFNO3dCQUNIZ0MsSUFBSSxFQUFDLE9BQU87d0JBQ1pQLEtBQUssRUFBRTs0QkFBRVEsTUFBTSxFQUFFLFFBQVE7NEJBQUVOLGFBQWEsRUFBRSxRQUFRO3lCQUFFO3dCQUNwRE8sT0FBTyxFQUFFZixTQUFTO2tDQUNyQixNQUVEOzs7Ozs2QkFBUzs7Ozs7O3FCQUNQLGlCQUVOLDhEQUFDbkIsd0NBQU07Z0JBQ0hnQyxJQUFJLEVBQUMsT0FBTztnQkFDWlAsS0FBSyxFQUFFO29CQUFFUSxNQUFNLEVBQUUsUUFBUTtvQkFBRU4sYUFBYSxFQUFFLFFBQVE7aUJBQUU7Z0JBQ3BETyxPQUFPLEVBQUV6QixhQUFhOzBCQUN6QixLQUVEOzs7OztxQkFBUzswQkFFYiw4REFBQ0osU0FBUzs7OztxQkFBRzs7b0JBQ2QsQ0FDTDtBQUNOLENBQUM7R0F6RUtELEdBQUc7QUFBSEEsS0FBQUEsR0FBRztBQTJFVEEsR0FBRyxDQUFDK0IsU0FBUyxHQUFHO0lBQ1o5QixTQUFTLEVBQUVWLDBFQUFnQztDQUM5QyxDQUFDO0FBRUYsK0RBQWVTLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCAnYW50ZC9kaXN0L3Jlc2V0LmNzcyc7XG5cbmltcG9ydCB7IFR5cG9ncmFwaHksIElucHV0LCBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3NlcnZpY2VzJztcblxuY29uc3QgeyBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcblxuY29uc3QgRmlyZUJhc2VBdXRoID0gbmV3IEZpcmViYXNlU2VydmljZSgpO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZSh7IHN0YXRlOiBmYWxzZSB9KTtcblxuICAgIGNvbnN0IG9uR29vZ2xlTG9naW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBGaXJlQmFzZUF1dGgub25Mb2dpbigpO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIHVzZXI6IHsgdWlkLCBlbWFpbCwgcGhvdG9VUkwgfSxcbiAgICAgICAgICAgIH0gPSBpbmZvO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luLmpzeDogJywgdWlkKTtcbiAgICAgICAgICAgIHNldExvZ2luKHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGU6IHBob3RvVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhpc0xvZ2luKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25TaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWduT3V0ID0gYXdhaXQgRmlyZUJhc2VBdXRoLnNpZ25PdXQoKTtcbiAgICAgICAgaWYgKHNpZ25PdXQpIHNldExvZ2luKHsgc3RhdGU6IGZhbHNlIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgICAgICAgIDx0aXRsZT7smpTrr7g8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+XG4gICAgICAgICAgICAgICAgPFRpdGxlPuyalOuvuDwvVGl0bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc0MHB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lzTG9naW4gPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3NsYXRlYmx1ZScsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAg7KeA64uIXG4gICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzAgMTZweCcsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblNpZ25PdXR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIOuhnOq3uOyVhOybg1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnMCAxNnB4JywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Hb29nbGVMb2dpbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiSGVhZCIsIlR5cG9ncmFwaHkiLCJJbnB1dCIsIkF2YXRhciIsIkJ1dHRvbiIsIkZpcmViYXNlU2VydmljZSIsIlRpdGxlIiwiRmlyZUJhc2VBdXRoIiwiQXBwIiwiQ29tcG9uZW50Iiwic3RhdGUiLCJpc0xvZ2luIiwic2V0TG9naW4iLCJvbkdvb2dsZUxvZ2luIiwiaW5mbyIsInVpZCIsImVtYWlsIiwicGhvdG9VUkwiLCJvbkxvZ2luIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJwcm9maWxlIiwib25TaWduT3V0Iiwic2lnbk91dCIsIm1ldGEiLCJjaGFyU2V0IiwidGl0bGUiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiU2VhcmNoIiwiYmFja2dyb3VuZENvbG9yIiwic2l6ZSIsIm1hcmdpbiIsIm9uQ2xpY2siLCJwcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});