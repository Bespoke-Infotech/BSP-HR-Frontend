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

/***/ "./views/components/Sidebar/Sidebar.tsx":
/*!**********************************************!*\
  !*** ./views/components/Sidebar/Sidebar.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/logo.svg */ \"./views/assets/images/logo.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/routes */ \"./views/helpers/routes.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/AuthContext */ \"./views/context/AuthContext.tsx\");\n/* harmony import */ var _helpers_localStorageKeys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/localStorageKeys */ \"./views/helpers/localStorageKeys.ts\");\n/* harmony import */ var _helpers_data_Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/data/Sidebar */ \"./views/helpers/data/Sidebar.tsx\");\n/* harmony import */ var _helpers_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/context */ \"./views/helpers/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Sidebar() {\n    var _localStorage;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const ActiveLink = (href)=>router.pathname.startsWith(href);\n    const { logout } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_7__.useAuth)();\n    const { clickedIndex, setClickedIndex } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_context__WEBPACK_IMPORTED_MODULE_10__.ClickedIndexContext);\n    // Load the data from localStorage when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedData = localStorage.getItem(\"clicked\");\n        if (savedData) {\n            setClickedIndex(parseInt(savedData));\n        }\n    }, [\n        setClickedIndex\n    ]);\n    // Save the data to localStorage whenever it changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"clicked\", clickedIndex.toString());\n    }, [\n        clickedIndex\n    ]);\n    const toggle = (index)=>{\n        if (clickedIndex === index) {\n            setClickedIndex(1000000);\n        } else {\n            setClickedIndex(index);\n        }\n    };\n    const handleLogout = ()=>{\n        logout();\n        next_router__WEBPACK_IMPORTED_MODULE_6___default().push(_helpers_routes__WEBPACK_IMPORTED_MODULE_5__.ROUTES.LANDINGPAGE);\n    };\n    const user =  true ? (_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem(_helpers_localStorageKeys__WEBPACK_IMPORTED_MODULE_8__.LOCAL_STORAGE_KEYS.USER) : 0;\n    const users = user ? JSON.parse(user) : null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col max-w-[250px] w-full h-screen border border-r-[#B9B9B930] fixed left-0 top-0 z-50 overflow-scroll\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center px-6 py-3 border border-b-[#B9B9B930] \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        alt: \"bespoke-logo\",\n                        className: \"\",\n                        style: {\n                            width: \"200px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4 flex flex-col gap-[24px] \",\n                    children: _helpers_data_Sidebar__WEBPACK_IMPORTED_MODULE_9__.sidebar.map((item, index)=>{\n                        var _item_menus;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-[8px]\",\n                            children: [\n                                index > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                    fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[16px] font-[500] text-[#686868] px-2 \",\n                                    children: item === null || item === void 0 ? void 0 : item.section\n                                }, void 0, false, {\n                                    fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col gap-[12px] \",\n                                    children: item === null || item === void 0 ? void 0 : (_item_menus = item.menus) === null || _item_menus === void 0 ? void 0 : _item_menus.map((menu, index)=>(menu === null || menu === void 0 ? void 0 : menu.subMenus.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex gap-[4px] items-center px-2 py-[6px] cursor-pointer \".concat(ActiveLink(menu === null || menu === void 0 ? void 0 : menu.path) && \"bg-[#FFFAF5] text-bespokeOrange \", \" \"),\n                                                    onClick: ()=>toggle(index),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                            src: ActiveLink(menu === null || menu === void 0 ? void 0 : menu.path) ? menu.activeIcon : menu.icon,\n                                                            alt: \"menu-icon\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-[16px] whitespace-nowrap \",\n                                                            children: menu.menu\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, index, true, {\n                                                    fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 23\n                                                }, this),\n                                                clickedIndex === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex flex-col\",\n                                                    children: menu.subMenus.map((subMenu, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                            href: subMenu.path,\n                                                            className: \"py-1 pl-[28px] pr-1 text-[15px] whitespace-nowrap \".concat(ActiveLink(subMenu === null || subMenu === void 0 ? void 0 : subMenu.path) && \"text-bespokeOrange \", \" \"),\n                                                            children: subMenu === null || subMenu === void 0 ? void 0 : subMenu.subMenu\n                                                        }, index, false, {\n                                                            fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 29\n                                                        }, this))\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 21\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: menu.path,\n                                            className: \"flex gap-[4px] items-center px-2 py-[6px] \".concat(ActiveLink(menu === null || menu === void 0 ? void 0 : menu.path) && \"bg-[#FFFAF5] text-bespokeOrange \", \" \"),\n                                            onClick: ()=>setClickedIndex(1000000),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    src: ActiveLink(menu === null || menu === void 0 ? void 0 : menu.path) ? menu.activeIcon : menu.icon,\n                                                    alt: \"menu-icon\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-[16px] whitespace-nowrap \",\n                                                    children: menu.menu\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                                                    lineNumber: 121,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 21\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mict-explorers-ltd/Projects/Bespoke/BSP-HR-Frontend/views/components/Sidebar/Sidebar.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Sidebar, \"gE+xE2CDwXyQCHDOiIY4dDbXiYk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_7__.useAuth\n    ];\n});\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3cy9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNMO0FBQ2pCO0FBQ0Y7QUFDaUI7QUFDRTtBQUNJO0FBQ2dCO0FBQ2Y7QUFDTztBQUU3QyxTQUFTYTtRQWtDaEJDOztJQWpDTixNQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTVEsYUFBYSxDQUFDQyxPQUFpQkYsT0FBT0csUUFBUSxDQUFDQyxVQUFVLENBQUNGO0lBQ2hFLE1BQU0sRUFBRUcsTUFBTSxFQUFFLEdBQUdYLDZEQUFPQTtJQUMxQixNQUFNLEVBQUVZLFlBQVksRUFBRUMsZUFBZSxFQUFFLEdBQUdyQixpREFBVUEsQ0FBQ1csa0VBQW1CQTtJQUV4RSw0REFBNEQ7SUFDNURWLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXFCLFlBQVlULGFBQWFVLE9BQU8sQ0FBQztRQUN2QyxJQUFJRCxXQUFXO1lBQ2JELGdCQUFnQkcsU0FBU0Y7UUFDM0I7SUFDRixHQUFHO1FBQUNEO0tBQWdCO0lBRXBCLG9EQUFvRDtJQUNwRHBCLGdEQUFTQSxDQUFDO1FBQ1JZLGFBQWFZLE9BQU8sQ0FBQyxXQUFXTCxhQUFhTSxRQUFRO0lBQ3ZELEdBQUc7UUFBQ047S0FBYTtJQUVqQixNQUFNTyxTQUFTLENBQUNDO1FBQ2QsSUFBSVIsaUJBQWlCUSxPQUFPO1lBQzFCUCxnQkFBZ0I7UUFDbEIsT0FBTztZQUNMQSxnQkFBZ0JPO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNQyxlQUFlO1FBQ25CVjtRQUNBYix1REFBVyxDQUFDRCxtREFBTUEsQ0FBQzBCLFdBQVc7SUFDaEM7SUFFQSxNQUFNQyxPQUNKLEtBQTZCLElBQ3pCbkIsZ0JBQUFBLDBCQUFBQSxvQ0FBQUEsY0FBY1UsT0FBTyxDQUFDZCx5RUFBa0JBLENBQUN3QixJQUFJLElBQzdDLENBQUk7SUFFVixNQUFNQyxRQUFRRixPQUFPRyxLQUFLQyxLQUFLLENBQUNKLFFBQVE7SUFFeEMscUJBQ0U7a0JBQ0UsNEVBQUNLO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ25DLG1EQUFLQTt3QkFBQ29DLEtBQUtyQywrREFBSUE7d0JBQUVzQyxLQUFJO3dCQUFlRixXQUFVO3dCQUFHRyxPQUFPOzRCQUFDQyxPQUFPO3dCQUFPOzs7Ozs7Ozs7Ozs4QkFFMUUsOERBQUNMO29CQUFJQyxXQUFVOzhCQUNaNUIsMERBQU9BLENBQUNpQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTWhCOzRCQVNiZ0I7NkNBUkwsOERBQUNQOzRCQUFJQyxXQUFVOztnQ0FDWlYsUUFBTSxtQkFDTCw4REFBQ2lCOzs7Ozs4Q0FFSCw4REFBQ0M7b0NBQUVSLFdBQVU7OENBQ1ZNLGlCQUFBQSwyQkFBQUEsS0FBTUcsT0FBTzs7Ozs7OzhDQUVoQiw4REFBQ1Y7b0NBQUlDLFdBQVU7OENBQ1pNLGlCQUFBQSw0QkFBQUEsY0FBQUEsS0FBTUksS0FBSyxjQUFYSixrQ0FBQUEsWUFBYUQsR0FBRyxDQUFDLENBQUNNLE1BQU1yQixRQUN2QnFCLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTUMsUUFBUSxDQUFDQyxNQUFNLElBQUcsa0JBQ3RCLDhEQUFDZDs7OERBQ0MsOERBQUNBO29EQUNDQyxXQUFXLDREQUdWLE9BRkN2QixXQUFXa0MsaUJBQUFBLDJCQUFBQSxLQUFNRyxJQUFJLEtBQ3JCLG9DQUNEO29EQUNEQyxTQUFTLElBQU0xQixPQUFPQzs7c0VBR3RCLDhEQUFDekIsbURBQUtBOzREQUNKb0MsS0FDRXhCLFdBQVdrQyxpQkFBQUEsMkJBQUFBLEtBQU1HLElBQUksSUFBSUgsS0FBS0ssVUFBVSxHQUFHTCxLQUFLTSxJQUFJOzREQUV0RGYsS0FBSTs7Ozs7O3NFQUVOLDhEQUFDTTs0REFBRVIsV0FBVTtzRUFDVlcsS0FBS0EsSUFBSTs7Ozs7OzttREFUUHJCOzs7OztnREFZTlIsaUJBQWlCUSx1QkFDaEIsOERBQUNTO29EQUFJQyxXQUFVOzhEQUNaVyxLQUFLQyxRQUFRLENBQUNQLEdBQUcsQ0FBQyxDQUFDYSxTQUFTNUIsc0JBQzNCLDhEQUFDeEIsa0RBQUlBOzREQUNIWSxNQUFNd0MsUUFBUUosSUFBSTs0REFFbEJkLFdBQVcscURBR1YsT0FGQ3ZCLFdBQVd5QyxvQkFBQUEsOEJBQUFBLFFBQVNKLElBQUksS0FDeEIsdUJBQ0Q7c0VBRUFJLG9CQUFBQSw4QkFBQUEsUUFBU0EsT0FBTzsyREFOWjVCOzs7Ozs7Ozs7OzsyQ0F4QkxBOzs7O2lFQXFDViw4REFBQ3hCLGtEQUFJQTs0Q0FDSFksTUFBTWlDLEtBQUtHLElBQUk7NENBRWZkLFdBQVcsNkNBR1YsT0FGQ3ZCLFdBQVdrQyxpQkFBQUEsMkJBQUFBLEtBQU1HLElBQUksS0FDckIsb0NBQ0Q7NENBQ0RDLFNBQVMsSUFBTWhDLGdCQUFnQjs7OERBRS9CLDhEQUFDbEIsbURBQUtBO29EQUNKb0MsS0FDRXhCLFdBQVdrQyxpQkFBQUEsMkJBQUFBLEtBQU1HLElBQUksSUFBSUgsS0FBS0ssVUFBVSxHQUFHTCxLQUFLTSxJQUFJO29EQUV0RGYsS0FBSTs7Ozs7OzhEQUVOLDhEQUFDTTtvREFBRVIsV0FBVTs4REFDVlcsS0FBS0EsSUFBSTs7Ozs7OzsyQ0FkUHJCOzs7Ozs7Ozs7OzsyQkFqRCtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkUxRDtHQTFId0JoQjs7UUFDUEwsa0RBQVNBO1FBRUxDLHlEQUFPQTs7O0tBSEpJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3ZpZXdzL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLnRzeD80ZGI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3JvdXRlc1wiO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IHsgTE9DQUxfU1RPUkFHRV9LRVlTIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvbG9jYWxTdG9yYWdlS2V5c1wiO1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2RhdGEvU2lkZWJhclwiO1xuaW1wb3J0IHsgQ2xpY2tlZEluZGV4Q29udGV4dCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IEFjdGl2ZUxpbmsgPSAoaHJlZjogc3RyaW5nKSA9PiByb3V0ZXIucGF0aG5hbWUuc3RhcnRzV2l0aChocmVmKTtcbiAgY29uc3QgeyBsb2dvdXQgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyBjbGlja2VkSW5kZXgsIHNldENsaWNrZWRJbmRleCB9ID0gdXNlQ29udGV4dChDbGlja2VkSW5kZXhDb250ZXh0KTtcblxuICAvLyBMb2FkIHRoZSBkYXRhIGZyb20gbG9jYWxTdG9yYWdlIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzYXZlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNsaWNrZWRcIik7XG4gICAgaWYgKHNhdmVkRGF0YSkge1xuICAgICAgc2V0Q2xpY2tlZEluZGV4KHBhcnNlSW50KHNhdmVkRGF0YSkpO1xuICAgIH1cbiAgfSwgW3NldENsaWNrZWRJbmRleF0pO1xuXG4gIC8vIFNhdmUgdGhlIGRhdGEgdG8gbG9jYWxTdG9yYWdlIHdoZW5ldmVyIGl0IGNoYW5nZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNsaWNrZWRcIiwgY2xpY2tlZEluZGV4LnRvU3RyaW5nKCkpO1xuICB9LCBbY2xpY2tlZEluZGV4XSk7XG5cbiAgY29uc3QgdG9nZ2xlID0gKGluZGV4OiBhbnkpID0+IHtcbiAgICBpZiAoY2xpY2tlZEluZGV4ID09PSBpbmRleCkge1xuICAgICAgc2V0Q2xpY2tlZEluZGV4KDEwMDAwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDbGlja2VkSW5kZXgoaW5kZXgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9nb3V0KCk7XG4gICAgUm91dGVyLnB1c2goUk9VVEVTLkxBTkRJTkdQQUdFKTtcbiAgfTtcblxuICBjb25zdCB1c2VyID1cbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICA/IGxvY2FsU3RvcmFnZT8uZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0tFWVMuVVNFUilcbiAgICAgIDogbnVsbDtcblxuICBjb25zdCB1c2VycyA9IHVzZXIgPyBKU09OLnBhcnNlKHVzZXIpIDogbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWF4LXctWzI1MHB4XSB3LWZ1bGwgaC1zY3JlZW4gYm9yZGVyIGJvcmRlci1yLVsjQjlCOUI5MzBdIGZpeGVkIGxlZnQtMCB0b3AtMCB6LTUwIG92ZXJmbG93LXNjcm9sbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTYgcHktMyBib3JkZXIgYm9yZGVyLWItWyNCOUI5QjkzMF0gXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz17TG9nb30gYWx0PVwiYmVzcG9rZS1sb2dvXCIgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3t3aWR0aDogJzIwMHB4J319IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4IGZsZXgtY29sIGdhcC1bMjRweF0gXCI+XG4gICAgICAgICAge3NpZGViYXIubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC1bOHB4XVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICB7aW5kZXg+MCAmJlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE2cHhdIGZvbnQtWzUwMF0gdGV4dC1bIzY4Njg2OF0gcHgtMiBcIj5cbiAgICAgICAgICAgICAgICB7aXRlbT8uc2VjdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLVsxMnB4XSBcIj5cbiAgICAgICAgICAgICAgICB7aXRlbT8ubWVudXM/Lm1hcCgobWVudSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICBtZW51Py5zdWJNZW51cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZ2FwLVs0cHhdIGl0ZW1zLWNlbnRlciBweC0yIHB5LVs2cHhdIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGl2ZUxpbmsobWVudT8ucGF0aCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1bI0ZGRkFGNV0gdGV4dC1iZXNwb2tlT3JhbmdlIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY3RpdmVMaW5rKG1lbnU/LnBhdGgpID8gbWVudS5hY3RpdmVJY29uIDogbWVudS5pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibWVudS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XSB3aGl0ZXNwYWNlLW5vd3JhcCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnUubWVudX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2xpY2tlZEluZGV4ID09PSBpbmRleCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnUuc3ViTWVudXMubWFwKChzdWJNZW51LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdWJNZW51LnBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktMSBwbC1bMjhweF0gcHItMSB0ZXh0LVsxNXB4XSB3aGl0ZXNwYWNlLW5vd3JhcCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY3RpdmVMaW5rKHN1Yk1lbnU/LnBhdGgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1iZXNwb2tlT3JhbmdlIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yk1lbnU/LnN1Yk1lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXttZW51LnBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGdhcC1bNHB4XSBpdGVtcy1jZW50ZXIgcHgtMiBweS1bNnB4XSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aXZlTGluayhtZW51Py5wYXRoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1bI0ZGRkFGNV0gdGV4dC1iZXNwb2tlT3JhbmdlIFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENsaWNrZWRJbmRleCgxMDAwMDAwKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aXZlTGluayhtZW51Py5wYXRoKSA/IG1lbnUuYWN0aXZlSWNvbiA6IG1lbnUuaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibWVudS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE2cHhdIHdoaXRlc3BhY2Utbm93cmFwIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge21lbnUubWVudX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkxvZ28iLCJJbWFnZSIsIkxpbmsiLCJST1VURVMiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoIiwiTE9DQUxfU1RPUkFHRV9LRVlTIiwic2lkZWJhciIsIkNsaWNrZWRJbmRleENvbnRleHQiLCJTaWRlYmFyIiwibG9jYWxTdG9yYWdlIiwicm91dGVyIiwiQWN0aXZlTGluayIsImhyZWYiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJsb2dvdXQiLCJjbGlja2VkSW5kZXgiLCJzZXRDbGlja2VkSW5kZXgiLCJzYXZlZERhdGEiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJzZXRJdGVtIiwidG9TdHJpbmciLCJ0b2dnbGUiLCJpbmRleCIsImhhbmRsZUxvZ291dCIsInB1c2giLCJMQU5ESU5HUEFHRSIsInVzZXIiLCJVU0VSIiwidXNlcnMiLCJKU09OIiwicGFyc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwibWFwIiwiaXRlbSIsImhyIiwicCIsInNlY3Rpb24iLCJtZW51cyIsIm1lbnUiLCJzdWJNZW51cyIsImxlbmd0aCIsInBhdGgiLCJvbkNsaWNrIiwiYWN0aXZlSWNvbiIsImljb24iLCJzdWJNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./views/components/Sidebar/Sidebar.tsx\n"));

/***/ })

});