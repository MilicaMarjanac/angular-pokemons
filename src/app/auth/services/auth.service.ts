import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/pokemons/models/user';
import { AuthResponse } from '../models/authResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public checkCredentials(credentials: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.API_KEY}`,
      {
        email: credentials.email,
        password: credentials.password,
        returnSecureToken: true,
      }
    );
  }

  public storeTokens(tokens: { id: string; refresh: string }): void {
    for (const [key, value] of Object.entries(tokens)) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  /* this method doesn't manage token expiration */
  public get isUserLoggedIn(): boolean {
    const storedToken = sessionStorage.getItem('id');
    if (
      storedToken !== null &&
      storedToken !== '' &&
      storedToken !== 'undefined' &&
      storedToken.includes('"')
    ) {
      return true;
    }
    return false;
  }
}
