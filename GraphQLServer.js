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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Graphql/index.js");
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

/***/ "./src/Graphql/ApolloServerSchema/index.js":
/*!*************************************************!*\
  !*** ./src/Graphql/ApolloServerSchema/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! graphql-tools */ \"graphql-tools\"),\n    makeExecutableSchema = _require.makeExecutableSchema;\n\nvar typeDefs = __webpack_require__(/*! ./typeDef.js */ \"./src/Graphql/ApolloServerSchema/typeDef.js\");\nvar resolvers = __webpack_require__(/*! ./resolver.js */ \"./src/Graphql/ApolloServerSchema/resolver.js\");\n\nmodule.exports = makeExecutableSchema({\n  typeDefs: typeDefs,\n  resolvers: resolvers\n});\n\n//# sourceURL=webpack:///./src/Graphql/ApolloServerSchema/index.js?");

/***/ }),

/***/ "./src/Graphql/ApolloServerSchema/resolver.js":
/*!****************************************************!*\
  !*** ./src/Graphql/ApolloServerSchema/resolver.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar resolver = {\n    Query: {},\n    Mutation: {}\n};\nmodule.exports = resolver;\n\n//# sourceURL=webpack:///./src/Graphql/ApolloServerSchema/resolver.js?");

/***/ }),

/***/ "./src/Graphql/ApolloServerSchema/typeDef.js":
/*!***************************************************!*\
  !*** ./src/Graphql/ApolloServerSchema/typeDef.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Sample types and its query and mutation\n\nvar typeDefs = \"\\n  type TYPE_NAME{\\n\\n  }\\n  type Query{\\n   getTypeName : [TYPE_NAME]!\\n  }\\n\\n  type Mutation{\\n    mutateTypeName(arg1 : String!,arg2:Number!) : TYPE_NAME,\\n\";\n\nmodule.exports = typeDefs;\n\n//# sourceURL=webpack:///./src/Graphql/ApolloServerSchema/typeDef.js?");

/***/ }),

/***/ "./src/Graphql/index.js":
/*!******************************!*\
  !*** ./src/Graphql/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _http = __webpack_require__(/*! http */ \"http\");\n\nvar _graphql = __webpack_require__(/*! graphql */ \"graphql\");\n\nvar _subscriptionsTransportWs = __webpack_require__(/*! subscriptions-transport-ws */ \"subscriptions-transport-ws\");\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n__webpack_require__(/*! babel-core/register */ \"babel-core/register\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n__webpack_require__(/*! babel-core/register */ \"babel-core/register\");\n\nvar _require = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\"),\n    graphqlExpress = _require.graphqlExpress,\n    graphiqlExpress = _require.graphiqlExpress;\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar app = (0, _express2.default)();\n\n//database connection\nmongoose.connect('mongodb://localhost/' + _config.MongoDB_Name);\napp.use(_express2.default.static(\".\"));\napp.use(bodyParser.urlencoded({ extended: true }));\napp.use(bodyParser.json());\n//middleware\napp.use(cors());\nvar schema = __webpack_require__(/*! ./ApolloServerSchema */ \"./src/Graphql/ApolloServerSchema/index.js\");\n\n// bodyParser is needed just for POST queries to the endpoint.\napp.use('/graphql', graphqlExpress({ schema: schema }));\napp.use('/graphiql', graphiqlExpress({\n  endpointURL: \"/graphql\",\n  subscriptionsEndpoint: 'ws://localhost:' + _config.GraphqlPort + '/subscriptions'\n}));\n\nvar GraphQLWebSocketServerInstance = (0, _http.createServer)(app);\nvar server = GraphQLWebSocketServerInstance.listen(_config.GraphqlPort, function () {\n  console.log('> APOLLO SUBSCRIPTION SERVER RUNNING ON PORT ' + _config.GraphqlPort);\n  new _subscriptionsTransportWs.SubscriptionServer({\n    execute: _graphql.execute,\n    subscribe: _graphql.subscribe,\n    schema: schema,\n    onSubscribe: function onSubscribe(message, params, webSocket) {\n      console.log(\"onSubscribe\");\n    },\n    onConnect: function onConnect(connectionParams, webSocket, context) {\n      console.log(\"onConnect\");\n    }\n  }, {\n    server: GraphQLWebSocketServerInstance,\n    path: '/subscriptions'\n  });\n});\n\n//# sourceURL=webpack:///./src/Graphql/index.js?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "babel-core/register":
/*!**************************************!*\
  !*** external "babel-core/register" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-core/register\");\n\n//# sourceURL=webpack:///external_%22babel-core/register%22?");

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

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "subscriptions-transport-ws":
/*!*********************************************!*\
  !*** external "subscriptions-transport-ws" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"subscriptions-transport-ws\");\n\n//# sourceURL=webpack:///external_%22subscriptions-transport-ws%22?");

/***/ })

/******/ });