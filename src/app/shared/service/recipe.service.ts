import {EventEmitter, Injectable, Output} from '@angular/core'
import {Recipe} from '../../recipes/recipe.model'


@Injectable({providedIn:"root"}) //Either use providedIn clause or add in providers [] in app.module.ts
export class RecipeService {

    recipes:Recipe[] = [new Recipe("Idli Sambar","Idli Sambar is a delicious south indian dish",
    "https://previews.agefotostock.com/previewimage/medibigoff/a0d151893ba8fb69665bb344c1c78942/esy-033597286.jpg"),
            
    //  new Recipe("Donuts","Donut is a delicious, mouth watering sweet dish",
    // "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/donuts/DNK00834_VanillaFrostedSprinklesDonut_500px@2x.png"),

    new Recipe("Pacific Veg Pizza","Pizza is a delicious dish",
    "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Waagmi_Soni/Gralic_Crust_Veggie_Pizza.jpg"),

    new Recipe("Vada Sambar","Vada Sambar is a delicious south indian dish",
    "https://cdn.shopify.com/s/files/1/1337/0877/files/Medu-Vada_414ba9c7-930f-47cc-b66e-288755b41890.jpg?v=1580204628")];


    selectedRecipeEvt = new EventEmitter<Recipe>();

    addNewRecipe(newRecipe:Recipe) {

        this.recipes.push(newRecipe);

    }

    deleteRecipe(newRecipe:Recipe) {
        const idx = this.recipes.findIndex(t=> t.name === newRecipe.name)
        this.recipes.splice(idx,1);
    }


    selectedRecipeByIndex(idx:number): Recipe {
        return this.recipes[idx] 
    }

    getAllRecipes():Recipe[] {
        return this.recipes;
    }

    emitSelectedRecipeEvt(recipe: Recipe) {
        this.selectedRecipeEvt.emit(recipe);

    }
}