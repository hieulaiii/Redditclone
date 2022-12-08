import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './shared/create-post/create-post.component';
import { CreateSubredditComponent } from './shared/create-subreddit/create-subreddit.component';
import { ViewPostComponent } from './shared/view-post/view-post.component';

const routes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'createPost', component: CreatePostComponent},
  {path: 'createSubreddit', component: CreateSubredditComponent},
  {path: 'viewPost', component: ViewPostComponent},
  {path: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
