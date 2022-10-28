import React, { Component } from 'react'
import wallpaper from '../../Assets/background.png'
import '../../Styles/Wallpaper.css'
import {Link} from 'react-router-dom';  


export default class Wallpaper extends Component {
constructor(){
  super();
  this.state={
    city:[],
    restaurant:[]
  }
}



componentDidMount(){
  fetch('http://localhost:9094/city',{method:'GET'})
  .then(response=>response.json())
  .then(data=>this.setState({city:data.data}))

}

fetchRestaurants=(event)=>{
  console.log(event.target.value)
    fetch(`http://localhost:9094/restaurant/${event.target.value}`,{method:'GET'})
   .then(response=>response.json())
   .then(data=>this.setState({restaurant:data.data}))
}
  render() {
    
    const cityLists=this.state.city.length && this.state.city.map(item=><option key={item.name} value={item.city_id}>{item.name}</option>)
    const restaurant=this.state.restaurant.length && <ul>
      {
        this.state.restaurant.map(item=>
          <li key={item.name}>
            <Link to={`/Restaurantdetails/${item.name}`}>
            {item.name}
            </Link>
            
          
         </li>
          )
      }

    </ul> 
    return (
      <div>
       <div>
                <div>
                <img src={wallpaper} width='100%' height='450px' />

                <div className="logo">
                    <p>e!</p>
                </div>
                <div className="headings">
            
                    Find the best restaurants, cafes, bars 
                        </div>
                <div className="locationSelector">
                    <select className="locationDropdown" onChange={this.fetchRestaurants}>
                      <option value="0">select</option>
                  {cityLists}
                   
                   </select>
                    <div id="notebooks" >
                        <input className="restaurantsinput" type="text" placeholder="Search Restaurant" />
                        {restaurant}
                        
                    </div>
                   
                </div>
            </div >
            </div>

      </div>
    )
  }
}
