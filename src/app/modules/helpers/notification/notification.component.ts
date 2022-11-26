import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  static parentCss = '';
  static iconTitleCss = '';
  static icon = '';
  static messageCss = '';
  static parentVisibility = ' opacity-0 invisible';
  static notifTitle = '';
  static notifMessage = '';
  static timeout:any = null;

  get getParentCss(){
    return NotificationComponent.parentCss;
  }
  get getIconTitleCss(){
    return NotificationComponent.iconTitleCss;
  }
  get getIcon(){
    return NotificationComponent.icon;
  }
  get getMessageCss(){
    return NotificationComponent.messageCss;
  }
  get getParentVisibility(){
    return NotificationComponent.parentVisibility;
  }
  get getNotifMessage(){
    return NotificationComponent.notifMessage;
  }
  get getNotifTitle(){
    return NotificationComponent.notifTitle;
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  static getClasses(state:string){
    switch(state){
      case 'warning':
        this.parentCss = ' border-yellow-500 bg-yellow-300 ';
        this.iconTitleCss = ' text-yellow-600 ';
        this.icon = 'bi-exclamation-triangle';
        this.messageCss = '';
        break;
      case 'info':
        this.parentCss = ' border-blue-500 bg-blue-300 ';
        this.iconTitleCss = ' text-blue-600 ';
        this.icon = 'bi-info-circle-fill';
        this.messageCss = '';
        break;
      case 'success':
        this.parentCss = ' border-green-500 bg-green-300 ';
        this.iconTitleCss = ' text-green-600 ';
        this.icon = 'bi-check2-circle';
        this.messageCss = '';
        break;
      default:
        this.parentCss = ' border-red-500 bg-red-300 ';
        this.iconTitleCss = ' text-red-600 ';
        this.icon = 'bi-x-circle';
        this.messageCss = '';
        break;
    }
  }

  static showNotification(state:string, title:string, message:string){
    this.parentVisibility = ' opacity-90 visible';
    this.getClasses(state);
    this.notifTitle = title;
    this.notifMessage = message;
    if(this.timeout != null){
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(()=>{
      this.parentVisibility = ' opacity-0 invisible';
      clearTimeout(this.timeout)
    }, 3000);
  }

}
