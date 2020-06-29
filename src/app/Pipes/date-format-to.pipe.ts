import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import ar from '@angular/common/locales/ar';
import fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
@Pipe({
  name: 'dateFormatTo'
})
export class DateFormatToPipe implements PipeTransform {

  transform(value: any, language: string): string {
    if(language == "ar"){
      registerLocaleData(ar);
    }else if(language =="fr"){
      registerLocaleData(fr);
    }else{
      return value;
    }
    
    var datePipe = new DatePipe(language);
        value = datePipe.transform(value, 'dd MMM yyyy, h:mm');
        return value;
  }

}
