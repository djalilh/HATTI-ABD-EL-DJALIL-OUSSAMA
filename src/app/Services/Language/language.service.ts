import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {


  currentLanguage: string = 'en';

  constructor() { }

  public getCurrentLanguage(): string{
    return this.currentLanguage;
  }

  public ChangeToArabe(){
    this.currentLanguage = 'ar';
  }

  public ChangeToFrench(){
    this.currentLanguage = 'fr';
  }

  public ChangeToEnglish(){
    this.currentLanguage = 'en';
  }
}
