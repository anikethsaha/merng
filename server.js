module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nmodule.exports = {\n    port: 5000,\n    sessionSecretKey: bcrypt.hashSync(\"SECRET_KEY\", 2),\n    MongoDB_Name: '',\n    GraphqlPort: 3000\n};\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./src/common/components/app.jsx":
/*!***************************************!*\
  !*** ./src/common/components/app.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this.state = {};\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                'HEllo not asas'\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\nApp.propTypes = {};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/common/components/app.jsx?");

/***/ }),

/***/ "./src/common/components/index.js":
/*!****************************************!*\
  !*** ./src/common/components/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.App = undefined;\n\nvar _app = __webpack_require__(/*! ./app.jsx */ \"./src/common/components/app.jsx\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.App = _app2.default;\n\n//# sourceURL=webpack:///./src/common/components/index.js?");

/***/ }),

/***/ "./src/server/controller/ssr.js":
/*!**************************************!*\
  !*** ./src/server/controller/ssr.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _components = __webpack_require__(/*! ../../common/components */ \"./src/common/components/index.js\");\n\n// SSR\nmodule.exports = {\n    renderSSRcomponent: function renderSSRcomponent(req, res) {\n        var RenderedAppToString = (0, _server.renderToString)(React.createElement(_components.App, null));\n        var indexHTMLpage = fs.readFileSync('./public/index.html');\n        var indexHTMLpageToString = indexHTMLpage.toString();\n        var HTMLWithSSRComponentInIt = indexHTMLpageToString.replace(\"<!-- __APP__ -->\", RenderedAppToString);\n        res.send(HTMLWithSSRComponentInIt);\n    }\n};\n\n//# sourceURL=webpack:///./src/server/controller/ssr.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ssr = __webpack_require__(/*! ./controller/ssr */ \"./src/server/controller/ssr.js\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar winston = __webpack_require__(/*! winston */ \"winston\");\nvar expressControllers = __webpack_require__(/*! express-controller */ \"express-controller\");\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _require = __webpack_require__(/*! ../../config */ \"./config/index.js\"),\n    port = _require.port,\n    sessionSecretKey = _require.sessionSecretKey;\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar csrf = __webpack_require__(/*! csurf */ \"csurf\");\nvar RateLimit = __webpack_require__(/*! express-rate-limit */ \"express-rate-limit\");\n\n// SSR method importing from ./controller/ssr\n\n\n// M\n// Middlewares\nvar app = express();\napp.use(helmet());\n\n// session Middleware\napp.use(session({\n  secret: sessionSecretKey,\n  resave: false,\n  saveUninitialized: true,\n  cookie: { secure: true }\n}));\napp.use(csrf());\napp.set('port', process.env.PORT || port);\napp.use(helmet.contentSecurityPolicy({\n  directives: {\n    defaultSrc: [\"'self'\"]\n    //   styleSrc: [\"'self'\", 'maxcdn.bootstrapcdn.com']\n  }\n}));\napp.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));\napp.use(bodyParser.json({ limit: '50mb' }));\napp.use(cors());\n// use this middleware in authentications routes or post method routes\nvar authAPILimiter = new RateLimit({\n  windowMs: 5 * 60 * 1000, // 5 minutes\n  max: 1000,\n  delayMs: 0 // disabled\n});\n// loggin middleware\nvar logger = winston.createLogger({\n  level: 'info',\n  transports: [new winston.transports.Console(), new winston.transports.File({ filename: '../../logs/error.log', level: 'error' }), new winston.transports.File({ filename: '../../logs/debug.log', level: 'debug' }), new winston.transports.File({ filename: '../../logs/crit.log', level: 'crit' }), new winston.transports.File({ filename: '../../logs/warn.log', level: 'warn' }), new winston.transports.File({ filename: '../../logs/combined.log' })]\n});\n\n// V\n// static files and views\napp.use(express.static(path.join(__dirname, 'public')));\napp.set('view engine', 'ejs');\napp.engine('html', __webpack_require__(/*! ejs */ \"ejs\").renderFile);\napp.set('views', path.join(__dirname, 'views'));\n\n// C\n//controller settings\n//setting up the controller\nexpressControllers.setDirectory(path.join(__dirname, '/controller')).bind(app);\n\n// routes\n\napp.get('/', _ssr.renderSSRcomponent);\n\napp.listen(app.get('port'), function () {\n  logger.info('> Server is running on PORT ', app.get('port'));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "csurf":
/*!************************!*\
  !*** external "csurf" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"csurf\");\n\n//# sourceURL=webpack:///external_%22csurf%22?");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ejs\");\n\n//# sourceURL=webpack:///external_%22ejs%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-controller":
/*!*************************************!*\
  !*** external "express-controller" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-controller\");\n\n//# sourceURL=webpack:///external_%22express-controller%22?");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-rate-limit\");\n\n//# sourceURL=webpack:///external_%22express-rate-limit%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });