import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  
  constructor( private recipeService:RecipeService, private router:Router, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getAllRecipes();
    // if (this.recipes != null && this.recipes.length>1) {
    //   this.selectRecipe(this.recipes[this.recipes.length -1]);
    // }

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
    this.onClickNewRecipe = false;
    this.IsAlertShow=true;

  }

  closeAlert() {
    this.IsAlertShow = false;
  }
}
