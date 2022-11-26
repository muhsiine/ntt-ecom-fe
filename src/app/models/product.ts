import { User } from "./user";
import { CategoryByLang } from './categoryByLang';
import { Image } from "./image";

export class Product{
  id : number = 0;
  name : string = '';
  description : string = '';
  category : CategoryByLang = new CategoryByLang();
  price  : number = 0;
  nmAvailableItems: number = 0;
  images: Image[] = new Array;
  quantity: number = 0;
  created_at : Date = new Date();
  modified_at : Date | null = null;
  deleted_at : Date | null = null;
  user ?: User = new User();
  isChecked?: Boolean = false;
}
