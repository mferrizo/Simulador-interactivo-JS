let compraCajanavidad = confirm("Bienvenido, Usted esta por elegir los productos que se incluiran en su caja navideña")

function cajaNavidad(caja, sidra, panDulce, turron, budin, lataConserva, confitados, descuento) { //Funcion de Suma mas el Impuesto de venta menos el Descuento 
    let cajaNavidad = caja + sidra + panDulce + turron + budin + lataConserva + confitados - descuento
        let impuesto = cajaNavidad * 0.21
    let precioFinal = cajaNavidad + impuesto
    confirm(`El precio Final de su caja navideña es:\n Total de de Articulos: $${cajaNavidad} \n Iva 21%: $${impuesto} \n Precio Final: $${precioFinal}`)
    let usuario = prompt("desea Cargar un nuevo Pedido o Finalizar? \n Si o NO ") // Pregunta si quiere seguir, vuelve a empezar o agradece
if(usuario.toLowerCase() == "si"){
    actualizar();
}else{
    let = "no" (alert(`Muchas ${window.location.href = 'Gracias'} Por su Compra`))    
}
}

function actualizar(){       // Funcion para recomenzar al poner un precio erroneo
    location.reload(true);} 
    actualizar()

while (compraCajanavidad == true){
    let nombreCliente  = prompt("Ingrese su nombre").toUpperCase()   //Ingresa el cliente y lo pasa a mayusculas

    let caja = parseInt(prompt("Elija su Caja Contenedora (Ingresar solo Numeros): \n Caja Verde $75 \n Caja Roja $100"))  
    if ((caja == 75) || (caja == 100)) { // Comprueba que el valor sea el correcto
        alert(`Agregado a su Compra`)
        }else{
            let caja = 0 (alert("Usted ingreso un valor incorrecto, por favor vuelva a empezar"))  // Si no es el valor correcto llama a la funcion actualizar
            actualizar();
        }
// Repite por cada articulo
    let sidra = parseInt(prompt("Elija su Sidra (Ingresar solo Numeros): \n Sidra Real $400 \n Sidra Del Valle $450"))  
    if ((sidra == 400) || (sidra == 450)) {
        alert(`Agregado a su Compra`)
        }else{
            let sidra = 0 (alert("Usted ingreso un valor incorrecto, por favor vuelva a empezar"))  
            actualizar();
        }

    let panDulce = parseInt(prompt("Elija su Pan Dulce (Ingresar solo Numeros): \n Pan Dulce Nevares $300 \n Pan dulce Aires de Lujan $350"))  
    if ((panDulce == 300) || (panDulce == 350)) {
        alert(`Agregado a su Compra`)
        }else{
            let panDulce = 0 (alert("Usted ingreso un valor incorrecto, por favor vuelva a empezar"))  
            actualizar();
        }

    let turron = parseInt(prompt("Elija su Turron (Ingresar solo Numeros): \n Turron Georgalos $100 \n Turron Arcor $120"))  
    if ((turron == 100) || (turron == 120)) {
        alert(`Agregado a su Compra`)
        }else{
            let turron = 0 (alert("Usted ingreso un valor incorrecto, por favor vuelva a empezar"))  
            actualizar();
        }

    let budin = parseInt(prompt("Elija su Budin (Ingresar solo Numeros): \n Budin Nevares $200 \n Budin Aires de Lujan $250"))  
    if ((budin == 200) || (budin == 250)) {
        alert(`Agregado a su Compra`)
        }else{
            let budin = 0 (alert("Usted ingreso un valor incorrecto, por favor vuelva a empezar"))  
            actualizar();
        }

    let lataConserva = parseInt(prompt("Elija su Fruta en Conserva (Ingresar solo Numeros): \n Durazno en Almibar Molto $500 \n Anana en Almibar $600"))  
    if ((lataConserva == 500) || (lataConserva == 600)) {
        alert(`Agregado a su Compra`)
        }else{
            let lataConserva = 0 (alert("Usted ingreso un valor incorrecto, por favor vuelva a empezar"))  
            actualizar();
        }
    let confitados = parseInt(prompt("Elija su Confite (Ingresar solo Numeros): \n Garrapiñadas Georgalos $60 \n Confites de Mani $90"))  
    if ((confitados == 60) || (confitados == 90)) {
        alert(`Agregado a su Compra`)
        }else{
            let confitados = 0 (alert("Usted ingreso un valor incorrecto, por favor vuelva a empezar"))  
            actualizar();
        }
    //Descuento que resta al final y muestra en el descuento
    let descuento = parseInt(prompt("¿Usted tiene un Cupon de Descuento? \n Ingrese el monto en Pesos \n si no tiene por favor ingrese 0 (Ingresar solo Numeros)"))  

    compraCajanavidad = confirm(`Cliente: ${nombreCliente} - Su caja incluye: 
    Tipo de Caja $ ${caja} - 
    Sidra $ ${sidra} - 
    Pan Dulce $ ${panDulce} - 
    Turron $ ${turron} - 
    Budin $ ${budin} - 
    Lata de Conserva $ ${lataConserva} - 
    Confitados  $ ${confitados}
    DESCUENTO: $ ${descuento}
    SUBTOTAL $ ${caja + sidra + panDulce + turron + budin + lataConserva + confitados - descuento} 

    `)

    if(compraCajanavidad == true){
        cajaNavidad(caja, sidra, panDulce, turron, budin, lataConserva, confitados, descuento) //Llama a la funcion para traer los valores con Impuestos
    }
}