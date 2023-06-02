import React, {useState} from 'react';
import {TStateIngredient} from "./types/types";
import {INGREDIENTS} from "./constans/constants";
import IngredientsBlock from "./components/IngredientsBlock/IngredientsBlock";
import BurgerBlock from "./components/BurgerBlock/BurgerBlock";
import './App.css';

const App = () => {
    const [ingredients, setIngredients] = useState<TStateIngredient[]>([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
    ]);

    const [burgerPrice, setBurgerPrice] = useState(30);

    const addIngredient = (name: string) => {
        setIngredients((prev) => {
            return prev.map((ingredient, index) => {
                if(ingredient.name === name) {
                    setBurgerPrice(prev => prev + INGREDIENTS[index].price);
                    return {
                        ...ingredient,
                        count: ingredient.count + 1,
                    }
                }

                return ingredient;
            });
        });
    };

    const removeIngredient = (name: string) => {
        setIngredients((prev) => {
            return prev.map((ingredient, index) => {
                if(ingredient.name === name) {
                    setBurgerPrice(prev => prev - INGREDIENTS[index].price * ingredient.count);

                    return {
                        ...ingredient,
                        count: 0,
                    }
                }
                return ingredient;
            });
        })
    };


    return (
      <div className="App">
          <IngredientsBlock ingredients={ingredients} addIngredient={addIngredient} removeIngredient={removeIngredient} />

          <BurgerBlock ingredients={ingredients} burgerPrice={burgerPrice} />
      </div>
  );
};

export default App;
