import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./core/home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { BlogComponent } from "./blog/blog.component";
import { ResumeComponent } from "./resume/resume.component";
import { ProjectsComponent } from "./projects/projects.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    { path: 'projects', component: ProjectsComponent },    
    { path: 'contact', component: ContactComponent },
    { path: 'resume', component: ResumeComponent },    
    { path: 'blog', component: BlogComponent },
    
 // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}