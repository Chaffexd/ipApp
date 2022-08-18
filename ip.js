// Store holders for data
window.addEventListener('load', () => {

    const ipHere = document.getElementById('ipHere');
    const countryHere = document.getElementById('countryHere');
    const countryCode = document.getElementById('countryCode');
    const countryFlag = document.getElementById('countryFlag');
    const provider = document.getElementById('provider');
    const asnPresent = document.getElementById('asnPresent');


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
        const {ip, country_name, country_code, emoji_flag, time_zone, latitude, longitude} = data;
        const name = data.asn ? data.asn.name : undefined; 
        if (name) {
            provider.textContent = ` ${name}`;
        } else {
            asnPresent.innerHTML = 'Your time zone is ';
            provider.textContent = data.time_zone.abbr;
        }

        console.log(longitude, latitude);
        console.log(time_zone.name);

        // Setting data from API to a DOM element
        ipHere.textContent = `${ip}`;
        countryHere.textContent = country_name;
        countryCode.textContent = country_code;
        countryFlag.textContent = emoji_flag;
        // provider.textContent = name;

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
    
        tabTwo.addEventListener('click', () => {
            location.style.display = 'none';
            dataContainer.style.display = 'block';
            tabOne.removeAttribute('class');
            tabTwo.classList.add('active');
            raw.innerHTML = JSON.stringify(data, null, " ");
            hljs.highlightAll();
        });

        tabOne.addEventListener('click', () => {
            dataContainer.style.display = 'none';
            location.style.display = 'block';
            tabTwo.removeAttribute('class');
            tabOne.classList.add('active');
        });

        
        const iconToCopy = document.getElementById("copy");
        const textToCopy = document.getElementById("ipHere");
        const successMessage = document.getElementById("copySuccess");

        iconToCopy.addEventListener("click", () => {
            navigator.clipboard.writeText(textToCopy)
            .then(() => {
                successMessage.classList.add("activeCopy");
                successMessage.style.display = "inline";
                successMessage.style.transition = "all 1s";

                console.log(textToCopy.innerHTML);
            })
            .then(() => {
                setTimeout(function () {
                    successMessage.classList.remove("activeCopy");
                    successMessage.style.animation = "fade-out 1s";
                    successMessage.style.display = 'none';
                }, 1000)
            })
            .catch((err) => {
                console.log(err)
            });
        });
    });
});




