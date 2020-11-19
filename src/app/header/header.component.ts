import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName:string='';

  constructor(private route:ActivatedRoute) { 
  }

  ngOnInit(): void {

    // this.route.params.subscribe( (params:Params) => { this.userName = params['activeuser'] ; console.log(this.route.data);});
    // console.log("this.route.snapshot.paramMap['activeuser'];" + this.userName)
  }
  
}
