import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { SignupRequestPayload } from '../../service/SignupRequestPayload';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signupForm : any

  public signupRequestPayload: SignupRequestPayload


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
    )
    {

    this.signupRequestPayload = {
      email: "",
      username: "",
      password: "",
    };
  }

  ngOnInit(): void {
    this.createForm();

  }

  public createForm(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  public onSubmit(): void {
    this.signupRequestPayload.email = this.signupForm.get('email').value;
    this.signupRequestPayload.username = this.signupForm.get('username').value;
    this.signupRequestPayload.password = this.signupForm.get('password').value;

    this.authService.signup(this.signupRequestPayload)
    .subscribe(() => {
      this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
      this.toastr.success('Sign up Success', 'Verify your email');
    }, () => {
      this.toastr.error('Sign up Fail', 'Try Again');
    });
}

}





