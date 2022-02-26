import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthenticationGuard], children: [] },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
