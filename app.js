function comprar() {
    sumaTot = 0
    precioTotal = 0
    productos = 0
    vendido = new Venta()
    peso = 0
    vendido.fecha = day
    newItem()
    console.log("Venta N° " + vendido.numVenta)
    console.log(vendido)
    calcAcum(cantVentas)
    console.log("Total en ventas acumuladas = $" + acum)
}
function newItem() {
    let type = parseInt(prompt("Elija tipo de chapa"))
    switch (type) {
        case 1:
            valorKg = 800
            alert("Usted seleccionó Chapa de Hierro - $800 x kg")
            itemPrice(valorKg)
            break;
        case 2:
            valorKg = 1000
            alert("Usted seleccionó Chapa Galvanizada - $1.000 x kg")
            itemPrice(valorKg)
            break;
        case 3:
            valorKg = 4000
            alert("Usted seleccionó Chapa de Acero Inoxidable - $4.000 x kg")
            itemPrice(valorKg)
            break;
        case 4:
            valorKg = 3000
            alert("Usted seleccionó Chapa de Aluminio - $3.000 x kg")
            itemPrice(valorKg)
            break;
        default:
            newItem()
            break;
    }
}
function itemPrice(valorKg) {
    let cantidadKg = 0
    while (cantidadKg <= 0 || cantidadKg == null || isNaN(cantidadKg)) {
        cantidadKg = parseInt(prompt("Indique cantidad de kilogramos a comprar"))
    }
    alert("Usted ingresó " + cantidadKg + "kg")
    sumaPar = + cantidadKg * valorKg
    peso += cantidadKg
    alert("$" + sumaPar + " añadido al carrito")
    productos++
    continuar()
    return sumaPar
}
function continuar() {
    sumaTot += sumaPar
    let respuesta = prompt("¿Seguir comprando? Y / N")
    if (respuesta == "Y") {
        newItem()
    }
    else if (respuesta == "N") {
        alert("Su total es de $" + sumaTot)
        numVenta++
        consultar(sumaTot)
        vendido.numVenta = numVenta
        vendido.cantProd = productos
        vendido.pesoTot = peso
    }
    else {
        continuar()
    }
}
function consultar(sumaTot) {
    let cuotas = prompt("¿Desea realizar el pago en cuotas? Y / N")
    let precioTotal = sumaTot
    if (cuotas == "Y") {
        let cantCuotas = 1
        while (cantCuotas <= 1 || cantCuotas > 18 || cantCuotas == null || isNaN(cantCuotas))
            cantCuotas = parseInt(prompt("Ingrese cantidad de cuotas (2 a 18 - 5% mensual)"))
        for (let i = 2; i <= cantCuotas; i++) {
            precioTotal *= 1.05
        }
        cantVentas[numVenta - 1] = Math.floor(precioTotal)
        vendido.enCuotas = true
        vendido.pago = Math.floor(precioTotal)
        vendido.cantCuotas = cantCuotas
        ventas.push(vendido)
        finalizarVenta(vendido)

    }
    else if (cuotas == "N") {
        cantCuotas = 1
        cantVentas[numVenta - 1] = Math.floor(precioTotal)
        vendido.enCuotas = false
        vendido.pago = Math.floor(precioTotal)
        vendido.cantCuotas = 1
        ventas.push(vendido)
        finalizarVenta(vendido)
    }
    else {
        consultar(sumaTot)
    }
}
function finalizarVenta(venta) {
    if (venta.cantCuotas == 1) {
        alert("Su total a abonar es de $" + venta.pago + " en " + venta.cantCuotas + " pago.")
    }
    else {
        alert("Su total a abonar es de $" + venta.pago + " en " + venta.cantCuotas + " pagos de $" + Math.floor(venta.pago / venta.cantCuotas) + ".")
    }
    alert("Gracias por su compra")
}
function calcAcum(cantVentas) {
    acum = 0
    for (let i = 0; i <= cantVentas.length - 1; i++) {
        acum += cantVentas[i]
    }
    return acum
}
function verVenta() {
    let numVen = parseInt(prompt("Ingrese número de venta"))
    if (ventas.some((venta) => venta.numVenta == numVen)) {
        let buscado = ventas.find(venta => venta.numVenta == numVen)
        console.log(buscado)
    } else {
        alert("Ticket no encontrado, intente nuevamente")
    }
}
class Venta {
    constructor(numVenta, cantProd, pago, enCuotas, cantCuotas, pesoTot,fecha) {
        this.numVenta = numVenta;
        this.cantProd = cantProd;
        this.pago = pago;
        this.enCuotas = enCuotas;
        this.cantCuotas = cantCuotas;
        this.pesoTot = pesoTot;
        this.fecha = fecha;
    }
}
let day = new Date()
let acum = 0
let ventas = []
let cantVentas = []
let productos = 0
let sumaTot = 0
let numVenta = 0
let boton1 = document.querySelector(".comprar")
boton1.addEventListener("click", comprar)
let boton2 = document.querySelector(".buscarVenta")
boton2.addEventListener("click", verVenta)
let hoy = [day.getDate(), day.getMonth(), day.getFullYear()]
let hoyStr = day.toDateString()
document.querySelector(".fecha").textContent = hoyStr

