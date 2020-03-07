import React from 'react';
import CoffeeTile from './CoffeeTile';

const Beans = ( ) => {

    const beans = [
        1, 2, 3, 4
      ]

    return (
        <section className="section section-beans" id="beans">
            <h1 className="heading-primary--sub">Beans</h1>

            <div className="row">
            <CoffeeTile bean={beans[0]} />
            <CoffeeTile bean={beans[1]} />
            <CoffeeTile bean={beans[2]} />
            <CoffeeTile bean={beans[3]} />
            </div>

        </section>
    )
}

export default Beans