import React, {useState} from 'react'
import './App.css';
import axios from 'axios'
import Recipetile from './Recipetile/Recipetile';
function App() {

  
  const YOUR_APP_ID='ce3ea343';
  const YOUR_APP_KEY="ca0caf18364540c12f5272b2cd79102e";

  const[recipes,setRecipes]=useState([])
  const[query,setQuery]=useState("")
  const[healthLabels,sethealthLabels]=useState("vegetarian")

  const url= `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`
  
  
const get_recipe_info=async ()=>{
  var result=await axios.get(url)
  setRecipes(result.data.hits)
  console.log(result.data.hits)

}
const onSubmit=(e)=>{ //this will prevent the page from reloading
  e.preventDefault();
  get_recipe_info(); //on submiting it should call the function
}
  return (
    <div className="App">
      
     <h1 onClick={get_recipe_info}><u>Food Recipe Hub</u>😊</h1>
     
     <form className="app_searchForm" onSubmit={onSubmit}>
      
       <input type="text" placeholder="Type the Ingredient" autoComplete="Off" className="app_input" value={query} onChange={(e)=>{setQuery(e.target.value)}} />
       <select className="app_HealthLabels">
         <option onClick={()=>{sethealthLabels("vegetarain")}} value="vegetarain">vegan</option>
    
         <option onClick={()=>{sethealthLabels("Low Sugar")}} value="Low Sugar">Low Sugar</option>
      

         <option onClick={()=>{sethealthLabels("Diary Free")}} value="Diary Free">Diary Free</option>
      

         <option onClick={()=>{sethealthLabels("Immuno-Supportive")}} value="Immuno-Supportive">Immuno-Supportive</option>
       

      
         <option onClick={()=>{sethealthLabels("vwheat-free")}} value="wheat-free">wheat-free</option>
       </select>
       <input type="submit" value="Get Recipe" className="app_submit" />

       </form>  
     <div className="app_recipes">  
       {recipes.map((recipe)=>{
         return <Recipetile recipe={recipe}/>
       })}                                

     </div>

    </div>

  );
}

export default App;
