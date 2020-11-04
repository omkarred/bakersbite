import {Ingredient} from './ingredient.model'
export  class IngredientEvent{

    constructor(public ingredient:Ingredient, public action:string){}
   
}