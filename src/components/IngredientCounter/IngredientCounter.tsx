import React from 'react';

interface IIngredientCounter {
    counter: number
}

const IngredientCounter: React.FC<IIngredientCounter> = (props) => {
    return (
        <div>
            x {props.counter}
        </div>
    );
};

export default IngredientCounter;