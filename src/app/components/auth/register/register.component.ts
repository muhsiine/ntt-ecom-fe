import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new  FormGroup({
    firstname : new  FormControl(null, Validators.required),
    lastname : new FormControl(null,Validators.required),
    email : new FormControl(null,[Validators.required,Validators.email]),
    phonenumber: new FormControl (null,
    [
      Validators.required,
      Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
    ]),
    password: new  FormControl(null, Validators.required),
    repassword: new  FormControl(null, Validators.required),
  })

get f(): any
{
    return this.registerForm.controls;
}


  ngOnInit(): void {

  }

  clicksub(){
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

}
