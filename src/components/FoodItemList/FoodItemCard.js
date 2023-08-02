import React from 'react'

function FoodItemCard({ item }) {
    const { name, shortDescription, image, price, toppings, id } =
        item;


    console.log(`<FoodItemCard/> rendered name=${name}`);
    return (
        <div className='food-card' key={id}>

            <h2>
                {name}
            </h2>

            <p>{shortDescription}</p>

            <img src={image} alt={`${name}`} />
            <p>Price: ${price}</p>
            <p>Toppings: {toppings}</p>

        </div>
    )
}

export default FoodItemCard