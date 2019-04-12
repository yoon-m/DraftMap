# NBA Draft Data Visualization
## Background and Overview
    The goal of this project is to create a visual representation of data related to 
    the players that are drafted into the NBA each year. Users will be able to see 
    where players are being drafted from, and data about each drafted player's 
    physical measurements.
## Functionality and MVP Features
    * MVPS
        - Drafted players will be sorted by hometown
        - Will have a visualization of drafted players' hometowns over time (from 1990-current)
    * BONUS
        - Will have filters for common measurables (position, height, weight, wingspan, standing vertical leap, etc.).
## Architecture and Technologies
    * D3
        - Used to bind data to the DOM and apply data driven transformations
    * D3 Geojson
        - Used to render shapes based on geographical information
    * GoogleMaps API
        - Used to geocode drafted players' college locations
## Implementation Timeline
    * Day 1:
        - Become familiar with the basics of D3 
        - Test external API using Postman
        - Set up initial Node API backend to test API
    * Day 2:
        - Set up frontend/backend communication
        - Set up initial page layout with the map
        - Become familiar with making graphs/plots using D3
    * Day 3: 
        - Populate drafted players' hometown location data in the frontend
        - Become familiar with manipulating data using D3
    * Day 4:
        - Work on styling the first MVP
        - Start on getting the first few filters (position, height, weight)
