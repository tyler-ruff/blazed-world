import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponent } from './dev/dev.component';
import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';
import { UnknownComponent } from './unknown/unknown.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
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
