import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { CreatePostPayload } from 'src/app/service/createPostPayload';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  public createPostForm: any
  public createPostPayload: CreatePostPayload

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
    ) {
    this.createPostPayload = {
      title: '',
      url: '',
      description: ''
    }
  }

  public ngOnInit(): void {
    this.createPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  public discardPost(){
    this.router.navigateByUrl('/home')
  }

  public createPost(){
    this.createPostPayload.title = this.createPostForm.get('title').value
    this.createPostPayload.url = this.createPostForm.get('url').value

    this.authService.createPost(this.createPostPayload)
    .subscribe(() => {
      this.toastr.success('Successfully');
      this.router.navigateByUrl('/home')
    }, () => {
      this.toastr.error('Sign up Fail', 'Try Again');
    });
  }
}
