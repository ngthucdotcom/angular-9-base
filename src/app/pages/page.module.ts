import {NgModule} from '@angular/core';
import {PageRoutingModule} from './page-routing.module';
import { DemoPageComponent } from './demo-page/demo-page.component';

@NgModule({
  declarations: [
    DemoPageComponent
  ],
  imports: [
    PageRoutingModule,
  ],
  providers: []
})
export class PageModule {
}
