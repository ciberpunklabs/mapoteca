// Formulario
var stringFormulario = "<form name='form' id='formulario'><br><label for='titulo'>Nombre</label><br><input type='text' id='titulo' name='titulo' class='popupInput' placeholder='Ej Parque, biblioteca, centro cultural, etc' required/><br><label for='choice'>Eje programático</label><br><input list='flavors' class='popupInput' id='choice' name='categoria' placeholder='Asigna a un eje programático' required/><datalist id='flavors'><option value='Democracia y Ciudadanía'><option value='Ecología y Protección ambiental'><option value='Educación'><option value='Salud'><option value='Justicia social y Solidaridad'><option value='Economía local y creativa'><option value='Economía sustentable y a escala humana'><option value='Cultura'><option value='Otro'></datalist><br><label for='titulo'>Descripción</label><br><input type='text' name='descripcion' class='popupInput' id='descripcion' placeholder='¡Expláyate!' required><br><label for='Participar'>¿Quieres participar?</label><br><input list='participar' name='participar' class='popupInput' id='participar2' placeholder='¿Te gustaría que te contactáramos?'/><datalist id='participar'><option value='Sí'><option value='No'></datalist><br><input type='submit' class='popupButtons' value='Guardar'><input type='button' class='popupButtons' onclick='deleteMarker()' value='Eliminar'></form>";

// Iconos
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var orangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var greyIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blackIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Crea layers
var otro = L.layerGroup();
var cultura = L.layerGroup();
var democracia = L.layerGroup();
var ecologia = L.layerGroup();
var educacion = L.layerGroup();
var salud = L.layerGroup();
var justicia = L.layerGroup();
var economialocal = L.layerGroup();
var economiasustentable = L.layerGroup();

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a> ' + '| Copyleft <a href="https://github.com/ciberpunklabs">CiberpunkLabs</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

// CREA EL MAPA
// mymap = L.map('mapid').setView([-36.827089, -73.050241], 15, {draggable: false});
var mymap = L.map('mapid', {
    center: [-36.827089, -73.050241],
    zoom: 15,
    layers: [streets,cultura,democracia,ecologia,educacion,salud,justicia,economialocal,economiasustentable]
});
mymap.doubleClickZoom.disable();    

// Marcador inicial
marker = L.marker([-36.82699, -73.04977], {draggable: true}).addTo(mymap);
marker.bindPopup("<p><b>Bienvenida/o a la Plaza Caupolicán</b><br>Haz <b>doble click</b> en los lugares del mapa donde veas una oportunidad para mejorar tu barrio. <br><br>¡No olvides guardar la info presionando <q>Guardar</q>!</p>"); //.openPopup();

var baseLayers = {
    "Streets": streets
};

var overlays = {
    "<span style='color:#7B7B7B'>Cultura</span>": cultura,
    "<span style='color:#9C2BCB'>Democracia y Ciudadanía</span>":  democracia,
    "<span style='color:#2AAD27'>Ecología y Protección ambiental</span>":ecologia,
    "<span style='color:#CAC428'>Educación</span>":educacion,
    "<span style='color:#CB2B3E'>Salud</span>": salud,
    "<span style='color:#FFD326'>Justicia social y Solidaridad</span>": justicia,
    "<span style='color:#CB8427'>Economía local y creativa</span>": economialocal,
    "<span style='color:#2A81CB'>Economía sustentable y a escala humana</span>": economiasustentable,
    "<span style='color:#3D3D3D'>Otro</span>": otro    
};



// Añade marcadores guardados en BBDD
for (var i=0; i < markers.length; ++i) {
    switch(markers[i].categoria) {
    case "Otro":
	console.log(markers[i].categoria)
	thisIcon = greyIcon;
	categoria = otro;
	break;
    case "Cultura":
	console.log(markers[i].categoria)	    
	thisIcon = blackIcon;
	categoria = cultura;
	break;
    case "Democracia y Ciudadanía":  
	console.log(markers[i].categoria)	    
	thisIcon = violetIcon;
	categoria = democracia;
	break;
    case "Ecología y Protección ambiental":
	console.log(markers[i].categoria)	    
	thisIcon = greenIcon;
	categoria = ecologia;
	break;	
    case "Educación": 
	console.log(markers[i].categoria)	    
	thisIcon = yellowIcon;
	categoria = educacion;
	break;
    case "Salud": 
	console.log(markers[i].categoria)	    
	thisIcon = redIcon;
	categoria = salud;
	break;
    case "Justicia social y Solidaridad": 
	console.log(markers[i].categoria)	    
	thisIcon = goldIcon;
	categoria = justicia;
	break;
    case "Economía local y creativa": 
	console.log(markers[i].categoria)	    
	thisIcon = orangeIcon;
	categoria = economialocal;
	break;
    case "Economía sustentable y a escala humana": 
	console.log(markers[i].categoria)	    
	thisIcon = blueIcon;
	categoria = economiasustentable;
	break;
    } 

    L.marker([markers[i].lat, markers[i].lng], {icon: thisIcon})
	.bindPopup('<b>' + markers[i].titulo + '</b><br>' + markers[i].categoria + '<br><br>' + markers[i].descripcion)
	.addTo(categoria);
}   

L.control.layers(null,overlays,{collapsed:true}).addTo(mymap);


// Responde ante click en mapa
function onMapClick(e) {
    //marker = L.marker(e.latlng, {draggable: true}).addTo(mymap);
    marker = L.marker(e.latlng).addTo(mymap);	
    marker.bindPopup(stringFormulario, {closeButton: false, closeOnClick: false, keepInView: true}).openPopup();
    
    LATLNG = e.latlng.toString(); //marker.getLatLng();
    //console.log("latlng: " + LATLNG)
    //console.log("type latlng: " + typeof LATLNG)	
}
mymap.on('dblclick', onMapClick);  

// Elimina el ultimo marcador BUG: No remueve los anteriores a este!!
function deleteMarker() {
    mymap.removeLayer(marker);
}

// Conexion con MySQL
function connect() {
    var formulario = document.getElementById("formulario");
    
    formulario.addEventListener("submit", function(e) {
	NMARKERS = NMARKERS + 2;
	e.preventDefault();
	console.log("Me diste click") 
	
	var datos = new FormData(formulario);
	datos.append('nombre', NOMBRE)
	datos.append('latlng', LATLNG);
	console.log("latlng inside: " + LATLNG)
	
	fetch('post2.php', {
	    method: 'POST',
	    body: datos
	})

	mymap.closePopup();
    }) 
}

