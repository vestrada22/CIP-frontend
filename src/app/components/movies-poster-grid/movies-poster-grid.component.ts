import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.sass']
})
export class MoviesPosterGridComponent {

  @Input() movies: Movie[] = []

  constructor(private router: Router) { }

  onMovieClick(movie: Movie) {
    this.router.navigate(['/movie', movie.id])
  }

}
