import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/Services/Language/language.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

  public scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
  
}
