import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {

    return(
        <Link to={props.item.link}>
            <div className="img__wrap g-card"  >
                <img  className="img__img" src={props.item.imgSrc} alt={props.item.imgSrc} />

                <div className ="img__description_layer">
                    <h3 className="img__title">{props.item.title}</h3>
                    <p className="img__sub-title">{props.item.subTitle}</p>
                </div>
            </div>
        </Link>
    );
}

export default Card;