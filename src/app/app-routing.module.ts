import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { DogProfileComponent } from './dog-profile/dog-profile.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'dog-profile', component: DogProfileComponent },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
