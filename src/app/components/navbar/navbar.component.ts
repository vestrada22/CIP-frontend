import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  searchMovie(text: string) {
    text = text.trim()
    if (text.length === 0) {
      return
    }
    this.router.navigate(['/search', text])
  }

}
