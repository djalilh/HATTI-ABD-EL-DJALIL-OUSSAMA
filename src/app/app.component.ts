import { Component } from '@angular/core';
import { LanguageService } from './Services/Language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  currentLang: string = "ar"
  constructor(private _languageService: LanguageService){}


}
