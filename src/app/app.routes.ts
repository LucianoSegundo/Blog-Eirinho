import { Routes } from '@angular/router';
import { HomeComponent } from './pagina/home/home.component';
import { PaginaComponent } from './pagina/pagina/pagina.component';

export const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'artigo/:id', component:PaginaComponent},
{path:"**", redirectTo:'/home', pathMatch:'full'}
];
 