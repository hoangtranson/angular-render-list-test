import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalListComponent } from './pages/normal-list/normal-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'normal-list', component: NormalListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
