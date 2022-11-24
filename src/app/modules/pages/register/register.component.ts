import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'
// import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  // ngx-intl-tel-input
  separateDialCode = false;
  // SearchCountryField = SearchCountryField;
  // CountryISO = CountryISO;
  // PhoneNumberFormat = PhoneNumberFormat;
  // preferredCountries: CountryISO[] = [
  //   CountryISO.Morocco
  // ];

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
  
  registerForm = new UntypedFormGroup({
    firstname: new UntypedFormControl(null, [Validators.required, Validators.minLength(3)]),
    lastname: new UntypedFormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new UntypedFormControl(null, [Validators.required, Validators.email]),
    phonenumber: new UntypedFormControl(null, [Validators.required]),
    username: new UntypedFormControl(null, [Validators.required, Validators.minLength(6)]),
    password: new UntypedFormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new UntypedFormControl(null, [Validators.required]),
  }, {
    validators: this.passwordMatchingValidatior
  })

  ngOnInit(): void {

  }

  get f(): any {
    return this.registerForm?.controls;
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
