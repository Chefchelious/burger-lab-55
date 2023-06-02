import React from 'react';
import IngredientComponent from "./IngredientComponent";

const BreadTop = ()=> {
    return (
        <div className="BreadTop">
            <IngredientComponent class="Seeds1" />
            <IngredientComponent class="Seeds2" />
        </div>
    );
};

export default BreadTop;