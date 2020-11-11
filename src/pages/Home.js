import React from 'react';
import CocktailList from '../Components/CocktailList';


const Home = ({cocktail, loadCocktail, Search}) => {
    return (
        <div>
          <CocktailList cocktail={cocktail} loadCocktail={loadCocktail} /> 
        </div>
    )
}

export default Home
