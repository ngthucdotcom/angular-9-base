import {NgModule} from '@angular/core';
import {SubRoutingModule} from './sub-routing.module';
import { DemoModuleComponent } from './demo-module/demo-module.component';

@NgModule({
  declarations: [
    DemoModuleComponent
  ],
  imports: [
    SubRoutingModule,
  ],
  providers: []
})
export class SubModule {
}
