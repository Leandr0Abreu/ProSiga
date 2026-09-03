import React from 'react';
import './manga.css';
import jirayaa from './assets/jirayaa.jpg';


export default function Jutsu () {

    return (
    <div className="tela"> 
        <div className="sub-tela">
            <img src={jirayaa} className="figura" alt="figura"></img>
        </div>
    </div>
    )
}