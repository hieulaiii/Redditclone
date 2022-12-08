import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.css']
})
export class SubredditSideBarComponent implements OnInit{
  constructor(private router: Router){}

  ngOnInit(): void {

  }

  viewPost(){
    this.router.navigateByUrl('/viewPost')
  }
}
