import { useState } from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar.js';
import HomeScreen from './Components/Restaurent/HomeScreen';

const items = [
  {
    "name": "Idly [3 Pieces]",
    "price": "90/-",
    "desc": "Idli is made from ground rice or rice flour mixed with ground urad dal, salt.",
  },
  {
    "name": "Ghee Dosa",
    "price": "110/-",
    "desc": "Served with Palli Chutney and Allam Chutney.",
  },
  {
    "name": "Mysore Bajji [4 Pieces]",
    "price": "90/-",
    "desc": "This mouth-watering snack is prepared with rice flour, baking soda, onion, all-purpose flour and ginger.",
  }
]

function App() {
  const [totalCartItems, setTotalCartItems] = useState(0)
  const countHandler = (value) => {
    setTotalCartItems(value)
  }

  return (
    <div className='App'>
      <Navbar cartValue={totalCartItems} />
      <HomeScreen items={items} onCount={countHandler} />
    </div>
  );
}

export default App;
