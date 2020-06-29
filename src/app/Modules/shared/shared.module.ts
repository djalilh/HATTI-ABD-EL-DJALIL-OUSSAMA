import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateToPipe } from 'src/app/Pipes/translate-to.pipe';
import { DinarPipe } from 'src/app/Pipes/dinar.pipe';
import { DateFormatToPipe } from 'src/app/Pipes/date-format-to.pipe';



@NgModule({
  declarations: [TranslateToPipe, DinarPipe, DateFormatToPipe],
  imports: [
    CommonModule
  ],
  exports:[
    TranslateToPipe,
    DinarPipe,
    DateFormatToPipe
  ]
})
export class SharedModule { }
