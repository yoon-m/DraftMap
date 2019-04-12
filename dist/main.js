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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/test.js\");\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    // d3.json(\"src/data/draft_picks2017.json\")\n    //     .then(function(data) {\n    //         console.log(data);\n    //     }\n    // );\n\n    // let width = 860,\n    //     height = 660,\n    //     radius = 228,\n    //     mesh,\n    //     graticule,\n    //     scene = new THREE.Scene,\n    //     camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000),\n    //     renderer = new THREE.WebGLRenderer({ alpha: true });\n\n    // camera.position.z = 400;\n\n    // renderer.setPixelRatio(window.devicePixelRatio);\n    // renderer.setSize(width, height);\n\n    // document.body.appendChild(renderer.domElement);\n\n    // d3.json(\"https://unpkg.com/world-atlas@1/world/50m.json\", function (error, topology) {\n    //     if (error) throw error;\n    //     scene.add(graticule = wireframe(graticule10(), new THREE.LineBasicMaterial({ color: 0xaaaaaa })));\n    //     scene.add(mesh = wireframe(topojson.mesh(topology, topology.objects.land), new THREE.LineBasicMaterial({ color: 0xff0000 })));\n    //     d3.timer(function (t) {\n    //         graticule.rotation.x = mesh.rotation.x = Math.sin(t / 11000) * Math.PI / 3 - Math.PI / 2;\n    //         graticule.rotation.z = mesh.rotation.z = t / 10000;\n    //         renderer.render(scene, camera);\n    //     });\n    // });\n\n    // function vertex(point) {\n    //     let lambda = point[0] * Math.PI / 180,\n    //         phi = point[1] * Math.PI / 180,\n    //         cosPhi = Math.cos(phi);\n    //     return new THREE.Vector3(\n    //         radius * cosPhi * Math.cos(lambda),\n    //         radius * cosPhi * Math.sin(lambda),\n    //         radius * Math.sin(phi)\n    //     );\n    // }\n\n    // function wireframe(multilinestring, material) {\n    //     let geometry = new THREE.Geometry;\n    //     multilinestring.coordinates.forEach(function (line) {\n    //         d3.pairs(line.map(vertex), function (a, b) {\n    //             geometry.vertices.push(a, b);\n    //         });\n    //     });\n    //     return new THREE.LineSegments(geometry, material);\n    // }\n\n    // function graticule10() {\n    //     let epsilon = 1e-6,\n    //         x1 = 180, x0 = -x1, y1 = 80, y0 = -y1, dx = 10, dy = 10,\n    //         X1 = 180, X0 = -X1, Y1 = 90, Y0 = -Y1, DX = 90, DY = 360,\n    //         x = graticuleX(y0, y1, 2.5), y = graticuleY(x0, x1, 2.5),\n    //         X = graticuleX(Y0, Y1, 2.5), Y = graticuleY(X0, X1, 2.5);\n    //     function graticuleX(y0, y1, dy) {\n    //         let y = d3.range(y0, y1 - epsilon, dy).concat(y1);\n    //         return function (x) { return y.map(function (y) { return [x, y]; }); };\n    //     }\n    //     function graticuleY(x0, x1, dx) {\n    //         let x = d3.range(x0, x1 - epsilon, dx).concat(x1);\n    //         return function (y) { return x.map(function (x) { return [x, y]; }); };\n    //     }\n    //     return {\n    //         type: \"MultiLineString\",\n    //         coordinates: d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X)\n    //             .concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y))\n    //             .concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function (x) { return Math.abs(x % DX) > epsilon; }).map(x))\n    //             .concat(d3.range(Math.ceil(y0 / dy) * dy, y1 + epsilon, dy).filter(function (y) { return Math.abs(y % DY) > epsilon; }).map(y))\n    //     };\n    // }\n\n\n\n\n\n    // var context = d3.select('#content canvas')\n    //     .node()\n    //     .getContext('2d');\n\n    // var projection = d3.geoOrthographic()\n    //     .scale(200)\n    //     .rotate([0, 0]);\n\n    // var geoGenerator = d3.geoPath()\n    //     .projection(projection)\n    //     .context(context);\n\n    // function update(geojson) {\n    //     context.lineWidth = 1;\n    //     context.strokeStyle = '#333';\n\n    //     context.beginPath();\n    //     geoGenerator({ type: 'FeatureCollection', features: geojson.features })\n    //     context.stroke();\n\n    //     // Graticule\n    //     var graticule = d3.geoGraticule();\n    //     context.beginPath();\n    //     context.strokeStyle = '#ccc';\n    //     geoGenerator(graticule());\n    //     context.stroke();\n\n    //     // London - New York\n    //     context.beginPath();\n    //     context.strokeStyle = 'red';\n    //     geoGenerator({ type: 'Feature', geometry: { type: 'LineString', coordinates: [[0.1278, 51.5074], [-74.0059, 40.7128]] } });\n    //     context.stroke();\n\n    //     // Circle\n    //     var circle = d3.geoCircle().center([0.1278, 51.5074]).radius(15)\n    //     context.beginPath();\n    //     context.strokeStyle = 'red';\n    //     geoGenerator(circle());\n    //     context.stroke();\n    // }\n\n\n\n    // // REQUEST DATA\n    // d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json', function (err, json) {\n    //     update(json)\n    // })\n\n\n\n\n\n\n\n    let geojson = {}\n\n    let context = d3.select('#content canvas')\n        .node()\n        .getContext('2d');\n\n    let projection = d3.geoOrthographic()\n        .center([0, 0]);\n    \n    let c1 = projection([0.1278, 51.5074]);\n    let c2 = projection([-75.2829, 40.0250]);\n\n    let geoGenerator = d3.geoPath()\n        .projection(projection)\n        .pointRadius(4)\n        .context(context);\n\n    let yaw = 90;\n    let roll = 0;\n\n    function update() {\n        projection.rotate([yaw, roll])\n\n        context.clearRect(0, 0, 800, 600);\n\n        context.lineWidth = 0.5;\n        context.strokeStyle = 'black';\n\n        context.beginPath();\n        geoGenerator({ type: 'FeatureCollection', features: geojson.features })\n        context.stroke();\n\n\n        // Graticule\n        let graticule = d3.geoGraticule();\n        context.beginPath();\n        context.strokeStyle = '#E0E0E0';\n        geoGenerator(graticule());\n        context.stroke();\n\n        yaw -= 0.5\n        roll -= 0.1\n\n        let latLongConverter = d3.geoOrthographic();\n\n        // Circles\n        let circle1 = d3.geoCircle().center(c1).radius(5)\n        context.beginPath();\n        context.strokeStyle = 'red';\n        geoGenerator(circle1());\n        context.stroke();\n\n        let circle2 = d3.geoCircle().center(c2).radius(5)\n        context.beginPath();\n        context.strokeStyle = 'red';\n        geoGenerator(circle2());\n        context.stroke();\n\n        console.log(c1);\n        console.log(projection.invert(c1));\n    }\n\n    // REQUEST DATA\n    d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json', function (err, json) {\n        geojson = json;\n        window.setInterval(update, 30);\n    });\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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