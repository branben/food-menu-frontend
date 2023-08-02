import FoodItemCard from "./FoodItemCard";

import React from 'react'

function FoodItemList({foodItem}) {

console.log(`<FoodItemList/> rendered!`)
  return (
    <div className="FoodItemList">


{foodItem.map((item) => (
    <FoodItemCard key={item.id} item={item}/>
))}

    </div>
  )
}

export default FoodItemList