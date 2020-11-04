import { Component, OnInit } from '@angular/core';
import { Recipe} from './../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes:Recipe[] = [new Recipe("Idli Sambar","Idli Sambar is a delicious south indian dish",
                        "https://previews.agefotostock.com/previewimage/medibigoff/a0d151893ba8fb69665bb344c1c78942/esy-033597286.jpg"),
                                
                      new Recipe("Idli Sambar","Idli Sambar is a delicious south indian dish",
                        "https://previews.agefotostock.com/previewimage/medibigoff/a0d151893ba8fb69665bb344c1c78942/esy-033597286.jpg")]
  constructor() { }

  ngOnInit(): void {
  }

}
