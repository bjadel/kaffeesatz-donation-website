import { NgModule } from '@angular/core';
import { DonateComponent } from './page/donate/donate.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { ImpressumComponent } from './page/impressum/impressum.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: DonateComponent },
  { path: "impressum", component: ImpressumComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
