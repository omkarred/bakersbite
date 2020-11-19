import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AuthGuard } from './shared/service/auth-guard-service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UserNotAuthenticatedComponent } from './user-not-authenticated/user-not-authenticated.component';


const routes: Routes = [
                        {path: '', component:HomePageComponent},
                        {path:'recipes', canActivate:[AuthGuard], canActivateChild:[AuthGuard],component:RecipesComponent},
                        {path:'cart', canActivate:[AuthGuard], component:ShoppingListComponent},
                        {path:'user-not-authenticated', component:UserNotAuthenticatedComponent},
                        {path:'**', component:PageNotFoundComponent, pathMatch:'full'}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
