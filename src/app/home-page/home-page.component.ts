import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../shared/service/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private auth:Auth, private route:Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  login() {

    this.auth.logIn();
  }

  logout() {

    this.auth.logOut();
  }

  isSignedIn() {
    return this.auth.isSignedIn()
  }

  signUp() {
    this.route.navigate(["/register"], {relativeTo:this.activatedRoute});
  }
}
