import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { RecipeService } from "app/services/recipe.service";
import "rxjs/Rx";
import { Recipe } from "app/recipes/recipe.model";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class DataStorageService {
    
    constructor(private http: Http,
                private recipeService: RecipeService,
                private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-fcb84.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.http.get('https://ng-recipe-book-fcb84.firebaseio.com/recipes.json?auth=' + token)
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                },
                err => console.log(err)
            );
    }
}