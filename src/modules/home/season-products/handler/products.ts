import  { useState } from 'react';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const useProductHandler = () => {
    // informacion de las cards
    const produsctsSeason = [
        {precio:"$ 20.000", rebaja:"$25.000",icono:faBagShopping,nombre:"Campera jeans",descripcion: "3 cuotas sin interes con todas las tarjetas",},
        {precio:"$ 15.000", rebaja:"$18.000",icono:faBagShopping,nombre:"Campera saco",descripcion: "3 cuotas sin interes con todas las tarjetas",},
        {precio:"$ 10.000",rebaja:"$15.000",icono:faBagShopping,nombre:"Buso",descripcion: "3 cuotas sin interes con todas las tarjetas",},
        {precio:"$ 12.000",rebaja:"$14.000",icono:faBagShopping,nombre:"Buso",descripcion: "3 cuotas sin interes con todas las tarjetas",},
        {precio:"$ 9.500",rebaja:"$11.500",icono:faBagShopping,nombre:"Remera",descripcion: "3 cuotas sin interes con todas las tarjetas",},
        {precio:"$ 8.000",rebaja:"$9.500",icono:faBagShopping,nombre:"Remera",descripcion: "3 cuotas sin interes con todas las tarjetas",},
        {precio:"$ 14.000",rebaja:"$16.000",icono:faBagShopping,nombre:"Pantalon",descripcion: "3 cuotas sin interes con todas las tarjetas",},
        {precio:"$ 12.000",rebaja:"$13.900",icono:faBagShopping,nombre:"Panatalon",descripcion: "3 cuotas sin interes con todas las tarjetas",}
    ]
    const imgProductSeason =[
    "campera.png", "campera2.png",
    "buso.png","buso2.png","remera.png",
    "remera2.png","pantalon.png","pantalon2.png"
    ]
    ///
    
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
    imgProductSeason,
    toggleCards,
    visibleCards,
    }
}
    export default useProductHandler 

