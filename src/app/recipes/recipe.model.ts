import { Ingredient } from '../shared/ingredient.model';

export class Recipe {


    public name:string; 
    public desc:string;
    public imgPath:string;
    public rating:string;
    public ingredients:Ingredient[];

    
    public constructor(name:string, desc:string, imgPath:string) {

        this.name=name;
        this.desc=desc;
        this.imgPath=imgPath;
        this.rating = "3";
        this.ingredients = [new Ingredient("apples", 333), new Ingredient("Mango", 1234)];

    }

}