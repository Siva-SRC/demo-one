import React from 'react'
import { Link } from 'react-router-dom';
import './Demo.css'
import Love from './Love';

export default class Demo extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            secondname: "",
            mobileno: "",
        }
        this.state.match = false
        this.afterEnterValue = this.afterEnterValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    afterEnterValue = (event) => {
        event.preventDefault();
        let n = event.target.name;
        let v = event.target.value.toLowerCase();
        this.setState({
            [n]:v
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.firstname==="" || this.state.secondname==="" || this.state.mobileno==="") {
            alert("Field cannot be empty")
        } else if(this.state.firstname==="narmatha" && this.state.secondname=== "govindaraj" && this.state.mobileno==="1613119") {
            this.setState({
                match: true
            })
            alert("Entries matched succesfully")
            this.state.match = false
            window.location="/love"
        } else {
            alert("Entries doesn't match")
            this.state.match = false
        }
    }
    render(){
        return(
            <div className="DEMO">
                <div className="demo">
                    <h1 className="demo__heading">Sign in</h1>
                    <p className="demo__label required ">Enter your First Name : </p><input onChange={this.afterEnterValue} className="demo__input" type="text" name="firstname"/> 
                    <p className="demo__label">Enter your Second Name : </p><input onChange={this.afterEnterValue} className="demo__input" type="text" name="secondname"/>
                    <p className="demo__label">Enter your Mobile No : </p><input onChange={this.afterEnterValue} className="demo__input" type="text" name="mobileno"/>
                    <button className="demo__button" type="submit" onClick={this.onSubmit}>Submit</button>
                </div>
            </div>
            
            
        )
    }
}
