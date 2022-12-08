import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { CreateRedditPayload } from 'src/app/service/creatSubRedditPayload';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css']
})
export class CreateSubredditComponent implements OnInit {
  public createSubredditForm: any;
  public createRedditPayload: CreateRedditPayload;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService) {
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
    this.createRedditPayload.title = this.createSubredditForm.get('title').value;
    this.createRedditPayload.description = this.createSubredditForm.get('description').value;

    this.authService.createReddit(this.createRedditPayload)
    .subscribe(() => {
      this.toastr.success('Let see your post','Post subReddit Success');
      this.router.navigateByUrl('/viewPost')
    }, () => {
      this.toastr.error('Sign up Fail', 'Try Again');
    });

  }
}
