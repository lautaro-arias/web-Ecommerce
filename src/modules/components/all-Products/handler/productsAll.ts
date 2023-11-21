import  {useEffect,useReducer} from 'react';
import { ProductService } from '../../../../services/productAll.service'

const useAllProductHandler = () => {

    //Reducer  
    type Product = {
    tipo:string,nombre:string,img:string,marca:string,talle:string,

    precio:number,rebaja:number,color:string,descripcion:string,id:string,
    };
    
    type ProductList = {
        [key: string]: Product[]; // Un objeto va a tener arrays de productos 
    };

    type ActionType = {
        type: 'Data-products';
        payload: { modelName: string; products: Product[] };
    };
    
    const initialState: ProductList = {};
    
    const productReducer = (state: ProductList, action: ActionType) => {
        switch (action.type) {
        case 'Data-products':
            return {
            ...state,
            [action.payload.modelName]: action.payload.products,
            };
        default:
            return state;
        }
    };
    //

    //arrays de modelos de url - Api
    const modelos = ['products-remeras', 'products-camperas', 'products-busos', 'products-pantalones'];

    useEffect(() => {
        const productService = new ProductService(); // init service

        const fetchProducts = async () => {
            //almacena los arrayas / products
            const productData:any = {}; 
            //modelName itera sobre arrays de modelos
            for (const modelName of modelos) {
                try {
                    // Hace una solicitud al servicio para obtener la lista de productos según el modelo
                    const response = await productService.listing(modelName);
                     // Almacena la respuesta en productData usando el nombre del modelo 
                    dispatch({ type: 'Data-products', payload: { modelName, products: response } });
                    productData[modelName] = response;
                } catch (error) {
                    console.error(`Error al obtener productos para ${modelName}:`, error);
                }
            }
        };

        fetchProducts();
    }, []);
    //

    // Datos obtenidos del Reducer 
    const [productList, dispatch] = useReducer(productReducer, initialState);
    
    const remerasData = productList['products-remeras']
    const busosData = productList['products-busos'];
    const camperasData = productList['products-camperas'];
    const pantalonesData = productList['products-pantalones'];

    const allProducts = [
        ...(remerasData || []),
        ...(busosData || []),
        ...(camperasData || []),
        ...(pantalonesData || []),
    ];
    //

    return{
    productList, 
    dispatch,
    productReducer,
    initialState,
    allProducts,
    }
}
    export default useAllProductHandler 

