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
                src="https://4kwallpapers.com/images/wallpapers/couple-sunset-proposal-silhouette-romantic-lovers-together-3840x2560-448.jpg"
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
