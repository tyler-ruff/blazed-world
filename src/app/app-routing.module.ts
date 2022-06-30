import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DevComponent } from './dev/dev.component';
import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';
import { SolutionComponent } from './solution/solution.component';
import { UnknownComponent } from './unknown/unknown.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'dev', component: DevComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
