import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, {Autoplay, SwiperOptions} from 'swiper';
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CarouselComponent implements OnInit {
  @ViewChild('swiperSlideShow') swiperSlideShow!: CarouselComponent;
  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
  };
  ngAfterViewInit(): void
  {

    // Start autoplay
//    this.swiperSlideShow.autoplay.start();
  }


}
