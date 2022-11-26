import { Injectable } from '@angular/core';
import { NotificationComponent } from '../modules/helpers/notification/notification.component';
import { Notifier } from '../models/notifier';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor() { }

  showNotification(err: any): void;
  showNotification(err:Notifier, title:string, message:string): void;

  showNotification(err:any | Notifier, title?:string, message?:string){
    if (title !== undefined && message !== undefined) {
      NotificationComponent.showNotification(err, title, message);
    }
    else{
      NotificationComponent.showNotification(Notifier.ERROR,  err.statusText, err.message);
    }
  }
 
}
