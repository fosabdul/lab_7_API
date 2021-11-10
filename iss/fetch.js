
// let url = 'https://iss-2560.herokuapp.com/iss-now'


// let url = 'http://api.open-notify.org/iss-now.json'

let url = 'https://api.wheretheiss.at/v1/satellites/25544'


let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeISsLocationFetched = document.querySelector('#time')

let update= 10000
let maxFailedAttempts = 3

let issMarker
let icon = L.icon({
    iconUrl: 'iss_icon.png',
    iconSize: [50, 50],
    iconAnchor: [25,25]
})
// let  map = L.map('iss-map').setView([51.505, -0.09], 13); // updated and now map from leaf 
let map = L.map("iss-map").setView([0, 0], 1)  

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2xhcmFsIiwiYSI6ImNqcmdwenViYTAwcHQ0Ym5yYmZ1Z3E2bjgifQ.QQfUvVaqPsWb_jJbP2gvHg'
}).addTo(map);


iss(maxFailedAttempts) // call function one time to start

// setInterval(iss, 10000) // 10 second 

// fetching function getting data from an API

function iss(attempts) {
    fetch(url)
    .then( (res) => res.json())
        .then( (issData) => {
            console.log(issData)
            let lat = issData.latitude
            let long = issData.longitude
            issLat.innerHTML = lat
            issLong.innerHTML = long
        
            if(!issMarker){  
                // 
                issMarker = issMarker = L.marker([lat, long], {icon: icon} ).addTo(map)
            } else {
                issMarker.setLatLng([lat, long])
            }
        
            let now = Date()  // date and time.  current time, ISS location map - are live

            // time.innerHTML = date // not working this  
            timeISsLocationFetched.innerHTML = `This data was fetched at ${now}`
        
    })
    // if an error occurs # catch runs and deals with errors 
    .catch( err => {
        attempts = attempts - 1 // subtract 1f from number of attempts 
        console.log(err)
        
    }).finally ( () => {
        setTimeout(iss, update)
    })

}
