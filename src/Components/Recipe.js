import React from 'react';
import "./Recipe.css";

function Recipe({ title, calories, image, ingredients }) {
    console.log(calories);
    return (
        <div className="recipeMain">
            <div className="foodItems">
            <h1 className="food_title">{ title }</h1>
            <ol className="ol_main">
                { ingredients.map(ingredient => (
                    <li className="li_items">{ ingredient.text }</li>
                )) }
            </ol>
            <p>{ calories }</p>
            <div className="imgBlock" style={{ backgroundImage: `url(${image})`}}></div>
        </div>
        </div>
    )
}

export default Recipe;
