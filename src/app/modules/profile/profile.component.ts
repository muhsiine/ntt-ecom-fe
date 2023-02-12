import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    CommonModule
  ]
})
export class ProfileComponent implements OnInit {

  userName: string = "Yassir EL REKLAOUI";
  constructor() { }

  ngOnInit(): void {
  }

}
