import React, { useState, useEffect } from 'react'

export default function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=966f3a1859004242bae2c438b9d2651a&includeNutrition=false`
        )
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.image);
            })
            .catch(() => {
                console.log('error');
            });
    }, [meal.id]);


    return (
        <article>
            <h1>{meal.title}</h1>
            <img src={imageUrl} alt="Recipe" />
            <ul className='instructions'>
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>

            <a href={meal.sourceUrl}>Go to Recipe</a>
        </article>
    )
}