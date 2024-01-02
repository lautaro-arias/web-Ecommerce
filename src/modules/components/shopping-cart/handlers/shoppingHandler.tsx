import { Products } from "../../../model/ProductModel"
import { CartContextProps } from "../../../model/CartContextModel"
import { useState, createContext, useContext, useEffect} from "react";

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }:any) => {
//estados dataproduct - numberIcon - showOFFcanvas-contadorPrecio
        const [selectedProductsArray, setSelectedProductsArray] = useState<Products[]>([]);
        const [cartItemCount, setCartItemCount] = useState<number>(0);
        const [showOffCanvas,setShowOffCanvas]=useState(false)
        const [productQuantities, setProductQuantities] = useState(selectedProductsArray.map(() => 1));
       // 

//agregando 1 al hacer click
        const handleClickAddOne = (increment: boolean) => {
        setCartItemCount(prevCount => (  increment ? prevCount + 1 : prevCount -1  ));
        
        };
       //
//Almacenar los datos del producto seleccionado en el array y mostrarlos 
        const handleClickAddProduct = (product:Products) => {
        setSelectedProductsArray(prevProducts => [...prevProducts, product]);
        };
       //
//Al hacer click cambia a true y muestra el buyingComponent 
        const handleClickShow = () => {
        setShowOffCanvas(true); 
        };
// Delete product- update array - si es false active show NoBuyinComponent
        const handleClickRemoveProduct = (index: number) => {
            const updatedProductsArray = [...selectedProductsArray];
            updatedProductsArray.splice(index, 1); // Elimina el elemento en el índice dado
            setSelectedProductsArray(updatedProductsArray);
            if ( updatedProductsArray.length === 0) {
            setShowOffCanvas(false); 
            } 
        };
       //

//Actualiza precio x cantiadad
        const handleQuantityChange = (index:any, newQuantity: any) => {
            const newProductQuantities = [...productQuantities];
            newProductQuantities[index] = newQuantity;
            setProductQuantities(newProductQuantities);
        };
        //
//Suma todos los precios con sus cantiadades
        const sumarPrecios = (productos:any, cantidades:any) => {
            const total = productos.reduce((acumulador:any, product:any, index:any) => {
              return acumulador + product.precio * cantidades[index];
            }, 0);
        
            return total;
        };
        const totalPrecios = sumarPrecios(selectedProductsArray, productQuantities);
        //

        useEffect(() => {
            // Actualizar productQuantities cuando selectedProductsArray cambie
            setProductQuantities(selectedProductsArray.map(() => 1));
        }, [selectedProductsArray]);

        const contextValue: CartContextProps = {
        sumarPrecios,
        totalPrecios,
        cartItemCount,
        showOffCanvas,
        setShowOffCanvas,
        selectedProductsArray,
        handleClickShow,
        handleClickAddOne,
        handleClickAddProduct,
        handleClickRemoveProduct,
        handleQuantityChange,
        productQuantities,
        };

    return (
    <> 
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    </>
    )
};

export const useShoppingProduct = () => {
    const context = useContext(CartContext);
    if (!context) {
    throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
