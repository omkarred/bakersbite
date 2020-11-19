import { Component, OnInit } from '@angular/core';
import { Auth } from '../shared/service/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private auth:Auth) { }

  ngOnInit(): void {
  }

  login() {

    this.auth.logIn();
  }

  logout() {

    this.auth.logOut();
  }
}
