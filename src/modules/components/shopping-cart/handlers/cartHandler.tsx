import { Products } from "../../../model/ProductModel"
import { CartContextProps } from "../../../model/CartContextModel"
import { useState, createContext, useContext} from "react";

const CartContext = createContext<CartContextProps | undefined>(undefined);


//REVISAR : QUE AL APRETAR HANDLECLICK SHOW MAS DE UNA VES NO CAMBIE EL VALOR SIGA EN TRUE 
//AGREGAR PARA PODER ELIMINAR EL CARD DEL CARToFFcANVAS SEGUN SE QUIERA 
//QUE SOLO SE PONGA EN FALSE SI NO HAY NADA EN OFFCANVAS

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
        console.log("selectedProductsArray",selectedProductsArray)
    };
    //
//Al hacer click cambia a true y muestra el buyingComponent 
    const handleClickShow =  () => {
        setShowOffCanvas(!showOffCanvas)
        console.log("buyingComponent Activado",!showOffCanvas)
    }
    //

    const contextValue: CartContextProps = {
        selectedProductsArray,
        cartItemCount,
        setShowOffCanvas,
        showOffCanvas,
        handleClickShow,
        handleClickAddOne,
        handleClickAddProduct,
    };

    return (
    <> 
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    </>
    )
};

export const useCartProduct = () => {
    const context = useContext(CartContext);
    if (!context) {
    throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
