import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe:FormGroup;
  //recipes:Recipe[];
  recipes:Recipe;

  constructor() { }

  ngOnInit() {
    this.recipe = new FormGroup({
      name: new FormControl(),
      calories: new FormControl(),
      ingredients: new FormControl(),
      time: new FormControl()
      
    });
  }

  onSubmit({ value }: { value: Recipe}) {
    
    for (var key in localStorage){
      if(value.name == key) {
       for (var i = 0; i < localStorage.length; i++){
        this.recipes = JSON.parse(localStorage.getItem(localStorage.key(i)));
            
      } }
      else {
      localStorage.setItem(value.name, JSON.stringify({value}));
      }

   }

   
  }

   /*for (var i = 0; i < localStorage.length; i++){
              this.recipes.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            
      }   */
  
}



