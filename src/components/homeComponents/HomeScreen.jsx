import React, { useState, useEffect} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from '../RecipeCard'
import { BiSearchAlt2 } from "react-icons/bi"


const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const url = 'https://recipes.devmountain.com'

  const recipeDisplay = recipes.filter((recipe) => {
    let title = recipe.recipe_name.toLowerCase()
    let searchParams = search.toLowerCase()
    return title.includes(searchParams)
   })
    .map((recipe) => {
      return <RecipeCard recipe={recipe}/>
    })

  const getRecipes = () => {
    axios
        .get(`${url}/recipes`)
        .then((res) => {
          setRecipes(res.data)
          console.log(res.data)
        })
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className='App'>
      <AdBanner />
      <span><BiSearchAlt2 size='2em' color="#2D2A32" /><input 
      type="text" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder='Search for a Recipe' /></span>
      {recipeDisplay}
    </div>
  )
}

export default HomeScreen