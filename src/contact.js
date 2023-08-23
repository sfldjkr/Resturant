import phoneicon from './phone.svg'
import marker from './map-marker.svg'

let showContact = () => {
    // hide body element
    let bodyDiv = document.querySelector('.bodydiv');
    bodyDiv.innerHTML = '';

    let contactDiv = document.createElement('div');
    contactDiv.classList.add('contactdiv');
    
    let phoneDiv = document.createElement('div');
    phoneDiv.classList.add('phonediv');

    let phoneIcon = new Image();
    phoneIcon.src = phoneicon;

    phoneDiv.appendChild(phoneIcon);
    // let phoneNo = document.createElement('p');
    // phoneNo.innerText = `+977 9813677489`;
    let no = `+977 9813677489`;
    phoneDiv.innerHTML += no;

    // phoneDiv.appendChild(phoneNo);

    let locationDiv = document.createElement('div');
    locationDiv.classList.add('locationdiv');

    let locationIcon = new Image();
    locationIcon.src = marker;
    locationDiv.appendChild(locationIcon);
    locationDiv.innerHTML += `Sankhu Kathmandu, Bagmati 7`;

    let mapDiv = document.createElement('div');
    mapDiv.classList.add('mapdiv');
    mapDiv.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=421&amp;height=400&amp;hl=en&amp;q=Sankhu&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://gachanox.io/">Gacha Nox APK</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>`;
    
    contactDiv.appendChild(phoneDiv);
    contactDiv.appendChild(locationDiv);
    contactDiv.appendChild(mapDiv);
    bodyDiv.appendChild(contactDiv);


}

export {showContact}