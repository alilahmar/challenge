import React from 'react';
import {Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../ComponentsCss/Cocktail.css';

const Cocktail = ({cocktail}) => {
    return (
        <div className='card'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={cocktail.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{cocktail.strDrink}</Card.Title>
    <Card.Title>{cocktail.strAlcoholic}</Card.Title>
    <Card.Title>{cocktail.strCategory}</Card.Title>
    <Link to={`/cocktail/${cocktail.idDrink}`}><Button variant="primary">Details</Button></Link>
  </Card.Body>
</Card>

        </div>
    )
}

export default Cocktail
