import React, { Component } from 'react';
import Country from './Country';

class State extends Component {
    constructor(props) {
        super(props);
            this.state = {
                mystate: 'Gujarat',
            
            }
        }

        render() {
            return (
                <div>
                    <Country con = "India"/>
                    <h2>My state is {this.state.mystate}.</h2>
                    <button onClick={() => this.setState({mystate :'Rajasthan'})}>change</button>
                </div>
            );
        }
    }
export default State;