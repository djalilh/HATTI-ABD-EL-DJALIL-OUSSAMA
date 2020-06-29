import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dinar'
})
export class DinarPipe implements PipeTransform {

  transform(value: string, lang: string): string {
    if(lang == 'ar'){
      return value.replace('$', '') + 'دج'
    }else if(lang == 'fr'){
      return value.replace('$', '') + 'DA'
    }else{
      return value.replace('$', '')
    }
  }

}
