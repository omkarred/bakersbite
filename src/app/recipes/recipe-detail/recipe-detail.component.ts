import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService, private shoppingService: ShoppingService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
      this.recipeService.selectedRecipeEvt.subscribe(
        (r: Recipe) => {  console.log(r); console.log("ffffff"); if (r != undefined) { this.selectedRecipe = r } }
      )
  }

  ngOnInit(): void {

    console.log("hello")
    
  }


  addIngredientsToShoppingList() {
    // let arr = this.selectedRecipe.ingredients.slice(); 
    this.shoppingService.addAllIngredients(this.selectedRecipe.ingredients);
    // this.router.navigate(['cart'],{relativeTo:this.activatedRouter}) /// This is for relative path 
    this.router.navigate(["/cart"]);

  }
}
