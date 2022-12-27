const nombre = prompt('ingrese su nombre')
const edad = prompt (parseInt('ingrese su edad'))
const calle = prompt (parseInt ('ingrese una calle'))
const persona1 = new Persona('Daiana', 35, 'Sarmiento');
const persona2 = new Persona('Andres', 29, '17 de agosto');

 console.log(persona1.nombre)
 console.log(persona2.nombre)



let nombreDeUsuario = prompt('Ingrese su nombre de usuario:');

if (nombreDeUsuario == '') {
    alert('No ingresaste el nombre de usuario!')
} else {
    alert('Nombre de usuario ingresado: '+nombreDeUsuario);
}



class Producto {
    constructor (nombre, precio){
    this.nombre = nombre.toUpperCase();  
    this.precio = Number(precio);
    this.cantidad = Number(cantidad)
    this.vendido = false;
    }
 sumarIva(){
     this.precio = this.precio *1.21;
     }
 vender() {
     this.vendido = true;
     }
    
     }

const producto1 = new Producto ('Killka Salentein Wines Tinto Malbec', 1063)
const producto2 = new Producto ('Killka Salentein Wines Chardonnay', 930)
const producto3 = new Producto ('Killka Salentein Wines Blanco Malbec', 1261)


 producto1.sumarIva();
 producto1.vender();
 producto2.sumarIva();

console.log(producto1)
console.log(producto2)
console.log(producto3)



let producto = ''
let precio = 0
let cantidad = 0
let preciototal = 0
let cantidadtotal = 0
let seguircomprando = false


do 
{
producto = prompt ('¿queres comprar una Camara Samsung, Auriculares JBL o ambos?')
cantidad = prompt ('¿cuantos queres comprar?')

switch (producto) 
{
case 'Killka Salentein Wines Tinto Malbec':
    precio = 1063;
    break;
    case 'Killka Salentein Wines Chardonnay':
    precio = 930;
    break;
    case 'ambos':
    precio = 1993
    break;
    default: 
    alert('el producto no esta en stock!')
    precio = 0
    cantidad = 0
    break;
}
preciototal+= precio * cantidad
cantidadtotal += cantidad


seguircomprando = confirm('¿queres agregar otro producto?')


} while (seguircomprando);

alert ('el total de tu compra es:'+preciototal)


const listadoProductos = alert("");
let productoIngresado = parseInt(prompt("Ingrese el nombre del producto que desea agregar al carrito e ingrese T para calcular el total: "));

const articulosCarrito = [];

class Producto {
  constructor (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}


const robot = new Producto ("", 8.4);
const mono = new Producto ("", 7.6);
const ciervo = new Producto ("", 5.9);
const mariposas = new Producto ("", 3.2);
const dragon = new Producto ("", 4.8);
const chica3d = new Producto ("", 2.7);
const harryPotter = new Producto ("", 3.5);
const colibri = new Producto ("", 2.4);

function pregunta () {
  while (productoIngresado === Producto) {
    return articulosCarrito.push(Producto);    
  } if (productoIngresado === "T") {
    return articulosCarrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  }
}

pregunta();
console.log(articulosCarrito);


