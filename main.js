
function mensajeBienvenida() {
    console.log("Bienvenido a Fabrega!")
    console.log("Ingrese código de artículo a comprar: ")
    console.log("0001-Televisor\n0002-Computadora\n0003-Heladera")
}
function ingresoCodigo() {
    var codigo = prompt("Código:")
    if (codigo == "0001") {
        console.log("Usted va a comprar un televisor\nUsted ingresó:", codigo)
    } else if (codigo == "0002") {
        console.log("Usted va a comprar una computadora\nUsted ingresó:", codigo)
    } else if (codigo == "0003") {
        console.log("Usted va a comprar una heladera\nUsted ingresó:", codigo)
    } else{
        console.log("Código incorrecto, vuelva a ingresar el código:")
        ingresoCodigo()
    }
    return codigo
}

let precioTele = 10000
let precioCompu = 50000
let precioHeladera = 70000
function precioProducto(codigo) {
    let precio
    if (codigo == "0001"){
        console.log("El precio es:$",precioTele,"\nSeleccione método de pago mediante número correspondiente:")
        precio = precioHeladera
    } else if (codigo == "0002"){
        console.log("El precio es:$",precioCompu,"\nSeleccione método de pago mediante número correspondiente:")
        precio = precioHeladera
    }   else if (codigo == "0003"){
        console.log("El precio es:$",precioHeladera,"\nSeleccione método de pago mediante número correspondiente:")
        precio = precioHeladera
    }
    return precio
}

function pagoProducto(){
    let metodo = prompt("1-Tarjeta Crédito\n2-Tarjeta Débito\n3-Efectivo en sucursal")
    if (metodo == "1" || metodo == "2" || metodo == "3") {
        return metodo
    } else{
        console.log("Método incorrecto, vuelva a ingresar método de pago:")
        pagoProducto()
    }
    
}
// hacer flecha
function elegirCuotas() {
    let cuotas = prompt("Elija cantidad de cuotas: ")
    return cuotas
}
function valorCuotas(precio){
    precioPorCuota = precioFinal / precio
    return precioPorCuota
}

function imprimirMetodo(metodo) {
    if (metodo == "1"){
        console.log("Paga con tarjeta de crédito")
    } else if (metodo == "2"){
        console.log("Paga con tarjeta de débito")
    } else if (metodo == "3"){
        console.log("Paga con efectivo en sucursal")
    }
}

mensajeBienvenida()
let codigoValido = ingresoCodigo()
let precioFinal = precioProducto(codigoValido)
let metodoDePago = pagoProducto()

console.log("....::::Resumen de compra::::....")
console.log("Código de artículo: ", codigoValido)
console.log("Precio: $",precioFinal)
imprimirMetodo(metodoDePago)

if(metodoDePago == "1"){
    let cantidadCuotas = elegirCuotas()
    let precioCuotas = valorCuotas(cantidadCuotas)
    console.log("Paga en",cantidadCuotas,"cuotas a $",precioCuotas.toFixed(2))
}



