import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  routings:{ name:string, icon:string, link:string }[]=[
    { name: 'general.home', icon: 'bi-house-fill', link:'/' },
    { name: 'general.product', icon: 'bi-box2-fill', link:'/product' },
    { name: 'general.order', icon: 'bi-newspaper', link:'/order' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get getSidebarActive():boolean{
    return SidebarComponent.isSidebarActive;
  }

  openCloseSidebar(){
    SidebarComponent.isSidebarActive = !SidebarComponent.isSidebarActive;
  }

}
