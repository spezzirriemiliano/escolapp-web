import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppMaterialModules } from './app.material.modules'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
