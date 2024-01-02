import { Products } from "../model/ProductModel"

export interface CartContextProps {
    sumarPrecios:  number | any ;
    totalPrecios:  number | any ;
    productQuantities:  number | any ;
    handleQuantityChange: number| any;
    handleClickRemoveProduct: any;
    selectedProductsArray: Products[];
    cartItemCount: number;
    setShowOffCanvas: (value: boolean) => void;
    showOffCanvas: boolean;
    handleClickShow: () => void;
    handleClickAddOne: (increment: boolean) => void;
    handleClickAddProduct: (product: Products) => void;
}