import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private userService: UserService,
    private router: Router ) {}

  canActivate(next: ActivatedRouteSnapshot) {

    return this.userService.validarToken(next.data.roles)
      .pipe(
        tap( autenticationToken =>  {
          if ( !autenticationToken ) {
            this.router.navigateByUrl('/login');
          }
        })
      );

  }
  
}
