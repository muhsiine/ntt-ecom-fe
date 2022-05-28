import { Category } from "./category";
import { User } from "./user";

export interface Product{
  product_id : number;
  name : string;
  description : string;
  category : Category;
  price  : number;
  quantity : number;
  created_at : Date ;
  modified_at : Date | null;
  deleted_at : Date | null;
  user ?: User
}