import { Injectable } from '@angular/core';
import { NotificationComponent } from '../components/shared/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor() { }

  showNotification(state:string, title:string, message:string){
    NotificationComponent.showNotification(state, title, message);
  }
}
