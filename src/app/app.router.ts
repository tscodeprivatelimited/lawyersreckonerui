import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DailymattersComponent } from "./dailymatters/dailymatters.component";
import { LoginComponent } from './login/login.component';
import { ClientinformationComponent } from './clientinformation/clientinformation.component';


const router: Routes = [
      { path: 'header', component: HeaderComponent},
      {path: 'dailymatters', component: DailymattersComponent},
      {path: 'login', component: LoginComponent},
      {path: 'clientinformation', component: ClientinformationComponent}
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);