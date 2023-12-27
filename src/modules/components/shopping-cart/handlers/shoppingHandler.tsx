import { Products } from "../../../model/ProductModel"
import { CartContextProps } from "../../../model/CartContextModel"
import { useState, createContext, useContext} from "react";

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }:any) => {
    //estados dataproduct - numberIcon - showOFFcanvas
    const [selectedProductsArray, setSelectedProductsArray] = useState<Products[]>([]);
    const [cartItemCount, setCartItemCount] = useState<number>(0);
    const [showOffCanvas,setShowOffCanvas]=useState(false)
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

    const contextValue: CartContextProps = {
        cartItemCount,
        showOffCanvas,
        setShowOffCanvas,
        selectedProductsArray,
        handleClickShow,
        handleClickAddOne,
        handleClickAddProduct,
        handleClickRemoveProduct,
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
