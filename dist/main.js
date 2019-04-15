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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/test.js\");\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    \n    // GET DATA FROM 2010 \n    let dataLocs2010 = [];\n    let data2010 = [];\n    let test = [\n        [-84.2700179, 37.8393332],\n        [-83.03091429999999, 40.0141905],\n        [-78.9382286, 36.0014258],\n        [-5.9844589, 37.3890924],\n        [2.1201427, 41.3800412],\n        [-78.9382286, 36.0014258],\n        [-84.2700179, 37.8393332],\n        [-99.9018131, 31.9685988],\n        [113.840688, 22.996138],\n        [-84.2700179, 37.8393332],\n        [-78.9382286, 36.0014258],\n        [-111.0937311, 34.0489281],\n        [-88.7878678, 43.7844397],\n        [-98.4842465, 39.011902],\n        [-115.1398296, 36.1699412],\n        [-85.7584557, 38.2526647],\n        [-84.2700179, 37.8393332],\n        [-111.0937311, 34.0489281],\n        [-76.14742439999999, 43.0481221],\n        [-84.2700179, 37.8393332],\n        [-119.4179324, 36.778261],\n        [-71.4128343, 41.8239891],\n        [-97.092877, 35.0077519],\n        [-98.4842465, 39.011902],\n        [-88.3214979, 36.6163842],\n        [-85.7584557, 38.2526647],\n        [-78.9382286, 36.0014258],\n        [-120.7401385, 47.7510741],\n        [-78.9382286, 36.0014258],\n        [-91.96233269999999, 30.9842977],\n        [-84.2700179, 37.8393332],\n        [-111.0937311, 39.3209801],\n        [-118.2436849, 34.0522342],\n        [-76.14742439999999, 43.0481221],\n        [-91.8318334, 35.20105],\n        [-107.2902839, 43.0759678],\n        [-86.2353388, 41.7055716],\n        [-78.6568942, 37.4315734],\n        [-111.0937311, 39.3209801],\n        [34.7918017, 32.0622124],\n        [-91.96233269999999, 30.9842977],\n        [-84.4821719, 42.701848],\n        [-3.686238, 40.44255],\n        [1.0816269, 49.430962],\n        [-117.4015208, 47.66644729999999],\n        [-79.7971665, 36.6602066],\n        [-86.8026551, 36.1447034],\n        [-84.38528190000001, 33.753068],\n        [23.7275388, 37.9838096],\n        [20.4681206, 44.8167455],\n        [-111.0937311, 34.0489281],\n        [28.8808207, 41.0077558],\n        [-85.60236429999999, 44.3148443],\n        [15.9636945, 45.8025412],\n        [19.6209662, 44.9794968],\n        [-97.1143046, 31.5497007],\n        [-88.7878678, 43.7844397],\n        [-87.93044549999999, 43.038473],\n        [-118.2436849, 34.0522342],\n        [-106.7479059, 32.2787745],\n        [-84.2984889, 30.4418778],\n        [-75.23993279999999, 39.9951217],\n        [-78.6820946, 35.7846633],\n        [-79.01929969999999, 35.7595731],\n        [-120.7401385, 47.7510741],\n        [-118.2436849, 34.0522342],\n        [-86.8026551, 36.1447034],\n        [-78.9382286, 36.0014258],\n        [-111.0937311, 39.3209801],\n        [-117.4015208, 47.66644729999999],\n        [-99.9018131, 31.9685988],\n        [-84.2700179, 37.8393332],\n        [-80.2778951, 36.1340985],\n        [-95.94719189999999, 41.2653105],\n        [-76.14742439999999, 43.0481221],\n        [-79.01929969999999, 35.7595731],\n        [7.764862099999999, 48.59991180000001],\n        [-84.2984889, 30.4418778],\n        [138.5460497, -34.900438],\n        [-120.7401385, 47.7510741],\n        [-111.0937311, 34.0489281],\n        [-85.60236429999999, 44.3148443],\n        [-79.01929969999999, 35.7595731],\n        [-86.92119459999999, 40.4237054],\n        [-84.4821719, 42.701848],\n        [-86.1349019, 40.2671941],\n        [-78.9382286, 36.0014258],\n        [-118.2436849, 34.0522342],\n        [-99.9018131, 31.9685988],\n        [-84.2700179, 37.8393332],\n        [-105.7820674, 39.5500507],\n        [-75.3491813, 40.0375832],\n        [-97.092877, 35.0077519],\n        [-15.5474373, 27.9202202],\n        [-85.60236429999999, 44.3148443],\n        [-78.9382286, 36.0014258],\n        [-86.902298, 32.3182314],\n        [-80.4549026, 38.5976262],\n        [-3.6784325, 40.4266325],\n        [-84.2700179, 37.8393332],\n        [-84.39628499999999, 33.7756178],\n        [-71.16849450000001, 42.3355488],\n        [-116.2014604, 43.6026952],\n        [-91.8318334, 37.9642529],\n        [-76.64127119999999, 39.0457549],\n        [-120.5542012, 43.8041334],\n        [-101.8782822, 33.5842591],\n        [-97.29286929999999, 37.7193933],\n        [-84.4821719, 42.701848],\n        [-82.6086662, 27.4408534],\n        [-84.5120196, 39.1031182],\n        [-99.7595898, 29.2177737],\n        [-80.1917902, 25.7616798],\n        [15.9665938, 45.7798131],\n        [-75.3491813, 40.0375832],\n        [-78.9382286, 36.0014258],\n        [-84.2700179, 37.8393332],\n        [-84.2700179, 37.8393332],\n        [-75.3491813, 40.0375832],\n        [-75.3491813, 40.0375832]\n    ];\n    // d3.json(\"src/data/draft_picks2010.json\", function(err, data) {\n    //     for (let i = 0; i < data.resultSets[0].rowSet.length; i++) {\n    //         data2010.push(data.resultSets[0].rowSet[i][7]);\n    //     }\n       \n    //     data2010.forEach(datum => {\n    //         fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${datum}&key=AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U`)\n    //             .then(res => {\n    //                 res.json().then(locations => {\n    //                     dataLocs2010.push({ [locations.results[0].formatted_address]: locations.results[0].geometry.location });\n    //                 });\n    //             });\n    //         });\n    // });\n\n    // let promise1 = new Promise(function (resolve, reject) {\n        \n\n    //     d3.json(\"src/data/draft_locations.json\", function (err, data) {\n    //         for (let i = 0; i < data.resultSets[0].rowSet.length; i++) {\n    //             data2010.push(data.resultSets[0].rowSet[i][10]);\n    //         }\n\n    //         data2010.forEach(datum => {\n    //             fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${datum}&key=AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U`)\n    //             .then(res => {\n    //                     res.json().then(locations => {\n    //                         dataLocs2010.push([ locations.results[0].formatted_address, locations.results[0].geometry.location ]);\n    //                     });\n\n    //                 });\n    //         });\n    //     });\n        \n    //     resolve(dataLocs2010);\n        \n    // });\n    \n    // promise1.then(function(data2010) {\n        \n    // });\n\n    let geojson = {}\n\n    let context = d3.select('#content canvas')\n        .node()\n        .getContext('2d');\n\n    let projection = d3.geoOrthographic();\n\n    let geoGenerator = d3.geoPath()\n        .projection(projection)\n        .pointRadius(4)\n        .context(context);\n\n    let yaw = 150;\n\n    function update() {\n        projection.rotate([yaw, -23])\n\n        context.clearRect(0, 0, 800, 600);\n\n        context.lineWidth = 0.5;\n        // context.strokeStyle = '#56D118';\n        context.strokeStyle = 'gold';\n\n        context.beginPath();\n        geoGenerator({ type: 'FeatureCollection', features: geojson.features })\n        context.stroke();\n\n\n        // Graticule\n        let graticule = d3.geoGraticule();\n        context.beginPath();\n        context.strokeStyle = 'black';\n        geoGenerator(graticule());\n        context.stroke();\n\n        yaw -= 1\n\n        let latLongConverter = d3.geoOrthographic();\n\n        // Circles\n        test.forEach(datum => {\n            let circle = d3.geoCircle().center(datum[1], datum[0]).radius(1.2)\n            context.beginPath();\n            context.strokeStyle = 'blue';\n            geoGenerator(circle());\n            context.stroke();\n        });\n\n\n\n    }\n\n    // REQUEST DATA\n    d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json', function (err, json) {\n        geojson = json;\n        window.setInterval(update, 30);\n    });\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/test.js?");

/***/ })

/******/ });