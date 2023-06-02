import React, {useState} from 'react';
import {TStateIngredient} from "./types/types";
import './App.css';

const App = () => {
    const [ingredients, setIngredients] = useState<TStateIngredient[]>([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
    ]);

    const [burgerPrice, setBurgerPrice] = useState(30);

  return (
      <div className="App">
        burger lab yeeeaaaah
      </div>
  );
};

export default App;
