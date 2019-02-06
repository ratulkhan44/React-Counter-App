import React, {Component} from "react"
import Counter from "./Counter"

class Counters extends Component {

    

    render(){

        return (
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm"><span style={{fontSize:30}}>Reset</span></button>
                {this.props.counters.map(c => (
                    <Counter
                        onDecrement={this.props.onDecrement}
                        onIncrement={this.props.onIncrement}
                        onDelete={this.props.onDelete}
                        key={c.id}  
                        counter={c} />
                ))}
           </div>
        )
    }
}


export default Counters