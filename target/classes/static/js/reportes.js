"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const URL = "http://localhost:8080/reportes/";
    let msjError = document.querySelector(".errorMsj");
    msjError.setAttribute("display", "none");

    let btnReporteCompras = document.querySelector("#btnCompras");
    let btnReporteVentas = document.querySelector("#btnVentas");
    let btnMasVendido = document.querySelector("#btnMasVendido");

    btnMasVendido.addEventListener('click',reportarMasVendido);
    btnReporteCompras.addEventListener('click',reportarCompras);
    btnReporteVentas.addEventListener('click',reportarVentas);

    async function reportarCompras(){
        let request = URL + "compras";
        let encabezado = document.querySelector("#encabezadoRepo");
        encabezado.innerHTML = "";
        encabezado.innerHTML += "<th>Nombre</th>"+"<th>Monto Total Compras</th>";
        let container = document.querySelector("#tableReport");
        container.innerHTML = "<li>Cargando...</li>";
        try {
            let response = await fetch(request);
            if (response.ok) {
                let dato = await response.json();
                container.innerHTML = "";
                for (let elemento of dato) {
                    container.innerHTML += "<tr>"+
                   "<td>"+ elemento.cliente+"</td>"+
                   "<td>"+ elemento.monto_total_compras+"</td></tr>";
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


    async function reportarVentas(){
        let request = URL + "ventas";
        let encabezado = document.querySelector("#encabezadoRepo");
        encabezado.innerHTML = "";
        encabezado.innerHTML += "<th scope="+"col"+">Fecha</th>"+"<th scope="+"col"+">Cantidad productos vendidos</th>"+"<th scope="+"col"+">Monto total ventas</th>";
        let container = document.querySelector("#tableReport");
        container.innerHTML = "<li>Cargando...</li>";
        try {
            let response = await fetch(request);
            if (response.ok) {
                let dato = await response.json();
                container.innerHTML = "";
                for (let elemento of dato) {
                    container.innerHTML += 
                    "<tr><td>"+ elemento.fecha+"</td>"+
                   "<td>"+ elemento.cantidad_productos_vendidos+"</td>"+
                   "<td>"+ elemento.monto_total_ventas+"</td></tr>";
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

    async function reportarMasVendido(){
        let request = URL + "productos";
        let encabezado = document.querySelector("#encabezadoRepo");
        encabezado.innerHTML = "";
        encabezado.innerHTML += "<th scope="+"col"+">Nombre</th>"+"<th scope="+"col"+">Cantidad vendida</th>";
        let container = document.querySelector("#tableReport");
        container.innerHTML = "<li>Cargando...</li>";
        try {
            let response = await fetch(request);
            if (response.ok) {
                let dato = await response.json();
                container.innerHTML = "";
                for (let elemento of dato) {
                    container.innerHTML += "<tr><td>"+ 
                    elemento.producto+"</td>"+
                   "<td>"+ elemento.cantidad_vendida+"</td></tr>";
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

})