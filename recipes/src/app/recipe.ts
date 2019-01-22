import { Ingredient } from "./ingredient";

export class Recipe {

    constructor (public name: string, public calories: number, public ingredients: string , public time: number) {}
 
    toForm(): string {
       return `name=${this.name}&calories=${this.calories}&ingredients=${this.ingredients}&time=${this.time}`;
    }
 }
 