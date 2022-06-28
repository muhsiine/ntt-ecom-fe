import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-forget-password',
    templateUrl: './forget-password.component.html',
    styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
    
    forgetPasswordForm = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email])
    });
    
    constructor() {
        //
    }
    
    ngOnInit(): void {
    }
    
    public get forgetPasswordFormValidator() : any {
        return this.forgetPasswordForm.controls;
    }

}
