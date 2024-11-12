import { useState, useRef } from 'react';
import {Alert, Form, Button, FormText} from 'react-bootstrap';

import './Contact.css'

const WriteToUs = () => {
    const [error, setError] = useState(null);  // Стейт для ошибки
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const textRef = useRef(null);

    const submit = () => {
        // Проверка на пустые поля
        if (nameRef.current.value === '' || phoneRef.current.value === '' || textRef.current.value === '') {
            setError('Пожалуйста, заполните все поля!');
        }
        // Проверка на длину номера телефона
        else if (phoneRef.current.value.length !== 11) {
            setError('Укажите корректный номер телефона');
            phoneRef.current.focus();  // Фокус на поле телефона
        }
        // Если все поля заполнены корректно
        else {
            setError(null);  // Очистка ошибки при успешной отправке
            console.log('Форма отправлена');
            // Добавьте здесь логику отправки данных
        }
    };

    return (
        <Form className="form p-2 mt-2 mb-4">
            {error && (
                <Alert variant="danger" onClose={() => setError(null)} dismissible>
                    <Alert.Heading>Oops!</Alert.Heading>
                    <p>{error}</p>
                </Alert>
            )}
            <h1 className="text-center mt-2 mb-2">Форма для обратной связи: </h1>
            <Form.Group className="mb-3 p-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Ваше Имя:</Form.Label>
                <Form.Control ref={nameRef} type="text" placeholder="Иванов Иван" />
            </Form.Group>

            <Form.Group className="mb-3 p-2" controlId="exampleForm.ControlInput2">
                <Form.Label>Ваш номер телефона:</Form.Label>
                <Form.Control ref={phoneRef} type="number" placeholder="+7-777-777-77-77" />
            </Form.Group>

            <Form.Group className="mb-3 p-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Ваше сообщение</Form.Label>
                <Form.Control ref={textRef} as="textarea" rows={3} />
            </Form.Group>

            <Button className="d-block mx-auto w-50 p-2 mb-3" variant="primary" type="button" onClick={submit}>Отправить</Button>
        </Form>
    );
};

export default WriteToUs;
