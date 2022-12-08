import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.css']
})
export class SubredditSideBarComponent implements OnInit{
  public title = ''
  public url = ''

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.authService.getPost().subscribe(posts =>{
      posts.forEach((post: any) => {
        this.title = post.title
        this.url = post.url
      })
    })

  }

  clearAll(){
    this.title = ''
    this.url = ''
  }

  viewPost(){
    this.router.navigateByUrl('/viewPost')
  }
}
