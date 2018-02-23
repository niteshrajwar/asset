import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MyComponent } from './my/my.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserService} from './user.service';
import { HttpModule}    from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    
    UserComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
HttpModule,HttpClientModule,HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
