import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Category } from 'src/app/models/category';
import { Notifier } from 'src/app/models/notifier';
import { CategoryService } from 'src/app/modules/category/services/category.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { CategoryByLang } from 'src/app/models/categoryByLang';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  static isSidebarActive:boolean = false;
  categories: CategoryByLang[] = []; 
  settingsList: Category[] = [
    {
      "id": 1,
      "categoryCode": "sidebar.account",
      "icon": "bi-person-fill",
      "languages": []
    },
    {
      "id": 2,
      "categoryCode": "sidebar.help_center",
      "icon": "bi-balloon-heart-fill",
      "languages": []
    }
  ];

  constructor(private categoryService: CategoryService, private notifier: NotifierService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      res=> this.categories = res,
      err=> this.notifier.showNotification(Notifier.ERROR, "Error", err.message));
  }

  get getSidebarActive():boolean{
    return SidebarComponent.isSidebarActive;
  }

}
