export class Ingredient {

    constructor (public name: string) {}
 
    toForm(): string {
       return `name=${this.name}}`;
    }
 }
 