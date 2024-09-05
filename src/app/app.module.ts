import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdDemoModule } from './cd-demo/cd-demo.module';
import { DiDemoModule } from './di-demo/di-demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdDemoModule,
    DiDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
