import React, {Component} from 'react';

import './Component.css';
import * as Constants from '../constants';


class AddComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            answer: 0,
            number1: 0,
            number2: 0,
            isLoaded: false,
        }
    }

    getAnswer(){

        var details = {num1:parseInt(this.state.number1), num2:parseInt(this.state.number2) }

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch(Constants.BASE_URL+'/calc/add', {
            method: 'POST',
            body: formBody,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(answer =>
                this.setState({
                    answer: answer
                })
            )
            .catch(err => console.log(err));

    }

    updateInputValue1 = (evt) => {

            this.setState({
                number1: evt.target.value
            });


    }

    updateInputValue2 = (evt) => {

                this.setState({
                    number2: evt.target.value
                });

    }

    render(){

        return(
            <div className="component">
                <h3>Addition</h3>
                <div className="form-group">
                    <label for="number1">Number 1</label>
                    <input type="number" className="form-control" id="number1" onChange={this.updateInputValue1} defaultValue={0}  placeholder="Number" />
                </div>


                <div class="form-group">
                    <label for="number2">Number 2</label>
                    <input type="number" className="form-control" id="number2" onChange={this.updateInputValue2} defaultValue={0} placeholder="Number" />
                </div>

                <button type="button" className="btn btn-primary" onClick={(e)=>{this.getAnswer()}}>Submit</button>

                <div>{this.state.answer}</div>
            </div>



        );
    }
}

export default AddComponent;