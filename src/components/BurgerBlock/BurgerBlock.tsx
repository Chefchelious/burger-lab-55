import React from 'react';
import {TStateIngredient} from "../../types/types";
import BreadTop from "./BreadTop";
import IngredientComponent from "./IngredientComponent";

import './../../App.css';


interface IProps {
    ingredients: TStateIngredient[];
    burgerPrice: number
}

const BurgerBlock = ({ingredients, burgerPrice}: IProps )=> {
    return (
        <div className="burger-block">
            <div className="Burger">
                <BreadTop />
                {
                    ingredients.map((ing) => {
                        const ingrList: React.ReactNode[] = [];

                        for(let i: number = 0; i < ing.count; i++) {
                            ingrList.push( <IngredientComponent key={ing.name + i} class={ing.name} />)
                        }
                        return ingrList;
                    })
                }
                <div className="BreadBottom"></div>
            </div>

            <div>Burger price: my price: {burgerPrice}</div>
        </div>
    );
};

export default BurgerBlock;