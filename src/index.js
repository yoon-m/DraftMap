document.addEventListener("DOMContentLoaded", () => {
    function uncheckAll() {
        $("input[type='checkbox']:checked").prop("checked", false);
    }
    $('.deselectAll').on('click', uncheckAll);
    
    function checkAll() {
        $("input[type='checkbox']:not(:checked)").prop("checked", true);
    }
    $('.selectAll').on('click', checkAll);

    function openGraph() {
        document.getElementsByClassName('bar-container')[0].style.display = 'block';
        document.getElementById('bar').style.display = 'block';
    }
    $('.openGraph').on('click', openGraph);

    function closeGraph() {
        document.getElementsByClassName('bar-container')[0].style.display = 'none';
        document.getElementById('bar').style.display = 'none';
    }
    $('.bar-container').on('click', closeGraph);

    let draftLocations = [
        [-84.2700179, 37.8393332],
        [-83.03091429999999, 40.0141905],
        [-78.9382286, 36.0014258],
        [-5.9844589, 37.3890924],
        [2.1201427, 41.3800412],
        [-78.9382286, 36.0014258],
        [-84.2700179, 37.8393332],
        [-99.9018131, 31.9685988],
        [113.840688, 22.996138],
        [-84.2700179, 37.8393332],
        [-78.9382286, 36.0014258],
        [-111.0937311, 34.0489281],
        [-88.7878678, 43.7844397],
        [-98.4842465, 39.011902],
        [-115.1398296, 36.1699412],
        [-85.7584557, 38.2526647],
        [-84.2700179, 37.8393332],
        [-111.0937311, 34.0489281],
        [-76.14742439999999, 43.0481221],
        [-84.2700179, 37.8393332],
        [-119.4179324, 36.778261],
        [-71.4128343, 41.8239891],
        [-97.092877, 35.0077519],
        [-98.4842465, 39.011902],
        [-88.3214979, 36.6163842],
        [-85.7584557, 38.2526647],
        [-78.9382286, 36.0014258],
        [-120.7401385, 47.7510741],
        [-78.9382286, 36.0014258],
        [-91.96233269999999, 30.9842977],
        [-84.2700179, 37.8393332],
        [-111.0937311, 39.3209801],
        [-118.2436849, 34.0522342],
        [-76.14742439999999, 43.0481221],
        [-91.8318334, 35.20105],
        [-107.2902839, 43.0759678],
        [-86.2353388, 41.7055716],
        [-78.6568942, 37.4315734],
        [-111.0937311, 39.3209801],
        [34.7918017, 32.0622124],
        [-91.96233269999999, 30.9842977],
        [-84.4821719, 42.701848],
        [-3.686238, 40.44255],
        [1.0816269, 49.430962],
        [-117.4015208, 47.66644729999999],
        [-79.7971665, 36.6602066],
        [-86.8026551, 36.1447034],
        [-84.38528190000001, 33.753068],
        [23.7275388, 37.9838096],
        [20.4681206, 44.8167455],
        [-111.0937311, 34.0489281],
        [28.8808207, 41.0077558],
        [-85.60236429999999, 44.3148443],
        [15.9636945, 45.8025412],
        [19.6209662, 44.9794968],
        [-97.1143046, 31.5497007],
        [-88.7878678, 43.7844397],
        [-87.93044549999999, 43.038473],
        [-118.2436849, 34.0522342],
        [-106.7479059, 32.2787745],
        [-84.2984889, 30.4418778],
        [-75.23993279999999, 39.9951217],
        [-78.6820946, 35.7846633],
        [-79.01929969999999, 35.7595731],
        [-120.7401385, 47.7510741],
        [-118.2436849, 34.0522342],
        [-86.8026551, 36.1447034],
        [-78.9382286, 36.0014258],
        [-111.0937311, 39.3209801],
        [-117.4015208, 47.66644729999999],
        [-99.9018131, 31.9685988],
        [-84.2700179, 37.8393332],
        [-80.2778951, 36.1340985],
        [-95.94719189999999, 41.2653105],
        [-76.14742439999999, 43.0481221],
        [-79.01929969999999, 35.7595731],
        [7.764862099999999, 48.59991180000001],
        [-84.2984889, 30.4418778],
        [138.5460497, -34.900438],
        [-120.7401385, 47.7510741],
        [-111.0937311, 34.0489281],
        [-85.60236429999999, 44.3148443],
        [-79.01929969999999, 35.7595731],
        [-86.92119459999999, 40.4237054],
        [-84.4821719, 42.701848],
        [-86.1349019, 40.2671941],
        [-78.9382286, 36.0014258],
        [-118.2436849, 34.0522342],
        [-99.9018131, 31.9685988],
        [-84.2700179, 37.8393332],
        [-105.7820674, 39.5500507],
        [-75.3491813, 40.0375832],
        [-97.092877, 35.0077519],
        [-15.5474373, 27.9202202],
        [-85.60236429999999, 44.3148443],
        [-78.9382286, 36.0014258],
        [-86.902298, 32.3182314],
        [-80.4549026, 38.5976262],
        [-3.6784325, 40.4266325],
        [-84.2700179, 37.8393332],
        [-84.39628499999999, 33.7756178],
        [-71.16849450000001, 42.3355488],
        [-116.2014604, 43.6026952],
        [-91.8318334, 37.9642529],
        [-76.64127119999999, 39.0457549],
        [-120.5542012, 43.8041334],
        [-101.8782822, 33.5842591],
        [-97.29286929999999, 37.7193933],
        [-84.4821719, 42.701848],
        [-82.6086662, 27.4408534],
        [-84.5120196, 39.1031182],
        [-99.7595898, 29.2177737],
        [-80.1917902, 25.7616798],
        [15.9665938, 45.7798131],
        [-75.3491813, 40.0375832],
        [-78.9382286, 36.0014258],
        [-84.2700179, 37.8393332],
        [-84.2700179, 37.8393332],
        [-75.3491813, 40.0375832],
        [-75.3491813, 40.0375832],
        [-87.9064736, 43.0389025],
        [-94.6858998, 46.729553],
        [-90.0715323, 29.95106579999999],
        [-79.3831843, 43.653226],
        [-95.3698028, 29.7604267],
        [-97.5164276, 35.4675602],
        [-71.0588801, 42.3600825],
        [-87.6297982, 41.8781136],
        [-118.2436849, 34.0522342],
        [-120.7401385, 47.7510741],
        [-74.4056612, 40.0583238],
        [-94.6858998, 46.729553],
        [-84.3879824, 33.7489954],
        [-97.5164276, 35.4675602],
        [-122.6793461, 45.5154586],
        [-97.5164276, 35.4675602],
        [-75.1652215, 39.9525839],
        [-90.0489801, 35.1495343],
        [-81.3792365, 28.5383355],
        [-90.0489801, 35.1495343],
        [-111.0937311, 39.3209801],
        [-121.4943996, 38.5815719],
        [-83.0457538, 42.331427],
        [20.4489216, 44.786568],
        [-120.7401385, 47.7510741],
        [-118.361322, 34.0790602],
        [-74.4056612, 40.0583238],
        [-46.6890154, -23.5800815],
        [-0.847544, 46.741536],
        [-79.3831843, 43.653226],
        [-83.0457538, 42.331427],
        [-120.7401385, 47.7510741],
        [-86.1349019, 40.2671941],
        [-81.6943605, 41.49932],
        [-94.6858998, 46.729553],
        [-94.6858998, 46.729553],
        [-112.0740373, 33.4483771],
        [-120.7401385, 47.7510741],
        [-98.49362819999999, 29.4241219],
        [-74.0059728, 40.7127753],
        [-81.6943605, 41.49932],
        [-87.6297982, 41.8781136],
        [-95.3698028, 29.7604267],
        [-96.79698789999999, 32.7766642],
        [-95.3698028, 29.7604267],
        [-104.990251, 39.7392358],
        [-71.0588801, 42.3600825],
        [-80.8431267, 35.2270869],
        [-97.5164276, 35.4675602],
        [-87.6297982, 41.8781136],
        [-122.6793461, 45.5154586],
        [-75.1652215, 39.9525839],
        [-80.8431267, 35.2270869],
        [-74.4056612, 40.0583238],
        [-121.4943996, 38.5815719],
        [-111.0937311, 39.3209801],
        [-111.0937311, 39.3209801],
        [-87.9064736, 43.0389025],
        [-119.4179324, 36.778261],
        [-112.0740373, 33.4483771],
        [-120.7401385, 47.7510741],
        [-80.8431267, 35.2270869],
        [-122.6793461, 45.5154586],
        [-83.0457538, 42.331427],
        [-119.4179324, 36.778261],
        [-122.6793461, 45.5154586],
        [-95.3698028, 29.7604267],
        [-79.3831843, 43.653226],
        [-87.9064736, 43.0389025],
        [-96.79698789999999, 32.7766642],
        [-95.3698028, 29.7604267],
        [-75.1652215, 39.9525839],
        [-95.3698028, 29.7604267],
        [-104.990251, 39.7392358],
        [-71.0588801, 42.3600825],
        [-71.0588801, 42.3600825],
        [-86.1349019, 40.2671941],
        [-97.5164276, 35.4675602],
        [-84.3879824, 33.7489954],
        [-90.0489801, 35.1495343],
        [-81.6943605, 41.49932],
        [-121.4943996, 38.5815719],
        [-80.1917902, 25.7616798],
        [-81.6943605, 41.49932],
        [-119.4179324, 36.778261],
        [-87.6297982, 41.8781136],
        [-90.0715323, 29.95106579999999],
        [-90.0715323, 29.95106579999999],
        [34.0461, 31.8516],
        [-81.3792365, 28.5383355],
        [-94.6858998, 46.729553],
        [-83.0457538, 42.331427],
        [-122.6793461, 45.5154586],
        [-81.6943605, 41.49932],
        [-120.7401385, 47.7510741],
        [-121.4943996, 38.5815719],
        [-90.0715323, 29.95106579999999],
        [-75.1652215, 39.9525839],
        [-80.8431267, 35.2270869],
        [-94.6858998, 46.729553],
        [-104.990251, 39.7392358],
        [-111.0937311, 39.3209801],
        [-96.79698789999999, 32.7766642],
        [-71.0588801, 42.3600825],
        [-87.9064736, 43.0389025],
        [-81.6943605, 41.49932],
        [-97.5164276, 35.4675602],
        [-73.9441579, 40.6781784],
        [-84.3879824, 33.7489954],
        [-97.5164276, 35.4675602],
        [-111.0937311, 39.3209801],
        [-118.2436849, 34.0522342],
        [-74.0059728, 40.7127753],
        [-84.3879824, 33.7489954],
        [-98.49362819999999, 29.4241219],
        [-86.1349019, 40.2671941],
        [-87.6297982, 41.8781136],
        [-112.0740373, 33.4483771],
        [-112.0740373, 33.4483771],
        [-121.4943996, 38.5815719],
        [-81.3792365, 28.5383355],
        [-81.3792365, 28.5383355],
        [-84.3879824, 33.7489954],
        [-111.0937311, 39.3209801],
        [-112.0740373, 33.4483771],
        [-95.3698028, 29.7604267],
        [-79.3831843, 43.653226],
        [-87.6297982, 41.8781136],
        [-104.990251, 39.7392358],
        [-111.0937311, 39.3209801],
        [-71.0588801, 42.3600825],
        [-87.9064736, 43.0389025],
        [-112.0740373, 33.4483771],
        [-71.0588801, 42.3600825],
        [-97.5164276, 35.4675602],
        [-94.6858998, 46.729553],
        [-87.6297982, 41.8781136],
        [-80.1917902, 25.7616798],
        [-80.8431267, 35.2270869],
        [-81.6943605, 41.49932],
        [-118.2436849, 34.0522342],
        [-80.8431267, 35.2270869],
        [-118.2436849, 34.0522342],
        [-112.0740373, 33.4483771],
        [-97.5164276, 35.4675602],
        [-98.49362819999999, 29.4241219],
        [-75.1652215, 39.9525839],
        [-75.1652215, 39.9525839],
        [-90.0489801, 35.1495343],
        [-3.718427, 40.626607],
        [15.9819189, 45.8150108]
    ];

    let arenas = [
        [-84.39500960000001, 33.758264],
        [-80.844303, 35.227947],
        [-81.6882129, 41.496479],
        [-105.0077106, 39.748549],
        [-73.933087, 40.696067],
        [-86.1555662, 39.763989],
        [-118.3881946, 33.922003],
        [-80.18768089999999, 25.781401],
        [-82.64214059999999, 27.771824],
        [-90.0767254, 29.948458],
        [-81.3999075, 28.635669],
        [-112.0718561, 33.445875],
        [-97.25879309999999, 32.933946],
        [-122.3629611, 47.621786],
        [-111.901293, 40.767474],
        [-71.0630784, 42.364191],
        [-87.6741759, 41.880690],
        [-96.810148, 32.790314],
        [-83.2457929, 42.696884],
        [-95.36206109999999, 29.750906],
        [-118.2528422, 34.057377],
        [-90.0508634, 35.143103],
        [-87.8649495, 42.980359],
        [-74.0921532, 40.818763],
        [-73.9916586, 40.749831],
        [-75.17197159999999, 39.901179],
        [-78.76796809999999, 35.745806],
        [-98.4374874, 29.427147],
        [-79.3790818, 43.643520],
        [-77.0210022, 38.898005]
    ];

    let yearly = [
        90.00,
        70.00,
        83.33,
        60.00,
        66.67,
        80.00,
        50.00,
        86.67,
        80.00
    ];

    let geojson = {};

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
        projection.rotate([yaw, -23]);

        context.clearRect(0, 0, 800, 600);

        context.lineWidth = 0.5;
        context.strokeStyle = 'gold';

        context.beginPath();
        geoGenerator({ type: 'FeatureCollection', features: geojson.features });
        context.stroke();

        // Graticule
        let graticule = d3.geoGraticule();
        context.beginPath();
        context.strokeStyle = 'black';
        geoGenerator(graticule());
        context.stroke();

        yaw -= 1;

        let checked = [];
        let sumPercentUS = 0;
        let sumCount = 0;

        d3.selectAll('.xbox').each(function (d) {
            checked.push(d3.select(this).property('checked'));
        });
        if (checked.every(el => el == false)) {
            let newVal = 0;
            label.text(newVal);
            needle.transition().duration(1500).ease(d3.easeElastic)
                .attr('transform', `rotate(${angleScale(newVal)})`);
        }

        

        if (d3.select('.x1').property('checked')) {
            draftLocations.slice(0, 29).forEach(datum => {
                let circle = d3.geoCircle().center([datum[0], datum[1]]).radius(1);
                context.beginPath();
                context.strokeStyle = 'red';
                geoGenerator(circle());
                context.stroke();
            });

            sumPercentUS += yearly[0];
            sumCount += 1;
        }
        if (d3.select('.x2').property('checked')) {
            draftLocations.slice(30, 59).forEach(datum => {
                let circle = d3.geoCircle().center([datum[0], datum[1]]).radius(1);
                context.beginPath();
                context.strokeStyle = 'red';
                geoGenerator(circle());
                context.stroke();
            });

            sumPercentUS += yearly[1];
            sumCount += 1;
        }
        if (d3.select('.x3').property('checked')) {
            draftLocations.slice(60, 89).forEach(datum => {
                let circle = d3.geoCircle().center([datum[0], datum[1]]).radius(1);
                context.beginPath();
                context.strokeStyle = 'red';
                geoGenerator(circle());
                context.stroke();
            });

            sumPercentUS += yearly[2];
            sumCount += 1;
        }
        if (d3.select('.x4').property('checked')) {
            draftLocations.slice(90, 119).forEach(datum => {
                let circle = d3.geoCircle().center([datum[0], datum[1]]).radius(1);
                context.beginPath();
                context.strokeStyle = 'red';
                geoGenerator(circle());
                context.stroke();
            });

            sumPercentUS += yearly[3];
            sumCount += 1;
        }
        if (d3.select('.x5').property('checked')) {
            draftLocations.slice(120, 149).forEach(datum => {
                let circle = d3.geoCircle().center([datum[0], datum[1]]).radius(1);
                context.beginPath();
                context.strokeStyle = 'red';
                geoGenerator(circle());
                context.stroke();
            });

            sumPercentUS += yearly[4];
            sumCount += 1;
        }
        if (d3.select('.x6').property('checked')) {
            draftLocations.slice(150, 179).forEach(datum => {
                let circle = d3.geoCircle().center([datum[0], datum[1]]).radius(1);
                context.beginPath();
                context.strokeStyle = 'red';
                geoGenerator(circle());
                context.stroke();
            });

            sumPercentUS += yearly[5];
            sumCount += 1;
        }
        if (d3.select('.x7').property('checked')) {
            draftLocations.slice(180, 209).forEach(datum => {
                let circle = d3.geoCircle().center([datum[0], datum[1]]).radius(1);
                context.beginPath();
                context.strokeStyle = 'red';
                geoGenerator(circle());
                context.stroke();
            });

            sumPercentUS += yearly[6];
            sumCount += 1;
        }
        if (d3.select('.x8').property('checked')) {
            draftLocations.slice(210, 239).forEach(datum => {
                let circle = d3.geoCircle().center([datum[0], datum[1]]).radius(1);
                context.beginPath();
                context.strokeStyle = 'red';
                geoGenerator(circle());
                context.stroke();
            });

            sumPercentUS += yearly[7];
            sumCount += 1;

        }
        if (d3.select('.x9').property('checked')) {
            draftLocations.slice(240, draftLocations.length).forEach(datum => {
                let circle = d3.geoCircle().center([datum[0], datum[1]]).radius(1);
                context.beginPath();
                context.strokeStyle = 'red';
                geoGenerator(circle());
                context.stroke();
            });

            sumPercentUS += yearly[8];
            sumCount += 1;
        }

        if (sumCount != 0) {
            let newVal = parseFloat(Math.round(sumPercentUS / sumCount * 100) / 100).toFixed(2);
                label.text(`${newVal}%`);
                needle.transition().duration(1500).ease(d3.easeElastic)
                    .attr('transform', `rotate(${angleScale(newVal)})`);
        }

        if (checked.every(el => el == true)) {
            let newVal = 74.07;
            label.text(`${newVal}%`);
            needle.transition().duration(1500).ease(d3.easeElastic)
                .attr('transform', `rotate(${angleScale(newVal)})`);
        }
    }

    // REQUEST DATA
    d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json', function (err, json) {
        geojson = json;
        window.setInterval(update, 25);
    });

    // GAUGE
    const EXTRA_ANGLE = 15,
        whRatio = 1 / (Math.sin(deg2rad(EXTRA_ANGLE)) + 1.1),
        r = Math.min(window.innerWidth, window.innerHeight * whRatio) / 1.5,
        angleScale = d3.scaleLinear().domain([0, 100]).range([-90 - EXTRA_ANGLE, 90 + EXTRA_ANGLE])

    const gaugeSVG = d3.select('#gauge')
        .attr('width', r)
        .attr('height', r)
        .attr('viewBox', `${-r} ${-r} ${r * 2} ${r * 2 * whRatio}`)

    // Axis
    gaugeSVG.append('g').classed('axis', true)
        .call(d3.axisRadialInner(
            angleScale.copy().range(angleScale.range().map(deg2rad)),
            r - 5
        ))

    // Needle
    const needle = gaugeSVG.append('g')
        .attr('transform', `scale(${r * 0.85})`)
        .append('path').classed('needle', true)
        .attr('d', ['M0 -1', 'L0.03 0', 'A 0.03 0.03 0 0 1 -0.03 0', 'Z'].join(' '))
        .attr('transform', `rotate(${angleScale(0)})`)

    // Label
    const label = gaugeSVG.append('text').classed('label', true)
        .attr('x', 0)
        .attr('y', r * 0.2)
        .attr('text-anchor', 'middle')
        .text('0')

    function deg2rad(deg) { return deg * Math.PI / 180 }


    let countriesHash = {
        "AU": "Australia",
        "AT": "Austria",
        "BS": "Bahamas",
        "BA": "Bosnia and Herzegovina",
        "BR": "Brazil",
        "CM": "Cameroon",
        "CA": "Canada",
        "HR": "Croatia",
        "CZ": "Czech Republic",
        "DO": "Dominican Republic",
        "DRC": "DR Congo",
        "FI": "Finland",
        "FR": "France",
        "DE": "Germany",
        "GR": "Greece",
        "HT": "Haiti",
        "IL": "Israel",
        "LV": "Latvia",
        "LT": "Lithuania",
        "ME": "Montenegro",
        "NZ": "New Zealand",
        "NG": "Nigeria",
        "PR": "Puerto Rico",
        "RU": "Russia",
        "SN": "Senegal",
        "RS": "Serbia",
        "SI": "Slovenia",
        "ES": "Spain",
        "CH": "Switzerland",
        "TR": "Turkey",
        "UA": "Ukraine",
        "VE": "Venezuela"
    };


    // Bar Graph
    let barGraphSVG = d3.select("#bar"),
        margin = { top: 20, right: 20, bottom: 30, left: 50 },
        width = +barGraphSVG.attr("width") - margin.left - margin.right,
        height = +barGraphSVG.attr("height") - margin.top - margin.bottom;

    let tooltip = d3.select("body").append("div").attr("class", "toolTip");

    let x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
        y = d3.scaleLinear().rangeRound([height, 0]);

    let colours = d3.scaleOrdinal()
        .range(["#6F257F", "#CA0D59"]);

    let g = barGraphSVG.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.json("src/data.json", function (error, data) {
        if (error) throw error;

        x.domain(data.map(function (d) { return d.country; }));
        y.domain([0, d3.max(data, function (d) { return d.frequency; })]);

        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y).ticks(6).tickFormat(function (d) { return parseInt(d); }).tickSizeInner([-width]))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .attr("fill", "#5D6971");

        g.append("text")
            .attr("x", (width / 2))
            .attr("y", 11)
            .attr("text-anchor", "middle")
            .style("font-size", "26px")
            .style("text-decoration", "underline")
            .style('fill', 'gold')
            .text("Non-US Drafted Players 2010-2018");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("x", function (d) { return x(d.country); })
            .attr("y", function (d) { return y(d.frequency); })
            .attr("width", x.bandwidth())
            .attr("height", function (d) { return height - y(d.frequency); })
            .attr("fill", function (d) { return colours(d.country); })
            .on("mousemove", function (d) {
                tooltip
                    .style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .style("display", "inline-block")
                    .html((countriesHash[d.country]) + "<br>" + (d.frequency) + " drafted players");
            })
            .on("mouseout", function (d) { tooltip.style("display", "none"); });
    });
});