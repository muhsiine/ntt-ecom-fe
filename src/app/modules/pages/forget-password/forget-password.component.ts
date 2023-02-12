import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { SharedModule } from '@modules/shared/shared.module';

@Component({
    standalone: true,
    selector: 'app-forget-password',
    templateUrl: './forget-password.component.html',
    styleUrls: ['./forget-password.component.scss'],
    imports: [ SharedModule ]
})
export class ForgetPasswordComponent implements OnInit {
    
    forgetPasswordForm = new UntypedFormGroup({
        email: new UntypedFormControl(null, [Validators.required, Validators.email])
    });
    
    constructor() {
        //
    }
    
    ngOnInit(): void {
    }

    onForgetPasswordForm(): void {
        this.validate();
    }
    
    private validate(): void {
        if(this.forgetPasswordForm.status === 'INVALID'){
          this.forgetPasswordForm.markAllAsTouched();
          return;
        }
    }

    public get forgetPasswordFormValidator() : any {
        return this.forgetPasswordForm.controls;
    }

}
