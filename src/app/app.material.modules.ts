import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

const materialModules = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class AppMaterialModules { }