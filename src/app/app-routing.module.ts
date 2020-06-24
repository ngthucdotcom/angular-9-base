import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {ServerErrorComponent} from './errors/server-error/server-error.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {ForbidenComponent} from './errors/forbiden/forbiden.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {
    path: 'modules',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/sub.module').then(m => m.SubModule),
  },
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/page.module').then(m => m.PageModule),
  },
  {path: '500', component: ServerErrorComponent},
  {path: '403', component: ForbidenComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
