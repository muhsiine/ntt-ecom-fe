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

    return password?.value === confirmPassword?.value ? null : { notmatched: true };
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

  onRegisterSubmit() {
    console.log(this.registerForm);
    console.log(this.registerForm.value);
  }

}
