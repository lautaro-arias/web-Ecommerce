import { Products } from "../../../model/ProductModel"
import { useState,useEffect } from "react";

const useCartProduct = () => {
    const [selectedProductsArray, setSelectedProductsArray] = useState<Products[]>([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    // Almacenar los datos del producto seleccionado en el array
    const handleAddToCart = ((product:Products) => {
        setSelectedProductsArray([ ...selectedProductsArray, product]);
        setCartItemCount(cartItemCount + 1);
    })  ;

    //agregando 1 al hacer click
    let itemCount = cartItemCount;


    // Creando una copia del array
    let newProductCart = selectedProductsArray.slice(); 


    useEffect(()=> {
        console.log("itemCount ",itemCount)
        console.log("newProductCart datos a mapear ",newProductCart)
    },[ selectedProductsArray,cartItemCount,itemCount,newProductCart,])

return {
    itemCount,
    newProductCart,
    cartItemCount,
    useEffect,
    handleAddToCart,
    selectedProductsArray, 
    setSelectedProductsArray
    }

}

export default useCartProduct