import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

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
