import './Footer.css';
import { useState, useEffect } from "react";
import { DateTime } from "luxon"; // Импортируем Luxon

const Footer = () => {
    const [time, setTime] = useState(DateTime.local()); // Начальное время по умолчанию

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(DateTime.local()); // Обновляем время каждую секунду
        }, 1000);

        // Очистка интервала при размонтировании
        return () => clearInterval(interval);
    }, []);

    // Функция для получения времени в определенном часовом поясе
    const getTimeInTimeZone = (zone) => {
        return time.setZone(zone).toFormat('HH:mm:ss'); // Формат: Часы:Минуты:Секунды
    };


    return (
        <footer className="footer p-3">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">

                <h4 className="title m-0 col-6 col-md-8">
                    &copy; {new Date().getFullYear()} IP-JAY-DD. Все права защищены.
                </h4>
                <h4 className="title col-6 col-md-4 text-end">
                    {getTimeInTimeZone()} {/* Пример для UTC */}
                </h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
