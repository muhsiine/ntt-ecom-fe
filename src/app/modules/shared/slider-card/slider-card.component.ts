import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {

  @Input() data:{ title:string, link:string, imgUrl:string } ={ title:"", link:"", imgUrl:"" };

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
