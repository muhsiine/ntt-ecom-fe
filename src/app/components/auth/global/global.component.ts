import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

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

}
