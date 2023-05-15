"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/services */ \"./service/services.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service_services__WEBPACK_IMPORTED_MODULE_5__]);\n_service_services__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst { Title  } = antd__WEBPACK_IMPORTED_MODULE_4__.Typography;\nconst FireBaseAuth = new _service_services__WEBPACK_IMPORTED_MODULE_5__.FirebaseService();\nconst App = ({ Component  })=>{\n    const { 0: isLogin , 1: setIsLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const onGoogleLogin = async ()=>{\n        const info = await FireBaseAuth.onLogin();\n        if (info) {\n            const { user: { uid , email , photoURL  } ,  } = info;\n            setIsLogin(true);\n            setUser({\n                uid,\n                email,\n                profile: photoURL\n            });\n        }\n    };\n    const onSignOut = async ()=>{\n        const signOut = await FireBaseAuth.signOut();\n        if (signOut) setIsLogin(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jinlee/front-end/pages/_app.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        href: \"/\",\n                        children: \"요미\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jinlee/front-end/pages/_app.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jinlee/front-end/pages/_app.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\",\n                    verticalAlign: \"middle\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                    children: \"요미\"\n                }, void 0, false, {\n                    fileName: \"/Users/jinlee/front-end/pages/_app.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jinlee/front-end/pages/_app.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\",\n                    verticalAlign: \"middle\",\n                    marginLeft: \"80px\",\n                    marginRight: \"40px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Input.Search, {}, void 0, false, {\n                    fileName: \"/Users/jinlee/front-end/pages/_app.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jinlee/front-end/pages/_app.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\",\n                    verticalAlign: \"middle\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                        src: user.profile,\n                        style: {\n                            backgroundColor: \"slateblue\",\n                            verticalAlign: \"middle\"\n                        },\n                        size: \"large\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jinlee/front-end/pages/_app.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        size: \"small\",\n                        style: {\n                            margin: \"0 16px\",\n                            verticalAlign: \"middle\"\n                        },\n                        onClick: onSignOut,\n                        children: \"로그아웃\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jinlee/front-end/pages/_app.js\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jinlee/front-end/pages/_app.js\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                size: \"small\",\n                style: {\n                    margin: \"0 16px\",\n                    verticalAlign: \"middle\"\n                },\n                onClick: onGoogleLogin,\n                children: \"로그인\"\n            }, void 0, false, {\n                fileName: \"/Users/jinlee/front-end/pages/_app.js\",\n                lineNumber: 68,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {\n                fileName: \"/Users/jinlee/front-end/pages/_app.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\nApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RFEsT0FBTyxFQUFFeEIsYUFBYTswQkFDekIsS0FFRDs7Ozs7eUJBQVM7MEJBRWIsOERBQUNMLFNBQVM7Ozs7eUJBQUc7O29CQUNkLENBQ0w7QUFDTixDQUFDO0FBRURELEdBQUcsQ0FBQytCLFNBQVMsR0FBRztJQUNaOUIsU0FBUyxFQUFFViwwRUFBZ0M7Q0FDOUMsQ0FBQztBQUVGLGlFQUFlUyxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b21teS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBJbnB1dCwgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcblxuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9zZXJ2aWNlcyc7XG5cbmNvbnN0IHsgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XG5cbmNvbnN0IEZpcmVCYXNlQXV0aCA9IG5ldyBGaXJlYmFzZVNlcnZpY2UoKTtcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcbiAgICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBvbkdvb2dsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgRmlyZUJhc2VBdXRoLm9uTG9naW4oKTtcbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICB1c2VyOiB7IHVpZCwgZW1haWwsIHBob3RvVVJMIH0sXG4gICAgICAgICAgICB9ID0gaW5mbztcbiAgICAgICAgICAgIHNldElzTG9naW4odHJ1ZSk7XG4gICAgICAgICAgICBzZXRVc2VyKHsgdWlkLCBlbWFpbCwgcHJvZmlsZTogcGhvdG9VUkwgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25TaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWduT3V0ID0gYXdhaXQgRmlyZUJhc2VBdXRoLnNpZ25PdXQoKTtcbiAgICAgICAgaWYgKHNpZ25PdXQpIHNldElzTG9naW4oZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgICAgICAgICAgPHRpdGxlIGhyZWY9Jy8nPuyalOuvuDwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fT5cbiAgICAgICAgICAgICAgICA8VGl0bGU+7JqU66+4PC9UaXRsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzgwcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzQwcHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aXNMb2dpbiA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyLnByb2ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdzbGF0ZWJsdWUnLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nbGFyZ2UnXG4gICAgICAgICAgICAgICAgICAgID48L0F2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcwIDE2cHgnLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TaWduT3V0fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICDroZzqt7jslYTsm4NcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzAgMTZweCcsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uR29vZ2xlTG9naW59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5BcHAucHJvcFR5cGVzID0ge1xuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsIkhlYWQiLCJUeXBvZ3JhcGh5IiwiSW5wdXQiLCJBdmF0YXIiLCJCdXR0b24iLCJGaXJlYmFzZVNlcnZpY2UiLCJUaXRsZSIsIkZpcmVCYXNlQXV0aCIsIkFwcCIsIkNvbXBvbmVudCIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwidXNlciIsInNldFVzZXIiLCJvbkdvb2dsZUxvZ2luIiwiaW5mbyIsIm9uTG9naW4iLCJ1aWQiLCJlbWFpbCIsInBob3RvVVJMIiwicHJvZmlsZSIsIm9uU2lnbk91dCIsInNpZ25PdXQiLCJtZXRhIiwiY2hhclNldCIsInRpdGxlIiwiaHJlZiIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJTZWFyY2giLCJzcmMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaXplIiwibWFyZ2luIiwib25DbGljayIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./service/services.js":
/*!*****************************!*\
  !*** ./service/services.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FirebaseService\": () => (/* binding */ FirebaseService)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n/** for DB - TO DO */ // import { getDatabase, ref, set, onValue, remove, off } from 'firebase/database';\n// import axios from 'axios';\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBRu5d6-kV0yKWFdsqP6d7VE8XSuTby-i4\",\n    authDomain: `${\"yummy-55c41\"}.firebaseapp.com`,\n    projectId: \"yummy-55c41\",\n    storageBucket: `${\"yummy-55c41\"}.yummy-55c41.appspot.com`,\n    messagingSenderId: \"664078761840\",\n    appId: \"1:664078761840:web:8894bc3f52a073bd9899b5\",\n    measurementId: \"G-NFXFW2HVFD\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nclass FirebaseService {\n    checkLoginState = (setLoginState)=>{\n        const myAuth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(myAuth, (user)=>{\n            console.log(\"check Login\", user);\n            if (user) {\n                const { uid , email , photoURL  } = user;\n                console.log(\"services: \", uid);\n                setLoginState({\n                    state: true,\n                    user: {\n                        uid,\n                        email,\n                        profile: photoURL\n                    }\n                });\n            }\n        });\n    };\n    onLogin = async ()=>{\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\n        try {\n            const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\n            const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, provider);\n            // This gives you a Google Access Token. You can use it to access the Google API.\n            const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider.credentialFromResult(result);\n            const token = credential.accessToken;\n            // The signed-in user info.\n            const user = result.user;\n            return {\n                type: \"success\",\n                token,\n                user\n            };\n        } catch (error) {\n            // Handle Errors here.\n            const errorCode = error.code;\n            const errorMessage = error.message;\n            // The email of the user's account used.\n            const email = error.email;\n            // The AuthCredential type that was used.\n            const credential_1 = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider.credentialFromError(error);\n            return {\n                type: \"error\",\n                errorCode,\n                errorMessage,\n                email,\n                credential_1\n            };\n        }\n    };\n    signOut = async ()=>{\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\n            return true;\n        } catch (error) {\n            console.log(error);\n            return false;\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hCLEVBQUUsT0FBT1EsS0FBSyxFQUFFO1lBQ1poQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2UsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUMsQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW9tbXkvLi9zZXJ2aWNlL3NlcnZpY2VzLmpzP2NlMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQge1xuICAgIEdvb2dsZUF1dGhQcm92aWRlcixcbiAgICBzaWduSW5XaXRoUG9wdXAsXG4gICAgc2lnbk91dCxcbiAgICBnZXRBdXRoLFxuICAgIG9uQXV0aFN0YXRlQ2hhbmdlZCxcbn0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG4vKiogZm9yIERCIC0gVE8gRE8gKi9cbi8vIGltcG9ydCB7IGdldERhdGFiYXNlLCByZWYsIHNldCwgb25WYWx1ZSwgcmVtb3ZlLCBvZmYgfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSc7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSUtFWSxcbiAgICBhdXRoRG9tYWluOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lEfS5maXJlYmFzZWFwcC5jb21gLFxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCxcbiAgICBzdG9yYWdlQnVja2V0OiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lEfS55dW1teS01NWM0MS5hcHBzcG90LmNvbWAsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gICAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9JRCxcbiAgICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NRUFTVVJFTUVOVF9JRCxcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VTZXJ2aWNlIHtcbiAgICBjaGVja0xvZ2luU3RhdGUgPSAoc2V0TG9naW5TdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBteUF1dGggPSBnZXRBdXRoKCk7XG4gICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChteUF1dGgsICh1c2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2sgTG9naW4nLCB1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB1aWQsIGVtYWlsLCBwaG90b1VSTCB9ID0gdXNlcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VydmljZXM6ICcsIHVpZCk7XG4gICAgICAgICAgICAgICAgc2V0TG9naW5TdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGU6IHBob3RvVVJMLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25Mb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxuICAgICAgICAgICAgY29uc3QgY3JlZGVudGlhbCA9IEdvb2dsZUF1dGhQcm92aWRlci5jcmVkZW50aWFsRnJvbVJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgLy8gVGhlIHNpZ25lZC1pbiB1c2VyIGluZm8uXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gcmVzdWx0LnVzZXI7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cbiAgICAgICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgLy8gVGhlIGVtYWlsIG9mIHRoZSB1c2VyJ3MgYWNjb3VudCB1c2VkLlxuICAgICAgICAgICAgY29uc3QgZW1haWwgPSBlcnJvci5lbWFpbDtcbiAgICAgICAgICAgIC8vIFRoZSBBdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXG4gICAgICAgICAgICBjb25zdCBjcmVkZW50aWFsXzEgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21FcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgZXJyb3JDb2RlLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsXzEsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBzaWduT3V0KGF1dGgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduT3V0IiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSUtFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19QUk9KRUNUX0lEIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfQVBQX0lEIiwibWVhc3VyZW1lbnRJZCIsIk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lEIiwiYXBwIiwiRmlyZWJhc2VTZXJ2aWNlIiwiY2hlY2tMb2dpblN0YXRlIiwic2V0TG9naW5TdGF0ZSIsIm15QXV0aCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidWlkIiwiZW1haWwiLCJwaG90b1VSTCIsInN0YXRlIiwicHJvZmlsZSIsIm9uTG9naW4iLCJhdXRoIiwicHJvdmlkZXIiLCJyZXN1bHQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbEZyb21SZXN1bHQiLCJ0b2tlbiIsImFjY2Vzc1Rva2VuIiwidHlwZSIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJjcmVkZW50aWFsXzEiLCJjcmVkZW50aWFsRnJvbUVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./service/services.js\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();