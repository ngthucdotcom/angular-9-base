import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from '../errors/not-found/not-found.component';
import {DemoModuleComponent} from './demo-module/demo-module.component';

const subRoutes: Routes = [
  {path: '', redirectTo: 'demo', pathMatch: 'full'},
  {
    path: '',
    children: [
      {path: 'demo', component: DemoModuleComponent},
      {path: '**', component: NotFoundComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(subRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SubRoutingModule {
}
