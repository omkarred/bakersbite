import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { IngredientEvent  } from 'src/app/shared/ingredient.event';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 @Output() ingredientEvt =  new EventEmitter<IngredientEvent>();

  constructor() { }

  ngOnInit(): void {
  }


  addIngredient(ing:Ingredient) {
    
    this.ingredientEvt.emit({ingredient:ing, action:"add"});
  }

  removeIngredient(ing: Ingredient) {
    this.ingredientEvt.emit({ingredient:ing, action:"remove"});
  }
}
