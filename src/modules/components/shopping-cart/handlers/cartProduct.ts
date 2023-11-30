import { Products } from "../../../model/ProductModel"
import { useState,useEffect,useRef } from "react";

// Guarda el valor anterior cuando el valor cambia   
//acepta cualquier tipo de dato y lo remplaza por T o undefined
const usePrevious = <T extends any>(value: T): T | undefined  => {
    const ref = useRef<T>();

    useEffect(() => {
    ref.current = value;
    }, [value]);
    // Retorna el valor previo almacenado
    return ref.current;
};
//
const useCartProduct = () => {
    //estados
    const [selectedProductsArray, setSelectedProductsArray] = useState<Products[]>([]);
    const [cartItemCount, setCartItemCount] = useState<number>(0);
    //
//toma el valor de  <Products[]> || <number>
    const prevSelectedProductsArray = usePrevious(selectedProductsArray);
    const prevCartItemCount = usePrevious(cartItemCount);
    //
//agregando 1 al hacer click
    const handleClickAddOne = (increment: boolean) => {
        setCartItemCount(prevCount => (  increment ? prevCount + 1 : prevCount -1  ));
    };
    //
//Almacenar los datos del producto seleccionado en el array 
    const handleClickAddProduct = (product:Products) => {
        setSelectedProductsArray(prevProducts => [...prevProducts, product]);
    };
    //
//actualiza el componente 
    useEffect(() => {
    // Compara los valores previos con los actuales
        if (
        prevSelectedProductsArray !== selectedProductsArray ||
        prevCartItemCount !== cartItemCount
        ) {
        console.log("cartItemCount en useEfect", cartItemCount);
        console.log("selectedProductsArray en useEfect", selectedProductsArray);
        }
    },[cartItemCount, selectedProductsArray]);
    //
return {
    cartItemCount, 
    selectedProductsArray,
    handleClickAddOne,
    handleClickAddProduct
    }
}
export default useCartProduct