import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardResponsableComponent } from './board-responsable/board-responsable.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { InfosLaboratoiresComponent} from "./board-admin/infos-laboratoires/infos-laboratoires.component";
import {TableModule} from "primeng/table";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {SliderModule} from "primeng/slider";
import {ProgressBarModule} from "primeng/progressbar";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InfosLabosCompletesComponent} from "./board-admin/infos-labos-completes/infos-labos-completes.component";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputNumberModule} from "primeng/inputnumber";
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";
import { BpParAnnee } from './pipes/bp-annee';
import { BParAnnee } from './pipes/b-annee.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardResponsableComponent,
    BoardUserComponent,
    InfosLaboratoiresComponent,
    InfosLabosCompletesComponent,
    BpParAnnee,
    BParAnnee,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    ConfirmDialogModule,
    DialogModule,
    CardModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
