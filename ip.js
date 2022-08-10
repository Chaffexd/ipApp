// Store holders for data
window.addEventListener('load', () => {

    const ipHere = document.getElementById('ipHere');
    const countryHere = document.getElementById('countryHere');
    const countryCode = document.getElementById('countryCode');
    const countryFlag = document.getElementById('countryFlag');
    const provider = document.getElementById('provider');


    const api = 'https://api.ipdata.co/?api-key=a518de11479a7774cc93a2ff374998f2dc01b4c7dfdc7f40a3abfd2c';
    fetch(api)
    .then(response => {
        return response.json();
    })

    .catch(error => {
        console.log(error)
    })

    .then(data => {
        console.log(data)
        // Choosing data from the API
        const {ip} = data;
        const {country_name} = data;
        const {country_code} = data;
        const {emoji_flag} = data;
        const {name} = data.asn;
        const {latitude, longitude} = data;

        console.log(longitude, latitude);
        // Setting data from API to a DOM element
        ipHere.textContent = ip;
        countryHere.textContent = country_name;
        countryCode.textContent = country_code;
        countryFlag.textContent = emoji_flag;
        provider.textContent = name;

        // For the map
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhZmZleGQiLCJhIjoiY2tvb3JtZXkzMGVoOTJ6cGNzcnpiY3FhbyJ9.uw49z7s69q2Igcpi5sWcIQ';
        const map = new mapboxgl.Map({
        container: 'map', // Container ID
        style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
        center: [longitude, latitude], // Starting position [lng, lat]
        zoom: 9, // Starting zoom level
        });
        // Add the search function
        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());

        const tabOne = document.getElementById('tabMap');
        const tabTwo = document.getElementById('tabData');
        const location = document.getElementById('map');
        const dataContainer = document.getElementById('rawData');
        const raw = document.querySelector('.language-json');

        tabOne.style.backgroundColor = '#F0F3F6';
        tabOne.style.color = '#2B354F';
    
        tabTwo.addEventListener('click', () => {
            location.style.display = 'none';
            dataContainer.style.display = 'block';
            tabTwo.style.backgroundColor = '#F0F3F6';
            tabTwo.style.color = '#2B354F';
            tabOne.style.backgroundColor = '#ffffff1a';
            tabOne.style.color = '#fff';
            dataContainer.style.width = '400px';
            dataContainer.style.height = '300px';
            raw.innerHTML = JSON.stringify(data, null, " ");
            hljs.highlightAll();
        });

        tabOne.addEventListener('click', () => {
            dataContainer.style.display = 'none';
            location.style.display = 'block';
            tabOne.style.backgroundColor = '#F0F3F6';
            tabOne.style.color = '#2B354F';
            tabTwo.style.backgroundColor = '#ffffff1a';
            tabTwo.style.color = '#fff';
        });

        
    });
});



