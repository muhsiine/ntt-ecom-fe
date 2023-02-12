import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { NotifierService } from 'src/app/services/notifier.service';
import { SharedModule } from '@modules/shared/shared.module'

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    SharedModule
  ]
})
export class LoginComponent implements OnInit {

  user:User = new User();
  messageError:string = "";

  constructor(private notifierService: NotifierService, private router: Router) {
   }

  ngOnInit(): void {
  }

  onLoginClick(): void{
    this.messageError = "";
    if(this.user.username.toUpperCase() === "ADMIN" && this.user.password === "admin"){
      this.router.navigate(['/product']);
      return;
    }
    this.user.password = "";
    this.messageError = "Username/password incorrect";
  }

  onGoogleLoginClick(): void{
    this.router.navigate(['/product']);
  }

}
