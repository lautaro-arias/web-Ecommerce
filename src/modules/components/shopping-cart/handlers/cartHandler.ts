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
    //estados dataproduct - numberIcon - showOFFcanvas
    const [selectedProductsArray, setSelectedProductsArray] = useState<Products[]>([]);
    const [cartItemCount, setCartItemCount] = useState<number>(4);
    const [showOffCanvas,setShowOffCanvas]=useState(false)
    //
//toma el valor de  <Products[]> || <number>  // Obtiene valores previos
    const prevSelectedProductsArray = usePrevious(selectedProductsArray);
    const prevCartItemCount = usePrevious(cartItemCount);
    //
//agregando 1 al hacer click
    const handleClickAddOne = (increment: boolean) => {
        setCartItemCount(prevCount => (  increment ? prevCount + 1 : prevCount -1  ));
        
    };
    //
//Almacenar los datos del producto seleccionado en el array y mostrarlos 
    const handleClickAddProduct = (product:Products) => {
        setSelectedProductsArray(prevProducts => [...prevProducts, product]);
        console.log("selectedProductsArray",selectedProductsArray)
    };
    //
//Al hacer click cambia a true y muestra el buyingComponent 
    const handleClickShow =  () => {
        setShowOffCanvas(!showOffCanvas)
        console.log("buyingComponent Activado",!showOffCanvas)
    }
    //
//actualiza el componente  cuando cambien los valores ,
//no en cada renderizacon 
//este useEFFECT esta ,ya que me actualiza los valores al modificarse su estado
//y no cuando se renderiza la pagina 
    useEffect(() => {
    // Compara los valores previos con los actuales
        if (
        prevSelectedProductsArray !== selectedProductsArray ||
        prevCartItemCount !== cartItemCount
        ) {
        console.log("cartItemCount en useEfect", cartItemCount);
        console.log("selectedProductsArray en useEfect", selectedProductsArray);
        }
    },[cartItemCount, selectedProductsArray,showOffCanvas]);
    //
return {
        handleClickShow,
        setShowOffCanvas,
        showOffCanvas,
        cartItemCount, 
        selectedProductsArray,
        handleClickAddOne,
        handleClickAddProduct,
        }
}
export default useCartProduct