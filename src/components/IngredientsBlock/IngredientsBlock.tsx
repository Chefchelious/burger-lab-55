import React from 'react';
import {TStateIngredient} from "../../types/types";
import {INGREDIENTS} from "../../constans/constants";
import IngredientsBtns from "../IngredientsBtn/IngredientsBtns";

interface IProps {
    ingredients: TStateIngredient[];
    addIngredient: (name: string) => void;
    removeIngredient: (name: string) => void;
}

const IngredientsBlock = ({ingredients, addIngredient, removeIngredient}: IProps) => {
    return (
        <div className="ingredients-block">
            {INGREDIENTS.map((ingredient, index) => (
                <IngredientsBtns
                    key={index}
                    imageSrc={ingredient.image}
                    imageAlt={ingredient.name}
                    counter={ingredients[index].count}
                    addIngredient={() => addIngredient(ingredient.name)}
                    removeIngredient={() => removeIngredient(ingredient.name)}
                />
            ))}
        </div>
    );
};

export default IngredientsBlock;