import { services } from './global';

export class ProductService { 
    private url: string = "http://localhost:4000";
    private cacheDuration: number = 24 * 60 * 60 * 1000; 
    // Duración de la caché en milisegundos (1 día)

    constructor() {
        if (services.environment === "devel")
            this.url = services.products.dev.apiUrl;
    }

    private async fetchAndStoreData(modelName: string) {
        const url = `${this.url}/${modelName}/listing`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error al obtener la lista de productos');
            }

            const data = await response.json();
            localStorage.setItem(`${modelName}_data`, JSON.stringify(data));
            localStorage.setItem(`${modelName}_timestamp`, Date.now().toString());
            return data;
        } catch (error) {
            throw error;
        }
    }

    public async listing(modelName: string) {
        const cachedData = localStorage.getItem(`${modelName}_data`);
        const cachedTimestamp = localStorage.getItem(`${modelName}_timestamp`);

        if (cachedData && cachedTimestamp && (Date.now() - parseInt(cachedTimestamp, 10) < this.cacheDuration)) {
            return JSON.parse(cachedData);
        } else {
            return await this.fetchAndStoreData(modelName);
        }
    }
}
