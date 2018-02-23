import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import {UserComponent} from './user/user.component';
import {MyComponent} from './my/my.component';
const routes: Routes=[
 
 { path: '', redirectTo: ' ', pathMatch: 'full'},
  // { path: 'app', component: AppComponent },
  { path: 'user', component: UserComponent },
  { path: 'my', component: MyComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]  
})

export class AppRoutingModule { }
