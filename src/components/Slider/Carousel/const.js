import free_parking from "../../../assets/imeges/free-parking.png";
import insurance from "../../../assets/imeges/insurance.png";
import gasoline from "../../../assets/imeges/gasoline.png";
import service from "../../../assets/imeges/service.png";

const slides = [
    {
        id: 1,
        img: free_parking,
        title: 'Бесплатная парковка',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        classNameButton: 'slider-btn-1'
    },
    {
        id: 2,
        img: insurance,
        title: 'Страховка',
        text: 'Полная страховка страховка автомобиля',
        classNameButton: 'slider-btn-2'
    },
    {
        id: 3,
        img: gasoline,
        title: 'Бензин',
        text: 'Полный бак на любой заправке города за наш счёт.',
        classNameButton: 'slider-btn-3'
    },
    {
        id: 4,
        img: service,
        title: 'Обслуживание',
        text: 'Автомобиль проходит еженедельное ТО',
        classNameButton: 'slider-btn-4'
    }
]

export default slides;