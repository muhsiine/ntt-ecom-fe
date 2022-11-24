import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mode-lang',
  templateUrl: './mode-lang.component.html',
  styleUrls: ['./mode-lang.component.scss']
})
export class ModeLangComponent implements OnInit {

  @Input() bgDark:boolean = false;
  dark:boolean = false;
  code:string = "en";
  languages:{code:string, label:string}[] = [
    {code: 'en', label: 'Eng'},
    {code: 'fr', label: 'Fr'}
  ];

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.code = localStorage.getItem('locale') || "en";
    if(localStorage.getItem('darkMode')){
      this.dark = localStorage.getItem('darkMode') == 'true' || false;
    }
    if(this.dark){
      document.querySelector("html")?.classList.add('dark');
    }
  }

  public changeLanguage() {
    localStorage.setItem('locale', this.code);
    this.translateService.use(this.code);
  }

  switchDarkMode(): void{
    this.dark = localStorage.getItem('darkMode') == 'true' || false;
    this.dark = !this.dark;

    if(this.dark){
      document.querySelector("html")?.classList.add('dark');
      localStorage.setItem('darkMode', 'true') ;
    }
    else{
      document.querySelector("html")?.classList.remove('dark');
      localStorage.setItem('darkMode', 'false') ;
    }

  }

  get getMode():string{
    if(this.bgDark){
      return this.dark ? ' bi-moon-stars-fill' : 'text-white bi-sun-fill';
    }
    return this.dark ? 'bi-moon-stars-fill' : 'bi-sun-fill';
  }

}
