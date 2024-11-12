import './Contact.css'
import map from '../../assets/map.png'

const Contact = () => {
    return (
        <div className="contact text-center">
            <h2 className="">Свяжитесь с нами</h2>
            <p className="fs-24 lh-30 fw-normal p-1 mt-2">
                Мы оперативно ответим вам в течение дня. <span className="text-danger fw-bold">!Если </span> вы не получили ответ, пожалуйста,
                подождите немного.
            </p>
            <h2 className="p-1">Наш адрес</h2>
            <p className="fs-24 lh-30 fw-normal p-1 mt-2">
                Город Алматы, пересечение улиц Абая - Алтынсарина
                <br/>(станция метро "Сарыарка" и ТРЦ "Москва")
            </p>
            <a href="https://go.2gis.com/jvvi3" target="_blank"><img  className="map" src={map} alt="map"/></a>

        </div>
    );
};

export default Contact;