import React from 'react';

interface IProps {
    class: string
}

const IngredientComponent: React.FC<IProps> = (props) => {
    return <div className={props.class}></div>;
};

export default IngredientComponent;