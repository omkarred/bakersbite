import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/service/recipe.service';
import { Recipe} from './../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  onClickNewRecipe = false;
  recipes:Recipe[];
  IsAlertShow= false;
  
  constructor( private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getAllRecipes();
  }

  selectRecipe(recipe:Recipe) {
    if(recipe != null) {
      this.recipeService.emitSelectedRecipeEvt(recipe);
    }

  }
  

  showNewRecipePanel() {
    this.onClickNewRecipe = true;

  }

  addRecipe(recipe:Recipe) {

    this.recipeService.addNewRecipe(recipe);
    console.log("Done");
    console.log(this.recipeService.getAllRecipes())
    this.onClickNewRecipe = false;
    this.IsAlertShow=true;

  }

  closeAlert() {
    this.IsAlertShow = false;
  }
}
