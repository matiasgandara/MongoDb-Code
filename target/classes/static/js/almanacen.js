"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const URL = "http://localhost:8080/";
    let msjError = document.querySelector(".errorMsj");
    msjError.setAttribute("display", "none");
    // elementos de carrito de compra
    let cliente = document.querySelector("#idCliente");
    let toDate = new Date();
    toDate = Date.now();
    let idProducto = document.querySelector("#idProducto");
    let cantidad = document.querySelector("#cantidad");
    let btnComprar = document.querySelector("#btnComprar");
    btnComprar.addEventListener('click',realizarCompra);

    // LISTAr PRODUCTOS
    let btnProductos = document.querySelector("#btnProductos");
    btnProductos.addEventListener('click',listarProductos);
    async function listarProductos(){
        let request = URL + "productos/";
        let container = document.querySelector("#listProd");
        container.innerHTML = "<li>Cargando...</li>";
        try {
            let response = await fetch(request);
            if (response.ok) {
                let dato = await response.json();
                container.innerHTML = "";
                for (let elemento of dato) {
                    container.innerHTML += "<tr><td>"+elemento.id+"</td>"+
                   "<td>"+ elemento.nombre+"</td>"+
                   "<td>"+ elemento.costo+"</td>"+
                   "<td>"+ elemento.stock+"</td>";
                }
            } else {
                container.innerHTML = "";
            	msjError.setAttribute("display", "visible");
            	msjError.innerHTML = "Error - Por favor, contáctese con proveedor del servicio";
                console.log("URL error");
                console.log(response);
            }
        } catch (response) {
            container.innerHTML = "";
            msjError.setAttribute("display", "visible");
            msjError.innerHTML = "Error - Por favor, contáctese con proveedor del servicio";
            console.log("Connection error");
            console.log(response);
        }
    }

    async function realizarCompra(){
        btnAltaCliente.addEventListener("click", async function (e) {
            e.preventDefault();
            let carrito = {
                "producto": document.querySelector("#idProducto").value,
                "cliente": document.querySelector("#idCliente").value,
                "cantidad": document.querySelector("#cantidad").value,
                "fecha" : toDate,
                "precio": '0',
            };
            let contenedor = document.querySelector(".contenedor");
            contenedor.innerHTML = "<span>Espere por favor...</span>";
            try {
                let request = fetch(URL + "carritos/", {
                    "method": "POST",
                    "headers": { "Content-Type": "application/json" },
                    "body": JSON.stringify(carrito)
                });
                let response = await request;
                if (response.ok) {
                    let text = await response.status;
                    console.log(text);
                    contenedor.innerHTML = "";
                    contenedor.innerHTML = "<span>Cliente agregado con éxito</span>";
                    contenedor.innerHTML += "<a href='clientes.html'>Volver</a>";
                }
                else {
                    contenedor.innerHTML = "";
                    contenedor.innerHTML = "<span>Falla de URL</span>";
                    contenedor.innerHTML += "<a href='clientes.html'>Volver</a>";
                }
            }
            catch (exc) {
                console.log(exc);
                contenedor.innerHTML = "";
                contenedor.innerHTML = "<span>Falla de conexión</span>";
                contenedor.innerHTML += "<a href='estudiante.html'>Volver</a>";
            }
        });
    }

})