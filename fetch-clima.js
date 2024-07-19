function obtenerClima() {
    const apiKey = '4755d15ec000387b2d68a6b48d94ba4d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            mostrarClima(data); 
        })
        .catch(error => {
            console.error('Error al obtener datos del clima:', error);
        });
}

function mostrarClima(data) {
    const climaCiudad = document.getElementById('climaCiudad');
    const temperatura = document.getElementById('temperatura');
    const descripcion = document.getElementById('descripcion');

    climaCiudad.textContent = data.name;
    temperatura.textContent = `${Math.round(data.main.temp)}°C`;
    descripcion.textContent = data.weather[0].description;
}
