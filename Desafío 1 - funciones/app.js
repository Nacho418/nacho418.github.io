function comprar() {
    sumaTot = 0
    precioTotal = 0
    newItem()
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
    alert("$" + sumaPar + " añadido al carrito")
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
        consultar(sumaTot)
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
            cantCuotas = prompt("Ingrese cantidad de cuotas (2 a 18 - 5% mensual)")
        for (let i = 2; i <= cantCuotas; i++) {
            precioTotal *= 1.05
        }
        alert("Su total a abonar es de $" + Math.floor(precioTotal) + " en " + cantCuotas + " pagos.")
        alert("Gracias por su compra")
    }
    else if (cuotas == "N") {
        alert("Su total a abonar es de $" + Math.floor(precioTotal) + " en 1 pago")
        alert("Gracias por su compra")
    }
    else {
        consultar(sumaTot)
    }
}
let sumaTot = 0
alert("Los tipos de chapa se visualizan en el HTML")
let boton = document.querySelector("#Comprar")
boton.addEventListener("click", comprar)

