import { AfterViewInit, Component, Input, ViewEncapsulation } from '@angular/core';
import { Movie } from '../../interfaces/billboard-response';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade, A11y])
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class SlideshowComponent implements AfterViewInit {

  @Input() movies: Movie[] = []

  ngAfterViewInit() {
    new SwiperCore('.swiper-container', {
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
