import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  dark:boolean = false;
  code:string = "en";
  languages:{code:string, label:string}[] = [
    {code: 'en', label: 'Eng'},
    {code: 'fr', label: 'Fr'}
  ];

  constructor(private translateService: TranslateService, private location: Location) { }

  ngOnInit(): void {
    this.code = localStorage.getItem('locale') || "en"; 
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

  public changeLanguage() {
    localStorage.setItem('locale', this.code);
    this.translateService.use(this.code);
  }

  goBack(){
    this.location.back();
  }
  
}
