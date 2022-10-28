import React, { Component } from 'react'
import Mealtype from './Mealtype';
import '../../Styles/Wallpaper.css'

export default class Quicksearche extends Component {

constructor(){
 super();
 this.state={
  mealtypes:[]
    }

}
componentDidMount(){
  fetch('http://localhost:9094/mealtype',{method:'GET'})
  .then(response=>response.json())
  .then(data=>this.setState({mealtypes:data.data}))
}


  render() {
    const mealtypesList=this.state.mealtypes.length && this.state.mealtypes.map(item=> <Mealtype key={item.name} item={item}></Mealtype>)
    return (
      
      <div className="quicksearch">
          <p className="quicksearchHeading">
              Quick Searches
              </p>
          <p className="quicksearchSubHeading">
              Discover restaurants by type of meal
              </p>
          <div className="container-fluid">
              <div className="row">
                     {mealtypesList}        
               
              </div>
          </div>
      </div>
 
    )
  }
}
