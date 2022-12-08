import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  public commentForm: any;

  constructor(private activateRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      text: ['', Validators.required]
    })
  }

  public postComment(){}

}
