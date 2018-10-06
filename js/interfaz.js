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

}