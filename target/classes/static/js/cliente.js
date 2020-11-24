"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const URL = "http://localhost:8080/";
    let msjError = document.querySelector(".errorMsj");
    msjError.setAttribute("display", "none");



    //alta de cliente
    let btnAltaCliente = document.querySelector(".btnAddCliente");
    btnAltaCliente.addEventListener("click", async function (e) {
        e.preventDefault();
        let cliente = {
            "nombre": document.querySelector(".nombre").value,
        };
        let contenedor = document.querySelector(".contenedor");
        contenedor.innerHTML = "<span>Espere por favor...</span>";
        try {
            let request = fetch(URL + "clientes/", {
                "method": "POST",
                "headers": { "Content-Type": "application/json" },
                "body": JSON.stringify(cliente)
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


    let vistaClientes = [];
    let btnListarClientes= document.querySelector("#btnClientes");
    btnListarClientes.addEventListener('click',listarClientes);
    btnEliminarCliente.addEventListener('click',eliminarCliente);
    btnLu.addEventListener('click',listarEstudiante);

    
    
    
    
    async function listarClientes(){
        let container = document.querySelector("#tableClientes");
        try {
            vistaClientes = [];
            let request = fetch(URL+"clientes/");
            let response = await request;
            if (response.ok){
                let clientes = await response.json();
                vistaClientes = clientes
                container.innerHTML = "";
                for (let elemento of clientes){
                        container.innerHTML += "<tr><td>"+
                         elemento.id+"</td>"+
                        "<td>"+ elemento.nombre+"</td>";
                        "<td><button id='"+elemento.id+"' class='btnDelete'>Borrar</button></td>" + 
                        "<td><button id='"+"put"+elemento.id+"' class='btnPut'>Modificar</button></td></tr>";//tambien cambie ID"
                }
                handlearBotonEliminar();
                handlearBotonModificar();
            }
            else {
                container.innerHTML = "<h1>Falla de URL</h1>";
            }
        
        }
        catch (exc) {
            container.innerHTML = "<h1>Fallo conexion</h1>";
        }
    }

    async function eliminarCliente(){
        let idCliente = document.querySelector("#idCliente");
        try {
            let request = fetch(URL + "clientes/"+idCliente, {
                "method": "DELETE",
                "headers": { "Content-Type": "application/json" },
            });
            let response = await request;
            if (response.ok){
                let clientes = await response.json();
                //elimnado..
            }
            else {
                container.innerHTML = "<h1>Falla de URL</h1>";
            }
        
        }
        catch (exc) {
            container.innerHTML = "<h1>Fallo conexion</h1>";
        }
    }
//**************HANDLERS ELIMINAR MODIFICAR************** */
    function handlearBotonEliminar () {
        let btnDelete = document.querySelectorAll(".btnDelete");
        for (let element of btnDelete) {
            element.addEventListener("click", function () {
                deleteElement(element.id);
            })

        }
    }

    function handlearBotonModificar () {
        let btnPut = document.querySelectorAll(".btnPut");
        for (let element of btnPut) {
            element.addEventListener("click", function () {
                cargarInput("put"+element.id);
            })
            limpiarInput();
        }
    }
//*********************TERMINA HANDLERS**************************** */
//*******************MODIFICACION*********************************** */


function cargarInput (id) {
    let container = document.querySelector("#tableClientes");
    const resultado = todosGeneros.find( elemento => elemento._id === id );
    document.querySelector(".nombre").value = resultado.thing[0].genero;
    

    let post = document.querySelector("#ingresar");
    if (!(post.classList.contains("oculto"))) {
        post.classList.toggle("oculto");
    }
   
    let guardar = document.querySelector("#btnGuardar");
    if (guardar.classList.contains("oculto")) {   
        guardar.classList.toggle("oculto");
    }
    guardar.id = resultado._id;
    guardar.addEventListener("click", async function () {
        let data = {
                "nombre": document.querySelector(".nombre").value,
            }
                 
        container.innerHTML = "<h1>Cargando...</h1>";
        try {
            let request = fetch(baseURL + "/" + guardar.id, {
                "method": "PUT",
                "headers": { "Content-Type": "application/json"},
                "body": JSON.stringify(data)
            });
            let response = await request;
            if (response.ok) {
                let json = await response.json();
                guardar.classList.toggle("oculto");
                listarClientes();
            }
            else {
                container.innerHTML = "<h1>Falla de URL</h1>";
            }
        }
        catch (exc) {
            container.innerHTML = "<h1>Falla de conexión</h1>";
        }
    })
}
//***************Baja Cliente********************* */


});