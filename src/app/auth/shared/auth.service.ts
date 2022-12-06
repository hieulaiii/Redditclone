import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SignupRequestPayload } from '../sign-up/SignupRequestPayload';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(loginRequestPayload: any) {
    // throw new Error('Method not implemented.');
    return this.http.post('http://localhost:3000/posts', loginRequestPayload);
  }

  constructor(private http: HttpClient) { }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.http.post('http://localhost:3000/posts', signupRequestPayload);
  }
}
