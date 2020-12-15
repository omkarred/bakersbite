import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { EmptyRecipeDetailComponent } from './recipes/empty-recipe-detail/empty-recipe-detail.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/service/auth-guard-service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UserNotAuthenticatedComponent } from './user-not-authenticated/user-not-authenticated.component';


const routes: Routes = [
                        {path: '', component:HomePageComponent},
                        { path:'recipes', /*canActivate:[AuthGuard],canActivateChild:[AuthGuard],*/component:RecipesComponent,children:
                        [
                          {path:'', component:EmptyRecipeDetailComponent,pathMatch:'full' },
                          {path:'recipe-detail',component:RecipeDetailComponent },
                          {path:'edit-recipe',component:EditRecipeComponent },
                          {path:'new-recipe',component:EditRecipeComponent }
                        ]
                        },
                        {path:'cart', canActivate:[AuthGuard], component:ShoppingListComponent},
                        {path:'register', component:RegisterComponent},
                        {path: 'app-home-page', component:HomePageComponent},
                        {path:'user-not-authenticated', component:UserNotAuthenticatedComponent},
                        {path:'**', component:PageNotFoundComponent, pathMatch:'full'}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
