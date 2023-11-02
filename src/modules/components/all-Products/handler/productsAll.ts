import  { useState } from 'react';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
/*import { busoProducts } from '../utils/productBuso';
import { pantalonProducts } from '../utils/productPantalon';
import { camperasProducts } from '../utils/productCampera';
import { remerasProducts } from '../utils/productRemera';*/

const useAllProductHandler = () => {
    // informacion de las cards
    const descripcion:string= "3 cuotas sin interes con todas las tarjetas";
    const icono =faBagShopping;
    //
    //hacer que lea el array de arrays y no se pierda los datos ,
     //hacer que lea cada array segun que , manipular la vista , usar useState ? //

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
    /* const allProducts = () =>[
        remerasProducts,
        camperasProducts,
        busoProducts,
        pantalonProducts,
    ] */

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

