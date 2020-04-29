import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddHeroComponent} from './add-hero/add-hero.component';
import {HeroListComponent} from './hero-list/hero-list.component';


const routes: Routes = [
	{path:'', redirectTo: '/hero-list', pathMatch: 'full'},
	{path:'hero-list', component: HeroListComponent},
	{path:'add-hero', component: AddHeroComponent},
	{path:'hero-edit/:id', component: AddHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
