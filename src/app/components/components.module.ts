import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarRatingModule } from "ngx-bar-rating";
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { CastSlideShowComponent } from './cast-slide-show/cast-slide-show.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';



@NgModule({
  declarations: [
    CastSlideShowComponent,
    MoviesPosterGridComponent,
    NavbarComponent,
    SlideshowComponent
  ],
  imports: [
    CommonModule,
    BarRatingModule,
    RouterModule,
    PipesModule,
    SwiperModule
  ],
  exports: [
    CastSlideShowComponent,
    MoviesPosterGridComponent,
    NavbarComponent,
    SlideshowComponent
  ]
})
export class ComponentsModule { }
