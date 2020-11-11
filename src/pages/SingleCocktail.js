import Axios from "axios";
import React from "react";
import { Card, ListGroup, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

const SingleCocktail = (props) => {
  console.log(props.match.params.id);
  const Id = props.match.params.id;

  const [cocktailById, setCocktailById] = useState({});
  const [loadCocktailById, setLoadCocktailById] = useState(true);
  console.log(cocktailById);

  const getCocktailById = () => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${Id}`)
      .then((res) => {
        setCocktailById(res.data);
        setLoadCocktailById(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCocktailById();
  },[]);

  return (
    <div style={{marginTop:'15px', display:"flex", justifyContent:"center"}}>
      {console.log(cocktailById)}
      {loadCocktailById ? (
        <Spinner animation="border" variant="warning" />
      ) : (
        <Card style={{ width: "18rem", alignItems: "center", display: "flex" }}>
          <Card.Img variant="top" src={cocktailById.drinks[0].strDrinkThumb} />
          <Card.Body>
            <Card.Title>{cocktailById.drinks[0].strDrink}</Card.Title>
            <Card.Text>
              {cocktailById.drinks[0].strInstructions}
            </Card.Text>
            <ListGroup.Item>{cocktailById.drinks[0].strAlcoholic}</ListGroup.Item>
            <ListGroup.Item>{cocktailById.drinks[0].strGlass}</ListGroup.Item>
            <ListGroup.Item>{cocktailById.drinks[0].strCategory}</ListGroup.Item>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default SingleCocktail;
