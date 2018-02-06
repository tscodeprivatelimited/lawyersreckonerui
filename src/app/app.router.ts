import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const router: Routes = [
      { path: 'header', component: HeaderComponent }
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);