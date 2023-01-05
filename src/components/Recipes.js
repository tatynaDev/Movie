import React, {useState} from 'react';
import {data} from "./RecipesData";

const Recipes = () => {
    const [meals, setMeals] = useState(data)
    return (
        <div className="container">
            <div>
                <h1>Вкусные рецепты</h1>

                {
                    meals.map(el => (
                        <>
                            <h2>{el.name}</h2>

                            <ol>
                                {
                                    el.ingredients.map(ing => (
                                        <li>{ing.name}</li>
                                    ))
                                }
                            </ol>

                            <h2 style={{margin: "20px 0"}}>Инструкция по приготовлению</h2>

                            <ul>
                                {
                                    el.steps.map(el => (
                                        <li>{el}</li>
                                    ))
                                }
                            </ul>
                        </>
                    ))
                }

            </div>
        </div>
    );
};

export default Recipes;