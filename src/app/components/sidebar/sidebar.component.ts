import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Category } from 'src/app/models/category';
import { Notifier } from 'src/app/models/notifier';
import { CategoryService } from 'src/app/modules/category/category.service';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  static isSidebarActive:boolean = false;
  communCategories: Category[] = [
    {
      "id": 1,
      "categoryCode": "Trends",
      "icon": "bi-graph-up-arrow",
      "languages": []
    },
    {
      "id": 2,
      "categoryCode": "Best Sellers",
      "icon": "bi-patch-check-fill",
      "languages": []
    },
    {
      "id": 3,
      "categoryCode": "New Drops",
      "icon": "bi-graph-down-arrow",
      "languages": []
    }
  ];
  categories: Category[] = []; 
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
    this.categoryService.getAll()
      .subscribe(res=> this.categories = res,
                 err=> this.notifier.showNotification(Notifier.ERROR, "Error ", err.message));
  }

  get getSidebarActive():boolean{
    return SidebarComponent.isSidebarActive;
  }

}
