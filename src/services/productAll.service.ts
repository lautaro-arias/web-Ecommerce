import { services } from './global';

export class ProductService { 

    private url: string = "http://localhost:4000";
    constructor() {
        if (services.environment === "devel")
            this.url = services.products.dev.apiUrl;
    }

    async listing(modelName:string) {
        const body: string = JSON.stringify(this.listing)
        const url = `${this.url}/${modelName}/listing`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                body:body,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error al obtener la lista de productos');
            }
            const data = await response.json();
            //console.log("data",data)
            return data;
        } catch (error) {
            throw error;
        }
    }

}

