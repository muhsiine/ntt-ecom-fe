import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ntt-ecom-fe';

  constructor(private translateService: TranslateService){
    const lang = localStorage.getItem('locale') || "en";
    translateService.setDefaultLang(lang);
    translateService.use(lang);
  }
}
