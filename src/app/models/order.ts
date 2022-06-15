import { User } from "./user";

export class Order{
  order_id : number = 0;
  user ?: User = new User();
  status_id : number = 0;
  created_at  : Date = new Date();
  modified_at : Date | null = null;
  order_amount : number = 0;
  }

