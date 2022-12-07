import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits-response';
import { MovieDetails } from 'src/app/interfaces/movie-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {

  movie!: MovieDetails
  cast: Cast[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params
    combineLatest([
      this.moviesService.getMovieDetails(id),
      this.moviesService.getCasting(id)
    ]).subscribe(([movie, cast]) => {
      if (!movie) {
        this.router.navigateByUrl('/home')
        return
      }
      this.movie = movie
      this.cast = cast.filter(data => data.profile_path !== null)
    })
  }

  back() {
    this.location.back()
  }

}
