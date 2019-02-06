import React, { Component } from 'react';
import Counters from "./Component/Counters"
import NavBar from "./Component/NavBar"


class App extends Component {

  state= {
    counters:[
        {id:1, value:6},
        {id:2, value:0},
        {id:3, value:9},
        {id:4, value:0},
    ]
}

incrementHandler=(counter)=> {
   let getCounter=[...this.state.counters]
   let index=getCounter.indexOf(counter) 
   getCounter[index]={...counter} 
   getCounter[index].value++
    this.setState({
        counters:getCounter
    })
} 

decrementHandler=(counter)=>{
  let getCounter=[...this.state.counters]
  let index=getCounter.indexOf(counter)
  getCounter[index]={...counter}
  getCounter[index].value--
  this.setState({
    counters:getCounter
  })
}

deleteHandler=(id)=> {
   let newCounters=this.state.counters.filter(c=> c.id!==id)
   this.setState({
       counters:newCounters
   })
}

resetHandler=()=> {
   let counters=this.state.counters.map(c=> {
       c.value=0
       return c       
   })
   this.setState({
       counters
   })

}
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
            onIncrement={this.incrementHandler}
            onDecrement={this.decrementHandler}
            onDelete={this.deleteHandler}
            onReset={this.resetHandler}
            counters={this.state.counters}
          />
        </main>
        
      </React.Fragment>
    );
  }
}

export default App;
