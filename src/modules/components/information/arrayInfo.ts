import img1 from "../../assets/info/envios.webp";
import img2 from "../../assets/info/tarjeta.webp";
import img3 from "../../assets/info/efectivo.webp";
import img4 from "../../assets/info/moda.webp";
const ArrayInfo = () => {
    const info = [
        {
            img: img1,
            title:"Envios a todo el pais",
            descripcion:"Puedes regresar tu pedido hasta despues de 20 dias",
        },
        {
            img: img2,
            title:"Tarjetas",
            descripcion:"3 y 6 sin interes aceptamos todas las tarjetas ",
        },
        {
            img: img3,
            title:"Efectivo",
            descripcion:"Al depositar en efectivo tienes un 10% de descuento",
        },
        {
            img: img4,
            title:"Moda masculina",
            descripcion:"Las ultimas tendencias de la moda",
        },
    ];

    return {
        info,
    };
};

export default ArrayInfo;
