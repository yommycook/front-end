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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/reset.css */ \"./node_modules/antd/dist/reset.css\");\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/services */ \"./service/services.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Title = antd__WEBPACK_IMPORTED_MODULE_5__.Typography.Title;\nvar FireBaseAuth = new _service_services__WEBPACK_IMPORTED_MODULE_4__.FirebaseService();\nvar App = function(param) {\n    var Component = param.Component;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        state: false\n    }), isLogin = ref[0], setIsLogin = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), profileImg = ref1[0], setProfileImg = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(isLogin);\n        setProfileImg(isLogin.user.profile);\n    }, [\n        isLogin\n    ]);\n    var onGoogleLogin = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            var info, _user, uid, email, photoURL;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            FireBaseAuth.onLogin()\n                        ];\n                    case 1:\n                        info = _state.sent();\n                        if (info) {\n                            _user = info.user, uid = _user.uid, email = _user.email, photoURL = _user.photoURL;\n                            console.log(\"Login.jsx: \", uid);\n                            setIsLogin({\n                                state: true,\n                                user: {\n                                    uid: uid,\n                                    email: email,\n                                    profile: photoURL\n                                }\n                            });\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onGoogleLogin() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onSignOut = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            var signOut;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            FireBaseAuth.signOut()\n                        ];\n                    case 1:\n                        signOut = _state.sent();\n                        if (signOut) setIsLogin({\n                            state: false\n                        });\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSignOut() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"요미\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\",\n                    verticalAlign: \"middle\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                    children: \"요미\"\n                }, void 0, false, {\n                    fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\",\n                    verticalAlign: \"middle\",\n                    marginLeft: \"80px\",\n                    marginRight: \"40px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Input.Search, {}, void 0, false, {\n                    fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, _this),\n            isLogin.state ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\",\n                    verticalAlign: \"middle\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                        src: profileImg,\n                        style: {\n                            backgroundColor: \"slateblue\",\n                            verticalAlign: \"middle\"\n                        },\n                        size: \"large\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        size: \"small\",\n                        style: {\n                            margin: \"0 16px\",\n                            verticalAlign: \"middle\"\n                        },\n                        onClick: onSignOut,\n                        children: \"로그아웃\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                lineNumber: 64,\n                columnNumber: 17\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                size: \"small\",\n                style: {\n                    margin: \"0 16px\",\n                    verticalAlign: \"middle\"\n                },\n                onClick: onGoogleLogin,\n                children: \"로그인\"\n            }, void 0, false, {\n                fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                lineNumber: 79,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {\n                fileName: \"/Users/hyeonsugim/yommycook/pages/_app.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"XhYT06HVgRECzx17DEf1+IixQxk=\");\n_c = App;\nApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().elementType.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNkO1lBQ0xTLE9BQU8sQ0FBQ0QsS0FBSyxpQkFDViw4REFBQ29CLEtBQUc7Z0JBQUNDLEtBQUssRUFBRTtvQkFBRUMsT0FBTyxFQUFFLGNBQWM7b0JBQUVDLGFBQWEsRUFBRSxRQUFRO2lCQUFFOztrQ0FDNUQsOERBQUM5Qix3Q0FBTTt3QkFDSGtDLEdBQUcsRUFBRXhCLFVBQVU7d0JBQ2ZrQixLQUFLLEVBQUU7NEJBQUVPLGVBQWUsRUFBRSxXQUFXOzRCQUFFTCxhQUFhLEVBQUUsUUFBUTt5QkFBRTt3QkFDaEVNLElBQUksRUFBQyxPQUFPOzs7Ozs2QkFDTjtrQ0FDViw4REFBQ25DLHdDQUFNO3dCQUNIbUMsSUFBSSxFQUFDLE9BQU87d0JBQ1pSLEtBQUssRUFBRTs0QkFBRVMsTUFBTSxFQUFFLFFBQVE7NEJBQUVQLGFBQWEsRUFBRSxRQUFRO3lCQUFFO3dCQUNwRFEsT0FBTyxFQUFFaEIsU0FBUztrQ0FDckIsTUFFRDs7Ozs7NkJBQVM7Ozs7OztxQkFDUCxpQkFFTiw4REFBQ3JCLHdDQUFNO2dCQUNIbUMsSUFBSSxFQUFDLE9BQU87Z0JBQ1pSLEtBQUssRUFBRTtvQkFBRVMsTUFBTSxFQUFFLFFBQVE7b0JBQUVQLGFBQWEsRUFBRSxRQUFRO2lCQUFFO2dCQUNwRFEsT0FBTyxFQUFFdEIsYUFBYTswQkFDekIsS0FFRDs7Ozs7cUJBQVM7MEJBRWIsOERBQUNWLFNBQVM7Ozs7cUJBQUc7O29CQUNkLENBQ0w7QUFDTixDQUFDO0dBM0VLRCxHQUFHO0FBQUhBLEtBQUFBLEdBQUc7QUE2RVRBLEdBQUcsQ0FBQ2tDLFNBQVMsR0FBRztJQUNaakMsU0FBUyxFQUFFViwwRUFBZ0M7Q0FDOUMsQ0FBQztBQUVGLCtEQUFlUyxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCAnYW50ZC9kaXN0L3Jlc2V0LmNzcyc7XG5cbmltcG9ydCB7IFR5cG9ncmFwaHksIElucHV0LCBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3NlcnZpY2VzJztcblxuY29uc3QgeyBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcblxuY29uc3QgRmlyZUJhc2VBdXRoID0gbmV3IEZpcmViYXNlU2VydmljZSgpO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHsgc3RhdGU6IGZhbHNlIH0pO1xuICAgIGNvbnN0IFtwcm9maWxlSW1nLCBzZXRQcm9maWxlSW1nXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzTG9naW4pO1xuICAgICAgICBzZXRQcm9maWxlSW1nKGlzTG9naW4udXNlci5wcm9maWxlKTtcbiAgICB9LCBbaXNMb2dpbl0pO1xuICAgIGNvbnN0IG9uR29vZ2xlTG9naW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBGaXJlQmFzZUF1dGgub25Mb2dpbigpO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIHVzZXI6IHsgdWlkLCBlbWFpbCwgcGhvdG9VUkwgfSxcbiAgICAgICAgICAgIH0gPSBpbmZvO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luLmpzeDogJywgdWlkKTtcbiAgICAgICAgICAgIHNldElzTG9naW4oe1xuICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZTogcGhvdG9VUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uU2lnbk91dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lnbk91dCA9IGF3YWl0IEZpcmVCYXNlQXV0aC5zaWduT3V0KCk7XG4gICAgICAgIGlmIChzaWduT3V0KSBzZXRJc0xvZ2luKHsgc3RhdGU6IGZhbHNlIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgICAgICAgIDx0aXRsZT7smpTrr7g8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+XG4gICAgICAgICAgICAgICAgPFRpdGxlPuyalOuvuDwvVGl0bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc0MHB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lzTG9naW4uc3RhdGUgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZmlsZUltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3NsYXRlYmx1ZScsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcbiAgICAgICAgICAgICAgICAgICAgPjwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzAgMTZweCcsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblNpZ25PdXR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIOuhnOq3uOyVhOybg1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnMCAxNnB4JywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Hb29nbGVMb2dpbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiSGVhZCIsIlR5cG9ncmFwaHkiLCJJbnB1dCIsIkF2YXRhciIsIkJ1dHRvbiIsIkZpcmViYXNlU2VydmljZSIsIlRpdGxlIiwiRmlyZUJhc2VBdXRoIiwiQXBwIiwiQ29tcG9uZW50Iiwic3RhdGUiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsInByb2ZpbGVJbWciLCJzZXRQcm9maWxlSW1nIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJwcm9maWxlIiwib25Hb29nbGVMb2dpbiIsImluZm8iLCJ1aWQiLCJlbWFpbCIsInBob3RvVVJMIiwib25Mb2dpbiIsIm9uU2lnbk91dCIsInNpZ25PdXQiLCJtZXRhIiwiY2hhclNldCIsInRpdGxlIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIlNlYXJjaCIsInNyYyIsImJhY2tncm91bmRDb2xvciIsInNpemUiLCJtYXJnaW4iLCJvbkNsaWNrIiwicHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});