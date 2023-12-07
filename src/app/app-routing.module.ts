import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageJeuComponent } from './page-jeu/page-jeu.component';

const routes: Routes = [
  {path: 'game', component: PageJeuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
