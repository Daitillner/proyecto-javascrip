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

const producto1 = new Producto ('Camara Samsung', 12000)
const producto2 = new Producto ('Auriculares JBL', 30000)



 producto1.sumarIva();
 producto1.vender();
 producto2.sumarIva();

console.log(producto1)
console.log(producto2)



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
case 'Camara Samsung':
    precio = 12000;
    break;
    case 'Auriculares JBL':
    precio = 30000;
    break;
    case 'ambos':
    precio = 42000
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

alert ('el toral de tu compra es:'+preciototal)


