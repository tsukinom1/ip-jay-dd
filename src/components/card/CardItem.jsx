// CardItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

import './Card.css';
import CarouselTemplate from "../carousel/CarouselTemplate.jsx";

const CardItem = ({ src, name, price, size, description, extraDescription, images,  }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    function openCard() {
        setIsOpen(true);
    }

    function closeCard() {
        setIsOpen(false);
    }

    return (
        <>
            <Card className="card-wrapper">
                <Card.Img className="card-img" variant="top" src={src} alt={name} />
                <Card.Body className="card-body">
                    <Card.Title className="fs-3">{name}</Card.Title>
                    <Card.Text className="m-0 fs-5">{size}</Card.Text>
                    <Card.Text className="fw-bold fs-3">{price} тг</Card.Text>
                    <Button className="card-btn" variant="primary" onClick={openCard}>Посмотреть детали</Button>
                </Card.Body>
            </Card>
            <Modal
                show={isOpen}
                onHide={closeCard}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <CarouselTemplate className="carousel" images={images} interval="30000"  />
                    <Card className="modal-card-wrapper">
                        <Card.Body>
                            <Modal.Title id="example-custom-modal-styling-title"
                            className="modal-title">
                                {name}
                            </Modal.Title>
                            <Card.Text><p className="modal-text" dangerouslySetInnerHTML={{__html: description}}></p></Card.Text>
                            <Card.Text><p className="modal-title">Цена:  {price} тг</p></Card.Text>
                            <Card.Text><p className="modal-text" dangerouslySetInnerHTML={{__html: extraDescription}}></p></Card.Text>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>
    );
};

CardItem.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.string,
    description: PropTypes.string,
    extraDescription: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CardItem;
