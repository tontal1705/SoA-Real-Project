const getMap = (data, allcountries) => {

    const parseData = JSON.parse(data)
    const parseCountries = JSON.parse(allcountries)

    var map = L.map('map').setView([15, 101], 1);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
    }).addTo(map);

    for (const key in parseData) {
        if (parseData[key].value == null) {

            const color = 'black';
            const fillColor = '#344246';

            Circle(color, fillColor, parseData, parseCountries, key);
        } else if (parseData[key].value >= 5000) {

            const color = 'red';
            const fillColor = '#f03';

            Circle(color, fillColor, parseData, parseCountries, key);
        } else if (parseData[key].value < 5000 && parseData[key].value >= 500) {

            const color = 'orange';
            const fillColor = '#ffa64d';

            Circle(color, fillColor, parseData, parseCountries, key);
        } else if (parseData[key].value < 500) {

            const color = 'green';
            const fillColor = '#33cc33';

            Circle(color, fillColor, parseData, parseCountries, key);
        }

        function Circle(color, fillColor, parseData, parseCountries, key) {

            L.circle([parseData[key].lat, parseData[key].long], {
                color: color,
                fillColor: fillColor,
                fillOpacity: 0.5,
                radius: 200000
            }).bindPopup(`<b>${parseCountries[key].state} </b><b>${parseCountries[key].country}</b>
        <br>confirmed:${parseCountries[key].confirmed}
        <br>recovered:${parseCountries[key].recovered}
        <br>death:${parseCountries[key].death}`).addTo(map);
        }
    }
}