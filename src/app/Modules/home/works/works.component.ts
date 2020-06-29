import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/Services/Language/language.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

  public scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
}
