import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryMockService {

  constructor() { };

  private mockOrder: Category[] = [
    {
      category_id : 1, 
      name : "PHONES"
        
    },
    {
      category_id : 2, 
      name : "PC"
    }
];
}
