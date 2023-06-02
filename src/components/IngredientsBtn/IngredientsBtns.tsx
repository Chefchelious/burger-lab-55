import React from 'react';
import IngredientCounter from "../IngredientCounter/IngredientCounter";

interface IIngredientsBtns{
    imageSrc: string;
    imageAlt: string;
    counter: number;
    addIngredient: React.MouseEventHandler;
    removeIngredient: React.MouseEventHandler;
}
const IngredientsBtns = (props: IIngredientsBtns) => {

    return (
        <div className="ingredient-option">
            <button onClick={props.addIngredient}><img className="ingr-img" src={props.imageSrc} alt={props.imageAlt} /></button>
            <IngredientCounter counter={props.counter} />
            <button onClick={props.removeIngredient} disabled={!props.counter}>trash</button>
        </div>
    );
};

export default IngredientsBtns;