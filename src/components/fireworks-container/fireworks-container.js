import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as FireworksCanvas from 'fireworks-canvas';
import ReactAudioPlayer from 'react-audio-player';

// Style load
import "./fireworks-container.css"

// Sounds load
import fireworksSnd from "../../assets/sounds/fireworks.mp3"

let soundPlay = false;

const FireworksContainer = props => {
    const fireworksContainerRef = useRef();

    useEffect(() => {
        if (props.play) {
            const container = fireworksContainerRef.current;
            const options = {
                maxRockets: 5,            // max # of rockets to spawn
                rocketSpawnInterval: 100, // millisends to check if new rockets should spawn
                numParticles: 100,        // number of particles to spawn when rocket explodes (+0-10)
                explosionMinHeight: 0.5,  // percentage. min height at which rockets can explode
                explosionMaxHeight: 0.9,  // percentage. max height before a particle is exploded
                explosionChance: 0.01     // chance in each tick the rocket will explode
            }
            const fireworks = new FireworksCanvas(container, options);
            fireworks.start();
            soundPlay = true;
        }
    }, []);

    return (
        <div className="fireworks-container" ref={fireworksContainerRef}>
            {soundPlay && <ReactAudioPlayer
                src={fireworksSnd}
                autoPlay
                controls={false}
                loop
            />}
        </div>
    );
};

FireworksContainer.propTypes = {
    play: PropTypes.bool.isRequired
};

export default FireworksContainer;