import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';

import { WelcomeComponent } from './app';
import { PackageModule } from '../src/package.module';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,

    // Package module
    PackageModule,
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
