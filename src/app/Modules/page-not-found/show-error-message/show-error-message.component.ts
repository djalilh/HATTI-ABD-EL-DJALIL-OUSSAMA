import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/Services/Language/language.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-error-message',
  templateUrl: './show-error-message.component.html',
  styleUrls: ['./show-error-message.component.css']
})
export class ShowErrorMessageComponent implements OnInit {


  public ErrorStatus: string = "404";
  public PossibleErrorStatus: string[] = ['404', '500']
  public ErrorMessage = {
    '404' : {
      'fr' : 'Page non trouvée',
      'ar' : 'الصفحة غير موجودة',
    },
    '500' : {
      'fr' : 'Erreur Interne du Serveur',
      'ar' : 'خطأ في الخادم الداخلي',
    },
  }

  constructor(public route: ActivatedRoute,
    public languageService: LanguageService,
    public location: Location) { }

  ngOnInit() {
    this.InitErrorStatus()
  }
  private InitErrorStatus(){
    if( this.PossibleErrorStatus.indexOf(this.route.snapshot.paramMap.get('errorStatus')) != -1 ){
      this.ErrorStatus = this.route.snapshot.paramMap.get('errorStatus')
    }else{
      this.ErrorStatus = '404'
    }
  }

  public GoBack(){
    this.location.back()
  }

}
