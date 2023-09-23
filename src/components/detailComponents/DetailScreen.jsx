import React from "react";
import { useParams } from "react-router-dom";
import DetailImage from "./DetailImage";
import DetailText from "./DetailText";
import axios from "axios";
import { useState, useEffect } from "react";

const DetailScreen = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
    .then((res) => {
      setRecipe(res.data);
    });
  }, []);

  console.log(recipe)

  return (
    <section>
      <DetailImage title={recipe.recipe_name} image={recipe.image_url} />

      <DetailText instructions={recipe.instructions} ingredients={recipe.ingredients}
      prep={recipe.prep_time} cook={recipe.cook_time} serves={recipe.serves} />
    </section>
  );
};

export default DetailScreen;
