import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";

import {ITokens, IUser} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _accessTokenKey = 'access'
  private _refreshTokenKey = 'refresh'
  private _userName = new BehaviorSubject<string | null>(null)

  constructor(private httpClient: HttpClient) {
  }

  register(user: IUser): Observable<any> {
    return this.httpClient.post<any>(urls.auth.register, user)
  }

  login(user: IUser): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.auth.login, user).pipe(
      tap((tokens) => {
        this._userName.next(user.username);
        this._setTokens(tokens)
      })
    )
  }

  refresh(refresh: string): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.auth.refresh, {refresh}).pipe(
      tap((tokens) => {
        this._setTokens(tokens)
      })
    )
  }

  getUserName(): Observable<string | null> {
    return this._userName.asObservable()
  }

  private _setTokens({access, refresh}: ITokens): void {
    localStorage.setItem(this._refreshTokenKey, refresh)
    localStorage.setItem(this._accessTokenKey, access)
  }

  deleteTokens(): void {
    localStorage.removeItem(this._accessTokenKey);
    localStorage.removeItem(this._refreshTokenKey);
  }

  getAccessToken(): string {
    return localStorage.getItem(this._accessTokenKey) || "";
  }

  getRefreshToken(): string {
    return localStorage.getItem(this._refreshTokenKey) || '';
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken()
  }

}
