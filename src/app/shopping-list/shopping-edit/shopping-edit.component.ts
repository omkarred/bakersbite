import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { IngredientEvent  } from 'src/app/shared/ingredient.event';
import { ShoppingService } from 'src/app/shared/service/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

   constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }


  addIngredient(ing:Ingredient) {
    this.shoppingService.emitIngredientEvt({ingredient:ing, action:"add"});
  }

  removeIngredient(ing: Ingredient) {
    this.shoppingService.emitIngredientEvt({ingredient:ing, action:"remove"});
  }
}
