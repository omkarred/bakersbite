import { Component, OnInit } from '@angular/core';
import { IngredientEvent } from '../shared/ingredient.event';
import { Ingredient } from './../shared/ingredient.model'
import { ShoppingService } from '../shared/service/shopping.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[] = []; //[new Ingredient("Apples", 5), new Ingredient("Cherries", 3)]
  constructor(private shoppingSerive: ShoppingService) {

    shoppingSerive.ingredientEvt.subscribe((iEvt: IngredientEvent) => this.onIngredientEvt(iEvt))
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingSerive.getAllIngredients();
  }


  onIngredientEvt(ingredientEvent: IngredientEvent) {

    if (ingredientEvent.action === "add") {
      this.shoppingSerive.addToIngredients(ingredientEvent.ingredient);
    }
    else if (ingredientEvent.action === "remove") { 
      this.shoppingSerive.remFromIngredients(ingredientEvent.ingredient) 
    }

  }
}