const menu = [
    { id: 0, nombre: "Pizza", precio: 10000 },
    { id: 1, nombre: "Milanesa", precio: 5000 },
    { id: 2, nombre: "Hamburguesa", precio: 7000 },
    { id: 3, nombre: "Empanada de Carne", precio: 1000 },
    { id: 4, nombre: "Helado", precio: 1000 }
];



// Función para añadir un producto al carrito
const addToCart = (id) => {
    const item = menu.find(product => product.id === id);
    carrito.push(item);
    total += item.precio;
    precioTotal.textContent = `Total: $${total}`;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderCarrito();
};

document.addEventListener('DOMContentLoaded', () => {
    renderCarrito();

    btnPizza.addEventListener('click', () => {
        Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "Se agregó correctamente tu compra. El valor es de $10.000. Desea seguir comprando?"
        });
        addToCart(0);
    });

    btnMilanesa.addEventListener('click', () => {
        Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "Se agregó correctamente tu compra. El valor es de $5.000. Desea seguir comprando?"
        });
        addToCart(1);
    });

    btnHamburguesa.addEventListener('click', () => {
        Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "Se agregó correctamente tu compra. El valor es de $7.000. Desea seguir comprando?"
        });
        addToCart(2);
    });

    btnEmpanadas.addEventListener('click', () => {
        Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "Se agregó correctamente tu compra. El valor es de $1.000. Desea seguir comprando?"
        });
        addToCart(3);
    });

    btnHelado.addEventListener('click', () => {
        Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "Se agregó correctamente tu compra. El valor es de $1.000. Desea seguir comprando?"
        });
        addToCart(4);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '4755d15ec000387b2d68a6b48d94ba4d'; 
    const ciudad = 'Buenos Aires';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

     // muestro el clima a traves de imágenes... necesito buscar imagenes adecuadas
    const weatherImages = {
        'clear sky': 'url_de_la_imagen_del_sol.png',
        'few clouds': 'url_de_la_imagen_de_nubes.png',
        'scattered clouds': 'clima_nublado.jpg',
        'broken clouds': 'url_de_la_imagen_de_nubes.png',
        'shower rain': 'url_de_la_imagen_de_lluvia.png',
        'rain': 'url_de_la_imagen_de_lluvia.png',
        'thunderstorm': 'url_de_la_imagen_de_tormenta.png',
        'snow': 'url_de_la_imagen_de_nieve.png',
        'mist': 'url_de_la_imagen_de_neblina.png'
    };

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Obtengo la información que necesito
            const temperatura = data.main.temp;
            const descripcion = data.weather[0].description;

            // Muestro la información en el contenedor
            const climaContainer = document.getElementById('clima-container');
            climaContainer.innerHTML = `
                <h3>Clima en Buenos Aires</h3>
                <p>Temperatura: ${temperatura} °C</p>
                <p>Descripción: ${descripcion}</p>
            `;
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
            // Muestro un mensaje de error en el contenedor
            const climaContainer = document.getElementById('clima-container');
            climaContainer.innerHTML = '<p>Error al obtener el clima. Inténtalo de nuevo más tarde.</p>';
        });
});



