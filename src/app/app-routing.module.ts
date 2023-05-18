import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { DogProfileComponent } from './modules/dog-profile/dog-profile.component';

const routes: Routes = [
  { path: 'adoptionsite/landing-page', component: LandingPageComponent },
  { path: 'adoptionsite/dog-profile', component: DogProfileComponent },
  { path: 'adoptionsite', redirectTo: 'adoptionsite/landing-page', pathMatch: 'full' },
  { path: '', redirectTo: 'adoptionsite/landing-page', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
