

document.addEventListener('DOMContentLoaded', () =>{
    const lista1 = document.getElementsByClassName('lista1');
    console.log(lista1);
    const botonMenuVinos = document.getElementById('menu-vinos');
    console.log(botonMenuVinos);
    const divMenuContenedor = document.getElementById('menu-contenedor');
    console.log(divMenuContenedor);
    const subMenuVinos = document.getElementsByClassName('submenu-vinos');
    console.log(subMenuVinos);
    const subMenuContendor = document.getElementsByClassName('submenu-contenedor');
    console.log(subMenuContendor);


    botonMenuVinos.addEventListener('click', ()=>{

        if(divMenuContenedor.style.display === 'none' || divMenuContenedor.style.display === ''){

            divMenuContenedor.style.display = 'block';

        }else{

            divMenuContenedor.style.display = 'none';
        }

    });

    const arraysubMenuVinos = Array.from(subMenuVinos);
    console.log(arraysubMenuVinos);
    const arraysubMenuContendor = Array.from(subMenuContendor);
    console.log(arraysubMenuContendor);

    arraysubMenuVinos.forEach((boton, index) => {
        console.log(boton);
        boton.addEventListener('click', (e)=>{

            arraysubMenuContendor.forEach(e =>{
                e.style.display = 'none';
            })

            if(boton.innerText === 'Trapiche'){

                arraysubMenuContendor[index].style.display = 'flex';

            }else if(boton.innerText === 'Catena Z'){

                arraysubMenuContendor[index].style.display = 'flex';

            }else if(boton.innerText === 'Zuccari'){

                arraysubMenuContendor[index].style.display = 'flex'; 

            }else if(boton.innerText === 'Salentein'){

                arraysubMenuContendor[index].style.display = 'flex';

            }else{

                // No logre que las img al tocar la pantalla se vuelvan a ocultar

                const clickeado = boton.contains(e.target);
                console.log(clickeado)

                if(!clickeado){
                    arraysubMenuContendor[index].style.display = 'none';

                }
                
            }
               
        })
    })

    

    // function manejarCartel (){

    //     const cartel = document.getElementById('cartel');
    
    //     document.getElementById('botonSi').addEventListener('click', (e)=>{
    
    //         if(e.target){
    //             cartel.style.display = 'none';
    //             localStorage.clear();
    //             agregarCarrito();
    //             comprar();
    //         }
            
    //     })
    
    //     document.getElementById('botonNo').addEventListener('click', (e)=>{
    
    //         if(e.target){
    //             cartel.style.display = 'none';
    //             agregarCarrito();
    //             comprar();
    //         }
    //     })
    
    // }

    // manejarCartel();
    localStorage.clear();

})

function agregarCarrito (){

    const agregarProducto = document.getElementsByClassName('agregar');
    const agregar = Array.from(agregarProducto);
    console.log(agregar);



class Productos {
    constructor(nombre, precio){

        this.nombre = nombre,
        this.precio = precio
    }
}

class Carrito{

    constructor(){
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    obtenerProductos() {
        return this.productos;
    }
}

const carrito = new Carrito();

agregar.forEach(boton =>{

    boton.addEventListener('click', (e) =>{

        const productoDiv = e.target.closest('.vinos');
        console.log(productoDiv);

        const precio = productoDiv.querySelector('span').innerText;
        console.log(precio);
        const nombre = productoDiv.querySelector('img').alt;
        console.log(nombre);
        
        const producto = new Productos(nombre, precio);

        carrito.agregarProducto(producto);

        console.log('Producto agregado', producto);
        console.log('carrito:', carrito.obtenerProductos());

        localStorage.setItem('carrito', JSON.stringify(carrito.obtenerProductos()));

        // comprar();
        })
    })
}

const comprar = () =>{

    const productosEnElCarrito = JSON.parse(localStorage.getItem('carrito'));
    console.log(productosEnElCarrito);
    let longCarrito = productosEnElCarrito.length;
    console.log(longCarrito);

    const tabla = document.querySelectorAll('.td');
    console.log(tabla);

    const tbody = document.querySelector('tbody');
    console.log(tbody);
    tbody.innerText = '';

    productosEnElCarrito.forEach((producto , index) =>{

        const tr = document.createElement('tr');

        const tdIndex = document.createElement('td');
        tdIndex.innerText = index + 1;

        const tdNombre = document.createElement('td');
        tdNombre.innerHTML = producto.nombre;

        const tdPrecio = document.createElement('td');
        tdPrecio.innerText = `$${producto.precio}`;

        const tdCantidad = document.createElement('td');
        tdCantidad.innerText = '1';

        tr.appendChild(tdIndex) ;
        tr.appendChild(tdNombre) ;
        tr.appendChild(tdPrecio) ;
        tr.appendChild(tdCantidad) ;

        tbody.appendChild(tr);
        

    })

    const total = productosEnElCarrito.reduce((acc , el) => acc + Number(el.precio) , 0);

    document.getElementById('total').innerText = `$${total}`;
    console.log(total)

    document.getElementById('cantidadDeBotellas').innerText = longCarrito;
}

agregarCarrito();
comprar();

const cartel = document.getElementById('cartel2');

document.getElementById('comprar').addEventListener('click', (e)=>{
    

    if(e.target){
        localStorage.clear()
        cartel.style.display = 'flex';
    }
})