import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { DogProfileComponent } from './modules/dog-profile/dog-profile.component';

const routes: Routes = [
  { path: 'AdoptionSite/adoptionsite/landing-page', component: LandingPageComponent },
  { path: 'AdoptionSite/adoptionsite/dog-profile', component: DogProfileComponent },
  { path: 'AdoptionSite/adoptionsite/', redirectTo: 'AdoptionSite/adoptionsite/landing-page', pathMatch: 'full' },
  { path: '', redirectTo: 'AdoptionSite/adoptionsite/landing-page', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
