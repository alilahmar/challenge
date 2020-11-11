import React from "react";
import '../ComponentsCss/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="mainpage">
      <div className="welcome">
        <p>*** Welcome ***</p>
        <div className="last">
          <p>
            Easy to make and refreshingly bitter, this combination of gin,
            Campari and sweet vermouth has launched a thousand riffs. The
            cocktail, said to have been invented in Florence by an Italian count
            who requested that a bartender replace the club soda in his
            Americano with gin, recently celebrated its centennial birthday.
          </p>
          <div className='image'>
              <img src='cocktail.jpg' alt='cocktail'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
