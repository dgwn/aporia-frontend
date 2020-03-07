import React from 'react';

const Story = (  ) => {
    return (
        <section className="section section-story" id="story">
            <h1 className="heading-primary--sub">Our Story</h1>

            <div className="row">
            <div className="col col-1-of-2">
                <img className="section-story__image" src={require("../img/frenchpress.jpg")} alt="sitting with coffee" />
            </div>
            <div className="col col-1-of-2">
                <p>Hella intelligentsia la croix, pop-up palo santo green juice truffaut. Slow-carb put a bird on it tumblr pok pok plaid, chambray fam glossier tattooed. +1 leggings copper mug shoreditch vice PBR&B small batch. Wolf distillery jianbing, cliche kogi thundercats taxidermy kickstarter blog.</p>
                <p>Distillery schlitz iPhone, trust fund coloring book man bun listicle neutra cronut fingerstache cliche skateboard. Tbh scenester skateboard cardigan mustache williamsburg irony narwhal heirloom. Distillery tilde food truck thundercats polaroid seitan bushwick, cray blue bottle neutra organic PBR&B mlkshk tumblr. Normcore scenester gochujang tumblr chia butcher. XOXO actually pork belly shoreditch. Shaman prism pork belly seitan squid. Art party food truck ramps, poke yr whatever mustache craft beer selfies enamel pin selvage vexillologist sriracha.</p>

            </div>
            </div>

         </section>
    )
}

export default Story