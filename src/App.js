
import './App.css';
import FoodItemList from './components/FoodItemList/FoodItemList';
import { useEffect, useState } from 'react';


const API_URL= 'http://localhost:8888'

function App() {

const [ foodItem, setFoodItem] = useState([])

useEffect(() => {
  console.log('<App /> useEffect() fired');
  async function fetchData() {
    // You can await here
    const response = await fetch(`${API_URL}/items`);
    const json = await response.json();
    console.log('<App /> useEffect() fetched data', json);
    
    const { data } = json;
    setFoodItem(data);
  }
  fetchData();
}, []);

console.log(`<App /> rendered! num food items = ${foodItem.length}`);

  return (
    <div className="App">
    <FoodItemList foodItem={foodItem} />
    </div>
  );
}

export default App;
