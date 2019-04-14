import test from './test';

document.addEventListener("DOMContentLoaded", () => {
    
    // GET DATA FROM 2010 
    let dataLocs2010 = [];
    let data2010 = [];

    // d3.json("src/data/draft_picks2010.json", function(err, data) {
    //     for (let i = 0; i < data.resultSets[0].rowSet.length; i++) {
    //         data2010.push(data.resultSets[0].rowSet[i][7]);
    //     }
       
    //     data2010.forEach(datum => {
    //         fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${datum}&key=AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U`)
    //             .then(res => {
    //                 res.json().then(locations => {
    //                     dataLocs2010.push({ [locations.results[0].formatted_address]: locations.results[0].geometry.location });
    //                 });
    //             });
    //         });
    // });

    let promise1 = new Promise(function (resolve, reject) {
        

        d3.json("src/data/draft_picks2010.json", function (err, data) {
            for (let i = 0; i < data.resultSets[0].rowSet.length; i++) {
                data2010.push(data.resultSets[0].rowSet[i][7]);
            }

            data2010.forEach(datum => {
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${datum}&key=AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U`)
                    .then(res => {
                        res.json().then(locations => {
                            dataLocs2010.push([ locations.results[0].formatted_address, locations.results[0].geometry.location ]);
                        });
                    });
            });
        });
        
        resolve(dataLocs2010);
        
    });
    
    promise1.then(function(data2010) {
        let geojson = {}

        let context = d3.select('#content canvas')
            .node()
            .getContext('2d');

        let projection = d3.geoOrthographic();

        let geoGenerator = d3.geoPath()
            .projection(projection)
            .pointRadius(4)
            .context(context);

        let yaw = 150;

        function update() {
            projection.rotate([yaw, -23])

            context.clearRect(0, 0, 800, 600);

            context.lineWidth = 0.5;
            context.strokeStyle = '#56D118';

            context.beginPath();
            geoGenerator({ type: 'FeatureCollection', features: geojson.features })
            context.stroke();


            // Graticule
            let graticule = d3.geoGraticule();
            context.beginPath();
            context.strokeStyle = 'black';
            geoGenerator(graticule());
            context.stroke();

            yaw -= 1

            let latLongConverter = d3.geoOrthographic();

            // Circles
            // let circle1 = d3.geoCircle().center([0.1278, 51.5074]).radius(0.5)
            // context.beginPath();
            // context.strokeStyle = 'red';
            // geoGenerator(circle1());
            // context.stroke();

            // Kobe's highschool
            // let circle2 = d3.geoCircle().center([-75.2829, 40.0250]).radius(0.5)
            // context.beginPath();
            // context.strokeStyle = 'red';
            // geoGenerator(circle2());
            // context.stroke();

            data2010.forEach(datum => {
                let circle = d3.geoCircle().center([Object.values(datum[1])[1], Object.values(datum[1])[0]]).radius(0.5)
                context.beginPath();
                context.strokeStyle = 'red';
                geoGenerator(circle());
                context.stroke();
            });

            

        }

        // REQUEST DATA
        d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json', function (err, json) {
            geojson = json;
            window.setInterval(update, 30);
        });
    });

});