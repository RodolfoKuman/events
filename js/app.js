const eventBrite = new EventBrite();
const ui = new Interfaz();

document.getElementById('buscarBtn').addEventListener('click',(e) => {
    e.preventDefault();

    const textoBuscador = document.getElementById('evento').value;

    //leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriasSeleccionada = categorias.options[categorias.selectedIndex].value;
    
    console.log(textoBuscador);
    console.log(categoriasSeleccionada);

    //Verificando que el input no este vacio
    if(textoBuscador !== ''){
        eventBrite.obtenerEventos(textoBuscador, categoriasSeleccionada)
            .then(eventos => {
                console.log(eventos);
            })
    }else{
        ui.mostrarMensaje('Escribe algo en el buscador','alert alert-danger mt-4');
    }
})
