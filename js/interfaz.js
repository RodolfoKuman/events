class Interfaz{
    constructor(){
        this.init();
        this.listado = document.getElementById('resultado-eventos');
    }

    init(){
        this.imprimirCategorias();
    }

    imprimirCategorias(){
        const listaCategorias = eventBrite.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categorias.categories;
                const selectCategoria = document.getElementById('listado-categorias');

                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategoria.appendChild(option);
                });

            })
    }

    mostrarMensaje(mensaje,clases){
        const div = document.createElement('div');
        div.classList = clases;

        div.appendChild(document.createTextNode(mensaje));

        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);

        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
    }

    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }

}