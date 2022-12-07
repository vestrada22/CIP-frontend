import { Component, Input, AfterViewInit } from '@angular/core';
import { Cast } from '../../interfaces/credits-response';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade])
@Component({
  selector: 'app-cast-slide-show',
  templateUrl: './cast-slide-show.component.html',
  styleUrls: ['./cast-slide-show.component.sass']
})
export class CastSlideShowComponent implements AfterViewInit {

  @Input() cast: Cast[] = []

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    })
  }
}
