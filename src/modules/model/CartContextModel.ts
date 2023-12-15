import { Products } from "../model/ProductModel"

export interface CartContextProps {
    selectedProductsArray: Products[];
    cartItemCount: number;
    setShowOffCanvas: (value: boolean) => void;
    showOffCanvas: boolean;
    handleClickShow: () => void;
    handleClickAddOne: (increment: boolean) => void;
    handleClickAddProduct: (product: Products) => void;
}