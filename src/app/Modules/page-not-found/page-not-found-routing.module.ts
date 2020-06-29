import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowErrorMessageComponent } from './show-error-message/show-error-message.component';
import { AuthGuard } from 'src/app/Guards/auth-guard.guard';


const routes: Routes = [
  {path: 'PageNotFound/:errorStatus', component: ShowErrorMessageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
