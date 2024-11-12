import CardItem from "./CardItem.jsx";
import cards from "./Cards.js";
import './Card.css';

const CardList = () => {
    return (
        <div className="card-list-wrapper row ">
            {cards.map(card => (
                <div key={card.id} className="mb-3 col-sm-12 col-md-6 col-lg-4">
                    <CardItem
                        className="card-item-wrapper"
                        src={card.src}
                        name={card.name}
                        size={card.size}
                        price={card.price}
                        description={card.description}
                        extraDescription={card.extraDescription}
                        images={card.images}
                    />
                </div>
            ))}
        </div>
    );
};

export default CardList;
