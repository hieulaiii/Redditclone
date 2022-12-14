import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignupRequestPayload } from '../../service/signupRequestPayload';
import { CreateRedditPayload } from 'src/app/service/creatSubRedditPayload';
import { CreatePostPayload } from 'src/app/service/createPostPayload';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.http.post('http://localhost:3000/signups', signupRequestPayload);
  }

  login(loginRequestPayload: any) {
    // throw new Error('Method not implemented.');
    return this.http.get('https://dummyjson.com/users', loginRequestPayload);
  }

  createReddit(createRedditPayload: CreateRedditPayload): Observable<CreateRedditPayload> {
    return this.http.post<CreateRedditPayload>('http://localhost:3000/subreddits', createRedditPayload);
  }

  getSubReddit(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/subreddits', this.httpOptions)
  }

  createPost(createPostPayload: CreatePostPayload) : Observable<any>{
    return this.http.post('http://localhost:3000/posts', createPostPayload)
  }

  getPost(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/posts', this.httpOptions)
  }
}
