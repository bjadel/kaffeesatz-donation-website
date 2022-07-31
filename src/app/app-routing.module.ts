import { NgModule } from '@angular/core';
import { DonateComponent } from './page/donate/donate.component';
import { HomeComponent } from './page/home/home.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { ImpressumComponent } from './page/impressum/impressum.component';
import { VereinComponent } from './page/verein/verein.component';
import { EventsComponent } from './page/events/events.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "donate", component: DonateComponent },
  { path: "impressum", component: ImpressumComponent },
  { path: "verein", component: VereinComponent },
  { path: "events", component: EventsComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
