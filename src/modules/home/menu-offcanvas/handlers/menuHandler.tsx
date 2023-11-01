import {useState}  from 'react'


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