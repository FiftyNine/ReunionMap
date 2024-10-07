let map, popup, Popup;

/** Initializes the map and the custom popup. */
async function initMap() {
  // const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40, lng: 15 },
    zoom: 3,
    mapId: 'f36c7f92e6086cb9'
  });

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  for (const d of destinations)
  {
    const pin = new google.maps.marker.PinElement({
      scale: d.eliminated ? 0.75 : 1,
      background: d.eliminated ? "#a6a6a6" : "#ea4335",
      glyphColor: d.eliminated ? "#515151" : "#b31412",
      borderColor: d.eliminated ? "#5e5e5e" : "#c5221f",
    });

    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: { lat: d.lat, lng: d.lon },
      title: d.name,
      gmpClickable: true,
      content: pin.element
    });
  
    marker.addListener('click', ({domEvent, latLng}) => {
      const {target} = domEvent;
      infoWindow.close();
      let content = document.getElementById("destination-popup");
      var dn = document.getElementById("destination-name");
      dn.innerText = d.name + ", " + d.country;
      dn.setAttribute("href", "https://en.wikipedia.org/wiki/" + d.name);
      document.getElementById("destination-temperature").innerText = d.temperature;
      document.getElementById("destination-population").innerText = d.population;
      document.getElementById("destination-temperature").innerText = d.temperature;
      document.getElementById("destination-escape").innerText = d.escape_rooms;
      document.getElementById("destination-food").innerText = d.food;
      document.getElementById("destination-safety").innerText = d.safety;
      document.getElementById("destination-availability").innerText = d.ease_of_access;
      document.getElementById("destination-attractions").innerText = d.attractions.join(", ");
      var indicators = document.getElementById("destination-carousel-indicators");
      indicators.innerHTML = "";
      var slides = document.getElementById("destination-carousel-slides");
      slides.innerHTML = "";
      for (let i = 0; i < d.images.length; i++)
      {
        let indicator = document.createElement("li");
        indicator.setAttribute("data-target", "#destination-carousel");
        indicator.setAttribute("data-slide-to", i.toString());
        if (i == 0)
          indicator.classList.add("active");
        indicators.appendChild(indicator);
        let slide = document.createElement("div");
        slide.classList.add("carousel-item");
        if (i == 0)
          slide.classList.add("active");
        let img = document.createElement("img");
        img.classList.add("d-block");
        img.classList.add("mw-100");
        img.classList.add("mh-100");
        img.alt = i.toString();
        img.src = "img/" + d.images[i];
        slide.append(img);
        slides.appendChild(slide);
      }      
      infoWindow.setContent(content.outerHTML);
      infoWindow.open(marker.map, marker);
    });  
  }
}

window.initMap = initMap;