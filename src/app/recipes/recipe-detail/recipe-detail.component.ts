import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from 'src/app/shared/service/recipe.service';
import { ShoppingService } from 'src/app/shared/service/shopping.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe : Recipe;

  constructor(private recipeService:RecipeService, private shoppingService:ShoppingService) {
    this.recipeService.selectedRecipeEvt.subscribe(
      (r:Recipe) =>  { if (r != undefined) {this.selectedRecipe = r }}
    )
   }

  ngOnInit(): void {
   
  }


  addIngredientsToShoppingList() {
    console.log(this.selectedRecipe.ingredients )
    // let arr = this.selectedRecipe.ingredients.slice(); 
    this.shoppingService.addAllIngredients(this.selectedRecipe.ingredients );
  }
}
