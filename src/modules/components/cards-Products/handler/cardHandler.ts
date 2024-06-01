import  { useEffect,useReducer,useState,useMemo } from 'react';
import { ProductService } from '../../../../services/productAll.service'

// Se usa en categoriesHandler
const useAllProductHandler = () => {
    //Reducer  
    type Product = {
    tipo: string, nombre: string, img: string, marca: string, talle: string,
    precio: number, rebaja: number, color: string, descripcion: string, id: string,
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
    // Modelos arrays de productos
    const modelos = useMemo(
        () => ['products-remeras', 'products-camperas', 'products-busos', 'products-pantalones'],
        []
    );
    //

    useEffect(() => {
        //arrays de modelos de url - Api
        // init service
        const productService = new ProductService();
        // usamos los datos del fech
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
    },[modelos]);
    //

    // Datos obtenidos del Reducer 
    const [productList, dispatch] = useReducer(productReducer, initialState);
    
    const remerasData = productList['products-remeras'];
    const busosData = productList['products-busos'];
    const camperasData = productList['products-camperas'];
    const pantalonesData = productList['products-pantalones'];
    console.log(productList)
    const allProducts = [
        ...(remerasData || []),
        ...(busosData || []),
        ...(camperasData || []),
        ...(pantalonesData || []),
    ];
    //

    //control de vista para ver mas 
    const [visibleProducts, setVisibleProducts] = useState(4);

    const show = () => {
        setVisibleProducts(prev => prev + 4);
    };

    const visibleProductsList = allProducts.slice(0, visibleProducts);
    //

    return{
    productList, 
    dispatch,
    productReducer,
    initialState,
    allProducts,
    visibleProducts, 
    setVisibleProducts,
    show,
    visibleProductsList
    }
}
export default useAllProductHandler ;



