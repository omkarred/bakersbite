import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatListModule} from '@angular/material/list'; 
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import {MatExpansionModule} from '@angular/material/expansion';

import {ReversePipe} from './shared/reverse.pipe';
import { FooterComponent } from './footer/footer.component'
import {ActivatedRoute} from '@angular/router/';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserNotAuthenticatedComponent } from './user-not-authenticated/user-not-authenticated.component'

import {ShoppingService} from './shared/service/shopping.service'
import {RecipeService} from './shared/service/recipe.service'
import {AuthGuard} from './shared/service/auth-guard-service'
import {Auth} from './shared/service/auth.service';
import {Registration} from './shared/service/register.service'

import { HomePageComponent } from './home-page/home-page.component';
import { EmptyRecipeDetailComponent } from './recipes/empty-recipe-detail/empty-recipe-detail.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RegisterComponent } from './register/register.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    ReversePipe,
    FooterComponent,
    PageNotFoundComponent,
    UserNotAuthenticatedComponent,
    HomePageComponent,
    EmptyRecipeDetailComponent,
    EditRecipeComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule, 
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatListModule,
    MatInputModule,
    NgbModule,
    MatExpansionModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [RecipeService, ShoppingService, AuthGuard, Auth, Registration],
  bootstrap: [AppComponent]
})
export class AppModule { }
