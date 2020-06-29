import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/Services/Language/language.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
