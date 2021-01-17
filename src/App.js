import React, { useEffect, useState } from 'react';
import Recipe from "./Components/Recipe";
import "./App.css";
import Footer from "./Components/Footer";

function App() {

    const APP_ID = '4b098309';
    const API_KEY = '8cf094d20acd181f8cbc6d862569a150';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('banan');
 
    useEffect(() => {
        getRec();
    }, [query]);

    const getRec = async () => {
       const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
       const data = await response.json();
       setRecipes(data.hits);
       console.log(data.hits);
    }

    const searchUpdate = (e) => {
        setSearch(e.target.value);
    }

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className="main_wrapper">
            <div className="main">
            <p className="main_title">Food App</p>
            <form onSubmit={getSearch} className="search_form">
                <input className="search_bar" type="text" value={search} onChange={searchUpdate} placeholder="Type any food" />
                <button className="search_button" type="submit">
                  Search
                </button>
            </form>
            <div className="w">
            { recipes.map(recipe => (
              <Recipe
               title={recipe.recipe.label}
               caloriies={recipe.recipe.calories}
               image={recipe.recipe.image}
               key={recipe.recipe.label}
               ingredients={recipe.recipe.ingredients}
               />
            )) }
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default App;
