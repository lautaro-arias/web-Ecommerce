import {useState}  from 'react'
//CAMBIAR TODOS LOS HANDLERS TSX A TS  Y HACER EL FILTRADOR //

const useMenuHandler = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    };          
return  {
            useState,
            toggleCollapse,
            setIsCollapsed,
            isCollapsed
        }

}

export default useMenuHandler