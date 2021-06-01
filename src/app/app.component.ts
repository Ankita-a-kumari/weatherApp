import { Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  constructor(private router: Router) {}

  homepage() {
    this.router.navigate(['']);// when clicked on icon navigates to home page.
  }
}
