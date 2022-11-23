import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-banner',
  templateUrl: './slider-banner.component.html',
  styleUrls: ['./slider-banner.component.scss']
})
export class SliderBannerComponent implements OnInit {

  @Input() data:{ title:string, link:string, imgUrl:string }[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
