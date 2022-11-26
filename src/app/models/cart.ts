import { CartItem } from "./cartItem";
import { User } from "./user";

export class Cart{
    id: number = 0;
    cartItem : CartItem[] = [];
    user ?:User = new User();

  }