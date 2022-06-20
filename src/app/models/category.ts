import { Language } from "./language";

export class Category{
  id : number = 0;
  categoryCode : string = '';
  icon : string = '';
  languages : Language[] = [];
}