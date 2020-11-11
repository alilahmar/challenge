import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import AboutUs from "./pages/AboutUs";
import Axios from "axios";
import {useEffect, useState } from "react";
import SingleCocktail from './pages/SingleCocktail';


function App() {
  const [cocktail, setCocktail] = useState([]);
  const [loadCocktail, setLoadCocktail] = useState(true)

  const [Search, setSearch] = useState('');
   
  const getCocktail = () => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${Search}`)
      .then((res) => {setCocktail(res.data);
        setLoadCocktail(false)})
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getCocktail();
  }, [Search]);
  


  return (
    <div className="App">
      <NavBar setSearch={setSearch}/>
      <Switch>
        <Route exact path="/" render={()=><Home Search={Search} cocktail={cocktail} loadCocktail={loadCocktail} />} />
        <Route path="/about us" component={AboutUs} />
        <Route path="/cocktail/:id" component={SingleCocktail} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
