import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { PageJeuComponent } from './page-jeu/page-jeu.component';
import { InputuserComponent } from './inputuser/inputuser.component';

const routes: Routes = [
  {path: 'rules', component: RulesComponent},
  {path: 'game', component: PageJeuComponent},
  {path: 'inputuser', component: InputuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
