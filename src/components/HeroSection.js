import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css"
import video1 from "../videos/video-1.mp4"

function HeroSection() {
    return (
        <div className="hero-container">
            <video loop autoPlay muted src={video1} type="video/mp4" />
            <h1>Adventure AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer <i className="far fa-play-circle" /></Button>
            </div>
        </div>
    )
}

export default HeroSection