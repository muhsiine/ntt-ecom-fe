import { User } from "./user";

export interface Order{
  order_id : number; 
  user ?: User; 
  status_id : number;
  created_at  : Date;
  modified_at : Date | null;
  order_amount : number;
  }