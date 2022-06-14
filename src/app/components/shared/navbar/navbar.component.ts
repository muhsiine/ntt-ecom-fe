import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dark:boolean = false;
  code:string = "en";
  languages:{code:string, label:string}[] = [
    {code: 'en', label: 'Eng'},
    {code: 'fr', label: 'Fr'}
  ];

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.code = localStorage.getItem('locale') || "en"; 
  }

  public changeLanguage() {
    localStorage.setItem('locale', this.code);
    this.translateService.use(this.code);
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
