import meatImage from '../img/meat.png';
import cheeseImage from '../img/cheese.png';
import saladImage from '../img/salad.png';
import baconImage from '../img/bacon.png';
import {TIngredient} from "../types/types";
export const INGREDIENTS: TIngredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Bacon', price: 60, image: baconImage},
];