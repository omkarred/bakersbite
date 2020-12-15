import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input("item") recipeItem: Recipe; 
  @Input() index:Number;
  highlightCardColor:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}