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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/test.js\");\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    \n    // GET DATA FROM 2010 \n    let dataLocs2010 = [];\n    let data2010 = [];\n\n    // d3.json(\"src/data/draft_picks2010.json\", function(err, data) {\n    //     for (let i = 0; i < data.resultSets[0].rowSet.length; i++) {\n    //         data2010.push(data.resultSets[0].rowSet[i][7]);\n    //     }\n       \n    //     data2010.forEach(datum => {\n    //         fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${datum}&key=AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U`)\n    //             .then(res => {\n    //                 res.json().then(locations => {\n    //                     dataLocs2010.push({ [locations.results[0].formatted_address]: locations.results[0].geometry.location });\n    //                 });\n    //             });\n    //         });\n    // });\n\n    let promise1 = new Promise(function (resolve, reject) {\n        \n\n        d3.json(\"src/data/draft_picks2010.json\", function (err, data) {\n            for (let i = 0; i < data.resultSets[0].rowSet.length; i++) {\n                data2010.push(data.resultSets[0].rowSet[i][7]);\n            }\n\n            data2010.forEach(datum => {\n                fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${datum}&key=AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U`)\n                    .then(res => {\n                        res.json().then(locations => {\n                            dataLocs2010.push([ locations.results[0].formatted_address, locations.results[0].geometry.location ]);\n                        });\n                    });\n            });\n        });\n        \n        resolve(dataLocs2010);\n        \n    });\n    \n    promise1.then(function(data2010) {\n        let geojson = {}\n\n        let context = d3.select('#content canvas')\n            .node()\n            .getContext('2d');\n\n        let projection = d3.geoOrthographic();\n\n        let geoGenerator = d3.geoPath()\n            .projection(projection)\n            .pointRadius(4)\n            .context(context);\n\n        let yaw = 150;\n\n        function update() {\n            projection.rotate([yaw, -23])\n\n            context.clearRect(0, 0, 800, 600);\n\n            context.lineWidth = 0.5;\n            context.strokeStyle = '#56D118';\n\n            context.beginPath();\n            geoGenerator({ type: 'FeatureCollection', features: geojson.features })\n            context.stroke();\n\n\n            // Graticule\n            let graticule = d3.geoGraticule();\n            context.beginPath();\n            context.strokeStyle = 'black';\n            geoGenerator(graticule());\n            context.stroke();\n\n            yaw -= 1\n\n            let latLongConverter = d3.geoOrthographic();\n\n            // Circles\n            // let circle1 = d3.geoCircle().center([0.1278, 51.5074]).radius(0.5)\n            // context.beginPath();\n            // context.strokeStyle = 'red';\n            // geoGenerator(circle1());\n            // context.stroke();\n\n            // Kobe's highschool\n            // let circle2 = d3.geoCircle().center([-75.2829, 40.0250]).radius(0.5)\n            // context.beginPath();\n            // context.strokeStyle = 'red';\n            // geoGenerator(circle2());\n            // context.stroke();\n\n            data2010.forEach(datum => {\n                let circle = d3.geoCircle().center([Object.values(datum[1])[1], Object.values(datum[1])[0]]).radius(0.5)\n                context.beginPath();\n                context.strokeStyle = 'red';\n                geoGenerator(circle());\n                context.stroke();\n            });\n\n            \n\n        }\n\n        // REQUEST DATA\n        d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json', function (err, json) {\n            geojson = json;\n            window.setInterval(update, 30);\n        });\n    });\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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