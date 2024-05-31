import { useReducer } from "react";
import useAllProductHandler from "../../cards-Products/handler/cardHandler";
// se usa en ProductHome
    const initialState = {
        type:"",
        marca:"",
        color:"",
        talle:"",
        visibleCards: 4,
    };

    const filterReducer = (state: typeof initialState, action:any) => {
        switch (action.type) {
        case 'SET_FILTER':
            return {
            ...state,
            [action.payload.filterName]: action.payload.value,
            };
        case 'RESET_FILTERS':
            return initialState;
        case 'SHOW_MORE':
            return {
            ...state,
            visibleCards: state.visibleCards + 4,
            };
        default:
            return state;
        }
    };

    const useFilterProduct = () => { 

    const { allProducts } = useAllProductHandler();

    const [filters, dispatch] = useReducer(filterReducer, initialState);

    const handleFilter = (filterName:any, value:any) => {
        dispatch({
        type: 'SET_FILTER',
        payload: {
            filterName,
            value,
        },
        });
    };

/// control de vista
    const handleShowMore = () => {
        dispatch({ type: 'SHOW_MORE' });
    };

    const handleShowMoreClick = () => {
        // mostrar más productos cuando se hace clic en un botón "Ver más"
        handleShowMore();
    };
    //

//filter
    const filteredProducts = allProducts.filter((product) => {
        // filtrado segun que ...  
        return (
            
        ( !filters.type  || product.tipo  === filters.type  ) 
        
        );
    });
     //

    const visibleFilteredProducts = filteredProducts.slice(0, filters.visibleCards);

return {
    handleFilter,
    handleShowMoreClick,
    visibleFilteredProducts,
    filters,
};
}
export default  useFilterProduct;