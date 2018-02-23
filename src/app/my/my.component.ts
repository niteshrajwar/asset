import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import{UserService} from '../user.service';
import {User} from '../user';
@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent {

  
   uname= new FormControl("",	[Validators.required]);

 pwd =new FormControl("",[Validators.required]);


 loginform : FormGroup
constructor (private fb: FormBuilder
,private userservice:UserService){
 this.loginform=this.fb.group({
 	uname :this.uname,
 	pwd: this.pwd
 });
}
users :User[]=[];

   ngOnInit() {
    this.getUsers();
  }
 getUsers(): void {
          
          this.userservice.getUsers()
          .subscribe(users=>this.users=users);
          console.log("successfull"+this.users);

}
signing(uname:string,password:string){
var a=0;
var b=0;
    for(let us of this.users){
        if(us.username==uname){
          if(us.password==password){
            alert("welcome"+" "+us.username);
            document.getElementById("success").innerHTML="";
            a++;
             break;
          }
          
            
        }
        
    }
    if(a==0){
              document.getElementById("error").innerHTML="<span class='alert alert-danger'>Wrong credentials Please try again</span>";  
      }
   
}
}