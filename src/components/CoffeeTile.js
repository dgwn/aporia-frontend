import React from 'react';

const CoffeeTile = ( {bean} ) => {
    return (
        <div className="col col-1-of-4">
            <div className="bean-card">
                <img className="bean-card__image" src={require("../img/" + bean.image )}  alt="hello"/>
                </div>
        </div>
    )
}

export default CoffeeTile