import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloComponent } from './components';
import { HelloService } from './services';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    HelloComponent,
  ],
  entryComponents: [
  ],
  declarations: [
    HelloComponent,
  ],
  providers: [
    HelloService,
  ],
})
export class PackageModule {
}
