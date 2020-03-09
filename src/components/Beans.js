import React from 'react';
import CoffeeTile from './CoffeeTile';

const Beans = ( ) => {

    const beans = [
        {
            name: 'Colombia Buesaco1',
            image: 'colombia-inza-coffee-sweetmarias-7.jpg'
        },
        {
            name: 'Colombia Buesaco2',
            image: 'colombia-inza-coffee-sweetmarias-3.jpg'
        },
        {
            name: 'Colombia Buesaco3',
            image: 'colombia-buesaco-narino-cauca-coffee-9_7.jpg'
        },
        {
            name: 'Colombia Buesaco4',
            image: 'colombia-narino-coffee-buesaco-alianza-2.jpg'
        }
      ]

    return (
        <section className="section section-beans" id="beans">
            <h1 className="heading-primary--sub u-margin-top-medium u-margin-bottom-small">Beans</h1>

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