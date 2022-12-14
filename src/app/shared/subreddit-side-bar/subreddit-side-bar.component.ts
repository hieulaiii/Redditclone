
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
  public posts: any
  public selectedPost = ''

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.authService.getPost().subscribe(posts =>{
      this.posts = posts
    })
  }

  clear(){
    this.posts.pop()
  }

  viewPost(){
    this.router.navigateByUrl('/viewPost')
  }
}
