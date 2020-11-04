import { Component, OnInit } from '@angular/core';
import { IngredientEvent } from '../shared/ingredient.event';
import { Ingredient } from './../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[] = []; //[new Ingredient("Apples", 5), new Ingredient("Cherries", 3)]
  constructor() { }

  ngOnInit(): void {
  }


  amendIngredients(ingredientEvent: IngredientEvent) {

    if(ingredientEvent.action === "add") { this.addToIngredients(ingredientEvent.ingredient)}
    else if(ingredientEvent.action === "remove") { this.remToIngredients(ingredientEvent.ingredient)}

  }

  addToIngredients(ingredient: Ingredient) {

    const index = this.ingredients.findIndex(x=> x.name === ingredient.name);
    
    if (index == -1) {
      this.ingredients.push(ingredient);
    }else{
      const ing:Ingredient = this.ingredients[index]; 
      ing.qty = parseInt(ing.qty.toString()) + parseInt(ingredient.qty.toString()); 
    }

  }

  remToIngredients(ingredient: Ingredient) {
 
    const index = this.ingredients.findIndex(x=> x.name === ingredient.name);
    if (index > -1) {
      this.ingredients.splice(index, 1);
    }
  }
}