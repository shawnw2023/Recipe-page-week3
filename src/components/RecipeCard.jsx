import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        // navigate(`/recipe/${recipe.recipe_id}`)
        navigate(`/recipe/${recipe.recipe_id}`)
    }
    return (
        <div className="recipe_style">
            <div>
                <div className="recipe_img_container">
                    <img src={recipe.image_url} alt="food pic"/>
                </div>
                <h3>{recipe.recipe_name}</h3>
            </div>
            <button className="search_btn" onClick={handleClick}>See More</button>
        </div>
    );
};

export default RecipeCard;