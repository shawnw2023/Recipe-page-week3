const DetailText = (props) => {
  return (
    <div className="overall_stuff">
      <div className="ingredients_container">
        <h2 className="recipe_head">Recipe</h2>
        <h3 className="ing_text">Prep Time: {props.prep}</h3>
        <h3 className="ing_text">Cook time: {props.cook}</h3>
        <h3 className="ing_text">Serves: {props.serves}</h3>
        <br></br>
        <h2 className="recipe_head">Ingredients</h2>
        {props.ingredients && props.ingredients.map((ing) => {
            return <h3>{ing.quantity} {ing.ingredient}</h3>
        })}
      </div>
        <div className="instructions_box">
          <h2 className="inst_head">instructions</h2>
          <p className="inst_text" style={{ whiteSpace: "pre-wrap" }}>{props.instructions}</p>
        </div>
    </div>
  );
};

export default DetailText;
