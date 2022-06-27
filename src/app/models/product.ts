import { Category } from "./category";
import { User } from "./user";
import { CategoryByLang } from './categoryByLang';

export class Product{
  id : number = 0;
  name : string = '';
  description : string = '';
  category : CategoryByLang = new CategoryByLang();
  price  : number = 0;
  quantity : number = 0;
  created_at : Date = new Date();
  modified_at : Date | null = null;
  deleted_at : Date | null = null;
  user ?: User = new User();
}