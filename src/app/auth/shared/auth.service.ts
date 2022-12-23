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

  public signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.http.post('http://localhost:3000/signups', signupRequestPayload);
  }

  public login(): Observable<any> {
    // throw new Error('Method not implemented.');
    return this.http.get('https://dummyjson.com/users', this.httpOptions);
  }

  public createReddit(createRedditPayload: CreateRedditPayload): Observable<CreateRedditPayload> {
    return this.http.post<CreateRedditPayload>('http://localhost:3000/subreddits', createRedditPayload);
  }

  public getSubReddit(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/subreddits', this.httpOptions)
  }

  public createPost(createPostPayload: CreatePostPayload) : Observable<any>{
    return this.http.post('http://localhost:3000/posts', createPostPayload)
  }

  public getPost(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/posts', this.httpOptions)
  }
}
