import React, { Component } from 'react'
import "./Counter.css"

class Counter extends Component {


    formatCount() {
        return this.props.counter.value===0 ? "Zero" : this.props.counter.value
    }

    getBadgeClass() {
        let classes= "badge m-2 badge-"
        classes+= this.props.counter.value===0 ? "warning" : "primary" 
        return classes
    }

    
  render() {
    
    return (
      <div className="counter">
        
          <div className="row">
            <div className="col-1 mx-4">
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            </div>
          
        
          
            <div className="col">
              <button 
                onClick={()=>this.props.onIncrement(this.props.counter)} 
                className="btn btn-secondary btn-sm m-2">
                <span className="counter">+</span>
              </button>
              <button 
                onClick={()=>this.props.onDecrement(this.props.counter)} 
                className="btn btn-secondary m-2"
                disabled={this.props.counter.value===0? "disabled" : ""}>
                <span className="counter"
                >-</span>
                
              </button>
              <button 
                onClick={()=>this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger m-2"><span className="counter">*</span>
              </button>
            </div>
          </div>
        
      </div>
    )
  }
}


export default Counter