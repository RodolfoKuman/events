class EventBrite{
    constructor(){
        this.token_auth = 'EAEXFKPBNZRB7ZOKQXXH';
        this.ordenar = 'date';
    }

    async obtenerCategorias(){
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth} `);

        const categorias = await respuestaCategorias.json();

        return {
            categorias
        }
            
    }
}