const contenedor = document.getElementById('contenedor');
const btnPizza = document.getElementById('btn-pizza');
const btnMilanesa = document.getElementById('btn-milanesa');
const btnHamburguesa = document.getElementById('btn-hamburguesa');
const btnEmpanadas = document.getElementById('btn-empanadas');
const btnHelado = document.getElementById('btn-helado');
const precioTotal = document.getElementById('precioTotal');

let total = 0;
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para poder mostrar el carrito
const renderCarrito = () => {
    contenedor.innerHTML = '';
    carrito.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="nombreProducto">${item.nombre}</td>
            <td class="valorProducto">$${item.precio}</td>
            <td class="borrarProducto"><button class="borrar">Borrar</button></td>
        `;
        contenedor.appendChild(tr);

        const btnBorrar = tr.querySelector('.borrar');
        btnBorrar.addEventListener('click', () => {
            Swal.fire({
                icon: "error",
                title: "Eliminaste tu pedido",
                text: `Eliminaste tu compra (${item.nombre}).`
            });
            carrito = carrito.filter(product => product.id !== item.id);
            total -= item.precio;
            precioTotal.textContent = `Total: $${total}`;
            localStorage.setItem('carrito', JSON.stringify(carrito));
            renderCarrito();
        });
    });
    total = carrito.reduce((acc, item) => acc + item.precio, 0);
    precioTotal.textContent = `Total: $${total}`;
};


//Array de menu 
const menuD = [
    { id: 0,  nombre: "Pizza", precio: 10000 },
    { id: 1,  nombre: "Milanesa", precio: 5000 },
    { id: 2,  nombre: "Hamburguesa", precio: 7000 },
    { id: 3,  nombre: "Empanada de Carne", precio: 1000 }
    
    ];
    console.log("ESTE ES NUESTRO STOCK DE MENÚ Y POSTRE DISPONIBLE")
    const getMenu= (dataMenuD) =>{
        return new Promise((resolve, reject)=> {
            setTimeout(()=>{
                resolve(dataMenuD);
            },3000);
        });
    };
    getMenu(menuD)
    
    .then((dataMenuD)=> console.log(dataMenuD))
    .catch((error)=>console.error(error))
    .finally(()=>console.log ("Fin del listado de menú disponible!"))
    
    
    //Array de Postres
    const postre = [
    { id: 0,  nombre: "Chocolate", precio: 1000 },
    { id: 1,  nombre: "Vainilla", precio: 1000 },
    { id: 2,  nombre: "Dulce de Leche", precio: 1000 },
    { id: 3,  nombre: "Frutilla", precio: 1000 }
        
    ];
    
    
    const getPostre= (dataPostre) =>{
        return new Promise((resolve, reject)=> {
            setTimeout(()=>{
                resolve(dataPostre);
            },3000);
        
        });
        
    };
    getMenu(postre)
    
    .then((dataPostre)=> console.log(dataPostre))
    .catch((error)=>console.error(error))
    .finally(()=>console.log ("Fin del listado de postres disponibles!"))