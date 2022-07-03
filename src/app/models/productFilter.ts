export class ProductFilter{
    name?: string;
    description?: string;
    categoryId?: number;
    initialDate?: Date ;
    endDate?: Date ;
    price1 ?: number;
    price2?: number;

    constructor();
    constructor(name: string, description: string, categoryId: number,
        initialDate: Date, endDate: Date, price1: number, price2: number);

    constructor(name?: string, description?: string, categoryId?: number,
         initialDate?: Date, endDate?: Date, price1?: number, price2?: number){
        this.name=name;
        this.description=description;
        this.categoryId= categoryId;
        this.initialDate= initialDate;
        this.endDate= endDate;
        this.price1= price1;
        this.price2= price2;
    }
}