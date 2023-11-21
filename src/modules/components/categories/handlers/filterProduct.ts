import { useState } from "react";
import useAllProductHandler from "../../all-Products/handler/productsAll";

const useFilterProduct = () =>{ 

const { allProducts } =useAllProductHandler()

//estado de filtrador
const [selectedType, setSelectedType] = useState('');
 //
 // controlador filter
const handleFilter = (type:string) => {
setSelectedType(type);
console.log("filtrado",filteredProducts)
};
 //
 // Filtrador por producto
const filteredProducts = selectedType
? allProducts.filter((product) => product.tipo === selectedType)
: allProducts;
 //

return{
    handleFilter,
    filteredProducts,
    selectedType, 
    setSelectedType,
}

}

export default  useFilterProduct