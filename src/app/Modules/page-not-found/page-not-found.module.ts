import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { ShowErrorMessageComponent } from './show-error-message/show-error-message.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from 'src/app/Guards/auth-guard.guard';



@NgModule({
  declarations: [ShowErrorMessageComponent],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    SharedModule
  ],
  providers: [AuthGuard]
})
export class PageNotFoundModule { }
