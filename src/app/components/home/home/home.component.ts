import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  numbers: number[];
  sidebar =document.getElementById("#sidebars");
  constructor() {
    this.numbers = Array(6).fill(0).map((x,i)=>i);
   }

  ngOnInit(): void {
  }

  hideSidebar(){
    console.log(this.sidebar);    //this.sidebar.style.display = "none";
  }
}
