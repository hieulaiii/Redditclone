import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { LoginRequestPayload } from '../../service/LoginRequestPayload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: any
  public loginRequestPayload: LoginRequestPayload

  public registerSuccessMessage: string | undefined;

  public isError: boolean | undefined;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private toastr: ToastrService,
  )
  {
    this.loginRequestPayload = {
      username: '',
      password: '',
    };
  }

  public ngOnInit(): void {
     this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.activedRoute.queryParams
      .subscribe(params => {
        if (params['registered'] !== undefined && params['registered'] === 'true') {
          this.toastr.success('Signup Successful');
          this.registerSuccessMessage = 'Please Check your inbox for activation email '
            + 'activate your account before you Login!';
        }
      }
      );
  }

   login(){

    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginRequestPayload).subscribe((data: any) => {
      if (this.loginForm.get('username').value == 'hieulai') {
        this.toastr.success('Login Successful');
        this.router.navigateByUrl('/home');
      } else {
        this.toastr.error('Login Fail, Please Try Again');
        this.isError = true;
      }
    });
  }


}

