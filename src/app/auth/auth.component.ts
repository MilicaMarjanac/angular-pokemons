import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../pokemons/models/user';
import { AuthResponse } from './models/authResponse';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  public user: User;
  public queryParamUrl: string | null;

  constructor(
    private authService: AuthService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user = {
      email: '',
      password: '',
    };

    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.queryParamUrl = params.get('queryParamUrl');
    });
  }

  public onSubmit(form: any) {
    if (form.valid) {
      this.authService.checkCredentials(form.value).subscribe(
        (response: AuthResponse) => {
          this.authService.storeTokens({
            id: response.idToken,
            refresh: response.refreshToken,
          });

          const route =
            this.queryParamUrl !== null
              ? ['home', this.queryParamUrl]
              : ['home'];
          this.router.navigate(route);
        },
        (errorMessage: HttpErrorResponse) => {
          this.router.navigate(['auth']);
          alert(errorMessage.error.error.message);
        }
      );
    }
  }
}
