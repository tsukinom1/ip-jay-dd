// CarouselTemplate.jsx
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

const CarouselTemplate = ({ images }) => {
    return (
        <Carousel>
            {images.map((imageSrc, index) => (
                <Carousel.Item key={index} interval={1000}>
                    <img
                        className="carousel-img d-block w-100"
                        src={imageSrc}
                        alt={`Slide ${index + 1}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

CarouselTemplate.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // `images` теперь должен быть массивом строк.
};

export default CarouselTemplate;
