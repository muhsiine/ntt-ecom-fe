import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    password?.value === confirmPassword?.value ? null : { passwordNotMatched: true };
    if(password?.value !== confirmPassword?.value){
      control.get('confirmPassword')?.setErrors({ passwordNotMatch: true });
    } else {
      control.get('confirmPassword')?.setErrors(null);
    }
    return null;
  };
  
  registerForm = new FormGroup({
    firstname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phonenumber: new FormControl(null,
      [
        Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]),
    username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(null, [Validators.required]),
  }, {
    validators: this.passwordMatchingValidatior
  })

  ngOnInit(): void {

  }

  get f(): any {
    return this.registerForm.controls;
  }

  private validate(): void {
    if(this.registerForm.status === 'INVALID'){
      this.registerForm.markAllAsTouched();
      console.log(this.f)
      return;
    }
  }

  onRegisterSubmit() {
    this.validate();
  }

}
