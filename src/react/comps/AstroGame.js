import React, { Component } from 'react';
import AstroPlay from '../../ui/img/astro-play.png';
import TvPs4 from '../../ui/img/tv-ps4.png';

const AstroGame = () => {
    return (
        <div className="astro-play">
            <img src={TvPs4}/>
            <img src={AstroPlay}/>
        </div>
    )
}

export default AstroGame;