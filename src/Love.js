import React from 'react'
import './Love.css'

export default class Love extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true
        }
        this.url = "unswasam.mp3";
        this.audio = new Audio(this.url);
    }
    play =() => {
        this.setState({
            play:true,
            pause:false
        })
        this.audio.play();
    }
    pause = () => {
        this.setState({
            play:false,
            pause:true
        })
        this.audio.pause();
    }
    render(){
        return(
            <div className="love">
                <h1 className="love__heading">I love you di Jillu</h1>
                <img 
                src="https://lh3.googleusercontent.com/F96tur3je2TF4SiKMWPcCSw5v_324EMrq0brfu4tuM0uPY1ESzGdso7GPOP7DNqTmGqjmECcc8XVkciSCV5pWdRM6VauCGhiISDyNY4Xp5pouR77AgyzgBDtJ84nwolsoM4ZX0GoVTMpXsi0IvLXv-xXRz3O_yBoD3AYz5fWlizKEtZ0nh8LAjLUdE8dCTJV4CjTfIOkQGDuJZ2wmAHZQvHFMFgA3iruwYkjXUogeYerK8A0udS8rZhmEfoDWuzp3E98fkyTmgBh7Vfs4U1iyh3wXzEDYhziM2m0mr28ClDHnDQuUhA3coOeY_hXcgc4OZzYlBAM5TkVIn2pKRfDxn4cFpDj6tPCpioy3XZDWB2hiJOa6otNycPkOSyZPH-QCXR6USI7QZoi93ACNFEVFftJ41CfrQQWpxpTCe0zcagS4Bih3Dw78FMuMiwuudVESjjfT1pLwJTyDbtcCgLABCtI2nNoWOxWOYYEaS5FgasmNqGWXTN02VTVpCg_fi2OODDK8E840DuEfb2ibkAVPlEqbnz6xDGpByuJ50NiV6_Csfbj5G9YJlLcg5lAS4R_1WLAHUqhboEeuOA2YybWsZodsQYBJJqDCwErveka_i5dezWDrfchCEw0CjQIFmAdmB3s7ntcj_aCclpzuO3K4LE2NUR5w1T3QRO0560ba3reAMUugQjStv8W7rtvbg=w702-h936-no?authuser=1"
                alt=""
                className="love__image"
                />
                <h2>This is for you</h2>
                <button onClick={this.play} className="love__button">Click here</button><br/>
                <button onClick={this.pause} className="love__button2">Stop</button>
            </div>
        )
    }
}