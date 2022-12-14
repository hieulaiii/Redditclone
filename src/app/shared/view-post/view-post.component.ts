import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  public posts :any;

  // public commentForm: any;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {

    // this.commentForm = new FormGroup({
    //   text: new FormControl('', Validators.required)
    // });
  }

  ngOnInit(): void {
    // this.commentForm = this.formBuilder.group({
    //   text: ['', Validators.required]
    // })

    this.authService.getSubReddit().subscribe(posts =>{
        this.posts = posts

      })
  }

  clearSubReddit(){
    this.posts.shift()
  }
}
