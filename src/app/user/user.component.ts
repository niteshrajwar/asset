import { JsonPipe } from '@angular/common/src/pipes/json_pipe';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, PatternValidator } from '@angular/forms';
import {FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {UserService} from '../user.service';
import {User} from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
unamePattern = "^[a-z0-9_-]{8,15}$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mnoPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
fname=new FormControl("",[Validators.required,Validators.minLength(4)]);
uname= new FormControl("",	[Validators.required,Validators.pattern(this.unamePattern)]);

pwd =new FormControl("",[Validators.required,Validators.pattern(this.pwdPattern)]);

cpwd =new FormControl("",[]);
email =new FormControl("",[Validators.required,Validators.pattern(this.emailPattern)]);
mno =new FormControl("",[Validators.maxLength(10),Validators.required,Validators.pattern(this.mnoPattern)]);
signupform : FormGroup;
post:any;
constructor (private fb: FormBuilder,private userservice:UserService){
this.signupform=this.fb.group({\
  fname:this.fname,
	uname :this.uname,
	pwd: this.pwd,
  cpwd:this.cpwd,
  email:this.email,
  mno:this.mno
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
// add(username: string,password:string,email:string,mobileno:number): void {
    
//     if (!username) { return; }
//     this.userservice.addUser({ username,password,email,mobileno } as User)
//       .subscribe(user => {
//         this.users.push(user);
//       });
//   }
  
  validate_password():boolean{
  
  if(this.pwd.value==this.cpwd.value){
             return true;
  }
  else return false;
  
 }

 validate_signup():boolean{
  var c=0;
 var username:string=this.uname.value;
 username=username.trim();
 var password:string=this.pwd.value;
 password=password.trim();
  var email:string=this.email.value;
  email=email.trim();
 var mobileno:number=this.mno.value;
 // var cp:boolean=false;
 console.log(username,password,email,mobileno);
 
 
  
       for(let us of this.users){
         if(this.uname.value==us.username) {
           c++;
         }
       }
         if(c>0){
           // document.getElementById("error1").innerHTML="<span class='alert alert-danger'>user already exist</span>";
            return true;
             
         }
         else {
           if (!username) { return; }
           else{
          alert("account created!!");
          this.userservice.addUser({ username,password,email,mobileno} as User)
       .subscribe(user => {
        this.users.push(<User> {
                       username: username,
                       password:password,
                       email:email,
                       mobileno:mobileno
                     });
        /*
         add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

        
        
        
        
        */    
        
      });
         }
         }  



}
}
