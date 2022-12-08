import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  public title = ''
  public description = ''

  public commentForm: any;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {

    // this.commentForm = new FormGroup({
    //   text: new FormControl('', Validators.required)
    // });
  }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      text: ['', Validators.required]
    })

    this.authService.getSubReddit().subscribe(posts =>{
      posts.forEach((post: any) => {
        this.title = post.title
        this.description = post.description

      })
    })
  }

  public clearSubReddit(){
    this.title = ''
    this.description = ''
    this.router.navigateByUrl('/home')
  }

}
