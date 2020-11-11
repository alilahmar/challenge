import React from "react";
import Cocktail from "./Cocktail";
import { Spinner } from "react-bootstrap";

const CocktailList = ({ cocktail, loadCocktail}) => {

  var data 
  if (cocktail.drinks) {
    data = cocktail.drinks.map((el) => <Cocktail cocktail={el} />)
  }
  else {data = <p>cocktail does not exist </p>}


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "35px",
        flexWrap: "wrap",
      }}
    >
      {loadCocktail ? (
        <Spinner animation="border" variant="danger" />
      ) : 
      data
      }
    </div>
  );
};

export default CocktailList;
