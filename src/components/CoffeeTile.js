import React from 'react';

const CoffeeTile = ( {bean} ) => {
    return (
        <div className="col col-1-of-4">
            <div className="bean-card">{bean}</div>
          </div>
    )
}

export default CoffeeTile