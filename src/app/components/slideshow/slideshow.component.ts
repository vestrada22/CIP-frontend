import { AfterViewInit, Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/billboard-response';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade])
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.sass']
})
export class SlideshowComponent implements AfterViewInit {

  @Input() movies: Movie[] = []

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 5500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }

}
