

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


document.addEventListener('DOMContentLoaded', () =>{

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

})