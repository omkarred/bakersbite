import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  userName:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

  //   this.route.params.subscribe( (params:Params) => {
  //      this.userName = params['activeuser'] ; 
  //      console.log(this.route.data);});
  // }
 
  this.route.queryParams.subscribe( params => this.userName = params['activeuser'] 
  );
  console.log(this.userName); 
}

}
