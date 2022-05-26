import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageMockService {

  constructor() { };

  private mockImage: Image[] = [
    {
      image_id : 1, 
      image_url : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315935",
      product : {
        product_id : 1,
        name : "Iphone 13",
        description : "description of iphone 13",
        category : {category_id : 1, name : "phones"},
        price  : 1000000,
        quantity : 1,
        created_at : new Date(),
        modified_at :  new Date(),
        deleted_at :  new Date()
      }
        
    },
    {
      image_id : 2, 
      image_url : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433",
      product : {
        product_id : 2,
        name : "Iphone 13 pro max",
        description : "description of iphone 13 pro max",
        category : {category_id : 1, name : "phones"},
        price  : 10000000000000,
        quantity : 1,
        created_at : new Date(),
        modified_at : new Date(),
        deleted_at : new Date()
      }
    }
];

  getImageByProduct(product_id : number) : Observable<Image>{
    return new Observable(observer => observer.next(
      (this.mockImage.find(image => image.product.product_id === product_id))
    ));
  }
}
