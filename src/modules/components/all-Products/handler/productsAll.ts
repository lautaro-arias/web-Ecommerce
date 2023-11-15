import  { useState,useEffect } from 'react';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../../../services/productAll.service'


const useAllProductHandler = () => {
    

    const [productLists, setProductLists] = useState({});
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
                    productData[modelName] = response;
                } catch (error) {
                    console.error(`Error al obtener productos para ${modelName}:`, error);
                }
            }
            setProductLists(productData);
            console.log("Product data useefect",productData)
        };

        fetchProducts();
    }, []);

    // informacion de las cards
    const descripcion:string= "3 cuotas sin interes con todas las tarjetas";
    const icono =faBagShopping;
    //
 

    const produsctsSeason = [
    {img:"pantalon2.png",precio:"$ 12.000",rebaja:"$13.900",icono,nombre:"Pantalon",descripcion,},
    {img:"pantalon.png",precio:"$ 14.000",rebaja:"$16.000",icono,nombre:"Pantalon",descripcion,},
    {img:"remera.png",precio:"$ 9.500",rebaja:"$11.500",icono,nombre:"Remera",descripcion,},
    {img:"remera2.png",precio:"$ 8.000",rebaja:"$9.500",icono,nombre:"Remera",descripcion,},
    {img:"campera.png",precio:"$ 20.000", rebaja:"$25.000",icono,nombre:"Campera jeans",descripcion,},
    {img:"campera2.png",precio:"$ 15.000", rebaja:"$18.000",icono,nombre:"Campera saco",descripcion,},
    {img:"buso.png",precio:"$ 10.000",rebaja:"$15.000",icono,nombre:"Buso",descripcion,},
    {img:"buso2.png",precio:"$ 12.000",rebaja:"$14.000",icono,nombre:"Buso",descripcion,},
    ]
    

    //control de vista de cards
    const [products, setProducts] = useState(produsctsSeason);
    const [showAll, setShowAll] = useState(false);
    
    const toggleCards = () => {
    setShowAll(!showAll);
    };
    
    const visibleCards = showAll ? products : products.slice(0,4);
    //

    return{
    setProducts,
    showAll, 
    toggleCards,
    visibleCards,
    }
}
    export default useAllProductHandler 

