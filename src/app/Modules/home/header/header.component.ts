import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/Services/Language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }


  public SwithToEnglish(){
    this.languageService.ChangeToEnglish();
  }

  public SwithToFrench(){
    this.languageService.ChangeToFrench();
  }

  public SwithToArabe(){
    this.languageService.ChangeToArabe();
  }

  public scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
}
