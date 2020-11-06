import {EventEmitter, Injectable} from '@angular/core'
import { IngredientEvent } from '../ingredient.event';
import {Ingredient} from '../ingredient.model'

// @Injectable({providedIn: "root"})
export class ShoppingService {


    ingredientEvt =  new EventEmitter<IngredientEvent>()
    ingredients:Ingredient[] = [];

    addToIngredients(ingredient: Ingredient) {

        const index = this.ingredients.findIndex(x=> x.name === ingredient.name);
        
        if (index == -1) {
          this.ingredients.push(ingredient);
        }else{
          const ing:Ingredient = this.ingredients[index]; 
          ing.qty = parseInt(ing.qty.toString()) + parseInt(ingredient.qty.toString()); 
        }
    
      }

      addAllIngredients(ingredients: Ingredient[]) {

        //{name:i.name, qty:i.qty} instead of passing i directly since its a pass by reference & not pass by copy
        ingredients.forEach(i => this.addToIngredients({name:i.name, qty:i.qty}));
      }

      remFromIngredients(ingredient: Ingredient) {
 
        const index = this.ingredients.findIndex(x=> x.name === ingredient.name);
        if (index > -1) {
          this.ingredients.splice(index, 1);
        }
      }
    
      emitIngredientEvt(ingEvt:IngredientEvent) {
        this.ingredientEvt.emit(ingEvt);
      }


      getAllIngredients():Ingredient[]{
        return this.ingredients;
      }
}