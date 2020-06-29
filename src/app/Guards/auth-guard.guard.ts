import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router){}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    
    if(next.routeConfig.path == 'login'){
      if(localStorage.getItem('isLogedIn') == 'false' || !localStorage.getItem('isLogedIn')){
        return true
      }else{
        this.router.navigate(['/companies'])
      }
    }else{
      if(localStorage.getItem('isLogedIn') == 'true'){
        return true
      }else{
        this.router.navigate(['/login'])
      }
    }
    
  }
  
}
