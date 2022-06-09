import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardResponsableComponent } from './board-responsable/board-responsable.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {InfosLaboratoiresComponent} from "./board-admin/infos-laboratoires/infos-laboratoires.component";
import {InfosLabosCompletesComponent} from "./board-admin/infos-labos-completes/infos-labos-completes.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardResponsableComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'admin/infos-labos', component: InfosLaboratoiresComponent},
  { path: 'admin/infos-completes-labo', component: InfosLabosCompletesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
