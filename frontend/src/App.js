import logo from './logo.svg';
import './App.css';
import{ Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './Components/Home/Home'
import Restaurantdetails from './Components/Details/Restaurantdetails';

function App() {
  return(
  
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/RestaurantDetails/:rName" element={<Restaurantdetails/>}/>
      </Routes>
      
    
       
      
    </div>
      

      
    
  );
}

export default App;
