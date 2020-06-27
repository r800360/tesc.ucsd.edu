import React from 'react';
import WeEmpower from './WeEmpower';

function Hero() {

    return (
        <section className="hero">
            <div className="container-fluid p-0 h-100 mx-0">
                <div className="row h-100 hero__row w-100 mx-0">
                    <div className="col-md-6 d-flex">
                        <div className="align-self-center hero__fix">
                        <div className="hero__copy">
                            <WeEmpower />
                        </div>
                        <div className="hero__cta">
                            <a className="btn hero__cta-btn text-white" href="http://tesc.link/join" target="_blank"> Join Us <i class="fas fa-external-link-square-alt"></i> </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 d-flex">
                        {/*<div className="hero__graphic w-100">
                            <HeroGraphic className="w-100"/>
                        </div>*/}
                        <img className="hero__graphic img-fluid" src="/hero.png"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;