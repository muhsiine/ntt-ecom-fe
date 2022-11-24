import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input('number') length:number = 3;
  @Input() selectedNumber:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  get getLengths(): number[]{
    let lengths: number[] = [];
    for(let i=1; i<=this.length; i++){
      lengths.push(i);
    }    
    return lengths;
  }

}
