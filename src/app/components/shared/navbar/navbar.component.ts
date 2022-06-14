import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dark:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchDarkMode(): void{
    this.dark = !this.dark;
    if(this.dark){
      document.body.classList.add('dark');
    }
    else{
      document.body.classList.remove('dark');
    }
  }

}
