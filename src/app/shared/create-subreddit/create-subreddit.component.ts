import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateRedditPayload } from 'src/app/service/creatSubRedditPayload';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css']
})
export class CreateSubredditComponent implements OnInit {
  public createSubredditForm: any;
  public createRedditPayload: CreateRedditPayload;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createRedditPayload = {
      title: '',
      description: ''
    }
  }

  ngOnInit() {
    this.createSubredditForm = this.formBuilder.group({
      title: [''],
      description: ['']
    })
  }

  discard() {
    this.router.navigateByUrl('/home');
  }

  createSubreddit() {
    this.createRedditPayload = this.createSubredditForm.get('title').value;
    this.createRedditPayload = this.createSubredditForm.get('description').value;

  }
}
