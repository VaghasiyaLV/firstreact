import React, { Component } from 'react';

// class State extends Component {
//     constructor() {
//         super(props)
//         this.state = { count: 0 }
//     }
// }

// render() {
//     return (
//         <div>
//             <button>+</button>
//             <span className="count">0</span>
//             <button>-</button>
//         </div>
//     );
// }


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    render() {
        return (
            <div class ="counter">
                <p className="count">{this.state.count}</p>
                
                <button onClick={()=>this.setState({count:this.state.count+1})} class="button-1">+</button>
                <button onClick={()=>this.setState({count:this.state.count-1})} class="button-2">-</button>
            </div>
        );
    }
}

export default Counter;