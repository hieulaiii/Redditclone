import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  public createPostForm: any

  constructor(private formBuilder: FormBuilder ,private router: Router){}

  ngOnInit(): void {
    this.createPostForm = this.formBuilder.group({
      postName: [''],
      url: [''],
      subredditName: ['']
    })
  }


  discardPost(){
    this.router.navigateByUrl('/home')
  }
}
