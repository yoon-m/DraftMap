import test from './test';

document.addEventListener("DOMContentLoaded", () => {
    // d3.json("src/data/draft_picks2017.json")
    //     .then(function(data) {
    //         console.log(data);
    //     }
    // );

    // let width = 860,
    //     height = 660,
    //     radius = 228,
    //     mesh,
    //     graticule,
    //     scene = new THREE.Scene,
    //     camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000),
    //     renderer = new THREE.WebGLRenderer({ alpha: true });

    // camera.position.z = 400;

    // renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(width, height);

    // document.body.appendChild(renderer.domElement);

    // d3.json("https://unpkg.com/world-atlas@1/world/50m.json", function (error, topology) {
    //     if (error) throw error;
    //     scene.add(graticule = wireframe(graticule10(), new THREE.LineBasicMaterial({ color: 0xaaaaaa })));
    //     scene.add(mesh = wireframe(topojson.mesh(topology, topology.objects.land), new THREE.LineBasicMaterial({ color: 0xff0000 })));
    //     d3.timer(function (t) {
    //         graticule.rotation.x = mesh.rotation.x = Math.sin(t / 11000) * Math.PI / 3 - Math.PI / 2;
    //         graticule.rotation.z = mesh.rotation.z = t / 10000;
    //         renderer.render(scene, camera);
    //     });
    // });

    // function vertex(point) {
    //     let lambda = point[0] * Math.PI / 180,
    //         phi = point[1] * Math.PI / 180,
    //         cosPhi = Math.cos(phi);
    //     return new THREE.Vector3(
    //         radius * cosPhi * Math.cos(lambda),
    //         radius * cosPhi * Math.sin(lambda),
    //         radius * Math.sin(phi)
    //     );
    // }

    // function wireframe(multilinestring, material) {
    //     let geometry = new THREE.Geometry;
    //     multilinestring.coordinates.forEach(function (line) {
    //         d3.pairs(line.map(vertex), function (a, b) {
    //             geometry.vertices.push(a, b);
    //         });
    //     });
    //     return new THREE.LineSegments(geometry, material);
    // }

    // function graticule10() {
    //     let epsilon = 1e-6,
    //         x1 = 180, x0 = -x1, y1 = 80, y0 = -y1, dx = 10, dy = 10,
    //         X1 = 180, X0 = -X1, Y1 = 90, Y0 = -Y1, DX = 90, DY = 360,
    //         x = graticuleX(y0, y1, 2.5), y = graticuleY(x0, x1, 2.5),
    //         X = graticuleX(Y0, Y1, 2.5), Y = graticuleY(X0, X1, 2.5);
    //     function graticuleX(y0, y1, dy) {
    //         let y = d3.range(y0, y1 - epsilon, dy).concat(y1);
    //         return function (x) { return y.map(function (y) { return [x, y]; }); };
    //     }
    //     function graticuleY(x0, x1, dx) {
    //         let x = d3.range(x0, x1 - epsilon, dx).concat(x1);
    //         return function (y) { return x.map(function (x) { return [x, y]; }); };
    //     }
    //     return {
    //         type: "MultiLineString",
    //         coordinates: d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X)
    //             .concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y))
    //             .concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function (x) { return Math.abs(x % DX) > epsilon; }).map(x))
    //             .concat(d3.range(Math.ceil(y0 / dy) * dy, y1 + epsilon, dy).filter(function (y) { return Math.abs(y % DY) > epsilon; }).map(y))
    //     };
    // }





    // var context = d3.select('#content canvas')
    //     .node()
    //     .getContext('2d');

    // var projection = d3.geoOrthographic()
    //     .scale(200)
    //     .rotate([0, 0]);

    // var geoGenerator = d3.geoPath()
    //     .projection(projection)
    //     .context(context);

    // function update(geojson) {
    //     context.lineWidth = 1;
    //     context.strokeStyle = '#333';

    //     context.beginPath();
    //     geoGenerator({ type: 'FeatureCollection', features: geojson.features })
    //     context.stroke();

    //     // Graticule
    //     var graticule = d3.geoGraticule();
    //     context.beginPath();
    //     context.strokeStyle = '#ccc';
    //     geoGenerator(graticule());
    //     context.stroke();

    //     // London - New York
    //     context.beginPath();
    //     context.strokeStyle = 'red';
    //     geoGenerator({ type: 'Feature', geometry: { type: 'LineString', coordinates: [[0.1278, 51.5074], [-74.0059, 40.7128]] } });
    //     context.stroke();

    //     // Circle
    //     var circle = d3.geoCircle().center([0.1278, 51.5074]).radius(15)
    //     context.beginPath();
    //     context.strokeStyle = 'red';
    //     geoGenerator(circle());
    //     context.stroke();
    // }



    // // REQUEST DATA
    // d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json', function (err, json) {
    //     update(json)
    // })







    let geojson = {}

    let context = d3.select('#content canvas')
        .node()
        .getContext('2d');

    let projection = d3.geoOrthographic()
        .scale(250);

    let geoGenerator = d3.geoPath()
        .projection(projection)
        .pointRadius(4)
        .context(context);

    let yaw = 90;

    function update() {
        projection.rotate([yaw, -25])

        context.clearRect(0, 0, 800, 600);

        context.lineWidth = 0.5;
        context.strokeStyle = 'black';

        context.beginPath();
        geoGenerator({ type: 'FeatureCollection', features: geojson.features })
        context.stroke();


        // Graticule
        let graticule = d3.geoGraticule();
        context.beginPath();
        context.strokeStyle = '#E0E0E0';
        geoGenerator(graticule());
        context.stroke();

        yaw -= 0.5


        // Circles
        let circle1 = d3.geoCircle().center([0.1278, 51.5074]).radius(15)
        context.beginPath();
        context.strokeStyle = 'red';
        geoGenerator(circle1());
        context.stroke();

        let circle2 = d3.geoCircle().center([0.8, 5.5074]).radius(15)
        context.beginPath();
        context.strokeStyle = 'red';
        geoGenerator(circle2());
        context.stroke();
    }



    // REQUEST DATA
    d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json', function (err, json) {
        geojson = json;
        window.setInterval(update, 30);
    });

});